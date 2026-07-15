// Restored from ref/webview/assets/editor-diff-page-DhkTy3wR.js
// Semantic EditorDiffPage surface restored from the current ref chunk.
import type { ReactNode } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopedStore,
  currentAppInitialSharedCompatSlotUpperO as initCurrentSharedObjectRuntime,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
  currentAppInitialSharedCompatSlotLowerQLowerO as useRouteScopedValue,
  currentAppInitialSharedCompatSlotLowerTLowerR as normalizeCwdForDiff,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperALowerN as initPointerEventRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperCLowerF as parseUnifiedDiffFiles,
  worktreeNewThreadOrchestratorCompatSlotUpperSLowerF as initDiffRendererRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerFLowerF as diffViewModeSetting,
  worktreeNewThreadOrchestratorCompatSlotLowerHLowerF as richPreviewEnabledSetting,
  worktreeNewThreadOrchestratorCompatSlotLowerJLowerN as useDiffCommentProps,
  worktreeNewThreadOrchestratorCompatSlotLowerMLowerF as initDiffSettingsRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperELowerM as initButtonRuntime,
  worktreeNewThreadQueryCompatSlotUpperGLowerA as initRichPreviewIconRuntime,
  worktreeNewThreadQueryCompatSlotUpperKLowerA as RichPreviewEnabledIcon,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as Button,
  worktreeNewThreadQueryCompatSlotUpperWLowerA as RichPreviewDisabledIcon,
  worktreeNewThreadQueryCompatSlotLowerQLowerA as initTooltipRuntime,
  worktreeNewThreadQueryCompatSlotLowerXLowerP as initButtonTooltipRuntime,
  worktreeNewThreadQueryCompatSlotLowerYLowerP as Tooltip,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  reactRouterRouteScopeParentRuntime as initReactRouterRouteScopeRuntime,
  intlFormatDateTimeRuntime as initIntlDateTimeRuntime,
  useReactRouterLocationInvariant as useReactRouterLocation,
  reactRouterMember0297 as routeScopedStateStore,
  currentAppInitialSharedFunction0375 as useIntl,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotLowerDLowerN as initPullRequestRootsQueryRuntime,
  pullRequestNewThreadCompatSlotLowerOLowerN as workspaceRootsQuery,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotDollarLowerC as initFileDiffLayoutRuntime,
  appMainCurrentCompatSlotUpperBLowerT as summarizeParsedDiffs,
  appMainCurrentCompatSlotUpperQLowerC as UnifiedDiffIcon,
  appMainCurrentCompatSlotUpperVLowerT as initFileDiffRuntime,
  initOpenInBrowserRuntimeChunk as SplitDiffIcon,
  appMainCurrentCompatSlotLowerOLowerU as FileDiff,
  appMainCurrentCompatSlotLowerSLowerU as initFileDiffSupportRuntime,
  initComposeEventHandlersRuntime,
} from "../vendor/app-main-current-runtime/index";
import {
  initSegmentedToggleChunk,
  SegmentedToggle,
} from "../utils/segmented-toggle";

const MAX_AUTO_OPEN_FILES = 25;
const MAX_AUTO_OPEN_CHANGED_LINES = 2000;

type DiffViewMode = "unified" | "split";
type DiffViewToggleId = "left" | "right";

interface EditorDiffRouteState {
  conversationId?: string | null;
  cwd?: string;
  unifiedDiff?: string;
}

interface EditorDiffContentProps {
  conversationId: string | null;
  diffContent: string;
}

interface ParsedDiffStats {
  fileCount: number;
  linesAdded: number;
  linesDeleted: number;
}

interface WorkspaceRootsQueryResult {
  data?: {
    roots?: string[];
  };
}

interface DiffViewIconProps {
  className?: string;
}

interface EditorDiffRouteData {
  conversationId: string | null;
  diffContent: string;
}

interface EditorDiffRouteError {
  error: string;
}

type EditorDiffRouteResult = EditorDiffRouteData | EditorDiffRouteError;

