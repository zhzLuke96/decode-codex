// Restored from ref/webview/assets/workbook-from-csv-CuayXnBi.js
// CSV import planning helpers for workbook surfaces.
import {
  encodeCellRange,
  parseCellRangeReference,
  parseFormulaReference,
} from "../vendor/xlsx-address-utils";
type CsvImportOptions = {
  anchor?: string;
  separator?: string;
  sheetName?: string;
};
type CsvImportPlan = {
  rangeRef?: string;
  rect?: {
    c1: number;
    c2: number;
    r1: number;
    r2: number;
  };
  sheetName: string;
  values: string[][];
};
const DEFAULT_SHEET_NAME = "CSV import";
const MAX_SHEET_NAME_LENGTH = 31;
const INVALID_SHEET_NAME_CHARS = /\\|\/|\?|\*|\[|\]|:/g;
export function planCsvImport(
  csvText: string,
  options?: CsvImportOptions,
): CsvImportPlan {
  const separator = normalizeSeparator(options?.separator);
  const parsedAnchor = parseFormulaReference(options?.anchor ?? "A1");
  const anchorSheetName = parsedAnchor.sheetName?.trim();
  const optionSheetName = options?.sheetName?.trim();
  if (
    anchorSheetName &&
    optionSheetName &&
    anchorSheetName !== optionSheetName
  ) {
    throw Error(
      `CSV import specifies conflicting sheet names: "${optionSheetName}" (options.sheetName) vs "${anchorSheetName}" (anchor).`,
    );
  }
  const sheetName = sanitizeSheetName(anchorSheetName ?? optionSheetName);
  const parsedRange = parseCellRangeReference(parsedAnchor.ref);
  if (!parsedRange) {
    throw Error(
      `CSV import anchor must be an A1 cell reference; received "${options?.anchor ?? "A1"}".`,
    );
  }
  const { bounds } = parsedRange;
  if (bounds.startRow !== bounds.endRow || bounds.startCol !== bounds.endCol) {
    throw Error(
      `CSV import anchor must be a single cell reference; received "${options?.anchor ?? "A1"}".`,
    );
  }
  const values = parseCsvRows(csvText, separator);
  const rowCount = values.length;
  const columnCount = rowCount > 0 ? (values[0]?.length ?? 0) : 0;
  if (rowCount === 0 || columnCount === 0) {
    return {
      sheetName,
      values: [],
    };
  }
  const boundsFromAnchor = {
    startRow: bounds.startRow,
    startCol: bounds.startCol,
    endRow: bounds.startRow + rowCount - 1,
    endCol: bounds.startCol + columnCount - 1,
  };
  return {
    sheetName,
    values,
    rangeRef: encodeCellRange(boundsFromAnchor),
    rect: {
      r1: boundsFromAnchor.startRow,
      c1: boundsFromAnchor.startCol,
      r2: boundsFromAnchor.endRow,
      c2: boundsFromAnchor.endCol,
    },
  };
}
export function sanitizeSheetName(sheetName?: string | null) {
  return (
    (sheetName ?? DEFAULT_SHEET_NAME)
      .trim()
      .replace(INVALID_SHEET_NAME_CHARS, "")
      .trim() || DEFAULT_SHEET_NAME
  ).slice(0, MAX_SHEET_NAME_LENGTH);
}
function normalizeSeparator(separator?: string) {
  const normalized = separator ?? ",";
  if (normalized.length !== 1) {
    throw Error(
      `CSV import separator must be a single character; received "${normalized}".`,
    );
  }
  return normalized;
}
function parseCsvRows(csvText: string, separator: string) {
  if (!csvText.trim()) {
    return [];
  }
  const rows = parseRawCsvRows(csvText, separator);
  if (rows.length === 0) {
    return [];
  }
  const columnCount = rows.reduce(
    (maxColumns, row) => Math.max(maxColumns, row.length),
    0,
  );
  return columnCount === 0
    ? []
    : rows.map((row) => {
        if (row.length === columnCount) {
          return row;
        }
        const paddedRow = row.slice();
        while (paddedRow.length < columnCount) {
          paddedRow.push("");
        }
        return paddedRow;
      });
}
function parseRawCsvRows(csvText: string, separator: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const pushCell = () => {
    row.push(cell);
    cell = "";
  };
  const pushRow = () => {
    rows.push(row);
    row = [];
  };
  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index] ?? "";
    if (inQuotes) {
      if (char === '"') {
        if (csvText[index + 1] === '"') {
          cell += '"';
          index += 1;
          continue;
        }
        inQuotes = false;
        continue;
      }
      cell += char;
      continue;
    }
    if (char === '"') {
      inQuotes = true;
      continue;
    }
    if (char === separator) {
      pushCell();
      continue;
    }
    if (char === "\n") {
      pushCell();
      pushRow();
      continue;
    }
    if (char === "\r") {
      if (csvText[index + 1] === "\n") {
        index += 1;
      }
      pushCell();
      pushRow();
      continue;
    }
    cell += char;
  }
  pushCell();
  pushRow();
  while (rows.length > 0) {
    const lastRow = rows[rows.length - 1] ?? [];
    if (!(lastRow.length > 0 && lastRow.every((value) => value === ""))) {
      break;
    }
    rows.pop();
  }
  return rows;
}
