import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $g as n,
  C0 as r,
  DJ as i,
  FJ as a,
  FK as o,
  HK as s,
  H_ as c,
  Hq as l,
  I2 as u,
  KJ as d,
  K_ as f,
  L2 as p,
  PJ as m,
  PK as h,
  UK as g,
  U_ as _,
  Ug as v,
  Uq as y,
  VK as b,
  _0 as x,
  cY as S,
  c_ as ee,
  k2 as C,
  kJ as w,
  kY as T,
  qJ as E,
  s2 as D,
  sY as O,
  zg as k,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $a as A,
  Fo as j,
  Mo as M,
  No as N,
  Oo as P,
  Po as F,
  Za as I,
  fo as L,
  ko as te,
  ma as R,
  pa as ne,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import { ys as z } from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  dr as re,
  fr as B,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import { r as V } from "./thread-scroll-layout-FLhuHVrE.js";
import {
  n as ie,
  r as ae,
} from "./thread-scroll-controller-context-value-BsCcCO8_.js";
import {
  a as oe,
  i as se,
  n as ce,
  o as H,
  r as le,
  t as ue,
} from "./thread-virtualizer-muPEQiaJ.js";
function de(e) {
  let t = (0, U.c)(5),
    n = (0, W.useRef)(null),
    r;
  t[0] === e
    ? (r = t[1])
    : ((r = (t) => {
        n.current ??= window.setTimeout(() => {
          ((n.current = null), t());
        }, e);
      }),
      (t[0] = e),
      (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = () => {
        n.current != null &&
          (window.clearTimeout(n.current), (n.current = null));
      }),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  return (
    t[3] === i
      ? (s = t[4])
      : ((s = { schedule: i, cancel: o }), (t[3] = i), (t[4] = s)),
    s
  );
}
var U,
  W,
  fe = e(() => {
    ((U = u()), (W = t(p(), 1)));
  });
function G(e) {
  let t = (0, K.c)(17),
    { containerRef: n, contextId: i } = e,
    a = r(I),
    o = r(A),
    s = a?.contextId === i ? a : null,
    c = s == null ? null : (o?.id ?? null),
    l = (0, q.useRef)(null),
    { schedule: u, cancel: d } = de(pe),
    f;
  t[0] !== s || t[1] !== c || t[2] !== n
    ? ((f = () => {
        let e = n.current;
        if (e == null) return;
        te(e, { includeShadowRoots: !1 });
        let t = l.current;
        if (
          (t != null && (t.classList.remove(P), (l.current = null)), s == null)
        )
          return;
        let r = ne(s.matches),
          i = new Map();
        if (
          (e.querySelectorAll(`[data-content-search-unit-key]`).forEach((e) => {
            let t = e.dataset.contentSearchUnitKey;
            if (t == null) return;
            let n = r.get(t);
            n == null ||
              n.length === 0 ||
              M({
                target: e,
                query: s.query,
                maxMatches: n.length,
                includeShadowRoots: !1,
              }).matches.forEach((e, t) => {
                let r = n[t];
                r != null && (F({ element: e, matchId: r.id }), i.set(r.id, e));
              });
          }),
          c == null)
        )
          return;
        let a = i.get(c);
        a != null && (a.classList.add(P), (l.current = a));
      }),
      (t[0] = s),
      (t[1] = c),
      (t[2] = n),
      (t[3] = f))
    : (f = t[3]);
  let p = (0, q.useEffectEvent)(f),
    m;
  t[4] !== s?.runId || t[5] !== p || t[6] !== d || t[7] !== n || t[8] !== u
    ? ((m = () => {
        let e = n.current;
        if (e == null || (p(), s?.runId == null)) return;
        let t = new MutationObserver((e) => {
          j(e) && u(p);
        });
        return (
          t.observe(e, { childList: !0, subtree: !0, characterData: !0 }),
          () => {
            (t.disconnect(), d());
          }
        );
      }),
      (t[4] = s?.runId),
      (t[5] = p),
      (t[6] = d),
      (t[7] = n),
      (t[8] = u),
      (t[9] = m))
    : (m = t[9]);
  let h = s?.runId,
    g;
  (t[10] !== c ||
  t[11] !== d ||
  t[12] !== n ||
  t[13] !== i ||
  t[14] !== u ||
  t[15] !== h
    ? ((g = [h, c, d, n, i, u]),
      (t[10] = c),
      (t[11] = d),
      (t[12] = n),
      (t[13] = i),
      (t[14] = u),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]),
    (0, q.useEffect)(m, g));
}
var K,
  q,
  pe,
  me = e(() => {
    ((K = u()), x(), (q = t(p(), 1)), N(), R(), L(), fe(), (pe = 80));
  });
