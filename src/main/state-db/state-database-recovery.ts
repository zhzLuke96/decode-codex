// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { app, dialog } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  backUpStateDatabaseFiles,
  databasePathCanBeRecovered,
  isCorruptStateDatabaseError,
  resolveRecoveryDatabasePath,
  showStateDatabaseAccessDialog,
  stateDatabaseErrorMessage,
  verifySqliteReady,
} from "./state-database-backup";
import {
  BrowserWindowLike,
  StateDatabaseRecoveryOptions,
} from "../workspace/desktop-runtime-types";

export const STATE_DATABASE_DIALOG_LABELS = {
  retry: "Retry",
  recover: "Back Up and Rebuild",
  quit: "Quit",
} as const;

export async function verifyStateDatabaseAvailable(): Promise<boolean> {
  const openSqliteDatabase = sharedRuntime.openDesktopStateDatabase as
    | (() => unknown)
    | undefined;
  const database = openSqliteDatabase?.();
  if (database == null) {
    throw Error("SQLite is only available in the Electron app.");
  }
  verifySqliteReady(database);
  return true;
}

export function extractStateDatabasePathFromError(
  error: unknown,
): string | null {
  const message = error instanceof Error ? error.message : String(error);
  return (
    /failed to initialize sqlite state db at (.*?): /.exec(message)?.[1] ?? null
  );
}

export async function recoverStateDatabaseAccess({
  databasePath,
  open,
}: {
  databasePath?: string | ((error: unknown) => string | null);
  open(): void | Promise<void>;
}): Promise<boolean> {
  const pathFromError =
    databasePath ??
    ((error: unknown) => extractStateDatabasePathFromError(error));
  return openStateDatabaseWithRecovery({
    databasePath: pathFromError,
    open,
  });
}

export async function openStateDatabaseWithRecovery({
  databasePath,
  onBackfillWait,
  open,
  shouldHandleError = () => true,
}: StateDatabaseRecoveryOptions): Promise<boolean> {
  const attemptedRecoveryPaths = new Set<string>();
  let waitedForBackfill = false;
  for (;;) {
    try {
      await open();
      return true;
    } catch (error) {
      if (!shouldHandleError(error)) throw error;
      if (
        !waitedForBackfill &&
        stateDatabaseErrorMessage(error)
          .toLowerCase()
          .includes("timed out waiting for state db backfill")
      ) {
        waitedForBackfill = true;
        await onBackfillWait?.();
        continue;
      }
      const resolvedDatabasePath = resolveRecoveryDatabasePath(
        databasePath,
        error,
      );
      let displayError: unknown = error;
      if (
        resolvedDatabasePath != null &&
        !attemptedRecoveryPaths.has(resolvedDatabasePath) &&
        (isCorruptStateDatabaseError(error, resolvedDatabasePath) ||
          (await databasePathCanBeRecovered(resolvedDatabasePath)))
      ) {
        attemptedRecoveryPaths.add(resolvedDatabasePath);
        try {
          await backUpStateDatabaseFiles(resolvedDatabasePath);
          continue;
        } catch (recoveryError) {
          displayError = {
            originalError: error,
            recoveryError,
          };
        }
      }
      for (;;) {
        const action = await showStateDatabaseAccessDialog(
          resolvedDatabasePath,
          displayError,
        );
        if (action === "retry") break;
        if (action === "recover" && resolvedDatabasePath != null) {
          try {
            await backUpStateDatabaseFiles(resolvedDatabasePath);
            break;
          } catch (recoveryError) {
            displayError = {
              originalError: displayError,
              recoveryError,
            };
            continue;
          }
        }
        app.quit();
        return false;
      }
    }
  }
}

export async function showStateDatabaseRebuiltDialog(
  databasePath: string,
  backupDirectory: string,
  ownerWindow?: BrowserWindowLike | null,
): Promise<void> {
  const options = {
    type: "info" as const,
    buttons: ["OK"],
    defaultId: 0,
    cancelId: 0,
    message: `${app.getName()} rebuilt its local database.`,
    detail: [
      "Codex detected a damaged local database, moved it into a backup folder, and will continue startup with a fresh database.",
      "",
      `Database path: ${databasePath}`,
      "",
      `Backup folder: ${backupDirectory}`,
    ].join("\n"),
    noLink: true,
  };
  if (ownerWindow == null || ownerWindow.isDestroyed()) {
    await dialog.showMessageBox(options);
    return;
  }
  await dialog.showMessageBox(ownerWindow as never, options);
}
