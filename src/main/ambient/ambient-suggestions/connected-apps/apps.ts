// Restored from ref/.vite/build/src-CoIhwwHr.js
// Connected-app availability filtering for ambient suggestion generation.

import {
  CHATGPT_CONNECTOR_ID_PREFIX,
  isConnectorPersonalizationDisabled,
  normalizeConnectorAppId,
} from "./chatgpt-connectors";
import { getRecordProperty, parseRecordOrNull } from "./record-utils";
import type {
  AmbientAppServerConnection,
  AmbientConnectedAppState,
  ConnectedApp,
} from "../types";

const LIST_APPS_PAGE_SIZE = 1000;

export function createEmptyAmbientConnectedAppState(): AmbientConnectedAppState {
  return {
    connectedApps: [],
    disabledConnectedApps: [],
    disabledAmbientAppIds: new Set(),
    disabledAppIds: [],
    disableAllApps: true,
    listAppsSucceeded: false,
  };
}

export async function getAmbientConnectedAppState(
  client: AmbientAppServerConnection,
  projectRoot: string,
): Promise<AmbientConnectedAppState> {
  const [apps, config] = await Promise.all([
    listAllConnectedApps(client),
    client.getUserSavedConfiguration(projectRoot),
  ]);
  const accessibleApps = apps.filter(
    (app) => app.isAccessible === true && app.isEnabled === true,
  );
  const configDisabledAppIds = getPromptApprovalAppIds({
    apps: accessibleApps,
    config,
  });
  const chatgptConnectorApps = accessibleApps.filter((app) =>
    app.id.startsWith(CHATGPT_CONNECTOR_ID_PREFIX),
  );
  const authToken =
    chatgptConnectorApps.length === 0
      ? null
      : await client.getAuthToken({ refreshToken: false });
  const personalizationDisabledAppIds =
    authToken == null
      ? chatgptConnectorApps.map((app) => app.id)
      : (
          await Promise.all(
            chatgptConnectorApps.map(async (app) => {
              try {
                return (await isConnectorPersonalizationDisabled({
                  authToken,
                  connectorId: app.id,
                }))
                  ? app.id
                  : null;
              } catch {
                return app.id;
              }
            }),
          )
        ).filter((appId): appId is string => appId != null);
  const disabledAppIds = new Set([
    ...personalizationDisabledAppIds,
    ...configDisabledAppIds,
  ]);
  const connectedApps = accessibleApps
    .filter((app) => !disabledAppIds.has(app.id))
    .map(toPromptConnectedApp);
  const disabledConnectedApps = accessibleApps
    .filter((app) => disabledAppIds.has(app.id))
    .map(toPromptConnectedApp);

  return {
    connectedApps,
    disabledConnectedApps,
    disabledAmbientAppIds: new Set(disabledConnectedApps.map((app) => app.id)),
    disabledAppIds: [...disabledAppIds],
    disableAllApps: accessibleApps.length === 0,
    listAppsSucceeded: true,
  };
}

async function listAllConnectedApps(
  client: AmbientAppServerConnection,
): Promise<ConnectedApp[]> {
  const apps: ConnectedApp[] = [];
  let cursor: string | null = null;
  do {
    const page = await client.listApps({
      cursor,
      forceRefetch: false,
      limit: LIST_APPS_PAGE_SIZE,
      threadId: null,
    });
    apps.push(...page.data);
    cursor = page.nextCursor;
  } while (cursor != null);
  return apps;
}

function getPromptApprovalAppIds({
  apps,
  config,
}: {
  apps: ConnectedApp[];
  config: unknown;
}): string[] {
  const appConfig = parseRecordOrNull(getRecordProperty(config, "apps"));
  if (appConfig == null) return [];
  return apps
    .filter((app) => {
      const currentAppConfig = getRecordProperty(appConfig, app.id);
      if (
        getRecordProperty(currentAppConfig, "default_tools_approval_mode") ===
        "prompt"
      ) {
        return true;
      }
      const tools = parseRecordOrNull(
        getRecordProperty(currentAppConfig, "tools"),
      );
      if (tools == null) return false;
      return Object.values(tools).some(
        (toolConfig) =>
          getRecordProperty(toolConfig, "approval_mode") === "prompt",
      );
    })
    .map((app) => app.id);
}

function toPromptConnectedApp(app: ConnectedApp): ConnectedApp {
  return {
    id: normalizeConnectorAppId(app.id),
    name: app.name,
  };
}
