import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Af as r,
  C0 as i,
  Cb as a,
  Cz as o,
  DJ as s,
  Df as c,
  Eb as l,
  Fq as u,
  I2 as d,
  IJ as f,
  KJ as p,
  L2 as m,
  Lb as h,
  MJ as g,
  Mq as _,
  Nq as v,
  Op as y,
  PB as b,
  PJ as x,
  Pq as S,
  Rq as C,
  S0 as w,
  SK as T,
  T2 as E,
  VW as D,
  WW as O,
  _0 as k,
  _D as A,
  _Y as j,
  _f as M,
  aG as N,
  bI as P,
  bK as ee,
  bf as te,
  cY as F,
  cp as ne,
  cv as re,
  dD as ie,
  dJ as ae,
  dY as I,
  fJ as oe,
  g0 as se,
  gD as L,
  gf as ce,
  hf as le,
  k2 as R,
  kf as ue,
  kp as de,
  lY as fe,
  lp as z,
  mD as pe,
  mY as B,
  mf as me,
  ov as he,
  pY as ge,
  qJ as _e,
  rG as ve,
  sG as ye,
  sY as be,
  sv as xe,
  uD as Se,
  vI as V,
  x2 as Ce,
  y2 as we,
  yY as Te,
  zq as Ee,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dr as De,
  ur as Oe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import { Jt as H, qt as ke } from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  C as Ae,
  Ct as je,
  D as Me,
  Dt as Ne,
  E as Pe,
  Et as Fe,
  S as Ie,
  St as Le,
  T as Re,
  _t as ze,
  c as Be,
  mt as Ve,
  s as He,
  ut as Ue,
  w as We,
  x as Ge,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  $a as Ke,
  Co as qe,
  Eo as Je,
  bo as Ye,
  go as Xe,
  mo as Ze,
  so as Qe,
  to as $e,
  wo as et,
  yo as tt,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as nt,
  d as rt,
  l as it,
  o as at,
  p as ot,
  u as st,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as U,
  p as ct,
  v as W,
  y as lt,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  F as ut,
  H as dt,
  L as ft,
  M as pt,
  O as mt,
  U as ht,
  V as gt,
  W as _t,
  j as vt,
  k as yt,
  z as bt,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~new-thread-panel-page~onboardi~lxr449xn-CwhAsMMf.js";
