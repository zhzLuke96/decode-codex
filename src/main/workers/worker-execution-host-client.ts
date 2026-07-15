// Restored from ref/.vite/build/worker.js
// Worker-side execution-host clients for local processes and main-process RPC.

import { spawn, spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { constants, promises as fs, watch } from "node:fs";
import { homedir } from "node:os";
import { posix, win32 } from "node:path";
import { ReadableStream, WritableStream } from "node:stream/web";
import type { WorkerMainRpcRequester } from "./worker-main-rpc-client";

export type WorkerExecutionHostConfig = Record<string, unknown> & {
  id: string;
  kind?: string;
};

export type WorkerExecutionHostProcess = {
  stdin: WritableStream<unknown>;
  stdout: ReadableStream<unknown>;
  stderr: ReadableStream<unknown>;
  kill(): void;
  resize(size: unknown): Promise<void>;
  wait(): Promise<unknown>;
};

export type WorkerExecutionHostWatch = {
  path: string;
  closed: Promise<{ reason: string; error?: unknown }>;
  dispose(): Promise<void>;
};

type Deferred<T> = {
  promise: Promise<T>;
  resolve(value: T): void;
  reject(error: unknown): void;
};

type ControlledReadableStream = {
  stream: ReadableStream<unknown>;
  close(): void;
  enqueue(chunk: unknown): void;
  error(error: unknown): void;
};

type WorkerProcessSpawnOptions = Record<string, unknown> & {
  args?: unknown;
  cwd?: unknown;
  env?: unknown;
  outputBytesCap?: unknown;
  signal?: AbortSignal;
  timeoutMs?: unknown;
};

function isRemoteExecutionHostConfig(
  hostConfig: unknown,
): hostConfig is WorkerExecutionHostConfig {
  return (
    isRecord(hostConfig) &&
    typeof hostConfig.id === "string" &&
    (hostConfig.kind === "ssh" ||
      hostConfig.kind === "wsl" ||
      hostConfig.kind === "remote-control")
  );
}

export type WorkerExecutionHostClient = WorkerExecutionHostProcessApi &
  WorkerExecutionHostFileSystemApi & {
    readonly hostConfig: WorkerExecutionHostConfig;
    readonly id: string;
    readonly isLocal: boolean;
  };

type WorkerExecutionHostProcessApi = {
  spawn(
    options: WorkerProcessSpawnOptions,
  ): Promise<WorkerExecutionHostProcess>;
};

type WorkerExecutionHostFileSystemApi = {
  codexHome(): Promise<unknown> | unknown;
  copy(
    sourcePath: string,
    destinationPath: string,
    options?: { recursive?: unknown },
  ): Promise<void> | void;
  copyFile(
    sourcePath: string,
    destinationPath: string,
    options?: { exclusive?: boolean },
  ): Promise<void> | void;
  createDirectory(
    path: string,
    options?: { recursive?: unknown },
  ): Promise<void> | void;
  platformFamily(): Promise<unknown> | unknown;
  platformOs(): Promise<unknown> | unknown;
  platformPath(): Promise<typeof posix | typeof win32>;
  readDirectory(path: string): Promise<Array<unknown>> | Array<unknown>;
  readFile(
    path: string,
  ): Promise<ReadableStream<unknown>> | ReadableStream<unknown>;
  remove(path: string, options?: Record<string, unknown>): Promise<void> | void;
  startFileWatch(options: {
    path: string;
    recursive?: unknown;
    watchId: string;
    onChange(event: { changedPaths: unknown }): void;
  }): Promise<WorkerExecutionHostWatch>;
  stat(
    path: string,
    options?: { bypassCache?: unknown; followSymlinks?: unknown },
  ): Promise<Record<string, unknown>>;
  writeFile(
    path: string,
    contents: BodyInit | ReadableStream<unknown> | Uint8Array,
    options?: { signal?: AbortSignal },
  ): Promise<void> | void;
};

export function createWorkerExecutionHostClient(
  hostConfig: WorkerExecutionHostConfig,
  mainRpcClient: WorkerMainRpcRequester,
  options: { spawnInsideWsl?: boolean } = {},
): WorkerExecutionHostClient {
  return isRemoteExecutionHostConfig(hostConfig)
    ? new WorkerRemoteExecutionHostClient(mainRpcClient, hostConfig)
    : new WorkerLocalExecutionHostClient({
        runsInsideWsl: options.spawnInsideWsl === true,
      });
}

class WorkerLocalExecutionHostClient implements WorkerExecutionHostClient {
  readonly hostConfig = { id: "local", display_name: "Local", kind: "local" };
  readonly id = "local";
  readonly isLocal = true;

  constructor(private readonly options: { runsInsideWsl?: boolean } = {}) {}

  get runsInsideWsl(): boolean {
    return this.options.runsInsideWsl === true;
  }

  getFileSystemPath(path: string): string {
    return this.runsInsideWsl ? windowsPathForWslPath(path) : path;
  }

  async spawn(
    options: WorkerProcessSpawnOptions,
  ): Promise<WorkerExecutionHostProcess> {
    const [command, args] = requireSpawnArgs(options.args);
    const stdout = createControlledReadableStream();
    const stderr = createControlledReadableStream();
    let stdoutBytes = 0;
    let stderrBytes = 0;
    let outputLimitExceeded = false;
    const normalized = normalizeLocalSpawnCommand({
      args,
      command,
      cwd: typeof options.cwd === "string" ? options.cwd : undefined,
      env: normalizeProcessEnv(options.env),
      runsInsideWsl: this.runsInsideWsl,
    });
    const child = spawn(normalized.command, normalized.args, {
      cwd: normalized.cwd,
      env: normalized.env,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
    });
    let timeout: NodeJS.Timeout | null = null;
    const kill = (): void => {
      if (!child.killed) child.kill();
    };
    const enforceOutputLimit = (
      streamName: "stderr" | "stdout",
      size: number,
    ): void => {
      if (streamName === "stdout") stdoutBytes += size;
      else stderrBytes += size;
      if (
        typeof options.outputBytesCap === "number" &&
        (streamName === "stdout" ? stdoutBytes : stderrBytes) >
          options.outputBytesCap
      ) {
        outputLimitExceeded = true;
        kill();
      }
    };
    child.stdout.on("data", (chunk: Buffer) => {
      enforceOutputLimit("stdout", chunk.length);
      stdout.enqueue(chunk);
    });
    child.stderr.on("data", (chunk: Buffer) => {
      enforceOutputLimit("stderr", chunk.length);
      stderr.enqueue(chunk);
    });
    child.stdout.on("error", (error) => stdout.error(error));
    child.stderr.on("error", (error) => stderr.error(error));
    if (typeof options.timeoutMs === "number" && options.timeoutMs > 0) {
      timeout = setTimeout(kill, options.timeoutMs);
    }
    const abort = (): void => kill();
    options.signal?.addEventListener("abort", abort);
    if (options.signal?.aborted) abort();

    const waitPromise = new Promise<{
      code: number | null;
      signal: string | null;
    }>((resolve, reject) => {
      child.once("error", reject);
      child.once("close", (code, signal) => {
        stdout.close();
        stderr.close();
        resolve({ code, signal });
      });
    }).finally(() => {
      if (timeout != null) clearTimeout(timeout);
      options.signal?.removeEventListener("abort", abort);
    });
    waitPromise.catch(() => {});

    return {
      stdin: new WritableStream({
        write: async (chunk) => {
          await writeChildStdin(child.stdin, chunk);
        },
        close: async () => {
          child.stdin.end();
        },
        abort: kill,
      }),
      stdout: stdout.stream,
      stderr: stderr.stream,
      kill,
      resize: async () => {
        throw Error("Local execution host processes do not support resizing");
      },
      wait: async () => {
        const result = await waitPromise;
        return outputLimitExceeded
          ? { ...result, outputLimitExceeded: true }
          : result;
      },
    };
  }

  async readFile(path: string): Promise<ReadableStream<Uint8Array>> {
    return readableStreamFromBytes(
      await fs.readFile(this.getFileSystemPath(path)),
    );
  }

  async writeFile(
    path: string,
    contents: BodyInit | ReadableStream<unknown> | Uint8Array,
    options: { signal?: AbortSignal } = {},
  ): Promise<void> {
    options.signal?.throwIfAborted();
    await fs.writeFile(
      this.getFileSystemPath(path),
      await readBodyToUint8Array(toReadableBody(contents)),
    );
    options.signal?.throwIfAborted();
  }

  async createDirectory(
    path: string,
    options: { recursive?: unknown } = {},
  ): Promise<void> {
    await fs.mkdir(this.getFileSystemPath(path), {
      recursive: options.recursive !== false,
    });
  }

  stat(
    path: string,
    options: { bypassCache?: unknown; followSymlinks?: unknown } = {},
  ): Promise<Record<string, unknown>> {
    void options.bypassCache;
    return options.followSymlinks === false
      ? fs.lstat(this.getFileSystemPath(path))
      : fs.stat(this.getFileSystemPath(path));
  }

  readDirectory(path: string): Promise<Array<unknown>> {
    return fs.readdir(this.getFileSystemPath(path), { withFileTypes: true });
  }

  async remove(
    path: string,
    options: Record<string, unknown> = {},
  ): Promise<void> {
    await fs.rm(this.getFileSystemPath(path), {
      force: options.force !== false,
      recursive: options.recursive !== false,
    });
  }

  async copyFile(
    sourcePath: string,
    destinationPath: string,
    options: { exclusive?: boolean } = {},
  ): Promise<void> {
    await fs.copyFile(
      this.getFileSystemPath(sourcePath),
      this.getFileSystemPath(destinationPath),
      options.exclusive ? constants.COPYFILE_EXCL : 0,
    );
  }

  async copy(
    sourcePath: string,
    destinationPath: string,
    options: { recursive?: unknown } = {},
  ): Promise<void> {
    await fs.cp(
      this.getFileSystemPath(sourcePath),
      this.getFileSystemPath(destinationPath),
      { recursive: options.recursive === true },
    );
  }

  codexHome(): Promise<string> {
    if (this.runsInsideWsl && process.platform === "win32") {
      const wslCodexHome = readWslCodexHome();
      if (wslCodexHome != null) return Promise.resolve(wslCodexHome);
    }
    return Promise.resolve(process.env.CODEX_HOME ?? `${homedir()}/.codex`);
  }

  platformFamily(): Promise<"unix" | "windows"> {
    return Promise.resolve(
      this.runsInsideWsl || process.platform !== "win32" ? "unix" : "windows",
    );
  }

  platformOs(): Promise<NodeJS.Platform | "macos"> {
    return Promise.resolve(
      this.runsInsideWsl
        ? "linux"
        : process.platform === "darwin"
          ? "macos"
          : process.platform,
    );
  }

  async platformPath(): Promise<typeof posix | typeof win32> {
    return (await this.platformFamily()) === "windows" ? win32 : posix;
  }

  async startFileWatch(options: {
    path: string;
    recursive?: unknown;
    watchId: string;
    onChange(event: { changedPaths: unknown }): void;
  }): Promise<WorkerExecutionHostWatch> {
    const closed = createDeferred<{ reason: string; error?: unknown }>();
    const pathApi = await this.platformPath();
    let didClose = false;
    const watcher = watch(
      this.getFileSystemPath(options.path),
      { recursive: options.recursive === true },
      (_eventType, filename) => {
        options.onChange({
          changedPaths:
            filename == null
              ? []
              : [pathApi.join(options.path, String(filename))],
        });
      },
    );
    const close = (event: { reason: string; error?: unknown }): void => {
      if (didClose) return;
      didClose = true;
      watcher.close();
      closed.resolve(event);
    };
    watcher.on("error", (error) => close({ reason: "watch-error", error }));
    return {
      path: options.path,
      closed: closed.promise,
      dispose: async () => {
        close({ reason: "disposed" });
      },
    };
  }
}

class WorkerRemoteExecutionHostClient implements WorkerExecutionHostClient {
  readonly id: string;
  readonly isLocal = false;
  readonly hostConfig: WorkerExecutionHostConfig;

  constructor(
    private readonly mainRpcClient: WorkerMainRpcRequester,
    hostConfig: WorkerExecutionHostConfig,
  ) {
    this.hostConfig = hostConfig;
    this.id = hostConfig.id;
  }

  spawn(
    options: Record<string, unknown> & { signal?: AbortSignal },
  ): Promise<WorkerExecutionHostProcess> {
    const processHandle = `process:${randomUUID()}`;
    const stdout = createControlledReadableStream();
    const stderr = createControlledReadableStream();
    let exited = false;
    let killed = false;
    let removeAbortListener = (): void => {};
    const unsubscribeOutput = this.mainRpcClient.subscribe(
      "process-output-delta",
      (event) => {
        if (!isRecord(event)) return;
        if (event.processHandle !== processHandle) return;
        (event.stream === "stdout" ? stdout : stderr).enqueue(event.chunk);
      },
    );
    const { signal, ...spawnOptions } = options;
    const waitPromise = this.mainRpcClient
      .request("process-start", {
        hostId: this.id,
        processHandle,
        ...spawnOptions,
      })
      .then(
        (value) => {
          exited = true;
          stdout.close();
          stderr.close();
          return value;
        },
        (error) => {
          stdout.error(error);
          stderr.error(error);
          throw error;
        },
      );
    const cleanup = (): void => {
      unsubscribeOutput();
      removeAbortListener();
    };
    waitPromise.then(cleanup, cleanup);
    waitPromise.catch(() => {});

    const kill = (): void => {
      if (exited || killed) return;
      killed = true;
      this.mainRpcClient
        .request("process-terminate", { processHandle })
        .catch(() => {});
    };
    if (signal != null) {
      const abort = (): void => kill();
      signal.addEventListener("abort", abort);
      removeAbortListener = () => signal.removeEventListener("abort", abort);
      if (signal.aborted) abort();
    }

    return Promise.resolve({
      stdin: new WritableStream({
        write: async (delta) => {
          await this.mainRpcClient.request("process-write", {
            processHandle,
            delta,
          });
        },
        close: async () => {
          await this.mainRpcClient.request("process-write", {
            processHandle,
            closeStdin: true,
          });
        },
        abort: kill,
      }),
      stdout: stdout.stream,
      stderr: stderr.stream,
      kill,
      resize: async (size) => {
        await this.mainRpcClient.request("process-resize", {
          processHandle,
          size,
        });
      },
      wait: () => waitPromise,
    });
  }

  async readFile(path: string): Promise<ReadableStream<Uint8Array>> {
    return readableStreamFromBytes(
      await this.mainRpcClient.request("fs-read-file", {
        hostId: this.id,
        path,
      }),
    );
  }

  async writeFile(
    path: string,
    contents: BodyInit | ReadableStream<unknown> | Uint8Array,
    options: { signal?: AbortSignal } = {},
  ): Promise<void> {
    options.signal?.throwIfAborted();
    await this.mainRpcClient.request("fs-write-file", {
      hostId: this.id,
      path,
      contents: await readBodyToUint8Array(toReadableBody(contents)),
    });
    options.signal?.throwIfAborted();
  }

  async createDirectory(
    path: string,
    options: { recursive?: unknown } = {},
  ): Promise<void> {
    await this.mainRpcClient.request("fs-create-directory", {
      hostId: this.id,
      path,
      recursive: options.recursive,
    });
  }

  async stat(
    path: string,
    options: { bypassCache?: unknown; followSymlinks?: unknown } = {},
  ): Promise<Record<string, unknown>> {
    return serializeRemoteMetadata(
      await this.mainRpcClient.request("fs-get-metadata", {
        hostId: this.id,
        path,
        bypassCache: options.bypassCache,
        followSymlinks: options.followSymlinks,
      }),
    );
  }

  async readDirectory(path: string): Promise<Array<Record<string, unknown>>> {
    const entries = await this.mainRpcClient.request("fs-read-directory", {
      hostId: this.id,
      path,
    });
    return Array.isArray(entries)
      ? entries.map(serializeRemoteDirectoryEntry)
      : [];
  }

  async remove(
    path: string,
    options: Record<string, unknown> = {},
  ): Promise<void> {
    await this.mainRpcClient.request("fs-remove", {
      hostId: this.id,
      path,
      ...options,
    });
  }

  async copyFile(
    sourcePath: string,
    destinationPath: string,
    options: { exclusive?: boolean } = {},
  ): Promise<void> {
    if (options.exclusive) {
      throw Error("Exclusive copy is unsupported across worker RPC");
    }
    await this.copy(sourcePath, destinationPath);
  }

  async copy(
    sourcePath: string,
    destinationPath: string,
    options: { recursive?: unknown } = {},
  ): Promise<void> {
    await this.mainRpcClient.request("fs-copy", {
      hostId: this.id,
      sourcePath,
      destinationPath,
      recursive: options.recursive,
    });
  }

  codexHome(): Promise<unknown> {
    return this.mainRpcClient.request("codex-home", { hostId: this.id });
  }

  platformFamily(): Promise<unknown> {
    return this.mainRpcClient.request("platform-family", { hostId: this.id });
  }

  platformOs(): Promise<unknown> {
    return this.mainRpcClient.request("platform-os", { hostId: this.id });
  }

  async platformPath(): Promise<typeof posix | typeof win32> {
    return (await this.platformFamily()) === "windows" ? win32 : posix;
  }

  async startFileWatch(options: {
    path: string;
    recursive?: unknown;
    watchId: string;
    onChange(event: { changedPaths: unknown }): void;
  }): Promise<WorkerExecutionHostWatch> {
    let closed = false;
    const closedDeferred = createDeferred<{
      reason: string;
      error?: unknown;
    }>();
    let unsubscribeChanged = (): void => {};
    let unsubscribeClosed = (): void => {};
    const close = (event: { reason: string; error?: unknown }): void => {
      if (closed) return;
      closed = true;
      unsubscribeChanged();
      unsubscribeClosed();
      closedDeferred.resolve(event);
    };
    unsubscribeChanged = this.mainRpcClient.subscribe(
      "fs-watch-changed",
      (event) => {
        if (!isRecord(event)) return;
        if (
          !closed &&
          event.hostId === this.id &&
          event.watchId === options.watchId
        ) {
          options.onChange({ changedPaths: event.changedPaths });
        }
      },
    );
    unsubscribeClosed = this.mainRpcClient.subscribe(
      "fs-watch-closed",
      (event) => {
        if (!isRecord(event)) return;
        if (event.hostId !== this.id || event.watchId !== options.watchId)
          return;
        close(
          event.reason === "watch-error"
            ? { reason: String(event.reason), error: event.error }
            : { reason: String(event.reason) },
        );
      },
    );
    try {
      const result = await this.mainRpcClient.request("fs-watch", {
        hostId: this.id,
        path: options.path,
        recursive: options.recursive,
        watchId: options.watchId,
      });
      return {
        path:
          isRecord(result) && typeof result.path === "string"
            ? result.path
            : options.path,
        closed: closedDeferred.promise,
        dispose: async () => {
          if (closed) return;
          close({ reason: "disposed" });
          await this.mainRpcClient.request("fs-unwatch", {
            hostId: this.id,
            watchId: options.watchId,
          });
        },
      };
    } catch (error) {
      close({ reason: "watch-error", error });
      throw error;
    }
  }
}

function createDeferred<T>(): Deferred<T> {
  let resolve: (value: T) => void = () => {};
  let reject: (error: unknown) => void = () => {};
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject };
}

