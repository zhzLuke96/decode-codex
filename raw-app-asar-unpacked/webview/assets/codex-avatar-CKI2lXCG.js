import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AJ as n,
  DJ as r,
  I2 as i,
  KJ as a,
  L2 as o,
  k2 as s,
  qJ as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { lr as l, ur as u } from "./app-initial~app-main~page-hSvsQcNf.js";
var d,
  f = e(() => {
    d = `` + new URL(`bsod-spritesheet-v5-DMVBNs4E.webp`, import.meta.url).href;
  }),
  p,
  m = e(() => {
    p =
      `` + new URL(`codex-spritesheet-v6-BRBFriCM.webp`, import.meta.url).href;
  }),
  h,
  g = e(() => {
    h =
      `` + new URL(`dewey-spritesheet-v5-D1KFAW8x.webp`, import.meta.url).href;
  }),
  _,
  v = e(() => {
    _ =
      `` +
      new URL(`fireball-spritesheet-v5-CcKkFG0_.webp`, import.meta.url).href;
  }),
  y,
  b = e(() => {
    y =
      `` + new URL(`hoots-spritesheet-v8-hys0ZOs6.webp`, import.meta.url).href;
  }),
  x,
  S = e(() => {
    x =
      `` +
      new URL(`null-signal-spritesheet-v7-B59v4kgD.webp`, import.meta.url).href;
  }),
  C,
  w = e(() => {
    C =
      `` + new URL(`rocky-spritesheet-v5-CXtdFM3V.webp`, import.meta.url).href;
  }),
  T,
  E = e(() => {
    T =
      `` + new URL(`seedy-spritesheet-v10-A9vkGoq7.webp`, import.meta.url).href;
  }),
  D,
  O = e(() => {
    D =
      `` + new URL(`stacky-spritesheet-v6-Y0DWcgq_.webp`, import.meta.url).href;
  });
function k(e) {
  let t = (0, N.c)(8),
    {
      avatarRef: n,
      isAnimationEnabled: r,
      lookFrame: i,
      prefersReducedMotion: a,
      spriteRowCount: o,
      state: s,
    } = e,
    c = r === void 0 ? !0 : r,
    l = i === void 0 ? null : i,
    u = o === void 0 ? F : o,
    d = s === void 0 ? `idle` : s,
    f,
    p;
  (t[0] !== n ||
  t[1] !== c ||
  t[2] !== l ||
  t[3] !== a ||
  t[4] !== u ||
  t[5] !== d
    ? ((f = () => {
        let e = n.current;
        if (e == null) return;
        if (l != null) {
          e.style.backgroundPosition = M(l, u);
          return;
        }
        let t = A(d, a || !c),
          r = t.frames,
          i = 0,
          o = null;
        if (((e.style.backgroundPosition = M(r[i], u)), r.length === 1)) return;
        let s = () => {
          o = window.setTimeout(() => {
            let n = i + 1;
            if (n >= r.length) {
              if (t.loopStartIndex != null) {
                ((i = t.loopStartIndex),
                  (e.style.backgroundPosition = M(r[i], u)),
                  s());
                return;
              }
              o = null;
              return;
            }
            ((i = n), (e.style.backgroundPosition = M(r[i], u)), s());
          }, r[i].frameDurationMs);
        };
        return (
          s(),
          () => {
            o != null && window.clearTimeout(o);
          }
        );
      }),
      (p = [n, c, l, a, u, d]),
      (t[0] = n),
      (t[1] = c),
      (t[2] = l),
      (t[3] = a),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p))
    : ((f = t[6]), (p = t[7])),
    (0, P.useEffect)(f, p));
}
function A(e, t) {
  let n = z[e];
  if (t) return { frames: [n[0]], loopStartIndex: null };
  if (e === `idle`) return { frames: R, loopStartIndex: 0 };
  let r = [...n, ...n, ...n];
  return { frames: [...r, ...R], loopStartIndex: r.length };
}
function j(e, t, n, r) {
  return Array.from({ length: t }, (i, a) => ({
    columnIndex: a,
    frameDurationMs: a === t - 1 ? r : n,
    rowIndex: e,
  }));
}
function M(e, t = F) {
  return `${(e.columnIndex / 7) * 100}% ${(e.rowIndex / (t - 1)) * 100}%`;
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    ((N = i()),
      (P = t(o(), 1)),
      u(),
      (F = l()),
      (I = 6),
      (L = [
        { rowIndex: 0, columnIndex: 0, frameDurationMs: 280 },
        { rowIndex: 0, columnIndex: 1, frameDurationMs: 110 },
        { rowIndex: 0, columnIndex: 2, frameDurationMs: 110 },
        { rowIndex: 0, columnIndex: 3, frameDurationMs: 140 },
        { rowIndex: 0, columnIndex: 4, frameDurationMs: 140 },
        { rowIndex: 0, columnIndex: 5, frameDurationMs: 320 },
      ]),
      (R = L.map((e) => ({ ...e, frameDurationMs: e.frameDurationMs * I }))),
      (z = {
        failed: j(5, 8, 140, 240),
        idle: L,
        jumping: j(4, 5, 140, 280),
        review: j(8, 6, 150, 280),
        running: j(7, 6, 120, 220),
        "running-left": j(2, 8, 120, 220),
        "running-right": j(1, 8, 120, 220),
        waving: j(3, 4, 140, 280),
        waiting: j(6, 6, 150, 260),
      }));
  }),
  V = e(() => {});
