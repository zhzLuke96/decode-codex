// Restored from ref/webview/assets/external-link-pp1LMUpE.js
// Public external-link helpers and component.
import { ExternalLink } from "./component";
import { parseDomain } from "./domain";
import {
  buildExternalLinkContextMenuItems,
  canOpenExternalLinkInBrowserSidebar,
  handleExternalLinkClick,
  openInCodexBrowser,
} from "./browser-actions";
import {
  formatExternalHrefForDisplay,
  normalizeExternalHref,
} from "./normalize";
export {
  openInCodexBrowser,
  parseDomain,
  buildExternalLinkContextMenuItems,
  handleExternalLinkClick,
  normalizeExternalHref,
  canOpenExternalLinkInBrowserSidebar,
  formatExternalHrefForDisplay,
  ExternalLink,
};
export type {
  BrowserSidebarVisibilityOptions,
  ExternalLinkClickEvent,
  ExternalLinkContextMenuOptions,
  ExternalLinkMenuItem,
  ExternalLinkProps,
  HandleExternalLinkClickOptions,
  NormalizeExternalHrefOptions,
  OpenCodexBrowserOptions,
  ParsedDomain,
  ParseDomainOptions,
} from "./types";
