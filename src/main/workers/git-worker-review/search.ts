// Restored from ref/.vite/build/worker.js
// Search changed review hunks while skipping linguist-generated paths.

import { runGitCommand } from "../git-worker-commands";
import type { WorkerExecutionHostClient } from "../worker-execution-host-client";
import { createReviewDiffPlan } from "./diff-plan";
import { runReviewDiffCommand } from "./diff-command";
import { parseDiffHeaderPaths } from "./parsers";

type ReviewSource = "branch" | "commit" | "staged" | "unstaged";

type ReviewSearchMatch = {
  end: number;
  hunkId: string;
  lineEnd: number;
  lineStart: number;
  path: string;
  snippet: { before: string; match: string; after: string };
  start: number;
};

const maxSearchMatches = 250;
const searchSnippetContext = 24;

export async function searchReviewDiff({
  baseBranch = null,
  commitSha = null,
  cwd,
  host,
  query,
  signal,
  source,
}: {
  baseBranch?: string | null;
  commitSha?: string | null;
  cwd: string;
  host: WorkerExecutionHostClient;
  query: string;
  signal: AbortSignal;
  source: ReviewSource;
}) {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) {
    return {
      type: "success" as const,
      source,
      query: trimmedQuery,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  }

  const plan = await createReviewDiffPlan({
    baseBranch,
    commitSha,
    cwd,
    host,
    includeUntrackedFiles: true,
    signal,
    source,
  });
  if (plan == null)
    return { type: "error" as const, source, query: trimmedQuery };

  const generatedPaths = await readGeneratedDiffPaths({
    diffArgs: plan.diffArgs,
    host,
    root: plan.root,
    signal,
  });
  if (generatedPaths == null) {
    return { type: "error" as const, source, query: trimmedQuery };
  }

  const result = await runReviewDiffCommand({
    args: [...plan.diffArgs, "--unified=3"],
    cwd: plan.root,
    host,
    signal,
  });
  if (!result.success) {
    return { type: "error" as const, source, query: trimmedQuery };
  }

  return {
    type: "success" as const,
    source,
    query: trimmedQuery,
    ...findReviewDiffMatches(result.stdout, trimmedQuery, generatedPaths),
  };
}

