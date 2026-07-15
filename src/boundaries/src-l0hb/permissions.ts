// Restored from ref/webview/assets/src-l0hb-mz-p.js
type AgentMode =
  | "read-only"
  | "auto"
  | "granular"
  | "full-access"
  | "guardian-approvals"
  | "custom";

const baseAgentModes: AgentMode[] = [
  "read-only",
  "auto",
  "granular",
  "full-access",
];

export function getAllowedBaseAgentModes(): AgentMode[] {
  return [...baseAgentModes];
}

export function getAllowedAgentModes(
  requirements?: unknown,
  resolvedConfig?: unknown,
): AgentMode[] {
  const configModes = (
    resolvedConfig as { allowedAgentModes?: AgentMode[] } | null
  )?.allowedAgentModes;
  const requirementModes = (
    requirements as { allowedAgentModes?: AgentMode[] } | null
  )?.allowedAgentModes;
  return [
    ...(configModes ?? requirementModes ?? [...baseAgentModes, "custom"]),
  ];
}

export function getFirstNonCustomAgentMode(modes: AgentMode[]): AgentMode {
  return modes.find((mode) => mode !== "custom") ?? "read-only";
}

export function isAgentModeAllowedByRequirements(
  mode: AgentMode,
  requirements?: unknown,
): boolean {
  const modes = (requirements as { allowedAgentModes?: AgentMode[] } | null)
    ?.allowedAgentModes;
  return modes == null || modes.includes(mode);
}

export function resolveConfigDefaultAgentMode(
  config?: unknown,
  fallback: AgentMode = "auto",
): AgentMode | null {
  const rootDefault = (config as { defaultAgentMode?: AgentMode } | null)
    ?.defaultAgentMode;
  const modelDefault = (
    config as { model?: { defaultAgentMode?: AgentMode } } | null
  )?.model?.defaultAgentMode;
  return rootDefault ?? modelDefault ?? fallback;
}

export function getConfigApprovalsReviewer(config?: unknown): unknown {
  const rootReviewer = (config as { approvalsReviewer?: unknown } | null)
    ?.approvalsReviewer;
  const approvalsReviewer = (
    config as { approvals?: { reviewer?: unknown } } | null
  )?.approvals?.reviewer;
  return rootReviewer ?? approvalsReviewer;
}

export function isGuardianApprovalsReviewer(value: unknown): boolean {
  return value === "guardian" || value === "guardian-approvals";
}

export function isGuardianApprovalFeatureEnabled(
  config?: unknown,
): boolean | undefined {
  const rootFlag = (config as { guardianApprovalEnabled?: boolean } | null)
    ?.guardianApprovalEnabled;
  const featureFlag = (
    config as { features?: { guardianApproval?: boolean } } | null
  )?.features?.guardianApproval;
  return rootFlag ?? featureFlag;
}

export function buildPermissionOverridesForAgentMode(
  mode: AgentMode,
): Record<string, AgentMode> {
  return { agentMode: mode };
}

export function inferAgentModeFromThreadSettings(
  settings?: unknown,
): AgentMode | null {
  const record = settings as { agentMode?: AgentMode; mode?: AgentMode } | null;
  return record?.agentMode ?? record?.mode ?? null;
}

export function serializeThreadPermissionSettings(settings: unknown): unknown {
  return settings;
}
