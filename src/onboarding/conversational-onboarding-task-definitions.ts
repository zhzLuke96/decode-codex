// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared conversational-onboarding task types and the starter-task definition table.
import type { ComponentType, ReactNode } from "react";
import type { MessageDescriptor } from "../vendor/react-intl";

import { csvChartTask } from "./conversational-onboarding-csv-chart-task";
import { desktopNoteTask } from "./conversational-onboarding-desktop-note-task";
import { holdNextFreeHourTask } from "./conversational-onboarding-hold-next-free-hour-task";
import { messagingTask } from "./conversational-onboarding-messaging-task";

export type ConversationalOnboardingTaskId =
  | "desktop_note"
  | "csv_chart"
  | "hold_next_free_hour"
  | "send_message_to_self";

export type ConversationalOnboardingPluginName = "slack" | "teams";

interface ConversationalOnboardingTaskIconProps {
  appPlugin?: unknown;
  className?: string;
}

export interface ConversationalOnboardingTaskOption {
  Icon: ComponentType<ConversationalOnboardingTaskIconProps>;
  SelectionAttachment?: ComponentType;
  label: MessageDescriptor;
}

export interface ConversationalOnboardingTaskBase {
  option: ConversationalOnboardingTaskOption;
  View: ComponentType<Record<string, unknown>>;
  prepare?: (...args: unknown[]) => void;
  reset?: (...args: unknown[]) => void;
  retry?: (...args: unknown[]) => void;
  start?: (...args: unknown[]) => void | Promise<void>;
  getDeclinedRetryPrompt?: (...args: unknown[]) => ReactNode | string;
}

export interface ConversationalOnboardingMessagingTask
  extends ConversationalOnboardingTaskBase {
  getPluginName: (
    accountType: string,
  ) => ConversationalOnboardingPluginName | null;
}

export type ConversationalOnboardingTaskDefinition =
  | ConversationalOnboardingTaskBase
  | ConversationalOnboardingMessagingTask;

const conversationalOnboardingTaskDefinitionTable: Record<
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskDefinition
> = {
  desktop_note: desktopNoteTask,
  csv_chart: csvChartTask,
  hold_next_free_hour: holdNextFreeHourTask,
  send_message_to_self: messagingTask,
};

export const conversationalOnboardingTaskDefinitions =
  conversationalOnboardingTaskDefinitionTable;
