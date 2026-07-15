// Restored from ref/webview/assets/slash-command-item-CjEpy4Fo.js
// slash-command-item-CjEpy4Fo chunk restored from the Codex webview bundle.
import type { HighlightMode, HighlightSegment } from "./types";
function highlightTextSegments(
  text: string,
  search: string,
  mode: HighlightMode = "fuzzy",
): HighlightSegment[] {
  const characters = Array.from(text);
  const trimmedSearch = search.trim();
  if (trimmedSearch.length === 0) {
    return characters.map((character) => ({
      text: character,
      isMatch: true,
    }));
  }
  const lowerText = text.toLowerCase();
  const lowerSearch = trimmedSearch.toLowerCase();
  const substringIndex = lowerText.indexOf(lowerSearch);
  if (substringIndex >= 0) {
    const matchStart = substringIndex;
    const matchEnd = substringIndex + lowerSearch.length;
    return characters.map((character, index) => ({
      text: character,
      isMatch: index >= matchStart && index < matchEnd,
    }));
  }
  if (mode === "substring") {
    return characters.map((character) => ({
      text: character,
      isMatch: false,
    }));
  }
  let searchIndex = 0;
  return characters.map((character) => {
    const isMatch =
      searchIndex < lowerSearch.length &&
      character.toLowerCase() === lowerSearch[searchIndex];
    if (isMatch) searchIndex += 1;
    return {
      text: character,
      isMatch,
    };
  });
}

export function initHighlightTextSegmentsChunk(): void {}

export { highlightTextSegments };
