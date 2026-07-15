// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Diff/patch text builders for review staging: reconstruct unified-diff text for a
// single hunk, a whole file, or a review section from the parsed diff model, plus
// helpers to split a multi-file diff, locate per-path/per-hunk patches, and resolve
// the apply target (staged/unstaged + revert direction) for a patch action.

import { parseUnifiedDiffFileSummaries as parseUnifiedDiff } from "../utils/unified-diff-file-summaries";

export type HunkContentEntry =
  | {
      type: "context";
      additionLineIndex: number;
      lines: number;
    }
  | {
      type: "change";
      deletionLineIndex: number;
      deletions: number;
      additionLineIndex: number;
      additions: number;
    };

export interface ReviewDiffHunk {
  hunkSpecs?: string;
  deletionStart?: number;
  deletionCount?: number;
  additionStart?: number;
  additionCount?: number;
  hunkContent: HunkContentEntry[];
}

export interface ReviewFileDiffMetadata {
  name: string;
  prevName?: string;
  mode?: string;
  prevMode?: string;
  prevObjectId?: string | null;
  newObjectId?: string | null;
  type?: "new" | "deleted" | "modified" | string;
  additionLines: string[];
  deletionLines: string[];
  hunks: ReviewDiffHunk[];
}

export interface ReviewFileDiff {
  metadata: ReviewFileDiffMetadata;
  oldPath?: string | null;
  newPath?: string | null;
}

export type StageFilter = "staged" | "unstaged";

export type PatchActionParams =
  | { action: "stage" | "unstage" | "revert"; scope: "section" }
  | {
      action: "stage" | "unstage" | "revert";
      scope: "file";
      path: string;
    }
  | {
      action: "stage" | "unstage" | "revert";
      scope?: "hunk";
      path: string;
      hunkIndex?: number;
    };

export interface ResolvedPatchTarget {
  target: "staged" | "unstaged" | "staged-and-unstaged";
  revert: boolean;
}

export function stripTrailingNewline(line: string): string {
  return line.replace(/\r?\n$/, "");
}

export function buildDiffGitHeaderLines(file: ReviewFileDiff): string[] {
  const prevName = file.metadata.prevName ?? file.metadata.name;
  const oldPath = file.oldPath ?? file.metadata.prevName ?? file.metadata.name;
  const newPath = file.newPath ?? file.metadata.name;
  const lines = [`diff --git a/${prevName} b/${file.metadata.name}`];
  const prevObjectId = file.metadata.prevObjectId;
  const newObjectId = file.metadata.newObjectId;

  if (oldPath === "/dev/null") {
    const mode = file.metadata.mode ?? "100644";
    lines.push(`new file mode ${mode}`);
  } else if (newPath === "/dev/null") {
    const mode = file.metadata.prevMode ?? file.metadata.mode ?? "100644";
    lines.push(`deleted file mode ${mode}`);
  }

  if (prevObjectId != null && newObjectId != null) {
    lines.push(`index ${prevObjectId}..${newObjectId}`);
  }

  lines.push(
    `--- ${oldPath === "/dev/null" ? "/dev/null" : `a/${oldPath}`}`,
    `+++ ${newPath === "/dev/null" ? "/dev/null" : `b/${newPath}`}`,
  );
  return lines;
}

export function buildHunkLines(
  file: ReviewFileDiff,
  hunk: ReviewDiffHunk,
): string[] {
  const lines = [
    stripTrailingNewline(
      hunk.hunkSpecs ??
        `@@ -${hunk.deletionStart ?? 0},${hunk.deletionCount ?? 0} +${hunk.additionStart ?? 0},${hunk.additionCount ?? 0} @@`,
    ),
  ];

  for (const entry of hunk.hunkContent) {
    if (entry.type === "context") {
      const contextLines = file.metadata.additionLines.slice(
        entry.additionLineIndex,
        entry.additionLineIndex + entry.lines,
      );
      lines.push(
        ...contextLines.map((line) => ` ${stripTrailingNewline(line)}`),
      );
      continue;
    }
    const deletionLines = file.metadata.deletionLines.slice(
      entry.deletionLineIndex,
      entry.deletionLineIndex + entry.deletions,
    );
    const additionLines = file.metadata.additionLines.slice(
      entry.additionLineIndex,
      entry.additionLineIndex + entry.additions,
    );
    lines.push(
      ...deletionLines.map((line) => `-${stripTrailingNewline(line)}`),
      ...additionLines.map((line) => `+${stripTrailingNewline(line)}`),
    );
  }
  return lines;
}

export function isAddedOrDeletedFile(file: ReviewFileDiff): boolean {
  return file.metadata.type === "new" || file.metadata.type === "deleted";
}

