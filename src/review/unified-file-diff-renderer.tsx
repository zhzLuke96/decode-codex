// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Codex wrapper around the forked @pierre/diffs FileDiff renderer.
import type { ComponentType, ReactElement, ReactNode } from "react";
import { useEffect } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerSLowerT as appearanceSettings,
  initCurrentAppInitialSharedRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerGLowerU as initDiffSearchRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerMLowerA as ForkedPierreFileDiff,
  worktreeNewThreadOrchestratorCompatSlotLowerPLowerA as initForkedPierreFileDiffRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerVLowerU as useResolvedThemeVariant,
  worktreeNewThreadOrchestratorCompatSlotUpperFLowerP as findCodeTheme,
  worktreeNewThreadOrchestratorCompatSlotUpperGLowerI as initCodexDiffCssRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerI as initDiffHighlighterProviderRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerP as getCodeThemeRegistration,
  worktreeNewThreadOrchestratorCompatSlotUpperVLowerI as DiffHighlighterProvider,
  worktreeNewThreadOrchestratorCompatSlotUpperWLowerI as buildCodexDiffUnsafeCss,
  worktreeNewThreadOrchestratorCompatSlotUnderscoreLowerA as useDiffHighlighterPool,
  worktreeNewThreadOrchestratorCompatSlotUnderscoreLowerU as getAppearanceThemePreference,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerP as initCodeThemeCatalogRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperTLowerS as initEditorBackgroundDetectorRuntime,
  worktreeNewThreadQueryCompatSlotUpperULowerM as useSettingValue,
  worktreeNewThreadQueryCompatSlotUpperELowerS as useEditorBackgroundIsDark,
  worktreeNewThreadQueryCompatSlotLowerZLowerM as initSettingsQueryRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";

const DIFF_ROOT_SELECTOR = ":is([data-diff], [data-file])";

export type FileDiffOverflowMode = "scroll" | "wrap";
export type FileDiffHunkSeparatorMode =
  | "line-info"
  | "line-info-basic"
  | "metadata"
  | "simple";
export type FileDiffStyle = "unified" | "split";
export type FileDiffLineDiffType = "none" | "word" | "word-alt" | string;
export type FileDiffGutterUtilityClickHandler = (...args: unknown[]) => void;
export type FileDiffPostRenderHandler = (
  element: HTMLElement & { shadowRoot?: ShadowRoot | null },
  ...args: unknown[]
) => void;

export interface RenderableFileDiff {
  additionLines: unknown[];
  cacheKey: string;
  deletionLines: unknown[];
  hunks: Array<{
    additionCount: number;
    additionLines: unknown;
    additionStart: number;
    deletionCount: number;
    deletionLines: unknown;
    deletionStart: number;
  }>;
  isPartial?: boolean;
  name?: string;
  [key: string]: unknown;
}

export interface FileDiffRenderMetrics {
  diffHeaderHeight?: number;
  hunkLineCount?: number;
  hunkSeparatorHeight?: number;
  lineHeight?: number;
  paddingBottom?: number;
  paddingTop?: number;
  spacing?: number;
  [key: string]: unknown;
}

export interface FileDiffRendererOptions {
  diffStyle?: FileDiffStyle;
  diffIndicators?: "bars" | "classic";
  disableFileHeader?: boolean;
  enableGutterUtility?: boolean;
  hunkSeparators?: FileDiffHunkSeparatorMode;
  lineDiffType?: FileDiffLineDiffType | null;
  onGutterUtilityClick?: FileDiffGutterUtilityClickHandler;
  onPostRender?: FileDiffPostRenderHandler;
  overflow?: FileDiffOverflowMode;
  theme?: string;
  themeType?: "dark" | "light";
  unsafeCSS?: string;
  [key: string]: unknown;
}

export interface FileDiffRendererProps
  extends Omit<FileDiffRendererOptions, "onPostRender"> {
  className?: string;
  fileDiff: RenderableFileDiff;
  hunkSeparators?: FileDiffHunkSeparatorMode;
  isLoadingFullContent?: boolean;
  lineAnnotations?: unknown;
  lineDiffType?: FileDiffLineDiffType | null;
  metrics?: FileDiffRenderMetrics;
  onGutterUtilityClick?: FileDiffGutterUtilityClickHandler;
  onPostRender?: FileDiffPostRenderHandler;
  overflow?: FileDiffOverflowMode;
  renderAnnotation?: (...args: unknown[]) => ReactNode;
  selectedLines?: unknown;
  useReviewLineInfoSeparators?: boolean;
}

interface FileDiffLineDiffEffectProps {
  lineDiffType: FileDiffLineDiffType | null | undefined;
}

