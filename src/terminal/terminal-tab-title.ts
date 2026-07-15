// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the display title for an embedded-terminal session tab: prefers an
// explicit session title, then the basename of the session cwd (suffixed with a
// 1-based index when more than one tab is open), then a localized fallback.
import { getPathBasename } from "../runtime/path-basename-runtime";
import type { IntlShape } from "../vendor/react-intl";

export function resolveTerminalTabTitle(
  explicitTitle: string | null | undefined,
  cwd: string | null | undefined,
  tabIndex: number,
  tabCount: number,
  intl: IntlShape,
): string {
  const trimmedTitle = explicitTitle?.trim();
  if (trimmedTitle != null && trimmedTitle.length > 0) {
    return trimmedTitle;
  }

  if (cwd != null && cwd.trim().length > 0) {
    const directoryName = getPathBasename(cwd) || cwd;
    return tabCount > 1 ? `${directoryName} ${tabIndex + 1}` : directoryName;
  }

  return intl.formatMessage(
    {
      id: "terminal.tabs.title",
      defaultMessage: "Terminal {index}",
      description: "Terminal tab title with a 1-based tab index",
    },
    { index: tabIndex + 1 },
  );
}
