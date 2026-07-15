// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure model: declaration grouping, spacing/dimension linking, value parsing, and
// localized property labels for the browser design-tweaks editor.
import type { IntlShape } from "../../vendor/react-intl";
import type {
  CssDeclarationEdit,
  DesignEditorState,
  TextEdit,
} from "../browser-comment-design-draft";
import {
  DECLARATION_ORDER,
  FONT_FAMILY_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  SPACING_SIDES,
  type SuggestionOption,
} from "./design-editor-constants";

import type {
  DesignDeclaration,
  DesignSection,
  DesignSectionGroup,
  LockedRelationships,
  SpacingAxis,
  SpacingGroupProperty,
  SpacingSide,
} from "./design-editor-model-types";

function updateDeclaration(
  state: DesignEditorState,
  property: string,
  patch: Partial<CssDeclarationEdit>,
): DesignEditorState {
  return {
    ...state,
    declarations: state.declarations.map((declaration) =>
      declaration.property === property
        ? { ...declaration, ...patch }
        : declaration,
    ),
  };
}

function updateDeclarations(
  state: DesignEditorState,
  edits: { property: string; value: string }[],
): DesignEditorState {
  return {
    ...state,
    declarations: state.declarations.map((declaration) => {
      const edit = edits.find((item) => item.property === declaration.property);
      return edit == null ? declaration : { ...declaration, value: edit.value };
    }),
  };
}

function lockSpacingAxis(
  state: DesignEditorState,
  property: SpacingGroupProperty,
  axis: SpacingAxis,
): DesignEditorState {
  const [first, second] = spacingAxisProperties(property, axis);
  const declaration = state.declarations.find(
    (item) => item.property === first,
  );
  return declaration == null
    ? state
    : updateDeclarations(state, [
        { property: first, value: declaration.value },
        { property: second, value: declaration.value },
      ]);
}

function setSpacingValueLinked(
  state: DesignEditorState,
  property: SpacingGroupProperty,
  declarationProperty: string,
  value: string,
): DesignEditorState {
  const opposite = oppositeSpacingProperty(property, declarationProperty);
  return opposite == null
    ? updateDeclaration(state, declarationProperty, { value })
    : updateDeclarations(state, [
        { property: declarationProperty, value },
        { property: opposite, value },
      ]);
}

function setDimensionValueLinked(
  state: DesignEditorState,
  property: "width" | "height",
  value: string,
): DesignEditorState {
  const current = state.declarations.find((item) => item.property === property);
  const otherProperty = property === "width" ? "height" : "width";
  const other = state.declarations.find(
    (item) => item.property === otherProperty,
  );
  const currentNumber =
    current == null ? null : parsePixelNumber(current.value);
  const otherNumber = other == null ? null : parsePixelNumber(other.value);
  const nextNumber = parsePixelNumber(value);
  return currentNumber == null ||
    otherNumber == null ||
    nextNumber == null ||
    currentNumber === 0
    ? updateDeclaration(state, property, { value })
    : updateDeclarations(state, [
        { property, value },
        {
          property: otherProperty,
          value: `${formatNumber((otherNumber / currentNumber) * nextNumber)}px`,
        },
      ]);
}

function setTextValue(
  state: DesignEditorState,
  value: string,
): DesignEditorState {
  const text = getTextEdit(state);
  return text == null
    ? state
    : { ...state, text: { previousValue: text.previousValue, value } };
}

function resetTextValue(state: DesignEditorState): DesignEditorState {
  const text = getTextEdit(state);
  return text == null ? state : setTextValue(state, text.previousValue);
}

function resetDeclaration(
  state: DesignEditorState,
  property: string,
): DesignEditorState {
  const declaration = state.declarations.find(
    (item) => item.property === property,
  );
  return declaration == null
    ? state
    : updateDeclaration(state, property, { value: declaration.previousValue });
}

