import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  Cb as n,
  I2 as r,
  LW as i,
  O2 as a,
  RW as o,
  S0 as s,
  T2 as c,
  VW as l,
  WW as u,
  _0 as d,
  aJ as f,
  cY as p,
  dD as m,
  dJ as h,
  fJ as g,
  g0 as _,
  kb as v,
  nG as y,
  oG as b,
  oJ as x,
  rG as S,
  sY as C,
  uD as w,
  w2 as ee,
  x2 as T,
  y2 as E,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function te({ loginHint: e, statsigClient: t, url: n }) {
  if (e == null) return n;
  let r = new URL(n);
  return r.origin !== D.origin ||
    !r.pathname.startsWith(O) ||
    !y(t, k, { disableExposureLog: !1 }).get(`enabled`, !1)
    ? n
    : (r.searchParams.set(`login_hint`, e), r.toString());
}
var D,
  O,
  k,
  ne = e(() => {
    (t(),
      S(),
      (D = new URL(_)),
      (O = `${D.pathname}/purchase/`),
      (k = `3800100299`));
  });
function A(e) {
  return e === `failed` || e === `payment_declined`;
}
var j = e(() => {});
function re(e) {
  let t = (0, B.c)(2),
    { enabled: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = {
          queryKey: V,
          queryFn: z,
          enabled: n,
          staleTime: h.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          select: Te,
        }),
        (t[0] = n),
        (t[1] = r)),
    c(r)
  );
}
function ie(e) {
  let t = (0, B.c)(8),
    { enabled: n } = e,
    { data: r, isLoading: i } = v(),
    a = r?.id ?? null,
    o;
  t[0] === a ? (o = t[1]) : ((o = [...H, $, a]), (t[0] = a), (t[1] = o));
  let s = n && !i && r != null,
    l;
  t[2] === r
    ? (l = t[3])
    : ((l = (e) =>
        r ? (e.accounts?.[r.id]?.entitlement?.billing_currency ?? null) : null),
      (t[2] = r),
      (t[3] = l));
  let u;
  return (
    t[4] !== o || t[5] !== s || t[6] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: h.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: L,
          select: l,
        }),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    c(u)
  );
}
function ae(e) {
  let t = (0, B.c)(8),
    { enabled: n } = e,
    { data: r, isLoading: i } = v(),
    a = r?.id ?? null,
    o;
  t[0] === a ? (o = t[1]) : ((o = [...H, $, a]), (t[0] = a), (t[1] = o));
  let s = n && !i && r != null,
    l;
  t[2] === r
    ? (l = t[3])
    : ((l = (e) =>
        r
          ? (e.accounts?.[r.id]?.last_active_subscription
              .purchase_origin_platform ?? null)
          : null),
      (t[2] = r),
      (t[3] = l));
  let u;
  return (
    t[4] !== o || t[5] !== s || t[6] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: h.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: L,
          select: l,
        }),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    c(u)
  );
}
function oe(e) {
  let t = (0, B.c)(10),
    { accountId: n, enabled: r } = e,
    a = r && n == null,
    o;
  t[0] === a ? (o = t[1]) : ((o = { enabled: a }), (t[0] = a), (t[1] = o));
  let { accountId: s, isLoading: u } = F(o),
    d = n ?? s,
    f = n == null && u,
    p;
  t[2] === d ? (p = t[3]) : ((p = [...K, d]), (t[2] = d), (t[3] = p));
  let m = r && !f && d != null,
    g;
  t[4] === d
    ? (g = t[5])
    : ((g = async () => {
        if (d == null) return null;
        try {
          return await l.safeGet(
            `/accounts/{account_id}/spend-controls/current-user/monthly-usage`,
            {
              parameters: { path: { account_id: d } },
              additionalHeaders: {
                "Cache-Control": `no-store`,
                Pragma: `no-cache`,
              },
            },
          );
        } catch (e) {
          let t = e;
          if (t instanceof Error && i(t)?.message === Z) return null;
          throw t;
        }
      }),
      (t[4] = d),
      (t[5] = g));
  let _;
  return (
    t[6] !== p || t[7] !== m || t[8] !== g
      ? ((_ = {
          queryKey: p,
          enabled: m,
          staleTime: 0,
          gcTime: 0,
          refetchOnMount: `always`,
          refetchInterval: h.ONE_MINUTE,
          refetchIntervalInBackground: !1,
          refetchOnWindowFocus: !0,
          retry: !1,
          queryFn: g,
        }),
        (t[6] = p),
        (t[7] = m),
        (t[8] = g),
        (t[9] = _))
      : (_ = t[9]),
    c(_)
  );
}
function se(e) {
  let t = (0, B.c)(15),
    { accountId: n, enabled: r } = e,
    i = r && n == null,
    a;
  t[0] === i ? (a = t[1]) : ((a = { enabled: i }), (t[0] = i), (t[1] = a));
  let { accountId: o, isLoading: s } = F(a),
    u = n ?? o,
    d = n == null && s,
    f;
  t[2] === u ? (f = t[3]) : ((f = [...q, u]), (t[2] = u), (t[3] = f));
  let p = r && !d && u != null,
    m;
  t[4] === u
    ? (m = t[5])
    : ((m = () =>
        u == null
          ? null
          : l.safeGet(`/accounts/{account_id}/settings`, {
              parameters: { path: { account_id: u } },
            })),
      (t[4] = u),
      (t[5] = m));
  let g;
  t[6] !== f || t[7] !== p || t[8] !== m
    ? ((g = {
        queryKey: f,
        enabled: p,
        staleTime: h.ONE_MINUTE,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        queryFn: m,
        select: ce,
      }),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = g))
    : (g = t[9]);
  let { data: _, isError: v, isLoading: y, refetch: b } = c(g),
    x = r && !v ? _ : void 0,
    S = r && v,
    C = r && y,
    w;
  return (
    t[10] !== b || t[11] !== x || t[12] !== S || t[13] !== C
      ? ((w = { data: x, isError: S, isLoading: C, refetch: b }),
        (t[10] = b),
        (t[11] = x),
        (t[12] = S),
        (t[13] = C),
        (t[14] = w))
      : (w = t[14]),
    w
  );
}
function ce(e) {
  return e?.usage_limit_increase_request ?? { kind: `openai_native` };
}
function le(e) {
  let t = (0, B.c)(10),
    { enabled: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = { enabled: n }), (t[0] = n), (t[1] = r));
  let { accountId: i, isLoading: a } = F(r),
    o;
  t[2] === i ? (o = t[3]) : ((o = [...J, i]), (t[2] = i), (t[3] = o));
  let s = n && !a && i != null,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = async () => (i == null ? null : ye(i))), (t[4] = i), (t[5] = l));
  let u;
  return (
    t[6] !== o || t[7] !== s || t[8] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: h.ONE_MINUTE,
          refetchOnMount: `always`,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: l,
        }),
        (t[6] = o),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    c(u)
  );
}
function ue(e) {
  let t = (0, B.c)(8),
    { billingCurrency: n, enabled: r } = e,
    i = n ?? null,
    a;
  t[0] === i ? (a = t[1]) : ((a = [...U, i]), (t[0] = i), (t[1] = a));
  let o = r && n != null,
    s;
  t[2] === n
    ? (s = t[3])
    : ((s = async () => {
        if (n == null) return null;
        let e = await R(n),
          t = e.currency_config?.amount_per_credit;
        return t == null || t <= 0
          ? null
          : {
              amountPerCredit: t,
              currencyCode: e.currency_config?.symbol_code ?? n,
              minorUnitExponent: e.currency_config?.minor_unit_exponent ?? null,
            };
      }),
      (t[2] = n),
      (t[3] = s));
  let l;
  return (
    t[4] !== a || t[5] !== o || t[6] !== s
      ? ((l = {
          queryKey: a,
          enabled: o,
          staleTime: h.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: s,
        }),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    c(l)
  );
}
function de(e) {
  let t = (0, B.c)(10),
    { billingCurrency: n, enabled: r } = e,
    { client: i, isLoading: a } = b(),
    o = n === void 0 || (n == null && a),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = i.getContext().user?.country?.trim().toUpperCase()),
      (t[0] = i),
      (t[1] = s));
  let l = n ?? s ?? X,
    u;
  t[2] === l ? (u = t[3]) : ((u = [...W, l]), (t[2] = l), (t[3] = u));
  let d = r && !o,
    f;
  t[4] === l
    ? (f = t[5])
    : ((f = async () => {
        let e = (await R(l)).currency_config;
        if (e?.symbol_code == null) return null;
        let t =
          e.business_currency_override != null &&
          e.business_currency_override !== e.symbol_code
            ? (await R(e.business_currency_override)).currency_config
            : e;
        return {
          currencyCode: e.symbol_code,
          businessCurrencyCode: t?.symbol_code ?? e.symbol_code,
          minorUnitExponent: e.minor_unit_exponent ?? null,
          businessMinorUnitExponent: t?.minor_unit_exponent ?? null,
          monthlyAmounts: {
            free: e.free?.month?.amount ?? null,
            go: e.go?.month?.amount ?? null,
            plus: e.plus?.month?.amount ?? null,
            prolite: e.prolite?.month?.amount ?? null,
            pro: e.pro?.month?.amount ?? null,
            business: t?.business?.year?.amount ?? null,
          },
        };
      }),
      (t[4] = l),
      (t[5] = f));
  let p;
  return (
    t[6] !== u || t[7] !== d || t[8] !== f
      ? ((p = {
          queryKey: u,
          enabled: d,
          staleTime: h.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: f,
        }),
        (t[6] = u),
        (t[7] = d),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    c(p)
  );
}
function fe({ accountId: e, updatedPlan: t }) {
  return ee({
    queryKey: [...G, e, t],
    queryFn: () =>
      l.safeGet(`/subscriptions/update/preview`, {
        parameters: { query: { account_id: e, updated_plan: t } },
      }),
    staleTime: h.FIVE_MINUTES,
  });
}
function pe({ accountId: e, updatedPlan: t }) {
  return l.safePost(`/subscriptions/update`, {
    requestBody: { account_id: e, updated_plan: t },
  });
}
function me({ accountId: e }) {
  return l.safePost(`/subscriptions/update/cancel_pending`, {
    requestBody: { account_id: e },
  });
}
function he() {
  let e = (0, B.c)(16),
    t = s(C),
    n = a(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [...V, `enable`]), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== n || e[2] !== t
    ? ((i = {
        mutationKey: r,
        mutationFn: ve,
        onSuccess: (e) => {
          A(e.immediate_top_up_status) ||
            I({ scope: t, queryClient: n, response: e });
        },
      }),
      (e[1] = n),
      (e[2] = t),
      (e[3] = i))
    : (i = e[3]);
  let o = T(i),
    c;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = [...V, `update`]), (e[4] = c))
    : (c = e[4]);
  let l;
  e[5] !== n || e[6] !== t
    ? ((l = {
        mutationKey: c,
        mutationFn: _e,
        onSuccess: (e) => {
          A(e.immediate_top_up_status) ||
            I({ scope: t, queryClient: n, response: e });
        },
      }),
      (e[5] = n),
      (e[6] = t),
      (e[7] = l))
    : (l = e[7]);
  let u = T(l),
    d;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = [...V, `disable`]), (e[8] = d))
    : (d = e[8]);
  let f;
  e[9] !== n || e[10] !== t
    ? ((f = {
        mutationKey: d,
        mutationFn: ge,
        onSuccess: (e) => {
          I({ scope: t, queryClient: n, response: e });
        },
      }),
      (e[9] = n),
      (e[10] = t),
      (e[11] = f))
    : (f = e[11]);
  let p = T(f),
    m;
  return (
    e[12] !== p || e[13] !== o || e[14] !== u
      ? ((m = {
          enableAutoTopUpMutation: o,
          updateAutoTopUpMutation: u,
          disableAutoTopUpMutation: p,
        }),
        (e[12] = p),
        (e[13] = o),
        (e[14] = u),
        (e[15] = m))
      : (m = e[15]),
    m
  );
}
function ge() {
  return Ce();
}
function _e(e) {
  return Se(e);
}
function ve(e) {
  return xe(e);
}
function M() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { mutationKey: Q, mutationFn: N }), (e[0] = t))
      : (t = e[0]),
    T(t)
  );
}
function N(e) {
  return we(e);
}
function P() {
  let e = (0, B.c)(11),
    t = a(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { enabled: !0 }), (e[0] = n))
    : (n = e[0]);
  let { accountId: r } = F(n),
    i,
    o;
  e[1] === r
    ? ((i = e[2]), (o = e[3]))
    : ((i = [...J, r, `save`]),
      (o = async (e) => {
        let { justification: t, requestId: n } = e;
        if (r == null)
          throw Error(`Cannot save workspace admin request without account`);
        if (n == null) {
          let e = { justification: t };
          return l.safePost(`/accounts/{account_id}/workspace_admin_requests`, {
            parameters: { path: { account_id: r } },
            requestBody: e,
          });
        }
        let i = { justification: t };
        return l.safePatch(
          `/accounts/{account_id}/workspace_admin_requests/{request_id}`,
          {
            parameters: { path: { account_id: r, request_id: n } },
            requestBody: i,
          },
        );
      }),
      (e[1] = r),
      (e[2] = i),
      (e[3] = o));
  let s;
  e[4] !== r || e[5] !== t
    ? ((s = (e) => {
        (t.setQueryData([...J, r], (t) => be(t, e)),
          t.invalidateQueries({ queryKey: [...J, r] }));
      }),
      (e[4] = r),
      (e[5] = t),
      (e[6] = s))
    : (s = e[6]);
  let c;
  return (
    e[7] !== i || e[8] !== o || e[9] !== s
      ? ((c = { mutationKey: i, mutationFn: o, onSuccess: s }),
        (e[7] = i),
        (e[8] = o),
        (e[9] = s),
        (e[10] = c))
      : (c = e[10]),
    T(c)
  );
}
function F(e) {
  let t = (0, B.c)(8),
    { enabled: n } = e,
    { data: r, isLoading: i, hasEverErrored: a } = v(),
    o = r?.id == null && (!i || a),
    s = n && o,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = { queryConfig: { enabled: s, staleTime: h.ONE_MINUTE } }),
      (t[0] = s),
      (t[1] = c));
  let { data: l, isLoading: u } = x(`account-info`, c);
  if (r?.id != null) {
    let e;
    return (
      t[2] === r.id
        ? (e = t[3])
        : ((e = { accountId: r.id, isLoading: !1 }), (t[2] = r.id), (t[3] = e)),
      e
    );
  }
  if (!o) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { accountId: void 0, isLoading: !0 }), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let d = l?.accountId,
    f;
  return (
    t[5] !== u || t[6] !== d
      ? ((f = { accountId: d, isLoading: u }),
        (t[5] = u),
        (t[6] = d),
        (t[7] = f))
      : (f = t[7]),
    f
  );
}
async function ye(e) {
  let t = [],
    n = new Set(),
    r = null;
  for (;;) {
    let i = await l.safeGet(`/accounts/{account_id}/workspace_admin_requests`, {
      parameters: { path: { account_id: e }, query: { cursor: r, limit: Y } },
    });
    t.push(...(i.items ?? []));
    let a = i.cursor ?? null;
    if (a == null || n.has(a)) return { items: t, cursor: a };
    (n.add(a), (r = a));
  }
}
function I({ scope: e, queryClient: t, response: n }) {
  (t.setQueryData(V, n),
    n.immediate_top_up_status === `succeeded` && e.query.invalidate(m));
}
function be(e, t) {
  if (e == null) return { items: [t], cursor: null };
  let n = e.items.findIndex((e) => e.id === t.id);
  return n === -1
    ? { ...e, items: [t, ...e.items] }
    : { ...e, items: e.items.map((e, r) => (r === n ? t : e)) };
}
function L() {
  return l.safeGet(`/accounts/check/{version}`, {
    parameters: { path: { version: $ } },
  });
}
function R(e) {
  return l.safeGet(`/checkout_pricing_config/configs/{country_code}`, {
    parameters: { path: { country_code: e } },
  });
}
async function z() {
  return l.safeGet(`/subscriptions/auto_top_up/settings`);
}
async function xe(e) {
  return l.safePost(`/subscriptions/auto_top_up/enable`, { requestBody: e });
}
async function Se(e) {
  let t = {
    recharge_threshold: e.recharge_threshold,
    recharge_target: e.recharge_target,
    recharge_monthly_limit: e.recharge_monthly_limit,
  };
  return l.safePost(`/subscriptions/auto_top_up/update`, { requestBody: t });
}
async function Ce() {
  return l.safePost(`/subscriptions/auto_top_up/disable`);
}
async function we(e) {
  return l.safePost(`/accounts/send_add_credits_nudge_email`, {
    requestBody: e,
  });
}
function Te(e) {
  return {
    isEnabled: e.is_enabled,
    rechargeThreshold: e.recharge_threshold ?? null,
    rechargeTarget: e.recharge_target ?? null,
    rechargeMonthlyLimit: e.recharge_monthly_limit ?? null,
  };
}
var B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  Ee = e(() => {
    ((B = r()),
      E(),
      d(),
      n(),
      p(),
      S(),
      o(),
      g(),
      u(),
      f(),
      j(),
      w(),
      (V = [`usage-settings`, `auto-top-up`]),
      (H = [`usage-settings`, `accounts-check`]),
      (U = [`usage-settings`, `auto-top-up-pricing`]),
      (W = [`usage-settings`, `plan-pricing`]),
      (G = [`usage-settings`, `subscription-update-preview`]),
      (K = [`usage-settings`, `workspace-monthly-usage`]),
      (q = [`accounts`, `settings`]),
      (J = [`usage-settings`, `workspace-admin-requests`]),
      (Y = 100),
      (X = `US`),
      (Z = `Current user monthly cap is not available.`),
      (Q = [`usage-settings`, `add-credits-nudge-email`]),
      ($ = `v4-2023-04-27`));
  });
function De({
  intl: e,
  amount: t,
  currencyCode: n,
  currencyFractionDigits: r,
}) {
  let i = r ?? Oe({ intl: e, currencyCode: n });
  return e.formatNumber(t, {
    style: `currency`,
    currency: n,
    minimumFractionDigits: i,
    maximumFractionDigits: i,
  });
}
function Oe({ intl: e, currencyCode: t }) {
  return (
    e.formatters
      .getNumberFormat(e.locale, { style: `currency`, currency: t })
      .resolvedOptions().maximumFractionDigits ?? 0
  );
}
var ke = e(() => {});
export {
  se as _,
  fe as a,
  te as b,
  ie as c,
  re as d,
  de as f,
  oe as g,
  le as h,
  Ee as i,
  ue as l,
  P as m,
  ke as n,
  pe as o,
  ae as p,
  me as r,
  M as s,
  De as t,
  he as u,
  j as v,
  ne as x,
  A as y,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~pricing-plan-page~appgen-library-page~hotkey-win~ksix5pu6-Chm5vhV9.js.map
