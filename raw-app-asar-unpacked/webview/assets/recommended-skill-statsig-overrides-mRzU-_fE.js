import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as t,
  K1 as n,
  c0 as r,
  iG as i,
  o0 as a,
  p0 as o,
  rG as s,
  u0 as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function l() {
  let e = (0, f.c)(2),
    { value: t } = i(p),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = u(t)), (e[0] = t), (e[1] = n)), n);
}
function u(e) {
  let t = {},
    n = h.parse(e);
  for (let [e, r] of Object.entries(n.skill_markdown_by_id ?? {})) {
    let n = m.safeParse(r);
    n.success && (t[e] = n.data);
  }
  return t;
}
function d(e, t) {
  return e[t];
}
var f,
  p,
  m,
  h,
  g = e(() => {
    ((f = t()),
      n(),
      s(),
      (p = `1852350085`),
      (m = c().refine((e) => e.trim().length > 0)),
      (h = a({ skill_markdown_by_id: r(c(), o()).optional() }).catch({
        skill_markdown_by_id: {},
      })));
  });
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides-mRzU-_fE.js.map
