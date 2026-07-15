// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import { uniq } from "../../utils/uniq";
import { startCaseSearchText } from "./search-text";
import type { ConnectorAction, DisplayConnectorAction } from "./types";
export function selectConnectorActions({
  actions,
}: {
  actions: ConnectorAction[];
}): DisplayConnectorAction[] {
  return actions
    .filter(
      (action) =>
        action.is_enabled !== false ||
        action.disabled_reason === "disabled_by_admin",
    )
    .map((action) => ({
      accessBadges: getActionAccessBadges(action),
      description: action.description,
      disabledReason: action.disabled_reason ?? null,
      name: action.name,
      visibility: formatVisibilityLabel(action.visibility),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}
function getActionAccessBadges(action: ConnectorAction): string[] {
  return uniq([
    action.is_read_only === true
      ? "READ"
      : getWriteAccessBadge(action.visibility),
    action.is_open_world === true ? "OPEN WORLD" : null,
    action.is_destructive === true ? "DESTRUCTIVE" : null,
  ]).flatMap((badge) => (badge == null ? [] : [badge]));
}
function getWriteAccessBadge(visibility: string | null | undefined): string {
  const visibilityLabel = formatVisibilityLabel(visibility);
  return visibilityLabel == null ? "WRITE" : `${visibilityLabel} WRITE`;
}
export function formatVisibilityLabel(
  visibility: string | null | undefined,
): string | null {
  const trimmedVisibility = visibility?.trim();
  return trimmedVisibility == null || trimmedVisibility.length === 0
    ? null
    : startCaseSearchText(
        trimmedVisibility.replace(/[:/_.-]+/g, " "),
      ).toUpperCase();
}
