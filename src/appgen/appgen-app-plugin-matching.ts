// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Appgen connector matching and installed plugin merge helpers.
import { pluginMatchesCodexApp } from "../runtime/app-main-host-runtime";
import type {
  AppgenApp,
  AppgenConnector,
  InstalledPluginEntry,
} from "./appgen-announcement-types";

export function getAppsMatchingConnectors({
  apps,
  connectors,
}: {
  apps: AppgenApp[];
  connectors: AppgenConnector[];
}): AppgenApp[] {
  const appsById = new Map(apps.map((app) => [app.id, app]));
  const appsByNormalizedName = new Map<string, AppgenApp[]>();

  for (const app of apps) {
    const normalizedName = normalizeAppName(app.name);
    appsByNormalizedName.set(normalizedName, [
      ...(appsByNormalizedName.get(normalizedName) ?? []),
      app,
    ]);
  }

  const matchedApps: AppgenApp[] = [];
  const seenAppIds = new Set<string>();
  for (const connector of connectors) {
    const app =
      (connector.codexAppId == null
        ? undefined
        : appsById.get(connector.codexAppId)) ??
      [
        ...(appsByNormalizedName.get(normalizeAppName(connector.name)) ?? []),
      ].sort(compareLogoCompleteness)[0];

    if (app == null || seenAppIds.has(app.id)) continue;
    seenAppIds.add(app.id);
    matchedApps.push(app);
  }
  return matchedApps;
}

export function getInstalledAppPluginsForApps({
  apps,
  plugins,
}: {
  apps: AppgenApp[];
  plugins: InstalledPluginEntry[];
}): Array<{ app: AppgenApp; plugin: InstalledPluginEntry }> {
  const seenPluginIds = new Set<string>();
  return apps.flatMap((app) => {
    const pluginEntry =
      plugins.find((entry) => pluginMatchesCodexApp(app, entry.plugin)) ?? null;
    if (pluginEntry == null || seenPluginIds.has(pluginEntry.plugin.id)) {
      return [];
    }
    seenPluginIds.add(pluginEntry.plugin.id);
    return [
      {
        app,
        plugin: mergeAppAccessibilityIntoPlugin(app, pluginEntry),
      },
    ];
  });
}

function compareLogoCompleteness(left: AppgenApp, right: AppgenApp): number {
  return getAppLogoScore(right) - getAppLogoScore(left);
}

function getAppLogoScore(app: AppgenApp): number {
  return app.logoUrl != null || app.logoUrlDark != null ? 1 : 0;
}

function normalizeAppName(name: string): string {
  return name.trim().toLowerCase();
}

function mergeAppAccessibilityIntoPlugin(
  app: AppgenApp,
  pluginEntry: InstalledPluginEntry,
): InstalledPluginEntry {
  return {
    ...pluginEntry,
    plugin: {
      ...pluginEntry.plugin,
      installed: app.isAccessible,
      enabled: app.isEnabled,
    },
  };
}