const initEditorDiffPageRuntime = runOnce(() => {
  initCurrentSharedRuntime();
  initCurrentSharedObjectRuntime();
  initIntlDateTimeRuntime();
  initOpenAiNativeAppDefinition();
  initButtonRuntime();
  initSegmentedToggleChunk();
  initButtonTooltipRuntime();
  initComposeEventHandlersRuntime();
  initFileDiffLayoutRuntime();
  initTooltipRuntime();
  initRichPreviewIconRuntime();
  initReactRouterRouteScopeRuntime();
  initPullRequestRootsQueryRuntime();
  initFileDiffSupportRuntime();
  initFileDiffRuntime();
  initDiffSettingsRuntime();
  initDiffRendererRuntime();
  initPointerEventRuntime();
});

initEditorDiffPageRuntime();

function EditorDiffPage() {
  const routeDiff = useEditorDiffRouteData();

  if ("error" in routeDiff) {
    return (
      <div className="p-4 text-token-error-foreground">{routeDiff.error}</div>
    );
  }

  return (
    <EditorDiffContent
      diffContent={routeDiff.diffContent}
      conversationId={routeDiff.conversationId}
    />
  );
}

function EditorDiffContent({
  diffContent,
  conversationId,
}: EditorDiffContentProps) {
  const routeStore = useRouteScopedStore(routeScopedStateStore);
  const { commentProps } = useDiffCommentProps({
    conversationId,
    enablePullRequestComments: false,
  });
  const parsedDiffs = parseUnifiedDiffFiles(diffContent);
  const diffStats = summarizeParsedDiffs(parsedDiffs) as ParsedDiffStats;
  const diffViewMode = useRouteScopedValue(diffViewModeSetting) as DiffViewMode;
  const richPreviewEnabled = useRouteScopedValue(
    richPreviewEnabledSetting,
  ) as boolean;
  const intl = useIntl();
  const workspaceRootsResult = useRouteScopedValue(workspaceRootsQuery) as
    | WorkspaceRootsQueryResult
    | undefined;
  const cwd =
    (useReactRouterLocation().state as EditorDiffRouteState | undefined)?.cwd ||
    workspaceRootsResult?.data?.roots?.[0];

  const shouldOpenDiffsByDefault =
    diffStats.fileCount <= MAX_AUTO_OPEN_FILES &&
    diffStats.linesAdded + diffStats.linesDeleted <=
      MAX_AUTO_OPEN_CHANGED_LINES;

  const selectedDiffViewId: DiffViewToggleId =
    diffViewMode === "unified" ? "left" : "right";

  const handleDiffViewSelect = (selectedId: DiffViewToggleId) => {
    routeStore.set(
      diffViewModeSetting,
      selectedId === "left" ? "unified" : "split",
    );
  };

  const richPreviewLabel = intl.formatMessage({
    id: "codex.diffView.richPreviewToggle",
    defaultMessage: "Toggle rich preview",
    description: "Tooltip to toggle rich previews in the diff view",
  });

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between py-2 pr-2 pl-6">
        <DiffStatsSummary stats={diffStats} />
        <div className="flex items-center gap-1">
          <SegmentedToggle
            options={diffViewToggleOptions}
            selectedId={selectedDiffViewId}
            onSelect={handleDiffViewSelect}
            size="toolbar"
          />
          <Tooltip
            tooltipContent={
              <FormattedMessage
                id="codex.diffView.richPreviewToggle"
                defaultMessage="Toggle rich preview"
                description="Tooltip to toggle rich previews in the diff view"
              />
            }
          >
            <Button
              aria-label={richPreviewLabel}
              aria-pressed={richPreviewEnabled}
              color={richPreviewEnabled ? "ghostActive" : "ghost"}
              size="icon"
              onClick={() => {
                routeStore.set(richPreviewEnabledSetting, !richPreviewEnabled);
              }}
            >
              {richPreviewEnabled ? (
                <RichPreviewEnabledIcon className="icon-xs text-token-description-foreground" />
              ) : (
                <RichPreviewDisabledIcon className="icon-xs text-token-description-foreground" />
              )}
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0">
        {parsedDiffs.map((diff: unknown, diffIndex: number) => (
          <FileDiff
            key={diffIndex}
            diff={diff}
            hunkSeparators="line-info"
            viewType={diffViewMode}
            richPreviewEnabled={richPreviewEnabled}
            stickyHeader
            diffViewWrap={false}
            defaultOpen={shouldOpenDiffsByDefault}
            cwd={cwd == null ? undefined : normalizeCwdForDiff(cwd)}
            conversationId={conversationId}
            fullContentNextFallbackToDisk
            {...commentProps}
          />
        ))}
      </div>
    </div>
  );
}

