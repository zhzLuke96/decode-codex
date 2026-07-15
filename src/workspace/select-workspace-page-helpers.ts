// Restored from ref/webview/assets/select-workspace-page-Dpe6Qyul.js
// Shared helpers for the semantic SelectWorkspacePage restore.

import type { ReactNode } from "react";
import { currentAppInitialSharedCompatSlotUpperDLowerT as isPathInsideCodexHome } from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperKLowerO as getConversationTaskKey,
  worktreeNewThreadQueryCompatSlotLowerNLowerI as findGitOriginForRoot,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0229 as workspaceSelectionChangedEvent,
  currentAppInitialSharedMember0804 as workspaceSelectionSubmittedEvent,
  logProductEvent,
  normalizeTaskCompletionState as normalizeWorkspaceRootPath,
  workspaceFunction0161 as getWorkspaceRootDisplayName,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

export type WorkspaceOption = {
  label: ReactNode;
  root: string;
};

export type SelectionMap = Record<string, boolean>;

export type RecentConversation = {
  createdAt?: unknown;
  cwd?: string;
  id: string;
};

export type LocalOnboardingTask = {
  at?: unknown;
  conversation: RecentConversation;
  key: unknown;
  kind: "local";
};

export type PendingWorktreeTask = {
  kind: "pending-worktree";
  pendingWorktree: {
    sourceWorkspaceRoot?: string;
    startConversationParamsInput?: {
      cwd?: string;
    };
  };
};

export type OnboardingTask =
  | LocalOnboardingTask
  | PendingWorktreeTask
  | { kind: "remote" };

export type GitOrigin = {
  originUrl?: string;
  root: string;
};

export function toLocalOnboardingTask(
  conversation: RecentConversation,
): LocalOnboardingTask {
  return {
    kind: "local",
    key: getConversationTaskKey(conversation.id),
    at: conversation.createdAt,
    conversation,
  };
}

export function getRootsFromTasks(
  tasks: OnboardingTask[] | undefined,
): string[] {
  const roots: string[] = [];
  for (const task of tasks ?? []) {
    switch (task.kind) {
      case "local":
        if (task.conversation.cwd) roots.push(task.conversation.cwd);
        break;
      case "pending-worktree": {
        const pendingRoot =
          task.pendingWorktree.startConversationParamsInput?.cwd ??
          task.pendingWorktree.sourceWorkspaceRoot;
        if (pendingRoot) roots.push(pendingRoot);
        break;
      }
      case "remote":
        break;
    }
  }
  return roots;
}

export function getSuggestedWorkspaceRoots({
  codexHome,
  gitOrigins,
  tasks,
}: {
  codexHome?: string;
  gitOrigins?: GitOrigin[];
  tasks: OnboardingTask[];
}): string[] {
  const taskRoots = getRootsFromTasks(tasks);
  if (taskRoots.length === 0) return [];
  const origins = gitOrigins ?? [];
  return uniqueBy(
    taskRoots
      .map((root) => {
        const originMatch = findGitOriginForRoot(root, origins) as
          | GitOrigin
          | null
          | undefined;
        if (
          !originMatch?.root ||
          !isPathInsideCodexHome(originMatch.root, codexHome)
        ) {
          return root;
        }
        return (
          origins.reduce<string | null>((bestRoot, currentOrigin) => {
            if (
              !originMatch.originUrl ||
              currentOrigin.originUrl !== originMatch.originUrl ||
              isPathInsideCodexHome(currentOrigin.root, codexHome)
            ) {
              return bestRoot;
            }
            return bestRoot == null ||
              currentOrigin.root.length > bestRoot.length
              ? currentOrigin.root
              : bestRoot;
          }, null) ?? originMatch.root
        );
      })
      .filter((root): root is string => Boolean(root)),
    normalizeRootKey,
  );
}

export function buildWorkspaceOption(
  root: string,
  labels?: Record<string, string>,
): WorkspaceOption {
  const trimmedLabel = labels?.[root]?.trim();
  return {
    root,
    label: trimmedLabel || getWorkspaceRootDisplayName(root),
  };
}

export function countSelectedRoots(
  selectedByRoot: SelectionMap,
  workspaceRootPaths: string[],
): number {
  let selectedCount = 0;
  for (const root of workspaceRootPaths) {
    if (selectedByRoot[root]) selectedCount += 1;
  }
  return selectedCount;
}

export function uniqueBy<TValue>(
  values: TValue[],
  getKey: (value: TValue) => unknown,
): TValue[] {
  const seenKeys = new Set<unknown>();
  const uniqueValues: TValue[] = [];
  for (const value of values) {
    const key = getKey(value);
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    uniqueValues.push(value);
  }
  return uniqueValues;
}

export function normalizeRootKey(root: string): string {
  return parseWorkspaceRootForComparison(root);
}

export function parseWorkspaceRootForComparison(root: string): string {
  return String(normalizeWorkspaceRootPath(root)).replace(/\/+$/, "");
}

export function compareStrings(left: string, right: string): number {
  return left.localeCompare(right);
}

export function logWorkspaceSelectionChanged(
  analyticsScope: unknown,
  payload: Record<string, unknown>,
): void {
  logProductEvent(analyticsScope, workspaceSelectionChangedEvent, payload);
}

export function logWorkspaceSelectionSubmitted(
  analyticsScope: unknown,
  payload: Record<string, unknown>,
): void {
  logProductEvent(analyticsScope, workspaceSelectionSubmittedEvent, payload);
}
