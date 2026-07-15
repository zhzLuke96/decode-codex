// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless effect: pushes the statsig "default enable features" overrides to the
// host, then (re)syncs experimental-feature enablement to every connected host
// whenever the host registry changes. Re-syncs are skipped when a host already
// has the identical enablement, and query state is invalidated after a push.
import { useEffect } from "react";
import { useGateValue } from "../vendor/statsig-current-runtime";
import { appMainLogger } from "../runtime/app-main-host-runtime";
import {
  appRootScope,
  connectedHostIdsAtom,
  currentHostIdAtom,
  experimentalFeatureEnablementQueryKey,
  getConnectedHost,
  isEqual,
  sendHostRequest,
  useHostConfigValue,
  useHostRegistry,
  useQueryClient,
  useScope,
} from "../boundaries/onboarding-commons-externals.facade";

const EXPERIMENTAL_FEATURE_KEYS = [
  "apps_mcp_path_override",
  "auth_elicitation",
  "memories",
  "tool_suggest",
];
const REMOTE_PLUGIN_ENABLEMENT_GATE = "4218407052";
const REMOTE_PLUGIN_ENABLEMENT_KEY = "remote_plugin";

function buildExperimentalFeatureEnablement(
  defaults: Record<string, unknown>,
  remotePluginEnabled: boolean,
): Record<string, unknown> {
  const enablement: Record<string, unknown> = {};
  for (const key of EXPERIMENTAL_FEATURE_KEYS) {
    const value = defaults[key];
    if (value != null) enablement[key] = value;
  }
  enablement[REMOTE_PLUGIN_ENABLEMENT_KEY] = remotePluginEnabled;
  return enablement;
}

export function FeatureOverridesSyncEffect(): null {
  const scope = useScope(appRootScope);
  const [defaultEnableFeatures] = useHostConfigValue(
    "statsig_default_enable_features",
  );
  const isRemotePluginEnabled = useGateValue(REMOTE_PLUGIN_ENABLEMENT_GATE);
  const hostRegistry = useHostRegistry();
  const queryClient = useQueryClient();

  useEffect(() => {
    const syncedEnablementByHost = new Map<string, unknown>();
    const syncFeatureOverrides = () => {
      sendHostRequest("set-default-feature-overrides", {
        overrides: defaultEnableFeatures ?? null,
      });
      if (defaultEnableFeatures == null) return;

      const enablement = buildExperimentalFeatureEnablement(
        defaultEnableFeatures,
        isRemotePluginEnabled,
      );
      const currentHostId = scope.get(currentHostIdAtom);
      const targetHostIds = new Set(
        scope
          .get(connectedHostIdsAtom)
          .filter(
            (hostId: string) =>
              hostId === currentHostId ||
              getConnectedHost(scope, hostId).state === "connected",
          ),
      );
      for (const hostId of syncedEnablementByHost.keys()) {
        if (!targetHostIds.has(hostId)) syncedEnablementByHost.delete(hostId);
      }

      const pendingRequests = scope
        .get(connectedHostIdsAtom)
        .filter((hostId: string) => targetHostIds.has(hostId))
        .flatMap((hostId: string) =>
          isEqual(syncedEnablementByHost.get(hostId), enablement)
            ? []
            : (syncedEnablementByHost.set(hostId, enablement),
              [
                sendHostRequest(
                  "set-experimental-feature-enablement-for-host",
                  {
                    hostId,
                    enablement,
                  },
                ).catch((error: unknown) => {
                  syncedEnablementByHost.delete(hostId);
                  appMainLogger.error(
                    "Failed to sync experimental feature enablement",
                    { safe: { hostId }, sensitive: { error } },
                  );
                }),
              ]),
        );

      if (pendingRequests.length !== 0) {
        Promise.all(pendingRequests).then(() => {
          queryClient.invalidateQueries({
            queryKey: experimentalFeatureEnablementQueryKey,
          });
        });
      }
    };

    syncFeatureOverrides();
    return hostRegistry.addRegistryCallback(syncFeatureOverrides);
  }, [
    hostRegistry,
    isRemotePluginEnabled,
    defaultEnableFeatures,
    queryClient,
    scope,
  ]);

  return null;
}
