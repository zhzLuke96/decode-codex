// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// React layout-effect alias that falls back to useEffect outside a browser DOM.
import React from "react";

const canUseDom =
  typeof window !== "undefined" &&
  window.document !== undefined &&
  window.document.createElement !== undefined;

export const useIsomorphicLayoutEffect = canUseDom
  ? React.useLayoutEffect
  : React.useEffect;
