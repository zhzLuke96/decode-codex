// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search result list rendered inside the settings navigation sidebar.
import { getSettingsSectionIcon } from "./navigation-config";
import { buildClassName, FormattedMessage } from "./runtime";
import type { SettingsSearchResultsProps } from "./types";

export function SettingsSearchResults({
  highlightedIndex,
  intl,
  listRef,
  onSelect,
  searchResults,
}: SettingsSearchResultsProps) {
  if (searchResults.length === 0) {
    return (
      <div className="px-row-x pt-2 text-sm text-token-text-secondary">
        <FormattedMessage
          id="settings.search.noResults"
          defaultMessage="No results found"
          description="Empty state shown when settings search has no matching destinations"
        />
      </div>
    );
  }

  return (
    <div ref={listRef} className="flex flex-col gap-3 pt-1">
      {searchResults.map((result, index) => {
        const ResultIcon = getSettingsSectionIcon(result.sectionSlug, false);

        return (
          <div key={result.sectionSlug} className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 px-row-x py-1 text-base text-token-text-secondary">
              <ResultIcon className="icon-sm shrink-0" />
              <span className="truncate">{result.panelLabel}</span>
            </div>
            <button
              aria-label={intl.formatMessage(
                {
                  id: "settings.search.result.ariaLabel",
                  defaultMessage: "{destination}, {panel}",
                  description:
                    "Accessible label for a settings search result and its containing panel",
                },
                {
                  destination: result.label,
                  panel: result.panelLabel,
                },
              )}
              className={buildClassName(
                "focus-visible:ring-token-focus flex cursor-interaction items-center rounded-lg py-1.5 pe-2 ps-8.5 text-left text-base text-token-foreground hover:bg-token-list-hover-background focus-visible:ring-1 focus-visible:outline-none",
                index === highlightedIndex && "bg-token-list-hover-background",
              )}
              data-list-navigation-item="true"
              onClick={() => {
                onSelect(result.sectionSlug);
              }}
              type="button"
            >
              <span className="truncate">{result.label}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
