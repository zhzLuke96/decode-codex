// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeG as createAppScopeSignal,
  appScopeL as createComputedSignalFamily,
  appScopeT as appScopeRoot,
  appScopeV as createSignalFamily,
  appScopeX as createAtom,
} from "../../boundaries/app-scope";
import {
  conversationPermissionConfigSignal,
  Lt as conversationTurnsSignal,
} from "../../boundaries/thread-context-inputs.facade";
import { inferAgentModeFromThreadSettings } from "../../boundaries/src-l0hb-mz-p";
import {
  getAgentModeForHost,
  preferredNonFullAccessAgentModeByHostIdAtom,
} from "../permissions-mode-defaults";
import { UNSET_AGENT_MODE, UNSET_PERMISSION_PROFILE_ID } from "./constants";
import { isConfigDrivenPermissionStateEnabled } from "./mode-rules";
import type {
  AgentMode,
  AgentModeByHostId,
  AppScopeStore,
  AtomStore,
  ConversationId,
  HostId,
  PendingThreadModeSelection,
  PermissionProfileId,
  PermissionStateTarget,
  SettableValue,
  StateScope,
  ThreadPermissionSelection,
} from "./types";
export const draftPermissionProfileIdAtom =
  createAtom<PermissionProfileId>(null);
export const temporaryPermissionProfileByCwdSignal = createAppScopeSignal(
  appScopeRoot,
  () => ({}) as Record<string, SettableValue<PermissionProfileId>>,
);
export const draftHasSetInitialAgentModeAtom = createAtom(false);
export const draftAgentModeAtom =
  createAtom<SettableValue<AgentMode>>(UNSET_AGENT_MODE);
export const threadPreferredNonFullAccessModeAtomFamily = createSignalFamily(
  (_conversationId: string | null | undefined) =>
    createAtom<SettableValue<AgentMode>>(UNSET_AGENT_MODE),
);
export const pendingThreadAgentModeAtomFamily = createSignalFamily(
  (_conversationId: string | null | undefined) =>
    createAtom<PendingThreadModeSelection | null>(null),
);
const latestTurnParamsSignal = createComputedSignalFamily(
  appScopeRoot,
  (conversationId: string | null | undefined, { get }: AppScopeStore) =>
    (
      get(conversationTurnsSignal, conversationId) as
        | Array<{
            params?: ThreadPermissionSelection;
          }>
        | null
        | undefined
    )?.at(-1)?.params ?? null,
);
export function resolvePermissionStateTarget({
  conversationId,
  stateScope = "composer",
}: {
  conversationId?: string | null;
  stateScope?: StateScope;
}): PermissionStateTarget {
  return !isConfigDrivenPermissionStateEnabled() ||
    stateScope === "global-default"
    ? "global-default"
    : (conversationId ?? "draft");
}
export function getThreadPermissionSelection(conversationId?: string | null) {
  const conversationSelection = useAppScopeFamilyValue(
    conversationPermissionConfigSignal,
    conversationId,
  ) as ThreadPermissionSelection | null | undefined;
  const latestTurnSelection = useAppScopeFamilyValue(
    latestTurnParamsSignal,
    conversationId,
  ) as ThreadPermissionSelection | null | undefined;
  const selectionSource = conversationSelection ?? latestTurnSelection;
  const sandboxPolicy =
    conversationSelection?.sandboxPolicy ??
    latestTurnSelection?.sandboxPolicy ??
    null;
  const approvalPolicy =
    conversationSelection?.approvalPolicy ??
    latestTurnSelection?.approvalPolicy ??
    undefined;
  const approvalsReviewer =
    conversationSelection?.approvalsReviewer ??
    latestTurnSelection?.approvalsReviewer ??
    undefined;
  const agentMode = inferAgentModeFromThreadSettings({
    approvalPolicy,
    approvalsReviewer,
    sandboxPolicy: sandboxPolicy ?? undefined,
  }) as AgentMode | null;
  const preferredNonFullAccessMode =
    agentMode != null && agentMode !== "full-access" && agentMode !== "custom"
      ? agentMode
      : null;
  const permissionProfileId =
    conversationSelection?.activePermissionProfile === undefined
      ? (latestTurnSelection?.permissions ?? null)
      : (conversationSelection.activePermissionProfile?.id ?? null);
  return {
    hasThreadSelection: agentMode != null,
    selectionSource,
    threadPermissionProfileId: permissionProfileId,
    threadSandboxPolicy: sandboxPolicy,
    threadMode: agentMode,
    threadPreferredNonFullAccessMode: preferredNonFullAccessMode,
  };
}
export function resetDraftPermissionModeState(
  appScopeStore: AppScopeStore,
  atomStore: AtomStore,
) {
  atomStore.set(draftPermissionProfileIdAtom, null);
  appScopeStore.set(temporaryPermissionProfileByCwdSignal, {});
  atomStore.set(draftAgentModeAtom, UNSET_AGENT_MODE);
  atomStore.set(draftHasSetInitialAgentModeAtom, false);
}
export function setThreadPreferredNonFullAccessModeFromDefault(
  atomStore: AtomStore,
  conversationId: ConversationId,
  hostId: HostId,
) {
  atomStore.set(threadPreferredNonFullAccessModeAtomFamily(conversationId), {
    isSet: true,
    value: getCurrentPreferredNonFullAccessMode(atomStore, hostId),
  });
}
function getCurrentPreferredNonFullAccessMode(
  atomStore: AtomStore,
  hostId: HostId,
) {
  const draftAgentMode =
    atomStore.get<SettableValue<AgentMode>>(draftAgentModeAtom);
  return draftAgentMode.isSet
    ? draftAgentMode.value
    : (getAgentModeForHost(
        hostId,
        atomStore.get<AgentModeByHostId>(
          preferredNonFullAccessAgentModeByHostIdAtom,
        ),
      ) as AgentMode | null);
}
