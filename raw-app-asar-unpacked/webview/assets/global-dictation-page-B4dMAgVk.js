import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  BW as n,
  DK as r,
  EK as i,
  Fq as a,
  I2 as o,
  KJ as s,
  L2 as c,
  MK as l,
  NK as u,
  Pq as d,
  TK as f,
  _Y as p,
  aG as ee,
  fY as m,
  gJ as h,
  hJ as g,
  k2 as _,
  kK as te,
  mJ as v,
  mY as y,
  qJ as b,
  rG as x,
  yY as ne,
  zW as re,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $ as ie,
  H as S,
  Q as ae,
  U as oe,
  ft as se,
  ht as ce,
  mt as le,
  pt as C,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Bn as ue,
  zn as de,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  a as fe,
  i as pe,
  n as me,
  o as he,
  r as ge,
  t as _e,
} from "./global-dictation-orb-DJMd5YMl.js";
import {
  gt as ve,
  ht as w,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  n as ye,
  t as T,
} from "./use-floating-window-pointer-interactivity-DAFdHELb.js";
var E,
  D,
  O,
  k,
  A = e(() => {
    ((E = `_darkTheme_1xq4w_1`),
      (D = `_miniSurface_1xq4w_15`),
      (O = `_expandedSurface_1xq4w_22`),
      (k = { darkTheme: E, miniSurface: D, expandedSurface: O }));
  });
