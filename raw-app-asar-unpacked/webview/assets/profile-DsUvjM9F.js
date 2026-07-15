import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AJ as n,
  AY as r,
  Af as i,
  Am as a,
  Ao as o,
  BW as s,
  Bu as c,
  C0 as l,
  Cb as u,
  DJ as d,
  DK as f,
  Df as p,
  Di as m,
  Fm as h,
  Gr as g,
  I2 as _,
  IJ as v,
  IK as y,
  Ib as b,
  JA as x,
  Jh as S,
  K1 as C,
  KJ as w,
  L2 as T,
  LK as E,
  LW as D,
  Mi as O,
  Mq as k,
  Ni as A,
  Nm as ee,
  Nq as j,
  Of as te,
  Oi as M,
  PB as N,
  PJ as P,
  RJ as ne,
  RW as F,
  S0 as I,
  SK as L,
  SV as re,
  Sf as R,
  Wr as ie,
  XA as ae,
  _$ as oe,
  _0 as se,
  _Y as z,
  _b as ce,
  _f as B,
  aG as le,
  aJ as ue,
  az as V,
  bI as H,
  bK as de,
  bf as U,
  cS as fe,
  cY as W,
  cg as pe,
  cz as me,
  dJ as he,
  df as ge,
  dz as _e,
  fJ as ve,
  ff as G,
  fp as ye,
  fz as K,
  gD as be,
  gf as xe,
  hf as Se,
  jJ as Ce,
  jo as we,
  k2 as q,
  kK as Te,
  kb as Ee,
  kf as De,
  km as Oe,
  lG as ke,
  lJ as Ae,
  lS as je,
  lg as Me,
  lz as Ne,
  mD as Pe,
  mY as Fe,
  mf as Ie,
  mz as Le,
  o0 as Re,
  oJ as ze,
  oz as Be,
  pY as Ve,
  pp as He,
  pz as Ue,
  qJ as We,
  rG as Ge,
  sG as Ke,
  sY as qe,
  sz as Je,
  tG as Ye,
  tg as Xe,
  u0 as Ze,
  uJ as Qe,
  vI as $e,
  wV as et,
  wf as tt,
  yY as nt,
  zW as rt,
  zu as it,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dt as at,
  ft as ot,
  lt as st,
  st as ct,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import { n as lt, t as ut } from "./codex-avatar-CKI2lXCG.js";
