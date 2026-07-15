// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// Internal hooks-settings grouping helpers.

import type { HookConfig, HookConfigEntry, HookIssue } from "./types";

export function uniqueHooksByKey(hooks: readonly HookConfig[]): HookConfig[] {
  const hooksByKey = new Map<string, HookConfig>();
  for (const hook of hooks) {
    if (!hooksByKey.has(hook.key)) hooksByKey.set(hook.key, hook);
  }
  return Array.from(hooksByKey.values());
}

export function uniqueIssuesByPathAndMessage(
  issues: readonly HookIssue[],
): HookIssue[] {
  const issuesByKey = new Map<string, HookIssue>();
  for (const issue of issues) {
    issuesByKey.set(`${issue.path}:${issue.message}`, issue);
  }
  return Array.from(issuesByKey.values());
}

export function hasOnlyIssues(entry: HookConfigEntry): boolean {
  return (
    entry.hooks.length === 0 &&
    (entry.warnings.length > 0 || entry.errors.length > 0)
  );
}

export function isPresent<T>(value: T | null | undefined): value is T {
  return value != null;
}
