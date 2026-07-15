import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  DK as n,
  I2 as r,
  KJ as ee,
  L2 as i,
  MK as a,
  Mg as o,
  Mi as s,
  Mq as te,
  NK as c,
  Ni as l,
  Nq as u,
  _Y as ne,
  aJ as d,
  jg as re,
  k2 as f,
  kK as p,
  mY as ie,
  qJ as m,
  tJ as ae,
  yY as oe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  nr as h,
  tr as se,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  I as g,
  L as ce,
  c as le,
  s as ue,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  _t as de,
  gt as _,
  ht as fe,
  yt as v,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
function pe(e) {
  let t = b(e);
  if (t == null) return null;
  let n = [];
  return (
    e.ctrlKey && n.push(`Ctrl`),
    e.metaKey && n.push(`Command`),
    e.altKey && n.push(`Alt`),
    e.shiftKey && n.push(`Shift`),
    n.push(t),
    n.join(`+`)
  );
}
function me(e) {
  return y(e, `pressed`);
}
function he(e) {
  return y(e, `released`);
}
function y(e, t) {
  if (e.key.toLowerCase() === `fn`) return `Fn`;
  let n = e.location === C ? `Left` : e.location === w ? `Right` : null;
  if (n == null) return null;
  switch (e.key) {
    case `Alt`:
      return t === `released` ||
        (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey)
        ? `${n}Option`
        : null;
    case `Meta`:
      return t === `released` ||
        (e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey)
        ? `${n}Command`
        : null;
    case `Control`:
      return n === `Left` &&
        (t === `released` ||
          (e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey))
        ? `LeftControl`
        : null;
    default:
      return null;
  }
}
function b(e) {
  let t = g(e);
  return S.has(t)
    ? null
    : t === ` `
      ? `Space`
      : t === `+`
        ? `Plus`
        : (T.get(t) ??
          (/^f\d{1,2}$/i.test(t)
            ? t.toUpperCase()
            : t.toLowerCase() === `fn`
              ? `Fn`
              : t.length === 1
                ? t.toUpperCase()
                : (x(e.code) ?? t)));
}
function x(e) {
  return e == null
    ? null
    : /^Key[A-Z]$/.test(e)
      ? e.slice(3)
      : /^Digit[0-9]$/.test(e)
        ? e.slice(5)
        : e === `Space`
          ? `Space`
          : null;
}
var S,
  C,
  w,
  T,
  E = e(() => {
    (ce(),
      (S = new Set([`Meta`, `Control`, `Alt`, `AltGraph`, `Shift`])),
      (C = 1),
      (w = 2),
      (T = new Map([
        [`Escape`, `Esc`],
        [`ArrowUp`, `Up`],
        [`ArrowDown`, `Down`],
        [`ArrowLeft`, `Left`],
        [`ArrowRight`, `Right`],
      ])));
  });
