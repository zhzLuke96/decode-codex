// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Leaf value editors for the browser design-tweaks editor: scrub-able numeric
// inputs, color/opacity/length fields, suggestion dropdowns, and the per-type router.
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { ChevronIcon } from "../../icons/chevron-icon";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { Dropdown, DropdownMenu } from "../../ui/dropdown";
import {
  COLOR_INPUT_CLASS,
  INPUT_FRAME_CLASS,
  INPUT_TEXT_CLASS,
  INPUT_WIDTH_LG,
  INPUT_WIDTH_MD,
  INPUT_WIDTH_SM,
  NUMERIC_INPUT_CLASS,
  type SuggestionOption,
} from "./design-editor-constants";
import {
  type DesignDeclaration,
  extractPixelValue,
  formatNumber,
  getDeclarationSuggestions,
  getPlaceholderValue,
  getPropertyLabel,
  humanizePropertyName,
  isColorProperty,
  isLengthLikeDeclaration,
  normalizeGapValue,
  parsePixelNumber,
  resolveScrubBaseValue,
  toHexColor,
} from "./design-editor-model";

import { DesignScrubInput } from "./design-scrub-input";
type DesignPropertyLabelProps = {
  property: string;
  spacingAxisOnly?: boolean;
};

function DesignPropertyLabel({
  property,
  spacingAxisOnly,
}: DesignPropertyLabelProps) {
  if (spacingAxisOnly === true) {
    if (property === "margin-top" || property === "padding-top") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.topSpacingProperty"
          defaultMessage="Top"
          description="Compact property label for top margin or padding in the in-app browser design edit card"
        />
      );
    }
    if (property === "margin-bottom" || property === "padding-bottom") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.bottomSpacingProperty"
          defaultMessage="Bottom"
          description="Compact property label for bottom margin or padding in the in-app browser design edit card"
        />
      );
    }
    if (property === "margin-left" || property === "padding-left") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.leftSpacingProperty"
          defaultMessage="Left"
          description="Compact property label for left margin or padding in the in-app browser design edit card"
        />
      );
    }
    if (property === "margin-right" || property === "padding-right") {
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.rightSpacingProperty"
          defaultMessage="Right"
          description="Compact property label for right margin or padding in the in-app browser design edit card"
        />
      );
    }
  }
  switch (property) {
    case "color":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.textColorProperty"
          defaultMessage="Text color"
          description="Property label for text color in the in-app browser design edit card"
        />
      );
    case "background-color":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.backgroundProperty"
          defaultMessage="Background"
          description="Property label for background color in the in-app browser design edit card"
        />
      );
    case "font-family":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.fontProperty"
          defaultMessage="Font"
          description="Property label for font family in the in-app browser design edit card"
        />
      );
    case "font-size":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.fontSizeProperty"
          defaultMessage="Font size"
          description="Property label for font size in the in-app browser design edit card"
        />
      );
    case "font-weight":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.fontWeightProperty"
          defaultMessage="Font weight"
          description="Property label for font weight in the in-app browser design edit card"
        />
      );
    case "border-radius":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.borderRadiusProperty"
          defaultMessage="Border radius"
          description="Property label for border radius in the in-app browser design edit card"
        />
      );
    case "border-color":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.borderColorProperty"
          defaultMessage="Border color"
          description="Property label for border color in the in-app browser design edit card"
        />
      );
    case "border-width":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.borderWidthProperty"
          defaultMessage="Border width"
          description="Property label for border width in the in-app browser design edit card"
        />
      );
    case "width":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.widthProperty"
          defaultMessage="Width"
          description="Property label for width in the in-app browser design edit card"
        />
      );
    case "height":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.heightProperty"
          defaultMessage="Height"
          description="Property label for height in the in-app browser design edit card"
        />
      );
    case "flex-direction":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.flexDirectionProperty"
          defaultMessage="Layout direction"
          description="Property label for flex direction in the in-app browser design edit card"
        />
      );
    case "justify-content":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.justifyContentProperty"
          defaultMessage="Distribution"
          description="Property label for justify-content in the in-app browser design edit card"
        />
      );
    case "align-items":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.alignItemsProperty"
          defaultMessage="Alignment"
          description="Property label for align-items in the in-app browser design edit card"
        />
      );
    case "gap":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.gapProperty"
          defaultMessage="Spacing"
          description="Property label for flex gap in the in-app browser design edit card"
        />
      );
    case "row-gap":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.rowGapProperty"
          defaultMessage="Vertical"
          description="Property label for row gap in the in-app browser design edit card"
        />
      );
    case "column-gap":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.columnGapProperty"
          defaultMessage="Horizontal"
          description="Property label for column gap in the in-app browser design edit card"
        />
      );
    case "padding":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.paddingProperty"
          defaultMessage="Padding"
          description="Property label for padding in the in-app browser design edit card"
        />
      );
    case "margin":
      return (
        <FormattedMessage
          id="browserSidebarDesignEditor.marginProperty"
          defaultMessage="Margin"
          description="Property label for margin in the in-app browser design edit card"
        />
      );
    default:
      return <>{humanizePropertyName(property)}</>;
  }
}

