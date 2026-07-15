import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  SV as n,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function r({ appServerConnectionState: e, localExecutionRemoteHostId: t }) {
  return t == null
    ? null
    : t === `durable` && e == null
      ? `connected`
      : (e ?? `disconnected`);
}
function i({
  attachedRemoteHostId: e,
  browserRemoteHostId: t,
  followUpType: n,
  forceDefaultHost: r,
  selectedRemoteProjectHostId: i,
}) {
  return e ?? (n === `local` || (r && n == null) ? null : (i ?? t));
}
function a({
  composerMode: e,
  draftRemoteHostId: t,
  followUpType: n,
  hasStartedBranchConversation: r,
}) {
  return (
    e === `local` && t !== `local` && n !== `local` && (!r || n === `cloud`)
  );
}
var o = e(() => {
  (t(), n());
});
export { a as i, r as n, o as r, i as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~mzbvawpd-DSVh2V_a.js.map
