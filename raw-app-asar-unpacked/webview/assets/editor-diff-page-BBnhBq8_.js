import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  BA as r,
  C0 as i,
  Cu as a,
  Cw as o,
  DK as s,
  I2 as c,
  JA as l,
  L2 as u,
  Mq as ee,
  Nq as d,
  S0 as te,
  Su as f,
  Tu as p,
  WA as m,
  _0 as h,
  _Y as g,
  k2 as _,
  kK as v,
  mY as y,
  oj as b,
  wu as x,
  yY as S,
  yw as ne,
  zZ as re,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Tc as ie,
  wc as C,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  An as w,
  Jo as T,
  Ot as ae,
  Xo as E,
  Yo as D,
  Zo as O,
  ic as k,
  kn as oe,
  kt as A,
  rc as j,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  o as M,
  r as N,
  s as P,
} from "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~b8am3atz-CACjZP_E.js";
import {
  n as se,
  t as F,
} from "./app-initial~artifact-tab-content.electron~app-main~new-thread-panel-page~onboarding-page~pr~hvg1xey5-Civ_pNCm.js";
function I() {
  let e = (0, B.c)(5),
    t = z();
  if (`error` in t) {
    let n;
    return (
      e[0] === t.error
        ? (n = e[1])
        : ((n = (0, H.jsx)(`div`, {
            className: `p-4 text-token-error-foreground`,
            children: t.error,
          })),
          (e[0] = t.error),
          (e[1] = n)),
      n
    );
  }
  let n;
  return (
    e[2] !== t.conversationId || e[3] !== t.diffContent
      ? ((n = (0, H.jsx)(L, {
          diffContent: t.diffContent,
          conversationId: t.conversationId,
        })),
        (e[2] = t.conversationId),
        (e[3] = t.diffContent),
        (e[4] = n))
      : (n = e[4]),
    n
  );
}
function L(e) {
  let t = (0, B.c)(61),
    { diffContent: n, conversationId: a } = e,
    o = te(r),
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = { conversationId: a, enablePullRequestComments: !1 }),
      (t[0] = a),
      (t[1] = c));
  let { commentProps: l } = se(c),
    u;
  t[2] === n ? (u = t[3]) : ((u = ie(n)), (t[2] = n), (t[3] = u));
  let d = u,
    p;
  t[4] === d ? (p = t[5]) : ((p = ae(d)), (t[4] = d), (t[5] = p));
  let m = p,
    h = i(N),
    _ = i(P),
    v = S(),
    { data: y } = i(ne),
    C = b().state?.cwd || y?.roots?.[0],
    { fileCount: w, linesAdded: T, linesDeleted: E } = m,
    D = w <= U && T + E <= W,
    O;
  t[6] === w
    ? (O = t[7])
    : ((O = (0, H.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, H.jsx)(g, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: w },
        }),
      })),
      (t[6] = w),
      (t[7] = O));
  let k;
  t[8] !== T || t[9] !== E
    ? ((k =
        (T > 0 || E > 0) &&
        (0, H.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, H.jsx)(`span`, {
              className: `text-token-charts-green`,
              children: (0, H.jsx)(g, {
                id: `codex.diffView.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                description: `Label for lines added in DiffView`,
                values: { linesAdded: T },
              }),
            }),
            (0, H.jsx)(`span`, {
              className: `text-token-charts-red`,
              children: (0, H.jsx)(g, {
                id: `codex.diffView.linesDeleted`,
                defaultMessage: `-{linesDeleted}`,
                description: `Label for lines deleted in DiffView`,
                values: { linesDeleted: E },
              }),
            }),
          ],
        })),
      (t[8] = T),
      (t[9] = E),
      (t[10] = k))
    : (k = t[10]);
  let A;
  t[11] !== O || t[12] !== k
    ? ((A = (0, H.jsxs)(`div`, {
        className: `flex items-center gap-2 text-sm`,
        children: [O, k],
      })),
      (t[11] = O),
      (t[12] = k),
      (t[13] = A))
    : (A = t[13]);
  let j;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = { id: `left`, label: (0, H.jsx)(ce, { className: `icon-xs` }) }),
      (t[14] = j))
    : (j = t[14]);
  let M;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = [
        j,
        { id: `right`, label: (0, H.jsx)(le, { className: `icon-xs` }) },
      ]),
      (t[15] = M))
    : (M = t[15]);
  let F = h === `unified` ? `left` : `right`,
    I;
  t[16] === o
    ? (I = t[17])
    : ((I = (e) => o.set(N, e === `left` ? `unified` : `split`)),
      (t[16] = o),
      (t[17] = I));
  let L;
  t[18] !== I || t[19] !== F
    ? ((L = (0, H.jsx)(oe, {
        options: M,
        selectedId: F,
        onSelect: I,
        size: `toolbar`,
      })),
      (t[18] = I),
      (t[19] = F),
      (t[20] = L))
    : (L = t[20]);
  let z;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, H.jsx)(g, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (t[21] = z))
    : (z = t[21]);
  let V;
  t[22] === v
    ? (V = t[23])
    : ((V = v.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (t[22] = v),
      (t[23] = V));
  let G = _ ? `ghostActive` : `ghost`,
    K;
  t[24] !== _ || t[25] !== o
    ? ((K = () => o.set(P, !_)), (t[24] = _), (t[25] = o), (t[26] = K))
    : (K = t[26]);
  let q;
  t[27] === _
    ? (q = t[28])
    : ((q = _
        ? (0, H.jsx)(x, {
            className: `icon-xs text-token-description-foreground`,
          })
        : (0, H.jsx)(f, {
            className: `icon-xs text-token-description-foreground`,
          })),
      (t[27] = _),
      (t[28] = q));
  let J;
  t[29] !== _ || t[30] !== V || t[31] !== G || t[32] !== K || t[33] !== q
    ? ((J = (0, H.jsx)(s, {
        tooltipContent: z,
        children: (0, H.jsx)(ee, {
          "aria-label": V,
          "aria-pressed": _,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (t[29] = _),
      (t[30] = V),
      (t[31] = G),
      (t[32] = K),
      (t[33] = q),
      (t[34] = J))
    : (J = t[34]);
  let Y;
  t[35] !== L || t[36] !== J
    ? ((Y = (0, H.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [L, J],
      })),
      (t[35] = L),
      (t[36] = J),
      (t[37] = Y))
    : (Y = t[37]);
  let X;
  t[38] !== Y || t[39] !== A
    ? ((X = (0, H.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [A, Y],
      })),
      (t[38] = Y),
      (t[39] = A),
      (t[40] = X))
    : (X = t[40]);
  let Z;
  if (
    t[41] !== l ||
    t[42] !== a ||
    t[43] !== C ||
    t[44] !== d ||
    t[45] !== h ||
    t[46] !== _ ||
    t[47] !== D
  ) {
    let e;
    (t[49] !== l ||
    t[50] !== a ||
    t[51] !== C ||
    t[52] !== h ||
    t[53] !== _ ||
    t[54] !== D
      ? ((e = (e, t) =>
          (0, H.jsx)(
            R,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: h,
              richPreviewEnabled: _,
              stickyHeader: !0,
              diffViewWrap: !1,
              initialOpen: D && e.metadata.type !== `deleted`,
              cwd: C == null ? null : re(C),
              conversationId: a,
              fullContentNextFallbackToDisk: !0,
              ...l,
            },
            t,
          )),
        (t[49] = l),
        (t[50] = a),
        (t[51] = C),
        (t[52] = h),
        (t[53] = _),
        (t[54] = D),
        (t[55] = e))
      : (e = t[55]),
      (Z = d.map(e)),
      (t[41] = l),
      (t[42] = a),
      (t[43] = C),
      (t[44] = d),
      (t[45] = h),
      (t[46] = _),
      (t[47] = D),
      (t[48] = Z));
  } else Z = t[48];
  let Q;
  t[56] === Z
    ? (Q = t[57])
    : ((Q = (0, H.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (t[56] = Z),
      (t[57] = Q));
  let $;
  return (
    t[58] !== X || t[59] !== Q
      ? (($ = (0, H.jsxs)(`div`, {
          className: `flex h-full flex-col`,
          children: [X, Q],
        })),
        (t[58] = X),
        (t[59] = Q),
        (t[60] = $))
      : ($ = t[60]),
    $
  );
}
function R(e) {
  let t = (0, B.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ initialOpen: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let [i, a] = (0, V.useState)(n),
    o;
  return (
    t[3] !== i || t[4] !== r
      ? ((o = (0, H.jsx)(j, { ...r, open: i, onOpenChange: a })),
        (t[3] = i),
        (t[4] = r),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function z() {
  let e = (0, B.c)(11),
    t = S(),
    n = b(),
    r;
  bb0: {
    let i = n.state;
    if (i?.unifiedDiff && i.conversationId)
      try {
        let t = i.conversationId ?? null,
          n;
        (e[0] !== i.unifiedDiff || e[1] !== t
          ? ((n = { diffContent: i.unifiedDiff, conversationId: t }),
            (e[0] = i.unifiedDiff),
            (e[1] = t),
            (e[2] = n))
          : (n = e[2]),
          (r = n));
        break bb0;
      } catch {
        let n;
        e[3] === t
          ? (n = e[4])
          : ((n = t.formatMessage({
              id: `codex.diffView.failedToDecodeBase64Diff`,
              defaultMessage: `Couldn’t load this diff`,
              description: `Error message displayed when the diff cannot be decoded`,
            })),
            (e[3] = t),
            (e[4] = n));
        let i;
        (e[5] === n ? (i = e[6]) : ((i = { error: n }), (e[5] = n), (e[6] = i)),
          (r = i));
        break bb0;
      }
    let a;
    e[7] === t
      ? (a = e[8])
      : ((a = t.formatMessage({
          id: `codex.diffView.noDiffData`,
          defaultMessage: `No diff available`,
          description: `Error message displayed when there is no diff data`,
        })),
        (e[7] = t),
        (e[8] = a));
    let o;
    (e[9] === a ? (o = e[10]) : ((o = { error: a }), (e[9] = a), (e[10] = o)),
      (r = o));
  }
  return r;
}
function ce(e) {
  let t = (0, B.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, H.jsx)(g, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, H.jsx)(s, {
          tooltipContent: r,
          children: (0, H.jsx)(T, { className: n }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function le(e) {
  let t = (0, B.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, H.jsx)(g, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, H.jsx)(s, {
          tooltipContent: r,
          children: (0, H.jsx)(E, { className: n }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var B, V, H, U, W;
e(() => {
  ((B = c()),
    h(),
    n(),
    (V = t(u(), 1)),
    y(),
    l(),
    d(),
    w(),
    v(),
    O(),
    D(),
    p(),
    a(),
    m(),
    o(),
    k(),
    A(),
    M(),
    C(),
    F(),
    (H = _()),
    (U = 25),
    (W = 2e3));
})();
export { I as EditorDiffPage };
//# sourceMappingURL=editor-diff-page-BBnhBq8_.js.map