type DesignColorInputProps = {
  isEdited: boolean;
  placeholderValue?: string;
  value: string;
  onValueChange: (value: string) => void;
};

function DesignColorInput({
  isEdited,
  placeholderValue,
  value,
  onValueChange,
}: DesignColorInputProps) {
  const colorValue = value || (placeholderValue ?? "");
  const hexValue = toHexColor(colorValue);
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        INPUT_WIDTH_LG,
        "flex min-h-7 min-w-0 items-center gap-2 px-2",
      )}
    >
      <input
        className={clsx(
          COLOR_INPUT_CLASS,
          "h-5 w-5 shrink-0 cursor-interaction overflow-hidden rounded-md border border-token-border bg-transparent p-0",
        )}
        type="color"
        value={hexValue}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
      <input
        className={clsx(
          INPUT_TEXT_CLASS,
          "h-7 w-full truncate text-left",
          !isEdited && "text-token-input-placeholder-foreground",
        )}
        value={value}
        placeholder={placeholderValue}
        title={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </span>
  );
}

type DesignOpacityInputProps = {
  ariaLabel: string;
  isEdited: boolean;
  placeholderValue?: string;
  property: string;
  value: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

function DesignOpacityInput({
  ariaLabel,
  isEdited,
  placeholderValue,
  property,
  value,
  onScrubActiveChange,
  onValueChange,
}: DesignOpacityInputProps) {
  const scrubValue = resolveScrubBaseValue(value, placeholderValue);
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        INPUT_WIDTH_SM,
        "flex min-h-7 min-w-0 items-center px-3",
      )}
    >
      <DesignScrubInput
        ariaLabel={ariaLabel}
        className={clsx(
          INPUT_TEXT_CLASS,
          NUMERIC_INPUT_CLASS,
          "h-7 w-full truncate text-left",
          !isEdited && "text-token-input-placeholder-foreground",
        )}
        inputMode="decimal"
        max="1"
        min="0"
        property={property}
        step="0.01"
        title={value}
        type="number"
        placeholder={placeholderValue}
        value={value}
        scrubMax={1}
        scrubMin={0}
        scrubStep={0.01}
        scrubValue={scrubValue}
        formatScrubValue={formatNumber}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={onValueChange}
      />
    </span>
  );
}

type DesignLengthInputProps = {
  ariaLabel: string;
  isEdited: boolean;
  placeholderValue?: string;
  property: string;
  value: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

function DesignLengthInput({
  ariaLabel,
  isEdited,
  placeholderValue,
  property,
  value,
  onScrubActiveChange,
  onValueChange,
}: DesignLengthInputProps) {
  const pixelValue = extractPixelValue(value) ?? "";
  const placeholder =
    extractPixelValue(placeholderValue ?? "") ??
    normalizeGapValue(property, placeholderValue ?? value) ??
    undefined;
  const scrubValue =
    parsePixelNumber(value) ?? parsePixelNumber(placeholderValue ?? "") ?? 0;
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        INPUT_WIDTH_SM,
        "flex min-h-7 min-w-0 items-center gap-1 px-3",
      )}
    >
      <DesignScrubInput
        ariaLabel={ariaLabel}
        className={clsx(
          INPUT_TEXT_CLASS,
          NUMERIC_INPUT_CLASS,
          "h-7 w-full truncate text-left",
          !isEdited && "text-token-input-placeholder-foreground",
        )}
        inputMode="decimal"
        property={property}
        step="any"
        title={value}
        type="number"
        value={pixelValue}
        placeholder={placeholder}
        scrubStep={1}
        scrubValue={scrubValue}
        formatScrubValue={formatNumber}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={(nextValue) => {
          onValueChange(nextValue.length === 0 ? "" : `${nextValue}px`);
        }}
      />
      <span className="shrink-0 font-mono text-xs text-token-text-tertiary">
        <FormattedMessage
          id="browserSidebarDesignEditor.pixelUnit"
          defaultMessage="px"
          description="Pixel unit label shown beside numeric design edit fields"
        />
      </span>
    </span>
  );
}

