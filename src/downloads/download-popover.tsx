// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser toolbar downloads button with a popover listing per-conversation downloads.
import * as React from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { DropdownMenu } from "../ui/dropdown";
import { Tooltip } from "../ui/tooltip-b";
import { Button } from "../ui/button";
import { DownloadIcon } from "../icons/download-icon";
import { FolderOpenIcon } from "../icons/folder-open-icon";
import {
  isActiveDownloadStatus,
  type DownloadItem,
} from "./download-formatting";
import {
  appStoreScope,
  toastControllerToken,
  useScopedStore,
  subscribeToDownloadsRegistry,
  getDownloadsRegistrySnapshot,
  selectConversationDownloads,
  BrowserDownloadsList,
} from "../boundaries/onboarding-commons-externals.facade";

type DownloadsRegistry = {
  downloads: unknown;
};

export type BrowserDownloadsService = {
  showDownloadsFolder(): Promise<{ ok: boolean }>;
};

export type BrowserDownloadsButtonProps = {
  conversationId: string;
  defaultOpen?: boolean;
  downloadsService: BrowserDownloadsService;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

function useDownloadsRegistry(): DownloadsRegistry | null {
  return React.useSyncExternalStore(
    subscribeToDownloadsRegistry,
    getDownloadsRegistrySnapshot,
    getDownloadsRegistrySnapshot,
  );
}

export function BrowserDownloadsButton({
  conversationId,
  defaultOpen = false,
  downloadsService,
  onOpenChange,
  open,
}: BrowserDownloadsButtonProps) {
  const registry = useDownloadsRegistry();
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const [isOpeningFolder, setIsOpeningFolder] = React.useState(false);
  const isOpen = open ?? uncontrolledOpen;
  const conversationDownloads: DownloadItem[] | null =
    registry == null
      ? null
      : selectConversationDownloads(registry.downloads, conversationId);
  const hasActiveDownload =
    conversationDownloads?.some((download) =>
      isActiveDownloadStatus(download.status),
    ) === true;
  const title = intl.formatMessage({
    id: "downloads.popover.title",
    defaultMessage: "Downloads",
    description: "Title for the downloads popover",
  });
  const openFolderLabel = intl.formatMessage({
    id: "downloads.popover.openFolder",
    defaultMessage: "Open folder",
    description: "Button that opens the system downloads folder",
  });

  const handleOpenChange = (nextOpen: boolean) => {
    setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  const handleOpenFolder = async () => {
    setIsOpeningFolder(true);
    try {
      if ((await downloadsService.showDownloadsFolder()).ok) {
        return;
      }
    } catch {
      // fall through to the error toast below
    } finally {
      setIsOpeningFolder(false);
    }
    store.get(toastControllerToken).danger(
      intl.formatMessage({
        id: "downloads.popover.openFolderError",
        defaultMessage: "Unable to open the downloads folder",
        description:
          "Error shown when the system downloads folder cannot be opened",
      }),
    );
  };

  if (
    (conversationDownloads == null || conversationDownloads.length === 0) &&
    !isOpen
  ) {
    return null;
  }

  return (
    <div className="ease-basic max-w-8 origin-right scale-100 overflow-visible opacity-100 transition-[max-width,opacity,transform] duration-150 motion-reduce:transition-none">
      <DropdownMenu
        align="end"
        contentWidth="panelWide"
        contentClassName="!bg-token-dropdown-background !p-0 !backdrop-blur-none"
        open={isOpen}
        onOpenChange={handleOpenChange}
        triggerButton={
          <Tooltip tooltipContent={title}>
            <Button
              type="button"
              color={hasActiveDownload ? "ghostActive" : "ghost"}
              size="toolbar"
              uniform={true}
              aria-label={title}
              data-browser-sidebar-skip-address-commit="true"
              data-state={isOpen ? "open" : undefined}
              className="relative"
            >
              <DownloadIcon className="icon-xs" />
              {hasActiveDownload ? (
                <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-token-charts-blue" />
              ) : null}
            </Button>
          </Tooltip>
        }
      >
        <div className="flex max-h-[480px] flex-col p-2">
          <div className="flex items-center justify-between gap-3 pr-1 pb-0 pl-2">
            <div className="min-w-0">
              <div className="text-base font-medium">
                <FormattedMessage
                  id="downloads.popover.title"
                  defaultMessage="Downloads"
                  description="Title for the downloads popover"
                />
              </div>
            </div>
            <Tooltip tooltipContent={openFolderLabel}>
              <Button
                type="button"
                color="ghost"
                size="toolbar"
                uniform={true}
                aria-label={openFolderLabel}
                loading={isOpeningFolder}
                onClick={() => {
                  handleOpenFolder();
                }}
              >
                <FolderOpenIcon className="icon-xs" />
              </Button>
            </Tooltip>
          </div>
          <BrowserDownloadsList
            conversationId={conversationId}
            downloadsService={downloadsService}
          />
        </div>
      </DropdownMenu>
    </div>
  );
}
