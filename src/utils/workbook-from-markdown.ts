// Restored from ref/webview/assets/workbook-from-markdown-WDutqDfH.js
// Build spreadsheet-ready cell values from the first GFM markdown table; previous hash workbook-from-markdown-Do0YNaaN mapped to the same surface.

const DEFAULT_SHEET_NAME = "Markdown table";
const MAX_SHEET_NAME_LENGTH = 31;
const INVALID_SHEET_NAME_CHARS = /\\|\/|\?|\*|\[|\]|:/g;
const HTML_BREAK = /<br\s*\/?>/gi;
const TABLE_BREAK_PLACEHOLDER = "BPS_TABLE_BR_PLACEHOLDER";
const CONTENT_REFERENCE = /:{1,3}contentReference\[[^\]]+\](?:\{[^}]*\})?/g;
const ZERO_WIDTH_SPACE = /\u200b/g;
function sanitizeSheetName(sheetName?: string | null): string {
  return (
    (sheetName ?? DEFAULT_SHEET_NAME)
      .trim()
      .replace(INVALID_SHEET_NAME_CHARS, "")
      .trim() || DEFAULT_SHEET_NAME
  ).slice(0, MAX_SHEET_NAME_LENGTH);
}
function buildTableValuesFromMarkdown(markdown: string): string[][] {
  const normalizedMarkdown = markdown.replace(
    HTML_BREAK,
    TABLE_BREAK_PLACEHOLDER,
  );
  const table = findFirstMarkdownTable(normalizedMarkdown);
  if (table == null) {
    throw Error("Unable to build workbook: no markdown table rows found.");
  }
  return table
    .map((row) => row.map(cleanCellText))
    .filter((row) => row.some((cell) => cell.length > 0));
}
function findFirstMarkdownTable(markdown: string): string[][] | null {
  const lines = markdown.split(/\r?\n/);
  for (let lineIndex = 0; lineIndex < lines.length - 1; lineIndex += 1) {
    const header = parseTableRow(lines[lineIndex]);
    const delimiter = parseTableRow(lines[lineIndex + 1]);
    if (header.length === 0 || !isDelimiterRow(delimiter)) continue;
    const rows = [header];
    for (let rowIndex = lineIndex + 2; rowIndex < lines.length; rowIndex += 1) {
      const row = parseTableRow(lines[rowIndex]);
      if (row.length === 0) break;
      rows.push(row);
    }
    return rows;
  }
  return null;
}
function isDelimiterRow(cells: string[]): boolean {
  return (
    cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.trim()))
  );
}
function parseTableRow(line: string): string[] {
  const trimmed = line.trim();
  if (trimmed.length === 0 || !hasUnescapedPipe(trimmed)) return [];
  const rawCells = splitTableCells(trimmed);
  if (rawCells.length > 1 && rawCells[0].trim() === "") rawCells.shift();
  if (rawCells.length > 1 && rawCells[rawCells.length - 1].trim() === "") {
    rawCells.pop();
  }
  return rawCells.map((cell) => cell.trim());
}
function hasUnescapedPipe(value: string): boolean {
  let escaped = false;
  let codeSpanTicks = 0;
  for (const character of value) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (character === "\\") {
      escaped = true;
      continue;
    }
    if (character === "`") {
      codeSpanTicks = codeSpanTicks === 0 ? 1 : 0;
      continue;
    }
    if (character === "|" && codeSpanTicks === 0) return true;
  }
  return false;
}
function splitTableCells(line: string): string[] {
  const cells: string[] = [];
  let currentCell = "";
  let escaped = false;
  let codeSpanTicks = 0;
  for (const character of line) {
    if (escaped) {
      currentCell += character;
      escaped = false;
      continue;
    }
    if (character === "\\") {
      currentCell += character;
      escaped = true;
      continue;
    }
    if (character === "`") {
      currentCell += character;
      codeSpanTicks = codeSpanTicks === 0 ? 1 : 0;
      continue;
    }
    if (character === "|" && codeSpanTicks === 0) {
      cells.push(currentCell);
      currentCell = "";
      continue;
    }
    currentCell += character;
  }
  cells.push(currentCell);
  return cells;
}
function cleanCellText(cell: string): string {
  return decodeBasicHtmlEntities(
    stripInlineMarkdown(cell.replaceAll(TABLE_BREAK_PLACEHOLDER, "\n")),
  )
    .replace(/\u00a0/g, " ")
    .replace(ZERO_WIDTH_SPACE, "")
    .replace(CONTENT_REFERENCE, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}
function stripInlineMarkdown(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/~~([^~]*)~~/g, "$1")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/\\([\\`*_[\]{}()#+\-.!|])/g, "$1");
}
function decodeBasicHtmlEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");
}
export { buildTableValuesFromMarkdown, sanitizeSheetName };
