import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  AY as r,
  I2 as i,
  JA as a,
  L2 as o,
  _$ as s,
  cg as c,
  cp as l,
  gJ as u,
  k2 as d,
  lg as f,
  lp as p,
  mJ as m,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { n as h, r as g } from "./debug-modal-zyJD-wBh.js";
function _() {
  let e = (0, y.c)(4),
    [t, r] = (0, b.useState)(null),
    i;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (e) => {
          let { conversationId: t } = e;
          r(t);
        }),
        (e[0] = i))
      : (i = e[0]),
    u(`debug-window-origin-conversation-changed`, i),
    !s.allowDebugMenu(c()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, x.jsx)(n, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let a;
  return (
    e[2] === t
      ? (a = e[3])
      : ((a = (0, x.jsx)(l, {
          electron: !0,
          children: (0, x.jsx)(`main`, {
            className: `h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground`,
            children: (0, x.jsx)(h, {
              conversationIdOverride: t,
              onClose: v,
              showHeader: !1,
              showPopOutButton: !1,
            }),
          }),
        })),
        (e[2] = t),
        (e[3] = a)),
    a
  );
}
function v() {
  return window.close();
}
var y, b, x;
e(() => {
  ((y = i()), r(), (b = t(o(), 1)), a(), p(), m(), f(), g(), (x = d()));
})();
export { _ as DebugWindowPage };
//# sourceMappingURL=debug-window-page-DC_w0B8c.js.map
