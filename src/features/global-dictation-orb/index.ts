// Restored from ref/webview/assets/global-dictation-orb-BTMuOubw.js
// Updated with exports from ref/webview/assets/global-dictation-orb-DhuZzKUa.js.
// global-dictation-orb-BTMuOubw chunk restored from the Codex webview bundle.
import { GlobalDictationOrb } from "./global-dictation-orb";
import {
  retryGlobalDictation,
  startGlobalDictation,
  stopGlobalDictation,
} from "./session-controller";
import { once } from "../../runtime/commonjs-interop";

const initGlobalDictationSessionControllerChunk = once(() => {});
const initGlobalDictationOrbChunk = once(() => {});

export {
  startGlobalDictation,
  retryGlobalDictation,
  initGlobalDictationOrbChunk,
  stopGlobalDictation,
  initGlobalDictationSessionControllerChunk,
  GlobalDictationOrb,
};
