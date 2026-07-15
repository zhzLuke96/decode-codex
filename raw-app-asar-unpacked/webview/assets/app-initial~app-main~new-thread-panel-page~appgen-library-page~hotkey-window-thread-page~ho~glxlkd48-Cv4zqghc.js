import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as n,
  CJ as r,
  Cb as i,
  I2 as a,
  L2 as o,
  S0 as s,
  T2 as c,
  VW as l,
  WW as u,
  _0 as d,
  aG as f,
  aJ as p,
  bJ as m,
  cJ as h,
  cS as g,
  cY as _,
  d2 as v,
  dJ as y,
  fJ as b,
  h2 as x,
  jb as S,
  lS as C,
  lv as w,
  m2 as T,
  oJ as E,
  rG as D,
  s2 as O,
  sY as k,
  sv as A,
  uJ as j,
  wJ as M,
  y2 as N,
  yJ as P,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function F() {
  let e = (0, z.c)(6),
    { authMethod: t } = C(),
    r = T(V),
    i = n(H);
  if (t !== `chatgpt`) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = { access: `disabled` }), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let a = i ?? `loading`;
  if ((a === `loading` || a === `error`) && r != null) {
    let t;
    return (
      e[2] === r ? (t = e[3]) : ((t = { access: r }), (e[2] = r), (e[3] = t)),
      t
    );
  }
  let o;
  return (
    e[4] === a ? (o = e[5]) : ((o = { access: a }), (e[4] = a), (e[5] = o)),
    o
  );
}
function I() {
  return (L(), null);
}
function L(e) {
  let t = (0, z.c)(14),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: r } = n,
    i = r === void 0 ? !0 : r,
    a = s(k),
    { authMethod: o } = C(),
    u = x(V),
    d = i && o === `chatgpt`,
    p;
  t[2] === d
    ? (p = t[3])
    : ((p = { queryConfig: { enabled: d } }), (t[2] = d), (t[3] = p));
  let { data: m, isLoading: g, isError: _ } = E(`account-info`, p),
    v = m?.plan ?? void 0,
    b = w(v),
    T;
  t[4] === m?.accountId
    ? (T = t[5])
    : ((T = async () =>
        l.safeGet(`/accounts/{account_id}/settings`, {
          parameters: { path: { account_id: m?.accountId ?? `` } },
        })),
      (t[4] = m?.accountId),
      (t[5] = T));
  let {
      data: D,
      isLoading: O,
      isError: A,
    } = c({
      queryKey: [`accounts`, `settings`, m?.accountId],
      enabled: i && !!m?.accountId && b && o === `chatgpt`,
      queryFn: T,
      staleTime: y.ONE_MINUTE,
    }),
    j = i && o === `chatgpt`,
    M;
  t[6] === j ? (M = t[7]) : ((M = { enabled: j }), (t[6] = j), (t[7] = M));
  let { data: N, isLoading: P, error: F } = S(M),
    I = f(`1907601843`),
    L = g || O || P,
    U = F instanceof h && F.status === 404,
    W = R(v, o, {
      isLoading: L,
      hasErrors: _ || (b && A) || (!!F && !U),
      needsOnboarding: I ? U : N?.length === 0 || U,
      hasWorkspaceEnabledCodex: !b || (D?.beta_settings?.wham_access ?? !1),
    }),
    G,
    K;
  (t[8] !== W || t[9] !== i || t[10] !== a || t[11] !== u
    ? ((G = () => {
        i && (a.set(H, W), W !== `loading` && W !== `error` && u(W));
      }),
      (K = [W, i, a, u]),
      (t[8] = W),
      (t[9] = i),
      (t[10] = a),
      (t[11] = u),
      (t[12] = G),
      (t[13] = K))
    : ((G = t[12]), (K = t[13])),
    (0, B.useEffect)(G, K));
}
function R(
  e,
  t,
  {
    isLoading: n,
    hasErrors: r,
    needsOnboarding: i,
    hasWorkspaceEnabledCodex: a,
    hasLoggedDisabledRef: o,
  },
) {
  let s = w(e),
    c = (e) => {
      o && !o.current && (m.info(e), (o.current = !0));
    };
  return t === `chatgpt`
    ? n
      ? `loading`
      : r
        ? `error`
        : s && !a
          ? (c(
              `Codex Cloud access disabled because workspace has not enabled Codex.`,
            ),
            `disabled`)
          : i
            ? `enabled_needs_setup`
            : `enabled`
    : (c(
        `Codex Cloud access disabled because user is not logged in via ChatGPT.`,
      ),
      `disabled`);
}
var z,
  B,
  V,
  H,
  U = e(() => {
    ((z = a()),
      N(),
      v(),
      d(),
      (B = t(o(), 1)),
      i(),
      _(),
      D(),
      P(),
      r(),
      b(),
      u(),
      A(),
      p(),
      j(),
      g(),
      (V = M(`codexCloudAccess`, null)),
      (H = O(k, () => null)));
  });
export { U as n, F as r, I as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~glxlkd48-Cv4zqghc.js.map
