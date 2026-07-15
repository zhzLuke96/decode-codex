import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $C as n,
  AY as r,
  Aw as i,
  C0 as ee,
  I2 as a,
  L2 as o,
  MU as s,
  NT as te,
  NU as c,
  WT as ne,
  _0 as l,
  aG as u,
  dT as d,
  hw as re,
  iw as f,
  jT as ie,
  jw as ae,
  oZ as p,
  rG as m,
  sG as oe,
  tG as se,
  x0 as h,
  x2 as g,
  y2 as _,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function v(e) {
  let t = (0, y.c)(67),
    { conversationId: r, hostId: i } = e,
    a = r === void 0 ? null : r,
    o = u(`1444479692`),
    s = oe(),
    l = ae(),
    d = ee(ne),
    f;
  t[0] !== i || t[1] !== d
    ? ((f = d.includes(i)), (t[0] = i), (t[1] = d), (t[2] = f))
    : (f = t[2]);
  let m = f,
    { data: _, isLoading: v } = h(re, i),
    w = h(ie, a),
    T = h(te, a),
    E = _?.config?.[x],
    D;
  t[3] === E ? (D = t[4]) : ((D = p(E)), (t[3] = E), (t[4] = D));
  let O = D,
    k = _?.config?.[S],
    A;
  t[5] === k ? (A = t[6]) : ((A = p(k)), (t[5] = k), (t[6] = A));
  let j = A,
    M;
  t[7] === _
    ? (M = t[8])
    : ((M =
        _?.config != null && Object.prototype.hasOwnProperty.call(_.config, S)),
      (t[7] = _),
      (t[8] = M));
  let N = M,
    P = !1,
    F;
  if (t[9] !== s || t[10] !== O || t[11] !== o || t[12] !== v || t[13] !== j) {
    if (((F = O ?? j), !o)) F = null;
    else if (((P = !v && F == null), P)) {
      let e;
      (t[16] === s
        ? (e = t[17])
        : ((e = p(se(s, `1867347216`).get(C, null))), (t[16] = s), (t[17] = e)),
        (F = e ?? `friendly`));
    }
    ((t[9] = s),
      (t[10] = O),
      (t[11] = o),
      (t[12] = v),
      (t[13] = j),
      (t[14] = F),
      (t[15] = P));
  } else ((F = t[14]), (P = t[15]));
  let I = F;
  (a != null && w?.personality !== void 0
    ? (I = w.personality)
    : a != null && T?.params.personality != null && (I = T.params.personality),
    o || (I = null));
  let L = (0, b.useRef)(null),
    R;
  t[18] === l
    ? (R = t[19])
    : ((R = async () => {
        await Promise.all([l(n), l([`user-saved-config`])]);
      }),
      (t[18] = l),
      (t[19] = R));
  let z = R,
    B;
  t[20] !== i ||
  t[21] !== m ||
  t[22] !== _?.configWriteTarget?.expectedVersion ||
  t[23] !== _?.configWriteTarget?.filePath
    ? ((B = async (e) => {
        m &&
          (await c(`batch-write-config-value`, {
            hostId: i,
            edits: [{ keyPath: x, value: e, mergeStrategy: `upsert` }],
            filePath: _?.configWriteTarget?.filePath ?? null,
            expectedVersion: _?.configWriteTarget?.expectedVersion ?? null,
          }));
      }),
      (t[20] = i),
      (t[21] = m),
      (t[22] = _?.configWriteTarget?.expectedVersion),
      (t[23] = _?.configWriteTarget?.filePath),
      (t[24] = B))
    : (B = t[24]);
  let V;
  t[25] !== z || t[26] !== B
    ? ((V = { mutationFn: B, onSettled: z }),
      (t[25] = z),
      (t[26] = B),
      (t[27] = V))
    : (V = t[27]);
  let H = g(V),
    U;
  t[28] !== O ||
  t[29] !== N ||
  t[30] !== i ||
  t[31] !== m ||
  t[32] !== j ||
  t[33] !== _?.configWriteTarget?.expectedVersion ||
  t[34] !== _?.configWriteTarget?.filePath
    ? ((U = async () => {
        if (!m || !N) return;
        let e = [{ keyPath: S, value: null, mergeStrategy: `replace` }];
        (O == null &&
          j != null &&
          e.unshift({ keyPath: x, value: j, mergeStrategy: `upsert` }),
          await c(`batch-write-config-value`, {
            hostId: i,
            edits: e,
            filePath: _?.configWriteTarget?.filePath ?? null,
            expectedVersion: _?.configWriteTarget?.expectedVersion ?? null,
          }));
      }),
      (t[28] = O),
      (t[29] = N),
      (t[30] = i),
      (t[31] = m),
      (t[32] = j),
      (t[33] = _?.configWriteTarget?.expectedVersion),
      (t[34] = _?.configWriteTarget?.filePath),
      (t[35] = U))
    : (U = t[35]);
  let W;
  t[36] !== z || t[37] !== U
    ? ((W = { mutationFn: U, onSettled: z }),
      (t[36] = z),
      (t[37] = U),
      (t[38] = W))
    : (W = t[38]);
  let G = g(W),
    K,
    q;
  (t[39] !== G || t[40] !== N || t[41] !== i || t[42] !== m
    ? ((K = () => {
        !m || !N || L.current === i || ((L.current = i), G.mutate());
      }),
      (q = [G, N, i, m]),
      (t[39] = G),
      (t[40] = N),
      (t[41] = i),
      (t[42] = m),
      (t[43] = K),
      (t[44] = q))
    : ((K = t[43]), (q = t[44])),
    (0, b.useEffect)(K, q));
  let J;
  t[45] !== F || t[46] !== i || t[47] !== m || t[48] !== v
    ? ((J = () => {
        v || !m || c(`set-personality`, { hostId: i, personality: F });
      }),
      (t[45] = F),
      (t[46] = i),
      (t[47] = m),
      (t[48] = v),
      (t[49] = J))
    : (J = t[49]);
  let Y = (0, b.useEffectEvent)(J),
    X;
  t[50] === Y
    ? (X = t[51])
    : ((X = () => {
        Y();
      }),
      (t[50] = Y),
      (t[51] = X));
  let Z;
  (t[52] !== F || t[53] !== i || t[54] !== m || t[55] !== v || t[56] !== P
    ? ((Z = [i, m, v, F, P]),
      (t[52] = F),
      (t[53] = i),
      (t[54] = m),
      (t[55] = v),
      (t[56] = P),
      (t[57] = Z))
    : (Z = t[57]),
    (0, b.useEffect)(X, Z));
  let Q;
  t[58] !== a || t[59] !== i || t[60] !== m || t[61] !== H
    ? ((Q = (e) => {
        m &&
          (Promise.all([
            c(`set-personality`, { hostId: i, personality: e }),
            ...(a == null
              ? []
              : [
                  c(`update-thread-settings-for-next-turn`, {
                    conversationId: a,
                    threadSettings: { personality: e },
                  }),
                ]),
          ]),
          H.mutate(e));
      }),
      (t[58] = a),
      (t[59] = i),
      (t[60] = m),
      (t[61] = H),
      (t[62] = Q))
    : (Q = t[62]);
  let $;
  return (
    t[63] !== o || t[64] !== I || t[65] !== Q
      ? (($ = { isPersonalityEnabled: o, personality: I, setPersonality: Q }),
        (t[63] = o),
        (t[64] = I),
        (t[65] = Q),
        (t[66] = $))
      : ($ = t[66]),
    $
  );
}
var y,
  b,
  x,
  S,
  C,
  w = e(() => {
    ((y = a()),
      _(),
      l(),
      r(),
      (b = t(o(), 1)),
      d(),
      s(),
      f(),
      i(),
      m(),
      (x = `personality`),
      (S = `model_personality`),
      (C = `default_personality`));
  });
export { v as n, w as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~bbivyyd4-ByHjhhS9.js.map
