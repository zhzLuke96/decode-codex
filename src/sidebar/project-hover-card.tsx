// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Also covers ref/webview/assets/app-initial~app-main~projects-index-page~remote-connections-settings~local-conversation-pag~goqedmh7-DWWP2MF3.js
// Public project hover card barrel. Implementation is split into semantic parts to keep the restored module reviewable.
export {
  buildRemoteHostGlobeColors,
  initRemoteHostGlobeColorMath,
  initRemoteHostGlobeColorSignal,
  initRemoteHostGlobeIconChunk,
  RemoteHostGlobeIcon,
  remoteHostGlobeColorByHostIdSignal,
} from "./project-hover-card-parts/remote-host-globe";
export {
  initPinnedProjectRuntime,
  initProjectPinButtonChunk,
  ProjectPinButton,
  replacePinnedProjectOrder,
  setProjectPinned,
} from "./project-hover-card-parts/pinning";
export {
  formatAppServerConnectionErrorMessage,
  getRemoteConnectionStatusBadgeModel,
  initRemoteConnectionStatusMessagesChunk,
  initRemoteConnectionStatusModelChunk,
} from "./project-hover-card-parts/remote-connection-status";
export {
  initProjectSourceFolderIconChunk,
  ProjectSourceFolderIcon,
} from "./project-hover-card-parts/source-icons";
export {
  collapseHomeDirectoryInPath,
  initProjectHoverCardSourceHelpers,
} from "./project-hover-card-parts/source-rows";
export {
  initProjectHoverCardChunk,
  ProjectHoverCard,
} from "./project-hover-card-parts/project-hover-card-view";
export type {
  IntlShape,
  ProjectAttentionCounts,
  SidebarProjectGroup,
} from "./project-hover-card-parts/types";
