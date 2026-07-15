// Restored from ref/.vite/build/child-process-snapshot-worker.js
// Child-process snapshot worker: samples descendant processes for a root PID.
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { parentPort, workerData } from "node:worker_threads";

type ProcessRootQuery = {
  pid: number;
  includeRoot: boolean;
};
type ProcessParentRow = {
  pid: number;
  parentPid: number;
};
type ProcessDetailRow = ProcessParentRow & {
  command: string;
  ageSeconds: number | null;
  cpuPercent: number | null;
  rssKb: number | null;
};
type ChildProcessSnapshot = ProcessDetailRow & {
  depth: number;
  rootChildPid: number;
  kind: ChildProcessKind;
};
type ChildProcessKind =
  | "app_server"
  | "electron_renderer"
  | "electron_gpu"
  | "electron_network"
  | "electron_proxy"
  | "electron_utility"
  | "mcp"
  | "git"
  | "shell"
  | "other";
type WorkerResult =
  | { type: "ok"; value: ChildProcessSnapshot[] }
  | { type: "error"; error: { message: string } };

const execFileAsync = promisify(execFile);
const POSIX_PS_TIMEOUT_MS = 2_000;
const WINDOWS_PS_TIMEOUT_MS = 5_000;
const POSIX_MAX_BUFFER_BYTES = 1024 * 1024;
const WINDOWS_MAX_BUFFER_BYTES = 8 * 1024 * 1024;
const QUERY_CHUNK_SIZE = 200;

if (parentPort == null) {
  throw Error("Child process snapshot worker requires a parent port");
}

collectChildProcessSnapshot(parseWorkerRootPid(workerData)).then(
  (snapshot) => parentPort.postMessage(ok(snapshot)),
  (error) => parentPort.postMessage(fail(error)),
);

async function collectChildProcessSnapshot(
  rootPid: number,
): Promise<ChildProcessSnapshot[]> {
  return collectProcessTreeSnapshots([{ pid: rootPid, includeRoot: false }]);
}

async function collectProcessTreeSnapshots(
  roots: ProcessRootQuery[],
): Promise<ChildProcessSnapshot[]> {
  return buildProcessTreeSnapshots(await readProcessDetails(roots), roots);
}

async function readProcessDetails(
  roots: ProcessRootQuery[],
): Promise<ProcessDetailRow[]> {
  return process.platform === "win32"
    ? readWindowsProcessDetails(
        selectDescendantPids(await readWindowsParents(), roots),
      )
    : readPosixProcessDetails(
        selectDescendantPids(await readPosixParents(), roots),
      );
}

async function readPosixParents(): Promise<ProcessParentRow[]> {
  const { stdout } = await execFileAsync("ps", ["-ax", "-o", "pid=,ppid="], {
    encoding: "utf8",
    env: cloneProcessEnv(process.env),
    timeout: POSIX_PS_TIMEOUT_MS,
    maxBuffer: POSIX_MAX_BUFFER_BYTES,
  });
  return parsePosixParentRows(stdout);
}

async function readWindowsParents(): Promise<ProcessParentRow[]> {
  const { stdout } = await execFileAsync(
    "powershell.exe",
    [
      "-NoProfile",
      "-NonInteractive",
      "-Command",
      [
        "$ErrorActionPreference = 'Stop';",
        "Get-CimInstance Win32_Process",
        "| Select-Object ProcessId,ParentProcessId",
        "| ConvertTo-Json -Depth 2",
      ].join(" "),
    ],
    {
      encoding: "utf8",
      env: cloneProcessEnv(process.env),
      timeout: WINDOWS_PS_TIMEOUT_MS,
      maxBuffer: WINDOWS_MAX_BUFFER_BYTES,
      windowsHide: true,
    },
  );
  return parseWindowsProcessRows(stdout).map(({ parentPid, pid }) => ({
    parentPid,
    pid,
  }));
}

async function readPosixProcessDetails(
  pids: Set<number>,
): Promise<ProcessDetailRow[]> {
  const pidChunks = chunkArray(
    [...pids].sort((left, right) => left - right),
    QUERY_CHUNK_SIZE,
  );
  const chunkResults = await Promise.all(
    pidChunks.map(async (pidChunk) => {
      const { stdout } = await execFileAsync(
        "ps",
        [
          "-p",
          pidChunk.join(","),
          "-o",
          "pid=,ppid=,%cpu=,rss=,etime=,command=",
        ],
        {
          encoding: "utf8",
          env: cloneProcessEnv(process.env),
          timeout: POSIX_PS_TIMEOUT_MS,
          maxBuffer: POSIX_MAX_BUFFER_BYTES,
        },
      );
      return parsePosixDetailRows(stdout);
    }),
  );
  return chunkResults.flat();
}

