// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Computes and renders the per-line "file change" gutter (added / modified /
// deleted markers) drawn alongside a workspace file preview, from a unified-diff
// metadata structure.
import { parseDiffColumnLineNumber } from "./diff-column-line-number";

export type FileChangeKind = "addition" | "modification" | "deletion";
export type FileChangePlacement = "line" | "before" | "after";

export interface FileChangeMarker {
  kind: FileChangeKind;
  lineNumber: number;
  placement: FileChangePlacement;
}

interface DiffHunkContentRun {
  type: "context" | "change" | string;
  lines: number;
  additions: number;
  deletions: number;
}

interface DiffHunk {
  additionStart: number;
  additionCount: number;
  hunkContent: DiffHunkContentRun[];
}

interface FileDiffMetadata {
  metadata: { hunks: DiffHunk[] };
}

export function computeFileChangeMarkers(
  file: FileDiffMetadata,
): FileChangeMarker[] {
  return file.metadata.hunks.flatMap((hunk) => {
    const markers: FileChangeMarker[] = [];
    let lineNumber = hunk.additionStart;
    for (const run of hunk.hunkContent) {
      if (run.type === "context") {
        lineNumber += run.lines;
        continue;
      }
      if (run.additions > 0) {
        const kind: FileChangeKind =
          run.deletions > 0 ? "modification" : "addition";
        for (let offset = 0; offset < run.additions; offset += 1) {
          markers.push({
            kind,
            lineNumber: lineNumber + offset,
            placement: "line",
          });
        }
      } else if (run.deletions > 0) {
        markers.push(makeDeletionMarker(hunk, lineNumber));
      }
      lineNumber += run.additions;
    }
    return markers;
  });
}

export function buildFileChangeMarkerMap(
  file: FileDiffMetadata | null,
): Map<number, FileChangeMarker[]> | null {
  if (file == null) return null;
  const byLine = new Map<number, FileChangeMarker[]>();
  for (const marker of computeFileChangeMarkers(file)) {
    const existing = byLine.get(marker.lineNumber);
    if (existing == null) {
      byLine.set(marker.lineNumber, [marker]);
      continue;
    }
    existing.push(marker);
  }
  return byLine;
}

export function renderFileChangeGutter(
  host: Element,
  markerMap: Map<number, FileChangeMarker[]> | null,
): void {
  const fileElement = (host.shadowRoot ?? host).querySelector("[data-file]");
  if (fileElement == null) return;
  const columns = fileElement.querySelectorAll("[data-column-number]");
  for (const column of columns) {
    const lineNumber = parseDiffColumnLineNumber(column);
    const markers = lineNumber == null ? undefined : markerMap?.get(lineNumber);
    if (markers == null || markers.length === 0) {
      removeFileChangeGutter(column as HTMLElement);
      continue;
    }
    ensureFileChangeGutter(column as HTMLElement).replaceChildren(
      ...markers.map((marker) => {
        const markerElement = document.createElement("span");
        markerElement.dataset.fileChangeGutterMarker = "";
        markerElement.dataset.fileChangeKind = marker.kind;
        markerElement.dataset.fileChangePlacement = marker.placement;
        if (marker.placement === "line") {
          const above = markerMap?.get(marker.lineNumber - 1);
          const below = markerMap?.get(marker.lineNumber + 1);
          const continuesAbove = above?.some(
            (other) => other.placement === "line" && other.kind === marker.kind,
          );
          const continuesBelow = below?.some(
            (other) => other.placement === "line" && other.kind === marker.kind,
          );
          if (continuesAbove !== true)
            markerElement.dataset.fileChangeRunStart = "";
          if (continuesBelow !== true)
            markerElement.dataset.fileChangeRunEnd = "";
        }
        markerElement.ariaHidden = "true";
        return markerElement;
      }),
    );
  }
  fileElement.toggleAttribute(
    "data-file-change-gutter-visible",
    markerMap != null && markerMap.size > 0,
  );
}

function makeDeletionMarker(
  hunk: DiffHunk,
  lineNumber: number,
): FileChangeMarker {
  return lineNumber <= hunk.additionStart + hunk.additionCount - 1 ||
    lineNumber <= 1
    ? {
        kind: "deletion",
        lineNumber: Math.max(lineNumber, 1),
        placement: "before",
      }
    : {
        kind: "deletion",
        lineNumber: Math.max(lineNumber - 1, 1),
        placement: "after",
      };
}

function ensureFileChangeGutter(column: HTMLElement): HTMLElement {
  const existing = column.querySelector<HTMLElement>(
    "[data-file-change-gutter]",
  );
  if (existing != null) return existing;
  const gutter = document.createElement("span");
  gutter.dataset.fileChangeGutter = "";
  column.prepend(gutter);
  return gutter;
}

function removeFileChangeGutter(column: HTMLElement): void {
  column.querySelector("[data-file-change-gutter]")?.remove();
}

export const FILE_CHANGE_GUTTER_CSS =
  '[data-file-change-gutter] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 5px;\n}\n\n[data-file][data-file-change-gutter-visible] [data-column-number] {\n  position: relative;\n}\n\n[data-file-change-gutter-marker] {\n  --codex-file-change-gutter-width: 4px;\n  position: absolute;\n  left: 0;\n  width: var(--codex-file-change-gutter-width);\n}\n\n[data-file-change-placement="line"][data-file-change-run-start] {\n  border-start-start-radius: 999px;\n  border-start-end-radius: 999px;\n}\n\n[data-file-change-placement="line"][data-file-change-run-end] {\n  border-end-start-radius: 999px;\n  border-end-end-radius: 999px;\n}\n\n[data-file-change-kind="addition"],\n[data-file-change-kind="modification"] {\n  top: 0;\n  bottom: 0;\n}\n\n[data-file-change-kind="addition"] {\n  background: var(--diffs-addition-color-override);\n}\n\n[data-file-change-kind="modification"] {\n  background: var(--color-token-git-decoration-modified-resource-foreground);\n}\n\n[data-file-change-kind="deletion"] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 6px;\n  border-color: transparent transparent transparent\n    var(--diffs-deletion-color-override);\n  border-radius: 0;\n}\n\n[data-file-change-kind="deletion"][data-file-change-placement="before"] {\n  top: -5px;\n}\n\n[data-file-change-kind="deletion"][data-file-change-placement="after"] {\n  bottom: -5px;\n}\n';
