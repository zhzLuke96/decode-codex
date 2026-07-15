import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as n,
  BA as r,
  C0 as i,
  Cw as a,
  DK as o,
  Fq as s,
  I2 as c,
  IK as l,
  KJ as u,
  L2 as d,
  LK as f,
  Mq as ee,
  Nq as p,
  Pq as m,
  QJ as h,
  S0 as te,
  Sw as g,
  WA as _,
  _0 as v,
  _Y as y,
  c2 as b,
  eY as x,
  k2 as S,
  kK as C,
  mY as w,
  nK as T,
  qJ as E,
  s2 as D,
  sK as O,
  w0 as k,
  x0 as A,
  yY as j,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ar as M,
  Ds as N,
  Er as ne,
  Os as P,
  Tc as re,
  _a as F,
  br as I,
  cr as L,
  gr as R,
  lr as z,
  mr as B,
  pr as V,
  va as ie,
  wc as ae,
  yr as oe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Go as se,
  Wo as ce,
  ac as H,
  ic as U,
  mc as W,
  oc as G,
  pc as le,
  rc as K,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  d as q,
  f as J,
  o as ue,
  r as de,
  s as fe,
  w as pe,
} from "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~b8am3atz-CACjZP_E.js";
import {
  ct as me,
  st as he,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  f as ge,
  l as _e,
  m as ve,
  n as ye,
  p as be,
  t as xe,
  u as Se,
} from "./pull-request-actions-DKYSsgc4.js";
function Ce({
  containerWidth: e,
  maxWidth: t,
  minWidth: n,
  visibleInset: r = 0,
}) {
  let i = Math.min(n, e),
    a = Math.min(t ?? e, Math.max(0, e - r)),
    o = Math.min(e * we, a);
  return Math.min(e, Math.max(i, o));
}
var we,
  Te = e(() => {
    we = 0.9;
  });
