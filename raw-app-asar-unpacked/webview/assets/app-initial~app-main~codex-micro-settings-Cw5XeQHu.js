import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  KJ as r,
  L2 as i,
  _Y as a,
  k2 as o,
  mY as s,
  qJ as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var l,
  u,
  d = e(() => {
    (t(i()),
      (l = o()),
      (u = (e) =>
        (0, l.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, l.jsx)(`path`, {
            d: `M11.912 21.413c-.383.45-.883.683-1.5.7-.616.016-1.116-.192-1.5-.625-.375-.434-.454-1.034-.237-1.8L9.687 16H4.575c-.567 0-1.008-.162-1.325-.488a1.68 1.68 0 0 1-.475-1.2c0-.474.154-.9.462-1.274l8.9-10.563c.384-.45.884-.683 1.5-.7.617-.017 1.113.192 1.488.625.383.433.467 1.033.25 1.8L14.312 8h5.113c.567 0 1.008.167 1.325.5.325.333.488.737.488 1.212 0 .467-.159.884-.476 1.25l-8.85 10.45Z`,
            fill: `currentColor`,
          }),
        })));
  });
function f(e) {
  let t = (0, p.c)(25),
    { compact: n, percentage: i, isCharging: o } = e,
    s = n === void 0 ? !1 : n,
    c = Math.min(100, Math.max(0, i)),
    l = c <= 20 && !o,
    d = s ? `gap-1 text-xs` : `gap-1.5 text-sm`,
    f = l ? `text-token-error-foreground` : `text-token-text-secondary`,
    h;
  t[0] !== d || t[1] !== f
    ? ((h = r(`flex items-center tabular-nums`, d, f)),
      (t[0] = d),
      (t[1] = f),
      (t[2] = h))
    : (h = t[2]);
  let g = s
      ? `h-2.5 w-[18px] rounded-[2px] p-px`
      : `h-3.5 w-6 rounded-[3px] p-0.5`,
    _;
  t[3] === g
    ? (_ = t[4])
    : ((_ = r(`relative flex items-center border border-current`, g)),
      (t[3] = g),
      (t[4] = _));
  let v = `${c}%`,
    y;
  t[5] === v
    ? (y = t[6])
    : ((y = (0, m.jsx)(`span`, {
        className: `h-full rounded-[1px] bg-current`,
        style: { width: v },
      })),
      (t[5] = v),
      (t[6] = y));
  let b = s ? `-right-0.5 h-1 w-px` : `-right-1 h-1.5 w-0.5`,
    x;
  t[7] === b
    ? (x = t[8])
    : ((x = r(`absolute top-1/2 -translate-y-1/2 rounded-r-sm bg-current`, b)),
      (t[7] = b),
      (t[8] = x));
  let S;
  t[9] === x
    ? (S = t[10])
    : ((S = (0, m.jsx)(`span`, { className: x })), (t[9] = x), (t[10] = S));
  let C;
  t[11] !== S || t[12] !== _ || t[13] !== y
    ? ((C = (0, m.jsxs)(`span`, {
        "aria-hidden": `true`,
        className: _,
        children: [y, S],
      })),
      (t[11] = S),
      (t[12] = _),
      (t[13] = y),
      (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] === c
    ? (w = t[16])
    : ((w = (0, m.jsx)(a, {
        id: `codexMicro.battery.percentage`,
        defaultMessage: `{percentage}%`,
        description: `Codex Micro battery percentage`,
        values: { percentage: c },
      })),
      (t[15] = c),
      (t[16] = w));
  let T;
  t[17] !== s || t[18] !== o
    ? ((T = o
        ? (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(u, {
                "aria-hidden": `true`,
                className: r(
                  `text-token-charts-green`,
                  s ? `size-2.5` : `icon-xs`,
                ),
              }),
              (0, m.jsx)(`span`, {
                className: `sr-only`,
                children: (0, m.jsx)(a, {
                  id: `codexMicro.battery.charging`,
                  defaultMessage: `Charging`,
                  description: `Accessible Codex Micro battery charging status`,
                }),
              }),
            ],
          })
        : null),
      (t[17] = s),
      (t[18] = o),
      (t[19] = T))
    : (T = t[19]);
  let E;
  return (
    t[20] !== C || t[21] !== w || t[22] !== T || t[23] !== h
      ? ((E = (0, m.jsxs)(`span`, { className: h, children: [C, w, T] })),
        (t[20] = C),
        (t[21] = w),
        (t[22] = T),
        (t[23] = h),
        (t[24] = E))
      : (E = t[24]),
    E
  );
}
var p,
  m,
  h = e(() => {
    ((p = n()), c(), s(), d(), (m = o()));
  });
export { d as i, h as n, u as r, f as t };
//# sourceMappingURL=app-initial~app-main~codex-micro-settings-Cw5XeQHu.js.map
