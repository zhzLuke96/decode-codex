// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Keeps the composer's @-mention metadata (skills, apps, plugins, native apps)
// in sync with the available catalog, loading plugin-backed mentions lazily.
import { useEffect } from "react";
import { useIntl } from "../vendor/react-intl";
// Producer imports still being restored from sibling chunks.
import { useFeatureGate } from "../boundaries/statsig.facade";
import {
  useDirectoryApps,
  useNativeApps,
  useComposerSelector,
  useSkills,
  useAvailablePlugins,
  useNativeMcpApps,
  useResolvedAppMetadata,
  lookupDirectoryApp,
  mergePluginAppMetadata,
  selectFirstPluginWithApp,
  formatPluginMentionLabels,
} from "../boundaries/mention-metadata.facade";
import type {
  ComposerMentionController,
  DirectoryApp,
  MentionApp,
  MentionPlugin,
} from "../boundaries/mention-metadata.facade";

const SHARED_WITH_ME_CATALOG_GATE = "1269116100";

export function initMentionMetadataSyncChunk(): void {}

export interface MentionMetadataSyncProps {
  composerController: ComposerMentionController;
  hostId: string;
  roots: string[];
  shouldLoadPlugins: boolean;
}

export function MentionMetadataSync({
  composerController,
  hostId,
  roots,
  shouldLoadPlugins,
}: MentionMetadataSyncProps) {
  const { data: directoryApps } = useDirectoryApps({ hostId });
  const apps = useNativeApps({ hostId });
  const hasPluginBackedMentions = useComposerSelector(
    composerController,
    composerHasPluginBackedMentions,
  );
  const shouldRenderPluginSync = shouldLoadPlugins || hasPluginBackedMentions;
  const { isLoading, skills } = useSkills(roots, hostId);

  useEffect(() => {
    if (!isLoading) {
      composerController.syncMentionMetadata({ skills, apps });
    }
  }, [apps, composerController, isLoading, skills]);

  return shouldRenderPluginSync && directoryApps != null ? (
    <PluginMentionMetadataSync
      apps={apps}
      directoryApps={directoryApps}
      composerController={composerController}
      hostId={hostId}
      includeRemoteCatalog={hasPluginBackedMentions}
      roots={roots}
      skillsReady={!isLoading}
      skills={skills}
    />
  ) : null;
}

function composerHasPluginBackedMentions(
  controller: ComposerMentionController,
): boolean {
  return controller.hasPluginBackedMentions();
}

interface PluginMentionMetadataSyncProps {
  apps: MentionApp[];
  composerController: ComposerMentionController;
  directoryApps: DirectoryApp[];
  hostId: string;
  includeRemoteCatalog: boolean;
  roots: string[];
  skillsReady: boolean;
  skills: unknown[];
}

function PluginMentionMetadataSync({
  apps,
  composerController,
  directoryApps,
  hostId,
  includeRemoteCatalog,
  roots,
  skillsReady,
  skills,
}: PluginMentionMetadataSyncProps) {
  const intl = useIntl();
  const includeSharedWithMe = useFeatureGate(SHARED_WITH_ME_CATALOG_GATE);
  const pluginQueryOptions =
    includeSharedWithMe && includeRemoteCatalog
      ? { additionalMarketplaceKinds: ["shared-with-me"] as const }
      : { includeRemoteCatalog };

  const { availablePlugins } = useAvailablePlugins(
    hostId,
    roots,
    pluginQueryOptions,
  );

  const pluginApps = availablePlugins.flatMap((plugin) => {
    const app = lookupDirectoryApp(directoryApps, plugin.plugin);
    return app == null ? [] : [{ app, pluginId: plugin.plugin.id }];
  });

  const candidateApps = pluginApps.map(({ app }) => app);
  const resolvedApps =
    useResolvedAppMetadata({ apps: candidateApps }) ?? candidateApps;
  const resolvedAppById = new Map(resolvedApps.map(toAppEntry));
  const appByPluginId = new Map(
    pluginApps.map(({ app, pluginId }) => [
      pluginId,
      resolvedAppById.get(app.id) ?? app,
    ]),
  );

  const plugins: MentionPlugin[] = availablePlugins.map((plugin) => {
    const resolvedApp = appByPluginId.get(plugin.plugin.id);
    return resolvedApp == null
      ? plugin
      : { ...plugin, ...mergePluginAppMetadata(plugin.plugin, resolvedApp) };
  });

  const firstPluginWithApp = selectFirstPluginWithApp(availablePlugins);
  const { nativeApps } = useNativeMcpApps({
    enabled: firstPluginWithApp != null,
  });

  useEffect(() => {
    if (skillsReady) {
      composerController.syncMentionMetadata({
        skills,
        apps,
        plugins,
        nativeApps,
        pluginMentionLabels: formatPluginMentionLabels(intl),
      });
    }
  }, [
    apps,
    composerController,
    intl,
    nativeApps,
    plugins,
    skills,
    skillsReady,
  ]);

  return null;
}

function toAppEntry(app: MentionApp): [string, MentionApp] {
  return [app.id, app];
}
