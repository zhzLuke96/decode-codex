// Restored from ref/webview/assets/browser-use-settings-Ct3jD7gG.js
// Shared types for the restored Browser Use settings surface.

import type { ReactNode } from "react";
import type { PluginDisplayItem } from "../../plugins/use-plugins/types";

export type BrowserSettingsKind =
  | "contactInfo"
  | "downloads"
  | "extensions"
  | "history"
  | "passwordManager"
  | "siteSettings";

export type BrowserSettingsRouteConfig = {
  breadcrumbLabel: ReactNode;
  path: string;
  partition: string;
  rootUrls: string[];
  url: string;
  webviewLabel: string;
};

export type BrowserSettingsRouteConfigs = Record<
  BrowserSettingsKind,
  BrowserSettingsRouteConfig
>;

export type BrowserSettingsHistoryState = {
  entries: string[];
  index: number;
  preferHistoryControls: boolean;
};

export type BrowserSettingsNavigationState = {
  canGoBack: boolean;
  canGoForward: boolean;
  initialUrl: string;
  url: string;
};

export type BrowserSettingsPageTitle = {
  title: string;
  url: string;
};

export type BrowserSettingsWebviewElement = HTMLElement & {
  canGoBack?: () => boolean;
  canGoForward?: () => boolean;
  destroy?: () => void;
  executeJavaScript?: (script: string) => Promise<unknown>;
  getURL?: () => string;
  goBack?: () => void;
  goForward?: () => void;
  loadURL?: (url: string) => Promise<void>;
};

export type BrowserUseApprovalMode = "alwaysAsk" | "neverAsk";

export type BrowserUsePermissionKind = "allowed" | "denied";

export type BrowserUseDomainListResource = "origins" | "downloads" | "uploads";

export type BrowserUsePermissionResource =
  | "origin"
  | "download"
  | "upload"
  | "fullCdp";

export type BrowserUsePermissionValue = "default" | "allowed" | "denied";

export type BrowserUseSitePermissionPreset = "allowed" | "denied" | "custom";

export type BrowserUsePermissionValues = Record<
  BrowserUsePermissionResource,
  BrowserUsePermissionValue
>;

export type BrowserUseOriginState = {
  allowedDownloadOrigins: string[];
  allowedFullCdpOrigins: string[];
  allowedOrigins: string[];
  allowedUploadOrigins: string[];
  approvalMode?: BrowserUseApprovalMode | string | null;
  deniedDownloadOrigins: string[];
  deniedFullCdpOrigins: string[];
  deniedOrigins: string[];
  deniedUploadOrigins: string[];
  fullCdpAccessEnabled?: boolean;
  historyApprovalMode?: BrowserUseApprovalMode | string | null;
};

export type BrowserUseSitePermissionRow = {
  origin: string;
  values: BrowserUsePermissionValues;
};

export type BrowserUseOriginRuleUpdate = {
  action: "add" | "remove";
  kind: BrowserUsePermissionKind;
  origin: string;
  resource: BrowserUsePermissionResource;
};

export type BrowserUsePluginAppItem = {
  description?: ReactNode;
  enabled: boolean;
  icon?: ReactNode;
  id: string;
  isPending?: boolean;
  kind: "app";
  onToggleEnabled: (enabled: boolean) => void;
  title: ReactNode;
  toggleAriaLabel: string;
  toggleTooltip?: ReactNode;
};

export type BrowserUsePluginMarketplaceItem = {
  action?: ReactNode;
  description?: ReactNode;
  descriptionIndicator?: "success" | "error";
  displayName?: string | null;
  icon?: ReactNode;
  kind?: "plugin";
  onTryInChat?: (plugin: PluginDisplayItem) => void;
  plugin: PluginDisplayItem;
  showIconBorder?: boolean;
  showManageActions?: boolean;
  title: ReactNode;
};

export type BrowserUseUnavailablePluginItem = {
  description?: ReactNode;
  icon?: ReactNode;
  id: string;
  title: ReactNode;
};

export type BrowserUsePluginControlItem =
  | BrowserUsePluginAppItem
  | BrowserUsePluginMarketplaceItem;

export type BrowserUsePluginsQueryState = {
  errorMessage?: ReactNode | null;
  forceReload: () => Promise<void> | void;
  isLoading: boolean;
};
