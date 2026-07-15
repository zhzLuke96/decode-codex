// Restored from ref/webview/assets/parsePatchFiles-Dm7PKlLE.js
// parsePatchFiles-Dm7PKlLE chunk restored from the Codex webview bundle.
import {
  gitDiffBoundaryPattern,
  gitHeaderPattern,
  gitPathPattern,
  indexHeaderPattern,
  mboxPatchBoundaryPattern,
  unifiedFileBoundaryPattern,
  unifiedPathPattern,
} from "./constants";
import {
  normalizeOptionalUtf8,
  normalizeUtf8,
  resetEncodingBuffer,
  trimTrailingLineEnding,
} from "./encoding";
import type {
  ParsedHunkSpec,
  ParsedPatchContent,
  ParsedPatchFile,
  ParsePatchFileOptions,
  PatchFileSnapshot,
  PatchHunk,
  PatchLineBlock,
} from "./types";

function parsePatchContent(
  content: string,
  cacheKey?: string,
  throwOnError = false,
): ParsedPatchContent {
  try {
    return parsePatchContentImpl(content, cacheKey, throwOnError);
  } finally {
    resetEncodingBuffer();
  }
}

function parsePatchContentImpl(
  content: string,
  cacheKey?: string,
  throwOnError = false,
): ParsedPatchContent {
  const isGitDiff = containsGitDiff(content);
  const chunks = isGitDiff
    ? splitBefore(content, "diff --git")
    : content.split(unifiedFileBoundaryPattern);
  let patchMetadata: string | undefined;
  const files: ParsedPatchFile[] = [];

  for (const chunk of chunks) {
    const isValidChunk = isGitDiff
      ? gitDiffBoundaryPattern.test(chunk)
      : unifiedFileBoundaryPattern.test(chunk);
    if (!isValidChunk) {
      if (patchMetadata == null) {
        patchMetadata = normalizeUtf8(chunk);
      } else if (throwOnError) {
        throw Error("parsePatchContent: unknown file blob");
      } else {
        console.error("parsePatchContent: unknown file blob:", chunk);
      }
      continue;
    }

    const file = parsePatchFile(chunk, {
      cacheKey: cacheKey == null ? undefined : `${cacheKey}-${files.length}`,
      isGitDiff,
      throwOnError,
    });
    if (file != null) files.push(file);
  }
  return { patchMetadata, files };
}

function parsePatchFile(
  content: string,
  {
    cacheKey,
    isGitDiff = gitDiffBoundaryPattern.test(content),
    oldFile,
    newFile,
    throwOnError = false,
  }: ParsePatchFileOptions = {},
) {
  try {
    return parsePatchFileImpl(content, {
      cacheKey,
      isGitDiff,
      oldFile,
      newFile,
      throwOnError,
    });
  } finally {
    resetEncodingBuffer();
  }
}

