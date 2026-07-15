import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as n,
  $p as r,
  AY as i,
  C0 as a,
  DK as o,
  DV as s,
  Ds as c,
  GT as l,
  Gf as u,
  Gv as d,
  I2 as f,
  JA as p,
  Kv as m,
  L2 as h,
  MY as g,
  Mq as _,
  Nq as v,
  OV as y,
  Qw as b,
  RK as x,
  S0 as ee,
  SV as S,
  Sv as C,
  Ts as te,
  Wf as w,
  _0 as T,
  _S as E,
  _Y as D,
  aG as O,
  aJ as k,
  aS as A,
  ax as ne,
  cD as j,
  cO as re,
  cT as ie,
  cY as M,
  ch as N,
  cj as P,
  cp as F,
  dJ as I,
  dT as L,
  dx as ae,
  eb as oe,
  em as R,
  fJ as se,
  fx as ce,
  g$ as le,
  gv as ue,
  iE as de,
  iJ as z,
  ix as fe,
  js as pe,
  k2 as me,
  kK as B,
  lD as he,
  lh as ge,
  lm as _e,
  lp as ve,
  lx as ye,
  mE as V,
  mY as be,
  oS as xe,
  oj as Se,
  pY as Ce,
  px as we,
  qT as Te,
  rG as Ee,
  rx as De,
  sO as Oe,
  sY as ke,
  tb as Ae,
  um as je,
  vS as Me,
  vv as Ne,
  x0 as H,
  xX as Pe,
  zK as Fe,
  zZ as Ie,
  zv as Le,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Aa as Re,
  Oa as ze,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Et as Be,
  Tt as Ve,
  Un as He,
  Vn as Ue,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  at as We,
  it as Ge,
  rt as Ke,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  dc as qe,
  fc as Je,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Gt as U,
  H as Ye,
  U as Xe,
  qt as W,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  G as Ze,
  Gt as Qe,
  W as $e,
  Wt as et,
  ot as tt,
  st as nt,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  C as rt,
  S as it,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import { xt as at } from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  a as ot,
  r as st,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ohr1dwam-BzJsIjl2.js";
