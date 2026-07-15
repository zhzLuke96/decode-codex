import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  CJ as n,
  I2 as r,
  QG as i,
  YG as a,
  aJ as o,
  aK as s,
  d2 as c,
  g2 as l,
  hO as u,
  lO as d,
  m2 as f,
  nK as p,
  oJ as m,
  sK as h,
  vZ as g,
  wJ as _,
  yZ as v,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Hn as y,
  Vn as b,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
var x,
  S,
  C,
  w = e(() => {
    (y(),
      (x = b({
        method: `config-value`,
        getParams: (e) => ({
          key: e.key,
          operationSource: e.operationSource,
          root: e.root,
          scope: e.scope,
        }),
        getOptions: (e) => ({
          select: (e) => e.value,
          ...(e.staleTime == null ? {} : { staleTime: e.staleTime }),
        }),
      })),
      (S = x.fromTarget$),
      (C = x.queryByMetadata$));
  });
function T(e) {
  return (
    e.find(
      (e) => O(e.configPath) === `environment.toml` && e.type === `success`,
    ) ||
    e.find((e) => e.type === `success`) ||
    (e[0] ?? null)
  );
}
function E(e) {
  return T(e)?.configPath ?? null;
}
function D(e, t) {
  let n = s(h(t), `.codex/environments`),
    r = new Set(e.map((e) => h(e.configPath))),
    i = s(n, g);
  if (!r.has(h(i))) return i;
  let a = 2;
  for (;;) {
    let e = s(n, `environment-${a}.toml`);
    if (!r.has(h(e))) return e;
    a += 1;
  }
}
function O(e) {
  let t = h(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
var k = e(() => {
  (t(), p());
});
function A(e) {
  let t = T(e),
    n = t ? i(t.configPath) : null;
  return {
    defaultEnvironment: t,
    defaultEnvironmentNormalized: n,
    availableEnvironments: n ? e.filter((e) => i(e.configPath) !== n) : e,
  };
}
function j(e, t) {
  return !e || e === `/` ? null : `${t}:${i(e)}`;
}
function M(e, t, n, r, i) {
  let a = e.query.snapshot(C, {
    commonDir: t.commonDir,
    root: t.root,
    hostConfig: n,
    key: v,
    operationSource: i,
    scope: `worktree`,
    ...d(void 0, null),
  });
  (a.setData({ value: r }), a.invalidate());
}
function N({
  canValidateSelection: e,
  environments: t,
  hostId: n,
  selectionsByWorkspace: r,
  workspaceRoot: o,
}) {
  let s = j(o, n),
    {
      defaultEnvironment: c,
      defaultEnvironmentNormalized: l,
      availableEnvironments: u,
    } = A(t),
    d = c?.configPath ?? null,
    f = I(r, n, s),
    p = f !== void 0,
    m = f ?? null,
    h = m ? i(m) : null,
    g = e && h != null ? (t.find((e) => a(e.configPath, h)) ?? null) : null,
    _ = p ? (g?.configPath ?? m) : null;
  e && p && m != null && g == null && (_ = d);
  let v = _ ? i(_) : null;
  return {
    workspaceKey: s,
    defaultEnvironment: c,
    defaultEnvironmentNormalized: l,
    availableEnvironments: u,
    resolvedConfigPath: _,
    normalizedResolvedConfigPath: v,
  };
}
function P(e) {
  let t = (0, L.c)(32),
    { hostId: n, workspaceRoot: r } = e,
    i = l(),
    a = f(R),
    o = j(r, n),
    s = r ?? ``,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = { hostId: n, workspaceRoot: s }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let u = o != null,
    d;
  t[3] === u ? (d = t[4]) : ((d = { enabled: u }), (t[3] = u), (t[4] = d));
  let p;
  t[5] !== c || t[6] !== d
    ? ((p = { params: c, queryConfig: d, select: F }),
      (t[5] = c),
      (t[6] = d),
      (t[7] = p))
    : (p = t[7]);
  let {
      data: h,
      isLoading: g,
      isFetching: _,
      error: v,
    } = m(`local-environments`, p),
    y,
    b;
  t[8] !== v ||
  t[9] !== n ||
  t[10] !== _ ||
  t[11] !== g ||
  t[12] !== h ||
  t[13] !== a ||
  t[14] !== r
    ? ((y = h ?? []),
      (b = N({
        canValidateSelection: !g && !_ && v == null,
        environments: y,
        hostId: n,
        selectionsByWorkspace: a,
        workspaceRoot: r,
      })),
      (t[8] = v),
      (t[9] = n),
      (t[10] = _),
      (t[11] = g),
      (t[12] = h),
      (t[13] = a),
      (t[14] = r),
      (t[15] = y),
      (t[16] = b))
    : ((y = t[15]), (b = t[16]));
  let {
      defaultEnvironment: x,
      defaultEnvironmentNormalized: S,
      availableEnvironments: C,
      resolvedConfigPath: w,
      normalizedResolvedConfigPath: T,
    } = b,
    E;
  t[17] !== i || t[18] !== o
    ? ((E = (e) => {
        o != null && i.set(R, { ...i.get(R), [o]: e });
      }),
      (t[17] = i),
      (t[18] = o),
      (t[19] = E))
    : (E = t[19]);
  let D = E,
    O;
  return (
    t[20] !== C ||
    t[21] !== x ||
    t[22] !== S ||
    t[23] !== y ||
    t[24] !== v ||
    t[25] !== _ ||
    t[26] !== g ||
    t[27] !== T ||
    t[28] !== w ||
    t[29] !== D ||
    t[30] !== o
      ? ((O = {
          workspaceKey: o,
          environments: y,
          isLoading: g,
          isFetching: _,
          error: v,
          defaultEnvironment: x,
          defaultEnvironmentNormalized: S,
          availableEnvironments: C,
          resolvedConfigPath: w,
          normalizedResolvedConfigPath: T,
          updateSelection: D,
        }),
        (t[20] = C),
        (t[21] = x),
        (t[22] = S),
        (t[23] = y),
        (t[24] = v),
        (t[25] = _),
        (t[26] = g),
        (t[27] = T),
        (t[28] = w),
        (t[29] = D),
        (t[30] = o),
        (t[31] = O))
      : (O = t[31]),
    O
  );
}
function F(e) {
  return e.environments;
}
function I(e, t, n) {
  if (n == null) return;
  if (Object.prototype.hasOwnProperty.call(e, n)) return e[n] ?? null;
  let r = `${t}:`,
    i = n.slice(r.length),
    o;
  for (let [t, n] of Object.entries(e))
    if (t.startsWith(r) && a(t.slice(r.length), i)) {
      let e = n ?? null;
      if (o === void 0) {
        o = e;
        continue;
      }
      if (o == null || e == null) {
        if (o !== e) return;
        continue;
      }
      if (!a(o, e)) return;
    }
  return o;
}
var L,
  R,
  z = e(() => {
    ((L = r()),
      c(),
      t(),
      w(),
      u(),
      k(),
      p(),
      n(),
      o(),
      (R = _(`local-env-selections-by-workspace`, {})));
  });
export {
  P as a,
  D as c,
  w as d,
  M as i,
  k as l,
  N as n,
  E as o,
  z as r,
  T as s,
  R as t,
  S as u,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ohr1dwam-BzJsIjl2.js.map