function resetSpacingValueLinked(
  state: DesignEditorState,
  property: SpacingGroupProperty,
  declarationProperty: string,
): DesignEditorState {
  const declaration = state.declarations.find(
    (item) => item.property === declarationProperty,
  );
  const opposite = oppositeSpacingProperty(property, declarationProperty);
  return declaration == null || opposite == null
    ? resetDeclaration(state, declarationProperty)
    : updateDeclarations(state, [
        { property: declarationProperty, value: declaration.previousValue },
        { property: opposite, value: declaration.previousValue },
      ]);
}

function getTextEdit(state: DesignEditorState): TextEdit | null {
  return state.text ?? null;
}

function formatTargetLabel(targetLabel: string): string {
  const colonIndex = targetLabel.indexOf(":");
  return (
    colonIndex > 0 ? targetLabel.slice(0, colonIndex) : targetLabel
  ).trim();
}

function groupDeclarationsIntoSections(
  declarations: DesignDeclaration[],
): DesignSection[] {
  const byProperty = new Map(
    declarations.map((declaration) => [declaration.property, declaration]),
  );
  const sections: DesignSection[] = [];
  const consumed = new Set<string>();
  for (const declaration of declarations) {
    if (consumed.has(declaration.property)) continue;
    if (isGapProperty(declaration.property)) {
      const rowGap = byProperty.get("row-gap");
      const columnGap = byProperty.get("column-gap");
      if (rowGap != null && columnGap != null) {
        consumed.add("gap");
        consumed.add(rowGap.property);
        consumed.add(columnGap.property);
        sections.push({ kind: "flex-spacing", columnGap, rowGap });
        continue;
      }
    }
    const spacingGroup = getSpacingGroupForProperty(declaration.property);
    if (spacingGroup != null) {
      const grouped: DesignDeclaration[] = [];
      for (const side of SPACING_SIDES) {
        const sideDeclaration = byProperty.get(`${spacingGroup}-${side}`);
        if (sideDeclaration != null) {
          grouped.push(sideDeclaration);
          consumed.add(sideDeclaration.property);
        }
      }
      sections.push({
        kind: "spacing",
        declarations: grouped,
        property: spacingGroup,
      });
      continue;
    }
    if (declaration.property === "width" || declaration.property === "height") {
      const width = byProperty.get("width");
      const height = byProperty.get("height");
      if (width != null && height != null) {
        consumed.add(width.property);
        consumed.add(height.property);
        sections.push({ kind: "dimensions", height, width });
        continue;
      }
    }
    consumed.add(declaration.property);
    sections.push({ kind: "declaration", declaration });
  }
  return sections;
}

function getSectionKey(section: DesignSection): string {
  switch (section.kind) {
    case "declaration":
      return section.declaration.property;
    case "dimensions":
      return "dimensions";
    case "spacing":
      return section.property;
    case "flex-spacing":
      return "flex-spacing";
  }
}

function isLayoutSection(section: DesignSection | undefined): boolean {
  return (
    section?.kind === "flex-spacing" ||
    (section?.kind === "declaration" &&
      (section.declaration.property === "align-items" ||
        section.declaration.property === "flex-direction" ||
        section.declaration.property === "justify-content"))
  );
}

function groupSectionsByCategory(
  sections: DesignSection[],
): DesignSectionGroup[] {
  const groups: DesignSectionGroup[] = [];
  for (const category of ["color", "font", "border", "layout", "other"]) {
    const matching = sections
      .filter((section) => getSectionCategory(section) === category)
      .sort(compareSections);
    if (matching.length > 0) {
      groups.push({ id: category, sections: matching });
    }
  }
  return groups;
}

function getSectionCategory(section: DesignSection): string {
  if (
    section.kind === "dimensions" ||
    section.kind === "flex-spacing" ||
    section.kind === "spacing"
  ) {
    return "layout";
  }
  const property = section.declaration.property;
  if (
    property === "color" ||
    property === "background-color" ||
    property === "opacity"
  ) {
    return "color";
  }
  if (property.startsWith("font-")) return "font";
  if (property.startsWith("border-")) return "border";
  if (
    property === "align-items" ||
    property === "flex-direction" ||
    property === "justify-content"
  ) {
    return "layout";
  }
  return "other";
}

