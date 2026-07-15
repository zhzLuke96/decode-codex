// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility exports for the review patch-action confirmation flow.

import {
  cancelPatchConfirmation,
  isApplyingPatchAtom,
  patchConfirmationDontAskAgainAtom,
  patchConfirmationVisibleAtom,
  setPatchConfirmationDontAskAgain,
} from "./patch-action-confirm-atoms";
import {
  confirmAndRunPatchAction,
  startPatchAction,
} from "./patch-action-runner";
import type { PatchActionParams } from "./diff-patch-builder";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
  queryClient?: unknown;
};

export const revertConfirmDialogOpenAtom = patchConfirmationVisibleAtom;
export const revertConfirmDialogSkipCheckedAtom =
  patchConfirmationDontAskAgainAtom;
export const reviewPatchActionInFlightAtom = isApplyingPatchAtom;
export const reviewRevertActionInFlightAtom = isApplyingPatchAtom;

export function requestReviewPatchAction(
  scope: AppScope,
  params: PatchActionParams,
): void {
  void startPatchAction(scope as Parameters<typeof startPatchAction>[0], params);
}

export function closeRevertConfirmDialog(scope: AppScope): void {
  cancelPatchConfirmation(scope);
}

export function confirmRevertChanges(scope: AppScope): void {
  void confirmAndRunPatchAction(
    scope as Parameters<typeof confirmAndRunPatchAction>[0],
  );
}

export function setRevertConfirmDialogSkipChecked(
  scope: AppScope,
  value: boolean,
): void {
  setPatchConfirmationDontAskAgain(scope, value);
}
