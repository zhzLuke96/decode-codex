import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  I2 as n,
  Kq as r,
  S0 as i,
  YY as a,
  Yq as o,
  Zq as s,
  _0 as c,
  cY as l,
  sY as u,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function d() {
  let e = (0, m.c)(7),
    t = i(u),
    n = s(a.petSize),
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = n === h ? null : p(n)), (e[0] = n), (e[1] = r));
  let c;
  e[2] === t
    ? (c = e[3])
    : ((c = (e) => {
        o(t, a.petSize, p(e));
      }),
      (e[2] = t),
      (e[3] = c));
  let l;
  return (
    e[4] !== r || e[5] !== c
      ? ((l = { mascotWidthPx: r, setMascotWidthPx: c }),
        (e[4] = r),
        (e[5] = c),
        (e[6] = l))
      : (l = e[6]),
    l
  );
}
function f(e) {
  if (e != null) return { [_]: `${p(e)}px` };
}
function p(e) {
  return Number.isFinite(e) ? Math.round(Math.min(224, Math.max(80, e))) : h;
}
var m,
  h,
  g,
  _,
  v = e(() => {
    ((m = n()),
      c(),
      t(),
      l(),
      r(),
      (h = a.petSize.default),
      (g = 192 / 208),
      (_ = `--codex-avatar-width`));
  });
export { v as a, f as i, g as n, d as o, p as r, h as t };
//# sourceMappingURL=avatar-overlay-mascot-size-De0Pyk6W.js.map
