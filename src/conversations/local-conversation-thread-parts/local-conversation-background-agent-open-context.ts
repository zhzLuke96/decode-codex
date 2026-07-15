// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js
// Context used by local conversation surfaces to open a background-agent thread.
import { createContext } from "react";
import { once } from "../../runtime/commonjs-interop";
import type { BackgroundAgentOpenHandler } from "./local-conversation-thread-frame-types";

export type BackgroundAgentOpenContextValue = BackgroundAgentOpenHandler | null;

export const BackgroundAgentOpenContext =
  createContext<BackgroundAgentOpenContextValue>(null);

export const initBackgroundAgentOpenContextChunk = once(() => {});
