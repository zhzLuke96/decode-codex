// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer scoped-state aliases and submit logging helpers.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { appLogger, serializeError } from "../runtime/app-logger";
import { composerScope } from "./composer-scope-runtime";
import {
  setComposerModeForScope,
  updateComposerViewStateField,
} from "./composer-view-state";
import type { ComposerMode, ScopeStore } from "./composer-view-state";

type HookScanKey = {
  cwd?: string | null;
};

type HookReviewRecord = Record<string, unknown>;

export const composerScopeAtom = composerScope;
export const MULTI_AGENT_MODE = "explicitRequestOnly";

export const nextTurnModelOverrideSignal = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

const dismissedMessageLimitBannerSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

export function setComposerScopedField(
  scope: ScopeStore,
  field: string,
  value: unknown,
): void {
  updateComposerViewStateField(scope, field as never, value as never);
}

export function resolveComposerMode(
  scope: ScopeStore,
  analyticsConversationId: unknown,
  mode: ComposerMode | null,
): void {
  if (mode == null) return;
  setComposerModeForScope(scope, analyticsConversationId, mode);
}

export function dismissMessageLimitBanner(
  scope: { set?: (...args: unknown[]) => void },
  remoteProjectPin: unknown,
): void {
  scope.set?.(dismissedMessageLimitBannerSignal, remoteProjectPin, true);
}

export function hasSeenMultiAgentComposerBannerRunner(): void {
  try {
    localStorage.setItem("has-seen-multi-agent-composer-banner", "true");
  } catch {
    // Best-effort UI preference persistence.
  }
}

export function logComposerMessageSent(
  _scope: unknown,
  payload: Record<string, unknown>,
): void {
  appLogger.info("[Composer] message sent", {
    safe: {
      mode: payload.mode,
      serviceTier: payload.serviceTier,
      isFollowUp: payload.isFollowUp,
      isResponseInProgress: payload.isResponseInProgress,
    },
    sensitive: { payload },
  });
}

export function reportComposerSubmitError(
  error: unknown,
  context: Record<string, unknown> = {},
): void {
  appLogger.error("[Composer] submit failed", {
    safe: {
      mode: context.mode,
      followUp: context.followUp,
    },
    sensitive: {
      cwd: context.cwd,
      error: serializeError(error),
    },
  });
}

export function requiredHooksFilter(hook: unknown): boolean {
  if (hook == null || typeof hook !== "object") return false;
  const record = hook as HookReviewRecord;
  return (
    record.needsReview === true ||
    record.requiresReview === true ||
    record.reviewRequired === true ||
    record.trusted === false ||
    record.status === "needs_review" ||
    record.reviewStatus === "needs_review"
  );
}

Object.assign(requiredHooksFilter, {
  id: "required-hooks-filter",
  read: (key: HookScanKey | unknown) => {
    const cwd =
      key != null && typeof key === "object"
        ? ((key as HookScanKey).cwd ?? null)
        : null;
    return {
      data: {
        data: cwd == null ? [] : [{ cwd, hooks: [] }],
      },
      error: null,
      isError: false,
      isLoading: false,
      isPending: false,
    };
  },
});