export function splitDiffSections(diffText: string): string[] {
  const headerMatches = Array.from(diffText.matchAll(/^diff --git .*$/gm));
  if (headerMatches.length === 0) {
    return diffText.trim().length === 0 ? [] : [diffText];
  }
  return headerMatches.map((match, index) => {
    const start = match.index ?? 0;
    const end =
      index + 1 < headerMatches.length
        ? (headerMatches[index + 1]?.index ?? diffText.length)
        : diffText.length;
    return diffText.slice(start, end);
  });
}

export function extractHunkPatchText(
  diffText: string,
  path: string,
  hunkIndex: number,
): string | null {
  for (const section of splitDiffSections(diffText)) {
    if (
      parseUnifiedDiff(section).find(
        (file: ReviewFileDiff) => file.metadata.name === path,
      ) == null
    ) {
      continue;
    }
    const hunkMatches = Array.from(section.matchAll(/^@@ .*$/gm));
    const targetHunk = hunkMatches[hunkIndex];
    if (targetHunk?.index == null) return null;
    const firstHunkStart = hunkMatches[0]?.index;
    if (firstHunkStart == null) return null;
    const header = section
      .slice(0, firstHunkStart)
      .split("\n")
      .filter(
        (line) =>
          line.startsWith("diff --git ") ||
          line.startsWith("new file mode ") ||
          line.startsWith("deleted file mode ") ||
          line.startsWith("index ") ||
          line.startsWith("--- ") ||
          line.startsWith("+++ "),
      )
      .join("\n");
    const body = section.slice(
      targetHunk.index,
      hunkMatches[hunkIndex + 1]?.index ?? section.length,
    );
    const patch = `${header}\n${body}`;
    return patch.endsWith("\n") ? patch : `${patch}\n`;
  }
  return null;
}

export function extractFilePatchText(
  diffText: string,
  path: string,
): string | null {
  if (!diffText || diffText.trim().length === 0) return null;
  for (const section of splitDiffSections(diffText)) {
    if (
      parseUnifiedDiff(section).some(
        (file: ReviewFileDiff) => file.metadata.name === path,
      )
    ) {
      return section.endsWith("\n") ? section : `${section}\n`;
    }
  }
  return null;
}

export function buildHunkPatch(
  diffText: string,
  path: string,
  hunkIndex: number,
): string | null {
  if (!diffText || diffText.trim().length === 0) return null;
  const extracted = extractHunkPatchText(diffText, path, hunkIndex);
  if (extracted != null) return extracted;
  const file = parseUnifiedDiff(diffText).find(
    (entry: ReviewFileDiff) => entry.metadata.name === path,
  );
  if (!file) return null;
  const hunk = file.metadata.hunks[hunkIndex];
  if (!hunk) return null;
  const lines = [
    ...buildDiffGitHeaderLines(file),
    ...buildHunkLines(file, hunk),
  ];
  if (lines[lines.length - 1] !== "") lines.push("");
  return lines.join("\n");
}

export function buildFilePatch(diffText: string, path: string): string | null {
  if (!diffText || diffText.trim().length === 0) return null;
  const file = parseUnifiedDiff(diffText).find(
    (entry: ReviewFileDiff) => entry.metadata.name === path,
  );
  if (!file) return null;
  const lines = [...buildDiffGitHeaderLines(file)];
  for (const hunk of file.metadata.hunks) {
    lines.push(...buildHunkLines(file, hunk));
  }
  if (lines[lines.length - 1] !== "") lines.push("");
  return lines.join("\n");
}

export function buildSectionPatch(files: ReviewFileDiff[]): string | null {
  if (files.length === 0) return null;
  const sections: string[] = [];
  for (const file of files) {
    if (file.metadata.hunks.length === 0 && !isAddedOrDeletedFile(file)) {
      continue;
    }
    const lines = [...buildDiffGitHeaderLines(file)];
    for (const hunk of file.metadata.hunks) {
      lines.push(...buildHunkLines(file, hunk));
    }
    if (lines[lines.length - 1] !== "") lines.push("");
    sections.push(lines.join("\n"));
  }
  return sections.length === 0 ? null : sections.join("\n");
}

export function collectDiffPaths(diffText: string): string[] {
  if (diffText.trim().length === 0) return [];
  const paths = new Set<string>();
  for (const file of parseUnifiedDiff(diffText)) {
    const name = file.metadata.name;
    if (name && name !== "/dev/null") paths.add(name);
    const prevName = file.metadata.prevName;
    if (prevName && prevName !== "/dev/null") paths.add(prevName);
  }
  return Array.from(paths);
}

export function resolvePatchTarget(
  params: PatchActionParams,
  stageFilter: StageFilter,
): ResolvedPatchTarget {
  if (params.action === "stage") {
    return { target: "staged", revert: false };
  }
  if (params.action === "unstage") {
    return { target: "staged", revert: true };
  }
  if (stageFilter === "unstaged") {
    return { target: "unstaged", revert: true };
  }
  return { target: "staged-and-unstaged", revert: true };
}