import {
  i as ct,
  r as lt,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~mzbvawpd-DSVh2V_a.js";
import {
  a as ut,
  c as dt,
  i as ft,
  n as pt,
  o as mt,
  r as ht,
  s as gt,
  t as _t,
} from "./worktree-environment-dropdown-DjxJQvi8.js";
import {
  a as vt,
  c as yt,
  i as bt,
  n as xt,
  o as St,
  r as Ct,
  s as wt,
  t as Tt,
} from "./local-remote-dropdown-CiovYLNh.js";
function Et(e) {
  let t = (0, G.c)(40),
    { composerMode: n, setComposerMode: r } = e,
    i = ee(ne),
    s = a(oe),
    [l, u] = (0, K.useState)(!1),
    d = we(),
    f = a(he),
    p;
  t[0] !== d.cwd || t[1] !== d.hostConfig
    ? ((p = d.cwd == null ? null : { cwd: d.cwd, hostConfig: d.hostConfig }),
      (t[0] = d.cwd),
      (t[1] = d.hostConfig),
      (t[2] = p))
    : (p = t[2]);
  let h;
  t[3] === f
    ? (h = t[4])
    : ((h = { retainRepoWatch: f }), (t[3] = f), (t[4] = h));
  let { data: g, isLoading: _ } = re(
      p,
      `cloud_follow_up_local_remote_dropdown`,
      h,
    ),
    v = g?.root != null,
    y = s?.type === `cloud` && s.hasAppliedCodeLocally,
    b,
    S;
  (t[5] !== y || t[6] !== i
    ? ((b = () => {
        y && m(i, `local`);
      }),
      (S = [y, i]),
      (t[5] = y),
      (t[6] = i),
      (t[7] = b),
      (t[8] = S))
    : ((b = t[7]), (S = t[8])),
    (0, K.useEffect)(b, S));
  let C, w;
  (t[9] !== v || t[10] !== _ || t[11] !== i
    ? ((C = () => {
        _ || v || m(i, `local`);
      }),
      (w = [v, _, i]),
      (t[9] = v),
      (t[10] = _),
      (t[11] = i),
      (t[12] = C),
      (t[13] = w))
    : ((C = t[12]), (w = t[13])),
    (0, K.useEffect)(C, w));
  let T;
  t[14] === n
    ? (T = t[15])
    : ((T =
        n === `local`
          ? (0, q.jsx)(D, { ...J.local })
          : (0, q.jsx)(D, { ...J.cloud })),
      (t[14] = n),
      (t[15] = T));
  let E = T,
    O;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, q.jsx)(D, { ...J.tooltip })), (t[16] = O))
    : (O = t[16]);
  let k;
  t[17] === n
    ? (k = t[18])
    : ((k =
        n === `cloud`
          ? (0, q.jsx)($e, { className: `icon-xs` })
          : (0, q.jsx)(et, { className: `icon-xs` })),
      (t[17] = n),
      (t[18] = k));
  let A;
  t[19] !== E || t[20] !== k
    ? ((A = (0, q.jsx)(o, {
        tooltipContent: O,
        children: (0, q.jsx)(U, {
          "data-composer-navigation-target": `run-location`,
          categoryLabel: null,
          collapse: `xs`,
          icon: k,
          indicator: `chevron`,
          value: E,
          valueClassName: `max-w-40`,
        }),
      })),
      (t[19] = E),
      (t[20] = k),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, q.jsx)(c.Title, {
        children: (0, q.jsx)(D, {
          id: `composer.mode.newTask.header`,
          defaultMessage: `Continue in`,
          description: `Header label above agent mode options`,
        }),
      })),
      (t[22] = j))
    : (j = t[22]);
  let ie = n === `local` ? x : void 0,
    M;
  t[23] === r
    ? (M = t[24])
    : ((M = () => {
        (r(`local`), u(!1));
      }),
      (t[23] = r),
      (t[24] = M));
  let N;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, q.jsx)(D, { ...J.local })), (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] !== ie || t[27] !== M
    ? ((P = (0, q.jsx)(c.Item, {
        LeftIcon: et,
        RightIcon: ie,
        onClick: M,
        children: N,
      })),
      (t[26] = ie),
      (t[27] = M),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] !== n || t[30] !== v || t[31] !== r
    ? ((F = v
        ? (0, q.jsx)(c.Item, {
            LeftIcon: $e,
            RightIcon: n === `cloud` ? x : void 0,
            onClick: () => {
              (r(`cloud`), u(!1));
            },
            children: (0, q.jsx)(D, { ...J.cloud }),
          })
        : null),
      (t[29] = n),
      (t[30] = v),
      (t[31] = r),
      (t[32] = F))
    : (F = t[32]);
  let I;
  t[33] !== P || t[34] !== F
    ? ((I = (0, q.jsxs)(`div`, {
        className: `flex w-44 flex-col`,
        children: [j, P, F],
      })),
      (t[33] = P),
      (t[34] = F),
      (t[35] = I))
    : (I = t[35]);
  let L;
  return (
    t[36] !== l || t[37] !== A || t[38] !== I
      ? ((L = (0, q.jsx)(te, {
          open: l,
          onOpenChange: u,
          triggerButton: A,
          children: I,
        })),
        (t[36] = l),
        (t[37] = A),
        (t[38] = I),
        (t[39] = L))
      : (L = t[39]),
    L
  );
}
var G,
  K,
  q,
  J,
  Dt = e(() => {
    ((G = f()),
      T(),
      (K = t(h(), 1)),
      be(),
      pe(),
      B(),
      Oe(),
      ce(),
      Fe(),
      Ze(),
      Qe(),
      j(),
      ae(),
      W(),
      Ae(),
      Le(),
      (q = me()),
      (J = Ce({
        local: {
          id: `composer.cloudFollowUp.local`,
          defaultMessage: `Local`,
          description: `Local follow-up option`,
        },
        cloud: {
          id: `composer.cloudFollowUp.cloud`,
          defaultMessage: `Cloud`,
          description: `Cloud follow-up option`,
        },
        tooltip: {
          id: `composer.cloudFollowUp.whereRun`,
          defaultMessage: `Where should this follow-up run?`,
          description: `Tooltip for choosing between local and cloud follow-ups`,
        },
      })));
  });