function be() {
  let e = (0, P.c)(3),
    t = ee(`1380537759`),
    n;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = []), (e[0] = n))
    : (n = e[0]),
    (0, F.useEffect)(j, n));
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = t ? (0, I.jsx)(xe, {}) : (0, I.jsx)(N, {})),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function j() {
  let e = !0;
  return (
    queueMicrotask(() => {
      e && g.dispatchMessage(`global-dictation-renderer-ready`, {});
    }),
    () => {
      e = !1;
    }
  );
}
function xe() {
  let e = (0, P.c)(14),
    t = ee(ae),
    [n, r] = (0, F.useState)(null),
    [i, a] = (0, F.useState)(!1),
    o = (0, F.useRef)(null),
    c;
  e[0] === n
    ? (c = e[1])
    : ((c = () => {
        n != null &&
          g.dispatchMessage(`global-dictation-close`, { sessionId: n });
      }),
      (e[0] = n),
      (e[1] = c));
  let l = c,
    u;
  (e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        includeInteractiveRegion: !0,
        interactiveRegionRef: o,
        onInteractiveChange: M,
        publishInitialNonInteractive: !1,
      }),
      (e[2] = u))
    : (u = e[2]),
    ye(u));
  let d;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = s(
        k.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary`,
      )),
      (e[3] = d))
    : (d = e[3]);
  let f = i ? `size-10` : `size-0`,
    p;
  e[4] === f
    ? (p = e[5])
    : ((p = s(`flex items-center justify-center`, f)), (e[4] = f), (e[5] = p));
  let m;
  e[6] === t
    ? (m = e[7])
    : ((m = (0, I.jsx)(_e, {
        cleanupEnabled: !1,
        streamingEnabled: t,
        onActiveSessionIdChange: r,
        registerNativePetRenderer: !1,
        onVisibilityChange: a,
      })),
      (e[6] = t),
      (e[7] = m));
  let h;
  e[8] !== p || e[9] !== m
    ? ((h = (0, I.jsx)(`div`, {
        ref: o,
        "data-testid": `global-dictation-hitbox`,
        className: p,
        children: m,
      })),
      (e[8] = p),
      (e[9] = m),
      (e[10] = h))
    : (h = e[10]);
  let _;
  return (
    e[11] !== l || e[12] !== h
      ? ((_ = (0, I.jsx)(`main`, {
          className: d,
          children: (0, I.jsx)(we, { onClose: l, children: h }),
        })),
        (e[11] = l),
        (e[12] = h),
        (e[13] = _))
      : (_ = e[13]),
    _
  );
}
function M(e) {
  g.dispatchMessage(`global-dictation-pointer-interaction-changed`, {
    isInteractive: e,
  });
}
function N() {
  let e = (0, P.c)(94),
    t = ne(),
    n = ee(ae),
    [i, a] = (0, F.useState)(null),
    [o, c] = (0, F.useState)(null),
    [l, u] = (0, F.useState)(null),
    [f, m] = (0, F.useState)(!1),
    [_, te] = (0, F.useState)(0),
    [v, y] = (0, F.useState)(`initializing`),
    [b, x] = (0, F.useState)(null),
    [ie, S] = (0, F.useState)(!1),
    ce = (0, F.useRef)(null),
    C;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { variant: `compact` }), (e[0] = C))
    : (C = e[0]);
  let {
      waveformCanvasRef: ue,
      startWaveformCapture: me,
      stopWaveformCapture: ge,
      resetWaveformDisplay: _e,
    } = oe(C),
    ve;
  e[1] === t
    ? (ve = e[2])
    : ((ve = (e, n) => {
        let r = de(t, e, n);
        (x(r.message), S(r.canRetry), y(`error`));
      }),
      (e[1] = t),
      (e[2] = ve));
  let w = ve,
    T;
  e[3] !== i || e[4] !== w
    ? ((T = () => {
        i != null &&
          (y(`transcribing`),
          x(null),
          S(!1),
          pe(i, !1).catch((e) => {
            w(`transcription`, e);
          }));
      }),
      (e[3] = i),
      (e[4] = w),
      (e[5] = T))
    : (T = e[5]);
  let E = T,
    D;
  e[6] === i
    ? (D = e[7])
    : ((D = () => {
        i != null &&
          (g.dispatchMessage(`global-dictation-dismiss`, { sessionId: i }),
          a(null),
          x(null),
          S(!1));
      }),
      (e[6] = i),
      (e[7] = D));
  let O = D,
    A;
  e[8] !== i || e[9] !== v
    ? ((A = () => {
        (i == null && v !== `idle`) ||
          g.dispatchMessage(`global-dictation-close`, { sessionId: i });
      }),
      (e[8] = i),
      (e[9] = v),
      (e[10] = A))
    : (A = e[10]);
  let be = A,
    j;
  e[11] === v
    ? (j = e[12])
    : ((j = (e) => {
        v === `idle` && m(e);
      }),
      (e[11] = v),
      (e[12] = j));
  let xe = j,
    M;
  (e[13] === _
    ? (M = e[14])
    : ((M = {
        activationNonce: _,
        includeInteractiveRegion: !0,
        interactiveRegionRef: ce,
        onInteractiveChange: Ce,
        publishInitialNonInteractive: !1,
      }),
      (e[13] = _),
      (e[14] = M)),
    ye(M));
  let N, Ee;
  (e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        (a(null),
          c(e.configuredHotkey),
          u(e.configuredToggleHotkey),
          m(!1),
          x(null),
          S(!1),
          te(Se),
          y(
            e.configuredHotkey != null || e.configuredToggleHotkey != null
              ? `idle`
              : `initializing`,
          ));
      }),
      (Ee = []),
      (e[15] = N),
      (e[16] = Ee))
    : ((N = e[15]), (Ee = e[16])),
    h(`global-dictation-idle`, N, Ee));
  let De;
  e[17] !== n || e[18] !== _e || e[19] !== w || e[20] !== me || e[21] !== ge
    ? ((De = (e) => {
        (a(e.sessionId),
          m(!1),
          x(null),
          S(!1),
          y(`listening`),
          fe(
            e.sessionId,
            {
              startWaveformCapture: me,
              stopWaveformCapture: ge,
              resetWaveformDisplay: _e,
              onTranscriptionFailed: (e) => {
                w(`transcription`, e);
              },
            },
            !1,
            n,
          ).catch((e) => {
            w(`start`, e);
          }));
      }),
      (e[17] = n),
      (e[18] = _e),
      (e[19] = w),
      (e[20] = me),
      (e[21] = ge),
      (e[22] = De))
    : (De = e[22]);
  let Oe;
  (e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = []), (e[23] = Oe))
    : (Oe = e[23]),
    h(`global-dictation-start`, De, Oe));
  let ke, Ae;
  (e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (e) => {
        (y(`transcribing`), x(null), S(!1), he(e.sessionId));
      }),
      (Ae = []),
      (e[24] = ke),
      (e[25] = Ae))
    : ((ke = e[24]), (Ae = e[25])),
    h(`global-dictation-stop`, ke, Ae));
  let je = v === `error` && `p-1`,
    L;
  e[26] === je
    ? (L = e[27])
    : ((L = s(
        k.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary`,
        je,
      )),
      (e[26] = je),
      (e[27] = L));
  let Me = v !== `idle`,
    Ne = v === `idle` && f,
    Pe;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = s(k.darkTheme, `!rounded-full px-4 py-2`)), (e[28] = Pe))
    : (Pe = e[28]);
  let R;
  e[29] !== o || e[30] !== l
    ? ((R = (0, I.jsx)(Te, { configuredHotkey: o, configuredToggleHotkey: l })),
      (e[29] = o),
      (e[30] = l),
      (e[31] = R))
    : (R = e[31]);
  let Fe = v === `error` ? `w-fit` : `h-[30px] w-[120px]`,
    z;
  e[32] === Fe
    ? (z = e[33])
    : ((z = s(`group flex items-end justify-center`, Fe)),
      (e[32] = Fe),
      (e[33] = z));
  let B;
  e[34] !== t || e[35] !== v
    ? ((B =
        v === `initializing`
          ? void 0
          : v === `idle`
            ? t.formatMessage({
                id: `globalDictation.readyAriaLabel`,
                defaultMessage: `Global dictation ready`,
                description: `Accessible label for the persistent global dictation reminder`,
              })
            : t.formatMessage({
                id: `globalDictation.waveformAriaLabel`,
                defaultMessage: `Global dictation waveform`,
                description: `Accessible label for the minimal global dictation waveform`,
              })),
      (e[34] = t),
      (e[35] = v),
      (e[36] = B))
    : (B = e[36]);
  let Ie = v === `error` ? `draggable` : `no-drag`,
    Le = (v === `initializing` || v === `idle`) && k.miniSurface,
    Re =
      (v === `initializing` || v === `idle`) &&
      `h-2 w-10 justify-center rounded-[4px] border-token-text-secondary/70 px-0`,
    ze =
      v === `idle` &&
      `group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-token-border-default/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-token-border-default/80`,
    Be = v !== `initializing` && v !== `idle` && k.expandedSurface,
    Ve =
      v !== `initializing` && v !== `idle` && `border-token-border-default/80`,
    He =
      (v === `listening` || v === `transcribing`) &&
      `h-[30px] w-[72px] justify-center rounded-full px-2`,
    Ue = v === `error` && `h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2`,
    V;
  e[37] !== Ie ||
  e[38] !== Le ||
  e[39] !== Re ||
  e[40] !== ze ||
  e[41] !== Be ||
  e[42] !== Ve ||
  e[43] !== He ||
  e[44] !== Ue
    ? ((V = s(
        `flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none`,
        Ie,
        Le,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
      )),
      (e[37] = Ie),
      (e[38] = Le),
      (e[39] = Re),
      (e[40] = ze),
      (e[41] = Be),
      (e[42] = Ve),
      (e[43] = He),
      (e[44] = Ue),
      (e[45] = V))
    : (V = e[45]);
  let H;
  e[46] === v
    ? (H = e[47])
    : ((H =
        v === `idle`
          ? (0, I.jsx)(`span`, {
              className: `relative flex h-full w-full items-center justify-center text-token-text-secondary`,
              children: (0, I.jsx)(le, {
                className: `icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none`,
              }),
            })
          : null),
      (e[46] = v),
      (e[47] = H));
  let U;
  e[48] === v
    ? (U = e[49])
    : ((U =
        v === `transcribing`
          ? (0, I.jsx)(d, { className: `icon-xs text-token-text-secondary` })
          : null),
      (e[48] = v),
      (e[49] = U));
  let W;
  e[50] !== ie ||
  e[51] !== b ||
  e[52] !== O ||
  e[53] !== E ||
  e[54] !== t ||
  e[55] !== v
    ? ((W =
        v === `error`
          ? (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(`span`, {
                  className: `max-w-[252px] min-w-0 truncate text-xs font-medium text-token-error-foreground`,
                  children: b,
                }),
                ie
                  ? (0, I.jsx)(`button`, {
                      type: `button`,
                      className: `no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none`,
                      "aria-label": t.formatMessage({
                        id: `globalDictation.retry`,
                        defaultMessage: `Retry`,
                        description: `Accessible label for the button that retries global dictation transcription`,
                      }),
                      onClick: E,
                      children: (0, I.jsx)(se, { className: `icon-2xs` }),
                    })
                  : null,
                (0, I.jsx)(`button`, {
                  type: `button`,
                  className: `no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none`,
                  "aria-label": t.formatMessage({
                    id: `globalDictation.dismissError`,
                    defaultMessage: `Dismiss`,
                    description: `Accessible label for the button that dismisses the global dictation error window`,
                  }),
                  onClick: O,
                  children: (0, I.jsx)(re, { className: `icon-2xs` }),
                }),
              ],
            })
          : null),
      (e[50] = ie),
      (e[51] = b),
      (e[52] = O),
      (e[53] = E),
      (e[54] = t),
      (e[55] = v),
      (e[56] = W))
    : (W = e[56]);
  let G;
  e[57] !== v || e[58] !== ue
    ? ((G =
        v === `listening`
          ? (0, I.jsx)(`canvas`, {
              ref: ue,
              className: `h-4 min-w-0 flex-1 text-token-text-primary`,
              "aria-hidden": `true`,
            })
          : null),
      (e[57] = v),
      (e[58] = ue),
      (e[59] = G))
    : (G = e[59]);
  let K;
  e[60] === v
    ? (K = e[61])
    : ((K =
        v === `idle`
          ? (0, I.jsx)(p, {
              id: `globalDictation.ready`,
              defaultMessage: `Dictation ready`,
              description: `Status text for the persistent global dictation reminder`,
            })
          : null),
      (e[60] = v),
      (e[61] = K));
  let q;
  e[62] === v
    ? (q = e[63])
    : ((q =
        v === `listening`
          ? (0, I.jsx)(p, {
              id: `globalDictation.listening`,
              defaultMessage: `Listening`,
              description: `Status text shown in the global dictation window while recording`,
            })
          : null),
      (e[62] = v),
      (e[63] = q));
  let J;
  e[64] === v
    ? (J = e[65])
    : ((J =
        v === `transcribing`
          ? (0, I.jsx)(p, {
              id: `globalDictation.transcribing`,
              defaultMessage: `Transcribing…`,
              description: `Status text shown in the global dictation window while audio is being transcribed`,
            })
          : null),
      (e[64] = v),
      (e[65] = J));
  let We = v === `error` ? b : null,
    Y;
  e[66] !== K || e[67] !== q || e[68] !== J || e[69] !== We
    ? ((Y = (0, I.jsxs)(`span`, {
        className: `sr-only`,
        children: [K, q, J, We],
      })),
      (e[66] = K),
      (e[67] = q),
      (e[68] = J),
      (e[69] = We),
      (e[70] = Y))
    : (Y = e[70]);
  let X;
  e[71] !== B ||
  e[72] !== V ||
  e[73] !== H ||
  e[74] !== U ||
  e[75] !== W ||
  e[76] !== G ||
  e[77] !== Y
    ? ((X = (0, I.jsxs)(`section`, {
        "aria-live": `polite`,
        "aria-label": B,
        className: V,
        children: [H, U, W, G, Y],
      })),
      (e[71] = B),
      (e[72] = V),
      (e[73] = H),
      (e[74] = U),
      (e[75] = W),
      (e[76] = G),
      (e[77] = Y),
      (e[78] = X))
    : (X = e[78]);
  let Z;
  e[79] !== z || e[80] !== X
    ? ((Z = (0, I.jsx)(`div`, {
        ref: ce,
        "data-testid": `global-dictation-hitbox`,
        className: z,
        children: X,
      })),
      (e[79] = z),
      (e[80] = X),
      (e[81] = Z))
    : (Z = e[81]);
  let Q;
  e[82] !== xe || e[83] !== Me || e[84] !== Ne || e[85] !== R || e[86] !== Z
    ? ((Q = (0, I.jsx)(r, {
        delayDuration: 250,
        disableHoverOpen: Me,
        disablePadding: !0,
        open: Ne,
        sideOffset: 10,
        tooltipClassName: Pe,
        tooltipMaxWidth: `36rem`,
        tooltipContent: R,
        onOpenChange: xe,
        children: Z,
      })),
      (e[82] = xe),
      (e[83] = Me),
      (e[84] = Ne),
      (e[85] = R),
      (e[86] = Z),
      (e[87] = Q))
    : (Q = e[87]);
  let $;
  e[88] !== be || e[89] !== Q
    ? (($ = (0, I.jsx)(we, { onClose: be, children: Q })),
      (e[88] = be),
      (e[89] = Q),
      (e[90] = $))
    : ($ = e[90]);
  let Ge;
  return (
    e[91] !== L || e[92] !== $
      ? ((Ge = (0, I.jsx)(`main`, { className: L, children: $ })),
        (e[91] = L),
        (e[92] = $),
        (e[93] = Ge))
      : (Ge = e[93]),
    Ge
  );
}
function Se(e) {
  return e + 1;
}
function Ce(e) {
  g.dispatchMessage(`global-dictation-pointer-interaction-changed`, {
    isInteractive: e,
  });
}
function we(e) {
  let t = (0, P.c)(6),
    { children: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = m({
        id: `globalDictation.closeWindow`,
        defaultMessage: `Close window`,
        description: `Context menu item that closes the global dictation floating window`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = [{ id: `close-window`, message: i, onSelect: r }]),
      (t[1] = r),
      (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, I.jsx)(f, { items: a, children: n })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Te(e) {
  let t = (0, P.c)(19),
    { configuredHotkey: n, configuredToggleHotkey: r } = e;
  if (n != null && r != null) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = w(n)), (t[0] = n), (t[1] = e));
    let i;
    t[2] === e
      ? (i = t[3])
      : ((i = (0, I.jsx)(l, { keysLabel: e }, `hold`)), (t[2] = e), (t[3] = i));
    let a;
    t[4] === r ? (a = t[5]) : ((a = w(r)), (t[4] = r), (t[5] = a));
    let o;
    t[6] === a
      ? (o = t[7])
      : ((o = (0, I.jsx)(l, { keysLabel: a }, `toggle`)),
        (t[6] = a),
        (t[7] = o));
    let s;
    return (
      t[8] !== i || t[9] !== o
        ? ((s = (0, I.jsx)(p, {
            id: `globalDictation.readyTooltip.holdAndToggle`,
            defaultMessage: `Hold {holdShortcut} or press {toggleShortcut} to dictate`,
            description: `Tooltip explaining both global dictation shortcuts`,
            values: { holdShortcut: i, toggleShortcut: o },
          })),
          (t[8] = i),
          (t[9] = o),
          (t[10] = s))
        : (s = t[10]),
      s
    );
  }
  if (n != null) {
    let e;
    t[11] === n ? (e = t[12]) : ((e = w(n)), (t[11] = n), (t[12] = e));
    let r;
    return (
      t[13] === e
        ? (r = t[14])
        : ((r = (0, I.jsx)(p, {
            id: `globalDictation.readyTooltip.hold`,
            defaultMessage: `Hold {shortcut} to dictate`,
            description: `Tooltip explaining the hold-to-dictate shortcut`,
            values: { shortcut: (0, I.jsx)(l, { keysLabel: e }, `hold`) },
          })),
          (t[13] = e),
          (t[14] = r)),
      r
    );
  }
  if (r != null) {
    let e;
    t[15] === r ? (e = t[16]) : ((e = w(r)), (t[15] = r), (t[16] = e));
    let n;
    return (
      t[17] === e
        ? (n = t[18])
        : ((n = (0, I.jsx)(p, {
            id: `globalDictation.readyTooltip.toggle`,
            defaultMessage: `Press {shortcut} to dictate`,
            description: `Tooltip explaining the toggle dictation shortcut`,
            values: { shortcut: (0, I.jsx)(l, { keysLabel: e }, `toggle`) },
          })),
          (t[17] = e),
          (t[18] = n)),
      n
    );
  }
  return null;
}
var P, F, I;
e(() => {
  ((P = o()),
    b(),
    (F = t(c(), 1)),
    y(),
    i(),
    u(),
    a(),
    te(),
    S(),
    T(),
    ce(),
    C(),
    n(),
    ve(),
    v(),
    ie(),
    x(),
    ue(),
    me(),
    ge(),
    A(),
    (I = _()));
})();
export { be as GlobalDictationPage };
//# sourceMappingURL=global-dictation-page-B4dMAgVk.js.map