function H(e) {
  let t = (0, G.c)(17),
    {
      assetRef: r,
      className: i,
      lookFrame: o,
      spriteVersionNumber: s,
      spritesheetUrl: c,
      state: u,
    } = e,
    d = u === void 0 ? `idle` : u,
    f = (0, K.useRef)(null),
    p = n(),
    m;
  t[0] === r ? (m = t[1]) : ((m = U(r)), (t[0] = r), (t[1] = m));
  let h = m,
    g = l(s ?? (c == null ? 2 : 1)),
    _;
  (t[2] !== o || t[3] !== p || t[4] !== g || t[5] !== d
    ? ((_ = {
        avatarRef: f,
        lookFrame: o,
        prefersReducedMotion: p,
        spriteRowCount: g,
        state: d,
      }),
      (t[2] = o),
      (t[3] = p),
      (t[4] = g),
      (t[5] = d),
      (t[6] = _))
    : (_ = t[6]),
    k(_));
  let v;
  t[7] === i
    ? (v = t[8])
    : ((v = a(`codex-avatar-root`, i)), (t[7] = i), (t[8] = v));
  let y = `url(${c ?? J[h]})`,
    b = `800% ${g * 100}%`,
    x;
  t[9] !== y || t[10] !== b
    ? ((x = { backgroundImage: y, backgroundSize: b }),
      (t[9] = y),
      (t[10] = b),
      (t[11] = x))
    : (x = t[11]);
  let S;
  return (
    t[12] !== h || t[13] !== d || t[14] !== v || t[15] !== x
      ? ((S = (0, q.jsx)(`div`, {
          ref: f,
          className: v,
          "data-avatar-asset-ref": h,
          "data-avatar-state": d,
          style: x,
          "aria-hidden": `true`,
          "data-testid": `codex-avatar`,
        })),
        (t[12] = h),
        (t[13] = d),
        (t[14] = v),
        (t[15] = x),
        (t[16] = S))
      : (S = t[16]),
    S
  );
}
function U(e) {
  return W(e) ? e : `codex`;
}
function W(e) {
  return e != null && Object.hasOwn(J, e);
}
var G,
  K,
  q,
  J,
  Y = e(() => {
    ((G = i()),
      c(),
      r(),
      (K = t(o(), 1)),
      f(),
      m(),
      g(),
      v(),
      b(),
      S(),
      w(),
      E(),
      O(),
      B(),
      u(),
      V(),
      (q = s()),
      (J = {
        bsod: d,
        codex: p,
        dewey: h,
        fireball: _,
        hoots: y,
        "null-signal": x,
        rocky: C,
        seedy: T,
        stacky: D,
      }));
  });
export { Y as n, H as t };
//# sourceMappingURL=codex-avatar-CKI2lXCG.js.map
