// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File-reference link, hover-card shell, and path helpers used by conversation UI.

import * as React from "react";
import { getFileIcon } from "../utils/get-file-icon";
import { normalizePath } from "../runtime/path-helpers-runtime";
import { classNames } from "../utils/class-names";

export interface FileReference {
  column?: number | null;
  endLine?: number | null;
  line?: number | null;
  path: string;
}

export interface FileReferenceLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  cwd?: string | null;
  hostId?: string | null;
  label?: React.ReactNode;
  openInSidePanel?: boolean;
  reference: FileReference;
  tooltipText?: string | null;
}

export interface FileReferenceHoverCardProps {
  children?: React.ReactNode;
  cwd?: string | null;
  endLine?: number | null;
  hostId?: string | null;
  line?: number | null;
  path: string;
}

export function buildFileReference(path: string): FileReference {
  const match = path.match(/^(.*?):(\d+)(?:-(\d+))?$/);
  if (!match) return { path };
  return {
    endLine: match[3] == null ? null : Number(match[3]),
    line: Number(match[2]),
    path: match[1],
  };
}

export function FileReferenceLink({
  children,
  className,
  cwd: _cwd,
  hostId: _hostId,
  label,
  onClick,
  openInSidePanel: _openInSidePanel,
  reference,
  tooltipText,
  ...anchorProps
}: FileReferenceLinkProps) {
  return (
    <a
      {...anchorProps}
      className={classNames(
        "cursor-interaction text-token-text-link-foreground hover:underline",
        className,
      )}
      href="#"
      title={tooltipText ?? reference.path}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
      }}
    >
      {children ?? label ?? formatFileReferenceLabel(reference)}
    </a>
  );
}

export function FileReferenceHoverCard({
  children,
  endLine,
  line,
  path,
}: FileReferenceHoverCardProps) {
  const lineLabel =
    line == null
      ? ""
      : endLine != null && endLine !== line
        ? `:${line}-${endLine}`
        : `:${line}`;
  return <span title={`${path}${lineLabel}`}>{children}</span>;
}

export function getFileIconComponent(path?: string | null) {
  return getFileIcon(path);
}

export function relativizePath(path: string, cwd?: string | null): string {
  if (cwd == null || cwd.length === 0) return normalizePath(path);
  const normalizedPath = normalizePath(path);
  const normalizedCwd = normalizePath(cwd).replace(/\/+$/, "");
  if (normalizedPath === normalizedCwd) return ".";
  return normalizedPath.startsWith(`${normalizedCwd}/`)
    ? normalizedPath.slice(normalizedCwd.length + 1)
    : normalizedPath;
}

export function isAbsolutePath(path: string): boolean {
  return path.startsWith("/") || /^[A-Za-z]:\//.test(normalizePath(path));
}

export function formatWorkspacePathLabel({
  includeWorkspaceRootLabel = false,
  relativePath,
  root,
}: {
  includeWorkspaceRootLabel?: boolean;
  relativePath: string;
  root?: string | null;
}): string {
  if (!includeWorkspaceRootLabel || root == null) return relativePath;
  const workspaceName = root.split(/[\\/]/).filter(Boolean).at(-1);
  return workspaceName == null || workspaceName.length === 0
    ? relativePath
    : `${workspaceName}/${relativePath}`;
}

export function initFileReferenceLinkChunk(): void {}

function formatFileReferenceLabel(reference: FileReference): string {
  const lineLabel = reference.line == null ? "" : `:${reference.line}`;
  return `${reference.path}${lineLabel}`;
}
