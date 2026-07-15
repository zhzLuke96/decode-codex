// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers that open the automation (scheduled task) editor side-panel tab,
// either for an existing automation or for a suggested-automation seed.
import {
  openAutomationSidePanelTab,
  getAutomationSuggestionTabId,
} from "../boundaries/onboarding-commons-externals.facade";

interface AutomationSuggestionSeed {
  directiveKey: string;
  [key: string]: unknown;
}

export interface OpenAutomationTabOptions {
  scope: unknown;
  automationId: string;
  title: string;
}

export interface OpenAutomationSuggestionTabOptions {
  scope: unknown;
  seed: AutomationSuggestionSeed;
  title: string;
}

export function initAutomationSidePanelTabsChunk(): void {}

export function openAutomationTab({
  scope,
  automationId,
  title,
}: OpenAutomationTabOptions): void {
  openAutomationSidePanelTab({
    scope,
    request: {
      type: "automation",
      automationId,
    },
    tabId: `automation:${automationId}`,
    title,
  });
}

export function openAutomationSuggestionTab({
  scope,
  seed,
  title,
}: OpenAutomationSuggestionTabOptions): void {
  openAutomationSidePanelTab({
    scope,
    request: {
      type: "suggestion",
      seed,
    },
    tabId: getAutomationSuggestionTabId(seed.directiveKey),
    title,
  });
}
