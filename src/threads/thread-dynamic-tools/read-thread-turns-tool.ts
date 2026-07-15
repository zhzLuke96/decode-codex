// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Dynamic-tool action that reads a paginated, newest-first view of a thread's
// turns (with optional truncated outputs) for the agent.
import { parseCodexDelegation } from "../../boundaries/onboarding-commons-externals.facade";
import { setThreadArchivedTool } from "./archive-thread-tool";
import { resolveThreadHost } from "./resolve-thread-host";

interface AppScope {
  get(signal: unknown, key?: string): unknown;
}

type ThreadStatus =
  | { type: "active"; activeFlags: unknown }
  | { type: "idle" }
  | { type: "notLoaded" }
  | { type: "systemError" };

interface TruncatedText {
  text: string;
  truncated: boolean;
  originalChars?: number;
}

function truncateText(text: string, maxChars: number): TruncatedText {
  return text.length <= maxChars
    ? { text, truncated: false }
    : {
        text: text.slice(0, maxChars),
        truncated: true,
        originalChars: text.length,
      };
}

function serializeThreadStatus(status: {
  type: string;
  activeFlags?: unknown;
}) {
  switch (status.type) {
    case "active":
      return { type: "active", activeFlags: status.activeFlags };
    case "idle":
    case "notLoaded":
    case "systemError":
      return { type: status.type };
  }
}

function serializeUserMessageContent(content: {
  type: string;
  text?: string;
  url?: string;
  path?: string;
  name?: string;
}) {
  switch (content.type) {
    case "text": {
      const delegation = parseCodexDelegation(content.text);
      return {
        type: content.type,
        text: content.text,
        codexDelegation:
          delegation == null
            ? undefined
            : {
                sourceThreadId: delegation.sourceThreadId,
                input: delegation.input,
              },
      };
    }
    case "image":
      return { type: content.type, url: content.url };
    case "localImage":
      return { type: content.type, path: content.path };
    case "skill":
    case "mention":
      return { type: content.type, name: content.name, path: content.path };
  }
}

function serializeTurnItem(
  item: any,
  includeOutputs: boolean,
  maxOutputChars: number,
) {
  switch (item.type) {
    case "userMessage":
      return {
        type: item.type,
        id: item.id,
        content: item.content.map(serializeUserMessageContent),
      };
    case "agentMessage":
      return {
        type: item.type,
        id: item.id,
        text: item.text,
        phase: item.phase,
      };
    case "plan":
      return { type: item.type, id: item.id, text: item.text };
    case "reasoning":
      return {
        type: item.type,
        id: item.id,
        summary: item.summary,
        ...(includeOutputs
          ? {
              content: item.content.map((entry: string) =>
                truncateText(entry, maxOutputChars),
              ),
            }
          : {}),
      };
    case "commandExecution":
      return {
        type: item.type,
        id: item.id,
        command: item.command,
        cwd: item.cwd,
        status: item.status,
        exitCode: item.exitCode,
        durationMs: item.durationMs,
        ...(includeOutputs && item.aggregatedOutput != null
          ? { output: truncateText(item.aggregatedOutput, maxOutputChars) }
          : {}),
      };
    case "fileChange":
      return {
        type: item.type,
        id: item.id,
        status: item.status,
        changes: item.changes.map((change: any) => ({
          path: change.path,
          kind: change.kind,
          ...(includeOutputs
            ? { diff: truncateText(change.diff, maxOutputChars) }
            : {}),
        })),
      };
    case "mcpToolCall":
      return {
        type: item.type,
        id: item.id,
        server: item.server,
        tool: item.tool,
        arguments: item.arguments,
        status: item.status,
        durationMs: item.durationMs,
      };
    case "dynamicToolCall":
      return {
        type: item.type,
        id: item.id,
        tool: item.tool,
        arguments: item.arguments,
        status: item.status,
        success: item.success,
        durationMs: item.durationMs,
      };
    case "collabAgentToolCall":
      return {
        type: item.type,
        id: item.id,
        tool: item.tool,
        status: item.status,
        senderThreadId: item.senderThreadId,
        receiverThreadIds: item.receiverThreadIds,
        prompt: item.prompt,
        model: item.model,
        reasoningEffort: item.reasoningEffort,
      };
    case "subAgentActivity":
      return {
        type: item.type,
        id: item.id,
        kind: item.kind,
        agentThreadId: item.agentThreadId,
        agentPath: item.agentPath,
      };
    case "webSearch":
      return {
        type: item.type,
        id: item.id,
        query: item.query,
        action: item.action,
      };
    case "imageView":
      return { type: item.type, id: item.id, path: item.path };
    case "sleep":
      return { type: item.type, id: item.id, durationMs: item.durationMs };
    case "imageGeneration":
      return {
        type: item.type,
        id: item.id,
        status: item.status,
        revisedPrompt: item.revisedPrompt,
        result: item.result,
        savedPath: item.savedPath ?? null,
      };
    case "enteredReviewMode":
    case "exitedReviewMode":
      return { type: item.type, id: item.id, review: item.review };
    case "hookPrompt":
      return {
        type: item.type,
        id: item.id,
        fragmentCount: item.fragments.length,
      };
    case "contextCompaction":
      return { type: item.type, id: item.id };
  }
}

