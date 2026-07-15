// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Workspace access dropdown controls used in sharing dialogs.
import type { ReactNode } from "react";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { ChevronIcon } from "../../icons/chevron-icon";
import { Dropdown, DropdownMenu } from "../../ui/dropdown";
import type { WorkspaceAccessOption } from "./types";
type WorkspaceAccessSelectProps<TValue extends string> = {
  onChange: (value: TValue) => void;
  options: readonly WorkspaceAccessOption<TValue>[];
  renderLabel: (value: TValue) => ReactNode;
  value: TValue;
};
function WorkspaceAccessSelect<TValue extends string>({
  options,
  renderLabel,
  value,
  onChange,
}: WorkspaceAccessSelectProps<TValue>) {
  const selectedOption = options.find((option) => option.value === value);
  const SelectedIcon = selectedOption?.Icon;
  const selectedIcon =
    SelectedIcon == null ? null : (
      <SelectedIcon aria-hidden={true} className="icon-xs" />
    );
  const triggerButton = (
    <button
      type="button"
      className="flex min-w-0 cursor-interaction items-center gap-3 text-left text-base"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10">
        {selectedIcon}
      </span>
      <span className="truncate">{renderLabel(value)}</span>
      <ChevronIcon
        aria-hidden={true}
        className="icon-xs shrink-0 text-token-description-foreground"
      />
    </button>
  );
  const menuItems = options.map((option) => (
    <Dropdown.Item
      key={option.value}
      disabled={option.disabled}
      LeftIcon={option.Icon}
      RightIcon={option.value === value ? CheckMdIcon : undefined}
      onSelect={() => {
        onChange(option.value);
      }}
    >
      {renderLabel(option.value)}
    </Dropdown.Item>
  ));
  return (
    <DropdownMenu
      align="start"
      contentWidth="menu"
      triggerButton={triggerButton}
    >
      {menuItems}
    </DropdownMenu>
  );
}
type WorkspaceAccessDropdownProps<TValue extends string> = {
  onChange?: (value: TValue) => void;
  onRemoveAccess?: () => void;
  options: readonly WorkspaceAccessOption<TValue>[];
  removeLabel?: ReactNode;
  renderLabel: (value: TValue) => ReactNode;
  triggerButtonClassName?: string;
  value: TValue;
};
function WorkspaceAccessDropdown<TValue extends string>({
  options,
  renderLabel,
  removeLabel,
  triggerButtonClassName = "flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground",
  value,
  onChange,
  onRemoveAccess,
}: WorkspaceAccessDropdownProps<TValue>) {
  const triggerButton = (
    <button type="button" className={triggerButtonClassName}>
      {renderLabel(value)}
      <ChevronIcon
        aria-hidden={true}
        className="icon-xs text-token-description-foreground"
      />
    </button>
  );
  const menuItems = options.map((option) => (
    <Dropdown.Item
      key={option.value}
      disabled={option.disabled}
      RightIcon={option.value === value ? CheckMdIcon : undefined}
      tooltipText={option.tooltipText}
      onSelect={() => {
        onChange?.(option.value);
      }}
    >
      {renderLabel(option.value)}
    </Dropdown.Item>
  ));
  const removeAccessItem =
    onRemoveAccess == null ? null : (
      <>
        <Dropdown.Separator />
        <Dropdown.Item onSelect={onRemoveAccess}>
          <span className="text-token-error-foreground">{removeLabel}</span>
        </Dropdown.Item>
      </>
    );
  return (
    <DropdownMenu align="end" contentWidth="menu" triggerButton={triggerButton}>
      {menuItems}
      {removeAccessItem}
    </DropdownMenu>
  );
}
export { WorkspaceAccessDropdown, WorkspaceAccessSelect };
