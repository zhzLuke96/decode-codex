import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  GK as t,
  KK as n,
  PB as r,
  _0 as i,
  _2 as a,
  bI as o,
  c2 as s,
  cB as c,
  cY as l,
  d2 as u,
  lB as d,
  mY as ee,
  oB as f,
  ov as p,
  pY as te,
  s2 as ne,
  sB as m,
  sY as h,
  sv as re,
  vI as g,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Xl as _,
  Yl as ie,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  c as v,
  p as y,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~pcx43lpb-BOlhhGyv.js";
function b(e) {
  return e.some((e) => D.has(e)) ? `coding` : `non_coding`;
}
function x({ backendRole: e, localRoles: t }) {
  return t.length > 0 ? b(t) : e == null ? null : b([e]);
}
function S({ roleSelectionSkipped: e, roles: t }) {
  return e
    ? null
    : (t.find((e) => e === `engineering` || e === `data_science`) ??
        t.find((e) => e !== `default` && e !== `something_else`) ??
        (t.includes(`something_else`) ? `something_else` : null));
}
function ae({ backendRole: e, localRoles: t }) {
  let n =
    (e === `something_else` ? null : e) ??
    S({ roleSelectionSkipped: !1, roles: t });
  return n === `something_else` ? null : n;
}
function C(e) {
  return e.some((e) => E.has(e));
}
function w(e = Math.random) {
  let t = O.filter((e) => e !== `something_else`);
  for (let n = t.length - 1; n > 0; --n) {
    let r = Math.floor(e() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return [...t, `something_else`];
}
function T(e, t) {
  return { ...e, roles: t, workMode: b(t) };
}
var E,
  D,
  O,
  k,
  A,
  j = e(() => {
    (u(),
      ee(),
      y(),
      (E = new Set([`engineering`, `data_science`])),
      (D = new Set([`default`, ...E])),
      (O = [
        `engineering`,
        `data_science`,
        `product_management`,
        `design`,
        `marketing`,
        `sales`,
        `finance`,
        `operations`,
        `people_hr`,
        `legal`,
        `student`,
        `something_else`,
      ]),
      (k = te({
        engineering: {
          id: `electron.onboarding.welcomeV2.role.engineering`,
          defaultMessage: `Engineering`,
          description: `Welcome v2 role option for engineering users`,
        },
        product_management: {
          id: `electron.onboarding.welcomeV2.role.product`,
          defaultMessage: `Product`,
          description: `Welcome v2 role option for product management users`,
        },
        data_science: {
          id: `electron.onboarding.welcomeV2.role.dataScience`,
          defaultMessage: `Data science`,
          description: `Welcome v2 role option for data science users`,
        },
        design: {
          id: `electron.onboarding.welcomeV2.role.design`,
          defaultMessage: `Design`,
          description: `Welcome v2 role option for design users`,
        },
        finance: {
          id: `electron.onboarding.welcomeV2.role.finance`,
          defaultMessage: `Finance`,
          description: `Welcome v2 role option for finance users`,
        },
        marketing: {
          id: `electron.onboarding.welcomeV2.role.marketing`,
          defaultMessage: `Marketing`,
          description: `Welcome v2 role option for marketing users`,
        },
        sales: {
          id: `electron.onboarding.welcomeV2.role.sales`,
          defaultMessage: `Sales`,
          description: `Welcome v2 role option for sales users`,
        },
        operations: {
          id: `electron.onboarding.welcomeV2.role.operations`,
          defaultMessage: `Operations`,
          description: `Welcome v2 role option for operations users`,
        },
        people_hr: {
          id: `electron.onboarding.welcomeV2.role.peopleHr`,
          defaultMessage: `People & HR`,
          description: `Welcome v2 role option for people and HR users`,
        },
        legal: {
          id: `electron.onboarding.welcomeV2.role.legal`,
          defaultMessage: `Legal`,
          description: `Welcome v2 role option for legal users`,
        },
        student: {
          id: `electron.onboarding.welcomeV2.role.student`,
          defaultMessage: `Student`,
          description: `Welcome v2 role option for student users`,
        },
        something_else: {
          id: `electron.onboarding.welcomeV2.role.somethingElse`,
          defaultMessage: `Something else`,
          description: `Welcome v2 role option for users who don't fit into the other categories`,
        },
      })),
      (A = a(null, (e, t, n) => {
        t(v, T(e(v), n));
      })));
  });
function oe({
  canEnableNotifications: e,
  hideGoogleWorkspaceItems: t,
  mailProvider: n,
  plan: r,
  roles: i,
}) {
  let a = C(i),
    o = ie(n, r) === `google` && (t || r === p.FREE || r === p.GO),
    s = (a ? P : F).filter((t) =>
      !e && t === `enable_notifications`
        ? !1
        : !o || (t !== `summarize_inbox` && t !== `review_latest_plans`),
    );
  return !a && o ? [...s, `summarize_current_priorities`] : s;
}
function M(e) {
  return N.some((t) => t === e);
}
var N,
  P,
  F,
  I = e(() => {
    (_(),
      j(),
      re(),
      (N = [
        `enable_notifications`,
        `create_automation`,
        `summarize_inbox`,
        `triage_github_prs`,
        `catch_up_updates_and_blockers`,
        `catch_up_linear`,
        `review_latest_plans`,
        `summarize_current_priorities`,
      ]),
      (P = [
        `enable_notifications`,
        `create_automation`,
        `triage_github_prs`,
        `catch_up_linear`,
        `review_latest_plans`,
      ]),
      (F = [
        `enable_notifications`,
        `create_automation`,
        `summarize_inbox`,
        `catch_up_updates_and_blockers`,
        `review_latest_plans`,
      ]));
  });
function L(e) {
  o(e, m, {
    action: f.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_COLLAPSE_CLICKED,
  });
}
function R(e) {
  o(e, m, { action: f.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_HIDE_CLICKED });
}
function z(e, t) {
  H(e, t, c.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_CLICKED);
}
function B(e, t) {
  H(e, t, c.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_COMPLETED);
}
function V(e, t, n, r) {
  o(e, d, {
    action:
      c.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_PROMPT_TURN_STARTED,
    itemId: t,
    threadId: n,
    turnId: r,
  });
}
function H(e, t, n) {
  o(e, d, { action: n, itemId: t });
}
var U = e(() => {
    (r(), g());
  }),
  W,
  G = e(() => {
    W = `sidebar-onboarding-checklist-state-by-account-id-v2`;
  });
function K(e, t) {
  let n = e?.[t];
  return n?.version === 1 ? n : void 0;
}
function se(e, t, n) {
  if (n?.mode !== `disabled`)
    return n?.mode === `enabled` ? n.accountState : K(e, t);
}
function ce(
  e,
  {
    accountId: t,
    canEnableNotifications: n,
    completedConversationalOnboardingTaskId: r,
    hasCompletedClaudeImport: i,
    hideGoogleWorkspaceItems: a,
    mailProvider: o,
    plan: s,
    roles: c,
  },
) {
  (J(e, t),
    e.set(Z, (e) => ({
      ...(e ?? X),
      [t]: Y({
        canEnableNotifications: n,
        completedConversationalOnboardingTaskId: r,
        hasCompletedClaudeImport: i,
        hideGoogleWorkspaceItems: a,
        mailProvider: o,
        plan: s,
        roles: c,
      }),
    })));
}
function le(e, t) {
  (J(e, t),
    e.set(Z, (e) => {
      let n = e ?? X;
      if (n[t] == null) return n;
      let { [t]: r, ...i } = n;
      return i;
    }));
}
function ue(e, t, n) {
  e.set(Z, (e) => {
    let r = e ?? X,
      i = K(r, t);
    return i == null ? r : { ...r, [t]: { ...i, collapsed: n } };
  });
}
function de(e, t) {
  (J(e, t),
    e.set(Z, (e) => {
      let n = e ?? X,
        r = K(n, t);
      return r == null ? n : { ...n, [t]: { ...r, dismissed: !0 } };
    }));
}
function fe(e) {
  for (let t of Object.keys(e.get(Z) ?? X)) J(e, t);
  e.set(Z, (e) => {
    let t = {};
    for (let [n, r] of Object.entries(e ?? X))
      r.version === 1 &&
        (t[n] = {
          version: 1,
          collapsed: !1,
          items: r.items.map((e) => ({
            ...e,
            completed: M(e.id) ? !1 : e.completed,
          })),
        });
    return t;
  });
}
function pe(e, t) {
  return e?.version === 1 && e.items.find((e) => e.id === t)?.completed === !0;
}
function q(e, t) {
  let n = K(e.get(Z), t),
    r = n?.items.find((e) => e.id === `enable_notifications`);
  n?.notificationPermissionItemIncluded !== !0 ||
    r == null ||
    r.completed ||
    (e.get(Q, t) ?? e.set(Q, t, Date.now()));
}
function me(e, t, n) {
  e.set(Z, (r) => {
    let i = r ?? X,
      a = K(i, t);
    if (
      a == null ||
      a.notificationPermissionItemIncluded != null ||
      !a.items.some((e) => e.id === `enable_notifications`)
    )
      return i;
    let o = a.items.some((e) => e.id === `enable_notifications` && e.completed),
      s = e.get(Q, t) != null;
    if (n == null && !o && !s) return i;
    let c = o || s || n === `disabled` || n === `not-determined`;
    return { ...i, [t]: { ...a, notificationPermissionItemIncluded: c } };
  });
}
function he(e, t, n) {
  let r = !1;
  (n === `enable_notifications` && J(e, t),
    e.set(Z, (e) => {
      let i = e ?? X,
        a = K(i, t);
      if (a == null) return i;
      let o = a.items.find((e) => e.id === n);
      if (o == null || o.completed) return i;
      r = !0;
      let s = a.items.map((e) => (e.id === n ? { ...e, completed: !0 } : e));
      return { ...i, [t]: { ...a, items: s } };
    }),
    r && B(e, n));
}
function J(e, t) {
  e.set(Q, t, null);
}
function Y({
  canEnableNotifications: e,
  completedConversationalOnboardingTaskId: t,
  hasCompletedClaudeImport: n,
  hideGoogleWorkspaceItems: r,
  mailProvider: i,
  plan: a,
  roles: o,
}) {
  return {
    version: 1,
    collapsed: !1,
    items: [
      ...(t == null ? [] : [{ id: t, completed: !0 }]),
      ...(n ? [{ id: `claude_import`, completed: !0 }] : []),
      ...oe({
        canEnableNotifications: e,
        hideGoogleWorkspaceItems: r,
        mailProvider: i,
        plan: a,
        roles: o,
      }).map((e) => ({ id: e, completed: !1 })),
    ],
  };
}
var X,
  Z,
  Q,
  $,
  ge = e(() => {
    (i(),
      l(),
      t(),
      I(),
      U(),
      G(),
      (X = {}),
      (Z = n(W, X)),
      (Q = s(h, (e) => null)),
      ($ = ne(h, null)));
  });
export {
  b as A,
  V as C,
  O as D,
  k as E,
  S as M,
  w as N,
  A as O,
  j as P,
  z as S,
  M as T,
  W as _,
  se as a,
  L as b,
  me as c,
  fe as d,
  ue as f,
  q as g,
  Q as h,
  K as i,
  x as j,
  ae as k,
  pe as l,
  Z as m,
  Y as n,
  ge as o,
  $ as p,
  de as r,
  ce as s,
  he as t,
  le as u,
  G as v,
  I as w,
  R as x,
  U as y,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~eq487jm7-CqnNMXdF.js.map
