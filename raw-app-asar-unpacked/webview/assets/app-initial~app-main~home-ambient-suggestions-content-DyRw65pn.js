import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AE as n,
  C0 as r,
  CJ as i,
  I2 as a,
  JA as o,
  L2 as s,
  ME as c,
  S0 as l,
  VW as u,
  WW as d,
  _0 as f,
  _2 as p,
  aG as m,
  bE as h,
  cS as g,
  cY as _,
  d2 as v,
  i2 as y,
  ij as b,
  lS as x,
  m2 as ee,
  oj as te,
  p2 as S,
  rG as ne,
  s2 as re,
  sY as C,
  wJ as w,
  x0 as ie,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Du as ae,
  Eu as oe,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as se,
  c as ce,
  i as T,
  l as E,
  r as D,
  t as le,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ggy53w99-CqMu8hJo.js";
function O() {
  let e = (0, A.c)(2),
    t = te(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = M.some((e) => b({ path: e, end: !0 }, t.pathname) != null)),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function k(e, t) {
  return e.includes(t) ? e : [...e, t];
}
var A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V = e(() => {
    ((A = a()),
      v(),
      (j = t(s(), 1)),
      o(),
      g(),
      ce(),
      se(),
      i(),
      n(),
      le(),
      oe(),
      (M = [`/`, `/local/:conversationId`]),
      (N = new Set([`gpt-5.4`, `gpt-5.5`])),
      (P = () => {}),
      (F = w(`seen-model-upgrade-list`, [])),
      (I = w(`latest-model-seen`, null)),
      (L = (e, t, n, r) => ({
        announcementContent: n,
        showAnnouncement: e && !t,
        dismissAnnouncement: r,
      })),
      (R = () => {
        let e = (0, A.c)(10),
          t = O(),
          { authMethod: n } = x(),
          { data: r, isLoading: i } = E(),
          [a, o] = S(F),
          s = n === `amazonBedrock` || n === `bedrockApiKey`,
          c;
        e[0] !== a || e[1] !== r?.models || e[2] !== s
          ? ((c =
              r?.models.find(
                (e) =>
                  !s &&
                  e.availabilityNux != null &&
                  !N.has(e.model) &&
                  !a.includes(e.model),
              ) ?? null),
            (e[0] = a),
            (e[1] = r?.models),
            (e[2] = s),
            (e[3] = c))
          : (c = e[3]);
        let l = c,
          u;
        e[4] === l
          ? (u = e[5])
          : ((u =
              l == null
                ? null
                : {
                    defaultReasoningEffort: l.defaultReasoningEffort,
                    ...l.availabilityNux,
                    model: l.model,
                  }),
            (e[4] = l),
            (e[5] = u));
        let d = u,
          f;
        return (
          e[6] !== l || e[7] !== a || e[8] !== o
            ? ((f = () => {
                l != null && o(k(a, l.model));
              }),
              (e[6] = l),
              (e[7] = a),
              (e[8] = o),
              (e[9] = f))
            : (f = e[9]),
          L(l != null && !i && t, !1, d, f)
        );
      }),
      (z = () => {
        let e = (0, A.c)(25),
          t = O(),
          { modelSettings: n } = D(),
          { data: r } = E(),
          [i, a] = S(F),
          [o, s] = S(I),
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g;
        if (
          e[0] !== i ||
          e[1] !== o ||
          e[2] !== r?.models ||
          e[3] !== n.model
        ) {
          ((f = o == null ? i : k(i, o)), (h = f !== i), (m = o != null));
          let t = T(r?.models, n.model);
          ((l = t?.upgrade),
            (g = l == null ? void 0 : T(r?.models, l)),
            (c =
              t?.upgradeInfo == null || g == null
                ? null
                : {
                    ...t.upgradeInfo,
                    defaultReasoningEffort: g.defaultReasoningEffort,
                    model: g.model,
                  }),
            (d = g != null && N.has(g.model)),
            (u = !1),
            (p = null),
            l && ((p = l), (u = f.includes(p))),
            (e[0] = i),
            (e[1] = o),
            (e[2] = r?.models),
            (e[3] = n.model),
            (e[4] = c),
            (e[5] = l),
            (e[6] = u),
            (e[7] = d),
            (e[8] = f),
            (e[9] = p),
            (e[10] = m),
            (e[11] = h),
            (e[12] = g));
        } else
          ((c = e[4]),
            (l = e[5]),
            (u = e[6]),
            (d = e[7]),
            (f = e[8]),
            (p = e[9]),
            (m = e[10]),
            (h = e[11]),
            (g = e[12]));
        let _, v;
        (e[13] !== f || e[14] !== a || e[15] !== s || e[16] !== m || e[17] !== h
          ? ((_ = () => {
              (h && a(f), m && s(null));
            }),
            (v = [f, a, s, m, h]),
            (e[13] = f),
            (e[14] = a),
            (e[15] = s),
            (e[16] = m),
            (e[17] = h),
            (e[18] = _),
            (e[19] = v))
          : ((_ = e[18]), (v = e[19])),
          (0, j.useEffect)(_, v));
        let y;
        e[20] !== f || e[21] !== p || e[22] !== a || e[23] !== s
          ? ((y = () => {
              p && (a(k(f, p)), s(null));
            }),
            (e[20] = f),
            (e[21] = p),
            (e[22] = a),
            (e[23] = s),
            (e[24] = y))
          : (y = e[24]);
        let b = y;
        return L(!!l && !n.isLoading && g != null && !d && t, u, c, b);
      }),
      (B = () => {
        let e = (0, A.c)(9),
          t = O(),
          { isServiceTierAllowed: n } = ae(),
          { modelSettings: r } = D(),
          { data: i } = E(),
          a = ee(F),
          o,
          s;
        e[0] !== i?.models || e[1] !== r.model
          ? ((o = T(i?.models, r.model)),
            (s = c(o, h)),
            (e[0] = i?.models),
            (e[1] = r.model),
            (e[2] = o),
            (e[3] = s))
          : ((o = e[2]), (s = e[3]));
        let l = s,
          u;
        e[4] !== a || e[5] !== i?.models
          ? ((u =
              i?.models.find((e) => c(e, `priority`) && a.includes(e.model)) ??
              null),
            (e[4] = a),
            (e[5] = i?.models),
            (e[6] = u))
          : (u = e[6]);
        let d = u,
          f = l ? (o ?? d) : d,
          p;
        return (
          e[7] === f
            ? (p = e[8])
            : ((p = f == null ? null : { model: f.model }),
              (e[7] = f),
              (e[8] = p)),
          L(n && !r.isLoading && t && f != null, !1, p, P)
        );
      }));
  });
function H(e, t) {
  return t == null ? null : (e[t] ?? null);
}
function ue(e, t, n) {
  let r = H(e, t);
  return r != null && r >= n ? e : { ...e, [t]: n };
}
var U,
  W,
  G,
  K,
  q,
  J = e(() => {
    (v(),
      i(),
      (U = p(!1)),
      (W = w(`has-seen-knowledge-work-announcement`, !1)),
      (G = w(`has-seen-fast-mode-announcement`, !1)),
      (K = w(`has-seen-work-plugins-announcement`, !1)),
      (q = w(`workspace-message-last-seen-at-by-account`, {})));
  });
function de(e, t, n) {
  if (e == null) return null;
  let r =
    e.messages.find(
      (e) =>
        e.message_type === `announcement` && !t.has(e.message_id) && pe(e, n),
    ) ?? null;
  return r == null ? null : { message: r };
}
function fe(e) {
  return e?.messages.find((e) => e.message_type === `headline`) ?? null;
}
function pe(e, t) {
  return t == null || e.created_at > t;
}
function me(e, t) {
  return t == null ? Q : (e.get(t) ?? Q);
}
function he(e, t, n) {
  let r = new Map(e),
    i = new Set(r.get(t) ?? []);
  for (let e of n) i.add(e);
  return (r.set(t, i), r);
}
function ge() {
  let e = (0, X.c)(10),
    t = l(C),
    { accountId: n, data: i, isLoading: a, shouldFetch: o } = Y(),
    s = me(r($), n),
    [c, u] = S(q),
    d = H(c, n),
    f = o ? de(i, s, d) : null,
    p;
  e[0] !== n || e[1] !== f || e[2] !== t || e[3] !== u || e[4] !== c
    ? ((p = () => {
        f == null ||
          n == null ||
          (ye(t, n, f), u(ue(c, n, f.message.created_at)));
      }),
      (e[0] = n),
      (e[1] = f),
      (e[2] = t),
      (e[3] = u),
      (e[4] = c),
      (e[5] = p))
    : (p = e[5]);
  let m;
  return (
    e[6] !== f || e[7] !== a || e[8] !== p
      ? ((m = { announcement: f, dismissAnnouncement: p, isLoading: a }),
        (e[6] = f),
        (e[7] = a),
        (e[8] = p),
        (e[9] = m))
      : (m = e[9]),
    m
  );
}
function _e() {
  let e = (0, X.c)(5),
    { data: t, shouldFetch: n } = Y(),
    r;
  e[0] !== t || e[1] !== n
    ? ((r = n ? fe(t) : null), (e[0] = t), (e[1] = n), (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === r ? (i = e[4]) : ((i = { headline: r }), (e[3] = r), (e[4] = i)),
    i
  );
}
function Y() {
  let e = (0, X.c)(8),
    { accountId: t, authMethod: n, isLoading: r } = x(),
    i = O(),
    a = m(`4285716042`) && i && !r && n === `chatgpt` && t != null,
    o;
  e[0] !== t || e[1] !== a
    ? ((o = { accountId: t, shouldFetch: a }),
      (e[0] = t),
      (e[1] = a),
      (e[2] = o))
    : (o = e[2]);
  let s = ie(be, o),
    c = a && s.isLoading,
    l;
  return (
    e[3] !== t || e[4] !== s.data || e[5] !== a || e[6] !== c
      ? ((l = { accountId: t, data: s.data, isLoading: c, shouldFetch: a }),
        (e[3] = t),
        (e[4] = s.data),
        (e[5] = a),
        (e[6] = c),
        (e[7] = l))
      : (l = e[7]),
    l
  );
}
async function ve() {
  return u.safeGet(`/wham/workspace-messages`, {
    additionalHeaders: { "Cache-Control": `no-store` },
  });
}
function ye(e, t, n) {
  e.set($, (e) => he(e, t, [n.message.message_id]));
}
var X,
  Z,
  Q,
  $,
  be,
  xe = e(() => {
    ((X = a()),
      v(),
      f(),
      g(),
      V(),
      _(),
      ne(),
      d(),
      J(),
      (Z = 10 * 1e3),
      (Q = new Set()),
      ($ = re(C, () => new Map())),
      (be = y(C, ({ accountId: e, shouldFetch: t }) => ({
        queryKey: [`codex-workspace-messages`, e],
        enabled: t,
        refetchOnMount: !1,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        refetchInterval: Z,
        refetchIntervalInBackground: !0,
        staleTime: 6e4,
        queryFn: ve,
      }))));
  }),
  Se,
  Ce,
  we = e(() => {
    ((Se = t(s(), 1)), (Ce = (0, Se.createContext)(null)));
  });
export {
  _e as a,
  K as c,
  V as d,
  B as f,
  R as h,
  ge as i,
  U as l,
  z as m,
  we as n,
  G as o,
  O as p,
  xe as r,
  W as s,
  Ce as t,
  J as u,
};
//# sourceMappingURL=app-initial~app-main~home-ambient-suggestions-content-DyRw65pn.js.map
