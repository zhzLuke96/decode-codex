import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as n,
  $1 as r,
  $Y as i,
  AY as a,
  Aj as o,
  Aw as s,
  ET as c,
  Fj as l,
  Gq as u,
  I2 as d,
  JA as f,
  K1 as p,
  Kj as m,
  Kq as h,
  L2 as g,
  MU as _,
  Mq as v,
  NU as y,
  Nq as b,
  O2 as x,
  Pj as S,
  Q0 as C,
  R$ as w,
  S0 as ee,
  SK as T,
  SV as E,
  T2 as D,
  Tx as O,
  VA as te,
  WA as k,
  WT as A,
  XP as j,
  YP as M,
  Yq as ne,
  Z1 as re,
  ZA as ie,
  ZY as ae,
  Zq as oe,
  _0 as N,
  _S as se,
  _Y as ce,
  aJ as le,
  aS as ue,
  bF as de,
  bJ as fe,
  bK as pe,
  c2 as me,
  cS as he,
  cT as ge,
  cY as P,
  dJ as _e,
  dS as ve,
  dT as F,
  e2 as ye,
  ew as be,
  fG as xe,
  fJ as Se,
  fx as Ce,
  hJ as we,
  i2 as Te,
  iG as Ee,
  iS as De,
  iW as Oe,
  iw as ke,
  jw as Ae,
  k2 as je,
  m$ as Me,
  mJ as Ne,
  mY as I,
  nS as Pe,
  o0 as Fe,
  oS as Ie,
  oW as Le,
  pG as Re,
  pY as ze,
  px as Be,
  qj as Ve,
  r0 as He,
  rG as Ue,
  rS as We,
  s2 as Ge,
  sY as L,
  tJ as Ke,
  tS as qe,
  tT as R,
  tw as Je,
  u0 as z,
  vS as Ye,
  w0 as Xe,
  w2 as Ze,
  wx as Qe,
  x0 as B,
  xF as $e,
  y2 as et,
  yJ as tt,
  yY as nt,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function rt({ queryClient: e, hostId: t, cwd: n, enabled: r }) {
  return Ze({
    enabled: r,
    queryFn: async () => {
      try {
        return M((await Je(e, t, n, !1)).config);
      } catch {
        return null;
      }
    },
    queryKey: [...V, t, n],
    staleTime: _e.FIVE_MINUTES,
  });
}
var V,
  H,
  it = e(() => {
    (et(),
      N(),
      F(),
      j(),
      ke(),
      P(),
      Se(),
      (V = [`user-saved-config`]),
      (H = Te(L, ({ cwd: e = null, hostId: t }, { get: n, queryClient: r }) =>
        rt({ queryClient: r, hostId: t, cwd: e, enabled: n(A).includes(t) }),
      )));
  }),
  at,
  ot = e(() => {
    (I(),
      (at = ze({
        openConfigToml: {
          id: `codex.profileDropdown.openConfigToml`,
          defaultMessage: `Open config.toml`,
          description: `Action to open the MCP configuration file`,
        },
        openConfigTomlWsl: {
          id: `codex.profileDropdown.openConfigToml.wsl`,
          defaultMessage: `Open config.toml in WSL environment`,
          description: `Action to open the MCP configuration file inside Windows Subsystem for Linux`,
        },
      })));
  });
