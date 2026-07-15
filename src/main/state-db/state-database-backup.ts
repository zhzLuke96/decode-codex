// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { type Stats } from "node:fs";
import * as fsPromises from "node:fs/promises";
import * as path from "node:path";
import { app, dialog } from "electron";
import {
  STATE_DATABASE_DIALOG_LABELS,
  showStateDatabaseRebuiltDialog,
} from "./state-database-recovery";
import {
  RecoveryErrorPair,
  StateDatabaseRecoveryOptions,
} from "../workspace/desktop-runtime-types";

const STATE_DATABASE_BACKUP_DIRECTORY = "db-backups";

export function verifySqliteReady(database: unknown): void {
  const candidate = database as {
    prepare?(sql: string): {
      get(): Record<string, unknown> | undefined;
    };
  };
  if (typeof candidate.prepare !== "function") {
    throw Error("SQLite database handle does not expose prepare().");
  }
  if (
    typeof candidate.prepare("PRAGMA user_version").get()?.user_version !==
    "number"
  ) {
    throw Error("SQLite readiness query returned an unexpected result.");
  }
}

export function resolveRecoveryDatabasePath(
  databasePath: StateDatabaseRecoveryOptions["databasePath"],
  error: unknown,
): string | null {
  const value =
    typeof databasePath === "function" ? databasePath(error) : databasePath;
  return value != null &&
    (path.posix.isAbsolute(value) || path.win32.isAbsolute(value))
    ? value
    : null;
}

export async function showStateDatabaseAccessDialog(
  databasePath: string | null,
  error: unknown,
): Promise<keyof typeof STATE_DATABASE_DIALOG_LABELS> {
  const actions =
    databasePath == null
      ? (["retry", "quit"] as const)
      : (["retry", "recover", "quit"] as const);
  const response = await dialog.showMessageBox({
    type: "error",
    buttons: actions.map((action) => STATE_DATABASE_DIALOG_LABELS[action]),
    defaultId: 0,
    cancelId: actions.length - 1,
    message: `${app.getName()} cannot access its local database.`,
    detail: [
      "The app cannot finish launching until its SQLite database is accessible.",
      "",
      `Database path: ${databasePath ?? "unavailable in app-server startup error"}`,
      "",
      databasePath == null
        ? `Close other ${app.getName()} applications, then click Retry to check whether access has been restored.`
        : `Close other ${app.getName()} applications, then click Retry to check whether access has been restored. If the database cannot be opened, Back Up and Rebuild moves it aside so the app can create a fresh one.`,
      "",
      `Error: ${stateDatabaseErrorMessage(error)}`,
    ].join("\n"),
    noLink: true,
  });
  return actions[response.response] ?? "quit";
}

export async function backUpStateDatabaseFiles(
  databasePath: string,
): Promise<string> {
  const databaseDirectory = path.dirname(databasePath);
  const directoryStats = await statOrNull(databaseDirectory);
  if (directoryStats?.isFile())
    return backUpDatabaseDirectory(databaseDirectory);
  const backupDirectory =
    await createDatabaseBackupDirectory(databaseDirectory);
  for (const candidatePath of stateDatabaseFilePaths(databasePath)) {
    if (await pathExists(candidatePath)) {
      await fsPromises.rename(
        candidatePath,
        path.join(backupDirectory, path.basename(candidatePath)),
      );
    }
  }
  await showStateDatabaseRebuiltDialog(databasePath, backupDirectory);
  return backupDirectory;
}

async function backUpDatabaseDirectory(
  databaseDirectory: string,
): Promise<string> {
  const backupDirectory = await createUniqueDirectory(
    path.join(
      path.dirname(databaseDirectory),
      `${path.basename(databaseDirectory)}.${STATE_DATABASE_BACKUP_DIRECTORY}`,
    ),
  );
  await fsPromises.rename(
    databaseDirectory,
    path.join(backupDirectory, path.basename(databaseDirectory)),
  );
  await fsPromises.mkdir(databaseDirectory, {
    recursive: true,
  });
  await showStateDatabaseRebuiltDialog(databaseDirectory, backupDirectory);
  return backupDirectory;
}

function stateDatabaseFilePaths(databasePath: string): string[] {
  return [databasePath, `${databasePath}-wal`, `${databasePath}-shm`];
}

async function createDatabaseBackupDirectory(
  databaseDirectory: string,
): Promise<string> {
  return createUniqueDirectory(
    path.join(databaseDirectory, STATE_DATABASE_BACKUP_DIRECTORY),
  );
}

async function createUniqueDirectory(parentDirectory: string): Promise<string> {
  await fsPromises.mkdir(parentDirectory, {
    recursive: true,
  });
  for (let index = 0; ; index += 1) {
    const candidate = path.join(
      parentDirectory,
      `sqlite-${Math.floor(Date.now() / 1000)}-${index}`,
    );
    try {
      await fsPromises.mkdir(candidate, {
        recursive: false,
      });
      return candidate;
    } catch (error) {
      if (!hasNodeErrorCode(error, "EEXIST")) throw error;
    }
  }
}

async function pathExists(candidatePath: string): Promise<boolean> {
  try {
    await fsPromises.stat(candidatePath);
    return true;
  } catch (error) {
    if (hasNodeErrorCode(error, "ENOENT")) return false;
    throw error;
  }
}

export async function databasePathCanBeRecovered(
  databasePath: string,
): Promise<boolean> {
  if ((await statOrNull(path.dirname(databasePath)))?.isFile()) return true;
  return (await statOrNull(databasePath))?.isDirectory() ?? false;
}

async function statOrNull(candidatePath: string): Promise<Stats | null> {
  try {
    return await fsPromises.stat(candidatePath);
  } catch (error) {
    if (hasNodeErrorCode(error, "ENOENT")) return null;
    throw error;
  }
}

export function isCorruptStateDatabaseError(
  error: unknown,
  databasePath: string,
): boolean {
  const message = stateDatabaseErrorMessage(error)
    .replaceAll(databasePath, "")
    .toLowerCase();
  return (
    message.includes("database disk image is malformed") ||
    message.includes("file is not a database") ||
    message.includes("malformed") ||
    message.includes("sqlite_corrupt") ||
    message.includes("sqlite_notadb") ||
    message.includes("code: 11") ||
    message.includes("code: 26")
  );
}

export function stateDatabaseErrorMessage(error: unknown): string {
  if (isRecoveryErrorPair(error)) {
    return [
      stateDatabaseErrorMessage(error.originalError),
      "",
      `Recovery failed: ${stateDatabaseErrorMessage(error.recoveryError)}`,
    ].join("\n");
  }
  return error instanceof Error && error.message.length > 0
    ? error.message
    : String(error);
}

function isRecoveryErrorPair(error: unknown): error is RecoveryErrorPair {
  return (
    typeof error === "object" &&
    error != null &&
    "originalError" in error &&
    "recoveryError" in error
  );
}

function hasNodeErrorCode(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    error.code === code
  );
}
