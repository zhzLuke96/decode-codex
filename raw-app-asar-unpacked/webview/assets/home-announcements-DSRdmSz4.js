import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AE as n,
  AV as r,
  BW as i,
  C0 as a,
  CE as o,
  CJ as s,
  Cb as c,
  Cg as l,
  Cp as u,
  GK as d,
  Gf as f,
  I2 as p,
  JA as m,
  KK as h,
  L2 as g,
  LL as _,
  Mg as v,
  PB as y,
  RL as b,
  S0 as x,
  SE as S,
  SV as C,
  Sf as w,
  Tg as T,
  VW as E,
  WW as D,
  Wf as O,
  _0 as k,
  _Y as A,
  a2 as ee,
  aG as te,
  aJ as ne,
  bE as re,
  bI as j,
  bR as ie,
  cS as ae,
  cY as M,
  cj as oe,
  cp as se,
  d2 as N,
  dD as ce,
  fx as le,
  gD as ue,
  jg as de,
  k2 as P,
  kV as fe,
  kb as pe,
  lS as me,
  lp as he,
  m2 as ge,
  mD as _e,
  mY as F,
  oJ as ve,
  oj as ye,
  ov as be,
  p2 as I,
  px as xe,
  rG as Se,
  s2 as L,
  sG as Ce,
  sY as R,
  sv as we,
  uD as Te,
  vI as Ee,
  vR as De,
  wJ as Oe,
  wV as ke,
  wf as Ae,
  wg as je,
  wp as Me,
  x0 as Ne,
  yR as Pe,
  yY as z,
  zL as Fe,
  zW as B,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Fn as Ie,
  In as Le,
  Jn as Re,
  Lt as ze,
  Rt as Be,
  Xn as Ve,
  Yn as He,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  I as Ue,
  L as We,
  O as Ge,
  R as Ke,
  b as qe,
  ct as Je,
  k as Ye,
  st as Xe,
  y as Ze,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  Du as Qe,
  Eu as $e,
  Gr as et,
  Ql as tt,
  Wr as nt,
  Zl as rt,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  $t as it,
  In as at,
  Ln as ot,
  Qt as st,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  c as ct,
  l as lt,
  r as ut,
  t as dt,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ggy53w99-CqMu8hJo.js";
