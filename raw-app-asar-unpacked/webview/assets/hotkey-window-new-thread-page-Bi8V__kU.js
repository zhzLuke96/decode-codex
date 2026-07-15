import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  I2 as n,
  _Y as r,
  bG as i,
  k2 as a,
  mY as o,
  yG as s,
  zX as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Et as l,
  Ht as u,
  Tt as d,
  Vt as f,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  n as p,
  t as m,
} from "./app-initial~app-main~onboarding-page~hotkey-window-new-thread-page~animated-icon-CvT7QD9t.js";
import {
  a as h,
  i as g,
} from "./app-initial~app-main~appgen-library-page~remote-conversation-page~local-conversation-page-D8rujHdw.js";
import { n as _, t as v } from "./thread-scroll-layout-FLhuHVrE.js";
import { n as y, r as b } from "./use-hotkey-window-detail-layout-BXY88LbS.js";
function x() {
  let e = (0, C.c)(4),
    t = S,
    n;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = {
        title: (0, w.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, w.jsx)(r, {
            id: `threadPage.newThread`,
            defaultMessage: `New chat`,
            description: `Header title for the home page`,
          }),
        }),
        mainWindowPath: `/`,
        canCollapseToHome: !1,
      }),
      (e[0] = n))
    : (n = e[0]),
    b(n));
  let i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, w.jsx)(f, {
        showWorkspaceDropdownInUtilityBar: !1,
        onLocalConversationCreated: t,
      })),
      (e[1] = i))
    : (i = e[1]);
  let a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, w.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, w.jsx)(m, {
          className: `h-12 w-12 text-token-foreground/20`,
        }),
      })),
      (e[2] = a))
    : (a = e[2]);
  let o;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, w.jsx)(g, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, w.jsx)(v, {
            footer: i,
            children: (0, w.jsx)(`div`, {
              className: `flex h-full items-center justify-center px-panel`,
              children: (0, w.jsxs)(`div`, {
                className: `flex flex-col items-center gap-3 text-center`,
                children: [
                  a,
                  (0, w.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-1`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `heading-xl mt-2 font-normal text-token-foreground select-none`,
                        children: (0, w.jsx)(r, {
                          id: `home.hero.letsBuild`,
                          defaultMessage: `Let’s build`,
                          description: `Label above the workspace name on the electron home page`,
                        }),
                      }),
                      (0, w.jsx)(d, { variant: `hero` }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })),
        (e[3] = o))
      : (o = e[3]),
    o
  );
}
function S(e) {
  s.hotkeyWindowHotkeys?.open({ path: c(e) });
}
var C, w;
e(() => {
  ((C = n()), t(), o(), u(), l(), p(), i(), h(), _(), y(), (w = a()));
})();
export { x as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page-Bi8V__kU.js.map
