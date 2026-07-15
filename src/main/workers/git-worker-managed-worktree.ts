// Restored from ref/.vite/build/worker.js
// Managed worktree availability and snapshot-ref lookup helpers.

import { createHash } from "node:crypto";
import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type WorktreeSnapshotRef =
  | {
      snapshotRef: string;
      worktreeId: string;
      exists: false;
      commitSha: null;
    }
  | {
      snapshotRef: string;
      worktreeId: string;
      repoRoot: string;
      commonDir: string;
      exists: true;
      commitSha: string;
    };

type ManagedWorktreeState =
  | { kind: "available" }
  | { kind: "gone" }
  | {
      kind: "restorable";
      snapshot: Extract<WorktreeSnapshotRef, { exists: true }>;
    }
  | {
      kind: "unavailable";
      reason: "inspection-failed" | "no-candidate-roots";
    };

const snapshotRefPrefix = "refs/codex/snapshots";

export async function readWorktreeSnapshotRef({
  candidateRoots,
  host,
  signal,
  worktreePath,
}: {
  candidateRoots: string[];
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktreePath: string;
}): Promise<WorktreeSnapshotRef> {
  const worktreeId = sha1Hex(worktreePath);
  const snapshotRef = `${snapshotRefPrefix}/${worktreeId}`;
  const existingCandidateRoots = (
    await Promise.all(
      candidateRoots.map(async (candidateRoot) => {
        try {
          return isDirectoryMetadata(await host.stat(candidateRoot))
            ? candidateRoot
            : null;
        } catch {
          return null;
        }
      }),
    )
  ).filter((candidateRoot): candidateRoot is string => candidateRoot != null);

  if (existingCandidateRoots.length === 0) {
    throw Error("No candidate workspace roots exist on disk");
  }

  const candidateRepositories = (
    await Promise.all(
      existingCandidateRoots.map((candidateRoot) =>
        readStableMetadata({ cwd: candidateRoot, host, signal }).catch(
          () => null,
        ),
      ),
    )
  ).filter((metadata): metadata is { commonDir: string; root: string } => {
    return metadata != null;
  });

  if (candidateRepositories.length === 0) {
    throw Error("No candidate workspace roots are valid git repositories");
  }

  for (const metadata of candidateRepositories) {
    const commitSha = await readRefSha({
      host,
      ref: snapshotRef,
      root: metadata.root,
      signal,
    });
    if (commitSha != null) {
      return {
        snapshotRef,
        worktreeId,
        repoRoot: metadata.root,
        commonDir: metadata.commonDir,
        exists: true,
        commitSha,
      };
    }
  }

  return { snapshotRef, worktreeId, exists: false, commitSha: null };
}

export async function readManagedWorktreeState({
  candidateRoots,
  cwd,
  host,
  signal,
  worktreePath,
}: {
  candidateRoots: string[];
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktreePath: string;
}): Promise<ManagedWorktreeState> {
  const cwdState = await readDirectoryAvailability(host, cwd);
  if (cwdState === "available") return { kind: "available" };
  if (cwdState === "unavailable") {
    return { kind: "unavailable", reason: "inspection-failed" };
  }

  if (cwd !== worktreePath) {
    const worktreePathState = await readDirectoryAvailability(
      host,
      worktreePath,
    );
    if (worktreePathState === "available") return { kind: "gone" };
    if (worktreePathState === "unavailable") {
      return { kind: "unavailable", reason: "inspection-failed" };
    }
  }

  if (candidateRoots.length === 0) {
    return { kind: "unavailable", reason: "no-candidate-roots" };
  }

  try {
    const snapshot = await readWorktreeSnapshotRef({
      candidateRoots,
      host,
      signal,
      worktreePath,
    });
    return snapshot.exists
      ? { kind: "restorable", snapshot }
      : { kind: "gone" };
  } catch {
    return { kind: "unavailable", reason: "inspection-failed" };
  }
}

async function readDirectoryAvailability(
  host: WorkerExecutionHostClient,
  path: string,
): Promise<"available" | "missing" | "unavailable"> {
  try {
    return isDirectoryMetadata(await host.stat(path, { bypassCache: true }))
      ? "available"
      : "unavailable";
  } catch (error) {
    return isMissingPathError(error) ? "missing" : "unavailable";
  }
}

async function readRefSha({
  host,
  ref,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  ref: string;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", ref],
    cwd: root,
    host,
    signal,
  });
  const commitSha = result.success ? result.stdout.trim() : "";
  if (!commitSha) return null;
  if (!isGitSha(commitSha)) throw Error(`Unexpected ${ref} SHA: ${commitSha}`);
  return commitSha;
}

function sha1Hex(value: string): string {
  return createHash("sha1").update(value).digest("hex");
}

function isDirectoryMetadata(metadata: Record<string, unknown>): boolean {
  const isDirectory = metadata.isDirectory;
  if (typeof isDirectory === "function")
    return isDirectory.call(metadata) === true;
  return isDirectory === true;
}

function isMissingPathError(error: unknown): boolean {
  if (!isRecord(error)) {
    return error instanceof Error && isMissingPathText(error.message);
  }
  const code = error.code;
  return (
    code === "ENOENT" ||
    code === "ENOTDIR" ||
    (error instanceof Error && isMissingPathText(error.message))
  );
}

function isMissingPathText(message: string): boolean {
  return (
    message.includes("ENOENT") ||
    message.includes("ENOTDIR") ||
    message.includes("No such file") ||
    message.includes("not a directory")
  );
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
