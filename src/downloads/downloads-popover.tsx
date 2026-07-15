// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Downloads popover: lists Codex browser downloads for a conversation with row-level controls.
import React from "react";
import clsx from "clsx";
import {
  FormattedMessage,
  defineMessage,
  useIntl,
  type IntlShape,
  type MessageDescriptor,
} from "../vendor/react-intl";
import { Button } from "../ui/button";
import { DropdownMenu } from "../ui/dropdown/menu";
import { Dropdown } from "../ui/dropdown";
import { ContextMenu } from "../ui/context-menu";
import { Tooltip } from "../ui/tooltip-b";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import { CirclePauseIcon } from "../icons/circle-pause-icon";
import { CirclePlayIcon } from "../icons/circle-play-icon";
import { EllipsisHorizontalIcon } from "../icons/ellipsis-horizontal-icon";
import {
  ACTIVE_DOWNLOAD_STATUSES,
  CloseIcon,
  CodexAgentSparkIcon,
  DownloadsEmptyIcon,
  Spinner,
  TERMINAL_DOWNLOAD_STATUSES,
  appStoreScope,
  describeDownloadActionFailure,
  DOWNLOAD_METADATA_SEPARATOR,
  fileTypeIconMap,
  filterDownloadsForConversation,
  formatDownloadByteProgress,
  formatDownloadTimeRemaining,
  formatDownloadTimestamp,
  formatDownloadTransferRate,
  getDownloadsSnapshot,
  resolveFileTypeFromPath,
  subscribeToDownloads,
  toastControllerSignal,
  useAppStore,
  usePlatform,
} from "../boundaries/onboarding-commons-externals.facade";

type DownloadStatus =
  | "started"
  | "in_progress"
  | "paused"
  | "complete"
  | "canceled"
  | "failed";

type DownloadPlatform = "macOS" | "windows" | "linux";

export type DownloadEntry = {
  id: string;
  status: DownloadStatus;
  filename: string;
  path: string;
  url: string;
  source: string;
  totalBytes: number;
  receivedBytes: number;
  updatedAtMs: number;
  exists: boolean;
  canResume: boolean;
  canCancel: boolean;
  canPause: boolean;
};

export type DownloadActionResult = {
  ok: boolean;
  [key: string]: unknown;
};

export type DownloadsService = {
  cancel(args: { id: string }): Promise<DownloadActionResult>;
  open(args: { id: string }): Promise<DownloadActionResult>;
  pause(args: { id: string }): Promise<DownloadActionResult>;
  remove(args: { id: string }): Promise<DownloadActionResult>;
  resume(args: { id: string }): Promise<DownloadActionResult>;
  showInFolder(args: { id: string }): Promise<DownloadActionResult>;
};

type DownloadMenuItem = {
  id: string;
  type?: "separator";
  message?: MessageDescriptor;
  messageValues?: Record<string, unknown>;
  enabled?: boolean;
  onSelect?: () => void;
};

type RunDownloadAction = (
  download: DownloadEntry,
  action: () => Promise<DownloadActionResult>,
) => Promise<void>;

export type DownloadsPopoverProps = {
  className?: string;
  conversationId: string;
  downloadsService: DownloadsService;
};