import {
  $ as dt,
  G as ft,
  H as pt,
  J as mt,
  K as ht,
  Q as gt,
  U as _t,
  V as vt,
  X as yt,
  Y as bt,
  Z as xt,
  at as St,
  d as Ct,
  et as wt,
  f as Tt,
  g as Et,
  h as Dt,
  it as Ot,
  nt as kt,
  ot as At,
  q as jt,
  rt as Mt,
  tt as Nt,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  Dr as Pt,
  It as Ft,
  Lt as It,
  Or as Lt,
  Sc as Rt,
  bc as zt,
  xc as Bt,
  yc as Vt,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Gr as Ht,
  Wr as Ut,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  d as Wt,
  p as Gt,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  C as Kt,
  S as qt,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  a as Jt,
  i as Yt,
  n as Xt,
  o as Zt,
  r as Qt,
  t as $t,
} from "./app-initial~app-main~onboarding-page~profile-BuosOEjw.js";
import {
  a as en,
  i as tn,
  n as nn,
  r as rn,
  t as an,
} from "./app-initial~app-main~new-thread-panel-page~hotkey-window-thread-page~profile~thread-app-she~00hof2e5-B5lJTi7j.js";
import { n as on, r as sn } from "./custom-avatars-query-DA8PgfmT.js";
import { n as cn, t as ln } from "./plus-sm-BEqJM0Nl.js";
function un() {
  let e = (0, fn.c)(5),
    { authMethod: t } = je(),
    { data: n } = Ee(),
    r;
  e[0] === n?.structure
    ? (r = e[1])
    : ((r = n?.structure?.toLowerCase()), (e[0] = n?.structure), (e[1] = r));
  let i = r,
    a = null;
  if (
    (i === `personal` ? (a = mn) : i === `workspace` && (a = hn),
    t !== `chatgpt` || a == null)
  )
    return null;
  let o = i === `personal`,
    s;
  return (
    e[2] !== a || e[3] !== o
      ? ((s = (0, pn.jsx)(dn, { isPersonalAccount: o, layer: a })),
        (e[2] = a),
        (e[3] = o),
        (e[4] = s))
      : (s = e[4]),
    s
  );
}
function dn(e) {
  let t = (0, fn.c)(29),
    { isPersonalAccount: n, layer: r } = e,
    i = I(qe),
    a = Ke(),
    o = le(`1823918333`),
    s = ke(r),
    c;
  t[0] !== o || t[1] !== s
    ? ((c = o && s.get(`enabled`, !1)), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === l ? (u = t[4]) : ((u = { enabled: l }), (t[3] = l), (t[4] = u));
  let { data: d } = b(u);
  if (!l || d == null) return null;
  let f;
  t[5] !== d.has_rewards ||
  t[6] !== d.ineligible_reason_code ||
  t[7] !== d.remaining_referrals ||
  t[8] !== d.should_show
    ? ((f = Dt(
        d.has_rewards,
        d.should_show,
        d.remaining_referrals,
        d.ineligible_reason_code,
      )),
      (t[5] = d.has_rewards),
      (t[6] = d.ineligible_reason_code),
      (t[7] = d.remaining_referrals),
      (t[8] = d.should_show),
      (t[9] = f))
    : (f = t[9]);
  let {
    hasReachedReferralLimit: p,
    hasReachedWorkspaceReferralLimit: m,
    shouldShow: h,
  } = f;
  if (!h || !Ye(a, `2622992002`).get(`enabled`, !1)) return null;
  let g;
  t[10] !== d.description ||
  t[11] !== d.grant_action ||
  t[12] !== d.grant_amount ||
  t[13] !== d.has_rewards ||
  t[14] !== d.modal_copy ||
  t[15] !== d.remaining_referrals ||
  t[16] !== d.title ||
  t[17] !== p ||
  t[18] !== m ||
  t[19] !== n ||
  t[20] !== i
    ? ((g = () => {
        tt(i, Ct, {
          grantAmount: d.grant_amount,
          hasRewards: d.has_rewards === !0,
          hasReachedReferralLimit: p,
          hasReachedWorkspaceReferralLimit: m,
          isPersonalAccount: n,
          offerDescription: d.description,
          offerTitle: d.title,
          rateLimitResetCopy: d.modal_copy ?? void 0,
          referralBeaconType: `rate_limit_reached`,
          referralGrantType: d.grant_action,
          referralKey: ce,
          remainingReferrals: d.remaining_referrals,
        });
      }),
      (t[10] = d.description),
      (t[11] = d.grant_action),
      (t[12] = d.grant_amount),
      (t[13] = d.has_rewards),
      (t[14] = d.modal_copy),
      (t[15] = d.remaining_referrals),
      (t[16] = d.title),
      (t[17] = p),
      (t[18] = m),
      (t[19] = n),
      (t[20] = i),
      (t[21] = g))
    : (g = t[21]);
  let _;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, pn.jsx)(Pt, { className: `icon-xs`, "aria-hidden": !0 })),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, pn.jsx)(`span`, {
        className: `min-[641px]:hidden`,
        children: (0, pn.jsx)(z, {
          id: `codex.profile.invite`,
          defaultMessage: `Invite`,
          description: `Compact button label for inviting someone from the profile page`,
        }),
      })),
      (t[23] = v))
    : (v = t[23]);
  let y;
  t[24] === n
    ? (y = t[25])
    : ((y = (0, pn.jsx)(`span`, {
        className: `max-[640px]:hidden`,
        children: n
          ? (0, pn.jsx)(z, {
              id: `codex.profile.inviteFriend`,
              defaultMessage: `Invite a friend`,
              description: `Button label for inviting a friend from the profile page`,
            })
          : (0, pn.jsx)(z, {
              id: `codex.profile.inviteCoworker`,
              defaultMessage: `Invite a coworker`,
              description: `Button label for inviting a coworker from the profile page`,
            }),
      })),
      (t[24] = n),
      (t[25] = y));
  let x;
  return (
    t[26] !== g || t[27] !== y
      ? ((x = (0, pn.jsxs)(k, {
          className: `h-7`,
          color: `ghostActive`,
          size: `toolbar`,
          onClick: g,
          children: [_, v, y],
        })),
        (t[26] = g),
        (t[27] = y),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
var fn,
  pn,
  mn,
  hn,
  gn = e(() => {
    ((fn = _()),
      se(),
      Fe(),
      fe(),
      u(),
      j(),
      R(),
      Lt(),
      Et(),
      Tt(),
      W(),
      Ge(),
      (pn = q()),
      (mn = `1038162578`),
      (hn = `3648137593`));
  });
function _n(e) {
  let t = (0, Dn.c)(40),
    { insights: n, plugins: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o = nt(),
    s;
  if (
    t[2] !== n.fastModePercent ||
    t[3] !== n.invocations ||
    t[4] !== n.reasoningEffort ||
    t[5] !== n.reasoningEffortPercent ||
    t[6] !== n.skillsExplored ||
    t[7] !== n.totalSkillsUsed ||
    t[8] !== n.totalThreads ||
    t[9] !== o ||
    t[10] !== a
  ) {
    let e = n.invocations?.filter(Tn),
      r = n.reasoningEffort,
      i = n.reasoningEffortPercent,
      c = n.fastModePercent != null && n.fastModePercent !== 0,
      l = r != null && i != null && i !== 0,
      u = n.totalSkillsUsed != null && n.totalSkillsUsed !== 0,
      d;
    t[12] === o
      ? (d = t[13])
      : ((d = o.formatMessage({
          id: `profile.activity.ariaLabel`,
          defaultMessage: `Codex activity`,
          description: `Accessible label for the Codex activity profile section`,
        })),
        (t[12] = o),
        (t[13] = d));
    let f;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, J.jsx)(`h2`, {
          className: `text-base leading-5 font-medium text-token-text-primary`,
          children: (0, J.jsx)(z, {
            id: `profile.activity.insights.title`,
            defaultMessage: `Activity insights`,
            description: `Heading for Codex activity insights on the profile page`,
          }),
        })),
        (t[14] = f))
      : (f = t[14]);
    let p;
    t[15] !== c || t[16] !== n.fastModePercent || t[17] !== o
      ? ((p =
          n.fastModePercent === void 0
            ? null
            : (0, J.jsx)(yn, {
                label: (0, J.jsx)(z, {
                  id: `profile.activity.features.fastMode`,
                  defaultMessage: `Fast Mode`,
                  description: `Fast Mode feature label on the profile page`,
                }),
                isEmpty: !c,
                tooltipContent: (0, J.jsx)(z, {
                  id: `profile.activity.features.fastModeTooltip`,
                  defaultMessage: `How often you use /fast mode`,
                  description: `Tooltip explaining the Fast Mode profile metric`,
                }),
                value:
                  n.fastModePercent != null && n.fastModePercent !== 0
                    ? wn(o, n.fastModePercent)
                    : (0, J.jsx)(bn, {}),
              })),
        (t[15] = c),
        (t[16] = n.fastModePercent),
        (t[17] = o),
        (t[18] = p))
      : (p = t[18]);
    let m;
    t[19] !== l || t[20] !== o || t[21] !== r || t[22] !== i
      ? ((m =
          r !== void 0 && i !== void 0
            ? (0, J.jsx)(yn, {
                label: (0, J.jsx)(z, {
                  id: `profile.activity.features.mostUsedReasoning`,
                  defaultMessage: `Most used reasoning`,
                  description: `Most used reasoning effort feature label on the profile page`,
                }),
                isEmpty: !l,
                tooltipContent: (0, J.jsx)(z, {
                  id: `profile.activity.features.reasoningEffortTooltip`,
                  defaultMessage: `Your most used reasoning effort`,
                  description: `Tooltip explaining the reasoning effort profile metric`,
                }),
                value: l
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsx)(Sn, { effort: r }),
                        ` · `,
                        wn(o, i),
                      ],
                    })
                  : (0, J.jsx)(bn, {}),
              })
            : null),
        (t[19] = l),
        (t[20] = o),
        (t[21] = r),
        (t[22] = i),
        (t[23] = m))
      : (m = t[23]);
    let h;
    t[24] !== n.skillsExplored || t[25] !== o
      ? ((h =
          n.skillsExplored == null
            ? null
            : (0, J.jsx)(yn, {
                label: (0, J.jsx)(z, {
                  id: `profile.activity.features.skillsExplored`,
                  defaultMessage: `Skills explored`,
                  description: `Unique skills explored feature label on the profile page`,
                }),
                isEmpty: n.skillsExplored === 0,
                tooltipContent: (0, J.jsx)(z, {
                  id: `profile.activity.features.skillsExploredTooltip`,
                  defaultMessage: `The number of unique skills you've used`,
                  description: `Tooltip explaining the skills explored profile metric`,
                }),
                value:
                  n.skillsExplored === 0
                    ? (0, J.jsx)(xn, {})
                    : o.formatNumber(n.skillsExplored),
              })),
        (t[24] = n.skillsExplored),
        (t[25] = o),
        (t[26] = h))
      : (h = t[26]);
    let g;
    t[27] !== u || t[28] !== n.totalSkillsUsed || t[29] !== o
      ? ((g =
          n.totalSkillsUsed == null
            ? null
            : (0, J.jsx)(yn, {
                label: (0, J.jsx)(z, {
                  id: `profile.activity.features.totalSkillsUsed`,
                  defaultMessage: `Total skills used`,
                  description: `Total skills used feature label on the profile page`,
                }),
                isEmpty: !u,
                tooltipContent: (0, J.jsx)(z, {
                  id: `profile.activity.features.totalSkillsUsedTooltip`,
                  defaultMessage: `Total times Codex used a skill`,
                  description: `Tooltip explaining the total skills used profile metric`,
                }),
                value: u
                  ? o.formatNumber(n.totalSkillsUsed)
                  : (0, J.jsx)(xn, {}),
              })),
        (t[27] = u),
        (t[28] = n.totalSkillsUsed),
        (t[29] = o),
        (t[30] = g))
      : (g = t[30]);
    let _;
    t[31] !== n.totalThreads || t[32] !== o
      ? ((_ =
          n.totalThreads == null
            ? null
            : (0, J.jsx)(yn, {
                label: (0, J.jsx)(z, {
                  id: `profile.activity.features.totalThreads`,
                  defaultMessage: `Total tasks`,
                  description: `Total tasks feature label on the profile page`,
                }),
                isEmpty: n.totalThreads === 0,
                tooltipContent: (0, J.jsx)(z, {
                  id: `profile.activity.features.totalThreadsTooltip`,
                  defaultMessage: `Total unique conversations with Codex`,
                  description: `Tooltip explaining the total tasks profile metric`,
                }),
                value:
                  n.totalThreads === 0
                    ? (0, J.jsx)(xn, {})
                    : o.formatNumber(n.totalThreads),
              })),
        (t[31] = n.totalThreads),
        (t[32] = o),
        (t[33] = _))
      : (_ = t[33]);
    let v;
    (t[34] !== _ || t[35] !== p || t[36] !== m || t[37] !== h || t[38] !== g
      ? ((v = (0, J.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2`,
          children: [
            f,
            (0, J.jsxs)(`dl`, {
              className: `flex flex-col gap-2`,
              children: [p, m, h, g, _],
            }),
          ],
        })),
        (t[34] = _),
        (t[35] = p),
        (t[36] = m),
        (t[37] = h),
        (t[38] = g),
        (t[39] = v))
      : (v = t[39]),
      (s = (0, J.jsxs)(`section`, {
        "aria-label": d,
        className: `grid grid-cols-2 gap-10`,
        children: [
          v,
          e == null
            ? null
            : (0, J.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-2`,
                children: [
                  (0, J.jsx)(`h2`, {
                    className: `text-base leading-5 font-medium text-token-text-primary`,
                    children: (0, J.jsx)(z, {
                      id: `profile.activity.plugins.title`,
                      defaultMessage: `Most used plugins`,
                      description: `Heading for the most used Codex plugins on the profile page`,
                    }),
                  }),
                  e.length === 0
                    ? (0, J.jsxs)(`div`, {
                        className: `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-token-border-light text-base leading-5 text-token-text-tertiary`,
                        children: [
                          (0, J.jsx)(ge, {
                            "aria-hidden": !0,
                            className: `icon-xs`,
                          }),
                          (0, J.jsxs)(`div`, {
                            className: `flex items-center gap-1`,
                            children: [
                              (0, J.jsx)(z, {
                                id: `profile.activity.plugins.empty`,
                                defaultMessage: `No plugins used yet ·`,
                                description: `Empty state for the most used plugins on the profile page`,
                              }),
                              (0, J.jsx)(ae, {
                                className: `cursor-interaction !text-token-text-tertiary underline underline-offset-2 hover:!text-token-text-secondary`,
                                to: `/skills`,
                                children: (0, J.jsx)(z, {
                                  id: `profile.activity.plugins.browse`,
                                  defaultMessage: `Browse`,
                                  description: `Link to browse plugins from the profile activity empty state`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, J.jsx)(`ul`, {
                        className: `flex flex-col gap-2`,
                        children: e.map((e) =>
                          (0, J.jsx)(
                            vn,
                            { invocation: e, plugin: En(e, a) },
                            `${e.type}:${e.plugin_id ?? e.plugin_name ?? ``}:${e.skill_id ?? e.skill_name ?? ``}`,
                          ),
                        ),
                      }),
                ],
              }),
        ],
      })),
      (t[2] = n.fastModePercent),
      (t[3] = n.invocations),
      (t[4] = n.reasoningEffort),
      (t[5] = n.reasoningEffortPercent),
      (t[6] = n.skillsExplored),
      (t[7] = n.totalSkillsUsed),
      (t[8] = n.totalThreads),
      (t[9] = o),
      (t[10] = a),
      (t[11] = s));
  } else s = t[11];
  return s;
}
function vn(e) {
  let t = (0, Dn.c)(25),
    { invocation: n, plugin: r } = e,
    i = nt(),
    a,
    o,
    s;
  if (t[0] !== n.plugin_name || t[1] !== n.skill_name || t[2] !== n.type) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (
        ((a =
          n.type === `plugin` ? n.plugin_name?.trim() : n.skill_name?.trim()),
        !a)
      ) {
        s = null;
        break bb0;
      }
      o = (n.type === `skill` && a.split(`:`).pop()) || a;
    }
    ((t[0] = n.plugin_name),
      (t[1] = n.skill_name),
      (t[2] = n.type),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  } else ((a = t[3]), (o = t[4]), (s = t[5]));
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  let c = o,
    l;
  t[6] !== n.plugin_id || t[7] !== n.type || t[8] !== a || t[9] !== r
    ? ((l = (0, J.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center rounded-lg border border-token-border-light bg-token-main-surface-primary`,
        children: (0, J.jsx)(Cn, {
          name: a,
          plugin: r,
          pluginId: n.plugin_id,
          type: n.type,
        }),
      })),
      (t[6] = n.plugin_id),
      (t[7] = n.type),
      (t[8] = a),
      (t[9] = r),
      (t[10] = l))
    : (l = t[10]);
  let u = kn[n.type],
    d;
  t[11] !== c || t[12] !== u
    ? ((d = (0, J.jsxs)(`span`, {
        className: `min-w-0 truncate text-base leading-5 text-token-text-primary`,
        children: [u, c],
      })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] !== l || t[15] !== d
    ? ((f = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: [l, d],
      })),
      (t[14] = l),
      (t[15] = d),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] !== i || t[18] !== n.usage_count
    ? ((p = i.formatMessage(
        {
          id: `profile.activity.plugins.runs`,
          defaultMessage: `{runs, plural, one {# run} other {# runs}}`,
          description: `Run count shown for a plugin on the profile page`,
        },
        { runs: n.usage_count },
      )),
      (t[17] = i),
      (t[18] = n.usage_count),
      (t[19] = p))
    : (p = t[19]);
  let m;
  t[20] === p
    ? (m = t[21])
    : ((m = (0, J.jsx)(`span`, {
        className: `shrink-0 text-base leading-5 text-token-text-secondary tabular-nums`,
        children: p,
      })),
      (t[20] = p),
      (t[21] = m));
  let h;
  return (
    t[22] !== f || t[23] !== m
      ? ((h = (0, J.jsxs)(`li`, {
          className: `flex h-6 min-w-0 items-center justify-between gap-3`,
          children: [f, m],
        })),
        (t[22] = f),
        (t[23] = m),
        (t[24] = h))
      : (h = t[24]),
    h
  );
}
function yn(e) {
  let t = (0, Dn.c)(15),
    { isEmpty: n, label: r, tooltipContent: i, value: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (0, J.jsx)(`dt`, {
        className: `min-w-0 truncate text-token-text-secondary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = o));
  let s = n ? `text-token-text-tertiary` : `text-token-text-primary`,
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = w(`shrink-0 tabular-nums`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = (0, J.jsx)(`span`, {
        className: `inline-block`,
        tabIndex: 0,
        children: a,
      })),
      (t[4] = a),
      (t[5] = l));
  let u;
  t[6] !== l || t[7] !== i
    ? ((u = (0, J.jsx)(f, {
        delayDuration: 250,
        disablePadding: !0,
        side: `top`,
        tooltipClassName: `flex h-[38px] items-center gap-2.5 p-2`,
        tooltipContent: i,
        children: l,
      })),
      (t[6] = l),
      (t[7] = i),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== c || t[10] !== u
    ? ((d = (0, J.jsx)(`dd`, { className: c, children: u })),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let p;
  return (
    t[12] !== o || t[13] !== d
      ? ((p = (0, J.jsxs)(`div`, {
          className: `flex h-6 min-w-0 items-center justify-between gap-3 text-base leading-5`,
          children: [o, d],
        })),
        (t[12] = o),
        (t[13] = d),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function bn() {
  let e = (0, Dn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(z, {
          id: `profile.activity.features.notUsed`,
          defaultMessage: `Not used`,
          description: `Empty activity metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function xn() {
  let e = (0, Dn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(z, {
          id: `profile.activity.features.none`,
          defaultMessage: `None`,
          description: `Empty count metric value on the profile page`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Sn(e) {
  let t = (0, Dn.c)(4),
    { effort: n } = e;
  switch (n) {
    case `none`:
    case `minimal`:
    case `low`:
    case `medium`:
    case `high`:
    case `xhigh`:
    case `max`: {
      let e;
      return (
        t[0] === n
          ? (e = t[1])
          : ((e = (0, J.jsx)(qt, { effort: n })), (t[0] = n), (t[1] = e)),
        e
      );
    }
    default: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, J.jsx)(J.Fragment, { children: n })),
            (t[2] = n),
            (t[3] = e)),
        e
      );
    }
  }
}
function Cn(e) {
  let t = (0, Dn.c)(11),
    { name: n, plugin: r, pluginId: i, type: a } = e,
    o;
  t[0] !== n || t[1] !== a
    ? ((o =
        a === `plugin`
          ? (0, On.createElement)(ge, {
              "aria-hidden": !0,
              className: `icon-sm`,
            })
          : (0, On.createElement)(m(null, { fallbackName: n }), {
              className: `icon-sm`,
            })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (r?.logoPath != null || r?.logoDarkPath != null) {
    let e;
    return (
      t[3] !== s || t[4] !== r.logoDarkPath || t[5] !== r.logoPath
        ? ((e = (0, J.jsx)(Oe, {
            alt: ``,
            className: `icon-sm`,
            fallback: s,
            logoDarkUrl: r.logoDarkPath,
            logoUrl: r.logoPath,
          })),
          (t[3] = s),
          (t[4] = r.logoDarkPath),
          (t[5] = r.logoPath),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (r == null) {
    let e;
    if (t[7] !== n || t[8] !== i || t[9] !== a) {
      e = Symbol.for(`react.early_return_sentinel`);
      bb0: {
        let t = ee(i?.split(`@`)[0] ?? (a === `skill` ? n.split(`:`)[0] : n));
        if (t != null) {
          e = (0, On.createElement)(t, {
            "aria-hidden": !0,
            className: `icon-sm`,
          });
          break bb0;
        }
      }
      ((t[7] = n), (t[8] = i), (t[9] = a), (t[10] = e));
    } else e = t[10];
    if (e !== Symbol.for(`react.early_return_sentinel`)) return e;
  }
  return s;
}
function wn(e, t) {
  return e.formatNumber(t / 100, {
    maximumFractionDigits: 0,
    style: `percent`,
  });
}
function Tn(e) {
  return (
    e.usage_count != null &&
    (e.type === `plugin` ? !!e.plugin_name?.trim() : !!e.skill_name?.trim())
  );
}
function En(e, t) {
  if (e.plugin_id) {
    let n = t.find((t) => t.plugin.id === e.plugin_id);
    if (n != null) return n;
  }
  let n =
    e.plugin_name ?? (e.type === `skill` ? e.skill_name?.split(`:`)[0] : null);
  return t.find((e) => e.plugin.name === n) ?? null;
}
var Dn,
  On,
  J,
  kn,
  An = e(() => {
    ((Dn = _()),
      We(),
      (On = t(T(), 1)),
      Fe(),
      x(),
      h(),
      a(),
      Te(),
      Kt(),
      G(),
      M(),
      (J = q()),
      (kn = { plugin: `@`, skill: `$` }));
  }),
  jn,
  Mn,
  Nn = e(() => {
    (t(T()),
      (jn = q()),
      (Mn = (e) =>
        (0, jn.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, jn.jsx)(`path`, {
            d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Pn(e) {
  let t = (0, Wn.c)(99),
    { source: n, onCancel: r, onSave: i } = e,
    a = nt(),
    [o, s] = (0, Gn.useState)(null),
    [c, l] = (0, Gn.useState)(null),
    [u, d] = (0, Gn.useState)(!1),
    [f, m] = (0, Gn.useState)(!1),
    h;
  t[0] === o
    ? (h = t[1])
    : ((h = o == null ? 1 : In(o.naturalWidth, o.naturalHeight)),
      (t[0] = o),
      (t[1] = h));
  let g = h,
    _ = o == null ? 1 : o.zoom / g,
    v;
  t[2] !== o || t[3] !== g
    ? ((v = (e) => {
        o != null && s(zn(o, g * e));
      }),
      (t[2] = o),
      (t[3] = g),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b;
  t[5] !== o || t[6] !== f || t[7] !== i || t[8] !== n
    ? ((b = async () => {
        if (!(o == null || f)) {
          (m(!0), d(!1));
          try {
            let e = await Bn(n, o);
            (m(!1), i(e));
          } catch {
            (m(!1), d(!0));
          }
        }
      }),
      (t[5] = o),
      (t[6] = f),
      (t[7] = i),
      (t[8] = n),
      (t[9] = b))
    : (b = t[9]);
  let x = b,
    S;
  t[10] !== f || t[11] !== r
    ? ((S = (e) => {
        !e && !f && r();
      }),
      (t[10] = f),
      (t[11] = r),
      (t[12] = S))
    : (S = t[12]);
  let C = !f,
    w;
  t[13] === x
    ? (w = t[14])
    : ((w = (e) => {
        (e.preventDefault(), x());
      }),
      (t[13] = x),
      (t[14] = w));
  let T;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Y.jsx)(De, {
        className: `sr-only`,
        children: (0, Y.jsx)(z, { ...tr.title }),
      })),
      (t[15] = T))
    : (T = t[15]);
  let E;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(te, {
        className: `sr-only`,
        children: (0, Y.jsx)(z, {
          id: `profile.photoCrop.description`,
          defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
          description: `Description for the profile picture crop dialog`,
        }),
      })),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(xe, { title: (0, Y.jsx)(z, { ...tr.title }) })),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { maxWidth: qn }), (t[18] = O))
    : (O = t[18]);
  let A;
  t[19] !== o || t[20] !== n.dataUrl
    ? ((A =
        o == null
          ? null
          : (0, Y.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 z-0 overflow-hidden`,
              style: { WebkitMaskImage: er, maskImage: er },
              children: (0, Y.jsxs)(`div`, {
                className: `absolute top-0 left-0 overflow-hidden`,
                style: {
                  height: o.naturalHeight * o.zoom,
                  transform: `translate(${Yn + o.offsetX}px, ${Yn + o.offsetY}px)`,
                  width: o.naturalWidth * o.zoom,
                },
                children: [
                  (0, Y.jsx)(`img`, {
                    src: n.dataUrl,
                    alt: ``,
                    className: `block max-w-none select-none`,
                    draggable: !1,
                    style: {
                      filter: `blur(${$n}px)`,
                      height: `calc(100% + ${$n * 2}px)`,
                      transform: `translate(${-$n}px, ${-$n}px)`,
                      width: `calc(100% + ${$n * 2}px)`,
                    },
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute inset-0 bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,transparent)]`,
                  }),
                ],
              }),
            })),
      (t[19] = o),
      (t[20] = n.dataUrl),
      (t[21] = A))
    : (A = t[21]);
  let ee;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = { height: Kn, width: Kn }), (t[22] = ee))
    : (ee = t[22]);
  let j;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        s(Fn(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight));
      }),
      (t[23] = j))
    : (j = t[23]);
  let M;
  t[24] === o
    ? (M = t[25])
    : ((M = (e) => {
        o != null &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          l({
            offsetX: o.offsetX,
            offsetY: o.offsetY,
            pointerId: e.pointerId,
            pointerX: e.clientX,
            pointerY: e.clientY,
          }));
      }),
      (t[24] = o),
      (t[25] = M));
  let N;
  t[26] === c
    ? (N = t[27])
    : ((N = (e) => {
        c != null &&
          e.pointerId === c.pointerId &&
          s((t) =>
            t == null
              ? t
              : {
                  ...t,
                  offsetX: Rn(
                    c.offsetX + e.clientX - c.pointerX,
                    t.naturalWidth,
                    t.zoom,
                  ),
                  offsetY: Rn(
                    c.offsetY + e.clientY - c.pointerY,
                    t.naturalHeight,
                    t.zoom,
                  ),
                },
          );
      }),
      (t[26] = c),
      (t[27] = N));
  let P, ne;
  t[28] === c?.pointerId
    ? ((P = t[29]), (ne = t[30]))
    : ((P = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (ne = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (t[28] = c?.pointerId),
      (t[29] = P),
      (t[30] = ne));
  let F;
  t[31] === o
    ? (F = t[32])
    : ((F =
        o == null
          ? void 0
          : {
              height: o.naturalHeight * o.zoom,
              transform: `translate(${o.offsetX}px, ${o.offsetY}px)`,
              width: o.naturalWidth * o.zoom,
            }),
      (t[31] = o),
      (t[32] = F));
  let I;
  t[33] !== n.dataUrl ||
  t[34] !== M ||
  t[35] !== N ||
  t[36] !== P ||
  t[37] !== ne ||
  t[38] !== F
    ? ((I = (0, Y.jsx)(`div`, {
        className: `relative z-10 overflow-hidden rounded-full bg-token-bg-secondary ring-1 ring-token-border-light`,
        style: ee,
        children: (0, Y.jsx)(`img`, {
          src: n.dataUrl,
          alt: ``,
          className: `absolute top-0 left-0 max-h-none max-w-none cursor-interaction touch-none select-none`,
          draggable: !1,
          onLoad: j,
          onPointerDown: M,
          onPointerMove: N,
          onPointerUp: P,
          onPointerCancel: ne,
          style: F,
        }),
      })),
      (t[33] = n.dataUrl),
      (t[34] = M),
      (t[35] = N),
      (t[36] = P),
      (t[37] = ne),
      (t[38] = F),
      (t[39] = I))
    : (I = t[39]);
  let L;
  t[40] !== A || t[41] !== I
    ? ((L = (0, Y.jsx)(B, {
        className: `items-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `relative isolate flex aspect-square w-full items-center justify-center`,
          style: O,
          children: [A, I],
        }),
      })),
      (t[40] = A),
      (t[41] = I),
      (t[42] = L))
    : (L = t[42]);
  let re;
  t[43] === a
    ? (re = t[44])
    : ((re = a.formatMessage({
        id: `profile.photoCrop.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the profile picture zoom out button`,
      })),
      (t[43] = a),
      (t[44] = re));
  let R = o == null || f || _ <= 1,
    ie;
  t[45] !== y || t[46] !== _
    ? ((ie = () => {
        y(Math.max(1, _ - 0.1));
      }),
      (t[45] = y),
      (t[46] = _),
      (t[47] = ie))
    : (ie = t[47]);
  let ae;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Y.jsx)(Mn, { className: `icon-sm` })), (t[48] = ae))
    : (ae = t[48]);
  let oe;
  t[49] !== re || t[50] !== R || t[51] !== ie
    ? ((oe = (0, Y.jsx)(k, {
        "aria-label": re,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: R,
        size: `iconSm`,
        onClick: ie,
        children: ae,
      })),
      (t[49] = re),
      (t[50] = R),
      (t[51] = ie),
      (t[52] = oe))
    : (oe = t[52]);
  let se;
  t[53] === a
    ? (se = t[54])
    : ((se = a.formatMessage({
        id: `profile.photoCrop.zoomLabel`,
        defaultMessage: `Zoom profile picture`,
        description: `Accessible label for the profile picture crop zoom slider`,
      })),
      (t[53] = a),
      (t[54] = se));
  let ce = o == null || f,
    le;
  t[55] === y
    ? (le = t[56])
    : ((le = (e) => {
        y(Number(e.target.value));
      }),
      (t[55] = y),
      (t[56] = le));
  let ue;
  t[57] !== se || t[58] !== ce || t[59] !== le || t[60] !== _
    ? ((ue = (0, Y.jsx)(`input`, {
        type: `range`,
        "aria-label": se,
        className: `h-0.5 flex-1 appearance-none rounded-full bg-token-border-light [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        disabled: ce,
        min: 1,
        max: 3,
        step: 0.01,
        value: _,
        onChange: le,
      })),
      (t[57] = se),
      (t[58] = ce),
      (t[59] = le),
      (t[60] = _),
      (t[61] = ue))
    : (ue = t[61]);
  let V;
  t[62] === a
    ? (V = t[63])
    : ((V = a.formatMessage({
        id: `profile.photoCrop.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the profile picture zoom in button`,
      })),
      (t[62] = a),
      (t[63] = V));
  let H = o == null || f || _ >= 3,
    de;
  t[64] !== y || t[65] !== _
    ? ((de = () => {
        y(Math.min(3, _ + 0.1));
      }),
      (t[64] = y),
      (t[65] = _),
      (t[66] = de))
    : (de = t[66]);
  let U;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Y.jsx)(ln, { className: `icon-sm` })), (t[67] = U))
    : (U = t[67]);
  let fe;
  t[68] !== V || t[69] !== H || t[70] !== de
    ? ((fe = (0, Y.jsx)(k, {
        "aria-label": V,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: H,
        size: `iconSm`,
        onClick: de,
        children: U,
      })),
      (t[68] = V),
      (t[69] = H),
      (t[70] = de),
      (t[71] = fe))
    : (fe = t[71]);
  let W;
  t[72] !== oe || t[73] !== ue || t[74] !== fe
    ? ((W = (0, Y.jsx)(B, {
        className: `relative z-10 items-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex w-full max-w-[276px] items-center gap-5`,
          children: [oe, ue, fe],
        }),
      })),
      (t[72] = oe),
      (t[73] = ue),
      (t[74] = fe),
      (t[75] = W))
    : (W = t[75]);
  let pe;
  t[76] === u
    ? (pe = t[77])
    : ((pe = u
        ? (0, Y.jsx)(B, {
            className: `items-center`,
            children: (0, Y.jsx)(`div`, {
              className: `text-center text-sm leading-5 text-token-error-foreground`,
              role: `alert`,
              children: (0, Y.jsx)(z, {
                id: `profile.photoCrop.error`,
                defaultMessage: `Unable to process the profile picture`,
                description: `Error shown when profile picture cropping fails`,
              }),
            }),
          })
        : null),
      (t[76] = u),
      (t[77] = pe));
  let me;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Y.jsx)(z, {
        id: `profile.photoCrop.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile picture cropping`,
      })),
      (t[78] = me))
    : (me = t[78]);
  let he;
  t[79] !== f || t[80] !== r
    ? ((he = (0, Y.jsx)(k, {
        color: `ghost`,
        disabled: f,
        onClick: r,
        children: me,
      })),
      (t[79] = f),
      (t[80] = r),
      (t[81] = he))
    : (he = t[81]);
  let ge = o == null,
    _e;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Y.jsx)(z, {
        id: `profile.photoCrop.save`,
        defaultMessage: `Save`,
        description: `Button that saves a cropped profile picture`,
      })),
      (t[82] = _e))
    : (_e = t[82]);
  let ve;
  t[83] !== f || t[84] !== ge
    ? ((ve = (0, Y.jsx)(k, {
        type: `submit`,
        color: `primary`,
        disabled: ge,
        loading: f,
        children: _e,
      })),
      (t[83] = f),
      (t[84] = ge),
      (t[85] = ve))
    : (ve = t[85]);
  let G;
  t[86] !== he || t[87] !== ve
    ? ((G = (0, Y.jsxs)(Se, { children: [he, ve] })),
      (t[86] = he),
      (t[87] = ve),
      (t[88] = G))
    : (G = t[88]);
  let ye;
  t[89] !== L || t[90] !== W || t[91] !== pe || t[92] !== G || t[93] !== w
    ? ((ye = (0, Y.jsxs)(Ie, {
        as: `form`,
        className: `gap-5`,
        onSubmit: w,
        children: [T, E, D, L, W, pe, G],
      })),
      (t[89] = L),
      (t[90] = W),
      (t[91] = pe),
      (t[92] = G),
      (t[93] = w),
      (t[94] = ye))
    : (ye = t[94]);
  let K;
  return (
    t[95] !== S || t[96] !== ye || t[97] !== C
      ? ((K = (0, Y.jsx)(p, {
          open: !0,
          onOpenChange: S,
          showDialogClose: C,
          size: `default`,
          children: ye,
        })),
        (t[95] = S),
        (t[96] = ye),
        (t[97] = C),
        (t[98] = K))
      : (K = t[98]),
    K
  );
}
function Fn(e, t) {
  let n = In(e, t);
  return {
    naturalHeight: t,
    naturalWidth: e,
    offsetX: Ln(e, n),
    offsetY: Ln(t, n),
    zoom: n,
  };
}
function In(e, t) {
  return Math.max(Kn / e, Kn / t);
}
function Ln(e, t) {
  return (Kn - e * t) / 2;
}
function Rn(e, t, n) {
  return Math.min(0, Math.max(Kn - t * n, e));
}
function zn(e, t) {
  let n = (Kn / 2 - e.offsetX) / e.zoom,
    r = (Kn / 2 - e.offsetY) / e.zoom;
  return {
    ...e,
    offsetX: Rn(Kn / 2 - n * t, e.naturalWidth, t),
    offsetY: Rn(Kn / 2 - r * t, e.naturalHeight, t),
    zoom: t,
  };
}
async function Bn(e, t) {
  let n = await Vn(e.dataUrl),
    r = document.createElement(`canvas`);
  ((r.height = Jn), (r.width = Jn));
  let i = r.getContext(`2d`);
  if (i == null) throw Error(`Unable to create profile photo crop canvas`);
  i.drawImage(
    n,
    -t.offsetX / t.zoom,
    -t.offsetY / t.zoom,
    Kn / t.zoom,
    Kn / t.zoom,
    0,
    0,
    Jn,
    Jn,
  );
  let a = Un(e.contentType),
    o = r.toDataURL(a, 0.92),
    s = await Hn(r, a);
  return { photo: new File([s], e.filename, { type: s.type }), previewUrl: o };
}
function Vn(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => {
      t(r);
    }),
      (r.onerror = () => {
        n(Error(`Unable to load profile photo`));
      }),
      (r.src = e));
  });
}
function Hn(e, t) {
  return new Promise((n, r) => {
    e.toBlob(
      (e) => {
        if (e == null) {
          r(Error(`Unable to crop profile photo`));
          return;
        }
        n(e);
      },
      t,
      0.92,
    );
  });
}
function Un(e) {
  return e === `image/png` || e === `image/webp` ? e : `image/jpeg`;
}
var Wn,
  Gn,
  Y,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr = e(() => {
    ((Wn = _()),
      (Gn = t(T(), 1)),
      Fe(),
      j(),
      i(),
      U(),
      Nn(),
      cn(),
      (Y = q()),
      (Kn = 220),
      (qn = 360),
      (Jn = 512),
      (Yn = (qn - Kn) / 2),
      (Xn = Kn / 2),
      (Zn = qn / 2),
      (Qn = Zn - 32),
      ($n = 2),
      (er = `radial-gradient(circle at center, transparent 0 ${Xn - 0.5}px, black ${Xn}px ${Qn}px, transparent ${Zn}px)`),
      (tr = Ve({
        title: {
          id: `profile.photoCrop.title`,
          defaultMessage: `Adjust your image`,
          description: `Title for the profile picture crop dialog`,
        },
      })));
  }),
  rr,
  ir = e(() => {
    rr = `` + new URL(`OpenAISans-Medium-B7nJY_kG.woff2`, import.meta.url).href;
  }),
  ar,
  or = e(() => {
    ar =
      `` + new URL(`OpenAISans-Regular-DFZxHTKM.woff2`, import.meta.url).href;
  }),
  sr,
  cr = e(() => {
    sr = `<svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_934_12058)">
<path d="M11.9434 0.430908C13.7624 0.431247 15.4294 1.09161 16.7158 2.18188C17.1422 2.10495 17.584 2.06277 18.0322 2.06274C22.11 2.0642 25.4164 5.37117 25.417 9.44946C25.4169 9.89743 25.3728 10.3366 25.2959 10.762C26.3869 12.0489 27.0486 13.7176 27.0488 15.5374C27.0482 18.7417 25.0061 21.4654 22.1562 22.4885C21.1331 25.3386 18.4094 27.3806 15.2051 27.3811C13.3855 27.3809 11.7185 26.7191 10.4316 25.6282C10.0059 25.705 9.56539 25.7491 9.11719 25.7493C5.03873 25.7487 1.73312 22.4413 1.73242 18.3625C1.73247 17.9141 1.77453 17.4743 1.85156 17.0481C0.83754 15.8516 0.194518 14.3264 0.109375 12.6555L0.0986328 12.2747C0.0989925 9.07057 2.13971 6.34328 4.98926 5.31958C6.01324 2.47012 8.73955 0.430975 11.9434 0.430908ZM11.9434 2.59985C9.53065 2.59992 7.49693 4.23961 6.90137 6.46704C6.80098 6.84049 6.5082 7.13327 6.13477 7.23364C3.90815 7.82949 2.26795 9.86235 2.26758 12.2747C2.26791 13.7154 2.85272 15.0198 3.79785 15.9651C4.07029 16.2386 4.17665 16.6379 4.07715 17.011C3.962 17.4422 3.89948 17.896 3.89941 18.3625C3.90012 21.2437 6.23609 23.5797 9.11719 23.5803C9.58367 23.5802 10.0384 23.5198 10.4697 23.4045L10.6113 23.3762C10.9409 23.3342 11.2757 23.4453 11.5146 23.6838C12.4599 24.6287 13.7645 25.2111 15.2051 25.2112C17.6173 25.2107 19.6506 23.5723 20.2461 21.345L20.292 21.2083C20.4202 20.9003 20.6853 20.6662 21.0127 20.5784C23.2396 19.9828 24.8802 17.9494 24.8809 15.5374C24.8807 14.0967 24.2963 12.7921 23.3516 11.8469C23.0782 11.5733 22.9726 11.1737 23.0723 10.8C23.1875 10.3688 23.2488 9.91531 23.249 9.44946C23.2484 6.56834 20.9112 4.23251 18.0303 4.23169C17.5631 4.23177 17.1084 4.29242 16.6777 4.40747C16.3048 4.50684 15.9063 4.40063 15.6328 4.12817C14.747 3.24249 13.5458 2.67278 12.2129 2.60474L11.9434 2.59985ZM71.5488 20.428H69.127V19.3098C68.5117 20.1111 67.3381 20.6145 66.1279 20.6145C63.5186 20.6145 61.4688 18.5649 61.4688 15.7708C61.4688 12.9765 63.5199 10.927 66.1279 10.927C67.376 10.927 68.5118 11.3173 69.127 12.0999V7.38501H71.5488V20.428ZM43.4658 7.19751C46.6147 7.19769 49.1299 9.15467 49.5967 11.8381H46.9316C46.5403 10.6077 45.2165 9.60083 43.5029 9.60083C41.1554 9.6009 39.4972 11.4086 39.4971 13.9045C39.4971 16.4019 41.1555 18.2092 43.541 18.2092C45.2545 18.2092 46.5592 17.2208 47.0059 15.9729H49.6514C49.1482 18.6928 46.6887 20.6135 43.4844 20.6135C39.6093 20.6135 36.9073 17.6152 36.9072 13.9075C36.9072 10.1973 39.6838 7.19751 43.4658 7.19751ZM55.5059 10.9241C58.281 10.9242 60.4246 13.1222 60.4248 15.7678C60.4248 18.4135 58.2824 20.6134 55.5059 20.6135C52.7306 20.6135 50.5861 18.4141 50.5859 15.7698C50.5859 13.1226 52.7305 10.9241 55.5059 10.9241ZM77.7354 10.9241C80.6416 10.9241 82.4121 13.0484 82.4121 15.5823V16.5334H75.3701C75.5941 17.7812 76.5439 18.6563 77.793 18.6565C78.7995 18.6565 79.6373 18.1722 79.9355 17.4827H82.3008C81.8164 19.1408 80.2513 20.6135 77.8105 20.6135C74.8292 20.6133 73.0041 18.507 73.0039 15.7698C73.0039 12.9931 75.0895 10.9242 77.7354 10.9241ZM87.5 13.9807L89.4375 11.1116H92.1016L88.8955 15.6565L92.249 20.426H89.3984L87.3857 17.4631L85.2998 20.426L82.6172 20.427L85.9902 15.7317L82.7109 11.1106H85.5625L87.5 13.9807ZM66.5381 13.0315C65.1591 13.0316 63.9287 14.1126 63.9287 15.7708C63.9288 17.429 65.1594 18.51 66.5371 18.51C67.9159 18.5099 69.1464 17.4276 69.1465 15.7708C69.1465 14.1139 67.9157 13.0315 66.5381 13.0315ZM55.5059 13.0842C54.2214 13.0842 52.9902 14.1287 52.9902 15.7668C52.9902 17.4074 54.2211 18.4504 55.5068 18.4504L55.7461 18.4387C56.9406 18.3179 58.0215 17.3036 58.0215 15.7668C58.0215 14.1276 56.7916 13.0844 55.5059 13.0842ZM8.25098 9.57251C8.76529 9.26426 9.43267 9.43133 9.74121 9.94556L11.7822 13.3479C11.9883 13.6917 11.9886 14.1223 11.7822 14.4661L9.74121 17.8674C9.43268 18.3811 8.76506 18.5491 8.25098 18.2415C7.73681 17.9329 7.56986 17.2645 7.87793 16.7502L9.58301 13.9055L7.87793 11.0618C7.56977 10.5476 7.7371 9.88117 8.25098 9.57251ZM19.0176 16.2219C19.6172 16.2219 20.103 16.7084 20.1035 17.3079C20.1035 17.9078 19.6175 18.3948 19.0176 18.3948H14.9346C14.3347 18.3948 13.8486 17.9078 13.8486 17.3079C13.849 16.7084 14.335 16.2219 14.9346 16.2219H19.0176ZM77.792 12.8811C76.6181 12.8812 75.6468 13.6636 75.3877 14.8186H80.1016C79.9708 13.6825 79.0401 12.8811 77.792 12.8811Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_934_12058">
<rect width="92" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  });
function lr() {
  let e = document.documentElement,
    t = window.getComputedStyle(e),
    n = Er(e);
  try {
    return {
      accentColor: wr(
        t,
        n,
        `color`,
        [`--codex-base-accent`, `--color-token-primary`],
        hi.accentColor,
      ),
      backgroundColor: wr(
        t,
        n,
        `backgroundColor`,
        [`--codex-base-surface`, `--color-token-main-surface-primary`],
        hi.backgroundColor,
      ),
      primaryTextColor: wr(
        t,
        n,
        `color`,
        [`--codex-base-ink`, `--color-token-text-primary`],
        hi.primaryTextColor,
      ),
      secondaryTextColor: wr(
        t,
        n,
        `color`,
        [
          `--color-token-text-secondary`,
          `--color-token-description-foreground`,
        ],
        hi.secondaryTextColor,
      ),
    };
  } finally {
    n.remove();
  }
}
async function ur({
  displayNameLabel: e,
  imageUrl: t,
  initials: n,
  petImageUrl: r,
  stats: i,
  theme: a,
  usernameLabel: o,
  usageCells: s,
}) {
  let c = await pr(
    {
      displayNameLabel: e,
      imageUrl: t,
      initials: n,
      stats: i,
      theme: a,
      usernameLabel: o,
      usageCells: s,
    },
    r != null,
  );
  return r == null ? Rr(c) : mr(c, r);
}
async function dr(e) {
  let t = await pr(e, !0);
  return { createImageBlob: (e) => mr(t, e) };
}
function fr(e) {
  let t = URL.createObjectURL(e),
    n = document.createElement(`a`);
  ((n.href = t),
    (n.download = zr),
    n.click(),
    window.setTimeout(() => URL.revokeObjectURL(t), 0));
}
async function pr(
  {
    displayNameLabel: e,
    imageUrl: t,
    initials: n,
    stats: r,
    theme: i,
    usernameLabel: a,
    usageCells: o,
  },
  s,
) {
  let c = document.createElement(`canvas`);
  ((c.width = Br * Hr), (c.height = Vr * Hr));
  let l = c.getContext(`2d`);
  if (l == null) throw Error(`Unable to create profile share card canvas`);
  let [u, d] = await Promise.all([
    t == null ? Promise.resolve(null) : Pr(t),
    Ir(kr(i.secondaryTextColor), null),
    hr(),
  ]);
  if (d == null) throw Error(`Unable to load Codex watermark`);
  let f = Tr(i);
  return (
    l.scale(Hr, Hr),
    _r(l, i),
    vr(l, u, n, i),
    br(l, e, a, i, s),
    xr(l, d),
    Sr(l, o, f.levelColors),
    Cr(l, r, i, f.statDividerColor),
    c
  );
}
async function mr(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = Br * Hr), (n.height = Vr * Hr));
  let r = n.getContext(`2d`);
  if (r == null) throw Error(`Unable to create profile share card canvas`);
  return (r.drawImage(e, 0, 0), r.scale(Hr, Hr), yr(r, await Pr(t)), Rr(n));
}
async function hr() {
  (await Promise.all([gr(ar, `400`), gr(rr, `500`)]),
    await document.fonts.ready);
}
async function gr(e, t) {
  let n = new FontFace(ti, `url(${e})`, { weight: t });
  (document.fonts.add(n), await n.load());
}
function _r(e, t) {
  ((e.fillStyle = t.backgroundColor), Mr(e, 0, 0, Br, Vr, Wr), e.fill());
}
function vr(e, t, n, r) {
  let i = Ur,
    a = Ur;
  (e.save(),
    Mr(e, i, a, Gr, Gr, Gr / 2),
    e.clip(),
    t == null
      ? ((e.fillStyle = r.accentColor),
        e.fillRect(i, a, Gr, Gr),
        (e.fillStyle = r.backgroundColor),
        (e.font = `500 16px 'OpenAI Sans', system-ui, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(n, i + Gr / 2, a + Gr / 2))
      : jr(e, t, i, a, Gr, Gr),
    e.restore());
}
function yr(e, t) {
  t != null &&
    (e.save(),
    (e.imageSmoothingEnabled = !1),
    e.drawImage(
      t,
      0,
      0,
      t.naturalWidth / Xr,
      t.naturalHeight / Zr,
      Jr,
      Yr,
      Kr,
      qr,
    ),
    e.restore());
}
function br(e, t, n, r, i) {
  let a = Ur + Gr + (i ? Qr : 12),
    o = ci - a - 12;
  e.fillStyle = r.primaryTextColor;
  for (
    let n = ni;
    n >= ri &&
    ((e.font = `500 ${n}px 'OpenAI Sans', system-ui, sans-serif`),
    !(n === ri || e.measureText(t).width <= o));
    --n
  );
  ((e.textAlign = `left`),
    (e.textBaseline = `middle`),
    e.fillText(Nr(e, t, o), a, ii),
    (e.fillStyle = r.secondaryTextColor),
    (e.font = `400 ${ai}px 'OpenAI Sans', system-ui, sans-serif`),
    e.fillText(Nr(e, n, o), a, oi));
}
function xr(e, t) {
  e.drawImage(t, ci, li, $r, ei);
}
function Sr(e, t, n) {
  for (let r = 0; r < 182; r += 1) {
    let i = Math.floor(r / 7),
      a = r % 7,
      o = Ur + i * fi,
      s = ui + a * fi,
      c = t[r];
    c != null && ((e.fillStyle = n[c]), Mr(e, o, s, di, di, 4), e.fill());
  }
}
function Cr(e, t, n, r) {
  t.forEach((t, i) => {
    i > 0 &&
      ((e.fillStyle = r), Mr(e, Ur + i * mi, pi + 2, 1, 40, 0.5), e.fill());
    let a = Ur + i * mi + mi / 2,
      o = mi - 8;
    ((e.fillStyle = n.primaryTextColor),
      (e.font = `500 18px 'OpenAI Sans', system-ui, sans-serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(Nr(e, t.value, o), a, pi + 13),
      (e.fillStyle = n.secondaryTextColor),
      (e.font = `400 14px 'OpenAI Sans', system-ui, sans-serif`),
      e.fillText(Nr(e, t.label, o), a, pi + 37));
  });
}
function wr(e, t, n, r, i) {
  for (let i of r) {
    let r = e.getPropertyValue(i).trim();
    if (r.length === 0) continue;
    t.style[n] = `var(${i})`;
    let a = Dr(t, n);
    if (a != null) return a;
    if (!Or(r)) return r;
  }
  return i;
}
function Tr(e) {
  let t = Er(document.documentElement),
    n = (e) => ((t.style.color = e), Dr(t, `color`) ?? e);
  try {
    return {
      levelColors: {
        0: n(Ar(e.backgroundColor, e.primaryTextColor, gi[0])),
        1: n(Ar(e.backgroundColor, e.accentColor, gi[1])),
        2: n(Ar(e.backgroundColor, e.accentColor, gi[2])),
        3: n(Ar(e.backgroundColor, e.accentColor, gi[3])),
        4: e.accentColor,
      },
      statDividerColor: n(Ar(`transparent`, e.primaryTextColor, 0.06)),
    };
  } finally {
    t.remove();
  }
}
function Er(e) {
  let t = document.createElement(`div`);
  return (
    (t.style.height = `0`),
    (t.style.inset = `0`),
    (t.style.opacity = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.position = `absolute`),
    (t.style.width = `0`),
    (document.body ?? e).appendChild(t),
    t
  );
}
function Dr(e, t) {
  if (e.style[t].length === 0) return null;
  let n = window.getComputedStyle(e)[t].trim();
  return Or(n) ? null : n;
}
function Or(e) {
  return e.length === 0 || e.includes(`var(`);
}
function kr(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(sr.replaceAll(`currentColor`, e))}`;
}
function Ar(e, t, n) {
  return `color-mix(in srgb, ${t} ${Math.round(n * 100)}%, ${e})`;
}
function jr(e, t, n, r, i, a) {
  let o = t.naturalWidth || t.width,
    s = t.naturalHeight || t.height,
    c = o / s,
    l = i / a,
    u = c > l ? s * l : o,
    d = c > l ? s : o / l,
    f = (o - u) / 2,
    p = (s - d) / 2;
  e.drawImage(t, f, p, u, d, n, r, i, a);
}
function Mr(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.arcTo(t + r, n, t + r, n + a, a),
    e.lineTo(t + r, n + i - a),
    e.arcTo(t + r, n + i, t + r - a, n + i, a),
    e.lineTo(t + a, n + i),
    e.arcTo(t, n + i, t, n + i - a, a),
    e.lineTo(t, n + a),
    e.arcTo(t, n, t + a, n, a),
    e.closePath());
}
function Nr(e, t, n) {
  if (e.measureText(t).width <= n) return t;
  let r = t;
  for (; r.length > 1 && e.measureText(`${r}…`).width > n; ) r = r.slice(0, -1);
  return `${r}…`;
}
async function Pr(e) {
  return (await Ir(e, Lr(e) ? `anonymous` : null)) ?? (await Fr(e));
}
async function Fr(e) {
  if (!Lr(e)) return null;
  try {
    let t = await Ae.getInstance().get(e),
      n = _i.parse(t.body);
    return await Ir(
      `data:${n.contentType.trim() || `image/png`};base64,${n.base64}`,
      null,
    );
  } catch {
    return null;
  }
}
function Ir(e, t) {
  return new Promise((n) => {
    let r = new Image();
    (t != null && (r.crossOrigin = t),
      (r.onload = () => {
        n(r);
      }),
      (r.onerror = () => {
        n(null);
      }),
      (r.src = e));
  });
}
function Lr(e) {
  return /^https?:\/\//i.test(e);
}
function Rr(e) {
  return new Promise((t, n) => {
    e.toBlob((e) => {
      if (e == null) {
        n(Error(`Unable to create profile share card image`));
        return;
      }
      t(e);
    }, `image/png`);
  });
}
var zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi = e(() => {
    (C(),
      ir(),
      or(),
      cr(),
      Qe(),
      At(),
      (zr = `codex-profile-card.png`),
      (Br = 499),
      (Vr = 306),
      (Hr = 2),
      (Ur = 32),
      (Wr = 32),
      (Gr = 52),
      (Kr = 36),
      (qr = 40),
      (Jr = Ur + Gr - 10),
      (Yr = Ur + Gr - 28),
      (Xr = 8),
      (Zr = 9),
      (Qr = 32),
      ($r = 92),
      (ei = 28),
      (ti = `OpenAI Sans`),
      (ni = 20),
      (ri = 15),
      (ii = 50),
      (ai = 14),
      (oi = 70),
      (si = Br - Ur),
      (ci = si - $r),
      (li = Ur + (Gr - ei) / 2),
      (ui = 96),
      (di = 13.9),
      (fi = (si - Ur - di) / 25),
      (pi = 232),
      (mi = (Br - 2 * Ur) / 4),
      (hi = {
        accentColor: `#5865f2`,
        backgroundColor: `#ffffff`,
        primaryTextColor: `#0d0d0d`,
        secondaryTextColor: `#5d5d5d`,
      }),
      (gi = { 0: 0.1, 1: 0.28, 2: 0.45, 3: 0.68, 4: 1 }),
      (_i = Re({ base64: Ze().min(1), contentType: Ze() })));
  }),
  yi,
  bi,
  xi = e(() => {
    (t(T()),
      (yi = q()),
      (bi = (e) =>
        (0, yi.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, yi.jsx)(`path`, {
            d: `M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  Si,
  Ci,
  wi = e(() => {
    (t(T()),
      (Si = q()),
      (Ci = (e) =>
        (0, Si.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Si.jsx)(`path`, {
            d: `M16.6337 2.90073C16.6337 4.04257 15.708 4.96822 14.5662 4.96822C13.5883 4.96822 12.769 4.28937 12.5539 3.37723C11.3544 3.54198 10.4276 4.57344 10.4276 5.81744L10.4275 5.82524C12.2767 5.89387 13.9672 6.41475 15.3066 7.24346C15.7984 6.86574 16.4141 6.64121 17.0822 6.64121C18.6936 6.64121 20 7.94757 20 9.55905C20 10.7212 19.3206 11.7247 18.3373 12.1939C18.2458 15.5849 14.5521 18.3126 10.0089 18.3126C5.46956 18.3126 1.77825 15.5894 1.68081 12.2025C0.687757 11.7369 0 10.7283 0 9.55905C0 7.94757 1.30636 6.64121 2.91785 6.64121C3.58954 6.64121 4.20823 6.86817 4.70139 7.24959C6.02803 6.42618 7.70059 5.90522 9.53121 5.82759L9.531 5.8186C9.531 4.084 10.853 2.65175 12.5422 2.47676C12.7378 1.53829 13.5697 0.833252 14.5662 0.833252C15.708 0.833252 16.6337 1.7589 16.6337 2.90073ZM5.97607 12.9003C6.79403 12.9003 7.49631 12.5185 7.5449 11.468V11.4692C7.59349 10.4186 6.96989 9.54167 6.15192 9.54167C5.33395 9.54167 4.63168 10.2289 4.58309 11.2794C4.5345 12.3299 5.1581 12.9003 5.97607 12.9003ZM14.0371 12.9003C14.8551 12.9003 15.4787 12.3299 15.4301 11.2794C15.3815 10.2289 14.6793 9.54167 13.8613 9.54167C13.0433 9.54167 12.4197 10.4186 12.4683 11.4692V11.468C12.5169 12.5185 13.2192 12.9003 14.0371 12.9003ZM10.0057 13.7172C8.99218 13.7172 8.02033 13.7669 7.12254 13.8583C6.96866 13.8734 6.87148 14.033 6.93164 14.1753C7.43492 15.3774 8.62195 16.222 10.0057 16.222C11.3894 16.222 12.5776 15.3774 13.0797 14.1753C13.1399 14.033 13.0415 13.8734 12.8888 13.8583C11.9899 13.7669 11.0192 13.7172 10.0057 13.7172Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  Ti,
  Ei,
  Di = e(() => {
    (t(T()),
      (Ti = q()),
      (Ei = (e) =>
        (0, Ti.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ti.jsx)(`path`, {
            d: `M14.6408 2.70825H17.1147L11.7099 8.8856L18.0682 17.2916H13.0897L9.19034 12.1934L4.72859 17.2916H2.25316L8.03414 10.6842L1.93457 2.70825H7.03949L10.5642 7.36819L14.6408 2.70825ZM13.7725 15.8108H15.1433L6.29461 4.11124H4.82357L13.7725 15.8108Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Oi(e) {
  let t = (0, Pi.c)(112),
    {
      imageUrl: n,
      isLoading: r,
      open: i,
      petSwitcher: a,
      selectedSocialPlatform: o,
      getSocialDraftUrl: s,
      onCopy: c,
      onDownload: l,
      onDismissShareInstructions: u,
      onOpenChange: d,
      onOpenSocialDraft: f,
      onSelectSocialPlatform: m,
    } = e,
    h = nt(),
    g = P(0),
    _ = P(0),
    y = Ce(g, zi),
    b = Ce(_, zi),
    x;
  t[0] !== g || t[1] !== _
    ? ((x = (e) => {
        let t = e.currentTarget.getBoundingClientRect(),
          n = Math.min(Math.max((e.clientX - t.left) / t.width, 0), 1),
          r = Math.min(Math.max((e.clientY - t.top) / t.height, 0), 1);
        (g.set(-(r * 2 - 1) * Bi), _.set((n * 2 - 1) * Vi));
      }),
      (t[0] = g),
      (t[1] = _),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] !== g || t[4] !== _
    ? ((C = () => {
        (g.set(0), _.set(0));
      }),
      (t[3] = g),
      (t[4] = _),
      (t[5] = C))
    : (C = t[5]);
  let T = C,
    E;
  t[6] === T
    ? (E = t[7])
    : ((E = (e) => {
        let t = e.currentTarget.querySelector(
          `[data-profile-share-card-preview-hover-target]`,
        );
        (e.target instanceof Node && t?.contains(e.target) === !0) || T();
      }),
      (t[6] = T),
      (t[7] = E));
  let D = E,
    O = o == null ? Hi : Ui,
    A;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = {
        style: {
          height: `100dvh`,
          maxWidth: `none`,
          width: `100vw`,
          zIndex: 51,
        },
      }),
      (t[8] = A))
    : (A = t[8]);
  let ee;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, X.jsx)(De, {
        className: `sr-only`,
        children: (0, X.jsx)(z, {
          id: `profile.shareCard.preview.title`,
          defaultMessage: `Share profile card`,
          description: `Accessible title for the profile share card preview dialog`,
        }),
      })),
      (t[9] = ee))
    : (ee = t[9]);
  let j;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(te, {
        className: `sr-only`,
        children: (0, X.jsx)(z, {
          id: `profile.shareCard.preview.description`,
          defaultMessage: `Preview your profile share card before sharing or saving it`,
          description: `Accessible description for the profile share card preview dialog`,
        }),
      })),
      (t[10] = j))
    : (j = t[10]);
  let M;
  t[11] === h
    ? (M = t[12])
    : ((M = h.formatMessage({
        id: `profile.shareCard.preview.close`,
        defaultMessage: `Close share preview`,
        description: `Accessible label for closing the profile share card preview`,
      })),
      (t[11] = h),
      (t[12] = M));
  let N;
  t[13] === d
    ? (N = t[14])
    : ((N = () => {
        d(!1);
      }),
      (t[13] = d),
      (t[14] = N));
  let F;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(rt, { "aria-hidden": !0, className: `icon-sm` })),
      (t[15] = F))
    : (F = t[15]);
  let I;
  t[16] !== M || t[17] !== N
    ? ((I = (0, X.jsx)(k, {
        "aria-label": M,
        className: `absolute top-5 right-5 z-10 size-8 !rounded-md`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: N,
        children: F,
      })),
      (t[16] = M),
      (t[17] = N),
      (t[18] = I))
    : (I = t[18]);
  let L;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, X.jsx)(`h2`, {
        className: `shrink-0 text-center text-[24px] leading-8 font-normal text-token-text-primary`,
        children: (0, X.jsx)(z, {
          id: `profile.shareCard.preview.heading`,
          defaultMessage: `Share your activity`,
          description: `Visible heading for the profile share card preview dialog`,
        }),
      })),
      (t[19] = L))
    : (L = t[19]);
  let re = o == null ? `mt-[50px]` : `mt-8`,
    R;
  t[20] === re
    ? (R = t[21])
    : ((R = w(`flex flex-col items-center`, re)), (t[20] = re), (t[21] = R));
  let ie;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = w(
        `aspect-[499/306] overflow-hidden rounded-[32px] bg-token-dropdown-background/90 will-change-transform [transform-style:preserve-3d]`,
        Ri,
      )),
      (t[22] = ie))
    : (ie = t[22]);
  let ae;
  t[23] !== O || t[24] !== y || t[25] !== b
    ? ((ae = { rotateX: y, rotateY: b, width: O }),
      (t[23] = O),
      (t[24] = y),
      (t[25] = b),
      (t[26] = ae))
    : (ae = t[26]);
  let oe;
  t[27] !== n || t[28] !== h
    ? ((oe =
        n == null
          ? (0, X.jsx)(`div`, {
              role: `status`,
              "aria-label": h.formatMessage({
                id: `profile.shareCard.preview.loadingLabel`,
                defaultMessage: `Creating profile share card`,
                description: `Accessible label while the profile share card preview is being created`,
              }),
              className: `flex size-full items-center justify-center text-sm text-token-text-secondary`,
              children: (0, X.jsx)(z, {
                id: `profile.shareCard.preview.loading`,
                defaultMessage: `Creating image…`,
                description: `Loading text shown while creating the profile share card preview`,
              }),
            })
          : (0, X.jsx)(`img`, {
              src: n,
              alt: h.formatMessage({
                id: `profile.shareCard.preview.imageAlt`,
                defaultMessage: `Profile share card preview`,
                description: `Alt text for the generated profile share card preview image`,
              }),
              className: `block size-full object-contain`,
            })),
      (t[27] = n),
      (t[28] = h),
      (t[29] = oe))
    : (oe = t[29]);
  let se;
  t[30] !== ae || t[31] !== oe
    ? ((se = (0, X.jsx)(v.div, { className: ie, style: ae, children: oe })),
      (t[30] = ae),
      (t[31] = oe),
      (t[32] = se))
    : (se = t[32]);
  let ce;
  t[33] !== T || t[34] !== S || t[35] !== se
    ? ((ce = (0, X.jsx)(`div`, {
        "data-profile-share-card-preview-hover-target": !0,
        className: `w-fit [perspective:1200px] [transform-style:preserve-3d]`,
        onPointerEnter: S,
        onPointerLeave: T,
        onPointerMove: S,
        children: se,
      })),
      (t[33] = T),
      (t[34] = S),
      (t[35] = se),
      (t[36] = ce))
    : (ce = t[36]);
  let B;
  t[37] === a
    ? (B = t[38])
    : ((B =
        a == null
          ? null
          : (0, X.jsx)(Ai, {
              disabled: a.disabled,
              isPetVisible: a.isPetVisible,
              petCount: a.petCount,
              petName: a.petName,
              petPosition: a.petPosition,
              onNext: a.onNext,
              onPrevious: a.onPrevious,
              onTogglePetVisibility: a.onTogglePetVisibility,
            })),
      (t[37] = a),
      (t[38] = B));
  let le;
  t[39] !== ce || t[40] !== B
    ? ((le = (0, X.jsxs)(`div`, {
        className: `relative w-fit`,
        children: [ce, B],
      })),
      (t[39] = ce),
      (t[40] = B),
      (t[41] = le))
    : (le = t[41]);
  let ue =
      a == null
        ? o == null
          ? `mt-[50px]`
          : `mt-8 mb-7`
        : o == null
          ? `mt-[60px]`
          : `mt-[60px] mb-7`,
    V;
  t[42] === ue
    ? (V = t[43])
    : ((V = w(`flex items-start justify-center gap-2 sm:gap-5`, ue)),
      (t[42] = ue),
      (t[43] = V));
  let H;
  t[44] === h
    ? (H = t[45])
    : ((H = h.formatMessage({
        id: `profile.shareCard.preview.shareX`,
        defaultMessage: `Share to X`,
        description: `Accessible label for the X share button in the profile share card preview`,
      })),
      (t[44] = h),
      (t[45] = H));
  let de = o === `x`,
    U = r || n == null,
    fe;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, X.jsx)(z, {
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      })),
      (t[46] = fe))
    : (fe = t[46]);
  let W;
  t[47] === m
    ? (W = t[48])
    : ((W = () => {
        m(`x`);
      }),
      (t[47] = m),
      (t[48] = W));
  let pe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, X.jsx)(Ei, { "aria-hidden": !0, className: `icon-sm` })),
      (t[49] = pe))
    : (pe = t[49]);
  let me;
  t[50] !== H || t[51] !== de || t[52] !== U || t[53] !== W
    ? ((me = (0, X.jsx)(ki, {
        ariaLabel: H,
        active: de,
        disabled: U,
        label: fe,
        onClick: W,
        children: pe,
      })),
      (t[50] = H),
      (t[51] = de),
      (t[52] = U),
      (t[53] = W),
      (t[54] = me))
    : (me = t[54]);
  let he;
  t[55] === h
    ? (he = t[56])
    : ((he = h.formatMessage({
        id: `profile.shareCard.preview.shareLinkedIn`,
        defaultMessage: `Share to LinkedIn`,
        description: `Accessible label for the LinkedIn share button in the profile share card preview`,
      })),
      (t[55] = h),
      (t[56] = he));
  let ge = o === `linkedin`,
    _e = r || n == null,
    ve;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, X.jsx)(z, {
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      })),
      (t[57] = ve))
    : (ve = t[57]);
  let G;
  t[58] === m
    ? (G = t[59])
    : ((G = () => {
        m(`linkedin`);
      }),
      (t[58] = m),
      (t[59] = G));
  let K;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, X.jsx)(bi, { "aria-hidden": !0, className: `icon-sm` })),
      (t[60] = K))
    : (K = t[60]);
  let be;
  t[61] !== he || t[62] !== ge || t[63] !== _e || t[64] !== G
    ? ((be = (0, X.jsx)(ki, {
        ariaLabel: he,
        active: ge,
        disabled: _e,
        label: ve,
        onClick: G,
        children: K,
      })),
      (t[61] = he),
      (t[62] = ge),
      (t[63] = _e),
      (t[64] = G),
      (t[65] = be))
    : (be = t[65]);
  let xe;
  t[66] === h
    ? (xe = t[67])
    : ((xe = h.formatMessage({
        id: `profile.shareCard.preview.shareReddit`,
        defaultMessage: `Share to Reddit`,
        description: `Accessible label for the Reddit share button in the profile share card preview`,
      })),
      (t[66] = h),
      (t[67] = xe));
  let Se = o === `reddit`,
    we = r || n == null,
    q;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, X.jsx)(z, {
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      })),
      (t[68] = q))
    : (q = t[68]);
  let Te;
  t[69] === m
    ? (Te = t[70])
    : ((Te = () => {
        m(`reddit`);
      }),
      (t[69] = m),
      (t[70] = Te));
  let Ee;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, X.jsx)(Ci, { "aria-hidden": !0, className: `icon-sm` })),
      (t[71] = Ee))
    : (Ee = t[71]);
  let Oe;
  t[72] !== xe || t[73] !== Se || t[74] !== we || t[75] !== Te
    ? ((Oe = (0, X.jsx)(ki, {
        ariaLabel: xe,
        active: Se,
        disabled: we,
        label: q,
        onClick: Te,
        children: Ee,
      })),
      (t[72] = xe),
      (t[73] = Se),
      (t[74] = we),
      (t[75] = Te),
      (t[76] = Oe))
    : (Oe = t[76]);
  let ke;
  t[77] === h
    ? (ke = t[78])
    : ((ke = h.formatMessage({
        id: `profile.shareCard.preview.save`,
        defaultMessage: `Save profile card`,
        description: `Accessible label for saving the profile share card from the preview dialog`,
      })),
      (t[77] = h),
      (t[78] = ke));
  let Ae = r || n == null,
    je;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, X.jsx)(ye, { "aria-hidden": !0, className: `icon-sm` })),
      (t[79] = je))
    : (je = t[79]);
  let Me;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, X.jsx)(`span`, {
        className: Li,
        children: (0, X.jsx)(z, {
          id: `profile.shareCard.preview.saveLabel`,
          defaultMessage: `Save`,
          description: `Visible label for saving the profile share card`,
        }),
      })),
      (t[80] = Me))
    : (Me = t[80]);
  let Ne;
  t[81] !== l || t[82] !== ke || t[83] !== Ae
    ? ((Ne = (0, X.jsxs)(k, {
        "aria-label": ke,
        className: Ii,
        color: `primary`,
        disabled: Ae,
        size: `icon`,
        uniform: !0,
        onClick: l,
        children: [je, Me],
      })),
      (t[81] = l),
      (t[82] = ke),
      (t[83] = Ae),
      (t[84] = Ne))
    : (Ne = t[84]);
  let Pe;
  t[85] !== V || t[86] !== me || t[87] !== be || t[88] !== Oe || t[89] !== Ne
    ? ((Pe = (0, X.jsxs)(`div`, { className: V, children: [me, be, Oe, Ne] })),
      (t[85] = V),
      (t[86] = me),
      (t[87] = be),
      (t[88] = Oe),
      (t[89] = Ne),
      (t[90] = Pe))
    : (Pe = t[90]);
  let Fe;
  t[91] !== s || t[92] !== c || t[93] !== u || t[94] !== f || t[95] !== o
    ? ((Fe =
        o == null
          ? null
          : (0, X.jsx)(v.div, {
              id: Fi,
              className: `mt-4 w-[min(499px,calc(100vw-56px))] overflow-hidden rounded-lg bg-token-dropdown-background/95 p-3 text-left text-token-text-primary shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
              initial: { height: 0, opacity: 0, y: -6 },
              animate: { height: `auto`, opacity: 1, y: 0 },
              exit: { height: 0, opacity: 0, y: -6 },
              transition: { duration: 0.16, ease: `easeOut` },
              children: (0, X.jsx)(ji, {
                getSocialDraftUrl: s,
                platform: o,
                onCopy: c,
                onDismiss: u,
                onOpenSocialDraft: f,
              }),
            })),
      (t[91] = s),
      (t[92] = c),
      (t[93] = u),
      (t[94] = f),
      (t[95] = o),
      (t[96] = Fe))
    : (Fe = t[96]);
  let Ie;
  t[97] === Fe
    ? (Ie = t[98])
    : ((Ie = (0, X.jsx)(ne, { children: Fe })), (t[97] = Fe), (t[98] = Ie));
  let Le;
  t[99] !== R || t[100] !== le || t[101] !== Pe || t[102] !== Ie
    ? ((Le = (0, X.jsxs)(`div`, {
        className: `flex min-h-fit flex-col items-center`,
        children: [
          L,
          (0, X.jsxs)(`div`, { className: R, children: [le, Pe, Ie] }),
        ],
      })),
      (t[99] = R),
      (t[100] = le),
      (t[101] = Pe),
      (t[102] = Ie),
      (t[103] = Le))
    : (Le = t[103]);
  let Re;
  t[104] !== D || t[105] !== Le
    ? ((Re = (0, X.jsx)(`div`, {
        className: `flex h-full min-h-0 items-center justify-center overflow-y-auto px-6 py-8`,
        onPointerMove: D,
        children: Le,
      })),
      (t[104] = D),
      (t[105] = Le),
      (t[106] = Re))
    : (Re = t[106]);
  let ze;
  return (
    t[107] !== d || t[108] !== i || t[109] !== I || t[110] !== Re
      ? ((ze = (0, X.jsxs)(p, {
          open: i,
          contentClassName: `!left-0 !top-0 !z-[51] !translate-x-0 !translate-y-0 overflow-hidden bg-transparent text-token-text-primary`,
          contentProps: A,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_88%,transparent)] backdrop-blur-[18px]`,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: d,
          children: [ee, j, I, Re],
        })),
        (t[107] = d),
        (t[108] = i),
        (t[109] = I),
        (t[110] = Re),
        (t[111] = ze))
      : (ze = t[111]),
    ze
  );
}
function ki(e) {
  let t = (0, Pi.c)(10),
    {
      active: n,
      ariaLabel: r,
      children: i,
      disabled: a,
      label: o,
      onClick: s,
    } = e,
    c = n ? Fi : void 0,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = (0, X.jsx)(`span`, { className: Li, children: o })),
      (t[0] = o),
      (t[1] = l));
  let u;
  return (
    t[2] !== n ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== l
      ? ((u = (0, X.jsxs)(k, {
          "aria-controls": c,
          "aria-expanded": n,
          "aria-label": r,
          "aria-pressed": n,
          className: Ii,
          color: `primary`,
          disabled: a,
          size: `icon`,
          uniform: !0,
          onClick: s,
          children: [i, l],
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Ai(e) {
  let t = (0, Pi.c)(40),
    {
      disabled: n,
      isPetVisible: r,
      petCount: i,
      petName: a,
      petPosition: o,
      onNext: s,
      onPrevious: c,
      onTogglePetVisibility: l,
    } = e,
    u = nt(),
    d = i > 1,
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = u.formatMessage({
        id: `profile.shareCard.preview.petSwitcher`,
        defaultMessage: `Custom pet`,
        description: `Accessible label for controls that switch the custom pet shown in the profile share card preview`,
      })),
      (t[0] = u),
      (t[1] = f));
  let p = d
      ? `w-[min(320px,calc(100vw-80px))] grid-cols-[1.75rem_minmax(0,1fr)_1.75rem_4.25rem]`
      : `w-[min(240px,calc(100vw-80px))] grid-cols-[minmax(0,1fr)_4.25rem]`,
    m;
  t[2] === p
    ? (m = t[3])
    : ((m = w(
        `absolute top-full left-1/2 mt-3 grid -translate-x-1/2 items-center gap-2 rounded-full bg-token-dropdown-background/95 px-2 py-1 shadow-[0_12px_36px_rgba(0,0,0,0.12)] ring-1 ring-token-border backdrop-blur`,
        p,
      )),
      (t[2] = p),
      (t[3] = m));
  let h;
  t[4] !== d || t[5] !== n || t[6] !== u || t[7] !== c
    ? ((h = d
        ? (0, X.jsx)(k, {
            "aria-label": u.formatMessage({
              id: `profile.shareCard.preview.previousPet`,
              defaultMessage: `Previous custom pet`,
              description: `Accessible label for selecting the previous custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: c,
            children: (0, X.jsx)(y, {
              "aria-hidden": !0,
              className: `icon-xs rotate-180`,
            }),
          })
        : null),
      (t[4] = d),
      (t[5] = n),
      (t[6] = u),
      (t[7] = c),
      (t[8] = h))
    : (h = t[8]);
  let g = r ? `text-token-text-primary` : `text-token-text-tertiary`,
    _;
  t[9] === g
    ? (_ = t[10])
    : ((_ = w(`truncate text-xs leading-4 font-medium`, g)),
      (t[9] = g),
      (t[10] = _));
  let v;
  t[11] !== a || t[12] !== _
    ? ((v = (0, X.jsx)(`div`, { className: _, children: a })),
      (t[11] = a),
      (t[12] = _),
      (t[13] = v))
    : (v = t[13]);
  let b;
  t[14] !== r || t[15] !== i || t[16] !== o
    ? ((b = (0, X.jsx)(`div`, {
        className: `text-[11px] leading-3 text-token-text-tertiary`,
        children: r
          ? (0, X.jsx)(z, {
              id: `profile.shareCard.preview.petPosition`,
              defaultMessage: `{petPosition} / {petCount}`,
              description: `Current custom pet position in the profile share card preview pet switcher`,
              values: { petCount: i, petPosition: o },
            })
          : (0, X.jsx)(z, {
              id: `profile.shareCard.preview.petHidden`,
              defaultMessage: `Hidden`,
              description: `Label shown when the custom pet is hidden from the profile share card preview`,
            }),
      })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = o),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== v || t[19] !== b
    ? ((x = (0, X.jsxs)(`div`, {
        className: `min-w-0 text-center`,
        children: [v, b],
      })),
      (t[18] = v),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== d || t[22] !== n || t[23] !== u || t[24] !== s
    ? ((S = d
        ? (0, X.jsx)(k, {
            "aria-label": u.formatMessage({
              id: `profile.shareCard.preview.nextPet`,
              defaultMessage: `Next custom pet`,
              description: `Accessible label for selecting the next custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: s,
            children: (0, X.jsx)(y, {
              "aria-hidden": !0,
              className: `icon-xs`,
            }),
          })
        : null),
      (t[21] = d),
      (t[22] = n),
      (t[23] = u),
      (t[24] = s),
      (t[25] = S))
    : (S = t[25]);
  let C = r ? `ghostActive` : `secondary`,
    T;
  t[26] === r
    ? (T = t[27])
    : ((T = r
        ? (0, X.jsx)(z, {
            id: `profile.shareCard.preview.hidePetLabel`,
            defaultMessage: `Hide pet`,
            description: `Short button label for hiding the custom pet from the profile share card preview`,
          })
        : (0, X.jsx)(z, {
            id: `profile.shareCard.preview.showPetLabel`,
            defaultMessage: `Show pet`,
            description: `Short button label for showing the custom pet on the profile share card preview`,
          })),
      (t[26] = r),
      (t[27] = T));
  let E;
  t[28] !== n || t[29] !== l || t[30] !== C || t[31] !== T
    ? ((E = (0, X.jsx)(k, {
        className: `h-7 w-[4.25rem] justify-center px-0 text-[11px] leading-3`,
        color: C,
        disabled: n,
        size: `default`,
        onClick: l,
        children: T,
      })),
      (t[28] = n),
      (t[29] = l),
      (t[30] = C),
      (t[31] = T),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== f ||
    t[34] !== S ||
    t[35] !== E ||
    t[36] !== m ||
    t[37] !== h ||
    t[38] !== x
      ? ((D = (0, X.jsxs)(`div`, {
          "aria-label": f,
          className: m,
          role: `group`,
          children: [h, x, S, E],
        })),
        (t[33] = f),
        (t[34] = S),
        (t[35] = E),
        (t[36] = m),
        (t[37] = h),
        (t[38] = x),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
function ji(e) {
  let t = (0, Pi.c)(41),
    {
      platform: n,
      getSocialDraftUrl: r,
      onCopy: i,
      onDismiss: a,
      onOpenSocialDraft: s,
    } = e,
    c = nt(),
    l;
  t[0] !== c || t[1] !== n
    ? ((l = Ni(c, n)), (t[0] = c), (t[1] = n), (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== r || t[4] !== n
    ? ((d = r(n)), (t[3] = r), (t[4] = n), (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] === u
    ? (p = t[7])
    : ((p = (0, X.jsx)(`h3`, {
        className: `text-sm leading-5 font-medium`,
        children: (0, X.jsx)(z, {
          id: `profile.shareCard.preview.socialInstructionsTitle`,
          defaultMessage: `Share to {platformName}`,
          description: `Title for the profile share card social sharing instructions`,
          values: { platformName: u },
        }),
      })),
      (t[6] = u),
      (t[7] = p));
  let m;
  t[8] === c
    ? (m = t[9])
    : ((m = c.formatMessage({
        id: `profile.shareCard.preview.dismissShareInstructions`,
        defaultMessage: `Dismiss share instructions`,
        description: `Accessible label for dismissing the profile share card social sharing instructions`,
      })),
      (t[8] = c),
      (t[9] = m));
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(rt, { "aria-hidden": !0, className: `icon-xs` })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== a || t[12] !== m
    ? ((g = (0, X.jsx)(k, {
        "aria-label": m,
        className: `size-6 rounded-full`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: a,
        children: h,
      })),
      (t[11] = a),
      (t[12] = m),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== p || t[15] !== g
    ? ((_ = (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [p, g],
      })),
      (t[14] = p),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(Mi, { step: 1 })), (t[17] = v))
    : (v = t[17]);
  let y, b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(ie, { "aria-hidden": !0, className: `icon-xs` })),
      (y = (0, X.jsx)(z, {
        id: `profile.shareCard.preview.copyImage`,
        defaultMessage: `Copy image`,
        description: `Button label for copying the profile share card image`,
      })),
      (t[18] = y),
      (t[19] = b))
    : ((y = t[18]), (b = t[19]));
  let x;
  t[20] === i
    ? (x = t[21])
    : ((x = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          v,
          (0, X.jsxs)(k, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: i,
            children: [b, y],
          }),
        ],
      })),
      (t[20] = i),
      (t[21] = x));
  let S;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(Mi, { step: 2 })), (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== s || t[24] !== n
    ? ((C = (e) => {
        s(n, e);
      }),
      (t[23] = s),
      (t[24] = n),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] === f
    ? (w = t[27])
    : ((w = (0, X.jsx)(o, { href: f, className: `icon-xs` })),
      (t[26] = f),
      (t[27] = w));
  let T;
  t[28] === u
    ? (T = t[29])
    : ((T = (0, X.jsx)(z, {
        id: `profile.shareCard.preview.openSocialComposer`,
        defaultMessage: `Open {platformName} composer`,
        description: `Button label for opening a social platform composer for the profile share card`,
        values: { platformName: u },
      })),
      (t[28] = u),
      (t[29] = T));
  let E;
  t[30] !== C || t[31] !== w || t[32] !== T
    ? ((E = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          S,
          (0, X.jsxs)(k, {
            className: `h-7 px-2 text-sm`,
            color: `secondary`,
            size: `toolbar`,
            onClick: C,
            children: [w, T],
          }),
        ],
      })),
      (t[30] = C),
      (t[31] = w),
      (t[32] = T),
      (t[33] = E))
    : (E = t[33]);
  let D;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsxs)(`li`, {
        className: `flex items-center gap-2 text-token-text-secondary`,
        children: [
          (0, X.jsx)(Mi, { step: 3 }),
          (0, X.jsx)(z, {
            id: `profile.shareCard.preview.pasteImage`,
            defaultMessage: `Paste image into the post`,
            description: `Instruction for pasting the copied profile share card image into the social post`,
          }),
        ],
      })),
      (t[34] = D))
    : (D = t[34]);
  let O;
  t[35] !== x || t[36] !== E
    ? ((O = (0, X.jsxs)(`ol`, {
        className: `mt-2 flex flex-col gap-2 text-sm leading-5`,
        children: [x, E, D],
      })),
      (t[35] = x),
      (t[36] = E),
      (t[37] = O))
    : (O = t[37]);
  let A;
  return (
    t[38] !== O || t[39] !== _
      ? ((A = (0, X.jsxs)(X.Fragment, { children: [_, O] })),
        (t[38] = O),
        (t[39] = _),
        (t[40] = A))
      : (A = t[40]),
    A
  );
}
function Mi(e) {
  let t = (0, Pi.c)(2),
    { step: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(`span`, {
          "aria-hidden": !0,
          className: `flex size-5 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-[11px] font-medium text-token-text-primary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ni(e, t) {
  switch (t) {
    case `linkedin`:
      return e.formatMessage({
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      });
    case `reddit`:
      return e.formatMessage({
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      });
    case `x`:
      return e.formatMessage({
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      });
  }
}
var Pi,
  X,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi = e(() => {
    ((Pi = _()),
      We(),
      d(),
      Fe(),
      j(),
      i(),
      we(),
      E(),
      g(),
      He(),
      xi(),
      wi(),
      Di(),
      s(),
      (X = q()),
      (Fi = `profile-share-card-social-instructions`),
      (Ii = `relative size-[52px] overflow-visible !rounded-full`),
      (Li = `absolute top-[60px] left-1/2 max-w-[68px] -translate-x-1/2 truncate text-center text-xs leading-4 text-token-text-secondary`),
      (Ri = `[box-shadow:rgba(0,0,0,0.06)_0px_4px_12px_-8px,rgba(0,0,0,0.10)_0px_9px_64px_-10px,rgba(0,0,0,0.05)_0px_0px_0px_0.5px]`),
      (zi = { stiffness: 200, damping: 25, mass: 1 }),
      (Bi = 1.5),
      (Vi = 2),
      (Hi = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 506px)))`),
      (Ui = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 749px)))`));
  });
function Gi({
  dailyUsage: e,
  displayName: t,
  imageUrl: n,
  petOptions: r,
  selectedPetId: i,
  todayIso: a,
  usageSummary: o,
  username: s,
}) {
  let c = I(qe),
    l = nt(),
    [u, d] = (0, Yi.useState)(!1),
    [f, p] = (0, Yi.useState)(!1),
    [m, h] = (0, Yi.useState)(null),
    [g, _] = (0, Yi.useState)(null),
    [v, y] = (0, Yi.useState)(null),
    [b, x] = (0, Yi.useState)(!1),
    [S, C] = (0, Yi.useState)(null),
    w = (0, Yi.useRef)(0),
    T = l.formatMessage({
      id: `profile.shareCard.shareLabel`,
      defaultMessage: `Share profile card`,
      description: `Accessible label for sharing the profile share card image`,
    }),
    E = l.formatMessage({
      id: `profile.shareCard.createError`,
      defaultMessage: `Could not create profile card`,
      description: `Toast shown when the profile share card image could not be created`,
    }),
    D = l.formatMessage({
      id: `profile.shareCard.copySuccess`,
      defaultMessage: `Copied image`,
      description: `Toast shown after copying the profile share card image`,
    }),
    O = l.formatMessage({
      id: `profile.shareCard.copyError`,
      defaultMessage: `Failed to copy image`,
      description: `Toast shown when copying the profile share card image fails`,
    }),
    A = l.formatMessage({
      id: `profile.shareCard.saveSuccess`,
      defaultMessage: `Image saved`,
      description: `Toast shown after saving the profile share card image`,
    }),
    ee = l.formatMessage({
      id: `profile.shareCard.draftText`,
      defaultMessage: `Check out my Codex activity`,
      description: `Draft text used when sharing the profile share card to social platforms`,
    }),
    j = (e, t) => {
      if (t == null) {
        H(c, Ue, { action: e });
        return;
      }
      H(c, Ue, { action: e, socialPlatform: Ji(t) });
    },
    te = () => {
      let r = l.formatMessage(
        {
          id: `profile.usernameValue`,
          defaultMessage: `@{username}`,
          description: `Profile username shown with an at-sign prefix`,
        },
        { username: s },
      );
      return {
        displayNameLabel: t,
        imageUrl: n,
        initials: jt(t),
        stats: [
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.lifetimeTokens`,
              defaultMessage: `lifetime tokens`,
              description: `Label for lifetime token usage in the profile share card image`,
            }),
            value: pt(l, o.totalTextTokens),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.peakDay`,
              defaultMessage: `peak day`,
              description: `Label for peak token usage day in the profile share card image`,
            }),
            value: pt(l, o.peakTokens),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.currentStreak`,
              defaultMessage: `current streak`,
              description: `Label for current usage streak in the profile share card image`,
            }),
            value: _t(l, o.currentStreakDays),
          },
          {
            label: l.formatMessage({
              id: `profile.shareCard.stats.longestStreak`,
              defaultMessage: `longest streak`,
              description: `Label for longest usage streak in the profile share card image`,
            }),
            value: _t(l, o.longestStreakDays),
          },
        ],
        theme: lr(),
        usernameLabel: r,
        usageCells: yt({ dailyUsage: e, todayIso: a }),
      };
    },
    M = async (e, t) => {
      let n = await Ki(e);
      w.current === t && h({ blob: e, imageUrl: n });
    },
    N = async (e, { clearPreview: t, showLoadingState: n, requestId: r }) => {
      (n && d(!0), t && h(null));
      try {
        await M(await ur({ ...te(), petImageUrl: e?.imageUrl ?? null }), r);
      } catch {
        if (w.current !== r) return;
        (p(!1), C(null), c.get(L).danger(E));
      } finally {
        n && w.current === r && d(!1);
      }
    },
    P = async (
      e,
      t,
      { clearPreview: n, showLoadingState: r, requestId: i },
    ) => {
      (r && d(!0), n && h(null));
      try {
        let n = t ?? (await dr(te()));
        if (w.current !== i) return;
        (t ?? C(n), await M(await n.createImageBlob(e.imageUrl), i));
      } catch {
        if (w.current !== i) return;
        (p(!1), C(null), c.get(L).danger(E));
      } finally {
        r && w.current === i && d(!1);
      }
    },
    ne = () => {
      w.current += 1;
      let e = w.current,
        t = i == null ? -1 : r.findIndex((e) => e.id === i);
      (p(!0), _(null), C(null), y(t === -1 ? null : t), x(t !== -1));
      let n = r[t];
      if (n == null) {
        N(null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
        return;
      }
      P(n, null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
    },
    F = (e) => {
      let t = r[e];
      if (t == null) return;
      w.current += 1;
      let n = w.current;
      (y(e),
        x(!0),
        P(t, S, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
    },
    re = (e) => {
      let t = v == null ? null : r[v];
      if (e && t == null) return;
      w.current += 1;
      let n = w.current;
      (x(e),
        N(e ? t : null, {
          clearPreview: !1,
          requestId: n,
          showLoadingState: !1,
        }));
    },
    R = () => {
      m != null &&
        (j(K.CODEX_PROFILE_SHARE_ACTION_SAVE_BUTTON_CLICKED),
        fr(m.blob),
        c.get(L).success(A));
    },
    ie = () => {
      m != null &&
        it({ "image/png": m.blob }).then(
          () => {
            c.get(L).success(D);
          },
          () => {
            c.get(L).danger(O);
          },
        );
    },
    ae = (e) => {
      (e || ((w.current += 1), _(null), y(null), x(!1), d(!1), C(null)), p(e));
    };
  return (0, Xi.jsxs)(Xi.Fragment, {
    children: [
      (0, Xi.jsxs)(k, {
        "aria-label": T,
        className: `h-7`,
        color: `ghostActive`,
        loading: u,
        size: `toolbar`,
        onClick: () => {
          (j(K.CODEX_PROFILE_SHARE_ACTION_SHARE_BUTTON_CLICKED), ne());
        },
        children: [
          (0, Xi.jsx)(Vt, { "aria-hidden": !0, className: `icon-xs` }),
          (0, Xi.jsx)(z, {
            id: `profile.shareCard.share`,
            defaultMessage: `Share`,
            description: `Button label for sharing the profile share card image`,
          }),
        ],
      }),
      (0, Xi.jsx)(Oi, {
        imageUrl: m?.imageUrl ?? null,
        isLoading: u,
        open: f,
        petSwitcher:
          v == null || r.length === 0
            ? null
            : {
                disabled: u,
                isPetVisible: b,
                petCount: r.length,
                petName: r[v]?.displayName ?? ``,
                petPosition: v + 1,
                onNext: () => {
                  F((v + 1) % r.length);
                },
                onPrevious: () => {
                  F((v - 1 + r.length) % r.length);
                },
                onTogglePetVisibility: () => {
                  re(!b);
                },
              },
        selectedSocialPlatform: g,
        getSocialDraftUrl: (e) => qi(e, ee),
        onCopy: ie,
        onDownload: R,
        onDismissShareInstructions: () => {
          _(null);
        },
        onOpenChange: ae,
        onOpenSocialDraft: (e, t) => {
          let n = qi(e, ee);
          (j(K.CODEX_PROFILE_SHARE_ACTION_SOCIAL_COMPOSER_BUTTON_CLICKED, e),
            be({ event: t, href: n, initiator: `open_in_browser_bridge` }));
        },
        onSelectSocialPlatform: (e) => {
          (j(K.CODEX_PROFILE_SHARE_ACTION_SOCIAL_SHARE_BUTTON_CLICKED, e),
            _(e));
        },
      }),
    ],
  });
}
function Ki(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile share card`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile share card`));
          return;
        }
        t(r.result);
      }),
      r.readAsDataURL(e));
  });
}
function qi(e, t) {
  switch (e) {
    case `linkedin`: {
      let e = new URL(`https://www.linkedin.com/feed/`);
      return (
        e.searchParams.set(`shareActive`, `true`),
        e.searchParams.set(`text`, t),
        e.toString()
      );
    }
    case `reddit`: {
      let e = new URL(`https://www.reddit.com/submit`);
      return (e.searchParams.set(`title`, t), e.toString());
    }
    case `x`: {
      let e = new URL(`https://x.com/intent/post`);
      return (e.searchParams.set(`text`, t), e.toString());
    }
  }
}
function Ji(e) {
  switch (e) {
    case `linkedin`:
      return Le.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN;
    case `reddit`:
      return Le.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT;
    case `x`:
      return Le.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X;
  }
}
var Yi,
  Xi,
  Zi = e(() => {
    (N(),
      se(),
      (Yi = t(T(), 1)),
      Fe(),
      j(),
      Pe(),
      de(),
      zt(),
      $e(),
      W(),
      c(),
      At(),
      vi(),
      Wi(),
      (Xi = q()));
  }),
  Qi,
  $i,
  ea,
  ta,
  na = e(() => {
    ((Qi = `_profileLoadingBlock_1lb04_1`),
      ($i = `_profilePhotoEditBadge_1lb04_22`),
      (ea = `_profilePhotoInput_1lb04_28`),
      (ta = {
        profileLoadingBlock: Qi,
        "profile-loading-page-sweep": `_profile-loading-page-sweep_1lb04_1`,
        profilePhotoEditBadge: $i,
        profilePhotoInput: ea,
      }));
  });
function ra({ today: e = new Date() }) {
  let t = I(qe),
    r = (0, Q.useRef)(!1),
    i = nt(),
    a = n(),
    o = le(`3162484136`),
    s = le(rn),
    c = le(`1991660486`),
    { accountId: u, authMethod: d, planAtLogin: p, userId: m } = je(),
    { data: h } = Ee(),
    { data: g } = ze(`account-info`, {
      queryConfig: { enabled: d === `chatgpt` && !0, staleTime: he.ONE_MINUTE },
    }),
    { data: _ } = l(on),
    y = dt(e),
    b = kt(y),
    x = ja(y),
    S = u ?? g?.accountId ?? null,
    C = m ?? g?.userId ?? null,
    T = Qt({ accountId: S, enabled: d === `chatgpt`, userId: C }),
    E = T.data?.activityInsights,
    D = Yt({ accountId: S, userId: C }),
    A = Zt({ accountId: S, userId: C }),
    ee = D.isPending || A.isPending,
    j = Jt({ accountId: S, userId: C }),
    te = at(_?.avatars),
    { selectedAvatar: M } = st(te),
    [N, P] = (0, Q.useState)(null),
    [ne, F] = (0, Q.useState)(null),
    [L, re] = (0, Q.useState)(`daily`),
    [R, ie] = (0, Q.useState)(null),
    [ae, se] = (0, Q.useState)(null),
    [ce, B] = (0, Q.useState)(null),
    [ue, de] = (0, Q.useState)(!1),
    U = T.isLoading,
    fe = T.data == null && T.isError,
    W = oe.isInternal(pe()) && T.error != null ? Ra(T.error) : null,
    ge = T.data?.hasStatsError === !0,
    ve = M.id.startsWith(`custom:`),
    G = U ? null : (ne ?? T.data?.imageUrl ?? h?.profile_picture_url ?? null),
    ye = G != null && G !== N,
    K = T.data?.username?.trim() || null,
    be = T.data?.displayName ?? null,
    xe = U ? null : bt({ accountName: h?.name, displayName: be, username: K }),
    Se = mt({
      accountStructure: h?.structure,
      plan: h?.plan_type ?? g?.plan ?? p,
      workspaceName: h?.name,
    }),
    Ce = T.data?.summary,
    we = Ce?.longestTaskDurationMs,
    q = T.data?.dailyUsage,
    Te = te.flatMap((e) =>
      !e.id.startsWith(`custom:`) || e.spritesheetUrl == null
        ? []
        : [
            {
              displayName: e.displayName,
              id: e.id,
              imageUrl: e.spritesheetUrl,
            },
          ],
    ),
    De =
      ge || q == null
        ? null
        : {
            cells: Nt({ dailyUsage: q, todayIso: y, view: L }),
            dailyValues: Ot({ dailyUsage: q, todayIso: y }),
            weeklyTotals: St({ dailyUsage: q, todayIso: y }),
            cumulativeTotals: Mt({ dailyUsage: q, todayIso: y }),
          },
    Oe = i.formatMessage({
      id: `profile.tokenUsage.chartLabel`,
      defaultMessage: `Token usage chart`,
      description: `Accessible label for the token usage dot chart`,
    }),
    ke = (0, $.jsx)(z, {
      id: `profile.header`,
      defaultMessage: `Profile`,
      description: `Header title for the profile page`,
    }),
    Ae = (e, t) => {
      ie((n) => (t ? e : n === e ? null : n));
    };
  return (
    (0, Q.useEffect)(() => {
      r.current || ((r.current = !0), H(t, _e, { profileOwner: `self` }));
    }, [t]),
    fe
      ? (0, $.jsx)(Wt, {
          contentClassName: `h-full justify-center`,
          fullWidth: !0,
          backSlot: (0, $.jsx)(`h1`, {
            className: `text-base font-normal text-token-text-primary`,
            children: ke,
          }),
          children: (0, $.jsxs)(`div`, {
            role: `alert`,
            className: `flex flex-col items-center justify-center gap-4 text-center text-sm leading-5 text-token-text-tertiary`,
            children: [
              (0, $.jsx)(Ft, { className: `icon-sm` }),
              (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [
                  (0, $.jsx)(z, {
                    id: `profile.fetchError`,
                    defaultMessage: `We’re having trouble loading your profile. Please try again later.`,
                    description: `Error shown when the profile page cannot be loaded`,
                  }),
                  W == null
                    ? null
                    : (0, $.jsx)(`span`, {
                        className: `whitespace-pre-wrap text-token-error-foreground`,
                        children: (0, $.jsx)(z, {
                          id: `profile.fetchErrorDetail`,
                          defaultMessage: `[Employee only] Error: {details}`,
                          description: `Internal build diagnostic detail shown when the profile page cannot be loaded`,
                          values: { details: W },
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : (0, $.jsxs)(Wt, {
          ref: se,
          className: `relative`,
          fullWidth: !0,
          backSlot: (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-between`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-base font-normal text-token-text-primary`,
                children: ke,
              }),
              (0, $.jsxs)(`div`, {
                className: `no-drag -mr-2 flex items-center gap-2`,
                children: [
                  s
                    ? (0, $.jsxs)(k, {
                        "aria-label": i.formatMessage({
                          id: `profile.giftCredits.ariaLabel`,
                          defaultMessage: `Gift credits`,
                          description: `Accessible label for opening the ChatGPT gift credits purchase flow from a Codex profile`,
                        }),
                        className: `h-7`,
                        color: `ghostActive`,
                        size: `toolbar`,
                        onClick: en,
                        children: [
                          (0, $.jsx)(an, {
                            "aria-hidden": !0,
                            className: `icon-xs`,
                          }),
                          (0, $.jsx)(z, {
                            id: `profile.giftCredits.label`,
                            defaultMessage: `Gift credits`,
                            description: `Button label beside Share on a Codex profile that opens the gift credits purchase flow`,
                          }),
                        ],
                      })
                    : null,
                  (0, $.jsx)(un, {}),
                  o &&
                  !U &&
                  !ge &&
                  K != null &&
                  be != null &&
                  Ce != null &&
                  q != null
                    ? (0, $.jsx)(Gi, {
                        dailyUsage: q,
                        displayName: be,
                        imageUrl: ye ? G : null,
                        petOptions: Te,
                        selectedPetId: ve ? M.id : null,
                        todayIso: y,
                        usageSummary: Ce,
                        username: K,
                      })
                    : null,
                  (0, $.jsx)(f, {
                    delayDuration: 0,
                    tooltipContent: (0, $.jsx)(z, {
                      id: `profile.privateTooltip`,
                      defaultMessage: `Your profile is only visible to you`,
                      description: `Tooltip explaining private profile visibility`,
                    }),
                    children: (0, $.jsxs)(`span`, {
                      tabIndex: 0,
                      className: `focus-visible:ring-token-focus flex h-7 cursor-default items-center gap-1.5 rounded-lg px-2 text-base text-token-text-secondary outline-none focus-visible:ring-1`,
                      children: [
                        (0, $.jsx)(Bt, { className: `icon-xs` }),
                        (0, $.jsx)(z, {
                          id: `profile.private`,
                          defaultMessage: `Private`,
                          description: `Private visibility badge label`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsxs)(k, {
                    "aria-label": i.formatMessage({
                      id: `profile.editProfileLabel`,
                      defaultMessage: `Edit profile`,
                      description: `Accessible label for opening the edit profile dialog`,
                    }),
                    className: `h-7`,
                    color: `ghostActive`,
                    disabled: U,
                    size: `toolbar`,
                    onClick: () => {
                      (H(t, Be, { action: V.CODEX_PROFILE_EDIT_ACTION_OPENED }),
                        de(!0));
                    },
                    children: [
                      (0, $.jsx)(O, {
                        "aria-hidden": !0,
                        className: `icon-xs`,
                      }),
                      (0, $.jsx)(z, {
                        id: `profile.editProfile`,
                        defaultMessage: `Edit`,
                        description: `Button label for opening the edit profile dialog`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          contentClassName: `max-w-[732px] pt-12`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-10`,
              children: [
                (0, $.jsx)(`section`, {
                  "aria-busy": U || void 0,
                  className: `flex flex-col items-center`,
                  children: U
                    ? (0, $.jsx)(ma, { avatar: M, showsPet: ve })
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `relative mb-4 size-20`,
                            children: [
                              (0, $.jsxs)(`label`, {
                                "aria-disabled": j.isPending,
                                className: w(
                                  `group relative flex size-20 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                                  j.isPending
                                    ? `cursor-default opacity-70`
                                    : `cursor-interaction`,
                                ),
                                children: [
                                  ye
                                    ? (0, $.jsx)(`img`, {
                                        src: G,
                                        alt: ``,
                                        className: `size-20 rounded-full object-cover`,
                                        onError: () => {
                                          P(G);
                                        },
                                      })
                                    : (0, $.jsx)(`div`, {
                                        className: `flex size-20 items-center justify-center rounded-full bg-token-text-tertiary text-[28px] font-normal text-token-button-foreground`,
                                        children: jt(xe),
                                      }),
                                  (0, $.jsx)(`span`, {
                                    className: w(
                                      `pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white opacity-0 dark:bg-black/60 electron-dark:bg-black/60`,
                                      !j.isPending &&
                                        `group-focus-within:opacity-100 group-hover:opacity-100`,
                                    ),
                                    children: (0, $.jsx)(O, {
                                      "aria-hidden": !0,
                                      className: `icon-sm`,
                                    }),
                                  }),
                                  (0, $.jsx)(`input`, {
                                    type: `file`,
                                    accept: `image/*`,
                                    "aria-label": i.formatMessage({
                                      id: `profile.photoInputLabel`,
                                      defaultMessage: `Change profile picture`,
                                      description: `Accessible label for the profile photo upload input`,
                                    }),
                                    className: `sr-only`,
                                    disabled: j.isPending,
                                    onClick: () => {
                                      H(t, Ne, {
                                        action:
                                          me.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_STARTED,
                                      });
                                    },
                                    onChange: (e) => {
                                      let n = e.currentTarget.files?.[0];
                                      ((e.currentTarget.value = ``),
                                        n != null &&
                                          (H(t, Ne, {
                                            action:
                                              me.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_IMAGE_SELECTED,
                                          }),
                                          pa(n).then(B, () => {
                                            (H(t, Ne, {
                                              action:
                                                me.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED,
                                            }),
                                              B(null));
                                          })));
                                    },
                                  }),
                                ],
                              }),
                              ve
                                ? (0, $.jsx)(`div`, {
                                    className: `absolute -right-8 -bottom-2 flex size-14 items-center justify-center`,
                                    children: (0, $.jsx)(La, { avatar: M }),
                                  })
                                : null,
                            ],
                          }),
                          (0, $.jsx)(`div`, {
                            className: `flex w-full justify-center`,
                            children: (0, $.jsx)(`h1`, {
                              className: `flex h-8 w-full items-center justify-center text-center text-[24px] leading-8 font-normal tracking-[0.072px] text-token-text-primary`,
                              children: (0, $.jsx)(`span`, {
                                className: `block max-w-full min-w-0 truncate px-2`,
                                children:
                                  xe ??
                                  (0, $.jsx)(z, {
                                    id: `profile.nameFallback`,
                                    defaultMessage: `ChatGPT user`,
                                    description: `Fallback profile display name`,
                                  }),
                              }),
                            }),
                          }),
                          K != null || Se != null
                            ? (0, $.jsx)(`div`, {
                                className: `mt-1 flex min-h-7 items-center gap-1.5 text-base leading-5 font-normal text-token-text-tertiary`,
                                children:
                                  K == null
                                    ? Se == null
                                      ? null
                                      : (0, $.jsx)(oa, { accountLabel: Se })
                                    : (0, $.jsxs)($.Fragment, {
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `max-w-[240px] min-w-0 truncate`,
                                            children: (0, $.jsx)(z, {
                                              id: `profile.usernameValue`,
                                              defaultMessage: `@{username}`,
                                              description: `Profile username shown with an at-sign prefix`,
                                              values: { username: K },
                                            }),
                                          }),
                                          Se == null
                                            ? null
                                            : (0, $.jsxs)($.Fragment, {
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    "aria-hidden": !0,
                                                    className: `text-token-text-tertiary/50`,
                                                    children: Ga,
                                                  }),
                                                  (0, $.jsx)(oa, {
                                                    accountLabel: Se,
                                                  }),
                                                ],
                                              }),
                                        ],
                                      }),
                              })
                            : null,
                        ],
                      }),
                }),
                (0, $.jsx)(`section`, {
                  className: `flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-token-border-light bg-transparent`,
                  children: (0, $.jsx)(`div`, {
                    className: `flex w-full items-center`,
                    children: U
                      ? (0, $.jsx)(ga, {})
                      : ge
                        ? (0, $.jsx)(va, {})
                        : (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(Oa, {
                                value: pt(i, Ce?.totalTextTokens),
                                label: (0, $.jsx)(z, {
                                  id: `profile.stats.lifetimeTokens`,
                                  defaultMessage: `Lifetime tokens`,
                                  description: `Label for lifetime token usage on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(ka, {}),
                              (0, $.jsx)(Oa, {
                                value: pt(i, Ce?.peakTokens),
                                label: (0, $.jsx)(z, {
                                  id: `profile.stats.peakTokens`,
                                  defaultMessage: `Peak tokens`,
                                  description: `Label for peak token usage on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(ka, {}),
                              we == null
                                ? null
                                : (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(Oa, {
                                        value: ft(i, we),
                                        label: (0, $.jsx)(z, {
                                          id: `profile.stats.longestTask`,
                                          defaultMessage: `Longest task`,
                                          description: `Label for longest task duration on the profile page`,
                                        }),
                                      }),
                                      (0, $.jsx)(ka, {}),
                                    ],
                                  }),
                              (0, $.jsx)(Oa, {
                                value: _t(i, Ce?.currentStreakDays),
                                label: (0, $.jsx)(z, {
                                  id: `profile.stats.currentStreak`,
                                  defaultMessage: `Current streak`,
                                  description: `Label for current usage streak on the profile page`,
                                }),
                              }),
                              (0, $.jsx)(ka, {}),
                              (0, $.jsx)(Oa, {
                                value: _t(i, Ce?.longestStreakDays),
                                label: (0, $.jsx)(z, {
                                  id: `profile.stats.longestStreak`,
                                  defaultMessage: `Longest streak`,
                                  description: `Label for longest usage streak on the profile page`,
                                }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, $.jsxs)(`section`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between text-base leading-5`,
                      children: [
                        (0, $.jsx)(`h2`, {
                          className: `text-base leading-5 font-medium text-token-text-primary`,
                          children: (0, $.jsx)(z, {
                            id: `profile.tokenUsage.title`,
                            defaultMessage: `Token activity`,
                            description: `Heading above the token usage chart`,
                          }),
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, $.jsx)(Ia, {
                              active: L === `daily`,
                              disabled: U,
                              onSelect: () => {
                                re(`daily`);
                              },
                              children: (0, $.jsx)(z, {
                                id: `profile.tokenUsage.daily`,
                                defaultMessage: `Daily`,
                                description: `Daily token usage chart tab`,
                              }),
                            }),
                            (0, $.jsx)(Ia, {
                              active: L === `weekly`,
                              disabled: U,
                              onSelect: () => {
                                re(`weekly`);
                              },
                              children: (0, $.jsx)(z, {
                                id: `profile.tokenUsage.weekly`,
                                defaultMessage: `Weekly`,
                                description: `Weekly token usage chart tab`,
                              }),
                            }),
                            (0, $.jsx)(Ia, {
                              active: L === `cumulative`,
                              disabled: U,
                              onSelect: () => {
                                re(`cumulative`);
                              },
                              children: (0, $.jsx)(z, {
                                id: `profile.tokenUsage.cumulative`,
                                defaultMessage: `Cumulative`,
                                description: `Cumulative token usage chart tab`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    U
                      ? (0, $.jsx)(ya, {
                          columnCount: b,
                          monthLabelCount: x.length,
                        })
                      : De == null
                        ? (0, $.jsx)(Sa, {})
                        : (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2 [--profile-usage-level-0:var(--color-token-border-light)] [--profile-usage-level-1:color-mix(in_srgb,var(--color-token-primary)_22%,transparent)] [--profile-usage-level-2:color-mix(in_srgb,var(--color-token-primary)_42%,transparent)] [--profile-usage-level-3:color-mix(in_srgb,var(--color-token-primary)_68%,transparent)] [--profile-usage-level-4:var(--color-token-primary)]`,
                            role: `img`,
                            "aria-label": Oe,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px]`,
                                    style: {
                                      gridTemplateColumns: `repeat(${b}, minmax(1px, 1fr))`,
                                    },
                                    children: De.cells.map((e, t) => {
                                      let n = wt(t, y);
                                      if (L === `daily` && n > y) return null;
                                      let r = Math.floor(t / 7),
                                        i = L !== `daily`,
                                        o = i && R === `${L}:${r}`,
                                        s = Ba[e];
                                      i && e > 0
                                        ? (s = o ? Ha : Va)
                                        : o && (s = Ua);
                                      let c = (0, $.jsx)(
                                        `div`,
                                        {
                                          className: `aspect-square w-full`,
                                          children: (0, $.jsx)(v.div, {
                                            animate: { opacity: 1, scale: 1 },
                                            className: w(
                                              `size-full rounded-[4px] transition-colors duration-relaxed ease-out [corner-shape:var(--codex-corner-shape)]`,
                                              s,
                                            ),
                                            initial: a
                                              ? !1
                                              : { opacity: 0, scale: 0.7 },
                                            transition: a
                                              ? { duration: 0 }
                                              : {
                                                  delay: Aa(t),
                                                  duration: 0.52,
                                                  ease: [0.22, 1, 0.36, 1],
                                                },
                                          }),
                                        },
                                        `${L}-${t}`,
                                      );
                                      if (L !== `daily`) return c;
                                      let l = `daily:${t}`;
                                      return (0, $.jsx)(
                                        f,
                                        {
                                          delayDuration: 0,
                                          open: R === l,
                                          onOpenChange: (e) => {
                                            Ae(l, e);
                                          },
                                          portalContainer: ae,
                                          tooltipContent: (0, $.jsx)(Na, {
                                            dateIso: n,
                                            tokenCount: De.dailyValues[t] ?? 0,
                                            todayIso: y,
                                          }),
                                          children: c,
                                        },
                                        `${L}-${t}`,
                                      );
                                    }),
                                  }),
                                  L === `weekly` || L === `cumulative`
                                    ? (0, $.jsx)(`div`, {
                                        className: `pointer-events-none absolute inset-0 flex`,
                                        children: (L === `weekly`
                                          ? De.weeklyTotals
                                          : De.cumulativeTotals
                                        ).map((e, t) => {
                                          let n = wt(t * 7, y),
                                            r = `${L}:${t}`;
                                          return (0, $.jsx)(
                                            f,
                                            {
                                              delayDuration: 0,
                                              open: R === r,
                                              onOpenChange: (e) => {
                                                Ae(r, e);
                                              },
                                              portalContainer: ae,
                                              tooltipContent: (0, $.jsx)(Pa, {
                                                chartView: L,
                                                tokenCount: e,
                                                weekStartIso: n,
                                              }),
                                              children: (0, $.jsx)(`div`, {
                                                "aria-hidden": !0,
                                                className: `pointer-events-auto h-full min-w-px flex-1`,
                                              }),
                                            },
                                            r,
                                          );
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                              (0, $.jsx)(`div`, {
                                className: `flex items-center justify-between text-xs leading-4 text-token-text-tertiary`,
                                children: x.map((e) =>
                                  (0, $.jsx)(
                                    `span`,
                                    {
                                      children: i.formatDate(new Date(e), {
                                        month: `short`,
                                        timeZone: `UTC`,
                                      }),
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          }),
                  ],
                }),
                c
                  ? (0, $.jsx)(Ca, {
                      insights: E,
                      isLoading: U,
                      isUnavailable: ge,
                    })
                  : null,
              ],
            }),
            ce == null
              ? null
              : (0, $.jsx)(Pn, {
                  source: ce,
                  onCancel: () => {
                    B(null);
                  },
                  onSave: (e) => {
                    (B(null),
                      F(e.previewUrl),
                      j.mutate(e.photo, {
                        onError: () => {
                          (H(t, Ne, {
                            action:
                              me.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED,
                          }),
                            F(null));
                        },
                        onSuccess: () => {
                          (H(t, Ne, {
                            action:
                              me.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_SUCCEEDED,
                          }),
                            P(null),
                            F(null));
                        },
                      }));
                  },
                }),
            ue
              ? (0, $.jsx)(ia, {
                  displayName: xe,
                  failedProfileImageUrl: N,
                  isPhotoSaving: j.isPending,
                  isTextSaving: ee,
                  profileImageUrl: G,
                  username: K,
                  onCancel: () => {
                    de(!1);
                  },
                  onProfileImageError: P,
                  onSaveError: (e) => {
                    H(t, Be, {
                      action: V.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED,
                      ...e,
                    });
                  },
                  onPhotoChangeImageSelected: () => {
                    H(t, Be, {
                      action:
                        V.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_IMAGE_SELECTED,
                    });
                  },
                  onPhotoChangeStarted: () => {
                    H(t, Be, {
                      action:
                        V.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_STARTED,
                    });
                  },
                  onSaveProfile: async (e) => {
                    (await D.mutateAsync(e), P(null));
                  },
                  onSaveSuccess: () => {
                    H(t, Be, {
                      action: V.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED,
                    });
                  },
                  onSaveUsername: (e) => A.mutateAsync(e),
                })
              : null,
          ],
        })
  );
}
function ia({
  displayName: e,
  failedProfileImageUrl: t,
  isPhotoSaving: n,
  isTextSaving: r,
  onCancel: i,
  onPhotoChangeImageSelected: a,
  onPhotoChangeStarted: o,
  onProfileImageError: s,
  onSaveError: c,
  onSaveProfile: l,
  onSaveSuccess: u,
  onSaveUsername: d,
  profileImageUrl: f,
  username: m,
}) {
  let h = nt(),
    g = (0, Q.useId)(),
    _ = (0, Q.useId)(),
    v = (0, Q.useId)(),
    y = (0, Q.useId)(),
    [b, x] = (0, Q.useState)(e ?? ``),
    [S, C] = (0, Q.useState)(m ?? ``),
    [T, E] = (0, Q.useState)(null),
    [D, A] = (0, Q.useState)(null),
    [ee, j] = (0, Q.useState)(null),
    [M, N] = (0, Q.useState)(null),
    [P, ne] = (0, Q.useState)(null),
    [F, I] = (0, Q.useState)(null),
    [L, re] = (0, Q.useState)(!1),
    R = L || r || n,
    ie = gt(S),
    ae = R || b.trim().length === 0 || !ie.ok,
    oe = T?.previewUrl ?? f,
    se = oe != null && oe !== t,
    ce = m?.trim() ?? ``,
    le = async () => {
      if (ae) return;
      (j(null), N(null), ne(null), I(null));
      let t = b.trim(),
        n = ht(S),
        r = e?.trim() ?? ``;
      (x(t), C(n));
      let a = t.length > 0 && t !== r,
        o = n !== ce,
        s = T != null,
        f = {},
        p = 0,
        m = null;
      if ((a && ((f.displayName = t), (p += 1)), o)) {
        let e = gt(n);
        if (!e.ok) {
          N(fa(e.reason, h));
          return;
        }
        m = e.username;
      }
      if ((s && ((f.photo = T.photo), (p += 1)), m == null && p === 0)) {
        i();
        return;
      }
      re(!0);
      let g = Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
        _ = Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED;
      try {
        (m != null &&
          ((g = Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
          await d(m),
          (g = Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          p > 0 &&
            ((_ = Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
            await l(f),
            (_ = Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
          u(),
          i());
      } catch (e) {
        if (
          (c({ profileDetailsUpdateApiStatus: _, usernameUpdateApiStatus: g }),
          g === Je.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED)
        ) {
          N(ca(e, h));
          return;
        }
        if (e instanceof $t) {
          ne(la(e.uploadError, h));
          return;
        }
        if (p > 1) {
          I(ua(e, h));
          return;
        }
        if (a) {
          j(sa(e, h));
          return;
        }
        ne(la(e, h));
      } finally {
        re(!1);
      }
    };
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(p, {
        open: !0,
        onOpenChange: (e) => {
          !e && !R && i();
        },
        contentProps: {
          onOpenAutoFocus: (e) => {
            (e.preventDefault(),
              e.currentTarget instanceof HTMLElement &&
                e.currentTarget.focus());
          },
          tabIndex: -1,
        },
        showDialogClose: !1,
        size: `default`,
        children: (0, $.jsxs)(Ie, {
          as: `form`,
          className: `gap-0`,
          onSubmit: (e) => {
            (e.preventDefault(), le());
          },
          children: [
            (0, $.jsx)(B, {
              children: (0, $.jsx)(xe, {
                title: (0, $.jsx)(De, {
                  className: `contents`,
                  children: (0, $.jsx)(z, {
                    id: `profile.editProfileTitle`,
                    defaultMessage: `Edit profile`,
                    description: `Title for the edit profile dialog`,
                  }),
                }),
                subtitle: (0, $.jsx)(te, {
                  className: `sr-only`,
                  children: (0, $.jsx)(z, {
                    id: `profile.editProfileDescription`,
                    defaultMessage: `Update your profile picture, display name, and username`,
                    description: `Accessible description for the edit profile dialog`,
                  }),
                }),
              }),
            }),
            (0, $.jsx)(B, {
              className: `items-center pt-6`,
              children: (0, $.jsxs)(`label`, {
                "aria-disabled": R,
                className: w(
                  `relative flex size-32 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                  ta.profilePhotoInput,
                  R ? `cursor-default opacity-70` : `cursor-interaction`,
                ),
                children: [
                  se
                    ? (0, $.jsx)(`img`, {
                        src: oe,
                        alt: ``,
                        className: `size-32 rounded-full object-cover`,
                        onError: () => {
                          s(oe);
                        },
                      })
                    : (0, $.jsx)(`div`, {
                        className: `flex size-32 items-center justify-center rounded-full bg-token-text-tertiary text-[40px] font-normal text-token-button-foreground`,
                        children: jt(b),
                      }),
                  (0, $.jsx)(`span`, {
                    className: w(
                      `absolute right-1 bottom-1 flex size-9 items-center justify-center rounded-full text-white`,
                      ta.profilePhotoEditBadge,
                    ),
                    children: (0, $.jsx)(O, {
                      "aria-hidden": !0,
                      className: `icon-sm`,
                    }),
                  }),
                  (0, $.jsx)(`input`, {
                    type: `file`,
                    accept: `image/*`,
                    "aria-label": h.formatMessage({
                      id: `profile.photoInputLabel`,
                      defaultMessage: `Change profile picture`,
                      description: `Accessible label for the profile photo upload input`,
                    }),
                    className: `sr-only`,
                    disabled: R,
                    onClick: o,
                    onChange: (e) => {
                      let t = e.currentTarget.files?.[0];
                      ((e.currentTarget.value = ``),
                        t != null &&
                          (a(),
                          pa(t).then(A, () => {
                            A(null);
                          })));
                    },
                  }),
                ],
              }),
            }),
            (0, $.jsx)(B, {
              className: `pt-8`,
              children: (0, $.jsxs)(`div`, {
                className: `divide-y-[0.5px] divide-token-border overflow-hidden rounded-lg border border-token-border`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            htmlFor: _,
                            className: `text-sm leading-5 text-token-text-primary`,
                            children: (0, $.jsx)(z, {
                              id: `profile.nameInputLabel`,
                              defaultMessage: `Display name`,
                              description: `Accessible label for the editable profile display name`,
                            }),
                          }),
                          ee == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                id: g,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: ee,
                              }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `flex h-10 min-w-0 items-center rounded-lg border border-token-input-border bg-token-input-background px-3 focus-within:border-token-focus-border`,
                        children: (0, $.jsx)(`input`, {
                          id: _,
                          "aria-describedby": ee == null ? void 0 : g,
                          "aria-invalid": ee != null,
                          className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                          disabled: R,
                          maxLength: 64,
                          onChange: (e) => {
                            (x(e.target.value), j(null), I(null));
                          },
                          onFocus: (e) => {
                            e.currentTarget.select();
                          },
                          spellCheck: !1,
                          value: b,
                        }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, $.jsx)(`label`, {
                                htmlFor: y,
                                className: `text-sm leading-5 text-token-text-primary`,
                                children: (0, $.jsx)(z, {
                                  id: `profile.usernameInputLabel`,
                                  defaultMessage: `Username`,
                                  description: `Accessible label for the editable profile username`,
                                }),
                              }),
                              M == null ? null : (0, $.jsx)(aa, {}),
                            ],
                          }),
                          M == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                id: v,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: M,
                              }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex h-10 min-w-0 items-center gap-0.5 rounded-lg border border-token-input-border bg-token-input-background px-3 text-base leading-6 focus-within:border-token-focus-border`,
                        children: [
                          (0, $.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `text-token-text-tertiary`,
                            children: (0, $.jsx)(z, {
                              id: `profile.usernamePrefix`,
                              defaultMessage: `@`,
                              description: `Prefix shown before a profile username`,
                            }),
                          }),
                          (0, $.jsx)(`input`, {
                            id: y,
                            "aria-describedby": M == null ? void 0 : v,
                            "aria-invalid": M != null,
                            className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                            disabled: R,
                            maxLength: 20,
                            onChange: (e) => {
                              let t = xt(e.target.value),
                                n = gt(t);
                              (C(t), N(n.ok ? null : fa(n.reason, h)), I(null));
                            },
                            onFocus: (e) => {
                              e.currentTarget.select();
                            },
                            spellCheck: !1,
                            value: S,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            P != null || F != null
              ? (0, $.jsx)(B, {
                  className: `pt-3`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      P == null
                        ? null
                        : (0, $.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: P,
                          }),
                      F == null
                        ? null
                        : (0, $.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: F,
                          }),
                    ],
                  }),
                })
              : null,
            (0, $.jsx)(B, {
              className: `pt-5`,
              children: (0, $.jsxs)(Se, {
                children: [
                  (0, $.jsx)(k, {
                    color: `ghost`,
                    disabled: R,
                    onClick: i,
                    children: (0, $.jsx)(z, {
                      id: `profile.editProfileCancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels profile editing`,
                    }),
                  }),
                  (0, $.jsx)(k, {
                    type: `submit`,
                    disabled: ae,
                    loading: L,
                    children: (0, $.jsx)(z, {
                      id: `profile.editProfileSave`,
                      defaultMessage: `Save`,
                      description: `Button that saves profile edits`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      D == null
        ? null
        : (0, $.jsx)(Pn, {
            source: D,
            onCancel: () => {
              A(null);
            },
            onSave: (e) => {
              (E(e), A(null), ne(null), I(null));
            },
          }),
    ],
  });
}
function aa() {
  let e = (0, Z.c)(6),
    t = nt(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(z, {
        id: `profile.usernameHelper`,
        defaultMessage: `Use 3-20 lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Helper text explaining allowed username characters`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t.formatMessage({
        id: `profile.usernameRequirementsLabel`,
        defaultMessage: `Username requirements`,
        description: `Accessible label for the username requirements tooltip trigger`,
      })),
      (e[1] = t),
      (e[2] = r));
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Ut, { "aria-hidden": !0, className: `icon-2xs` })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === r
      ? (a = e[5])
      : ((a = (0, $.jsx)(f, {
          side: `top`,
          tooltipContent: n,
          children: (0, $.jsx)(`button`, {
            type: `button`,
            "aria-label": r,
            className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-token-text-tertiary outline-none hover:text-token-text-primary focus-visible:ring-1 focus-visible:ring-token-focus-border`,
            children: i,
          }),
        })),
        (e[4] = r),
        (e[5] = a)),
    a
  );
}
function oa(e) {
  let t = (0, Z.c)(2),
    { accountLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`span`, {
          className: `inline-flex h-6 items-center rounded-lg border border-token-border-light px-[5px] text-sm leading-5 text-token-text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function sa(e, t) {
  return (
    da(e) ??
    t.formatMessage({
      id: `profile.displayNameUpdateError`,
      defaultMessage: `Unable to update display name`,
      description: `Fallback error shown when profile display name update fails`,
    })
  );
}
function ca(e, t) {
  return e instanceof vt
    ? fa(e.reason, t)
    : (da(e) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function la(e, t) {
  return (
    da(e) ??
    t.formatMessage({
      id: `profile.photoUpdateError`,
      defaultMessage: `Unable to update profile picture`,
      description: `Fallback error shown when profile picture update fails`,
    })
  );
}
function ua(e, t) {
  return (
    da(e) ??
    t.formatMessage({
      id: `profile.updateError`,
      defaultMessage: `Unable to update profile`,
      description: `Fallback error shown when profile update fails`,
    })
  );
}
function da(e) {
  if (e instanceof Error) {
    let t = D(e);
    if (t != null) return t.message;
    if (e.message.length > 0) {
      try {
        let t = Wa.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function fa(e, t) {
  switch (e) {
    case `empty`:
      return t.formatMessage({
        id: `profile.usernameValidation.empty`,
        defaultMessage: `Enter a username`,
        description: `Error shown when submitting an empty profile username`,
      });
    case `invalidCharacters`:
      return t.formatMessage({
        id: `profile.usernameValidation.invalidCharacters`,
        defaultMessage: `Use only lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Error shown when a profile username contains unsupported characters`,
      });
    case `tooLong`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooLong`,
        defaultMessage: `Username must be 20 characters or fewer`,
        description: `Error shown when a profile username is too long`,
      });
    case `tooShort`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooShort`,
        defaultMessage: `Username must be at least 3 characters long`,
        description: `Error shown when a profile username is too short`,
      });
  }
}
function pa(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile photo`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile photo`));
          return;
        }
        t({
          contentType: e.type.trim() || `image/jpeg`,
          dataUrl: r.result,
          filename: e.name.trim() || `profile-photo.jpg`,
        });
      }),
      r.readAsDataURL(e));
  });
}
function ma(e) {
  let t = (0, Z.c)(8),
    { avatar: n, showsPet: r } = e,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(ha, {
        className: `absolute top-0 left-[72px] size-20 rounded-full`,
      })),
      (a = (0, $.jsx)(ha, {
        className: `absolute top-[100px] left-0 h-8 w-56 rounded-lg`,
      })),
      (o = (0, $.jsx)(ha, {
        className: `absolute top-[136px] left-12 h-5 w-32 rounded-lg`,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = r
        ? (0, $.jsx)(`div`, {
            className: `absolute top-8 left-32 flex size-14 items-center justify-center`,
            children: (0, $.jsx)(La, { avatar: n }),
          })
        : null),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] === s
      ? (c = t[7])
      : ((c = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `relative h-[152px] w-56`,
          children: [i, a, o, s],
        })),
        (t[6] = s),
        (t[7] = c)),
    c
  );
}
function ha(e) {
  let t = (0, Z.c)(4),
    { className: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = w(ta.profileLoadingBlock, `block`, n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(`span`, { "aria-hidden": !0, className: r })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function ga() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)($.Fragment, { children: Ka.map(_a) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function _a(e, t) {
  return (0, $.jsxs)(
    Q.Fragment,
    {
      children: [
        t > 0 ? (0, $.jsx)(ka, {}) : null,
        (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center gap-1 overflow-hidden px-3 py-2.5`,
          children: [
            (0, $.jsx)(ha, { className: `h-5 w-12 rounded-md` }),
            (0, $.jsx)(ha, { className: `h-5 w-20 rounded-md` }),
          ],
        }),
      ],
    },
    e,
  );
}
function va() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[60px] w-full items-center justify-center px-4 py-3 text-center text-base text-token-text-tertiary`,
          children: (0, $.jsx)(z, {
            id: `profile.stats.unavailable`,
            defaultMessage: `Profile stats unavailable`,
            description: `Empty state shown when profile stats fail to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ya(e) {
  let t = (0, Z.c)(12),
    { columnCount: n, monthLabelCount: r } = e,
    i = `repeat(${n}, minmax(1px, 1fr))`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = { gridTemplateColumns: i }), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = Array.from({ length: n * 7 }, xa)), (t[2] = n), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, $.jsx)(`div`, {
        className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
        style: a,
        children: o,
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, $.jsx)(`div`, {
        className: `flex items-center justify-between`,
        children: Array.from({ length: r }, ba),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex flex-col gap-2`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function ba(e, t) {
  return (0, $.jsx)(ha, { className: `h-4 w-6 rounded-md` }, t);
}
function xa(e, t) {
  return (0, $.jsx)(ha, { className: `aspect-square w-full rounded-[4px]` }, t);
}
function Sa() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
          children: (0, $.jsx)(z, {
            id: `profile.tokenUsage.unavailable`,
            defaultMessage: `Token usage unavailable`,
            description: `Empty state shown when profile token usage fails to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ca(e) {
  let t = (0, Z.c)(6),
    { insights: n, isLoading: r, isUnavailable: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = []), (t[0] = a))
    : (a = t[0]);
  let { availablePlugins: o } = Xe(et, a);
  if (r) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Ta, {})), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (!i && n != null) {
    let e;
    return (
      t[2] !== n || t[3] !== o
        ? ((e = (0, $.jsx)(_n, { insights: n, plugins: o })),
          (t[2] = n),
          (t[3] = o),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let s;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(wa, {})), (t[5] = s))
      : (s = t[5]),
    s
  );
}
function wa() {
  let e = (0, Z.c)(6),
    t = nt(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(z, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`div`, {
        className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
        children: (0, $.jsx)(z, {
          id: `profile.activity.unavailable`,
          defaultMessage: `Activity insights unavailable`,
          description: `Empty state shown when profile activity stats fail to load`,
        }),
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === n
      ? (a = e[5])
      : ((a = (0, $.jsxs)(`section`, {
          "aria-label": n,
          className: `flex flex-col gap-2`,
          children: [r, i],
        })),
        (e[4] = n),
        (e[5] = a)),
    a
  );
}
function Ta() {
  let e = (0, Z.c)(8),
    t = nt(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(z, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          r,
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, Da),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-token-text-primary`,
        children: (0, $.jsx)(z, {
          id: `profile.activity.plugins.title`,
          defaultMessage: `Most used plugins`,
          description: `Heading for the most used Codex plugins on the profile page`,
        }),
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          a,
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, Ea),
          }),
        ],
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] === n
      ? (s = e[7])
      : ((s = (0, $.jsxs)(`section`, {
          "aria-busy": !0,
          "aria-label": n,
          className: `grid grid-cols-2 gap-10`,
          children: [i, o],
        })),
        (e[6] = n),
        (e[7] = s)),
    s
  );
}
function Ea(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, $.jsx)(ha, { className: `size-6 rounded-lg` }),
            (0, $.jsx)(ha, { className: `h-5 w-24 rounded-md` }),
          ],
        }),
        (0, $.jsx)(ha, { className: `h-5 w-14 rounded-md` }),
      ],
    },
    t,
  );
}
function Da(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsx)(ha, { className: `h-5 w-24 rounded-md` }),
        (0, $.jsx)(ha, { className: `h-5 w-10 rounded-md` }),
      ],
    },
    t,
  );
}
function Oa(e) {
  let t = (0, Z.c)(7),
    { label: n, value: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, $.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-primary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, $.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-secondary`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center overflow-hidden px-3 py-2.5 text-center text-base font-normal`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function ka() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `my-3 w-px shrink-0 self-stretch rounded-sm bg-token-border-light`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Aa(e) {
  let t = e % 7;
  return (Math.floor(e / 7) * 8 + t * 12) / 1e3;
}
function ja(e) {
  let t = wt(0, e),
    n = new Date(`${e}T00:00:00.000Z`),
    r = n.getUTCMonth(),
    i = n.getUTCFullYear(),
    a = Math.min(za, Ma(t, e) + 1);
  return Array.from({ length: a }, (e, t) => {
    let n = t - (a - 1);
    return new Date(Date.UTC(i, r + n, 1)).toISOString();
  });
}
function Ma(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`),
    r = new Date(`${t}T00:00:00.000Z`);
  return (
    (r.getUTCFullYear() - n.getUTCFullYear()) * 12 +
    r.getUTCMonth() -
    n.getUTCMonth()
  );
}
function Na(e) {
  let t = (0, Z.c)(10),
    { dateIso: n, tokenCount: r, todayIso: i } = e,
    a = nt(),
    o;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((o = Fa({ dateIso: n, intl: a, todayIso: i })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== a || t[5] !== r
    ? ((s = pt(a, r)), (t[4] = a), (t[5] = r), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsx)(z, {
          id: `profile.tokenUsage.cellTooltip`,
          defaultMessage: `{tokens} tokens on {date}`,
          description: `Tooltip for a token usage chart cell`,
          values: { date: o, tokens: s },
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Pa(e) {
  let t = (0, Z.c)(10),
    { chartView: n, tokenCount: r, weekStartIso: i } = e,
    a = nt(),
    o;
  t[0] !== a || t[1] !== r
    ? ((o = pt(a, r)), (t[0] = a), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== a || t[4] !== i
    ? ((c = a.formatDate(new Date(`${i}T00:00:00.000Z`), {
        day: `numeric`,
        month: `short`,
        timeZone: `UTC`,
        year: `numeric`,
      })),
      (t[3] = a),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l = c,
    u;
  return (
    t[6] !== n || t[7] !== s || t[8] !== l
      ? ((u =
          n === `weekly`
            ? (0, $.jsx)(z, {
                id: `profile.tokenUsage.weekTooltip`,
                defaultMessage: `{tokens} tokens on week of {weekStart}`,
                description: `Tooltip for a weekly token usage chart column`,
                values: { tokens: s, weekStart: l },
              })
            : (0, $.jsx)(z, {
                id: `profile.tokenUsage.cumulativeWeekTooltip`,
                defaultMessage: `{tokens} tokens through week of {weekStart}`,
                description: `Tooltip for a cumulative token usage chart column`,
                values: { tokens: s, weekStart: l },
              })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Fa({ dateIso: e, intl: t, todayIso: n }) {
  let r = new Date(`${e}T00:00:00.000Z`),
    i = t.formatDate(r, { day: `numeric`, month: `short`, timeZone: `UTC` }),
    a = r.getUTCFullYear();
  return a === Number(n.slice(0, 4)) ? i : `${i}, ${a}`;
}
function Ia(e) {
  let t = (0, Z.c)(10),
    { active: n, children: r, disabled: i, onSelect: a } = e,
    o = i ? `cursor-default` : `cursor-interaction`,
    s = n ? `text-token-text-primary` : `text-token-text-tertiary`,
    c =
      !n &&
      !i &&
      `hover:text-token-text-primary focus-visible:text-token-text-primary`,
    l;
  t[0] !== o || t[1] !== s || t[2] !== c
    ? ((l = w(
        `text-base leading-5 font-normal outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
        o,
        s,
        c,
      )),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l))
    : (l = t[3]);
  let u;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== l
      ? ((u = (0, $.jsx)(`button`, {
          type: `button`,
          className: l,
          "aria-pressed": n,
          disabled: i,
          onClick: a,
          children: r,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function La(e) {
  let t = (0, Z.c)(10),
    { avatar: n } = e,
    [r, i] = (0, Q.useState)(!1),
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = () => {
        i(!0);
      }),
      (o = () => {
        i(!1);
      }),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s = r ? `jumping` : `idle`,
    c;
  t[2] !== n.assetRef ||
  t[3] !== n.spriteVersionNumber ||
  t[4] !== n.spritesheetUrl ||
  t[5] !== s
    ? ((c = (0, $.jsx)(ut, {
        assetRef: n.assetRef,
        className: `scale-75`,
        spriteVersionNumber: n.spriteVersionNumber,
        spritesheetUrl: n.spritesheetUrl,
        state: s,
      })),
      (t[2] = n.assetRef),
      (t[3] = n.spriteVersionNumber),
      (t[4] = n.spritesheetUrl),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== n.id || t[8] !== c
      ? ((l = (0, $.jsx)(`div`, {
          className: `flex size-14 shrink-0 items-center justify-center overflow-visible`,
          "data-avatar-id": n.id,
          onPointerEnter: a,
          onPointerLeave: o,
          children: c,
        })),
        (t[7] = n.id),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Ra(e) {
  let t = Object.fromEntries(Object.entries(e));
  if (Object.keys(t).length === 0) return e.stack ?? e.message;
  try {
    return JSON.stringify(
      { name: e.name, message: e.message, stack: e.stack, ...t },
      null,
      2,
    );
  } catch {
    return e.stack ?? e.message;
  }
}
var Z, Q, $, za, Ba, Va, Ha, Ua, Wa, Ga, Ka;
e(() => {
  ((Z = _()),
    N(),
    We(),
    d(),
    se(),
    r(),
    (Q = t(T(), 1)),
    Fe(),
    C(),
    fe(),
    lt(),
    ot(),
    ct(),
    sn(),
    u(),
    j(),
    i(),
    U(),
    Te(),
    tn(),
    It(),
    nn(),
    Rt(),
    A(),
    Ht(),
    S(),
    $e(),
    gn(),
    W(),
    Gt(),
    re(),
    Ge(),
    F(),
    Me(),
    ve(),
    ue(),
    An(),
    At(),
    nr(),
    Xt(),
    Zi(),
    na(),
    ($ = q()),
    (za = 12),
    (Ba = {
      0: `bg-[var(--profile-usage-level-0)]`,
      1: `bg-[var(--profile-usage-level-1)]`,
      2: `bg-[var(--profile-usage-level-2)]`,
      3: `bg-[var(--profile-usage-level-3)]`,
      4: `bg-[var(--profile-usage-level-4)]`,
    }),
    (Va = `bg-[color-mix(in_srgb,var(--color-token-primary)_78%,transparent)]`),
    (Ha = `bg-[var(--color-token-primary)] ring-1 ring-[color-mix(in_srgb,var(--color-token-primary)_55%,transparent)]`),
    (Ua = `bg-[color-mix(in_srgb,var(--color-token-primary)_14%,var(--profile-usage-level-0))]`),
    (Wa = Re({ type: Ze(), msg: Ze() })),
    (Ga = `·`),
    (Ka = [
      `totalTextTokens`,
      `peakTokens`,
      `longestTaskDurationMs`,
      `currentStreakDays`,
      `longestStreakDays`,
    ]));
})();
export { ra as Profile };
//# sourceMappingURL=profile-DsUvjM9F.js.map
