// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Decorative full-width spacer that reserves a configurable vertical gap between
// conversation activity rows (defaults to the tool/assistant gap CSS variable).
import type { CSSProperties } from "react";

export interface ConversationActivitySpacerProps {
  size?: CSSProperties["height"];
}

export function ConversationActivitySpacer({
  size = "var(--conversation-tool-assistant-gap, 8px)",
}: ConversationActivitySpacerProps) {
  return <div aria-hidden={true} className="w-full" style={{ height: size }} />;
}
