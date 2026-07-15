// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js
// Config and MCP-query runtime exports for the current pull request new-thread compatibility layer.

export {
  CONFIG_QUERY_STALE_TIME,
  CONFIG_REQUIREMENTS_QUERY_KEY,
  EFFECTIVE_CONFIG_QUERY_KEY,
  LAYERED_CONFIG_RESPONSE_QUERY_KEY,
  MCP_SERVERS_CONFIG_QUERY_KEY,
  MCP_SERVER_STATUS_QUERY_KEY,
  USER_CONFIG_QUERY_KEY,
  configRequirementsQueryOptions,
  findConfigOrigin,
  getConfigLayerFilePath,
  getUserConfigWriteTargetFromQueryClient,
  isReadOnlyConfigLayer,
  mcpServerStatusFullQueryOptions,
  mcpServerStatusToolsAndAuthQueryOptions,
  readConfigForHost,
  useAnalyticsEnabledQuery,
  useEffectiveConfigQuery,
  useLocalCustomAgents,
  useMcpResourceQuery,
  useMcpServersConfigQuery,
  useToggleMcpServerEnabledMutation,
  useWriteMcpServerConfigMutation,
  userConfigQueryOptions,
} from "../../config/config-queries";

export function initConfigQueryAliasesRuntime(): void {}
