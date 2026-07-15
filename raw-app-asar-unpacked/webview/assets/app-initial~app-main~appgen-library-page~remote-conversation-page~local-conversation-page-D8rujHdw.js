import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  A_ as n,
  BA as r,
  C0 as i,
  DJ as a,
  HK as o,
  IA as s,
  IJ as c,
  KJ as l,
  L2 as u,
  LA as d,
  S0 as f,
  UK as p,
  VK as m,
  WA as h,
  _0 as g,
  hm as _,
  k2 as v,
  kY as y,
  k_ as b,
  mm as x,
  qJ as S,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  D as C,
  E as w,
  T,
  k as E,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  a as D,
  c as O,
  d as k,
  f as A,
  i as j,
  l as M,
  n as N,
  o as P,
  s as F,
  t as I,
  u as L,
} from "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~cp3jsiva-DdQ_7QaC.js";
function R({
  header: e,
  banner: t,
  children: n,
  className: r,
  bodyClassName: i,
  containerRef: a,
  tabIndex: o,
  ...s
}) {
  return (0, B.jsxs)(`div`, {
    ref: (0, z.useCallback)(
      (e) => {
        if (typeof a == `function`) {
          a(e);
          return;
        }
        a != null && (a.current = e);
      },
      [a],
    ),
    className: l(`relative flex h-full flex-col`, r),
    tabIndex: o,
    ...s,
    children: [
      (0, B.jsx)(`div`, { className: `sticky top-0 z-10`, children: e }),
      (0, B.jsx)(`div`, {
        className: l(`flex min-h-0 flex-1 flex-col`, i),
        children: (0, B.jsxs)(`div`, {
          className: `relative mx-auto flex min-h-0 w-full flex-1 flex-col`,
          children: [
            t,
            (0, B.jsx)(`div`, { className: `min-h-0 flex-1`, children: n }),
          ],
        }),
      }),
    ],
  });
}
var z,
  B,
  V,
  H,
  U = e(() => {
    (S(),
      (z = t(u(), 1)),
      (B = v()),
      (V = `px-toolbar`),
      (H = l(`mx-auto w-full max-w-(--thread-content-max-width)`, V)));
  });
function W({ children: e, onPointerDownOutside: t }) {
  let a = f(r),
    s = (0, K.useContext)(C),
    u = p(),
    m = (0, K.useContext)(T),
    h = i(_.activeTab$),
    g = i(n),
    v = i(k),
    y = i(L),
    b = i(O),
    x = (0, K.useRef)(null),
    S = (0, K.useRef)(null),
    w = (0, K.useRef)(null),
    E = (0, K.useRef)(0),
    F = t != null,
    R = !d(h) || !g || v,
    z = G(R, y),
    B = R ? j : 0,
    V = z !== `hidden`,
    U = z === `visible`,
    W = z === `entering` || z === `exiting`,
    Y = W ? b : B;
  E.current = Y;
  let X = (0, K.useEffectEvent)(() => {
      t?.();
    }),
    Z = (0, K.useCallback)(() => {
      let e = x.current;
      if (m != null && e != null) {
        let t = m.getBoundingClientRect();
        Object.assign(e.style, {
          height: `${o(t.height, u)}px`,
          left: `${o(t.left, u)}px`,
          top: `${o(t.top, u)}px`,
          width: `${o(t.width, u)}px`,
        });
      }
      let t = S.current,
        n =
          m == null || t == null
            ? 0
            : Math.max(0, m.offsetWidth - t.offsetLeft - t.offsetWidth);
      a.get(M) !== n && a.set(M, n);
    }, [m, a, u]);
  if (
    ((0, K.useLayoutEffect)(
      () => () => {
        (D(a), a.get(O) !== 0 && a.set(O, 0), a.get(M) !== 0 && a.set(M, 0));
      },
      [a],
    ),
    (0, K.useLayoutEffect)(() => {
      if (!V) {
        a.get(M) !== 0 && a.set(M, 0);
        return;
      }
      Z();
      let e = S.current;
      if (e == null || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(Z);
      return (
        t.observe(e),
        m != null && t.observe(m),
        window.addEventListener(`resize`, Z),
        () => {
          (t.disconnect(), window.removeEventListener(`resize`, Z));
        }
      );
    }, [m, a, V, Z]),
    (0, K.useLayoutEffect)(() => {
      if (!(!V || m == null))
        return (
          m.style.setProperty(I, `102px`),
          m.style.setProperty(N, `${E.current}px`),
          () => {
            (m.style.removeProperty(I), m.style.removeProperty(N));
          }
        );
    }, [m, V]),
    (0, K.useLayoutEffect)(() => {
      z === `entering`
        ? A(a, B, { direction: `enter`, shouldAnimate: !0 })
        : W || A(a, B);
    }, [z, W, a, B]),
    (0, K.useLayoutEffect)(() => {
      !V || m == null || m.style.setProperty(N, `${Y}px`);
    }, [m, V, Y]),
    (0, K.useEffect)(() => {
      if (!F || !U) return;
      let e = (e) => {
        let t = e.target;
        t instanceof Node && (w.current?.contains(t) || X());
      };
      return (
        document.addEventListener(`pointerdown`, e, !0),
        () => {
          document.removeEventListener(`pointerdown`, e, !0);
        }
      );
    }, [F, U]),
    !V)
  )
    return null;
  let Q = (0, J.jsx)(c.div, {
    "aria-hidden": !U,
    "data-testid": `right-panel-composer-overlay`,
    onAnimationEnd: (e) => {
      e.currentTarget === e.target && z === `entering` && P(a, `entering`);
    },
    onTransitionEnd: (e) => {
      e.currentTarget === e.target && z === `exiting` && P(a, `exiting`);
    },
    className: l(
      `pointer-events-none absolute inset-x-0 z-[42] transition-opacity duration-[120ms] motion-reduce:transition-none`,
      z === `entering` && `right-panel-composer-overlay-enter opacity-100`,
      z === `visible` && `opacity-100 ease-in`,
      z === `exiting` && `opacity-0 ease-out`,
    ),
    style: { bottom: s ?? 0, transform: `translateY(${j - Y}px)` },
    children: (0, J.jsx)(`div`, {
      ref: S,
      "data-right-panel-composer-overlay-content": `true`,
      className: l(H, `pb-6`),
      children: (0, J.jsx)(`div`, {
        ref: w,
        className: U ? `pointer-events-auto` : `pointer-events-none`,
        children: e,
      }),
    }),
  });
  return m == null
    ? Q
    : (0, q.createPortal)(
        (0, J.jsx)(`div`, {
          ref: x,
          className: `pointer-events-none fixed z-[41] overflow-visible`,
          "data-testid": `right-panel-composer-overlay-host`,
          style: { zoom: u },
          children: Q,
        }),
        m.ownerDocument.body,
      );
}
function G(e, t) {
  return e
    ? t === `entering`
      ? `entering`
      : `visible`
    : t === `exiting`
      ? `exiting`
      : `hidden`;
}
var K,
  q,
  J,
  Y = e(() => {
    (S(),
      a(),
      g(),
      (K = t(u(), 1)),
      (q = t(y(), 1)),
      m(),
      E(),
      w(),
      b(),
      x(),
      h(),
      F(),
      s(),
      U(),
      (J = v()));
  });
export { U as a, R as i, Y as n, H as r, W as t };
//# sourceMappingURL=app-initial~app-main~appgen-library-page~remote-conversation-page~local-conversation-page-D8rujHdw.js.map
