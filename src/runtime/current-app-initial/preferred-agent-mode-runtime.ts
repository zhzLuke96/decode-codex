// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~l0drf339-C-9b569O.js
// App-initial bridge for persisted preferred agent mode defaults.
import {
  agentModeByHostIdAtom,
  getAgentModeForHost,
  preferredNonFullAccessAgentModeByHostIdAtom,
  setDefaultAgentModeForHost,
} from "../../utils/permissions-mode-defaults";

function initPreferredAgentModeRuntimeChunk(): void {}

export {
  setDefaultAgentModeForHost,
  initPreferredAgentModeRuntimeChunk,
  preferredNonFullAccessAgentModeByHostIdAtom,
  getAgentModeForHost,
  agentModeByHostIdAtom,
};
