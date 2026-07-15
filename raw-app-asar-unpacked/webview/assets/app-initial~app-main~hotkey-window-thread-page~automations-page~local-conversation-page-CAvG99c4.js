import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as t,
  GK as n,
  KK as r,
  NT as i,
  _0 as a,
  cY as o,
  dT as s,
  jT as c,
  sY as l,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function u(e) {
  return e?.approvalPolicy == null ||
    e.approvalsReviewer == null ||
    e.sandboxPolicy == null
    ? null
    : {
        ...(`activePermissionProfile` in e &&
        e.activePermissionProfile !== void 0
          ? { activePermissionProfile: e.activePermissionProfile }
          : `permissions` in e && e.permissions != null
            ? { activePermissionProfile: { id: e.permissions, extends: null } }
            : {}),
        ...(`runtimeWorkspaceRoots` in e && e.runtimeWorkspaceRoots != null
          ? { runtimeWorkspaceRoots: e.runtimeWorkspaceRoots }
          : {}),
        approvalPolicy: e.approvalPolicy,
        approvalsReviewer: e.approvalsReviewer,
        sandboxPolicy: e.sandboxPolicy,
      };
}
function d(e, t) {
  return (
    u(t) ??
    (e?.turnId == null || e.params.collaborationMode == null
      ? null
      : u(e.params))
  );
}
function f(e, t, n) {
  return d(e, t) ?? n ?? null;
}
function p(e, t, n) {
  return n == null || JSON.stringify(e[t]) === JSON.stringify(n)
    ? e
    : { ...e, [t]: n };
}
var m,
  h,
  g = e(() => {
    (a(),
      s(),
      o(),
      n(),
      (m = r(`heartbeat-thread-permissions-by-id`, {})),
      (h = t(l, (e, { get: t }) => {
        let n = d(t(i, e), t(c, e));
        return n == null ? null : JSON.stringify(n);
      })));
  });
export { h as a, m as i, d as n, g as o, f as r, p as t };
//# sourceMappingURL=app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-CAvG99c4.js.map
