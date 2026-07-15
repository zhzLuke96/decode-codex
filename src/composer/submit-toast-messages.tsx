// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Map composer submission failures to localized toast messages.
import type { ReactNode } from "react";
import type { IntlShape } from "../vendor/react-intl";
import { getErrorMessage } from "../utils/config-load-error";
import { getWorktreeStatusToastMessage } from "../boundaries/onboarding-commons-externals.facade";

const WORKTREE_INIT_FAILED_CODE = "worktree_init_failed";
const MAX_THREAD_REFERENCES = 3;

export function getThreadReferenceToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode | null {
  const message = getErrorMessage(error);
  if (message === "thread_reference_limit_exceeded") {
    return intl.formatMessage(
      {
        id: "composer.threadReferences.limitExceeded",
        defaultMessage: "You can reference up to {limit} chats per message",
        description:
          "Toast shown when a message contains more referenced chats than supported",
      },
      { limit: MAX_THREAD_REFERENCES },
    );
  }
  if (message === "thread_reference_read_failed") {
    return intl.formatMessage({
      id: "composer.threadReferences.readFailed",
      defaultMessage: "Could not load a referenced chat",
      description:
        "Toast shown when Codex cannot load context from a referenced chat",
    });
  }
  return null;
}

function isWorktreeInitFailedError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  return (
    (error as { data?: { code?: string } }).data?.code ===
    WORKTREE_INIT_FAILED_CODE
  );
}

export function getWorktreeSubmitToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode {
  return (
    getThreadReferenceToastMessage(error, intl) ??
    getWorktreeStatusToastMessage(error, intl) ??
    (isWorktreeInitFailedError(error)
      ? intl.formatMessage({
          id: "composer.worktreeSetupFailed",
          defaultMessage:
            "Worktree setup failed. Check .codex/environments for a setup script.",
          description: "Toast text shown when the worktree setup script fails",
        })
      : intl.formatMessage(
          {
            id: "composer.localTaskError.v2",
            defaultMessage: "Error starting chat{br}{error}",
            description: "Toast text shown when we failed to start a thread",
          },
          { br: <br />, error: getErrorMessage(error) },
        ))
  );
}
