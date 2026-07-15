// Restored from ref/.vite/build/worker.js
// Git blame reader with repository web URL metadata for worker file views.

import { runGitCommand } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type BlameFileLine = {
  author: string | null;
  authorLogin: string | null;
  authorTime: number | null;
  commitSha: string;
  lineNumber: number;
  summary: string | null;
};

type BlameFileResult =
  | {
      type: "success";
      lines: BlameFileLine[];
      repositoryWebUrl: string | null;
    }
  | {
      type: "error";
      error: { type: "not-found" | "unknown" };
    };

type GitRemoteRepository = {
  host: string;
  owner: string;
  repo: string;
};

const noLazyFetchEnv = { GIT_NO_LAZY_FETCH: "1" };
const maxBlameOutputBytes = 20 * 1024 * 1024;

export async function readBlameFile({
  cwd,
  host,
  path,
  signal,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  path: string;
  signal: AbortSignal;
}): Promise<BlameFileResult> {
  try {
    const metadata = await readStableMetadata({ cwd, host, signal });
    if (metadata == null) return unknownBlameFileError();

    const relativePath = await relativePathInsideRepository({
      cwd,
      host,
      path,
      root: metadata.root,
    });
    if (relativePath == null) return notFoundBlameFileError();

    const [blameResult, repositoryWebUrl] = await Promise.all([
      runGitCommand({
        args: ["blame", "--line-porcelain", "--", relativePath],
        cwd: metadata.root,
        env: noLazyFetchEnv,
        host,
        maxOutputBytes: maxBlameOutputBytes,
        signal,
        timeoutMs: 30_000,
        trim: false,
      }),
      readRepositoryWebUrl(metadata.commonDir, host, signal),
    ]);

    if (blameResult.outputLimitExceeded) return unknownBlameFileError();
    if (!blameResult.success) {
      return blameResult.code === 128
        ? notFoundBlameFileError()
        : unknownBlameFileError();
    }

    return {
      type: "success",
      lines: parseLinePorcelainBlame(blameResult.stdout),
      repositoryWebUrl,
    };
  } catch {
    return unknownBlameFileError();
  }
}

async function relativePathInsideRepository({
  cwd,
  host,
  path,
  root,
}: {
  cwd: string;
  host: WorkerExecutionHostClient;
  path: string;
  root: string;
}): Promise<string | null> {
  const pathApi = await host.platformPath();
  const normalizedRoot = normalizePlatformPath(root);
  const resolvedPath = resolvePlatformPath(
    pathApi,
    normalizePlatformPath(cwd),
    normalizePlatformPath(path),
  );
  const normalizedResolvedPath = alignPathWithRepositoryRoot(
    normalizedRoot,
    normalizePlatformPath(resolvedPath),
  );
  const relativePath = relativePathFromRoot(
    pathApi,
    normalizedRoot,
    normalizedResolvedPath,
  );
  if (relativePath == null) return null;
  return relativePath.split(/[/\\]+/).join("/");
}

function resolvePlatformPath(
  pathApi: Awaited<ReturnType<WorkerExecutionHostClient["platformPath"]>>,
  cwd: string,
  path: string,
): string {
  return pathApi.isAbsolute(path) ? path : pathApi.resolve(cwd, path);
}

function relativePathFromRoot(
  pathApi: Awaited<ReturnType<WorkerExecutionHostClient["platformPath"]>>,
  root: string,
  path: string,
): string | null {
  const relativePath = pathApi.relative(root, path);
  return relativePath === "" ||
    relativePath === ".." ||
    relativePath.startsWith(`..${pathApi.sep}`) ||
    pathApi.isAbsolute(relativePath)
    ? null
    : relativePath;
}

function normalizePlatformPath(path: string): string {
  const uncPath = /^\\\\\?\\UNC\\(.*)$/i.exec(path);
  if (uncPath != null) return `\\\\${uncPath[1]}`;

  const devicePath = /^\\\\\?\\([a-zA-Z]:[\\/].*)$/.exec(path);
  if (devicePath != null) return devicePath[1] ?? path;

  return /^\/([a-zA-Z]:[\\/].*)$/.exec(path)?.[1] ?? path;
}

function alignPathWithRepositoryRoot(root: string, path: string): string {
  if (!root.startsWith("/private/")) return path;
  if (path.startsWith("/var/")) return `/private${path}`;
  if (path.startsWith("/tmp/")) return `/private${path}`;
  return path;
}

