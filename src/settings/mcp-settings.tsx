// Restored from ref/webview/assets/mcp-settings-rSYMD_vg.js
// MCP server settings page, including custom server editing and auth status controls.
import React from "react";
import {
  _appScopeA as useAppScopeQueryResult,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { mcpLoginResultSignal } from "../boundaries/thread-context-inputs.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiF as vscodeBridge,
  vscodeApiH as vscodeLogger,
  vscodeApiP as useVscodeMessage,
} from "../boundaries/vscode-api";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
} from "../vendor/react-intl";
import { Button } from "../ui/button";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsControlRow } from "../ui/settings-row";
import { RegenerateIcon } from "../icons/regenerate-icon";
import {
  MCP_SERVER_STATUS_QUERY_KEY,
  mcpServerStatusToolsAndAuthQueryOptions,
  useMcpServersConfigQuery,
  useToggleMcpServerEnabledMutation,
  useWriteMcpServerConfigMutation,
} from "../config/config-queries";
import { uniq } from "../utils/uniq";
import { sortBy } from "../utils/sort-by";
import { SettingsSurface } from "../utils/settings-surface";
import { SettingsGroup } from "../utils/settings-group";
import { useSettingsHostContext } from "./settings-host-context";
import {
  SettingsSectionSubtitle,
  SettingsSectionTitle,
} from "./settings-shared";
import { getUniqueMcpServerKey } from "./mcp-settings/config-draft";
import { McpServerDetail } from "./mcp-settings/server-detail";
import { AddMcpServerButton, McpServerRow } from "./mcp-settings/server-row";
import type {
  AppServerInitializedMessage,
  EditableMcpServerConfig,
  McpAuthStatus,
  McpConfigQueryData,
  McpLoginResult,
  McpServerStatusQueryResult,
  MutationResult,
  StdioMcpServerConfig,
  ToggleMcpServerVariables,
  WriteMcpServerConfigVariables,
} from "./mcp-settings/types";

const mcpSettingsMessages = defineMessages({
  servers: {
    id: "settings.mcp.myServers",
    defaultMessage: "Servers",
    description: "Heading for the user's MCP servers list",
  },
});

const DEFAULT_NEW_STDIO_SERVER_CONFIG: StdioMcpServerConfig = {
  command: "",
  args: [],
  env_vars: [],
  enabled: true,
};