function serializeTurn(
  turn: any,
  includeOutputs: boolean,
  maxOutputChars: number,
) {
  return {
    id: turn.id,
    status: turn.status,
    error:
      turn.error == null
        ? null
        : {
            message: turn.error.message,
            additionalDetails: turn.error.additionalDetails,
          },
    startedAt: turn.startedAt,
    completedAt: turn.completedAt,
    durationMs: turn.durationMs,
    items: turn.items.map((item: any) =>
      serializeTurnItem(item, includeOutputs, maxOutputChars),
    ),
  };
}

export async function readThreadTurnsTool({
  scope,
  cursor,
  hostId,
  includeOutputs,
  maxOutputCharsPerItem,
  threadId,
  turnLimit,
}: {
  scope: AppScope;
  cursor?: string | null;
  hostId?: string | null;
  includeOutputs: boolean;
  maxOutputCharsPerItem: number;
  threadId: string;
  turnLimit: number;
}) {
  const { hostId: resolvedHostId, manager } = await resolveThreadHost({
    scope,
    threadId,
    preferredHostId: hostId,
  });
  const { thread } = (await manager.readThread(threadId, {
    includeTurns: true,
  })) as { thread: any };
  const cursorIndex =
    cursor == null
      ? thread.turns.length
      : thread.turns.findIndex((turn: any) => turn.id === cursor);
  if (cursorIndex < 0) {
    throw Error(`Unknown cursor for thread ${threadId}: ${cursor}`);
  }
  const turnsBeforeCursor = thread.turns.slice(0, cursorIndex);
  const pageTurns = turnsBeforeCursor.slice(-turnLimit).reverse();
  return {
    schemaVersion: 1,
    thread: {
      id: thread.id,
      hostId: resolvedHostId,
      title: thread.name,
      preview: thread.preview,
      status: serializeThreadStatus(thread.status) as ThreadStatus,
      cwd: thread.cwd,
      createdAt: thread.createdAt,
      updatedAt: thread.updatedAt,
    },
    page: {
      order: "newest_first",
      limit: turnLimit,
      nextCursor:
        turnsBeforeCursor.length > pageTurns.length
          ? (pageTurns.at(-1)?.id ?? null)
          : null,
      hasMore: turnsBeforeCursor.length > pageTurns.length,
    },
    turns: pageTurns.map((turn: any) =>
      serializeTurn(turn, includeOutputs, maxOutputCharsPerItem),
    ),
  };
}

export function initThreadDynamicToolsChunk(): void {
  void setThreadArchivedTool;
  void readThreadTurnsTool;
}
