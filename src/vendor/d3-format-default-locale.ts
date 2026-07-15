// Restored from ref/webview/assets/defaultLocale-I5DW1pOv.js
// D3 default-locale formatting helpers restored as npm-backed legacy aliases.
export {
  formatSpecifier as defaultLocaleI,
  formatPrefix as defaultLocaleN,
  formatLocale as defaultLocaleR,
  format as defaultLocaleT,
} from "d3-format";

export function defaultLocaleA(value: number): number {
  const exponentText = Math.abs(value).toExponential();
  const exponentMarkerIndex = exponentText.indexOf("e");
  return exponentMarkerIndex < 0
    ? Number.NaN
    : Number(exponentText.slice(exponentMarkerIndex + 1));
}