import {
  h as ft,
  p as pt,
  t as mt,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~pcx43lpb-BOlhhGyv.js";
import {
  i as ht,
  r as gt,
} from "./app-initial~app-main~codex-micro-settings-Cw5XeQHu.js";
import {
  a as _t,
  i as vt,
  n as yt,
  r as bt,
  t as xt,
} from "./app-initial~app-main~new-thread-panel-page~hotkey-window-thread-page~profile~thread-app-she~00hof2e5-B5lJTi7j.js";
import {
  n as St,
  t as Ct,
} from "./app-initial~app-main~new-thread-panel-page~work-home-page~home-announcements-O8w6zHCt.js";
import { n as V, t as H } from "./onboarding-banner-CFCJ4ceQ.js";
import {
  i as wt,
  n as Tt,
  r as Et,
  t as Dt,
} from "./codex-app-home-beacon-debug-state-KcIqz-nD.js";
import { n as Ot, t as kt } from "./team-CwnIbATo.js";
function At({ actionId: e, beaconId: t }) {
  return `${t}:${e}`;
}
function jt(e) {
  let t = e.beacon_ui_response;
  return t?.ui_info.type === `beacon_banner_info`
    ? { ...t, ui_info: t.ui_info }
    : null;
}
function Mt({ accountId: e, response: t }) {
  return t.beacon_ui_response == null
    ? { accountId: e, beacon: null, shouldKeepLastServedBeacon: !0 }
    : { accountId: e, beacon: jt(t), shouldKeepLastServedBeacon: !1 };
}
function Nt(e) {
  let t = Pt(e.action_v2);
  return t != null && Ft(t) ? t : null;
}
function Pt(e) {
  return `url` in e && e.url != null
    ? e.url
    : `web_url` in e && e.web_url != null
      ? e.web_url
      : null;
}
function Ft(e) {
  return (
    e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    (e.startsWith(`/`) && !e.startsWith(`//`))
  );
}
function It({ accountId: e, authMethod: t, isAuthLoading: n }) {
  return !n && t === `chatgpt` && e != null;
}
function Lt({ isAuthLoading: e }) {
  return e;
}
async function Rt(e, t, n) {
  if (!wt(e.beacon_id))
    try {
      await E.safePost(`/beacons/event`, {
        requestBody:
          n == null
            ? { beacon_id: e.beacon_id, event_type: t }
            : { beacon_id: e.beacon_id, event_type: t, event_cta_id: n },
      });
    } catch {}
}
function zt(e, t) {
  return `${e}:${t}`;
}
function Bt(e, t, n) {
  let r = zt(t, n.beacon_id);
  e.get(Kt).has(r) ||
    (e.set(Kt, (e) => {
      let t = new Set(e);
      return (t.add(r), t);
    }),
    Rt(n, `view`));
}
function Vt(e, t, n) {
  if (wt(n.beacon_id)) {
    e.set(Tt, !1);
    return;
  }
  let r = zt(t, n.beacon_id);
  (e.set(qt, (e) => {
    let t = new Set(e);
    return (t.add(r), t);
  }),
    Rt(n, `dismiss`));
}
function Ht() {
  let e = (0, Ut.c)(31),
    t = x(R),
    { accountId: n, authMethod: r, isLoading: i, userId: o } = me(),
    { data: s } = pe(),
    c = Ce(),
    l = a(qt),
    u = a(Tt),
    d = a(Xt),
    f = a(U),
    p = a(Jt),
    m,
    h;
  if (
    e[0] !== n ||
    e[1] !== r ||
    e[2] !== s?.id ||
    e[3] !== i ||
    e[4] !== c ||
    e[5] !== o
  ) {
    let t = c.getContext().user?.customIDs?.account_id;
    ((m = n ?? s?.id ?? t ?? o ?? null),
      (h = It({ accountId: m, authMethod: r, isAuthLoading: i })),
      (e[0] = n),
      (e[1] = r),
      (e[2] = s?.id),
      (e[3] = i),
      (e[4] = c),
      (e[5] = o),
      (e[6] = m),
      (e[7] = h));
  } else ((m = e[6]), (h = e[7]));
  let g = h,
    _;
  e[8] === i
    ? (_ = e[9])
    : ((_ = Lt({ isAuthLoading: i })), (e[8] = i), (e[9] = _));
  let v = _,
    y,
    b;
  (e[10] !== m || e[11] !== t || e[12] !== g
    ? ((y = () => {
        (t.set(Gt, m), t.set(U, g));
      }),
      (b = [m, t, g]),
      (e[10] = m),
      (e[11] = t),
      (e[12] = g),
      (e[13] = y),
      (e[14] = b))
    : ((y = e[13]), (b = e[14])),
    (0, Wt.useLayoutEffect)(y, b));
  let S, C;
  (e[15] !== d.data || e[16] !== t
    ? ((S = () => {
        d.data?.accountId != null &&
          d.data.beacon != null &&
          t.set(Jt, { accountId: d.data.accountId, beacon: d.data.beacon });
      }),
      (C = [d.data, t]),
      (e[15] = d.data),
      (e[16] = t),
      (e[17] = S),
      (e[18] = C))
    : ((S = e[17]), (C = e[18])),
    (0, Wt.useLayoutEffect)(S, C));
  let w =
      d.data?.accountId === m
        ? (d.data.beacon ??
          (d.data.shouldKeepLastServedBeacon && p?.accountId === m
            ? p.beacon
            : null))
        : null,
    T;
  if (e[19] !== l || e[20] !== u || e[21] !== w || e[22] !== m || e[23] !== g) {
    let t = w != null && m != null ? zt(m, w.beacon_id) : null;
    ((T = null),
      u ? (T = Yt) : g && w != null && t != null && !l.has(t) && (T = w),
      (e[19] = l),
      (e[20] = u),
      (e[21] = w),
      (e[22] = m),
      (e[23] = g),
      (e[24] = T));
  } else T = e[24];
  let E = v || T != null,
    D = u ? `debug` : m,
    O = T != null,
    k = !u && (v || (g && (!f || d.isLoading))),
    A;
  return (
    e[25] !== T || e[26] !== E || e[27] !== D || e[28] !== O || e[29] !== k
      ? ((A = {
          accountId: D,
          beacon: T,
          isEligible: O,
          isLoading: k,
          shouldSuppressVanillaPromos: E,
        }),
        (e[25] = T),
        (e[26] = E),
        (e[27] = D),
        (e[28] = O),
        (e[29] = k),
        (e[30] = A))
      : (A = e[30]),
    A
  );
}
var Ut,
  Wt,
  Gt,
  U,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    ((Ut = p()),
      k(),
      (Wt = t(g(), 1)),
      ae(),
      c(),
      Et(),
      at(),
      M(),
      Se(),
      D(),
      (Gt = L(R, null)),
      (U = L(R, !1)),
      (Kt = L(R, () => new Set())),
      (qt = L(R, () => new Set())),
      (Jt = L(R, null)),
      (Yt = {
        type: `beacon_ui_response`,
        beacon_id: Dt,
        beacon_name: `Codex App Home Beacon Debug`,
        show_timing: `immediate`,
        ui_info: {
          type: `beacon_banner_info`,
          title: `Codex app home banner`,
          description: `Local debug preview`,
          informational_link: null,
          icon_image_url: null,
          icon_image_url_dark: null,
          icon_image_size: `large`,
          banner_position: null,
          banner_design: `default`,
          dismiss_variant: `dismiss_on_send`,
        },
        action_items: [
          {
            id: `learn_more`,
            action_v2: { action_enum: `open_url`, url: `/settings` },
            text: `Learn more`,
            type: `primary`,
            icon_url: null,
            description: null,
          },
        ],
      }),
      (Xt = ee(R, ({ get: e }) => {
        let t = e(Gt);
        return {
          queryKey: [`codex-app-home-beacon`, t, e(ot).locale],
          enabled: e(U),
          refetchOnMount: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
          retry: !1,
          staleTime: 6e4,
          queryFn: async () => ({
            accountId: t,
            response: await E.safeGet(`/beacons/home`, {
              additionalHeaders: { "Cache-Control": `no-store` },
              parameters: { query: { product: `codex` } },
            }),
          }),
          select: Mt,
        };
      })));
  });
