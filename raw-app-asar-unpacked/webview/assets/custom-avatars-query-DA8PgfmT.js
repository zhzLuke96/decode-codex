import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  _0 as t,
  a2 as n,
  bG as r,
  cY as i,
  dJ as a,
  fJ as o,
  i2 as s,
  sY as c,
  yG as l,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var u,
  d,
  f,
  p = e(() => {
    (t(),
      r(),
      i(),
      o(),
      (u = [`custom-avatars`]),
      (d = n(c, () => ({
        queryKey: u,
        queryFn: () => l.customAvatars.load(),
        enabled: !0,
        networkMode: `always`,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        staleTime: a.INFINITE,
      }))),
      (f = s(c, (e, { get: t, scope: n }) => ({
        queryKey: [...u, `selected`, e],
        queryFn: async () => (
          await n.query.invalidate(d, { exact: !0, refetchType: `none` }),
          n.query.fetch(d)
        ),
        enabled:
          e.startsWith(`custom:`) &&
          t(d).data?.avatars.some(({ id: t }) => t === e) !== !0,
        gcTime: 0,
        networkMode: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: a.INFINITE,
      }))));
  });
export { f as i, d as n, p as r, u as t };
//# sourceMappingURL=custom-avatars-query-DA8PgfmT.js.map
