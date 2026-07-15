// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import { useAtom } from "jotai";
import {
  getAgentModeForHost,
  preferredNonFullAccessAgentModeByHostIdAtom,
} from "../permissions-mode-defaults";
import { usePermissionsMode } from "./use-permissions-mode";
import {
  draftAgentModeAtom,
  getThreadPermissionSelection,
  resolvePermissionStateTarget,
  threadPreferredNonFullAccessModeAtomFamily,
} from "./state";
import type {
  AgentMode,
  AgentModeByHostId,
  PreferredNonFullAccessModeResult,
  SettableValue,
  UsePermissionsModeOptions,
} from "./types";
export function usePreferredNonFullAccessMode({
  conversationId,
  cwdOverride,
  hostId,
  stateScope = "composer",
}: UsePermissionsModeOptions): PreferredNonFullAccessModeResult {
  const stateTarget = resolvePermissionStateTarget({
    conversationId,
    stateScope,
  });
  const [preferredByHostId, setPreferredByHostId] = useAtom(
    preferredNonFullAccessAgentModeByHostIdAtom,
  ) as [AgentModeByHostId, (value: AgentModeByHostId) => void];
  const [draftPreferredMode, setDraftPreferredMode] = useAtom(
    draftAgentModeAtom,
  ) as [SettableValue<AgentMode>, (value: SettableValue<AgentMode>) => void];
  const preferredModeAtom =
    conversationId == null
      ? draftAgentModeAtom
      : threadPreferredNonFullAccessModeAtomFamily(conversationId);
  const [threadPreferredMode, setThreadPreferredMode] = useAtom(
    preferredModeAtom,
  ) as [SettableValue<AgentMode>, (value: SettableValue<AgentMode>) => void];
  const { hasThreadSelection, threadMode, threadPreferredNonFullAccessMode } =
    getThreadPermissionSelection(conversationId);
  const { agentMode } = usePermissionsMode({
    conversationId,
    cwdOverride,
    hostId,
    stateScope,
  });
  const globalPreferredMode = getAgentModeForHost(
    hostId,
    preferredByHostId,
  ) as AgentMode | null;
  if (stateTarget === "draft") {
    return {
      preferredNonFullAccessMode: draftPreferredMode.isSet
        ? draftPreferredMode.value
        : globalPreferredMode,
      setPreferredNonFullAccessMode: (agentMode) => {
        setDraftPreferredMode({
          isSet: true,
          value: agentMode,
        });
      },
    };
  }
  if (stateTarget === "global-default") {
    return {
      preferredNonFullAccessMode: globalPreferredMode,
      setPreferredNonFullAccessMode: (agentMode) => {
        setPreferredByHostId({
          ...preferredByHostId,
          [hostId]: agentMode,
        });
      },
    };
  }
  return {
    preferredNonFullAccessMode: threadPreferredMode.isSet
      ? threadPreferredMode.value
      : hasThreadSelection && agentMode === threadMode
        ? threadPreferredNonFullAccessMode
        : null,
    setPreferredNonFullAccessMode: (agentMode) => {
      setThreadPreferredMode({
        isSet: true,
        value: agentMode,
      });
    },
  };
}
