import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  DK as t,
  I2 as n,
  KJ as r,
  Mq as i,
  Nq as a,
  k2 as o,
  kK as s,
  qJ as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function l(e) {
  let n = (0, u.c)(19),
    {
      ariaLabel: a,
      children: o,
      className: s,
      color: c,
      disabled: l,
      inset: f,
      loading: p,
      tooltipContent: m,
      onClick: h,
    } = e,
    g = c === void 0 ? `ghostMuted` : c,
    _ = f === void 0 ? !1 : f,
    v = p === void 0 ? !1 : p,
    y = !_ && `-me-1.5`,
    b;
  n[0] === y ? (b = n[1]) : ((b = r(`inline-flex`, y)), (n[0] = y), (n[1] = b));
  let x = l && `text-token-text-secondary`,
    S;
  n[2] !== s || n[3] !== x
    ? ((S = r(x, s)), (n[2] = s), (n[3] = x), (n[4] = S))
    : (S = n[4]);
  let C = l ? `ghost` : g,
    w;
  n[5] !== a ||
  n[6] !== o ||
  n[7] !== l ||
  n[8] !== v ||
  n[9] !== h ||
  n[10] !== S ||
  n[11] !== C
    ? ((w = (0, d.jsx)(i, {
        "aria-label": a,
        className: S,
        color: C,
        disabled: l,
        loading: v,
        size: `toolbar`,
        onClick: h,
        children: o,
      })),
      (n[5] = a),
      (n[6] = o),
      (n[7] = l),
      (n[8] = v),
      (n[9] = h),
      (n[10] = S),
      (n[11] = C),
      (n[12] = w))
    : (w = n[12]);
  let T;
  n[13] !== b || n[14] !== w
    ? ((T = (0, d.jsx)(`span`, { className: b, children: w })),
      (n[13] = b),
      (n[14] = w),
      (n[15] = T))
    : (T = n[15]);
  let E = T;
  if (!l) return E;
  let D;
  return (
    n[16] !== E || n[17] !== m
      ? ((D = (0, d.jsx)(t, { tooltipContent: m, children: E })),
        (n[16] = E),
        (n[17] = m),
        (n[18] = D))
      : (D = n[18]),
    D
  );
}
var u,
  d,
  f = e(() => {
    ((u = n()), c(), a(), s(), (d = o()));
  });
export { f as n, l as t };
//# sourceMappingURL=pull-request-fix-button-CkC9dxz3.js.map
