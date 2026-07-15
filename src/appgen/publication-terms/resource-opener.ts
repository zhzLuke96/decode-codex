// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Workspace/file opening policy used by local conversation outputs and project sources.
import { once } from "../../runtime/commonjs-interop";
import {
  initArtifactPreviewRuntime,
  initFileTypeDetectionHelpers,
  initOpenFileOutcomeEventRuntime,
  initVscodeApiBridge,
  isAbsoluteOrWindowsPath,
  isRemoteHostConfig,
  isUrlLikePath,
  readFileContentSampleByteLimit,
  resolveWorkspacePathFromCwd,
  sendHostRequest,
} from "../../runtime/publication-terms-runtime";
import {
  findMatchingMcpCapabilityFileViewer,
  mcpCapabilityFileViewerState,
} from "./mcp-file-viewers";
import { logOpenOutcome, shouldUseExternalFileManager } from "./open-outcome";
import {
  getPublicationTermsSidePanelHandler,
  initPublicationTermsHandlerRegistryChunk,
} from "./handler-registry";
import type {
  FileContentKind,
  HostConfigForResourceOpen,
  OpenFileRequest,
  ReadFileMetadata,
  ScopeWithState,
  WorkspaceResourceOpenRequest,
} from "./resource-opener-types";

const READ_FILE_SAMPLE_MAX_FILE_BYTES = 10 * 1024 * 1024;

export function openWorkspaceResource({
  scope,
  appPath,
  artifactNavigationTarget,
  browserSidebarEnabled = false,
  column,
  cwd,
  endLine,
  hostConfig,
  hostId,
  icon,
  isPreview,
  line,
  modifiedClick = false,
  onBeforeOpenSidePanelTab,
  openFile = sendOpenFileRequest,
  openInSidePanel = false,
  openMode,
  path,
  persistPreferredTargetPath,
  target,
  title,
}: WorkspaceResourceOpenRequest): void {
  const openFileRequest: OpenFileRequest = {
    path,
    cwd,
    target,
    appPath,
    line,
    column,
    openMode,
    persistPreferredTargetPath,
    hostId,
  };

  if (
    target != null ||
    openMode === "workspace" ||
    persistPreferredTargetPath != null
  ) {
    openFile(openFileRequest);
    return;
  }

  if (
    !modifiedClick &&
    shouldOpenFileUrlThroughWorkspace({
      browserSidebarEnabled,
      hostConfig,
      path,
    })
  ) {
    openFile({ path, cwd, hostId });
    return;
  }

  if (scope != null && openInSidePanel) {
    const openSidePanel = getPublicationTermsSidePanelHandler();
    if (openSidePanel == null) {
      openFile(openFileRequest);
      return;
    }

    const absolutePath =
      cwd == null ? path : resolveWorkspacePathFromCwd(cwd, path);
    const localHostConfig =
      hostConfig != null && !isRemoteHostConfig(hostConfig) ? hostConfig : null;
    const hasMcpCapabilityFileViewer =
      line == null &&
      endLine == null &&
      getMatchingMcpCapabilityFileViewer(scope, absolutePath, hostId) != null;
    const openSidePanelTarget = () => {
      onBeforeOpenSidePanelTab?.(scope);
      return openSidePanel(scope, absolutePath, {
        artifactNavigationTarget,
        hostId: hostId ?? undefined,
        line,
        endLine,
        icon,
        isPreview,
        title,
      });
    };
    const openForContentKind = (contentKind?: FileContentKind) => {
      if (
        shouldUseExternalFileManager({
          contentKind,
          hasMcpCapabilityFileViewer,
          hostConfig,
          modifiedClick,
          path,
        })
      ) {
        logOpenOutcome(scope, {
          contentKind,
          hasMcpCapabilityFileViewer,
          hostConfig,
          modifiedClick,
          path,
          windowType: "electron",
        });
        openFile({ ...openFileRequest, target: "fileManager" });
        return;
      }

      logOpenOutcome(scope, {
        contentKind,
        hasMcpCapabilityFileViewer,
        hostConfig,
        modifiedClick,
        openedSidePanelTarget: openSidePanelTarget(),
        path,
        windowType: "electron",
      });
    };

    if (
      localHostConfig != null &&
      line == null &&
      column == null &&
      endLine == null &&
      !isUrlLikePath(path) &&
      isAbsoluteOrWindowsPath(absolutePath)
    ) {
      void readFileMetadata({
        hostId: hostId ?? localHostConfig.id,
        path: absolutePath,
      })
        .then((metadata) => {
          if (metadata.isFile) {
            openForContentKind(metadata.contentKind);
            return;
          }
          openFile({ ...openFileRequest, target: "fileManager" });
        })
        .catch(() => {
          openForContentKind();
        });
      return;
    }

    openForContentKind();
    return;
  }

  openFile(openFileRequest);
}

function sendOpenFileRequest(params: OpenFileRequest) {
  return sendHostRequest("open-file", { params });
}

function shouldOpenFileUrlThroughWorkspace({
  browserSidebarEnabled,
  hostConfig,
  path,
}: {
  browserSidebarEnabled: boolean;
  hostConfig?: HostConfigForResourceOpen | null;
  path: string;
}) {
  return (
    browserSidebarEnabled &&
    hostConfig != null &&
    !isRemoteHostConfig(hostConfig) &&
    isUrlLikePath(path)
  );
}

function getMatchingMcpCapabilityFileViewer(
  scope: unknown,
  path: string,
  hostId: string | null | undefined,
) {
  const stateScope = scope as ScopeWithState;
  if (typeof stateScope.get !== "function") return null;

  try {
    const fileViewers = stateScope.get<unknown[] | null | undefined>(
      mcpCapabilityFileViewerState,
      hostId ?? "local",
    );
    return findMatchingMcpCapabilityFileViewer(path, fileViewers ?? []);
  } catch {
    return null;
  }
}

function readFileMetadata({
  hostId,
  path,
}: {
  hostId?: string | null;
  path: string;
}) {
  return sendHostRequest("read-file-metadata", {
    params: {
      contentSampleByteLimit: readFileContentSampleByteLimit,
      contentSampleMaxFileBytes: READ_FILE_SAMPLE_MAX_FILE_BYTES,
      hostId,
      path,
    },
  }) as Promise<ReadFileMetadata>;
}

export const initWorkspaceResourceOpenerChunk = once(() => {
  initOpenFileOutcomeEventRuntime();
  initArtifactPreviewRuntime();
  initVscodeApiBridge();
  initFileTypeDetectionHelpers();
  initPublicationTermsHandlerRegistryChunk();
});
