// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversational-onboarding "send a message to myself" starter task: Slack/Teams
// icon + completion UI, the per-account plugin resolution and connector prompts,
// and the task definition (built via the shared connector-task factory) consumed
// by the conversational-onboarding task registry.
import React from "react";

import { FormattedMessage, defineMessage, useIntl } from "../vendor/react-intl";
import type { IntlShape } from "../vendor/react-intl";
import {
  AppPlaceholderIcon,
  createConnectorOnboardingTask,
  KnownAppLogo,
  MessagingPlaceholderIcon,
  openExternalLink,
} from "../boundaries/onboarding-commons-externals.facade";
import { ConversationalOnboardingStreamingIntro } from "./conversational-onboarding-streaming-intro";
import type {
  ConversationalOnboardingMessagingTask,
  ConversationalOnboardingPluginName,
} from "./conversational-onboarding-task-registry";

const TEAMS_CREATE_CHAT_TOOL_ID = "microsoft_teams.create_chat";

interface MessagingAppPlugin {
  plugin: { name?: string };
  logoPath?: string;
  logoDarkPath?: string;
}

function MessagingAccessDeclinedMessage(): React.ReactElement {
  return (
    <p>
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.messagingAccessDeclined"
        defaultMessage="No problem — you can connect your messaging app later. You’re all set."
        description="Closing message when messaging access is declined during conversational onboarding"
      />
    </p>
  );
}

function MessagingAccessDescription(): React.ReactElement {
  return (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.messagingPermissionDescription"
      defaultMessage="Read and send messages"
      description="Description of messaging access requested during conversational onboarding"
    />
  );
}

interface MessagingTaskIconProps {
  appPlugin?: MessagingAppPlugin;
  className?: string;
}

export function MessagingTaskIcon({
  appPlugin,
  className,
}: MessagingTaskIconProps): React.ReactElement {
  return (
    <KnownAppLogo
      alt=""
      className={className}
      knownAppId={appPlugin?.plugin.name}
      logoDarkUrl={appPlugin?.logoDarkPath}
      logoUrl={appPlugin?.logoPath}
      fallback={<MessagingPlaceholderIcon className={className} />}
    />
  );
}

interface MessagingCompletionProps {
  appInfo?: unknown;
  appPluginName?: string;
  completion: { url: string };
}

function MessagingCompletion({
  appInfo,
  appPluginName = undefined,
  completion,
}: MessagingCompletionProps): React.ReactElement {
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
        fallback={<AppPlaceholderIcon className="size-5" />}
        knownAppId={appPluginName}
      />
      {appPluginName === "teams" ? (
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.teamsMessageLink"
          defaultMessage="Teams chat"
          description="Link label for the Teams message sent during conversational onboarding"
        />
      ) : (
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.slackMessageLink"
          defaultMessage="Slack DM"
          description="Link label for the Slack message sent during conversational onboarding"
        />
      )}
    </button>
  );
  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-center gap-1.5">
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.messagingCompletedLink"
          defaultMessage={"Message sent, here’s a link: {link}"}
          description="Link to the message sent during conversational onboarding"
          values={{ link: linkButton }}
        />
      </p>
      <ConversationalOnboardingStreamingIntro animate>
        {intl.formatMessage({
          id: "electron.onboarding.conversationalOnboarding.messagingCompletedFinal",
          defaultMessage:
            "That’s our first task done. When you’re ready, I can take it further: recurring reminders, scheduled updates, automations that run on their own. You’re all set.",
          description:
            "Final message after conversational onboarding sends a message",
        })}
      </ConversationalOnboardingStreamingIntro>
    </div>
  );
}

export const messagingTask: ConversationalOnboardingMessagingTask =
  createConnectorOnboardingTask({
    AccessDeclined: MessagingAccessDeclinedMessage,
    AccessDescription: MessagingAccessDescription,
    Completion: MessagingCompletion,
    getAccessIntro(intl: IntlShape) {
      return intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.messagingPermissionIntro",
        defaultMessage:
          "I can do that, but I’ll need access to your messaging app. Mind connecting it?",
        description:
          "Explanation before requesting messaging access during conversational onboarding",
      });
    },
    getApprovalMessage(toolId: string) {
      return defineMessage(
        toolId === TEAMS_CREATE_CHAT_TOOL_ID
          ? {
              id: "electron.onboarding.conversationalOnboarding.teamsChatMcpApprovalTitle",
              defaultMessage:
                "Allow {connectorName} to start a note-to-self chat?",
              description:
                "Approval request for creating a Teams chat during conversational onboarding",
            }
          : {
              id: "electron.onboarding.conversationalOnboarding.messagingMcpApprovalTitle",
              defaultMessage: "Allow {connectorName} to send a message?",
              description:
                "Approval request for sending the conversational onboarding message to the user",
            },
      );
    },
    getDeclinedRetryPrompt(intl: IntlShape) {
      return intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.messagingTaskDeclinedRetry",
        defaultMessage:
          "Got it. I won’t send a message right now. Want to try another quick example?",
        description:
          "Message shown after declining messaging access or an approved messaging action during conversational onboarding",
      });
    },
    getPluginDisplayName(plugin: ConversationalOnboardingPluginName) {
      return plugin === "slack" ? "Slack" : "Microsoft Teams";
    },
    option: {
      Icon: MessagingTaskIcon,
      label: defineMessage({
        id: "electron.onboarding.conversationalOnboarding.taskPicker.sendMessageToSelf",
        defaultMessage: "Send a message to myself",
        description:
          "Conversational onboarding starter task that sends the user a message",
      }),
    },
    getPluginName(accountType: string): ConversationalOnboardingPluginName {
      return accountType === "google" ? "slack" : "teams";
    },
    getPrompt(plugin: ConversationalOnboardingPluginName) {
      return plugin === "teams"
        ? [
            "Use the available Microsoft Teams integration to send the current user a note to self",
            "Prefer an existing self-chat; otherwise create a one-member group chat containing only the caller",
            "Send exactly `Hi from your agent!` and no additional message text",
            "Do not ask the user to identify themselves or choose a recipient",
            "The completion tool text must briefly confirm that the message was sent",
            "The completion tool url must be the direct URL returned for the sent Teams message",
            "If Microsoft Teams access is unavailable, explain that briefly and stop",
          ].join(". ")
        : [
            "Use the available Slack integration to read the current user's profile, then send a direct message to that same Slack user",
            "Send exactly `Hi from your ChatGPT assistant!` and no additional message text",
            "Do not ask the user to identify themselves or choose a recipient",
            "The completion tool text must briefly confirm that the message was sent",
            "The completion tool url must be the direct URL returned for the sent Slack message",
            "If Slack access is unavailable, explain that briefly and stop",
          ].join(". ");
    },
  });
