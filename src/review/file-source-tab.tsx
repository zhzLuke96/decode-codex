// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Workspace file-source tab shell: loads file metadata, selects the appropriate
// preview renderer, and composes the breadcrumb/action header with the optional
// workspace file tree side panel.
import type { ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  READ_FILE_SAMPLE_MAX_FILE_BYTES,
  getArtifactImportPresentation,
  getResourcePreviewParseMode,
  getReviewPreviewKind,
  getUnsupportedPreviewType,
  shouldParseArtifactPreviewForImportKind,
} from "../appgen/publication-terms";
import type { FileContentKind } from "../appgen/publication-terms/resource-opener-types";
import { readFileContentSampleByteLimit } from "../runtime/publication-terms-runtime";
import { findMcpCapabilityFileViewerForPathInScope } from "../appgen/publication-terms/side-panel-tabs";
import { FilePathBreadcrumb } from "./file-path-breadcrumb";
import { FileSourceCodeView } from "./file-source-code-view";
import {
  FileSourceRichPreview,
  type RichPreviewKind,
} from "./file-source-rich-preview";
import { FileSourceSidePanel } from "./file-source-side-panel";
import { FileSourceHeaderActions } from "./file-source-header-actions";
import { FileSourceMcpResourceView } from "./file-source-mcp-resource-view";
import { FileSourceStatus, FileTooLargeView } from "./file-source-helpers";
import {
  UnsupportedFileTypeView,
  type UnsupportedFileKind,
} from "./unsupported-file-type-view";
import {
  SidePanelIcon,
  fileTreeOpenAtom,
  routeAtom,
  richPreviewEnabledAtom,
  setFileTreeOpen,
  useAtomValue,
  useFeatureGate,
  useHostQuery,
  useStore,
  workspaceRootAtom,
  workspaceRootToCwd,
} from "../boundaries/onboarding-commons-externals.facade";

const LOCAL_HOST_ID = "local";
const GIT_BLAME_FEATURE_GATE = "1420162012";

export function initFileSourceTabChunk(): void {}

export interface FileSourceTabState {
  scrollLeft?: number;
  scrollTop?: number;
}

export interface FileSourceTabProps {
  cwd?: string | null;
  headerActions?: ReactNode;
  hostId?: string;
  initialEndLine?: number | null;
  initialLine?: number | null;
  onSelectFile?: (path: string) => void;
  path: string | null;
  setTabState?: (
    updater: (prev: FileSourceTabState) => FileSourceTabState,
  ) => void;
  tabId?: string;
  tabState?: FileSourceTabState;
  workspaceRoot?: string | null;
}

export function FileSourceTab(props: FileSourceTabProps) {
  const hostId = props.hostId ?? LOCAL_HOST_ID;
  if (props.path == null) {
    return (
      <FileSourceTabShell
        cwd={props.cwd}
        hostId={hostId}
        onSelectFile={props.onSelectFile}
        path={null}
        workspaceRoot={props.workspaceRoot}
      >
        <FileSourceEmptyState />
      </FileSourceTabShell>
    );
  }

  return <LoadedFileSourceTab {...props} hostId={hostId} path={props.path} />;
}

type LoadedFileSourceTabProps = Omit<FileSourceTabProps, "hostId" | "path"> & {
  hostId: string;
  path: string;
};

interface ReadFileMetadata {
  contentKind?: FileContentKind;
  isFile?: boolean;
  sizeBytes?: number | null;
}

