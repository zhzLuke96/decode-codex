import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  CP as n,
  Ep as r,
  L2 as i,
  Rx as a,
  SP as ee,
  Tp as te,
  ZJ as o,
  ai as s,
  bG as c,
  bJ as l,
  eY as u,
  hJ as d,
  iu as f,
  k2 as p,
  mJ as m,
  oi as ne,
  op as h,
  ou as g,
  sp as _,
  vP as v,
  wP as y,
  xG as b,
  yJ as x,
  yP as S,
  zx as C,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Aa as w,
  Oa as T,
  eu as E,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Ln as D,
  Qn as O,
  Rn as k,
  Zn as A,
  a as j,
  i as M,
  n as N,
  o as re,
  r as P,
  t as F,
  zn as I,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import { t as L } from "./app-C9KTA00o.js";
import {
  et as R,
  tt as z,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  n as B,
  t as V,
} from "./app-initial~app-main~register-app-actions-CRo2cOka.js";
async function H() {
  (await U(),
    await b(),
    l.info(`[statsig-refresh-diagnostics] React root render requested`, {
      safe: { windowType: `electron` },
    }),
    $.render(
      (0, K.jsx)(W.StrictMode, {
        children: (0, K.jsx)(h, {
          name: `App`,
          fallback: (0, K.jsx)(A, {}),
          children: (0, K.jsx)(j, {}),
        }),
      }),
    ));
}
async function U() {}
var W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  if (
    ((W = t(i(), 1)),
    (G = E()),
    V(),
    T(),
    _(),
    O(),
    y(),
    a(),
    re(),
    s(),
    m(),
    I(),
    g(),
    R(),
    v(),
    P(),
    c(),
    r(),
    F(),
    x(),
    u(),
    L(),
    (K = p()),
    (q = w()),
    (J = new URL(window.location.href).searchParams),
    (Y = ee()),
    (X = k(ne ?? window.location.pathname)),
    X != null &&
      D.start(
        X,
        window.electronBridge?.getPreloadStartedAtMs?.() ??
          performance.timeOrigin,
        !0,
      ),
    window.addEventListener(`pagehide`, () => {
      (o(), D.dispose(), f(), z.dispose(), S.dispose());
    }),
    document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `hidden` && o();
    }),
    C(M),
    B(N),
    (document.documentElement.dataset.codexWindowType = `electron`),
    (document.documentElement.dataset.windowType = `electron`),
    (document.documentElement.dataset.codexOs = Y),
    (document.documentElement.dataset.codexWindowChrome = n(`electron`, Y)),
    J.get(`mcpAppSandboxDevtools`) === `1` &&
      (document.documentElement.dataset.mcpAppSandboxDevtools = `true`),
    q && document.documentElement.classList.add(`compact-window`),
    te(),
    window.addEventListener(`error`, (e) => {
      let t =
        e?.error?.stack ?? e?.error?.message ?? e?.message ?? `Unknown error`;
      d.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][global-error] ${String(t)}`,
      });
    }),
    window.addEventListener(`unhandledrejection`, (e) => {
      let t = e.reason,
        n =
          typeof t == `object` && t
            ? (t.stack ?? t.message ?? JSON.stringify(t))
            : String(t);
      d.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][unhandled-rejection] ${n}`,
      });
    }),
    (Z = document.getElementById(`root`)),
    !Z)
  )
    throw Error(`Root container not found`);
  ((Q = window),
    (Q.__codexRoot ||= (0, G.createRoot)(Z)),
    ($ = Q.__codexRoot),
    H());
})();
//# sourceMappingURL=app-main-BH0B9sqm.js.map
