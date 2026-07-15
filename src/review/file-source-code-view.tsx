// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Code-view renderer for a workspace file: loads file contents, then renders the
// diff/source renderer with line selection, inline comment drafting, git-blame
// and file-change gutters, theme handling, in-page search, and scroll restore.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useIntl } from "../vendor/react-intl";
import {
  buildFileChangeMarkerMap,
  renderFileChangeGutter,
  FILE_CHANGE_GUTTER_CSS,
} from "./file-change-gutter";
import {
  renderFileBlameGutter,
  FILE_BLAME_GUTTER_CSS,
} from "./file-blame-gutter";
import { createFileSourceSearchProvider } from "./file-source-search-adapter";
import { usePullRequestComments } from "./use-pull-request-comments";
import {
  useStore,
  useAtomValue,
  routeAtom,
  workspaceRootAtom,
  workspaceRootToCwd,
  gitBlameEnabledAtom,
  reviewSourceAtom,
  wordWrapEnabledAtom,
  reviewReserveBottomPaddingAtom,
  reviewBottomPadding,
  useHostQuery,
  useHostKey,
  useThreadQuery,
  threadDiffByPathAtom,
  useWindowZoom,
  useReviewSearchScrollHandler,
  parseFileSourceMetrics,
  fileSourceMetricsEqual,
  useMeasuredSizeCallback,
  useScopedGitQuery,
  Durations,
  resolveColorScheme,
  useThemePreference,
  getThreadId,
  createEphemeralConversationId,
  getLocalConversationId,
  useSetting,
  SettingKeys,
  useIsDarkTheme,
  resolveCodeTheme,
  prefetchCodeThemes,
  detectFileLanguage,
  stableHashSegment,
  useReviewCommentAnnotations,
  toLineAnnotations,
  openFileAtLine,
  buildAnnotationKey,
  toCommentAnnotationInput,
  findLineNumberFromEventPath,
  openExternalLink,
  useStableEventCallback,
  getScrollableElement,
  restoreScrollTop,
  restoreScrollLeft,
  setFocusedReviewPane,
  copyTextToClipboard,
  CodeViewerChrome,
  FileSourceHoverContext,
  FileSourceHoverController,
  SourceSearchController,
  FileSourceRenderBoundary,
  DiffSourceRenderer,
  FileSourceStatus,
} from "../boundaries/onboarding-commons-externals.facade";

const FILE_SOURCE_GUTTER_CSS = `${FILE_BLAME_GUTTER_CSS}${FILE_CHANGE_GUTTER_CSS}`;

interface FileSourceMetrics {
  lineHeight: number;
  spacing: number;
}

interface LineSelection {
  start: number;
  end: number;
}

interface TabScrollState {
  scrollLeft?: number;
  scrollTop?: number;
}

export interface FileSourceCodeViewProps {
  gitBlameFeatureEnabled: boolean;
  hostId: string;
  initialEndLine?: number | null;
  initialLine?: number | null;
  path: string;
  setTabState?: (updater: (state: TabScrollState) => TabScrollState) => void;
  tabState?: TabScrollState;
}

