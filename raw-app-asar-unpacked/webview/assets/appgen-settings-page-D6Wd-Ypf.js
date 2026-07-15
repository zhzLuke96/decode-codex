import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  $M as r,
  Af as i,
  Ao as a,
  Ba as o,
  Br as s,
  Bu as c,
  C0 as l,
  Df as u,
  Do as d,
  Eo as f,
  Fq as p,
  I2 as m,
  JA as h,
  JM as g,
  KJ as _,
  L2 as v,
  Mq as y,
  Nq as b,
  Of as x,
  Pq as S,
  QM as C,
  S0 as w,
  SK as T,
  Sf as E,
  Vr as D,
  XM as O,
  YM as k,
  ZM as A,
  _0 as j,
  _Y as M,
  _f as N,
  bK as P,
  bf as F,
  cY as I,
  cj as L,
  cp as R,
  eN as z,
  gD as B,
  gK as V,
  gf as ee,
  hK as H,
  hf as te,
  iN as ne,
  jo as re,
  k2 as U,
  kf as ie,
  lp as ae,
  mD as oe,
  mY as W,
  mf as se,
  nd as ce,
  oN as G,
  qJ as K,
  rN as le,
  sY as ue,
  tN as q,
  td as de,
  uj as fe,
  w0 as pe,
  wf as me,
  x0 as J,
  yY as he,
  za as ge,
  zu as _e,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dr as ve,
  ur as ye,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  c as be,
  ft as xe,
  pt as Se,
  s as Ce,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Aa as we,
  Ea as Te,
  Oa as Ee,
  Oc as De,
  bc as Oe,
  ka as ke,
  wc as Ae,
  yc as je,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  C as Me,
  d as Ne,
  p as Pe,
  w as Fe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  Ro as Ie,
  f as Le,
  p as Re,
  v as ze,
  y as Be,
  zo as Ve,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  a as He,
  u as Ue,
} from "./app-initial~app-main~appgen-settings-page~page~appgen-library-page~appgen-page~appgen-setti~ogh9jurw-BWN-1S2Y.js";
import {
  n as We,
  t as Ge,
} from "./app-initial~app-main~appgen-settings-page~page~plugin-detail-page~quick-chat-window-page~sk~nap5db9z-ByktMsXX.js";
import {
  n as Ke,
  t as Y,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import {
  i as qe,
  n as Je,
  r as Ye,
  t as Xe,
} from "./appgen-share-dialog-BeUfcVRv.js";
function Ze(e) {
  let t = (0, lt.c)(22),
    { customDomains: n, isError: r, isLoading: i, projectId: a } = e,
    o = w(ue),
    s;
  t[0] === n?.items
    ? (s = t[1])
    : ((s = n?.items ?? []), (t[0] = n?.items), (t[1] = s));
  let c = s,
    l,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.title`,
        defaultMessage: `Domains`,
        description: `Section heading for custom domain settings`,
      })),
      (u = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.description`,
        defaultMessage: `Connect your own domain to this site`,
        description: `Description for custom domain settings`,
      })),
      (t[2] = l),
      (t[3] = u))
    : ((l = t[2]), (u = t[3]));
  let d;
  t[4] !== n || t[5] !== c || t[6] !== r || t[7] !== a || t[8] !== o
    ? ((d =
        n != null && !r && c.length === 0
          ? (0, X.jsxs)(y, {
              color: `outline`,
              size: `toolbar`,
              onClick: () => {
                me(o, rt, { projectId: a });
              },
              children: [
                (0, X.jsx)(H, { "aria-hidden": !0, className: `icon-xs` }),
                (0, X.jsx)(M, {
                  id: `appgenSettings.customDomains.add`,
                  defaultMessage: `Add domain`,
                  description: `Button label for adding a custom domain to a site`,
                }),
              ],
            })
          : null),
      (t[4] = n),
      (t[5] = c),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === d
    ? (f = t[11])
    : ((f = (0, X.jsx)(Y.Header, { title: l, subtitle: u, actions: d })),
      (t[10] = d),
      (t[11] = f));
  let p;
  t[12] !== c || t[13] !== r || t[14] !== i || t[15] !== a
    ? ((p = i
        ? (0, X.jsx)(ze, {
            label: (0, X.jsx)(M, {
              id: `appgenSettings.customDomains.loading.label`,
              defaultMessage: `Custom domains`,
              description: `Label for loading custom domains`,
            }),
            description: (0, X.jsx)(M, {
              id: `appgenSettings.customDomains.loading.description`,
              defaultMessage: `Loading custom domains`,
              description: `Loading text for custom domain settings`,
            }),
            control: (0, X.jsx)(S, { className: `icon-xs` }),
          })
        : r
          ? (0, X.jsx)(ze, {
              label: (0, X.jsx)(M, {
                id: `appgenSettings.customDomains.error.label`,
                defaultMessage: `Custom domains`,
                description: `Label for custom domains when loading fails`,
              }),
              description: (0, X.jsx)(M, {
                id: `appgenSettings.customDomains.error.description`,
                defaultMessage: `Unable to load custom domains`,
                description: `Error text when custom domains fail to load`,
              }),
              control: null,
            })
          : c.length === 0
            ? (0, X.jsx)(ze, {
                label: (0, X.jsx)(M, {
                  id: `appgenSettings.customDomains.empty.label`,
                  defaultMessage: `No custom domains`,
                  description: `Label for a site without custom domains`,
                }),
                description: (0, X.jsx)(M, {
                  id: `appgenSettings.customDomains.empty.description`,
                  defaultMessage: `Add a domain to show DNS setup records`,
                  description: `Empty state description for custom domain settings`,
                }),
                control: (0, X.jsx)(de, {
                  "aria-hidden": !0,
                  className: `icon-xs`,
                }),
              })
            : c.map((e) =>
                (0, X.jsx)(Qe, { customDomain: e, projectId: a }, e.id),
              )),
      (t[12] = c),
      (t[13] = r),
      (t[14] = i),
      (t[15] = a),
      (t[16] = p))
    : (p = t[16]);
  let m;
  t[17] === p
    ? (m = t[18])
    : ((m = (0, X.jsx)(Y.Content, {
        children: (0, X.jsx)(Le, { children: p }),
      })),
      (t[17] = p),
      (t[18] = m));
  let h;
  return (
    t[19] !== f || t[20] !== m
      ? ((h = (0, X.jsxs)(Y, { children: [f, m] })),
        (t[19] = f),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function Qe(e) {
  let t = (0, lt.c)(58),
    { customDomain: n, projectId: r } = e,
    i = w(ue),
    a = he(),
    o = J(z, r),
    s = J(q, r),
    c;
  t[0] === n ? (c = t[1]) : ((c = at(n)), (t[0] = n), (t[1] = c));
  let l = c,
    u = o.isPending || s.isPending,
    d;
  t[2] !== a || t[3] !== i
    ? ((d = function () {
        i.get(T).danger(
          a.formatMessage({
            id: `appgenSettings.customDomains.refresh.error`,
            defaultMessage: `Unable to refresh domain status`,
            description: `Error toast shown when custom domain refresh fails`,
          }),
        );
      }),
      (t[2] = a),
      (t[3] = i),
      (t[4] = d))
    : (d = t[4]);
  let f = d,
    p;
  t[5] === n.hostname
    ? (p = t[6])
    : ((p = (0, X.jsx)(`div`, {
        className: `min-w-0 truncate font-mono text-sm text-token-text-primary`,
        children: n.hostname,
      })),
      (t[5] = n.hostname),
      (t[6] = p));
  let m;
  t[7] === n.status
    ? (m = t[8])
    : ((m = (0, X.jsx)(et, { status: n.status })),
      (t[7] = n.status),
      (t[8] = m));
  let h;
  t[9] !== p || t[10] !== m
    ? ((h = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center gap-2`,
        children: [p, m],
      })),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === n.last_error
    ? (g = t[13])
    : ((g =
        n.last_error == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `text-sm text-token-charts-red`,
              children: (0, X.jsx)(M, {
                id: `appgenSettings.customDomains.lastError`,
                defaultMessage: `Last error: {message}`,
                description: `Last provider error shown for a failed custom domain`,
                values: { message: n.last_error },
              }),
            })),
      (t[12] = n.last_error),
      (t[13] = g));
  let _;
  t[14] !== h || t[15] !== g
    ? ((_ = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [h, g],
      })),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== n.hostname || t[18] !== a
    ? ((v = a.formatMessage(
        {
          id: `appgenSettings.customDomains.refresh.ariaLabel`,
          defaultMessage: `Refresh {hostname} status`,
          description: `Accessible label for refreshing a custom domain status`,
        },
        { hostname: n.hostname },
      )),
      (t[17] = n.hostname),
      (t[18] = a),
      (t[19] = v))
    : (v = t[19]);
  let b;
  t[20] !== n.id || t[21] !== o || t[22] !== f
    ? ((b = () => {
        o.mutateAsync(n.id).then($e, () => {
          f();
        });
      }),
      (t[20] = n.id),
      (t[21] = o),
      (t[22] = f),
      (t[23] = b))
    : (b = t[23]);
  let x;
  t[24] === o.isPending
    ? (x = t[25])
    : ((x = o.isPending
        ? null
        : (0, X.jsx)(xe, { "aria-hidden": !0, className: `icon-xs` })),
      (t[24] = o.isPending),
      (t[25] = x));
  let S;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label for refreshing a custom domain status`,
      })),
      (t[26] = S))
    : (S = t[26]);
  let C;
  t[27] !== u || t[28] !== x || t[29] !== v || t[30] !== b
    ? ((C = (0, X.jsxs)(y, {
        "aria-label": v,
        color: `outline`,
        disabled: u,
        size: `toolbar`,
        onClick: b,
        children: [x, S],
      })),
      (t[27] = u),
      (t[28] = x),
      (t[29] = v),
      (t[30] = b),
      (t[31] = C))
    : (C = t[31]);
  let E;
  t[32] !== n.hostname || t[33] !== a
    ? ((E = a.formatMessage(
        {
          id: `appgenSettings.customDomains.remove.ariaLabel`,
          defaultMessage: `Remove {hostname}`,
          description: `Accessible label for removing a custom domain`,
        },
        { hostname: n.hostname },
      )),
      (t[32] = n.hostname),
      (t[33] = a),
      (t[34] = E))
    : (E = t[34]);
  let D;
  t[35] !== n || t[36] !== r || t[37] !== i
    ? ((D = () => {
        me(i, it, { customDomain: n, projectId: r });
      }),
      (t[35] = n),
      (t[36] = r),
      (t[37] = i),
      (t[38] = D))
    : (D = t[38]);
  let O;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(Ce, { "aria-hidden": !0, className: `icon-xs` })),
      (t[39] = O))
    : (O = t[39]);
  let k;
  t[40] !== u || t[41] !== E || t[42] !== D
    ? ((k = (0, X.jsx)(y, {
        "aria-label": E,
        color: `ghost`,
        disabled: u,
        size: `icon`,
        onClick: D,
        children: O,
      })),
      (t[40] = u),
      (t[41] = E),
      (t[42] = D),
      (t[43] = k))
    : (k = t[43]);
  let A;
  t[44] !== C || t[45] !== k
    ? ((A = (0, X.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: [C, k],
      })),
      (t[44] = C),
      (t[45] = k),
      (t[46] = A))
    : (A = t[46]);
  let j;
  t[47] !== A || t[48] !== _
    ? ((j = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 items-start justify-between gap-3 max-sm:flex-col`,
        children: [_, A],
      })),
      (t[47] = A),
      (t[48] = _),
      (t[49] = j))
    : (j = t[49]);
  let N;
  t[50] === n.status
    ? (N = t[51])
    : ((N =
        n.status === `active`
          ? null
          : (0, X.jsx)(`div`, {
              className: `text-sm text-token-text-secondary`,
              children: (0, X.jsx)(M, {
                id: `appgenSettings.customDomains.dns.verificationInstructions`,
                defaultMessage: `Update your domain's DNS records with these entries to verify domain ownership`,
                description: `Instruction shown above DNS records while a custom domain is waiting for verification`,
              }),
            })),
      (t[50] = n.status),
      (t[51] = N));
  let P;
  t[52] === l
    ? (P = t[53])
    : ((P = (0, X.jsx)(nt, { records: l })), (t[52] = l), (t[53] = P));
  let F;
  return (
    t[54] !== j || t[55] !== N || t[56] !== P
      ? ((F = (0, X.jsxs)(`div`, {
          className: `flex flex-col gap-3 p-3`,
          children: [j, N, P],
        })),
        (t[54] = j),
        (t[55] = N),
        (t[56] = P),
        (t[57] = F))
      : (F = t[57]),
    F
  );
}
function $e() {}
function et(e) {
  let t = (0, lt.c)(7),
    { status: n } = e,
    r =
      n === `active`
        ? `bg-token-charts-green/10 text-token-charts-green`
        : n === `failed`
          ? `bg-token-charts-red/10 text-token-charts-red`
          : `bg-token-foreground/10 text-token-text-secondary`,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = _(
        `inline-flex h-5 items-center rounded-full px-2 text-xs font-medium`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n ? (a = t[3]) : ((a = tt(n)), (t[2] = n), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, X.jsx)(`span`, { className: i, children: a })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function tt(e) {
  switch (e) {
    case `active`:
      return (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.status.active`,
        defaultMessage: `Active`,
        description: `Status label for an active custom domain`,
      });
    case `failed`:
      return (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.status.failed`,
        defaultMessage: `Failed`,
        description: `Status label for a failed custom domain`,
      });
    case `pending`:
      return (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.status.pending`,
        defaultMessage: `Pending`,
        description: `Status label for a pending custom domain`,
      });
  }
}
function nt(e) {
  let t = (0, lt.c)(8),
    { records: n } = e,
    r = he();
  if (n.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsxs)(`div`, {
        className: `grid grid-cols-[72px_minmax(0,1fr)_minmax(0,1.3fr)_auto] gap-3 border-b border-token-border px-3 py-2 text-xs font-medium text-token-text-tertiary max-sm:hidden`,
        children: [
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(M, {
              id: `appgenSettings.customDomains.dns.type`,
              defaultMessage: `Type`,
              description: `DNS record table type column`,
            }),
          }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(M, {
              id: `appgenSettings.customDomains.dns.name`,
              defaultMessage: `Name`,
              description: `DNS record table name column`,
            }),
          }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(M, {
              id: `appgenSettings.customDomains.dns.value`,
              defaultMessage: `Value`,
              description: `DNS record table value column`,
            }),
          }),
          (0, X.jsx)(`span`, {}),
        ],
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  if (t[1] !== r || t[2] !== n) {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = (e) =>
          (0, X.jsxs)(
            `div`,
            {
              className: `grid grid-cols-[72px_minmax(0,1fr)_minmax(0,1.3fr)_auto] items-center gap-3 px-3 py-2 text-sm text-token-text-primary max-sm:grid-cols-[minmax(0,1fr)_auto]`,
              children: [
                (0, X.jsx)(`div`, {
                  className: `font-mono text-xs text-token-text-secondary max-sm:hidden`,
                  children: e.type,
                }),
                (0, X.jsxs)(`div`, {
                  className: `min-w-0 font-mono text-xs break-all`,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: `mr-1 hidden text-token-text-tertiary max-sm:inline`,
                      children: e.type,
                    }),
                    e.name,
                  ],
                }),
                (0, X.jsx)(`div`, {
                  className: `min-w-0 font-mono text-xs break-all max-sm:col-start-1`,
                  children: e.value,
                }),
                (0, X.jsx)(s, {
                  ariaLabel: r.formatMessage({
                    id: `appgenSettings.customDomains.dns.copyValue`,
                    defaultMessage: `Copy DNS value`,
                    description: `Accessible label for copying a DNS record value`,
                  }),
                  iconClassName: `icon-xs`,
                  iconOnly: !0,
                  onCopy: () => {
                    _e(e.value);
                  },
                }),
              ],
            },
            e.id,
          )),
        (t[4] = r),
        (t[5] = e)),
      (a = n.map(e)),
      (t[1] = r),
      (t[2] = n),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, X.jsxs)(`div`, {
          className: `overflow-hidden rounded-md border border-token-border bg-token-bg-secondary`,
          children: [i, a],
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function rt(e) {
  let t = (0, lt.c)(47),
    { onClose: n, projectId: r } = e,
    i = J(g, r),
    a = w(ue),
    o = he(),
    [s, c] = (0, ut.useState)(``),
    l;
  t[0] === s ? (l = t[1]) : ((l = s.trim()), (t[0] = s), (t[1] = l));
  let d = l,
    f = d.length === 0 || i.isPending,
    p;
  t[2] !== o || t[3] !== a
    ? ((p = function () {
        a.get(T).danger(
          o.formatMessage({
            id: `appgenSettings.customDomains.addDialog.error`,
            defaultMessage: `Unable to add domain`,
            description: `Error toast shown when adding a custom domain fails`,
          }),
        );
      }),
      (t[2] = o),
      (t[3] = a),
      (t[4] = p))
    : (p = t[4]);
  let m = p,
    h = i.isPending,
    _ = !i.isPending,
    v;
  t[5] !== i.isPending || t[6] !== n
    ? ((v = (e) => {
        !e && !i.isPending && n();
      }),
      (t[5] = i.isPending),
      (t[6] = n),
      (t[7] = v))
    : (v = t[7]);
  let b;
  t[8] !== i || t[9] !== f || t[10] !== n || t[11] !== m || t[12] !== d
    ? ((b = (e) => {
        (e.preventDefault(),
          !f &&
            i.mutateAsync({ hostname: d }).then(
              () => {
                n();
              },
              () => {
                m();
              },
            ));
      }),
      (t[8] = i),
      (t[9] = f),
      (t[10] = n),
      (t[11] = m),
      (t[12] = d),
      (t[13] = b))
    : (b = t[13]);
  let S;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(ie, {
        className: `contents`,
        children: (0, X.jsx)(M, {
          id: `appgenSettings.customDomains.addDialog.title`,
          defaultMessage: `Add custom domain`,
          description: `Title for custom domain add dialog`,
        }),
      })),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(ee, {
        title: S,
        titleClassName: `truncate pr-8`,
        subtitle: (0, X.jsx)(x, {
          className: `contents`,
          children: (0, X.jsx)(M, {
            id: `appgenSettings.customDomains.addDialog.description`,
            defaultMessage: `To use this feature, you need to own a domain and be able to manage its DNS records`,
            description: `Description for custom domain add dialog`,
          }),
        }),
      })),
      (t[15] = C))
    : (C = t[15]);
  let E;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(`span`, {
        className: `text-sm font-medium text-token-text-primary`,
        children: (0, X.jsx)(M, {
          id: `appgenSettings.customDomains.addDialog.inputLabel`,
          defaultMessage: `Custom domain`,
          description: `Label for custom domain input`,
        }),
      })),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] === o
    ? (D = t[18])
    : ((D = o.formatMessage({
        id: `appgenSettings.customDomains.addDialog.inputAriaLabel`,
        defaultMessage: `Custom domain`,
        description: `Accessible label for custom domain input`,
      })),
      (t[17] = o),
      (t[18] = D));
  let O = i.isPending,
    k;
  t[19] === o
    ? (k = t[20])
    : ((k = o.formatMessage({
        id: `appgenSettings.customDomains.addDialog.placeholder`,
        defaultMessage: `www.example.com`,
        description: `Placeholder for custom domain input`,
      })),
      (t[19] = o),
      (t[20] = k));
  let A;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        c(e.target.value);
      }),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== i.isPending || t[23] !== s || t[24] !== D || t[25] !== k
    ? ((j = (0, X.jsx)(N, {
        children: (0, X.jsxs)(`label`, {
          className: `flex flex-col gap-1.5`,
          children: [
            E,
            (0, X.jsx)(`input`, {
              "aria-label": D,
              autoFocus: !0,
              className: `w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
              disabled: O,
              placeholder: k,
              spellCheck: !1,
              type: `text`,
              value: s,
              onChange: A,
            }),
          ],
        }),
      })),
      (t[22] = i.isPending),
      (t[23] = s),
      (t[24] = D),
      (t[25] = k),
      (t[26] = j))
    : (j = t[26]);
  let P;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.addDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain add dialog`,
      })),
      (t[27] = P))
    : (P = t[27]);
  let F;
  t[28] !== i.isPending || t[29] !== n
    ? ((F = (0, X.jsx)(y, {
        color: `ghost`,
        disabled: i.isPending,
        type: `button`,
        onClick: n,
        children: P,
      })),
      (t[28] = i.isPending),
      (t[29] = n),
      (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.addDialog.submit`,
        defaultMessage: `Add domain`,
        description: `Submit button label for custom domain add dialog`,
      })),
      (t[31] = I))
    : (I = t[31]);
  let L;
  t[32] !== i.isPending || t[33] !== f
    ? ((L = (0, X.jsx)(y, {
        disabled: f,
        loading: i.isPending,
        type: `submit`,
        children: I,
      })),
      (t[32] = i.isPending),
      (t[33] = f),
      (t[34] = L))
    : (L = t[34]);
  let R;
  t[35] !== F || t[36] !== L
    ? ((R = (0, X.jsx)(N, { children: (0, X.jsxs)(te, { children: [F, L] }) })),
      (t[35] = F),
      (t[36] = L),
      (t[37] = R))
    : (R = t[37]);
  let z;
  t[38] !== j || t[39] !== R || t[40] !== b
    ? ((z = (0, X.jsxs)(se, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: b,
        children: [C, j, R],
      })),
      (t[38] = j),
      (t[39] = R),
      (t[40] = b),
      (t[41] = z))
    : (z = t[41]);
  let B;
  return (
    t[42] !== i.isPending || t[43] !== z || t[44] !== _ || t[45] !== v
      ? ((B = (0, X.jsx)(u, {
          open: !0,
          shouldIgnoreClickOutside: h,
          showDialogClose: _,
          size: `compact`,
          onOpenChange: v,
          children: z,
        })),
        (t[42] = i.isPending),
        (t[43] = z),
        (t[44] = _),
        (t[45] = v),
        (t[46] = B))
      : (B = t[46]),
    B
  );
}
function it(e) {
  let t = (0, lt.c)(35),
    { customDomain: n, onClose: r, projectId: i } = e,
    a = J(q, i),
    o = w(ue),
    s = he(),
    c;
  t[0] !== s || t[1] !== o
    ? ((c = function () {
        o.get(T).danger(
          s.formatMessage({
            id: `appgenSettings.customDomains.removeDialog.error`,
            defaultMessage: `Unable to remove domain`,
            description: `Error toast shown when removing a custom domain fails`,
          }),
        );
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    d = !a.isPending,
    f;
  t[3] !== r || t[4] !== a.isPending
    ? ((f = (e) => {
        !e && !a.isPending && r();
      }),
      (t[3] = r),
      (t[4] = a.isPending),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== n.id || t[7] !== r || t[8] !== a || t[9] !== l
    ? ((p = (e) => {
        (e.preventDefault(),
          !a.isPending &&
            a.mutateAsync(n.id).then(
              () => {
                r();
              },
              () => {
                l();
              },
            ));
      }),
      (t[6] = n.id),
      (t[7] = r),
      (t[8] = a),
      (t[9] = l),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === n.hostname
    ? (m = t[12])
    : ((m = (0, X.jsx)(ie, {
        className: `contents`,
        children: (0, X.jsx)(M, {
          id: `appgenSettings.customDomains.removeDialog.title`,
          defaultMessage: `Remove {hostname}?`,
          description: `Title for custom domain removal dialog`,
          values: { hostname: n.hostname },
        }),
      })),
      (t[11] = n.hostname),
      (t[12] = m));
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(x, {
        className: `contents`,
        children: (0, X.jsx)(M, {
          id: `appgenSettings.customDomains.removeDialog.description`,
          defaultMessage: `Visitors will no longer be able to use this domain for the site`,
          description: `Description for custom domain removal dialog`,
        }),
      })),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === m
    ? (g = t[15])
    : ((g = (0, X.jsx)(ee, {
        title: m,
        titleClassName: `truncate pr-8`,
        subtitle: h,
      })),
      (t[14] = m),
      (t[15] = g));
  let _;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom domain removal dialog`,
      })),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== r || t[18] !== a.isPending
    ? ((v = (0, X.jsx)(y, {
        color: `ghost`,
        disabled: a.isPending,
        type: `button`,
        onClick: r,
        children: _,
      })),
      (t[17] = r),
      (t[18] = a.isPending),
      (t[19] = v))
    : (v = t[19]);
  let b;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(M, {
        id: `appgenSettings.customDomains.removeDialog.submit`,
        defaultMessage: `Remove`,
        description: `Confirm button label for custom domain removal dialog`,
      })),
      (t[20] = b))
    : (b = t[20]);
  let S;
  t[21] === a.isPending
    ? (S = t[22])
    : ((S = (0, X.jsx)(y, {
        color: `danger`,
        loading: a.isPending,
        type: `submit`,
        children: b,
      })),
      (t[21] = a.isPending),
      (t[22] = S));
  let C;
  t[23] !== S || t[24] !== v
    ? ((C = (0, X.jsx)(N, { children: (0, X.jsxs)(te, { children: [v, S] }) })),
      (t[23] = S),
      (t[24] = v),
      (t[25] = C))
    : (C = t[25]);
  let E;
  t[26] !== C || t[27] !== p || t[28] !== g
    ? ((E = (0, X.jsxs)(se, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: p,
        children: [g, C],
      })),
      (t[26] = C),
      (t[27] = p),
      (t[28] = g),
      (t[29] = E))
    : (E = t[29]);
  let D;
  return (
    t[30] !== a.isPending || t[31] !== E || t[32] !== d || t[33] !== f
      ? ((D = (0, X.jsx)(u, {
          open: !0,
          shouldIgnoreClickOutside: a.isPending,
          showDialogClose: d,
          size: `compact`,
          onOpenChange: f,
          children: E,
        })),
        (t[30] = a.isPending),
        (t[31] = E),
        (t[32] = d),
        (t[33] = f),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
function at(e) {
  return [
    ...ot(e),
    ...e.validation_records.flatMap((e, t) => {
      let n = st(e.record_type),
        r = st(e.name),
        i = st(e.value);
      return n == null || r == null || i == null
        ? []
        : [{ id: `validation:${t}:${n}:${r}`, name: r, type: n, value: i }];
    }),
  ];
}
function ot(e) {
  return (ct(e.hostname) && e.apex_proxy_ipv4_targets.length > 0) ||
    e.cname_target == null
    ? e.apex_proxy_ipv4_targets.map((t, n) => ({
        id: `apex:${n}:${t}`,
        name: e.hostname,
        type: `A`,
        value: t,
      }))
    : [{ id: `cname`, name: e.hostname, type: `CNAME`, value: e.cname_target }];
}
function st(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
function ct(e) {
  let t = o(e, { allowPrivateDomains: !0 });
  return t.domain != null && t.domain.toLowerCase() === e.toLowerCase();
}
var lt,
  ut,
  X,
  dt = e(() => {
    ((lt = m()),
      K(),
      j(),
      (ut = t(v(), 1)),
      W(),
      ge(),
      b(),
      D(),
      i(),
      F(),
      E(),
      p(),
      P(),
      ce(),
      V(),
      Se(),
      be(),
      I(),
      Ke(),
      Be(),
      Re(),
      c(),
      G(),
      (X = U()));
  });
function ft(e) {
  return {
    environmentVariables: e.entries
      .filter((e) => !e.is_secret)
      .map(({ key: e, value: t }) => ({ key: e, value: t ?? `` })),
    secrets: e.entries
      .filter((e) => e.is_secret)
      .map(({ key: e }) => ({
        key: e,
        keyInputDisabledWhileValue: _t,
        previousKey: e,
        value: _t,
      })),
  };
}
function pt(e, t) {
  let n = [
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map(({ key: e }) => e),
  ];
  if (new Set(n).size !== n.length) return null;
  let r = new Set([
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map((e) => (mt(e) ? e.previousKey : e.key)),
  ]);
  return {
    remove: e.entries.filter(({ key: e }) => !r.has(e)).map(({ key: e }) => e),
    set_values: [
      ...t.environmentVariables.filter((t) => ht(e, t)).map((e) => gt(e, !1)),
      ...t.secrets.filter((e) => !mt(e)).map((e) => gt(e, !0)),
    ],
  };
}
function mt(e) {
  return e.previousKey != null && e.value === _t;
}
function ht(e, t) {
  let n = e.entries.find((e) => e.key === t.key);
  return n == null || n.is_secret || n.value !== t.value;
}
function gt(e, t) {
  return { is_secret: t, key: e.key, type: `envvar`, value: e.value };
}
var _t,
  vt = e(() => {
    _t = `<REDACTED>`;
  });
function yt(e, t, n = !1) {
  let r = e ?? t,
    i = r.trim();
  return {
    isInvalid: e != null && i.length === 0,
    title: r,
    update: e != null && i.length > 0 && (i !== t || n) ? { title: i } : null,
  };
}
async function bt({
  environmentUpdate: e,
  titleUpdate: t,
  updateEnvironment: n,
  updateTitle: r,
}) {
  let [i, a] = await Promise.allSettled([
    t == null ? void 0 : r(t),
    e == null ? void 0 : n(e),
  ]);
  return {
    environmentSaved: a.status === `fulfilled`,
    titleSaved: i.status === `fulfilled`,
  };
}
var xt = e(() => {});
function St(e, t, n) {
  let r = Ct(n),
    i = r[0];
  return i == null
    ? null
    : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function Ct(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = wt(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = wt(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: Tt(e.slice(i + 1).trim()) });
  }
  return t;
}
function wt(e, t, n = () => !0) {
  let r = !1,
    i = !1,
    a = !1;
  for (let o = 0; o < e.length; o += 1) {
    let s = e[o];
    if (r) {
      r = !1;
      continue;
    }
    if (s === `\\`) {
      r = !0;
      continue;
    }
    if (s === `'` && !i) {
      a = !a;
      continue;
    }
    if (s === `"` && !a) {
      i = !i;
      continue;
    }
    if (s === t && !a && !i && n(o)) return o;
  }
  return -1;
}
function Tt(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) ||
    (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
var Et = e(() => {});
function Dt(e) {
  let t = (0, At.c)(20),
    {
      addButtonLabel: n,
      disabled: r,
      entries: i,
      onChange: a,
      subtitle: o,
      title: s,
      valueInputType: c,
    } = e,
    l = r === void 0 ? !1 : r,
    u;
  t[0] !== i || t[1] !== a
    ? ((u = () => {
        a([...i, { key: ``, value: `` }]);
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(H, { className: `icon-xs` })), (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== n || t[5] !== l || t[6] !== u
    ? ((f = (0, Z.jsxs)(y, {
        color: `outline`,
        disabled: l,
        size: `toolbar`,
        onClick: u,
        children: [d, n],
      })),
      (t[4] = n),
      (t[5] = l),
      (t[6] = u),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== o || t[9] !== f || t[10] !== s
    ? ((p = (0, Z.jsx)(Y.Header, {
        actions: f,
        subtitle: o,
        title: s,
        titleGap: `none`,
      })),
      (t[8] = o),
      (t[9] = f),
      (t[10] = s),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== l || t[13] !== i || t[14] !== a || t[15] !== c
    ? ((m = (0, Z.jsx)(Y.Content, {
        children: (0, Z.jsx)(Le, {
          children:
            i.length === 0
              ? (0, Z.jsx)(ye, {
                  layout: `settings-row`,
                  children: (0, Z.jsx)(M, {
                    id: `envEntrySettingsGroup.empty`,
                    defaultMessage: `Nothing yet`,
                    description: `Empty state for an environment entry settings section`,
                  }),
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex flex-col gap-2 p-4`,
                  children: i.map((e, t) =>
                    (0, Z.jsx)(
                      Ot,
                      {
                        disabled: l,
                        entry: e,
                        valueInputType: c,
                        onChange: (e) => {
                          a(i.map((n, r) => (r === t ? e : n)));
                        },
                        onKeyPaste: (e) => {
                          let n = St(
                            i,
                            t,
                            e.clipboardData.getData(`text/plain`),
                          );
                          n != null && (e.preventDefault(), a(n));
                        },
                        onRemove: () => {
                          a(i.filter((e, n) => n !== t));
                        },
                      },
                      t,
                    ),
                  ),
                }),
        }),
      })),
      (t[12] = l),
      (t[13] = i),
      (t[14] = a),
      (t[15] = c),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== p || t[18] !== m
      ? ((h = (0, Z.jsxs)(Y, { children: [p, m] })),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function Ot(e) {
  let t = (0, At.c)(39),
    {
      disabled: n,
      entry: r,
      onChange: i,
      onKeyPaste: a,
      onRemove: o,
      valueInputType: s,
    } = e,
    c = he(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = n || r.keyInputDisabledWhileValue === r.value,
    d;
  t[2] === c
    ? (d = t[3])
    : ((d = c.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (t[2] = c),
      (t[3] = d));
  let f;
  t[4] !== r || t[5] !== i
    ? ((f = (e) => {
        i({ ...r, key: e.target.value });
      }),
      (t[4] = r),
      (t[5] = i),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== r.key ||
  t[8] !== a ||
  t[9] !== l ||
  t[10] !== u ||
  t[11] !== d ||
  t[12] !== f
    ? ((p = (0, Z.jsx)(kt, {
        "aria-label": l,
        disabled: u,
        placeholder: d,
        value: r.key,
        onPaste: a,
        onChange: f,
      })),
      (t[7] = r.key),
      (t[8] = a),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === c
    ? (m = t[15])
    : ((m = c.formatMessage({
        id: `envEntrySettingsGroup.value.ariaLabel`,
        defaultMessage: `Value`,
        description: `Accessible label for an environment variable or secret value input`,
      })),
      (t[14] = c),
      (t[15] = m));
  let h;
  t[16] === c
    ? (h = t[17])
    : ((h = c.formatMessage({
        id: `envEntrySettingsGroup.value.placeholder`,
        defaultMessage: `Value`,
        description: `Placeholder for an environment variable or secret value input`,
      })),
      (t[16] = c),
      (t[17] = h));
  let g;
  t[18] !== r || t[19] !== i
    ? ((g = (e) => {
        i({ ...r, value: e.target.value });
      }),
      (t[18] = r),
      (t[19] = i),
      (t[20] = g))
    : (g = t[20]);
  let _;
  t[21] !== n ||
  t[22] !== r.value ||
  t[23] !== m ||
  t[24] !== h ||
  t[25] !== g ||
  t[26] !== s
    ? ((_ = (0, Z.jsx)(kt, {
        "aria-label": m,
        disabled: n,
        placeholder: h,
        type: s,
        value: r.value,
        onChange: g,
      })),
      (t[21] = n),
      (t[22] = r.value),
      (t[23] = m),
      (t[24] = h),
      (t[25] = g),
      (t[26] = s),
      (t[27] = _))
    : (_ = t[27]);
  let v;
  t[28] === c
    ? (v = t[29])
    : ((v = c.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (t[28] = c),
      (t[29] = v));
  let b;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(Ce, { className: `icon-2xs` })), (t[30] = b))
    : (b = t[30]);
  let x;
  t[31] !== n || t[32] !== o || t[33] !== v
    ? ((x = (0, Z.jsx)(y, {
        "aria-label": v,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: o,
        children: b,
      })),
      (t[31] = n),
      (t[32] = o),
      (t[33] = v),
      (t[34] = x))
    : (x = t[34]);
  let S;
  return (
    t[35] !== x || t[36] !== p || t[37] !== _
      ? ((S = (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
          children: [p, _, x],
        })),
        (t[35] = x),
        (t[36] = p),
        (t[37] = _),
        (t[38] = S))
      : (S = t[38]),
    S
  );
}
function kt(e) {
  let t = (0, At.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Z.jsx)(`input`, {
          className: `h-token-button-composer w-full min-w-0 rounded-md border border-token-input-border bg-token-input-background px-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          ...e,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
var At,
  Z,
  jt = e(() => {
    ((At = m()), W(), b(), ve(), V(), be(), Ke(), Re(), Et(), (Z = U()));
  });
function Mt() {
  let e = (0, Q.c)(6),
    { projectId: t } = fe(),
    r = L();
  if (t == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(n, { replace: !0, to: `/sites` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let i;
  e[1] === r
    ? (i = e[2])
    : ((i = () => {
        r(He);
      }),
      (e[1] = r),
      (e[2] = i));
  let a;
  return (
    e[3] !== t || e[4] !== i
      ? ((a = (0, $.jsx)(Nt, { projectId: t, onDeleted: i })),
        (e[3] = t),
        (e[4] = i),
        (e[5] = a))
      : (a = e[5]),
    a
  );
}
function Nt(e) {
  let t = (0, Q.c)(36),
    { onDeleted: n, projectId: i, showHeader: a } = e,
    o = a === void 0 ? !0 : a,
    { data: s, isError: c, isLoading: l } = J(r, i),
    { data: u, isError: d, isLoading: f } = J(C, i),
    p = s?.current_live_url,
    m;
  t[0] === p ? (m = t[1]) : ((m = Ie(p)), (t[0] = p), (t[1] = m));
  let h = m,
    g = s?.title,
    v;
  t[2] !== p || t[3] !== g
    ? ((v = (0, $.jsx)(Pt, { liveUrl: p, siteTitle: g })),
      (t[2] = p),
      (t[3] = g),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b = o ? `h-full bg-token-main-surface-primary` : `flex-1`,
    x;
  t[5] === b
    ? (x = t[6])
    : ((x = _(`flex min-h-0 flex-col`, b)), (t[5] = b), (t[6] = x));
  let S;
  t[7] !== y || t[8] !== o
    ? ((S = o
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(R, { extension: !0, children: y }),
              (0, $.jsx)(R, {
                browser: !0,
                chromeExtension: !0,
                electron: !0,
                children: (0, $.jsx)(Me.Header, { children: y }),
              }),
            ],
          })
        : null),
      (t[7] = y),
      (t[8] = o),
      (t[9] = S))
    : (S = t[9]);
  let w = o && `p-panel`,
    T;
  t[10] === w
    ? (T = t[11])
    : ((T = _(`scrollbar-stable flex min-h-0 flex-1 overflow-y-auto`, w)),
      (t[10] = w),
      (t[11] = T));
  let E = !o && `px-4 py-3`,
    D;
  t[12] === E ? (D = t[13]) : ((D = _(`w-full`, E)), (t[12] = E), (t[13] = D));
  let O = o ? h : void 0,
    k = o ? s?.title : void 0,
    A;
  t[14] !== u ||
  t[15] !== d ||
  t[16] !== f ||
  t[17] !== c ||
  t[18] !== l ||
  t[19] !== n ||
  t[20] !== i ||
  t[21] !== o ||
  t[22] !== s
    ? ((A =
        l || f
          ? (0, $.jsx)(zt, {})
          : c || d || s == null || u == null
            ? (0, $.jsx)(Bt, {})
            : (0, $.jsxs)($.Fragment, {
                children: [
                  o
                    ? null
                    : (0, $.jsx)(Ye, {
                        liveUrl: s.current_live_url,
                        title: s.title,
                      }),
                  (0, $.jsx)(
                    Ft,
                    {
                      accessPolicy: s.access_policy,
                      embedded: !o,
                      environment: u,
                      onDeleted: n,
                      projectId: i,
                      siteSlug: s.slug,
                      siteTitle: s.title,
                    },
                    i,
                  ),
                ],
              })),
      (t[14] = u),
      (t[15] = d),
      (t[16] = f),
      (t[17] = c),
      (t[18] = l),
      (t[19] = n),
      (t[20] = i),
      (t[21] = o),
      (t[22] = s),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] !== D || t[25] !== O || t[26] !== k || t[27] !== A
    ? ((j = (0, $.jsx)(Ne, {
        className: D,
        embedded: !0,
        subtitle: O,
        subtitleClassName: `truncate`,
        title: k,
        children: A,
      })),
      (t[24] = D),
      (t[25] = O),
      (t[26] = k),
      (t[27] = A),
      (t[28] = j))
    : (j = t[28]);
  let M;
  t[29] !== j || t[30] !== T
    ? ((M = (0, $.jsx)(`div`, { className: T, children: j })),
      (t[29] = j),
      (t[30] = T),
      (t[31] = M))
    : (M = t[31]);
  let N;
  return (
    t[32] !== M || t[33] !== x || t[34] !== S
      ? ((N = (0, $.jsxs)(`div`, { className: x, children: [S, M] })),
        (t[32] = M),
        (t[33] = x),
        (t[34] = S),
        (t[35] = N))
      : (N = t[35]),
    N
  );
}
function Pt(e) {
  let t = (0, Q.c)(13),
    { liveUrl: n, siteTitle: r } = e,
    i = L(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(M, {
        id: `appgenSettings.header.sites`,
        defaultMessage: `Sites`,
        description: `Breadcrumb link back to the Sites Library page`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === i
    ? (s = t[2])
    : ((s = [
        {
          id: `sites`,
          label: o,
          onClick: () => {
            i(He);
          },
        },
      ]),
      (t[1] = i),
      (t[2] = s));
  let c;
  t[3] !== r || t[4] !== s
    ? ((c = (0, $.jsx)(Ge, { ancestors: s, current: r })),
      (t[3] = r),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === n
    ? (l = t[7])
    : ((l =
        n == null
          ? null
          : (0, $.jsxs)(y, {
              color: `outline`,
              size: `toolbar`,
              onClick: (e) => {
                B({ event: e, href: n, initiator: `mcp_app_resource` });
              },
              children: [
                (0, $.jsx)(a, {
                  className: `icon-xs`,
                  ExternalIcon: f,
                  href: n,
                }),
                (0, $.jsx)(M, {
                  id: `appgenSettings.visit`,
                  defaultMessage: `Visit`,
                  description: `Button label for opening a live site externally`,
                }),
              ],
            })),
      (t[6] = n),
      (t[7] = l));
  let u;
  t[8] === l
    ? (u = t[9])
    : ((u = (0, $.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: l,
      })),
      (t[8] = l),
      (t[9] = u));
  let d;
  return (
    t[10] !== c || t[11] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y`,
          children: [c, u],
        })),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function Ft(e) {
  let t = (0, Q.c)(99),
    {
      accessPolicy: n,
      embedded: r,
      environment: i,
      onDeleted: a,
      projectId: o,
      siteSlug: s,
      siteTitle: c,
    } = e,
    u = w(ue),
    { data: d } = l(k),
    { data: f, isError: p, isLoading: m } = J(O, o),
    h = J(le, o),
    g = J(ne, o),
    v = he(),
    [b, x] = (0, Ht.useState)(null),
    [S, C] = (0, Ht.useState)(null),
    [E, D] = (0, Ht.useState)(!1),
    A;
  t[0] !== i || t[1] !== b?.draft
    ? ((A = b?.draft ?? ft(i)), (t[0] = i), (t[1] = b?.draft), (t[2] = A))
    : (A = t[2]);
  let j = A,
    N;
  t[3] === b
    ? (N = t[4])
    : ((N = b == null ? null : pt(b.baseEnvironment, b.draft)),
      (t[3] = b),
      (t[4] = N));
  let P = N,
    F;
  t[5] !== S || t[6] !== E || t[7] !== c
    ? ((F = yt(S, c, E)), (t[5] = S), (t[6] = E), (t[7] = c), (t[8] = F))
    : (F = t[8]);
  let { isInvalid: I, title: L, update: R } = F,
    z = b != null && P == null,
    B = h.isPending || g.isPending,
    V = B || I || z || (R == null && P == null),
    ee;
  t[9] === i
    ? (ee = t[10])
    : ((ee = function (e) {
        x((t) => {
          let n = t?.baseEnvironment ?? i,
            r = ft(n),
            a = e(t?.draft ?? r);
          return (0, Vt.default)(a, r)
            ? null
            : { baseEnvironment: n, draft: a };
        });
      }),
      (t[9] = i),
      (t[10] = ee));
  let H = ee,
    te = r ? `gap-[var(--padding-panel)]` : `gap-10`,
    re;
  t[11] === te
    ? (re = t[12])
    : ((re = _(`flex flex-col`, te)), (t[11] = te), (t[12] = re));
  let U;
  t[13] !== P ||
  t[14] !== v ||
  t[15] !== V ||
  t[16] !== u ||
  t[17] !== R ||
  t[18] !== h.mutateAsync ||
  t[19] !== g
    ? ((U = (e) => {
        (e.preventDefault(),
          !V &&
            bt({
              environmentUpdate: P,
              titleUpdate: R,
              updateEnvironment: h.mutateAsync,
              updateTitle: g.mutateAsync,
            }).then((e) => {
              let { environmentSaved: t, titleSaved: n } = e;
              (n ? (C(null), D(!1)) : D(!0),
                t && x(null),
                (!n || !t) &&
                  u.get(T).danger(
                    v.formatMessage({
                      id: `appgenSettings.save.error`,
                      defaultMessage: `Unable to save site settings`,
                      description: `Error toast shown when saving site settings fails`,
                    }),
                  ));
            }));
      }),
      (t[13] = P),
      (t[14] = v),
      (t[15] = V),
      (t[16] = u),
      (t[17] = R),
      (t[18] = h.mutateAsync),
      (t[19] = g),
      (t[20] = U))
    : (U = t[20]);
  let ie;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(M, {
          id: `appgenSettings.general.title`,
          defaultMessage: `General`,
          description: `Section heading for general Site information on the Site settings page`,
        }),
      })),
      (t[21] = ie))
    : (ie = t[21]);
  let ae, oe;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(M, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Title`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (ae = (0, $.jsx)(M, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (t[22] = ae),
      (t[23] = oe))
    : ((ae = t[22]), (oe = t[23]));
  let W;
  t[24] === v
    ? (W = t[25])
    : ((W = v.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (t[24] = v),
      (t[25] = W));
  let se = I ? Ut : void 0,
    ce;
  t[26] === c
    ? (ce = t[27])
    : ((ce = (e) => {
        (D(!1), C(e.target.value === c ? null : e.target.value));
      }),
      (t[26] = c),
      (t[27] = ce));
  let G;
  t[28] !== S || t[29] !== E || t[30] !== c
    ? ((G = () => {
        !E && S?.trim() === c && C(null);
      }),
      (t[28] = S),
      (t[29] = E),
      (t[30] = c),
      (t[31] = G))
    : (G = t[31]);
  let K;
  t[32] !== I ||
  t[33] !== B ||
  t[34] !== W ||
  t[35] !== se ||
  t[36] !== ce ||
  t[37] !== G ||
  t[38] !== L
    ? ((K = (0, $.jsxs)(Y, {
        children: [
          ie,
          (0, $.jsx)(Y.Content, {
            children: (0, $.jsx)(Le, {
              children: (0, $.jsx)(ze, {
                className: `max-sm:flex-col max-sm:items-stretch`,
                label: oe,
                description: ae,
                control: (0, $.jsx)(`input`, {
                  "aria-label": W,
                  "aria-describedby": se,
                  "aria-invalid": I,
                  className: `w-56 max-w-full cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
                  disabled: B,
                  maxLength: 100,
                  type: `text`,
                  value: L,
                  onChange: ce,
                  onBlur: G,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[32] = I),
      (t[33] = B),
      (t[34] = W),
      (t[35] = se),
      (t[36] = ce),
      (t[37] = G),
      (t[38] = L),
      (t[39] = K))
    : (K = t[39]);
  let q;
  t[40] !== n || t[41] !== o
    ? ((q =
        n == null ? null : (0, $.jsx)(It, { accessPolicy: n, projectId: o })),
      (t[40] = n),
      (t[41] = o),
      (t[42] = q))
    : (q = t[42]);
  let de;
  t[43] !== f || t[44] !== d || t[45] !== p || t[46] !== m || t[47] !== o
    ? ((de =
        d === !0
          ? (0, $.jsx)(Ze, {
              customDomains: f,
              isError: p,
              isLoading: m,
              projectId: o,
            })
          : null),
      (t[43] = f),
      (t[44] = d),
      (t[45] = p),
      (t[46] = m),
      (t[47] = o),
      (t[48] = de))
    : (de = t[48]);
  let fe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(M, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[49] = fe))
    : (fe = t[49]);
  let pe, ge;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(M, {
        id: `appgenSettings.environmentVariables.description`,
        defaultMessage: `Settings your site uses while it runs, like URLs, names, or feature switches`,
        description: `Description for site environment variable settings`,
      })),
      (ge = (0, $.jsx)(M, {
        id: `appgenSettings.environmentVariables.title`,
        defaultMessage: `Environment variables`,
        description: `Heading for site environment variable settings`,
      })),
      (t[50] = pe),
      (t[51] = ge))
    : ((pe = t[50]), (ge = t[51]));
  let _e;
  t[52] === H
    ? (_e = t[53])
    : ((_e = (e) => {
        H((t) => ({ ...t, environmentVariables: e }));
      }),
      (t[52] = H),
      (t[53] = _e));
  let ve;
  t[54] !== j.environmentVariables || t[55] !== B || t[56] !== _e
    ? ((ve = (0, $.jsx)(Dt, {
        addButtonLabel: fe,
        disabled: B,
        entries: j.environmentVariables,
        subtitle: pe,
        title: ge,
        valueInputType: `text`,
        onChange: _e,
      })),
      (t[54] = j.environmentVariables),
      (t[55] = B),
      (t[56] = _e),
      (t[57] = ve))
    : (ve = t[57]);
  let ye;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(M, {
        id: `appgenSettings.secrets.add`,
        defaultMessage: `Add secret`,
        description: `Button label to add a site secret`,
      })),
      (t[58] = ye))
    : (ye = t[58]);
  let be, xe;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(M, {
        id: `appgenSettings.secrets.description`,
        defaultMessage: `Sensitive setup info, like keys and passwords`,
        description: `Description for site secret settings`,
      })),
      (xe = (0, $.jsx)(M, {
        id: `appgenSettings.secrets.title`,
        defaultMessage: `Secrets`,
        description: `Heading for site secret settings`,
      })),
      (t[59] = be),
      (t[60] = xe))
    : ((be = t[59]), (xe = t[60]));
  let Se;
  t[61] === H
    ? (Se = t[62])
    : ((Se = (e) => {
        H((t) => ({ ...t, secrets: e }));
      }),
      (t[61] = H),
      (t[62] = Se));
  let Ce;
  t[63] !== j.secrets || t[64] !== B || t[65] !== Se
    ? ((Ce = (0, $.jsx)(Dt, {
        addButtonLabel: ye,
        disabled: B,
        entries: j.secrets,
        subtitle: be,
        title: xe,
        valueInputType: `password`,
        onChange: Se,
      })),
      (t[63] = j.secrets),
      (t[64] = B),
      (t[65] = Se),
      (t[66] = Ce))
    : (Ce = t[66]);
  let we;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(M, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[67] = we))
    : (we = t[67]);
  let Te, Ee;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(M, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (Ee = (0, $.jsx)(M, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[68] = Te),
      (t[69] = Ee))
    : ((Te = t[68]), (Ee = t[69]));
  let De;
  t[70] !== a || t[71] !== o || t[72] !== u || t[73] !== s || t[74] !== c
    ? ((De = () => {
        me(u, Lt, { onDeleted: a, projectId: o, siteSlug: s, siteTitle: c });
      }),
      (t[70] = a),
      (t[71] = o),
      (t[72] = u),
      (t[73] = s),
      (t[74] = c),
      (t[75] = De))
    : (De = t[75]);
  let Oe;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(M, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[76] = Oe))
    : (Oe = t[76]);
  let ke;
  t[77] === De
    ? (ke = t[78])
    : ((ke = (0, $.jsxs)(Y, {
        children: [
          we,
          (0, $.jsx)(Y.Content, {
            children: (0, $.jsx)(Le, {
              children: (0, $.jsx)(ze, {
                label: Te,
                description: Ee,
                control: (0, $.jsx)(y, {
                  color: `danger`,
                  size: `toolbar`,
                  type: `button`,
                  onClick: De,
                  children: Oe,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[77] = De),
      (t[78] = ke));
  let Ae;
  t[79] !== z || t[80] !== I
    ? ((Ae = I
        ? (0, $.jsx)(`p`, {
            id: Ut,
            className: `text-sm text-token-charts-red`,
            role: `alert`,
            children: (0, $.jsx)(M, {
              id: `appgenSettings.general.title.required`,
              defaultMessage: `Site title is required`,
              description: `Inline validation message below the Site settings form when the Site title is empty`,
            }),
          })
        : z
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-token-charts-red`,
              role: `alert`,
              children: (0, $.jsx)(M, {
                id: `appgenSettings.environmentKeys.duplicate`,
                defaultMessage: `Keys must be unique across environment variables and secrets`,
                description: `Validation shown when site environment settings use a duplicate key`,
              }),
            })
          : null),
      (t[79] = z),
      (t[80] = I),
      (t[81] = Ae))
    : (Ae = t[81]);
  let je;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(M, {
        id: `appgenSettings.save`,
        defaultMessage: `Save`,
        description: `Button for saving site settings`,
      })),
      (t[82] = je))
    : (je = t[82]);
  let Me;
  t[83] !== V || t[84] !== B
    ? ((Me = (0, $.jsx)(y, {
        className: `ml-auto`,
        disabled: V,
        loading: B,
        size: `toolbar`,
        type: `submit`,
        children: je,
      })),
      (t[83] = V),
      (t[84] = B),
      (t[85] = Me))
    : (Me = t[85]);
  let Ne;
  t[86] !== Ae || t[87] !== Me
    ? ((Ne = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 px-4 py-3`,
        children: [Ae, Me],
      })),
      (t[86] = Ae),
      (t[87] = Me),
      (t[88] = Ne))
    : (Ne = t[88]);
  let Pe;
  return (
    t[89] !== K ||
    t[90] !== q ||
    t[91] !== de ||
    t[92] !== ve ||
    t[93] !== Ce ||
    t[94] !== ke ||
    t[95] !== Ne ||
    t[96] !== re ||
    t[97] !== U
      ? ((Pe = (0, $.jsxs)(`form`, {
          className: re,
          onSubmit: U,
          children: [K, q, de, ve, Ce, ke, Ne],
        })),
        (t[89] = K),
        (t[90] = q),
        (t[91] = de),
        (t[92] = ve),
        (t[93] = Ce),
        (t[94] = ke),
        (t[95] = Ne),
        (t[96] = re),
        (t[97] = U),
        (t[98] = Pe))
      : (Pe = t[98]),
    Pe
  );
}
function It(e) {
  let t = (0, Q.c)(44),
    { accessPolicy: n, projectId: r } = e,
    i = w(ue),
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h;
  t[0] === n
    ? ((a = t[1]),
      (o = t[2]),
      (s = t[3]),
      (c = t[4]),
      (l = t[5]),
      (u = t[6]),
      (d = t[7]),
      (f = t[8]),
      (p = t[9]),
      (m = t[10]),
      (h = t[11]))
    : ((u = Ae(n)),
      (l = Y),
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((h = (0, $.jsx)(Y.Header, {
            title: (0, $.jsx)(M, {
              id: `appgenSettings.sharing.title`,
              defaultMessage: `Sharing`,
              description: `Heading for site sharing settings`,
            }),
          })),
          (t[12] = h))
        : (h = t[12]),
      (c = Y.Content),
      (s = Le),
      (o = ze),
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, $.jsx)(M, {
            id: `appgenSettings.sharing.label`,
            defaultMessage: `Sharing`,
            description: `Label for site sharing settings`,
          })),
          (t[13] = m))
        : (m = t[13]),
      (f = `flex items-center gap-1`),
      (p = (0, $.jsx)(ke, {
        "aria-hidden": !0,
        accessPolicy: n,
        className: `icon-2xs shrink-0`,
      })),
      (a = M),
      (d = Te(u)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h));
  let g;
  t[14] !== a || t[15] !== u || t[16] !== d
    ? ((g = (0, $.jsx)(a, { ...d, values: u })),
      (t[14] = a),
      (t[15] = u),
      (t[16] = d),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] !== f || t[19] !== p || t[20] !== g
    ? ((_ = (0, $.jsxs)(`span`, { className: f, children: [p, g] })),
      (t[18] = f),
      (t[19] = p),
      (t[20] = g),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  t[22] !== r || t[23] !== i
    ? ((v = () => me(i, Xe, { projectId: r })),
      (t[22] = r),
      (t[23] = i),
      (t[24] = v))
    : (v = t[24]);
  let b, x;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(je, { "aria-hidden": !0, className: `icon-xs` })),
      (b = (0, $.jsx)(M, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Share settings`,
        description: `Sharing settings button label`,
      })),
      (t[25] = b),
      (t[26] = x))
    : ((b = t[25]), (x = t[26]));
  let S;
  t[27] === v
    ? (S = t[28])
    : ((S = (0, $.jsxs)(y, {
        color: `outline`,
        size: `toolbar`,
        onClick: v,
        children: [x, b],
      })),
      (t[27] = v),
      (t[28] = S));
  let C;
  t[29] !== o || t[30] !== S || t[31] !== m || t[32] !== _
    ? ((C = (0, $.jsx)(o, { label: m, description: _, control: S })),
      (t[29] = o),
      (t[30] = S),
      (t[31] = m),
      (t[32] = _),
      (t[33] = C))
    : (C = t[33]);
  let T;
  t[34] !== s || t[35] !== C
    ? ((T = (0, $.jsx)(s, { children: C })),
      (t[34] = s),
      (t[35] = C),
      (t[36] = T))
    : (T = t[36]);
  let E;
  t[37] !== c || t[38] !== T
    ? ((E = (0, $.jsx)(c, { children: T })),
      (t[37] = c),
      (t[38] = T),
      (t[39] = E))
    : (E = t[39]);
  let D;
  return (
    t[40] !== l || t[41] !== E || t[42] !== h
      ? ((D = (0, $.jsxs)(l, { children: [h, E] })),
        (t[40] = l),
        (t[41] = E),
        (t[42] = h),
        (t[43] = D))
      : (D = t[43]),
    D
  );
}
function Lt(e) {
  let t = (0, Q.c)(49),
    { onClose: n, onDeleted: r, projectId: i, siteSlug: a, siteTitle: o } = e,
    s = w(ue),
    c = J(A, i),
    l = he(),
    [d, f] = (0, Ht.useState)(``),
    p;
  t[0] === o
    ? (p = t[1])
    : ((p = (0, $.jsx)(M, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: o },
      })),
      (t[0] = o),
      (t[1] = p));
  let m = p,
    h = c.isPending,
    g = !c.isPending,
    _;
  t[2] !== c.isPending || t[3] !== n
    ? ((_ = (e) => {
        !e && !c.isPending && n();
      }),
      (t[2] = c.isPending),
      (t[3] = n),
      (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] !== d ||
  t[6] !== c ||
  t[7] !== l ||
  t[8] !== n ||
  t[9] !== r ||
  t[10] !== s ||
  t[11] !== a
    ? ((v = (e) => {
        (e.preventDefault(),
          !(d !== a || c.isPending) &&
            c.mutateAsync().then(
              () => {
                (s.get(T).success(
                  l.formatMessage({
                    id: `appgenSettings.deleteDialog.success`,
                    defaultMessage: `Site deleted`,
                    description: `Success toast shown after deleting a site`,
                  }),
                ),
                  n(),
                  r());
              },
              () => {
                s.get(T).danger(
                  l.formatMessage({
                    id: `appgenSettings.deleteDialog.error`,
                    defaultMessage: `Unable to delete site`,
                    description: `Error toast shown when deleting a site fails`,
                  }),
                );
              },
            ));
      }),
      (t[5] = d),
      (t[6] = c),
      (t[7] = l),
      (t[8] = n),
      (t[9] = r),
      (t[10] = s),
      (t[11] = a),
      (t[12] = v))
    : (v = t[12]);
  let b;
  t[13] === m
    ? (b = t[14])
    : ((b = (0, $.jsx)(ie, { className: `contents`, children: m })),
      (t[13] = m),
      (t[14] = b));
  let S;
  t[15] === a
    ? (S = t[16])
    : ((S = (0, $.jsx)(x, {
        className: `contents`,
        children: (0, $.jsx)(M, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
          values: { siteSlug: a, strong: Rt },
        }),
      })),
      (t[15] = a),
      (t[16] = S));
  let C;
  t[17] !== b || t[18] !== S
    ? ((C = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(ee, {
          title: b,
          titleClassName: `truncate pr-8`,
          subtitle: S,
        }),
      })),
      (t[17] = b),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let E;
  t[20] === l
    ? (E = t[21])
    : ((E = l.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[20] = l),
      (t[21] = E));
  let D;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e) => {
        f(e.target.value);
      }),
      (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== d || t[24] !== c.isPending || t[25] !== a || t[26] !== E
    ? ((O = (0, $.jsx)(N, {
        children: (0, $.jsx)(`input`, {
          "aria-label": E,
          autoFocus: !0,
          className: `w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          disabled: c.isPending,
          placeholder: a,
          spellCheck: !1,
          type: `text`,
          value: d,
          onChange: D,
        }),
      })),
      (t[23] = d),
      (t[24] = c.isPending),
      (t[25] = a),
      (t[26] = E),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(M, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[28] = k))
    : (k = t[28]);
  let j;
  t[29] !== c.isPending || t[30] !== n
    ? ((j = (0, $.jsx)(y, {
        color: `ghost`,
        disabled: c.isPending,
        type: `button`,
        onClick: n,
        children: k,
      })),
      (t[29] = c.isPending),
      (t[30] = n),
      (t[31] = j))
    : (j = t[31]);
  let P = d !== a || c.isPending,
    F;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(M, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[32] = F))
    : (F = t[32]);
  let I;
  t[33] !== c.isPending || t[34] !== P
    ? ((I = (0, $.jsx)(y, {
        color: `danger`,
        disabled: P,
        loading: c.isPending,
        type: `submit`,
        children: F,
      })),
      (t[33] = c.isPending),
      (t[34] = P),
      (t[35] = I))
    : (I = t[35]);
  let L;
  t[36] !== j || t[37] !== I
    ? ((L = (0, $.jsx)(N, { children: (0, $.jsxs)(te, { children: [j, I] }) })),
      (t[36] = j),
      (t[37] = I),
      (t[38] = L))
    : (L = t[38]);
  let R;
  t[39] !== O || t[40] !== L || t[41] !== v || t[42] !== C
    ? ((R = (0, $.jsxs)(se, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: v,
        children: [C, O, L],
      })),
      (t[39] = O),
      (t[40] = L),
      (t[41] = v),
      (t[42] = C),
      (t[43] = R))
    : (R = t[43]);
  let z;
  return (
    t[44] !== c.isPending || t[45] !== R || t[46] !== g || t[47] !== _
      ? ((z = (0, $.jsx)(u, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: h,
          showDialogClose: g,
          onOpenChange: _,
          children: R,
        })),
        (t[44] = c.isPending),
        (t[45] = R),
        (t[46] = g),
        (t[47] = _),
        (t[48] = z))
      : (z = t[48]),
    z
  );
}
function Rt(e) {
  return (0, $.jsx)(`strong`, { children: e });
}
function zt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(S, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Bt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, $.jsx)(M, {
              id: `appgenSettings.error.title`,
              defaultMessage: `Unable to load site settings`,
              description: `Error state title for the site settings page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q,
  Vt,
  Ht,
  $,
  Ut,
  Wt = e(() => {
    ((Q = m()),
      K(),
      (Vt = t(pe(), 1)),
      j(),
      (Ht = t(v(), 1)),
      W(),
      h(),
      Fe(),
      b(),
      i(),
      F(),
      oe(),
      re(),
      E(),
      p(),
      P(),
      We(),
      ae(),
      d(),
      Oe(),
      I(),
      Pe(),
      Ke(),
      Be(),
      Re(),
      De(),
      we(),
      Ee(),
      dt(),
      vt(),
      G(),
      Ue(),
      xt(),
      Je(),
      qe(),
      Ve(),
      jt(),
      ($ = U()),
      (Ut = `appgen-settings-site-title-error`));
  });
export { Mt as n, Wt as r, Nt as t };
//# sourceMappingURL=appgen-settings-page-D6Wd-Ypf.js.map
