// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-CQrj7g91.js
// Browser sidebar context-menu wrapper used by pull request summary rows.

import {
  ContextMenu,
  type ContextMenuItemDefinition,
  type ContextMenuProps,
} from "./context-menu";

export type BrowserSidebarMenuItem = ContextMenuItemDefinition;

export type BrowserSidebarMenuProps = Pick<
  ContextMenuProps,
  | "awaitBeforeOpen"
  | "children"
  | "disableNative"
  | "getItems"
  | "items"
  | "onBeforeOpen"
>;

export function BrowserSidebarMenu(props: BrowserSidebarMenuProps) {
  return <ContextMenu {...props} />;
}

export function initBrowserSidebarMenuChunk(): void {}
