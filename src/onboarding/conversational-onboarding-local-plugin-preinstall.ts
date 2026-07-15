// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Conversational onboarding local-plugin preinstall helpers. These keep the
// onboarding access card in a pending state while required app plugins are
// installed and refresh the local plugin list once an install succeeds.

import { appScopeUnderscore as createScopedAtom } from "../boundaries/app-scope";
import { sendAppServerRequest } from "../runtime/app-server-request";
import { appLogger } from "../runtime/app-logger";
import { buildPluginInstallRequest } from "../plugins/use-plugins";
import type { PluginDisplayItem } from "../plugins/use-plugins/types";

import { conversationalOnboardingTaskScope } from "./conversational-onboarding-task-scope";

interface ScopedSignalStore {
  set<TValue>(
    signal: unknown,
    value: TValue | ((current: TValue | undefined) => TValue),
  ): void;
}

export interface ConversationalOnboardingLocalPluginContext {
  hostId: string;
  localPlugins?: PluginDisplayItem[] | null;
  refetchLocalPlugins(): Promise<PluginDisplayItem[] | null | undefined>;
}

export const pendingConversationalOnboardingPluginNamesSignal =
  createScopedAtom<string[]>(conversationalOnboardingTaskScope, []);

const pendingPluginInstallPromises = new Map<string, Promise<void>>();

export async function preinstallConversationalOnboardingLocalPlugins(
  store: ScopedSignalStore,
  pluginNames: readonly string[],
  context: ConversationalOnboardingLocalPluginContext,
): Promise<void> {
  if (context.localPlugins == null) return;

  await installMissingConversationalOnboardingPlugins(
    store,
    pluginNames,
    context.localPlugins,
    context,
  );
}

async function installConversationalOnboardingPlugins({
  hostId,
  pluginNames,
  plugins,
}: {
  hostId: string;
  pluginNames: readonly string[];
  plugins: readonly PluginDisplayItem[];
}): Promise<string[]> {
  const installTargets = pluginNames.flatMap((pluginName) => {
    const plugin = plugins.find((item) => item.plugin.name === pluginName);
    if (plugin == null) return [];

    const installKey = buildInstallKey(hostId, plugin);
    if (plugin.plugin.installed && plugin.plugin.enabled) {
      pendingPluginInstallPromises.delete(installKey);
      return [];
    }

    return [{ plugin, pluginName }];
  });

  if (installTargets.length === 0) return [];

  const installedPluginNames = await Promise.all(
    installTargets.map(async ({ plugin, pluginName }) => {
      const installKey = buildInstallKey(hostId, plugin);

      try {
        let installPromise = pendingPluginInstallPromises.get(installKey);
        if (installPromise == null) {
          installPromise = sendAppServerRequest("install-plugin", {
            hostId,
            ...buildPluginInstallRequest(plugin),
          }).then(() => undefined);
          pendingPluginInstallPromises.set(installKey, installPromise);
        }

        await installPromise;
        return pluginName;
      } catch (error) {
        pendingPluginInstallPromises.delete(installKey);
        appLogger.error(
          "Failed to preinstall conversational onboarding plugin",
          {
            safe: { pluginName },
            sensitive: { error },
          },
        );
        return null;
      }
    }),
  );

  return installedPluginNames.filter(
    (pluginName): pluginName is string => pluginName != null,
  );
}

async function installMissingConversationalOnboardingPlugins(
  store: ScopedSignalStore,
  pluginNames: readonly string[],
  plugins: readonly PluginDisplayItem[],
  context: ConversationalOnboardingLocalPluginContext,
): Promise<string[]> {
  const pendingPluginNames = pluginNames.filter((pluginName) => {
    const plugin = plugins.find((item) => item.plugin.name === pluginName);
    return (
      plugin != null && (!plugin.plugin.installed || !plugin.plugin.enabled)
    );
  });

  store.set<string[]>(
    pendingConversationalOnboardingPluginNamesSignal,
    (currentPluginNames = []) => [
      ...currentPluginNames,
      ...pendingPluginNames.filter(
        (pluginName) => !currentPluginNames.includes(pluginName),
      ),
    ],
  );

  try {
    const installedPluginNames = await installConversationalOnboardingPlugins({
      hostId: context.hostId,
      pluginNames,
      plugins,
    });
    if (installedPluginNames.length > 0) await context.refetchLocalPlugins();
    return installedPluginNames;
  } finally {
    store.set<string[]>(
      pendingConversationalOnboardingPluginNamesSignal,
      (currentPluginNames = []) =>
        currentPluginNames.filter(
          (pluginName) => !pendingPluginNames.includes(pluginName),
        ),
    );
  }
}

function buildInstallKey(hostId: string, plugin: PluginDisplayItem): string {
  return `${hostId}:${plugin.marketplaceName}:${plugin.plugin.name}`;
}

export function initConversationalOnboardingLocalPluginPreinstallChunk(): void {
  void pendingConversationalOnboardingPluginNamesSignal;
  void preinstallConversationalOnboardingLocalPlugins;
}
