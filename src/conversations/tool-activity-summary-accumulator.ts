// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Folds runs of tool-activity units (between assistant messages) into rolled-up
// summary counters used by collapsed activity rendering (localConversation domain).
import { assertUnreachableToolActivity } from "./tool-activity-runtime";

type ApprovalReviewFailure = {
  id: string;
  status: "denied" | "timedOut" | string;
};

type ToolActivitySummaryUnit = {
  type: string;
  automaticApprovalReviewFailures?: ApprovalReviewFailure[];
  [key: string]: unknown;
};

type McpToolCallSourceAccumulator = {
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  name?: string | null;
  nativeAppReference?: unknown;
  count: number;
  runningCount: number;
};

type ToolActivityAccumulator = {
  createdPaths: Set<string>;
  runningCreatedPaths: Set<string>;
  stoppedCreatedPaths: Set<string>;
  runningCreatedLineCount: number;
  changedLineCount: number;
  editedPaths: Set<string>;
  runningEditedPaths: Set<string>;
  deletedPaths: Set<string>;
  runningDeletedPaths: Set<string>;
  visualizationActivitiesByPath: Map<
    string,
    { kind: "create" | "update"; isInProgress: boolean }
  >;
  visualizationCommandKind: "create" | null;
  runningVisualizationCommandCount?: number;
  exploredPaths: Set<string>;
  runningExploredPaths: Set<string>;
  loadedToolPaths: Set<string>;
  runningLoadedToolPaths: Set<string>;
  searchCount: number;
  runningSearchCount: number;
  listCount: number;
  runningListCount: number;
  automaticApprovalReviewFailureIds: Set<string>;
  deniedRequestCount: number;
  timedOutRequestCount: number;
  commandCount: number;
  runningCommandCount: number;
  completedWebSearchCommandCount: number;
  runningFolderCreationCommandCount: number;
  runningWebSearchCommandCount: number;
  mcpToolCallCount: number;
  mcpToolCallSources: Map<string, McpToolCallSourceAccumulator>;
  webSearchCount: number;
  runningWebSearchCount: number;
};

export type ToolActivitySummary = ReturnType<
  typeof finalizeToolActivitySummary
>;

type ToolActivitySummaryRange = {
  startIndex: number;
  endIndex: number;
  summary: ToolActivitySummary;
};

// Mit: compute the [start, end) ranges of units between assistant messages.
function findAssistantMessageSliceRanges(
  units: ToolActivitySummaryUnit[],
  isActivitySliceClosed: boolean,
): Array<{ startIndex: number; endIndex: number }> {
  const assistantIndices: number[] = [];
  for (const [index, unit] of units.entries()) {
    if (unit.type === "assistant-message") assistantIndices.push(index);
  }
  if (assistantIndices.length === 0) {
    return !isActivitySliceClosed || units.length === 0
      ? []
      : [{ startIndex: 0, endIndex: units.length }];
  }
  const ranges: Array<{ startIndex: number; endIndex: number }> = [];
  for (const [position, assistantIndex] of assistantIndices.entries()) {
    const next =
      assistantIndices[position + 1] ??
      (isActivitySliceClosed ? units.length : null);
    if (next == null || assistantIndex + 1 >= next) continue;
    ranges.push({ startIndex: assistantIndex + 1, endIndex: next });
  }
  return ranges;
}

// Nit: whether a unit contributes to a rolled-up tool activity summary.
function isSummarizableActivityUnit(unit: ToolActivitySummaryUnit): boolean {
  if (unit.type === "assistant-message" || unit.type === "other") return false;
  if (
    unit.type === "exploration" ||
    unit.type === "patch" ||
    unit.type === "exec" ||
    unit.type === "mcp-tool-call" ||
    unit.type === "automatic-approval-review" ||
    unit.type === "web-search"
  )
    return true;
  return assertUnreachableToolActivity(unit);
}

// Pit: create an empty accumulator.
function createToolActivityAccumulator(): ToolActivityAccumulator {
  return {
    createdPaths: new Set(),
    runningCreatedPaths: new Set(),
    stoppedCreatedPaths: new Set(),
    runningCreatedLineCount: 0,
    changedLineCount: 0,
    editedPaths: new Set(),
    runningEditedPaths: new Set(),
    deletedPaths: new Set(),
    runningDeletedPaths: new Set(),
    visualizationActivitiesByPath: new Map(),
    visualizationCommandKind: null,
    exploredPaths: new Set(),
    runningExploredPaths: new Set(),
    loadedToolPaths: new Set(),
    runningLoadedToolPaths: new Set(),
    searchCount: 0,
    runningSearchCount: 0,
    listCount: 0,
    runningListCount: 0,
    automaticApprovalReviewFailureIds: new Set(),
    deniedRequestCount: 0,
    timedOutRequestCount: 0,
    commandCount: 0,
    runningCommandCount: 0,
    completedWebSearchCommandCount: 0,
    runningFolderCreationCommandCount: 0,
    runningWebSearchCommandCount: 0,
    mcpToolCallCount: 0,
    mcpToolCallSources: new Map(),
    webSearchCount: 0,
    runningWebSearchCount: 0,
  };
}

