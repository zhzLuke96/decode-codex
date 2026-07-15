import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  C0 as r,
  CC as i,
  Cb as a,
  I2 as o,
  JA as s,
  L2 as c,
  Mq as l,
  Nq as u,
  Ny as d,
  PB as f,
  Py as p,
  S0 as m,
  SV as h,
  TC as ee,
  Vy as g,
  _0 as _,
  _Y as v,
  bI as te,
  cY as y,
  d2 as b,
  dg as ne,
  gK as re,
  h2 as ie,
  hK as ae,
  k2 as oe,
  kb as se,
  m2 as ce,
  mY as le,
  oj as x,
  pB as ue,
  sY as de,
  ug as fe,
  vI as S,
  wV as pe,
  yY as me,
  zy as he,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  ft as ge,
  pt as _e,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  mc as C,
  pc as w,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Jt as T,
  Yt as ve,
  dt as ye,
  ut as be,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Sr as xe,
  xr as Se,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  _ as Ce,
  l as E,
  u as we,
  v as D,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  Bt as Te,
  Ht as O,
  gt as k,
  vt as A,
  zt as Ee,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as De,
  t as Oe,
} from "./app-initial~app-main~projects-index-page~appgen-library-page~work-home-page~chatgpt-convers~n7kdxxbv-_36znuKl.js";
import { n as ke, t as Ae } from "./use-element-in-view-CPWHCtLJ.js";
import {
  F as je,
  G as j,
  H as Me,
  I as Ne,
  L as Pe,
  N as Fe,
  P as Ie,
  h as Le,
  it as Re,
  m as ze,
  ot as M,
  rt as N,
  st as Be,
} from "./plugin-detail-page-Di6Naosb.js";
import {
  a as Ve,
  c as He,
  i as Ue,
  l as P,
  n as We,
  o as Ge,
  r as Ke,
  s as qe,
  t as Je,
  u as Ye,
} from "./plugins-page-D3oou8gl.js";
import { n as Xe, t as Ze } from "./settings-host-dropdown-B9za80bZ.js";
function Qe() {
  let e = (0, L.c)(5),
    t = x(),
    n = F(),
    r;
  e[0] === t.search
    ? (r = e[1])
    : ((r = Re(t.search)), (e[0] = t.search), (e[1] = r));
  let i = r;
  if (n) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(Je, {})), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  let a;
  return (
    e[3] === i
      ? (a = e[4])
      : ((a = (0, z.jsx)(et, { initialSearchQuery: i })),
        (e[3] = i),
        (e[4] = a)),
    a
  );
}
function $e() {
  let e = (0, L.c)(2),
    t = F(),
    r;
  return (
    e[0] === t
      ? (r = e[1])
      : ((r = t
          ? (0, z.jsx)(Je, { mode: `manage` })
          : (0, z.jsx)(n, { replace: !0, to: `/skills` })),
        (e[0] = t),
        (e[1] = r)),
    r
  );
}
function F() {
  let e = (0, L.c)(4),
    t = x(),
    n;
  e[0] === t.state
    ? (n = e[1])
    : ((n = N(t.state).initialHostId ?? `local`), (e[0] = t.state), (e[1] = n));
  let r;
  return (
    e[2] === n ? (r = e[3]) : ((r = { hostId: n }), (e[2] = n), (e[3] = r)),
    ne(r)
  );
}
function et(e) {
  let t = (0, L.c)(103),
    { initialSearchQuery: n } = e,
    i = n === void 0 ? `` : n,
    a = m(de),
    o = me(),
    { data: s } = se(),
    c = xe(),
    u = r(ee),
    f = ve(u),
    p;
  t[0] === u ? (p = t[1]) : ((p = u?.map(it)), (t[0] = u), (t[1] = p));
  let h = p,
    [g, _] = (0, R.useState)(pe),
    y;
  t[2] !== f || t[3] !== g
    ? ((y = ye(g, f)), (t[2] = f), (t[3] = g), (t[4] = y))
    : (y = t[4]);
  let b = y,
    [ne, re] = (0, R.useState)(null),
    [oe, le] = (0, R.useState)(null),
    x;
  t[5] !== oe || t[6] !== ne
    ? ((x = { container: ne, target: oe }),
      (t[5] = oe),
      (t[6] = ne),
      (t[7] = x))
    : (x = t[7]);
  let fe = ke(x),
    [S, _e] = (0, R.useState)(i),
    [C, w] = (0, R.useState)(!1),
    T = ce(Ve),
    be = ie(Ve),
    {
      forceReloadSkills: Se,
      installedSkillMatchKeys: E,
      isFetching: we,
      isLoading: D,
      markSkillsUpdated: O,
      standaloneInstalledSkills: k,
      workspaceRoots: A,
    } = je(b),
    {
      canInstallRecommendedSkills: De,
      defaultRecommendedRepoRoot: Ae,
      skillCreatorPath: j,
    } = Pe(b),
    {
      errorMessage: Me,
      isLoading: Fe,
      refresh: Le,
      repoRoot: Re,
      skills: ze,
    } = Ne(Ae, b),
    M;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        w(!0);
      }),
      (t[8] = M))
    : (M = t[8]);
  let N;
  t[9] !== Se || t[10] !== b
    ? ((N = { forceReloadSkills: Se, hostId: b, onInstalled: M }),
      (t[9] = Se),
      (t[10] = b),
      (t[11] = N))
    : (N = t[11]);
  let { installRecommendedSkill: Be, installingSkillId: Ue } = Ie(N),
    P;
  t[12] === o
    ? (P = t[13])
    : ((P = Ee({ scope: `repo`, intl: o })), (t[12] = o), (t[13] = P));
  let We = P,
    Ke = s?.name ?? void 0,
    qe;
  t[14] !== o || t[15] !== Ke
    ? ((qe = Ee({ scope: `admin`, intl: o, adminLabel: Ke })),
      (t[14] = o),
      (t[15] = Ke),
      (t[16] = qe))
    : (qe = t[16]);
  let Je = qe,
    Ye;
  t[17] !== o || t[18] !== Je || t[19] !== We || t[20] !== A
    ? ((Ye = (e) => {
        let { scope: t, skillPath: n } = e;
        return Ee({
          scope: t,
          intl: o,
          repoLabel: Te({ skillPath: n, roots: A, fallbackLabel: We }),
          adminLabel: Je,
        });
      }),
      (t[17] = o),
      (t[18] = Je),
      (t[19] = We),
      (t[20] = A),
      (t[21] = Ye))
    : (Ye = t[21]);
  let Xe = Ye,
    Qe;
  if (t[22] !== S || t[23] !== k) {
    let e = S.trim().toLowerCase();
    ((Qe = k.filter((t) => {
      let { skill: n } = t;
      if (e.length === 0) return !0;
      let r = d(n).toLowerCase(),
        i = he(n).toLowerCase();
      return n.name.toLowerCase().includes(e) || i.includes(e) || r.includes(e);
    })),
      (t[22] = S),
      (t[23] = k),
      (t[24] = Qe));
  } else Qe = t[24];
  let $e = Qe,
    F;
  t[25] !== O || t[26] !== Le
    ? ((F = async () => {
        (O(), await Le(), w(!1));
      }),
      (t[25] = O),
      (t[26] = Le),
      (t[27] = F))
    : (F = t[27]);
  let et = F,
    rt;
  (t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = []), (t[28] = rt))
    : (rt = t[28]),
    (0, R.useEffect)(nt, rt));
  let I;
  t[29] === fe
    ? (I = t[30])
    : ((I = fe
        ? null
        : (0, z.jsx)(v, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (t[29] = fe),
      (t[30] = I));
  let B;
  t[31] !== f || t[32] !== h || t[33] !== b
    ? ((B =
        f != null && f.length > 0 && h != null
          ? (0, z.jsx)(Ze, {
              connectedRemoteConnections: f,
              onSelectHost: _,
              remoteConnectionHostIds: h,
              selectedHostId: b,
            })
          : null),
      (t[31] = f),
      (t[32] = h),
      (t[33] = b),
      (t[34] = B))
    : (B = t[34]);
  let ct = C ? `secondary` : `ghost`,
    V;
  t[35] === et
    ? (V = t[36])
    : ((V = () => {
        et();
      }),
      (t[35] = et),
      (t[36] = V));
  let lt = D || we,
    ut;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (0, z.jsx)(ge, { className: `icon-xs` })), (t[37] = ut))
    : (ut = t[37]);
  let H;
  t[38] === C
    ? (H = t[39])
    : ((H = (0, z.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: C
          ? (0, z.jsx)(v, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, z.jsx)(v, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (t[38] = C),
      (t[39] = H));
  let U;
  t[40] !== ct || t[41] !== V || t[42] !== lt || t[43] !== H
    ? ((U = (0, z.jsxs)(l, {
        color: ct,
        size: `toolbar`,
        onClick: V,
        disabled: lt,
        children: [ut, H],
      })),
      (t[40] = ct),
      (t[41] = V),
      (t[42] = lt),
      (t[43] = H),
      (t[44] = U))
    : (U = t[44]);
  let W;
  t[45] === o
    ? (W = t[46])
    : ((W = o.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (t[45] = o),
      (t[46] = W));
  let G;
  t[47] === o
    ? (G = t[48])
    : ((G = o.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (t[47] = o),
      (t[48] = G));
  let K;
  t[49] !== S || t[50] !== W || t[51] !== G
    ? ((K = (0, z.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, z.jsx)(Ce, {
          id: `skills-search`,
          label: W,
          placeholder: G,
          searchQuery: S,
          onSearchQueryChange: _e,
        }),
      })),
      (t[49] = S),
      (t[50] = W),
      (t[51] = G),
      (t[52] = K))
    : (K = t[52]);
  let q;
  t[53] !== T || t[54] !== a || t[55] !== be || t[56] !== j || t[57] !== c
    ? ((q = () => {
        if (!j) return;
        te(a, ue, {});
        let e = Ge({ creatorPath: j, isFirstOpen: !T, kind: `skill` });
        (T || be(!0), c({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (t[53] = T),
      (t[54] = a),
      (t[55] = be),
      (t[56] = j),
      (t[57] = c),
      (t[58] = q))
    : (q = t[58]);
  let dt = !j,
    ft,
    pt;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, z.jsx)(ae, { className: `icon-xs` })),
      (pt = (0, z.jsx)(v, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (t[59] = ft),
      (t[60] = pt))
    : ((ft = t[59]), (pt = t[60]));
  let J;
  t[61] !== q || t[62] !== dt
    ? ((J = (0, z.jsxs)(l, {
        color: `primary`,
        size: `toolbar`,
        onClick: q,
        disabled: dt,
        children: [ft, pt],
      })),
      (t[61] = q),
      (t[62] = dt),
      (t[63] = J))
    : (J = t[63]);
  let Y;
  t[64] !== B || t[65] !== U || t[66] !== K || t[67] !== J
    ? ((Y = (0, z.jsxs)(`div`, {
        className: `flex flex-nowrap items-center gap-1.5`,
        children: [B, U, K, J],
      })),
      (t[64] = B),
      (t[65] = U),
      (t[66] = K),
      (t[67] = J),
      (t[68] = Y))
    : (Y = t[68]);
  let X;
  t[69] !== I || t[70] !== Y
    ? ((X = (0, z.jsx)(Oe, { start: I, trailing: Y })),
      (t[69] = I),
      (t[70] = Y),
      (t[71] = X))
    : (X = t[71]);
  let mt;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (e) => {
        re(e);
      }),
      (t[72] = mt))
    : (mt = t[72]);
  let ht;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (e) => {
        le(e);
      }),
      (t[73] = ht))
    : (ht = t[73]);
  let gt;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, z.jsx)(`div`, {
        className: `heading-xl font-normal text-token-foreground`,
        children: (0, z.jsx)(v, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (t[74] = gt))
    : (gt = t[74]);
  let _t;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = (0, z.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, z.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: ht,
          children: [
            gt,
            (0, z.jsx)(`div`, {
              className: `text-lg font-normal text-token-description-foreground`,
              children: (0, z.jsx)(v, {
                id: `skills.page.subheading`,
                defaultMessage: `Add reusable workflows with Skills. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: tt },
              }),
            }),
          ],
        }),
      })),
      (t[75] = _t))
    : (_t = t[75]);
  let vt;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, z.jsx)(v, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (t[76] = vt))
    : (vt = t[76]);
  let Z;
  t[77] !== $e ||
  t[78] !== Xe ||
  t[79] !== D ||
  t[80] !== O ||
  t[81] !== b ||
  t[82] !== k.length ||
  t[83] !== A
    ? ((Z = (0, z.jsx)(at, {
        title: vt,
        children: (0, z.jsx)(ot, {
          hostId: b,
          isLoading: D,
          uniqueSkillCount: k.length,
          filteredSkills: $e,
          getScopeBadgeLabel: Xe,
          roots: A,
          onSkillsUpdated: O,
        }),
      })),
      (t[77] = $e),
      (t[78] = Xe),
      (t[79] = D),
      (t[80] = O),
      (t[81] = b),
      (t[82] = k.length),
      (t[83] = A),
      (t[84] = Z))
    : (Z = t[84]);
  let yt;
  t[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = (0, z.jsx)(v, {
        id: `skills.section.recommended`,
        defaultMessage: `Recommended`,
        description: `Heading for the recommended skills section`,
      })),
      (t[85] = yt))
    : (yt = t[85]);
  let Q;
  t[86] !== De ||
  t[87] !== Be ||
  t[88] !== E ||
  t[89] !== Ue ||
  t[90] !== Fe ||
  t[91] !== Re ||
  t[92] !== ze ||
  t[93] !== Me ||
  t[94] !== S ||
  t[95] !== b
    ? ((Q = (0, z.jsx)(at, {
        title: yt,
        children: (0, z.jsx)(st, {
          hostId: b,
          isLoading: Fe,
          errorMessage: Me,
          skills: ze,
          searchQuery: S,
          canInstall: De,
          repoRoot: Re,
          onInstall: Be,
          installedSkillMatchKeys: E,
          installingSkillId: Ue,
        }),
      })),
      (t[86] = De),
      (t[87] = Be),
      (t[88] = E),
      (t[89] = Ue),
      (t[90] = Fe),
      (t[91] = Re),
      (t[92] = ze),
      (t[93] = Me),
      (t[94] = S),
      (t[95] = b),
      (t[96] = Q))
    : (Q = t[96]);
  let $;
  t[97] !== Z || t[98] !== Q
    ? (($ = (0, z.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: mt,
        children: (0, z.jsxs)(He, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            _t,
            (0, z.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, z.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col gap-9 pb-10`,
                children: [Z, Q],
              }),
            }),
          ],
        }),
      })),
      (t[97] = Z),
      (t[98] = Q),
      (t[99] = $))
    : ($ = t[99]);
  let bt;
  return (
    t[100] !== X || t[101] !== $
      ? ((bt = (0, z.jsxs)(`div`, {
          className: `mr-4 flex h-full flex-col text-base`,
          children: [X, $],
        })),
        (t[100] = X),
        (t[101] = $),
        (t[102] = bt))
      : (bt = t[102]),
    bt
  );
}
function tt(e) {
  return (0, z.jsx)(`a`, {
    href: k,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-token-link`,
    children: e,
  });
}
function nt() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), rt);
}
function rt() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function it(e) {
  return e.hostId;
}
function at(e) {
  let t = (0, L.c)(5),
    { title: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, z.jsx)(`div`, {
        className: `pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, z.jsxs)(`section`, {
          className: `flex flex-col gap-4`,
          children: [i, r],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function ot(e) {
  let t = (0, L.c)(16),
    {
      hostId: n,
      isLoading: r,
      uniqueSkillCount: i,
      filteredSkills: a,
      getScopeBadgeLabel: o,
      roots: s,
      onSkillsUpdated: c,
    } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, z.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, z.jsx)(E, {
              children: (0, z.jsx)(v, {
                id: `skills.page.loading`,
                defaultMessage: `Loading skills…`,
                description: `Loading label on the skills page`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === 0) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, z.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, z.jsx)(w, {
              title: (0, z.jsx)(v, {
                id: `skills.page.empty`,
                defaultMessage: `No skills found`,
                description: `Empty state on the skills page`,
              }),
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, z.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, z.jsx)(w, {
              title: (0, z.jsx)(v, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, z.jsx)(v, {
                id: `skills.page.filteredEmptyDescription`,
                defaultMessage: `Try adjusting your search or scope filters`,
                description: `Description for filtered skills empty state`,
              }),
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let l;
  if (t[3] !== a || t[4] !== o || t[5] !== n || t[6] !== c || t[7] !== s) {
    let e;
    (t[9] !== o || t[10] !== n || t[11] !== c || t[12] !== s
      ? ((e = (e) => {
          let { skill: t } = e,
            r =
              t.scope === `repo`
                ? [
                    (0, z.jsx)(
                      I,
                      { label: o({ scope: `repo`, skillPath: t.path }) },
                      `${t.path}-repo`,
                    ),
                  ]
                : [],
            i = t.scope === `repo` ? M({ skillPath: t.path, roots: s }) : null;
          return (0, z.jsx)(
            ze,
            {
              skill: t,
              displayName: he(t),
              hostId: n,
              scopeBadges: r,
              repoRoot: i,
              onSkillsUpdated: c,
            },
            t.path,
          );
        }),
        (t[9] = o),
        (t[10] = n),
        (t[11] = c),
        (t[12] = s),
        (t[13] = e))
      : (e = t[13]),
      (l = a.map(e)),
      (t[3] = a),
      (t[4] = o),
      (t[5] = n),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l));
  } else l = t[8];
  let u;
  return (
    t[14] === l
      ? (u = t[15])
      : ((u = (0, z.jsx)(P, { children: l })), (t[14] = l), (t[15] = u)),
    u
  );
}
function I(e) {
  let t = (0, L.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, z.jsx)(`span`, {
          className: `text-token-description-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function st(e) {
  let t = (0, L.c)(31),
    {
      hostId: n,
      isLoading: r,
      errorMessage: i,
      skills: a,
      searchQuery: o,
      canInstall: s,
      repoRoot: c,
      onInstall: l,
      installedSkillMatchKeys: u,
      installingSkillId: d,
    } = e,
    f,
    p,
    m;
  if (
    t[0] !== s ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== u ||
    t[4] !== d ||
    t[5] !== r ||
    t[6] !== l ||
    t[7] !== c ||
    t[8] !== o ||
    t[9] !== a
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === u
        ? (e = t[14])
        : ((e = (e) => !j({ installedSkillMatchKeys: u, skill: e })),
          (t[13] = u),
          (t[14] = e));
      let h = a.filter(e),
        ee = o.trim().toLowerCase(),
        g = h.filter((e) =>
          ee.length === 0
            ? !0
            : [e.name, e.description, e.shortDescription ?? ``]
                .join(` `)
                .toLowerCase()
                .includes(ee),
        );
      if (r) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, z.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, z.jsx)(E, {
                children: (0, z.jsx)(v, {
                  id: `skills.page.loading`,
                  defaultMessage: `Loading skills…`,
                  description: `Loading label on the skills page`,
                }),
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (m = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, z.jsx)(v, {
              id: `skills.recommended.error`,
              defaultMessage: `Unable to load recommended skills`,
              description: `Error title when recommended skills fail to load`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        (t[17] === i
          ? (n = t[18])
          : ((n = (0, z.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, z.jsx)(w, { title: e, description: i }),
            })),
            (t[17] = i),
            (t[18] = n)),
          (m = n));
        break bb0;
      }
      if (h.length === 0) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, z.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, z.jsx)(w, {
                title: (0, z.jsx)(v, {
                  id: `skills.page.empty`,
                  defaultMessage: `No skills found`,
                  description: `Empty state on the skills page`,
                }),
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (m = e));
        break bb0;
      }
      if (g.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, z.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, z.jsx)(w, {
                title: (0, z.jsx)(v, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, z.jsx)(v, {
                  id: `skills.page.filteredEmptyDescription`,
                  defaultMessage: `Try adjusting your search or scope filters`,
                  description: `Description for filtered skills empty state`,
                }),
              }),
            })),
            (t[20] = e))
          : (e = t[20]),
          (m = e));
        break bb0;
      }
      f = P;
      let _;
      (t[21] !== s ||
      t[22] !== n ||
      t[23] !== u ||
      t[24] !== d ||
      t[25] !== l ||
      t[26] !== c
        ? ((_ = (e) =>
            (0, z.jsx)(
              Ke,
              {
                skill: e,
                canInstall: s,
                hostId: n,
                isInstalled: j({ installedSkillMatchKeys: u, skill: e }),
                isInstalling: d === e.id,
                repoRoot: c,
                onInstall: l,
              },
              e.id,
            )),
          (t[21] = s),
          (t[22] = n),
          (t[23] = u),
          (t[24] = d),
          (t[25] = l),
          (t[26] = c),
          (t[27] = _))
        : (_ = t[27]),
        (p = g.map(_)));
    }
    ((t[0] = s),
      (t[1] = i),
      (t[2] = n),
      (t[3] = u),
      (t[4] = d),
      (t[5] = r),
      (t[6] = l),
      (t[7] = c),
      (t[8] = o),
      (t[9] = a),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  } else ((f = t[10]), (p = t[11]), (m = t[12]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h;
  return (
    t[28] !== f || t[29] !== p
      ? ((h = (0, z.jsx)(f, { children: p })),
        (t[28] = f),
        (t[29] = p),
        (t[30] = h))
      : (h = t[30]),
    h
  );
}
var L,
  R,
  z,
  B = e(() => {
    ((L = o()),
      f(),
      b(),
      _(),
      (R = t(c(), 1)),
      le(),
      s(),
      T(),
      a(),
      u(),
      C(),
      D(),
      A(),
      fe(),
      Se(),
      re(),
      _e(),
      S(),
      i(),
      y(),
      Xe(),
      be(),
      we(),
      h(),
      O(),
      p(),
      We(),
      Me(),
      Be(),
      Ue(),
      Le(),
      g(),
      Ye(),
      Fe(),
      De(),
      Ae(),
      qe(),
      (z = oe()));
  });
export { Qe as n, B as r, $e as t };
//# sourceMappingURL=skills-page-DsYq2om_.js.map
