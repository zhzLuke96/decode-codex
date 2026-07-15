import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  GK as t,
  KK as n,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var r,
  i = e(() => {
    (t(), (r = n(`codex-micro-has-ever-been-detected`, !1)));
  });
function a(e) {
  (e.get(r) === !1 && e.get(c) === `idle` && e.set(c, `pending`), e.set(r, !0));
}
function o(e) {
  (e.set(c, `idle`), e.set(r, !1));
}
function s({ deviceStatus: e, hasEverBeenDetected: t, onboardingState: n }) {
  return n === `pending`
    ? !0
    : n !== `idle` || t !== !1
      ? !1
      : e === `detected` || e === `connected`;
}
var c,
  l = e(() => {
    (t(), i(), (c = n(`codex-micro-onboarding-state`, `idle`)));
  });
export { s as a, o as i, l as n, r as o, a as r, i as s, c as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~lhgjoyjn-Bcklr3RV.js.map
