import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AB as n,
  Af as r,
  Cb as i,
  Df as a,
  Hm as o,
  I2 as s,
  KJ as c,
  L2 as l,
  Mq as u,
  Nq as d,
  Of as f,
  PB as p,
  S0 as m,
  SK as h,
  Um as g,
  _0 as _,
  _D as v,
  _Y as y,
  bI as b,
  bK as x,
  bf as S,
  cS as C,
  cY as w,
  gD as T,
  hD as E,
  k2 as D,
  kB as O,
  kb as k,
  kf as A,
  lS as j,
  mD as M,
  mY as N,
  mf as ee,
  ov as P,
  qJ as te,
  rG as F,
  sG as ne,
  sY as re,
  sv as ie,
  vI as I,
  yY as ae,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Co as L,
  Eo as R,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import { n as oe, t as se } from "./color-icon-D1fH4nFu.js";
import {
  i as z,
  r as B,
} from "./app-initial~app-main~codex-micro-settings-Cw5XeQHu.js";
import {
  B as ce,
  N as le,
  P as ue,
  R as de,
  U as fe,
  V,
  W as pe,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~new-thread-panel-page~onboardi~lxr449xn-CwhAsMMf.js";
import {
  a as H,
  b as me,
  c as U,
  f as he,
  i as ge,
  o as W,
  r as _e,
  x as ve,
} from "./app-initial~app-main~new-thread-panel-page~pricing-plan-page~appgen-library-page~hotkey-win~ksix5pu6-Chm5vhV9.js";
import {
  a as ye,
  i as G,
  n as be,
  o as xe,
  r as K,
  s as q,
  t as J,
} from "./subscription-update-plan-BoDyWZVl.js";
import { r as Y, t as X } from "./plan-pricing-vmbBGPZd.js";
function Se(e) {
  let t = (0, Z.c)(96),
    {
      currentPlan: n,
      defaultTab: r,
      loadingTargetPlan: i,
      pricingInfo: o,
      getPlansUrl: s,
      onCtaClick: l,
      onOpenChange: u,
      onOpenUrl: d,
      open: p,
    } = e,
    m = r === void 0 ? `personal` : r,
    h = i === void 0 ? null : i,
    g = ae(),
    [_, v] = (0, Q.useState)(m),
    [b, x] = (0, Q.useState)(n === P.PRO ? P.PRO : P.PROLITE),
    S = n === P.GO || n === P.PLUS || n === P.PROLITE || n === P.PRO,
    C;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(A, {
        className: `text-lg font-medium`,
        children: (0, $.jsx)(y, {
          id: `settings.usage.upgradePlan.title`,
          defaultMessage: `Upgrade plan`,
          description: `Title for the plan upgrade dialog`,
        }),
      })),
      (t[0] = C))
    : (C = t[0]);
  let w;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(f, {
        className: `sr-only`,
        children: (0, $.jsx)(y, {
          id: `settings.usage.upgradePlan.description`,
          defaultMessage: `Compare personal and business plans`,
          description: `Screen reader description for the plan upgrade dialog`,
        }),
      })),
      (t[1] = w))
    : (w = t[1]);
  let T;
  t[2] === g
    ? (T = t[3])
    : ((T = g.formatMessage({
        id: `settings.usage.upgradePlan.tabs.ariaLabel`,
        defaultMessage: `Choose plan category`,
        description: `Aria label for the plan category toggle`,
      })),
      (t[2] = g),
      (t[3] = T));
  let E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = {
        id: `personal`,
        label: (0, $.jsx)(y, {
          id: `settings.usage.upgradePlan.tabs.personal`,
          defaultMessage: `Personal`,
          description: `Label for personal plans tab`,
        }),
      }),
      (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = [
        E,
        {
          id: `business`,
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.tabs.business`,
            defaultMessage: `Business`,
            description: `Label for business plans tab`,
          }),
        },
      ]),
      (t[5] = D))
    : (D = t[5]);
  let O;
  t[6] !== T || t[7] !== _
    ? ((O = (0, $.jsx)(xe, {
        ariaLabel: T,
        className: `w-fit`,
        selectedId: _,
        onSelect: v,
        options: D,
      })),
      (t[6] = T),
      (t[7] = _),
      (t[8] = O))
    : (O = t[8]);
  let k = _ !== `personal`,
    j = _ !== `personal` && `invisible pointer-events-none`,
    M;
  t[9] === j
    ? (M = t[10])
    : ((M = c(`col-start-1 row-start-1 grid gap-2.5 md:grid-cols-3`, j)),
      (t[9] = j),
      (t[10] = M));
  let N;
  t[11] !== n ||
  t[12] !== s ||
  t[13] !== g ||
  t[14] !== l ||
  t[15] !== d ||
  t[16] !== o ||
  t[17] !== S
    ? ((N = S
        ? null
        : (0, $.jsx)(we, {
            currentPlan: n,
            targetPlan: P.FREE,
            price: je({ intl: g, pricingInfo: o, plan: P.FREE }),
            title: (0, $.jsx)(y, {
              id: `settings.usage.upgradePlan.personal.free.title`,
              defaultMessage: `Free`,
              description: `Title for the Free personal plan card`,
            }),
            features: [
              {
                icon: (0, $.jsx)(Ne, {}),
                label: (0, $.jsx)(y, {
                  id: `settings.usage.upgradePlan.personal.free.usage`,
                  defaultMessage: `Limited Codex usage`,
                  description: `Usage feature on the Free personal plan card`,
                }),
              },
              {
                icon: (0, $.jsx)(Pe, {}),
                label: (0, $.jsx)(y, {
                  id: `settings.usage.upgradePlan.personal.free.model`,
                  defaultMessage: `GPT-5.3`,
                  description: `Model feature on the Free personal plan card`,
                }),
              },
            ],
            getPlansUrl: s,
            onCtaClick: l,
            onOpenUrl: d,
          })),
      (t[11] = n),
      (t[12] = s),
      (t[13] = g),
      (t[14] = l),
      (t[15] = d),
      (t[16] = o),
      (t[17] = S),
      (t[18] = N))
    : (N = t[18]);
  let te = h === P.PLUS,
    F;
  t[19] !== g || t[20] !== o
    ? ((F = je({ intl: g, pricingInfo: o, plan: P.PLUS })),
      (t[19] = g),
      (t[20] = o),
      (t[21] = F))
    : (F = t[21]);
  let ne, re;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.personal.plus.title`,
        defaultMessage: `Plus`,
        description: `Title for the Plus personal plan card`,
      })),
      (re = [
        {
          icon: (0, $.jsx)(Ne, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.personal.plus.usage`,
            defaultMessage: `Enhanced Codex usage`,
            description: `Usage feature on the Plus personal plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Pe, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.personal.plus.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the Plus personal plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Fe, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.personal.plus.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the Plus personal plan card`,
          }),
        },
      ]),
      (t[22] = ne),
      (t[23] = re))
    : ((ne = t[22]), (re = t[23]));
  let ie;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.more.plus`,
        defaultMessage: `View more details for Plus plan`,
        description: `Screen reader label for the Plus plan details link`,
      })),
      (t[24] = ie))
    : (ie = t[24]);
  let I;
  t[25] !== n ||
  t[26] !== s ||
  t[27] !== l ||
  t[28] !== d ||
  t[29] !== te ||
  t[30] !== F
    ? ((I = (0, $.jsx)(we, {
        currentPlan: n,
        isLoading: te,
        targetPlan: P.PLUS,
        price: F,
        title: ne,
        features: re,
        getPlansUrl: s,
        onCtaClick: l,
        onOpenUrl: d,
        planDetailsLabel: ie,
      })),
      (t[25] = n),
      (t[26] = s),
      (t[27] = l),
      (t[28] = d),
      (t[29] = te),
      (t[30] = F),
      (t[31] = I))
    : (I = t[31]);
  let L;
  t[32] !== n ||
  t[33] !== s ||
  t[34] !== g ||
  t[35] !== h ||
  t[36] !== l ||
  t[37] !== d ||
  t[38] !== o ||
  t[39] !== b ||
  t[40] !== S
    ? ((L = S
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(we, {
                currentPlan: n,
                isLoading: h === P.PROLITE,
                targetPlan: P.PROLITE,
                price: je({ intl: g, pricingInfo: o, plan: P.PROLITE }),
                title: (0, $.jsx)(Ee, {
                  tier: (0, $.jsx)(y, {
                    id: `settings.usage.upgradePlan.personal.proLite.tier`,
                    defaultMessage: `5x`,
                    description: `Tier suffix for the Pro 5x personal plan card`,
                  }),
                }),
                features: De(P.PROLITE),
                getPlansUrl: s,
                onCtaClick: l,
                onOpenUrl: d,
                planDetailsLabel: (0, $.jsx)(Oe, { plan: P.PROLITE }),
              }),
              (0, $.jsx)(we, {
                currentPlan: n,
                isLoading: h === P.PRO,
                targetPlan: P.PRO,
                price: je({ intl: g, pricingInfo: o, plan: P.PRO }),
                title: (0, $.jsx)(Ee, {
                  tier: (0, $.jsx)(y, {
                    id: `settings.usage.upgradePlan.personal.pro.tier`,
                    defaultMessage: `20x`,
                    description: `Tier suffix for the Pro 20x personal plan card`,
                  }),
                }),
                features: De(P.PRO),
                getPlansUrl: s,
                onCtaClick: l,
                onOpenUrl: d,
                planDetailsLabel: (0, $.jsx)(Oe, { plan: P.PRO }),
              }),
            ],
          })
        : (0, $.jsx)(we, {
            currentPlan: n,
            isLoading: h === b,
            targetPlan: b,
            price: je({ intl: g, pricingInfo: o, plan: b }),
            title: (0, $.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4`,
              children: [
                (0, $.jsx)(y, {
                  id: `settings.usage.upgradePlan.personal.pro.title`,
                  defaultMessage: `Pro`,
                  description: `Title for the Pro personal plan card`,
                }),
                (0, $.jsx)(xe, {
                  ariaLabel: g.formatMessage({
                    id: `settings.usage.upgradePlan.personal.proTier.ariaLabel`,
                    defaultMessage: `Choose Pro plan tier`,
                    description: `Aria label for the Pro tier toggle`,
                  }),
                  className: `shrink-0`,
                  selectedId: b,
                  onSelect: x,
                  options: [
                    {
                      id: P.PROLITE,
                      label: (0, $.jsx)(y, {
                        id: `settings.usage.upgradePlan.personal.proTier.fiveX`,
                        defaultMessage: `5x`,
                        description: `Label for the Pro 5x tier toggle`,
                      }),
                    },
                    {
                      id: P.PRO,
                      label: (0, $.jsx)(y, {
                        id: `settings.usage.upgradePlan.personal.proTier.twentyX`,
                        defaultMessage: `20x`,
                        description: `Label for the Pro 20x tier toggle`,
                      }),
                    },
                  ],
                }),
              ],
            }),
            features: De(b),
            getPlansUrl: s,
            onCtaClick: l,
            onOpenUrl: d,
            planDetailsLabel: (0, $.jsx)(Oe, { plan: b }),
          })),
      (t[32] = n),
      (t[33] = s),
      (t[34] = g),
      (t[35] = h),
      (t[36] = l),
      (t[37] = d),
      (t[38] = o),
      (t[39] = b),
      (t[40] = S),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] !== M || t[43] !== N || t[44] !== I || t[45] !== L || t[46] !== k
    ? ((R = (0, $.jsxs)(`div`, {
        "aria-hidden": k,
        className: M,
        children: [N, I, L],
      })),
      (t[42] = M),
      (t[43] = N),
      (t[44] = I),
      (t[45] = L),
      (t[46] = k),
      (t[47] = R))
    : (R = t[47]);
  let oe = _ !== `business`,
    se = _ !== `business` && `invisible pointer-events-none`,
    z;
  t[48] === se
    ? (z = t[49])
    : ((z = c(`col-start-1 row-start-1 grid gap-2.5 md:grid-cols-2`, se)),
      (t[48] = se),
      (t[49] = z));
  let B, ce, de, fe, V, pe;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.codex.title`,
        defaultMessage: `Business`,
        description: `Title for the Codex Business plan card`,
      })),
      (ce = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.codex.subtitle`,
        defaultMessage: `Codex`,
        description: `Subtitle for the Codex Business plan card`,
      })),
      (de = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.codex.price`,
        defaultMessage: `Usage pricing`,
        description: `Price label for the Codex Business plan card`,
      })),
      (fe = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.codex.description`,
        defaultMessage: `No fixed seat. Pay as you go based on usage`,
        description: `Description for the Codex Business plan card`,
      })),
      (V = [
        {
          icon: (0, $.jsx)(Ne, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.codex.usage`,
            defaultMessage: `Pay-as-you-go usage`,
            description: `Usage feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Pe, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.codex.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Fe, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.codex.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Ie, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.codex.security`,
            defaultMessage: `Enhanced security and admin controls`,
            description: `Security feature on the Codex Business plan card`,
          }),
        },
      ]),
      (pe = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.addWorkspace`,
        defaultMessage: `Add Business workspace`,
        description: `CTA to add a business workspace`,
      })),
      (t[50] = B),
      (t[51] = ce),
      (t[52] = de),
      (t[53] = fe),
      (t[54] = V),
      (t[55] = pe))
    : ((B = t[50]),
      (ce = t[51]),
      (de = t[52]),
      (fe = t[53]),
      (V = t[54]),
      (pe = t[55]));
  let H;
  t[56] === d
    ? (H = t[57])
    : ((H = (e) => {
        d(ue, P.SELF_SERVE_BUSINESS_USAGE_BASED, e);
      }),
      (t[56] = d),
      (t[57] = H));
  let me;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.more.businessCodex`,
        defaultMessage: `View more details for Business Codex plan`,
        description: `Screen reader label for the Business Codex plan details link`,
      })),
      (t[58] = me))
    : (me = t[58]);
  let U;
  t[59] !== s || t[60] !== l || t[61] !== d || t[62] !== H
    ? ((U = (0, $.jsx)(Te, {
        title: B,
        subtitle: ce,
        priceLabel: de,
        description: fe,
        features: V,
        cta: pe,
        onClick: H,
        targetPlan: P.SELF_SERVE_BUSINESS_USAGE_BASED,
        getPlansUrl: s,
        onCtaClick: l,
        onOpenUrl: d,
        planDetailsLabel: me,
      })),
      (t[59] = s),
      (t[60] = l),
      (t[61] = d),
      (t[62] = H),
      (t[63] = U))
    : (U = t[63]);
  let he, ge;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.team.title`,
        defaultMessage: `Business`,
        description: `Title for the ChatGPT and Codex Business plan card`,
      })),
      (ge = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.team.subtitle`,
        defaultMessage: `ChatGPT & Codex`,
        description: `Subtitle for the ChatGPT and Codex Business plan card`,
      })),
      (t[64] = he),
      (t[65] = ge))
    : ((he = t[64]), (ge = t[65]));
  let W;
  t[66] !== g || t[67] !== o
    ? ((W = Me({ intl: g, pricingInfo: o })),
      (t[66] = g),
      (t[67] = o),
      (t[68] = W))
    : (W = t[68]);
  let _e, ve, ye;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.team.description`,
        defaultMessage: `When billed annually. Minimum of 2 users`,
        description: `Description for the ChatGPT and Codex Business plan card`,
      })),
      (ve = [
        {
          icon: (0, $.jsx)(Ne, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.team.usage`,
            defaultMessage: `Enhanced Codex usage`,
            description: `Usage feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Pe, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.team.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Fe, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.team.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Ie, {}),
          label: (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.business.team.security`,
            defaultMessage: `Enhanced security and admin controls`,
            description: `Security feature on the ChatGPT and Codex Business plan card`,
          }),
        },
      ]),
      (ye = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.addWorkspace`,
        defaultMessage: `Add Business workspace`,
        description: `CTA to add a business workspace`,
      })),
      (t[69] = _e),
      (t[70] = ve),
      (t[71] = ye))
    : ((_e = t[69]), (ve = t[70]), (ye = t[71]));
  let G;
  t[72] === d
    ? (G = t[73])
    : ((G = (e) => {
        d(le, P.SELF_SERVE_BUSINESS, e);
      }),
      (t[72] = d),
      (t[73] = G));
  let be;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.more.businessTeam`,
        defaultMessage: `View more details for Business ChatGPT and Codex plan`,
        description: `Screen reader label for the Business ChatGPT and Codex plan details link`,
      })),
      (t[74] = be))
    : (be = t[74]);
  let K;
  t[75] !== s || t[76] !== l || t[77] !== d || t[78] !== W || t[79] !== G
    ? ((K = (0, $.jsx)(Te, {
        title: he,
        subtitle: ge,
        priceLabel: W,
        description: _e,
        features: ve,
        cta: ye,
        onClick: G,
        targetPlan: P.SELF_SERVE_BUSINESS,
        getPlansUrl: s,
        onCtaClick: l,
        onOpenUrl: d,
        planDetailsLabel: be,
      })),
      (t[75] = s),
      (t[76] = l),
      (t[77] = d),
      (t[78] = W),
      (t[79] = G),
      (t[80] = K))
    : (K = t[80]);
  let q;
  t[81] !== oe || t[82] !== z || t[83] !== U || t[84] !== K
    ? ((q = (0, $.jsxs)(`div`, {
        "aria-hidden": oe,
        className: z,
        children: [U, K],
      })),
      (t[81] = oe),
      (t[82] = z),
      (t[83] = U),
      (t[84] = K),
      (t[85] = q))
    : (q = t[85]);
  let J;
  t[86] !== R || t[87] !== q
    ? ((J = (0, $.jsxs)(`div`, { className: `grid`, children: [R, q] })),
      (t[86] = R),
      (t[87] = q),
      (t[88] = J))
    : (J = t[88]);
  let Y;
  t[89] !== J || t[90] !== O
    ? ((Y = (0, $.jsxs)(ee, {
        className: `max-h-[calc(100vh-2rem)] gap-3 overflow-y-auto px-5 py-4 [--pricing-plan-highlight:#635ef4]`,
        children: [C, w, O, J],
      })),
      (t[89] = J),
      (t[90] = O),
      (t[91] = Y))
    : (Y = t[91]);
  let X;
  return (
    t[92] !== u || t[93] !== p || t[94] !== Y
      ? ((X = (0, $.jsx)(a, {
          open: p,
          onOpenChange: u,
          contentClassName: `!w-[min(800px,calc(100vw-2rem))]`,
          children: Y,
        })),
        (t[92] = u),
        (t[93] = p),
        (t[94] = Y),
        (t[95] = X))
      : (X = t[95]),
    X
  );
}
function Ce({ currentPlan: e, defaultTab: t, onClose: r, source: i }) {
  let a = m(re),
    o = ae(),
    s = a.queryClient,
    { email: c } = j(),
    l = ne(),
    { data: u } = k(),
    [d, f] = (0, Q.useState)(null),
    [p, g] = (0, Q.useState)(null),
    [_, y] = (0, Q.useState)(!1),
    { data: x } = U({ enabled: !0 }),
    { data: S } = he({ billingCurrency: x, enabled: !0 }),
    C = pe({ logExposure: !1 }),
    w = u?.plan_type;
  ((0, Q.useEffect)(() => {
    w != null && w !== e.toString() && r();
  }, [e, w, r]),
    (0, Q.useEffect)(() => {
      b(a, n, { defaultTab: t, source: i });
    }, [t, a, i]));
  let D = (e, t) => {
      if (t != null) {
        T({ event: t, href: e, initiator: `open_in_browser_bridge` });
        return;
      }
      v({ href: e, initiator: `open_in_browser_bridge` });
    },
    A = async (t, n, r) => {
      let i = me({ loginHint: c, statsigClient: l, url: t });
      if (E(r)) {
        D(i, r);
        return;
      }
      if (
        u == null ||
        e === P.FREE ||
        (n !== P.PLUS && n !== P.PROLITE && n !== P.PRO)
      ) {
        D(i, r);
        return;
      }
      let a = J(n),
        o = e === P.GO,
        d = e === P.PLUS && (n === P.PROLITE || n === P.PRO),
        p = e === P.PRO && n === P.PROLITE,
        m = e === P.PROLITE && n === P.PRO;
      if (!o && !d && !p && !m) {
        D(i, r);
        return;
      }
      g(n);
      try {
        let e = await s.fetchQuery(H({ accountId: u.id, updatedPlan: a }));
        if (p) {
          f({
            kind: `scheduled_downgrade`,
            preview: e,
            updatedPlan: `chatgptprolite`,
            webUrl: i,
          });
          return;
        }
        let t = e.default_payment_method;
        if (
          !t?.card_last4?.trim() ||
          S?.minorUnitExponent == null ||
          S.currencyCode.toUpperCase() !== e.currency.toUpperCase()
        ) {
          D(i, r);
          return;
        }
        f({
          kind: `saved_card_upgrade`,
          minorUnitExponent: S.minorUnitExponent,
          paymentMethod: t,
          preview: e,
          updatedPlan: a,
          webUrl: i,
        });
      } catch {
        D(i, r);
      } finally {
        g(null);
      }
    },
    M = (e) => {
      d != null &&
        b(a, O, {
          ctaAction: e,
          modalType: d.kind,
          source: i,
          targetPlan: be(d.updatedPlan),
        });
    },
    N = async () => {
      if (!(d == null || u == null)) {
        y(!0);
        try {
          let e = await W({ accountId: u.id, updatedPlan: d.updatedPlan });
          if (e.status == null || e.status === `pending`) {
            (f(null),
              e.status == null &&
                d.kind === `saved_card_upgrade` &&
                (a.get(h).success(
                  o.formatMessage({
                    id: `settings.usage.pricingPlanPage.subscriptionUpdate.upgradeSucceeded`,
                    defaultMessage: `Successfully upgraded plan`,
                    description: `Toast shown after a plan upgrade succeeds`,
                  }),
                ),
                r()),
              await Promise.all([
                s.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                s.invalidateQueries({ queryKey: [`rate-limit-status`] }),
              ]));
            return;
          }
          (await _e({ accountId: u.id }), D(d.webUrl), f(null));
        } catch {
          (D(d.webUrl), f(null));
        } finally {
          y(!1);
        }
      }
    };
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(Se, {
        open: d == null,
        currentPlan: e,
        defaultTab: t,
        loadingTargetPlan: p,
        pricingInfo: S ?? null,
        getPlansUrl: C,
        onCtaClick: (e, t) => {
          (t === P.SELF_SERVE_BUSINESS_USAGE_BASED &&
            R(a, {
              audience: `workspace`,
              checkoutKind: `codex_team`,
              entryPoint: `upgrade_plan_modal`,
            }),
            b(a, O, { ctaAction: e, source: i, targetPlan: t }));
        },
        onOpenChange: (e) => {
          !e && d == null && r();
        },
        onOpenUrl: (e, t, n) => {
          A(e, t, n);
        },
      }),
      d == null
        ? null
        : (0, $.jsx)(G, {
            isUpdating: _,
            pricingInfo: S ?? null,
            subscriptionUpdate: d,
            onCancel: () => {
              (M(`cancel`), f(null));
            },
            onConfirm: () => {
              (M(
                d.kind === `saved_card_upgrade` &&
                  d.preview.amount_due.amount > 0
                  ? `pay_now`
                  : `confirm`,
              ),
                N());
            },
            onGoToWeb: (e) => {
              (M(`go_to_web`), D(d.webUrl, e), f(null));
            },
            onOpenChange: (e) => {
              e || (M(`dismiss`), _ || f(null));
            },
          }),
    ],
  });
}
function we(e) {
  let t = (0, Z.c)(32),
    {
      currentPlan: n,
      features: r,
      getPlansUrl: i,
      isLoading: a,
      onCtaClick: o,
      onOpenUrl: s,
      planDetailsLabel: c,
      price: l,
      targetPlan: d,
      title: f,
    } = e,
    p = a === void 0 ? !1 : a,
    m;
  t[0] !== n || t[1] !== d
    ? ((m = de({ currentPlan: n, targetPlan: d })),
      (t[0] = n),
      (t[1] = d),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] !== n || t[4] !== d
    ? ((g = ce({ currentPlan: n, targetPlan: d })),
      (t[3] = n),
      (t[4] = d),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v = (n === P.GO && d === P.PLUS) || (n === P.PLUS && d === P.PROLITE),
    b;
  t[6] !== i || t[7] !== s || t[8] !== c
    ? ((b =
        c == null
          ? null
          : (0, $.jsx)(Ae, { detailsLabel: c, getPlansUrl: i, onOpenUrl: s })),
      (t[6] = i),
      (t[7] = s),
      (t[8] = c),
      (t[9] = b))
    : (b = t[9]);
  let x = h === `upgrade` ? `primary` : `outline`,
    S = h === `current`,
    C;
  t[10] !== h || t[11] !== o || t[12] !== s || t[13] !== d || t[14] !== _
    ? ((C = (e) => {
        _ == null || h === `current` || (o(h, d), s(_, d, e));
      }),
      (t[10] = h),
      (t[11] = o),
      (t[12] = s),
      (t[13] = d),
      (t[14] = _),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== h || t[17] !== p
    ? ((w = p
        ? (0, $.jsx)(y, {
            id: `settings.usage.upgradePlan.loadingPlanChange`,
            defaultMessage: `Loading…`,
            description: `Label shown in an upgrade plan button while loading its confirmation dialog`,
          })
        : h === `current`
          ? (0, $.jsx)(y, {
              id: `settings.usage.upgradePlan.current`,
              defaultMessage: `Current plan`,
              description: `Disabled CTA label for the user's current plan`,
            })
          : h === `downgrade`
            ? (0, $.jsx)(y, {
                id: `settings.usage.upgradePlan.downgrade`,
                defaultMessage: `Downgrade`,
                description: `CTA label for moving to a lower-tier plan`,
              })
            : (0, $.jsx)(y, {
                id: `settings.usage.upgradePlan.upgrade`,
                defaultMessage: `Upgrade plan`,
                description: `CTA label for moving to a higher-tier plan`,
              })),
      (t[16] = h),
      (t[17] = p),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== p || t[20] !== x || t[21] !== S || t[22] !== C || t[23] !== w
    ? ((T = (0, $.jsx)(u, {
        className: `w-full justify-center`,
        color: x,
        disabled: S,
        loading: p,
        size: `large`,
        onClick: C,
        children: w,
      })),
      (t[19] = p),
      (t[20] = x),
      (t[21] = S),
      (t[22] = C),
      (t[23] = w),
      (t[24] = T))
    : (T = t[24]);
  let E;
  return (
    t[25] !== r ||
    t[26] !== l ||
    t[27] !== T ||
    t[28] !== v ||
    t[29] !== b ||
    t[30] !== f
      ? ((E = (0, $.jsx)(ke, {
          highlighted: v,
          title: f,
          priceLabel: l,
          features: r,
          featureSlotCount: 3,
          detailsLink: b,
          footer: T,
        })),
        (t[25] = r),
        (t[26] = l),
        (t[27] = T),
        (t[28] = v),
        (t[29] = b),
        (t[30] = f),
        (t[31] = E))
      : (E = t[31]),
    E
  );
}
function Te(e) {
  let t = (0, Z.c)(20),
    {
      cta: n,
      description: r,
      features: i,
      getPlansUrl: a,
      onCtaClick: o,
      onClick: s,
      onOpenUrl: c,
      planDetailsLabel: l,
      priceLabel: d,
      subtitle: f,
      targetPlan: p,
      title: m,
    } = e,
    h = p === P.SELF_SERVE_BUSINESS,
    g;
  t[0] !== a || t[1] !== c || t[2] !== l
    ? ((g = (0, $.jsx)(Ae, { detailsLabel: l, getPlansUrl: a, onOpenUrl: c })),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l),
      (t[3] = g))
    : (g = t[3]);
  let _;
  t[4] !== s || t[5] !== o || t[6] !== p
    ? ((_ = (e) => {
        (o(`upgrade`, p), s(e));
      }),
      (t[4] = s),
      (t[5] = o),
      (t[6] = p),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== n || t[9] !== _
    ? ((v = (0, $.jsx)(u, {
        className: `w-full justify-center`,
        size: `large`,
        onClick: _,
        children: n,
      })),
      (t[8] = n),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y;
  return (
    t[11] !== r ||
    t[12] !== i ||
    t[13] !== d ||
    t[14] !== f ||
    t[15] !== h ||
    t[16] !== g ||
    t[17] !== v ||
    t[18] !== m
      ? ((y = (0, $.jsx)(ke, {
          highlighted: h,
          title: m,
          subtitle: f,
          priceLabel: d,
          priceLabelSize: `compact`,
          description: r,
          features: i,
          featureSlotCount: 4,
          detailsLink: g,
          footer: v,
        })),
        (t[11] = r),
        (t[12] = i),
        (t[13] = d),
        (t[14] = f),
        (t[15] = h),
        (t[16] = g),
        (t[17] = v),
        (t[18] = m),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
function Ee(e) {
  let t = (0, Z.c)(3),
    { tier: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.personal.pro.title`,
        defaultMessage: `Pro`,
        description: `Title for the Pro personal plan card`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            r,
            (0, $.jsx)(`span`, {
              className: `font-normal text-token-text-secondary`,
              children: n,
            }),
          ],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function De(e) {
  return [
    {
      icon: (0, $.jsx)(Ne, {}),
      label:
        e === P.PROLITE
          ? (0, $.jsx)(y, {
              id: `settings.usage.upgradePlan.personal.proLite.usage`,
              defaultMessage: `5x more usage than Plus`,
              description: `Usage feature for the Pro 5x plan card`,
            })
          : (0, $.jsx)(y, {
              id: `settings.usage.upgradePlan.personal.pro.usage`,
              defaultMessage: `20x more usage than Plus`,
              description: `Usage feature for the Pro 20x plan card`,
            }),
    },
    {
      icon: (0, $.jsx)(Pe, {}),
      label: (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.personal.pro.model`,
        defaultMessage: `GPT-5.5 Pro`,
        description: `Model feature on the Pro personal plan card`,
      }),
    },
    {
      icon: (0, $.jsx)(Fe, {}),
      label: (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.personal.pro.workspace`,
        defaultMessage: `Connect to Google Workspace`,
        description: `Workspace feature on the Pro personal plan card`,
      }),
    },
  ];
}
function Oe(e) {
  let t = (0, Z.c)(2),
    { plan: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === P.PROLITE
            ? (0, $.jsx)(y, {
                id: `settings.usage.upgradePlan.more.proLite`,
                defaultMessage: `View more details for Pro 5x plan`,
                description: `Screen reader label for the Pro 5x plan details link`,
              })
            : (0, $.jsx)(y, {
                id: `settings.usage.upgradePlan.more.pro`,
                defaultMessage: `View more details for Pro 20x plan`,
                description: `Screen reader label for the Pro 20x plan details link`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ke(e) {
  let t = (0, Z.c)(44),
    {
      description: n,
      detailsLink: r,
      features: i,
      featureSlotCount: a,
      footer: o,
      highlighted: s,
      priceLabel: l,
      priceLabelSize: u,
      subtitle: d,
      title: f,
    } = e,
    p = u === void 0 ? `large` : u,
    m = s
      ? `border-[color-mix(in_srgb,var(--pricing-plan-highlight)_30%,transparent)] bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_6%,transparent)]`
      : `border-token-border`,
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = c(`flex h-full min-h-0 flex-col rounded-2xl border p-4`, m)),
      (t[0] = m),
      (t[1] = h));
  let g = p === `large` && `h-10 justify-center`,
    _;
  t[2] === g
    ? (_ = t[3])
    : ((_ = c(`flex flex-col gap-1`, g)), (t[2] = g), (t[3] = _));
  let v;
  t[4] === f
    ? (v = t[5])
    : ((v = (0, $.jsx)(`div`, {
        className: `text-base font-semibold text-token-text-primary`,
        children: f,
      })),
      (t[4] = f),
      (t[5] = v));
  let y;
  t[6] === d
    ? (y = t[7])
    : ((y =
        d == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-sm font-medium text-token-text-secondary`,
              children: d,
            })),
      (t[6] = d),
      (t[7] = y));
  let b;
  t[8] !== _ || t[9] !== v || t[10] !== y
    ? ((b = (0, $.jsxs)(`div`, { className: _, children: [v, y] })),
      (t[8] = _),
      (t[9] = v),
      (t[10] = y),
      (t[11] = b))
    : (b = t[11]);
  let x = p === `large` && `h-12 justify-center`,
    S;
  t[12] === x
    ? (S = t[13])
    : ((S = c(`mt-3 flex flex-col`, x)), (t[12] = x), (t[13] = S));
  let C;
  t[14] !== l || t[15] !== p
    ? ((C =
        l == null
          ? null
          : (0, $.jsx)(`div`, {
              className: c(
                `text-token-text-primary`,
                p === `large`
                  ? `text-2xl font-normal`
                  : `text-base font-medium`,
              ),
              children: l,
            })),
      (t[14] = l),
      (t[15] = p),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === n
    ? (w = t[18])
    : ((w =
        n == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `mt-1 text-xs text-token-text-secondary`,
              children: n,
            })),
      (t[17] = n),
      (t[18] = w));
  let T;
  t[19] !== S || t[20] !== C || t[21] !== w
    ? ((T = (0, $.jsxs)(`div`, { className: S, children: [C, w] })),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T))
    : (T = t[22]);
  let E;
  if (t[23] !== a || t[24] !== i || t[25] !== p) {
    let e;
    (t[27] !== i || t[28] !== p
      ? ((e = (e, t) => {
          let n = i[t];
          return (0, $.jsx)(
            `div`,
            {
              className: c(
                `flex items-center gap-3 text-sm text-token-text-primary`,
                p === `large` ? `h-10` : `h-8`,
              ),
              children:
                n == null
                  ? null
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `inline-flex h-6 w-6 shrink-0 items-center justify-center`,
                          children: n.icon,
                        }),
                        (0, $.jsx)(`span`, { children: n.label }),
                      ],
                    }),
            },
            t,
          );
        }),
        (t[27] = i),
        (t[28] = p),
        (t[29] = e))
      : (e = t[29]),
      (E = (0, $.jsx)(`div`, {
        className: `mt-3 flex flex-col`,
        children: Array.from({ length: a }, e),
      })),
      (t[23] = a),
      (t[24] = i),
      (t[25] = p),
      (t[26] = E));
  } else E = t[26];
  let D = r == null ? `pt-8` : `gap-3`,
    O;
  t[30] === D
    ? (O = t[31])
    : ((O = c(`mt-3 flex flex-col`, D)), (t[30] = D), (t[31] = O));
  let k;
  t[32] === r
    ? (k = t[33])
    : ((k =
        r == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `flex h-5 items-center`,
              children: r,
            })),
      (t[32] = r),
      (t[33] = k));
  let A;
  t[34] !== o || t[35] !== O || t[36] !== k
    ? ((A = (0, $.jsxs)(`div`, { className: O, children: [k, o] })),
      (t[34] = o),
      (t[35] = O),
      (t[36] = k),
      (t[37] = A))
    : (A = t[37]);
  let j;
  return (
    t[38] !== T || t[39] !== E || t[40] !== A || t[41] !== h || t[42] !== b
      ? ((j = (0, $.jsxs)(`section`, { className: h, children: [b, T, E, A] })),
        (t[38] = T),
        (t[39] = E),
        (t[40] = A),
        (t[41] = h),
        (t[42] = b),
        (t[43] = j))
      : (j = t[43]),
    j
  );
}
function Ae(e) {
  let t = (0, Z.c)(9),
    { detailsLabel: n, getPlansUrl: r, onOpenUrl: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = (e) => {
        i(r(), void 0, e);
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        "aria-hidden": `true`,
        children: (0, $.jsx)(y, {
          id: `settings.usage.upgradePlan.more`,
          defaultMessage: `+ more`,
          description: `Link to view more plan details from a plan card`,
        }),
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, $.jsx)(`span`, { className: `sr-only`, children: n })),
      (t[4] = n),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== s
      ? ((c = (0, $.jsxs)(`button`, {
          className: `w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-token-text-primary underline underline-offset-2`,
          type: `button`,
          onClick: a,
          children: [o, s],
        })),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function je({ intl: e, plan: t, pricingInfo: n }) {
  return n == null
    ? null
    : X({
        intl: e,
        amount: n.monthlyAmounts[t],
        currencyCode: n.currencyCode,
        minorUnitExponent: n.minorUnitExponent,
      });
}
function Me({ intl: e, pricingInfo: t }) {
  if (t == null) return null;
  let n = X({
    intl: e,
    amount: t.monthlyAmounts.business,
    currencyCode: t.businessCurrencyCode,
    minorUnitExponent: t.businessMinorUnitExponent,
  });
  return n == null
    ? null
    : (0, $.jsx)(y, {
        id: `settings.usage.upgradePlan.business.team.price`,
        defaultMessage: `{price} / user / month`,
        description: `Localized monthly per-user price for the ChatGPT and Codex Business plan`,
        values: { price: n },
      });
}
function Ne() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(se, {
          className: `icon-sm`,
          name: `bubble-on-bubble`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(B, { className: `icon-sm text-token-charts-yellow` })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fe() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(o, { className: `icon-sm` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ie() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(se, { className: `icon-base`, name: `shield` })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Z, Q, $;
e(() => {
  ((Z = s()),
    p(),
    te(),
    _(),
    (Q = t(l(), 1)),
    N(),
    C(),
    i(),
    oe(),
    q(),
    d(),
    r(),
    S(),
    M(),
    x(),
    L(),
    fe(),
    g(),
    z(),
    I(),
    ge(),
    w(),
    F(),
    ve(),
    ie(),
    V(),
    Y(),
    ye(),
    K(),
    ($ = D()));
})();
export { Se as UpgradePlanDialog, Ce as UpgradePlanDialogModal };
//# sourceMappingURL=upgrade-plan-dialog-BmI6ctpo.js.map
