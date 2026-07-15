import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Af as r,
  C0 as i,
  Df as a,
  Ds as o,
  Gb as s,
  I2 as c,
  KD as l,
  Kb as u,
  Kq as d,
  L2 as f,
  Mq as p,
  Nq as m,
  O2 as h,
  QD as ee,
  QY as g,
  S0 as _,
  SK as v,
  Ts as te,
  Zq as ne,
  _0 as y,
  _O as b,
  _Y as x,
  _f as S,
  aJ as C,
  bK as w,
  bO as T,
  bf as E,
  cD as D,
  cO as O,
  cY as k,
  dJ as A,
  dT as j,
  eO as M,
  fJ as N,
  gK as P,
  gO as F,
  gf as re,
  hK as I,
  hf as ie,
  i2 as L,
  iO as R,
  js as z,
  k2 as B,
  lD as V,
  mY as H,
  mf as U,
  oO as W,
  pE as ae,
  qD as oe,
  sO as G,
  sY as K,
  tJ as q,
  x0 as se,
  x2 as J,
  xO as Y,
  y2 as ce,
  yY as le,
  zZ as X,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Tn as ue,
  wn as de,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  $o as fe,
  Fs as pe,
  Gs as me,
  Hs as he,
  Is as ge,
  Js as _e,
  Ks as ve,
  Qo as ye,
  Us as be,
  cc as xe,
  nc as Se,
  os as Ce,
  qs as we,
  sc as Te,
  ss as Ee,
  tc as De,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Bn as Oe,
  zn as ke,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  n as Ae,
  t as je,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~kqmxf6op-Bug9YyEs.js";
function Me({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
  });
}
function Ne({
  cwd: e,
  enabled: t,
  hostConfig: n,
  operationSource: r,
  query: i,
}) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
    query: i,
  });
}
var Pe,
  Fe,
  Ie = e(() => {
    (y(),
      k(),
      N(),
      M(),
      b(),
      Y(),
      (Pe = L(
        K,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) =>
          F(e, T(n), n, r, { enabled: t }),
        { key: Me },
      )),
      (Fe = L(
        K,
        (
          { cwd: e, enabled: t, hostConfig: n, operationSource: r, query: i },
          { get: a },
        ) => {
          let o = a(Pe, {
            cwd: e,
            enabled: t,
            hostConfig: n,
            operationSource: r,
          }).data;
          return ee(
            `search-branches`,
            o,
            o == null
              ? null
              : { root: o.root, operationSource: r, query: i, limit: 20 },
            T(n),
            n,
            {
              enabled: t,
              select: (e) => e.branches,
              staleTime: A.FIVE_SECONDS,
            },
          );
        },
        { key: Ne },
      )));
  });
function Le(e, t, n, r) {
  let i = (0, Re.c)(14),
    a;
  i[0] === r
    ? (a = i[1])
    : ((a = r === void 0 ? {} : r), (i[0] = r), (i[1] = a));
  let o = a,
    s = e ?? ``,
    c;
  i[2] === s ? (c = i[3]) : ((c = X(s)), (i[2] = s), (i[3] = c));
  let l;
  i[4] !== n || i[5] !== c
    ? ((l = { cwd: c, includeUntrackedFiles: !1, operationSource: n }),
      (i[4] = n),
      (i[5] = c),
      (i[6] = l))
    : (l = i[6]);
  let u = l,
    d;
  i[7] === u
    ? (d = i[8])
    : ((d = { ...u, includeUntrackedFiles: !0 }), (i[7] = u), (i[8] = d));
  let f = d,
    p;
  i[9] === f
    ? (p = i[10])
    : ((p = { method: `status-summary`, params: f }), (i[9] = f), (i[10] = p));
  let m;
  return (
    i[11] !== o || i[12] !== p
      ? ((m = { liveQuery: p, staleTime: 1 / 0, ...o }),
        (i[11] = o),
        (i[12] = p),
        (i[13] = m))
      : (m = i[13]),
    W(e, t, `status-summary`, u, n, m)
  );
}
var Re,
  ze = e(() => {
    ((Re = c()), n(), M());
  });