type PierreFileDiffProps = {
  fileDiff: RenderableFileDiff;
  lineAnnotations?: unknown;
  metrics?: FileDiffRenderMetrics;
  options: FileDiffRendererOptions;
  renderAnnotation?: (...args: unknown[]) => ReactNode;
  selectedLines?: unknown;
};

type DiffHighlighterPool = {
  getDiffRenderOptions(): FileDiffRendererOptions;
  setRenderOptions(options: FileDiffRendererOptions): void;
};

const PierreFileDiff =
  ForkedPierreFileDiff as ComponentType<PierreFileDiffProps>;
const HighlighterProvider = DiffHighlighterProvider as ComponentType<{
  children: ReactNode;
}>;

export const initUnifiedFileDiffRendererChunk = runOnce(() => {
  initForkedPierreFileDiffRuntime();
  initCurrentAppInitialSharedRuntime();
  initCodexDiffCssRuntime();
  initDiffHighlighterProviderRuntime();
  initSettingsQueryRuntime();
  initCodeThemeCatalogRuntime();
  initDiffSearchRuntime();
  initEditorBackgroundDetectorRuntime();
});

export function UnifiedFileDiffRenderer({
  fileDiff,
  className,
  hunkSeparators = "line-info",
  lineAnnotations,
  lineDiffType,
  metrics,
  onGutterUtilityClick,
  onPostRender,
  overflow = "scroll",
  renderAnnotation,
  selectedLines,
  useReviewLineInfoSeparators = false,
  ...restOptions
}: FileDiffRendererProps): ReactElement {
  const themeVariant = useResolvedThemeVariant(getAppearanceThemePreference());
  const lightCodeThemeId = useSettingValue(appearanceSettings.lightCodeThemeId);
  const darkCodeThemeId = useSettingValue(appearanceSettings.darkCodeThemeId);
  const diffMarkerStyle = useSettingValue(appearanceSettings.diffMarkerStyle);
  const editorBackgroundIsDark = useEditorBackgroundIsDark();

  void editorBackgroundIsDark;
  void findCodeTheme(undefined);

  const codeTheme =
    themeVariant === "light"
      ? getCodeThemeRegistration(lightCodeThemeId, "light")
      : getCodeThemeRegistration(darkCodeThemeId, "dark");
  const diffIndicators = diffMarkerStyle === "symbols" ? "classic" : "bars";
  const enableGutterUtility = onGutterUtilityClick != null;
  const postRender = createPostRenderCleanup(onPostRender);
  const unsafeCSS = buildCodexDiffUnsafeCss({
    includeDiffHeader: true,
    includeSimpleLineSeparators: true,
    rootSelector: DIFF_ROOT_SELECTOR,
    surface: "var(--codex-diffs-surface)",
    useReviewLineInfoSeparators,
  });
  const options: FileDiffRendererOptions = {
    overflow,
    hunkSeparators,
    themeType: themeVariant,
    theme: codeTheme.name,
    disableFileHeader: true,
    diffIndicators,
    enableGutterUtility,
    lineDiffType,
    onGutterUtilityClick,
    onPostRender: postRender,
    unsafeCSS,
    ...restOptions,
  };

  return (
    <HighlighterProvider>
      {lineDiffType == null ? null : (
        <FileDiffLineDiffEffect lineDiffType={lineDiffType} />
      )}
      <div className={className}>
        <PierreFileDiff
          key={fileDiff.cacheKey}
          fileDiff={fileDiff}
          lineAnnotations={lineAnnotations}
          metrics={metrics}
          renderAnnotation={renderAnnotation}
          selectedLines={selectedLines}
          options={options}
        />
      </div>
    </HighlighterProvider>
  );
}

function FileDiffLineDiffEffect({
  lineDiffType,
}: FileDiffLineDiffEffectProps): null {
  const highlighterPool = useDiffHighlighterPool() as
    | DiffHighlighterPool
    | null
    | undefined;

  useEffect(() => {
    if (highlighterPool == null) return;

    const renderOptions = highlighterPool.getDiffRenderOptions();
    if (renderOptions.lineDiffType !== lineDiffType) {
      highlighterPool.setRenderOptions({
        ...renderOptions,
        lineDiffType,
      });
    }
  }, [lineDiffType, highlighterPool]);

  return null;
}

function createPostRenderCleanup(
  onPostRender: FileDiffPostRenderHandler | undefined,
): FileDiffPostRenderHandler {
  return (element, _renderState, phase) => {
    const placeholders =
      element.shadowRoot?.querySelectorAll("[data-placeholder]");

    if (phase === "unmount") {
      if (placeholders?.length === 0) {
        element.shadowRoot?.replaceChildren();
      }
      return;
    }

    if (placeholders != null && placeholders.length > 1) {
      element.shadowRoot?.replaceChildren(
        placeholders.item(placeholders.length - 1),
      );
    }

    onPostRender?.(element);
  };
}