function parsePatchFileImpl(
  content: string,
  {
    cacheKey,
    isGitDiff = gitDiffBoundaryPattern.test(content),
    oldFile,
    newFile,
    throwOnError = false,
  }: ParsePatchFileOptions = {},
) {
  let previousAdditionEnd = 0;
  const hunkChunks = splitBefore(content, "@@ ");
  let patchFile: ParsedPatchFile | undefined;
  const isPartial = oldFile == null || newFile == null;
  let deletionLineIndex = 0;
  let additionLineIndex = 0;

  for (const hunkChunk of hunkChunks) {
    const hunkLines = splitLines(hunkChunk);
    const hunkHeader = hunkLines[0];
    if (hunkHeader == null) {
      if (throwOnError) throw Error("parsePatchContent: invalid hunk");
      console.error("parsePatchContent: invalid hunk", hunkChunk);
      continue;
    }

    const parsedHunkSpec = parseHunkSpec(hunkHeader);
    let currentBlock: PatchLineBlock | undefined;
    let lastContentType: "addition" | "context" | "deletion" | undefined;
    let additionLinesInHunk = 0;
    let deletionLinesInHunk = 0;

    if (parsedHunkSpec == null || patchFile == null) {
      if (patchFile != null) {
        if (throwOnError) throw Error("parsePatchContent: Invalid hunk");
        console.error("parsePatchContent: Invalid hunk", hunkChunk);
        continue;
      }
      patchFile = createPatchFile(cacheKey, isPartial, oldFile, newFile);
      readPatchFileHeader(hunkLines, isGitDiff, patchFile, throwOnError);
      continue;
    }

    trimTrailingBlankLines(hunkLines);
    const { additionStart, deletionStart } = parsedHunkSpec;
    deletionLineIndex = isPartial ? deletionLineIndex : deletionStart - 1;
    additionLineIndex = isPartial ? additionLineIndex : additionStart - 1;
    const hunk = createPatchHunk(
      parsedHunkSpec,
      hunkHeader,
      deletionLineIndex,
      additionLineIndex,
    );

    let parsedAdditions = 0;
    let parsedDeletions = 0;
    for (let lineIndex = 1; lineIndex < hunkLines.length; lineIndex += 1) {
      const rawLine = hunkLines[lineIndex];
      if (
        parsedAdditions >= hunk.additionCount &&
        parsedDeletions >= hunk.deletionCount &&
        !rawLine.startsWith("\\")
      ) {
        break;
      }
      const firstChar = rawLine[0];
      if (
        firstChar !== "+" &&
        firstChar !== "-" &&
        firstChar !== " " &&
        firstChar !== "\\"
      ) {
        console.error(
          `parseLineType: Invalid firstChar: "${firstChar}", full line: "${rawLine}"`,
        );
        console.error("processFile: invalid rawLine:", rawLine);
        continue;
      }

      const lineType = parseLineType(firstChar);
      if (lineType === "addition") {
        const result = appendPatchLine("addition", rawLine, {
          additionLineIndex,
          currentBlock,
          deletionLineIndex,
          hunk,
          isPartial,
          patchFile,
        });
        additionLineIndex = result.additionLineIndex;
        currentBlock = result.currentBlock;
        parsedAdditions += 1;
        additionLinesInHunk += 1;
        lastContentType = "addition";
      } else if (lineType === "deletion") {
        const result = appendPatchLine("deletion", rawLine, {
          additionLineIndex,
          currentBlock,
          deletionLineIndex,
          hunk,
          isPartial,
          patchFile,
        });
        deletionLineIndex = result.deletionLineIndex;
        currentBlock = result.currentBlock;
        parsedDeletions += 1;
        deletionLinesInHunk += 1;
        lastContentType = "deletion";
      } else if (lineType === "context") {
        const result = appendPatchLine("context", rawLine, {
          additionLineIndex,
          currentBlock,
          deletionLineIndex,
          hunk,
          isPartial,
          patchFile,
        });
        additionLineIndex = result.additionLineIndex;
        deletionLineIndex = result.deletionLineIndex;
        currentBlock = result.currentBlock;
        parsedAdditions += 1;
        parsedDeletions += 1;
        lastContentType = "context";
      } else if (lineType === "metadata" && currentBlock != null) {
        markNoNewlineAtEndOfFile(hunk, currentBlock, lastContentType);
        trimLastLineForMissingNewline(patchFile, isPartial, lastContentType);
      }
    }

    hunk.additionLines = additionLinesInHunk;
    hunk.deletionLines = deletionLinesInHunk;
    hunk.collapsedBefore = Math.max(
      hunk.additionStart - 1 - previousAdditionEnd,
      0,
    );
    patchFile.hunks.push(hunk);
    previousAdditionEnd = hunk.additionStart + hunk.additionCount - 1;
    updateHunkLineCounts(hunk);
    hunk.splitLineStart = patchFile.splitLineCount + hunk.collapsedBefore;
    hunk.unifiedLineStart = patchFile.unifiedLineCount + hunk.collapsedBefore;
    patchFile.splitLineCount += hunk.collapsedBefore + hunk.splitLineCount;
    patchFile.unifiedLineCount += hunk.collapsedBefore + hunk.unifiedLineCount;
  }

  if (patchFile == null) return;
  finalizePatchFile(patchFile, isGitDiff, oldFile, newFile);
  return patchFile;
}

