// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure helpers and constants for the in-app browser sidebar host component.

export type BrowserSidebarBoundsRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type BrowserSidebarDesignHoldState = {
  conversationId: string;
  isHeld: boolean;
};

export const FOCUS_MODE = {
  FOCUS: "focus",
  NONE: "none",
} as const;

export type FocusMode = (typeof FOCUS_MODE)[keyof typeof FOCUS_MODE];

export const ADDRESS_FADE_MASK_CLASS =
  "[-webkit-mask-image:linear-gradient(to_right,black_calc(100%_-_16px),transparent)] [mask-image:linear-gradient(to_right,black_calc(100%_-_16px),transparent)]";

export const TOGGLE_ANNOTATION_MODE_ACCELERATOR = "CmdOrCtrl+.";

export const FLOATING_COMPOSER_TOGGLE_HEIGHT = 24;

// Resolves the latest "active editor can be dismissed" probe; defaults to true
// when no editor has registered a guard.
export function canDismissActiveEditor(
  probe: (() => boolean) | null | undefined,
): boolean {
  return probe?.() ?? true;
}

// A host message targets the current tab when its tab id is omitted (and falls
// back to the active tab id) or explicitly equals the current tab id.
export function isBrowserTabMatch(
  messageTabId: string | null | undefined,
  activeTabId: string | null | undefined,
  currentTabId: string,
): boolean {
  return (messageTabId ?? activeTabId ?? currentTabId) === currentTabId;
}

// Splits a leading `https://` scheme from a URL so a certificate-error address
// can render the scheme with a strike-through.
export function splitCertificateErrorScheme(
  address: string,
): { scheme: string; rest: string } | null {
  const trimmed = address.trim();
  return trimmed.toLowerCase().startsWith("https://")
    ? { scheme: trimmed.slice(0, 5), rest: trimmed.slice(5) }
    : null;
}

export function createDefaultDesignHoldState(
  conversationId: string,
): BrowserSidebarDesignHoldState {
  return { conversationId, isHeld: false };
}

export function isSpaceOrEnterKey(key: string): boolean {
  return key === " " || key === "Enter";
}

export function scaleBounds(
  bounds: BrowserSidebarBoundsRect | null,
  scale: number,
): BrowserSidebarBoundsRect | null {
  return bounds == null
    ? null
    : {
        x: bounds.x * scale,
        y: bounds.y * scale,
        width: bounds.width * scale,
        height: bounds.height * scale,
      };
}