function Ot(e) {
  let t = (0, kt.c)(30),
    { startingState: n, setStartingState: r } = e,
    [i, a] = (0, At.useState)(!1),
    s;
  t[0] === n
    ? (s = t[1])
    : ((s =
        n === `working-tree`
          ? (0, X.jsx)(D, { ...Z.workingTree })
          : (0, X.jsx)(D, { ...Z.directFollowUp })),
      (t[0] = n),
      (t[1] = s));
  let l = s,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, X.jsx)(D, {
          id: `composer.remote.startingPoint`,
          defaultMessage: `What code should this task start from?`,
          description: `Section label for remote starting point selector`,
        }),
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(D, {
        id: `composer.followUpStartingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the follow-up starting state control in the composer footer`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let f = n === `working-tree`,
    p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(N, { className: `icon-xs` })), (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] === f
    ? (m = t[6])
    : ((m = (0, X.jsx)(gt, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: f,
        children: p,
      })),
      (t[5] = f),
      (t[6] = m));
  let h;
  t[7] !== l || t[8] !== m
    ? ((h = (0, X.jsx)(o, {
        tooltipContent: u,
        children: (0, X.jsx)(U, {
          "data-composer-navigation-target": `starting-state`,
          categoryLabel: d,
          collapse: `none`,
          icon: m,
          indicator: `chevron`,
          value: l,
          valueClassName: `max-[440px]:hidden`,
        }),
      })),
      (t[7] = l),
      (t[8] = m),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(D, {
        id: `composer.remote.currentEditsSuffix.followUp`,
        defaultMessage: `Create a new task that references this cloud task.`,
        description: `Suffix text indicating the selection includes current edits`,
      })),
      (t[10] = g))
    : (g = t[10]);
  let _ = n === `working-tree` ? x : void 0,
    v;
  t[11] === r
    ? (v = t[12])
    : ((v = () => {
        (r(`working-tree`), a(!1));
      }),
      (t[11] = r),
      (t[12] = v));
  let y;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(D, { ...Z.workingTree })), (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== v || t[15] !== _
    ? ((b = (0, X.jsx)(o, {
        tooltipContent: g,
        children: (0, X.jsx)(c.Item, {
          LeftIcon: Y,
          RightIcon: _,
          onClick: v,
          children: y,
        }),
      })),
      (t[14] = v),
      (t[15] = _),
      (t[16] = b))
    : (b = t[16]);
  let ee = n === `direct-follow-up` ? x : void 0,
    S;
  t[17] === r
    ? (S = t[18])
    : ((S = () => {
        (r(`direct-follow-up`), a(!1));
      }),
      (t[17] = r),
      (t[18] = S));
  let C;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(D, { ...Z.directFollowUp })), (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] !== ee || t[21] !== S
    ? ((w = (0, X.jsx)(c.Item, {
        LeftIcon: N,
        RightIcon: ee,
        onClick: S,
        children: C,
      })),
      (t[20] = ee),
      (t[21] = S),
      (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] !== b || t[24] !== w
    ? ((T = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-1 pt-1`,
        children: [b, w],
      })),
      (t[23] = b),
      (t[24] = w),
      (t[25] = T))
    : (T = t[25]);
  let E;
  return (
    t[26] !== i || t[27] !== T || t[28] !== h
      ? ((E = (0, X.jsx)(te, {
          open: i,
          onOpenChange: a,
          triggerButton: h,
          children: T,
        })),
        (t[26] = i),
        (t[27] = T),
        (t[28] = h),
        (t[29] = E))
      : (E = t[29]),
    E
  );
}
function Y(e) {
  let t = (0, kt.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(gt, {
          borderColor: `border-token-dropdown-background`,
          children: (0, X.jsx)(N, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var kt,
  At,
  X,
  Z,
  jt = e(() => {
    ((kt = f()),
      (At = t(h(), 1)),
      be(),
      dt(),
      pe(),
      B(),
      ge(),
      Fe(),
      at(),
      W(),
      (X = me()),
      (Z = Ce({
        workingTree: {
          id: `composer.remote.localWorkingTree`,
          defaultMessage: `Use local changes`,
          description: `Label for local working tree selection in remote composer`,
        },
        directFollowUp: {
          id: `composer.remote.directFollowUp`,
          defaultMessage: `Don't use local changes`,
          description: `Label for direct follow-up selection in remote composer`,
        },
      })));
  });
