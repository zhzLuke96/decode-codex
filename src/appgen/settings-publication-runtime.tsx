// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-settings-page~appgen-publication-terms-ro~g0k1g2bt-B6jrUW_u.js
// Appgen settings/publication helpers for app icons, plugin mentions, and Office app aliases.
import type { ReactElement, SVGProps } from "react";

import {
  createPluginMentionItem,
  getPluginMentionIcon,
} from "../composer/mention-item";
import { AppsIcon } from "../icons/apps-icon";
import { ChromeIcon } from "../icons/chrome-icon";
import { GithubMarkIcon } from "../icons/github-mark-icon";
import { LinkIcon } from "../icons/link-icon";
import { OpenaiBlossomIcon } from "../icons/openai-blossom-icon";
import { PencilIcon } from "../icons/pencil-icon";
import { PluginIcon } from "../icons/plugin-icon";
import {
  filesystemMediaPath,
  filesystemMediaSrc,
} from "../runtime/filesystem-media-src";
import { getSkillIcon } from "../utils/get-skill-icon";
import { scoreQueryMatch } from "../utils/score-query-match";

export type AppgenPluginDescriptor = {
  id: string;
  interface?: {
    displayName?: string | null;
    [key: string]: unknown;
  } | null;
  name: string;
};

export type AppgenPluginDisplayItem = {
  composerIconPath?: string | null;
  description?: string | null;
  displayName?: string | null;
  logoPath?: string | null;
  marketplaceName?: string | null;
  plugin: AppgenPluginDescriptor;
};

export type NativeAppDescriptor = {
  bundleId: string;
  displayName: string;
};

export type OfficeAppAlias = {
  isMentionPlugin(plugin: AppgenPluginDisplayItem): boolean;
  label: string;
  macBundleId: string;
  shortName: string;
  windowsOfficeAppIdPattern: RegExp;
  windowsOfficeDesktopAppIdPattern: RegExp;
  windowsProcessAppIdPattern: RegExp;
  windowsProcessDisplayName: string;
};

export const SPREADSHEETS_PLUGIN_NAME = "spreadsheets";
export const PRESENTATIONS_PLUGIN_NAME = "presentations";
export const APPGEN_SETTINGS_PUBLICATION_GATE_ID = "1288674243";
export const OPENAI_PRIMARY_RUNTIME_MARKETPLACE_NAME = "openai-primary-runtime";

export const AppgenSettingsPublicationIcon = AppsIcon;
export const AppgenPublicationTermsFallbackIcon = LinkIcon;
export const AppgenSettingsOpenAiIcon = OpenaiBlossomIcon;
export const AppgenSettingsChromeIcon = ChromeIcon;
export const AppgenSettingsPencilIcon = PencilIcon;
export const getAppgenSettingsFilesystemMediaPath = filesystemMediaPath;
export const getAppgenSettingsFilesystemMediaSrc = filesystemMediaSrc;
export const getAppgenSettingsPluginIcon = getSkillIcon;

export const MICROSOFT_EXCEL_ALIAS: OfficeAppAlias = {
  label: "Microsoft Excel",
  shortName: "Excel",
  macBundleId: "com.microsoft.Excel",
  windowsProcessAppIdPattern: /^process:(?:.*[\\/])?excel\.exe$/i,
  windowsProcessDisplayName: "excel",
  windowsOfficeAppIdPattern:
    /^Microsoft\.Office\.(?:EXCEL|EXCEL\.EXE)(?:\.\d+)?$/i,
  windowsOfficeDesktopAppIdPattern: /^Microsoft\.Office\.Desktop_[^!]+!Excel$/i,
  isMentionPlugin: isSpreadsheetPlugin,
};

export const MICROSOFT_POWERPOINT_ALIAS: OfficeAppAlias = {
  label: "Microsoft PowerPoint",
  shortName: "PowerPoint",
  macBundleId: "com.microsoft.Powerpoint",
  windowsProcessAppIdPattern: /^process:(?:.*[\\/])?powerpnt\.exe$/i,
  windowsProcessDisplayName: "powerpnt",
  windowsOfficeAppIdPattern:
    /^Microsoft\.Office\.(?:POWERPOINT|POWERPNT|POWERPNT\.EXE)(?:\.\d+)?$/i,
  windowsOfficeDesktopAppIdPattern:
    /^Microsoft\.Office\.Desktop_[^!]+!PowerPoint$/i,
  isMentionPlugin: isPresentationPlugin,
};

export const MICROSOFT_OFFICE_APP_ALIASES = [
  MICROSOFT_EXCEL_ALIAS,
  MICROSOFT_POWERPOINT_ALIAS,
] as const;

export function isSpreadsheetPlugin(entry: AppgenPluginDisplayItem): boolean {
  return isOpenAiPrimaryRuntimePlugin(entry, SPREADSHEETS_PLUGIN_NAME);
}

export function isPresentationPlugin(entry: AppgenPluginDisplayItem): boolean {
  return isOpenAiPrimaryRuntimePlugin(entry, PRESENTATIONS_PLUGIN_NAME);
}

