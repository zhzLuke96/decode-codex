import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $Y as n,
  AY as r,
  Bp as i,
  C0 as a,
  CV as o,
  Cw as s,
  DK as c,
  Ds as l,
  GJ as u,
  I2 as d,
  JA as f,
  KJ as p,
  Kq as m,
  L2 as h,
  Mq as g,
  Nq as _,
  Ov as v,
  RK as y,
  S0 as b,
  SV as x,
  Ts as ee,
  Up as S,
  Uv as te,
  WJ as ne,
  Xv as C,
  Xy as re,
  Zq as ie,
  Zy as w,
  _ as T,
  _0 as E,
  _Y as D,
  aG as O,
  aS as k,
  ax as A,
  bG as j,
  cD as M,
  cO as ae,
  cj as N,
  dl as oe,
  dx as P,
  g as se,
  gJ as ce,
  gl as le,
  gx as ue,
  hJ as de,
  hl as fe,
  js as pe,
  k2 as me,
  kK as he,
  lD as ge,
  mJ as F,
  mY as I,
  oS as _e,
  oj as ve,
  pl as ye,
  qJ as be,
  rG as xe,
  sO as Se,
  uG as Ce,
  vv as we,
  vx as Te,
  wV as Ee,
  x0 as De,
  xX as Oe,
  yG as L,
  yY as ke,
  yw as Ae,
  zK as je,
  zX as Me,
  zv as Ne,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Et as R,
  Ht as Pe,
  Qt as Fe,
  Tt as Ie,
  Ut as Le,
  Vt as Re,
  Wt as ze,
  Zt as Be,
  nr as Ve,
  tr as He,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  It as z,
  Pt as Ue,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  G as We,
  Gt as Ge,
  Kt as B,
  W as Ke,
  Wt as V,
  g as qe,
  h as Je,
  qt as H,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  n as Ye,
  r as Xe,
  t as Ze,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~glxlkd48-Cv4zqghc.js";
