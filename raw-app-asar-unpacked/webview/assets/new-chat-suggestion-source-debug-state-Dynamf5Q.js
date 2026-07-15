import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as n,
  $J as r,
  AY as i,
  EW as a,
  GK as o,
  KK as s,
  _0 as c,
  aJ as l,
  c2 as u,
  cY as d,
  eY as f,
  iY as p,
  rJ as m,
  sY as h,
  x1 as g,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function _(e, t, n, r) {
  let i = x(t);
  e.set(A, (e) => {
    let a = e ?? {},
      o = a[i] ?? w(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function v(e) {
  (p(`${k}:`), e.set(A, {}));
}
function y(e, t, n, r) {
  e.query.snapshot(j, t).setData((e) =>
    e == null
      ? e
      : {
          file: {
            ...e.file,
            suggestions: e.file.suggestions.map((e) =>
              e.id === n ? { ...e, status: r } : e,
            ),
          },
        },
  );
}
function b(e) {
  return e == null ? null : Object.keys(e);
}
function x({ domain: e, hostId: t, projectRoot: n }) {
  return e == null ? `${k}:${t}:${C(n)}` : `${k}:${t}:${C(n)}:${e}`;
}
function S(e, t) {
  let n = x(t),
    r = e(A)?.[n];
  if (r != null) return r;
  if (t.domain == null) return w(t);
}
function C(e) {
  return e ?? ``;
}
function w(e) {
  return r(T(e), void 0);
}
function T({ hostId: e, projectRoot: t }) {
  return `${k}:${e}:${C(t)}`;
}
function E(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, D.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === O)) break;
  }
  return n;
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    ((D = t(a(), 1)),
      c(),
      i(),
      d(),
      f(),
      o(),
      l(),
      (O = 3),
      (k = `ambient-suggestions:default-statuses`),
      (A = s(k, {})),
      (j = m(h, `ambient-suggestions`, ({ projectRoot: e }) => ({
        enabled: e != null,
      }))),
      (M = m(
        h,
        `ambient-suggestions-refresh`,
        ({ domain: e, hostId: t, plan: n, projectRoot: r }) => ({
          enabled: r != null,
          gcTime: g(n),
          params: { domain: e, hostId: t, projectRoot: r },
          select: () => !0,
          staleTime: g(n),
        }),
      )),
      (N = u(h, (e) => null)),
      (P = n(h, (e, { get: t }) => b(S(t, e)))),
      (F = n(h, (e, { get: t }) => {
        let n = t(j, e);
        return n.data != null || n.isError;
      })),
      (I = n(h, ({ domain: e, hostId: t, projectRoot: n }, { get: r }) => {
        let i = r(j, { domain: e, hostId: t, projectRoot: n }).data?.file;
        return E(i?.currentSuggestionIds ?? [], i?.suggestions ?? []);
      })));
  }),
  R,
  z = e(() => {
    (o(), (R = s(`electron:new-chat-suggestion-source-debug-override`, null)));
  });
export {
  F as a,
  P as c,
  _ as d,
  I as f,
  j as i,
  v as l,
  R as n,
  M as o,
  N as r,
  L as s,
  z as t,
  y as u,
};
//# sourceMappingURL=new-chat-suggestion-source-debug-state-Dynamf5Q.js.map
