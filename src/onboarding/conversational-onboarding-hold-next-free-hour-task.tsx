// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversational-onboarding "schedule a focus block this week" starter task:
// Google/Outlook calendar icon + focus-block completion UI, the per-account
// connector resolution, the calendar-specific agent prompt, and the task
// definition (built via the shared connector-task factory) consumed by the
// conversational-onboarding task registry.
import React from "react";

import { FormattedMessage, defineMessage, useIntl } from "../vendor/react-intl";
import type { IntlShape } from "../vendor/react-intl";
import {
  KnownAppLogo,
  createConnectorOnboardingTask,
  openExternalLink,
} from "../boundaries/onboarding-commons-externals.facade";
import { CalendarIcon } from "../icons/calendar-icon";
import { MicrosoftIcon } from "../icons/microsoft-icon";
import { ConversationalOnboardingStreamingIntro } from "./conversational-onboarding-streaming-intro";
import type { ConversationalOnboardingTaskDefinition } from "./conversational-onboarding-task-registry";

const ONE_WEEK_MS = 604_800_000;

type CalendarAccountType = "google" | "microsoft";
type CalendarPluginName = "google-calendar" | "outlook-calendar";

interface CalendarAppPlugin {
  plugin: { name?: string };
  logoPath?: string;
  logoDarkPath?: string;
}

function getCalendarPluginDisplayName(pluginName: CalendarPluginName): string {
  return pluginName === "google-calendar"
    ? "Google Calendar"
    : "Outlook Calendar";
}

function CalendarAccessDeclinedMessage(): React.ReactElement {
  return (
    <p>
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.calendarAccessDeclined"
        defaultMessage="No problem — you can connect your calendar later. You’re all set."
        description="Closing message when calendar access is declined during conversational onboarding"
      />
    </p>
  );
}

function CalendarAccessDescription(): React.ReactElement {
  return (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.calendarPermissionDescription"
      defaultMessage="Manage calendar events and schedules"
      description="Description of calendar access requested during conversational onboarding"
    />
  );
}

interface CalendarTaskIconProps {
  appPlugin?: CalendarAppPlugin;
  className?: string;
}

export function CalendarTaskIcon({
  appPlugin,
  className,
}: CalendarTaskIconProps): React.ReactElement {
  return (
    <KnownAppLogo
      alt=""
      className={className}
      knownAppId={appPlugin?.plugin.name}
      logoDarkUrl={appPlugin?.logoDarkPath}
      logoUrl={appPlugin?.logoPath}
      fallback={<CalendarIcon className={className} />}
    />
  );
}

interface CalendarTaskCompletionProps {
  appInfo?: unknown;
  appPluginName?: string;
  completion: { url: string; output: string };
}

function CalendarTaskCompletion({
  appInfo,
  appPluginName = undefined,
  completion,
}: CalendarTaskCompletionProps): React.ReactElement {
  const intl = useIntl();
  const onOpenLink = (event: React.MouseEvent) => {
    openExternalLink({
      event,
      href: completion.url,
      initiator: "mcp_app_resource",
      openTarget: "external-browser",
    });
  };
  const linkButton = (
    <button
      type="button"
      className="text-token-text-link inline-flex cursor-interaction items-center gap-1.5 font-medium hover:underline"
      onClick={onOpenLink}
    >
      <KnownAppLogo
        alt=""
        appInfo={appInfo}
        className="size-5 object-contain"
        fallback={<MicrosoftIcon className="size-5" />}
        knownAppId={appPluginName}
      />
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.focusBlockLink"
        defaultMessage="Focus Block"
        description="Link label for the focus block created during conversational onboarding"
      />
    </button>
  );
  const heldMessage = (
    <ConversationalOnboardingStreamingIntro animate>
      {intl.formatMessage(
        {
          id: "electron.onboarding.conversationalOnboarding.calendarCompleted",
          defaultMessage: "I scheduled a 30-minute block: {dateTime}.",
          description:
            "Confirmation shown after conversational onboarding creates a focus block",
        },
        { dateTime: completion.output },
      )}
    </ConversationalOnboardingStreamingIntro>
  );
  const linkLine = (
    <p className="flex items-center gap-1.5">
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.calendarCompletedLink"
        defaultMessage={"Here’s a link: {link}"}
        description="Link to the calendar event created during conversational onboarding"
        values={{ link: linkButton }}
      />
    </p>
  );
  const finalMessage = (
    <ConversationalOnboardingStreamingIntro animate>
      {intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.calendarCompletedFinal",
        defaultMessage:
          "Now you’ve got focus time on the books. That’s our first task done. You’re ready to go.",
        description:
          "Final message after conversational onboarding creates a focus block",
      })}
    </ConversationalOnboardingStreamingIntro>
  );
  return (
    <div className="flex flex-col gap-4">
      {heldMessage}
      {linkLine}
      {finalMessage}
    </div>
  );
}

