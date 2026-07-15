// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Aggregates hook run results for a user message into a displayable hook-stats summary.

type HookRunEntryKind = "error" | "feedback" | "stop" | "warning" | "context";

type HookRunEntry = {
  kind: HookRunEntryKind;
  text: string;
};

type HookRunStatus = "blocked" | "failed" | "completed" | "running" | "stopped";

type HookRun = {
  entries: readonly HookRunEntry[];
  status: HookRunStatus;
  eventName: string;
  source: string;
  statusMessage?: string | null;
};

export type HookFeedbackSource = {
  source: string;
  text: string;
};

export type HookStatsEntry = {
  kind: "error" | "feedback" | "stop";
  text: string;
};

export type HookRunSummaryEntry = {
  tone: "error" | "warning";
  text: string;
};

export type HookRunSummary = {
  id: string;
  eventName: string;
  source: string;
  statusMessage: string | null;
  entries: HookRunSummaryEntry[];
  count: number;
};

export type HookStatsSummary = {
  count: number;
  blockedCount: number;
  blockedMessages: string[];
  blockedSources: string[];
  errorCount: number;
  entries: HookStatsEntry[];
  feedbackMessages: HookFeedbackSource[];
  runs: HookRunSummary[];
};

export function summarizeHookStats(
  hookRuns: ReadonlyArray<{ id: string; run: HookRun }> | null | undefined,
): HookStatsSummary | null {
  if (hookRuns == null || hookRuns.length === 0) {
    return null;
  }

  const entries: HookStatsEntry[] = [];
  const blockedMessages: string[] = [];
  const blockedSources: string[] = [];
  const feedbackMessages: HookFeedbackSource[] = [];
  const runs: HookRunSummary[] = [];
  let blockedCount = 0;
  let errorCount = 0;

  for (const { id, run } of hookRuns) {
    const runEntries: HookRunSummaryEntry[] = [];
    const runFeedback: string[] = [];

    for (const entry of run.entries) {
      switch (entry.kind) {
        case "error":
        case "feedback":
        case "stop": {
          entries.push({ kind: entry.kind, text: entry.text });
          runEntries.push({ tone: "error", text: entry.text });
          if (entry.kind === "feedback") {
            const trimmedFeedback = entry.text.trim();
            if (trimmedFeedback.length > 0) {
              runFeedback.push(trimmedFeedback);
            }
          }
          break;
        }
        case "warning":
          runEntries.push({ tone: "warning", text: entry.text });
          break;
        case "context":
          break;
      }
    }

    switch (run.status) {
      case "blocked":
        blockedCount += 1;
        if (run.eventName === "userPromptSubmit") {
          blockedSources.push(run.source);
          blockedMessages.push(...runFeedback);
        }
        break;
      case "failed":
        errorCount += 1;
        break;
      case "completed":
      case "running":
      case "stopped":
        break;
    }

    if (run.eventName === "stop") {
      feedbackMessages.push(
        ...runFeedback.map((text) => ({ source: run.source, text })),
      );
    }

    const runSummary: HookRunSummary = {
      id,
      eventName: run.eventName,
      source: run.source,
      statusMessage: run.statusMessage?.trim() || null,
      entries: runEntries,
      count: 1,
    };

    const previousSummary = runs.at(-1);
    if (
      previousSummary != null &&
      areHookRunSummariesEqual(previousSummary, runSummary)
    ) {
      previousSummary.count += 1;
      continue;
    }
    runs.push(runSummary);
  }

  return {
    count: hookRuns.length,
    blockedCount,
    blockedMessages,
    blockedSources,
    errorCount,
    entries,
    feedbackMessages,
    runs,
  };
}

export function areHookRunSummariesEqual(
  left: HookRunSummary,
  right: HookRunSummary,
): boolean {
  return (
    left.eventName === right.eventName &&
    left.source === right.source &&
    left.statusMessage === right.statusMessage &&
    left.entries.length === right.entries.length &&
    left.entries.every((entry, index) => {
      const rightEntry = right.entries[index];
      return entry.tone === rightEntry?.tone && entry.text === rightEntry?.text;
    })
  );
}
