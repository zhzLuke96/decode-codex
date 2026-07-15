// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactElement } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import { Tooltip } from "../../ui/tooltip-b";
import { AutomationSaveTooltip } from "../automation-save-tooltip";
import {
  hostBridge,
  OpenInIcon,
} from "../../boundaries/onboarding-commons-externals.facade";
import { AUTOMATION_SIDE_PANEL_FORM_ID } from "./constants";
import type { AutomationSidePanelController } from "./use-automation-side-panel-controller";

export function AutomationSidePanelFooter({
  controller,
}: {
  controller: AutomationSidePanelController;
}): ReactElement {
  const {
    canSave,
    draft,
    handleRetry,
    isSaving,
    isUpdatePending,
    onClose,
    retryNeeded,
    session,
    updatePayload,
  } = controller;
  const saveTooltip = canSave ? null : (
    <AutomationSaveTooltip
      draft={draft}
      action={updatePayload == null ? "create" : "save"}
    />
  );

  return (
    <div className="flex shrink-0 items-center justify-end gap-2 border-t border-token-border p-panel">
      {session.type === "proposal" ? (
        <>
          <Button color="ghost" size="toolbar" onClick={onClose}>
            <FormattedMessage
              id="automation.sidePanel.cancel"
              defaultMessage="Cancel"
              description="Cancel button label for the scheduled task editor"
            />
          </Button>
          <Tooltip
            tooltipContent={saveTooltip}
            disabled={saveTooltip == null}
            delayOpen
          >
            <span className="inline-flex">
              <Button
                color="outline"
                size="toolbar"
                type="submit"
                form={`${AUTOMATION_SIDE_PANEL_FORM_ID}-prompt`}
                className={canSave ? undefined : "pointer-events-none"}
                loading={isSaving}
                disabled={!canSave}
              >
                {session.targetAutomationId == null ? (
                  <FormattedMessage
                    id="automation.sidePanel.createSuggestion"
                    defaultMessage="Create scheduled task"
                    description="Button label for accepting a suggested scheduled task"
                  />
                ) : (
                  <FormattedMessage
                    id="automation.sidePanel.applySuggestion"
                    defaultMessage="Apply changes"
                    description="Button label for accepting a suggested scheduled task update"
                  />
                )}
              </Button>
            </span>
          </Tooltip>
        </>
      ) : (
        <>
          {retryNeeded ? (
            <Button
              color="outline"
              size="toolbar"
              loading={isUpdatePending}
              onClick={handleRetry}
            >
              <FormattedMessage
                id="automation.sidePanel.retrySave"
                defaultMessage="Retry save"
                description="Button label for retrying a failed scheduled task save"
              />
            </Button>
          ) : null}
          <Button
            color="outline"
            size="toolbar"
            onClick={() => {
              hostBridge.dispatchHostMessage({
                type: "navigate-to-route",
                path: `/automations?automationId=${session.automationId}`,
              });
            }}
          >
            <FormattedMessage
              id="automation.sidePanel.showAutomation"
              defaultMessage="Open in Scheduled"
              description="Button label for opening the full scheduled task page from the thread side panel"
            />
            <OpenInIcon className="icon-2xs" />
          </Button>
        </>
      )}
    </div>
  );
}
