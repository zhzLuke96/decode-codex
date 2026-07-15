// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Header toolbar toggle used by the thread side and bottom panel launchers.
import type { HeaderPanelToggleButtonProps } from "./types";

export function HeaderPanelToggleButton({
  children,
  disabled = false,
  label,
  onClick,
  color = "ghost",
  pressed = false,
  shortcut,
}: HeaderPanelToggleButtonProps) {
  const buttonColor =
    color === "outline"
      ? pressed
        ? "bg-token-foreground/10"
        : "bg-token-bg-fog"
      : pressed
        ? "bg-token-foreground/10 text-token-foreground"
        : "text-token-text-tertiary";

  return (
    <button
      type="button"
      className={`flex h-token-button-composer items-center justify-center rounded-lg border border-transparent px-2 py-0 text-sm ${buttonColor}`}
      aria-label={typeof label === "string" ? label : undefined}
      aria-pressed={pressed}
      disabled={disabled}
      title={typeof label === "string" ? label : undefined}
      data-shortcut={shortcut}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
