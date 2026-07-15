// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Single file entry inside an apply_patch summary: status label, expandable unified diff, open-in-editor + copy.

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  Tooltip,
  CopyButton,
  basename,
  AnimatedActivityLabel,
  ActivityDisclosureChevron,
  DiffLineStats,
  AutomaticApprovalReviews,
  AutomaticApprovalReviewIndicator,
  CodeBlock,
  UnifiedFileDiffView,
  useDisclosureContentHeight,
  useHostRequest,
  useIsDarkTheme,
  buildPatchUnifiedDiff,
  parsePatchDiffStats,
  parseUnifiedDiff,
  openFileInEditor,
  activityDisclosureTransition,
  logger,
} from "../../boundaries/onboarding-commons-externals.facade";

export type PatchChangeStatus =
  | "applied"
  | "rejected"
  | "pending"
  | "streaming"
  | "stopped";

export type FileChange =
  | { type: "add"; content: string }
  | { type: "update"; unified_diff: string }
  | { type: "delete" };

interface AutomaticApprovalReview {
  [key: string]: unknown;
}

export interface FileChangePatchRowProps {
  path: string;
  change: FileChange;
  status: PatchChangeStatus;
  cwd: string | null;
  hostId: string | null;
  grantRoot?: string | null;
  automaticApprovalReviews?: AutomaticApprovalReview[] | null;
}

function detectLanguage(fileName: string): string | undefined {
  const lower = fileName.toLowerCase();
  if (/(^|[\\/])makefile$/.test(lower)) return "makefile";
  if (/(^|[\\/])(containerfile|dockerfile)$/.test(lower)) return "dockerfile";
  switch (lower.split(".").pop() ?? "") {
    case "cts":
    case "mts":
    case "ts":
      return "typescript";
    case "tsx":
      return "tsx";
    case "cjs":
    case "js":
    case "mjs":
      return "javascript";
    case "jsx":
      return "jsx";
    case "json":
    case "json5":
    case "jsonc":
    case "jsonl":
    case "ndjson":
    case "webmanifest":
      return "json";
    case "md":
    case "markdown":
    case "mdx":
      return "markdown";
    case "yml":
    case "yaml":
      return "yaml";
    case "xml":
      return "xml";
    case "htm":
    case "html":
    case "xhtml":
      return "html";
    case "css":
      return "css";
    case "sass":
    case "scss":
      return "scss";
    case "less":
      return "less";
    case "sh":
    case "zsh":
    case "bash":
      return "bash";
    case "py":
    case "pyi":
    case "pyw":
    case "bzl":
    case "bazel":
      return "python";
    case "rb":
      return "ruby";
    case "go":
      return "go";
    case "rs":
      return "rust";
    case "java":
      return "java";
    case "c":
      return "c";
    case "c++":
    case "c++m":
    case "h":
    case "h++":
    case "hpp":
    case "hh":
    case "hxx":
    case "cc":
    case "cpp":
    case "cxx":
      return "cpp";
    case "cs":
    case "csx":
      return "csharp";
    case "kt":
    case "kts":
      return "kotlin";
    case "php":
    case "php4":
    case "php5":
    case "phtml":
      return "php";
    case "sql":
      return "sql";
    case "ini":
      return "ini";
    case "toml":
      return "ini";
    case "r":
      return "r";
    case "lua":
      return "lua";
    case "tex":
      return "latex";
    case "pl":
      return "perl";
    case "graphql":
    case "gql":
      return "graphql";
    case "swift":
      return "swift";
    case "dockerfile":
      return "dockerfile";
    case "bat":
    case "cmd":
      return "cmd";
    case "ps1":
    case "psd1":
    case "psm1":
      return "powershell";
    default:
      return undefined;
  }
}

