import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $Y as n,
  $z as r,
  AY as i,
  A_ as a,
  BA as o,
  C0 as s,
  CS as c,
  ES as l,
  Fq as u,
  I2 as d,
  Kq as f,
  L2 as p,
  MU as m,
  Mq as ee,
  NU as h,
  Nq as g,
  PB as _,
  Pq as v,
  S0 as te,
  SK as y,
  WA as b,
  Zq as ne,
  _0 as x,
  _Y as S,
  aJ as C,
  bI as re,
  bJ as ie,
  bK as w,
  cD as T,
  cY as E,
  dT as D,
  eO as ae,
  hm as oe,
  if as O,
  ii as se,
  k2 as k,
  k_ as A,
  lD as ce,
  mY as j,
  mm as le,
  nU as ue,
  oO as de,
  qT as M,
  rU as fe,
  rf as N,
  ri as pe,
  sU as P,
  sY as F,
  tJ as I,
  vI as L,
  vO as R,
  x2 as z,
  y2 as B,
  yJ as V,
  yO as me,
  yY as H,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ic as he,
  Js as ge,
  Nc as U,
  Xs as W,
  hc as _e,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Ao as G,
  Lo as ve,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Ot as K,
  kt as q,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  at as ye,
  it as J,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  i as Y,
  r as X,
} from "./app-initial~app-main~pull-request-route~new-thread-panel-page~onboarding-page~projects-inde~oqn7zfcy-C31oGzdP.js";
import {
  i as be,
  n as Z,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ji472bec-IX389zxA.js";
import { n as xe, t as Q } from "./use-git-recent-branches-BzsnJZJ-.js";
var Se,
  Ce = e(() => {
    Se = `# Review Guidelines

You are acting as a reviewer for a proposed code change made by another engineer.

Review the change and respond in normal Markdown. Do not return JSON, XML, a findings object, or any structured review schema.

When feedback should be attached directly to a changed line, emit one \`::code-comment{...}\` directive for that issue. The directive creates an inline code comment in the review UI; keep the visible response as normal Markdown. Emit no directives when there are no actionable inline comments.

Required \`code-comment\` attributes: \`title\`, \`body\`, and \`file\`. Optional attributes: \`start\`, \`end\`, and \`priority\`. Use the shortest useful line range. \`file\` should be an absolute path or include the workspace folder segment.

Focus on discrete, actionable issues the original author would likely fix if they knew about them. Prefer no issues over speculative or low-signal feedback.

General guidelines for whether to call out an issue:

1. It meaningfully impacts correctness, performance, security, or maintainability.
2. It is discrete and actionable.
3. It was introduced by the change under review.
4. The author would likely fix it once aware.
5. It does not rely on unstated assumptions about intent.
6. It identifies the affected behavior clearly rather than speculating broadly.

When you call out an issue, include the relevant file and line or function in prose, explain the scenario where it matters, and keep the explanation concise. Use priority labels such as \`[P1]\` or \`[P2]\` only when helpful to communicate severity.

If there are no actionable issues, say that directly and briefly.
`;
  });
function we({ reviewInstructions: e, requestMessage: t }) {
  return [ue, Se.trim(), e.trim(), fe, t].join(`
`);
}
async function Te({ context: e, hostId: t, intl: n }) {
  if (e.mode === `uncommitted`)
    return {
      diffFilter: `unstaged`,
      prompt: we({
        reviewInstructions: ke,
        requestMessage: n.formatMessage({
          id: `quickAction.request.codeReview.uncommitted`,
          defaultMessage: `Please review my uncommitted changes`,
          description: `User message used when reviewing uncommitted changes`,
        }),
      }),
      baseBranch: null,
    };
  let r = await I(`git-merge-base`, {
    source: `review_model`,
    params: { gitRoot: e.gitRoot, baseBranch: e.baseBranch, hostId: t },
  });
  if (!r.mergeBaseSha)
    throw Error(
      `Failed to resolve a merge base between HEAD and ${e.baseBranch}.`,
    );
  let i = n.formatMessage(
    {
      id: `quickAction.request.codeReview.branches`,
      defaultMessage: `Please review changes on {from} against {to}`,
      description: `User message used when reviewing against a selected base branch`,
    },
    { from: e.sourceBranch, to: e.baseBranch },
  );
  return {
    diffFilter: `branch`,
    prompt: we({
      reviewInstructions: Oe.replaceAll(
        `{baseBranch}`,
        e.baseBranch,
      ).replaceAll(`{mergeBaseSha}`, r.mergeBaseSha.trim()),
      requestMessage: i,
    }),
    baseBranch: e.baseBranch,
  };
}
function Ee(e) {
  let t = (0, De.c)(13),
    { hostId: n, onError: r, onSuccess: i } = e,
    a = te(F),
    o = H(),
    s = l(n),
    c;
  t[0] !== n || t[1] !== s || t[2] !== o || t[3] !== a
    ? ((c = async (e) => {
        let { context: t, conversationId: r, delivery: i } = e,
          { gitRoot: c, cwd: l } = t,
          u = await Te({ context: t, hostId: n, intl: o }),
          d = r == null ? null : a.get(M, r);
        if (i === `inline` && r != null && d === n) {
          if (s == null) throw Error(`Code review host is unavailable`);
          return (
            await h(`start-turn-for-host`, {
              hostId: s.getHostId(),
              conversationId: r,
              params: {
                cwd: l,
                input: [{ type: `text`, text: u.prompt, text_elements: [] }],
                approvalsReviewer: `user`,
                collaborationMode: null,
                inheritThreadSettings: !1,
                serviceTier: await O(a, n, null),
              },
            }),
            {
              delivery: `inline`,
              diffFilter: u.diffFilter,
              baseBranch: u.baseBranch,
            }
          );
        }
        let f = await h(`start-conversation`, {
          hostId: n,
          input: [{ type: `text`, text: u.prompt, text_elements: [] }],
          cwd: l,
          workspaceRoots: [c],
          collaborationMode: null,
          serviceTier: await O(a, n, null),
          approvalsReviewer: `user`,
        });
        return {
          baseBranch: u.baseBranch,
          conversationId: f,
          delivery: `detached`,
          diffFilter: u.diffFilter,
        };
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a),
      (t[4] = c))
    : (c = t[4]);
  let u;
  t[5] === i
    ? (u = t[6])
    : ((u = (e) => {
        i(e);
      }),
      (t[5] = i),
      (t[6] = u));
  let d;
  t[7] === r
    ? (d = t[8])
    : ((d = (e) => {
        (ie.error(`Failed to start quick review conversation`, {
          safe: {},
          sensitive: { error: e },
        }),
          r(e));
      }),
      (t[7] = r),
      (t[8] = d));
  let f;
  return (
    t[9] !== c || t[10] !== u || t[11] !== d
      ? ((f = { mutationFn: c, onSuccess: u, onError: d }),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f))
      : (f = t[12]),
    z(f)
  );
}
var De,
  Oe,
  ke,
  Ae = e(() => {
    ((De = d()),
      B(),
      x(),
      j(),
      c(),
      D(),
      m(),
      N(),
      Ce(),
      P(),
      E(),
      V(),
      C(),
      (Oe =
        "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response."),
      (ke = `Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.`));
  });
function je(e, t, n, r) {
  let i = (0, Ne.c)(4),
    a;
  i[0] === n
    ? (a = i[1])
    : ((a = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t };
      }),
      (i[0] = n),
      (i[1] = a));
  let o;
  return (
    i[2] === r
      ? (o = i[3])
      : ((o = { liveQuery: Me, staleTime: 1 / 0, ...r }),
        (i[2] = r),
        (i[3] = o)),
    de(e, t, `base-branch`, a, n, o)
  );
}
function Me(e) {
  return { method: `base-branch`, params: e };
}
var Ne,
  Pe = e(() => {
    ((Ne = d()), ae());
  });
