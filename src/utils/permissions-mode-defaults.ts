// Restored from ref/webview/assets/permissions-mode-defaults-D1kNIn1C.js
import {
  getPersistedAtomValue,
  setPersistedAtomItem,
} from "../utils/persisted-atom-store";
import { persistedAtom } from "../utils/persisted-atom";
type AgentModeByHostId = Record<string, string | null | undefined>;
const PREFERRED_NON_FULL_ACCESS_AGENT_MODE_BY_HOST_ID_KEY =
  "preferred-non-full-access-agent-mode-by-host-id";
const AGENT_MODE_BY_HOST_ID_KEY = "agent-mode-by-host-id";
const agentModeByHostIdAtom = persistedAtom<AgentModeByHostId>(
  AGENT_MODE_BY_HOST_ID_KEY,
  {},
);
const preferredNonFullAccessAgentModeByHostIdAtom =
  persistedAtom<AgentModeByHostId>(
    PREFERRED_NON_FULL_ACCESS_AGENT_MODE_BY_HOST_ID_KEY,
    {},
  );
function setDefaultAgentModeForHost(hostId: string, agentMode: string | null) {
  setPersistedAtomItem(AGENT_MODE_BY_HOST_ID_KEY, {
    ...getPersistedAtomValue<AgentModeByHostId>(AGENT_MODE_BY_HOST_ID_KEY, {}),
    [hostId]: agentMode,
  });
}
function getAgentModeForHost(
  hostId: string,
  agentModeByHostId: AgentModeByHostId,
) {
  return agentModeByHostId[hostId] ?? null;
}
export {
  setDefaultAgentModeForHost,
  preferredNonFullAccessAgentModeByHostIdAtom,
  getAgentModeForHost,
  agentModeByHostIdAtom,
};
