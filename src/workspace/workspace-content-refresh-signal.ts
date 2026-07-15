// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// A conversation-scoped refresh token: holds an opaque Symbol that consumers
// subscribe to, and a bump helper that writes a fresh Symbol to force dependents
// (workspace/artifact content) to re-evaluate.
import {
  appStoreScope,
  createScopedAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export const workspaceContentRefreshAtom = createScopedAtom(
  appStoreScope,
  Symbol(),
);

export function bumpWorkspaceContentRefresh(store: {
  set: (atom: unknown, value: unknown) => void;
}): void {
  store.set(workspaceContentRefreshAtom, Symbol());
}
