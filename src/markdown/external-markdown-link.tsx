// Restored from ref/webview/assets/external-markdown-link-D1oNFxGx.js
// external-markdown-link-D1oNFxGx chunk restored from the Codex webview bundle.
import React from "react";
import type { ComponentType, ReactNode, SVGProps } from "react";
import clsx from "clsx";
import { externalLinkSource } from "../utils/external-link-source";
import { getKnownAppIconByName } from "../icons/known-app-icon";
import {
  inlineMentionBrandAwareClass,
  inlineMentionHoverUnderlineClass,
  inlineMentionIconClass,
  inlineMentionIconWrapperClass,
  inlineMentionPaddingClass,
  inlineMentionRootClass,
} from "../utils/inline-mention-style";
import { ExternalLink } from "../utils/external-link";
import { ExternalLinkFavicon } from "../utils/external-link-favicon";
import { GlobeIcon } from "../icons/globe-icon";
type ExternalMarkdownLinkIcon = ComponentType<SVGProps<SVGSVGElement>>;
type ExternalMarkdownLinkRenderOptions = {
  customIcon?: ReactNode;
  customTooltip?: ReactNode;
  tooltipDelayDuration?: number;
};
type ExternalMarkdownLinkRendererProps = {
  children: (options?: ExternalMarkdownLinkRenderOptions) => ReactNode;
  href: string;
  iconClassName?: string;
};
type ExternalMarkdownLinkProps = {
  children: ReactNode;
  conversationId?: string | null;
  href?: string | null;
  isBrowserSidebarEnabled?: boolean;
  originHostId?: string;
};
type ExternalMarkdownLinkContentProps = Required<
  Pick<ExternalMarkdownLinkProps, "children">
> & {
  conversationId: string | null;
  customIcon?: ReactNode;
  customTooltip?: ReactNode;
  href: string;
  isBrowserSidebarEnabled: boolean;
  originHostId?: string;
  sourceIcon: ExternalMarkdownLinkIcon | null;
  tooltipDelayDuration?: number;
};
export const ExternalMarkdownLinkRendererContext =
  React.createContext<ComponentType<ExternalMarkdownLinkRendererProps> | null>(
    null,
  );
export function ExternalMarkdownLink({
  children,
  conversationId = null,
  href,
  isBrowserSidebarEnabled = false,
  originHostId,
}: ExternalMarkdownLinkProps) {
  const Renderer = React.useContext(ExternalMarkdownLinkRendererContext);
  if (!href) return <>{children}</>;
  const sourceIcon = getExternalLinkSourceIcon(href);
  if (Renderer == null) {
    return (
      <ExternalMarkdownLinkContent
        conversationId={conversationId}
        href={href}
        isBrowserSidebarEnabled={isBrowserSidebarEnabled}
        originHostId={originHostId}
        sourceIcon={sourceIcon}
      >
        {children}
      </ExternalMarkdownLinkContent>
    );
  }
  const renderLink = (options?: ExternalMarkdownLinkRenderOptions) => (
    <ExternalMarkdownLinkContent
      conversationId={conversationId}
      customIcon={options?.customIcon}
      customTooltip={options?.customTooltip}
      href={href}
      isBrowserSidebarEnabled={isBrowserSidebarEnabled}
      originHostId={originHostId}
      sourceIcon={sourceIcon}
      tooltipDelayDuration={options?.tooltipDelayDuration}
    >
      {children}
    </ExternalMarkdownLinkContent>
  );
  return (
    <Renderer href={href} iconClassName={inlineMentionIconClass}>
      {renderLink}
    </Renderer>
  );
}
function ExternalMarkdownLinkContent({
  children,
  conversationId,
  customIcon,
  customTooltip,
  href,
  isBrowserSidebarEnabled,
  originHostId,
  sourceIcon: SourceIcon,
  tooltipDelayDuration,
}: ExternalMarkdownLinkContentProps) {
  const tooltipContent = customTooltip ?? href;
  const wrapperClassName = clsx(
    inlineMentionPaddingClass,
    inlineMentionBrandAwareClass,
    inlineMentionHoverUnderlineClass,
    "whitespace-nowrap",
  );
  const icon =
    customIcon ??
    (SourceIcon == null ? (
      <ExternalLinkFavicon
        className="icon-xs absolute top-1/2 -translate-y-1/2"
        href={href}
      />
    ) : (
      <SourceIcon
        aria-hidden={true}
        className="icon-xs absolute top-1/2 -translate-y-1/2"
      />
    ));
  return (
    <ExternalLink
      className={inlineMentionRootClass}
      contextMenuInitiator="markdown_link_context_menu"
      conversationId={conversationId}
      href={href}
      initiator="markdown_link_click"
      isBrowserSidebarEnabled={isBrowserSidebarEnabled}
      originHostId={originHostId}
      tooltipContent={tooltipContent}
      tooltipDelayDuration={tooltipDelayDuration}
    >
      <span className={wrapperClassName}>
        <span
          className={inlineMentionIconWrapperClass}
          data-markdown-copy="exclude"
        >
          {icon}
        </span>
        <span className="break-words whitespace-normal">{children}</span>
      </span>
    </ExternalLink>
  );
}
function getExternalLinkSourceIcon(
  href: string,
): ExternalMarkdownLinkIcon | null {
  const source = externalLinkSource(href);
  return source == null
    ? null
    : (getKnownAppIconByName(source.appId) ?? GlobeIcon);
}