export function DownloadsPopover({
  className,
  conversationId,
  downloadsService,
}: DownloadsPopoverProps) {
  const registry = useDownloadsRegistry();
  const appStore = useAppStore(appStoreScope);
  const intl = useIntl();
  const [pendingActionId, setPendingActionId] = React.useState<string | null>(
    null,
  );
  if (registry == null) {
    return (
      <DownloadsEmptyState
        icon={<Spinner className="icon-sm" />}
        title={
          <FormattedMessage
            id="downloads.popover.loading"
            defaultMessage="Loading downloads"
            description="Loading state title for downloads popover"
          />
        }
      />
    );
  }
  const conversationDownloads = filterDownloadsForConversation(
    registry.downloads,
    conversationId,
  ) as DownloadEntry[];
  const activeDownloads = conversationDownloads.filter((download) =>
    ACTIVE_DOWNLOAD_STATUSES.has(download.status),
  );
  const inactiveDownloads = conversationDownloads.filter(
    (download) => !ACTIVE_DOWNLOAD_STATUSES.has(download.status),
  );
  const orderedDownloads = [...activeDownloads, ...inactiveDownloads];
  if (conversationDownloads.length === 0) {
    return (
      <DownloadsEmptyState
        icon={<DownloadsEmptyIcon className="icon-sm" />}
        title={
          <FormattedMessage
            id="downloads.popover.empty"
            defaultMessage="No downloads yet"
            description="Empty state title for downloads popover"
          />
        }
        description={
          <FormattedMessage
            id="downloads.popover.emptyDescription"
            defaultMessage="Files downloaded from the Codex browser will appear here"
            description="Empty state description for downloads popover"
          />
        }
      />
    );
  }
  const runDownloadAction: RunDownloadAction = async (download, action) => {
    setPendingActionId(download.id);
    try {
      const result = await action();
      if (!result.ok) {
        appStore
          .get(toastControllerSignal)
          .danger(describeDownloadActionFailure(intl, result));
      }
    } catch {
      appStore
        .get(toastControllerSignal)
        .danger(describeDownloadActionFailure(intl));
    } finally {
      setPendingActionId(null);
    }
  };
  return (
    <div className={clsx("flex min-h-0 flex-col gap-1", className)}>
      <DownloadRowList
        downloads={orderedDownloads}
        downloadsService={downloadsService}
        pendingActionId={pendingActionId}
        runDownloadAction={runDownloadAction}
      />
    </div>
  );
}

type DownloadRowListProps = {
  downloads: DownloadEntry[];
  downloadsService: DownloadsService;
  pendingActionId: string | null;
  runDownloadAction: RunDownloadAction;
};

function DownloadRowList({
  downloads,
  downloadsService,
  pendingActionId,
  runDownloadAction,
}: DownloadRowListProps) {
  return (
    <>
      {downloads.map((download) => (
        <DownloadRow
          key={download.id}
          download={download}
          pending={pendingActionId === download.id}
          onCancel={() =>
            runDownloadAction(download, () =>
              downloadsService.cancel({ id: download.id }),
            )
          }
          onOpen={() =>
            runDownloadAction(download, () =>
              downloadsService.open({ id: download.id }),
            )
          }
          onPause={() =>
            runDownloadAction(download, () =>
              downloadsService.pause({ id: download.id }),
            )
          }
          onRemove={() =>
            runDownloadAction(download, () =>
              downloadsService.remove({ id: download.id }),
            )
          }
          onResume={() =>
            runDownloadAction(download, () =>
              downloadsService.resume({ id: download.id }),
            )
          }
          onShowInFolder={() =>
            runDownloadAction(download, () =>
              downloadsService.showInFolder({ id: download.id }),
            )
          }
        />
      ))}
    </>
  );
}

function useDownloadsRegistry(): { downloads: DownloadEntry[] } | null {
  return React.useSyncExternalStore(
    subscribeToDownloads,
    getDownloadsSnapshot,
    getDownloadsSnapshot,
  );
}

type DownloadRowProps = {
  download: DownloadEntry;
  pending: boolean;
  onCancel: () => void;
  onOpen: () => void;
  onPause: () => void;
  onRemove: () => void;
  onResume: () => void;
  onShowInFolder: () => void;
};

