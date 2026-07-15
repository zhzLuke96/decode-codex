// Restored from ref/webview/assets/address-utils-CrPpzw-e.js
// XLSX address, range, color, and worksheet sizing helpers.
const DEFAULT_MAX_DIGIT_WIDTH = 7;
const HORIZONTAL_PADDING_RATIO = 0.1;
const VERTICAL_PADDING_RATIO = 0;
const MIN_HORIZONTAL_PADDING = 2;
const MIN_VERTICAL_PADDING = 4 / 3;
const DEFAULT_ROW_HEIGHT_POINTS = 15;

export const DEFAULT_XLSX_COLUMN_WIDTH = 8.43;

export type CellRangeBounds = {
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
};

export type ParsedCellRange = {
  ref: string;
  bounds: CellRangeBounds;
};

export type ParsedFormulaReference = {
  sheetName?: string;
  ref: string;
};

export function initXlsxAddressUtilsConstantsChunk(): void {}

export function initXlsxAddressUtilsChunk(): void {
  initXlsxAddressUtilsConstantsChunk();
}

function normalizeMaxDigitWidth(maxDigitWidth?: number | null): number {
  return maxDigitWidth && maxDigitWidth > 0
    ? maxDigitWidth
    : DEFAULT_MAX_DIGIT_WIDTH;
}

function ceilMaxDigitWidth(maxDigitWidth?: number | null): number {
  return Math.ceil(normalizeMaxDigitWidth(maxDigitWidth));
}

export function columnWidthToPixels(
  columnWidth: number | null | undefined,
  maxDigitWidth?: number | null,
): number {
  return columnWidth == null || columnWidth <= 0
    ? 64
    : columnWidth * ceilMaxDigitWidth(maxDigitWidth);
}

export function pixelsToColumnWidth(
  pixelWidth: number,
  maxDigitWidth?: number | null,
): number {
  if (!Number.isFinite(pixelWidth) || pixelWidth <= 0) return 0;
  const columnWidth = pixelWidth / ceilMaxDigitWidth(maxDigitWidth);
  return Math.round(columnWidth * 100) / 100;
}

export function rowHeightPointsToPixels(
  rowHeightPoints?: number | null,
): number {
  return (
    ((rowHeightPoints == null || rowHeightPoints === 0
      ? DEFAULT_ROW_HEIGHT_POINTS
      : rowHeightPoints) *
      96) /
    72
  );
}

export function pixelsToRowHeightPoints(pixelHeight?: number | null): number {
  return Number.isFinite(pixelHeight ?? 0)
    ? ((pixelHeight ?? 0) * 72) / 96
    : DEFAULT_ROW_HEIGHT_POINTS;
}

export function getCellPadding(fontSize?: number): {
  padLr: number;
  padTb: number;
} {
  const resolvedFontSize = fontSize && fontSize > 0 ? fontSize : 11;
  return {
    padLr: Math.max(
      MIN_HORIZONTAL_PADDING,
      Math.floor(resolvedFontSize * HORIZONTAL_PADDING_RATIO),
    ),
    padTb: Math.max(
      MIN_VERTICAL_PADDING,
      Math.floor(resolvedFontSize * VERTICAL_PADDING_RATIO),
    ),
  };
}

export function encodeColumn(columnIndex: number): string {
  let columnName = "";
  for (columnIndex += 1; columnIndex; ) {
    const remainder = (columnIndex - 1) % 26;
    columnName = String.fromCharCode(65 + remainder) + columnName;
    columnIndex = Math.floor((columnIndex - remainder) / 26);
  }
  return columnName;
}

export function decodeColumn(cellAddress: string): number {
  const columnMatch = cellAddress.match(/[A-Z]+/);
  if (!columnMatch) return 0;
  let columnNumber = 0;
  for (const columnLetter of columnMatch[0]) {
    columnNumber = columnNumber * 26 + (columnLetter.charCodeAt(0) - 64);
  }
  return columnNumber - 1;
}

export function decodeRow(cellAddress: string): number {
  const rowMatch = cellAddress.match(/\d+/);
  return rowMatch ? Number.parseInt(rowMatch[0], 10) - 1 : 0;
}

export function normalizeXlsxColor(rawColor: string): string {
  const hex = rawColor.replace(/^0x/i, "");
  return hex.length === 8
    ? `rgba(${Number.parseInt(hex.slice(2, 4), 16)}, ${Number.parseInt(hex.slice(4, 6), 16)}, ${Number.parseInt(hex.slice(6, 8), 16)}, ${(1).toFixed(3)})`
    : hex.length === 6
      ? `#${hex}`
      : "#ffffff";
}

