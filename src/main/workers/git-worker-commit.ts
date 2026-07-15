// Restored from ref/.vite/build/worker.js
// Stateful Git commit handler with optional staging and commit attribution.

import { runGitCommand, type GitCommandResult } from "./git-worker-commands";
import { readStableMetadata } from "./git-worker-repo-queries";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type GitCommitResult =
  | {
      status: "success";
      commitSha: string | null;
    }
  | {
      status: "error";
      error: string;
      errorType?: "nothing-to-commit";
      execOutput: GitCommandExecOutput;
    };

type GitCommandExecOutput = {
  command: string[];
  output: string;
};

const defaultCommitAttribution = "Codex <noreply@openai.com>";

export async function commitGitChanges({
  commitAttribution,
  cwd,
  host,
  includeUnstaged,
  message,
  signal,
}: {
  commitAttribution?: unknown;
  cwd: string;
  host: WorkerExecutionHostClient;
  includeUnstaged: boolean;
  message: string;
  signal: AbortSignal;
}): Promise<GitCommitResult> {
  const metadata = await readStableMetadata({ cwd, host, signal });
  const root = metadata?.root ?? cwd;

  if (includeUnstaged) {
    const addResult = await runGitCommand({
      args: ["add", "-A"],
      cwd: root,
      host,
      signal,
    });
    if (!addResult.success) {
      const error =
        addResult.stderr || addResult.stdout || "Failed to stage changes";
      return {
        status: "error",
        error,
        execOutput: commandExecOutput(addResult, error),
      };
    }
  }

  const commitMessage = appendCommitAttribution(
    message,
    normalizeCommitAttribution(commitAttribution),
  );
  const commitResult = await runGitCommand({
    args: ["commit", "-m", commitMessage],
    cwd: root,
    host,
    signal,
  });
  if (!commitResult.success) {
    const error =
      commitResult.stderr || commitResult.stdout || "Failed to commit changes";
    const noStagedChanges = (
      await runGitCommand({
        args: ["diff", "--cached", "--quiet", "--exit-code"],
        cwd: root,
        host,
        signal,
      })
    ).success;
    return {
      status: "error",
      error,
      errorType: noStagedChanges ? "nothing-to-commit" : undefined,
      execOutput: commandExecOutput(commitResult, error),
    };
  }

  const headResult = await runGitCommand({
    args: ["rev-parse", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  return {
    status: "success",
    commitSha: headResult.success ? headResult.stdout : null,
  };
}

function normalizeCommitAttribution(value: unknown): string | null {
  if (value === undefined) return defaultCommitAttribution;
  if (value == null) return null;
  if (typeof value !== "string") {
    throw Error("Git worker parameter 'commitAttribution' must be a string");
  }
  return value.trim() || null;
}

function appendCommitAttribution(
  message: string,
  attribution: string | null,
): string {
  if (!attribution) return message;
  const coAuthorLine = `Co-authored-by: ${attribution}`;
  if (hasCommitTrailerLine(message, coAuthorLine)) return message;
  const trimmedMessage = message.trimEnd();
  if (!trimmedMessage) return coAuthorLine;
  return `${trimmedMessage}${
    endsWithTrailerBlock(trimmedMessage) ? "\n" : "\n\n"
  }${coAuthorLine}`;
}

function hasCommitTrailerLine(message: string, line: string): boolean {
  return RegExp(`^${escapeRegExp(line)}$`, "gim").test(message);
}

function endsWithTrailerBlock(message: string): boolean {
  const lines = message.split(/\r?\n/);
  let index = lines.length - 1;
  let sawTrailer = false;
  while (index >= 0 && lines[index]?.trim() !== "") {
    if (!isCommitTrailerLine(lines[index] ?? "")) return false;
    sawTrailer = true;
    index -= 1;
  }
  return sawTrailer;
}

function isCommitTrailerLine(line: string): boolean {
  return /^[A-Za-z][A-Za-z0-9-]*:\s+\S/.test(line);
}

function commandExecOutput(
  result: GitCommandResult,
  fallbackOutput = result.stdout ||
    result.stderr ||
    "An unknown error occurred",
): GitCommandExecOutput {
  return {
    command: result.command,
    output:
      [result.stdout, result.stderr].filter(Boolean).join("\n") ||
      fallbackOutput,
  };
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
