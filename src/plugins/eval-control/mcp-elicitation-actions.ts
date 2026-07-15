// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Eval-control "mcp_tool_call_approvals.accept_matching" action: find the pending
// MCP server elicitation for a thread, verify it matches the requested
// server/tool-params/message, and auto-accept it (persisted "always").

import { z } from "zod";
import isEqual from "fast-deep-equal";
import {
  buildMcpElicitationDecision,
  conversationIdForThreadId,
  pendingMcpElicitationByConversationSignal,
} from "../../boundaries/onboarding-commons-externals.facade";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { requireAppScope, type EvalControlContext } from "./app-scope";

export const acceptMatchingElicitationMatchSchema = z
  .object({
    serverName: z.string().min(1),
    toolParams: z.record(z.string().min(1), z.unknown()).optional(),
    message: z.string().min(1).optional(),
  })
  .refine(
    (match) => match.toolParams !== undefined || match.message !== undefined,
    { message: "Either toolParams or message must be provided." },
  );

export const acceptMatchingElicitationActionSchema = z.object({
  type: z.literal("mcp_tool_call_approvals.accept_matching"),
  threadId: z.string().min(1),
  match: acceptMatchingElicitationMatchSchema,
});

export type AcceptMatchingElicitationAction = z.infer<
  typeof acceptMatchingElicitationActionSchema
>;

type PendingElicitationRecord = {
  type: string;
  requestId: string;
  request: { params: { serverName: string } };
  elicitation: {
    kind: string;
    message?: string;
    approval?: { tool_params?: unknown };
  };
};

export type AcceptMatchingElicitationResult =
  | {
      accepted: false;
      reason:
        | "no_mcp_server_elicitation"
        | "server_name_not_matched"
        | "message_not_matched"
        | "unsupported_elicitation_kind"
        | "tool_params_not_matched";
      threadId: string;
      message?: string | null;
      expectedMessage?: string;
      requestId?: string;
      serverName?: string;
    }
  | {
      accepted: true;
      action: "accept";
      message: string | null;
      requestId: string;
      serverName: string;
      threadId: string;
    };

export async function runAcceptMatchingElicitationAction(
  action: AcceptMatchingElicitationAction,
  context: EvalControlContext,
): Promise<AcceptMatchingElicitationResult> {
  const conversationId = conversationIdForThreadId(action.threadId);
  const record = requireAppScope(context).get<PendingElicitationRecord | null>(
    pendingMcpElicitationByConversationSignal,
    conversationId,
  );
  if (record?.type !== "mcpServerElicitation") {
    return {
      accepted: false,
      reason: "no_mcp_server_elicitation",
      threadId: action.threadId,
    };
  }

  const { elicitation, requestId } = record;
  const message =
    "message" in elicitation ? (elicitation.message ?? null) : null;
  const serverName = record.request.params.serverName;

  if (serverName !== action.match.serverName) {
    return {
      accepted: false,
      message,
      reason: "server_name_not_matched",
      requestId,
      serverName,
      threadId: action.threadId,
    };
  }
  if (action.match.message !== undefined && message !== action.match.message) {
    return {
      accepted: false,
      expectedMessage: action.match.message,
      message,
      reason: "message_not_matched",
      requestId,
      serverName,
      threadId: action.threadId,
    };
  }
  if (action.match.toolParams !== undefined) {
    if (elicitation.kind !== "mcpToolCall") {
      return {
        accepted: false,
        message,
        reason: "unsupported_elicitation_kind",
        requestId,
        serverName,
        threadId: action.threadId,
      };
    }
    if (!isEqual(elicitation.approval?.tool_params, action.match.toolParams)) {
      return {
        accepted: false,
        message,
        reason: "tool_params_not_matched",
        requestId,
        serverName,
        threadId: action.threadId,
      };
    }
  } else if (
    elicitation.kind !== "mcpToolCall" &&
    elicitation.kind !== "generic" &&
    elicitation.kind !== "formElicitation"
  ) {
    return {
      accepted: false,
      message,
      reason: "unsupported_elicitation_kind",
      requestId,
      serverName,
      threadId: action.threadId,
    };
  }

  await sendAppServerRequest("reply-with-mcp-server-elicitation-response", {
    conversationId,
    requestId,
    response: buildMcpElicitationDecision("accept", { persist: "always" }),
  });
  return {
    accepted: true,
    action: "accept",
    message,
    requestId,
    serverName,
    threadId: action.threadId,
  };
}
