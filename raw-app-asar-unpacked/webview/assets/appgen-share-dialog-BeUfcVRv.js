import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $M as n,
  Af as r,
  Ao as i,
  Bu as a,
  Cb as o,
  DK as s,
  Df as c,
  Fq as l,
  Gb as u,
  I2 as d,
  Kb as f,
  L2 as p,
  Mq as m,
  Nq as h,
  Of as g,
  Pq as _,
  Rm as v,
  S0 as y,
  SK as b,
  Sf as x,
  _0 as S,
  _Y as C,
  _f as w,
  bK as T,
  bf as E,
  cS as D,
  cY as O,
  gD as k,
  gf as A,
  hf as j,
  jo as ee,
  k2 as te,
  kK as ne,
  kb as re,
  kf as ie,
  lS as ae,
  mD as oe,
  mY as se,
  mf as ce,
  nN as le,
  nd as ue,
  oN as M,
  pY as de,
  qM as fe,
  sY as pe,
  td as N,
  wf as me,
  x0 as he,
  yY as ge,
  zm as P,
  zu as F,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Cc as I,
  Dc as _e,
  Ec as ve,
  Ma as L,
  Oc as R,
  Sc as z,
  Tc as ye,
  dl as B,
  fl as be,
  ja as xe,
  xc as Se,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Jt as Ce,
  Ro as we,
  qt as Te,
  zo as V,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  a as H,
  c as Ee,
  d as De,
  f as Oe,
  h as ke,
  i as U,
  l as Ae,
  m as je,
  o as Me,
  p as Ne,
  r as Pe,
  s as Fe,
  t as Ie,
} from "./use-workspace-users-BlyDr3Cd.js";
import { n as Le, t as Re } from "./share-invite-autocomplete-DyCTFLLo.js";
function ze(e) {
  let t = (0, W.c)(12),
    { liveUrl: n, title: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = we(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, G.jsx)(v, { className: `icon-md` }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, G.jsx)(`div`, {
        className: `truncate text-sm font-medium text-token-foreground`,
        children: r,
      })),
      (t[3] = r),
      (t[4] = s));
  let c;
  t[5] === a
    ? (c = t[6])
    : ((c =
        a ??
        (0, G.jsx)(C, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in a Site card for a site without a published URL`,
        })),
      (t[5] = a),
      (t[6] = c));
  let l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, G.jsx)(`div`, {
        className: `truncate text-xs text-token-text-tertiary`,
        children: c,
      })),
      (t[7] = c),
      (t[8] = l));
  let u;
  return (
    t[9] !== s || t[10] !== l
      ? ((u = (0, G.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-token-bg-secondary p-3`,
          children: [
            o,
            (0, G.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [s, l],
            }),
          ],
        })),
        (t[9] = s),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
var W,
  G,
  Be = e(() => {
    ((W = d()), se(), P(), V(), (G = te()));
  });