export const holdNextFreeHourTask: ConversationalOnboardingTaskDefinition =
  createConnectorOnboardingTask({
    AccessDeclined: CalendarAccessDeclinedMessage,
    AccessDescription: CalendarAccessDescription,
    Completion: CalendarTaskCompletion,
    getAccessIntro(intl: IntlShape) {
      return intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.calendarPermissionIntro",
        defaultMessage:
          "I can check that, but I’ll need access to your calendar. Mind connecting it?",
        description:
          "Explanation before requesting Google Calendar access during conversational onboarding",
      });
    },
    getApprovalMessage() {
      return defineMessage({
        id: "electron.onboarding.conversationalOnboarding.calendarMcpApprovalTitle",
        defaultMessage:
          "Allow {connectorName} to add “Focus time” to your calendar?",
        description:
          "Approval request for adding the conversational onboarding focus hold",
      });
    },
    getDeclinedRetryPrompt(intl: IntlShape) {
      return intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.calendarTaskDeclinedRetry",
        defaultMessage:
          "Got it. I won’t make changes to your calendar right now. Want to try another quick example?",
        description:
          "Message shown after declining calendar access or an approved calendar action during conversational onboarding",
      });
    },
    getPluginDisplayName: getCalendarPluginDisplayName,
    option: {
      Icon: CalendarTaskIcon,
      label: defineMessage({
        id: "electron.onboarding.conversationalOnboarding.taskPicker.holdNextFreeHour",
        defaultMessage: "Schedule a focus block this week",
        description:
          "Conversational onboarding starter task that holds the user's next free hour",
      }),
    },
    getPluginName(accountType: CalendarAccountType): CalendarPluginName {
      return accountType === "google" ? "google-calendar" : "outlook-calendar";
    },
    getPrompt(pluginName: CalendarPluginName, now: Date = new Date()) {
      const timeMin = now.toISOString();
      const timeMax = new Date(now.getTime() + ONE_WEEK_MS).toISOString();
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const lines = [
        `Use the available ${getCalendarPluginDisplayName(pluginName)} integration to find the user's first available 30-minute block from ${timeMin} through ${timeMax}`,
        `Only consider availability Monday through Friday from 9:00 AM through 5:00 PM in ${timeZone}; the block must start and end within those hours`,
        pluginName === "google-calendar"
          ? `Pass those exact RFC3339 values as the availability search's time_min and time_max, and use ${timeZone} as response_timezone_str`
          : `Search only within that exact range and use ${timeZone} as the response time zone`,
        "Use the user's primary calendar without asking follow-up questions",
      ];
      if (pluginName === "google-calendar") {
        lines.push(
          "Create one native Google Calendar Focus Time event titled `Focus time` for that block",
          "Call create_event with calendar_id `primary`, event_type `focusTime`, attendees `[]`, self_attendance `omit`, add_google_meet `false`, auto_decline_mode `declineNone`, chat_status `doNotDisturb`, transparency `opaque`, and timezone_str matching the response time zone",
          "Make only one native Focus Time attempt; if Google rejects it, create one standard busy event for the same block with event_type `default`, attendees `[]`, self_attendance `omit`, add_google_meet `false`, and transparency `opaque` instead of retrying other Focus Time variations",
        );
      } else {
        lines.push(
          "Create a calendar event titled `Focus time` for that block to hold it",
        );
      }
      lines.push(
        "The completion tool output must contain only the human-readable date and time that was held, such as `Tuesday, June 16, 9:00–9:30 AM`",
        "The completion tool url must be the direct URL returned for the created calendar event",
        "If calendar access is unavailable, explain that briefly and stop",
      );
      return lines.join(". ");
    },
  });
