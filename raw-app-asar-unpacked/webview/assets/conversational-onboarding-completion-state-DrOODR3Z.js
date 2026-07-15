import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $J as t,
  GK as n,
  KK as r,
  eY as i,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  _ as a,
  b as o,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~pcx43lpb-BOlhhGyv.js";
function s(e, t) {
  let n = e.get(d);
  e.set(d, { ...l(n), [t]: !0 });
}
function c(e, t) {
  let n = { ...l(e.get(d)) };
  (delete n[t], e.set(d, n));
}
function l(e) {
  return (
    e ?? t(`electron:onboarding-conversational-completed-by-account-id`, u)
  );
}
var u,
  d,
  f = e(() => {
    (i(), n(), o(), (u = {}), (d = r(a, u)));
  });
export { f as n, s as r, c as t };
//# sourceMappingURL=conversational-onboarding-completion-state-DrOODR3Z.js.map
