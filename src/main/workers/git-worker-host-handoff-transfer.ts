// Restored from ref/.vite/build/worker.js
// Low-level Git bundle and file-transfer helpers for cross-host thread handoff.

import { randomUUID } from "node:crypto";
import { readBaseBranch } from "./git-worker-branch-base";
import { runGitCommand } from "./git-worker-commands";
import {
  readSafeAttributeFilterOverrides,
  readTreeSha,
} from "./git-worker-create-worktree-git";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function createHostHandoffSnapshotCommit({
  headSha,
  host,
  root,
  signal,
}: {
  headSha: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const [headTreeSha, workingTreeSha] = await Promise.all([
    readTreeSha({ host, ref: headSha, root, signal }),
    writeWorkingTreeSnapshot({
      host,
      root,
      signal,
    }),
  ]);
  if (headTreeSha === workingTreeSha) return headSha;
  const result = await runGitCommand({
    args: [
      "commit-tree",
      workingTreeSha,
      "-p",
      headSha,
      "-m",
      "Codex host handoff snapshot",
      "-m",
      "Co-authored-by: Codex",
    ],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || result.stdout.trim().length === 0) {
    throw Error(result.stderr || result.stdout || "Failed to create snapshot");
  }
  return result.stdout.trim();
}

export async function findSharedBaseForHandoff({
  destinationGitRoot,
  destinationHost,
  headSha,
  signal,
  sourceGitRoot,
  sourceHost,
}: {
  destinationGitRoot: string;
  destinationHost: WorkerExecutionHostClient;
  headSha: string;
  signal: AbortSignal;
  sourceGitRoot: string;
  sourceHost: WorkerExecutionHostClient;
}): Promise<string | null> {
  if (
    await destinationHasCommit({
      commitSha: headSha,
      cwd: destinationGitRoot,
      host: destinationHost,
      signal,
    })
  ) {
    return headSha;
  }

  const sourceBaseBranch = await readBaseBranch(
    sourceHost,
    sourceGitRoot,
    signal,
  );
  if (sourceBaseBranch == null) return null;
  const sourceBaseRef = `${sourceBaseBranch.remote}/${sourceBaseBranch.branch}`;
  const mergeBaseResult = await runGitCommand({
    args: ["merge-base", "HEAD", sourceBaseRef],
    cwd: sourceGitRoot,
    host: sourceHost,
    signal,
  });
  const mergeBaseSha = mergeBaseResult.success
    ? mergeBaseResult.stdout.trim()
    : "";
  if (!isGitSha(mergeBaseSha)) return null;

  if (
    await destinationHasCommit({
      commitSha: mergeBaseSha,
      cwd: destinationGitRoot,
      host: destinationHost,
      signal,
    })
  ) {
    return mergeBaseSha;
  }

  const destinationBaseBranch = await readBaseBranch(
    destinationHost,
    destinationGitRoot,
    signal,
  );
  const fetchTargets =
    destinationBaseBranch == null
      ? (await readRemotes(destinationGitRoot, destinationHost, signal)).map(
          (remote) => ({ remote, branch: sourceBaseBranch.branch }),
        )
      : [destinationBaseBranch];
  for (const target of fetchTargets) {
    const fetchResult = await runGitCommand({
      args: ["fetch", target.remote, target.branch],
      cwd: destinationGitRoot,
      host: destinationHost,
      signal,
    });
    if (!fetchResult.success) continue;
    if (
      await destinationHasCommit({
        commitSha: mergeBaseSha,
        cwd: destinationGitRoot,
        host: destinationHost,
        signal,
      })
    ) {
      return mergeBaseSha;
    }
  }
  return null;
}

export async function destinationHasCommit({
  commitSha,
  cwd,
  host,
  signal,
}: {
  commitSha: string;
  cwd: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
}): Promise<boolean> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["cat-file", "-e", `${commitSha}^{commit}`],
    cwd,
    host,
    signal,
  });
  return result.success && result.code === 0;
}

export async function copyBetweenHosts({
  destinationHost,
  destinationPath,
  signal,
  sourceHost,
  sourcePath,
}: {
  destinationHost: WorkerExecutionHostClient;
  destinationPath: string;
  signal: AbortSignal;
  sourceHost: WorkerExecutionHostClient;
  sourcePath: string;
}): Promise<void> {
  if (sourceHost.id === destinationHost.id && sourcePath === destinationPath) {
    return;
  }
  await destinationHost.writeFile(
    destinationPath,
    await sourceHost.readFile(sourcePath),
    {
      signal,
    },
  );
}

export async function hostHandoffDir(
  host: WorkerExecutionHostClient,
  transferId: string,
): Promise<string> {
  const pathApi = await host.platformPath();
  return pathApi.join(String(await host.codexHome()), "handoffs", transferId);
}

async function writeWorkingTreeSnapshot({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const pathApi = await host.platformPath();
  const tempDir = pathApi.join(
    String(await host.codexHome()),
    "tmp",
    "host-handoff-index",
    randomUUID(),
  );
  const indexPath = pathApi.join(tempDir, "index");
  const env = { GIT_INDEX_FILE: indexPath };
  await host.createDirectory(tempDir, { recursive: true });
  try {
    const configOverrides = await readSafeAttributeFilterOverrides({
      host,
      root,
      signal,
    });
    const readTree = await runGitCommand({
      args: ["read-tree", "HEAD"],
      cwd: root,
      env,
      host,
      signal,
    });
    if (!readTree.success) {
      throw Error(readTree.stderr || readTree.stdout || "Failed to read tree");
    }
    const addResult = await runGitCommand({
      args: ["add", "-A"],
      configOverrides,
      cwd: root,
      env,
      host,
      signal,
    });
    if (!addResult.success) {
      throw Error(
        addResult.stderr ||
          addResult.stdout ||
          "Failed to stage working tree snapshot",
      );
    }
    const writeTree = await runGitCommand({
      args: ["write-tree"],
      cwd: root,
      env,
      host,
      signal,
    });
    const treeSha = writeTree.stdout.trim();
    if (!writeTree.success || !isGitSha(treeSha)) {
      throw Error(
        writeTree.stderr ||
          writeTree.stdout ||
          "Failed to write temporary index tree snapshot",
      );
    }
    return treeSha;
  } finally {
    await host
      .remove(tempDir, { recursive: true, force: true })
      .catch(() => {});
  }
}

async function readRemotes(
  cwd: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string[]> {
  const result = await runGitCommand({
    args: ["remote"],
    cwd,
    host,
    signal,
  });
  if (!result.success || result.stdout.length === 0) return [];
  const remotes = result.stdout
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  return remotes.includes("origin") && remotes.length > 1
    ? ["origin", ...remotes.filter((remote) => remote !== "origin")]
    : remotes;
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}
