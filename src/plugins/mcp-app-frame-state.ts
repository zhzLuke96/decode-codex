// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Mutable per-MCP-app frame state (intrinsic height / full-screen / inline
// expansion / sandbox error) stored in app-root atoms, plus the setter used to
// patch a single app's frame state.
import {
  appRootScope,
  createScopedAtom,
} from "../runtime/onboarding-scope-runtime";

export interface McpAppFrameState {
  intrinsicHeight: number | null;
  isFullScreen: boolean;
  isInlineExpanded: boolean;
  sandboxError: unknown;
}

export const defaultMcpAppFrameState: McpAppFrameState = {
  intrinsicHeight: null,
  isFullScreen: false,
  isInlineExpanded: false,
  sandboxError: null,
};

export const frameStatesByAppIdAtom = createScopedAtom(
  appRootScope,
  () => new Map<string, McpAppFrameState>(),
);

export const fullScreenMcpAppIdsAtom = createScopedAtom(
  appRootScope,
  () => new Set<string>(),
);

export function initMcpAppFrameStateChunk(): void {}

// Identity passthrough used where a stable frame-content selector is required;
// returns its argument unchanged.
export function selectMcpAppFrameContent<T>(value: T): T {
  return value;
}

function markMcpAppFullScreen(store: any, mcpAppId: string) {
  store.set(fullScreenMcpAppIdsAtom, (current: Set<string>) => {
    if (current.has(mcpAppId)) return current;
    const next = new Set(current);
    next.add(mcpAppId);
    return next;
  });
}

export function updateMcpAppFrameState(
  store: any,
  mcpAppId: string,
  patch: Partial<McpAppFrameState>,
) {
  if (patch.isFullScreen === true) markMcpAppFullScreen(store, mcpAppId);
  store.set(
    frameStatesByAppIdAtom,
    (current: Map<string, McpAppFrameState>) => {
      const previous = current.get(mcpAppId) ?? defaultMcpAppFrameState;
      const next: McpAppFrameState = { ...previous, ...patch };
      if (
        previous.intrinsicHeight === next.intrinsicHeight &&
        previous.isFullScreen === next.isFullScreen &&
        previous.isInlineExpanded === next.isInlineExpanded &&
        previous.sandboxError === next.sandboxError
      ) {
        return current;
      }
      const updated = new Map(current);
      updated.set(mcpAppId, next);
      return updated;
    },
  );
}