function Ee(e) {
  let t = (0, Ue.c)(173),
    {
      id: n,
      left: r,
      right: i,
      className: a,
      leftClassName: o,
      rightClassName: s,
      handleClassName: c,
      defaultLeftPercent: l,
      minLeftWidth: d,
      minRightWidth: f,
      handleWidth: ee,
      drawerBreakpoint: p,
      drawerMaxWidth: m,
      drawerVisibleInset: te,
      isLeftOpen: g,
      isRightOpen: _,
      onLeftOpenChange: v,
      onRightOpenChange: y,
    } = e,
    b = d === void 0 ? Ke : d,
    x = f === void 0 ? Ke : f,
    S = ee === void 0 ? Ge : ee,
    C = p === void 0 ? Je : p,
    w = te === void 0 ? 0 : te,
    T = g === void 0 ? !0 : g,
    E = _ === void 0 ? !0 : _,
    D = De(),
    O = i != null,
    k = O ? E : !1,
    A = O ? T : !0,
    j = h(),
    M = `${n}:split-left-width`,
    N = j.getItem(M, NaN),
    ne = Number.isFinite(N) && N <= 1,
    P;
  t[0] === l ? (P = t[1]) : ((P = Pe(l)), (t[0] = l), (t[1] = P));
  let re = ne ? Ne(N) : P,
    [F, I] = (0, Y.useState)(0),
    [L, R] = (0, Y.useState)(!1),
    z = (0, Y.useRef)(null),
    B = (0, Y.useRef)(null),
    V = (0, Y.useRef)(null),
    ie = (0, Y.useRef)(null),
    ae = (0, Y.useRef)(!1),
    oe = (0, Y.useRef)(null),
    se = (0, Y.useRef)(null),
    ce = (0, Y.useRef)(null),
    H = (0, Y.useRef)(null),
    U = (0, Y.useRef)(null),
    W = (0, Y.useRef)(re),
    G = (0, Y.useRef)(0),
    le = (0, Y.useRef)(ne ? Ne(N) : null),
    K = O && !A && k,
    q = C > 0 && O && F > 0 && F <= C && !K,
    J = q ? 0 : S,
    ue;
  t[2] === I
    ? (ue = t[3])
    : ((ue = () => {
        let e = z.current;
        if (!e) return;
        let t = e.getBoundingClientRect().width;
        I(t);
      }),
      (t[2] = I),
      (t[3] = ue));
  let de;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = []), (t[4] = de))
    : (de = t[4]),
    (0, Y.useLayoutEffect)(ue, de));
  let fe;
  t[5] === I
    ? (fe = t[6])
    : ((fe = () => {
        let e = z.current;
        if (!e || typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver((e) => {
          I(e[0]?.contentRect.width ?? 0);
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[5] = I),
      (t[6] = fe));
  let pe;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = []), (t[7] = pe))
    : (pe = t[7]),
    (0, Y.useEffect)(fe, pe));
  let me, he;
  (t[8] !== F || t[9] !== O || t[10] !== T || t[11] !== E || t[12] !== v
    ? ((me = () => {
        !F || !O || (!T && !E && v?.(!0));
      }),
      (he = [F, O, T, E, v]),
      (t[8] = F),
      (t[9] = O),
      (t[10] = T),
      (t[11] = E),
      (t[12] = v),
      (t[13] = me),
      (t[14] = he))
    : ((me = t[13]), (he = t[14])),
    (0, Y.useEffect)(me, he));
  let ge;
  t[15] !== F ||
  t[16] !== C ||
  t[17] !== m ||
  t[18] !== w ||
  t[19] !== J ||
  t[20] !== A ||
  t[21] !== k ||
  t[22] !== K ||
  t[23] !== O ||
  t[24] !== T ||
  t[25] !== E ||
  t[26] !== W ||
  t[27] !== b ||
  t[28] !== x ||
  t[29] !== j ||
  t[30] !== M
    ? ((ge = () => {
        let e = z.current;
        if (!e) return;
        let t = F || e.getBoundingClientRect().width;
        if (!t) return;
        let n = oe.current,
          r = se.current,
          i = (n != null && Math.abs(n - t) >= 1) || (r != null && r !== A);
        ae.current
          ? i && Oe([ce, H, U], V)
          : (Oe([ce, H, U], V), (ae.current = !0));
        let a = () => {
          ((oe.current = t), (se.current = A));
        };
        if (C > 0 && O && t <= C && !K) {
          (Be({
            containerWidth: t,
            drawerMaxWidth: m,
            drawerVisibleInset: w,
            minRightWidth: x,
            isOpen: k,
            node: e,
            rafRef: B,
          }),
            a());
          return;
        }
        let o = je(t);
        if (!O) {
          (He({
            containerWidth: t,
            handleWidth: 0,
            nextLeftWidth: t,
            rightWidth: 0,
            rightTranslate: 0,
            node: e,
            rafRef: B,
            opts: { immediate: !0 },
          }),
            a());
          return;
        }
        if (!k) {
          let { rightWidth: n, boundedLeftRatio: r } = ze({
            containerWidth: t,
            minLeftWidth: b,
            minRightWidth: x,
            leftWidth: o * Ne(W.current),
          });
          W.current = r;
          let i = Re(G.current > 0 ? G.current : n, o);
          ((G.current = i),
            He({
              containerWidth: t,
              handleWidth: 0,
              nextLeftWidth: t,
              rightWidth: i,
              rightTranslate: i,
              node: e,
              rafRef: B,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        if (!T) {
          let n = o;
          ((G.current = n),
            He({
              containerWidth: t,
              handleWidth: J,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: B,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        let {
          boundedLeftWidth: s,
          rightWidth: c,
          boundedLeftRatio: l,
        } = ze({
          containerWidth: t,
          minLeftWidth: b,
          minRightWidth: x,
          leftWidth: o * Ne(W.current),
        });
        ((G.current = c),
          (W.current = l),
          T && E && Ve(j, M, le, l),
          He({
            containerWidth: t,
            handleWidth: J,
            nextLeftWidth: s,
            rightWidth: c,
            rightTranslate: 0,
            node: e,
            rafRef: B,
            opts: { immediate: !0 },
          }),
          a());
        let u = B.current;
        return () => {
          (u != null &&
            (cancelAnimationFrame(u), B.current === u && (B.current = null)),
            V.current != null &&
              (cancelAnimationFrame(V.current), (V.current = null)));
        };
      }),
      (t[15] = F),
      (t[16] = C),
      (t[17] = m),
      (t[18] = w),
      (t[19] = J),
      (t[20] = A),
      (t[21] = k),
      (t[22] = K),
      (t[23] = O),
      (t[24] = T),
      (t[25] = E),
      (t[26] = W),
      (t[27] = b),
      (t[28] = x),
      (t[29] = j),
      (t[30] = M),
      (t[31] = ge))
    : (ge = t[31]);
  let _e;
  (t[32] !== F ||
  t[33] !== C ||
  t[34] !== m ||
  t[35] !== w ||
  t[36] !== J ||
  t[37] !== A ||
  t[38] !== k ||
  t[39] !== K ||
  t[40] !== O ||
  t[41] !== D ||
  t[42] !== q ||
  t[43] !== T ||
  t[44] !== L ||
  t[45] !== E ||
  t[46] !== b ||
  t[47] !== x ||
  t[48] !== j ||
  t[49] !== M
    ? ((_e = [F, A, k, J, C, m, w, K, O, q, T, E, L, b, x, D, j, M]),
      (t[32] = F),
      (t[33] = C),
      (t[34] = m),
      (t[35] = w),
      (t[36] = J),
      (t[37] = A),
      (t[38] = k),
      (t[39] = K),
      (t[40] = O),
      (t[41] = D),
      (t[42] = q),
      (t[43] = T),
      (t[44] = L),
      (t[45] = E),
      (t[46] = b),
      (t[47] = x),
      (t[48] = j),
      (t[49] = M),
      (t[50] = _e))
    : (_e = t[50]),
    (0, Y.useLayoutEffect)(ge, _e));
  let ve;
  t[51] !== F ||
  t[52] !== q ||
  t[53] !== T ||
  t[54] !== E ||
  t[55] !== v ||
  t[56] !== y ||
  t[57] !== R
    ? ((ve = (e) => {
        if (e.button !== 0) return;
        let t = z.current,
          n = Me(F, t);
        q ||
          !t ||
          !n ||
          (e.preventDefault(),
          e.currentTarget.setPointerCapture(e.pointerId),
          (ie.current = t.getBoundingClientRect().left),
          T || v?.(!0),
          E || y?.(!0),
          R(!0));
      }),
      (t[51] = F),
      (t[52] = q),
      (t[53] = T),
      (t[54] = E),
      (t[55] = v),
      (t[56] = y),
      (t[57] = R),
      (t[58] = ve))
    : (ve = t[58]);
  let ye = ve,
    be;
  t[59] !== F ||
  t[60] !== J ||
  t[61] !== T ||
  t[62] !== L ||
  t[63] !== E ||
  t[64] !== W ||
  t[65] !== b ||
  t[66] !== x ||
  t[67] !== R ||
  t[68] !== j ||
  t[69] !== M
    ? ((be = () => {
        if (!L) return;
        let e = (e) => {
            e.preventDefault();
            let t = z.current,
              n = Me(F, t);
            if (!t || !n) return;
            let {
              boundedLeftWidth: r,
              rightWidth: i,
              boundedLeftRatio: a,
            } = ze({
              containerWidth: n,
              minLeftWidth: b,
              minRightWidth: x,
              leftWidth: Ae(e, t, ie),
            });
            ((G.current = i),
              (W.current = a),
              He({
                containerWidth: n,
                handleWidth: J,
                nextLeftWidth: r,
                rightWidth: i,
                rightTranslate: 0,
                node: t,
                rafRef: B,
              }));
          },
          t = (e) => {
            e.preventDefault();
            let t = z.current,
              n = Me(F, t);
            if (!t || !n) {
              R(!1);
              return;
            }
            let {
              boundedLeftWidth: r,
              rightWidth: i,
              boundedLeftRatio: a,
            } = ze({
              containerWidth: n,
              minLeftWidth: b,
              minRightWidth: x,
              leftWidth: Ae(e, t, ie),
            });
            ((G.current = i),
              (W.current = a),
              He({
                containerWidth: n,
                handleWidth: J,
                nextLeftWidth: r,
                rightWidth: i,
                rightTranslate: 0,
                node: t,
                rafRef: B,
                opts: { immediate: !0 },
              }),
              T && E && Ve(j, M, le, a),
              (ie.current = null),
              R(!1));
          },
          n = () => {
            ((ie.current = null), R(!1));
          };
        return (
          window.addEventListener(`pointermove`, e),
          window.addEventListener(`pointerup`, t),
          window.addEventListener(`pointercancel`, t),
          window.addEventListener(`blur`, n),
          () => {
            (window.removeEventListener(`pointermove`, e),
              window.removeEventListener(`pointerup`, t),
              window.removeEventListener(`pointercancel`, t),
              window.removeEventListener(`blur`, n),
              (ie.current = null));
          }
        );
      }),
      (t[59] = F),
      (t[60] = J),
      (t[61] = T),
      (t[62] = L),
      (t[63] = E),
      (t[64] = W),
      (t[65] = b),
      (t[66] = x),
      (t[67] = R),
      (t[68] = j),
      (t[69] = M),
      (t[70] = be))
    : (be = t[70]);
  let xe;
  (t[71] !== F ||
  t[72] !== J ||
  t[73] !== T ||
  t[74] !== L ||
  t[75] !== E ||
  t[76] !== b ||
  t[77] !== x ||
  t[78] !== j ||
  t[79] !== M
    ? ((xe = [F, J, T, L, E, b, x, j, M]),
      (t[71] = F),
      (t[72] = J),
      (t[73] = T),
      (t[74] = L),
      (t[75] = E),
      (t[76] = b),
      (t[77] = x),
      (t[78] = j),
      (t[79] = M),
      (t[80] = xe))
    : (xe = t[80]),
    (0, Y.useEffect)(be, xe));
  let Se;
  t[81] !== F ||
  t[82] !== m ||
  t[83] !== w ||
  t[84] !== J ||
  t[85] !== O ||
  t[86] !== q ||
  t[87] !== T ||
  t[88] !== E ||
  t[89] !== W ||
  t[90] !== b ||
  t[91] !== x ||
  t[92] !== v ||
  t[93] !== y
    ? ((Se = (e) => {
        if (e === `left`) {
          if (!T) return;
          (ke([ce, H, U], V), v?.(!1));
          let e = z.current,
            t = Me(F, e);
          if (!e || !t) return;
          let n = je(t);
          ((G.current = n),
            He({
              containerWidth: t,
              handleWidth: J,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: B,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (!E || !O) return;
        (ke([ce, H, U], V), y?.(!1));
        let t = z.current,
          n = Me(F, t);
        if (!t || !n) return;
        if (q) {
          Be({
            containerWidth: n,
            drawerMaxWidth: m,
            drawerVisibleInset: w,
            minRightWidth: x,
            isOpen: !1,
            node: t,
            rafRef: B,
          });
          return;
        }
        let r = je(n),
          { rightWidth: i, boundedLeftRatio: a } = ze({
            containerWidth: n,
            minLeftWidth: b,
            minRightWidth: x,
            leftWidth: r * Ne(W.current),
          });
        W.current = a;
        let o = Re(G.current > 0 ? G.current : i, r);
        ((G.current = o),
          He({
            containerWidth: n,
            handleWidth: 0,
            nextLeftWidth: n,
            rightWidth: o,
            rightTranslate: o,
            node: t,
            rafRef: B,
            opts: { immediate: !0 },
          }));
      }),
      (t[81] = F),
      (t[82] = m),
      (t[83] = w),
      (t[84] = J),
      (t[85] = O),
      (t[86] = q),
      (t[87] = T),
      (t[88] = E),
      (t[89] = W),
      (t[90] = b),
      (t[91] = x),
      (t[92] = v),
      (t[93] = y),
      (t[94] = Se))
    : (Se = t[94]);
  let Ce = Se,
    we;
  t[95] !== F ||
  t[96] !== m ||
  t[97] !== w ||
  t[98] !== J ||
  t[99] !== O ||
  t[100] !== q ||
  t[101] !== T ||
  t[102] !== E ||
  t[103] !== W ||
  t[104] !== b ||
  t[105] !== x ||
  t[106] !== v ||
  t[107] !== y ||
  t[108] !== j ||
  t[109] !== M
    ? ((we = (e) => {
        let t = z.current,
          n = Me(F, t);
        if (!t || !n) return;
        if (e === `left`) {
          if (T) return;
          (ke([ce, H, U], V), v?.(!0));
          let {
            boundedLeftWidth: e,
            rightWidth: r,
            boundedLeftRatio: i,
          } = ze({
            containerWidth: n,
            minLeftWidth: b,
            minRightWidth: x,
            leftWidth: je(n) * Ne(W.current),
          });
          ((W.current = i),
            E && Ve(j, M, le, i),
            (G.current = r),
            He({
              containerWidth: n,
              handleWidth: J,
              nextLeftWidth: e,
              rightWidth: r,
              rightTranslate: 0,
              node: t,
              rafRef: B,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (E || !O) return;
        if ((ke([ce, H, U], V), y?.(!0), q)) {
          Be({
            containerWidth: n,
            drawerMaxWidth: m,
            drawerVisibleInset: w,
            minRightWidth: x,
            isOpen: !0,
            node: t,
            rafRef: B,
          });
          return;
        }
        let {
          boundedLeftWidth: r,
          rightWidth: i,
          boundedLeftRatio: a,
        } = ze({
          containerWidth: n,
          minLeftWidth: b,
          minRightWidth: x,
          leftWidth: je(n) * Ne(W.current),
        });
        ((W.current = a),
          T && Ve(j, M, le, a),
          (G.current = i),
          He({
            containerWidth: n,
            handleWidth: J,
            nextLeftWidth: r,
            rightWidth: i,
            rightTranslate: 0,
            node: t,
            rafRef: B,
            opts: { immediate: !0 },
          }));
      }),
      (t[95] = F),
      (t[96] = m),
      (t[97] = w),
      (t[98] = J),
      (t[99] = O),
      (t[100] = q),
      (t[101] = T),
      (t[102] = E),
      (t[103] = W),
      (t[104] = b),
      (t[105] = x),
      (t[106] = v),
      (t[107] = y),
      (t[108] = j),
      (t[109] = M),
      (t[110] = we))
    : (we = t[110]);
  let Te = we,
    Ee;
  t[111] !== Ce || t[112] !== Te || t[113] !== T || t[114] !== E
    ? ((Ee = (e) => {
        if (e === `left`) {
          if (T) {
            Ce(`left`);
            return;
          }
          Te(`left`);
          return;
        }
        if (E) {
          Ce(`right`);
          return;
        }
        Te(`right`);
      }),
      (t[111] = Ce),
      (t[112] = Te),
      (t[113] = T),
      (t[114] = E),
      (t[115] = Ee))
    : (Ee = t[115]);
  let Fe = Ee,
    Ie;
  t[116] !== Ce ||
  t[117] !== A ||
  t[118] !== k ||
  t[119] !== Te ||
  t[120] !== L ||
  t[121] !== Fe
    ? ((Ie = {
        isLeftOpen: A,
        isRightOpen: k,
        isResizing: L,
        collapse: Ce,
        expand: Te,
        toggle: Fe,
      }),
      (t[116] = Ce),
      (t[117] = A),
      (t[118] = k),
      (t[119] = Te),
      (t[120] = L),
      (t[121] = Fe),
      (t[122] = Ie))
    : (Ie = t[122]);
  let Le = Ie,
    qe = O && !q && A && k,
    Xe = `min(calc(100% - ${S}px), max(0px, ${A && k ? `calc(var(--split-left-width, 100%) - (${S}px / 2))` : `calc(100% - (${S}px / 2))`}))`,
    Qe = L && `cursor-col-resize`,
    $e;
  t[123] !== a || t[124] !== Qe
    ? (($e = u(
        `group/split-view relative h-full w-full min-w-0 overflow-hidden`,
        Qe,
        a,
      )),
      (t[123] = a),
      (t[124] = Qe),
      (t[125] = $e))
    : ($e = t[125]);
  let et = !A && `pointer-events-none`,
    tt;
  t[126] !== o || t[127] !== et
    ? ((tt = u(
        `absolute inset-y-0 left-0 min-w-0 overflow-hidden [will-change:width]`,
        et,
        `duration-relaxed ease-basic`,
        o,
      )),
      (t[126] = o),
      (t[127] = et),
      (t[128] = tt))
    : (tt = t[128]);
  let nt = L ? `none` : `width`,
    rt;
  t[129] === nt
    ? (rt = t[130])
    : ((rt = {
        width: `var(--split-left-width, 100%)`,
        contain: `strict`,
        transitionProperty: nt,
      }),
      (t[129] = nt),
      (t[130] = rt));
  let it = A ? `visible` : `hidden`,
    at = `${n}-left`,
    ot;
  t[131] !== r || t[132] !== it || t[133] !== at
    ? ((ot = (0, We.jsx)(`div`, {
        className: `h-full min-w-0`,
        children: (0, We.jsx)(Y.Activity, { mode: it, name: at, children: r }),
      })),
      (t[131] = r),
      (t[132] = it),
      (t[133] = at),
      (t[134] = ot))
    : (ot = t[134]);
  let st;
  t[135] !== tt || t[136] !== rt || t[137] !== ot
    ? ((st = (0, We.jsx)(`div`, {
        ref: ce,
        className: tt,
        style: rt,
        children: ot,
      })),
      (t[135] = tt),
      (t[136] = rt),
      (t[137] = ot),
      (t[138] = st))
    : (st = t[138]);
  let ct;
  t[139] !== A ||
  t[140] !== c ||
  t[141] !== Xe ||
  t[142] !== ye ||
  t[143] !== S ||
  t[144] !== O ||
  t[145] !== q ||
  t[146] !== qe ||
  t[147] !== L
    ? ((ct =
        O && !q && A
          ? (0, We.jsx)(`div`, {
              ref: H,
              role: `separator`,
              "aria-orientation": `vertical`,
              className: u(
                `group absolute inset-y-0 z-20 select-none touch-none`,
                `cursor-col-resize duration-relaxed ease-basic [will-change:left]`,
                qe ? `opacity-100` : `opacity-0 pointer-events-none`,
                c,
              ),
              style: {
                width: `${S}px`,
                left: Xe,
                transitionProperty: L ? `none` : `left, opacity`,
              },
              onPointerDown: ye,
              children: (0, We.jsx)(`div`, {
                className: u(
                  `pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-token-border transition-colors duration-relaxed ease-basic`,
                  L
                    ? `bg-token-foreground/25`
                    : `group-hover:bg-token-foreground/25 group-active:bg-token-foreground/25`,
                ),
              }),
            })
          : null),
      (t[139] = A),
      (t[140] = c),
      (t[141] = Xe),
      (t[142] = ye),
      (t[143] = S),
      (t[144] = O),
      (t[145] = q),
      (t[146] = qe),
      (t[147] = L),
      (t[148] = ct))
    : (ct = t[148]);
  let X = q
      ? `main-surface z-30 shadow-[-16px_0_32px_rgba(0,0,0,0.28)]`
      : `z-10`,
    lt = k ? `opacity-100` : `opacity-0`,
    ut = !k && `pointer-events-none`,
    dt;
  t[149] !== s || t[150] !== X || t[151] !== lt || t[152] !== ut
    ? ((dt = u(
        `absolute inset-y-0 min-w-0 overflow-hidden [will-change:transform]`,
        X,
        lt,
        ut,
        `duration-relaxed ease-basic`,
        s,
      )),
      (t[149] = s),
      (t[150] = X),
      (t[151] = lt),
      (t[152] = ut),
      (t[153] = dt))
    : (dt = t[153]);
  let ft = L ? `none` : `width, transform, opacity`,
    Z;
  t[154] === ft
    ? (Z = t[155])
    : ((Z = {
        width: `var(--split-right-width, 0px)`,
        minWidth: 0,
        maxWidth: `var(--split-right-width, 0px)`,
        right: 0,
        transform: `translateX(var(--split-right-translate, 0px))`,
        contain: `strict`,
        transitionProperty: ft,
      }),
      (t[154] = ft),
      (t[155] = Z));
  let Q;
  t[156] !== k || t[157] !== O || t[158] !== n || t[159] !== i
    ? ((Q = O
        ? (0, We.jsx)(`div`, {
            className: `h-full min-w-0`,
            children: (0, We.jsx)(Y.Activity, {
              mode: k ? `visible` : `hidden`,
              name: `${n}-right`,
              children: (0, We.jsx)(`div`, {
                className: u(
                  `h-full w-full min-w-0 transition-opacity duration-relaxed ease-basic`,
                  k ? `opacity-100` : `opacity-0`,
                ),
                style: { transitionDelay: k ? `${Ye}ms` : `0ms` },
                children: i,
              }),
            }),
          })
        : null),
      (t[156] = k),
      (t[157] = O),
      (t[158] = n),
      (t[159] = i),
      (t[160] = Q))
    : (Q = t[160]);
  let pt;
  t[161] !== dt || t[162] !== Z || t[163] !== Q
    ? ((pt = (0, We.jsx)(`div`, {
        ref: U,
        className: dt,
        style: Z,
        children: Q,
      })),
      (t[161] = dt),
      (t[162] = Z),
      (t[163] = Q),
      (t[164] = pt))
    : (pt = t[164]);
  let mt;
  t[165] !== $e || t[166] !== st || t[167] !== ct || t[168] !== pt
    ? ((mt = (0, We.jsxs)(`div`, {
        ref: z,
        className: $e,
        children: [st, ct, pt],
      })),
      (t[165] = $e),
      (t[166] = st),
      (t[167] = ct),
      (t[168] = pt),
      (t[169] = mt))
    : (mt = t[169]);
  let ht;
  return (
    t[170] !== Le || t[171] !== mt
      ? ((ht = (0, We.jsx)(Ze.Provider, { value: Le, children: mt })),
        (t[170] = Le),
        (t[171] = mt),
        (t[172] = ht))
      : (ht = t[172]),
    ht
  );
}
function De() {
  let e = (0, Ue.c)(2),
    [t, n] = (0, Y.useState)(Xe.version),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {}), (i = []), (e[0] = r), (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, Y.useEffect)(r, i),
    t
  );
}
function Oe(e, t) {
  for (let t of e) t.current?.style.setProperty(`transition`, `none`);
  (t.current != null && cancelAnimationFrame(t.current),
    (t.current = requestAnimationFrame(() => {
      t.current = requestAnimationFrame(() => {
        for (let t of e) t.current?.style.removeProperty(`transition`);
        t.current = null;
      });
    })));
}
function ke(e, t) {
  t.current != null && (cancelAnimationFrame(t.current), (t.current = null));
  for (let t of e) t.current?.style.removeProperty(`transition`);
}
function Ae(e, t, n) {
  let r = n.current;
  return (
    r ?? ((r = t.getBoundingClientRect().left), (n.current = r)),
    e.clientX - r
  );
}
function je(e) {
  return Math.max(0, e);
}
function Me(e, t) {
  return e || (t?.getBoundingClientRect().width ?? 0);
}
function Ne(e) {
  return Math.min(Math.max(e, 0), 1);
}
function Pe(e) {
  return e == null ? qe : Ne(e / 100);
}
function Fe(e, t) {
  return e === 0 ? 0 : Ne(t / e);
}
function Ie(e, t, n) {
  let r = je(e),
    i = r - n;
  return i <= t ? Math.max(0, r) : Math.max(t, i);
}
function Le(e, t, n, r) {
  let i = je(t);
  if (i === 0) return 0;
  let a = Math.min(n, i),
    o = Ie(t, n, r);
  return o <= a ? Math.max(0, i) : Math.min(Math.max(e, a), o);
}
function Re(e, t) {
  return Math.min(Math.max(e, 0), t);
}
function ze({
  containerWidth: e,
  minLeftWidth: t,
  minRightWidth: n,
  leftWidth: r,
}) {
  let i = je(e),
    a = Le(r, e, t, n),
    o = Re(Math.max(0, i - a), i);
  return {
    openAvailableWidth: i,
    boundedLeftWidth: a,
    boundedLeftRatio: Fe(i, a),
    rightWidth: o,
  };
}
function Be({
  containerWidth: e,
  drawerMaxWidth: t,
  drawerVisibleInset: n,
  minRightWidth: r,
  isOpen: i,
  node: a,
  rafRef: o,
}) {
  let s = Ce({ containerWidth: e, maxWidth: t, minWidth: r, visibleInset: n });
  He({
    containerWidth: e,
    handleWidth: 0,
    nextLeftWidth: e,
    rightWidth: s,
    rightTranslate: i ? 0 : s,
    node: a,
    rafRef: o,
    opts: { immediate: !0 },
  });
}
function Ve(e, t, n, r) {
  n.current !== r && (e.setItem(t, r), (n.current = r));
}
function He({
  containerWidth: e,
  handleWidth: t,
  nextLeftWidth: n,
  rightWidth: r,
  rightTranslate: i,
  node: a,
  rafRef: o,
  opts: s,
}) {
  let c = je(e),
    l = Math.min(Math.max(n, 0), c),
    u = Math.max(0, c - l),
    d = Re(r ?? u, c),
    f = Re(i ?? 0, d),
    ee = () => {
      (a.style.setProperty(`--split-left-width`, `${l}px`),
        a.style.setProperty(`--split-handle-width`, `${t}px`),
        a.style.setProperty(`--split-right-width`, `${d}px`),
        a.style.setProperty(`--split-right-translate`, `${f}px`));
    };
  if (
    (o.current != null && (cancelAnimationFrame(o.current), (o.current = null)),
    s?.immediate)
  ) {
    ee();
    return;
  }
  o.current = requestAnimationFrame(ee);
}
var Ue,
  Y,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe = e(() => {
    ((Ue = c()),
      E(),
      (Y = t(d(), 1)),
      x(),
      Te(),
      (We = S()),
      (Ge = 12),
      (Ke = 160),
      (qe = 0.5),
      (Je = 720),
      (Ye = 150),
      (Xe = { version: 0, listeners: new Set() }),
      (Ze = (0, Y.createContext)(null)));
  });
function $e(e, t, n) {
  let r = at(e, t, n);
  r != null && e.set(lt, r);
}
function et(e, t) {
  e.set(ut, t);
}
function tt(e, t) {
  e.set(dt, t);
}
function nt(e, t) {
  e.set(ft, t);
}
function rt(e, t, n, r) {
  let i = at(e, t, n);
  if (i == null) return;
  let a = B({
    currentComments: e.get(Z, { path: i, request: t }),
    nextComments: r,
  });
  (e.set(Z, { path: i, request: t }, r), ot(e, t, i, r));
  let o = e.get(pt, t);
  if (o.data?.status === `success`)
    for (let n of a) {
      let r = V(o.data.headRevision, n),
        a = e.get(Q, { path: i, request: t });
      a.some((e) => (0, X.default)(e, r)) ||
        (e.set(Q, { path: i, request: t }, [...a, r]), st(e, t, i, r, n));
    }
}
function it(e, t, n, r) {
  let i = at(e, t, n);
  if (i == null) return;
  let a = e
    .get(Z, { path: i, request: t })
    .find((e) => V(r.revision, e).commentKey === r.commentKey);
  if (a == null) {
    ct(e, t, i, r);
    return;
  }
  e.get(ye, { request: t, submissionKey: r }).isPending || st(e, t, i, r, a);
}
function at(e, t, n) {
  let r = O(n);
  return e.get(ht, t).find((e) => e.path === r)?.path ?? null;
}
function ot(e, t, n, r) {
  let i = new Set(r.map((e) => V(``, e).commentKey));
  e.set(
    Q,
    { path: n, request: t },
    e
      .get(Q, { path: n, request: t })
      .filter(
        (n) =>
          i.has(n.commentKey) ||
          e.get(ye, { request: t, submissionKey: n }).isPending,
      ),
  );
}
function st(e, t, n, r, i) {
  e.get(ye, { request: t, submissionKey: r }).mutate(i, {
    onSuccess: () => {
      (e.set(
        Z,
        { path: n, request: t },
        e
          .get(Z, { path: n, request: t })
          .filter((e) => !(0, X.default)(V(r.revision, e), r)),
      ),
        ct(e, t, n, r));
    },
  });
}
function ct(e, t, n, r) {
  e.set(
    Q,
    { path: n, request: t },
    e.get(Q, { path: n, request: t }).filter((e) => !(0, X.default)(e, r)),
  );
}
var X,
  lt,
  ut,
  dt,
  ft,
  Z,
  Q,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    ((X = t(k(), 1)),
      v(),
      ae(),
      P(),
      _(),
      T(),
      xe(),
      ge(),
      R(),
      (lt = D(r, () => null)),
      (ut = D(r, ``)),
      (dt = D(r, !0)),
      (ft = D(r, 0)),
      (Z = b(r, (e) => [], { isEqual: X.default })),
      (Q = b(r, (e) => [], { isEqual: X.default })),
      (pt = n(r, (e, { get: t }) => t(ve, e))),
      (mt = n(r, (e, { get: t }) => {
        let n = t(pt, e);
        return n.data?.status === `success` ? re(n.data.unifiedDiff) : void 0;
      })),
      (ht = n(
        r,
        (e, { get: t }) =>
          (t(mt, e) ?? []).map((e) => {
            let t = O(e.metadata.name);
            return { changeKind: N(e.metadata.type), displayPath: t, path: t };
          }),
        { isEqual: X.default },
      )),
      (gt = n(
        r,
        (e, { get: t }) => {
          let n = t(ut).trim().toLowerCase(),
            r = t(ht, e);
          return n.length === 0
            ? r
            : r.filter((e) => e.displayPath.toLowerCase().includes(n));
        },
        { isEqual: X.default },
      )),
      (_t = n(r, (e, { get: t }) => {
        let n = t(lt),
          r = t(gt, e);
        return r.find((e) => e.path === n)?.path ?? r[0]?.path ?? null;
      })),
      (vt = n(r, (e, { get: t }) => t(be, e))),
      (yt = n(
        r,
        ({ path: e, request: t }, { get: n }) => {
          let r = O(e);
          return n(vt, t).data?.commentAttachments?.filter(
            (e) => O(e.position.path) === r,
          );
        },
        { isEqual: X.default },
      )),
      (bt = n(
        r,
        (e, { get: t }) =>
          new Map(
            t(ht, e).map((n) => [
              n.path,
              (t(yt, { path: n.path, request: e }) ?? []).length,
            ]),
          ),
        { isEqual: X.default },
      )),
      (xt = n(
        r,
        ({ path: e, request: t }, { get: n }) =>
          new Set(
            n(Q, { path: O(e), request: t }).flatMap((e) =>
              n(ye, { request: t, submissionKey: e }).isPending
                ? [e.commentKey]
                : [],
            ),
          ),
        { isEqual: X.default },
      )),
      (St = n(
        r,
        ({ path: e, request: t }, { get: n }) =>
          n(Q, { path: O(e), request: t }).flatMap((e) => {
            let r = n(ye, { request: t, submissionKey: e }).error;
            return r == null ? [] : [{ error: r, submissionKey: e }];
          }),
        { isEqual: X.default },
      )));
  });
function wt() {
  let e = (0, Tt.c)(24),
    t = te(r),
    n = j(),
    a = i(dt),
    [s, c] = (0, Et.useState)(!0),
    l = G(c, `pull-request-review`),
    u;
  e[0] !== n || e[1] !== a
    ? ((u = a
        ? n.formatMessage({
            id: `pullRequestsPage.codeReview.hideFileTree`,
            defaultMessage: `Hide file tree`,
            description: `Tooltip to hide the pull request code review file tree`,
          })
        : n.formatMessage({
            id: `pullRequestsPage.codeReview.showFileTree`,
            defaultMessage: `Show file tree`,
            description: `Tooltip to show the pull request code review file tree`,
          })),
      (e[0] = n),
      (e[1] = a),
      (e[2] = u))
    : (u = e[2]);
  let d = u,
    f;
  e[3] !== s || e[4] !== l
    ? ((f = () => {
        l(!s);
      }),
      (e[3] = s),
      (e[4] = l),
      (e[5] = f))
    : (f = e[5]);
  let p;
  e[6] !== s || e[7] !== f
    ? ((p = (0, Dt.jsx)(ce, {
        expanded: s,
        onToggleExpanded: f,
        showHideWhitespace: !1,
        showLoadFullFiles: !1,
      })),
      (e[6] = s),
      (e[7] = f),
      (e[8] = p))
    : (p = e[8]);
  let m = a ? `secondary` : `ghost`,
    h;
  e[9] !== a || e[10] !== t
    ? ((h = () => {
        tt(t, !a);
      }),
      (e[9] = a),
      (e[10] = t),
      (e[11] = h))
    : (h = e[11]);
  let g;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Dt.jsx)(he, { className: `icon-xs` })), (e[12] = g))
    : (g = e[12]);
  let _;
  e[13] !== d || e[14] !== a || e[15] !== m || e[16] !== h
    ? ((_ = (0, Dt.jsx)(ee, {
        "aria-label": d,
        "aria-pressed": a,
        color: m,
        size: `toolbar`,
        uniform: !0,
        onClick: h,
        children: g,
      })),
      (e[13] = d),
      (e[14] = a),
      (e[15] = m),
      (e[16] = h),
      (e[17] = _))
    : (_ = e[17]);
  let v;
  e[18] !== d || e[19] !== _
    ? ((v = (0, Dt.jsx)(o, { tooltipContent: d, delayOpen: !0, children: _ })),
      (e[18] = d),
      (e[19] = _),
      (e[20] = v))
    : (v = e[20]);
  let y;
  return (
    e[21] !== p || e[22] !== v
      ? ((y = (0, Dt.jsxs)(`div`, {
          className: `flex items-center gap-px`,
          children: [p, v],
        })),
        (e[21] = p),
        (e[22] = v),
        (e[23] = y))
      : (y = e[23]),
    y
  );
}
var Tt,
  Et,
  Dt,
  Ot = e(() => {
    ((Tt = c()),
      v(),
      (Et = t(d(), 1)),
      w(),
      p(),
      C(),
      H(),
      me(),
      se(),
      _(),
      Ct(),
      (Dt = S()));
  });
function kt(e) {
  let t = (0, At.c)(58),
    {
      request: n,
      commentAuthorAvatarUrl: a,
      commentAuthorLabel: o,
      cwd: s,
      diffMode: c,
      file: l,
      hostConfig: u,
      path: d,
      renderReadonlyCommentActions: f,
      renderReadonlyCommentBody: p,
      onRequestChanges: m,
    } = e,
    h = te(r),
    g = j(),
    _;
  t[0] !== d || t[1] !== n
    ? ((_ = { path: d, request: n }), (t[0] = d), (t[1] = n), (t[2] = _))
    : (_ = t[2]);
  let v = A(Z, _),
    b;
  t[3] !== d || t[4] !== n
    ? ((b = { path: d, request: n }), (t[3] = d), (t[4] = n), (t[5] = b))
    : (b = t[5]);
  let x = A(yt, b),
    S;
  t[6] !== d || t[7] !== n
    ? ((S = { path: d, request: n }), (t[6] = d), (t[7] = n), (t[8] = S))
    : (S = t[8]);
  let C = A(xt, S),
    w;
  t[9] !== d || t[10] !== n
    ? ((w = { path: d, request: n }), (t[9] = d), (t[10] = n), (t[11] = w))
    : (w = t[11]);
  let T = A(St, w),
    E = i(fe),
    D = i(q),
    [O, k] = (0, jt.useState)(l.metadata.type !== `deleted`),
    M;
  if (t[12] !== g || t[13] !== d || t[14] !== n || t[15] !== h || t[16] !== T) {
    let e;
    (t[18] !== g || t[19] !== d || t[20] !== n || t[21] !== h
      ? ((e = (e) => {
          let { error: t, submissionKey: r } = e;
          return (0, Mt.jsxs)(
            `div`,
            {
              className: `bg-token-error-background/20 mx-1 flex items-center justify-between gap-3 rounded-lg border border-token-error-foreground/30 px-3 py-2 text-sm text-token-error-foreground`,
              role: `alert`,
              children: [
                (0, Mt.jsx)(`span`, {
                  children:
                    t instanceof Error
                      ? t.message
                      : g.formatMessage({
                          id: `pullRequestDetail.code.commentError`,
                          defaultMessage: `GitHub could not post this comment`,
                          description: `Fallback error for a pull request code comment`,
                        }),
                }),
                (0, Mt.jsx)(ee, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => {
                    it(h, n, d, r);
                  },
                  children: (0, Mt.jsx)(y, {
                    id: `pullRequestDetail.code.retryComment`,
                    defaultMessage: `Retry`,
                    description: `Action to retry a failed pull request code comment`,
                  }),
                }),
              ],
            },
            `${r.revision}:${r.commentKey}`,
          );
        }),
        (t[18] = g),
        (t[19] = d),
        (t[20] = n),
        (t[21] = h),
        (t[22] = e))
      : (e = t[22]),
      (M = T.map(e)),
      (t[12] = g),
      (t[13] = d),
      (t[14] = n),
      (t[15] = h),
      (t[16] = T),
      (t[17] = M));
  } else M = t[17];
  let N;
  t[23] !== d || t[24] !== n || t[25] !== h
    ? ((N = (e) => {
        rt(h, n, d, e);
      }),
      (t[23] = d),
      (t[24] = n),
      (t[25] = h),
      (t[26] = N))
    : (N = t[26]);
  let P;
  t[27] !== v || t[28] !== d || t[29] !== n || t[30] !== h
    ? ((P = (e) => {
        rt(h, n, d, [
          ...v,
          {
            ...e,
            content: [{ content_type: `text`, text: `` }],
            replyToReviewThreadId: e.reviewThreadId ?? null,
          },
        ]);
      }),
      (t[27] = v),
      (t[28] = d),
      (t[29] = n),
      (t[30] = h),
      (t[31] = P))
    : (P = t[31]);
  let re = l.metadata.additionLines ? `line-info` : `metadata`,
    F;
  t[32] !== h || t[33] !== D
    ? ((F = () => {
        h.set(q, !D);
      }),
      (t[32] = h),
      (t[33] = D),
      (t[34] = F))
    : (F = t[34]);
  let I;
  t[35] !== a ||
  t[36] !== o ||
  t[37] !== v ||
  t[38] !== s ||
  t[39] !== c ||
  t[40] !== l ||
  t[41] !== u ||
  t[42] !== m ||
  t[43] !== O ||
  t[44] !== x ||
  t[45] !== f ||
  t[46] !== p ||
  t[47] !== E ||
  t[48] !== C ||
  t[49] !== N ||
  t[50] !== P ||
  t[51] !== re ||
  t[52] !== F ||
  t[53] !== D
    ? ((I = (0, Mt.jsx)(K, {
        cwd: s,
        diff: l,
        diffViewWrap: D,
        expandScope: `pull-request-review`,
        enableComments: !0,
        comments: v,
        readonlyComments: x,
        renderReadonlyCommentActions: f,
        renderReadonlyCommentBody: p,
        submittingCommentKeys: C,
        commentAuthorAvatarUrl: a,
        commentAuthorLabel: o,
        onCommentsChange: N,
        onOpenChange: k,
        onRequestChanges: m,
        onReadonlyCommentReply: P,
        hostConfig: u,
        hunkSeparators: re,
        loadFullContent: !1,
        open: O,
        metrics: ne,
        onToggleWrap: F,
        richPreviewEnabled: E,
        roundedCorners: !0,
        stickyHeader: !0,
        viewType: c,
      })),
      (t[35] = a),
      (t[36] = o),
      (t[37] = v),
      (t[38] = s),
      (t[39] = c),
      (t[40] = l),
      (t[41] = u),
      (t[42] = m),
      (t[43] = O),
      (t[44] = x),
      (t[45] = f),
      (t[46] = p),
      (t[47] = E),
      (t[48] = C),
      (t[49] = N),
      (t[50] = P),
      (t[51] = re),
      (t[52] = F),
      (t[53] = D),
      (t[54] = I))
    : (I = t[54]);
  let L;
  return (
    t[55] !== I || t[56] !== M
      ? ((L = (0, Mt.jsxs)(Mt.Fragment, { children: [M, I] })),
        (t[55] = I),
        (t[56] = M),
        (t[57] = L))
      : (L = t[57]),
    L
  );
}
var At,
  jt,
  Mt,
  Nt = e(() => {
    ((At = c()),
      v(),
      (jt = t(d(), 1)),
      w(),
      p(),
      U(),
      ue(),
      M(),
      _(),
      Ct(),
      (Mt = S()));
  });
function Pt(e) {
  let t = (0, zt.c)(84),
    {
      request: n,
      baseBranch: a,
      headRevision: o,
      headBranch: s,
      onRequestChanges: c,
    } = e,
    u = te(r),
    d = i(de),
    f = A(pt, n),
    p = A(mt, n),
    h = A(gt, n),
    _ = A(_t, n),
    v = i(ut),
    b = i(dt),
    x = A(bt, n),
    S = n.account,
    C = A(g, S.hostId),
    [w] = (0, Bt.useState)(Lt),
    T = (0, Bt.useRef)(null),
    E;
  t[0] !== u || t[1] !== w
    ? ((E = (e) => {
        if (e == null) {
          (T.current != null && nt(u, T.current.scrollTop),
            (T.current = null),
            w.cleanUp());
          return;
        }
        ((T.current = e), w.setup(e), (e.scrollTop = u.get(ft)));
      }),
      (t[0] = u),
      (t[1] = w),
      (t[2] = E))
    : (E = t[2]);
  let D = E;
  if (f?.isLoading === !0) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(m, {})), (t[3] = e))
      : (e = t[3]);
    let n;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsxs)(`div`, {
            className: `flex h-full items-center justify-center`,
            role: `status`,
            children: [
              e,
              (0, $.jsx)(`span`, {
                className: `sr-only`,
                children: (0, $.jsx)(y, {
                  id: `pullRequestDetail.code.loading`,
                  defaultMessage: `Loading pull request changes`,
                  description: `Loading state for the pull request Code tab`,
                }),
              }),
            ],
          })),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  if (f?.data?.status !== `success` || f.data.headRevision !== o) {
    let e;
    t[5] === f
      ? (e = t[6])
      : ((e = () => {
          f?.refetch();
        }),
        (t[5] = f),
        (t[6] = e));
    let n;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(y, {
          id: `pullRequestDetail.code.retry`,
          defaultMessage: `Try again`,
          description: `Action to retry loading a pull request diff`,
        })),
        (t[7] = n))
      : (n = t[7]);
    let r;
    t[8] === e
      ? (r = t[9])
      : ((r = (0, $.jsx)(ee, { color: `secondary`, onClick: e, children: n })),
        (t[8] = e),
        (t[9] = r));
    let i;
    t[10] === f
      ? (i = t[11])
      : ((i =
          f?.data?.status === `error`
            ? f.data.error
            : f?.data?.status === `success`
              ? (0, $.jsx)(y, {
                  id: `pullRequestDetail.code.stale`,
                  defaultMessage: `The pull request changed while its diff was loading.`,
                  description: `Error shown when a pull request diff revision is stale`,
                })
              : f?.error?.message),
        (t[10] = f),
        (t[11] = i));
    let a;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(y, {
          id: `pullRequestDetail.code.unavailable`,
          defaultMessage: `Changes unavailable`,
          description: `Error title for an unavailable pull request diff`,
        })),
        (t[12] = a))
      : (a = t[12]);
    let o;
    return (
      t[13] !== r || t[14] !== i
        ? ((o = (0, $.jsx)(le, {
            className: `h-full`,
            actions: r,
            description: i,
            title: a,
          })),
          (t[13] = r),
          (t[14] = i),
          (t[15] = o))
        : (o = t[15]),
      o
    );
  }
  if (p?.length === 0) {
    let e;
    return (
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(le, {
            className: `h-full`,
            title: (0, $.jsx)(y, {
              id: `pullRequestDetail.code.empty`,
              defaultMessage: `No changed files`,
              description: `Empty state for a pull request without a diff`,
            }),
          })),
          (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  let k;
  t[17] === s
    ? (k = t[18])
    : ((k = s?.trim() || null), (t[17] = s), (t[18] = k));
  let j = k,
    M;
  t[19] === a
    ? (M = t[20])
    : ((M = a?.trim() || null), (t[19] = a), (t[20] = M));
  let N = M,
    ne;
  t[21] === p ? (ne = t[22]) : ((ne = p ?? []), (t[21] = p), (t[22] = ne));
  let P;
  if (
    t[23] !== S ||
    t[24] !== d ||
    t[25] !== C ||
    t[26] !== c ||
    t[27] !== n ||
    t[28] !== ne
  ) {
    let e;
    (t[30] !== S || t[31] !== d || t[32] !== C || t[33] !== c || t[34] !== n
      ? ((e = (e) => {
          let t = O(e.metadata.name);
          return (0, $.jsx)(
            `div`,
            {
              id: Rt(t),
              children: (0, $.jsx)(kt, {
                request: n,
                commentAuthorLabel: S.login,
                cwd: null,
                diffMode: d,
                file: e,
                hostConfig: C,
                path: t,
                renderReadonlyCommentActions: Ft,
                renderReadonlyCommentBody: (e) =>
                  (0, $.jsx)(_e, {
                    account: S,
                    allowBasicHtml: !0,
                    className: `text-size-chat px-3 py-2.5 break-words text-token-foreground [&_p]:leading-6`,
                    cwd: null,
                    children: e,
                  }),
                onRequestChanges: c,
              }),
            },
            t,
          );
        }),
        (t[30] = S),
        (t[31] = d),
        (t[32] = C),
        (t[33] = c),
        (t[34] = n),
        (t[35] = e))
      : (e = t[35]),
      (P = ne.map(e)),
      (t[23] = S),
      (t[24] = d),
      (t[25] = C),
      (t[26] = c),
      (t[27] = n),
      (t[28] = ne),
      (t[29] = P));
  } else P = t[29];
  let re;
  t[36] === P
    ? (re = t[37])
    : ((re = (0, $.jsx)(`div`, {
        className: `flex flex-col gap-3`,
        children: P,
      })),
      (t[36] = P),
      (t[37] = re));
  let F;
  t[38] !== D || t[39] !== re
    ? ((F = (0, $.jsx)(`div`, {
        ref: D,
        className: `h-full min-h-0 overflow-x-hidden overflow-y-auto pr-4 pb-3 pl-2 [overflow-anchor:none]`,
        children: re,
      })),
      (t[38] = D),
      (t[39] = re),
      (t[40] = F))
    : (F = t[40]);
  let I = F,
    R;
  t[41] === u
    ? (R = t[42])
    : ((R = (e) => {
        et(u, e);
      }),
      (t[41] = u),
      (t[42] = R));
  let z;
  t[43] !== v || t[44] !== R
    ? ((z = (0, $.jsx)(`div`, {
        className: `shrink-0 pb-1`,
        children: (0, $.jsx)(oe, {
          inputId: `pull-request-code-file-search`,
          searchQuery: v,
          onQueryChange: R,
        }),
      })),
      (t[43] = v),
      (t[44] = R),
      (t[45] = z))
    : (z = t[45]);
  let B = _ ?? void 0,
    V;
  t[46] !== n || t[47] !== u
    ? ((V = (e) => {
        ($e(u, n, e),
          document.getElementById(Rt(e))?.scrollIntoView({ block: `start` }));
      }),
      (t[46] = n),
      (t[47] = u),
      (t[48] = V))
    : (V = t[48]);
  let ae;
  t[49] !== x || t[50] !== B || t[51] !== V || t[52] !== h
    ? ((ae = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(L, {
          activePath: B,
          commentCountByPath: x,
          cwd: null,
          entries: h,
          onSelectPath: V,
        }),
      })),
      (t[49] = x),
      (t[50] = B),
      (t[51] = V),
      (t[52] = h),
      (t[53] = ae))
    : (ae = t[53]);
  let se;
  t[54] !== ae || t[55] !== z
    ? ((se = (0, $.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col pt-2`,
        children: [z, ae],
      })),
      (t[54] = ae),
      (t[55] = z),
      (t[56] = se))
    : (se = t[56]);
  let ce = se,
    H;
  t[57] === j
    ? (H = t[58])
    : ((H =
        j == null
          ? null
          : (0, $.jsx)(`span`, { className: `truncate`, children: j })),
      (t[57] = j),
      (t[58] = H));
  let U;
  t[59] !== N || t[60] !== j
    ? ((U =
        j != null && N != null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, $.jsx)(y, {
                    id: `pullRequestDetail.code.branchDirection`,
                    defaultMessage: `into`,
                    description: `Accessible relationship between the head and base branches in the pull request Code toolbar`,
                  }),
                }),
                (0, $.jsx)(l, {
                  "aria-hidden": !0,
                  className: `icon-2xs shrink-0`,
                }),
              ],
            })
          : null),
      (t[59] = N),
      (t[60] = j),
      (t[61] = U))
    : (U = t[61]);
  let W;
  t[62] === N
    ? (W = t[63])
    : ((W =
        N == null
          ? null
          : (0, $.jsx)(`span`, { className: `truncate`, children: N })),
      (t[62] = N),
      (t[63] = W));
  let G;
  t[64] !== H || t[65] !== U || t[66] !== W
    ? ((G = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 text-sm text-token-text-tertiary [@container_(max-width:399px)]:hidden`,
        children: [H, U, W],
      })),
      (t[64] = H),
      (t[65] = U),
      (t[66] = W),
      (t[67] = G))
    : (G = t[67]);
  let K;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(wt, {})), (t[68] = K))
    : (K = t[68]);
  let q;
  t[69] === G
    ? (q = t[70])
    : ((q = (0, $.jsxs)(`div`, {
        className: `@container flex h-toolbar-pane shrink-0 items-center justify-between gap-2 overflow-hidden border-b border-token-border-default ps-5 pe-2 [@container_(min-width:400px)]:pe-3 [@container_(min-width:500px)]:ps-6`,
        children: [G, K],
      })),
      (t[69] = G),
      (t[70] = q));
  let J;
  t[71] === u
    ? (J = t[72])
    : ((J = (e) => {
        tt(u, e);
      }),
      (t[71] = u),
      (t[72] = J));
  let ue;
  t[73] !== I || t[74] !== ce || t[75] !== b || t[76] !== J
    ? ((ue = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(Ee, {
          id: `pull-request-code-review-files-right`,
          className: `h-full min-h-0`,
          defaultLeftPercent: 76,
          drawerBreakpoint: 680,
          drawerMaxWidth: 360,
          drawerVisibleInset: 56,
          isRightOpen: b,
          left: I,
          minLeftWidth: 420,
          minRightWidth: 220,
          onRightOpenChange: J,
          right: ce,
          rightClassName: `pr-4 pl-2`,
        }),
      })),
      (t[73] = I),
      (t[74] = ce),
      (t[75] = b),
      (t[76] = J),
      (t[77] = ue))
    : (ue = t[77]);
  let fe;
  t[78] !== q || t[79] !== ue
    ? ((fe = (0, $.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col`,
        children: [q, ue],
      })),
      (t[78] = q),
      (t[79] = ue),
      (t[80] = fe))
    : (fe = t[80]);
  let pe;
  return (
    t[81] !== fe || t[82] !== w
      ? ((pe = (0, $.jsx)(ie.Provider, { value: w, children: fe })),
        (t[81] = fe),
        (t[82] = w),
        (t[83] = pe))
      : (pe = t[83]),
    pe
  );
}
function Ft(e, t, n) {
  return t
    ? (0, $.jsx)(`div`, {
        className: `flex items-center gap-1`,
        onClick: It,
        children: (0, $.jsx)(ee, {
          color: `primary`,
          size: `toolbar`,
          onClick: n,
          children: (0, $.jsx)(y, {
            id: `pullRequestsPage.codeReview.comment.reply`,
            defaultMessage: `Reply`,
            description: `Action button shown on a pull request review comment in the code review tab`,
          }),
        }),
      })
    : null;
}
function It(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Lt() {
  return new pe();
}
function Rt(e) {
  return `pull-request-file-${encodeURIComponent(e)}`;
}
var zt, Bt, $;
e(() => {
  ((zt = c()),
    J(),
    F(),
    v(),
    (Bt = t(d(), 1)),
    w(),
    p(),
    I(),
    W(),
    s(),
    Qe(),
    ue(),
    f(),
    z(),
    _(),
    a(),
    T(),
    Se(),
    Ot(),
    Nt(),
    Ct(),
    ($ = S()));
})();
export { Pt as PullRequestCodeReview };
//# sourceMappingURL=pull-request-code-review-Bp0o1ZAW.js.map
