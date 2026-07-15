import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as t,
  I2 as n,
  JA as r,
  KJ as i,
  k2 as a,
  mY as o,
  qJ as s,
  yY as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ht as l,
  Ln as u,
  Vt as d,
  bt as f,
  yt as p,
  zn as m,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  n as h,
  t as g,
} from "./app-initial~app-main~new-thread-panel-page~remote-conversation-page-A9x1lgeY.js";
import {
  a as _,
  r as v,
} from "./app-initial~app-main~appgen-library-page~remote-conversation-page~local-conversation-page-D8rujHdw.js";
import { n as y, t as b } from "./home-announcements-DSRdmSz4.js";
function x() {
  let e = (0, C.c)(11),
    n = c();
  {
    let n;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, w.jsx)(t, { to: `/`, replace: !0 })), (e[0] = n))
        : (n = e[0]),
      n
    );
  }
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = u.isRecording() ? (0, w.jsx)(g, { onPaint: S }) : null), (e[1] = r))
    : (r = e[1]);
  let a;
  e[2] === n
    ? (a = e[3])
    : ((a = n.formatMessage({
        id: `homePage.mainContent`,
        defaultMessage: `Main content`,
        description: `Main landmark label for the home page`,
      })),
      (e[2] = n),
      (e[3] = a));
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, w.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-3xl flex-col gap-3 px-panel`,
        children: (0, w.jsx)(`div`, { className: `flex-1` }),
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  e[5] === a
    ? (s = e[6])
    : ((s = (0, w.jsx)(`div`, {
        className: `[container-type:size] relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden [container-name:home-main-content]`,
        role: `main`,
        "aria-label": a,
        children: o,
      })),
      (e[5] = a),
      (e[6] = s));
  let l;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = i(
        v,
        `z-10 -mt-[var(--thread-footer-overlap)] flex flex-col gap-2 pb-2`,
      )),
      (e[7] = l))
    : (l = e[7]);
  let f;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, w.jsxs)(`div`, {
        className: l,
        children: [
          (0, w.jsx)(`div`, {
            className: `home-banners mt-2 flex flex-col gap-2 empty:hidden`,
            children: (0, w.jsx)(b, {}),
          }),
          (0, w.jsx)(d, { className: `electron:hidden` }),
        ],
      })),
      (e[8] = f))
    : (f = e[8]);
  let m;
  return (
    e[9] === s
      ? (m = e[10])
      : ((m = (0, w.jsxs)(p, {
          children: [
            r,
            (0, w.jsx)(`div`, {
              className: `flex h-full flex-col`,
              "data-vscode-context": `{"chatgpt.supportsNewChatMenu": true}`,
              tabIndex: 0,
              children: (0, w.jsxs)(`div`, {
                className: `relative flex h-full flex-col`,
                children: [s, f],
              }),
            }),
          ],
        })),
        (e[9] = s),
        (e[10] = m)),
    m
  );
}
function S() {
  return u.markHomeVisible();
}
var C, w;
e(() => {
  ((C = n()), s(), o(), r(), l(), y(), m(), h(), f(), _(), (w = a()));
})();
export { x as NewThreadPanelPage };
//# sourceMappingURL=new-thread-panel-page-BK0179Ov.js.map
