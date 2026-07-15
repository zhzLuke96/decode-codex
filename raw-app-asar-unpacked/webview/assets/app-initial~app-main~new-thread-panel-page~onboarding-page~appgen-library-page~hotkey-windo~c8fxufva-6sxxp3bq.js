import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Aw as t,
  C0 as n,
  GK as r,
  I2 as i,
  J1 as a,
  K1 as o,
  KK as s,
  MB as c,
  MU as l,
  NU as u,
  O2 as d,
  PB as f,
  S0 as p,
  T2 as m,
  _0 as h,
  bI as g,
  bJ as _,
  cY as v,
  dJ as y,
  dT as b,
  eT as x,
  fJ as S,
  iw as ee,
  jB as C,
  jw as w,
  o0 as T,
  sY as E,
  tw as D,
  vI as O,
  x2 as k,
  y2 as A,
  yJ as j,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function M(e) {
  return [...U, e];
}
function N(e) {
  return [...W, e];
}
async function P(e, t) {
  try {
    let n = await u(`get-windows-sandbox-readiness-for-host`, { hostId: t });
    return (z(e, n.status), n.status);
  } catch (t) {
    throw (
      z(e, `checkFailed`),
      _.error(`Failed to load Windows sandbox readiness`, {
        safe: {},
        sensitive: { error: t },
      }),
      t
    );
  }
}
function F(e) {
  let t = (0, B.c)(8),
    r = n(x),
    i = e ?? r,
    a;
  t[0] === i ? (a = t[1]) : ((a = M(i)), (t[0] = i), (t[1] = a));
  let o = a,
    s = d(),
    c;
  t[2] !== s || t[3] !== i
    ? ((c = async () => {
        try {
          return R((await D(s, i, null, !1)).config.windows);
        } catch (e) {
          let t = e;
          return (
            _.error(`Failed to load Windows sandbox mode`, {
              safe: { error: String(t) },
              sensitive: {},
            }),
            null
          );
        }
      }),
      (t[2] = s),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== o || t[6] !== c
      ? ((l = { queryKey: o, queryFn: c, staleTime: y.ONE_MINUTE }),
        (t[5] = o),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    m(l)
  );
}
function I(e) {
  let t = (0, B.c)(9),
    r = p(E),
    i = n(x),
    a = e?.hostId ?? i,
    o;
  t[0] === a ? (o = t[1]) : ((o = N(a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] !== a || t[3] !== r
    ? ((s = () => P(r, a)), (t[2] = a), (t[3] = r), (t[4] = s))
    : (s = t[4]);
  let c = e?.enabled ?? !0,
    l;
  return (
    t[5] !== o || t[6] !== s || t[7] !== c
      ? ((l = {
          queryKey: o,
          queryFn: s,
          staleTime: y.INFINITE,
          retry: !1,
          retryOnMount: !1,
          enabled: c,
        }),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    m(l)
  );
}
function L(e) {
  let t = (0, B.c)(19),
    r = n(x),
    i = e ?? r,
    a = d(),
    o = w(),
    s;
  t[0] === i ? (s = t[1]) : ((s = M(i)), (t[0] = i), (t[1] = s));
  let c = s,
    l;
  t[2] === i ? (l = t[3]) : ((l = N(i)), (t[2] = i), (t[3] = l));
  let f = l,
    p;
  t[4] === i
    ? (p = t[5])
    : ((p = (e) =>
        u(`batch-write-config-value-for-host`, {
          hostId: i,
          edits: [
            {
              keyPath: `windows.sandbox`,
              value: e,
              mergeStrategy: e == null ? `replace` : `upsert`,
            },
          ],
          filePath: null,
          expectedVersion: null,
        })),
      (t[4] = i),
      (t[5] = p));
  let m, h;
  t[6] !== a || t[7] !== c
    ? ((m = (e) => {
        let t = a.getQueryData(c);
        return (a.setQueryData(c, e), { previousMode: t });
      }),
      (h = (e, t, n) => {
        (_.error(`Failed to update Windows sandbox mode`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          n?.previousMode !== void 0 && a.setQueryData(c, n.previousMode));
      }),
      (t[6] = a),
      (t[7] = c),
      (t[8] = m),
      (t[9] = h))
    : ((m = t[8]), (h = t[9]));
  let g;
  t[10] !== o || t[11] !== c || t[12] !== f
    ? ((g = async () => {
        await Promise.all([o(c), o(f)]);
      }),
      (t[10] = o),
      (t[11] = c),
      (t[12] = f),
      (t[13] = g))
    : (g = t[13]);
  let v;
  return (
    t[14] !== p || t[15] !== m || t[16] !== h || t[17] !== g
      ? ((v = { mutationFn: p, onMutate: m, onError: h, onSettled: g }),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g),
        (t[18] = v))
      : (v = t[18]),
    k(v)
  );
}
function R(e) {
  let t = H.safeParse(e);
  return t.success ? (t.data.sandbox ?? null) : null;
}
function z(e, t) {
  g(e, c, { readiness: G[t] });
}
var B,
  V,
  H,
  U,
  W,
  G,
  K = e(() => {
    ((B = i()),
      f(),
      A(),
      h(),
      o(),
      b(),
      l(),
      O(),
      ee(),
      t(),
      v(),
      j(),
      S(),
      (V = a([`elevated`, `unelevated`])),
      (H = T({ sandbox: V.optional() }).passthrough()),
      (U = [`windows-sandbox`, `mode`]),
      (W = [`windows-sandbox`, `readiness`]),
      (G = {
        ready: C.CODEX_WINDOWS_SANDBOX_READINESS_READY,
        notConfigured: C.CODEX_WINDOWS_SANDBOX_READINESS_NOT_CONFIGURED,
        updateRequired: C.CODEX_WINDOWS_SANDBOX_READINESS_UPDATE_REQUIRED,
        checkFailed: C.CODEX_WINDOWS_SANDBOX_READINESS_CHECK_FAILED,
      }));
  });
function q(e) {
  return e ?? Q;
}
function J({ mode: e, visible: t, settings: n }) {
  return { ...q(n), [e]: t };
}
function Y({
  canShowDefaultPermissions: e,
  canSelectGuardianMode: t,
  canShowConfigCustom: n,
  canShowConfigFullAccess: r,
  canShowGuardianOption: i,
  selectionAgentModes: a,
  visibleAgentModes: o,
}) {
  let s = r && o.includes(`full-access`),
    c = n && a.includes(`custom`),
    l = i;
  return {
    canShowCustom: c,
    canShowFullAccess: s,
    optionCount: (e ? 1 : 0) + (l && t ? 1 : 0) + (s ? 1 : 0) + (c ? 1 : 0),
    showGuardianOption: l,
  };
}
function X({ availableAgentModes: e, visibility: t }) {
  return e.filter((e) => {
    switch (e) {
      case `guardian-approvals`:
        return t[`guardian-approvals`];
      case `full-access`:
        return t[`full-access`];
      case `custom`:
        return !1;
      case `auto`:
      case `granular`:
      case `read-only`:
        return !0;
    }
  });
}
function Z({ availableAgentModes: e, visibleAgentModes: t }) {
  return e.includes(`custom`) ? [...t, `custom`] : t;
}
var Q,
  $,
  te = e(() => {
    (r(),
      (Q = { "guardian-approvals": !0, "full-access": !0 }),
      ($ = s(`composer-permission-mode-visibility`, Q)));
  });
export {
  X as a,
  M as c,
  L as d,
  F as f,
  Z as i,
  N as l,
  q as n,
  te as o,
  I as p,
  Y as r,
  J as s,
  $ as t,
  K as u,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~c8fxufva-6sxxp3bq.js.map
