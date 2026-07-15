import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ao as n,
  DK as r,
  Eh as i,
  Fq as a,
  I2 as o,
  IK as s,
  KJ as c,
  LK as l,
  Pq as u,
  To as d,
  _Y as f,
  a as p,
  ch as m,
  gD as h,
  jo as g,
  k2 as _,
  kK as v,
  lh as y,
  mD as b,
  mY as x,
  pY as S,
  qJ as C,
  r as w,
  wo as ee,
  yY as te,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ai as ne,
  Mi as re,
  ji as ie,
  ki as ae,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  It as T,
  Lt as E,
  cc as oe,
  hs as se,
  ms as D,
  sc as ce,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import { en as le } from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  R as ue,
  z as de,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  Bt as fe,
  zt as pe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  G as me,
  K as he,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  i as O,
  r as ge,
} from "./app-initial~app-main~pull-request-route~new-thread-panel-page~onboarding-page~projects-inde~oqn7zfcy-C31oGzdP.js";
import {
  n as _e,
  t as k,
} from "./app-initial~app-main~pull-request-route~plugin-detail-page~new-thread-panel-page~projects-i~jb98qw1m-Cjjbtt3X.js";
import { n as ve, t as ye } from "./pull-request-fix-button-CkC9dxz3.js";
import { n as be, t as A } from "./detail-section-DXp9_iJg.js";
function j(e) {
  let t = (0, M.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, tone: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o =
      (a === void 0 ? `secondary` : a) === `danger`
        ? `text-token-charts-red`
        : `text-token-text-tertiary`,
    s;
  t[5] !== r || t[6] !== o
    ? ((s = c(
        `flex min-h-[var(--height-token-row)] items-center justify-center gap-2 py-row-y text-[length:var(--detail-row-font-size,var(--text-base))] leading-5`,
        o,
        r,
      )),
      (t[5] = r),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let l;
  return (
    t[8] !== n || t[9] !== i || t[10] !== s
      ? ((l = (0, N.jsx)(`div`, { className: s, ...i, children: n })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = s),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var M,
  N,
  P = e(() => {
    ((M = o()), C(), (N = _()));
  });
function F(e) {
  let t = (0, L.c)(4),
    { description: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r =
        n ??
        (0, R.jsx)(f, {
          id: `pullRequestSidePanel.error.description`,
          defaultMessage: `Couldn’t load this pull request section`,
          description: `Fallback error description for pull request sections`,
        })),
      (t[0] = n),
      (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, R.jsx)(j, { role: `alert`, tone: `danger`, children: r })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function I(e) {
  let t = (0, L.c)(3),
    { label: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(u, { className: `icon-sm` })), (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, R.jsxs)(j, {
          "aria-busy": `true`,
          children: [
            r,
            (0, R.jsx)(`span`, { className: `sr-only`, children: n }),
          ],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var L,
  R,
  xe = e(() => {
    ((L = o()), x(), P(), a(), (R = _()));
  });
function Se(e) {
  let t = (0, z.c)(9),
    { actions: n, body: r, error: i, loading: a, renderBody: o } = e,
    s = o === void 0 ? Te : o,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, B.jsx)(f, {
        id: `pullRequestDetail.description.title`,
        defaultMessage: `Description`,
        description: `Pull request description section title`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== s
    ? ((l =
        i == null
          ? a || r == null
            ? (0, B.jsx)(I, {
                label: (0, B.jsx)(f, {
                  id: `pullRequestDetail.description.loading`,
                  defaultMessage: `Loading description`,
                  description: `Loading label for the pull request description`,
                }),
              })
            : r.trim().length > 0
              ? s(r)
              : (0, B.jsx)(j, {
                  children: (0, B.jsx)(f, {
                    id: `pullRequestDetail.description.empty`,
                    defaultMessage: `No description provided`,
                    description: `Empty pull request description`,
                  }),
                })
          : (0, B.jsx)(F, { description: i })),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== n || t[7] !== l
      ? ((u = (0, B.jsx)(A, {
          id: `pull-request-description`,
          actions: n,
          collapsible: !0,
          title: c,
          children: l,
        })),
        (t[6] = n),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function Ce(e) {
  let t = (0, z.c)(11),
    {
      actions: n,
      checks: r,
      empty: i,
      error: a,
      loading: o,
      notice: s,
      renderChecks: c,
    } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(f, {
        id: `pullRequestDetail.checks.title`,
        defaultMessage: `Checks`,
        description: `Pull request checks section title`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== c
    ? ((u =
        a == null
          ? o || r == null
            ? (0, B.jsx)(I, {
                label: (0, B.jsx)(f, {
                  id: `pullRequestDetail.checks.loading`,
                  defaultMessage: `Loading checks`,
                  description: `Loading label for pull request checks`,
                }),
              })
            : r.length > 0
              ? c(r)
              : (0, B.jsx)(j, {
                  children:
                    i ??
                    (0, B.jsx)(f, {
                      id: `pullRequestDetail.checks.empty`,
                      defaultMessage: `No checks reported`,
                      description: `Empty pull request checks list`,
                    }),
                })
          : (0, B.jsx)(F, { description: a })),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== n || t[8] !== s || t[9] !== u
      ? ((d = (0, B.jsxs)(A, {
          id: `pull-request-checks`,
          actions: n,
          collapsible: !0,
          title: l,
          children: [s, u],
        })),
        (t[7] = n),
        (t[8] = s),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function we(e) {
  let t = (0, z.c)(12),
    {
      actions: n,
      comments: r,
      error: i,
      footer: a,
      loading: o,
      notice: s,
      renderComment: c,
    } = e,
    l = r?.length,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, B.jsx)(f, {
        id: `pullRequestDetail.comments.title`,
        defaultMessage: `Comments`,
        description: `Pull request comments section title`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== c
    ? ((d =
        i == null
          ? o || r == null
            ? (0, B.jsx)(I, {
                label: (0, B.jsx)(f, {
                  id: `pullRequestDetail.comments.loading`,
                  defaultMessage: `Loading comments`,
                  description: `Loading label for pull request comments`,
                }),
              })
            : r.length > 0
              ? (0, B.jsx)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: r.map((e) =>
                    (0, B.jsx)(`div`, { children: c(e) }, e.id),
                  ),
                })
              : (0, B.jsx)(j, {
                  children: (0, B.jsx)(f, {
                    id: `pullRequestDetail.comments.empty`,
                    defaultMessage: `No comments`,
                    description: `Empty pull request comments list`,
                  }),
                })
          : (0, B.jsx)(F, { description: i })),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let p;
  return (
    t[6] !== n || t[7] !== a || t[8] !== s || t[9] !== l || t[10] !== d
      ? ((p = (0, B.jsxs)(A, {
          id: `pull-request-comments`,
          actions: n,
          collapsible: !0,
          count: l,
          title: u,
          children: [s, d, a],
        })),
        (t[6] = n),
        (t[7] = a),
        (t[8] = s),
        (t[9] = l),
        (t[10] = d),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function Te(e) {
  return (0, B.jsx)(p, { allowBasicHtml: !0, cwd: null, children: re(e) });
}
var z,
  B,
  Ee = e(() => {
    ((z = o()), x(), be(), P(), w(), ie(), xe(), (B = _()));
  });
function De(e) {
  let t = (0, V.c)(9),
    { items: n, labelTone: i, wrapLabels: a } = e,
    o = i === void 0 ? `tertiary` : i,
    s = a === void 0 ? !1 : a,
    c = o === `primary` ? `default` : `tertiary`,
    l;
  if (t[0] !== n || t[1] !== c || t[2] !== s) {
    let e;
    (t[4] !== c || t[5] !== s
      ? ((e = (e) => {
          let t = (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)(D.ItemLeading, {
                  variant: `custom`,
                  children: e.icon,
                }),
                (0, H.jsx)(D.ItemLabel, {
                  className: s ? `wrap-anywhere` : void 0,
                  truncate: !s,
                  children:
                    e.tooltipContent == null
                      ? e.label
                      : (0, H.jsx)(r, {
                          tooltipContent: e.tooltipContent,
                          children: (0, H.jsx)(`span`, {
                            className: s ? `wrap-anywhere` : `truncate`,
                            children: e.label,
                          }),
                        }),
                }),
              ],
            }),
            n =
              e.trailing == null
                ? null
                : (0, H.jsx)(D.ItemMeta, {
                    visibility:
                      e.trailingVisible === !1 ? `interaction` : `always`,
                    onClick: e.action == null ? void 0 : e.onClick,
                    children: e.trailing,
                  });
          return e.action == null
            ? e.onClick == null
              ? (0, H.jsxs)(
                  D.Item,
                  { className: e.className, tone: c, children: [t, n] },
                  e.id,
                )
              : (0, H.jsxs)(
                  D.ItemButton,
                  {
                    className: e.className,
                    onClick: e.onClick,
                    tone: c,
                    children: [t, n],
                  },
                  e.id,
                )
            : (0, H.jsxs)(
                D.Item,
                {
                  className: e.className,
                  interactive: e.onClick != null,
                  tone: c,
                  children: [
                    e.onClick == null
                      ? t
                      : (0, H.jsx)(D.ItemTrigger, {
                          onClick: e.onClick,
                          children: t,
                        }),
                    (0, H.jsx)(D.ItemActions, { children: e.action }),
                    n,
                  ],
                },
                e.id,
              );
        }),
        (t[4] = c),
        (t[5] = s),
        (t[6] = e))
      : (e = t[6]),
      (l = n.map(e)),
      (t[0] = n),
      (t[1] = c),
      (t[2] = s),
      (t[3] = l));
  } else l = t[3];
  let u;
  return (
    t[7] === l
      ? (u = t[8])
      : ((u = (0, H.jsx)(D.ItemGroup, { children: l })),
        (t[7] = l),
        (t[8] = u)),
    u
  );
}
var V,
  H,
  Oe = e(() => {
    ((V = o()), v(), se(), (H = _()));
  });
function ke(e) {
  let t = (0, U.c)(21),
    {
      canFix: r,
      checks: i,
      fixTooltipContent: a,
      insetFixButtons: o,
      isCheckAttached: s,
      labelTone: c,
      onFixCheck: l,
      onRemoveCheck: u,
      wrapLabels: d,
    } = e,
    p = r === void 0 ? !1 : r,
    m = o === void 0 ? !1 : o,
    g = c === void 0 ? `tertiary` : c,
    _ = d === void 0 ? !1 : d,
    v;
  if (
    t[0] !== p ||
    t[1] !== i ||
    t[2] !== a ||
    t[3] !== m ||
    t[4] !== s ||
    t[5] !== l ||
    t[6] !== u ||
    t[7] !== _
  ) {
    let e;
    (t[9] !== p ||
    t[10] !== a ||
    t[11] !== m ||
    t[12] !== s ||
    t[13] !== l ||
    t[14] !== u ||
    t[15] !== _
      ? ((e = (e, t) => {
          let r = e.link,
            i = !!s?.(e),
            o = i ? u : l;
          return {
            action:
              e.status === `failing` && o != null
                ? (0, G.jsx)(ye, {
                    disabled: !i && !p,
                    inset: m,
                    tooltipContent: a,
                    onClick: () => o(e),
                    children: i
                      ? (0, G.jsx)(f, {
                          id: `localConversation.pullRequest.actions.checks.remove`,
                          defaultMessage: `Remove`,
                          description: `Per-check action label for removing a failing pull request check from the task`,
                        })
                      : (0, G.jsx)(f, {
                          id: `localConversation.pullRequest.actions.checks.fix`,
                          defaultMessage: `Fix`,
                          description: `Per-check action label for fixing a single failing pull request check`,
                        }),
                  })
                : void 0,
            className: r == null ? void 0 : `before:hidden`,
            icon: Me(e.status),
            id: t,
            label: (0, G.jsxs)(`span`, {
              className: `inline-flex max-w-full min-w-0 items-center gap-1.5`,
              children: [
                (0, G.jsx)(`span`, {
                  className: _ ? `wrap-anywhere` : `truncate`,
                  children: e.name,
                }),
                r == null
                  ? null
                  : (0, G.jsx)(n, {
                      className: `icon-xs shrink-0 opacity-0 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100`,
                      href: r,
                    }),
              ],
            }),
            onClick:
              r == null
                ? void 0
                : (e) => {
                    h({ event: e, href: r, initiator: `pull_request_link` });
                  },
            tooltipContent: (0, G.jsx)(Ne, { status: e.status }),
            trailing: (0, G.jsx)(`span`, {
              className: `text-sm text-token-text-tertiary`,
              children: je(e.status),
            }),
          };
        }),
        (t[9] = p),
        (t[10] = a),
        (t[11] = m),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u),
        (t[15] = _),
        (t[16] = e))
      : (e = t[16]),
      (v = (0, W.default)(i, Ae).map(e)),
      (t[0] = p),
      (t[1] = i),
      (t[2] = a),
      (t[3] = m),
      (t[4] = s),
      (t[5] = l),
      (t[6] = u),
      (t[7] = _),
      (t[8] = v));
  } else v = t[8];
  let y = v,
    b;
  return (
    t[17] !== y || t[18] !== g || t[19] !== _
      ? ((b = (0, G.jsx)(De, { items: y, labelTone: g, wrapLabels: _ })),
        (t[17] = y),
        (t[18] = g),
        (t[19] = _),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
function Ae(e) {
  return K[e.status];
}
function je(e) {
  switch (e) {
    case `failing`:
      return (0, G.jsx)(f, {
        id: `pullRequestSidePanel.checks.status.failed`,
        defaultMessage: `Failed`,
        description: `Status label for a failed pull request check`,
      });
    case `pending`:
      return (0, G.jsx)(f, {
        id: `pullRequestSidePanel.checks.status.inProgress`,
        defaultMessage: `In progress`,
        description: `Status label for an in-progress pull request check`,
      });
    case `passing`:
      return (0, G.jsx)(f, {
        id: `pullRequestSidePanel.checks.status.passed`,
        defaultMessage: `Passed`,
        description: `Status label for a passed pull request check`,
      });
    case `skipped`:
      return (0, G.jsx)(f, {
        id: `pullRequestSidePanel.checks.status.skipped`,
        defaultMessage: `Skipped`,
        description: `Status label for a skipped pull request check`,
      });
    case `unknown`:
      return (0, G.jsx)(f, {
        id: `pullRequestSidePanel.checks.status.unknown`,
        defaultMessage: `Unknown`,
        description: `Status label for a pull request check with unknown status`,
      });
  }
}
function Me(e) {
  switch (e) {
    case `failing`:
      return (0, G.jsx)(ge, {
        className: `icon-sm shrink-0 text-token-charts-red`,
      });
    case `pending`:
      return (0, G.jsx)(ue, {
        className: `icon-sm shrink-0 text-token-charts-yellow`,
      });
    case `passing`:
      return (0, G.jsx)(ee, {
        className: `icon-sm shrink-0 text-token-charts-green`,
      });
    case `skipped`:
    case `unknown`:
      return (0, G.jsx)(pe, {
        className: `icon-sm shrink-0 text-token-text-tertiary`,
      });
  }
}
function Ne(e) {
  let t = (0, U.c)(5),
    { status: n } = e;
  switch (n) {
    case `failing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(f, {
              id: `localConversation.pullRequest.actions.checks.tooltip.failed`,
              defaultMessage: `Failed test`,
              description: `Tooltip shown for an individual failed pull request check`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `pending`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(f, {
              id: `localConversation.pullRequest.actions.checks.tooltip.pending`,
              defaultMessage: `Pending test`,
              description: `Tooltip shown for an individual pending pull request check`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `skipped`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(f, {
              id: `localConversation.pullRequest.actions.checks.tooltip.skipped`,
              defaultMessage: `Skipped test`,
              description: `Tooltip shown for an individual skipped pull request check`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `passing`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(f, {
              id: `localConversation.pullRequest.actions.checks.tooltip.passed`,
              defaultMessage: `Passed test`,
              description: `Tooltip shown for an individual passed pull request check`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(f, {
              id: `localConversation.pullRequest.actions.checks.tooltip.unknown`,
              defaultMessage: `Unknown test status`,
              description: `Tooltip shown for an individual pull request check with unknown status`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var U,
  W,
  G,
  K,
  Pe = e(() => {
    ((U = o()),
      (W = t(le(), 1)),
      x(),
      b(),
      g(),
      d(),
      fe(),
      de(),
      O(),
      ve(),
      Oe(),
      (G = _()),
      (K = { failing: 0, pending: 1, skipped: 2, unknown: 3, passing: 4 }));
  });
function Fe(e) {
  return e.filter((e) => e.type !== `event`);
}
function Ie(e) {
  return (0, q.default)([
    ...e.requested,
    ...e.requestedTeams,
    ...e.approved,
    ...e.changesRequested,
    ...e.commented,
  ]).map((t) => ({
    kind: e.requestedTeams.includes(t) ? `team` : `user`,
    label: t,
    status: Le(e, t),
  }));
}
function Le(e, t) {
  return e.changesRequested.includes(t)
    ? `changes_requested`
    : e.approved.includes(t)
      ? `approved`
      : `waiting`;
}
var q,
  Re = e(() => {
    q = t(i(), 1);
  });
function ze(e) {
  let t = (0, J.c)(25),
    {
      additions: n,
      baseBranch: r,
      checksIcon: i,
      checksValue: a,
      children: o,
      commentsValue: c,
      deletions: l,
      headBranch: u,
      reviewersValue: d,
    } = e,
    p;
  t[0] !== n || t[1] !== r || t[2] !== l || t[3] !== u
    ? ((p =
        u == null && r == null
          ? null
          : (0, Y.jsx)(k, {
              icon: (0, Y.jsx)(m, {
                className: `icon-sm shrink-0 text-token-text-tertiary`,
              }),
              label: (0, Y.jsx)(f, {
                id: `pullRequestOverview.branch`,
                defaultMessage: `Branch`,
                description: `Branch field label in the pull request overview`,
              }),
              children: (0, Y.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  u == null
                    ? null
                    : (0, Y.jsx)(`span`, {
                        className: `truncate`,
                        children: u,
                      }),
                  u != null && r != null
                    ? (0, Y.jsx)(s, {
                        "aria-hidden": !0,
                        className: `icon-2xs shrink-0 text-token-text-tertiary`,
                      })
                    : null,
                  r == null
                    ? null
                    : (0, Y.jsx)(`span`, {
                        className: `truncate`,
                        children: r,
                      }),
                  n != null && l != null
                    ? (0, Y.jsx)(ce, {
                        className: `ms-1 shrink-0`,
                        linesAdded: n,
                        linesRemoved: l,
                      })
                    : null,
                ],
              }),
            })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = l),
      (t[3] = u),
      (t[4] = p))
    : (p = t[4]);
  let h, g;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(T, {
        className: `icon-sm shrink-0 text-token-text-tertiary`,
      })),
      (g = (0, Y.jsx)(f, {
        id: `pullRequestOverview.reviewers`,
        defaultMessage: `Reviewers`,
        description: `Reviewer field label in the pull request overview`,
      })),
      (t[5] = h),
      (t[6] = g))
    : ((h = t[5]), (g = t[6]));
  let _;
  t[7] === d
    ? (_ = t[8])
    : ((_ = (0, Y.jsx)(k, { icon: h, label: g, children: d })),
      (t[7] = d),
      (t[8] = _));
  let v, y;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(me, {
        className: `icon-sm shrink-0 text-token-text-tertiary`,
      })),
      (y = (0, Y.jsx)(f, {
        id: `pullRequestOverview.comments`,
        defaultMessage: `Comments`,
        description: `Comments field label in the pull request overview`,
      })),
      (t[9] = v),
      (t[10] = y))
    : ((v = t[9]), (y = t[10]));
  let b;
  t[11] === c
    ? (b = t[12])
    : ((b = (0, Y.jsx)(k, { icon: v, label: y, children: c })),
      (t[11] = c),
      (t[12] = b));
  let x;
  t[13] === i
    ? (x = t[14])
    : ((x = (0, Y.jsx)(`span`, {
        className: `inline-flex shrink-0 text-token-text-tertiary [&_svg]:text-token-text-tertiary`,
        children: i,
      })),
      (t[13] = i),
      (t[14] = x));
  let S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(f, {
        id: `pullRequestOverview.checks`,
        defaultMessage: `Checks`,
        description: `Checks field label in the pull request overview`,
      })),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] !== a || t[17] !== x
    ? ((C = (0, Y.jsx)(k, { icon: x, label: S, children: a })),
      (t[16] = a),
      (t[17] = x),
      (t[18] = C))
    : (C = t[18]);
  let w;
  return (
    t[19] !== o || t[20] !== p || t[21] !== C || t[22] !== _ || t[23] !== b
      ? ((w = (0, Y.jsxs)(`dl`, {
          className: `flex flex-col px-[var(--detail-page-inline-inset,0px)] pb-2 select-none`,
          children: [p, _, b, C, o],
        })),
        (t[19] = o),
        (t[20] = p),
        (t[21] = C),
        (t[22] = _),
        (t[23] = b),
        (t[24] = w))
      : (w = t[24]),
    w
  );
}
var J,
  Y,
  X = e(() => {
    ((J = o()), x(), _e(), oe(), E(), y(), he(), l(), (Y = _()));
  });
function Be(e) {
  let t = (0, Z.c)(8),
    { reviewers: n } = e,
    i = te();
  if (n.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`span`, {
            className: `text-token-text-tertiary`,
            children: (0, Q.jsx)(f, {
              id: `pullRequest.reviewers.empty`,
              defaultMessage: `No reviewers`,
              description: `Empty state for a pull request without reviewers`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let a;
  if (t[1] !== i || t[2] !== n) {
    let e;
    (t[4] === i
      ? (e = t[5])
      : ((e = (e) => {
          let t = Ve(i, e);
          return (0, Q.jsx)(
            r,
            {
              delayDuration: 0,
              tooltipContent: t,
              children: (0, Q.jsxs)(`span`, {
                "aria-label": t,
                className: `relative block size-5 shrink-0 rounded-full border border-token-bg-primary bg-token-bg-secondary`,
                role: `img`,
                children: [
                  e.kind === `team`
                    ? (0, Q.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `flex size-full items-center justify-center text-token-text-primary`,
                        children: (0, Q.jsx)(T, { className: `icon-xs` }),
                      })
                    : (0, Q.jsx)(`img`, {
                        "aria-hidden": !0,
                        alt: ``,
                        className: `size-full rounded-full object-cover`,
                        src: ae(e.label, 40) ?? void 0,
                      }),
                  (0, Q.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: c(
                      `absolute end-[-2px] bottom-[-2px] size-2 rounded-full border border-token-bg-primary`,
                      e.status === `approved` && `bg-token-charts-green`,
                      e.status === `waiting` && `bg-token-charts-yellow`,
                      e.status === `changes_requested` && `bg-token-charts-red`,
                    ),
                  }),
                ],
              }),
            },
            `${e.kind}:${e.label}`,
          );
        }),
        (t[4] = i),
        (t[5] = e)),
      (a = n.map(e)),
      (t[1] = i),
      (t[2] = n),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, Q.jsx)(`span`, {
          className: `hide-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto overflow-y-hidden py-0.5`,
          children: a,
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function Ve(e, t) {
  let n = e.formatMessage($[t.status]);
  return t.kind === `team`
    ? e.formatMessage(
        {
          id: `pullRequest.reviewers.teamAccessibility`,
          defaultMessage: `{reviewer} team, {status}`,
          description: `Accessible label for a pull request review team and its status`,
        },
        { reviewer: t.label, status: n },
      )
    : e.formatMessage(
        {
          id: `pullRequest.reviewers.userAccessibility`,
          defaultMessage: `{reviewer}, {status}`,
          description: `Accessible label for a pull request reviewer and their status`,
        },
        { reviewer: t.label, status: n },
      );
}
var Z,
  Q,
  $,
  He = e(() => {
    ((Z = o()),
      C(),
      x(),
      v(),
      E(),
      ne(),
      (Q = _()),
      ($ = S({
        approved: {
          id: `pullRequestSidePanel.overview.reviewer.approved`,
          defaultMessage: `Approved`,
          description: `Accessible status for an approved pull request reviewer`,
        },
        changes_requested: {
          id: `pullRequestSidePanel.overview.reviewer.changesRequested`,
          defaultMessage: `Requested changes`,
          description: `Accessible status for a pull request reviewer who requested changes`,
        },
        waiting: {
          id: `pullRequestSidePanel.overview.reviewer.waiting`,
          defaultMessage: `Waiting for review`,
          description: `Accessible status for a pull request reviewer whose review is pending`,
        },
      })));
  });
export {
  Fe as a,
  ke as c,
  we as d,
  Se as f,
  X as i,
  Pe as l,
  He as n,
  Ie as o,
  Ee as p,
  ze as r,
  Re as s,
  Be as t,
  Ce as u,
};
//# sourceMappingURL=pull-request-reviewer-status-list-wRucN1NU.js.map
