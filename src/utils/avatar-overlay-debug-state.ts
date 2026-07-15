// Restored from ref/webview/assets/avatar-overlay-debug-state-WM6He6by.js
// avatar-overlay-debug-state-WM6He6by chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
} from "../runtime/shared-utility-runtime";
let avatarOverlayResizeButtonHiddenSignal: unknown;
const initAvatarOverlayDebugStateChunk = once(() => {
  initPersistentSignalRuntime();
  avatarOverlayResizeButtonHiddenSignal = createPersistentSignal(
    "avatar-overlay-resize-button-hidden",
    false,
  );
});
export {
  initAvatarOverlayDebugStateChunk,
  avatarOverlayResizeButtonHiddenSignal,
};
