// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// "Open in" dropdown for linked conversation end-resources.

import React from "react";
import { FormattedMessage } from "../../../vendor/react-intl";
import { copyToClipboard } from "../../../utils/copy-to-clipboard";
import { AppWindowIcon } from "../../../icons/app-window-icon";
import { ChevronIcon as ChevronDownIcon } from "../../../icons/chevron-icon";
import { CopyIcon as CopyLinkIcon } from "../../../icons/copy-icon";
import { Button } from "../../../ui/button";
import {
  OpenTargetsPrefetch,
  useOpenTargets,
} from "../../../runtime/open-targets-query-runtime";
import {
  buildOpenTargetMenuItems,
  isVisibleOpenTargetMenuItem,
} from "../../../runtime/open-target-menu-builders";
import {
  OpenTargetDropdownMenu,
  OpenTargetMenu,
} from "../../../runtime/open-target-menu-primitives";
import type { EndResourceOpenInMenuProps, OpenTargetMenuItem } from "./types";

export function EndResourceOpenInMenu({
  cwd,
  copyLink,
  hostId,
  isOpen,
  onOpenChange,
  onOpenInCodexBrowser,
  openPath,
}: EndResourceOpenInMenuProps) {
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const {
    canLoadTargets,
    targets,
    availableTargets,
    mode,
    isLoadingTargets,
    open,
  } = useOpenTargets({ cwd, hostId, openPath });

  const menuItems: OpenTargetMenuItem[] = buildOpenTargetMenuItems({
    targets,
    availableTargets,
    includeHiddenTargets: true,
    mode,
  }).filter(isVisibleOpenTargetMenuItem);

  const handleInteract = () => {
    setHasInteracted(true);
  };

  const prefetch =
    canLoadTargets && hasInteracted ? (
      <OpenTargetsPrefetch cwd={cwd} hostId={hostId} openPath={openPath} />
    ) : null;

  const isLoading =
    canLoadTargets &&
    hasInteracted &&
    isLoadingTargets &&
    menuItems.length === 0;

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (next) {
      handleInteract();
    }
  };

  const triggerButton = (
    <Button
      className="end-resource-open-button pointer-events-auto !self-center !bg-transparent hover:!bg-token-list-hover-background data-[state=open]:!bg-token-list-hover-background"
      color="outline"
      onFocus={handleInteract}
      onMouseEnter={handleInteract}
      size="toolbar"
    >
      <FormattedMessage
        id="localConversation.endResource.openIn"
        defaultMessage="Open in"
        description="Button label for opening a conversation resource"
      />
      <ChevronDownIcon className="icon-2xs opacity-50" />
    </Button>
  );

  const codexBrowserItem = (
    <OpenTargetMenu.Item onSelect={onOpenInCodexBrowser}>
      <OpenTargetMenu.ItemIcon>
        <AppWindowIcon aria-hidden className="icon-sm" />
      </OpenTargetMenu.ItemIcon>
      <FormattedMessage
        id="localConversation.endResource.openInCodexBrowser"
        defaultMessage="Codex Browser"
        description="Dropdown item for opening a website preview in Codex Browser"
      />
    </OpenTargetMenu.Item>
  );

  const nativeAppItems = menuItems.map((item) => (
    <OpenTargetMenu.Item
      key={item.id}
      onSelect={() => {
        open(item.target, {
          appPath: item.appPath,
          path: openPath,
          persistPreferred: false,
        });
      }}
    >
      <OpenTargetMenu.ItemIcon>
        <img alt="" src={item.icon} className="icon-sm" />
      </OpenTargetMenu.ItemIcon>
      {item.label}
    </OpenTargetMenu.Item>
  ));

  const loadingMessage = isLoading ? (
    <OpenTargetMenu.Message compact>
      <FormattedMessage
        id="localConversation.endResource.loadingAvailableApps"
        defaultMessage="Loading available apps…"
        description="Dropdown item shown while loading apps that can open a conversation resource"
      />
    </OpenTargetMenu.Message>
  ) : null;

  const copyLinkSection =
    copyLink == null ? null : (
      <>
        <OpenTargetMenu.Separator />
        <OpenTargetMenu.Item
          onSelect={() => {
            copyToClipboard(copyLink);
          }}
        >
          <OpenTargetMenu.ItemIcon>
            <CopyLinkIcon aria-hidden className="icon-sm" />
          </OpenTargetMenu.ItemIcon>
          <FormattedMessage
            id="localConversation.endResource.copyLink"
            defaultMessage="Copy link"
            description="Dropdown item for copying a conversation resource link"
          />
        </OpenTargetMenu.Item>
      </>
    );

  const menuContent = (
    <div className="flex min-w-[160px] flex-col gap-0.5">
      {codexBrowserItem}
      {nativeAppItems}
      {loadingMessage}
      {copyLinkSection}
    </div>
  );

  return (
    <>
      {prefetch}
      <OpenTargetDropdownMenu
        align="end"
        open={isOpen}
        contentClassName="pt-2"
        triggerButton={triggerButton}
        onOpenChange={handleOpenChange}
      >
        {menuContent}
      </OpenTargetDropdownMenu>
    </>
  );
}
