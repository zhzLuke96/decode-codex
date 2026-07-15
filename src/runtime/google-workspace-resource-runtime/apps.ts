// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Google Drive connector/app matching helpers.

import type { AppConnectApp } from "../../connectors/apps-queries";

const googleDriveConnectorId = "connector_5f3c8c41a1e54ad7a76272c89e2554fa";

function normalizeAppName(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

export function findGoogleDriveApp(
  apps: readonly AppConnectApp[] | null | undefined,
): AppConnectApp | null {
  if (apps == null) return null;
  return (
    apps.find((app) =>
      app.id === googleDriveConnectorId
        ? true
        : [
            app.id,
            app.name,
            ...(((app as { pluginDisplayNames?: unknown })
              .pluginDisplayNames as string[] | undefined) ?? []),
          ].some(
            (candidate) =>
              typeof candidate === "string" &&
              normalizeAppName(candidate) === "google-drive",
          ),
    ) ?? null
  );
}

export function isAccessibleGoogleDriveApp(
  apps: readonly AppConnectApp[] | null | undefined,
): boolean {
  const app = findGoogleDriveApp(apps);
  return app?.isAccessible === true && app.isEnabled === true;
}
