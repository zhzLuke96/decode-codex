// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Route-scoped set of turn ids interrupted by this client.
import {
  appScopeRoot,
  createAppScopeFamilySignal,
} from "../boundaries/app-scope";

type ScopedStore = {
  set<TValue>(
    signal: unknown,
    key: string,
    updater: (current: ReadonlySet<string>) => TValue,
  ): void;
};

const emptyInterruptedTurnIds = new Set<string>();

export const interruptedTurnIdsByConversationSignal =
  createAppScopeFamilySignal(appScopeRoot, () => emptyInterruptedTurnIds);

export function markTurnInterruptedByClient(
  store: ScopedStore,
  conversationId: string,
  turnId: string,
): void {
  store.set(interruptedTurnIdsByConversationSignal, conversationId, (current) =>
    new Set(current).add(turnId),
  );
}

export function initInterruptedTurnStateChunk(): void {
  void interruptedTurnIdsByConversationSignal;
}
