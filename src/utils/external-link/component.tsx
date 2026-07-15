// Restored from ref/webview/assets/external-link-pp1LMUpE.js
// Anchor wrapper that routes links through Codex browser affordances.
import type { MouseEvent } from "react";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { browserSidebarAvailability } from "../../browser/browser-sidebar-availability";
import { ContextMenu } from "../../ui/context-menu";
import { Tooltip } from "../../ui/tooltip-b";
import {
  buildExternalLinkContextMenuItems,
  canOpenExternalLinkInBrowserSidebar,
  handleExternalLinkClick,
} from "./browser-actions";
import type { ExternalLinkProps } from "./types";
function ExternalLink(props: ExternalLinkProps) {
  if (props.isBrowserSidebarEnabled != null) {
    return (
      <ExternalLinkInner
        {...props}
        conversationId={props.conversationId ?? null}
        isBrowserSidebarEnabled={props.isBrowserSidebarEnabled}
      />
    );
  }
  return <ExternalLinkWithBrowserSidebarAvailability {...props} />;
}
function ExternalLinkWithBrowserSidebarAvailability(props: ExternalLinkProps) {
  const isBrowserSidebarEnabled = useAppScopeValue(browserSidebarAvailability);
  return (
    <ExternalLinkInner
      {...props}
      conversationId={props.conversationId ?? null}
      isBrowserSidebarEnabled={isBrowserSidebarEnabled}
    />
  );
}
function ExternalLinkInner({
  children,
  conversationId,
  contextMenuInitiator,
  href,
  initiator,
  isBrowserSidebarEnabled,
  openTarget,
  originHostId,
  tooltipContent,
  tooltipDelayDuration,
  ...anchorProps
}: ExternalLinkProps & {
  conversationId: string | null;
  isBrowserSidebarEnabled: boolean;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleExternalLinkClick({
      event,
      href,
      initiator,
      openTarget,
      originHostId,
    });
  };
  const handleAuxClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button === 1) handleClick(event);
  };
  const anchor = (
    <a
      {...anchorProps}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onAuxClick={handleAuxClick}
      onClick={handleClick}
    >
      {children}
    </a>
  );
  const anchorWithTooltip =
    tooltipContent == null ? (
      anchor
    ) : (
      <Tooltip
        delayDuration={tooltipDelayDuration}
        tooltipContent={tooltipContent}
      >
        {anchor}
      </Tooltip>
    );
  if (
    !canOpenExternalLinkInBrowserSidebar({
      href,
      isBrowserSidebarEnabled,
    })
  ) {
    return anchorWithTooltip;
  }
  const menuInitiator = contextMenuInitiator ?? initiator;
  const contextMenuItems = buildExternalLinkContextMenuItems({
    conversationId,
    href,
    initiator: menuInitiator,
  });
  return (
    <ContextMenu items={contextMenuItems}>{anchorWithTooltip}</ContextMenu>
  );
}
export { ExternalLink };
