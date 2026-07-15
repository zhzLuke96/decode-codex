// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Persists a sidebar thread's project-membership change. Awaits the membership
// write first; on failure it rolls back the optimistic workspace move and shows
// a "Couldn't move chat" toast. Then best-effort persists the sidebar ordering.
import type { IntlShape } from "../vendor/react-intl";
import {
  errorToString,
  intlAtom,
  logger,
  revertThreadWorkspaceMove,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";

interface SidebarAppStore {
  get<T = unknown>(atom: unknown): T;
}

interface ToastController {
  danger(message: string): void;
}

interface ThreadWorkspaceMove {
  conversationId: string;
  workspaceMove: unknown;
}

export interface SaveThreadProjectMembershipArgs {
  membershipSave: Promise<unknown>;
  sidebarSave: () => Promise<unknown>;
  move: ThreadWorkspaceMove | null;
}

export async function saveThreadProjectMembership(
  scope: SidebarAppStore,
  { membershipSave, sidebarSave, move }: SaveThreadProjectMembershipArgs,
): Promise<void> {
  try {
    await membershipSave;
  } catch (error) {
    if (move != null)
      revertThreadWorkspaceMove(scope, move.conversationId, move.workspaceMove);
    logger.error("Failed to save thread project membership", {
      safe: {},
      sensitive: { error: errorToString(error) },
    });
    scope.get<ToastController>(toastControllerAtom).danger(
      scope.get<IntlShape>(intlAtom).formatMessage({
        id: "sidebar.threadMove.saveFailed",
        defaultMessage: "Couldn’t move chat",
        description:
          "Error shown when moving a Codex chat between projects fails",
      }),
    );
    return;
  }

  try {
    await sidebarSave();
  } catch (error) {
    logger.warning("Failed to save sidebar state after moving thread", {
      safe: {},
      sensitive: { error: errorToString(error) },
    });
  }
}
