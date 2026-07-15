// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// React Query cache helpers for the "list-automations" query plus automation
// mutation error-message mapping.

import {
  appMessenger,
  automationDeletedExternallyMessage,
  buildQueryKey,
} from "../boundaries/onboarding-commons-externals.facade";

const HEARTBEAT_ACTIVE_CONFLICT_MESSAGE =
  "This thread already has an active heartbeat automation. Only one automation can be attached to this thread. Either update the existing automation, or confirm with the user what they would like you to do. Don't make a workaround cron automation unless the user explicitly asked for that.";

export interface Automation {
  id: string;
  kind?: unknown;
  name?: string;
  rrule?: unknown;
  [key: string]: unknown;
}

export interface AutomationsListData {
  items: Automation[];
}

export interface AutomationSummary {
  kind: unknown;
  name: string | undefined;
  rrule: unknown;
}

export interface AutomationsListQueryClient {
  invalidateQueries(filters: { queryKey: unknown }): Promise<void>;
  setQueryData(
    queryKey: unknown,
    updater: (
      current: AutomationsListData | null | undefined,
    ) => AutomationsListData | null | undefined,
  ): void;
}

export function getAutomationMutationErrorMessage({
  error,
  mode,
}: {
  error: unknown;
  mode: string;
}): string {
  if (
    error instanceof Error &&
    error.message === "That thread already has an active heartbeat."
  ) {
    return HEARTBEAT_ACTIVE_CONFLICT_MESSAGE;
  }
  if (
    error instanceof Error &&
    error.message ===
      "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user."
  ) {
    return automationDeletedExternallyMessage;
  }
  return `Failed to ${mode} automation.`;
}

export function toAutomationSummary(automation: Automation): AutomationSummary {
  return {
    kind: automation.kind,
    name: automation.name,
    rrule: automation.rrule,
  };
}

export async function invalidateAutomationsListQuery(
  queryClient: AutomationsListQueryClient,
): Promise<void> {
  const queryKey = buildQueryKey("list-automations");
  await queryClient.invalidateQueries({ queryKey });
  appMessenger.dispatchMessage("query-cache-invalidate", {
    queryKey: [...queryKey],
  });
}

export function upsertAutomationInListCache(
  queryClient: AutomationsListQueryClient,
  automation: Automation,
): void {
  queryClient.setQueryData(buildQueryKey("list-automations"), (current) => {
    if (current == null) return current;
    const existingIndex = current.items.findIndex(
      (item) => item.id === automation.id,
    );
    return existingIndex === -1
      ? { items: [automation, ...current.items] }
      : {
          items: current.items.map((item) =>
            item.id === automation.id ? automation : item,
          ),
        };
  });
}

export function removeAutomationFromListCache(
  queryClient: AutomationsListQueryClient,
  automationId: string,
): void {
  queryClient.setQueryData(buildQueryKey("list-automations"), (current) =>
    current == null
      ? current
      : { items: current.items.filter((item) => item.id !== automationId) },
  );
}
