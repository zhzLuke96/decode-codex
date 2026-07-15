// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Approval request bridge for Computer Use native pipe JSON-RPC.

import { randomUUID } from "node:crypto";
import {
  createApprovalResolvedEvent,
  createApprovalToolFields,
} from "./analytics";
import type {
  ComputerUseNativePipeAnalyticsEvent,
  ComputerUseToolAnalyticsFields,
  JsonRpcMessage,
  SendJsonRpcMessage,
} from "./types";

const APPROVAL_ID_PREFIX = "computer-use-approval:";
const REQUEST_APPROVAL_METHOD = "requestComputerUseApproval";
const APPROVAL_TIMEOUT_MS = 300 * 1000;

export function createComputerUseApprovalBridge(
  onAnalyticsEvent?: (event: ComputerUseNativePipeAnalyticsEvent) => void,
): {
  handleApprovalResponse(message: JsonRpcMessage): boolean;
  rejectPendingApprovals(error: Error): void;
  requestApprovalForSender(
    sendResponse: SendJsonRpcMessage,
    request: unknown,
  ): Promise<unknown>;
} {
  const pendingApprovals = new Map<
    string,
    {
      reject(error: Error): void;
      resolve(value: unknown): void;
      timeout: ReturnType<typeof setTimeout>;
      tool: ComputerUseToolAnalyticsFields;
    }
  >();

  return {
    handleApprovalResponse: (message) => {
      const id = message.id;
      if (typeof id !== "string" || !id.startsWith(APPROVAL_ID_PREFIX)) {
        return false;
      }
      const pending = pendingApprovals.get(id);
      if (pending == null) return true;
      pendingApprovals.delete(id);
      clearTimeout(pending.timeout);
      if ("error" in message && message.error != null) {
        onAnalyticsEvent?.(
          createApprovalResolvedEvent(pending.tool, undefined),
        );
        pending.reject(Error(message.error.message));
        return true;
      }
      const result = "result" in message ? message.result : undefined;
      onAnalyticsEvent?.(createApprovalResolvedEvent(pending.tool, result));
      pending.resolve(result);
      return true;
    },
    rejectPendingApprovals: (error) => {
      for (const pending of pendingApprovals.values()) {
        clearTimeout(pending.timeout);
        pending.reject(error);
      }
      pendingApprovals.clear();
    },
    requestApprovalForSender: (sendResponse, request) =>
      new Promise((resolve, reject) => {
        const id = `${APPROVAL_ID_PREFIX}${randomUUID()}`;
        const tool = createApprovalToolFields(request);
        onAnalyticsEvent?.({ type: "app-approval-requested", ...tool });
        const timeout = setTimeout(() => {
          pendingApprovals.delete(id);
          onAnalyticsEvent?.({
            type: "app-approval-resolved",
            ...tool,
            approvalResult: "timeout",
          });
          reject(Error("Computer Use app approval timed out"));
        }, APPROVAL_TIMEOUT_MS);
        timeout.unref?.();
        pendingApprovals.set(id, { reject, resolve, timeout, tool });
        sendResponse({
          id,
          jsonrpc: "2.0",
          method: REQUEST_APPROVAL_METHOD,
          params: request,
        });
      }),
  };
}
