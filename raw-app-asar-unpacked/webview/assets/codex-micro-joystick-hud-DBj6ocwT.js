import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as t,
  C0 as n,
  I2 as r,
  KJ as i,
  Qs as a,
  _0 as o,
  _Y as s,
  k2 as c,
  mY as l,
  pY as ee,
  qJ as u,
  yY as te,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $l as d,
  Ql as ne,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  m as f,
  p as re,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  i as p,
  l as m,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ksbzhge1-nyqcMWLP.js";
import { r as h, t as g } from "./codex-micro-joystick-feedback-BNVBQ7G1.js";
import { n as _, t as ie } from "./codex-micro-analog-action-title-B2khULY9.js";
function v() {
  let e = (0, b.c)(4),
    r = n(g),
    i = n(p),
    { skills: a } = t(),
    o;
  return (
    e[0] !== r || e[1] !== i || e[2] !== a
      ? ((o = (0, x.jsx)(y, {
          feedback: r,
          isMappingEditorOpen: i,
          skills: a,
        })),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a),
        (e[3] = o))
      : (o = e[3]),
    o
  );
}
function y(e) {
  let t = (0, b.c)(72),
    { feedback: n, isMappingEditorOpen: r, skills: a } = e,
    o = te(),
    c = n.visible && !r,
    l = n.event.angle * Math.PI * 2,
    ee = Math.min(n.event.distance, 1) * 13,
    u = n.status === `game-gesture`,
    d = u
      ? (n.gameActivationProgress ?? 0)
      : Math.min(n.event.distance / 0.5, 1),
    f;
  t[0] !== n.action || t[1] !== o || t[2] !== u || t[3] !== a
    ? ((f = u
        ? (0, x.jsx)(s, { ...S.miniGameTitle })
        : n.action == null
          ? (0, x.jsx)(s, {
              id: `codexMicro.joystickFeedback.unassignedTitle`,
              defaultMessage: `Unassigned`,
              description: `Action title shown for an unassigned Codex Micro joystick direction`,
            })
          : ie(n.action, a, o)),
      (t[0] = n.action),
      (t[1] = o),
      (t[2] = u),
      (t[3] = a),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    m = S[n.status];
  n.status === `tracking` && n.action == null && (m = S.unassignedTracking);
  let h = n.status === `triggered`,
    g = n.status === `unavailable`,
    _ = h || u,
    v = !c,
    y = c ? `translate-y-0 opacity-100` : `-translate-y-1 opacity-0`,
    C;
  t[5] === y
    ? (C = t[6])
    : ((C = i(
        `pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity`,
        y,
      )),
      (t[5] = y),
      (t[6] = C));
  let se = n.status,
    w =
      _ &&
      `border-token-text-link-foreground/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]`,
    T = g && `border-token-editor-warning-foreground/35`,
    E = !_ && !g && `border-token-border`,
    D;
  t[7] !== w || t[8] !== T || t[9] !== E
    ? ((D = i(
        `flex items-center gap-3 rounded-2xl border bg-token-dropdown-background/95 p-2.5 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-basic ease-out`,
        w,
        T,
        E,
      )),
      (t[7] = w),
      (t[8] = T),
      (t[9] = E),
      (t[10] = D))
    : (D = t[10]);
  let ce = _
      ? `border-token-text-link-foreground/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]`
      : `border-token-border`,
    O;
  t[11] === ce
    ? (O = t[12])
    : ((O = i(
        `relative size-14 shrink-0 overflow-hidden rounded-full border bg-token-main-surface-secondary shadow-inner transition-[border-color,box-shadow] duration-basic ease-out`,
        ce,
      )),
      (t[11] = ce),
      (t[12] = O));
  let k, A, j;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, x.jsx)(`div`, {
        className: `absolute inset-[1.15rem] rounded-full border border-token-border/70`,
      })),
      (A = (0, x.jsx)(`div`, {
        className: `absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-token-border/45`,
      })),
      (j = (0, x.jsx)(`div`, {
        className: `absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-token-border/45`,
      })),
      (t[13] = k),
      (t[14] = A),
      (t[15] = j))
    : ((k = t[13]), (A = t[14]), (j = t[15]));
  let M =
      _ &&
      `bg-token-text-link-foreground shadow-[0_0_9px_rgba(91,141,235,0.72)]`,
    N = g && `bg-token-editor-warning-foreground`,
    P = !_ && !g && `bg-token-foreground`,
    F;
  t[16] !== M || t[17] !== N || t[18] !== P
    ? ((F = i(
        `absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none`,
        M,
        N,
        P,
      )),
      (t[16] = M),
      (t[17] = N),
      (t[18] = P),
      (t[19] = F))
    : (F = t[19]);
  let I = `translate(${Math.cos(l) * ee}px, ${Math.sin(l) * ee}px)`,
    L;
  t[20] === I
    ? (L = t[21])
    : ((L = { transform: I }), (t[20] = I), (t[21] = L));
  let R;
  t[22] !== F || t[23] !== L
    ? ((R = (0, x.jsx)(`div`, { className: F, style: L })),
      (t[22] = F),
      (t[23] = L),
      (t[24] = R))
    : (R = t[24]);
  let z;
  t[25] !== O || t[26] !== R
    ? ((z = (0, x.jsxs)(`div`, { className: O, children: [k, A, j, R] })),
      (t[25] = O),
      (t[26] = R),
      (t[27] = z))
    : (z = t[27]);
  let B;
  t[28] !== n.direction || t[29] !== u
    ? ((B = (0, x.jsx)(`div`, {
        className: `flex items-center gap-1.5 text-[11px] font-medium text-token-text-tertiary`,
        children: u
          ? (0, x.jsx)(s, { ...S.gameGesture })
          : (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)(ne, {
                  className: i(`size-3 shrink-0`, ae[n.direction]),
                }),
                (0, x.jsx)(`span`, {
                  children: (0, x.jsx)(s, { ...S[n.direction] }),
                }),
              ],
            }),
      })),
      (t[28] = n.direction),
      (t[29] = u),
      (t[30] = B))
    : (B = t[30]);
  let V;
  t[31] === p
    ? (V = t[32])
    : ((V = (0, x.jsx)(`div`, {
        className: `line-clamp-2 text-sm leading-4 font-medium text-token-text-primary`,
        children: p,
      })),
      (t[31] = p),
      (t[32] = V));
  let H = oe[n.status],
    U;
  t[33] === H
    ? (U = t[34])
    : ((U = i(`flex min-h-4 items-center gap-1.5 text-xs`, H)),
      (t[33] = H),
      (t[34] = U));
  let W;
  t[35] === h
    ? (W = t[36])
    : ((W = h
        ? (0, x.jsx)(re, { className: `size-3 shrink-0` })
        : (0, x.jsx)(`span`, {
            className: `size-1.5 shrink-0 rounded-full bg-current opacity-70`,
          })),
      (t[35] = h),
      (t[36] = W));
  let G;
  t[37] !== o || t[38] !== u || t[39] !== d
    ? ((G = u ? { progress: o.formatNumber(d, { style: `percent` }) } : void 0),
      (t[37] = o),
      (t[38] = u),
      (t[39] = d),
      (t[40] = G))
    : (G = t[40]);
  let K;
  t[41] !== m || t[42] !== G
    ? ((K = (0, x.jsx)(s, { ...m, values: G })),
      (t[41] = m),
      (t[42] = G),
      (t[43] = K))
    : (K = t[43]);
  let q;
  t[44] !== U || t[45] !== W || t[46] !== K
    ? ((q = (0, x.jsxs)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: U,
        children: [W, K],
      })),
      (t[44] = U),
      (t[45] = W),
      (t[46] = K),
      (t[47] = q))
    : (q = t[47]);
  let le = _ && `bg-token-text-link-foreground`,
    ue = g && `bg-token-editor-warning-foreground`,
    de = !_ && !g && `bg-token-text-tertiary/55`,
    J;
  t[48] !== le || t[49] !== ue || t[50] !== de
    ? ((J = i(
        `h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none`,
        le,
        ue,
        de,
      )),
      (t[48] = le),
      (t[49] = ue),
      (t[50] = de),
      (t[51] = J))
    : (J = t[51]);
  let fe = `scaleX(${d})`,
    Y;
  t[52] === fe
    ? (Y = t[53])
    : ((Y = { transform: fe }), (t[52] = fe), (t[53] = Y));
  let X;
  t[54] !== J || t[55] !== Y
    ? ((X = (0, x.jsx)(`div`, {
        className: `bg-token-main-surface-secondary h-0.5 overflow-hidden rounded-full`,
        children: (0, x.jsx)(`div`, { className: J, style: Y }),
      })),
      (t[54] = J),
      (t[55] = Y),
      (t[56] = X))
    : (X = t[56]);
  let Z;
  t[57] !== B || t[58] !== V || t[59] !== q || t[60] !== X
    ? ((Z = (0, x.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1.5`,
        children: [B, V, q, X],
      })),
      (t[57] = B),
      (t[58] = V),
      (t[59] = q),
      (t[60] = X),
      (t[61] = Z))
    : (Z = t[61]);
  let Q;
  t[62] !== z || t[63] !== Z || t[64] !== D
    ? ((Q = (0, x.jsxs)(`div`, { className: D, children: [z, Z] })),
      (t[62] = z),
      (t[63] = Z),
      (t[64] = D),
      (t[65] = Q))
    : (Q = t[65]);
  let $;
  return (
    t[66] !== n.status ||
    t[67] !== v ||
    t[68] !== Q ||
    t[69] !== C ||
    t[70] !== c
      ? (($ = (0, x.jsx)(`div`, {
          "aria-hidden": v,
          className: C,
          "data-status": se,
          "data-visible": c,
          children: Q,
        })),
        (t[66] = n.status),
        (t[67] = v),
        (t[68] = Q),
        (t[69] = C),
        (t[70] = c),
        (t[71] = $))
      : ($ = t[71]),
    $
  );
}
var b, x, ae, oe, S;
e(() => {
  ((b = r()),
    u(),
    o(),
    l(),
    m(),
    d(),
    f(),
    a(),
    _(),
    h(),
    (x = c()),
    (ae = {
      up: ``,
      right: `rotate-90`,
      down: `rotate-180`,
      left: `-rotate-90`,
    }),
    (oe = {
      "game-gesture": `text-token-text-link-foreground`,
      tracking: `text-token-text-secondary`,
      triggered: `text-token-text-link-foreground`,
      unassigned: `text-token-text-secondary`,
      unavailable: `text-token-editor-warning-foreground`,
    }),
    (S = ee({
      miniGameTitle: {
        id: `codexMicro.joystickFeedback.miniGameTitle`,
        defaultMessage: `Mini-game`,
        description: `Title shown while the Codex Micro mini-game activation gesture is in progress`,
      },
      gameGesture: {
        id: `codexMicro.joystickFeedback.gameGesture`,
        defaultMessage: `Secret game`,
        description: `Category label shown while the Codex Micro mini-game activation gesture is in progress`,
      },
      "game-gesture": {
        id: `codexMicro.joystickFeedback.gameGestureProgress`,
        defaultMessage: `Keep circling · {progress}`,
        description: `Progress shown while circling the Codex Micro joystick to activate a mini-game`,
      },
      up: {
        id: `codexMicro.joystickFeedback.up`,
        defaultMessage: `Up`,
        description: `Up direction in the Codex Micro joystick feedback HUD`,
      },
      right: {
        id: `codexMicro.joystickFeedback.right`,
        defaultMessage: `Right`,
        description: `Right direction in the Codex Micro joystick feedback HUD`,
      },
      down: {
        id: `codexMicro.joystickFeedback.down`,
        defaultMessage: `Down`,
        description: `Down direction in the Codex Micro joystick feedback HUD`,
      },
      left: {
        id: `codexMicro.joystickFeedback.left`,
        defaultMessage: `Left`,
        description: `Left direction in the Codex Micro joystick feedback HUD`,
      },
      tracking: {
        id: `codexMicro.joystickFeedback.tracking`,
        defaultMessage: `Move farther to trigger`,
        description: `Feedback shown while moving the Codex Micro joystick toward an assigned action`,
      },
      triggered: {
        id: `codexMicro.joystickFeedback.triggered`,
        defaultMessage: `Triggered`,
        description: `Feedback shown when a Codex Micro joystick action has been dispatched`,
      },
      unassigned: {
        id: `codexMicro.joystickFeedback.unassigned`,
        defaultMessage: `Direction reached`,
        description: `Feedback shown when the Codex Micro joystick reaches an unassigned direction`,
      },
      unavailable: {
        id: `codexMicro.joystickFeedback.unavailable`,
        defaultMessage: `Shortcut unavailable`,
        description: `Feedback shown when a Codex Micro joystick action cannot be dispatched`,
      },
      unassignedTracking: {
        id: `codexMicro.joystickFeedback.unassignedTracking`,
        defaultMessage: `No shortcut configured`,
        description: `Feedback shown while moving the Codex Micro joystick toward an unassigned direction`,
      },
    })));
})();
export { v as CodexMicroJoystickHud };
//# sourceMappingURL=codex-micro-joystick-hud-DBj6ocwT.js.map
