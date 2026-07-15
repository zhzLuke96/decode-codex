// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Data-only helpers behind conversation tool-activity grouping. These are kept
// outside the facade so grouping producers can be re-exported without cycles.
import {
  CREATE_THREAD_TOOL_NAME,
  FORK_THREAD_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "./codex-app-tool-names";

type AnyRecord = Record<string, any>;

type ToolActivitySummaryContext = {
  isTurnCancelled?: boolean;
  mcpServerStatuses?: unknown;
  modelProvider?: unknown;
  resolvedApps?: unknown;
  shouldKeepMcpAppToolCallsExpandedByDefault?: boolean;
};

export const codexAppToolNamespace = "codex_app";

export const threadsForkTool = FORK_THREAD_TOOL_NAME;
export const threadsForkInWorktreeTool = FORK_THREAD_TOOL_NAME;
export const threadsReadTool = READ_THREAD_TOOL_NAME;
export const threadsListTool = LIST_THREADS_TOOL_NAME;
export const threadsCreateTool = CREATE_THREAD_TOOL_NAME;
export const threadsCreateInWorktreeTool = CREATE_THREAD_TOOL_NAME;
export const threadsSendMessageTool = SEND_MESSAGE_TO_THREAD_TOOL_NAME;
export const threadsSetArchivedTool = SET_THREAD_ARCHIVED_TOOL_NAME;
export const threadsSetPinnedTool = SET_THREAD_PINNED_TOOL_NAME;
export const threadsSetTitleTool = SET_THREAD_TITLE_TOOL_NAME;

export const coreToolActivityDescriptors: any[] = [];
export const subagentToolActivityDescriptors: any[] = [];

export function assertUnreachableToolActivity(_unit: never): { type: "other" } {
  return { type: "other" };
}

export function getThreadsForkSummaryPartKey(item: AnyRecord): string {
  const args = getToolArguments(item);
  return args.environment?.type === "worktree" ? "worktree" : "same-directory";
}

export function getThreadsReadSummaryPartKey(item: AnyRecord): string {
  const args = getToolArguments(item);
  return String(args.threadId ?? args.cursor ?? "");
}

export function getThreadsListSummaryPartKey(item: AnyRecord): string {
  const args = getToolArguments(item);
  return String(args.query ?? args.limit ?? "");
}

export function getMultiAgentToolGroupKey({
  item,
}: {
  item: AnyRecord;
}): { groupKey: string } | null {
  const action =
    item.action ??
    item.arguments?.action ??
    item.invocation?.arguments?.action ??
    item.invocation?.tool;
  const agentId =
    item.agentId ??
    item.arguments?.agentId ??
    item.invocation?.arguments?.agentId ??
    item.invocation?.arguments?.threadId;
  if (typeof action !== "string" || typeof agentId !== "string") return null;
  if (!["spawnAgent", "sendInput", "resumeAgent", "closeAgent"].includes(action))
    return null;
  return { groupKey: `multi-agent:${action}:${agentId}` };
}

export function resolveAppForToolCall({
  apps,
  functionName,
  serverName,
  toolName,
}: {
  apps: unknown;
  functionName?: string | null;
  serverName?: string | null;
  toolName?: string | null;
}): AnyRecord | null {
  const candidates = Array.isArray(apps)
    ? apps
    : Array.isArray((apps as AnyRecord | null)?.data)
      ? (apps as AnyRecord).data
      : [];
  for (const app of candidates) {
    if (!app || typeof app !== "object") continue;
    const record = app as AnyRecord;
    if (matchesAppTool(record, { functionName, serverName, toolName })) {
      return record;
    }
  }
  return null;
}

export const findMatchingMcpApp = resolveAppForToolCall;

export function shouldHideMcpToolCall({
  item,
  mcpServerStatuses,
}: {
  item: AnyRecord;
  mcpServerStatuses: unknown;
}): boolean {
  const status = findMcpToolStatus(item, mcpServerStatuses);
  return Boolean(
    status?.hidden ??
      status?.isHidden ??
      status?.hideInConversation ??
      status?.disabled,
  );
}

export function shouldAutoExpandMcpToolCall({
  item,
  mcpServerStatuses,
}: {
  item: AnyRecord;
  mcpServerStatuses: unknown;
}): boolean {
  const status = findMcpToolStatus(item, mcpServerStatuses);
  return Boolean(
    status?.autoExpand ??
      status?.auto_expand ??
      status?.openByDefault ??
      status?.expandByDefault,
  );
}

export function toToolActivitySummaryUnit(
  unit: AnyRecord,
  context: ToolActivitySummaryContext = {},
): AnyRecord {
  if (unit.kind === "web-search-group") {
    const items = Array.isArray(unit.items) ? unit.items : [];
    return {
      type: "web-search",
      count: items.length,
      runningCount: items.filter((item) => isItemInProgress(item, context))
        .length,
    };
  }

  if (unit.kind !== "entry") return { type: "other" };

  const entry = unit.entry;
  if (entry?.kind === "exploration") {
    return summarizeExplorationEntry(entry, context);
  }
  if (entry?.kind !== "item") return { type: "other" };

  const item = entry.item;
  switch (item?.type) {
    case "automatic-approval-review":
      return {
        type: "automatic-approval-review",
        id: String(item.id ?? item.targetItemId ?? ""),
        status: item.status,
      };
    case "exec":
      return summarizeExecItem(item, context);
    case "mcp-tool-call":
      return summarizeMcpToolCall(item, context);
    case "patch":
      return summarizePatchItem(item, context);
    case "web-search":
      return {
        type: "web-search",
        count: 1,
        runningCount: isItemInProgress(item, context) ? 1 : 0,
      };
    default:
      return { type: "other" };
  }
}

function summarizeExplorationEntry(
  entry: AnyRecord,
  context: ToolActivitySummaryContext,
): AnyRecord {
  const readPaths = new Set<string>();
  const runningReadPaths = new Set<string>();
  const loadedToolPaths = new Set<string>();
  const runningLoadedToolPaths = new Set<string>();
  let searchCount = 0;
  let runningSearchCount = 0;
  let listCount = 0;
  let runningListCount = 0;
  const items = Array.isArray(entry.items) ? entry.items : [];
  const activeIndex = entry.status === "exploring" ? items.length - 1 : -1;

  for (const [index, item] of items.entries()) {
    if (item?.type !== "exec") continue;
    const parsed = item.parsedCmd;
    const running = index === activeIndex && !context.isTurnCancelled;
    switch (parsed?.type) {
      case "read": {
        const path = stringOrNull(parsed.path ?? parsed.name);
        if (path != null) {
          readPaths.add(path);
          if (running) runningReadPaths.add(path);
          if (isLikelyToolDefinitionPath(path)) {
            loadedToolPaths.add(path);
            if (running) runningLoadedToolPaths.add(path);
          }
        }
        break;
      }
      case "search":
        searchCount += 1;
        if (running) runningSearchCount += 1;
        break;
      case "list_files":
        listCount += 1;
        if (running) runningListCount += 1;
        break;
    }
  }

  return {
    type: "exploration",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(entry),
    readPaths: [...readPaths],
    runningReadPaths: [...runningReadPaths],
    loadedToolPaths: [...loadedToolPaths],
    runningLoadedToolPaths: [...runningLoadedToolPaths],
    searchCount,
    runningSearchCount,
    listCount,
    runningListCount,
  };
}

function summarizeExecItem(
  item: AnyRecord,
  context: ToolActivitySummaryContext,
): AnyRecord {
  const parsed = item.parsedCmd ?? {};
  return {
    type: "exec",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(item),
    isInProgress: isItemInProgress(item, context),
    createsFolder:
      parsed.type === "mkdir" ||
      /(?:^|\s)(?:mkdir|install|create)\b/i.test(String(item.cmd ?? "")),
    searchesWeb:
      parsed.type === "web_search" ||
      /(?:curl|wget|web_search|search web)/i.test(String(item.cmd ?? "")),
  };
}

function summarizeMcpToolCall(
  item: AnyRecord,
  context: ToolActivitySummaryContext,
): AnyRecord {
  const app = resolveAppForToolCall({
    apps: context.resolvedApps,
    functionName: item.functionName,
    serverName: item.invocation?.server,
    toolName: item.invocation?.tool,
  });
  return {
    type: "mcp-tool-call",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(item),
    isInProgress: isItemInProgress(item, context),
    source:
      app == null
        ? null
        : {
            key: `app:${app.id ?? app.name}`,
            logoUrl: app.logoUrl ?? null,
            logoUrlDark: app.logoUrlDark ?? null,
            name: app.name ?? app.id ?? null,
            nativeAppReference: app.nativeAppReference ?? null,
          },
  };
}

function summarizePatchItem(
  item: AnyRecord,
  context: ToolActivitySummaryContext,
): AnyRecord {
  const createdPaths = new Set<string>();
  const runningCreatedPaths = new Set<string>();
  const stoppedCreatedPaths = new Set<string>();
  const editedPaths = new Set<string>();
  const runningEditedPaths = new Set<string>();
  const deletedPaths = new Set<string>();
  const runningDeletedPaths = new Set<string>();
  const isInProgress = isItemInProgress(item, context);
  let runningCreatedLineCount = 0;
  let changedLineCount = 0;

  for (const [path, change] of Object.entries(item.changes ?? {})) {
    const record = change as AnyRecord;
    const stats = countPatchChangeLines(record);
    changedLineCount += stats.changed;
    switch (record.type) {
      case "add":
        createdPaths.add(path);
        if (isInProgress) {
          runningCreatedPaths.add(path);
          runningCreatedLineCount += stats.additions;
        }
        if (item.success === false || context.isTurnCancelled)
          stoppedCreatedPaths.add(path);
        break;
      case "delete":
        deletedPaths.add(path);
        if (isInProgress) runningDeletedPaths.add(path);
        break;
      default:
        editedPaths.add(path);
        if (isInProgress) runningEditedPaths.add(path);
        break;
    }
  }

  return {
    type: "patch",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(item),
    createdPaths: [...createdPaths],
    runningCreatedPaths: [...runningCreatedPaths],
    stoppedCreatedPaths: [...stoppedCreatedPaths],
    runningCreatedLineCount,
    changedLineCount,
    editedPaths: [...editedPaths],
    runningEditedPaths: [...runningEditedPaths],
    deletedPaths: [...deletedPaths],
    runningDeletedPaths: [...runningDeletedPaths],
    visualizationActivity: null,
  };
}

function collectApprovalReviewFailures(item: AnyRecord): AnyRecord[] {
  const reviews =
    item.automaticApprovalReviewFailures ?? item.automaticApprovalReviews ?? [];
  return Array.isArray(reviews)
    ? reviews.filter(
        (review) => review?.status === "denied" || review?.status === "timedOut",
      )
    : [];
}

function isItemInProgress(
  item: AnyRecord,
  context: ToolActivitySummaryContext,
): boolean {
  if (context.isTurnCancelled) return false;
  if (item.completed === false) return true;
  if (item.type === "exec") return item.output?.exitCode === undefined;
  if (item.type === "patch") return item.success == null;
  if (item.result == null && item.completed !== true) return true;
  return false;
}

function matchesAppTool(
  app: AnyRecord,
  tool: {
    functionName?: string | null;
    serverName?: string | null;
    toolName?: string | null;
  },
): boolean {
  const serverNames = [
    app.serverName,
    app.server_name,
    app.mcpServerName,
    app.mcp_server_name,
    app.connectorId,
    app.connector_id,
    app.id,
  ].filter(Boolean);
  const tools = [
    ...(Array.isArray(app.tools) ? app.tools : []),
    ...(Array.isArray(app.mcpTools) ? app.mcpTools : []),
  ];
  const serverMatches =
    tool.serverName == null || serverNames.includes(tool.serverName);
  if (serverMatches && tools.length === 0) return false;
  return tools.some((candidate) => {
    const record = candidate as AnyRecord;
    return (
      [record.name, record.tool, record.toolName, record.functionName].includes(
        tool.toolName,
      ) ||
      [record.name, record.tool, record.toolName, record.functionName].includes(
        tool.functionName,
      )
    );
  });
}

function findMcpToolStatus(
  item: AnyRecord,
  statuses: unknown,
): AnyRecord | null {
  const server = item.invocation?.server;
  const tool = item.invocation?.tool;
  const candidates = Array.isArray(statuses)
    ? statuses
    : Array.isArray((statuses as AnyRecord | null)?.data)
      ? (statuses as AnyRecord).data
      : Object.values((statuses as AnyRecord | null) ?? {});
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") continue;
    const record = candidate as AnyRecord;
    if (
      [record.server, record.serverName, record.name].includes(server) &&
      Array.isArray(record.tools)
    ) {
      const toolStatus = record.tools.find((toolRecord: AnyRecord) =>
        [toolRecord.name, toolRecord.tool, toolRecord.toolName].includes(tool),
      );
      if (toolStatus != null) return toolStatus;
    }
    if ([record.server, record.serverName].includes(server)) {
      if ([record.tool, record.toolName, record.name].includes(tool))
        return record;
    }
  }
  return null;
}

function countPatchChangeLines(change: AnyRecord): {
  additions: number;
  changed: number;
} {
  if (change.type === "add") {
    const additions = String(change.content ?? "")
      .split(/\r?\n/u)
      .filter((line, index, lines) => line.length > 0 || index < lines.length - 1)
      .length;
    return { additions, changed: additions };
  }
  if (change.type === "delete") return { additions: 0, changed: 0 };
  const diff = String(change.unified_diff ?? change.unifiedDiff ?? "");
  let additions = 0;
  let deletions = 0;
  for (const line of diff.split(/\r?\n/u)) {
    if (line.startsWith("+++") || line.startsWith("---")) continue;
    if (line.startsWith("+")) additions += 1;
    if (line.startsWith("-")) deletions += 1;
  }
  return { additions, changed: additions + deletions };
}

function getToolArguments(item: AnyRecord): AnyRecord {
  return item.arguments ?? item.invocation?.arguments ?? {};
}

function isLikelyToolDefinitionPath(path: string): boolean {
  return /(^|\/)(SKILL|AGENTS)\.md$/i.test(path);
}

function stringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}