function Be(e, t, n, r) {
  let i = (0, Ue.c)(4),
    a;
  i[0] === n
    ? (a = i[1])
    : ((a = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (i[0] = n),
      (i[1] = a));
  let o;
  return (
    i[2] === r
      ? (o = i[3])
      : ((o = { liveQuery: He, select: Ve, staleTime: 1 / 0, ...r }),
        (i[2] = r),
        (i[3] = o)),
    W(e, t, `recent-branches`, a, n, o)
  );
}
function Ve(e) {
  return e.branches;
}
function He(e) {
  return { method: `recent-branches`, params: e };
}
var Ue,
  We = e(() => {
    ((Ue = c()), M());
  });
function Ge(e, t) {
  let n = (0, Ke.c)(16),
    r = h(),
    a = i(V),
    o;
  n[0] === a
    ? (o = n[1])
    : ((o = { retainRepoWatch: a }), (n[0] = a), (n[1] = o));
  let { data: s } = O(e, t, o),
    c = e?.cwd ?? null,
    l = e?.hostId ?? null,
    u;
  n[2] !== c || n[3] !== l
    ? ((u = [`vscode`, `git-checkout-branch`, c, l]),
      (n[2] = c),
      (n[3] = l),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] !== t || n[6] !== e
    ? ((d = async (n) => {
        if (e == null) throw Error(`Expected a repository target`);
        return q(`git-checkout-branch`, {
          params: { ...n, cwd: e.cwd, hostId: e.hostId },
          source: t,
        });
      }),
      (n[5] = t),
      (n[6] = e),
      (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] !== s || n[9] !== r || n[10] !== e
    ? ((f = (t) => {
        e != null &&
          s != null &&
          t?.status === `success` &&
          R(
            r,
            { commonDir: s.commonDir, root: s.root },
            { changeType: `head`, hostKey: T(e.hostConfig) },
          );
      }),
      (n[8] = s),
      (n[9] = r),
      (n[10] = e),
      (n[11] = f))
    : (f = n[11]);
  let p;
  return (
    n[12] !== u || n[13] !== d || n[14] !== f
      ? ((p = {
          mutationKey: u,
          mutationFn: d,
          networkMode: `always`,
          onSettled: f,
        }),
        (n[12] = u),
        (n[13] = d),
        (n[14] = f),
        (n[15] = p))
      : (p = n[15]),
    J(p)
  );
}
var Ke,
  qe = e(() => {
    ((Ke = c()), ce(), y(), M(), Y(), G(), D(), C());
  });
function Je(e, t) {
  let n = (0, Ye.c)(16),
    r = h(),
    a = i(V),
    o;
  n[0] === a
    ? (o = n[1])
    : ((o = { retainRepoWatch: a }), (n[0] = a), (n[1] = o));
  let { data: s } = O(e, t, o),
    c = e?.cwd ?? null,
    l = e?.hostId ?? null,
    u;
  n[2] !== c || n[3] !== l
    ? ((u = [`vscode`, `git-create-branch`, c, l]),
      (n[2] = c),
      (n[3] = l),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] !== t || n[6] !== e
    ? ((d = async (n) => {
        if (e == null) throw Error(`Expected a repository target`);
        return q(`git-create-branch`, {
          params: { ...n, cwd: e.cwd, hostId: e.hostId },
          source: t,
        });
      }),
      (n[5] = t),
      (n[6] = e),
      (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] !== s || n[9] !== r || n[10] !== e
    ? ((f = (t, n, i) => {
        e != null &&
          s != null &&
          R(r, s, {
            changeType: i.mode === `synced` ? `synced-branch` : `head`,
            hostKey: T(e.hostConfig),
          });
      }),
      (n[8] = s),
      (n[9] = r),
      (n[10] = e),
      (n[11] = f))
    : (f = n[11]);
  let p;
  return (
    n[12] !== u || n[13] !== d || n[14] !== f
      ? ((p = {
          mutationKey: u,
          mutationFn: d,
          networkMode: `always`,
          onSettled: f,
        }),
        (n[12] = u),
        (n[13] = d),
        (n[14] = f),
        (n[15] = p))
      : (p = n[15]),
    J(p)
  );
}
var Ye,
  Xe = e(() => {
    ((Ye = c()), ce(), y(), M(), Y(), G(), D(), C());
  });
function Ze(e) {
  return Array.from(e)
    .filter((e) => !/\s/u.test(e) && !Qe.has(e))
    .join(``);
}
var Qe,
  $e = e(() => {
    Qe = new Set([`~`, `^`, `:`, `?`, `*`, `[`, `]`, `\\`]);
  });
function et(e) {
  let t = (0, ut.c)(85),
    {
      gitRoot: n,
      hostConfig: r,
      localConversationId: i,
      shouldShow: a,
      side: o,
      align: s,
      renderStaticBranch: c,
      renderControl: l,
      onOpenChange: u,
    } = e,
    d = o === void 0 ? `top` : o,
    f = s === void 0 ? `end` : s,
    p = _(K),
    m = le(),
    [h, ee] = (0, Z.useState)(!1),
    [g, ne] = (0, Z.useState)(!1),
    [y, b] = (0, Z.useState)(!1),
    [x, S] = (0, Z.useState)(!1),
    [C, w] = (0, Z.useState)(!1),
    [T, E] = (0, Z.useState)(0),
    [D, O] = (0, Z.useState)(null),
    k;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = []), (t[0] = k))
    : (k = t[0]);
  let [A, j] = (0, Z.useState)(k),
    [M, N] = (0, Z.useState)(`idle`),
    P;
  t[1] !== n || t[2] !== r
    ? ((P = n == null ? null : De({ hostConfig: r, root: n })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = P))
    : (P = t[3]);
  let F = P,
    re;
  t[4] !== r || t[5] !== F
    ? ((re = F == null ? null : { cwd: F.cwd, hostConfig: r }),
      (t[4] = r),
      (t[5] = F),
      (t[6] = re))
    : (re = t[6]);
  let I;
  t[7] !== a || t[8] !== re
    ? ((I = { enabled: a, operationSource: $, lookup: re }),
      (t[7] = a),
      (t[8] = re),
      (t[9] = I))
    : (I = t[9]);
  let ie = se(ke, I),
    L = ie.data?.trim() ?? ``,
    R = a && L.length > 0,
    z = se(ae, i),
    B = C || M !== `idle`,
    V = Ge(F, $),
    H = Je(F, $),
    U = V.isPending || H.isPending,
    W = m.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    G;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        ee(!1);
      }),
      (t[10] = G))
    : (G = t[10]);
  let q = G,
    J;
  t[11] !== m || t[12] !== p
    ? ((J = (e) => {
        p.get(v).danger(
          m.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[11] = m),
      (t[12] = p),
      (t[13] = J))
    : (J = t[13]);
  let Y = J,
    ce;
  t[14] !== m || t[15] !== p
    ? ((ce = (e) => {
        p.get(v).danger(
          m.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[14] = m),
      (t[15] = p),
      (t[16] = ce))
    : (ce = t[16]);
  let X = ce,
    ue;
  t[17] === q
    ? (ue = t[18])
    : ((ue = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return t === `blocked-by-working-tree-changes`
          ? (j(n ?? []), O(r), q(), S(!1), b(!0), !0)
          : !1;
      }),
      (t[17] = q),
      (t[18] = ue));
  let de = ue,
    fe = async (e) => {
      if (!(U || F == null)) {
        if (e === L) {
          q();
          return;
        }
        try {
          let t = await V.mutateAsync({ branch: e });
          if (t.status === `error`) {
            if (
              de({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            Y(t.error);
            return;
          }
          (i != null && oe(i, e), q());
        } catch (e) {
          let t = e;
          Y(t instanceof Error ? t.message : String(t));
        }
      }
    },
    me;
  t[19] !== V ||
  t[20] !== H ||
  t[21] !== U ||
  t[22] !== i ||
  t[23] !== de ||
  t[24] !== F ||
  t[25] !== Y ||
  t[26] !== X
    ? ((me = async (e) => {
        if (!(U || F == null))
          try {
            let t = await H.mutateAsync({
              branch: e,
              mode: `worktree`,
              failIfExists: !0,
            });
            if (t.status === `error`) {
              X(t.error);
              return;
            }
            let n = await V.mutateAsync({ branch: e });
            if (n.status === `error`) {
              if (
                de({
                  errorType: n.errorType,
                  conflictedPaths: n.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (Y(n.error), S(!1));
              return;
            }
            (i != null && oe(i, e), S(!1));
          } catch (e) {
            let t = e;
            X(t instanceof Error ? t.message : String(t));
          }
      }),
      (t[19] = V),
      (t[20] = H),
      (t[21] = U),
      (t[22] = i),
      (t[23] = de),
      (t[24] = F),
      (t[25] = Y),
      (t[26] = X),
      (t[27] = me))
    : (me = t[27]);
  let ge = me,
    _e;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => {
        (w(!1), N(`idle`), j([]), O(null));
      }),
      (t[28] = _e))
    : (_e = t[28]);
  let ve = _e,
    ye;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (e) => {
        (b(e), e || (j([]), O(null)));
      }),
      (t[29] = ye))
    : (ye = t[29]);
  let xe = ye,
    Se;
  t[30] !== F || t[31] !== p
    ? ((Se = () => {
        F != null && (p.set(be, he(F), ``), N(`idle`), E(tt), b(!1), w(!0));
      }),
      (t[30] = F),
      (t[31] = p),
      (t[32] = Se))
    : (Se = t[32]);
  let Ce = Se,
    we;
  t[33] !== fe || t[34] !== ge || t[35] !== ve || t[36] !== D
    ? ((we = (e) => {
        if (e === `success` && D != null) {
          let e = D;
          if ((ve(), e.type === `checkout`)) {
            fe(e.branch);
            return;
          }
          ge(e.branch);
          return;
        }
        N(e);
      }),
      (t[33] = fe),
      (t[34] = ge),
      (t[35] = ve),
      (t[36] = D),
      (t[37] = we))
    : (we = t[37]);
  let Te = we;
  if (!R)
    return a && ie.isSuccess
      ? l({
          currentBranch: null,
          disabled: !1,
          isPending: !1,
          switchTooltipText: W,
        })
      : null;
  if (n == null) return c?.({ currentBranch: L }) ?? null;
  let Ee = te,
    Oe;
  t[38] === u
    ? (Oe = t[39])
    : ((Oe = (e) => {
        (e && ne(!0), ee(e), u?.(e));
      }),
      (t[38] = u),
      (t[39] = Oe));
  let Ae = l({
      currentBranch: L,
      disabled: U,
      isPending: U,
      switchTooltipText: W,
    }),
    je;
  t[40] !== fe ||
  t[41] !== q ||
  t[42] !== L ||
  t[43] !== n ||
  t[44] !== g ||
  t[45] !== r ||
  t[46] !== U ||
  t[47] !== h
    ? ((je = g
        ? (0, Q.jsx)(nt, {
            currentBranch: L,
            gitRoot: n,
            hostConfig: r,
            isOpen: h,
            disabled: U,
            onCheckout: fe,
            onClose: q,
            onOpenCreate: () => {
              (q(), S(!0));
            },
          })
        : null),
      (t[40] = fe),
      (t[41] = q),
      (t[42] = L),
      (t[43] = n),
      (t[44] = g),
      (t[45] = r),
      (t[46] = U),
      (t[47] = h),
      (t[48] = je))
    : (je = t[48]);
  let Me;
  t[49] !== Ee ||
  t[50] !== f ||
  t[51] !== h ||
  t[52] !== d ||
  t[53] !== Oe ||
  t[54] !== Ae ||
  t[55] !== je
    ? ((Me = (0, Q.jsx)(Ee, {
        side: d,
        open: h,
        align: f,
        onOpenChange: Oe,
        triggerButton: Ae,
        children: je,
      })),
      (t[49] = Ee),
      (t[50] = f),
      (t[51] = h),
      (t[52] = d),
      (t[53] = Oe),
      (t[54] = Ae),
      (t[55] = je),
      (t[56] = Me))
    : (Me = t[56]);
  let Ne;
  t[57] !== z ||
  t[58] !== ge ||
  t[59] !== n ||
  t[60] !== r ||
  t[61] !== x ||
  t[62] !== U
    ? ((Ne = x
        ? (0, Q.jsx)(rt, {
            open: x,
            onOpenChange: S,
            conversationTitle: z,
            gitRoot: n,
            hostConfig: r,
            isPending: U,
            onSubmit: ge,
          })
        : null),
      (t[57] = z),
      (t[58] = ge),
      (t[59] = n),
      (t[60] = r),
      (t[61] = x),
      (t[62] = U),
      (t[63] = Ne))
    : (Ne = t[63]);
  let Pe;
  t[64] !== A ||
  t[65] !== n ||
  t[66] !== Ce ||
  t[67] !== xe ||
  t[68] !== r ||
  t[69] !== y ||
  t[70] !== D?.branch
    ? ((Pe =
        y && n != null
          ? (0, Q.jsx)(it, {
              open: y,
              onOpenChange: xe,
              conflictFiles: A,
              gitRoot: n,
              hostConfig: r,
              targetBranch: D?.branch ?? null,
              onContinue: Ce,
            })
          : null),
      (t[64] = A),
      (t[65] = n),
      (t[66] = Ce),
      (t[67] = xe),
      (t[68] = r),
      (t[69] = y),
      (t[70] = D?.branch),
      (t[71] = Pe))
    : (Pe = t[71]);
  let Fe;
  t[72] !== T ||
  t[73] !== ve ||
  t[74] !== Te ||
  t[75] !== B ||
  t[76] !== C ||
  t[77] !== i ||
  t[78] !== F
    ? ((Fe =
        B && F != null
          ? (0, Q.jsx)(
              pe,
              {
                open: C,
                onOpenChange: w,
                conversationId: i,
                target: F,
                onStatusChange: Te,
                onRequestReset: ve,
              },
              T,
            )
          : null),
      (t[72] = T),
      (t[73] = ve),
      (t[74] = Te),
      (t[75] = B),
      (t[76] = C),
      (t[77] = i),
      (t[78] = F),
      (t[79] = Fe))
    : (Fe = t[79]);
  let Ie;
  return (
    t[80] !== Me || t[81] !== Ne || t[82] !== Pe || t[83] !== Fe
      ? ((Ie = (0, Q.jsxs)(Q.Fragment, { children: [Me, Ne, Pe, Fe] })),
        (t[80] = Me),
        (t[81] = Ne),
        (t[82] = Pe),
        (t[83] = Fe),
        (t[84] = Ie))
      : (Ie = t[84]),
    Ie
  );
}
function tt(e) {
  return e + 1;
}
function nt(e) {
  let t = (0, ut.c)(53),
    {
      currentBranch: n,
      gitRoot: r,
      hostConfig: i,
      isOpen: a,
      disabled: s,
      onCheckout: c,
      onClose: l,
      onOpenCreate: d,
    } = e,
    f = le(),
    [p, m] = (0, Z.useState)(``),
    h = u(p, 200),
    { data: ee, refetch: g } = Le(r, i, $),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { enabled: !0 }), (t[0] = _))
    : (_ = t[0]);
  let {
      data: v,
      isLoading: te,
      isFetching: ne,
      isError: y,
      refetch: b,
    } = Be(r, i, $, _),
    S = v === void 0 ? [] : v,
    C;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { enabled: !0 }), (t[1] = C))
    : (C = t[1]);
  let { data: w, refetch: T } = Ae(r, i, $, C),
    E,
    D;
  (t[2] !== a || t[3] !== b || t[4] !== T || t[5] !== g
    ? ((E = () => {
        a && Promise.all([b(), T(), g()]);
      }),
      (D = [a, b, T, g]),
      (t[2] = a),
      (t[3] = b),
      (t[4] = T),
      (t[5] = g),
      (t[6] = E),
      (t[7] = D))
    : ((E = t[6]), (D = t[7])),
    (0, Z.useEffect)(E, D));
  let O;
  t[8] === p ? (O = t[9]) : ((O = p.trim()), (t[8] = p), (t[9] = O));
  let k = O,
    A;
  t[10] === h ? (A = t[11]) : ((A = h.trim()), (t[10] = h), (t[11] = A));
  let j = A,
    M = k !== j,
    N = j.length > 0,
    P;
  t[12] !== r || t[13] !== i || t[14] !== j || t[15] !== N
    ? ((P = {
        cwd: r,
        hostConfig: i,
        operationSource: $,
        query: j,
        enabled: N,
      }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = j),
      (t[15] = N),
      (t[16] = P))
    : (P = t[16]);
  let { data: F, isFetching: re, isError: ie, refetch: L } = se(Fe, P),
    R = st({ branches: S, currentBranch: n, defaultBranch: w }),
    z = !te && !ne && !y && S.length === 0,
    B = lt(ee),
    V = B === 0 && ee?.type === `success` && ee.untrackedCount == null,
    H;
  t[17] !== z || t[18] !== f
    ? ((H = z
        ? f.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[17] = z),
      (t[18] = f),
      (t[19] = H))
    : (H = t[19]);
  let U = H,
    W = s || V,
    ae = te || (ne && R.length === 0),
    oe = M || re,
    G;
  t[20] === b
    ? (G = t[21])
    : ((G = () => {
        b();
      }),
      (t[20] = b),
      (t[21] = G));
  let K;
  t[22] === L
    ? (K = t[23])
    : ((K = () => {
        L();
      }),
      (t[22] = L),
      (t[23] = K));
  let q;
  t[24] !== n || t[25] !== B
    ? ((q = (e) =>
        e === n && B > 0
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground`,
              children: (0, Q.jsx)(x, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: B },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = B),
      (t[26] = q))
    : (q = t[26]);
  let J;
  t[27] !== n ||
  t[28] !== y ||
  t[29] !== ie ||
  t[30] !== c ||
  t[31] !== l ||
  t[32] !== R ||
  t[33] !== p ||
  t[34] !== F ||
  t[35] !== W ||
  t[36] !== ae ||
  t[37] !== oe ||
  t[38] !== G ||
  t[39] !== K ||
  t[40] !== q
    ? ((J = (0, Q.jsx)(ye, {
        branches: R,
        selectedBranch: n,
        disabled: W,
        isError: y,
        isLoading: ae,
        isSearchError: ie,
        isSearchLoading: oe,
        onClose: l,
        onRetry: G,
        onRetrySearch: K,
        onSearchQueryChange: m,
        onSelectBranch: c,
        renderBranchSubText: q,
        searchedBranches: F,
        searchQuery: p,
      })),
      (t[27] = n),
      (t[28] = y),
      (t[29] = ie),
      (t[30] = c),
      (t[31] = l),
      (t[32] = R),
      (t[33] = p),
      (t[34] = F),
      (t[35] = W),
      (t[36] = ae),
      (t[37] = oe),
      (t[38] = G),
      (t[39] = K),
      (t[40] = q),
      (t[41] = J))
    : (J = t[41]);
  let Y;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Q.jsx)(o.Separator, {})), (t[42] = Y))
    : (Y = t[42]);
  let ce = z || s || V,
    X;
  t[43] === d
    ? (X = t[44])
    : ((X = (e) => {
        (e.preventDefault(), d());
      }),
      (t[43] = d),
      (t[44] = X));
  let ue;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(x, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[45] = ue))
    : (ue = t[45]);
  let de;
  t[46] !== U || t[47] !== ce || t[48] !== X
    ? ((de = (0, Q.jsx)(o.Item, {
        LeftIcon: I,
        disabled: ce,
        tooltipText: U,
        onSelect: X,
        children: ue,
      })),
      (t[46] = U),
      (t[47] = ce),
      (t[48] = X),
      (t[49] = de))
    : (de = t[49]);
  let fe;
  return (
    t[50] !== J || t[51] !== de
      ? ((fe = (0, Q.jsxs)(Q.Fragment, { children: [J, Y, de] })),
        (t[50] = J),
        (t[51] = de),
        (t[52] = fe))
      : (fe = t[52]),
    fe
  );
}
function rt(e) {
  let t = (0, ut.c)(57),
    {
      open: n,
      onOpenChange: r,
      conversationTitle: i,
      gitRoot: o,
      hostConfig: s,
      isPending: c,
      onSubmit: l,
    } = e,
    u = le(),
    d = ne(g.branchPrefix),
    f;
  t[0] !== d || t[1] !== i
    ? ((f = de({ branchPrefix: d, conversationTitle: i })),
      (t[0] = d),
      (t[1] = i),
      (t[2] = f))
    : (f = t[2]);
  let [m, h] = (0, Z.useState)(f),
    ee = n && o != null,
    _;
  t[3] === ee ? (_ = t[4]) : ((_ = { enabled: ee }), (t[3] = ee), (t[4] = _));
  let { data: v, isLoading: te, isFetching: y, isError: b } = Be(o, s, $, _),
    C,
    w,
    T,
    E;
  if (t[5] !== m || t[6] !== v) {
    C = v === void 0 ? [] : v;
    let e = st({ branches: C, currentBranch: ``, defaultBranch: null });
    ((E = m.trim()),
      (w = E.endsWith(`/`)),
      (T = E.length > 0 && e.includes(E)),
      (t[5] = m),
      (t[6] = v),
      (t[7] = C),
      (t[8] = w),
      (t[9] = T),
      (t[10] = E));
  } else ((C = t[7]), (w = t[8]), (T = t[9]), (E = t[10]));
  let D = T,
    O = !te && !y && !b && C.length === 0,
    k = !c && !te && !y && !O && E.length > 0 && !w && !D && o != null,
    A;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(S, {
        children: (0, Q.jsx)(re, {
          title: (0, Q.jsx)(x, {
            id: `composer.footer.branchSwitch.createDialog.title`,
            defaultMessage: `Create and checkout branch`,
            description: `Title for dialog that creates and checks out a new branch from the composer footer`,
          }),
        }),
      })),
      (t[11] = A))
    : (A = t[11]);
  let j;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(Ce, {})), (t[12] = j))
    : (j = t[12]);
  let M;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        h(Ze(e.target.value));
      }),
      (t[13] = M))
    : (M = t[13]);
  let N;
  t[14] !== k || t[15] !== l || t[16] !== E
    ? ((N = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), !k)) return;
          l(E);
        }
      }),
      (t[14] = k),
      (t[15] = l),
      (t[16] = E),
      (t[17] = N))
    : (N = t[17]);
  let P;
  t[18] === u
    ? (P = t[19])
    : ((P = u.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[18] = u),
      (t[19] = P));
  let F;
  t[20] === u
    ? (F = t[21])
    : ((F = u.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[20] = u),
      (t[21] = F));
  let I;
  t[22] !== m || t[23] !== P || t[24] !== F || t[25] !== N
    ? ((I = (0, Q.jsx)(`input`, {
        autoFocus: !0,
        className: `h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground`,
        value: m,
        onChange: M,
        onKeyDown: N,
        placeholder: P,
        "aria-label": F,
      })),
      (t[22] = m),
      (t[23] = P),
      (t[24] = F),
      (t[25] = N),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] !== D || t[28] !== w || t[29] !== c
    ? ((L = w
        ? (0, Q.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, Q.jsx)(x, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : D && !c
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-token-error-foreground`,
              children: (0, Q.jsx)(x, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (t[27] = D),
      (t[28] = w),
      (t[29] = c),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] !== I || t[32] !== L
    ? ((R = (0, Q.jsxs)(S, {
        className: `flex flex-col gap-2`,
        children: [j, I, L],
      })),
      (t[31] = I),
      (t[32] = L),
      (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] === r
    ? (z = t[35])
    : ((z = () => {
        r(!1);
      }),
      (t[34] = r),
      (t[35] = z));
  let B;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(x, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[36] = B))
    : (B = t[36]);
  let V;
  t[37] === z
    ? (V = t[38])
    : ((V = (0, Q.jsx)(p, { color: `secondary`, onClick: z, children: B })),
      (t[37] = z),
      (t[38] = V));
  let H = !k,
    W;
  t[39] !== l || t[40] !== E
    ? ((W = () => {
        l(E);
      }),
      (t[39] = l),
      (t[40] = E),
      (t[41] = W))
    : (W = t[41]);
  let ae;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Q.jsx)(x, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[42] = ae))
    : (ae = t[42]);
  let oe;
  t[43] !== c || t[44] !== H || t[45] !== W
    ? ((oe = (0, Q.jsx)(p, {
        color: `primary`,
        disabled: H,
        loading: c,
        onClick: W,
        children: ae,
      })),
      (t[43] = c),
      (t[44] = H),
      (t[45] = W),
      (t[46] = oe))
    : (oe = t[46]);
  let G;
  t[47] !== V || t[48] !== oe
    ? ((G = (0, Q.jsx)(S, {
        children: (0, Q.jsxs)(ie, { children: [V, oe] }),
      })),
      (t[47] = V),
      (t[48] = oe),
      (t[49] = G))
    : (G = t[49]);
  let K;
  t[50] !== R || t[51] !== G
    ? ((K = (0, Q.jsxs)(U, {
        "data-codex-branch-create-dialog": ``,
        children: [A, R, G],
      })),
      (t[50] = R),
      (t[51] = G),
      (t[52] = K))
    : (K = t[52]);
  let q;
  return (
    t[53] !== r || t[54] !== n || t[55] !== K
      ? ((q = (0, Q.jsx)(a, {
          size: `feature`,
          open: n,
          onOpenChange: r,
          children: K,
        })),
        (t[53] = r),
        (t[54] = n),
        (t[55] = K),
        (t[56] = q))
      : (q = t[56]),
    q
  );
}
function it(e) {
  let t = (0, ut.c)(61),
    {
      open: n,
      onOpenChange: r,
      conflictFiles: i,
      gitRoot: o,
      hostConfig: s,
      targetBranch: c,
      onContinue: l,
    } = e,
    u = le(),
    { data: d } = Le(o, s, $),
    f;
  t[0] === o ? (f = t[1]) : ((f = X(o)), (t[0] = o), (t[1] = f));
  let m;
  t[2] === f
    ? (m = t[3])
    : ((m = {
        cwd: f,
        includeUntrackedFiles: !1,
        operationSource: $,
        source: `staged`,
      }),
      (t[2] = f),
      (t[3] = m));
  let h;
  t[4] === n
    ? (h = t[5])
    : ((h = { enabled: n, liveQuery: ot, staleTime: 1 / 0 }),
      (t[4] = n),
      (t[5] = h));
  let { data: ee } = W(o, s, `review-summary`, m, $, h),
    g;
  t[6] === o ? (g = t[7]) : ((g = X(o)), (t[6] = o), (t[7] = g));
  let _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = { cwd: g, operationSource: $, source: `unstaged` }),
      (t[8] = g),
      (t[9] = _));
  let v;
  t[10] === n
    ? (v = t[11])
    : ((v = { enabled: n, liveQuery: at, staleTime: 1 / 0 }),
      (t[10] = n),
      (t[11] = v));
  let { data: te } = W(o, s, `review-summary`, _, $, v),
    ne,
    y,
    b,
    C,
    w,
    T,
    E,
    D,
    O;
  if (
    t[12] !== i ||
    t[13] !== u ||
    t[14] !== r ||
    t[15] !== n ||
    t[16] !== ee ||
    t[17] !== d ||
    t[18] !== c ||
    t[19] !== te
  ) {
    let e = [ee, te],
      o = we(e),
      s = o?.totalAdditions ?? 0,
      l = o?.totalDeletions ?? 0,
      f = s + l > 0,
      p = i.length > 0,
      m;
    t[29] === d ? (m = t[30]) : ((m = lt(d)), (t[29] = d), (t[30] = m));
    let h = m,
      g;
    t[31] !== u || t[32] !== c
      ? ((g =
          c ??
          u.formatMessage({
            id: `composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback`,
            defaultMessage: `the selected branch`,
            description: `Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable`,
          })),
        (t[31] = u),
        (t[32] = c),
        (t[33] = g))
      : (g = t[33]);
    let _ = g;
    ((b = a),
      (C = `feature`),
      (w = n),
      (T = r),
      (y = U),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((O = (0, Q.jsx)(S, {
            children: (0, Q.jsx)(re, {
              title: (0, Q.jsx)(x, {
                id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                defaultMessage: `Commit changes to switch branch`,
                description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
              }),
            }),
          })),
          (t[34] = O))
        : (O = t[34]),
      (ne = S),
      (E = `text-token-description-foreground`),
      (D = p
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, Q.jsx)(x, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: i.map((t, n) => {
                  let r = ve(t, e);
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-token-foreground`,
                      children: [
                        (0, Q.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, Q.jsx)(Te, {
                              className: `inline-flex align-middle`,
                              linesAdded: r.linesAdded,
                              linesRemoved: r.linesRemoved,
                            }),
                      ],
                    },
                    `${t}:${n}`,
                  );
                }),
              }),
              (0, Q.jsx)(x, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : f
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children: [
                (0, Q.jsx)(x, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff`,
                  defaultMessage: `Commit`,
                  description: `Body prefix in the uncommitted changes dialog before diff stats`,
                }),
                (0, Q.jsx)(Te, {
                  className: `inline-flex align-middle`,
                  linesAdded: s,
                  linesRemoved: l,
                }),
                (0, Q.jsx)(x, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff`,
                  defaultMessage: `changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                  description: `Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch`,
                  values: { fileCount: h, branchName: _ },
                }),
              ],
            })
          : (0, Q.jsx)(x, {
              id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff`,
              defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
              description: `Body text in the uncommitted changes dialog when diff stats are unavailable`,
              values: { fileCount: h, branchName: _ },
            })),
      (t[12] = i),
      (t[13] = u),
      (t[14] = r),
      (t[15] = n),
      (t[16] = ee),
      (t[17] = d),
      (t[18] = c),
      (t[19] = te),
      (t[20] = ne),
      (t[21] = y),
      (t[22] = b),
      (t[23] = C),
      (t[24] = w),
      (t[25] = T),
      (t[26] = E),
      (t[27] = D),
      (t[28] = O));
  } else
    ((ne = t[20]),
      (y = t[21]),
      (b = t[22]),
      (C = t[23]),
      (w = t[24]),
      (T = t[25]),
      (E = t[26]),
      (D = t[27]),
      (O = t[28]));
  let k;
  t[35] !== ne || t[36] !== E || t[37] !== D
    ? ((k = (0, Q.jsx)(ne, { className: E, children: D })),
      (t[35] = ne),
      (t[36] = E),
      (t[37] = D),
      (t[38] = k))
    : (k = t[38]);
  let A;
  t[39] === r
    ? (A = t[40])
    : ((A = () => {
        r(!1);
      }),
      (t[39] = r),
      (t[40] = A));
  let j;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(x, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[41] = j))
    : (j = t[41]);
  let M;
  t[42] === A
    ? (M = t[43])
    : ((M = (0, Q.jsx)(p, { color: `secondary`, onClick: A, children: j })),
      (t[42] = A),
      (t[43] = M));
  let N;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Q.jsx)(x, {
        id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
        defaultMessage: `Commit and switch branch…`,
        description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[44] = N))
    : (N = t[44]);
  let P;
  t[45] === l
    ? (P = t[46])
    : ((P = (0, Q.jsx)(p, { color: `primary`, onClick: l, children: N })),
      (t[45] = l),
      (t[46] = P));
  let F;
  t[47] !== M || t[48] !== P
    ? ((F = (0, Q.jsx)(S, { children: (0, Q.jsxs)(ie, { children: [M, P] }) })),
      (t[47] = M),
      (t[48] = P),
      (t[49] = F))
    : (F = t[49]);
  let I;
  t[50] !== y || t[51] !== k || t[52] !== F || t[53] !== O
    ? ((I = (0, Q.jsxs)(y, { children: [O, k, F] })),
      (t[50] = y),
      (t[51] = k),
      (t[52] = F),
      (t[53] = O),
      (t[54] = I))
    : (I = t[54]);
  let L;
  return (
    t[55] !== b || t[56] !== C || t[57] !== w || t[58] !== T || t[59] !== I
      ? ((L = (0, Q.jsx)(b, {
          size: C,
          open: w,
          onOpenChange: T,
          children: I,
        })),
        (t[55] = b),
        (t[56] = C),
        (t[57] = w),
        (t[58] = T),
        (t[59] = I),
        (t[60] = L))
      : (L = t[60]),
    L
  );
}
function at(e) {
  return { method: `review-summary`, params: e };
}
function ot(e) {
  return { method: `review-summary`, params: e };
}
function st({ branches: e, currentBranch: t, defaultBranch: n }) {
  let r = new Set(),
    i = [];
  return (
    ct(n, i, r),
    ct(t, i, r),
    e.forEach((e) => {
      ct(e, i, r);
    }),
    i
  );
}
function ct(e, t, n) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
function lt(e) {
  return e?.type === `success`
    ? Math.max(e.stagedCount, e.unstagedCount) + (e.untrackedCount ?? 0)
    : 0;
}
var ut,
  Z,
  Q,
  $,
  dt = e(() => {
    ((ut = c()),
      y(),
      n(),
      (Z = t(f(), 1)),
      H(),
      j(),
      l(),
      m(),
      r(),
      E(),
      z(),
      fe(),
      w(),
      xe(),
      M(),
      Ie(),
      Oe(),
      Se(),
      We(),
      je(),
      ze(),
      qe(),
      Xe(),
      P(),
      ge(),
      me(),
      Ee(),
      ue(),
      k(),
      d(),
      s(),
      _e(),
      $e(),
      (Q = B()),
      ($ = `composer_branch_switcher`));
  });
export {
  We as a,
  Le as c,
  Ze as i,
  Fe as l,
  dt as n,
  Be as o,
  $e as r,
  ze as s,
  et as t,
  Ie as u,
};
//# sourceMappingURL=git-branch-switcher-D4TC8sW3.js.map
