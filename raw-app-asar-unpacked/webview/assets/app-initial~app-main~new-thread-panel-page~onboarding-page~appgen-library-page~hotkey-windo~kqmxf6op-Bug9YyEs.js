import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as t,
  _0 as n,
  x0 as r,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Hn as i,
  Vn as a,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
var o,
  s,
  c = e(() => {
    (i(),
      (o = a({
        method: `default-branch`,
        getParams: (e) => ({
          operationSource: e.operationSource,
          root: e.root,
        }),
        getOptions: (e) => ({
          liveQuery: {
            method: `default-branch`,
            params: { operationSource: e.operationSource, root: e.root },
          },
          select: (e) => e.branch,
          staleTime: 1 / 0,
        }),
      })),
      (s = o.fromTarget$));
  });
function l(e, t, n, i) {
  let a = (0, u.c)(8),
    o = i?.enabled ?? !0,
    c;
  a[0] !== e || a[1] !== t
    ? ((c = e == null ? null : { cwd: e, hostConfig: t }),
      (a[0] = e),
      (a[1] = t),
      (a[2] = c))
    : (c = a[2]);
  let l = i?.retainRepoWatch,
    d;
  return (
    a[3] !== n || a[4] !== o || a[5] !== c || a[6] !== l
      ? ((d = {
          enabled: o,
          operationSource: n,
          lookup: c,
          retainRepoWatch: l,
        }),
        (a[3] = n),
        (a[4] = o),
        (a[5] = c),
        (a[6] = l),
        (a[7] = d))
      : (d = a[7]),
    r(s, d)
  );
}
var u,
  d = e(() => {
    ((u = t()), n(), c());
  });
export { c as i, l as n, s as r, d as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~kqmxf6op-Bug9YyEs.js.map
