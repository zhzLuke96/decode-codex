// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derives the provisioning status of the current client-local thread: "ready"
// once its conversation exists, otherwise "provisioning" (or "failed" when the
// pending worktree entry reports a failed phase).
import {
  appRootScope,
  createRouteScopedComputedAtom,
  conversationByClientThreadIdAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { pendingWorktreeByClientThreadIdAtom } from "./pending-worktree-atoms";

export type ClientLocalThreadProvisioningStatus =
  | "ready"
  | "provisioning"
  | "failed";

export const clientLocalThreadProvisioningStatusAtom =
  createRouteScopedComputedAtom(
    appRootScope,
    ({
      get,
      scope,
    }: {
      get: (atom: unknown, param?: unknown) => unknown;
      scope: { value: { routeKind: string; clientThreadId?: string } };
    }): ClientLocalThreadProvisioningStatus => {
      if (scope.value.routeKind !== "client-local-thread") return "ready";
      const { clientThreadId } = scope.value;
      if (get(conversationByClientThreadIdAtom, clientThreadId) != null) {
        return "ready";
      }
      const pendingWorktree = get(
        pendingWorktreeByClientThreadIdAtom,
        clientThreadId,
      ) as { phase?: string } | null | undefined;
      return pendingWorktree?.phase === "failed" ? "failed" : "provisioning";
    },
  );