function DownloadRow({
  download,
  onCancel,
  onOpen,
  onPause,
  onRemove,
  onResume,
  onShowInFolder,
  pending,
}: DownloadRowProps) {
  const intl = useIntl();
  const appStore = useAppStore(appStoreScope);
  const { platform } = usePlatform();
  const progress =
    download.totalBytes > 0
      ? Math.min(1, download.receivedBytes / download.totalBytes)
      : null;
  const showProgressBar =
    progress != null && !TERMINAL_DOWNLOAD_STATUSES.has(download.status);
  const showTimestamp =
    download.status !== "complete" &&
    download.status !== "canceled" &&
    !showProgressBar;
  const fileType = resolveFileTypeFromPath(download.path || download.filename);
  const FileTypeIcon =
    fileType === "folder"
      ? fileTypeIconMap.document
      : fileTypeIconMap[fileType];
  const revealLabel = intl.formatMessage(
    {
      id: "downloads.popover.revealDownload",
      defaultMessage: "Show {filename} in folder",
      description:
        "Accessible label for a download row that reveals the file in the system file browser",
    },
    { filename: download.filename },
  );
  const copyErrorMessage = intl.formatMessage({
    id: "downloads.popover.copyFailed",
    defaultMessage: "Couldn’t copy download information",
    description: "Error shown when a download address or path cannot be copied",
  });
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!download.exists || event.detail > 1) return;
    onShowInFolder();
  };
  const handleDoubleClick = () => {
    if (download.exists) onOpen();
  };
  const menuItems = buildDownloadMenuItems({
    download,
    onCancel,
    onCopyError: () => {
      appStore.get(toastControllerSignal).danger(copyErrorMessage);
    },
    onOpen,
    onRemove,
    onShowInFolder,
    platform,
  });
  const isDisabled = !download.exists;
  const iconCell = (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-token-foreground/5 text-token-text-tertiary">
      <FileTypeIcon className="icon-sm" />
    </div>
  );
  const nameRow = (
    <div className="flex min-w-0 flex-col gap-0.5">
      <div className="truncate text-sm font-normal">{download.filename}</div>
      <DownloadMetadata download={download} />
    </div>
  );
  const detailRow = showTimestamp ? (
    <div className="mt-1 truncate text-xs text-token-text-tertiary">
      {formatDownloadTimestamp(download.updatedAtMs, intl)}
    </div>
  ) : showProgressBar ? (
    <div className="mt-1 h-1 overflow-hidden rounded-full bg-token-foreground/10">
      <div
        className={clsx(
          "h-full rounded-full",
          download.status === "paused"
            ? "bg-token-text-tertiary"
            : "bg-token-text-link-foreground",
        )}
        style={{ width: `${Math.max(3, (progress ?? 0) * 100)}%` }}
      />
    </div>
  ) : null;
  const rowBody = (
    <div className="group relative flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-token-list-hover-background">
      <button
        type="button"
        className="flex min-w-0 flex-1 cursor-interaction items-center gap-3 rounded-lg text-left outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
        disabled={isDisabled}
        aria-label={revealLabel}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        {iconCell}
        <div className="min-w-0 flex-1">
          {nameRow}
          {detailRow}
        </div>
      </button>
      <div className="shrink-0">
        <DownloadRowControls
          download={download}
          menuItems={menuItems}
          onCancel={onCancel}
          onPause={onPause}
          onResume={onResume}
          pending={pending}
        />
      </div>
    </div>
  );
  return <ContextMenu items={menuItems}>{rowBody}</ContextMenu>;
}

type DownloadRowControlsProps = {
  download: DownloadEntry;
  menuItems: DownloadMenuItem[];
  onCancel: () => void;
  onPause: () => void;
  onResume: () => void;
  pending: boolean;
};

function DownloadRowControls({
  download,
  menuItems,
  onCancel,
  onPause,
  onResume,
  pending,
}: DownloadRowControlsProps) {
  const intl = useIntl();
  const menuLabel = intl.formatMessage({
    id: "downloads.popover.actions",
    defaultMessage: "Download actions",
    description: "Accessible label for the download actions menu",
  });
  const cancelLabel = intl.formatMessage({
    id: "downloads.popover.cancel",
    defaultMessage: "Stop downloading",
    description: "Action that stops an active download",
  });
  const pauseLabel = intl.formatMessage({
    id: "downloads.popover.pause",
    defaultMessage: "Pause",
    description: "Action that pauses a download",
  });
  const resumeLabel = intl.formatMessage({
    id: "downloads.popover.resume",
    defaultMessage: "Resume",
    description: "Action that resumes a paused download",
  });
  if (pending) {
    return <Spinner className="icon-xs shrink-0" />;
  }
  if (download.status === "paused") {
    return (
      <div className="flex shrink-0 items-center gap-1">
        <DownloadIconButton
          label={resumeLabel}
          disabled={!download.canResume}
          onClick={onResume}
        >
          <CirclePlayIcon className="icon-sm" />
        </DownloadIconButton>
        <DownloadIconButton
          label={cancelLabel}
          disabled={!download.canCancel}
          onClick={onCancel}
        >
          <CloseIcon className="icon-sm" />
        </DownloadIconButton>
      </div>
    );
  }
  if (download.status === "started" || download.status === "in_progress") {
    return (
      <div className="flex shrink-0 items-center gap-1">
        <DownloadIconButton
          label={pauseLabel}
          disabled={!download.canPause}
          onClick={onPause}
        >
          <CirclePauseIcon className="icon-sm" />
        </DownloadIconButton>
        <DownloadIconButton
          label={cancelLabel}
          disabled={!download.canCancel}
          onClick={onCancel}
        >
          <CloseIcon className="icon-sm" />
        </DownloadIconButton>
      </div>
    );
  }
  return (
    <DropdownMenu
      align="end"
      contentWidth="menu"
      triggerButton={
        <Button
          type="button"
          color="ghostTertiary"
          size="icon"
          uniform
          className="!bg-transparent"
          aria-label={menuLabel}
        >
          <EllipsisHorizontalIcon className="icon-sm" />
        </Button>
      }
    >
      {menuItems.map(renderDownloadMenuItem)}
    </DropdownMenu>
  );
}

