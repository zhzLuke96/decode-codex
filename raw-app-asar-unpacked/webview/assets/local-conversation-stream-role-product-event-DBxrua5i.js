import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  BA as n,
  C0 as r,
  CB as i,
  ET as a,
  I2 as o,
  L2 as s,
  NT as c,
  PB as l,
  S0 as u,
  WA as d,
  _0 as f,
  aG as p,
  bI as m,
  cY as h,
  dT as g,
  hJ as _,
  iE as v,
  jT as y,
  mJ as b,
  rG as x,
  sY as S,
  vI as C,
  x0 as w,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { mt as T, pt as E } from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  a as D,
  i as O,
  n as k,
  o as A,
  r as j,
  t as M,
} from "./app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-CAvG99c4.js";
function N(e) {
  let t = (0, P.c)(17),
    { conversationId: n } = e,
    i = u(S),
    o = p(`1488233300`),
    s = w(E, n),
    l = w(a, n),
    d = w(D, n),
    f = r(O)?.[n],
    m;
  t[0] !== f ||
  t[1] !== n ||
  t[2] !== s.isEligible ||
  t[3] !== s.reason ||
  t[4] !== o ||
  t[5] !== l ||
  t[6] !== i
    ? ((m = () => {
        let e = i.get(c, n),
          t = i.get(y, n),
          r = k(e, t),
          a = j(e, t, f);
        (o && r != null && i.set(O, (e) => M(e ?? {}, n, r)),
          _.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: o ? n : null,
            isEligible: o && s.isEligible,
            collaborationMode: o ? l : null,
            permissions: o ? a : null,
            reason: o ? s.reason : null,
          }));
      }),
      (t[0] = f),
      (t[1] = n),
      (t[2] = s.isEligible),
      (t[3] = s.reason),
      (t[4] = o),
      (t[5] = l),
      (t[6] = i),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== f ||
    t[9] !== n ||
    t[10] !== s.isEligible ||
    t[11] !== s.reason ||
    t[12] !== o ||
    t[13] !== d ||
    t[14] !== l ||
    t[15] !== i
      ? ((h = [f, n, s.isEligible, s.reason, d, o, l, i]),
        (t[8] = f),
        (t[9] = n),
        (t[10] = s.isEligible),
        (t[11] = s.reason),
        (t[12] = o),
        (t[13] = d),
        (t[14] = l),
        (t[15] = i),
        (t[16] = h))
      : (h = t[16]),
    (0, F.useEffect)(m, h),
    null
  );
}
var P,
  F,
  I = e(() => {
    ((P = o()), f(), (F = t(s(), 1)), g(), b(), h(), x(), T(), A());
  });
function L(e) {
  let t = (0, R.c)(4),
    { conversationId: r } = e,
    a = u(n),
    o,
    s;
  return (
    t[0] !== r || t[1] !== a
      ? ((o = () => {
          let e = !1;
          return a.watch((t) => {
            let { get: n } = t,
              o = n(v, r);
            o == null || e || ((e = !0), m(a, i, { streamRole: o.role }));
          });
        }),
        (s = [r, a]),
        (t[0] = r),
        (t[1] = a),
        (t[2] = o),
        (t[3] = s))
      : ((o = t[2]), (s = t[3])),
    (0, z.useEffect)(o, s),
    null
  );
}
var R,
  z,
  B = e(() => {
    ((R = o()), l(), f(), (z = t(s(), 1)), g(), C(), d());
  });
export { I as i, B as n, N as r, L as t };
//# sourceMappingURL=local-conversation-stream-role-product-event-DBxrua5i.js.map