type DesignSuggestionInputProps = {
  ariaLabel: string;
  compact?: boolean;
  isEdited: boolean;
  placeholderValue?: string;
  portalContainer?: HTMLElement | null;
  property: string;
  suggestions: SuggestionOption[];
  value: string;
  onValueChange: (value: string) => void;
};

function DesignSuggestionInput({
  ariaLabel,
  compact = false,
  isEdited,
  placeholderValue,
  portalContainer,
  property,
  suggestions,
  value,
  onValueChange,
}: DesignSuggestionInputProps) {
  const selected = suggestions.find((option) => option.value === value);
  if (property === "font-family") {
    return (
      <span
        className={clsx(
          INPUT_FRAME_CLASS,
          INPUT_WIDTH_MD,
          "flex min-h-7 min-w-0 items-center overflow-hidden",
        )}
      >
        <input
          aria-label={ariaLabel}
          className={clsx(
            INPUT_TEXT_CLASS,
            "h-7 min-w-0 flex-1 truncate px-3 text-left",
            !isEdited && "text-token-input-placeholder-foreground",
          )}
          value={value}
          placeholder={placeholderValue}
          title={value}
          onChange={(event) => {
            onValueChange(event.target.value);
          }}
        />
        <DropdownMenu
          align="end"
          contentWidth="sm"
          portalContainer={portalContainer}
          triggerButton={
            <button
              aria-label={ariaLabel}
              className="flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center border-l border-token-border-light text-token-text-tertiary hover:bg-token-list-hover-background"
              data-browser-sidebar-design-no-drag={true}
              type="button"
            >
              <ChevronIcon className="icon-2xs rotate-90" />
            </button>
          }
        >
          <Dropdown.Section className="flex max-h-[220px] flex-col overflow-y-auto">
            {suggestions.map((option) => (
              <Dropdown.Item
                key={`${option.label ?? option.value}-${option.value}`}
                RightIcon={option.value === value ? CheckMdIcon : undefined}
                onSelect={() => {
                  onValueChange(option.value);
                }}
              >
                {option.label ?? option.value}
              </Dropdown.Item>
            ))}
          </Dropdown.Section>
        </DropdownMenu>
      </span>
    );
  }
  if (suggestions.length === 0) {
    return (
      <span
        className={clsx(
          INPUT_FRAME_CLASS,
          "flex min-h-7 w-full min-w-0 items-center px-3",
        )}
      >
        <input
          aria-label={ariaLabel}
          className={clsx(
            INPUT_TEXT_CLASS,
            "h-7 w-full truncate text-left",
            !isEdited && "text-token-input-placeholder-foreground",
          )}
          value={value}
          placeholder={placeholderValue}
          title={value}
          onChange={(event) => {
            onValueChange(event.target.value);
          }}
        />
      </span>
    );
  }
  const triggerLabel =
    selected?.label ?? (value.length === 0 ? placeholderValue : value);
  const displayLabel = selected?.label ?? (value || placeholderValue);
  return (
    <DropdownMenu
      align="end"
      contentWidth="sm"
      portalContainer={portalContainer}
      triggerButton={
        <button
          aria-label={ariaLabel}
          className={clsx(
            INPUT_FRAME_CLASS,
            compact ? INPUT_WIDTH_SM : INPUT_WIDTH_MD,
            "flex min-h-7 min-w-0 cursor-interaction items-center gap-2 overflow-hidden px-3 text-left",
          )}
          title={triggerLabel}
          type="button"
        >
          <span
            className={clsx(
              "min-w-0 flex-1 truncate font-mono text-xs",
              isEdited
                ? "text-token-input-foreground"
                : "text-token-input-placeholder-foreground",
            )}
          >
            {displayLabel}
          </span>
          <ChevronIcon className="icon-2xs shrink-0 rotate-90 text-token-text-tertiary" />
        </button>
      }
    >
      <Dropdown.Section className="flex max-h-[220px] flex-col overflow-y-auto">
        {suggestions.map((option) => (
          <Dropdown.Item
            key={`${option.label ?? option.value}-${option.value}`}
            RightIcon={option.value === value ? CheckMdIcon : undefined}
            onSelect={() => {
              onValueChange(option.value);
            }}
          >
            {option.label ?? option.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Section>
    </DropdownMenu>
  );
}

type DesignSpacingGridInputProps = {
  declarations: DesignDeclaration[];
  property: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (property: string, value: string) => void;
};

const SPACING_SIDE_ORDER = ["top", "right", "bottom", "left"] as const;

function DesignSpacingGridInput({
  declarations,
  property,
  onScrubActiveChange,
  onValueChange,
}: DesignSpacingGridInputProps) {
  const intl = useIntl();
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        "-ml-6 grid min-h-7 w-[calc(100%+1.5rem)] grid-cols-4 overflow-hidden",
      )}
      data-browser-sidebar-design-scrub-value-cell={true}
    >
      {SPACING_SIDE_ORDER.map((side, index) => {
        const declaration = declarations.find(
          (item) => item.property === `${property}-${side}`,
        );
        if (declaration == null) {
          return (
            <span
              key={`${property}-${side}`}
              className={clsx(
                "flex min-h-7 items-center justify-center font-mono text-xs text-token-input-placeholder-foreground",
                index > 0 && "border-l border-token-border-light",
              )}
            />
          );
        }
        const pixelValue = extractPixelValue(declaration.value);
        const isNumeric = declaration.value.length === 0 || pixelValue != null;
        return (
          <DesignScrubInput
            key={declaration.property}
            ariaLabel={getPropertyLabel(intl, declaration.property)}
            className={clsx(
              INPUT_TEXT_CLASS,
              isNumeric && NUMERIC_INPUT_CLASS,
              "min-h-7 w-full px-1 text-center",
              index > 0 && "border-l border-token-border-light",
              declaration.value === declaration.previousValue &&
                "text-token-input-placeholder-foreground",
            )}
            inputMode={isNumeric ? "decimal" : undefined}
            property={declaration.property}
            formatScrubValue={formatNumber}
            scrubStep={isNumeric ? 1 : undefined}
            scrubValue={
              isNumeric
                ? (parsePixelNumber(declaration.value) ??
                  parsePixelNumber(declaration.placeholderValue ?? "") ??
                  0)
                : null
            }
            step={isNumeric ? "any" : undefined}
            title={declaration.value}
            type={isNumeric ? "number" : undefined}
            placeholder={
              extractPixelValue(declaration.placeholderValue ?? "") ??
              normalizeGapValue(
                declaration.property,
                declaration.placeholderValue ?? declaration.value,
              ) ??
              undefined
            }
            value={isNumeric ? (pixelValue ?? "") : declaration.value}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={(nextValue) => {
              onValueChange(
                declaration.property,
                isNumeric && nextValue.length > 0
                  ? `${nextValue}px`
                  : nextValue,
              );
            }}
          />
        );
      })}
    </span>
  );
}

type DesignFlexGapGridInputProps = {
  columnGap: DesignDeclaration;
  rowGap: DesignDeclaration;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (property: string, value: string) => void;
};

function DesignFlexGapGridInput({
  columnGap,
  rowGap,
  onScrubActiveChange,
  onValueChange,
}: DesignFlexGapGridInputProps) {
  const intl = useIntl();
  return (
    <span
      className={clsx(
        INPUT_FRAME_CLASS,
        "grid min-h-7 w-full grid-cols-2 overflow-hidden",
      )}
      data-browser-sidebar-design-scrub-value-cell={true}
    >
      {[columnGap, rowGap].map((declaration, index) => {
        const pixelValue = extractPixelValue(declaration.value);
        const isNumeric =
          declaration.value.length === 0 ||
          pixelValue != null ||
          normalizeGapValue(declaration.property, declaration.value) != null;
        return (
          <DesignScrubInput
            key={declaration.property}
            ariaLabel={getPropertyLabel(intl, declaration.property)}
            className={clsx(
              INPUT_TEXT_CLASS,
              isNumeric && NUMERIC_INPUT_CLASS,
              "min-h-7 w-full px-1 text-center",
              index > 0 && "border-l border-token-border-light",
              declaration.value === declaration.previousValue &&
                "text-token-input-placeholder-foreground",
            )}
            formatScrubValue={formatNumber}
            inputMode={isNumeric ? "decimal" : undefined}
            property={declaration.property}
            scrubStep={isNumeric ? 1 : undefined}
            scrubValue={
              isNumeric
                ? (parsePixelNumber(declaration.value) ??
                  parsePixelNumber(declaration.placeholderValue ?? "") ??
                  Number(
                    normalizeGapValue(
                      declaration.property,
                      declaration.placeholderValue ?? declaration.value,
                    ) ?? "0",
                  ))
                : null
            }
            step={isNumeric ? "any" : undefined}
            title={declaration.value}
            type={isNumeric ? "number" : undefined}
            placeholder={
              extractPixelValue(declaration.placeholderValue ?? "") ??
              normalizeGapValue(
                declaration.property,
                declaration.placeholderValue ?? declaration.value,
              ) ??
              undefined
            }
            value={isNumeric ? (pixelValue ?? "") : declaration.value}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={(nextValue) => {
              onValueChange(
                declaration.property,
                isNumeric && nextValue.length > 0
                  ? `${nextValue}px`
                  : nextValue,
              );
            }}
          />
        );
      })}
    </span>
  );
}

type DesignDeclarationValueEditorProps = {
  declaration: DesignDeclaration;
  dropdownPortalContainer?: HTMLElement | null;
  isEdited: boolean;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

function DesignDeclarationValueEditor({
  declaration,
  dropdownPortalContainer,
  isEdited,
  onScrubActiveChange,
  onValueChange,
}: DesignDeclarationValueEditorProps) {
  const intl = useIntl();
  const placeholderValue = getPlaceholderValue(declaration);
  if (isColorProperty(declaration.property)) {
    return (
      <DesignColorInput
        isEdited={isEdited}
        placeholderValue={placeholderValue}
        value={declaration.value}
        onValueChange={onValueChange}
      />
    );
  }
  if (declaration.property === "opacity") {
    return (
      <DesignOpacityInput
        ariaLabel={getPropertyLabel(intl, declaration.property)}
        isEdited={isEdited}
        placeholderValue={placeholderValue}
        property={declaration.property}
        value={declaration.value}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={onValueChange}
      />
    );
  }
  if (isLengthLikeDeclaration(declaration)) {
    return (
      <DesignLengthInput
        ariaLabel={getPropertyLabel(intl, declaration.property)}
        isEdited={isEdited}
        placeholderValue={placeholderValue}
        property={declaration.property}
        value={declaration.value}
        onScrubActiveChange={onScrubActiveChange}
        onValueChange={onValueChange}
      />
    );
  }
  const isCompact =
    declaration.property === "font-family" ||
    declaration.property === "font-weight";
  return (
    <DesignSuggestionInput
      ariaLabel={getPropertyLabel(intl, declaration.property)}
      compact={isCompact}
      portalContainer={dropdownPortalContainer}
      property={declaration.property}
      suggestions={getDeclarationSuggestions(intl, declaration)}
      isEdited={isEdited}
      placeholderValue={placeholderValue}
      value={declaration.value}
      onValueChange={onValueChange}
    />
  );
}

export function getDesignEditorFields() {
  return {
    DesignPropertyLabel,
    DesignSpacingGridInput,
    DesignFlexGapGridInput,
    DesignDeclarationValueEditor,
  };
}