export function McpSettings() {
  const { selectedHostId } = useSettingsHostContext();
  const { data } = useMcpServersConfigQuery(null, {
    hostId: selectedHostId,
  }) as { data?: McpConfigQueryData };
  const { data: statusData, isFetching } = useAppScopeQueryResult(
    mcpServerStatusToolsAndAuthQueryOptions,
    selectedHostId,
  ) as McpServerStatusQueryResult;
  const writeServerConfigMutation = useWriteMcpServerConfigMutation({
    hostId: selectedHostId,
  }) as MutationResult<WriteMcpServerConfigVariables>;
  const toggleServerEnabledMutation = useToggleMcpServerEnabledMutation({
    hostId: selectedHostId,
  }) as MutationResult<ToggleMcpServerVariables>;
  const queryClient = useQueryClient();
  const intl = useIntl();
  const mcpLoginResult = useAppScopeValue(
    mcpLoginResultSignal,
  ) as McpLoginResult | null;
  const [authorizationUrlsByName, setAuthorizationUrlsByName] = React.useState<
    Record<string, string | null>
  >({});
  const [changedHostIds, setChangedHostIds] = React.useState<string[]>([]);
  const [dismissedRecommendedNamesByHost, setDismissedRecommendedNamesByHost] =
    React.useState<Record<string, string[]>>({});
  const [detailServerKey, setDetailServerKey] = React.useState<string | null>(
    null,
  );
  const [detailConfig, setDetailConfig] =
    React.useState<EditableMcpServerConfig | null>(null);

  const servers = data?.servers ?? {};
  const serverOrigins = data?.serverOrigins ?? {};
  const configWriteTarget = data?.configWriteTarget ?? null;
  const serverKeys = Object.keys(servers);
  const sortedServerKeys = sortBy(
    serverKeys,
    (serverKey) => servers[serverKey]?.name?.trim() || serverKey,
    (serverKey) => serverKey,
  );
  const existingServerNames = new Set(
    Object.entries(servers).flatMap(([serverKey, serverConfig]) => [
      serverKey,
      serverConfig.name ?? serverKey,
    ]),
  );
  const hasChangedSelectedHost = changedHostIds.includes(selectedHostId);
  const dismissedRecommendedNames = hasChangedSelectedHost
    ? (dismissedRecommendedNamesByHost[selectedHostId] ?? [])
    : [];
  const recommendedServers = sortBy(
    (data == null ? [] : (statusData?.data ?? [])).filter(
      (item) =>
        !existingServerNames.has(item.name) &&
        !dismissedRecommendedNames.includes(item.name),
    ),
    (item) => item.name,
  );
  const hasServers = serverKeys.length > 0;
  const hasRecommendedServers = recommendedServers.length > 0;
  const authStatusByServerName: Record<string, McpAuthStatus | undefined> = {};

  if (statusData != null) {
    statusData.data.forEach((item) => {
      authStatusByServerName[item.name] = item.authStatus;
    });
    Object.entries(servers).forEach(([serverKey, serverConfig]) => {
      const authStatus =
        authStatusByServerName[serverKey] ??
        (serverConfig.name == null
          ? undefined
          : authStatusByServerName[serverConfig.name]);
      if (authStatus != null) {
        authStatusByServerName[serverKey] = authStatus;
      }
    });
  }

  const markSelectedHostChanged = () => {
    setChangedHostIds((currentHostIds) =>
      currentHostIds.includes(selectedHostId)
        ? currentHostIds
        : [...currentHostIds, selectedHostId],
    );
  };

  const closeDetail = () => {
    setDetailConfig(null);
    setDetailServerKey(null);
  };

  const getWritableConfigPath = () => {
    if (configWriteTarget != null) return configWriteTarget.filePath;
    throw Error(
      intl.formatMessage({
        id: "settings.mcp.noWritableConfig",
        defaultMessage: "MCP server settings are unavailable",
        description:
          "Error shown when MCP settings cannot find a writable config.toml",
      }),
    );
  };

  const toggleServerEnabled = async (serverKey: string, enabled: boolean) => {
    try {
      await toggleServerEnabledMutation.mutateAsync({
        key: serverKey,
        enabled,
      });
      markSelectedHostChanged();
    } catch {}
  };

  const saveServerConfig = async (
    serverConfig: EditableMcpServerConfig,
    label: string,
  ) => {
    const targetKey =
      detailServerKey ?? getUniqueMcpServerKey(label, serverKeys, null);
    try {
      await writeServerConfigMutation.mutateAsync({
        filePath: getWritableConfigPath(),
        key: targetKey,
        value: serverConfig,
      });
      markSelectedHostChanged();
      closeDetail();
    } catch (error) {
      vscodeLogger.error("Failed to save MCP server", {
        safe: {
          targetKey,
        },
        sensitive: {
          error,
        },
      });
      throw error;
    }
  };

  const uninstallServerConfig = async (label: string) => {
    const targetKey =
      detailServerKey ?? getUniqueMcpServerKey(label, serverKeys, null);
    try {
      await writeServerConfigMutation.mutateAsync({
        filePath: getWritableConfigPath(),
        key: targetKey,
        value: null,
      });
      setDismissedRecommendedNamesByHost((currentDismissedNames) => ({
        ...currentDismissedNames,
        [selectedHostId]: uniq([
          ...(currentDismissedNames[selectedHostId] ?? []),
          targetKey,
          label,
          servers[targetKey]?.name ?? targetKey,
        ]),
      }));
      markSelectedHostChanged();
      closeDetail();
    } catch (error) {
      vscodeLogger.error("Failed to uninstall MCP server", {
        safe: {
          targetKey,
        },
        sensitive: {
          error,
        },
      });
      throw error;
    }
  };

  const startMcpServerLogin = async (serverName: string) => {
    if (!isFetching) {
      const authStatus = authStatusByServerName[serverName];
      if (authStatus !== undefined && authStatus !== "notLoggedIn") return;
    }

    const cachedAuthorizationUrl = authorizationUrlsByName[serverName];
    if (cachedAuthorizationUrl) {
      vscodeBridge.dispatchMessage("open-in-browser", {
        url: cachedAuthorizationUrl,
      });
      return;
    }

    setAuthorizationUrlsByName((currentAuthorizationUrls) => ({
      ...currentAuthorizationUrls,
      [serverName]: null,
    }));
    try {
      const { authorizationUrl } = (await sendAppServerRequest(
        "login-mcp-server",
        {
          hostId: selectedHostId,
          name: serverName,
        },
      )) as {
        authorizationUrl?: string | null;
      };
      if (authorizationUrl) {
        setAuthorizationUrlsByName((currentAuthorizationUrls) => ({
          ...currentAuthorizationUrls,
          [serverName]: authorizationUrl,
        }));
        vscodeBridge.dispatchMessage("open-in-browser", {
          url: authorizationUrl,
        });
      }
    } catch (error) {
      vscodeLogger.error("Failed to start login for MCP server", {
        safe: {
          serverName,
        },
        sensitive: {
          error,
        },
      });
      setAuthorizationUrlsByName((currentAuthorizationUrls) => {
        const { [serverName]: _removed, ...rest } = currentAuthorizationUrls;
        return rest;
      });
    }
  };

  const handleMcpLoginResult = React.useEffectEvent(
    (serverName: string, success: boolean) => {
      setAuthorizationUrlsByName((currentAuthorizationUrls) => {
        const authorizationUrl = currentAuthorizationUrls[serverName];
        if (success || authorizationUrl == null) {
          const { [serverName]: _removed, ...rest } = currentAuthorizationUrls;
          return rest;
        }
        return currentAuthorizationUrls;
      });
      if (success) {
        markSelectedHostChanged();
        queryClient.invalidateQueries({
          queryKey: MCP_SERVER_STATUS_QUERY_KEY,
        });
      }
    },
  );
  const skippedInitialLoginResult = React.useRef(true);

  React.useEffect(() => {
    if (skippedInitialLoginResult.current) {
      skippedInitialLoginResult.current = false;
      return;
    }
    if (mcpLoginResult?.hostId === selectedHostId) {
      handleMcpLoginResult(mcpLoginResult.name, mcpLoginResult.success);
    }
  }, [mcpLoginResult, selectedHostId]);

  useVscodeMessage(
    "codex-app-server-initialized",
    (message: AppServerInitializedMessage) => {
      setChangedHostIds((currentHostIds) =>
        currentHostIds.filter((hostId) => hostId !== message.hostId),
      );
      setDismissedRecommendedNamesByHost((currentDismissedNames) => {
        const { [message.hostId]: _removed, ...rest } = currentDismissedNames;
        return rest;
      });
      queryClient.invalidateQueries({
        queryKey: [...MCP_SERVER_STATUS_QUERY_KEY, message.hostId],
      });
    },
    [queryClient],
  );

  if (detailConfig) {
    return (
      <McpServerDetail
        config={detailConfig}
        initialKey={detailServerKey}
        onCancel={closeDetail}
        onSave={saveServerConfig}
        onUninstall={detailServerKey ? uninstallServerConfig : undefined}
      />
    );
  }

  const restartAction = hasChangedSelectedHost ? (
    <Button
      color="ghost"
      onClick={() => {
        vscodeBridge.dispatchMessage("codex-app-server-restart", {
          hostId: selectedHostId,
        });
      }}
      size="toolbar"
    >
      <RegenerateIcon className="icon-xs" />
      <FormattedMessage
        id="settings.mcp.restartApp"
        defaultMessage="Restart"
        description="Button label to restart the codex electron app after MCP settings change"
      />
    </Button>
  ) : null;

  const openNewServerDetail = () => {
    setDetailServerKey(null);
    setDetailConfig({
      ...DEFAULT_NEW_STDIO_SERVER_CONFIG,
      name: undefined,
    });
  };

  return (
    <SettingsContentLayout
      action={restartAction}
      subtitle={<SettingsSectionSubtitle slug="mcp-settings" />}
      title={<SettingsSectionTitle slug="mcp-settings" />}
    >
      <SettingsGroup>
        <SettingsGroup.Header
          actions={
            hasServers || hasRecommendedServers ? (
              <AddMcpServerButton onClick={openNewServerDetail} />
            ) : null
          }
          title={<FormattedMessage {...mcpSettingsMessages.servers} />}
        />
        {hasServers || !hasRecommendedServers ? (
          <SettingsGroup.Content>
            <SettingsSurface>
              {hasServers ? (
                sortedServerKeys.map((serverKey) => (
                  <McpServerRow
                    key={serverKey}
                    authStatus={authStatusByServerName[serverKey]}
                    enabled={servers[serverKey]?.enabled !== false}
                    isReadOnly={
                      serverOrigins[serverKey]?.name.type === "project"
                    }
                    name={servers[serverKey]?.name ?? serverKey}
                    onAuthenticateClicked={() => {
                      startMcpServerLogin(serverKey);
                    }}
                    onEnableClicked={
                      servers[serverKey]
                        ? (enabled) => toggleServerEnabled(serverKey, enabled)
                        : undefined
                    }
                    onSettingsClicked={
                      servers[serverKey]
                        ? () => {
                            setDetailServerKey(serverKey);
                            setDetailConfig(servers[serverKey]);
                          }
                        : undefined
                    }
                    statusLoading={isFetching}
                  />
                ))
              ) : (
                <SettingsControlRow
                  control={<AddMcpServerButton onClick={openNewServerDetail} />}
                  label={
                    <FormattedMessage
                      id="settings.mcp.empty"
                      defaultMessage="No MCP servers connected"
                      description="Empty state for MCP servers list"
                    />
                  }
                />
              )}
            </SettingsSurface>
          </SettingsGroup.Content>
        ) : null}
      </SettingsGroup>
      {hasRecommendedServers ? (
        <SettingsGroup>
          <SettingsGroup.Header
            title={
              <FormattedMessage
                id="settings.mcp.fromPlugins"
                defaultMessage="From plugins"
                description="Heading for MCP servers provided by installed plugins"
              />
            }
          />
          <SettingsGroup.Content>
            <SettingsSurface>
              {recommendedServers.map((item) => (
                <McpServerRow
                  key={`status-${item.name}`}
                  authStatus={item.authStatus}
                  name={item.name}
                  onAuthenticateClicked={() => {
                    startMcpServerLogin(item.name);
                  }}
                  statusLoading={isFetching}
                />
              ))}
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      ) : null}
    </SettingsContentLayout>
  );
}
