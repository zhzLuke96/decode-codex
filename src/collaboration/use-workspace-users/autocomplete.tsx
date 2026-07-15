// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Multi-select autocomplete for share targets.
import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import clsx from "clsx";
import { XIcon } from "../../icons/x-icon";
import { ListNavigation } from "../../utils/list-navigation";
import { Spinner } from "../../ui/spinner";
import type { ShareTargetOption, ShareTargetOptionSection } from "./types";
type NavigationItemProps = HTMLAttributes<HTMLButtonElement> & {
  "data-list-navigation-item"?: "true";
};
type GetNavigationItemProps = (index: number) => NavigationItemProps;
type ShareTargetAutocompleteProps = {
  ariaLabel: string;
  emptyMessage: ReactNode;
  getRemoveLabel: (option: ShareTargetOption) => string;
  onQueryChange: (query: string) => void;
  onRemoveOption: (option: ShareTargetOption) => void;
  onSelectOption: (option: ShareTargetOption) => void;
  options?: ShareTargetOption[] | null;
  optionSections?: ShareTargetOptionSection[] | null;
  placeholder?: string;
  query: string;
  selectedOptions: ShareTargetOption[];
  trailingContent?: ReactNode;
};
function ShareTargetAutocomplete({
  ariaLabel,
  emptyMessage,
  getRemoveLabel,
  options,
  optionSections,
  placeholder,
  query,
  selectedOptions,
  trailingContent,
  onQueryChange,
  onRemoveOption,
  onSelectOption,
}: ShareTargetAutocompleteProps) {
  const trimmedQuery = query.trim();
  const isQueryActive = trimmedQuery.length > 0;
  const flatOptions = optionSections?.flatMap(getSectionOptions) ?? options;
  const handleSelectOption = (option: ShareTargetOption) => {
    onSelectOption(option);
    onQueryChange("");
  };
  const handleEscape = () => {
    onQueryChange("");
  };
  const { highlightedIndex, listRef, getInputProps, getItemProps } =
    ListNavigation<ShareTargetOption>({
      items: flatOptions,
      isActive: isQueryActive,
      onSelect: handleSelectOption,
      onEscape: handleEscape,
    });
  const selectedChips = selectedOptions.map((option) => (
    <span
      key={option.id}
      className="inline-flex min-w-0 items-center gap-1 rounded-md bg-token-badge-background px-1 py-[1px] text-sm text-token-badge-foreground"
    >
      <span className="truncate">{option.chipLabel ?? option.label}</span>
      <button
        type="button"
        aria-label={getRemoveLabel(option)}
        className="cursor-interaction rounded-sm text-token-description-foreground hover:text-token-foreground"
        onClick={() => {
          onRemoveOption(option);
        }}
      >
        <XIcon aria-hidden={true} className="icon-2xs" />
      </button>
    </span>
  ));
  const inputProps = getInputProps({
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
      if (isQueryActive && event.key === "Enter") event.preventDefault();
    },
  });
  const itemPropsGetter = getItemProps as GetNavigationItemProps;
  const optionList = isQueryActive ? (
    <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-md border border-token-border bg-token-dropdown-background shadow-sm">
      <div
        ref={listRef}
        className={clsx(
          "flex max-h-64 flex-col overflow-y-auto p-1",
          flatOptions == null && "min-h-64",
        )}
        role="listbox"
      >
        {flatOptions == null ? (
          <div className="flex flex-1 items-center justify-center text-token-description-foreground">
            <Spinner className="icon-xs" />
          </div>
        ) : flatOptions.length === 0 ? (
          <div className="px-2 py-1.5 text-sm text-token-input-placeholder-foreground">
            {emptyMessage}
          </div>
        ) : optionSections == null ? (
          flatOptions.map((option, index) => (
            <ShareTargetOptionRow
              key={option.id}
              highlightedIndex={highlightedIndex}
              index={index}
              option={option}
              getItemProps={itemPropsGetter}
            />
          ))
        ) : (
          <ShareTargetOptionSections
            highlightedIndex={highlightedIndex}
            optionSections={optionSections}
            getItemProps={itemPropsGetter}
          />
        )}
      </div>
    </div>
  ) : null;
  return (
    <div className="relative">
      <div className="flex min-h-[30px] w-full flex-wrap items-center gap-1 rounded-md border border-token-input-border bg-token-input-background px-2 py-1 text-base text-token-input-foreground focus-within:border-token-focus-border">
        {selectedChips}
        <input
          {...inputProps}
          aria-label={ariaLabel}
          className="min-w-36 flex-1 bg-transparent outline-none placeholder:text-token-input-placeholder-foreground"
          placeholder={selectedOptions.length === 0 ? placeholder : undefined}
          value={query}
          onChange={(event) => {
            onQueryChange(event.currentTarget.value);
          }}
        />
        {trailingContent}
      </div>
      {optionList}
    </div>
  );
}
function getSectionOptions(section: ShareTargetOptionSection) {
  return section.options;
}
function ShareTargetOptionSections({
  highlightedIndex,
  optionSections,
  getItemProps,
}: {
  getItemProps: GetNavigationItemProps;
  highlightedIndex: number;
  optionSections: ShareTargetOptionSection[];
}) {
  const sections = optionSections.flatMap((section, sectionIndex) => {
    if (section.options.length === 0) return [];
    const optionOffset = optionSections
      .slice(0, sectionIndex)
      .reduce(sumSectionOptions, 0);
    return [
      <div
        key={section.id}
        className="flex flex-col border-b border-token-border last:border-b-0"
      >
        <div className="px-2 pt-2 pb-1 text-xs font-medium text-token-description-foreground">
          {section.label}
        </div>
        {section.options.map((option, optionIndex) => (
          <ShareTargetOptionRow
            key={option.id}
            highlightedIndex={highlightedIndex}
            index={optionOffset + optionIndex}
            option={option}
            getItemProps={getItemProps}
          />
        ))}
      </div>,
    ];
  });
  return <>{sections}</>;
}
function sumSectionOptions(
  total: number,
  section: ShareTargetOptionSection,
): number {
  return total + section.options.length;
}
function ShareTargetOptionRow({
  highlightedIndex,
  index,
  option,
  getItemProps,
}: {
  getItemProps: GetNavigationItemProps;
  highlightedIndex: number;
  index: number;
  option: ShareTargetOption;
}) {
  const OptionIcon = option.Icon;
  const itemProps = getItemProps(index);
  const isHighlighted = index === highlightedIndex;
  const icon =
    OptionIcon == null ? null : (
      <OptionIcon aria-hidden={true} className="icon-sm mt-0.5 shrink-0" />
    );
  const secondaryLabel =
    option.secondaryLabel == null ? null : (
      <span className="text-sm text-token-description-foreground">
        {option.secondaryLabel}
      </span>
    );
  return (
    <button
      type="button"
      {...itemProps}
      aria-selected={isHighlighted}
      className={clsx(
        "cursor-interaction flex w-full items-start gap-2 rounded-sm px-2 py-1.5 text-left",
        isHighlighted && "bg-token-list-hover-background",
      )}
      role="option"
    >
      {icon}
      <span className="flex min-w-0 flex-col">
        <span className="text-sm text-token-foreground">{option.label}</span>
        {secondaryLabel}
      </span>
    </button>
  );
}
export { ShareTargetAutocomplete };