function LoadedFileSourceTab(props: LoadedFileSourceTabProps) {
  const {
    cwd,
    headerActions,
    hostId,
    initialEndLine,
    initialLine,
    onSelectFile,
    path,
    setTabState,
    tabId,
    tabState,
    workspaceRoot,
  } = props;
  const scope = useStore(routeAtom);
  const richPreviewEnabled = useAtomValue(richPreviewEnabledAtom);
  const gitBlameFeatureEnabled = useFeatureGate(GIT_BLAME_FEATURE_GATE);
  const { data, isError } = useHostQuery("read-file-metadata", {
    params: {
      contentSampleByteLimit: readFileContentSampleByteLimit,
      contentSampleMaxFileBytes: READ_FILE_SAMPLE_MAX_FILE_BYTES,
      hostId,
      path,
    },
  }) as {
    data?: ReadFileMetadata | null;
    isError?: boolean;
  };

  if (isError || (data != null && data.isFile === false)) {
    return <FileSourceStatus isError={true} isLoading={false} />;
  }
  if (data == null) {
    return <FileSourceStatus isError={false} isLoading={true} />;
  }

  const contentKind = data.contentKind;
  const artifactPresentation = getArtifactImportPresentation(path);
  const artifactPreviewAvailable =
    artifactPresentation != null &&
    shouldParseArtifactPreviewForImportKind(artifactPresentation.importKind);
  const previewKind = getReviewPreviewKind(path, contentKind);
  const previewMode = getResourcePreviewParseMode(path, contentKind);
  const unsupportedType = getUnsupportedPreviewType(path, contentKind);
  const mcpFileViewer = findMcpCapabilityFileViewerForPathInScope(
    scope,
    path,
    hostId,
  );
  const canUseMcpViewer = mcpFileViewer != null && initialLine == null;
  const canToggleRichPreview =
    (previewMode === "toggle" || canUseMcpViewer) && initialLine == null;

  let children: ReactNode;
  let showArtifactPreviewControl = false;
  let showGitBlameControl = false;
  let showRichPreviewControl = false;
  let showWordWrapControl = false;

  if (canUseMcpViewer && canToggleRichPreview && richPreviewEnabled) {
    showRichPreviewControl = true;
    children = (
      <FileSourceMcpResourceView
        fileViewer={mcpFileViewer}
        hostId={hostId}
        path={path}
      />
    );
  } else if (unsupportedType != null) {
    showRichPreviewControl = canUseMcpViewer;
    children = (
      <UnsupportedFileTypeView type={unsupportedType as UnsupportedFileKind} />
    );
  } else if (
    data.sizeBytes != null &&
    data.sizeBytes > READ_FILE_SAMPLE_MAX_FILE_BYTES
  ) {
    children = <FileTooLargeView sizeBytes={data.sizeBytes} />;
  } else if (
    previewKind != null &&
    (previewMode === "always" || (canToggleRichPreview && richPreviewEnabled))
  ) {
    showRichPreviewControl = canToggleRichPreview;
    children = (
      <FileSourceRichPreview
        gitBlameFeatureEnabled={gitBlameFeatureEnabled}
        hostId={hostId}
        path={path}
        previewKind={previewKind as RichPreviewKind}
      />
    );
  } else {
    showArtifactPreviewControl = artifactPreviewAvailable;
    showGitBlameControl = gitBlameFeatureEnabled;
    showRichPreviewControl = canToggleRichPreview;
    showWordWrapControl = true;
    children = (
      <FileSourceCodeView
        gitBlameFeatureEnabled={gitBlameFeatureEnabled}
        hostId={hostId}
        initialEndLine={initialEndLine}
        initialLine={initialLine}
        path={path}
        setTabState={setTabState}
        tabState={tabState}
      />
    );
  }

  return (
    <FileSourceTabShell
      cwd={cwd}
      headerActions={headerActions}
      hostId={hostId}
      onSelectFile={onSelectFile}
      path={path}
      showArtifactPreviewControl={showArtifactPreviewControl}
      showGitBlameControl={showGitBlameControl}
      showRichPreviewControl={showRichPreviewControl}
      showWordWrapControl={showWordWrapControl}
      tabId={tabId}
      workspaceRoot={workspaceRoot}
    >
      {children}
    </FileSourceTabShell>
  );
}