function PatchEmptyState({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const containerClassName = clsx(
    "text-token-description-foreground/80 bg-token-editor-background flex w-full items-center justify-center px-2 pt-7 pb-8 text-size-chat",
    className,
  );
  return <div className={containerClassName} {...rest} />;
}

function CodeContent({
  content,
  language,
}: {
  content: string;
  language?: string;
}) {
  const theme = useIsDarkTheme() ? "dark" : "light";
  return (
    <CodeBlock
      content={content}
      language={language}
      showActionBar={false}
      codeClassName="text-size-chat"
      data-theme={theme}
      codeContainerClassName="!p-2 max-h-40 vertical-scroll-fade-mask"
      wrapperClassName="rounded-none border-none"
    />
  );
}

function RawChangeContent({
  path,
  change,
}: {
  path: string;
  change: FileChange;
}) {
  if (change.type === "add") {
    return (
      <CodeContent content={change.content} language={detectLanguage(path)} />
    );
  }
  if (change.type === "update") {
    return <CodeContent content={change.unified_diff} language="diff" />;
  }
  if (change.type === "delete") {
    return (
      <PatchEmptyState>
        <FormattedMessage
          id="codex.patch.change.contentsDeleted"
          defaultMessage="Contents deleted"
          description="Label indicating a file has been deleted in the patch summary"
        />
      </PatchEmptyState>
    );
  }
  let changeString: string;
  try {
    changeString = JSON.stringify(change);
  } catch {
    changeString = "<unserializable change>";
  }
  logger.debug("Unknown FileChange type", {
    safe: { path, changeString },
    sensitive: {},
  });
  return null;
}

function DiffBody({
  path,
  change,
  unifiedDiff,
  isShortView,
}: {
  path: string;
  change: FileChange;
  unifiedDiff: string;
  isShortView: boolean;
}) {
  const fileDiffs = parseUnifiedDiff(unifiedDiff);
  if (unifiedDiff) {
    const firstDiff = fileDiffs[0];
    if (firstDiff && !firstDiff.isBinary) {
      const maxHeight = isShortView ? "max-h-25" : "max-h-60 ";
      return (
        <UnifiedFileDiffView
          className={clsx(
            "composer-diff-simple-line overflow-y-auto",
            maxHeight,
          )}
          fileDiff={firstDiff.metadata}
          diffStyle="unified"
          hunkSeparators="simple"
        />
      );
    }
  }
  return <RawChangeContent path={path} change={change} />;
}

interface DiffContainerProps {
  className?: string;
  path: string;
  unifiedDiff: string;
  openLocation?: { line?: number } | null;
  linesAdded?: number | null;
  linesRemoved?: number | null;
  onOpenFile: () => void;
  children: React.ReactNode;
}

function DiffContainer({
  className,
  path,
  unifiedDiff,
  openLocation,
  linesAdded,
  linesRemoved,
  onOpenFile,
  children,
}: DiffContainerProps) {
  const fileNameClassName = clsx(
    "text-token-description-foreground/80 cursor-interaction max-w-full truncate text-start hover:underline",
    !openLocation && "cursor-default no-underline",
  );
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (openLocation) onOpenFile();
  };
  const fileNameButton = (
    <Tooltip tooltipContent={<span className="font-mono">{path}</span>}>
      <button type="button" className={fileNameClassName} onClick={handleClick}>
        {basename(path)}
      </button>
    </Tooltip>
  );
  const stats =
    linesAdded != null && linesRemoved != null ? (
      <DiffLineStats
        className="text-size-chat-sm"
        linesAdded={linesAdded}
        linesRemoved={linesRemoved}
      />
    ) : null;
  return (
    <div
      className={clsx(
        "border-token-border flex flex-col overflow-hidden rounded-lg border",
        className,
      )}
    >
      <div className="text-size-chat-sm flex items-center justify-between gap-2 border-b border-token-border bg-token-list-hover-background/60 px-2.5 py-0.5 text-token-description-foreground/80">
        <div className="flex min-w-0 items-center gap-2">
          {fileNameButton}
          {stats}
        </div>
        <CopyButton
          iconOnly
          iconClassName="icon-2xs"
          onCopy={() => {
            navigator.clipboard.writeText(unifiedDiff);
          }}
        />
      </div>
      <div className="bg-token-editor-background">{children}</div>
    </div>
  );
}

