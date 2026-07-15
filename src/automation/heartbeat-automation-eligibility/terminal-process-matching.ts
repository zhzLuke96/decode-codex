// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
import type {
  MatchedTerminalProcess,
  ProcessListEntry,
  TerminalProcessCandidate,
} from "./types";
const COMMAND_START_TIME_TOLERANCE_SECONDS = 60;
export function isSameTerminalProcessCandidate(
  left: TerminalProcessCandidate,
  right: TerminalProcessCandidate,
): boolean {
  return left.id === right.id
    ? true
    : left.command === right.command &&
        left.conversationId === right.conversationId &&
        left.cwd === right.cwd &&
        left.hostId === right.hostId &&
        left.stopAction === right.stopAction &&
        left.turnId === right.turnId;
}
export function matchTerminalProcessCandidate(
  candidate: TerminalProcessCandidate,
  processList: readonly ProcessListEntry[] | null | undefined,
  nowMs: number = Date.now(),
  {
    matchCommandStartTime = false,
  }: {
    matchCommandStartTime?: boolean;
  } = {},
): MatchedTerminalProcess | null {
  if (processList == null) return null;
  const commandStartToleranceSeconds =
    matchCommandStartTime && candidate.commandExecutionStartedAtMs != null
      ? COMMAND_START_TIME_TOLERANCE_SECONDS
      : null;
  if (candidate.osPid != null) {
    const match = aggregateProcessTreeStats(candidate.osPid, processList);
    if (
      match != null &&
      isCommandMatch(normalizeCommand(candidate.command), match.command)
    ) {
      return match;
    }
  }
  const commandPid = parseProcessId(candidate.processId);
  if (commandPid != null) {
    if (
      candidate.source !== "restored-process" &&
      commandStartToleranceSeconds == null
    ) {
      const directMatch = aggregateProcessTreeStats(commandPid, processList);
      if (directMatch != null) return directMatch;
    }
    const treeMatch = findMatchingProcess(
      candidate,
      getProcessDescendants(commandPid, processList),
      nowMs,
      commandStartToleranceSeconds,
    );
    if (treeMatch != null) {
      return aggregateProcessTreeStats(treeMatch.pid, processList);
    }
  }
  const fuzzyMatch = findMatchingProcess(
    candidate,
    processList,
    nowMs,
    commandStartToleranceSeconds,
  );
  return fuzzyMatch == null
    ? null
    : aggregateProcessTreeStats(fuzzyMatch.pid, processList);
}
function parseProcessId(processId: string | null | undefined): number | null {
  if (processId == null || !/^\d+$/u.test(processId)) return null;
  const pid = Number(processId);
  return Number.isSafeInteger(pid) ? pid : null;
}
function getProcessDescendants(
  rootPid: number,
  processList: readonly ProcessListEntry[],
): ProcessListEntry[] {
  const processByPid = new Map(
    processList.map((process) => [process.pid, process]),
  );
  return processList.filter((process) =>
    isProcessDescendant(process.pid, rootPid, processByPid),
  );
}
function aggregateProcessTreeStats(
  rootPid: number,
  processList: readonly ProcessListEntry[],
): MatchedTerminalProcess | null {
  const processByPid = new Map(
    processList.map((process) => [process.pid, process]),
  );
  const rootProcess = processByPid.get(rootPid);
  if (rootProcess == null) return null;
  let cpuPercent = 0;
  let hasCpuPercent = false;
  let rssKb = 0;
  let hasRssKb = false;
  for (const process of processList) {
    if (!isProcessDescendant(process.pid, rootPid, processByPid)) continue;
    if (process.cpuPercent != null && Number.isFinite(process.cpuPercent)) {
      cpuPercent += process.cpuPercent;
      hasCpuPercent = true;
    }
    if (process.rssKb != null && Number.isFinite(process.rssKb)) {
      rssKb += process.rssKb;
      hasRssKb = true;
    }
  }
  return {
    ageSeconds: rootProcess.ageSeconds,
    command: rootProcess.command,
    cpuPercent: hasCpuPercent ? cpuPercent : null,
    pid: rootPid,
    rssKb: hasRssKb ? rssKb : null,
  };
}
function isProcessDescendant(
  pid: number,
  rootPid: number,
  processByPid: Map<number, ProcessListEntry>,
): boolean {
  let currentPid = pid;
  const visitedPids = new Set<number>();
  while (!visitedPids.has(currentPid)) {
    if (currentPid === rootPid) return true;
    visitedPids.add(currentPid);
    const currentProcess = processByPid.get(currentPid);
    if (currentProcess == null) return false;
    currentPid = currentProcess.parentPid;
  }
  return false;
}
function findMatchingProcess(
  candidate: TerminalProcessCandidate,
  processList: readonly ProcessListEntry[],
  nowMs: number,
  commandStartToleranceSeconds: number | null,
): ProcessListEntry | null {
  const normalizedCommand = normalizeCommand(candidate.command);
  if (normalizedCommand.length === 0) return null;
  const expectedAgeSeconds =
    candidate.startedAtMs == null
      ? null
      : Math.max(0, Math.floor((nowMs - candidate.startedAtMs) / 1000));
  return (
    processList
      .filter(
        (process) =>
          isCommandMatch(normalizedCommand, process.command) &&
          (expectedAgeSeconds == null ||
            commandStartToleranceSeconds == null ||
            process.ageSeconds == null ||
            getAgeDeltaSeconds(process.ageSeconds, expectedAgeSeconds) <=
              commandStartToleranceSeconds),
      )
      .sort((left, right) =>
        compareProcessMatches(left, right, expectedAgeSeconds),
      )[0] ?? null
  );
}
function isCommandMatch(
  normalizedCandidateCommand: string,
  processCommand: string,
): boolean {
  const normalizedProcessCommand = normalizeCommand(processCommand);
  return (
    normalizedProcessCommand === normalizedCandidateCommand ||
    normalizedProcessCommand.startsWith(`${normalizedCandidateCommand} `) ||
    (normalizedProcessCommand.includes(" ") &&
      normalizedCandidateCommand.startsWith(`${normalizedProcessCommand} `)) ||
    normalizedProcessCommand.endsWith(` ${normalizedCandidateCommand}`) ||
    normalizedProcessCommand.includes(` ${normalizedCandidateCommand} `) ||
    commandTokensMatch(normalizedCandidateCommand, normalizedProcessCommand)
  );
}
function commandTokensMatch(
  leftCommand: string,
  rightCommand: string,
): boolean {
  const leftTokens = leftCommand.split(/\s+/u);
  const rightTokens = rightCommand.split(/\s+/u);
  return leftTokens.length === rightTokens.length
    ? leftTokens.every((leftToken, index) => {
        const rightToken = rightTokens[index];
        return rightToken == null
          ? false
          : leftToken === rightToken
            ? true
            : index === 0
              ? false
              : getExecutableBasename(leftToken) ===
                getExecutableBasename(rightToken);
      })
    : false;
}
function compareProcessMatches(
  left: ProcessListEntry,
  right: ProcessListEntry,
  expectedAgeSeconds: number | null,
): number {
  if (expectedAgeSeconds != null) {
    const leftDelta = getAgeDeltaSeconds(left.ageSeconds, expectedAgeSeconds);
    const rightDelta = getAgeDeltaSeconds(right.ageSeconds, expectedAgeSeconds);
    if (leftDelta !== rightDelta) return leftDelta - rightDelta;
  }
  return left.depth === right.depth
    ? left.pid - right.pid
    : left.depth - right.depth;
}
function getAgeDeltaSeconds(
  ageSeconds: number | null | undefined,
  expectedAgeSeconds: number,
): number {
  return ageSeconds == null
    ? Number.MAX_SAFE_INTEGER
    : Math.abs(ageSeconds - expectedAgeSeconds);
}
function normalizeCommand(command: string): string {
  const trimmedCommand = command.trim();
  if (trimmedCommand.length === 0) return "";
  const quotedExecutableMatch = /^"([^"]+)"(.*)$/u.exec(trimmedCommand);
  if (quotedExecutableMatch != null) {
    return `${getExecutableBasename(quotedExecutableMatch[1])}${quotedExecutableMatch[2]}`
      .trim()
      .toLowerCase();
  }
  const executableMatch = /^(\S+)(.*)$/u.exec(trimmedCommand);
  return executableMatch == null
    ? trimmedCommand.toLowerCase()
    : `${getExecutableBasename(executableMatch[1])}${executableMatch[2]}`
        .trim()
        .toLowerCase();
}
function getExecutableBasename(executable: string): string {
  const normalizedPath = executable.replaceAll("\\", "/");
  const lastSlashIndex = normalizedPath.lastIndexOf("/");
  return (
    lastSlashIndex < 0
      ? normalizedPath
      : normalizedPath.slice(lastSlashIndex + 1)
  ).replace(/\.(?:bat|cmd|com|exe)$/iu, "");
}
