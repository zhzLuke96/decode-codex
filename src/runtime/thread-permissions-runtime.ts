// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Thread permission payload helpers used by composer and thread creation.

export function buildThreadPermissions(
  agentMode: string | null | undefined,
  workspaceRoots: string[] = [],
  config: Record<string, unknown> | null | undefined = {},
): Record<string, unknown> {
  const mode = agentMode ?? "auto";
  return {
    agentMode: mode,
    approvalsReviewer:
      mode === "guardian-approvals" || mode === "custom" ? "user" : null,
    config,
    runtimeWorkspaceRoots: workspaceRoots,
    sandboxPolicy: {
      mode: mode === "full-access" ? "danger-full-access" : "workspace-write",
      writableRoots: workspaceRoots,
    },
  };
}

export function agentModeFromPermissions(
  permissions: Record<string, unknown> | null | undefined,
): string | null {
  if (permissions == null) return null;
  return typeof permissions.agentMode === "string"
    ? permissions.agentMode
    : typeof permissions.agent_mode === "string"
      ? permissions.agent_mode
      : null;
}

