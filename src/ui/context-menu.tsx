// Restored from ref/webview/assets/context-menu-BlTZjoP-.js
// Context menu component with Electron-native menu support and Radix fallback.
import React, {
  type ComponentProps,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { CheckMdIcon } from "../icons/check-md-icon";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { useStableCallback } from "../utils/use-stable-callback";
import { useWindowZoom } from "../utils/window-zoom-context";
import {
  ContextMenu as ContextMenuRoot,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../vendor/radix-context-menu";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Tooltip } from "./tooltip-b";
type MessageDescriptor = ComponentProps<typeof FormattedMessage>;
type MessageValues = MessageDescriptor["values"];
type ContextMenuBaseItem = {
  id: string;
  enabled?: boolean;
  icon?: string;
  message?: MessageDescriptor;
  messageValues?: MessageValues;
  nativeLabel?: string;
  nativeTooltip?: string;
  onSelect?: () => void;
  submenu?: ContextMenuItemDefinition[];
  tooltipMessage?: MessageDescriptor;
  tooltipMessageValues?: MessageValues;
};
type ContextMenuActionItem = ContextMenuBaseItem & {
  type?: "item";
};
type ContextMenuCheckboxItemDefinition = ContextMenuBaseItem & {
  checked?: boolean;
  type: "checkbox";
};
type ContextMenuSeparatorItem = {
  id: string;
  nativeLabel?: string;
  submenu?: undefined;
  type: "separator";
};
export type ContextMenuItemDefinition =
  | ContextMenuActionItem
  | ContextMenuCheckboxItemDefinition
  | ContextMenuSeparatorItem;
type ResolvedContextMenuItem =
  | (ContextMenuSeparatorItem & {
      nativeLabel: "";
      submenu: undefined;
    })
  | ((ContextMenuActionItem | ContextMenuCheckboxItemDefinition) & {
      nativeLabel: string;
      nativeTooltip?: string;
      submenu?: ResolvedContextMenuItem[];
    });
type NativeContextMenuItem = {
  enabled: boolean;
  icon?: string;
  id: string;
  label: string;
  submenu?: NativeContextMenuItem[];
  toolTip?: string;
  type?: "separator";
};
type NativeContextMenuSelection = {
  id?: string;
};
type ElectronContextMenuBridge = {
  showContextMenu?: (
    items: NativeContextMenuItem[],
  ) =>
    | NativeContextMenuSelection
    | undefined
    | Promise<NativeContextMenuSelection | undefined>;
};
declare global {
  interface Window {
    electronBridge?: ElectronContextMenuBridge;
  }
}
export type ContextMenuProps = {
  awaitBeforeOpen?: boolean;
  children: ReactElement<{
    onContextMenu?: React.MouseEventHandler;
  }>;
  disableNative?: boolean;
  getItems?: () =>
    | ContextMenuItemDefinition[]
    | Promise<ContextMenuItemDefinition[]>;
  items?: ContextMenuItemDefinition[];
  onBeforeOpen?: () => void | Promise<void>;
};
function resolveMenuItems(
  items: ContextMenuItemDefinition[],
  formatMessage: (message: MessageDescriptor, values?: MessageValues) => string,
): ResolvedContextMenuItem[] {
  return items.map((item) => {
    if (item.type === "separator") {
      return {
        ...item,
        nativeLabel: "",
        submenu: undefined,
      };
    }
    return {
      ...item,
      nativeLabel: item.message
        ? formatMessage(item.message, item.messageValues)
        : item.id,
      nativeTooltip: item.tooltipMessage
        ? formatMessage(item.tooltipMessage, item.tooltipMessageValues)
        : undefined,
      submenu: item.submenu
        ? resolveMenuItems(item.submenu, formatMessage)
        : undefined,
    };
  });
}
function toNativeMenuItems(
  items: ResolvedContextMenuItem[],
): NativeContextMenuItem[] {
  return items.map((item) => ({
    id: item.id,
    type: item.type === "separator" ? "separator" : undefined,
    label:
      item.type === "separator"
        ? ""
        : item.type === "checkbox" && item.checked === true
          ? `\u2713 ${item.nativeLabel}`
          : item.nativeLabel,
    icon: item.type === "separator" ? undefined : item.icon,
    enabled: item.type === "separator" ? true : (item.enabled ?? true),
    toolTip: item.type === "separator" ? undefined : item.nativeTooltip,
    submenu:
      item.type === "separator" || !item.submenu
        ? undefined
        : toNativeMenuItems(item.submenu),
  }));
}
function findMenuItem(
  items: ResolvedContextMenuItem[],
  itemId: string,
): ResolvedContextMenuItem | undefined {
  for (const item of items) {
    if (item.type !== "separator") {
      if (item.id === itemId) return item;
      if (item.submenu) {
        const submenuItem = findMenuItem(item.submenu, itemId);
        if (submenuItem) return submenuItem;
      }
    }
  }
}
function isPromiseLike<TValue>(
  value: TValue | Promise<TValue>,
): value is Promise<TValue> {
  return (
    typeof value === "object" &&
    value != null &&
    "then" in value &&
    typeof value.then === "function"
  );
}
export function ContextMenu({
  items = [],
  getItems,
  children,
  disableNative,
  awaitBeforeOpen = true,
  onBeforeOpen,
}: ContextMenuProps) {
  const intl = useIntl();
  const windowZoom = useWindowZoom();
  const useNativeMenu =
    !disableNative && window.electronBridge?.showContextMenu != null;
  const initialItems = resolveMenuItems(items, intl.formatMessage);
  const [resolvedItems, setResolvedItems] =
    React.useState<ResolvedContextMenuItem[]>(initialItems);
  const updateResolvedItems = React.useCallback(
    (nextItems: ContextMenuItemDefinition[]) => {
      const nextResolvedItems = resolveMenuItems(nextItems, intl.formatMessage);
      setResolvedItems(nextResolvedItems);
      return nextResolvedItems;
    },
    [intl.formatMessage],
  );
  const loadItems = React.useCallback(() => {
    const nextItems = getItems ? getItems() : (items ?? []);
    if (isPromiseLike(nextItems)) {
      setResolvedItems([]);
      void nextItems.then(updateResolvedItems);
      return [];
    }
    return updateResolvedItems(nextItems);
  }, [getItems, items, updateResolvedItems]);
  const loadItemsForRadixOpen = React.useCallback(() => {
    if (!awaitBeforeOpen) {
      const currentItems = loadItems();
      const beforeOpenResult = onBeforeOpen?.();
      if (beforeOpenResult != null) {
        void Promise.resolve(beforeOpenResult).then(loadItems);
      }
      return currentItems;
    }
    const beforeOpenResult = onBeforeOpen?.();
    if (beforeOpenResult != null) {
      void Promise.resolve(beforeOpenResult).then(loadItems);
    }
    return loadItems();
  }, [awaitBeforeOpen, loadItems, onBeforeOpen]);
  const loadItemsForNativeOpen = React.useCallback(async () => {
    await onBeforeOpen?.();
    return updateResolvedItems(await (getItems ? getItems() : (items ?? [])));
  }, [getItems, items, onBeforeOpen, updateResolvedItems]);
  React.useEffect(() => {
    if (!getItems) {
      setResolvedItems(resolveMenuItems(items ?? [], intl.formatMessage));
    }
  }, [getItems, intl, items]);
  const selectItem = React.useCallback(
    (itemId: string, menuItems = resolvedItems) => {
      findMenuItem(menuItems, itemId)?.onSelect?.();
    },
    [resolvedItems],
  );
  const showNativeContextMenu = React.useCallback(
    async (event: ReactMouseEvent) => {
      if (!useNativeMenu) return;
      event.preventDefault();
      document.dispatchEvent(new PointerEvent("pointercancel"));
      const menuItems = awaitBeforeOpen
        ? await loadItemsForNativeOpen()
        : loadItemsForRadixOpen();
      const selectedItemId = (
        await window.electronBridge?.showContextMenu?.(
          toNativeMenuItems(menuItems),
        )
      )?.id;
      if (selectedItemId) selectItem(selectedItemId, menuItems);
    },
    [
      awaitBeforeOpen,
      loadItemsForNativeOpen,
      loadItemsForRadixOpen,
      selectItem,
      useNativeMenu,
    ],
  );
  const stableShowNativeContextMenu = useStableCallback(showNativeContextMenu);
  const originalOnContextMenu = children.props.onContextMenu;
  const onContextMenu = useStableCallback((event: ReactMouseEvent) => {
    originalOnContextMenu?.(event);
    if (useNativeMenu) {
      void stableShowNativeContextMenu(event);
      return;
    }
    event.stopPropagation();
  });
  const trigger = React.cloneElement(children, {
    onContextMenu,
  });
  if (useNativeMenu) return trigger;
  const zoom = windowZoom === 1 ? undefined : windowZoom;
  return (
    <ContextMenuRoot
      onOpenChange={(open) => {
        if (open) loadItemsForRadixOpen();
      }}
    >
      <ContextMenuTrigger asChild>{trigger}</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuContent
          className="z-50 m-px flex min-w-[180px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none"
          collisionPadding={6}
          style={{
            zoom,
          }}
        >
          {renderMenuItems(resolvedItems, windowZoom)}
        </ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenuRoot>
  );
}
function renderMenuItems(
  items: ResolvedContextMenuItem[],
  windowZoom: number,
): ReactNode[] {
  const zoom = windowZoom === 1 ? undefined : windowZoom;
  return items.map((item) => {
    if (item.type === "separator") {
      return (
        <ContextMenuSeparator
          key={item.id}
          className="mx-1 my-1 border-t border-token-border/60"
        />
      );
    }
    if (item.type === "checkbox") {
      return (
        <Tooltip
          key={item.id}
          tooltipContent={
            item.tooltipMessage ? (
              <FormattedMessage
                {...item.tooltipMessage}
                values={item.tooltipMessageValues}
              />
            ) : null
          }
        >
          <ContextMenuCheckboxItem
            checked={item.checked ?? false}
            className={clsx(
              "text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background",
              item.enabled === false && "cursor-default opacity-50",
            )}
            disabled={item.enabled === false}
            onCheckedChange={() => {
              item.onSelect?.();
            }}
          >
            <ContextMenuItemLabel
              checked={item.checked === true}
              label={renderItemLabel(item)}
              showCheckbox={true}
            />
          </ContextMenuCheckboxItem>
        </Tooltip>
      );
    }
    if (item.submenu) {
      return (
        <ContextMenuSub key={item.id}>
          <ContextMenuSubTrigger
            className="flex cursor-interaction items-center justify-between gap-1.5 rounded-lg p-1.5 text-sm text-token-foreground outline-hidden hover:bg-token-list-hover-background focus:bg-token-list-hover-background"
            disabled={item.enabled === false}
          >
            <ContextMenuItemLabel
              icon={item.icon}
              label={renderItemLabel(item)}
              showChevron={true}
            />
          </ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent
              className="z-50 m-px flex min-w-[200px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none"
              collisionPadding={6}
              style={{
                zoom,
              }}
            >
              {renderMenuItems(item.submenu, windowZoom)}
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>
      );
    }
    return (
      <Tooltip
        key={item.id}
        tooltipContent={
          item.tooltipMessage ? (
            <FormattedMessage
              {...item.tooltipMessage}
              values={item.tooltipMessageValues}
            />
          ) : null
        }
      >
        <ContextMenuItem
          className={clsx(
            "text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background",
            item.enabled === false && "cursor-default opacity-50",
          )}
          onSelect={(event) => {
            if (item.enabled === false) {
              event.preventDefault();
              return;
            }
            item.onSelect?.();
          }}
          aria-disabled={item.enabled === false}
        >
          <ContextMenuItemLabel
            icon={item.icon}
            label={renderItemLabel(item)}
          />
        </ContextMenuItem>
      </Tooltip>
    );
  });
}
function renderItemLabel(item: ResolvedContextMenuItem): ReactNode {
  return item.type !== "separator" && item.message ? (
    <FormattedMessage {...item.message} values={item.messageValues} />
  ) : (
    item.id
  );
}
type ContextMenuItemLabelProps = {
  checked?: boolean;
  icon?: string;
  label: ReactNode;
  showCheckbox?: boolean;
  showChevron?: boolean;
};
function ContextMenuItemLabel({
  checked,
  icon,
  label,
  showCheckbox,
  showChevron,
}: ContextMenuItemLabelProps) {
  return (
    <span className="flex w-full items-center gap-1.5">
      {showCheckbox ? (
        <span className="icon-sm flex shrink-0 items-center justify-center">
          {checked ? (
            <CheckMdIcon aria-hidden={true} className="icon-xs" />
          ) : null}
        </span>
      ) : null}
      {icon ? (
        <img
          alt={typeof label === "string" ? label : ""}
          src={icon}
          className="icon-sm"
        />
      ) : null}
      <span className="truncate">{label}</span>
      {showChevron ? (
        <ChevronRightIcon className="icon-xs ml-auto opacity-50" />
      ) : null}
    </span>
  );
}
