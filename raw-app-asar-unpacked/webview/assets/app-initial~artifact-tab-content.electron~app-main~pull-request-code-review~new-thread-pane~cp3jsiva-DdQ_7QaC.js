import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  BA as t,
  WA as n,
  _0 as r,
  s2 as i,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function a(e, { prefersReducedMotion: t = !1 } = {}) {
  let n = !e.get(x);
  (e.set(x, n),
    e.set(b, t ? l(n) : n ? `entering` : `exiting`),
    s(e, n ? h : 0, { direction: n ? `enter` : `exit`, shouldAnimate: !t }));
}
function o(e, t) {
  if (e.get(b) === t) {
    if (t === `entering`) {
      e.set(b, `visible`);
      return;
    }
    e.set(b, `hidden`);
  }
}
function s(e, t, { direction: n = `enter`, shouldAnimate: r = !1 } = {}) {
  c(e);
  let i = e.get(v);
  if (!r || i === t) {
    u(e, t);
    return;
  }
  let a = performance.now(),
    o = (r) => {
      let s = Math.max(0, Math.min((r - a) / g, 1)),
        c = n === `enter` ? s * s : 1 - (1 - s) ** 2;
      if ((u(e, Math.round(i + (t - i) * c)), s < 1)) {
        _.set(
          e.node,
          window.setTimeout(() => o(performance.now()), 16),
        );
        return;
      }
      _.delete(e.node);
    };
  _.set(
    e.node,
    window.setTimeout(() => o(performance.now()), 16),
  );
}
function c(e) {
  let t = _.get(e.node);
  t != null && (window.clearTimeout(t), _.delete(e.node));
}
function l(e) {
  return e ? `visible` : `hidden`;
}
function u(e, t) {
  e.get(v) !== t && e.set(v, t);
}
var d,
  f,
  p,
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x,
  S = e(() => {
    (r(),
      n(),
      (d = `--right-panel-composer-overlay-height`),
      (f = `--right-panel-composer-overlay-reserve`),
      (p = `var(${f}, 1.5rem)`),
      (m = 16),
      (h = 102 + m),
      (g = 120),
      (_ = new WeakMap()),
      (v = i(t, 0)),
      (y = i(t, 0)),
      (b = i(t, l(!0))),
      (x = i(t, !0)));
  });
export {
  c as a,
  v as c,
  x as d,
  s as f,
  h as i,
  y as l,
  f as n,
  o,
  a as p,
  p as r,
  S as s,
  d as t,
  b as u,
};
//# sourceMappingURL=app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~cp3jsiva-DdQ_7QaC.js.map
