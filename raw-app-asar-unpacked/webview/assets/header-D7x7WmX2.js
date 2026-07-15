import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $F as n,
  AH as r,
  AY as i,
  Ab as a,
  BW as o,
  Bb as s,
  C as c,
  C0 as l,
  CJ as u,
  CS as d,
  Cb as f,
  DK as p,
  Ds as m,
  FK as h,
  Fj as g,
  Fq as _,
  GJ as v,
  I2 as y,
  JA as b,
  KJ as x,
  L2 as S,
  LS as C,
  Mq as w,
  Nq as T,
  OH as E,
  P$ as D,
  PK as O,
  Pq as ee,
  RK as k,
  S0 as A,
  Ts as j,
  Ub as te,
  WJ as M,
  Wb as ne,
  YU as N,
  _0 as P,
  _C as F,
  _D as I,
  _Y as L,
  aG as R,
  ai as re,
  bJ as z,
  cI as B,
  cJ as V,
  cS as ie,
  cT as H,
  cY as U,
  cj as W,
  cp as G,
  d2 as K,
  dC as q,
  dT as ae,
  dl as oe,
  dm as se,
  eI as ce,
  fC as le,
  gl as ue,
  hl as de,
  ic as fe,
  ix as pe,
  jj as me,
  js as he,
  k2 as ge,
  kK as _e,
  kS as ve,
  ks as ye,
  lC as be,
  lI as xe,
  lS as Se,
  lW as Ce,
  lm as we,
  lp as Te,
  mD as Ee,
  mY as De,
  nt as Oe,
  oj as ke,
  p2 as Ae,
  pY as je,
  pl as Me,
  qJ as Ne,
  rG as Pe,
  rc as Fe,
  rx as Ie,
  sW as Le,
  sY as Re,
  sj as ze,
  tt as Be,
  uJ as Ve,
  w as He,
  wJ as Ue,
  x0 as We,
  yJ as Ge,
  yY as Ke,
  zK as qe,
  zW as Je,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  _i as Ye,
  dr as Xe,
  ur as Ze,
  vi as Qe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  n as $e,
  t as et,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  dl as tt,
  fl as nt,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  $t as rt,
  Cn as it,
  Qt as at,
  Sn as ot,
  _n as st,
  c as ct,
  cn as lt,
  i as ut,
  l as dt,
  n as ft,
  on as pt,
  r as mt,
  s as ht,
  t as gt,
  u as _t,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Sr as vt,
  xr as yt,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  lt as bt,
  pt as xt,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  n as St,
  t as Ct,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~hotkey-window-new-thread~ciugno9i-UhEwWeMr.js";
import { n as wt, t as Tt } from "./dock-IoaaO1LZ.js";
function Et(e) {
  let t = (0, jt.c)(15),
    { conversationId: n } = e,
    r = Ke(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = At()), (t[0] = i))
    : (i = t[0]);
  let a = i,
    o = Ot,
    s = Dt,
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(L, { ...Pt.moreActionsTrigger })), (t[1] = l))
    : (l = t[1]);
  let u;
  t[2] === r
    ? (u = t[3])
    : ((u = r.formatMessage(Pt.moreActionsTrigger)), (t[2] = r), (t[3] = u));
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(c, { className: `icon-xs` })), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = (0, J.jsx)(p, {
        tooltipContent: l,
        children: (0, J.jsx)(w, {
          color: `ghost`,
          size: `icon`,
          "aria-label": u,
          children: d,
        }),
      })),
      (t[5] = u),
      (t[6] = f));
  let h;
  t[7] === n
    ? (h = t[8])
    : ((h =
        n == null
          ? null
          : (0, J.jsx)(m.Item, {
              RightIcon: tt,
              onSelect: () => {
                kt(`codex://threads/${n}`);
              },
              children: (0, J.jsx)(L, {
                id: `header.openInApp`,
                defaultMessage: `Open in app`,
                description: `Menu item label for opening the active Chrome extension thread in the ChatGPT desktop app`,
              }),
            })),
      (t[7] = n),
      (t[8] = h));
  let g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(m.Item, {
        RightIcon: tt,
        onSelect: o,
        children: (0, J.jsx)(L, { ...Pt.appSettings }),
      })),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(m.Item, {
        RightIcon: tt,
        onSelect: s,
        children: (0, J.jsx)(L, { ...Pt.chromeComputerUseSettings }),
      })),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsxs)(m.Title, {
        className: `gap-4`,
        children: [
          (0, J.jsx)(`span`, {
            className: `min-w-0 flex-1 truncate`,
            children: (0, J.jsx)(L, { ...Pt.codexForChrome }),
          }),
          a == null
            ? null
            : (0, J.jsx)(`span`, {
                className: `shrink-0`,
                children: (0, J.jsx)(L, {
                  ...Pt.extensionVersion,
                  values: { version: a },
                }),
              }),
        ],
      })),
      (t[11] = v))
    : (v = t[11]);
  let y;
  return (
    t[12] !== f || t[13] !== h
      ? ((y = (0, J.jsxs)(j, {
          align: `end`,
          contentWidth: `menuBounded`,
          triggerButton: f,
          children: [h, g, _, v],
        })),
        (t[12] = f),
        (t[13] = h),
        (t[14] = y))
      : (y = t[14]),
    y
  );
}
function Dt() {
  kt(Nt);
}
function Ot() {
  kt(Mt);
}
function kt(e) {
  I({ href: e, initiator: `open_in_browser_bridge` });
}
function At() {
  return globalThis.chrome?.runtime?.getManifest?.().version ?? null;
}
var jt,
  J,
  Mt,
  Nt,
  Pt,
  Ft = e(() => {
    ((jt = y()),
      De(),
      T(),
      he(),
      Ee(),
      _e(),
      nt(),
      He(),
      (J = ge()),
      (Mt = `codex://settings`),
      (Nt = `codex://settings/computer-use/google-chrome`),
      (Pt = je({
        moreActionsTrigger: {
          id: `header.moreActionsTrigger`,
          defaultMessage: `More actions`,
          description: `Button label for opening more actions from the Chrome extension side panel header`,
        },
        appSettings: {
          id: `header.appSettings`,
          defaultMessage: `App settings`,
          description: `Menu item label for opening app settings in the ChatGPT desktop app from the Chrome extension`,
        },
        chromeComputerUseSettings: {
          id: `header.chromeComputerUseSettings`,
          defaultMessage: `Chrome computer use settings`,
          description: `Menu item label for opening Chrome computer use settings in the ChatGPT desktop app from the Chrome extension`,
        },
        codexForChrome: {
          id: `header.codexForChrome`,
          defaultMessage: `ChatGPT for Chrome`,
          description: `Footer label for the Chrome extension in the more actions menu`,
        },
        extensionVersion: {
          id: `header.extensionVersion`,
          defaultMessage: `v{version}`,
          description: `Footer label for the Chrome extension version in the settings menu`,
        },
      })));
  });
function It() {
  let e = (0, Lt.c)(12),
    t = vt(),
    n = Ke(),
    r = We(bt, `newTask`),
    i;
  e[0] === t
    ? (i = e[1])
    : ((i = (e) => {
        e.defaultPrevented || t();
      }),
      (e[0] = t),
      (e[1] = i));
  let a = i,
    o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Rt.jsx)(L, { ...zt.newChat })), (e[2] = o))
    : (o = e[2]);
  let s;
  e[3] === n
    ? (s = e[4])
    : ((s = n.formatMessage(zt.newChat)), (e[3] = n), (e[4] = s));
  let c;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Rt.jsx)(Ct, { className: `icon-xs` })), (e[5] = c))
    : (c = e[5]);
  let l;
  e[6] !== a || e[7] !== s
    ? ((l = (0, Rt.jsx)(w, {
        color: `ghost`,
        size: `icon`,
        onClick: a,
        "aria-label": s,
        children: c,
      })),
      (e[6] = a),
      (e[7] = s),
      (e[8] = l))
    : (l = e[8]);
  let u;
  return (
    e[9] !== r || e[10] !== l
      ? ((u = (0, Rt.jsx)(p, { tooltipContent: o, shortcut: r, children: l })),
        (e[9] = r),
        (e[10] = l),
        (e[11] = u))
      : (u = e[11]),
    u
  );
}
var Lt,
  Rt,
  zt,
  Bt = e(() => {
    ((Lt = y()),
      P(),
      De(),
      xt(),
      T(),
      _e(),
      yt(),
      St(),
      (Rt = ge()),
      (zt = je({
        newChat: {
          id: `localConversationPage.newChat`,
          defaultMessage: `New task`,
          description: `Label for starting a new task`,
        },
      })));
  });
