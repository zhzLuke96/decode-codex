// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
export type HostId = string;
export type ConversationId = string;
export type ThreadDetailLevel =
  | "STEPS_PROSE"
  | "STEPS_COMMANDS"
  | "STEPS_EXECUTION";
export type AgentMode =
  | "read-only"
  | "auto"
  | "granular"
  | "guardian-approvals"
  | "full-access"
  | "custom";
export type AgentModeByHostId = Record<HostId, AgentMode | null | undefined>;
export type PermissionProfileId = string | null;
export type StateScope = "composer" | "global-default" | string;
export type PermissionStateTarget = "draft" | "global-default" | ConversationId;
export type PermissionProfile = {
  id: string;
  [key: string]: unknown;
};
export type ConfigRequirements = {
  allowedApprovalPolicies?: unknown[] | null;
  allowedApprovalsReviewers?: string[] | null;
  allowedPermissionProfiles?: Record<string, boolean | undefined> | null;
  allowedSandboxModes?: string[] | null;
  defaultPermissions?: string | null;
  [key: string]: unknown;
} | null;
export type ResolvedConfig = {
  approval_policy?: unknown;
  approvals_reviewer?: string | null;
  default_permissions?: unknown;
  sandbox_mode?: string | null;
  sandbox_workspace_write?: {
    writable_roots?: string[];
    network_access?: boolean;
    exclude_slash_tmp?: boolean;
    exclude_tmpdir_env_var?: boolean;
  } | null;
  [key: string]: unknown;
} | null;
export type SandboxPolicy =
  | {
      type: "workspaceWrite";
      writableRoots: string[];
    }
  | {
      type: string;
      writableRoots?: string[];
    };
export type ThreadPermissionSelection = {
  activePermissionProfile?: {
    id?: string | null;
  } | null;
  approvalPolicy?: unknown;
  approvalsReviewer?: string;
  permissions?: string | null;
  sandboxPolicy?: SandboxPolicy | null;
};
export type PermissionConfigData = {
  isConfigDataPending: boolean;
  isGuardianApprovalEnabledByStatsig: boolean;
  requirements: ConfigRequirements;
  resolvedConfig: ResolvedConfig;
};
export type AvailablePermissionModeState = {
  availableAgentModes: AgentMode[];
  canShowCustom: boolean;
  canUnlock: boolean;
  configNonFullAccessMode: AgentMode;
  customEquivalentMode: AgentMode | null;
  isConfigDataPending: boolean;
  isGuardianModeAvailable: boolean;
  showGuardianOption: boolean;
};
export type NonFullAccessModeState = {
  canSelectGuardianMode: boolean;
  resolvedNonFullAccessMode: AgentMode;
  shouldClearPreferredNonFullAccessMode: boolean;
  validPreferredNonFullAccessMode: AgentMode | null;
};
export type UsePermissionsModeOptions = {
  conversationId?: string | null;
  cwdOverride?: string | null;
  hostId: HostId;
  stateScope?: StateScope;
};
export type UsePermissionsModeResult = {
  agentMode: AgentMode | null;
  hasSetInitialAgentMode: boolean;
  isAgentModePending: boolean;
  permissionProfileId: PermissionProfileId;
  setAgentMode(agentMode: AgentMode | null): void;
  setHasSetInitialAgentMode(value: boolean): void;
  setPermissionProfileId(permissionProfileId: PermissionProfileId): void;
  shouldSendPermissionOverrides: boolean;
};
export type PreferredNonFullAccessModeResult = {
  preferredNonFullAccessMode: AgentMode | null;
  setPreferredNonFullAccessMode(agentMode: AgentMode | null): void;
};
export type QueryResult<TValue> = {
  data?: TValue;
  isError?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
};
export type PermissionProfilesResponse = {
  data: PermissionProfile[];
  nextCursor?: string | null;
};
export type SettableValue<TValue> = {
  isSet: boolean;
  value: TValue | null;
};
export type PendingThreadModeSelection = {
  mode: AgentMode | null;
  selectionSource: unknown;
};
export type WorkspaceContext = {
  roots?: string[];
};
export type StatsigDefaultEnableFeatures = {
  guardian_approval?: boolean;
};
export type AppScopeStore = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
  set(signal: unknown, value: unknown): void;
  set<TValue>(signal: unknown, updater: (current: TValue) => TValue): void;
};
export type AtomStore = {
  get<TValue = unknown>(atom: unknown): TValue;
  set(atom: unknown, value: unknown): void;
};
