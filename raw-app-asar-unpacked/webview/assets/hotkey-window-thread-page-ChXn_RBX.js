import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  AY as r,
  BA as i,
  BX as a,
  C0 as o,
  Fj as s,
  I2 as c,
  JA as l,
  L2 as u,
  Qw as d,
  R$ as f,
  S0 as p,
  WA as m,
  WX as h,
  Wj as g,
  _0 as _,
  bG as v,
  dT as y,
  k2 as b,
  lm as x,
  mY as S,
  uj as C,
  um as w,
  x0 as T,
  yG as E,
  yY as D,
  zX as O,
  zZ as k,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  g as A,
  h as j,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Jt as M,
  qt as N,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  n as ee,
  r as P,
} from "./app-initial~app-main~hotkey-window-thread-page~debug-window-page~appearance-settings~keyboa~ls1o61sa-BTfpPNqa.js";
import { r as F, t as I } from "./use-thread-summary-panel-OrzkfYb8.js";
import { n as L, r as R } from "./use-hotkey-window-detail-layout-BXY88LbS.js";
import {
  i as z,
  n as B,
  r as V,
  t as H,
} from "./local-conversation-stream-role-product-event-DBxrua5i.js";
import { a as U, i as W } from "./local-conversation-thread-BLEibV-Y.js";
function G() {
  let e = (0, K.c)(31),
    t = p(i),
    r = D(),
    { conversationId: s } = C(),
    { clientThreadId: c } = t.value,
    l = o(g),
    u;
  e[0] !== c || e[1] !== l
    ? ((u = l == null && f(c) ? c : null), (e[0] = c), (e[1] = l), (e[2] = u))
    : (u = e[2]);
  let m = u,
    _ = T(M, m),
    { data: v } = o(ee),
    y = v == null || v.configuredHotkey != null,
    b;
  e[3] === y ? (b = e[4]) : ((b = h(y)), (e[3] = y), (e[4] = b));
  let x = b,
    S = T(w, l),
    A = T(d, l),
    N;
  e[5] === A ? (N = e[6]) : ((N = j(A ? k(A) : null)), (e[5] = A), (e[6] = N));
  let P = N,
    I = l ?? m,
    L;
  e[7] === I
    ? (L = e[8])
    : ((L = I == null ? `/` : a(I)), (e[7] = I), (e[8] = L));
  let z = L,
    B;
  e[9] !== c || e[10] !== l
    ? ((B = () => {
        !f(c) || l == null || E.hotkeyWindowHotkeys?.open({ path: O(l) });
      }),
      (e[9] = c),
      (e[10] = l),
      (e[11] = B))
    : (B = e[11]);
  let U = (0, q.useEffectEvent)(B),
    G;
  e[12] === U
    ? (G = e[13])
    : ((G = () => {
        U();
      }),
      (e[12] = U),
      (e[13] = G));
  let Y;
  (e[14] !== c || e[15] !== l
    ? ((Y = [c, l]), (e[14] = c), (e[15] = l), (e[16] = Y))
    : (Y = e[16]),
    (0, q.useEffect)(G, Y),
    F(t));
  let X;
  if (
    (e[17] !== r ||
    e[18] !== z ||
    e[19] !== _?.label ||
    e[20] !== P ||
    e[21] !== s ||
    e[22] !== S
      ? ((X =
          s == null
            ? null
            : {
                title: (0, J.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-token-foreground`,
                      children:
                        _?.label ??
                        S ??
                        r.formatMessage({
                          id: `hotkeyWindow.defaultTitle`,
                          defaultMessage: `Codex`,
                          description: `Fallback title for hotkey window thread header`,
                        }),
                    }),
                    P == null
                      ? null
                      : (0, J.jsx)(`div`, {
                          className: `flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground`,
                          children: (0, J.jsx)(`span`, {
                            className: `truncate`,
                            children: P,
                          }),
                        }),
                  ],
                }),
                mainWindowPath: z,
              }),
        (e[17] = r),
        (e[18] = z),
        (e[19] = _?.label),
        (e[20] = P),
        (e[21] = s),
        (e[22] = S),
        (e[23] = X))
      : (X = e[23]),
    R(X),
    s == null)
  ) {
    let t;
    return (
      e[24] === x
        ? (t = e[25])
        : ((t = (0, J.jsx)(n, { to: x, replace: !0 })),
          (e[24] = x),
          (e[25] = t)),
      t
    );
  }
  let Z;
  e[26] === l
    ? (Z = e[27])
    : ((Z =
        l == null
          ? null
          : (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(H, { conversationId: l }),
                (0, J.jsx)(V, { conversationId: l }),
              ],
            })),
      (e[26] = l),
      (e[27] = Z));
  let Q;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, J.jsx)(`div`, {
        className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
        children: (0, J.jsx)(W, {
          allowMissingConversation: !0,
          showUtilityBar: !0,
        }),
      })),
      (e[28] = Q))
    : (Q = e[28]);
  let $;
  return (
    e[29] === Z
      ? ($ = e[30])
      : (($ = (0, J.jsxs)(J.Fragment, { children: [Z, Q] })),
        (e[29] = Z),
        (e[30] = $)),
    $
  );
}
var K, q, J;
e(() => {
  ((K = c()),
    _(),
    r(),
    (q = t(u(), 1)),
    S(),
    l(),
    y(),
    z(),
    B(),
    U(),
    x(),
    v(),
    m(),
    s(),
    A(),
    I(),
    N(),
    P(),
    L(),
    (J = b()));
})();
export { G as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page-ChXn_RBX.js.map