function createPatchFile(
  cacheKey: string | undefined,
  isPartial: boolean,
  oldFile?: PatchFileSnapshot | null,
  newFile?: PatchFileSnapshot | null,
): ParsedPatchFile {
  const patchFile: ParsedPatchFile = {
    name: "",
    type: "change",
    hunks: [],
    splitLineCount: 0,
    unifiedLineCount: 0,
    isPartial,
    additionLines:
      !isPartial && oldFile != null && newFile != null
        ? splitFileContents(newFile.contents)
        : [],
    deletionLines:
      !isPartial && oldFile != null && newFile != null
        ? splitFileContents(oldFile.contents)
        : [],
    cacheKey: normalizeOptionalUtf8(cacheKey),
  };
  if (patchFile.additionLines.length === 1 && newFile?.contents === "") {
    patchFile.additionLines.length = 0;
  }
  if (patchFile.deletionLines.length === 1 && oldFile?.contents === "") {
    patchFile.deletionLines.length = 0;
  }
  return patchFile;
}

function createPatchHunk(
  parsedHunkSpec: ParsedHunkSpec,
  hunkHeader: string,
  deletionLineIndex: number,
  additionLineIndex: number,
): PatchHunk {
  return {
    collapsedBefore: 0,
    splitLineCount: 0,
    splitLineStart: 0,
    unifiedLineCount: 0,
    unifiedLineStart: 0,
    additionCount: parsedHunkSpec.additionCount,
    additionStart: parsedHunkSpec.additionStart,
    additionLines: 0,
    deletionCount: parsedHunkSpec.deletionCount,
    deletionStart: parsedHunkSpec.deletionStart,
    deletionLines: 0,
    deletionLineIndex,
    additionLineIndex,
    hunkContent: [],
    hunkContext: normalizeOptionalUtf8(parsedHunkSpec.hunkContext),
    hunkSpecs: normalizeUtf8(hunkHeader),
    noEOFCRAdditions: false,
    noEOFCRDeletions: false,
  };
}

type AppendPatchLineContext = {
  additionLineIndex: number;
  currentBlock?: PatchLineBlock;
  deletionLineIndex: number;
  hunk: PatchHunk;
  isPartial: boolean;
  patchFile: ParsedPatchFile;
};

function appendPatchLine(
  lineType: "addition" | "context" | "deletion",
  rawLine: string,
  context: AppendPatchLineContext,
) {
  const line = getPatchLineText(rawLine);
  let { additionLineIndex, currentBlock, deletionLineIndex } = context;
  const blockType = lineType === "context" ? "context" : "change";
  if (currentBlock == null || currentBlock.type !== blockType) {
    currentBlock = createPatchLineBlock(
      blockType,
      deletionLineIndex,
      additionLineIndex,
    );
    context.hunk.hunkContent.push(currentBlock);
  }
  if (lineType === "addition" || lineType === "context") {
    additionLineIndex += 1;
    if (context.isPartial) context.patchFile.additionLines.push(line);
  }
  if (lineType === "deletion" || lineType === "context") {
    deletionLineIndex += 1;
    if (context.isPartial) context.patchFile.deletionLines.push(line);
  }
  if (currentBlock.type === "context") {
    currentBlock.lines += 1;
  } else if (lineType === "addition") {
    currentBlock.additions += 1;
  } else {
    currentBlock.deletions += 1;
  }
  return { additionLineIndex, currentBlock, deletionLineIndex };
}