function requireSpawnArgs(value: unknown): [string, string[]] {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    typeof value[0] !== "string"
  ) {
    throw Error("Execution host spawn options require args");
  }
  return [value[0], value.slice(1).map(String)];
}

function normalizeProcessEnv(value: unknown): NodeJS.ProcessEnv {
  const source = isRecord(value) ? value : process.env;
  return Object.fromEntries(
    Object.entries(source).flatMap(([key, entry]) =>
      entry == null ? [] : [[key, String(entry)]],
    ),
  );
}

function normalizeLocalSpawnCommand({
  args,
  command,
  cwd,
  env,
  runsInsideWsl,
}: {
  args: string[];
  command: string;
  cwd?: string;
  env: NodeJS.ProcessEnv;
  runsInsideWsl: boolean;
}): {
  args: string[];
  command: string;
  cwd?: string;
  env: NodeJS.ProcessEnv;
} {
  if (runsInsideWsl && process.platform === "win32") {
    return {
      command: "wsl.exe",
      args: [
        ...(cwd == null ? [] : ["--cd", windowsPathToWslPath(cwd)]),
        "--",
        "/usr/bin/bash",
        "-lc",
        shellQuoteCommand([command, ...args]),
      ],
      env,
    };
  }
  if (process.platform === "win32" && /\.(cmd|bat)$/i.test(command)) {
    return {
      command: env.ComSpec ?? env.comspec ?? "cmd.exe",
      args: ["/d", "/s", "/c", command, ...args],
      cwd,
      env,
    };
  }
  return { args, command, cwd, env };
}

