// Restored from ref/webview/assets/plugin-detail-page-utils-DeDVCX5Q.js
// Plugin app and app-template enrichment helpers used by plugin detail views.

import type { AppTemplate, DirectoryApp, PluginApp } from "./types";

export function mergePluginAppsWithDirectoryMetadata({
  directoryApps,
  pluginApps,
}: {
  directoryApps: DirectoryApp[];
  pluginApps: PluginApp[];
}): DirectoryApp[] {
  const directoryAppById = new Map(
    directoryApps.map((directoryApp) => [directoryApp.id, directoryApp]),
  );

  return pluginApps
    .map((pluginApp) => {
      const directoryApp = directoryAppById.get(pluginApp.id);
      if (directoryApp == null || directoryApp.name === directoryApp.id) {
        return null;
      }

      const category =
        pluginApp.category?.trim() || getDirectoryAppCategory(directoryApp);
      if (!category) return directoryApp;

      const branding = directoryApp.branding ?? {
        category: null,
        developer: null,
        website: null,
        privacyPolicy: null,
        termsOfService: null,
        isDiscoverableApp: false,
      };

      return {
        ...directoryApp,
        branding: {
          ...branding,
          category,
        },
      };
    })
    .filter(
      (directoryApp): directoryApp is DirectoryApp => directoryApp != null,
    );
}

export function enrichAppTemplatesWithDirectoryApps({
  directoryApps,
  appTemplates,
}: {
  directoryApps: DirectoryApp[];
  appTemplates: AppTemplate[];
}): AppTemplate[] {
  if (!Array.isArray(appTemplates)) return [];

  const directoryAppById = new Map(
    directoryApps.map((directoryApp) => [directoryApp.id, directoryApp]),
  );

  return appTemplates.map((appTemplate) => {
    const directoryApp =
      (appTemplate.canonicalConnectorId == null
        ? undefined
        : directoryAppById.get(appTemplate.canonicalConnectorId)) ??
      directoryAppById.get(appTemplate.templateId);

    if (directoryApp == null) return appTemplate;

    return {
      ...appTemplate,
      category:
        appTemplate.category?.trim() || getDirectoryAppCategory(directoryApp),
      description: appTemplate.description || directoryApp.description,
      logoUrl: appTemplate.logoUrl || directoryApp.logoUrl,
      logoUrlDark: appTemplate.logoUrlDark || directoryApp.logoUrlDark,
    };
  });
}

function getDirectoryAppCategory(directoryApp: DirectoryApp): string | null {
  return (
    directoryApp.branding?.category?.trim() ||
    directoryApp.appMetadata?.categories
      ?.find((category) => category.trim())
      ?.trim() ||
    null
  );
}
