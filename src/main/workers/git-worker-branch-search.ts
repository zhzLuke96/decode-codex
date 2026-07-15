// Restored from ref/.vite/build/worker.js
// Read-only Git branch search and existence helpers.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function searchBranches({
  host,
  limit,
  query,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  limit: number;
  query: string;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const terms = normalizeBranchSearchText(query)
    .split(" ")
    .filter((term) => term.length > 0);
  if (terms.length === 0) return [];

  const localBranches = await searchBranchesForRefPattern({
    host,
    limit,
    refPattern: "refs/heads",
    root,
    signal,
    terms,
  });
  if (localBranches.length >= limit || signal.aborted) return localBranches;

  const remoteBranches = await searchBranchesForRefPattern({
    host,
    limit: limit - localBranches.length,
    refPattern: "refs/remotes",
    root,
    signal,
    terms,
  });
  const localBranchNames = new Set(localBranches);
  return [
    ...localBranches,
    ...remoteBranches.filter((branch) => !localBranchNames.has(branch)),
  ];
}

export async function readRecentBranches({
  host,
  limit,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  limit: number;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const result = await runGitCommand({
    args: [
      "for-each-ref",
      `--count=${limit}`,
      "--sort=-committerdate",
      "refs/heads",
      "--format=%(refname:short)",
    ],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout
    ? result.stdout
        .split("\n")
        .map((branch) => branch.trim())
        .filter((branch) => branch.length > 0)
    : [];
}

export async function branchExists({
  branch,
  host,
  root,
  signal,
}: {
  branch: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<boolean> {
  const result = await runGitCommand({
    args: ["show-ref", "--verify", "--quiet", gitBranchRef(branch)],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.code === 0;
}

export function clampBranchSearchLimit(value: unknown): number {
  const limit =
    typeof value === "number" && Number.isFinite(value) ? value : 20;
  return Math.max(1, Math.min(Math.trunc(limit), 20));
}

export function clampRecentBranchLimit(value: unknown): number {
  const limit =
    typeof value === "number" && Number.isFinite(value) ? value : 10;
  return Math.max(1, Math.min(Math.trunc(limit), 100));
}

async function searchBranchesForRefPattern({
  host,
  limit,
  refPattern,
  root,
  signal,
  terms,
}: {
  host: WorkerExecutionHostClient;
  limit: number;
  refPattern: "refs/heads" | "refs/remotes";
  root: string;
  signal: AbortSignal;
  terms: string[];
}): Promise<string[]> {
  const result = await runGitCommand({
    args: [
      "for-each-ref",
      "--sort=-committerdate",
      refPattern,
      "--format=%(refname)",
    ],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];

  const branches: string[] = [];
  const seen = new Set<string>();
  for (const line of result.stdout.split("\n")) {
    if (branches.length >= limit) break;
    const branch = branchNameFromFullRef(line.trim());
    if (branch == null || seen.has(branch)) continue;
    const normalizedBranch = normalizeBranchSearchText(branch);
    if (!terms.every((term) => normalizedBranch.includes(term))) continue;
    seen.add(branch);
    branches.push(branch);
  }
  return branches;
}

function branchNameFromFullRef(ref: string): string | null {
  if (ref.startsWith("refs/heads/")) return ref.slice("refs/heads/".length);
  if (!ref.startsWith("refs/remotes/")) return null;
  const remoteBranch = ref.slice("refs/remotes/".length);
  const slashIndex = remoteBranch.indexOf("/");
  if (slashIndex < 0 || slashIndex === remoteBranch.length - 1) return null;
  const branch = remoteBranch.slice(slashIndex + 1);
  return branch === "HEAD" ? null : branch;
}

function gitBranchRef(branch: string): string {
  return branch.startsWith("refs/") ? branch : `refs/heads/${branch}`;
}

function normalizeBranchSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[-_/.\s]+/g, " ")
    .trim();
}
