import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  FK as t,
  I2 as n,
  PK as r,
  k2 as i,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function a(e) {
  let n = (0, o.c)(4),
    { onPaint: r } = e,
    i = t(r),
    a;
  n[0] === i
    ? (a = n[1])
    : ((a = (e) => {
        if (e == null) return;
        let t = null,
          n = null,
          r = () => {
            document.visibilityState !== `visible` ||
              t != null ||
              (t = window.requestAnimationFrame(() => {
                n = window.requestAnimationFrame(() => {
                  (document.removeEventListener(`visibilitychange`, r), i());
                });
              }));
          };
        return (
          document.addEventListener(`visibilitychange`, r),
          r(),
          () => {
            (document.removeEventListener(`visibilitychange`, r),
              t != null && window.cancelAnimationFrame(t),
              n != null && window.cancelAnimationFrame(n));
          }
        );
      }),
      (n[0] = i),
      (n[1] = a));
  let c = a,
    l;
  return (
    n[2] === c
      ? (l = n[3])
      : ((l = (0, s.jsx)(`span`, { ref: c, className: `hidden` })),
        (n[2] = c),
        (n[3] = l)),
    l
  );
}
var o,
  s,
  c = e(() => {
    ((o = n()), r(), (s = i()));
  });
export { c as n, a as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~remote-conversation-page-A9x1lgeY.js.map
