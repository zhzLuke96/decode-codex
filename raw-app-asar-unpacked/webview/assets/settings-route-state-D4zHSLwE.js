import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  Dg as n,
  K1 as r,
  kg as i,
  o0 as a,
  r0 as o,
  u0 as s,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function c(e) {
  return e.stage === `beta`
    ? e.name !== `memories` &&
        e.name !== `multi_agent` &&
        e.name !== `plugins` &&
        e.name !== `plugin` &&
        e.name !== `remote_control` &&
        !e.name.startsWith(`realtime_`) &&
        e.name !== `chronicle` &&
        e.name !== `workspace_dependencies`
    : !1;
}
var l = e(() => {
  (t(), i(), n());
});
function u(e) {
  let t = f.safeParse(e);
  return t.success && t.data.returnToPreviousHistoryEntry === !0;
}
function d(e) {
  let t = f.safeParse(e);
  return !t.success || !Object.hasOwn(t.data, `workspaceRoot`)
    ? { hasValue: !1, workspaceRoot: null }
    : { hasValue: !0, workspaceRoot: t.data.workspaceRoot ?? null };
}
var f,
  p = e(() => {
    (r(),
      (f = a({
        returnToPreviousHistoryEntry: o(!0).optional(),
        workspaceRoot: s().min(1).nullable().optional(),
      }).passthrough()));
  });
export { c as a, l as i, d as n, p as r, u as t };
//# sourceMappingURL=settings-route-state-D4zHSLwE.js.map
