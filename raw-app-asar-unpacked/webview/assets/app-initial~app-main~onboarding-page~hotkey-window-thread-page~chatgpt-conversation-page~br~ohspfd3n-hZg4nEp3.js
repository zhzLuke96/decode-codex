import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $k as t,
  Jk as n,
  Xk as r,
  Yk as i,
  Zk as a,
  bI as o,
  qk as s,
  vI as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function l(e, t) {
  o(e, i, {
    stepType: r.CODEX_BROWSER_PROFILE_IMPORT_LIFECYCLE_STEP_TYPE_DIALOG_OPENED,
    entryPoint: p(t),
  });
}
function u(e, t, n) {
  o(e, i, {
    stepType:
      r.CODEX_BROWSER_PROFILE_IMPORT_LIFECYCLE_STEP_TYPE_ATTEMPT_STARTED,
    ...f(t, n),
  });
}
function d(e, t, n, a) {
  let s = n.importCookies !== !1,
    c = n.importPasswords !== !1;
  o(e, i, {
    stepType:
      r.CODEX_BROWSER_PROFILE_IMPORT_LIFECYCLE_STEP_TYPE_ATTEMPT_FINISHED,
    ...f(t, n),
    cookieOutcome: s ? h(a?.cookies == null ? void 0 : [a.cookies]) : void 0,
    passwordOutcome: c
      ? h(
          a?.passwords == null
            ? void 0
            : [
                a.passwords,
                ...(a.passwords.profile == null ? [] : [a.passwords.profile]),
                ...(a.passwords.account == null ? [] : [a.passwords.account]),
              ],
        )
      : void 0,
  });
}
function f(e, t) {
  return {
    entryPoint: p(e),
    source: m(t.source),
    cookiesRequested: t.importCookies !== !1,
    passwordsRequested: t.importPasswords !== !1,
  };
}
function p(e) {
  switch (e) {
    case `browser-settings-page`:
      return n.CODEX_BROWSER_PROFILE_IMPORT_ENTRY_POINT_BROWSER_SETTINGS_PAGE;
    case `in-app-browser-import-banner`:
      return n.CODEX_BROWSER_PROFILE_IMPORT_ENTRY_POINT_IN_APP_BROWSER_IMPORT_BANNER;
    case `in-app-browser-overflow-menu`:
      return n.CODEX_BROWSER_PROFILE_IMPORT_ENTRY_POINT_IN_APP_BROWSER_OVERFLOW_MENU;
  }
}
function m(e) {
  switch (e) {
    case `atlas`:
      return a.CODEX_BROWSER_PROFILE_IMPORT_SOURCE_ATLAS;
    case `chrome`:
      return a.CODEX_BROWSER_PROFILE_IMPORT_SOURCE_CHROME;
  }
}
function h(e) {
  if (e == null) return s.CODEX_BROWSER_PROFILE_IMPORT_DATA_OUTCOME_FAILED;
  let t = e.some(g),
    n = e.some(_);
  if (t)
    return n
      ? s.CODEX_BROWSER_PROFILE_IMPORT_DATA_OUTCOME_PARTIAL_SUCCESS
      : s.CODEX_BROWSER_PROFILE_IMPORT_DATA_OUTCOME_FAILED;
  let r = e.flatMap(({ imported: e }) => (e == null ? [] : [e]));
  return r.length > 0 && r.every((e) => e === 0)
    ? s.CODEX_BROWSER_PROFILE_IMPORT_DATA_OUTCOME_NO_NEW_DATA
    : n
      ? s.CODEX_BROWSER_PROFILE_IMPORT_DATA_OUTCOME_SUCCESS
      : void 0;
}
function g(e) {
  return (
    (e.failed ?? 0) > 0 ||
    e.error != null ||
    (e.status != null && e.status !== `success`)
  );
}
function _(e) {
  return (
    (e.imported ?? 0) > 0 ||
    e.status === `success` ||
    e.status === `partial-success`
  );
}
var v = e(() => {
  (t(), c());
});
export { l as i, d as n, u as r, v as t };
//# sourceMappingURL=app-initial~app-main~onboarding-page~hotkey-window-thread-page~chatgpt-conversation-page~br~ohspfd3n-hZg4nEp3.js.map