// Lit: fold a single automatic-approval-review failure into the accumulator.
function accumulateApprovalReviewFailure(
  accumulator: ToolActivityAccumulator,
  failure: ApprovalReviewFailure,
): void {
  if (accumulator.automaticApprovalReviewFailureIds.has(failure.id)) return;
  accumulator.automaticApprovalReviewFailureIds.add(failure.id);
  switch (failure.status) {
    case "denied":
      accumulator.deniedRequestCount += 1;
      return;
    case "timedOut":
      accumulator.timedOutRequestCount += 1;
      return;
  }
}

// qG: fold a list of approval-review failures.
function accumulateApprovalReviewFailures(
  accumulator: ToolActivityAccumulator,
  failures: ApprovalReviewFailure[] | undefined,
): void {
  for (const failure of failures ?? [])
    accumulateApprovalReviewFailure(accumulator, failure);
}

// Fit: fold a single tool-activity unit into the accumulator.
function accumulateToolActivityUnit(
  accumulator: ToolActivityAccumulator,
  unit: any,
): void {
  if (unit.type === "exploration") {
    accumulateApprovalReviewFailures(
      accumulator,
      unit.automaticApprovalReviewFailures,
    );
    for (const path of unit.readPaths) accumulator.exploredPaths.add(path);
    for (const path of unit.runningReadPaths)
      accumulator.runningExploredPaths.add(path);
    for (const path of unit.loadedToolPaths)
      accumulator.loadedToolPaths.add(path);
    for (const path of unit.runningLoadedToolPaths)
      accumulator.runningLoadedToolPaths.add(path);
    accumulator.searchCount += unit.searchCount;
    accumulator.runningSearchCount += unit.runningSearchCount;
    accumulator.listCount += unit.listCount;
    accumulator.runningListCount += unit.runningListCount;
    return;
  }

  if (unit.type === "patch") {
    accumulateApprovalReviewFailures(
      accumulator,
      unit.automaticApprovalReviewFailures,
    );
    for (const path of unit.createdPaths) accumulator.createdPaths.add(path);
    for (const path of unit.runningCreatedPaths)
      accumulator.runningCreatedPaths.add(path);
    for (const path of unit.stoppedCreatedPaths)
      accumulator.stoppedCreatedPaths.add(path);
    accumulator.runningCreatedLineCount += unit.runningCreatedLineCount;
    accumulator.changedLineCount += unit.changedLineCount;
    for (const path of unit.editedPaths) accumulator.editedPaths.add(path);
    for (const path of unit.runningEditedPaths)
      accumulator.runningEditedPaths.add(path);
    for (const path of unit.deletedPaths) accumulator.deletedPaths.add(path);
    for (const path of unit.runningDeletedPaths)
      accumulator.runningDeletedPaths.add(path);
    if (unit.visualizationActivity != null) {
      for (const activity of unit.visualizationActivity.activities) {
        const existing = accumulator.visualizationActivitiesByPath.get(
          activity.path,
        );
        accumulator.visualizationActivitiesByPath.set(activity.path, {
          kind:
            existing?.kind === "create" || activity.kind === "create"
              ? "create"
              : "update",
          isInProgress:
            existing?.isInProgress === true ||
            unit.visualizationActivity.isInProgress,
        });
      }
    }
    return;
  }

  if (unit.type === "exec") {
    accumulateApprovalReviewFailures(
      accumulator,
      unit.automaticApprovalReviewFailures,
    );
    accumulator.commandCount += 1;
    if (unit.isInProgress) {
      accumulator.runningCommandCount += 1;
      if (unit.createsFolder === true)
        accumulator.runningFolderCreationCommandCount += 1;
      if (unit.searchesWeb === true)
        accumulator.runningWebSearchCommandCount += 1;
      return;
    }
    if (unit.searchesWeb === true)
      accumulator.completedWebSearchCommandCount += 1;
    return;
  }

  if (unit.type === "automatic-approval-review") {
    accumulateApprovalReviewFailure(accumulator, unit);
    return;
  }

  if (unit.type === "mcp-tool-call") {
    accumulateApprovalReviewFailures(
      accumulator,
      unit.automaticApprovalReviewFailures,
    );
    accumulator.mcpToolCallCount += 1;
    if (unit.source != null) {
      const existing = accumulator.mcpToolCallSources.get(unit.source.key);
      accumulator.mcpToolCallSources.set(unit.source.key, {
        logoUrl: unit.source.logoUrl,
        logoUrlDark: unit.source.logoUrlDark,
        name: unit.source.name,
        nativeAppReference: unit.source.nativeAppReference,
        count: (existing?.count ?? 0) + 1,
        runningCount:
          (existing?.runningCount ?? 0) + (unit.isInProgress ? 1 : 0),
      });
    }
    return;
  }

  if (unit.type === "web-search") {
    accumulator.webSearchCount += unit.count;
    accumulator.runningWebSearchCount += unit.runningCount;
    return;
  }

  return assertUnreachableToolActivity(unit);
}

