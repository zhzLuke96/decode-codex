import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  BW as r,
  Bc as i,
  C as a,
  C0 as o,
  Cc as s,
  Cl as c,
  DK as l,
  Dd as u,
  Ds as d,
  Em as f,
  GJ as p,
  Hc as m,
  I2 as h,
  IK as g,
  JA as _,
  KJ as v,
  L2 as y,
  LK as b,
  Md as x,
  Mq as S,
  Nq as C,
  S0 as w,
  Sc as T,
  Tm as E,
  Ts as D,
  Tx as O,
  Uc as k,
  Vc as A,
  WJ as j,
  Wc as M,
  XX as N,
  Xc as P,
  YX as F,
  Yc as I,
  _0 as L,
  _E as R,
  _S as z,
  _Y as B,
  aG as V,
  aJ as H,
  bF as U,
  cY as W,
  cj as G,
  cp as K,
  dT as q,
  dd as ee,
  eK as te,
  fc as ne,
  g$ as re,
  gE as ie,
  gd as ae,
  id as oe,
  ii as se,
  jd as ce,
  js as le,
  k2 as ue,
  kK as de,
  kd as fe,
  lm as pe,
  lp as me,
  mY as he,
  nK as ge,
  oc as _e,
  pd as ve,
  qJ as ye,
  rG as be,
  ri as xe,
  sJ as Se,
  sY as Ce,
  uc as we,
  ud as Te,
  um as Ee,
  vS as De,
  w as Oe,
  wl as ke,
  wx as Ae,
  x0 as J,
  xF as je,
  yY as Me,
  zW as Ne,
  zZ as Pe,
  zc as Fe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dl as Ie,
  fl as Le,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  an as Re,
  bn as ze,
  in as Be,
  xn as Ve,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  B as He,
  H as Ue,
  T as We,
  U as Ge,
  V as Ke,
  X as qe,
  Y as Je,
  Z as Ye,
  cn as Xe,
  on as Ze,
  vt as Qe,
  w as $e,
  yt as et,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  A as tt,
  C as nt,
  G as rt,
  Gn as it,
  H as at,
  Ht as ot,
  Kn as st,
  O as ct,
  S as lt,
  T as ut,
  U as dt,
  Ut as ft,
  Vt as pt,
  W as mt,
  Xt as ht,
  Zt as gt,
  dr as _t,
  h as vt,
  i as yt,
  j as bt,
  k as xt,
  ln as St,
  m as Ct,
  r as wt,
  sr as Tt,
  un as Et,
  w as Dt,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  C as Ot,
  g as kt,
  h as At,
  w as jt,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  Xt as Mt,
  Yt as Nt,
  d as Pt,
  u as Ft,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as It,
  t as Lt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~hotkey-window-new-thread~ciugno9i-UhEwWeMr.js";
