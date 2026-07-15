// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Generic feature announcement dialog shell used by the Sites/Appgen modal.
import type { ReactElement } from "react";
import clsx from "clsx";
import { XIcon } from "../icons/x-icon";
import { Button } from "../ui/button";
import { DialogLayout, DialogTitle } from "../ui/dialog-layout";
import { useIntl } from "../vendor/react-intl";
import type { FeatureAnnouncementModalProps } from "./appgen-announcement-types";

export function FeatureAnnouncementModal({
  body,
  closeButtonClassName,
  closeButtonTone = "light",
  disclaimerFooter,
  dismissLabel,
  media,
  mediaClassName,
  onDismiss,
  onPrimaryAction,
  onSecondaryAction,
  primaryActionLabel,
  title,
  titleClassName,
}: FeatureAnnouncementModalProps): ReactElement {
  const intl = useIntl();
  const handleOpenChange = (open: boolean) => {
    if (!open) onDismiss();
  };
  const closeLabel = intl.formatMessage({
    id: "codexUpgradeModal.close",
    defaultMessage: "Close",
    description: "Aria label for closing the Codex upgrade modal",
  });
  const mediaClass = clsx("relative w-full", mediaClassName ?? "h-[214px]");
  const closeButtonColor =
    closeButtonTone === "dark" ? "text-black" : "text-white";

  return (
    <DialogLayout
      open
      onOpenChange={handleOpenChange}
      contentProps={{ "aria-describedby": undefined }}
      size="feature"
      contentClassName="w-[min(480px,92vw)] overflow-hidden !rounded-[16px] !bg-token-dropdown-background !ring-0 !backdrop-blur-none shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
      showDialogClose={false}
    >
      <div className="pointer-events-auto relative flex max-h-[calc(100dvh-32px)] flex-col gap-10 overflow-y-auto pb-10">
        <div className={mediaClass}>
          {media}
          <button
            type="button"
            onClick={onDismiss}
            aria-label={closeLabel}
            className={clsx(
              "absolute top-[14px] right-[14px] cursor-interaction appearance-none rounded border-0 bg-transparent p-0.5 hover:opacity-80 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none",
              closeButtonColor,
              closeButtonClassName,
            )}
          >
            <XIcon className="icon-xs" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 px-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <DialogTitle asChild>
              <h2
                className={clsx("heading-dialog font-semibold", titleClassName)}
              >
                {title}
              </h2>
            </DialogTitle>
            {body}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {dismissLabel == null ? null : (
              <Button
                type="button"
                size="large"
                color="secondary"
                onClick={onSecondaryAction ?? onDismiss}
                className="justify-center"
              >
                {dismissLabel}
              </Button>
            )}
            <Button
              size="large"
              color="primary"
              className="justify-center"
              onClick={onPrimaryAction}
            >
              {primaryActionLabel}
            </Button>
          </div>
          {disclaimerFooter == null ? null : (
            <p className="-mt-3 text-xs leading-5 text-token-text-tertiary">
              {disclaimerFooter}
            </p>
          )}
        </div>
      </div>
    </DialogLayout>
  );
}
