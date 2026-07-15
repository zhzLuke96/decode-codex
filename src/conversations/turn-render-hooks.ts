// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hooks used by the local conversation turn renderer.
import { useAppScopeValue } from "../boundaries/app-scope";
import { useThreadDetailLevel } from "../utils/thread-detail-level";
import { mcpServerStatusesQueryAtom } from "../runtime/mcp-server-status-runtime";

export function useDefaultConversationDetailLevel(): string {
  return useThreadDetailLevel();
}

export function useTurnFollowState(_toolActivityTurnKey: string | undefined) {
  return false;
}

export function useMcpServerStatuses(
  hostId: string,
  options: { enabled?: boolean } = {},
) {
  const state = useAppScopeValue<any>(mcpServerStatusesQueryAtom, hostId);
  return options.enabled === false
    ? { data: undefined, isLoading: false, isPending: false }
    : state;
}

export function useAppgenEndCardEnabled(): boolean {
  return true;
}
