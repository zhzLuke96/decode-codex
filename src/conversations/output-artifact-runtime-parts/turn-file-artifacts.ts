// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import { isRawAbsolutePath, normalizeRawWorkspacePath } from "./path-helpers";

type ArtifactTurnItem = { changes?: unknown; text?: unknown; type?: unknown };

type ArtifactFileChange = {
  kind?: { move_path?: unknown; type?: unknown };
  path?: unknown;
};

type ArtifactPathState = {
  editedFilePaths: string[];
  editedPaths: Set<string>;
  referencedFilePaths: string[];
  referencedPaths: Set<string>;
};

const CITED_FILE_REFERENCE_RE = /【([^†】\n]+)†L(\d+)(?:-L(\d+))?】/g;

export function collectTurnFileArtifactsFromTurn<TArtifacts = unknown>(
  turn: unknown,
): TArtifacts {
  const artifacts = createArtifactPathState();
  for (const item of getTurnItems(turn)) {
    if (!isRecord(item)) continue;
    const turnItem = item as ArtifactTurnItem;
    if (turnItem.type === "fileChange") {
      collectEditedFileArtifacts(artifacts, turnItem.changes);
      continue;
    }
    if (turnItem.type === "agentMessage" && typeof turnItem.text === "string")
      collectReferencedFileArtifacts(artifacts, turnItem.text);
  }
  return {
    editedFilePaths: artifacts.editedFilePaths,
    referencedFilePaths: artifacts.referencedFilePaths,
  } as TArtifacts;
}

function createArtifactPathState(): ArtifactPathState {
  return {
    editedFilePaths: [],
    editedPaths: new Set(),
    referencedFilePaths: [],
    referencedPaths: new Set(),
  };
}

function getTurnItems(turn: unknown): unknown[] {
  if (!isRecord(turn) || !Array.isArray(turn.items)) return [];
  return turn.items;
}

function collectEditedFileArtifacts(
  artifacts: ArtifactPathState,
  changes: unknown,
): void {
  if (!Array.isArray(changes)) return;
  for (const change of changes) {
    if (!isRecord(change)) continue;
    const fileChange = change as ArtifactFileChange,
      basePath = typeof fileChange.path === "string" ? fileChange.path : "";
    if (!isRecord(fileChange.kind)) {
      addUniqueArtifactPath(
        artifacts.editedPaths,
        artifacts.editedFilePaths,
        basePath,
      );
      continue;
    }
    const targetPath =
      fileChange.kind.type === "update" &&
      typeof fileChange.kind.move_path === "string"
        ? fileChange.kind.move_path
        : basePath;
    addUniqueArtifactPath(
      artifacts.editedPaths,
      artifacts.editedFilePaths,
      targetPath,
    );
  }
}

function collectReferencedFileArtifacts(
  artifacts: ArtifactPathState,
  text: string,
): void {
  for (const match of text.matchAll(CITED_FILE_REFERENCE_RE)) {
    const path = parseCitedFileReferencePath(match[1]?.trim() ?? "");
    if (path != null)
      addUniqueArtifactPath(
        artifacts.referencedPaths,
        artifacts.referencedFilePaths,
        path,
      );
  }
}

function parseCitedFileReferencePath(value: string): string | null {
  const isForcedFileReference = value.startsWith("F:"),
    rawPath = isForcedFileReference ? value.slice(2).trim() : value,
    path = decodeUriSafely(rawPath);
  if (isForcedFileReference) return path.length > 0 ? path : null;
  return isRawAbsolutePath(path) ? path : null;
}

function addUniqueArtifactPath(
  seenPaths: Set<string>,
  paths: string[],
  path: string,
): void {
  const normalizedPath = normalizeRawWorkspacePath(path);
  if (normalizedPath.length === 0 || seenPaths.has(normalizedPath)) return;
  seenPaths.add(normalizedPath);
  paths.push(normalizedPath);
}

function decodeUriSafely(path: string): string {
  try {
    return decodeURI(path);
  } catch {
    return path;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object";
}