function Vt(e) {
  let t = (0, Wt.c)(23),
    { mergedTasks: n, tasksQuery: r } = e,
    i = W(),
    a = ke(),
    { cancelPendingWorktree: o } = ot();
  if (r.isLoading && n.length === 0) return null;
  let s = r.error instanceof V && r.error.status === 404;
  if (r.isError && n.length === 0 && !s) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Gt.jsx)(L, {
          id: `codex.recentTasksMenu.errorCloud.inline`,
          defaultMessage: `Failed to load cloud tasks.`,
          description: `Inline error indicator for cloud tasks in recent feed`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === r
      ? (n = t[2])
      : ((n = () => {
          r.refetch();
        }),
        (t[1] = r),
        (t[2] = n));
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Gt.jsx)(L, {
          id: `codex.common.retry`,
          defaultMessage: `Retry`,
          description: `Retry button`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] === n
        ? (a = t[5])
        : ((a = (0, Gt.jsxs)(`div`, {
            className: `mb-2 flex items-center gap-2 text-base text-token-input-placeholder-foreground`,
            children: [
              e,
              (0, Gt.jsx)(w, {
                size: `default`,
                color: `outline`,
                onClick: n,
                children: i,
              }),
            ],
          })),
          (t[4] = n),
          (t[5] = a)),
      a
    );
  }
  if (n.length === 0) return null;
  let c;
  t[6] === n ? (c = t[7]) : (n.filter(Ut), (c = n), (t[6] = n), (t[7] = c));
  let l = c,
    u;
  if (t[8] !== o || t[9] !== a || t[10] !== i || t[11] !== l) {
    let e;
    (t[13] !== o || t[14] !== a || t[15] !== i
      ? ((e = (e) => {
          switch (e.kind) {
            case `remote`:
              return (0, Gt.jsx)(
                ht,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/remote/${e.task.id}`,
                  task: e.task,
                  onClose: Ht,
                },
                e.key,
              );
            case `local`:
              return e.conversation == null
                ? (0, Gt.jsx)(
                    gt,
                    {
                      useStableTrailingRail: !0,
                      task: e.pendingWorktree,
                      hasAttention: e.pendingWorktree.needsAttention,
                      statusIndicatorReplacesMeta: !0,
                      onArchive: () => {
                        o(e.pendingWorktree.id);
                      },
                    },
                    e.key,
                  )
                : (0, Gt.jsx)(
                    dt,
                    {
                      useStableTrailingRail: !0,
                      isActive: a.pathname === `/local/${e.conversation.id}`,
                      conversationId: e.conversation.id,
                      statusIndicatorReplacesMeta: !0,
                      metaContent:
                        e.conversation.createdAt == null
                          ? void 0
                          : (0, Gt.jsx)(pt, {
                              dateString: new Date(
                                e.conversation.createdAt,
                              ).toISOString(),
                            }),
                      onClick: () => {
                        i(`/local/${e.conversation.id}`);
                      },
                    },
                    e.key,
                  );
          }
        }),
        (t[13] = o),
        (t[14] = a),
        (t[15] = i),
        (t[16] = e))
      : (e = t[16]),
      (u = l.map(e)),
      (t[8] = o),
      (t[9] = a),
      (t[10] = i),
      (t[11] = l),
      (t[12] = u));
  } else u = t[12];
  let d;
  t[17] !== n.length || t[18] !== !1
    ? ((d = !1), (t[17] = n.length), (t[18] = !1), (t[19] = d))
    : (d = t[19]);
  let f;
  return (
    t[20] !== u || t[21] !== d
      ? ((f = (0, Gt.jsxs)(`div`, {
          className: `group/inline -mx-[var(--padding-row-x)] flex flex-col gap-px rounded-xl pb-1 transition-colors [--task-row-trailing-inset:calc(var(--spacing)*1.5)]`,
          children: [u, d],
        })),
        (t[20] = u),
        (t[21] = d),
        (t[22] = f))
      : (f = t[22]),
    f
  );
}
function Ht() {}
function Ut(e) {
  if (e.kind === `remote`) {
    let t = e.task.task_status_display?.latest_turn_status_display?.turn_status;
    return (
      e.task.has_unread_turn === !0 || t === `in_progress` || t === `pending`
    );
  }
  return e.kind === `local`
    ? e.conversation == null || e.conversation.hasUnreadTurn
      ? !0
      : ce(e.conversation)
    : !1;
}
var Wt,
  Gt,
  Kt = e(() => {
    ((Wt = y()),
      t(N(), 1),
      De(),
      b(),
      n(),
      T(),
      lt(),
      Ve(),
      st(),
      ct(),
      _t(),
      ft(),
      (Gt = ge()));
  });
function qt(e, t) {
  return typeof e == `string` && e.toLowerCase().includes(t);
}
var Jt = e(() => {}),
  Yt,
  Xt = e(() => {
    (u(), (Yt = Ue(`cloudTasksEnvironmentFilterId`, null)));
  });
function Zt(e) {
  let t = (0, Qt.c)(15),
    { searchQuery: n, onQueryChange: r, autoFocus: i } = e,
    a = i === void 0 ? !1 : i,
    o = Ke(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $t.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `recent-tasks-search`,
        children: (0, $t.jsx)(L, {
          id: `codex.recentTasksMenu.search`,
          defaultMessage: `Search recent tasks`,
          description: `Label for the recent tasks menu search input`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === r
    ? (c = t[2])
    : ((c = (e) => r(e.target.value)), (t[1] = r), (t[2] = c));
  let l;
  t[3] === o
    ? (l = t[4])
    : ((l = o.formatMessage({
        id: `codex.recentTasksMenu.search`,
        defaultMessage: `Search recent tasks`,
        description: `Label for the recent tasks menu search input`,
      })),
      (t[3] = o),
      (t[4] = l));
  let u;
  t[5] !== o || t[6] !== r || t[7] !== n.length
    ? ((u =
        n.length > 0
          ? (0, $t.jsx)(`button`, {
              type: `button`,
              className: `flex items-center justify-center text-token-input-placeholder-foreground transition-colors hover:text-token-foreground`,
              onClick: () => r(``),
              "aria-label": o.formatMessage({
                id: `codex.recentTasksMenu.clearSearch`,
                defaultMessage: `Clear search`,
                description: `Button label to clear the recent tasks menu search input`,
              }),
              children: (0, $t.jsx)(Je, { className: `icon-2xs` }),
            })
          : null),
      (t[5] = o),
      (t[6] = r),
      (t[7] = n.length),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== a || t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, $t.jsxs)(`div`, {
          children: [
            s,
            (0, $t.jsx)(ye, {
              id: `recent-tasks-search`,
              autoFocus: a,
              value: n,
              onChange: c,
              placeholder: l,
              trailingContent: u,
            }),
          ],
        })),
        (t[9] = a),
        (t[10] = n),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
var Qt,
  $t,
  en = e(() => {
    ((Qt = y()), De(), he(), o(), ($t = ge()));
  });
function tn() {
  let e = (0, nn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, rn.jsx)(Ze, {
          className: `h-48 text-token-input-placeholder-foreground`,
          children: (0, rn.jsx)(L, {
            id: `codex.recentTasksMenu.empty`,
            defaultMessage: `No tasks yet`,
            description: `Empty state for recent tasks menu`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var nn,
  rn,
  an = e(() => {
    ((nn = y()), De(), Xe(), (rn = ge()));
  }),
  on,
  sn = e(() => {
    on = `w-full justify-between !px-[var(--padding-row-x)] !py-[var(--padding-row-y)] text-left`;
  });
function cn(e) {
  let t = (0, un.c)(64),
    { className: n } = e,
    r = Ke(),
    [i, o] = (0, dn.useState)(!1),
    [s, c] = (0, dn.useState)(``),
    [l, u] = Ae(Yt),
    d = pe(),
    { data: f, isLoading: h, isError: g, refetch: _ } = ne(),
    v;
  t[0] === s ? (v = t[1]) : ((v = s.trim()), (t[0] = s), (t[1] = v));
  let y = v.length > 0,
    b;
  t[2] === y ? (b = t[3]) : ((b = { enabled: y }), (t[2] = y), (t[3] = b));
  let { data: S, isLoading: C, isError: T, refetch: E } = a(s, b),
    D;
  if (t[4] !== s || t[5] !== f || t[6] !== S || t[7] !== d) {
    bb0: {
      let e = s.trim(),
        n = e.length > 0 ? (S ?? []) : (f ?? []);
      if (e.length === 0 && d) {
        let e;
        t[9] === d
          ? (e = t[10])
          : ((e = (e) => e.id === d.id), (t[9] = d), (t[10] = e));
        let r = n.find(e);
        if (!r) {
          D = n;
          break bb0;
        }
        let i;
        (t[11] === d
          ? (i = t[12])
          : ((i = (e) => e.id !== d.id), (t[11] = d), (t[12] = i)),
          (D = [r, ...n.filter(i)]));
        break bb0;
      }
      D = n;
    }
    ((t[4] = s), (t[5] = f), (t[6] = S), (t[7] = d), (t[8] = D));
  } else D = t[8];
  let O = D,
    k;
  t[13] !== l || t[14] !== f
    ? ((k = f?.find((e) => e.id === l) ?? null),
      (t[13] = l),
      (t[14] = f),
      (t[15] = k))
    : (k = t[15]);
  let A = k,
    j;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(L, {
        id: `codex.recentTasksMenu.filterTooltip`,
        defaultMessage: `Filter tasks by environment`,
        description: `Tooltip explaining the environment filter button`,
      })),
      (t[16] = j))
    : (j = t[16]);
  let te = l ? `default` : `icon`,
    M;
  t[17] === n ? (M = t[18]) : ((M = x(`mr-1`, n)), (t[17] = n), (t[18] = M));
  let N;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Y.jsx)(Tt, { className: `icon-2xs` })), (t[19] = N))
    : (N = t[19]);
  let P;
  t[20] !== l || t[21] !== A
    ? ((P =
        !!l &&
        A?.label &&
        (0, Y.jsx)(`span`, { className: `text-sm`, children: A.label })),
      (t[20] = l),
      (t[21] = A),
      (t[22] = P))
    : (P = t[22]);
  let F;
  t[23] === P
    ? (F = t[24])
    : ((F = (0, Y.jsxs)(`span`, {
        className: `flex items-center gap-1.5`,
        children: [N, P],
      })),
      (t[23] = P),
      (t[24] = F));
  let I;
  t[25] !== F || t[26] !== te || t[27] !== M
    ? ((I = (0, Y.jsx)(de, {
        asChild: !0,
        children: (0, Y.jsx)(p, {
          tooltipContent: j,
          children: (0, Y.jsx)(w, {
            color: `ghost`,
            size: te,
            className: M,
            children: F,
          }),
        }),
      })),
      (t[25] = F),
      (t[26] = te),
      (t[27] = M),
      (t[28] = I))
    : (I = t[28]);
  let R;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(`div`, {
        className: `pb-1 text-xs tracking-wide text-token-input-placeholder-foreground uppercase`,
        children: (0, Y.jsx)(L, {
          id: `codex.recentTasksMenu.filterCloudTasks`,
          defaultMessage: `Filter cloud tasks`,
          description: `Title for environment filter menu in recent tasks`,
        }),
      })),
      (t[29] = R))
    : (R = t[29]);
  let re = !l,
    z;
  t[30] === u
    ? (z = t[31])
    : ((z = () => {
        (u(null), o(!1));
      }),
      (t[30] = u),
      (t[31] = z));
  let B;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Y.jsx)(L, {
        id: `codex.recentTasksMenu.filterAll`,
        defaultMessage: `All`,
        description: `All environments filter option`,
      })),
      (t[32] = B))
    : (B = t[32]);
  let V;
  t[33] !== re || t[34] !== z
    ? ((V = (0, Y.jsx)(ln, { isSelected: re, onClick: z, children: B })),
      (t[33] = re),
      (t[34] = z),
      (t[35] = V))
    : (V = t[35]);
  let ie;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Y.jsx)(m.Separator, {})), (t[36] = ie))
    : (ie = t[36]);
  let H;
  t[37] === r
    ? (H = t[38])
    : ((H = r.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[37] = r),
      (t[38] = H));
  let U;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => c(e.currentTarget.value)), (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] !== s || t[41] !== H
    ? ((W = (0, Y.jsx)(m.Section, {
        className: `my-1`,
        children: (0, Y.jsx)(m.SearchInput, {
          placeholder: H,
          value: s,
          onChange: U,
        }),
      })),
      (t[40] = s),
      (t[41] = H),
      (t[42] = W))
    : (W = t[42]);
  let G;
  t[43] !== l ||
  t[44] !== s ||
  t[45] !== g ||
  t[46] !== h ||
  t[47] !== T ||
  t[48] !== C ||
  t[49] !== O ||
  t[50] !== _ ||
  t[51] !== E ||
  t[52] !== u
    ? ((G =
        s.trim().length > 0 && T
          ? (0, Y.jsxs)(m.Message, {
              className: `flex w-full items-center justify-center gap-2`,
              children: [
                (0, Y.jsx)(`span`, {
                  children: (0, Y.jsx)(L, {
                    id: `codex.environments.searchError`,
                    defaultMessage: `Failed to search environments.`,
                    description: `Error shown when environment search fails`,
                  }),
                }),
                (0, Y.jsx)(w, {
                  size: `default`,
                  color: `outline`,
                  onClick: () => {
                    E();
                  },
                  children: (0, Y.jsx)(L, {
                    id: `codex.common.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button`,
                  }),
                }),
              ],
            })
          : s.trim().length === 0 && g
            ? (0, Y.jsxs)(m.Message, {
                className: `flex w-full items-center justify-center gap-2`,
                children: [
                  (0, Y.jsx)(`span`, {
                    children: (0, Y.jsx)(L, {
                      id: `codex.environments.listError`,
                      defaultMessage: `Failed to load environments.`,
                      description: `Error shown when listing environments fails`,
                    }),
                  }),
                  (0, Y.jsx)(w, {
                    size: `default`,
                    color: `outline`,
                    onClick: () => {
                      _();
                    },
                    children: (0, Y.jsx)(L, {
                      id: `codex.common.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry button`,
                    }),
                  }),
                ],
              })
            : O?.length > 0
              ? O.map((e) =>
                  (0, Y.jsx)(
                    ln,
                    {
                      isSelected: e.id === l,
                      onClick: () => {
                        (u(e.id), o(!1));
                      },
                      children: e.label,
                    },
                    e.id,
                  ),
                )
              : C || h
                ? (0, Y.jsx)(ee, {
                    className: `icon-xxs my-2 self-center text-token-description-foreground`,
                  })
                : (0, Y.jsx)(m.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(L, {
                      id: `codex.environments.noEnvironmentsFound`,
                      defaultMessage: `No environments found`,
                      description: `Message shown when no Codex environments were found`,
                    }),
                  })),
      (t[43] = l),
      (t[44] = s),
      (t[45] = g),
      (t[46] = h),
      (t[47] = T),
      (t[48] = C),
      (t[49] = O),
      (t[50] = _),
      (t[51] = E),
      (t[52] = u),
      (t[53] = G))
    : (G = t[53]);
  let K;
  t[54] === G
    ? (K = t[55])
    : ((K = (0, Y.jsx)(m.Section, {
        className: `flex max-h-[140px] flex-col overflow-y-auto pb-1`,
        children: G,
      })),
      (t[54] = G),
      (t[55] = K));
  let q;
  t[56] !== V || t[57] !== W || t[58] !== K
    ? ((q = (0, Y.jsx)(Me, {
        className: `w-[240px]`,
        side: `top`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex max-w-full flex-col py-1`,
          children: [R, V, ie, W, K],
        }),
      })),
      (t[56] = V),
      (t[57] = W),
      (t[58] = K),
      (t[59] = q))
    : (q = t[59]);
  let ae;
  return (
    t[60] !== i || t[61] !== I || t[62] !== q
      ? ((ae = (0, Y.jsxs)(oe, { open: i, onOpenChange: o, children: [I, q] })),
        (t[60] = i),
        (t[61] = I),
        (t[62] = q),
        (t[63] = ae))
      : (ae = t[63]),
    ae
  );
}
function ln(e) {
  let t = (0, un.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = x(on, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Y.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, Y.jsx)(k, { className: `icon-2xs shrink-0 opacity-75` })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, Y.jsxs)(w, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var un,
  dn,
  Y,
  fn = e(() => {
    ((un = y()),
      Ne(),
      K(),
      (dn = t(S(), 1)),
      De(),
      f(),
      T(),
      he(),
      ue(),
      _(),
      _e(),
      qe(),
      wt(),
      Ie(),
      Xt(),
      sn(),
      (Y = ge()));
  });
function pn(e) {
  let t = (0, gn.c)(31),
    { filter: n, onSelect: r } = e,
    i = vn[n],
    [a, o] = (0, _n.useState)(!1),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, X.jsx)(`span`, { children: (0, X.jsx)(L, { ...i }) })),
      (t[0] = i),
      (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(M, { className: `icon-2xs` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === s
    ? (l = t[4])
    : ((l = (0, X.jsx)(de, {
        asChild: !0,
        children: (0, X.jsxs)(`button`, {
          type: `button`,
          className: `flex items-center gap-1 px-2 pt-2 text-sm font-medium text-token-input-placeholder-foreground hover:text-token-foreground`,
          children: [s, c],
        }),
      })),
      (t[3] = s),
      (t[4] = l));
  let u = n === `recent`,
    d;
  t[5] === r
    ? (d = t[6])
    : ((d = () => {
        (r(`recent`), o(!1));
      }),
      (t[5] = r),
      (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(L, {
        id: `codex.recentTasksMenu.recent`,
        defaultMessage: `All tasks`,
        description: `Menu title for recent Codex tasks`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = (0, X.jsx)(hn, { isSelected: u, onClick: d, children: f })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = n === `cloud`,
    h;
  t[11] === r
    ? (h = t[12])
    : ((h = () => {
        (r(`cloud`), o(!1));
      }),
      (t[11] = r),
      (t[12] = h));
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(L, {
        id: `codex.recentTasksMenu.cloud`,
        defaultMessage: `Cloud tasks`,
        description: `Menu title for cloud Codex tasks`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== m || t[15] !== h
    ? ((_ = (0, X.jsx)(hn, { isSelected: m, onClick: h, children: g })),
      (t[14] = m),
      (t[15] = h),
      (t[16] = _))
    : (_ = t[16]);
  let v = n === `local`,
    y;
  t[17] === r
    ? (y = t[18])
    : ((y = () => {
        (r(`local`), o(!1));
      }),
      (t[17] = r),
      (t[18] = y));
  let b;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(L, {
        id: `codex.recentTasksMenu.local`,
        defaultMessage: `Local tasks`,
        description: `Menu title for local Codex tasks`,
      })),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== v || t[21] !== y
    ? ((x = (0, X.jsx)(hn, { isSelected: v, onClick: y, children: b })),
      (t[20] = v),
      (t[21] = y),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== _ || t[24] !== x || t[25] !== p
    ? ((S = (0, X.jsx)(Me, {
        className: `w-[220px]`,
        onOpenAutoFocus: mn,
        children: (0, X.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [p, _, x],
        }),
      })),
      (t[23] = _),
      (t[24] = x),
      (t[25] = p),
      (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== a || t[28] !== S || t[29] !== l
      ? ((C = (0, X.jsxs)(oe, { open: a, onOpenChange: o, children: [l, S] })),
        (t[27] = a),
        (t[28] = S),
        (t[29] = l),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function mn(e) {
  e.preventDefault();
}
function hn(e) {
  let t = (0, gn.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = x(on, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, X.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, X.jsx)(k, { className: `icon-2xs shrink-0 opacity-75` })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, X.jsxs)(w, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var gn,
  _n,
  X,
  vn,
  yn = e(() => {
    ((gn = y()),
      Ne(),
      (_n = t(S(), 1)),
      De(),
      T(),
      ue(),
      qe(),
      v(),
      sn(),
      (X = ge()),
      (vn = je({
        recent: {
          id: `codex.recentTasksMenu.recent`,
          defaultMessage: `All tasks`,
          description: `Menu title for recent Codex tasks`,
        },
        cloud: {
          id: `codex.recentTasksMenu.cloud`,
          defaultMessage: `Cloud tasks`,
          description: `Menu title for cloud Codex tasks`,
        },
        local: {
          id: `codex.recentTasksMenu.local`,
          defaultMessage: `Local tasks`,
          description: `Menu title for local Codex tasks`,
        },
      })));
  });
function bn() {
  let e = (0, xn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Sn.jsx)(Ze, {
          className: `h-48 text-token-input-placeholder-foreground`,
          children: (0, Sn.jsx)(L, {
            id: `codex.recentTasksMenu.searchEmpty`,
            defaultMessage: `No threads found`,
            description: `Empty state for recent tasks menu search results`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var xn,
  Sn,
  Cn = e(() => {
    ((xn = y()), De(), Xe(), (Sn = ge()));
  });
function wn({ conversation: e, isBackgroundSubagentsEnabled: t }) {
  return !Ce(e, t);
}
var Tn = e(() => {
  Le();
});
function En(e, t, n) {
  let r = it(),
    i = R(`12346831`),
    a = l(be),
    o = We(
      me,
      (0, An.useMemo)(() => t.map((e) => e.id), [t]),
    ),
    s = i ? B : a,
    c = rt(),
    u = (0, An.useRef)(new Map());
  return (0, An.useMemo)(() => {
    let i = On(
      Dn({
        tasks: e,
        localConversations: t,
        pendingWorktrees: r,
        envForFilter: n,
        threadSortKey: s,
        isBackgroundSubagentsEnabled: c,
        clientThreadIdsByConversationId: o,
      }),
      u.current,
    );
    return ((u.current = new Map(i.map((e) => [e.key, e]))), i);
  }, [e, n, o, c, t, r, s]);
}
function Dn({
  tasks: e,
  localConversations: t,
  pendingWorktrees: n,
  envForFilter: r,
  threadSortKey: i,
  isBackgroundSubagentsEnabled: a,
  clientThreadIdsByConversationId: o,
}) {
  let s = e ?? [],
    c = t.filter((e) =>
      wn({ conversation: e, isBackgroundSubagentsEnabled: a }),
    ),
    l = (0, kn.default)(
      r
        ? s.filter((e) => e.task_status_display?.environment_label === r.label)
        : s,
      `id`,
    ).map((e) => {
      let t =
        i === `updated_at`
          ? (e.updated_at ?? e.created_at ?? 0)
          : (e.created_at ?? e.updated_at ?? 0);
      return { kind: `remote`, key: le(e.id), at: t * 1e3, task: e };
    }),
    u = c.map((e) => {
      let t = i === `updated_at` ? (e.recencyAt ?? e.updatedAt) : e.createdAt;
      Number.isFinite(t) ||
        z.error(`local conversation has invalid createdAt or updatedAt`);
      let n = Number.isFinite(t)
        ? t
        : Number.isFinite(e.createdAt)
          ? e.createdAt
          : 0;
      return {
        kind: `local`,
        key: q(o.get(e.id) ?? e.id),
        at: n,
        conversation: e,
      };
    }),
    d = n.flatMap((e) =>
      e.clientThreadId == null
        ? []
        : [
            {
              kind: `local`,
              key: q(e.clientThreadId),
              at: e.createdAt,
              conversation: null,
              pendingWorktree: e,
            },
          ],
    );
  return (0, kn.default)([...l, ...u, ...d], `key`).sort((e, t) => t.at - e.at);
}
function On(e, t) {
  return e.map((e) => {
    let n = t.get(e.key);
    if (n == null || n.at !== e.at) return e;
    switch (e.kind) {
      case `remote`:
        return n.kind === `remote` && n.task === e.task ? n : e;
      case `local`:
        return n.kind === `local` &&
          n.conversation === e.conversation &&
          n.pendingWorktree === e.pendingWorktree
          ? n
          : e;
    }
  });
}
var kn,
  An,
  jn = e(() => {
    ((kn = t(N(), 1)),
      P(),
      (An = t(S(), 1)),
      at(),
      g(),
      C(),
      F(),
      Pe(),
      xe(),
      Ge(),
      st(),
      Tn());
  });
function Mn(e) {
  let t = (0, Ln.c)(33),
    {
      cloudtasksQuery: n,
      localConversations: r,
      onClose: i,
      autoFocusSearch: a,
      showFilters: o,
    } = e,
    s = a === void 0 ? !1 : a,
    c = o === void 0 ? !0 : o,
    l = Ke(),
    { authMethod: u } = Se(),
    [d, f] = Ae(zn),
    [p] = Ae(Yt),
    h = c ? d : `recent`,
    g = ze(`/local/:conversationId`)?.params?.conversationId ?? null,
    { data: _ } = ne(),
    v = rt(),
    y;
  t[0] !== p || t[1] !== c || t[2] !== _
    ? ((y = c ? (_?.find((e) => e.id === p) ?? null) : null),
      (t[0] = p),
      (t[1] = c),
      (t[2] = _),
      (t[3] = y))
    : (y = t[3]);
  let b = y,
    x;
  t[4] === v
    ? (x = t[5])
    : ((x = (e) => wn({ conversation: e, isBackgroundSubagentsEnabled: v })),
      (t[4] = v),
      (t[5] = x));
  let S = r.filter(x),
    C = En(n.data, r, b),
    [T, D] = (0, Rn.useState)(``),
    O = (0, Rn.useDeferredValue)(T).trim().toLowerCase(),
    k = O.length > 0,
    A = C.filter(Nn),
    j = k
      ? A.filter((e) => {
          let { task: t } = e;
          return qt(t.title, O);
        })
      : A,
    te = k ? S.filter((e) => qt(E(e), O)) : S,
    M = k
      ? C.filter((e) =>
          e.kind === `remote`
            ? qt(e.task.title, O)
            : qt(
                e.conversation == null
                  ? Pn(e.pendingWorktree, l)
                  : E(e.conversation),
                O,
              ),
        )
      : C,
    N;
  t[6] !== s || t[7] !== T
    ? ((N = (0, Z.jsx)(m.Section, {
        children: (0, Z.jsx)(Zt, {
          searchQuery: T,
          onQueryChange: D,
          autoFocus: s,
        }),
      })),
      (t[6] = s),
      (t[7] = T),
      (t[8] = N))
    : (N = t[8]);
  let P;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(`div`, {
        className: `mx-2 border-t-[0.5px] border-token-border`,
        "aria-hidden": !0,
      })),
      (t[9] = P))
    : (P = t[9]);
  let F;
  t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== c
    ? ((F =
        c &&
        u === `chatgpt` &&
        (0, Z.jsxs)(m.Section, {
          className: `flex items-center justify-between px-[var(--padding-row-x)]`,
          children: [
            (0, Z.jsx)(pn, { filter: d, onSelect: f }),
            d !== `local` && (0, Z.jsx)(cn, {}),
          ],
        })),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = c),
      (t[14] = F))
    : (F = t[14]);
  let I = m,
    R =
      h === `cloud` &&
      (n.isError
        ? (0, Z.jsx)(In, {
            onRetry: () => {
              n.refetch();
            },
          })
        : n.isLoading
          ? (0, Z.jsx)(Fn, {})
          : j.length === 0
            ? k
              ? (0, Z.jsx)(bn, {})
              : (0, Z.jsx)(tn, {})
            : j.map((e) =>
                (0, Z.jsx)(ht, { task: e.task, onClose: i }, e.key),
              )),
    re =
      h === `local` &&
      (te.length
        ? te.map((e) =>
            (0, Z.jsx)(
              Bn,
              {
                conversationId: e.id,
                updatedAt: e.recencyAt ?? e.updatedAt,
                isActive: g === e.id,
                onClose: i,
              },
              e.id,
            ),
          )
        : k
          ? (0, Z.jsx)(bn, {})
          : (0, Z.jsx)(tn, {})),
    z;
  t[15] !== g ||
  t[16] !== n ||
  t[17] !== M ||
  t[18] !== k ||
  t[19] !== C.length ||
  t[20] !== i ||
  t[21] !== h
    ? ((z =
        h === `recent` &&
        (n.isError && C.length === 0
          ? (0, Z.jsx)(In, {
              onRetry: () => {
                n.refetch();
              },
            })
          : n.isLoading && C.length === 0
            ? (0, Z.jsx)(Fn, {})
            : M.length === 0
              ? k
                ? (0, Z.jsx)(bn, {})
                : (0, Z.jsx)(tn, {})
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    n.isError &&
                      (0, Z.jsxs)(`div`, {
                        className: `mx-1 my-1 flex items-center justify-between gap-2 px-1 text-base text-token-foreground`,
                        children: [
                          (0, Z.jsx)(L, {
                            id: `codex.recentTasksMenu.errorCloud.inline`,
                            defaultMessage: `Failed to load cloud tasks.`,
                            description: `Inline error indicator for cloud tasks in recent feed`,
                          }),
                          (0, Z.jsx)(w, {
                            size: `default`,
                            color: `outline`,
                            onClick: () => {
                              n.refetch();
                            },
                            children: (0, Z.jsx)(L, {
                              id: `codex.common.retry`,
                              defaultMessage: `Retry`,
                              description: `Retry button`,
                            }),
                          }),
                        ],
                      }),
                    n.isPending &&
                      !C.length &&
                      (0, Z.jsx)(`div`, {
                        className: `mx-1 my-1 flex items-center gap-2 text-sm text-token-input-placeholder-foreground`,
                        children: (0, Z.jsx)(ee, { className: `icon-xs` }),
                      }),
                    M.map((e) =>
                      (0, Z.jsx)(
                        Vn,
                        {
                          item: e,
                          isActive:
                            e.kind === `local` &&
                            e.conversation != null &&
                            g === e.conversation.id,
                          onClose: i,
                        },
                        e.key,
                      ),
                    ),
                  ],
                }))),
      (t[15] = g),
      (t[16] = n),
      (t[17] = M),
      (t[18] = k),
      (t[19] = C.length),
      (t[20] = i),
      (t[21] = h),
      (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] !== I.Section || t[24] !== R || t[25] !== re || t[26] !== z
    ? ((B = (0, Z.jsxs)(I.Section, {
        className: `vertical-scroll-fade-mask flex max-h-[60vh] flex-col gap-0 overflow-y-auto pb-1`,
        children: [R, re, z],
      })),
      (t[23] = I.Section),
      (t[24] = R),
      (t[25] = re),
      (t[26] = z),
      (t[27] = B))
    : (B = t[27]);
  let V;
  return (
    t[28] !== B || t[29] !== N || t[30] !== P || t[31] !== F
      ? ((V = (0, Z.jsxs)(`div`, {
          className: `flex max-h-[300px] w-[calc(var(--radix-popper-available-width)_-_var(--padding-panel))] flex-col gap-1`,
          children: [N, P, F, B],
        })),
        (t[28] = B),
        (t[29] = N),
        (t[30] = P),
        (t[31] = F),
        (t[32] = V))
      : (V = t[32]),
    V
  );
}
function Nn(e) {
  return e.kind === `remote`;
}
function Pn(e, t) {
  let n = e.label?.trim();
  return n && n.length > 0
    ? n
    : e.phase === `failed`
      ? t.formatMessage({
          id: `recentTasks.worktreeInitFailedTitle`,
          defaultMessage: `Worktree init failed`,
          description: `Worktree row title when the init script fails`,
        })
      : t.formatMessage({
          id: `recentTasks.worktreeSettingUpTitle`,
          defaultMessage: `Setting up worktree`,
          description: `Worktree row title while init is pending`,
        });
}
function Fn() {
  let e = (0, Ln.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          className: `flex h-48 items-center justify-center gap-2 text-sm text-token-input-placeholder-foreground`,
          children: (0, Z.jsx)(ee, { className: `icon-xs` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function In(e) {
  let t = (0, Ln.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(L, {
        id: `codex.recentTasksMenu.errorCloud`,
        defaultMessage: `Failed to load tasks.`,
        description: `Error state for cloud tasks in recent tasks menu`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(L, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Z.jsxs)(`div`, {
          className: `flex h-48 items-center justify-center gap-3 text-sm text-token-input-placeholder-foreground`,
          children: [
            r,
            (0, Z.jsx)(w, {
              size: `default`,
              color: `outline`,
              onClick: n,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var Ln,
  Rn,
  Z,
  zn,
  Bn,
  Vn,
  Hn = e(() => {
    ((Ln = y()),
      K(),
      P(),
      (Rn = t(S(), 1)),
      De(),
      b(),
      ie(),
      f(),
      T(),
      he(),
      lt(),
      _(),
      at(),
      r(),
      U(),
      Jt(),
      u(),
      mt(),
      st(),
      ct(),
      _t(),
      Xt(),
      en(),
      an(),
      fn(),
      yn(),
      Cn(),
      Tn(),
      jn(),
      ft(),
      (Z = ge()),
      (zn = Ue(`recent-tasks-filter`, `recent`)),
      (Bn = (0, Rn.memo)(function (e) {
        let t = (0, Ln.c)(7),
          { conversationId: n, updatedAt: r, isActive: i, onClose: a } = e,
          o;
        t[0] === r
          ? (o = t[1])
          : ((o =
              r == null
                ? void 0
                : (0, Z.jsx)(pt, { dateString: new Date(r).toISOString() })),
            (t[0] = r),
            (t[1] = o));
        let s;
        return (
          t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o
            ? ((s = (0, Z.jsx)(dt, {
                conversationId: n,
                isActive: i,
                metaContent: o,
                onClick: a,
              })),
              (t[2] = n),
              (t[3] = i),
              (t[4] = a),
              (t[5] = o),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      })),
      (Vn = (0, Rn.memo)(function (e) {
        let t = (0, Ln.c)(23),
          { item: n, isActive: r, onClose: i } = e,
          a = A(Re),
          o = W(),
          { cancelPendingWorktree: s } = ot();
        switch (n.kind) {
          case `remote`: {
            let e;
            return (
              t[0] !== n.task || t[1] !== i
                ? ((e = (0, Z.jsx)(ht, { task: n.task, onClose: i })),
                  (t[0] = n.task),
                  (t[1] = i),
                  (t[2] = e))
                : (e = t[2]),
              e
            );
          }
          case `local`: {
            if (n.conversation == null) {
              let e;
              t[3] !== n.pendingWorktree ||
              t[4] !== o ||
              t[5] !== i ||
              t[6] !== a
                ? ((e = () => {
                    (ut(a, o, n.pendingWorktree), i());
                  }),
                  (t[3] = n.pendingWorktree),
                  (t[4] = o),
                  (t[5] = i),
                  (t[6] = a),
                  (t[7] = e))
                : (e = t[7]);
              let r;
              t[8] !== s || t[9] !== n.pendingWorktree.id
                ? ((r = () => {
                    s(n.pendingWorktree.id);
                  }),
                  (t[8] = s),
                  (t[9] = n.pendingWorktree.id),
                  (t[10] = r))
                : (r = t[10]);
              let c;
              return (
                t[11] !== n.pendingWorktree || t[12] !== e || t[13] !== r
                  ? ((c = (0, Z.jsx)(gt, {
                      task: n.pendingWorktree,
                      hasAttention: n.pendingWorktree.needsAttention,
                      onClick: e,
                      onArchive: r,
                    })),
                    (t[11] = n.pendingWorktree),
                    (t[12] = e),
                    (t[13] = r),
                    (t[14] = c))
                  : (c = t[14]),
                c
              );
            }
            let e;
            t[15] !== n.conversation.recencyAt ||
            t[16] !== n.conversation.updatedAt
              ? ((e =
                  (n.conversation.recencyAt ?? n.conversation.updatedAt) == null
                    ? void 0
                    : (0, Z.jsx)(pt, {
                        dateString: new Date(
                          n.conversation.recencyAt ?? n.conversation.updatedAt,
                        ).toISOString(),
                      })),
                (t[15] = n.conversation.recencyAt),
                (t[16] = n.conversation.updatedAt),
                (t[17] = e))
              : (e = t[17]);
            let c;
            return (
              t[18] !== r ||
              t[19] !== n.conversation.id ||
              t[20] !== i ||
              t[21] !== e
                ? ((c = (0, Z.jsx)(dt, {
                    conversationId: n.conversation.id,
                    isActive: r,
                    metaContent: e,
                    onClick: i,
                  })),
                  (t[18] = r),
                  (t[19] = n.conversation.id),
                  (t[20] = i),
                  (t[21] = e),
                  (t[22] = c))
                : (c = t[22]),
              c
            );
          }
        }
      })));
  });
function Un(e) {
  let t = (0, Kn.c)(67),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { label: r, showFilters: i } = n,
    a = i === void 0 ? !0 : i,
    o = Ke(),
    { authMethod: s } = Se(),
    c = ke(),
    { data: l } = ve(),
    u = rt(),
    [d, f] = (0, qn.useState)(!1),
    m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        f(!1);
      }),
      (t[2] = m))
    : (m = t[2]);
  let g = h(m),
    _ = d && s === `chatgpt`,
    v;
  t[3] === _
    ? (v = t[4])
    : ((v = { taskFilter: `current`, limit: 20, enabled: _ }),
      (t[3] = _),
      (t[4] = v));
  let y = te(v),
    b;
  t[5] === y.data
    ? (b = t[6])
    : ((b = y.data ?? []), (t[5] = y.data), (t[6] = b));
  let S;
  t[7] === b ? (S = t[8]) : ((S = b.filter(Gn)), (t[7] = b), (t[8] = S));
  let C = S,
    T,
    E,
    D,
    O;
  if (
    t[9] !== l ||
    t[10] !== u ||
    t[11] !== r ||
    t[12] !== c.pathname ||
    t[13] !== C.length
  ) {
    let e;
    t[18] === u
      ? (e = t[19])
      : ((e = (e) => wn({ conversation: e, isBackgroundSubagentsEnabled: u })),
        (t[18] = u),
        (t[19] = e));
    let n = (l ?? []).filter(e).filter(Wn);
    ((T = C.length + n.length),
      (D = c.pathname !== `/` && T > 0),
      (E = r != null),
      (O = !1),
      (t[9] = l),
      (t[10] = u),
      (t[11] = r),
      (t[12] = c.pathname),
      (t[13] = C.length),
      (t[14] = T),
      (t[15] = E),
      (t[16] = D),
      (t[17] = O));
  } else ((T = t[14]), (E = t[15]), (D = t[16]), (O = t[17]));
  let k = O,
    A;
  t[20] !== k || t[21] !== T || t[22] !== o
    ? ((A = k
        ? o.formatMessage(
            {
              id: `codex.recentTasksMenu.triggerWithUnread`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}. Unread task updates`,
              description: `Accessible label for opening the recent tasks menu when unread task updates are present`,
            },
            { count: T },
          )
        : o.formatMessage(
            {
              id: `codex.recentTasksMenu.trigger`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}`,
              description: `Accessible label for opening the recent tasks menu`,
            },
            { count: T },
          )),
      (t[20] = k),
      (t[21] = T),
      (t[22] = o),
      (t[23] = A))
    : (A = t[23]);
  let ne = A,
    N;
  t[24] !== s || t[25] !== d || t[26] !== y
    ? ((N = () => {
        d && s === `chatgpt` && y.refetch();
      }),
      (t[24] = s),
      (t[25] = d),
      (t[26] = y),
      (t[27] = N))
    : (N = t[27]);
  let P;
  (t[28] === d ? (P = t[29]) : ((P = [d]), (t[28] = d), (t[29] = P)),
    (0, qn.useEffect)(N, P));
  let F, I;
  (t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => {
        let e = (e) => f(!0);
        return (
          window.addEventListener(`open-recent-tasks-menu`, e),
          () => window.removeEventListener(`open-recent-tasks-menu`, e)
        );
      }),
      (I = []),
      (t[30] = F),
      (t[31] = I))
    : ((F = t[30]), (I = t[31])),
    (0, qn.useEffect)(F, I));
  let R;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(L, {
        id: `codex.recentTasksMenu.tooltip`,
        defaultMessage: `Task history`,
        description: `Tooltip text for recent tasks menu`,
      })),
      (t[32] = R))
    : (R = t[32]);
  let re = E ? `ghostActive` : `ghost`,
    z = E ? `default` : `icon`,
    B =
      E &&
      `max-w-full min-w-0 !px-0 !py-0 hover:!bg-transparent hover:opacity-80`,
    V;
  t[33] === B
    ? (V = t[34])
    : ((V = x(`relative`, B)), (t[33] = B), (t[34] = V));
  let ie = E ? void 0 : ne,
    H;
  t[35] === k
    ? (H = t[36])
    : ((H = k
        ? (0, Q.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `absolute top-0.5 right-0.5 size-1.5 rounded-full`,
            style: { backgroundColor: `var(--vscode-textLink-foreground)` },
          })
        : null),
      (t[35] = k),
      (t[36] = H));
  let U;
  t[37] !== r || t[38] !== E || t[39] !== D
    ? ((U = E
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`span`, {
                className: x(`min-w-0 truncate`, !1),
                children: r,
              }),
              (0, Q.jsx)(M, {
                className: `icon-2xs shrink-0 text-token-text-tertiary`,
              }),
            ],
          })
        : D
          ? (0, Q.jsx)(`span`, {
              className: `relative inline-flex size-4 justify-center`,
              children: (0, Q.jsx)(ee, { className: `icon-xs` }),
            })
          : (0, Q.jsx)(Ye, { className: `icon-xs hover:opacity-80` })),
      (t[37] = r),
      (t[38] = E),
      (t[39] = D),
      (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== T || t[42] !== o
    ? ((W = o.formatMessage(
        {
          id: `codex.recentTasksMenu.count`,
          defaultMessage: `{count, plural, =0 {No tasks in progress} one {# task in progress} other {# tasks in progress}}`,
          description: `Live region text announcing in-progress task count for recent tasks trigger`,
        },
        { count: T },
      )),
      (t[41] = T),
      (t[42] = o),
      (t[43] = W))
    : (W = t[43]);
  let G;
  t[44] === W
    ? (G = t[45])
    : ((G = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: W,
      })),
      (t[44] = W),
      (t[45] = G));
  let K;
  t[46] !== E ||
  t[47] !== re ||
  t[48] !== z ||
  t[49] !== V ||
  t[50] !== ie ||
  t[51] !== H ||
  t[52] !== U ||
  t[53] !== G
    ? ((K = (0, Q.jsx)(p, {
        tooltipContent: R,
        children: (0, Q.jsxs)(w, {
          color: re,
          size: z,
          className: V,
          allowShrink: E,
          "aria-label": ie,
          children: [H, U, G],
        }),
      })),
      (t[46] = E),
      (t[47] = re),
      (t[48] = z),
      (t[49] = V),
      (t[50] = ie),
      (t[51] = H),
      (t[52] = U),
      (t[53] = G),
      (t[54] = K))
    : (K = t[54]);
  let q;
  t[55] === l ? (q = t[56]) : ((q = l ?? []), (t[55] = l), (t[56] = q));
  let ae;
  t[57] !== g || t[58] !== d || t[59] !== y || t[60] !== a || t[61] !== q
    ? ((ae = (0, Q.jsx)(Mn, {
        cloudtasksQuery: y,
        localConversations: q,
        onClose: g,
        autoFocusSearch: d,
        showFilters: a,
      })),
      (t[57] = g),
      (t[58] = d),
      (t[59] = y),
      (t[60] = a),
      (t[61] = q),
      (t[62] = ae))
    : (ae = t[62]);
  let oe;
  return (
    t[63] !== d || t[64] !== K || t[65] !== ae
      ? ((oe = (0, Q.jsx)(j, {
          contentClassName: `!pb-0 mt-[9px]`,
          triggerButton: K,
          open: d,
          onOpenChange: f,
          children: ae,
        })),
        (t[63] = d),
        (t[64] = K),
        (t[65] = ae),
        (t[66] = oe))
      : (oe = t[66]),
    oe
  );
}
function Wn(e) {
  return ce(e);
}
function Gn(e) {
  let t = e.task_status_display?.latest_turn_status_display?.turn_status;
  return t === `in_progress` || t === `pending`;
}
var Kn,
  qn,
  Q,
  Jn = e(() => {
    ((Kn = y()),
      Ne(),
      (qn = t(S(), 1)),
      De(),
      b(),
      d(),
      n(),
      ie(),
      f(),
      T(),
      he(),
      _(),
      _e(),
      at(),
      v(),
      Qe(),
      O(),
      Hn(),
      Tn(),
      (Q = ge()));
  });
function Yn(e) {
  let t = (0, er.c)(66),
    {
      className: n,
      desktopDeepLinkConversationId: r,
      title: i,
      onBack: a,
      trailing: o,
    } = e,
    s = ke(),
    c = a ?? Zn,
    l = s.pathname === `/`,
    u = Xn,
    { data: d } = ve(),
    f = l,
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = { taskFilter: `current`, limit: 20, enabled: f }),
      (t[0] = f),
      (t[1] = p));
  let m = te(p),
    h;
  t[2] === d ? (h = t[3]) : ((h = d ?? []), (t[2] = d), (t[3] = h));
  let g = En(m.data, h, null),
    _;
  t[28] === n
    ? (_ = t[29])
    : ((_ = x(`draggable extension:px-panel`, n)), (t[28] = n), (t[29] = _));
  let v = `justify-between`,
    y;
  t[30] === v
    ? (y = t[31])
    : ((y = x(`flex items-center electron:h-toolbar extension:py-row-y`, v)),
      (t[30] = v),
      (t[31] = y));
  let b;
  t[32] !== a || t[33] !== !1
    ? ((b = null), (t[32] = a), (t[33] = !1), (t[34] = b))
    : (b = t[34]);
  let S;
  t[35] !== c || t[36] !== g || t[37] !== i
    ? ((S = (0, $.jsx)(`div`, {
        className: `mr-3 line-clamp-1 flex min-w-0 flex-1 items-center gap-1 truncate`,
        style: { viewTransitionName: `header-title` },
        children: i
          ? (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 items-center gap-1`,
              children: [
                (0, $.jsx)($n, { onClick: c }),
                (0, $.jsx)(w, {
                  color: `ghostActive`,
                  type: `button`,
                  onClick: u,
                  className: `min-w-0 flex-1 truncate !px-0 !py-0 text-left text-sm text-token-foreground hover:!bg-transparent hover:opacity-80 electron:font-medium`,
                  children: (0, $.jsx)(`span`, {
                    className: `truncate`,
                    children: i,
                  }),
                }),
              ],
            })
          : (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, $.jsx)(Qn, {
                mergedTasks: g,
                onBack: c,
                showBackButton: !0,
              }),
            }),
      })),
      (t[35] = c),
      (t[36] = g),
      (t[37] = i),
      (t[38] = S))
    : (S = t[38]);
  let C;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(Un, {})), (t[39] = C))
    : (C = t[39]);
  let T;
  t[40] === r
    ? (T = t[41])
    : ((T = (0, $.jsx)(G, {
        chromeExtension: !0,
        children: (0, $.jsx)(Et, { conversationId: r }),
      })),
      (t[40] = r),
      (t[41] = T));
  let E;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(G, { extension: !0, children: (0, $.jsx)(et, {}) })),
      (t[42] = E))
    : (E = t[42]);
  let D;
  t[43] === !0
    ? (D = t[44])
    : ((D = (0, $.jsx)(It, {})), (t[43] = !0), (t[44] = D));
  let O;
  t[45] !== T || t[46] !== D
    ? ((O = (0, $.jsx)(G, {
        chromeExtension: !0,
        extension: !0,
        children: (0, $.jsx)(`div`, {
          className: `flex flex-shrink-0 items-center`,
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [C, T, E, D],
          }),
        }),
      })),
      (t[45] = T),
      (t[46] = D),
      (t[47] = O))
    : (O = t[47]);
  let ee;
  t[48] !== O || t[49] !== o
    ? ((ee = (0, $.jsxs)(`div`, {
        className: `flex flex-shrink-0 items-center gap-1`,
        children: [o, O],
      })),
      (t[48] = O),
      (t[49] = o),
      (t[50] = ee))
    : (ee = t[50]);
  let k;
  t[51] !== ee || t[52] !== y || t[53] !== b || t[54] !== S
    ? ((k = (0, $.jsxs)(`div`, { className: y, children: [b, S, ee] })),
      (t[51] = ee),
      (t[52] = y),
      (t[53] = b),
      (t[54] = S),
      (t[55] = k))
    : (k = t[55]);
  let A;
  t[56] !== l || t[57] !== g || t[58] !== m
    ? ((A =
        l &&
        (0, $.jsx)(`div`, {
          children: (0, $.jsx)(Vt, { tasksQuery: m, mergedTasks: g }),
        })),
      (t[56] = l),
      (t[57] = g),
      (t[58] = m),
      (t[59] = A))
    : (A = t[59]);
  let j;
  t[60] === A
    ? (j = t[61])
    : ((j = (0, $.jsx)(G, { extension: !0, children: A })),
      (t[60] = A),
      (t[61] = j));
  let M;
  return (
    t[62] !== k || t[63] !== j || t[64] !== _
      ? ((M = (0, $.jsxs)(`div`, { className: _, children: [k, j] })),
        (t[62] = k),
        (t[63] = j),
        (t[64] = _),
        (t[65] = M))
      : (M = t[65]),
    M
  );
}
function Xn() {
  window.dispatchEvent(new CustomEvent(`open-recent-tasks-menu`));
}
function Zn() {
  fe(`newTask`, `header_new_thread`);
}
function Qn(e) {
  let t = (0, er.c)(21),
    { mergedTasks: n, onBack: r, showBackButton: i } = e,
    a = ke().pathname === `/`,
    o = ze(`/local/:conversationId`)?.params?.conversationId ?? null,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = o == null ? null : D(o)), (t[0] = o), (t[1] = c));
  let l = c,
    u = ze(`/remote/:taskId`)?.params?.taskId ?? null,
    { data: d } = s(u),
    f = We(H, l),
    p = We(se, l);
  if (u && d?.task?.title) {
    let e;
    t[2] !== r || t[3] !== i
      ? ((e = i ? (0, $.jsx)($n, { onClick: r }) : null),
        (t[2] = r),
        (t[3] = i),
        (t[4] = e))
      : (e = t[4]);
    let n;
    t[5] === d.task.title
      ? (n = t[6])
      : ((n = (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: d.task.title,
        })),
        (t[5] = d.task.title),
        (t[6] = n));
    let a;
    return (
      t[7] !== e || t[8] !== n
        ? ((a = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, n],
          })),
          (t[7] = e),
          (t[8] = n),
          (t[9] = a))
        : (a = t[9]),
      a
    );
  }
  if (l && f) {
    let e;
    t[10] !== r || t[11] !== i
      ? ((e = i ? (0, $.jsx)($n, { onClick: r }) : null),
        (t[10] = r),
        (t[11] = i),
        (t[12] = e))
      : (e = t[12]);
    let n;
    t[13] === p
      ? (n = t[14])
      : ((n =
          p ||
          (0, $.jsx)(L, {
            id: `codex.taskRow.title`,
            defaultMessage: `New task`,
            description: `Default title for a Codex task that doesn't have a title`,
          })),
        (t[13] = p),
        (t[14] = n));
    let a;
    t[15] === n
      ? (a = t[16])
      : ((a = (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: n,
        })),
        (t[15] = n),
        (t[16] = a));
    let o;
    return (
      t[17] !== e || t[18] !== a
        ? ((o = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, a],
          })),
          (t[17] = e),
          (t[18] = a),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  if (a) {
    if (n.length === 0) return null;
    let e;
    return (
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(L, {
            id: `header.recentChats`,
            defaultMessage: `Tasks`,
            description: `Header label for recent tasks`,
          })),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  return null;
}
function $n(e) {
  let t = (0, er.c)(7),
    { onClick: n } = e,
    r = Ke(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(L, { ...tr.backButton })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = r.formatMessage(tr.backButton)), (t[1] = r), (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(Be, { className: `size-3` })), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== n || t[5] !== a
      ? ((s = (0, $.jsx)(G, {
          chromeExtension: !0,
          extension: !0,
          children: (0, $.jsx)(p, {
            tooltipContent: i,
            children: (0, $.jsx)(w, {
              color: `ghost`,
              size: `icon`,
              onClick: n,
              className: `opacity-70 hover:bg-transparent hover:opacity-100 focus:bg-transparent active:bg-transparent`,
              "aria-label": a,
              children: o,
            }),
          }),
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var er,
  $,
  tr,
  nr = e(() => {
    ((er = y()),
      Ne(),
      P(),
      i(),
      De(),
      b(),
      d(),
      ae(),
      f(),
      Fe(),
      T(),
      _e(),
      Te(),
      Oe(),
      re(),
      we(),
      $e(),
      Ft(),
      Bt(),
      Kt(),
      Jn(),
      jn(),
      ($ = ge()),
      (tr = je({
        backButton: {
          id: `header.back`,
          defaultMessage: `Back`,
          description: `Back button label for returning to the previous screen`,
        },
        newChatTitle: {
          id: `header.newChatTitle`,
          defaultMessage: `New task`,
          description: `Fallback title shown in the Chrome extension side panel header before a task exists`,
        },
      })));
  });
export { nr as n, Yn as t };
//# sourceMappingURL=header-D7x7WmX2.js.map
