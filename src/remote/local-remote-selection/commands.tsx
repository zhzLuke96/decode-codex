// Restored from ref/webview/assets/local-remote-selection-DRnEOc8g.js
// local-remote-selection-DRnEOc8g chunk restored from the Codex webview bundle.
import React from "react";
import {
  appScopeC as createScopedComputedState,
  appScopeG as createScopedState,
  appScopeO as useAppScopeStore,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { composerPromptScope } from "../../composer/prompt-text";
import { scoreQueryMatch } from "../../utils/score-query-match";
import { sortBy } from "../../utils/sort-by";
import type {
  AppScopeSetter,
  LocalRemoteCommand,
  LocalRemoteCommandRegistration,
} from "./types";
type CommandListSetter = (
  updater: (commands: LocalRemoteCommand[]) => LocalRemoteCommand[],
) => void;
const globalLocalRemoteCommandsState = createScopedState(
  appScopeRoot,
  [] as LocalRemoteCommand[],
);
const promptLocalRemoteCommandsState = createScopedState(
  composerPromptScope,
  [] as LocalRemoteCommand[],
);
const simpleSlashCommandPattern = /^\s*\/[^/\r\n]*\s*$/;
export const localRemoteCommandRegistryState = createScopedComputedState(
  composerPromptScope,
  ({ get }: { get: (state: unknown) => LocalRemoteCommand[] }) =>
    sortCommandsByGroupAndTitle(
      uniqCommandsById([
        ...get(promptLocalRemoteCommandsState),
        ...get(globalLocalRemoteCommandsState),
      ]),
    ),
);
export function useRegisterPromptLocalRemoteCommand({
  dependencies = [],
  ...command
}: LocalRemoteCommandRegistration) {
  const store = useAppScopeStore(composerPromptScope) as AppScopeSetter;
  const setCommands = React.useCallback<CommandListSetter>(
    (updater) => {
      store.set(promptLocalRemoteCommandsState, updater);
    },
    [store],
  );
  useRegisterLocalRemoteCommand(setCommands, command, dependencies);
}
export function useRegisterGlobalLocalRemoteCommand({
  dependencies = [],
  ...command
}: LocalRemoteCommandRegistration) {
  const store = useAppScopeStore(appScopeRoot) as AppScopeSetter;
  const setCommands = React.useCallback<CommandListSetter>(
    (updater) => {
      store.set(globalLocalRemoteCommandsState, updater);
    },
    [store],
  );
  useRegisterLocalRemoteCommand(setCommands, command, dependencies);
}
function useRegisterLocalRemoteCommand(
  setCommands: CommandListSetter,
  command: LocalRemoteCommand,
  dependencies: React.DependencyList,
) {
  const searchAliasesKey = command.searchAliases?.join("\0");
  const triggersKey = command.triggers?.join("\0");
  React.useEffect(() => {
    setCommands((commands) => upsertCommand(commands, command));
  }, [
    command.id,
    command.title,
    command.Content,
    command.Icon,
    command.onSelect,
    triggersKey,
    command.description,
    searchAliasesKey,
    command.enabled,
    command.requiresEmptyComposer,
    command.presentation,
    setCommands,
    command.group,
    ...dependencies,
  ]);
  React.useEffect(
    () => () => {
      setCommands((commands) =>
        commands.filter((item) => item.id !== command.id),
      );
    },
    [command.id, setCommands],
  );
}
function upsertCommand(
  commands: LocalRemoteCommand[],
  command: LocalRemoteCommand,
) {
  return sortCommandsByGroupAndTitle(
    [...commands.filter((item) => item.id !== command.id), command].filter(
      (item) => item.enabled !== false,
    ),
  );
}
function sortCommandsByGroupAndTitle(commands: LocalRemoteCommand[]) {
  return sortBy(commands, [
    (command) => command.group ?? "",
    (command) => command.title,
  ]);
}
function uniqCommandsById(commands: LocalRemoteCommand[]) {
  const seenIds = new Set<string>();
  return commands.filter((command) => {
    if (seenIds.has(command.id)) return false;
    seenIds.add(command.id);
    return true;
  });
}
export function filterLocalRemoteCommands(
  commands: LocalRemoteCommand[],
  query: string,
) {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) return commands;
  const groupOrder = new Map<string | null, number>();
  commands.forEach((command) => {
    const group = command.group ?? null;
    if (!groupOrder.has(group)) groupOrder.set(group, groupOrder.size);
  });
  return sortBy(
    commands
      .map((command) => ({
        command,
        score: scoreLocalRemoteCommand(command, trimmedQuery),
      }))
      .filter((item) => item.score > 0),
    [
      (item) =>
        groupOrder.get(item.command.group ?? null) ?? Number.MAX_SAFE_INTEGER,
      (item) => -item.score,
      (item) => item.command.title,
    ],
  ).map((item) => item.command);
}
export function filterCommandsByTrigger(
  commands: LocalRemoteCommand[],
  trigger: string,
) {
  return commands.filter((command) =>
    (command.triggers ?? ["/"]).includes(trigger),
  );
}
function scoreLocalRemoteCommand(command: LocalRemoteCommand, query: string) {
  return Math.max(
    scoreQueryMatch(command.title, query),
    scoreQueryMatch(command.id, query),
    ...(command.searchAliases ?? []).map((alias) =>
      scoreQueryMatch(alias, query),
    ),
  );
}
export function filterCommandsForComposerText(
  commands: LocalRemoteCommand[],
  hasComposerText: boolean,
) {
  return hasComposerText
    ? commands.filter((command) => !command.requiresEmptyComposer)
    : commands;
}
export function hasNonCommandComposerText(text: string) {
  return text.trim().length === 0
    ? false
    : !simpleSlashCommandPattern.test(text);
}
