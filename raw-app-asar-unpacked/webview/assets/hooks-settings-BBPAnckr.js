import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Af as r,
  C0 as i,
  CV as a,
  Cw as o,
  DK as s,
  Df as c,
  Du as l,
  Eu as u,
  Ew as d,
  GJ as f,
  HX as p,
  I2 as m,
  JA as h,
  KJ as g,
  L2 as _,
  Mq as v,
  Nq as y,
  O2 as b,
  Ow as x,
  S0 as S,
  SK as C,
  SV as w,
  Tx as T,
  WJ as E,
  XA as D,
  _0 as O,
  _Y as k,
  _f as A,
  aJ as j,
  bK as M,
  bf as N,
  cY as P,
  dY as F,
  df as I,
  dj as ee,
  ff as L,
  fs as te,
  gf as R,
  hs as ne,
  k2 as z,
  kK as B,
  kf as V,
  mY as H,
  mf as U,
  ms as W,
  nS as G,
  oj as re,
  pY as ie,
  ps as ae,
  qJ as oe,
  sJ as se,
  sY as ce,
  tS as le,
  vu as ue,
  vw as de,
  wx as fe,
  x0 as pe,
  y2 as me,
  yY as K,
  yu as he,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  ft as ge,
  pt as _e,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Bi as ve,
  Di as ye,
  Ei as be,
  Fi as xe,
  Hr as Se,
  Ii as Ce,
  Li as we,
  Ma as Te,
  Mi as Ee,
  Ni as De,
  Oi as Oe,
  Pi as ke,
  Ri as Ae,
  Ti as je,
  Ur as Me,
  ja as Ne,
  ki as Pe,
  wi as Fe,
  zi as Ie,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Gn as Le,
  Kn as Re,
  ct as ze,
  g as Be,
  h as Ve,
  ot as He,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  a as Ue,
  d as We,
  l as Ge,
  o as Ke,
  p as qe,
  u as Je,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as q,
  g as Ye,
  p as Xe,
  ut as Ze,
  v as Qe,
  vt as $e,
  y as et,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  at as tt,
  it as nt,
  ot as rt,
  rt as it,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as at,
  t as ot,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~bkyphntg-CyJk2_r3.js";
import {
  n as st,
  t as J,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as ct, t as lt } from "./settings-loading-row-DPKmhlyp.js";
function ut(e, t) {
  let n =
      e.issueCount > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.issueCounts`,
              defaultMessage: `{issueCount, plural, one {# issue} other {# issues}}`,
              description: `Hook load issue count for a project row`,
            },
            { issueCount: e.issueCount },
          )
        : ``,
    r =
      e.needsReview > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.reviewCounts`,
              defaultMessage: `{needsReview, plural, one {# needs review} other {# need review}}`,
              description: `Review-needed hook count for a project row`,
            },
            { needsReview: e.needsReview },
          )
        : ``;
  return (0, dt.jsx)(k, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: {
      issueCount: n,
      separator: n !== `` && r !== `` ? ` · ` : ``,
      needsReview: r,
    },
  });
}
var dt,
  ft = e(() => {
    (H(), (dt = z()));
  }),
  pt,
  mt,
  ht = e(() => {
    (t(_()),
      (pt = z()),
      (mt = (e) =>
        (0, pt.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 24,
          height: 24,
          fill: `currentColor`,
          viewBox: `0 0 24 24`,
          ...e,
          children: [
            (0, pt.jsx)(`path`, {
              d: `M15.344 10.036a1 1 0 1 0-1.688-1.072l-2.474 3.896-.943-1.034a1 1 0 0 0-1.478 1.348l1.826 2a1 1 0 0 0 1.583-.138l3.174-5Z`,
            }),
            (0, pt.jsx)(`path`, {
              fillRule: `evenodd`,
              d: `M13.203 1.935a3 3 0 0 0-2.405 0l-6 2.625A3 3 0 0 0 3 7.308V13a9 9 0 1 0 18 0V7.308a3 3 0 0 0-1.797-2.748l-6-2.625Zm-1.604 1.832a1 1 0 0 1 .802 0l6 2.625a1 1 0 0 1 .599.916V13a7 7 0 1 1-14 0V7.308a1 1 0 0 1 .6-.916l6-2.625Z`,
              clipRule: `evenodd`,
            }),
          ],
        })));
  });