function compareSections(left: DesignSection, right: DesignSection): number {
  return getSectionSortIndex(left) - getSectionSortIndex(right);
}

function getSectionSortIndex(section: DesignSection): number {
  if (section.kind === "dimensions") return 0;
  if (section.kind === "spacing") return section.property === "padding" ? 1 : 2;
  if (section.kind === "flex-spacing") return DECLARATION_ORDER.indexOf("gap");
  const index = DECLARATION_ORDER.indexOf(section.declaration.property);
  return index < 0 ? DECLARATION_ORDER.length : index;
}

function getSpacingGroupForProperty(
  property: string,
): SpacingGroupProperty | null {
  return property.startsWith("padding-")
    ? "padding"
    : property.startsWith("margin-")
      ? "margin"
      : null;
}

function findSpacingDeclaration(
  declarations: DesignDeclaration[],
  property: string,
  side: string,
): DesignDeclaration | null {
  return (
    declarations.find((item) => item.property === `${property}-${side}`) ?? null
  );
}

function spacingRelationshipKey(property: string, axis: string): string {
  return `${property}-${axis}`;
}

function computeInitialLockedRelationships(
  state: DesignEditorState,
): LockedRelationships {
  return {
    dimensions: false,
    "margin-horizontal": areSpacingAxisValuesLocked(
      state.declarations,
      "margin",
      "horizontal",
    ),
    "margin-vertical": areSpacingAxisValuesLocked(
      state.declarations,
      "margin",
      "vertical",
    ),
    "padding-horizontal": areSpacingAxisValuesLocked(
      state.declarations,
      "padding",
      "horizontal",
    ),
    "padding-vertical": areSpacingAxisValuesLocked(
      state.declarations,
      "padding",
      "vertical",
    ),
  };
}

function areSpacingAxisValuesLocked(
  declarations: CssDeclarationEdit[],
  property: SpacingGroupProperty,
  axis: SpacingAxis,
): boolean {
  const [first, second] = spacingAxisProperties(property, axis);
  const firstDeclaration = declarations.find((item) => item.property === first);
  const secondDeclaration = declarations.find(
    (item) => item.property === second,
  );
  return (
    firstDeclaration != null &&
    secondDeclaration != null &&
    firstDeclaration.value.trim() !== "0" &&
    parsePixelNumber(firstDeclaration.value) !== 0 &&
    areCssValuesEqual(firstDeclaration.value, secondDeclaration.value)
  );
}

function areCssValuesEqual(left: string, right: string): boolean {
  if (left.trim() === right.trim()) return true;
  const leftNumber = parsePixelNumber(left);
  const rightNumber = parsePixelNumber(right);
  return (
    leftNumber != null && rightNumber != null && leftNumber === rightNumber
  );
}

function isSpacingValueLocked(
  locked: LockedRelationships,
  property: string,
  declarationProperty: string,
): boolean {
  return declarationProperty === `${property}-top` ||
    declarationProperty === `${property}-bottom`
    ? locked[spacingRelationshipKey(property, "vertical")]
    : declarationProperty === `${property}-left` ||
        declarationProperty === `${property}-right`
      ? locked[spacingRelationshipKey(property, "horizontal")]
      : false;
}

function spacingAxisProperties(
  property: string,
  axis: string,
): [string, string] {
  return axis === "vertical"
    ? [`${property}-top`, `${property}-bottom`]
    : [`${property}-left`, `${property}-right`];
}

function oppositeSpacingProperty(
  property: string,
  declarationProperty: string,
): string | null {
  return declarationProperty === `${property}-top`
    ? `${property}-bottom`
    : declarationProperty === `${property}-bottom`
      ? `${property}-top`
      : declarationProperty === `${property}-left`
        ? `${property}-right`
        : declarationProperty === `${property}-right`
          ? `${property}-left`
          : null;
}

