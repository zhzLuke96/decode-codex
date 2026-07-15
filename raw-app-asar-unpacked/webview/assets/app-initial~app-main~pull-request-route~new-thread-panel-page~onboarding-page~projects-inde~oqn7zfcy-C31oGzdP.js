import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  DJ as n,
  I2 as r,
  IJ as i,
  KJ as a,
  L2 as o,
  RJ as s,
  k2 as c,
  qJ as l,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var u,
  d,
  f = e(() => {
    (t(o()),
      (u = c()),
      (d = (e) =>
        (0, u.jsx)(`svg`, {
          width: 21,
          height: 21,
          viewBox: `0 0 21 21`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, u.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M10.7997 2.48486C15.4019 2.48486 19.1335 6.21565 19.1337 10.8179C19.1337 15.4202 15.4021 19.1519 10.7997 19.1519C6.19746 19.1517 2.46667 15.4201 2.46667 10.8179C2.46685 6.21576 6.19757 2.48504 10.7997 2.48486ZM8.97253 8.05029C8.71284 7.79059 8.29083 7.79059 8.03113 8.05029C7.77189 8.31002 7.77162 8.73117 8.03113 8.99072L9.85925 10.8179L8.03113 12.646C7.77173 12.9056 7.77178 13.3268 8.03113 13.5864C8.29083 13.8461 8.71284 13.8461 8.97253 13.5864L10.7997 11.7583L12.6278 13.5864C12.8875 13.8461 13.3085 13.8461 13.5682 13.5864C13.8279 13.3267 13.8279 12.9057 13.5682 12.646L11.7401 10.8179L13.5682 8.99072L13.6532 8.88623C13.8237 8.62817 13.7953 8.27758 13.5682 8.05029C13.341 7.82301 12.9904 7.79478 12.7323 7.96533L12.6278 8.05029L10.7997 9.87744L8.97253 8.05029Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    ((p = `_multilineSurface_1x8j3_2`),
      (m = `_singleLineRadiusSurface_1x8j3_2`),
      (h = `_attachmentsDefault_1x8j3_2`),
      (g = `_footer_1x8j3_2`),
      (_ = `_footerLabel_1x8j3_2`),
      (v = {
        multilineSurface: p,
        singleLineRadiusSurface: m,
        attachmentsDefault: h,
        footer: g,
        footerLabel: _,
      }));
  });
function b(e) {
  let t = (0, P.c)(18),
    {
      children: n,
      className: r,
      utilityBarVariant: o,
      inert: s,
      isDragActive: c,
      layout: l,
      radiusVariant: u,
      surfaceVariant: d,
      onDragEnter: f,
      onDragLeave: p,
      onDragOver: m,
      onDrop: h,
    } = e,
    g = o === void 0 ? `default` : o,
    _ = c === void 0 ? !1 : c,
    y = l === void 0 ? `multiline` : l,
    b = u === void 0 ? `default` : u,
    x =
      (d === void 0 ? `default` : d) === `opaque`
        ? `bg-token-input-background electron:dark:bg-token-dropdown-background`
        : `bg-token-input-background/90 backdrop-blur-lg electron:dark:bg-token-dropdown-background`,
    S = g === `home` && `z-10`,
    C = b === `single-line` && v.singleLineRadiusSurface,
    w = y === `single-line` && `overflow-visible`,
    T = y === `single-line` && b === `default` && `rounded-full`,
    E = y === `multiline` && b === `single-line` && `overflow-y-auto`,
    D = y === `multiline` && b === `default` && v.multilineSurface,
    O = _ && `bg-token-dropdown-background/50`,
    k;
  t[0] !== r ||
  t[1] !== T ||
  t[2] !== E ||
  t[3] !== D ||
  t[4] !== O ||
  t[5] !== x ||
  t[6] !== S ||
  t[7] !== C ||
  t[8] !== w
    ? ((k = a(
        `composer-surface-chrome relative flex flex-col`,
        x,
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        r,
      )),
      (t[0] = r),
      (t[1] = T),
      (t[2] = E),
      (t[3] = D),
      (t[4] = O),
      (t[5] = x),
      (t[6] = S),
      (t[7] = C),
      (t[8] = w),
      (t[9] = k))
    : (k = t[9]);
  let A;
  return (
    t[10] !== n ||
    t[11] !== s ||
    t[12] !== f ||
    t[13] !== p ||
    t[14] !== m ||
    t[15] !== h ||
    t[16] !== k
      ? ((A = (0, F.jsx)(i.div, {
          inert: s,
          className: k,
          onDragEnter: f,
          onDragOver: m,
          onDragLeave: p,
          onDrop: h,
          children: n,
        })),
        (t[10] = n),
        (t[11] = s),
        (t[12] = f),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h),
        (t[16] = k),
        (t[17] = A))
      : (A = t[17]),
    A
  );
}
function x(e) {
  let t = (0, P.c)(7),
    { children: n, hasVisibleAttachments: r, ref: i, spacing: o } = e,
    s = r === void 0 ? !1 : r,
    c = o === void 0 ? `default` : o,
    l = c === `flush` && s && `mb-[5px]`,
    u = c === `default` && v.attachmentsDefault,
    d;
  t[0] !== l || t[1] !== u
    ? ((d = a(l, u)), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  return (
    t[3] !== n || t[4] !== i || t[5] !== d
      ? ((f = (0, F.jsx)(`div`, { ref: i, className: d, children: n })),
        (t[3] = n),
        (t[4] = i),
        (t[5] = d),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
function S(e) {
  let t = (0, P.c)(7),
    { children: n, layout: r, ref: i, spacing: o } = e,
    s = r === void 0 ? `multiline` : r,
    c = o === void 0 ? `default` : o,
    l = s === `single-line` ? `min-w-0` : `mb-1 flex-grow overflow-y-auto`,
    u = s === `multiline` && (c === `flush` ? `px-0` : `px-3`),
    d;
  t[0] !== l || t[1] !== u
    ? ((d = a(l, u)), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  return (
    t[3] !== n || t[4] !== i || t[5] !== d
      ? ((f = (0, F.jsx)(`div`, { ref: i, className: d, children: n })),
        (t[3] = n),
        (t[4] = i),
        (t[5] = d),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
function C(e) {
  let t = (0, P.c)(10),
    { children: n, isHidden: r, isVisible: o, variant: c } = e,
    l = r === void 0 ? !1 : r;
  if (c !== `home`) {
    let e;
    return (
      t[0] !== n || t[1] !== l || t[2] !== o
        ? ((e = o
            ? (0, F.jsx)(`div`, {
                "aria-hidden": l,
                className: a(l && `pointer-events-none opacity-0`),
                inert: l,
                children: n,
              })
            : null),
          (t[0] = n),
          (t[1] = l),
          (t[2] = o),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let u;
  t[4] !== n || t[5] !== l || t[6] !== o
    ? ((u = o
        ? (0, F.jsx)(
            i.div,
            {
              "aria-hidden": l,
              initial: { y: `100%` },
              animate: { y: 0 },
              exit: { y: `100%`, pointerEvents: `none` },
              transition: I,
              inert: l,
              className: a(
                `relative z-0 -mb-2`,
                l && `pointer-events-none opacity-0`,
              ),
              children: n,
            },
            `home-utility-bar`,
          )
        : null),
      (t[4] = n),
      (t[5] = l),
      (t[6] = o),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] === u
      ? (d = t[9])
      : ((d = (0, F.jsx)(s, { initial: !1, mode: `popLayout`, children: u })),
        (t[8] = u),
        (t[9] = d)),
    d
  );
}
function w(e) {
  let t = (0, P.c)(12),
    { children: n, layout: r, responsive: i, spacing: o } = e,
    s = r === void 0 ? `multiline` : r,
    c = i === void 0 ? !1 : i,
    l = o === void 0 ? `default` : o;
  if (s === `single-line`) {
    let e = c && v.footer,
      r;
    t[0] === e
      ? (r = t[1])
      : ((r = a(
          e,
          `grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-2 py-1 select-none`,
        )),
        (t[0] = e),
        (t[1] = r));
    let i;
    return (
      t[2] !== n || t[3] !== r
        ? ((i = (0, F.jsx)(`div`, { className: r, children: n })),
          (t[2] = n),
          (t[3] = r),
          (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let u = c && v.footer,
    d = l === `flush` ? `mb-0` : `mb-2`,
    f = l === `flush` ? `px-0` : `px-2`,
    p;
  t[5] !== u || t[6] !== d || t[7] !== f
    ? ((p = a(
        u,
        `grid grid-cols-[minmax(0,auto)_auto_minmax(0,1fr)] items-center gap-x-[5px] select-none`,
        d,
        f,
      )),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== n || t[10] !== p
      ? ((m = (0, F.jsx)(`div`, { className: p, children: n })),
        (t[9] = n),
        (t[10] = p),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function T(e) {
  let t = (0, P.c)(3),
    { children: n, ref: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, F.jsx)(`div`, {
          ref: r,
          className: `flex items-center`,
          onPointerDown: E,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function E(e) {
  return e.stopPropagation();
}
function D(e) {
  let t = (0, P.c)(3),
    { children: n, ref: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, F.jsx)(`div`, {
          ref: r,
          className: `flex shrink-0 items-center gap-2`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function O(e) {
  let t = (0, P.c)(6),
    { children: n, layout: r, ref: i } = e,
    o =
      (r === void 0 ? `multiline` : r) === `multiline`
        ? `w-full`
        : `shrink-0 gap-2`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = a(`flex min-w-0 items-center justify-end`, o)),
      (t[0] = o),
      (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== i || t[4] !== s
      ? ((c = (0, F.jsx)(`div`, { ref: i, className: s, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function k(e) {
  let t = (0, P.c)(6),
    { children: n, gap: r, ref: i } = e,
    o = (r === void 0 ? `compact` : r) === `compact` ? `gap-1` : `gap-[5px]`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = a(`flex min-w-0 items-center`, o)), (t[0] = o), (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== i || t[4] !== s
      ? ((c = (0, F.jsx)(`div`, { ref: i, className: s, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function A(e) {
  let t = (0, P.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, F.jsx)(`div`, {
          className: `flex min-w-0 flex-1 justify-end`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function j() {
  let e = (0, P.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, F.jsx)(`div`, { className: `h-4 w-px bg-token-border/70` })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function M(e) {
  let t = (0, P.c)(8),
    { children: n, hideWhenNarrow: r, width: i } = e,
    o = (r === void 0 ? !0 : r) && v.footerLabel,
    s = i === `narrow` && `max-w-16`,
    c = i === `medium` && `max-w-20`,
    l = i === `wide` && `max-w-28`,
    u;
  t[0] !== o || t[1] !== s || t[2] !== c || t[3] !== l
    ? ((u = a(o, `truncate`, s, c, l)),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u))
    : (u = t[4]);
  let d;
  return (
    t[5] !== n || t[6] !== u
      ? ((d = (0, F.jsx)(`span`, { className: u, children: n })),
        (t[5] = n),
        (t[6] = u),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
function N(e) {
  let t = (0, P.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, F.jsx)(`div`, {
          className: `relative z-10 flex min-h-0 flex-1 flex-col`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var P,
  F,
  I,
  L,
  R = e(() => {
    ((P = r()),
      l(),
      n(),
      y(),
      (F = c()),
      (I = { type: `spring`, duration: 0.35, bounce: 0.1 }),
      (L = Object.assign(b, {
        Attachments: x,
        Body: N,
        UtilityBarSlot: C,
        Footer: w,
        FooterAction: T,
        FooterActions: D,
        FooterControls: O,
        FooterDivider: j,
        FooterExpandingControls: A,
        FooterInlineControls: k,
        FooterLabel: M,
        Input: S,
      })));
  });
export { f as i, R as n, d as r, L as t };
//# sourceMappingURL=app-initial~app-main~pull-request-route~new-thread-panel-page~onboarding-page~projects-inde~oqn7zfcy-C31oGzdP.js.map
