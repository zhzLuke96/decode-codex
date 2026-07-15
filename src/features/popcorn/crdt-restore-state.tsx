// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
import { type ReactElement, useEffect, useRef, useState } from "react";

import { Dt as compactWorkbookRuntimeUpdates } from "../../boundaries/workbook-runtime";

export type PopcornCrdtUpdate = string | readonly unknown[];

export type PopcornCrdtUpdateInput = PopcornCrdtUpdate | null | undefined;

export type PopcornCrdtRestoreController = {
  applyCrdtUpdate(update: PopcornCrdtUpdate): Promise<void> | void;
  subscribeCrdtUpdates?(
    onUpdate: (update: PopcornCrdtUpdate) => void,
  ): void | (() => void);
};

export type PopcornCrdtBootstrapState = {
  initialCrdtState: PopcornCrdtUpdateInput;
  bootstrappedExternalCrdtUpdates: PopcornCrdtUpdate[];
};

export type UseBootstrappedExternalCrdtUpdatesOptions = {
  initialCrdtState?: PopcornCrdtUpdateInput;
  externalCrdtUpdates?: readonly PopcornCrdtUpdateInput[] | null;
};

export type UseBootstrappedExternalCrdtUpdatesResult = {
  initialCrdtState: PopcornCrdtUpdateInput;
  externalCrdtUpdates: PopcornCrdtUpdate[];
};

export type UseExternalCrdtRestoreStateOptions = {
  artifactLabel: string;
  controller?: PopcornCrdtRestoreController | null;
  externalCrdtUpdates?: readonly PopcornCrdtUpdateInput[] | null;
  onCrdtUpdate?: (update: PopcornCrdtUpdate) => void;
};

export type ExternalCrdtRestoreState =
  | {
      kind: "restoring";
      pendingUpdateCount: number;
    }
  | {
      kind: "failed";
      artifactLabel: string;
      errorMessage: string;
      pendingUpdateCount: number;
    };

export type ExternalCrdtRestoreOverlayProps = {
  artifactLabel: string;
  restoreState: ExternalCrdtRestoreState | null;
};

const LARGE_RESTORE_UPDATE_COUNT = 500;

function nonEmptyCrdtUpdates(
  updates: readonly PopcornCrdtUpdateInput[] | null | undefined,
): PopcornCrdtUpdate[] {
  return (updates ?? []).filter(
    (update): update is PopcornCrdtUpdate =>
      update != null && update.length > 0,
  );
}

function compactCrdtUpdates(
  updates: readonly PopcornCrdtUpdate[],
): PopcornCrdtUpdate | null {
  const nonEmptyUpdates = updates.filter((update) => update.length > 0);
  if (nonEmptyUpdates.length === 0) return null;
  if (nonEmptyUpdates.length === 1) return nonEmptyUpdates[0] ?? null;
  return compactWorkbookRuntimeUpdates(nonEmptyUpdates) as PopcornCrdtUpdate;
}

function compactPendingCrdtUpdates(
  updates: readonly PopcornCrdtUpdate[],
  startIndex: number,
): PopcornCrdtUpdate | null {
  return compactCrdtUpdates(updates.slice(startIndex));
}

function sameCrdtUpdate(
  left: PopcornCrdtUpdate,
  right: PopcornCrdtUpdate,
): boolean {
  if (left === right) return true;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) return false;
  }
  return true;
}

function sameCrdtUpdateList(
  left: readonly PopcornCrdtUpdate[],
  right: readonly PopcornCrdtUpdate[],
): boolean {
  if (left === right) return true;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    const leftUpdate = left[index];
    const rightUpdate = right[index];
    if (
      leftUpdate == null ||
      rightUpdate == null ||
      !sameCrdtUpdate(leftUpdate, rightUpdate)
    ) {
      return false;
    }
  }
  return true;
}

function mergeInitialAndExternalCrdtUpdates({
  initialCrdtState,
  externalCrdtUpdates,
}: UseBootstrappedExternalCrdtUpdatesOptions): PopcornCrdtUpdateInput {
  const nonEmptyUpdates = nonEmptyCrdtUpdates(externalCrdtUpdates);
  if (initialCrdtState != null && initialCrdtState.length > 0) {
    nonEmptyUpdates.unshift(initialCrdtState);
  }
  if (nonEmptyUpdates.length === 0) return initialCrdtState;
  if (nonEmptyUpdates.length === 1) return nonEmptyUpdates[0];
  return compactWorkbookRuntimeUpdates(nonEmptyUpdates) as PopcornCrdtUpdate;
}

function createBootstrapState(
  options: UseBootstrappedExternalCrdtUpdatesOptions,
): PopcornCrdtBootstrapState {
  const bootstrappedExternalCrdtUpdates = nonEmptyCrdtUpdates(
    options.externalCrdtUpdates,
  );
  return {
    initialCrdtState: mergeInitialAndExternalCrdtUpdates({
      initialCrdtState: options.initialCrdtState,
      externalCrdtUpdates: bootstrappedExternalCrdtUpdates,
    }),
    bootstrappedExternalCrdtUpdates,
  };
}