import {
  a as Qe,
  r as $e,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ohr1dwam-BzJsIjl2.js";
import {
  i as et,
  n as tt,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ji472bec-IX389zxA.js";
import {
  n as nt,
  t as rt,
} from "./use-floating-window-pointer-interactivity-DAFdHELb.js";
import {
  a as it,
  i as at,
  n as ot,
  o as st,
  r as ct,
  t as lt,
} from "./worktree-environment-dropdown-DjxJQvi8.js";
import {
  n as ut,
  t as dt,
} from "./use-hotkey-window-dismiss-on-escape-c3TxE7oG.js";
function ft(e) {
  let t = (0, U.c)(52),
    {
      canUseCloud: n,
      composerMode: r,
      setComposerMode: i,
      showLabel: a,
      disabledTooltipText: o,
      showWorktree: s,
    } = e,
    u = a === void 0 ? !1 : a,
    d = ke(),
    f;
  t[0] !== r || t[1] !== s
    ? ((f =
        r === `cloud`
          ? (0, W.jsx)(Ke, { className: `icon-2xs` })
          : r === `worktree` && s
            ? (0, W.jsx)(B, { className: `icon-2xs` })
            : (0, W.jsx)(V, { className: `icon-2xs` })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== r || t[4] !== u || t[5] !== s
    ? ((p = u
        ? (0, W.jsx)(`span`, {
            className: `max-w-40 truncate text-left whitespace-nowrap`,
            children:
              r === `cloud`
                ? (0, W.jsx)(D, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : r === `worktree` && s
                  ? (0, W.jsx)(D, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, W.jsx)(D, {
                      id: `composer.hotkeyWindow.modeDropdown.localProject`,
                      defaultMessage: `Local project`,
                      description: `Hotkey window overflow menu label for local project mode`,
                    }),
          })
        : null),
      (t[3] = r),
      (t[4] = u),
      (t[5] = s),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, W.jsx)(ne, {
        className: `icon-2xs text-token-input-placeholder-foreground`,
      })),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== f || t[9] !== p
    ? ((h = (0, W.jsxs)(W.Fragment, { children: [f, p, m] })),
      (t[8] = f),
      (t[9] = p),
      (t[10] = h))
    : (h = t[10]);
  let _ = h;
  if (o) {
    let e;
    t[11] === _
      ? (e = t[12])
      : ((e = (0, W.jsx)(`span`, {
          children: (0, W.jsx)(g, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: _,
          }),
        })),
        (t[11] = _),
        (t[12] = e));
    let n;
    return (
      t[13] !== o || t[14] !== e
        ? ((n = (0, W.jsx)(c, { tooltipContent: o, children: e })),
          (t[13] = o),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  let v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, W.jsx)(D, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the task`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[16] = v))
    : (v = t[16]);
  let b;
  t[17] === _
    ? (b = t[18])
    : ((b = (0, W.jsx)(c, {
        tooltipContent: v,
        children: (0, W.jsx)(g, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: _,
        }),
      })),
      (t[17] = _),
      (t[18] = b));
  let x = r === `local` ? y : void 0,
    S;
  t[19] === i
    ? (S = t[20])
    : ((S = () => {
        i(`local`);
      }),
      (t[19] = i),
      (t[20] = S));
  let te;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, W.jsx)(D, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[21] = te))
    : (te = t[21]);
  let C;
  t[22] !== x || t[23] !== S
    ? ((C = (0, W.jsx)(l.Item, {
        LeftIcon: V,
        RightIcon: x,
        onSelect: S,
        children: te,
      })),
      (t[22] = x),
      (t[23] = S),
      (t[24] = C))
    : (C = t[24]);
  let re = r === `cloud` ? y : void 0,
    ie = !n,
    w;
  t[25] === i
    ? (w = t[26])
    : ((w = () => {
        i(`cloud`);
      }),
      (t[25] = i),
      (t[26] = w));
  let T;
  t[27] !== n || t[28] !== d
    ? ((T = n
        ? void 0
        : d.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[27] = n),
      (t[28] = d),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, W.jsx)(D, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[30] = E))
    : (E = t[30]);
  let O;
  t[31] !== re || t[32] !== ie || t[33] !== w || t[34] !== T
    ? ((O = (0, W.jsx)(l.Item, {
        LeftIcon: Ke,
        RightIcon: re,
        disabled: ie,
        onSelect: w,
        tooltipText: T,
        children: E,
      })),
      (t[31] = re),
      (t[32] = ie),
      (t[33] = w),
      (t[34] = T),
      (t[35] = O))
    : (O = t[35]);
  let k = r === `worktree` ? y : void 0,
    A;
  t[36] === i
    ? (A = t[37])
    : ((A = () => {
        i(`worktree`);
      }),
      (t[36] = i),
      (t[37] = A));
  let j = !s,
    M;
  t[38] !== d || t[39] !== s
    ? ((M = s
        ? void 0
        : d.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.localOnly`,
            defaultMessage: `Initialize a git repo to run tasks in worktrees`,
            description: `Tooltip for disabled hotkey-window worktree mode selector`,
          })),
      (t[38] = d),
      (t[39] = s),
      (t[40] = M))
    : (M = t[40]);
  let ae;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, W.jsx)(D, {
        id: `composer.mode.worktreeSegment`,
        defaultMessage: `Worktree`,
        description: `Worktree mode label for the segmented toggle`,
      })),
      (t[41] = ae))
    : (ae = t[41]);
  let N;
  t[42] !== k || t[43] !== A || t[44] !== j || t[45] !== M
    ? ((N = (0, W.jsx)(l.Item, {
        LeftIcon: B,
        RightIcon: k,
        onSelect: A,
        disabled: j,
        tooltipText: M,
        children: ae,
      })),
      (t[42] = k),
      (t[43] = A),
      (t[44] = j),
      (t[45] = M),
      (t[46] = N))
    : (N = t[46]);
  let oe;
  return (
    t[47] !== C || t[48] !== O || t[49] !== N || t[50] !== b
      ? ((oe = (0, W.jsxs)(ee, {
          triggerButton: b,
          contentWidth: `menuNarrow`,
          children: [C, O, N],
        })),
        (t[47] = C),
        (t[48] = O),
        (t[49] = N),
        (t[50] = b),
        (t[51] = oe))
      : (oe = t[51]),
    oe
  );
}
var U,
  W,
  pt = e(() => {
    ((U = d()), I(), _(), pe(), he(), je(), u(), We(), Ge(), H(), (W = me()));
  });
