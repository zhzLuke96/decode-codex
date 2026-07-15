// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Duplicates each tool-key entry under both its bare key and an `<app>_<key>` alias.

export function withAppToolKeyAliases<TValue>(
  appName: string,
  tools: Record<string, TValue>,
): Record<string, TValue> {
  return Object.fromEntries(
    Object.entries(tools).flatMap(([toolKey, value]) => [
      [toolKey, value],
      [`${appName}_${toolKey}`, value],
    ]),
  );
}
