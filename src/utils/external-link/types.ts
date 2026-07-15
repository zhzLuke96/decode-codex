// Restored from ref/webview/assets/external-link-pp1LMUpE.js
// Shared types for external link normalization and browser actions.
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import type { ContextMenuItemDefinition } from "../../ui/context-menu";
export type ParsedDomain = {
  domain: string | null;
  domainWithoutSuffix: string | null;
  hostname: string | null;
  isIcann: boolean | null;
  isIp: boolean | null;
  isPrivate: boolean | null;
  publicSuffix: string | null;
  subdomain: string | null;
};
export type ParseDomainOptions = {
  allowIcannDomains?: boolean;
  allowPrivateDomains?: boolean;
  detectIp?: boolean;
  extractHostname?: boolean;
  mixedInputs?: boolean;
  validHosts?: readonly string[] | null;
  validateHostname?: boolean;
};
export type NormalizeExternalHrefOptions = {
  openAIGoLinksEnabled?: boolean;
};
export type OpenCodexBrowserOptions = {
  conversationId: string | null;
  initiator?: string;
  source?: string;
  url: string;
};
export type ExternalLinkClickEvent = Pick<
  MouseEvent<HTMLAnchorElement>,
  "button" | "ctrlKey" | "metaKey" | "preventDefault"
>;
export type HandleExternalLinkClickOptions = {
  event: ExternalLinkClickEvent;
  href: string;
  initiator?: string;
  openTarget?: string;
  originHostId?: string;
};
export type ExternalLinkContextMenuOptions = {
  conversationId: string | null;
  href: string;
  initiator?: string;
};
export type BrowserSidebarVisibilityOptions = {
  href: string;
  isBrowserSidebarEnabled: boolean;
};
export type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "rel" | "target"
> & {
  contextMenuInitiator?: string;
  conversationId?: string | null;
  href: string;
  initiator?: string;
  isBrowserSidebarEnabled?: boolean;
  openTarget?: string;
  originHostId?: string;
  tooltipContent?: ReactNode;
  tooltipDelayDuration?: number;
};
export type ExternalLinkMenuItem = ContextMenuItemDefinition;
