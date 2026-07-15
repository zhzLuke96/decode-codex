// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Mention metadata dependencies resolved from plugin catalog and app metadata chunks.

import type { DirectoryApp } from "../plugins/plugin-detail-page-utils/types";

export type ComposerMentionController = {
  hasPluginBackedMentions(): boolean;
  syncMentionMetadata(metadata: {
    apps?: MentionApp[];
    nativeApps?: unknown[];
    pluginMentionLabels?: unknown;
    plugins?: MentionPlugin[];
    skills?: unknown[];
  }): void;
};

export type { DirectoryApp } from "../plugins/plugin-detail-page-utils/types";
export type MentionApp = DirectoryApp;
export type MentionPlugin = {
  plugin: {
    id: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export { formatPluginMentionLabels } from "../composer/mention-item";
export { useSkills } from "../plugins/use-skills";
export {
  C as lookupDirectoryApp,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p";
export {
  Va as useAvailablePlugins,
  ka as mergePluginAppMetadata,
  la as useDirectoryApps,
  pa as useNativeApps,
  ua as useResolvedAppMetadata,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG";
export {
  br as useComposerSelector,
  li as useNativeMcpApps,
  xi as selectFirstPluginWithApp,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";
