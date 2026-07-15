// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Product-analytics emitter for the "app access denied" step of the Electron
// conversational-onboarding flow.
import { logProductEvent } from "../analytics/product-logger";
import type { ProductLoggerScope } from "../analytics/product-logger";
// Generated protobuf enums + event descriptor for conversational-onboarding
// access events (aliases `Hu`, `Tr`, `pi`, `eo` in the source chunk). These live
// in a generated module owned by a sibling chunk that has not been restored yet;
// imported here by role.
import {
  ConversationalOnboardingAccessAction,
  conversationalOnboardingAccessEvent,
} from "./conversational-onboarding-product-events";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";
import {
  mapConversationalOnboardingAccessType,
  mapConversationalOnboardingTaskType,
} from "./conversational-onboarding-analytics-mappers";

export function trackConversationalOnboardingAccessDenied(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  logProductEvent(scope, conversationalOnboardingAccessEvent, {
    accessType: mapConversationalOnboardingAccessType(task),
    action: ConversationalOnboardingAccessAction.DENIED,
    taskType: mapConversationalOnboardingTaskType(task),
  });
}