function parseLinePorcelainBlame(stdout: string): BlameFileLine[] {
  const lines: BlameFileLine[] = [];
  let currentLine: BlameFileLine | null = null;

  for (const line of stdout.split("\n")) {
    if (line === "") continue;
    if (line.startsWith("\t")) {
      if (currentLine != null) {
        lines.push(currentLine);
        currentLine = null;
      }
      continue;
    }

    if (currentLine == null) {
      currentLine = parseBlameHeader(line);
      continue;
    }

    const separatorIndex = line.indexOf(" ");
    const key = separatorIndex === -1 ? line : line.slice(0, separatorIndex);
    const value = separatorIndex === -1 ? "" : line.slice(separatorIndex + 1);
    if (key === "author") {
      currentLine.author = value || null;
    } else if (key === "author-mail") {
      currentLine.authorLogin = parseGitHubNoreplyLogin(value);
    } else if (key === "author-time") {
      const authorTime = Number.parseInt(value, 10);
      currentLine.authorTime = Number.isNaN(authorTime) ? null : authorTime;
    } else if (key === "summary") {
      currentLine.summary = value || null;
    }
  }

  return lines;
}

function parseBlameHeader(header: string): BlameFileLine {
  const [commitSha = "", , lineNumberText = ""] = header.split(" ");
  const lineNumber = Number.parseInt(lineNumberText, 10);
  return {
    author: null,
    authorLogin: null,
    authorTime: null,
    commitSha,
    lineNumber: Number.isNaN(lineNumber) ? 0 : lineNumber,
    summary: null,
  };
}

function parseGitHubNoreplyLogin(authorMail: string): string | null {
  const email = authorMail.trim().replace(/^<|>$/g, "");
  return (
    /^(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/i.exec(email)?.[1] ?? null
  );
}

async function readRepositoryWebUrl(
  commonDir: string,
  host: WorkerExecutionHostClient,
  signal: AbortSignal,
): Promise<string | null> {
  try {
    const result = await runGitCommand({
      args: ["config", "--get", "remote.origin.url"],
      cwd: commonDir,
      host,
      signal,
    });
    if (!result.success || !result.stdout) return null;

    const repository = parseGitRemoteRepository(result.stdout);
    return repository == null || !isGitHubHost(repository.host)
      ? null
      : `https://${repository.host}/${repository.owner}/${repository.repo}`;
  } catch {
    return null;
  }
}

function parseGitRemoteRepository(value: string): GitRemoteRepository | null {
  const remoteUrl = value.trim();
  if (!remoteUrl || /^[a-zA-Z]:[\\/]/.test(remoteUrl)) return null;
  if (remoteUrl.includes("://")) {
    return parseUrlRemoteRepository(remoteUrl);
  }
  return parseScpRemoteRepository(remoteUrl);
}

function parseUrlRemoteRepository(value: string): GitRemoteRepository | null {
  try {
    const url = new URL(value);
    const host = url.hostname;
    if (!host) return null;
    const ownerAndRepo = parseOwnerAndRepo(
      url.pathname.replace(/^\/+/, "").replace(/\.git$/i, ""),
    );
    return ownerAndRepo == null ? null : { host, ...ownerAndRepo };
  } catch {
    return null;
  }
}

function parseScpRemoteRepository(value: string): GitRemoteRepository | null {
  const match = /^(?:[^@]+@)?([^:]+):(.+)$/.exec(value);
  const host = match?.[1]?.trim();
  const path = match?.[2]
    ?.trim()
    .replace(/^\/+/, "")
    .replace(/\.git$/i, "");
  if (!host || !path) return null;
  const ownerAndRepo = parseOwnerAndRepo(path);
  return ownerAndRepo == null ? null : { host, ...ownerAndRepo };
}

function parseOwnerAndRepo(
  path: string,
): { owner: string; repo: string } | null {
  const parts = path.split("/").filter((part) => part.length > 0);
  if (parts.length < 2) return null;
  const repo = parts.at(-1);
  const owner = parts.slice(0, -1).join("/");
  return owner && repo ? { owner, repo } : null;
}

function isGitHubHost(host: string): boolean {
  return host === "github.com" || host.endsWith(".github.com");
}

function notFoundBlameFileError(): BlameFileResult {
  return { type: "error", error: { type: "not-found" } };
}

function unknownBlameFileError(): BlameFileResult {
  return { type: "error", error: { type: "unknown" } };
}
