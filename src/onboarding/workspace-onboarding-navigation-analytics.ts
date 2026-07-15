// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js
// Product-analytics emitter + event descriptor for the workspace-onboarding
// navigation step (home page "pick workspace / continue" auto-launch flow).
// The emitter is the generic product-event dispatcher; the descriptor is the
// CodexOnboardingWorkspaceContinueClicked analytics event.
import { logProductEvent } from "../analytics/product-logger";
import type {
  ProductEventDescriptor,
  ProductLoggerScope,
} from "../analytics/product-logger";

export interface WorkspaceOnboardingNavigationEventPayload {
  selectedWorkspacesCount: number;
  totalWorkspacesCount: number;
  autoNavigated: boolean;
  experimentArm: string;
}

export const workspaceOnboardingNavigationEvent: ProductEventDescriptor = {
  $type: "protobuf_analytics_events.v1.CodexOnboardingWorkspaceContinueClicked",
};

export function logWorkspaceOnboardingEvent(
  scope: ProductLoggerScope,
  event: ProductEventDescriptor,
  payload: WorkspaceOnboardingNavigationEventPayload,
): void {
  logProductEvent(scope, event, payload);
}
