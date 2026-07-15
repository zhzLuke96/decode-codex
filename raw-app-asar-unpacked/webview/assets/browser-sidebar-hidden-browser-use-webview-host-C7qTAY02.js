import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $g as n,
  A$ as r,
  AY as i,
  Bg as a,
  C0 as o,
  Fg as s,
  I2 as c,
  L2 as l,
  Lg as u,
  Rg as d,
  U$ as f,
  UK as p,
  VK as m,
  _0 as h,
  fm as g,
  hm as _,
  k2 as v,
  mg as y,
  mm as b,
  x0 as x,
  yj as S,
  zg as C,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  bs as w,
  gs as T,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  gc as E,
  hc as D,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  $t as O,
  Qt as k,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
function A(e) {
  let t = (0, F.c)(25),
    { browserUseTabIdsKey: n, conversationId: r, persistedTabsEnabled: i } = e,
    c = x(S, r),
    l = o(g.activeTab$),
    p = o(_.activeTab$),
    m = o(u),
    h = o(s),
    v,
    y;
  t[0] === h
    ? ((v = t[1]), (y = t[2]))
    : ((v = (e) => h.on(`change`, e)),
      (y = () => h.get()),
      (t[0] = h),
      (t[1] = v),
      (t[2] = y));
  let b = (0, I.useSyncExternalStore)(v, y, M),
    w = o(C),
    E = o(a),
    D = o(d),
    O,
    k;
  t[3] === D
    ? ((O = t[4]), (k = t[5]))
    : ((O = (e) => D.on(`change`, e)),
      (k = () => D.get()),
      (t[3] = D),
      (t[4] = O),
      (t[5] = k));
  let A = (0, I.useSyncExternalStore)(O, k, j),
    P = m || b > 0,
    R = (w && E) || A > 0,
    z;
  t[6] !== l || t[7] !== p || t[8] !== r || t[9] !== P || t[10] !== R
    ? ((z = new Set(T(r, { bottom: l, right: p }, { bottom: P, right: R }))),
      (t[6] = l),
      (t[7] = p),
      (t[8] = r),
      (t[9] = P),
      (t[10] = R),
      (t[11] = z))
    : (z = t[11]);
  let B = z;
  if (!c && B.size > 0) return null;
  let V, H;
  if (t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== B) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[18] === B
        ? (e = t[19])
        : ((e = (e) => !B.has(e)), (t[18] = B), (t[19] = e));
      let a = n.split(`\0`).map(f).filter(e);
      if (a.length === 0) {
        H = null;
        break bb0;
      }
      let o;
      (t[20] !== r || t[21] !== i
        ? ((o = (e) =>
            (0, L.jsx)(
              N,
              { browserTabId: e, conversationId: r, persistedTabsEnabled: i },
              e,
            )),
          (t[20] = r),
          (t[21] = i),
          (t[22] = o))
        : (o = t[22]),
        (V = a.map(o)));
    }
    ((t[12] = n),
      (t[13] = r),
      (t[14] = i),
      (t[15] = B),
      (t[16] = V),
      (t[17] = H));
  } else ((V = t[16]), (H = t[17]));
  if (H !== Symbol.for(`react.early_return_sentinel`)) return H;
  let U;
  return (
    t[23] === V
      ? (U = t[24])
      : ((U = (0, L.jsx)(L.Fragment, { children: V })),
        (t[23] = V),
        (t[24] = U)),
    U
  );
}
function j() {
  return 0;
}
function M() {
  return 0;
}
function N(e) {
  let t = (0, F.c)(9),
    { browserTabId: n, conversationId: i, persistedTabsEnabled: a } = e,
    o = p(),
    s = (0, I.useRef)(null),
    c;
  t[0] !== n || t[1] !== i
    ? ((c = () => k.getSnapshot(i, n)), (t[0] = n), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let l = (0, I.useSyncExternalStore)(k.subscribe, c, P);
  if (l != null && l.tabType !== r.WEB) return null;
  let u = l == null || l.url.length === 0 ? `about:blank` : l.url,
    d;
  return (
    t[3] !== n || t[4] !== i || t[5] !== u || t[6] !== a || t[7] !== o
      ? ((d = (0, L.jsx)(D, {
          bounds: null,
          browserTabId: n,
          conversationId: i,
          hostKind: `hidden-browser-use`,
          initialUrl: u,
          isVisible: !1,
          persistedTabsEnabled: a,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: s,
          windowZoom: o,
        })),
        (t[3] = n),
        (t[4] = i),
        (t[5] = u),
        (t[6] = a),
        (t[7] = o),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
function P() {
  return null;
}
var F, I, L;
e(() => {
  ((F = c()),
    h(),
    i(),
    (I = t(l(), 1)),
    m(),
    b(),
    n(),
    w(),
    y(),
    O(),
    E(),
    (L = v()));
})();
export { A as HiddenBrowserUseWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-browser-use-webview-host-C7qTAY02.js.map
