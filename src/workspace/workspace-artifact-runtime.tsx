// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Workspace artifact tab descriptors, icons, prefetching, context menus, and
// app-shell layout bridge helpers.
import type { ComponentType, SVGProps } from "react";

import {
  buildFileTabContextMenuItems,
  findTabPanelForTab,
  trackRecentlyOpenedFile,
  type AppStore,
} from "./workspace-file-tab-runtime";
import { getArtifactImportPresentation } from "../appgen/publication-terms/artifact-presentation";
import { getFileIcon } from "../utils/get-file-icon";
import { getPathBasename } from "../runtime/path-basename-runtime";
import {
  mainContentLayoutSignal,
  rightPanelMaximizedSignal,
} from "../app-shell/app-shell-state";

export type ArtifactType =
  | "document"
  | "notebook"
  | "pdf"
  | "slides"
  | "spreadsheet";

export interface ArtifactDescriptor {
  artifactType: ArtifactType;
  importKind: string;
}

type StoreLike = AppStore & {
  set?: (atom: unknown, value: unknown) => void;
};

export const rightPanelExpandedAtom = rightPanelMaximizedSignal;

export function describeWorkspaceFile(path: string): ArtifactDescriptor | null {
  return resolveArtifactDescriptor(path);
}

export function resolveArtifactDescriptor(
  path: string,
): ArtifactDescriptor | null {
  const presentation = getArtifactImportPresentation(path);
  if (presentation == null) return null;
  if (!isOpenableArtifactType(presentation.artifactType)) return null;
  return {
    artifactType: presentation.artifactType,
    importKind: presentation.importKind,
  };
}

export function getArtifactTitle(path: string): string {
  return getPathBasename(path);
}

export function getArtifactIconComponent(
  path: string,
): ComponentType<SVGProps<SVGSVGElement>> {
  return getFileIcon(path);
}

export function isOpenableArtifactType(
  artifactType: unknown,
): artifactType is ArtifactType {
  return (
    artifactType === "document" ||
    artifactType === "notebook" ||
    artifactType === "pdf" ||
    artifactType === "slides" ||
    artifactType === "spreadsheet"
  );
}

export function findTabPanelId(
  store: AppStore,
  tabId: string,
): "bottom" | "right" | null {
  return findTabPanelForTab(store, tabId);
}

export function prefetchArtifactFileQueries(
  store: AppStore,
  request: { cwd?: string | null; hostId?: string | null; path: string },
) {
  return trackRecentlyOpenedFile(store, request);
}

export function buildArtifactContextMenuItems(
  store: AppStore,
  request: { cwd?: string | null; hostId?: string | null; path: string },
) {
  return buildFileTabContextMenuItems(store, request);
}

export function setMainSidebarLayout(store: StoreLike, layout: string): void {
  store.set?.(mainContentLayoutSignal, layout);
}
