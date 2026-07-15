import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  I2 as r,
  Kq as i,
  L2 as a,
  Mq as o,
  Nq as s,
  QY as c,
  S0 as ee,
  SK as l,
  Yq as u,
  Zq as d,
  _0 as f,
  _Y as p,
  aG as te,
  bK as m,
  cD as h,
  cY as ne,
  cp as re,
  iD as ie,
  k2 as g,
  lp as _,
  mY as v,
  pY as ae,
  rG as y,
  sY as oe,
  x2 as b,
  y2 as x,
  yY as se,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  F as ce,
  N as S,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  An as C,
  kn as le,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as ue,
  d as de,
  o as fe,
  p as pe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as me,
  p as w,
  v as he,
  y as T,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as E,
  rt as ge,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as _e,
  t as D,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as ve, t as ye } from "./review-delivery-settings-row-C1EJZLFC.js";
function be() {
  let e = (0, O.c)(10),
    t = ee(oe),
    n = se(),
    r = te(ie),
    i = d(c.reviewMode);
  if (!r) return null;
  let a, o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, k.jsx)(p, {
        id: `settings.git.reviewMode.label`,
        defaultMessage: `Disable Git-Based Review`,
        description: `Label for the Git Review mode setting`,
      })),
      (o = (0, k.jsx)(p, {
        id: `settings.git.reviewMode.description`,
        defaultMessage: `Only show "Last Turn" in the Review panel and disable Unstaged/Staged/Branch to avoid git operations`,
        description: `Description for the Git Review mode setting`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s;
  e[2] === n
    ? (s = e[3])
    : ((s = n.formatMessage({
        id: `settings.git.reviewMode.ariaLabel`,
        defaultMessage: `Disable Git-Based Review`,
        description: `Accessible label for the Git-Based Review toggle`,
      })),
      (e[2] = n),
      (e[3] = s));
  let l = i === `last-turn-only`,
    f;
  e[4] === t
    ? (f = e[5])
    : ((f = (e) => {
        u(t, c.reviewMode, e ? `last-turn-only` : `full`);
      }),
      (e[4] = t),
      (e[5] = f));
  let m;
  return (
    e[6] !== s || e[7] !== l || e[8] !== f
      ? ((m = (0, k.jsx)(he, {
          label: a,
          description: o,
          control: (0, k.jsx)(ge, { ariaLabel: s, checked: l, onChange: f }),
        })),
        (e[6] = s),
        (e[7] = l),
        (e[8] = f),
        (e[9] = m))
      : (m = e[9]),
    m
  );
}
var O,
  k,
  A = e(() => {
    ((O = r()), f(), n(), v(), E(), h(), ne(), i(), T(), y(), (k = g()));
  }),
  j,
  xe = e(() => {
    (v(),
      (j = ae({
        branchPrefix: {
          id: `settings.git.branchPrefix.label`,
          defaultMessage: `Branch prefix`,
          description: `Label for git branch prefix setting`,
        },
        alwaysForcePush: {
          id: `settings.git.forcePush.label`,
          defaultMessage: `Always force push`,
          description: `Label for always force push toggle`,
        },
        createDraftPullRequests: {
          id: `settings.git.createDraftPullRequest.label`,
          defaultMessage: `Create draft pull requests`,
          description: `Label for create draft pull requests toggle`,
        },
        pullRequestMergeMethod: {
          id: `settings.git.pullRequestMergeMethod.label`,
          defaultMessage: `Pull request merge method`,
          description: `Label for pull request merge method setting`,
        },
        merge: {
          id: `settings.git.pullRequestMergeMethod.merge`,
          defaultMessage: `Merge`,
          description: `Merge option for pull request merge method`,
        },
        squash: {
          id: `settings.git.pullRequestMergeMethod.squash`,
          defaultMessage: `Squash`,
          description: `Squash option for pull request merge method`,
        },
        commitInstructions: {
          id: `settings.git.commitInstructions.label`,
          defaultMessage: `Commit instructions`,
          description: `Label for commit instructions`,
        },
        pullRequestInstructions: {
          id: `settings.git.prInstructions.label`,
          defaultMessage: `Pull request instructions`,
          description: `Label for pull request instructions`,
        },
      })));
  });
function Se() {
  let e = (0, Ce.c)(194),
    t = ee(oe),
    n = se(),
    r = te(`2764989143`),
    [i, a] = (0, we.useState)(null),
    s = d(c.branchPrefix),
    f = d(c.alwaysForcePush),
    m = d(c.createPullRequestAsDraft),
    h = d(c.pullRequestMergeMethod),
    ne = d(c.commitInstructions),
    ie = d(c.pullRequestInstructions),
    g;
  e[0] === t
    ? (g = e[1])
    : ((g = (e) => u(t, c.branchPrefix, e)), (e[0] = t), (e[1] = g));
  let _, v;
  e[2] !== n || e[3] !== t
    ? ((_ = () => {
        (a(null),
          t.get(l).success(
            n.formatMessage({
              id: `settings.git.branchPrefix.save.success`,
              defaultMessage: `Saved branch prefix`,
              description: `Toast shown when git branch prefix is saved`,
            }),
          ));
      }),
      (v = () => {
        t.get(l).danger(
          n.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = _),
      (e[5] = v))
    : ((_ = e[4]), (v = e[5]));
  let ae;
  e[6] !== g || e[7] !== _ || e[8] !== v
    ? ((ae = { mutationFn: g, onSuccess: _, onError: v }),
      (e[6] = g),
      (e[7] = _),
      (e[8] = v),
      (e[9] = ae))
    : (ae = e[9]);
  let y = b(ae),
    x;
  e[10] === t
    ? (x = e[11])
    : ((x = (e) => u(t, c.alwaysForcePush, e)), (e[10] = t), (e[11] = x));
  let S, C;
  e[12] !== n || e[13] !== t
    ? ((S = (e, r) => {
        r
          ? t.get(l).success(
              n.formatMessage({
                id: `settings.git.forcePush.save.enabled`,
                defaultMessage: `Always force push enabled`,
                description: `Toast shown when the always force push toggle is enabled`,
              }),
            )
          : t.get(l).success(
              n.formatMessage({
                id: `settings.git.forcePush.save.disabled`,
                defaultMessage: `Always force push disabled`,
                description: `Toast shown when the always force push toggle is disabled`,
              }),
            );
      }),
      (C = () => {
        t.get(l).danger(
          n.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = S),
      (e[15] = C))
    : ((S = e[14]), (C = e[15]));
  let fe;
  e[16] !== x || e[17] !== S || e[18] !== C
    ? ((fe = { mutationFn: x, onSuccess: S, onError: C }),
      (e[16] = x),
      (e[17] = S),
      (e[18] = C),
      (e[19] = fe))
    : (fe = e[19]);
  let pe = b(fe),
    w;
  e[20] === t
    ? (w = e[21])
    : ((w = (e) => u(t, c.pullRequestMergeMethod, e)),
      (e[20] = t),
      (e[21] = w));
  let T, E;
  e[22] !== n || e[23] !== t
    ? ((E = () => {
        t.get(l).success(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (T = () => {
        t.get(l).danger(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
        );
      }),
      (e[22] = n),
      (e[23] = t),
      (e[24] = T),
      (e[25] = E))
    : ((T = e[24]), (E = e[25]));
  let _e;
  e[26] !== T || e[27] !== w || e[28] !== E
    ? ((_e = { mutationFn: w, onSuccess: E, onError: T }),
      (e[26] = T),
      (e[27] = w),
      (e[28] = E),
      (e[29] = _e))
    : (_e = e[29]);
  let ve = b(_e),
    O;
  e[30] === t
    ? (O = e[31])
    : ((O = (e) => u(t, c.createPullRequestAsDraft, e)),
      (e[30] = t),
      (e[31] = O));
  let k, A;
  e[32] !== n || e[33] !== t
    ? ((k = (e, r) => {
        r
          ? t.get(l).success(
              n.formatMessage({
                id: `settings.git.createDraftPullRequest.save.enabled`,
                defaultMessage: `Create draft pull requests enabled`,
                description: `Toast shown when the draft pull request toggle is enabled`,
              }),
            )
          : t.get(l).success(
              n.formatMessage({
                id: `settings.git.createDraftPullRequest.save.disabled`,
                defaultMessage: `Create draft pull requests disabled`,
                description: `Toast shown when the draft pull request toggle is disabled`,
              }),
            );
      }),
      (A = () => {
        t.get(l).danger(
          n.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
        );
      }),
      (e[32] = n),
      (e[33] = t),
      (e[34] = k),
      (e[35] = A))
    : ((k = e[34]), (A = e[35]));
  let xe;
  e[36] !== O || e[37] !== k || e[38] !== A
    ? ((xe = { mutationFn: O, onSuccess: k, onError: A }),
      (e[36] = O),
      (e[37] = k),
      (e[38] = A),
      (e[39] = xe))
    : (xe = e[39]);
  let Se = b(xe),
    [Te, Ee] = (0, we.useState)(null),
    [De, Oe] = (0, we.useState)(null),
    N;
  e[40] === t
    ? (N = e[41])
    : ((N = (e) => u(t, c.commitInstructions, e)), (e[40] = t), (e[41] = N));
  let P, F;
  e[42] !== n || e[43] !== t
    ? ((P = () => {
        (Ee(null),
          t.get(l).success(
            n.formatMessage({
              id: `settings.git.commitInstructions.save.success`,
              defaultMessage: `Saved commit instructions`,
              description: `Toast shown when commit instructions are saved`,
            }),
          ));
      }),
      (F = () => {
        t.get(l).danger(
          n.formatMessage({
            id: `settings.git.commitInstructions.save.error`,
            defaultMessage: `Failed to save commit instructions`,
            description: `Toast shown when commit instructions save fails`,
          }),
        );
      }),
      (e[42] = n),
      (e[43] = t),
      (e[44] = P),
      (e[45] = F))
    : ((P = e[44]), (F = e[45]));
  let ke;
  e[46] !== N || e[47] !== P || e[48] !== F
    ? ((ke = { mutationFn: N, onSuccess: P, onError: F }),
      (e[46] = N),
      (e[47] = P),
      (e[48] = F),
      (e[49] = ke))
    : (ke = e[49]);
  let I = b(ke),
    L;
  e[50] === t
    ? (L = e[51])
    : ((L = (e) => u(t, c.pullRequestInstructions, e)),
      (e[50] = t),
      (e[51] = L));
  let R, z;
  e[52] !== n || e[53] !== t
    ? ((R = () => {
        (Oe(null),
          t.get(l).success(
            n.formatMessage({
              id: `settings.git.prInstructions.save.success`,
              defaultMessage: `Saved pull request instructions`,
              description: `Toast shown when pull request instructions are saved`,
            }),
          ));
      }),
      (z = () => {
        t.get(l).danger(
          n.formatMessage({
            id: `settings.git.prInstructions.save.error`,
            defaultMessage: `Failed to save pull request instructions`,
            description: `Toast shown when pull request instructions save fails`,
          }),
        );
      }),
      (e[52] = n),
      (e[53] = t),
      (e[54] = R),
      (e[55] = z))
    : ((R = e[54]), (z = e[55]));
  let Ae;
  e[56] !== L || e[57] !== R || e[58] !== z
    ? ((Ae = { mutationFn: L, onSuccess: R, onError: z }),
      (e[56] = L),
      (e[57] = R),
      (e[58] = z),
      (e[59] = Ae))
    : (Ae = e[59]);
  let B = b(Ae),
    je = s,
    V = i ?? je,
    Me = i != null && i !== je,
    H = y.isPending,
    U = pe.isPending,
    W = Se.isPending,
    G = ve.isPending,
    Ne = ne ?? ``,
    K = Te ?? Ne,
    Pe = Te != null && Te !== Ne,
    q = I.isPending,
    Fe = ie ?? ``,
    J = De ?? Fe,
    Ie = De != null && De !== Fe,
    Y = B.isPending,
    Le;
  e[60] !== V || e[61] !== H || e[62] !== Me || e[63] !== y
    ? ((Le = () => {
        !Me || H || y.mutate(V);
      }),
      (e[60] = V),
      (e[61] = H),
      (e[62] = Me),
      (e[63] = y),
      (e[64] = Le))
    : (Le = e[64]);
  let X = Le,
    Re;
  e[65] !== pe || e[66] !== U
    ? ((Re = (e) => {
        U || pe.mutate(e);
      }),
      (e[65] = pe),
      (e[66] = U),
      (e[67] = Re))
    : (Re = e[67]);
  let ze = Re,
    Be;
  e[68] !== Se || e[69] !== W
    ? ((Be = (e) => {
        W || Se.mutate(e);
      }),
      (e[68] = Se),
      (e[69] = W),
      (e[70] = Be))
    : (Be = e[70]);
  let Ve = Be,
    He;
  e[71] !== G || e[72] !== h || e[73] !== ve
    ? ((He = (e) => {
        G || (e !== h && ve.mutate(e));
      }),
      (e[71] = G),
      (e[72] = h),
      (e[73] = ve),
      (e[74] = He))
    : (He = e[74]);
  let Ue = He,
    We;
  e[75] !== K || e[76] !== q || e[77] !== Pe || e[78] !== I
    ? ((We = () => {
        q || !Pe || I.mutate(K);
      }),
      (e[75] = K),
      (e[76] = q),
      (e[77] = Pe),
      (e[78] = I),
      (e[79] = We))
    : (We = e[79]);
  let Z = We,
    Ge;
  e[80] !== Y || e[81] !== Ie || e[82] !== J || e[83] !== B
    ? ((Ge = () => {
        Y || !Ie || B.mutate(J);
      }),
      (e[80] = Y),
      (e[81] = Ie),
      (e[82] = J),
      (e[83] = B),
      (e[84] = Ge))
    : (Ge = e[84]);
  let Q = Ge,
    Ke = (Me && !H) || (Pe && !q) || (Ie && !Y),
    $;
  e[85] !== X || e[86] !== Z || e[87] !== Q
    ? (($ = (e) => {
        (e.preventDefault(), X(), Z(), Q());
      }),
      (e[85] = X),
      (e[86] = Z),
      (e[87] = Q),
      (e[88] = $))
    : ($ = e[88]);
  let qe;
  (e[89] !== Ke || e[90] !== $
    ? ((qe = { accelerator: `CmdOrCtrl+S`, enabled: Ke, onKeyDown: $ }),
      (e[89] = Ke),
      (e[90] = $),
      (e[91] = qe))
    : (qe = e[91]),
    ce(qe));
  let Je;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, M.jsx)(ue, { slug: `git-settings` })), (e[92] = Je))
    : (Je = e[92]);
  let Ye;
  e[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, M.jsx)(be, {})), (e[93] = Ye))
    : (Ye = e[93]);
  let Xe, Ze;
  e[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (0, M.jsx)(p, { ...j.branchPrefix })),
      (Ze = (0, M.jsx)(p, {
        id: `settings.git.branchPrefix.description`,
        defaultMessage: `Prefix used when ChatGPT creates new branches`,
        description: `Description for git branch prefix setting`,
      })),
      (e[94] = Xe),
      (e[95] = Ze))
    : ((Xe = e[94]), (Ze = e[95]));
  let Qe;
  e[96] !== H || e[97] !== je
    ? ((Qe = (e) => {
        if (H) return;
        let t = e.target.value;
        a(t === je ? null : t);
      }),
      (e[96] = H),
      (e[97] = je),
      (e[98] = Qe))
    : (Qe = e[98]);
  let $e;
  e[99] === n
    ? ($e = e[100])
    : (($e = n.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[99] = n),
      (e[100] = $e));
  let et;
  e[101] === n
    ? (et = e[102])
    : ((et = n.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[101] = n),
      (e[102] = et));
  let tt;
  e[103] !== V ||
  e[104] !== X ||
  e[105] !== H ||
  e[106] !== Qe ||
  e[107] !== $e ||
  e[108] !== et
    ? ((tt = (0, M.jsx)(he, {
        label: Xe,
        description: Ze,
        control: (0, M.jsx)(`input`, {
          className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: V,
          onChange: Qe,
          onBlur: X,
          placeholder: $e,
          "aria-label": et,
          disabled: H,
        }),
      })),
      (e[103] = V),
      (e[104] = X),
      (e[105] = H),
      (e[106] = Qe),
      (e[107] = $e),
      (e[108] = et),
      (e[109] = tt))
    : (tt = e[109]);
  let nt;
  e[110] !== Ue || e[111] !== n || e[112] !== G || e[113] !== r || e[114] !== h
    ? ((nt = r
        ? (0, M.jsx)(he, {
            label: (0, M.jsx)(p, { ...j.pullRequestMergeMethod }),
            description: (0, M.jsx)(p, {
              id: `settings.git.pullRequestMergeMethod.description`,
              defaultMessage: `Choose how ChatGPT merges pull requests`,
              description: `Description for pull request merge method setting`,
            }),
            control: (0, M.jsx)(le, {
              ariaLabel: n.formatMessage({
                id: `settings.git.pullRequestMergeMethod.ariaLabel`,
                defaultMessage: `Pull request merge method`,
                description: `Accessible label for pull request merge method selector`,
              }),
              selectedId: h,
              onSelect: Ue,
              options: [
                {
                  id: `merge`,
                  label: (0, M.jsx)(p, { ...j.merge }),
                  ariaLabel: n.formatMessage(j.merge),
                  disabled: G,
                },
                {
                  id: `squash`,
                  label: (0, M.jsx)(p, { ...j.squash }),
                  ariaLabel: n.formatMessage(j.squash),
                  disabled: G,
                },
              ],
            }),
          })
        : null),
      (e[110] = Ue),
      (e[111] = n),
      (e[112] = G),
      (e[113] = r),
      (e[114] = h),
      (e[115] = nt))
    : (nt = e[115]);
  let rt, it;
  e[116] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, M.jsx)(p, { ...j.alwaysForcePush })),
      (it = (0, M.jsx)(p, {
        id: `settings.git.forcePush.description`,
        defaultMessage: `Use --force-with-lease when pushing from ChatGPT`,
        description: `Description for always force push toggle`,
      })),
      (e[116] = rt),
      (e[117] = it))
    : ((rt = e[116]), (it = e[117]));
  let at;
  e[118] === ze
    ? (at = e[119])
    : ((at = (e) => {
        ze(e);
      }),
      (e[118] = ze),
      (e[119] = at));
  let ot;
  e[120] === n
    ? (ot = e[121])
    : ((ot = n.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Aria label for always force push toggle`,
      })),
      (e[120] = n),
      (e[121] = ot));
  let st;
  e[122] !== f || e[123] !== U || e[124] !== at || e[125] !== ot
    ? ((st = (0, M.jsx)(he, {
        label: rt,
        description: it,
        control: (0, M.jsx)(ge, {
          checked: f,
          disabled: U,
          onChange: at,
          ariaLabel: ot,
        }),
      })),
      (e[122] = f),
      (e[123] = U),
      (e[124] = at),
      (e[125] = ot),
      (e[126] = st))
    : (st = e[126]);
  let ct, lt;
  e[127] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, M.jsx)(p, { ...j.createDraftPullRequests })),
      (lt = (0, M.jsx)(p, {
        id: `settings.git.createDraftPullRequest.description`,
        defaultMessage: `Use draft pull requests by default when creating PRs from ChatGPT`,
        description: `Description for create draft pull requests toggle`,
      })),
      (e[127] = ct),
      (e[128] = lt))
    : ((ct = e[127]), (lt = e[128]));
  let ut;
  e[129] === Ve
    ? (ut = e[130])
    : ((ut = (e) => {
        Ve(e);
      }),
      (e[129] = Ve),
      (e[130] = ut));
  let dt;
  e[131] === n
    ? (dt = e[132])
    : ((dt = n.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[131] = n),
      (e[132] = dt));
  let ft;
  e[133] !== m || e[134] !== W || e[135] !== ut || e[136] !== dt
    ? ((ft = (0, M.jsx)(he, {
        label: ct,
        description: lt,
        control: (0, M.jsx)(ge, {
          checked: m,
          disabled: W,
          onChange: ut,
          ariaLabel: dt,
        }),
      })),
      (e[133] = m),
      (e[134] = W),
      (e[135] = ut),
      (e[136] = dt),
      (e[137] = ft))
    : (ft = e[137]);
  let pt;
  e[138] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, M.jsx)(re, { electron: !0, children: (0, M.jsx)(ye, {}) })),
      (e[138] = pt))
    : (pt = e[138]);
  let mt;
  e[139] !== tt || e[140] !== nt || e[141] !== st || e[142] !== ft
    ? ((mt = (0, M.jsx)(D, {
        children: (0, M.jsx)(D.Content, {
          children: (0, M.jsxs)(me, { children: [Ye, tt, nt, st, ft, pt] }),
        }),
      })),
      (e[139] = tt),
      (e[140] = nt),
      (e[141] = st),
      (e[142] = ft),
      (e[143] = mt))
    : (mt = e[143]);
  let ht, gt;
  e[144] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, M.jsx)(p, { ...j.commitInstructions })),
      (gt = (0, M.jsx)(p, {
        id: `settings.git.commitInstructions.description`,
        defaultMessage: `Added to commit message generation prompts`,
        description: `Description for commit instructions`,
      })),
      (e[144] = ht),
      (e[145] = gt))
    : ((ht = e[144]), (gt = e[145]));
  let _t = !Pe || q,
    vt;
  e[146] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, M.jsx)(p, {
        id: `settings.git.commitInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save commit instructions`,
      })),
      (e[146] = vt))
    : (vt = e[146]);
  let yt;
  e[147] !== Z || e[148] !== I.isPending || e[149] !== _t
    ? ((yt = (0, M.jsx)(D.Header, {
        title: ht,
        subtitle: gt,
        actions: (0, M.jsx)(o, {
          color: `secondary`,
          disabled: _t,
          loading: I.isPending,
          onClick: Z,
          size: `toolbar`,
          children: vt,
        }),
      })),
      (e[147] = Z),
      (e[148] = I.isPending),
      (e[149] = _t),
      (e[150] = yt))
    : (yt = e[150]);
  let bt;
  e[151] !== q || e[152] !== Ne
    ? ((bt = (e) => {
        if (q) return;
        let t = e.target.value;
        Ee(t === Ne ? null : t);
      }),
      (e[151] = q),
      (e[152] = Ne),
      (e[153] = bt))
    : (bt = e[153]);
  let xt;
  e[154] === n
    ? (xt = e[155])
    : ((xt = n.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[154] = n),
      (e[155] = xt));
  let St;
  e[156] === n
    ? (St = e[157])
    : ((St = n.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[156] = n),
      (e[157] = St));
  let Ct;
  e[158] !== K ||
  e[159] !== q ||
  e[160] !== bt ||
  e[161] !== xt ||
  e[162] !== St
    ? ((Ct = (0, M.jsx)(D.Content, {
        children: (0, M.jsx)(`textarea`, {
          className: `mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: K,
          onChange: bt,
          placeholder: xt,
          "aria-label": St,
          disabled: q,
          rows: 6,
        }),
      })),
      (e[158] = K),
      (e[159] = q),
      (e[160] = bt),
      (e[161] = xt),
      (e[162] = St),
      (e[163] = Ct))
    : (Ct = e[163]);
  let wt;
  e[164] !== yt || e[165] !== Ct
    ? ((wt = (0, M.jsxs)(D, { children: [yt, Ct] })),
      (e[164] = yt),
      (e[165] = Ct),
      (e[166] = wt))
    : (wt = e[166]);
  let Tt, Et;
  e[167] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (0, M.jsx)(p, { ...j.pullRequestInstructions })),
      (Et = (0, M.jsx)(p, {
        id: `settings.git.prInstructions.description`,
        defaultMessage: `Added to PR title/description generation prompts`,
        description: `Description for pull request instructions`,
      })),
      (e[167] = Tt),
      (e[168] = Et))
    : ((Tt = e[167]), (Et = e[168]));
  let Dt = !Ie || Y,
    Ot;
  e[169] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (0, M.jsx)(p, {
        id: `settings.git.prInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save pull request instructions`,
      })),
      (e[169] = Ot))
    : (Ot = e[169]);
  let kt;
  e[170] !== Q || e[171] !== B.isPending || e[172] !== Dt
    ? ((kt = (0, M.jsx)(D.Header, {
        title: Tt,
        subtitle: Et,
        actions: (0, M.jsx)(o, {
          color: `secondary`,
          disabled: Dt,
          loading: B.isPending,
          onClick: Q,
          size: `toolbar`,
          children: Ot,
        }),
      })),
      (e[170] = Q),
      (e[171] = B.isPending),
      (e[172] = Dt),
      (e[173] = kt))
    : (kt = e[173]);
  let At;
  e[174] !== Y || e[175] !== Fe
    ? ((At = (e) => {
        if (Y) return;
        let t = e.target.value;
        Oe(t === Fe ? null : t);
      }),
      (e[174] = Y),
      (e[175] = Fe),
      (e[176] = At))
    : (At = e[176]);
  let jt;
  e[177] === n
    ? (jt = e[178])
    : ((jt = n.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[177] = n),
      (e[178] = jt));
  let Mt;
  e[179] === n
    ? (Mt = e[180])
    : ((Mt = n.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[179] = n),
      (e[180] = Mt));
  let Nt;
  e[181] !== Y ||
  e[182] !== J ||
  e[183] !== At ||
  e[184] !== jt ||
  e[185] !== Mt
    ? ((Nt = (0, M.jsx)(D.Content, {
        children: (0, M.jsx)(`textarea`, {
          className: `mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: J,
          onChange: At,
          placeholder: jt,
          "aria-label": Mt,
          disabled: Y,
          rows: 6,
        }),
      })),
      (e[181] = Y),
      (e[182] = J),
      (e[183] = At),
      (e[184] = jt),
      (e[185] = Mt),
      (e[186] = Nt))
    : (Nt = e[186]);
  let Pt;
  e[187] !== kt || e[188] !== Nt
    ? ((Pt = (0, M.jsxs)(D, { children: [kt, Nt] })),
      (e[187] = kt),
      (e[188] = Nt),
      (e[189] = Pt))
    : (Pt = e[189]);
  let Ft;
  return (
    e[190] !== mt || e[191] !== wt || e[192] !== Pt
      ? ((Ft = (0, M.jsxs)(de, { title: Je, children: [mt, wt, Pt] })),
        (e[190] = mt),
        (e[191] = wt),
        (e[192] = Pt),
        (e[193] = Ft))
      : (Ft = e[193]),
    Ft
  );
}
var Ce, we, M;
e(() => {
  ((Ce = r()),
    x(),
    f(),
    n(),
    (we = t(a(), 1)),
    v(),
    s(),
    C(),
    m(),
    E(),
    _(),
    S(),
    ne(),
    i(),
    pe(),
    A(),
    xe(),
    ve(),
    _e(),
    T(),
    fe(),
    w(),
    y(),
    (M = g()));
})();
export { Se as GitSettings };
//# sourceMappingURL=git-settings-BvAsUjDp.js.map