function Mt() {
  let e = (0, Nt.c)(2),
    { data: t } = a(Pt);
  if (!(t?.hasCustomCliExecutable ?? !1)) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(D, {
        id: `composer.customCliTooltip`,
        defaultMessage: `Using a custom CLI executable`,
        description: `Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(o, {
          tooltipContent: n,
          children: (0, Q.jsx)(_, {
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            className: `-mx-2`,
            children: (0, Q.jsx)(w, {
              className: `icon-xs text-token-editor-warning-foreground`,
            }),
          }),
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var Nt,
  Q,
  Pt,
  Ft = e(() => {
    ((Nt = f()),
      T(),
      be(),
      v(),
      B(),
      u(),
      M(),
      se(),
      k(),
      (Q = me()),
      (Pt = z(ke, `has-custom-cli-executable`, { staleTime: I.FIVE_SECONDS })));
  });
function It({
  variant: e,
  composerMode: t,
  setComposerMode: n,
  isResponseInProgress: i,
  worktreeEnvironmentHostId: o,
  worktreeEnvironmentWorkspaceRoot: s,
  codexHome: c,
  pluginsControl: l,
  showRuntimeControls: u,
  hideRunLocationDropdown: f,
  showWorkspaceDropdown: p,
  gitRootForStartingState: m,
  showUtilityBarBranchWhen: h,
  freeUpsellButton: v,
  remoteConfig: x,
  activeProjectIdOverride: S,
  localRemoteExecutionTarget: te,
}) {
  let w = ee(ne),
    T = Se(),
    { state: E } = T,
    k = P(),
    A = a(oe),
    j = a(Ne),
    M = a(C);
  a(ue);
  let I = fe(),
    L = Re(),
    ae = t !== `cloud` && A?.type !== `cloud`,
    R = ye(w);
  E?.prefillAeonStartTarget;
  let se = H(ie, R),
    ce = R != null && !se,
    z = we(R),
    pe = H(Te, R),
    me = H(de, R),
    B = H(Bt, R),
    ge = A != null || B,
    _e = x.currentHostId ?? `local`,
    ve = ct({
      composerMode: t,
      draftRemoteHostId: _e,
      followUpType: A?.type,
      hasStartedBranchConversation: B,
    }),
    V = ve ? _e : pe,
    be = !ve && V !== `local`,
    Ce = H(b, R),
    { data: Ee } = Me(le.THREAD_PROJECT_ASSIGNMENTS),
    De = Pe(
      g({ cwd: Ce, assignment: R == null ? void 0 : Ee?.[R] }),
      xe(z.hostId) ?? c,
    ),
    Oe = e === `home`,
    ke = O(`1115442235`),
    Ae = De,
    Fe = H(je, R),
    Le = y(),
    ze = Le.find((e) => e.hostId === V) ?? null,
    Be = V === `local` ? null : be ? z.cwd : x.getProjectPathForHostId(V),
    He = Le.find((e) => e.hostId === x.currentHostId) ?? null,
    We = x.getProjectPathForHostId(x.currentHostId),
    qe = (0, zt.useMemo)(
      () => ({
        isAttachedToStartedTask: ge,
        existingRemoteThreadState: {
          hostId: V,
          connectionDisplayName:
            V === `local` ? null : (ze?.displayName ?? null),
          projectPath: Be,
        },
        draftNewThreadRemoteSelectionState: {
          hostId: x.currentHostId,
          connectionDisplayName: He?.displayName ?? null,
          projectPath: We,
        },
      }),
      [ze?.displayName, Be, ge, x.currentHostId, V, He?.displayName, We],
    ),
    U = z.hostConfig,
    Xe =
      H(r, { hostConfig: U, operationSource: `composer_content` }).data
        ?.available === !0 &&
      ae &&
      !ce
        ? z.cwd
        : null,
    { data: W, isLoading: Ze } = re(
      Xe == null ? null : { cwd: Xe, hostConfig: U },
      `composer_content`,
      { enabled: !0, retainRepoWatch: a(he), watchForGitInit: !1 },
    ),
    {
      canCreateGitRepository: Qe,
      createGitRepository: $e,
      isCreatingGitRepository: et,
    } = Je({ cwd: Xe, hostConfig: U, showErrorToast: !0 }),
    tt = Xe != null && W != null,
    rt = ae && tt && W?.root == null,
    it = !Qe || et || !tt || Ze,
    at = rt ? null : v,
    st = t === `worktree`,
    {
      environments: lt,
      isLoading: dt,
      error: ft,
      resolvedConfigPath: pt,
      updateSelection: mt,
    } = ot({ hostId: o, workspaceRoot: st ? s : null }),
    gt =
      !A && st
        ? (0, $.jsx)(_t, {
            environments: lt,
            isLoading: dt,
            hasError: ft != null,
            selectedConfigPath: pt,
            onSelectConfigPath: mt,
            onOpenSettings: () => {
              (nt(w, o),
                k(Ue({ workspaceRoot: s }), {
                  state: {
                    hostId: o,
                    returnTo: `${T.pathname}${T.search}${T.hash}`,
                  },
                }));
            },
          })
        : null,
    bt =
      !A && (t === `cloud` || t === `worktree`)
        ? (0, $.jsx)(F, {
            electron: !0,
            browser: I != null,
            children: (0, $.jsx)(ut, {
              startingState: j,
              setStartingState: (e) => {
                d(w, `asyncThreadStartingState`, e);
              },
              hostConfig: U,
              gitRootOverride: m,
              branchSource: t === `worktree` ? `worktree` : `cloud`,
            }),
          })
        : null,
    xt = (0, zt.useMemo)(
      () =>
        ke && Ct({ isCompactWindow: L }) && R != null && z.cwd != null
          ? {
              conversationTitle: Fe,
              cwd: Ie(z.cwd),
              isWorktreeConversation: De,
            }
          : null,
      [R, Fe, z.cwd, L, De, ke],
    ),
    St = R != null && V !== `local` && me?.role === `follower`,
    wt = (h === `always` || t === `local`) && !St && !ce && !Ze,
    G = (0, zt.useMemo)(
      () =>
        wt && !rt
          ? (0, $.jsx)(ht, {
              gitRoot: W?.root ?? null,
              hostConfig: U,
              localConversationId: R,
              shouldShow: !0,
              align: `start`,
            })
          : null,
      [R, W?.root, U, rt, wt],
    ),
    K = null;
  K =
    A?.type === `cloud`
      ? (0, $.jsx)(Et, { composerMode: t, setComposerMode: n })
      : (0, $.jsx)(Tt, {
          composerMode: t,
          setComposerMode: n,
          conversationId: R,
          executionTargetOverride: te,
          remoteSelectionState: qe,
          disabled: Ae,
          hideModeDropdown: f,
          allowWorktree: !A && !i,
          threadHandoff: xt,
          worktreeLabelOnly: Ae,
        });
  let q =
      p && yt(t) && !A
        ? (0, $.jsx)(F, {
            electron: !0,
            browser: !0,
            children: (0, $.jsx)(Ve, {
              activeProjectIdOverride: S,
              allowLocalProjectActions: !0,
              variant: e === `home` ? `home` : `default`,
            }),
          })
        : null,
    J = A ? (0, $.jsx)(Mt, {}) : null,
    Dt =
      t === `cloud` && A?.type === `cloud` && A.hasAppliedCodeLocally
        ? (0, $.jsx)(Ot, {
            startingState: M,
            setStartingState: (e) => {
              d(w, `followUpCloudStartingState`, e);
            },
          })
        : null,
    Y = ve
      ? qe.draftNewThreadRemoteSelectionState
      : qe.existingRemoteThreadState,
    kt =
      wt && rt
        ? (0, $.jsxs)(_, {
            className: `px-0`,
            color: `ghost`,
            size: `composerSm`,
            disabled: it,
            onClick: () => {
              it || $e();
            },
            children: [
              (0, $.jsx)(N, { className: `icon-xs` }),
              (0, $.jsx)(Ge, {
                collapse: `sm`,
                className: `max-w-40 truncate text-sm`,
                children: et
                  ? (0, $.jsx)(D, {
                      id: `codex.review.noDiff.gitInit.creating`,
                      defaultMessage: `Creating…`,
                      description: `Button label shown while git init is running from the diff empty state`,
                    })
                  : (0, $.jsx)(D, {
                      id: `codex.review.noDiff.gitInit.createRepository`,
                      defaultMessage: `Create git repository`,
                      description: `Button label to create a git repository from the diff empty state`,
                    }),
              }),
            ],
          })
        : null,
    At =
      t === `local` && Y.hostId != null && Y.hostId !== `local`
        ? (0, $.jsx)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: (0, $.jsx)(Lt, {
              hostId: Y.hostId,
              connectionDisplayName: Y.connectionDisplayName,
              projectPath: Y.projectPath,
            }),
          })
        : null,
    X = u && !0,
    Z = X && !(e === `home` && S !== void 0 && S == null),
    jt =
      t === `cloud`
        ? (0, $.jsx)(F, {
            electron: !0,
            browser: !0,
            children: (0, $.jsx)(vt, {
              composerMode: t,
              conversationId: R,
              disabled: Ae,
              setComposerMode: n,
            }),
          })
        : null,
    Nt =
      A?.type === `cloud`
        ? (0, $.jsxs)($.Fragment, { children: [G, Dt] })
        : (0, $.jsxs)($.Fragment, { children: [G, jt, gt, bt] }),
    Q =
      A?.type === `cloud`
        ? (0, $.jsxs)($.Fragment, {
            children: [
              e === `home` ? G : null,
              K,
              e === `default` ? G : null,
              Dt,
            ],
          })
        : (0, $.jsxs)($.Fragment, { children: [K, Nt] }),
    Pt = !!(At || kt || at || J),
    Ft = (0, $.jsxs)($.Fragment, {
      children: [
        e === `home` ? q : null,
        X ? Q : null,
        e === `default` ? q : null,
      ],
    }),
    It = (0, $.jsxs)($.Fragment, {
      children: [q, l, Z ? K : null, Z ? Nt : null],
    }),
    Rt =
      X && Pt
        ? (0, $.jsxs)(`div`, {
            className: `flex min-w-0 shrink-0 items-center gap-3`,
            children: [At, kt, at, J],
          })
        : null;
  return e === `home`
    ? (0, $.jsx)(Ye, { trailingControls: Rt, children: Oe ? It : Ft })
    : (0, $.jsxs)(Ke, {
        className: `flex flex-wrap items-center gap-2 overflow-visible pr-2 pl-2`,
        children: [
          (0, $.jsx)(`div`, {
            className: `flex min-w-0 flex-1 flex-nowrap items-center gap-0`,
            children: Ft,
          }),
          Rt,
        ],
      });
}
function Lt(e) {
  let t = (0, Rt.c)(11),
    { hostId: n, connectionDisplayName: r, projectPath: i } = e;
  if (n == null) return null;
  let a = i == null,
    s = r ?? n,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = (0, $.jsx)(`span`, {
        className: `max-w-40 min-w-0 truncate`,
        children: s,
      })),
      (t[0] = s),
      (t[1] = c));
  let l;
  t[2] === n
    ? (l = t[3])
    : ((l = (0, $.jsx)(it, { hostId: n })), (t[2] = n), (t[3] = l));
  let u;
  t[4] !== c || t[5] !== l
    ? ((u = (0, $.jsxs)(Ge, {
        collapse: `sm`,
        className: `flex min-w-0 items-center gap-1 text-sm`,
        children: [c, l],
      })),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== i || t[8] !== a || t[9] !== u
      ? ((d = (0, $.jsx)(o, { tooltipContent: i, disabled: a, children: u })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var Rt, zt, $, Bt;
e(() => {
  ((Rt = f()),
    T(),
    i(),
    (zt = t(h(), 1)),
    be(),
    p(),
    rt(),
    L(),
    ze(),
    v(),
    B(),
    ve(),
    R(),
    qe(),
    Oe(),
    A(),
    E(),
    ce(),
    ge(),
    _e(),
    st(),
    s(),
    j(),
    M(),
    ae(),
    He(),
    tt(),
    S(),
    Ee(),
    De(),
    mt(),
    St(),
    Dt(),
    jt(),
    Ae(),
    We(),
    Xe(),
    wt(),
    ft(),
    Le(),
    Ft(),
    Be(),
    xt(),
    lt(),
    bt(),
    pt(),
    ($ = me()),
    (Bt = n(ke, (e, { get: t }) => {
      let n = t(V, e) ?? 0,
        r = t(l, e) ?? 0;
      return n > 0 || r > 0;
    })));
})();
export { It as ComposerUtilityBar };
//# sourceMappingURL=composer-utility-bar-Bn7rysuT.js.map
