import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $J as n,
  $V as r,
  AJ as i,
  AS as a,
  AY as o,
  C0 as s,
  CS as c,
  Cb as l,
  DJ as u,
  DK as d,
  EK as f,
  Fq as p,
  GJ as m,
  I2 as h,
  IJ as g,
  IK as _,
  KJ as v,
  L2 as y,
  LK as b,
  MU as x,
  Mq as S,
  NT as C,
  NU as w,
  Nq as ee,
  PB as te,
  Pq as T,
  QV as ne,
  RJ as E,
  S0 as re,
  SI as D,
  SV as ie,
  TK as O,
  To as k,
  Ub as A,
  WJ as j,
  XV as M,
  YV as N,
  _0 as P,
  aG as F,
  aY as ae,
  cY as oe,
  dT as I,
  eY as se,
  fY as L,
  gJ as ce,
  hJ as R,
  hh as z,
  iL as B,
  if as V,
  k2 as H,
  kK as le,
  mJ as U,
  mY as ue,
  pY as de,
  qJ as fe,
  rG as pe,
  rL as W,
  rf as me,
  sL as G,
  sY as he,
  uT as ge,
  vI as _e,
  vh as ve,
  wo as K,
  x0 as ye,
  xI as be,
  yY as xe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { ct as q, st as Se } from "./app-initial~app-main~page-hSvsQcNf.js";
