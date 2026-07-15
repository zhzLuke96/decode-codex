import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ao as n,
  DK as r,
  Do as i,
  E as a,
  Eo as o,
  Fq as s,
  I2 as c,
  KJ as l,
  L2 as u,
  Mg as d,
  Mq as f,
  Nq as p,
  Oa as m,
  Pq as h,
  S0 as ee,
  Sf as g,
  T as _,
  _0 as v,
  _K as te,
  _Y as y,
  cN as ne,
  cY as b,
  cp as x,
  jg as S,
  jo as C,
  k2 as w,
  kK as T,
  ka as E,
  lp as D,
  mY as O,
  oN as k,
  qJ as A,
  sN as j,
  sY as M,
  vK as N,
  wf as P,
  yY as re,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  ft as F,
  pt as ie,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Aa as I,
  Da as L,
  Oa as R,
  Oc as z,
  bu as ae,
  ka as B,
  mc as V,
  pc as H,
  wc as U,
  yu as W,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  _n as G,
  gn as K,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  cn as q,
  on as J,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Sr as oe,
  xr as Y,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  C as se,
  g as X,
  h as ce,
  w as Z,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  Ro as le,
  zo as ue,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as de,
  t as fe,
} from "./app-initial~app-main~projects-index-page~appgen-library-page~work-home-page~chatgpt-convers~n7kdxxbv-_36znuKl.js";
import {
  n as pe,
  t as me,
} from "./use-searchable-page-title-visibility-DUGDE42k.js";
import {
  a as he,
  c as ge,
  d as _e,
  f as ve,
  h as ye,
  l as be,
  m as xe,
  n as Se,
  p as Ce,
  r as we,
  s as Te,
  u as Ee,
} from "./start-appgen-conversation-BacZ-tah.js";
import { n as De, t as Oe } from "./appgen-share-dialog-BeUfcVRv.js";
function ke() {
  let e = (0, Q.c)(67),
    t = ee(M),
    n = re(),
    {
      data: i,
      fetchNextPage: a,
      hasNextPage: o,
      isFetchNextPageError: s,
      isFetchingNextPage: c,
      isLoading: l,
      isRefetching: u,
      refetch: d,
    } = j(),
    { setSelectedMode: p } = ae(),
    m = oe(),
    [h, g] = (0, Re.useState)(``),
    { scrollContainerRef: _, showTitleInToolbar: v, titleRef: te } = pe(),
    ne = l || u || c,
    b,
    S;
  e[0] !== i || e[1] !== h
    ? ((b = h.trim().toLowerCase()),
      (S = i?.filter((e) => Te(e, b)) ?? null),
      (e[0] = i),
      (e[1] = h),
      (e[2] = b),
      (e[3] = S))
    : ((b = e[2]), (S = e[3]));
  let C = S,
    w;
  e[4] === n
    ? (w = e[5])
    : ((w = n.formatMessage({
        id: `appgenPage.refresh`,
        defaultMessage: `Refresh sites`,
        description: `Accessible label for refreshing the Sites project list`,
      })),
      (e[4] = n),
      (e[5] = w));
  let T = w,
    E;
  e[6] === n
    ? (E = e[7])
    : ((E = n.formatMessage({
        id: `appgenPage.sites.search`,
        defaultMessage: `Search sites`,
        description: `Accessible label and placeholder for searching Sites`,
      })),
      (e[6] = n),
      (e[7] = E));
  let D = E,
    O;
  e[8] !== t || e[9] !== p || e[10] !== m
    ? ((O = () => {
        we(t, m, { type: `create`, setSelectedMode: p });
      }),
      (e[8] = t),
      (e[9] = p),
      (e[10] = m),
      (e[11] = O))
    : (O = e[11]);
  let k = O,
    A;
  e[12] !== t || e[13] !== m
    ? ((A = (e, n, r) => {
        we(t, m, { type: `edit`, liveUrl: r, projectId: e, projectTitle: n });
      }),
      (e[12] = t),
      (e[13] = m),
      (e[14] = A))
    : (A = e[14]);
  let N = A,
    P;
  e[15] === d
    ? (P = e[16])
    : ((P = () => {
        d();
      }),
      (e[15] = d),
      (e[16] = P));
  let ie = P,
    I;
  e[17] === v
    ? (I = e[18])
    : ((I = v
        ? (0, $.jsx)(y, {
            id: `appgenPage.title`,
            defaultMessage: `Sites`,
            description: `Header title for the Sites page`,
          })
        : null),
      (e[17] = v),
      (e[18] = I));
  let L;
  e[19] === u
    ? (L = e[20])
    : ((L = u ? null : (0, $.jsx)(F, { className: `icon-xs` })),
      (e[19] = u),
      (e[20] = L));
  let R;
  e[21] !== ie || e[22] !== u || e[23] !== ne || e[24] !== T || e[25] !== L
    ? ((R = (0, $.jsx)(f, {
        "aria-label": T,
        color: `ghost`,
        disabled: ne,
        loading: u,
        onClick: ie,
        size: `toolbar`,
        uniform: !0,
        children: L,
      })),
      (e[21] = ie),
      (e[22] = u),
      (e[23] = ne),
      (e[24] = T),
      (e[25] = L),
      (e[26] = R))
    : (R = e[26]);
  let z;
  e[27] !== T || e[28] !== R
    ? ((z = (0, $.jsx)(r, { tooltipContent: T, children: R })),
      (e[27] = T),
      (e[28] = R),
      (e[29] = z))
    : (z = e[29]);
  let B;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(y, {
        id: `appgenPage.create`,
        defaultMessage: `Create`,
        description: `Button label for starting a new site from the Sites page`,
      })),
      (e[30] = B))
    : (B = e[30]);
  let V;
  e[31] === k
    ? (V = e[32])
    : ((V = (0, $.jsx)(f, {
        color: `outline`,
        size: `toolbar`,
        onClick: k,
        children: B,
      })),
      (e[31] = k),
      (e[32] = V));
  let H;
  e[33] !== V || e[34] !== z
    ? ((H = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [z, V],
      })),
      (e[33] = V),
      (e[34] = z),
      (e[35] = H))
    : (H = e[35]);
  let U;
  e[36] !== H || e[37] !== I
    ? ((U = (0, $.jsx)(fe, { start: I, trailing: H })),
      (e[36] = H),
      (e[37] = I),
      (e[38] = U))
    : (U = e[38]);
  let W = U,
    G;
  e[39] === W
    ? (G = e[40])
    : ((G = (0, $.jsx)(x, { extension: !0, children: W })),
      (e[39] = W),
      (e[40] = G));
  let K;
  e[41] === W
    ? (K = e[42])
    : ((K = (0, $.jsx)(x, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(se.Header, { children: W }),
      })),
      (e[41] = W),
      (e[42] = K));
  let q, J;
  e[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, $.jsx)(y, {
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (J = (0, $.jsx)(y, {
        id: `codexAppgenAnnouncementModal.title`,
        defaultMessage: `Turn your ideas into live websites`,
        description: `Title for the Sites announcement modal`,
      })),
      (e[43] = q),
      (e[44] = J))
    : ((q = e[43]), (J = e[44]));
  let Y;
  e[45] !== D || e[46] !== h
    ? ((Y = {
        id: `appgen-site-search`,
        label: D,
        onSearchQueryChange: g,
        placeholder: D,
        searchQuery: h,
      }),
      (e[45] = D),
      (e[46] = h),
      (e[47] = Y))
    : (Y = e[47]);
  let X;
  e[48] !== a ||
  e[49] !== k ||
  e[50] !== N ||
  e[51] !== o ||
  e[52] !== s ||
  e[53] !== c ||
  e[54] !== l ||
  e[55] !== b ||
  e[56] !== C
    ? ((X = (0, $.jsx)(`div`, {
        className: `mx-auto flex min-h-full w-full max-w-[760px] flex-col`,
        children: l
          ? (0, $.jsx)(Ae, {})
          : C == null
            ? (0, $.jsx)(Me, {})
            : C.length === 0 && (!o || s)
              ? b.length > 0
                ? (0, $.jsx)(Ne, {})
                : (0, $.jsx)(je, { onCreate: k })
              : (0, $.jsx)(Pe, {
                  projects: C,
                  hasNextPage: o && !s,
                  isFetchingNextPage: c,
                  onEdit: N,
                  onLoadNextPage: () => {
                    a();
                  },
                }),
      })),
      (e[48] = a),
      (e[49] = k),
      (e[50] = N),
      (e[51] = o),
      (e[52] = s),
      (e[53] = c),
      (e[54] = l),
      (e[55] = b),
      (e[56] = C),
      (e[57] = X))
    : (X = e[57]);
  let Z;
  e[58] !== _ || e[59] !== Y || e[60] !== X || e[61] !== te
    ? ((Z = (0, $.jsx)(ce, {
        contentClassName: `!pt-6`,
        headerVariant: `inset`,
        scrollContainerRef: _,
        title: q,
        subtitle: J,
        titleRef: te,
        search: Y,
        children: X,
      })),
      (e[58] = _),
      (e[59] = Y),
      (e[60] = X),
      (e[61] = te),
      (e[62] = Z))
    : (Z = e[62]);
  let le;
  return (
    e[63] !== G || e[64] !== K || e[65] !== Z
      ? ((le = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [G, K, Z],
        })),
        (e[63] = G),
        (e[64] = K),
        (e[65] = Z),
        (e[66] = le))
      : (le = e[66]),
    le
  );
}
function Ae() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(h, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function je(e) {
  let t = (0, Q.c)(5),
    { onCreate: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(_, {})), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(y, {
        id: `appgenPage.empty.title`,
        defaultMessage: `No sites yet`,
        description: `Empty state title for the Sites page`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(y, {
        id: `appgenPage.empty.create`,
        defaultMessage: `Create new site`,
        description: `Button label for creating a new site from the empty state`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, $.jsx)(H, {
          layout: `page`,
          illustration: r,
          illustrationSize: `icon`,
          title: i,
          actions: (0, $.jsx)(f, {
            color: `outline`,
            size: `medium`,
            onClick: n,
            children: a,
          }),
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
function Me() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(H, {
          layout: `page`,
          title: (0, $.jsx)(y, {
            id: `appgenPage.error.title`,
            defaultMessage: `Unable to load sites`,
            description: `Error state title for the Sites page`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ne() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(H, {
          layout: `page`,
          title: (0, $.jsx)(y, {
            id: `appgenPage.sites.search.empty`,
            defaultMessage: `No sites found`,
            description: `Empty state shown when no Sites match the search query`,
          }),
          description: (0, $.jsx)(y, {
            id: `appgenPage.sites.search.emptyDescription`,
            defaultMessage: `Try another search`,
            description: `Description shown when no Sites match the search query`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe(e) {
  let t = (0, Q.c)(16),
    {
      hasNextPage: n,
      isFetchingNextPage: r,
      onEdit: i,
      onLoadNextPage: a,
      projects: o,
    } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(y, {
          id: `appgenPage.list.site`,
          defaultMessage: `Site`,
          description: `Column header for a site in the Sites list`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsxs)(`div`, {
        className: `col-span-full grid grid-cols-subgrid border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-appgen-row]:hover)]:border-transparent`,
        children: [
          s,
          (0, $.jsx)(`span`, {
            className: `pl-4 [@container_(max-width:520px)]:sr-only`,
            children: (0, $.jsx)(y, {
              id: `appgenPage.list.sharedWith`,
              defaultMessage: `Shared with`,
              description: `Column header for who can access a site in the Sites list`,
            }),
          }),
        ],
      })),
      (t[1] = c))
    : (c = t[1]);
  let l;
  if (t[2] !== i || t[3] !== o) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, $.jsx)(Fe, { project: e, onEdit: i }, e.id)),
        (t[5] = i),
        (t[6] = e)),
      (l = o.map(e)),
      (t[2] = i),
      (t[3] = o),
      (t[4] = l));
  } else l = t[4];
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, $.jsxs)(`div`, {
        className: `grid grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto_auto]`,
        children: [c, l],
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  t[9] !== n || t[10] !== r || t[11] !== a
    ? ((d = (0, $.jsx)(K, {
        hasNextPage: n,
        isFetchingNextPage: r,
        onLoadNextPage: a,
      })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = a),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, $.jsxs)(`div`, {
          className: `@container pb-3`,
          children: [u, d],
        })),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function Fe(e) {
  let t = (0, Q.c)(63),
    { onEdit: i, project: a } = e,
    s = re(),
    c = a.current_live_url,
    u = a.status === `suspended`,
    d = u ? null : c,
    f;
  t[0] === a.disabled_by
    ? (f = t[1])
    : ((f = (0, $.jsx)(xe, { disabledBy: a.disabled_by })),
      (t[0] = a.disabled_by),
      (t[1] = f));
  let p = f,
    { data: h } = ne(a.screenshot_url),
    ee = !u && `hover:bg-token-list-hover-background/50`,
    g;
  t[2] === ee
    ? (g = t[3])
    : ((g = l(
        `relative col-span-full grid grid-cols-subgrid items-center overflow-hidden rounded-xl p-3`,
        ee,
      )),
      (t[2] = ee),
      (t[3] = g));
  let _;
  t[4] !== d || t[5] !== s || t[6] !== a.title
    ? ((_ =
        d == null
          ? null
          : (0, $.jsx)(m, {
              "aria-label": s.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites list`,
                },
                { siteTitle: a.title },
              ),
              className: `peer/appgen-row absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
              href: d,
              initiator: `sites_library`,
              openTarget: `in-app-browser`,
            })),
      (t[4] = d),
      (t[5] = s),
      (t[6] = a.title),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] === h
    ? (v = t[9])
    : ((v =
        h == null
          ? (0, $.jsx)(Ie, {})
          : (0, $.jsxs)(`div`, {
              className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
              children: [
                (0, $.jsx)(`img`, {
                  alt: ``,
                  className: `size-full object-cover`,
                  loading: `lazy`,
                  src: h,
                }),
                (0, $.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
                }),
              ],
            })),
      (t[8] = h),
      (t[9] = v));
  let b;
  t[10] === a.title
    ? (b = t[11])
    : ((b = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-sm leading-5 font-medium text-token-foreground`,
        children: a.title,
      })),
      (t[10] = a.title),
      (t[11] = b));
  let x;
  t[12] !== p || t[13] !== u || t[14] !== a.disabled_by
    ? ((x = u
        ? (0, $.jsx)(r, {
            interactive: a.disabled_by === `openai`,
            tooltipContent: p,
            children: (0, $.jsx)(te, {
              className: `pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium`,
              children: (0, $.jsx)(y, {
                id: `appgenPage.disabledBadge`,
                defaultMessage: `Disabled`,
                description: `Status badge shown next to a site name when the site is disabled`,
              }),
            }),
          })
        : null),
      (t[12] = p),
      (t[13] = u),
      (t[14] = a.disabled_by),
      (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] !== b || t[17] !== x
    ? ((S = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [b, x],
      })),
      (t[16] = b),
      (t[17] = x),
      (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] === a.updated_at
    ? (C = t[20])
    : ((C = (0, $.jsx)(J, { dateString: a.updated_at })),
      (t[19] = a.updated_at),
      (t[20] = C));
  let w;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== c || t[23] !== a.slug
    ? ((T = le(c) ?? a.slug), (t[22] = c), (t[23] = a.slug), (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] === T
    ? (E = t[26])
    : ((E = (0, $.jsx)(`span`, { className: `truncate`, children: T })),
      (t[25] = T),
      (t[26] = E));
  let D;
  t[27] !== E || t[28] !== C
    ? ((D = (0, $.jsxs)(`span`, {
        className: `appgen-row-default-subtitle flex min-w-0 items-center gap-1.5`,
        children: [C, w, E],
      })),
      (t[27] = E),
      (t[28] = C),
      (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] === d
    ? (O = t[31])
    : ((O =
        d == null
          ? null
          : (0, $.jsxs)(`span`, {
              className: `appgen-row-hover-subtitle hidden items-center gap-1`,
              children: [
                (0, $.jsx)(y, {
                  id: `appgenPage.openInBrowserSubtitle`,
                  defaultMessage: `Open in browser`,
                  description: `Hover subtitle for opening a live site`,
                }),
                (0, $.jsx)(n, {
                  className: `icon-2xs`,
                  ExternalIcon: o,
                  href: d,
                }),
              ],
            })),
      (t[30] = d),
      (t[31] = O));
  let k;
  t[32] !== D || t[33] !== O
    ? ((k = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-xs leading-[18px] text-token-text-secondary`,
        children: [D, O],
      })),
      (t[32] = D),
      (t[33] = O),
      (t[34] = k))
    : (k = t[34]);
  let A;
  t[35] !== k || t[36] !== S
    ? ((A = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-px`,
        children: [S, k],
      })),
      (t[35] = k),
      (t[36] = S),
      (t[37] = A))
    : (A = t[37]);
  let j;
  t[38] !== A || t[39] !== v
    ? ((j = (0, $.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-6 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex`,
        children: [v, A],
      })),
      (t[38] = A),
      (t[39] = v),
      (t[40] = j))
    : (j = t[40]);
  let M;
  t[41] !== u ||
  t[42] !== a.access_policy ||
  t[43] !== a.id ||
  t[44] !== a.title
    ? ((M = (0, $.jsx)(Le, {
        accessPolicy: a.access_policy,
        disabled: u,
        projectId: a.id,
        projectTitle: a.title,
      })),
      (t[41] = u),
      (t[42] = a.access_policy),
      (t[43] = a.id),
      (t[44] = a.title),
      (t[45] = M))
    : (M = t[45]);
  let N;
  t[46] !== d || t[47] !== i || t[48] !== a.id || t[49] !== a.title
    ? ((N = () => i(a.id, a.title, d)),
      (t[46] = d),
      (t[47] = i),
      (t[48] = a.id),
      (t[49] = a.title),
      (t[50] = N))
    : (N = t[50]);
  let P;
  t[51] !== u ||
  t[52] !== a.disabled_by ||
  t[53] !== a.id ||
  t[54] !== a.title ||
  t[55] !== N
    ? ((P = (0, $.jsx)(ve, {
        disabled: u,
        disabledBy: a.disabled_by,
        projectId: a.id,
        projectTitle: a.title,
        surface: `sites`,
        viewMode: `list`,
        onEdit: N,
      })),
      (t[51] = u),
      (t[52] = a.disabled_by),
      (t[53] = a.id),
      (t[54] = a.title),
      (t[55] = N),
      (t[56] = P))
    : (P = t[56]);
  let F;
  return (
    t[57] !== j || t[58] !== M || t[59] !== P || t[60] !== g || t[61] !== _
      ? ((F = (0, $.jsxs)(`div`, {
          className: g,
          "data-appgen-row": !0,
          children: [_, j, M, P],
        })),
        (t[57] = j),
        (t[58] = M),
        (t[59] = P),
        (t[60] = g),
        (t[61] = _),
        (t[62] = F))
      : (F = t[62]),
    F
  );
}
function Ie() {
  let e = (0, Q.c)(5),
    { platform: t } = d(),
    n = t === `windows` ? Ee : ge,
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = (0, $.jsx)(n, { "aria-hidden": !0, className: `size-full` })),
      (e[0] = n),
      (e[1] = r));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  return (
    e[3] === r
      ? (a = e[4])
      : ((a = (0, $.jsxs)(`div`, {
          className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
          children: [r, i],
        })),
        (e[3] = r),
        (e[4] = a)),
    a
  );
}
function Le(e) {
  let t = (0, Q.c)(17),
    { accessPolicy: n, disabled: r, projectId: i, projectTitle: a } = e,
    o = r === void 0 ? !1 : r,
    s = U(n),
    c = ee(M),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = () => P(c, Oe, { projectId: i })),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, $.jsx)(B, {
        className: `icon-xs shrink-0`,
        accessPolicy: n,
        "aria-hidden": !0,
      })),
      (t[3] = n),
      (t[4] = u));
  let d = y,
    f = L(s),
    p;
  t[5] !== d || t[6] !== s || t[7] !== f
    ? ((p = (0, $.jsx)(`span`, {
        className: `truncate [@container_(max-width:520px)]:sr-only`,
        children: (0, $.jsx)(d, { ...f, values: s }),
      })),
      (t[5] = d),
      (t[6] = s),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === a
    ? (m = t[10])
    : ((m = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(y, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: a },
        }),
      })),
      (t[9] = a),
      (t[10] = m));
  let h;
  return (
    t[11] !== o || t[12] !== l || t[13] !== u || t[14] !== p || t[15] !== m
      ? ((h = (0, $.jsxs)(`button`, {
          className: `pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 pl-4 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline disabled:cursor-default disabled:opacity-50 disabled:hover:no-underline [@container_(max-width:520px)]:pl-2`,
          disabled: o,
          type: `button`,
          onClick: l,
          children: [u, p, m],
        })),
        (t[11] = o),
        (t[12] = l),
        (t[13] = u),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var Q, Re, $;
e(() => {
  ((Q = c()),
    A(),
    v(),
    (Re = t(u(), 1)),
    O(),
    Z(),
    N(),
    p(),
    E(),
    C(),
    q(),
    G(),
    V(),
    g(),
    X(),
    s(),
    T(),
    D(),
    W(),
    S(),
    Y(),
    i(),
    ie(),
    a(),
    b(),
    de(),
    me(),
    z(),
    I(),
    R(),
    ye(),
    Ce(),
    k(),
    De(),
    ue(),
    he(),
    _e(),
    be(),
    Se(),
    ($ = w()));
})();
export { ke as AppgenPage };
//# sourceMappingURL=appgen-page-BUHtNgGw.js.map