function he({
  entries: e,
  RowComponent: t,
  onApiChange: n,
  onVisibleContentReady: r,
  className: i,
  gapPx: a = ke,
  getBottomScrollPaddingPx: s,
  onLatestTurnHeightChange: c,
  preserveMeasuredTurnViewport: l = !1,
  getPendingRestoreScrollDistanceFromBottomPx: u,
  restoreScrollDistanceFromBottomPx: f,
  initialRestoreState: p,
  latestTurnFooter: m,
  latestTurnFooterKey: h,
  onRestoreStateChange: _,
  onViewportChange: v,
  latestTurnSynchronousMeasurementKey: y,
}) {
  let b = ae(),
    x = g(),
    [S, ee] = (0, X.useState)(p?.turnHeightsByKey ?? Ne),
    [C, w] = (0, X.useState)(null),
    [T, E] = (0, X.useState)(() => {
      let t = J(s);
      return _e(e, Y(b.getLastScrollDistanceFromBottomPx(), t), a, p);
    }),
    [D, O] = (0, X.useState)(null),
    k = (0, X.useRef)(null),
    A = (0, X.useRef)(S),
    j = (0, X.useRef)(T),
    M = (0, X.useRef)(new Map()),
    N = (0, X.useRef)(new Map()),
    P = (0, X.useRef)(new Map()),
    F = (0, X.useRef)(new Map()),
    I = (0, X.useRef)(null),
    L = (0, X.useRef)(null),
    te = (0, X.useRef)(!1),
    R = (0, X.useMemo)(
      () => ue({ entries: e, gapPx: a, measuredHeightsByKey: S }),
      [e, a, S],
    ),
    ne = (0, X.useRef)(R),
    z = (0, X.useRef)(null),
    B = T.renderedRange;
  if (D != null) {
    let e = le({
      layout: R,
      turnKey: D.turnKey,
      viewportHeightPx: T.viewportHeightPx,
    });
    e != null &&
      (B = se({
        distanceFromBottomPx: e,
        layout: R,
        overscanCount: je,
        viewportHeightPx: T.viewportHeightPx,
      }));
  } else if (!xe(T.turnKeys, R.turnKeys)) {
    let e = T.turnKeys[T.renderedRange.startIndex];
    e != null && (B = oe({ anchorKey: e, layout: R, previousRange: B }) ?? B);
  }
  let V = o(() => {
      I.current ?? f?.();
    }),
    ie = o((e) => {
      (e.latestTurnHeightChange != null && c?.(e.latestTurnHeightChange),
        e.restoreScrollDistanceFromBottom
          ? V()
          : e.scrollDistanceFromBottomPx != null &&
            b.compensateScrollToDistanceFromBottomPx(
              e.scrollDistanceFromBottomPx,
            ));
    }),
    H = o((e, t) => {
      if (I.current != null) return;
      let n = ve({
        current: j.current,
        distanceFromBottomPx: e,
        layout: R,
        viewportHeightPx: t,
      });
      n !== j.current && ((j.current = n), E(n));
    }),
    de = o((e, t, n) => {
      if (v == null) return;
      let r = Math.max(0, Math.min(R.totalHeightPx, R.totalHeightPx - e)),
        i = Math.max(0, r - t),
        a =
          n == null
            ? r
            : Math.max(0, Math.min(R.totalHeightPx, R.totalHeightPx - n)),
        o = Math.max(0, a - t);
      v({
        target:
          n == null
            ? null
            : i < o
              ? { originPx: o, targetPx: i }
              : r > a
                ? { originPx: a, targetPx: r }
                : null,
        viewportEndPx: r,
        viewportStartPx: i,
      });
    }),
    U = o((e) => {
      queueMicrotask(() => {
        (k.current === e && (e.complete(), (k.current = null)),
          O((t) => (t === e ? null : t)));
      });
    }),
    W = o(
      (e, t, n) => (
        k.current?.complete(),
        new Promise((r) => {
          let i = {
            align: n?.align ?? `center`,
            complete: r,
            getTargetElement: t,
            turnKey: e,
          };
          ((k.current = i), O(i));
        })
      ),
    ),
    fe = o(() => {
      let e = 0,
        t = null;
      for (let [n, r] of F.current)
        ((e += r),
          (t == null ||
            t.compareDocumentPosition(n) ===
              Node.DOCUMENT_POSITION_FOLLOWING) &&
            (t = n));
      t != null &&
        c?.({
          heightDeltaPx: null,
          heightPx: null,
          bottomViewportOverflowPx: we({
            scrollElement: b.getScrollElement(),
            turnElement: t,
            windowZoom: x,
          }),
          turnElement: t,
          followContentHeightPx: e,
        });
    }),
    G = o((t, n = !0) => {
      let r = I.current,
        i = A.current,
        o = i,
        c = 0,
        d = !1,
        f = null,
        p = 0,
        m = 0,
        h = b.getLastScrollDistanceFromBottomPx(),
        g = J(s),
        _ = Y(h, g),
        v = l ? null : (u?.() ?? null),
        y = r == null ? _ : j.current.distanceFromBottomPx;
      for (let [e, { element: n, heightPx: r }] of t) {
        let t = N.current.get(e);
        if (t !== n) continue;
        let a = Math.max(1, r),
          s = i[e];
        if (s === a) continue;
        (o === i && (o = { ...i }), (o[e] = a));
        let h = s == null ? 0 : a - s,
          g = R.turnIndexByKey.get(e);
        if (g == null) continue;
        let _ = g === R.turnKeys.length - 1;
        _ && ((d = !0), (c += h), (f = t));
        let v = a - (R.heightsPx[g] ?? a);
        p += v;
        let b = R.bottomOffsetsPx[g] ?? 0;
        v !== 0 && b <= y && (l || (u != null && !_)) && (m += v);
      }
      if (o === i) return !1;
      let S = l && Se(h, g),
        C = r?.restoreScrollDistanceFromBottom || v != null,
        w = null;
      C ||
        (w = S
          ? 0
          : m === 0
            ? (r?.scrollDistanceFromBottomPx ?? null)
            : (r?.scrollDistanceFromBottomPx ?? h) + m);
      let T = j.current.distanceFromBottomPx;
      C ? (T = v ?? T) : w != null && (T = Y(w, g));
      let D = ue({ entries: e, gapPx: a, measuredHeightsByKey: o });
      z.current ??= R;
      let O = ve({
          current: j.current,
          distanceFromBottomPx: T,
          layout: D,
          viewportHeightPx: j.current.viewportHeightPx,
        }),
        k = r?.latestTurnHeightChange,
        M = f ?? k?.turnElement ?? null,
        P = {
          latestTurnHeightChange:
            d || k != null
              ? {
                  heightDeltaPx: (k?.heightDeltaPx ?? 0) + c,
                  heightPx: D.heightsPx.at(-1) ?? null,
                  bottomViewportOverflowPx: we({
                    scrollElement: b.getScrollElement(),
                    turnElement: M,
                    windowZoom: x,
                  }),
                  turnElement: M,
                  followContentHeightPx: null,
                }
              : null,
          restoreScrollDistanceFromBottom: C,
          scrollDistanceFromBottomPx: w,
          turnHeightsByKey: o,
        },
        F = () => {
          ((A.current = o), ee(o), O !== j.current && ((j.current = O), E(O)));
        };
      return (
        (I.current = P),
        l &&
          p !== 0 &&
          m === 0 &&
          !S &&
          !C &&
          b.preserveScrollPositionForNextLayout(),
        n ? (0, Oe.flushSync)(F) : F(),
        !0
      );
    }),
    K = o(() => {
      if (L.current != null) return L.current;
      let e = new ResizeObserver((e) => {
        let t = new Map(),
          n = !1;
        for (let r of e) {
          let e = M.current.get(r.target);
          if (e == null) continue;
          let { height: i } = re(r);
          switch (e.kind) {
            case `turn`:
              t.set(e.turnKey, { element: r.target, heightPx: i });
              break;
            case `latest-turn-follow-content`:
              (F.current.set(e.element, i), (n = !0));
              break;
          }
        }
        (G(t), n && fe());
      });
      return ((L.current = e), e);
    }),
    q = o((e, t) => {
      if (t == null) return;
      (M.current.set(t, { kind: `turn`, turnKey: e }),
        N.current.set(e, t),
        P.current.set(e, t));
      let n = K();
      return (
        n.observe(t),
        () => {
          (n.unobserve(t),
            M.current.delete(t),
            P.current.get(e) === t && P.current.delete(e),
            N.current.get(e) === t && N.current.delete(e));
        }
      );
    }),
    pe = o(() => {
      let t = e.at(-1)?.turnKey;
      if (t == null) return;
      let n = N.current.get(t);
      if (n == null) return;
      let r = n.offsetHeight;
      r <= 0 || G(new Map([[t, { element: n, heightPx: r }]]), !1);
    }),
    me = o((e) => {
      if (e == null) return;
      (M.current.set(e, { element: e, kind: `latest-turn-follow-content` }),
        F.current.set(e, 0));
      let t = K();
      return (
        t.observe(e),
        () => {
          (t.unobserve(e), M.current.delete(e), F.current.delete(e));
        }
      );
    });
  ((0, X.useLayoutEffect)(() => {
    let e = P.current;
    if (e.size === 0) return;
    P.current = new Map();
    let t = new Map();
    for (let [n, r] of e) {
      if (N.current.get(n) !== r) continue;
      let e = r.offsetHeight;
      e > 0 && t.set(n, { element: r, heightPx: e });
    }
    if (t.size > 0 && G(t, !1))
      for (let [t, n] of e) N.current.get(t) === n && P.current.set(t, n);
  }),
    (0, X.useLayoutEffect)(() => {
      y != null && pe();
    }, [y, pe]),
    (0, X.useLayoutEffect)(() => {
      let e = I.current;
      e == null || e.turnHeightsByKey !== S || ((I.current = null), ie(e));
    }, [ie, S]),
    (0, X.useEffect)(() => {
      if (n != null)
        return (
          n({ scrollToKey: W }),
          () => {
            n(null);
          }
        );
    }, [n, W]),
    (0, X.useEffect)(() => {
      if (
        r == null ||
        te.current ||
        C == null ||
        (e.length > 0 && N.current.size === 0)
      )
        return;
      let t = null,
        n = window.requestAnimationFrame(() => {
          t = window.requestAnimationFrame(() => {
            ((te.current = !0), V(), r());
          });
        });
      return () => {
        (window.cancelAnimationFrame(n),
          t != null && window.cancelAnimationFrame(t));
      };
    }, [e.length, r, V, C]),
    (0, X.useEffect)(() => {
      let e = M.current,
        t = N.current,
        n = F.current;
      return () => {
        (L.current?.disconnect(),
          (L.current = null),
          e.clear(),
          t.clear(),
          P.current.clear(),
          n.clear(),
          (I.current = null),
          k.current?.complete(),
          (k.current = null));
      };
    }, []),
    (0, X.useLayoutEffect)(() => {
      if (_ != null)
        return () => {
          _(Ce(A.current, j.current.turnKeys, j.current.renderedRange));
        };
    }, [_]),
    (0, X.useLayoutEffect)(() => {
      let e = b.getScrollElement();
      if (e == null) return;
      let t = () => e.clientHeight || j.current.viewportHeightPx || Ae,
        n = b.addScrollListener((e) => {
          H(Y(e, J(s)), t());
        }),
        r = b.addUserScrollListener((e, n) => {
          de(Y(e, J(s)), t(), n == null ? void 0 : Y(n, J(s)));
        }),
        i = new ResizeObserver((e) => {
          let t = e[0];
          if (t == null) return;
          let { height: n } = re(t);
          (H(j.current.distanceFromBottomPx, n), V());
        });
      return (
        i.observe(e),
        () => {
          (n(), r(), i.disconnect());
        }
      );
    }, [s, de, V, b, H]),
    (0, X.useLayoutEffect)(() => {
      if (D == null) return;
      let e = b.getScrollElement();
      if (e == null) return;
      let t = new Map();
      for (let [e, n] of N.current) {
        let r = n.offsetHeight;
        r > 0 && t.set(e, { element: n, heightPx: r });
      }
      if (G(t, !1) || I.current != null) return;
      let n = N.current.get(D.turnKey),
        r = n == null ? null : (D.getTargetElement?.(n) ?? n),
        i =
          n == null || r == null
            ? Te({
                align: D.align,
                layout: R,
                turnKey: D.turnKey,
                viewportHeightPx: e.clientHeight,
              })
            : Ee({
                align: D.align,
                layout: R,
                targetElement: r,
                turnElement: n,
                turnKey: D.turnKey,
                viewportHeightPx: e.clientHeight,
                windowZoom: x,
              });
      if (i == null) {
        U(D);
        return;
      }
      (b.scrollToDistanceFromBottomPx(i + J(s), `instant`, `user`),
        H(i, e.clientHeight),
        U(D));
    }, [G, R, D, b, U, s, H, x]),
    (0, X.useLayoutEffect)(() => {
      if (I.current != null) return;
      let e = ne.current,
        t = z.current ?? R;
      if (((z.current = null), (ne.current = R), !l || D != null || e === t))
        return;
      let n = J(s),
        r = b.getLastScrollDistanceFromBottomPx(),
        i = Y(r, n);
      if ((u?.() ?? null) != null || Se(r, n)) return;
      let a = be({
        distanceFromBottomPx: i,
        layout: e,
        measuredHeightsByKey: A.current,
        nextLayout: t,
        viewportHeightPx: j.current.viewportHeightPx,
      });
      if (a == null) return;
      let o = ce({
        anchorKey: a,
        distanceFromBottomPx: i,
        nextLayout: t,
        previousLayout: e,
      });
      o == null ||
        o === i ||
        (H(o, j.current.viewportHeightPx),
        b.compensateScrollToDistanceFromBottomPx(o + n));
    }, [s, u, R, D, l, b, H]),
    (0, X.useLayoutEffect)(() => {
      D ?? (H(j.current.distanceFromBottomPx, j.current.viewportHeightPx), V());
    }, [e.length, D, V, H]));
  let he = h ?? e.at(-1)?.turnKey;
  return (0, Z.jsx)(`div`, {
    ref: w,
    className: d(`relative shrink-0`, i),
    style: { height: `${R.totalHeightPx}px` },
    children: (0, Z.jsx)(`div`, {
      className: `flex flex-col`,
      style: {
        gap: `${a}px`,
        marginTop: `${R.topOffsetsPx[B.startIndex] ?? 0}px`,
      },
      children: e.slice(B.startIndex, B.endIndex).map((n, r) => {
        let i = B.startIndex + r;
        return (0, Z.jsx)(
          Pe,
          {
            entry: n,
            latestTurnFollowContentRef:
              i === e.length - 1 && c != null ? me : void 0,
            latestTurnFooter: n.turnKey === he ? m : void 0,
            RowComponent: t,
            constrainedHeightPx:
              i !== e.length - 1 &&
              D?.turnKey !== n.turnKey &&
              S[n.turnKey] == null
                ? R.heightsPx[i]
                : void 0,
            observeTurnElement: q,
          },
          n.turnKey,
        );
      }),
    }),
  });
}
function ge(e) {
  let t = (0, De.c)(17),
    {
      entry: n,
      latestTurnFollowContentRef: r,
      latestTurnFooter: i,
      RowComponent: a,
      constrainedHeightPx: s,
      observeTurnElement: c,
    } = e,
    { turnKey: l } = n,
    u;
  t[0] !== c || t[1] !== l
    ? ((u = (e) => c(l, e)), (t[0] = c), (t[1] = l), (t[2] = u))
    : (u = t[2]);
  let d = o(u),
    f;
  t[3] === s
    ? (f = t[4])
    : ((f = s == null ? void 0 : { height: s, overflow: `hidden` }),
      (t[3] = s),
      (t[4] = f));
  let p;
  t[5] !== a || t[6] !== n || t[7] !== r || t[8] !== i
    ? ((p = (0, Z.jsx)(a, {
        entry: n,
        latestTurnFooter: i,
        latestTurnFollowContentRef: r,
      })),
      (t[5] = a),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== d || t[11] !== p || t[12] !== l
    ? ((m = (0, Z.jsx)(`div`, {
        ref: d,
        className: `[&_[data-virtualized-turn-content]]:[content-visibility:visible]`,
        "data-turn-key": l,
        children: p,
      })),
      (t[10] = d),
      (t[11] = p),
      (t[12] = l),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== f || t[15] !== m
      ? ((h = (0, Z.jsx)(`div`, { style: f, children: m })),
        (t[14] = f),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
function _e(e, t, n, r) {
  let i = ue({
      entries: e,
      gapPx: n,
      measuredHeightsByKey: r?.turnHeightsByKey ?? Ne,
    }),
    a = Ae,
    o = Math.min(t, i.totalHeightPx),
    s = se({
      distanceFromBottomPx: o,
      layout: i,
      overscanCount: je,
      viewportHeightPx: a,
    });
  return {
    distanceFromBottomPx: o,
    renderedRange:
      (r?.renderedWindow == null
        ? null
        : oe({
            anchorKey: r.renderedWindow.anchorKey,
            layout: i,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(
                r.renderedWindow.count,
                s.endIndex - s.startIndex,
              ),
            },
          })) ?? s,
    turnKeys: i.turnKeys,
    viewportHeightPx: a,
  };
}
function ve({
  current: e,
  distanceFromBottomPx: t,
  layout: n,
  viewportHeightPx: r,
}) {
  let i = Math.min(t, n.totalHeightPx),
    a = se({
      distanceFromBottomPx: i,
      layout: n,
      overscanCount: je,
      viewportHeightPx: r,
    }),
    o = ye(e.renderedRange, a) ? e.renderedRange : a;
  return e.distanceFromBottomPx === i &&
    e.viewportHeightPx === r &&
    e.renderedRange.startIndex === o.startIndex &&
    e.renderedRange.endIndex === o.endIndex &&
    xe(e.turnKeys, n.turnKeys)
    ? e
    : {
        distanceFromBottomPx: i,
        renderedRange: o,
        turnKeys: n.turnKeys,
        viewportHeightPx: r,
      };
}
function ye(e, t) {
  return e.startIndex <= t.startIndex && e.endIndex >= t.endIndex;
}
function be({
  distanceFromBottomPx: e,
  layout: t,
  measuredHeightsByKey: n,
  nextLayout: r,
  viewportHeightPx: i,
}) {
  let a = se({
    distanceFromBottomPx: e,
    layout: t,
    overscanCount: 0,
    viewportHeightPx: i,
  });
  for (let e = a.startIndex; e < a.endIndex; e += 1) {
    let i = t.turnKeys[e];
    if (i != null && n[i] != null && r.turnIndexByKey.has(i)) return i;
  }
  return null;
}
function xe(e, t) {
  return e === t || (e.length === t.length && e.every((e, n) => e === t[n]));
}
function J(e) {
  return Math.max(0, e?.() ?? 0);
}
function Y(e, t) {
  return Math.max(0, e - t);
}
function Se(e, t) {
  return e <= (t > 0 ? 0 : 24);
}
function Ce(e, t, n) {
  let r = {};
  for (let n of t) {
    let t = e[n];
    t != null && (r[n] = t);
  }
  let i = t[n.startIndex];
  return Object.keys(r).length === 0 || i == null
    ? null
    : {
        renderedWindow: { anchorKey: i, count: n.endIndex - n.startIndex },
        turnHeightsByKey: r,
      };
}
function we({ scrollElement: e, turnElement: t, windowZoom: n }) {
  return e == null || t == null
    ? 0
    : s(t.getBoundingClientRect().bottom - e.getBoundingClientRect().bottom, n);
}
function Te({ align: e, layout: t, turnKey: n, viewportHeightPx: r }) {
  if (e === `center`) return le({ layout: t, turnKey: n, viewportHeightPx: r });
  let i = t.turnIndexByKey.get(n);
  return i == null
    ? null
    : Math.max(0, (t.bottomOffsetsPx[i] ?? 0) + (t.heightsPx[i] ?? 0) - Me);
}
function Ee({
  align: e,
  layout: t,
  targetElement: n,
  turnElement: r,
  turnKey: i,
  windowZoom: a,
  viewportHeightPx: o,
}) {
  let c = t.turnIndexByKey.get(i);
  if (c == null) return null;
  let l = r.getBoundingClientRect(),
    u = n.getBoundingClientRect(),
    d = s(u.top - l.top, a),
    f = s(u.height, a),
    p = (t.bottomOffsetsPx[c] ?? 0) + (t.heightsPx[c] ?? 0) - d;
  return e === `top` ? Math.max(0, p - Me) : Math.max(0, p - f / 2 - o / 2);
}
var De,
  X,
  Oe,
  Z,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe = e(() => {
    ((De = u()),
      E(),
      (X = t(p(), 1)),
      (Oe = t(T(), 1)),
      b(),
      B(),
      V(),
      ie(),
      h(),
      H(),
      (Z = C()),
      (ke = 12),
      (Ae = 800),
      (je = 2),
      (Me = 10),
      (Ne = {}),
      (Pe = (0, X.memo)(ge)));
  });
function Ie(e) {
  let t = (e - 736) / 2;
  return t < 180 ? `overlay` : t < 400 ? `shift` : `gutter`;
}
function Le({ displayMode: e, isPinned: t, isPopoverOpen: n }) {
  return {
    displayMode: e,
    shouldHideInlineImmediately: e === `overlay` && n,
    shouldShow: t && e !== `overlay`,
  };
}
function Re({ displayMode: e, isPinned: t }) {
  return t && e === `shift` ? -(300 + ze) / 2 : 0;
}
var ze,
  Be = e(() => {
    (z(), (ze = 16));
  }),
  Ve,
  Q,
  He = e(() => {
    (x(),
      S(),
      (Ve = { displayMode: `overlay`, isPopoverOpen: !1 }),
      (Q = D(O, Ve)));
  });
function Ue(e) {
  let t = (0, Ye.c)(13),
    n = r(k),
    i = r(v),
    o = (0, $.useContext)(_),
    s = m(0),
    c = o?.mainContentTargetWidth ?? s,
    l;
  (t[0] === e
    ? (l = t[1])
    : ((l = (t) => {
        qe(e, t);
      }),
      (t[0] = e),
      (t[1] = l)),
    a(c, `change`, l));
  let u;
  t[2] !== c || t[3] !== e
    ? ((u = () => {
        qe(e, c.get());
      }),
      (t[2] = c),
      (t[3] = e),
      (t[4] = u))
    : (u = t[4]);
  let d;
  (t[5] !== n || t[6] !== i || t[7] !== c || t[8] !== e
    ? ((d = [n, i, c, e]),
      (t[5] = n),
      (t[6] = i),
      (t[7] = c),
      (t[8] = e),
      (t[9] = d))
    : (d = t[9]),
    (0, $.useLayoutEffect)(u, d));
  let f, p;
  (t[10] === e
    ? ((f = t[11]), (p = t[12]))
    : ((f = () => () => {
        e.set(Q, We);
      }),
      (p = [e]),
      (t[10] = e),
      (t[11] = f),
      (t[12] = p)),
    (0, $.useLayoutEffect)(f, p));
}
function We(e) {
  return e.isPopoverOpen ? { ...e, isPopoverOpen: !1 } : e;
}
function Ge(e) {
  let t = (0, Ye.c)(37),
    n = r(ee),
    i = r(k),
    o = r(v),
    s = r(Q),
    c = r(y),
    l = (0, $.useContext)(_),
    u = m(0),
    d = l?.mainContentTargetWidth ?? u,
    f;
  t[0] !== n || t[1] !== d
    ? ((f = Ke({ isPinned: n, mainContentTargetWidth: d.get() })),
      (t[0] = n),
      (t[1] = d),
      (t[2] = f))
    : (f = t[2]);
  let p = m(f),
    h = (0, $.useRef)(null),
    g;
  t[3] === p ? (g = t[4]) : ((g = p.get()), (t[3] = p), (t[4] = g));
  let b = (0, $.useRef)(g),
    x = (0, $.useRef)(e),
    S;
  t[5] !== n || t[6] !== s.displayMode || t[7] !== s.isPopoverOpen
    ? ((S = Le({
        displayMode: s.displayMode,
        isPinned: n,
        isPopoverOpen: s.isPopoverOpen,
      })),
      (t[5] = n),
      (t[6] = s.displayMode),
      (t[7] = s.isPopoverOpen),
      (t[8] = S))
    : (S = t[8]);
  let C = S,
    w,
    T;
  (t[9] !== p || t[10] !== n || t[11] !== d || t[12] !== e
    ? ((w = () => {
        if (x.current === e) return;
        x.current = e;
        let t = Ke({ isPinned: n, mainContentTargetWidth: d.get() });
        ((b.current = t), h.current?.stop(), p.set(t));
      }),
      (T = [p, n, d, e]),
      (t[9] = p),
      (t[10] = n),
      (t[11] = d),
      (t[12] = e),
      (t[13] = w),
      (t[14] = T))
    : ((w = t[13]), (T = t[14])),
    (0, $.useLayoutEffect)(w, T));
  let E;
  (t[15] !== p || t[16] !== n || t[17] !== c
    ? ((E = (e) => {
        let t = Ke({ isPinned: n, mainContentTargetWidth: e });
        b.current !== t &&
          ((b.current = t), h.current?.stop(), (h.current = Je(p, t, c)));
      }),
      (t[15] = p),
      (t[16] = n),
      (t[17] = c),
      (t[18] = E))
    : (E = t[18]),
    a(d, `change`, E));
  let D;
  t[19] !== p || t[20] !== n || t[21] !== d || t[22] !== c
    ? ((D = () => {
        let e = Ke({ isPinned: n, mainContentTargetWidth: d.get() });
        b.current !== e &&
          ((b.current = e), h.current?.stop(), (h.current = Je(p, e, c)));
      }),
      (t[19] = p),
      (t[20] = n),
      (t[21] = d),
      (t[22] = c),
      (t[23] = D))
    : (D = t[23]);
  let O;
  (t[24] !== p ||
  t[25] !== n ||
  t[26] !== i ||
  t[27] !== o ||
  t[28] !== d ||
  t[29] !== c
    ? ((O = [p, n, i, o, d, c]),
      (t[24] = p),
      (t[25] = n),
      (t[26] = i),
      (t[27] = o),
      (t[28] = d),
      (t[29] = c),
      (t[30] = O))
    : (O = t[30]),
    (0, $.useEffect)(D, O));
  let A, j;
  (t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => () => {
        h.current?.stop();
      }),
      (j = []),
      (t[31] = A),
      (t[32] = j))
    : ((A = t[31]), (j = t[32])),
    (0, $.useEffect)(A, j));
  let M;
  return (
    t[33] !== p ||
    t[34] !== C.shouldHideInlineImmediately ||
    t[35] !== C.shouldShow
      ? ((M = {
          contentShift: p,
          shouldHideInlineImmediately: C.shouldHideInlineImmediately,
          shouldShow: C.shouldShow,
        }),
        (t[33] = p),
        (t[34] = C.shouldHideInlineImmediately),
        (t[35] = C.shouldShow),
        (t[36] = M))
      : (M = t[36]),
    M
  );
}
function Ke({ isPinned: e, mainContentTargetWidth: t }) {
  return Re({ displayMode: Ie(t), isPinned: e });
}
function qe(e, t) {
  let n = Ie(t);
  e.set(Q, (e) => {
    let t = n === `overlay` && e.isPopoverOpen;
    return e.displayMode === n && e.isPopoverOpen === t
      ? e
      : { displayMode: n, isPopoverOpen: t };
  });
}
function Je(e, t, n) {
  return n ? (e.set(t), null) : w(e, t, c);
}
var Ye,
  $,
  Xe = e(() => {
    ((Ye = u()), i(), x(), ($ = t(p(), 1)), f(), n(), l(), Be(), He());
  });
export {
  Q as a,
  me as c,
  He as i,
  G as l,
  Ge as n,
  he as o,
  Ue as r,
  Fe as s,
  Xe as t,
};
//# sourceMappingURL=use-thread-summary-panel-OrzkfYb8.js.map
