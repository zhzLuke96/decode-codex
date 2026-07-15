// Restored from ref/webview/assets/service-tier-icons-C-0I5QrR.js
// Composer keyboard and escape-action helpers.
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

export type ComposerEscapeAction =
  | "abort-dictation"
  | "stop-realtime"
  | "confirm-stop-turn"
  | "stop-turn"
  | "focus-composer"
  | null;

type ComposerEscapeState = {
  followUpType: string | null | undefined;
  isResponseInProgress: boolean;
  canStopFromEscape: boolean;
  isComposerFocused: boolean;
  hasActiveMentionMenu: boolean;
};

type ComposerActionState = ComposerEscapeState & {
  isDictating: boolean;
  restrictedSessionPhase?: string | null;
  realtimePhase?: string | null;
  hasFocusedComposer: boolean;
  isTerminalTarget: boolean;
  hasActiveApprovalSurface: boolean;
  isStopTurnConfirmationVisible: boolean;
};

type PlanModeToggleState = {
  hasPlanMode: boolean;
  hasDefaultMode: boolean;
  isPlanMode: boolean;
  setSelectedMode: (mode: "default" | "plan" | null) => void;
};

type ComposerModeKeyDownState = PlanModeToggleState & {
  activateArtifactPluginSuggestion?: () => boolean;
  event: ReactKeyboardEvent | KeyboardEvent;
  isComposerFocused: boolean;
  hasActiveMentionMenu: boolean;
  isSelectionAtStart?: boolean;
  handleEscape: () => void;
};

function shouldStopTurnFromEscape({
  followUpType,
  isResponseInProgress,
  canStopFromEscape,
  isComposerFocused,
  hasActiveMentionMenu,
}: ComposerEscapeState): boolean {
  return (
    (followUpType === "local" || followUpType === "cloud") &&
    isResponseInProgress &&
    canStopFromEscape &&
    isComposerFocused &&
    !hasActiveMentionMenu
  );
}

export function getComposerEscapeAction({
  isDictating,
  realtimePhase,
  followUpType,
  isResponseInProgress,
  canStopFromEscape,
  isComposerFocused,
  hasFocusedComposer,
  hasActiveMentionMenu,
  isTerminalTarget,
  hasActiveApprovalSurface,
  isStopTurnConfirmationVisible,
}: ComposerActionState): ComposerEscapeAction {
  if (isDictating) return "abort-dictation";
  if (realtimePhase === "starting" || realtimePhase === "active") {
    return "stop-realtime";
  }
  if (
    shouldStopTurnFromEscape({
      followUpType,
      isResponseInProgress,
      canStopFromEscape,
      isComposerFocused,
      hasActiveMentionMenu,
    })
  ) {
    return isStopTurnConfirmationVisible ? "stop-turn" : "confirm-stop-turn";
  }
  if (hasFocusedComposer || isTerminalTarget || hasActiveApprovalSurface) {
    return null;
  }
  return "focus-composer";
}

export function togglePlanModeSelection({
  hasPlanMode,
  hasDefaultMode,
  isPlanMode,
  setSelectedMode,
}: PlanModeToggleState): boolean {
  if (!hasPlanMode) return false;
  if (isPlanMode) {
    setSelectedMode(hasDefaultMode ? "default" : null);
    return true;
  }
  setSelectedMode("plan");
  return true;
}

export function initComposerKeyboardRuntimeChunk(): void {}

export function handleComposerModeKeyDown({
  activateArtifactPluginSuggestion,
  event,
  isComposerFocused,
  hasActiveMentionMenu,
  hasPlanMode,
  hasDefaultMode,
  isPlanMode,
  isSelectionAtStart = false,
  setSelectedMode,
  handleEscape,
}: ComposerModeKeyDownState): boolean {
  if (!isComposerFocused) return false;
  if (
    event.key === "Backspace" &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    isPlanMode &&
    isSelectionAtStart
  ) {
    event.preventDefault();
    event.stopPropagation();
    setSelectedMode(hasDefaultMode ? "default" : null);
    return true;
  }
  if (
    event.key === "Escape" &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey
  ) {
    if (hasActiveMentionMenu) return false;
    event.preventDefault();
    event.stopPropagation();
    handleEscape();
    return true;
  }
  if (
    event.key === "Tab" &&
    event.shiftKey &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    (activateArtifactPluginSuggestion?.() ||
      togglePlanModeSelection({
        hasPlanMode,
        hasDefaultMode,
        isPlanMode,
        setSelectedMode,
      }))
  ) {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
  return false;
}
