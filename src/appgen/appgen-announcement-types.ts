// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Shared types for the Sites/Appgen announcement modal restore.
import type { CSSProperties, ReactNode } from "react";

export type AppgenAnnouncementAudience = "personal" | "workspace";

export type AppgenApp = {
  id: string;
  isAccessible?: boolean;
  isEnabled?: boolean;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  name: string;
  pluginDisplayNames?: string[];
};

export type AppgenConnector = {
  codexAppId?: string | null;
  name: string;
};

export type AppgenPlugin = {
  id: string;
  installed?: boolean;
  enabled?: boolean;
  interface?: {
    displayName?: string | null;
  } | null;
  name: string;
};

export type InstalledPluginEntry = {
  plugin: AppgenPlugin;
  [key: string]: unknown;
};

export type AppgenDisclosureState = {
  audience?: AppgenAnnouncementAudience | null;
};

export type ScopeWriter = {
  get?: <TValue>(signal: unknown) => TValue | undefined;
  set?: (signal: unknown, value: unknown) => void;
};

export type FeatureAnnouncementModalProps = {
  body: ReactNode;
  closeButtonClassName?: string;
  closeButtonTone?: "dark" | "light";
  disclaimerFooter?: ReactNode;
  dismissLabel?: ReactNode;
  media: ReactNode;
  mediaClassName?: string;
  onDismiss: () => void;
  onPrimaryAction: () => void;
  onSecondaryAction?: () => void;
  primaryActionLabel: ReactNode;
  title: ReactNode;
  titleClassName?: string;
};

export type AppMentionPillProps = {
  brandColor?: string;
  className?: string;
  dataAttributes?: Record<string, string | undefined>;
  icon?: ReactNode;
  iconClassName?: string;
  interactive?: boolean;
  style?: CSSProperties;
  text: ReactNode;
  textClassName?: string;
  tooltipText?: ReactNode;
};

export type AppgenAnnouncementModalControllerProps = {
  audience?: AppgenAnnouncementAudience | null;
  showWhenUnseen?: boolean;
};
