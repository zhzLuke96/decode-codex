// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Analytics field normalization for Computer Use native pipe requests.

import type {
  ComputerUseInvocationAnalyticsFields,
  ComputerUseNativePipeAnalyticsEvent,
  ComputerUseToolAnalyticsFields,
} from "./types";

const TRANSPORT = "native_pipe" as const;

export function createToolAnalyticsFields(
  method: string,
  params?: unknown,
  codexTurnMetadata?: unknown,
): ComputerUseToolAnalyticsFields {
  const metadata = asRecord(codexTurnMetadata) ?? {};
  return {
    bundleIdentifier: resolveBundleIdentifier(params),
    model: stringField(metadata.model),
    reasoningEffort:
      stringField(metadata.reasoning_effort) ??
      stringField(metadata.reasoningEffort) ??
      stringField(metadata.model_reasoning_effort),
    toolName: method,
    transport: TRANSPORT,
  };
}

export function createInvocationAnalyticsFields(
  codexTurnMetadata?: unknown,
): ComputerUseInvocationAnalyticsFields {
  const metadata = asRecord(codexTurnMetadata) ?? {};
  return {
    itemId:
      stringField(metadata.item_id) ??
      stringField(metadata.itemId) ??
      stringField(metadata.call_id),
    invocationSource: "model",
    mcpServerName: "computer-use",
    pluginId: "computer-use@openai-bundled",
    threadId:
      stringField(metadata.thread_id) ??
      stringField(metadata.threadId) ??
      stringField(metadata.session_id),
    turnId: stringField(metadata.turn_id),
  };
}

export function createApprovalToolFields(
  request: unknown,
): ComputerUseToolAnalyticsFields {
  const meta = asRecord(asRecord(request)?.meta);
  return createToolAnalyticsFields(
    stringField(meta?.method) ?? "unknown",
    meta?.params ?? meta?.tool_params,
  );
}

export function createApprovalResolvedEvent(
  tool: ComputerUseToolAnalyticsFields,
  result: unknown,
): ComputerUseNativePipeAnalyticsEvent {
  const parsed = asRecord(result);
  const action = stringField(parsed?.action);
  const resultMeta = asRecord(parsed?._meta);
  return {
    ...tool,
    approvalPersistence: parseApprovalPersistence(resultMeta?.persist),
    approvalResult: normalizeApprovalResult(action),
    type: "app-approval-resolved",
  };
}

export function parseTurnIdentity(
  codexTurnMetadata?: unknown,
): { sessionId: string; turnId: string } | null {
  const metadata = asRecord(codexTurnMetadata);
  const sessionId = stringField(metadata?.session_id);
  const turnId = stringField(metadata?.turn_id);
  return sessionId != null && turnId != null ? { sessionId, turnId } : null;
}

export function turnKey({
  sessionId,
  turnId,
}: {
  sessionId: string;
  turnId: string;
}): string {
  return `${sessionId}\0${turnId}`;
}

function resolveBundleIdentifier(params: unknown): string | undefined {
  const value = asRecord(params);
  const app = value?.app;
  const appRecord = asRecord(app);
  const windowRecord = asRecord(value?.window);
  return (
    stringField(value?.bundleIdentifier) ??
    stringField(value?.bundle_identifier) ??
    (typeof app === "string"
      ? app
      : (stringField(appRecord?.bundleIdentifier) ??
        stringField(appRecord?.bundle_identifier))) ??
    stringField(windowRecord?.app)
  );
}

function normalizeApprovalResult(
  action: string | undefined,
): "accepted" | "canceled" | "declined" | "unknown" {
  switch (action) {
    case "accept":
      return "accepted";
    case "cancel":
      return "canceled";
    case "decline":
      return "declined";
    default:
      return "unknown";
  }
}

function parseApprovalPersistence(
  value: unknown,
): "always" | "session" | undefined {
  return value === "always" || value === "session" ? value : undefined;
}

function stringField(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0
    ? value
    : undefined;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
