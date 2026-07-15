import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AV as n,
  C0 as r,
  CD as i,
  ED as a,
  FC as o,
  Fz as s,
  I2 as c,
  IC as l,
  Iz as u,
  JA as d,
  L2 as f,
  MV as p,
  NC as m,
  OD as h,
  PB as g,
  PC as _,
  RC as v,
  S0 as ee,
  SV as y,
  TD as b,
  UC as x,
  VC as S,
  _0 as C,
  _Y as w,
  a2 as T,
  aG as te,
  aJ as E,
  bI as ne,
  cY as re,
  cj as ie,
  d2 as ae,
  fG as D,
  gD as O,
  i2 as k,
  jC as oe,
  jV as A,
  k2 as j,
  kV as M,
  mD as se,
  mY as ce,
  p2 as le,
  pG as N,
  rG as P,
  sY as F,
  tJ as I,
  vI as L,
  wD as ue,
  wV as de,
  x0 as fe,
  x2 as pe,
  y2 as R,
  zC as z,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  C as B,
  w as V,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  n as H,
  t as U,
} from "./app-initial~app-main~projects-index-page~appgen-library-page~work-home-page~chatgpt-convers~n7kdxxbv-_36znuKl.js";
import {
  a as W,
  i as G,
  n as me,
  o as K,
  r as he,
  s as q,
  t as J,
} from "./app-initial~app-main~business-checkout-switch-workspace-dialog~login-route~codex-mobile-pag~jcuacd6x-C293EQe4.js";
import {
  a as Y,
  d as X,
  i as Z,
  n as ge,
  t as _e,
  u as ve,
} from "./codex-mobile-setup-dialog-BDC5qLfW.js";
function ye(e, t) {
  if (e != null) return t == null ? e : e.filter((e) => e.clientId !== t);
}
function be(e, t) {
  return e?.some((e) => !t.has(e.clientId)) === !0;
}
function xe(e, t) {
  return e == null || !be(e, t)
    ? null
    : t.size === 0 && e.length === 1
      ? `connected`
      : `dismiss`;
}
var Se = e(() => {});
function Ce({
  existingClientIds: e,
  hostId: t,
  localRemoteControlClientId: n,
  waiting: r,
}) {
  return JSON.stringify({
    existingClientIds: e == null ? null : Array.from(e).sort(),
    hostId: t,
    localRemoteControlClientId: n,
    waiting: r,
  });
}
var we,
  Te,
  Ee,
  De,
  Oe,
  ke = e(() => {
    (C(),
      i(),
      re(),
      p(),
      D(),
      v(),
      Se(),
      (we = 3e4),
      (Te = T(F, ({ get: e }) => {
        let t = A(e, `local_remote_control_environment_id`) ?? null,
          n = !e(N, `2055603567`);
        return {
          queryKey: [`remote-control-clients`, t, n],
          queryFn: () => z(t, { includeBrowserClients: n }),
          staleTime: we,
        };
      })),
      (Ee = k(F, (e, { get: t }) => {
        let n = t(b, e),
          r = n?.environmentId;
        return {
          enabled: r != null,
          queryKey: [
            `remote-control-clients`,
            `app-server`,
            e,
            n?.installationId,
          ],
          queryFn: () =>
            r == null ? Promise.resolve([]) : z(r, { appServerHostId: e }),
          staleTime: we,
        };
      })),
      (De = k(F, (e, { get: t }) => {
        let n = A(t, `local_remote_control_environment_id`) ?? null,
          r = !t(N, `2055603567`);
        return {
          enabled: e,
          queryKey: [`remote-control-clients`, n, r],
          queryFn: () => z(n, { includeBrowserClients: r }),
          refetchInterval: e ? 1e3 : !1,
          staleTime: 0,
        };
      })),
      (Oe = k(
        F,
        (
          {
            existingClientIds: e,
            hostId: t,
            localRemoteControlClientId: n,
            waiting: r,
          },
          { get: i, queryClient: a },
        ) => {
          let o = null,
            s = null,
            c = !i(N, `2055603567`);
          if (r && t == null)
            o = A(i, `local_remote_control_environment_id`) ?? null;
          else if (r) {
            let e = i(b, t);
            ((o = e?.environmentId), (s = e?.installationId));
          }
          let l = [
            `remote-control-clients`,
            `waiting-for-added`,
            t,
            c,
            t == null ? o : s,
            e == null ? null : Array.from(e).sort(),
            n,
          ];
          return {
            enabled: r && e != null && (t == null || o != null),
            gcTime: 0,
            queryKey: l,
            queryFn: async () => {
              let r = a.getQueryData(l);
              if (r != null || e == null) return r ?? null;
              let i = await z(o ?? null, {
                appServerHostId: t ?? void 0,
                includeBrowserClients: c,
              });
              return (
                t != null &&
                  a.setQueryData(
                    [`remote-control-clients`, `app-server`, t, s],
                    i,
                  ),
                xe(ye(i, n), e)
              );
            },
            refetchInterval: (e) => (r && e.state.data == null ? 1e3 : !1),
            staleTime: 0,
          };
        },
        { key: Ce },
      )));
  });
