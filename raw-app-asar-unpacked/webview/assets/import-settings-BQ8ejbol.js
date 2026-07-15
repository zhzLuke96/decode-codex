import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Af as r,
  Aw as i,
  BX as a,
  C0 as o,
  Cw as s,
  Df as c,
  Fh as l,
  Fq as u,
  GJ as d,
  I2 as f,
  IK as p,
  JA as m,
  Jh as h,
  KJ as g,
  L2 as _,
  LK as v,
  Mq as y,
  Nq as b,
  P$ as x,
  Pq as S,
  SV as C,
  VX as w,
  WJ as T,
  XA as E,
  _0 as D,
  _Y as O,
  _f as k,
  _w as A,
  bf as j,
  cj as M,
  gf as N,
  hf as P,
  iw as ee,
  jw as te,
  k2 as F,
  lY as ne,
  mY as I,
  mf as re,
  ow as ie,
  qJ as ae,
  vw as oe,
  wV as L,
  x0 as R,
  yY as z,
  yw as se,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Br as ce,
  Hr as le,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as ue,
  d as de,
  o as fe,
  p as pe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as B,
  p as V,
  v as H,
  y as U,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  C as me,
  M as he,
  P as ge,
  S as _e,
  T as ve,
  b as ye,
  w as be,
  x as xe,
  y as Se,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as Ce,
  r as we,
} from "./app-initial~app-main~pets-settings~appearance-settings~import-settings~general-settings-DSr8wghM.js";
import {
  n as Te,
  t as W,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import {
  i as Ee,
  n as De,
  r as Oe,
  t as ke,
} from "./use-add-marketplace-D3QmIE0u.js";
function Ae(e) {
  let t = (0, G.c)(48),
    { category: n, history: r, onOpenChange: i } = e,
    a = z(),
    o,
    s,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i) {
    let e =
        n == null ? [] : r.successes.filter((e) => e.itemType === n.itemType),
      v = n == null ? [] : r.failures.filter((e) => e.itemType === n.itemType),
      y = n?.itemType,
      b;
    (t[15] === n
      ? (b = t[16])
      : ((b = n == null ? null : (0, K.jsx)(je, { itemType: n.itemType })),
        (t[15] = n),
        (t[16] = b)),
      (u = b),
      (l = c),
      (h = n != null),
      (g = i),
      (_ = `compact`),
      (s = re));
    let x;
    t[17] !== n || t[18] !== a
      ? ((x = n == null ? `` : he(a, n.itemType)),
        (t[17] = n),
        (t[18] = a),
        (t[19] = x))
      : (x = t[19]);
    let S;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, K.jsx)(O, {
          id: `settings.import.history.details.subtitle`,
          defaultMessage: `Imported and failed items from this category`,
          description: `Subtitle for the import history category details dialog`,
        })),
        (t[20] = S))
      : (S = t[20]),
      t[21] === x
        ? (m = t[22])
        : ((m = (0, K.jsx)(k, {
            children: (0, K.jsx)(N, { title: x, subtitle: S }),
          })),
          (t[21] = x),
          (t[22] = m)),
      (o = k),
      (d = `gap-2`),
      (f =
        y == null
          ? null
          : e.map((e, t) =>
              (0, K.jsx)(
                Me,
                {
                  itemType: y,
                  label: e.source,
                  status: `success`,
                  target: e.target,
                },
                `success-${t}`,
              ),
            )),
      (p =
        y == null
          ? null
          : v.map((e, t) =>
              (0, K.jsx)(
                Me,
                {
                  itemType: y,
                  failureMessage: e.message,
                  label: e.source,
                  status: `error`,
                },
                `failure-${t}`,
              ),
            )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _));
  } else
    ((o = t[4]),
      (s = t[5]),
      (l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]),
      (_ = t[14]));
  let v;
  t[23] !== o || t[24] !== d || t[25] !== f || t[26] !== p
    ? ((v = (0, K.jsxs)(o, { className: d, children: [f, p] })),
      (t[23] = o),
      (t[24] = d),
      (t[25] = f),
      (t[26] = p),
      (t[27] = v))
    : (v = t[27]);
  let b = u == null,
    x;
  t[28] === i
    ? (x = t[29])
    : ((x = () => {
        i(!1);
      }),
      (t[28] = i),
      (t[29] = x));
  let S;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, K.jsx)(O, {
        id: `settings.import.history.details.done`,
        defaultMessage: `Done`,
        description: `Button label to close import history category details`,
      })),
      (t[30] = S))
    : (S = t[30]);
  let C;
  t[31] === x
    ? (C = t[32])
    : ((C = (0, K.jsx)(y, { color: `primary`, onClick: x, children: S })),
      (t[31] = x),
      (t[32] = C));
  let w;
  t[33] !== u || t[34] !== C || t[35] !== b
    ? ((w = (0, K.jsx)(k, {
        children: (0, K.jsxs)(P, { expandSingleButton: b, children: [u, C] }),
      })),
      (t[33] = u),
      (t[34] = C),
      (t[35] = b),
      (t[36] = w))
    : (w = t[36]);
  let T;
  t[37] !== s || t[38] !== w || t[39] !== m || t[40] !== v
    ? ((T = (0, K.jsxs)(s, { children: [m, v, w] })),
      (t[37] = s),
      (t[38] = w),
      (t[39] = m),
      (t[40] = v),
      (t[41] = T))
    : (T = t[41]);
  let E;
  return (
    t[42] !== l || t[43] !== T || t[44] !== h || t[45] !== g || t[46] !== _
      ? ((E = (0, K.jsx)(l, {
          open: h,
          onOpenChange: g,
          size: _,
          children: T,
        })),
        (t[42] = l),
        (t[43] = T),
        (t[44] = h),
        (t[45] = g),
        (t[46] = _),
        (t[47] = E))
      : (E = t[47]),
    E
  );
}
function je(e) {
  let t = (0, G.c)(4),
    { itemType: n } = e;
  switch (n) {
    case `HOOKS`: {
      let e, n;
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = ce({ hostId: L })),
          (n = (0, K.jsx)(O, {
            id: `settings.import.history.details.viewHooks`,
            defaultMessage: `Open hooks settings`,
            description: `Link to review imported hooks`,
          })),
          (t[0] = e),
          (t[1] = n))
        : ((e = t[0]), (n = t[1]));
      let r;
      return (
        t[2] === e
          ? (r = t[3])
          : ((r = (0, K.jsx)(E, { className: q, to: e, children: n })),
            (t[2] = e),
            (t[3] = r)),
        r
      );
    }
    case `AGENTS_MD`:
    case `CONFIG`:
    case `MCP_SERVER_CONFIG`:
    case `SUBAGENTS`:
    case `COMMANDS`:
    case `PLUGINS`:
    case `SKILLS`:
    case `SESSIONS`:
      return null;
  }
}
function Me(e) {
  let t = (0, G.c)(16),
    n = null;
  if (e.status === `error`) n = e.failureMessage;
  else if (e.target == null) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(O, {
          id: `settings.import.history.details.imported`,
          defaultMessage: `Imported`,
          description: `Fallback destination label for a successful import history detail item`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (n = e));
  } else e.target !== e.label && (n = e.target);
  let r;
  t[1] !== e.itemType ||
  t[2] !== e.label ||
  t[3] !== e.status ||
  t[4] !== e.target
    ? ((r =
        e.status === `success` && e.label != null
          ? (0, K.jsx)(Ne, {
              itemType: e.itemType,
              label: e.label,
              target: e.target,
            })
          : null),
      (t[1] = e.itemType),
      (t[2] = e.label),
      (t[3] = e.status),
      (t[4] = e.target),
      (t[5] = r))
    : (r = t[5]);
  let i = r,
    a;
  t[6] === e.label
    ? (a = t[7])
    : ((a =
        e.label == null
          ? (0, K.jsx)(O, {
              id: `settings.import.history.details.unknownItem`,
              defaultMessage: `Imported item`,
              description: `Fallback label for an import history detail item without a source name`,
            })
          : e.label),
      (t[6] = e.label),
      (t[7] = a));
  let o;
  t[8] === a
    ? (o = t[9])
    : ((o = (0, K.jsx)(`div`, {
        className: `min-w-0 truncate text-token-text-primary`,
        children: a,
      })),
      (t[8] = a),
      (t[9] = o));
  let s;
  t[10] !== n || t[11] !== i
    ? ((s =
        n == null && i == null
          ? null
          : (0, K.jsxs)(`div`, {
              className: `flex min-w-0 items-center justify-end gap-3`,
              children: [
                n == null
                  ? null
                  : (0, K.jsx)(`div`, {
                      className: `min-w-0 truncate text-token-text-secondary`,
                      children: n,
                    }),
                i,
              ],
            })),
      (t[10] = n),
      (t[11] = i),
      (t[12] = s))
    : (s = t[12]);
  let c;
  return (
    t[13] !== o || t[14] !== s
      ? ((c = (0, K.jsxs)(`div`, {
          className: `flex min-w-0 items-center justify-between gap-3 rounded-md bg-token-bg-secondary px-3 py-2 text-sm`,
          children: [o, s],
        })),
        (t[13] = o),
        (t[14] = s),
        (t[15] = c))
      : (c = t[15]),
    c
  );
}
function Ne(e) {
  let t = (0, G.c)(16),
    { itemType: n, label: r, target: i } = e;
  if (n === `SKILLS` || n === `COMMANDS` || n === `MCP_SERVER_CONFIG`) {
    let e = `${n === `MCP_SERVER_CONFIG` ? `/settings/mcp-settings` : `/skills`}?search=${encodeURIComponent(i ?? r)}`,
      a;
    t[0] === n
      ? (a = t[1])
      : ((a =
          n === `MCP_SERVER_CONFIG`
            ? void 0
            : { initialHostId: L, initialTab: `skills` }),
        (t[0] = n),
        (t[1] = a));
    let o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, K.jsx)(O, {
          id: `settings.import.history.details.viewItem`,
          defaultMessage: `View`,
          description: `Link to view an imported item`,
        })),
        (t[2] = o))
      : (o = t[2]);
    let s;
    return (
      t[3] !== e || t[4] !== a
        ? ((s = (0, K.jsx)(E, { className: q, to: e, state: a, children: o })),
          (t[3] = e),
          (t[4] = a),
          (t[5] = s))
        : (s = t[5]),
      s
    );
  }
  if (n === `SESSIONS` && i != null) {
    let e;
    t[6] === i ? (e = t[7]) : ((e = a(x(i))), (t[6] = i), (t[7] = e));
    let n;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, K.jsx)(O, {
          id: `settings.import.history.details.viewItem`,
          defaultMessage: `View`,
          description: `Link to view an imported item`,
        })),
        (t[8] = n))
      : (n = t[8]);
    let r;
    return (
      t[9] === e
        ? (r = t[10])
        : ((r = (0, K.jsx)(E, { className: q, to: e, children: n })),
          (t[9] = e),
          (t[10] = r)),
      r
    );
  }
  if (n === `PLUGINS`) {
    let e = i ?? r,
      n;
    t[11] === e
      ? (n = t[12])
      : ((n = w({ hostId: L, pluginId: e })), (t[11] = e), (t[12] = n));
    let a;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, K.jsx)(O, {
          id: `settings.import.history.details.viewItem`,
          defaultMessage: `View`,
          description: `Link to view an imported item`,
        })),
        (t[13] = a))
      : (a = t[13]);
    let o;
    return (
      t[14] === n
        ? (o = t[15])
        : ((o = (0, K.jsx)(E, { className: q, to: n, children: a })),
          (t[14] = n),
          (t[15] = o)),
      o
    );
  }
  return null;
}
var G,
  K,
  q,
  Pe = e(() => {
    ((G = f()),
      n(),
      I(),
      m(),
      b(),
      r(),
      j(),
      ge(),
      le(),
      C(),
      (K = F()),
      (q = `cursor-interaction text-token-text-link-foreground hover:underline`));
  });
