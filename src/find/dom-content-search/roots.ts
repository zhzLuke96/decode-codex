// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// DOM root traversal helpers for content search, including shadow-root support.
import { shadowHighlightStyle, shadowStyleElementId } from "./constants";
import type { ContentSearchRootOptions } from "./types";

export function collectSearchRoots(
  target: ParentNode,
  options: ContentSearchRootOptions,
): ParentNode[] {
  const roots: ParentNode[] = [target];
  if (!options.includeShadowRoots) {
    return roots;
  }
  const stack: ParentNode[] = [target];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current == null) {
      continue;
    }
    const walker = document.createTreeWalker(
      current as Node,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.currentNode as Node | null;
    while (node != null) {
      if (node instanceof HTMLElement && node.shadowRoot != null) {
        ensureShadowHighlightStyle(node.shadowRoot);
        roots.push(node.shadowRoot);
        stack.push(node.shadowRoot);
      }
      node = walker.nextNode();
    }
  }
  return roots;
}

export function escapeCssSelectorValue(value: string): string {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(value)
    : value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function ensureShadowHighlightStyle(shadowRoot: ShadowRoot): void {
  if (shadowRoot.getElementById(shadowStyleElementId) != null) {
    return;
  }
  const style = document.createElement("style");
  style.id = shadowStyleElementId;
  style.textContent = shadowHighlightStyle;
  shadowRoot.append(style);
}
