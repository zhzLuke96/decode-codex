// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// React FileDiff shell that adapts review/editor props to the restored renderer.
import React, {
  Component,
  type ComponentType,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import clsx from "clsx";

import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { ChevronIcon } from "../icons/chevron-icon";
import { CopyIcon } from "../icons/copy-icon";
import { LinkExternalIcon } from "../icons/link-external-icon";
import {
  WordWrapDisabledIcon,
  WordWrapEnabledIcon,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  UnifiedFileDiffRenderer,
  type FileDiffHunkSeparatorMode,
  type FileDiffPostRenderHandler,
  type FileDiffRenderMetrics,
  type RenderableFileDiff,
} from "./unified-file-diff-renderer";

type FileDiffMetadata = {
  additions?: number;
  deletionLines?: unknown[];
  deletions?: number;
  name?: string;
  prevName?: string | null;
  type?: string;
};

type HeaderOpenAction = {
  ariaLabel?: string;
  onClick?: () => void;
  tooltip?: string;
};

interface FileDiffProps {
  className?: string;
  containerClassName?: string;
  defaultOpen?: boolean;
  diff: RenderableFileDiff & {
    additions?: number;
    deletions?: number;
    metadata?: FileDiffMetadata;
  };
  diffViewClassName?: string;
  diffViewWrap?: boolean;
  disableScrollAnchor?: boolean;
  displayPathOverride?: string;
  headerEndContent?: ReactNode;
  headerEndContentOpenOnClick?: boolean;
  headerOpenAction?: HeaderOpenAction;
  headerVariant?: "default" | "full-review" | string;
  hunkSeparators?: FileDiffHunkSeparatorMode;
  isLoading?: boolean;
  lineAnnotations?: unknown;
  metrics?: FileDiffRenderMetrics;
  onCopyPath?: (path: string) => void;
  onGutterUtilityClick?: (...args: unknown[]) => void;
  onLoadRetry?: () => void;
  onPostRender?: FileDiffPostRenderHandler;
  onToggleWrap?: () => void;
  renderAnnotation?: (...args: unknown[]) => ReactNode;
  roundedCorners?: boolean;
  selectedLines?: unknown;
  showHeaderDiffStats?: boolean;
  showLoadError?: boolean;
  stickyHeader?: boolean;
  viewType?: "split" | "unified" | string;
}

type FileDiffErrorBoundaryProps = {
  fallback: ReactNode;
  resetKey: string;
  children: ReactNode;
};

type FileDiffErrorBoundaryState = {
  hasError: boolean;
};

export function FileDiff({
  className,
  containerClassName,
  defaultOpen = true,
  diff,
  diffViewClassName,
  diffViewWrap = false,
  disableScrollAnchor = false,
  displayPathOverride,
  headerEndContent,
  headerEndContentOpenOnClick,
  headerOpenAction,
  headerVariant = "default",
  hunkSeparators = "simple",
  isLoading = false,
  lineAnnotations,
  metrics,
  onCopyPath,
  onGutterUtilityClick,
  onLoadRetry,
  onPostRender,
  onToggleWrap,
  renderAnnotation,
  roundedCorners = true,
  selectedLines,
  showHeaderDiffStats = true,
  showLoadError = false,
  stickyHeader = false,
  viewType = "unified",
}: FileDiffProps) {
  const metadata = diff.metadata ?? {};
  const shouldOpenByDefault = defaultOpen && metadata.type !== "deleted";
  const [open, setOpen] = useState(shouldOpenByDefault);
  const cacheKey = getFileDiffCacheKey(diff, metrics);

  useEffect(() => {
    setOpen(shouldOpenByDefault);
  }, [cacheKey, shouldOpenByDefault]);

  const fileDiff = useMemo(
    () => ({
      ...diff,
      cacheKey,
    }),
    [cacheKey, diff],
  );
  const displayPath = displayPathOverride ?? metadata.name ?? diff.name ?? "";
  const displayFileName = getDisplayFileName(displayPath);
  const hasContent = hasRenderableContent(diff);
  const diffStyle = viewType === "split" ? "split" : "unified";
  const overflow = diffViewWrap ? "wrap" : "scroll";
  const roundedClassName = roundedCorners ? "rounded-lg" : "";
  const WrapIcon = (diffViewWrap
    ? WordWrapEnabledIcon
    : WordWrapDisabledIcon) as ComponentType<{ className?: string }>;

  const handleCopyPath = () => {
    if (displayPath.length === 0) return;
    if (onCopyPath != null) {
      onCopyPath(displayPath);
      return;
    }
    if (typeof navigator !== "undefined" && navigator.clipboard != null) {
      void navigator.clipboard.writeText(displayPath);
    }
  };

  return (
    <div
      className={clsx(
        "border-token-border bg-token-main-surface-primary overflow-hidden border",
        roundedClassName,
        containerClassName,
        className,
      )}
    >
      <div
        className={clsx(
          "bg-token-main-surface-primary flex min-w-0 items-center gap-2 border-b border-token-border px-3 py-2 text-sm",
          stickyHeader && "sticky top-0 z-10",
        )}
      >
        <button
          type="button"
          aria-label="Toggle file diff"
          className="text-token-text-secondary flex min-w-0 flex-1 cursor-interaction items-center gap-2 text-start"
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronIcon
            className={clsx("icon-2xs shrink-0 transition-transform", open && "rotate-180")}
          />
          <span className="truncate font-medium text-token-text-primary">
            {displayFileName}
          </span>
          {displayPath !== displayFileName ? (
            <span className="truncate text-token-text-tertiary">
              {displayPath}
            </span>
          ) : null}
          {showHeaderDiffStats ? <DiffStats diff={diff} /> : null}
        </button>
        {headerEndContent != null ? (
          <button
            type="button"
            className="contents"
            disabled={headerEndContentOpenOnClick == null}
            onClick={() => {
              if (headerEndContentOpenOnClick != null) {
                setOpen(headerEndContentOpenOnClick);
              }
            }}
          >
            {headerEndContent}
          </button>
        ) : null}
        {onToggleWrap != null ? (
          <Button
            aria-label="Toggle line wrap"
            aria-pressed={diffViewWrap}
            color="ghost"
            size="icon-sm"
            onClick={onToggleWrap}
          >
            <span className="sr-only">Toggle line wrap</span>
            <WrapIcon className="icon-2xs" />
          </Button>
        ) : null}
        {displayPath.length > 0 ? (
          <Button color="ghost" size="icon-sm" onClick={handleCopyPath}>
            <span className="sr-only">Copy path</span>
            <CopyIcon className="icon-2xs" />
          </Button>
        ) : null}
        {headerOpenAction?.onClick != null ? (
          <Button
            aria-label={headerOpenAction.ariaLabel}
            color="ghost"
            size="icon-sm"
            title={headerOpenAction.tooltip}
            onClick={headerOpenAction.onClick}
          >
            <LinkExternalIcon className="icon-2xs" />
          </Button>
        ) : null}
      </div>
      {open ? (
        <div className="min-w-0">
          {isLoading ? <FileDiffMessage kind="loading" /> : null}
          {showLoadError ? (
            <FileDiffMessage kind="error" onRetry={onLoadRetry} />
          ) : null}
          {!isLoading && !showLoadError && !hasContent ? (
            <FileDiffMessage kind={getEmptyDiffKind(metadata)} />
          ) : null}
          {!isLoading && !showLoadError && hasContent ? (
            <FileDiffErrorBoundary
              resetKey={cacheKey}
              fallback={<FileDiffMessage kind="render-error" />}
            >
              <UnifiedFileDiffRenderer
                className={clsx(
                  "relative overflow-clip [contain:content]",
                  disableScrollAnchor && "[overflow-anchor:none]",
                  diffViewClassName,
                )}
                diffStyle={diffStyle}
                fileDiff={fileDiff}
                hunkSeparators={hunkSeparators}
                lineAnnotations={lineAnnotations}
                metrics={metrics}
                onGutterUtilityClick={onGutterUtilityClick}
                onPostRender={onPostRender}
                overflow={overflow}
                renderAnnotation={renderAnnotation}
                selectedLines={selectedLines}
                stickyHeader={stickyHeader}
                useReviewLineInfoSeparators={headerVariant === "full-review"}
              />
            </FileDiffErrorBoundary>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

class FileDiffErrorBoundary extends Component<
  FileDiffErrorBoundaryProps,
  FileDiffErrorBoundaryState
> {
  state: FileDiffErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): FileDiffErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {}

  componentDidUpdate(previousProps: FileDiffErrorBoundaryProps): void {
    if (
      this.state.hasError &&
      previousProps.resetKey !== this.props.resetKey
    ) {
      this.setState({ hasError: false });
    }
  }

  render(): ReactNode {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function DiffStats({ diff }: { diff: FileDiffProps["diff"] }) {
  const additions = diff.additions ?? diff.metadata?.additions ?? 0;
  const deletions = diff.deletions ?? diff.metadata?.deletions ?? 0;
  if (additions === 0 && deletions === 0) return null;
  return (
    <span className="ml-auto flex shrink-0 items-center gap-1 tabular-nums">
      <span className="text-token-charts-green">+{additions}</span>
      <span className="text-token-charts-red">-{deletions}</span>
    </span>
  );
}

function FileDiffMessage({
  kind,
  onRetry,
}: {
  kind: "binary" | "empty" | "error" | "loading" | "rename" | "render-error";
  onRetry?: () => void;
}) {
  const message = getFileDiffMessage(kind);
  return (
    <div className="flex items-center gap-2 bg-token-main-surface-primary px-3 py-4 text-sm text-token-text-secondary">
      <span>{message}</span>
      {kind === "error" && onRetry != null ? (
        <Button color="outline" size="default" onClick={onRetry}>
          Retry
        </Button>
      ) : null}
    </div>
  );
}

function getFileDiffMessage(
  kind: "binary" | "empty" | "error" | "loading" | "rename" | "render-error",
) {
  switch (kind) {
    case "binary":
      return <FormattedMessage id="wham.diff.binaryFile" defaultMessage="Binary file not shown" />;
    case "error":
      return <FormattedMessage id="codex.diff.loadFailed" defaultMessage="Diff failed to load" />;
    case "loading":
      return <FormattedMessage id="codex.diff.loading" defaultMessage="Loading diff..." />;
    case "rename":
      return <FormattedMessage id="codex.diff.fileRenamedWithoutChanges" defaultMessage="File renamed without changes" />;
    case "render-error":
      return <FormattedMessage id="codex.diff.renderFailed" defaultMessage="Diff failed to render" />;
    case "empty":
    default:
      return <FormattedMessage id="wham.diff.noContent" defaultMessage="No content" />;
  }
}

function getEmptyDiffKind(metadata: FileDiffMetadata) {
  if (metadata.type === "binary") return "binary";
  if (metadata.type === "rename-pure") return "rename";
  return "empty";
}

function hasRenderableContent(diff: FileDiffProps["diff"]): boolean {
  return (
    (diff.hunks?.length ?? 0) > 0 ||
    (diff.additionLines?.length ?? 0) > 0 ||
    (diff.deletionLines?.length ?? 0) > 0
  );
}

function getDisplayFileName(path: string): string {
  return path.split(/[\\/]/).filter(Boolean).at(-1) ?? path;
}

function getFileDiffCacheKey(
  diff: FileDiffProps["diff"],
  metrics: FileDiffRenderMetrics | undefined,
): string {
  return [
    diff.cacheKey,
    metrics?.hunkLineCount,
    metrics?.lineHeight,
    metrics?.diffHeaderHeight,
    metrics?.hunkSeparatorHeight,
    metrics?.spacing,
    metrics?.paddingTop,
    metrics?.paddingBottom,
    diff.name,
    diff.isPartial ? "partial" : "full",
    diff.additionLines?.length ?? 0,
    diff.deletionLines?.length ?? 0,
    diff.hunks?.length ?? 0,
    ...((diff.hunks ?? []) as RenderableFileDiff["hunks"]).map(
      (hunk) =>
        `${hunk.additionStart}:${hunk.additionCount}:${String(hunk.additionLines)}:${hunk.deletionStart}:${hunk.deletionCount}:${String(hunk.deletionLines)}`,
    ),
    (diff.metadata?.name ?? "").trim(),
  ].join(":");
}