function renderStatusLabel(
  changeType: FileChange["type"],
  isStopped: boolean,
  isRejected: boolean,
  isInProgress: boolean,
): React.ReactNode {
  if (changeType === "add") {
    if (isStopped)
      return (
        <FormattedMessage
          id="codex.patch.change.stoppedCreating"
          defaultMessage="Stopped creating"
          description="Status label shown when apply_patch stopped before completing file creation"
        />
      );
    if (isRejected)
      return (
        <FormattedMessage
          id="codex.patch.change.rejected-add"
          defaultMessage="Rejected"
          description="Label indicating a file creation was rejected in the patch summary"
        />
      );
    return isInProgress ? (
      <FormattedMessage
        id="codex.patch.change.creating"
        defaultMessage="Creating"
        description="Label indicating a file is being created while awaiting approval"
      />
    ) : (
      <FormattedMessage
        id="codex.patch.change.created"
        defaultMessage="Created"
        description="Label indicating a file has been created in the patch summary"
      />
    );
  }
  if (changeType === "delete") {
    if (isStopped)
      return (
        <FormattedMessage
          id="codex.patch.change.stoppedDeleting"
          defaultMessage="Stopped deleting"
          description="Status label shown when apply_patch stopped before completing file deletion"
        />
      );
    if (isRejected)
      return (
        <FormattedMessage
          id="codex.patch.change.rejected-delete"
          defaultMessage="Rejected"
          description="Label indicating a file deletion was rejected in the patch summary"
        />
      );
    return isInProgress ? (
      <FormattedMessage
        id="codex.patch.change.deleting"
        defaultMessage="Deleting"
        description="Label indicating a file has been deleted in the patch summary"
      />
    ) : (
      <FormattedMessage
        id="codex.patch.change.deleted"
        defaultMessage="Deleted"
        description="Label indicating a file has been deleted in the patch summary"
      />
    );
  }
  if (isStopped)
    return (
      <FormattedMessage
        id="codex.patch.change.stoppedEditing"
        defaultMessage="Stopped editing"
        description="Status label shown when apply_patch stopped before completing file edit"
      />
    );
  if (isRejected)
    return (
      <FormattedMessage
        id="codex.patch.change.rejected-edit"
        defaultMessage="Rejected"
        description="Label indicating a file edit was rejected in the patch summary"
      />
    );
  return isInProgress ? (
    <FormattedMessage
      id="codex.patch.change.editing"
      defaultMessage="Editing"
      description="Label indicating a file is being edited in the patch summary while awaiting approval"
    />
  ) : (
    <FormattedMessage
      id="codex.patch.change.edited"
      defaultMessage="Edited"
      description="Label indicating a file has been edited in the patch summary"
    />
  );
}

function renderExpandedFileLabel(
  changeType: FileChange["type"],
): React.ReactNode {
  if (changeType === "add")
    return (
      <FormattedMessage
        id="codex.patch.change.created-file"
        defaultMessage="Created file"
        description="Header label shown for an expanded created file entry"
      />
    );
  if (changeType === "delete")
    return (
      <FormattedMessage
        id="codex.patch.change.deleted-file"
        defaultMessage="Deleted file"
        description="Header label shown for an expanded deleted file entry"
      />
    );
  return (
    <FormattedMessage
      id="codex.patch.change.edited-file"
      defaultMessage="Edited file"
      description="Header label shown for an expanded edited file entry"
    />
  );
}

export function initFileChangePatchRowChunk(): void {}

