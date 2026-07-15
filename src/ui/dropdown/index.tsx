// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
import {
  DropdownContent,
  DropdownMessage,
  DropdownSection,
  DropdownSectionLabel,
  DropdownSeparator,
  DropdownTitle,
  DropdownTrigger,
} from "./content";
import { DropdownItem, DropdownItemIcon } from "./item";
import { DropdownMenu } from "./menu";
import {
  DropdownInput,
  DropdownSearchIcon,
  DropdownSearchInput,
} from "./search";
import { DropdownFlyoutSubmenuItem, DropdownSubmenuItem } from "./submenu";
export { DropdownItem } from "./item";
export { DropdownMenu } from "./menu";
export { DropdownSearchIcon, DropdownSearchInput } from "./search";
export { DropdownSubmenuItem } from "./submenu";
export { DropdownSeparator } from "./content";

export function initDropdownMenuPrimitives(): void {}

export const Dropdown = {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  ItemIcon: DropdownItemIcon,
  Input: DropdownInput,
  SearchInput: DropdownSearchInput,
  Separator: DropdownSeparator,
  SectionLabel: DropdownSectionLabel,
  Message: DropdownMessage,
  Title: DropdownTitle,
  SubmenuItem: DropdownSubmenuItem,
  FlyoutSubmenuItem: DropdownFlyoutSubmenuItem,
  Section: DropdownSection,
};

export const MenuChrome = Dropdown;
