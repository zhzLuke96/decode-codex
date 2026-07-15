// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Composer state helpers used to decide whether a local thread can be handed
// off while pasted text attachments or queued follow-ups are still pending.

import { _appScopeT, appScopeUnderscore } from "../boundaries/app-scope";

type AppScope = {
  get<T = unknown>(store: unknown, key: string): T;
  set(store: unknown, key: string, value: unknown): void;
};

export type ThreadHandoffComposerDisabledReason =
  | "pending-pasted-text-attachments"
  | "loading-queued-follow-ups"
  | "unavailable-queued-follow-ups"
  | "queued-follow-ups";

type ThreadHandoffComposerStatusInput = {
  pendingPastedTextAttachmentCount: number;
  queuedFollowUpsError: boolean;
  queuedFollowUpsLoading: boolean;
  queuedFollowUpCount: number;
};

export const pendingPastedTextAttachmentCountStore = appScopeUnderscore(
  _appScopeT,
  () => 0,
);

export function adjustPendingPastedTextAttachmentCount(
  scope: AppScope,
  conversationId: string | null | undefined,
  delta: number,
): void {
  if (conversationId != null) {
    scope.set(
      pendingPastedTextAttachmentCountStore,
      conversationId,
      scope.get<number>(pendingPastedTextAttachmentCountStore, conversationId) +
        delta,
    );
  }
}

export function getThreadHandoffComposerDisabledReason({
  pendingPastedTextAttachmentCount,
  queuedFollowUpsError,
  queuedFollowUpsLoading,
  queuedFollowUpCount,
}: ThreadHandoffComposerStatusInput): ThreadHandoffComposerDisabledReason | null {
  return pendingPastedTextAttachmentCount > 0
    ? "pending-pasted-text-attachments"
    : queuedFollowUpsLoading
      ? "loading-queued-follow-ups"
      : queuedFollowUpsError
        ? "unavailable-queued-follow-ups"
        : queuedFollowUpCount > 0
          ? "queued-follow-ups"
          : null;
}

export function initThreadHandoffComposerStatusChunk(): void {}
