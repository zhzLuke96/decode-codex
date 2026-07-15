// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Target detection for local-file exports into Google Workspace.

import { getPathBasename } from "../path-basename-runtime";
import type { GoogleWorkspaceResourceKind } from "./types";

function getFileExtension(path: string): string {
  const basename = getPathBasename(path);
  const extensionStart = basename.lastIndexOf(".");
  return extensionStart < 0
    ? ""
    : basename.slice(extensionStart + 1).toLowerCase();
}

export function getGoogleWorkspaceExportTarget(
  path: string,
): GoogleWorkspaceResourceKind | null {
  switch (getFileExtension(path)) {
    case "docx":
      return "document";
    case "xlsx":
      return "spreadsheet";
    case "pptx":
      return "presentation";
    default:
      return null;
  }
}

export function getGoogleWorkspaceMimeType(path: string): string {
  switch (getFileExtension(path)) {
    case "docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case "pptx":
      return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    default:
      return "application/octet-stream";
  }
}

export function getGoogleWorkspaceResourceKindProto(
  kind: GoogleWorkspaceResourceKind,
): string {
  switch (kind) {
    case "document":
      return "CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_DOCUMENT";
    case "spreadsheet":
      return "CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_SPREADSHEET";
    case "presentation":
      return "CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_PRESENTATION";
  }
}