export function getIndexedColor(colorIndex?: number | null): string | void {
  if (colorIndex == null) return;
  if (colorIndex === 64) return "#000000";
  return "#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#800000.#008000.#000080.#808000.#800080.#008080.#C0C0C0.#808080.#9999FF.#993366.#FFFFCC.#CCFFFF.#660066.#FF8080.#0066CC.#CCCCFF.#000080.#FF00FF.#FFFF00.#00FFFF.#800080.#800000.#008080.#0000FF.#00CCFF.#CCFFFF.#CCFFCC.#FFFF99.#99CCFF.#FF99CC.#CC99FF.#FFCC99.#3366FF.#33CCCC.#99CC00.#FFCC00.#FF9900.#FF6600.#666699.#969696.#003366.#339966.#003300.#333300.#993300.#993366.#333399.#333333".split(
    ".",
  )[colorIndex];
}

export function parseCellRangeReference(
  rawReference: string,
): ParsedCellRange | null {
  const normalizedReference = normalizeCellReference(rawReference);
  if (!normalizedReference) return null;
  const [startAddress, rawEndAddress] = normalizedReference.split(":");
  if (!startAddress) return null;
  const endAddress = rawEndAddress ?? startAddress;
  const startRow = decodeRow(startAddress);
  const startCol = decodeColumn(startAddress);
  const endRow = decodeRow(endAddress);
  const endCol = decodeColumn(endAddress);
  const bounds = {
    startRow: Math.min(startRow, endRow),
    startCol: Math.min(startCol, endCol),
    endRow: Math.max(startRow, endRow),
    endCol: Math.max(startCol, endCol),
  };
  return {
    ref: encodeCellRange(bounds),
    bounds,
  };
}

export function encodeCellRange(bounds: CellRangeBounds): string {
  const startAddress = encodeCellAddress(bounds.startRow, bounds.startCol);
  const endAddress = encodeCellAddress(bounds.endRow, bounds.endCol);
  return startAddress === endAddress
    ? startAddress
    : `${startAddress}:${endAddress}`;
}

export function encodeCellAddress(
  rowIndex: number,
  columnIndex: number,
): string {
  return `${encodeColumn(columnIndex)}${rowIndex + 1}`;
}

export function normalizeCellReference(rawReference: string): string | null {
  const trimmed = rawReference.trim();
  return trimmed
    ? (trimmed.includes("!")
        ? trimmed.slice(trimmed.indexOf("!") + 1)
        : trimmed
      )
        .replace(/\$/g, "")
        .toUpperCase()
    : null;
}

export function getRangeSize(bounds: CellRangeBounds): {
  rows: number;
  cols: number;
} {
  return {
    rows: bounds.endRow - bounds.startRow + 1,
    cols: bounds.endCol - bounds.startCol + 1,
  };
}

export function rangesOverlap(
  firstRange: CellRangeBounds,
  secondRange: CellRangeBounds,
): boolean {
  return (
    firstRange.startRow <= secondRange.endRow &&
    firstRange.endRow >= secondRange.startRow &&
    firstRange.startCol <= secondRange.endCol &&
    firstRange.endCol >= secondRange.startCol
  );
}

export function parseFormulaReference(
  rawFormula: string,
): ParsedFormulaReference {
  const formulaReference = rawFormula.startsWith("=")
    ? rawFormula.slice(1)
    : rawFormula;
  const sheetSeparatorIndex = formulaReference.indexOf("!");
  if (sheetSeparatorIndex === -1) {
    return {
      ref: parseCellRangeReference(formulaReference)?.ref ?? formulaReference,
    };
  }
  const rawSheetName = formulaReference.slice(0, sheetSeparatorIndex);
  const rawReference = formulaReference.slice(sheetSeparatorIndex + 1);
  const parsedReference = parseCellRangeReference(rawReference);
  return {
    sheetName: unquoteSheetName(rawSheetName),
    ref: parsedReference?.ref ?? rawReference,
  };
}

function unquoteSheetName(sheetName: string): string {
  return sheetName.startsWith("'") &&
    sheetName.endsWith("'") &&
    sheetName.length >= 2
    ? sheetName.slice(1, -1).replace(/''/g, "'")
    : sheetName;
}
