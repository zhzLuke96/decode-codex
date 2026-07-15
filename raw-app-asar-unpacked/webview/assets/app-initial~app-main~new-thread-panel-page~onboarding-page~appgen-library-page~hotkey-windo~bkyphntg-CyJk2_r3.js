import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as t,
  KJ as n,
  Mq as r,
  Nq as i,
  k2 as a,
  qJ as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s(e) {
  let t = (0, c.c)(79),
    {
      title: i,
      content: a,
      customCtas: o,
      onPrimaryCtaClick: s,
      primaryCtaText: u,
      primaryCtaColor: d,
      secondaryCtaColor: f,
      onSecondaryCtaClick: p,
      onDangerCtaClick: m,
      secondaryCtaText: h,
      dangerCtaText: g,
      Icon: _,
      iconClassName: v,
      isPrimaryCtaDisabled: y,
      isSecondaryCtaDisabled: ee,
      isDangerCtaDisabled: te,
      type: b,
      layout: x,
      stackOnNarrow: S,
      ariaLive: C,
      role: w,
    } = e,
    T = y === void 0 ? !1 : y,
    E = ee === void 0 ? !1 : ee,
    D = te === void 0 ? !1 : te,
    O = b === void 0 ? `normal` : b,
    k = x === void 0 ? `horizontal` : x,
    ne = S === void 0 ? !1 : S,
    A = k === `vertical`,
    j = k === `verticalIcon`,
    M = k === `horizontal` && ne,
    N = A ? `w-full justify-end` : `shrink-0`,
    P =
      M &&
      `max-[400px]:w-full max-[400px]:shrink max-[400px]:flex-wrap max-[400px]:justify-center`,
    F;
  t[0] !== N || t[1] !== P
    ? ((F = n(`flex gap-2`, N, P)), (t[0] = N), (t[1] = P), (t[2] = F))
    : (F = t[2]);
  let I = F,
    L;
  t[3] !== I ||
  t[4] !== o ||
  t[5] !== g ||
  t[6] !== D ||
  t[7] !== T ||
  t[8] !== E ||
  t[9] !== m ||
  t[10] !== s ||
  t[11] !== p ||
  t[12] !== d ||
  t[13] !== u ||
  t[14] !== f ||
  t[15] !== h
    ? ((L = o
        ? (0, l.jsx)(`div`, { className: I, children: o })
        : (u || h || g) &&
          (0, l.jsxs)(`div`, {
            className: I,
            children: [
              u &&
                (0, l.jsx)(r, {
                  onClick: s,
                  color: d ?? `outline`,
                  className: `shrink-0`,
                  disabled: T,
                  children: u,
                }),
              h &&
                (0, l.jsx)(r, {
                  onClick: p,
                  color: f ?? `ghost`,
                  className: `shrink-0`,
                  disabled: E,
                  children: h,
                }),
              g &&
                (0, l.jsx)(r, {
                  onClick: m,
                  color: `danger`,
                  className: `shrink-0`,
                  disabled: D,
                  children: g,
                }),
            ],
          })),
      (t[3] = I),
      (t[4] = o),
      (t[5] = g),
      (t[6] = D),
      (t[7] = T),
      (t[8] = E),
      (t[9] = m),
      (t[10] = s),
      (t[11] = p),
      (t[12] = d),
      (t[13] = u),
      (t[14] = f),
      (t[15] = h),
      (t[16] = L))
    : (L = t[16]);
  let R = L,
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K;
  if (
    t[17] !== _ ||
    t[18] !== C ||
    t[19] !== a ||
    t[20] !== R ||
    t[21] !== v ||
    t[22] !== A ||
    t[23] !== j ||
    t[24] !== w ||
    t[25] !== M ||
    t[26] !== i ||
    t[27] !== O
  ) {
    K = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = {
          error: `border-token-error-foreground/20 text-token-error-foreground`,
          infoAccent: `border-token-text-link-foreground/40 text-token-foreground`,
          normal: `border-token-input-border text-token-foreground`,
          warning: `border-token-editor-warning-foreground/30 text-token-foreground`,
        }[O],
        r = {
          error: `bg-token-input-validation-error-background/20`,
          infoAccent: `bg-token-input-background`,
          normal: `bg-token-input-background`,
          warning: `bg-token-input-validation-warning-background/30`,
        }[O],
        o = n(
          `icon-sm shrink-0`,
          O === `infoAccent` && `text-token-text-link-foreground`,
          O === `warning` && `text-token-editor-warning-foreground`,
          v,
        ),
        s = n(`absolute inset-0 -z-10`, r),
        c;
      t[36] === s
        ? (c = t[37])
        : ((c = (0, l.jsx)(`div`, { "aria-hidden": !0, className: s })),
          (t[36] = s),
          (t[37] = c));
      let u = c,
        d = n(
          `relative isolate flex w-full overflow-hidden rounded-2xl border bg-token-main-surface-primary py-2 pl-3 pr-2 text-sm shadow-xs lg:mx-auto electron:border-0 electron:ring-[0.5px] electron:ring-token-border-heavy`,
          e,
        ),
        f = () =>
          (0, l.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [
              _ && (0, l.jsx)(_, { className: o }),
              i &&
                (0, l.jsx)(`h3`, {
                  className: `text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold`,
                  children: i,
                }),
            ],
          }),
        p;
      if (
        (t[38] !== a || t[39] !== i || t[40] !== O
          ? ((p = (e) =>
              (0, l.jsx)(`div`, {
                className: n(`flex min-w-0 flex-1 flex-col`, e),
                children: (0, l.jsx)(`div`, {
                  className: n(
                    `electron:leading-relaxed min-w-0 flex-1 text-pretty`,
                    i
                      ? O === `error`
                        ? `text-token-error-foreground`
                        : `text-token-description-foreground`
                      : ``,
                  ),
                  children: a,
                }),
              })),
            (t[38] = a),
            (t[39] = i),
            (t[40] = O),
            (t[41] = p))
          : (p = t[41]),
        (z = p),
        A)
      ) {
        let e = n(d, `flex-col gap-1.5`),
          r;
        t[42] !== _ || t[43] !== f || t[44] !== i
          ? ((r = (_ || i) && f()),
            (t[42] = _),
            (t[43] = f),
            (t[44] = i),
            (t[45] = r))
          : (r = t[45]);
        let a;
        (t[46] === z
          ? (a = t[47])
          : ((a = z(`gap-1.5`)), (t[46] = z), (t[47] = a)),
          (K = (0, l.jsxs)(`aside`, {
            "aria-live": C,
            className: e,
            role: w,
            children: [u, r, a, R],
          })));
        break bb0;
      }
      if (j) {
        let e = n(d, `gap-3`),
          r;
        t[48] === i
          ? (r = t[49])
          : ((r = i
              ? (0, l.jsx)(`h3`, {
                  className: `text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold`,
                  children: i,
                })
              : null),
            (t[48] = i),
            (t[49] = r));
        let a;
        t[50] === z ? (a = t[51]) : ((a = z()), (t[50] = z), (t[51] = a));
        let s;
        (t[52] !== R || t[53] !== r || t[54] !== a
          ? ((s = (0, l.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 flex-col gap-1.5`,
              children: [r, a, R],
            })),
            (t[52] = R),
            (t[53] = r),
            (t[54] = a),
            (t[55] = s))
          : (s = t[55]),
          (K = (0, l.jsxs)(`aside`, {
            "aria-live": C,
            className: e,
            role: w,
            children: [
              u,
              _
                ? (0, l.jsx)(`div`, {
                    className: `flex items-center self-center`,
                    children: (0, l.jsx)(_, { className: o }),
                  })
                : null,
              s,
            ],
          })));
        break bb0;
      }
      ((H = C),
        (U = n(
          d,
          `items-center gap-4`,
          M && `max-[400px]:items-start max-[400px]:gap-2`,
        )),
        (W = w),
        (G = u));
      let m = M && `max-[400px]:items-start`;
      (t[56] === m
        ? (B = t[57])
        : ((B = n(`flex h-full w-full items-center gap-2`, m)),
          (t[56] = m),
          (t[57] = B)),
        (V =
          _ && (0, l.jsx)(_, { className: n(o, M && `max-[400px]:hidden`) })));
    }
    ((t[17] = _),
      (t[18] = C),
      (t[19] = a),
      (t[20] = R),
      (t[21] = v),
      (t[22] = A),
      (t[23] = j),
      (t[24] = w),
      (t[25] = M),
      (t[26] = i),
      (t[27] = O),
      (t[28] = z),
      (t[29] = B),
      (t[30] = V),
      (t[31] = H),
      (t[32] = U),
      (t[33] = W),
      (t[34] = G),
      (t[35] = K));
  } else
    ((z = t[28]),
      (B = t[29]),
      (V = t[30]),
      (H = t[31]),
      (U = t[32]),
      (W = t[33]),
      (G = t[34]),
      (K = t[35]));
  if (K !== Symbol.for(`react.early_return_sentinel`)) return K;
  let q =
      M && `max-[400px]:flex-col max-[400px]:items-stretch max-[400px]:gap-2`,
    J;
  t[58] === q
    ? (J = t[59])
    : ((J = n(
        `flex min-w-0 grow flex-row items-center justify-between gap-2`,
        q,
      )),
      (t[58] = q),
      (t[59] = J));
  let Y;
  t[60] === i
    ? (Y = t[61])
    : ((Y =
        i &&
        (0, l.jsx)(`h3`, {
          className: `text-sm font-bold text-pretty`,
          children: i,
        })),
      (t[60] = i),
      (t[61] = Y));
  let X;
  t[62] === z ? (X = t[63]) : ((X = z()), (t[62] = z), (t[63] = X));
  let Z;
  t[64] !== R || t[65] !== J || t[66] !== Y || t[67] !== X
    ? ((Z = (0, l.jsxs)(`div`, { className: J, children: [Y, X, R] })),
      (t[64] = R),
      (t[65] = J),
      (t[66] = Y),
      (t[67] = X),
      (t[68] = Z))
    : (Z = t[68]);
  let Q;
  t[69] !== B || t[70] !== V || t[71] !== Z
    ? ((Q = (0, l.jsxs)(`div`, { className: B, children: [V, Z] })),
      (t[69] = B),
      (t[70] = V),
      (t[71] = Z),
      (t[72] = Q))
    : (Q = t[72]);
  let $;
  return (
    t[73] !== H || t[74] !== U || t[75] !== W || t[76] !== G || t[77] !== Q
      ? (($ = (0, l.jsxs)(`aside`, {
          "aria-live": H,
          className: U,
          role: W,
          children: [G, Q],
        })),
        (t[73] = H),
        (t[74] = U),
        (t[75] = W),
        (t[76] = G),
        (t[77] = Q),
        (t[78] = $))
      : ($ = t[78]),
    $
  );
}
var c,
  l,
  u = e(() => {
    ((c = t()), o(), i(), (l = a()));
  });
export { u as n, s as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~bkyphntg-CyJk2_r3.js.map
