// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Public barrel for the Sites/Appgen announcement modal chunk.
import { initAppPluginMatchingRuntime } from "../runtime/app-main-host-runtime";

export {
  findSingleMatchingCodexAppForPlugin,
  initAppPluginMatchingRuntime,
  pluginMatchesCodexApp,
} from "../runtime/app-main-host-runtime";

export {
  getAppsMatchingConnectors,
  getInstalledAppPluginsForApps,
} from "./appgen-app-plugin-matching";

export {
  AppgenAnnouncementModalController,
  appgenAnnouncementGradient,
  initAppgenAnnouncementGradientAsset,
  initAppgenAnnouncementModalRuntime,
  initAppgenAnnouncementModalShell,
} from "./appgen-announcement-modal-controller";

export type {
  AppgenAnnouncementAudience,
  AppgenAnnouncementModalControllerProps,
} from "./appgen-announcement-types";

export {
  appgenPublicationTermsDisclosureSignal,
  getAppgenAnnouncementAudienceForAccount,
  hasSeenAppgenPublicationTermsDisclosure,
  hasSeenAppgenPublicationTermsDisclosureSignal,
  initAppgenPublicationTermsDisclosureRuntime,
  markAppgenPublicationTermsDisclosureSeen,
} from "./appgen-publication-terms-disclosure";

export { AppMentionPill, initAppMentionPillRuntime } from "./app-mention-pill";

export { AppgenSitesIcon, initAppgenSitesIconChunk } from "./appgen-sites-icon";

export { FeatureAnnouncementModal } from "./feature-announcement-modal";

initAppPluginMatchingRuntime();