function renderDownloadMenuItem(item: DownloadMenuItem) {
  if (item.type === "separator") {
    return <Dropdown.Separator key={item.id} />;
  }
  return (
    <Dropdown.Item
      key={item.id}
      disabled={item.enabled === false}
      onSelect={item.onSelect}
    >
      {item.message == null ? (
        item.id
      ) : (
        <FormattedMessage {...item.message} values={item.messageValues} />
      )}
    </Dropdown.Item>
  );
}

type BuildDownloadMenuItemsInput = {
  download: DownloadEntry;
  onCancel: () => void;
  onCopyError: (error: unknown) => void;
  onOpen: () => void;
  onRemove: () => void;
  onShowInFolder: () => void;
  platform: DownloadPlatform;
};

function buildDownloadMenuItems({
  download,
  onCancel,
  onCopyError,
  onOpen,
  onRemove,
  onShowInFolder,
  platform,
}: BuildDownloadMenuItemsInput): DownloadMenuItem[] {
  const items: DownloadMenuItem[] = [];
  if (download.status === "complete") {
    items.push({
      id: "download-open",
      message: defineMessage({
        id: "downloads.popover.open",
        defaultMessage: "Open",
        description: "Action that opens a downloaded file",
      }),
      enabled: download.exists,
      onSelect: () => {
        onOpen();
      },
    });
  }
  items.push({
    id: "download-show-in-folder",
    message: getShowInFolderMessage(platform),
    enabled: download.exists,
    onSelect: () => {
      onShowInFolder();
    },
  });
  if (ACTIVE_DOWNLOAD_STATUSES.has(download.status)) {
    items.push({
      id: "download-stop",
      message: defineMessage({
        id: "downloads.popover.stop",
        defaultMessage: "Stop",
        description: "Action that stops an active download",
      }),
      enabled: download.canCancel,
      onSelect: () => {
        onCancel();
      },
    });
  }
  items.push(
    {
      id: "download-copy-address",
      message: defineMessage({
        id: "downloads.popover.copyAddress",
        defaultMessage: "Copy address",
        description: "Action that copies the source URL of a download",
      }),
      onSelect: () => {
        copyToClipboard(download.url).catch(onCopyError);
      },
    },
    {
      id: "download-copy-path",
      message: defineMessage({
        id: "downloads.popover.copyPath",
        defaultMessage: "Copy path",
        description: "Action that copies the local path of a download",
      }),
      onSelect: () => {
        copyToClipboard(download.path).catch(onCopyError);
      },
    },
  );
  if (TERMINAL_DOWNLOAD_STATUSES.has(download.status)) {
    items.push(
      {
        id: "download-remove-separator",
        type: "separator",
      },
      {
        id: "download-remove",
        message: defineMessage({
          id: "downloads.popover.remove",
          defaultMessage: "Remove from list",
          description:
            "Action that removes a download from the downloads history",
        }),
        onSelect: () => {
          onRemove();
        },
      },
    );
  }
  return items;
}

