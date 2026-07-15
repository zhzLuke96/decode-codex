// Restored from ref/webview/assets/data-url-from-svg-DII7vY1m.js
// Encodes inline SVG markup as a data URL.

export function dataUrlFromSvg(svgMarkup: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`;
}
