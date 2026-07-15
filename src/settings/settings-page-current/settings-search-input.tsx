// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search input for the settings navigation sidebar.
import * as React from "react";
import { useHotkey } from "../../utils/use-hotkey";
import { ClearSearchIcon, SearchIcon, useIntl } from "./runtime";
import type { SettingsSearchInputProps } from "./types";

export function SettingsSearchInput({
  onKeyDown,
  onQueryChange,
  searchQuery,
}: SettingsSearchInputProps) {
  const intl = useIntl();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  useHotkey({
    accelerator: "CmdOrCtrl+F",
    onKeyDown: (event) => {
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    },
  });

  const searchLabel = intl.formatMessage({
    id: "settings.search.label",
    defaultMessage: "Search settings",
    description: "Accessible label for the settings search input",
  });

  const searchPlaceholder = intl.formatMessage({
    id: "settings.search.placeholder",
    defaultMessage: "Search settings...",
    description: "Placeholder text for the settings search input",
  });

  const clearSearchLabel = intl.formatMessage({
    id: "settings.search.clear",
    defaultMessage: "Clear settings search",
    description: "Button label to clear settings search input",
  });

  return (
    <div className="mb-4 flex h-token-button-composer w-full shrink-0 items-center rounded-lg border border-token-border-heavy bg-token-input-background/50 text-base leading-[18px] shadow-sm backdrop-blur-sm [.electron-dark_&]:border-token-border [.electron-dark_&]:bg-token-bg-fog [.electron-dark_&]:shadow-none [.electron-dark_&]:backdrop-blur-none">
      <SearchIcon className="icon-xs ms-2 shrink-0 text-token-input-placeholder-foreground" />
      <input
        ref={inputRef}
        aria-label={searchLabel}
        className="ms-1 w-full appearance-none border-none bg-transparent py-0 ps-px pe-1.5 text-token-foreground ring-0 outline-none placeholder:text-token-input-placeholder-foreground focus:border-none focus:ring-0 focus:outline-none"
        onChange={(event) => {
          onQueryChange(event.target.value);
        }}
        onKeyDown={onKeyDown}
        placeholder={searchPlaceholder}
        role="searchbox"
        type="text"
        value={searchQuery}
      />
      {searchQuery.length > 0 ? (
        <button
          aria-label={clearSearchLabel}
          className="flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-md text-token-input-placeholder-foreground hover:text-token-foreground"
          onClick={() => {
            onQueryChange("");
          }}
          type="button"
        >
          <ClearSearchIcon className="icon-2xs" />
        </button>
      ) : null}
    </div>
  );
}
