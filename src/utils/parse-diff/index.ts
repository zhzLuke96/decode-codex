// Restored from ref/webview/assets/parse-diff-C81j2HIg.js
// parse-diff-C81j2HIg chunk restored from the Codex webview bundle.
import { vscodeApiH } from "../../boundaries/vscode-api";
import { parsePatchFiles } from "../../features/parse-patch-files";
import {
  applyQuotedGitHeaderPaths,
  normalizeQuotedGitDiffPaths,
} from "./git-paths";
import {
  createLazyPatchFileSizeSummary,
  getPatchFileSizeSummary,
} from "./size";
import type {
  DiffScaleSummary,
  ParsedDiffFile,
  ParsedPatchFile,
  ParseDiffOptions,
  PatchHunk,
} from "./types";
const MAX_DIFF_FILE_COUNT = 128;
const MAX_DIFF_CHANGED_LINES = 9_000;
const MAX_DIFF_CHANGED_BYTES = 12 * 1024 * 1024;
const MAX_RENDERED_FILE_LINES = 15_000;
const MAX_RENDERED_FILE_CHANGED_BYTES = 3 * 1024 * 1024;
const MAX_RENDERED_LINE_BYTES = 1 * 1024 * 1024;
const MAX_CACHED_DIFF_LENGTH = 200_000;
const MAX_PARSE_CACHE_ENTRIES = 50;
export const NULL_DIFF_PATH = "/dev/null";
const parsedDiffCache = new Map<string, Map<string, ParsedDiffFile[]>>();
let nextDiffCacheKey = 0;
export function initParseDiffRuntimeChunk(): void {}

export function initDiffPathRuntimeChunk(): void {}