function mt({
  activeWorkspaceRoot: e,
  defaultToProjectless: t,
  prefillCwd: n,
}) {
  return n ?? (t ? `~` : e);
}
function ht({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
var gt = e(() => {
  r();
});
function _t(e) {
  let t = (0, vt.c)(22),
    { composerMode: n, enabled: r, setComposerMode: i, showWorktree: a } = e,
    o = ke(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = o.formatMessage({
        id: `composer.hotkeyWindow.mode.localSlashCommand.description`,
        defaultMessage: `Run this chat locally`,
        description: `Description for the Quick Chat local mode slash command`,
      })),
      (t[2] = o),
      (t[3] = c));
  let l = r && n !== `local`,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = async () => {
        i(`local`);
      }),
      (t[4] = i),
      (t[5] = u));
  let d = u,
    f;
  (t[6] !== s || t[7] !== c || t[8] !== l || t[9] !== d
    ? ((f = {
        id: `local`,
        title: s,
        description: c,
        requiresEmptyComposer: !1,
        Icon: V,
        enabled: l,
        onSelect: d,
      }),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]),
    z(f));
  let p;
  t[11] === o
    ? (p = t[12])
    : ((p = o.formatMessage({
        id: `composer.mode.worktree`,
        defaultMessage: `New worktree`,
        description: `Worktree mode label`,
      })),
      (t[11] = o),
      (t[12] = p));
  let m;
  t[13] === o
    ? (m = t[14])
    : ((m = o.formatMessage({
        id: `composer.hotkeyWindow.mode.worktreeSlashCommand.description`,
        defaultMessage: `Run this chat in a new worktree`,
        description: `Description for the Quick Chat worktree mode slash command`,
      })),
      (t[13] = o),
      (t[14] = m));
  let h = r && a && n !== `worktree`,
    g;
  t[15] === i
    ? (g = t[16])
    : ((g = async () => {
        i(`worktree`);
      }),
      (t[15] = i),
      (t[16] = g));
  let _ = g,
    v;
  return (
    t[17] !== _ || t[18] !== p || t[19] !== m || t[20] !== h
      ? ((v = {
          id: `worktree`,
          title: p,
          description: m,
          requiresEmptyComposer: !1,
          Icon: B,
          enabled: h,
          onSelect: _,
        }),
        (t[17] = _),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = v))
      : (v = t[21]),
    z(v),
    null
  );
}
var vt,
  yt = e(() => {
    ((vt = d()), I(), Ue(), Ge(), H());
  });