function remainingExternalCrdtUpdates({
  bootstrapState,
  updates,
}: {
  bootstrapState: PopcornCrdtBootstrapState;
  updates: readonly PopcornCrdtUpdateInput[] | null | undefined;
}): PopcornCrdtUpdate[] {
  const nonEmptyUpdates = nonEmptyCrdtUpdates(updates);
  const bootstrappedUpdates = bootstrapState.bootstrappedExternalCrdtUpdates;
  if (
    bootstrappedUpdates.length === 0 ||
    nonEmptyUpdates.length < bootstrappedUpdates.length
  ) {
    return nonEmptyUpdates;
  }

  for (let index = 0; index < bootstrappedUpdates.length; index += 1) {
    const bootstrappedUpdate = bootstrappedUpdates[index];
    const update = nonEmptyUpdates[index];
    if (
      bootstrappedUpdate == null ||
      update == null ||
      !sameCrdtUpdate(bootstrappedUpdate, update)
    ) {
      return nonEmptyUpdates;
    }
  }

  return nonEmptyUpdates.slice(bootstrappedUpdates.length);
}

export function formatExternalCrdtRestoreError(
  error: unknown,
  artifactLabel: string,
): string {
  return error instanceof Error && error.message.trim().length > 0
    ? error.message
    : `Failed to restore external ${artifactLabel.toLowerCase()} edits.`;
}

export function useBootstrappedExternalCrdtUpdates({
  initialCrdtState,
  externalCrdtUpdates,
}: UseBootstrappedExternalCrdtUpdatesOptions): UseBootstrappedExternalCrdtUpdatesResult {
  const bootstrapStateRef = useRef<PopcornCrdtBootstrapState | null>(null);
  bootstrapStateRef.current ??= createBootstrapState({
    initialCrdtState,
    externalCrdtUpdates,
  });
  const bootstrapState = bootstrapStateRef.current;

  return {
    initialCrdtState: bootstrapState.initialCrdtState,
    externalCrdtUpdates: remainingExternalCrdtUpdates({
      bootstrapState,
      updates: externalCrdtUpdates,
    }),
  };
}

export function useExternalCrdtRestoreState({
  artifactLabel,
  controller,
  externalCrdtUpdates,
  onCrdtUpdate,
}: UseExternalCrdtRestoreStateOptions): ExternalCrdtRestoreState | null {
  const appliedUpdateCountRef = useRef(0);
  const stableUpdatesRef = useRef(nonEmptyCrdtUpdates(externalCrdtUpdates));
  const [restoreState, setRestoreState] =
    useState<ExternalCrdtRestoreState | null>(null);

  const nextUpdates = nonEmptyCrdtUpdates(externalCrdtUpdates);
  if (!sameCrdtUpdateList(stableUpdatesRef.current, nextUpdates)) {
    stableUpdatesRef.current = nextUpdates;
  }
  const stableUpdates = stableUpdatesRef.current;

  useEffect(() => {
    if (controller == null || onCrdtUpdate == null) return;
    return controller.subscribeCrdtUpdates?.(onCrdtUpdate);
  }, [controller, onCrdtUpdate]);

  useEffect(() => {
    if (controller == null) return;

    const updates = stableUpdates;
    if (updates.length < appliedUpdateCountRef.current) {
      appliedUpdateCountRef.current = updates.length;
      setRestoreState(null);
      return;
    }
    if (updates.length === appliedUpdateCountRef.current) {
      setRestoreState(null);
      return;
    }

    let cancelled = false;
    void (async () => {
      const pendingUpdateCount = updates.length - appliedUpdateCountRef.current;
      setRestoreState(
        pendingUpdateCount >= LARGE_RESTORE_UPDATE_COUNT
          ? {
              kind: "restoring",
              pendingUpdateCount,
            }
          : null,
      );

      try {
        const compactedUpdate = compactPendingCrdtUpdates(
          updates,
          appliedUpdateCountRef.current,
        );
        if (cancelled) return;
        if (compactedUpdate != null) {
          await controller.applyCrdtUpdate(compactedUpdate);
          if (cancelled) return;
        }
        appliedUpdateCountRef.current = updates.length;
        setRestoreState(null);
      } catch (error) {
        if (cancelled) return;
        setRestoreState({
          kind: "failed",
          artifactLabel,
          errorMessage: formatExternalCrdtRestoreError(error, artifactLabel),
          pendingUpdateCount,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [artifactLabel, controller, stableUpdates]);

  return restoreState;
}

export function ExternalCrdtRestoreOverlay({
  artifactLabel,
  restoreState,
}: ExternalCrdtRestoreOverlayProps): ReactElement | null {
  if (restoreState == null) return null;

  const toneClassName =
    restoreState.kind === "failed"
      ? "border-token-border-default bg-token-bg-primary text-token-editor-warning-foreground"
      : "border-token-border-default bg-token-bg-primary text-token-text-secondary";

  return (
    <div className="absolute inset-0 z-10 flex items-end bg-token-bg-primary/35 p-3 backdrop-blur-[2px]">
      <div
        className={`w-full rounded-xl border px-3 py-2 text-xs shadow-lg ${toneClassName}`}
        role={restoreState.kind === "failed" ? "alert" : "status"}
      >
        {restoreState.kind === "failed" ? (
          <div className="flex flex-col gap-1">
            <div className="font-medium text-token-text-primary">
              Could not restore {artifactLabel.toLowerCase()} edits
            </div>
            <div>
              {restoreState.errorMessage} Pending CRDT updates:{" "}
              {restoreState.pendingUpdateCount}.
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="font-medium text-token-text-primary">
              Restoring {artifactLabel.toLowerCase()} edits
            </div>
            <div>
              Compacting and applying {restoreState.pendingUpdateCount} CRDT
              updates.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function initExternalCrdtRestoreRuntime(): void {}
