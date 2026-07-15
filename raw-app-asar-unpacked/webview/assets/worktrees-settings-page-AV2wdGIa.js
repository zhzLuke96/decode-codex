import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AH as n,
  AY as r,
  Af as i,
  C0 as a,
  CS as o,
  CV as s,
  Cw as c,
  Df as l,
  Fq as u,
  I2 as d,
  Kq as f,
  L2 as p,
  MU as m,
  Mq as h,
  NU as g,
  Nq as _,
  Ow as v,
  Pq as y,
  QY as b,
  S0 as x,
  SK as S,
  SV as C,
  Yq as w,
  Zq as T,
  _0 as E,
  _Y as D,
  _f as O,
  aJ as k,
  bJ as A,
  bK as j,
  bf as M,
  c$ as N,
  cD as P,
  cO as F,
  cY as I,
  cp as L,
  gf as R,
  hf as z,
  ii as B,
  k2 as V,
  kH as H,
  kS as U,
  lD as W,
  lW as G,
  lp as K,
  mY as ee,
  mf as te,
  nK as ne,
  qY as re,
  ri as ie,
  s$ as ae,
  sO as oe,
  sW as se,
  sY as ce,
  tJ as le,
  x0 as ue,
  x2 as de,
  y2 as fe,
  yJ as pe,
  yY as q,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  F as me,
  N as he,
  ft as ge,
  pt as _e,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  En as ve,
  On as ye,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  $t as be,
  Qt as xe,
  ct as Se,
  ot as Ce,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  a as we,
  d as Te,
  l as Ee,
  o as De,
  p as Oe,
  u as ke,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as Ae,
  p as je,
  v as Me,
  y as Ne,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as Pe,
  rt as Fe,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as Ie,
  t as J,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as Le, t as Re } from "./use-codex-worktrees-BJuMBVBz.js";
