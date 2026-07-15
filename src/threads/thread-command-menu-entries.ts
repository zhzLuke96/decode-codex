// Restored from ref/webview/assets/app-initial~app-main~local-conversation-page-D-F_r9ay.js
// Thread command-menu entry registry and registration hook.
import { useEffect, useMemo, type ReactNode } from "react";

import {
  _appScopeO as useAppScopeStore,
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";

export type ThreadCommandMenuEntryDefinition = {
  id: string;
  order?: number | null;
  enabled?: boolean;
  dependencies?: readonly unknown[] | null;
  exclusive?: boolean;
  groupKey?: string;
  render?: (closeMenu: () => void, search?: string) => ReactNode;
};

type ThreadCommandMenuEntryStore = {
  set(
    signal: unknown,
    updater: (
      currentDefinitions:
        | readonly ThreadCommandMenuEntryDefinition[]
        | undefined,
    ) => readonly ThreadCommandMenuEntryDefinition[],
  ): void;
};

export const threadCommandMenuEntriesSignal = createAppScopeSignal(
  appScopeRoot,
  [] as ThreadCommandMenuEntryDefinition[],
);

export function useRegisterThreadCommandMenuEntry(
  definition: ThreadCommandMenuEntryDefinition,
): void {
  const appScopeStore = useAppScopeStore() as ThreadCommandMenuEntryStore;
  const dependencyKey = useMemo(
    () =>
      definition.dependencies == null
        ? ""
        : definition.dependencies.map(normalizeDependencyKey).join("|"),
    [definition.dependencies],
  );

  useEffect(() => {
    appScopeStore.set(threadCommandMenuEntriesSignal, (current = []) =>
      upsertThreadCommandMenuEntry(current, definition),
    );
    return () => {
      appScopeStore.set(threadCommandMenuEntriesSignal, (current = []) =>
        current.filter((entry) => entry.id !== definition.id),
      );
    };
  }, [
    appScopeStore,
    definition,
    dependencyKey,
    definition.enabled,
    definition.id,
    definition.order,
  ]);
}

function upsertThreadCommandMenuEntry(
  currentDefinitions: readonly ThreadCommandMenuEntryDefinition[],
  definition: ThreadCommandMenuEntryDefinition,
) {
  let didReplace = false;
  const nextDefinitions = currentDefinitions.map((entry) => {
    if (entry.id !== definition.id) return entry;
    didReplace = true;
    return definition;
  });
  if (!didReplace) nextDefinitions.push(definition);
  return nextDefinitions
    .filter(isThreadCommandMenuEntryEnabled)
    .sort(compareThreadCommandMenuEntries);
}

function isThreadCommandMenuEntryEnabled(
  entry: ThreadCommandMenuEntryDefinition,
) {
  return entry.enabled !== false;
}

function compareThreadCommandMenuEntries(
  leftEntry: ThreadCommandMenuEntryDefinition,
  rightEntry: ThreadCommandMenuEntryDefinition,
) {
  return (
    getThreadCommandMenuEntryOrder(leftEntry) -
      getThreadCommandMenuEntryOrder(rightEntry) ||
    leftEntry.id.localeCompare(rightEntry.id)
  );
}

function getThreadCommandMenuEntryOrder(
  entry: ThreadCommandMenuEntryDefinition,
) {
  return entry.order ?? 0;
}

function normalizeDependencyKey(value: unknown) {
  return value == null ? "" : String(value);
}

export function initThreadCommandMenuEntryRegistryChunk(): void {}
