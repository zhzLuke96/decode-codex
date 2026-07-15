import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  AY as r,
  Fq as i,
  I2 as a,
  J1 as o,
  JA as s,
  K1 as c,
  KJ as l,
  L2 as u,
  Mq as ee,
  Nq as d,
  Pq as f,
  cj as p,
  dj as m,
  g0 as h,
  k2 as g,
  mY as _,
  nQ as te,
  nt as v,
  o0 as y,
  qJ as b,
  tt as ne,
  u0 as x,
  yY as S,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  M as C,
  N as w,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
var T,
  E,
  D = e(() => {
    (t(u()),
      (T = g()),
      (E = (e) =>
        (0, T.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 19 19`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, T.jsx)(`path`, {
              d: `M9.5 2.9375V5.5625M9.5 13.4375V16.0625M2.9375 9.5H5.5625M13.4375 9.5H16.0625`,
              stroke: `currentColor`,
              strokeWidth: 1.875,
              strokeLinecap: `round`,
            }),
            (0, T.jsx)(`path`, {
              d: `M4.86011 4.85961L6.71627 6.71577M12.2847 12.2842L14.1409 14.1404M4.86011 14.1404L6.71627 12.2842M12.2847 6.71577L14.1409 4.85961`,
              stroke: `currentColor`,
              strokeWidth: 1.875,
              strokeLinecap: `round`,
            }),
          ],
        })));
  });
function O() {
  let e = (0, L.c)(30),
    t = S(),
    r = p(),
    i = w(),
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = t.formatMessage({
        id: `checkout.webview.backToChatGpt`,
        defaultMessage: `Back to ChatGPT`,
        description: `Button label in the embedded checkout toolbar that returns the user to ChatGPT in the Codex app`,
      })),
      (e[0] = t),
      (e[1] = a));
  let o = a,
    [s] = m(),
    [c, u] = (0, R.useState)(!0),
    [d, h] = (0, R.useState)(null),
    g;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        h(I(e) ? e : null);
      }),
      (e[2] = g))
    : (g = e[2]);
  let _ = g,
    v = B.safeParse(Object.fromEntries(s.entries())),
    y = v.success ? re(v.data.url) : null,
    b = v.success ? j(new URL(v.data.url)) : !1;
  if (
    ((0, R.useEffect)(() => {
      if (d == null) return;
      let e = !1,
        t = () => {
          e || u(!1);
        },
        n = () => {
          e || u(!0);
        },
        r = (e) => {
          let t = e;
          if (t.isMainFrame === !1) return !1;
          let r = F(t.url);
          return r == null || !M(r) ? !1 : (n(), !0);
        },
        i = () => {
          let e = P(d);
          if (!(e == null || e.protocol === `about:`) && !M(e)) {
            if (e.pathname === Y) {
              t();
              return;
            }
            if (b) {
              if (!N(d)) return;
              t();
              return;
            }
            if (A(e)) {
              if (d.isLoading()) return;
              t();
              return;
            }
            if (y != null) {
              if (e.pathname !== y || d.isLoading()) return;
              t();
              return;
            }
            !k(e) || d.isLoading() || t();
          }
        },
        a = () => {
          i();
        },
        o = (e) => {
          r(e);
        },
        s = (e) => {
          r(e) || i();
        },
        c = () => {
          i();
        },
        l = () => {
          i();
        };
      return (
        d.addEventListener(`dom-ready`, a),
        d.addEventListener(`did-start-navigation`, o),
        d.addEventListener(`did-navigate-in-page`, s),
        d.addEventListener(`did-finish-load`, c),
        d.addEventListener(`page-title-updated`, l),
        i(),
        () => {
          ((e = !0),
            d.removeEventListener(`dom-ready`, a),
            d.removeEventListener(`did-start-navigation`, o),
            d.removeEventListener(`did-navigate-in-page`, s),
            d.removeEventListener(`did-finish-load`, c),
            d.removeEventListener(`page-title-updated`, l));
        }
      );
    }, [y, b, d]),
    !v.success)
  ) {
    let t;
    return (
      e[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(n, { to: `/pricing-plan`, replace: !0 })),
          (e[3] = t))
        : (t = e[3]),
      t
    );
  }
  let x = new URL(v.data.url);
  if (!k(x)) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(n, { to: `/pricing-plan`, replace: !0 })),
          (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let C = new URL(`about:blank`);
  (C.searchParams.set(`toUrl`, `${x.pathname}${x.search}${x.hash}`),
    v.data.accountId != null &&
      C.searchParams.set(`accountId`, v.data.accountId),
    v.data.currentPlan != null &&
      C.searchParams.set(`currentPlan`, v.data.currentPlan));
  let T = Math.max(i.left, 8),
    D;
  e[5] === T
    ? (D = e[6])
    : ((D = { paddingInlineStart: T }), (e[5] = T), (e[6] = D));
  let O;
  e[7] === r
    ? (O = e[8])
    : ((O = () => {
        r(`/`, { replace: !0 });
      }),
      (e[7] = r),
      (e[8] = O));
  let V;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, z.jsx)(ne, { className: `icon-xs` })), (e[9] = V))
    : (V = e[9]);
  let H;
  e[10] !== o || e[11] !== O
    ? ((H = (0, z.jsxs)(ee, {
        "aria-label": o,
        className: `ms-3`,
        color: `ghost`,
        size: `toolbar`,
        onClick: O,
        children: [V, o],
      })),
      (e[10] = o),
      (e[11] = O),
      (e[12] = H))
    : (H = e[12]);
  let U;
  e[13] !== D || e[14] !== H
    ? ((U = (0, z.jsx)(`header`, {
        className: `draggable flex h-toolbar w-full shrink-0 items-center border-b border-token-border pe-2`,
        style: D,
        children: H,
      })),
      (e[13] = D),
      (e[14] = H),
      (e[15] = U))
    : (U = e[15]);
  let W;
  e[16] === c
    ? (W = e[17])
    : ((W = c
        ? (0, z.jsx)(`div`, {
            className: `absolute inset-0 z-10 flex items-center justify-center bg-token-main-surface-primary`,
            children: (0, z.jsx)(f, { Icon: E }),
          })
        : null),
      (e[16] = c),
      (e[17] = W));
  let G = c && `invisible`,
    K;
  e[18] === G
    ? (K = e[19])
    : ((K = l(`block h-full w-full bg-token-main-surface-primary`, G)),
      (e[18] = G),
      (e[19] = K));
  let q = te,
    J = C.toString(),
    X;
  e[20] !== K || e[21] !== q || e[22] !== J
    ? ((X = (0, z.jsx)(`webview`, {
        className: K,
        partition: q,
        ref: _,
        src: J,
      })),
      (e[20] = K),
      (e[21] = q),
      (e[22] = J),
      (e[23] = X))
    : (X = e[23]);
  let Z;
  e[24] !== W || e[25] !== X
    ? ((Z = (0, z.jsxs)(`div`, {
        className: `relative min-h-0 min-w-0 flex-1 overflow-hidden`,
        children: [W, X],
      })),
      (e[24] = W),
      (e[25] = X),
      (e[26] = Z))
    : (Z = e[26]);
  let Q;
  return (
    e[27] !== Z || e[28] !== U
      ? ((Q = (0, z.jsxs)(`main`, {
          className: `no-drag flex h-full min-h-0 flex-col overflow-hidden bg-token-main-surface-primary`,
          children: [U, Z],
        })),
        (e[27] = Z),
        (e[28] = U),
        (e[29] = Q))
      : (Q = e[29]),
    Q
  );
}
function k(e) {
  return (
    e.origin === V &&
    (e.pathname.startsWith(H) || e.pathname.startsWith(G) || j(e))
  );
}
function A(e) {
  return e.origin === U && e.pathname.startsWith(W);
}
function j(e) {
  return e.pathname === X || (e.pathname === Z && e.hash === Q);
}
function M(e) {
  return (
    e.origin === V && (e.pathname === K || e.pathname === q || e.pathname === J)
  );
}
function re(e) {
  try {
    let t = new URL(e).pathname;
    return t.startsWith(G) ? t : null;
  } catch {
    return null;
  }
}
function N(e) {
  try {
    let t = P(e);
    return t == null || !j(t) ? !1 : t.pathname === X ? !0 : e.getTitle() === $;
  } catch {
    return !1;
  }
}
function P(e) {
  try {
    return new URL(e.getURL());
  } catch {
    return null;
  }
}
function F(e) {
  if (e == null) return null;
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function I(e) {
  return (
    e != null &&
    `getTitle` in e &&
    typeof e.getTitle == `function` &&
    `getURL` in e &&
    typeof e.getURL == `function` &&
    `isLoading` in e &&
    typeof e.isLoading == `function`
  );
}
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  ((L = a()),
    b(),
    r(),
    (R = t(u(), 1)),
    _(),
    s(),
    c(),
    C(),
    d(),
    i(),
    v(),
    D(),
    (z = g()),
    (B = y({
      accountId: x().min(1).optional(),
      currentPlan: o([`free`, `go`, `plus`, `prolite`, `pro`]).optional(),
      url: x().url(),
    })),
    (V = new URL(h).origin),
    (H = `${new URL(h).pathname}/purchase/`),
    (U = `https://pay.openai.com`),
    (W = `/c/pay/`),
    (G = `/checkout/`),
    (K = `/payments/success`),
    (q = `/payments/success-ind`),
    (J = `/payments/success-credit-purchase`),
    (Y = `/payments/success-team`),
    (X = `/pricing/`),
    (Z = `/`),
    (Q = `#pricing`),
    ($ = `ChatGPT Plans`));
})();
export { O as CheckoutWebviewPage };
//# sourceMappingURL=checkout-webview-page-BrX-vBjP.js.map
