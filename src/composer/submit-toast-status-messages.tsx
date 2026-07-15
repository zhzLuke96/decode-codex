// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Map worktree/closed-agent submission failures to localized toast messages and
// pick the right toast for the active composer mode.
import type { ReactNode } from "react";
import type { IntlShape } from "../vendor/react-intl";
import { getErrorMessage } from "../utils/config-load-error";
import { getThreadReferenceToastMessage } from "./submit-toast-messages";

const WORKTREE_INIT_FAILED_CODE = "worktree_init_failed";

export const CLOSED_AGENT_ERROR_MESSAGE = "closed_agent_thread";

export function initSubmitToastStatusMessagesChunk(): void {}

export function getWorktreeStatusToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode | null {
  const message = getErrorMessage(error);
  if (message.includes("worktree_restore_required")) {
    return intl.formatMessage({
      id: "composer.submitToast.restorableWorkingDirectory",
      defaultMessage: "Restore the worktree to continue",
      description:
        "Message shown when submission races with cleanup of a restorable worktree",
    });
  }
  if (message.includes("worktree_gone")) {
    return intl.formatMessage({
      id: "composer.submitToast.missingWorkingDirectory",
      defaultMessage: "The worktree no longer exists",
      description:
        "Message shown when submission races with permanent removal of a worktree",
    });
  }
  if (message.includes("worktree_status_unavailable")) {
    return intl.formatMessage({
      id: "composer.submitToast.workspaceStatusUnavailable",
      defaultMessage: "Couldn't check worktree status",
      description:
        "Message shown when submission cannot verify the managed worktree status",
    });
  }
  return null;
}

export function getCloudSubmitToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode {
  return intl.formatMessage(
    {
      id: "composer.submitToast.cloudError",
      defaultMessage: "Couldn't start cloud task: {message}",
      description: "Toast shown when cloud task submission fails",
    },
    { message: getErrorMessage(error) },
  );
}

export function getLocalSubmitToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode {
  return intl.formatMessage(
    {
      id: "composer.submitToast.localError",
      defaultMessage: "Couldn't send message: {message}",
      description: "Toast shown when local message submission fails",
    },
    { message: getErrorMessage(error) },
  );
}

export function formatWorktreeSubmitError(
  error: unknown,
  intl: IntlShape,
): ReactNode {
  return (
    getWorktreeStatusToastMessage(error, intl) ??
    getLocalSubmitToastMessage(error, intl)
  );
}

export function isClosedAgentError(error: unknown): boolean {
  return getErrorMessage(error).includes(CLOSED_AGENT_ERROR_MESSAGE);
}

function isWorktreeInitFailedError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  return (
    (error as { data?: { code?: string } }).data?.code ===
    WORKTREE_INIT_FAILED_CODE
  );
}

export type ComposerSubmitMode = "worktree" | "cloud" | "local" | string;

export interface GetSubmitToastMessageArgs {
  error: unknown;
  composerMode: ComposerSubmitMode;
  intl: IntlShape;
}

export function getSubmitToastMessage({
  error,
  composerMode,
  intl,
}: GetSubmitToastMessageArgs): ReactNode {
  return (
    getThreadReferenceToastMessage(error, intl) ??
    getWorktreeStatusToastMessage(error, intl) ??
    (composerMode === "worktree" && isWorktreeInitFailedError(error)
      ? intl.formatMessage({
          id: "composer.worktreeSetupFailed",
          defaultMessage:
            "Worktree setup failed. Check .codex/environments for a setup script.",
          description: "Toast text shown when the worktree setup script fails",
        })
      : isClosedAgentError(error)
        ? intl.formatMessage({
            id: "composer.closedAgentError",
            defaultMessage:
              "Ask parent to resume sub-agent to continue conversation",
            description:
              "Toast shown when the user tries to send a message to a closed agent thread",
          })
        : composerMode === "cloud"
          ? getCloudSubmitToastMessage(error, intl)
          : getLocalSubmitToastMessage(error, intl))
  );
}

export const formatComposerSubmitError: (
  args: GetSubmitToastMessageArgs,
) => ReactNode = getSubmitToastMessage;