async function Ae(e, t, n) {
  if (!n) return je(e, t, !1);
  a(e, t, !1);
  let r = h(e, t, { ignoreCurrentError: !0 });
  try {
    let n = je(e, t, !0);
    return await Promise.race([r, n.then(() => r)]);
  } catch (n) {
    throw (a(e, t, !0), n);
  }
}
async function je(e, t, n) {
  return t === `local`
    ? (await I(`set-local-remote-control-enabled`, { params: { enabled: n } }),
      W(e, n, { force: !0 }))
    : q(e, t, n);
}
var Me = e(() => {
  (K(), i(), y(), E(), G());
});
function Ne({
  isMfaSetupRequiredError: e,
  mfaSetupRequired: t,
  remoteControlStatus: n,
}) {
  return Le(n) || e ? `initial` : t ? `mfa-required` : void 0;
}
function Pe({
  initialRemoteControlStatus: e,
  isMfaSetupRequiredError: t,
  mfaSetupRequired: n,
  remoteControlStatus: r,
  setupStepDebugOverride: i,
}) {
  return t || !!n || Le(r) || Le(e) || i !== `auto`;
}
function Fe({
  remoteControlHostEnabled: e,
  hasEnrolledRemoteControlClient: t,
}) {
  return e ? (t ? `connected` : `waiting`) : `initial`;
}
function Ie(e) {
  return e.some((e) => e instanceof S);
}
function Le(e) {
  switch (e) {
    case `disabled`:
    case `errored`:
      return !0;
    case `connecting`:
    case `connected`:
      return !1;
  }
}
var Re = e(() => {
  x();
});
function ze(e) {
  let t = (0, He.c)(76),
    { initialStep: i, onClose: a, variant: c } = e,
    d = ee(F),
    f = ie(),
    p = (0, Q.useRef)(null),
    m = fe(ue, de),
    [h] = le(ve),
    g = r(oe),
    [v, y] = (0, Q.useState)(i ?? null),
    [b, x] = (0, Q.useState)(null),
    [S] = n(`local_remote_control_client_id`),
    C;
  t[0] !== m || t[1] !== v || t[2] !== g.data
    ? ((C =
        v ??
        Fe({
          remoteControlHostEnabled: m,
          hasEnrolledRemoteControlClient: g.data,
        })),
      (t[0] = m),
      (t[1] = v),
      (t[2] = g.data),
      (t[3] = C))
    : (C = t[3]);
  let w = C,
    T = fe(De, w === `waiting`),
    te = ye(T.data, S),
    E = r(l),
    re =
      w === `waiting` && (b == null ? te?.length : be(te, b)) ? `connected` : w,
    ae = r(o),
    D =
      h === `auto` ? (w === `mfa-required` && ae.data ? `allow-host` : re) : h,
    O;
  t[4] !== D || t[5] !== d || t[6] !== c
    ? ((O = (e) => {
        ne(d, s, { action: e, step: D, surface: c });
      }),
      (t[4] = D),
      (t[5] = d),
      (t[6] = c),
      (t[7] = O))
    : (O = t[7]);
  let k = O,
    A,
    j;
  (t[8] !== D || t[9] !== d || t[10] !== c
    ? ((A = () => {
        let e = `${c}:${D}`;
        p.current !== e && ((p.current = e), ne(d, u, { step: D, surface: c }));
      }),
      (j = [D, d, c]),
      (t[8] = D),
      (t[9] = d),
      (t[10] = c),
      (t[11] = A),
      (t[12] = j))
    : ((A = t[11]), (j = t[12])),
    (0, Q.useEffect)(A, j));
  let M;
  t[13] === d ? (M = t[14]) : ((M = () => _(d)), (t[13] = d), (t[14] = M));
  let se;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (e) => {
        y(e ? `mfa-required` : `allow-host`);
      }),
      (t[15] = se))
    : (se = t[15]);
  let ce;
  t[16] === M
    ? (ce = t[17])
    : ((ce = { mutationFn: M, onSuccess: se }), (t[16] = M), (t[17] = ce));
  let N = pe(ce),
    P;
  t[18] === d
    ? (P = t[19])
    : ((P = async () => {
        await Ae(d, de, !0);
        let e = d.query.snapshot(Te);
        return (
          await e.invalidate({ exact: !0, refetchType: `none` }),
          e.fetch()
        );
      }),
      (t[18] = d),
      (t[19] = P));
  let I;
  t[20] === S
    ? (I = t[21])
    : ((I = (e) => {
        (x(new Set(ye(e, S)?.map(Be))), y(`waiting`));
      }),
      (t[20] = S),
      (t[21] = I));
  let L;
  t[22] === d
    ? (L = t[23])
    : ((L = (e) => {
        he(d, e);
      }),
      (t[22] = d),
      (t[23] = L));
  let R;
  t[24] !== L || t[25] !== P || t[26] !== I
    ? ((R = { mutationFn: P, onSuccess: I, onError: L }),
      (t[24] = L),
      (t[25] = P),
      (t[26] = I),
      (t[27] = R))
    : (R = t[27]);
  let z = pe(R),
    B;
  t[28] !== z || t[29] !== k
    ? ((B = () => {
        (k(`allow_host`), z.mutate());
      }),
      (t[28] = z),
      (t[29] = k),
      (t[30] = B))
    : (B = t[30]);
  let V = B,
    H;
  t[31] !== z.error ||
  t[32] !== N.error ||
  t[33] !== E.error ||
  t[34] !== T.error ||
  t[35] !== g.error
    ? ((H = Ie([g.error, T.error, E.error, N.error, z.error])),
      (t[31] = z.error),
      (t[32] = N.error),
      (t[33] = E.error),
      (t[34] = T.error),
      (t[35] = g.error),
      (t[36] = H))
    : (H = t[36]);
  let U = H,
    W,
    G;
  (t[37] !== f || t[38] !== U
    ? ((W = () => {
        U && f(`/login`, { replace: !0 });
      }),
      (G = [f, U]),
      (t[37] = f),
      (t[38] = U),
      (t[39] = W),
      (t[40] = G))
    : ((W = t[39]), (G = t[40])),
    (0, Q.useEffect)(W, G));
  let K = N.isPending || z.isPending || (E.data === `required` && ae.isLoading),
    q;
  t[41] !== z.error || t[42] !== z.isError
    ? ((q = z.isError && !me(z.error)),
      (t[41] = z.error),
      (t[42] = z.isError),
      (t[43] = q))
    : (q = t[43]);
  let J = q;
  if ((h === `auto` && v == null && m && g.isLoading) || U) return null;
  if (c === `dialog`) {
    let e;
    t[44] === a
      ? (e = t[45])
      : ((e = (e) => {
          e || a();
        }),
        (t[44] = a),
        (t[45] = e));
    let n;
    t[46] !== a || t[47] !== k
      ? ((n = () => {
          (k(`skip`), a());
        }),
        (t[46] = a),
        (t[47] = k),
        (t[48] = n))
      : (n = t[48]);
    let r;
    t[49] !== N || t[50] !== k
      ? ((r = () => {
          (k(`start_setup`), N.mutate());
        }),
        (t[49] = N),
        (t[50] = k),
        (t[51] = r))
      : (r = t[51]);
    let i;
    return (
      t[52] !== V ||
      t[53] !== N.isError ||
      t[54] !== D ||
      t[55] !== K ||
      t[56] !== J ||
      t[57] !== e ||
      t[58] !== n ||
      t[59] !== r
        ? ((i = (0, $.jsx)(_e, {
            open: !0,
            showAllowHostError: J,
            showStartSetupError: N.isError,
            setupInProgress: K,
            step: D,
            onAllowHost: V,
            onOpenChange: e,
            onSkip: n,
            onStartSetup: r,
          })),
          (t[52] = V),
          (t[53] = N.isError),
          (t[54] = D),
          (t[55] = K),
          (t[56] = J),
          (t[57] = e),
          (t[58] = n),
          (t[59] = r),
          (t[60] = i))
        : (i = t[60]),
      i
    );
  }
  let Y;
  t[61] !== a || t[62] !== k
    ? ((Y = () => {
        (k(`skip`), a());
      }),
      (t[61] = a),
      (t[62] = k),
      (t[63] = Y))
    : (Y = t[63]);
  let X;
  t[64] !== N || t[65] !== k
    ? ((X = () => {
        (k(`start_setup`), N.mutate());
      }),
      (t[64] = N),
      (t[65] = k),
      (t[66] = X))
    : (X = t[66]);
  let Z;
  return (
    t[67] !== V ||
    t[68] !== N.isError ||
    t[69] !== a ||
    t[70] !== D ||
    t[71] !== K ||
    t[72] !== J ||
    t[73] !== Y ||
    t[74] !== X
      ? ((Z = (0, $.jsx)(Ve, {
          showAllowHostError: J,
          showStartSetupError: N.isError,
          setupInProgress: K,
          step: D,
          onAllowHost: V,
          onFinishSetup: a,
          onSkip: Y,
          onStartSetup: X,
        })),
        (t[67] = V),
        (t[68] = N.isError),
        (t[69] = a),
        (t[70] = D),
        (t[71] = K),
        (t[72] = J),
        (t[73] = Y),
        (t[74] = X),
        (t[75] = Z))
      : (Z = t[75]),
    Z
  );
}
function Be(e) {
  return e.clientId;
}
function Ve(e) {
  let t = (0, He.c)(28),
    {
      onAllowHost: n,
      onFinishSetup: r,
      onSkip: i,
      onStartSetup: a,
      setupInProgress: o,
      showAllowHostError: c,
      showStartSetupError: l,
      step: u,
    } = e,
    d = ee(F),
    f = te(`824038554`),
    p = ie(),
    m;
  t[0] !== d || t[1] !== u
    ? ((m = (e) => {
        ne(d, s, { action: e, step: u, surface: `page` });
      }),
      (t[0] = d),
      (t[1] = u),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] !== f || t[4] !== u
    ? ((g =
        u === `allow-host` || u === `mfa-required` || u === `waiting`
          ? (0, $.jsx)(B.Header, {
              children: (0, $.jsx)(U, {
                start: f
                  ? (0, $.jsx)(w, {
                      id: `codexMobile.setupPage.remoteTitle`,
                      defaultMessage: `Set up Remote`,
                      description: `Toolbar title shown during Remote setup`,
                    })
                  : (0, $.jsx)(w, {
                      id: `codexMobile.setupPage.title`,
                      defaultMessage: `Set up Remote`,
                      description: `Toolbar title shown during Codex mobile setup`,
                    }),
              }),
            })
          : null),
      (t[3] = f),
      (t[4] = u),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] === h
    ? (_ = t[7])
    : ((_ = (e) => {
        (h(`continue_on_chatgpt`),
          O({
            event: e,
            href: `https://chatgpt.com/#settings/Security`,
            initiator: `open_in_browser_bridge`,
          }));
      }),
      (t[6] = h),
      (t[7] = _));
  let v;
  t[8] !== r || t[9] !== h
    ? ((v = () => {
        (h(`finish_setup`), r());
      }),
      (t[8] = r),
      (t[9] = h),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] !== p || t[12] !== h
    ? ((y = () => {
        (h(`manage_connections`), p(`/settings/connections`));
      }),
      (t[11] = p),
      (t[12] = h),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== n ||
  t[15] !== i ||
  t[16] !== a ||
  t[17] !== o ||
  t[18] !== c ||
  t[19] !== l ||
  t[20] !== u ||
  t[21] !== _ ||
  t[22] !== v ||
  t[23] !== y
    ? ((b = (0, $.jsx)(Z, {
        onAllowHost: n,
        onContinueOnChatGPT: _,
        onFinishSetup: v,
        onManageConnections: y,
        onSkip: i,
        onStartSetup: a,
        setupInProgress: o,
        showAllowHostError: c,
        showStartSetupError: l,
        step: u,
        variant: `page`,
      })),
      (t[14] = n),
      (t[15] = i),
      (t[16] = a),
      (t[17] = o),
      (t[18] = c),
      (t[19] = l),
      (t[20] = u),
      (t[21] = _),
      (t[22] = v),
      (t[23] = y),
      (t[24] = b))
    : (b = t[24]);
  let x;
  return (
    t[25] !== g || t[26] !== b
      ? ((x = (0, $.jsxs)($.Fragment, { children: [g, b] })),
        (t[25] = g),
        (t[26] = b),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
var He,
  Q,
  $,
  Ue = e(() => {
    ((He = c()),
      g(),
      R(),
      ae(),
      C(),
      (Q = t(f(), 1)),
      ce(),
      d(),
      i(),
      V(),
      se(),
      L(),
      ke(),
      Se(),
      J(),
      Me(),
      re(),
      y(),
      M(),
      P(),
      H(),
      X(),
      ge(),
      m(),
      Re(),
      Y(),
      ($ = j()));
  });
export {
  Pe as a,
  Ee as c,
  Oe as d,
  ye as f,
  Re as i,
  ke as l,
  Ue as n,
  Me as o,
  Se as p,
  Ne as r,
  Ae as s,
  ze as t,
  Te as u,
};
//# sourceMappingURL=codex-mobile-setup-flow-DxKLRZvY.js.map
