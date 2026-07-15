import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  JU as n,
  KU as r,
  iW as i,
  oW as a,
  w1 as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s({
  agentMode: e,
  permissionProfileId: t,
  shouldSendPermissionOverrides: n,
  workspaceRoots: a,
  config: s,
  configOverrides: c,
  input: l,
  commentAttachments: u,
  collaborationMode: d,
  serviceTier: f,
  serviceName: p,
  cwd: m,
  fileAttachments: h,
  addedFiles: g,
  memoryPreferences: _,
  mode: v,
  threadSource: y,
  threadStartKind: b,
  workspaceKind: x = `project`,
  projectlessOutputDirectory: S,
  projectAssignment: C,
  baseInstructions: w,
  additionalDeveloperInstructions: T,
}) {
  if (x === `projectless` && S == null)
    throw Error(`Projectless conversations require an output directory`);
  let E = r([...h, ...g]),
    D = n === !1 ? null : o(e, a, s);
  return (
    D != null &&
      t != null &&
      ((D.activePermissionProfile = { id: t, extends: null }),
      (D.runtimeWorkspaceRoots = a)),
    {
      input: l,
      commentAttachments: u,
      workspaceRoots: a,
      collaborationMode: d,
      multiAgentMode: i,
      serviceTier: f,
      ...(p === void 0 ? {} : { serviceName: p }),
      ...(D == null
        ? { useAppServerPermissionDefault: !0 }
        : { permissions: D, approvalsReviewer: D.approvalsReviewer }),
      cwd: m,
      attachments: E,
      workspaceKind: x,
      projectAssignment: C,
      mode: v,
      threadSource: y,
      threadStartKind: b,
      config: c,
      ...(x === `projectless` ? { projectlessOutputDirectory: S } : {}),
      memoryPreferences: _,
      baseInstructions: w,
      additionalDeveloperInstructions: T,
    }
  );
}
var c = e(() => {
  (t(), a(), n());
});
export { c as n, s as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~eb1ufobz-tjwtFUHP.js.map
