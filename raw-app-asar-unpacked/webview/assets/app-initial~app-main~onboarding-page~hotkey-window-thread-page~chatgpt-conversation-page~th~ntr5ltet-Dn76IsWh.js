import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  KJ as r,
  L2 as i,
  Mq as a,
  Nq as o,
  k2 as s,
  qJ as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var l,
  u,
  d = e(() => {
    (t(i()),
      (l = s()),
      (u = (e) =>
        (0, l.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, l.jsx)(`path`, {
              d: `M10.02 6.70483C9.66589 6.70516 9.37778 6.9928 9.37778 7.34698V9.36292H7.36187C7.00755 9.36292 6.71983 9.65081 6.71973 10.005C6.71973 10.3595 7.00749 10.6473 7.36187 10.6473H9.37778V12.6644C9.37812 13.0184 9.666 13.3061 10.02 13.3065C10.3742 13.3065 10.6619 13.0186 10.6621 12.6644V10.6473H12.6792C13.0337 10.6473 13.3214 10.3595 13.3214 10.005C13.3213 9.65081 13.0336 9.36292 12.6792 9.36292H10.6621V7.34698C10.6621 6.9926 10.3743 6.70483 10.02 6.70483Z`,
              fill: `currentColor`,
            }),
            (0, l.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M9.9994 2.43188C5.62998 2.43188 2.02393 5.78683 2.02393 10.0003C2.02401 11.5112 2.49346 12.9166 3.29509 14.0943C3.29768 14.0982 3.29903 14.1028 3.29986 14.1051V14.1086L2.80334 16.0339C2.61585 16.7426 3.27268 17.3856 3.97781 17.1845L3.97901 17.1856L6.08567 16.5961L6.08806 16.5949H6.09164C7.24756 17.2136 8.58138 17.5676 9.9994 17.5676C14.3687 17.5676 17.9746 14.2136 17.9748 10.0003C17.9748 5.78683 14.3688 2.43188 9.9994 2.43188ZM9.9994 3.71617C13.7302 3.71617 16.6906 6.56372 16.6906 10.0003C16.6904 13.4369 13.7301 16.2845 9.9994 16.2845C8.79575 16.2845 7.66933 15.9853 6.69678 15.4645L6.6932 15.4622L6.58339 15.4109C6.3226 15.3028 6.02191 15.2753 5.72998 15.3619L4.19027 15.7928L4.54238 14.4285L4.54118 14.4273C4.64035 14.0542 4.55881 13.6756 4.36215 13.3818L4.35857 13.377L4.12224 13.0022C3.6023 12.1093 3.30829 11.087 3.30821 10.0003C3.30821 6.56372 6.26865 3.71617 9.9994 3.71617Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function f(e) {
  let t = (0, h.c)(56),
    n,
    i,
    o,
    s,
    c,
    l,
    d,
    f,
    x,
    S,
    C,
    w;
  t[0] === e
    ? ((n = t[1]),
      (i = t[2]),
      (o = t[3]),
      (s = t[4]),
      (c = t[5]),
      (l = t[6]),
      (d = t[7]),
      (f = t[8]),
      (x = t[9]),
      (S = t[10]),
      (C = t[11]),
      (w = t[12]))
    : (({
        active: n,
        activeHoverSuppressed: i,
        activeLabel: o,
        className: c,
        direction: l,
        disabled: d,
        label: f,
        onActiveHoverSuppressedChange: x,
        onClick: S,
        onPointerLeave: C,
        style: w,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = d),
      (t[8] = f),
      (t[9] = x),
      (t[10] = S),
      (t[11] = C),
      (t[12] = w));
  let [T, E] = (0, g.useState)(!1),
    D = (l ?? m()) === `rtl`,
    O = i ?? T,
    k = x ?? E,
    A = O ? v : y,
    j = `translate-x-0`;
  n && (j = D ? `translate-x-0.5` : `-translate-x-0.5`);
  let M = n ? o : f,
    N;
  t[13] !== n || t[14] !== A
    ? ((N = n
        ? {
            "--annotation-mode-button-annotation-background": p(
              `charts-blue`,
              v,
            ),
            "--annotation-mode-button-annotation-hover-background": p(
              `charts-blue`,
              A,
            ),
          }
        : {}),
      (t[13] = n),
      (t[14] = A),
      (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] !== w || t[17] !== N
    ? ((P = { ...w, ...N }), (t[16] = w), (t[17] = N), (t[18] = P))
    : (P = t[18]);
  let F = P,
    I = n ? `max-w-40 justify-start px-2.5` : `max-w-8 justify-center px-0`,
    L = n && b,
    R;
  t[19] !== c || t[20] !== I || t[21] !== L
    ? ((R = r(
        `ease-basic relative isolate min-w-8 overflow-hidden transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none disabled:opacity-100`,
        I,
        L,
        c,
      )),
      (t[19] = c),
      (t[20] = I),
      (t[21] = L),
      (t[22] = R))
    : (R = t[22]);
  let z;
  t[23] !== n || t[24] !== S || t[25] !== k
    ? ((z = (e) => {
        (k(!n), S(e));
      }),
      (t[23] = n),
      (t[24] = S),
      (t[25] = k),
      (t[26] = z))
    : (z = t[26]);
  let B;
  t[27] !== C || t[28] !== k
    ? ((B = (e) => {
        (k(!1), C?.(e));
      }),
      (t[27] = C),
      (t[28] = k),
      (t[29] = B))
    : (B = t[29]);
  let V = n ? `justify-start` : `w-full justify-center`,
    H;
  t[30] === V
    ? (H = t[31])
    : ((H = r(`flex min-w-0 items-center`, V)), (t[30] = V), (t[31] = H));
  let U;
  t[32] === j
    ? (U = t[33])
    : ((U = r(
        `icon-sm relative shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none`,
        j,
      )),
      (t[32] = j),
      (t[33] = U));
  let W;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, _.jsx)(u, {
        className: r(
          `absolute inset-0 size-full rotate-0 scale-100 opacity-100`,
        ),
      })),
      (t[34] = W))
    : (W = t[34]);
  let G;
  t[35] === U
    ? (G = t[36])
    : ((G = (0, _.jsx)(`span`, { className: U, children: W })),
      (t[35] = U),
      (t[36] = G));
  let K = n ? `ms-1 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
    q;
  t[37] === K
    ? (q = t[38])
    : ((q = r(
        `ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
        K,
      )),
      (t[37] = K),
      (t[38] = q));
  let J;
  t[39] !== o || t[40] !== q
    ? ((J = (0, _.jsx)(`span`, { className: q, children: o })),
      (t[39] = o),
      (t[40] = q),
      (t[41] = J))
    : (J = t[41]);
  let Y;
  t[42] !== H || t[43] !== G || t[44] !== J
    ? ((Y = (0, _.jsxs)(`span`, { className: H, children: [G, J] })),
      (t[42] = H),
      (t[43] = G),
      (t[44] = J),
      (t[45] = Y))
    : (Y = t[45]);
  let X;
  return (
    t[46] !== n ||
    t[47] !== s ||
    t[48] !== d ||
    t[49] !== M ||
    t[50] !== Y ||
    t[51] !== F ||
    t[52] !== R ||
    t[53] !== z ||
    t[54] !== B
      ? ((X = (0, _.jsx)(a, {
          ...s,
          color: `ghost`,
          size: `toolbar`,
          disabled: d,
          "aria-label": M,
          "aria-pressed": n,
          style: F,
          className: R,
          onClick: z,
          onPointerLeave: B,
          children: Y,
        })),
        (t[46] = n),
        (t[47] = s),
        (t[48] = d),
        (t[49] = M),
        (t[50] = Y),
        (t[51] = F),
        (t[52] = R),
        (t[53] = z),
        (t[54] = B),
        (t[55] = X))
      : (X = t[55]),
    X
  );
}
function p(e, t) {
  return `color-mix(in srgb, var(--color-token-main-surface-primary) ${100 - t}%, var(--color-token-${e}) ${t}%)`;
}
function m() {
  return typeof document > `u`
    ? `ltr`
    : window.getComputedStyle(document.documentElement).direction === `rtl`
      ? `rtl`
      : `ltr`;
}
var h,
  g,
  _,
  v,
  y,
  b,
  x = e(() => {
    ((h = n()),
      c(),
      (g = t(i(), 1)),
      d(),
      o(),
      (_ = s()),
      (v = 10),
      (y = 15),
      (b = `border-token-charts-blue/40 bg-[var(--annotation-mode-button-annotation-background)] !text-token-text-link-foreground enabled:hover:bg-[var(--annotation-mode-button-annotation-hover-background)]`));
  });
export { d as i, x as n, u as r, f as t };
//# sourceMappingURL=app-initial~app-main~onboarding-page~hotkey-window-thread-page~chatgpt-conversation-page~th~ntr5ltet-Dn76IsWh.js.map
