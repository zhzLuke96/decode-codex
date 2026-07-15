import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  C0 as r,
  L2 as i,
  _$ as a,
  _0 as o,
  aM as s,
  cY as c,
  cg as l,
  lg as u,
  oM as d,
  s2 as f,
  sY as p,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function m(e) {
  return g(e, `editedFilePaths`);
}
function h(e) {
  return g(e, `referencedFilePaths`);
}
function g(e, t) {
  let n = [],
    r = new Set();
  for (let i of e) for (let e of s(i)[t]) r.has(e) || (r.add(e), n.push(e));
  return n;
}
var _ = e(() => {
  d();
});
function v() {
  return r(T);
}
function y() {
  return a.isInternal(l());
}
function b(e, t) {
  let n = `[non-serializable title]`;
  return (
    typeof t.title == `string`
      ? (n = t.title)
      : (0, w.isValidElement)(t.title) && (n = ``),
    { id: e, titleText: n, lines: t.lines }
  );
}
function x(e, t, n) {
  let r = b(t, n);
  e.set(T, (e) => [...e.filter((e) => e.id !== t), r]);
}
function S(e, t) {
  e.set(T, (e) => e.filter((e) => e.id !== t));
}
function C() {
  if (typeof crypto < `u` && typeof crypto.randomUUID == `function`)
    return crypto.randomUUID();
  let e = E;
  return ((E += 1), `debug-panel-${e}`);
}
var w,
  T,
  E,
  D = e(() => {
    (o(), n(), (w = t(i(), 1)), c(), u(), (T = f(p, [])), (E = 0));
  });
export {
  y as a,
  h as c,
  x as i,
  _ as l,
  D as n,
  v as o,
  S as r,
  m as s,
  C as t,
};
//# sourceMappingURL=use-debug-panel-C8DJOSDY.js.map
