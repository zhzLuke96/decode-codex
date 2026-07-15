// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { useHostConfigBt as callHostConfigCommand } from "../../boundaries/use-host-config.facade";
import { toastApiSignal } from "../../ui/toast-signal";
import { appIntlSignal } from "../../utils/app-intl-signal";
import type {
  ClearThreadGoalOptions,
  IntlLike,
  SetThreadGoalOptions,
  SetThreadGoalStatusOptions,
  ToastApiLike,
} from "./types";
export async function setThreadGoal({
  scope,
  appendTranscriptItem,
  conversationId,
  hostId,
  intl,
  objective,
}: SetThreadGoalOptions): Promise<boolean> {
  try {
    await callHostConfigCommand("set-thread-goal", {
      conversationId,
      hostId,
      objective,
      appendTranscriptItem,
    });
    return true;
  } catch {
    scope.get<ToastApiLike>(toastApiSignal).danger(
      intl.formatMessage({
        id: "composer.threadGoal.setError",
        defaultMessage: "Failed to set goal",
        description: "Toast shown when setting a thread goal fails",
      }),
    );
    return false;
  }
}
export async function setThreadGoalStatus({
  scope,
  conversationId,
  hostId,
  status,
}: SetThreadGoalStatusOptions): Promise<boolean> {
  try {
    await callHostConfigCommand("set-thread-goal-status", {
      conversationId,
      hostId,
      status,
    });
    return true;
  } catch {
    scope.get<ToastApiLike>(toastApiSignal).danger(
      scope.get<IntlLike>(appIntlSignal).formatMessage({
        id: "composer.threadGoal.statusUpdateError",
        defaultMessage: "Failed to update goal",
        description: "Toast shown when updating a thread goal fails",
      }),
    );
    return false;
  }
}
export async function clearThreadGoal({
  scope,
  conversationId,
  hostId,
  intl,
}: ClearThreadGoalOptions): Promise<boolean> {
  try {
    await callHostConfigCommand("clear-thread-goal", {
      conversationId,
      hostId,
    });
    return true;
  } catch {
    scope.get<ToastApiLike>(toastApiSignal).danger(
      intl.formatMessage({
        id: "composer.threadGoal.clearError",
        defaultMessage: "Failed to clear goal",
        description: "Toast shown when clearing a thread goal fails",
      }),
    );
    return false;
  }
}