async function st(e) {
  O({
    path: e.path,
    cwd: null,
    hostId: e.hostId,
    target: await ct(e.hostId),
    line: e.range?.start.line,
    column: e.range?.start.column,
  });
}
async function ct(e) {
  try {
    return (await Ke(`open-in-targets`, { params: { cwd: null, hostId: e } }))
      .preferredTarget;
  } catch {
    return;
  }
}
var lt = e(() => {
  (Qe(), le());
});
function ut(e) {
  let t = (0, U.c)(7),
    { hostId: n } = e,
    { configPath: r, label: i } = ft(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && st({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  return (
    t[3] !== i || t[4] !== a || t[5] !== o
      ? ((s = (0, W.jsx)(v, {
          color: `secondary`,
          size: `toolbar`,
          className: `inline-flex w-fit`,
          onClick: a,
          disabled: o,
          children: i,
        })),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function dt(e) {
  let t = (0, U.c)(8),
    { hostId: n } = e,
    { configPath: r, label: i } = ft(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && st({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, W.jsx)(qe, {
        className: `icon-xxs shrink-0`,
        "aria-hidden": !0,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((c = (0, W.jsxs)(`button`, {
          type: `button`,
          className: `inline-flex cursor-interaction items-center gap-1 text-start font-medium text-token-text-secondary hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-50`,
          onClick: a,
          disabled: o,
          children: [i, s],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function ft(e) {
  let t = (0, U.c)(7),
    { data: n } = De(),
    r = oe(i.runCodexInWsl),
    a = Ie(e),
    o = n?.platform === `win32` && n?.hasWsl && r,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a == null ? null : pt.default.join(a, `config.toml`)),
      (t[0] = a),
      (t[1] = s));
  let c = s,
    l;
  t[2] === o
    ? (l = t[3])
    : ((l = o
        ? (0, W.jsx)(ce, { ...at.openConfigTomlWsl })
        : (0, W.jsx)(ce, { ...at.openConfigToml })),
      (t[2] = o),
      (t[3] = l));
  let u = l,
    d;
  return (
    t[4] !== c || t[5] !== u
      ? ((d = { configPath: c, label: u }), (t[4] = c), (t[5] = u), (t[6] = d))
      : (d = t[6]),
    d
  );
}
var U,
  pt,
  W,
  mt = e(() => {
    ((U = d()),
      (pt = t(Me(), 1)),
      a(),
      I(),
      b(),
      ue(),
      We(),
      Pe(),
      h(),
      ot(),
      lt(),
      (W = je()));
  });
function ht(e, t, n, r) {
  return new Promise((i) => {
    e.get(
      yt,
      JSON.stringify(t),
    )({ resolve: i, selection: n, target: t, write: r });
  });
}
function gt({ conversationId: e, hasConversation: t, hostId: n, cwd: r }) {
  return e != null && t ? [`conversation`, e] : [`default`, n, r];
}
function _t(e, t) {
  e.get(q, t.target) === t.selection &&
    (e.set(q, t.target, null),
    e.get(K, t.target) === t.selection && e.set(K, t.target, null),
    t.target[0] === `default` && e.get(G) === t.selection && e.set(G, null));
}
var G,
  K,
  q,
  vt,
  yt,
  bt = e(() => {
    (N(),
      P(),
      (G = Ge(L, null)),
      (K = me(L, (e) => null)),
      (q = me(L, (e) => null)),
      (vt = 320),
      (yt = ye(L, (e, { scope: t }) => {
        let n = null,
          r = !1,
          i = null;
        async function a() {
          if (r || n == null) return;
          let e = n;
          ((n = null),
            (r = !0),
            t.set(q, e.target, e.selection),
            e.target[0] === `default` && t.set(G, e.selection));
          try {
            await e.write();
          } catch {}
          (_t(t, e), e.resolve(), (r = !1), n != null && i == null && a());
        }
        function o() {
          (i != null && clearTimeout(i),
            (i = setTimeout(() => {
              ((i = null), a());
            }, vt)));
        }
        return (e) => {
          let r = n;
          (t.set(K, e.target, e.selection), (n = e), r?.resolve(), o());
        };
      })));
  });
function xt() {
  let e = (0, St.c)(13),
    t = ee(L),
    n = (0, Ct.useContext)(ie)?.location,
    r = n?.pathname ?? ``,
    i = n?.search ?? ``,
    a;
  e[0] !== r || e[1] !== i
    ? ((a = S(te({ pathname: r, routeTemplate: r, search: i }))),
      (e[0] = r),
      (e[1] = i),
      (e[2] = a))
    : (a = e[2]);
  let s = a,
    c = B(o, s),
    l;
  e[3] !== c || e[4] !== s
    ? ((l = Ve(s) && w(c) ? c : null), (e[3] = c), (e[4] = s), (e[5] = l))
    : (l = e[5]);
  let u = l,
    d = B(wt, u),
    f;
  e[6] !== u || e[7] !== t
    ? ((f = (e) => {
        u != null && t.set(wt, u, e);
      }),
      (e[6] = u),
      (e[7] = t),
      (e[8] = f))
    : (f = e[8]);
  let p = f,
    m = u != null,
    h;
  return (
    e[9] !== d || e[10] !== m || e[11] !== p
      ? ((h = {
          draftSettings: d,
          isNewThreadDraft: m,
          updateDraftSettings: p,
        }),
        (e[9] = d),
        (e[10] = m),
        (e[11] = p),
        (e[12] = h))
      : (h = e[12]),
    h
  );
}
var St,
  Ct,
  wt,
  Tt = e(() => {
    ((St = d()),
      N(),
      (Ct = t(g(), 1)),
      f(),
      m(),
      P(),
      k(),
      l(),
      (wt = me(L, (e) => ({
        isManuallyChanged: !1,
        modelSettings: null,
        serviceTier: null,
      }))));
  });
function J(e) {
  return (
    e === `none` ||
    e === `minimal` ||
    e === `low` ||
    e === `medium` ||
    e === `high` ||
    e === `xhigh` ||
    e === `max` ||
    e === `ultra`
  );
}
var Et,
  Dt,
  Ot,
  Y = e(() => {
    ((Et = `gpt-5.5`),
      (Dt = `medium`),
      (Ot = [`minimal`, `low`, `medium`, `high`, `xhigh`, `max`]));
  });
function kt({
  authMethod: e,
  availableModels: t,
  defaultModel: n,
  enabledReasoningEfforts: r,
  includeUltraReasoningEffort: i,
  models: a,
  useHiddenModels: o,
}) {
  let s = [],
    c = null,
    l = o && e !== `amazonBedrock`,
    u = a.some((e) =>
      e.supportedReasoningEfforts.some(({ reasoningEffort: e }) => e === `max`),
    ),
    d =
      i &&
      a.some((e) =>
        e.supportedReasoningEfforts.some(
          ({ reasoningEffort: e }) => e === `ultra`,
        ),
      );
  return (
    a.forEach((n) => {
      if (l ? t.has(n.model) : !n.hidden) {
        let t = i
            ? n.supportedReasoningEfforts
            : n.supportedReasoningEfforts.filter(
                ({ reasoningEffort: e }) => e !== `ultra`,
              ),
          a = (
            e === `copilot`
              ? [
                  t.find((e) => e.reasoningEffort === `medium`) ?? {
                    reasoningEffort: `medium`,
                    description: `medium effort`,
                  },
                ]
              : t
          ).filter(({ reasoningEffort: e }) => J(e) && r.has(e)),
          o = { ...n, supportedReasoningEfforts: a };
        (s.push(o), n.isDefault && (c = o));
      }
    }),
    (c ??= s.find((e) => e.model === n) ?? null),
    {
      models: s,
      defaultModel: c,
      hasModelSupportingMaxReasoningEffort: u,
      hasModelSupportingUltraReasoningEffort: d,
    }
  );
}
var At = e(() => {
  Y();
});
async function jt(
  e,
  { enabled: t, hostId: n, listModelsData: r, reasoningEffort: i },
) {
  let a = u(e.get, ae.enabledReasoningEfforts),
    o = a;
  (t && !a.includes(i)
    ? (o = [...a, i])
    : !t && a.includes(i) && (o = a.filter((e) => e !== i)),
    o !== a &&
      (!t && (i === `max` || i === `ultra`) && (await Mt(e, n, r, i)),
      await ne(e, ae.enabledReasoningEfforts, o)));
}
async function Mt(e, t, n, r) {
  let i = { hostId: t, cwd: null },
    a = e.query.snapshot(H, i),
    o = await a.getOrFetch(),
    s = e.get(R, i);
  if ((s?.reasoningEffort ?? o?.model_reasoning_effort ?? null) !== r) return;
  let c = s?.model ?? o?.model ?? n.defaultModel?.model,
    l = n.models.find((e) => e.model === c);
  if (l == null) return;
  let u = l.defaultReasoningEffort;
  if (!J(u)) return;
  let d = s?.profile ?? null;
  s == null && typeof o?.profile == `string` && (d = o.profile);
  let f = await y(`set-default-model-config-for-host`, {
    hostId: t,
    model: l.model,
    profile: d,
    reasoningEffort: u,
  });
  (await y(`clear-prewarmed-threads-for-host`, { hostId: t }),
    e.set(
      R,
      i,
      f.status === `okOverridden`
        ? { model: l.model, profile: d, reasoningEffort: u }
        : null,
    ),
    f.status !== `okOverridden` &&
      a.setData((e) =>
        e == null
          ? e
          : Object.assign(structuredClone(e), {
              model: l.model,
              model_reasoning_effort: u,
            }),
      ),
    we.dispatchMessage(`query-cache-invalidate`, {
      queryKey: [...V, t, null],
    }));
}
var Nt,
  Pt,
  Ft = e(() => {
    (N(),
      a(),
      F(),
      _(),
      it(),
      Y(),
      Ne(),
      P(),
      h(),
      (Nt = [`low`, `medium`, `high`, `xhigh`]),
      (Pt = C(L, ({ get: e }) => new Set(u(e, ae.enabledReasoningEfforts)))));
  });
function It(e) {
  let t = re(z()).safeParse(e.available_models),
    n = r().safeParse(e.use_hidden_models),
    i = z().safeParse(e.default_model);
  return {
    availableModels: new Set(t.success ? t.data : Rt),
    useHiddenModels: n.success ? n.data : X.useHiddenModels,
    defaultModel: i.success ? i.data : X.defaultModel,
  };
}
var Lt,
  Rt,
  X,
  zt,
  Bt = e(() => {
    ((Lt = t(Xe(), 1)),
      N(),
      p(),
      Y(),
      P(),
      (Rt = []),
      (X = {
        availableModels: new Set(Rt),
        useHiddenModels: !1,
        defaultModel: Et,
      }),
      (zt = Ge(L, X, { isEqual: Lt.default })));
  });
function Vt() {
  let e = (0, Ht.c)(2),
    { value: t } = Ee(`107580212`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = It(t)), (e[0] = t), (e[1] = n)), n);
}
var Ht,
  Ut = e(() => {
    ((Ht = d()), Ue(), Bt());
  });
function Wt(e, t, n = Jt) {
  return [...Yt, e, t ?? `no-auth`, n];
}
function Gt(e) {
  let t = (0, qt.c)(12),
    n = e?.hostId ?? `local`,
    r = e?.limit ?? Jt,
    i = ve(n),
    a = Vt(),
    o;
  t[0] === a.availableModels
    ? (o = t[1])
    : ((o = Array.from(a.availableModels).sort()),
      (t[0] = a.availableModels),
      (t[1] = o));
  let s = i?.authMethod ?? null,
    c = e?.includeUltraReasoningEffort !== !1,
    l;
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== a.defaultModel ||
  t[5] !== a.useHiddenModels ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== c
    ? ((l = {
        availableModels: o,
        authMethod: s,
        defaultModel: a.defaultModel,
        hostId: n,
        includeUltraReasoningEffort: c,
        limit: r,
        useHiddenModels: a.useHiddenModels,
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a.defaultModel),
      (t[5] = a.useHiddenModels),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u = e?.enabled !== !1 && i?.isLoading !== !0,
    d;
  return (
    t[10] === u
      ? (d = t[11])
      : ((d = { enabled: u }), (t[10] = u), (t[11] = d)),
    B(Xt, l, d)
  );
}
function Kt(e) {
  return e !== `pending`;
}
var qt,
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    ((qt = d()),
      N(),
      F(),
      _(),
      he(),
      P(),
      E(),
      xe(),
      Se(),
      At(),
      Ft(),
      Ut(),
      (Jt = 100),
      (Yt = [`models`, `list`]),
      (Xt = Te(
        L,
        (
          {
            availableModels: e,
            authMethod: t,
            defaultModel: n,
            hostId: r,
            includeUltraReasoningEffort: i,
            limit: a,
            useHiddenModels: o,
          },
          { get: s },
        ) => {
          let c = s(Pt),
            l = i && s(Re, `1186680773`);
          return {
            queryKey: Wt(r, t, a),
            enabled: s(A).includes(r),
            staleTime: _e.FIVE_MINUTES,
            queryFn: () =>
              y(`list-models-for-host`, {
                hostId: r,
                includeHidden: !0,
                cursor: null,
                limit: a,
              }),
            select: ({ data: r }) =>
              kt({
                authMethod: t,
                availableModels: new Set(e),
                defaultModel: n,
                enabledReasoningEfforts: c,
                includeUltraReasoningEffort: l,
                models: r,
                useHiddenModels: o,
              }),
          };
        },
      )));
  });
function Qt(e) {
  return $t.safeParse(e).success;
}
var $t,
  en = e(() => {
    (p(), ($t = Fe({ code: He(-32600), message: z().min(1) })));
  });
function tn(e, t) {
  return J(e) && t.includes(e) ? e : Dt;
}
function nn(e, t) {
  return e?.find((e) => e.model === t);
}
function rn({
  userSavedModelString: e,
  userSavedReasoningEffort: t,
  listModelsData: n,
}) {
  let r = e ? nn(n?.models, e) : (n?.defaultModel ?? nn(n?.models, `gpt-5.5`)),
    i = r?.supportedReasoningEfforts?.map((e) => e.reasoningEffort),
    a = t != null && i != null && i.includes(t) ? t : r?.defaultReasoningEffort;
  return {
    model: r ? r.model : (e ?? `gpt-5.5`),
    reasoningEffort:
      a ?? t ?? n?.defaultModel?.defaultReasoningEffort ?? `medium`,
    profile: null,
    isLoading: !1,
  };
}
var an = e(() => {
  Y();
});
function on(e, t) {
  return [...V, e, t];
}
function sn(e, t) {
  return t == null
    ? e
    : {
        ...e,
        model: t.model,
        reasoningEffort: t.reasoningEffort,
        profile: t.profile,
      };
}
function cn() {
  let e = (0, Z.c)(3),
    t = Vt(),
    { data: n, isLoading: r } = Ye(`copilot-default-model`),
    i = n ?? t.defaultModel,
    a;
  return (
    e[0] !== r || e[1] !== i
      ? ((a = {
          model: i,
          reasoningEffort: `medium`,
          profile: null,
          isLoading: r,
        }),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
function ln(e) {
  let t = (0, Z.c)(50),
    { hostId: n, cwd: r, isHostRegistered: i, waitForModelList: a } = e,
    o = a === void 0 ? !1 : a,
    s = ee(L).queryClient,
    c;
  t[0] === n ? (c = t[1]) : ((c = { hostId: n }), (t[0] = n), (t[1] = c));
  let { data: l, isLoading: u } = Gt(c),
    d;
  t[2] !== r || t[3] !== n
    ? ((d = { hostId: n, cwd: r }), (t[2] = r), (t[3] = n), (t[4] = d))
    : (d = t[4]);
  let f = B(R, d),
    p;
  t[5] !== r || t[6] !== n || t[7] !== i || t[8] !== s
    ? ((p = rt({ queryClient: s, hostId: n, cwd: r, enabled: i })),
      (t[5] = r),
      (t[6] = n),
      (t[7] = i),
      (t[8] = s),
      (t[9] = p))
    : (p = t[9]);
  let { data: m, dataUpdatedAt: h, isLoading: g } = D(p),
    _;
  t[10] !== r || t[11] !== n
    ? ((_ = { hostId: n, cwd: r }), (t[10] = r), (t[11] = n), (t[12] = _))
    : (_ = t[12]);
  let { data: v, dataUpdatedAt: y, isLoading: b } = B(H, _),
    x;
  t[13] !== r ||
  t[14] !== n ||
  t[15] !== i ||
  t[16] !== b ||
  t[17] !== g ||
  t[18] !== v?.model ||
  t[19] !== v?.model_reasoning_effort ||
  t[20] !== y ||
  t[21] !== s ||
  t[22] !== m?.model ||
  t[23] !== m?.model_reasoning_effort ||
  t[24] !== h
    ? ((x = () => {
        let e = s.getQueryCache().find({ exact: !0, queryKey: on(n, r) }),
          t = e?.state.dataUpdatedAt ?? 0,
          a = m?.model ?? null,
          o = m?.model_reasoning_effort ?? null,
          c = v?.model ?? null,
          l = v?.model_reasoning_effort ?? null;
        if (t === 0 || h !== t || y === t || (a === c && o === l)) return;
        let u = setTimeout(() => {
          fe.warning(`model_settings.config_query_diverged`, {
            safe: {
              cacheDataUpdatedAt: t,
              directDataUpdatedAt: h,
              directIsLoading: g,
              isHostRegistered: i,
              maitaiDataUpdatedAt: y,
              maitaiIsLoading: b,
              observerCount: e?.getObserversCount() ?? 0,
            },
            sensitive: {
              cwd: r,
              directModel: a,
              directReasoningEffort: o,
              hostId: n,
              maitaiModel: c,
              maitaiReasoningEffort: l,
            },
          });
        });
        return () => {
          clearTimeout(u);
        };
      }),
      (t[13] = r),
      (t[14] = n),
      (t[15] = i),
      (t[16] = b),
      (t[17] = g),
      (t[18] = v?.model),
      (t[19] = v?.model_reasoning_effort),
      (t[20] = y),
      (t[21] = s),
      (t[22] = m?.model),
      (t[23] = m?.model_reasoning_effort),
      (t[24] = h),
      (t[25] = x))
    : (x = t[25]);
  let S;
  (t[26] !== r ||
  t[27] !== n ||
  t[28] !== i ||
  t[29] !== b ||
  t[30] !== g ||
  t[31] !== v ||
  t[32] !== y ||
  t[33] !== s ||
  t[34] !== m ||
  t[35] !== h
    ? ((S = [r, n, i, b, g, v, y, s, m, h]),
      (t[26] = r),
      (t[27] = n),
      (t[28] = i),
      (t[29] = b),
      (t[30] = g),
      (t[31] = v),
      (t[32] = y),
      (t[33] = s),
      (t[34] = m),
      (t[35] = h),
      (t[36] = S))
    : (S = t[36]),
    (0, Q.useEffect)(x, S));
  let C = m?.model ?? null,
    w;
  t[37] !== l?.models || t[38] !== C || t[39] !== o
    ? ((w = o && C != null && l?.models.some((e) => e.model === C) === !1),
      (t[37] = l?.models),
      (t[38] = C),
      (t[39] = o),
      (t[40] = w))
    : (w = t[40]);
  let T = w,
    E;
  if (
    t[41] !== u ||
    t[42] !== g ||
    t[43] !== l ||
    t[44] !== m ||
    t[45] !== C ||
    t[46] !== f ||
    t[47] !== T ||
    t[48] !== o
  ) {
    let e = rn({
        userSavedModelString: T ? null : C,
        userSavedReasoningEffort: m?.model_reasoning_effort ?? null,
        listModelsData:
          o && l != null
            ? { ...l, defaultModel: l.defaultModel ?? l.models[0] ?? null }
            : l,
      }),
      n = m?.model == null || m.model_reasoning_effort == null;
    ((E = sn(
      {
        ...e,
        profile: typeof m?.profile == `string` ? m.profile : null,
        isLoading: g || (o ? l?.models[0] == null : u && n),
      },
      f,
    )),
      (t[41] = u),
      (t[42] = g),
      (t[43] = l),
      (t[44] = m),
      (t[45] = C),
      (t[46] = f),
      (t[47] = T),
      (t[48] = o),
      (t[49] = E));
  } else E = t[49];
  return E;
}
function un(e) {
  let t = (0, Z.c)(4),
    { hostId: n, cwd: r } = e,
    i = B($, n),
    a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = { hostId: n, cwd: r, isHostRegistered: i, waitForModelList: !0 }),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    ln(a)
  );
}
function dn(e) {
  let t = (0, Z.c)(5),
    { hostId: n, cwd: r } = e,
    i = x(),
    a = Ae(),
    o;
  return (
    t[0] !== r || t[1] !== n || t[2] !== a || t[3] !== i
      ? ((o = async () => {
          let e = on(n, r);
          (await i.cancelQueries({ queryKey: e, exact: !0 }), await a(e));
        }),
        (t[0] = r),
        (t[1] = n),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function fn(e, t) {
  return Qt(t)
    ? e.formatMessage(
        {
          id: `composer.modelSettings.errorConfigValidation`,
          defaultMessage: `Couldn’t update model settings. Check your config.toml.{br}{br}{message}`,
          description: `Error shown when updating model settings fails because the configuration is invalid`,
        },
        { br: (0, Q.createElement)(`br`), message: t.message },
      )
    : e.formatMessage({
        id: `composer.modelSettings.errorGeneric`,
        defaultMessage: `Couldn’t update model settings`,
        description: `Error shown when updating model settings fails for a non-auth reason`,
      });
}
function pn(e = null, t = !1) {
  let n = ee(L),
    r = n.queryClient,
    i = Be(e),
    a = i.hostId,
    o = ve(a),
    { data: s, isPending: l } = B(be, {
      authMethod: o?.authMethod ?? null,
      hostId: a,
    }),
    u = B($, a),
    d = o?.authMethod === `copilot`,
    f = nt(),
    p = i.cwd,
    m = ln({ hostId: a, cwd: p, isHostRegistered: u }),
    h = cn(),
    g = d ? h : m,
    _ = t ? s?.requirements?.models?.newThread : null,
    v = _ != null,
    b = B(ge, e),
    x = gt({ conversationId: e, hasConversation: b, hostId: a, cwd: p }),
    S = B(K, x),
    C = B(q, x),
    w = B(c, e),
    E = w?.settings.model ?? null,
    D = E != null && E.trim().length > 0 ? E : null,
    O = (0, Q.useCallback)(
      async (t, n) =>
        e == null || !b
          ? !1
          : (await y(`update-thread-settings-for-next-turn`, {
              conversationId: e,
              threadSettings: { model: t, effort: n, multiAgentMode: Oe },
            }),
            !0),
      [e, b],
    ),
    te = b
      ? {
          model: D ?? m.model,
          reasoningEffort: w?.settings.reasoning_effort ?? null,
          profile: m.profile,
          isLoading: m.isLoading && D == null,
        }
      : {
          ...g,
          model: _?.model ?? g.model,
          reasoningEffort: _?.modelReasoningEffort ?? g.reasoningEffort,
          isLoading: g.isLoading || l,
        },
    k = S ?? C,
    A = k == null ? te : { ...te, ...k },
    j = dn({ hostId: a, cwd: p }),
    M = (0, Q.useCallback)(
      (e) => {
        fe.error(`Failed to update model and reasoning effort`, {
          safe: {},
          sensitive: { error: e },
        });
        let t = n.get(T),
          r = fn(f, e);
        if (Qt(e)) {
          t.danger(r, {
            id: `composer.modelSettings.updateError`,
            description: (0, Q.createElement)(
              `div`,
              { className: `mt-4` },
              (0, Q.createElement)(dt, { hostId: a }),
            ),
          });
          return;
        }
        t.danger(r, { id: `composer.modelSettings.updateError` });
      },
      [a, f, n],
    ),
    ne = (0, Q.useCallback)(
      async (t, r) => {
        let i = gt({
            conversationId: e,
            hasConversation: b,
            hostId: a,
            cwd: p,
          }),
          o = { model: t, reasoningEffort: r };
        n.set(K, i, o);
        try {
          if (!(await O(t, r)))
            throw Error(`No conversation available for next-turn model update`);
        } catch (e) {
          throw (M(e), e);
        } finally {
          n.get(K, i) === o && n.set(K, i, null);
        }
      },
      [O, e, b, a, n, p, M],
    ),
    re = (0, Q.useCallback)(
      async (e, t) => {
        let i = null,
          o;
        try {
          if (await O(e, t)) return;
          if (d) {
            await $e(n, `copilot-default-model`, e, { throwOnFailure: !0 });
            return;
          }
          if (
            (fe.info(`Setting default model and reasoning effort`, {
              safe: { newModel: e, newEffort: t, profile: m.profile },
            }),
            !u)
          )
            throw Error(`Model settings host is unavailable`);
          i = on(a, p);
          let s = { hostId: a, cwd: p };
          (await r.cancelQueries({ exact: !0, queryKey: i }),
            (o = r.getQueryData(i)),
            r.setQueryData(i, (n) =>
              n == null
                ? n
                : Object.assign(structuredClone(n), {
                    model: e,
                    model_reasoning_effort: t,
                  }),
            ));
          let c = await y(`set-default-model-config-for-host`, {
            hostId: a,
            model: e,
            reasoningEffort: t,
            profile: m.profile,
          });
          if (
            (await y(`clear-prewarmed-threads-for-host`, { hostId: a }),
            c?.status === `okOverridden`)
          ) {
            (r.setQueryData(i, o),
              n.set(R, s, {
                model: e,
                reasoningEffort: t,
                profile: m.profile,
              }));
            return;
          }
          (n.set(R, s, null),
            await j(),
            await n.query.fetch(H, { hostId: a, cwd: p }));
        } catch (e) {
          (i != null && r.setQueryData(i, o), M(e));
        }
      },
      [d, O, m.profile, j, u, a, r, n, M, p],
    );
  return {
    hasManagedNewThreadSettings: v,
    hostId: a,
    setModelAndReasoningEffortForNextTurn: ne,
    setModelAndReasoningEffort: (0, Q.useCallback)(
      (t, r) =>
        ht(
          n,
          gt({ conversationId: e, hasConversation: b, hostId: a, cwd: p }),
          { model: t, reasoningEffort: r },
          () => re(t, r),
        ),
      [e, b, a, n, p, re],
    ),
    modelSettings: A,
  };
}
function mn(e) {
  let t = (0, Z.c)(12),
    n = e === void 0 ? null : e,
    { draftSettings: r, isNewThreadDraft: i, updateDraftSettings: a } = xt(),
    o = pn(n, i),
    s = n == null && i && o.hasManagedNewThreadSettings,
    c;
  t[0] !== s || t[1] !== o || t[2] !== a
    ? ((c = async (e, t) => {
        s &&
          a((n) => ({
            ...n,
            isManuallyChanged: !0,
            modelSettings: {
              model: e,
              profile: o.modelSettings.profile,
              reasoningEffort: t,
            },
          }));
        let n = o.setModelAndReasoningEffort(e, t);
        (s &&
          (await y(`clear-prewarmed-threads-for-host`, { hostId: o.hostId })),
          await n);
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = a),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  t[4] !== r || t[5] !== s || t[6] !== o.modelSettings
    ? ((u =
        !s || r.modelSettings == null
          ? o.modelSettings
          : { ...o.modelSettings, ...r.modelSettings }),
      (t[4] = r),
      (t[5] = s),
      (t[6] = o.modelSettings),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== l || t[9] !== o || t[10] !== u
      ? ((d = { ...o, modelSettings: u, setModelAndReasoningEffort: l }),
        (t[8] = l),
        (t[9] = o),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var Z,
  Q,
  $,
  hn = e(() => {
    ((Z = d()),
      et(),
      N(),
      (Q = t(g(), 1)),
      I(),
      F(),
      _(),
      Le(),
      it(),
      he(),
      mt(),
      pe(),
      bt(),
      de(),
      se(),
      Tt(),
      ke(),
      s(),
      Zt(),
      Ut(),
      P(),
      tt(),
      en(),
      an(),
      Ce(),
      ($ = n(L, (e, { get: t }) => t(A).includes(e))));
  });
export {
  V as A,
  J as C,
  mt as D,
  ut as E,
  it as M,
  lt as O,
  Y as S,
  xt as T,
  kt as _,
  an as a,
  Et as b,
  Zt as c,
  zt as d,
  It as f,
  jt as g,
  Ft as h,
  nn as i,
  H as j,
  st as k,
  Gt as l,
  Pt as m,
  un as n,
  tn as o,
  Nt as p,
  mn as r,
  Kt as s,
  hn as t,
  Bt as u,
  At as v,
  Tt as w,
  Ot as x,
  Dt as y,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ggy53w99-CqMu8hJo.js.map
