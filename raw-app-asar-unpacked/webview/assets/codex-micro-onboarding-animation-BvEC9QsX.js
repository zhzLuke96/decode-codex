import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Q0 as t,
  _0 as n,
  cY as r,
  s2 as i,
  sY as a,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function o(e, t) {
  let n = globalThis.performance.now();
  e.set(_, t ? -1 : 0);
  let r = t
    ? null
    : globalThis.setInterval(() => {
        e.set(_, globalThis.performance.now() - n);
      }, u);
  return () => {
    (r != null && globalThis.clearInterval(r), e.set(_, null));
  };
}
function s(e) {
  let t = e === -1,
    n = t ? 0 : e;
  return {
    actionKeycapIds: g.map((e, r) => c(e, n, t ? 0 : (r + 1) * p)),
    agentSlots: h.map((e, r) => ({
      id: r,
      threadKey: null,
      title: null,
      status: c(e, n, t ? 0 : r * f),
      selected: !1,
    })),
  };
}
function c(e, t, n) {
  return e[l((t + n) % d)];
}
function l(e) {
  return e < m[0] ? 0 : e < m[1] ? 1 : e < m[2] ? 2 : 0;
}
var u,
  d,
  f,
  p,
  m,
  h,
  g,
  _,
  v,
  y,
  b = e(() => {
    (n(),
      r(),
      (u = 100),
      (d = 12e3),
      (f = 800),
      (p = 700),
      (m = [
        [0.25, 0.33],
        [0.58, 0.66],
        [0.92, 1],
      ].map(([e, t]) => Math.round(((e + t) / 2) * d))),
      (h = [
        [`working`, `awaiting-approval`, `error`],
        [`unread`, `working`, `idle`],
        [`awaiting-approval`, `idle`, `working`],
        [`idle`, `error`, `unread`],
        [`working`, `unread`, `awaiting-response`],
        [`awaiting-response`, `working`, `idle`],
      ]),
      (g = [
        [`FAST`, `PLAY`, `BUG`],
        [`APPR`, `SPLIT`, `SETUP`],
        [`REJ`, `NEW`, `CODEX`],
        [`SPLIT`, `BUG`, `FAST`],
        [`MIC`, `NEW`, `PLAY`],
        [`CODEX`, `APPR`, `SETUP`],
      ]),
      (_ = i(a, null)),
      (v = t(a, ({ get: e }) => {
        let t = e(_);
        return t == null ? null : s(t);
      })),
      (y = t(a, ({ get: e }) => e(v)?.agentSlots ?? null)));
  });
export { o as a, b as i, y as n, s as r, v as t };
//# sourceMappingURL=codex-micro-onboarding-animation-BvEC9QsX.js.map
