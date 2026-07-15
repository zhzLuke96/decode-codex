import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  DJ as t,
  I2 as n,
  IJ as r,
  Rq as i,
  k2 as a,
  zq as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s(e) {
  let t = (0, c.c)(11),
    { className: n, children: i, index: a, variant: s } = e,
    u = o(),
    d = s === `list`,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { opacity: 1, transform: `translateY(0)` }), (t[0] = f))
    : (f = t[0]);
  let p = u ? `translateY(0)` : `translateY(${d ? 4 : 8}px)`,
    m;
  t[1] === p
    ? (m = t[2])
    : ((m = { opacity: 0, transform: p }), (t[1] = p), (t[2] = m));
  let h = u ? 0 : a * 0.025,
    g;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = [0.23, 1, 0.32, 1]), (t[3] = g))
    : (g = t[3]);
  let _;
  t[4] === h
    ? (_ = t[5])
    : ((_ = { delay: h, duration: 0.15, ease: g }), (t[4] = h), (t[5] = _));
  let v;
  return (
    t[6] !== i || t[7] !== n || t[8] !== m || t[9] !== _
      ? ((v = (0, l.jsx)(r.div, {
          className: n,
          animate: f,
          initial: m,
          transition: _,
          children: i,
        })),
        (t[6] = i),
        (t[7] = n),
        (t[8] = m),
        (t[9] = _),
        (t[10] = v))
      : (v = t[10]),
    v
  );
}
var c,
  l,
  u = e(() => {
    ((c = n()), t(), i(), (l = a()));
  });
export { u as n, s as t };
//# sourceMappingURL=home-suggestion-staggered-item-C9gEPgD7.js.map