async function readWindowsProcessDetails(
  pids: Set<number> | null,
): Promise<ProcessDetailRow[]> {
  const sortedPids = [...(pids ?? [])].sort((left, right) => left - right);
  if (pids != null && sortedPids.length === 0) return [];

  const pidChunks =
    pids == null ? [null] : chunkArray(sortedPids, QUERY_CHUNK_SIZE);
  const chunkResults = await Promise.all(
    pidChunks.map(async (pidChunk) => {
      const { stdout } = await execFileAsync(
        "powershell.exe",
        [
          "-NoProfile",
          "-NonInteractive",
          "-Command",
          windowsProcessQuery(pidChunk),
        ],
        {
          encoding: "utf8",
          env: cloneProcessEnv(process.env),
          timeout: WINDOWS_PS_TIMEOUT_MS,
          maxBuffer: WINDOWS_MAX_BUFFER_BYTES,
          windowsHide: true,
        },
      );
      return parseWindowsProcessRows(stdout);
    }),
  );
  return chunkResults.flat();
}

function windowsProcessQuery(pids: number[] | null): string {
  return [
    "$ErrorActionPreference = 'Stop';",
    "$cpuByPid = @{};",
    "Get-CimInstance Win32_PerfFormattedData_PerfProc_Process | ForEach-Object { $cpuByPid[[int]$_.IDProcess] = [double]$_.PercentProcessorTime };",
    pids == null
      ? "Get-CimInstance Win32_Process"
      : `Get-CimInstance Win32_Process -Filter "${pids.map((pid) => `ProcessId = ${pid}`).join(" OR ")}"`,
    "| Select-Object ProcessId,ParentProcessId,CommandLine,WorkingSetSize,@{Name='CpuPercent';Expression={$cpuByPid[[int]$_.ProcessId]}},@{Name='AgeSeconds';Expression={[int]((Get-Date) - $_.CreationDate).TotalSeconds}}",
    "| ConvertTo-Json -Depth 2",
  ].join(" ");
}

function parsePosixDetailRows(output: string): ProcessDetailRow[] {
  const rows: ProcessDetailRow[] = [];
  for (const line of output.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const match = /^(\d+)\s+(\d+)\s+([\d.]+)\s+(\d+)\s+(\S+)\s+(.+)$/.exec(
      trimmed,
    );
    if (!match) continue;

    const pid = Number.parseInt(match[1]!, 10);
    const parentPid = Number.parseInt(match[2]!, 10);
    const cpuPercent = Number.parseFloat(match[3]!);
    const rssKb = Number.parseInt(match[4]!, 10);
    if (!Number.isFinite(pid) || !Number.isFinite(parentPid)) continue;

    rows.push({
      pid,
      parentPid,
      command: match[6]!.trim(),
      ageSeconds: parsePosixElapsedSeconds(match[5]!),
      cpuPercent: Number.isFinite(cpuPercent) ? Math.max(0, cpuPercent) : null,
      rssKb: Number.isFinite(rssKb) ? rssKb : null,
    });
  }
  return rows;
}

function parsePosixParentRows(output: string): ProcessParentRow[] {
  const rows: ProcessParentRow[] = [];
  for (const line of output.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const match = /^(\d+)\s+(\d+)$/.exec(trimmed);
    if (!match) continue;
    const pid = Number.parseInt(match[1]!, 10);
    const parentPid = Number.parseInt(match[2]!, 10);
    if (Number.isFinite(pid) && Number.isFinite(parentPid)) {
      rows.push({ pid, parentPid });
    }
  }
  return rows;
}

function parseWindowsProcessRows(output: string): ProcessDetailRow[] {
  const trimmed = output.trim();
  if (!trimmed) return [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    return [];
  }

  const records = Array.isArray(parsed) ? parsed : [parsed];
  const rows: ProcessDetailRow[] = [];
  for (const record of records) {
    if (typeof record !== "object" || record == null) continue;
    const value = record as Record<string, unknown>;
    const pid = Number(value.ProcessId);
    const parentPid = Number(value.ParentProcessId);
    if (!Number.isFinite(pid) || !Number.isFinite(parentPid)) continue;

    rows.push({
      pid,
      parentPid,
      command:
        typeof value.CommandLine === "string" ? value.CommandLine.trim() : "",
      ageSeconds:
        typeof value.AgeSeconds === "number" &&
        Number.isFinite(value.AgeSeconds)
          ? Math.max(0, Math.floor(value.AgeSeconds))
          : null,
      cpuPercent:
        typeof value.CpuPercent === "number" &&
        Number.isFinite(value.CpuPercent)
          ? Math.max(0, value.CpuPercent)
          : null,
      rssKb:
        typeof value.WorkingSetSize === "number" &&
        Number.isFinite(value.WorkingSetSize)
          ? Math.max(0, Math.floor(value.WorkingSetSize / 1024))
          : null,
    });
  }
  return rows;
}

