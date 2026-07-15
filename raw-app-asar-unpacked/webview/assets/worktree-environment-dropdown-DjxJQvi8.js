import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as n,
  Cb as r,
  DK as i,
  Ds as a,
  Fq as o,
  Gb as s,
  I2 as c,
  KJ as l,
  Kb as u,
  L2 as d,
  Mq as f,
  Nq as p,
  Pq as m,
  RK as h,
  Ts as ee,
  _0 as g,
  _Y as _,
  cD as v,
  ch as y,
  cp as b,
  ix as x,
  js as S,
  k2 as C,
  kK as w,
  lD as T,
  lh as E,
  lp as D,
  mY as O,
  nK as k,
  nS as A,
  qJ as j,
  rx as M,
  sK as N,
  tS as P,
  tx as F,
  vu as te,
  x0 as I,
  yY as L,
  yu as R,
  zK as z,
  zb as B,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  ft as V,
  pt as H,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Gt as ne,
  Kt as U,
  qt as W,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  at as re,
  it as G,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import { xt as K } from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  l as q,
  s as ie,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ohr1dwam-BzJsIjl2.js";
import {
  n as ae,
  t as oe,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~kqmxf6op-Bug9YyEs.js";
import {
  a as se,
  n as ce,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ji472bec-IX389zxA.js";
import { n as le, t as ue } from "./star-DVKtBfj8.js";
import {
  c as de,
  l as fe,
  n as pe,
  s as me,
  t as he,
  u as ge,
} from "./git-branch-switcher-D4TC8sW3.js";
import { n as _e, t as ve } from "./use-git-recent-branches-BzsnJZJ-.js";
function ye(e) {
  let t = (0, be.c)(11),
    { children: n, color: r, borderColor: i, badgeEnabled: a } = e,
    o = r === void 0 ? `bg-token-text-link-active-foreground` : r,
    s = a === void 0 ? !0 : a;
  if (!s) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, J.jsx)(J.Fragment, { children: n })),
          (t[0] = n),
          (t[1] = e)),
      e
    );
  }
  let c = !s && `hidden`,
    u;
  t[2] !== i || t[3] !== o || t[4] !== c
    ? ((u = l(
        `border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]`,
        o,
        i,
        c,
      )),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === u
    ? (d = t[7])
    : ((d = (0, J.jsx)(`div`, { className: u })), (t[6] = u), (t[7] = d));
  let f;
  return (
    t[8] !== n || t[9] !== d
      ? ((f = (0, J.jsxs)(`div`, { className: `relative`, children: [n, d] })),
        (t[8] = n),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var be,
  J,
  xe = e(() => {
    ((be = c()), j(), (J = C()));
  });
function Se(e) {
  let t = (0, Oe.c)(49),
    {
      startingState: r,
      setStartingState: o,
      hostConfig: s,
      className: c,
      side: d,
      gitRootOverride: p,
      branchSource: g,
    } = e,
    v = d === void 0 ? `top` : d,
    S = L(),
    [C, w] = (0, ke.useState)(!1),
    [E, D] = (0, ke.useState)(!1),
    [O, k] = (0, ke.useState)(``),
    A = x(),
    j;
  t[0] === E ? (j = t[1]) : ((j = { enabled: E }), (t[0] = E), (t[1] = j));
  let M = se(j),
    N = p ?? M,
    P = F(A),
    te = P?.default_branch ?? `main`,
    R = P?.id ?? null,
    z = g === `worktree` || !!p,
    H = n(T),
    U = u(O, 300),
    W;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        (e && D(!0), w(e), e || k(``));
      }),
      (t[2] = W))
    : (W = t[2]);
  let G = W,
    K = !z && !!R && C && !!U,
    q;
  t[3] === K ? (q = t[4]) : ((q = { enabled: K }), (t[3] = K), (t[4] = q));
  let {
      data: ie,
      isFetching: ae,
      error: oe,
      hasNextPage: ce,
      isFetchingNextPage: le,
      fetchNextPage: ue,
      refetch: pe,
    } = B(R, U, q),
    me = z && E,
    he;
  t[5] !== H || t[6] !== me
    ? ((he = { enabled: me, retainRepoWatch: H }),
      (t[5] = H),
      (t[6] = me),
      (t[7] = he))
    : (he = t[7]);
  let {
      data: ge,
      isLoading: _e,
      refetch: ve,
    } = re(N, s, `async_task_starting_state_dropdown`, he),
    be = z && E && !!N,
    J;
  t[8] !== H || t[9] !== be
    ? ((J = { enabled: be, retainRepoWatch: H }),
      (t[8] = H),
      (t[9] = be),
      (t[10] = J))
    : (J = t[10]);
  let { data: xe } = de(N, s, `async_task_starting_state_dropdown`, J),
    {
      branches: Se,
      defaultBranch: Ee,
      fetching: De,
      error: Ae,
      refetch: je,
    } = we({
      gitRoot: N,
      hostConfig: s,
      currentBranch: ge ?? `main`,
      remoteDefaultBranch: te,
      enabled: z && E,
    }),
    Me = U.trim().toLowerCase(),
    X = Me.length > 0,
    Ne = z && C && X,
    Z;
  t[11] !== U || t[12] !== N || t[13] !== s || t[14] !== Ne
    ? ((Z = {
        cwd: N,
        hostConfig: s,
        operationSource: `async_task_starting_state_dropdown`,
        query: U,
        enabled: Ne,
      }),
      (t[11] = U),
      (t[12] = N),
      (t[13] = s),
      (t[14] = Ne),
      (t[15] = Z))
    : (Z = t[15]);
  let { data: Pe, isFetching: Fe, error: Ie, refetch: Le } = I(fe, Z),
    Re = r.type === `branch` ? r.branchName : void 0,
    Q = z ? Ee : te,
    ze = z
      ? X
        ? Pe
        : Se
      : X
        ? ie?.filter((e) => e.toLowerCase().includes(Me))
        : void 0,
    $ = !X || Q.toLowerCase().includes(Me),
    Be = ze?.filter((e) => e !== Q),
    Ve = z ? (X ? Fe : De) : ae,
    He = z ? (X ? Ie : Ae) : oe,
    Ue = z ? (X ? Le : je) : pe,
    We = !z && ce,
    Ge = ge ?? Q,
    Ke = r.type === `branch` ? r.branchName : Ge,
    qe =
      xe?.type === `success`
        ? xe.stagedCount + xe.unstagedCount + (xe.untrackedCount ?? 0) > 0
        : !1,
    Je = z && qe,
    Ye = r.type === `working-tree` && qe,
    Xe =
      r.type === `working-tree`
        ? (0, Y.jsx)(_, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: ge ?? Q },
          })
        : (0, Y.jsx)(_, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: r.branchName },
          }),
    Ze;
  t[16] === Xe
    ? (Ze = t[17])
    : ((Ze = (0, Y.jsx)(b, { electron: !0, children: Xe })),
      (t[16] = Xe),
      (t[17] = Ze));
  let Qe;
  t[18] === Ke
    ? (Qe = t[19])
    : ((Qe = (0, Y.jsx)(b, { browser: !0, children: Ke })),
      (t[18] = Ke),
      (t[19] = Qe));
  let $e = (0, Y.jsxs)(Y.Fragment, {
      children: [
        Ze,
        (0, Y.jsx)(b, {
          extension: !0,
          children: Ye
            ? (0, Y.jsx)(_, {
                id: `composer.remote.localWorkingTree`,
                defaultMessage: `Use local changes`,
                description: `Label for local working tree selection in remote composer`,
              })
            : Ke,
        }),
        Qe,
      ],
    }),
    et,
    tt;
  (t[20] !== C || t[21] !== ve || t[22] !== je || t[23] !== z
    ? ((et = () => {
        C && (ve(), z && je());
      }),
      (tt = [C, ve, je, z]),
      (t[20] = C),
      (t[21] = ve),
      (t[22] = je),
      (t[23] = z),
      (t[24] = et),
      (t[25] = tt))
    : ((et = t[24]), (tt = t[25])),
    (0, ke.useEffect)(et, tt));
  let nt;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (0, Y.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, Y.jsx)(_, {
          id: `composer.remote.branchStartingPoint`,
          defaultMessage: `What branch should this task start from?`,
          description: `Section label for branch starting point selector`,
        }),
      })),
      (t[26] = nt))
    : (nt = t[26]);
  let rt;
  t[27] === c
    ? (rt = t[28])
    : ((rt = l(`whitespace-nowrap`, c)), (t[27] = c), (t[28] = rt));
  let it = r.type === `working-tree` && qe,
    at;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, Y.jsx)(y, { className: `icon-xs` })), (t[29] = at))
    : (at = t[29]);
  let ot;
  t[30] === it
    ? (ot = t[31])
    : ((ot = (0, Y.jsx)(ye, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: it,
        children: at,
      })),
      (t[30] = it),
      (t[31] = ot));
  let st;
  t[32] === S
    ? (st = t[33])
    : ((st = S.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[32] = S),
      (t[33] = st));
  let ct;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (e) => {
        k(e.currentTarget.value);
      }),
      (t[34] = ct))
    : (ct = t[34]);
  let lt;
  t[35] === G
    ? (lt = t[36])
    : ((lt = (e) => {
        e.key === `Enter` && G(!1);
      }),
      (t[35] = G),
      (t[36] = lt));
  let ut;
  t[37] !== O || t[38] !== st || t[39] !== lt
    ? ((ut = (0, Y.jsx)(a.SearchInput, {
        autoFocus: !1,
        placeholder: st,
        value: O,
        onChange: ct,
        onKeyDown: lt,
      })),
      (t[37] = O),
      (t[38] = st),
      (t[39] = lt),
      (t[40] = ut))
    : (ut = t[40]);
  let dt = Je
      ? (0, Y.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, Y.jsx)(Te, {
              children: (0, Y.jsx)(_, {
                id: `composer.remote.localFileStateHeading`,
                defaultMessage: `Local file state`,
                description: `Section heading for local working tree selection`,
              }),
            }),
            (0, Y.jsx)(a.Item, {
              LeftIcon: Ce,
              RightIcon: r.type === `working-tree` ? h : void 0,
              SubText: qe
                ? (0, Y.jsx)(`span`, {
                    className: `text-token-description-foreground`,
                    children: (0, Y.jsx)(_, {
                      id: `composer.remote.currentEditsSuffix.useLocal`,
                      defaultMessage: `with local code changes`,
                      description: `Suffix text indicating the selection includes current edits`,
                    }),
                  })
                : void 0,
              onClick: () => {
                (o({ type: `working-tree` }), G(!1));
              },
              children: _e
                ? null
                : (0, Y.jsx)(Y.Fragment, { children: ge ?? Q }),
            }),
          ],
        })
      : null,
    ft;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, Y.jsx)(Te, {
        children: (0, Y.jsx)(_, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[41] = ft))
    : (ft = t[41]);
  let pt =
      U && Ve
        ? (0, Y.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, Y.jsx)(m, { className: `icon-xxs` }),
          })
        : U && He
          ? (0, Y.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground`,
              children: [
                (0, Y.jsx)(_, {
                  id: `composer.remote.errorLoadingBranches`,
                  defaultMessage: `Error loading branches`,
                  description: `Error message for remote starting point selector`,
                }),
                (0, Y.jsx)(f, {
                  color: `ghost`,
                  size: `icon`,
                  className: `text-token-description-foreground`,
                  onClick: () => {
                    Ue();
                  },
                  children: (0, Y.jsx)(V, { className: `icon-xxs` }),
                }),
              ],
            })
          : (0, Y.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                $ &&
                  (0, Y.jsx)(a.Item, {
                    LeftIcon: y,
                    RightIcon: Re === Q ? h : void 0,
                    onClick: () => {
                      (o({ type: `branch`, branchName: Q }), G(!1));
                    },
                    children: Q,
                  }),
                Be?.map((e) =>
                  (0, Y.jsx)(
                    a.Item,
                    {
                      LeftIcon: y,
                      RightIcon: e === Re ? h : void 0,
                      onClick: () => {
                        (o({ type: `branch`, branchName: e }), G(!1));
                      },
                      children: e,
                    },
                    e,
                  ),
                ),
                We &&
                  (0, Y.jsx)(a.Item, {
                    onClick: () => {
                      le || ue();
                    },
                    className: `w-full text-sm text-token-text-secondary`,
                    children: le
                      ? (0, Y.jsx)(_, {
                          id: `composer.remote.loadingMoreBranches`,
                          defaultMessage: `Loading…`,
                          description: `Loading more branches`,
                        })
                      : null,
                  }),
              ],
            }),
    mt;
  t[42] !== dt || t[43] !== ft || t[44] !== pt
    ? ((mt = (0, Y.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [dt, ft, pt],
      })),
      (t[42] = dt),
      (t[43] = ft),
      (t[44] = pt),
      (t[45] = mt))
    : (mt = t[45]);
  let ht;
  return (
    t[46] !== ut || t[47] !== mt
      ? ((ht = (0, Y.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [ut, mt],
        })),
        (t[46] = ut),
        (t[47] = mt),
        (t[48] = ht))
      : (ht = t[48]),
    (0, Y.jsx)(ee, {
      side: v,
      open: C,
      onOpenChange: G,
      triggerButton: (0, Y.jsx)(i, {
        tooltipContent: nt,
        children: (0, Y.jsx)(ne, {
          "data-composer-navigation-target": `starting-state`,
          categoryLabel: null,
          className: rt,
          collapse: `secondary`,
          icon: ot,
          indicator: `collapsible-chevron`,
          value: $e,
          valueClassName: `max-w-40`,
        }),
      }),
      children: ht,
    })
  );
}
function Ce(e) {
  let t = (0, Oe.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Y.jsx)(ye, {
          borderColor: `border-token-side-bar-background`,
          children: (0, Y.jsx)(y, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function we(e) {
  let t = (0, Oe.c)(20),
    {
      gitRoot: r,
      hostConfig: i,
      currentBranch: a,
      remoteDefaultBranch: o,
      enabled: s,
    } = e,
    c = n(T),
    l;
  t[0] !== s || t[1] !== c
    ? ((l = { enabled: s, retainRepoWatch: c }),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let {
      data: u,
      isLoading: d,
      isFetching: f,
      error: p,
      refetch: m,
    } = ae(r, i, `async_task_starting_state_dropdown`, l),
    h;
  t[3] !== s || t[4] !== c
    ? ((h = { enabled: s, retainRepoWatch: c }),
      (t[3] = s),
      (t[4] = c),
      (t[5] = h))
    : (h = t[5]);
  let {
      data: ee,
      isLoading: g,
      isFetching: _,
      error: v,
      refetch: y,
    } = _e(r, i, `async_task_starting_state_dropdown`, h),
    b;
  if (t[6] !== a || t[7] !== u || t[8] !== ee || t[9] !== o) {
    let e = [
        u,
        a,
        Ee({
          currentBranch: a,
          gitDefaultBranch: u,
          recentBranches: ee,
          remoteDefaultBranch: o,
        }),
        ...(ee ?? []),
      ],
      n = new Set();
    ((b = []),
      e.forEach((e) => {
        De({ branch: e, list: b, seen: n });
      }),
      (t[6] = a),
      (t[7] = u),
      (t[8] = ee),
      (t[9] = o),
      (t[10] = b));
  } else b = t[10];
  let x = b[0] ?? a ?? o,
    S = d || f || g || _,
    C = p ?? v,
    w;
  t[11] !== m || t[12] !== y
    ? ((w = async () => {
        await Promise.all([m(), y()]);
      }),
      (t[11] = m),
      (t[12] = y),
      (t[13] = w))
    : (w = t[13]);
  let E = w,
    D;
  return (
    t[14] !== b || t[15] !== x || t[16] !== C || t[17] !== S || t[18] !== E
      ? ((D = {
          branches: b,
          defaultBranch: x,
          fetching: S,
          error: C,
          refetch: E,
        }),
        (t[14] = b),
        (t[15] = x),
        (t[16] = C),
        (t[17] = S),
        (t[18] = E),
        (t[19] = D))
      : (D = t[19]),
    D
  );
}
function Te(e) {
  let t = (0, Oe.c)(5),
    { className: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = l(
        `text-sm text-token-description-foreground px-[var(--padding-row-x)] py-1`,
        n,
      )),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, Y.jsx)(`div`, { className: i, children: r })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ee({
  currentBranch: e,
  gitDefaultBranch: t,
  recentBranches: n,
  remoteDefaultBranch: r,
}) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function De({ branch: e, list: t, seen: n }) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var Oe,
  ke,
  Y,
  Ae = e(() => {
    ((Oe = c()),
      j(),
      g(),
      (ke = t(d(), 1)),
      O(),
      r(),
      xe(),
      p(),
      S(),
      o(),
      w(),
      D(),
      ge(),
      G(),
      oe(),
      ve(),
      me(),
      E(),
      z(),
      H(),
      v(),
      ce(),
      s(),
      M(),
      W(),
      K(),
      (Y = C()));
  });
function je(e) {
  let t = (0, Ne.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Z.jsx)(he, {
          ...e,
          renderStaticBranch: X,
          renderControl: Me,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function Me(e) {
  let { currentBranch: t, disabled: n, isPending: r, switchTooltipText: a } = e;
  return t == null
    ? null
    : (0, Z.jsx)(i, {
        tooltipContent: a,
        children: (0, Z.jsx)(ne, {
          "data-composer-navigation-target": `branch`,
          categoryLabel: null,
          className: `px-0`,
          collapse: `sm`,
          disabled: n,
          icon: (0, Z.jsx)(y, { className: `icon-xs` }),
          indicator: r ? `pending` : `collapsible-chevron`,
          value: t,
          valueClassName: `max-w-40 text-sm`,
        }),
      });
}
function X(e) {
  let { currentBranch: t } = e;
  return (0, Z.jsx)(i, {
    tooltipContent: t,
    children: (0, Z.jsx)(U, {
      categoryLabel: null,
      className: `text-token-description-foreground`,
      collapse: `sm`,
      icon: (0, Z.jsx)(y, { className: `icon-xs` }),
      value: t,
      valueClassName: `max-w-40 text-sm`,
    }),
  });
}
var Ne,
  Z,
  Pe = e(() => {
    ((Ne = c()), w(), E(), pe(), W(), (Z = C()));
  });
function Fe(e) {
  let t = (0, Q.c)(78),
    {
      className: n,
      labelClassName: r,
      environments: o,
      isLoading: s,
      hasError: c,
      side: u,
      align: d,
      showIcon: f,
      selectedConfigPath: p,
      onSelectConfigPath: g,
      onOpenSettings: v,
      showDefaultOption: y,
    } = e,
    b = u === void 0 ? `top` : u,
    x = d === void 0 ? `start` : d,
    S = f === void 0 ? !0 : f,
    C = y === void 0 ? !0 : y,
    [w, T] = (0, ze.useState)(!1),
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    F,
    I,
    L,
    R,
    z,
    B;
  if (
    t[0] !== x ||
    t[1] !== n ||
    t[2] !== o ||
    t[3] !== c ||
    t[4] !== s ||
    t[5] !== r ||
    t[6] !== g ||
    t[7] !== w ||
    t[8] !== p ||
    t[9] !== C ||
    t[10] !== S ||
    t[11] !== b
  ) {
    let e = ie(o),
      u;
    (t[25] === p
      ? (u = t[26])
      : ((u = p ? N(p) : null), (t[25] = p), (t[26] = u)),
      (O = u));
    let d = o.find((e) => N(e.configPath) === O) ?? null,
      f = !s && !c;
    D = e && C ? o.filter((t) => N(t.configPath) !== N(e.configPath)) : o;
    let m = Re({ isLoading: s, selectedEnvironment: d });
    ((E = ee), (k = w), (A = T), (j = b), (M = x));
    let v;
    t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, $.jsx)(_, {
          id: `composer.worktreeEnvironment.tooltip`,
          defaultMessage: `Select a local environment`,
          description: `Tooltip for local environment selector`,
        })),
        (t[27] = v))
      : (v = t[27]);
    let y;
    t[28] === n
      ? (y = t[29])
      : ((y = l(`whitespace-nowrap`, n)), (t[28] = n), (t[29] = y));
    let P = r == null ? `secondary` : `sm`,
      V;
    t[30] === S
      ? (V = t[31])
      : ((V = S ? (0, $.jsx)(te, { className: `icon-xs` }) : null),
        (t[30] = S),
        (t[31] = V));
    let H = s ? `pending` : `collapsible-chevron`,
      U;
    (t[32] === r
      ? (U = t[33])
      : ((U = l(`max-w-40`, r)), (t[32] = r), (t[33] = U)),
      t[34] !== m ||
      t[35] !== y ||
      t[36] !== P ||
      t[37] !== V ||
      t[38] !== H ||
      t[39] !== U
        ? ((F = (0, $.jsx)(i, {
            tooltipContent: v,
            children: (0, $.jsx)(ne, {
              "data-composer-navigation-target": `environment`,
              categoryLabel: null,
              className: y,
              collapse: P,
              icon: V,
              indicator: H,
              value: m,
              valueClassName: U,
            }),
          })),
          (t[34] = m),
          (t[35] = y),
          (t[36] = P),
          (t[37] = V),
          (t[38] = H),
          (t[39] = U),
          (t[40] = F))
        : (F = t[40]),
      (z = `flex w-64 flex-col overflow-hidden`),
      t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((B = (0, $.jsx)(a.Title, {
            children: (0, $.jsx)(_, {
              id: `composer.worktreeEnvironment.title`,
              defaultMessage: `Local environment`,
              description: `Title for worktree environment dropdown`,
            }),
          })),
          (t[41] = B))
        : (B = t[41]),
      (I = `vertical-scroll-fade-mask flex max-h-[220px] flex-col overflow-y-auto`),
      t[42] !== g || t[43] !== p || t[44] !== f
        ? ((L = f
            ? (0, $.jsx)(a.Item, {
                RightIcon: p == null ? h : void 0,
                onClick: () => {
                  (g(null), T(!1));
                },
                children: (0, $.jsx)(_, {
                  id: `codex.environmentSelector.noEnvironment`,
                  defaultMessage: `No environment`,
                  description: `No environment selected message`,
                }),
              })
            : null),
          (t[42] = g),
          (t[43] = p),
          (t[44] = f),
          (t[45] = L))
        : (L = t[45]),
      (R =
        C && e
          ? (0, $.jsx)(a.Item, {
              RightIcon: O != null && N(e.configPath) === O ? h : void 0,
              onClick: () => {
                (g(e.configPath), T(!1));
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(i, {
                    tooltipContent: (0, $.jsx)(_, {
                      id: `composer.worktreeEnvironment.default`,
                      defaultMessage: `Default environment`,
                      description: `Tooltip for default local environment icon`,
                    }),
                    children: (0, $.jsx)(ue, {
                      className: `icon-xxs shrink-0 text-token-description-foreground`,
                    }),
                  }),
                  (0, $.jsx)(`span`, {
                    className: `truncate`,
                    children: Le(e),
                  }),
                ],
              }),
            })
          : null),
      (t[0] = x),
      (t[1] = n),
      (t[2] = o),
      (t[3] = c),
      (t[4] = s),
      (t[5] = r),
      (t[6] = g),
      (t[7] = w),
      (t[8] = p),
      (t[9] = C),
      (t[10] = S),
      (t[11] = b),
      (t[12] = E),
      (t[13] = D),
      (t[14] = O),
      (t[15] = k),
      (t[16] = A),
      (t[17] = j),
      (t[18] = M),
      (t[19] = F),
      (t[20] = I),
      (t[21] = L),
      (t[22] = R),
      (t[23] = z),
      (t[24] = B));
  } else
    ((E = t[12]),
      (D = t[13]),
      (O = t[14]),
      (k = t[15]),
      (A = t[16]),
      (j = t[17]),
      (M = t[18]),
      (F = t[19]),
      (I = t[20]),
      (L = t[21]),
      (R = t[22]),
      (z = t[23]),
      (B = t[24]));
  let V;
  t[46] !== D ||
  t[47] !== o.length ||
  t[48] !== c ||
  t[49] !== s ||
  t[50] !== O ||
  t[51] !== g ||
  t[52] !== p
    ? ((V = s
        ? (0, $.jsx)(`div`, {
            className: `flex items-center justify-center py-4`,
            children: (0, $.jsx)(m, { className: `icon-xxs` }),
          })
        : c
          ? (0, $.jsx)(a.Message, {
              compact: !0,
              tone: `error`,
              children: (0, $.jsx)(_, {
                id: `composer.worktreeEnvironment.error`,
                defaultMessage: `Error loading environments`,
                description: `Error state for worktree environment dropdown`,
              }),
            })
          : D.length > 0
            ? (0, $.jsx)(`div`, {
                className: `flex flex-col`,
                children: D.map((e) => {
                  let t = p != null && N(e.configPath) === O;
                  return (0, $.jsx)(
                    a.Item,
                    {
                      RightIcon: t ? h : void 0,
                      onClick: () => {
                        (g(e.configPath), T(!1));
                      },
                      children: (0, $.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: Le(e),
                      }),
                    },
                    e.configPath,
                  );
                }),
              })
            : o.length === 0
              ? (0, $.jsx)(a.Message, {
                  compact: !0,
                  children: (0, $.jsx)(_, {
                    id: `codex.environments.noEnvironmentsFound`,
                    defaultMessage: `No environments found`,
                    description: `Message shown when no Codex environments were found`,
                  }),
                })
              : null),
      (t[46] = D),
      (t[47] = o.length),
      (t[48] = c),
      (t[49] = s),
      (t[50] = O),
      (t[51] = g),
      (t[52] = p),
      (t[53] = V))
    : (V = t[53]);
  let H;
  t[54] !== V || t[55] !== I || t[56] !== L || t[57] !== R
    ? ((H = (0, $.jsxs)(`div`, { className: I, children: [L, R, V] })),
      (t[54] = V),
      (t[55] = I),
      (t[56] = L),
      (t[57] = R),
      (t[58] = H))
    : (H = t[58]);
  let U;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(a.Separator, {})), (t[59] = U))
    : (U = t[59]);
  let W;
  t[60] === v
    ? (W = t[61])
    : ((W = () => {
        (v(), T(!1));
      }),
      (t[60] = v),
      (t[61] = W));
  let re;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(_, {
        id: `composer.worktreeEnvironment.create`,
        defaultMessage: `Create local environment`,
        description: `CTA to open local environment settings from worktree dropdown`,
      })),
      (t[62] = re))
    : (re = t[62]);
  let G;
  t[63] === W
    ? (G = t[64])
    : ((G = (0, $.jsx)(a.Section, {
        className: `flex flex-col pb-1`,
        children: (0, $.jsx)(a.Item, { LeftIcon: P, onClick: W, children: re }),
      })),
      (t[63] = W),
      (t[64] = G));
  let K;
  t[65] !== H || t[66] !== G || t[67] !== z || t[68] !== B
    ? ((K = (0, $.jsxs)(`div`, { className: z, children: [B, H, U, G] })),
      (t[65] = H),
      (t[66] = G),
      (t[67] = z),
      (t[68] = B),
      (t[69] = K))
    : (K = t[69]);
  let q;
  return (
    t[70] !== E ||
    t[71] !== k ||
    t[72] !== A ||
    t[73] !== j ||
    t[74] !== M ||
    t[75] !== F ||
    t[76] !== K
      ? ((q = (0, $.jsx)(E, {
          open: k,
          onOpenChange: A,
          side: j,
          align: M,
          triggerButton: F,
          children: K,
        })),
        (t[70] = E),
        (t[71] = k),
        (t[72] = A),
        (t[73] = j),
        (t[74] = M),
        (t[75] = F),
        (t[76] = K),
        (t[77] = q))
      : (q = t[77]),
    q
  );
}
function Ie(e) {
  let t = N(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
function Le(e) {
  if (e.type === `success`) {
    let t = e.environment.name.trim();
    return t.length > 0 ? t : Ie(e.configPath);
  }
  return Ie(e.configPath);
}
function Re({ isLoading: e, selectedEnvironment: t }) {
  return e
    ? (0, $.jsx)(_, {
        id: `composer.worktreeEnvironment.loading`,
        defaultMessage: `Loading environments…`,
        description: `Loading label for worktree environment dropdown`,
      })
    : t?.type === `success`
      ? (0, $.jsx)($.Fragment, { children: t.environment.name })
      : (0, $.jsx)(_, {
          id: `codex.environmentSelector.noEnvironment`,
          defaultMessage: `No environment`,
          description: `No environment selected message`,
        });
}
var Q,
  ze,
  $,
  Be = e(() => {
    ((Q = c()),
      j(),
      (ze = t(d(), 1)),
      O(),
      S(),
      o(),
      w(),
      z(),
      A(),
      R(),
      le(),
      q(),
      k(),
      W(),
      ($ = C()));
  });
export {
  Se as a,
  xe as c,
  Pe as i,
  Be as n,
  Ae as o,
  je as r,
  ye as s,
  Fe as t,
};
//# sourceMappingURL=worktree-environment-dropdown-DjxJQvi8.js.map
