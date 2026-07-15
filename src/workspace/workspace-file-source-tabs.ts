// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Workspace-file tab identity helpers plus the atom + sync routine that keep the
// host's "open review file source tabs" list in step with the open editor tabs.
import {
  appStoreScope,
  createWritableSignalAtom,
  dispatchHostRequest,
  collectWorkspaceFileTabDescriptors,
  activeConversationCwdAtom,
  normalizePath,
} from "../boundaries/onboarding-commons-externals.facade";
import { READ_FILE_SAMPLE_MAX_FILE_BYTES } from "../appgen/publication-terms";
import { createQueryKey } from "../runtime/app-server-mutation-runtime";
import { readFileContentSampleByteLimit } from "../runtime/publication-terms-runtime";

export const workspaceFileTabKindPrefix = "workspaceFile:";

export function initWorkspaceFileTabKindChunk(): void {}

export interface WorkspaceFileTabTarget {
  hostId: string;
  path: string;
}

export interface WorkspaceFileTabDescriptor {
  kind?: string;
  props: Record<string, unknown>;
}

export interface OpenWorkspaceFile {
  hostId: string;
  path: string;
  refreshMode: "auto" | "manual";
}

export function isManualRefreshArtifactType(artifactType: unknown): boolean {
  return (
    artifactType === "document" ||
    artifactType === "slides" ||
    artifactType === "spreadsheet" ||
    artifactType === "pdf"
  );
}

export function parseWorkspaceFileTab(
  descriptor: WorkspaceFileTabDescriptor,
): OpenWorkspaceFile | null {
  if (!descriptor.kind?.startsWith("workspaceFile:")) return null;
  const { props } = descriptor;
  if (
    !("hostId" in props) ||
    typeof props.hostId !== "string" ||
    !("path" in props) ||
    typeof props.path !== "string"
  ) {
    return null;
  }
  const manual =
    "artifactType" in props && isManualRefreshArtifactType(props.artifactType);
  return {
    hostId: props.hostId,
    path: props.path,
    refreshMode: manual ? "manual" : "auto",
  };
}

export function collectOpenWorkspaceFiles(
  descriptors: WorkspaceFileTabDescriptor[],
): OpenWorkspaceFile[] {
  return descriptors.flatMap((descriptor) => {
    const parsed = parseWorkspaceFileTab(descriptor);
    return parsed == null ? [] : [parsed];
  });
}

export function workspaceFileKey({ hostId, path }: WorkspaceFileTabTarget) {
  return `${hostId}\0${path}`;
}

export const openReviewFileSourceTabsAtom = createWritableSignalAtom(
  appStoreScope,
  () => false,
);

export interface WorkspaceFileManualRefreshScope {
  set(atom: unknown, key: string, value: boolean): void;
}

export function setWorkspaceFileManualRefreshPending(
  scope: WorkspaceFileManualRefreshScope,
  target: WorkspaceFileTabTarget,
): void {
  scope.set(openReviewFileSourceTabsAtom, workspaceFileKey(target), true);
}

export function clearWorkspaceFileManualRefreshPending(
  scope: WorkspaceFileManualRefreshScope,
  target: WorkspaceFileTabTarget,
): void {
  scope.set(openReviewFileSourceTabsAtom, workspaceFileKey(target), false);
}

export interface WorkspaceFileQueryClient {
  refetchQueries(
    filters: {
      exact: true;
      queryKey: readonly unknown[];
      type: "all";
    },
    options?: { throwOnError?: boolean },
  ): Promise<unknown> | unknown;
}

export interface RefetchOpenWorkspaceFileQueriesOptions {
  cacheKey?: unknown[] | unknown;
  openFiles: WorkspaceFileTabTarget[];
  queryClient: WorkspaceFileQueryClient;
  throwOnError?: boolean;
}

export async function refetchOpenWorkspaceFileQueries({
  cacheKey,
  openFiles,
  queryClient,
  throwOnError = false,
}: RefetchOpenWorkspaceFileQueriesOptions): Promise<void> {
  await Promise.all(
    openFiles
      .flatMap(({ hostId, path }) => [
        createQueryKey(
          "read-file-metadata",
          {
            contentSampleByteLimit: readFileContentSampleByteLimit,
            contentSampleMaxFileBytes: READ_FILE_SAMPLE_MAX_FILE_BYTES,
            hostId,
            path,
          },
          cacheKey,
        ),
        createQueryKey("read-file", { hostId, path }, cacheKey),
        createQueryKey("read-file", { path, hostId }, cacheKey),
        createQueryKey("read-file-binary", { path, hostId }, cacheKey),
        createQueryKey("read-file-binary", { hostId, path }, cacheKey),
        createQueryKey("compile-latex-artifact", { path, hostId }, cacheKey),
        createQueryKey("compile-latex-artifact", { hostId, path }, cacheKey),
      ])
      .map((queryKey) =>
        queryClient.refetchQueries(
          { exact: true, queryKey, type: "all" },
          { throwOnError },
        ),
      ),
  );
}

export function initWorkspaceFileSourceTabsChunk(): void {}

interface RouteScope {
  value: {
    routeKind:
      | "home"
      | "new-thread-panel"
      | "client-local-thread"
      | "local-thread"
      | "remote-thread"
      | "chatgpt-thread"
      | "other";
    conversationId?: string;
  };
  get(signal: unknown): unknown;
}

export function resolveActiveRouteCwd(scope: RouteScope): string | null {
  switch (scope.value.routeKind) {
    case "home":
    case "new-thread-panel":
    case "client-local-thread":
    case "local-thread":
    case "remote-thread": {
      const cwd = scope.get(activeConversationCwdAtom);
      return cwd == null ? null : normalizePath(cwd as string);
    }
    case "chatgpt-thread":
    case "other":
      return null;
  }
}

export function syncOpenReviewFileSourceTabs(
  scope: RouteScope,
  options: { excludeTab?: { panelId: unknown; tabId: string } } = {},
) {
  if (scope.value.routeKind === "local-thread") {
    dispatchHostRequest("set-open-review-file-source-tabs", {
      conversationId: scope.value.conversationId,
      openFiles: collectOpenWorkspaceFiles(
        collectWorkspaceFileTabDescriptors(scope, options),
      ),
    });
  }
}