function readPatchFileHeader(
  headerLines: string[],
  isGitDiff: boolean,
  patchFile: ParsedPatchFile,
  throwOnError: boolean,
) {
  for (const line of headerLines) {
    if (line.startsWith("diff --git")) {
      const match = line.trim().match(gitHeaderPattern);
      const oldName = match?.[1] ?? match?.[2];
      const newName = match?.[3] ?? match?.[4];
      if (oldName == null || newName == null) {
        if (throwOnError)
          throw Error("parsePatchContent: invalid git diff header");
        console.error("parsePatchContent: invalid git diff header", line);
        continue;
      }
      patchFile.name = normalizeUtf8(newName.trim());
      if (oldName !== newName)
        patchFile.prevName = normalizeUtf8(oldName.trim());
      continue;
    }

    const pathMatch =
      line.startsWith("---") || line.startsWith("+++")
        ? line.match(isGitDiff ? gitPathPattern : unifiedPathPattern)
        : null;
    if (pathMatch != null) {
      const [, marker, path] = pathMatch;
      if (marker === "---" && path !== "/dev/null") {
        const normalizedPath = normalizeUtf8(path.trim());
        patchFile.prevName = normalizedPath;
        patchFile.name = normalizedPath;
      } else if (marker === "+++" && path !== "/dev/null") {
        patchFile.name = normalizeUtf8(path.trim());
      }
      continue;
    }
    if (isGitDiff) readGitMetadataLine(line, patchFile);
  }
}

function readGitMetadataLine(line: string, patchFile: ParsedPatchFile) {
  if (line.startsWith("new mode "))
    patchFile.mode = normalizeUtf8(line.slice(8).trim());
  if (line.startsWith("old mode "))
    patchFile.prevMode = normalizeUtf8(line.slice(8).trim());
  if (line.startsWith("new file mode")) {
    patchFile.type = "new";
    patchFile.mode = normalizeUtf8(line.slice(13).trim());
  }
  if (line.startsWith("deleted file mode")) {
    patchFile.type = "deleted";
    patchFile.mode = normalizeUtf8(line.slice(17).trim());
  }
  if (line.startsWith("similarity index")) {
    patchFile.type = line.startsWith("similarity index 100%")
      ? "rename-pure"
      : "rename-changed";
  }
  if (line.startsWith("index ")) {
    const [, previousObjectId, newObjectId, mode] =
      line.trim().match(indexHeaderPattern) ?? [];
    if (previousObjectId != null)
      patchFile.prevObjectId = normalizeUtf8(previousObjectId);
    if (newObjectId != null) patchFile.newObjectId = normalizeUtf8(newObjectId);
    if (mode != null) patchFile.mode = normalizeUtf8(mode);
  }
  if (line.startsWith("rename from "))
    patchFile.prevName = normalizeUtf8(line.slice(12).trim());
  if (line.startsWith("rename to "))
    patchFile.name = normalizeUtf8(line.slice(10).trim());
}

function finalizePatchFile(
  patchFile: ParsedPatchFile,
  isGitDiff: boolean,
  oldFile?: PatchFileSnapshot | null,
  newFile?: PatchFileSnapshot | null,
) {
  if (
    patchFile.hunks.length > 0 &&
    !patchFile.isPartial &&
    patchFile.additionLines.length > 0 &&
    patchFile.deletionLines.length > 0
  ) {
    const lastHunk = patchFile.hunks[patchFile.hunks.length - 1];
    const additionEnd = lastHunk.additionStart + lastHunk.additionCount - 1;
    const trailingLines = Math.max(
      patchFile.additionLines.length - additionEnd,
      0,
    );
    patchFile.splitLineCount += trailingLines;
    patchFile.unifiedLineCount += trailingLines;
  }

  if (!isGitDiff) {
    if (patchFile.prevName != null && patchFile.name !== patchFile.prevName) {
      patchFile.type =
        patchFile.hunks.length > 0 ? "rename-changed" : "rename-pure";
    } else if (
      (oldFile == null || oldFile.contents === "") &&
      newFile != null &&
      newFile.contents !== ""
    ) {
      patchFile.type = "new";
    } else if (
      oldFile != null &&
      oldFile.contents !== "" &&
      (newFile == null || newFile.contents === "")
    ) {
      patchFile.type = "deleted";
    }
  }
  if (patchFile.type !== "rename-pure" && patchFile.type !== "rename-changed") {
    patchFile.prevName = undefined;
  }
}