function D(e) {
  let t = (0, _e.c)(116),
    {
      accelerator: r,
      acceleratorLabel: i,
      allowsBareModifiers: c,
      allowsSequences: l,
      ariaLabelledBy: u,
      canAppend: d,
      captureAriaLabel: re,
      className: f,
      conflict: p,
      disabled: ie,
      emptyLabel: m,
      hotkeyName: h,
      isCapturing: g,
      valueLabelId: ce,
      onCancelCapture: le,
      onCapture: _,
      onClear: v,
      onReset: y,
      onStartCapture: b,
    } = e,
    x = c === void 0 ? !1 : c,
    S = l === void 0 ? !1 : l,
    C = d === void 0 ? !1 : d,
    w = p === void 0 ? null : p,
    T = ie === void 0 ? !1 : ie,
    E = oe(),
    { platform: D } = o(),
    A = (0, O.useId)(),
    j = (0, O.useRef)(0),
    M = (0, O.useRef)(null),
    N = (0, O.useRef)(null),
    P = (0, O.useRef)(null),
    [ve, ye] = (0, O.useState)(!1),
    [be, xe] = (0, O.useState)(null),
    Se;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = function () {
        (P.current != null && (clearTimeout(P.current), (P.current = null)),
          (N.current = null),
          xe(null));
      }),
      (t[0] = Se))
    : (Se = t[0]);
  let Ce = Se,
    F;
  t[1] === _
    ? (F = t[2])
    : ((F = function (e) {
        ((j.current += 1), (M.current = null), Ce(), _(e));
      }),
      (t[1] = _),
      (t[2] = F));
  let I = F,
    L;
  t[3] === le
    ? (L = t[4])
    : ((L = function () {
        ((j.current += 1), (M.current = null), Ce(), le());
      }),
      (t[3] = le),
      (t[4] = L));
  let R = L,
    z;
  t[5] !== S || t[6] !== I || t[7] !== D
    ? ((z = function (e) {
        let t = N.current;
        if (t != null) {
          I(`${t} ${e}`);
          return;
        }
        if (!S || e.includes(`+`)) {
          I(e);
          return;
        }
        ((N.current = e),
          xe(`${fe(e, D === `macOS`, D === `linux`)} …`),
          (P.current = setTimeout(() => {
            N.current === e && I(e);
          }, de)));
      }),
      (t[5] = S),
      (t[6] = I),
      (t[7] = D),
      (t[8] = z))
    : (z = t[8]);
  let we = z,
    Te;
  t[9] === I
    ? (Te = t[10])
    : ((Te = async (e) => {
        try {
          let { hotkey: t } = await ae(`global-dictation-capture-fn-hotkey`);
          t != null && j.current === e && I(t);
        } catch {}
      }),
      (t[9] = I),
      (t[10] = Te));
  let Ee = (0, O.useEffectEvent)(Te),
    De;
  t[11] !== x || t[12] !== Ee || t[13] !== g || t[14] !== D
    ? ((De = () => (
        (j.current += 1),
        g && x && D === `macOS` && Ee(j.current),
        () => {
          ((j.current += 1),
            (M.current = null),
            (N.current = null),
            P.current != null && clearTimeout(P.current));
        }
      )),
      (t[11] = x),
      (t[12] = Ee),
      (t[13] = g),
      (t[14] = D),
      (t[15] = De))
    : (De = t[15]);
  let Oe;
  if (
    (t[16] !== x || t[17] !== g || t[18] !== D
      ? ((Oe = [x, g, D]), (t[16] = x), (t[17] = g), (t[18] = D), (t[19] = Oe))
      : (Oe = t[19]),
    (0, O.useEffect)(De, Oe),
    g)
  ) {
    let e;
    t[20] === f
      ? (e = t[21])
      : ((e = ee(`flex w-full flex-col items-start gap-1`, f)),
        (t[20] = f),
        (t[21] = e));
    let n = w == null ? void 0 : A,
      r = w == null ? void 0 : !0,
      i;
    t[22] !== E || t[23] !== be
      ? ((i =
          be ??
          E.formatMessage({
            id: `settings.hotkeySetter.capturePrompt`,
            defaultMessage: `Press shortcut`,
            description: `Prompt shown while capturing a settings hotkey`,
          })),
        (t[22] = E),
        (t[23] = be),
        (t[24] = i))
      : (i = t[24]);
    let a;
    t[25] !== x || t[26] !== R || t[27] !== we
      ? ((a = (e) => {
          if (e.repeat) return;
          if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
            R();
            return;
          }
          if (x) {
            let t = me(e.nativeEvent);
            if (t != null) {
              M.current = t;
              return;
            }
          }
          let t = pe(e.nativeEvent);
          t != null && we(t);
        }),
        (t[25] = x),
        (t[26] = R),
        (t[27] = we),
        (t[28] = a))
      : (a = t[28]);
    let o;
    t[29] !== x || t[30] !== I
      ? ((o = (e) => {
          if ((e.preventDefault(), e.stopPropagation(), !x)) return;
          let t = he(e.nativeEvent);
          t != null && M.current === t && I(t);
        }),
        (t[29] = x),
        (t[30] = I),
        (t[31] = o))
      : (o = t[31]);
    let s;
    t[32] !== R ||
    t[33] !== re ||
    t[34] !== n ||
    t[35] !== r ||
    t[36] !== i ||
    t[37] !== a ||
    t[38] !== o
      ? ((s = (0, k.jsx)(`input`, {
          "data-codex-shortcut-capture": !0,
          autoFocus: !0,
          readOnly: !0,
          "aria-describedby": n,
          "aria-invalid": r,
          "aria-label": re,
          className: `h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none focus:border-token-focus-border`,
          value: i,
          onBlur: R,
          onKeyDown: a,
          onKeyUp: o,
        })),
        (t[32] = R),
        (t[33] = re),
        (t[34] = n),
        (t[35] = r),
        (t[36] = i),
        (t[37] = a),
        (t[38] = o),
        (t[39] = s))
      : (s = t[39]);
    let c;
    t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, k.jsx)(ne, {
          id: `settings.hotkeySetter.cancel`,
          defaultMessage: `Cancel`,
          description: `Button label to cancel settings hotkey capture`,
        })),
        (t[40] = c))
      : (c = t[40]);
    let l;
    t[41] === R
      ? (l = t[42])
      : ((l = (0, k.jsx)(te, {
          color: `ghost`,
          size: `toolbar`,
          onMouseDown: ge,
          onClick: R,
          children: c,
        })),
        (t[41] = R),
        (t[42] = l));
    let u;
    t[43] !== s || t[44] !== l
      ? ((u = (0, k.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [s, l],
        })),
        (t[43] = s),
        (t[44] = l),
        (t[45] = u))
      : (u = t[45]);
    let d;
    t[46] !== w || t[47] !== A
      ? ((d =
          w == null
            ? null
            : (0, k.jsx)(`span`, {
                id: A,
                className: `text-xs text-token-editor-warning-foreground`,
                children: (0, k.jsx)(ne, {
                  id: `settings.hotkeySetter.conflict`,
                  defaultMessage: `Used by {hotkeyName}`,
                  description: `Warning shown while capturing a hotkey already used by another action`,
                  values: { hotkeyName: w },
                }),
              })),
        (t[46] = w),
        (t[47] = A),
        (t[48] = d))
      : (d = t[48]);
    let p;
    return (
      t[49] !== e || t[50] !== u || t[51] !== d
        ? ((p = (0, k.jsxs)(`div`, { className: e, children: [u, d] })),
          (t[49] = e),
          (t[50] = u),
          (t[51] = d),
          (t[52] = p))
        : (p = t[52]),
      p
    );
  }
  let B = r != null,
    V;
  if (!B) {
    let e;
    (t[53] !== h || t[54] !== E
      ? ((e = E.formatMessage(
          {
            id: `settings.hotkeySetter.setAriaLabel`,
            defaultMessage: `Set shortcut for {hotkeyName}`,
            description: `Aria label for setting a settings hotkey`,
          },
          { hotkeyName: h },
        )),
        (t[53] = h),
        (t[54] = E),
        (t[55] = e))
      : (e = t[55]),
      (V = e));
  } else if (ve) {
    let e;
    (t[56] !== h || t[57] !== E
      ? ((e = E.formatMessage(
          {
            id: `settings.hotkeySetter.createAriaLabel`,
            defaultMessage: `Create new shortcut for {hotkeyName}`,
            description: `Aria label for adding another settings hotkey`,
          },
          { hotkeyName: h },
        )),
        (t[56] = h),
        (t[57] = E),
        (t[58] = e))
      : (e = t[58]),
      (V = e));
  } else {
    let e;
    (t[59] !== h || t[60] !== E
      ? ((e = E.formatMessage(
          {
            id: `settings.hotkeySetter.changeAriaLabel`,
            defaultMessage: `Change shortcut for {hotkeyName}`,
            description: `Aria label for changing a settings hotkey`,
          },
          { hotkeyName: h },
        )),
        (t[59] = h),
        (t[60] = E),
        (t[61] = e))
      : (e = t[61]),
      (V = e));
  }
  let ke;
  t[62] !== h || t[63] !== E
    ? ((ke = E.formatMessage(
        {
          id: `settings.hotkeySetter.clearAriaLabel`,
          defaultMessage: `Clear shortcut for {hotkeyName}`,
          description: `Aria label for clearing a settings hotkey`,
        },
        { hotkeyName: h },
      )),
      (t[62] = h),
      (t[63] = E),
      (t[64] = ke))
    : (ke = t[64]);
  let Ae = ke,
    je;
  t[65] !== h || t[66] !== E
    ? ((je = E.formatMessage(
        {
          id: `settings.hotkeySetter.resetAriaLabel`,
          defaultMessage: `Reset shortcut for {hotkeyName}`,
          description: `Aria label for resetting a settings hotkey`,
        },
        { hotkeyName: h },
      )),
      (t[65] = h),
      (t[66] = E),
      (t[67] = je))
    : (je = t[67]);
  let Me = je,
    H;
  t[68] === f
    ? (H = t[69])
    : ((H = ee(`group flex min-h-8 items-center`, f)),
      (t[68] = f),
      (t[69] = H));
  let Ne = u == null ? void 0 : `group`,
    U;
  t[70] !== i || t[71] !== m
    ? ((U =
        i == null
          ? (m ??
            (0, k.jsx)(ne, {
              id: `settings.hotkeySetter.unassigned`,
              defaultMessage: `Unassigned`,
              description: `Label shown when a settings hotkey is unassigned`,
            }))
          : (0, k.jsx)(a, { className: `!px-2 !py-1 !text-sm`, keysLabel: i })),
      (t[70] = i),
      (t[71] = m),
      (t[72] = U))
    : (U = t[72]);
  let W;
  t[73] !== U || t[74] !== ce
    ? ((W = (0, k.jsx)(`span`, {
        id: ce,
        className: `flex min-h-8 items-center gap-1 text-sm text-token-text-secondary`,
        children: U,
      })),
      (t[73] = U),
      (t[74] = ce),
      (t[75] = W))
    : (W = t[75]);
  let G, K;
  t[76] !== C || t[77] !== B
    ? ((G = (e) => {
        ye(C && B && e.shiftKey);
      }),
      (K = (e) => {
        ye(C && B && e.shiftKey);
      }),
      (t[76] = C),
      (t[77] = B),
      (t[78] = G),
      (t[79] = K))
    : ((G = t[78]), (K = t[79]));
  let Pe;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = () => {
        ye(!1);
      }),
      (t[80] = Pe))
    : (Pe = t[80]);
  let q;
  t[81] !== C || t[82] !== B || t[83] !== b
    ? ((q = (e) => {
        B ? (C && e.shiftKey ? b(`append`) : b(`replace`)) : b(`set`);
      }),
      (t[81] = C),
      (t[82] = B),
      (t[83] = b),
      (t[84] = q))
    : (q = t[84]);
  let Fe;
  t[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, k.jsx)(s, { className: `icon-xs` })), (t[85] = Fe))
    : (Fe = t[85]);
  let J;
  t[86] !== T || t[87] !== V || t[88] !== G || t[89] !== K || t[90] !== q
    ? ((J = (0, k.jsx)(te, {
        "aria-label": V,
        color: `ghost`,
        disabled: T,
        size: `toolbar`,
        uniform: !0,
        onMouseEnter: G,
        onMouseMove: K,
        onMouseLeave: Pe,
        onClick: q,
        children: Fe,
      })),
      (t[86] = T),
      (t[87] = V),
      (t[88] = G),
      (t[89] = K),
      (t[90] = q),
      (t[91] = J))
    : (J = t[91]);
  let Y;
  t[92] !== V || t[93] !== J
    ? ((Y = (0, k.jsx)(n, { tooltipContent: V, children: J })),
      (t[92] = V),
      (t[93] = J),
      (t[94] = Y))
    : (Y = t[94]);
  let X;
  t[95] !== W || t[96] !== Y
    ? ((X = (0, k.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 items-center gap-1`,
        children: [W, Y],
      })),
      (t[95] = W),
      (t[96] = Y),
      (t[97] = X))
    : (X = t[97]);
  let Z;
  t[98] !== Ae || t[99] !== T || t[100] !== B || t[101] !== v
    ? ((Z = B
        ? (0, k.jsx)(n, {
            tooltipContent: Ae,
            children: (0, k.jsx)(te, {
              "aria-label": Ae,
              color: `ghost`,
              disabled: T,
              size: `toolbar`,
              uniform: !0,
              onClick: v,
              children: (0, k.jsx)(ue, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[98] = Ae),
      (t[99] = T),
      (t[100] = B),
      (t[101] = v),
      (t[102] = Z))
    : (Z = t[102]);
  let Q;
  t[103] !== T || t[104] !== y || t[105] !== Me
    ? ((Q =
        y == null
          ? null
          : (0, k.jsx)(n, {
              tooltipContent: Me,
              children: (0, k.jsx)(te, {
                "aria-label": Me,
                color: `ghost`,
                disabled: T,
                size: `toolbar`,
                uniform: !0,
                onClick: y,
                children: (0, k.jsx)(se, { className: `icon-xs` }),
              }),
            })),
      (t[103] = T),
      (t[104] = y),
      (t[105] = Me),
      (t[106] = Q))
    : (Q = t[106]);
  let $;
  t[107] !== Z || t[108] !== Q
    ? (($ = (0, k.jsxs)(`div`, {
        className: `ml-2 flex shrink-0 items-center justify-end gap-1`,
        children: [Z, Q],
      })),
      (t[107] = Z),
      (t[108] = Q),
      (t[109] = $))
    : ($ = t[109]);
  let Ie;
  return (
    t[110] !== u ||
    t[111] !== H ||
    t[112] !== Ne ||
    t[113] !== X ||
    t[114] !== $
      ? ((Ie = (0, k.jsxs)(`div`, {
          "aria-labelledby": u,
          className: H,
          role: Ne,
          children: [X, $],
        })),
        (t[110] = u),
        (t[111] = H),
        (t[112] = Ne),
        (t[113] = X),
        (t[114] = $),
        (t[115] = Ie))
      : (Ie = t[115]),
    Ie
  );
}
function ge(e) {
  e.preventDefault();
}
var _e,
  O,
  k,
  A = e(() => {
    ((_e = r()),
      m(),
      (O = t(i(), 1)),
      ie(),
      u(),
      c(),
      p(),
      re(),
      l(),
      le(),
      h(),
      _(),
      v(),
      E(),
      d(),
      (k = f()));
  });
export { E as i, A as n, pe as r, D as t };
//# sourceMappingURL=hotkey-setter-DzY2Qrcb.js.map
