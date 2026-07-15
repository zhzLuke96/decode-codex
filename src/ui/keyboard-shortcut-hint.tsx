// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compact keyboard shortcut hint component.
import type { ReactElement } from "react";

export function KeyboardShortcutHint({
  keysLabel,
}: {
  keysLabel?: string | null;
}): ReactElement | null {
  if (keysLabel == null || keysLabel === "") return null;
  return (
    <kbd className="text-token-text-tertiary ml-1 rounded border border-token-border-light px-1 py-0.5 text-xs">
      {keysLabel}
    </kbd>
  );
}

