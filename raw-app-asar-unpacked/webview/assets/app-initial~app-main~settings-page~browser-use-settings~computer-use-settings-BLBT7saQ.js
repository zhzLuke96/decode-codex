import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as n,
  $J as r,
  $Z as i,
  $_ as a,
  $g as o,
  $r as s,
  A$ as c,
  AJ as l,
  AY as u,
  A_ as d,
  BA as f,
  BJ as p,
  BW as m,
  B_ as h,
  Bg as g,
  C0 as _,
  C_ as v,
  DJ as y,
  DK as b,
  DM as x,
  D_ as S,
  EK as C,
  E_ as w,
  Ej as T,
  FA as E,
  FJ as D,
  FK as O,
  F_ as k,
  Fg as A,
  Fj as j,
  Fq as M,
  Fs as N,
  GJ as P,
  G_ as F,
  Gg as I,
  HK as ee,
  H_ as L,
  Hf as R,
  Hg as te,
  Hj as ne,
  Hq as re,
  I2 as z,
  IA as B,
  IJ as V,
  I_ as ie,
  Is as ae,
  J_ as oe,
  Jg as se,
  KJ as H,
  K_ as U,
  Kg as ce,
  L2 as W,
  L_ as le,
  Lg as ue,
  MA as de,
  MJ as G,
  MV as fe,
  M_ as pe,
  Mq as me,
  NA as he,
  NJ as ge,
  N_ as _e,
  Nq as ve,
  Ns as ye,
  OM as be,
  O_ as xe,
  PJ as Se,
  PK as Ce,
  P_ as we,
  Pq as Te,
  Ps as Ee,
  Q0 as De,
  Q_ as Oe,
  Qr as ke,
  RJ as Ae,
  R_ as je,
  Rg as Me,
  Rq as Ne,
  S0 as Pe,
  S_ as Fe,
  TK as Ie,
  TP as Le,
  T_ as Re,
  U$ as ze,
  UK as Be,
  U_ as Ve,
  Uf as He,
  Ug as Ue,
  Uj as We,
  Uq as Ge,
  VK as Ke,
  V_ as qe,
  Vg as Je,
  WA as Ye,
  WJ as Xe,
  WK as Ze,
  W_ as Qe,
  Wg as $e,
  X_ as et,
  Y$ as tt,
  Y_ as nt,
  Z_ as rt,
  _0 as it,
  _C as at,
  _Y as K,
  __ as ot,
  _j as st,
  _m as ct,
  aJ as lt,
  aQ as ut,
  aY as dt,
  a_ as ft,
  at as pt,
  bG as mt,
  bJ as ht,
  b_ as gt,
  bd as _t,
  cY as vt,
  cp as yt,
  dJ as bt,
  d_ as xt,
  eY as St,
  e_ as Ct,
  ec as wt,
  ev as Tt,
  fJ as Et,
  fY as Dt,
  f_ as Ot,
  fm as kt,
  gJ as At,
  gm as jt,
  hJ as Mt,
  hm as Nt,
  iJ as Pt,
  iQ as Ft,
  i_ as It,
  ic as Lt,
  id as Rt,
  it as zt,
  jV as Bt,
  j_ as Vt,
  k2 as q,
  kK as Ht,
  kY as Ut,
  k_ as Wt,
  l_ as Gt,
  lp as Kt,
  mJ as qt,
  mY as Jt,
  m_ as Yt,
  mg as Xt,
  mm as Zt,
  n_ as Qt,
  nt as $t,
  oQ as en,
  o_ as tn,
  op as nn,
  ot as rn,
  pC as an,
  pY as on,
  p_ as sn,
  qJ as cn,
  q_ as ln,
  qg as un,
  rQ as dn,
  r_ as fn,
  rc as pn,
  rt as mn,
  s2 as hn,
  sQ as gn,
  sY as _n,
  sp as vn,
  tc as yn,
  tt as bn,
  tv as xn,
  u_ as Sn,
  v_ as Cn,
  vd as wn,
  wP as Tn,
  w_ as En,
  x0 as Dn,
  x_ as On,
  xd as kn,
  yG as An,
  yJ as jn,
  yY as Mn,
  y_ as Nn,
  zJ as Pn,
  zW as Fn,
  z_ as In,
  zg as Ln,
  zq as Rn,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function zn(e) {
  if (e.borderBoxSize) {
    let t = Array.isArray(e.borderBoxSize)
      ? e.borderBoxSize[0]
      : e.borderBoxSize;
    return { width: t.inlineSize, height: t.blockSize };
  }
  return { width: e.contentRect.width, height: e.contentRect.height };
}
var Bn = e(() => {});
function Vn() {
  var e = [...arguments];
  return (0, cr.useMemo)(
    () => (t) => {
      e.forEach((e) => e(t));
    },
    e,
  );
}
function Hn(e) {
  let t = Object.prototype.toString.call(e);
  return t === `[object Window]` || t === `[object global]`;
}
function Un(e) {
  return `nodeType` in e;
}
function Wn(e) {
  return e
    ? Hn(e)
      ? e
      : Un(e)
        ? (e.ownerDocument?.defaultView ?? window)
        : window
    : window;
}
function Gn(e) {
  let { Document: t } = Wn(e);
  return e instanceof t;
}
function Kn(e) {
  return Hn(e) ? !1 : e instanceof Wn(e).HTMLElement;
}
function qn(e) {
  return e instanceof Wn(e).SVGElement;
}
function Jn(e) {
  return e
    ? Hn(e)
      ? e.document
      : Un(e)
        ? Gn(e)
          ? e
          : Kn(e) || qn(e)
            ? e.ownerDocument
            : document
        : document
    : document;
}
function Yn(e) {
  let t = (0, cr.useRef)(e);
  return (
    ur(() => {
      t.current = e;
    }),
    (0, cr.useCallback)(function () {
      var e = [...arguments];
      return t.current == null ? void 0 : t.current(...e);
    }, [])
  );
}
function Xn() {
  let e = (0, cr.useRef)(null);
  return [
    (0, cr.useCallback)((t, n) => {
      e.current = setInterval(t, n);
    }, []),
    (0, cr.useCallback)(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []),
  ];
}
function Zn(e, t) {
  t === void 0 && (t = [e]);
  let n = (0, cr.useRef)(e);
  return (
    ur(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function Qn(e, t) {
  let n = (0, cr.useRef)();
  return (0, cr.useMemo)(() => {
    let t = e(n.current);
    return ((n.current = t), t);
  }, [...t]);
}
function $n(e) {
  let t = Yn(e),
    n = (0, cr.useRef)(null);
  return [
    n,
    (0, cr.useCallback)((e) => {
      (e !== n.current && t?.(e, n.current), (n.current = e));
    }, []),
  ];
}
function er(e) {
  let t = (0, cr.useRef)();
  return (
    (0, cr.useEffect)(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
function tr(e, t) {
  return (0, cr.useMemo)(() => {
    if (t) return t;
    let n = dr[e] == null ? 0 : dr[e] + 1;
    return ((dr[e] = n), e + `-` + n);
  }, [e, t]);
}
function nr(e) {
  return function (t) {
    return [...arguments].slice(1).reduce(
      (t, n) => {
        let r = Object.entries(n);
        for (let [n, i] of r) {
          let r = t[n];
          r != null && (t[n] = r + e * i);
        }
        return t;
      },
      { ...t },
    );
  };
}
function rr(e) {
  return `clientX` in e && `clientY` in e;
}
function ir(e) {
  if (!e) return !1;
  let { KeyboardEvent: t } = Wn(e.target);
  return t && e instanceof t;
}
function ar(e) {
  if (!e) return !1;
  let { TouchEvent: t } = Wn(e.target);
  return t && e instanceof t;
}
function or(e) {
  if (ar(e)) {
    if (e.touches && e.touches.length) {
      let { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      let { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return rr(e) ? { x: e.clientX, y: e.clientY } : null;
}
function sr(e) {
  return e.matches(hr) ? e : e.querySelector(hr);
}
var cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr = e(() => {
    ((cr = t(W())),
      (lr =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0),
      (ur = lr ? cr.useLayoutEffect : cr.useEffect),
      (dr = {}),
      (fr = nr(1)),
      (pr = nr(-1)),
      (mr = Object.freeze({
        Translate: {
          toString(e) {
            if (!e) return;
            let { x: t, y: n } = e;
            return (
              `translate3d(` +
              (t ? Math.round(t) : 0) +
              `px, ` +
              (n ? Math.round(n) : 0) +
              `px, 0)`
            );
          },
        },
        Scale: {
          toString(e) {
            if (!e) return;
            let { scaleX: t, scaleY: n } = e;
            return `scaleX(` + t + `) scaleY(` + n + `)`;
          },
        },
        Transform: {
          toString(e) {
            if (e)
              return [mr.Translate.toString(e), mr.Scale.toString(e)].join(` `);
          },
        },
        Transition: {
          toString(e) {
            let { property: t, duration: n, easing: r } = e;
            return t + ` ` + n + `ms ` + r;
          },
        },
      })),
      (hr = `a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`));
  });
function _r(e) {
  let { id: t, value: n } = e;
  return br.createElement(`div`, { id: t, style: xr }, n);
}
function vr(e) {
  let { id: t, announcement: n, ariaLiveType: r = `assertive` } = e;
  return br.createElement(
    `div`,
    {
      id: t,
      style: {
        position: `fixed`,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: `hidden`,
        clip: `rect(0 0 0 0)`,
        clipPath: `inset(100%)`,
        whiteSpace: `nowrap`,
      },
      role: `status`,
      "aria-live": r,
      "aria-atomic": !0,
    },
    n,
  );
}
function yr() {
  let [e, t] = (0, br.useState)(``);
  return {
    announce: (0, br.useCallback)((e) => {
      e != null && t(e);
    }, []),
    announcement: e,
  };
}
var br,
  xr,
  Sr = e(() => {
    ((br = t(W())), (xr = { display: `none` }));
  });
function Cr(e) {
  let t = (0, J.useContext)(Xi);
  (0, J.useEffect)(() => {
    if (!t)
      throw Error(
        `useDndMonitor must be used within a children of <DndContext>`,
      );
    return t(e);
  }, [e, t]);
}
function wr() {
  let [e] = (0, J.useState)(() => new Set()),
    t = (0, J.useCallback)((t) => (e.add(t), () => e.delete(t)), [e]);
  return [
    (0, J.useCallback)(
      (t) => {
        let { type: n, event: r } = t;
        e.forEach((e) => e[n]?.call(e, r));
      },
      [e],
    ),
    t,
  ];
}
function Tr(e) {
  let {
      announcements: t = Qi,
      container: n,
      hiddenTextDescribedById: r,
      screenReaderInstructions: i = Zi,
    } = e,
    { announce: a, announcement: o } = yr(),
    s = tr(`DndLiveRegion`),
    [c, l] = (0, J.useState)(!1);
  if (
    ((0, J.useEffect)(() => {
      l(!0);
    }, []),
    Cr(
      (0, J.useMemo)(
        () => ({
          onDragStart(e) {
            let { active: n } = e;
            a(t.onDragStart({ active: n }));
          },
          onDragMove(e) {
            let { active: n, over: r } = e;
            t.onDragMove && a(t.onDragMove({ active: n, over: r }));
          },
          onDragOver(e) {
            let { active: n, over: r } = e;
            a(t.onDragOver({ active: n, over: r }));
          },
          onDragEnd(e) {
            let { active: n, over: r } = e;
            a(t.onDragEnd({ active: n, over: r }));
          },
          onDragCancel(e) {
            let { active: n, over: r } = e;
            a(t.onDragCancel({ active: n, over: r }));
          },
        }),
        [a, t],
      ),
    ),
    !c)
  )
    return null;
  let u = J.createElement(
    J.Fragment,
    null,
    J.createElement(_r, { id: r, value: i.draggable }),
    J.createElement(vr, { id: s, announcement: o }),
  );
  return n ? (0, Yi.createPortal)(u, n) : u;
}
function Er() {}
function Dr(e, t) {
  return (0, J.useMemo)(() => ({ sensor: e, options: t ?? {} }), [e, t]);
}
function Or() {
  var e = [...arguments];
  return (0, J.useMemo)(() => [...e].filter((e) => e != null), [...e]);
}
function kr(e, t) {
  return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function Ar(e, t) {
  let n = or(e);
  if (!n) return `0 0`;
  let r = {
    x: ((n.x - t.left) / t.width) * 100,
    y: ((n.y - t.top) / t.height) * 100,
  };
  return r.x + `% ` + r.y + `%`;
}
function jr(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return n - r;
}
function Mr(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function Nr(e) {
  let { left: t, top: n, height: r, width: i } = e;
  return [
    { x: t, y: n },
    { x: t + i, y: n },
    { x: t, y: n + r },
    { x: t + i, y: n + r },
  ];
}
function Pr(e, t) {
  if (!e || e.length === 0) return null;
  let [n] = e;
  return t ? n[t] : n;
}
function Fr(e, t, n) {
  return (
    t === void 0 && (t = e.left),
    n === void 0 && (n = e.top),
    { x: t + e.width * 0.5, y: n + e.height * 0.5 }
  );
}
function Ir(e, t) {
  let n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    i = Math.min(t.left + t.width, e.left + e.width),
    a = Math.min(t.top + t.height, e.top + e.height),
    o = i - r,
    s = a - n;
  if (r < i && n < a) {
    let n = t.width * t.height,
      r = e.width * e.height,
      i = o * s,
      a = i / (n + r - i);
    return Number(a.toFixed(4));
  }
  return 0;
}
function Lr(e, t) {
  let { top: n, left: r, bottom: i, right: a } = t;
  return n <= e.y && e.y <= i && r <= e.x && e.x <= a;
}
function Rr(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function zr(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : ea;
}
function Br(e) {
  return function (t) {
    return [...arguments].slice(1).reduce(
      (t, n) => ({
        ...t,
        top: t.top + e * n.y,
        bottom: t.bottom + e * n.y,
        left: t.left + e * n.x,
        right: t.right + e * n.x,
      }),
      { ...t },
    );
  };
}
function Vr(e) {
  if (e.startsWith(`matrix3d(`)) {
    let t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith(`matrix(`)) {
    let t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function Hr(e, t, n) {
  let r = Vr(t);
  if (!r) return e;
  let { scaleX: i, scaleY: a, x: o, y: s } = r,
    c = e.left - o - (1 - i) * parseFloat(n),
    l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(` `) + 1)),
    u = i ? e.width / i : e.width,
    d = a ? e.height / a : e.height;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c };
}
function Ur(e, t) {
  t === void 0 && (t = oa);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    let { transform: t, transformOrigin: r } = Wn(e).getComputedStyle(e);
    t && (n = Hr(n, t, r));
  }
  let { top: r, left: i, width: a, height: o, bottom: s, right: c } = n;
  return { top: r, left: i, width: a, height: o, bottom: s, right: c };
}
function Wr(e) {
  return Ur(e, { ignoreTransform: !0 });
}
function Gr(e) {
  let t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function Kr(e, t) {
  return (
    t === void 0 && (t = Wn(e).getComputedStyle(e)),
    t.position === `fixed`
  );
}
function qr(e, t) {
  t === void 0 && (t = Wn(e).getComputedStyle(e));
  let n = /(auto|scroll|overlay)/;
  return [`overflow`, `overflowX`, `overflowY`].some((e) => {
    let r = t[e];
    return typeof r == `string` ? n.test(r) : !1;
  });
}
function Jr(e, t) {
  let n = [];
  function r(i) {
    if ((t != null && n.length >= t) || !i) return n;
    if (Gn(i) && i.scrollingElement != null && !n.includes(i.scrollingElement))
      return (n.push(i.scrollingElement), n);
    if (!Kn(i) || qn(i) || n.includes(i)) return n;
    let a = Wn(e).getComputedStyle(i);
    return (i !== e && qr(i, a) && n.push(i), Kr(i, a) ? n : r(i.parentNode));
  }
  return e ? r(e) : n;
}
function Yr(e) {
  let [t] = Jr(e, 1);
  return t ?? null;
}
function Xr(e) {
  return !lr || !e
    ? null
    : Hn(e)
      ? e
      : Un(e)
        ? Gn(e) || e === Jn(e).scrollingElement
          ? window
          : Kn(e)
            ? e
            : null
        : null;
}
function Zr(e) {
  return Hn(e) ? e.scrollX : e.scrollLeft;
}
function Qr(e) {
  return Hn(e) ? e.scrollY : e.scrollTop;
}
function $r(e) {
  return { x: Zr(e), y: Qr(e) };
}
function ei(e) {
  return !lr || !e ? !1 : e === document.scrollingElement;
}
function ti(e) {
  let t = { x: 0, y: 0 },
    n = ei(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height };
  return {
    isTop: e.scrollTop <= t.y,
    isLeft: e.scrollLeft <= t.x,
    isBottom: e.scrollTop >= r.y,
    isRight: e.scrollLeft >= r.x,
    maxScroll: r,
    minScroll: t,
  };
}
function ni(e, t, n, r, i) {
  let { top: a, left: o, right: s, bottom: c } = n;
  (r === void 0 && (r = 10), i === void 0 && (i = ca));
  let { isTop: l, isBottom: u, isLeft: d, isRight: f } = ti(e),
    p = { x: 0, y: 0 },
    m = { x: 0, y: 0 },
    h = { height: t.height * i.y, width: t.width * i.x };
  return (
    !l && a <= t.top + h.height
      ? ((p.y = sa.Backward),
        (m.y = r * Math.abs((t.top + h.height - a) / h.height)))
      : !u &&
        c >= t.bottom - h.height &&
        ((p.y = sa.Forward),
        (m.y = r * Math.abs((t.bottom - h.height - c) / h.height))),
    !f && s >= t.right - h.width
      ? ((p.x = sa.Forward),
        (m.x = r * Math.abs((t.right - h.width - s) / h.width)))
      : !d &&
        o <= t.left + h.width &&
        ((p.x = sa.Backward),
        (m.x = r * Math.abs((t.left + h.width - o) / h.width))),
    { direction: p, speed: m }
  );
}
function ri(e) {
  if (e === document.scrollingElement) {
    let { innerWidth: e, innerHeight: t } = window;
    return { top: 0, left: 0, right: e, bottom: t, width: e, height: t };
  }
  let { top: t, left: n, right: r, bottom: i } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: i,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function ii(e) {
  return e.reduce((e, t) => fr(e, $r(t)), ea);
}
function ai(e) {
  return e.reduce((e, t) => e + Zr(t), 0);
}
function oi(e) {
  return e.reduce((e, t) => e + Qr(t), 0);
}
function si(e, t) {
  if ((t === void 0 && (t = Ur), !e)) return;
  let { top: n, left: r, bottom: i, right: a } = t(e);
  Yr(e) &&
    (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: `center`, inline: `center` });
}
function ci(e) {
  let { EventTarget: t } = Wn(e);
  return e instanceof t ? e : Jn(e);
}
function li(e, t) {
  let n = Math.abs(e.x),
    r = Math.abs(e.y);
  return typeof t == `number`
    ? Math.sqrt(n ** 2 + r ** 2) > t
    : `x` in t && `y` in t
      ? n > t.x && r > t.y
      : `x` in t
        ? n > t.x
        : `y` in t
          ? r > t.y
          : !1;
}
function ui(e) {
  e.preventDefault();
}
function di(e) {
  e.stopPropagation();
}
function fi(e) {
  return !!(e && `distance` in e);
}
function pi(e) {
  return !!(e && `delay` in e);
}
function mi(e) {
  let {
      acceleration: t,
      activator: n = wa.Pointer,
      canScroll: r,
      draggingRect: i,
      enabled: a,
      interval: o = 5,
      order: s = Ta.TreeOrder,
      pointerCoordinates: c,
      scrollableAncestors: l,
      scrollableAncestorRects: u,
      delta: d,
      threshold: f,
    } = e,
    p = hi({ delta: d, disabled: !a }),
    [m, h] = Xn(),
    g = (0, J.useRef)({ x: 0, y: 0 }),
    _ = (0, J.useRef)({ x: 0, y: 0 }),
    v = (0, J.useMemo)(() => {
      switch (n) {
        case wa.Pointer:
          return c ? { top: c.y, bottom: c.y, left: c.x, right: c.x } : null;
        case wa.DraggableRect:
          return i;
      }
    }, [n, i, c]),
    y = (0, J.useRef)(null),
    b = (0, J.useCallback)(() => {
      let e = y.current;
      if (!e) return;
      let t = g.current.x * _.current.x,
        n = g.current.y * _.current.y;
      e.scrollBy(t, n);
    }, []),
    x = (0, J.useMemo)(
      () => (s === Ta.TreeOrder ? [...l].reverse() : l),
      [s, l],
    );
  (0, J.useEffect)(() => {
    if (!a || !l.length || !v) {
      h();
      return;
    }
    for (let e of x) {
      if (r?.(e) === !1) continue;
      let n = u[l.indexOf(e)];
      if (!n) continue;
      let { direction: i, speed: a } = ni(e, n, v, t, f);
      for (let e of [`x`, `y`]) p[e][i[e]] || ((a[e] = 0), (i[e] = 0));
      if (a.x > 0 || a.y > 0) {
        (h(), (y.current = e), m(b, o), (g.current = a), (_.current = i));
        return;
      }
    }
    ((g.current = { x: 0, y: 0 }), (_.current = { x: 0, y: 0 }), h());
  }, [
    t,
    b,
    r,
    h,
    a,
    o,
    JSON.stringify(v),
    JSON.stringify(p),
    m,
    l,
    x,
    u,
    JSON.stringify(f),
  ]);
}
function hi(e) {
  let { delta: t, disabled: n } = e,
    r = er(t);
  return Qn(
    (e) => {
      if (n || !r || !e) return Ea;
      let i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [sa.Backward]: e.x[sa.Backward] || i.x === -1,
          [sa.Forward]: e.x[sa.Forward] || i.x === 1,
        },
        y: {
          [sa.Backward]: e.y[sa.Backward] || i.y === -1,
          [sa.Forward]: e.y[sa.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r],
  );
}
function gi(e, t) {
  let n = t == null ? void 0 : e.get(t),
    r = n ? n.node.current : null;
  return Qn((e) => (t == null ? null : (r ?? e ?? null)), [r, t]);
}
function _i(e, t) {
  return (0, J.useMemo)(
    () =>
      e.reduce((e, n) => {
        let { sensor: r } = n,
          i = r.activators.map((e) => ({
            eventName: e.eventName,
            handler: t(e.handler, n),
          }));
        return [...e, ...i];
      }, []),
    [e, t],
  );
}
function vi(e, t) {
  let { dragging: n, dependencies: r, config: i } = t,
    [a, o] = (0, J.useState)(null),
    { frequency: s, measure: c, strategy: l } = i,
    u = (0, J.useRef)(e),
    d = g(),
    f = Zn(d),
    p = (0, J.useCallback)(
      function (e) {
        (e === void 0 && (e = []),
          !f.current &&
            o((t) =>
              t === null ? e : t.concat(e.filter((e) => !t.includes(e))),
            ));
      },
      [f],
    ),
    m = (0, J.useRef)(null),
    h = Qn(
      (t) => {
        if (d && !n) return ka;
        if (!t || t === ka || u.current !== e || a != null) {
          let t = new Map();
          for (let n of e) {
            if (!n) continue;
            if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
              t.set(n.id, n.rect.current);
              continue;
            }
            let e = n.node.current,
              r = e ? new ua(c(e), e) : null;
            ((n.rect.current = r), r && t.set(n.id, r));
          }
          return t;
        }
        return t;
      },
      [e, a, n, d, c],
    );
  return (
    (0, J.useEffect)(() => {
      u.current = e;
    }, [e]),
    (0, J.useEffect)(() => {
      d || p();
    }, [n, d]),
    (0, J.useEffect)(() => {
      a && a.length > 0 && o(null);
    }, [JSON.stringify(a)]),
    (0, J.useEffect)(() => {
      d ||
        typeof s != `number` ||
        m.current !== null ||
        (m.current = setTimeout(() => {
          (p(), (m.current = null));
        }, s));
    }, [s, d, p, ...r]),
    {
      droppableRects: h,
      measureDroppableContainers: p,
      measuringScheduled: a != null,
    }
  );
  function g() {
    switch (l) {
      case Da.Always:
        return !1;
      case Da.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function yi(e, t) {
  return Qn(
    (n) => (e ? n || (typeof t == `function` ? t(e) : e) : null),
    [t, e],
  );
}
function bi(e, t) {
  return yi(e, t);
}
function xi(e) {
  let { callback: t, disabled: n } = e,
    r = Yn(t),
    i = (0, J.useMemo)(() => {
      if (n || typeof window > `u` || window.MutationObserver === void 0)
        return;
      let { MutationObserver: e } = window;
      return new e(r);
    }, [r, n]);
  return ((0, J.useEffect)(() => () => i?.disconnect(), [i]), i);
}
function Si(e) {
  let { callback: t, disabled: n } = e,
    r = Yn(t),
    i = (0, J.useMemo)(() => {
      if (n || typeof window > `u` || window.ResizeObserver === void 0) return;
      let { ResizeObserver: e } = window;
      return new e(r);
    }, [n]);
  return ((0, J.useEffect)(() => () => i?.disconnect(), [i]), i);
}
function Ci(e) {
  return new ua(Ur(e), e);
}
function wi(e, t, n) {
  t === void 0 && (t = Ci);
  let [r, i] = (0, J.useState)(null);
  function a() {
    i((r) => {
      if (!e) return null;
      if (e.isConnected === !1) return r ?? n ?? null;
      let i = t(e);
      return JSON.stringify(r) === JSON.stringify(i) ? r : i;
    });
  }
  let o = xi({
      callback(t) {
        if (e)
          for (let n of t) {
            let { type: t, target: r } = n;
            if (
              t === `childList` &&
              r instanceof HTMLElement &&
              r.contains(e)
            ) {
              a();
              break;
            }
          }
      },
    }),
    s = Si({ callback: a });
  return (
    ur(() => {
      (a(),
        e
          ? (s?.observe(e),
            o?.observe(document.body, { childList: !0, subtree: !0 }))
          : (s?.disconnect(), o?.disconnect()));
    }, [e]),
    r
  );
}
function Ti(e) {
  return zr(e, yi(e));
}
function Ei(e) {
  let t = (0, J.useRef)(e),
    n = Qn(
      (n) =>
        e
          ? n &&
            n !== Aa &&
            e &&
            t.current &&
            e.parentNode === t.current.parentNode
            ? n
            : Jr(e)
          : Aa,
      [e],
    );
  return (
    (0, J.useEffect)(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function Di(e) {
  let [t, n] = (0, J.useState)(null),
    r = (0, J.useRef)(e),
    i = (0, J.useCallback)((e) => {
      let t = Xr(e.target);
      t && n((e) => (e ? (e.set(t, $r(t)), new Map(e)) : null));
    }, []);
  return (
    (0, J.useEffect)(() => {
      let t = r.current;
      if (e !== t) {
        a(t);
        let o = e
          .map((e) => {
            let t = Xr(e);
            return t
              ? (t.addEventListener(`scroll`, i, { passive: !0 }), [t, $r(t)])
              : null;
          })
          .filter((e) => e != null);
        (n(o.length ? new Map(o) : null), (r.current = e));
      }
      return () => {
        (a(e), a(t));
      };
      function a(e) {
        e.forEach((e) => {
          Xr(e)?.removeEventListener(`scroll`, i);
        });
      }
    }, [i, e]),
    (0, J.useMemo)(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((e, t) => fr(e, t), ea)
            : ii(e)
          : ea,
      [e, t],
    )
  );
}
function Oi(e, t) {
  t === void 0 && (t = []);
  let n = (0, J.useRef)(null);
  return (
    (0, J.useEffect)(() => {
      n.current = null;
    }, t),
    (0, J.useEffect)(() => {
      let t = e !== ea;
      (t && !n.current && (n.current = e),
        !t && n.current && (n.current = null));
    }, [e]),
    n.current ? pr(e, n.current) : ea
  );
}
function ki(e) {
  (0, J.useEffect)(
    () => {
      if (!lr) return;
      let t = e.map((e) => {
        let { sensor: t } = e;
        return t.setup == null ? void 0 : t.setup();
      });
      return () => {
        for (let e of t) e?.();
      };
    },
    e.map((e) => {
      let { sensor: t } = e;
      return t;
    }),
  );
}
function Ai(e, t) {
  return (0, J.useMemo)(
    () =>
      e.reduce((e, n) => {
        let { eventName: r, handler: i } = n;
        return (
          (e[r] = (e) => {
            i(e, t);
          }),
          e
        );
      }, {}),
    [e, t],
  );
}
function ji(e) {
  return (0, J.useMemo)(() => (e ? Gr(e) : null), [e]);
}
function Mi(e, t) {
  t === void 0 && (t = Ur);
  let [n] = e,
    r = ji(n ? Wn(n) : null),
    [i, a] = (0, J.useState)(ja);
  function o() {
    a(() => (e.length ? e.map((e) => (ei(e) ? r : new ua(t(e), e))) : ja));
  }
  let s = Si({ callback: o });
  return (
    ur(() => {
      (s?.disconnect(), o(), e.forEach((e) => s?.observe(e)));
    }, [e]),
    i
  );
}
function Ni(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  let t = e.children[0];
  return Kn(t) ? t : e;
}
function Pi(e) {
  let { measure: t } = e,
    [n, r] = (0, J.useState)(null),
    i = Si({
      callback: (0, J.useCallback)(
        (e) => {
          for (let { target: n } of e)
            if (Kn(n)) {
              r((e) => {
                let r = t(n);
                return e ? { ...e, width: r.width, height: r.height } : r;
              });
              break;
            }
        },
        [t],
      ),
    }),
    [a, o] = $n(
      (0, J.useCallback)(
        (e) => {
          let n = Ni(e);
          (i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null));
        },
        [t, i],
      ),
    );
  return (0, J.useMemo)(() => ({ nodeRef: a, rect: n, setRef: o }), [n, a, o]);
}
function Fi() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Fa() },
  };
}
function Ii(e, t) {
  switch (t.type) {
    case $i.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case $i.DragMove:
      return e.draggable.active == null
        ? e
        : {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          };
    case $i.DragEnd:
    case $i.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case $i.RegisterDroppable: {
      let { element: n } = t,
        { id: r } = n,
        i = new Fa(e.droppable.containers);
      return (
        i.set(r, n),
        { ...e, droppable: { ...e.droppable, containers: i } }
      );
    }
    case $i.SetDroppableDisabled: {
      let { id: n, key: r, disabled: i } = t,
        a = e.droppable.containers.get(n);
      if (!a || r !== a.key) return e;
      let o = new Fa(e.droppable.containers);
      return (
        o.set(n, { ...a, disabled: i }),
        { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    case $i.UnregisterDroppable: {
      let { id: n, key: r } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      let a = new Fa(e.droppable.containers);
      return (
        a.delete(n),
        { ...e, droppable: { ...e.droppable, containers: a } }
      );
    }
    default:
      return e;
  }
}
function Li(e) {
  let { disabled: t } = e,
    { active: n, activatorEvent: r, draggableNodes: i } = (0, J.useContext)(Ra),
    a = er(r),
    o = er(n?.id);
  return (
    (0, J.useEffect)(() => {
      if (!t && !r && a && o != null) {
        if (!ir(a) || document.activeElement === a.target) return;
        let e = i.get(o);
        if (!e) return;
        let { activatorNode: t, node: n } = e;
        if (!t.current && !n.current) return;
        requestAnimationFrame(() => {
          for (let e of [t.current, n.current]) {
            if (!e) continue;
            let t = sr(e);
            if (t) {
              t.focus();
              break;
            }
          }
        });
      }
    }, [r, t, i, o, a]),
    null
  );
}
function Ri(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length
    ? e.reduce((e, t) => t({ transform: e, ...r }), n)
    : n;
}
function zi(e) {
  return (0, J.useMemo)(
    () => ({
      draggable: { ...Pa.draggable, ...e?.draggable },
      droppable: { ...Pa.droppable, ...e?.droppable },
      dragOverlay: { ...Pa.dragOverlay, ...e?.dragOverlay },
    }),
    [e?.draggable, e?.droppable, e?.dragOverlay],
  );
}
function Bi(e) {
  let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e,
    a = (0, J.useRef)(!1),
    { x: o, y: s } = typeof i == `boolean` ? { x: i, y: i } : i;
  ur(() => {
    if ((!o && !s) || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r) return;
    let e = t?.node.current;
    if (!e || e.isConnected === !1) return;
    let i = zr(n(e), r);
    if (
      (o || (i.x = 0),
      s || (i.y = 0),
      (a.current = !0),
      Math.abs(i.x) > 0 || Math.abs(i.y) > 0)
    ) {
      let t = Yr(e);
      t && t.scrollBy({ top: i.y, left: i.x });
    }
  }, [t, o, s, r, n]);
}
function Vi(e) {
  let { id: t, data: n, disabled: r = !1, attributes: i } = e,
    a = tr(Ga),
    {
      activators: o,
      activatorEvent: s,
      active: c,
      activeNodeRect: l,
      ariaDescribedById: u,
      draggableNodes: d,
      over: f,
    } = (0, J.useContext)(Ra),
    {
      role: p = Wa,
      roleDescription: m = `draggable`,
      tabIndex: h = 0,
    } = i ?? {},
    g = c?.id === t,
    _ = (0, J.useContext)(g ? Ba : Ua),
    [v, y] = $n(),
    [b, x] = $n(),
    S = Ai(o, t),
    C = Zn(n);
  return (
    ur(
      () => (
        d.set(t, { id: t, key: a, node: v, activatorNode: b, data: C }),
        () => {
          let e = d.get(t);
          e && e.key === a && d.delete(t);
        }
      ),
      [d, t],
    ),
    {
      active: c,
      activatorEvent: s,
      activeNodeRect: l,
      attributes: (0, J.useMemo)(
        () => ({
          role: p,
          tabIndex: h,
          "aria-disabled": r,
          "aria-pressed": g && p === Wa ? !0 : void 0,
          "aria-roledescription": m,
          "aria-describedby": u.draggable,
        }),
        [r, p, h, g, m, u.draggable],
      ),
      isDragging: g,
      listeners: r ? void 0 : S,
      node: v,
      over: f,
      setNodeRef: y,
      setActivatorNodeRef: x,
      transform: _,
    }
  );
}
function Hi() {
  return (0, J.useContext)(za);
}
function Ui(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e,
    a = tr(Ka),
    {
      active: o,
      dispatch: s,
      over: c,
      measureDroppableContainers: l,
    } = (0, J.useContext)(Ra),
    u = (0, J.useRef)({ disabled: n }),
    d = (0, J.useRef)(!1),
    f = (0, J.useRef)(null),
    p = (0, J.useRef)(null),
    { disabled: m, updateMeasurementsFor: h, timeout: g } = { ...qa, ...i },
    _ = Zn(h ?? r),
    v = Si({
      callback: (0, J.useCallback)(() => {
        if (!d.current) {
          d.current = !0;
          return;
        }
        (p.current != null && clearTimeout(p.current),
          (p.current = setTimeout(() => {
            (l(Array.isArray(_.current) ? _.current : [_.current]),
              (p.current = null));
          }, g)));
      }, [g]),
      disabled: m || !o,
    }),
    [y, b] = $n(
      (0, J.useCallback)(
        (e, t) => {
          v && (t && (v.unobserve(t), (d.current = !1)), e && v.observe(e));
        },
        [v],
      ),
    ),
    x = Zn(t);
  return (
    (0, J.useEffect)(() => {
      !v ||
        !y.current ||
        (v.disconnect(), (d.current = !1), v.observe(y.current));
    }, [y, v]),
    (0, J.useEffect)(
      () => (
        s({
          type: $i.RegisterDroppable,
          element: { id: r, key: a, disabled: n, node: y, rect: f, data: x },
        }),
        () => s({ type: $i.UnregisterDroppable, key: a, id: r })
      ),
      [r],
    ),
    (0, J.useEffect)(() => {
      n !== u.current.disabled &&
        (s({ type: $i.SetDroppableDisabled, id: r, key: a, disabled: n }),
        (u.current.disabled = n));
    }, [r, a, n, s]),
    { active: o, rect: f, isOver: c?.id === r, node: y, over: c, setNodeRef: b }
  );
}
function Wi(e) {
  let { animation: t, children: n } = e,
    [r, i] = (0, J.useState)(null),
    [a, o] = (0, J.useState)(null),
    s = er(n);
  return (
    !n && !r && s && i(s),
    ur(() => {
      if (!a) return;
      let e = r?.key,
        n = r?.props.id;
      if (e == null || n == null) {
        i(null);
        return;
      }
      Promise.resolve(t(n, a)).then(() => {
        i(null);
      });
    }, [t, r, a]),
    J.createElement(
      J.Fragment,
      null,
      n,
      r ? (0, J.cloneElement)(r, { ref: o }) : null,
    )
  );
}
function Gi(e) {
  let { children: t } = e;
  return J.createElement(
    Ra.Provider,
    { value: La },
    J.createElement(Ba.Provider, { value: Ja }, t),
  );
}
function Ki(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: i,
  } = e;
  return Yn((e, a) => {
    if (t === null) return;
    let o = n.get(e);
    if (!o) return;
    let s = o.node.current;
    if (!s) return;
    let c = Ni(a);
    if (!c) return;
    let { transform: l } = Wn(a).getComputedStyle(a),
      u = Vr(l);
    if (!u) return;
    let d = typeof t == `function` ? t : qi(t);
    return (
      si(s, i.draggable.measure),
      d({
        active: { id: e, data: o.data, node: s, rect: i.draggable.measure(s) },
        draggableNodes: n,
        dragOverlay: { node: a, rect: i.dragOverlay.measure(c) },
        droppableContainers: r,
        measuringConfiguration: i,
        transform: u,
      })
    );
  });
}
function qi(e) {
  let {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: i,
  } = { ...eo, ...e };
  return (e) => {
    let { active: a, dragOverlay: o, transform: s, ...c } = e;
    if (!t) return;
    let l = { x: o.rect.left - a.rect.left, y: o.rect.top - a.rect.top },
      u = {
        scaleX: s.scaleX === 1 ? 1 : (a.rect.width * s.scaleX) / o.rect.width,
        scaleY: s.scaleY === 1 ? 1 : (a.rect.height * s.scaleY) / o.rect.height,
      },
      d = { x: s.x - l.x, y: s.y - l.y, ...u },
      f = i({
        ...c,
        active: a,
        dragOverlay: o,
        transform: { initial: s, final: d },
      }),
      [p] = f,
      m = f[f.length - 1];
    if (JSON.stringify(p) === JSON.stringify(m)) return;
    let h = r?.({ active: a, dragOverlay: o, ...c }),
      g = o.node.animate(f, { duration: t, easing: n, fill: `forwards` });
    return new Promise((e) => {
      g.onfinish = () => {
        (h?.(), e());
      };
    });
  };
}
function Ji(e) {
  return (0, J.useMemo)(() => {
    if (e != null) return (to++, to);
  }, [e]);
}
var J,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  Y,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro = e(() => {
    ((J = t(W())),
      (Yi = t(Ut())),
      gr(),
      Sr(),
      (Xi = (0, J.createContext)(null)),
      (Zi = {
        draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
      }),
      (Qi = {
        onDragStart(e) {
          let { active: t } = e;
          return `Picked up draggable item ` + t.id + `.`;
        },
        onDragOver(e) {
          let { active: t, over: n } = e;
          return n
            ? `Draggable item ` +
                t.id +
                ` was moved over droppable area ` +
                n.id +
                `.`
            : `Draggable item ` + t.id + ` is no longer over a droppable area.`;
        },
        onDragEnd(e) {
          let { active: t, over: n } = e;
          return n
            ? `Draggable item ` +
                t.id +
                ` was dropped over droppable area ` +
                n.id
            : `Draggable item ` + t.id + ` was dropped.`;
        },
        onDragCancel(e) {
          let { active: t } = e;
          return (
            `Dragging was cancelled. Draggable item ` + t.id + ` was dropped.`
          );
        },
      }),
      (function (e) {
        ((e.DragStart = `dragStart`),
          (e.DragMove = `dragMove`),
          (e.DragEnd = `dragEnd`),
          (e.DragCancel = `dragCancel`),
          (e.DragOver = `dragOver`),
          (e.RegisterDroppable = `registerDroppable`),
          (e.SetDroppableDisabled = `setDroppableDisabled`),
          (e.UnregisterDroppable = `unregisterDroppable`));
      })(($i ||= {})),
      (ea = Object.freeze({ x: 0, y: 0 })),
      (ta = (e) => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e,
          i = Fr(t, t.left, t.top),
          a = [];
        for (let e of r) {
          let { id: t } = e,
            r = n.get(t);
          if (r) {
            let n = kr(Fr(r), i);
            a.push({ id: t, data: { droppableContainer: e, value: n } });
          }
        }
        return a.sort(jr);
      }),
      (na = (e) => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e,
          i = Nr(t),
          a = [];
        for (let e of r) {
          let { id: t } = e,
            r = n.get(t);
          if (r) {
            let n = Nr(r),
              o = i.reduce((e, t, r) => e + kr(n[r], t), 0),
              s = Number((o / 4).toFixed(4));
            a.push({ id: t, data: { droppableContainer: e, value: s } });
          }
        }
        return a.sort(jr);
      }),
      (ra = (e) => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e,
          i = [];
        for (let e of r) {
          let { id: r } = e,
            a = n.get(r);
          if (a) {
            let n = Ir(a, t);
            n > 0 &&
              i.push({ id: r, data: { droppableContainer: e, value: n } });
          }
        }
        return i.sort(Mr);
      }),
      (ia = (e) => {
        let {
          droppableContainers: t,
          droppableRects: n,
          pointerCoordinates: r,
        } = e;
        if (!r) return [];
        let i = [];
        for (let e of t) {
          let { id: t } = e,
            a = n.get(t);
          if (a && Lr(r, a)) {
            let n = Nr(a).reduce((e, t) => e + kr(r, t), 0),
              o = Number((n / 4).toFixed(4));
            i.push({ id: t, data: { droppableContainer: e, value: o } });
          }
        }
        return i.sort(jr);
      }),
      (aa = Br(1)),
      (oa = { ignoreTransform: !1 }),
      (function (e) {
        ((e[(e.Forward = 1)] = `Forward`), (e[(e.Backward = -1)] = `Backward`));
      })((sa ||= {})),
      (ca = { x: 0.2, y: 0.2 }),
      (la = [
        [`x`, [`left`, `right`], ai],
        [`y`, [`top`, `bottom`], oi],
      ]),
      (ua = class {
        constructor(e, t) {
          ((this.rect = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.right = void 0),
            (this.left = void 0));
          let n = Jr(t),
            r = ii(n);
          ((this.rect = { ...e }),
            (this.width = e.width),
            (this.height = e.height));
          for (let [e, t, i] of la)
            for (let a of t)
              Object.defineProperty(this, a, {
                get: () => {
                  let t = i(n),
                    o = r[e] - t;
                  return this.rect[a] + o;
                },
                enumerable: !0,
              });
          Object.defineProperty(this, `rect`, { enumerable: !1 });
        }
      }),
      (da = class {
        constructor(e) {
          ((this.target = void 0),
            (this.listeners = []),
            (this.removeAll = () => {
              this.listeners.forEach((e) =>
                this.target?.removeEventListener(...e),
              );
            }),
            (this.target = e));
        }
        add(e, t, n) {
          var r;
          ((r = this.target) == null || r.addEventListener(e, t, n),
            this.listeners.push([e, t, n]));
        }
      }),
      (function (e) {
        ((e.Click = `click`),
          (e.DragStart = `dragstart`),
          (e.Keydown = `keydown`),
          (e.ContextMenu = `contextmenu`),
          (e.Resize = `resize`),
          (e.SelectionChange = `selectionchange`),
          (e.VisibilityChange = `visibilitychange`));
      })((fa ||= {})),
      (function (e) {
        ((e.Space = `Space`),
          (e.Down = `ArrowDown`),
          (e.Right = `ArrowRight`),
          (e.Left = `ArrowLeft`),
          (e.Up = `ArrowUp`),
          (e.Esc = `Escape`),
          (e.Enter = `Enter`),
          (e.Tab = `Tab`));
      })((Y ||= {})),
      (pa = {
        start: [Y.Space, Y.Enter],
        cancel: [Y.Esc],
        end: [Y.Space, Y.Enter, Y.Tab],
      }),
      (ma = (e, t) => {
        let { currentCoordinates: n } = t;
        switch (e.code) {
          case Y.Right:
            return { ...n, x: n.x + 25 };
          case Y.Left:
            return { ...n, x: n.x - 25 };
          case Y.Down:
            return { ...n, y: n.y + 25 };
          case Y.Up:
            return { ...n, y: n.y - 25 };
        }
      }),
      (ha = class {
        constructor(e) {
          ((this.props = void 0),
            (this.autoScrollEnabled = !1),
            (this.referenceCoordinates = void 0),
            (this.listeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e));
          let {
            event: { target: t },
          } = e;
          ((this.props = e),
            (this.listeners = new da(Jn(t))),
            (this.windowListeners = new da(Wn(t))),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            this.attach());
        }
        attach() {
          (this.handleStart(),
            this.windowListeners.add(fa.Resize, this.handleCancel),
            this.windowListeners.add(fa.VisibilityChange, this.handleCancel),
            setTimeout(() =>
              this.listeners.add(fa.Keydown, this.handleKeyDown),
            ));
        }
        handleStart() {
          let { activeNode: e, onStart: t } = this.props,
            n = e.node.current;
          (n && si(n), t(ea));
        }
        handleKeyDown(e) {
          if (ir(e)) {
            let { active: t, context: n, options: r } = this.props,
              {
                keyboardCodes: i = pa,
                coordinateGetter: a = ma,
                scrollBehavior: o = `smooth`,
              } = r,
              { code: s } = e;
            if (i.end.includes(s)) {
              this.handleEnd(e);
              return;
            }
            if (i.cancel.includes(s)) {
              this.handleCancel(e);
              return;
            }
            let { collisionRect: c } = n.current,
              l = c ? { x: c.left, y: c.top } : ea;
            this.referenceCoordinates ||= l;
            let u = a(e, {
              active: t,
              context: n.current,
              currentCoordinates: l,
            });
            if (u) {
              let t = pr(u, l),
                r = { x: 0, y: 0 },
                { scrollableAncestors: i } = n.current;
              for (let n of i) {
                let i = e.code,
                  {
                    isTop: a,
                    isRight: s,
                    isLeft: c,
                    isBottom: l,
                    maxScroll: d,
                    minScroll: f,
                  } = ti(n),
                  p = ri(n),
                  m = {
                    x: Math.min(
                      i === Y.Right ? p.right - p.width / 2 : p.right,
                      Math.max(
                        i === Y.Right ? p.left : p.left + p.width / 2,
                        u.x,
                      ),
                    ),
                    y: Math.min(
                      i === Y.Down ? p.bottom - p.height / 2 : p.bottom,
                      Math.max(
                        i === Y.Down ? p.top : p.top + p.height / 2,
                        u.y,
                      ),
                    ),
                  },
                  h = (i === Y.Right && !s) || (i === Y.Left && !c),
                  g = (i === Y.Down && !l) || (i === Y.Up && !a);
                if (h && m.x !== u.x) {
                  let e = n.scrollLeft + t.x,
                    a =
                      (i === Y.Right && e <= d.x) || (i === Y.Left && e >= f.x);
                  if (a && !t.y) {
                    n.scrollTo({ left: e, behavior: o });
                    return;
                  }
                  (a
                    ? (r.x = n.scrollLeft - e)
                    : (r.x =
                        i === Y.Right
                          ? n.scrollLeft - d.x
                          : n.scrollLeft - f.x),
                    r.x && n.scrollBy({ left: -r.x, behavior: o }));
                  break;
                } else if (g && m.y !== u.y) {
                  let e = n.scrollTop + t.y,
                    a = (i === Y.Down && e <= d.y) || (i === Y.Up && e >= f.y);
                  if (a && !t.x) {
                    n.scrollTo({ top: e, behavior: o });
                    return;
                  }
                  (a
                    ? (r.y = n.scrollTop - e)
                    : (r.y =
                        i === Y.Down ? n.scrollTop - d.y : n.scrollTop - f.y),
                    r.y && n.scrollBy({ top: -r.y, behavior: o }));
                  break;
                }
              }
              this.handleMove(e, fr(pr(u, this.referenceCoordinates), r));
            }
          }
        }
        handleMove(e, t) {
          let { onMove: n } = this.props;
          (e.preventDefault(), n(t));
        }
        handleEnd(e) {
          let { onEnd: t } = this.props;
          (e.preventDefault(), this.detach(), t());
        }
        handleCancel(e) {
          let { onCancel: t } = this.props;
          (e.preventDefault(), this.detach(), t());
        }
        detach() {
          (this.listeners.removeAll(), this.windowListeners.removeAll());
        }
      }),
      (ha.activators = [
        {
          eventName: `onKeyDown`,
          handler: (e, t, n) => {
            let { keyboardCodes: r = pa, onActivation: i } = t,
              { active: a } = n,
              { code: o } = e.nativeEvent;
            if (r.start.includes(o)) {
              let t = a.activatorNode.current;
              return t && e.target !== t
                ? !1
                : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
            }
            return !1;
          },
        },
      ]),
      (ga = class {
        constructor(e, t, n) {
          (n === void 0 && (n = ci(e.event.target)),
            (this.props = void 0),
            (this.events = void 0),
            (this.autoScrollEnabled = !0),
            (this.document = void 0),
            (this.activated = !1),
            (this.initialCoordinates = void 0),
            (this.timeoutId = null),
            (this.listeners = void 0),
            (this.documentListeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e),
            (this.events = t));
          let { event: r } = e,
            { target: i } = r;
          ((this.props = e),
            (this.events = t),
            (this.document = Jn(i)),
            (this.documentListeners = new da(this.document)),
            (this.listeners = new da(n)),
            (this.windowListeners = new da(Wn(i))),
            (this.initialCoordinates = or(r) ?? ea),
            (this.handleStart = this.handleStart.bind(this)),
            (this.handleMove = this.handleMove.bind(this)),
            (this.handleEnd = this.handleEnd.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            (this.handleKeydown = this.handleKeydown.bind(this)),
            (this.removeTextSelection = this.removeTextSelection.bind(this)),
            this.attach());
        }
        attach() {
          let {
            events: e,
            props: {
              options: {
                activationConstraint: t,
                bypassActivationConstraint: n,
              },
            },
          } = this;
          if (
            (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }),
            this.listeners.add(e.end.name, this.handleEnd),
            e.cancel && this.listeners.add(e.cancel.name, this.handleCancel),
            this.windowListeners.add(fa.Resize, this.handleCancel),
            this.windowListeners.add(fa.DragStart, ui),
            this.windowListeners.add(fa.VisibilityChange, this.handleCancel),
            this.windowListeners.add(fa.ContextMenu, ui),
            this.documentListeners.add(fa.Keydown, this.handleKeydown),
            t)
          ) {
            if (
              n != null &&
              n({
                event: this.props.event,
                activeNode: this.props.activeNode,
                options: this.props.options,
              })
            )
              return this.handleStart();
            if (pi(t)) {
              ((this.timeoutId = setTimeout(this.handleStart, t.delay)),
                this.handlePending(t));
              return;
            }
            if (fi(t)) {
              this.handlePending(t);
              return;
            }
          }
          this.handleStart();
        }
        detach() {
          (this.listeners.removeAll(),
            this.windowListeners.removeAll(),
            setTimeout(this.documentListeners.removeAll, 50),
            this.timeoutId !== null &&
              (clearTimeout(this.timeoutId), (this.timeoutId = null)));
        }
        handlePending(e, t) {
          let { active: n, onPending: r } = this.props;
          r(n, e, this.initialCoordinates, t);
        }
        handleStart() {
          let { initialCoordinates: e } = this,
            { onStart: t } = this.props;
          e &&
            ((this.activated = !0),
            this.documentListeners.add(fa.Click, di, { capture: !0 }),
            this.removeTextSelection(),
            this.documentListeners.add(
              fa.SelectionChange,
              this.removeTextSelection,
            ),
            t(e));
        }
        handleMove(e) {
          let { activated: t, initialCoordinates: n, props: r } = this,
            {
              onMove: i,
              options: { activationConstraint: a },
            } = r;
          if (!n) return;
          let o = or(e) ?? ea,
            s = pr(n, o);
          if (!t && a) {
            if (fi(a)) {
              if (a.tolerance != null && li(s, a.tolerance))
                return this.handleCancel();
              if (li(s, a.distance)) return this.handleStart();
            }
            if (pi(a) && li(s, a.tolerance)) return this.handleCancel();
            this.handlePending(a, s);
            return;
          }
          (e.cancelable && e.preventDefault(), i(o));
        }
        handleEnd() {
          let { onAbort: e, onEnd: t } = this.props;
          (this.detach(), this.activated || e(this.props.active), t());
        }
        handleCancel() {
          let { onAbort: e, onCancel: t } = this.props;
          (this.detach(), this.activated || e(this.props.active), t());
        }
        handleKeydown(e) {
          e.code === Y.Esc && this.handleCancel();
        }
        removeTextSelection() {
          var e;
          (e = this.document.getSelection()) == null || e.removeAllRanges();
        }
      }),
      (_a = {
        cancel: { name: `pointercancel` },
        move: { name: `pointermove` },
        end: { name: `pointerup` },
      }),
      (va = class extends ga {
        constructor(e) {
          let { event: t } = e,
            n = Jn(t.target);
          super(e, _a, n);
        }
      }),
      (va.activators = [
        {
          eventName: `onPointerDown`,
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t;
            return !n.isPrimary || n.button !== 0
              ? !1
              : (r?.({ event: n }), !0);
          },
        },
      ]),
      (ya = { move: { name: `mousemove` }, end: { name: `mouseup` } }),
      (function (e) {
        e[(e.RightClick = 2)] = `RightClick`;
      })((ba ||= {})),
      (xa = class extends ga {
        constructor(e) {
          super(e, ya, Jn(e.event.target));
        }
      }),
      (xa.activators = [
        {
          eventName: `onMouseDown`,
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t;
            return n.button === ba.RightClick ? !1 : (r?.({ event: n }), !0);
          },
        },
      ]),
      (Sa = {
        cancel: { name: `touchcancel` },
        move: { name: `touchmove` },
        end: { name: `touchend` },
      }),
      (Ca = class extends ga {
        constructor(e) {
          super(e, Sa);
        }
        static setup() {
          return (
            window.addEventListener(Sa.move.name, e, {
              capture: !1,
              passive: !1,
            }),
            function () {
              window.removeEventListener(Sa.move.name, e);
            }
          );
          function e() {}
        }
      }),
      (Ca.activators = [
        {
          eventName: `onTouchStart`,
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t,
              { touches: i } = n;
            return i.length > 1 ? !1 : (r?.({ event: n }), !0);
          },
        },
      ]),
      (function (e) {
        ((e[(e.Pointer = 0)] = `Pointer`),
          (e[(e.DraggableRect = 1)] = `DraggableRect`));
      })((wa ||= {})),
      (function (e) {
        ((e[(e.TreeOrder = 0)] = `TreeOrder`),
          (e[(e.ReversedTreeOrder = 1)] = `ReversedTreeOrder`));
      })((Ta ||= {})),
      (Ea = {
        x: { [sa.Backward]: !1, [sa.Forward]: !1 },
        y: { [sa.Backward]: !1, [sa.Forward]: !1 },
      }),
      (function (e) {
        ((e[(e.Always = 0)] = `Always`),
          (e[(e.BeforeDragging = 1)] = `BeforeDragging`),
          (e[(e.WhileDragging = 2)] = `WhileDragging`));
      })((Da ||= {})),
      (function (e) {
        e.Optimized = `optimized`;
      })((Oa ||= {})),
      (ka = new Map()),
      (Aa = []),
      (ja = []),
      (Ma = [
        { sensor: va, options: {} },
        { sensor: ha, options: {} },
      ]),
      (Na = { current: {} }),
      (Pa = {
        draggable: { measure: Wr },
        droppable: {
          measure: Wr,
          strategy: Da.WhileDragging,
          frequency: Oa.Optimized,
        },
        dragOverlay: { measure: Ur },
      }),
      (Fa = class extends Map {
        get(e) {
          return e == null ? void 0 : (super.get(e) ?? void 0);
        }
        toArray() {
          return Array.from(this.values());
        }
        getEnabled() {
          return this.toArray().filter((e) => {
            let { disabled: t } = e;
            return !t;
          });
        }
        getNodeFor(e) {
          return this.get(e)?.node.current ?? void 0;
        }
      }),
      (Ia = {
        activatorEvent: null,
        active: null,
        activeNode: null,
        activeNodeRect: null,
        collisions: null,
        containerNodeRect: null,
        draggableNodes: new Map(),
        droppableRects: new Map(),
        droppableContainers: new Fa(),
        over: null,
        dragOverlay: { nodeRef: { current: null }, rect: null, setRef: Er },
        scrollableAncestors: [],
        scrollableAncestorRects: [],
        measuringConfiguration: Pa,
        measureDroppableContainers: Er,
        windowRect: null,
        measuringScheduled: !1,
      }),
      (La = {
        activatorEvent: null,
        activators: [],
        active: null,
        activeNodeRect: null,
        ariaDescribedById: { draggable: `` },
        dispatch: Er,
        draggableNodes: new Map(),
        over: null,
        measureDroppableContainers: Er,
      }),
      (Ra = (0, J.createContext)(La)),
      (za = (0, J.createContext)(Ia)),
      (Ba = (0, J.createContext)({ ...ea, scaleX: 1, scaleY: 1 })),
      (function (e) {
        ((e[(e.Uninitialized = 0)] = `Uninitialized`),
          (e[(e.Initializing = 1)] = `Initializing`),
          (e[(e.Initialized = 2)] = `Initialized`));
      })((Va ||= {})),
      (Ha = (0, J.memo)(function (e) {
        let {
            id: t,
            accessibility: n,
            autoScroll: r = !0,
            children: i,
            sensors: a = Ma,
            collisionDetection: o = ra,
            measuring: s,
            modifiers: c,
            ...l
          } = e,
          [u, d] = (0, J.useReducer)(Ii, void 0, Fi),
          [f, p] = wr(),
          [m, h] = (0, J.useState)(Va.Uninitialized),
          g = m === Va.Initialized,
          {
            draggable: { active: _, nodes: v, translate: y },
            droppable: { containers: b },
          } = u,
          x = _ == null ? null : v.get(_),
          S = (0, J.useRef)({ initial: null, translated: null }),
          C = (0, J.useMemo)(
            () => (_ == null ? null : { id: _, data: x?.data ?? Na, rect: S }),
            [_, x],
          ),
          w = (0, J.useRef)(null),
          [T, E] = (0, J.useState)(null),
          [D, O] = (0, J.useState)(null),
          k = Zn(l, Object.values(l)),
          A = tr(`DndDescribedBy`, t),
          j = (0, J.useMemo)(() => b.getEnabled(), [b]),
          M = zi(s),
          {
            droppableRects: N,
            measureDroppableContainers: P,
            measuringScheduled: F,
          } = vi(j, {
            dragging: g,
            dependencies: [y.x, y.y],
            config: M.droppable,
          }),
          I = gi(v, _),
          ee = (0, J.useMemo)(() => (D ? or(D) : null), [D]),
          L = Ce(),
          R = bi(I, M.draggable.measure);
        Bi({
          activeNode: _ == null ? null : v.get(_),
          config: L.layoutShiftCompensation,
          initialRect: R,
          measure: M.draggable.measure,
        });
        let te = wi(I, M.draggable.measure, R),
          ne = wi(I ? I.parentElement : null),
          re = (0, J.useRef)({
            activatorEvent: null,
            active: null,
            activeNode: I,
            collisionRect: null,
            collisions: null,
            droppableRects: N,
            draggableNodes: v,
            draggingNode: null,
            draggingNodeRect: null,
            droppableContainers: b,
            over: null,
            scrollableAncestors: [],
            scrollAdjustedTranslate: null,
          }),
          z = b.getNodeFor(re.current.over?.id),
          B = Pi({ measure: M.dragOverlay.measure }),
          V = B.nodeRef.current ?? I,
          ie = g ? (B.rect ?? te) : null,
          ae = !!(B.nodeRef.current && B.rect),
          oe = Ti(ae ? null : te),
          se = ji(V ? Wn(V) : null),
          H = Ei(g ? (z ?? I) : null),
          U = Mi(H),
          ce = Ri(c, {
            transform: { x: y.x - oe.x, y: y.y - oe.y, scaleX: 1, scaleY: 1 },
            activatorEvent: D,
            active: C,
            activeNodeRect: te,
            containerNodeRect: ne,
            draggingNodeRect: ie,
            over: re.current.over,
            overlayNodeRect: B.rect,
            scrollableAncestors: H,
            scrollableAncestorRects: U,
            windowRect: se,
          }),
          W = ee ? fr(ee, y) : null,
          le = Di(H),
          ue = Oi(le),
          de = Oi(le, [te]),
          G = fr(ce, ue),
          fe = ie ? aa(ie, ce) : null,
          pe =
            C && fe
              ? o({
                  active: C,
                  collisionRect: fe,
                  droppableRects: N,
                  droppableContainers: j,
                  pointerCoordinates: W,
                })
              : null,
          me = Pr(pe, `id`),
          [he, ge] = (0, J.useState)(null),
          _e = Rr(ae ? ce : fr(ce, de), he?.rect ?? null, te),
          ve = (0, J.useRef)(null),
          ye = (0, J.useCallback)(
            (e, t) => {
              let { sensor: n, options: r } = t;
              if (w.current == null) return;
              let i = v.get(w.current);
              if (!i) return;
              let a = e.nativeEvent;
              ve.current = new n({
                active: w.current,
                activeNode: i,
                event: a,
                options: r,
                context: re,
                onAbort(e) {
                  if (!v.get(e)) return;
                  let { onDragAbort: t } = k.current,
                    n = { id: e };
                  (t?.(n), f({ type: `onDragAbort`, event: n }));
                },
                onPending(e, t, n, r) {
                  if (!v.get(e)) return;
                  let { onDragPending: i } = k.current,
                    a = {
                      id: e,
                      constraint: t,
                      initialCoordinates: n,
                      offset: r,
                    };
                  (i?.(a), f({ type: `onDragPending`, event: a }));
                },
                onStart(e) {
                  let t = w.current;
                  if (t == null) return;
                  let n = v.get(t);
                  if (!n) return;
                  let { onDragStart: r } = k.current,
                    i = {
                      activatorEvent: a,
                      active: { id: t, data: n.data, rect: S },
                    };
                  (0, Yi.unstable_batchedUpdates)(() => {
                    (r?.(i),
                      h(Va.Initializing),
                      d({
                        type: $i.DragStart,
                        initialCoordinates: e,
                        active: t,
                      }),
                      f({ type: `onDragStart`, event: i }),
                      E(ve.current),
                      O(a));
                  });
                },
                onMove(e) {
                  d({ type: $i.DragMove, coordinates: e });
                },
                onEnd: o($i.DragEnd),
                onCancel: o($i.DragCancel),
              });
              function o(e) {
                return async function () {
                  let {
                      active: t,
                      collisions: n,
                      over: r,
                      scrollAdjustedTranslate: i,
                    } = re.current,
                    o = null;
                  if (t && i) {
                    let { cancelDrop: s } = k.current;
                    ((o = {
                      activatorEvent: a,
                      active: t,
                      collisions: n,
                      delta: i,
                      over: r,
                    }),
                      e === $i.DragEnd &&
                        typeof s == `function` &&
                        (await Promise.resolve(s(o))) &&
                        (e = $i.DragCancel));
                  }
                  ((w.current = null),
                    (0, Yi.unstable_batchedUpdates)(() => {
                      (d({ type: e }),
                        h(Va.Uninitialized),
                        ge(null),
                        E(null),
                        O(null),
                        (ve.current = null));
                      let t = e === $i.DragEnd ? `onDragEnd` : `onDragCancel`;
                      if (o) {
                        let e = k.current[t];
                        (e?.(o), f({ type: t, event: o }));
                      }
                    }));
                };
              }
            },
            [v],
          ),
          be = _i(
            a,
            (0, J.useCallback)(
              (e, t) => (n, r) => {
                let i = n.nativeEvent,
                  a = v.get(r);
                if (w.current !== null || !a || i.dndKit || i.defaultPrevented)
                  return;
                let o = { active: a };
                e(n, t.options, o) === !0 &&
                  ((i.dndKit = { capturedBy: t.sensor }),
                  (w.current = r),
                  ye(n, t));
              },
              [v, ye],
            ),
          );
        (ki(a),
          ur(() => {
            te && m === Va.Initializing && h(Va.Initialized);
          }, [te, m]),
          (0, J.useEffect)(() => {
            let { onDragMove: e } = k.current,
              {
                active: t,
                activatorEvent: n,
                collisions: r,
                over: i,
              } = re.current;
            if (!t || !n) return;
            let a = {
              active: t,
              activatorEvent: n,
              collisions: r,
              delta: { x: G.x, y: G.y },
              over: i,
            };
            (0, Yi.unstable_batchedUpdates)(() => {
              (e?.(a), f({ type: `onDragMove`, event: a }));
            });
          }, [G.x, G.y]),
          (0, J.useEffect)(() => {
            let {
              active: e,
              activatorEvent: t,
              collisions: n,
              droppableContainers: r,
              scrollAdjustedTranslate: i,
            } = re.current;
            if (!e || w.current == null || !t || !i) return;
            let { onDragOver: a } = k.current,
              o = r.get(me),
              s =
                o && o.rect.current
                  ? {
                      id: o.id,
                      rect: o.rect.current,
                      data: o.data,
                      disabled: o.disabled,
                    }
                  : null,
              c = {
                active: e,
                activatorEvent: t,
                collisions: n,
                delta: { x: i.x, y: i.y },
                over: s,
              };
            (0, Yi.unstable_batchedUpdates)(() => {
              (ge(s), a?.(c), f({ type: `onDragOver`, event: c }));
            });
          }, [me]),
          ur(() => {
            ((re.current = {
              activatorEvent: D,
              active: C,
              activeNode: I,
              collisionRect: fe,
              collisions: pe,
              droppableRects: N,
              draggableNodes: v,
              draggingNode: V,
              draggingNodeRect: ie,
              droppableContainers: b,
              over: he,
              scrollableAncestors: H,
              scrollAdjustedTranslate: G,
            }),
              (S.current = { initial: ie, translated: fe }));
          }, [C, I, pe, fe, v, V, ie, N, b, he, H, G]),
          mi({
            ...L,
            delta: y,
            draggingRect: fe,
            pointerCoordinates: W,
            scrollableAncestors: H,
            scrollableAncestorRects: U,
          }));
        let xe = (0, J.useMemo)(
            () => ({
              active: C,
              activeNode: I,
              activeNodeRect: te,
              activatorEvent: D,
              collisions: pe,
              containerNodeRect: ne,
              dragOverlay: B,
              draggableNodes: v,
              droppableContainers: b,
              droppableRects: N,
              over: he,
              measureDroppableContainers: P,
              scrollableAncestors: H,
              scrollableAncestorRects: U,
              measuringConfiguration: M,
              measuringScheduled: F,
              windowRect: se,
            }),
            [C, I, te, D, pe, ne, B, v, b, N, he, P, H, U, M, F, se],
          ),
          Se = (0, J.useMemo)(
            () => ({
              activatorEvent: D,
              activators: be,
              active: C,
              activeNodeRect: te,
              ariaDescribedById: { draggable: A },
              dispatch: d,
              draggableNodes: v,
              over: he,
              measureDroppableContainers: P,
            }),
            [D, be, C, te, d, A, v, he, P],
          );
        return J.createElement(
          Xi.Provider,
          { value: p },
          J.createElement(
            Ra.Provider,
            { value: Se },
            J.createElement(
              za.Provider,
              { value: xe },
              J.createElement(Ba.Provider, { value: _e }, i),
            ),
            J.createElement(Li, { disabled: n?.restoreFocus === !1 }),
          ),
          J.createElement(Tr, { ...n, hiddenTextDescribedById: A }),
        );
        function Ce() {
          let e = T?.autoScrollEnabled === !1,
            t = typeof r == `object` ? r.enabled === !1 : r === !1,
            n = g && !e && !t;
          return typeof r == `object` ? { ...r, enabled: n } : { enabled: n };
        }
      })),
      (Ua = (0, J.createContext)(null)),
      (Wa = `button`),
      (Ga = `Draggable`),
      (Ka = `Droppable`),
      (qa = { timeout: 25 }),
      (Ja = { x: 0, y: 0, scaleX: 1, scaleY: 1 }),
      (Ya = { position: `fixed`, touchAction: `none` }),
      (Xa = (e) => (ir(e) ? `transform 250ms ease` : void 0)),
      (Za = (0, J.forwardRef)((e, t) => {
        let {
          as: n,
          activatorEvent: r,
          adjustScale: i,
          children: a,
          className: o,
          rect: s,
          style: c,
          transform: l,
          transition: u = Xa,
        } = e;
        if (!s) return null;
        let d = i ? l : { ...l, scaleX: 1, scaleY: 1 },
          f = {
            ...Ya,
            width: s.width,
            height: s.height,
            top: s.top,
            left: s.left,
            transform: mr.Transform.toString(d),
            transformOrigin: i && r ? Ar(r, s) : void 0,
            transition: typeof u == `function` ? u(r) : u,
            ...c,
          };
        return J.createElement(n, { className: o, style: f, ref: t }, a);
      })),
      (Qa = (e) => (t) => {
        let { active: n, dragOverlay: r } = t,
          i = {},
          { styles: a, className: o } = e;
        if (a != null && a.active)
          for (let [e, t] of Object.entries(a.active))
            t !== void 0 &&
              ((i[e] = n.node.style.getPropertyValue(e)),
              n.node.style.setProperty(e, t));
        if (a != null && a.dragOverlay)
          for (let [e, t] of Object.entries(a.dragOverlay))
            t !== void 0 && r.node.style.setProperty(e, t);
        return (
          o != null && o.active && n.node.classList.add(o.active),
          o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay),
          function () {
            for (let [e, t] of Object.entries(i))
              n.node.style.setProperty(e, t);
            o != null && o.active && n.node.classList.remove(o.active);
          }
        );
      }),
      ($a = (e) => {
        let {
          transform: { initial: t, final: n },
        } = e;
        return [
          { transform: mr.Transform.toString(t) },
          { transform: mr.Transform.toString(n) },
        ];
      }),
      (eo = {
        duration: 250,
        easing: `ease`,
        keyframes: $a,
        sideEffects: Qa({ styles: { active: { opacity: `0` } } }),
      }),
      (to = 0),
      (no = J.memo((e) => {
        let {
            adjustScale: t = !1,
            children: n,
            dropAnimation: r,
            style: i,
            transition: a,
            modifiers: o,
            wrapperElement: s = `div`,
            className: c,
            zIndex: l = 999,
          } = e,
          {
            activatorEvent: u,
            active: d,
            activeNodeRect: f,
            containerNodeRect: p,
            draggableNodes: m,
            droppableContainers: h,
            dragOverlay: g,
            over: _,
            measuringConfiguration: v,
            scrollableAncestors: y,
            scrollableAncestorRects: b,
            windowRect: x,
          } = Hi(),
          S = (0, J.useContext)(Ba),
          C = Ji(d?.id),
          w = Ri(o, {
            activatorEvent: u,
            active: d,
            activeNodeRect: f,
            containerNodeRect: p,
            draggingNodeRect: g.rect,
            over: _,
            overlayNodeRect: g.rect,
            scrollableAncestors: y,
            scrollableAncestorRects: b,
            transform: S,
            windowRect: x,
          }),
          T = yi(f),
          E = Ki({
            config: r,
            draggableNodes: m,
            droppableContainers: h,
            measuringConfiguration: v,
          }),
          D = T ? g.setRef : void 0;
        return J.createElement(
          Gi,
          null,
          J.createElement(
            Wi,
            { animation: E },
            d && C
              ? J.createElement(
                  Za,
                  {
                    key: C,
                    id: d.id,
                    ref: D,
                    as: s,
                    activatorEvent: u,
                    adjustScale: t,
                    className: c,
                    transition: a,
                    rect: T,
                    style: { zIndex: l, ...i },
                    transform: w,
                  },
                  n,
                )
              : null,
          ),
        );
      })));
  }),
  io,
  ao,
  oo = e(() => {
    ((io = t(W(), 1)), (ao = (0, io.createContext)(null)));
  });
function so() {
  return typeof ResizeObserver > `u`
    ? null
    : new ResizeObserver((e) => {
        for (let t of e) {
          let e = t.target;
          ((e[fo] = t), e[uo]?.forEach((e) => e(t)));
        }
      });
}
function co({ callback: e, element: t, observer: n }) {
  let r = t[uo];
  if (r != null) {
    r.add(e);
    let n = t[fo];
    n != null && e(n);
    return;
  }
  ((t[uo] = new Set([e])), n?.observe(t));
}
function lo({ callback: e, element: t, observer: n }) {
  let r = t[uo];
  r != null &&
    (r.delete(e),
    !(r.size > 0) && ((t[uo] = void 0), (t[fo] = void 0), n?.unobserve(t)));
}
var uo,
  fo,
  po = e(() => {
    ((uo = Symbol(`resizeObserverCallbacks`)),
      (fo = Symbol(`resizeObserverLastEntry`)));
  });
function mo(e) {
  let t = (0, _o.c)(5),
    n = (0, vo.useContext)(ao),
    r = (0, vo.useRef)(null),
    i;
  t[0] === e
    ? (i = t[1])
    : ((i = (t) => {
        let n = r.current;
        n != null && e(t, n);
      }),
      (t[0] = e),
      (t[1] = i));
  let a = O(i),
    o;
  return (
    t[2] !== n || t[3] !== a
      ? ((o = (e) => {
          if (n == null)
            throw Error(
              `useResizeObserver must be used within ResizeObserverProvider.`,
            );
          (r.current != null &&
            lo({ callback: a, element: r.current, observer: n }),
            (r.current = e),
            e != null && co({ callback: a, element: e, observer: n }));
        }),
        (t[2] = n),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    O(o)
  );
}
function ho() {
  let e = (0, _o.c)(5),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { width: null, height: null }), (e[0] = t))
    : (t = e[0]);
  let [n, r] = (0, vo.useState)(t),
    i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (e) => {
        let { width: t, height: n } = e.contentRect;
        r({ width: t, height: n });
      }),
      (e[1] = i))
    : (i = e[1]);
  let a = mo(i),
    o;
  return (
    e[2] !== n || e[3] !== a
      ? ((o = [a, n]), (e[2] = n), (e[3] = a), (e[4] = o))
      : (o = e[4]),
    o
  );
}
function go() {
  let e = (0, _o.c)(4),
    [t, n] = (0, vo.useState)(null),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (e) => {
        n(zn(e).width);
      }),
      (e[0] = r))
    : (r = e[0]);
  let i = mo(r),
    a;
  return (
    e[1] !== i || e[2] !== t
      ? ((a = [i, t]), (e[1] = i), (e[2] = t), (e[3] = a))
      : (a = e[3]),
    a
  );
}
var _o,
  vo,
  yo = e(() => {
    ((_o = z()), (vo = t(W(), 1)), Ce(), Bn(), oo(), po());
  });
function bo(e, t) {
  if (!t.isEnabled || e == null) return null;
  let n = wo(e),
    r = Eo(n),
    i = To(r, t),
    a = Math.round(t.width * i),
    o = Math.round(t.height * i),
    s = {
      x: Math.round(n.x + Math.max(Bo, (n.width - a) / 2)),
      y: n.y,
      width: a,
      height: o,
    };
  return {
    fitHeight: r.height,
    fitWidth: r.width,
    scale: i,
    stageBounds: n,
    visualBounds: s,
    webviewBounds: { x: s.x, y: s.y, width: t.width, height: t.height },
  };
}
function xo(e) {
  if (e == null) return { width: Ho.width, height: Ho.height };
  let t = Eo(wo(e));
  return { width: Mo(t.width), height: No(t.height) };
}
function So(e) {
  return e + Bo * 2;
}
function Co({ fitHeight: e, height: t, width: n }) {
  return So(n * Math.min(1, e / t));
}
function wo(e) {
  return {
    x: e.x,
    y: e.y + 34,
    width: e.width,
    height: Math.max(0, e.height - 34),
  };
}
function To(e, t) {
  return Math.min(1, e.width / t.width, e.height / t.height);
}
function Eo(e) {
  return {
    width: Math.max(0, e.width - Bo * 2),
    height: Math.max(0, e.height - Bo),
  };
}
function Do({
  drag: e,
  fitHeight: t,
  fitWidth: n,
  pointerX: r,
  pointerY: i,
  scale: a,
}) {
  let o =
      e.edge === `bottom` ||
      e.edge === `bottom-left` ||
      e.edge === `bottom-right`,
    s = e.edge !== `bottom`,
    c = e.edge === `left` || e.edge === `bottom-left` ? -1 : 1;
  return {
    width: s
      ? Mo(
          Ao({
            fitSize: n,
            rawSize: e.startWidth + ((r - e.startPointerX) * c * 2) / a,
            scale: a,
          }),
        )
      : e.startWidth,
    height: o
      ? No(
          Ao({
            fitSize: t,
            rawSize: e.startHeight + (i - e.startPointerY) / a,
            scale: a,
          }),
        )
      : e.startHeight,
  };
}
function Oo({ height: e, width: t }) {
  return { width: Mo(e), height: No(t) };
}
function ko(e) {
  let t = jo(e.presetId),
    n =
      t != null &&
      ((t.width === e.width && t.height === e.height) ||
        (t.width === e.height && t.height === e.width));
  return { ...e, ...Oo(e), presetId: n ? e.presetId : Fo };
}
function Ao({ fitSize: e, rawSize: t, scale: n }) {
  return e <= 0 ? t : Math.min(t, e / n);
}
function jo(e) {
  return Vo.find((t) => t.id === e) ?? null;
}
function Mo(e) {
  return Po(e, 240, Io);
}
function No(e) {
  return Po(e, 160, Lo);
}
function Po(e, t, n) {
  return Math.min(n, Math.max(t, Math.round(e)));
}
var Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo = e(() => {
    ((Fo = `responsive`),
      (Io = 4096),
      (Lo = 4096),
      (Ro = `var(--gray-700)`),
      (zo = { id: Fo, width: 390, height: 844 }),
      (Bo = 20),
      (Vo = [
        zo,
        { id: `4k`, width: 2560, height: 1440 },
        { id: `laptop-l`, width: 1440, height: 900 },
        { id: `laptop`, width: 1024, height: 768 },
        { id: `surface-pro-7`, width: 912, height: 1368 },
        { id: `ipad-air`, width: 820, height: 1180 },
        { id: `ipad-mini`, width: 768, height: 1024 },
        { id: `surface-duo`, width: 540, height: 720 },
        { id: `iphone-15-pro-max`, width: 430, height: 932 },
        { id: `pixel-8`, width: 412, height: 915 },
        { id: `iphone-15-pro`, width: 393, height: 852 },
        { id: `samsung-galaxy-s24-ultra`, width: 384, height: 824 },
        { id: `iphone-se`, width: 375, height: 667 },
      ]),
      (Ho = {
        isEnabled: !1,
        presetId: zo.id,
        width: zo.width,
        height: zo.height,
      }));
  });
function Wo(e, t) {
  return (
    e.host !== t.host &&
    e.host.getConversationId() === t.host.getConversationId() &&
    e.host.isPainted()
  );
}
function Go(e) {
  return {
    incomingBrowserTabId: e.incoming.host.getBrowserTabId(),
    incomingConversationId: e.incoming.host.getConversationId(),
    incomingMountGeneration: e.incoming.mountGeneration,
    outgoingBrowserTabId: e.outgoing.host.getBrowserTabId(),
    outgoingConversationId: e.outgoing.host.getConversationId(),
    outgoingMountGeneration: e.outgoing.mountGeneration,
  };
}
function Ko(e) {
  return e === `hidden-browser-use` ? null : e;
}
var qo,
  Jo,
  Yo,
  Xo,
  Zo = e(() => {
    (jn(),
      (qo = 100),
      (Jo = 2),
      (Yo = [`right-panel`, `bottom-panel`]),
      (Xo = class {
        paintedWebviews = { "bottom-panel": null, "right-panel": null };
        pendingHandoffs = { "bottom-panel": null, "right-panel": null };
        sync(e, t, n, r) {
          let i = {
              host: e,
              mountGeneration: t.mountGeneration ?? e.getMountGeneration(),
              webviewRef: n,
            },
            a = Ko(r);
          if (
            a == null ||
            !t.isVisible ||
            t.bounds == null ||
            t.shouldBootstrap === !0 ||
            t.shouldPaint === !1
          ) {
            if (a != null) {
              let t = this.pendingHandoffs[a];
              (t?.incoming.host === e || t?.outgoing.host === e) &&
                this.cancel(a, `incoming-hidden`, !0);
            }
            (e.sync(t, n),
              a != null &&
                this.paintedWebviews[a]?.host === e &&
                !e.isPainted() &&
                (this.paintedWebviews[a] = null));
            return;
          }
          let o = this.pendingHandoffs[a];
          if (o != null) {
            if (o.incoming.host === e) {
              ((o.incoming = i),
                o.releaseFrameId == null
                  ? e.stage(t, n)
                  : (e.sync(t, n), (this.paintedWebviews[a] = i)));
              return;
            }
            if (o.releaseFrameId != null)
              (window.cancelAnimationFrame(o.releaseFrameId),
                this.releaseOutgoing(a, o, `incoming-replaced`));
            else {
              let { outgoing: r } = o;
              if ((this.cancel(a, `incoming-replaced`, !1), r.host === e)) {
                (e.sync(t, n), (this.paintedWebviews[a] = i));
                return;
              }
              if (Wo(r, i)) {
                this.stage(a, r, i, t);
                return;
              }
            }
          }
          let s = this.paintedWebviews[a];
          if (s != null && Wo(s, i)) {
            this.stage(a, s, i, t);
            return;
          }
          (e.sync(t, n), (this.paintedWebviews[a] = e.isPainted() ? i : null));
        }
        detach(e, t, n, r) {
          let i = Ko(n);
          if (i != null) {
            let n = this.pendingHandoffs[i];
            if (n?.outgoing.host === e) {
              e.releaseRef(t, r);
              return;
            }
            if (n?.incoming.host === e) {
              this.cancel(i, `incoming-detached`, !0);
              return;
            }
            this.paintedWebviews[i]?.host === e &&
              (this.paintedWebviews[i] = null);
          }
          e.detach(t, r);
        }
        acknowledgeAttachment(e, t, n, r) {
          for (let i of Yo) {
            let a = this.pendingHandoffs[i];
            if (
              a?.incoming.host.getConversationId() === e &&
              a.incoming.host.getBrowserTabId() === t &&
              a.incoming.mountGeneration === n &&
              r === n
            ) {
              (ht.info(
                `IAB_TAB_SWITCH renderer acknowledged Owl webview handoff`,
                {
                  safe: {
                    ...Go(a),
                    acknowledgedMountGeneration: n,
                    currentMountGeneration: r,
                    hostKind: i,
                  },
                  sensitive: {},
                },
              ),
                this.scheduleCommitAfterPrewarm(i, a));
              return;
            }
            a != null &&
              ht.info(
                `IAB_TAB_SWITCH renderer ignored stale Owl webview handoff acknowledgement`,
                {
                  safe: {
                    ...Go(a),
                    acknowledgedMountGeneration: n,
                    currentMountGeneration: r,
                    hostKind: i,
                  },
                  sensitive: {},
                },
              );
          }
        }
        removeTab(e) {
          for (let t of Yo) {
            let n = this.pendingHandoffs[t];
            if (n?.outgoing.host === e) {
              (this.commit(t, n),
                n.releaseFrameId != null &&
                  (window.cancelAnimationFrame(n.releaseFrameId),
                  (n.releaseFrameId = null)),
                this.releaseOutgoing(t, n, `tab-removed`));
              continue;
            }
            if (n?.incoming.host === e) {
              this.cancel(t, `tab-removed`, !0);
              continue;
            }
            let r = this.paintedWebviews[t];
            r?.host === e &&
              ((this.paintedWebviews[t] = null),
              e.detach(r.webviewRef, r.mountGeneration));
          }
        }
        transferRoute(e) {
          for (let t of Yo) {
            let n = this.pendingHandoffs[t];
            (n?.incoming.host === e || n?.outgoing.host === e) &&
              this.cancel(t, `route-transferred`, !0);
          }
        }
        removeConversation(e) {
          for (let t of Yo) {
            let n = this.pendingHandoffs[t];
            ((n?.incoming.host.getConversationId() === e ||
              n?.outgoing.host.getConversationId() === e) &&
              this.cancel(t, `conversation-removed`, !0),
              this.paintedWebviews[t]?.host.getConversationId() === e &&
                (this.paintedWebviews[t] = null));
          }
        }
        disposeHost(e) {
          for (let t of Yo) {
            let n = this.pendingHandoffs[t];
            ((n?.incoming.host === e || n?.outgoing.host === e) &&
              this.cancel(t, `host-disposed`, !0),
              this.paintedWebviews[t]?.host === e &&
                (this.paintedWebviews[t] = null));
          }
        }
        disposeAll() {
          for (let e of Yo)
            (this.cancel(e, `manager-disposed`, !0),
              (this.paintedWebviews[e] = null));
        }
        stage(e, t, n, r) {
          t.host.blockInteraction();
          let i = {
            incoming: n,
            outgoing: t,
            prewarmFrameId: null,
            releaseFrameId: null,
            removeIncomingDidAttachListener: null,
            timeoutId: null,
          };
          ((this.pendingHandoffs[e] = i),
            (i.removeIncomingDidAttachListener = n.host.listenForDidAttach(
              () => {
                this.pendingHandoffs[e] === i &&
                  (ht.info(
                    `IAB_TAB_SWITCH renderer observed Owl webview did-attach during handoff`,
                    { safe: { ...Go(i), hostKind: e }, sensitive: {} },
                  ),
                  this.scheduleCommitAfterPrewarm(e, i));
              },
            )),
            (i.timeoutId = window.setTimeout(() => {
              this.pendingHandoffs[e] === i &&
                (i.prewarmFrameId != null &&
                  (window.cancelAnimationFrame(i.prewarmFrameId),
                  (i.prewarmFrameId = null)),
                ht.info(
                  `IAB_TAB_SWITCH renderer timed out Owl webview handoff`,
                  { safe: { ...Go(i), hostKind: e }, sensitive: {} },
                ),
                this.commit(e, i));
            }, qo)),
            ht.info(`IAB_TAB_SWITCH renderer staged Owl webview handoff`, {
              safe: { ...Go(i), hostKind: e },
              sensitive: {},
            }),
            n.host.stage(r, n.webviewRef));
        }
        scheduleCommitAfterPrewarm(e, t, n = Jo) {
          if (
            !(
              this.pendingHandoffs[e] !== t ||
              t.prewarmFrameId != null ||
              t.releaseFrameId != null
            )
          ) {
            if (n === 0) {
              (ht.info(
                `IAB_TAB_SWITCH renderer prewarmed Owl webview handoff before reveal`,
                { safe: { ...Go(t), hostKind: e }, sensitive: {} },
              ),
                this.commit(e, t));
              return;
            }
            (ht.info(
              `IAB_TAB_SWITCH renderer prewarming Owl webview handoff before reveal`,
              {
                safe: { ...Go(t), hostKind: e, remainingFrames: n },
                sensitive: {},
              },
            ),
              (t.prewarmFrameId = window.requestAnimationFrame(() => {
                this.pendingHandoffs[e] === t &&
                  ((t.prewarmFrameId = null),
                  this.scheduleCommitAfterPrewarm(e, t, n - 1));
              })));
          }
        }
        commit(e, t) {
          this.pendingHandoffs[e] !== t ||
            t.releaseFrameId != null ||
            (t.timeoutId != null &&
              (window.clearTimeout(t.timeoutId), (t.timeoutId = null)),
            t.prewarmFrameId != null &&
              (window.cancelAnimationFrame(t.prewarmFrameId),
              (t.prewarmFrameId = null)),
            t.removeIncomingDidAttachListener?.(),
            (t.removeIncomingDidAttachListener = null),
            t.incoming.host.reveal(t.incoming.webviewRef),
            (this.paintedWebviews[e] = t.incoming),
            ht.info(`IAB_TAB_SWITCH renderer committed Owl webview handoff`, {
              safe: { ...Go(t), hostKind: e },
              sensitive: {},
            }),
            (t.releaseFrameId = window.requestAnimationFrame(() => {
              this.releaseOutgoing(e, t, `next-animation-frame`);
            })));
        }
        releaseOutgoing(e, t, n) {
          this.pendingHandoffs[e] === t &&
            ((this.pendingHandoffs[e] = null),
            t.outgoing.host.detach(
              t.outgoing.webviewRef,
              t.outgoing.mountGeneration,
            ),
            ht.info(
              `IAB_TAB_SWITCH renderer released outgoing Owl webview handoff`,
              { safe: { ...Go(t), hostKind: e, timing: n }, sensitive: {} },
            ));
        }
        cancel(e, t, n) {
          let r = this.pendingHandoffs[e];
          r != null &&
            ((this.pendingHandoffs[e] = null),
            r.timeoutId != null && window.clearTimeout(r.timeoutId),
            r.prewarmFrameId != null &&
              window.cancelAnimationFrame(r.prewarmFrameId),
            r.releaseFrameId != null &&
              window.cancelAnimationFrame(r.releaseFrameId),
            r.removeIncomingDidAttachListener?.(),
            r.incoming.host.detach(
              r.incoming.webviewRef,
              r.incoming.mountGeneration,
            ),
            n
              ? (r.outgoing.host.detach(
                  r.outgoing.webviewRef,
                  r.outgoing.mountGeneration,
                ),
                (this.paintedWebviews[e] = null))
              : r.outgoing.host.isConnected()
                ? (r.outgoing.host.restoreInteraction(),
                  (this.paintedWebviews[e] = r.outgoing))
                : (this.paintedWebviews[e] = null),
            ht.info(`IAB_TAB_SWITCH renderer cancelled Owl webview handoff`, {
              safe: { ...Go(r), detachOutgoing: n, hostKind: e, reason: t },
              sensitive: {},
            }));
        }
      }));
  });
function Qo(e, t) {
  let n = $o(t);
  if (n == null) {
    e?.removeAttribute(sn);
    return;
  }
  e?.setAttribute(sn, n);
}
function $o(e) {
  switch (e) {
    case `bottom-panel`:
      return `bottom-panel`;
    case `right-panel`:
      return `right-panel`;
    case `hidden-browser-use`:
      return null;
  }
}
var es = e(() => {
  Wt();
});
function ts(e, t) {
  return { height: Math.round(e.height * t), width: Math.round(e.width * t) };
}
var ns = e(() => {});
function rs(e, t) {
  let n = t?.restore ?? null,
    r = t?.browserStorageId ?? null;
  return e.getAttribute(`data-browser-sidebar-page-restore`) === n &&
    e.getAttribute(`data-browser-sidebar-page-storage-id`) === r
    ? !1
    : (t == null
        ? (e.removeAttribute(dn), e.removeAttribute(Ft))
        : (e.setAttribute(dn, t.restore),
          e.setAttribute(Ft, t.browserStorageId)),
      !0);
}
function is({ bounds: e, isVisible: t, lastVisibleBounds: n }) {
  return t ? (e != null && e.width > 0 && e.height > 0 ? e : (n ?? Ds)) : null;
}
function as({
  browserUseCaptureSurfaceSize: e,
  browserUseViewportSize: t,
  isBrowserUseActive: n,
  lastVisibleBounds: r,
}) {
  return n ? (e == null ? (t == null ? (r ?? Ds) : us(t)) : us(e)) : null;
}
function os(e, t, n, r, i, a) {
  let o = ts(r, i);
  (Object.assign(e.style, {
    contain: ``,
    height: `${o.height}px`,
    left: `${r.x}px`,
    opacity: `1`,
    overflow: `hidden`,
    pointerEvents: `auto`,
    position: `fixed`,
    top: `${r.y}px`,
    transform: ``,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: ``,
    width: `${o.width}px`,
    zIndex: ``,
    zoom: a === 1 ? `` : String(a),
  }),
    Object.assign(t.style, {
      height: `${r.height}px`,
      transform: i === 1 ? `` : `scale(${i})`,
      transformOrigin: `top left`,
      willChange: i === 1 ? `` : `transform`,
      width: `${r.width}px`,
    }),
    ds(n, r, i));
}
function ss(e, t, n, r) {
  (Object.assign(e.style, {
    contain: `layout paint size style`,
    height: `${r.height}px`,
    left: `0px`,
    opacity: Es,
    overflow: ``,
    pointerEvents: `none`,
    position: `fixed`,
    top: `0px`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: `transform`,
    width: `${r.width}px`,
    zIndex: String(Tt),
    zoom: ``,
  }),
    Object.assign(t.style, {
      height: ``,
      transform: ``,
      transformOrigin: ``,
      willChange: ``,
      width: ``,
    }),
    ds(n, r));
}
function cs(e, t, n, r, i, a) {
  (os(e, t, n, r, i, a),
    Object.assign(e.style, { pointerEvents: `none`, visibility: `hidden` }));
}
function ls(e, t, n, r, i, a) {
  (os(e, t, n, r, i, a),
    Object.assign(e.style, { opacity: Ts, pointerEvents: `none` }));
}
function us(e) {
  return { x: Ds.x, y: Ds.y, width: e.width, height: e.height };
}
function ds(e, t, n = 1) {
  Object.assign(e.style, {
    height: `${t.height}px`,
    left: `0`,
    overflow: `hidden`,
    pointerEvents: `none`,
    position: `absolute`,
    top: `0`,
    transform: n === 1 ? `` : `scale(${n})`,
    transformOrigin: `top left`,
    willChange: n === 1 ? `` : `transform`,
    width: `${t.width}px`,
    zIndex: `1`,
  });
}
function fs(e) {
  let t = document.activeElement;
  return (
    t == null ||
    t === document.body ||
    t === document.documentElement ||
    (t.tagName === `WEBVIEW` && t !== e)
  );
}
function ps() {
  let e = document.querySelector(`[${bs}]`);
  if (e != null) return e;
  let t = document.createElement(`div`);
  return (
    t.setAttribute(bs, ``),
    Object.assign(t.style, {
      inset: `0`,
      overflow: `visible`,
      pointerEvents: `none`,
      position: `fixed`,
    }),
    document.body.append(t),
    t
  );
}
function ms(e, t, n) {
  (n != null && e.current === n && (e.current = null),
    t != null && (e.current = t));
}
function hs(e) {
  gs(e) && e.destroy();
}
function gs(e) {
  return e != null && `destroy` in e && typeof e.destroy == `function`;
}
var _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks = e(() => {
    (u(),
      xn(),
      jn(),
      es(),
      ns(),
      (_s = `about:blank`),
      (vs = `data-browser-sidebar-conversation-id`),
      (ys = `data-browser-sidebar-browser-tab-id`),
      (bs = `data-browser-sidebar-webview-host-root`),
      (xs = `data-browser-sidebar-cursor-overlay-host`),
      (Ss = `owl-webcontents-adoption-lease`),
      (Cs = `owl-webcontents-adopted-web-contents-id`),
      (ws = `var(--color-token-editor-background, var(--color-token-main-surface-primary, #fff))`),
      (Ts = `0.001`),
      (Es = `0.001`),
      (Ds = { x: 0, y: 0, width: 1280, height: 720 }),
      (Os = class {
        browserTabId;
        conversationId;
        container;
        cursorOverlayHost;
        webview;
        hostKind;
        hostGeneration;
        partition;
        isRegistered = !1;
        rendererInstanceId;
        webviewRef = null;
        browserUseCaptureSurfaceSize = null;
        browserUseViewportSize = null;
        isBrowserUseActive = !1;
        isTabCaptureActive = !1;
        isDisposed = !1;
        isInteractionBlocked = !1;
        isStaged = !1;
        state = {
          bounds: null,
          isVisible: !1,
          mountGeneration: 0,
          scale: 1,
          shouldPaint: !0,
          windowZoom: 1,
        };
        lastVisibleBounds = null;
        constructor({
          browserTabId: e,
          conversationId: t,
          elementKey: n,
          hostKind: r,
          hostGeneration: i,
          rendererInstanceId: a,
          partition: o,
          adoptionLease: s,
          adoptedWebContentsId: c,
          pagePersistence: l,
        }) {
          let u = document.createElement(`div`),
            d = document.createElement(`div`),
            f = document.createElement(`webview`);
          ((this.browserTabId = e),
            (this.conversationId = t),
            (this.container = u),
            (this.cursorOverlayHost = d),
            (this.hostKind = r),
            (this.hostGeneration = i),
            (this.partition = o),
            (this.rendererInstanceId = a),
            (this.webview = f),
            (u.dataset.browserSidebarWebview = n),
            Qo(u, r),
            d.setAttribute(xs, n),
            (f.className = `h-full w-full`),
            (f.style.backgroundColor = ws),
            f.setAttribute(vs, t),
            f.setAttribute(ys, e),
            this.setPagePersistence(l),
            f.setAttribute(`partition`, ut(t, e, a, i)),
            f.setAttribute(`webviewrole`, `tab`),
            this.setAdoptionAttributes(s ?? null, c ?? null),
            f.setAttribute(`src`, _s),
            u.append(f, d));
        }
        setHostKind(e) {
          this.hostKind !== e && ((this.hostKind = e), Qo(this.container, e));
        }
        setPagePersistence(e) {
          let t = this.webview;
          return t == null ? !1 : rs(t, e);
        }
        detach(e, t) {
          let n = this.webview;
          if (this.isDisposed || n == null) {
            ms(e, null, n ?? void 0);
            return;
          }
          if (t != null && t !== this.state.mountGeneration) return;
          if (this.webviewRef != null && this.webviewRef !== e) {
            ms(e, null, n);
            return;
          }
          let r = this.state.isVisible;
          ((this.webviewRef = e),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !1),
            (this.state = {
              bounds: this.state.bounds,
              isVisible: !1,
              mountGeneration: this.state.mountGeneration,
              scale: this.state.scale,
              shouldPaint: this.state.shouldPaint,
              windowZoom: this.state.windowZoom,
            }),
            (n.style.backgroundColor = ws),
            document.activeElement === n && n.blur(),
            ms(e, null, n),
            this.syncContainerStyle(),
            ht.info(
              `IAB_LIFECYCLE renderer backgrounded browser sidebar webview`,
              {
                safe: {
                  browserTabId: this.browserTabId,
                  conversationId: this.conversationId,
                  currentMountGeneration: this.state.mountGeneration,
                  isConnected: this.isConnected(),
                  requestedMountGeneration: t ?? null,
                  wasVisible: r,
                },
              },
            ));
        }
        releaseRef(e, t) {
          let n = this.webview;
          n == null ||
            (t != null && t !== this.state.mountGeneration) ||
            ms(e, null, n);
        }
        sync(e, t) {
          let n = this.webview;
          if (this.isDisposed || n == null) {
            ms(t, null, n ?? void 0);
            return;
          }
          ((this.webviewRef = t),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !1),
            (this.state = {
              ...e,
              mountGeneration: e.mountGeneration ?? this.state.mountGeneration,
            }),
            (n.style.backgroundColor = ws));
          let r = this.syncContainerStyle() === `visible`;
          (ms(t, r ? n : null, n), r && fs(n) && n.focus());
        }
        stage(e, t) {
          let n = this.webview;
          if (this.isDisposed || n == null) {
            ms(t, null, n ?? void 0);
            return;
          }
          ((this.webviewRef = t),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !0),
            (this.state = {
              ...e,
              mountGeneration: e.mountGeneration ?? this.state.mountGeneration,
            }),
            (n.style.backgroundColor = ws),
            this.syncContainerStyle(),
            this.bringToFront(),
            ms(t, null, n));
        }
        reveal(e) {
          let t = this.webview;
          if (this.isDisposed || t == null) {
            ms(e, null, t ?? void 0);
            return;
          }
          ((this.webviewRef = e),
            (this.isInteractionBlocked = !1),
            (this.isStaged = !1),
            this.bringToFront());
          let n = this.syncContainerStyle() === `visible`;
          (ms(e, n ? t : null, t), n && fs(t) && t.focus());
        }
        blockInteraction() {
          ((this.isInteractionBlocked = !0),
            this.container?.isConnected === !0 &&
              (this.container.style.pointerEvents = `none`));
        }
        restoreInteraction() {
          this.isInteractionBlocked = !1;
          let e = this.container;
          e != null && this.isPainted() && (e.style.pointerEvents = `auto`);
        }
        bringToFront() {
          let e = this.container;
          e?.isConnected === !0 &&
            e.nextElementSibling != null &&
            ps().append(e);
        }
        listenForDidAttach(e) {
          let t = this.webview;
          return (
            t?.addEventListener(`did-attach`, e),
            () => {
              t?.removeEventListener(`did-attach`, e);
            }
          );
        }
        getBrowserTabId() {
          return this.browserTabId;
        }
        getConversationId() {
          return this.conversationId;
        }
        getPartition() {
          return this.partition;
        }
        getHostGeneration() {
          return this.hostGeneration;
        }
        markRegistered() {
          if (this.isDisposed || this.isRegistered) return !1;
          this.isRegistered = !0;
          let e = this.webview,
            t = this.webviewRef;
          return (
            e == null ||
              t == null ||
              ms(t, this.syncContainerStyle() === `visible` ? e : null, e),
            !0
          );
        }
        getMountGeneration() {
          return this.state.mountGeneration;
        }
        isConnected() {
          return this.container?.isConnected === !0;
        }
        isPainted() {
          return (
            this.isConnected() && this.container?.style.visibility === `visible`
          );
        }
        get disposed() {
          return this.isDisposed;
        }
        getCursorOverlayHost() {
          return this.cursorOverlayHost;
        }
        shouldDestroyForHostRequest({ mountGeneration: e, reason: t }) {
          return (
            t === `closed` ||
            (this.state.mountGeneration === e && !this.state.isVisible)
          );
        }
        setBrowserUseCaptureSurfaceSize(e) {
          ((this.browserUseCaptureSurfaceSize = e),
            !(
              e != null &&
              this.container?.isConnected !== !0 &&
              !this.state.isVisible
            ) &&
              (this.syncContainerStyle(), this.applyBlockedInteractionStyle()));
        }
        setBrowserUseActive(e) {
          ((this.isBrowserUseActive = e),
            !(
              e &&
              this.container?.isConnected !== !0 &&
              !this.state.isVisible
            ) && this.syncContainerStyle());
        }
        setTabCaptureActive(e) {
          this.isTabCaptureActive !== e &&
            ((this.isTabCaptureActive = e),
            this.syncContainerStyle(),
            this.applyBlockedInteractionStyle());
        }
        setBrowserUseViewportSize(e) {
          ((this.browserUseViewportSize = e),
            !(
              e != null &&
              this.container?.isConnected !== !0 &&
              !this.state.isVisible
            ) && this.syncContainerStyle());
        }
        releaseBrowserUse() {
          ((this.browserUseCaptureSurfaceSize = null),
            (this.browserUseViewportSize = null),
            (this.isBrowserUseActive = !1),
            this.syncContainerStyle());
        }
        setAdoptionAttributes(e, t) {
          if (this.webview != null) {
            if (e == null || t == null) {
              (this.webview.removeAttribute(Ss),
                this.webview.removeAttribute(Cs));
              return;
            }
            (this.webview.setAttribute(Ss, e),
              this.webview.setAttribute(Cs, t.toString()));
          }
        }
        resync() {
          let e = this.container;
          e == null ||
            !e.isConnected ||
            (this.syncContainerStyle(), this.applyBlockedInteractionStyle());
        }
        transfer({
          browserTabId: e,
          conversationId: t,
          elementKey: n,
          partition: r,
        }) {
          let i = this.container,
            a = this.webview;
          i == null ||
            a == null ||
            ((i.dataset.browserSidebarWebview = n),
            this.cursorOverlayHost?.setAttribute(xs, n),
            a.setAttribute(vs, t),
            a.setAttribute(ys, e),
            a.setAttribute(
              `partition`,
              ut(t, e, this.rendererInstanceId, this.hostGeneration),
            ),
            (this.browserTabId = e),
            (this.conversationId = t),
            (this.partition = r));
        }
        dispose() {
          if (this.isDisposed) return;
          ((this.isDisposed = !0),
            ht.info(`IAB_LIFECYCLE renderer disposed browser sidebar webview`, {
              safe: {
                browserTabId: this.browserTabId,
                conversationId: this.conversationId,
              },
            }));
          let e = this.webview;
          (this.detachFromDom(),
            this.webviewRef != null && ms(this.webviewRef, null, e ?? void 0),
            hs(e),
            this.container?.replaceChildren(),
            (this.container = null),
            (this.cursorOverlayHost = null),
            (this.webview = null),
            (this.webviewRef = null));
        }
        syncContainerStyle() {
          let e = this.container,
            t = this.cursorOverlayHost,
            n = this.webview;
          if (e == null || t == null || n == null || !this.isRegistered)
            return `hidden`;
          let r = this.state.shouldBootstrap === !0,
            i = is({
              bounds: this.state.bounds,
              isVisible: this.state.isVisible || r,
              lastVisibleBounds: this.lastVisibleBounds,
            });
          if (i != null && this.browserUseCaptureSurfaceSize == null) {
            ((this.lastVisibleBounds = i), this.attachToDom());
            let a = this.state.isVisible
              ? null
              : as({
                  browserUseCaptureSurfaceSize: null,
                  browserUseViewportSize: this.browserUseViewportSize,
                  isBrowserUseActive:
                    this.isBrowserUseActive || this.isTabCaptureActive,
                  lastVisibleBounds: i,
                });
            return a == null
              ? r || this.state.shouldPaint === !1
                ? (cs(e, n, t, i, this.state.scale, this.state.windowZoom ?? 1),
                  `bootstrap`)
                : this.isStaged
                  ? (ls(
                      e,
                      n,
                      t,
                      i,
                      this.state.scale,
                      this.state.windowZoom ?? 1,
                    ),
                    `staged`)
                  : (os(
                      e,
                      n,
                      t,
                      i,
                      this.state.scale,
                      this.state.windowZoom ?? 1,
                    ),
                    `visible`)
              : (ss(e, n, t, a), `hidden`);
          }
          let a = as({
            browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
            browserUseViewportSize: this.browserUseViewportSize,
            isBrowserUseActive:
              this.isBrowserUseActive || this.isTabCaptureActive,
            lastVisibleBounds: this.lastVisibleBounds,
          });
          return a == null
            ? (this.parkInDom(), `hidden`)
            : (this.attachToDom(), ss(e, n, t, a), `hidden`);
        }
        applyBlockedInteractionStyle() {
          this.isInteractionBlocked &&
            this.container?.isConnected === !0 &&
            (this.container.style.pointerEvents = `none`);
        }
        attachToDom() {
          let e = this.container;
          e != null && !e.isConnected && ps().append(e);
        }
        parkInDom() {
          let e = this.container,
            t = this.cursorOverlayHost,
            n = this.webview;
          if (e == null || t == null || n == null) return;
          let r = this.lastVisibleBounds ?? Ds;
          (this.attachToDom(),
            cs(e, n, t, r, this.state.scale, this.state.windowZoom ?? 1));
        }
        detachFromDom() {
          this.container?.remove();
        }
      }));
  });
function As(e, t) {
  let n = lc(e, t),
    r = dc.get(n);
  return r == null ? null : (dc.delete(n), r);
}
function js(e, t) {
  return dc.get(lc(e, t)) ?? null;
}
function Ms(e, t) {
  let n = lc(e, t),
    r = fc.get(n);
  return r == null ? null : (fc.delete(n), r);
}
function Ns(e, t) {
  return fc.get(lc(e, t)) ?? null;
}
function Ps(e, t) {
  uc(dc, e, t);
}
function Fs(e, t) {
  uc(fc, e, t);
}
function Is(e, t, n) {
  dc.set(lc(e, t), n);
}
function Ls(e, t, n) {
  fc.set(lc(e, t), n);
}
function Rs(e, t) {
  return pc.get(lc(e, t)) ?? null;
}
function zs(e, t) {
  uc(pc, e, t);
}
function Bs(e, t, n) {
  pc.set(lc(e, t), n);
}
function Vs(e, t) {
  return mc.get(lc(e, t)) ?? null;
}
function Hs(e, t) {
  return hc.get(lc(e, t)) ?? null;
}
function Us(e, t) {
  uc(mc, e, t);
}
function Ws(e, t) {
  uc(hc, e, t);
}
function Gs(e, t, n) {
  mc.set(lc(e, t), n);
}
function Ks(e, t, n) {
  hc.set(lc(e, t), n);
}
function qs(
  e,
  t,
  {
    adoptionLease: n,
    adoptedWebContentsId: r,
    initialUrl: i,
    initiator: a,
    source: o,
  },
) {
  if (
    (o != null && Is(e, t, o),
    a != null && Ls(e, t, a),
    i == null ? zs(e, t) : Bs(e, t, i),
    n != null && r != null)
  ) {
    (Gs(e, t, n), Ks(e, t, r));
    return;
  }
  (Us(e, t), Ws(e, t));
}
function Js(e) {
  let t = gc.get(e) ?? [];
  return (gc.delete(e), t);
}
function Ys(e) {
  gc.delete(e);
}
function Xs(e) {
  return gc.get(e)?.map((e) => e.browserTabId) ?? [];
}
function Zs(e) {
  return (
    _c.add(e),
    () => {
      _c.delete(e);
    }
  );
}
function Qs() {
  return vc;
}
function $s(e) {
  let t = yc.get(e) ?? new Set();
  return (yc.delete(e), [...t]);
}
function ec(e, t) {
  (rc(e, t), nc(e, t));
  let n = yc.get(e);
  if (n == null) {
    yc.set(e, new Set([t]));
    return;
  }
  n.add(t);
}
function tc(e, t) {
  if ((rc(e, t), t == null)) {
    (Ys(e), yc.delete(e));
    return;
  }
  (yc.get(e)?.delete(t), nc(e, t));
}
function nc(e, t) {
  let n = gc.get(e);
  if (n == null) return;
  let r = n.filter((e) => e.browserTabId !== t);
  if (r.length === 0) {
    gc.delete(e);
    return;
  }
  gc.set(e, r);
}
function rc(e, t) {
  (Fs(e, t), Ps(e, t), zs(e, t), Us(e, t), Ws(e, t));
}
function ic(e, t) {
  (oc(e, t), (vc += 1));
  for (let e of _c) e();
}
function ac(e, t) {
  oc(e, t);
}
function oc(e, t) {
  yc.get(e)?.delete(t.browserTabId);
  let n = gc.get(e);
  if (n == null) {
    gc.set(e, [t]);
    return;
  }
  let r = n.findIndex((e) => e.browserTabId === t.browserTabId);
  if (r === -1) {
    n.push(t);
    return;
  }
  n[r] = t;
}
function sc(e, t) {
  let n = bc.get(e);
  if (n == null) {
    bc.set(e, new Set([t]));
    return;
  }
  n.add(t);
}
function cc(e) {
  let t = bc.get(e);
  return t == null ? [] : (bc.delete(e), [...t]);
}
function lc(e, t) {
  return `${e}\0${t}`;
}
function uc(e, t, n) {
  if (n != null) {
    e.delete(lc(t, n));
    return;
  }
  let r = `${t}\0`;
  for (let t of e.keys()) t.startsWith(r) && e.delete(t);
}
var dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc = e(() => {
    ((dc = new Map()),
      (fc = new Map()),
      (pc = new Map()),
      (mc = new Map()),
      (hc = new Map()),
      (gc = new Map()),
      (_c = new Set()),
      (vc = 0),
      (yc = new Map()),
      (bc = new Map()));
  });
function Sc({
  bounds: e,
  browserUseCaptureSurfaceSize: t,
  browserUseViewportSize: n,
  isVisible: r,
  lastVisibleBounds: i,
  shouldUsePaintHost: a,
}) {
  return t == null
    ? r && e != null && e.width > 0 && e.height > 0
      ? e
      : r && i != null
        ? i
        : !r && a
          ? n == null
            ? (i ?? Rc)
            : Oc(n)
          : null
    : Oc(t);
}
function Cc(e, t, n, r, i, a) {
  let o = ts(r, i);
  (Object.assign(e.style, {
    contain: ``,
    height: `${o.height}px`,
    left: `${r.x}px`,
    opacity: `1`,
    overflow: `hidden`,
    pointerEvents: ``,
    position: `fixed`,
    top: `${r.y}px`,
    transform: ``,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: ``,
    width: `${o.width}px`,
    zIndex: ``,
    zoom: a === 1 ? `` : String(a),
  }),
    Object.assign(t.style, {
      height: `${r.height}px`,
      transform: i === 1 ? `` : `scale(${i})`,
      transformOrigin: `top left`,
      willChange: i === 1 ? `` : `transform`,
      width: `${r.width}px`,
    }),
    Dc(n, r, i));
}
function wc(e, t, n, r, i, a) {
  if (a) {
    Tc(e, t, n, r ?? (i == null ? Rc : Oc(i)));
    return;
  }
  (Object.assign(e.style, Fc), Ec(t), Dc(n, { width: 1, height: 1 }));
}
function Tc(e, t, n, r) {
  (Object.assign(e.style, {
    contain: `layout paint size style`,
    height: `${r.height}px`,
    left: `${Rc.x}px`,
    opacity: Ic,
    overflow: ``,
    pointerEvents: `none`,
    position: `fixed`,
    top: `${Rc.y}px`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: `transform`,
    width: `${r.width}px`,
    zIndex: String(Tt),
    zoom: ``,
  }),
    Ec(t),
    Dc(n, r));
}
function Ec(e) {
  Object.assign(e.style, {
    height: ``,
    transform: ``,
    transformOrigin: ``,
    willChange: ``,
    width: ``,
  });
}
function Dc(e, t, n = 1) {
  Object.assign(e.style, {
    height: `${t.height}px`,
    left: `0`,
    overflow: `hidden`,
    pointerEvents: `none`,
    position: `absolute`,
    top: `0`,
    transform: n === 1 ? `` : `scale(${n})`,
    transformOrigin: `top left`,
    willChange: n === 1 ? `` : `transform`,
    width: `${t.width}px`,
    zIndex: `1`,
  });
}
function Oc(e) {
  return { x: Rc.x, y: Rc.y, width: e.width, height: e.height };
}
function kc(e, t, n) {
  (n != null && e.current === n && (e.current = null),
    t != null && (e.current = t));
}
var Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc = e(() => {
    (u(),
      xn(),
      jn(),
      ks(),
      es(),
      ns(),
      (Ac = `about:blank`),
      (jc = `data-browser-sidebar-conversation-id`),
      (Mc = `data-browser-sidebar-browser-tab-id`),
      (Nc = `data-browser-sidebar-retained-webview`),
      (Pc = `data-browser-sidebar-cursor-overlay-host`),
      (Fc = {
        contain: ``,
        height: `1px`,
        left: `-10000px`,
        opacity: `0`,
        overflow: ``,
        pointerEvents: `none`,
        position: `fixed`,
        top: `0`,
        transform: ``,
        transformOrigin: ``,
        visibility: `hidden`,
        willChange: ``,
        width: `1px`,
        zIndex: ``,
        zoom: ``,
      }),
      (Ic = `0.001`),
      (Lc = `#fff`),
      (Rc = { x: 0, y: 0, width: 1280, height: 720 }),
      (zc = class {
        browserTabId;
        conversationId;
        container = document.createElement(`div`);
        cursorOverlayHost = document.createElement(`div`);
        webview = document.createElement(`webview`);
        browserUseCaptureSurfaceSize;
        browserUseViewportSize;
        webviewRef = null;
        hostKind;
        hostGeneration;
        partition;
        isBrowserUseActive;
        isTabCaptureActive = !1;
        isAttached = !1;
        isDisposed = !1;
        isRegistered = !1;
        rendererInstanceId;
        state = { bounds: null, isVisible: !1, scale: 1, windowZoom: 1 };
        lastVisibleBounds = null;
        constructor({
          browserTabId: e,
          browserUseCaptureSurfaceSize: t,
          browserUseViewportSize: n,
          conversationId: r,
          elementKey: i,
          hostKind: a,
          hostGeneration: o,
          initialUrl: s,
          isBrowserUseActive: c,
          partition: l,
          pagePersistence: u,
          rendererInstanceId: d,
        }) {
          ((this.browserTabId = e),
            (this.conversationId = r),
            (this.browserUseCaptureSurfaceSize = t),
            (this.browserUseViewportSize = n),
            (this.hostKind = a),
            (this.hostGeneration = o),
            (this.partition = l),
            (this.rendererInstanceId = d),
            (this.isBrowserUseActive = c),
            (this.container.dataset.browserSidebarWebview = i),
            Qo(this.container, a),
            this.cursorOverlayHost.setAttribute(Pc, i),
            wc(
              this.container,
              this.webview,
              this.cursorOverlayHost,
              null,
              n,
              this.isBrowserUseActive,
            ),
            (this.webview.className = `h-full w-full`),
            (this.webview.style.backgroundColor = Lc),
            this.webview.setAttribute(jc, r),
            this.webview.setAttribute(Mc, e),
            this.setPagePersistence(u),
            this.webview.setAttribute(Nc, ``),
            this.webview.setAttribute(`partition`, ut(r, e, d, o)),
            this.webview.setAttribute(`webviewrole`, `tab`),
            this.webview.setAttribute(`src`, s.length === 0 ? Ac : s),
            this.container.append(this.webview, this.cursorOverlayHost));
        }
        setHostKind(e) {
          this.hostKind !== e && ((this.hostKind = e), Qo(this.container, e));
        }
        setPagePersistence(e) {
          return rs(this.webview, e);
        }
        getCursorOverlayHost() {
          return this.cursorOverlayHost;
        }
        getBrowserTabId() {
          return this.browserTabId;
        }
        getConversationId() {
          return this.conversationId;
        }
        getPartition() {
          return this.partition;
        }
        getHostGeneration() {
          return this.hostGeneration;
        }
        markRegistered() {
          return this.isDisposed || this.isRegistered
            ? !1
            : ((this.isRegistered = !0),
              document.body.append(this.container),
              this.syncContainerStyle(),
              this.isAttached &&
                this.webviewRef != null &&
                kc(this.webviewRef, this.webview),
              !0);
        }
        detach(e) {
          if (
            this.isAttached &&
            this.webviewRef != null &&
            this.webviewRef !== e
          ) {
            kc(e, null, this.webview);
            return;
          }
          ((this.isAttached = !1),
            (this.webviewRef = e),
            (this.state = {
              bounds: this.state.bounds,
              isVisible: !1,
              scale: this.state.scale,
              windowZoom: this.state.windowZoom,
            }),
            (this.webview.style.backgroundColor = Lc),
            kc(e, null, this.webview),
            this.syncContainerStyle(),
            ht.info(
              `IAB_LIFECYCLE renderer detached retained browser sidebar webview`,
              {
                safe: {
                  browserTabId: this.browserTabId,
                  conversationId: this.conversationId,
                },
              },
            ));
        }
        sync(e, t) {
          ((this.isAttached = !0),
            (this.webviewRef = t),
            (this.state = e),
            (this.webview.style.backgroundColor = Lc),
            kc(t, this.isRegistered ? this.webview : null),
            this.syncContainerStyle());
        }
        shouldDestroyForHostRequest({ reason: e }) {
          return e === `closed`;
        }
        setBrowserUseActive(e) {
          ((this.isBrowserUseActive = e), this.syncContainerStyle());
        }
        setTabCaptureActive(e) {
          this.isTabCaptureActive !== e &&
            ((this.isTabCaptureActive = e), this.syncContainerStyle());
        }
        setBrowserUseViewportSize(e) {
          ((this.browserUseViewportSize = e), this.syncContainerStyle());
        }
        setBrowserUseCaptureSurfaceSize(e) {
          ((this.browserUseCaptureSurfaceSize = e), this.syncContainerStyle());
        }
        releaseBrowserUse() {
          ((this.browserUseCaptureSurfaceSize = null),
            (this.browserUseViewportSize = null),
            (this.isBrowserUseActive = !1),
            this.syncContainerStyle());
        }
        resync() {
          this.isAttached && this.syncContainerStyle();
        }
        transfer({
          browserTabId: e,
          conversationId: t,
          elementKey: n,
          partition: r,
        }) {
          ((this.container.dataset.browserSidebarWebview = n),
            this.cursorOverlayHost.setAttribute(Pc, n),
            this.webview.setAttribute(jc, t),
            this.webview.setAttribute(Mc, e),
            this.webview.setAttribute(
              `partition`,
              ut(t, e, this.rendererInstanceId, this.hostGeneration),
            ),
            (this.browserTabId = e),
            (this.conversationId = t),
            (this.partition = r));
        }
        dispose() {
          ((this.isDisposed = !0),
            ht.info(
              `IAB_LIFECYCLE renderer disposed retained browser sidebar webview`,
              {
                safe: {
                  browserTabId: this.browserTabId,
                  conversationId: this.conversationId,
                },
              },
            ),
            this.container.remove());
        }
        syncContainerStyle() {
          if (!this.isRegistered) return;
          let e = this.isBrowserUseActive || this.isTabCaptureActive,
            t = Sc({
              bounds: this.state.bounds,
              browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
              browserUseViewportSize: this.browserUseViewportSize,
              isVisible: this.state.isVisible,
              lastVisibleBounds: this.lastVisibleBounds,
              shouldUsePaintHost: e,
            });
          if (t == null) {
            wc(
              this.container,
              this.webview,
              this.cursorOverlayHost,
              this.lastVisibleBounds,
              this.browserUseViewportSize,
              e,
            );
            return;
          }
          if (this.browserUseCaptureSurfaceSize != null) {
            Tc(this.container, this.webview, this.cursorOverlayHost, t);
            return;
          }
          if (this.state.isVisible) {
            ((this.lastVisibleBounds = t),
              Cc(
                this.container,
                this.webview,
                this.cursorOverlayHost,
                t,
                this.state.scale,
                this.state.windowZoom ?? 1,
              ));
            return;
          }
          Tc(this.container, this.webview, this.cursorOverlayHost, t);
        }
      }));
  });
function X(e, t) {
  return `${e}\0${t}`;
}
function Vc(e) {
  let t = e.indexOf(`\0`);
  return { browserTabId: ze(e.slice(t + 1)), conversationId: e.slice(0, t) };
}
function Hc(e, t) {
  return [
    e,
    t?.tabType ?? ``,
    t?.title ?? ``,
    t?.url ?? ``,
    t?.faviconUrl ?? ``,
  ].join(`	`);
}
function Uc(e, t) {
  return t === Z(e, void 0) ? e : X(e, t);
}
function Z(e, t) {
  return t ?? de(e);
}
function Wc(e) {
  return typeof e[1] == `string`;
}
var Gc,
  Kc,
  qc,
  Jc,
  Yc = e(() => {
    (u(),
      qt(),
      mt(),
      B(),
      jn(),
      Uo(),
      Zo(),
      ks(),
      xc(),
      Bc(),
      (Gc = { responsiveViewportSize: null, toolbarState: Ho }),
      (Kc = `default`),
      (qc = class {
        listeners = new Set();
        browserUseCursorStates = new Map();
        snapshots = new Map();
        browserUseActiveTabKeys = new Set();
        browserUseTabKeys = new Set();
        browserUseTabs = [];
        browserUseTabIdsKeysByConversation = new Map();
        browserUseTabSummarySyncKeysByConversation = new Map();
        browserUseViewportSizes = new Map();
        browserUseCaptureSurfaceSizes = new Map();
        tabCaptureActiveKeys = new Set();
        deviceToolbarTabStates = new Map();
        tabPersistenceStates = new Map();
        webviews = new Map();
        transferredWebviewKeys = new Set();
        pendingElectronTransfers = new Map();
        mountStates = new Map();
        registrationAttempts = new WeakMap();
        nextHostGeneration = 0;
        rendererInstanceId = crypto.randomUUID();
        rendererSessionRegistration = null;
        electronPageHandoff = new Xo();
        constructor() {
          (Mt.subscribe(`browser-sidebar-state`, (e) => {
            this.setSnapshot(
              e.conversationId,
              Z(e.conversationId, e.browserTabId),
              e.snapshot,
            );
          }),
            Mt.subscribe(`browser-sidebar-browser-use-state`, (e) => {
              this.setBrowserUseActive(
                e.conversationId,
                Z(e.conversationId, e.browserTabId),
                e.isActive,
              );
            }),
            Mt.subscribe(`browser-sidebar-browser-use-page-released`, (e) => {
              this.releaseBrowserUseTab(
                e.conversationId,
                Z(e.conversationId, e.browserTabId),
              );
            }),
            Mt.subscribe(`browser-sidebar-browser-use-viewport`, (e) => {
              this.setBrowserUseViewportSize(
                e.conversationId,
                Z(e.conversationId, e.browserTabId),
                e.viewportSize,
              );
            }),
            Mt.subscribe(`browser-sidebar-browser-use-capture-surface`, (e) => {
              this.setBrowserUseCaptureSurfaceSize(
                e.conversationId,
                Z(e.conversationId, e.browserTabId),
                e.surfaceSize,
              );
            }),
            Mt.subscribe(`browser-sidebar-browser-use-cursor-state`, (e) => {
              this.setBrowserUseCursorState(
                e.conversationId,
                Z(e.conversationId, e.browserTabId),
                e,
              );
            }),
            Mt.subscribe(`browser-sidebar-tab-capture-state`, (e) => {
              this.setTabCaptureActive(
                e.conversationId,
                e.browserTabId,
                e.isActive,
              );
            }),
            Mt.subscribe(`browser-sidebar-destroy-webview`, (e) => {
              this.destroyWebviewAtHostRequest(
                e.conversationId,
                e.browserTabId,
                e.mountGeneration,
                e.reason,
                e.teardownId,
              );
            }),
            Mt.subscribe(`browser-sidebar-webview-attached`, (e) => {
              this.markWebviewAttached(
                e.conversationId,
                e.browserTabId,
                e.mountGeneration,
              );
            }),
            typeof window < `u` &&
              window.addEventListener(`focus`, () => {
                this.resyncAttachedWebviews();
              }),
            typeof document < `u` &&
              document.addEventListener(`visibilitychange`, () => {
                document.visibilityState === `visible` &&
                  this.resyncAttachedWebviews();
              }));
        }
        subscribe = (e) => (
          this.listeners.add(e),
          () => {
            this.listeners.delete(e);
          }
        );
        getSnapshot(e, t = Z(e, void 0)) {
          return this.snapshots.get(X(e, t)) ?? null;
        }
        getBrowserStorageId(e, t = Z(e, void 0)) {
          let n = X(e, t),
            r = this.tabPersistenceStates.get(n);
          if (r != null) return r.browserStorageId;
          let i = gn(`browser:${crypto.randomUUID()}`);
          return (
            this.tabPersistenceStates.set(n, {
              browserStorageId: i,
              mode: `ephemeral`,
            }),
            i
          );
        }
        getExistingBrowserStorageId(e, t) {
          return (
            this.tabPersistenceStates.get(X(e, t))?.browserStorageId ?? null
          );
        }
        restorePersistedPageState(e, t, n) {
          let r = X(e, t),
            i = this.tabPersistenceStates.get(r);
          (i?.browserStorageId === n && i.mode === `restore-expected`) ||
            (this.tabPersistenceStates.set(r, {
              browserStorageId: n,
              mode: `restore-expected`,
            }),
            this.emitChange());
        }
        getPagePersistence(e, t, n) {
          if (!n) return;
          let r = X(e, t),
            i = this.tabPersistenceStates.get(r);
          if (i == null) {
            let e = gn(`browser:${crypto.randomUUID()}`);
            return (
              this.tabPersistenceStates.set(r, {
                browserStorageId: e,
                mode: `persistent`,
              }),
              { browserStorageId: e, restore: `none` }
            );
          }
          return i.mode === `restore-expected`
            ? { browserStorageId: i.browserStorageId, restore: `required` }
            : (i.mode === `ephemeral` &&
                this.tabPersistenceStates.set(r, {
                  browserStorageId: i.browserStorageId,
                  mode: `persistent`,
                }),
              { browserStorageId: i.browserStorageId, restore: `none` });
        }
        hasRetainedWebview(e, t = Z(e, void 0)) {
          return this.webviews.get(X(e, t)) instanceof zc;
        }
        getBrowserUseCursorState(e, t = Z(e, void 0)) {
          return this.browserUseCursorStates.get(X(e, t)) ?? null;
        }
        isBrowserUseActive(e, t = Z(e, void 0)) {
          return this.browserUseActiveTabKeys.has(X(e, t));
        }
        isBrowserUseTab(e, t = Z(e, void 0)) {
          return this.browserUseTabKeys.has(X(e, t));
        }
        getBrowserUseTabs() {
          return this.browserUseTabs;
        }
        getBrowserUseSummaryBrowserTabId(e) {
          return (
            this.getBrowserUseActiveBrowserTabId(e) ??
            this.getFirstConversationBrowserTabId(e, this.browserUseTabKeys) ??
            this.getFirstConversationBrowserTabId(e, this.snapshots.keys())
          );
        }
        getBrowserUseActiveBrowserTabId(e) {
          return this.getFirstConversationBrowserTabId(
            e,
            this.browserUseActiveTabKeys,
          );
        }
        getBrowserUseBrowserTabIdsKey(e) {
          return this.browserUseTabIdsKeysByConversation.get(e) ?? ``;
        }
        getConversationBrowserTabIds(e) {
          let t = [],
            n = new Set(),
            r = [this.browserUseTabKeys, this.webviews.keys()];
          for (let i of r)
            for (let r of this.getConversationBrowserTabIdsFromKeys(e, i))
              n.has(r) || (n.add(r), t.push(r));
          return t;
        }
        getBrowserUseBrowserTabIds(e) {
          return this.getConversationBrowserTabIdsFromKeys(
            e,
            this.browserUseTabKeys,
          );
        }
        getBrowserUseBrowserTabSummarySyncKey(e) {
          let t = this.browserUseTabSummarySyncKeysByConversation.get(e) ?? ``;
          if (t.length > 0) return t;
          let n = this.getBrowserUseSummaryBrowserTabId(e);
          return n == null ? `` : Hc(n, this.getSnapshot(e, n));
        }
        getDeviceToolbarTabState(e, t = Z(e, void 0)) {
          return this.deviceToolbarTabStates.get(X(e, t)) ?? Gc;
        }
        getMountGeneration(e, t = Z(e, void 0)) {
          return this.mountStates.get(X(e, t))?.generation ?? 0;
        }
        claimMountGeneration(e, t = Z(e, void 0), n = Kc) {
          let r = X(e, t),
            i = this.mountStates.get(r) ?? {
              claimKeys: new Set(),
              generation: 0,
            };
          return (
            i.claimKeys.size === 0 && (i.generation += 1),
            i.claimKeys.add(n),
            this.mountStates.set(r, i),
            i.generation
          );
        }
        hasOtherMountGenerationClaim(e, t = Z(e, void 0), n = Kc, r) {
          let i = this.mountStates.get(X(e, t));
          if (i == null || (r != null && i.generation !== r)) return !1;
          for (let e of i.claimKeys) if (e !== n) return !0;
          return !1;
        }
        releaseMountGeneration(e, t = Z(e, void 0), n = Kc, r) {
          let i = X(e, t),
            a = this.mountStates.get(i);
          return a == null
            ? 0
            : ((r != null && a.generation !== r) || a.claimKeys.delete(n),
              a.generation);
        }
        syncElectronWebview(e, t, n, r = `right-panel`) {
          this.electronPageHandoff.sync(e, t, n, r);
        }
        detachElectronWebview(e, t, n, r) {
          this.electronPageHandoff.detach(e, t, n, r);
        }
        setDeviceToolbarTabState(e, t, n) {
          let r = typeof t == `function` ? Z(e, void 0) : t,
            i = typeof t == `function` ? t : n;
          if (i == null) return;
          let a = X(e, r);
          (this.deviceToolbarTabStates.set(
            a,
            i(this.getDeviceToolbarTabState(e, r)),
          ),
            this.emitChange());
        }
        setSnapshot(e, t, n) {
          let r = typeof t == `string` ? t : Z(e, void 0),
            i = typeof t == `string` ? n : t;
          if (i == null) return;
          let a = X(e, r);
          (this.snapshots.set(a, i),
            this.browserUseTabKeys.has(a) && this.syncBrowserUseTabKeys(e),
            i.tabType !== c.WEB &&
              (this.webviews.get(a) ?? null) instanceof zc &&
              this.disposeWebviewHost(e, r, a, i.tabType),
            this.emitChange());
        }
        removeTab(e, t) {
          let n = X(e, t),
            r = this.webviews.get(n);
          (r instanceof Os && this.electronPageHandoff.removeTab(r),
            this.pendingElectronTransfers.delete(n),
            this.snapshots.delete(n),
            this.tabPersistenceStates.delete(n));
          let i = this.browserUseTabKeys.delete(n);
          (this.browserUseActiveTabKeys.delete(n),
            this.browserUseCursorStates.delete(n),
            this.browserUseCaptureSurfaceSizes.delete(n),
            this.browserUseViewportSizes.delete(n),
            this.tabCaptureActiveKeys.delete(n),
            this.deviceToolbarTabStates.delete(n),
            this.mountStates.delete(n),
            i && this.syncBrowserUseTabKeys(e),
            this.emitChange());
        }
        getWebview(e, ...t) {
          let n, r, i;
          if (Wc(t)) {
            let [e, a, o] = t;
            ((n = e), (r = a), (i = o));
          } else ((n = Z(e, void 0)), (r = t[0]), (i = t[1]));
          let a = X(e, n),
            o = i?.persistedTabsEnabled ?? !1,
            s = this.getPagePersistence(e, n, o),
            c = en(e, n),
            l = this.webviews.get(a),
            u = i?.hostKind ?? `right-panel`;
          if (l instanceof Os && l.getPartition() === c)
            return (
              l.setHostKind(u),
              l.setPagePersistence(s) &&
                (this.registerWebviewHost(l, s), this.emitChange()),
              i != null &&
                (l.setAdoptionAttributes(
                  i.adoptionLease ?? null,
                  i.adoptedWebContentsId ?? null,
                ),
                i.adoptionLease != null &&
                  i.adoptedWebContentsId != null &&
                  ht.info(`IAB_ADOPTION renderer updated adopted webview`, {
                    safe: {
                      adoptedWebContentsId: i.adoptedWebContentsId,
                      browserTabId: n,
                      conversationId: e,
                      hasInitialUrl: r.length > 0,
                    },
                    sensitive: {},
                  })),
              l
            );
          l != null && this.disposeWebviewHost(e, n, a, `web`);
          let d = ++this.nextHostGeneration,
            f = new Os({
              browserTabId: n,
              conversationId: e,
              elementKey: Uc(e, n),
              hostKind: u,
              hostGeneration: d,
              pagePersistence: s,
              partition: c,
              rendererInstanceId: this.rendererInstanceId,
              adoptionLease: i?.adoptionLease ?? null,
              adoptedWebContentsId: i?.adoptedWebContentsId ?? null,
            });
          this.browserUseActiveTabKeys.has(a) && f.setBrowserUseActive(!0);
          let p = this.browserUseViewportSizes.get(a) ?? null;
          p != null && f.setBrowserUseViewportSize(p);
          let m = this.browserUseCaptureSurfaceSizes.get(a) ?? null;
          return (
            m != null && f.setBrowserUseCaptureSurfaceSize(m),
            f.setTabCaptureActive(this.tabCaptureActiveKeys.has(a)),
            this.webviews.set(a, f),
            this.registerWebviewHost(f, s),
            ht.info(`IAB_LIFECYCLE renderer created browser sidebar webview`, {
              safe: { browserTabId: n, conversationId: e, hostKind: u },
              sensitive: { initialUrl: r },
            }),
            i?.adoptionLease != null &&
              i.adoptedWebContentsId != null &&
              ht.info(`IAB_ADOPTION renderer created adopted webview`, {
                safe: {
                  adoptedWebContentsId: i.adoptedWebContentsId,
                  browserTabId: n,
                  conversationId: e,
                  hasInitialUrl: r.length > 0,
                },
                sensitive: {},
              }),
            this.emitChange(),
            f
          );
        }
        getRetainedWebview(e, t, n, r) {
          let i = X(e, t),
            a = r?.persistedTabsEnabled ?? !1,
            o = this.getPagePersistence(e, t, a),
            s = en(e, t),
            c = this.webviews.get(i),
            l = r?.hostKind ?? `right-panel`;
          if (c != null && c.getPartition() === s)
            return (
              c.setHostKind(l),
              c.setPagePersistence(o) &&
                (this.registerWebviewHost(c, o), this.emitChange()),
              c
            );
          c != null && this.disposeWebviewHost(e, t, i, `web`);
          let u = ++this.nextHostGeneration,
            d = new zc({
              browserTabId: t,
              browserUseCaptureSurfaceSize:
                this.browserUseCaptureSurfaceSizes.get(i) ?? null,
              browserUseViewportSize:
                this.browserUseViewportSizes.get(i) ?? null,
              conversationId: e,
              elementKey: Uc(e, t),
              hostKind: l,
              hostGeneration: u,
              initialUrl: n,
              isBrowserUseActive: this.browserUseActiveTabKeys.has(i),
              pagePersistence: o,
              partition: s,
              rendererInstanceId: this.rendererInstanceId,
            });
          return (
            d.setTabCaptureActive(this.tabCaptureActiveKeys.has(i)),
            this.webviews.set(i, d),
            this.registerWebviewHost(d, o),
            ht.info(
              `IAB_LIFECYCLE renderer created retained browser sidebar webview`,
              {
                safe: { browserTabId: t, conversationId: e, hostKind: l },
                sensitive: { initialUrl: n },
              },
            ),
            this.emitChange(),
            d
          );
        }
        registerWebviewHost(e, t) {
          let n = An?.browserSidebar;
          if (n == null) {
            this.disposeCurrentWebviewHost(e);
            return;
          }
          let r = e.getBrowserTabId(),
            i = e.getConversationId(),
            a = {};
          (this.registrationAttempts.set(e, a),
            (this.rendererSessionRegistration ??= n.registerWebviewHostSession({
              rendererInstanceId: this.rendererInstanceId,
            })),
            this.rendererSessionRegistration
              .then((o) =>
                o && this.registrationAttempts.get(e) === a
                  ? n.registerWebviewHost({
                      browserTabId: r,
                      conversationId: i,
                      hostGeneration: e.getHostGeneration(),
                      pagePersistence: t,
                      rendererInstanceId: this.rendererInstanceId,
                    })
                  : !1,
              )
              .then((t) => {
                this.registrationAttempts.get(e) !== a ||
                  !this.isCurrentWebviewHost(e) ||
                  e.getBrowserTabId() !== r ||
                  e.getConversationId() !== i ||
                  (t
                    ? e.markRegistered() && this.emitChange()
                    : (this.disposeCurrentWebviewHost(e), this.emitChange()));
              })
              .catch(() => {
                this.registrationAttempts.get(e) !== a ||
                  !this.isCurrentWebviewHost(e) ||
                  (this.disposeCurrentWebviewHost(e), this.emitChange());
              }));
        }
        isCurrentWebviewHost(e) {
          return (
            this.webviews.get(X(e.getConversationId(), e.getBrowserTabId())) ===
            e
          );
        }
        disposeCurrentWebviewHost(e) {
          let t = e.getConversationId(),
            n = e.getBrowserTabId(),
            r = X(t, n);
          this.webviews.get(r) === e && this.disposeWebviewHost(t, n, r, `web`);
        }
        getCursorOverlayHost(e, t = Z(e, void 0)) {
          return this.webviews.get(X(e, t))?.getCursorOverlayHost() ?? null;
        }
        setBrowserUseActive(e, ...t) {
          let n = typeof t[0] == `boolean` ? Z(e, void 0) : t[0],
            r = typeof t[0] == `boolean` ? t[0] : t[1],
            i = X(e, n),
            a = this.browserUseActiveTabKeys.has(i),
            o = this.browserUseTabKeys.has(i),
            s = this.browserUseCursorStates.get(i) ?? null,
            c = !1;
          if (r) {
            (this.browserUseTabKeys.add(i), o || this.syncBrowserUseTabKeys(e));
            let t = `${e}\0`;
            for (let e of Array.from(this.browserUseActiveTabKeys)) {
              if (e === i || !e.startsWith(t)) continue;
              this.browserUseActiveTabKeys.delete(e);
              let n = this.browserUseCursorStates.get(e) ?? null;
              (n != null &&
                this.browserUseCursorStates.set(e, {
                  visible: !1,
                  x: n.x,
                  y: n.y,
                }),
                this.webviews.get(e)?.setBrowserUseActive?.(!1),
                (c = !0));
            }
            (this.browserUseActiveTabKeys.add(i),
              a || this.browserUseCursorStates.delete(i));
          } else
            (this.browserUseActiveTabKeys.delete(i),
              s != null &&
                this.browserUseCursorStates.set(i, {
                  visible: !1,
                  x: s.x,
                  y: s.y,
                }));
          (this.webviews.get(i)?.setBrowserUseActive?.(r),
            ht.info(`IAB_LIFECYCLE renderer synced browser use webview state`, {
              safe: {
                browserTabId: n,
                conversationId: e,
                isBrowserUseActive: r,
              },
              sensitive: {},
            }),
            (a !== r || s != null || c) && this.emitChange());
        }
        releaseBrowserUseTab(e, t) {
          let n = X(e, t),
            r = this.browserUseActiveTabKeys.delete(n),
            i = this.browserUseTabKeys.delete(n),
            a = this.browserUseCursorStates.delete(n),
            o = this.browserUseCaptureSurfaceSizes.delete(n),
            s = this.browserUseViewportSizes.delete(n),
            c = this.deviceToolbarTabStates.delete(n),
            l = r || i || a || o || s || c;
          (this.webviews.get(n)?.releaseBrowserUse(),
            i && this.syncBrowserUseTabKeys(e),
            l && this.emitChange());
        }
        clearBrowserUseState() {
          let e = new Set([
            ...this.browserUseTabKeys,
            ...this.browserUseActiveTabKeys,
            ...this.browserUseCursorStates.keys(),
            ...this.browserUseCaptureSurfaceSizes.keys(),
            ...this.browserUseViewportSizes.keys(),
          ]);
          for (let t of e) {
            let { browserTabId: e, conversationId: n } = Vc(t);
            this.releaseBrowserUseTab(n, e);
          }
        }
        setBrowserUseViewportSize(e, ...t) {
          let n = t.length === 1 ? Z(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = X(e, n),
            a = r == null ? null : { width: Mo(r.width), height: No(r.height) };
          (a == null
            ? this.browserUseViewportSizes.delete(i)
            : this.browserUseViewportSizes.set(i, a),
            this.webviews.get(i)?.setBrowserUseViewportSize?.(a),
            this.setDeviceToolbarTabState(e, n, (e) =>
              a == null
                ? { ...e, toolbarState: { ...e.toolbarState, isEnabled: !1 } }
                : {
                    responsiveViewportSize: a,
                    toolbarState: {
                      ...e.toolbarState,
                      ...a,
                      isEnabled: !0,
                      presetId: Fo,
                    },
                  },
            ));
        }
        setBrowserUseCaptureSurfaceSize(e, ...t) {
          let n = t.length === 1 ? Z(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = X(e, n);
          (r == null
            ? this.browserUseCaptureSurfaceSizes.delete(i)
            : this.browserUseCaptureSurfaceSizes.set(i, r),
            this.webviews.get(i)?.setBrowserUseCaptureSurfaceSize(r));
        }
        setBrowserUseCursorState(e, ...t) {
          let n = t.length === 1 ? Z(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = X(e, n),
            a = this.browserUseCursorStates.get(i);
          if (r.visible) {
            if (
              a?.visible === r.visible &&
              a.animateMovement === r.animateMovement &&
              a.moveSequence === r.moveSequence &&
              a.x === r.x &&
              a.y === r.y
            )
              return;
            (this.browserUseCursorStates.set(i, {
              animateMovement: r.animateMovement,
              moveSequence: r.moveSequence,
              visible: !0,
              x: r.x,
              y: r.y,
            }),
              this.emitChange());
            return;
          }
          a == null ||
            !a.visible ||
            (this.browserUseCursorStates.set(i, {
              visible: !1,
              x: a.x,
              y: a.y,
            }),
            this.emitChange());
        }
        setTabCaptureActive(e, t, n) {
          let r = X(e, t);
          (n
            ? this.tabCaptureActiveKeys.add(r)
            : this.tabCaptureActiveKeys.delete(r),
            this.webviews.get(r)?.setTabCaptureActive(n));
        }
        reassociateTabState(e, ...t) {
          let n = t.length === 1 ? Z(e, void 0) : t[0],
            r = t.length === 1 ? t[0] : t[1],
            i = t.length === 1 ? Z(r, void 0) : t[2],
            a = t.length === 4 ? t[3] : void 0,
            o = tt(X(e, n), X(r, i)),
            s = X(e, n),
            c = X(r, i);
          if (s === c || this.transferredWebviewKeys.has(o)) return;
          let l = this.webviews.get(s) ?? null,
            u = this.webviews.get(c) ?? null,
            d = this.tabPersistenceStates.get(s) ?? null,
            f = this.tabPersistenceStates.get(c) ?? null,
            p = this.snapshots.get(s) ?? null;
          if (
            u != null ||
            this.pendingElectronTransfers.has(c) ||
            this.snapshots.has(c) ||
            (f != null && f.mode !== `ephemeral`)
          ) {
            (this.transferredWebviewKeys.add(o),
              l != null && this.disposeWebviewHost(e, n, s, `closed`),
              this.removeTab(e, n),
              Mt.dispatchMessage(`browser-sidebar-command`, {
                ...(d == null || d.mode === `ephemeral`
                  ? {}
                  : {
                      pagePersistence: {
                        browserStorageId: d.browserStorageId,
                        restore:
                          d.mode === `restore-expected` ? `required` : `none`,
                      },
                    }),
                browserTabId: n,
                conversationId: e,
                command: { type: `close-tab` },
              }),
              a?.removeSourceBrowserStateWhenEmpty &&
                this.removeConversationBrowserStateIfEmpty(e));
            return;
          }
          (l instanceof Os && this.electronPageHandoff.transferRoute(l),
            this.pendingElectronTransfers.delete(s),
            this.pendingElectronTransfers.delete(c),
            this.transferredWebviewKeys.add(o),
            l != null &&
              (this.webviews.delete(s),
              l.transfer({
                browserTabId: i,
                conversationId: r,
                elementKey: Uc(r, i),
                partition: en(r, i),
              }),
              this.webviews.set(c, l)));
          let m = this.browserUseViewportSizes.get(s) ?? null,
            h = this.browserUseTabKeys.has(s),
            g = this.tabCaptureActiveKeys.delete(s),
            _ = this.mountStates.get(s) ?? null,
            v = this.browserUseActiveTabKeys.delete(s);
          (this.browserUseCaptureSurfaceSizes.delete(s),
            this.browserUseCursorStates.delete(s),
            this.browserUseTabKeys.delete(s),
            this.browserUseViewportSizes.delete(s),
            this.mountStates.delete(s),
            this.tabPersistenceStates.delete(s),
            d != null && this.tabPersistenceStates.set(c, d),
            l != null &&
              this.registerWebviewHost(
                l,
                this.getPagePersistence(
                  r,
                  i,
                  d != null && d.mode !== `ephemeral`,
                ),
              ),
            this.pendingElectronTransfers.set(c, {
              sourceBrowserTabId: n,
              sourceConversationId: e,
            }),
            Mt.dispatchMessage(`browser-sidebar-command`, {
              conversationId: e,
              browserTabId: n,
              command: {
                type: `transfer-conversation`,
                targetBrowserTabId: i,
                targetConversationId: r,
              },
            }));
          let y = !1;
          (h &&
            (this.browserUseTabKeys.add(c),
            this.syncBrowserUseTabKeys(e),
            (y = !0)),
            v && this.browserUseActiveTabKeys.add(c),
            m != null && this.browserUseViewportSizes.set(c, m),
            g && l != null && this.tabCaptureActiveKeys.add(c),
            _ != null &&
              this.mountStates.set(c, {
                claimKeys: new Set(),
                generation: _.generation,
              }),
            l?.setBrowserUseCaptureSurfaceSize(null),
            ht.info(`IAB_LIFECYCLE renderer reassociated browser sidebar tab`, {
              safe: {
                sourceBrowserTabId: n,
                sourceConversationId: e,
                targetBrowserTabId: i,
                targetConversationId: r,
              },
            }));
          let b = this.deviceToolbarTabStates.get(s);
          (p != null && (this.snapshots.delete(s), this.snapshots.set(c, p)),
            y && this.syncBrowserUseTabKeys(r),
            b != null &&
              (this.deviceToolbarTabStates.delete(s),
              this.deviceToolbarTabStates.set(c, b)),
            a?.removeSourceBrowserStateWhenEmpty &&
              this.removeConversationBrowserStateIfEmpty(e),
            this.emitChange());
        }
        consumePendingElectronTransfer(e, t = Z(e, void 0)) {
          let n = X(e, t),
            r = this.pendingElectronTransfers.get(n) ?? null;
          return r == null
            ? null
            : (this.pendingElectronTransfers.delete(n), r);
        }
        peekPendingElectronTransfer(e, t = Z(e, void 0)) {
          return this.pendingElectronTransfers.get(X(e, t)) ?? null;
        }
        disposeAll() {
          (this.electronPageHandoff.disposeAll(),
            this.snapshots.clear(),
            this.browserUseCursorStates.clear(),
            this.browserUseActiveTabKeys.clear(),
            this.browserUseTabKeys.clear(),
            this.browserUseTabIdsKeysByConversation.clear(),
            this.browserUseTabSummarySyncKeysByConversation.clear(),
            this.refreshBrowserUseTabs(),
            this.browserUseCaptureSurfaceSizes.clear(),
            this.browserUseViewportSizes.clear(),
            this.tabCaptureActiveKeys.clear(),
            this.deviceToolbarTabStates.clear(),
            this.tabPersistenceStates.clear(),
            this.pendingElectronTransfers.clear(),
            this.mountStates.clear());
          for (let e of this.webviews.values()) e.dispose();
          (this.webviews.clear(),
            this.transferredWebviewKeys.clear(),
            this.emitChange());
        }
        emitChange() {
          for (let e of this.listeners) e();
        }
        removeElectronWebviewFromHandoff(e) {
          e instanceof Os && this.electronPageHandoff.disposeHost(e);
        }
        resyncAttachedWebviews() {
          for (let e of this.webviews.values()) e.resync();
        }
        disposeWebviewHost(e, t, n, r) {
          let i = this.webviews.get(n) ?? null;
          (this.webviews.delete(n),
            i != null &&
              (r === `closed` && i instanceof Os
                ? this.electronPageHandoff.removeTab(i)
                : this.removeElectronWebviewFromHandoff(i),
              i.dispose(),
              ht.info(
                `IAB_LIFECYCLE renderer removed browser sidebar webview`,
                { safe: { browserTabId: t, conversationId: e, tabType: r } },
              )));
        }
        destroyWebviewAtHostRequest(e, t, n, r, i) {
          let a = X(e, t);
          ((this.webviews.get(a) ?? null)?.shouldDestroyForHostRequest({
            mountGeneration: n,
            reason: r,
          }) !== !1 && this.disposeWebviewHost(e, t, a, r),
            r === `closed` && this.removeTab(e, t),
            Mt.dispatchMessage(`browser-sidebar-webview-destroyed`, {
              browserTabId: t,
              conversationId: e,
              reason: r,
              teardownId: i,
            }));
        }
        getFirstConversationBrowserTabId(e, t) {
          let n = `${e}\0`;
          for (let e of t) if (e.startsWith(n)) return ze(e.slice(n.length));
          return null;
        }
        getConversationBrowserTabIdsFromKeys(e, t) {
          let n = `${e}\0`,
            r = [];
          for (let e of t) e.startsWith(n) && r.push(ze(e.slice(n.length)));
          return r;
        }
        removeConversationBrowserStateIfEmpty(e) {
          this.getConversationBrowserTabIds(e).length > 0 ||
            this.removeConversationTabs(e);
        }
        syncBrowserUseTabKeys(e) {
          let t = this.getConversationBrowserTabIdsFromKeys(
            e,
            this.browserUseTabKeys,
          );
          if (t.length === 0) {
            (this.browserUseTabIdsKeysByConversation.delete(e),
              this.browserUseTabSummarySyncKeysByConversation.delete(e),
              this.refreshBrowserUseTabs());
            return;
          }
          (this.browserUseTabIdsKeysByConversation.set(e, t.join(`\0`)),
            this.browserUseTabSummarySyncKeysByConversation.set(
              e,
              t.map((t) => Hc(t, this.getSnapshot(e, t))).join(`\0`),
            ),
            this.refreshBrowserUseTabs());
        }
        refreshBrowserUseTabs() {
          this.browserUseTabs = Array.from(this.browserUseTabKeys, Vc);
        }
        removeConversationTabs(e) {
          let t = `${e}\0`;
          this.electronPageHandoff.removeConversation(e);
          for (let e of this.snapshots.keys())
            e.startsWith(t) && this.snapshots.delete(e);
          for (let e of this.browserUseActiveTabKeys)
            e.startsWith(t) && this.browserUseActiveTabKeys.delete(e);
          for (let e of this.browserUseTabKeys)
            e.startsWith(t) && this.browserUseTabKeys.delete(e);
          this.refreshBrowserUseTabs();
          for (let e of this.browserUseCursorStates.keys())
            e.startsWith(t) && this.browserUseCursorStates.delete(e);
          for (let e of this.browserUseCaptureSurfaceSizes.keys())
            e.startsWith(t) && this.browserUseCaptureSurfaceSizes.delete(e);
          for (let e of this.browserUseViewportSizes.keys())
            e.startsWith(t) && this.browserUseViewportSizes.delete(e);
          for (let e of this.tabCaptureActiveKeys)
            e.startsWith(t) && this.tabCaptureActiveKeys.delete(e);
          for (let e of this.deviceToolbarTabStates.keys())
            e.startsWith(t) && this.deviceToolbarTabStates.delete(e);
          for (let e of this.pendingElectronTransfers.keys())
            e.startsWith(t) && this.pendingElectronTransfers.delete(e);
          for (let e of this.mountStates.keys())
            e.startsWith(t) && this.mountStates.delete(e);
          for (let e of this.tabPersistenceStates.keys())
            e.startsWith(t) && this.tabPersistenceStates.delete(e);
          for (let [e, n] of this.webviews.entries())
            e.startsWith(t) &&
              (this.webviews.delete(e),
              this.removeElectronWebviewFromHandoff(n),
              n.dispose());
          (this.browserUseTabIdsKeysByConversation.delete(e),
            this.browserUseTabSummarySyncKeysByConversation.delete(e));
        }
        markWebviewAttached(e, t, n) {
          let r = this.getMountGeneration(e, t);
          (r === n && tc(e, t),
            this.electronPageHandoff.acknowledgeAttachment(e, t, n, r),
            this.emitChange());
        }
      }),
      (Jc = new qc()));
  }),
  Xc,
  Zc = e(() => {
    Xc = `<svg
  width="21"
  height="21"
  viewBox="0 0 21 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.6475 18.3409C11.0975 18.3409 10.575 18.2364 10.08 18.0274C9.58502 17.8184 9.14502 17.5269 8.76002 17.1529C8.34202 17.2959 7.90751 17.3674 7.45651 17.3674C6.71951 17.3674 6.03751 17.1859 5.41051 16.8229C4.78351 16.4599 4.27751 15.9649 3.89251 15.3379C3.51851 14.7109 3.33151 14.0124 3.33151 13.2424C3.33151 12.9234 3.37551 12.5769 3.46351 12.2029C3.02351 11.7959 2.68251 11.3284 2.44051 10.8004C2.19851 10.2614 2.07751 9.70044 2.07751 9.11744C2.07751 8.52344 2.20401 7.95144 2.45701 7.40144C2.71001 6.85144 3.06201 6.37844 3.51301 5.98244C3.97501 5.57544 4.50851 5.29494 5.11351 5.14094C5.23451 4.51394 5.48751 3.95294 5.87251 3.45794C6.26851 2.95194 6.75252 2.55594 7.32452 2.26994C7.89652 1.98394 8.50702 1.84094 9.15602 1.84094C9.70602 1.84094 10.2285 1.94544 10.7235 2.15444C11.2185 2.36344 11.6585 2.65494 12.0435 3.02894C12.4615 2.88594 12.896 2.81444 13.347 2.81444C14.084 2.81444 14.766 2.99594 15.393 3.35894C16.02 3.72194 16.5205 4.21694 16.8945 4.84394C17.2795 5.47094 17.472 6.16944 17.472 6.93944C17.472 7.25844 17.428 7.60494 17.34 7.97894C17.78 8.38594 18.121 8.85894 18.363 9.39794C18.605 9.92594 18.726 10.4814 18.726 11.0644C18.726 11.6584 18.5995 12.2304 18.3465 12.7804C18.0935 13.3304 17.736 13.8089 17.274 14.2159C16.823 14.6119 16.295 14.8869 15.69 15.0409C15.569 15.6679 15.3105 16.2289 14.9145 16.7239C14.5295 17.2299 14.051 17.6259 13.479 17.9119C12.907 18.1979 12.2965 18.3409 11.6475 18.3409ZM7.57201 16.2784C8.12201 16.2784 8.60051 16.1629 9.00751 15.9319L12.1095 14.1499C12.2195 14.0729 12.2745 13.9684 12.2745 13.8364V12.4174L8.28152 14.7109C8.03952 14.8539 7.79751 14.8539 7.55552 14.7109L4.43701 12.9124C4.43701 12.9454 4.43151 12.9839 4.42051 13.0279C4.42051 13.0719 4.42051 13.1379 4.42051 13.2259C4.42051 13.7869 4.55252 14.3039 4.81651 14.7769C5.09152 15.2389 5.47101 15.6019 5.95501 15.8659C6.43901 16.1409 6.97801 16.2784 7.57201 16.2784ZM7.73701 13.5889C7.80301 13.6219 7.86351 13.6384 7.91851 13.6384C7.97351 13.6384 8.02852 13.6219 8.08352 13.5889L9.32101 12.8794L5.34451 10.5694C5.10251 10.4264 4.98151 10.2119 4.98151 9.92594V6.34544C4.43151 6.58744 3.99151 6.96144 3.66151 7.46744C3.33151 7.96244 3.16651 8.51244 3.16651 9.11744C3.16651 9.65644 3.30401 10.1734 3.57901 10.6684C3.85401 11.1634 4.21151 11.5374 4.65151 11.7904L7.73701 13.5889ZM11.6475 17.2519C12.2305 17.2519 12.7585 17.1199 13.2315 16.8559C13.7045 16.5919 14.0785 16.2289 14.3535 15.7669C14.6285 15.3049 14.766 14.7879 14.766 14.2159V10.6519C14.766 10.5199 14.711 10.4209 14.601 10.3549L13.347 9.62894V14.2324C13.347 14.5184 13.226 14.7329 12.984 14.8759L9.86551 16.6744C10.4045 17.0594 10.9985 17.2519 11.6475 17.2519ZM12.2745 11.2129V8.96894L10.41 7.91294L8.52902 8.96894V11.2129L10.41 12.2689L12.2745 11.2129ZM7.45651 5.94944C7.45651 5.66344 7.57752 5.44894 7.81952 5.30594L10.938 3.50744C10.399 3.12244 9.80502 2.92994 9.15602 2.92994C8.57302 2.92994 8.04501 3.06194 7.57201 3.32594C7.09902 3.58994 6.72502 3.95294 6.45002 4.41494C6.18602 4.87694 6.05401 5.39394 6.05401 5.96594V9.51344C6.05401 9.64544 6.10901 9.74994 6.21902 9.82694L7.45651 10.5529V5.94944ZM15.8385 13.8364C16.3885 13.5944 16.823 13.2204 17.142 12.7144C17.472 12.2084 17.637 11.6584 17.637 11.0644C17.637 10.5254 17.4995 10.0084 17.2245 9.51344C16.9495 9.01844 16.592 8.64444 16.152 8.39144L13.0665 6.60944C13.0005 6.56544 12.94 6.54894 12.885 6.55994C12.83 6.55994 12.775 6.57644 12.72 6.60944L11.4825 7.30244L15.4755 9.62894C15.5965 9.69494 15.6845 9.78294 15.7395 9.89294C15.8055 9.99194 15.8385 10.1129 15.8385 10.2559V13.8364ZM12.522 5.45444C12.764 5.30044 13.006 5.30044 13.248 5.45444L16.383 7.28594C16.383 7.20894 16.383 7.10994 16.383 6.98894C16.383 6.46094 16.251 5.96044 15.987 5.48744C15.734 5.00344 15.3655 4.61844 14.8815 4.33244C14.4085 4.04644 13.8585 3.90344 13.2315 3.90344C12.6815 3.90344 12.203 4.01894 11.796 4.24994L8.69402 6.03194C8.58402 6.10894 8.52902 6.21344 8.52902 6.34544V7.76444L12.522 5.45444Z"
    fill="currentColor"
  />
</svg>
`;
  });
function Qc(e) {
  let t = (0, $c.c)(6),
    { className: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = H(
        `openai-blossom-shimmer relative inline-flex shrink-0 items-center justify-center`,
        n,
      )),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, el.jsx)(R, {
        className: `openai-blossom-shimmer-base size-full`,
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, el.jsx)(`div`, {
        className: `openai-blossom-shimmer-overlay pointer-events-none absolute inset-0`,
        style: {
          WebkitMaskImage: `url(${tl})`,
          maskImage: `url(${tl})`,
          WebkitMaskPosition: `center`,
          maskPosition: `center`,
          WebkitMaskRepeat: `no-repeat`,
          maskRepeat: `no-repeat`,
          WebkitMaskSize: `contain`,
          maskSize: `contain`,
        },
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === r
      ? (o = t[5])
      : ((o = (0, el.jsxs)(`div`, {
          "aria-hidden": `true`,
          className: r,
          children: [i, a],
        })),
        (t[4] = r),
        (t[5] = o)),
    o
  );
}
var $c,
  el,
  tl,
  nl = e(() => {
    (($c = z()), cn(), He(), Zc(), s(), (el = q()), (tl = ke(Xc)));
  });
function rl(e) {
  let t = (0, il.c)(21),
    { overlay: n, fillParent: r, showLogo: i, debugName: a } = e,
    o = n === void 0 ? !1 : n,
    s = r === void 0 ? !1 : r,
    c = i === void 0 ? !0 : i,
    [l, u] = (0, al.useState)(!1),
    d = o
      ? `absolute inset-0 z-10 bg-token-bg-primary/70`
      : s
        ? `absolute inset-0 bg-transparent`
        : `relative size-full bg-transparent`,
    f;
  t[0] === d
    ? (f = t[1])
    : ((f = H(`flex items-center justify-center`, d)), (t[0] = d), (t[1] = f));
  let p;
  t[2] === !1 ? (p = t[3]) : ((p = () => {}), (t[2] = !1), (t[3] = p));
  let m;
  t[4] !== s || t[5] !== o
    ? ((m =
        o || s
          ? null
          : (0, ol.jsx)(`div`, {
              className: `draggable absolute inset-x-0 top-0 electron:h-toolbar extension:h-toolbar-sm`,
            })),
      (t[4] = s),
      (t[5] = o),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === c
    ? (h = t[8])
    : ((h = c ? (0, ol.jsx)(Qc, { className: `size-14` }) : null),
      (t[7] = c),
      (t[8] = h));
  let g;
  t[9] !== !1 || t[10] !== a || t[11] !== l
    ? ((g = null), (t[9] = !1), (t[10] = a), (t[11] = l), (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== h || t[14] !== g
    ? ((_ = (0, ol.jsxs)(`div`, {
        className: `flex flex-col items-center gap-2`,
        children: [h, g],
      })),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  return (
    t[16] !== _ || t[17] !== f || t[18] !== p || t[19] !== m
      ? ((v = (0, ol.jsxs)(`div`, {
          className: f,
          onClick: p,
          children: [m, _],
        })),
        (t[16] = _),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var il,
  al,
  ol,
  sl = e(() => {
    ((il = z()), cn(), (al = t(W(), 1)), nl(), (ol = q()));
  });
function cl(e, t) {
  return e.find((e) => e.clientThreadId === t) ?? null;
}
var ll,
  ul,
  dl = e(() => {
    (it(),
      vt(),
      Ye(),
      j(),
      fe(),
      (ll = n(_n, (e, { get: t }) => {
        if (e == null) return null;
        let n = Bt(t, `pending_worktrees`);
        return n === void 0 ? void 0 : cl(n, e);
      })),
      (ul = De(f, ({ get: e, scope: t }) => {
        if (t.value.routeKind !== `client-local-thread`) return `ready`;
        let { clientThreadId: n } = t.value;
        return e(ne, n) == null
          ? e(ll, n)?.phase === `failed`
            ? `failed`
            : `provisioning`
          : `ready`;
      })));
  }),
  fl,
  pl,
  ml = e(() => {
    ((fl = t(W(), 1)), (pl = (0, fl.createContext)(null)));
  });
function hl(e, t, n) {
  let r = e.slice();
  return (r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r);
}
function gl(e, t) {
  return e.reduce((e, n, r) => {
    let i = t.get(n);
    return (i && (e[r] = i), e);
  }, Array(e.length));
}
function _l(e) {
  return e !== null && e >= 0;
}
function vl(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function yl(e) {
  return typeof e == `boolean` ? { draggable: e, droppable: e } : e;
}
function bl(e, t, n) {
  let r = e[t],
    i = e[t - 1],
    a = e[t + 1];
  return !r || (!i && !a)
    ? 0
    : n < t
      ? i
        ? r.left - (i.left + i.width)
        : a.left - (r.left + r.width)
      : a
        ? a.left - (r.left + r.width)
        : r.left - (i.left + i.width);
}
function xl(e, t, n) {
  let r = e[t],
    i = e[t - 1],
    a = e[t + 1];
  return r
    ? n < t
      ? i
        ? r.top - (i.top + i.height)
        : a
          ? a.top - (r.top + r.height)
          : 0
      : a
        ? a.top - (r.top + r.height)
        : i
          ? r.top - (i.top + i.height)
          : 0
    : 0;
}
function Sl(e) {
  let { children: t, id: n, items: r, strategy: i = Ml, disabled: a = !1 } = e,
    {
      active: o,
      dragOverlay: s,
      droppableRects: c,
      over: l,
      measureDroppableContainers: u,
    } = Hi(),
    d = tr(Fl, n),
    f = s.rect !== null,
    p = (0, kl.useMemo)(
      () => r.map((e) => (typeof e == `object` && `id` in e ? e.id : e)),
      [r],
    ),
    m = o != null,
    h = o ? p.indexOf(o.id) : -1,
    g = l ? p.indexOf(l.id) : -1,
    _ = (0, kl.useRef)(p),
    v = !vl(p, _.current),
    y = (g !== -1 && h === -1) || v,
    b = yl(a);
  (ur(() => {
    v && m && u(p);
  }, [v, p, m, u]),
    (0, kl.useEffect)(() => {
      _.current = p;
    }, [p]));
  let x = (0, kl.useMemo)(
    () => ({
      activeIndex: h,
      containerId: d,
      disabled: b,
      disableTransforms: y,
      items: p,
      overIndex: g,
      useDragOverlay: f,
      sortedRects: gl(p, c),
      strategy: i,
    }),
    [h, d, b.draggable, b.droppable, y, p, g, c, f, i],
  );
  return kl.createElement(Il.Provider, { value: x }, t);
}
function Cl(e) {
  let { disabled: t, index: n, node: r, rect: i } = e,
    [a, o] = (0, kl.useState)(null),
    s = (0, kl.useRef)(n);
  return (
    ur(() => {
      if (!t && n !== s.current && r.current) {
        let e = i.current;
        if (e) {
          let t = Ur(r.current, { ignoreTransform: !0 }),
            n = {
              x: e.left - t.left,
              y: e.top - t.top,
              scaleX: e.width / t.width,
              scaleY: e.height / t.height,
            };
          (n.x || n.y) && o(n);
        }
      }
      n !== s.current && (s.current = n);
    }, [t, n, r, i]),
    (0, kl.useEffect)(() => {
      a && o(null);
    }, [a]),
    a
  );
}
function wl(e) {
  let {
      animateLayoutChanges: t = Rl,
      attributes: n,
      disabled: r,
      data: i,
      getNewIndex: a = Ll,
      id: o,
      strategy: s,
      resizeObserverConfig: c,
      transition: l = zl,
    } = e,
    {
      items: u,
      containerId: d,
      activeIndex: f,
      disabled: p,
      disableTransforms: m,
      sortedRects: h,
      overIndex: g,
      useDragOverlay: _,
      strategy: v,
    } = (0, kl.useContext)(Il),
    y = Tl(r, p),
    b = u.indexOf(o),
    x = (0, kl.useMemo)(
      () => ({ sortable: { containerId: d, index: b, items: u }, ...i }),
      [d, i, b, u],
    ),
    S = (0, kl.useMemo)(() => u.slice(u.indexOf(o)), [u, o]),
    {
      rect: C,
      node: w,
      isOver: T,
      setNodeRef: E,
    } = Ui({
      id: o,
      data: x,
      disabled: y.droppable,
      resizeObserverConfig: { updateMeasurementsFor: S, ...c },
    }),
    {
      active: D,
      activatorEvent: O,
      activeNodeRect: k,
      attributes: A,
      setNodeRef: j,
      listeners: M,
      isDragging: N,
      over: P,
      setActivatorNodeRef: F,
      transform: I,
    } = Vi({
      id: o,
      data: x,
      attributes: { ...Hl, ...n },
      disabled: y.draggable,
    }),
    ee = Vn(E, j),
    L = !!D,
    R = L && !m && _l(f) && _l(g),
    te = !_ && N,
    ne = R
      ? ((te && R ? I : null) ??
        (s ?? v)({
          rects: h,
          activeNodeRect: k,
          activeIndex: f,
          overIndex: g,
          index: b,
        }))
      : null,
    re =
      _l(f) && _l(g) ? a({ id: o, items: u, activeIndex: f, overIndex: g }) : b,
    z = D?.id,
    B = (0, kl.useRef)({ activeId: z, items: u, newIndex: re, containerId: d }),
    V = u !== B.current.items,
    ie = t({
      active: D,
      containerId: d,
      isDragging: N,
      isSorting: L,
      id: o,
      index: b,
      items: u,
      newIndex: B.current.newIndex,
      previousItems: B.current.items,
      previousContainerId: B.current.containerId,
      transition: l,
      wasDragging: B.current.activeId != null,
    }),
    ae = Cl({ disabled: !ie, index: b, node: w, rect: C });
  return (
    (0, kl.useEffect)(() => {
      (L && B.current.newIndex !== re && (B.current.newIndex = re),
        d !== B.current.containerId && (B.current.containerId = d),
        u !== B.current.items && (B.current.items = u));
    }, [L, re, d, u]),
    (0, kl.useEffect)(() => {
      if (z === B.current.activeId) return;
      if (z && !B.current.activeId) {
        B.current.activeId = z;
        return;
      }
      let e = setTimeout(() => {
        B.current.activeId = z;
      }, 50);
      return () => clearTimeout(e);
    }, [z]),
    {
      active: D,
      activeIndex: f,
      attributes: A,
      data: x,
      rect: C,
      index: b,
      newIndex: re,
      items: u,
      isOver: T,
      isSorting: L,
      isDragging: N,
      listeners: M,
      node: w,
      overIndex: g,
      over: P,
      setNodeRef: ee,
      setActivatorNodeRef: F,
      setDroppableNodeRef: E,
      setDraggableNodeRef: j,
      transform: ae ?? ne,
      transition: oe(),
    }
  );
  function oe() {
    if (ae || (V && B.current.newIndex === b)) return Vl;
    if (!((te && !ir(O)) || !l) && (L || ie))
      return mr.Transition.toString({ ...l, property: Bl });
  }
}
function Tl(e, t) {
  return typeof e == `boolean`
    ? { draggable: e, droppable: !1 }
    : {
        draggable: e?.draggable ?? t.draggable,
        droppable: e?.droppable ?? t.droppable,
      };
}
function El(e) {
  if (!e) return !1;
  let t = e.data.current;
  return !!(
    t &&
    `sortable` in t &&
    typeof t.sortable == `object` &&
    `containerId` in t.sortable &&
    `items` in t.sortable &&
    `index` in t.sortable
  );
}
function Dl(e, t) {
  return !El(e) || !El(t)
    ? !1
    : e.data.current.sortable.containerId ===
        t.data.current.sortable.containerId;
}
function Ol(e, t) {
  return !El(e) || !El(t) || !Dl(e, t)
    ? !1
    : e.data.current.sortable.index < t.data.current.sortable.index;
}
var kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl = e(() => {
    ((kl = t(W())),
      ro(),
      gr(),
      (Al = { scaleX: 1, scaleY: 1 }),
      (jl = (e) => {
        let {
            rects: t,
            activeNodeRect: n,
            activeIndex: r,
            overIndex: i,
            index: a,
          } = e,
          o = t[r] ?? n;
        if (!o) return null;
        let s = bl(t, a, r);
        if (a === r) {
          let e = t[i];
          return e
            ? {
                x:
                  r < i
                    ? e.left + e.width - (o.left + o.width)
                    : e.left - o.left,
                y: 0,
                ...Al,
              }
            : null;
        }
        return a > r && a <= i
          ? { x: -o.width - s, y: 0, ...Al }
          : a < r && a >= i
            ? { x: o.width + s, y: 0, ...Al }
            : { x: 0, y: 0, ...Al };
      }),
      (Ml = (e) => {
        let { rects: t, activeIndex: n, overIndex: r, index: i } = e,
          a = hl(t, r, n),
          o = t[i],
          s = a[i];
        return !s || !o
          ? null
          : {
              x: s.left - o.left,
              y: s.top - o.top,
              scaleX: s.width / o.width,
              scaleY: s.height / o.height,
            };
      }),
      (Nl = { scaleX: 1, scaleY: 1 }),
      (Pl = (e) => {
        let {
            activeIndex: t,
            activeNodeRect: n,
            index: r,
            rects: i,
            overIndex: a,
          } = e,
          o = i[t] ?? n;
        if (!o) return null;
        if (r === t) {
          let e = i[a];
          return e
            ? {
                x: 0,
                y:
                  t < a ? e.top + e.height - (o.top + o.height) : e.top - o.top,
                ...Nl,
              }
            : null;
        }
        let s = xl(i, r, t);
        return r > t && r <= a
          ? { x: 0, y: -o.height - s, ...Nl }
          : r < t && r >= a
            ? { x: 0, y: o.height + s, ...Nl }
            : { x: 0, y: 0, ...Nl };
      }),
      (Fl = `Sortable`),
      (Il = kl.createContext({
        activeIndex: -1,
        containerId: Fl,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: Ml,
        disabled: { draggable: !1, droppable: !1 },
      })),
      (Ll = (e) => {
        let { id: t, items: n, activeIndex: r, overIndex: i } = e;
        return hl(n, r, i).indexOf(t);
      }),
      (Rl = (e) => {
        let {
          containerId: t,
          isSorting: n,
          wasDragging: r,
          index: i,
          items: a,
          newIndex: o,
          previousItems: s,
          previousContainerId: c,
          transition: l,
        } = e;
        return !l || !r || (s !== a && i === o)
          ? !1
          : n
            ? !0
            : o !== i && t === c;
      }),
      (zl = { duration: 200, easing: `ease` }),
      (Bl = `transform`),
      (Vl = mr.Transition.toString({
        property: Bl,
        duration: 0,
        easing: `linear`,
      })),
      (Hl = { roleDescription: `sortable` }),
      (Ul = [Y.Down, Y.Right, Y.Up, Y.Left]),
      (Wl = (e, t) => {
        let {
          context: {
            active: n,
            collisionRect: r,
            droppableRects: i,
            droppableContainers: a,
            over: o,
            scrollableAncestors: s,
          },
        } = t;
        if (Ul.includes(e.code)) {
          if ((e.preventDefault(), !n || !r)) return;
          let t = [];
          a.getEnabled().forEach((n) => {
            if (!n || (n != null && n.disabled)) return;
            let a = i.get(n.id);
            if (a)
              switch (e.code) {
                case Y.Down:
                  r.top < a.top && t.push(n);
                  break;
                case Y.Up:
                  r.top > a.top && t.push(n);
                  break;
                case Y.Left:
                  r.left > a.left && t.push(n);
                  break;
                case Y.Right:
                  r.left < a.left && t.push(n);
                  break;
              }
          });
          let c = na({
              active: n,
              collisionRect: r,
              droppableRects: i,
              droppableContainers: t,
              pointerCoordinates: null,
            }),
            l = Pr(c, `id`);
          if ((l === o?.id && c.length > 1 && (l = c[1].id), l != null)) {
            let e = a.get(n.id),
              t = a.get(l),
              o = t ? i.get(t.id) : null,
              c = t?.node.current;
            if (c && o && e && t) {
              let n = Jr(c).some((e, t) => s[t] !== e),
                i = Dl(e, t),
                a = Ol(e, t),
                l =
                  n || !i
                    ? { x: 0, y: 0 }
                    : {
                        x: a ? r.width - o.width : 0,
                        y: a ? r.height - o.height : 0,
                      },
                u = { x: o.left, y: o.top };
              return l.x && l.y ? u : pr(u, l);
            }
          }
        }
      }));
  });
function Kl(e, t) {
  let n = e.get(t.sourceController.tabIds$),
    r = n.indexOf(t.tabId);
  r !== -1 &&
    (r !== t.sourceIndex &&
      e.set(t.sourceController.tabIds$, hl(n, r, t.sourceIndex)),
    t.wasDraggedTabActive && t.sourceController.activateTab(e, t.tabId));
}
function ql(e, t, n, r) {
  let i = e.get(t.tabIds$),
    a = i.indexOf(n),
    o = i.indexOf(r);
  a === -1 || o === -1 || a === o || e.set(t.tabIds$, hl(i, a, o));
}
function Jl(e, t, n, r) {
  return e.previewController === t &&
    e.overTabId === n &&
    e.insertionPlacement === r
    ? e
    : { ...e, insertionPlacement: r, overTabId: n, previewController: t };
}
function Yl(e, t, n) {
  return e != null && e >= t + n / 2 ? `after` : `before`;
}
function Xl(e, t, n) {
  if (n == null || n.previewController === n.sourceController) return e;
  if (t === n.sourceController)
    return e.filter((e) => e.tabId !== n.draggedTab.tabId);
  if (t !== n.previewController) return e;
  let r = jt(
      e.map((e) => e.tabId),
      n.overTabId,
      n.insertionPlacement,
    ),
    i = [...e];
  return (i.splice(r, 0, n.draggedTab), i);
}
var Zl = e(() => {
    (Gl(), ct());
  }),
  Ql,
  $l,
  eu = e(() => {
    (t(W()),
      (Ql = q()),
      ($l = (e) =>
        (0, Ql.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `currentColor`,
          viewBox: `0 0 20 20`,
          ...e,
          children: (0, Ql.jsx)(`path`, {
            d: `m7.916 16.29.132.026.235.068a6.587 6.587 0 0 0 3.66-.067.666.666 0 0 1 .393 1.27 7.918 7.918 0 0 1-4.398.082l-.282-.082-.124-.053a.665.665 0 0 1 .384-1.244Zm-5.152-5.314a.666.666 0 0 1 .753.373l.042.128.058.235c.146.546.366 1.084.663 1.598l.131.217a6.6 6.6 0 0 0 .922 1.156l.175.168.089.102a.665.665 0 0 1-.887.955l-.108-.082-.209-.201a7.926 7.926 0 0 1-1.108-1.39l-.156-.26a7.94 7.94 0 0 1-.796-1.92l-.07-.282-.017-.134a.666.666 0 0 1 .518-.663Zm14.462 0a.666.666 0 0 1 .5.797l-.07.285a7.918 7.918 0 0 1-2.27 3.769l-.107.081a.666.666 0 0 1-.796-1.058l.182-.175a6.596 6.596 0 0 0 1.764-3.198l.043-.128a.666.666 0 0 1 .753-.373ZM4.71 4.114a.666.666 0 0 1 .797 1.058l-.182.174a6.596 6.596 0 0 0-1.764 3.199.665.665 0 0 1-1.296-.296 7.922 7.922 0 0 1 2.338-4.054l.108-.081Zm9.737.116a.666.666 0 0 1 .833-.116l.108.081.209.202a7.94 7.94 0 0 1 1.264 1.65l.148.265a7.88 7.88 0 0 1 .718 1.937.665.665 0 0 1-1.296.296 6.587 6.587 0 0 0-.599-1.612l-.122-.221a6.613 6.613 0 0 0-1.053-1.373l-.175-.168-.088-.102a.666.666 0 0 1 .053-.839ZM7.654 2.433a7.917 7.917 0 0 1 4.398-.08l.282.082.124.052a.665.665 0 0 1-.384 1.245l-.132-.026-.235-.068a6.587 6.587 0 0 0-3.66.066.665.665 0 0 1-.393-1.27Z`,
          }),
        })));
  }),
  tu,
  nu = e(() => {
    tu =
      (...e) =>
      (t) => {
        if (t == null) {
          e.forEach((e) => {
            if (typeof e == `function`) e(null);
            else if (e) {
              let t = e;
              t.current = null;
            }
          });
          return;
        }
        let n = [];
        if (
          (e.forEach((e) => {
            if (typeof e == `function`) {
              let r = e(t);
              typeof r == `function` ? n.push(r) : n.push(() => e(null));
            } else if (e) {
              let r = e;
              ((r.current = t),
                n.push(() => {
                  r.current = null;
                }));
            }
          }),
          n.length !== 0)
        )
          return () => {
            n.forEach((e) => e());
          };
      };
  }),
  ru,
  iu = e(() => {
    (Ee(), (ru = { duration: 150 / 1e3, ease: ye }));
  });
function au(e, t, n) {
  let r =
    typeof n.contextMenuItems == `function`
      ? n.contextMenuItems(e)
      : (n.contextMenuItems ?? []);
  return Array.isArray(r) ? ou(e, t, n, r) : r.then((r) => ou(e, t, n, r));
}
function ou(e, t, n, r) {
  let i = [...r];
  if (!n.isClosable) return i;
  let a = e.get(t.tabs$),
    o = a.findIndex((e) => e.tabId === n.tabId),
    s = a.some((e) => e.tabId !== n.tabId && e.isClosable),
    c = o !== -1 && a.slice(o + 1).some((e) => e.isClosable);
  return (
    i.length > 0 && i.push({ id: `close-tab-separator`, type: `separator` }),
    i.push({
      id: `close-tab`,
      message: Dt({
        id: `codex.tabs.contextMenu.close`,
        defaultMessage: `Close`,
        description: `Context menu action for closing a tab`,
      }),
      onSelect: () => t.closeTab(e, n.tabId),
    }),
    e.get(st)
      ? (i.push({
          enabled: s,
          id: `close-other-tabs`,
          message: Dt({
            id: `codex.tabs.contextMenu.closeOtherTabs`,
            defaultMessage: `Close other tabs`,
            description: `Context menu action for closing all other tabs besides the current tab`,
          }),
          onSelect: () => t.closeOtherTabs(e, n.tabId),
        }),
        i.push({
          enabled: c,
          id: `close-tabs-to-the-right`,
          message: Dt({
            id: `codex.tabs.contextMenu.closeTabsToTheRight`,
            defaultMessage: `Close tabs to the right`,
            description: `Context menu action for closing the tabs to the right of the current tab`,
          }),
          onSelect: () => t.closeTabsToRight(e, n.tabId),
        }),
        i)
      : i
  );
}
var su = e(() => {
  (Jt(), Xt());
});
function cu(e) {
  let t = (0, fu.c)(86),
    n,
    r,
    i,
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
    h,
    g,
    _,
    v,
    y,
    x,
    S;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]),
      (h = t[14]),
      (g = t[15]),
      (_ = t[16]),
      (v = t[17]),
      (y = t[18]),
      (x = t[19]),
      (S = t[20]))
    : (({
        activatorRef: n,
        disabled: d,
        tooltip: x,
        highlightedIcon: i,
        id: o,
        icon: a,
        trailingContent: S,
        title: y,
        isDragging: f,
        isActive: p,
        isClosable: m,
        isHighlighted: h,
        isLabel: g,
        isPreview: _,
        isSuspended: v,
        onActivate: s,
        onClose: c,
        onPointerDown: l,
        style: u,
        ...r
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y),
      (t[19] = x),
      (t[20] = S));
  let C = d === void 0 ? !1 : d,
    w = f === void 0 ? !1 : f,
    T = p === void 0 ? !1 : p,
    E = m === void 0 ? !1 : m,
    D = h === void 0 ? !1 : h,
    O = g === void 0 ? !1 : g,
    k = _ === void 0 ? !1 : _,
    A = v === void 0 ? !1 : v,
    j = Mn(),
    [M, N] = (0, pu.useState)(!1),
    P = !O,
    F = D && i != null,
    I;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e, t) => {
        N(t.scrollWidth > t.clientWidth);
      }),
      (t[21] = I))
    : (I = t[21]);
  let ee = mo(I),
    L = k && `italic`,
    R;
  t[22] === L
    ? (R = t[23])
    : ((R = H(`block w-full min-w-0 whitespace-nowrap text-start`, L)),
      (t[22] = L),
      (t[23] = R));
  let te;
  t[24] !== R || t[25] !== ee || t[26] !== y
    ? ((te = (0, mu.jsx)(`span`, { ref: ee, className: R, children: y }, y)),
      (t[24] = R),
      (t[25] = ee),
      (t[26] = y),
      (t[27] = te))
    : (te = t[27]);
  let ne = te,
    re;
  t[28] === u
    ? (re = t[29])
    : ((re = { ...u, "--app-shell-tab-background": hu }),
      (t[28] = u),
      (t[29] = re));
  let z = re,
    B;
  t[30] === l
    ? (B = t[31])
    : ((B = (e) => {
        if (e.button !== 0 || e.ctrlKey) {
          e.stopPropagation();
          return;
        }
        l?.(e);
      }),
      (t[30] = l),
      (t[31] = B));
  let V = P && `group-hover/tab:bg-[var(--app-shell-tab-background)]`,
    ie = P && (T || w) && `bg-[var(--app-shell-tab-background)]`,
    ae;
  t[32] !== V || t[33] !== ie
    ? ((ae = H(`pointer-events-none absolute inset-0 z-0 rounded-md`, V, ie)),
      (t[32] = V),
      (t[33] = ie),
      (t[34] = ae))
    : (ae = t[34]);
  let oe;
  t[35] === ae
    ? (oe = t[36])
    : ((oe = (0, mu.jsx)(`div`, { className: ae })),
      (t[35] = ae),
      (t[36] = oe));
  let se = E && S != null && `pe-5`,
    U =
      E && S == null && `group-focus-within/tab:pe-3.5 group-hover/tab:pe-3.5`,
    ce = T && `text-token-text-primary`,
    W = !T && `text-token-text-secondary`,
    le;
  t[37] !== se || t[38] !== U || t[39] !== ce || t[40] !== W
    ? ((le = H(
        `no-drag relative flex flex-1 items-center gap-2 z-10 text-sm min-w-0`,
        se,
        U,
        ce,
        W,
      )),
      (t[37] = se),
      (t[38] = U),
      (t[39] = ce),
      (t[40] = W),
      (t[41] = le))
    : (le = t[41]);
  let ue;
  t[42] !== E || t[43] !== s || t[44] !== c
    ? ((ue = (e) => {
        if (E && e.button === 1) {
          (e.preventDefault(), e.stopPropagation(), c?.());
          return;
        }
        s?.();
      }),
      (t[42] = E),
      (t[43] = s),
      (t[44] = c),
      (t[45] = ue))
    : (ue = t[45]);
  let de;
  t[46] !== i || t[47] !== a || t[48] !== A || t[49] !== F
    ? ((de =
        (a != null || F) &&
        (0, mu.jsxs)(`span`, {
          "aria-hidden": `true`,
          className: `icon-xs relative flex shrink-0 items-center justify-center overflow-visible`,
          children: [
            a != null &&
              (0, mu.jsx)(`span`, {
                className: H(
                  `flex size-full items-center justify-center`,
                  A && `scale-[0.625]`,
                  A && !F && `opacity-70`,
                  F && `opacity-30`,
                ),
                children: a,
              }),
            A &&
              a != null &&
              (0, mu.jsx)($l, {
                className: `pointer-events-none absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-token-text-link-foreground opacity-80`,
              }),
            F &&
              (0, mu.jsx)(`span`, {
                className: `pointer-events-none absolute inset-0 z-10 flex size-full items-center justify-center`,
                children: i,
              }),
          ],
        })),
      (t[46] = i),
      (t[47] = a),
      (t[48] = A),
      (t[49] = F),
      (t[50] = de))
    : (de = t[50]);
  let G;
  t[51] !== w || t[52] !== ne || t[53] !== x
    ? ((G = x
        ? (0, mu.jsx)(b, {
            tooltipContent: x,
            disabled: w,
            delayOpen: !0,
            side: `bottom`,
            tooltipMaxWidth: gu,
            children: ne,
          })
        : ne),
      (t[51] = w),
      (t[52] = ne),
      (t[53] = x),
      (t[54] = G))
    : (G = t[54]);
  let fe;
  t[55] !== T || t[56] !== M || t[57] !== P
    ? ((fe =
        M &&
        (0, mu.jsx)(`span`, {
          className: H(
            `pointer-events-none absolute inset-y-0 end-0 z-20 w-7 bg-linear-to-r from-transparent to-[85%]`,
            P && T
              ? `to-[var(--app-shell-tab-background)]`
              : `to-token-main-surface-primary`,
            P && !T && `group-hover/tab:to-[var(--app-shell-tab-background)]`,
          ),
        })),
      (t[55] = T),
      (t[56] = M),
      (t[57] = P),
      (t[58] = fe))
    : (fe = t[58]);
  let pe;
  t[59] !== G || t[60] !== fe
    ? ((pe = (0, mu.jsxs)(`span`, {
        className: `relative min-w-0 flex-1 overflow-hidden`,
        children: [G, fe],
      })),
      (t[59] = G),
      (t[60] = fe),
      (t[61] = pe))
    : (pe = t[61]);
  let he;
  t[62] === S
    ? (he = t[63])
    : ((he =
        S != null &&
        (0, mu.jsx)(`span`, {
          className: `-ms-1.5 flex shrink-0 items-center`,
          children: S,
        })),
      (t[62] = S),
      (t[63] = he));
  let ge;
  t[64] !== C ||
  t[65] !== T ||
  t[66] !== le ||
  t[67] !== ue ||
  t[68] !== de ||
  t[69] !== pe ||
  t[70] !== he
    ? ((ge = (0, mu.jsxs)(`button`, {
        disabled: C,
        type: `button`,
        role: `tab`,
        "aria-selected": T,
        className: le,
        onMouseDown: ue,
        children: [de, pe, he],
      })),
      (t[64] = C),
      (t[65] = T),
      (t[66] = le),
      (t[67] = ue),
      (t[68] = de),
      (t[69] = pe),
      (t[70] = he),
      (t[71] = ge))
    : (ge = t[71]);
  let _e;
  t[72] !== j || t[73] !== E || t[74] !== c || t[75] !== y
    ? ((_e =
        E &&
        (0, mu.jsx)(me, {
          "data-app-shell-tab-close-button": !0,
          "aria-label": j.formatMessage(
            {
              id: `codex.tabs.closeNamed`,
              defaultMessage: `Close {title} tab`,
              description: `Accessible label for closing a named tab`,
            },
            { title: y },
          ),
          className: H(
            `absolute end-1 top-1/2 z-30 -translate-y-1/2`,
            `pointer-events-none opacity-0 group-focus-within/tab:pointer-events-auto group-focus-within/tab:opacity-100 group-hover/tab:pointer-events-auto group-hover/tab:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100`,
          ),
          color: `ghost`,
          size: `iconMd`,
          onClick: c,
          onMouseDown: uu,
          onPointerDown: lu,
          children: (0, mu.jsx)(Fn, { "aria-hidden": !0 }),
        })),
      (t[72] = j),
      (t[73] = E),
      (t[74] = c),
      (t[75] = y),
      (t[76] = _e))
    : (_e = t[76]);
  let ve;
  return (
    t[77] !== n ||
    t[78] !== r ||
    t[79] !== o ||
    t[80] !== z ||
    t[81] !== B ||
    t[82] !== oe ||
    t[83] !== ge ||
    t[84] !== _e
      ? ((ve = (0, mu.jsxs)(`div`, {
          ref: n,
          "data-tab-id": o,
          className: `group/tab relative flex h-7 w-full max-w-39 shrink-0 items-center overflow-hidden rounded-lg bg-token-main-surface-primary px-2 py-1`,
          style: z,
          ...r,
          onPointerDown: B,
          children: [oe, ge, _e],
        })),
        (t[77] = n),
        (t[78] = r),
        (t[79] = o),
        (t[80] = z),
        (t[81] = B),
        (t[82] = oe),
        (t[83] = ge),
        (t[84] = _e),
        (t[85] = ve))
      : (ve = t[85]),
    ve
  );
}
function lu(e) {
  e.stopPropagation();
}
function uu(e) {
  (e.preventDefault(), e.stopPropagation());
}
function du(e) {
  let t = (0, fu.c)(79),
    {
      controller: n,
      disabled: r,
      isActive: i,
      lockedWidth: a,
      separatorIndex: o,
      showTrailingSeparator: s,
      tab: c,
    } = e,
    l = Pe(f),
    u = (0, pu.useContext)(pl),
    d = (0, pu.useRef)(null),
    p = Pn(),
    m = !Rn() && u?.dragState == null,
    {
      tabId: h,
      title: g,
      icon: _,
      isClosable: v,
      isLabel: y,
      highlightedIcon: b,
      isHighlighted: x,
      isSuspended: S,
      trailingContent: C,
      isPreview: w,
      tooltip: T,
    } = c,
    E;
  t[0] !== n || t[1] !== h
    ? ((E = { controller: n, kind: `app-shell-tab`, tabId: h }),
      (t[0] = n),
      (t[1] = h),
      (t[2] = E))
    : (E = t[2]);
  let D = r || y,
    O;
  t[3] !== E || t[4] !== D || t[5] !== c.dndId
    ? ((O = { data: E, disabled: D, id: c.dndId, strategy: jl }),
      (t[3] = E),
      (t[4] = D),
      (t[5] = c.dndId),
      (t[6] = O))
    : (O = t[6]);
  let {
      attributes: k,
      isDragging: A,
      listeners: j,
      setActivatorNodeRef: M,
      setNodeRef: N,
      transform: P,
      transition: F,
    } = wl(O),
    I = r || !p,
    ee = n.panelId,
    L;
  t[7] === N ? (L = t[8]) : ((L = tu(d, N)), (t[7] = N), (t[8] = L));
  let R = m ? _u : !1,
    te = m ? _u : void 0,
    ne;
  t[9] !== i || t[10] !== p || t[11] !== m
    ? ((ne = () => {
        !m ||
          !p ||
          !i ||
          d.current?.scrollIntoView?.({
            behavior: `smooth`,
            block: `nearest`,
            inline: `nearest`,
          });
      }),
      (t[9] = i),
      (t[10] = p),
      (t[11] = m),
      (t[12] = ne))
    : (ne = t[12]);
  let re = r && `opacity-50`,
    z = A && `z-10 cursor-grab opacity-0`,
    B;
  t[13] !== re || t[14] !== z
    ? ((B = H(
        `my-auto relative flex shrink-0 items-center gap-0.5 overflow-hidden pe-(--app-shell-tab-separator-gutter) contain-content`,
        re,
        z,
      )),
      (t[13] = re),
      (t[14] = z),
      (t[15] = B))
    : (B = t[15]);
  let ie = a ?? 0,
    ae = a == null ? 1 : 0,
    oe;
  t[16] === P
    ? (oe = t[17])
    : ((oe = mr.Translate.toString(P)), (t[16] = P), (t[17] = oe));
  let se;
  t[18] !== F || t[19] !== ie || t[20] !== ae || t[21] !== oe
    ? ((se = { flexBasis: ie, flexGrow: ae, transform: oe, transition: F }),
      (t[18] = F),
      (t[19] = ie),
      (t[20] = ae),
      (t[21] = oe),
      (t[22] = se))
    : (se = t[22]);
  let U;
  t[23] !== n || t[24] !== l || t[25] !== c
    ? ((U = () => au(l, n, c)),
      (t[23] = n),
      (t[24] = l),
      (t[25] = c),
      (t[26] = U))
    : (U = t[26]);
  let ce, W;
  t[27] !== n || t[28] !== l || t[29] !== h
    ? ((ce = () => n.activateTab(l, h)),
      (W = () => n.closeTab(l, h)),
      (t[27] = n),
      (t[28] = l),
      (t[29] = h),
      (t[30] = ce),
      (t[31] = W))
    : ((ce = t[30]), (W = t[31]));
  let le;
  t[32] !== n || t[33] !== w || t[34] !== l || t[35] !== h
    ? ((le = () => {
        w && n.pinTab(l, h);
      }),
      (t[32] = n),
      (t[33] = w),
      (t[34] = l),
      (t[35] = h),
      (t[36] = le))
    : (le = t[36]);
  let ue;
  t[37] !== k ||
  t[38] !== r ||
  t[39] !== b ||
  t[40] !== _ ||
  t[41] !== i ||
  t[42] !== v ||
  t[43] !== A ||
  t[44] !== x ||
  t[45] !== y ||
  t[46] !== w ||
  t[47] !== S ||
  t[48] !== j ||
  t[49] !== M ||
  t[50] !== ce ||
  t[51] !== W ||
  t[52] !== le ||
  t[53] !== h ||
  t[54] !== g ||
  t[55] !== T ||
  t[56] !== C
    ? ((ue = (0, mu.jsx)(cu, {
        activatorRef: M,
        disabled: r,
        id: h,
        highlightedIcon: b,
        icon: _,
        isActive: i,
        isClosable: v,
        isDragging: A,
        isHighlighted: x,
        isLabel: y,
        isPreview: w,
        isSuspended: S,
        onActivate: ce,
        onClose: W,
        trailingContent: C,
        title: g,
        tooltip: T,
        ...j,
        ...k,
        onDoubleClick: le,
      })),
      (t[37] = k),
      (t[38] = r),
      (t[39] = b),
      (t[40] = _),
      (t[41] = i),
      (t[42] = v),
      (t[43] = A),
      (t[44] = x),
      (t[45] = y),
      (t[46] = w),
      (t[47] = S),
      (t[48] = j),
      (t[49] = M),
      (t[50] = ce),
      (t[51] = W),
      (t[52] = le),
      (t[53] = h),
      (t[54] = g),
      (t[55] = T),
      (t[56] = C),
      (t[57] = ue))
    : (ue = t[57]);
  let de;
  t[58] !== U || t[59] !== ue
    ? ((de = (0, mu.jsx)(Ie, { getItems: U, children: ue })),
      (t[58] = U),
      (t[59] = ue),
      (t[60] = de))
    : (de = t[60]);
  let G = s ? `opacity-100` : `opacity-0`,
    fe;
  t[61] === G
    ? (fe = t[62])
    : ((fe = H(
        `h-3 w-px shrink-0 end-0 absolute bg-token-border transition-opacity duration-basic`,
        G,
      )),
      (t[61] = G),
      (t[62] = fe));
  let pe;
  t[63] !== o || t[64] !== fe || t[65] !== h
    ? ((pe = (0, mu.jsx)(`div`, {
        "aria-hidden": !0,
        "data-app-shell-tab-separator": h,
        "data-app-shell-tab-separator-index": o,
        className: fe,
      })),
      (t[63] = o),
      (t[64] = fe),
      (t[65] = h),
      (t[66] = pe))
    : (pe = t[66]);
  let me;
  return (
    t[67] !== n.panelId ||
    t[68] !== B ||
    t[69] !== se ||
    t[70] !== de ||
    t[71] !== pe ||
    t[72] !== I ||
    t[73] !== L ||
    t[74] !== R ||
    t[75] !== te ||
    t[76] !== ne ||
    t[77] !== h
      ? ((me = (0, mu.jsxs)(V.div, {
          inert: I,
          "data-app-shell-tab-controller": ee,
          "data-tab-id": h,
          ref: L,
          initial: R,
          animate: vu,
          exit: te,
          transition: ru,
          onAnimationComplete: ne,
          className: B,
          style: se,
          children: [de, pe],
        })),
        (t[67] = n.panelId),
        (t[68] = B),
        (t[69] = se),
        (t[70] = de),
        (t[71] = pe),
        (t[72] = I),
        (t[73] = L),
        (t[74] = R),
        (t[75] = te),
        (t[76] = ne),
        (t[77] = h),
        (t[78] = me))
      : (me = t[78]),
    me
  );
}
var fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu = e(() => {
    ((fu = z()),
      Gl(),
      gr(),
      cn(),
      y(),
      it(),
      (pu = t(W(), 1)),
      Jt(),
      ve(),
      Ht(),
      Ne(),
      eu(),
      m(),
      yo(),
      Ye(),
      nu(),
      C(),
      iu(),
      su(),
      ml(),
      (mu = q()),
      (hu = `color-mix(in srgb, var(--color-token-foreground, var(--color-text-foreground)) 5%, var(--color-token-main-surface-primary))`),
      (gu = `min(32rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`),
      (_u = {
        "--app-shell-tab-separator-gutter": `0px`,
        maxWidth: `0px`,
        minWidth: `0px`,
      }),
      (vu = {
        "--app-shell-tab-separator-gutter": `4px`,
        maxWidth: `160px`,
        minWidth: `90px`,
      }));
  });
function bu(e) {
  let t = (0, wu.c)(118),
    {
      activeTabId: n,
      after: r,
      afterSticky: i,
      before: a,
      controller: o,
      height: s,
      tabs: c,
      workspaceReady: l,
    } = e,
    [u, d] = (0, Tu.useState)(!1),
    [f, p] = (0, Tu.useState)(!1),
    [m, h] = (0, Tu.useState)(null),
    [g, _] = (0, Tu.useState)(c.length),
    [v, y] = go(),
    [b, x] = (0, Tu.useState)(null),
    S = i == null ? 0 : (y ?? 0),
    C = `app-shell-tab-strip:${o.panelId}`,
    w;
  t[0] === o
    ? (w = t[1])
    : ((w = { controller: o, kind: `app-shell-tab-strip` }),
      (t[0] = o),
      (t[1] = w));
  let T;
  t[2] !== C || t[3] !== w
    ? ((T = { id: C, data: w }), (t[2] = C), (t[3] = w), (t[4] = T))
    : (T = t[4]);
  let { setNodeRef: E } = Ui(T),
    D = (0, Tu.useContext)(pl),
    O;
  t[5] === c ? (O = t[6]) : ((O = c.map(xu)), (t[5] = c), (t[6] = O));
  let k = O;
  c.length > g && _(c.length);
  let A = Math.max(c.length, g),
    j = Math.max(0, A - 1) * 3,
    M = A * 90 + j,
    N = A * 160 + j,
    P = S === 0 ? `0px` : `0px -${S}px 0px 0px`,
    F = D?.dragState != null,
    I,
    ee,
    L,
    R,
    te,
    ne,
    re,
    z,
    B,
    V,
    ie,
    ae,
    oe,
    se,
    U,
    ce,
    W,
    le,
    ue,
    de;
  if (
    t[7] !== n ||
    t[8] !== a ||
    t[9] !== o ||
    t[10] !== s ||
    t[11] !== F ||
    t[12] !== u ||
    t[13] !== m ||
    t[14] !== N ||
    t[15] !== M ||
    t[16] !== b ||
    t[17] !== E ||
    t[18] !== k ||
    t[19] !== S ||
    t[20] !== A ||
    t[21] !== c ||
    t[22] !== j ||
    t[23] !== l
  ) {
    let e;
    t[44] === n
      ? (e = t[45])
      : ((e = (e) => e.tabId === n), (t[44] = n), (t[45] = e));
    let r = c.findIndex(e),
      i = m == null ? `clamp(${M}px, calc(100% - ${S}px), ${N}px)` : A * m + j,
      f = s === `toolbar` && `h-toolbar`,
      p = s === `pane` && `h-toolbar-pane`;
    (t[46] !== f || t[47] !== p
      ? ((se = H(
          f,
          p,
          `isolate flex min-w-0 shrink-0 select-none items-center bg-token-main-surface-primary px-2 [contain:layout_paint]`,
        )),
        (t[46] = f),
        (t[47] = p),
        (t[48] = se))
      : (se = t[48]),
      t[49] === a
        ? (U = t[50])
        : ((U =
            a != null &&
            (0, Eu.jsx)(`div`, {
              className: `my-auto flex shrink-0 items-center`,
              role: `presentation`,
              children: a,
            })),
          (t[49] = a),
          (t[50] = U)),
      t[51] === E
        ? (re = t[52])
        : ((re = (e) => {
            (x(e), E(e));
          }),
          (t[51] = E),
          (t[52] = re)),
      (z = o.panelId),
      (B = `hide-scrollbar relative isolate flex h-full min-w-0 flex-1 scroll-px-1 items-center overflow-x-auto overflow-y-hidden [contain:layout_paint]`),
      t[53] === S
        ? (V = t[54])
        : ((V = { scrollPaddingInlineEnd: S }), (t[53] = S), (t[54] = V)),
      t[55] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((ie = () => h(null)), (t[55] = ie))
        : (ie = t[55]));
    let g = u ? `opacity-0` : `opacity-100`,
      v;
    (t[56] === g
      ? (v = t[57])
      : ((v = H(
          `sticky start-0 z-10 h-full w-0 after:absolute transition-opacity after:pointer-events-none duration-basic after:start-0 after:top-0 after:bottom-0 after:w-10 after:bg-linear-to-l after:from-transparent after:to-token-main-surface-primary after:content-['']`,
          g,
        )),
        (t[56] = g),
        (t[57] = v)),
      t[58] === v
        ? (ae = t[59])
        : ((ae = (0, Eu.jsx)(`div`, { "aria-hidden": !0, className: v })),
          (t[58] = v),
          (t[59] = ae)),
      t[60] === b
        ? (oe = t[61])
        : ((oe = (0, Eu.jsx)(Su, { onVisibleChange: d, root: b })),
          (t[60] = b),
          (t[61] = oe)),
      (ee = Sl),
      (te = k),
      (ne = jl),
      (ue = `tablist`));
    let y = F ? `z-20` : `z-0`;
    (t[62] === y
      ? (de = t[63])
      : ((de = H(`relative flex shrink-0`, y)), (t[62] = y), (t[63] = de)),
      t[64] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = (e) => {
            if (
              !(e.target instanceof Element) ||
              (e.button !== 1 &&
                e.target.closest(`[data-app-shell-tab-close-button]`) == null)
            )
              return;
            let t = e.target.closest(`[data-app-shell-tab-controller]`);
            t != null && h(t.offsetWidth);
          }),
          (t[64] = L))
        : (L = t[64]),
      t[65] === i
        ? (R = t[66])
        : ((R = { gap: 3, width: i }), (t[65] = i), (t[66] = R)),
      (I = Ae),
      (ce = !1),
      t[67] === c.length
        ? (W = t[68])
        : ((W = () => {
            _(c.length);
          }),
          (t[67] = c.length),
          (t[68] = W)),
      (le = c.map((e, t) => {
        let i = n === e.tabId,
          a = t < c.length - 1 && !i && !Cu(t, r);
        return (0, Eu.jsx)(
          du,
          {
            controller: o,
            disabled: !l && e.requiresWorkspaceReady !== !1,
            isActive: i,
            lockedWidth: m,
            separatorIndex: t,
            showTrailingSeparator: a,
            tab: e,
          },
          e.dndId,
        );
      })),
      (t[7] = n),
      (t[8] = a),
      (t[9] = o),
      (t[10] = s),
      (t[11] = F),
      (t[12] = u),
      (t[13] = m),
      (t[14] = N),
      (t[15] = M),
      (t[16] = b),
      (t[17] = E),
      (t[18] = k),
      (t[19] = S),
      (t[20] = A),
      (t[21] = c),
      (t[22] = j),
      (t[23] = l),
      (t[24] = I),
      (t[25] = ee),
      (t[26] = L),
      (t[27] = R),
      (t[28] = te),
      (t[29] = ne),
      (t[30] = re),
      (t[31] = z),
      (t[32] = B),
      (t[33] = V),
      (t[34] = ie),
      (t[35] = ae),
      (t[36] = oe),
      (t[37] = se),
      (t[38] = U),
      (t[39] = ce),
      (t[40] = W),
      (t[41] = le),
      (t[42] = ue),
      (t[43] = de));
  } else
    ((I = t[24]),
      (ee = t[25]),
      (L = t[26]),
      (R = t[27]),
      (te = t[28]),
      (ne = t[29]),
      (re = t[30]),
      (z = t[31]),
      (B = t[32]),
      (V = t[33]),
      (ie = t[34]),
      (ae = t[35]),
      (oe = t[36]),
      (se = t[37]),
      (U = t[38]),
      (ce = t[39]),
      (W = t[40]),
      (le = t[41]),
      (ue = t[42]),
      (de = t[43]));
  let G;
  t[69] !== I || t[70] !== ce || t[71] !== W || t[72] !== le
    ? ((G = (0, Eu.jsx)(I, { initial: ce, onExitComplete: W, children: le })),
      (t[69] = I),
      (t[70] = ce),
      (t[71] = W),
      (t[72] = le),
      (t[73] = G))
    : (G = t[73]);
  let fe;
  t[74] !== L || t[75] !== R || t[76] !== G || t[77] !== ue || t[78] !== de
    ? ((fe = (0, Eu.jsx)(`div`, {
        role: ue,
        className: de,
        onMouseDownCapture: L,
        style: R,
        children: G,
      })),
      (t[74] = L),
      (t[75] = R),
      (t[76] = G),
      (t[77] = ue),
      (t[78] = de),
      (t[79] = fe))
    : (fe = t[79]);
  let pe;
  t[80] !== ee || t[81] !== te || t[82] !== ne || t[83] !== fe
    ? ((pe = (0, Eu.jsx)(ee, { items: te, strategy: ne, children: fe })),
      (t[80] = ee),
      (t[81] = te),
      (t[82] = ne),
      (t[83] = fe),
      (t[84] = pe))
    : (pe = t[84]);
  let me;
  t[85] !== P || t[86] !== b
    ? ((me = (0, Eu.jsx)(Su, { onVisibleChange: p, root: b, rootMargin: P })),
      (t[85] = P),
      (t[86] = b),
      (t[87] = me))
    : (me = t[87]);
  let he;
  t[88] === S
    ? (he = t[89])
    : ((he = { insetInlineEnd: S }), (t[88] = S), (t[89] = he));
  let ge = f ? `opacity-0` : `opacity-100`,
    _e;
  t[90] === ge
    ? (_e = t[91])
    : ((_e = H(
        `sticky z-10 h-full w-0 after:absolute transition-opacity duration-basic after:pointer-events-none after:end-0 after:inset-y-0 after:w-10 after:bg-linear-to-r after:from-transparent after:to-token-main-surface-primary after:content-['']`,
        ge,
      )),
      (t[90] = ge),
      (t[91] = _e));
  let ve;
  t[92] !== he || t[93] !== _e
    ? ((ve = (0, Eu.jsx)(`div`, {
        "aria-hidden": !0,
        style: he,
        className: _e,
      })),
      (t[92] = he),
      (t[93] = _e),
      (t[94] = ve))
    : (ve = t[94]);
  let ye;
  t[95] !== i || t[96] !== v || t[97] !== F
    ? ((ye =
        i != null &&
        (0, Eu.jsx)(`div`, {
          ref: v,
          className: H(
            `sticky end-0 shrink-0 bg-token-main-surface-primary`,
            F ? `pointer-events-none z-0` : `z-10`,
          ),
          children: i,
        })),
      (t[95] = i),
      (t[96] = v),
      (t[97] = F),
      (t[98] = ye))
    : (ye = t[98]);
  let be;
  t[99] !== re ||
  t[100] !== z ||
  t[101] !== B ||
  t[102] !== V ||
  t[103] !== ie ||
  t[104] !== ae ||
  t[105] !== oe ||
  t[106] !== pe ||
  t[107] !== me ||
  t[108] !== ve ||
  t[109] !== ye
    ? ((be = (0, Eu.jsxs)(`div`, {
        ref: re,
        "data-app-shell-tab-strip-controller": z,
        className: B,
        style: V,
        onPointerLeave: ie,
        children: [ae, oe, pe, me, ve, ye],
      })),
      (t[99] = re),
      (t[100] = z),
      (t[101] = B),
      (t[102] = V),
      (t[103] = ie),
      (t[104] = ae),
      (t[105] = oe),
      (t[106] = pe),
      (t[107] = me),
      (t[108] = ve),
      (t[109] = ye),
      (t[110] = be))
    : (be = t[110]);
  let xe;
  t[111] === r
    ? (xe = t[112])
    : ((xe =
        r != null &&
        (0, Eu.jsx)(`div`, {
          className: `my-auto flex shrink-0 items-center`,
          role: `presentation`,
          children: r,
        })),
      (t[111] = r),
      (t[112] = xe));
  let Se;
  return (
    t[113] !== se || t[114] !== U || t[115] !== be || t[116] !== xe
      ? ((Se = (0, Eu.jsxs)(`div`, { className: se, children: [U, be, xe] })),
        (t[113] = se),
        (t[114] = U),
        (t[115] = be),
        (t[116] = xe),
        (t[117] = Se))
      : (Se = t[117]),
    Se
  );
}
function xu(e) {
  return e.dndId;
}
function Su(e) {
  let t = (0, wu.c)(7),
    { onVisibleChange: n, root: r, rootMargin: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = (e) => {
        if (e == null) return;
        let t = new IntersectionObserver(
          (e) => {
            for (let t of e) n(t.isIntersecting);
          },
          { root: r, rootMargin: i },
        );
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Eu.jsx)(`span`, { "aria-hidden": !0, ref: a }, i)),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Cu(e, t) {
  return t !== -1 && (e === t || e === t - 1);
}
var wu,
  Tu,
  Eu,
  Du = e(() => {
    ((wu = z()),
      ro(),
      Gl(),
      cn(),
      y(),
      (Tu = t(W(), 1)),
      yo(),
      yu(),
      iu(),
      ml(),
      (Eu = q()));
  });
function Ou(e) {
  let t = (0, ju.c)(23),
    {
      afterList: n,
      afterListSticky: r,
      beforeList: i,
      emptyState: a,
      headerHeight: o,
      controller: s,
    } = e,
    c = _(s.tabs$),
    l = _(s.activeTab$),
    u = _(s.activeTabReactKey$),
    d = _(ul),
    f = (0, Mu.useContext)(pl)?.dragState ?? null,
    p;
  t[0] !== s || t[1] !== f || t[2] !== c
    ? ((p = Xl(c, s, f)), (t[0] = s), (t[1] = f), (t[2] = c), (t[3] = p))
    : (p = t[3]);
  let m = p,
    h = d === `ready`,
    g = l != null && (h || l.requiresWorkspaceReady === !1),
    v = l?.tabId ?? null,
    y;
  t[4] !== n ||
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== s ||
  t[8] !== o ||
  t[9] !== m ||
  t[10] !== v ||
  t[11] !== h
    ? ((y = (0, Nu.jsx)(bu, {
        height: o,
        activeTabId: v,
        after: n,
        afterSticky: r,
        before: i,
        controller: s,
        tabs: m,
        workspaceReady: h,
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = s),
      (t[8] = o),
      (t[9] = m),
      (t[10] = v),
      (t[11] = h),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] !== l ||
  t[14] !== g ||
  t[15] !== u ||
  t[16] !== s ||
  t[17] !== a ||
  t[18] !== h
    ? ((b = g
        ? (0, Nu.jsx)(Fu, { controller: s, tab: l }, u)
        : h
          ? (0, Nu.jsx)(`div`, {
              className: `relative min-h-0 flex-1`,
              children: a,
            })
          : (0, Nu.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center p-4 text-center text-sm text-token-text-secondary`,
              children: (0, Nu.jsx)(K, {
                id: `appShell.tabPanel.worktreeProvisioning`,
                defaultMessage: `Available when the worktree is ready`,
                description: `Placeholder shown instead of tab content while a worktree is being provisioned`,
              }),
            })),
      (t[13] = l),
      (t[14] = g),
      (t[15] = u),
      (t[16] = s),
      (t[17] = a),
      (t[18] = h),
      (t[19] = b))
    : (b = t[19]);
  let x;
  return (
    t[20] !== y || t[21] !== b
      ? ((x = (0, Nu.jsxs)(`div`, {
          "data-app-shell-tabs": `true`,
          className: `isolate flex h-full min-h-0 flex-col bg-token-main-surface-primary [contain:layout_paint]`,
          children: [y, b],
        })),
        (t[20] = y),
        (t[21] = b),
        (t[22] = x))
      : (x = t[22]),
    x
  );
}
function ku(e) {
  let t = (0, ju.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Nu.jsx)(`div`, {
        className: `font-medium text-token-text-primary`,
        children: (0, Nu.jsx)(K, {
          id: `appShell.tabPanelRenderError.title`,
          defaultMessage: `Tab content couldn't render`,
          description: `Error message shown when an app shell tab panel fails to render`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Nu.jsx)(K, {
        id: `appShell.tabPanelRenderError.retry`,
        defaultMessage: `Try again`,
        description: `Button label to retry rendering an app shell tab panel`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Nu.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col items-center justify-center gap-3 p-4 text-center text-sm text-token-text-secondary`,
          children: [
            r,
            (0, Nu.jsx)(me, {
              color: `secondary`,
              size: `default`,
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
function Au(e) {
  return e
    .composedPath()
    .some((e) => e instanceof Element && e.hasAttribute(Pu));
}
var ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu = e(() => {
    ((ju = z()),
      it(),
      (Mu = t(W(), 1)),
      Jt(),
      ve(),
      vn(),
      Ye(),
      dl(),
      ml(),
      Zl(),
      Du(),
      (Nu = q()),
      (Pu = `data-tab-preview-pin-exempt`),
      (Fu = (0, Mu.memo)(function ({ controller: e, tab: t }) {
        "use no memo";
        let n = Pe(f);
        Dn(e.tabStateById$, t.tabId);
        let r = (r) => {
          Au(r.nativeEvent) || (t.isPreview && e.pinTab(n, t.tabId));
        };
        return (0, Nu.jsx)(`div`, {
          role: `tabpanel`,
          "aria-label": t.title,
          "data-app-shell-tab-panel-controller": e.panelId,
          "data-tab-id": t.tabId,
          tabIndex: -1,
          onKeyDownCapture: r,
          onPointerDownCapture: r,
          className: `relative min-h-0 flex-1 outline-none`,
          children: (0, Nu.jsx)(nn, {
            name: `AppShellTabPanel`,
            resetKey: t.tabId,
            fallback: (e) =>
              (0, Nu.jsx)(ku, {
                onRetry: () => {
                  e.resetError();
                },
              }),
            children: t.renderPanel(n, () => {
              e.closeTab(n, t.tabId);
            }),
          }),
        });
      })));
  });
function Lu() {
  let e = (0, Ru.c)(4),
    t = _(Nn),
    n = _(gt),
    r = _(On),
    i;
  return (
    e[0] !== t || e[1] !== n || e[2] !== r
      ? ((i = (0, zu.jsx)(Ou, {
          headerHeight: `pane`,
          afterList: t,
          afterListSticky: n,
          emptyState: r,
          controller: kt,
        })),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
var Ru,
  zu,
  Bu = e(() => {
    ((Ru = z()), it(), Wt(), Zt(), Iu(), (zu = q()));
  }),
  Vu,
  Hu = e(() => {
    Vu = [
      {
        id: `hotkeyWindow`,
        titleIntlId: `codex.command.hotkeyWindow`,
        descriptionIntlId: `codex.commandDescription.hotkeyWindow`,
        shortcutScope: `os-global`,
      },
      {
        id: `globalDictationHold`,
        titleIntlId: `codex.command.globalDictationHold`,
        descriptionIntlId: `codex.commandDescription.globalDictationHold`,
        shortcutScope: `os-global`,
        allowsBareModifiers: !0,
      },
      {
        id: `globalDictationToggle`,
        titleIntlId: `codex.command.globalDictationToggle`,
        descriptionIntlId: `codex.commandDescription.globalDictationToggle`,
        shortcutScope: `os-global`,
        allowsBareModifiers: !0,
      },
      ...[],
      {
        id: `copyConversationPath`,
        descriptionIntlId: `codex.commandDescription.copyConversationPath`,
        electron: {
          menuTitle: `Copy conversation path`,
          menuTitleIntlId: `codex.commandMenuTitle.copyConversationPath`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+Shift+C` }],
        },
      },
      {
        id: `copyDeeplink`,
        descriptionIntlId: `codex.commandDescription.copyDeeplink`,
        electron: {
          menuTitle: `Copy deeplink`,
          menuTitleIntlId: `codex.commandMenuTitle.copyDeeplink`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+L` }],
        },
      },
      {
        id: `copySessionId`,
        descriptionIntlId: `codex.commandDescription.copySessionId`,
        electron: {
          menuTitle: `Copy session id`,
          menuTitleIntlId: `codex.commandMenuTitle.copySessionId`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+C` }],
        },
      },
      {
        id: `copyWorkingDirectory`,
        descriptionIntlId: `codex.commandDescription.copyWorkingDirectory`,
        electron: {
          menuTitle: `Copy working directory`,
          menuTitleIntlId: `codex.commandMenuTitle.copyWorkingDirectory`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+C` }],
        },
      },
      {
        id: `closeTab`,
        descriptionIntlId: `codex.commandDescription.closeTab`,
        electron: {
          menuTitle: `Close Tab`,
          menuTitleIntlId: `codex.commandMenuTitle.closeTab`,
          defaultKeybindings: [{ key: `CmdOrCtrl+W` }],
          platformDefaultKeybindings: {
            default: [{ key: `Ctrl+W` }, { key: `Ctrl+F4` }],
          },
        },
      },
      {
        id: `closeWindow`,
        descriptionIntlId: `codex.commandDescription.closeWindow`,
        electron: {
          menuTitle: `Close`,
          menuTitleIntlId: `codex.commandMenuTitle.closeWindow`,
          defaultKeybindings: [{ key: `CmdOrCtrl+W` }],
          platformDefaultKeybindings: {
            default: [{ key: `Ctrl+W` }, { key: `Ctrl+F4` }],
          },
        },
      },
      {
        id: `reloadBrowserPage`,
        descriptionIntlId: `codex.commandDescription.reloadBrowserPage`,
        electron: {
          menuTitle: `Reload Browser Page`,
          menuTitleIntlId: `codex.commandMenuTitle.reloadBrowserPage`,
          defaultKeybindings: [{ key: `CmdOrCtrl+R` }],
          isOverridableByBrowserWebpage: !0,
        },
      },
      {
        id: `hardReloadBrowserPage`,
        descriptionIntlId: `codex.commandDescription.hardReloadBrowserPage`,
        electron: {
          menuTitle: `Force Reload Browser Page`,
          menuTitleIntlId: `codex.commandMenuTitle.hardReloadBrowserPage`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+R` }],
          isOverridableByBrowserWebpage: !0,
        },
      },
      {
        id: `newWindow`,
        descriptionIntlId: `codex.commandDescription.newWindow`,
        electron: {
          menuTitle: `New Window`,
          menuTitleIntlId: `codex.commandMenuTitle.newWindow`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+N` }],
        },
      },
      {
        id: `openCommandMenu`,
        descriptionIntlId: `codex.commandDescription.openCommandMenu`,
        electron: {
          menuTitle: `Open command menu`,
          menuTitleIntlId: `codex.commandMenuTitle.openCommandMenu`,
          defaultKeybindings: [
            { key: `CmdOrCtrl+K` },
            { key: `CmdOrCtrl+Shift+P` },
          ],
        },
      },
      {
        id: `searchChats`,
        descriptionIntlId: `codex.commandDescription.searchChats`,
        electron: {
          menuTitle: `Search Tasks…`,
          menuTitleIntlId: `codex.commandMenuTitle.searchChats`,
          defaultKeybindings: [{ key: `CmdOrCtrl+G` }],
        },
      },
      {
        id: `searchFiles`,
        descriptionIntlId: `codex.commandDescription.searchFiles`,
        electron: {
          menuTitle: `Search Files…`,
          menuTitleIntlId: `codex.commandMenuTitle.searchFiles`,
          defaultKeybindings: [{ key: `CmdOrCtrl+P` }],
        },
      },
      {
        id: `renameThread`,
        descriptionIntlId: `codex.commandDescription.renameThread`,
        electron: {
          menuTitle: `Rename task`,
          menuTitleIntlId: `codex.commandMenuTitle.renameThread`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+R` }],
        },
      },
      {
        id: `toggleFileTreePanel`,
        descriptionIntlId: `codex.commandDescription.toggleFileTreePanel`,
        electron: {
          menuTitle: `Toggle File Tree`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleFileTreePanel`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+E` }],
        },
      },
      {
        id: `toggleTraceRecording`,
        descriptionIntlId: `codex.commandDescription.toggleTraceRecording`,
        electron: {
          menuTitle: `Start Trace Recording`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleTraceRecording`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+S` }],
        },
      },
    ];
  }),
  Uu,
  Wu = e(() => {
    Uu = [
      {
        id: `implementTodo`,
        vscodeCommand: { title: `Implement with Codex`, enablement: `false` },
      },
      {
        id: `openSidebar`,
        vscodeCommand: {
          title: `Open Codex Sidebar`,
          icon: {
            light: `resources/blossom-black.svg`,
            dark: `resources/blossom-white.svg`,
          },
        },
      },
      {
        id: `newCodexPanel`,
        vscodeCommand: { title: `New Codex Agent`, icon: `$(plus)` },
      },
      { id: `addToThread`, vscodeCommand: { title: `Add to Codex Thread` } },
      {
        id: `addFileToThread`,
        vscodeCommand: { title: `Add File to Codex Thread` },
      },
      {
        id: `showLspMcpCliArgs`,
        vscodeCommand: { title: `Copy Codex CLI args for LSP MCP` },
      },
      {
        id: `dumpNuxState`,
        vscodeCommand: {
          title: `Debug: print NUX state to console`,
          enablement: `chatgpt.sidebarView.visible`,
        },
      },
      {
        id: `resetNuxState`,
        vscodeCommand: {
          title: `Debug: reset NUX state`,
          enablement: `chatgpt.sidebarView.visible`,
        },
      },
    ];
  }),
  Gu,
  Ku = e(() => {
    Gu = [
      {
        id: `newTask`,
        titleIntlId: `codex.command.newThread`,
        descriptionIntlId: `codex.commandDescription.newThread`,
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: {
          menuTitle: `New Task`,
          menuTitleIntlId: `codex.commandMenuTitle.newThread`,
          defaultKeybindings: [
            { key: `CmdOrCtrl+N` },
            { key: `CmdOrCtrl+Shift+O` },
          ],
        },
        vscodeCommand: {
          commandId: `chatgpt.newChat`,
          title: `New Task in ChatGPT Sidebar`,
          keybinding: {
            key: `ctrl+n`,
            mac: `cmd+n`,
            when: `chatgpt.supportsNewChatKeyShortcut`,
          },
        },
      },
      {
        id: `newProjectlessTask`,
        titleIntlId: `codex.command.newProjectlessTask`,
        descriptionIntlId: `codex.commandDescription.newProjectlessTask`,
        availableIn: [`electron`],
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: {
          menuTitle: `New Projectless Task`,
          menuTitleIntlId: `codex.commandMenuTitle.newProjectlessTask`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+O` }],
        },
      },
      {
        id: `quickChat`,
        titleIntlId: `codex.command.quickChat`,
        descriptionIntlId: `codex.commandDescription.quickChat`,
        shortcutScope: `app`,
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: { defaultKeybindings: [{ key: `CmdOrCtrl+Alt+N` }] },
      },
      {
        id: `openThreadInNewWindow`,
        titleIntlId: `codex.command.openThreadInNewWindow`,
        descriptionIntlId: `codex.commandDescription.openThreadInNewWindow`,
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: {
          menuTitle: `Open in New Window`,
          menuTitleIntlId: `codex.commandMenuTitle.openThreadInNewWindow`,
        },
      },
      {
        id: `archiveThread`,
        titleIntlId: `codex.command.archiveThread`,
        descriptionIntlId: `codex.commandDescription.archiveThread`,
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: {
          menuTitle: `Archive task`,
          menuTitleIntlId: `codex.commandMenuTitle.archiveThread`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+A` }],
        },
      },
      {
        id: `toggleThreadPin`,
        titleIntlId: `codex.command.toggleThreadPin`,
        descriptionIntlId: `codex.commandDescription.toggleThreadPin`,
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: {
          menuTitle: `Pin/unpin task`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleThreadPin`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+P` }],
        },
      },
      {
        id: `copyConversationMarkdown`,
        titleIntlId: `codex.command.copyConversationMarkdown`,
        descriptionIntlId: `codex.commandDescription.copyConversationMarkdown`,
      },
      {
        id: `openSideChat`,
        titleIntlId: `codex.command.openSideChat`,
        descriptionIntlId: `codex.commandDescription.openSideChat`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        commandMenuGroupKey: `thread`,
        commandMenu: !0,
        electron: { defaultKeybindings: [{ key: `CmdOrCtrl+Alt+S` }] },
      },
      {
        id: `openControlWindow`,
        titleIntlId: `codex.command.openControlWindow`,
        descriptionIntlId: `codex.commandDescription.openControlWindow`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
      },
      {
        id: `composer.openModelPicker`,
        titleIntlId: `codex.command.composer.openModelPicker`,
        descriptionIntlId: `codex.commandDescription.composer.openModelPicker`,
        shortcutScope: `app`,
        electron: { defaultKeybindings: [{ key: `Ctrl+Shift+M` }] },
      },
      {
        id: `composer.startVoiceMode`,
        titleIntlId: `codex.command.composer.startVoiceMode`,
        descriptionIntlId: `codex.commandDescription.composer.startVoiceMode`,
        shortcutScope: `app`,
        electron: { defaultKeybindings: [{ key: `Ctrl+Shift+V` }] },
      },
      {
        id: `composer.startDictation`,
        titleIntlId: `codex.command.composer.startDictation`,
        descriptionIntlId: `codex.commandDescription.composer.startDictation`,
        shortcutScope: `app`,
        electron: {
          menuTitle: `Dictation`,
          menuTitleIntlId: `codex.commandMenuTitle.composer.startDictation`,
          defaultKeybindings: [{ key: `Ctrl+Shift+D` }],
        },
      },
      {
        id: `composer.submit`,
        titleIntlId: `codex.command.composer.submit`,
        descriptionIntlId: `codex.commandDescription.composer.submit`,
        shortcutScope: `app`,
      },
      {
        id: `composer.addPhotos`,
        titleIntlId: `codex.command.composer.addPhotos`,
        descriptionIntlId: `codex.commandDescription.composer.addPhotos`,
        availableIn: [`electron`],
        shortcutScope: `app`,
      },
      {
        id: `composer.addFiles`,
        titleIntlId: `codex.command.composer.addFiles`,
        descriptionIntlId: `codex.commandDescription.composer.addFiles`,
        availableIn: [`electron`],
        shortcutScope: `app`,
      },
      {
        id: `composer.toggleFastMode`,
        titleIntlId: `codex.command.composer.toggleFastMode`,
        descriptionIntlId: `codex.commandDescription.composer.toggleFastMode`,
        shortcutScope: `app`,
      },
      {
        id: `composer.increaseReasoningEffort`,
        titleIntlId: `codex.command.composer.increaseReasoningEffort`,
        descriptionIntlId: `codex.commandDescription.composer.increaseReasoningEffort`,
        shortcutScope: `app`,
      },
      {
        id: `composer.decreaseReasoningEffort`,
        titleIntlId: `codex.command.composer.decreaseReasoningEffort`,
        descriptionIntlId: `codex.commandDescription.composer.decreaseReasoningEffort`,
        shortcutScope: `app`,
      },
      {
        id: `composer.cycleReasoningEffort`,
        titleIntlId: `codex.command.composer.cycleReasoningEffort`,
        descriptionIntlId: `codex.commandDescription.composer.cycleReasoningEffort`,
        shortcutScope: `app`,
      },
      {
        id: `composer.togglePlanMode`,
        titleIntlId: `codex.command.composer.togglePlanMode`,
        descriptionIntlId: `codex.commandDescription.composer.togglePlanMode`,
        shortcutScope: `app`,
      },
      {
        id: `approval.approve`,
        titleIntlId: `codex.command.approval.approve`,
        descriptionIntlId: `codex.commandDescription.approval.approve`,
        shortcutScope: `app`,
        electron: { defaultKeybindings: [{ key: `Enter` }] },
      },
      {
        id: `approval.decline`,
        titleIntlId: `codex.command.approval.decline`,
        descriptionIntlId: `codex.commandDescription.approval.decline`,
        shortcutScope: `app`,
        electron: { defaultKeybindings: [{ key: `Escape` }] },
      },
      {
        id: `git.commit`,
        titleIntlId: `codex.command.git.commit`,
        descriptionIntlId: `codex.commandDescription.git.commit`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
        commandMenu: !0,
      },
      {
        id: `git.createPullRequest`,
        titleIntlId: `codex.command.git.createPullRequest`,
        descriptionIntlId: `codex.commandDescription.git.createPullRequest`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
        commandMenu: !0,
      },
      {
        id: `forkThread`,
        titleIntlId: `codex.command.forkThread`,
        descriptionIntlId: `codex.commandDescription.forkThread`,
        shortcutScope: `app`,
      },
      {
        id: `openAvatarOverlay`,
        titleIntlId: `codex.command.openPetOverlay`,
        descriptionIntlId: `codex.commandDescription.openPetOverlay`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
        electron: {
          menuTitle: `Show pet`,
          menuTitleIntlId: `codex.commandMenuTitle.openAvatarOverlay`,
        },
      },
      {
        id: `previousTab`,
        titleIntlId: `codex.command.previousTab`,
        descriptionIntlId: `codex.commandDescription.previousTab`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        allowsKeyRepeat: !0,
        commandMenuGroupKey: `navigation`,
        electron: {
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+[` }],
          platformDefaultKeybindings: {
            macOS: [
              { key: `Ctrl+Shift+Tab` },
              { key: `Command+Shift+[` },
              { key: `Command+Alt+Left` },
            ],
            default: [
              { key: `Ctrl+Shift+Tab` },
              { key: `Ctrl+Shift+[` },
              { key: `Ctrl+PageUp` },
            ],
          },
        },
      },
      {
        id: `previousThread`,
        titleIntlId: `codex.command.previousThread`,
        descriptionIntlId: `codex.commandDescription.previousThread`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          menuTitle: `Previous Task`,
          menuTitleIntlId: `codex.commandMenuTitle.previousThread`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+[` }],
          platformDefaultKeybindings: {
            macOS: [{ key: `Command+Shift+[` }, { key: `Command+Alt+Left` }],
            default: [{ key: `Ctrl+Shift+[` }, { key: `Ctrl+PageUp` }],
          },
        },
      },
      {
        id: `previousRecentThread`,
        titleIntlId: `codex.command.previousRecentThread`,
        descriptionIntlId: `codex.commandDescription.previousRecentThread`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        allowsKeyRepeat: !0,
        commandMenuGroupKey: `navigation`,
        electron: { defaultKeybindings: [{ key: `Ctrl+Shift+Tab` }] },
      },
      {
        id: `nextTab`,
        titleIntlId: `codex.command.nextTab`,
        descriptionIntlId: `codex.commandDescription.nextTab`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        allowsKeyRepeat: !0,
        commandMenuGroupKey: `navigation`,
        electron: {
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+]` }],
          platformDefaultKeybindings: {
            macOS: [
              { key: `Ctrl+Tab` },
              { key: `Command+Shift+]` },
              { key: `Command+Alt+Right` },
            ],
            default: [
              { key: `Ctrl+Tab` },
              { key: `Ctrl+Shift+]` },
              { key: `Ctrl+PageDown` },
            ],
          },
        },
      },
      {
        id: `nextThread`,
        titleIntlId: `codex.command.nextThread`,
        descriptionIntlId: `codex.commandDescription.nextThread`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          menuTitle: `Next Task`,
          menuTitleIntlId: `codex.commandMenuTitle.nextThread`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+]` }],
          platformDefaultKeybindings: {
            macOS: [{ key: `Command+Shift+]` }, { key: `Command+Alt+Right` }],
            default: [{ key: `Ctrl+Shift+]` }, { key: `Ctrl+PageDown` }],
          },
        },
      },
      {
        id: `nextRecentThread`,
        titleIntlId: `codex.command.nextRecentThread`,
        descriptionIntlId: `codex.commandDescription.nextRecentThread`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        allowsKeyRepeat: !0,
        commandMenuGroupKey: `navigation`,
        electron: { defaultKeybindings: [{ key: `Ctrl+Tab` }] },
      },
      {
        id: `switchToMode1`,
        titleIntlId: `codex.command.switchToMode1`,
        descriptionIntlId: `codex.commandDescription.switchToMode1`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          platformDefaultKeybindings: {
            macOS: [{ key: `Ctrl+1` }],
            default: [{ key: `Alt+1` }],
          },
        },
      },
      {
        id: `switchToMode2`,
        titleIntlId: `codex.command.switchToMode2`,
        descriptionIntlId: `codex.commandDescription.switchToMode2`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          platformDefaultKeybindings: {
            macOS: [{ key: `Ctrl+2` }],
            default: [{ key: `Alt+2` }],
          },
        },
      },
      {
        id: `settings`,
        titleIntlId: `codex.command.settings`,
        descriptionIntlId: `codex.commandDescription.settings`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
        electron: {
          menuTitle: `Settings…`,
          menuTitleIntlId: `codex.commandMenuTitle.settings`,
          defaultKeybindings: [{ key: `CmdOrCtrl+,` }],
        },
      },
      {
        id: `mcpSettings`,
        titleIntlId: `codex.command.mcpSettings`,
        descriptionIntlId: `codex.commandDescription.mcpSettings`,
        commandMenuGroupKey: `configure`,
        commandMenu: !0,
      },
      {
        id: `personalitySettings`,
        titleIntlId: `codex.command.personalitySettings`,
        descriptionIntlId: `codex.commandDescription.personalitySettings`,
        commandMenuGroupKey: `configure`,
        commandMenu: !0,
      },
      {
        id: `importExternalAgent`,
        titleIntlId: `codex.command.importExternalAgent`,
        descriptionIntlId: `codex.commandDescription.importExternalAgent`,
        availableIn: [`electron`],
        commandMenuGroupKey: `configure`,
        commandMenu: !0,
      },
      {
        id: `keyboardShortcuts`,
        titleIntlId: `codex.command.keyboardShortcuts`,
        descriptionIntlId: `codex.commandDescription.keyboardShortcuts`,
        commandMenuGroupKey: `configure`,
        commandMenu: !0,
      },
      {
        id: `showKeyboardShortcuts`,
        titleIntlId: `codex.command.showKeyboardShortcuts`,
        descriptionIntlId: `codex.commandDescription.showKeyboardShortcuts`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        electron: {
          menuTitle: `Keyboard Shortcuts`,
          menuTitleIntlId: `codex.commandMenuTitle.showKeyboardShortcuts`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+/` }],
        },
      },
      {
        id: `manageTasks`,
        titleIntlId: `codex.command.manageTasks`,
        descriptionIntlId: `codex.commandDescription.manageTasks`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
      },
      {
        id: `openProcessManager`,
        titleIntlId: `codex.command.openProcessManager`,
        descriptionIntlId: `codex.commandDescription.openProcessManager`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
        electron: {
          menuTitle: `Process Manager`,
          menuTitleIntlId: `codex.commandMenuTitle.openProcessManager`,
          defaultKeybindings: [{ key: `Ctrl+Alt+M` }],
        },
      },
      {
        id: `forceReloadSkills`,
        titleIntlId: `codex.command.forceReloadSkills`,
        descriptionIntlId: `codex.commandDescription.forceReloadSkills`,
        commandMenuGroupKey: `skills`,
        commandMenu: !0,
      },
      {
        id: `installPrimaryRuntime`,
        titleIntlId: `codex.command.installPrimaryRuntime`,
        descriptionIntlId: `codex.commandDescription.installPrimaryRuntime`,
        commandMenuGroupKey: `configure`,
        commandMenu: !0,
      },
      {
        id: `openSkills`,
        titleIntlId: `codex.command.openSkills`,
        descriptionIntlId: `codex.commandDescription.openSkills`,
        commandMenuGroupKey: `skills`,
        commandMenu: !0,
      },
      {
        id: `openFolder`,
        titleIntlId: `codex.command.openFolder`,
        descriptionIntlId: `codex.commandDescription.openFolder`,
        commandMenuGroupKey: `workspace`,
        commandMenu: !0,
        electron: {
          menuTitle: `Open Folder…`,
          menuTitleIntlId: `codex.commandMenuTitle.openFolder`,
          defaultKeybindings: [{ key: `CmdOrCtrl+O` }],
        },
      },
      {
        id: `toggleSidebar`,
        titleIntlId: `codex.command.toggleSidebar`,
        descriptionIntlId: `codex.commandDescription.toggleSidebar`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Toggle Sidebar`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleSidebar`,
          defaultKeybindings: [{ key: `CmdOrCtrl+B` }],
        },
      },
      {
        id: `toggleBottomPanel`,
        titleIntlId: `codex.command.toggleBottomPanel`,
        descriptionIntlId: `codex.commandDescription.toggleBottomPanel`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Toggle Bottom Panel`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleBottomPanel`,
          defaultKeybindings: [{ key: `CmdOrCtrl+J` }],
        },
      },
      {
        id: `togglePinnedSummary`,
        titleIntlId: `codex.command.togglePinnedSummary`,
        descriptionIntlId: `codex.commandDescription.togglePinnedSummary`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Toggle Pinned Summary`,
          menuTitleIntlId: `codex.commandMenuTitle.togglePinnedSummary`,
        },
      },
      {
        id: `toggleTerminal`,
        titleIntlId: `codex.command.toggleTerminal`,
        descriptionIntlId: `codex.commandDescription.toggleTerminal`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Open Terminal`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleTerminal`,
          defaultKeybindings: [{ key: "Control+`" }],
        },
      },
      {
        id: `openBrowserTab`,
        titleIntlId: `codex.command.openBrowserTab`,
        descriptionIntlId: `codex.commandDescription.openBrowserTab`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Open Browser Tab`,
          menuTitleIntlId: `codex.commandMenuTitle.openBrowserTab`,
          defaultKeybindings: [{ key: `CmdOrCtrl+T` }],
        },
      },
      {
        id: `toggleBrowserPanel`,
        titleIntlId: `codex.command.toggleBrowserPanel`,
        descriptionIntlId: `codex.commandDescription.toggleBrowserPanel`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Toggle Browser Panel`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleBrowserPanel`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Shift+B` }],
        },
      },
      {
        id: `openReviewTab`,
        titleIntlId: `codex.command.openReviewTab`,
        descriptionIntlId: `codex.commandDescription.openReviewTab`,
        availableIn: [`electron`, `browser`],
        shortcutScope: `app`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: { defaultKeybindings: [{ key: `Ctrl+Shift+G` }] },
      },
      {
        id: `toggleReviewTab`,
        titleIntlId: `codex.command.toggleReviewTab`,
        descriptionIntlId: `codex.commandDescription.toggleReviewTab`,
        availableIn: [`electron`, `browser`],
        shortcutScope: `app`,
        commandMenuGroupKey: `panels`,
      },
      {
        id: `toggleSidePanel`,
        titleIntlId: `codex.command.toggleSidePanel`,
        descriptionIntlId: `codex.commandDescription.toggleSidePanel`,
        commandMenuGroupKey: `panels`,
        commandMenu: !0,
        electron: {
          menuTitle: `Toggle Side Panel`,
          menuTitleIntlId: `codex.commandMenuTitle.toggleSidePanel`,
          defaultKeybindings: [{ key: `CmdOrCtrl+Alt+B` }],
        },
      },
      {
        id: `toggleMaximizeSidePanel`,
        titleIntlId: `codex.command.toggleMaximizeSidePanel`,
        descriptionIntlId: `codex.commandDescription.toggleMaximizeSidePanel`,
        shortcutScope: `app`,
      },
      {
        id: `findInThread`,
        titleIntlId: `codex.command.findInThread`,
        descriptionIntlId: `codex.commandDescription.findInThread`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          menuTitle: `Find`,
          menuTitleIntlId: `codex.commandMenuTitle.findInThread`,
          defaultKeybindings: [{ key: `CmdOrCtrl+F` }],
          platformDefaultKeybindings: {
            macOS: [{ key: `Command+F` }],
            default: [{ key: `Ctrl+F` }],
          },
          isOverridableByBrowserWebpage: !0,
        },
      },
      {
        id: `focusBrowserAddressBar`,
        titleIntlId: `codex.command.focusBrowserAddressBar`,
        descriptionIntlId: `codex.commandDescription.focusBrowserAddressBar`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          menuTitle: `Focus Browser Address Bar`,
          menuTitleIntlId: `codex.commandMenuTitle.focusBrowserAddressBar`,
          defaultKeybindings: [{ key: `CmdOrCtrl+L` }],
          isOverridableByBrowserWebpage: !0,
        },
      },
      {
        id: `navigateBrowserBack`,
        titleIntlId: `codex.command.navigateBrowserBack`,
        descriptionIntlId: `codex.commandDescription.navigateBrowserBack`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        electron: {
          platformDefaultKeybindings: {
            macOS: [{ key: `Command+Left` }],
            default: [{ key: `Alt+Left` }],
          },
          isOverridableByBrowserWebpage: !0,
        },
      },
      {
        id: `navigateBrowserForward`,
        titleIntlId: `codex.command.navigateBrowserForward`,
        descriptionIntlId: `codex.commandDescription.navigateBrowserForward`,
        availableIn: [`electron`],
        shortcutScope: `app`,
        electron: {
          platformDefaultKeybindings: {
            macOS: [{ key: `Command+Right` }],
            default: [{ key: `Alt+Right` }],
          },
          isOverridableByBrowserWebpage: !0,
        },
      },
      {
        id: `navigateBack`,
        titleIntlId: `codex.command.navigateBack`,
        descriptionIntlId: `codex.commandDescription.navigateBack`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          menuTitle: `Back`,
          menuTitleIntlId: `codex.commandMenuTitle.navigateBack`,
          defaultKeybindings: [{ key: `CmdOrCtrl+[` }, { key: `MouseBack` }],
        },
      },
      {
        id: `navigateForward`,
        titleIntlId: `codex.command.navigateForward`,
        descriptionIntlId: `codex.commandDescription.navigateForward`,
        commandMenuGroupKey: `navigation`,
        commandMenu: !0,
        electron: {
          menuTitle: `Forward`,
          menuTitleIntlId: `codex.commandMenuTitle.navigateForward`,
          defaultKeybindings: [{ key: `CmdOrCtrl+]` }, { key: `MouseForward` }],
        },
      },
      {
        id: `logOut`,
        titleIntlId: `codex.command.logOut`,
        descriptionIntlId: `codex.commandDescription.logOut`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
      },
      {
        id: `feedback`,
        titleIntlId: `codex.command.feedback`,
        descriptionIntlId: `codex.commandDescription.feedback`,
        commandMenuGroupKey: `app`,
        commandMenu: !0,
      },
      {
        id: `environmentAction1`,
        titleIntlId: `codex.command.environmentAction1`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
        electron: { defaultKeybindings: [{ key: `Command+Shift+D` }] },
      },
      {
        id: `environmentAction2`,
        titleIntlId: `codex.command.environmentAction2`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction3`,
        titleIntlId: `codex.command.environmentAction3`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction4`,
        titleIntlId: `codex.command.environmentAction4`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction5`,
        titleIntlId: `codex.command.environmentAction5`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction6`,
        titleIntlId: `codex.command.environmentAction6`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction7`,
        titleIntlId: `codex.command.environmentAction7`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction8`,
        titleIntlId: `codex.command.environmentAction8`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `environmentAction9`,
        titleIntlId: `codex.command.environmentAction9`,
        descriptionIntlId: `codex.commandDescription.environmentActionSlot`,
        shortcutScope: `app`,
        commandMenuGroupKey: `workspace`,
      },
      {
        id: `thread1`,
        titleIntlId: `codex.command.thread1`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 1`,
          menuTitleIntlId: `codex.commandMenuTitle.thread1`,
          defaultKeybindings: [{ key: `CmdOrCtrl+1` }],
        },
      },
      {
        id: `thread2`,
        titleIntlId: `codex.command.thread2`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 2`,
          menuTitleIntlId: `codex.commandMenuTitle.thread2`,
          defaultKeybindings: [{ key: `CmdOrCtrl+2` }],
        },
      },
      {
        id: `thread3`,
        titleIntlId: `codex.command.thread3`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 3`,
          menuTitleIntlId: `codex.commandMenuTitle.thread3`,
          defaultKeybindings: [{ key: `CmdOrCtrl+3` }],
        },
      },
      {
        id: `thread4`,
        titleIntlId: `codex.command.thread4`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 4`,
          menuTitleIntlId: `codex.commandMenuTitle.thread4`,
          defaultKeybindings: [{ key: `CmdOrCtrl+4` }],
        },
      },
      {
        id: `thread5`,
        titleIntlId: `codex.command.thread5`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 5`,
          menuTitleIntlId: `codex.commandMenuTitle.thread5`,
          defaultKeybindings: [{ key: `CmdOrCtrl+5` }],
        },
      },
      {
        id: `thread6`,
        titleIntlId: `codex.command.thread6`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 6`,
          menuTitleIntlId: `codex.commandMenuTitle.thread6`,
          defaultKeybindings: [{ key: `CmdOrCtrl+6` }],
        },
      },
      {
        id: `thread7`,
        titleIntlId: `codex.command.thread7`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 7`,
          menuTitleIntlId: `codex.commandMenuTitle.thread7`,
          defaultKeybindings: [{ key: `CmdOrCtrl+7` }],
        },
      },
      {
        id: `thread8`,
        titleIntlId: `codex.command.thread8`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 8`,
          menuTitleIntlId: `codex.commandMenuTitle.thread8`,
          defaultKeybindings: [{ key: `CmdOrCtrl+8` }],
        },
      },
      {
        id: `thread9`,
        titleIntlId: `codex.command.thread9`,
        descriptionIntlId: `codex.commandDescription.threadSlot`,
        electron: {
          menuTitle: `Go to Task 9`,
          menuTitleIntlId: `codex.commandMenuTitle.thread9`,
          defaultKeybindings: [{ key: `CmdOrCtrl+9` }],
        },
      },
    ];
  });
function qu(e, t) {
  return e.map((e) => ({ ...e, kind: t }));
}
var Ju,
  Yu = e(() => {
    (Hu(),
      Wu(),
      Ku(),
      (Ju = [
        ...qu(Gu, `webview`),
        ...qu(Uu, `vscode-only`),
        ...qu(Vu, `electron-only`),
      ]));
  });
function Xu(e) {
  return fd.get(e) ?? null;
}
function Zu(e) {
  return fd.has(e);
}
function Qu(e) {
  return e.kind === `webview` && `commandMenu` in e && e.commandMenu === !0;
}
function $u(e, t) {
  return e.availableIn?.includes(t) ?? !0;
}
function ed(e) {
  return !ld(e);
}
function td(e) {
  return `descriptionIntlId` in e;
}
function nd(e) {
  return (
    `shortcutScope` in e &&
    e.shortcutScope === `os-global` &&
    `allowsBareModifiers` in e &&
    e.allowsBareModifiers === !0
  );
}
function rd(e) {
  return `shortcutScope` in e && e.shortcutScope === `os-global`;
}
function id(e) {
  return e === `MouseBack` || e === `MouseForward`;
}
function ad(e, t) {
  return e === t ? !0 : dd.some((n) => n.includes(e) && n.includes(t));
}
function od({ commandId: e, isMacOS: t }) {
  let n = Xu(e);
  if (n == null || !ed(n)) return [];
  let r = cd(n);
  return r == null
    ? []
    : t === !0 && r.platformDefaultKeybindings?.macOS != null
      ? r.platformDefaultKeybindings.macOS.map((e) => e.key)
      : t === !1 && r.platformDefaultKeybindings?.default != null
        ? r.platformDefaultKeybindings.default.map((e) => e.key)
        : r.defaultKeybindings == null
          ? []
          : r.defaultKeybindings.map((e) => e.key);
}
function sd({ commandId: e, keymapState: t, isMacOS: n }) {
  let r = Xu(e);
  if (r == null || !ed(r)) return [];
  let i = t?.bindings.filter((t) => t.command === e);
  if (i != null && i.length > 0) {
    let e = [];
    for (let t of i) {
      if (t.key == null) return [];
      e.push(t.key);
    }
    return e;
  }
  return od({ commandId: e, isMacOS: n });
}
function cd(e) {
  return e == null || !(`electron` in e) || e.electron == null
    ? null
    : e.electron;
}
function ld(e) {
  return e.kind === `vscode-only`;
}
var ud,
  dd,
  fd,
  pd,
  md,
  hd = e(() => {
    (Yu(),
      (ud = [
        `thread`,
        `navigation`,
        `panels`,
        `workspace`,
        `skills`,
        `configure`,
        `app`,
      ]),
      (dd = [
        [`closeTab`, `closeWindow`],
        [`nextTab`, `nextThread`],
        [`nextTab`, `nextRecentThread`],
        [`previousTab`, `previousThread`],
        [`previousTab`, `previousRecentThread`],
      ]),
      (fd = new Map()));
    for (let e of Ju) {
      if (fd.has(e.id)) throw Error(`Duplicate Codex command id: ${e.id}`);
      fd.set(e.id, e);
    }
    ((pd = Ju.filter(
      (e) => e.kind === `webview` && /^thread[1-9]$/.test(e.id),
    ).map((e) => e.id)),
      (md = Ju.filter(
        (e) => e.kind === `webview` && /^environmentAction[1-9]$/.test(e.id),
      ).map((e) => e.id)),
      Ju.flatMap((e) => {
        let t = cd(e);
        return t?.menuTitle == null || t.menuTitleIntlId == null
          ? []
          : [t.menuTitleIntlId];
      }),
      Ju.flatMap((e) => {
        if (!(`vscodeCommand` in e) || e.vscodeCommand == null) return [];
        let { commandId: t = `chatgpt.${e.id}`, ...n } = e.vscodeCommand;
        return [{ commandId: t, ...n }];
      }));
  }),
  gd = e(() => {
    (Yu(), hd());
  });
function _d(e) {
  return e.trim().split(/\s+/).filter(Boolean);
}
var vd,
  yd = e(() => {
    vd = 1e3;
  });
function bd() {
  return typeof navigator > `u`
    ? !1
    : (navigator.platform ?? ``).startsWith(`Mac`);
}
function xd() {
  return typeof navigator > `u`
    ? !1
    : (navigator.platform ?? ``).startsWith(`Linux`);
}
function Sd(e, t = bd(), n = !t && xd()) {
  return _d(e)
    .map((e) => Cd(e, t, n))
    .join(` `);
}
function Cd(e, t, n) {
  let r = Td.get(e);
  if (t && r != null) return r;
  let i = e.split(`+`).filter(Boolean),
    a = new Set(),
    o = null;
  for (let e of i)
    switch (e) {
      case `CmdOrCtrl`:
        a.add(t ? `Command` : `Ctrl`);
        break;
      case `Command`:
      case `Cmd`:
        a.add(t ? `Command` : n ? `Super` : `Win`);
        break;
      case `Control`:
      case `Ctrl`:
        a.add(`Ctrl`);
        break;
      case `Alt`:
      case `Option`:
        a.add(`Alt`);
        break;
      case `Shift`:
        a.add(`Shift`);
        break;
      default:
        o = e;
        break;
    }
  t && o === `/` && a.has(`Shift`) && (a.delete(`Shift`), (o = `?`));
  let s = wd(o, t);
  if (t) {
    let e = { Ctrl: `⌃`, Alt: `⌥`, Shift: `⇧`, Command: `⌘` };
    return `${[`Ctrl`, `Alt`, `Shift`, `Command`]
      .filter((e) => a.has(e))
      .map((t) => e[t])
      .join(``)}${s}`;
  }
  let c = Array.from(a).map((e) => (e === `Command` ? `Cmd` : e));
  return [
    ...[`Ctrl`, `Alt`, `Shift`, `Cmd`, `Super`, `Win`].filter((e) =>
      c.includes(e),
    ),
    s,
  ]
    .filter(Boolean)
    .join(`+`);
}
function wd(e, t) {
  if (e == null) return ``;
  if (t && e === `Plus`) return `+`;
  switch (e) {
    case `Enter`:
      return `⏎`;
    case `LeftOption`:
      return t ? `Left ⌥` : `Left Option`;
    case `RightOption`:
      return t ? `Right ⌥` : `Right Option`;
    case `DoubleOption`:
      return t ? `⌥ + ⌥` : `Double Option`;
    case `LeftCommand`:
      return t ? `Left ⌘` : `Left Command`;
    case `DoubleCommand`:
      return t ? `⌘ + ⌘` : `Double Command`;
    case `RightCommand`:
      return t ? `Right ⌘` : `Right Command`;
    case `LeftControl`:
      return t ? `Left ⌃` : `Left Control`;
    case `RightControl`:
      return t ? `Right ⌃` : `Right Control`;
    case `LeftShift`:
      return t ? `Left ⇧` : `Left Shift`;
    case `RightShift`:
      return t ? `Right ⇧` : `Right Shift`;
    case `DoubleShift`:
      return t ? `⇧ + ⇧` : `Double Shift`;
    case `Fn`:
      return `Fn`;
    case `MouseBack`:
      return `Mouse Back`;
    case `MouseForward`:
      return `Mouse Forward`;
    default:
      return e;
  }
}
var Td,
  Ed = e(() => {
    (gd(),
      yd(),
      (Td = new Map([
        [`LeftOption+RightOption`, `⌥ + ⌥`],
        [`LeftAlt+RightAlt`, `⌥ + ⌥`],
        [`LeftCommand+RightCommand`, `⌘ + ⌘`],
        [`LeftCmd+RightCmd`, `⌘ + ⌘`],
        [`LeftMeta+RightMeta`, `⌘ + ⌘`],
        [`LeftShift+RightShift`, `⇧ + ⇧`],
      ])));
  });
function Dd(e, t) {
  return od({ commandId: e, isMacOS: t === `macOS` }).length > 0;
}
function Od(e, t, n) {
  return sd({ commandId: e, keymapState: t, isMacOS: n === `macOS` }).map(
    (e) => ({ accelerator: e, label: Sd(e, n === `macOS`, n === `linux`) }),
  );
}
var kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld = e(() => {
    (gd(),
      it(),
      x(),
      Ed(),
      vt(),
      Et(),
      lt(),
      (kd = [
        `thread1`,
        `thread2`,
        `thread3`,
        `thread4`,
        `thread5`,
        `thread6`,
        `thread7`,
        `thread8`,
        `thread9`,
      ]),
      (Ad = Pt(_n, `codex-command-keymap-state`, {
        enabled: !0,
        staleTime: bt.ONE_MINUTE,
      })),
      (jd = n(_n, (e, { get: t }) => {
        Xu(e);
        let n = t(be);
        return [
          ...sd({
            commandId: e,
            keymapState: t(Ad).data,
            isMacOS: n === `macOS`,
          }),
        ];
      })),
      (Md = n(_n, (e, { get: t }) => t(jd, e)[0] ?? null)),
      (Nd = n(_n, (e, { get: t }) => {
        let n = t(be);
        return t(jd, e).map((e) => Sd(e, n === `macOS`, n === `linux`));
      })),
      (Pd = n(_n, (e, { get: t }) => t(Nd, e)[0] ?? null)),
      (Fd = De(_n, ({ get: e }) => kd.map((t) => e(Pd, t)))),
      (Id = n(
        _n,
        (e, { get: t }) =>
          t(Ad).data?.bindings.some((t) => t.command === e) === !0,
      )));
  }),
  Rd,
  zd,
  Bd = e(() => {
    (t(W()),
      (Rd = q()),
      (zd = (e) =>
        (0, Rd.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Rd.jsx)(`path`, {
            d: `M4.33496 11C4.33496 10.6327 4.63273 10.335 5 10.335C5.36727 10.335 5.66504 10.6327 5.66504 11V14.335H9L9.13379 14.3486C9.43692 14.4106 9.66504 14.6786 9.66504 15C9.66504 15.3214 9.43692 15.5894 9.13379 15.6514L9 15.665H5C4.63273 15.665 4.33496 15.3673 4.33496 15V11ZM14.335 9V5.66504H11C10.6327 5.66504 10.335 5.36727 10.335 5C10.335 4.63273 10.6327 4.33496 11 4.33496H15L15.1338 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V9C15.665 9.36727 15.3673 9.66504 15 9.66504C14.6327 9.66504 14.335 9.36727 14.335 9Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  Vd,
  Hd,
  Ud = e(() => {
    (t(W()),
      (Vd = q()),
      (Hd = (e) =>
        (0, Vd.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Vd.jsx)(`path`, {
              d: `M6.1664 8.80845C6.7325 8.80845 7.1918 9.26774 7.1918 9.83384V13.3338C7.19155 13.6236 6.9562 13.8592 6.6664 13.8592C6.37672 13.8591 6.14126 13.6235 6.14101 13.3338V10.5936L2.70547 14.0379C2.50071 14.243 2.16753 14.2435 1.9623 14.0389C1.75709 13.8342 1.75665 13.501 1.96133 13.2957L5.39101 9.85923H2.6664C2.37672 9.85909 2.14126 9.6235 2.14101 9.33384C2.14101 9.04397 2.37657 8.80858 2.6664 8.80845H6.1664Z`,
              fill: `currentColor`,
            }),
            (0, Vd.jsx)(`path`, {
              d: `M13.2943 1.96274C13.4989 1.75743 13.8311 1.75731 14.0365 1.96177C14.2419 2.16637 14.243 2.49854 14.0385 2.70395L10.6127 6.14145H13.3334C13.6233 6.14145 13.8588 6.37689 13.8588 6.66684C13.8587 6.95674 13.6233 7.19223 13.3334 7.19223H9.8334C9.26734 7.19223 8.80807 6.73288 8.80801 6.16684V2.66684C8.80801 2.37689 9.04345 2.14145 9.3334 2.14145C9.62335 2.14145 9.85879 2.37689 9.85879 2.66684V5.41098L13.2943 1.96274Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function Wd() {
  let e = (0, Kd.c)(17),
    t = Pe(f),
    n = Mn(),
    r = _(d),
    i = Dn(Pd, `toggleMaximizeSidePanel`),
    a;
  e[0] !== n || e[1] !== r
    ? ((a = r
        ? n.formatMessage({
            id: `codex.rightPanel.restoreWidth`,
            defaultMessage: `Restore panel width`,
            description: `Accessible label for restoring the right panel from full width`,
          })
        : n.formatMessage({
            id: `codex.rightPanel.expandFullWidth`,
            defaultMessage: `Expand panel`,
            description: `Accessible label for expanding the right panel to full width`,
          })),
      (e[0] = n),
      (e[1] = r),
      (e[2] = a))
    : (a = e[2]);
  let o = a,
    s;
  (e[3] !== r || e[4] !== t
    ? ((s = () => {
        t.set(d, !r);
      }),
      (e[3] = r),
      (e[4] = t),
      (e[5] = s))
    : (s = e[5]),
    yn(`toggleMaximizeSidePanel`, s));
  let c = r ? `secondary` : `ghost`,
    l;
  e[6] === r
    ? (l = e[7])
    : ((l = r
        ? (0, qd.jsx)(Hd, { className: `icon-xs` })
        : (0, qd.jsx)(zd, { className: `icon-xs` })),
      (e[6] = r),
      (e[7] = l));
  let u;
  e[8] !== r || e[9] !== o || e[10] !== c || e[11] !== l
    ? ((u = (0, qd.jsx)(me, {
        "aria-label": o,
        "aria-pressed": r,
        color: c,
        size: `toolbar`,
        uniform: !0,
        onClick: Gd,
        children: l,
      })),
      (e[8] = r),
      (e[9] = o),
      (e[10] = c),
      (e[11] = l),
      (e[12] = u))
    : (u = e[12]);
  let p;
  return (
    e[13] !== o || e[14] !== i || e[15] !== u
      ? ((p = (0, qd.jsx)(b, {
          tooltipContent: o,
          shortcut: i,
          delayOpen: !0,
          children: u,
        })),
        (e[13] = o),
        (e[14] = i),
        (e[15] = u),
        (e[16] = p))
      : (p = e[16]),
    p
  );
}
function Gd() {
  return Lt(`toggleMaximizeSidePanel`, `side_panel_full_width_button`);
}
var Kd,
  qd,
  Jd = e(() => {
    ((Kd = z()),
      it(),
      Jt(),
      Ld(),
      pn(),
      wt(),
      ve(),
      Ht(),
      Bd(),
      Ud(),
      Ye(),
      Wt(),
      (qd = q()));
  });
function Yd() {
  let e = _(we),
    t = _(k),
    n = _(ie),
    r = _(le),
    i = _(d),
    a = _(Ue),
    { headerLeftWidth: o, headerRightWidth: s } = ln(),
    c = ge`max(0px, calc(${s}px)`;
  return (0, Xd.jsx)(Ou, {
    headerHeight: `toolbar`,
    beforeList: (0, Xd.jsxs)(Xd.Fragment, {
      children: [
        i &&
          !a &&
          (0, Xd.jsx)(V.div, {
            "aria-hidden": !0,
            className: `pointer-events-none h-full shrink-0`,
            style: { width: o },
          }),
        n,
      ],
    }),
    afterListSticky: t,
    emptyState: r,
    afterList: (0, Xd.jsxs)(Xd.Fragment, {
      children: [
        e,
        (0, Xd.jsx)(Wd, {}),
        (0, Xd.jsx)(V.div, {
          "aria-hidden": !0,
          "data-testid": `right-panel-tab-bar-header-spacer`,
          className: `pointer-events-none flex h-full shrink-0 items-center`,
          style: { width: c },
        }),
      ],
    }),
    controller: Nt,
  });
}
var Xd,
  Zd = e(() => {
    (y(), it(), o(), U(), Jd(), Wt(), Zt(), Iu(), (Xd = q()));
  });
function Qd(e) {
  let { x: t, y: n, width: r, height: i } = e.getBoundingClientRect();
  return r > 0 && i > 0 ? { x: t, y: n, width: r, height: i } : null;
}
var $d,
  ef,
  tf,
  nf = e(() => {
    (it(), vt(), ($d = hn(_n, !1)), (ef = hn(_n, !1)), (tf = hn(_n, null)));
  });
function rf() {
  return Le() && window.electronBridge?.showApplicationMenu != null;
}
var af = e(() => {
  Tn();
});
function of() {
  let e = Mn(),
    [t, n] = (0, sf.useState)(null),
    r = (0, sf.useRef)(0);
  if (!rf()) return null;
  let i = async (e, t) => {
    let i = window.electronBridge?.showApplicationMenu;
    if (!i) return;
    let a = r.current + 1;
    ((r.current = a), n(e));
    let o = t.currentTarget.getBoundingClientRect();
    try {
      await i(e, Math.round(o.left), Math.round(o.bottom));
    } finally {
      r.current === a && n(null);
    }
  };
  return (0, cf.jsx)(`div`, {
    className: `flex items-center gap-0.5 pr-2 pl-1`,
    children: uf.map(({ id: n, message: r }) =>
      (0, cf.jsx)(
        `button`,
        {
          type: `button`,
          "aria-expanded": t === n,
          "aria-haspopup": `menu`,
          "aria-label": e.formatMessage(r),
          className: H(
            `no-drag rounded-md border border-transparent px-2.5 py-1 text-base font-normal leading-none outline-none transition-colors`,
            t === n
              ? `bg-[var(--color-token-menubar-selection-background)] text-[var(--color-token-menubar-selection-foreground)]`
              : `text-token-text-tertiary hover:bg-token-foreground/5 hover:text-token-description-foreground focus-visible:bg-token-foreground/5 focus-visible:text-token-description-foreground`,
          ),
          onClick: (e) => {
            i(n, e);
          },
          children: (0, cf.jsx)(K, { ...r }),
        },
        n,
      ),
    ),
  });
}
var sf,
  cf,
  lf,
  uf,
  df = e(() => {
    (cn(),
      u(),
      (sf = t(W(), 1)),
      Jt(),
      af(),
      (cf = q()),
      (lf = on({
        file: {
          id: `windowsMenuBar.file`,
          defaultMessage: `File`,
          description: `Label for the File menu in the desktop application menu bar`,
        },
        edit: {
          id: `windowsMenuBar.edit`,
          defaultMessage: `Edit`,
          description: `Label for the Edit menu in the desktop application menu bar`,
        },
        view: {
          id: `windowsMenuBar.view`,
          defaultMessage: `View`,
          description: `Label for the View menu in the desktop application menu bar`,
        },
        help: {
          id: `windowsMenuBar.help`,
          defaultMessage: `Help`,
          description: `Label for the Help menu in the desktop application menu bar`,
        },
      })),
      (uf = [
        { id: i.file, message: lf.file },
        { id: i.edit, message: lf.edit },
        { id: i.view, message: lf.view },
        { id: i.help, message: lf.help },
      ]));
  });
function ff(e, t, n, r) {
  if (e.x == null || e.y == null || e.updatedAt == null)
    return {
      x: t,
      y: n,
      hasKnownVelocity: !1,
      updatedAt: r,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  let i = (r - e.updatedAt) / 1e3;
  if (i <= 0)
    return {
      x: t,
      y: n,
      hasKnownVelocity: !1,
      updatedAt: r,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  let a = (t - e.x) / i,
    o = (n - e.y) / i;
  return {
    x: t,
    y: n,
    hasKnownVelocity: !0,
    updatedAt: r,
    velocityX: a,
    velocityY: o,
    speed: Math.hypot(a, o),
  };
}
var pf,
  mf = e(() => {
    pf = {
      x: null,
      y: null,
      hasKnownVelocity: !1,
      updatedAt: null,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  }),
  hf,
  gf,
  _f,
  vf = e(() => {
    (it(),
      vt(),
      mf(),
      (hf = hn(_n, pf)),
      (gf = hn(_n, { width: window.innerWidth, height: window.innerHeight })),
      (_f = {
        px$: De(_n, ({ get: e }) => e(hf).x),
        py$: De(_n, ({ get: e }) => e(hf).y),
        hasKnownVelocity$: De(_n, ({ get: e }) => e(hf).hasKnownVelocity),
        vx$: De(_n, ({ get: e }) => e(hf).velocityX),
        vy$: De(_n, ({ get: e }) => e(hf).velocityY),
        speed$: De(_n, ({ get: e }) => e(hf).speed),
        bottomInset$: De(_n, ({ get: e }) => {
          let { height: t } = e(gf),
            n = e(hf).y;
          return n == null ? null : t - n;
        }),
        rightInset$: De(_n, ({ get: e }) => {
          let { width: t } = e(gf),
            n = e(hf).x;
          return n == null ? null : t - n;
        }),
      }));
  });
function yf(e) {
  let t = (0, wf.c)(50),
    {
      ariaLabel: n,
      edge: r,
      defaultSize: i,
      getCurrentSize: a,
      keyboardStep: o,
      maximumSize: s,
      minimumSize: c,
      onResizeEnd: l,
      onResizingChange: u,
      setSize: d,
    } = e,
    f = r === void 0 ? `right` : r,
    p = o === void 0 ? 10 : o,
    m = Be(),
    [h, g] = (0, Tf.useState)(!1),
    _ = (0, Tf.useRef)(null),
    v = f === `left` || f === `right`,
    y = n != null && c != null && s != null,
    b;
  t[0] === m
    ? (b = t[1])
    : ((b = (e) => ({ x: e.clientX / m, y: e.clientY / m })),
      (t[0] = m),
      (t[1] = b));
  let x = b,
    S;
  t[2] === v
    ? (S = t[3])
    : ((S = (e) => (v ? e.x : e.y)), (t[2] = v), (t[3] = S));
  let C = S,
    w,
    T;
  (t[4] !== f ||
  t[5] !== v ||
  t[6] !== h ||
  t[7] !== s ||
  t[8] !== c ||
  t[9] !== l ||
  t[10] !== u ||
  t[11] !== d ||
  t[12] !== m
    ? ((w = () => {
        if (!h) return;
        let e = (e) => ({ x: e.clientX / m, y: e.clientY / m }),
          t = (t) => {
            t.preventDefault();
            let n = _.current;
            if (n == null) return;
            let r = e(t);
            ((v ? r.x : r.y) !== n.startPosition && (n.didMove = !0),
              d(Sf(bf(f, r, n), c, s)));
          },
          n = (t) => {
            t.preventDefault();
            let n = _.current;
            if (n?.didMove === !0) {
              let r = Sf(bf(f, e(t), n), c, s);
              (d(r), l?.(r));
            }
            ((_.current = null), g(!1), u?.(!1));
          };
        return (
          window.addEventListener(`pointermove`, t),
          window.addEventListener(`pointerup`, n),
          window.addEventListener(`pointercancel`, n),
          () => {
            (window.removeEventListener(`pointermove`, t),
              window.removeEventListener(`pointerup`, n),
              window.removeEventListener(`pointercancel`, n));
          }
        );
      }),
      (T = [f, v, h, s, c, l, u, d, m]),
      (t[4] = f),
      (t[5] = v),
      (t[6] = h),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = m),
      (t[13] = w),
      (t[14] = T))
    : ((w = t[13]), (T = t[14])),
    (0, Tf.useEffect)(w, T));
  let E;
  t[15] !== a || t[16] !== C || t[17] !== x || t[18] !== u
    ? ((E = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (_.current = { didMove: !1, startPosition: C(x(e)), startSize: a() }),
          g(!0),
          u?.(!0));
      }),
      (t[15] = a),
      (t[16] = C),
      (t[17] = x),
      (t[18] = u),
      (t[19] = E))
    : (E = t[19]);
  let D = E,
    O;
  t[20] !== i ||
  t[21] !== s ||
  t[22] !== c ||
  t[23] !== l ||
  t[24] !== u ||
  t[25] !== d
    ? ((O = (e) => {
        if (e.detail !== 2) return;
        (e.preventDefault(), (_.current = null), g(!1), u?.(!1));
        let t = Sf(i, c, s);
        (d(t), l?.(t));
      }),
      (t[20] = i),
      (t[21] = s),
      (t[22] = c),
      (t[23] = l),
      (t[24] = u),
      (t[25] = d),
      (t[26] = O))
    : (O = t[26]);
  let k = O,
    A;
  t[27] !== f ||
  t[28] !== a ||
  t[29] !== p ||
  t[30] !== s ||
  t[31] !== c ||
  t[32] !== l ||
  t[33] !== d
    ? ((A = (e) => {
        let t = xf({
          currentSize: a(),
          edge: f,
          key: e.key,
          keyboardStep: p,
          maximumSize: s,
          minimumSize: c,
        });
        t != null && (e.preventDefault(), e.stopPropagation(), d(t), l?.(t));
      }),
      (t[27] = f),
      (t[28] = a),
      (t[29] = p),
      (t[30] = s),
      (t[31] = c),
      (t[32] = l),
      (t[33] = d),
      (t[34] = A))
    : (A = t[34]);
  let j = A,
    M;
  t[35] !== a || t[36] !== s || t[37] !== c
    ? ((M = Sf(a(), c, s)), (t[35] = a), (t[36] = s), (t[37] = c), (t[38] = M))
    : (M = t[38]);
  let N;
  return (
    t[39] !== n ||
    t[40] !== f ||
    t[41] !== k ||
    t[42] !== j ||
    t[43] !== D ||
    t[44] !== y ||
    t[45] !== h ||
    t[46] !== s ||
    t[47] !== c ||
    t[48] !== M
      ? ((N = (0, Ef.jsx)(Cf, {
          ariaLabel: n,
          currentSize: M,
          edge: f,
          isKeyboardResizable: y,
          isResizing: h,
          maximumSize: s,
          minimumSize: c,
          onClick: k,
          onKeyDown: j,
          onPointerDown: D,
        })),
        (t[39] = n),
        (t[40] = f),
        (t[41] = k),
        (t[42] = j),
        (t[43] = D),
        (t[44] = y),
        (t[45] = h),
        (t[46] = s),
        (t[47] = c),
        (t[48] = M),
        (t[49] = N))
      : (N = t[49]),
    N
  );
}
function bf(e, t, n) {
  let r = (e === `left` || e === `right` ? t.x : t.y) - n.startPosition;
  switch (e) {
    case `bottom`:
    case `right`:
      return n.startSize + r;
    case `left`:
    case `top`:
      return n.startSize - r;
  }
}
function xf({
  currentSize: e,
  edge: t,
  key: n,
  keyboardStep: r,
  maximumSize: i,
  minimumSize: a,
}) {
  if (n === `Home`) return a ?? null;
  if (n === `End`) return i ?? null;
  let o;
  if (t === `left` || t === `right`)
    if (n === `ArrowLeft`) o = t === `left` ? r : -r;
    else if (n === `ArrowRight`) o = t === `right` ? r : -r;
    else return null;
  else if (n === `ArrowUp`) o = t === `top` ? r : -r;
  else if (n === `ArrowDown`) o = t === `bottom` ? r : -r;
  else return null;
  return Sf(e + o, a, i);
}
function Sf(e, t, n) {
  return Math.min(Math.max(e, t ?? -1 / 0), n ?? 1 / 0);
}
function Cf(e) {
  let t = (0, wf.c)(25),
    {
      ariaLabel: n,
      currentSize: r,
      edge: i,
      isKeyboardResizable: a,
      isResizing: o,
      maximumSize: s,
      minimumSize: c,
      onClick: l,
      onKeyDown: u,
      onPointerDown: d,
    } = e,
    f = a ? n : void 0,
    p = i === `left` || i === `right` ? `vertical` : `horizontal`,
    m = a ? s : void 0,
    h = a ? c : void 0,
    g = a ? r : void 0,
    _ = i === `left` ? `z-40` : `z-20`,
    v = i === `right` && `-top-toolbar right-0 bottom-0 w-4 translate-x-2`,
    y = i === `left` && `top-0 bottom-0 left-0 w-4 -translate-x-2`,
    b = i === `top` && `top-0 right-0 left-0 h-4 -translate-y-2`,
    x = i === `bottom` && `right-0 bottom-0 left-0 h-4 translate-y-2`,
    S =
      i === `left` || i === `right`
        ? `cursor-col-resize active:cursor-col-resize`
        : `cursor-row-resize active:cursor-row-resize`,
    C =
      a &&
      `focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:ring-inset`,
    w;
  t[0] !== x ||
  t[1] !== S ||
  t[2] !== C ||
  t[3] !== _ ||
  t[4] !== v ||
  t[5] !== y ||
  t[6] !== b
    ? ((w = H(
        `group absolute flex touch-none select-none focus:outline-none`,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
      )),
      (t[0] = x),
      (t[1] = S),
      (t[2] = C),
      (t[3] = _),
      (t[4] = v),
      (t[5] = y),
      (t[6] = b),
      (t[7] = w))
    : (w = t[7]);
  let T = a ? u : void 0,
    E = a ? 0 : void 0,
    D =
      i === `left` || i === `right`
        ? `h-full w-px bg-gradient-to-b from-transparent via-token-foreground/25 to-transparent`
        : `h-px w-full bg-gradient-to-r from-transparent via-token-foreground/25 to-transparent`,
    O = o
      ? `opacity-100`
      : `group-hover:opacity-100 group-active:opacity-100 group-focus-visible:opacity-100`,
    k;
  t[8] !== D || t[9] !== O
    ? ((k = H(
        `sidebar-resize-handle-line pointer-events-none m-auto opacity-0`,
        D,
        O,
      )),
      (t[8] = D),
      (t[9] = O),
      (t[10] = k))
    : (k = t[10]);
  let A;
  t[11] === k
    ? (A = t[12])
    : ((A = (0, Ef.jsx)(`div`, { className: k })), (t[11] = k), (t[12] = A));
  let j;
  return (
    t[13] !== l ||
    t[14] !== d ||
    t[15] !== f ||
    t[16] !== w ||
    t[17] !== T ||
    t[18] !== E ||
    t[19] !== A ||
    t[20] !== p ||
    t[21] !== m ||
    t[22] !== h ||
    t[23] !== g
      ? ((j = (0, Ef.jsx)(`div`, {
          role: `separator`,
          "aria-label": f,
          "aria-orientation": p,
          "aria-valuemax": m,
          "aria-valuemin": h,
          "aria-valuenow": g,
          className: w,
          onClick: l,
          onKeyDown: T,
          onPointerDown: d,
          tabIndex: E,
          children: A,
        })),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f),
        (t[16] = w),
        (t[17] = T),
        (t[18] = E),
        (t[19] = A),
        (t[20] = p),
        (t[21] = m),
        (t[22] = h),
        (t[23] = g),
        (t[24] = j))
      : (j = t[24]),
    j
  );
}
var wf,
  Tf,
  Ef,
  Df = e(() => {
    ((wf = z()), cn(), (Tf = t(W(), 1)), Ke(), (Ef = q()));
  }),
  Of,
  kf,
  Af = e(() => {
    (t(W()),
      (Of = q()),
      (kf = (e) =>
        (0, Of.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Of.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M8.66699 2.2666C8.95679 2.26678 9.19141 2.50215 9.19141 2.79199C9.19123 3.08169 8.95669 3.31721 8.66699 3.31738H6.52539V12.6006H11.667C12.6655 12.6004 13.4744 11.7905 13.4746 10.792V7.95898C13.4746 7.66903 13.7101 7.43359 14 7.43359C14.2899 7.43359 14.5254 7.66903 14.5254 7.95898V10.792C14.5252 12.3704 13.2453 13.6502 11.667 13.6504H4.33301C2.75465 13.6502 1.47478 12.3704 1.47461 10.792V5.125C1.47479 3.54664 2.75465 2.26678 4.33301 2.2666H8.66699ZM4.33301 3.31738C3.33455 3.31756 2.52557 4.12654 2.52539 5.125V10.792C2.52556 11.7905 3.33455 12.6004 4.33301 12.6006H5.47461V3.31738H4.33301Z`,
              fill: `currentColor`,
            }),
            (0, Of.jsx)(`path`, {
              d: `M16.0001 2.66667C16.0001 4.13943 14.8062 5.33333 13.3334 5.33333C11.8607 5.33333 10.6667 4.13943 10.6667 2.66667C10.6667 1.19391 11.8607 0 13.3334 0C14.8062 0 16.0001 1.19391 16.0001 2.66667Z`,
              fill: `var(--vscode-textLink-foreground)`,
            }),
          ],
        })));
  }),
  jf,
  Mf,
  Nf = e(() => {
    (t(W()),
      (jf = q()),
      (Mf = (e) =>
        (0, jf.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, jf.jsx)(`path`, {
            d: `M16.835 8.66301C16.835 7.71885 16.8347 7.05065 16.792 6.52824C16.7605 6.14232 16.7073 5.86904 16.6299 5.65227L16.5439 5.45207C16.32 5.01264 15.9796 4.64498 15.5615 4.3886L15.3779 4.28606C15.1308 4.16013 14.8165 4.08006 14.3018 4.03801C13.7794 3.99533 13.1112 3.99504 12.167 3.99504H7.83301C6.88885 3.99504 6.22065 3.99533 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.22065 15.9947 6.88885 15.995 7.83301 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.538L16.6299 14.3378C16.7074 14.121 16.7605 13.8478 16.792 13.4618C16.8347 12.9394 16.835 12.2712 16.835 11.3271V8.66301ZM5.00195 13.3329V6.66692C5.00195 6.29965 5.29972 6.00188 5.66699 6.00188C6.03412 6.00204 6.33203 6.29975 6.33203 6.66692V13.3329C6.33203 13.7001 6.03412 13.9978 5.66699 13.998C5.29972 13.998 5.00195 13.7002 5.00195 13.3329ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  Pf,
  Ff,
  If = e(() => {
    (t(W()),
      (Pf = q()),
      (Ff = (e) =>
        (0, Pf.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Pf.jsx)(`path`, {
            d: `M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.538L16.6299 14.3378C16.7074 14.121 16.7605 13.8478 16.792 13.4618C16.8347 12.9394 16.835 12.2712 16.835 11.3271V8.66301C16.835 7.71885 16.8347 7.05065 16.792 6.52824C16.7605 6.14232 16.7073 5.86904 16.6299 5.65227L16.5439 5.45207C16.32 5.01264 15.9796 4.64498 15.5615 4.3886L15.3779 4.28606C15.1308 4.16013 14.8165 4.08006 14.3018 4.03801C13.7794 3.99533 13.1112 3.99504 12.167 3.99504H8.16406C8.16407 3.99667 8.16504 3.99829 8.16504 3.99992L8.16406 15.995Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  Lf,
  Rf = e(() => {
    (it(),
      vt(),
      j(),
      _t(),
      Rt(),
      at(),
      (Lf = De(_n, ({ get: e }) => {
        let { automationThreadIds: t, unreadRunCount: n } = e(kn);
        return (
          n +
          e(wn).filter((n) => {
            let r = an(n),
              i = r == null ? null : e(We, r);
            return i == null || !t.has(i);
          }).length
        );
      })));
  });
function zf(e) {
  let t = (0, Uf.c)(45),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { hideUnreadBadge: r, onToggleSidebar: i } = n,
    a = r === void 0 ? !1 : r,
    o = Pe(_n),
    s = Mn(),
    c = _(Ue),
    l = _(Lf),
    u = _($d),
    d = _(ef),
    f = Dn(Pd, `toggleSidebar`),
    p = Dn(Pd, `navigateBack`),
    m = Dn(Pd, `navigateForward`),
    h;
  t[2] !== s || t[3] !== c
    ? ((h = c
        ? s.formatMessage({
            id: `app.sidebar.hide`,
            defaultMessage: `Hide sidebar`,
            description: `Accessible label to collapse the sidebar chrome`,
          })
        : s.formatMessage({
            id: `app.sidebar.show`,
            defaultMessage: `Show sidebar`,
            description: `Accessible label to expand the sidebar chrome`,
          })),
      (t[2] = s),
      (t[3] = c),
      (t[4] = h))
    : (h = t[4]);
  let g = h,
    v = c ? Ff : Mf;
  !a && !c && l > 0 && (v = kf);
  let y, b;
  (t[5] === o
    ? ((y = t[6]), (b = t[7]))
    : ((y = () => () => {
        o.set(I, !1);
      }),
      (b = [o]),
      (t[5] = o),
      (t[6] = y),
      (t[7] = b)),
    (0, Wf.useEffect)(y, b));
  let x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Gf.jsx)(K, {
        id: `app.sidebar.tooltip`,
        defaultMessage: `Toggle sidebar`,
        description: `Tooltip for the sidebar trigger button`,
      })),
      (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] === i
    ? (S = t[10])
    : ((S = () => {
        if (i != null) {
          i();
          return;
        }
        Lt(`toggleSidebar`, `sidebar_trigger`);
      }),
      (t[9] = i),
      (t[10] = S));
  let C, w;
  t[11] === o
    ? ((C = t[12]), (w = t[13]))
    : ((C = () => {
        o.set(I, !0);
      }),
      (w = () => {
        o.set(I, !1);
      }),
      (t[11] = o),
      (t[12] = C),
      (t[13] = w));
  let T;
  t[14] === v
    ? (T = t[15])
    : ((T = (0, Gf.jsx)(v, { className: `icon-xs` })),
      (t[14] = v),
      (t[15] = T));
  let E;
  t[16] !== g ||
  t[17] !== T ||
  t[18] !== S ||
  t[19] !== C ||
  t[20] !== w ||
  t[21] !== f
    ? ((E = (0, Gf.jsx)(Hf, {
        ariaLabel: g,
        shortcut: f,
        tooltipContent: x,
        viewTransitionName: `sidebar-trigger`,
        isSidebarTrigger: !0,
        onClick: S,
        onPointerEnter: C,
        onPointerLeave: w,
        children: T,
      })),
      (t[16] = g),
      (t[17] = T),
      (t[18] = S),
      (t[19] = C),
      (t[20] = w),
      (t[21] = f),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] === s
    ? (D = t[24])
    : ((D = s.formatMessage(Kf.navigateBack)), (t[23] = s), (t[24] = D));
  let O = !u,
    k;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Gf.jsx)(K, { ...Kf.navigateBack })), (t[25] = k))
    : (k = t[25]);
  let A;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Gf.jsx)(bn, { className: `icon-xs` })), (t[26] = A))
    : (A = t[26]);
  let j;
  t[27] !== p || t[28] !== D || t[29] !== O
    ? ((j = (0, Gf.jsx)(Hf, {
        ariaLabel: D,
        disabled: O,
        shortcut: p,
        tooltipContent: k,
        onClick: Vf,
        children: A,
      })),
      (t[27] = p),
      (t[28] = D),
      (t[29] = O),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] === s
    ? (M = t[32])
    : ((M = s.formatMessage(Kf.navigateForward)), (t[31] = s), (t[32] = M));
  let N = !d,
    P;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Gf.jsx)(K, { ...Kf.navigateForward })), (t[33] = P))
    : (P = t[33]);
  let F;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Gf.jsx)(bn, { className: `icon-xs -scale-x-100` })),
      (t[34] = F))
    : (F = t[34]);
  let ee;
  t[35] !== m || t[36] !== M || t[37] !== N
    ? ((ee = (0, Gf.jsx)(Hf, {
        ariaLabel: M,
        disabled: N,
        shortcut: m,
        tooltipContent: P,
        onClick: Bf,
        children: F,
      })),
      (t[35] = m),
      (t[36] = M),
      (t[37] = N),
      (t[38] = ee))
    : (ee = t[38]);
  let L;
  t[39] !== j || t[40] !== ee
    ? ((L = (0, Gf.jsx)(yt, {
        electron: !0,
        extension: !0,
        children: (0, Gf.jsxs)(Gf.Fragment, { children: [j, ee] }),
      })),
      (t[39] = j),
      (t[40] = ee),
      (t[41] = L))
    : (L = t[41]);
  let R;
  return (
    t[42] !== E || t[43] !== L
      ? ((R = (0, Gf.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [E, L],
        })),
        (t[42] = E),
        (t[43] = L),
        (t[44] = R))
      : (R = t[44]),
    R
  );
}
function Bf() {
  Lt(`navigateForward`, `sidebar_forward`);
}
function Vf() {
  Lt(`navigateBack`, `sidebar_back`);
}
function Hf(e) {
  let t = (0, Uf.c)(15),
    {
      ariaLabel: n,
      children: r,
      disabled: i,
      isSidebarTrigger: a,
      onClick: o,
      onPointerEnter: s,
      onPointerLeave: c,
      shortcut: l,
      tooltipContent: u,
      viewTransitionName: d,
    } = e,
    f = i === void 0 ? !1 : i,
    p = (a === void 0 ? !1 : a) || void 0,
    m;
  t[0] === d
    ? (m = t[1])
    : ((m = d == null ? void 0 : { viewTransitionName: d }),
      (t[0] = d),
      (t[1] = m));
  let h;
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== f ||
  t[5] !== o ||
  t[6] !== s ||
  t[7] !== c ||
  t[8] !== p ||
  t[9] !== m
    ? ((h = (0, Gf.jsx)(me, {
        "aria-label": n,
        "data-app-shell-sidebar-trigger": p,
        color: `ghost`,
        disabled: f,
        style: m,
        size: `toolbar`,
        uniform: !0,
        onClick: o,
        onPointerEnter: s,
        onPointerLeave: c,
        children: r,
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = f),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g;
  return (
    t[11] !== l || t[12] !== h || t[13] !== u
      ? ((g = (0, Gf.jsx)(b, { tooltipContent: u, shortcut: l, children: h })),
        (t[11] = l),
        (t[12] = h),
        (t[13] = u),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
var Uf,
  Wf,
  Gf,
  Kf,
  qf = e(() => {
    ((Uf = z()),
      it(),
      (Wf = t(W(), 1)),
      Jt(),
      Ld(),
      pn(),
      ve(),
      Kt(),
      $t(),
      Af(),
      Nf(),
      If(),
      nf(),
      Rf(),
      vt(),
      Ht(),
      o(),
      (Gf = q()),
      (Kf = on({
        navigateBack: {
          id: `codex.command.navigateBack`,
          defaultMessage: `Back`,
          description: `Command menu item to navigate back`,
        },
        navigateForward: {
          id: `codex.command.navigateForward`,
          defaultMessage: `Forward`,
          description: `Command menu item to navigate forward`,
        },
      })));
  });
function Jf(e, t) {
  let n = (0, Yf.c)(6),
    r;
  n[0] !== e || n[1] !== t
    ? ((r = () => {
        tn(e, !e.get(Ue), { animate: t });
      }),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r))
    : (r = n[2]);
  let i = r;
  yn(`toggleSidebar`, i);
  let a;
  (n[3] !== e || n[4] !== t
    ? ((a = [e, t]), (n[3] = e), (n[4] = t), (n[5] = a))
    : (a = n[5]),
    At(`toggle-sidebar`, i, a));
}
var Yf,
  Xf = e(() => {
    ((Yf = z()), wt(), qt(), o());
  });
function Zf(e) {
  let t = op.exec(e);
  if (!t) return ap.mac.modern;
  let n = Number.parseInt(t[1] ?? ``, 10),
    r = Number.parseInt(t[2] ?? ``, 10);
  return Number.isNaN(n) || Number.isNaN(r)
    ? ap.mac.modern
    : n === 10 && r <= 15
      ? ap.mac.legacy
      : ap.mac.modern;
}
function Qf() {
  if (typeof window > `u` || typeof navigator > `u`) return null;
  let e = navigator.windowControlsOverlay;
  if (!e?.visible) return null;
  let t = e.getTitlebarAreaRect();
  return {
    left: Math.max(0, Math.round(t.x)),
    right: Math.max(0, Math.round(window.innerWidth - (t.x + t.width))),
  };
}
function $f(e, t) {
  if (e) return ap.default;
  if (Le()) return t ?? ap.applicationMenu;
  if (typeof navigator > `u`) return ap.default;
  let n = navigator,
    r = (n.userAgent ?? ``).toLowerCase(),
    i =
      n.userAgentData?.platform?.toLowerCase() ??
      n.platform?.toLowerCase() ??
      r;
  return i.includes(`darwin`) ||
    i.includes(`mac`) ||
    r.includes(`mac os x`) ||
    r.includes(`macintosh`)
    ? Zf(r)
    : i.includes(`win`) || r.includes(`windows`) || i.includes(`linux`)
      ? (t ?? ap.applicationMenu)
      : ap.default;
}
function ep() {
  let e = (0, np.c)(9),
    [t, n] = (0, rp.useState)(!1),
    [r, i] = (0, rp.useState)(tp),
    a,
    o;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (e) => {
        n(e.isFullScreen);
      }),
      (o = []),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1])),
    At(`window-fullscreen-changed`, a, o));
  let s, c;
  (e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = () => {
        if (typeof window > `u`) {
          i(null);
          return;
        }
        let e = navigator.windowControlsOverlay;
        if (!e) {
          i(null);
          return;
        }
        let t = () => {
          i(Qf());
        };
        return (
          t(),
          e.addEventListener(`geometrychange`, t),
          window.addEventListener(`resize`, t),
          () => {
            (e.removeEventListener(`geometrychange`, t),
              window.removeEventListener(`resize`, t));
          }
        );
      }),
      (c = []),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3])),
    (0, rp.useEffect)(s, c));
  let l, u;
  (e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = () => {
        let e = window.matchMedia(`(display-mode: fullscreen)`);
        n(e.matches);
        let t = (e) => {
          n(e.matches);
        };
        return (
          e.addEventListener(`change`, t),
          () => {
            e.removeEventListener(`change`, t);
          }
        );
      }),
      (u = []),
      (e[4] = l),
      (e[5] = u))
    : ((l = e[4]), (u = e[5])),
    (0, rp.useEffect)(l, u));
  let d;
  return (
    e[6] !== t || e[7] !== r
      ? ((d = $f(t, r)), (e[6] = t), (e[7] = r), (e[8] = d))
      : (d = e[8]),
    d
  );
}
function tp() {
  return Qf();
}
var np,
  rp,
  ip,
  ap,
  op,
  sp = e(() => {
    ((np = z()),
      (rp = t(W(), 1)),
      Tn(),
      qt(),
      (ip = 16),
      (ap = Object.freeze({
        default: Object.freeze({ left: 0, right: 0 }),
        mac: Object.freeze({
          legacy: Object.freeze({ left: 66 + ip, right: 0 }),
          modern: Object.freeze({ left: 76 + ip, right: 0 }),
        }),
        applicationMenu: Object.freeze({ left: 0, right: 0 }),
      })),
      (op = /mac os x (\d+)[_.](\d+)/i));
  });
function cp(e, t) {
  return Number.isFinite(e) ? Math.max(160, Math.min(e, t * 0.5)) : dp;
}
function lp(e) {
  return cp(r(fp, 280), e);
}
function up(e, t) {
  dt(fp, cp(e, t));
}
var dp,
  fp,
  pp = e(() => {
    (St(), (dp = 280), (fp = `app-shell:bottom-panel-height`));
  });
function mp(e) {
  let t = (0, _p.c)(10),
    { size: n, animation: r, isVisible: i } = e,
    [, a] = (0, vp.useState)(0),
    o;
  (t[0] !== r || t[1] !== a
    ? ((o = () => {
        r.get() > 0 || a(gp);
      }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]),
    D(r, `animationComplete`, o));
  let s;
  t[3] !== r || t[4] !== n
    ? ((s = [r, n]), (t[3] = r), (t[4] = n), (t[5] = s))
    : (s = t[5]);
  let c = G(s, hp),
    l = i || r.get() > 0,
    u;
  return (
    t[6] !== c || t[7] !== r || t[8] !== l
      ? ((u = { isMounted: l, animatedSize: c, opacity: r, progress: r }),
        (t[6] = c),
        (t[7] = r),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function hp(e) {
  let [t, n] = e;
  return Math.max(0, Math.min(1, t)) * n;
}
function gp(e) {
  return e + 1;
}
var _p,
  vp,
  yp = e(() => {
    ((_p = z()), y(), (vp = t(W(), 1)));
  });
function bp({
  bottomPanelHeight: e,
  children: t,
  clampedBottomPanelHeight: n,
  mainContentHeight: r,
  isVisible: i = !1,
}) {
  let a = Pe(f),
    {
      isMounted: o,
      opacity: s,
      animatedSize: c,
    } = mp({ animation: _(A), size: n, isVisible: i }),
    l = ge`${n}px`;
  return !o && !i
    ? null
    : (0, xp.jsxs)(V.div, {
        "data-app-shell-focus-area": `bottom-panel`,
        className: `relative z-30 min-h-0 w-full shrink-0 overflow-visible`,
        style: { opacity: s, height: c },
        transition: L,
        children: [
          (0, xp.jsx)(yf, {
            defaultSize: 280,
            edge: `top`,
            getCurrentSize: () => n.get(),
            setSize: (t) => {
              if (t < F(160)) {
                Qt(a, !1);
                return;
              }
              e.set(cp(t, r.get()));
            },
            onResizeEnd: (e) => {
              e < F(160) || up(cp(e, r.get()), r.get());
            },
          }),
          (0, xp.jsx)(`div`, {
            className: `absolute inset-0 min-h-0 overflow-hidden`,
            children: (0, xp.jsx)(V.div, {
              className: `absolute inset-x-0 top-0 min-h-0 border-t border-token-border-default bg-token-main-surface-primary`,
              style: { height: l },
              children: (0, xp.jsx)(`div`, {
                className: `h-full min-h-0 overflow-hidden [contain:layout_paint]`,
                children: t,
              }),
            }),
          }),
        ],
      });
}
var xp,
  Sp = e(() => {
    (y(), it(), Ye(), o(), Df(), pp(), U(), yp(), (xp = q()));
  }),
  Cp,
  wp,
  Tp,
  Ep = e(() => {
    ((Cp = t(W(), 1)),
      (wp = (0, Cp.createContext)(null)),
      (Tp = (0, Cp.createContext)(null)));
  });
function Dp() {
  let e = (0, Mp.c)(35),
    t = Pe(f),
    n = _(kt.activeTab$),
    r = _(ue),
    i = _(Yt),
    a = _(ot),
    o = _(Nt.activeTab$),
    s = (0, Np.useSyncExternalStore)(rn, mn, mn),
    l = _(g),
    u,
    d,
    p,
    m;
  if (e[0] !== n || e[1] !== o || e[2] !== t) {
    let r = he(t);
    ((d = r != null),
      (p = t.value.routeKind === `home`),
      (u = jp(n, r)),
      (m = jp(o, r)),
      (e[0] = n),
      (e[1] = o),
      (e[2] = t),
      (e[3] = u),
      (e[4] = d),
      (e[5] = p),
      (e[6] = m));
  } else ((u = e[3]), (d = e[4]), (p = e[5]), (m = e[6]));
  let h = m,
    v = l && ((o?.isClosable ?? !1) || h != null),
    y = r && ((n?.isClosable ?? !1) || u != null),
    b;
  e[7] === u
    ? (b = e[8])
    : ((b = () =>
        u == null ? null : Jc.getSnapshot(u.conversationId, u.browserTabId)),
      (e[7] = u),
      (e[8] = b));
  let x = b,
    S;
  e[9] === h
    ? (S = e[10])
    : ((S = () =>
        h == null ? null : Jc.getSnapshot(h.conversationId, h.browserTabId)),
      (e[9] = h),
      (e[10] = S));
  let C = S,
    w = (0, Np.useSyncExternalStore)(Jc.subscribe, x, x),
    T = (0, Np.useSyncExternalStore)(Jc.subscribe, C, C),
    E = w?.tabType === c.WEB,
    D = T?.tabType === c.WEB,
    O = u?.conversationId ?? null,
    k = u?.browserTabId ?? null,
    A = h?.conversationId ?? null,
    j = h?.browserTabId ?? null,
    M,
    N;
  (e[11] !== E ||
  e[12] !== O ||
  e[13] !== k ||
  e[14] !== y ||
  e[15] !== d ||
  e[16] !== i ||
  e[17] !== s ||
  e[18] !== p ||
  e[19] !== D ||
  e[20] !== A ||
  e[21] !== j ||
  e[22] !== v ||
  e[23] !== a
    ? ((M = () => {
        Mt.dispatchMessage(`app-shell-shortcut-state-changed`, {
          bottomPanelBrowserCanZoom: E,
          bottomPanelBrowserConversationId: O,
          bottomPanelBrowserTabId: k,
          canAcceptAppshotShortcut: d,
          bottomPanelCanCloseActiveTab: y,
          focusArea: i,
          imagePreviewOpen: s,
          isNewChatRoute: p,
          terminalFocused: a,
          rightPanelBrowserCanZoom: D,
          rightPanelBrowserConversationId: A,
          rightPanelBrowserTabId: j,
          rightPanelCanCloseActiveTab: v,
        });
      }),
      (N = [E, O, k, d, y, i, s, p, D, A, j, a, v]),
      (e[11] = E),
      (e[12] = O),
      (e[13] = k),
      (e[14] = y),
      (e[15] = d),
      (e[16] = i),
      (e[17] = s),
      (e[18] = p),
      (e[19] = D),
      (e[20] = A),
      (e[21] = j),
      (e[22] = v),
      (e[23] = a),
      (e[24] = M),
      (e[25] = N))
    : ((M = e[24]), (N = e[25])),
    (0, Np.useLayoutEffect)(M, N));
  let P;
  (e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = []), (e[26] = P))
    : (P = e[26]),
    (0, Np.useEffect)(kp, P));
  let F;
  (e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = []), (e[27] = F))
    : (F = e[27]),
    At(`image-preview-zoom-command`, Op, F));
  let I, ee;
  return (
    e[28] !== n || e[29] !== u || e[30] !== o || e[31] !== h || e[32] !== t
      ? ((I = (e) => {
          let { panelId: r } = e;
          bb95: switch (r) {
            case `bottom`:
              if (kt.closeActiveTab(t)) break bb95;
              u != null && n != null && kt.closeTab(t, n.tabId);
              break bb95;
            case `right`:
              if (Nt.closeActiveTab(t)) break bb95;
              h != null && o != null && Nt.closeTab(t, o.tabId);
          }
        }),
        (ee = [n, u, o, h, t]),
        (e[28] = n),
        (e[29] = u),
        (e[30] = o),
        (e[31] = h),
        (e[32] = t),
        (e[33] = I),
        (e[34] = ee))
      : ((I = e[33]), (ee = e[34])),
    At(`close-active-app-shell-tab`, I, ee),
    null
  );
}
function Op(e) {
  let { command: t } = e;
  pt(t);
}
function kp() {
  return Ap;
}
function Ap() {
  Mt.dispatchMessage(`app-shell-shortcut-state-changed`, {
    bottomPanelBrowserCanZoom: !1,
    bottomPanelBrowserConversationId: null,
    bottomPanelBrowserTabId: null,
    canAcceptAppshotShortcut: !1,
    bottomPanelCanCloseActiveTab: !1,
    focusArea: `main`,
    imagePreviewOpen: !1,
    isNewChatRoute: !1,
    terminalFocused: !1,
    rightPanelBrowserCanZoom: !1,
    rightPanelBrowserConversationId: null,
    rightPanelBrowserTabId: null,
    rightPanelCanCloseActiveTab: !1,
  });
}
function jp(e, t) {
  let n = E(e, t);
  return n == null || t == null ? null : { browserTabId: n, conversationId: t };
}
var Mp,
  Np,
  Pp = e(() => {
    ((Mp = z()),
      it(),
      u(),
      (Np = t(W(), 1)),
      Yc(),
      o(),
      zt(),
      qt(),
      Ye(),
      B(),
      Wt(),
      Zt());
  });
function Fp({ isHeaderEdgeScroll: e, isApplicationMenuBarEnabled: t }) {
  let {
      headerLeftWidth: n,
      headerRightWidth: r,
      leftPanelAnimatedWidth: i,
      rightPanelAnimatedWidth: a,
    } = ln(),
    o = Se(0),
    s = ge`${i}px`,
    c = ge`${a}px`,
    l = _(Fe),
    u = _(En),
    f = _(w),
    p = _(S),
    m = _(xe),
    h = _(d),
    g = u.filter(({ align: e }) => e === `start`),
    v = u.filter(({ align: e }) => e === `center`),
    y = u.filter(({ align: e }) => e === `end`),
    b = g.length > 0,
    x = v.length > 0,
    C = y.length > 0,
    T = m.length > 0;
  return (0, Gp.jsx)(Ie, {
    items: f,
    children: (0, Gp.jsxs)(V.header, {
      "data-app-shell-header-edge-scroll": e,
      className: H(
        `app-header-tint draggable pointer-events-none fixed z-30 flex h-toolbar min-w-0 items-center`,
        t ? `right-0` : `inset-x-0`,
        t ? `top-toolbar-sm` : `top-0`,
      ),
      style: t ? { left: s } : {},
      children: [
        (0, Gp.jsx)(Ip, {
          entries: p,
          fitWidth: n,
          slotWidth: t ? o : i,
          side: `start`,
        }),
        (0, Gp.jsxs)(`div`, {
          "aria-hidden": h,
          "data-testid": `app-shell-header-context-menu-surface`,
          className: H(
            `pointer-events-none relative ms-2 flex h-full min-w-0 flex-1 isolate items-center gap-1.5 overflow-hidden [contain:layout_paint]`,
            h && `invisible`,
            T ? `pe-1.5` : `pe-2`,
          ),
          children: [
            l != null &&
              (0, Gp.jsx)(`div`, {
                className: H(`pointer-events-none w-full min-w-0 flex-1`, Kp),
                children: l,
              }),
            b &&
              (0, Gp.jsx)(`div`, {
                className: `flex shrink-0 items-center gap-1.5`,
                children: g.map(({ actionId: e, node: t }) =>
                  (0, Gp.jsx)(
                    `div`,
                    {
                      className: `no-drag pointer-events-auto flex shrink-0 items-center`,
                      children: t,
                    },
                    e,
                  ),
                ),
              }),
            C &&
              (0, Gp.jsx)(`div`, {
                className: `ms-auto flex shrink-0 items-center gap-1.5`,
                children: y.map(({ actionId: e, node: t }) =>
                  (0, Gp.jsx)(
                    `div`,
                    {
                      className: `no-drag pointer-events-auto flex shrink-0 items-center`,
                      children: t,
                    },
                    e,
                  ),
                ),
              }),
          ],
        }),
        x
          ? (0, Gp.jsxs)(`div`, {
              className: `pointer-events-none fixed inset-x-0 top-[inherit] flex h-toolbar`,
              children: [
                (0, Gp.jsx)(V.div, {
                  "aria-hidden": !0,
                  className: `h-full shrink-0`,
                  style: { width: i },
                }),
                (0, Gp.jsx)(`div`, {
                  className: `flex min-w-0 flex-1 items-center justify-center gap-1.5`,
                  children: v.map(({ actionId: e, node: t }) =>
                    (0, Gp.jsx)(
                      `div`,
                      {
                        className: `no-drag pointer-events-auto flex shrink-0 items-center`,
                        children: t,
                      },
                      e,
                    ),
                  ),
                }),
                (0, Gp.jsx)(V.div, {
                  "aria-hidden": !0,
                  className: `h-full shrink-0`,
                  style: { width: a },
                }),
              ],
            })
          : null,
        (0, Gp.jsx)(Ip, { entries: m, fitWidth: r, slotWidth: c, side: `end` }),
      ],
    }),
  });
}
function Ip({ entries: e, fitWidth: t, side: n, slotWidth: r }) {
  let i = e.some(({ align: e }) => e === `end`),
    a = H({
      "ps-[max(var(--spacing-token-safe-header-left),0.5rem)]": n === `start`,
      "pe-2": (n === `start` && i) || n === `end`,
    }),
    o = mo((e) => {
      let { width: n } = zn(e);
      t.set(n);
    });
  return (0, Gp.jsxs)(Gp.Fragment, {
    children: [
      (0, Gp.jsx)(`div`, {
        "aria-hidden": !0,
        className: H(
          `invisible pointer-events-none fixed top-0 left-0 min-w-max [&_*]:![view-transition-name:none]`,
          !!e.length && a,
        ),
        ref: o,
        children: (0, Gp.jsx)(Lp, { entries: e }),
      }),
      (0, Gp.jsx)(V.div, {
        "data-test-id": `header-shell-slot`,
        className: H(
          `pointer-events-none relative h-full shrink-0 [container-type:inline-size]`,
          !!e.length && a,
        ),
        style: { width: r, minWidth: ge`${t}px` },
        children: (0, Gp.jsx)(Lp, { entries: e, fillSlot: !0 }),
      }),
    ],
  });
}
function Lp(e) {
  let t = (0, Wp.c)(13),
    { entries: n, fillSlot: r } = e,
    i = r === void 0 ? !1 : r,
    a,
    o,
    s,
    c;
  if (t[0] !== n || t[1] !== i) {
    let e = n.filter(Up),
      r = n.filter(Hp),
      l = n.filter(Vp),
      u = i
        ? `pointer-events-none w-full`
        : `no-drag pointer-events-auto w-auto`;
    (t[6] === u
      ? (a = t[7])
      : ((a = H(`inline-flex h-full items-center gap-1.5`, u)),
        (t[6] = u),
        (t[7] = a)),
      (o = e.map(Bp)),
      (s =
        r.length > 0
          ? (0, Gp.jsx)(`div`, {
              className: `mx-auto flex shrink-0 items-center gap-1.5`,
              children: r.map(zp),
            })
          : null),
      (c = l.map(Rp)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c));
  } else ((a = t[2]), (o = t[3]), (s = t[4]), (c = t[5]));
  let l;
  return (
    t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== c
      ? ((l = (0, Gp.jsxs)(`div`, { className: a, children: [o, s, c] })),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function Rp(e, t) {
  let { actionId: n, node: r } = e;
  return (0, Gp.jsx)(
    `div`,
    {
      className: H(
        `no-drag pointer-events-auto flex shrink-0 items-center`,
        t === 0 && `ms-auto`,
      ),
      children: r,
    },
    n,
  );
}
function zp(e) {
  let { actionId: t, node: n } = e;
  return (0, Gp.jsx)(
    `div`,
    {
      className: `no-drag pointer-events-auto flex shrink-0 items-center`,
      children: n,
    },
    t,
  );
}
function Bp(e) {
  let { actionId: t, node: n } = e;
  return (0, Gp.jsx)(
    `div`,
    {
      className: `no-drag pointer-events-auto flex shrink-0 items-center`,
      children: n,
    },
    t,
  );
}
function Vp(e) {
  let { align: t } = e;
  return t === `end`;
}
function Hp(e) {
  let { align: t } = e;
  return t === `center`;
}
function Up(e) {
  let { align: t } = e;
  return t === `start`;
}
var Wp,
  Gp,
  Kp,
  qp = e(() => {
    ((Wp = z()),
      cn(),
      y(),
      it(),
      C(),
      Bn(),
      yo(),
      U(),
      Wt(),
      (Gp = q()),
      (Kp = `[&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto`));
  });
function Jp({
  children: e,
  isResizing: t,
  onResizingChange: n,
  paddingTop: r,
}) {
  let i = Pe(_n),
    { leftPanelAnimatedWidth: a, leftPanelWidth: o } = ln(),
    s = ge`${o}px`;
  return (0, Yp.jsxs)(V.aside, {
    className: H(
      `app-shell-left-panel pointer-events-auto relative flex overflow-visible browser:bg-token-main-surface-primary`,
      t && `cursor-col-resize`,
    ),
    style: { width: a, paddingTop: r },
    children: [
      (0, Yp.jsx)(V.div, {
        className: `max-w-full overflow-hidden`,
        style: { minWidth: s, width: s, opacity: _(Je) },
        children: e,
      }),
      (0, Yp.jsx)(yf, {
        defaultSize: 275,
        getCurrentSize: () => o.get(),
        onResizingChange: n,
        setSize: (e) => {
          i.set(te, !1);
          let t = e >= F(240);
          if ((i.get(Ue) !== t && tn(i, t), !t)) return;
          let n = xt(e);
          (i.set(ce, n), o.set(n));
        },
        onResizeEnd: (e) => {
          e < F(240) || Ot(xt(e));
        },
      }),
    ],
  });
}
var Yp,
  Xp = e(() => {
    (cn(), y(), it(), o(), vt(), Df(), Sn(), U(), (Yp = q()));
  }),
  Zp,
  Qp,
  $p,
  em = e(() => {
    ((Zp = t(W(), 1)),
      (Qp = (0, Zp.createContext)({ current: null })),
      ($p = (0, Zp.createContext)(null)));
  });
function tm({
  children: e,
  isRightPanelOpen: t,
  mainContentWidth: n,
  rightPanelDefaultWidth: r,
  rightPanelWidth: i,
  rightPanelWidthRatio: o,
  widthMode: s,
}) {
  let c = Pe(f),
    l = _(Nt.activeTab$),
    u = _(pe),
    d = _(_e),
    p = _(je),
    m = _(Me),
    { rightPanelLayoutTick: h } = ln(),
    [v, y] = (0, nm.useState)(!1),
    b = (0, nm.useRef)(!1),
    x = s === `full`,
    S = ge`${i}px`,
    {
      isMounted: C,
      opacity: w,
      animatedSize: T,
      progress: E,
    } = mp({ animation: m, size: i, isVisible: t });
  return (
    D(E, `change`, () => {
      h.set(h.get() + 1);
    }),
    !C && !t && !v
      ? null
      : (0, rm.jsxs)(V.aside, {
          "data-app-shell-focus-area": `right-panel`,
          className: `relative z-[41] ml-auto h-full min-h-0 min-w-0 shrink-0 overflow-visible`,
          style: { opacity: w, width: T },
          transition: L,
          children: [
            !x &&
              (0, rm.jsx)(`div`, {
                "aria-hidden": !0,
                className: `pointer-events-none absolute inset-y-0 left-0 z-30 w-px shadow-[-8px_0_16px_-8px_rgb(0_0_0/0.18)]`,
              }),
            !x &&
              (0, rm.jsx)(yf, {
                defaultSize: d ?? r,
                edge: `left`,
                getCurrentSize: () => i.get(),
                onResizingChange: (e) => {
                  (y(e), e && (b.current = c.get(g)));
                },
                setSize: (e) => {
                  let t = e >= F(320);
                  (c.get(Ln) !== t && (t && b.current ? It(c, !0) : fn(c, t)),
                    t && o.set(rt(e, n.get(), s)));
                },
                onResizeEnd: (e) => {
                  e < F(320) ||
                    a({
                      mainContentWidth: n.get(),
                      storageKey: p.storageKey,
                      width: e,
                      widthMode: s,
                    });
                },
              }),
            (0, rm.jsx)(`div`, {
              className: `absolute inset-0 min-h-0 min-w-0 overflow-hidden`,
              children: (0, rm.jsx)(V.div, {
                className: H(
                  `absolute top-0 bottom-0 left-0 min-w-0 bg-token-main-surface-primary`,
                  !x && `border-l border-token-border-default`,
                ),
                style: { minWidth: S, width: S },
                children: (0, rm.jsxs)(`div`, {
                  className: `h-full min-h-0 min-w-0 overflow-hidden [contain:layout_paint] [--thread-content-top-inset:calc(var(--spacing)*8)]`,
                  children: [e, l == null ? u : (0, rm.jsx)(Yd, {})],
                }),
              }),
            }),
          ],
        })
  );
}
var nm,
  rm,
  im = e(() => {
    (cn(),
      y(),
      it(),
      (nm = t(W(), 1)),
      Ye(),
      o(),
      Df(),
      U(),
      yp(),
      Zd(),
      Oe(),
      Wt(),
      Zt(),
      (rm = q()));
  });
function am(e) {
  let t = (0, sm.c)(21),
    { isFullWidth: n, mainContentWidth: r, shellHeight: i } = e,
    a = _(Me),
    o = _(je),
    s = om(o, r, i),
    c;
  t[0] !== r || t[1] !== o.defaultWidth || t[2] !== i
    ? ((c = oe({
        defaultWidth: o.defaultWidth,
        mainContentWidth: r.get(),
        shellHeight: i.get(),
      })),
      (t[0] = r),
      (t[1] = o.defaultWidth),
      (t[2] = i),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u = n ? `full` : `regular`,
    d;
  t[4] !== r || t[5] !== s
    ? ((d = [r, s]), (t[4] = r), (t[5] = s), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== n || t[8] !== u
    ? ((f = (e) => {
        let [t, r] = e;
        return n ? t : et(r, t, u);
      }),
      (t[7] = n),
      (t[8] = u),
      (t[9] = f))
    : (f = t[9]);
  let p = G(d, f),
    m;
  t[10] !== a || t[11] !== p
    ? ((m = [a, p]), (t[10] = a), (t[11] = p), (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === n
    ? (h = t[14])
    : ((h = (e) => {
        let [t, r] = e;
        return n ? 0 : Math.max(0, Math.min(1, t)) * r;
      }),
      (t[13] = n),
      (t[14] = h));
  let g = G(m, h),
    v;
  return (
    t[15] !== g || t[16] !== l || t[17] !== p || t[18] !== s || t[19] !== u
      ? ((v = {
          rightPanelAnimatedWidth: g,
          rightPanelDefaultWidth: l,
          rightPanelWidth: p,
          rightPanelWidthRatio: s,
          widthMode: u,
        }),
        (t[15] = g),
        (t[16] = l),
        (t[17] = p),
        (t[18] = s),
        (t[19] = u),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
function om(e, t, n) {
  let r = (0, cm.useRef)(null);
  if (
    r.current != null &&
    r.current.defaultWidth === e.defaultWidth &&
    r.current.storageKey === e.storageKey
  )
    return r.current.widthRatio;
  let i = p(
    nt({
      ...e,
      defaultWidth: oe({
        defaultWidth: e.defaultWidth,
        mainContentWidth: t.get(),
        shellHeight: n.get(),
      }),
      mainContentWidth: t.get(),
    }),
  );
  return ((r.current = { ...e, widthRatio: i }), i);
}
var sm,
  cm,
  lm = e(() => {
    ((sm = z()), y(), it(), (cm = t(W(), 1)), o(), Oe(), Wt());
  });
function um(e) {
  let t = (0, _m.c)(41),
    { children: n } = e,
    r = Pe(f),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { activationConstraint: { distance: 6 } }), (t[0] = i))
    : (i = t[0]);
  let a = Or(Dr(va, i)),
    [o, s] = (0, vm.useState)(null),
    c = (0, vm.useRef)(null),
    l = o != null,
    u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e, t, n) => {
        s((r) => (r == null ? r : Jl(r, e, t, n)));
      }),
      (t[1] = u))
    : (u = t[1]);
  let d = u,
    p,
    m;
  (t[2] === l
    ? ((p = t[3]), (m = t[4]))
    : ((p = () => {
        if (!l) return;
        let e = dm,
          t = () => {
            document.visibilityState !== `visible` && e();
          };
        return (
          window.addEventListener(`blur`, e),
          document.addEventListener(`lostpointercapture`, e, !0),
          document.addEventListener(`visibilitychange`, t),
          document.documentElement.addEventListener(`pointerleave`, e),
          () => {
            (window.removeEventListener(`blur`, e),
              document.removeEventListener(`lostpointercapture`, e, !0),
              document.removeEventListener(`visibilitychange`, t),
              document.documentElement.removeEventListener(`pointerleave`, e));
          }
        );
      }),
      (m = [l]),
      (t[2] = l),
      (t[3] = p),
      (t[4] = m)),
    (0, vm.useEffect)(p, m));
  let h;
  t[5] === r
    ? (h = t[6])
    : ((h = (e) => {
        let t = pm(e.active.data.current);
        if (t?.kind !== `app-shell-tab`) return;
        let n = r.get(t.controller.tabs$),
          i = n.findIndex((e) => e.tabId === t.tabId),
          a = n[i] ?? null;
        if (a == null) return;
        let o = r.get(t.controller.activeTab$)?.tabId === t.tabId;
        ((c.current = {
          sourceController: t.controller,
          sourceIndex: i,
          tabId: t.tabId,
          wasDraggedTabActive: o,
        }),
          s({
            draggedTab: a,
            insertionPlacement: `before`,
            isDraggedTabActive: o,
            overTabId: null,
            previewController: t.controller,
            sourceController: t.controller,
          }));
      }),
      (t[5] = r),
      (t[6] = h));
  let g = h,
    _;
  t[7] !== o || t[8] !== r
    ? ((_ = (e) => {
        let t = c.current;
        if (o == null || t == null) return;
        let n = pm(e.over?.data.current);
        if (n != null)
          if (n.kind === `app-shell-tab`) {
            if (n.tabId === t.tabId) return;
            if (n.controller === t.sourceController) {
              (ql(r, t.sourceController, t.tabId, n.tabId),
                d(t.sourceController, null, `before`));
              return;
            }
            d(n.controller, n.tabId, gm(e));
          } else d(n.controller, null, `before`);
      }),
      (t[7] = o),
      (t[8] = r),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    y;
  t[10] === o
    ? (y = t[11])
    : ((y = (e) => {
        let t = c.current;
        if (o == null || t == null) return;
        let n = pm(e.over?.data.current);
        n?.kind !== `app-shell-tab` ||
          n.tabId === t.tabId ||
          n.controller === t.sourceController ||
          d(n.controller, n.tabId, gm(e));
      }),
      (t[10] = o),
      (t[11] = y));
  let b = y,
    x;
  t[12] !== o || t[13] !== r
    ? ((x = (e) => {
        let t = c.current;
        (o != null && t != null && Kl(r, t), s(null), (c.current = null));
      }),
      (t[12] = o),
      (t[13] = r),
      (t[14] = x))
    : (x = t[14]);
  let S = x,
    C;
  t[15] !== o || t[16] !== r
    ? ((C = (e) => {
        let t = c.current;
        (o != null && t != null && e.over == null
          ? Kl(r, t)
          : o != null &&
            t != null &&
            o.previewController !== t.sourceController &&
            t.sourceController.moveTabTo(
              r,
              t.tabId,
              o.previewController,
              o.overTabId,
              { insertionPlacement: o.insertionPlacement },
            ),
          s(null),
          (c.current = null));
      }),
      (t[15] = o),
      (t[16] = r),
      (t[17] = C))
    : (C = t[17]);
  let w = C,
    T;
  t[18] === o
    ? (T = t[19])
    : ((T = { dragState: o }), (t[18] = o), (t[19] = T));
  let E;
  t[20] === o
    ? (E = t[21])
    : ((E =
        o == null
          ? null
          : (0, bm.jsx)(`div`, {
              "aria-hidden": !0,
              className: `fixed inset-0 cursor-grabbing`,
              style: { zIndex: Tt },
            })),
      (t[20] = o),
      (t[21] = E));
  let D;
  t[22] === o
    ? (D = t[23])
    : ((D = o == null ? null : (0, bm.jsx)(fm, { dragState: o })),
      (t[22] = o),
      (t[23] = D));
  let O;
  t[24] === D
    ? (O = t[25])
    : ((O = (0, bm.jsx)(no, { adjustScale: !1, zIndex: Tt, children: D })),
      (t[24] = D),
      (t[25] = O));
  let k;
  t[26] !== E || t[27] !== O
    ? ((k = (0, ym.createPortal)(
        (0, bm.jsxs)(bm.Fragment, { children: [E, O] }),
        document.body,
      )),
      (t[26] = E),
      (t[27] = O),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== n ||
  t[30] !== S ||
  t[31] !== w ||
  t[32] !== b ||
  t[33] !== v ||
  t[34] !== g ||
  t[35] !== a ||
  t[36] !== k
    ? ((A = (0, bm.jsxs)(Ha, {
        sensors: a,
        collisionDetection: mm,
        onDragStart: g,
        onDragMove: b,
        onDragOver: v,
        onDragCancel: S,
        onDragEnd: w,
        children: [n, k],
      })),
      (t[29] = n),
      (t[30] = S),
      (t[31] = w),
      (t[32] = b),
      (t[33] = v),
      (t[34] = g),
      (t[35] = a),
      (t[36] = k),
      (t[37] = A))
    : (A = t[37]);
  let j;
  return (
    t[38] !== T || t[39] !== A
      ? ((j = (0, bm.jsx)(pl.Provider, { value: T, children: A })),
        (t[38] = T),
        (t[39] = A),
        (t[40] = j))
      : (j = t[40]),
    j
  );
}
function dm() {
  document.dispatchEvent(
    new KeyboardEvent(`keydown`, {
      bubbles: !0,
      cancelable: !0,
      code: Y.Esc,
      key: Y.Esc,
    }),
  );
}
function fm(e) {
  let t = (0, _m.c)(20),
    { dragState: n } = e,
    r = Be(),
    {
      highlightedIcon: i,
      icon: a,
      isClosable: o,
      isHighlighted: s,
      isLabel: c,
      isPreview: l,
      isSuspended: u,
      tabId: d,
      title: f,
      tooltip: p,
      trailingContent: m,
    } = n.draggedTab,
    h = `calc(100% / ${r})`,
    g = `scale(${r})`,
    _ = `calc(100% / ${r})`,
    v;
  t[0] !== h || t[1] !== g || t[2] !== _
    ? ((v = { height: h, transform: g, transformOrigin: `top left`, width: _ }),
      (t[0] = h),
      (t[1] = g),
      (t[2] = _),
      (t[3] = v))
    : (v = t[3]);
  let y;
  t[4] !== n.isDraggedTabActive ||
  t[5] !== i ||
  t[6] !== a ||
  t[7] !== o ||
  t[8] !== s ||
  t[9] !== c ||
  t[10] !== l ||
  t[11] !== u ||
  t[12] !== d ||
  t[13] !== f ||
  t[14] !== p ||
  t[15] !== m
    ? ((y = (0, bm.jsx)(`div`, {
        className: `relative my-auto flex max-w-40 shrink-0 items-center gap-0.5 pe-1`,
        children: (0, bm.jsx)(cu, {
          id: d,
          highlightedIcon: i,
          icon: a,
          isActive: n.isDraggedTabActive,
          isClosable: o,
          isDragging: !0,
          isHighlighted: s,
          isLabel: c,
          isPreview: l,
          isSuspended: u,
          trailingContent: m,
          title: f,
          tooltip: p,
        }),
      })),
      (t[4] = n.isDraggedTabActive),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== v || t[18] !== y
      ? ((b = (0, bm.jsx)(`div`, { style: v, children: y })),
        (t[17] = v),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function pm(e) {
  if (typeof e != `object` || !e) return null;
  switch (Reflect.get(e, `kind`)) {
    case `app-shell-tab`:
    case `app-shell-tab-strip`:
      return e;
    default:
      return null;
  }
}
function mm(e) {
  let t = ia(e),
    n = t.filter(
      (e) =>
        pm(e.data?.droppableContainer.data.current)?.kind === `app-shell-tab`,
    );
  if (n.length > 0) return hm(n, e);
  let r =
      t.find(
        (e) =>
          pm(e.data?.droppableContainer.data.current)?.kind ===
          `app-shell-tab-strip`,
      ) ?? null,
    i = r == null ? null : pm(r.data?.droppableContainer.data.current);
  if (r != null && i?.kind === `app-shell-tab-strip`) {
    let t = e.droppableContainers.filter((e) => {
      let t = pm(e.data.current);
      return t?.kind === `app-shell-tab` && t.controller === i.controller;
    });
    return t.length > 0 ? hm(ta({ ...e, droppableContainers: t }), e) : [r];
  }
  return hm(ta(e), e);
}
function hm(e, t) {
  return e.map((e) => {
    let n = pm(e.data?.droppableContainer.data.current),
      r = t.droppableRects.get(e.id);
    return n?.kind !== `app-shell-tab` || r == null
      ? e
      : {
          ...e,
          data: {
            ...e.data,
            appShellTabInsertionPlacement: Yl(
              t.pointerCoordinates?.x ?? null,
              r.left,
              r.width,
            ),
          },
        };
  });
}
function gm(e) {
  let t = e.over?.id;
  return (t == null
    ? null
    : e.collisions?.find((e) => e.id === t)?.data
        ?.appShellTabInsertionPlacement) === `after`
    ? `after`
    : `before`;
}
var _m,
  vm,
  ym,
  bm,
  xm = e(() => {
    ((_m = z()),
      ro(),
      it(),
      (vm = t(W(), 1)),
      (ym = t(Ut(), 1)),
      Ke(),
      Ye(),
      xn(),
      yu(),
      ml(),
      Zl(),
      (bm = q()));
  }),
  Sm = e(() => {});
function Cm({
  bottomPanelSlot: e,
  children: t,
  leftPanelSlot: n,
  rightPanelSlot: r,
}) {
  let i = Pe(f),
    a = Pe(T),
    o = (0, Mm.useRef)(null),
    [s, c] = (0, Mm.useState)(null),
    [l, u] = (0, Mm.useState)(!1),
    p = (0, Mm.useRef)(n);
  n != null && (p.current = n);
  let m = (n ?? (l ? p.current : void 0))?.children,
    g = m != null,
    v = p.current != null,
    y = e != null,
    b = r != null,
    x = g,
    S = (0, Mm.useRef)(!1),
    C = (0, Mm.useRef)(!1),
    w = _(d),
    E = _(Vt),
    k = Be(),
    j = ep(),
    M = rf(),
    [N, P] = (0, Mm.useState)(!1),
    F = _(Ue),
    I = _(Ge),
    ee = _(Hm),
    L = E === `thread-edge-scroll`,
    R = g && F,
    ne = L && N && !w,
    re = E === `full-bleed`,
    z = `visible`;
  re ? (z = `hidden`) : L ? (z = `full-bleed`) : b && (z = `hidden`);
  let B = Se(Gt()),
    ie = G(B, (e) => `${Math.max(0, e - Rm * 2)}px`),
    { isMounted: ae, animatedSize: oe } = mp({
      animation: _(Je),
      size: B,
      isVisible: R,
    });
  Jf(i, !(x && ee && !F && !l && !ae));
  let se = Se(window.innerWidth),
    U = Se(window.innerHeight),
    ce = Se(window.innerHeight - 46),
    W = Se(lp(ce.get())),
    le = _(A),
    ue = G([W, ce], ([e, t]) => cp(e, t)),
    de = G([le, ue], ([e, t]) => e * t),
    fe = ge`${de}px`,
    pe = Se(0),
    me = Se(0),
    he = Se(0),
    _e = G([se, oe], ([e, t]) => Math.max(0, e - t)),
    {
      rightPanelAnimatedWidth: ve,
      rightPanelDefaultWidth: ye,
      rightPanelWidth: be,
      rightPanelWidthRatio: xe,
      widthMode: Ce,
    } = am({ isFullWidth: w, mainContentWidth: _e, shellHeight: U }),
    we = G([se, xe], ([e, t]) =>
      Qe({
        isRightPanelOpen: b,
        mainContentWidth: e,
        rightPanelWidthMode: Ce,
        rightPanelWidthRatio: t,
      }),
    ),
    Te = G([se, B, xe], ([e, t, n]) =>
      Qe({
        isRightPanelOpen: b,
        mainContentWidth: Math.max(0, e - t),
        rightPanelWidthMode: Ce,
        rightPanelWidthRatio: n,
      }),
    ),
    Ee = R ? Te : we,
    De = (0, Mm.useRef)(de.get()),
    Oe = (0, Mm.useRef)(new Set()),
    ke = {
      "--spacing-token-safe-header-left": `${j.left / k + 6}px`,
      "--spacing-token-safe-header-right": `${j.right / k}px`,
      width: `calc(100vw / var(--codex-window-zoom))`,
      height: `calc(100vh / var(--codex-window-zoom))`,
      zoom: `var(--codex-window-zoom)`,
    },
    je = (0, Mm.useMemo)(
      () => ({
        headerLeftWidth: me,
        headerRightWidth: he,
        leftPanelWidth: B,
        leftPanelAnimatedWidth: oe,
        mainContentTargetWidth: Ee,
        mainContentWidth: _e,
        shellWidth: se,
        rightPanelAnimatedWidth: ve,
        rightPanelLayoutTick: pe,
      }),
      [me, he, oe, B, Ee, _e, ve, pe, se],
    ),
    Me = (0, Mm.useCallback)(
      (e) => (
        Oe.current.add(e),
        () => {
          Oe.current.delete(e);
        }
      ),
      [],
    ),
    Ne = O(({ width: e }) => {
      se.set(e);
      let t = e <= Fm,
        n = e <= Im,
        r = t !== S.current,
        a = n !== C.current;
      if (!r && !a) return;
      ((S.current = t), (C.current = n));
      let o = a && i.get(te),
        s = o ? v && !n : R;
      ((r && s && b && t) || (a && n)
        ? (i.get(Yt) === `right-panel` && In(i, `main`),
          i.get(d) && i.set(d, !1),
          un(i))
        : !n && (!s || !t) && Ct(i),
        o && ft(i, !n));
    }),
    Fe = mo((e) => {
      let { height: t, width: n } = zn(e);
      (U.set(t), Ne({ width: n }));
    }),
    Ie = mo((e) => {
      let { width: t } = zn(e);
      P(t >= km());
    }),
    Le = mo((e, t) => {
      let { height: n } = zn(e);
      (ce.set(n), i.set(tf, Qd(t)));
    }),
    Re = (0, Mm.useCallback)(
      (e) => {
        (c(e), Le(e), e ?? i.set(tf, null));
      },
      [Le, i],
    );
  return (
    D(de, `change`, (e) => {
      let t = e - De.current;
      if (((De.current = e), t !== 0)) for (let e of Oe.current) e(t);
    }),
    (0, Q.jsx)(Qp.Provider, {
      value: o,
      children: (0, Q.jsx)($p.Provider, {
        value: s,
        children: (0, Q.jsx)(Tp.Provider, {
          value: Me,
          children: (0, Q.jsxs)(Ve.Provider, {
            value: je,
            children: [
              (0, Q.jsx)(Dp, {}),
              (0, Q.jsxs)(V.div, {
                ref: o,
                style: ke,
                className: `relative flex flex-col`,
                onBlurCapture: (e) => {
                  (e.relatedTarget instanceof Node &&
                    e.currentTarget.contains(e.relatedTarget)) ||
                    (e.relatedTarget != null && In(i, Dm(e.relatedTarget)),
                    qe(i, !1));
                },
                onFocusCapture: (e) => {
                  (In(i, Dm(e.target)), qe(i, Om(e.target)));
                },
                onPointerOverCapture: (e) => {
                  h(i, Dm(e.target));
                },
                children: [
                  M && (0, Q.jsx)(Am, {}),
                  x &&
                    !F &&
                    !l &&
                    !ae &&
                    (0, Q.jsx)(wm, {
                      floatingLeftPanelWidth: ie,
                      isApplicationMenuBarEnabled: M,
                      isVisible: ee && !F && !ae,
                      leftPanelWidth: B,
                      leftPanel: m,
                      shouldUseReducedMotion: I,
                      onOpenSidebar: () => {
                        tn(i, !0, { animate: !1 });
                      },
                    }),
                  (0, Q.jsxs)(`div`, {
                    ref: Fe,
                    className: `relative isolate flex max-h-full min-h-0 w-full flex-1`,
                    children: [
                      (0, Q.jsx)(Ae, {
                        initial: !1,
                        children:
                          g &&
                          (R || ae || l) &&
                          (0, Q.jsx)(
                            Jp,
                            {
                              isResizing: l,
                              onResizingChange: u,
                              paddingTop: M ? `0px` : `var(--height-toolbar)`,
                              children: m,
                            },
                            `app-shell-left-panel`,
                          ),
                      }),
                      (0, Q.jsx)(`main`, {
                        ref: Re,
                        className: H(
                          `relative isolate flex min-h-0 flex-1 flex-col`,
                          `main-surface`,
                        ),
                        children: (0, Q.jsxs)(um, {
                          children: [
                            (0, Q.jsx)(Fp, {
                              isHeaderEdgeScroll: ne,
                              isApplicationMenuBarEnabled: M,
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `relative isolate flex min-h-0 flex-1 overflow-hidden`,
                              children: [
                                (0, Q.jsx)(`div`, {
                                  "data-app-shell-main-content-layout": E,
                                  ref: Ie,
                                  className: H(
                                    `app-shell-main-content-viewport relative flex min-h-0 min-w-0 flex-col`,
                                    w
                                      ? `w-0 flex-none overflow-hidden`
                                      : `flex-1`,
                                  ),
                                  children: (0, Q.jsx)(`div`, {
                                    className: H(
                                      `app-shell-main-content-frame relative mt-(--app-shell-main-content-frame-top-offset) flex min-h-0 flex-1 flex-col`,
                                      L &&
                                        !ne &&
                                        `border-t-[0.5px] border-token-border-heavy`,
                                    ),
                                    children: (0, Q.jsxs)(`div`, {
                                      className: `relative flex min-h-0 flex-1`,
                                      children: [
                                        (0, Q.jsx)(`div`, {
                                          "aria-hidden": !0,
                                          "data-app-shell-main-content-top-fade":
                                            z,
                                          className: `app-shell-main-content-top-fade pointer-events-none absolute inset-x-0 top-0 z-20 h-4 bg-gradient-to-b from-token-main-surface-primary opacity-0 transition-opacity duration-basic browser:hidden`,
                                        }),
                                        (0, Q.jsx)(`div`, {
                                          className: `h-full min-h-0 min-w-0 flex-1`,
                                          children: (0, Q.jsx)(wp.Provider, {
                                            value: fe,
                                            children: t,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, Q.jsx)(
                                  tm,
                                  {
                                    isRightPanelOpen: b,
                                    mainContentWidth: _e,
                                    rightPanelDefaultWidth: ye,
                                    rightPanelWidth: be,
                                    rightPanelWidthRatio: xe,
                                    widthMode: Ce,
                                    children: r?.children,
                                  },
                                  `right-panel:${a.value.clientThreadId}`,
                                ),
                              ],
                            }),
                            (0, Q.jsx)(bp, {
                              bottomPanelHeight: W,
                              clampedBottomPanelHeight: ue,
                              mainContentHeight: ce,
                              isVisible: y,
                              children: (0, Q.jsx)(Em, {}),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    })
  );
}
function wm(e) {
  let t = (0, jm.c)(15),
    {
      floatingLeftPanelWidth: n,
      isApplicationMenuBarEnabled: r,
      isVisible: i,
      leftPanel: a,
      leftPanelWidth: o,
      shouldUseReducedMotion: s,
      onOpenSidebar: c,
    } = e,
    l = Pe(_n),
    [u, d] = (0, Mm.useState)(!1),
    f = i || u,
    p;
  t[0] === s
    ? (p = t[1])
    : ((p = s ? { duration: 0 } : L), (t[0] = s), (t[1] = p));
  let m = p,
    h;
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== f ||
  t[5] !== u ||
  t[6] !== a ||
  t[7] !== o ||
  t[8] !== c ||
  t[9] !== l ||
  t[10] !== s ||
  t[11] !== m
    ? ((h = f
        ? (0, Q.jsxs)(V.div, {
            "data-pip-obstacle": `app-shell-floating-left-panel`,
            className: H(
              `pointer-events-auto fixed bottom-0 left-0 z-[42] min-h-0`,
              u && `cursor-col-resize`,
              r ? `top-(--height-toolbar-sm)` : `top-0`,
            ),
            initial: s ? !1 : { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: s ? 0 : -8 },
            style: { width: n },
            transition: m,
            children: [
              (0, Q.jsxs)(`aside`, {
                "data-testid": `app-shell-floating-left-panel`,
                className: `flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-token-main-surface-primary electron:elevation-prominent electron:[--elevation-prominent:var(--elevation-sidebar)] extension:shadow-[0.5px_0_0_0_var(--color-token-border-default),0_20px_25px_-5px_rgb(0_0_0/0.1),0_8px_10px_-6px_rgb(0_0_0/0.1)]`,
                children: [
                  (0, Q.jsx)(V.div, {
                    initial: s ? !1 : { x: 8 },
                    animate: { x: 0 },
                    exit: { x: s ? 0 : 8 },
                    transition: m,
                    className: `app-header-tint flex h-toolbar shrink-0 items-center ps-[max(var(--spacing-token-safe-header-left),0.5rem)] pe-2`,
                    children: (0, Q.jsx)(zf, {
                      hideUnreadBadge: !0,
                      onToggleSidebar: c,
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `min-h-0 flex-1 overflow-hidden`,
                    children: a,
                  }),
                ],
              }),
              (0, Q.jsx)(yf, {
                defaultSize: 275,
                getCurrentSize: () => o.get(),
                onResizingChange: d,
                setSize: (e) => {
                  let t = xt(e);
                  (l.set(ce, t), o.set(t));
                },
                onResizeEnd: Tm,
              }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = r),
      (t[4] = f),
      (t[5] = u),
      (t[6] = a),
      (t[7] = o),
      (t[8] = c),
      (t[9] = l),
      (t[10] = s),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] === h
      ? (g = t[14])
      : ((g = (0, Q.jsx)(Ae, { initial: !1, children: h })),
        (t[13] = h),
        (t[14] = g)),
    g
  );
}
function Tm(e) {
  Ot(xt(e));
}
function Em() {
  let e = (0, jm.c)(5),
    t = _(kt.activeTab$),
    n = _(Cn),
    r = _(Nn),
    i = _(gt);
  if (t != null) {
    let t;
    return (
      e[0] !== r || e[1] !== i
        ? ((t = (0, Q.jsx)(Ou, {
            headerHeight: `pane`,
            afterList: r,
            afterListSticky: i,
            controller: kt,
          })),
          (e[0] = r),
          (e[1] = i),
          (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  let a;
  return (
    e[3] === n
      ? (a = e[4])
      : ((a = n == null ? null : (0, Q.jsx)(Q.Fragment, { children: n })),
        (e[3] = n),
        (e[4] = a)),
    a
  );
}
function Dm(e) {
  if (!(e instanceof HTMLElement)) return `main`;
  let t = e.closest(`[${sn}]`)?.getAttribute(sn);
  return t === `right-panel` || t === `bottom-panel` ? t : `main`;
}
function Om(e) {
  return e instanceof HTMLElement && e.closest(`[data-codex-terminal]`) != null;
}
function km() {
  let e = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return Number.isFinite(e) ? Nm * e : Nm * Pm;
}
function Am() {
  let e = (0, jm.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`div`, {
          className: `app-header-tint draggable group/application-menu-top-bar z-40 flex h-toolbar-sm items-center ps-(--spacing-token-safe-header-left) pe-(--spacing-token-safe-header-right)`,
          children: [(0, Q.jsx)(zf, {}), (0, Q.jsx)(of, {})],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var jm,
  Mm,
  Q,
  Nm,
  Pm,
  Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm,
  Vm,
  Hm,
  Um = e(() => {
    ((jm = z()),
      cn(),
      y(),
      it(),
      (Mm = t(W(), 1)),
      Ke(),
      nf(),
      Bn(),
      yo(),
      vt(),
      Ye(),
      j(),
      re(),
      xn(),
      Ce(),
      o(),
      df(),
      af(),
      vf(),
      Df(),
      qf(),
      Sn(),
      Xf(),
      sp(),
      Sp(),
      pp(),
      Ep(),
      Pp(),
      qp(),
      U(),
      Xp(),
      yp(),
      em(),
      im(),
      lm(),
      Wt(),
      Zt(),
      xm(),
      Iu(),
      Sm(),
      (Q = q()),
      (Nm = 96),
      (Pm = 16),
      (Fm = 960),
      (Im = 720),
      (Lm = 12),
      (Rm = 0),
      (zm = De(_n, ({ get: e }) => {
        let t = e(_f.px$);
        return t == null ? null : ee(t, e(Ze) ?? 1);
      })),
      (Bm = De(_n, ({ get: e }) => {
        let t = e(zm);
        return t != null && t >= 0 && t <= Lm;
      })),
      (Vm = De(_n, ({ get: e }) => {
        let t = e(zm),
          n = e(ce) - Rm;
        return t != null && t >= 0 && t <= n;
      })),
      (Hm = hn(f, !1, {
        onMount: (e, t) => {
          let n = !1;
          e(!1);
          let r = t.watch(({ get: t }) => {
            if (t(Ue)) {
              ((n = !0), e(!1));
              return;
            }
            let r = t(Bm);
            if (n && ((n = r || t(I) || t($e)), n)) {
              e(!1);
              return;
            }
            let i = t(Vm),
              a = t(se);
            e((e) => {
              let t = e ? i || a : r || a;
              return e === t ? e : t;
            });
          });
          return () => {
            (e(!1), r());
          };
        },
      })));
  });
function Wm(e) {
  return null;
}
function Gm(e) {
  let t = (0, hh.c)(4),
    { children: n, className: r, inline: i } = e;
  sh(Pe(f), Fe, i ? null : n);
  let a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = i ? (0, _h.jsx)(`div`, { className: r, children: n }) : null),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Km(e) {
  let t = (0, hh.c)(23),
    { actionId: n, align: r, children: i, order: a, slotPosition: o } = e,
    s = r === void 0 ? `start` : r,
    c = a === void 0 ? 0 : a,
    l = o === void 0 ? `center` : o,
    u = Pe(f),
    d = v[l],
    p;
  t[0] !== n ||
  t[1] !== s ||
  t[2] !== i ||
  t[3] !== c ||
  t[4] !== d.byId ||
  t[5] !== u
    ? ((p = () => {
        u.set(d.byId, n, { align: s, node: i, order: c });
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = i),
      (t[3] = c),
      (t[4] = d.byId),
      (t[5] = u),
      (t[6] = p))
    : (p = t[6]);
  let m;
  (t[7] !== n ||
  t[8] !== s ||
  t[9] !== i ||
  t[10] !== c ||
  t[11] !== d ||
  t[12] !== u
    ? ((m = [n, s, i, c, d, u]),
      (t[7] = n),
      (t[8] = s),
      (t[9] = i),
      (t[10] = c),
      (t[11] = d),
      (t[12] = u),
      (t[13] = m))
    : (m = t[13]),
    (0, gh.useLayoutEffect)(p, m));
  let h;
  t[14] !== n || t[15] !== d.byId || t[16] !== d.ids$ || t[17] !== u
    ? ((h = () => (
        u.set(d.ids$, (e) => (e.includes(n) ? e : [...e, n])),
        () => {
          (u.set(d.ids$, (e) => e.filter((e) => e !== n)),
            u.set(d.byId, n, null));
        }
      )),
      (t[14] = n),
      (t[15] = d.byId),
      (t[16] = d.ids$),
      (t[17] = u),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== n || t[20] !== d || t[21] !== u
      ? ((g = [n, d, u]), (t[19] = n), (t[20] = d), (t[21] = u), (t[22] = g))
      : (g = t[22]),
    (0, gh.useLayoutEffect)(h, g),
    null
  );
}
function qm(e) {
  let t = (0, hh.c)(8),
    n = Pe(f),
    r,
    i;
  (t[0] !== e || t[1] !== n
    ? ((r = () => {
        n.set(Re.byId, e.id, e);
      }),
      (i = [e, n]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i))
    : ((r = t[2]), (i = t[3])),
    (0, gh.useLayoutEffect)(r, i));
  let a, o;
  return (
    t[4] !== e.id || t[5] !== n
      ? ((a = () => (
          n.set(Re.ids$, (t) => (t.includes(e.id) ? t : [...t, e.id])),
          () => {
            (n.set(Re.ids$, (t) => t.filter((t) => t !== e.id)),
              n.set(Re.byId, e.id, null));
          }
        )),
        (o = [e.id, n]),
        (t[4] = e.id),
        (t[5] = n),
        (t[6] = a),
        (t[7] = o))
      : ((a = t[6]), (o = t[7])),
    (0, gh.useLayoutEffect)(a, o),
    null
  );
}
function Jm(e) {
  return null;
}
function Ym() {
  let e = (0, hh.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, _h.jsx)(Yd, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Xm(e) {
  let { children: t } = e;
  return (sh(Pe(f), le, t), null);
}
function Zm(e) {
  let { children: t } = e;
  return (sh(Pe(f), pe, t), null);
}
function Qm(e) {
  let { children: t } = e;
  return (sh(Pe(f), we, t), null);
}
function $m(e) {
  let { children: t } = e;
  return (sh(Pe(f), ie, t), null);
}
function eh(e) {
  let { children: t } = e;
  return (sh(Pe(f), k, t), null);
}
function th() {
  return null;
}
function nh() {
  let e = (0, hh.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, _h.jsx)(Lu, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function rh(e) {
  let { children: t } = e;
  return (sh(Pe(f), On, t), null);
}
function ih(e) {
  let { children: t } = e;
  return (sh(Pe(f), Nn, t), null);
}
function ah(e) {
  let { children: t } = e;
  return (sh(Pe(f), gt, t), null);
}
function oh(e) {
  let { children: t } = e;
  return (sh(Pe(f), Cn, t), null);
}
function sh(e, t, n) {
  let r = (0, hh.c)(9),
    i,
    a;
  (r[0] !== n || r[1] !== e || r[2] !== t
    ? ((i = () => {
        e.set(t, n);
      }),
      (a = [n, e, t]),
      (r[0] = n),
      (r[1] = e),
      (r[2] = t),
      (r[3] = i),
      (r[4] = a))
    : ((i = r[3]), (a = r[4])),
    (0, gh.useLayoutEffect)(i, a));
  let o, s;
  (r[5] !== e || r[6] !== t
    ? ((o = () => () => {
        e.set(t, null);
      }),
      (s = [e, t]),
      (r[5] = e),
      (r[6] = t),
      (r[7] = o),
      (r[8] = s))
    : ((o = r[7]), (s = r[8])),
    (0, gh.useLayoutEffect)(o, s));
}
function ch(e) {
  let t = (0, hh.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, _h.jsx)(rl, { fillParent: !0, debugName: `AppShell.Content` })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, _h.jsx)(gh.Suspense, { fallback: r, children: n })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function lh(e) {
  let t = (0, hh.c)(4),
    { layout: n } = e,
    r = Pe(f),
    i,
    a;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => (
          r.set(Vt, n),
          () => {
            r.set(Vt, `default`);
          }
        )),
        (a = [n, r]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : ((i = t[2]), (a = t[3])),
    (0, gh.useLayoutEffect)(i, a),
    null
  );
}
function uh(e) {
  let t = (0, hh.c)(7),
    { children: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = dh(n)), (t[0] = n), (t[1] = r));
  let {
      bottomPanelSlot: i,
      contentChildren: a,
      leftPanelSlot: o,
      rightPanelSlot: s,
    } = r,
    c;
  return (
    t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s
      ? ((c = (0, _h.jsx)(Cm, {
          bottomPanelSlot: i,
          leftPanelSlot: o,
          rightPanelSlot: s,
          children: a,
        })),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function dh(e) {
  let t = [],
    n,
    r,
    i;
  return (
    gh.Children.forEach(e, (e, a) => {
      if (fh(e)) {
        r = e.props;
        return;
      }
      if (ph(e)) {
        i = e.props;
        return;
      }
      if (mh(e)) {
        n = e.props;
        return;
      }
      (0, gh.isValidElement)(e)
        ? t.push({ ...e, key: e.key ?? `${a}` })
        : t.push(e);
    }),
    {
      bottomPanelSlot: n,
      contentChildren: t,
      leftPanelSlot: r,
      rightPanelSlot: i,
    }
  );
}
function fh(e) {
  return (0, gh.isValidElement)(e) && e.type === Wm;
}
function ph(e) {
  return (0, gh.isValidElement)(e) && e.type === Jm;
}
function mh(e) {
  return (0, gh.isValidElement)(e) && e.type === th;
}
var hh,
  gh,
  _h,
  vh = e(() => {
    ((hh = z()),
      it(),
      (gh = t(W(), 1)),
      sl(),
      Ye(),
      Bu(),
      Zd(),
      Um(),
      Wt(),
      (_h = q()));
  });
function yh(e) {
  let t = (0, wh.c)(9),
    { children: n, isOpen: r, onClose: i } = e,
    a = Pe(f),
    o = (0, Th.useEffectEvent)(i),
    s;
  t[0] !== o || t[1] !== r || t[2] !== a
    ? ((s = () => {
        fn(a, r);
        let e = r
          ? a.watch((e) => {
              let { get: t } = e;
              t(Ln) || o();
            })
          : null;
        return () => {
          (e?.(), fn(a, !1));
        };
      }),
      (t[0] = o),
      (t[1] = r),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let c;
  if (
    (t[4] !== r || t[5] !== a
      ? ((c = [r, a]), (t[4] = r), (t[5] = a), (t[6] = c))
      : (c = t[6]),
    (0, Th.useLayoutEffect)(s, c),
    !r)
  )
    return null;
  let l;
  return (
    t[7] === n
      ? (l = t[8])
      : ((l = (0, Eh.jsx)(Zm, {
          children: (0, Eh.jsx)(`div`, { className: `h-full`, children: n }),
        })),
        (t[7] = n),
        (t[8] = l)),
    l
  );
}
function bh(e) {
  let t = (0, wh.c)(14),
    {
      actions: n,
      children: r,
      closeLabel: i,
      footer: a,
      leading: o,
      navigation: s,
      onClose: c,
    } = e,
    l;
  t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== s || t[4] !== c
    ? ((l = (0, Eh.jsx)(xh, {
        actions: n,
        closeLabel: i,
        leading: o,
        navigation: s,
        onClose: c,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === r
    ? (u = t[7])
    : ((u = (0, Eh.jsx)(`div`, {
        className: `flex min-h-0 flex-1 flex-col`,
        children: r,
      })),
      (t[6] = r),
      (t[7] = u));
  let d;
  t[8] === a
    ? (d = t[9])
    : ((d =
        a == null
          ? null
          : (0, Eh.jsx)(`div`, {
              className: `shrink-0 border-t border-token-border p-panel`,
              children: a,
            })),
      (t[8] = a),
      (t[9] = d));
  let f;
  return (
    t[10] !== l || t[11] !== u || t[12] !== d
      ? ((f = (0, Eh.jsxs)(`div`, {
          className: `@container/app-shell-detail-panel flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [l, u, d],
        })),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function xh(e) {
  let t = (0, wh.c)(25),
    { actions: n, closeLabel: r, leading: i, navigation: a, onClose: o } = e;
  if (a == null) {
    let e;
    t[0] === i
      ? (e = t[1])
      : ((e = (0, Eh.jsx)(`div`, { className: `min-w-0`, children: i })),
        (t[0] = i),
        (t[1] = e));
    let a;
    t[2] !== r || t[3] !== o
      ? ((a = (0, Eh.jsx)(Sh, { label: r, onClick: o })),
        (t[2] = r),
        (t[3] = o),
        (t[4] = a))
      : (a = t[4]);
    let s;
    t[5] !== n || t[6] !== a
      ? ((s = (0, Eh.jsxs)(`div`, {
          className: `ml-auto flex min-w-0 shrink-0 items-center gap-1.5`,
          children: [n, a],
        })),
        (t[5] = n),
        (t[6] = a),
        (t[7] = s))
      : (s = t[7]);
    let c;
    return (
      t[8] !== e || t[9] !== s
        ? ((c = (0, Eh.jsxs)(`div`, {
            className: `draggable flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar`,
            children: [e, s],
          })),
          (t[8] = e),
          (t[9] = s),
          (t[10] = c))
        : (c = t[10]),
      c
    );
  }
  let s;
  t[11] === i
    ? (s = t[12])
    : ((s = (0, Eh.jsx)(`div`, {
        className: `flex min-w-0 items-center gap-2 justify-self-start`,
        children: i,
      })),
      (t[11] = i),
      (t[12] = s));
  let c;
  t[13] === a
    ? (c = t[14])
    : ((c = (0, Eh.jsx)(`div`, {
        className: `min-w-0 justify-self-center [@container_app-shell-detail-panel_(max-width:899px)]:w-full [@container_app-shell-detail-panel_(max-width:899px)]:justify-self-stretch`,
        children: a,
      })),
      (t[13] = a),
      (t[14] = c));
  let l;
  t[15] !== r || t[16] !== o
    ? ((l = (0, Eh.jsx)(Sh, { label: r, onClick: o })),
      (t[15] = r),
      (t[16] = o),
      (t[17] = l))
    : (l = t[17]);
  let u;
  t[18] !== n || t[19] !== l
    ? ((u = (0, Eh.jsxs)(`div`, {
        className: `flex min-w-0 shrink-0 items-center justify-end gap-1 justify-self-end`,
        children: [n, l],
      })),
      (t[18] = n),
      (t[19] = l),
      (t[20] = u))
    : (u = t[20]);
  let d;
  return (
    t[21] !== s || t[22] !== c || t[23] !== u
      ? ((d = (0, Eh.jsxs)(`div`, {
          className: `draggable grid h-toolbar min-w-0 shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-toolbar [@container_app-shell-detail-panel_(max-width:899px)]:grid-cols-[auto_minmax(0,1fr)_auto] [@container_app-shell-detail-panel_(max-width:899px)]:gap-1`,
          children: [s, c, u],
        })),
        (t[21] = s),
        (t[22] = c),
        (t[23] = u),
        (t[24] = d))
      : (d = t[24]),
    d
  );
}
function Sh(e) {
  let t = (0, wh.c)(7),
    { label: n, onClick: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Eh.jsx)(Fn, { className: `icon-xs` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = (0, Eh.jsx)(me, {
        "aria-label": n,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: r,
        children: i,
      })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n || t[5] !== a
      ? ((o = (0, Eh.jsx)(b, {
          tooltipContent: n,
          delayOpen: !0,
          children: a,
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Ch(e) {
  let t = (0, wh.c)(7),
    { closeLabel: n, loadingLabel: r, onClose: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Eh.jsx)(Te, {})), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === r
    ? (o = t[2])
    : ((o = (0, Eh.jsxs)(`div`, {
        className: `flex h-full items-center justify-center`,
        role: `status`,
        children: [
          a,
          (0, Eh.jsx)(`span`, { className: `sr-only`, children: r }),
        ],
      })),
      (t[1] = r),
      (t[2] = o));
  let s;
  return (
    t[3] !== n || t[4] !== i || t[5] !== o
      ? ((s = (0, Eh.jsx)(bh, { closeLabel: n, onClose: i, children: o })),
        (t[3] = n),
        (t[4] = i),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var wh,
  Th,
  Eh,
  Dh = e(() => {
    ((wh = z()),
      it(),
      (Th = t(W(), 1)),
      o(),
      ve(),
      M(),
      Ht(),
      m(),
      Ye(),
      vh(),
      (Eh = q()));
  });
function Oh(e) {
  let t = (0, kh.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Ah.jsx)(`div`, {
          className: `draggable flex w-full min-w-0 items-center justify-between gap-2 px-2 electron:h-toolbar extension:py-row-y`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var kh,
  Ah,
  jh = e(() => {
    ((kh = z()), (Ah = q()));
  }),
  Mh,
  Nh,
  Ph = e(() => {
    ((Mh = t(W(), 1)),
      vh(),
      Dh(),
      jh(),
      (Nh = {
        Root: (0, Mh.memo)(uh),
        LeftPanel: Wm,
        Content: (0, Mh.memo)(ch),
        Header: (0, Mh.memo)(Gm),
        HeaderAction: (0, Mh.memo)(Km),
        HeaderContextMenuItem: (0, Mh.memo)(qm),
        HeaderToolbar: (0, Mh.memo)(Oh),
        MainContentLayout: (0, Mh.memo)(lh),
        BottomPanel: th,
        BottomPanelTabs: (0, Mh.memo)(nh),
        BottomPanelTabsEmptyState: (0, Mh.memo)(rh),
        BottomPanelTabListAfter: (0, Mh.memo)(ih),
        BottomPanelTabListAfterSticky: (0, Mh.memo)(ah),
        BottomPanelOutlet: (0, Mh.memo)(oh),
        RightPanel: Jm,
        RightPanelTabs: (0, Mh.memo)(Ym),
        RightPanelTabsEmptyState: (0, Mh.memo)(Xm),
        RightPanelTabListAfter: (0, Mh.memo)(Qm),
        RightPanelTabListAfterSticky: (0, Mh.memo)(eh),
        RightPanelTabListBefore: (0, Mh.memo)($m),
        RightPanelOutlet: (0, Mh.memo)(Zm),
        DetailPanel: (0, Mh.memo)(bh),
        DetailPanelLoading: (0, Mh.memo)(Ch),
        DetailPanelOutlet: (0, Mh.memo)(yh),
      }));
  }),
  Fh,
  Ih,
  Lh = e(() => {
    (t(W()),
      (Fh = q()),
      (Ih = (e) =>
        (0, Fh.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `currentColor`,
          viewBox: `0 0 20 20`,
          ...e,
          children: [
            (0, Fh.jsx)(`path`, {
              d: `M7.231 7.231a.665.665 0 0 1 .94 0L10 9.06l1.828-1.829.104-.085a.666.666 0 0 1 .921.922l-.084.104L10.94 10l1.829 1.828a.665.665 0 0 1-.94.94L10 10.94l-1.828 1.83a.665.665 0 0 1-.94-.94L9.06 10 7.23 8.172a.665.665 0 0 1 0-.94Z`,
            }),
            (0, Fh.jsx)(`path`, {
              fillRule: `evenodd`,
              d: `M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z`,
              clipRule: `evenodd`,
            }),
          ],
        })));
  });
function Rh(e) {
  let t = (0, zh.c)(23),
    {
      actions: n,
      asset: r,
      subtitle: i,
      subtitleClassName: a,
      title: o,
      variant: s,
    } = e,
    c = s === void 0 ? `default` : s,
    l;
  t[0] === r
    ? (l = t[1])
    : ((l =
        r == null
          ? null
          : (0, Bh.jsx)(`div`, { className: `flex`, children: r })),
      (t[0] = r),
      (t[1] = l));
  let u = c === `settings` && `heading-lg font-normal`,
    d = c === `page` && `heading-lg electron:heading-xl`,
    f = c === `default` && `heading-base electron:heading-lg`,
    p;
  t[2] !== u || t[3] !== d || t[4] !== f
    ? ((p = H(`min-w-0 break-words text-token-foreground`, u, d, f)),
      (t[2] = u),
      (t[3] = d),
      (t[4] = f),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] !== p || t[7] !== o
    ? ((m = (0, Bh.jsx)(`h1`, { className: p, children: o })),
      (t[6] = p),
      (t[7] = o),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== i || t[10] !== a
    ? ((h =
        i == null
          ? null
          : (0, Bh.jsx)(`div`, {
              className: H(`text-base text-token-text-secondary`, a),
              children: i,
            })),
      (t[9] = i),
      (t[10] = a),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== m || t[13] !== h
    ? ((g = (0, Bh.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 basis-64 flex-col gap-1.5`,
        children: [m, h],
      })),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === n
    ? (_ = t[16])
    : ((_ =
        n == null
          ? null
          : (0, Bh.jsx)(`div`, {
              className: `flex max-w-full shrink-0 items-center gap-2`,
              children: n,
            })),
      (t[15] = n),
      (t[16] = _));
  let v;
  t[17] !== _ || t[18] !== g
    ? ((v = (0, Bh.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-start justify-between gap-4`,
        children: [g, _],
      })),
      (t[17] = _),
      (t[18] = g),
      (t[19] = v))
    : (v = t[19]);
  let y;
  return (
    t[20] !== v || t[21] !== l
      ? ((y = (0, Bh.jsxs)(`header`, {
          className: `flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]`,
          children: [l, v],
        })),
        (t[20] = v),
        (t[21] = l),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
var zh,
  Bh,
  Vh = e(() => {
    ((zh = z()), cn(), (Bh = q()));
  });
function Hh(e) {
  let t = (0, Uh.c)(33),
    {
      id: n,
      inputRef: r,
      className: i,
      autoFocus: a,
      inputKey: o,
      isClearable: s,
      label: c,
      maxLength: l,
      onKeyDown: u,
      onSearchQueryChange: d,
      placeholder: f,
      readOnly: p,
      searchQuery: m,
      trailingControl: h,
      variant: g,
    } = e,
    _ = s === void 0 ? !0 : s,
    v = g === void 0 ? `default` : g,
    y = Mn(),
    b =
      v === `composer`
        ? `h-8 rounded-full bg-token-input-background/90 electron:dark:bg-token-dropdown-background`
        : `h-token-button-composer rounded-lg bg-token-input-background/75 shadow-sm`,
    x;
  t[0] !== i || t[1] !== b
    ? ((x = H(
        `no-drag flex items-center gap-2 border border-token-input-border px-2.5 py-0 text-base leading-[18px] backdrop-blur-sm`,
        b,
        i,
      )),
      (t[0] = i),
      (t[1] = b),
      (t[2] = x))
    : (x = t[2]);
  let S;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Wh.jsx)(N, { className: `icon-sm text-token-text-secondary` })),
      (t[3] = S))
    : (S = t[3]);
  let C;
  t[4] !== n || t[5] !== c
    ? ((C = (0, Wh.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: n,
        children: c,
      })),
      (t[4] = n),
      (t[5] = c),
      (t[6] = C))
    : (C = t[6]);
  let w;
  t[7] === d
    ? (w = t[8])
    : ((w = (e) => {
        d(e.target.value);
      }),
      (t[7] = d),
      (t[8] = w));
  let T;
  t[9] !== a ||
  t[10] !== n ||
  t[11] !== o ||
  t[12] !== r ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== f ||
  t[16] !== p ||
  t[17] !== m ||
  t[18] !== w
    ? ((T = (0, Wh.jsx)(
        `input`,
        {
          autoFocus: a,
          id: n,
          ref: r,
          className: `min-w-0 flex-1 bg-transparent text-base leading-[18px] text-token-input-foreground outline-none select-text placeholder:text-token-input-placeholder-foreground [&::placeholder]:select-none`,
          maxLength: l,
          readOnly: p,
          type: `text`,
          value: m,
          onChange: w,
          onKeyDown: u,
          placeholder: f,
        },
        o,
      )),
      (t[9] = a),
      (t[10] = n),
      (t[11] = o),
      (t[12] = r),
      (t[13] = l),
      (t[14] = u),
      (t[15] = f),
      (t[16] = p),
      (t[17] = m),
      (t[18] = w),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] !== y || t[21] !== _ || t[22] !== d || t[23] !== m
    ? ((E =
        _ && m.length > 0
          ? (0, Wh.jsx)(`button`, {
              "aria-label": y.formatMessage({
                id: `skills.pageSearchInput.clear`,
                defaultMessage: `Clear search`,
                description: `Accessible label for clearing a search field`,
              }),
              className: `flex shrink-0 cursor-interaction text-token-text-secondary hover:text-token-foreground`,
              type: `button`,
              onClick: () => {
                d(``);
              },
              children: (0, Wh.jsx)(Ih, { className: `icon-sm` }),
            })
          : null),
      (t[20] = y),
      (t[21] = _),
      (t[22] = d),
      (t[23] = m),
      (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] === h
    ? (D = t[26])
    : ((D =
        h == null
          ? null
          : (0, Wh.jsx)(`div`, {
              className: `flex shrink-0 items-center`,
              children: h,
            })),
      (t[25] = h),
      (t[26] = D));
  let O;
  return (
    t[27] !== D || t[28] !== x || t[29] !== C || t[30] !== T || t[31] !== E
      ? ((O = (0, Wh.jsxs)(`div`, { className: x, children: [S, C, T, E, D] })),
        (t[27] = D),
        (t[28] = x),
        (t[29] = C),
        (t[30] = T),
        (t[31] = E),
        (t[32] = O))
      : (O = t[32]),
    O
  );
}
var Uh,
  Wh,
  Gh = e(() => {
    ((Uh = z()), cn(), Jt(), ae(), Lh(), (Wh = q()));
  });
function Kh(e) {
  let t = (0, Yh.c)(51),
    {
      children: n,
      contentClassName: r,
      controls: i,
      headerAction: a,
      headerPlacement: o,
      headerVariant: s,
      horizontalPaddingClassName: c,
      navigation: u,
      pageActions: d,
      scrollContainerRef: f,
      search: p,
      searchToolbar: m,
      subtitle: h,
      title: g,
      titleRef: _,
      toolbarActions: v,
    } = e,
    y = (o === void 0 ? `page` : o) === `toolbar`,
    b = (!y && u != null) || d != null,
    x = l(),
    S;
  t[0] === x
    ? (S = t[1])
    : ((S = x ? { duration: 0 } : L), (t[0] = x), (t[1] = S));
  let C = S,
    w;
  t[2] !== s ||
  t[3] !== y ||
  t[4] !== u ||
  t[5] !== g ||
  t[6] !== _ ||
  t[7] !== v ||
  t[8] !== C
    ? ((w =
        y || v != null
          ? (0, Xh.jsx)(Nh.Header, {
              children: (0, Xh.jsxs)(Nh.HeaderToolbar, {
                children: [
                  (0, Xh.jsx)(Ae, {
                    initial: !1,
                    children: y
                      ? (0, Xh.jsx)(
                          V.div,
                          {
                            animate: { opacity: 1, transform: `translateY(0)` },
                            className: `min-w-0 flex-1 overflow-hidden`,
                            exit: { opacity: 0, transform: `translateY(4px)` },
                            initial: {
                              opacity: 0,
                              transform: `translateY(4px)`,
                            },
                            transition: C,
                            children:
                              u ??
                              (0, Xh.jsx)(`h1`, {
                                ref: _,
                                className: H(
                                  `min-w-0 truncate text-base text-token-foreground electron:font-medium`,
                                  s === `inset` ? `px-2` : null,
                                ),
                                children: g,
                              }),
                          },
                          `toolbar-heading`,
                        )
                      : null,
                  }),
                  v == null
                    ? null
                    : (0, Xh.jsx)(`div`, {
                        className: `ml-auto flex min-w-0 items-center justify-end gap-2`,
                        children: v,
                      }),
                ],
              }),
            })
          : null),
      (t[2] = s),
      (t[3] = y),
      (t[4] = u),
      (t[5] = g),
      (t[6] = _),
      (t[7] = v),
      (t[8] = C),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] !== a ||
  t[11] !== s ||
  t[12] !== c ||
  t[13] !== y ||
  t[14] !== p ||
  t[15] !== h ||
  t[16] !== g ||
  t[17] !== _ ||
  t[18] !== C
    ? ((T = y
        ? null
        : (0, Xh.jsx)(
            V.div,
            {
              animate: { opacity: 1, transform: `translateY(0)` },
              exit: { opacity: 0, transform: `translateY(-4px)` },
              initial: { opacity: 0, transform: `translateY(-4px)` },
              transition: C,
              children: (0, Xh.jsx)(`div`, {
                className: H(
                  `mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pt-panel`,
                  p == null ? `pb-4` : null,
                  c,
                ),
                children: (0, Xh.jsxs)(`div`, {
                  className: H(
                    `flex items-start justify-between gap-4`,
                    s === `inset` ? `px-2` : null,
                  ),
                  children: [
                    (0, Xh.jsxs)(`div`, {
                      className: H(
                        `flex min-w-0 flex-col`,
                        s === `inset` ? `gap-2` : `gap-1`,
                      ),
                      children: [
                        (0, Xh.jsx)(`h1`, {
                          ref: _,
                          className: `heading-xl font-normal text-token-foreground`,
                          children: g,
                        }),
                        h == null
                          ? null
                          : (0, Xh.jsx)(`div`, {
                              className: `text-lg leading-6 text-token-text-secondary`,
                              children: h,
                            }),
                      ],
                    }),
                    a == null
                      ? null
                      : (0, Xh.jsx)(`div`, {
                          className: `shrink-0`,
                          children: a,
                        }),
                  ],
                }),
              }),
            },
            `page-heading`,
          )),
      (t[10] = a),
      (t[11] = s),
      (t[12] = c),
      (t[13] = y),
      (t[14] = p),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _),
      (t[18] = C),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] === T
    ? (E = t[21])
    : ((E = (0, Xh.jsx)(Ae, { initial: !1, mode: `popLayout`, children: T })),
      (t[20] = T),
      (t[21] = E));
  let D;
  t[22] !== c || t[23] !== p || t[24] !== m
    ? ((D =
        p == null
          ? null
          : (0, Xh.jsx)(qh, {
              className: `top-0`,
              children: (0, Xh.jsxs)(`div`, {
                className: H(
                  `mx-auto flex w-full max-w-[var(--thread-content-max-width)] items-center gap-2 px-panel pt-panel pb-2`,
                  c,
                ),
                children: [
                  (0, Xh.jsx)(Hh, {
                    ...p,
                    className: H(`min-w-0 flex-1`, p.className),
                    variant: `composer`,
                  }),
                  m,
                ],
              }),
            })),
      (t[22] = c),
      (t[23] = p),
      (t[24] = m),
      (t[25] = D))
    : (D = t[25]);
  let O = p == null ? `pt-panel` : `pt-5`,
    k;
  t[26] !== r || t[27] !== c || t[28] !== O
    ? ((k = H(
        `mx-auto flex min-h-0 w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col px-panel pb-panel`,
        O,
        r,
        c,
      )),
      (t[26] = r),
      (t[27] = c),
      (t[28] = O),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] !== b || t[31] !== y || t[32] !== u || t[33] !== d
    ? ((A = b
        ? (0, Xh.jsxs)(Jh, {
            children: [
              y ? null : u,
              d == null
                ? null
                : (0, Xh.jsx)(`div`, { className: `ml-auto`, children: d }),
            ],
          })
        : null),
      (t[30] = b),
      (t[31] = y),
      (t[32] = u),
      (t[33] = d),
      (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] !== n || t[36] !== i || t[37] !== k || t[38] !== A || t[39] !== C
    ? ((j = (0, Xh.jsxs)(V.div, {
        layout: `position`,
        className: k,
        transition: C,
        children: [A, i, n],
      })),
      (t[35] = n),
      (t[36] = i),
      (t[37] = k),
      (t[38] = A),
      (t[39] = C),
      (t[40] = j))
    : (j = t[40]);
  let M;
  t[41] !== j || t[42] !== E || t[43] !== D
    ? ((M = (0, Xh.jsxs)(`div`, {
        className: `flex min-h-full w-full flex-col`,
        children: [E, D, j],
      })),
      (t[41] = j),
      (t[42] = E),
      (t[43] = D),
      (t[44] = M))
    : (M = t[44]);
  let N;
  t[45] !== f || t[46] !== M
    ? ((N = (0, Xh.jsx)(`div`, {
        ref: f,
        className: `relative h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto [scrollbar-gutter:stable]`,
        children: M,
      })),
      (t[45] = f),
      (t[46] = M),
      (t[47] = N))
    : (N = t[47]);
  let P;
  return (
    t[48] !== N || t[49] !== w
      ? ((P = (0, Xh.jsxs)(Xh.Fragment, { children: [w, N] })),
        (t[48] = N),
        (t[49] = w),
        (t[50] = P))
      : (P = t[50]),
    P
  );
}
function qh(e) {
  let t = (0, Yh.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = H(
        `sticky z-30 bg-token-main-surface-primary after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:h-8 after:bg-linear-to-b after:from-token-main-surface-primary after:to-transparent after:content-['']`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Xh.jsx)(`div`, { className: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Jh(e) {
  let t = (0, Yh.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Xh.jsx)(`div`, {
          className: `flex items-center justify-between gap-4 px-3 pb-2`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Yh,
  Xh,
  Zh = e(() => {
    ((Yh = z()), cn(), y(), Ph(), U(), Gh(), (Xh = q()));
  });
function Qh(e) {
  let t = (0, eg.c)(63),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]))
    : (({
        title: m,
        backSlot: r,
        subtitle: u,
        children: i,
        fullWidth: f,
        contentClassName: o,
        subtitleClassName: d,
        action: n,
        stickyControls: l,
        embedded: p,
        ref: s,
        className: a,
        ...c
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  let h = f === void 0 ? !1 : f,
    g = p === void 0 ? !1 : p,
    _ = (0, tg.useContext)(rg),
    v = _?.targetId ?? null,
    y = _?.navigationKey ?? null,
    b;
  t[14] === v
    ? (b = t[15])
    : ((b = () => {
        v != null &&
          document.getElementById(v)?.scrollIntoView?.({ block: `center` });
      }),
      (t[14] = v),
      (t[15] = b));
  let x;
  (t[16] !== y || t[17] !== v
    ? ((x = [y, v]), (t[16] = y), (t[17] = v), (t[18] = x))
    : (x = t[18]),
    (0, tg.useLayoutEffect)(b, x));
  let S = h
      ? null
      : g
        ? `max-w-2xl`
        : `max-w-3xl electron:min-w-[calc(320px*var(--codex-window-zoom))]`,
    C;
  t[19] !== o || t[20] !== S
    ? ((C = H(`mx-auto flex w-full flex-col`, S, o)),
      (t[19] = o),
      (t[20] = S),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] !== n || t[23] !== g || t[24] !== u || t[25] !== d || t[26] !== m
    ? ((w =
        m == null
          ? null
          : (0, ng.jsx)(`div`, {
              className: g ? `pb-panel` : `pb-8`,
              children: (0, ng.jsx)(Rh, {
                actions: n,
                subtitle: u,
                subtitleClassName: H(`text-balance`, d),
                title: m,
                variant: g ? `default` : `settings`,
              }),
            })),
      (t[22] = n),
      (t[23] = g),
      (t[24] = u),
      (t[25] = d),
      (t[26] = m),
      (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] === l
    ? (T = t[29])
    : ((T =
        l == null
          ? null
          : (0, ng.jsx)(qh, {
              className: `top-[calc(-1*var(--padding-panel))] pt-panel pb-2`,
              children: l,
            })),
      (t[28] = l),
      (t[29] = T));
  let E = g && !h ? `gap-[var(--padding-panel)]` : `gap-10`,
    D = l != null && `pt-5`,
    O;
  t[30] !== D || t[31] !== E
    ? ((O = H(`flex flex-col`, E, D)), (t[30] = D), (t[31] = E), (t[32] = O))
    : (O = t[32]);
  let k;
  t[33] !== i || t[34] !== O
    ? ((k = (0, ng.jsx)(`div`, { className: O, children: i })),
      (t[33] = i),
      (t[34] = O),
      (t[35] = k))
    : (k = t[35]);
  let A;
  t[36] !== k || t[37] !== C || t[38] !== w || t[39] !== T
    ? ((A = (0, ng.jsxs)(`div`, { className: C, children: [w, T, k] })),
      (t[36] = k),
      (t[37] = C),
      (t[38] = w),
      (t[39] = T),
      (t[40] = A))
    : (A = t[40]);
  let j = A;
  if (g) {
    let e;
    t[41] === a
      ? (e = t[42])
      : ((e = H(`flex min-h-0 flex-col`, a)), (t[41] = a), (t[42] = e));
    let n;
    t[43] === r
      ? (n = t[44])
      : ((n = r
          ? (0, ng.jsx)(`div`, {
              className: `flex items-center pb-panel`,
              children: r,
            })
          : null),
        (t[43] = r),
        (t[44] = n));
    let i;
    return (
      t[45] !== j || t[46] !== s || t[47] !== c || t[48] !== e || t[49] !== n
        ? ((i = (0, ng.jsxs)(`div`, {
            ref: s,
            className: e,
            ...c,
            children: [n, j],
          })),
          (t[45] = j),
          (t[46] = s),
          (t[47] = c),
          (t[48] = e),
          (t[49] = n),
          (t[50] = i))
        : (i = t[50]),
      i
    );
  }
  let M;
  t[51] === a
    ? (M = t[52])
    : ((M = H(`main-surface flex h-full min-h-0 flex-col`, a)),
      (t[51] = a),
      (t[52] = M));
  let N;
  t[53] === r
    ? (N = t[54])
    : ((N = (0, ng.jsx)(`div`, {
        className: `draggable flex items-center px-panel electron:h-toolbar extension:h-toolbar-sm`,
        children: r,
      })),
      (t[53] = r),
      (t[54] = N));
  let P;
  t[55] === j
    ? (P = t[56])
    : ((P = (0, ng.jsx)(`div`, {
        className: `scrollbar-stable flex-1 overflow-y-auto p-panel`,
        children: j,
      })),
      (t[55] = j),
      (t[56] = P));
  let F;
  return (
    t[57] !== s || t[58] !== c || t[59] !== M || t[60] !== N || t[61] !== P
      ? ((F = (0, ng.jsxs)(`div`, {
          ref: s,
          className: M,
          ...c,
          children: [N, P],
        })),
        (t[57] = s),
        (t[58] = c),
        (t[59] = M),
        (t[60] = N),
        (t[61] = P),
        (t[62] = F))
      : (F = t[62]),
    F
  );
}
function $h(e) {
  let t = (0, eg.c)(6),
    { children: n, navigationKey: r, targetId: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = i == null ? null : { navigationKey: r, targetId: i }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, ng.jsx)(rg.Provider, { value: a, children: n })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var eg,
  tg,
  ng,
  rg,
  ig = e(() => {
    ((eg = z()),
      cn(),
      (tg = t(W(), 1)),
      Vh(),
      Zh(),
      (ng = q()),
      (rg = (0, tg.createContext)(null)));
  });
function ag({
  children: e = (0, og.jsx)(K, {
    id: `settings.panel.loading`,
    defaultMessage: `Loading settings…`,
    description: `Loading state shown while settings load`,
  }),
}) {
  return (0, og.jsxs)(`div`, {
    className: `flex items-center gap-2 py-2 text-sm text-token-text-secondary`,
    role: `status`,
    children: [
      (0, og.jsx)(Te, {
        className: `icon-xs shrink-0 text-token-text-secondary`,
      }),
      (0, og.jsx)(`span`, { className: `text-balance`, children: e }),
    ],
  });
}
var og,
  sg = e(() => {
    (Jt(), M(), (og = q()));
  });
function cg(e) {
  return lg[e];
}
var lg,
  ug = e(() => {
    (Jt(),
      (lg = on({
        appearance: {
          id: `settings.nav.appearance`,
          defaultMessage: `Appearance`,
          description: `Title for appearance settings section`,
        },
        voice: {
          id: `settings.nav.voice`,
          defaultMessage: `Voice`,
          description: `Title for voice settings section`,
        },
        pets: {
          id: `settings.nav.pets`,
          defaultMessage: `Pets`,
          description: `Title for pets settings section`,
        },
        "general-settings": {
          id: `settings.nav.general-settings`,
          defaultMessage: `General`,
          description: `Title for general settings section`,
        },
        import: {
          id: `settings.nav.import`,
          defaultMessage: `Import`,
          description: `Title for import settings section`,
        },
        profile: {
          id: `settings.nav.profile`,
          defaultMessage: `Profile`,
          description: `Title for profile section`,
        },
        "keyboard-shortcuts": {
          id: `settings.nav.keyboard-shortcuts`,
          defaultMessage: `Keyboard shortcuts`,
          description: `Title for keyboard shortcuts settings section`,
        },
        "codex-micro": {
          id: `settings.nav.codex-micro`,
          defaultMessage: `Codex Micro`,
          description: `Title for Codex Micro settings section`,
        },
        appshots: {
          id: `settings.nav.appshots`,
          defaultMessage: `Appshots`,
          description: `Title for appshots settings section`,
        },
        agent: {
          id: `settings.nav.agent`,
          defaultMessage: `Configuration`,
          description: `Title for configuration settings section`,
        },
        "git-settings": {
          id: `settings.nav.git-settings`,
          defaultMessage: `Git`,
          description: `Title for git settings section`,
        },
        "data-controls": {
          id: `settings.nav.data-controls`,
          defaultMessage: `Archived tasks`,
          description: `Title for archived tasks settings section`,
        },
        "code-review": {
          id: `settings.nav.codeReview`,
          defaultMessage: `Code review`,
          description: `Title for code review settings section`,
        },
        "cloud-settings": {
          id: `settings.nav.cloudSettings`,
          defaultMessage: `Cloud preferences`,
          description: `Title for cloud settings section`,
        },
        "cloud-environments": {
          id: `settings.nav.cloudEnvironments`,
          defaultMessage: `Cloud environments`,
          description: `Title for cloud environments settings section`,
        },
        personalization: {
          id: `settings.nav.personalization`,
          defaultMessage: `Personalization`,
          description: `Title for personalization settings section`,
        },
        usage: {
          id: `settings.nav.usage`,
          defaultMessage: `Usage & billing`,
          description: `Title for usage and billing settings section`,
        },
        debug: {
          id: `settings.nav.debug`,
          defaultMessage: `Debug`,
          description: `Title for debug settings section`,
        },
        "computer-use": {
          id: `settings.nav.computer-use`,
          defaultMessage: `Computer use`,
          description: `Title for computer use settings section`,
        },
        "browser-use": {
          id: `settings.nav.browser-use`,
          defaultMessage: `Browser`,
          description: `Title for in-app browser settings section`,
        },
        "local-environments": {
          id: `settings.nav.local-environments`,
          defaultMessage: `Environments`,
          description: `Title for environments settings section`,
        },
        worktrees: {
          id: `settings.nav.worktrees`,
          defaultMessage: `Worktrees`,
          description: `Title for worktrees settings section`,
        },
        environments: {
          id: `settings.nav.environments`,
          defaultMessage: `Cloud Environments`,
          description: `Title for environments settings section`,
        },
        "mcp-settings": {
          id: `settings.nav.mcp-settings`,
          defaultMessage: `MCP servers`,
          description: `Title for MCP servers settings section`,
        },
        "hooks-settings": {
          id: `settings.nav.hooks-settings`,
          defaultMessage: `Hooks`,
          description: `Title for hooks settings section`,
        },
        connections: {
          id: `settings.nav.connections`,
          defaultMessage: `Connections`,
          description: `Title for connections settings section`,
        },
        "plugins-settings": {
          id: `settings.nav.plugins-settings`,
          defaultMessage: `Plugins`,
          description: `Title for plugins settings section`,
        },
        "skills-settings": {
          id: `settings.nav.skills-settings`,
          defaultMessage: `Skills`,
          description: `Title for skills settings section`,
        },
      })));
  });
function dg(e) {
  let t = (0, mg.c)(24),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({
        children: r,
        className: i,
        contentClassName: a,
        chevronClassName: n,
        color: s,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = s === void 0 ? `outline` : s,
    l;
  t[7] === i
    ? (l = t[8])
    : ((l = H(`max-w-full justify-between px-3`, i)), (t[7] = i), (t[8] = l));
  let u;
  t[9] === a
    ? (u = t[10])
    : ((u = H(`flex min-w-0 flex-1 items-center gap-1.5`, a)),
      (t[9] = a),
      (t[10] = u));
  let d;
  t[11] !== r || t[12] !== u
    ? ((d = (0, $.jsx)(`span`, { className: u, children: r })),
      (t[11] = r),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === n
    ? (f = t[15])
    : ((f = H(`icon-2xs shrink-0 text-token-input-placeholder-foreground`, n)),
      (t[14] = n),
      (t[15] = f));
  let p;
  t[16] === f
    ? (p = t[17])
    : ((p = (0, $.jsx)(Xe, { className: f })), (t[16] = f), (t[17] = p));
  let m;
  return (
    t[18] !== c || t[19] !== o || t[20] !== l || t[21] !== d || t[22] !== p
      ? ((m = (0, $.jsxs)(me, {
          color: c,
          size: `toolbar`,
          className: l,
          ...o,
          children: [d, p],
        })),
        (t[18] = c),
        (t[19] = o),
        (t[20] = l),
        (t[21] = d),
        (t[22] = p),
        (t[23] = m))
      : (m = t[23]),
    m
  );
}
function fg(e) {
  let t = (0, mg.c)(4),
    { slug: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = cg(n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(K, { ...r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function pg(e) {
  let t = (0, mg.c)(28),
    { slug: n } = e;
  switch (n) {
    case `appshots`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.appshots`,
              defaultMessage: `Appshots`,
              description: `Title for appshots settings section`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `appearance`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.appearance`,
              defaultMessage: `Appearance`,
              description: `Title for appearance settings section`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `voice`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.voice`,
              defaultMessage: `Voice`,
              description: `Title for voice settings section`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `pets`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.pets`,
              defaultMessage: `Pets`,
              description: `Title for pets settings section`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `general-settings`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.general-settings`,
              defaultMessage: `General`,
              description: `Title for general settings section`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `import`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.import`,
              defaultMessage: `Import`,
              description: `Title for import settings section`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `profile`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.profile`,
              defaultMessage: `Profile`,
              description: `Title for profile section`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `keyboard-shortcuts`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.keyboard-shortcuts`,
              defaultMessage: `Keyboard shortcuts`,
              description: `Title for keyboard shortcuts settings section`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `codex-micro`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.codex-micro`,
              defaultMessage: `Codex Micro`,
              description: `Title for Codex Micro settings section`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `agent`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.agent`,
              defaultMessage: `Configuration`,
              description: `Title for configuration settings section`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `git-settings`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.git-settings`,
              defaultMessage: `Git`,
              description: `Title for git settings section`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `data-controls`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.data-controls`,
              defaultMessage: `Archived tasks`,
              description: `Title for archived tasks settings section`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `code-review`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.codeReview`,
              defaultMessage: `Code review`,
              description: `Title for code review settings section`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `cloud-settings`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.cloudSettings`,
              defaultMessage: `Cloud preferences`,
              description: `Title for cloud settings section`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `cloud-environments`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.cloudEnvironments`,
              defaultMessage: `Cloud environments`,
              description: `Title for cloud environments settings section`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `personalization`: {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.personalization`,
              defaultMessage: `Personalization`,
              description: `Title for personalization settings section`,
            })),
            (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    case `usage`: {
      let e;
      return (
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.usage`,
              defaultMessage: `Usage & billing`,
              description: `Title for usage and billing settings section`,
            })),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    case `debug`: {
      let e;
      return (
        t[17] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.debug`,
              defaultMessage: `Debug`,
              description: `Title for debug settings section`,
            })),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `computer-use`: {
      let e;
      return (
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `computerUse.label`,
              defaultMessage: `Computer use`,
              description: `Label for the Computer Use feature`,
            })),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    case `browser-use`: {
      let e;
      return (
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.browser-use`,
              defaultMessage: `Browser`,
              description: `Title for in-app browser settings section`,
            })),
            (t[19] = e))
          : (e = t[19]),
        e
      );
    }
    case `local-environments`: {
      let e;
      return (
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.local-environments`,
              defaultMessage: `Environments`,
              description: `Title for environments settings section`,
            })),
            (t[20] = e))
          : (e = t[20]),
        e
      );
    }
    case `worktrees`: {
      let e;
      return (
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.worktrees`,
              defaultMessage: `Worktrees`,
              description: `Title for worktrees settings section`,
            })),
            (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    case `environments`: {
      let e;
      return (
        t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.environments`,
              defaultMessage: `Cloud Environments`,
              description: `Title for environments settings section`,
            })),
            (t[22] = e))
          : (e = t[22]),
        e
      );
    }
    case `mcp-settings`: {
      let e;
      return (
        t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.mcp-settings`,
              defaultMessage: `MCP servers`,
              description: `Title for MCP servers settings section`,
            })),
            (t[23] = e))
          : (e = t[23]),
        e
      );
    }
    case `hooks-settings`: {
      let e;
      return (
        t[24] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.hooks-settings`,
              defaultMessage: `Hooks`,
              description: `Title for hooks settings section`,
            })),
            (t[24] = e))
          : (e = t[24]),
        e
      );
    }
    case `connections`: {
      let e;
      return (
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.connections`,
              defaultMessage: `Connections`,
              description: `Title for connections settings section`,
            })),
            (t[25] = e))
          : (e = t[25]),
        e
      );
    }
    case `plugins-settings`: {
      let e;
      return (
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.plugins-settings`,
              defaultMessage: `Plugins`,
              description: `Title for plugins settings section`,
            })),
            (t[26] = e))
          : (e = t[26]),
        e
      );
    }
    case `skills-settings`: {
      let e;
      return (
        t[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(K, {
              id: `settings.section.skills-settings`,
              defaultMessage: `Skills`,
              description: `Title for skills settings section`,
            })),
            (t[27] = e))
          : (e = t[27]),
        e
      );
    }
  }
}
var mg,
  $,
  hg = e(() => {
    ((mg = z()), cn(), Jt(), ve(), P(), ug(), ($ = q()));
  });
function gg(e) {
  let t = (0, _g.c)(5),
    { section: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (0, vg.jsx)(pg, { slug: n })), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, vg.jsx)(ag, {})), (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, vg.jsx)(Qh, { title: r, children: i })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
var _g,
  vg,
  yg = e(() => {
    ((_g = z()), ig(), sg(), hg(), (vg = q()));
  });
export {
  ef as $,
  ia as $n,
  Yc as $t,
  yp as A,
  Co as An,
  rd as At,
  Mf as B,
  go as Bn,
  eu as Bt,
  Nh as C,
  Vo as Cn,
  pd as Ct,
  wp as D,
  Fo as Dn,
  td as Dt,
  em as E,
  Io as En,
  od as Et,
  qf as F,
  ko as Fn,
  au as Ft,
  vf as G,
  Ha as Gn,
  wl as Gt,
  yf as H,
  po as Hn,
  hl as Ht,
  Lf as I,
  Uo as In,
  su as It,
  mf as J,
  ha as Jn,
  ll as Jt,
  gf as K,
  no as Kn,
  Pl as Kt,
  Rf as L,
  yo as Ln,
  nu as Lt,
  sp as M,
  bo as Mn,
  Qu as Mt,
  ep as N,
  Do as Nn,
  $u as Nt,
  Tp as O,
  No as On,
  Zu as Ot,
  zf as P,
  xo as Pn,
  Ju as Pt,
  $d as Q,
  ro as Qn,
  Jc as Qt,
  Ff as R,
  ho as Rn,
  tu as Rt,
  Lh as S,
  Zs as Sn,
  md as St,
  $p as T,
  Lo as Tn,
  nd as Tt,
  Df as U,
  ao as Un,
  Gl as Ut,
  Nf as V,
  so as Vn,
  Sl as Vt,
  hf as W,
  oo as Wn,
  Wl as Wt,
  rf as X,
  ta as Xn,
  rl as Xt,
  pf as Y,
  va as Yn,
  ul as Yt,
  af as Z,
  Ur as Zn,
  sl as Zt,
  Hh as _,
  sc as _n,
  vd as _t,
  pg as a,
  Ms as an,
  mr as ar,
  jd as at,
  Vh as b,
  ec as bn,
  gd as bt,
  ug as c,
  Js as cn,
  Vn as cr,
  Md as ct,
  Qh as d,
  js as dn,
  zn as dr,
  Od as dt,
  Ws as en,
  Hi as er,
  Qd as et,
  $h as f,
  Rs as fn,
  Bn as fr,
  Dd as ft,
  Zh as g,
  xc as gn,
  Ed as gt,
  Kh as h,
  Vs as hn,
  Sd as ht,
  fg as i,
  cc as in,
  Or as ir,
  Bd as it,
  mp as j,
  jo as jn,
  ed as jt,
  Ep as k,
  Mo as kn,
  id as kt,
  ag as l,
  Hs as ln,
  ur as lr,
  Pd as lt,
  Jh as m,
  Xs as mn,
  bd as mt,
  yg as n,
  zs as nn,
  Ui as nr,
  nf as nt,
  hg as o,
  As as on,
  gr as or,
  Id as ot,
  ig as p,
  Qs as pn,
  Ld as pt,
  ff as q,
  Y as qn,
  dl as qt,
  dg as r,
  Us as rn,
  Dr as rr,
  zd as rt,
  cg as s,
  $s as sn,
  ir as sr,
  Ad as st,
  gg as t,
  tc as tn,
  Vi as tr,
  tf as tt,
  sg as u,
  Ns as un,
  tr as ur,
  Fd as ut,
  Gh as v,
  ac as vn,
  _d as vt,
  Ph as w,
  Ro as wn,
  ad as wt,
  Ih as x,
  ic as xn,
  ud as xt,
  Rh as y,
  qs as yn,
  yd as yt,
  If as z,
  mo as zn,
  $l as zt,
};
//# sourceMappingURL=app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js.map
