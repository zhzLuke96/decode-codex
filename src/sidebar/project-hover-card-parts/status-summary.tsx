// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Chat, waiting, unread, and active status summary rows for the project hover card.
import {
  ActivityIcon,
  FormattedMessage,
  useIntl,
  WaitingStatusIcon,
} from "../../runtime/project-hover-card-runtime";
import { ChatIcon as ChatCountIcon } from "../../icons/chat-icon";
import { getProjectHoverCardMessage } from "./messages";
import { ProjectHoverCardInfoRow, ProjectHoverCardRow } from "./rows";
import type { IntlShape, ProjectAttentionCounts } from "./types";

export function ProjectHoverCardStatusSummary({
  attentionCounts,
  chatCount,
  separateStatusRows,
}: {
  attentionCounts: ProjectAttentionCounts;
  chatCount: number;
  separateStatusRows: boolean;
}) {
  const intl = useIntl() as IntlShape;
  const statusLabels = buildProjectHoverCardStatusLabels({
    attentionCounts,
    chatCount,
    intl,
  });

  if (!separateStatusRows) {
    return (
      <ProjectHoverCardRow icon={<ChatCountIcon className="icon-xs" />}>
        <span className="flex min-w-0 flex-1 flex-wrap text-sm leading-5 text-token-foreground">
          {statusLabels.map((label, index) => (
            <ProjectHoverCardInlineStatusPart
              key={label}
              label={label}
              index={index}
            />
          ))}
        </span>
      </ProjectHoverCardRow>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-0.5">
      <ProjectHoverCardInfoRow
        icon={<ChatCountIcon className="icon-xs" />}
        label={intl.formatMessage(getProjectHoverCardMessage("chatCount"), {
          count: chatCount,
        })}
      />
      {attentionCounts.waiting > 0 ? (
        <ProjectHoverCardInfoRow
          icon={<WaitingStatusIcon className="icon-xs" />}
          label={intl.formatMessage(
            getProjectHoverCardMessage("waitingCount"),
            {
              count: attentionCounts.waiting,
            },
          )}
        />
      ) : null}
      {attentionCounts.unread > 0 ? (
        <ProjectHoverCardInfoRow
          icon={<span className="h-3 w-3 rounded-full bg-token-charts-blue" />}
          label={intl.formatMessage(getProjectHoverCardMessage("unreadCount"), {
            count: attentionCounts.unread,
          })}
        />
      ) : null}
      {attentionCounts.active > 0 ? (
        <ProjectHoverCardInfoRow
          icon={<ActivityIcon className="icon-xs" />}
          label={intl.formatMessage(getProjectHoverCardMessage("activeCount"), {
            count: attentionCounts.active,
          })}
        />
      ) : null}
    </div>
  );
}

function ProjectHoverCardInlineStatusPart({
  index,
  label,
}: {
  index: number;
  label: string;
}) {
  return (
    <span className="whitespace-nowrap">
      {index === 0 ? null : (
        <span
          aria-hidden={true}
          className="mx-1 text-token-description-foreground"
        >
          <FormattedMessage
            {...getProjectHoverCardMessage("statusSeparator")}
          />
        </span>
      )}
      {label}
    </span>
  );
}

function buildProjectHoverCardStatusLabels({
  attentionCounts,
  chatCount,
  intl,
}: {
  attentionCounts: ProjectAttentionCounts;
  chatCount: number;
  intl: IntlShape;
}) {
  return [
    intl.formatMessage(getProjectHoverCardMessage("chatCount"), {
      count: chatCount,
    }),
    attentionCounts.waiting > 0
      ? intl.formatMessage(getProjectHoverCardMessage("waitingCount"), {
          count: attentionCounts.waiting,
        })
      : null,
    attentionCounts.unread > 0
      ? intl.formatMessage(getProjectHoverCardMessage("unreadCount"), {
          count: attentionCounts.unread,
        })
      : null,
    attentionCounts.active > 0
      ? intl.formatMessage(getProjectHoverCardMessage("activeCount"), {
          count: attentionCounts.active,
        })
      : null,
  ].flatMap((label) => (label == null ? [] : [label]));
}
