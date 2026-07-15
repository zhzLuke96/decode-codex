// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Filters a turn's unified diff and patch batches down to only the files that
// live inside a projectless conversation's output directory, dropping the turn
// diff entirely when nothing remains (localConversation domain).
import {
  isResourceInProjectlessOutput,
  parseQuotedGitPath,
} from "../boundaries/onboarding-commons-externals.facade";

const DIFF_GIT_HEADER_PREFIX = "diff --git ";

export interface PatchChange {
  type: string;
  move_path?: string | null;
  [key: string]: unknown;
}

export interface PatchBatch {
  cwd?: string | null;
  changes: Record<string, PatchChange>;
  [key: string]: unknown;
}

export interface TurnDiffItem {
  cwd?: string | null;
  unifiedDiff: string;
  patchBatches?: PatchBatch[] | null;
  [key: string]: unknown;
}

export function parseDiffGitTargetPath(line: string): string | null {
  const rest = line.slice(DIFF_GIT_HEADER_PREFIX.length);
  if (rest.startsWith('"')) {
    const first = parseQuotedGitPath(rest, 0);
    if (first == null || rest[first.nextIndex] !== " ") {
      return null;
    }
    const second = parseQuotedGitPath(rest, first.nextIndex + 1);
    return second?.path.startsWith("b/") ? second.path.slice(2) : null;
  }
  const targetIndex = rest.lastIndexOf(" b/");
  return targetIndex < 0 ? null : rest.slice(targetIndex + 3);
}

export function filterUnifiedDiffToProjectlessOutput({
  cwd,
  projectlessOutputDirectory,
  unifiedDiff,
}: {
  cwd?: string | null;
  projectlessOutputDirectory: string;
  unifiedDiff: string;
}): string {
  const keptSegments: string[] = [];
  let currentSegment = "";
  let keepCurrentSegment = false;
  for (const line of unifiedDiff.split(/(?<=\n)/)) {
    if (line.startsWith(DIFF_GIT_HEADER_PREFIX)) {
      if (keepCurrentSegment) {
        keptSegments.push(currentSegment);
      }
      currentSegment = line;
      const targetPath = parseDiffGitTargetPath(line.replace(/\r?\n$/, ""));
      keepCurrentSegment =
        targetPath != null &&
        isResourceInProjectlessOutput({
          cwd,
          projectlessOutputDirectory,
          resourcePath: targetPath,
        });
      continue;
    }
    currentSegment += line;
  }
  if (keepCurrentSegment) {
    keptSegments.push(currentSegment);
  }
  return keptSegments.join("");
}

export function filterTurnDiffToProjectlessOutput({
  item,
  projectlessOutputDirectory,
}: {
  item: TurnDiffItem | null | undefined;
  projectlessOutputDirectory: string | null;
}): TurnDiffItem | null | undefined {
  if (item == null || projectlessOutputDirectory == null) {
    return item;
  }
  const unifiedDiff = filterUnifiedDiffToProjectlessOutput({
    cwd: item.cwd,
    projectlessOutputDirectory,
    unifiedDiff: item.unifiedDiff,
  });
  const patchBatches = item.patchBatches?.flatMap((batch) => {
    const filteredChanges = Object.fromEntries(
      Object.entries(batch.changes).filter(([changePath, change]) => {
        const resourcePath =
          change.type === "update" && change.move_path != null
            ? change.move_path
            : changePath;
        return isResourceInProjectlessOutput({
          cwd: batch.cwd ?? item.cwd,
          projectlessOutputDirectory,
          resourcePath,
        });
      }),
    );
    return Object.keys(filteredChanges).length === 0
      ? []
      : [{ ...batch, changes: filteredChanges }];
  });
  return unifiedDiff === "" &&
    (patchBatches == null || patchBatches.length === 0)
    ? null
    : { ...item, unifiedDiff, patchBatches };
}
