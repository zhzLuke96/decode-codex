import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Ac as r,
  C0 as i,
  CS as a,
  Cw as o,
  Ec as s,
  FR as c,
  Fq as l,
  I2 as u,
  JA as d,
  KJ as f,
  L2 as p,
  Mq as m,
  NR as h,
  Nq as g,
  PB as _,
  PR as v,
  Pq as y,
  S0 as b,
  S2 as ee,
  SV as te,
  YU as x,
  _0 as S,
  _C as C,
  _Y as w,
  aJ as T,
  aS as E,
  bI as D,
  bl as O,
  bx as k,
  cY as A,
  cj as j,
  d2 as M,
  dC as N,
  eJ as ne,
  eK as P,
  gJ as re,
  h2 as ie,
  hJ as ae,
  k2 as F,
  kS as oe,
  kw as se,
  lK as I,
  lW as ce,
  mJ as le,
  mY as L,
  nK as ue,
  nf as de,
  oJ as fe,
  oK as R,
  p2 as pe,
  qJ as me,
  sS as he,
  sW as z,
  sY as ge,
  tf as _e,
  vI as ve,
  wV as ye,
  x0 as be,
  xX as B,
  y2 as V,
  yY as xe,
  yl as H,
  yx as Se,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Mt as Ce,
  Pt as we,
  jt as Te,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  $t as Ee,
  Qt as U,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Hn as De,
  Vn as Oe,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  n as ke,
  p as Ae,
  r as je,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~pcx43lpb-BOlhhGyv.js";