function Fe({ currentBranch: e, defaultTargetBranch: t, recentBranches: n }) {
  let r = [],
    i = [t ?? Ie],
    a = new Set();
  return (
    e && a.add(e),
    n != null && i.push(...n),
    i.forEach((e) => {
      !e || a.has(e) || (r.push(e), a.add(e));
    }),
    r
  );
}
var Ie,
  Le = e(() => {
    Ie = `main`;
  });
function Re(e) {
  let t = (0, Ve.c)(24),
    {
      onSelectUnstaged: n,
      onSelectBaseBranch: r,
      isSubmitting: i,
      isLoadingBaseBranch: a,
      requiresXcodeLicense: o,
      isRetryingGit: s,
      onRetryGit: c,
    } = e,
    l = H();
  if (o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(X, {
          className: `icon-xs shrink-0 text-token-charts-red`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(`span`, {
          className: `font-medium text-token-foreground`,
          children: (0, $.jsx)(S, {
            id: `composer.reviewMode.xcodeLicenseRequired.title`,
            defaultMessage: `Review the Xcode license to use Git`,
            description: `Title shown when Git cannot run until the user accepts the Xcode license`,
          }),
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [
            n,
            (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, $.jsx)(S, {
                id: `composer.reviewMode.xcodeLicenseRequired.detail`,
                defaultMessage: `In your terminal, run <command>sudo xcodebuild -license</command>, follow the prompts, and try again.`,
                description: `Instructions shown when Git cannot run until the user accepts the Xcode license`,
                values: { command: ze },
              }),
            }),
          ],
        })),
        (t[2] = r))
      : (r = t[2]);
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(S, {
          id: `composer.reviewMode.xcodeLicenseRequired.retry`,
          defaultMessage: `Try again`,
          description: `Button label for retrying Git after accepting the Xcode license`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] !== s || t[5] !== c
        ? ((a = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2 px-3 py-2 text-sm`,
            role: `alert`,
            children: [
              e,
              r,
              (0, $.jsx)(ee, {
                className: `shrink-0`,
                loading: s,
                onClick: c,
                size: `composerSm`,
                children: i,
              }),
            ],
          })),
          (t[4] = s),
          (t[5] = c),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = l.formatMessage({
        id: `composer.reviewMode.option.baseBranch.simple`,
        defaultMessage: `Review against a base branch`,
        description: `Button label for reviewing against a base branch`,
      })),
      (t[7] = l),
      (t[8] = u));
  let d = i || a,
    f = a ? v : void 0,
    p;
  t[9] !== r || t[10] !== u || t[11] !== d || t[12] !== f
    ? ((p = (0, $.jsx)(K, {
        value: `base-branch`,
        title: u,
        onSelect: r,
        disabled: d,
        RightIcon: f,
      })),
      (t[9] = r),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === l
    ? (m = t[15])
    : ((m = l.formatMessage({
        id: `composer.reviewMode.option.unstaged.simple`,
        defaultMessage: `Review uncommitted changes`,
        description: `Button label for reviewing unstaged changes`,
      })),
      (t[14] = l),
      (t[15] = m));
  let h = i ? v : void 0,
    g;
  t[16] !== i || t[17] !== n || t[18] !== m || t[19] !== h
    ? ((g = (0, $.jsx)(K, {
        value: `unstaged`,
        title: m,
        onSelect: n,
        disabled: i,
        RightIcon: h,
      })),
      (t[16] = i),
      (t[17] = n),
      (t[18] = m),
      (t[19] = h),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== p || t[22] !== g
      ? ((_ = (0, $.jsxs)($.Fragment, { children: [p, g] })),
        (t[21] = p),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function ze(e) {
  return (0, $.jsx)(`code`, { className: `font-mono`, children: e }, `command`);
}
function Be(e) {
  let t = (0, Ve.c)(10),
    {
      onSelect: n,
      branchLines: r,
      isLoading: i,
      isError: a,
      refetchBranchOverview: o,
      submittingBranchName: s,
    } = e,
    c = s != null,
    l;
  t[0] !== r ||
  t[1] !== a ||
  t[2] !== i ||
  t[3] !== c ||
  t[4] !== n ||
  t[5] !== o ||
  t[6] !== s
    ? ((l = i
        ? (0, $.jsx)(`div`, {
            className: `flex items-center justify-center gap-2 py-4 text-xs text-token-foreground/70`,
            children: (0, $.jsx)(v, { className: `size-3` }),
          })
        : a
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2 py-2`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `text-center text-xs text-token-foreground/70`,
                  children: (0, $.jsx)(S, {
                    id: `composer.reviewMode.branches.error`,
                    defaultMessage: `Unable to load branches`,
                    description: `Error message when branch list could not be loaded`,
                  }),
                }),
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `text-xs font-medium text-token-text-link-foreground`,
                  onClick: o,
                  children: (0, $.jsx)(S, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                }),
              ],
            })
          : r.map((e) =>
              (0, $.jsx)(
                K,
                {
                  value: e.label,
                  title: e.label,
                  onSelect: n,
                  disabled: c,
                  RightIcon: s === e.key ? v : void 0,
                },
                e.key,
              ),
            )),
      (t[0] = r),
      (t[1] = a),
      (t[2] = i),
      (t[3] = c),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] === l
      ? (u = t[9])
      : ((u = (0, $.jsx)($.Fragment, { children: l })), (t[8] = l), (t[9] = u)),
    u
  );
}
var Ve,
  $,
  He = e(() => {
    ((Ve = d()), j(), g(), u(), Y(), q(), ($ = k()));
  });
