// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Low-level initialization helpers for the local conversation thread chunk.
import { getChunkModuleExports as getChunkModuleExportsRaw } from "../../runtime/shared-utility-runtime";

export function getChunkModuleExports(chunkName?: string): unknown {
  return chunkName === undefined
    ? getChunkModuleExportsRaw()
    : getChunkModuleExportsRaw(chunkName);
}

// Current local-conversation-thread initializes these legacy groups through the
// specific semantic initializers in local-conversation-thread-inits.ts.
export function initAgentMentionMap(): void {}

export function initMarkdownUtilityNoop(): void {}

export function initThreadInternalStateRuntime(): void {}

export function initThreadAuxiliaryRuntime(): void {}