export function findAppgenPluginForMention({
  label,
  path,
  plugins,
}: {
  label: string;
  path?: string | null;
  plugins: AppgenPluginDisplayItem[];
}): AppgenPluginDisplayItem | undefined {
  const normalizedLabel = label.trim().toLowerCase();
  if (path != null && path.length > 0) {
    const pathMatch = plugins.find(
      (entry) => createPluginMentionItem(entry as never).path === path,
    );
    if (pathMatch != null) return pathMatch;
  }
  return plugins.find(
    (entry) =>
      entry.plugin.id.toLowerCase() === normalizedLabel ||
      entry.plugin.name.toLowerCase() === normalizedLabel ||
      entry.displayName?.toLowerCase() === normalizedLabel,
  );
}

export function getAppgenPluginDescription(
  entry: AppgenPluginDisplayItem,
): string | null {
  return entry.description ?? entry.marketplaceName ?? null;
}

export function createAppgenPluginMentionItem(
  entry: AppgenPluginDisplayItem,
  labels?: Parameters<typeof createPluginMentionItem>[1],
) {
  return createPluginMentionItem(entry as never, labels as never);
}

export function getAppgenPluginMentionIcon(
  entry: AppgenPluginDisplayItem,
  labels?: Parameters<typeof createPluginMentionItem>[1],
) {
  const mentionItem = createAppgenPluginMentionItem(entry, labels);
  return getSkillIcon(null, {
    size: "small",
    smallOnly: true,
    iconSmall: getPluginMentionIcon(entry as never),
    basePath: mentionItem.path,
    fallbackName: mentionItem.name,
    fallbackDescription: mentionItem.description,
    fallbackIcon: AppgenPublicationTermsFallbackIcon,
  });
}

export function nativeAppMatchesOfficeAlias(
  alias: OfficeAppAlias,
  app: NativeAppDescriptor,
): boolean {
  return (
    app.bundleId === alias.macBundleId ||
    alias.windowsProcessAppIdPattern.test(app.bundleId) ||
    alias.windowsOfficeAppIdPattern.test(app.bundleId) ||
    alias.windowsOfficeDesktopAppIdPattern.test(app.bundleId) ||
    app.displayName === alias.label ||
    app.displayName.trim().toLowerCase() === alias.windowsProcessDisplayName
  );
}

export function createOfficeAliasMentionItem({
  alias,
  plugin,
  description,
}: {
  alias: OfficeAppAlias;
  description?: string | null;
  plugin: AppgenPluginDisplayItem;
}) {
  return {
    kind: "plugin" as const,
    name: alias.label,
    displayName: alias.label,
    path: createPluginMentionItem(plugin as never).path,
    description: description ?? null,
    iconSmall: plugin.logoPath ?? "",
  };
}

export function officeAliasMatchesQuery(
  alias: OfficeAppAlias,
  query: string,
): boolean {
  return (
    Math.max(
      scoreQueryMatch(alias.label, query),
      scoreQueryMatch(alias.shortName, query),
      scoreQueryMatch(`@${alias.label}`, query),
      scoreQueryMatch(`@${alias.shortName}`, query),
    ) > 0
  );
}

export function resolveMentionedOfficeAliasLabel({
  mentionPath,
  mentionDisplayName,
  plugins,
}: {
  mentionDisplayName: string;
  mentionPath: string;
  plugins: AppgenPluginDisplayItem[];
}): string | null {
  return (
    MICROSOFT_OFFICE_APP_ALIASES.find(
      (alias) =>
        mentionDisplayName === alias.label &&
        plugins.some(
          (plugin) =>
            alias.isMentionPlugin(plugin) &&
            createPluginMentionItem(plugin as never).path === mentionPath,
        ),
    )?.label ?? null
  );
}

function isOpenAiPrimaryRuntimePlugin(
  entry: AppgenPluginDisplayItem,
  pluginName: string,
): boolean {
  return (
    entry.plugin.name === pluginName &&
    entry.marketplaceName === OPENAI_PRIMARY_RUNTIME_MARKETPLACE_NAME &&
    entry.plugin.id ===
      `${pluginName}@${OPENAI_PRIMARY_RUNTIME_MARKETPLACE_NAME}`
  );
}

export function defaultAppgenPluginIcon(
  props: SVGProps<SVGSVGElement>,
): ReactElement {
  return <PluginIcon {...props} />;
}

export function initAppgenSettingsPublicationIconChunk(): void {}
export function initAppgenPublicationTermsFallbackIconChunk(): void {}
export function initAppgenSettingsOpenAiIconChunk(): void {}
export function initPrimaryRuntimeOfficePluginConstantsChunk(): void {}
export function initAppgenSettingsChromeIconChunk(): void {}
export function initAppgenSettingsPencilIconChunk(): void {}
export function initAppgenSettingsFilesystemMediaChunk(): void {}
export function initAppgenSettingsPluginIconChunk(): void {}
export function initOfficeNativeAppAliasChunk(): void {}
export function initAppgenSettingsPublicationRuntimeChunk(): void {}

export { GithubMarkIcon as AppgenSettingsGithubIcon };
