import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $J as t,
  $g as n,
  CJ as r,
  Cw as i,
  GK as a,
  KK as o,
  Q0 as s,
  Qg as c,
  _0 as l,
  _2 as u,
  cY as d,
  d2 as f,
  eY as p,
  kw as m,
  sY as h,
  wJ as g,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var _,
  v,
  y,
  b = e(() => {
    ((_ = `last_completed_onboarding`),
      (v = `electron:onboarding-projectless-completed`),
      (y = `electron:onboarding-conversational-completed-by-account-id`));
  });
function x({ hideFirstNewThreadOnboardingPromos: e, pathname: t }) {
  return e && t === `/`;
}
function S({
  projectlessOnboardingCompleted: e,
  workspaceRootsCount: t,
  workspaceRootsIsLoading: n,
}) {
  return e == null ? null : e ? !0 : n ? null : t > 0;
}
function C(e) {
  return e != null && e * 1e3 < I;
}
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (f(),
      l(),
      n(),
      d(),
      i(),
      r(),
      p(),
      a(),
      b(),
      (w = g(`electron:onboarding-override`, `auto`)),
      (T = g(`electron:onboarding-welcome-pending`, !1)),
      (E = g(v, !1)),
      (D = o(v, !1)),
      (O = s(h, ({ get: e }) => {
        let t = e(D),
          n = e(m);
        return S({
          projectlessOnboardingCompleted: t,
          workspaceRootsCount: n.data?.roots.length ?? 0,
          workspaceRootsIsLoading: n.data == null && n.isLoading,
        });
      })),
      (k = g(`electron:onboarding-hide-first-new-thread-promos`, !1)),
      (A = o(`electron:onboarding-mail-provider-debug-override`, null)),
      (j = o(`electron:onboarding-hide-google-tiles-debug-override`, !1)),
      (M = g(_, null)),
      (N = u(
        (e) => e(M) ?? t(`last_completed_onboarding`, null),
        (e, t, n) => {
          (n != null && c(), t(M, n));
        },
      )),
      (P = g(`electron:onboarding-primary-runtime-install-requested`, !1)),
      (F = g(`electron:onboarding-primary-runtime-install-ready`, !1)),
      (I = new Date(2026, 3, 30).getTime()),
      (L = g(`electron:onboarding-workspace-experiment-assignment`, null)),
      (R = g(`electron:onboarding-workspace-autolaunch-applied`, !1)),
      (z = g(`electron:onboarding-welcome-v2-role-state`, {
        roles: [],
        personalizedSuggestionsEnabled: !0,
        workMode: null,
      })));
  });
export {
  y as _,
  F as a,
  b,
  z as c,
  O as d,
  j as f,
  C as g,
  x as h,
  T as i,
  R as l,
  A as m,
  N as n,
  P as o,
  B as p,
  w as r,
  E as s,
  k as t,
  L as u,
  _ as v,
  v as y,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~pcx43lpb-BOlhhGyv.js.map