import { n as Ce, t as we } from "./avatar-mascot-button-DWneJA55.js";
import {
  a as Te,
  c as Ee,
  d as De,
  f as Oe,
  g as ke,
  h as Ae,
  i as je,
  l as Me,
  m as Ne,
  n as J,
  o as Pe,
  p as Fe,
  r as Ie,
  s as Le,
  t as Re,
} from "./avatar-overlay-pill-material.module-DIKT60Hh.js";
import {
  Nt as ze,
  Pt as Be,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  bu as Ve,
  yu as He,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Ln as Ue,
  Rn as We,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  Gn as Ge,
  Jn as Ke,
  Kn as qe,
  qn as Je,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Gr as Ye,
  Wr as Xe,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  a as Ze,
  i as Qe,
  n as $e,
  o as et,
  r as tt,
  t as nt,
} from "./avatar-overlay-mascot-size-De0Pyk6W.js";
import {
  n as rt,
  t as it,
} from "./app-initial~app-main~avatar-overlay-page~avatar-overlay-native-page~pets-settings-CXdZ45KF.js";
import {
  n as at,
  t as ot,
} from "./use-floating-window-pointer-interactivity-DAFdHELb.js";
import {
  i as st,
  r as ct,
  t as lt,
} from "./avatar-overlay-debug-state-CTIOAAH-.js";
import {
  a as ut,
  c as dt,
  d as ft,
  f as pt,
  i as mt,
  l as ht,
  n as gt,
  o as _t,
  r as vt,
  s as yt,
  t as bt,
  u as xt,
} from "./use-avatar-overlay-selection-CgaR3LEm.js";
function St({
  avatar: e,
  avatarMenuItems: t,
  debugWindowBorderVisible: n = !1,
  interactiveRegionRef: r,
  isDragging: a = !1,
  isNotificationTrayOpen: o = !0,
  restrictedSurface: s,
  layout: c,
  mascotLayout: l = c.mascot,
  mascotStyle: u,
  mascotDragState: d,
  mascotResizeHandle: f,
  notifications: p,
  onLostPointerCapture: m,
  onCloseNotificationTray: h,
  onPointerCancel: _,
  onPointerDown: y,
  onPointerMove: b,
  onPointerUp: x,
  onDismissNotification: S,
  onRunNotificationAction: C,
  onSubmitQuestionOption: w,
  onNotificationReplyEditorActiveChange: ee,
  onOpenNotificationReply: te,
  onSubmitNotificationReply: T,
  onOpenNotificationTray: ne,
}) {
  let E = xe(),
    re = i(),
    D = Fe(p[0]),
    ie = p.length > 0,
    k = s?.phase ?? `inactive`,
    A = Te(s?.isSessionActive ?? !1, k !== `inactive`),
    M = A === `voice-orb`,
    N = A === `hidden`,
    P = A === `pet` ? l : { ...l, height: 121, width: nt },
    [F, ae] = (0, X.useState)(null);
  ce(`avatar-overlay-computer-use-cursor-changed`, (e) => {
    ae(e.point);
  });
  let oe = F == null ? null : Ae(P, F, e.spriteVersionNumber),
    I = ie && o;
  s?.controlsHovered;
  let se = s?.caption ?? null,
    L = I || se != null,
    R = ie || L,
    z = c.placement.startsWith(`top`),
    B = p.length > 1,
    V = c.tray == null ? void 0 : Math.max(0, c.tray.height),
    H;
  I
    ? (H = {
        ariaLabel: E.formatMessage(Q.collapseNotificationTray),
        backgroundColor: `var(--color-token-bg-primary)`,
        content: (0, Z.jsx)(j, { className: `icon-xs opacity-80` }),
        foregroundColor: `var(--color-token-text-secondary)`,
        onClick: h,
      })
    : ie &&
      (H = {
        ariaLabel: E.formatMessage(
          {
            id: `avatarOverlay.toggleNotificationTray`,
            defaultMessage: `Open activity tray, {count, plural, one {# item} other {# items}}`,
            description: `Accessible label for the floating avatar activity count button`,
          },
          { count: p.length },
        ),
        backgroundColor: D.badgeBackgroundColor,
        content: p.length,
        foregroundColor: D.badgeForegroundColor,
        onClick: ne,
      });
  let le = (0, Z.jsx)(we, {
    ariaLabel: E.formatMessage(Q.mascotLabel, { petName: e.displayName }),
    assetRef: e.assetRef,
    lookFrame: a ? null : oe,
    spriteVersionNumber: e.spriteVersionNumber,
    spritesheetUrl: e.spritesheetUrl,
    notificationBadge: H,
    resizeHandle:
      f == null ? void 0 : { ariaLabel: E.formatMessage(Q.resizeMascot), ...f },
    state: D.mascotState,
    style: u,
    transientState: d,
  });
  return (0, Z.jsx)(`main`, {
    className: v(
      `relative h-screen w-screen overflow-hidden bg-transparent`,
      n && `-outline-offset-2 outline-2 outline-[#ff0000]`,
    ),
    "data-avatar-overlay-debug-window-border": n || void 0,
    children: (0, Z.jsxs)(`section`, {
      ref: r,
      "data-avatar-overlay-content-frame": `true`,
      className: `relative h-full w-full cursor-grab active:cursor-grabbing`,
      onLostPointerCapture: m,
      onPointerCancel: _,
      onPointerDown: y,
      onPointerMove: b,
      onPointerUp: x,
      children: [
        R
          ? (0, Z.jsx)(`div`, {
              "aria-hidden": L ? void 0 : !0,
              "data-avatar-overlay-hit-region": `notification-tray`,
              inert: !L,
              className: v(
                `absolute flex cursor-interaction text-sm text-token-foreground`,
                z ? `items-end` : `items-start`,
              ),
              style: {
                height: c.tray?.height,
                left: c.tray?.left,
                pointerEvents: L ? void 0 : `none`,
                top: c.tray?.top,
                visibility: c.tray == null ? `hidden` : void 0,
                width: c.tray?.width,
              },
              children: (0, Z.jsxs)(g.div, {
                animate: { opacity: L ? 1 : 0 },
                className: `relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]`,
                "data-avatar-overlay-size": `notification-tray`,
                initial: !1,
                style: B ? { maxHeight: V } : void 0,
                transition: re
                  ? { duration: 0 }
                  : { duration: 0.18, ease: `easeOut` },
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `h-0 overflow-hidden`,
                    "data-avatar-overlay-size": `notification-tray-header`,
                  }),
                  (0, Z.jsx)(`div`, {
                    children: (0, Z.jsx)(Ct, {
                      areNotificationsVisible: I,
                      isTrayAboveMascot: z,
                      isNotificationTrayVisible: L,
                      notifications: p,
                      prefersReducedMotion: !!re,
                      restrictedCaption: se,
                      trayMaxHeight: V,
                      onDismissNotification: S,
                      onRunNotificationAction: C,
                      onSubmitQuestionOption: w,
                      onNotificationReplyEditorActiveChange: ee,
                      onOpenNotificationReply: te,
                      onSubmitNotificationReply: T,
                    }),
                  }),
                ],
              }),
            })
          : null,
        (0, Z.jsx)(O, {
          items: t,
          children: (0, Z.jsx)(`div`, {
            "data-avatar-overlay-hit-region": N ? void 0 : `mascot`,
            className: v(
              `group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none`,
              N && `pointer-events-none`,
              a && !M ? `scale-95 transition-transform` : `transition-none`,
            ),
            style: {
              height: P.height,
              left: P.left,
              top: P.top,
              width: P.width,
            },
            children: le,
          }),
        }),
      ],
    }),
  });
}
function Ct(e) {
  let t = (0, Y.c)(67),
    {
      areNotificationsVisible: n,
      isTrayAboveMascot: r,
      isNotificationTrayVisible: i,
      notifications: a,
      onDismissNotification: o,
      onNotificationReplyEditorActiveChange: s,
      onOpenNotificationReply: c,
      onRunNotificationAction: l,
      onSubmitQuestionOption: u,
      onSubmitNotificationReply: d,
      prefersReducedMotion: f,
      restrictedCaption: p,
      trayMaxHeight: m,
    } = e,
    h = xe(),
    _ = (0, X.useRef)(null),
    y;
  t[0] !== h || t[1] !== a
    ? ((y = yt(a, h)), (t[0] = h), (t[1] = a), (t[2] = y))
    : (y = t[2]);
  let b = y,
    x = p == null ? `` : `caption`,
    S = r ? `tray-above` : `tray-below`,
    C;
  t[3] !== b || t[4] !== x || t[5] !== S
    ? ((C = [b, x, S]), (t[3] = b), (t[4] = x), (t[5] = S), (t[6] = C))
    : (C = t[6]);
  let w = C.join(`\0`),
    ee = a.length > 1,
    te;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = {
        hasScrollableContent: !1,
        hasLatestNotificationsAbove: !1,
        hiddenOlderNotificationCount: 0,
      }),
      (t[7] = te))
    : (te = t[7]);
  let [T, ne] = (0, X.useState)(te),
    [re, D] = (0, X.useState)(null),
    ie = (0, X.useRef)(null),
    O;
  t[8] !== a || t[9] !== re
    ? ((O = a.some((e) => e.id === re) ? re : null),
      (t[8] = a),
      (t[9] = re),
      (t[10] = O))
    : (O = t[10]);
  let k = O,
    A = k != null && n,
    j,
    M;
  (t[11] !== A || t[12] !== s
    ? ((j = () => {
        if (A)
          return (
            s?.(!0),
            () => {
              s?.(!1);
            }
          );
      }),
      (M = [A, s]),
      (t[11] = A),
      (t[12] = s),
      (t[13] = j),
      (t[14] = M))
    : ((j = t[13]), (M = t[14])),
    (0, X.useEffect)(j, M));
  let N, P;
  (t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        ie.current?.focus();
      }),
      (N = []),
      (t[15] = N),
      (t[16] = P))
    : ((N = t[15]), (P = t[16])),
    ce(`avatar-overlay-keyboard-interaction-ready`, P, N));
  let F = T.hiddenOlderNotificationCount,
    ae = T.hasScrollableContent,
    oe = n && ae && ee && T.hasLatestNotificationsAbove,
    I = n && ae && ee && F > 0,
    se = n && ae && ee,
    L = n && ae,
    R = a.length > 0,
    z = R && ee,
    B;
  t[17] === f
    ? (B = t[18])
    : ((B = f ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[17] = f),
      (t[18] = B));
  let V = B,
    H;
  t[19] !== f || t[20] !== p || t[21] !== L
    ? ((H =
        p == null
          ? null
          : (0, Z.jsx)(
              wt,
              { prefersReducedMotion: f, shouldInsetForScrollbar: L, text: p },
              `restricted-caption`,
            )),
      (t[19] = f),
      (t[20] = p),
      (t[21] = L),
      (t[22] = H))
    : (H = t[22]);
  let le = H,
    U;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => {
        ne((t) => {
          let n = Rt(e);
          return zt(t, n) ? t : n;
        });
      }),
      (t[23] = U))
    : (U = t[23]);
  let ue = U,
    de;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (e) => {
        ((_.current = e), e != null && ue(e));
      }),
      (t[24] = de))
    : (de = t[24]);
  let fe = de,
    pe;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = () => {
        let e = _.current;
        if (e == null) return;
        ue(e);
        let t = window.requestAnimationFrame(() => {
            ue(e);
          }),
          n = new ResizeObserver(() => {
            ue(e);
          });
        return (
          n.observe(e),
          () => {
            (window.cancelAnimationFrame(t), n.disconnect());
          }
        );
      }),
      (t[25] = pe))
    : (pe = t[25]);
  let W;
  (t[26] !== w || t[27] !== m
    ? ((W = [w, m, ue]), (t[26] = w), (t[27] = m), (t[28] = W))
    : (W = t[28]),
    (0, X.useLayoutEffect)(pe, W));
  let me;
  t[29] === f
    ? (me = t[30])
    : ((me = () => {
        let e = _.current;
        e != null &&
          (e.scrollTo({ behavior: f ? `auto` : `smooth`, top: 0 }),
          ne(Rt(e, 0)));
      }),
      (t[29] = f),
      (t[30] = me));
  let G = me,
    he;
  t[31] !== F || t[32] !== f
    ? ((he = () => {
        let e = _.current;
        if (e == null) return;
        let t = Dt(e, F);
        (e.scrollTo({ behavior: f ? `auto` : `smooth`, top: t }), ne(Rt(e, t)));
      }),
      (t[31] = F),
      (t[32] = f),
      (t[33] = he))
    : (he = t[33]);
  let ge = he,
    _e = le != null && `gap-1.5`,
    ve;
  t[34] === _e
    ? (ve = t[35])
    : ((ve = v(`relative flex w-full min-w-0 flex-col overflow-hidden`, _e)),
      (t[34] = _e),
      (t[35] = ve));
  let K;
  t[36] !== z || t[37] !== m
    ? ((K = z ? { height: m, maxHeight: m } : void 0),
      (t[36] = z),
      (t[37] = m),
      (t[38] = K))
    : (K = t[38]);
  let ye = r ? null : le,
    be;
  t[39] !== k ||
  t[40] !== oe ||
  t[41] !== I ||
  t[42] !== F ||
  t[43] !== h ||
  t[44] !== i ||
  t[45] !== a ||
  t[46] !== o ||
  t[47] !== c ||
  t[48] !== l ||
  t[49] !== d ||
  t[50] !== u ||
  t[51] !== f ||
  t[52] !== G ||
  t[53] !== ge ||
  t[54] !== se ||
  t[55] !== R ||
  t[56] !== z ||
  t[57] !== V
    ? ((be = R
        ? (0, Z.jsxs)(g.div, {
            layout: z,
            className: `relative min-h-0 min-w-0 flex-1`,
            transition: V,
            children: [
              (0, Z.jsx)(E, {
                children: oe
                  ? (0, Z.jsx)(
                      Tt,
                      { prefersReducedMotion: f, onClick: G },
                      `latest`,
                    )
                  : null,
              }),
              (0, Z.jsx)(g.div, {
                ref: fe,
                animate: { opacity: i ? 1 : 0, y: i || f ? 0 : 3 },
                "aria-label": h.formatMessage(Q.notificationList),
                className: v(
                  `scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]`,
                  se && `vertical-scroll-fade-mask snap-y snap-mandatory`,
                ),
                "data-avatar-overlay-size": `notification-tray-list`,
                role: `list`,
                initial: !1,
                transition: f
                  ? { duration: 0 }
                  : { duration: 0.16, ease: `easeOut` },
                onScroll: (e) => {
                  let t = Rt(e.currentTarget);
                  ne((e) => (zt(e, t) ? e : t));
                },
                children: a.map((e, t) =>
                  (0, Z.jsx)(
                    Ot,
                    {
                      isReplying: k === e.id,
                      notification: e,
                      notificationIndex: t,
                      onCloseReply: () => {
                        D((t) => (t === e.id ? null : t));
                      },
                      onDismissNotification: o,
                      onOpenReply: () => {
                        (c?.(e), D(e.id));
                      },
                      onRunNotificationAction: l,
                      onSubmitQuestionOption: u,
                      onSubmitNotificationReply: d,
                      prefersReducedMotion: f,
                      replyInputRef: ie,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, Z.jsx)(E, {
                children: I
                  ? (0, Z.jsx)(
                      Et,
                      { count: F, prefersReducedMotion: f, onClick: ge },
                      `older`,
                    )
                  : null,
              }),
            ],
          })
        : null),
      (t[39] = k),
      (t[40] = oe),
      (t[41] = I),
      (t[42] = F),
      (t[43] = h),
      (t[44] = i),
      (t[45] = a),
      (t[46] = o),
      (t[47] = c),
      (t[48] = l),
      (t[49] = d),
      (t[50] = u),
      (t[51] = f),
      (t[52] = G),
      (t[53] = ge),
      (t[54] = se),
      (t[55] = R),
      (t[56] = z),
      (t[57] = V),
      (t[58] = be))
    : (be = t[58]);
  let q = r ? le : null,
    Se;
  return (
    t[59] !== z ||
    t[60] !== ve ||
    t[61] !== K ||
    t[62] !== ye ||
    t[63] !== be ||
    t[64] !== q ||
    t[65] !== V
      ? ((Se = (0, Z.jsxs)(g.div, {
          layout: z,
          className: ve,
          "data-avatar-overlay-size": `notification-tray-content`,
          style: K,
          transition: V,
          children: [ye, be, q],
        })),
        (t[59] = z),
        (t[60] = ve),
        (t[61] = K),
        (t[62] = ye),
        (t[63] = be),
        (t[64] = q),
        (t[65] = V),
        (t[66] = Se))
      : (Se = t[66]),
    Se
  );
}
function wt(e) {
  let t = (0, Y.c)(18),
    { prefersReducedMotion: n, shouldInsetForScrollbar: r, text: i } = e,
    a = (0, X.useRef)(null),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = () => {
        let e = a.current;
        e != null && (e.scrollTop = e.scrollHeight);
      }),
      (t[0] = o))
    : (o = t[0]);
  let s;
  (t[1] === i ? (s = t[2]) : ((s = [i]), (t[1] = i), (t[2] = s)),
    (0, X.useLayoutEffect)(o, s));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { height: `auto`, opacity: 1 }), (t[3] = c))
    : (c = t[3]);
  let l = r && `[scrollbar-gutter:stable]`,
    u;
  t[4] === l
    ? (u = t[5])
    : ((u = v(
        `no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left`,
        l,
      )),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] === n
    ? (d = t[7])
    : ((d = n ? !1 : { height: 0, opacity: 0 }), (t[6] = n), (t[7] = d));
  let f;
  t[8] === n
    ? (f = t[9])
    : ((f = n ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[8] = n),
      (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = v(
        `relative z-[1] overflow-hidden rounded-[18px] px-3 py-2 forced-colors:bg-[Canvas]`,
        Re.cssMaterial,
      )),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === i
    ? (m = t[12])
    : ((m = (0, Z.jsx)(`div`, {
        className: p,
        children: (0, Z.jsx)(`div`, {
          ref: a,
          className: `text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground`,
          children: i,
        }),
      })),
      (t[11] = i),
      (t[12] = m));
  let h;
  return (
    t[13] !== u || t[14] !== d || t[15] !== f || t[16] !== m
      ? ((h = (0, Z.jsx)(g.div, {
          "aria-live": `polite`,
          animate: c,
          className: u,
          "data-avatar-overlay-size": `notification-tray-caption`,
          initial: d,
          role: `status`,
          transition: f,
          children: m,
        })),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function Tt(e) {
  let t = (0, Y.c)(28),
    { onClick: n, prefersReducedMotion: r } = e,
    i = xe(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage(Q.showLatestNotifications)),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { opacity: 1, scale: 1, x: `-50%` }), (t[2] = o))
    : (o = t[2]);
  let s = r ? 1 : 0.96,
    c;
  t[3] === s
    ? (c = t[4])
    : ((c = { opacity: 0, scale: s, x: `-50%` }), (t[3] = s), (t[4] = c));
  let l = r ? 1 : 0.96,
    u;
  t[5] === l
    ? (u = t[6])
    : ((u = { opacity: 0, scale: l, x: `-50%` }), (t[5] = l), (t[6] = u));
  let d;
  t[7] === r
    ? (d = t[8])
    : ((d = r ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }),
      (t[7] = r),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = v(tn, `top-1 min-w-12`)), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === r
    ? (p = t[11])
    : ((p = r ? void 0 : { scale: 1.03 }), (t[10] = r), (t[11] = p));
  let m;
  t[12] === r
    ? (m = t[13])
    : ((m = r ? void 0 : { scale: 0.96 }), (t[12] = r), (t[13] = m));
  let h;
  t[14] === i
    ? (h = t[15])
    : ((h = i.formatMessage(Q.latestNotifications)), (t[14] = i), (t[15] = h));
  let y;
  t[16] === h
    ? (y = t[17])
    : ((y = (0, Z.jsx)(`span`, { children: h })), (t[16] = h), (t[17] = y));
  let b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(_, {
        className: `icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== n ||
    t[20] !== a ||
    t[21] !== m ||
    t[22] !== y ||
    t[23] !== c ||
    t[24] !== u ||
    t[25] !== d ||
    t[26] !== p
      ? ((x = (0, Z.jsxs)(g.button, {
          type: `button`,
          "aria-label": a,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: o,
          exit: c,
          initial: u,
          transition: d,
          className: f,
          whileHover: p,
          whileTap: m,
          onClick: n,
          children: [y, b],
        })),
        (t[19] = n),
        (t[20] = a),
        (t[21] = m),
        (t[22] = y),
        (t[23] = c),
        (t[24] = u),
        (t[25] = d),
        (t[26] = p),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
function Et(e) {
  let t = (0, Y.c)(36),
    { count: n, onClick: r, prefersReducedMotion: i } = e,
    a = xe(),
    o;
  t[0] !== n || t[1] !== a
    ? ((o = a.formatMessage(Q.showOlderNotifications, { count: n })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { opacity: 1, scale: 1, x: `-50%` }), (t[3] = s))
    : (s = t[3]);
  let c = i ? 1 : 0.96,
    l;
  t[4] === c
    ? (l = t[5])
    : ((l = { opacity: 0, scale: c, x: `-50%` }), (t[4] = c), (t[5] = l));
  let u = i ? 1 : 0.96,
    d;
  t[6] === u
    ? (d = t[7])
    : ((d = { opacity: 0, scale: u, x: `-50%` }), (t[6] = u), (t[7] = d));
  let f;
  t[8] === i
    ? (f = t[9])
    : ((f = i ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }),
      (t[8] = i),
      (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = v(tn, `bottom-1 min-w-9`)), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === i
    ? (m = t[12])
    : ((m = i ? void 0 : { scale: 1.03 }), (t[11] = i), (t[12] = m));
  let h;
  t[13] === i
    ? (h = t[14])
    : ((h = i ? void 0 : { scale: 0.96 }), (t[13] = i), (t[14] = h));
  let y;
  t[15] !== n || t[16] !== a
    ? ((y = a.formatMessage(Q.compactOlderNotificationCount, { count: n })),
      (t[15] = n),
      (t[16] = a),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] === y
    ? (b = t[19])
    : ((b = (0, Z.jsx)(`span`, {
        className: `group-hover:hidden group-focus:hidden`,
        children: y,
      })),
      (t[18] = y),
      (t[19] = b));
  let x;
  t[20] !== n || t[21] !== a
    ? ((x = a.formatMessage(Q.olderNotificationCount, { count: n })),
      (t[20] = n),
      (t[21] = a),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] === x
    ? (S = t[24])
    : ((S = (0, Z.jsx)(`span`, {
        className: `hidden group-hover:inline group-focus:inline`,
        children: x,
      })),
      (t[23] = x),
      (t[24] = S));
  let C;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(_, {
        className: `icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== r ||
    t[27] !== o ||
    t[28] !== h ||
    t[29] !== b ||
    t[30] !== S ||
    t[31] !== l ||
    t[32] !== d ||
    t[33] !== f ||
    t[34] !== m
      ? ((w = (0, Z.jsxs)(g.button, {
          type: `button`,
          "aria-label": o,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: s,
          exit: l,
          initial: d,
          transition: f,
          className: p,
          whileHover: m,
          whileTap: h,
          onClick: r,
          children: [b, S, C],
        })),
        (t[26] = r),
        (t[27] = o),
        (t[28] = h),
        (t[29] = b),
        (t[30] = S),
        (t[31] = l),
        (t[32] = d),
        (t[33] = f),
        (t[34] = m),
        (t[35] = w))
      : (w = t[35]),
    w
  );
}
function Dt(e, t) {
  if (t <= Jt) return e.scrollHeight;
  let n = Wt(e);
  return n[Kt(n, Gt(e, n)) + Jt]?.offsetTop ?? e.scrollHeight;
}
function Ot({
  isReplying: e,
  notification: t,
  notificationIndex: n,
  onDismissNotification: r,
  onCloseReply: i,
  onOpenReply: a,
  onRunNotificationAction: o,
  onSubmitQuestionOption: s,
  onSubmitNotificationReply: c,
  prefersReducedMotion: l,
  replyInputRef: u,
}) {
  let f = xe(),
    p = _t(t) ? t.localConversationId : null,
    m = ye(C, p),
    h = m == null ? null : Ee(m.items, f),
    y = Fe(t),
    b = f.formatMessage(y.labelMessage),
    x = h ?? t.body ?? f.formatMessage(y.fallbackBodyMessage),
    w = t.waitingRequest,
    ee = w == null ? x : De(w, f),
    te = ee.replace(/[.?!]+$/, ``),
    T = ee === b ? b : `${b}. ${te}`,
    ne =
      t.action == null
        ? `${t.title}. ${T}`
        : `${t.title}. ${T}. ${f.formatMessage(Q.openNotification)}`,
    E = t.action != null,
    re = t.kind !== `activity` && r != null,
    [D, ie] = (0, X.useState)(!1),
    [O, k] = (0, X.useState)(!1),
    [A, j] = (0, X.useState)(``),
    [M, N] = (0, X.useState)(null),
    [P, F] = (0, X.useState)(!1),
    [ae, oe] = (0, X.useState)(0),
    [I, se] = (0, X.useState)(!1),
    L = (0, X.useRef)(D),
    ce = (0, X.useRef)(void 0),
    R = w == null ? Zt : Qt,
    z = (0, X.useCallback)((e) => {
      if ((ce.current?.(), (ce.current = void 0), e == null)) return;
      let t = () => {
        let t = e.scrollHeight;
        oe((e) => (e === t ? e : t));
        let n = Ht(e);
        se((e) => {
          let t = (L.current && e) || n;
          return e === t ? e : t;
        });
      };
      (t(), (ce.current = Ue({ axis: `both`, target: e, onChange: t })));
    }, []);
  (0, X.useLayoutEffect)(() => {
    L.current = D;
  }, [D]);
  let B = ae > R + en || I,
    V = B && D && !e,
    H = t.controlTarget?.type === `app-server-conversation` && c != null,
    le = A.trim(),
    U = l
      ? { duration: 0 }
      : { duration: P ? 0.2 : 0.28, ease: [0.16, 1, 0.3, 1] },
    ue = async (e) => {
      if (
        (e.preventDefault(), e.stopPropagation(), !(!H || le.length === 0 || O))
      ) {
        (k(!0), N(null));
        try {
          (await c(t, le), j(``), i());
        } catch {
          N(f.formatMessage(Q.notificationReplyError));
        } finally {
          k(!1);
        }
      }
    };
  return (0, Z.jsxs)(g.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: l ? 0 : 4 },
    role: `listitem`,
    className: `group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left`,
    "data-avatar-overlay-measure": `notification-tray-row`,
    transition: l
      ? { duration: 0 }
      : { delay: Math.min(n, 3) * Xt, duration: 0.18, ease: `easeOut` },
    onBlurCapture: (e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || F(!1);
    },
    onFocusCapture: () => {
      F(!0);
    },
    onPointerEnter: () => {
      F(!0);
    },
    onPointerLeave: () => {
      F(!1);
    },
    children: [
      (0, Z.jsxs)(`div`, {
        className: v(
          `relative z-[1] overflow-hidden rounded-[18px] forced-colors:bg-[Canvas]`,
          Re.cssMaterial,
        ),
        children: [
          (0, Z.jsxs)(g.div, {
            role: E ? `button` : void 0,
            className: v(
              `block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]`,
              re ? `pl-5` : `pl-3`,
              E ? `cursor-interaction` : `cursor-default`,
            ),
            tabIndex: E ? 0 : void 0,
            transition: l
              ? { duration: 0 }
              : { duration: 0.12, ease: `easeOut` },
            whileTap: E && !l ? { scale: 0.995 } : void 0,
            "aria-label": E ? ne : void 0,
            onClick: () => {
              E && o?.(t);
            },
            onKeyDown: (e) => {
              !E ||
                (e.key !== `Enter` && e.key !== ` `) ||
                (e.preventDefault(), o?.(t));
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: `flex min-w-0 items-center pr-7`,
                children: (0, Z.jsx)(`span`, {
                  className: v(
                    `text-size-chat min-w-0 truncate leading-[17px]`,
                    t.kind === `activity`
                      ? `text-token-text-secondary`
                      : `font-semibold text-token-foreground`,
                  ),
                  children: t.title,
                }),
              }),
              (0, Z.jsx)(g.div, {
                ref: z,
                animate: { maxHeight: V ? $t : R },
                className: v(
                  `text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground`,
                  t.kind === `activity` && `hidden`,
                  V
                    ? `whitespace-pre-wrap`
                    : w == null
                      ? `line-clamp-2`
                      : void 0,
                ),
                "data-avatar-overlay-measure-body": `true`,
                initial: !1,
                transition: l
                  ? { duration: 0 }
                  : { duration: 0.18, ease: `easeOut` },
                children:
                  w == null
                    ? x
                    : (0, Z.jsx)(kt, {
                        isExpanded: V,
                        localConversationId: p,
                        request: w,
                        onRunNotificationAction: (e) => {
                          o?.(t, e);
                        },
                        onSubmitQuestionOption: (e) => {
                          s?.(t, e);
                        },
                      }),
              }),
            ],
          }),
          (0, Z.jsx)(`span`, {
            role: `img`,
            "aria-label":
              w?.kind === `question`
                ? f.formatMessage(Q.questionStatusIcon)
                : b,
            className: v(
              `pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100`,
              B &&
                P &&
                `opacity-0 transition-opacity duration-basic motion-reduce:transition-none`,
            ),
            children:
              w?.kind === `question`
                ? (0, Z.jsx)(Xe, { className: y.iconClassName })
                : qt(y),
          }),
          B
            ? (0, Z.jsx)(g.div, {
                animate: { opacity: P ? 1 : 0, x: P ? 0 : 6 },
                className: v(
                  `absolute top-1 right-1 z-10`,
                  P ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `expand`,
                initial: !1,
                transition: U,
                children: (0, Z.jsx)(d, {
                  align: `end`,
                  side: `top`,
                  tooltipContent: f.formatMessage(
                    D
                      ? Q.collapseNotificationTooltip
                      : Q.expandNotificationTooltip,
                  ),
                  children: (0, Z.jsx)(S, {
                    className: v(`size-6`, nn, Re.cssControl),
                    color: `ghost`,
                    size: `icon`,
                    "aria-expanded": D,
                    "aria-label": f.formatMessage(
                      D ? Q.collapseNotification : Q.expandNotification,
                      { title: t.title },
                    ),
                    onClick: () => {
                      ie((e) => !e);
                    },
                    children: (0, Z.jsx)(g.span, {
                      animate: { rotate: D ? 90 : 0 },
                      transition: l
                        ? { duration: 0 }
                        : { duration: 0.12, ease: `easeOut` },
                      children: (0, Z.jsx)(_, { className: `icon-xs` }),
                    }),
                  }),
                }),
              })
            : null,
          H && !e
            ? (0, Z.jsx)(g.div, {
                animate: { opacity: P ? 1 : 0, x: P ? 0 : 6 },
                className: v(
                  `no-drag absolute right-2 bottom-1 z-10`,
                  P ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `reply`,
                initial: !1,
                transition: U,
                children: (0, Z.jsx)(`div`, {
                  className: `flex justify-end pb-1`,
                  children: (0, Z.jsx)(S, {
                    className: v(
                      `h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]`,
                      nn,
                      Re.cssControl,
                    ),
                    color: `outline`,
                    size: `default`,
                    "aria-label": f.formatMessage(Q.replyNotification, {
                      title: t.title,
                    }),
                    onClick: (e) => {
                      (e.stopPropagation(), N(null), j(``), a(), F(!0));
                    },
                    onPointerDown: (e) => {
                      e.stopPropagation();
                    },
                    children: f.formatMessage(Q.replyNotificationButton),
                  }),
                }),
              })
            : null,
          e
            ? (0, Z.jsxs)(g.form, {
                className: `no-drag mx-3 mb-2 border-t border-token-border/60 pt-2`,
                animate: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: l ? 0 : -2 },
                transition: l
                  ? { duration: 0 }
                  : { duration: 0.16, ease: `easeOut` },
                onClick: (e) => {
                  e.stopPropagation();
                },
                onPointerDown: (e) => {
                  e.stopPropagation();
                },
                onSubmit: (e) => {
                  ue(e);
                },
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-1.5`,
                    children: [
                      (0, Z.jsx)(`input`, {
                        ref: u,
                        className: `text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border`,
                        "aria-label": f.formatMessage(Q.replyNotification, {
                          title: t.title,
                        }),
                        autoFocus: !0,
                        placeholder: f.formatMessage(
                          Q.notificationReplyPlaceholder,
                        ),
                        value: A,
                        onChange: (e) => {
                          (j(e.currentTarget.value), N(null));
                        },
                        onKeyDown: (e) => {
                          e.key !== `Escape` ||
                            O ||
                            (e.stopPropagation(), i(), N(null));
                        },
                      }),
                      (0, Z.jsx)(S, {
                        className: `h-6 px-2 text-xs`,
                        color: `primary`,
                        size: `default`,
                        type: `submit`,
                        "aria-label": f.formatMessage(Q.sendNotificationReply, {
                          title: t.title,
                        }),
                        disabled: le.length === 0 || O,
                        loading: O,
                        children: f.formatMessage(Q.replyNotificationButton),
                      }),
                    ],
                  }),
                  M == null
                    ? null
                    : (0, Z.jsx)(`div`, {
                        className: `mt-1 text-[11px] leading-4 text-token-error-foreground`,
                        role: `alert`,
                        children: M,
                      }),
                ],
              })
            : null,
        ],
      }),
      re && !e
        ? (0, Z.jsx)(`div`, {
            className: v(
              `absolute -top-1 -left-1 z-20`,
              P
                ? `pointer-events-auto opacity-100`
                : `pointer-events-none opacity-0`,
            ),
            "data-avatar-overlay-control": `dismiss`,
            children: (0, Z.jsx)(d, {
              align: `start`,
              side: `top`,
              tooltipContent: f.formatMessage(Q.dismissNotificationTooltip),
              children: (0, Z.jsx)(Ie, {
                ariaLabel: f.formatMessage(Q.dismissNotification, {
                  title: t.title,
                }),
                onClick: () => {
                  r?.(t);
                },
              }),
            }),
          })
        : null,
    ],
  });
}
function kt(e) {
  let t = (0, Y.c)(72),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      onSubmitQuestionOption: a,
      request: o,
    } = e,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (e) => {
        `questionOption` in e || i(e);
      }),
      (t[0] = i),
      (t[1] = s));
  let c = s;
  switch (o.kind) {
    case `question`: {
      let e = n ? `break-words whitespace-pre-wrap` : `truncate`,
        r;
      t[2] === e ? (r = t[3]) : ((r = v(`min-w-0`, e)), (t[2] = e), (t[3] = r));
      let s;
      t[4] !== o.prompt || t[5] !== r
        ? ((s = (0, Z.jsx)(`div`, { className: r, children: o.prompt })),
          (t[4] = o.prompt),
          (t[5] = r),
          (t[6] = s))
        : (s = t[6]);
      let c;
      t[7] === o.options
        ? (c = t[8])
        : ((c = o.options.map(At)), (t[7] = o.options), (t[8] = c));
      let l;
      t[9] !== i || t[10] !== a
        ? ((l = (e) => {
            if (`questionOption` in e) {
              a?.(e.questionOption);
              return;
            }
            i(e);
          }),
          (t[9] = i),
          (t[10] = a),
          (t[11] = l))
        : (l = t[11]);
      let u;
      t[12] !== c || t[13] !== l
        ? ((u = (0, Z.jsx)(Ft, { actions: c, onRunNotificationAction: l })),
          (t[12] = c),
          (t[13] = l),
          (t[14] = u))
        : (u = t[14]);
      let d;
      return (
        t[15] !== s || t[16] !== u
          ? ((d = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `question`,
              children: [s, u],
            })),
            (t[15] = s),
            (t[16] = u),
            (t[17] = d))
          : (d = t[17]),
        d
      );
    }
    case `patch`: {
      let e;
      t[18] !== n ||
      t[19] !== o.additions ||
      t[20] !== o.deletions ||
      t[21] !== o.fileCount ||
      t[22] !== o.files ||
      t[23] !== o.summary
        ? ((e = (0, Z.jsx)(Nt, {
            additions: o.additions,
            deletions: o.deletions,
            fileCount: o.fileCount,
            files: o.files,
            isExpanded: n,
            summary: o.summary,
          })),
          (t[18] = n),
          (t[19] = o.additions),
          (t[20] = o.deletions),
          (t[21] = o.fileCount),
          (t[22] = o.files),
          (t[23] = o.summary),
          (t[24] = e))
        : (e = t[24]);
      let r;
      t[25] !== o.actions || t[26] !== c
        ? ((r = (0, Z.jsx)(Ft, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[25] = o.actions),
          (t[26] = c),
          (t[27] = r))
        : (r = t[27]);
      let i;
      return (
        t[28] !== e || t[29] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `patch`,
              children: [e, r],
            })),
            (t[28] = e),
            (t[29] = r),
            (t[30] = i))
          : (i = t[30]),
        i
      );
    }
    case `plan`: {
      let e;
      return (
        t[31] !== n || t[32] !== r || t[33] !== o || t[34] !== c
          ? ((e = (0, Z.jsx)(jt, {
              isExpanded: n,
              localConversationId: r,
              onRunNotificationAction: c,
              request: o,
            })),
            (t[31] = n),
            (t[32] = r),
            (t[33] = o),
            (t[34] = c),
            (t[35] = e))
          : (e = t[35]),
        e
      );
    }
    case `exec`: {
      let e;
      t[36] !== n || t[37] !== o.summary
        ? ((e = (0, Z.jsx)(Mt, { isExpanded: n, text: o.summary })),
          (t[36] = n),
          (t[37] = o.summary),
          (t[38] = e))
        : (e = t[38]);
      let r;
      t[39] !== o.actions || t[40] !== c
        ? ((r = (0, Z.jsx)(Ft, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[39] = o.actions),
          (t[40] = c),
          (t[41] = r))
        : (r = t[41]);
      let i;
      return (
        t[42] !== e || t[43] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `exec`,
              children: [e, r],
            })),
            (t[42] = e),
            (t[43] = r),
            (t[44] = i))
          : (i = t[44]),
        i
      );
    }
    case `network`: {
      let e;
      t[45] !== n || t[46] !== o.target
        ? ((e = (0, Z.jsx)(Mt, { isExpanded: n, text: o.target })),
          (t[45] = n),
          (t[46] = o.target),
          (t[47] = e))
        : (e = t[47]);
      let r;
      t[48] !== o.actions || t[49] !== c
        ? ((r = (0, Z.jsx)(Ft, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[48] = o.actions),
          (t[49] = c),
          (t[50] = r))
        : (r = t[50]);
      let i;
      return (
        t[51] !== e || t[52] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `network`,
              children: [e, r],
            })),
            (t[51] = e),
            (t[52] = r),
            (t[53] = i))
          : (i = t[53]),
        i
      );
    }
    case `permission`: {
      let e;
      t[54] !== n || t[55] !== o.target
        ? ((e = (0, Z.jsx)(Mt, { isExpanded: n, text: o.target })),
          (t[54] = n),
          (t[55] = o.target),
          (t[56] = e))
        : (e = t[56]);
      let r;
      t[57] !== o.actions || t[58] !== c
        ? ((r = (0, Z.jsx)(Ft, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[57] = o.actions),
          (t[58] = c),
          (t[59] = r))
        : (r = t[59]);
      let i;
      return (
        t[60] !== e || t[61] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `permission`,
              children: [e, r],
            })),
            (t[60] = e),
            (t[61] = r),
            (t[62] = i))
          : (i = t[62]),
        i
      );
    }
    case `tool`: {
      let e = o.summary ?? o.target,
        r;
      t[63] !== n || t[64] !== e
        ? ((r = (0, Z.jsx)(Mt, { isExpanded: n, text: e })),
          (t[63] = n),
          (t[64] = e),
          (t[65] = r))
        : (r = t[65]);
      let i;
      t[66] !== o.actions || t[67] !== c
        ? ((i = (0, Z.jsx)(Ft, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[66] = o.actions),
          (t[67] = c),
          (t[68] = i))
        : (i = t[68]);
      let a;
      return (
        t[69] !== r || t[70] !== i
          ? ((a = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `tool`,
              children: [r, i],
            })),
            (t[69] = r),
            (t[70] = i),
            (t[71] = a))
          : (a = t[71]),
        a
      );
    }
  }
}
function At(e, t) {
  return {
    label: e.label,
    tone: t === 0 ? `primary` : `secondary`,
    questionOption: e,
  };
}
function jt(e) {
  let t = (0, Y.c)(20),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      request: a,
    } = e,
    { getModeForSelection: o } = Ve(r),
    s,
    c,
    l,
    u;
  if (
    t[0] !== o ||
    t[1] !== n ||
    t[2] !== a.actions ||
    t[3] !== a.kind ||
    t[4] !== a.summary
  ) {
    let e = o(`default`);
    ((l = a.kind),
      t[9] !== n || t[10] !== a.summary
        ? ((u = (0, Z.jsx)(Mt, { isExpanded: n, text: a.summary })),
          (t[9] = n),
          (t[10] = a.summary),
          (t[11] = u))
        : (u = t[11]),
      (s = Ft),
      (c = a.actions.map((t) =>
        t.intent === `plan-start` ? { ...t, planStartCollaborationMode: e } : t,
      )),
      (t[0] = o),
      (t[1] = n),
      (t[2] = a.actions),
      (t[3] = a.kind),
      (t[4] = a.summary),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[12] !== s || t[13] !== i || t[14] !== c
    ? ((d = (0, Z.jsx)(s, { actions: c, onRunNotificationAction: i })),
      (t[12] = s),
      (t[13] = i),
      (t[14] = c),
      (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== l || t[17] !== u || t[18] !== d
      ? ((f = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-request": l,
          children: [u, d],
        })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function Mt(e) {
  let t = (0, Y.c)(5),
    { isExpanded: n, text: r } = e,
    i = n ? `break-words whitespace-pre-wrap` : `truncate whitespace-nowrap`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = v(`min-w-0 text-token-text-secondary`, i)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== a || t[3] !== r
      ? ((o = (0, Z.jsx)(`div`, {
          className: a,
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: r,
        })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Nt(e) {
  let t = (0, Y.c)(40),
    {
      additions: n,
      deletions: r,
      fileCount: i,
      files: a,
      isExpanded: o,
      summary: s,
    } = e,
    c = xe(),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = c.formatMessage(Q.compactPatchFileCount, { count: i })),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== n || t[4] !== c
    ? ((d =
        n > 0 ? c.formatMessage(Q.compactPatchAdditions, { count: n }) : null),
      (t[3] = n),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== r || t[7] !== c
    ? ((p =
        r > 0 ? c.formatMessage(Q.compactPatchDeletions, { count: r }) : null),
      (t[6] = r),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m = p;
  if (!o) {
    let e;
    t[9] === u
      ? (e = t[10])
      : ((e = (0, Z.jsx)(`span`, { children: u })), (t[9] = u), (t[10] = e));
    let n;
    t[11] === f
      ? (n = t[12])
      : ((n =
          f == null
            ? null
            : (0, Z.jsx)(`span`, {
                className: `ml-1.5 text-token-charts-green`,
                children: f,
              })),
        (t[11] = f),
        (t[12] = n));
    let r;
    t[13] === m
      ? (r = t[14])
      : ((r =
          m == null
            ? null
            : (0, Z.jsx)(`span`, {
                className: `ml-1.5 text-token-error-foreground`,
                children: m,
              })),
        (t[13] = m),
        (t[14] = r));
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsx)(ze, { className: `mx-1.5 text-token-text-tertiary` })),
        (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === s
      ? (a = t[17])
      : ((a = (0, Z.jsx)(`span`, { children: s })), (t[16] = s), (t[17] = a));
    let o;
    return (
      t[18] !== e || t[19] !== n || t[20] !== r || t[21] !== a
        ? ((o = (0, Z.jsxs)(`div`, {
            className: `min-w-0 truncate whitespace-nowrap text-token-text-secondary`,
            "data-avatar-overlay-compact-waiting-summary-text": `true`,
            children: [e, n, r, i, a],
          })),
          (t[18] = e),
          (t[19] = n),
          (t[20] = r),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
      o
    );
  }
  let h;
  t[23] === u
    ? (h = t[24])
    : ((h = (0, Z.jsx)(`span`, {
        className: `text-[11px] leading-4 text-token-text-secondary`,
        children: u,
      })),
      (t[23] = u),
      (t[24] = h));
  let g;
  t[25] === f
    ? (g = t[26])
    : ((g =
        f == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-charts-green`,
              children: f,
            })),
      (t[25] = f),
      (t[26] = g));
  let _;
  t[27] === m
    ? (_ = t[28])
    : ((_ =
        m == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-error-foreground`,
              children: m,
            })),
      (t[27] = m),
      (t[28] = _));
  let v;
  t[29] !== h || t[30] !== g || t[31] !== _
    ? ((v = (0, Z.jsxs)(`div`, {
        className: `mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5`,
        children: [h, g, _],
      })),
      (t[29] = h),
      (t[30] = g),
      (t[31] = _),
      (t[32] = v))
    : (v = t[32]);
  let y;
  t[33] === a ? (y = t[34]) : ((y = a.map(Pt)), (t[33] = a), (t[34] = y));
  let b;
  t[35] === y
    ? (b = t[36])
    : ((b = (0, Z.jsx)(`div`, {
        className: `mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary`,
        children: y,
      })),
      (t[35] = y),
      (t[36] = b));
  let x;
  return (
    t[37] !== v || t[38] !== b
      ? ((x = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: [v, b],
        })),
        (t[37] = v),
        (t[38] = b),
        (t[39] = x))
      : (x = t[39]),
    x
  );
}
function Pt(e) {
  return (0, Z.jsx)(
    `div`,
    { className: `leading-4 break-words`, children: e },
    e,
  );
}
function Ft(e) {
  let t = (0, Y.c)(7),
    { actions: n, onRunNotificationAction: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, Z.jsx)(
            S,
            {
              className: `max-w-full min-w-0 enabled:active:hover:opacity-80`,
              color: Lt(e.tone),
              size: `toolbar`,
              "aria-label": e.ariaLabel ?? e.label,
              title: e.ariaLabel ?? e.label,
              onClick: (t) => {
                (t.stopPropagation(), r(e));
              },
              onPointerDown: It,
              children: (0, Z.jsx)(`span`, {
                className: `truncate`,
                children: e.label,
              }),
            },
            e.ariaLabel ?? e.label,
          )),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, Z.jsx)(`div`, {
          className: `no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px`,
          children: i,
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function It(e) {
  e.stopPropagation();
}
function Lt(e) {
  switch (e) {
    case `primary`:
      return `secondary`;
    case `danger`:
      return `danger`;
    case `secondary`:
      return `secondary`;
  }
}
function Rt(e, t = e.scrollTop) {
  if (!Vt(e))
    return {
      hasScrollableContent: !1,
      hasLatestNotificationsAbove: !1,
      hiddenOlderNotificationCount: 0,
    };
  if (Bt(e, t))
    return {
      hasScrollableContent: !0,
      hasLatestNotificationsAbove: !0,
      hiddenOlderNotificationCount: 0,
    };
  let n = Wt(e),
    r = Gt(e, n, t);
  return {
    hasScrollableContent: !0,
    hasLatestNotificationsAbove: t > Yt,
    hiddenOlderNotificationCount: Ut(e, n, r),
  };
}
function zt(e, t) {
  return (
    e.hasScrollableContent === t.hasScrollableContent &&
    e.hasLatestNotificationsAbove === t.hasLatestNotificationsAbove &&
    e.hiddenOlderNotificationCount === t.hiddenOlderNotificationCount
  );
}
function Bt(e, t = e.scrollTop) {
  let n = Math.max(0, e.scrollHeight - e.clientHeight);
  return Vt(e) && t >= n - Yt;
}
function Vt(e) {
  return e.scrollHeight > e.clientHeight + Yt;
}
function Ht(e) {
  return [e, ...Array.from(e.querySelectorAll(`*`))].some(
    (e) => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + en,
  );
}
function Ut(e, t, n) {
  let r = n + e.clientHeight - Yt;
  return t.filter((e) => e.offsetTop + e.offsetHeight > r).length;
}
function Wt(e) {
  return Array.from(e.children).filter((e) => e instanceof HTMLElement);
}
function Gt(e, t, n = e.scrollTop) {
  return n + (t[0]?.offsetTop ?? 0) + Yt;
}
function Kt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1) e[r].offsetTop <= t && (n = r);
  return n;
}
function qt(e) {
  switch (e.iconType) {
    case `check-circle`:
      return (0, Z.jsx)(K, { className: e.iconClassName });
    case `clock`:
      return (0, Z.jsx)(Je, { className: e.iconClassName });
    case `spinner`:
      return (0, Z.jsx)(T, { className: e.iconClassName });
    case `warning`:
      return (0, Z.jsx)(Ge, { className: e.iconClassName });
  }
}
var Y,
  X,
  Z,
  Q,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn = e(() => {
    ((Y = h()),
      fe(),
      u(),
      P(),
      (X = t(y(), 1)),
      ue(),
      I(),
      Ce(),
      ke(),
      Be(),
      ee(),
      f(),
      p(),
      le(),
      He(),
      k(),
      b(),
      m(),
      Ke(),
      Ye(),
      qe(),
      U(),
      We(),
      Pe(),
      dt(),
      Ze(),
      Ne(),
      ut(),
      je(),
      Me(),
      Oe(),
      J(),
      (Z = H()),
      (Q = de({
        mascotLabel: {
          id: `petOverlay.mascotLabel`,
          defaultMessage: `{petName} pet`,
          description: `Accessible label for the floating Codex pet`,
        },
        openNotification: {
          id: `avatarOverlay.openNotification`,
          defaultMessage: `Open notification`,
          description: `Accessible label for an actionable row in the floating avatar notification tray`,
        },
        dismissNotification: {
          id: `avatarOverlay.dismissNotification`,
          defaultMessage: `Dismiss {title}`,
          description: `Accessible label for dismissing a notification in the floating avatar notification tray`,
        },
        dismissNotificationTooltip: {
          id: `avatarOverlay.dismissNotificationTooltip`,
          defaultMessage: `Dismiss`,
          description: `Tooltip for the icon button that dismisses a floating avatar notification`,
        },
        replyNotification: {
          id: `avatarOverlay.replyNotification`,
          defaultMessage: `Reply to {title}`,
          description: `Accessible label for replying to a floating avatar notification`,
        },
        replyNotificationButton: {
          id: `avatarOverlay.replyNotificationButton`,
          defaultMessage: `Reply`,
          description: `Compact button label for replying to a floating avatar notification`,
        },
        sendNotificationReply: {
          id: `avatarOverlay.sendNotificationReply`,
          defaultMessage: `Send reply to {title}`,
          description: `Accessible label for submitting a floating avatar notification reply`,
        },
        notificationReplyPlaceholder: {
          id: `avatarOverlay.notificationReplyPlaceholder`,
          defaultMessage: `Reply`,
          description: `Placeholder for the one-line floating avatar notification reply input`,
        },
        notificationReplyError: {
          id: `avatarOverlay.notificationReplyError`,
          defaultMessage: `Unable to send reply`,
          description: `Compact error shown when a floating avatar notification reply fails`,
        },
        expandNotification: {
          id: `avatarOverlay.expandNotification`,
          defaultMessage: `Expand {title}`,
          description: `Accessible label for expanding a floating avatar notification row`,
        },
        collapseNotification: {
          id: `avatarOverlay.collapseNotification`,
          defaultMessage: `Collapse {title}`,
          description: `Accessible label for collapsing a floating avatar notification row`,
        },
        expandNotificationTooltip: {
          id: `avatarOverlay.expandNotificationTooltip`,
          defaultMessage: `Expand`,
          description: `Tooltip for the icon button that expands a floating avatar notification`,
        },
        collapseNotificationTooltip: {
          id: `avatarOverlay.collapseNotificationTooltip`,
          defaultMessage: `Collapse`,
          description: `Tooltip for the icon button that collapses a floating avatar notification`,
        },
        collapseNotificationTray: {
          id: `avatarOverlay.collapseNotificationTray`,
          defaultMessage: `Collapse activity`,
          description: `Accessible label and tooltip for the button that collapses the floating avatar activity tray`,
        },
        resizeMascot: {
          id: `avatarOverlay.resizeMascot`,
          defaultMessage: `Resize pet`,
          description: `Accessible label for the handle that resizes the floating Codex pet`,
        },
        notificationList: {
          id: `avatarOverlay.notificationList`,
          defaultMessage: `Activity notifications`,
          description: `Accessible label for the list of floating avatar activity notifications`,
        },
        latestNotifications: {
          id: `avatarOverlay.latestNotifications`,
          defaultMessage: `Latest`,
          description: `Label for the button that scrolls the floating avatar activity list back to the newest notifications`,
        },
        showLatestNotifications: {
          id: `avatarOverlay.showLatestNotifications`,
          defaultMessage: `Show latest activity`,
          description: `Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications`,
        },
        showOlderNotifications: {
          id: `avatarOverlay.showOlderNotifications`,
          defaultMessage: `Show {count, plural, one {# older activity item} other {# older activity items}}`,
          description: `Accessible label for the button that scrolls the floating avatar activity list toward older notifications`,
        },
        olderNotificationCount: {
          id: `avatarOverlay.olderNotificationCount`,
          defaultMessage: `{count, plural, one {# more} other {# more}}`,
          description: `Label for the button that shows there are more floating avatar activity notifications below`,
        },
        compactOlderNotificationCount: {
          id: `avatarOverlay.compactOlderNotificationCount`,
          defaultMessage: `+{count}`,
          description: `Compact label for the edge button that shows hidden floating avatar activity notifications`,
        },
        questionStatusIcon: {
          id: `avatarOverlay.questionStatusIcon`,
          defaultMessage: `Question`,
          description: `Accessible label for a floating avatar notification waiting on a question answer`,
        },
        compactPatchFileCount: {
          id: `avatarOverlay.compactPatchFileCount`,
          defaultMessage: `{count, plural, one {# file} other {# files}}`,
          description: `Compact file count for a patch request in the floating avatar notification tray`,
        },
        compactPatchAdditions: {
          id: `avatarOverlay.compactPatchAdditions`,
          defaultMessage: `+{count}`,
          description: `Compact additions count for a patch request in the floating avatar notification tray`,
        },
        compactPatchDeletions: {
          id: `avatarOverlay.compactPatchDeletions`,
          defaultMessage: `-{count}`,
          description: `Compact deletions count for a patch request in the floating avatar notification tray`,
        },
      })),
      (Jt = 2),
      (Yt = 2),
      (Xt = 0.035),
      (Zt = 32),
      (Qt = 84),
      ($t = 512),
      (en = 1),
      (tn = `group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]`),
      (nn = `bg-token-main-surface-primary`));
  });