// Iit: project the accumulator into the serializable summary shape.
function finalizeToolActivitySummary(accumulator: ToolActivityAccumulator) {
  return {
    createdFileCount: accumulator.createdPaths.size,
    runningCreatedFileCount: accumulator.runningCreatedPaths.size,
    stoppedCreatedFileCount: accumulator.stoppedCreatedPaths.size,
    runningCreatedLineCount: accumulator.runningCreatedLineCount,
    changedLineCount: accumulator.changedLineCount,
    editedFileCount: accumulator.editedPaths.size,
    runningEditedFileCount: accumulator.runningEditedPaths.size,
    deletedFileCount: accumulator.deletedPaths.size,
    runningDeletedFileCount: accumulator.runningDeletedPaths.size,
    exploredFileCount: accumulator.exploredPaths.size,
    runningExploredFileCount: accumulator.runningExploredPaths.size,
    loadedToolCount: accumulator.loadedToolPaths.size,
    runningLoadedToolCount: accumulator.runningLoadedToolPaths.size,
    searchCount: accumulator.searchCount,
    runningSearchCount: accumulator.runningSearchCount,
    listCount: accumulator.listCount,
    runningListCount: accumulator.runningListCount,
    deniedRequestCount: accumulator.deniedRequestCount,
    timedOutRequestCount: accumulator.timedOutRequestCount,
    commandCount: accumulator.commandCount,
    runningCommandCount: accumulator.runningCommandCount,
    completedWebSearchCommandCount: accumulator.completedWebSearchCommandCount,
    runningFolderCreationCommandCount:
      accumulator.runningFolderCreationCommandCount,
    runningWebSearchCommandCount: accumulator.runningWebSearchCommandCount,
    mcpToolCallCount: accumulator.mcpToolCallCount,
    mcpToolCallSources: [...accumulator.mcpToolCallSources.entries()].map(
      ([key, source]) => ({
        key,
        logoUrl: source.logoUrl,
        logoUrlDark: source.logoUrlDark,
        name: source.name,
        nativeAppReference: source.nativeAppReference,
        count: source.count,
        runningCount: source.runningCount,
      }),
    ),
    webSearchCount: accumulator.webSearchCount,
    runningWebSearchCount: accumulator.runningWebSearchCount,
  };
}

// jit: walk each assistant-message slice and roll contiguous summarizable units
// into [start, end) ranges carrying a finalized summary.
export function buildToolActivitySummaries({
  units,
  isActivitySliceClosed,
}: {
  units: ToolActivitySummaryUnit[];
  isActivitySliceClosed: boolean;
}): ToolActivitySummaryRange[] {
  const ranges: ToolActivitySummaryRange[] = [];
  const sliceRanges = findAssistantMessageSliceRanges(
    units,
    isActivitySliceClosed,
  );

  for (const { startIndex, endIndex } of sliceRanges) {
    let cursor = startIndex;
    while (cursor < endIndex) {
      const unit = units[cursor];
      if (unit == null || !isSummarizableActivityUnit(unit)) {
        cursor += 1;
        continue;
      }
      const rangeStart = cursor;
      const accumulator = createToolActivityAccumulator();
      while (cursor < endIndex) {
        const current = units[cursor];
        if (current == null || !isSummarizableActivityUnit(current)) break;
        accumulateToolActivityUnit(accumulator, current);
        cursor += 1;
      }
      ranges.push({
        startIndex: rangeStart,
        endIndex: cursor,
        summary: finalizeToolActivitySummary(accumulator),
      });
    }
  }
  return ranges;
}
