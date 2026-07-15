// Restored from ref/webview/assets/config-queries-C2OQQYPH.js
// Parametric MCP server-status query atom used by inline MCP frames/tool cards.

import {
  appStoreScope,
  createParametricAtom,
} from "./onboarding-scope-runtime";
import { sendHostRequest } from "./host-request-runtime";

type McpServerStatus = Record<string, unknown>;

export type McpServerStatusPage = {
  data: McpServerStatus[];
  nextCursor?: string | null;
};

export type McpServerStatusesQueryState = {
  data?: McpServerStatusPage;
  error?: unknown;
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
  refetch: () => Promise<McpServerStatusPage>;
};

const mcpServerStatusCache = new Map<string, McpServerStatusesQueryState>();

async function fetchMcpServerStatuses(
  hostId: string,
): Promise<McpServerStatusPage> {
  const data: McpServerStatus[] = [];
  let cursor: string | null | undefined = null;

  do {
    const page = await sendHostRequest<McpServerStatusPage>(
      "list-mcp-server-status",
      {
        params: {
          cursor,
          detail: "full",
          hostId,
          limit: 100,
        },
      },
    );
    data.push(...(page.data ?? []));
    cursor = page.nextCursor;
  } while (cursor != null);

  return { data };
}

function createQueryState(hostId: string): McpServerStatusesQueryState {
  const state: McpServerStatusesQueryState = {
    data: undefined,
    error: undefined,
    isError: false,
    isLoading: true,
    isPending: true,
    refetch: async () => {
      state.isLoading = true;
      state.isPending = true;
      state.isError = false;
      state.error = undefined;
      try {
        const data = await fetchMcpServerStatuses(hostId);
        state.data = data;
        return data;
      } catch (error) {
        state.error = error;
        state.isError = true;
        throw error;
      } finally {
        state.isLoading = false;
        state.isPending = false;
      }
    },
  };

  void state.refetch().catch(() => {});
  return state;
}

export const mcpServerStatusesQueryAtom = createParametricAtom(
  appStoreScope,
  (hostId: string | null | undefined): McpServerStatusesQueryState => {
    const cacheKey = hostId ?? "local";
    let state = mcpServerStatusCache.get(cacheKey);
    if (state == null) {
      state = createQueryState(cacheKey);
      mcpServerStatusCache.set(cacheKey, state);
    }
    return state;
  },
);