export function FileSourceCodeView(props: FileSourceCodeViewProps) {
  const {
    gitBlameFeatureEnabled,
    hostId,
    initialEndLine,
    initialLine,
    path,
    setTabState,
    tabState,
  } = props;
  const { data, isError, isLoading } = useHostQuery("read-file", {
    params: { hostId, path },
  });
  if (data == null) {
    return <FileSourceStatus isError={isError} isLoading={isLoading} />;
  }
  return (
    <FileSourceCodeViewer
      contents={data.contents}
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

interface FileSourceCodeViewerProps extends FileSourceCodeViewProps {
  contents: string;
}

function FileSourceCodeViewer(props: FileSourceCodeViewerProps) {
  const {
    contents,
    gitBlameFeatureEnabled,
    hostId,
    initialEndLine,
    initialLine,
    path,
    setTabState,
    tabState,
  } = props;

  const scope = useStore(routeAtom);
  const intl = useIntl();
  const workspaceRoot = useAtomValue(workspaceRootAtom);
  const cwd = workspaceRoot == null ? null : workspaceRootToCwd(workspaceRoot);
  const isGitBlameEnabled = useAtomValue(gitBlameEnabledAtom);
  const showBlame = gitBlameFeatureEnabled && isGitBlameEnabled;
  const hostKey = useHostKey(hostId);
  const fileDiffQuery = useThreadQuery(threadDiffByPathAtom, path);
  const reserveBottomPadding = useAtomValue(reviewReserveBottomPaddingAtom);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hasRestoredScrollRef = useRef(false);
  const [hoverController] = useState(() => new FileSourceHoverController());
  const windowZoom = useWindowZoom();
  const [metrics, setMetrics] = useState<FileSourceMetrics | null>(null);
  const [expandedBlame, setExpandedBlame] = useState<{
    path: string;
    lineNumber: number;
  } | null>(null);
  const handleReviewSearchScroll = useReviewSearchScrollHandler({ path });

  const applyMetrics = useCallback((element: HTMLElement | null) => {
    if (element == null) return;
    const next = parseFileSourceMetrics(element);
    setMetrics((current) =>
      current != null && fileSourceMetricsEqual(current, next) ? current : next,
    );
  }, []);
  const observeMetrics = useMeasuredSizeCallback(
    (_entry: unknown, element: HTMLElement) => {
      applyMetrics(element);
    },
  );
  const metricsProbeRef = useCallback(
    (element: HTMLElement | null) => {
      observeMetrics(element);
      applyMetrics(element);
    },
    [observeMetrics, applyMetrics],
  );

  const { data: blameQueryData } = useScopedGitQuery(
    cwd,
    hostKey,
    "blame-file",
    (host: { root: string }) => ({
      cwd: cwd ?? workspaceRootToCwd(host.root),
      operationSource: "review_model",
      path,
    }),
    "review_model",
    { enabled: showBlame && cwd != null, staleTime: Durations.FIVE_SECONDS },
  );
  const blameData =
    showBlame && blameQueryData?.type === "success" ? blameQueryData : null;
  const blameLinesByNumber = useMemo(() => {
    if (blameData == null) return null;
    const byNumber = new Map<number, unknown>();
    for (const line of blameData.lines) byNumber.set(line.lineNumber, line);
    return byNumber as Map<number, never>;
  }, [blameData]);
  const repositoryWebUrl = blameData?.repositoryWebUrl ?? null;
  const fileChangeMarkers = useMemo(
    () => buildFileChangeMarkerMap(fileDiffQuery?.diff ?? null),
    [fileDiffQuery?.diff],
  );
  const expandedBlameLineNumber =
    expandedBlame?.path === path ? expandedBlame.lineNumber : null;
  const pendingCommentLineRef = useRef<number | null>(null);
  const hoveredLineRef = useRef<{ lineNumber: number } | null>(null);
  const colorScheme = resolveColorScheme(useThemePreference());
  const conversationId =
    getThreadId(scope.value) ??
    createEphemeralConversationId({ entrypoint: "home" });
  const { commentProps } = usePullRequestComments({
    conversationId,
    enablePullRequestComments: useAtomValue(reviewSourceAtom) !== "last-turn",
    localConversationId: getLocalConversationId(scope.value),
  });

  const initialSelection: LineSelection | null =
    initialLine == null
      ? null
      : { end: initialEndLine ?? initialLine, start: initialLine };
  const selectionKey = `${path}:${initialLine ?? ""}:${initialEndLine ?? ""}`;
  const [selectionOverride, setSelectionOverride] = useState<{
    key: string;
    lines: LineSelection | null;
  } | null>(null);
  const selectedLines =
    selectionOverride?.key === selectionKey
      ? selectionOverride.lines
      : initialSelection;

  const isWordWrapEnabled = useAtomValue(wordWrapEnabledAtom);
  const lightCodeTheme = useSetting(SettingKeys.lightCodeThemeId);
  const darkCodeTheme = useSetting(SettingKeys.darkCodeThemeId);
  const isDarkTheme = useIsDarkTheme();
  const codeTheme =
    colorScheme === "light"
      ? resolveCodeTheme(lightCodeTheme, "light")
      : resolveCodeTheme(darkCodeTheme, "dark");
  prefetchCodeThemes(undefined);

  const searchProvider = useMemo(
    () =>
      createFileSourceSearchProvider({
        contents,
        getFileContainer: () => scrollContainerRef.current,
        path,
        windowZoom,
      }),
    [contents, path, windowZoom],
  );
  const sourceFile = useMemo(() => {
    const lang = detectFileLanguage(path);
    return {
      cacheKey: `review-file-source:${stableHashSegment(hostId)}:${stableHashSegment(
        path,
      )}:${stableHashSegment(contents)}`,
      contents,
      name: path,
      lang,
    };
  }, [contents, hostId, path]);

  const {
    annotations,
    annotationKeys,
    addDraftComment,
    renderCommentAnnotation,
  } = useReviewCommentAnnotations({
    diffPath: path,
    workspaceRoot: workspaceRoot ?? undefined,
    onSelectionClear: () => {
      setSelectionOverride({ key: selectionKey, lines: null });
    },
    conversationId,
    ...commentProps,
  });
  const lineAnnotations = useMemo(
    () => toLineAnnotations(annotations),
    [annotations],
  );

  function clearHoveredLine() {
    hoveredLineRef.current = null;
  }
  function handleLineClick({
    event,
    lineNumber,
  }: {
    event: { metaKey: boolean; ctrlKey: boolean };
    lineNumber: number;
  }) {
    if (event.metaKey || event.ctrlKey) {
      openFileAtLine({ cwd, hostId, line: lineNumber, path });
    }
  }
  function addCommentDraft(lineNumber: number, startLine?: number) {
    if (!annotationKeys.has(buildAnnotationKey("additions", lineNumber))) {
      addDraftComment({
        side: "additions",
        lineNumber,
        ...(startLine != null && startLine !== lineNumber ? { startLine } : {}),
      });
    }
  }
  function handleGutterUtilityClick(selection: LineSelection) {
    const lastLine = Math.max(selection.start, selection.end);
    setSelectionOverride({ key: selectionKey, lines: selection });
    addCommentDraft(lastLine, Math.min(selection.start, selection.end));
  }
  function requestChanges() {
    const lineNumber =
      pendingCommentLineRef.current ?? hoveredLineRef.current?.lineNumber;
    pendingCommentLineRef.current = null;
    if (lineNumber != null) addCommentDraft(lineNumber);
  }
  function renderAnnotation(annotation: unknown) {
    return renderCommentAnnotation(toCommentAnnotationInput(annotation));
  }
  function handleContextMenu(event: React.MouseEvent) {
    pendingCommentLineRef.current = findLineNumberFromEventPath(
      typeof event.nativeEvent.composedPath === "function"
        ? event.nativeEvent.composedPath()
        : [event.target],
    );
  }

  const renderBlame = useCallback(
    (element: Element) => {
      renderFileBlameGutter(
        element,
        blameLinesByNumber,
        repositoryWebUrl,
        expandedBlameLineNumber,
        {
          author: intl.formatMessage({
            id: "review.fileSource.gitBlame.tooltip.author",
            defaultMessage: "Author",
            description: "Label for the author row in the git blame tooltip",
          }),
          commit: intl.formatMessage({
            id: "review.fileSource.gitBlame.tooltip.commit",
            defaultMessage: "Commit",
            description: "Label for the commit row in the git blame tooltip",
          }),
          date: intl.formatMessage({
            id: "review.fileSource.gitBlame.tooltip.date",
            defaultMessage: "Date",
            description: "Label for the date row in the git blame tooltip",
          }),
          pullRequest: intl.formatMessage({
            id: "review.fileSource.gitBlame.tooltip.pullRequest",
            defaultMessage: "PR",
            description:
              "Label for the pull request row in the git blame tooltip",
          }),
        },
        (href, event) => {
          openExternalLink({ event, href, initiator: "pull_request_link" });
        },
        (lineNumber) => {
          setExpandedBlame((current) =>
            current?.path === path && current.lineNumber === lineNumber
              ? null
              : { path, lineNumber },
          );
        },
      );
    },
    [blameLinesByNumber, repositoryWebUrl, expandedBlameLineNumber, intl, path],
  );

  const scrollListenerCleanupRef = useRef<(() => void) | null>(null);
  const attachScrollListener = useStableEventCallback((element: Element) => {
    const scrollable = getScrollableElement(element);
    if (!scrollable || !(scrollable instanceof HTMLElement)) return;
    scrollListenerCleanupRef.current?.();
    const onScroll = (event: Event) => {
      const target = event.target;
      if (!target || !(target instanceof HTMLElement)) return;
      const { scrollLeft } = target;
      setTabState?.((state) => ({ ...state, scrollLeft }));
    };
    scrollable.addEventListener("scroll", onScroll);
    scrollListenerCleanupRef.current = () =>
      scrollable.removeEventListener("scroll", onScroll);
  });
  const restoreScroll = useStableEventCallback((element: Element) => {
    const container = scrollContainerRef.current;
    const scrollable = getScrollableElement(element);
    if (!container || !scrollable || hasRestoredScrollRef.current) return;
    const { scrollLeft, scrollTop } = tabState ?? {};
    requestAnimationFrame(() => {
      if (scrollLeft != null || scrollTop != null) {
        const restoredTop =
          scrollTop == null || restoreScrollTop(container, scrollTop);
        const restoredLeft =
          scrollLeft == null || restoreScrollLeft(scrollable, scrollLeft);
        hasRestoredScrollRef.current = restoredTop && restoredLeft;
      } else if (initialLine != null && metrics) {
        const { lineHeight, spacing } = metrics;
        container.scrollTo({
          behavior: "instant",
          top: Math.max(
            0,
            spacing +
              (initialLine - 0.5) * lineHeight -
              container.clientHeight / 2,
          ),
        });
        hasRestoredScrollRef.current = true;
      }
    });
  });
  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const { scrollTop } = event.currentTarget;
    setTabState?.((state) => ({ ...state, scrollTop }));
  }
  useEffect(
    () => () => {
      scrollListenerCleanupRef.current?.();
    },
    [],
  );

  const handlePostRender = useCallback(
    (element: Element) => {
      attachScrollListener(element);
      restoreScroll(element);
      handleReviewSearchScroll(element);
      renderFileChangeGutter(element, fileChangeMarkers);
      renderBlame(element);
    },
    [
      fileChangeMarkers,
      attachScrollListener,
      restoreScroll,
      handleReviewSearchScroll,
      renderBlame,
    ],
  );
  useEffect(() => {
    const diffsContainer =
      scrollContainerRef.current?.querySelector("diffs-container") ?? null;
    if (diffsContainer != null) {
      renderFileChangeGutter(diffsContainer, fileChangeMarkers);
      renderBlame(diffsContainer);
    }
  }, [fileChangeMarkers, renderBlame]);

  const hoverProbeRef = useCallback(
    (element: HTMLElement | null) => {
      if (element?.parentElement != null) {
        hoverController.setup(element.parentElement, element);
        return;
      }
      hoverController.cleanUp();
    },
    [hoverController],
  );

  const rendererOptions = {
    disableFileHeader: true,
    enableGutterUtility: true,
    enableLineSelection: true,
    onGutterUtilityClick: handleGutterUtilityClick,
    onLineEnter: ({ lineNumber }: { lineNumber: number }) => {
      hoveredLineRef.current = { lineNumber };
    },
    onLineLeave: clearHoveredLine,
    onLineSelected: (selection: LineSelection) => {
      setSelectionOverride({ key: selectionKey, lines: selection });
    },
    onPostRender: handlePostRender,
    overflow: isWordWrapEnabled ? "wrap" : "scroll",
    onLineClick: handleLineClick,
    onLineNumberClick: handleLineClick,
    theme: codeTheme.name,
    themeType: colorScheme,
    unsafeCSS: FILE_SOURCE_GUTTER_CSS,
  };

  return (
    <CodeViewerChrome
      canOpenFile={true}
      onRequestChanges={requestChanges}
      onCopyPath={() => {
        copyTextToClipboard(path);
      }}
      onToggleWrap={() => {
        scope.set(wordWrapEnabledAtom, !isWordWrapEnabled);
      }}
      handleOpenInTarget={() => {}}
    >
      <FileSourceHoverContext.Provider value={hoverController}>
        <div
          ref={scrollContainerRef}
          className="h-full overflow-auto bg-token-main-surface-primary"
          data-theme={isDarkTheme ? "dark" : "light"}
          style={
            reserveBottomPadding
              ? { paddingBottom: reviewBottomPadding }
              : undefined
          }
          onContextMenu={handleContextMenu}
          onFocusCapture={() => {
            setFocusedReviewPane(scope, "diff");
          }}
          onMouseDownCapture={() => {
            setFocusedReviewPane(scope, "diff");
          }}
          onMouseLeave={clearHoveredLine}
          onScroll={handleScroll}
        >
          <span
            key={windowZoom}
            ref={metricsProbeRef}
            aria-hidden={true}
            data-review-file-source-metrics-probe=""
            className="pointer-events-none invisible absolute top-0 left-0 block whitespace-pre"
            style={{
              fontFamily: "var(--diffs-font-family)",
              fontSize: "var(--diffs-font-size)",
              height: "var(--diffs-line-height)",
              lineHeight: "var(--diffs-line-height)",
            }}
          />
          <SourceSearchController sourceSearchSource={searchProvider} />
          <div ref={hoverProbeRef} data-review-path={path}>
            {metrics == null ? null : (
              <FileSourceRenderBoundary>
                <DiffSourceRenderer
                  key={metrics.lineHeight}
                  file={sourceFile}
                  lineAnnotations={lineAnnotations}
                  metrics={metrics}
                  renderAnnotation={renderAnnotation}
                  selectedLines={selectedLines}
                  options={rendererOptions}
                />
              </FileSourceRenderBoundary>
            )}
          </div>
        </div>
      </FileSourceHoverContext.Provider>
    </CodeViewerChrome>
  );
}
