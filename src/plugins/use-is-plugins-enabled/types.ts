// Restored from ref/webview/assets/use-is-plugins-enabled-Dn_J-WZf.js
// use-is-plugins-enabled-Dn_J-WZf chunk restored from the Codex webview bundle.
export const COMPUTER_USE_GATE = "1506311413";
export const EXTERNAL_BROWSER_USE_GATE = "410065390";
export const IN_APP_BROWSER_USE_GATE = "410262010";
export const COMPUTER_USE_FEATURE_NAME = "computer_use";
export const EXTERNAL_BROWSER_USE_FEATURE_NAME = "browser_use_external";
export const IN_APP_BROWSER_USE_FEATURE_NAME = "browser_use";
export const PLUGINS_FEATURE_NAME = "plugins";
export type ExperimentalFeature = {
  enabled?: boolean;
  name: string;
};
export type ExperimentalFeaturesQueryResult = {
  data?: ExperimentalFeature[];
  isLoading: boolean;
};
export type FeatureAvailabilityOptions = {
  defaultEnabled?: boolean;
  featureName: string;
  hostId: string;
};
export type FeatureAvailability = {
  enabled: boolean;
  isLoading: boolean;
};
export type WindowType = "chrome-extension" | "electron";
export type ComputerUseReason =
  | "available"
  | "config-requirement-disabled"
  | "disabled"
  | "loading"
  | "statsig-disabled"
  | "unsupported-platform"
  | "window-type-disabled";
export type BrowserUseReason =
  | "available"
  | "browser-pane-disabled"
  | "config-requirement-disabled"
  | "loading"
  | "statsig-disabled"
  | "window-type-disabled"
  | "wsl-disabled";
export type ComputerUseAvailabilityOptions = {
  enabled?: boolean;
  hostId: string;
};
export type BrowserUseAvailabilityOptions = {
  hostId: string;
  windowType?: WindowType;
};
export type AccountsCheckResponse = {
  account_ordering?: string[];
  accounts?: Array<{
    id?: string;
    plan_type?: string | null;
  }>;
};
export type AccountInfoResponse = {
  accountId?: string;
  plan?: string | null;
};
export type AccountSettingsResponse = {
  beta_settings?: {
    windows_computer_use?: boolean;
  };
};
