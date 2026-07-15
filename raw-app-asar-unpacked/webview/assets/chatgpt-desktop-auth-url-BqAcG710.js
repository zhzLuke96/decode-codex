import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  MU as t,
  NU as n,
  SV as r,
  _G as i,
  wV as a,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  c as o,
  l as s,
} from "./app-initial~app-main~business-checkout-switch-workspace-dialog~login-route~codex-mobile-pag~jcuacd6x-C293EQe4.js";
async function c({
  appBrand: e,
  hostId: t = a,
  signal: r,
  useHostedLoginSuccessPage: i,
  useStreamlinedLogin: o,
}) {
  let s = u(r);
  return t === `local`
    ? n(`login-with-chatgpt`, {
        abortController: s,
        ...(i && e != null ? { appBrand: e } : {}),
        useHostedLoginSuccessPage: i,
        useStreamlinedLogin: o,
      })
    : n(`login-with-chatgpt-for-host`, {
        abortController: s,
        hostId: t,
        ...(i && e != null ? { appBrand: e } : {}),
        useHostedLoginSuccessPage: i,
        useStreamlinedLogin: o,
      });
}
function l({ signal: e } = {}) {
  return n(`login-with-chatgpt-device-code`, { abortController: u(e) });
}
function u(e) {
  let t = new AbortController();
  return e == null
    ? t
    : e.aborted
      ? (t.abort(), t)
      : (e.addEventListener(`abort`, () => t.abort(), { once: !0 }), t);
}
var d = e(() => {
  (t(), r());
});
function f({
  allowedWorkspaceId: e,
  authUrl: t,
  currentWorkspaceId: n,
  loginHint: r,
  sourceSurfaceStableId: i = m.StableID.get(o),
  includeCodexOriginStableId: a = !1,
  useDesktopAuth: s,
  useStreamlinedLoginUx: c,
}) {
  if (!e && !n && !r && !i && !s && !c) return t;
  try {
    let o = new URL(t);
    if (o.pathname === h) {
      let t = o.searchParams.get(`authorize_url`);
      if ((e || n || r || i) && t) {
        let s = new URL(t);
        (p(s, e, n, r, i, a),
          o.searchParams.set(`authorize_url`, s.toString()));
      }
      return (c && o.searchParams.set(v, `true`), o.toString());
    }
    if (
      ((e || n || r || i) && p(o, e, n, r, i, a),
      c && o.searchParams.set(v, `true`),
      !s)
    )
      return o.toString();
    let l = new URL(g);
    return (
      l.searchParams.set(`authorize_url`, o.toString()),
      c && l.searchParams.set(v, `true`),
      l.toString()
    );
  } catch {
    return t;
  }
}
function p(e, t, n, r, i, a) {
  (t && e.searchParams.set(y, t),
    n && e.searchParams.set(b, n),
    r && e.searchParams.set(x, r),
    i && (e.searchParams.set(S, i), a && e.searchParams.set(_, i)));
}
var m,
  h,
  g,
  _,
  v,
  y,
  b,
  x,
  S,
  C = e(() => {
    ((m = i()),
      s(),
      (h = `/codex/desktop-auth`),
      (g = `https://chatgpt.com${h}`),
      (_ = `codex_origin_stable_id`),
      (v = `codex_streamlined_login`),
      (y = `allowed_workspace_id`),
      (b = `current_workspace_id`),
      (x = `login_hint`),
      (S = `source_surface_stable_id`));
  });
export { c as a, l as i, C as n, d as r, f as t };
//# sourceMappingURL=chatgpt-desktop-auth-url-BqAcG710.js.map
