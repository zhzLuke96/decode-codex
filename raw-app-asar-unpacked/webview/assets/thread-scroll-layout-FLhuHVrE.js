import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  DJ as n,
  FK as r,
  GG as i,
  IJ as a,
  JG as o,
  KJ as s,
  L2 as c,
  MJ as l,
  PK as u,
  dK as d,
  fK as f,
  k2 as p,
  qJ as m,
  uK as h,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ln as g,
  O as ee,
  dr as te,
  fr as _,
  k as v,
  zn as ne,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  a as y,
  r as b,
} from "./app-initial~app-main~appgen-library-page~remote-conversation-page~local-conversation-page-D8rujHdw.js";
import {
  n as x,
  t as re,
} from "./thread-scroll-controller-context-value-BsCcCO8_.js";
var S = e(() => {});
function C({
  contentX: e,
  children: t,
  footer: n,
  hasLiveMcpAppFrame: o = !1,
  onScroll: c,
  onUserScrollToTop: u,
  ref: d,
  initialOffset: p = 0,
  remoteHostedPIPAnchorHostId: m,
}) {
  let g = p != null && p > 24 ? p : 0,
    _ = l(() => `${Math.abs(e?.get() ?? 0)}px`),
    v = (0, D.useRef)(null),
    [y, x] = (0, D.useState)(!1),
    S = (0, D.useRef)(null),
    C = (0, D.useRef)(g),
    A = (0, D.useRef)(new Set()),
    N = (0, D.useRef)(new Set()),
    P = (0, D.useRef)(null),
    F = (0, D.useRef)(!1),
    I = (0, D.useRef)(!1),
    L = (0, D.useRef)(!1),
    R = (0, D.useRef)(null),
    z = (0, D.useRef)(null),
    B = (0, D.useContext)(ee),
    oe = (0, D.useCallback)(
      (e) => {
        if (((v.current = e), !(e == null || B == null)))
          return B((t) => {
            I.current || w(e) || f(e, h(e) + t);
          });
      },
      [B],
    ),
    V = r(() => v.current),
    H = (0, D.useCallback)(() => C.current, []),
    U = r(
      (e) => (
        A.current.add(e),
        e(C.current),
        () => {
          A.current.delete(e);
        }
      ),
    ),
    W = r(
      (e) => (
        N.current.add(e),
        () => {
          N.current.delete(e);
        }
      ),
    ),
    G = r((e) => {
      C.current = e;
      let t = e <= 24;
      c?.(e, t);
      for (let t of A.current) t(e);
      x(!t);
    }),
    K = r(() => {
      ((I.current = !1),
        z.current != null &&
          (window.cancelAnimationFrame(z.current), (z.current = null)));
    }),
    se = r(() => {
      ((I.current = !0),
        z.current != null &&
          (window.cancelAnimationFrame(z.current), (z.current = null)));
    }),
    q = r(() => {
      R.current = null;
    }),
    J = r((e, t) => {
      let n = v.current;
      if (n == null) return;
      q();
      let r = Math.max(0, t(n));
      (n.scrollTo({ behavior: e, top: r === 0 ? 0 : -r }), G(h(n)));
    }),
    Y = r((e, t, n = `system`) => {
      let r = C.current,
        i = Math.max(0, e);
      (i > 24 && K(), J(t, () => i));
      let a = C.current;
      if (n === `user` && a !== r) for (let e of N.current) e(a, r);
    }),
    X = r((e) => {
      I.current || J(`instant`, () => e);
    }),
    Z = r((e) => {
      L.current = e;
    }),
    ce = r(() => {
      let e = v.current;
      if (I.current || e == null || R.current != null) return;
      let t = {
        distanceFromBottomPx: C.current,
        scrollHeightPx: e.scrollHeight,
        wheelDistanceFromBottomPx: 0,
      };
      ((R.current = t),
        window.requestAnimationFrame(() => {
          if (R.current === t) {
            if (v.current !== e) {
              q();
              return;
            }
            if (e.scrollHeight === t.scrollHeightPx) {
              q();
              return;
            }
            J(
              `instant`,
              () => t.distanceFromBottomPx + t.wheelDistanceFromBottomPx,
            );
          }
        }));
    }),
    Q = r(async () => {
      if (!(F.current || u == null)) {
        F.current = !0;
        try {
          for (; v.current != null && T(v.current) && (await u()) !== `stop`; );
        } catch {
        } finally {
          F.current = !1;
        }
      }
    }),
    $ = r(() => {
      let e = v.current;
      if (e == null) return;
      q();
      let t = h(e);
      if (t <= 24) {
        (J(`instant`, () => 0), K());
        return;
      }
      se();
      let n = performance.now(),
        r = (e) => {
          let i = v.current;
          if (i == null) {
            K();
            return;
          }
          let a = Math.min(1, (e - n) / k);
          if ((f(i, t * (1 - (1 - (1 - a) ** 3))), a < 1 && !w(i))) {
            z.current = window.requestAnimationFrame(r);
            return;
          }
          (f(i, 0), K());
        };
      z.current = window.requestAnimationFrame(r);
    });
  ((0, D.useLayoutEffect)(() => {
    let e = v.current;
    e != null && (f(e, g), G(h(e)));
  }, [G, g]),
    (0, D.useEffect)(() => {
      let e = v.current;
      if (e == null) return;
      let t = new AbortController(),
        n = { passive: !0, signal: t.signal },
        r = null,
        i = null,
        a = (t) => {
          (K(),
            (P.current = (t === `away` ? E(e) > 0 : h(e) > 0)
              ? { direction: t, lastAtMs: performance.now() }
              : null));
        },
        o = () => {
          let t = h(e);
          (t <= 24 && K(), G(t));
        },
        s = () => {
          let t = R.current;
          t != null &&
            e.scrollHeight !== t.scrollHeightPx &&
            (q(), f(e, t.distanceFromBottomPx + t.wheelDistanceFromBottomPx));
          let n = C.current,
            r = i;
          if (r != null) {
            i = null;
            let t = h(e);
            e.scrollHeight === r.scrollHeightPx &&
              e.scrollTop !== r.scrollTopPx &&
              t !== n &&
              (P.current = {
                direction: t > n ? `away` : `toward`,
                lastAtMs: performance.now(),
              });
          }
          let a = P.current;
          if (a == null) {
            o();
            return;
          }
          let s = performance.now();
          if (s - a.lastAtMs > M) {
            ((P.current = null), o());
            return;
          }
          o();
          let c = h(e);
          if ((c > n ? `away` : c < n ? `toward` : null) === a.direction) {
            ((a.lastAtMs = s), c > n && T(e) && Q());
            for (let e of N.current) e(c, n);
            c <= 24 && (P.current = null);
          }
        },
        c = (t) => {
          let n = ae(t, e.clientHeight),
            r = R.current;
          (r == null ? q() : (r.wheelDistanceFromBottomPx -= n),
            t.deltaY < 0 && E(e) <= 0 && Q(),
            n !== 0 && a(n < 0 ? `away` : `toward`));
        },
        l = (t) => {
          let n = ie(t, e);
          n != null && (q(), a(n));
        },
        u = (t) => {
          ((i = null),
            (P.current = null),
            !(t.pointerType !== `mouse` || t.target !== e) &&
              (q(),
              K(),
              (i = {
                scrollHeightPx: e.scrollHeight,
                scrollTopPx: e.scrollTop,
              })));
        },
        d = () => {
          i = null;
        },
        p = (e) => {
          r = e.touches.length === 1 ? e.touches[0] : null;
        },
        m = (t) => {
          let n = t.touches.length === 1 ? t.touches[0] : null;
          if (r == null || n == null || n.identifier !== r.identifier) {
            r = null;
            return;
          }
          let i = n.clientX - r.clientX,
            o = n.clientY - r.clientY;
          Math.max(Math.abs(i), Math.abs(o)) < j ||
            ((r = null),
            Math.abs(o) > Math.abs(i) && (q(), a(o > 0 ? `away` : `toward`)),
            o > Math.abs(i) && E(e) <= 0 && Q());
        },
        g = () => {
          r = null;
        };
      return (
        e.addEventListener(`pointerdown`, u, n),
        e.addEventListener(`pointerup`, d, n),
        e.addEventListener(`pointercancel`, d, n),
        e.addEventListener(`keydown`, l, n),
        e.addEventListener(`touchstart`, p, n),
        e.addEventListener(`touchmove`, m, n),
        e.addEventListener(`touchend`, g, n),
        e.addEventListener(`touchcancel`, g, n),
        e.addEventListener(`wheel`, c, n),
        e.addEventListener(`scroll`, s, n),
        () => {
          t.abort();
        }
      );
    }, [q, K, Q, G]),
    (0, D.useEffect)(
      () => () => {
        K();
      },
      [K],
    ),
    (0, D.useImperativeHandle)(d, () => ({ scrollToBottom: $ })));
  let le = (0, D.useMemo)(
      () => ({
        addScrollListener: U,
        addUserScrollListener: W,
        compensateScrollToDistanceFromBottomPx: X,
        getLastScrollDistanceFromBottomPx: H,
        getScrollElement: V,
        isScrolledFromBottom: y,
        preserveScrollPositionForNextLayout: ce,
        scrollToBottom: $,
        scrollToDistanceFromBottomPx: Y,
        setFooterResizeViewportPreserveDisabled: Z,
      }),
      [U, W, X, H, V, y, ce, $, Y, Z],
    ),
    ue = ne((e) => {
      let { height: t } = te(e),
        n = v.current;
      if (n == null) return;
      let r = S.current;
      r !== t &&
        (n.style.setProperty(`--thread-scroll-padding-bottom`, `${t + 16}px`),
        (S.current = t),
        !(I.current || L.current) &&
          (r == null || w(n) || J(`instant`, (e) => h(e) + t - r)));
    }),
    de = e == null ? void 0 : { x: e, "--thread-wide-block-inline-shift": _ };
  return (0, O.jsx)(re, {
    value: le,
    children: (0, O.jsx)(`div`, {
      className: s(
        `relative h-full flex-1`,
        o ? `[content-visibility:visible]` : `[content-visibility:auto]`,
      ),
      children: (0, O.jsx)(`div`, {
        ref: oe,
        "data-pip-anchor-host": m,
        ...i.timelineScroll,
        tabIndex: 0,
        className: s(
          `thread-scroll-container relative h-full overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] electron:[scrollbar-gutter:stable_both-edges] pt-(--thread-content-top-inset) [container-name:thread-content] [container-type:inline-size]`,
          `focus:outline-none`,
          `[&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px]`,
          `flex flex-col-reverse`,
        ),
        children: (0, O.jsxs)(a.div, {
          style: de,
          className: `flex min-h-full shrink-0 flex-col justify-start`,
          children: [
            (0, O.jsx)(`div`, {
              "data-mcp-app-portal-target": `true`,
              className: s(b, `relative flex flex-1 shrink-0 flex-col pb-8`),
              children: t,
            }),
            n
              ? (0, O.jsxs)(`div`, {
                  "data-thread-scroll-footer": `true`,
                  ref: ue,
                  className: `sticky bottom-0 z-10 mt-auto w-full pb-4`,
                  children: [
                    (0, O.jsx)(`div`, {
                      className: `pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-full w-full justify-center pt-4`,
                      children: (0, O.jsx)(`div`, {
                        className: s(
                          b,
                          `z-0 h-full bg-gradient-to-t from-token-main-surface-primary via-token-main-surface-primary extension:from-token-bg-primary extension:via-token-bg-primary`,
                        ),
                      }),
                    }),
                    (0, O.jsx)(`div`, {
                      "data-pip-obstacle": `thread-footer`,
                      className: s(`relative z-10 flex flex-col`, b),
                      children: n,
                    }),
                  ],
                })
              : null,
          ],
        }),
      }),
    }),
  });
}
function ie(e, t) {
  if (e.defaultPrevented || e.repeat) return null;
  let n = e.target;
  if (
    n instanceof HTMLElement &&
    n !== t &&
    (n.isContentEditable ||
      n.closest(`input, select, textarea`) != null ||
      ((e.key === ` ` || e.key === `Spacebar`) &&
        n.closest(`button, [role="button"]`) != null))
  )
    return null;
  switch (e.key) {
    case `ArrowUp`:
    case `Home`:
    case `PageUp`:
      return `away`;
    case ` `:
    case `Spacebar`:
      return e.shiftKey ? `away` : `toward`;
    case `ArrowDown`:
    case `End`:
    case `PageDown`:
      return `toward`;
    default:
      return null;
  }
}
function w(e) {
  return h(e) <= 24;
}
function T(e) {
  return E(e) <= A;
}
function E(e) {
  return e.scrollHeight - e.clientHeight - h(e);
}
function ae(e, t) {
  return e.deltaMode === P
    ? e.deltaY * N
    : e.deltaMode === F
      ? e.deltaY * t
      : e.deltaY;
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I = e(() => {
    (m(),
      n(),
      (D = t(c(), 1)),
      o(),
      v(),
      _(),
      g(),
      u(),
      S(),
      y(),
      x(),
      d(),
      (O = p()),
      (k = 260),
      (A = 64),
      (j = 8),
      (M = 1e3),
      (N = 16),
      (P = 1),
      (F = 2));
  });
export { I as n, S as r, C as t };
//# sourceMappingURL=thread-scroll-layout-FLhuHVrE.js.map