export function shouldSkipFullDiffParse({
  fileCount,
  totalChangedBytes,
  totalChangedLines,
}: DiffScaleSummary) {
  return (
    fileCount > MAX_DIFF_FILE_COUNT ||
    totalChangedLines > MAX_DIFF_CHANGED_LINES ||
    totalChangedBytes > MAX_DIFF_CHANGED_BYTES
  );
}
export function isParsedDiffFileTooLarge(diff: ParsedDiffFile) {
  return (
    diff.additions + diff.deletions > MAX_RENDERED_FILE_LINES ||
    diff.changedBytes > MAX_RENDERED_FILE_CHANGED_BYTES ||
    diff.maxChangedLineBytes > MAX_RENDERED_LINE_BYTES
  );
}
export function isPatchFileTooLarge(file: ParsedPatchFile) {
  const changedLines = file.hunks.reduce(
    (total, hunk) => total + hunk.additionLines + hunk.deletionLines,
    0,
  );
  if (changedLines > MAX_RENDERED_FILE_LINES) return true;
  const { changedBytes, maxChangedLineBytes } = getPatchFileSizeSummary(file);
  return (
    changedBytes > MAX_RENDERED_FILE_CHANGED_BYTES ||
    maxChangedLineBytes > MAX_RENDERED_LINE_BYTES
  );
}
export function parseDiff(
  diffText: string,
  { maxFiles }: ParseDiffOptions = {},
): ParsedDiffFile[] {
  const shouldCache = diffText.length <= MAX_CACHED_DIFF_LENGTH;
  const cacheKey = shouldCache ? `${maxFiles ?? "all"}` : "";
  const cachedByOptions = shouldCache
    ? parsedDiffCache.get(diffText)
    : undefined;
  const cachedResult = cachedByOptions?.get(cacheKey);
  if (cachedByOptions != null) {
    parsedDiffCache.delete(diffText);
    parsedDiffCache.set(diffText, cachedByOptions);
  }
  if (cachedResult != null) return cachedResult;
  const binaryFileIndexes = diffText.includes("GIT binary patch")
    ? collectBinaryFileIndexes(diffText)
    : new Set<number>();
  const gitlinkFileIndexes = diffText.includes("160000")
    ? collectGitlinkFileIndexes(diffText)
    : new Set<number>();
  const normalizedDiff = normalizeQuotedGitDiffPaths(diffText);
  let parsedPatches;
  try {
    parsedPatches = parsePatchFiles(
      normalizedDiff.diff,
      `codex-diff-${nextDiffCacheKey++}`,
    );
  } catch (error) {
    vscodeApiH.error("Failed to parse diff", {
      safe: {},
      sensitive: {
        error,
      },
    });
    parsedPatches = [];
  }
  const parsedDiffFiles: ParsedDiffFile[] = [];
  let fileIndex = 0;
  for (const patch of parsedPatches) {
    for (const file of patch.files) {
      if (maxFiles !== undefined && parsedDiffFiles.length >= maxFiles) {
        return parsedDiffFiles;
      }
      try {
        const metadata = applyQuotedGitHeaderPaths(
          file,
          normalizedDiff.pathsByFileIndex.get(fileIndex),
        );
        const { oldPath, newPath } = getDiffDisplayPaths(metadata);
        const sizeSummary = createLazyPatchFileSizeSummary(metadata);
        const additions = sumHunkLines(metadata.hunks, "additionLines");
        const deletions = sumHunkLines(metadata.hunks, "deletionLines");
        parsedDiffFiles.push({
          metadata,
          oldPath,
          newPath,
          additions,
          deletions,
          get changedBytes() {
            return sizeSummary().changedBytes;
          },
          get maxChangedLineBytes() {
            return sizeSummary().maxChangedLineBytes;
          },
          firstAdditionLine: metadata.hunks.find(
            (hunk) => hunk.additionCount > 0,
          )?.additionStart,
          firstDeletionLine: metadata.hunks.find(
            (hunk) => hunk.deletionLines > 0,
          )?.deletionStart,
          isBinary: binaryFileIndexes.has(fileIndex),
          isGitlink: gitlinkFileIndexes.has(fileIndex),
        });
      } catch (error) {
        vscodeApiH.error("Failed to parse diff", {
          safe: {},
          sensitive: {
            name: file.name,
            error,
          },
        });
      }
      fileIndex += 1;
    }
  }
  if (shouldCache) {
    const cacheBucket = cachedByOptions ?? new Map<string, ParsedDiffFile[]>();
    cacheBucket.set(cacheKey, parsedDiffFiles);
    parsedDiffCache.delete(diffText);
    parsedDiffCache.set(diffText, cacheBucket);
    if (parsedDiffCache.size > MAX_PARSE_CACHE_ENTRIES) {
      const oldestKey = parsedDiffCache.keys().next().value;
      if (oldestKey != null) parsedDiffCache.delete(oldestKey);
    }
  }
  return parsedDiffFiles;
}
function collectBinaryFileIndexes(diffText: string) {
  const indexes = new Set<number>();
  let fileIndex = -1;
  for (const line of diffText.split(/\r?\n/)) {
    if (line.startsWith("diff --git ")) {
      fileIndex += 1;
      continue;
    }
    if (line.startsWith("GIT binary patch") && fileIndex >= 0) {
      indexes.add(fileIndex);
    }
  }
  return indexes;
}
function collectGitlinkFileIndexes(diffText: string) {
  const indexes = new Set<number>();
  let fileIndex = -1;
  for (const line of diffText.split(/\r?\n/)) {
    if (line.startsWith("diff --git ")) {
      fileIndex += 1;
      continue;
    }
    if (
      fileIndex >= 0 &&
      (/^(?:new file mode|deleted file mode|old mode|new mode) 160000$/.test(
        line,
      ) ||
        /^index [0-9a-f]+\.\.[0-9a-f]+ 160000$/.test(line))
    ) {
      indexes.add(fileIndex);
    }
  }
  return indexes;
}
function getDiffDisplayPaths(file: ParsedPatchFile) {
  return {
    oldPath:
      file.type === "new" ? NULL_DIFF_PATH : (file.prevName ?? file.name),
    newPath: file.type === "deleted" ? NULL_DIFF_PATH : file.name,
  };
}
function sumHunkLines(
  hunks: PatchHunk[],
  key: "additionLines" | "deletionLines",
) {
  return hunks.reduce((total, hunk) => total + hunk[key], 0);
}
