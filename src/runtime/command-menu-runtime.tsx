// Restored from ref/webview/assets/app-initial~app-main~local-conversation-page-D-F_r9ay.js
// App-wide command-menu registration state and cmdk component aliases.

import type React from "react";
import { useEffect, useMemo } from "react";

import {
  appScopeO as useAppScopeStore,
  appScopeRoot,
  createAppScopeSignal,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { Command, useCommandState } from "../vendor/cmdk";

type CommandMenuRender = (
  closeCommandMenu: () => void,
  clearSearch: () => void,
) => React.ReactNode;

export type CommandMenuRegistration = {
  dependencies?: readonly unknown[];
  enabled?: boolean;
  exclusive?: boolean;
  groupKey?: string;
  id: string;
  order?: number;
  render: CommandMenuRender;
};

type CommandMenuStore = {
  set(
    signal: unknown,
    updater:
      | CommandMenuRegistration[]
      | ((
          registrations: CommandMenuRegistration[] | undefined,
        ) => CommandMenuRegistration[]),
  ): void;
};

export const commandMenuRegistrationsSignal = createAppScopeSignal<
  CommandMenuRegistration[]
>(appScopeRoot, []);
export const FIRST_COMMAND_ITEM_VALUE = "command-menu-first-chat-item";
export const CommandMenuList = Command;
export const CommandMenuGroup = Command.Group;
export const useCommandMenuState = useCommandState;
export const useCommandMenuStore = useCommandState;

export type CommandMenuListItemProps = React.ComponentPropsWithoutRef<
  typeof Command.Item
> & {
  description?: string | null;
  descriptionClassName?: string;
  descriptionTooltipContent?: React.ReactNode;
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
  title: string;
  titleTooltipContent?: React.ReactNode;
  tooltipDelayDuration?: number;
};

export function CommandMenuListItem({
  description,
  descriptionClassName,
  descriptionTooltipContent: _descriptionTooltipContent,
  leftAccessory,
  rightAccessory,
  title,
  titleTooltipContent: _titleTooltipContent,
  tooltipDelayDuration: _tooltipDelayDuration,
  ...itemProps
}: CommandMenuListItemProps) {
  return (
    <Command.Item {...itemProps}>
      <div className="flex w-full min-w-0 items-center gap-2">
        {leftAccessory}
        <div className="min-w-0 flex-1 truncate">{title}</div>
        {description ? (
          <div
            className={
              descriptionClassName ??
              "min-w-0 flex-1 truncate text-right text-sm text-token-description-foreground"
            }
          >
            {description}
          </div>
        ) : null}
        {rightAccessory}
      </div>
    </Command.Item>
  );
}

function stringifyDependency(value: unknown): string {
  if (value == null) return "";
  return String(value);
}

function getDependencyKey(dependencies?: readonly unknown[]): string {
  return dependencies?.map(stringifyDependency).join("|") ?? "";
}

function compareCommandMenuRegistrations(
  first: CommandMenuRegistration,
  second: CommandMenuRegistration,
): number {
  const orderDelta = (first.order ?? 0) - (second.order ?? 0);
  if (orderDelta !== 0) return orderDelta;
  return first.id.localeCompare(second.id);
}

function upsertCommandMenuRegistration(
  registrations: CommandMenuRegistration[],
  registration: CommandMenuRegistration,
): CommandMenuRegistration[] {
  return [
    ...registrations.filter((item) => item.id !== registration.id),
    registration,
  ]
    .filter((item) => item.enabled !== false)
    .sort(compareCommandMenuRegistrations);
}

export function useCommandMenuRegistration(
  registration: CommandMenuRegistration,
): void {
  const store = useAppScopeStore() as CommandMenuStore;
  const dependencyKey = useMemo(
    () => getDependencyKey(registration.dependencies),
    [registration.dependencies],
  );

  useEffect(() => {
    store.set(commandMenuRegistrationsSignal, (registrations) =>
      upsertCommandMenuRegistration(registrations ?? [], registration),
    );
    return () => {
      store.set(commandMenuRegistrationsSignal, (registrations) =>
        (registrations ?? []).filter((item) => item.id !== registration.id),
      );
    };
  }, [
    dependencyKey,
    registration.enabled,
    registration.exclusive,
    registration.groupKey,
    registration.id,
    registration.order,
    registration.render,
    store,
  ]);
}

export const useRegisterCommandMenuGroup = useCommandMenuRegistration;

export function useCommandMenuRegistrations(): CommandMenuRegistration[] {
  return useAppScopeValue(commandMenuRegistrationsSignal) ?? [];
}
