// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
export function rowBackgroundClass(
  rowIndex: number,
  isHighlighted: boolean,
): string | undefined {
  return isHighlighted
    ? "bg-token-list-hover-background"
    : rowIndex % 2 === 1
      ? "bg-token-list-hover-background/20"
      : undefined;
}