function Fe(e) {
  let t = (0, Y.c)(5),
    { entry: n, mcpServerStatuses: r } = e;
  if (n.kind === `running`) {
    let e;
    return (
      t[0] === n.runningImport
        ? (e = t[1])
        : ((e = (0, X.jsx)(Ie, { runningImport: n.runningImport })),
          (t[0] = n.runningImport),
          (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] !== n.history || t[3] !== r
      ? ((i = (0, X.jsx)(Le, { history: n.history, mcpServerStatuses: r })),
        (t[2] = n.history),
        (t[3] = r),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function Ie(e) {
  let t = (0, Y.c)(6),
    { runningImport: n } = e,
    r = z(),
    i;
  if (t[0] !== r || t[1] !== n.items) {
    let e = _e(n.items),
      a;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, X.jsx)(H, {
          label: (0, X.jsx)(O, {
            id: `settings.import.history.running`,
            defaultMessage: `Importing now`,
            description: `Header for an import history entry while its results are pending`,
          }),
          control: (0, X.jsx)(S, { className: `h-4 w-4` }),
        })),
        (t[3] = a))
      : (a = t[3]);
    let o;
    (t[4] === r
      ? (o = t[5])
      : ((o = (e) =>
          (0, X.jsx)(
            H,
            {
              variant: `nested`,
              label: he(r, e),
              control: (0, X.jsxs)(`div`, {
                className: `flex w-full min-w-0 items-center justify-end gap-4`,
                children: [
                  (0, X.jsx)(`div`, {
                    className: `min-w-0 text-sm text-token-text-secondary max-sm:hidden`,
                    children: (0, X.jsx)(Ve, { itemType: e }),
                  }),
                  (0, X.jsx)(J, {
                    tone: `running`,
                    children: (0, X.jsx)(O, {
                      id: `settings.import.history.runningBadge`,
                      defaultMessage: `Importing`,
                      description: `Status badge for an import history category while its results are pending`,
                    }),
                  }),
                ],
              }),
            },
            e,
          )),
        (t[4] = r),
        (t[5] = o)),
      (i = (0, X.jsxs)(B, { children: [a, e.map(o)] })),
      (t[0] = r),
      (t[1] = n.items),
      (t[2] = i));
  } else i = t[2];
  return i;
}
function Le(e) {
  let t = (0, Y.c)(40),
    { history: n, mcpServerStatuses: r } = e,
    i = ye(n),
    a = n.successes.length,
    o = n.failures.length,
    s;
  t[0] !== n || t[1] !== r
    ? ((s = me({ histories: [n], mcpServerStatuses: r })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let c = s.length,
    l;
  t[3] === n.successes
    ? (l = t[4])
    : ((l = n.successes.filter(ze)), (t[3] = n.successes), (t[4] = l));
  let u = c + l.length,
    [d, f] = (0, He.useState)(!1),
    [p, m] = (0, He.useState)(null),
    h = B,
    _;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        f(Re);
      }),
      (t[5] = _))
    : (_ = t[5]);
  let v = Number(n.completedAtMs),
    y;
  t[6] === v
    ? (y = t[7])
    : ((y = (0, X.jsx)(`span`, {
        className: `min-w-0 text-sm font-medium text-token-text-primary`,
        children: (0, X.jsx)(ne, {
          value: v,
          dateStyle: `medium`,
          timeStyle: `short`,
        }),
      })),
      (t[6] = v),
      (t[7] = y));
  let b;
  t[8] === a
    ? (b = t[9])
    : ((b = (0, X.jsxs)(J, {
        tone: `success`,
        children: [
          (0, X.jsx)(`span`, {
            className: `sr-only`,
            children: (0, X.jsx)(O, {
              id: `settings.import.history.importedCount`,
              defaultMessage: `{count} imported`,
              description: `Imported item count for an import history category`,
              values: { count: a },
            }),
          }),
          (0, X.jsx)(`span`, { "aria-hidden": !0, children: a }),
        ],
      })),
      (t[8] = a),
      (t[9] = b));
  let x;
  t[10] === o
    ? (x = t[11])
    : ((x = (0, X.jsxs)(J, {
        tone: `error`,
        children: [
          (0, X.jsx)(`span`, {
            className: `sr-only`,
            children: (0, X.jsx)(O, {
              id: `settings.import.history.failedCount`,
              defaultMessage: `{count} did not import`,
              description: `Failed item count for an import history category`,
              values: { count: o },
            }),
          }),
          (0, X.jsx)(`span`, { "aria-hidden": !0, children: o }),
        ],
      })),
      (t[10] = o),
      (t[11] = x));
  let S;
  t[12] === u
    ? (S = t[13])
    : ((S = (0, X.jsxs)(J, {
        tone: `warning`,
        children: [
          (0, X.jsx)(`span`, {
            className: `sr-only`,
            children: (0, X.jsx)(O, {
              id: `settings.import.history.warningCount`,
              defaultMessage: `{count} need review`,
              description: `Warning item count in a collapsed import history summary`,
              values: { count: u },
            }),
          }),
          (0, X.jsx)(`span`, { "aria-hidden": !0, children: u }),
        ],
      })),
      (t[12] = u),
      (t[13] = S));
  let C = d && `rotate-180`,
    w;
  t[14] === C
    ? (w = t[15])
    : ((w = g(
        `icon-xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
        C,
      )),
      (t[14] = C),
      (t[15] = w));
  let E;
  t[16] === w
    ? (E = t[17])
    : ((E = (0, X.jsx)(T, { "aria-hidden": !0, className: w })),
      (t[16] = w),
      (t[17] = E));
  let D;
  t[18] !== E || t[19] !== b || t[20] !== x || t[21] !== S
    ? ((D = (0, X.jsxs)(`span`, {
        className: `flex shrink-0 items-center gap-2`,
        children: [b, x, S, E],
      })),
      (t[18] = E),
      (t[19] = b),
      (t[20] = x),
      (t[21] = S),
      (t[22] = D))
    : (D = t[22]);
  let k;
  t[23] !== d || t[24] !== D || t[25] !== y
    ? ((k = (0, X.jsxs)(`button`, {
        type: `button`,
        "aria-expanded": d,
        className: `flex w-full cursor-interaction items-center justify-between gap-4 px-4 py-3 text-left`,
        onClick: _,
        children: [y, D],
      })),
      (t[23] = d),
      (t[24] = D),
      (t[25] = y),
      (t[26] = k))
    : (k = t[26]);
  let A = d
      ? i.length === 0
        ? (0, X.jsx)(H, {
            variant: `nested`,
            label: (0, X.jsx)(O, {
              id: `settings.import.history.noResults`,
              defaultMessage: `No results recorded`,
              description: `Label shown when an import history entry has no category results`,
            }),
            control: null,
          })
        : i.map((e) =>
            (0, X.jsx)(
              Be,
              {
                category: e,
                history: n,
                mcpServerStatuses: r,
                onDetails: () => {
                  m(e);
                },
              },
              e.itemType,
            ),
          )
      : null,
    j;
  t[27] !== h || t[28] !== k || t[29] !== A
    ? ((j = (0, X.jsxs)(h, { children: [k, A] })),
      (t[27] = h),
      (t[28] = k),
      (t[29] = A),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] === m
    ? (M = t[32])
    : ((M = (e) => {
        e || m(null);
      }),
      (t[31] = m),
      (t[32] = M));
  let N;
  t[33] !== p || t[34] !== n || t[35] !== M
    ? ((N = (0, X.jsx)(Ae, { category: p, history: n, onOpenChange: M })),
      (t[33] = p),
      (t[34] = n),
      (t[35] = M),
      (t[36] = N))
    : (N = t[36]);
  let P;
  return (
    t[37] !== j || t[38] !== N
      ? ((P = (0, X.jsxs)(X.Fragment, { children: [j, N] })),
        (t[37] = j),
        (t[38] = N),
        (t[39] = P))
      : (P = t[39]),
    P
  );
}
function Re(e) {
  return !e;
}
function ze(e) {
  return e.itemType === `HOOKS`;
}
function Be(e) {
  let t = (0, Y.c)(33),
    { category: n, history: r, mcpServerStatuses: i, onDetails: a } = e,
    o = z(),
    s;
  t[0] !== n.itemType || t[1] !== r || t[2] !== i
    ? ((s =
        n.itemType === `MCP_SERVER_CONFIG`
          ? me({ histories: [r], mcpServerStatuses: i }).length
          : 0),
      (t[0] = n.itemType),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  t[4] !== n.itemType || t[5] !== o
    ? ((l = he(o, n.itemType)), (t[4] = n.itemType), (t[5] = o), (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n.itemType
    ? (u = t[8])
    : ((u = (0, X.jsx)(`div`, {
        className: `min-w-0 text-sm text-token-text-secondary max-sm:hidden`,
        children: (0, X.jsx)(Ve, { itemType: n.itemType }),
      })),
      (t[7] = n.itemType),
      (t[8] = u));
  let d;
  t[9] === n.importedCount
    ? (d = t[10])
    : ((d =
        n.importedCount > 0
          ? (0, X.jsx)(J, {
              tone: `success`,
              children: (0, X.jsx)(O, {
                id: `settings.import.history.importedCount`,
                defaultMessage: `{count} imported`,
                description: `Imported item count for an import history category`,
                values: { count: n.importedCount },
              }),
            })
          : null),
      (t[9] = n.importedCount),
      (t[10] = d));
  let f;
  t[11] === c
    ? (f = t[12])
    : ((f =
        c > 0
          ? (0, X.jsx)(J, {
              tone: `warning`,
              children: (0, X.jsx)(O, {
                id: `settings.import.history.authRequiredCount`,
                defaultMessage: `{count} need auth`,
                description: `Imported MCP server count that still requires authentication`,
                values: { count: c },
              }),
            })
          : null),
      (t[11] = c),
      (t[12] = f));
  let p;
  t[13] !== n.importedCount || t[14] !== n.itemType
    ? ((p =
        n.itemType === `HOOKS` && n.importedCount > 0
          ? (0, X.jsx)(J, {
              tone: `warning`,
              children: (0, X.jsx)(O, {
                id: `settings.import.history.hooksNeedReview`,
                defaultMessage: `Review before running`,
                description: `Warning badge for imported hooks that should be reviewed before running`,
              }),
            })
          : null),
      (t[13] = n.importedCount),
      (t[14] = n.itemType),
      (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] === n.failedCount
    ? (m = t[17])
    : ((m =
        n.failedCount > 0
          ? (0, X.jsx)(J, {
              tone: `error`,
              children: (0, X.jsx)(O, {
                id: `settings.import.history.failedCount`,
                defaultMessage: `{count} did not import`,
                description: `Failed item count for an import history category`,
                values: { count: n.failedCount },
              }),
            })
          : null),
      (t[16] = n.failedCount),
      (t[17] = m));
  let h;
  t[18] !== d || t[19] !== f || t[20] !== p || t[21] !== m
    ? ((h = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center justify-end gap-1.5`,
        children: [d, f, p, m],
      })),
      (t[18] = d),
      (t[19] = f),
      (t[20] = p),
      (t[21] = m),
      (t[22] = h))
    : (h = t[22]);
  let g;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(O, {
        id: `settings.import.history.details`,
        defaultMessage: `Details`,
        description: `Button label to show details for an import history category`,
      })),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] === a
    ? (_ = t[25])
    : ((_ = (0, X.jsx)(y, {
        color: `ghost`,
        size: `toolbar`,
        onClick: a,
        children: g,
      })),
      (t[24] = a),
      (t[25] = _));
  let v;
  t[26] !== _ || t[27] !== u || t[28] !== h
    ? ((v = (0, X.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center justify-end gap-4`,
        children: [u, h, _],
      })),
      (t[26] = _),
      (t[27] = u),
      (t[28] = h),
      (t[29] = v))
    : (v = t[29]);
  let b;
  return (
    t[30] !== v || t[31] !== l
      ? ((b = (0, X.jsx)(H, { variant: `nested`, label: l, control: v })),
        (t[30] = v),
        (t[31] = l),
        (t[32] = b))
      : (b = t[32]),
    b
  );
}
function J(e) {
  let t = (0, Y.c)(8),
    { children: n, tone: r } = e,
    i =
      r === `success` &&
      `border-token-charts-green/30 bg-token-charts-green/15 text-token-charts-green`,
    a =
      r === `warning` &&
      `border-token-editor-warning-foreground/30 bg-token-editor-warning-background/30 text-token-editor-warning-foreground`,
    o =
      r === `error` &&
      `border-token-editor-error-foreground/30 bg-token-editor-error-foreground/15 text-token-editor-error-foreground`,
    s =
      r === `running` &&
      `border-token-border bg-token-bg-secondary text-token-text-secondary`,
    c;
  t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== s
    ? ((c = g(
        `inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none font-medium`,
        i,
        a,
        o,
        s,
      )),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== n || t[6] !== c
      ? ((l = (0, X.jsx)(`span`, { className: c, children: n })),
        (t[5] = n),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function Ve(e) {
  let t = (0, Y.c)(6),
    { itemType: n } = e;
  switch (n) {
    case `AGENTS_MD`:
    case `CONFIG`:
    case `SKILLS`:
    case `PLUGINS`:
    case `SUBAGENTS`:
    case `SESSIONS`:
      return null;
    case `MCP_SERVER_CONFIG`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(O, {
              id: `settings.import.history.destination.mcpServers`,
              defaultMessage: `Codex MCP configuration`,
              description: `Destination label for imported MCP server configuration`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `HOOKS`: {
      let e, n;
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = ce({ hostId: L })),
          (n = (0, X.jsx)(O, {
            id: `settings.import.history.destination.reviewHooks`,
            defaultMessage: `Review hooks`,
            description: `Link to review imported hooks in Hooks settings`,
          })),
          (t[1] = e),
          (t[2] = n))
        : ((e = t[1]), (n = t[2]));
      let r;
      return (
        t[3] === e
          ? (r = t[4])
          : ((r = (0, X.jsx)(E, {
              className: `cursor-interaction text-token-text-link-foreground hover:underline`,
              to: e,
              children: n,
            })),
            (t[3] = e),
            (t[4] = r)),
        r
      );
    }
    case `COMMANDS`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(O, {
              id: `settings.import.history.destination.commands`,
              defaultMessage: `Converted into Codex skills`,
              description: `Destination label for imported commands`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var Y,
  He,
  X,
  Ue = e(() => {
    ((Y = f()),
      ae(),
      (He = t(_(), 1)),
      I(),
      m(),
      b(),
      u(),
      be(),
      ge(),
      d(),
      le(),
      U(),
      V(),
      C(),
      Pe(),
      (X = F()));
  });
function We() {
  let e = (0, Ge.c)(29),
    t = o(ve),
    { data: n, error: r, isLoading: i, refetch: a } = R(Se, L),
    { data: s } = R(ie, L),
    c = t?.hostId === `local` ? t : null,
    [l, u] = (0, Ke.useState)(!1),
    d,
    f,
    p,
    m,
    h,
    g;
  if (e[0] !== n || e[1] !== s?.data || e[2] !== c || e[3] !== l) {
    ((m = xe({
      histories: (n == null || l ? n : n.slice(0, qe)) ?? [],
      runningImport: c,
    })),
      (p = n != null && n.length > qe && !l),
      (f = W),
      e[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, Z.jsx)(W.Header, {
            title: (0, Z.jsx)(O, {
              id: `settings.import.history.title`,
              defaultMessage: `Import history`,
              description: `Heading for the import history section`,
            }),
            subtitle: (0, Z.jsx)(O, {
              id: `settings.import.history.subtitle`,
              defaultMessage: `Current and previous import results`,
              description: `Subtitle for the import history section`,
            }),
          })),
          (e[10] = g))
        : (g = e[10]),
      (d = W.Content));
    let t;
    (e[11] === s?.data
      ? (t = e[12])
      : ((t = (e) =>
          (0, Z.jsx)(
            Fe,
            { entry: e, mcpServerStatuses: s?.data ?? [] },
            e.kind === `running`
              ? `running-${e.runningImport.startedAtMs}`
              : e.history.importId,
          )),
        (e[11] = s?.data),
        (e[12] = t)),
      (h = m.map(t)),
      (e[0] = n),
      (e[1] = s?.data),
      (e[2] = c),
      (e[3] = l),
      (e[4] = d),
      (e[5] = f),
      (e[6] = p),
      (e[7] = m),
      (e[8] = h),
      (e[9] = g));
  } else
    ((d = e[4]), (f = e[5]), (p = e[6]), (m = e[7]), (h = e[8]), (g = e[9]));
  let _;
  e[13] !== r || e[14] !== m || e[15] !== i || e[16] !== a
    ? ((_ = i
        ? (0, Z.jsx)(B, {
            children: (0, Z.jsx)(H, {
              label: (0, Z.jsx)(O, {
                id: `settings.import.history.loading`,
                defaultMessage: `Loading import history`,
                description: `Label shown while import history is loading`,
              }),
              control: (0, Z.jsx)(S, { className: `h-4 w-4` }),
            }),
          })
        : r == null
          ? m.length === 0
            ? (0, Z.jsx)(B, {
                children: (0, Z.jsx)(H, {
                  label: (0, Z.jsx)(O, {
                    id: `settings.import.history.empty`,
                    defaultMessage: `No imports yet`,
                    description: `Empty state shown when there is no import history`,
                  }),
                  control: null,
                }),
              })
            : null
          : (0, Z.jsx)(B, {
              children: (0, Z.jsx)(H, {
                label: (0, Z.jsx)(O, {
                  id: `settings.import.history.error`,
                  defaultMessage: `Couldn't load import history`,
                  description: `Error shown when import history cannot be loaded`,
                }),
                control: (0, Z.jsx)(y, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => {
                    a();
                  },
                  children: (0, Z.jsx)(O, {
                    id: `settings.import.history.retry`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry loading import history`,
                  }),
                }),
              }),
            })),
      (e[13] = r),
      (e[14] = m),
      (e[15] = i),
      (e[16] = a),
      (e[17] = _))
    : (_ = e[17]);
  let v;
  e[18] === p
    ? (v = e[19])
    : ((v = p
        ? (0, Z.jsx)(`div`, {
            className: `py-1`,
            children: (0, Z.jsx)(y, {
              className: `text-token-description-foreground hover:text-token-foreground`,
              color: `ghostMuted`,
              size: `default`,
              onClick: () => {
                u(!0);
              },
              children: (0, Z.jsx)(O, {
                id: `settings.import.history.viewMore`,
                defaultMessage: `View more`,
                description: `Link to reveal older import history entries`,
              }),
            }),
          })
        : null),
      (e[18] = p),
      (e[19] = v));
  let b;
  e[20] !== d || e[21] !== h || e[22] !== _ || e[23] !== v
    ? ((b = (0, Z.jsxs)(d, { children: [h, _, v] })),
      (e[20] = d),
      (e[21] = h),
      (e[22] = _),
      (e[23] = v),
      (e[24] = b))
    : (b = e[24]);
  let x;
  return (
    e[25] !== f || e[26] !== g || e[27] !== b
      ? ((x = (0, Z.jsxs)(f, { children: [g, b] })),
        (e[25] = f),
        (e[26] = g),
        (e[27] = b),
        (e[28] = x))
      : (x = e[28]),
    x
  );
}
var Ge,
  Ke,
  Z,
  qe,
  Je = e(() => {
    ((Ge = f()),
      D(),
      (Ke = t(_(), 1)),
      I(),
      b(),
      u(),
      be(),
      ee(),
      Te(),
      U(),
      V(),
      C(),
      Ue(),
      (Z = F()),
      (qe = 5));
  });
function Ye() {
  let e = (0, Ze.c)(22),
    { data: t, error: n, isLoading: r } = R(Se, L),
    { data: i, error: a, isLoading: o } = R(ie, L),
    s,
    c,
    l,
    u,
    d;
  if (
    e[0] !== t ||
    e[1] !== n ||
    e[2] !== r ||
    e[3] !== o ||
    e[4] !== i?.data ||
    e[5] !== a
  ) {
    let f = me({ histories: t ?? [], mcpServerStatuses: i?.data ?? [] }),
      p = r || o,
      m = n != null || a != null;
    ((l = W),
      e[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((d = (0, Q.jsx)(W.Header, {
            title: (0, Q.jsx)(O, {
              id: `settings.import.reauth.title`,
              defaultMessage: `Imported MCP servers requiring authentication`,
              description: `Heading for imported MCP servers that need authentication after import`,
            }),
            subtitle: (0, Q.jsx)(O, {
              id: `settings.import.reauth.subtitle`,
              defaultMessage: `Authenticate MCP servers imported from another AI app`,
              description: `Subtitle for imported MCP servers that need authentication after import`,
            }),
          })),
          (e[11] = d))
        : (d = e[11]),
      (c = W.Content),
      (s = B),
      (u = p
        ? (0, Q.jsx)(H, {
            label: (0, Q.jsx)(O, {
              id: `settings.import.reauth.loading`,
              defaultMessage: `Loading imported MCP servers`,
              description: `Label shown while imported MCP servers requiring authentication are loading`,
            }),
            control: (0, Q.jsx)(S, { className: `h-4 w-4` }),
          })
        : m
          ? (0, Q.jsx)(H, {
              label: (0, Q.jsx)(O, {
                id: `settings.import.reauth.error`,
                defaultMessage: `Couldn't load imported MCP servers`,
                description: `Error shown when imported MCP servers requiring authentication cannot be loaded`,
              }),
              control: null,
            })
          : f.length === 0
            ? (0, Q.jsx)(H, {
                label: (0, Q.jsx)(O, {
                  id: `settings.import.reauth.empty`,
                  defaultMessage: `No imported MCP servers need authentication`,
                  description: `Empty state shown when no imported MCP servers require authentication`,
                }),
                control: null,
              })
            : f.map(Xe)),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r),
      (e[3] = o),
      (e[4] = i?.data),
      (e[5] = a),
      (e[6] = s),
      (e[7] = c),
      (e[8] = l),
      (e[9] = u),
      (e[10] = d));
  } else ((s = e[6]), (c = e[7]), (l = e[8]), (u = e[9]), (d = e[10]));
  let f;
  e[12] !== s || e[13] !== u
    ? ((f = (0, Q.jsx)(s, { children: u })),
      (e[12] = s),
      (e[13] = u),
      (e[14] = f))
    : (f = e[14]);
  let p;
  e[15] !== c || e[16] !== f
    ? ((p = (0, Q.jsx)(c, { children: f })),
      (e[15] = c),
      (e[16] = f),
      (e[17] = p))
    : (p = e[17]);
  let m;
  return (
    e[18] !== l || e[19] !== d || e[20] !== p
      ? ((m = (0, Q.jsxs)(l, { children: [d, p] })),
        (e[18] = l),
        (e[19] = d),
        (e[20] = p),
        (e[21] = m))
      : (m = e[21]),
    m
  );
}
function Xe(e) {
  return (0, Q.jsx)(
    H,
    {
      label: e,
      description: (0, Q.jsx)(O, {
        id: `settings.import.reauth.required`,
        defaultMessage: `Authentication required`,
        description: `Description for an imported MCP server that requires authentication`,
      }),
      control: null,
    },
    e,
  );
}
var Ze,
  Q,
  Qe = e(() => {
    ((Ze = f()), D(), I(), u(), be(), ee(), Te(), U(), V(), C(), (Q = F()));
  });
