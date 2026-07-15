// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  _appScopeO as useAppScopeContext,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { vscodeApiF as vscodeBridge } from "../../boundaries/vscode-api";
import { Button } from "../../ui/button";
import { Tooltip } from "../../ui/tooltip-b";
import { toastApiSignal } from "../../ui/toast-signal";
import { DialogSection } from "../../ui/dialog-layout";
import { ArrowUpRightLgIcon } from "../../icons/arrow-up-right-lg-icon";
import { LinkIcon } from "../../icons/link-icon";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { ShareDialogPrimaryActions } from "../../collaboration/use-workspace-users";
import { noop } from "./share-target-options";
import type { ShareDialogFooterProps } from "./types";
export function ShareDialogFooter({
  accessMode,
  hasPendingAccessChange,
  hasPendingInvitees,
  isSaving,
  liveUrl,
  onCancelChanges,
  onDone,
}: ShareDialogFooterProps) {
  const intl = useIntl();
  const appScope = useAppScopeContext(appScopeRoot);
  const copyLinkTooltip = getFooterActionTooltip({
    action: "copyLink",
    isSaving,
    liveUrl,
  });
  const visitTooltip = getFooterActionTooltip({
    action: "visit",
    isSaving,
    liveUrl,
  });
  const publishLabel =
    accessMode === "public" ? (
      <FormattedMessage
        id="appgenShareDialog.publish"
        defaultMessage="Publish"
        description="Button label for publishing a site to the public internet"
      />
    ) : undefined;
  const idleActions =
    liveUrl === undefined ? null : (
      <div className="flex items-center gap-2">
        <Tooltip tooltipContent={visitTooltip}>
          <span className="inline-flex">
            <Button
              color="outline"
              disabled={isSaving || liveUrl == null}
              size="toolbar"
              onClick={() => {
                if (liveUrl != null) {
                  vscodeBridge.dispatchMessage("open-in-browser", {
                    url: liveUrl,
                  });
                }
              }}
            >
              <ArrowUpRightLgIcon className="icon-xs" />
              <FormattedMessage
                id="appgenShareDialog.visit"
                defaultMessage="Visit"
                description="Button label for opening a live site externally"
              />
            </Button>
          </span>
        </Tooltip>
        <Tooltip tooltipContent={copyLinkTooltip}>
          <span className="inline-flex">
            <Button
              color="outline"
              disabled={isSaving || liveUrl == null}
              size="toolbar"
              onClick={() => {
                if (liveUrl != null) {
                  copyToClipboard(liveUrl).then(() => {
                    appScope.get(toastApiSignal).info(
                      intl.formatMessage({
                        id: "appgenShareDialog.copySuccess",
                        defaultMessage: "Copied to clipboard",
                        description:
                          "Toast shown after copying a live site URL",
                      }),
                    );
                  }, noop);
                }
              }}
            >
              <LinkIcon className="icon-xs" />
              <FormattedMessage
                id="appgenShareDialog.copyLink"
                defaultMessage="Copy link"
                description="Button label for copying a live site URL"
              />
            </Button>
          </span>
        </Tooltip>
      </div>
    );
  return (
    <DialogSection className="pt-4">
      <div className="flex w-full items-center justify-end gap-3">
        <ShareDialogPrimaryActions
          actions={{
            invite: {
              onClick: onDone,
            },
            share: {
              label: publishLabel,
              onClick: onDone,
            },
          }}
          cancelAction={{
            onClick: onCancelChanges,
          }}
          disabled={isSaving}
          hasPendingAccessChange={hasPendingAccessChange}
          hasPendingInvitees={hasPendingInvitees}
          idleActions={idleActions}
          isSaving={isSaving}
          savingAriaLabel={intl.formatMessage({
            id: "appgenShareDialog.saving",
            defaultMessage: "Saving",
            description:
              "Accessible label for the site share dialog save button while saving",
          })}
          size="toolbar"
          spinnerClassName="icon-xxs"
        />
      </div>
    </DialogSection>
  );
}
function getFooterActionTooltip({
  action,
  isSaving,
  liveUrl,
}: {
  action: "copyLink" | "visit";
  isSaving: boolean;
  liveUrl?: string | null;
}) {
  if (liveUrl == null) {
    switch (action) {
      case "copyLink":
        return (
          <FormattedMessage
            id="appgenShareDialog.copyLinkDisabled.notPublished"
            defaultMessage="Publish this site to copy its link"
            description="Tooltip explaining why the site share dialog copy link button is disabled"
          />
        );
      case "visit":
        return (
          <FormattedMessage
            id="appgenShareDialog.visitDisabled.notPublished"
            defaultMessage="Publish this site before visiting it"
            description="Tooltip explaining why the site share dialog visit button is disabled"
          />
        );
    }
  }
  return isSaving ? (
    <FormattedMessage
      id="appgenShareDialog.footerActionDisabled.saving"
      defaultMessage="Sharing settings are still saving"
      description="Tooltip explaining why site share dialog footer actions are disabled while saving"
    />
  ) : null;
}