function Ue(e) {
  let t = (0, Ge.c)(69),
    {
      conversationId: i,
      onItemsChanged: c,
      onClose: l,
      cwd: u,
      hostConfig: d,
    } = e,
    f = te(o),
    p = H(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { status: `choose-target` }), (t[0] = m))
    : (m = t[0]);
  let [ee, h] = (0, Ke.useState)(m),
    g = se(),
    _ = s(ce),
    v;
  t[1] === d.id
    ? (v = t[2])
    : ((v = { hostId: d.id, source: `review_mode_content` }),
      (t[1] = d.id),
      (t[2] = v));
  let { gitRoot: b } = be(u, v),
    x;
  t[3] === _
    ? (x = t[4])
    : ((x = { retainRepoWatch: _ }), (t[3] = _), (t[4] = x));
  let {
      data: S,
      error: C,
      isFetching: w,
      isLoading: T,
      refetch: E,
    } = ye(b, d, `review_mode_content`, x),
    D;
  t[5] === _
    ? (D = t[6])
    : ((D = { retainRepoWatch: _ }), (t[5] = _), (t[6] = D));
  let {
      data: ae,
      isLoading: O,
      isError: k,
      refetch: A,
    } = je(b, d, `review_mode_content`, D),
    j;
  t[7] === _
    ? (j = t[8])
    : ((j = { retainRepoWatch: _ }), (t[7] = _), (t[8] = j));
  let {
      data: le,
      isLoading: ue,
      isError: de,
      refetch: M,
    } = xe(b, d, `review_mode_content`, j),
    fe = ge(ae ?? null),
    N = ne(n.reviewDelivery),
    pe = Fe({ currentBranch: S, defaultTargetBranch: fe, recentBranches: le }),
    P = O || ue,
    F = k || de,
    I;
  t[9] !== A || t[10] !== M
    ? ((I = () => {
        Promise.all([A(), M()]);
      }),
      (t[9] = A),
      (t[10] = M),
      (t[11] = I))
    : (I = t[11]);
  let L = I,
    R;
  t[12] !== p || t[13] !== f
    ? ((R = (e) => {
        (ie.error(`Failed to start code review`, {
          safe: {},
          sensitive: { error: e },
        }),
          f.get(y).danger(
            p.formatMessage({
              id: `composer.reviewMode.quickReviewError`,
              defaultMessage: `Failed to start code review.`,
              description: `Toast shown when quick review action fails`,
            }),
          ));
      }),
      (t[12] = p),
      (t[13] = f),
      (t[14] = R))
    : (R = t[14]);
  let z;
  t[15] !== i || t[16] !== g || t[17] !== f
    ? ((z = (e) => {
        if ((he(f, e.diffFilter), e.delivery === `detached`)) {
          (_e(f, e.conversationId, e.baseBranch), g(e.conversationId));
          return;
        }
        _e(f, i, e.baseBranch);
        let t = f.get(oe.activeTab$)?.tabId;
        (ve(f, !t?.startsWith(`sidechat:`)), f.set(a, !1));
      }),
      (t[15] = i),
      (t[16] = g),
      (t[17] = f),
      (t[18] = z))
    : (z = t[18]);
  let B;
  t[19] !== d.id || t[20] !== R || t[21] !== z
    ? ((B = { hostId: d.id, onError: R, onSuccess: z }),
      (t[19] = d.id),
      (t[20] = R),
      (t[21] = z),
      (t[22] = B))
    : (B = t[22]);
  let { mutate: V, isPending: U, variables: W } = Ee(B),
    G = U && W?.context.mode === `base-branch` ? W.context.baseBranch : null,
    K;
  t[23] !== i ||
  t[24] !== S ||
  t[25] !== u ||
  t[26] !== b ||
  t[27] !== p ||
  t[28] !== U ||
  t[29] !== l ||
  t[30] !== c ||
  t[31] !== N ||
  t[32] !== f ||
  t[33] !== V
    ? ((K = (e) => {
        if (!U) {
          if (!b) {
            f.get(y).danger(
              p.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          if (e === `base-branch`) {
            (re(f, r, { target: `base_branch` }),
              h({ status: `choose-base` }),
              c());
            return;
          }
          (re(f, r, { target: `unstaged` }),
            V(
              {
                conversationId: i,
                context: {
                  mode: `uncommitted`,
                  sourceBranch: S ?? `HEAD`,
                  gitRoot: b,
                  cwd: u,
                },
                delivery: N ?? `inline`,
              },
              { onSuccess: l },
            ));
        }
      }),
      (t[23] = i),
      (t[24] = S),
      (t[25] = u),
      (t[26] = b),
      (t[27] = p),
      (t[28] = U),
      (t[29] = l),
      (t[30] = c),
      (t[31] = N),
      (t[32] = f),
      (t[33] = V),
      (t[34] = K))
    : (K = t[34]);
  let q = K,
    J;
  t[35] !== i ||
  t[36] !== S ||
  t[37] !== u ||
  t[38] !== b ||
  t[39] !== p ||
  t[40] !== U ||
  t[41] !== l ||
  t[42] !== N ||
  t[43] !== f ||
  t[44] !== V
    ? ((J = (e) => {
        if (!U) {
          if (!b) {
            f.get(y).danger(
              p.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          V(
            {
              conversationId: i,
              context: {
                mode: `base-branch`,
                sourceBranch: S ?? `HEAD`,
                baseBranch: e,
                gitRoot: b,
                cwd: u,
              },
              delivery: N ?? `inline`,
            },
            { onSuccess: l },
          );
        }
      }),
      (t[35] = i),
      (t[36] = S),
      (t[37] = u),
      (t[38] = b),
      (t[39] = p),
      (t[40] = U),
      (t[41] = l),
      (t[42] = N),
      (t[43] = f),
      (t[44] = V),
      (t[45] = J))
    : (J = t[45]);
  let Y = J;
  if (ee.status === `choose-target`) {
    let e, n;
    t[46] === q
      ? ((e = t[47]), (n = t[48]))
      : ((e = () => q(`unstaged`)),
        (n = () => q(`base-branch`)),
        (t[46] = q),
        (t[47] = e),
        (t[48] = n));
    let r;
    t[49] === C ? (r = t[50]) : ((r = me(C)), (t[49] = C), (t[50] = r));
    let i;
    t[51] === E
      ? (i = t[52])
      : ((i = () => {
          E();
        }),
        (t[51] = E),
        (t[52] = i));
    let a;
    return (
      t[53] !== w ||
      t[54] !== T ||
      t[55] !== U ||
      t[56] !== e ||
      t[57] !== n ||
      t[58] !== r ||
      t[59] !== i
        ? ((a = (0, qe.jsx)(Re, {
            onSelectUnstaged: e,
            onSelectBaseBranch: n,
            isSubmitting: U,
            isLoadingBaseBranch: T,
            requiresXcodeLicense: r,
            isRetryingGit: w,
            onRetryGit: i,
          })),
          (t[53] = w),
          (t[54] = T),
          (t[55] = U),
          (t[56] = e),
          (t[57] = n),
          (t[58] = r),
          (t[59] = i),
          (t[60] = a))
        : (a = t[60]),
      a
    );
  }
  let X = Be,
    Z = pe.map(We),
    Q;
  return (
    t[61] !== X ||
    t[62] !== Y ||
    t[63] !== F ||
    t[64] !== P ||
    t[65] !== L ||
    t[66] !== G ||
    t[67] !== Z
      ? ((Q = (0, qe.jsx)(X, {
          onSelect: Y,
          branchLines: Z,
          isLoading: P,
          isError: F,
          refetchBranchOverview: L,
          submittingBranchName: G,
        })),
        (t[61] = X),
        (t[62] = Y),
        (t[63] = F),
        (t[64] = P),
        (t[65] = L),
        (t[66] = G),
        (t[67] = Z),
        (t[68] = Q))
      : (Q = t[68]),
    Q
  );
}
function We(e) {
  return { key: e, label: e };
}
var Ge, Ke, qe;
e(() => {
  ((Ge = d()),
    _(),
    x(),
    i(),
    (Ke = t(p(), 1)),
    j(),
    Ae(),
    A(),
    le(),
    w(),
    R(),
    Pe(),
    J(),
    Q(),
    L(),
    U(),
    T(),
    W(),
    b(),
    f(),
    G(),
    Z(),
    V(),
    pe(),
    Le(),
    He(),
    (qe = k()));
})();
export { Ue as ReviewModeContent };
//# sourceMappingURL=review-mode-content-SOlP73MN.js.map
