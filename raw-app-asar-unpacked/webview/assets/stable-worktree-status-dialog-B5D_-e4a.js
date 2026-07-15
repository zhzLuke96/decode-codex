import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Af as r,
  BX as i,
  Df as ee,
  I2 as a,
  JA as o,
  L2 as s,
  Mq as c,
  Nq as l,
  Of as te,
  S0 as ne,
  SK as u,
  _0 as d,
  _Y as f,
  _f as p,
  bJ as re,
  bK as m,
  bf as h,
  cY as g,
  cj as _,
  gf as ie,
  if as ae,
  k2 as v,
  kf as oe,
  mY as y,
  mf as se,
  oj as ce,
  rf as b,
  s$ as x,
  sY as le,
  x2 as S,
  y2 as C,
  yJ as w,
  yY as ue,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { Un as T, Vn as de } from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  Sn as fe,
  _n as E,
  ot as D,
  st as pe,
  vn as O,
  xn as k,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  i as A,
  n as j,
  r as M,
  t as N,
} from "./worktree-setup-auto-fix-_G9P8bNh.js";
function P(e) {
  let t = (0, I.c)(3),
    { onClose: n, pendingWorktreeId: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, R.jsx)(F, { pendingWorktreeId: r, onClose: n }, r)),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function F(e) {
  let t = (0, I.c)(64),
    { onClose: n, pendingWorktreeId: r } = e,
    a = ne(le),
    o = ue(),
    s = ce(),
    l = _(),
    d = k(r),
    {
      cancelPendingWorktree: m,
      clearPendingWorktreeAttention: h,
      createPendingWorktree: g,
      retryPendingWorktree: v,
    } = fe(),
    y;
  t[0] !== g ||
  t[1] !== o ||
  t[2] !== l ||
  t[3] !== n ||
  t[4] !== d ||
  t[5] !== a
    ? ((y = async () => {
        if (d == null || d.launchMode !== `create-stable-worktree`) return;
        let e = await N({
          createPendingWorktree: g,
          intl: o,
          pendingWorktree: d,
          serviceTier: await ae(a, d.hostId, null),
        });
        (n(), l(i(e.clientThreadId)));
      }),
      (t[0] = g),
      (t[1] = o),
      (t[2] = l),
      (t[3] = n),
      (t[4] = d),
      (t[5] = a),
      (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== o || t[8] !== a
    ? ((b = (e) => {
        (re.error(`Error starting worktree setup repair thread`, {
          safe: {},
          sensitive: { error: e },
        }),
          a.get(u).danger(
            o.formatMessage(
              {
                id: `composer.localTaskError.v2`,
                defaultMessage: `Error starting task{br}{error}`,
                description: `Toast text shown when we failed to start a task`,
              },
              { br: (0, R.jsx)(`br`, {}), error: x(e) },
            ),
          ));
      }),
      (t[7] = o),
      (t[8] = a),
      (t[9] = b))
    : (b = t[9]);
  let C;
  t[10] !== y || t[11] !== b
    ? ((C = { mutationFn: y, onError: b }),
      (t[10] = y),
      (t[11] = b),
      (t[12] = C))
    : (C = t[12]);
  let w = S(C),
    T = (0, L.useRef)(!1),
    E;
  t[13] !== n || t[14] !== d
    ? ((E = () => {
        if (d != null) {
          T.current = !0;
          return;
        }
        d === void 0 || !T.current || n();
      }),
      (t[13] = n),
      (t[14] = d),
      (t[15] = E))
    : (E = t[15]);
  let D = (0, L.useEffectEvent)(E),
    A;
  t[16] === D
    ? (A = t[17])
    : ((A = () => {
        D();
      }),
      (t[16] = D),
      (t[17] = A));
  let j;
  (t[18] === d ? (j = t[19]) : ((j = [d]), (t[18] = d), (t[19] = j)),
    (0, L.useEffect)(A, j));
  let P;
  t[20] !== h || t[21] !== r
    ? ((P = () => {
        h(r);
      }),
      (t[20] = h),
      (t[21] = r),
      (t[22] = P))
    : (P = t[22]);
  let F = (0, L.useEffectEvent)(P),
    z;
  t[23] === F
    ? (z = t[24])
    : ((z = () => {
        F();
      }),
      (t[23] = F),
      (t[24] = z));
  let B;
  if (
    (t[25] === r ? (B = t[26]) : ((B = [r]), (t[25] = r), (t[26] = B)),
    (0, L.useEffect)(z, B),
    d == null || d.launchMode !== `create-stable-worktree`)
  )
    return null;
  let V;
  t[27] === d.phase
    ? (V = t[28])
    : ((V = O(d.phase)), (t[27] = d.phase), (t[28] = V));
  let H = V,
    U = d.phase === `failed`,
    W =
      U &&
      d.worktreeGitRoot != null &&
      d.worktreeWorkspaceRoot != null &&
      d.localEnvironmentConfigPath != null,
    G;
  t[29] === n
    ? (G = t[30])
    : ((G = (e) => {
        e || n();
      }),
      (t[29] = n),
      (t[30] = G));
  let K;
  t[31] === d.label
    ? (K = t[32])
    : ((K = (0, R.jsx)(oe, { className: `contents`, children: d.label })),
      (t[31] = d.label),
      (t[32] = K));
  let q;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, R.jsx)(te, {
        className: `contents`,
        children: (0, R.jsx)(f, {
          id: `stableWorktreeStatusDialog.description`,
          defaultMessage: `Creating a persistent project worktree`,
          description: `Description for the stable worktree creation status dialog`,
        }),
      })),
      (t[33] = q))
    : (q = t[33]);
  let J;
  t[34] === K
    ? (J = t[35])
    : ((J = (0, R.jsx)(p, {
        children: (0, R.jsx)(ie, { title: K, subtitle: q }),
      })),
      (t[34] = K),
      (t[35] = J));
  let Y;
  t[36] !== m || t[37] !== H || t[38] !== n || t[39] !== d.id
    ? ((Y = H
        ? (0, R.jsx)(c, {
            color: `secondary`,
            onClick: () => {
              (m(d.id), n());
            },
            children: (0, R.jsx)(f, {
              id: `worktreeInitV2.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancel button for worktree creation`,
            }),
          })
        : null),
      (t[36] = m),
      (t[37] = H),
      (t[38] = n),
      (t[39] = d.id),
      (t[40] = Y))
    : (Y = t[40]);
  let X;
  t[41] !== w ||
  t[42] !== W ||
  t[43] !== U ||
  t[44] !== s ||
  t[45] !== l ||
  t[46] !== n ||
  t[47] !== d.hostId ||
  t[48] !== d.id ||
  t[49] !== d.localEnvironmentConfigPath ||
  t[50] !== d.sourceWorkspaceRoot ||
  t[51] !== v ||
  t[52] !== a
    ? ((X = U
        ? (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(c, {
                color: `secondary`,
                onClick: () => {
                  if (
                    (pe(a, d.hostId), n(), d.localEnvironmentConfigPath != null)
                  ) {
                    l(
                      de({
                        configPath: d.localEnvironmentConfigPath,
                        workspaceRoot: d.sourceWorkspaceRoot,
                      }),
                      {
                        state: {
                          hostId: d.hostId,
                          reopenStableWorktreeId: d.id,
                          returnTo: `${s.pathname}${s.search}${s.hash}`,
                        },
                      },
                    );
                    return;
                  }
                  l(
                    `/settings/local-environments?${new URLSearchParams({ workspaceRoot: d.sourceWorkspaceRoot }).toString()}`,
                  );
                },
                children: (0, R.jsx)(f, {
                  id: `worktreeInitV2.editEnvironment`,
                  defaultMessage: `Edit environment`,
                  description: `Button label to open local environment settings after worktree setup fails`,
                }),
              }),
              W
                ? (0, R.jsx)(c, {
                    color: `secondary`,
                    loading: w.isPending,
                    onClick: () => w.mutate(),
                    children: (0, R.jsx)(f, {
                      id: `worktreeInitV2.autoFix`,
                      defaultMessage: `Auto-fix`,
                      description: `Button label to start a repair task after worktree setup fails`,
                    }),
                  })
                : null,
              (0, R.jsx)(c, {
                color: `primary`,
                onClick: () => v(d.id),
                children: (0, R.jsx)(f, {
                  id: `codex.common.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry button`,
                }),
              }),
            ],
          })
        : null),
      (t[41] = w),
      (t[42] = W),
      (t[43] = U),
      (t[44] = s),
      (t[45] = l),
      (t[46] = n),
      (t[47] = d.hostId),
      (t[48] = d.id),
      (t[49] = d.localEnvironmentConfigPath),
      (t[50] = d.sourceWorkspaceRoot),
      (t[51] = v),
      (t[52] = a),
      (t[53] = X))
    : (X = t[53]);
  let Z;
  t[54] !== d || t[55] !== Y || t[56] !== X
    ? ((Z = (0, R.jsx)(p, {
        children: (0, R.jsxs)(M, {
          pendingWorktree: d,
          isConversationStarting: !1,
          isConversationStartFailed: !1,
          children: [Y, X],
        }),
      })),
      (t[54] = d),
      (t[55] = Y),
      (t[56] = X),
      (t[57] = Z))
    : (Z = t[57]);
  let Q;
  t[58] !== J || t[59] !== Z
    ? ((Q = (0, R.jsxs)(se, { children: [J, Z] })),
      (t[58] = J),
      (t[59] = Z),
      (t[60] = Q))
    : (Q = t[60]);
  let $;
  return (
    t[61] !== G || t[62] !== Q
      ? (($ = (0, R.jsx)(ee, {
          open: !0,
          onOpenChange: G,
          size: `wide`,
          children: Q,
        })),
        (t[61] = G),
        (t[62] = Q),
        (t[63] = $))
      : ($ = t[63]),
    $
  );
}
var I, L, R;
e(() => {
  ((I = a()),
    C(),
    d(),
    n(),
    (L = t(s(), 1)),
    y(),
    o(),
    b(),
    l(),
    r(),
    h(),
    m(),
    g(),
    T(),
    D(),
    w(),
    A(),
    E(),
    j(),
    (R = v()));
})();
export { P as StableWorktreeStatusDialog };
//# sourceMappingURL=stable-worktree-status-dialog-B5D_-e4a.js.map