async function readGeneratedDiffPaths({
  diffArgs,
  host,
  root,
  signal,
}: {
  diffArgs: string[];
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<Set<string> | null> {
  const nameOnly = await runReviewDiffCommand({
    args: [...diffArgs, "--name-only", "-z"],
    cwd: root,
    host,
    signal,
  });
  if (!nameOnly.success) return null;

  const paths = nameOnly.stdout.split("\0").filter((path) => path.length > 0);
  if (paths.length === 0) return new Set();

  const attrResult = await runGitCommand({
    args: ["check-attr", "-z", "linguist-generated", "--", ...paths],
    cwd: root,
    host,
    signal,
    trim: false,
  });
  if (!attrResult.success) return null;

  const parts = attrResult.stdout.split("\0").filter((part) => part.length > 0);
  const generatedPaths = new Set<string>();
  for (let index = 0; index + 2 < parts.length; index += 3) {
    const path = parts[index];
    const attribute = parts[index + 1];
    const value = parts[index + 2];
    if (
      path != null &&
      attribute === "linguist-generated" &&
      (value === "set" || value === "true")
    ) {
      generatedPaths.add(path);
    }
  }
  return generatedPaths;
}

function findReviewDiffMatches(
  diff: string,
  query: string,
  generatedPaths: Set<string>,
) {
  const parser = createReviewSearchParser(query);
  for (const line of diff.split(/\r?\n/)) parser.pushLine(line, generatedPaths);
  parser.resetHunkOffset();
  return {
    matches: parser.matches.slice(0, maxSearchMatches),
    totalMatches: parser.totalMatches,
    isCapped: parser.isCapped,
  };
}

function createReviewSearchParser(query: string) {
  const matches: ReviewSearchMatch[] = [];
  let currentPath: string | null = null;
  let currentHunkId: string | null = null;
  let lineStart = 1;
  let lineEnd = 1;
  let hunkOffset = 0;
  let hunkIndex = 0;
  let totalMatches = 0;
  let isCapped = false;

  const resetHunkOffset = (): void => {
    hunkOffset = 0;
  };
  const pushMatchText = ({
    hunkId,
    offset = 0,
    path,
    text,
  }: {
    hunkId: string;
    offset?: number;
    path: string;
    text: string;
  }): void => {
    const result = findStringOffsets(
      text,
      query,
      maxSearchMatches - matches.length,
    );
    totalMatches += result.totalMatches;
    if (result.isCapped) isCapped = true;
    for (const range of result.offsets) {
      matches.push({
        path,
        hunkId,
        lineStart,
        lineEnd,
        start: offset + range.start,
        end: offset + range.end,
        snippet: searchSnippet(text, range.start, range.end),
      });
    }
  };

  return {
    matches,
    get totalMatches() {
      return totalMatches;
    },
    get isCapped() {
      return isCapped;
    },
    resetHunkOffset,
    pushLine(line: string, generatedPaths: Set<string>) {
      if (line.startsWith("diff --git ")) {
        resetHunkOffset();
        const paths = parseDiffHeaderPaths(line);
        currentPath = paths?.newPath ?? null;
        currentHunkId = null;
        hunkIndex = 0;
        if (
          paths != null &&
          currentPath != null &&
          !generatedPaths.has(currentPath)
        ) {
          pushMatchText({
            hunkId: "path",
            path: currentPath,
            text:
              paths.oldPath === paths.newPath
                ? paths.newPath
                : `${paths.oldPath} -> ${paths.newPath}`,
          });
        }
        return;
      }
      if (currentPath != null && generatedPaths.has(currentPath)) return;

      const hunk =
        /^@@ -(?<deletionStart>\d+)(?:,(?<deletionCount>\d+))? \+(?<additionStart>\d+)(?:,(?<additionCount>\d+))? @@/.exec(
          line,
        );
      if (hunk?.groups != null) {
        resetHunkOffset();
        currentHunkId = String(hunkIndex);
        hunkIndex += 1;
        const additionStart = Number(hunk.groups.additionStart);
        const deletionStart = Number(hunk.groups.deletionStart);
        const additionCount = Number(hunk.groups.additionCount ?? "1");
        const deletionCount = Number(hunk.groups.deletionCount ?? "1");
        lineStart = Math.max(1, Math.min(additionStart, deletionStart));
        lineEnd = Math.max(
          lineStart,
          additionStart + Math.max(additionCount, 0) - 1,
          deletionStart + Math.max(deletionCount, 0) - 1,
        );
        return;
      }

      if (currentPath == null || currentHunkId == null) return;
      if (line.startsWith("+++") || line.startsWith("---")) return;
      const prefix = line[0];
      if (prefix !== " " && prefix !== "-" && prefix !== "+") return;

      const text = line.slice(1);
      pushMatchText({
        hunkId: currentHunkId,
        offset: hunkOffset,
        path: currentPath,
        text,
      });
      hunkOffset += text.length + 1;
    },
  };
}

function findStringOffsets(text: string, query: string, capacity: number) {
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  const offsets: Array<{ start: number; end: number }> = [];
  let totalMatches = 0;
  let isCapped = false;
  for (let offset = 0; offset < normalizedText.length; ) {
    const start = normalizedText.indexOf(normalizedQuery, offset);
    if (start === -1) break;
    const end = start + normalizedQuery.length;
    totalMatches += 1;
    if (offsets.length < capacity) offsets.push({ start, end });
    else isCapped = true;
    offset = end;
  }
  return { offsets, totalMatches, isCapped };
}

function searchSnippet(text: string, start: number, end: number) {
  const beforeStart = Math.max(0, start - searchSnippetContext);
  const afterEnd = Math.min(text.length, end + searchSnippetContext);
  return {
    before: text.slice(beforeStart, start),
    match: text.slice(start, end),
    after: text.slice(end, afterEnd),
  };
}