function gt(e) {
  let t = (0, bt.c)(26),
    {
      eventName: n,
      hostId: r,
      isRemoteHost: i,
      hooks: a,
      onToggleHookEnabled: o,
      onTrustHook: c,
    } = e,
    l = K(),
    [u, d] = (0, xt.useState)(null),
    f = se(`open-file`),
    p,
    m,
    h;
  if (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== a ||
    t[3] !== r ||
    t[4] !== l ||
    t[5] !== i ||
    t[6] !== o ||
    t[7] !== c ||
    t[8] !== f
  ) {
    let e = ye(a, n);
    ((h = `border-t border-token-border px-3`),
      (p = `divide-y-[0.5px] divide-token-border`));
    let _;
    (t[12] !== u ||
    t[13] !== r ||
    t[14] !== l ||
    t[15] !== i ||
    t[16] !== o ||
    t[17] !== c ||
    t[18] !== f
      ? ((_ = (e, t) => {
          let n = xe(e),
            a = !i && !e.isManaged,
            p = u === e.key;
          return (0, X.jsxs)(
            `div`,
            {
              className: g(p && `pb-2`),
              children: [
                (0, X.jsxs)(`div`, {
                  className: `-mx-3 flex items-center gap-2 px-3 hover:bg-token-list-hover-background`,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `relative flex min-w-0 flex-1`,
                      children: [
                        (0, X.jsx)(`button`, {
                          type: `button`,
                          "aria-expanded": p,
                          className: g(
                            `flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 pl-7 text-left text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                            a ? `pr-12` : `pr-6`,
                          ),
                          onClick: () => {
                            d(p ? null : e.key);
                          },
                          children: (0, X.jsx)(`span`, {
                            className: `shrink-0 text-token-text-primary`,
                            children: Ae(t, l),
                          }),
                        }),
                        a
                          ? (0, X.jsx)(s, {
                              triggerAsChild: !0,
                              tooltipContent: (0, X.jsx)(k, {
                                ...St.openConfigFile,
                              }),
                              children: (0, X.jsx)(`button`, {
                                type: `button`,
                                "aria-label": l.formatMessage(
                                  St.openConfigFile,
                                ),
                                className: `absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-token-text-tertiary hover:bg-token-list-hover-background hover:text-token-text-primary focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                                onClick: () => {
                                  T({
                                    cwd: null,
                                    hostId: r,
                                    path: e.sourcePath,
                                    openFile: f.mutate,
                                  });
                                },
                                children: (0, X.jsx)(le, {
                                  className: `icon-xxs`,
                                  "aria-hidden": !0,
                                }),
                              }),
                            })
                          : null,
                        (0, X.jsx)(E, {
                          "aria-hidden": !0,
                          className: g(
                            `icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-token-text-secondary`,
                            p && `rotate-180`,
                          ),
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-2`,
                      children: [
                        n
                          ? (0, X.jsx)(s, {
                              delayDuration: 0,
                              tooltipContent:
                                e.trustStatus === `modified`
                                  ? (0, X.jsx)(k, {
                                      id: `settings.hooks.event.changedReviewReason`,
                                      defaultMessage: `Hook changed since last trusted`,
                                      description: `Tooltip shown for changed hooks awaiting review`,
                                    })
                                  : (0, X.jsx)(k, {
                                      id: `settings.hooks.event.untrustedReviewReason`,
                                      defaultMessage: `New hook`,
                                      description: `Tooltip shown for hooks awaiting first review`,
                                    }),
                              children: (0, X.jsxs)(v, {
                                color: `outline`,
                                size: `composerSm`,
                                onClick: () => {
                                  c(e);
                                },
                                children: [
                                  (0, X.jsx)(mt, { className: `icon-2xs` }),
                                  (0, X.jsx)(k, {
                                    id: `settings.hooks.event.trust`,
                                    defaultMessage: `Trust`,
                                    description: `Button label to trust a hook`,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        e.isManaged
                          ? (0, X.jsx)(s, {
                              delayDuration: 0,
                              tooltipContent: (0, X.jsx)(k, {
                                id: `settings.hooks.event.managedTooltip`,
                                defaultMessage: `Managed hooks are always on`,
                                description: `Tooltip shown for admin-managed hooks`,
                              }),
                              children: (0, X.jsx)(`span`, {
                                className: `inline-flex cursor-not-allowed`,
                                tabIndex: 0,
                                children: (0, X.jsx)(it, {
                                  ariaLabel: Ae(t, l),
                                  checked: !0,
                                  className: `pointer-events-none`,
                                  disabled: !0,
                                  onChange: _t,
                                }),
                              }),
                            })
                          : (0, X.jsx)(s, {
                              delayDuration: 0,
                              tooltipContent: n
                                ? (0, X.jsx)(k, {
                                    id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                    defaultMessage: `Disabled until hook is trusted`,
                                    description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                                  })
                                : null,
                              children: (0, X.jsx)(`span`, {
                                className: n
                                  ? `inline-flex cursor-not-allowed`
                                  : ``,
                                tabIndex: n ? 0 : void 0,
                                children: (0, X.jsx)(it, {
                                  ariaLabel: Ae(t, l),
                                  checked: e.enabled && !n,
                                  className: n ? `pointer-events-none` : ``,
                                  disabled: n,
                                  onChange: (t) => {
                                    o(e, t);
                                  },
                                }),
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
                p
                  ? (0, X.jsx)(`div`, {
                      className: `pl-7`,
                      children: (0, X.jsx)(vt, { hook: e }),
                    })
                  : null,
              ],
            },
            e.key,
          );
        }),
        (t[12] = u),
        (t[13] = r),
        (t[14] = l),
        (t[15] = i),
        (t[16] = o),
        (t[17] = c),
        (t[18] = f),
        (t[19] = _))
      : (_ = t[19]),
      (m = e.map(_)),
      (t[0] = n),
      (t[1] = u),
      (t[2] = a),
      (t[3] = r),
      (t[4] = l),
      (t[5] = i),
      (t[6] = o),
      (t[7] = c),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h));
  } else ((p = t[9]), (m = t[10]), (h = t[11]));
  let _;
  t[20] !== p || t[21] !== m
    ? ((_ = (0, X.jsx)(`div`, { className: p, children: m })),
      (t[20] = p),
      (t[21] = m),
      (t[22] = _))
    : (_ = t[22]);
  let y;
  return (
    t[23] !== h || t[24] !== _
      ? ((y = (0, X.jsx)(`div`, { className: h, children: _ })),
        (t[23] = h),
        (t[24] = _),
        (t[25] = y))
      : (y = t[25]),
    y
  );
}
function _t() {}
function vt(e) {
  let t = (0, bt.c)(18),
    { hook: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(k, {
        id: `settings.hooks.event.handler`,
        defaultMessage: `Handler`,
        description: `Label for the handler type of a configured hook`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n.handlerType
    ? (i = t[2])
    : ((i = (0, X.jsx)(Y, {
        label: r,
        children: (0, X.jsx)(yt, { handlerType: n.handlerType }),
      })),
      (t[1] = n.handlerType),
      (t[2] = i));
  let a;
  t[3] === n.command
    ? (a = t[4])
    : ((a =
        n.command == null
          ? null
          : (0, X.jsx)(Y, {
              label: (0, X.jsx)(k, {
                id: `settings.hooks.event.command`,
                defaultMessage: `Command`,
                description: `Label for the command executed by a hook`,
              }),
              children: (0, X.jsx)(`code`, {
                className: `block font-mono text-xs break-all whitespace-pre-wrap`,
                children: n.command,
              }),
            })),
      (t[3] = n.command),
      (t[4] = a));
  let o;
  t[5] === n.matcher
    ? (o = t[6])
    : ((o =
        n.matcher == null
          ? null
          : (0, X.jsx)(Y, {
              label: (0, X.jsx)(k, {
                id: `settings.hooks.event.matcher`,
                defaultMessage: `Matcher`,
                description: `Label for the matcher configured for a hook`,
              }),
              children: (0, X.jsx)(`code`, {
                className: `font-mono text-xs break-all`,
                children: n.matcher,
              }),
            })),
      (t[5] = n.matcher),
      (t[6] = o));
  let s;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(k, {
        id: `settings.hooks.event.timeout`,
        defaultMessage: `Timeout`,
        description: `Label for a hook execution timeout`,
      })),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] === n.timeoutSec
    ? (c = t[9])
    : ((c = (0, X.jsx)(Y, {
        label: s,
        children: (0, X.jsx)(F, {
          value: n.timeoutSec,
          style: `unit`,
          unit: `second`,
          unitDisplay: `narrow`,
        }),
      })),
      (t[8] = n.timeoutSec),
      (t[9] = c));
  let l;
  t[10] === n.statusMessage
    ? (l = t[11])
    : ((l =
        n.statusMessage == null
          ? null
          : (0, X.jsx)(Y, {
              label: (0, X.jsx)(k, {
                id: `settings.hooks.event.statusMessage`,
                defaultMessage: `Status message`,
                description: `Label for the status message configured for a hook`,
              }),
              children: n.statusMessage,
            })),
      (t[10] = n.statusMessage),
      (t[11] = l));
  let u;
  return (
    t[12] !== i || t[13] !== a || t[14] !== o || t[15] !== c || t[16] !== l
      ? ((u = (0, X.jsx)(`div`, {
          className: `mt-2 overflow-hidden rounded-md border border-token-border text-sm`,
          children: (0, X.jsxs)(`dl`, {
            className: `grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3 py-3`,
            children: [i, a, o, c, l],
          }),
        })),
        (t[12] = i),
        (t[13] = a),
        (t[14] = o),
        (t[15] = c),
        (t[16] = l),
        (t[17] = u))
      : (u = t[17]),
    u
  );
}
function Y(e) {
  let t = (0, bt.c)(7),
    { label: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, X.jsx)(`dt`, {
        className: `text-token-text-secondary`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, X.jsx)(`dd`, {
        className: `min-w-0 text-token-text-primary`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, X.jsxs)(X.Fragment, { children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function yt(e) {
  let t = (0, bt.c)(3),
    { handlerType: n } = e;
  switch (n) {
    case `command`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(k, {
              id: `settings.hooks.event.commandHandler`,
              defaultMessage: `Command`,
              description: `Label for a command hook handler type`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `prompt`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(k, {
              id: `settings.hooks.event.promptHandler`,
              defaultMessage: `Prompt`,
              description: `Label for a prompt hook handler type`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `agent`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(k, {
              id: `settings.hooks.event.agentHandler`,
              defaultMessage: `Agent`,
              description: `Label for an agent hook handler type`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
var bt,
  xt,
  X,
  St,
  Ct = e(() => {
    ((bt = m()),
      oe(),
      (xt = t(_(), 1)),
      H(),
      y(),
      nt(),
      B(),
      fe(),
      f(),
      G(),
      ht(),
      j(),
      ve(),
      ke(),
      (X = z()),
      (St = ie({
        openConfigFile: {
          id: `settings.hooks.event.openConfigFile`,
          defaultMessage: `Open config file`,
          description: `Button label for opening the config file that defines a hook`,
        },
      })));
  });
function wt(e) {
  let t = (0, jt.c)(28),
    {
      entry: n,
      hostId: r,
      isOpen: i,
      isLoading: a,
      isRemoteHost: o,
      loadError: s,
      title: l,
      titleHref: u,
      titleIcon: d,
      subtitle: f,
      onClose: p,
      onToggleHookEnabled: m,
      onTrustHook: h,
    } = e,
    g;
  t[0] !== l || t[1] !== u || t[2] !== d
    ? ((g =
        l == null
          ? null
          : (0, Z.jsx)(V, {
              asChild: !0,
              children: (0, Z.jsx)(`h2`, {
                className: `flex min-w-0`,
                children:
                  u == null
                    ? (0, Z.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-2`,
                        children: [
                          d == null
                            ? null
                            : (0, Z.jsx)(`span`, {
                                className: `flex shrink-0 items-center justify-center`,
                                children: d,
                              }),
                          (0, Z.jsx)(`span`, {
                            className: `min-w-0`,
                            children: l,
                          }),
                        ],
                      })
                    : (0, Z.jsxs)(D, {
                        className: `group -m-1 inline-flex min-w-0 cursor-interaction items-center gap-2 rounded-md p-1 hover:bg-token-list-hover-background focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none active:scale-[0.98]`,
                        to: u,
                        children: [
                          d == null
                            ? null
                            : (0, Z.jsx)(`span`, {
                                className: `flex shrink-0 items-center justify-center`,
                                children: d,
                              }),
                          (0, Z.jsx)(`span`, {
                            className: `min-w-0`,
                            children: l,
                          }),
                          (0, Z.jsx)(E, {
                            className: `icon-2xs shrink-0 -rotate-90 opacity-0 transition-transform duration-basic group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100`,
                            "aria-hidden": !0,
                          }),
                        ],
                      }),
              }),
            })),
      (t[0] = l),
      (t[1] = u),
      (t[2] = d),
      (t[3] = g))
    : (g = t[3]);
  let _ = g,
    v;
  t[4] === p
    ? (v = t[5])
    : ((v = (e) => {
        e || p();
      }),
      (t[4] = p),
      (t[5] = v));
  let y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { "aria-describedby": void 0 }), (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== _ || t[8] !== f
    ? ((b = (0, Z.jsx)(A, {
        children: (0, Z.jsx)(R, {
          title: _,
          subtitle: f,
          subtitleClassName: `break-all`,
        }),
      })),
      (t[7] = _),
      (t[8] = f),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== n ||
  t[11] !== r ||
  t[12] !== a ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== s ||
  t[16] !== m ||
  t[17] !== h
    ? ((x = i
        ? a
          ? (0, Z.jsx)(q, {
              children: (0, Z.jsx)(lt, {
                children: (0, Z.jsx)(k, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
              }),
            })
          : s == null
            ? (0, Z.jsx)(Tt, {
                entry: n,
                hostId: r,
                isRemoteHost: o,
                onToggleHookEnabled: m,
                onTrustHook: h,
              })
            : (0, Z.jsx)(q, {
                children: (0, Z.jsx)(Qe, {
                  label: (0, Z.jsx)(k, {
                    id: `settings.hooks.loadError.label`,
                    defaultMessage: `Could not load hooks`,
                    description: `Label when hooks settings fails to load hooks`,
                  }),
                  description: (0, Z.jsx)(`span`, {
                    className: `[text-wrap:wrap] break-words`,
                    children: s.message,
                  }),
                  control: null,
                }),
              })
        : null),
      (t[10] = n),
      (t[11] = r),
      (t[12] = a),
      (t[13] = i),
      (t[14] = o),
      (t[15] = s),
      (t[16] = m),
      (t[17] = h),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === x
    ? (S = t[20])
    : ((S = (0, Z.jsx)(A, {
        className: `vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pr-1 [&>*]:shrink-0`,
        children: x,
      })),
      (t[19] = x),
      (t[20] = S));
  let C;
  t[21] !== b || t[22] !== S
    ? ((C = (0, Z.jsxs)(U, {
        className: `max-h-[calc(100vh-6rem)] min-h-0 gap-4`,
        children: [b, S],
      })),
      (t[21] = b),
      (t[22] = S),
      (t[23] = C))
    : (C = t[23]);
  let w;
  return (
    t[24] !== i || t[25] !== v || t[26] !== C
      ? ((w = (0, Z.jsx)(c, {
          open: i,
          onOpenChange: v,
          contentProps: y,
          size: `xwide`,
          children: C,
        })),
        (t[24] = i),
        (t[25] = v),
        (t[26] = C),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
function Tt(e) {
  let t = (0, jt.c)(23),
    {
      entry: n,
      hostId: r,
      isRemoteHost: i,
      onToggleHookEnabled: a,
      onTrustHook: o,
    } = e,
    s = K(),
    [c, l] = (0, Mt.useState)(!1);
  if (n == null) return null;
  let u = n.hooks,
    d,
    f,
    p;
  if (
    t[0] !== n.errors ||
    t[1] !== n.warnings ||
    t[2] !== u ||
    t[3] !== r ||
    t[4] !== s ||
    t[5] !== i ||
    t[6] !== c ||
    t[7] !== a ||
    t[8] !== o
  ) {
    let e = je(u).filter(Et),
      m = n.warnings,
      h = n.errors,
      g = Oe(u),
      _ = m.length + h.length;
    (t[12] === g
      ? (d = t[13])
      : ((d = g > 0 ? (0, Z.jsx)(Dt, {}) : null), (t[12] = g), (t[13] = d)),
      t[14] !== h || t[15] !== _ || t[16] !== c || t[17] !== m
        ? ((f =
            _ > 0
              ? (0, Z.jsx)(Ot, {
                  errors: h,
                  expanded: c,
                  issueCount: _,
                  warnings: m,
                  onToggleExpanded: () => {
                    l(!c);
                  },
                })
              : null),
          (t[14] = h),
          (t[15] = _),
          (t[16] = c),
          (t[17] = m),
          (t[18] = f))
        : (f = t[18]),
      (p =
        e.length > 0
          ? (0, Z.jsx)(q, {
              children: e.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, Z.jsx)(Qe, {
                        icon: (0, Z.jsx)(tt, { className: `icon-xs` }),
                        label: (0, Z.jsx)(`span`, {
                          className: `font-medium`,
                          children: we(e.eventName, s),
                        }),
                        description: Ce(e.eventName, s),
                        control:
                          e.needsReview > 0
                            ? (0, Z.jsx)(Le, {
                                className: `icon-2xs shrink-0 text-token-editor-warning-foreground`,
                              })
                            : null,
                      }),
                      (0, Z.jsx)(gt, {
                        eventName: e.eventName,
                        hostId: r,
                        isRemoteHost: i,
                        hooks: u,
                        onTrustHook: o,
                        onToggleHookEnabled: a,
                      }),
                    ],
                  },
                  e.eventName,
                ),
              ),
            })
          : null),
      (t[0] = n.errors),
      (t[1] = n.warnings),
      (t[2] = u),
      (t[3] = r),
      (t[4] = s),
      (t[5] = i),
      (t[6] = c),
      (t[7] = a),
      (t[8] = o),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p));
  } else ((d = t[9]), (f = t[10]), (p = t[11]));
  let m;
  return (
    t[19] !== d || t[20] !== f || t[21] !== p
      ? ((m = (0, Z.jsxs)(Z.Fragment, { children: [d, f, p] })),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p),
        (t[22] = m))
      : (m = t[22]),
    m
  );
}
function Et(e) {
  return e.installed > 0;
}
function Dt() {
  let e = (0, jt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(ot, {
          Icon: Le,
          type: `warning`,
          content: (0, Z.jsx)(k, {
            id: `settings.hooks.review.summary`,
            defaultMessage: `Hooks can run outside of the sandbox so we ask you to review any recently installed or modified hooks`,
            description: `Banner shown when hooks require trust review`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ot(e) {
  let t = (0, jt.c)(18),
    {
      errors: n,
      expanded: r,
      issueCount: i,
      warnings: a,
      onToggleExpanded: o,
    } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(Le, {
        className: `icon-xs shrink-0 text-token-editor-warning-foreground`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === i
    ? (c = t[2])
    : ((c = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          s,
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm text-token-text-primary`,
            children: (0, Z.jsx)(k, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = c));
  let l = r && `rotate-180`,
    u;
  t[3] === l
    ? (u = t[4])
    : ((u = g(`icon-2xs shrink-0 transition-transform`, l)),
      (t[3] = l),
      (t[4] = u));
  let d;
  t[5] === u
    ? (d = t[6])
    : ((d = (0, Z.jsx)(E, { className: u })), (t[5] = u), (t[6] = d));
  let f;
  t[7] !== o || t[8] !== c || t[9] !== d
    ? ((f = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-left`,
        onClick: o,
        children: [c, d],
      })),
      (t[7] = o),
      (t[8] = c),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((p = r
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2 border-t border-token-editor-warning-foreground/20 px-3 py-2 text-sm text-token-text-secondary`,
            children: [a.map(At), n.map(kt)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== f || t[16] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `bg-token-editor-warning-background/30 overflow-hidden rounded-lg border border-token-editor-warning-foreground/30`,
          children: [f, p],
        })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
function kt(e) {
  return (0, Z.jsx)(
    `div`,
    {
      children: (0, Z.jsx)(k, {
        id: `settings.hooks.issues.error`,
        defaultMessage: `{path}: {message}`,
        description: `Expanded hook error detail`,
        values: { path: e.path, message: e.message },
      }),
    },
    `${e.path}:${e.message}`,
  );
}
function At(e) {
  return (0, Z.jsx)(`div`, { children: e }, e);
}
var jt,
  Mt,
  Z,
  Nt = e(() => {
    ((jt = m()),
      oe(),
      (Mt = t(_(), 1)),
      H(),
      h(),
      at(),
      r(),
      N(),
      f(),
      rt(),
      Re(),
      ct(),
      et(),
      Xe(),
      ve(),
      Ct(),
      ke(),
      (Z = z()));
  });
function Pt(e) {
  let t = (0, Q.c)(63),
    {
      entries: n,
      hostId: r,
      isRemoteHost: i,
      isLoadingProjectRoots: a,
      loadError: o,
      isLoading: c,
      isRefreshing: l,
      projectRootLabels: u,
      projectRoots: d,
      selectedSourceSection: f,
      onSelectSourceSection: m,
      onRefreshHooks: h,
      onToggleHookEnabled: g,
      onTrustHook: _,
    } = e,
    y = K(),
    b;
  t[0] === y
    ? (b = t[1])
    : ((b = y.formatMessage({
        id: `settings.hooks.refresh`,
        defaultMessage: `Reload hooks`,
        description: `Button label to reload hooks for the visible projects`,
      })),
      (t[0] = y),
      (t[1] = b));
  let x = b,
    S,
    C,
    w,
    T,
    E,
    D,
    O;
  if (t[2] !== n || t[3] !== c || t[4] !== u || t[5] !== f) {
    ((D = n == null || c ? [] : be(n)),
      (S = []),
      (C = []),
      (w = null),
      (T = null));
    for (let e of D)
      bb0: switch (e.id) {
        case `plugin`:
          w = e;
          break bb0;
        case `project`:
          T = e;
          break bb0;
        case `user`:
        case `admin`:
          S.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          C.push(e);
      }
    ((E = De(D, f)),
      (O = Yt({ entry: E, projectRootLabels: u, selection: f })),
      (t[2] = n),
      (t[3] = c),
      (t[4] = u),
      (t[5] = f),
      (t[6] = S),
      (t[7] = C),
      (t[8] = w),
      (t[9] = T),
      (t[10] = E),
      (t[11] = D),
      (t[12] = O));
  } else
    ((S = t[6]),
      (C = t[7]),
      (w = t[8]),
      (T = t[9]),
      (E = t[10]),
      (D = t[11]),
      (O = t[12]));
  let A = O,
    j;
  t[13] !== r || t[14] !== f
    ? ((j =
        f?.source === `plugin` && f.pluginId != null
          ? p({ hostId: r, pluginId: f.pluginId })
          : void 0),
      (t[13] = r),
      (t[14] = f),
      (t[15] = j))
    : (j = t[15]);
  let M = j,
    N;
  t[16] === f
    ? (N = t[17])
    : ((N = f == null ? null : Ut(f.source)), (t[16] = f), (t[17] = N));
  let P = N,
    F = null;
  if (f?.source === `project`) F = f.projectRoot;
  else if (f != null) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(k, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (t[18] = e))
      : (e = t[18]),
      (F = e));
  }
  let I = `none`;
  if (f?.source === `project`) I = f.projectRoot;
  else if (f?.source === `plugin`) {
    I = `plugin`;
    let e = f.pluginId;
    e !== void 0 && (I = `plugin:${e ?? `unknown`}`);
  } else f != null && (I = f.source);
  let ee;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(Ge, {
        children: (0, $.jsx)(k, {
          id: `settings.hooks.loading.label`,
          defaultMessage: `Loading hooks…`,
          description: `Label while hooks are loading`,
        }),
      })),
      (t[19] = ee))
    : (ee = t[19]);
  let L = ee,
    te;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(Ue, { slug: Zt })), (t[20] = te))
    : (te = t[20]);
  let R;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(k, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: Ft },
      })),
      (t[21] = R))
    : (R = t[21]);
  let ne = d == null || d.length === 0 || c || l,
    z;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(ge, { className: `icon-xs` })), (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] !== h || t[24] !== x || t[25] !== ne
    ? ((B = (0, $.jsx)(v, {
        "aria-label": x,
        color: `ghost`,
        disabled: ne,
        onClick: h,
        size: `icon`,
        children: z,
      })),
      (t[23] = h),
      (t[24] = x),
      (t[25] = ne),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] !== x || t[28] !== B
    ? ((V = (0, $.jsx)(s, {
        delayDuration: 0,
        tooltipContent: x,
        children: B,
      })),
      (t[27] = x),
      (t[28] = B),
      (t[29] = V))
    : (V = t[29]);
  let H;
  t[30] !== S ||
  t[31] !== c ||
  t[32] !== a ||
  t[33] !== o ||
  t[34] !== m ||
  t[35] !== C ||
  t[36] !== w ||
  t[37] !== u ||
  t[38] !== d ||
  t[39] !== T ||
  t[40] !== D
    ? ((H =
        d == null && a
          ? L
          : d == null || d.length === 0
            ? (0, $.jsx)(It, {})
            : o == null
              ? c
                ? L
                : D.length === 0
                  ? (0, $.jsx)(It, {})
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        S.length > 0
                          ? (0, $.jsx)(Lt, {
                              title: (0, $.jsx)(k, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: S,
                              onSelectSourceSection: m,
                            })
                          : null,
                        w == null
                          ? null
                          : (0, $.jsx)(Rt, {
                              section: w,
                              onSelectSourceSection: m,
                            }),
                        T == null
                          ? null
                          : (0, $.jsx)(Bt, {
                              section: T,
                              projectRootLabels: u,
                              onSelectSourceSection: m,
                            }),
                        C.length > 0
                          ? (0, $.jsx)(Lt, {
                              title: (0, $.jsx)(k, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: C,
                              onSelectSourceSection: m,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(q, {
                  children: (0, $.jsx)(Qe, {
                    label: (0, $.jsx)(k, {
                      id: `settings.hooks.loadError.label`,
                      defaultMessage: `Could not load hooks`,
                      description: `Label when hooks settings fails to load hooks`,
                    }),
                    description: (0, $.jsx)(`span`, {
                      className: `[text-wrap:wrap] break-words`,
                      children: o.message,
                    }),
                    control: null,
                  }),
                })),
      (t[30] = S),
      (t[31] = c),
      (t[32] = a),
      (t[33] = o),
      (t[34] = m),
      (t[35] = C),
      (t[36] = w),
      (t[37] = u),
      (t[38] = d),
      (t[39] = T),
      (t[40] = D),
      (t[41] = H))
    : (H = t[41]);
  let U = f != null && (c || E != null),
    W;
  t[42] === m
    ? (W = t[43])
    : ((W = () => {
        m(null);
      }),
      (t[42] = m),
      (t[43] = W));
  let G;
  t[44] !== r ||
  t[45] !== c ||
  t[46] !== i ||
  t[47] !== o ||
  t[48] !== g ||
  t[49] !== _ ||
  t[50] !== E ||
  t[51] !== I ||
  t[52] !== F ||
  t[53] !== A ||
  t[54] !== M ||
  t[55] !== P ||
  t[56] !== U ||
  t[57] !== W
    ? ((G = (0, $.jsx)(
        wt,
        {
          entry: E,
          hostId: r,
          isOpen: U,
          isLoading: c,
          isRemoteHost: i,
          loadError: o,
          title: A,
          titleHref: M,
          titleIcon: P,
          subtitle: F,
          onClose: W,
          onToggleHookEnabled: g,
          onTrustHook: _,
        },
        I,
      )),
      (t[44] = r),
      (t[45] = c),
      (t[46] = i),
      (t[47] = o),
      (t[48] = g),
      (t[49] = _),
      (t[50] = E),
      (t[51] = I),
      (t[52] = F),
      (t[53] = A),
      (t[54] = M),
      (t[55] = P),
      (t[56] = U),
      (t[57] = W),
      (t[58] = G))
    : (G = t[58]);
  let re;
  return (
    t[59] !== V || t[60] !== H || t[61] !== G
      ? ((re = (0, $.jsxs)(We, {
          title: te,
          subtitleClassName: `whitespace-normal`,
          subtitle: R,
          action: V,
          children: [H, G],
        })),
        (t[59] = V),
        (t[60] = H),
        (t[61] = G),
        (t[62] = re))
      : (re = t[62]),
    re
  );
}
function Ft(e) {
  return (0, $.jsx)(
    `a`,
    {
      className: `inline-flex text-token-text-link-foreground`,
      href: Ze,
      target: `_blank`,
      rel: `noreferrer`,
      children: e,
    },
    `learn-more`,
  );
}
function It() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(q, {
          children: (0, $.jsx)(Qe, {
            label: (0, $.jsx)(k, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(k, {
              id: `settings.hooks.emptyHooks.description`,
              defaultMessage: `Configured hooks will appear here`,
              description: `Description when no hooks are configured`,
            }),
            control: null,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Lt(e) {
  let t = (0, Q.c)(12),
    { sections: n, title: r, onSelectSourceSection: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, $.jsx)(J.Header, { title: r })), (t[0] = r), (t[1] = a));
  let o;
  if (t[2] !== i || t[3] !== n) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) =>
          (0, $.jsx)(Vt, { section: e, onSelectSourceSection: i }, e.id)),
        (t[5] = i),
        (t[6] = e)),
      (o = n.map(e)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o));
  } else o = t[4];
  let s;
  t[7] === o
    ? (s = t[8])
    : ((s = (0, $.jsx)(J.Content, {
        children: (0, $.jsx)(q, { children: o }),
      })),
      (t[7] = o),
      (t[8] = s));
  let c;
  return (
    t[9] !== a || t[10] !== s
      ? ((c = (0, $.jsxs)(J, { children: [a, s] })),
        (t[9] = a),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Rt(e) {
  let t = (0, Q.c)(8),
    { section: n, onSelectSourceSection: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(k, {
          id: `settings.hooks.source.plugins`,
          defaultMessage: `From Plugins`,
          description: `Group heading for hooks installed by plugins`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  if (t[1] !== r || t[2] !== n.pluginEntries) {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = (e) =>
          (0, $.jsx)(
            zt,
            { pluginEntry: e, onSelectSourceSection: r },
            e.pluginId ?? `unknown-plugin`,
          )),
        (t[4] = r),
        (t[5] = e)),
      (a = n.pluginEntries.map(e)),
      (t[1] = r),
      (t[2] = n.pluginEntries),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, $.jsxs)(J, {
          children: [
            i,
            (0, $.jsx)(J.Content, { children: (0, $.jsx)(q, { children: a }) }),
          ],
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function zt(e) {
  let t = (0, Q.c)(20),
    { pluginEntry: n, onSelectSourceSection: r } = e,
    i = K(),
    a;
  t[0] !== i || t[1] !== n.pluginId
    ? ((a =
        Ie(n.pluginId) ??
        i.formatMessage({
          id: `settings.hooks.source.unknownPlugin`,
          defaultMessage: `Unknown plugin`,
          description: `Fallback label for plugin hooks without a plugin id`,
        })),
      (t[0] = i),
      (t[1] = n.pluginId),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === n.entry
    ? (s = t[4])
    : ((s = Fe(n.entry)), (t[3] = n.entry), (t[4] = s));
  let c = s,
    l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(I, { className: `icon-sm text-token-text-secondary` })),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === o
    ? (u = t[7])
    : ((u = (0, $.jsx)(`span`, { className: `block truncate`, children: o })),
      (t[6] = o),
      (t[7] = u));
  let d;
  t[8] === n.entry.hooks.length
    ? (d = t[9])
    : ((d = (0, $.jsx)(Gt, { count: n.entry.hooks.length })),
      (t[8] = n.entry.hooks.length),
      (t[9] = d));
  let f;
  t[10] === c
    ? (f = t[11])
    : ((f = (0, $.jsx)(Kt, { summary: c })), (t[10] = c), (t[11] = f));
  let p;
  t[12] !== r || t[13] !== n.pluginId
    ? ((p = () => {
        r({ source: `plugin`, pluginId: n.pluginId });
      }),
      (t[12] = r),
      (t[13] = n.pluginId),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== u || t[16] !== d || t[17] !== f || t[18] !== p
      ? ((m = (0, $.jsx)(Ye, {
          icon: l,
          label: u,
          description: d,
          trailing: f,
          onClick: p,
        })),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function Bt(e) {
  let t = (0, Q.c)(10),
    { section: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(k, {
          id: `settings.hooks.source.projects`,
          defaultMessage: `From Projects`,
          description: `Group heading for hooks from project config files`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== i || t[2] !== r || t[3] !== n.projectEntries) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e) =>
          (0, $.jsx)(
            Wt,
            { entry: e, projectRootLabels: r, onSelectSourceSection: i },
            e.cwd,
          )),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (o = n.projectEntries.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n.projectEntries),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, $.jsxs)(J, {
          children: [
            a,
            (0, $.jsx)(J.Content, { children: (0, $.jsx)(q, { children: o }) }),
          ],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function Vt(e) {
  let t = (0, Q.c)(19),
    { section: n, onSelectSourceSection: r } = e,
    i = n.id,
    a = n.entry,
    o;
  t[0] === a ? (o = t[1]) : ((o = Fe(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] === i ? (c = t[3]) : ((c = Ut(i)), (t[2] = i), (t[3] = c));
  let l;
  t[4] === i
    ? (l = t[5])
    : ((l = (0, $.jsx)(Ht, { source: i })), (t[4] = i), (t[5] = l));
  let u;
  t[6] === a.hooks.length
    ? (u = t[7])
    : ((u = (0, $.jsx)(Gt, { count: a.hooks.length })),
      (t[6] = a.hooks.length),
      (t[7] = u));
  let d;
  t[8] === s
    ? (d = t[9])
    : ((d = (0, $.jsx)(Kt, { summary: s })), (t[8] = s), (t[9] = d));
  let f;
  t[10] !== r || t[11] !== i
    ? ((f = () => {
        r({ source: i });
      }),
      (t[10] = r),
      (t[11] = i),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== c || t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== f
      ? ((p = (0, $.jsx)(Ye, {
          icon: c,
          label: l,
          description: u,
          trailing: d,
          onClick: f,
        })),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function Ht(e) {
  let t = (0, Q.c)(6),
    { source: n } = e;
  switch (n) {
    case `plugin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              id: `settings.hooks.source.plugin`,
              defaultMessage: `Plugin`,
              description: `Source label for plugin hooks`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `user`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              id: `settings.hooks.source.userConfig`,
              defaultMessage: `User config`,
              description: `Source label for user hooks`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `admin`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              id: `settings.hooks.source.adminConfig`,
              defaultMessage: `Admin config`,
              description: `Source label for admin-managed hooks`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `project`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              id: `settings.hooks.source.projectConfig`,
              defaultMessage: `Project config`,
              description: `Source label for project hooks`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `sessionFlags`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              id: `settings.hooks.source.sessionFlags`,
              defaultMessage: `Session flags`,
              description: `Source label for session flag hooks`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              id: `settings.hooks.source.unknown`,
              defaultMessage: `Unknown source`,
              description: `Source label for hooks with unknown provenance`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
function Ut(e) {
  let t = `icon-sm text-token-text-secondary`;
  switch (e) {
    case `plugin`:
      return (0, $.jsx)(I, { className: t });
    case `user`:
      return (0, $.jsx)(ue, { className: t });
    case `admin`:
      return (0, $.jsx)(Ne, { className: t });
    case `project`:
      return (0, $.jsx)(u, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(tt, { className: t });
  }
}
function Wt(e) {
  let t = (0, Q.c)(20),
    { entry: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = Fe(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(u, { className: `icon-sm text-token-text-secondary` })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n.cwd || t[4] !== r
    ? ((c = Jt(n.cwd, r)), (t[3] = n.cwd), (t[4] = r), (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === c
    ? (l = t[7])
    : ((l = (0, $.jsx)(`span`, { className: `block truncate`, children: c })),
      (t[6] = c),
      (t[7] = l));
  let d;
  t[8] === n.hooks.length
    ? (d = t[9])
    : ((d = (0, $.jsx)(Gt, { count: n.hooks.length })),
      (t[8] = n.hooks.length),
      (t[9] = d));
  let f;
  t[10] === o
    ? (f = t[11])
    : ((f = (0, $.jsx)(Kt, { summary: o })), (t[10] = o), (t[11] = f));
  let p;
  t[12] !== n.cwd || t[13] !== i
    ? ((p = () => {
        i({ source: `project`, projectRoot: n.cwd });
      }),
      (t[12] = n.cwd),
      (t[13] = i),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== l || t[16] !== d || t[17] !== f || t[18] !== p
      ? ((m = (0, $.jsx)(Ye, {
          icon: s,
          label: l,
          description: d,
          trailing: f,
          onClick: p,
        })),
        (t[15] = l),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function Gt(e) {
  let t = (0, Q.c)(2),
    { count: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(k, {
          id: `settings.hooks.source.hookCount`,
          defaultMessage: `{count, plural, one {# hook} other {# hooks}}`,
          description: `Short hook count shown under a hook source row`,
          values: { count: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Kt(e) {
  let t = (0, Q.c)(5),
    { summary: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (0, $.jsx)(qt, { summary: n })), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(E, { className: `icon-2xs shrink-0 -rotate-90` })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [r, i],
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function qt(e) {
  let t = (0, Q.c)(6),
    { summary: n } = e,
    r = K();
  if (n == null || (n.issueCount === 0 && n.needsReview === 0)) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Le, {
        className: `icon-2xs shrink-0 text-token-editor-warning-foreground`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r || t[2] !== n
    ? ((a = ut(n, r)), (t[1] = r), (t[2] = n), (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-3 text-sm whitespace-nowrap text-token-text-primary`,
          children: [
            i,
            (0, $.jsx)(`span`, {
              className: `max-[30rem]:hidden`,
              children: a,
            }),
          ],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function Jt(e, t) {
  return t?.[e] ?? Ve(e) ?? e;
}
function Yt({ entry: e, projectRootLabels: t, selection: n }) {
  if (n == null) return null;
  if (n.source === `project`) return Jt(n.projectRoot, t);
  if (n.source === `plugin`) {
    let t = n.pluginId === void 0 ? null : Ie(n.pluginId);
    if ((t == null && e != null && (t = Xt(e.hooks)), t != null)) return t;
  }
  return (0, $.jsx)(Ht, { source: n.source });
}
function Xt(e) {
  let t = null;
  for (let n of e) {
    let e = Ie(n.pluginId);
    if (e == null || (t != null && t !== e)) return null;
    t = e;
  }
  return t;
}
var Q,
  $,
  Zt,
  Qt = e(() => {
    ((Q = m()),
      n(),
      H(),
      y(),
      B(),
      $e(),
      L(),
      Te(),
      f(),
      l(),
      rt(),
      _e(),
      he(),
      Re(),
      qe(),
      st(),
      Je(),
      et(),
      Ke(),
      Xe(),
      Be(),
      ve(),
      ft(),
      ke(),
      Nt(),
      ($ = z()),
      (Zt = `hooks-settings`));
  });
function $t() {
  let e = (0, en.c)(55),
    t = S(ce),
    n = K(),
    r = re(),
    [o, s] = ee(),
    c = b(),
    { selectedHostId: l, setSelectedHostId: u } = ze(),
    f = a(l),
    p = i(de),
    m = i(d),
    h;
  e[0] === l ? (h = e[1]) : ((h = { hostId: l }), (e[0] = l), (e[1] = h));
  let { data: g, isPending: _ } = pe(x, h),
    v;
  e[2] === o ? (v = e[3]) : ((v = o.get(`hostId`)), (e[2] = o), (e[3] = v));
  let y = v,
    w = y == null || y === l,
    T,
    E;
  if (
    e[4] !== p ||
    e[5] !== w ||
    e[6] !== o ||
    e[7] !== l ||
    e[8] !== m ||
    e[9] !== g
  ) {
    let t = w ? o.get(`projectRoot`) : null,
      n = w ? o.get(`pluginId`) : null,
      r = [];
    (l === `local` ? (r = p) : m?.hostId === l && (r = [m.remotePath]),
      (T = g == null ? void 0 : Pe(g.roots, r, t)),
      (E = w
        ? Ee({
            pluginId: n,
            source: o.get(`source`),
            projectRoot: t,
            projectRoots: T,
          })
        : null),
      (e[4] = p),
      (e[5] = w),
      (e[6] = o),
      (e[7] = l),
      (e[8] = m),
      (e[9] = g),
      (e[10] = T),
      (e[11] = E));
  } else ((T = e[10]), (E = e[11]));
  let D = E,
    O;
  e[12] !== T || e[13] !== l
    ? ((O = { hostId: l, cwds: T }), (e[12] = T), (e[13] = l), (e[14] = O))
    : (O = e[14]);
  let k = pe(te, O),
    A;
  e[15] === u
    ? (A = e[16])
    : ((A = (e) => {
        u(e);
      }),
      (e[15] = u),
      (e[16] = A));
  let j = (0, tn.useEffectEvent)(A),
    M;
  e[17] !== c || e[18] !== l || e[19] !== y || e[20] !== j
    ? ((M = () => {
        if (y != null && y !== l) {
          j(y);
          return;
        }
        W(c, l, { refetchType: `active` });
      }),
      (e[17] = c),
      (e[18] = l),
      (e[19] = y),
      (e[20] = j),
      (e[21] = M))
    : (M = e[21]);
  let N;
  (e[22] !== r.key || e[23] !== c || e[24] !== l || e[25] !== y
    ? ((N = [r.key, c, l, y]),
      (e[22] = r.key),
      (e[23] = c),
      (e[24] = l),
      (e[25] = y),
      (e[26] = N))
    : (N = e[26]),
    (0, tn.useEffect)(M, N));
  let P = pe(ne, l),
    F;
  e[27] !== k || e[28] !== n || e[29] !== c || e[30] !== t || e[31] !== l
    ? ((F = () => {
        k.refetch().then(async (e) => {
          e.isSuccess &&
            (await W(c, l, { broadcast: !0, refetchType: `none` }),
            t.get(C).success(
              n.formatMessage({
                id: `settings.hooks.refresh.success`,
                defaultMessage: `Refreshed hooks`,
                description: `Success toast shown after manually refreshing hooks`,
              }),
            ));
        });
      }),
      (e[27] = k),
      (e[28] = n),
      (e[29] = c),
      (e[30] = t),
      (e[31] = l),
      (e[32] = F))
    : (F = e[32]);
  let I = F,
    L;
  e[33] !== o || e[34] !== l || e[35] !== s
    ? ((L = (e) => {
        let t = new URLSearchParams(o);
        (Me(t, l, e), s(t, { replace: !0 }));
      }),
      (e[33] = o),
      (e[34] = l),
      (e[35] = s),
      (e[36] = L))
    : (L = e[36]);
  let R = L,
    z = k.data?.data,
    B = f.kind !== `local`,
    V = k.isFetching && !k.isPending,
    H = g?.labels,
    U,
    G;
  e[37] === P
    ? ((U = e[38]), (G = e[39]))
    : ((U = (e, t) => {
        P.mutate([{ key: e.key, enabled: t }]);
      }),
      (G = (e) => {
        P.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[37] = P),
      (e[38] = U),
      (e[39] = G));
  let ie;
  return (
    e[40] !== I ||
    e[41] !== R ||
    e[42] !== k.error ||
    e[43] !== k.isPending ||
    e[44] !== _ ||
    e[45] !== T ||
    e[46] !== l ||
    e[47] !== D ||
    e[48] !== B ||
    e[49] !== V ||
    e[50] !== H ||
    e[51] !== U ||
    e[52] !== G ||
    e[53] !== z
      ? ((ie = (0, nn.jsx)(Pt, {
          entries: z,
          hostId: l,
          isRemoteHost: B,
          isLoadingProjectRoots: _,
          loadError: k.error,
          isLoading: k.isPending,
          isRefreshing: V,
          projectRootLabels: H,
          projectRoots: T,
          selectedSourceSection: D,
          onSelectSourceSection: R,
          onRefreshHooks: I,
          onToggleHookEnabled: U,
          onTrustHook: G,
        })),
        (e[40] = I),
        (e[41] = R),
        (e[42] = k.error),
        (e[43] = k.isPending),
        (e[44] = _),
        (e[45] = T),
        (e[46] = l),
        (e[47] = D),
        (e[48] = B),
        (e[49] = V),
        (e[50] = H),
        (e[51] = U),
        (e[52] = G),
        (e[53] = z),
        (e[54] = ie))
      : (ie = e[54]),
    ie
  );
}
var en, tn, nn;
e(() => {
  ((en = m()),
    me(),
    O(),
    (tn = t(_(), 1)),
    H(),
    h(),
    M(),
    P(),
    o(),
    He(),
    w(),
    ke(),
    ae(),
    Se(),
    Qt(),
    (nn = z()));
})();
export { $t as HooksSettings };
//# sourceMappingURL=hooks-settings-BBPAnckr.js.map
