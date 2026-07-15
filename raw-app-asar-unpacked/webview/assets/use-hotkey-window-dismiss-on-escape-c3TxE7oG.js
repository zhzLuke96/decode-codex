import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  L2 as r,
  bG as i,
  yG as a,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function o() {
  let e = (0, l.c)(1),
    t;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = []), (e[0] = t))
    : (t = e[0]),
    (0, u.useEffect)(s, t));
}
function s() {
  let e = c;
  return (
    window.addEventListener(`keydown`, e),
    () => {
      window.removeEventListener(`keydown`, e);
    }
  );
}
function c(e) {
  e.key !== `Escape` ||
    e.defaultPrevented ||
    e.metaKey ||
    e.ctrlKey ||
    e.altKey ||
    e.shiftKey ||
    (e.preventDefault(), e.stopPropagation(), a.hotkeyWindowHotkeys?.dismiss());
}
var l,
  u,
  d = e(() => {
    ((l = n()), (u = t(r(), 1)), i());
  });
export { o as n, d as t };
//# sourceMappingURL=use-hotkey-window-dismiss-on-escape-c3TxE7oG.js.map
