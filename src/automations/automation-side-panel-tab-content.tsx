// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Tab-host wrapper for the scheduled-task editor side panel: resolves the
// automation session (persisted vs. suggestion), loads the target automation and
// models, syncs the tab title, and renders <AutomationSidePanel/>. Also exposes
// the helper that opens this content in a new side-panel tab.
import type { ReactElement } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { AutomationSidePanel } from "./automation-side-panel";
import type { AutomationSession } from "./automation-side-panel";
import { automationsQuerySignal } from "../automation/automation-schedule/automations-query";
import {
  useAppScope,
  useAtomValue,
  useAutomationModelsQuery,
  resolveAutomationSession,
  sidePanelTabController,
  appRootScope,
  ScheduledTaskIcon,
  Spinner,
} from "../boundaries/onboarding-commons-externals.facade";

interface AutomationTabState {
  draftInstanceId: string;
  savedAutomationId: string | null;
}

export interface AutomationSidePanelTabContentProps {
  request: { type: string; [key: string]: unknown };
  setTabState: (
    update: (state: AutomationTabState) => AutomationTabState,
  ) => void;
  tabId: string;
  tabState: AutomationTabState;
}

export function ScheduledTaskTabIcon(): ReactElement {
  return <ScheduledTaskIcon className="icon-xs shrink-0" />;
}

function AutomationSidePanelLoading(): ReactElement {
  return (
    <div className="flex h-full min-h-0 items-center justify-center bg-token-main-surface-primary p-panel text-token-description-foreground">
      <Spinner className="icon-sm" />
    </div>
  );
}

function AutomationSidePanelMissing(): ReactElement {
  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary p-panel">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <div className="flex max-w-sm flex-col items-center gap-3 text-center">
          <span className="flex size-10 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
            <ScheduledTaskIcon className="icon-sm" />
          </span>
          <div className="text-lg text-token-foreground">
            <FormattedMessage
              id="automation.sidePanel.missingTitle"
              defaultMessage="Scheduled task unavailable"
              description="Title shown when a scheduled task side panel points to a missing scheduled task"
            />
          </div>
          <div className="text-sm text-token-description-foreground">
            <FormattedMessage
              id="automation.sidePanel.missingDescription"
              defaultMessage="This scheduled task may have been deleted or is no longer available on this machine"
              description="Description shown when a scheduled task side panel points to a missing scheduled task"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutomationSidePanelTabContent({
  request,
  setTabState,
  tabId,
  tabState,
}: AutomationSidePanelTabContentProps): ReactElement {
  const scope = useAppScope(appRootScope);
  const automationsQuery = useAtomValue(automationsQuerySignal);
  const { data: modelsData, isLoading: isLoadingModels } =
    useAutomationModelsQuery();

  const session: AutomationSession = resolveAutomationSession({
    request,
    savedAutomationId: tabState.savedAutomationId,
  });

  const targetAutomationId =
    session.type === "persisted"
      ? session.automationId
      : session.targetAutomationId;
  const automation =
    targetAutomationId == null
      ? null
      : (automationsQuery.data?.items.find(
          (item: { id: string }) => item.id === targetAutomationId,
        ) ?? null);

  const closeTab = () => {
    sidePanelTabController.closeTab(scope, tabId);
  };

  if (
    (targetAutomationId != null &&
      automation == null &&
      (automationsQuery.isLoading || automationsQuery.isFetching)) ||
    (modelsData == null && isLoadingModels)
  ) {
    return <AutomationSidePanelLoading />;
  }
  if (targetAutomationId != null && automation == null) {
    return <AutomationSidePanelMissing />;
  }

  const updateTabTitle = (name: string) => {
    const trimmed = name.trim();
    if (trimmed.length !== 0) {
      sidePanelTabController.updateTab(scope, tabId, {
        title: trimmed,
        tooltip: trimmed,
      });
    }
  };

  const panelKey =
    session.type === "persisted"
      ? `persisted:${session.automationId}`
      : `proposal:${session.seed.directiveKey}`;

  const handleSaved = (saved: { id: string; name: string }) => {
    setTabState((state) => ({ ...state, savedAutomationId: saved.id }));
    updateTabTitle(saved.name);
  };

  return (
    <AutomationSidePanel
      key={panelKey}
      automation={automation}
      draftInstanceId={tabState.draftInstanceId}
      models={modelsData?.models}
      session={session}
      onClose={closeTab}
      onNameChange={updateTabTitle}
      onSaved={handleSaved}
    />
  );
}

export interface OpenAutomationSidePanelTabOptions {
  scope: unknown;
  request: { type: string; [key: string]: unknown };
  tabId: string;
  title: string;
}

export function openAutomationSidePanelTab({
  scope,
  request,
  tabId,
  title,
}: OpenAutomationSidePanelTabOptions): void {
  sidePanelTabController.openTab(scope, AutomationSidePanelTabContent, {
    defaultState: () => ({
      draftInstanceId: crypto.randomUUID(),
      savedAutomationId: null,
    }),
    icon: <ScheduledTaskTabIcon />,
    props: { request },
    id: tabId,
    title,
    tooltip: title,
  });
}
