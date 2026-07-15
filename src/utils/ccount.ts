// Restored from ref/webview/assets/ccount-BaJjvBGW.js
// ccount-BaJjvBGW chunk restored from the Codex webview bundle.
export function ccount(value: unknown, character: string): number {
  const text = String(value);
  if (typeof character !== "string") {
    throw TypeError("Expected character");
  }

  let count = 0;
  let index = text.indexOf(character);
  while (index !== -1) {
    count += 1;
    index = text.indexOf(character, index + character.length);
  }
  return count;
}
