// Restored from ref/.vite/build/src-CoIhwwHr.js
// Ephemeral read-only structured generation used by ambient suggestions.

import { randomUUID } from "node:crypto";
import type {
  AmbientAppServerConnection,
  AmbientGenerationTokenUsage,
  RuntimeSchema,
} from "./types";

const DEFAULT_STRUCTURED_RESULT_TIMEOUT_MS = 30_000;
const STRUCTURED_GENERATION_SUMMARY = "auto";

export async function generateStructuredResult<T>({
  baseInstructions,
  client,
  config,
  cwd,
  developerInstructions,
  effort,
  model,
  onTokenUsage,
  prompt,
  responseSchema,
  schema,
  serviceTier,
  threadSource = null,
  timeoutMs = DEFAULT_STRUCTURED_RESULT_TIMEOUT_MS,
}: {
  baseInstructions?: string;
  client: AmbientAppServerConnection;
  config?: Record<string, unknown> | null;
  cwd: string | null;
  developerInstructions?: string;
  effort: string;
  model: string;
  onTokenUsage?(usage: AmbientGenerationTokenUsage): void;
  prompt: string;
  responseSchema: RuntimeSchema<T>;
  schema: unknown;
  serviceTier: string | null;
  threadSource?: string | null;
  timeoutMs?: number;
}): Promise<T | null> {
  const trimmedPrompt = prompt.trim();
  if (trimmedPrompt.length === 0) return null;
  const threadRequest = {
    model,
    modelProvider: null,
    cwd,
    approvalPolicy: "never",
    permissions: ":read-only",
    runtimeWorkspaceRoots: [],
    config: { ...(config ?? {}), model_reasoning_effort: effort },
    personality: null,
    ephemeral: true,
    threadSource,
    experimentalRawEvents: false,
    dynamicTools: null,
    serviceTier: serviceTier ?? null,
    baseInstructions: baseInstructions ?? undefined,
    developerInstructions: developerInstructions ?? undefined,
  };
  const threadId = (await client.startThread(threadRequest)).thread.id;
  try {
    return await waitForStructuredTurnResult({
      client,
      onTokenUsage,
      prompt: trimmedPrompt,
      responseSchema,
      schema,
      serviceTier,
      threadId,
      timeoutMs,
    });
  } finally {
    client.unsubscribeThread(threadId).catch(() => undefined);
  }
}

async function waitForStructuredTurnResult<T>({
  client,
  onTokenUsage,
  prompt,
  responseSchema,
  schema,
  serviceTier,
  threadId,
  timeoutMs,
}: {
  client: AmbientAppServerConnection;
  onTokenUsage?(usage: AmbientGenerationTokenUsage): void;
  prompt: string;
  responseSchema: RuntimeSchema<T>;
  schema: unknown;
  serviceTier: string | null;
  threadId: string;
  timeoutMs: number;
}): Promise<T | null> {
  let turnId: string | null = null;
  let agentMessageText: string | null = null;
  let turnError: { message?: string; additionalDetails?: string } | null = null;
  let timedOut = false;
  let didInterrupt = false;
  let cleanup = (): void => {};
  const interruptTurn = (): void => {
    if (didInterrupt || turnId == null || client.interruptTurn == null) return;
    didInterrupt = true;
    client.interruptTurn({ threadId, turnId }).catch(() => undefined);
  };

  const result = new Promise<T | null>((resolve, reject) => {
    const timeout = setTimeout(() => {
      timedOut = true;
      cleanup();
      interruptTurn();
      reject(Error("Timed out waiting for structured result."));
    }, timeoutMs);
    const dispose = client.registerInternalNotificationHandler(
      (notification) => {
        switch (notification.method) {
          case "error": {
            const params = notification.params;
            if (params.threadId !== threadId) return;
            if (turnId != null && params.turnId !== turnId) return;
            turnId ??= params.turnId ?? null;
            turnError = params.error ?? null;
            return;
          }
          case "turn/started": {
            const params = notification.params;
            if (params.threadId === threadId) turnId = params.turn.id;
            return;
          }
          case "thread/tokenUsage/updated": {
            const params = notification.params;
            if (params.threadId !== threadId) return;
            if (turnId != null && params.turnId !== turnId) return;
            onTokenUsage?.(params.tokenUsage);
            return;
          }
          case "item/agentMessage/delta": {
            const params = notification.params;
            if (params.threadId !== threadId) return;
            if (params.turnId == null) {
              if (turnId != null) return;
            } else if (turnId != null && params.turnId !== turnId) {
              return;
            }
            agentMessageText = `${agentMessageText ?? ""}${params.delta}`;
            return;
          }
          case "item/completed": {
            const params = notification.params;
            if (params.threadId !== threadId) return;
            if (params.turnId == null) {
              if (turnId != null) return;
            } else if (turnId != null && params.turnId !== turnId) {
              return;
            }
            if (params.item.type === "agentMessage") {
              agentMessageText = params.item.text ?? agentMessageText;
            }
            return;
          }
          case "turn/completed": {
            const params = notification.params;
            if (params.threadId !== threadId) return;
            if (turnId != null && params.turn.id !== turnId) return;
            turnId = params.turn.id;
            if (params.turn.status !== "completed") {
              cleanup();
              reject(
                Error(
                  formatStructuredTurnError(
                    params.turn.status,
                    params.turn.error ?? turnError,
                  ),
                ),
              );
              return;
            }
            cleanup();
            resolve(parseStructuredJson(agentMessageText, responseSchema));
            return;
          }
          default:
            return;
        }
      },
    );
    cleanup = () => {
      clearTimeout(timeout);
      dispose();
      cleanup = (): void => {};
    };
  });

  try {
    const startTurn = client
      .startTurn({
        threadId,
        clientUserMessageId: randomUUID(),
        input: [{ type: "text", text: prompt, text_elements: [] }],
        cwd: null,
        approvalPolicy: null,
        permissions: ":read-only",
        runtimeWorkspaceRoots: [],
        model: null,
        effort: null,
        serviceTier: serviceTier ?? null,
        summary: STRUCTURED_GENERATION_SUMMARY,
        personality: null,
        outputSchema: schema,
        collaborationMode: null,
      })
      .then((response) => {
        turnId = response.turn.id;
        if (timedOut) interruptTurn();
      });
    await Promise.race([startTurn, result]);
    return result;
  } catch (error) {
    cleanup();
    throw error;
  }
}

function parseStructuredJson<T>(
  text: string | null,
  responseSchema: RuntimeSchema<T>,
): T | null {
  const trimmed = text?.trim();
  if (!trimmed) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    return null;
  }
  const result = responseSchema.safeParse(parsed);
  return result.success ? result.data : null;
}

function formatStructuredTurnError(
  status: string,
  error: { message?: string; additionalDetails?: string } | null,
): string {
  const details = [error?.message, error?.additionalDetails]
    .filter((item) => item != null && item.length > 0)
    .join(" ");
  if (status === "failed") {
    return details.length > 0
      ? `Structured turn failed: ${details}`
      : "Structured turn failed.";
  }
  if (status === "interrupted") {
    return details.length > 0
      ? `Structured turn was interrupted: ${details}`
      : "Structured turn was interrupted.";
  }
  return details.length > 0
    ? `Structured turn ended with status ${status}: ${details}`
    : `Structured turn ended with status ${status}.`;
}
