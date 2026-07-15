// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import { markdownToSearchText } from "../../utils/markdown-to-search-text";
const ASCII_APOSTROPHE_PATTERN = /['\u2019]/g;
const COMBINING_MARK_PATTERN = /[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]/g;
const WORD_BOUNDARY_PATTERN =
  /[A-Z]?[a-z]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z]+(?=[A-Z][a-z]|\b)|\d+|[^\s]+/g;
function deburrSearchText(value: string): string {
  return markdownToSearchText(value)
    .normalize("NFD")
    .replace(COMBINING_MARK_PATTERN, "");
}
function words(value: string): string[] {
  return deburrSearchText(value).match(WORD_BOUNDARY_PATTERN) ?? [];
}
export function upperFirstSearchText(value: string): string {
  const text = markdownToSearchText(value);
  const [first = "", ...rest] = Array.from(text);
  return `${first.toUpperCase()}${rest.join("")}`;
}
export function startCaseSearchText(value: string): string {
  return words(deburrSearchText(value).replace(ASCII_APOSTROPHE_PATTERN, ""))
    .map(upperFirstSearchText)
    .join(" ");
}
