// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Settings and global-state helpers shared by project hover card parts.
import {
  globalSettingKeys,
  normalizeWorkspacePath,
} from "../../boundaries/src-l0hb-mz-p";
import {
  getGlobalStateValue,
  initGlobalStateQueryRuntime,
  setGlobalStateValue,
  useGlobalStateQuery as useGlobalStateQueryRuntime,
} from "../global-state-runtime";
import { useHostConfigById } from "../host-config-runtime";
import {
  createPersistentSignal,
  getChunkModuleExports,
  initPersistentSignalRuntime,
} from "../shared-utility-runtime";
import { useRemoteHostConfigs as useSharedObjectRemoteHostConfigs } from "../shared-object-host-runtime";
import { toastSignal as toastControllerSignal } from "../toast-runtime";

export type ProjectWritableRoot = {
  kind?: "local";
  label?: string;
  path: string;
};

export type ProjectWritableRootsByProject = Record<
  string,
  ProjectWritableRoot[] | undefined
>;

export type ProjectWritableRootsDisplayOptions = {
  legacyRoot: string | null;
  projectId: string;
  projectWritableRoots: ProjectWritableRootsByProject;
};

export function parseProjectWritableRoots(
  value: unknown,
): ProjectWritableRootsByProject {
  if (!isRecord(value)) return {};

  const writableRoots: ProjectWritableRootsByProject = {};
  for (const [projectId, roots] of Object.entries(value)) {
    if (!Array.isArray(roots)) return {};

    const parsedRoots: ProjectWritableRoot[] = [];
    for (const root of roots) {
      if (!isProjectWritableRoot(root)) return {};
      parsedRoots.push({
        kind: "local",
        path: root.path,
        ...(root.label === undefined ? {} : { label: root.label }),
      });
    }
    writableRoots[projectId] = parsedRoots;
  }

  return writableRoots;
}

export function getProjectWritableRootsForDisplay(
  options: ProjectWritableRootsDisplayOptions,
): string[] {
  if (Object.hasOwn(options.projectWritableRoots, options.projectId)) {
    return (
      options.projectWritableRoots[options.projectId]?.map(
        (root) => root.path,
      ) ?? []
    );
  }

  return options.legacyRoot == null ? [] : [options.legacyRoot];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

function isProjectWritableRoot(value: unknown): value is ProjectWritableRoot {
  if (!isRecord(value)) return false;
  if (value.kind !== "local") return false;
  if (typeof value.path !== "string") return false;
  return value.label === undefined || typeof value.label === "string";
}

export function useRemoteHostConfigs(): unknown[] {
  return (useSharedObjectRemoteHostConfigs() ?? []) as unknown[];
}

export function getGlobalSettingValue<TData = unknown>(
  get: unknown,
  key: unknown,
): TData | undefined {
  return getGlobalStateValue<TData>(get, key);
}

export function readGlobalSetting<TData = unknown>(
  get: unknown,
  key: unknown,
): TData | undefined {
  return getGlobalSettingValue<TData>(get, key);
}

export async function setGlobalSettingValue(
  scope: unknown,
  key: unknown,
  value: unknown,
  options?: unknown,
): Promise<void> {
  await setGlobalStateValue(scope, key, value, options);
}

export async function persistGlobalSettingValue(
  scope: unknown,
  key: unknown,
  value: unknown,
  options?: unknown,
): Promise<void> {
  await setGlobalSettingValue(scope, key, value, options);
}

export function primeGlobalSettingValue(
  scope: unknown,
  key: unknown,
  value: unknown,
): void {
  void scope;
  void key;
  void value;
}

export function useGlobalStateQuery<TData = unknown>(
  key: unknown,
  options?: unknown,
) {
  return useGlobalStateQueryRuntime<TData>(key, options);
}

export function initGlobalSettingsRuntime(): void {
  initGlobalStateQueryRuntime();
}

export {
  createPersistentSignal,
  getChunkModuleExports,
  globalSettingKeys,
  initGlobalStateQueryRuntime,
  initPersistentSignalRuntime,
  normalizeWorkspacePath,
  toastControllerSignal,
  useHostConfigById,
};