import {
  _ as xt,
  c as St,
  d as Ct,
  f as wt,
  g as Tt,
  h as Et,
  i as Dt,
  l as Ot,
  m as kt,
  n as At,
  p as jt,
  t as Mt,
  u as Nt,
  v as Pt,
  y as Ft,
} from "./app-initial~app-main~new-thread-panel-page~pricing-plan-page~appgen-library-page~hotkey-win~ksix5pu6-Chm5vhV9.js";
import {
  n as It,
  t as Lt,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~bkyphntg-CyJk2_r3.js";
import {
  n as Rt,
  t as G,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as zt, t as Bt } from "./esm-Dk007VCu.js";
import { n as Vt, t as Ht } from "./settings-loading-row-DPKmhlyp.js";
import { r as Ut, t as Wt } from "./plan-pricing-vmbBGPZd.js";
function K(e) {
  return e == null ? `` : e.trim();
}
function Gt({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = Xt(e),
    r = Xt(t),
    i = Zt(n),
    a = Qt({ parsedThreshold: n, parsedTarget: r });
  return {
    rechargeThresholdError: i,
    rechargeTargetError: a,
    isValid: i == null && a == null,
  };
}
function Kt({ draftState: e, serverState: t, isSaving: n }) {
  let r = Gt({
      rechargeThreshold: e.rechargeThreshold,
      rechargeTarget: e.rechargeTarget,
    }),
    i = Jt({ draftState: e, serverState: t }),
    a = qt({ draftState: e, serverState: t, validation: r });
  return {
    validation: r,
    hasChanges: i,
    saveIntent: a,
    isSaveEnabled: i && a !== `none` && !n,
  };
}
function qt({ draftState: e, serverState: t, validation: n }) {
  return e.isEnabled
    ? n.isValid
      ? t.isEnabled
        ? K(e.rechargeThreshold) === K(t.rechargeThreshold) &&
          K(e.rechargeTarget) === K(t.rechargeTarget)
          ? `none`
          : `update`
        : `enable`
      : `none`
    : t.isEnabled
      ? `disable`
      : `none`;
}
function Jt({ draftState: e, serverState: t }) {
  return e.isEnabled === t.isEnabled
    ? !e.isEnabled && !t.isEnabled
      ? !1
      : K(e.rechargeThreshold) !== K(t.rechargeThreshold) ||
        K(e.rechargeTarget) !== K(t.rechargeTarget)
    : !0;
}
function Yt({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = K(e),
    r = K(t);
  if (!/^\d+$/.test(n) || !/^\d+$/.test(r)) return null;
  let i = Number.parseInt(n, 10),
    a = Number.parseInt(r, 10);
  return a < i ? null : a - i;
}
function Xt(e) {
  let t = K(e);
  return t.length === 0
    ? { kind: `missing` }
    : /^\d+$/.test(t)
      ? { kind: `valid`, value: Number.parseInt(t, 10) }
      : { kind: `invalid` };
}
function Zt(e) {
  switch (e.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.value < 125 ? `below-threshold-minimum` : null;
  }
}
function Qt({ parsedThreshold: e, parsedTarget: t }) {
  switch (t.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.kind === `valid` && t.value - e.value < 125
        ? `target-difference-too-small`
        : null;
  }
}
var $t = e(() => {});
function en() {
  let e = (0, q.c)(9),
    t = ye(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { enabled: !0 }), (e[0] = n))
    : (n = e[0]);
  let { data: r, isPending: i } = St(n),
    a;
  e[1] !== r || e[2] !== i || e[3] !== t
    ? ((a = i ? void 0 : (r ?? t.getContext().user?.country ?? null)),
      (e[1] = r),
      (e[2] = i),
      (e[3] = t),
      (e[4] = a))
    : (a = e[4]);
  let o = a,
    s;
  e[5] === o
    ? (s = e[6])
    : ((s = { billingCurrency: o, enabled: !0 }), (e[5] = o), (e[6] = s));
  let { data: c } = Ot(s),
    l;
  return (
    e[7] === c
      ? (l = e[8])
      : ((l = { creditPricingInfo: c }), (e[7] = c), (e[8] = l)),
    l
  );
}
function tn(e) {
  let t = (0, q.c)(9),
    { forceOneTimePurchase: n, isAutoReloadEnabled: r } = e,
    i = n === void 0 ? !1 : n,
    a = w(be),
    o = ye(),
    s = je(),
    c;
  t[0] !== i || t[1] !== r || t[2] !== s || t[3] !== a || t[4] !== o
    ? ((c = (e) => {
        let t = et(o, `personal`);
        (Je(a, {
          audience: `personal`,
          checkoutKind: `standalone_credit`,
          entryPoint: `usage_settings_purchase_cta`,
        }),
          s({
            event: e,
            intent: `purchase`,
            ...(i ? { forceOneTimePurchase: !0 } : {}),
            isAutoReloadEnabled: r,
            isCustomCheckoutEnabled: t,
            legacyUrl: Un,
            source: `usage_settings_purchase_cta`,
          }));
      }),
      (t[0] = i),
      (t[1] = r),
      (t[2] = s),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(j, {
        id: `settings.usage.credit.balance.buyCredits`,
        defaultMessage: `Buy credits`,
        description: `Button label to open the credit purchase flow`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] === c
      ? (u = t[8])
      : ((u = (0, J.jsx)(_, {
          color: `outline`,
          size: `toolbar`,
          onClick: c,
          children: l,
        })),
        (t[7] = c),
        (t[8] = u)),
    u
  );
}
function nn(e) {
  let t = (0, q.c)(15),
    { canPurchaseCredits: n, creditDetails: r } = e,
    i = n === void 0 ? !1 : n,
    a = Te(),
    { creditPricingInfo: o } = en(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(G.Header, {
        className: `pb-3 [&>div>div]:!text-sm`,
        title: (0, J.jsx)(j, {
          id: `settings.usage.credit.balance.title`,
          defaultMessage: `Credits balance`,
          description: `Title for the credits balance section`,
        }),
        subtitle: (0, J.jsx)(j, {
          id: `settings.usage.credit.balance.readOnly.description`,
          defaultMessage: `Your remaining Codex credits.`,
          description: `Description for the read-only credits balance section shown to users who already purchased credits`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== r || t[2] !== o || t[3] !== a
    ? ((c = wn({ intl: a, creditDetails: r, pricingInfo: o })),
      (t[1] = r),
      (t[2] = o),
      (t[3] = a),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === c
    ? (l = t[6])
    : ((l = (0, J.jsx)(`div`, {
        className: `text-sm text-token-text-primary`,
        children: c,
      })),
      (t[5] = c),
      (t[6] = l));
  let u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(`div`, {
        className: `text-sm text-token-text-secondary`,
        children: (0, J.jsx)(j, {
          id: `settings.usage.credit.balance.current`,
          defaultMessage: `Current balance`,
          description: `Label below the current credits balance amount`,
        }),
      })),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === l
    ? (d = t[9])
    : ((d = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [l, u],
      })),
      (t[8] = l),
      (t[9] = d));
  let f;
  t[10] === i
    ? (f = t[11])
    : ((f = i
        ? (0, J.jsx)(tn, { forceOneTimePurchase: !0, isAutoReloadEnabled: !1 })
        : null),
      (t[10] = i),
      (t[11] = f));
  let p;
  return (
    t[12] !== d || t[13] !== f
      ? ((p = (0, J.jsxs)(G, {
          children: [
            s,
            (0, J.jsx)(G.Content, {
              children: (0, J.jsx)(U, {
                children: (0, J.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-4 p-4`,
                  children: [d, f],
                }),
              }),
            }),
          ],
        })),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function rn(e) {
  let t = (0, q.c)(36),
    {
      serverState: n,
      creditDetails: r,
      enableAutoTopUpMutation: i,
      updateAutoTopUpMutation: a,
      disableAutoTopUpMutation: o,
    } = e,
    s = Te(),
    { creditPricingInfo: c } = en(),
    l = je(),
    [u, d] = (0, zn.useState)(!1),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(j, {
        id: `settings.usage.credit.balance.title`,
        defaultMessage: `Credits balance`,
        description: `Title for the credits balance section`,
      })),
      (t[0] = f))
    : (f = t[0]);
  let p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(G.Header, {
        title: f,
        subtitle: (0, J.jsx)(j, {
          id: `settings.usage.credit.balance.description`,
          defaultMessage: `Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>`,
          description: `Description for the credits balance section in usage settings`,
          values: { link: an },
        }),
      })),
      (t[1] = p))
    : (p = t[1]);
  let m;
  t[2] !== r || t[3] !== c || t[4] !== s
    ? ((m = wn({ intl: s, creditDetails: r, pricingInfo: c })),
      (t[2] = r),
      (t[3] = c),
      (t[4] = s),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === m
    ? (h = t[7])
    : ((h = (0, J.jsx)(`div`, {
        className: `text-sm text-token-text-primary`,
        children: m,
      })),
      (t[6] = m),
      (t[7] = h));
  let g, _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(j, {
        id: `settings.usage.credit.balance.current`,
        defaultMessage: `Current balance`,
        description: `Label below the current credits balance amount`,
      })),
      (_ = (0, J.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 rounded-full bg-current`,
      })),
      (t[8] = g),
      (t[9] = _))
    : ((g = t[8]), (_ = t[9]));
  let v;
  t[10] !== l || t[11] !== n.isEnabled
    ? ((v = () => {
        l({
          intent: `auto-reload`,
          isAutoReloadEnabled: n.isEnabled,
          source: `usage_settings_auto_reload_cta`,
          openLegacyAutoReload: () => {
            d(!0);
          },
        });
      }),
      (t[10] = l),
      (t[11] = n.isEnabled),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] === n.isEnabled
    ? (y = t[14])
    : ((y = n.isEnabled
        ? (0, J.jsx)(j, {
            id: `settings.usage.credit.balance.manageAutoReload`,
            defaultMessage: `Manage auto-reload`,
            description: `Button label to manage active auto reload from the credits balance section`,
          })
        : (0, J.jsx)(j, {
            id: `settings.usage.credit.balance.setupAutoReload`,
            defaultMessage: `Set up auto-reload`,
            description: `Button label to set up auto reload from the credits balance section`,
          })),
      (t[13] = n.isEnabled),
      (t[14] = y));
  let b;
  t[15] !== v || t[16] !== y
    ? ((b = (0, J.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-x-1 text-sm text-token-text-secondary`,
        children: [
          g,
          _,
          (0, J.jsx)(`button`, {
            type: `button`,
            className: `cursor-interaction text-token-text-link-foreground`,
            onClick: v,
            children: y,
          }),
        ],
      })),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== h || t[19] !== b
    ? ((x = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [h, b],
      })),
      (t[18] = h),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === n.isEnabled
    ? (S = t[22])
    : ((S = (0, J.jsx)(tn, { isAutoReloadEnabled: n.isEnabled })),
      (t[21] = n.isEnabled),
      (t[22] = S));
  let C;
  t[23] !== x || t[24] !== S
    ? ((C = (0, J.jsxs)(G, {
        children: [
          p,
          (0, J.jsx)(G.Content, {
            children: (0, J.jsx)(U, {
              children: (0, J.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 p-4`,
                children: [x, S],
              }),
            }),
          }),
        ],
      })),
      (t[23] = x),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] !== r ||
  t[27] !== o ||
  t[28] !== i ||
  t[29] !== u ||
  t[30] !== n ||
  t[31] !== a
    ? ((w = u
        ? (0, J.jsx)(sn, {
            open: u,
            serverState: n,
            creditDetails: r,
            enableAutoTopUpMutation: i,
            updateAutoTopUpMutation: a,
            disableAutoTopUpMutation: o,
            onOpenChange: d,
          })
        : null),
      (t[26] = r),
      (t[27] = o),
      (t[28] = i),
      (t[29] = u),
      (t[30] = n),
      (t[31] = a),
      (t[32] = w))
    : (w = t[32]);
  let T;
  return (
    t[33] !== C || t[34] !== w
      ? ((T = (0, J.jsxs)(J.Fragment, { children: [C, w] })),
        (t[33] = C),
        (t[34] = w),
        (t[35] = T))
      : (T = t[35]),
    T
  );
}
function an(e) {
  return (0, J.jsx)(`a`, {
    href: Wn,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `inline-flex cursor-interaction text-token-text-link-foreground`,
    onClick: on,
    children: e,
  });
}
function on(e) {
  L({ event: e, href: Wn, initiator: `open_in_browser_bridge` });
}
function sn(e) {
  let t = (0, q.c)(79),
    {
      open: n,
      serverState: r,
      creditDetails: i,
      enableAutoTopUpMutation: a,
      updateAutoTopUpMutation: o,
      disableAutoTopUpMutation: s,
      onOpenChange: l,
    } = e,
    u = w(be),
    d = Te(),
    f = ye(),
    p = je(),
    m;
  t[0] === n ? (m = t[1]) : ((m = { enabled: n }), (t[0] = n), (t[1] = m));
  let { data: h, isPending: g } = St(m),
    v;
  t[2] !== h || t[3] !== g || t[4] !== f
    ? ((v = g ? void 0 : (h ?? f.getContext().user?.country ?? null)),
      (t[2] = h),
      (t[3] = g),
      (t[4] = f),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b;
  t[6] !== n || t[7] !== y
    ? ((b = { billingCurrency: y, enabled: n }),
      (t[6] = n),
      (t[7] = y),
      (t[8] = b))
    : (b = t[8]);
  let { data: x, isPending: S } = Ot(b),
    C = g || S,
    E = (0, zn.useId)(),
    D = (0, zn.useId)(),
    O = (0, zn.useId)(),
    k = (0, zn.useId)(),
    A = a.isPending || o.isPending,
    N = s.isPending,
    P = A || N,
    [ee, te] = (0, zn.useState)(null),
    [F, ne] = (0, zn.useState)(!1),
    re;
  t[9] !== d || t[10] !== u
    ? ((re = (e) => {
        u.get(T).danger(In(e, d), Bn);
      }),
      (t[9] = d),
      (t[10] = u),
      (t[11] = re))
    : (re = t[11]);
  let ie = re,
    ae;
  t[12] !== d || t[13] !== u
    ? ((ae = (e) => {
        u.get(T).success(Ln(e, d), Bn);
      }),
      (t[12] = d),
      (t[13] = u),
      (t[14] = ae))
    : (ae = t[14]);
  let I = ae,
    oe;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => {
        (ne(!1), te(null));
      }),
      (t[15] = oe))
    : (oe = t[15]);
  let se = oe,
    L;
  t[16] !== x || t[17] !== i?.balance || t[18] !== d
    ? ((L = (e) => {
        let { draftState: t } = e;
        (ne(!0),
          te(
            Dn({
              intl: d,
              creditBalance: i?.balance,
              rechargeThreshold: t.rechargeThreshold,
              rechargeTarget: t.rechargeTarget,
              pricingInfo: x,
            })?.amount ?? null,
          ));
      }),
      (t[16] = x),
      (t[17] = i?.balance),
      (t[18] = d),
      (t[19] = L))
    : (L = t[19]);
  let R = L,
    de;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = [`usage-settings`, `auto-top-up`, `manage-payment`]), (t[20] = de))
    : (de = t[20]);
  let fe;
  t[21] !== d || t[22] !== u
    ? ((fe = {
        mutationKey: de,
        mutationFn: mn,
        onSuccess: pn,
        onError: () => {
          u.get(T).danger(
            d.formatMessage({
              id: `settings.usage.autoTopUp.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again.`,
              description: `Error shown when opening the manage payment flow from the auto top up settings dialog fails`,
            }),
            Bn,
          );
        },
      }),
      (t[21] = d),
      (t[22] = u),
      (t[23] = fe))
    : (fe = t[23]);
  let z = Ce(fe),
    pe;
  t[24] === z
    ? (pe = t[25])
    : ((pe = () => {
        z.isPending || z.mutate();
      }),
      (t[24] = z),
      (t[25] = pe));
  let B = pe,
    he = r.rechargeThreshold ?? Vn,
    ge = r.rechargeTarget ?? Hn,
    _e;
  t[26] !== he || t[27] !== ge
    ? ((_e = { isEnabled: !0, rechargeThreshold: he, rechargeTarget: ge }),
      (t[26] = he),
      (t[27] = ge),
      (t[28] = _e))
    : (_e = t[28]);
  let ve;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = { onChange: fn, onSubmit: dn }), (t[29] = ve))
    : (ve = t[29]);
  let xe;
  t[30] !== a ||
  t[31] !== R ||
  t[32] !== P ||
  t[33] !== l ||
  t[34] !== r ||
  t[35] !== ie ||
  t[36] !== I ||
  t[37] !== o
    ? ((xe = async (e) => {
        let { value: t } = e,
          n = Kt({ draftState: t, serverState: r, isSaving: P });
        if (n.isSaveEnabled)
          switch (n.saveIntent) {
            case `disable`:
            case `none`:
              return;
            case `enable`:
              try {
                if (
                  (se(),
                  Ft((await a.mutateAsync(Rn(t))).immediate_top_up_status))
                ) {
                  R({ draftState: t });
                  return;
                }
                (I(`enable`), l(!1));
              } catch {
                ie(`enable`);
              }
              return;
            case `update`:
              try {
                if (
                  (se(),
                  Ft((await o.mutateAsync(Rn(t))).immediate_top_up_status))
                ) {
                  R({ draftState: t });
                  return;
                }
                (I(`update`), l(!1));
              } catch {
                ie(`update`);
              }
              return;
          }
      }),
      (t[30] = a),
      (t[31] = R),
      (t[32] = P),
      (t[33] = l),
      (t[34] = r),
      (t[35] = ie),
      (t[36] = I),
      (t[37] = o),
      (t[38] = xe))
    : (xe = t[38]);
  let Se;
  t[39] !== _e || t[40] !== xe
    ? ((Se = { defaultValues: _e, validators: ve, onSubmit: xe }),
      (t[39] = _e),
      (t[40] = xe),
      (t[41] = Se))
    : (Se = t[41]);
  let V = zt(Se),
    we;
  t[42] !== P || t[43] !== l
    ? ((we = (e) => {
        (P && !e) || (e || se(), l(e));
      }),
      (t[42] = P),
      (t[43] = l),
      (t[44] = we))
    : (we = t[44]);
  let Ee = we,
    De;
  t[45] !== s ||
  t[46] !== l ||
  t[47] !== r.isEnabled ||
  t[48] !== ie ||
  t[49] !== I
    ? ((De = async () => {
        if (r.isEnabled)
          try {
            (await s.mutateAsync(), I(`disable`), l(!1));
          } catch {
            ie(`disable`);
          }
      }),
      (t[45] = s),
      (t[46] = l),
      (t[47] = r.isEnabled),
      (t[48] = ie),
      (t[49] = I),
      (t[50] = De))
    : (De = t[50]);
  let Oe = De,
    H;
  t[51] !== x ||
  t[52] !== i?.balance ||
  t[53] !== D ||
  t[54] !== E ||
  t[55] !== V ||
  t[56] !== Ee ||
  t[57] !== Oe ||
  t[58] !== B ||
  t[59] !== F ||
  t[60] !== ee ||
  t[61] !== d ||
  t[62] !== P ||
  t[63] !== C ||
  t[64] !== N ||
  t[65] !== A ||
  t[66] !== p ||
  t[67] !== l ||
  t[68] !== n ||
  t[69] !== z.isPending ||
  t[70] !== u ||
  t[71] !== r ||
  t[72] !== f ||
  t[73] !== k ||
  t[74] !== O
    ? ((H = (e) => {
        let { values: t, submissionAttempts: a } = e,
          o = Kt({ draftState: t, serverState: r, isSaving: P }),
          s = Dn({
            intl: d,
            creditBalance: i?.balance,
            rechargeThreshold: t.rechargeThreshold,
            rechargeTarget: t.rechargeTarget,
            pricingInfo: x,
          }),
          m =
            !F &&
            s != null &&
            (o.saveIntent === `enable` || o.saveIntent === `update`)
              ? {
                  saveIntent: o.saveIntent,
                  amount: s.amount,
                  creditCount: s.creditCount,
                }
              : null;
        return (0, J.jsx)(c, {
          open: n,
          size: `default`,
          contentClassName: `w-[536px] max-w-[calc(100vw-2rem)]`,
          contentProps: { "aria-describedby": D, onOpenAutoFocus: ln },
          shouldIgnoreClickOutside: P,
          onOpenChange: Ee,
          children: (0, J.jsx)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(), V.handleSubmit());
            },
            children: (0, J.jsxs)(me, {
              className: `gap-0 px-6 py-6`,
              children: [
                (0, J.jsx)(ue, {
                  asChild: !0,
                  children: (0, J.jsx)(`h2`, {
                    id: E,
                    className: `sr-only`,
                    children: d.formatMessage({
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, J.jsx)(`p`, {
                  id: D,
                  className: `sr-only`,
                  children: d.formatMessage({
                    id: `settings.usage.autoTopUp.dialog.description`,
                    defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                    description: `Description shown below the inputs in the auto top up settings dialog`,
                  }),
                }),
                (0, J.jsx)(M, {
                  children: (0, J.jsx)(ce, {
                    title: (0, J.jsx)(j, {
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, J.jsxs)(M, {
                  className: `gap-5`,
                  children: [
                    (0, J.jsx)(V.Field, {
                      name: `rechargeThreshold`,
                      children: (e) => {
                        let t =
                          a > 0 || e.state.meta.isBlurred
                            ? kn(e.state.meta.errors)
                            : null;
                        return (0, J.jsx)(xn, {
                          id: O,
                          label: (0, J.jsx)(j, {
                            id: `settings.usage.autoTopUp.threshold.label`,
                            defaultMessage: `Minimum balance`,
                            description: `Label for the auto top up threshold input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `125`,
                          disabled: P,
                          hasError: t != null,
                          helperText: (0, J.jsx)(j, {
                            id: `settings.usage.autoTopUp.threshold.helper`,
                            defaultMessage: `Auto reload triggers when your credit balance goes below this amount.`,
                            description: `Helper text shown below the minimum balance input in the auto top up dialog`,
                          }),
                          footerContent: Nn({
                            fieldError: t,
                            fieldName: `threshold`,
                            intl: d,
                          }),
                          footerTone: `error`,
                          ariaLabel: d.formatMessage({
                            id: `settings.usage.autoTopUp.threshold.ariaLabel`,
                            defaultMessage: `Auto-reload minimum balance`,
                            description: `Aria label for the auto top up threshold input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (se(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, J.jsx)(V.Field, {
                      name: `rechargeTarget`,
                      children: (e) => {
                        let n =
                            a > 0 || e.state.meta.isBlurred
                              ? An(e.state.meta.errors)
                              : null,
                          r = En({
                            intl: d,
                            rechargeThreshold: t.rechargeThreshold,
                            rechargeTarget: e.state.value,
                            pricingInfo: x,
                          });
                        return (0, J.jsx)(xn, {
                          id: k,
                          label: (0, J.jsx)(j, {
                            id: `settings.usage.autoTopUp.target.label`,
                            defaultMessage: `Target balance`,
                            description: `Label for the auto top up target balance input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `250`,
                          disabled: P,
                          hasError: n != null,
                          helperText: (0, J.jsx)(j, {
                            id: `settings.usage.autoTopUp.target.helper`,
                            defaultMessage: `Auto reload brings your credit balance back up to this amount.`,
                            description: `Helper text shown below the target balance input in the auto top up dialog`,
                          }),
                          footerContent:
                            n == null
                              ? C
                                ? (0, J.jsx)(Sn, { intl: d })
                                : r == null
                                  ? null
                                  : (0, J.jsx)(j, {
                                      id: `settings.usage.autoTopUp.target.equivalent`,
                                      defaultMessage: `Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>`,
                                      description: `Message shown below the target balance input with the estimated minimum billing amount`,
                                      values: {
                                        creditCount: r.creditCount,
                                        amount: r.amount,
                                        strong: cn,
                                      },
                                    })
                              : Nn({
                                  fieldError: n,
                                  fieldName: `target`,
                                  intl: d,
                                }),
                          footerTone: n == null ? `secondary` : `error`,
                          ariaLabel: d.formatMessage({
                            id: `settings.usage.autoTopUp.target.ariaLabel`,
                            defaultMessage: `Auto-reload target balance`,
                            description: `Aria label for the auto top up target balance input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (se(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, J.jsx)(`div`, {
                      className: `text-sm leading-5 text-token-text-secondary`,
                      children: (0, J.jsx)(j, {
                        id: `settings.usage.autoTopUp.dialog.description`,
                        defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                        description: `Description shown below the inputs in the auto top up settings dialog`,
                      }),
                    }),
                    m == null
                      ? null
                      : (0, J.jsx)(hn, {
                          saveIntent: m.saveIntent,
                          amount: m.amount,
                          creditCount: m.creditCount,
                        }),
                    F
                      ? (0, J.jsx)(vn, {
                          amount: ee,
                          isManagePaymentPending: z.isPending,
                          onManagePaymentClick: B,
                          onPurchaseCreditClick: (e) => {
                            let t = et(f, `personal`);
                            (e.preventDefault(),
                              Je(u, {
                                audience: `personal`,
                                checkoutKind: `standalone_credit`,
                                entryPoint: `auto_top_up_failure_banner`,
                              }),
                              p({
                                event: e,
                                intent: `purchase`,
                                forceOneTimePurchase: !0,
                                isAutoReloadEnabled: r.isEnabled,
                                isCustomCheckoutEnabled: t,
                                legacyUrl: Un,
                                source: `auto_top_up_failure_banner`,
                              }),
                              l(!1));
                          },
                        })
                      : null,
                  ],
                }),
                (0, J.jsx)(M, {
                  className: `pt-7`,
                  children: (0, J.jsxs)(le, {
                    children: [
                      r.isEnabled
                        ? (0, J.jsx)(_, {
                            color: `outline`,
                            className: Gn,
                            loading: N,
                            disabled: P,
                            onClick: () => {
                              Oe();
                            },
                            children: (0, J.jsx)(j, {
                              id: `settings.usage.autoTopUp.disable`,
                              defaultMessage: `Turn off`,
                              description: `Button label to disable auto top up`,
                            }),
                          })
                        : (0, J.jsx)(_, {
                            color: `outline`,
                            className: Gn,
                            disabled: P,
                            onClick: () => {
                              l(!1);
                            },
                            children: (0, J.jsx)(j, {
                              id: `settings.usage.autoTopUp.cancel`,
                              defaultMessage: `Cancel`,
                              description: `Button label to close the auto top up dialog without saving`,
                            }),
                          }),
                      (0, J.jsx)(_, {
                        color: `primary`,
                        type: `submit`,
                        className: Gn,
                        loading: A,
                        disabled: !o.isSaveEnabled,
                        children: r.isEnabled
                          ? (0, J.jsx)(j, {
                              id: `settings.usage.autoTopUp.save`,
                              defaultMessage: `Save`,
                              description: `Button label to save auto top up settings`,
                            })
                          : (0, J.jsx)(j, {
                              id: `settings.usage.autoTopUp.enable`,
                              defaultMessage: `Turn on`,
                              description: `Button label to enable auto top up`,
                            }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }),
      (t[51] = x),
      (t[52] = i?.balance),
      (t[53] = D),
      (t[54] = E),
      (t[55] = V),
      (t[56] = Ee),
      (t[57] = Oe),
      (t[58] = B),
      (t[59] = F),
      (t[60] = ee),
      (t[61] = d),
      (t[62] = P),
      (t[63] = C),
      (t[64] = N),
      (t[65] = A),
      (t[66] = p),
      (t[67] = l),
      (t[68] = n),
      (t[69] = z.isPending),
      (t[70] = u),
      (t[71] = r),
      (t[72] = f),
      (t[73] = k),
      (t[74] = O),
      (t[75] = H))
    : (H = t[75]);
  let ke;
  return (
    t[76] !== V.Subscribe || t[77] !== H
      ? ((ke = (0, J.jsx)(V.Subscribe, { selector: un, children: H })),
        (t[76] = V.Subscribe),
        (t[77] = H),
        (t[78] = ke))
      : (ke = t[78]),
    ke
  );
}
function cn(e) {
  return (0, J.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function ln(e) {
  e.preventDefault();
}
function un(e) {
  return { values: e.values, submissionAttempts: e.submissionAttempts };
}
function dn(e) {
  let { value: t } = e;
  return On(t);
}
function fn(e) {
  let { value: t } = e;
  return On(t);
}
function pn(e) {
  A({ href: e.url, initiator: `open_in_browser_bridge` });
}
async function mn() {
  return await D.safeGet(`/payments/customer_portal`);
}
function hn(e) {
  let t = (0, q.c)(4),
    { saveIntent: n, amount: r, creditCount: i } = e,
    a;
  return (
    t[0] !== r || t[1] !== i || t[2] !== n
      ? ((a = (0, J.jsx)(Lt, {
          type: `normal`,
          layout: `vertical`,
          content:
            n === `enable`
              ? (0, J.jsx)(j, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.enable`,
                  defaultMessage: `Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.`,
                  description: `Informational banner shown before enabling auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: _n },
                })
              : (0, J.jsx)(j, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.update`,
                  defaultMessage: `Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.`,
                  description: `Informational banner shown before updating auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: gn },
                }),
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function gn(e) {
  return (0, J.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function _n(e) {
  return (0, J.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function vn(e) {
  let t = (0, q.c)(5),
    {
      amount: n,
      isManagePaymentPending: r,
      onManagePaymentClick: i,
      onPurchaseCreditClick: a,
    } = e,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, J.jsx)(Lt, {
          type: `error`,
          layout: `vertical`,
          content:
            n == null
              ? (0, J.jsx)(j, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.generic`,
                  defaultMessage: `The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails without a price estimate`,
                  values: {
                    actionLine: bn,
                    managePayment: (e) =>
                      (0, J.jsx)(`a`, {
                        href: `#`,
                        className: p(
                          `cursor-interaction font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        "aria-disabled": r,
                        onClick: (e) => {
                          (e.preventDefault(), i());
                        },
                        children: e,
                      }),
                    purchaseCredit: (e) =>
                      (0, J.jsx)(`a`, {
                        href: Un,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `cursor-interaction font-medium underline underline-offset-2`,
                        onClick: (e) => {
                          a(e);
                        },
                        children: e,
                      }),
                  },
                })
              : (0, J.jsx)(j, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.amount`,
                  defaultMessage: `The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails and a price estimate is available`,
                  values: {
                    amount: n,
                    actionLine: yn,
                    managePayment: (e) =>
                      (0, J.jsx)(`a`, {
                        href: `#`,
                        className: p(
                          `cursor-interaction font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        "aria-disabled": r,
                        onClick: (e) => {
                          (e.preventDefault(), i());
                        },
                        children: e,
                      }),
                    purchaseCredit: (e) =>
                      (0, J.jsx)(`a`, {
                        href: Un,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `cursor-interaction font-medium underline underline-offset-2`,
                        onClick: (e) => {
                          a(e);
                        },
                        children: e,
                      }),
                  },
                }),
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function yn(e) {
  return (0, J.jsx)(`div`, { className: `mt-1`, children: e });
}
function bn(e) {
  return (0, J.jsx)(`div`, { className: `mt-1`, children: e });
}
function xn(e) {
  let t = (0, q.c)(22),
    {
      id: n,
      label: r,
      value: i,
      placeholder: a,
      disabled: o,
      hasError: s,
      helperText: c,
      footerContent: l,
      footerTone: u,
      ariaLabel: d,
      onChange: f,
      onBlur: m,
    } = e,
    h = u === void 0 ? `secondary` : u,
    g;
  t[0] !== n || t[1] !== r
    ? ((g = (0, J.jsx)(`label`, {
        htmlFor: n,
        className: `text-lg text-token-text-secondary`,
        children: r,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = g))
    : (g = t[2]);
  let _;
  t[3] === c
    ? (_ = t[4])
    : ((_ = c
        ? (0, J.jsx)(`div`, {
            className: `text-sm leading-4 text-token-text-secondary`,
            children: c,
          })
        : null),
      (t[3] = c),
      (t[4] = _));
  let v;
  t[5] !== d ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== n ||
  t[9] !== m ||
  t[10] !== f ||
  t[11] !== a ||
  t[12] !== i
    ? ((v = (0, J.jsx)(Cn, {
        id: n,
        value: i,
        placeholder: a,
        disabled: o,
        hasError: s,
        ariaLabel: d,
        onBlur: m,
        onChange: f,
      })),
      (t[5] = d),
      (t[6] = o),
      (t[7] = s),
      (t[8] = n),
      (t[9] = m),
      (t[10] = f),
      (t[11] = a),
      (t[12] = i),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== l || t[15] !== h
    ? ((y =
        l == null
          ? null
          : (0, J.jsx)(`div`, {
              className: p(
                `text-sm`,
                h === `error`
                  ? `text-token-error-foreground`
                  : `text-token-text-secondary`,
              ),
              children: l,
            })),
      (t[14] = l),
      (t[15] = h),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== g || t[18] !== _ || t[19] !== v || t[20] !== y
      ? ((b = (0, J.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [g, _, v, y],
        })),
        (t[17] = g),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function Sn(e) {
  let t = (0, q.c)(5),
    { intl: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = n.formatMessage({
        id: `settings.usage.autoTopUp.target.equivalent.loading`,
        defaultMessage: `Loading price`,
        description: `Accessible label announced while the auto top up price estimate is loading`,
      })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(S, {
        className: `icon-xxs text-token-description-foreground`,
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, J.jsx)(`span`, {
          role: `status`,
          "aria-label": r,
          className: `inline-flex items-center`,
          children: i,
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function Cn(e) {
  let t = (0, q.c)(12),
    {
      id: n,
      value: r,
      placeholder: i,
      disabled: a,
      hasError: o,
      ariaLabel: s,
      onChange: c,
      onBlur: l,
    } = e,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = p(
        `bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-10 w-full rounded-lg border border-token-border px-3 text-left text-sm tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus`,
        `aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20`,
      )),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === c
    ? (d = t[2])
    : ((d = (e) => {
        c(e.currentTarget.value);
      }),
      (t[1] = c),
      (t[2] = d));
  let f;
  return (
    t[3] !== s ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== n ||
    t[7] !== l ||
    t[8] !== i ||
    t[9] !== d ||
    t[10] !== r
      ? ((f = (0, J.jsx)(`input`, {
          id: n,
          value: r,
          placeholder: i,
          disabled: a,
          inputMode: `numeric`,
          pattern: `[0-9]*`,
          "aria-label": s,
          "aria-invalid": o,
          className: u,
          onChange: d,
          onBlur: l,
        })),
        (t[3] = s),
        (t[4] = a),
        (t[5] = o),
        (t[6] = n),
        (t[7] = l),
        (t[8] = i),
        (t[9] = d),
        (t[10] = r),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function wn({ intl: e, creditDetails: t, pricingInfo: n }) {
  let r = e.formatMessage({
    id: `settings.usage.credit.remaining.unavailable`,
    defaultMessage: `Credit remaining unavailable`,
    description: `Fallback title shown when the remaining credit is unavailable`,
  });
  return t == null
    ? r
    : t.unlimited
      ? e.formatMessage({
          id: `settings.usage.credit.remaining.unlimited`,
          defaultMessage: `Unlimited credit`,
          description: `Title shown when the account has unlimited credit`,
        })
      : t.balance == null || n == null
        ? r
        : (Fe({ intl: e, creditQuantity: Tn(t.balance), pricingInfo: n }) ?? r);
}
function Tn(e) {
  return Math.floor(Number(e ?? 0));
}
function En({
  intl: e,
  rechargeThreshold: t,
  rechargeTarget: n,
  pricingInfo: r,
}) {
  if (r == null) return null;
  let i = Yt({ rechargeThreshold: t, rechargeTarget: n });
  return i == null
    ? null
    : {
        creditCount: i,
        amount: Mt({
          intl: e,
          amount: i * r.amountPerCredit,
          currencyCode: r.currencyCode,
          currencyFractionDigits: r.minorUnitExponent,
        }),
      };
}
function Dn({
  intl: e,
  creditBalance: t,
  rechargeThreshold: n,
  rechargeTarget: r,
  pricingInfo: i,
}) {
  if (i == null) return null;
  let a = Tn(t),
    o = Number(K(n)),
    s = Number(K(r));
  if (a >= o) return null;
  let c = Math.ceil(s - a);
  return c <= 0
    ? null
    : {
        amount: Mt({
          intl: e,
          amount: c * i.amountPerCredit,
          currencyCode: i.currencyCode,
          currencyFractionDigits: i.minorUnitExponent,
        }),
        creditCount: c,
      };
}
function On({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = Gt({ rechargeThreshold: e, rechargeTarget: t });
  if (!(n.rechargeThresholdError == null && n.rechargeTargetError == null))
    return {
      fields: {
        rechargeThreshold: n.rechargeThresholdError ?? void 0,
        rechargeTarget: n.rechargeTargetError ?? void 0,
      },
    };
}
function kn(e) {
  if (e == null) return null;
  for (let t of e) if (jn(t)) return t;
  return null;
}
function An(e) {
  if (e == null) return null;
  for (let t of e) if (Mn(t)) return t;
  return null;
}
function jn(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `below-threshold-minimum`
  );
}
function Mn(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `target-difference-too-small`
  );
}
function Nn(e) {
  if (e.fieldError == null) return null;
  switch (e.fieldName) {
    case `threshold`:
      return Pn(e.fieldError, e.intl);
    case `target`:
      return Fn(e.fieldError, e.intl);
  }
}
function Pn(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.missing`,
        defaultMessage: `Enter a minimum balance (at least 125 credits).`,
        description: `Validation message when the auto top up threshold is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.wholeNumber`,
        defaultMessage: `Minimum balance must be a whole number.`,
        description: `Validation message when the auto top up threshold is not a whole number`,
      });
    case `below-threshold-minimum`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.minimum`,
        defaultMessage: `Set the minimum balance to at least 125 credits.`,
        description: `Validation message when the auto top up threshold is below the minimum allowed value`,
      });
  }
}
function Fn(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.missing`,
        defaultMessage: `Enter a target balance.`,
        description: `Validation message when the auto top up target balance is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.wholeNumber`,
        defaultMessage: `Target balance must be a whole number.`,
        description: `Validation message when the auto top up target balance is not a whole number`,
      });
    case `target-difference-too-small`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.minimumDifference`,
        defaultMessage: `Set the target balance to at least 125 credits above the minimum balance.`,
        description: `Validation message when the auto top up target balance is too close to the minimum balance`,
      });
  }
}
function In(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.error`,
        defaultMessage: `Failed to enable auto reload`,
        description: `Toast shown when enabling auto top up fails`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.error`,
        defaultMessage: `Failed to update auto reload`,
        description: `Toast shown when updating auto top up fails`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.error`,
        defaultMessage: `Failed to disable auto reload`,
        description: `Toast shown when disabling auto top up fails`,
      });
    case `none`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.save.error`,
        defaultMessage: `Failed to save auto reload settings`,
        description: `Fallback toast shown when saving auto top up settings fails`,
      });
  }
}
function Ln(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.success`,
        defaultMessage: `Enabled auto reload`,
        description: `Toast shown when enabling auto top up succeeds`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.success`,
        defaultMessage: `Updated auto reload settings`,
        description: `Toast shown when updating auto top up succeeds`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.success`,
        defaultMessage: `Disabled auto reload`,
        description: `Toast shown when disabling auto top up succeeds`,
      });
  }
}
function Rn(e) {
  return {
    recharge_threshold: K(e.rechargeThreshold),
    recharge_target: K(e.rechargeTarget),
  };
}
var q,
  zn,
  J,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn = e(() => {
    ((q = d()),
      Bt(),
      we(),
      _e(),
      k(),
      n(),
      (zn = t(m(), 1)),
      B(),
      It(),
      v(),
      r(),
      te(),
      pe(),
      u(),
      ee(),
      Ne(),
      Le(),
      qe(),
      Pt(),
      Dt(),
      F(),
      Rt(),
      ct(),
      ve(),
      At(),
      O(),
      $t(),
      (J = R()),
      (Bn = { duration: 3 }),
      (Vn = `125`),
      (Hn = `250`),
      (Un = `${se}/settings/usage?credit_modal=true`),
      (Wn = `https://help.openai.com/en/articles/20001106-codex-rate-card`),
      (Gn = `min-w-[88px] justify-center`));
  });
function qn(e) {
  let t = (0, Qn.c)(35),
    { plan: n } = e,
    r = w(be),
    i = Te(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { logExposure: !0 }), (t[0] = a))
    : (a = t[0]);
  let o = _t(a),
    s = yt(),
    c = bt(n),
    l = c != null,
    u;
  t[1] === l ? (u = t[2]) : ((u = { enabled: l }), (t[1] = l), (t[2] = u));
  let { data: d } = St(u),
    f = c != null,
    p;
  t[3] !== d || t[4] !== f
    ? ((p = { billingCurrency: d, enabled: f }),
      (t[3] = d),
      (t[4] = f),
      (t[5] = p))
    : (p = t[5]);
  let { data: m } = wt(p);
  if (c == null) return null;
  let h =
      m == null
        ? null
        : Wt({
            intl: i,
            amount: m.monthlyAmounts[c.pricePlan],
            currencyCode: m.currencyCode,
            minorUnitExponent: m.minorUnitExponent,
          }),
    g = G,
    v;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(G.Header, {
        title: (0, Y.jsx)(j, {
          id: `settings.usage.plan.title`,
          defaultMessage: `Your plan`,
          description: `Title for the current plan section in usage settings`,
        }),
      })),
      (t[6] = v))
    : (v = t[6]);
  let y = G,
    b = U,
    x = W,
    S = Xn(c.displayPlan),
    C;
  t[7] === h
    ? (C = t[8])
    : ((C =
        h == null
          ? null
          : (0, Y.jsx)(j, {
              id: `settings.usage.plan.monthlyPrice`,
              defaultMessage: `{price}/mo`,
              description: `Localized monthly price below the current plan name`,
              values: { price: h },
            })),
      (t[7] = h),
      (t[8] = C));
  let T = c.cta === `upgrade` ? `primary` : `outline`,
    E;
  t[9] !== o || t[10] !== s || t[11] !== r || t[12] !== c.pricePlan
    ? ((E = (e) => {
        s({
          scope: r,
          currentPlan: c.pricePlan,
          event: e,
          getPricingUrl: o,
          source: `usage_settings_plan_row`,
        });
      }),
      (t[9] = o),
      (t[10] = s),
      (t[11] = r),
      (t[12] = c.pricePlan),
      (t[13] = E))
    : (E = t[13]);
  let D;
  t[14] === c.cta
    ? (D = t[15])
    : ((D =
        c.cta === `upgrade`
          ? (0, Y.jsx)(j, {
              id: `settings.usage.plan.upgrade`,
              defaultMessage: `Upgrade plan`,
              description: `CTA to open the upgrade plan dialog`,
            })
          : (0, Y.jsx)(j, {
              id: `settings.usage.plan.view`,
              defaultMessage: `View plans`,
              description: `CTA to open the plan selection dialog`,
            })),
      (t[14] = c.cta),
      (t[15] = D));
  let O;
  t[16] !== T || t[17] !== E || t[18] !== D
    ? ((O = (0, Y.jsx)(_, {
        color: T,
        size: `toolbar`,
        onClick: E,
        children: D,
      })),
      (t[16] = T),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== x || t[21] !== C || t[22] !== O || t[23] !== S
    ? ((k = (0, Y.jsx)(x, {
        className: `gap-6`,
        label: S,
        description: C,
        control: O,
      })),
      (t[20] = x),
      (t[21] = C),
      (t[22] = O),
      (t[23] = S),
      (t[24] = k))
    : (k = t[24]);
  let A;
  t[25] !== b || t[26] !== k
    ? ((A = (0, Y.jsx)(b, { children: k })),
      (t[25] = b),
      (t[26] = k),
      (t[27] = A))
    : (A = t[27]);
  let M;
  t[28] !== A || t[29] !== y.Content
    ? ((M = (0, Y.jsx)(y.Content, { children: A })),
      (t[28] = A),
      (t[29] = y.Content),
      (t[30] = M))
    : (M = t[30]);
  let N;
  return (
    t[31] !== g || t[32] !== M || t[33] !== v
      ? ((N = (0, Y.jsxs)(g, { children: [v, M] })),
        (t[31] = g),
        (t[32] = M),
        (t[33] = v),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
function Jn(e) {
  let t = (0, Qn.c)(9),
    { plan: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = dt(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === r ? (i = t[3]) : ((i = { enabled: r }), (t[2] = r), (t[3] = i));
  let { data: a } = jt(i);
  if (!dt(n)) return null;
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(G.Header, {
        title: (0, Y.jsx)(j, {
          id: `settings.usage.cancelPlan.title`,
          defaultMessage: `Cancel plan`,
          description: `Title for the cancel plan section in usage settings`,
        }),
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === a ? (s = t[6]) : ((s = ft(a)), (t[5] = a), (t[6] = s));
  let c;
  return (
    t[7] === s
      ? (c = t[8])
      : ((c = (0, Y.jsxs)(G, {
          children: [
            o,
            (0, Y.jsx)(G.Content, {
              className: `text-sm text-token-text-secondary`,
              children: (0, Y.jsx)(`p`, {
                children: (0, Y.jsx)(Yn, { platform: s }),
              }),
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = c)),
    c
  );
}
function Yn(e) {
  let t = (0, Qn.c)(8),
    { platform: n } = e,
    r = n === `ios` ? ut : n === `android` ? vt : pt,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (e) =>
        (0, Y.jsx)(`a`, {
          className: `cursor-interaction text-token-text-link-foreground`,
          href: r,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: (e) => Zn(e, r),
          children: e,
        })),
      (t[0] = r),
      (t[1] = i));
  let a = i;
  switch (n) {
    case null: {
      let e;
      return (
        t[2] === a
          ? (e = t[3])
          : ((e = (0, Y.jsx)(j, {
              id: `settings.usage.cancelPlan.webDescription`,
              defaultMessage: `Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan`,
              description: `Description shown when a ChatGPT-managed subscription can be canceled through web billing settings`,
              values: { cancel: a },
            })),
            (t[2] = a),
            (t[3] = e)),
        e
      );
    }
    case `ios`: {
      let e;
      return (
        t[4] === a
          ? (e = t[5])
          : ((e = (0, Y.jsx)(j, {
              id: `settings.usage.cancelPlan.appleDescription`,
              defaultMessage: `Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>`,
              description: `Description shown when an Apple-managed subscription must be canceled through iOS`,
              values: { cancel: a },
            })),
            (t[4] = a),
            (t[5] = e)),
        e
      );
    }
    case `android`: {
      let e;
      return (
        t[6] === a
          ? (e = t[7])
          : ((e = (0, Y.jsx)(j, {
              id: `settings.usage.cancelPlan.googlePlayDescription`,
              defaultMessage: `Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>`,
              description: `Description shown when a Google Play-managed subscription must be canceled through Android`,
              values: { cancel: a },
            })),
            (t[6] = a),
            (t[7] = e)),
        e
      );
    }
  }
}
function Xn(e) {
  switch (e) {
    case `free`:
      return (0, Y.jsx)(j, {
        id: `settings.usage.plan.free`,
        defaultMessage: `Free plan`,
        description: `Name of the Free plan in usage settings`,
      });
    case `go`:
      return (0, Y.jsx)(j, {
        id: `settings.usage.plan.go`,
        defaultMessage: `Go plan`,
        description: `Name of the Go plan in usage settings`,
      });
    case `plus`:
      return (0, Y.jsx)(j, {
        id: `settings.usage.plan.plus`,
        defaultMessage: `Plus plan`,
        description: `Name of the Plus plan in usage settings`,
      });
    case `pro`:
      return (0, Y.jsx)(j, {
        id: `settings.usage.plan.pro`,
        defaultMessage: `Pro plan`,
        description: `Name of the Pro plan in usage settings`,
      });
  }
}
function Zn(e, t) {
  L({ event: e, href: t, initiator: `open_in_browser_bridge` });
}
var Qn,
  Y,
  $n = e(() => {
    ((Qn = d()),
      k(),
      B(),
      v(),
      pe(),
      ht(),
      Dt(),
      F(),
      Rt(),
      lt(),
      ct(),
      gt(),
      Ut(),
      mt(),
      (Y = R()));
  });
function er() {
  let e = (0, ir.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          queryKey: ar,
          queryFn: tr,
          staleTime: ae.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (e[0] = t))
      : (t = e[0]),
    E(t)
  );
}
function tr() {
  return D.safeGet(`/wham/usage/daily-token-usage-breakdown`);
}
function nr(e) {
  let t = (0, ir.c)(2),
    { enabled: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = {
          queryKey: or,
          queryFn: rr,
          enabled: n,
          staleTime: ae.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (t[0] = n),
        (t[1] = r)),
    E(r)
  );
}
function rr() {
  return D.safeGet(`/wham/usage/credit-usage-events`);
}
var ir,
  ar,
  or,
  sr = e(() => {
    ((ir = d()),
      we(),
      oe(),
      O(),
      (ar = [`usage-settings`, `daily-usage-breakdown`]),
      (or = [`usage-settings`, `credit-usage-events`]));
  });
function cr(e) {
  let t = (0, pr.c)(30),
    { showCreditHistory: n } = e,
    r = er(),
    i;
  t[0] === n ? (i = t[1]) : ((i = { enabled: n }), (t[0] = n), (t[1] = i));
  let a = nr(i),
    [o, s] = (0, mr.useState)(0),
    c;
  t[2] === a.data?.data
    ? (c = t[3])
    : ((c = a.data?.data ?? []), (t[2] = a.data?.data), (t[3] = c));
  let l = c,
    u = Math.max(1, Math.ceil(l.length / hr)),
    d = Math.min(o, u - 1),
    f;
  t[4] !== a.data?.data || t[5] !== d
    ? ((f = a.data?.data.slice(d * hr, (d + 1) * hr)),
      (t[4] = a.data?.data),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(G.Header, {
        title: (0, X.jsx)(j, {
          id: `settings.usage.daily.title`,
          defaultMessage: `Daily usage`,
          description: `Title for daily usage in usage settings`,
        }),
        subtitle: (0, X.jsx)(j, {
          id: `settings.usage.daily.subtitle`,
          defaultMessage: `Usage data is approximate and may be delayed by up to 6 hours`,
          description: `Description for daily usage in usage settings`,
        }),
      })),
      (t[7] = m))
    : (m = t[7]);
  let h = r.data?.data,
    g,
    v;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(j, {
        id: `settings.usage.daily.empty`,
        defaultMessage: `No daily usage recorded yet`,
        description: `Empty state for daily usage`,
      })),
      (v = (0, X.jsx)(j, {
        id: `settings.usage.daily.error`,
        defaultMessage: `Could not load daily usage`,
        description: `Error state for daily usage`,
      })),
      (t[8] = g),
      (t[9] = v))
    : ((g = t[8]), (v = t[9]));
  let y;
  t[10] === r
    ? (y = t[11])
    : ((y = () => {
        r.refetch();
      }),
      (t[10] = r),
      (t[11] = y));
  let b;
  t[12] === r.data?.units
    ? (b = t[13])
    : ((b = (e) =>
        gr.flatMap((t) => {
          let n = e.product_surface_usage_values[t];
          return n == null
            ? []
            : [
                (0, X.jsx)(
                  W,
                  {
                    label: (0, X.jsx)(dr, { date: e.date }),
                    description: (0, X.jsx)(j, { ..._r[t] }),
                    control: (0, X.jsx)(fr, { units: r.data?.units, value: n }),
                  },
                  `${e.date}-${t}`,
                ),
              ];
        })),
      (t[12] = r.data?.units),
      (t[13] = b));
  let x;
  t[14] !== r.isError ||
  t[15] !== r.isLoading ||
  t[16] !== h ||
  t[17] !== y ||
  t[18] !== b
    ? ((x = (0, X.jsxs)(G, {
        children: [
          m,
          (0, X.jsx)(G.Content, {
            children: (0, X.jsx)(U, {
              children: (0, X.jsx)(ur, {
                data: h,
                emptyMessage: g,
                errorMessage: v,
                isError: r.isError,
                isLoading: r.isLoading,
                onRetry: y,
                renderRow: b,
              }),
            }),
          }),
        ],
      })),
      (t[14] = r.isError),
      (t[15] = r.isLoading),
      (t[16] = h),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== l.length ||
  t[21] !== u ||
  t[22] !== a ||
  t[23] !== d ||
  t[24] !== n ||
  t[25] !== p
    ? ((S = n
        ? (0, X.jsxs)(G, {
            children: [
              (0, X.jsx)(G.Header, {
                title: (0, X.jsx)(j, {
                  id: `settings.usage.creditHistory.title`,
                  defaultMessage: `Credit usage history`,
                  description: `Title for credit usage history`,
                }),
              }),
              (0, X.jsx)(G.Content, {
                children: (0, X.jsxs)(U, {
                  children: [
                    (0, X.jsx)(ur, {
                      data: p,
                      emptyMessage: (0, X.jsx)(j, {
                        id: `settings.usage.creditHistory.empty`,
                        defaultMessage: `No credit usage recorded yet`,
                        description: `Empty state for credit usage history`,
                      }),
                      errorMessage: (0, X.jsx)(j, {
                        id: `settings.usage.creditHistory.error`,
                        defaultMessage: `Could not load credit usage history`,
                        description: `Error state for credit usage history`,
                      }),
                      isError: a.isError,
                      isLoading: a.isLoading,
                      onRetry: () => {
                        a.refetch();
                      },
                      renderRow: lr,
                    }),
                    l.length > hr
                      ? (0, X.jsx)(W, {
                          label: (0, X.jsx)(j, {
                            id: `settings.usage.creditHistory.range`,
                            defaultMessage: `{from}-{to} of {total} usage events`,
                            description: `Pagination summary for credit usage history`,
                            values: {
                              from: d * hr + 1,
                              to: Math.min((d + 1) * hr, l.length),
                              total: l.length,
                            },
                          }),
                          control: (0, X.jsxs)(`div`, {
                            className: `flex gap-2`,
                            children: [
                              (0, X.jsx)(_, {
                                color: `secondary`,
                                disabled: d === 0,
                                size: `toolbar`,
                                onClick: () => {
                                  s(d - 1);
                                },
                                children: (0, X.jsx)(j, {
                                  id: `settings.usage.creditHistory.previous`,
                                  defaultMessage: `Previous`,
                                  description: `Previous credit usage history page button`,
                                }),
                              }),
                              (0, X.jsx)(_, {
                                color: `secondary`,
                                disabled: d === u - 1,
                                size: `toolbar`,
                                onClick: () => {
                                  s(d + 1);
                                },
                                children: (0, X.jsx)(j, {
                                  id: `settings.usage.creditHistory.next`,
                                  defaultMessage: `Next`,
                                  description: `Next credit usage history page button`,
                                }),
                              }),
                            ],
                          }),
                        })
                      : null,
                  ],
                }),
              }),
            ],
          })
        : null),
      (t[20] = l.length),
      (t[21] = u),
      (t[22] = a),
      (t[23] = d),
      (t[24] = n),
      (t[25] = p),
      (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== x || t[28] !== S
      ? ((C = (0, X.jsxs)(X.Fragment, { children: [x, S] })),
        (t[27] = x),
        (t[28] = S),
        (t[29] = C))
      : (C = t[29]),
    C
  );
}
function lr(e, t) {
  return (0, X.jsx)(
    W,
    {
      label: (0, X.jsx)(dr, { date: e.date }),
      description: (0, X.jsx)(j, { ..._r[e.product_surface] }),
      control: (0, X.jsx)(fr, { units: `credits`, value: e.credit_amount }),
    },
    `${e.usage_id ?? `usage`}-${e.date}-${t}`,
  );
}
function ur(e) {
  let t = (0, pr.c)(14),
    {
      data: n,
      emptyMessage: r,
      errorMessage: i,
      isError: a,
      isLoading: o,
      onRetry: s,
      renderRow: c,
    } = e;
  if (o && n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(Ht, {
            children: (0, X.jsx)(j, {
              id: `settings.usage.history.loading`,
              defaultMessage: `Loading usage history…`,
              description: `Loading state for usage history`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (a && n == null) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(j, {
          id: `settings.usage.history.retry`,
          defaultMessage: `Retry`,
          description: `Retry usage history button`,
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === s
      ? (n = t[3])
      : ((n = (0, X.jsx)(_, {
          color: `secondary`,
          size: `toolbar`,
          onClick: s,
          children: e,
        })),
        (t[2] = s),
        (t[3] = n));
    let r;
    return (
      t[4] !== i || t[5] !== n
        ? ((r = (0, X.jsx)(W, { label: i, control: n })),
          (t[4] = i),
          (t[5] = n),
          (t[6] = r))
        : (r = t[6]),
      r
    );
  }
  if (n == null || n.length === 0) {
    let e;
    return (
      t[7] === r
        ? (e = t[8])
        : ((e = (0, X.jsx)(W, { label: r, control: null })),
          (t[7] = r),
          (t[8] = e)),
      e
    );
  }
  let l;
  t[9] !== n || t[10] !== c
    ? ((l = n.map(c)), (t[9] = n), (t[10] = c), (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] === l
      ? (u = t[13])
      : ((u = (0, X.jsx)(X.Fragment, { children: l })),
        (t[12] = l),
        (t[13] = u)),
    u
  );
}
function dr(e) {
  let t = (0, pr.c)(4),
    { date: n } = e,
    r = `${n}T00:00:00`,
    i;
  t[0] === r ? (i = t[1]) : ((i = new Date(r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, X.jsx)(fe, {
          value: i,
          month: `short`,
          day: `numeric`,
          year: `numeric`,
        })),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
function fr(e) {
  let t = (0, pr.c)(3),
    { units: n, value: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i =
          n === `credits`
            ? (0, X.jsx)(j, {
                id: `settings.usage.credits.value`,
                defaultMessage: `{value, number} {value, plural, one {credit} other {credits}}`,
                description: `Credit value in usage settings`,
                values: { value: r },
              })
            : (0, X.jsx)(I, {
                value: r / 100,
                style: `percent`,
                maximumFractionDigits: 0,
              })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var pr,
  mr,
  X,
  hr,
  gr,
  _r,
  vr = e(() => {
    ((pr = d()),
      (mr = t(m(), 1)),
      B(),
      v(),
      sr(),
      Rt(),
      Vt(),
      lt(),
      ct(),
      (X = R()),
      (hr = 10),
      (gr = [
        `web`,
        `mobile`,
        `cli`,
        `vscode`,
        `jetbrains`,
        `github`,
        `github_code_review`,
        `slack`,
        `linear`,
        `sdk`,
        `exec`,
        `desktop_app`,
        `agent_identity`,
        `unknown`,
        `other`,
      ]),
      (_r = ge({
        web: {
          id: `settings.usage.surface.web`,
          defaultMessage: `Cloud`,
          description: `Cloud usage surface`,
        },
        mobile: {
          id: `settings.usage.surface.mobile`,
          defaultMessage: `Mobile`,
          description: `Mobile usage surface`,
        },
        cli: {
          id: `settings.usage.surface.cli`,
          defaultMessage: `CLI`,
          description: `CLI usage surface`,
        },
        vscode: {
          id: `settings.usage.surface.vscode`,
          defaultMessage: `Extension`,
          description: `VS Code extension usage surface`,
        },
        jetbrains: {
          id: `settings.usage.surface.jetbrains`,
          defaultMessage: `JetBrains`,
          description: `JetBrains usage surface`,
        },
        github: {
          id: `settings.usage.surface.github`,
          defaultMessage: `GitHub`,
          description: `GitHub usage surface`,
        },
        github_code_review: {
          id: `settings.usage.surface.githubCodeReview`,
          defaultMessage: `GitHub code review`,
          description: `GitHub code review usage surface`,
        },
        slack: {
          id: `settings.usage.surface.slack`,
          defaultMessage: `Slack`,
          description: `Slack usage surface`,
        },
        linear: {
          id: `settings.usage.surface.linear`,
          defaultMessage: `Linear`,
          description: `Linear usage surface`,
        },
        sdk: {
          id: `settings.usage.surface.sdk`,
          defaultMessage: `SDK`,
          description: `SDK usage surface`,
        },
        exec: {
          id: `settings.usage.surface.exec`,
          defaultMessage: `Exec`,
          description: `Exec usage surface`,
        },
        desktop_app: {
          id: `settings.usage.surface.desktopApp`,
          defaultMessage: `Desktop app`,
          description: `Desktop app usage surface`,
        },
        agent_identity: {
          id: `settings.usage.surface.agentIdentity`,
          defaultMessage: `Access tokens`,
          description: `Access token usage surface`,
        },
        unknown: {
          id: `settings.usage.surface.unknown`,
          defaultMessage: `Uncategorized`,
          description: `Unknown usage surface`,
        },
        other: {
          id: `settings.usage.surface.other`,
          defaultMessage: `Other`,
          description: `Other usage surface`,
        },
      })));
  });
function yr(e) {
  let t = (0, br.c)(3),
    { headingRef: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, xr.jsx)(j, {
        id: `settings.usage.resets.title`,
        defaultMessage: `Usage limit resets`,
        description: `Title for the Codex usage limit resets section in settings`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, xr.jsx)(`span`, { ref: n, tabIndex: -1, children: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var br,
  xr,
  Sr = e(() => {
    ((br = d()), B(), (xr = R()));
  });
function Cr(e) {
  let t = (0, wr.c)(30),
    {
      activeCreditId: n,
      credit: r,
      isConfirming: i,
      isResetting: a,
      onUseReset: o,
    } = e,
    s = Te(),
    c = (0, Tr.useId)(),
    l = (0, Tr.useId)(),
    u = (0, Tr.useId)(),
    d = r?.id,
    f;
  t[0] !== r || t[1] !== s
    ? ((f =
        r?.expires_at == null
          ? null
          : s.formatDate(r.expires_at, { day: `numeric`, month: `numeric` })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] === r?.title
    ? (m = t[4])
    : ((m =
        r?.title?.trim() ||
        (0, Er.jsx)(j, {
          id: `settings.usage.resets.fallbackTitle`,
          defaultMessage: `Usage reset`,
          description: `Fallback title for a Codex usage limit reset in settings`,
        })),
      (t[3] = r?.title),
      (t[4] = m));
  let h;
  t[5] !== l || t[6] !== m
    ? ((h = (0, Er.jsx)(`span`, { id: l, children: m })),
      (t[5] = l),
      (t[6] = m),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== u || t[9] !== p
    ? ((g =
        p == null
          ? null
          : (0, Er.jsx)(`span`, {
              id: u,
              children: (0, Er.jsx)(j, {
                id: `settings.usage.resets.expires`,
                defaultMessage: `Expires {date}`,
                description: `Expiration date for a Codex usage limit reset in settings`,
                values: { date: p },
              }),
            })),
      (t[8] = u),
      (t[9] = p),
      (t[10] = g))
    : (g = t[10]);
  let v = p == null ? void 0 : u,
    y = `${c} ${l}`,
    b = n === (d ?? `automatic`),
    x;
  t[11] !== d || t[12] !== o
    ? ((x = () => {
        o(d);
      }),
      (t[11] = d),
      (t[12] = o),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] === i
    ? (S = t[15])
    : ((S = i
        ? (0, Er.jsx)(j, {
            id: `settings.usage.resets.confirmReset`,
            defaultMessage: `Confirm`,
            description: `Button label confirming the redemption of a Codex usage limit reset from settings`,
          })
        : (0, Er.jsx)(j, {
            id: `settings.usage.resets.useReset`,
            defaultMessage: `Use reset`,
            description: `Button label for redeeming a Codex usage limit reset from settings`,
          })),
      (t[14] = i),
      (t[15] = S));
  let C;
  t[16] !== c || t[17] !== S
    ? ((C = (0, Er.jsx)(`span`, { id: c, children: S })),
      (t[16] = c),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== a ||
  t[20] !== C ||
  t[21] !== v ||
  t[22] !== y ||
  t[23] !== b ||
  t[24] !== x
    ? ((w = (0, Er.jsx)(_, {
        "aria-describedby": v,
        "aria-labelledby": y,
        className: `rounded-full`,
        color: `primary`,
        disabled: a,
        loading: b,
        onClick: x,
        size: `toolbar`,
        children: C,
      })),
      (t[19] = a),
      (t[20] = C),
      (t[21] = v),
      (t[22] = y),
      (t[23] = b),
      (t[24] = x),
      (t[25] = w))
    : (w = t[25]);
  let T;
  return (
    t[26] !== w || t[27] !== h || t[28] !== g
      ? ((T = (0, Er.jsx)(W, { label: h, description: g, control: w })),
        (t[26] = w),
        (t[27] = h),
        (t[28] = g),
        (t[29] = T))
      : (T = t[29]),
    T
  );
}
var wr,
  Tr,
  Er,
  Dr = e(() => {
    ((wr = d()), (Tr = t(m(), 1)), B(), v(), lt(), (Er = R()));
  });
function Or(e) {
  let t = (0, kr.c)(22),
    {
      activeCreditId: n,
      credits: r,
      isResetFillActive: i,
      isResetting: a,
      onUseReset: o,
      retryCreditId: s,
    } = e,
    [c, l] = (0, Ar.useState)(null),
    u;
  t[0] !== c || t[1] !== o
    ? ((u = async (e) => {
        let t = e ?? `automatic`;
        if (c !== t) {
          l(t);
          return;
        }
        (l(null), await o(e));
      }),
      (t[0] = c),
      (t[1] = o),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] === r
    ? (f = t[4])
    : ((f = r.length === 0 ? [null] : r), (t[3] = r), (t[4] = f));
  let p;
  if (
    t[5] !== n ||
    t[6] !== c ||
    t[7] !== d ||
    t[8] !== i ||
    t[9] !== a ||
    t[10] !== s ||
    t[11] !== f
  ) {
    let e;
    (t[13] !== n ||
    t[14] !== c ||
    t[15] !== d ||
    t[16] !== i ||
    t[17] !== a ||
    t[18] !== s
      ? ((e = (e) => {
          let t = e?.id ?? `automatic`;
          return (0, jr.jsx)(
            Cr,
            {
              activeCreditId: n,
              credit: e,
              isConfirming: c === t,
              isResetting: i || a || (s != null && s !== t),
              onUseReset: d,
            },
            t,
          );
        }),
        (t[13] = n),
        (t[14] = c),
        (t[15] = d),
        (t[16] = i),
        (t[17] = a),
        (t[18] = s),
        (t[19] = e))
      : (e = t[19]),
      (p = f.map(e)),
      (t[5] = n),
      (t[6] = c),
      (t[7] = d),
      (t[8] = i),
      (t[9] = a),
      (t[10] = s),
      (t[11] = f),
      (t[12] = p));
  } else p = t[12];
  let m;
  return (
    t[20] === p
      ? (m = t[21])
      : ((m = (0, jr.jsx)(jr.Fragment, { children: p })),
        (t[20] = p),
        (t[21] = m)),
    m
  );
}
var kr,
  Ar,
  jr,
  Mr = e(() => {
    ((kr = d()), (Ar = t(m(), 1)), Dr(), (jr = R()));
  });
function Nr(e) {
  let t = (0, Fr.c)(31),
    {
      isResetFillActive: n,
      onResetAttemptCancel: r,
      onResetAttemptStart: i,
      onResetComplete: a,
    } = e,
    s = w(be),
    c = Te(),
    u = (0, Ir.useRef)(null),
    [d] = (0, Ir.useState)(Ge),
    [f, p] = (0, Ir.useState)(null),
    { data: m, error: g, isPending: v, refetch: y } = h(),
    b = l(),
    x;
  t[0] === m?.credits
    ? (x = t[1])
    : ((x = m?.credits.filter(Pr)), (t[0] = m?.credits), (t[1] = x));
  let S = x,
    C = m?.available_count ?? 0,
    E = f?.credits ?? S,
    D = f?.availableCount ?? C,
    O = b.isPending ? (b.variables?.creditId ?? `automatic`) : null,
    k;
  t[2] !== b.mutateAsync ||
  t[3] !== c ||
  t[4] !== r ||
  t[5] !== i ||
  t[6] !== a ||
  t[7] !== f ||
  t[8] !== d ||
  t[9] !== s ||
  t[10] !== D ||
  t[11] !== E
    ? ((k = async (e) => {
        let t = e ?? `automatic`;
        if ((f != null && f.creditId !== t) || E == null) return;
        f ?? i?.();
        let n = await d.redeem({
          availableCount: D,
          consume: b.mutateAsync,
          creditId: e,
        });
        switch (n.status) {
          case `in_flight`:
            return;
          case `transport_error`:
            (p({
              availableCount: D,
              creditId: n.creditId ?? `automatic`,
              credits: E,
            }),
              s.get(T).danger(
                c.formatMessage({
                  id: `codex.rateLimitResetModal.error`,
                  defaultMessage: `Couldn’t reset usage. Please try again`,
                  description: `Error shown when resetting Codex usage fails`,
                }),
              ));
            return;
          case `rejected`:
            (p(null), r?.(), s.get(T).danger(Ie(n.code, c)));
            return;
          case `reset`: {
            p(null);
            let e = Math.max(n.availableCountBefore - 1, 0);
            (P(s, o, {
              availableCountBefore: n.availableCountBefore,
              componentType: `settings`,
              redemptionMethod:
                n.creditId == null ? `automatic` : `selected_credit`,
              remainingCount: e,
            }),
              s.get(T).success(
                c.formatMessage({
                  id: `settings.usage.resets.success`,
                  defaultMessage: `Usage limits reset`,
                  description: `Success toast shown after redeeming a Codex usage reset from settings`,
                }),
              ),
              a?.(),
              u.current?.focus());
          }
        }
      }),
      (t[2] = b.mutateAsync),
      (t[3] = c),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a),
      (t[7] = f),
      (t[8] = d),
      (t[9] = s),
      (t[10] = D),
      (t[11] = E),
      (t[12] = k))
    : (k = t[12]);
  let A = k,
    M;
  if (f == null && v && m == null) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(Ht, {
          children: (0, Z.jsx)(j, {
            id: `settings.usage.resets.loading`,
            defaultMessage: `Loading usage limit resets…`,
            description: `Loading state for Codex usage limit resets in settings`,
          }),
        })),
        (t[13] = e))
      : (e = t[13]),
      (M = e));
  } else if (f == null && g != null && m == null) {
    let e;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(j, {
          id: `settings.usage.resets.loadError`,
          defaultMessage: `Couldn’t load usage limit resets`,
          description: `Error shown when Codex usage limit resets cannot be loaded in settings`,
        })),
        (t[14] = e))
      : (e = t[14]);
    let n;
    t[15] === y
      ? (n = t[16])
      : ((n = () => {
          y();
        }),
        (t[15] = y),
        (t[16] = n));
    let r;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(j, {
          id: `settings.usage.resets.retry`,
          defaultMessage: `Retry`,
          description: `Button label for retrying Codex usage reset loading in settings`,
        })),
        (t[17] = r))
      : (r = t[17]);
    let i;
    (t[18] === n
      ? (i = t[19])
      : ((i = (0, Z.jsx)(W, {
          label: e,
          control: (0, Z.jsx)(_, {
            color: `secondary`,
            onClick: n,
            size: `toolbar`,
            children: r,
          }),
        })),
        (t[18] = n),
        (t[19] = i)),
      (M = i));
  } else if (E == null || (E.length === 0 && D === 0)) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(Oe, {
          layout: `settings-row`,
          children: (0, Z.jsx)(j, {
            id: `settings.usage.resets.empty`,
            defaultMessage: `No resets available`,
            description: `Empty state when no Codex usage limit resets are available`,
          }),
        })),
        (t[20] = e))
      : (e = t[20]),
      (M = e));
  } else {
    let e = f?.creditId ?? null,
      r;
    (t[21] !== O ||
    t[22] !== b.isPending ||
    t[23] !== A ||
    t[24] !== n ||
    t[25] !== e ||
    t[26] !== E
      ? ((r = (0, Z.jsx)(Or, {
          activeCreditId: O,
          credits: E,
          isResetFillActive: n,
          isResetting: b.isPending,
          onUseReset: A,
          retryCreditId: e,
        })),
        (t[21] = O),
        (t[22] = b.isPending),
        (t[23] = A),
        (t[24] = n),
        (t[25] = e),
        (t[26] = E),
        (t[27] = r))
      : (r = t[27]),
      (M = r));
  }
  let N;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(G.Header, { title: (0, Z.jsx)(yr, { headingRef: u }) })),
      (t[28] = N))
    : (N = t[28]);
  let ee;
  return (
    t[29] === M
      ? (ee = t[30])
      : ((ee = (0, Z.jsxs)(G, {
          children: [
            N,
            (0, Z.jsx)(G.Content, { children: (0, Z.jsx)(U, { children: M }) }),
          ],
        })),
        (t[29] = M),
        (t[30] = ee)),
    ee
  );
}
function Pr(e) {
  return e.status === `available`;
}
var Fr,
  Ir,
  Z,
  Lr = e(() => {
    ((Fr = d()),
      b(),
      k(),
      (Ir = t(m(), 1)),
      B(),
      a(),
      v(),
      De(),
      ee(),
      V(),
      Ae(),
      F(),
      Rt(),
      Vt(),
      lt(),
      ct(),
      Sr(),
      Mr(),
      (Z = R()));
  });
function Rr(e) {
  let t = (0, zr.c)(5),
    {
      isResetFillActive: n,
      onResetAttemptCancel: r,
      onResetAttemptStart: i,
      onResetComplete: a,
    } = e;
  if (!N(`85924660`)) return null;
  let o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, Br.jsx)(Nr, {
          isResetFillActive: n,
          onResetAttemptCancel: r,
          onResetAttemptStart: i,
          onResetComplete: a,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var zr,
  Br,
  Vr = e(() => {
    ((zr = d()), ve(), Lr(), (Br = R()));
  });
function Hr(e) {
  let t = (0, li.c)(18),
    {
      isResetFillActive: n,
      rateLimitStatus: r,
      resetFillAnimation: i,
      resetFillRateLimitStatus: a,
      showEnterpriseMonthlyUsageLimit: o,
      canRequestEnterpriseMonthlyUsageLimit: s,
      workspaceRequestPolicy: c,
      workspaceMonthlyUsage: l,
      workspaceAdminRequests: u,
      isWorkspaceAdminRequestsLoading: d,
      isSavingWorkspaceAdminRequest: f,
      saveWorkspaceAdminRequest: p,
    } = e,
    m = n === void 0 ? !1 : n,
    h = o === void 0 ? !1 : o,
    g = s === void 0 ? !1 : s,
    v = l === void 0 ? null : l,
    y = u === void 0 ? null : u,
    b = d === void 0 ? !1 : d,
    x = f === void 0 ? !1 : f,
    S = m && a != null ? a : r,
    C,
    w,
    T;
  if (
    t[0] !== g ||
    t[1] !== m ||
    t[2] !== x ||
    t[3] !== b ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== p ||
    t[7] !== h ||
    t[8] !== S ||
    t[9] !== y ||
    t[10] !== v ||
    t[11] !== c
  ) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = Ve(S),
        t = Xr(e, null),
        n = m && a != null ? Yr(Xr(Ve(a), null)) : null,
        r = h ? $r(v, S) : Qr({ rateLimitStatus: S, coreUsageLimitRows: t }),
        o = r == null ? t : t.filter(Wr),
        s = Xr(e, di),
        l = h && g,
        u = c?.kind === `custom` ? c.request_url : null,
        d = h && r == null;
      if (r == null && o.length === 0 && s.length === 0 && !d && !l) {
        C = null;
        break bb0;
      }
      ((w =
        r != null || o.length > 0 || d || l
          ? (0, Q.jsxs)(G, {
              children: [
                (0, Q.jsx)(G.Header, {
                  title: (0, Q.jsx)(j, {
                    id: `settings.usage.limits.title`,
                    defaultMessage: `General usage limits`,
                    description: `Title for the usage limits section in usage settings`,
                  }),
                }),
                (0, Q.jsxs)(G.Content, {
                  children: [
                    d
                      ? (0, Q.jsx)(Gr, {
                          currentMonthUsage: v?.current_month_usage ?? null,
                        })
                      : null,
                    r != null || o.length > 0
                      ? (0, Q.jsxs)(U, {
                          children: [
                            r == null
                              ? null
                              : (0, Q.jsx)(
                                  qr,
                                  {
                                    isResetFillActive: m,
                                    resetFillAnimation: i,
                                    resetFillRemainingPercent: n?.get(r.key),
                                    usageLimit: r,
                                  },
                                  r.key,
                                ),
                            o.map((e) =>
                              (0, Q.jsx)(
                                Jr,
                                {
                                  isResetFillActive: m,
                                  rateLimitRow: e,
                                  resetFillAnimation: i,
                                  resetFillRemainingPercent: n?.get(e.key),
                                },
                                e.key,
                              ),
                            ),
                          ],
                        })
                      : null,
                    l && c?.kind === `openai_native`
                      ? (0, Q.jsx)(Kr, {
                          pendingRequest: ei(y),
                          isLoading: b,
                          isSaving: x,
                          saveWorkspaceAdminRequest: p,
                        })
                      : null,
                    l && c?.kind === `custom`
                      ? (0, Q.jsx)(U, {
                          className: `mt-2`,
                          children: (0, Q.jsx)(W, {
                            label: null,
                            description:
                              c.instructions == null
                                ? null
                                : (0, Q.jsx)(`span`, {
                                    className: `leading-relaxed whitespace-pre-wrap`,
                                    children: c.instructions,
                                  }),
                            control:
                              u == null
                                ? null
                                : (0, Q.jsx)(_, {
                                    color: `primary`,
                                    size: `medium`,
                                    className: `rounded-full`,
                                    onClick: (e) => {
                                      L({
                                        event: e,
                                        href: u,
                                        initiator: `open_in_browser_bridge`,
                                      });
                                    },
                                    children: (0, Q.jsx)(j, {
                                      id: `settings.usage.limits.customRequestIncrease`,
                                      defaultMessage: `Request Increase`,
                                      description: `Member-facing button in Codex usage settings that opens the workspace's custom HTTPS monthly usage-limit-increase request page in the browser.`,
                                    }),
                                  }),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
        (T =
          s.length > 0
            ? (0, Q.jsxs)(G, {
                children: [
                  (0, Q.jsx)(G.Header, {
                    title: (0, Q.jsx)(j, {
                      id: `settings.usage.limits.spark.title`,
                      defaultMessage: `GPT-5.3-Codex-Spark usage limits`,
                      description: `Title for the GPT-5.3-Codex-Spark usage limits section`,
                    }),
                  }),
                  (0, Q.jsx)(G.Content, {
                    children: (0, Q.jsx)(U, { children: s.map(Ur) }),
                  }),
                ],
              })
            : null));
    }
    ((t[0] = g),
      (t[1] = m),
      (t[2] = x),
      (t[3] = b),
      (t[4] = i),
      (t[5] = a),
      (t[6] = p),
      (t[7] = h),
      (t[8] = S),
      (t[9] = y),
      (t[10] = v),
      (t[11] = c),
      (t[12] = C),
      (t[13] = w),
      (t[14] = T));
  } else ((C = t[12]), (w = t[13]), (T = t[14]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  let E;
  return (
    t[15] !== w || t[16] !== T
      ? ((E = (0, Q.jsxs)(Q.Fragment, { children: [w, T] })),
        (t[15] = w),
        (t[16] = T),
        (t[17] = E))
      : (E = t[17]),
    E
  );
}
function Ur(e) {
  return (0, Q.jsx)(
    Jr,
    {
      isResetFillActive: !1,
      rateLimitRow: e,
      resetFillAnimation: void 0,
      resetFillRemainingPercent: void 0,
    },
    e.key,
  );
}
function Wr(e) {
  return !ri(e);
}
function Gr(e) {
  let t = (0, li.c)(5),
    { currentMonthUsage: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(W, {
        icon: (0, Q.jsx)(y, {
          "aria-hidden": !0,
          className: `icon-sm text-token-text-tertiary`,
        }),
        label: (0, Q.jsx)(j, {
          id: `settings.usage.limits.monthly.none`,
          defaultMessage: `Your administrator hasn’t set a usage limit`,
          description: `Informational message shown when the administrator has not set a monthly usage limit for the current user.`,
        }),
        control: null,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i =
        n == null
          ? null
          : (0, Q.jsx)(W, {
              label: (0, Q.jsx)(j, {
                id: `settings.usage.limits.monthly.currentUsage`,
                defaultMessage: `Your usage this month`,
                description: `Label for the current user's monthly credit usage when no monthly usage limit is set.`,
              }),
              control: (0, Q.jsx)(`span`, {
                className: `text-sm text-token-text-secondary tabular-nums`,
                children: (0, Q.jsx)(j, {
                  id: `settings.usage.limits.monthly.currentUsageCredits`,
                  defaultMessage: `{credits, plural, one {# credit} other {# credits}}`,
                  description: `Credit amount used by the current user this month when no monthly usage limit is set.`,
                  values: { credits: Math.max(n, 0) },
                }),
              }),
            })),
      (t[1] = n),
      (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, Q.jsxs)(U, { children: [r, i] })), (t[3] = i), (t[4] = a)),
    a
  );
}
function Kr(e) {
  let t = (0, li.c)(28),
    {
      pendingRequest: n,
      isLoading: r,
      isSaving: i,
      saveWorkspaceAdminRequest: a,
    } = e,
    o = w(be),
    s = Te(),
    [c, l] = (0, ui.useState)(!1),
    [u, d] = (0, ui.useState)(n?.justification ?? ``),
    f;
  t[0] !== s || t[1] !== u || t[2] !== n || t[3] !== a || t[4] !== o
    ? ((f = () => {
        let e = u.trim();
        if (e.length === 0) {
          o.get(T).warning(
            s.formatMessage({
              id: `settings.usage.limits.requestMissingJustification`,
              defaultMessage: `Enter a justification to submit your request.`,
              description: `Toast shown when a workspace usage limit request is missing a justification`,
            }),
          );
          return;
        }
        a?.({ justification: e, requestId: n?.id })
          .then(() => {
            (o.get(T).success(
              s.formatMessage(
                n == null
                  ? {
                      id: `settings.usage.limits.requestSaved`,
                      defaultMessage: `Request submitted`,
                      description: `Toast shown when a workspace usage limit request is submitted`,
                    }
                  : {
                      id: `settings.usage.limits.requestUpdated`,
                      defaultMessage: `Request updated`,
                      description: `Toast shown when a workspace usage limit request is updated`,
                    },
              ),
            ),
              l(!1));
          })
          .catch(() => {
            o.get(T).danger(
              s.formatMessage({
                id: `settings.usage.limits.requestSaveError`,
                defaultMessage: `Could not save your request. Please try again.`,
                description: `Toast shown when a workspace usage limit request cannot be saved`,
              }),
            );
          });
      }),
      (t[0] = s),
      (t[1] = u),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] === n
    ? (m = t[7])
    : ((m =
        n == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `text-sm text-token-text-secondary`,
              children: (0, Q.jsx)(j, {
                id: `settings.usage.limits.requestPending`,
                defaultMessage: `Your request is pending admin review.`,
                description: `Status text for a pending workspace usage limit request`,
              }),
            })),
      (t[6] = n),
      (t[7] = m));
  let h = a == null,
    g;
  t[8] === n?.justification
    ? (g = t[9])
    : ((g = () => {
        (d(n?.justification ?? ``), l(!0));
      }),
      (t[8] = n?.justification),
      (t[9] = g));
  let v;
  t[10] === n
    ? (v = t[11])
    : ((v =
        n == null
          ? (0, Q.jsx)(j, {
              id: `settings.usage.limits.requestIncrease`,
              defaultMessage: `Request limit increase`,
              description: `Button to request a workspace monthly usage limit increase`,
            })
          : (0, Q.jsx)(j, {
              id: `settings.usage.limits.updatePendingRequest`,
              defaultMessage: `Update pending request`,
              description: `Button to update an existing pending workspace usage limit request`,
            })),
      (t[10] = n),
      (t[11] = v));
  let y;
  t[12] !== r || t[13] !== h || t[14] !== g || t[15] !== v
    ? ((y = (0, Q.jsx)(_, {
        color: `primary`,
        size: `medium`,
        className: `self-start rounded-full`,
        loading: r,
        disabled: h,
        onClick: g,
        children: v,
      })),
      (t[12] = r),
      (t[13] = h),
      (t[14] = g),
      (t[15] = v),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] !== p ||
  t[18] !== s ||
  t[19] !== c ||
  t[20] !== i ||
  t[21] !== u ||
  t[22] !== n
    ? ((b = c
        ? (0, Q.jsx)(U, {
            className: `mt-1 w-full`,
            children: (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-3 p-3`,
              children: [
                (0, Q.jsxs)(`label`, {
                  className: `flex flex-col gap-1.5 text-sm font-medium text-token-text-primary`,
                  children: [
                    (0, Q.jsx)(j, {
                      id: `settings.usage.limits.requestJustificationLabel`,
                      defaultMessage: `Justification`,
                      description: `Label for the workspace usage limit request justification`,
                    }),
                    (0, Q.jsx)(`textarea`, {
                      value: u,
                      rows: 3,
                      placeholder: s.formatMessage({
                        id: `settings.usage.limits.requestJustificationPlaceholder`,
                        defaultMessage: `Tell your admin why you need more credits.`,
                        description: `Placeholder for the workspace usage limit request justification`,
                      }),
                      className: `min-h-20 resize-none rounded-md border border-token-border bg-token-input-background px-3 py-2 text-sm leading-5 text-token-text-primary outline-none placeholder:text-token-text-tertiary focus:border-token-border-heavy`,
                      onChange: (e) => {
                        d(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex justify-end gap-2`,
                  children: [
                    (0, Q.jsx)(_, {
                      color: `secondary`,
                      size: `default`,
                      onClick: () => {
                        l(!1);
                      },
                      children: (0, Q.jsx)(j, {
                        id: `settings.usage.limits.requestCancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for the workspace usage limit request form`,
                      }),
                    }),
                    (0, Q.jsx)(_, {
                      color: `primary`,
                      size: `default`,
                      loading: i,
                      onClick: p,
                      children:
                        n == null
                          ? (0, Q.jsx)(j, {
                              id: `settings.usage.limits.requestSave`,
                              defaultMessage: `Submit request`,
                              description: `Submit button for a workspace usage limit request`,
                            })
                          : (0, Q.jsx)(j, {
                              id: `settings.usage.limits.requestUpdate`,
                              defaultMessage: `Update request`,
                              description: `Submit button for updating a pending workspace usage limit request`,
                            }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : null),
      (t[17] = p),
      (t[18] = s),
      (t[19] = c),
      (t[20] = i),
      (t[21] = u),
      (t[22] = n),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== m || t[25] !== y || t[26] !== b
      ? ((x = (0, Q.jsxs)(`div`, {
          className: `mt-2 flex flex-col items-start gap-2`,
          children: [m, y, b],
        })),
        (t[24] = m),
        (t[25] = y),
        (t[26] = b),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
function qr(e) {
  let t = (0, li.c)(25),
    {
      isResetFillActive: n,
      resetFillAnimation: r,
      resetFillRemainingPercent: i,
      usageLimit: a,
    } = e,
    o = Te(),
    s;
  t[0] === a.remainingPercent
    ? (s = t[1])
    : ((s = ci(a.remainingPercent)), (t[0] = a.remainingPercent), (t[1] = s));
  let c = s,
    l;
  if (t[2] !== a.resetAt) {
    let e = Ye(a.resetAt);
    ((l = e == null ? null : Ze(e)), (t[2] = a.resetAt), (t[3] = l));
  } else l = t[3];
  let u = l,
    d;
  t[4] !== o || t[5] !== a.limitCredits || t[6] !== a.usedCredits
    ? ((d =
        a.usedCredits == null || a.limitCredits == null
          ? null
          : o.formatMessage(
              {
                id: `settings.usage.limits.monthly.creditsUsed`,
                defaultMessage: `{used} of {limit} credits used`,
                description: `Usage summary for monthly usage limit credits that have been used`,
              },
              { used: ai(o, a.usedCredits), limit: ai(o, a.limitCredits) },
            )),
      (t[4] = o),
      (t[5] = a.limitCredits),
      (t[6] = a.usedCredits),
      (t[7] = d))
    : (d = t[7]);
  let f = d,
    p;
  t[8] === u
    ? (p = t[9])
    : ((p =
        u == null
          ? null
          : (0, Q.jsx)(j, {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: { time: u },
            })),
      (t[8] = u),
      (t[9] = p));
  let m = p,
    h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(j, {
        id: `settings.usage.limits.monthly.label`,
        defaultMessage: `Monthly usage limit`,
        description: `Label for a monthly usage limit row`,
      })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== m || t[12] !== f
    ? ((g =
        f != null || m != null
          ? (0, Q.jsxs)(`span`, {
              className: `flex flex-wrap gap-x-2`,
              children: [
                f == null ? null : (0, Q.jsx)(`span`, { children: f }),
                m == null ? null : (0, Q.jsx)(`span`, { children: m }),
              ],
            })
          : null),
      (t[11] = m),
      (t[12] = f),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] === o
    ? (_ = t[15])
    : ((_ = o.formatMessage({
        id: `settings.usage.limits.monthly.progress.remainingAriaLabel`,
        defaultMessage: `Monthly usage remaining`,
        description: `Accessible label for the monthly usage remaining progress bar`,
      })),
      (t[14] = o),
      (t[15] = _));
  let v;
  t[16] !== n || t[17] !== c || t[18] !== r || t[19] !== i || t[20] !== _
    ? ((v = (0, Q.jsx)(oi, {
        accessibleLabel: _,
        isResetFillActive: n,
        remainingLabel: `remaining`,
        remainingPercent: c,
        resetFillAnimation: r,
        resetFillRemainingPercent: i,
      })),
      (t[16] = n),
      (t[17] = c),
      (t[18] = r),
      (t[19] = i),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  return (
    t[22] !== g || t[23] !== v
      ? ((y = (0, Q.jsx)(W, { label: h, description: g, control: v })),
        (t[22] = g),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
function Jr(e) {
  let t = (0, li.c)(17),
    {
      isResetFillActive: n,
      rateLimitRow: r,
      resetFillAnimation: i,
      resetFillRemainingPercent: a,
    } = e,
    o;
  if (t[0] !== r.bucket.resetsAt) {
    let e = Ye(r.bucket.resetsAt ?? null);
    ((o = e == null ? null : Ze(e)), (t[0] = r.bucket.resetsAt), (t[1] = o));
  } else o = t[1];
  let s = o,
    c;
  t[2] === s
    ? (c = t[3])
    : ((c =
        s == null
          ? null
          : (0, Q.jsx)(j, {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: { time: s },
            })),
      (t[2] = s),
      (t[3] = c));
  let l = c,
    u = r.bucket.usedPercent ?? 0,
    d;
  t[4] === u ? (d = t[5]) : ((d = Xe(u)), (t[4] = u), (t[5] = d));
  let f = d,
    p;
  t[6] === r ? (p = t[7]) : ((p = Zr(r)), (t[6] = r), (t[7] = p));
  let m;
  t[8] !== n || t[9] !== f || t[10] !== i || t[11] !== a
    ? ((m = (0, Q.jsx)(oi, {
        isResetFillActive: n,
        remainingPercent: f,
        resetFillAnimation: i,
        resetFillRemainingPercent: a,
      })),
      (t[8] = n),
      (t[9] = f),
      (t[10] = i),
      (t[11] = a),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== l || t[14] !== p || t[15] !== m
      ? ((h = (0, Q.jsx)(W, { label: p, description: l, control: m })),
        (t[13] = l),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
function Yr(e) {
  return new Map(e.map((e) => [e.key, Xe(e.bucket.usedPercent ?? 0)]));
}
function Xr(e, t) {
  let n = t == null ? (e.find((e) => e.limitName == null) ?? null) : Ue(e, t);
  return n == null ? [] : ke({ entry: n, keyPrefix: t ?? `core` });
}
function Zr(e) {
  let t = e.bucket.windowDurationMins ?? 0;
  return ri(e)
    ? (0, Q.jsx)(j, {
        id: `settings.usage.limits.monthly.label`,
        defaultMessage: `Monthly usage limit`,
        description: `Label for a monthly usage limit row`,
      })
    : ii(t, fi)
      ? (0, Q.jsx)(j, {
          id: `settings.usage.limits.fiveHour.label`,
          defaultMessage: `5 hour usage limit`,
          description: `Label for the 5-hour usage limit row`,
        })
      : ii(t, 10080)
        ? (0, Q.jsx)(j, {
            id: `settings.usage.limits.week.label`,
            defaultMessage: `Weekly usage limit`,
            description: `Label for a weekly usage limit row`,
          })
        : ii(t, 1440)
          ? (0, Q.jsx)(j, {
              id: `settings.usage.limits.day.label`,
              defaultMessage: `Daily usage limit`,
              description: `Label for a daily usage limit row`,
            })
          : (0, Q.jsx)(j, {
              id: `settings.usage.limits.genericWindow.label`,
              defaultMessage: `Usage limit`,
              description: `Generic label for a usage limit row`,
            });
}
function Qr({ rateLimitStatus: e, coreUsageLimitRows: t }) {
  let n = e?.spend_control?.individual_limit ?? null;
  if (n != null)
    return {
      key: `spend-control-monthly`,
      remainingPercent: n.remaining_percent,
      resetAt: n.reset_at,
      usedCredits: n.used,
      limitCredits: n.limit,
    };
  let r = t.find(ri) ?? null;
  if (r == null) return null;
  let i = r.bucket.usedPercent ?? 0;
  return {
    key: r.key,
    remainingPercent: Xe(i),
    resetAt: r.bucket.resetsAt ?? null,
    usedCredits: null,
    limitCredits: null,
  };
}
function $r(e, t) {
  let n = Ke(e);
  return n == null
    ? null
    : {
        key: `workspace-monthly`,
        remainingPercent: n.remainingPercent,
        resetAt:
          Number(t?.spend_control?.individual_limit?.limit) === n.limit
            ? (t?.spend_control?.individual_limit?.reset_at ?? null)
            : null,
        usedCredits: String(n.used),
        limitCredits: String(n.limit),
      };
}
function ei(e) {
  return e?.items.find((e) => e.status === `pending` && ti(e) != null) ?? null;
}
function ti(e) {
  return e.payloads.find(ni) ?? null;
}
function ni(e) {
  return (
    e.kind === `spend_limit` &&
    e.target.source === mi &&
    e.target.source_id === hi
  );
}
function ri(e) {
  return ii(e.bucket.windowDurationMins ?? 0, pi);
}
function ii(e, t) {
  return !Number.isFinite(e) || e <= 0 ? !1 : Math.abs(e - t) <= t * 0.05;
}
function ai(e, t) {
  let n = Number(t);
  return Number.isFinite(n)
    ? e.formatNumber(Math.max(n, 0), {
        minimumFractionDigits: 0,
        maximumFractionDigits: n >= 10 ? 0 : 2,
      })
    : t;
}
function oi(e) {
  let t = (0, li.c)(18),
    {
      accessibleLabel: n,
      isResetFillActive: r,
      remainingLabel: i,
      remainingPercent: a,
      resetFillAnimation: o,
      resetFillRemainingPercent: s,
    } = e,
    c = i === void 0 ? `left` : i,
    l = Te(),
    u = ci(a),
    d = ci(s ?? a),
    p = x(0),
    m = r && s == null ? void 0 : o,
    h = m?.progress ?? p,
    _ = r && m != null && s != null,
    v;
  t[0] === d
    ? (v = t[1])
    : ((v = (e) => d + (100 - d) * e), (t[0] = d), (t[1] = v));
  let y = g(h, v),
    b = g(y, si),
    S = _ ? 100 : u,
    C;
  t[2] !== n || t[3] !== l
    ? ((C =
        n ??
        l.formatMessage({
          id: `settings.usage.limits.progress.ariaLabel`,
          defaultMessage: `Usage remaining`,
          description: `Aria label for usage remaining progress bars`,
        })),
      (t[2] = n),
      (t[3] = l),
      (t[4] = C))
    : (C = t[4]);
  let w = C,
    T = _
      ? (0, Q.jsx)(f.span, { children: b }, `remaining-percent`)
      : l.formatNumber(u, { maximumFractionDigits: 0 }),
    E;
  t[5] !== y ||
  t[6] !== u ||
  t[7] !== S ||
  t[8] !== m ||
  t[9] !== w ||
  t[10] !== _
    ? ((E = (0, Q.jsx)(`div`, {
        className: `w-24`,
        children:
          m == null
            ? (0, Q.jsx)(`progress`, {
                max: 100,
                value: u,
                "aria-label": w,
                className: `h-1.5 w-24 overflow-hidden rounded-full [&::-moz-progress-bar]:bg-token-foreground [&::-ms-fill]:bg-token-foreground [&::-webkit-progress-bar]:bg-token-foreground/10 [&::-webkit-progress-value]:bg-token-foreground`,
              })
            : (0, Q.jsx)(We, {
                accessibleLabel: w,
                animatedPercent: y,
                isResetFillActive: _,
                remainingPercent: S,
                resetFillAnimation: m,
              }),
      })),
      (t[5] = y),
      (t[6] = u),
      (t[7] = S),
      (t[8] = m),
      (t[9] = w),
      (t[10] = _),
      (t[11] = E))
    : (E = t[11]);
  let D;
  t[12] !== T || t[13] !== c
    ? ((D = (0, Q.jsx)(`span`, {
        className: `min-w-[72px] text-right text-sm whitespace-nowrap text-token-text-secondary tabular-nums`,
        children:
          c === `remaining`
            ? (0, Q.jsx)(j, {
                id: `settings.usage.limits.monthly.progress.remaining`,
                defaultMessage: `{remaining}% remaining`,
                description: `Remaining percentage shown next to usage progress`,
                values: { remaining: T },
              })
            : (0, Q.jsx)(j, {
                id: `settings.usage.limits.progress.remaining`,
                defaultMessage: `{remaining}% left`,
                description: `Remaining percentage shown next to usage progress`,
                values: { remaining: T },
              }),
      })),
      (t[12] = T),
      (t[13] = c),
      (t[14] = D))
    : (D = t[14]);
  let O;
  return (
    t[15] !== E || t[16] !== D
      ? ((O = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [E, D],
        })),
        (t[15] = E),
        (t[16] = D),
        (t[17] = O))
      : (O = t[17]),
    O
  );
}
function si(e) {
  return Math.round(e);
}
function ci(e) {
  return Number.isFinite(e) ? Math.max(0, Math.min(100, e)) : 0;
}
var li,
  ui,
  Q,
  di,
  fi,
  pi,
  mi,
  hi,
  gi = e(() => {
    ((li = d()),
      s(),
      k(),
      (ui = t(m(), 1)),
      B(),
      v(),
      pe(),
      ee(),
      de(),
      tt(),
      Re(),
      F(),
      Rt(),
      lt(),
      ct(),
      H(),
      $e(),
      ze(),
      (Q = R()),
      (di = `gpt-5.3-codex-spark`),
      (fi = 300),
      (pi = 30 * Qe),
      (mi = `account_user_spend_controls`),
      (hi = `account_user.credit_limits`));
  });
function _i() {
  let e = (0, Ti.c)(83),
    {
      canManageCreditSettings: t,
      isUsageSettingsVisible: n,
      isUsageSettingsAccessLoading: r,
      plan: a,
    } = Be(),
    o = Ee(),
    s = N(`85924660`),
    c = Me(o),
    [l, u] = (0, Ei.useState)(null),
    [d, f] = (0, Ei.useState)(null),
    p;
  e[0] === a ? (p = e[1]) : ((p = re(a)), (e[0] = a), (e[1] = p));
  let m = p,
    h = m && n && !r,
    { data: g, isLoading: v, isError: y, refetch: b } = i(ie),
    x = a === he.FREE || a === he.GO,
    S = t && !x,
    C = x && g?.credits?.balance != null,
    w = t || C,
    T;
  e[2] === S ? (T = e[3]) : ((T = { enabled: S }), (e[2] = S), (e[3] = T));
  let { data: E, isLoading: D, isError: O, refetch: k } = Ct(T),
    A;
  e[4] === h ? (A = e[5]) : ((A = { enabled: h }), (e[4] = h), (e[5] = A));
  let { data: M, isLoading: P, isError: ee, refetch: te } = Tt(A),
    F =
      M?.effective_monthly_limit?.limit != null &&
      M.effective_monthly_limit.limit >= 0 &&
      M.effective_monthly_limit.enforcement_mode === `HARD_CAP`,
    ae = h && F,
    I;
  e[6] === ae ? (I = e[7]) : ((I = { enabled: ae }), (e[6] = ae), (e[7] = I));
  let { data: oe, refetch: se } = xt(I),
    L = oe?.kind === `openai_native`,
    ce = h && F && L,
    le;
  e[8] === ce
    ? (le = e[9])
    : ((le = { enabled: ce }), (e[8] = ce), (e[9] = le));
  let { data: R, isLoading: ue, isError: de, refetch: fe } = Et(le),
    z = kt(),
    {
      enableAutoTopUpMutation: pe,
      updateAutoTopUpMutation: B,
      disableAutoTopUpMutation: me,
    } = Nt(),
    ge;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(nt, { slug: `usage` })), (e[10] = ge))
    : (ge = e[10]);
  let _e = ge;
  if (!n && !w && !r) return null;
  let ve = !n && !w && r,
    ye = m
      ? (P && M == null) || (F && L && ue && R == null)
      : (S && D && E == null) || (v && g == null),
    be = m
      ? (ee && M == null) || (F && L && de && R == null)
      : (S && O && E == null) || (y && g == null),
    xe;
  e[11] !== S ||
  e[12] !== F ||
  e[13] !== m ||
  e[14] !== k ||
  e[15] !== b ||
  e[16] !== fe ||
  e[17] !== te ||
  e[18] !== se ||
  e[19] !== L
    ? ((xe = () => {
        if (!m) {
          if (S) {
            Promise.all([k(), b()]);
            return;
          }
          b();
          return;
        }
        (te(), F && (se(), L && fe()));
      }),
      (e[11] = S),
      (e[12] = F),
      (e[13] = m),
      (e[14] = k),
      (e[15] = b),
      (e[16] = fe),
      (e[17] = te),
      (e[18] = se),
      (e[19] = L),
      (e[20] = xe))
    : (xe = e[20]);
  let Se = xe,
    V;
  e[21] === g
    ? (V = e[22])
    : ((V = () => {
        u((e) => e ?? g ?? null);
      }),
      (e[21] = g),
      (e[22] = V));
  let Ce = V,
    we;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = () => {
        u(null);
      }),
      (e[23] = we))
    : (we = e[23]);
  let Te = we,
    De;
  e[24] !== g || e[25] !== l || e[26] !== c
    ? ((De = () => {
        let e = {
          animationComplete: !1,
          rateLimitStatus: l ?? g ?? null,
          refreshComplete: !1,
        };
        (u(null),
          f(e),
          c.start(() => {
            f((t) => (t === e ? { ...t, animationComplete: !0 } : t));
          }));
      }),
      (e[24] = g),
      (e[25] = l),
      (e[26] = c),
      (e[27] = De))
    : (De = e[27]);
  let Oe = De,
    H;
  e[28] !== g || e[29] !== d
    ? ((H = d != null && Si(d.rateLimitStatus, g ?? null)),
      (e[28] = g),
      (e[29] = d),
      (e[30] = H))
    : (H = e[30]);
  let ke = H;
  d != null &&
    d.animationComplete &&
    !d.refreshComplete &&
    ke &&
    f({ ...d, refreshComplete: !0 });
  let Ae =
    s && d != null && !d.refreshComplete && (!d.animationComplete || !ke);
  if (ve || be || ye) {
    let t,
      n = null;
    if (ve) {
      let n;
      (e[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(j, {
            id: `settings.usage.access.loading`,
            defaultMessage: `Checking subscription…`,
            description: `Loading label while checking whether Usage settings should be visible`,
          })),
          (e[31] = n))
        : (n = e[31]),
        (t = n));
    } else if (be) {
      let r;
      (e[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, $.jsx)(j, {
            id: `settings.usage.load.error`,
            defaultMessage: `Could not load usage settings.`,
            description: `Error label shown when usage settings cannot be fetched`,
          })),
          (e[32] = r))
        : (r = e[32]),
        (t = r));
      let i;
      e[33] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(j, {
            id: `settings.usage.load.retry`,
            defaultMessage: `Retry`,
            description: `Retry button for usage settings fetch errors`,
          })),
          (e[33] = i))
        : (i = e[33]);
      let a;
      (e[34] === Se
        ? (a = e[35])
        : ((a = (0, $.jsx)(_, {
            color: `secondary`,
            size: `toolbar`,
            onClick: Se,
            children: i,
          })),
          (e[34] = Se),
          (e[35] = a)),
        (n = a));
    } else {
      let n;
      (e[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(j, {
            id: `settings.usage.load.loading`,
            defaultMessage: `Loading usage settings…`,
            description: `Loading label while usage settings are being fetched`,
          })),
          (e[36] = n))
        : (n = e[36]),
        (t = n));
    }
    let r;
    return (
      e[37] !== n || e[38] !== t
        ? ((r = (0, $.jsx)(bi, { title: _e, rowLabel: t, rowControl: n })),
          (e[37] = n),
          (e[38] = t),
          (e[39] = r))
        : (r = e[39]),
      r
    );
  }
  if (S && E == null) return null;
  if (m) {
    let t, n;
    e[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(j, {
          id: `settings.usage.enterprise.title`,
          defaultMessage: `Usage limits`,
          description: `Title for enterprise usage limits settings`,
        })),
        (n = (0, $.jsx)(j, {
          id: `settings.usage.enterprise.subtitle`,
          defaultMessage: `See your usage within the limits defined by your administrator.`,
          description: `Subtitle for enterprise usage limits settings`,
        })),
        (e[40] = t),
        (e[41] = n))
      : ((t = e[40]), (n = e[41]));
    let r = g ?? null,
      i = M ?? null,
      a = R ?? null,
      o;
    return (
      e[42] !== F ||
      e[43] !== ue ||
      e[44] !== r ||
      e[45] !== i ||
      e[46] !== a ||
      e[47] !== z.isPending ||
      e[48] !== z.mutateAsync ||
      e[49] !== oe
        ? ((o = (0, $.jsx)(rt, {
            title: t,
            subtitle: n,
            subtitleClassName: `whitespace-normal`,
            children: (0, $.jsx)(Hr, {
              rateLimitStatus: r,
              showEnterpriseMonthlyUsageLimit: !0,
              canRequestEnterpriseMonthlyUsageLimit: F,
              workspaceRequestPolicy: oe,
              workspaceMonthlyUsage: i,
              workspaceAdminRequests: a,
              isWorkspaceAdminRequestsLoading: ue,
              isSavingWorkspaceAdminRequest: z.isPending,
              saveWorkspaceAdminRequest: z.mutateAsync,
            }),
          })),
          (e[42] = F),
          (e[43] = ue),
          (e[44] = r),
          (e[45] = i),
          (e[46] = a),
          (e[47] = z.isPending),
          (e[48] = z.mutateAsync),
          (e[49] = oe),
          (e[50] = o))
        : (o = e[50]),
      o
    );
  }
  let je;
  e[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(vi, {})), (e[51] = je))
    : (je = e[51]);
  let Ne;
  e[52] === a
    ? (Ne = e[53])
    : ((Ne = (0, $.jsx)(qn, { plan: a })), (e[52] = a), (e[53] = Ne));
  let Pe;
  e[54] !== E ||
  e[55] !== S ||
  e[56] !== t ||
  e[57] !== w ||
  e[58] !== me ||
  e[59] !== pe ||
  e[60] !== g?.credits ||
  e[61] !== B
    ? ((Pe =
        S && E != null
          ? (0, $.jsx)(rn, {
              serverState: E,
              creditDetails: g?.credits ?? null,
              enableAutoTopUpMutation: pe,
              updateAutoTopUpMutation: B,
              disableAutoTopUpMutation: me,
            })
          : w
            ? (0, $.jsx)(nn, {
                canPurchaseCredits: t,
                creditDetails: g?.credits ?? null,
              })
            : null),
      (e[54] = E),
      (e[55] = S),
      (e[56] = t),
      (e[57] = w),
      (e[58] = me),
      (e[59] = pe),
      (e[60] = g?.credits),
      (e[61] = B),
      (e[62] = Pe))
    : (Pe = e[62]);
  let Fe = g ?? null,
    Ie = s ? c : void 0,
    Le = d?.rateLimitStatus,
    Re;
  e[63] !== Ae || e[64] !== Fe || e[65] !== Ie || e[66] !== Le
    ? ((Re = (0, $.jsx)(Hr, {
        isResetFillActive: Ae,
        rateLimitStatus: Fe,
        resetFillAnimation: Ie,
        resetFillRateLimitStatus: Le,
      })),
      (e[63] = Ae),
      (e[64] = Fe),
      (e[65] = Ie),
      (e[66] = Le),
      (e[67] = Re))
    : (Re = e[67]);
  let ze;
  e[68] !== Ce || e[69] !== Oe || e[70] !== Ae
    ? ((ze = (0, $.jsx)(Rr, {
        isResetFillActive: Ae,
        onResetAttemptCancel: Te,
        onResetAttemptStart: Ce,
        onResetComplete: Oe,
      })),
      (e[68] = Ce),
      (e[69] = Oe),
      (e[70] = Ae),
      (e[71] = ze))
    : (ze = e[71]);
  let Ve;
  e[72] === w
    ? (Ve = e[73])
    : ((Ve = (0, $.jsx)(ne, {
        browser: !0,
        children: (0, $.jsx)(cr, { showCreditHistory: w }),
      })),
      (e[72] = w),
      (e[73] = Ve));
  let He;
  e[74] === a
    ? (He = e[75])
    : ((He = (0, $.jsx)(Jn, { plan: a })), (e[74] = a), (e[75] = He));
  let Ue;
  return (
    e[76] !== Ne ||
    e[77] !== Pe ||
    e[78] !== Re ||
    e[79] !== ze ||
    e[80] !== Ve ||
    e[81] !== He
      ? ((Ue = (0, $.jsxs)(rt, {
          title: _e,
          subtitle: je,
          subtitleClassName: `whitespace-normal`,
          children: [Ne, Pe, Re, ze, Ve, He],
        })),
        (e[76] = Ne),
        (e[77] = Pe),
        (e[78] = Re),
        (e[79] = ze),
        (e[80] = Ve),
        (e[81] = He),
        (e[82] = Ue))
      : (Ue = e[82]),
    Ue
  );
}
function vi() {
  let e = (0, Ti.c)(1),
    t = yi,
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(j, {
          id: `settings.usage.subtitle`,
          defaultMessage: `To view invoices, change your payment method, and take other actions, visit <settings>settings</settings> on Web`,
          description: `Subtitle pointing users to ChatGPT billing settings for broader billing actions`,
          values: {
            settings: (e) =>
              (0, $.jsx)(`a`, {
                className: `inline-flex cursor-interaction text-token-text-link-foreground`,
                href: pt,
                target: `_blank`,
                rel: `noreferrer`,
                onClick: t,
                children: e,
              }),
          },
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function yi(e) {
  L({ event: e, href: pt, initiator: `open_in_browser_bridge` });
}
function bi(e) {
  let t = (0, Ti.c)(6),
    { title: n, rowLabel: r, rowControl: i } = e,
    a;
  t[0] !== i || t[1] !== r
    ? ((a =
        i == null
          ? (0, $.jsx)(it, { children: r })
          : (0, $.jsx)(G, {
              children: (0, $.jsx)(G.Content, {
                children: (0, $.jsx)(U, {
                  children: (0, $.jsx)(W, {
                    className: `gap-6`,
                    label: r,
                    control: i,
                  }),
                }),
              }),
            })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== a || t[4] !== n
      ? ((o = (0, $.jsx)(rt, { title: n, children: a })),
        (t[3] = a),
        (t[4] = n),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function xi(e, t) {
  return (
    wi(e?.rate_limit?.primary_window, t?.rate_limit?.primary_window) ||
    wi(e?.rate_limit?.secondary_window, t?.rate_limit?.secondary_window)
  );
}
function Si(e, t) {
  return xi(e, t) || (!Ci(e) && !Ci(t));
}
function Ci(e) {
  return (
    e?.rate_limit?.primary_window != null ||
    e?.rate_limit?.secondary_window != null
  );
}
function wi(e, t) {
  return e == null || t == null
    ? e != null || t != null
    : e.used_percent !== t.used_percent ||
        e.reset_at !== t.reset_at ||
        e.limit_window_seconds !== t.limit_window_seconds;
}
var Ti, Ei, $;
e(() => {
  ((Ti = d()),
    k(),
    (Ei = t(m(), 1)),
    B(),
    v(),
    pe(),
    z(),
    C(),
    Se(),
    Dt(),
    Pe(),
    ot(),
    Rt(),
    st(),
    lt(),
    at(),
    ct(),
    He(),
    ve(),
    xe(),
    Kn(),
    gt(),
    $n(),
    vr(),
    Vr(),
    gi(),
    ($ = R()));
})();
export { _i as UsageSettings };
//# sourceMappingURL=usage-settings-DDjAs0_8.js.map
