import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  CD as n,
  I2 as r,
  JA as i,
  L2 as a,
  MC as o,
  NC as s,
  S0 as c,
  SV as l,
  T2 as u,
  TD as d,
  _0 as f,
  cY as p,
  cj as m,
  d2 as h,
  k2 as g,
  p2 as _,
  sY as v,
  wV as y,
  x0 as b,
  y2 as x,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  C as S,
  w as C,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  a as w,
  d as T,
  r as E,
  u as D,
} from "./codex-mobile-setup-dialog-BDC5qLfW.js";
import {
  a as O,
  i as k,
  n as A,
  r as j,
  t as M,
} from "./codex-mobile-setup-flow-DxKLRZvY.js";
function N() {
  let e = (0, F.c)(8),
    t = c(v),
    n = b(d, y),
    [r] = _(D),
    i;
  e[0] === t ? (i = e[1]) : ((i = o(t)), (e[0] = t), (e[1] = i));
  let { data: a, isError: s, isFetching: l, isPending: f } = u(i);
  if (f || n == null) return null;
  let p;
  return (
    e[2] !== s || e[3] !== l || e[4] !== a || e[5] !== n.status || e[6] !== r
      ? ((p = (0, L.jsx)(P, {
          isMfaSetupRequiredError: s,
          isMfaSetupRequiredFetching: l,
          mfaSetupRequired: a,
          remoteControlStatus: n.status,
          setupStepDebugOverride: r,
        })),
        (e[2] = s),
        (e[3] = l),
        (e[4] = a),
        (e[5] = n.status),
        (e[6] = r),
        (e[7] = p))
      : (p = e[7]),
    p
  );
}
function P(e) {
  let t = (0, F.c)(13),
    {
      isMfaSetupRequiredError: n,
      isMfaSetupRequiredFetching: r,
      mfaSetupRequired: i,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    } = e,
    s = m(),
    [c] = (0, I.useState)(a);
  if (r) return null;
  if (
    O({
      isMfaSetupRequiredError: n,
      mfaSetupRequired: i,
      initialRemoteControlStatus: c,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    })
  ) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(S.MainContentLayout, { layout: `full-bleed` })),
        (t[0] = e))
      : (e = t[0]);
    let r;
    t[1] !== n || t[2] !== i || t[3] !== a
      ? ((r = j({
          isMfaSetupRequiredError: n,
          mfaSetupRequired: i,
          remoteControlStatus: a,
        })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a),
        (t[4] = r))
      : (r = t[4]);
    let o;
    t[5] === s
      ? (o = t[6])
      : ((o = () => {
          s(`/`);
        }),
        (t[5] = s),
        (t[6] = o));
    let c;
    return (
      t[7] !== r || t[8] !== o
        ? ((c = (0, L.jsxs)(L.Fragment, {
            children: [
              e,
              (0, L.jsx)(M, { initialStep: r, onClose: o, variant: `page` }),
            ],
          })),
          (t[7] = r),
          (t[8] = o),
          (t[9] = c))
        : (c = t[9]),
      c
    );
  }
  let l;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, L.jsx)(S.MainContentLayout, { layout: `full-bleed` })),
      (t[10] = l))
    : (l = t[10]);
  let u;
  return (
    t[11] === s
      ? (u = t[12])
      : ((u = (0, L.jsxs)(L.Fragment, {
          children: [
            l,
            (0, L.jsx)(E, {
              onManageConnections: () => {
                s(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[11] = s),
        (t[12] = u)),
    u
  );
}
var F, I, L;
e(() => {
  ((F = r()),
    x(),
    h(),
    f(),
    (I = t(a(), 1)),
    i(),
    n(),
    C(),
    p(),
    l(),
    T(),
    A(),
    s(),
    k(),
    w(),
    (L = g()));
})();
export { N as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page-os_cSEq6.js.map