import {
  n as Rt,
  t as zt,
} from "./app-initial~app-main~projects-index-page~appgen-library-page~work-home-page~chatgpt-convers~n7kdxxbv-_36znuKl.js";
import {
  n as Bt,
  t as Vt,
} from "./use-searchable-page-title-visibility-DUGDE42k.js";
import { n as Ht, t as Ut } from "./thread-overflow-menu-DTub2LQu.js";
function Wt({
  cloudRows: e = [],
  groups: t,
  projectWritableRoots: n,
  query: r,
  sortDirection: i,
  sortKey: a,
  tasks: o,
}) {
  let s = new Map(o.map((e) => [e.key, e])),
    c = r.trim().toLocaleLowerCase();
  return [...t.map((e) => Gt(e, n, s)), ...e]
    .filter((e) =>
      c.length === 0
        ? !0
        : `${e.name} ${e.sourceSearchText}`.toLocaleLowerCase().includes(c),
    )
    .sort((e, t) => {
      let n = Kt(e, t, a);
      return i === `ascending` ? n : -n;
    });
}
function Gt(e, t, n) {
  let r = e.threadKeys.flatMap((e) => {
      let t = n.get(e);
      return t == null ? [] : [t.at];
    }),
    i = e.projectUpdatedAt == null ? r : [...r, e.projectUpdatedAt],
    a = Jt(
      F({
        projectId: e.projectId,
        projectWritableRoots: t,
        legacyRoot: e.path ?? null,
      }),
    );
  return {
    group: e,
    id: `codex:${e.projectId}`,
    kind: `codex`,
    modifiedAt: i.length === 0 ? null : Math.max(...i),
    name: e.label,
    projectId: e.projectId,
    recentThreadKeys: [...e.threadKeys].sort(
      (e, t) => (n.get(t)?.at ?? 0) - (n.get(e)?.at ?? 0),
    ),
    sourceCount: a.length,
    sources: a,
    sourceSearchText: a.map((e) => e.path ?? e.label).join(` `),
  };
}
function Kt(e, t, n) {
  switch (n) {
    case `modified`:
      return (e.modifiedAt ?? 0) - (t.modifiedAt ?? 0) || qt(e, t);
    case `name`:
      return qt(e, t);
    case `sources`:
      return (
        e.sourceCount - t.sourceCount ||
        (e.sources[0]?.label ?? ``).localeCompare(
          t.sources[0]?.label ?? ``,
          void 0,
          { sensitivity: `base` },
        ) ||
        qt(e, t)
      );
  }
}
function qt(e, t) {
  return (
    e.name.localeCompare(t.name, void 0, { sensitivity: `base` }) ||
    e.id.localeCompare(t.id)
  );
}
function Jt(e) {
  return e.map((e) => ({ kind: `folder`, label: te(e), path: e }));
}
var Yt = e(() => {
  (n(), ge());
});
function Xt(e) {
  let t = (0, en.c)(12),
    { hostId: n, hostLabel: r, isRemote: i, sources: a } = e;
  if (a.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`span`, {
            className: `text-token-description-foreground`,
            children: (0, Y.jsx)(B, {
              id: `projectsIndex.sources.empty`,
              defaultMessage: `No sources`,
              description: `Empty source label in the projects index`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  if (t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a) {
    let e;
    (t[6] !== n || t[7] !== r || t[8] !== i
      ? ((e = (e, t) =>
          (0, Y.jsx)(
            Zt,
            { hostId: n, hostLabel: r, isRemote: i, source: e },
            `${e.path ?? e.label}-${t}`,
          )),
        (t[6] = n),
        (t[7] = r),
        (t[8] = i),
        (t[9] = e))
      : (e = t[9]),
      (o = a.map(e)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  } else o = t[5];
  let s;
  return (
    t[10] === o
      ? (s = t[11])
      : ((s = (0, Y.jsx)(`div`, {
          className: `-ml-3 min-w-0 flex-1 overflow-visible`,
          children: (0, Y.jsx)(`div`, {
            className: `flex min-w-0 gap-1.5 overflow-x-auto [mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] py-0.5 pr-5 pl-3 [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
            children: o,
          }),
        })),
        (t[10] = o),
        (t[11] = s)),
    s
  );
}
function Zt(e) {
  let t = (0, en.c)(28),
    { hostId: n, hostLabel: r, isRemote: i, source: a } = e,
    o = Se(`open-file`),
    s = Me(),
    c = a.path,
    u;
  t[0] !== r || t[1] !== i || t[2] !== a.label || t[3] !== c
    ? ((u =
        i && c != null
          ? `${r ?? ``}${r == null ? `` : `: `}${c}`
          : c == null
            ? a.label
            : Ct(c)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a.label),
      (t[3] = c),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f = c != null && !i,
    p;
  if (i && n != null) {
    let e;
    (t[5] === n
      ? (e = t[6])
      : ((e = (0, Y.jsx)($e, {
          className: `icon-xs shrink-0`,
          disableTooltip: !0,
          envType: `remote`,
          hostId: n,
        })),
        (t[5] = n),
        (t[6] = e)),
      (p = e));
  } else if (a.kind === `file`) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(E, {
          className: `icon-xs shrink-0 text-token-description-foreground`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (p = e));
  } else {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(ze, {
          className: `icon-xs group-hover/source-pill:opacity-0 group-focus-visible/source-pill:opacity-0`,
        })),
        (t[8] = e))
      : (e = t[8]);
    let n;
    t[9] === f
      ? (n = t[10])
      : ((n = f
          ? (0, Y.jsx)(Ie, {
              className: `icon-2xs absolute opacity-0 group-hover/source-pill:opacity-100 group-focus-visible/source-pill:opacity-100`,
              "aria-hidden": !0,
            })
          : null),
        (t[9] = f),
        (t[10] = n));
    let r;
    (t[11] === n
      ? (r = t[12])
      : ((r = (0, Y.jsxs)(`span`, {
          className: `relative flex h-4 w-4 shrink-0 items-center justify-center text-token-description-foreground`,
          children: [e, n],
        })),
        (t[11] = n),
        (t[12] = r)),
      (p = r));
  }
  let m;
  t[13] === a.label
    ? (m = t[14])
    : ((m = (0, Y.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: a.label,
      })),
      (t[13] = a.label),
      (t[14] = m));
  let h;
  t[15] !== p || t[16] !== m
    ? ((h = (0, Y.jsxs)(Y.Fragment, { children: [p, m] })),
      (t[15] = p),
      (t[16] = m),
      (t[17] = h))
    : (h = t[17]);
  let g = h,
    _;
  t[18] !== s ||
  t[19] !== f ||
  t[20] !== o ||
  t[21] !== a.label ||
  t[22] !== g ||
  t[23] !== c
    ? ((_ = f
        ? (0, Y.jsx)(`button`, {
            type: `button`,
            className: `group/source-pill inline-flex max-w-56 shrink-0 cursor-interaction items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary hover:border-token-border-heavy focus-visible:border-token-focus-border focus-visible:outline-none`,
            "aria-label": s.formatMessage(
              {
                id: `projectsIndex.sources.openSource`,
                defaultMessage: `Reveal {source}`,
                description: `Accessible label for revealing a project source folder in the system file manager`,
              },
              { source: a.label },
            ),
            onClick: () => {
              O({
                path: c,
                cwd: Pe(c),
                target: `fileManager`,
                openFile: o.mutate,
              });
            },
            children: g,
          })
        : (0, Y.jsx)(`div`, {
            className: `flex max-w-56 shrink-0 items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary`,
            children: g,
          })),
      (t[18] = s),
      (t[19] = f),
      (t[20] = o),
      (t[21] = a.label),
      (t[22] = g),
      (t[23] = c),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  return (
    t[25] !== d || t[26] !== _
      ? ((v = (0, Y.jsx)(l, { tooltipContent: d, children: _ })),
        (t[25] = d),
        (t[26] = _),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function Qt(e) {
  let t = (0, en.c)(5),
    { modifiedAt: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(B, {
            id: `projectsIndex.modified.never`,
            defaultMessage: `-`,
            description: `Projects index modified value when there are no tasks`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r;
  t[1] === n
    ? (r = t[2])
    : ((r = new Date($t(n)).toISOString()), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] === r
      ? (i = t[4])
      : ((i = (0, Y.jsx)(Ze, { dateString: r })), (t[3] = r), (t[4] = i)),
    i
  );
}
function $t(e) {
  return e < 0xe8d4a51000 ? e * 1e3 : e;
}
var en,
  Y,
  tn,
  nn,
  rn,
  an,
  on,
  X,
  sn = e(() => {
    ((en = h()),
      n(),
      he(),
      Xe(),
      de(),
      Ae(),
      We(),
      Le(),
      f(),
      Ve(),
      vt(),
      H(),
      (Y = ue()),
      (tn = `grid grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)_4rem_8rem] gap-x-4 max-[920px]:grid-cols-[minmax(0,1fr)_4rem_8rem] max-[680px]:grid-cols-[minmax(0,1fr)_8rem]`),
      (nn = `relative before:pointer-events-none before:absolute before:-inset-x-3 before:rounded-lg before:bg-token-list-hover-background before:opacity-0 hover:before:opacity-100`),
      (rn = `after:pointer-events-none after:absolute after:-top-px after:-inset-x-3 after:h-px after:bg-token-main-surface-primary after:opacity-0 hover:after:opacity-100`),
      (an = `border-b border-token-border [&:has(+_[data-project-row-wrapper]:has(>_[data-project-row]:hover))]:border-b-transparent`),
      (on = `relative z-10`),
      (X = `h-8 w-8 shrink-0 rounded-lg !p-1 text-token-text-secondary hover:text-token-foreground focus-visible:text-token-foreground data-[state=open]:text-token-foreground`));
  });
function cn(e) {
  return (
    e instanceof Element &&
    e.closest(`button,a,input,textarea,select,[role='button']`) != null
  );
}
var ln = e(() => {}),
  un,
  dn,
  fn = e(() => {
    (t(y()),
      (un = ue()),
      (dn = (e) =>
        (0, un.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, un.jsx)(`path`, {
              d: `M12.667 9.4743C12.9567 9.47444 13.1922 9.70997 13.1924 9.99969V11.4743H14.667C14.9567 11.4744 15.1922 11.71 15.1924 11.9997C15.1924 12.2896 14.9568 12.525 14.667 12.5251H13.1924V13.9997C13.1924 14.2896 12.9568 14.525 12.667 14.5251C12.377 14.5251 12.1416 14.2896 12.1416 13.9997V12.5251H10.667C10.377 12.5251 10.1416 12.2896 10.1416 11.9997C10.1418 11.7099 10.3771 11.4743 10.667 11.4743H12.1416V9.99969C12.1418 9.70989 12.3771 9.4743 12.667 9.4743Z`,
              fill: `currentColor`,
            }),
            (0, un.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M5.36914 2.1413C5.92368 2.14134 6.3602 2.23675 6.73242 2.38934C7.0975 2.53904 7.38153 2.73785 7.61816 2.90399C8.07606 3.22547 8.4207 3.47434 9.16602 3.4743H11.9473C13.3336 3.47453 14.4453 4.61186 14.4453 5.99969V7.06512C14.4452 7.48137 14.1212 7.85614 13.6562 7.85614H2.60547V11.3307C2.60547 12.1518 3.26027 12.8051 4.05371 12.8054H7.67578C7.96573 12.8054 8.20117 13.0408 8.20117 13.3307C8.20117 13.6207 7.96573 13.8561 7.67578 13.8561H4.05371C2.66737 13.8559 1.55566 12.7186 1.55566 11.3307V7.35028C1.55545 7.34411 1.55371 7.33795 1.55371 7.33173C1.55371 7.32523 1.55543 7.31864 1.55566 7.31219V4.66669C1.55566 3.27887 2.66737 2.14155 4.05371 2.1413H5.36914ZM4.05371 3.19208C3.26027 3.19233 2.60547 3.84568 2.60547 4.66669V6.80634H13.3955V5.99969C13.3955 5.17867 12.7407 4.52531 11.9473 4.52509H9.16699C8.07964 4.52528 7.50698 4.10834 7.01562 3.76337C6.77762 3.59627 6.57854 3.46129 6.33398 3.36102C6.09656 3.26369 5.79646 3.19212 5.36914 3.19208H4.05371Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function pn() {
  let e = (0, Z.c)(72),
    t = Me(),
    n = o(ve),
    { data: r } = De(re.PROJECT_WRITABLE_ROOTS),
    i;
  e[0] === n
    ? (i = e[1])
    : ((i = { enabled: !0, threadKeys: n }), (e[0] = n), (e[1] = i));
  let {
      groups: a,
      hasLoadedWorkspaceRootOptions: c,
      isWorkspaceRootOptionsLoading: l,
    } = J(s, i),
    [u, d] = (0, Q.useState)(``),
    [f, p] = (0, Q.useState)(`modified`),
    [m, h] = (0, Q.useState)(`descending`),
    { scrollContainerRef: g, showTitleInToolbar: _, titleRef: y } = Bt(),
    [b, x] = (0, Q.useState)(gn),
    [S, C] = (0, Q.useState)(hn),
    w;
  e[2] === a ? (w = e[3]) : ((w = a.flatMap(mn)), (e[2] = a), (e[3] = w));
  let T = J(ae, w),
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    P,
    F,
    I,
    L,
    R,
    z;
  if (
    e[4] !== b ||
    e[5] !== c ||
    e[6] !== t ||
    e[7] !== l ||
    e[8] !== r ||
    e[9] !== u ||
    e[10] !== g ||
    e[11] !== S ||
    e[12] !== _ ||
    e[13] !== m ||
    e[14] !== f ||
    e[15] !== T ||
    e[16] !== y ||
    e[17] !== a
  ) {
    let n = Wt({
        cloudRows: void 0,
        groups: a,
        projectWritableRoots: N(r),
        query: u,
        sortDirection: m,
        sortKey: f,
        tasks: T,
      }),
      i = c && !l && a.length === 0,
      o;
    e[31] === t
      ? (o = e[32])
      : ((o = t.formatMessage({
          id: `projectsIndex.search.placeholder`,
          defaultMessage: `Search projects`,
          description: `Accessible label and placeholder for projects index search`,
        })),
        (e[31] = t),
        (e[32] = o));
    let s = o,
      w;
    e[33] === _
      ? (w = e[34])
      : ((w = _
          ? (0, $.jsx)(B, {
              id: `projectsIndex.title`,
              defaultMessage: `Projects`,
              description: `Title for the projects index page`,
            })
          : null),
        (e[33] = _),
        (e[34] = w));
    let V;
    e[35] === i
      ? (V = e[36])
      : ((V = i ? null : (0, $.jsx)(_n, { compact: !0 })),
        (e[35] = i),
        (e[36] = V));
    let H;
    e[37] !== w || e[38] !== V
      ? ((H = (0, $.jsx)(zt, { start: w, trailing: V })),
        (e[37] = w),
        (e[38] = V),
        (e[39] = H))
      : (H = e[39]);
    let U = H,
      W;
    e[40] !== m || e[41] !== f
      ? ((W = (e) => {
          if (f !== e) {
            (p(e), h(jn[e]));
            return;
          }
          h(m === `ascending` ? `descending` : `ascending`);
        }),
        (e[40] = m),
        (e[41] = f),
        (e[42] = W))
      : (W = e[42]);
    let G = W,
      q;
    e[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((q = (e) => {
          x((t) => {
            let n = new Set(t);
            return (n.has(e) ? n.delete(e) : n.add(e), n);
          });
        }),
        (e[43] = q))
      : (q = e[43]);
    let ee = q,
      te;
    e[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((te = (e, t) => {
          C((n) => {
            let r = new Set(n);
            return (t ? r.add(e) : r.delete(e), r);
          });
        }),
        (e[44] = te))
      : (te = e[44]);
    let ne = te;
    ((O = `flex h-full min-h-0 flex-col bg-token-main-surface-primary text-token-foreground`),
      e[45] === U
        ? (k = e[46])
        : ((k = (0, $.jsx)(K, { extension: !0, children: U })),
          (e[45] = U),
          (e[46] = k)),
      e[47] === U
        ? (A = e[48])
        : ((A = (0, $.jsx)(K, {
            browser: !0,
            chromeExtension: !0,
            electron: !0,
            children: (0, $.jsx)(Ot.Header, { children: U }),
          })),
          (e[47] = U),
          (e[48] = A)),
      (E = At),
      (j = `!pt-7`),
      (M = `inset`),
      (P = `md:electron:px-toolbar md:extension:px-20`),
      (F = g),
      e[49] !== u || e[50] !== s || e[51] !== i
        ? ((I = i
            ? void 0
            : {
                id: `projects-index-search`,
                label: s,
                onSearchQueryChange: d,
                placeholder: s,
                searchQuery: u,
              }),
          (e[49] = u),
          (e[50] = s),
          (e[51] = i),
          (e[52] = I))
        : (I = e[52]),
      e[53] === i
        ? (L = e[54])
        : ((L = i
            ? (0, $.jsx)(B, {
                id: `projectsIndex.empty.subtitle`,
                defaultMessage: `Create a project to organize tasks and give ChatGPT access to folders on your computer`,
                description: `Subtitle explaining the purpose of projects when the projects index is empty`,
              })
            : void 0),
          (e[53] = i),
          (e[54] = L)),
      e[55] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((R = (0, $.jsx)(B, {
            id: `projectsIndex.title`,
            defaultMessage: `Projects`,
            description: `Title for the projects index page`,
          })),
          (e[55] = R))
        : (R = e[55]),
      (z = y),
      (D = i
        ? (0, $.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center`,
            children: (0, $.jsx)(_n, {}),
          })
        : (0, $.jsxs)(`div`, {
            className: `-mx-5 min-h-0 overflow-visible px-5`,
            children: [
              (0, $.jsxs)(`div`, {
                "data-projects-header": !0,
                className: v(tn, An),
                children: [
                  (0, $.jsx)(vn, {
                    active: f === `name`,
                    direction: m,
                    onClick: () => G(`name`),
                    children: (0, $.jsx)(B, {
                      id: `projectsIndex.column.name`,
                      defaultMessage: `Name`,
                      description: `Projects index name column header`,
                    }),
                  }),
                  (0, $.jsx)(vn, {
                    active: f === `sources`,
                    className: `max-[920px]:hidden`,
                    direction: m,
                    onClick: () => G(`sources`),
                    children: (0, $.jsx)(B, {
                      id: `projectsIndex.column.sources`,
                      defaultMessage: `Sources`,
                      description: `Projects index sources column header`,
                    }),
                  }),
                  (0, $.jsx)(vn, {
                    active: f === `modified`,
                    className: `max-[680px]:hidden`,
                    direction: m,
                    onClick: () => G(`modified`),
                    children: (0, $.jsx)(B, {
                      id: `projectsIndex.column.modified`,
                      defaultMessage: `Updated`,
                      description: `Projects index modified column header`,
                    }),
                  }),
                  (0, $.jsx)(`span`, {}),
                ],
              }),
              (0, $.jsx)(`div`, {
                "data-projects-rows": !0,
                className: `min-w-0`,
                children:
                  n.length === 0
                    ? (0, $.jsx)(`div`, {
                        className: `px-0 py-10 text-center text-sm text-token-description-foreground`,
                        children: (0, $.jsx)(B, {
                          id: `projectsIndex.empty`,
                          defaultMessage: `No projects`,
                          description: `Empty state for projects index`,
                        }),
                      })
                    : n.map((e) => {
                        let t = b.has(e.id);
                        return e.kind === `cloud`
                          ? null
                          : (0, $.jsx)(
                              yn,
                              {
                                expanded: t,
                                onShowAllChange: (t) => ne(e.projectId, t),
                                onToggleExpanded: () => ee(e.id),
                                row: e,
                                showAll: S.has(e.projectId),
                              },
                              e.id,
                            );
                      }),
              }),
            ],
          })),
      (e[4] = b),
      (e[5] = c),
      (e[6] = t),
      (e[7] = l),
      (e[8] = r),
      (e[9] = u),
      (e[10] = g),
      (e[11] = S),
      (e[12] = _),
      (e[13] = m),
      (e[14] = f),
      (e[15] = T),
      (e[16] = y),
      (e[17] = a),
      (e[18] = E),
      (e[19] = D),
      (e[20] = O),
      (e[21] = k),
      (e[22] = A),
      (e[23] = j),
      (e[24] = M),
      (e[25] = P),
      (e[26] = F),
      (e[27] = I),
      (e[28] = L),
      (e[29] = R),
      (e[30] = z));
  } else
    ((E = e[18]),
      (D = e[19]),
      (O = e[20]),
      (k = e[21]),
      (A = e[22]),
      (j = e[23]),
      (M = e[24]),
      (P = e[25]),
      (F = e[26]),
      (I = e[27]),
      (L = e[28]),
      (R = e[29]),
      (z = e[30]));
  let V;
  e[56] !== E ||
  e[57] !== D ||
  e[58] !== j ||
  e[59] !== M ||
  e[60] !== P ||
  e[61] !== F ||
  e[62] !== I ||
  e[63] !== L ||
  e[64] !== R ||
  e[65] !== z
    ? ((V = (0, $.jsx)(E, {
        contentClassName: j,
        headerVariant: M,
        horizontalPaddingClassName: P,
        scrollContainerRef: F,
        search: I,
        subtitle: L,
        title: R,
        titleRef: z,
        children: D,
      })),
      (e[56] = E),
      (e[57] = D),
      (e[58] = j),
      (e[59] = M),
      (e[60] = P),
      (e[61] = F),
      (e[62] = I),
      (e[63] = L),
      (e[64] = R),
      (e[65] = z),
      (e[66] = V))
    : (V = e[66]);
  let H;
  return (
    e[67] !== O || e[68] !== k || e[69] !== A || e[70] !== V
      ? ((H = (0, $.jsxs)(`div`, { className: O, children: [k, A, V] })),
        (e[67] = O),
        (e[68] = k),
        (e[69] = A),
        (e[70] = V),
        (e[71] = H))
      : (H = e[71]),
    H
  );
}
function mn(e) {
  return e.threadKeys;
}
function hn() {
  return new Set();
}
function gn() {
  return new Set();
}
function _n(e) {
  let t = (0, Z.c)(2),
    { compact: n } = e,
    r = n === void 0 ? !1 : n,
    i;
  return (
    t[0] === r
      ? (i = t[1])
      : ((i = (0, $.jsx)(wt, {
          chatGptProjectCrudStatus: void 0,
          customTriggerButton: (0, $.jsx)(S, {
            color: `outline`,
            size: `toolbar`,
            children: r
              ? (0, $.jsx)(B, {
                  id: `projectsIndex.newProject`,
                  defaultMessage: `New`,
                  description: `Button label to create a new project from the projects index`,
                })
              : (0, $.jsx)(B, {
                  id: `projectsIndex.empty.newProject`,
                  defaultMessage: `New project`,
                  description: `Empty state button label to create a new project from the projects index`,
                }),
          }),
          mode: `project`,
          sidebarMode: `codex`,
          showOrganizeControl: !1,
        })),
        (t[0] = r),
        (t[1] = i)),
    i
  );
}
function vn(e) {
  let t = (0, Z.c)(13),
    { active: n, children: r, className: i, direction: a, onClick: o } = e,
    s = n && `text-token-foreground`,
    c;
  t[0] !== i || t[1] !== s
    ? ((c = v(
        `cursor-interaction flex w-max min-w-0 items-center gap-1 text-left text-xs leading-[18px] text-token-text-tertiary hover:text-token-foreground`,
        s,
        i,
      )),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === r
    ? (l = t[4])
    : ((l = (0, $.jsx)(`span`, { className: `truncate`, children: r })),
      (t[3] = r),
      (t[4] = l));
  let u;
  t[5] !== n || t[6] !== a
    ? ((u = n
        ? (0, $.jsx)(j, {
            "aria-hidden": `true`,
            className: v(
              `icon-2xs shrink-0 transition-transform`,
              a === `ascending` && `rotate-180`,
            ),
          })
        : null),
      (t[5] = n),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== c || t[10] !== l || t[11] !== u
      ? ((d = (0, $.jsxs)(`button`, {
          type: `button`,
          className: c,
          onClick: o,
          children: [l, u],
        })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function yn(e) {
  let t = (0, Z.c)(116),
    {
      expanded: n,
      onShowAllChange: r,
      onToggleExpanded: i,
      row: a,
      showAll: o,
    } = e,
    s = w(Ce),
    l = Me(),
    u = st(),
    d = V(c),
    { data: f } = De(re.PINNED_PROJECT_IDS),
    { data: p } = De(re.PROJECT_WRITABLE_ROOTS),
    m;
  t[0] !== f || t[1] !== a.group.projectId
    ? ((m = f?.includes(a.group.projectId)),
      (t[0] = f),
      (t[1] = a.group.projectId),
      (t[2] = m))
    : (m = t[2]);
  let h = m === !0,
    g;
  t[3] !== p || t[4] !== a.group.path || t[5] !== a.group.projectId
    ? ((g = F({
        projectId: a.group.projectId,
        projectWritableRoots: N(p),
        legacyRoot: a.group.path ?? null,
      })),
      (t[3] = p),
      (t[4] = a.group.path),
      (t[5] = a.group.projectId),
      (t[6] = g))
    : (g = t[6]);
  let _ = g,
    y =
      a.group.projectKind === `local` &&
      (!a.group.isLegacyLocalSingleFolderProject || a.group.path != null) &&
      d,
    b;
  t[7] === i
    ? (b = t[8])
    : ((b = (e) => {
        e.defaultPrevented || e.detail > 1 || cn(e.target) || i();
      }),
      (t[7] = i),
      (t[8] = b));
  let x = b,
    C;
  t[9] !== a.group || t[10] !== u
    ? ((C = (e) => {
        e.defaultPrevented || cn(e.target) || u(a.group);
      }),
      (t[9] = a.group),
      (t[10] = u),
      (t[11] = C))
    : (C = t[11]);
  let T = C,
    E = !n && `[&:has(>_[data-project-row]:hover)]:border-b-transparent`,
    D;
  t[12] === E ? (D = t[13]) : ((D = v(an, E)), (t[12] = E), (t[13] = D));
  let O;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = v(
        tn,
        nn,
        rn,
        `before:inset-y-0`,
        `group/project-row cursor-interaction min-h-[70px] items-center px-0 py-2 text-base`,
      )),
      (t[14] = O))
    : (O = t[14]);
  let k;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = v(on, `flex min-w-0 items-center gap-3`)), (t[15] = k))
    : (k = t[15]);
  let A;
  t[16] !== n || t[17] !== a.group.projectKind
    ? ((A =
        a.group.projectKind === `remote`
          ? (0, $.jsx)(Be, { className: `icon-xs shrink-0` })
          : n
            ? (0, $.jsx)(St, { className: `icon-xs shrink-0` })
            : (0, $.jsx)(ze, { className: `icon-xs shrink-0` })),
      (t[16] = n),
      (t[17] = a.group.projectKind),
      (t[18] = A))
    : (A = t[18]);
  let M;
  t[19] !== a.group.projectId || t[20] !== a.name || t[21] !== A
    ? ((M = (0, $.jsx)(I, {
        projectId: a.group.projectId,
        projectName: a.name,
        buttonClassName: `!h-7 !w-7 !p-1 text-token-description-foreground [&>svg]:!h-4 [&>svg]:!w-4`,
        fallbackIcon: A,
        markerClassName: `h-4 w-4`,
      })),
      (t[19] = a.group.projectId),
      (t[20] = a.name),
      (t[21] = A),
      (t[22] = M))
    : (M = t[22]);
  let P;
  t[23] === a.name
    ? (P = t[24])
    : ((P = (0, $.jsx)(`span`, {
        className: `block min-w-0 truncate text-token-foreground`,
        children: a.name,
      })),
      (t[23] = a.name),
      (t[24] = P));
  let L;
  t[25] !== a.group.hostId || t[26] !== a.group.projectKind
    ? ((L =
        a.group.projectKind === `remote` && a.group.hostId != null
          ? (0, $.jsx)(bn, { hostId: a.group.hostId })
          : null),
      (t[25] = a.group.hostId),
      (t[26] = a.group.projectKind),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] === l
    ? (R = t[29])
    : ((R = l.formatMessage({
        id: `projectsIndex.toggleProject`,
        defaultMessage: `Toggle project`,
        description: `Accessible label for expanding or collapsing a project row`,
      })),
      (t[28] = l),
      (t[29] = R));
  let z;
  t[30] === i
    ? (z = t[31])
    : ((z = (e) => {
        (e.stopPropagation(), i());
      }),
      (t[30] = i),
      (t[31] = z));
  let H = n ? `rotate-0 opacity-100` : `-rotate-90`,
    U;
  t[32] === H
    ? (U = t[33])
    : ((U = v(
        `icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100`,
        H,
      )),
      (t[32] = H),
      (t[33] = U));
  let W;
  t[34] === U
    ? (W = t[35])
    : ((W = (0, $.jsx)(j, { "aria-hidden": `true`, className: U })),
      (t[34] = U),
      (t[35] = W));
  let G;
  t[36] !== n || t[37] !== R || t[38] !== z || t[39] !== W
    ? ((G = (0, $.jsx)(`button`, {
        type: `button`,
        className: `group/project-toggle cursor-interaction rounded-sm`,
        "aria-label": R,
        "aria-expanded": n,
        onClick: z,
        children: W,
      })),
      (t[36] = n),
      (t[37] = R),
      (t[38] = z),
      (t[39] = W),
      (t[40] = G))
    : (G = t[40]);
  let K;
  t[41] !== P || t[42] !== L || t[43] !== G
    ? ((K = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [P, L, G],
      })),
      (t[41] = P),
      (t[42] = L),
      (t[43] = G),
      (t[44] = K))
    : (K = t[44]);
  let q;
  t[45] !== M || t[46] !== K
    ? ((q = (0, $.jsxs)(`div`, { className: k, children: [M, K] })),
      (t[45] = M),
      (t[46] = K),
      (t[47] = q))
    : (q = t[47]);
  let ee;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = v(
        on,
        `flex min-w-0 items-center gap-2 text-token-text-secondary max-[920px]:hidden`,
      )),
      (t[48] = ee))
    : (ee = t[48]);
  let te = a.group.projectKind === `remote` ? a.group.hostId : null,
    ne =
      a.group.projectKind === `remote`
        ? (a.group.hostDisplayName ?? a.group.hostId ?? null)
        : null,
    ie = a.group.projectKind === `remote`,
    ae;
  t[49] !== a.sources || t[50] !== te || t[51] !== ne || t[52] !== ie
    ? ((ae = (0, $.jsx)(Xt, {
        hostId: te,
        hostLabel: ne,
        isRemote: ie,
        sources: a.sources,
      })),
      (t[49] = a.sources),
      (t[50] = te),
      (t[51] = ne),
      (t[52] = ie),
      (t[53] = ae))
    : (ae = t[53]);
  let oe;
  t[54] !== y ||
  t[55] !== _ ||
  t[56] !== l ||
  t[57] !== a.group ||
  t[58] !== a.name ||
  t[59] !== s
    ? ((oe = y
        ? (0, $.jsx)(S, {
            "aria-label": l.formatMessage({
              id: `projectsIndex.sources.addSource`,
              defaultMessage: `Add source`,
              description: `Button label to add a source folder to a project from the projects index`,
            }),
            className: v(
              X,
              `opacity-0 group-hover/project-row:opacity-100 focus-visible:opacity-100`,
            ),
            color: `ghostMuted`,
            size: `icon`,
            onClick: () => {
              we(s, {
                initialName: a.name,
                initialSources: _,
                project: kn(a.group),
                showDeleteAction: !0,
              });
            },
            children: (0, $.jsx)(dn, { className: `icon-xs` }),
          })
        : null),
      (t[54] = y),
      (t[55] = _),
      (t[56] = l),
      (t[57] = a.group),
      (t[58] = a.name),
      (t[59] = s),
      (t[60] = oe))
    : (oe = t[60]);
  let se;
  t[61] !== ae || t[62] !== oe
    ? ((se = (0, $.jsxs)(`span`, { className: ee, children: [ae, oe] })),
      (t[61] = ae),
      (t[62] = oe),
      (t[63] = se))
    : (se = t[63]);
  let ce;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = v(on, `text-token-text-secondary max-[680px]:hidden`)),
      (t[64] = ce))
    : (ce = t[64]);
  let le;
  t[65] === a.modifiedAt
    ? (le = t[66])
    : ((le = (0, $.jsx)(`span`, {
        className: ce,
        children: (0, $.jsx)(Qt, { modifiedAt: a.modifiedAt }),
      })),
      (t[65] = a.modifiedAt),
      (t[66] = le));
  let ue;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = v(on, `flex min-w-0 justify-end gap-1`)), (t[67] = ue))
    : (ue = t[67]);
  let de;
  t[68] !== y || t[69] !== _ || t[70] !== a
    ? ((de = (0, $.jsx)(En, {
        canEditMetadataProject: y,
        initialSources: _,
        row: a,
      })),
      (t[68] = y),
      (t[69] = _),
      (t[70] = a),
      (t[71] = de))
    : (de = t[71]);
  let fe;
  t[72] !== l || t[73] !== h
    ? ((fe = h
        ? l.formatMessage({
            id: `projectsIndex.unpinProject`,
            defaultMessage: `Unpin project`,
            description: `Button label to unpin a project from the projects index`,
          })
        : l.formatMessage({
            id: `projectsIndex.pinProject`,
            defaultMessage: `Pin project`,
            description: `Button label to pin a project from the projects index`,
          })),
      (t[72] = l),
      (t[73] = h),
      (t[74] = fe))
    : (fe = t[74]);
  let pe;
  t[75] !== f || t[76] !== a.group.projectId || t[77] !== s
    ? ((pe = () => {
        je(s, re.PINNED_PROJECT_IDS, On(f, a.group.projectId));
      }),
      (t[75] = f),
      (t[76] = a.group.projectId),
      (t[77] = s),
      (t[78] = pe))
    : (pe = t[78]);
  let me;
  t[79] === h
    ? (me = t[80])
    : ((me = h
        ? (0, $.jsx)(ht, { className: `icon-xs` })
        : (0, $.jsx)(Ft, { className: `icon-xs` })),
      (t[79] = h),
      (t[80] = me));
  let he;
  t[81] !== fe || t[82] !== pe || t[83] !== me
    ? ((he = (0, $.jsx)(S, {
        "aria-label": fe,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: pe,
        children: me,
      })),
      (t[81] = fe),
      (t[82] = pe),
      (t[83] = me),
      (t[84] = he))
    : (he = t[84]);
  let ge;
  t[85] === l
    ? (ge = t[86])
    : ((ge = l.formatMessage({
        id: `projectsIndex.startProjectChat`,
        defaultMessage: `Start new task in project`,
        description: `Button label to start a new task from the projects index`,
      })),
      (t[85] = l),
      (t[86] = ge));
  let _e;
  t[87] !== a.group || t[88] !== u
    ? ((_e = () => u(a.group)), (t[87] = a.group), (t[88] = u), (t[89] = _e))
    : (_e = t[89]);
  let ve;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(Lt, { className: `icon-xs` })), (t[90] = ve))
    : (ve = t[90]);
  let ye;
  t[91] !== ge || t[92] !== _e
    ? ((ye = (0, $.jsx)(S, {
        "aria-label": ge,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: _e,
        children: ve,
      })),
      (t[91] = ge),
      (t[92] = _e),
      (t[93] = ye))
    : (ye = t[93]);
  let be;
  t[94] !== de || t[95] !== he || t[96] !== ye
    ? ((be = (0, $.jsxs)(`span`, { className: ue, children: [de, he, ye] })),
      (t[94] = de),
      (t[95] = he),
      (t[96] = ye),
      (t[97] = be))
    : (be = t[97]);
  let xe;
  t[98] !== x ||
  t[99] !== T ||
  t[100] !== q ||
  t[101] !== se ||
  t[102] !== le ||
  t[103] !== be
    ? ((xe = (0, $.jsxs)(`div`, {
        "data-project-row": !0,
        className: O,
        onClick: x,
        onDoubleClick: T,
        children: [q, se, le, be],
      })),
      (t[98] = x),
      (t[99] = T),
      (t[100] = q),
      (t[101] = se),
      (t[102] = le),
      (t[103] = be),
      (t[104] = xe))
    : (xe = t[104]);
  let Se;
  t[105] !== n ||
  t[106] !== l ||
  t[107] !== r ||
  t[108] !== a.name ||
  t[109] !== a.recentThreadKeys ||
  t[110] !== o
    ? ((Se = n
        ? (0, $.jsx)(`div`, {
            className: `pb-3`,
            children: (0, $.jsx)(Dt, {
              ariaLabel: l.formatMessage(
                {
                  id: `projectsIndex.recentChats.ariaLabel`,
                  defaultMessage: `Recent tasks in {projectName}`,
                  description: `Accessible label for expanded project recent tasks`,
                },
                { projectName: a.name },
              ),
              emptyState: (0, $.jsx)(B, {
                id: `projectsIndex.recentChats.empty`,
                defaultMessage: `No tasks`,
                description: `Empty state for an expanded project in the projects index`,
              }),
              emptyStateClassName: `px-2 py-1 text-base text-token-text-secondary`,
              expanded: o,
              itemWrapper: xn,
              maxItems: 10,
              onExpandedChange: r,
              variant: `tableRow`,
              rowOptions: {
                canPin: !1,
                hideRemoteHostEnvIcon: !0,
                hideTimestamp: !0,
                variant: `tableRow`,
              },
              threadKeys: a.recentThreadKeys,
            }),
          })
        : null),
      (t[105] = n),
      (t[106] = l),
      (t[107] = r),
      (t[108] = a.name),
      (t[109] = a.recentThreadKeys),
      (t[110] = o),
      (t[111] = Se))
    : (Se = t[111]);
  let Te;
  return (
    t[112] !== xe || t[113] !== Se || t[114] !== D
      ? ((Te = (0, $.jsxs)(`div`, {
          "data-project-row-wrapper": !0,
          className: D,
          children: [xe, Se],
        })),
        (t[112] = xe),
        (t[113] = Se),
        (t[114] = D),
        (t[115] = Te))
      : (Te = t[115]),
    Te
  );
}
function bn(e) {
  let t = (0, Z.c)(2),
    { hostId: n } = e,
    { state: r } = rt(n);
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(lt, { hostId: n })), (t[0] = n), (t[1] = i)),
    i
  );
}
function xn(e) {
  let t = (0, Z.c)(54),
    { children: n, className: r, threadKey: i } = e,
    a = w(Ce),
    o = Me(),
    s = G(),
    c = se(),
    l = J(ee, i),
    u = l?.kind === `local` ? l.conversationId : null,
    d = J(R, u),
    f = J(_t, i),
    p =
      l?.kind === `local`
        ? l.conversationId
        : l?.kind === `remote`
          ? l.task.id
          : null,
    m = p != null,
    h =
      l?.kind === `local`
        ? (d ?? l.summary?.updatedAt ?? null)
        : l?.kind === `remote`
          ? (l.task.updated_at ?? l.task.created_at ?? null)
          : null,
    _;
  t[0] !== s || t[1] !== c || t[2] !== a || t[3] !== i
    ? ((_ = () => {
        (Je(a, i), Ye(a, i, c, s));
      }),
      (t[0] = s),
      (t[1] = c),
      (t[2] = a),
      (t[3] = i),
      (t[4] = _))
    : (_ = t[4]);
  let y = _,
    b;
  t[5] === y
    ? (b = t[6])
    : ((b = (e) => {
        e.defaultPrevented || e.detail > 1 || cn(e.target) || y();
      }),
      (t[5] = y),
      (t[6] = b));
  let x = b,
    C;
  t[7] !== p || t[8] !== a
    ? ((C = (e) => {
        p != null && et(a, p, e);
      }),
      (t[7] = p),
      (t[8] = a),
      (t[9] = C))
    : (C = t[9]);
  let T = C,
    E;
  t[10] !== o || t[11] !== f
    ? ((E = o.formatMessage(f ? ft : ot)),
      (t[10] = o),
      (t[11] = f),
      (t[12] = E))
    : (E = t[12]);
  let D = E,
    O;
  t[13] === r
    ? (O = t[14])
    : ((O = v(
        tn,
        nn,
        `before:inset-y-0`,
        `group/thread-row cursor-interaction h-9 items-center text-base leading-9`,
        r,
      )),
      (t[13] = r),
      (t[14] = O));
  let k;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = v(
        on,
        `col-span-2 flex min-w-0 items-center gap-3 max-[920px]:col-span-1`,
      )),
      (t[15] = k))
    : (k = t[15]);
  let A = l ?? null,
    j;
  t[16] !== u || t[17] !== A
    ? ((j = (0, $.jsx)(Sn, { entry: A, localConversationId: u })),
      (t[16] = u),
      (t[17] = A),
      (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] === n
    ? (M = t[20])
    : ((M = (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })),
      (t[19] = n),
      (t[20] = M));
  let N;
  t[21] !== j || t[22] !== M
    ? ((N = (0, $.jsxs)(`div`, { className: k, children: [j, M] })),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = v(on, `text-token-text-secondary max-[680px]:hidden`)), (t[24] = P))
    : (P = t[24]);
  let F;
  t[25] === h
    ? (F = t[26])
    : ((F = h == null ? null : (0, $.jsx)(Qt, { modifiedAt: h })),
      (t[25] = h),
      (t[26] = F));
  let I;
  t[27] === F
    ? (I = t[28])
    : ((I = (0, $.jsx)(`span`, { className: P, children: F })),
      (t[27] = F),
      (t[28] = I));
  let L;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = v(on, `flex min-w-0 justify-end gap-1`)), (t[29] = L))
    : (L = t[29]);
  let z = l ?? null,
    B;
  t[30] !== y || t[31] !== z
    ? ((B = (0, $.jsx)(Cn, { entry: z, onOpenThread: y })),
      (t[30] = y),
      (t[31] = z),
      (t[32] = B))
    : (B = t[32]);
  let V;
  t[33] !== m || t[34] !== f || t[35] !== D || t[36] !== T
    ? ((V = m
        ? (0, $.jsx)(S, {
            "aria-label": D,
            className: v(
              X,
              `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`,
            ),
            color: `ghostMuted`,
            size: `icon`,
            onClick: () => T(!f),
            children: f
              ? (0, $.jsx)(ht, { className: `icon-xs` })
              : (0, $.jsx)(Ft, { className: `icon-xs` }),
          })
        : null),
      (t[33] = m),
      (t[34] = f),
      (t[35] = D),
      (t[36] = T),
      (t[37] = V))
    : (V = t[37]);
  let H;
  t[38] === o
    ? (H = t[39])
    : ((H = o.formatMessage({
        id: `projectsIndex.openThread`,
        defaultMessage: `Open task`,
        description: `Button label to open a task from an expanded project row`,
      })),
      (t[38] = o),
      (t[39] = H));
  let U;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(g, { className: `icon-xs` })), (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== y || t[42] !== H
    ? ((W = (0, $.jsx)(S, {
        "aria-label": H,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: y,
        children: U,
      })),
      (t[41] = y),
      (t[42] = H),
      (t[43] = W))
    : (W = t[43]);
  let K;
  t[44] !== B || t[45] !== V || t[46] !== W
    ? ((K = (0, $.jsxs)(`span`, { className: L, children: [B, V, W] })),
      (t[44] = B),
      (t[45] = V),
      (t[46] = W),
      (t[47] = K))
    : (K = t[47]);
  let q;
  return (
    t[48] !== x || t[49] !== N || t[50] !== I || t[51] !== K || t[52] !== O
      ? ((q = (0, $.jsxs)(`div`, {
          className: O,
          onClick: x,
          children: [N, I, K],
        })),
        (t[48] = x),
        (t[49] = N),
        (t[50] = I),
        (t[51] = K),
        (t[52] = O),
        (t[53] = q))
      : (q = t[53]),
    q
  );
}
function Sn(e) {
  let t = (0, Z.c)(12),
    { entry: n, localConversationId: r } = e,
    i = J(tt, r),
    a = n?.kind === `remote` ? n : null,
    o;
  t[0] === a ? (o = t[1]) : ((o = ct(a)), (t[0] = a), (t[1] = o));
  let s = J(bt, o),
    c = J(fe, r),
    l = J(ce, r),
    u = J(ie, r),
    d = n?.kind === `remote` ? s?.iconBadge : i?.iconBadge,
    f;
  t[2] !== n || t[3] !== l || t[4] !== c || t[5] !== u
    ? ((f = Dn({
        entry: n,
        localHasUnreadTurn: l,
        localStatusType: c,
        localUnreadMessageCount: u,
      })),
      (t[2] = n),
      (t[3] = l),
      (t[4] = c),
      (t[5] = u),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] !== d || t[8] !== p
    ? ((m =
        d == null
          ? p == null
            ? null
            : (0, $.jsx)(Ue, { statusState: p })
          : (0, $.jsx)(at, { badge: d })),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  return (
    t[10] === m
      ? (h = t[11])
      : ((h = (0, $.jsx)(`span`, {
          className: `flex h-7 w-7 shrink-0 items-center justify-center`,
          children: m,
        })),
        (t[10] = m),
        (t[11] = h)),
    h
  );
}
function Cn(e) {
  let t = (0, Z.c)(4),
    { entry: n, onOpenThread: r } = e;
  if (n?.kind === `local`) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, $.jsx)(Tn, { entry: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(wn, { onOpenThread: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function wn(e) {
  let t = (0, Z.c)(17),
    { onOpenThread: n } = e,
    r = Me(),
    [i, o] = (0, Q.useState)(!1),
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = r.formatMessage({
        id: `projectsIndex.threadActions`,
        defaultMessage: `Task actions`,
        description: `Button label for expanded project task row actions`,
      })),
      (t[0] = r),
      (t[1] = s));
  let c = i && `opacity-100`,
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = v(
        X,
        `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`,
        c,
      )),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(a, { className: `icon-xs` })), (t[4] = u))
    : (u = t[4]);
  let f;
  t[5] !== s || t[6] !== l
    ? ((f = (0, $.jsx)(S, {
        "aria-label": s,
        className: l,
        color: `ghostMuted`,
        size: `icon`,
        children: u,
      })),
      (t[5] = s),
      (t[6] = l),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === n
    ? (p = t[9])
    : ((p = () => {
        (n(), o(!1));
      }),
      (t[8] = n),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(B, {
        id: `projectsIndex.openThreadMenuItem`,
        defaultMessage: `Open task`,
        description: `Menu item to open a task from an expanded project row`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === p
    ? (h = t[12])
    : ((h = (0, $.jsx)(d.Item, { LeftIcon: g, onSelect: p, children: m })),
      (t[11] = p),
      (t[12] = h));
  let _;
  return (
    t[13] !== i || t[14] !== f || t[15] !== h
      ? ((_ = (0, $.jsx)(D, {
          align: `end`,
          contentWidth: `xs`,
          open: i,
          onOpenChange: o,
          triggerButton: f,
          children: h,
        })),
        (t[13] = i),
        (t[14] = f),
        (t[15] = h),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function Tn(e) {
  let t = (0, Z.c)(6),
    { entry: n } = e,
    r = n.conversationId,
    i = J(Ee, r) ?? n.summary?.title ?? null,
    a = n.cwd,
    o = n.workspaceKind === `projectless`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = v(
        X,
        `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100`,
      )),
      (t[0] = s))
    : (s = t[0]);
  let c;
  return (
    t[1] !== r || t[2] !== n.cwd || t[3] !== o || t[4] !== i
      ? ((c = (0, $.jsx)(Ut, {
          archiveNavigation: `none`,
          archiveSource: `projects_index_thread_overflow_menu`,
          conversationId: r,
          cwd: a,
          dropdownAlign: `end`,
          hideForkActions: o,
          title: i,
          triggerButtonClassName: s,
          triggerButtonColor: `ghostMuted`,
          triggerIconClassName: `icon-xs`,
        })),
        (t[1] = r),
        (t[2] = n.cwd),
        (t[3] = o),
        (t[4] = i),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function En(e) {
  let t = (0, Z.c)(49),
    { canEditMetadataProject: n, initialSources: r, row: s } = e,
    c = w(Ce),
    l = Me(),
    u = o(T),
    f = J(Te, s.group.threadKeys),
    p;
  t[0] === f ? (p = t[1]) : ((p = k(f)), (t[0] = f), (t[1] = p));
  let m = p,
    [h, g] = (0, Q.useState)(!1),
    [_, v] = (0, Q.useState)(!1),
    [y, b] = (0, Q.useState)(!1),
    x;
  t[2] === l
    ? (x = t[3])
    : ((x = l.formatMessage({
        id: `projectsIndex.projectActions`,
        defaultMessage: `Project actions`,
        description: `Button label for project row actions`,
      })),
      (t[2] = l),
      (t[3] = x));
  let C;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(a, { className: `icon-xs` })), (t[4] = C))
    : (C = t[4]);
  let E;
  t[5] === x
    ? (E = t[6])
    : ((E = (0, $.jsx)(S, {
        "aria-label": x,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        children: C,
      })),
      (t[5] = x),
      (t[6] = E));
  let O;
  t[7] !== n ||
  t[8] !== r ||
  t[9] !== s.group ||
  t[10] !== s.name ||
  t[11] !== c
    ? ((O = n
        ? (0, $.jsx)(d.Item, {
            LeftIcon: Nt,
            onSelect: () => {
              (g(!1),
                we(c, {
                  initialName: s.name,
                  initialSources: r,
                  project: kn(s.group),
                  showDeleteAction: !0,
                }));
            },
            children: (0, $.jsx)(B, {
              id: `projectsIndex.editProject`,
              defaultMessage: `Edit project`,
              description: `Menu item to edit a project from the projects index`,
            }),
          })
        : null),
      (t[7] = n),
      (t[8] = r),
      (t[9] = s.group),
      (t[10] = s.name),
      (t[11] = c),
      (t[12] = O))
    : (O = t[12]);
  let j;
  t[13] !== n ||
  t[14] !== r ||
  t[15] !== s.group ||
  t[16] !== s.name ||
  t[17] !== c
    ? ((j = n
        ? (0, $.jsx)(d.Item, {
            LeftIcon: dn,
            onSelect: () => {
              (g(!1),
                we(c, {
                  initialName: s.name,
                  initialSources: r,
                  project: kn(s.group),
                  showDeleteAction: !0,
                }));
            },
            children: (0, $.jsx)(B, {
              id: `projectsIndex.addSource`,
              defaultMessage: `Add source`,
              description: `Menu item to add a source folder from the projects index`,
            }),
          })
        : null),
      (t[13] = n),
      (t[14] = r),
      (t[15] = s.group),
      (t[16] = s.name),
      (t[17] = c),
      (t[18] = j))
    : (j = t[18]);
  let M = m.length === 0,
    N,
    P;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => {
        (g(!1), v(!0));
      }),
      (P = (0, $.jsx)(B, {
        id: `projectsIndex.archiveProjectThreads`,
        defaultMessage: `Archive tasks`,
        description: `Menu item to archive all archiveable tasks in a project from the projects index`,
      })),
      (t[19] = N),
      (t[20] = P))
    : ((N = t[19]), (P = t[20]));
  let F;
  t[21] === M
    ? (F = t[22])
    : ((F = (0, $.jsx)(d.Item, {
        LeftIcon: He,
        disabled: M,
        onSelect: N,
        children: P,
      })),
      (t[21] = M),
      (t[22] = F));
  let I;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(d.Item, {
        LeftIcon: Ne,
        onSelect: () => {
          (g(!1), b(!0));
        },
        children: (0, $.jsx)(B, {
          id: `projectsIndex.removeProject`,
          defaultMessage: `Remove`,
          description: `Menu item to remove a project from the projects index`,
        }),
      })),
      (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] !== h || t[25] !== F || t[26] !== E || t[27] !== O || t[28] !== j
    ? ((L = (0, $.jsxs)(D, {
        align: `end`,
        contentWidth: `xs`,
        open: h,
        onOpenChange: g,
        triggerButton: E,
        children: [O, j, F, I],
      })),
      (t[24] = h),
      (t[25] = F),
      (t[26] = E),
      (t[27] = O),
      (t[28] = j),
      (t[29] = L))
    : (L = t[29]);
  let R;
  t[30] !== _ || t[31] !== s.group.threadKeys || t[32] !== s.name
    ? ((R = _
        ? (0, $.jsx)(Fe, {
            projectLabel: s.name,
            threadKeys: s.group.threadKeys,
            currentThreadKey: null,
            onOpenChange: v,
          })
        : null),
      (t[30] = _),
      (t[31] = s.group.threadKeys),
      (t[32] = s.name),
      (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] !== y || t[35] !== s.group || t[36] !== s.name || t[37] !== u
    ? ((z =
        y && s.group.projectKind === `local`
          ? (0, $.jsx)(i, {
              project: s.group,
              projectLabel: s.name,
              workspaceRootOptions: u ?? [],
              onOpenChange: b,
              onDropdownOpenChange: g,
            })
          : null),
      (t[34] = y),
      (t[35] = s.group),
      (t[36] = s.name),
      (t[37] = u),
      (t[38] = z))
    : (z = t[38]);
  let V;
  t[39] !== y ||
  t[40] !== s.group.projectId ||
  t[41] !== s.group.projectKind ||
  t[42] !== s.name
    ? ((V =
        y && s.group.projectKind === `remote`
          ? (0, $.jsx)(A, {
              projectId: s.group.projectId,
              projectLabel: s.name,
              onOpenChange: b,
              onDropdownOpenChange: g,
            })
          : null),
      (t[39] = y),
      (t[40] = s.group.projectId),
      (t[41] = s.group.projectKind),
      (t[42] = s.name),
      (t[43] = V))
    : (V = t[43]);
  let H;
  return (
    t[44] !== L || t[45] !== R || t[46] !== z || t[47] !== V
      ? ((H = (0, $.jsxs)($.Fragment, { children: [L, R, z, V] })),
        (t[44] = L),
        (t[45] = R),
        (t[46] = z),
        (t[47] = V),
        (t[48] = H))
      : (H = t[48]),
    H
  );
}
function Dn({
  entry: e,
  localHasUnreadTurn: t,
  localStatusType: n,
  localUnreadMessageCount: r,
}) {
  switch (e?.kind) {
    case `local`:
      return e.pendingWorktree == null
        ? { type: n ?? `idle`, unread: t === !0, unreadCount: r ?? 0 }
        : {
            type:
              e.pendingWorktree.phase === `queued` ||
              e.pendingWorktree.phase === `creating`
                ? `loading`
                : e.pendingWorktree.phase === `failed`
                  ? `error`
                  : `idle`,
            unread: e.pendingWorktree.needsAttention,
          };
    case `remote`: {
      let t =
        e.task.task_status_display?.latest_turn_status_display?.turn_status;
      return {
        type:
          t === `in_progress` || t === `pending`
            ? `loading`
            : t === `failed`
              ? `error`
              : `idle`,
        unread: e.task.has_unread_turn,
      };
    }
    case void 0:
      return null;
  }
}
function On(e, t) {
  return e?.includes(t) === !0 ? e.filter((e) => e !== t) : [...(e ?? []), t];
}
function kn(e) {
  return e.isLegacyLocalSingleFolderProject
    ? e.path == null
      ? { isLegacyLocalSingleFolderProject: !0, projectId: e.projectId }
      : {
          isLegacyLocalSingleFolderProject: !0,
          path: e.path,
          projectId: e.projectId,
        }
    : { isLegacyLocalSingleFolderProject: !1, projectId: e.projectId };
}
var Z, Q, $, An, jn;
e(() => {
  ((Z = h()),
    ye(),
    L(),
    n(),
    (Q = t(y(), 1)),
    he(),
    _(),
    mt(),
    nt(),
    q(),
    jt(),
    C(),
    le(),
    kt(),
    me(),
    U(),
    u(),
    Ge(),
    z(),
    it(),
    Ke(),
    b(),
    p(),
    It(),
    Mt(),
    gt(),
    Pt(),
    Oe(),
    r(),
    x(),
    pe(),
    Ht(),
    P(),
    ke(),
    _e(),
    Yt(),
    sn(),
    ln(),
    W(),
    Et(),
    fn(),
    Re(),
    Ve(),
    pt(),
    M(),
    yt(),
    dt(),
    m(),
    ne(),
    Qe(),
    xt(),
    oe(),
    qe(),
    Tt(),
    ut(),
    be(),
    Rt(),
    xe(),
    Vt(),
    ($ = ue()),
    (An = `min-h-10 items-center border-b border-token-border-light px-0 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-projects-rows]>[data-project-row-wrapper]:first-child>[data-project-row]:hover)]:border-b-transparent`),
    (jn = {
      modified: `descending`,
      name: `ascending`,
      sources: `descending`,
    }));
})();
export { pn as ProjectsIndexPage };
//# sourceMappingURL=projects-index-page-BO433ymh.js.map
