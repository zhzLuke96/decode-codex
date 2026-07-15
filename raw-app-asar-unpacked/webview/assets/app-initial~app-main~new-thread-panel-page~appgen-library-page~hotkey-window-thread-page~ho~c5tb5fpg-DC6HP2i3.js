import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Yv as n,
  zv as r,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { Da as i } from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Ss as a,
  bs as o,
  js as s,
  ks as c,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
function l(e) {
  (o(e), e.set(c, !1), n(e, ``));
}
function u(e) {
  (o(e), e.set(c, !1));
}
var d = e(() => {
  (s(), r(), a());
});
function f(e) {
  let t = e.firstElementChild,
    n = Math.max(0, e.scrollWidth - e.clientWidth);
  return {
    maximum: n,
    minimum: t instanceof HTMLElement ? (0, g.default)(m(e, t), 0, n) : 0,
  };
}
function p(e, t) {
  let { maximum: n, minimum: r } = f(e),
    i = (0, g.default)(e.scrollLeft + t * (e.clientWidth - h(e)), r, n),
    a = e.children;
  for (let o = t === 1 ? 0 : a.length - 1; o >= 0 && o < a.length; o += t) {
    let s = a.item(o);
    if (!(s instanceof HTMLElement)) continue;
    let c = (0, g.default)(m(e, s), r, n);
    if ((t === 1 && c >= i - 1) || (t === -1 && c <= i + 1)) return c;
  }
  return t === 1 ? n : r;
}
function m(e, t) {
  return t.offsetLeft - e.offsetLeft - h(e);
}
function h(e) {
  let t = Number.parseFloat(getComputedStyle(e).scrollPaddingLeft);
  return Number.isNaN(t) ? 0 : t;
}
var g,
  _ = e(() => {
    g = t(i(), 1);
  });
export { d as a, u as i, p as n, l as o, _ as r, f as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~c5tb5fpg-DC6HP2i3.js.map
