// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// User-facing toast notifications + analytics for review stage/unstage/revert patch
// actions: routes each (status, action, scope) combination to a localized success,
// error, partial-success, or "missing patch" message and records the product event.

import {
  intlAtom,
  toastControllerAtom,
  recordProductEvent,
  reviewPatchActionEvent,
} from "../boundaries/onboarding-commons-externals.facade";
import type { PatchActionParams, StageFilter } from "./diff-patch-builder";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

interface IntlController {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
}

interface ToastController {
  success(message: string): void;
  danger(message: string): void;
  info(message: string): void;
}

export type PatchActionStatus =
  | "success"
  | "error"
  | "partial-success"
  | string;

type StageUnstageAction = "stage" | "unstage" | string;

export function showPatchActionToast(
  scope: AppScope,
  status: PatchActionStatus,
  params: PatchActionParams,
  errorCode?: string,
): void {
  if (params.action === "revert") {
    showRevertToast(scope, status, params, errorCode);
    return;
  }
  showStageUnstageToast(scope, status, params.action, errorCode);
}

export function showStageUnstageToast(
  scope: AppScope,
  status: PatchActionStatus,
  action: StageUnstageAction,
  errorCode?: string,
): void {
  const intl = scope.get<IntlController>(intlAtom);
  const toast = scope.get<ToastController>(toastControllerAtom);

  if (status === "error" && errorCode === "not-git-repo") {
    toast.danger(
      intl.formatMessage({
        id: "codex.hunk.patch.notGitRepo",
        defaultMessage: "This action requires a Git repository",
        description:
          "Message displayed when stage/unstage patch action is attempted outside a Git repository",
      }),
    );
    return;
  }

  if (status === "success") {
    toast.success(
      action === "unstage"
        ? intl.formatMessage({
            id: "codex.hunk.patch.revertSuccess",
            defaultMessage: "Unstaged successfully",
            description: "Message displayed when hunk is unstaged successfully",
          })
        : intl.formatMessage({
            id: "codex.hunk.patch.success",
            defaultMessage: "Staged successfully",
            description: "Message displayed when hunk is updated successfully",
          }),
    );
    return;
  }

  if (status === "error") {
    toast.danger(
      action === "unstage"
        ? intl.formatMessage({
            id: "codex.hunk.patch.revertError",
            defaultMessage: "Failed to unstage",
            description: "Message displayed when failed to revert a hunk",
          })
        : intl.formatMessage({
            id: "codex.hunk.patch.error",
            defaultMessage: "Failed to stage",
            description: "Message displayed when failed to update a hunk",
          }),
    );
    return;
  }

  toast.info(
    intl.formatMessage({
      id: "codex.hunk.patch.partialSuccess",
      defaultMessage: "Partial success",
      description: "Message displayed when partial success",
    }),
  );
}

export function showRevertToast(
  scope: AppScope,
  status: PatchActionStatus,
  params: PatchActionParams,
  errorCode?: string,
): void {
  const intl = scope.get<IntlController>(intlAtom);
  const toast = scope.get<ToastController>(toastControllerAtom);

  if (status === "error" && errorCode === "not-git-repo") {
    toast.danger(
      intl.formatMessage({
        id: "codex.review.revert.notGitRepo",
        defaultMessage: "Revert requires a Git repository",
        description:
          "Toast shown when revert patch action is attempted outside a Git repository",
      }),
    );
    return;
  }

  const hunkNumber = ("hunkIndex" in params ? (params.hunkIndex ?? 0) : 0) + 1;
  const path = "path" in params ? params.path : undefined;

  if (status === "success") {
    if (params.scope === "section") {
      toast.success(
        intl.formatMessage({
          id: "codex.review.revert.section.success",
          defaultMessage: "Section reverted",
          description: "Toast shown when section revert succeeds",
        }),
      );
      return;
    }
    if (params.scope === "file") {
      toast.success(
        intl.formatMessage(
          {
            id: "codex.review.revert.file.success",
            defaultMessage: "Reverted {path}",
            description: "Toast shown when file revert succeeds",
          },
          { path },
        ),
      );
      return;
    }
    toast.success(
      intl.formatMessage(
        {
          id: "codex.review.revert.hunk.success",
          defaultMessage: "Reverted hunk {hunkNumber} in {path}",
          description: "Toast shown when hunk revert succeeds",
        },
        { hunkNumber, path },
      ),
    );
    return;
  }

  if (status === "error") {
    if (params.scope === "section") {
      toast.danger(
        intl.formatMessage({
          id: "codex.review.revert.section.error",
          defaultMessage: "Failed to revert section",
          description: "Toast shown when section revert fails",
        }),
      );
      return;
    }
    if (params.scope === "file") {
      toast.danger(
        intl.formatMessage(
          {
            id: "codex.review.revert.file.error",
            defaultMessage: "Failed to revert {path}",
            description: "Toast shown when file revert fails",
          },
          { path },
        ),
      );
      return;
    }
    toast.danger(
      intl.formatMessage(
        {
          id: "codex.review.revert.hunk.error",
          defaultMessage: "Failed to revert hunk {hunkNumber} in {path}",
          description: "Toast shown when hunk revert fails",
        },
        { hunkNumber, path },
      ),
    );
    return;
  }

  if (params.scope === "section") {
    toast.info(
      intl.formatMessage({
        id: "codex.review.revert.section.partialSuccess",
        defaultMessage: "Section partially reverted",
        description: "Toast shown when section revert partially succeeds",
      }),
    );
    return;
  }
  if (params.scope === "file") {
    toast.info(
      intl.formatMessage(
        {
          id: "codex.review.revert.file.partialSuccess",
          defaultMessage: "Partially reverted {path}",
          description: "Toast shown when file revert partially succeeds",
        },
        { path },
      ),
    );
    return;
  }
  toast.info(
    intl.formatMessage(
      {
        id: "codex.review.revert.hunk.partialSuccess",
        defaultMessage: "Partially reverted hunk {hunkNumber} in {path}",
        description: "Toast shown when hunk revert partially succeeds",
      },
      { hunkNumber, path },
    ),
  );
}

export function showPatchMissingToast(
  scope: AppScope,
  patchScope: "section" | "file" | "hunk" | string,
): void {
  const intl = scope.get<IntlController>(intlAtom);
  const toast = scope.get<ToastController>(toastControllerAtom);
  const message =
    patchScope === "section"
      ? intl.formatMessage({
          id: "codex.section.patch.missing",
          defaultMessage: "Unable to build patch for this section.",
          description:
            "Message displayed when unable to build patch for a section",
        })
      : patchScope === "file"
        ? intl.formatMessage({
            id: "codex.file.patch.missing",
            defaultMessage: "Unable to build patch for this file.",
            description:
              "Message displayed when unable to build patch for a file",
          })
        : intl.formatMessage({
            id: "codex.hunk.patch.missing",
            defaultMessage: "Unable to build patch for this hunk.",
            description:
              "Message displayed when unable to build patch for a hunk",
          });
  toast.danger(message);
}

export function recordPatchActionEvent(
  scope: AppScope,
  params: PatchActionParams,
  status: PatchActionStatus,
): void {
  recordProductEvent(scope, reviewPatchActionEvent, {
    action: params.action,
    scope: params.scope ?? "hunk",
    status,
  });
}

export type { StageFilter };
