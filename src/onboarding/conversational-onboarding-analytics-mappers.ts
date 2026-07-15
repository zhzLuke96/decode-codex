// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared enum mappers for conversational-onboarding product analytics events.
import {
  ConversationalOnboardingAccessType,
  ConversationalOnboardingTaskType,
} from "./conversational-onboarding-product-events";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

export function mapConversationalOnboardingAccessType(
  task: ConversationalOnboardingTaskId,
): unknown {
  switch (task) {
    case "desktop_note":
      return ConversationalOnboardingAccessType.DESKTOP;
    case "csv_chart":
      return ConversationalOnboardingAccessType.CSV_PICKER;
    case "hold_next_free_hour":
      return ConversationalOnboardingAccessType.CALENDAR_APP;
    case "send_message_to_self":
      return ConversationalOnboardingAccessType.MESSAGING_APP;
  }
}

export function mapConversationalOnboardingTaskType(
  task: ConversationalOnboardingTaskId,
): unknown {
  switch (task) {
    case "desktop_note":
      return ConversationalOnboardingTaskType.DESKTOP_NOTE;
    case "csv_chart":
      return ConversationalOnboardingTaskType.CSV_CHART;
    case "hold_next_free_hour":
      return ConversationalOnboardingTaskType.HOLD_NEXT_FREE_HOUR;
    case "send_message_to_self":
      return ConversationalOnboardingTaskType.SEND_MESSAGE_TO_SELF;
  }
}