function Ve(e) {
  let t = (0, Z.c)(105),
    { onClose: r, projectId: i, showVisitAction: a } = e,
    o = a === void 0 ? !0 : a,
    s = ge(),
    l = y(pe),
    { email: u } = ae(),
    { data: d } = re(),
    p = d?.structure === `workspace`,
    { data: m, isError: h, isLoading: g } = he(n, i),
    v = he(le, i),
    [x, S] = (0, Q.useState)(``),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = []), (t[0] = T))
    : (T = t[0]);
  let [E, D] = (0, Q.useState)(T),
    O;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = []), (t[1] = O))
    : (O = t[1]);
  let [k, j] = (0, Q.useState)(O),
    [ee, te] = (0, Q.useState)(null),
    ne;
  t[2] === x ? (ne = t[3]) : ((ne = x.trim()), (t[2] = x), (t[3] = ne));
  let oe = ne,
    se = f(oe, 200),
    { data: ue } = Pe(p ? x : ``),
    { data: M } = he(fe, p ? se : null),
    de = se === oe,
    { data: N } = he(fe, p ? `` : null),
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    be;
  if (
    t[4] !== M ||
    t[5] !== N ||
    t[6] !== d?.account_user_id ||
    t[7] !== s ||
    t[8] !== m?.access_policy ||
    t[9] !== k ||
    t[10] !== E ||
    t[11] !== ue
  ) {
    ((L = it(M)),
      (R = it(at(M, N))),
      (P = m?.access_policy),
      (I = P?.allowed_users ?? []),
      (F = P?.allowed_groups ?? []));
    let e = new Set(I.map(qe));
    z = Ee({
      currentAccountUserId: d?.account_user_id,
      existingAccountUserIds: e,
      selectedAccountUserIds: E.map(Ke),
      workspaceUsers: ue,
    });
    let n = new Set(F.map(Ge));
    B = new Set(R.map(We));
    let r;
    t[20] !== n || t[21] !== k
      ? ((r = (e) => !n.has(e.id) && !k.some((t) => t.id === e.id)),
        (t[20] = n),
        (t[21] = k),
        (t[22] = r))
      : (r = t[22]);
    let i = L.filter(r),
      a;
    (t[23] === s
      ? (a = t[24])
      : ((a = (e) => st(e, s)), (t[23] = s), (t[24] = a)),
      (be = [...i.map(a), ...(z?.map(ct) ?? [])]),
      (t[4] = M),
      (t[5] = N),
      (t[6] = d?.account_user_id),
      (t[7] = s),
      (t[8] = m?.access_policy),
      (t[9] = k),
      (t[10] = E),
      (t[11] = ue),
      (t[12] = P),
      (t[13] = F),
      (t[14] = I),
      (t[15] = L),
      (t[16] = R),
      (t[17] = z),
      (t[18] = B),
      (t[19] = be));
  } else
    ((P = t[12]),
      (F = t[13]),
      (I = t[14]),
      (L = t[15]),
      (R = t[16]),
      (z = t[17]),
      (B = t[18]),
      (be = t[19]));
  let xe = be,
    Se;
  if (t[25] !== s || t[26] !== k || t[27] !== E) {
    let e;
    (t[29] === s
      ? (e = t[30])
      : ((e = (e) => st(e, s)), (t[29] = s), (t[30] = e)),
      (Se = [...k.map(e), ...E.map(ct)]),
      (t[25] = s),
      (t[26] = k),
      (t[27] = E),
      (t[28] = Se));
  } else Se = t[28];
  let Ce = Se,
    we;
  t[31] === m
    ? (we = t[32])
    : ((we =
        m == null
          ? (0, $.jsx)(C, {
              id: `appgenShareDialog.title`,
              defaultMessage: `Share`,
              description: `Title for the site sharing dialog`,
            })
          : (0, $.jsx)(C, {
              id: `appgenShareDialog.projectTitle`,
              defaultMessage: `Share {siteTitle}`,
              description: `Title for the site sharing dialog including the site title`,
              values: { siteTitle: m.title },
            })),
      (t[31] = m),
      (t[32] = we));
  let Te = we,
    V = ee ?? P?.access_mode ?? null,
    H = p && V !== `public`,
    De = P != null && V !== P.access_mode,
    Oe = H && Ce.length > 0,
    ke;
  t[33] !== s || t[34] !== l
    ? ((ke = function () {
        l.get(b).danger(
          s.formatMessage({
            id: `appgenShareDialog.save.error`,
            defaultMessage: `Unable to save sharing settings`,
            description: `Error toast shown when saving site sharing settings fails`,
          }),
        );
      }),
      (t[33] = s),
      (t[34] = l),
      (t[35] = ke))
    : (ke = t[35]);
  let U = ke,
    Ae;
  t[36] !== P ||
  t[37] !== F ||
  t[38] !== I ||
  t[39] !== L ||
  t[40] !== H ||
  t[41] !== V ||
  t[42] !== R ||
  t[43] !== r ||
  t[44] !== k ||
  t[45] !== E ||
  t[46] !== U ||
  t[47] !== v
    ? ((Ae = function () {
        if (P == null || V == null) {
          r();
          return;
        }
        let e = ye({
          accessGroups: L,
          accessMode: V,
          allowedUserEmails: [...I, ...E].map(Ue),
          canManageInvitees: H,
          existingGroups: F,
          knownAccessGroups: R,
          selectedGroups: k,
        });
        v.mutateAsync(e).then(
          () => {
            (D([]), j([]), te(null));
          },
          () => {
            U();
          },
        );
      }),
      (t[36] = P),
      (t[37] = F),
      (t[38] = I),
      (t[39] = L),
      (t[40] = H),
      (t[41] = V),
      (t[42] = R),
      (t[43] = r),
      (t[44] = k),
      (t[45] = E),
      (t[46] = U),
      (t[47] = v),
      (t[48] = Ae))
    : (Ae = t[48]);
  let je = Ae,
    Me;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = function () {
        (D([]), j([]), te(null));
      }),
      (t[49] = Me))
    : (Me = t[49]);
  let Ne = Me,
    Fe;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = function (e) {
        (te(e), e === `public` && (S(``), D([]), j([])));
      }),
      (t[50] = Fe))
    : (Fe = t[50]);
  let Ie = Fe,
    Le;
  t[51] !== U || t[52] !== v
    ? ((Le = function (e) {
        return v.mutateAsync(e).then(He, (e) => {
          throw (U(), e);
        });
      }),
      (t[51] = U),
      (t[52] = v),
      (t[53] = Le))
    : (Le = t[53]);
  let W = Le,
    G;
  t[54] !== P || t[55] !== L || t[56] !== R || t[57] !== W
    ? ((G = function (e) {
        if (P == null) return Promise.resolve();
        switch (e.kind) {
          case `user`:
            return W(_e(P, e.user.account_user_id));
          case `group`:
            return W(
              ve({
                accessGroups: L,
                accessPolicy: P,
                group: e.group,
                knownAccessGroups: R,
              }),
            );
        }
      }),
      (t[54] = P),
      (t[55] = L),
      (t[56] = R),
      (t[57] = W),
      (t[58] = G))
    : (G = t[58]);
  let Be = G,
    Ve;
  t[59] !== m || t[60] !== Be || t[61] !== l
    ? ((Ve = function (e) {
        m != null &&
          me(l, Je, {
            label: e.kind === `group` ? e.group.name : Ze(e.user),
            onConfirm: () => Be(e),
            siteTitle: m.title,
          });
      }),
      (t[59] = m),
      (t[60] = Be),
      (t[61] = l),
      (t[62] = Ve))
    : (Ve = t[62]);
  let Xe = Ve,
    Qe;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = { "aria-describedby": void 0 }), (t[63] = Qe))
    : (Qe = t[63]);
  let K;
  t[64] === r
    ? (K = t[65])
    : ((K = (e) => {
        e || r();
      }),
      (t[64] = r),
      (t[65] = K));
  let q;
  t[66] === Te
    ? (q = t[67])
    : ((q = (0, $.jsxs)(`div`, {
        className: `flex w-full flex-col`,
        children: [
          (0, $.jsx)(ie, { className: `sr-only`, children: Te }),
          (0, $.jsx)(A, { title: Te, titleClassName: `truncate pr-8` }),
        ],
      })),
      (t[66] = Te),
      (t[67] = q));
  let J;
  t[68] !== M ||
  t[69] !== P ||
  t[70] !== F ||
  t[71] !== I ||
  t[72] !== N ||
  t[73] !== H ||
  t[74] !== d?.account_user_id ||
  t[75] !== u ||
  t[76] !== V ||
  t[77] !== s ||
  t[78] !== xe ||
  t[79] !== de ||
  t[80] !== h ||
  t[81] !== g ||
  t[82] !== p ||
  t[83] !== z ||
  t[84] !== Xe ||
  t[85] !== m ||
  t[86] !== x ||
  t[87] !== B ||
  t[88] !== Ce
    ? ((J = g
        ? (0, $.jsx)(w, {
            className: `py-12`,
            children: (0, $.jsx)(`div`, {
              className: `flex justify-center`,
              children: (0, $.jsx)(_, {}),
            }),
          })
        : h || m == null || P == null
          ? (0, $.jsx)(w, {
              className: `py-10`,
              children: (0, $.jsx)(`div`, {
                className: `text-center text-sm font-medium text-token-text-secondary`,
                children: (0, $.jsx)(C, {
                  id: `appgenShareDialog.error`,
                  defaultMessage: `Unable to load sharing settings`,
                  description: `Error state title in the site share dialog`,
                }),
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(w, {
                  children: (0, $.jsx)(ze, {
                    liveUrl: m.current_live_url,
                    title: m.title,
                  }),
                }),
                H
                  ? (0, $.jsx)(w, {
                      children: (0, $.jsx)(Re, {
                        ariaLabel: s.formatMessage({
                          id: `appgenShareDialog.workspaceUserSearch`,
                          defaultMessage: `Add people or groups`,
                          description: `Accessible label for searching workspace users and groups in the site share dialog`,
                        }),
                        emptyMessage: (0, $.jsx)(C, {
                          id: `appgenShareDialog.noWorkspaceUsers`,
                          defaultMessage: `No matching people or groups`,
                          description: `Empty state shown when no workspace users or groups match the site share dialog autocomplete query`,
                        }),
                        options:
                          !de || M == null || N == null || z == null
                            ? void 0
                            : xe,
                        placeholder: s.formatMessage({
                          id: `appgenShareDialog.workspaceUserPlaceholder`,
                          defaultMessage: `Add people or groups`,
                          description: `Placeholder for the site share dialog workspace user and group autocomplete`,
                        }),
                        query: x,
                        selectedOptions: Ce,
                        onQueryChange: S,
                        onRemoveOption: (e) => {
                          let { target: t } = e;
                          bb177: switch (t.kind) {
                            case `group`:
                              j((e) => e.filter((e) => e.id !== t.group.id));
                              break bb177;
                            case `user`:
                              D((e) =>
                                e.filter(
                                  (e) =>
                                    e.account_user_id !==
                                    t.user.account_user_id,
                                ),
                              );
                          }
                        },
                        onSelectOption: (e) => {
                          let { target: t } = e;
                          bb191: switch (t.kind) {
                            case `group`:
                              j((e) => [...e, t.group]);
                              break bb191;
                            case `user`:
                              D((e) => [...e, t.user]);
                          }
                        },
                        getRemoveLabel: (e) =>
                          s.formatMessage(
                            {
                              id: `appgenShareDialog.removeSelectedUser`,
                              defaultMessage: `Remove {name}`,
                              description: `Accessible label for removing a selected workspace user from the site share dialog`,
                            },
                            { name: e.chipLabel ?? e.label },
                          ),
                      }),
                    })
                  : null,
                (0, $.jsx)(Ye, {
                  accessPolicy: P,
                  activeAccessGroups: F,
                  activeAccessUsers: I,
                  availableAccessModes: m.available_access_modes,
                  canManageInvitees: H,
                  isWorkspaceAccount: p,
                  removableAccessGroupIds: B,
                  selectedAccessMode: V,
                  ownerEmail: u,
                  ownerId: d?.account_user_id,
                  onAccessModeChange: Ie,
                  onRemoveAccessUser: (e) => {
                    Xe({ kind: `user`, user: e });
                  },
                  onRemoveAccessGroup: (e) => {
                    Xe({ kind: `group`, group: e });
                  },
                }),
              ],
            })),
      (t[68] = M),
      (t[69] = P),
      (t[70] = F),
      (t[71] = I),
      (t[72] = N),
      (t[73] = H),
      (t[74] = d?.account_user_id),
      (t[75] = u),
      (t[76] = V),
      (t[77] = s),
      (t[78] = xe),
      (t[79] = de),
      (t[80] = h),
      (t[81] = g),
      (t[82] = p),
      (t[83] = z),
      (t[84] = Xe),
      (t[85] = m),
      (t[86] = x),
      (t[87] = B),
      (t[88] = Ce),
      (t[89] = J))
    : (J = t[89]);
  let $e = g || h || m == null || P == null ? void 0 : m.current_live_url,
    Y;
  t[90] !== V ||
  t[91] !== je ||
  t[92] !== De ||
  t[93] !== Oe ||
  t[94] !== o ||
  t[95] !== $e ||
  t[96] !== v.isPending
    ? ((Y = (0, $.jsx)(tt, {
        accessMode: V,
        hasPendingAccessChange: De,
        hasPendingInvitees: Oe,
        isSaving: v.isPending,
        liveUrl: $e,
        showVisitAction: o,
        onCancelChanges: Ne,
        onDone: je,
      })),
      (t[90] = V),
      (t[91] = je),
      (t[92] = De),
      (t[93] = Oe),
      (t[94] = o),
      (t[95] = $e),
      (t[96] = v.isPending),
      (t[97] = Y))
    : (Y = t[97]);
  let X;
  t[98] !== q || t[99] !== J || t[100] !== Y
    ? ((X = (0, $.jsxs)(ce, { className: `px-4 py-3`, children: [q, J, Y] })),
      (t[98] = q),
      (t[99] = J),
      (t[100] = Y),
      (t[101] = X))
    : (X = t[101]);
  let et;
  return (
    t[102] !== K || t[103] !== X
      ? ((et = (0, $.jsx)(c, {
          open: !0,
          size: `compact`,
          contentOverflow: `visible`,
          contentProps: Qe,
          onOpenChange: K,
          children: X,
        })),
        (t[102] = K),
        (t[103] = X),
        (t[104] = et))
      : (et = t[104]),
    et
  );
}
function He() {}
function Ue(e) {
  return e.email;
}
function We(e) {
  return e.id;
}
function Ge(e) {
  return e.id;
}
function Ke(e) {
  return e.account_user_id;
}
function qe(e) {
  return e.account_user_id;
}
function Je(e) {
  let t = (0, Z.c)(36),
    { label: n, onClose: r, onConfirm: i, siteTitle: a } = e,
    [o, s] = (0, Q.useState)(!1),
    l = !o,
    u;
  t[0] !== o || t[1] !== r
    ? ((u = (e) => {
        !e && !o && r();
      }),
      (t[0] = o),
      (t[1] = r),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== o || t[4] !== r || t[5] !== i
    ? ((d = (e) => {
        (e.preventDefault(),
          !o &&
            (s(!0),
            i().then(r, () => {
              s(!1);
            })));
      }),
      (t[3] = o),
      (t[4] = r),
      (t[5] = i),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === n
    ? (f = t[8])
    : ((f = (0, $.jsx)(ie, {
        className: `contents`,
        children: (0, $.jsx)(C, {
          id: `appgenShareDialog.removeDialog.title`,
          defaultMessage: `Remove {label}?`,
          description: `Title for dialog confirming removal of a person's or group's site access`,
          values: { label: n },
        }),
      })),
      (t[7] = n),
      (t[8] = f));
  let p;
  t[9] === n
    ? (p = t[10])
    : ((p = (0, $.jsx)(
        `span`,
        { className: `font-medium text-token-text-primary`, children: n },
        `remove-access-label`,
      )),
      (t[9] = n),
      (t[10] = p));
  let h;
  t[11] !== a || t[12] !== p
    ? ((h = (0, $.jsx)(g, {
        className: `contents`,
        children: (0, $.jsx)(C, {
          id: `appgenShareDialog.removeDialog.description`,
          defaultMessage: `{label} will no longer be able to visit {siteTitle}`,
          description: `Warning shown when removing a person or group from a site's access list`,
          values: { label: p, siteTitle: a },
        }),
      })),
      (t[11] = a),
      (t[12] = p),
      (t[13] = h))
    : (h = t[13]);
  let _;
  t[14] !== f || t[15] !== h
    ? ((_ = (0, $.jsx)(A, {
        title: f,
        titleClassName: `truncate pr-8`,
        subtitle: h,
      })),
      (t[14] = f),
      (t[15] = h),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(C, {
        id: `appgenShareDialog.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for access removal confirmation dialog`,
      })),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== o || t[19] !== r
    ? ((y = (0, $.jsx)(m, {
        color: `secondary`,
        disabled: o,
        onClick: r,
        children: v,
      })),
      (t[18] = o),
      (t[19] = r),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(C, {
        id: `appgenShareDialog.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing site access`,
      })),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] === o
    ? (x = t[23])
    : ((x = (0, $.jsx)(m, {
        color: `danger`,
        loading: o,
        type: `submit`,
        children: b,
      })),
      (t[22] = o),
      (t[23] = x));
  let S;
  t[24] !== x || t[25] !== y
    ? ((S = (0, $.jsx)(w, { children: (0, $.jsxs)(j, { children: [y, x] }) })),
      (t[24] = x),
      (t[25] = y),
      (t[26] = S))
    : (S = t[26]);
  let T;
  t[27] !== S || t[28] !== d || t[29] !== _
    ? ((T = (0, $.jsxs)(ce, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: d,
        children: [_, S],
      })),
      (t[27] = S),
      (t[28] = d),
      (t[29] = _),
      (t[30] = T))
    : (T = t[30]);
  let E;
  return (
    t[31] !== o || t[32] !== l || t[33] !== T || t[34] !== u
      ? ((E = (0, $.jsx)(c, {
          open: !0,
          shouldIgnoreClickOutside: o,
          showDialogClose: l,
          size: `compact`,
          onOpenChange: u,
          children: T,
        })),
        (t[31] = o),
        (t[32] = l),
        (t[33] = T),
        (t[34] = u),
        (t[35] = E))
      : (E = t[35]),
    E
  );
}
function Ye(e) {
  let t = (0, Z.c)(51),
    {
      activeAccessGroups: n,
      activeAccessUsers: r,
      accessPolicy: i,
      availableAccessModes: a,
      canManageInvitees: o,
      isWorkspaceAccount: s,
      removableAccessGroupIds: c,
      selectedAccessMode: l,
      ownerEmail: u,
      ownerId: d,
      onAccessModeChange: f,
      onRemoveAccessGroup: p,
      onRemoveAccessUser: m,
    } = e,
    h = ge(),
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (
    t[0] !== i.access_mode ||
    t[1] !== i.revision ||
    t[2] !== r ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== f ||
    t[7] !== m ||
    t[8] !== u ||
    t[9] !== d ||
    t[10] !== l
  ) {
    let e = Xe({
        activeAccessUsers: r,
        currentAccountUserId: d,
        currentUserEmail: u,
      }),
      n = r.filter((t) => t.account_user_id !== e?.account_user_id);
    ((g = w),
      (b = `gap-3`),
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((x = (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-foreground`,
            children: (0, $.jsx)(C, {
              id: `appgenShareDialog.access.title`,
              defaultMessage: `Who has access`,
              description: `Heading for access information in the site share dialog`,
            }),
          })),
          (t[18] = x))
        : (x = t[18]));
    let c = `${i.revision}:${i.access_mode}`,
      p = l ?? i.access_mode;
    (t[19] !== i.access_mode ||
    t[20] !== a ||
    t[21] !== s ||
    t[22] !== f ||
    t[23] !== c ||
    t[24] !== p
      ? ((S = (0, $.jsx)(
          Y,
          {
            availableAccessModes: a,
            currentAccessMode: i.access_mode,
            isWorkspaceAccount: s,
            selectedAccessMode: p,
            onAccessModeChange: f,
          },
          c,
        )),
        (t[19] = i.access_mode),
        (t[20] = a),
        (t[21] = s),
        (t[22] = f),
        (t[23] = c),
        (t[24] = p),
        (t[25] = S))
      : (S = t[25]),
      (_ = `vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto`),
      (v =
        e == null
          ? null
          : (0, $.jsx)(U, {
              avatarLabel: Qe(e),
              label: Ze(e),
              secondaryLabel: K(e),
              trailingContent: (0, $.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, $.jsx)(C, {
                  id: `appgenShareDialog.permission.owner`,
                  defaultMessage: `Owner`,
                  description: `Label for the owner in the site share dialog`,
                }),
              }),
            })));
    let h;
    (t[26] !== o || t[27] !== m
      ? ((h = (e) =>
          (0, $.jsx)(
            U,
            {
              avatarLabel: Qe(e),
              label: Ze(e),
              secondaryLabel: K(e),
              trailingContent: (0, $.jsx)(q, {
                onRemoveAccess: o
                  ? () => {
                      m(e);
                    }
                  : void 0,
              }),
            },
            e.account_user_id,
          )),
        (t[26] = o),
        (t[27] = m),
        (t[28] = h))
      : (h = t[28]),
      (y = n.map(h)),
      (t[0] = i.access_mode),
      (t[1] = i.revision),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = f),
      (t[7] = m),
      (t[8] = u),
      (t[9] = d),
      (t[10] = l),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S));
  } else
    ((g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]),
      (x = t[16]),
      (S = t[17]));
  let T;
  if (t[29] !== n || t[30] !== o || t[31] !== h || t[32] !== p || t[33] !== c) {
    let e;
    (t[35] !== o || t[36] !== h || t[37] !== p || t[38] !== c
      ? ((e = (e) =>
          (0, $.jsx)(
            U,
            {
              label: e.name,
              secondaryLabel: h.formatMessage(
                {
                  id: `appgenShareDialog.access.groupSize`,
                  defaultMessage: `{count, plural, one {# member} other {# members}}`,
                  description: `Member count shown for a group in the site share dialog`,
                },
                { count: e.size },
              ),
              trailingContent: (0, $.jsx)(q, {
                onRemoveAccess:
                  o && c.has(e.id)
                    ? () => {
                        p(e);
                      }
                    : void 0,
              }),
            },
            e.id,
          )),
        (t[35] = o),
        (t[36] = h),
        (t[37] = p),
        (t[38] = c),
        (t[39] = e))
      : (e = t[39]),
      (T = n.map(e)),
      (t[29] = n),
      (t[30] = o),
      (t[31] = h),
      (t[32] = p),
      (t[33] = c),
      (t[34] = T));
  } else T = t[34];
  let E;
  t[40] !== _ || t[41] !== v || t[42] !== y || t[43] !== T
    ? ((E = (0, $.jsxs)(`div`, { className: _, children: [v, y, T] })),
      (t[40] = _),
      (t[41] = v),
      (t[42] = y),
      (t[43] = T),
      (t[44] = E))
    : (E = t[44]);
  let D;
  return (
    t[45] !== g || t[46] !== b || t[47] !== x || t[48] !== S || t[49] !== E
      ? ((D = (0, $.jsxs)(g, { className: b, children: [x, S, E] })),
        (t[45] = g),
        (t[46] = b),
        (t[47] = x),
        (t[48] = S),
        (t[49] = E),
        (t[50] = D))
      : (D = t[50]),
    D
  );
}
function Xe({
  activeAccessUsers: e,
  currentAccountUserId: t,
  currentUserEmail: n,
}) {
  let r = n?.trim().toLowerCase();
  if (r != null && r.length > 0) {
    let t = e.find((e) => e.email?.trim().toLowerCase() === r);
    if (t != null) return t;
  }
  return t == null ? null : (e.find((e) => e.account_user_id === t) ?? null);
}
function Ze(e) {
  return e.name ?? e.email ?? e.account_user_id;
}
function Qe(e) {
  return e.name ?? e.email ?? e.account_user_id.replace(/[-_]/g, ` `);
}
function K(e) {
  return e.name == null ? null : e.email;
}
function q(e) {
  let t = (0, Z.c)(4),
    { onRemoveAccess: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [{ value: `visit` }]),
      (i = (0, $.jsx)(C, {
        id: `appgenShareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing a person's site access`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsx)(Me, {
          options: r,
          removeLabel: i,
          value: `visit`,
          renderLabel: J,
          onRemoveAccess: n,
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function J() {
  return (0, $.jsx)($e, {});
}
function $e() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(C, {
          id: `appgenShareDialog.permission.visit`,
          defaultMessage: `Can visit`,
          description: `Visitor permission label in the site share dialog`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Y(e) {
  let t = (0, Z.c)(13),
    {
      availableAccessModes: n,
      currentAccessMode: r,
      isWorkspaceAccount: i,
      selectedAccessMode: a,
      onAccessModeChange: o,
    } = e,
    s,
    c;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e = I({
      availableAccessModes: n,
      currentAccessMode: r,
      isWorkspaceAccount: i,
    });
    ((s = je),
      (c = e.map(X)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s),
      (t[4] = c));
  } else ((s = t[3]), (c = t[4]));
  let l;
  t[5] === i
    ? (l = t[6])
    : ((l = (e) =>
        e === `custom` && !i
          ? (0, $.jsx)(C, {
              id: `appgenAccess.state.personalOwnerOnly`,
              defaultMessage: `Just me`,
              description: `Label for a personal site whose access is limited to its owner`,
            })
          : (0, $.jsx)(C, { ...lt[e] })),
      (t[5] = i),
      (t[6] = l));
  let u;
  return (
    t[7] !== s || t[8] !== o || t[9] !== a || t[10] !== c || t[11] !== l
      ? ((u = (0, $.jsx)(s, {
          options: c,
          value: a,
          renderLabel: l,
          onChange: o,
        })),
        (t[7] = s),
        (t[8] = o),
        (t[9] = a),
        (t[10] = c),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function X(e) {
  let { disabled: t, value: n } = e;
  return { disabled: t, Icon: et(n), value: n };
}
function et(e) {
  switch (e) {
    case `admins_only`:
    case `custom`:
      return Se;
    case `workspace_all`:
      return xe;
    case `public`:
      return N;
  }
}
function tt(e) {
  let t = (0, Z.c)(36),
    {
      accessMode: n,
      hasPendingAccessChange: r,
      hasPendingInvitees: a,
      isSaving: o,
      liveUrl: c,
      showVisitAction: l,
      onCancelChanges: u,
      onDone: d,
    } = e,
    f = ge(),
    p = y(pe),
    h;
  t[0] !== o || t[1] !== c
    ? ((h = rt({ action: `copyLink`, isSaving: o, liveUrl: c })),
      (t[0] = o),
      (t[1] = c),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  t[3] !== o || t[4] !== c
    ? ((_ = rt({ action: `visit`, isSaving: o, liveUrl: c })),
      (t[3] = o),
      (t[4] = c),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    x;
  t[6] === d ? (x = t[7]) : ((x = { onClick: d }), (t[6] = d), (t[7] = x));
  let S;
  t[8] === n
    ? (S = t[9])
    : ((S =
        n === `public`
          ? (0, $.jsx)(C, {
              id: `appgenShareDialog.publish`,
              defaultMessage: `Publish`,
              description: `Button label for publishing a site to the public internet`,
            })
          : void 0),
      (t[8] = n),
      (t[9] = S));
  let T;
  t[10] !== d || t[11] !== S
    ? ((T = { label: S, onClick: d }), (t[10] = d), (t[11] = S), (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] !== x || t[14] !== T
    ? ((E = { invite: x, share: T }), (t[13] = x), (t[14] = T), (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] === u ? (D = t[17]) : ((D = { onClick: u }), (t[16] = u), (t[17] = D));
  let O;
  t[18] !== g ||
  t[19] !== f ||
  t[20] !== o ||
  t[21] !== c ||
  t[22] !== p ||
  t[23] !== l ||
  t[24] !== v
    ? ((O =
        c === void 0
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                l
                  ? (0, $.jsx)(s, {
                      tooltipContent: v,
                      children: (0, $.jsx)(`span`, {
                        className: `inline-flex`,
                        children: (0, $.jsxs)(m, {
                          color: `outline`,
                          disabled: o || c == null,
                          size: `toolbar`,
                          onClick: (e) => {
                            c != null &&
                              k({
                                event: e,
                                href: c,
                                initiator: `mcp_app_resource`,
                              });
                          },
                          children: [
                            c == null
                              ? null
                              : (0, $.jsx)(i, {
                                  className: `icon-xs`,
                                  ExternalIcon: B,
                                  href: c,
                                }),
                            (0, $.jsx)(C, {
                              id: `appgenShareDialog.visit`,
                              defaultMessage: `Visit`,
                              description: `Button label for opening a live site externally`,
                            }),
                          ],
                        }),
                      }),
                    })
                  : null,
                (0, $.jsx)(s, {
                  tooltipContent: g,
                  children: (0, $.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, $.jsxs)(m, {
                      color: `outline`,
                      disabled: o || c == null,
                      size: `toolbar`,
                      onClick: () => {
                        c != null &&
                          F(c).then(() => {
                            p.get(b).info(
                              f.formatMessage({
                                id: `appgenShareDialog.copySuccess`,
                                defaultMessage: `Copied to clipboard`,
                                description: `Toast shown after copying a live site URL`,
                              }),
                            );
                          }, nt);
                      },
                      children: [
                        (0, $.jsx)(Te, { className: `icon-xs` }),
                        (0, $.jsx)(C, {
                          id: `appgenShareDialog.copyLink`,
                          defaultMessage: `Copy link`,
                          description: `Button label for copying a live site URL`,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })),
      (t[18] = g),
      (t[19] = f),
      (t[20] = o),
      (t[21] = c),
      (t[22] = p),
      (t[23] = l),
      (t[24] = v),
      (t[25] = O))
    : (O = t[25]);
  let A;
  t[26] === f
    ? (A = t[27])
    : ((A = f.formatMessage({
        id: `appgenShareDialog.saving`,
        defaultMessage: `Saving`,
        description: `Accessible label for the site share dialog save button while saving`,
      })),
      (t[26] = f),
      (t[27] = A));
  let j;
  return (
    t[28] !== r ||
    t[29] !== a ||
    t[30] !== o ||
    t[31] !== E ||
    t[32] !== D ||
    t[33] !== O ||
    t[34] !== A
      ? ((j = (0, $.jsx)(w, {
          className: `pt-4`,
          children: (0, $.jsx)(`div`, {
            className: `flex w-full items-center justify-end gap-3`,
            children: (0, $.jsx)(Oe, {
              actions: E,
              cancelAction: D,
              disabled: o,
              hasPendingAccessChange: r,
              hasPendingInvitees: a,
              idleActions: O,
              isSaving: o,
              savingAriaLabel: A,
              size: `toolbar`,
              spinnerClassName: `icon-xxs`,
            }),
          }),
        })),
        (t[28] = r),
        (t[29] = a),
        (t[30] = o),
        (t[31] = E),
        (t[32] = D),
        (t[33] = O),
        (t[34] = A),
        (t[35] = j))
      : (j = t[35]),
    j
  );
}
function nt() {}
function rt({ action: e, isSaving: t, liveUrl: n }) {
  if (n == null)
    switch (e) {
      case `copyLink`:
        return (0, $.jsx)(C, {
          id: `appgenShareDialog.copyLinkDisabled.notPublished`,
          defaultMessage: `Publish this site to copy its link`,
          description: `Tooltip explaining why the site share dialog copy link button is disabled`,
        });
      case `visit`:
        return (0, $.jsx)(C, {
          id: `appgenShareDialog.visitDisabled.notPublished`,
          defaultMessage: `Publish this site before visiting it`,
          description: `Tooltip explaining why the site share dialog visit button is disabled`,
        });
    }
  return t
    ? (0, $.jsx)(C, {
        id: `appgenShareDialog.footerActionDisabled.saving`,
        defaultMessage: `Sharing settings are still saving`,
        description: `Tooltip explaining why site share dialog footer actions are disabled while saving`,
      })
    : null;
}
function it(e) {
  return [
    ...(e?.workspace_groups.map((e) => ({ ...e, source: `workspace` })) ?? []),
    ...(e?.tenant_groups.map((e) => ({ ...e, source: `tenant` })) ?? []),
  ];
}
function at(...e) {
  return {
    tenant_groups: ot(e.flatMap((e) => e?.tenant_groups ?? [])),
    workspace_groups: ot(e.flatMap((e) => e?.workspace_groups ?? [])),
  };
}
function ot(e) {
  return Array.from(new Map(e.map((e) => [e.id, e])).values());
}
function st(e, t) {
  return {
    chipLabel: e.name,
    id: `group:${e.source}:${e.id}`,
    label: e.name,
    secondaryLabel: t.formatMessage(
      {
        id: `appgenShareDialog.access.groupSize`,
        defaultMessage: `{count, plural, one {# member} other {# members}}`,
        description: `Member count shown for a group in the site share dialog`,
      },
      { count: e.size },
    ),
    target: { kind: `group`, group: e },
  };
}
function ct(e) {
  let t = Ae(e);
  return {
    chipLabel: t.chipLabel,
    id: `user:${e.account_user_id}`,
    label: t.label,
    secondaryLabel: t.secondaryLabel,
    target: { kind: `user`, user: e },
  };
}
var Z,
  Q,
  $,
  lt,
  ut = e(() => {
    ((Z = d()),
      S(),
      (Q = t(p(), 1)),
      se(),
      D(),
      o(),
      h(),
      r(),
      E(),
      oe(),
      ee(),
      x(),
      ke(),
      Ne(),
      De(),
      Le(),
      Fe(),
      H(),
      l(),
      T(),
      ne(),
      be(),
      L(),
      ue(),
      Ce(),
      z(),
      Ie(),
      O(),
      a(),
      u(),
      R(),
      M(),
      Be(),
      ($ = te()),
      (lt = de({
        admins_only: {
          id: `appgenAccess.state.ownerOnly`,
          defaultMessage: `Just me`,
          description: `Label for a site whose access is limited to its owner`,
        },
        custom: {
          id: `appgenAccess.state.privatelyShared`,
          defaultMessage: `Only those invited`,
          description: `Label for a site shared privately with invited people`,
        },
        public: {
          id: `appgenAccess.state.public`,
          defaultMessage: `Anyone on the Internet`,
          description: `Label for a site shared publicly on the internet`,
        },
        workspace_all: {
          id: `appgenAccess.state.workspaceAll`,
          defaultMessage: `Anyone in this workspace with the link`,
          description: `Label for a site shared with anyone in the workspace`,
        },
      })));
  });
export { Be as i, ut as n, ze as r, Ve as t };
//# sourceMappingURL=appgen-share-dialog-BeUfcVRv.js.map
