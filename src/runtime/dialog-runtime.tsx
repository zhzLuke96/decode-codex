// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Minimal app-level dialog registry used by command and feedback surfaces.
import * as React from "react";

import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

type AppScopeStoreLike = {
  set?: (signal: unknown, value: unknown) => void;
};

type DialogComponent<Props extends Record<string, unknown>> =
  React.ComponentType<Props & { onClose: () => void }>;

type DialogEntry = {
  component: DialogComponent<Record<string, unknown>>;
  id: number;
  props: Record<string, unknown>;
};

const listeners = new Set<() => void>();
const dialogStack: DialogEntry[] = [];
let nextDialogId = 1;

export const activeDialogAtom = appScopeUnderscore<DialogEntry | null>(
  appScopeRoot,
  () => null,
);

function getActiveDialog(): DialogEntry | null {
  return dialogStack.at(-1) ?? null;
}

function publishDialogChange(store?: AppScopeStoreLike): void {
  store?.set?.(activeDialogAtom, getActiveDialog());
  for (const listener of listeners) listener();
}

function subscribeDialogChange(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function openDialog<Props extends Record<string, unknown>>(
  store: AppScopeStoreLike | null | undefined,
  component: DialogComponent<Props>,
  props: Props,
): number {
  const id = nextDialogId++;
  const providedOnClose =
    typeof props.onClose === "function"
      ? (props.onClose as () => void)
      : undefined;
  const entry: DialogEntry = {
    component: component as DialogComponent<Record<string, unknown>>,
    id,
    props: {
      ...props,
      onClose: () => {
        providedOnClose?.();
        closeDialog(store, component);
      },
    },
  };
  dialogStack.push(entry);
  publishDialogChange(store ?? undefined);
  return id;
}

export function closeDialog(
  store?: AppScopeStoreLike | null,
  component?: React.ComponentType<unknown>,
): void {
  if (component == null) {
    dialogStack.pop();
    publishDialogChange(store ?? undefined);
    return;
  }

  const index = dialogStack.findLastIndex(
    (entry) => entry.component === component,
  );
  if (index >= 0) {
    dialogStack.splice(index, 1);
    publishDialogChange(store ?? undefined);
  }
}

export function DialogHost(): React.ReactElement | null {
  const activeDialog = React.useSyncExternalStore(
    subscribeDialogChange,
    getActiveDialog,
    getActiveDialog,
  );
  if (activeDialog == null) return null;
  return React.createElement(activeDialog.component, activeDialog.props);
}

