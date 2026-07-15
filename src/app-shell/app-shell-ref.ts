// Restored from ref/webview/assets/app-shell-ref-DW6qz7GS.js
// App shell DOM element contexts shared by overlays and portal-based controls.
import React from "react";

export type AppShellElement = HTMLElement | null;

export const appShellRefContext = React.createContext<
  React.MutableRefObject<AppShellElement>
>({
  current: null,
});

export const appShellElementContext =
  React.createContext<AppShellElement>(null);