function getShowInFolderMessage(platform: DownloadPlatform): MessageDescriptor {
  switch (platform) {
    case "macOS":
      return defineMessage({
        id: "downloads.popover.showInFinder",
        defaultMessage: "Show in Finder",
        description: "Action that reveals a downloaded file in Finder",
      });
    case "windows":
      return defineMessage({
        id: "downloads.popover.showInFileExplorer",
        defaultMessage: "Show in File Explorer",
        description: "Action that reveals a downloaded file in File Explorer",
      });
    case "linux":
      return defineMessage({
        id: "downloads.popover.showInFileManager",
        defaultMessage: "Show in File Manager",
        description:
          "Action that reveals a downloaded file in the system file manager",
      });
  }
}

type DownloadIconButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  label: string;
  onClick: () => void;
};

function DownloadIconButton({
  children,
  disabled,
  label,
  onClick,
}: DownloadIconButtonProps) {
  return (
    <Tooltip tooltipContent={label}>
      <Button
        type="button"
        color="ghostTertiary"
        size="icon"
        uniform
        aria-label={label}
        disabled={disabled}
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

type DownloadMetadataProps = {
  download: DownloadEntry;
};

function DownloadMetadata({ download }: DownloadMetadataProps) {
  const intl = useIntl();
  const parts =
    download.status === "complete"
      ? [
          formatDownloadByteProgress(download, intl),
          formatDownloadTimestamp(download.updatedAtMs, intl),
        ]
      : describeDownloadStatusParts(download, intl);
  return (
    <div className="flex min-w-0 items-center gap-1.5 text-xs text-token-text-tertiary">
      <DownloadSourceBadge source={download.source} />
      <span className="min-w-0 truncate">
        {parts.join(` ${DOWNLOAD_METADATA_SEPARATOR} `)}
      </span>
    </div>
  );
}

type DownloadSourceBadgeProps = {
  source: string;
};

function DownloadSourceBadge({ source }: DownloadSourceBadgeProps) {
  const intl = useIntl();
  if (source !== "agent") return null;
  const label = intl.formatMessage({
    id: "downloads.source.agent",
    defaultMessage: "Downloaded by Codex",
    description: "Tooltip for downloads started by Codex",
  });
  return (
    <Tooltip tooltipContent={label}>
      <span
        role="img"
        aria-label={label}
        className="inline-flex shrink-0 text-token-text-tertiary"
      >
        <CodexAgentSparkIcon className="icon-xxs" />
      </span>
    </Tooltip>
  );
}

type DownloadsEmptyStateProps = {
  description?: React.ReactNode;
  icon: React.ReactNode;
  title: React.ReactNode;
};

function DownloadsEmptyState({
  description,
  icon,
  title,
}: DownloadsEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 text-center text-token-text-tertiary">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-token-foreground/5">
        {icon}
      </div>
      <div className="text-sm font-medium text-token-foreground">{title}</div>
      {description == null ? null : (
        <div className="max-w-[260px] text-xs">{description}</div>
      )}
    </div>
  );
}

function describeDownloadStatusParts(
  download: DownloadEntry,
  intl: IntlShape,
): string[] {
  switch (download.status) {
    case "in_progress":
      return [
        formatDownloadTransferRate(download, intl),
        formatDownloadByteProgress(download, intl),
        formatDownloadTimeRemaining(download, intl),
      ];
    case "started":
      return [
        intl.formatMessage({
          id: "downloads.status.started",
          defaultMessage: "Starting",
          description: "Download status label",
        }),
        formatDownloadByteProgress(download, intl),
      ];
    case "paused":
      return [
        intl.formatMessage({
          id: "downloads.status.paused",
          defaultMessage: "Paused",
          description: "Download status label",
        }),
        formatDownloadByteProgress(download, intl),
      ];
    case "failed":
      return [
        intl.formatMessage({
          id: "downloads.status.failed",
          defaultMessage: "Failed",
          description: "Download status label",
        }),
        formatDownloadByteProgress(download, intl),
      ];
    case "canceled":
      return [
        intl.formatMessage({
          id: "downloads.status.canceled",
          defaultMessage: "Stopped",
          description: "Download status label",
        }),
        ...(download.receivedBytes > 0
          ? [formatDownloadByteProgress(download, intl)]
          : []),
        formatDownloadTimestamp(download.updatedAtMs, intl),
      ];
    case "complete":
      return [formatDownloadByteProgress(download, intl)];
  }
}