function parsePixelNumber(value: string): number | null {
  const pixels = extractPixelValue(value);
  return pixels == null ? null : Number(pixels);
}

function normalizeGapValue(property: string, value: string): string | null {
  return isGapProperty(property) && value.trim() === "normal" ? "0" : null;
}

function getPlaceholderValue(
  declaration: DesignDeclaration,
): string | undefined {
  return (
    declaration.placeholderValue ??
    (declaration.value.length === 0 && declaration.previousValue.length > 0
      ? declaration.previousValue
      : undefined)
  );
}

function parseFiniteNumber(text: string): number | null {
  if (text.trim().length === 0) return 0;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : null;
}

function extractPixelValue(value: string): string | null {
  return value.trim().match(/^(-?\d+(?:\.\d+)?)px$/)?.[1] ?? null;
}

function formatNumber(value: number): string {
  return Number.isInteger(value)
    ? String(value)
    : String(Number(value.toFixed(2)));
}

function clamp(
  value: number,
  min: number | null | undefined,
  max: number | null | undefined,
): number {
  return min != null && value < min
    ? min
    : max != null && value > max
      ? max
      : value;
}

function isColorProperty(property: string): boolean {
  return property === "color" || property.endsWith("-color");
}

function isLengthLikeDeclaration(declaration: DesignDeclaration): boolean {
  return (
    isLengthProperty(declaration.property) &&
    (declaration.value.length === 0 ||
      extractPixelValue(declaration.placeholderValue ?? "") != null ||
      extractPixelValue(declaration.value) != null ||
      normalizeGapValue(declaration.property, declaration.value) != null ||
      normalizeGapValue(
        declaration.property,
        declaration.placeholderValue ?? "",
      ) != null)
  );
}

function isLengthProperty(property: string): boolean {
  return (
    property === "font-size" ||
    property === "border-radius" ||
    property === "border-width" ||
    property === "column-gap" ||
    property === "gap" ||
    property === "height" ||
    property === "row-gap" ||
    property === "width" ||
    property.startsWith("margin-") ||
    property.startsWith("padding-")
  );
}

function isGapProperty(property: string): boolean {
  return (
    property === "column-gap" || property === "gap" || property === "row-gap"
  );
}

function resolveScrubBaseValue(
  value: string,
  placeholder: string | null | undefined,
): number | null {
  return value.trim().length === 0 && placeholder != null
    ? parseFiniteNumber(placeholder)
    : parseFiniteNumber(value);
}

function toHexColor(value: string | null | undefined): string {
  const trimmed = value?.trim() ?? "";
  const hexMatch = trimmed.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
  if (hexMatch != null) {
    const hex = hexMatch[1];
    return hex.length === 3
      ? `#${hex
          .split("")
          .map((character) => `${character}${character}`)
          .join("")}`
      : `#${hex}`;
  }
  const rgbMatch = trimmed.match(
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i,
  );
  return rgbMatch == null
    ? "#000000"
    : `#${rgbMatch
        .slice(1, 4)
        .map((channel) =>
          Math.min(255, Number(channel)).toString(16).padStart(2, "0"),
        )
        .join("")}`;
}

function humanizePropertyName(property: string): string {
  const spaced = property.replaceAll("-", " ");
  return `${spaced.charAt(0).toUpperCase()}${spaced.slice(1)}`;
}