function parsePatchFiles(
  content: string,
  cacheKey?: string,
  throwOnError = false,
) {
  const parsedPatches: ParsedPatchContent[] = [];
  const chunks = containsMboxPatch(content)
    ? content.split(mboxPatchBoundaryPattern)
    : [content];
  for (const chunk of chunks) {
    try {
      parsedPatches.push(
        parsePatchContent(
          chunk,
          cacheKey == null ? undefined : `${cacheKey}-${parsedPatches.length}`,
          throwOnError,
        ),
      );
    } catch (error) {
      if (throwOnError) throw error;
      console.error(error);
    }
  }
  return parsedPatches;
}

function containsMboxPatch(content: string) {
  return content.startsWith("From ") || content.includes("\nFrom ");
}

function splitFileContents(contents: string) {
  const lines = splitLines(contents);
  for (let index = 0; index < lines.length; index += 1)
    lines[index] = normalizeUtf8(lines[index]);
  return lines;
}

function splitLines(value: string) {
  if (value.length === 0) return [""];
  const lines: string[] = [];
  let start = 0;
  for (;;) {
    const end = value.indexOf("\n", start);
    if (end === -1) break;
    lines.push(value.slice(start, end + 1));
    start = end + 1;
  }
  if (start < value.length) lines.push(value.slice(start));
  return lines;
}

function parseHunkSpec(line: string): ParsedHunkSpec | undefined {
  if (!line.startsWith("@@ -")) return;
  let index = 4;
  const deletionStart = readDecimal(line, index);
  if (deletionStart == null) return;
  let deletionCount = 1;
  index = deletionStart.endIndex;
  if (line[index] === ",") {
    const parsedDeletionCount = readDecimal(line, index + 1);
    if (parsedDeletionCount == null) return;
    deletionCount = parsedDeletionCount.value;
    index = parsedDeletionCount.endIndex;
  }
  if (line[index] !== " " || line[index + 1] !== "+") return;
  index += 2;
  const additionStart = readDecimal(line, index);
  if (additionStart == null) return;
  let additionCount = 1;
  index = additionStart.endIndex;
  if (line[index] === ",") {
    const parsedAdditionCount = readDecimal(line, index + 1);
    if (parsedAdditionCount == null) return;
    additionCount = parsedAdditionCount.value;
    index = parsedAdditionCount.endIndex;
  }
  if (line[index] !== " " || line[index + 1] !== "@" || line[index + 2] !== "@")
    return;
  const contextIndex = index + 3;
  const hunkContext =
    line[contextIndex] === " "
      ? trimLineEnding(line.slice(contextIndex + 1))
      : undefined;
  return {
    additionCount,
    additionStart: additionStart.value,
    deletionCount,
    deletionStart: deletionStart.value,
    hunkContext,
  };
}

function readDecimal(value: string, startIndex: number) {
  let index = startIndex;
  let number = 0;
  for (; index < value.length; index += 1) {
    const digit = value.charCodeAt(index) - 48;
    if (digit < 0 || digit > 9) break;
    number = number * 10 + digit;
  }
  if (index !== startIndex) return { value: number, endIndex: index };
}

function trimLineEnding(value: string) {
  return value.endsWith("\r\n")
    ? value.slice(0, -2)
    : value.endsWith("\n")
      ? value.slice(0, -1)
      : value;
}

function containsGitDiff(content: string) {
  return content.startsWith("diff --git") || content.includes("\ndiff --git");
}