function an() {
  let e = (0, yn.c)(10),
    { selectedAvatar: t, selectedAvatarId: n } = gt(),
    r = t == null,
    i,
    a;
  if (
    (e[0] === r
      ? ((i = e[1]), (a = e[2]))
      : ((i = () => {
          r &&
            R.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
              isInteractive: !1,
            });
        }),
        (a = [r]),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a)),
    (0, $.useEffect)(i, a),
    t == null)
  )
    return null;
  let o;
  e[3] !== t || e[4] !== n
    ? ((o = ln(t, n)), (e[3] = t), (e[4] = n), (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] !== t || e[7] !== n || e[8] !== o
      ? ((s = (0, bn.jsx)(on, { selectedAvatar: t, selectedAvatarId: n }, o)),
        (e[6] = t),
        (e[7] = n),
        (e[8] = o),
        (e[9] = s))
      : (s = e[9]),
    s
  );
}
function on({ selectedAvatar: e, selectedAvatarId: t }) {
  let r = re(he),
    i = xe(),
    o = s(lt),
    c = F(`451951815`),
    l = F(`188145323`),
    u = s(D),
    d = s(ct),
    f = l || d,
    p = Cn,
    m = p.phase !== `inactive` && !0;
  ye(C, void 0);
  let { data: h } = ve({ enabled: m, hostId: void 0 }),
    g = m,
    [_, v] = (0, $.useState)(Pn),
    [y, b] = (0, $.useState)(null),
    [x, S] = (0, $.useState)(!0),
    [ee, te] = (0, $.useState)(!1),
    [T, E] = (0, $.useState)(!1),
    [ie, O] = (0, $.useState)(!1),
    [k, j] = (0, $.useState)(null),
    { mascotWidthPx: M, setMascotWidthPx: P } = et(),
    [oe, I] = (0, $.useState)(() => new Map()),
    [se, z] = (0, $.useState)(() => Date.now()),
    [H] = (0, $.useState)(() => cn(e, t)),
    { data: le = [], refetch: U } = a(),
    { data: ue = [], refetch: de } = A({ taskFilter: `current`, limit: 20 }),
    fe = Le({
      includeCompactWaitingRequests: c,
      intl: i,
      localConversations: le,
      excludedConversationId: null,
      remoteTasks: ue,
    }),
    pe =
      H == null
        ? null
        : vt({ intl: i, petName: H.petName, startedAtMs: H.startedAtMs }),
    me = [],
    _e = [],
    { nextNotificationExpiresAtMs: K, notifications: q } = mt({
      dismissedNotificationTurnKeys: oe,
      extraNotifications: m ? [...[], ..._e, ...me] : pe == null ? [] : [pe],
      nowMs: se,
      sessions: m ? [] : fe,
    }),
    Se = yt(q, i),
    Ce = fe.some((e) => e.source !== `cloud` && e.status === `running`),
    we = fe.some((e) => e.source === `cloud` && e.status === `running`),
    Te = (0, $.useRef)(null),
    Ee = (0, $.useRef)(null),
    De = (0, $.useRef)(null),
    Oe = (0, $.useRef)(null),
    ke = (0, $.useRef)(null),
    Ae = (0, $.useRef)(null),
    je = (0, $.useRef)(null),
    Me = (0, $.useRef)(null),
    Ne = (0, $.useRef)(!1),
    J = (0, $.useCallback)(
      (t, n, r, i = x) => {
        u.logProductEvent(
          B,
          it({
            action: t,
            hasRunningCloudSession: we,
            hasRunningLocalSession: Ce,
            isNotificationTrayOpen: i,
            notification: r,
            notificationCount: q.length,
            selectedAvatar: e,
            source: n,
          }),
        );
      },
      [Ce, we, x, q.length, u, e],
    );
  ((0, $.useEffect)(() => {
    if (H == null) return;
    let e = n(Sn, []);
    e.includes(H.avatarId) || ae(Sn, [...e, H.avatarId]);
  }, [H]),
    (0, $.useEffect)(() => {
      Ne.current ||
        (u !== be &&
          ((Ne.current = !0),
          J(
            W.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
            G.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
          )));
    }, [u, J]),
    at({
      interactiveRegionRef: je,
      isPaused: () => Te.current != null || Ee.current != null,
      onInteractiveChange: (e) => {
        R.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
          isInteractive: e,
        });
      },
      regionElementSelectors: wn,
    }));
  let Pe = (0, $.useCallback)(() => {
      if (Ee.current != null || ke.current != null) return;
      let e = dn(je.current);
      if (e == null) return;
      let t = { ...e, isTrayVisible: (x && q.length > 0) || p.caption != null };
      gn(Me.current, t) ||
        ((Me.current = t),
        R.dispatchMessage(`avatar-overlay-element-size-changed`, {
          isTrayVisible: t.isTrayVisible,
          mascot: t.mascot,
          tray: t.tray,
        }));
    }, [x, q.length, p.caption]),
    Fe = (0, $.useCallback)(() => {
      Ae.current != null &&
        (window.clearTimeout(Ae.current), (Ae.current = null));
    }, []),
    Ie = (0, $.useCallback)(() => {
      (De.current != null &&
        (window.cancelAnimationFrame(De.current), (De.current = null)),
        (Oe.current = null));
    }, []),
    Re = (0, $.useCallback)((e) => {
      ((Oe.current = e),
        (De.current ??= window.requestAnimationFrame(() => {
          De.current = null;
          let e = Oe.current;
          ((Oe.current = null),
            !(e == null || Ee.current == null) &&
              R.dispatchMessage(`avatar-overlay-mascot-resize-move`, {
                width: e,
              }));
        })));
    }, []),
    ze = (0, $.useCallback)(
      (e) => {
        ((ke.current = e),
          Fe(),
          (Ae.current = window.setTimeout(() => {
            ((Ae.current = null), (ke.current = null), j(null), Pe());
          }, 100)));
      },
      [Fe, Pe],
    ),
    Be = (0, $.useCallback)(
      () => pn(je.current?.querySelector(Tn) ?? null)?.width ?? M ?? nt,
      [M],
    ),
    Ve = (0, $.useCallback)((e, t) => {
      let n = Ee.current;
      n == null ||
        n.pointerId !== e ||
        ((Ee.current = null),
        E(!1),
        t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
    }, []),
    He = (0, $.useCallback)(
      (e, t) => {
        let n = Ee.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : sn(n, t);
        ((n.currentWidthPx = r),
          Ie(),
          j(r),
          P(r),
          ze(r),
          R.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      },
      [Ie, P, ze],
    ),
    Ue = (0, $.useCallback)(
      (
        e,
        {
          releaseSample: t,
          shouldPreserveOrbMomentum: n = !1,
          shouldOpenMainWindow: r,
        },
      ) => {
        let i = Te.current;
        if (i == null || i.pointerId !== e) return;
        ((Te.current = null), te(!1), b(null));
        let {
          hasMoved: a,
          releaseSample: o,
          velocity: s,
        } = ht(i, t, n && i.usesOrbPhysics);
        if (
          (je.current?.hasPointerCapture?.(e) &&
            je.current.releasePointerCapture?.(e),
          a &&
            !i.hasMoved &&
            o != null &&
            R.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: o.screenX,
              pointerScreenY: o.screenY,
            }),
          r &&
            i.startedOnMascot &&
            !a &&
            (J(
              W.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
              G.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
            R.dispatchMessage(`open-current-main-window`, {
              focusComposer: !0,
              stealFocus: !0,
            })),
          R.dispatchMessage(`avatar-overlay-drag-end`, {
            pointerScreenX: o?.screenX ?? i.screenX,
            pointerScreenY: o?.screenY ?? i.screenY,
          }),
          a &&
            J(
              W.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED,
              G.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
          s != null)
        ) {
          let e = i.usesOrbPhysics ? 3 : 1;
          R.dispatchMessage(`avatar-overlay-drag-release`, {
            shouldBounce: i.usesOrbPhysics,
            velocityX: s.x * e,
            velocityY: s.y * e,
          });
        }
      },
      [m, void 0, null, J],
    ),
    We = (e) => {
      e.button !== 0 ||
        !(e.target instanceof Element) ||
        e.target.closest(`.no-drag`) != null ||
        (e.preventDefault(),
        e.currentTarget.setPointerCapture?.(e.pointerId),
        (Te.current = {
          startedOnMascot:
            e.target.closest(`[data-avatar-mascot="true"]`) != null,
          hasMoved: !1,
          pointerId: e.pointerId,
          samples: [xt(e)],
          screenX: e.screenX,
          screenY: e.screenY,
          usesOrbPhysics: g,
        }),
        R.dispatchMessage(`avatar-overlay-drag-start`, {
          pointerScreenX: e.screenX,
          pointerScreenY: e.screenY,
          pointerWindowX: e.clientX,
          pointerWindowY: e.clientY,
          usesOrbPhysics: g,
        }),
        te(!0),
        b(null));
    },
    Ge = (e) => {
      let t = Te.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = xt(e);
      t.samples = ft([...t.samples, n]);
      let r = n.screenX - t.screenX,
        i = n.screenY - t.screenY;
      (Math.abs(r) < 4 && Math.abs(i) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        b((e) => un({ currentDragState: e, deltaX: r })),
        R.dispatchMessage(`avatar-overlay-drag-move`, {
          pointerScreenX: n.screenX,
          pointerScreenY: n.screenY,
        }));
    },
    Ke = (e) => {
      Ue(e.pointerId, { releaseSample: xt(e), shouldOpenMainWindow: !0 });
    },
    qe = (e) => {
      Ue(e.pointerId, {
        shouldPreserveOrbMomentum: !0,
        shouldOpenMainWindow: !1,
      });
    },
    Je = (e) => {
      Ue(e.pointerId, {
        shouldPreserveOrbMomentum: !0,
        shouldOpenMainWindow: !1,
      });
    },
    Ye = (e) => {
      if (e.button !== 0) return;
      (e.preventDefault(),
        e.stopPropagation(),
        e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = Be();
      (Fe(),
        Ie(),
        (ke.current = null),
        (Ee.current = {
          currentWidthPx: t,
          pointerId: e.pointerId,
          startScreenX: e.screenX,
          startWidthPx: t,
        }),
        j(t),
        E(!0),
        R.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
    },
    Xe = (e) => {
      let t = Ee.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      (e.preventDefault(), e.stopPropagation());
      let n = sn(t, e.screenX);
      ((t.currentWidthPx = n), j(n), Re(n));
    },
    Ze = (e) => {
      (He(e.pointerId, e.screenX), Ve(e.pointerId, e.currentTarget));
    },
    tt = (e) => {
      (e.stopPropagation(), He(e.pointerId), Ve(e.pointerId, e.currentTarget));
    },
    rt = (e) => {
      (He(e.pointerId), Ve(e.pointerId));
    },
    ot = (e, t) => {
      let n = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let i = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (
              t.commandDecision != null &&
              (n?.kind === `exec` || n?.kind === `network`)
            ) {
              w(`reply-with-command-execution-approval-decision`, {
                conversationId: i,
                requestId: n.requestId,
                decision: t.commandDecision,
              }).then(() => {
                U();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && n?.kind === `patch`) {
              w(`reply-with-file-change-approval-decision`, {
                conversationId: i,
                requestId: n.requestId,
                decision: t.fileDecision,
              }).then(() => {
                U();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && n?.kind === `permission`) {
              w(`reply-with-permissions-request-approval-response`, {
                conversationId: i,
                requestId: n.requestId,
                response: t.permissionResponse,
              }).then(() => {
                U();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && n?.kind === `tool`) {
              w(`reply-with-mcp-server-elicitation-response`, {
                conversationId: i,
                requestId: n.requestId,
                response: ne(t.mcpElicitationAction),
              }).then(() => {
                U();
              });
              return;
            }
            break;
          case `plan-start`:
            if (n?.kind === `plan` && t.planStartCollaborationMode != null) {
              w(`update-thread-settings-for-next-turn`, {
                conversationId: i,
                threadSettings: {
                  collaborationMode: t.planStartCollaborationMode,
                },
              })
                .then(() =>
                  w(`remove-plan-implementation-request`, {
                    conversationId: i,
                    turnId: n.turnId,
                  }),
                )
                .then(async () =>
                  w(`send-follow-up-message`, {
                    conversationId: i,
                    prompt: `${N}\n${n.planContent}`,
                    serviceTier: await V(
                      r,
                      r.get(ge, i) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  U();
                });
              return;
            }
            break;
          case `open`:
            break;
        }
      }
      (t != null && t.intent !== `open`) ||
        (e.action != null &&
          (J(
            W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
            G.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            e,
          ),
          R.dispatchMessage(`open-in-main-window`, { path: e.action.path })));
    },
    st = (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        w(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          U();
        });
    },
    ut = (e) => {
      (J(
        W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        G.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        e,
      ),
        I((t) => {
          if (t.get(e.id) === e.turnKey) return t;
          let n = new Map(t);
          return (n.set(e.id, e.turnKey), n);
        }));
    },
    dt = async (e, t) => {
      if (e.controlTarget?.type !== `app-server-conversation`) return;
      let n = t.trim();
      n.length !== 0 &&
        (J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
          G.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        ),
        await w(`send-follow-up-message`, {
          conversationId: e.controlTarget.conversationId,
          prompt: n,
          serviceTier: await V(
            r,
            r.get(ge, e.controlTarget.conversationId) ?? `local`,
            null,
          ),
        }));
    },
    pt = (0, $.useCallback)((e) => {
      R.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, {
        isInteractive: e,
      });
    }, []);
  return (
    ce(
      `avatar-overlay-layout-changed`,
      ({ layout: e }) => {
        (v(e),
          ke.current === e.mascot.width &&
            ((ke.current = null),
            Fe(),
            j(null),
            window.requestAnimationFrame(Pe)));
      },
      [Fe, Pe],
    ),
    (0, $.useLayoutEffect)(() => {
      let e = (!f && ie) || T;
      return (
        document.documentElement.classList.toggle(Mn, e),
        document.body.classList.toggle(Mn, e),
        () => {
          (document.documentElement.classList.remove(Mn),
            document.body.classList.remove(Mn));
        }
      );
    }, [f, ie, T]),
    (0, $.useEffect)(
      () => () => {
        (Fe(), Ie());
      },
      [Ie, Fe],
    ),
    (0, $.useEffect)(() => {
      let e = (e) => {
          (Ue(e.pointerId, { releaseSample: xt(e), shouldOpenMainWindow: !0 }),
            He(e.pointerId, e.screenX),
            Ve(e.pointerId));
        },
        t = (e) => {
          (Ue(e.pointerId, {
            shouldPreserveOrbMomentum: !0,
            shouldOpenMainWindow: !1,
          }),
            He(e.pointerId),
            Ve(e.pointerId));
        };
      return (
        window.addEventListener(`pointerup`, e),
        window.addEventListener(`pointercancel`, t),
        () => {
          (window.removeEventListener(`pointerup`, e),
            window.removeEventListener(`pointercancel`, t));
        }
      );
    }, [He, Ue, Ve]),
    (0, $.useLayoutEffect)(() => {
      let e = null,
        t = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), Pe());
          });
        },
        n = new ResizeObserver(t),
        r = je.current;
      if (r != null) {
        n.observe(r);
        for (let e of fn(r)) n.observe(e);
      }
      return (
        window.addEventListener(`resize`, t),
        t(),
        () => {
          (e != null && window.cancelAnimationFrame(e),
            n.disconnect(),
            window.removeEventListener(`resize`, t));
        }
      );
    }, [Pe, e.id, Se]),
    (0, $.useLayoutEffect)(() => {
      Pe();
    }, [x, Pe, e.id, Se, p.caption, M]),
    (0, $.useEffect)(() => {
      if (K == null) return;
      let e = Math.max(0, K - Date.now()),
        t = window.setTimeout(() => {
          z((e) => Math.max(Date.now(), e + 1));
        }, e);
      return () => {
        window.clearTimeout(t);
      };
    }, [K]),
    (0, $.useEffect)(() => {
      if (!Ce && !we) return;
      let e = window.setTimeout(() => {
        (z((e) => Math.max(Date.now(), e + 1)), Ce && U(), we && de());
      }, xn);
      return () => {
        window.clearTimeout(e);
      };
    }, [Ce, we, U, de]),
    (0, bn.jsx)(St, {
      avatar: e,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: L({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (J(
              W.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              G.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              R.dispatchMessage(`avatar-overlay-close`, {}));
          },
        },
      ],
      debugWindowBorderVisible: o,
      interactiveRegionRef: je,
      restrictedSurface: void 0,
      isDragging: ee,
      isNotificationTrayOpen: x,
      layout: _,
      mascotDragState: y,
      mascotLayout:
        T && k != null
          ? { ..._.mascot, height: Math.ceil(k / $e), width: k }
          : _.mascot,
      mascotResizeHandle: f
        ? void 0
        : {
            onLostPointerCapture: rt,
            onPointerCancel: tt,
            onPointerDown: Ye,
            onPointerEnter: () => {
              O(!0);
            },
            onPointerLeave: () => {
              O(!1);
            },
            onPointerMove: Xe,
            onPointerUp: Ze,
          },
      mascotStyle: Qe(k ?? M),
      notifications: q,
      onCloseNotificationTray: () => {
        (J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          G.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !1,
        ),
          S(!1));
      },
      onLostPointerCapture: Je,
      onPointerCancel: qe,
      onPointerDown: We,
      onPointerMove: Ge,
      onPointerUp: Ke,
      onDismissNotification: ut,
      onNotificationReplyEditorActiveChange: pt,
      onOpenNotificationReply: (e) => {
        J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
          G.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        );
      },
      onRunNotificationAction: ot,
      onSubmitQuestionOption: st,
      onSubmitNotificationReply: dt,
      onOpenNotificationTray: () => {
        (J(
          W.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
          G.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !0,
        ),
          S(!0));
      },
    })
  );
}
function sn(e, t) {
  return tt(e.startWidthPx + t - e.startScreenX);
}
function cn(e, t) {
  return q(e, t) || n(Sn, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function ln(e, t) {
  return q(e, t) ? `pending-custom-avatar` : `ready`;
}
function un({ currentDragState: e, deltaX: t }) {
  return t >= 4 ? `running-right` : t <= -4 ? `running-left` : e;
}
function dn(e) {
  if (e == null) return null;
  let t = pn(e.querySelector(Tn)),
    n = mn(e.querySelector(En));
  return t == null ? null : { mascot: t, tray: n };
}
function fn(e) {
  return Array.from(e.querySelectorAll(Nn.join(`, `)));
}
function pn(e) {
  if (e == null || vn(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function mn(e) {
  if (e == null || vn(e)) return null;
  let t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return null;
  let n = Math.ceil(e.offsetWidth > 0 ? e.offsetWidth : t.width),
    r = e.querySelector(Dn),
    i = e.querySelector(On),
    a = e.querySelector(kn),
    o = e.querySelector(An);
  if (r == null || (i == null && a == null))
    return { width: n, height: Math.ceil(t.height) };
  let s =
    i != null && (a == null ? 0 : 1) + (o == null ? 0 : 1) > 1 ? hn(i) : 0;
  return {
    width: n,
    height: Math.ceil(
      r.getBoundingClientRect().height +
        (a?.scrollHeight ?? 0) +
        (o == null ? 0 : o.getBoundingClientRect().height) +
        s,
    ),
  };
}
function hn(e) {
  let t = Number.parseFloat(window.getComputedStyle(e).rowGap);
  return Number.isFinite(t) ? t : 0;
}
function gn(e, t) {
  return (
    e != null &&
    e.isTrayVisible === t.isTrayVisible &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    _n(e.tray, t.tray)
  );
}
function _n(e, t) {
  return (
    e === t ||
    (e != null && t != null && e.width === t.width && e.height === t.height)
  );
}
function vn(e) {
  return window.getComputedStyle(e).display === `none`;
}
var yn, $, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn;
e(() => {
  ((yn = h()),
    te(),
    P(),
    o(),
    ($ = t(y(), 1)),
    ue(),
    c(),
    I(),
    x(),
    r(),
    M(),
    me(),
    rt(),
    Se(),
    l(),
    ot(),
    U(),
    _e(),
    z(),
    oe(),
    ie(),
    pe(),
    se(),
    st(),
    pt(),
    rn(),
    dt(),
    Ze(),
    ut(),
    Me(),
    bt(),
    (bn = H()),
    (xn = 15e3),
    (Sn = `first-awake-pet-notification-avatar-ids`),
    (Cn = {
      audioStream: null,
      canStart: !1,
      caption: null,
      conversationId: null,
      phase: `inactive`,
      isMicrophoneMuted: !1,
      isMuted: !1,
      start: () => Promise.resolve(),
      stop: () => Promise.resolve(),
      voiceActivity: `idle`,
      toggleMicrophoneMute: () => {},
      toggleMute: () => {},
      waveformCanvasRef: { current: null },
      willResume: !1,
    }),
    (wn = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`]),
    (Tn = `.codex-avatar-root`),
    (En = `[data-avatar-overlay-size='notification-tray']`),
    (Dn = `[data-avatar-overlay-size='notification-tray-header']`),
    (On = `[data-avatar-overlay-size='notification-tray-content']`),
    (kn = `[data-avatar-overlay-size='notification-tray-list']`),
    (An = `[data-avatar-overlay-size='notification-tray-caption']`),
    (jn = `[data-avatar-overlay-measure='notification-tray-row']`),
    (Mn = `codex-avatar-overlay-force-resize-cursor`),
    (Nn = [Tn, En, Dn, On, kn, An, jn]),
    (Pn = {
      mascot: { left: 216, top: 191, width: nt, height: 121 },
      placement: `top-end`,
      tray: { left: 11, top: 56, width: 345, height: 131 },
      viewport: { width: 356, height: 320 },
    }));
})();
export { an as AvatarOverlayPage };
//# sourceMappingURL=avatar-overlay-page-kZTfo-y6.js.map
