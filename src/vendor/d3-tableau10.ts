// Restored from ref/webview/assets/Tableau10-BYZHCNVA.js
// Tableau10 palette restored as an npm-backed D3 scale-chromatic alias.
export {
  schemeTableau10,
  schemeTableau10 as tableau10T,
} from "d3-scale-chromatic";

export function decodeHexPalette(encodedPalette: string): string[] {
  const colors = encodedPalette.match(/.{6}/g) ?? [];
  return colors.map((hexColor) => `#${hexColor}`);
}

export const tableau10N = decodeHexPalette;