function Qt(e) {
  let t = (0, nn.c)(13),
    { accountId: n, beacon: r, localActionHandlers: i } = e,
    a = x(R),
    o,
    s;
  (t[0] !== n || t[1] !== r || t[2] !== a
    ? ((o = () => {
        Bt(a, n, r);
      }),
      (s = [n, r, a]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4])),
    (0, rn.useEffect)(o, s));
  let c;
  t[5] !== n || t[6] !== r || t[7] !== a
    ? ((c = () => {
        Vt(a, n, r);
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== i || t[11] !== c
      ? ((l = (0, W.jsx)($t, {
          beacon: r,
          localActionHandlers: i,
          onDismiss: c,
        })),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function $t(e) {
  let t = (0, nn.c)(28),
    { beacon: n, localActionHandlers: r, onDismiss: i } = e,
    a = z(),
    o = oe(),
    s,
    c,
    l,
    d,
    f,
    p,
    m;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    let e = n.action_items.find(tn),
      i = n.action_items.find(en),
      a = (e) => {
        if (e == null || e.text == null) return;
        let t = r?.[At({ actionId: e.id, beaconId: n.beacon_id })],
          i = Nt(e);
        if (!(i == null && t == null))
          return {
            label: e.text,
            onClick: (r) => {
              if (
                (Rt(n, `click`, e.id),
                t?.({ action: e, beacon: n }) !== !0 && i != null)
              ) {
                if (!i.startsWith(`/`)) {
                  ue({
                    event: r,
                    href: i,
                    initiator: `open_in_browser_bridge`,
                  });
                  return;
                }
                o(i);
              }
            },
          };
      };
    ((m = ze),
      (s = H),
      (c = n.ui_info.title),
      (l = n.ui_info.description),
      t[10] === n.ui_info.icon_image_url
        ? (d = t[11])
        : ((d = n.ui_info.icon_image_url
            ? (0, W.jsx)(`img`, {
                alt: ``,
                src: n.ui_info.icon_image_url,
                className: `h-8 w-8 shrink-0`,
              })
            : void 0),
          (t[10] = n.ui_info.icon_image_url),
          (t[11] = d)),
      (f = a(e)),
      (p = a(i)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m));
  } else
    ((s = t[3]),
      (c = t[4]),
      (l = t[5]),
      (d = t[6]),
      (f = t[7]),
      (p = t[8]),
      (m = t[9]));
  let h;
  t[12] === a
    ? (h = t[13])
    : ((h = a.formatMessage(
        {
          id: `codexAppHomeBeaconAnnouncement.dismiss`,
          defaultMessage: `Dismiss {appName} beacon banner`,
          description: `Accessible label for dismissing the backend-driven Codex app home banner`,
        },
        { appName: u },
      )),
      (t[12] = a),
      (t[13] = h));
  let g;
  t[14] !== i || t[15] !== h
    ? ((g = { ariaLabel: h, icon: B, onClick: i }),
      (t[14] = i),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== s ||
  t[18] !== c ||
  t[19] !== l ||
  t[20] !== d ||
  t[21] !== f ||
  t[22] !== p ||
  t[23] !== g
    ? ((_ = (0, W.jsx)(s, {
        title: c,
        description: l,
        leadingVisual: d,
        primaryAction: f,
        secondaryAction: p,
        dismissAction: g,
      })),
      (t[17] = s),
      (t[18] = c),
      (t[19] = l),
      (t[20] = d),
      (t[21] = f),
      (t[22] = p),
      (t[23] = g),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  return (
    t[25] !== m || t[26] !== _
      ? ((v = (0, W.jsx)(`div`, { className: m, children: _ })),
        (t[25] = m),
        (t[26] = _),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function en(e) {
  return e.type === `secondary`;
}
function tn(e) {
  return e.type == null || e.type === `primary`;
}
var nn,
  rn,
  W,
  an = e(() => {
    ((nn = p()),
      k(),
      (rn = t(g(), 1)),
      F(),
      m(),
      Me(),
      Zt(),
      _e(),
      V(),
      Be(),
      i(),
      M(),
      (W = P()));
  });
function on(e) {
  let t = (0, sn.c)(16),
    { message: n, setHasSeenAppUpsellBanner: r } = e,
    i = z(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, G.jsx)(A, {
        id: `codex.appUpsellBanner.title`,
        defaultMessage: `ChatGPT app`,
        description: `Title shown in the app upsell banner`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o, s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(`img`, {
        alt: ``,
        src: Ge,
        className: `h-8 w-8 shrink-0`,
      })),
      (s = (0, G.jsx)(A, {
        id: `codex.appUpsellBanner.download`,
        defaultMessage: `Download`,
        description: `Primary action label to download the ChatGPT app`,
      })),
      (t[1] = o),
      (t[2] = s))
    : ((o = t[1]), (s = t[2]));
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = {
        label: s,
        onClick: (e) => {
          (r(!0),
            ue({
              event: e,
              href: `https://persistent.oaistatic.com/codex-app-prod/Codex.dmg`,
              initiator: `open_in_browser_bridge`,
            }));
        },
      }),
      (t[3] = r),
      (t[4] = c));
  let l;
  t[5] === i
    ? (l = t[6])
    : ((l = i.formatMessage({
        id: `codex.appUpsellBanner.dismissLabel`,
        defaultMessage: `Dismiss ChatGPT app banner`,
        description: `Accessible label for dismissing the ChatGPT app upsell banner`,
      })),
      (t[5] = i),
      (t[6] = l));
  let u;
  t[7] === r
    ? (u = t[8])
    : ((u = () => {
        r(!0);
      }),
      (t[7] = r),
      (t[8] = u));
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = { ariaLabel: l, icon: B, onClick: u }),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== n || t[13] !== c || t[14] !== d
      ? ((f = (0, G.jsx)(H, {
          title: a,
          description: n,
          leadingVisual: o,
          primaryAction: c,
          dismissAction: d,
        })),
        (t[12] = n),
        (t[13] = c),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
var sn,
  G,
  cn = e(() => {
    ((sn = p()), F(), Ye(), _e(), V(), i(), (G = P()));
  });
function ln(e) {
  let t = (0, dn.c)(6),
    { platform: n, isLoading: r } = v(),
    { authMethod: i, planAtLogin: a, isLoading: o } = me(),
    s = i === `chatgpt`,
    c = i === `apikey`,
    l = s || c,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = { queryConfig: { enabled: l } }), (t[0] = l), (t[1] = u));
  let { data: d, isLoading: f } = ve(`account-info`, u),
    p = i === `copilot`,
    m = n === `macOS`,
    h = d?.plan ?? a,
    g = h === be.FREE || h === be.GO,
    _ = !e && (o || r || (s && f)),
    y = null;
  if (!_ && m && !e && !p && i && d && ((s && !g) || c)) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(A, {
          id: `codex.appUpsellBanner.cbpApi.message`,
          defaultMessage: `Build faster with the ChatGPT app. Download now or {learnMoreLink}`,
          description: `Message shown in the app upsell banner for paid ChatGPT and API key users`,
          values: {
            learnMoreLink: (0, K.jsx)(`a`, {
              className: `text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none`,
              href: `https://chatgpt.com/codex`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: (0, K.jsx)(A, {
                id: `codex.appUpsellBanner.learnMoreLowercase`,
                defaultMessage: `learn more`,
                description: `Lowercase learn more link text in the app upsell banner`,
              }),
            }),
          },
        })),
        (t[2] = e))
      : (e = t[2]),
      (y = e));
  }
  let b;
  return (
    t[3] !== _ || t[4] !== y
      ? ((b = { isLoading: _, message: y }), (t[3] = _), (t[4] = y), (t[5] = b))
      : (b = t[5]),
    b
  );
}
function un() {
  let e = (0, dn.c)(5),
    [t, n] = I(fn),
    { isLoading: r, message: i } = ln(t),
    a = i != null,
    o;
  return (
    e[0] !== r || e[1] !== i || e[2] !== n || e[3] !== a
      ? ((o = {
          isEligible: a,
          isLoading: r,
          message: i,
          setHasSeenAppUpsellBanner: n,
        }),
        (e[0] = r),
        (e[1] = i),
        (e[2] = n),
        (e[3] = a),
        (e[4] = o))
      : (o = e[4]),
    o
  );
}
var dn,
  K,
  fn,
  pn = e(() => {
    ((dn = p()),
      N(),
      F(),
      ae(),
      de(),
      s(),
      we(),
      ne(),
      (K = P()),
      (fn = Oe(`has-seen-app-upsell-banner`, !1)));
  });
function mn(e) {
  let t = (0, hn.c)(25),
    {
      content: n,
      fastModeModel: r,
      intl: i,
      isSubmitting: a,
      setHasSeenFastModeHomeBanner: o,
      setIsSubmitting: s,
      setServiceTier: c,
    } = e,
    l = x(R),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(A, {
        id: `codex.fastModeHomeBanner.title`,
        defaultMessage: `Enable Fast mode`,
        description: `Title shown in the Fast mode home banner`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d, f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsx)(gt, { className: `icon-sm text-token-charts-yellow` })),
      (f = (0, q.jsx)(A, {
        id: `codex.fastModeHomeBanner.cta.primary`,
        defaultMessage: `Enable now`,
        description: `Primary CTA shown in the Fast mode home banner`,
      })),
      (t[1] = d),
      (t[2] = f))
    : ((d = t[1]), (f = t[2]));
  let p;
  t[3] !== r || t[4] !== l || t[5] !== o || t[6] !== s || t[7] !== c
    ? ((p = () => {
        r != null &&
          (s(!0),
          j(l, _, {}),
          c(S(r)?.id ?? `priority`, `home_banner`).finally(() => {
            (o(!0), s(!1));
          }));
      }),
      (t[3] = r),
      (t[4] = l),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== a || t[10] !== p
    ? ((m = { label: f, onClick: p, disabled: a }),
      (t[9] = a),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === i
    ? (h = t[13])
    : ((h = i.formatMessage({
        id: `codex.fastModeHomeBanner.dismissLabel`,
        defaultMessage: `Dismiss Fast mode banner`,
        description: `Accessible label for dismissing the Fast mode home banner`,
      })),
      (t[12] = i),
      (t[13] = h));
  let g;
  t[14] !== l || t[15] !== o
    ? ((g = () => {
        (j(l, b, {}), o(!0));
      }),
      (t[14] = l),
      (t[15] = o),
      (t[16] = g))
    : (g = t[16]);
  let v;
  t[17] !== a || t[18] !== h || t[19] !== g
    ? ((v = { ariaLabel: h, icon: B, onClick: g, disabled: a }),
      (t[17] = a),
      (t[18] = h),
      (t[19] = g),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== n || t[22] !== m || t[23] !== v
      ? ((y = (0, q.jsx)(H, {
          title: u,
          description: n,
          leadingVisual: d,
          primaryAction: m,
          dismissAction: v,
        })),
        (t[21] = n),
        (t[22] = m),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
var hn,
  q,
  gn = e(() => {
    ((hn = p()), y(), k(), F(), V(), ht(), i(), Ee(), M(), n(), (q = P()));
  });
function _n() {
  let e = (0, vn.c)(18),
    t = x(R),
    n = z(),
    { isServiceTierAllowed: r } = Qe(),
    { data: i } = lt(),
    [a, s] = I(bn),
    { modelSettings: c } = ut(),
    { serviceTierSettings: l, setServiceTier: u } = tt(),
    [d, f] = (0, J.useState)(!1),
    p = (0, J.useRef)(!1),
    m = i?.models,
    h;
  e[0] !== c.model || e[1] !== m
    ? ((h = o(m, c.model, re)), (e[0] = c.model), (e[1] = m), (e[2] = h))
    : (h = e[2]);
  let g = h,
    _ = r && g != null && !a && l.selectedServiceTier == null && !l.isLoading,
    { estimate: v, estimateStatus: y } = Ve(_),
    b = !a && _ && y !== `ready` && y !== `failed`,
    S = _ && y === `ready` && v != null,
    C,
    w;
  (e[3] !== S || e[4] !== t
    ? ((C = () => {
        !S || p.current || ((p.current = !0), j(t, Fe, {}));
      }),
      (w = [t, S]),
      (e[3] = S),
      (e[4] = t),
      (e[5] = C),
      (e[6] = w))
    : ((C = e[5]), (w = e[6])),
    (0, J.useEffect)(C, w));
  let T;
  e[7] === v
    ? (T = e[8])
    : ((T =
        v == null
          ? null
          : (0, yn.jsx)(A, {
              ...Re.bodyPersonalized,
              values: {
                threadCountLabel: v.threadCountLabel,
                duration: v.savedDuration,
              },
            })),
      (e[7] = v),
      (e[8] = T));
  let E = T,
    D;
  return (
    e[9] !== E ||
    e[10] !== g ||
    e[11] !== n ||
    e[12] !== S ||
    e[13] !== b ||
    e[14] !== d ||
    e[15] !== s ||
    e[16] !== u
      ? ((D = {
          content: E,
          intl: n,
          isEligible: S,
          isLoading: b,
          isSubmitting: d,
          fastModeModel: g,
          setHasSeenFastModeHomeBanner: s,
          setIsSubmitting: f,
          setServiceTier: u,
        }),
        (e[9] = E),
        (e[10] = g),
        (e[11] = n),
        (e[12] = S),
        (e[13] = b),
        (e[14] = d),
        (e[15] = s),
        (e[16] = u),
        (e[17] = D))
      : (D = e[17]),
    D
  );
}
var vn,
  J,
  yn,
  bn,
  xn = e(() => {
    ((vn = p()),
      y(),
      N(),
      k(),
      (J = t(g(), 1)),
      F(),
      dt(),
      $e(),
      rt(),
      Ee(),
      ct(),
      M(),
      s(),
      n(),
      He(),
      (yn = P()),
      (bn = Oe(`has-seen-fast-mode-home-banner`, !1)));
  });
function Sn() {
  let e = (0, wn.c)(5),
    { hostId: t } = xe(et()),
    n = it(),
    [r] = I(En),
    { data: i, isLoading: a } = Ne(l, t),
    o;
  e[0] === i ? (o = e[1]) : ((o = i?.some(Cn) ?? !1), (e[0] = i), (e[1] = o));
  let s = o,
    c = n && !r && a,
    u = n && !r && !s,
    d;
  return (
    e[2] !== c || e[3] !== u
      ? ((d = { isEligible: u, isLoading: c }),
        (e[2] = c),
        (e[3] = u),
        (e[4] = d))
      : (d = e[4]),
    d
  );
}
function Cn(e) {
  return e.name === Tn && e.enabled;
}
var wn,
  Tn,
  En,
  Dn = e(() => {
    ((wn = p()),
      N(),
      k(),
      nt(),
      st(),
      le(),
      je(),
      s(),
      (Tn = `multi_agent`),
      (En = Oe(`has-seen-multi-agent-composer-banner`, !1)));
  });
function On(e) {
  let t = (0, kn.c)(31),
    { onTryNow: n } = e,
    i = x(R),
    a = z(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { hostId: ke }), (t[0] = o))
    : (o = t[0]);
  let s = T(o),
    [, c] = r(`composer_prefill`),
    [l, u] = I(En),
    [d, f] = (0, Y.useState)(!1),
    p = (0, Y.useRef)(!1),
    m = !l,
    h,
    g;
  if (
    (t[1] !== m || t[2] !== i
      ? ((h = () => {
          !m || p.current || ((p.current = !0), j(i, ie, {}));
        }),
        (g = [i, m]),
        (t[1] = m),
        (t[2] = i),
        (t[3] = h),
        (t[4] = g))
      : ((h = t[3]), (g = t[4])),
    (0, Y.useEffect)(h, g),
    !m)
  )
    return null;
  let _, v, y, b;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(A, {
        id: `codex.multiAgentComposerBanner.title`,
        defaultMessage: `Subagents in Codex`,
        description: `Title shown in the multi-agent composer banner`,
      })),
      (v = (0, X.jsx)(A, {
        id: `codex.multiAgentComposerBanner.body`,
        defaultMessage: `Delegate work to subagents that work in parallel. Note: may increase token usage.`,
        description: `Body shown in the multi-agent composer banner`,
      })),
      (y = (0, X.jsx)(kt, { className: `icon-sm` })),
      (b = (0, X.jsx)(A, {
        id: `codex.multiAgentComposerBanner.cta.primary`,
        defaultMessage: `Try now`,
        description: `Primary CTA shown in the multi-agent composer banner`,
      })),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b))
    : ((_ = t[5]), (v = t[6]), (y = t[7]), (b = t[8]));
  let S;
  t[9] !== a ||
  t[10] !== n ||
  t[11] !== i ||
  t[12] !== c ||
  t[13] !== s ||
  t[14] !== u
    ? ((S = () => {
        f(!0);
        let e = a.formatMessage({
          id: `composer.multiAgentBanner.tryNow.prompt`,
          defaultMessage: `Spawn a subagent to explore this repo.`,
          description: `Prompt inserted when the user clicks Try now on the multi-agent composer banner`,
        });
        (j(i, De, { action: `try_now` }),
          s.mutateAsync({ featureName: An, enabled: !0 }).finally(() => {
            (n ? n() : c({ text: e }), u(!0), f(!1));
          }));
      }),
      (t[9] = a),
      (t[10] = n),
      (t[11] = i),
      (t[12] = c),
      (t[13] = s),
      (t[14] = u),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] !== d || t[17] !== S
    ? ((C = { label: b, onClick: S, disabled: d }),
      (t[16] = d),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] === a
    ? (w = t[20])
    : ((w = a.formatMessage({
        id: `codex.multiAgentComposerBanner.dismissLabel`,
        defaultMessage: `Dismiss subagent banner`,
        description: `Accessible label for dismissing the multi-agent composer banner`,
      })),
      (t[19] = a),
      (t[20] = w));
  let E;
  t[21] !== i || t[22] !== u
    ? ((E = () => {
        (j(i, Pe, {}), u(!0));
      }),
      (t[21] = i),
      (t[22] = u),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== d || t[25] !== w || t[26] !== E
    ? ((D = { ariaLabel: w, icon: B, onClick: E, disabled: d }),
      (t[24] = d),
      (t[25] = w),
      (t[26] = E),
      (t[27] = D))
    : (D = t[27]);
  let O;
  return (
    t[28] !== D || t[29] !== C
      ? ((O = (0, X.jsx)(H, {
          title: _,
          description: v,
          leadingVisual: y,
          primaryAction: C,
          dismissAction: D,
        })),
        (t[28] = D),
        (t[29] = C),
        (t[30] = O))
      : (O = t[30]),
    O
  );
}
var kn,
  Y,
  X,
  An,
  jn = e(() => {
    ((kn = p()),
      y(),
      N(),
      k(),
      (Y = t(g(), 1)),
      F(),
      V(),
      Ot(),
      i(),
      Ee(),
      je(),
      M(),
      C(),
      fe(),
      Dn(),
      (X = P()),
      (An = `multi_agent`));
  });
function Mn(e) {
  let t = (0, Nn.c)(14),
    { onDismiss: n, onOpenGiftCredits: r } = e,
    i = z(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(A, {
        id: `codex.giftCredits.homeBanner.title`,
        defaultMessage: `Give the gift of Codex`,
        description: `Title shown in the Codex home banner promoting gift credits`,
      })),
      (o = (0, Z.jsx)(A, {
        id: `codex.giftCredits.homeBanner.description`,
        defaultMessage: `Send Codex credits to a friend to help them turn their ideas into reality.`,
        description: `Description shown in the Codex home banner promoting gift credits`,
      })),
      (s = (0, Z.jsx)(xt, { className: `icon-sm` })),
      (c = (0, Z.jsx)(A, {
        id: `codex.giftCredits.homeBanner.action`,
        defaultMessage: `Gift credits`,
        description: `Button label that opens the ChatGPT gift credits purchase flow`,
      })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c))
    : ((a = t[0]), (o = t[1]), (s = t[2]), (c = t[3]));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = { label: c, onClick: r }), (t[4] = r), (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u = i.formatMessage({
        id: `codex.giftCredits.homeBanner.dismiss`,
        defaultMessage: `Dismiss gift credits banner`,
        description: `Accessible label for dismissing the Codex gift credits home banner`,
      })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== n || t[9] !== u
    ? ((d = { ariaLabel: u, icon: B, onClick: n }),
      (t[8] = n),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, Z.jsx)(H, {
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: l,
          dismissAction: d,
        })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var Nn,
  Z,
  Pn = e(() => {
    ((Nn = p()), F(), V(), yt(), i(), (Z = P()));
  });
function Fn() {
  let e = (0, In.c)(9),
    t = te(bt),
    [n, r] = I(We),
    [, i] = I(Ue),
    a;
  e[0] !== i || e[1] !== r
    ? ((a = () => {
        (r(!0), i(!0));
      }),
      (e[0] = i),
      (e[1] = r),
      (e[2] = a))
    : (a = e[2]);
  let o = t && !n,
    s;
  e[3] === r
    ? (s = e[4])
    : ((s = () => {
        (r(!0), _t());
      }),
      (e[3] = r),
      (e[4] = s));
  let c;
  return (
    e[5] !== a || e[6] !== o || e[7] !== s
      ? ((c = { dismiss: a, isEligible: o, isLoading: !1, openGiftCredits: s }),
        (e[5] = a),
        (e[6] = o),
        (e[7] = s),
        (e[8] = c))
      : (c = e[8]),
    c
  );
}
var In,
  Ln = e(() => {
    ((In = p()), N(), Se(), vt(), Ke());
  });
function Rn(e) {
  for (let [t, n] of e.entries()) {
    if (n.isEligible) return t;
    if (n.isLoading) return;
  }
  return null;
}
function zn({ entries: e }) {
  let t = (0, Hn.useRef)(void 0),
    n = t.current;
  if (n === void 0) {
    let r = Rn(e);
    r !== void 0 && ((t.current = r), (n = r));
  }
  if (n == null) return null;
  let r = e[n];
  return r == null || r.isLoading || !r.isEligible || r.content == null
    ? null
    : (0, Un.jsx)(Bn, { children: r.content });
}
function Bn(e) {
  let t = (0, Vn.c)(5),
    { children: n } = e,
    r = x(R),
    i,
    a;
  (t[0] === r
    ? ((i = t[1]), (a = t[2]))
    : ((i = () => (
        r.set(Ct, !0),
        () => {
          r.set(Ct, !1);
        }
      )),
      (a = [r]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a)),
    (0, Hn.useLayoutEffect)(i, a));
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, Un.jsx)(Un.Fragment, { children: n })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
var Vn,
  Hn,
  Un,
  Wn = e(() => {
    ((Vn = p()), k(), (Hn = t(g(), 1)), St(), M(), (Un = P()));
  });
function Gn(e) {
  let t = (0, Jn.c)(6),
    { availableCount: n, onDismiss: r } = e,
    i = x(R),
    a;
  t[0] !== n || t[1] !== i
    ? ((a = () => {
        Ae(i, Ze, {
          initialAvailableCount: n,
          isRateLimitReached: !1,
          onResetComplete: Kn,
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== r || t[4] !== a
      ? ((o = (0, Q.jsx)(qn, { onDismiss: r, onSeeResets: a })),
        (t[3] = r),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Kn() {}
function qn(e) {
  let t = (0, Jn.c)(14),
    { onDismiss: n, onSeeResets: r } = e,
    i = z(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(A, {
        id: `codex.rateLimitResetHomeBanner.title`,
        defaultMessage: `You have a new rate limit reset available`,
        description: `Title shown in the home banner when a Codex rate limit reset credit is available`,
      })),
      (o = (0, Q.jsx)(A, {
        id: `codex.rateLimitResetHomeBanner.description`,
        defaultMessage: `You were granted a rate limit reset that will expire in 30 days.`,
        description: `Description shown in the home banner when a Codex rate limit reset credit is available`,
      })),
      (s = (0, Q.jsx)(O, { className: `size-8` })),
      (c = (0, Q.jsx)(A, {
        id: `codex.rateLimitResetHomeBanner.seeResets`,
        defaultMessage: `See resets`,
        description: `Button label that opens the available Codex rate limit resets modal`,
      })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c))
    : ((a = t[0]), (o = t[1]), (s = t[2]), (c = t[3]));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = { label: c, onClick: r }), (t[4] = r), (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u = i.formatMessage({
        id: `codex.rateLimitResetHomeBanner.dismiss`,
        defaultMessage: `Dismiss rate limit reset banner`,
        description: `Accessible label for dismissing the Codex rate limit reset home banner`,
      })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== n || t[9] !== u
    ? ((d = { ariaLabel: u, icon: B, onClick: n }),
      (t[8] = n),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, Q.jsx)(H, {
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: l,
          dismissAction: d,
        })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var Jn,
  Q,
  Yn = e(() => {
    ((Jn = p()), k(), F(), w(), V(), f(), i(), qe(), M(), (Q = P()));
  });
function Xn() {
  let e = (0, Zn.c)(13),
    t = x(R),
    { accountId: n, isLoading: r } = me(),
    { data: i, isLoading: o } = pe(),
    s = Ce(),
    c = a($n),
    { data: l, isLoading: u } = a(ce),
    d = l?.rate_limit_reset_credits?.available_count ?? 0,
    f = l ?? null,
    p;
  e[0] === f ? (p = e[1]) : ((p = Xe(f)), (e[0] = f), (e[1] = p));
  let m = p,
    h;
  e[2] !== i || e[3] !== s
    ? ((h = Ie(s, { currentAccount: i, disableExposureLog: !0 })),
      (e[2] = i),
      (e[3] = s),
      (e[4] = h))
    : (h = e[4]);
  let { config: g } = h,
    _ = n == null ? null : c?.[n],
    v = Date.now(),
    y;
  e[5] !== n || e[6] !== t
    ? ((y = () => {
        n != null &&
          t.set($n, (e) => ({ ...e, [n]: { dismissedAtMs: Date.now() } }));
      }),
      (e[5] = n),
      (e[6] = t),
      (e[7] = y))
    : (y = e[7]);
  let b =
      n != null &&
      d > 0 &&
      m != null &&
      m.remainingPercent <= g.remainingThresholdPercent &&
      (_ == null || v - _.dismissedAtMs >= Qn),
    S = r || o || (l == null && u),
    C;
  return (
    e[8] !== d || e[9] !== y || e[10] !== b || e[11] !== S
      ? ((C = { availableCount: d, dismiss: y, isEligible: b, isLoading: S }),
        (e[8] = d),
        (e[9] = y),
        (e[10] = b),
        (e[11] = S),
        (e[12] = C))
      : (C = e[12]),
    C
  );
}
var Zn,
  Qn,
  $n,
  er = e(() => {
    ((Zn = p()),
      k(),
      ae(),
      c(),
      Te(),
      Je(),
      M(),
      Le(),
      Se(),
      d(),
      (Qn = 1440 * 60 * 1e3),
      ($n = h(
        `rate-limit-reset-home-announcement-dismissal-by-account-id`,
        {},
      )));
  });
function tr() {
  let e = (0, ir.c)(10),
    t = ye(),
    n = ge(mt),
    r;
  e[0] !== n || e[1] !== t.pathname
    ? ((r = ft({
        hideFirstNewThreadOnboardingPromos: n,
        pathname: t.pathname,
      })),
      (e[0] = n),
      (e[1] = t.pathname),
      (e[2] = r))
    : (r = e[2]);
  let i = r,
    a;
  e[3] === i
    ? (a = e[4])
    : ((a = (0, $.jsx)(se, {
        electron: !0,
        children: (0, $.jsx)(nr, { shouldHideOnboardingPromos: i }),
      })),
      (e[3] = i),
      (e[4] = a));
  let o;
  e[5] === i
    ? (o = e[6])
    : ((o = (0, $.jsx)(se, {
        extension: !0,
        children: (0, $.jsx)(rr, { shouldHideOnboardingPromos: i }),
      })),
      (e[5] = i),
      (e[6] = o));
  let s;
  return (
    e[7] !== a || e[8] !== o
      ? ((s = (0, $.jsxs)($.Fragment, { children: [a, o] })),
        (e[7] = a),
        (e[8] = o),
        (e[9] = s))
      : (s = e[9]),
    s
  );
}
function nr(e) {
  let t = (0, ir.c)(38),
    { shouldHideOnboardingPromos: n } = e,
    r = Xn(),
    i = Fn(),
    a = Ht(),
    o = Sn(),
    s = _n(),
    c = !a.shouldSuppressVanillaPromos,
    l = !n && i.isEligible,
    u = !n && i.isLoading,
    d;
  t[0] !== i.dismiss || t[1] !== i.isEligible || t[2] !== i.openGiftCredits
    ? ((d = i.isEligible
        ? (0, $.jsx)(Mn, {
            onDismiss: i.dismiss,
            onOpenGiftCredits: i.openGiftCredits,
          })
        : null),
      (t[0] = i.dismiss),
      (t[1] = i.isEligible),
      (t[2] = i.openGiftCredits),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== l || t[5] !== u || t[6] !== d
    ? ((f = { isEligible: l, isLoading: u, content: d }),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== r.availableCount || t[9] !== r.dismiss
    ? ((p = (0, $.jsx)(Gn, {
        availableCount: r.availableCount,
        onDismiss: r.dismiss,
      })),
      (t[8] = r.availableCount),
      (t[9] = r.dismiss),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== r.isEligible || t[12] !== r.isLoading || t[13] !== p
    ? ((m = { isEligible: r.isEligible, isLoading: r.isLoading, content: p }),
      (t[11] = r.isEligible),
      (t[12] = r.isLoading),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h = !n && a.isEligible,
    g = !n && a.isLoading,
    _;
  t[15] !== a.accountId || t[16] !== a.beacon
    ? ((_ =
        a.beacon != null && a.accountId != null
          ? (0, $.jsx)(Qt, { accountId: a.accountId, beacon: a.beacon })
          : null),
      (t[15] = a.accountId),
      (t[16] = a.beacon),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== h || t[19] !== g || t[20] !== _
    ? ((v = { isEligible: h, isLoading: g, content: _ }),
      (t[18] = h),
      (t[19] = g),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y = !n && c && o.isEligible,
    b = !n && c && o.isLoading,
    x;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(On, {})), (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== y || t[24] !== b
    ? ((S = { isEligible: y, isLoading: b, content: x }),
      (t[23] = y),
      (t[24] = b),
      (t[25] = S))
    : (S = t[25]);
  let C = !n && c && s.isEligible,
    w = !n && c && s.isLoading,
    T;
  t[26] === s
    ? (T = t[27])
    : ((T = s.content == null ? null : (0, $.jsx)(mn, { ...s })),
      (t[26] = s),
      (t[27] = T));
  let E;
  t[28] !== C || t[29] !== w || t[30] !== T
    ? ((E = { isEligible: C, isLoading: w, content: T }),
      (t[28] = C),
      (t[29] = w),
      (t[30] = T),
      (t[31] = E))
    : (E = t[31]);
  let D;
  return (
    t[32] !== v || t[33] !== S || t[34] !== E || t[35] !== f || t[36] !== m
      ? ((D = (0, $.jsx)(zn, { entries: [f, m, v, S, E] })),
        (t[32] = v),
        (t[33] = S),
        (t[34] = E),
        (t[35] = f),
        (t[36] = m),
        (t[37] = D))
      : (D = t[37]),
    D
  );
}
function rr(e) {
  let t = (0, ir.c)(21),
    { shouldHideOnboardingPromos: n } = e,
    r = un(),
    i = Sn(),
    a = _n(),
    o = !n && r.isEligible,
    s = !n && r.isLoading,
    c;
  t[0] !== r.message || t[1] !== r.setHasSeenAppUpsellBanner
    ? ((c =
        r.message == null
          ? null
          : (0, $.jsx)(on, {
              message: r.message,
              setHasSeenAppUpsellBanner: r.setHasSeenAppUpsellBanner,
            })),
      (t[0] = r.message),
      (t[1] = r.setHasSeenAppUpsellBanner),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== o || t[4] !== s || t[5] !== c
    ? ((l = { isEligible: o, isLoading: s, content: c }),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u = !n && i.isEligible,
    d = !n && i.isLoading,
    f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(On, {})), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = { isEligible: u, isLoading: d, content: f }),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = !n && a.isEligible,
    h = !n && a.isLoading,
    g;
  t[11] === a
    ? (g = t[12])
    : ((g = a.content == null ? null : (0, $.jsx)(mn, { ...a })),
      (t[11] = a),
      (t[12] = g));
  let _;
  t[13] !== h || t[14] !== g || t[15] !== m
    ? ((_ = { isEligible: m, isLoading: h, content: g }),
      (t[13] = h),
      (t[14] = g),
      (t[15] = m),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== _ || t[18] !== l || t[19] !== p
      ? ((v = (0, $.jsx)(zn, { entries: [l, p, _] })),
        (t[17] = _),
        (t[18] = l),
        (t[19] = p),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var ir,
  $,
  ar = e(() => {
    ((ir = p()),
      N(),
      m(),
      an(),
      Zt(),
      cn(),
      pn(),
      gn(),
      xn(),
      he(),
      jn(),
      Dn(),
      Pn(),
      Ln(),
      Wn(),
      pt(),
      Yn(),
      er(),
      ($ = P()));
  });
export { ar as n, tr as t };
//# sourceMappingURL=home-announcements-DSRdmSz4.js.map