interface FileSourceTabShellProps {
  children: ReactNode;
  cwd?: string | null;
  headerActions?: ReactNode;
  hostId: string;
  onSelectFile?: (path: string) => void;
  path: string | null;
  showArtifactPreviewControl?: boolean;
  showGitBlameControl?: boolean;
  showRichPreviewControl?: boolean;
  showWordWrapControl?: boolean;
  tabId?: string;
  workspaceRoot?: string | null;
}

function FileSourceTabShell({
  children,
  cwd,
  headerActions,
  hostId,
  onSelectFile,
  path,
  showArtifactPreviewControl = false,
  showGitBlameControl = false,
  showRichPreviewControl = false,
  showWordWrapControl = false,
  tabId,
  workspaceRoot,
}: FileSourceTabShellProps) {
  const scope = useStore(routeAtom);
  const intl = useIntl();
  const currentWorkspaceRoot = useAtomValue(workspaceRootAtom);
  const fileTreeOpen = useAtomValue(fileTreeOpenAtom);
  const resolvedCwd =
    cwd ??
    (currentWorkspaceRoot == null
      ? null
      : workspaceRootToCwd(currentWorkspaceRoot));
  const hasOptionsMenu =
    path != null &&
    (showArtifactPreviewControl ||
      showGitBlameControl ||
      showRichPreviewControl ||
      showWordWrapControl);
  const fileTreeLabel = intl.formatMessage({
    id: "review.fileSource.browser.toggleFileTree",
    defaultMessage: "Toggle file tree",
    description:
      "Accessible label for a button that toggles the workspace file tree",
  });
  const fileTreeButtonColor = fileTreeOpen ? "secondary" : "ghost";
  const fileTreeRoot = workspaceRoot ?? resolvedCwd;

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      <FilePathBreadcrumb
        cwd={resolvedCwd}
        path={path}
        trailingContent={
          <>
            {headerActions}
            {path == null ? null : (
              <FileSourceHeaderActions
                cwd={resolvedCwd}
                hasOptionsMenu={hasOptionsMenu}
                hostId={hostId}
                path={path}
                showArtifactPreviewControl={showArtifactPreviewControl}
                showGitBlameControl={showGitBlameControl}
                showRichPreviewControl={showRichPreviewControl}
                showWordWrapControl={showWordWrapControl}
                tabId={tabId}
              />
            )}
            <Button
              aria-label={fileTreeLabel}
              className="ms-auto"
              color={fileTreeButtonColor}
              size="toolbar"
              uniform={true}
              onClick={() => {
                setFileTreeOpen(scope, !fileTreeOpen);
              }}
            >
              <SidePanelIcon aria-hidden={true} className="icon-sm" />
            </Button>
          </>
        }
      />
      <div className="flex min-h-0 flex-1">
        <div key={`${hostId}:${path}`} className="min-w-0 flex-1">
          {children}
        </div>
        {onSelectFile == null ? null : (
          <FileSourceSidePanel
            activeFilePath={path}
            autoFocusSearch={path == null}
            hostId={hostId}
            onSelectFile={onSelectFile}
            root={fileTreeRoot}
            type="workspace"
          />
        )}
      </div>
    </div>
  );
}

function FileSourceEmptyState() {
  return (
    <div className="flex h-full min-h-0 items-center justify-center p-6 text-center">
      <div className="flex max-w-72 flex-col items-center gap-2">
        <SidePanelIcon className="icon-lg text-token-text-secondary" />
        <h2 className="text-base font-semibold text-token-text-primary">
          <FormattedMessage
            id="review.fileSource.browser.heading"
            defaultMessage="Open file"
            description="Heading for an empty file tab that lets users choose a workspace file"
          />
        </h2>
        <p className="text-sm text-token-text-secondary">
          <FormattedMessage
            id="review.fileSource.browser.description"
            defaultMessage="Select a file from the workspace tree"
            description="Description for an empty file tab that lets users choose a workspace file"
          />
        </p>
      </div>
    </div>
  );
}