function ze() {
  let e = (0, Ve.c)(66),
    t = x(ce),
    n = q(),
    [r, i] = (0, He.useState)(!1),
    [a, o] = (0, He.useState)(null),
    s = T(re.autoCleanupEnabled),
    c = T(re.keepCount),
    l;
  e[0] === t
    ? (l = e[1])
    : ((l = (e) => w(t, re.autoCleanupEnabled, e)), (e[0] = t), (e[1] = l));
  let u, d;
  e[2] !== n || e[3] !== t
    ? ((u = (e, r) => {
        if (r) {
          t.get(S).success(
            n.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        t.get(S).success(
          n.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (d = () => {
        t.get(S).danger(
          n.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = u),
      (e[5] = d))
    : ((u = e[4]), (d = e[5]));
  let f;
  e[6] !== l || e[7] !== u || e[8] !== d
    ? ((f = { mutationFn: l, onSuccess: u, onError: d }),
      (e[6] = l),
      (e[7] = u),
      (e[8] = d),
      (e[9] = f))
    : (f = e[9]);
  let p = de(f),
    m;
  e[10] === t
    ? (m = e[11])
    : ((m = (e) => w(t, re.keepCount, e)), (e[10] = t), (e[11] = m));
  let h, g;
  e[12] !== n || e[13] !== t
    ? ((h = () => {
        (o(null),
          t.get(S).success(
            n.formatMessage({
              id: `settings.worktrees.keepCount.save.success`,
              defaultMessage: `Saved auto-delete limit`,
              description: `Toast shown when the worktree auto-delete limit is saved`,
            }),
          ));
      }),
      (g = () => {
        t.get(S).danger(
          n.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = h),
      (e[15] = g))
    : ((h = e[14]), (g = e[15]));
  let _;
  e[16] !== m || e[17] !== h || e[18] !== g
    ? ((_ = { mutationFn: m, onSuccess: h, onError: g }),
      (e[16] = m),
      (e[17] = h),
      (e[18] = g),
      (e[19] = _))
    : (_ = e[19]);
  let v = de(_),
    y = String(c),
    b = a ?? y,
    C = p.isPending,
    E = v.isPending || C || !s,
    O;
  e[20] !== C || e[21] !== p
    ? ((O = (e) => {
        if (!C) {
          if (e) {
            p.mutate(!0);
            return;
          }
          i(!0);
        }
      }),
      (e[20] = C),
      (e[21] = p),
      (e[22] = O))
    : (O = e[22]);
  let k = O,
    A;
  e[23] === p
    ? (A = e[24])
    : ((A = () => {
        (o(null), i(!1), p.mutate(!1));
      }),
      (e[23] = p),
      (e[24] = A));
  let j = A,
    M;
  e[25] !== E || e[26] !== c || e[27] !== a || e[28] !== v
    ? ((M = () => {
        if (E || a == null) return;
        let e = a.trim(),
          t = Number.parseInt(e, 10);
        if (e.length === 0 || Number.isNaN(t)) {
          o(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === c) {
          o(null);
          return;
        }
        v.mutate(n);
      }),
      (e[25] = E),
      (e[26] = c),
      (e[27] = a),
      (e[28] = v),
      (e[29] = M))
    : (M = e[29]);
  let N = M,
    P,
    F;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Y.jsx)(D, {
        id: `settings.worktrees.autoCleanup.label`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Label for the automatic worktree deletion toggle`,
      })),
      (F = (0, Y.jsx)(D, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (e[30] = P),
      (e[31] = F))
    : ((P = e[30]), (F = e[31]));
  let I;
  e[32] === n
    ? (I = e[33])
    : ((I = n.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (e[32] = n),
      (e[33] = I));
  let L;
  e[34] !== s || e[35] !== k || e[36] !== C || e[37] !== I
    ? ((L = (0, Y.jsx)(Me, {
        label: P,
        description: F,
        control: (0, Y.jsx)(Fe, {
          checked: s,
          disabled: C,
          onChange: k,
          ariaLabel: I,
        }),
      })),
      (e[34] = s),
      (e[35] = k),
      (e[36] = C),
      (e[37] = I),
      (e[38] = L))
    : (L = e[38]);
  let R;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(D, {
        id: `settings.worktrees.keepCount.label`,
        defaultMessage: `Auto-delete limit`,
        description: `Label for the worktree auto-delete limit setting`,
      })),
      (e[39] = R))
    : (R = e[39]);
  let z;
  e[40] === s
    ? (z = e[41])
    : ((z = s
        ? (0, Y.jsx)(D, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, Y.jsx)(D, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (e[40] = s),
      (e[41] = z));
  let B;
  e[42] !== E || e[43] !== y
    ? ((B = (e) => {
        if (E) return;
        let t = e.target.value;
        o(t === y ? null : t);
      }),
      (e[42] = E),
      (e[43] = y),
      (e[44] = B))
    : (B = e[44]);
  let V;
  e[45] === N
    ? (V = e[46])
    : ((V = (e) => {
        e.key === `Enter` && (e.preventDefault(), N());
      }),
      (e[45] = N),
      (e[46] = V));
  let H;
  e[47] === n
    ? (H = e[48])
    : ((H = n.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (e[47] = n),
      (e[48] = H));
  let U;
  e[49] !== N ||
  e[50] !== E ||
  e[51] !== b ||
  e[52] !== B ||
  e[53] !== V ||
  e[54] !== H
    ? ((U = (0, Y.jsx)(`div`, {
        className: `ml-6`,
        children: (0, Y.jsx)(`input`, {
          className: `w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: b,
          onChange: B,
          onBlur: N,
          onKeyDown: V,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": H,
          disabled: E,
        }),
      })),
      (e[49] = N),
      (e[50] = E),
      (e[51] = b),
      (e[52] = B),
      (e[53] = V),
      (e[54] = H),
      (e[55] = U))
    : (U = e[55]);
  let W;
  e[56] !== z || e[57] !== U
    ? ((W = (0, Y.jsx)(Me, { label: R, description: z, control: U })),
      (e[56] = z),
      (e[57] = U),
      (e[58] = W))
    : (W = e[58]);
  let G;
  e[59] !== j || e[60] !== r
    ? ((G = (0, Y.jsx)(Be, { open: r, onOpenChange: i, onConfirm: j })),
      (e[59] = j),
      (e[60] = r),
      (e[61] = G))
    : (G = e[61]);
  let K;
  return (
    e[62] !== L || e[63] !== W || e[64] !== G
      ? ((K = (0, Y.jsxs)(Y.Fragment, { children: [L, W, G] })),
        (e[62] = L),
        (e[63] = W),
        (e[64] = G),
        (e[65] = K))
      : (K = e[65]),
    K
  );
}
function Be(e) {
  let t = (0, Ve.c)(19),
    { open: n, onOpenChange: r, onConfirm: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(O, {
        children: (0, Y.jsx)(R, {
          title: (0, Y.jsx)(D, {
            id: `settings.worktrees.autoCleanup.confirm.title`,
            defaultMessage: `Disable automatic worktree deletion?`,
            description: `Title for the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(O, {
        className: `text-token-description-foreground`,
        children: (0, Y.jsx)(`p`, {
          children: (0, Y.jsx)(D, {
            id: `settings.worktrees.autoCleanup.confirm.body`,
            defaultMessage: `We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and ChatGPT will stop deleting them automatically.`,
            description: `Body copy in the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = () => {
        r(!1);
      }),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Y.jsx)(D, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = c))
    : (c = t[4]);
  let u;
  t[5] === s
    ? (u = t[6])
    : ((u = (0, Y.jsx)(h, { color: `ghost`, onClick: s, children: c })),
      (t[5] = s),
      (t[6] = u));
  let d;
  t[7] === i
    ? (d = t[8])
    : ((d = () => {
        i();
      }),
      (t[7] = i),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(D, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === d
    ? (p = t[11])
    : ((p = (0, Y.jsx)(h, { color: `danger`, onClick: d, children: f })),
      (t[10] = d),
      (t[11] = p));
  let m;
  t[12] !== u || t[13] !== p
    ? ((m = (0, Y.jsxs)(te, {
        children: [
          a,
          o,
          (0, Y.jsx)(O, { children: (0, Y.jsxs)(z, { children: [u, p] }) }),
        ],
      })),
      (t[12] = u),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let g;
  return (
    t[15] !== r || t[16] !== n || t[17] !== m
      ? ((g = (0, Y.jsx)(l, {
          open: n,
          showDialogClose: !1,
          onOpenChange: r,
          children: m,
        })),
        (t[15] = r),
        (t[16] = n),
        (t[17] = m),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
var Ve,
  He,
  Y,
  Ue = e(() => {
    ((Ve = d()),
      fe(),
      E(),
      r(),
      (He = t(p(), 1)),
      ee(),
      _(),
      i(),
      M(),
      j(),
      Pe(),
      I(),
      f(),
      Ne(),
      (Y = V()));
  });
function We() {
  let e = (0, Ge.c)(36),
    t = x(ce),
    n = q(),
    r = T(b.worktreeRoot),
    [i, a] = (0, Ke.useState)(null),
    o;
  e[0] === t
    ? (o = e[1])
    : ((o = (e) => w(t, b.worktreeRoot, e)), (e[0] = t), (e[1] = o));
  let s, c;
  e[2] !== n || e[3] !== t
    ? ((s = () => {
        (a(null),
          t.get(S).success(
            n.formatMessage({
              id: `settings.git.worktreeRoot.save.success`,
              defaultMessage: `Saved worktree root`,
              description: `Toast shown when git worktree root is saved`,
            }),
          ));
      }),
      (c = () => {
        t.get(S).danger(
          n.formatMessage({
            id: `settings.git.worktreeRoot.save.error`,
            defaultMessage: `Failed to save worktree root`,
            description: `Toast shown when git worktree root save fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = s),
      (e[5] = c))
    : ((s = e[4]), (c = e[5]));
  let l;
  e[6] !== o || e[7] !== s || e[8] !== c
    ? ((l = { mutationFn: o, onSuccess: s, onError: c }),
      (e[6] = o),
      (e[7] = s),
      (e[8] = c),
      (e[9] = l))
    : (l = e[9]);
  let u = de(l),
    d = r ?? ``,
    f = i ?? d,
    p = i != null && i !== d,
    m = u.isPending,
    h;
  e[10] !== m || e[11] !== p || e[12] !== u || e[13] !== f
    ? ((h = () => {
        !p || m || u.mutate(f.trim());
      }),
      (e[10] = m),
      (e[11] = p),
      (e[12] = u),
      (e[13] = f),
      (e[14] = h))
    : (h = e[14]);
  let g = h,
    _ = p && !m,
    v;
  e[15] === g
    ? (v = e[16])
    : ((v = (e) => {
        (e.preventDefault(), g());
      }),
      (e[15] = g),
      (e[16] = v));
  let y;
  (e[17] !== _ || e[18] !== v
    ? ((y = { accelerator: `CmdOrCtrl+S`, enabled: _, onKeyDown: v }),
      (e[17] = _),
      (e[18] = v),
      (e[19] = y))
    : (y = e[19]),
    me(y));
  let C, E;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(D, {
        id: `settings.git.worktreeRoot.label`,
        defaultMessage: `Worktree root`,
        description: `Label for git worktree root setting`,
      })),
      (E = (0, X.jsx)(D, {
        id: `settings.git.worktreeRoot.description`,
        defaultMessage: `Directory where ChatGPT creates managed worktrees; leave blank to use the default location`,
        description: `Description for git worktree root setting`,
      })),
      (e[20] = C),
      (e[21] = E))
    : ((C = e[20]), (E = e[21]));
  let O;
  e[22] !== m || e[23] !== d
    ? ((O = (e) => {
        if (m) return;
        let t = e.target.value;
        a(t === d ? null : t);
      }),
      (e[22] = m),
      (e[23] = d),
      (e[24] = O))
    : (O = e[24]);
  let k;
  e[25] === n
    ? (k = e[26])
    : ((k = n.formatMessage({
        id: `settings.git.worktreeRoot.placeholder`,
        defaultMessage: `Default`,
        description: `Placeholder for git worktree root input`,
      })),
      (e[25] = n),
      (e[26] = k));
  let A;
  e[27] === n
    ? (A = e[28])
    : ((A = n.formatMessage({
        id: `settings.git.worktreeRoot.ariaLabel`,
        defaultMessage: `Worktree root`,
        description: `Aria label for git worktree root input`,
      })),
      (e[27] = n),
      (e[28] = A));
  let j;
  return (
    e[29] !== g ||
    e[30] !== m ||
    e[31] !== O ||
    e[32] !== k ||
    e[33] !== A ||
    e[34] !== f
      ? ((j = (0, X.jsx)(Me, {
          label: C,
          description: E,
          control: (0, X.jsx)(`input`, {
            className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
            value: f,
            onChange: O,
            onBlur: g,
            placeholder: k,
            "aria-label": A,
            disabled: m,
          }),
        })),
        (e[29] = g),
        (e[30] = m),
        (e[31] = O),
        (e[32] = k),
        (e[33] = A),
        (e[34] = f),
        (e[35] = j))
      : (j = e[35]),
    j
  );
}
var Ge,
  Ke,
  X,
  qe = e(() => {
    ((Ge = d()),
      fe(),
      E(),
      r(),
      (Ke = t(p(), 1)),
      ee(),
      j(),
      he(),
      I(),
      f(),
      Ne(),
      (X = V()));
  });
function Je() {
  let e = (0, Ye.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(L, {
          electron: !0,
          children: (0, Z.jsxs)(Ae, {
            children: [(0, Z.jsx)(We, {}), (0, Z.jsx)(ze, {})],
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Ye,
  Z,
  Xe = e(() => {
    ((Ye = d()), K(), Ue(), qe(), je(), (Z = V()));
  });
function Ze() {
  let e = (0, ot.c)(64),
    t = q(),
    { selectedHostId: n } = Se(),
    r = s(n),
    i = r.kind === `local`,
    {
      data: a,
      isLoading: o,
      isFetching: c,
      error: l,
      refetch: u,
    } = Le(r, `worktrees_settings_page`),
    d;
  e[0] === n ? (d = e[1]) : ((d = { hostId: n }), (e[0] = n), (e[1] = d));
  let { data: f, isLoading: p, error: m } = ue(v, d),
    { data: g, isLoading: _ } = U(),
    y = be(),
    b,
    x;
  if (
    e[2] !== g ||
    e[3] !== t ||
    e[4] !== y ||
    e[5] !== _ ||
    e[6] !== i ||
    e[7] !== p ||
    e[8] !== c ||
    e[9] !== o ||
    e[10] !== u ||
    e[11] !== n ||
    e[12] !== f?.roots ||
    e[13] !== m ||
    e[14] !== a?.worktrees ||
    e[15] !== l
  ) {
    x = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let r = tt(a?.worktrees ?? [], f?.roots ?? []),
        s,
        d;
      if (e[18] !== g || e[19] !== y || e[20] !== n) {
        let t;
        (e[23] === n
          ? (t = e[24])
          : ((t = (e) => it(e) === n), (e[23] = n), (e[24] = t)),
          (s = (g ?? []).filter(t)));
        let r;
        (e[25] === y
          ? (r = e[26])
          : ((r = (e) => !G(e, y)), (e[25] = y), (e[26] = r)),
          (d = s.filter(r)),
          (e[18] = g),
          (e[19] = y),
          (e[20] = n),
          (e[21] = s),
          (e[22] = d));
      } else ((s = e[21]), (d = e[22]));
      let v = d,
        S = et(r),
        C;
      e[27] === t
        ? (C = e[28])
        : ((C = t.formatMessage({
            id: `settings.worktrees.refresh`,
            defaultMessage: `Refresh`,
            description: `Button label to refresh the worktree list`,
          })),
          (e[27] = t),
          (e[28] = C));
      let w = C,
        T;
      e[29] === u
        ? (T = e[30])
        : ((T = () => {
            u();
          }),
          (e[29] = u),
          (e[30] = T));
      let E;
      e[31] === c
        ? (E = e[32])
        : ((E = c ? null : (0, $.jsx)(ge, { className: `icon-xs` })),
          (e[31] = c),
          (e[32] = E));
      let O;
      e[33] !== c || e[34] !== w || e[35] !== T || e[36] !== E
        ? ((O = (0, $.jsx)(h, {
            "aria-label": w,
            className: `shrink-0`,
            color: `ghost`,
            loading: c,
            onClick: T,
            size: `toolbar`,
            title: w,
            uniform: !0,
            children: E,
          })),
          (e[33] = c),
          (e[34] = w),
          (e[35] = T),
          (e[36] = E),
          (e[37] = O))
        : (O = e[37]);
      let k = O,
        A = l ?? m;
      if (o || p) {
        let t;
        e[38] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(we, { slug: `worktrees` })), (e[38] = t))
          : (t = e[38]);
        let n;
        e[39] === i
          ? (n = e[40])
          : ((n = i ? (0, $.jsx)(Je, {}) : null), (e[39] = i), (e[40] = n));
        let r;
        e[41] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsx)(Ee, {
              children: (0, $.jsx)(D, {
                id: `settings.worktrees.loading.body`,
                defaultMessage: `Fetching worktree details…`,
                description: `Loading state body for worktrees settings`,
              }),
            })),
            (e[41] = r))
          : (r = e[41]);
        let a;
        (e[42] === n
          ? (a = e[43])
          : ((a = (0, $.jsxs)(Te, { title: t, children: [n, r] })),
            (e[42] = n),
            (e[43] = a)),
          (x = a));
        break bb0;
      }
      if (A) {
        let n;
        e[44] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(we, { slug: `worktrees` })), (e[44] = n))
          : (n = e[44]);
        let r;
        e[45] === i
          ? (r = e[46])
          : ((r = i ? (0, $.jsx)(Je, {}) : null), (e[45] = i), (e[46] = r));
        let a;
        e[47] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, $.jsx)(D, {
              id: `settings.worktrees.error.title`,
              defaultMessage: `Unable to load worktrees`,
              description: `Error state title for worktrees settings`,
            })),
            (e[47] = a))
          : (a = e[47]);
        let o;
        e[48] === k
          ? (o = e[49])
          : ((o = (0, $.jsx)(J.Header, { title: a, actions: k })),
            (e[48] = k),
            (e[49] = o));
        let s;
        e[50] !== t || e[51] !== A.message
          ? ((s =
              A.message ||
              t.formatMessage({
                id: `settings.worktrees.error.body`,
                defaultMessage: `Something went wrong while loading worktrees.`,
                description: `Error body for worktrees settings`,
              })),
            (e[50] = t),
            (e[51] = A.message),
            (e[52] = s))
          : (s = e[52]);
        let c;
        e[53] === s
          ? (c = e[54])
          : ((c = (0, $.jsx)(J.Content, {
              children: (0, $.jsx)(Ae, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: s,
                }),
              }),
            })),
            (e[53] = s),
            (e[54] = c));
        let l;
        e[55] !== o || e[56] !== c
          ? ((l = (0, $.jsxs)(J, { children: [o, c] })),
            (e[55] = o),
            (e[56] = c),
            (e[57] = l))
          : (l = e[57]);
        let u;
        (e[58] !== l || e[59] !== r
          ? ((u = (0, $.jsxs)(Te, { title: n, children: [r, l] })),
            (e[58] = l),
            (e[59] = r),
            (e[60] = u))
          : (u = e[60]),
          (x = u));
        break bb0;
      }
      let j;
      e[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((j = (0, $.jsx)(we, { slug: `worktrees` })), (e[61] = j))
        : (j = e[61]);
      let M;
      (e[62] === i
        ? (M = e[63])
        : ((M = i ? (0, $.jsx)(Je, {}) : null), (e[62] = i), (e[63] = M)),
        (b = (0, $.jsxs)(Te, {
          title: j,
          children: [
            M,
            S.length === 0
              ? (0, $.jsxs)(J, {
                  children: [
                    (0, $.jsx)(J.Header, {
                      title: (0, $.jsx)(D, {
                        id: `settings.worktrees.empty.title`,
                        defaultMessage: `No worktrees yet`,
                        description: `Empty state title for worktrees settings`,
                      }),
                      actions: k,
                    }),
                    (0, $.jsx)(J.Content, {
                      children: (0, $.jsx)(Ae, {
                        children: (0, $.jsx)(`div`, {
                          className: `p-3 text-sm text-token-text-secondary`,
                          children: (0, $.jsx)(D, {
                            id: `settings.worktrees.empty.body`,
                            defaultMessage: `Worktrees created by ChatGPT will appear here`,
                            description: `Empty state body for worktrees settings`,
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : S.map((e, t) =>
                  (0, $.jsx)(
                    Qe,
                    {
                      action: t === 0 ? k : null,
                      allConversations: s,
                      visibleConversations: v,
                      hostId: n,
                      isConversationsLoading: _,
                      onWorktreeDeleted: () => {
                        u();
                      },
                      repoRoot: e.repoRoot,
                      worktrees: e.worktrees,
                    },
                    e.key,
                  ),
                ),
          ],
        })));
    }
    ((e[2] = g),
      (e[3] = t),
      (e[4] = y),
      (e[5] = _),
      (e[6] = i),
      (e[7] = p),
      (e[8] = c),
      (e[9] = o),
      (e[10] = u),
      (e[11] = n),
      (e[12] = f?.roots),
      (e[13] = m),
      (e[14] = a?.worktrees),
      (e[15] = l),
      (e[16] = b),
      (e[17] = x));
  } else ((b = e[16]), (x = e[17]));
  return x === Symbol.for(`react.early_return_sentinel`) ? b : x;
}
function Qe(e) {
  let t = (0, ot.c)(35),
    {
      action: n,
      repoRoot: r,
      worktrees: i,
      allConversations: o,
      visibleConversations: c,
      hostId: l,
      isConversationsLoading: u,
      onWorktreeDeleted: d,
    } = e,
    f = s(l),
    p = a(W),
    m;
  t[0] !== f || t[1] !== r
    ? ((m = r == null ? null : { cwd: r, hostConfig: f }),
      (t[0] = f),
      (t[1] = r),
      (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] === p
    ? (h = t[4])
    : ((h = { retainRepoWatch: p }), (t[3] = p), (t[4] = h));
  let { data: g, isLoading: _ } = F(m, `worktree_restore_banner`, h),
    v = g?.root ?? r ?? i[0]?.dir ?? null,
    y;
  t[5] === v
    ? (y = t[6])
    : ((y = v
        ? (0, $.jsx)(`span`, { className: `truncate text-sm`, children: v })
        : (0, $.jsx)(D, {
            id: `settings.worktrees.repository.unknown`,
            defaultMessage: `Unknown repository`,
            description: `Fallback label when worktree repository cannot be resolved`,
          })),
      (t[5] = v),
      (t[6] = y));
  let b = y,
    x = _ && v == null,
    S;
  t[7] === b
    ? (S = t[8])
    : ((S = (0, $.jsx)(`div`, {
        className: `min-w-0 truncate text-sm text-token-text-primary`,
        children: b,
      })),
      (t[7] = b),
      (t[8] = S));
  let C;
  t[9] === x
    ? (C = t[10])
    : ((C = x
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-token-text-secondary`,
            children: (0, $.jsx)(D, {
              id: `settings.worktrees.repository.loading`,
              defaultMessage: `Loading repository metadata…`,
              description: `Subtitle while repository metadata is loading`,
            }),
          })
        : null),
      (t[9] = x),
      (t[10] = C));
  let w;
  t[11] !== S || t[12] !== C
    ? ((w = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col`,
        children: [S, C],
      })),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w))
    : (w = t[13]);
  let T;
  t[14] !== n || t[15] !== w
    ? ((T = (0, $.jsx)(J.Header, { title: w, actions: n })),
      (t[14] = n),
      (t[15] = w),
      (t[16] = T))
    : (T = t[16]);
  let E;
  if (
    t[17] !== o ||
    t[18] !== l ||
    t[19] !== u ||
    t[20] !== d ||
    t[21] !== c ||
    t[22] !== i
  ) {
    let e;
    (t[24] !== o || t[25] !== l || t[26] !== u || t[27] !== d || t[28] !== c
      ? ((e = (e) =>
          (0, $.jsx)(
            $e,
            {
              allConversations: nt(e.dir, o),
              hostId: l,
              visibleConversations: nt(e.dir, c),
              isConversationsLoading: u,
              onWorktreeDeleted: d,
              worktree: e,
            },
            e.dir,
          )),
        (t[24] = o),
        (t[25] = l),
        (t[26] = u),
        (t[27] = d),
        (t[28] = c),
        (t[29] = e))
      : (e = t[29]),
      (E = rt(i, c).map(e)),
      (t[17] = o),
      (t[18] = l),
      (t[19] = u),
      (t[20] = d),
      (t[21] = c),
      (t[22] = i),
      (t[23] = E));
  } else E = t[23];
  let O;
  t[30] === E
    ? (O = t[31])
    : ((O = (0, $.jsx)(J.Content, {
        children: (0, $.jsx)(Ae, { children: E }),
      })),
      (t[30] = E),
      (t[31] = O));
  let k;
  return (
    t[32] !== T || t[33] !== O
      ? ((k = (0, $.jsxs)(J, { children: [T, O] })),
        (t[32] = T),
        (t[33] = O),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
function $e({
  worktree: e,
  allConversations: t,
  visibleConversations: n,
  hostId: r,
  isConversationsLoading: i,
  onWorktreeDeleted: a,
}) {
  let o = x(ce),
    c = B(),
    l = q(),
    [u, d] = (0, st.useState)(!1),
    f = s(r),
    p = async () => {
      if (!u) {
        d(!0);
        try {
          (t.length > 0 &&
            (await Promise.all(
              t.map((e) =>
                g(`archive-conversation`, {
                  conversationId: e.id,
                  cleanupWorktree: !1,
                  source: `worktree_delete`,
                }),
              ),
            )),
            await le(`worktree-delete`, {
              params: {
                hostId: f.id,
                worktree: e.dir,
                reason: `settings-delete-targeted`,
              },
            }),
            a());
        } catch (e) {
          (A.error(`Failed to delete worktree`, {
            safe: {},
            sensitive: { error: ae(e) },
          }),
            o.get(S).danger(
              l.formatMessage({
                id: `settings.worktrees.delete.error`,
                defaultMessage: `Failed to delete worktree`,
                description: `Error message when deleting a worktree from settings`,
              }),
            ));
        } finally {
          d(!1);
        }
      }
    };
  return (0, $.jsxs)(`div`, {
    className: `flex flex-col gap-2 p-3`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-sm font-medium text-token-text-primary`,
                children: (0, $.jsx)(D, {
                  id: `settings.worktrees.row.title`,
                  defaultMessage: `Worktree`,
                  description: `Label for a worktree row`,
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `mt-1 truncate text-xs text-token-text-secondary`,
                children: e.dir,
              }),
            ],
          }),
          (0, $.jsx)(h, {
            className: `shrink-0`,
            color: `danger`,
            loading: u,
            onClick: () => {
              p();
            },
            size: `toolbar`,
            children: (0, $.jsx)(D, {
              id: `settings.worktrees.row.delete`,
              defaultMessage: `Delete`,
              description: `Delete button label for a worktree row`,
            }),
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsx)(`div`, {
            className: `text-xs text-token-text-secondary`,
            children: (0, $.jsx)(D, {
              id: `settings.worktrees.row.conversations`,
              defaultMessage: `Conversations`,
              description: `Label for conversations list within a worktree row`,
            }),
          }),
          i
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-xs text-token-text-secondary`,
                children: [
                  (0, $.jsx)(y, { className: `icon-xxs` }),
                  (0, $.jsx)(D, {
                    id: `settings.worktrees.row.conversations.loading`,
                    defaultMessage: `Loading conversations…`,
                    description: `Loading label for conversations list`,
                  }),
                ],
              })
            : n.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `text-xs text-token-text-secondary`,
                  children: (0, $.jsx)(D, {
                    id: `settings.worktrees.row.conversations.empty`,
                    defaultMessage: `No conversations linked to this worktree.`,
                    description: `Empty state for conversations list in worktree row`,
                  }),
                })
              : (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: n.map((e) => {
                    let t = H(e);
                    return (0, $.jsx)(
                      `button`,
                      {
                        className: `focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm text-token-text-primary hover:bg-token-list-hover-background hover:text-token-text-primary/80 focus-visible:outline-1 focus-visible:outline-offset-[-2px]`,
                        onClick: () => {
                          c(e.id);
                        },
                        type: `button`,
                        children: (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children:
                            t ||
                            (0, $.jsx)(D, {
                              id: `settings.worktrees.conversation.untitled`,
                              defaultMessage: `Untitled conversation`,
                              description: `Fallback title for a conversation`,
                            }),
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
        ],
      }),
    ],
  });
}
function et(e) {
  let t = new Map();
  for (let n of e) {
    let e = ye(n.gitDir),
      r = Q(e ?? n.dir),
      i = t.get(r);
    if (i) {
      i.worktrees.push(n);
      continue;
    }
    t.set(r, { key: r, repoRoot: e, worktrees: [n] });
  }
  return Array.from(t.values());
}
function tt(e, t) {
  return t.length === 0 ? e : e.filter((e) => !t.some((t) => at(t, e.dir)));
}
function nt(e, t) {
  if (t.length === 0) return [];
  let n = Q(e);
  return t.filter((e) => {
    let t = e.cwd;
    if (!t) return !1;
    let r = Q(t);
    return r === n ? !0 : r.startsWith(`${n}/`);
  });
}
function rt(e, t) {
  if (t.length === 0) return e;
  let n = e.map((e, n) => ({
    worktree: e,
    index: n,
    conversationCount: nt(e.dir, t).length,
  }));
  return (
    n.sort((e, t) => {
      let n = t.conversationCount - e.conversationCount;
      return n === 0 ? e.index - t.index : n;
    }),
    n.map((e) => e.worktree)
  );
}
function Q(e) {
  return N(e).replace(/\/+$/, ``);
}
function it(e) {
  return e.hostId ?? `local`;
}
function at(e, t) {
  let n = Q(e),
    r = Q(t);
  return n === r || n.startsWith(`${r}/`);
}
var ot, st, $;
e(() => {
  ((ot = d()),
    E(),
    r(),
    (st = t(p(), 1)),
    ee(),
    o(),
    m(),
    se(),
    _(),
    u(),
    j(),
    Re(),
    oe(),
    xe(),
    _e(),
    n(),
    P(),
    I(),
    c(),
    Oe(),
    Xe(),
    Ie(),
    Ce(),
    ke(),
    De(),
    je(),
    C(),
    pe(),
    ne(),
    ie(),
    k(),
    ve(),
    ($ = V()));
})();
export { Ze as WorktreesSettingsPage };
//# sourceMappingURL=worktrees-settings-page-AV2wdGIa.js.map
