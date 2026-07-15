import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  PB as t,
  aL as n,
  oL as r,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function i({
  action: e,
  hasRunningCloudSession: t,
  hasRunningLocalSession: i,
  isNotificationTrayOpen: a,
  notification: o,
  notificationCount: s,
  selectedAvatar: c,
  source: l,
}) {
  let u = {
    action: e,
    source: l,
    petKind: c.id.startsWith(`custom:`)
      ? r.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM
      : r.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN,
  };
  return (
    c.id.startsWith(`custom:`) || (u.builtInPetId = c.id),
    s != null && (u.notificationCount = s),
    o != null &&
      (u.notificationSource =
        o.source === `cloud`
          ? n.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD
          : n.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL),
    i != null && (u.hasRunningLocalSession = i),
    t != null && (u.hasRunningCloudSession = t),
    a != null && (u.isNotificationTrayOpen = a),
    u
  );
}
var a = e(() => {
  t();
});
export { a as n, i as t };
//# sourceMappingURL=app-initial~app-main~avatar-overlay-page~avatar-overlay-native-page~pets-settings-CXdZ45KF.js.map
