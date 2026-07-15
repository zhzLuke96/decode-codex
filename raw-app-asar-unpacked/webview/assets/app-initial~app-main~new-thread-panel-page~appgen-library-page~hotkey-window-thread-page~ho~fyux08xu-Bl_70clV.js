import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as t,
  Ch as n,
  Fm as r,
  I2 as i,
  Nm as a,
  SV as o,
  Sh as s,
  _0 as c,
  cS as l,
  cY as u,
  hh as d,
  lS as f,
  sY as p,
  uh as m,
  x0 as h,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function g(e) {
  let t = new Map();
  for (let n of e) {
    let e = [n.id, b(n.id), b(n.name), ...(n.pluginDisplayNames ?? []).map(b)];
    n.id.startsWith(`connector_`) && e.push(b(n.id.slice(10)));
    for (let r of e) r.length > 0 && !t.has(r) && t.set(r, n);
  }
  return t;
}
function _(e, t) {
  let n = new Set();
  for (let r of t) {
    let t = e.get(r) ?? e.get(b(r));
    t != null && n.add(t);
  }
  return Array.from(n);
}
function v(e) {
  let t = (0, x.c)(7),
    { appIds: r, enabled: i, hostId: a } = e,
    o = i === void 0 ? !0 : i,
    s = a ?? `local`,
    c = f(),
    l;
  t[0] === s ? (l = t[1]) : ((l = { hostId: s }), (t[0] = s), (t[1] = l));
  let u = n(l),
    d = o && u && !c.isLoading && c.userId != null,
    p;
  t[2] === d ? (p = t[3]) : ((p = { enabled: d }), (t[2] = d), (t[3] = p));
  let m = h(S, s, p);
  if (m == null) return;
  let g;
  return (
    t[4] !== m || t[5] !== r
      ? ((g = _(m, r)), (t[4] = m), (t[5] = r), (t[6] = g))
      : (g = t[6]),
    g
  );
}
function y(e) {
  for (let t of e) return a(t) == null;
  return !1;
}
function b(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`);
}
var x,
  S,
  C = e(() => {
    ((x = i()),
      c(),
      r(),
      l(),
      s(),
      d(),
      u(),
      o(),
      (S = t(p, (e, { get: t }) => {
        let n = t(m, e).data;
        return n == null ? void 0 : g(n);
      })));
  });
export { y as a, C as i, g as n, v as o, _ as r, b as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~fyux08xu-Bl_70clV.js.map