function getPropertyLabel(intl: IntlShape, property: string): string {
  switch (property) {
    case "color":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.textColorProperty",
        defaultMessage: "Text color",
        description:
          "Property label for text color in the in-app browser design edit card",
      });
    case "background-color":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.backgroundProperty",
        defaultMessage: "Background",
        description:
          "Property label for background color in the in-app browser design edit card",
      });
    case "font-family":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.fontProperty",
        defaultMessage: "Font",
        description:
          "Property label for font family in the in-app browser design edit card",
      });
    case "font-size":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.fontSizeProperty",
        defaultMessage: "Font size",
        description:
          "Property label for font size in the in-app browser design edit card",
      });
    case "font-weight":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.fontWeightProperty",
        defaultMessage: "Font weight",
        description:
          "Property label for font weight in the in-app browser design edit card",
      });
    case "border-radius":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.borderRadiusProperty",
        defaultMessage: "Border radius",
        description:
          "Property label for border radius in the in-app browser design edit card",
      });
    case "border-color":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.borderColorProperty",
        defaultMessage: "Border color",
        description:
          "Property label for border color in the in-app browser design edit card",
      });
    case "border-width":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.borderWidthProperty",
        defaultMessage: "Border width",
        description:
          "Property label for border width in the in-app browser design edit card",
      });
    case "width":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.widthProperty",
        defaultMessage: "Width",
        description:
          "Property label for width in the in-app browser design edit card",
      });
    case "height":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.heightProperty",
        defaultMessage: "Height",
        description:
          "Property label for height in the in-app browser design edit card",
      });
    case "flex-direction":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.flexDirectionProperty",
        defaultMessage: "Layout direction",
        description:
          "Property label for flex direction in the in-app browser design edit card",
      });
    case "justify-content":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.justifyContentProperty",
        defaultMessage: "Distribution",
        description:
          "Property label for justify-content in the in-app browser design edit card",
      });
    case "align-items":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.alignItemsProperty",
        defaultMessage: "Alignment",
        description:
          "Property label for align-items in the in-app browser design edit card",
      });
    case "gap":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.gapProperty",
        defaultMessage: "Spacing",
        description:
          "Property label for flex gap in the in-app browser design edit card",
      });
    case "row-gap":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.rowGapProperty",
        defaultMessage: "Vertical",
        description:
          "Property label for row gap in the in-app browser design edit card",
      });
    case "column-gap":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.columnGapProperty",
        defaultMessage: "Horizontal",
        description:
          "Property label for column gap in the in-app browser design edit card",
      });
    case "padding":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.paddingProperty",
        defaultMessage: "Padding",
        description:
          "Property label for padding in the in-app browser design edit card",
      });
    case "margin":
      return intl.formatMessage({
        id: "browserSidebarDesignEditor.marginProperty",
        defaultMessage: "Margin",
        description:
          "Property label for margin in the in-app browser design edit card",
      });
    default:
      return humanizePropertyName(property);
  }
}

