// Restored from ref/webview/assets/parse-diff-C81j2HIg.js
// parse-diff-C81j2HIg chunk restored from the Codex webview bundle.
import type {
  GitHeaderPaths,
  NormalizedDiff,
  ParsedGitPath,
  ParsedPatchFile,
} from "./types";
export function normalizeQuotedGitDiffPaths(diffText: string): NormalizedDiff {
  const pathsByFileIndex = new Map<number, GitHeaderPaths>();
  let fileIndex = -1;
  return {
    diff: diffText
      .split(/(?<=\n)/)
      .map((line) => {
        if (line.startsWith("diff --git ")) fileIndex += 1;
        if (line.startsWith('diff --git "')) {
          const header = parseQuotedDiffGitHeader(line);
          if (header == null) return line;
          pathsByFileIndex.set(fileIndex, header.paths);
          return header.line;
        }
        if (line.startsWith('--- "')) {
          return normalizeQuotedPatchPathLine(line, "---") ?? line;
        }
        if (line.startsWith('+++ "')) {
          return normalizeQuotedPatchPathLine(line, "+++") ?? line;
        }
        return line;
      })
      .join(""),
    pathsByFileIndex,
  };
}
export function applyQuotedGitHeaderPaths(
  file: ParsedPatchFile,
  paths: GitHeaderPaths | undefined,
): ParsedPatchFile {
  if (paths == null) return file;
  if (file.type === "rename-pure" || file.type === "rename-changed") {
    return {
      ...file,
      name: paths.newPath,
      prevName: paths.oldPath,
    };
  }
  return {
    ...file,
    name: paths.newPath,
  };
}
function parseQuotedDiffGitHeader(line: string) {
  const lineEnding = getLineEnding(line);
  const pathSection = line.slice(0, line.length - lineEnding.length).slice(11);
  const oldPath = parseQuotedGitPath(pathSection, 0);
  if (oldPath == null || pathSection[oldPath.nextIndex] !== " ") return null;
  const newPath = parseQuotedGitPath(pathSection, oldPath.nextIndex + 1);
  if (
    newPath == null ||
    newPath.nextIndex !== pathSection.length ||
    !oldPath.path.startsWith("a/") ||
    !newPath.path.startsWith("b/")
  ) {
    return null;
  }
  return {
    line: `diff --git ${oldPath.pathForUnquotedDiffHeader} ${newPath.pathForUnquotedDiffHeader}${lineEnding}`,
    paths: {
      oldPath: oldPath.path.slice(2),
      newPath: newPath.path.slice(2),
    },
  };
}
function normalizeQuotedPatchPathLine(line: string, prefix: "---" | "+++") {
  const lineEnding = getLineEnding(line);
  const parsedPath = parseQuotedGitPath(
    line.slice(0, line.length - lineEnding.length),
    prefix.length + 1,
  );
  return parsedPath == null
    ? null
    : `${prefix} ${parsedPath.pathForUnquotedDiffHeader}${lineEnding}`;
}
export function parseQuotedGitPath(
  input: string,
  startIndex: number,
): ParsedGitPath | null {
  if (input[startIndex] !== '"') return null;
  let cursor = startIndex + 1;
  let path = "";
  let pathForUnquotedDiffHeader = "";
  while (cursor < input.length) {
    const character = input[cursor];
    if (character == null) return null;
    if (character === '"') {
      return {
        nextIndex: cursor + 1,
        path,
        pathForUnquotedDiffHeader,
      };
    }
    if (character !== "\\") {
      path += character;
      pathForUnquotedDiffHeader += character;
      cursor += 1;
      continue;
    }
    const escaped = parseQuotedGitPathEscape(input, cursor + 1);
    if (escaped == null) return null;
    path += escaped.path;
    pathForUnquotedDiffHeader += escaped.pathForUnquotedDiffHeader;
    cursor = escaped.nextIndex;
  }
  return null;
}
function parseQuotedGitPathEscape(input: string, startIndex: number) {
  const character = input[startIndex];
  if (character == null) return null;
  if (character === "\\" || character === '"') {
    return {
      nextIndex: startIndex + 1,
      path: character,
      pathForUnquotedDiffHeader: character,
    };
  }
  const simpleEscapes: Record<
    string,
    {
      path: string;
      pathForUnquotedDiffHeader: string;
    }
  > = {
    a: {
      path: "\x07",
      pathForUnquotedDiffHeader: "\\a",
    },
    b: {
      path: "\b",
      pathForUnquotedDiffHeader: "\\b",
    },
    f: {
      path: "\f",
      pathForUnquotedDiffHeader: "\\f",
    },
    n: {
      path: "\n",
      pathForUnquotedDiffHeader: "\\n",
    },
    r: {
      path: "\r",
      pathForUnquotedDiffHeader: "\\r",
    },
    t: {
      path: "\t",
      pathForUnquotedDiffHeader: "\\t",
    },
    v: {
      path: "\v",
      pathForUnquotedDiffHeader: "\\v",
    },
  };
  const simpleEscape = simpleEscapes[character];
  if (simpleEscape != null) {
    return {
      nextIndex: startIndex + 1,
      ...simpleEscape,
    };
  }
  if (!isOctalDigit(character)) {
    return {
      nextIndex: startIndex + 1,
      path: character,
      pathForUnquotedDiffHeader: character,
    };
  }
  const octal = input.slice(startIndex, startIndex + 3);
  if (!isThreeDigitOctal(octal)) return null;
  return {
    nextIndex: startIndex + 3,
    path: String.fromCharCode(Number.parseInt(octal, 8)),
    pathForUnquotedDiffHeader: `\\${octal}`,
  };
}
function isThreeDigitOctal(input: string) {
  return (
    input.length === 3 &&
    isOctalDigit(input[0]) &&
    isOctalDigit(input[1]) &&
    isOctalDigit(input[2])
  );
}
function isOctalDigit(character: string | undefined) {
  return character != null && character >= "0" && character <= "7";
}
function getLineEnding(line: string) {
  return line.endsWith("\r\n") ? "\r\n" : line.endsWith("\n") ? "\n" : "";
}
