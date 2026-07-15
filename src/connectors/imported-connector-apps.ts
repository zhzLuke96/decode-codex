// Restored from ref/webview/assets/imported-connector-apps-Cw08FNtc.js
// imported-connector-apps-Cw08FNtc chunk restored from the Codex webview bundle.
type CodexApp = {
  id: string;
  isAccessible?: boolean;
  isEnabled?: boolean;
  name: string;
  pluginDisplayNames: string[];
};

type Connector = {
  codexAppId?: string | null;
  name: string;
};

type PluginCandidate = {
  displayName?: string | null;
  plugin: {
    id: string;
    installed?: boolean;
    enabled?: boolean;
    interface?: {
      displayName?: string | null;
    } | null;
    name: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export function matchImportedAppsToPlugins({
  apps,
  plugins,
}: {
  apps: CodexApp[];
  plugins: PluginCandidate[];
}): Array<{ app: CodexApp; plugin: PluginCandidate }> {
  const seenPluginIds = new Set<string>();
  return apps.flatMap((app) => {
    const match = findPluginForApp(app, plugins);
    return match == null || seenPluginIds.has(match.plugin.id)
      ? []
      : (seenPluginIds.add(match.plugin.id),
        [
          {
            app,
            plugin: mergePluginAccessState(app, match),
          },
        ]);
  });
}

export function resolveImportedConnectorApps({
  apps,
  connectors,
}: {
  apps: CodexApp[];
  connectors: Connector[];
}): CodexApp[] {
  const appById = new Map(apps.map((app) => [app.id, app]));
  const appsByNormalizedName = new Map<string, CodexApp[]>();
  apps.forEach((app) => {
    const normalizedName = normalizeName(app.name);
    appsByNormalizedName.set(normalizedName, [
      ...(appsByNormalizedName.get(normalizedName) ?? []),
      app,
    ]);
  });

  const resolved: CodexApp[] = [];
  const seenAppIds = new Set<string>();
  for (const connector of connectors) {
    const app =
      (connector.codexAppId == null
        ? undefined
        : appById.get(connector.codexAppId)) ??
      [...(appsByNormalizedName.get(normalizeName(connector.name)) ?? [])].sort(
        compareLogoPresence,
      )[0];
    if (app != null && !seenAppIds.has(app.id)) {
      seenAppIds.add(app.id);
      resolved.push(app);
    }
  }
  return resolved;
}

function compareLogoPresence(left: CodexApp, right: CodexApp): number {
  return logoScore(right) - logoScore(left);
}

function logoScore(app: {
  logoUrl?: string | null;
  logoUrlDark?: string | null;
}): number {
  return app.logoUrl != null || app.logoUrlDark != null ? 1 : 0;
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

function findPluginForApp(
  app: CodexApp,
  plugins: PluginCandidate[],
): PluginCandidate | null {
  const candidateNames = new Set(
    [app.name, ...app.pluginDisplayNames].map(normalizePluginName),
  );
  return (
    plugins.find((candidate) =>
      [
        candidate.plugin.name,
        candidate.displayName ?? "",
        candidate.plugin.interface?.displayName ?? "",
      ].some((name) => candidateNames.has(normalizePluginName(name))),
    ) ?? null
  );
}

function mergePluginAccessState(
  app: CodexApp,
  candidate: PluginCandidate,
): PluginCandidate {
  return {
    ...candidate,
    plugin: {
      ...candidate.plugin,
      installed: app.isAccessible,
      enabled: app.isEnabled,
    },
  };
}

function normalizePluginName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "");
}