function getDeclarationSuggestions(
  intl: IntlShape,
  declaration: DesignDeclaration,
): SuggestionOption[] {
  if (declaration.property === "font-family") {
    return mergeCustomSuggestions(
      [declaration.value, declaration.previousValue],
      FONT_FAMILY_OPTIONS,
    );
  }
  if (declaration.property === "font-weight") {
    return mergeCustomSuggestions(
      [declaration.value],
      FONT_WEIGHT_OPTIONS.map((value) => ({ value })),
    );
  }
  if (declaration.property === "flex-direction") {
    return mergeCustomSuggestions(
      [declaration.value],
      [
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.horizontalFlexDirection",
            defaultMessage: "Horizontal",
            description:
              "Dropdown label for a horizontal browser tweak editor flex direction",
          }),
          value: "row",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.horizontalReverseFlexDirection",
            defaultMessage: "Horizontal reverse",
            description:
              "Dropdown label for a reversed horizontal browser tweak editor flex direction",
          }),
          value: "row-reverse",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.verticalFlexDirection",
            defaultMessage: "Vertical",
            description:
              "Dropdown label for a vertical browser tweak editor flex direction",
          }),
          value: "column",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.verticalReverseFlexDirection",
            defaultMessage: "Vertical reverse",
            description:
              "Dropdown label for a reversed vertical browser tweak editor flex direction",
          }),
          value: "column-reverse",
        },
      ],
    );
  }
  if (declaration.property === "justify-content") {
    return mergeCustomSuggestions(
      [declaration.value],
      mapNormalAlias(declaration.value, "flex-start", [
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.startDistribution",
            defaultMessage: "Start",
            description:
              "Dropdown label for start distribution in the browser tweak editor",
          }),
          value: "flex-start",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.centerDistribution",
            defaultMessage: "Center",
            description:
              "Dropdown label for centered distribution in the browser tweak editor",
          }),
          value: "center",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.endDistribution",
            defaultMessage: "End",
            description:
              "Dropdown label for end distribution in the browser tweak editor",
          }),
          value: "flex-end",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.spaceBetweenDistribution",
            defaultMessage: "Space between",
            description:
              "Dropdown label for space-between distribution in the browser tweak editor",
          }),
          value: "space-between",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.spaceAroundDistribution",
            defaultMessage: "Space around",
            description:
              "Dropdown label for space-around distribution in the browser tweak editor",
          }),
          value: "space-around",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.spaceEvenlyDistribution",
            defaultMessage: "Space evenly",
            description:
              "Dropdown label for space-evenly distribution in the browser tweak editor",
          }),
          value: "space-evenly",
        },
      ]),
    );
  }
  if (declaration.property === "align-items") {
    return mergeCustomSuggestions(
      [declaration.value],
      mapNormalAlias(declaration.value, "stretch", [
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.startAlignment",
            defaultMessage: "Start",
            description:
              "Dropdown label for start alignment in the browser tweak editor",
          }),
          value: "flex-start",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.centerAlignment",
            defaultMessage: "Center",
            description:
              "Dropdown label for centered alignment in the browser tweak editor",
          }),
          value: "center",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.endAlignment",
            defaultMessage: "End",
            description:
              "Dropdown label for end alignment in the browser tweak editor",
          }),
          value: "flex-end",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.stretchAlignment",
            defaultMessage: "Stretch",
            description:
              "Dropdown label for stretched alignment in the browser tweak editor",
          }),
          value: "stretch",
        },
        {
          label: intl.formatMessage({
            id: "browserSidebarDesignEditor.baselineAlignment",
            defaultMessage: "Baseline",
            description:
              "Dropdown label for baseline alignment in the browser tweak editor",
          }),
          value: "baseline",
        },
      ]),
    );
  }
  return [];
}

function mapNormalAlias(
  value: string,
  normalTarget: string,
  options: SuggestionOption[],
): SuggestionOption[] {
  return value === "normal"
    ? options.map((option) =>
        option.value === normalTarget ? { ...option, value } : option,
      )
    : options;
}

function mergeCustomSuggestions(
  values: string[],
  options: SuggestionOption[],
): SuggestionOption[] {
  const known = new Set(options.map((option) => option.value));
  const custom = values.flatMap((value) =>
    value.trim().length === 0 || known.has(value)
      ? []
      : (known.add(value), [{ value }]),
  );
  return custom.length === 0 ? options : [...custom, ...options];
}

export function getDesignEditorModel() {
  return {
    updateDeclaration,
    updateDeclarations,
    lockSpacingAxis,
    setSpacingValueLinked,
    setDimensionValueLinked,
    setTextValue,
    resetTextValue,
    resetDeclaration,
    resetSpacingValueLinked,
    getTextEdit,
    formatTargetLabel,
    groupDeclarationsIntoSections,
    getSectionKey,
    isLayoutSection,
    groupSectionsByCategory,
    getSpacingGroupForProperty,
    findSpacingDeclaration,
    spacingRelationshipKey,
    computeInitialLockedRelationships,
    isSpacingValueLocked,
    spacingAxisProperties,
    oppositeSpacingProperty,
    parsePixelNumber,
    normalizeGapValue,
    getPlaceholderValue,
    extractPixelValue,
    formatNumber,
    clamp,
    isColorProperty,
    isLengthLikeDeclaration,
    isLengthProperty,
    isGapProperty,
    resolveScrubBaseValue,
    toHexColor,
    humanizePropertyName,
    getPropertyLabel,
    getDeclarationSuggestions,
  };
}
