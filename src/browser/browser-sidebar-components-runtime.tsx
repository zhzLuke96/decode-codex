// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Component aliases and light wrappers used by the browser sidebar host.
import React, { type ReactElement, type ReactNode } from "react";
import {
  BrowserAddressBarAutocomplete,
  type BrowserAddressBarAutocompleteProps,
} from "./browser-address-bar-autocomplete";
import { BrowserAgentCursorOverlay } from "./browser-agent-cursor";
import {
  BrowserSidebarWebview,
  type BrowserSidebarWebviewProps,
} from "./sidebar-webview";

export const BrowserAddressInput = BrowserAddressBarAutocomplete;
export type BrowserAddressInputProps = BrowserAddressBarAutocompleteProps;

export const BrowserCursorOverlay = BrowserAgentCursorOverlay;

export function BrowserSidebarFallbackWebview(
  props: BrowserSidebarWebviewProps,
): ReactElement | null {
  return <BrowserSidebarWebview {...props} shouldBootstrapWhenHidden />;
}

export function ElectronExtensionGate({
  children,
}: {
  children?: ReactNode;
  electron?: boolean;
  extension?: boolean;
}): ReactElement {
  return <>{children}</>;
}

export function BrowserFloatingComposer({
  onActiveEditorDismissRequestChange,
}: {
  browserTabId: string;
  conversationId: string;
  defaultCreateSubmitMode?: string;
  onActiveEditorDismissRequestChange?: (
    handler: (() => boolean) | null,
  ) => void;
  showAdjustEntry?: boolean;
}): null {
  React.useEffect(() => {
    onActiveEditorDismissRequestChange?.(null);
    return () => {
      onActiveEditorDismissRequestChange?.(null);
    };
  }, [onActiveEditorDismissRequestChange]);
  return null;
}
