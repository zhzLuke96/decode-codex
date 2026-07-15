import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $g as n,
  C0 as r,
  FA as i,
  Fg as a,
  I2 as o,
  IA as s,
  L2 as c,
  Lg as l,
  Rg as u,
  UK as d,
  VK as f,
  _0 as p,
  fm as m,
  hm as h,
  k2 as g,
  mm as _,
  zg as v,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  bs as y,
  gs as b,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  gc as x,
  hc as S,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  $t as C,
  Qt as w,
  fn as T,
  gn as E,
  hn as D,
  ln as O,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
function k(e) {
  let t = (0, L.c)(13),
    { conversationId: n, persistedTabsEnabled: i } = e,
    o = r(m.activeTab$),
    s = r(h.activeTab$),
    c = r(m.tabs$),
    d = r(l),
    f = r(a),
    p,
    g;
  t[0] === f
    ? ((p = t[1]), (g = t[2]))
    : ((p = (e) => f.on(`change`, e)),
      (g = () => f.get()),
      (t[0] = f),
      (t[1] = p),
      (t[2] = g));
  let _ = (0, R.useSyncExternalStore)(p, g, M),
    y = r(h.tabs$),
    x = r(v),
    S = r(u),
    C,
    T;
  t[3] === S
    ? ((C = t[4]), (T = t[5]))
    : ((C = (e) => S.on(`change`, e)),
      (T = () => S.get()),
      (t[3] = S),
      (t[4] = C),
      (t[5] = T));
  let E = (0, R.useSyncExternalStore)(C, T, j),
    D = b(
      n,
      { bottom: o, right: s },
      { bottom: d || _ > 0, right: x || E > 0 },
    ),
    O;
  (t[6] === n
    ? (O = t[7])
    : ((O = () => w.getBrowserUseBrowserTabIdsKey(n)), (t[6] = n), (t[7] = O)),
    (0, R.useSyncExternalStore)(w.subscribe, O, A));
  let k = P({
    conversationId: n,
    mountedBrowserTabIds: D,
    panelTabs: [...y, ...c],
  });
  if (k.length === 0) return null;
  let F;
  t[8] !== n || t[9] !== i
    ? ((F = (e) =>
        (0, z.jsx)(
          N,
          { browserTabId: e, conversationId: n, persistedTabsEnabled: i },
          e,
        )),
      (t[8] = n),
      (t[9] = i),
      (t[10] = F))
    : (F = t[10]);
  let I = k.map(F),
    B;
  return (
    t[11] === I
      ? (B = t[12])
      : ((B = (0, z.jsx)(z.Fragment, { children: I })),
        (t[11] = I),
        (t[12] = B)),
    B
  );
}
function A() {
  return ``;
}
function j() {
  return 0;
}
function M() {
  return 0;
}
function N(e) {
  let t = (0, L.c)(11),
    { browserTabId: n, conversationId: r, persistedTabsEnabled: i } = e,
    a = d(),
    o = (0, R.useRef)(null),
    s;
  t[0] !== n || t[1] !== r
    ? ((s = I(r, n)), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c = s;
  if (c == null || !F(r, n)) return null;
  let l;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== c.adoptedWebContentsId ||
    t[7] !== c.adoptionLease ||
    t[8] !== c.initialUrl ||
    t[9] !== a
      ? ((l = (0, z.jsx)(S, {
          adoptionLease: c.adoptionLease,
          adoptedWebContentsId: c.adoptedWebContentsId,
          bounds: null,
          browserTabId: n,
          conversationId: r,
          initialUrl: c.initialUrl,
          isVisible: !1,
          persistedTabsEnabled: i,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: o,
          windowZoom: a,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = c.adoptedWebContentsId),
        (t[7] = c.adoptionLease),
        (t[8] = c.initialUrl),
        (t[9] = a),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function P({ conversationId: e, mountedBrowserTabIds: t, panelTabs: n }) {
  let r = new Set();
  for (let a of n) {
    let n = i(a, e) ?? null;
    n == null ||
      w.isBrowserUseTab(e, n) ||
      t.includes(n) ||
      (F(e, n) && r.add(n));
  }
  return Array.from(r);
}
function F(e, t) {
  return w.isBrowserUseTab(e, t) ? !1 : I(e, t) != null;
}
function I(e, t) {
  let n = T(e, t),
    r = D(e, t),
    i = O(e, t);
  return n == null && (r == null || i == null)
    ? null
    : {
        adoptedWebContentsId: i,
        adoptionLease: r,
        initialUrl: n ?? `about:blank`,
      };
}
var L, R, z;
e(() => {
  ((L = o()),
    p(),
    (R = t(c(), 1)),
    f(),
    _(),
    n(),
    y(),
    s(),
    C(),
    E(),
    x(),
    (z = g()));
})();
export { k as HiddenBackgroundBrowserWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-background-webview-host-DhFmbaJX.js.map
