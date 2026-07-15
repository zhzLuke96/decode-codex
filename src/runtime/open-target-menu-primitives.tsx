// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Menu primitives shared by open-target dropdowns and context menus.
import type * as React from "react";

import { ContextMenu, type ContextMenuItemDefinition } from "../ui/context-menu";
import { Dropdown, DropdownMenu } from "../ui/dropdown";

type OpenTargetMenuProps = {
  children: React.ReactElement;
  items: ContextMenuItemDefinition[];
};

function OpenTargetMenuRoot({ children, items }: OpenTargetMenuProps) {
  return <ContextMenu items={items}>{children}</ContextMenu>;
}

export const OpenTargetDropdownMenu = DropdownMenu;

export const OpenTargetMenu = Object.assign(OpenTargetMenuRoot, {
  Item: Dropdown.Item,
  ItemIcon: Dropdown.ItemIcon,
  Message: Dropdown.Message,
  Separator: Dropdown.Separator,
});

