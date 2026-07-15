import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as n,
  I2 as r,
  JA as i,
  L2 as a,
  S0 as o,
  Sz as s,
  _0 as c,
  bG as l,
  cY as u,
  k2 as d,
  sY as f,
  uj as p,
  yG as m,
  yz as h,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  n as g,
  t as _,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  Fo as v,
  Io as y,
  Po as b,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  Et as x,
  Tt as S,
  f as C,
  i as w,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~jodr0e7v-CZ6beq_4.js";
function T() {
  let e = (0, D.c)(12),
    t = o(f),
    { conversationId: r } = p(),
    i = n(C),
    a,
    c;
  if (
    (e[0] === r
      ? ((a = e[1]), (c = e[2]))
      : ((a = () => {
          m.quickChatWindow?.rendererReady(r ?? null);
        }),
        (c = [r]),
        (e[0] = r),
        (e[1] = a),
        (e[2] = c)),
    (0, O.useEffect)(a, c),
    r == null)
  )
    return null;
  let l;
  if (e[3] !== r || e[4] !== i) {
    let t = b(r);
    ((l = i ?? {
      conversationId: t,
      hasConversation: !y(t),
      initialScrollMode: `follow`,
      selectedTextSourceConversationId: null,
      title: null,
    }),
      (e[3] = r),
      (e[4] = i),
      (e[5] = l));
  } else l = e[5];
  let u = l,
    d;
  e[6] !== t || e[7] !== u.hasConversation
    ? ((d = (e) => {
        (x(t, {
          action: h.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_CLOSED,
          hasConversation: u.hasConversation,
          source: e,
          surface: s.CODEX_QUICK_CHAT_SURFACE_WINDOW,
        }),
          window.close());
      }),
      (e[6] = t),
      (e[7] = u.hasConversation),
      (e[8] = d))
    : (d = e[8]);
  let g;
  return (
    e[9] !== u || e[10] !== d
      ? ((g = (0, k.jsx)(_, {
          canPopOut: !1,
          session: u,
          variant: `window`,
          onAddToComposer: E,
          onClose: d,
        })),
        (e[9] = u),
        (e[10] = d),
        (e[11] = g))
      : (g = e[11]),
    g
  );
}
async function E(e) {
  let t = m.quickChatWindow;
  if (t == null) throw Error(`Quick Chat window service is unavailable`);
  await t.addToComposer(e);
}
var D, O, k;
e(() => {
  ((D = r()),
    c(),
    (O = t(a(), 1)),
    i(),
    l(),
    u(),
    v(),
    S(),
    w(),
    g(),
    (k = d()));
})();
export { T as QuickChatWindowPage };
//# sourceMappingURL=quick-chat-window-page-DaQ8lw32.js.map