function bt(e) {
  let t = (0, xt.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: G,
          includeInteractiveRegion: !0,
          interactiveRegionRef: r,
          onInteractiveChange: i,
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    nt(a)
  );
}
var xt,
  G,
  St = e(() => {
    ((xt = d()),
      rt(),
      (G = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }),
  K,
  Ct,
  q,
  wt,
  Tt,
  J = e(() => {
    ((K = `_home_reiaa_1`),
      (Ct = `_homeShell_reiaa_20`),
      (q = `_shellUnderlay_reiaa_21`),
      (wt = `_composerSurface_reiaa_22`),
      (Tt = { home: K, homeShell: Ct, shellUnderlay: q, composerSurface: wt }));
  });
function Y() {
  let e = (0, Nt.c)(104),
    t = b(A);
  ut();
  let r = ke(),
    i = ve(),
    s = N(),
    c = O(`505458`),
    l = Ce(),
    { access: u } = Xe(),
    { selectedRemoteProject: d } = Te(),
    f = (0, X.useRef)(null),
    m = (0, X.useRef)(null),
    h = (0, X.useRef)(null),
    g = (0, X.useRef)(null),
    _ = i.state,
    y = _?.focusComposerNonce ?? null,
    x = _?.prefillCwd ?? null,
    { data: ee, isLoading: S } = a(Ae),
    ne = ie(n.hotkeyWindowProjectlessDefaultEnabled),
    w = mt({
      activeWorkspaceRoot: ee?.roots[0] ?? null,
      defaultToProjectless: ne === !0,
      prefillCwd: x,
    }),
    T = x == null ? d : null,
    E = T == null && w === `~`,
    k = T?.hostId ?? `local`,
    j = o(k),
    M = _e(k),
    P = ht({
      composerWorkspaceRoot: w,
      selectedRemoteProjectPath: T?.remotePath ?? null,
    }),
    le = T == null && w == null && S,
    ue = re({ cwd: P, hostId: k, isLoading: le }),
    de = a(ge),
    pe;
  e[0] === de
    ? (pe = e[1])
    : ((pe = { retainRepoWatch: de }), (e[0] = de), (e[1] = pe));
  let { data: me, isLoading: he } = ae(
      P == null ? null : { cwd: P, hostConfig: j },
      `hotkey_window_home_page`,
      pe,
    ),
    F = me?.root ?? null,
    I = P != null && F != null && c && !Oe(P, M),
    be = T == null && !S && !he && F == null,
    xe = E || be,
    Se = {
      fallbackMode: `local`,
      isAvailabilityLoading: !xe && ((T == null && S) || he || l),
      isCloudAvailable: !xe,
      isLocalAvailable: !0,
      isWorktreeAvailable: I,
    },
    je = De(v, ue),
    Me = a(we),
    Ne = ze(),
    R = He({ ...Se, composerMode: je, cloudAccess: u, isEverydayWorkMode: !1 }),
    Pe = R === `worktree` && P != null,
    Fe;
  e[2] !== k || e[3] !== Pe
    ? ((Fe = {
        enabled: Pe,
        hostId: k,
        source: `hotkey_window_worktree_source`,
      }),
      (e[2] = k),
      (e[3] = Pe),
      (e[4] = Fe))
    : (Fe = e[4]);
  let { gitRoot: Le } = et(P, Fe),
    Ve = R === `worktree` ? P : null,
    z;
  e[5] !== k || e[6] !== Ve
    ? ((z = { hostId: k, workspaceRoot: Ve }),
      (e[5] = k),
      (e[6] = Ve),
      (e[7] = z))
    : (z = e[7]);
  let {
      environments: Ue,
      isLoading: We,
      error: Ge,
      resolvedConfigPath: B,
      updateSelection: Ke,
    } = Qe(z),
    [V, qe] = (0, X.useState)(!1),
    [H, Ye] = (0, X.useState)(null),
    $e;
  e[8] === y
    ? ($e = e[9])
    : (($e = {
        activationNonce: y,
        interactiveRegionRef: m,
        onInteractiveChange: kt,
      }),
      (e[8] = y),
      (e[9] = $e));
  let tt = bt($e),
    nt;
  (e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (e) => {
        Ye(e.topInsetPx);
      }),
      (e[10] = nt))
    : (nt = e[10]),
    ce(`hotkey-window-home-composer-position-changed`, nt));
  let rt;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (e) => {
        let t = f.current,
          n = m.current;
        if (!t || !n) return;
        let r = Mt(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of Pt)
            for (let t of document.querySelectorAll(e))
              o = Math.min(o, t.getBoundingClientRect().top);
        let s = {
            minimumComposerTopInsetPx: Math.max(0, Math.ceil(a.top - o)),
            restingComposerTopInsetPx: Math.ceil(
              Math.max(0, i.height - a.height - r),
            ),
          },
          c = g.current;
        (c?.minimumComposerTopInsetPx === s.minimumComposerTopInsetPx &&
          c.restingComposerTopInsetPx === s.restingComposerTopInsetPx) ||
          ((g.current = s), L.hotkeyWindowHotkeys?.homeLayoutChanged(s));
      }),
      (e[11] = rt))
    : (rt = e[11]);
  let at = rt,
    ot;
  (e[12] === y ? (ot = e[13]) : ((ot = [y]), (e[12] = y), (e[13] = ot)),
    (0, X.useEffect)(Ot, ot));
  let st, dt;
  (e[14] === Ne
    ? ((st = e[15]), (dt = e[16]))
    : ((dt = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), at(Ne));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          m.current != null && n?.observe(m.current),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect());
          }
        );
      }),
      (st = [Ne]),
      (e[14] = Ne),
      (e[15] = st),
      (e[16] = dt)),
    (0, X.useLayoutEffect)(dt, st));
  let U;
  e[17] !== ue || e[18] !== t
    ? ((U = (e) => {
        te(t, ue, e);
      }),
      (e[17] = ue),
      (e[18] = t),
      (e[19] = U))
    : (U = e[19]);
  let W = U,
    pt;
  e[20] === t
    ? (pt = e[21])
    : ((pt = (e) => {
        C(t, (t) => {
          t.asyncThreadStartingState = e;
        });
      }),
      (e[20] = t),
      (e[21] = pt));
  let gt = pt,
    vt = Dt,
    yt;
  e[22] !== i.hash ||
  e[23] !== i.pathname ||
  e[24] !== i.search ||
  e[25] !== _ ||
  e[26] !== s
    ? ((yt = (e) => {
        let t = e ?? `~`,
          n = { ..._, prefillCwd: t };
        s(
          { pathname: i.pathname, search: i.search, hash: i.hash },
          { replace: !0, state: n },
        );
      }),
      (e[22] = i.hash),
      (e[23] = i.pathname),
      (e[24] = i.search),
      (e[25] = _),
      (e[26] = s),
      (e[27] = yt))
    : (yt = e[27]);
  let xt = yt,
    G;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (e) => {
        h.current === e.pointerId &&
          ((h.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          L.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[28] = G))
    : (G = e[28]);
  let St = G,
    K;
  e[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          (h.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          L.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }));
      }),
      (e[29] = K))
    : (K = e[29]);
  let Ct = K,
    q;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (e) => {
        h.current === e.pointerId && L.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[30] = q))
    : (q = e[30]);
  let wt = q,
    J;
  if (
    e[31] !== R ||
    e[32] !== P ||
    e[33] !== T?.label ||
    e[34] !== T?.remotePath ||
    e[35] !== r ||
    e[36] !== E
  ) {
    let t =
      Je(T?.remotePath ?? P, T?.label) ??
      r.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (E) {
      let t;
      (e[38] === r
        ? (t = e[39])
        : ((t = r.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask ChatGPT anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[38] = r),
          (e[39] = t)),
        (J = t));
    } else if (R === `cloud`) {
      let t;
      (e[40] === r
        ? (t = e[41])
        : ((t = r.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask ChatGPT anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[40] = r),
          (e[41] = t)),
        (J = t));
    } else
      J =
        R === `worktree`
          ? r.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask ChatGPT anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : r.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask ChatGPT anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[31] = R),
      (e[32] = P),
      (e[33] = T?.label),
      (e[34] = T?.remotePath),
      (e[35] = r),
      (e[36] = E),
      (e[37] = J));
  } else J = e[37];
  let Y;
  if (le) {
    let t;
    (e[42] === r
      ? (t = e[43])
      : ((t = r.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[42] = r),
        (e[43] = t)),
      (Y = t));
  } else if (E) {
    let t;
    (e[44] === r
      ? (t = e[45])
      : ((t = r.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Projectless chats run locally`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[44] = r),
        (e[45] = t)),
      (Y = t));
  } else if (be) {
    let t;
    (e[46] === r
      ? (t = e[47])
      : ((t = r.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[46] = r),
        (e[47] = t)),
      (Y = t));
  }
  let Ft;
  e[48] !== Me ||
  e[49] !== j ||
  e[50] !== R ||
  e[51] !== P ||
  e[52] !== F ||
  e[53] !== gt ||
  e[54] !== Le
    ? ((Ft =
        R === `worktree`
          ? (0, Z.jsx)(it, {
              startingState: Me,
              setStartingState: gt,
              hostConfig: j,
              gitRootOverride: Le ?? P,
              branchSource: `worktree`,
            })
          : F == null
            ? null
            : (0, Z.jsx)(ct, {
                gitRoot: F,
                hostConfig: j,
                localConversationId: null,
                shouldShow: !0,
              })),
      (e[48] = Me),
      (e[49] = j),
      (e[50] = R),
      (e[51] = P),
      (e[52] = F),
      (e[53] = gt),
      (e[54] = Le),
      (e[55] = Ft))
    : (Ft = e[55]);
  let It = Ft,
    Lt;
  e[56] === r
    ? (Lt = e[57])
    : ((Lt = r.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Task settings`,
        description: `Accessible label for the hotkey window task settings menu`,
      })),
      (e[56] = r),
      (e[57] = Lt));
  let Rt = Lt,
    zt,
    Bt;
  e[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = p(
        Tt.home,
        `relative h-full w-full overflow-hidden bg-transparent pb-1`,
      )),
      (Bt = (0, Z.jsx)(Ze, {})),
      (e[58] = zt),
      (e[59] = Bt))
    : ((zt = e[58]), (Bt = e[59]));
  let Vt = tt && `no-drag`,
    Ht;
  e[60] === Vt
    ? (Ht = e[61])
    : ((Ht = p(
        Tt.homeShell,
        `absolute inset-x-1 bottom-1 px-[15px] pb-[13px] pt-[17px]`,
        Vt,
      )),
      (e[60] = Vt),
      (e[61] = Ht));
  let Ut;
  e[62] === H
    ? (Ut = e[63])
    : ((Ut = H == null ? void 0 : { bottom: `auto`, top: H }),
      (e[62] = H),
      (e[63] = Ut));
  let Wt;
  e[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Wt = (0, Z.jsx)(`div`, {
        className: Tt.shellUnderlay,
        "aria-hidden": `true`,
        onLostPointerCapture: St,
        onPointerCancel: St,
        onPointerDown: Ct,
        onPointerMove: wt,
        onPointerUp: St,
      })),
      (e[64] = Wt))
    : (Wt = e[64]);
  let Gt = !E && !le,
    Kt;
  e[65] !== R || e[66] !== W || e[67] !== I || e[68] !== Gt
    ? ((Kt = (0, Z.jsx)(_t, {
        composerMode: R,
        enabled: Gt,
        setComposerMode: W,
        showWorktree: I,
      })),
      (e[65] = R),
      (e[66] = W),
      (e[67] = I),
      (e[68] = Gt),
      (e[69] = Kt))
    : (Kt = e[69]);
  let qt;
  e[70] === Rt
    ? (qt = e[71])
    : ((qt = (0, Z.jsx)(fe, {
        asChild: !0,
        children: (0, Z.jsx)(se, { label: Rt, size: `composer` }),
      })),
      (e[70] = Rt),
      (e[71] = qt));
  let Jt;
  e[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jt = (0, Z.jsx)(D, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[72] = Jt))
    : (Jt = e[72]);
  let Yt = E ? null : (T?.id ?? P ?? void 0),
    Xt;
  e[73] !== xt || e[74] !== Yt
    ? ((Xt = (0, Z.jsx)(jt, {
        label: Jt,
        control: (0, Z.jsx)(Ie, {
          activeProjectIdOverride: Yt,
          allowRemoteProjects: !1,
          onWorkspaceRootSelected: xt,
        }),
      })),
      (e[73] = xt),
      (e[74] = Yt),
      (e[75] = Xt))
    : (Xt = e[75]);
  let Zt;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Zt = (0, Z.jsx)(D, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[76] = Zt))
    : (Zt = e[76]);
  let Qt = Se.isCloudAvailable && u === `enabled`,
    $t;
  e[77] !== R || e[78] !== W || e[79] !== I || e[80] !== Y || e[81] !== Qt
    ? (($t = (0, Z.jsx)(jt, {
        label: Zt,
        control: (0, Z.jsx)(ft, {
          canUseCloud: Qt,
          composerMode: R,
          setComposerMode: W,
          showLabel: !0,
          disabledTooltipText: Y,
          showWorktree: I,
        }),
      })),
      (e[77] = R),
      (e[78] = W),
      (e[79] = I),
      (e[80] = Y),
      (e[81] = Qt),
      (e[82] = $t))
    : ($t = e[82]);
  let en;
  e[83] !== R ||
  e[84] !== Ge ||
  e[85] !== We ||
  e[86] !== B ||
  e[87] !== Ke ||
  e[88] !== Ue
    ? ((en =
        R === `worktree`
          ? (0, Z.jsx)(jt, {
              label: (0, Z.jsx)(D, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, Z.jsx)(lt, {
                environments: Ue,
                isLoading: We,
                hasError: Ge != null,
                selectedConfigPath: B,
                onSelectConfigPath: Ke,
                onOpenSettings: Et,
              }),
            })
          : null),
      (e[83] = R),
      (e[84] = Ge),
      (e[85] = We),
      (e[86] = B),
      (e[87] = Ke),
      (e[88] = Ue),
      (e[89] = en))
    : (en = e[89]);
  let Q;
  e[90] === It
    ? (Q = e[91])
    : ((Q = It
        ? (0, Z.jsx)(jt, {
            label: (0, Z.jsx)(D, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: It,
          })
        : null),
      (e[90] = It),
      (e[91] = Q));
  let tn;
  e[92] === R
    ? (tn = e[93])
    : ((tn =
        R === `cloud`
          ? null
          : (0, Z.jsx)(Be, {
              conversationId: null,
              hostId: Ee,
              DropdownContainer: At,
            })),
      (e[92] = R),
      (e[93] = tn));
  let $;
  e[94] !== Xt || e[95] !== $t || e[96] !== en || e[97] !== Q || e[98] !== tn
    ? (($ = (0, Z.jsx)(ye, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `no-drag w-auto min-w-[320px] rounded-3xl p-0`,
        children: (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-4 p-3`,
          children: [Xt, $t, en, Q, tn],
        }),
      })),
      (e[94] = Xt),
      (e[95] = $t),
      (e[96] = en),
      (e[97] = Q),
      (e[98] = tn),
      (e[99] = $))
    : ($ = e[99]);
  let nn;
  return (
    e[100] !== V || e[101] !== qt || e[102] !== $
      ? ((nn = (0, Z.jsxs)(oe, {
          open: V,
          onOpenChange: qe,
          children: [qt, $],
        })),
        (e[100] = V),
        (e[101] = qt),
        (e[102] = $),
        (e[103] = nn))
      : (nn = e[103]),
    (0, Z.jsxs)(`div`, {
      ref: f,
      className: zt,
      children: [
        Bt,
        (0, Z.jsxs)(`div`, {
          ref: m,
          className: Ht,
          style: Ut,
          children: [
            Wt,
            Kt,
            (0, Z.jsx)(`div`, {
              className: `no-drag relative`,
              children: (0, Z.jsx)(Re, {
                showWorkspaceDropdownInUtilityBar: !1,
                showUtilityBar: !1,
                surfaceClassName: Tt.composerSurface,
                composerModeAvailability: Se,
                placeholderText: J,
                defaultCwd: E ? `~` : void 0,
                hotkeyWindowHomeFooterControls: nn,
                onLocalConversationCreated: vt,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Et() {
  de.dispatchMessage(`show-settings`, { section: `local-environments` });
}
function Dt(e) {
  L.hotkeyWindowHotkeys?.open({ path: Me(e) });
}
function Ot() {
  i();
}
function kt(e) {
  L.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function At(e) {
  let t = (0, Nt.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(D, {
        id: `hotkeyWindow.home.taskMenu.permissions`,
        defaultMessage: `Permissions`,
        description: `Label for the hotkey window permissions row`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Z.jsx)(jt, { label: r, control: n })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function jt(e) {
  let t = (0, Nt.c)(7),
    { label: n, control: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, Z.jsx)(`div`, {
        className: `shrink-0 text-sm font-medium text-token-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, Z.jsx)(`div`, { className: `min-w-0`, children: r })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Mt(e) {
  return Number.parseFloat(e) || 0;
}
var Nt, X, Z, Pt;
e(() => {
  ((Nt = d()),
    be(),
    E(),
    r(),
    (X = t(h(), 1)),
    I(),
    f(),
    Ye(),
    T(),
    le(),
    st(),
    Pe(),
    Ve(),
    w(),
    at(),
    Ne(),
    S(),
    pt(),
    R(),
    Fe(),
    Le(),
    ot(),
    Se(),
    k(),
    $e(),
    F(),
    ue(),
    M(),
    j(),
    P(),
    s(),
    m(),
    x(),
    xe(),
    qe(),
    tt(),
    gt(),
    yt(),
    dt(),
    St(),
    J(),
    (Z = me()),
    (Pt = [
      `[data-composer-overlay-floating-ui]`,
      `[data-above-composer-portal] > *`,
    ]));
})();
export { Y as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page-CfSht0J5.js.map
