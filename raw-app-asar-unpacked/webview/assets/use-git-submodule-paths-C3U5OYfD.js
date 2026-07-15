import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as t,
  _0 as n,
  dJ as r,
  fJ as i,
  hO as a,
  lO as o,
  x0 as s,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Hn as c,
  Vn as l,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
var u,
  d,
  f = e(() => {
    (c(),
      (u = l({
        method: `submodule-paths`,
        getParams: (e) => ({
          operationSource: e.operationSource,
          root: e.root,
        }),
        getOptions: (e) => ({ select: (e) => e.paths, staleTime: e.staleTime }),
      })),
      (d = u.fromTarget$));
  });
function p(e, t, n, i) {
  let a = (0, m.c)(9),
    c;
  a[0] === i ? (c = a[1]) : ((c = o(i, r.ONE_MINUTE)), (a[0] = i), (a[1] = c));
  let l;
  a[2] !== e || a[3] !== t
    ? ((l = e == null ? null : { cwd: e, hostConfig: t }),
      (a[2] = e),
      (a[3] = t),
      (a[4] = l))
    : (l = a[4]);
  let u;
  return (
    a[5] !== n || a[6] !== c || a[7] !== l
      ? ((u = { ...c, operationSource: n, lookup: l }),
        (a[5] = n),
        (a[6] = c),
        (a[7] = l),
        (a[8] = u))
      : (u = a[8]),
    s(d, u)
  );
}
var m,
  h = e(() => {
    ((m = t()), n(), i(), a(), f());
  });
export { p as n, h as t };
//# sourceMappingURL=use-git-submodule-paths-C3U5OYfD.js.map
