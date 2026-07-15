// Restored from ref/webview/assets/plugin-detail-page-B_JVFW0l.js
// Messages and timing constants used by the plugin detail page.

type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description: string;
};

export const pluginDetailPageMessages = {
  pageTitleFallback: {
    id: "plugins.detail.pageTitleFallback",
    defaultMessage: "Plugin",
    description: "Fallback plugin title on the plugin detail page",
  },
  pluginsRoot: {
    id: "plugins.detail.breadcrumb.root",
    defaultMessage: "Plugins",
    description: "Back button label on the plugin detail page",
  },
  manageRoot: {
    id: "plugins.detail.breadcrumb.manage",
    defaultMessage: "Manage",
    description:
      "Back button label on the plugin detail page when opened from manage",
  },
  shareLink: {
    id: "plugins.detail.shareLink",
    defaultMessage: "Share",
    description: "Button label for copying a plugin detail share link",
  },
  copiedLink: {
    id: "plugins.detail.copiedLink",
    defaultMessage: "Copied",
    description: "Button label after copying a plugin detail deep link",
  },
  shareNotSharedTooltip: {
    id: "plugins.detail.shareNotSharedTooltip",
    defaultMessage: "Not shared",
    description: "Tooltip for a personal plugin that has not been shared",
  },
  shareSharedTooltip: {
    id: "plugins.detail.shareSharedTooltip",
    defaultMessage: "Shared",
    description:
      "Tooltip for a personal plugin that is shared while access details are loading",
  },
  shareInvitedTooltip: {
    id: "plugins.detail.shareInvitedTooltip",
    defaultMessage: "Only those invited",
    description: "Tooltip for a personal plugin shared with invited people",
  },
  shareWorkspaceTooltip: {
    id: "plugins.detail.shareWorkspaceTooltip",
    defaultMessage: "Anyone at workspace with the link",
    description: "Tooltip for a personal plugin shared with the workspace",
  },
  shareCreatedPluginsOnlyTooltip: {
    id: "plugins.detail.shareCreatedPluginsOnlyTooltip",
    defaultMessage: "Only plugins you created can be shared",
    description:
      "Tooltip for a disabled Share button on plugins that are not personal creations",
  },
  shareLocalCopyRequiredTooltip: {
    id: "plugins.detail.shareLocalCopyRequiredTooltip",
    defaultMessage: "Sharing can only be edited when you have a local copy",
    description:
      "Tooltip for a disabled Share button on a personal plugin that no longer has a local copy",
  },
  missingFromCurrentMarketplaces: {
    id: "plugins.detail.missingFromCurrentMarketplaces",
    defaultMessage:
      "This plugin is not available in your current plugin marketplaces",
    description:
      "Not found description for a plugin detail deep link whose plugin id is not present in the loaded marketplaces",
  },
} as const satisfies Record<string, MessageDescriptor>;

export const PLUGIN_DETAIL_COPY_LINK_RESET_MS = 2000;
export const PLUGIN_DETAIL_INSTALL_PROGRESS_RESET_MS = 15000;

export function initPluginDetailPageMessagesChunk(): void {}