function splitBefore(content: string, marker: string) {
  if (content.length === 0) return [""];
  const prefixedMarker = `\n${marker}`;
  let splitIndex = content.startsWith(marker)
    ? 0
    : findSplitIndex(content, prefixedMarker, 0);
  if (splitIndex === -1) return [content];
  const chunks: string[] = [];
  if (splitIndex > 0) chunks.push(content.slice(0, splitIndex));
  let chunkStart = splitIndex;
  for (;;) {
    splitIndex = findSplitIndex(content, prefixedMarker, chunkStart + 1);
    if (splitIndex === -1) break;
    chunks.push(content.slice(chunkStart, splitIndex));
    chunkStart = splitIndex;
  }
  chunks.push(content.slice(chunkStart));
  return chunks;
}

function findSplitIndex(content: string, marker: string, fromIndex: number) {
  const index = content.indexOf(marker, fromIndex);
  return index === -1 ? -1 : index + 1;
}

function parseLineType(firstChar: string) {
  return firstChar === " "
    ? "context"
    : firstChar === "\\"
      ? "metadata"
      : firstChar === "+"
        ? "addition"
        : "deletion";
}

function getPatchLineText(rawLine: string) {
  const value = rawLine.slice(1);
  return normalizeUtf8(value === "" ? "\n" : value);
}

function createPatchLineBlock(
  type: "change" | "context",
  deletionLineIndex: number,
  additionLineIndex: number,
): PatchLineBlock {
  return type === "change"
    ? {
        type: "change",
        additions: 0,
        deletions: 0,
        additionLineIndex,
        deletionLineIndex,
      }
    : { type: "context", lines: 0, additionLineIndex, deletionLineIndex };
}

function trimTrailingBlankLines(lines: string[]) {
  while (
    lines.length > 0 &&
    (lines[lines.length - 1] === "\n" ||
      lines[lines.length - 1] === "\r" ||
      lines[lines.length - 1] === "\r\n" ||
      lines[lines.length - 1] === "")
  ) {
    lines.pop();
  }
}

function markNoNewlineAtEndOfFile(
  hunk: PatchHunk,
  block: PatchLineBlock,
  lastContentType?: "addition" | "context" | "deletion",
) {
  if (block.type === "context") {
    hunk.noEOFCRAdditions = true;
    hunk.noEOFCRDeletions = true;
  } else if (lastContentType === "deletion") {
    hunk.noEOFCRDeletions = true;
  } else if (lastContentType === "addition") {
    hunk.noEOFCRAdditions = true;
  }
}

function trimLastLineForMissingNewline(
  patchFile: ParsedPatchFile,
  isPartial: boolean,
  lastContentType?: "addition" | "context" | "deletion",
) {
  if (
    isPartial &&
    (lastContentType === "addition" || lastContentType === "context")
  ) {
    const additionIndex = patchFile.additionLines.length - 1;
    if (additionIndex >= 0) {
      patchFile.additionLines[additionIndex] = trimTrailingLineEnding(
        patchFile.additionLines[additionIndex],
      );
    }
  }
  if (
    isPartial &&
    (lastContentType === "deletion" || lastContentType === "context")
  ) {
    const deletionIndex = patchFile.deletionLines.length - 1;
    if (deletionIndex >= 0) {
      patchFile.deletionLines[deletionIndex] = trimTrailingLineEnding(
        patchFile.deletionLines[deletionIndex],
      );
    }
  }
}

function updateHunkLineCounts(hunk: PatchHunk) {
  for (const block of hunk.hunkContent) {
    if (block.type === "context") {
      hunk.splitLineCount += block.lines;
      hunk.unifiedLineCount += block.lines;
    } else {
      hunk.splitLineCount += Math.max(block.additions, block.deletions);
      hunk.unifiedLineCount += block.deletions + block.additions;
    }
  }
}

export { parsePatchFile, parsePatchFiles };
