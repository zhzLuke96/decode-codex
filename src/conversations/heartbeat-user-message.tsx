// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// User-message-style row shown for a scheduled task (heartbeat) trigger message,
// with a label that opens the associated automation in the side panel.
import { useScope } from "../runtime/app-scope-hooks";
import { useIntl, FormattedMessage } from "../vendor/react-intl";
import { openAutomationTab } from "../automations/automation-side-panel-tabs";
import {
  appAtomScope,
  ScheduledTaskIcon,
  UserMessageRow,
} from "../boundaries/onboarding-commons-externals.facade";

export interface HeartbeatUserMessageProps {
  automationId?: string | null;
  message: unknown;
  sentAtMs: number;
  cwd: string | null;
  hostId: string | null;
  compactActions?: boolean;
}

export function HeartbeatUserMessage({
  automationId,
  message,
  sentAtMs,
  cwd,
  hostId,
  compactActions = false,
}: HeartbeatUserMessageProps) {
  const scope = useScope(appAtomScope);
  const intl = useIntl();
  const hasAutomation = automationId != null && automationId.length > 0;

  const handleLabelClick = () => {
    if (automationId == null || automationId.length === 0) return;
    openAutomationTab({
      scope,
      automationId,
      title: intl.formatMessage({
        id: "localConversation.heartbeatUserMessage.automationTabTitle",
        defaultMessage: "Scheduled task",
        description:
          "Right panel tab title for a scheduled task opened from a trigger message",
      }),
    });
  };

  const label = (
    <>
      <ScheduledTaskIcon className="icon-2xs" />
      <FormattedMessage
        id="localConversation.heartbeatUserMessage.automation"
        defaultMessage="Sent by scheduled task"
        description="Label shown above a user-message-style scheduled task trigger"
      />
    </>
  );

  return (
    <UserMessageRow
      label={label}
      message={message}
      sentAtMs={sentAtMs}
      cwd={cwd}
      hostId={hostId}
      compactActions={compactActions}
      onLabelClick={hasAutomation ? handleLabelClick : undefined}
    />
  );
}