function useEditorDiffRouteData(): EditorDiffRouteResult {
  const intl = useIntl();
  const location = useReactRouterLocation();
  const routeState = location.state as EditorDiffRouteState | undefined;

  if (routeState?.unifiedDiff && routeState.conversationId) {
    try {
      return {
        diffContent: routeState.unifiedDiff,
        conversationId: routeState.conversationId ?? null,
      };
    } catch {
      return {
        error: intl.formatMessage({
          id: "codex.diffView.failedToDecodeBase64Diff",
          defaultMessage: "Couldn’t load this diff",
          description:
            "Error message displayed when the diff cannot be decoded",
        }),
      };
    }
  }

  return {
    error: intl.formatMessage({
      id: "codex.diffView.noDiffData",
      defaultMessage: "No diff available",
      description: "Error message displayed when there is no diff data",
    }),
  };
}

function DiffStatsSummary({ stats }: { stats: ParsedDiffStats }) {
  const linesChanged = stats.linesAdded > 0 || stats.linesDeleted > 0;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-token-input-foreground">
        <FormattedMessage
          id="codex.diffView.filesChanged"
          defaultMessage="{fileCount, plural, one {# file changed} other {# files changed}}"
          description="Label for the number of files changed in DiffView"
          values={{ fileCount: stats.fileCount }}
        />
      </span>
      {linesChanged && (
        <div className="flex items-center gap-1">
          <span className="text-token-charts-green">
            <FormattedMessage
              id="codex.diffView.linesAdded"
              defaultMessage="+{linesAdded}"
              description="Label for lines added in DiffView"
              values={{ linesAdded: stats.linesAdded }}
            />
          </span>
          <span className="text-token-charts-red">
            <FormattedMessage
              id="codex.diffView.linesDeleted"
              defaultMessage="-{linesDeleted}"
              description="Label for lines deleted in DiffView"
              values={{ linesDeleted: stats.linesDeleted }}
            />
          </span>
        </div>
      )}
    </div>
  );
}

const diffViewToggleOptions: Array<{
  id: DiffViewToggleId;
  label: ReactNode;
}> = [
  {
    id: "left",
    label: <UnifiedDiffToggleIcon className="icon-xs" />,
  },
  {
    id: "right",
    label: <SplitDiffToggleIcon className="icon-xs" />,
  },
];

function UnifiedDiffToggleIcon({ className }: DiffViewIconProps) {
  return (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="codex.diffView.switchToUnified"
          defaultMessage="Switch to unified diff"
          description="Tooltip to switch to unified diff view"
        />
      }
    >
      <UnifiedDiffIcon className={className} />
    </Tooltip>
  );
}

function SplitDiffToggleIcon({ className }: DiffViewIconProps) {
  return (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="codex.diffView.switchToUnified"
          defaultMessage="Switch to unified diff"
          description="Tooltip to switch to unified diff view"
        />
      }
    >
      <SplitDiffIcon className={className} />
    </Tooltip>
  );
}

EditorDiffPage.displayName = "EditorDiffPage";
DiffStatsSummary.displayName = "DiffStatsSummary";
UnifiedDiffToggleIcon.displayName = "UnifiedDiffToggleIcon";
SplitDiffToggleIcon.displayName = "SplitDiffToggleIcon";

export { EditorDiffPage };