function parsePosixElapsedSeconds(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  let days = 0;
  let clock = trimmed;
  const daySeparator = trimmed.indexOf("-");
  if (daySeparator >= 0) {
    days = Number.parseInt(trimmed.slice(0, daySeparator), 10);
    if (!Number.isFinite(days)) return null;
    clock = trimmed.slice(daySeparator + 1);
  }

  const parts = clock.split(":");
  if (parts.length < 2 || parts.length > 3) return null;
  const [hoursRaw, minutesRaw, secondsRaw] =
    parts.length === 2 ? ["0", parts[0], parts[1]] : parts;
  const hours = Number.parseInt(hoursRaw!, 10);
  const minutes = Number.parseInt(minutesRaw!, 10);
  const seconds = Number.parseInt(secondsRaw!, 10);
  if (
    !Number.isFinite(hours) ||
    !Number.isFinite(minutes) ||
    !Number.isFinite(seconds)
  ) {
    return null;
  }

  const total = seconds + minutes * 60 + hours * 3600 + days * 86400;
  return Number.isFinite(total) ? total : null;
}

function buildProcessTreeSnapshots(
  rows: ProcessDetailRow[],
  roots: ProcessRootQuery[],
): ChildProcessSnapshot[] {
  const byPid = new Map<number, ProcessDetailRow>();
  const childrenByParent = new Map<number, number[]>();
  for (const row of rows) {
    byPid.set(row.pid, row);
    const children = childrenByParent.get(row.parentPid) ?? [];
    children.push(row.pid);
    childrenByParent.set(row.parentPid, children);
  }

  const queue: Array<{ pid: number; depth: number; rootChildPid: number }> = [];
  for (const root of roots) {
    if (root.includeRoot) {
      queue.push({ pid: root.pid, depth: 1, rootChildPid: root.pid });
      continue;
    }
    const children = childrenByParent.get(root.pid);
    if (children) {
      queue.push(
        ...children.map((pid) => ({ pid, depth: 1, rootChildPid: pid })),
      );
    }
  }

  const seen = new Set<number>();
  const snapshots: ChildProcessSnapshot[] = [];
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const item = queue[cursor];
    if (item == null || seen.has(item.pid)) continue;
    seen.add(item.pid);

    const row = byPid.get(item.pid);
    if (row) {
      snapshots.push({
        ...row,
        depth: item.depth,
        rootChildPid: item.rootChildPid,
        kind: classifyProcessCommand(row.command),
      });
    }
    const children = childrenByParent.get(item.pid);
    if (children) {
      queue.push(
        ...children.map((pid) => ({
          pid,
          depth: item.depth + 1,
          rootChildPid: item.rootChildPid,
        })),
      );
    }
  }
  return snapshots;
}

function selectDescendantPids(
  rows: ProcessParentRow[],
  roots: ProcessRootQuery[],
): Set<number> {
  const byPid = new Map<number, ProcessParentRow>();
  const childrenByParent = new Map<number, number[]>();
  for (const row of rows) {
    byPid.set(row.pid, row);
    const children = childrenByParent.get(row.parentPid) ?? [];
    children.push(row.pid);
    childrenByParent.set(row.parentPid, children);
  }

  const selected = new Set<number>();
  const queue: number[] = [];
  for (const root of roots) {
    if (root.includeRoot && byPid.has(root.pid)) queue.push(root.pid);
    const children = childrenByParent.get(root.pid);
    if (children) queue.push(...children);
  }

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const pid = queue[cursor];
    if (pid == null || selected.has(pid)) continue;
    selected.add(pid);
    const children = childrenByParent.get(pid);
    if (children) queue.push(...children);
  }
  return selected;
}

function classifyProcessCommand(command: string): ChildProcessKind {
  return /\bcodex app-server\b/i.test(command)
    ? "app_server"
    : /--type=renderer\b/i.test(command)
      ? "electron_renderer"
      : /--type=gpu-process\b/i.test(command)
        ? "electron_gpu"
        : /--utility-sub-type=network\.mojom\.NetworkService\b/i.test(command)
          ? "electron_network"
          : /--utility-sub-type=proxy_resolver\.mojom\.ProxyResolverFactory\b/i.test(
                command,
              )
            ? "electron_proxy"
            : /--type=utility\b/i.test(command) ||
                /\bElectron Helper\b/i.test(command)
              ? "electron_utility"
              : /\bmcp(?:\b|[._/-])/i.test(command)
                ? "mcp"
                : /\bgit\b/i.test(command)
                  ? "git"
                  : /\b(?:bash|fish|sh|zsh|pwsh|powershell|cmd(?:\.exe)?)\b/i.test(
                        command,
                      )
                    ? "shell"
                    : "other";
}

function chunkArray<T>(values: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let index = 0; index < values.length; index += chunkSize) {
    chunks.push(values.slice(index, index + chunkSize));
  }
  return chunks;
}

function cloneProcessEnv(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  return { ...env };
}

function parseWorkerRootPid(value: unknown): number {
  if (!Number.isInteger(value) || Number(value) < 0) {
    throw Error("Child process snapshot worker data must be a nonnegative PID");
  }
  return Number(value);
}

function ok(value: ChildProcessSnapshot[]): WorkerResult {
  return { type: "ok", value };
}

function fail(error: unknown): WorkerResult {
  return {
    type: "error",
    error: { message: error instanceof Error ? error.message : String(error) },
  };
}
