// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File and folder attachment pill/card components for composer messages.

import { useState } from "react";
import type { ReactNode } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { FormattedMessage, useIntl } from "../vendor/react-intl";

import { Tooltip } from "../ui/tooltip-b";
import { vscodeApiU as TimeConstants } from "../boundaries/vscode-api";
import {
  AttachmentCardSurface,
  AttachmentCardTile,
  RemoveAttachmentCardButton,
  codexHostRequest,
  resolveFileIcon,
} from "../boundaries/user-message-attachments.facade";
import { AttachmentPill } from "./attachment-pill";
import type { AttachmentLayout, IconComponent } from "./attachment-pill-types";

function useFolderFileCountQuery(
  folderPath: string,
  hostId: string,
  enabled: boolean,
) {
  return useQuery({
    enabled,
    queryKey: ["folder-file-count", hostId, folderPath],
    queryFn: () =>
      codexHostRequest.fileAttachments.countFolderFiles({ folderPath, hostId }),
    staleTime: TimeConstants.THIRTY_SECONDS,
  });
}

export interface FileAttachmentPillProps {
  filename: string;
  resourcePath?: string;
  folderPath?: string | null;
  folderHostId?: string | null;
  onRemove?: () => void;
  onRemoveAriaLabel?: string;
  onClick?: () => void;
  lineInfo?: string;
  Icon?: IconComponent;
  layout?: AttachmentLayout;
  subtitle?: ReactNode;
}

export function FileAttachmentPill({
  filename,
  resourcePath,
  folderPath,
  folderHostId,
  onRemove,
  onRemoveAriaLabel,
  onClick,
  lineInfo,
  Icon,
  layout = "pill",
  subtitle,
}: FileAttachmentPillProps) {
  const displayPath = resourcePath ?? filename;
  const intl = useIntl();
  const FileIcon: IconComponent = Icon ?? resolveFileIcon(displayPath);
  const isFolder = /[\\/]$/.test(displayPath);

  const removeAriaLabel =
    onRemoveAriaLabel ??
    (onRemove
      ? intl.formatMessage(
          {
            id: "fileAttachment.removeAriaLabel",
            defaultMessage: "Remove {filename}",
            description: "Aria label for the remove file attachment button",
          },
          { filename },
        )
      : undefined);

  if (layout === "card") {
    const extension = getUppercaseExtension(filename);
    const clickOverlay = onClick ? (
      <button
        type="button"
        className="absolute inset-0 cursor-interaction bg-transparent group-hover/file-attachment:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
        onClick={onClick}
        aria-label={filename}
      />
    ) : null;
    const iconNode = (
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
        <FileIcon className="size-6" />
      </span>
    );
    const titleNode = (
      <span className="block max-w-32 truncate">{filename}</span>
    );
    const subtitleNode =
      subtitle ??
      (isFolder ? (
        <FormattedMessage
          id="fileAttachment.folderSubtitle"
          defaultMessage="Folder"
          description="Attachment card subtitle identifying an attached folder"
        />
      ) : (
        formatFileAttachmentSubtitle(extension, lineInfo, intl)
      ));
    const tile = (
      <AttachmentCardTile
        className="pointer-events-none relative z-10 h-full"
        icon={iconNode}
        padding="compact"
        reserveTrailingSpace={onRemove != null}
        title={titleNode}
        subtitle={subtitleNode}
      />
    );
    const removeButton = onRemove ? (
      <RemoveAttachmentCardButton
        className="top-1 right-1 z-20"
        ariaLabel={removeAriaLabel}
        onRemove={onRemove}
      />
    ) : null;
    const card = (
      <AttachmentCardSurface
        as="span"
        className="composer-attachment-surface group/file-attachment relative w-fit max-w-64 flex-shrink-0 bg-token-input-background"
      >
        {clickOverlay}
        {tile}
        {removeButton}
      </AttachmentCardSurface>
    );
    if (!isFolder || folderPath == null || folderHostId == null) return card;
    return (
      <FolderFileCountTooltip folderPath={folderPath} hostId={folderHostId}>
        {card}
      </FolderFileCountTooltip>
    );
  }

  const lineInfoNode = lineInfo ? (
    <span className="shrink-0 font-normal text-token-input-placeholder-foreground">
      <FormattedMessage
        id="fileAttachment.lineInfo"
        defaultMessage="{lineInfo}"
        description="Line range or number for a file attachment, no surrounding punctuation"
        values={{ lineInfo }}
      />
    </span>
  ) : null;
  return (
    <AttachmentPill
      Icon={FileIcon}
      onClick={onClick}
      onRemove={onRemove}
      layout={layout}
      onRemoveAriaLabel={removeAriaLabel}
    >
      <span className="flex max-w-full min-w-0 items-center gap-1">
        <span className="truncate">{filename}</span>
        {lineInfoNode}
      </span>
    </AttachmentPill>
  );
}

export function initFileAttachmentPillChunk(): void {}

interface FolderFileCountTooltipProps {
  children: ReactNode;
  folderPath: string;
  hostId: string;
}

function FolderFileCountTooltip({
  children,
  folderPath,
  hostId,
}: FolderFileCountTooltipProps) {
  const [enabled, setEnabled] = useState(false);
  const queryOptions = useFolderFileCountQuery(folderPath, hostId, enabled);
  const { data } = useSuspenseQuery(queryOptions);
  return (
    <span
      className="contents"
      onBlur={() => setEnabled(false)}
      onFocus={() => setEnabled(true)}
      onPointerEnter={() => setEnabled(true)}
      onPointerLeave={() => setEnabled(false)}
    >
      <Tooltip
        defaultOpen={enabled}
        tooltipContent={
          data == null ? null : <FolderFileCountMessage count={data} />
        }
      >
        {children}
      </Tooltip>
    </span>
  );
}

function FolderFileCountMessage({ count }: { count: number }) {
  if (count === 1000) {
    return (
      <FormattedMessage
        id="fileAttachment.folderFileCountCapped"
        defaultMessage="{count, number}+ files"
        description="Tooltip text showing that an attached folder contains at least the displayed number of files"
        values={{ count }}
      />
    );
  }
  return (
    <FormattedMessage
      id="fileAttachment.folderFileCount"
      defaultMessage="{count, plural, one {# file} other {# files}}"
      description="Tooltip text showing the recursive file count inside an attached folder"
      values={{ count }}
    />
  );
}

function getUppercaseExtension(filename: string): string | null {
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex <= 0 || dotIndex === filename.length - 1
    ? null
    : filename.slice(dotIndex + 1).toUpperCase();
}

function formatFileAttachmentSubtitle(
  extension: string | null,
  lineInfo: string | undefined,
  intl: ReturnType<typeof useIntl>,
): ReactNode {
  if (extension == null) return lineInfo ?? null;
  if (lineInfo == null) return extension;
  return intl.formatMessage(
    {
      id: "fileAttachment.cardSubtitle",
      defaultMessage: "{extension} · {lineInfo}",
      description:
        "File attachment subtitle showing file extension and attached line range",
    },
    { extension, lineInfo },
  );
}
