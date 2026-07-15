// Restored from ref/webview/assets/keyboard-shortcuts-search-input-C1dmntOi.js
// keyboard-shortcuts-search-input-C1dmntOi chunk restored from the Codex webview bundle.
import type { KeyboardEvent, ReactNode } from "react";
import clsx from "clsx";
import { useIntl } from "../../vendor/react-intl";
export type KeyboardShortcutsSearchInputProps = {
  autoFocus?: boolean;
  ariaLabel?: string;
  isSearchingByKeystrokes?: boolean;
  placeholder?: string;
  trailingContent?: ReactNode;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  onValueChange: (value: string) => void;
};
export function KeyboardShortcutsSearchInput({
  autoFocus,
  ariaLabel,
  isSearchingByKeystrokes = false,
  placeholder,
  trailingContent,
  onKeyDown,
  value,
  onValueChange,
}: KeyboardShortcutsSearchInputProps) {
  const intl = useIntl();
  const inputKey = isSearchingByKeystrokes ? "keystrokes" : "text";
  const shortcutCaptureMode = isSearchingByKeystrokes || undefined;
  const inputClassName = clsx(
    "w-full rounded-md border border-token-border bg-transparent px-3 py-2 text-sm text-token-text-primary outline-none placeholder:text-token-text-tertiary",
    trailingContent == null ? null : "pe-11",
  );
  const inputAriaLabel = isSearchingByKeystrokes
    ? intl.formatMessage({
        id: "settings.keyboardShortcuts.keystrokeSearch.ariaLabel",
        defaultMessage: "Keystroke search capture",
        description:
          "Accessible label for the input that captures keyboard shortcuts to search",
      })
    : (ariaLabel ??
      intl.formatMessage({
        id: "settings.keyboardShortcuts.search.ariaLabel",
        defaultMessage: "Search keyboard shortcuts",
        description: "Accessible label for the keyboard shortcuts search input",
      }));
  const inputPlaceholder = isSearchingByKeystrokes
    ? intl.formatMessage({
        id: "settings.keyboardShortcuts.keystrokeSearch.placeholder",
        defaultMessage: "Press shortcut to search",
        description:
          "Placeholder shown while capturing a keyboard shortcut to search",
      })
    : (placeholder ??
      intl.formatMessage({
        id: "settings.keyboardShortcuts.search.placeholder",
        defaultMessage: "Search shortcuts",
        description: "Placeholder for the keyboard shortcuts search input",
      }));
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);
    if (!event.defaultPrevented && event.key === "Escape" && value !== "") {
      event.preventDefault();
      event.stopPropagation();
      onValueChange("");
    }
  };
  return (
    <div className="relative">
      <input
        key={inputKey}
        data-codex-shortcut-capture={shortcutCaptureMode}
        autoFocus={autoFocus}
        readOnly={isSearchingByKeystrokes}
        className={inputClassName}
        aria-label={inputAriaLabel}
        placeholder={inputPlaceholder}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(event) => onValueChange(event.currentTarget.value)}
      />
      {trailingContent == null ? null : (
        <div className="absolute inset-y-0 end-1 flex items-center">
          {trailingContent}
        </div>
      )}
    </div>
  );
}

export function initKeyboardShortcutsSearchInputChunk(): void {}
