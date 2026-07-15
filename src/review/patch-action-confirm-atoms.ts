// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Atoms + setters backing the review patch-action confirmation flow: tracks the
// pending stage/unstage/revert request, the in-flight flag, and whether the revert
// confirmation dialog is shown (honoring the persisted "don't ask again" choice).

import {
  createScopedAtom,
  appAtomScope,
  skipRevertConfirmationAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import type { PatchActionParams, ReviewFileDiff } from "./diff-patch-builder";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

export interface PendingPatchActionRequest {
  params: PatchActionParams;
  reviewFiles: ReviewFileDiff[] | null;
  revision: string | null;
}

export const pendingPatchActionAtom =
  createScopedAtom<PendingPatchActionRequest | null>(appAtomScope, null);
export const isApplyingPatchAtom = createScopedAtom<boolean>(
  appAtomScope,
  false,
);
export const patchConfirmationVisibleAtom = createScopedAtom<boolean>(
  appAtomScope,
  false,
);
export const patchConfirmationDontAskAgainAtom = createScopedAtom<boolean>(
  appAtomScope,
  false,
);

export function beginPatchAction(
  scope: AppScope,
  request: PendingPatchActionRequest,
): void {
  scope.set(patchConfirmationDontAskAgainAtom, false);
  scope.set(pendingPatchActionAtom, request);
  if (
    request.params.action === "revert" &&
    !scope.get<boolean>(skipRevertConfirmationAtom)
  ) {
    scope.set(patchConfirmationVisibleAtom, true);
    return;
  }
  scope.set(patchConfirmationVisibleAtom, false);
}

export function setPatchConfirmationDontAskAgain(
  scope: AppScope,
  value: boolean,
): void {
  scope.set(patchConfirmationDontAskAgainAtom, value);
}

export function cancelPatchConfirmation(scope: AppScope): void {
  scope.set(patchConfirmationVisibleAtom, false);
  clearPendingPatchAction(scope);
  scope.set(patchConfirmationDontAskAgainAtom, false);
}

export function confirmPatchAction(scope: AppScope): void {
  if (
    scope.get<PendingPatchActionRequest | null>(pendingPatchActionAtom) == null
  ) {
    scope.set(patchConfirmationVisibleAtom, false);
    clearPendingPatchAction(scope);
    scope.set(patchConfirmationDontAskAgainAtom, false);
    return;
  }
  if (scope.get<boolean>(patchConfirmationDontAskAgainAtom)) {
    scope.set(skipRevertConfirmationAtom, true);
  }
  scope.set(patchConfirmationVisibleAtom, false);
  scope.set(patchConfirmationDontAskAgainAtom, false);
}

export function clearPendingPatchAction(scope: AppScope): void {
  scope.set(pendingPatchActionAtom, null);
}

export function stageFilterFromReviewFilter(
  filter: string,
): "staged" | "unstaged" {
  return filter === "staged" ? "staged" : "unstaged";
}
