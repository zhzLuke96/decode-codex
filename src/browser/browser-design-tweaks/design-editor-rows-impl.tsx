// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Row-level layout for the browser design-tweaks editor: declaration rows, linked
// spacing/dimension pairs, expandable spacing groups, dividers, and the drag handle.
import { type ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import { ArrowRotateCcwIcon } from "../../icons/arrow-rotate-ccw-icon";
import { ChevronIcon } from "../../icons/chevron-icon";
import { DragIcon } from "../../icons/drag-icon";
import { LinkIcon } from "../../icons/link-icon";
import type { DesignEditorState } from "../browser-comment-design-draft";
import {
  type DesignDeclaration,
  type DesignSection,
  type LockedRelationships,
  type SpacingGroupProperty,
  findSpacingDeclaration,
  formatTargetLabel,
  getPropertyLabel,
  getSectionKey,
  isLayoutSection,
  spacingRelationshipKey,
} from "./design-editor-model";
import {
  DesignDeclarationValueEditor,
  DesignFlexGapGridInput,
  DesignPropertyLabel,
  DesignSpacingGridInput,
} from "./design-editor-fields";
import {
  INPUT_FRAME_CLASS,
  INPUT_TEXT_CLASS,
  INPUT_WIDTH_LG,
} from "./design-editor-constants";

type ScrubActiveChange = (
  property: string | null,
  element: HTMLElement | null,
) => void;

function DesignRowDivider() {
  return (
    <span
      aria-hidden="true"
      className="col-span-2 my-0.5 border-t border-token-border-light"
    />
  );
}

type DesignValueCellProps = {
  children: ReactNode;
  isScrubbable?: boolean;
  scrubPeerProperty?: string;
  scrubProperty?: string;
  showReset: boolean;
  resetLabel: string;
  onReset: () => void;
};

function DesignValueCell({
  children,
  isScrubbable,
  scrubPeerProperty,
  scrubProperty,
  showReset,
  resetLabel,
  onReset,
}: DesignValueCellProps) {
  return (
    <span
      className="flex min-w-0 justify-end"
      data-browser-sidebar-design-scrub-value-cell={
        isScrubbable === true ? "" : undefined
      }
      data-browser-sidebar-design-scrub-peer-property={scrubPeerProperty}
      data-browser-sidebar-design-scrub-property={scrubProperty}
    >
      <span className="relative inline-flex max-w-full justify-end">
        {showReset ? (
          <Button
            aria-label={resetLabel}
            className="absolute top-1/2 right-full mr-2 h-5 w-5 shrink-0 -translate-y-1/2"
            color="ghost"
            size="iconSm"
            title={resetLabel}
            type="button"
            uniform
            onClick={onReset}
          >
            <ArrowRotateCcwIcon className="icon-2xs" />
          </Button>
        ) : null}
        <span className="flex max-w-full min-w-0 justify-end">{children}</span>
      </span>
    </span>
  );
}

type DesignDeclarationValueCellProps = {
  declaration: DesignDeclaration;
  dropdownPortalContainer?: HTMLElement | null;
  isEditable: boolean;
  onReset: () => void;
  onScrubActiveChange?: ScrubActiveChange;
  scrubPeerProperty?: string;
  onValueChange: (value: string) => void;
};

function DesignDeclarationValueCell({
  declaration,
  dropdownPortalContainer,
  isEditable,
  onReset,
  onScrubActiveChange,
  scrubPeerProperty,
  onValueChange,
}: DesignDeclarationValueCellProps) {
  const intl = useIntl();
  const resetLabel = intl.formatMessage(
    {
      id: "browserSidebarDesignEditor.resetProperty",
      defaultMessage: "Reset {property}",
      description:
        "Accessible label for resetting a design tweak property in the in-app browser design edit card",
    },
    { property: getPropertyLabel(intl, declaration.property) },
  );
  const showReset =
    isEditable && declaration.value !== declaration.previousValue;
  return (
    <DesignValueCell
      isScrubbable={isEditable}
      scrubPeerProperty={scrubPeerProperty}
      scrubProperty={declaration.property}
      showReset={showReset}
      resetLabel={resetLabel}
      onReset={onReset}
    >
      {isEditable ? (
        <DesignDeclarationValueEditor
          declaration={declaration}
          dropdownPortalContainer={dropdownPortalContainer}
          isEdited={declaration.value !== declaration.previousValue}
          onScrubActiveChange={onScrubActiveChange}
          onValueChange={onValueChange}
        />
      ) : (
        <span
          className={clsx(
            INPUT_FRAME_CLASS,
            "block min-h-7 w-full truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground",
          )}
          title={declaration.value}
        >
          {declaration.value}
        </span>
      )}
    </DesignValueCell>
  );
}

type DesignDeclarationRowProps = {
  connector?: ReactNode;
  declaration: DesignDeclaration;
  dropdownPortalContainer?: HTMLElement | null;
  isNested?: boolean;
  isEditable: boolean;
  onReset: () => void;
  scrubPeerProperty?: string;
  onScrubActiveChange?: ScrubActiveChange;
  showsRelationshipConnector?: boolean;
  onValueChange: (value: string) => void;
};

function DesignDeclarationRow({
  connector,
  declaration,
  dropdownPortalContainer,
  isNested = false,
  isEditable,
  onReset,
  scrubPeerProperty,
  onScrubActiveChange,
  showsRelationshipConnector = false,
  onValueChange,
}: DesignDeclarationRowProps) {
  const intl = useIntl();
  const labelClassName = clsx(
    "relative flex min-h-7 min-w-0 items-center text-sm text-token-text-secondary",
    showsRelationshipConnector ? "w-full pr-9" : isNested && "ml-1 pl-3",
  );
  const cloneLabel = getPropertyLabel(intl, declaration.property);
  return (
    <div className="contents">
      <span
        className={labelClassName}
        data-browser-sidebar-design-scrub-label={true}
        data-browser-sidebar-design-scrub-clone-label={cloneLabel}
      >
        {connector}
        <span className="block truncate">
          <DesignPropertyLabel
            property={declaration.property}
            spacingAxisOnly={isNested}
          />
        </span>
      </span>
      <DesignDeclarationValueCell
        declaration={declaration}
        dropdownPortalContainer={dropdownPortalContainer}
        isEditable={isEditable}
        onReset={onReset}
        onScrubActiveChange={onScrubActiveChange}
        scrubPeerProperty={scrubPeerProperty}
        onValueChange={onValueChange}
      />
    </div>
  );
}

type DesignTextRowProps = {
  isEditable: boolean;
  isEdited: boolean;
  value: string;
  onReset: () => void;
  onValueChange: (value: string) => void;
};

function DesignTextRow({
  isEditable,
  isEdited,
  value,
  onReset,
  onValueChange,
}: DesignTextRowProps) {
  const intl = useIntl();
  const textPropertyLabel = intl.formatMessage({
    id: "browserSidebarDesignEditor.textProperty",
    defaultMessage: "Text",
    description:
      "Property label for editable text in the in-app browser design edit card",
  });
  const resetLabel = intl.formatMessage(
    {
      id: "browserSidebarDesignEditor.resetProperty",
      defaultMessage: "Reset {property}",
      description:
        "Accessible label for resetting a design tweak property in the in-app browser design edit card",
    },
    { property: textPropertyLabel },
  );
  return (
    <div className="contents">
      <span className="flex min-h-7 min-w-0 items-center truncate overflow-hidden text-sm text-token-text-secondary">
        <FormattedMessage
          id="browserSidebarDesignEditor.textProperty"
          defaultMessage="Text"
          description="Property label for editable text in the in-app browser design edit card"
        />
      </span>
      <DesignValueCell
        showReset={isEditable && isEdited}
        resetLabel={resetLabel}
        onReset={onReset}
      >
        {isEditable ? (
          <span
            className={clsx(
              INPUT_FRAME_CLASS,
              INPUT_WIDTH_LG,
              "flex min-h-7 min-w-0 items-center px-3",
            )}
          >
            <input
              aria-label={textPropertyLabel}
              className={clsx(INPUT_TEXT_CLASS, "h-7 w-full text-left")}
              data-browser-sidebar-design-content-input={true}
              value={value}
              onChange={(event) => {
                onValueChange(event.target.value);
              }}
            />
          </span>
        ) : (
          <span
            className={clsx(
              INPUT_FRAME_CLASS,
              INPUT_WIDTH_LG,
              "block min-h-7 truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground",
            )}
            title={value}
          >
            {value}
          </span>
        )}
      </DesignValueCell>
    </div>
  );
}

type DesignLockToggleProps = {
  isLocked: boolean;
  label: string;
  onClick: () => void;
};

function DesignLockToggle({ isLocked, label, onClick }: DesignLockToggleProps) {
  return (
    <span className="absolute top-0 -right-1.5 z-10 h-[62px] w-9">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-token-text-tertiary"
        fill="none"
        viewBox="0 0 36 62"
      >
        <path
          d="M28 14H2M28 14V48M28 48H2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
      <Button
        aria-label={label}
        className={clsx(
          "absolute top-1/2 right-0 z-10 h-3.5 w-3.5 -translate-y-1/2 !rounded-full p-0",
          isLocked
            ? "!border-transparent !bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_86%,var(--color-token-text-link-foreground)_14%)] !text-token-text-link-foreground shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,var(--color-token-text-link-foreground)_20%)] enabled:active:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_76%,var(--color-token-text-link-foreground)_24%)] data-[state=open]:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,var(--color-token-text-link-foreground)_20%)] [&_svg]:!text-token-text-link-foreground"
            : "!border-transparent !bg-token-main-surface-primary !text-token-text-secondary shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_92%,var(--color-token-foreground))] enabled:hover:!text-token-foreground enabled:active:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_88%,var(--color-token-foreground)_12%)] enabled:active:!text-token-foreground data-[state=open]:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_92%,var(--color-token-foreground))] data-[state=open]:!text-token-foreground",
        )}
        color="ghost"
        size="iconSm"
        uniform
        onClick={onClick}
      >
        <LinkIcon className="icon-3xs" />
      </Button>
    </span>
  );
}

type DesignLinkedPairRowsProps = {
  first: DesignDeclaration | null;
  isEditable: boolean;
  isLocked: boolean;
  isNested?: boolean;
  lockLabel: string;
  second: DesignDeclaration | null;
  onLockToggle: () => void;
  onReset: (property: string) => void;
  onScrubActiveChange?: ScrubActiveChange;
  onValueChange: (property: string, value: string) => void;
};

function DesignLinkedPairRows({
  first,
  isEditable,
  isLocked,
  isNested = false,
  lockLabel,
  second,
  onLockToggle,
  onReset,
  onScrubActiveChange,
  onValueChange,
}: DesignLinkedPairRowsProps) {
  if (first == null || second == null) return null;
  const firstPeerProperty = isLocked && isNested ? second.property : undefined;
  const secondPeerProperty = isLocked && isNested ? first.property : undefined;
  return (
    <>
      <DesignDeclarationRow
        connector={
          <DesignLockToggle
            isLocked={isLocked}
            label={lockLabel}
            onClick={onLockToggle}
          />
        }
        declaration={first}
        isEditable={isEditable}
        isNested={isNested}
        onReset={() => {
          onReset(first.property);
        }}
        onScrubActiveChange={onScrubActiveChange}
        scrubPeerProperty={firstPeerProperty}
        showsRelationshipConnector
        onValueChange={(value) => {
          onValueChange(first.property, value);
        }}
      />
      <DesignDeclarationRow
        declaration={second}
        isEditable={isEditable}
        isNested={isNested}
        onReset={() => {
          onReset(second.property);
        }}
        onScrubActiveChange={onScrubActiveChange}
        scrubPeerProperty={secondPeerProperty}
        showsRelationshipConnector
        onValueChange={(value) => {
          onValueChange(second.property, value);
        }}
      />
    </>
  );
}

type DesignDimensionsRowProps = {
  height: DesignDeclaration;
  isEditable: boolean;
  isLocked: boolean;
  width: DesignDeclaration;
  onLockToggle: () => void;
  onReset: (property: string) => void;
  onScrubActiveChange?: ScrubActiveChange;
  onValueChange: (property: string, value: string) => void;
};

function DesignDimensionsRow({
  height,
  isEditable,
  isLocked,
  width,
  onLockToggle,
  onReset,
  onScrubActiveChange,
  onValueChange,
}: DesignDimensionsRowProps) {
  const intl = useIntl();
  const lockLabel = isLocked
    ? intl.formatMessage({
        id: "browserSidebarDesignEditor.unlockDimensionRatio",
        defaultMessage: "Unlock width and height ratio",
        description:
          "Accessible label for unlinking width and height controls in the design edit card",
      })
    : intl.formatMessage({
        id: "browserSidebarDesignEditor.lockDimensionRatio",
        defaultMessage: "Lock width and height ratio",
        description:
          "Accessible label for linking width and height controls in the design edit card",
      });
  return (
    <DesignLinkedPairRows
      first={width}
      isEditable={isEditable}
      isLocked={isLocked}
      second={height}
      lockLabel={lockLabel}
      onLockToggle={onLockToggle}
      onReset={onReset}
      onScrubActiveChange={onScrubActiveChange}
      onValueChange={onValueChange}
    />
  );
}

type DesignSpacingGroupRowProps = {
  declarations: DesignDeclaration[];
  isEditable: boolean;
  isExpanded: boolean;
  lockedRelationships: LockedRelationships;
  property: SpacingGroupProperty;
  onDeclarationReset: (property: string) => void;
  onExpandToggle: () => void;
  onLockToggle: (axis: "vertical" | "horizontal") => void;
  onScrubActiveChange?: ScrubActiveChange;
  onValueChange: (property: string, value: string) => void;
};

function DesignSpacingGroupRow({
  declarations,
  isEditable,
  isExpanded,
  lockedRelationships,
  property,
  onDeclarationReset,
  onExpandToggle,
  onLockToggle,
  onScrubActiveChange,
  onValueChange,
}: DesignSpacingGroupRowProps) {
  const intl = useIntl();
  const values = declarations.map((declaration) => declaration.value);
  const sharedValue =
    values.length > 0 && values.every((value) => value === values[0])
      ? values[0]
      : null;
  const expandToggleLabel = isExpanded
    ? intl.formatMessage(
        {
          id: "browserSidebarDesignEditor.collapseSpacing",
          defaultMessage: "Collapse {property}",
          description:
            "Accessible label for collapsing margin or padding rows in the design edit card",
        },
        { property },
      )
    : intl.formatMessage(
        {
          id: "browserSidebarDesignEditor.expandSpacing",
          defaultMessage: "Expand {property}",
          description:
            "Accessible label for expanding margin or padding rows in the design edit card",
        },
        { property },
      );
  const verticalKey = spacingRelationshipKey(property, "vertical");
  const horizontalKey = spacingRelationshipKey(property, "horizontal");
  const verticalLockLabel = lockedRelationships[verticalKey]
    ? intl.formatMessage(
        {
          id: "browserSidebarDesignEditor.unlockSpacingVertical",
          defaultMessage: "Unlock {property} vertical values",
          description:
            "Accessible label for unlinking top and bottom spacing values in the design edit card",
        },
        { property },
      )
    : intl.formatMessage(
        {
          id: "browserSidebarDesignEditor.lockSpacingVertical",
          defaultMessage: "Lock {property} vertical values",
          description:
            "Accessible label for linking top and bottom spacing values in the design edit card",
        },
        { property },
      );
  const horizontalLockLabel = lockedRelationships[horizontalKey]
    ? intl.formatMessage(
        {
          id: "browserSidebarDesignEditor.unlockSpacingHorizontal",
          defaultMessage: "Unlock {property} horizontal values",
          description:
            "Accessible label for unlinking left and right spacing values in the design edit card",
        },
        { property },
      )
    : intl.formatMessage(
        {
          id: "browserSidebarDesignEditor.lockSpacingHorizontal",
          defaultMessage: "Lock {property} horizontal values",
          description:
            "Accessible label for linking left and right spacing values in the design edit card",
        },
        { property },
      );
  return (
    <>
      <div className="contents">
        <span
          className="flex min-h-7 min-w-0 items-center pr-2"
          data-browser-sidebar-design-scrub-label={true}
        >
          <button
            aria-label={expandToggleLabel}
            className="-ml-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-left text-sm text-token-text-secondary hover:bg-token-list-hover-background"
            type="button"
            onClick={onExpandToggle}
          >
            <span className="truncate">
              <DesignPropertyLabel property={property} />
            </span>
            <ChevronIcon
              className={clsx(
                "icon-2xs shrink-0 text-token-text-tertiary transition-transform",
                isExpanded && "rotate-90",
              )}
            />
          </button>
        </span>
        {isExpanded ? (
          <span aria-hidden="true" />
        ) : isEditable ? (
          <DesignSpacingGridInput
            declarations={declarations}
            property={property}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={onValueChange}
          />
        ) : (
          <span
            className={clsx(
              INPUT_FRAME_CLASS,
              "block min-h-7 w-full truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground",
            )}
            title={sharedValue ?? values.join(" ")}
          >
            {sharedValue ?? values.join(" ")}
          </span>
        )}
      </div>
      {isExpanded ? (
        <>
          <DesignLinkedPairRows
            first={findSpacingDeclaration(declarations, property, "top")}
            isEditable={isEditable}
            isLocked={lockedRelationships[verticalKey]}
            isNested
            second={findSpacingDeclaration(declarations, property, "bottom")}
            lockLabel={verticalLockLabel}
            onLockToggle={() => {
              onLockToggle("vertical");
            }}
            onReset={(resetProperty) => {
              onDeclarationReset(resetProperty);
            }}
            onValueChange={onValueChange}
            onScrubActiveChange={onScrubActiveChange}
          />
          <DesignLinkedPairRows
            first={findSpacingDeclaration(declarations, property, "left")}
            isEditable={isEditable}
            isLocked={lockedRelationships[horizontalKey]}
            isNested
            second={findSpacingDeclaration(declarations, property, "right")}
            lockLabel={horizontalLockLabel}
            onLockToggle={() => {
              onLockToggle("horizontal");
            }}
            onReset={(resetProperty) => {
              onDeclarationReset(resetProperty);
            }}
            onValueChange={onValueChange}
            onScrubActiveChange={onScrubActiveChange}
          />
        </>
      ) : null}
    </>
  );
}

type DesignFlexSpacingRowProps = {
  columnGap: DesignDeclaration;
  isEditable: boolean;
  isExpanded: boolean;
  rowGap: DesignDeclaration;
  onDeclarationReset: (property: string) => void;
  onExpandToggle: () => void;
  onScrubActiveChange?: ScrubActiveChange;
  onValueChange: (property: string, value: string) => void;
};

function DesignFlexSpacingRow({
  columnGap,
  isEditable,
  isExpanded,
  rowGap,
  onDeclarationReset,
  onExpandToggle,
  onScrubActiveChange,
  onValueChange,
}: DesignFlexSpacingRowProps) {
  const intl = useIntl();
  const expandToggleLabel = isExpanded
    ? intl.formatMessage({
        id: "browserSidebarDesignEditor.collapseFlexSpacing",
        defaultMessage: "Collapse spacing",
        description:
          "Accessible label for collapsing flex spacing controls in the design edit card",
      })
    : intl.formatMessage({
        id: "browserSidebarDesignEditor.expandFlexSpacing",
        defaultMessage: "Expand spacing",
        description:
          "Accessible label for expanding flex spacing controls in the design edit card",
      });
  return (
    <>
      <div className="contents">
        <span
          className="flex min-h-7 min-w-0 items-center pr-2"
          data-browser-sidebar-design-scrub-label={true}
        >
          <button
            aria-label={expandToggleLabel}
            className="-ml-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-left text-sm text-token-text-secondary hover:bg-token-list-hover-background"
            type="button"
            onClick={onExpandToggle}
          >
            <span className="truncate">
              <DesignPropertyLabel property="gap" />
            </span>
            <ChevronIcon
              className={clsx(
                "icon-2xs shrink-0 text-token-text-tertiary transition-transform",
                isExpanded && "rotate-90",
              )}
            />
          </button>
        </span>
        {isExpanded ? (
          <span aria-hidden="true" />
        ) : isEditable ? (
          <DesignFlexGapGridInput
            columnGap={columnGap}
            rowGap={rowGap}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={onValueChange}
          />
        ) : (
          <span
            className={clsx(
              INPUT_FRAME_CLASS,
              "block min-h-7 w-full truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground",
            )}
          >
            {columnGap.value} {rowGap.value}
          </span>
        )}
      </div>
      {isExpanded ? (
        <>
          <DesignDeclarationRow
            declaration={columnGap}
            isEditable={isEditable}
            onReset={() => {
              onDeclarationReset(columnGap.property);
            }}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={(value) => {
              onValueChange(columnGap.property, value);
            }}
          />
          <DesignDeclarationRow
            declaration={rowGap}
            isEditable={isEditable}
            onReset={() => {
              onDeclarationReset(rowGap.property);
            }}
            onScrubActiveChange={onScrubActiveChange}
            onValueChange={(value) => {
              onValueChange(rowGap.property, value);
            }}
          />
        </>
      ) : null}
    </>
  );
}

type DesignSectionGroupRowsProps = {
  dropdownPortalContainer?: HTMLElement | null;
  expandedSpacingGroups: Record<string, boolean>;
  isFlexSpacingExpanded: boolean;
  isEditable: boolean;
  lockedRelationships: LockedRelationships;
  sectionGroup: { id: string; sections: DesignSection[] };
  showDivider: boolean;
  onDeclarationValueChange: (property: string, value: string) => void;
  onDeclarationReset: (property: string) => void;
  onDimensionLockToggle: () => void;
  onDimensionValueChange: (property: string, value: string) => void;
  onFlexSpacingExpandToggle: () => void;
  onScrubActiveChange?: ScrubActiveChange;
  onSpacingExpandToggle: (property: string) => void;
  onSpacingLockToggle: (
    property: SpacingGroupProperty,
    axis: "vertical" | "horizontal",
  ) => void;
  onSpacingValueChange: (
    property: SpacingGroupProperty,
    declarationProperty: string,
    value: string,
  ) => void;
};

function DesignSectionGroupRows({
  dropdownPortalContainer,
  expandedSpacingGroups,
  isFlexSpacingExpanded,
  isEditable,
  lockedRelationships,
  sectionGroup,
  showDivider,
  onDeclarationValueChange,
  onDeclarationReset,
  onDimensionLockToggle,
  onDimensionValueChange,
  onFlexSpacingExpandToggle,
  onScrubActiveChange,
  onSpacingExpandToggle,
  onSpacingLockToggle,
  onSpacingValueChange,
}: DesignSectionGroupRowsProps) {
  return (
    <>
      {showDivider ? <DesignRowDivider /> : null}
      {sectionGroup.sections.map((section, index) => {
        const content = (() => {
          switch (section.kind) {
            case "declaration":
              return (
                <DesignDeclarationRow
                  declaration={section.declaration}
                  dropdownPortalContainer={dropdownPortalContainer}
                  isEditable={isEditable}
                  onReset={() => {
                    onDeclarationReset(section.declaration.property);
                  }}
                  onScrubActiveChange={onScrubActiveChange}
                  onValueChange={(value) => {
                    onDeclarationValueChange(
                      section.declaration.property,
                      value,
                    );
                  }}
                />
              );
            case "dimensions":
              return (
                <DesignDimensionsRow
                  height={section.height}
                  isEditable={isEditable}
                  isLocked={lockedRelationships.dimensions}
                  width={section.width}
                  onLockToggle={onDimensionLockToggle}
                  onReset={onDeclarationReset}
                  onValueChange={onDimensionValueChange}
                  onScrubActiveChange={onScrubActiveChange}
                />
              );
            case "spacing":
              return (
                <DesignSpacingGroupRow
                  declarations={section.declarations}
                  isEditable={isEditable}
                  isExpanded={expandedSpacingGroups[section.property]}
                  lockedRelationships={lockedRelationships}
                  property={section.property}
                  onDeclarationReset={onDeclarationReset}
                  onExpandToggle={() => {
                    onSpacingExpandToggle(section.property);
                  }}
                  onLockToggle={(axis) => {
                    onSpacingLockToggle(section.property, axis);
                  }}
                  onValueChange={(declarationProperty, value) => {
                    onSpacingValueChange(
                      section.property,
                      declarationProperty,
                      value,
                    );
                  }}
                  onScrubActiveChange={onScrubActiveChange}
                />
              );
            case "flex-spacing":
              return (
                <DesignFlexSpacingRow
                  columnGap={section.columnGap}
                  isEditable={isEditable}
                  isExpanded={isFlexSpacingExpanded}
                  rowGap={section.rowGap}
                  onDeclarationReset={onDeclarationReset}
                  onExpandToggle={onFlexSpacingExpandToggle}
                  onScrubActiveChange={onScrubActiveChange}
                  onValueChange={onDeclarationValueChange}
                />
              );
          }
        })();
        const previousSection = sectionGroup.sections[index - 1];
        return (
          <div key={getSectionKey(section)} className="contents">
            {index > 0 &&
            isLayoutSection(section) &&
            !isLayoutSection(previousSection) ? (
              <DesignRowDivider />
            ) : null}
            {content}
          </div>
        );
      })}
    </>
  );
}

type DesignDragHandleProps = {
  editorState: DesignEditorState;
  onPointerCancel: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
};

function DesignDragHandle({
  editorState,
  onPointerCancel,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: DesignDragHandleProps) {
  const intl = useIntl();
  const targetLabel = formatTargetLabel(String(editorState.targetLabel ?? ""));
  const dragLabel = intl.formatMessage({
    id: "browserSidebarDesignEditor.dragStylingControls",
    defaultMessage: "Move styling controls",
    description:
      "Accessible label for the browser design styling controls drag handle",
  });
  return (
    <div
      data-browser-sidebar-design-drag-handle={true}
      className="flex min-w-0 cursor-grab touch-none items-center justify-between gap-3 bg-token-foreground/5 px-4 py-2 text-sm text-token-foreground select-none active:cursor-grabbing"
      onPointerCancel={onPointerCancel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <span className="min-w-0 truncate font-medium">{targetLabel}</span>
      <span
        aria-label={dragLabel}
        className="flex shrink-0 items-center justify-center text-token-text-tertiary"
        role="img"
        title={dragLabel}
      >
        <DragIcon className="icon-xs shrink-0" />
      </span>
    </div>
  );
}

export function getDesignEditorRows() {
  return {
    DesignRowDivider,
    DesignTextRow,
    DesignSectionGroupRows,
    DesignDragHandle,
  };
}
