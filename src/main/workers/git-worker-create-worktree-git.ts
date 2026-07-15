// Restored from ref/.vite/build/worker.js
// Git helpers used by create-worktree restoration.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function storeConfigValueForScope({
  cwd,
  host,
  key,
  scope,
  signal,
  value,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  key: string;
  scope: "local" | "worktree";
  signal: AbortSignal;
  value: string;
}): Promise<boolean> {
  const args = [
    "config",
    scope === "local" ? "--local" : "--worktree",
    key,
    value,
  ];
  const result = await runGitCommand({ args, cwd, host, signal });
  if (result.success || scope !== "worktree") return result.success;
  if (!result.stderr.toLowerCase().includes("worktreeconfig")) return false;
  const enableResult = await runGitCommand({
    args: ["config", "extensions.worktreeConfig", "true"],
    cwd,
    host,
    signal,
  });
  if (!enableResult.success) return false;
  return (await runGitCommand({ args, cwd, host, signal })).success;
}

export async function readConfigValueForScope({
  cwd,
  host,
  key,
  scope,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  key: string;
  scope: "local" | "worktree";
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: [
      "config",
      scope === "local" ? "--local" : "--worktree",
      "--get",
      key,
    ],
    cwd,
    host,
    signal,
  });
  return result.success && result.stdout.length > 0 ? result.stdout : null;
}

export async function writeJsonToGitPath({
  contents,
  host,
  path,
  root,
  signal,
}: {
  contents: unknown;
  host: WorkerExecutionHostClient;
  path: string;
  root: string;
  signal: AbortSignal;
}): Promise<void> {
  const configPath = await readGitPath({ host, path, root, signal });
  if (configPath == null) throw Error(`No git repository found for ${path}`);
  await host.writeFile(configPath, `${JSON.stringify(contents, null, 2)}\n`, {
    signal,
  });
}

export async function removeGitPath({
  host,
  path,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  path: string;
  root: string;
  signal: AbortSignal;
}): Promise<void> {
  const gitPath = await readGitPath({ host, path, root, signal });
  if (gitPath != null) await host.remove(gitPath, { force: true });
}

export async function readSafeAttributeFilterOverrides({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: [
      "config",
      "--name-only",
      "--get-regexp",
      "^filter\\..*\\.(clean|smudge|process|required)$",
    ],
    cwd: root,
    host,
    signal,
  });
  if (!result.success) {
    throw Error(
      `git config filter discovery failed: ${result.stderr || result.stdout}`,
    );
  }
  const filters = new Set<string>();
  for (const line of result.stdout.split(/\r?\n/)) {
    const filter = /^filter\.(.+)\.(?:clean|smudge|process|required)$/.exec(
      line.trim(),
    )?.[1];
    if (filter != null) filters.add(filter);
  }
  return [
    "-c",
    "attr.tree=",
    "-c",
    "core.attributesFile=",
    ...Array.from(filters).flatMap((filter) => [
      "-c",
      `filter.${filter}.clean=`,
      "-c",
      `filter.${filter}.smudge=`,
      "-c",
      `filter.${filter}.process=`,
      "-c",
      `filter.${filter}.required=false`,
    ]),
  ];
}

export async function readTreeSha({
  host,
  ref,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  ref: string;
  root: string;
  signal: AbortSignal;
}): Promise<string> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [128],
    args: ["rev-parse", `${ref}^{tree}`],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) {
    throw Error(result.stderr || result.stdout || "Failed to resolve tree");
  }
  return result.stdout.trim();
}

export async function removeFailedWorktree(
  host: WorkerExecutionHostClient,
  worktreeGitRoot: string,
): Promise<void> {
  await host
    .remove(worktreeGitRoot, { recursive: true, force: true })
    .catch(() => {});
  const pathApi = await host.platformPath();
  const parent = pathApi.dirname(worktreeGitRoot);
  if (parent !== worktreeGitRoot) {
    try {
      if ((await host.readDirectory(parent)).length === 0) {
        await host.remove(parent, { recursive: true, force: true });
      }
    } catch {}
  }
}

async function readGitPath({
  host,
  path,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  path: string;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-path", path],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  if (pathApi.isAbsolute(result.stdout)) return result.stdout;
  if (result.stdout.startsWith(".git/"))
    return pathApi.join(root, result.stdout);
  const gitDir = await readGitDir({ host, root, signal });
  return gitDir == null ? null : pathApi.join(gitDir, result.stdout);
}

async function readGitDir({
  host,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-dir"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.join(root, result.stdout);
}