function shellQuoteCommand(args: string[]): string {
  return args.map((arg) => `'${arg.replace(/'/g, `'\\''`)}'`).join(" ");
}

function writeChildStdin(
  stdin: NodeJS.WritableStream,
  chunk: unknown,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const data =
      chunk instanceof Uint8Array || typeof chunk === "string"
        ? chunk
        : Buffer.from(String(chunk));
    stdin.write(data, (error: Error | null | undefined) => {
      if (error != null) reject(error);
      else resolve();
    });
  });
}

function createControlledReadableStream(): ControlledReadableStream {
  let controller: ReadableStreamDefaultController<unknown> | null = null;
  let closed = false;
  return {
    stream: new ReadableStream({
      start(streamController) {
        controller = streamController;
      },
      cancel() {
        closed = true;
      },
    }),
    close() {
      if (closed) return;
      closed = true;
      controller?.close();
    },
    enqueue(chunk) {
      if (!closed) controller?.enqueue(chunk);
    },
    error(error) {
      if (closed) return;
      closed = true;
      controller?.error(error);
    },
  };
}

function readWslCodexHome(): string | null {
  const result = spawnSync(
    "wsl.exe",
    ["/usr/bin/env", "bash", "-lc", 'printf %s "${CODEX_HOME:-$HOME/.codex}"'],
    { encoding: "utf8" },
  );
  return result.status === 0 && result.stdout.trim().length > 0
    ? windowsPathForWslPath(result.stdout.trim())
    : null;
}

function windowsPathForWslPath(path: string): string {
  if (process.platform !== "win32") return path;
  if (isWindowsAbsolutePath(path) || isUncPath(path)) return path;
  const mntPath = path.match(/^\/mnt\/([a-zA-Z])\/(.*)$/);
  if (mntPath != null) {
    return `${mntPath[1].toUpperCase()}:\\${mntPath[2].replace(/\//g, "\\")}`;
  }
  if (!path.startsWith("/")) return path;
  const distro = getDefaultWslDistro();
  if (distro == null) return path;
  const normalized = path.replace(/^\/+/, "").replace(/\//g, "\\");
  return normalized.length === 0
    ? `\\\\wsl$\\${distro}\\`
    : `\\\\wsl$\\${distro}\\${normalized}`;
}

function windowsPathToWslPath(path: string): string {
  const drivePath = path.match(/^(?:\\\\\?\\)?([a-zA-Z]):[\\/](.*)$/);
  if (drivePath != null) {
    return `/mnt/${drivePath[1].toLowerCase()}/${drivePath[2].replace(/\\/g, "/")}`;
  }
  if (/^(\\\\|\/\/)(wsl\$|wsl\.localhost)/i.test(path)) {
    const parts = path
      .replace(/^((\\\\|\/\/)(wsl\$|wsl\.localhost)[\\/]+)/i, "")
      .split(/[\\/]/);
    parts.shift();
    const linuxPath = parts.join("/").replace(/\\/g, "/");
    return linuxPath.length === 0
      ? "/"
      : linuxPath.startsWith("/")
        ? linuxPath
        : `/${linuxPath}`;
  }
  return path.replace(/\\/g, "/");
}

function getDefaultWslDistro(): string | null {
  const result = spawnSync("wsl.exe", ["-l", "-q"], { encoding: "utf16le" });
  const output = result.stdout || "";
  return (
    output
      .split(/\r?\n/)
      .map((line) => line.replace(/\0/g, "").trim())
      .find((line) => line.length > 0) ?? null
  );
}

function isWindowsAbsolutePath(path: string): boolean {
  return /^(?:\\\\\?\\)?[a-zA-Z]:[\\/]/.test(path);
}

function isUncPath(path: string): boolean {
  return path.startsWith("\\\\") || path.startsWith("//");
}

function toReadableBody(
  contents: BodyInit | ReadableStream<unknown> | Uint8Array,
): BodyInit | ReadableStream<Uint8Array> {
  if (contents instanceof ReadableStream) {
    return contents as ReadableStream<Uint8Array>;
  }
  if (typeof Blob !== "undefined" && contents instanceof Blob) {
    return contents.stream();
  }
  if (typeof contents === "string") return contents;
  return readableStreamFromBytes(contents);
}

async function readBodyToUint8Array(
  body: BodyInit | ReadableStream<Uint8Array>,
): Promise<Uint8Array> {
  return new Uint8Array(await new Response(body).arrayBuffer());
}

function readableStreamFromBytes(bytes: unknown): ReadableStream<Uint8Array> {
  const data =
    bytes instanceof Uint8Array
      ? bytes
      : Array.isArray(bytes)
        ? new Uint8Array(bytes)
        : new Uint8Array();
  return new ReadableStream({
    start(controller) {
      controller.enqueue(data);
      controller.close();
    },
  });
}

function serializeRemoteMetadata(value: unknown): Record<string, unknown> {
  if (!isRecord(value)) return {};
  return {
    birthtimeMs: value.birthtimeMs,
    ctimeMs: value.ctimeMs,
    ino: value.ino,
    isDirectory: () => value.isDirectory === true,
    isFile: () => value.isFile === true,
    isSymbolicLink: () => value.isSymbolicLink === true,
    mtimeMs: value.mtimeMs,
    size: value.size,
  };
}

function serializeRemoteDirectoryEntry(
  value: unknown,
): Record<string, unknown> {
  if (!isRecord(value)) {
    return {
      name: "",
      isDirectory: () => false,
      isFile: () => false,
      isSymbolicLink: () => false,
    };
  }
  return {
    name: typeof value.name === "string" ? value.name : "",
    isDirectory: () => value.isDirectory === true,
    isFile: () => value.isFile === true,
    isSymbolicLink: () => value.isSymbolicLink === true,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
