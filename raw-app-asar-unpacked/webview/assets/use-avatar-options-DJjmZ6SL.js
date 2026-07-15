import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as t,
  I2 as n,
  _0 as r,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { dt as i, ft as a } from "./app-initial~app-main~page-hSvsQcNf.js";
import { n as o, r as s } from "./custom-avatars-query-DA8PgfmT.js";
function c() {
  let e = (0, l.c)(8),
    { data: n, isError: r, isFetching: a, isLoading: s } = t(o),
    c = n?.avatarDirectory ?? null,
    u = n?.avatars,
    d;
  e[0] === u ? (d = e[1]) : ((d = i(u)), (e[0] = u), (e[1] = d));
  let f;
  return (
    e[2] !== r || e[3] !== a || e[4] !== s || e[5] !== c || e[6] !== d
      ? ((f = {
          avatarDirectory: c,
          avatarOptions: d,
          isError: r,
          isFetching: a,
          isLoading: s,
        }),
        (e[2] = r),
        (e[3] = a),
        (e[4] = s),
        (e[5] = c),
        (e[6] = d),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
var l,
  u = e(() => {
    ((l = n()), r(), a(), s());
  });
export { c as n, u as t };
//# sourceMappingURL=use-avatar-options-DJjmZ6SL.js.map