function $e() {
  let e = (0, et.c)(27),
    t = M(),
    { data: n, isLoading: r } = o(se),
    i = o(oe),
    a = o(A),
    s = te(),
    c;
  e[0] === s
    ? (c = e[1])
    : ((c = { forceReloadPlugins: () => s(l), hostId: L }),
      (e[0] = s),
      (e[1] = c));
  let u = De(c),
    [d, f] = (0, tt.useState)(!1),
    m,
    h;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(ue, { slug: `import` })),
      (h = (0, $.jsx)(O, {
        id: `settings.import.subtitle`,
        defaultMessage: `Bring setup, projects, and chats from other AI apps into ChatGPT`,
        description: `Subtitle for the import settings page`,
      })),
      (e[2] = m),
      (e[3] = h))
    : ((m = e[2]), (h = e[3]));
  let g = r || a,
    _ = n == null ? void 0 : i,
    v;
  e[4] !== g || e[5] !== _
    ? ((v = (0, $.jsx)(Ce, {
        hostId: L,
        isActiveWorkspaceLoading: g,
        workspaceRoots: _,
      })),
      (e[4] = g),
      (e[5] = _),
      (e[6] = v))
    : (v = e[6]);
  let b, x;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(O, {
        id: `settings.import.marketplaces.title`,
        defaultMessage: `Plugin marketplaces`,
        description: `Heading for adding plugin marketplaces from the import settings page`,
      })),
      (x = (0, $.jsx)(O, {
        id: `settings.import.marketplaces.subtitle`,
        defaultMessage: `Add another plugin source to Codex`,
        description: `Subtitle for adding plugin marketplaces from the import settings page`,
      })),
      (e[7] = b),
      (e[8] = x))
    : ((b = e[7]), (x = e[8]));
  let S;
  e[9] === t
    ? (S = e[10])
    : ((S = () => {
        t(`/skills`, {
          state: {
            initialHostId: L,
            initialMode: `manage`,
            initialTab: `marketplace`,
          },
        });
      }),
      (e[9] = t),
      (e[10] = S));
  let C, w;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(O, {
        id: `settings.import.marketplaces.manage`,
        defaultMessage: `Manage`,
        description: `Button label for opening plugin marketplace management from the import settings page`,
      })),
      (C = (0, $.jsx)(p, { className: `icon-xs` })),
      (e[11] = C),
      (e[12] = w))
    : ((C = e[11]), (w = e[12]));
  let T;
  e[13] === S
    ? (T = e[14])
    : ((T = (0, $.jsxs)(y, {
        color: `secondary`,
        size: `toolbar`,
        onClick: S,
        children: [w, C],
      })),
      (e[13] = S),
      (e[14] = T));
  let E;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(y, {
        color: `secondary`,
        size: `toolbar`,
        onClick: () => {
          f(!0);
        },
        children: (0, $.jsx)(O, {
          id: `settings.import.marketplaces.add`,
          defaultMessage: `Add plugin marketplace`,
          description: `Button label for adding a plugin marketplace from the import settings page`,
        }),
      })),
      (e[15] = E))
    : (E = e[15]);
  let D;
  e[16] === T
    ? (D = e[17])
    : ((D = (0, $.jsx)(W, {
        children: (0, $.jsx)(W.Header, {
          title: b,
          subtitle: x,
          actions: (0, $.jsxs)($.Fragment, { children: [T, E] }),
        }),
      })),
      (e[16] = T),
      (e[17] = D));
  let k;
  e[18] !== u || e[19] !== d
    ? ((k = (0, $.jsx)(Oe, { open: d, onAddMarketplace: u, onOpenChange: f })),
      (e[18] = u),
      (e[19] = d),
      (e[20] = k))
    : (k = e[20]);
  let j, N;
  e[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(We, {})),
      (N = (0, $.jsx)(Ye, {})),
      (e[21] = j),
      (e[22] = N))
    : ((j = e[21]), (N = e[22]));
  let P;
  return (
    e[23] !== D || e[24] !== k || e[25] !== v
      ? ((P = (0, $.jsxs)(de, {
          title: m,
          subtitle: h,
          children: [v, D, k, j, N],
        })),
        (e[23] = D),
        (e[24] = k),
        (e[25] = v),
        (e[26] = P))
      : (P = e[26]),
    P
  );
}
var et, tt, $;
e(() => {
  ((et = f()),
    D(),
    (tt = t(_(), 1)),
    I(),
    m(),
    b(),
    we(),
    v(),
    Ee(),
    ke(),
    h(),
    i(),
    s(),
    pe(),
    Te(),
    fe(),
    C(),
    Je(),
    Qe(),
    ($ = F()));
})();
export { $e as ImportSettings };
//# sourceMappingURL=import-settings-BQ8ejbol.js.map
