// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Detail-level predicate for deciding whether grouped tool activity should show.

type ConversationDetailLevel = "STEPS_PROSE" | string;

interface ToolActivityItem {
  type: string;
}

type ConversationActivityUnit =
  | {
      kind: "entry";
      entry:
        | {
            kind: "item";
            item: ToolActivityItem;
          }
        | { kind: string };
    }
  | { kind: string };

export function shouldShowToolActivityForDetailLevel(
  conversationDetailLevel: ConversationDetailLevel,
  units: ConversationActivityUnit[],
): boolean {
  return conversationDetailLevel === "STEPS_PROSE"
    ? units.some((unit) =>
        unit.kind !== "entry" || unit.entry.kind !== "item"
          ? true
          : unit.entry.item.type !== "automatic-approval-review" &&
            unit.entry.item.type !== "exec" &&
            unit.entry.item.type !== "patch",
      )
    : true;
}
