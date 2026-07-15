// Restored from ref/webview/assets/command-menu-state-Cs_dyGtg.js
import { _appScopeG, _appScopeT } from "../boundaries/app-scope";
type CommandMenuItemFrame = {
  menuItem?: unknown;
  [key: string]: unknown;
};
type CommandMenuStackByScope = Record<string, CommandMenuItemFrame[]>;
const emptyCommandMenuStacks: CommandMenuStackByScope = {};
const commandMenuOpenSignal = _appScopeG(_appScopeT, false);
const commandMenuStacksSignal = _appScopeG(_appScopeT, emptyCommandMenuStacks);
function getCommandMenuStackSize(
  stacks: CommandMenuStackByScope,
  scope: string,
) {
  return stacks[scope]?.length ?? 0;
}
function getTopCommandMenuItem(stacks: CommandMenuStackByScope, scope: string) {
  const stack = stacks[scope];
  for (let index = (stack?.length ?? 0) - 1; index >= 0; index--) {
    const menuItem = stack?.[index]?.menuItem;
    if (menuItem != null) return menuItem;
  }
}

export {
  commandMenuStacksSignal,
  getTopCommandMenuItem,
  commandMenuOpenSignal,
  getCommandMenuStackSize,
};
export type { CommandMenuStackByScope };
