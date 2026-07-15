// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small presentational primitives shared by split onboarding chunks.
import * as React from "react";
import clsx from "clsx";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { Tooltip } from "../ui/tooltip-b";
import { FormattedMessage, defineMessages } from "../vendor/react-intl";

type ClassNameProps = {
  className?: string;
};

export interface ActivityResultCardProps extends ClassNameProps {
  children: React.ReactNode;
}

export function ActivityResultCard({
  children,
  className,
}: ActivityResultCardProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border border-token-border bg-token-bg-primary text-token-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface ActivityResultCardRowProps extends ClassNameProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
}

export function ActivityResultCardRow({
  className,
  icon,
  title,
  subtitle,
  trailing,
}: ActivityResultCardRowProps) {
  return (
    <div
      className={clsx(
        "flex min-w-0 items-center gap-3 px-3 py-2.5",
        className,
      )}
    >
      {icon}
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-token-foreground">
          {title}
        </div>
        {subtitle ? (
          <div className="truncate text-xs text-token-description-foreground">
            {subtitle}
          </div>
        ) : null}
      </div>
      {trailing ? <div className="shrink-0">{trailing}</div> : null}
    </div>
  );
}

export interface ActivityResultCardActionProps extends ClassNameProps {
  label: React.ReactNode;
}

export function ActivityResultCardAction({
  className,
  label,
}: ActivityResultCardActionProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 text-sm font-medium text-token-link",
        className,
      )}
    >
      {label}
      <ChevronRightIcon className="icon-2xs" aria-hidden={true} />
    </span>
  );
}

export interface DialogHeaderRowProps extends ClassNameProps {
  icon?: React.ReactNode;
  iconBackgroundClassName?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function DialogHeaderRow({
  className,
  icon,
  iconBackgroundClassName,
  title,
  subtitle,
}: DialogHeaderRowProps) {
  return (
    <div className={clsx("flex min-w-0 items-start gap-3", className)}>
      {icon ? (
        <span
          className={clsx(
            "flex size-8 shrink-0 items-center justify-center rounded-lg",
            iconBackgroundClassName ?? "bg-token-bg-secondary",
          )}
        >
          {icon}
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="text-base font-semibold text-token-foreground">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-1 text-sm text-token-description-foreground">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export interface DisabledActionTooltipProps {
  children: React.ReactNode;
  disabled?: boolean;
  tooltipContent?: React.ReactNode;
}

export function DisabledActionTooltip({
  children,
  disabled,
  tooltipContent,
}: DisabledActionTooltipProps) {
  return (
    <Tooltip disabled={disabled} tooltipContent={tooltipContent}>
      {children}
    </Tooltip>
  );
}

export interface InlineTranscriptStatusMessageProps extends ClassNameProps {
  icon?: React.ReactNode;
  message: React.ReactNode;
  wrapMessage?: boolean;
}

export function InlineTranscriptStatusMessage({
  className,
  icon,
  message,
  wrapMessage = false,
}: InlineTranscriptStatusMessageProps) {
  return (
    <div
      className={clsx(
        "text-size-chat-sm flex min-w-0 items-center gap-2 text-token-description-foreground",
        className,
      )}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span className={wrapMessage ? "min-w-0" : "min-w-0 truncate"}>
        {message}
      </span>
    </div>
  );
}

type AttachmentChipIcon = React.ComponentType<{ className?: string }>;

export interface MessageAttachmentChipProps extends ClassNameProps {
  filename: React.ReactNode;
  Icon?: AttachmentChipIcon;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function MessageAttachmentChip({
  className,
  filename,
  Icon,
  onClick,
}: MessageAttachmentChipProps) {
  const content = (
    <>
      {Icon ? <Icon className="icon-xs shrink-0" /> : null}
      <span className="min-w-0 truncate">{filename}</span>
    </>
  );
  const chipClassName = clsx(
    "composer-attachment-surface inline-flex max-w-full items-center gap-1.5 rounded-lg border border-token-border px-2 py-1 text-sm text-token-foreground",
    onClick && "cursor-interaction hover:bg-token-list-hover-background",
    className,
  );

  return onClick ? (
    <button type="button" className={chipClassName} onClick={onClick}>
      {content}
    </button>
  ) : (
    <span className={chipClassName}>{content}</span>
  );
}

export interface RelativeTimeLabelProps {
  dateString: string;
}

const relativeTimeMessages = defineMessages({
  day: {
    id: "codex.relativeTime.days",
    defaultMessage: "{value, plural, one {# day} other {# days}}",
  },
  hour: {
    id: "codex.relativeTime.hours",
    defaultMessage: "{value, plural, one {# hour} other {# hours}}",
  },
  minute: {
    id: "codex.relativeTime.minutes",
    defaultMessage: "{value, plural, one {# minute} other {# minutes}}",
  },
  month: {
    id: "codex.relativeTime.months",
    defaultMessage: "{value, plural, one {# month} other {# months}}",
  },
  second: {
    id: "codex.relativeTime.seconds",
    defaultMessage: "{value, plural, one {# second} other {# seconds}}",
  },
  week: {
    id: "codex.relativeTime.weeks",
    defaultMessage: "{value, plural, one {# week} other {# weeks}}",
  },
  year: {
    id: "codex.relativeTime.years",
    defaultMessage: "{value, plural, one {# year} other {# years}}",
  },
});

export function RelativeTimeLabel({ dateString }: RelativeTimeLabelProps) {
  const label = React.useMemo(() => formatRelativeDuration(dateString), [
    dateString,
  ]);
  if (label == null) return null;
  return (
    <FormattedMessage
      {...relativeTimeMessages[label.unit]}
      values={{ value: label.value }}
    />
  );
}

type RelativeUnit =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";

function formatRelativeDuration(
  dateString: string,
): { value: number; unit: RelativeUnit } | null {
  const timestamp = new Date(dateString).getTime();
  if (!Number.isFinite(timestamp)) return null;
  const elapsedSeconds = Math.max(0, Math.floor((Date.now() - timestamp) / 1000));
  const units: Array<[RelativeUnit, number]> = [
    ["year", 31_536_000],
    ["month", 2_592_000],
    ["week", 604_800],
    ["day", 86_400],
    ["hour", 3_600],
    ["minute", 60],
    ["second", 1],
  ];
  const fallback = units[units.length - 1];
  const [unit, secondsPerUnit] =
    units.find(([, seconds]) => elapsedSeconds >= seconds) ?? fallback;
  return {
    unit,
    value: Math.max(1, Math.floor(elapsedSeconds / secondsPerUnit)),
  };
}