import {
  B as Me,
  H as Ne,
  U as Pe,
  V as W,
  W as G,
  z as K,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  d as Fe,
  s as Ie,
} from "./app-initial~app-main~onboarding-page~select-workspace-page~debug-window-page~debug-modal-R5Ac1zyt.js";
function Le() {
  let e = (0, J.c)(100),
    t = b(ge),
    n = j(),
    r = xe(),
    [a, o] = pe(je),
    s = ie(ke),
    { data: l, isFetching: u } = oe(),
    d = l === void 0 ? [] : l,
    f = Ee(),
    p;
  e[0] === f ? (p = e[1]) : ((p = (e) => !ce(e, f)), (e[0] = f), (e[1] = p));
  let m = d.filter(p).map(Ke),
    { data: g, isFetching: _ } = i(se),
    { data: y, isFetching: te } = be(Se, {
      params: { dirs: (0, Y.default)($e(m), Ge).sort(We) },
      source: `onboarding_workspace_select`,
    }),
    { data: x, isFetching: S } = he(),
    {
      autoLaunchAction: C,
      isRemoteHost: w,
      setWorkspaceOnboardingAutoLaunchApplied: T,
      workspaceOnboardingExperimentArm: E,
    } = we(),
    O;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = []), (e[2] = O))
    : (O = e[2]);
  let [k, A] = (0, X.useState)(O),
    M;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = {}), (e[3] = M))
    : (M = e[3]);
  let [N, P] = (0, X.useState)(M),
    [F, I] = (0, X.useState)(!1),
    [le, L] = (0, X.useState)(null),
    ue = (0, X.useRef)(!1),
    fe;
  e[4] === r
    ? (fe = e[5])
    : ((fe = r.formatMessage({
        id: `electron.onboarding.workspace.skip.error.unknown`,
        defaultMessage: `Unknown error`,
        description: `Fallback error message when onboarding skip fails without details`,
      })),
      (e[4] = r),
      (e[5] = fe));
  let R = fe,
    me = (0, X.useRef)(0),
    z = g?.roots,
    _e = z != null && z.length > 0,
    ve = et({ tasks: m, gitOrigins: y?.origins, codexHome: x?.codexHome }),
    ye = (0, Y.default)([...(z ?? []), ...ve, ...k], Ue).sort(He),
    B;
  e[6] === g?.labels
    ? (B = e[7])
    : ((B = (e) => {
        let t = g?.labels?.[e]?.trim();
        return t ? { root: e, label: t } : { root: e, label: tt(e) };
      }),
      (e[6] = g?.labels),
      (e[7] = B));
  let V = ye.map(B),
    H = V.map(Ve),
    Ce;
  e[8] === N ? (Ce = e[9]) : ((Ce = (e) => !!N[e]), (e[8] = N), (e[9] = Ce));
  let U = H.filter(Ce),
    De =
      H.length > 0 && U.length === H.length
        ? !0
        : U.length > 0 && U.length < H.length
          ? `indeterminate`
          : !1,
    Oe;
  (e[10] !== H ||
  e[11] !== t ||
  e[12] !== N ||
  e[13] !== A ||
  e[14] !== P ||
  e[15] !== E
    ? ((Oe = (e) => {
        A((t) => (0, Y.default)([...t, e.root], Be));
        let n = { ...N, [e.root]: !0 };
        P(n);
        let r = H.includes(e.root);
        D(t, c, {
          action: `toggle_root`,
          selectedWorkspacesCount: Qe(n, H) + (r ? 0 : 1),
          totalWorkspacesCount: r ? H.length : H.length + 1,
          experimentArm: E,
          checked: !0,
        });
      }),
      (e[10] = H),
      (e[11] = t),
      (e[12] = N),
      (e[13] = A),
      (e[14] = P),
      (e[15] = E),
      (e[16] = Oe))
    : (Oe = e[16]),
    re(`workspace-root-option-picked`, Oe));
  let Ae;
  (e[17] !== H.length ||
  e[18] !== t ||
  e[19] !== I ||
  e[20] !== s ||
  e[21] !== o ||
  e[22] !== L ||
  e[23] !== R ||
  e[24] !== E
    ? ((Ae = (e) => {
        if ((I(!1), e.success)) {
          (D(t, v, {
            selectedWorkspacesCount: 1,
            totalWorkspacesCount: H.length,
            autoNavigated: !1,
            experimentArm: E,
          }),
            L(null),
            s(Math.floor(Date.now() / 1e3)),
            o(`auto`));
          return;
        }
        L(e.error ?? R);
      }),
      (e[17] = H.length),
      (e[18] = t),
      (e[19] = I),
      (e[20] = s),
      (e[21] = o),
      (e[22] = L),
      (e[23] = R),
      (e[24] = E),
      (e[25] = Ae))
    : (Ae = e[25]),
    re(`electron-onboarding-skip-workspace-result`, Ae));
  let Me;
  e[26] !== _e || e[27] !== t || e[28] !== L || e[29] !== E
    ? ((Me = () => {
        (L(null),
          D(t, h, {
            hasExistingWorkspaces: _e,
            source: `onboarding_modal`,
            experimentArm: E,
          }),
          ae.dispatchMessage(`electron-pick-workspace-root-option`, {
            allowMultiple: !1,
          }));
      }),
      (e[26] = _e),
      (e[27] = t),
      (e[28] = L),
      (e[29] = E),
      (e[30] = Me))
    : (Me = e[30]);
  let Ne = Me,
    W;
  e[31] !== F || e[32] !== I || e[33] !== L || e[34] !== E
    ? ((W = () => {
        if (F) return;
        (L(null), I(!0));
        let e = Te(E);
        ae.dispatchMessage(
          `electron-onboarding-skip-workspace`,
          e == null ? {} : { projectName: e },
        );
      }),
      (e[31] = F),
      (e[32] = I),
      (e[33] = L),
      (e[34] = E),
      (e[35] = W))
    : (W = e[35]);
  let G = W,
    K;
  e[36] === G
    ? (K = e[37])
    : ((K = () => {
        G();
      }),
      (e[36] = G),
      (e[37] = K));
  let Fe = (0, X.useEffectEvent)(K),
    Ie;
  e[38] !== H ||
  e[39] !== t ||
  e[40] !== N ||
  e[41] !== A ||
  e[42] !== P ||
  e[43] !== L ||
  e[44] !== E
    ? ((Ie = (e, n) => {
        (L(null), A((t) => (0, Y.default)([...t, e], ze)));
        let r = { ...N, [e]: n };
        (P(r),
          D(t, c, {
            action: `toggle_root`,
            checked: n,
            selectedWorkspacesCount: Qe(r, H),
            totalWorkspacesCount: H.length,
            experimentArm: E,
          }));
      }),
      (e[38] = H),
      (e[39] = t),
      (e[40] = N),
      (e[41] = A),
      (e[42] = P),
      (e[43] = L),
      (e[44] = E),
      (e[45] = Ie))
    : (Ie = e[45]);
  let Le = Ie,
    q;
  e[46] !== H ||
  e[47] !== t ||
  e[48] !== N ||
  e[49] !== P ||
  e[50] !== L ||
  e[51] !== E
    ? ((q = (e) => {
        L(null);
        let n = { ...N };
        for (let t of H) n[t] = e;
        (P(n),
          D(t, c, {
            action: `select_all`,
            checked: e,
            selectedWorkspacesCount: Qe(n, H),
            totalWorkspacesCount: H.length,
            experimentArm: E,
          }));
      }),
      (e[46] = H),
      (e[47] = t),
      (e[48] = N),
      (e[49] = P),
      (e[50] = L),
      (e[51] = E),
      (e[52] = q))
    : (q = e[52]);
  let Je = q,
    Xe;
  e[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = { queryKey: [ne, `paths-exist`] }), (e[53] = Xe))
    : (Xe = e[53]);
  let Ze = ee(Xe),
    Q = u || _ || te || S || Ze > 0,
    nt = V.length > 0,
    rt = U.length > 0,
    it = _e || ve.length > 0,
    at = !it && !Q && !nt,
    ot = (0, X.useRef)(!1),
    st;
  e[54] !== Fe || e[55] !== Q || e[56] !== C || e[57] !== T
    ? ((st = () => {
        ue.current ||
          Q ||
          C !== `select_workspace_skip_to_playground` ||
          ((ue.current = !0), T(!0), Fe());
      }),
      (e[54] = Fe),
      (e[55] = Q),
      (e[56] = C),
      (e[57] = T),
      (e[58] = st))
    : (st = e[58]);
  let ct;
  (e[59] !== Q || e[60] !== C || e[61] !== T
    ? ((ct = [Q, C, T]), (e[59] = Q), (e[60] = C), (e[61] = T), (e[62] = ct))
    : (ct = e[62]),
    (0, X.useEffect)(st, ct));
  let lt;
  e[63] !== n ||
  e[64] !== a ||
  e[65] !== H.length ||
  e[66] !== z ||
  e[67] !== t ||
  e[68] !== s ||
  e[69] !== o ||
  e[70] !== E
    ? ((lt = (e, r) => {
        D(t, v, {
          selectedWorkspacesCount: e.length,
          totalWorkspacesCount: H.length,
          autoNavigated: r,
          experimentArm: E,
        });
        let i = e;
        (s(Math.floor(Date.now() / 1e3)),
          a === `workspace` &&
            z != null &&
            (i = (0, Y.default)([...z, ...e], Re)),
          ae.dispatchMessage(`electron-update-workspace-root-options`, {
            roots: i,
          }),
          o(`auto`),
          (me.current += 1),
          de.select(t, {
            isLegacyLocalSingleFolderProject: !0,
            path: e[0],
            projectId: e[0],
          }),
          n(`/`, { replace: !0, state: { focusComposerNonce: me.current } }));
      }),
      (e[63] = n),
      (e[64] = a),
      (e[65] = H.length),
      (e[66] = z),
      (e[67] = t),
      (e[68] = s),
      (e[69] = o),
      (e[70] = E),
      (e[71] = lt))
    : (lt = e[71]);
  let $ = lt,
    ut,
    dt;
  (e[72] !== $ || e[73] !== it || e[74] !== Q || e[75] !== U
    ? ((ut = () => {
        it ||
          ot.current ||
          Q ||
          (U.length !== 0 && ((ot.current = !0), $(U, !0)));
      }),
      (dt = [$, it, Q, U]),
      (e[72] = $),
      (e[73] = it),
      (e[74] = Q),
      (e[75] = U),
      (e[76] = ut),
      (e[77] = dt))
    : ((ut = e[76]), (dt = e[77])),
    (0, X.useEffect)(ut, dt));
  let ft;
  e[78] !== $ || e[79] !== U || e[80] !== L
    ? ((ft = () => {
        (L(null), $(U, !1));
      }),
      (e[78] = $),
      (e[79] = U),
      (e[80] = L),
      (e[81] = ft))
    : (ft = e[81]);
  let pt = ft,
    mt;
  return (
    e[82] !== V ||
    e[83] !== pt ||
    e[84] !== Ne ||
    e[85] !== G ||
    e[86] !== Je ||
    e[87] !== Le ||
    e[88] !== nt ||
    e[89] !== rt ||
    e[90] !== r ||
    e[91] !== Q ||
    e[92] !== w ||
    e[93] !== F ||
    e[94] !== De ||
    e[95] !== U ||
    e[96] !== at ||
    e[97] !== le ||
    e[98] !== E
      ? ((mt = (0, Z.jsx)(Pe, {
          children: at
            ? (0, Z.jsx)(qe, {
                workspaceOnboardingExperimentArm: E,
                isRemoteHost: w,
                handleOpenFolder: Ne,
                handleSkip: G,
                isSkipPending: F,
                skipErrorMessage: le,
              })
            : (0, Z.jsx)(Ye, {
                isLoadingRoots: Q,
                hasAvailableRoots: nt,
                availableOptions: V,
                selectedRoots: U,
                selectAllState: De === `indeterminate` ? !1 : De,
                handleToggleSelectAll: Je,
                handleToggleWorkspace: Le,
                intl: r,
                handleOpenFolder: Ne,
                hasSelectedRoots: rt,
                isRemoteHost: w,
                handleSkip: G,
                isSkipPending: F,
                skipErrorMessage: le,
                handleContinue: pt,
                workspaceOnboardingExperimentArm: E,
              }),
        })),
        (e[82] = V),
        (e[83] = pt),
        (e[84] = Ne),
        (e[85] = G),
        (e[86] = Je),
        (e[87] = Le),
        (e[88] = nt),
        (e[89] = rt),
        (e[90] = r),
        (e[91] = Q),
        (e[92] = w),
        (e[93] = F),
        (e[94] = De),
        (e[95] = U),
        (e[96] = at),
        (e[97] = le),
        (e[98] = E),
        (e[99] = mt))
      : (mt = e[99]),
    mt
  );
}
function Re(e) {
  return R(e);
}
function ze(e) {
  return R(e);
}
function Be(e) {
  return R(e);
}
function Ve(e) {
  return e.root;
}
function He(e, t) {
  return e.localeCompare(t);
}
function Ue(e) {
  return R(e);
}
function We(e, t) {
  return e.localeCompare(t);
}
function Ge(e) {
  return R(e);
}
function Ke(e) {
  return { kind: `local`, key: N(e.id), at: e.createdAt, conversation: e };
}
function q(e) {
  let t = (0, J.c)(7),
    { children: n, showIcon: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r
        ? (0, Z.jsx)(H, { className: `h-10 w-10`, "aria-hidden": `true` })
        : null),
      (t[0] = r),
      (t[1] = i));
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(w, {
        id: `electron.onboarding.workspace.title`,
        defaultMessage: `Select a project`,
        description: `Title on the desktop onboarding workspace selection page`,
      })),
      (o = (0, Z.jsx)(w, {
        id: `electron.onboarding.workspace.subtitle`,
        defaultMessage: `ChatGPT will be able to edit files and run commands in selected folders`,
        description: `Subtitle on the desktop onboarding workspace selection page`,
      })),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3]));
  let s;
  return (
    t[4] !== n || t[5] !== i
      ? ((s = (0, Z.jsx)(Ne, {
          className: `max-w-[330px]`,
          icon: i,
          textClassName: `gap-6`,
          title: a,
          subtitle: o,
          children: n,
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function qe(e) {
  let t = (0, J.c)(14),
    {
      workspaceOnboardingExperimentArm: n,
      isRemoteHost: r,
      handleOpenFolder: i,
      handleSkip: a,
      isSkipPending: o,
      skipErrorMessage: s,
    } = e,
    c = Fe(n) ? `outline` : `primary`,
    l;
  t[0] !== i || t[1] !== a || t[2] !== r || t[3] !== c
    ? ((l = (0, Z.jsx)(Je, {
        className: `w-full justify-center py-2.5`,
        color: c,
        isRemoteHost: r,
        onStartFromScratch: a,
        onUseExistingFolder: i,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== a || t[6] !== r || t[7] !== o || t[8] !== s || t[9] !== n
    ? ((u = r
        ? null
        : (0, Z.jsx)(Xe, {
            handleSkip: a,
            isSkipPending: o,
            skipErrorMessage: s,
            workspaceOnboardingExperimentArm: n,
          })),
      (t[5] = a),
      (t[6] = r),
      (t[7] = o),
      (t[8] = s),
      (t[9] = n),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== l || t[12] !== u
      ? ((d = (0, Z.jsx)(q, {
          showIcon: !0,
          children: (0, Z.jsxs)(`div`, {
            className: `flex w-full flex-col gap-3`,
            children: [l, u],
          }),
        })),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function Je(e) {
  let t = (0, J.c)(10),
    {
      className: n,
      color: r,
      isRemoteHost: i,
      onStartFromScratch: a,
      onUseExistingFolder: o,
      size: s,
    } = e,
    c = i ? o : void 0,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(w, {
        id: `electron.onboarding.workspace.openFolder`,
        defaultMessage: `Add project`,
        description: `Button label to add a workspace during desktop onboarding`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== n || t[2] !== r || t[3] !== s || t[4] !== c
    ? ((u = (0, Z.jsx)(m, {
        className: n,
        color: r,
        size: s,
        onClick: c,
        children: l,
      })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c),
      (t[5] = u))
    : (u = t[5]);
  let d = u;
  if (i) return d;
  let f;
  return (
    t[6] !== a || t[7] !== o || t[8] !== d
      ? ((f = (0, Z.jsx)(Oe, {
          triggerButton: d,
          onStartFromScratch: a,
          onUseExistingFolder: o,
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function Ye(e) {
  let t = (0, J.c)(40),
    {
      isLoadingRoots: n,
      hasAvailableRoots: r,
      availableOptions: i,
      selectedRoots: a,
      selectAllState: o,
      handleToggleSelectAll: s,
      handleToggleWorkspace: c,
      intl: l,
      handleOpenFolder: u,
      handleContinue: d,
      hasSelectedRoots: p,
      isRemoteHost: h,
      handleSkip: g,
      isSkipPending: _,
      skipErrorMessage: v,
      workspaceOnboardingExperimentArm: b,
    } = e,
    ee;
  t[0] === a ? (ee = t[1]) : ((ee = new Set(a)), (t[0] = a), (t[1] = ee));
  let te = ee,
    x;
  t[2] === n
    ? (x = t[3])
    : ((x = n
        ? (0, Z.jsxs)(`div`, {
            className: `bg-token-surface-primary flex w-full items-center justify-center gap-2 rounded-2xl border border-token-border px-5 py-6`,
            children: [
              (0, Z.jsx)(y, { className: `h-4 w-4 text-token-foreground` }),
              (0, Z.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, Z.jsx)(w, {
                  id: `electron.onboarding.workspace.loading`,
                  defaultMessage: `Loading projects…`,
                  description: `Loading state while onboarding workspace options are fetched`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = x));
  let S;
  t[4] !== i ||
  t[5] !== s ||
  t[6] !== c ||
  t[7] !== r ||
  t[8] !== l ||
  t[9] !== n ||
  t[10] !== h ||
  t[11] !== o ||
  t[12] !== te
    ? ((S = r
        ? (0, Z.jsxs)(Me, {
            className: f(n && `pointer-events-none opacity-50`),
            ariaLabel: l.formatMessage({
              id: `electron.onboarding.workspace.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the available workspaces list during onboarding`,
            }),
            children: [
              (0, Z.jsx)(W, {
                checkboxId: `workspace-root-select-all`,
                checkboxClassName: K,
                checked: o,
                disabled: n,
                onCheckedChange: (e) => {
                  s(e);
                },
                label: (0, Z.jsx)(w, {
                  id: `electron.onboarding.workspace.selectAll`,
                  defaultMessage: `Select all`,
                  description: `Checkbox label for selecting all workspaces during onboarding`,
                }),
              }),
              i.map((e, t) =>
                (0, Z.jsx)(
                  Ze,
                  {
                    index: t,
                    isDisabled: n,
                    isSelected: te.has(e.root),
                    skipExistenceCheck: h,
                    option: e,
                    onToggle: c,
                  },
                  e.root,
                ),
              ),
            ],
          })
        : (0, Z.jsx)(`div`, {
            className: `text-center text-sm text-token-description-foreground`,
            children: (0, Z.jsx)(w, {
              id: `electron.onboarding.workspace.empty`,
              defaultMessage: `Add a project to continue.`,
              description: `Empty state shown when no workspaces are selected during onboarding`,
            }),
          })),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = r),
      (t[8] = l),
      (t[9] = n),
      (t[10] = h),
      (t[11] = o),
      (t[12] = te),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] !== x || t[15] !== S
    ? ((C = (0, Z.jsxs)(`div`, {
        className: `flex w-full flex-col gap-2`,
        children: [x, S],
      })),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C))
    : (C = t[16]);
  let T;
  t[17] !== u || t[18] !== g || t[19] !== h
    ? ((T = (0, Z.jsx)(Je, {
        className: `flex-1 justify-center border-token-button-border bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-token-foreground/5`,
        color: `outline`,
        size: `large`,
        isRemoteHost: h,
        onStartFromScratch: g,
        onUseExistingFolder: u,
      })),
      (t[17] = u),
      (t[18] = g),
      (t[19] = h),
      (t[20] = T))
    : (T = t[20]);
  let E = !p || n,
    D;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(w, {
        id: `electron.onboarding.workspace.continue`,
        defaultMessage: `Continue`,
        description: `Button label to continue after selecting workspaces during onboarding`,
      })),
      (t[21] = D))
    : (D = t[21]);
  let O;
  t[22] !== d || t[23] !== E
    ? ((O = (0, Z.jsx)(m, {
        className: `flex-1 justify-center text-base leading-6 font-medium`,
        color: `primary`,
        size: `large`,
        disabled: E,
        onClick: d,
        children: D,
      })),
      (t[22] = d),
      (t[23] = E),
      (t[24] = O))
    : (O = t[24]);
  let k;
  t[25] !== T || t[26] !== O
    ? ((k = (0, Z.jsxs)(`div`, {
        className: `flex w-full items-center gap-4`,
        children: [T, O],
      })),
      (t[25] = T),
      (t[26] = O),
      (t[27] = k))
    : (k = t[27]);
  let A;
  t[28] !== g || t[29] !== h || t[30] !== _ || t[31] !== v || t[32] !== b
    ? ((A = h
        ? null
        : (0, Z.jsx)(Xe, {
            handleSkip: g,
            isSkipPending: _,
            skipErrorMessage: v,
            workspaceOnboardingExperimentArm: b,
          })),
      (t[28] = g),
      (t[29] = h),
      (t[30] = _),
      (t[31] = v),
      (t[32] = b),
      (t[33] = A))
    : (A = t[33]);
  let j;
  t[34] !== A || t[35] !== k
    ? ((j = (0, Z.jsxs)(`div`, {
        className: `flex w-full flex-col gap-3`,
        children: [k, A],
      })),
      (t[34] = A),
      (t[35] = k),
      (t[36] = j))
    : (j = t[36]);
  let M;
  return (
    t[37] !== j || t[38] !== C
      ? ((M = (0, Z.jsx)(q, {
          showIcon: !1,
          children: (0, Z.jsxs)(`div`, {
            className: `flex w-full flex-col gap-4`,
            children: [C, j],
          }),
        })),
        (t[37] = j),
        (t[38] = C),
        (t[39] = M))
      : (M = t[39]),
    M
  );
}
function Xe(e) {
  let t = (0, J.c)(14),
    {
      handleSkip: n,
      isSkipPending: r,
      skipErrorMessage: i,
      workspaceOnboardingExperimentArm: a,
    } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = Fe(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] === i
    ? (c = t[3])
    : ((c =
        i == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `text-center text-sm text-token-error-foreground`,
              children: (0, Z.jsx)(w, {
                id: `electron.onboarding.workspace.skip.error`,
                defaultMessage: `Couldn't create a new project: {message}`,
                description: `Error shown when creating a new project fails during onboarding`,
                values: { message: i },
              }),
            })),
      (t[2] = i),
      (t[3] = c));
  let l;
  t[4] !== r || t[5] !== s
    ? ((l = r
        ? s
          ? (0, Z.jsx)(w, {
              id: `electron.onboarding.workspace.skipping.playground`,
              defaultMessage: `Opening playground…`,
              description: `Button label shown while opening Playground during onboarding workspace flow`,
            })
          : (0, Z.jsx)(w, {
              id: `electron.onboarding.workspace.skipping`,
              defaultMessage: `Creating a new project…`,
              description: `Button label shown while creating a new project during onboarding`,
            })
        : s
          ? (0, Z.jsx)(w, {
              id: `electron.onboarding.workspace.skip.playground`,
              defaultMessage: `Continue to playground`,
              description: `Button label to continue to Playground during onboarding`,
            })
          : (0, Z.jsx)(w, {
              id: `electron.onboarding.workspace.skip`,
              defaultMessage: `Skip`,
              description: `Button label to skip workspace selection during onboarding`,
            })),
      (t[4] = r),
      (t[5] = s),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== n || t[8] !== r || t[9] !== l
    ? ((u = (0, Z.jsx)(m, {
        className: `w-full justify-center text-base leading-6 font-medium`,
        color: `ghost`,
        size: `large`,
        disabled: r,
        onClick: n,
        children: l,
      })),
      (t[7] = n),
      (t[8] = r),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== c || t[12] !== u
      ? ((d = (0, Z.jsxs)(`div`, {
          className: `flex w-full flex-col items-center gap-2`,
          children: [c, u],
        })),
        (t[11] = c),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function Ze(e) {
  let t = (0, J.c)(21),
    {
      index: n,
      isDisabled: r,
      isSelected: i,
      skipExistenceCheck: a,
      option: o,
      onToggle: s,
    } = e,
    c = o.root,
    l;
  t[0] === c ? (l = t[1]) : ((l = I(c)), (t[0] = c), (t[1] = l));
  let u = l,
    d = R(c).replace(/\/+$/, ``),
    f,
    p;
  t[2] === c
    ? ((f = t[3]), (p = t[4]))
    : ((f = { hostId: ye, paths: [c] }),
      (p = { existingPaths: [c] }),
      (t[2] = c),
      (t[3] = f),
      (t[4] = p));
  let m = !a,
    h;
  t[5] === m ? (h = t[6]) : ((h = { enabled: m }), (t[5] = m), (t[6] = h));
  let g;
  t[7] !== f || t[8] !== p || t[9] !== h
    ? ((g = { params: f, placeholderData: p, queryConfig: h }),
      (t[7] = f),
      (t[8] = p),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let { data: _ } = fe(`paths-exist`, g);
  if (
    !(a || (_?.existingPaths ?? []).some((e) => R(e).replace(/\/+$/, ``) === d))
  )
    return null;
  let v = `workspace-root-${n}`,
    y;
  t[11] !== s || t[12] !== c
    ? ((y = (e) => {
        s(c, e);
      }),
      (t[11] = s),
      (t[12] = c),
      (t[13] = y))
    : (y = t[13]);
  let b;
  return (
    t[14] !== v ||
    t[15] !== u ||
    t[16] !== r ||
    t[17] !== i ||
    t[18] !== o.label ||
    t[19] !== y
      ? ((b = (0, Z.jsx)(W, {
          checkboxId: v,
          checkboxClassName: K,
          checked: i,
          disabled: r,
          onCheckedChange: y,
          label: o.label,
          description: u,
        })),
        (t[14] = v),
        (t[15] = u),
        (t[16] = r),
        (t[17] = i),
        (t[18] = o.label),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
function Qe(e, t) {
  let n = 0;
  for (let r of t) e[r] && (n += 1);
  return n;
}
function $e(e) {
  let t = [];
  return (
    (e ?? []).forEach((e) => {
      switch (e.kind) {
        case `local`: {
          let n =
            e.conversation?.cwd ??
            e.pendingWorktree?.startConversationParamsInput?.cwd ??
            e.pendingWorktree?.sourceWorkspaceRoot;
          n && t.push(n);
          return;
        }
        case `remote`:
          return;
      }
    }),
    t
  );
}
function et({ tasks: e, gitOrigins: t, codexHome: n }) {
  let r = $e(e);
  if (r.length === 0) return [];
  let i = t ?? [];
  return (0, Y.default)(
    r
      .map((e) => {
        let t = s(e, i);
        return !t?.root || !B(t.root, n)
          ? e
          : (i.reduce(
              (e, r) =>
                !t.originUrl || r.originUrl !== t.originUrl || B(r.root, n)
                  ? e
                  : e
                    ? r.root.length > e.length
                      ? r.root
                      : e
                    : r.root,
              null,
            ) ?? t.root);
      })
      .filter((e) => !!e),
    (e) => R(e).replace(/\/+$/, ``),
  );
}
function tt(e) {
  return P(e);
}
var J, Y, X, Z;
e(() => {
  ((J = u()),
    _(),
    V(),
    me(),
    M(),
    (Y = t(x(), 1)),
    S(),
    n(),
    (X = t(p(), 1)),
    L(),
    d(),
    a(),
    z(),
    g(),
    l(),
    k(),
    E(),
    U(),
    O(),
    _e(),
    le(),
    Ae(),
    ve(),
    De(),
    A(),
    o(),
    te(),
    r(),
    C(),
    ue(),
    T(),
    G(),
    Ce(),
    Ie(),
    (Z = F()));
})();
export { Le as SelectWorkspacePage };
//# sourceMappingURL=select-workspace-page-Cp9SG-AK.js.map
