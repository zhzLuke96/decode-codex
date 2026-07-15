import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  BW as n,
  DK as r,
  I2 as i,
  JA as a,
  L2 as o,
  Mq as s,
  Nq as c,
  _Y as l,
  bG as u,
  ej as d,
  hJ as f,
  k2 as p,
  kK as m,
  mJ as h,
  mY as g,
  pY as _,
  yG as v,
  yY as y,
  zW as b,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  J as x,
  Y as S,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  M as C,
  N as w,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  n as T,
  t as E,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~hotkey-window-new-thread~ciugno9i-UhEwWeMr.js";
import {
  i as D,
  r as O,
} from "./app-initial~app-main~chatgpt-conversation-page~keyboard-shortcuts-settings~remote-conversat~e5c4ajsk-Df0kRLgc.js";
import { n as k, t as A } from "./use-hotkey-window-detail-layout-BXY88LbS.js";
import {
  n as j,
  t as M,
} from "./use-hotkey-window-dismiss-on-escape-c3TxE7oG.js";
function N(e) {
  let t = (0, L.c)(20),
    {
      title: n,
      onDismiss: i,
      showDismissButton: a,
      reserveWindowControlsSafeArea: o,
      rightActions: c,
    } = e,
    u = a === void 0 ? !0 : a,
    d = o === void 0 ? !1 : o,
    f = y(),
    p = w(),
    m = d ? p.left : 0,
    h = d ? p.right : 0,
    g = m + 12,
    _ = h + 12,
    v = g + (u ? 52 : 0),
    x = _ + 84,
    S;
  t[0] !== v || t[1] !== x
    ? ((S = { left: v, right: x }), (t[0] = v), (t[1] = x), (t[2] = S))
    : (S = t[2]);
  let C;
  t[3] !== S || t[4] !== n
    ? ((C = (0, R.jsx)(`div`, {
        className: `absolute inset-y-0 flex items-center justify-center text-base font-medium text-token-foreground/60 select-none`,
        style: S,
        children: n,
      })),
      (t[3] = S),
      (t[4] = n),
      (t[5] = C))
    : (C = t[5]);
  let T;
  t[6] !== f || t[7] !== g || t[8] !== i || t[9] !== u
    ? ((T = u
        ? (0, R.jsx)(`div`, {
            className: `absolute flex items-center gap-0`,
            style: { left: g },
            children: (0, R.jsx)(r, {
              tooltipContent: (0, R.jsx)(l, { ...z.dismiss }),
              delayOpen: !0,
              children: (0, R.jsx)(s, {
                size: `toolbar`,
                color: `ghost`,
                "aria-label": f.formatMessage(z.dismiss),
                onClick: i,
                children: (0, R.jsx)(b, { className: `icon-xs` }),
              }),
            }),
          })
        : null),
      (t[6] = f),
      (t[7] = g),
      (t[8] = i),
      (t[9] = u),
      (t[10] = T))
    : (T = t[10]);
  let E;
  t[11] === _ ? (E = t[12]) : ((E = { right: _ }), (t[11] = _), (t[12] = E));
  let D;
  t[13] !== c || t[14] !== E
    ? ((D = (0, R.jsx)(`div`, {
        className: `absolute flex items-center gap-0`,
        style: E,
        children: c,
      })),
      (t[13] = c),
      (t[14] = E),
      (t[15] = D))
    : (D = t[15]);
  let O;
  return (
    t[16] !== C || t[17] !== T || t[18] !== D
      ? ((O = (0, R.jsxs)(`div`, {
          className: `draggable relative flex h-toolbar-sm items-center justify-center px-3`,
          children: [C, T, D],
        })),
        (t[16] = C),
        (t[17] = T),
        (t[18] = D),
        (t[19] = O))
      : (O = t[19]),
    O
  );
}
function P(e) {
  let t = (0, L.c)(18),
    { title: n, mainWindowPath: i, canCollapseToHome: a } = e,
    o = a === void 0 ? !0 : a,
    c = y(),
    u;
  t[0] !== o || t[1] !== c
    ? ((u = o
        ? (0, R.jsx)(r, {
            tooltipContent: (0, R.jsx)(l, { ...z.newThread }),
            delayOpen: !0,
            children: (0, R.jsx)(s, {
              size: `toolbar`,
              color: `ghost`,
              "aria-label": c.formatMessage(z.newThread),
              onClick: F,
              children: (0, R.jsx)(E, { className: `icon-sm` }),
            }),
          })
        : null),
      (t[0] = o),
      (t[1] = c),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, R.jsx)(l, { ...z.openInMainWindow })), (t[3] = d))
    : (d = t[3]);
  let p;
  t[4] === c
    ? (p = t[5])
    : ((p = c.formatMessage(z.openInMainWindow)), (t[4] = c), (t[5] = p));
  let m;
  t[6] === i
    ? (m = t[7])
    : ((m = () => {
        f.dispatchMessage(`open-in-main-window`, { path: i });
      }),
      (t[6] = i),
      (t[7] = m));
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, R.jsx)(x, { className: `icon-sm` })), (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== p || t[10] !== m
    ? ((g = (0, R.jsx)(r, {
        tooltipContent: d,
        delayOpen: !0,
        children: (0, R.jsx)(s, {
          size: `toolbar`,
          color: `ghost`,
          "aria-label": p,
          onClick: m,
          children: h,
        }),
      })),
      (t[9] = p),
      (t[10] = m),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== u || t[13] !== g
    ? ((_ = (0, R.jsxs)(R.Fragment, { children: [u, g] })),
      (t[12] = u),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== _ || t[16] !== n
      ? ((v = (0, R.jsx)(N, { title: n, onDismiss: I, rightActions: _ })),
        (t[15] = _),
        (t[16] = n),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
function F() {
  v.hotkeyWindowHotkeys?.collapseToHome();
}
function I() {
  v.hotkeyWindowHotkeys?.dismiss();
}
var L,
  R,
  z,
  B = e(() => {
    ((L = i()),
      g(),
      C(),
      c(),
      m(),
      T(),
      S(),
      n(),
      h(),
      u(),
      (R = p()),
      (z = _({
        dismiss: {
          id: `hotkeyWindow.dismiss`,
          defaultMessage: `Dismiss Popout Window`,
          description: `Tooltip label for dismissing the hotkey window`,
        },
        newThread: {
          id: `hotkeyWindow.threadPage.newButton`,
          defaultMessage: `Start New Chat`,
          description: `Tooltip label for the hotkey window header button that returns to hotkey window home`,
        },
        openInMainWindow: {
          id: `hotkeyWindow.threadPage.openInMainWindow`,
          defaultMessage: `Open in Main Window`,
          description: `Tooltip label for the hotkey window header button that opens the current page in the main app window`,
        },
      })));
  });
function V() {
  let e = (0, U.c)(7);
  j();
  let [t, n] = (0, W.useState)(null),
    r = t != null && t.canCollapseToHome !== !1,
    i;
  (e[0] === r
    ? (i = e[1])
    : ((i = { commandId: `newTask`, enabled: r, onKeyDown: H }),
      (e[0] = r),
      (e[1] = i)),
    D(i));
  let a;
  e[2] === t
    ? (a = e[3])
    : ((a =
        t == null
          ? null
          : (0, G.jsx)(P, {
              title: t.title,
              mainWindowPath: t.mainWindowPath,
              canCollapseToHome: t.canCollapseToHome !== !1,
            })),
      (e[2] = t),
      (e[3] = a));
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, G.jsx)(d, {}),
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  return (
    e[5] === a
      ? (s = e[6])
      : ((s = (0, G.jsx)(A.Provider, {
          value: n,
          children: (0, G.jsxs)(`div`, {
            className: `flex h-full w-full flex-col overflow-hidden rounded-2xl border border-token-border-light bg-token-main-surface-primary`,
            children: [a, o],
          }),
        })),
        (e[5] = a),
        (e[6] = s)),
    s
  );
}
function H(e) {
  (e.preventDefault(),
    e.stopPropagation(),
    v.hotkeyWindowHotkeys?.collapseToHome());
}
var U, W, G;
e(() => {
  ((U = i()), (W = t(o(), 1)), a(), O(), u(), B(), k(), M(), (G = p()));
})();
export { V as HotkeyWindowDetailLayout };
//# sourceMappingURL=hotkey-window-detail-layout-BXamU7wo.js.map