export function FileChangePatchRow(props: FileChangePatchRowProps) {
  const {
    path,
    change,
    status,
    cwd,
    hostId,
    grantRoot,
    automaticApprovalReviews,
  } = props;
  const isStreaming = status === "streaming";
  const isStopped = status === "stopped";
  const isPending = status === "pending";
  const isRejected = status === "rejected";
  const isStreamingOrPending = isStreaming || isPending;
  const isInProgress = isStreamingOrPending || isStopped;

  const [isExpanded, setIsExpanded] = useState(false);
  const { elementHeightPx: contentHeightPx, elementRef } =
    useDisclosureContentHeight();
  const openFileMutation = useHostRequest("open-file");
  const unifiedDiff = buildPatchUnifiedDiff(path, change);
  const diffStats = parsePatchDiffStats(unifiedDiff, path);

  const handleOpenFile = () => {
    openFileInEditor({
      path,
      line: diffStats?.openLocation?.line,
      cwd: grantRoot ?? cwd ?? null,
      hostId,
      openFile: openFileMutation.mutate,
    });
  };

  const statusLabel = renderStatusLabel(
    change.type,
    isStopped,
    isRejected,
    isInProgress,
  );
  const isDeletedWithStats = change.type === "delete" && diffStats;
  const expandedFileLabel =
    !isExpanded || isInProgress || isRejected
      ? null
      : renderExpandedFileLabel(change.type);
  const hasExpandedFileLabel = expandedFileLabel != null;

  const animatedHeight = isExpanded ? contentHeightPx : 0;
  const contentRef = isExpanded ? elementRef : null;
  const reviewsHeader =
    automaticApprovalReviews == null ? null : (
      <AutomaticApprovalReviews reviews={automaticApprovalReviews} />
    );
  const bodyContent = (
    <div ref={contentRef}>
      {reviewsHeader}
      {unifiedDiff ? (
        <DiffContainer
          className="mt-1.5"
          path={path}
          unifiedDiff={unifiedDiff}
          openLocation={diffStats?.openLocation}
          linesAdded={diffStats?.added}
          linesRemoved={diffStats?.deleted}
          onOpenFile={handleOpenFile}
        >
          <DiffBody
            path={path}
            change={change}
            unifiedDiff={unifiedDiff}
            isShortView={isPending}
          />
        </DiffContainer>
      ) : (
        <PatchEmptyState>
          {change.type === "delete" ? (
            <FormattedMessage
              id="codex.patch.change.contentsDeleted"
              defaultMessage="Contents deleted"
              description="Label indicating a file has been deleted in the patch summary"
            />
          ) : (
            <FormattedMessage
              id="codex.patch.change.noChanges"
              defaultMessage="No changes"
              description="Label indicating no changes in the patch summary"
            />
          )}
        </PatchEmptyState>
      )}
    </div>
  );

  const outerClassName = clsx(
    "flex flex-col overflow-clip",
    isPending ? "rounded-xl" : "rounded-lg",
  );
  const headerClassName = clsx(
    "cursor-interaction group/activity-header flex items-center justify-between gap-1 text-ellipsis text-size-chat",
    "px-0 py-0",
  );

  const headerLabel = isStreaming ? (
    <AnimatedActivityLabel
      active
      className="text-token-description-foreground/80 select-text group-hover/activity-header:text-token-foreground"
    >
      {statusLabel}
    </AnimatedActivityLabel>
  ) : isStopped ? (
    <span className="text-token-description-foreground/80 select-text group-hover/activity-header:text-token-foreground">
      {statusLabel}
    </span>
  ) : isPending ? null : (
    <AnimatedActivityLabel
      active={isStreamingOrPending}
      className="text-token-description-foreground/80 select-text group-hover/activity-header:text-token-foreground"
    >
      {expandedFileLabel ?? statusLabel}
    </AnimatedActivityLabel>
  );

  const fileNameButton = hasExpandedFileLabel ? null : (
    <Tooltip tooltipContent={<span className="font-mono">{path}</span>}>
      <button
        type="button"
        className="max-w-full cursor-interaction truncate text-start text-token-text-link-foreground select-text hover:underline"
        onClick={(event) => {
          event.stopPropagation();
          handleOpenFile();
        }}
      >
        {basename(path)}
      </button>
    </Tooltip>
  );

  const deletedStats =
    isDeletedWithStats && !hasExpandedFileLabel ? (
      <div className="flex items-center gap-1.5">
        <DiffLineStats
          className="text-size-chat-sm"
          linesAdded={diffStats.added}
          linesRemoved={diffStats.deleted}
        />
        <span className="block size-1.5 rounded-full bg-token-charts-red/70" />
      </div>
    ) : null;

  const changeStats =
    diffStats &&
    (diffStats.added > 0 || diffStats.deleted > 0) &&
    change.type !== "delete" ? (
      <div className="flex items-center gap-1.5">
        {hasExpandedFileLabel ? null : (
          <>
            <DiffLineStats
              className="text-size-chat-sm"
              linesAdded={diffStats.added}
              linesRemoved={diffStats.deleted}
            />
            {change.type === "add" ? (
              <span className="block size-1.5 rounded-full bg-token-charts-blue/70" />
            ) : null}
          </>
        )}
      </div>
    ) : null;

  const reviewIndicator =
    automaticApprovalReviews == null ? null : (
      <AutomaticApprovalReviewIndicator />
    );

  const header = (
    <div
      className={headerClassName}
      onClick={() => setIsExpanded((expanded) => !expanded)}
    >
      <div className="text-size-chat flex min-w-0 items-center gap-1 text-token-description-foreground/80">
        {headerLabel}
        {fileNameButton}
        {deletedStats}
        {changeStats}
        {reviewIndicator}
        <ActivityDisclosureChevron expanded={isExpanded} />
      </div>
      <div className="ml-1 flex items-center gap-1 transition-opacity duration-200" />
    </div>
  );

  const animatedBody = isStreaming ? (
    isExpanded ? (
      <div>{bodyContent}</div>
    ) : null
  ) : (
    <motion.div
      initial={false}
      animate={{ height: animatedHeight, opacity: isExpanded ? 1 : 0 }}
      transition={activityDisclosureTransition}
      className={clsx(isExpanded ? "overflow-visible" : "overflow-hidden")}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
    >
      {isExpanded ? bodyContent : null}
    </motion.div>
  );

  return (
    <div className="px-0">
      <div className={outerClassName}>
        {header}
        {animatedBody}
      </div>
    </div>
  );
}
