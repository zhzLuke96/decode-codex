// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import {
  filterStringArray,
  filterStringRecord,
} from "../runtime/desktop-runtime-utils";
import { KeyValueStore, WorkspaceRootState } from "./desktop-runtime-types";

export function getRemoteWorkspaceRootsForHost(
  store: KeyValueStore,
  hostId: string,
): {
  roots: string[];
  labels: Record<string, string>;
} {
  const projects = Array.isArray(store.get("REMOTE_PROJECTS"))
    ? (store.get("REMOTE_PROJECTS") as Array<Record<string, unknown>>)
    : [];
  const roots: string[] = [];
  const labels: Record<string, string> = {};
  const seen = new Set<string>();
  for (const project of projects) {
    if (project.hostId !== hostId || typeof project.remotePath !== "string")
      continue;
    const remotePath = project.remotePath.trim();
    if (!remotePath || seen.has(remotePath)) continue;
    roots.push(remotePath);
    seen.add(remotePath);
    if (typeof project.label === "string" && project.label.trim()) {
      labels[remotePath] = project.label.trim();
    }
  }
  return {
    roots,
    labels,
  };
}

function readWorkspaceRootState(store: KeyValueStore): WorkspaceRootState {
  const activeRoots = filterStringArray(store.get("ACTIVE_WORKSPACE_ROOTS"));
  const roots = filterStringArray(store.get("WORKSPACE_ROOT_OPTIONS"));
  const labels = filterStringRecord(store.get("WORKSPACE_ROOT_LABELS"));
  return {
    activeRoots,
    roots,
    labels,
  };
}

export function getActiveWorkspaceRoots(store: KeyValueStore): string[] {
  return readWorkspaceRootState(store).activeRoots;
}

export function getWorkspaceRootOptions(store: KeyValueStore): string[] {
  return readWorkspaceRootState(store).roots;
}

export function getWorkspaceRootLabels(
  store: KeyValueStore,
): Record<string, string> {
  return readWorkspaceRootState(store).labels;
}

export function setActiveWorkspaceRoots(
  store: KeyValueStore,
  roots: string[],
): void {
  store.set("ACTIVE_WORKSPACE_ROOTS", roots);
}

export function setWorkspaceRootOptions(
  store: KeyValueStore,
  roots: string[],
): void {
  store.set("WORKSPACE_ROOT_OPTIONS", roots);
}

export function pushProjectOrder(
  store: KeyValueStore,
  projectPath: string,
): void {
  const existing = filterStringArray(store.get("PROJECT_ORDER"));
  store.set("PROJECT_ORDER", [
    projectPath,
    ...existing.filter((item) => item !== projectPath),
  ]);
}

export function updateWorkspaceRootOptions(
  store: KeyValueStore,
  update: (roots: unknown) => string[],
): string[] {
  const roots = update(store.get("WORKSPACE_ROOT_OPTIONS") ?? null);
  store.set("WORKSPACE_ROOT_OPTIONS", roots);
  return roots;
}

export function updateWorkspaceRootLabels(
  store: KeyValueStore,
  update: (labels: unknown) => Record<string, string>,
): Record<string, string> {
  const labels = update(store.get("WORKSPACE_ROOT_LABELS") ?? null);
  store.set("WORKSPACE_ROOT_LABELS", labels);
  return labels;
}

export function ensureInitialWorkspaceRootSelection(
  store: KeyValueStore,
  fallbackProjects?: Array<{
    path: string;
    name: string;
  }>,
): void {
  if (getActiveWorkspaceRoots(store).length > 0) return;
  const roots = getWorkspaceRootOptions(store);
  if (roots.length > 0) {
    setActiveWorkspaceRoots(store, [roots[0]]);
    return;
  }
  const fallbackRoots = Array.from(
    new Set(
      (fallbackProjects ?? [])
        .map((project) => project.path.trim())
        .filter(Boolean),
    ),
  );
  if (fallbackRoots.length === 0) return;
  setWorkspaceRootOptions(store, fallbackRoots);
  setActiveWorkspaceRoots(store, [fallbackRoots[0]]);
  updateWorkspaceRootLabels(store, (current) => ({
    ...filterStringRecord(current),
    ...Object.fromEntries(
      (fallbackProjects ?? [])
        .map((project) => [project.path, project.name.trim()] as const)
        .filter(([, name]) => Boolean(name)),
    ),
  }));
}
