import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  CD as t,
  DD as n,
  MU as r,
  NU as i,
  SD as a,
  SK as o,
  SV as s,
  TD as c,
  bK as l,
  wV as u,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  In as d,
  Ln as f,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
var p,
  m = e(() => {
    p = `client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR`;
  });
async function h(e, t, r, { shouldApplyStatus: a = () => !0 } = {}) {
  let o = e.get(c, t),
    s = await i(`set-remote-control-enabled-for-host`, {
      enabled: r,
      hostId: t,
    }),
    l = e.get(c, t),
    u = l !== o && (l?.status === `connected` || l?.status === `errored`);
  return (a() && (!r || !u) && n(e, t, s), s);
}
var g = e(() => {
  (t(), r());
});
async function _(e, t, { force: n = !1 } = {}) {
  if (((y = t), x?.enabled === t)) return x.promise;
  if (!n && v === t) return null;
  let r = ++b,
    i = h(e, u, t, { shouldApplyStatus: () => r === b });
  x = { enabled: t, promise: i };
  try {
    let n = await i;
    return r === b
      ? ((v = t), n)
      : (y != null && y !== t && (await _(e, y, { force: !0 })), n);
  } catch (e) {
    throw (r === b && v === t && (v = void 0), e);
  } finally {
    x?.promise === i && (x = void 0);
  }
}
var v,
  y,
  b,
  x,
  S = e(() => {
    (g(), s(), (b = 0));
  });
function C(e) {
  return e instanceof Error && e.message.includes(E);
}
function w(e) {
  return C(e) || e instanceof a;
}
function T(e, t) {
  return t instanceof a
    ? (e.get(o).danger(
        e.get(f).formatMessage({
          id: `settings.remoteConnections.remoteControlServerAlreadyOnline`,
          defaultMessage: `Could not enable remote control. Please ensure only one instance of ChatGPT is running.`,
          description: `Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.`,
        }),
        { id: `remote-control-server-already-online` },
      ),
      !0)
    : C(t)
      ? (e.get(o).danger(
          e.get(f).formatMessage({
            id: `settings.remoteConnections.remoteControlTokenInvalidated`,
            defaultMessage: `Your ChatGPT session on this device has expired. Sign in again and try again.`,
            description: `Error shown when enabling remote control fails because the device's Codex authentication token was invalidated`,
          }),
          { id: `remote-control-token-invalidated` },
        ),
        !0)
      : !1;
}
var E,
  D = e(() => {
    (t(), l(), d(), (E = `token_invalidated`));
  });
export {
  _ as a,
  p as c,
  S as i,
  m as l,
  w as n,
  g as o,
  T as r,
  h as s,
  D as t,
};
//# sourceMappingURL=app-initial~app-main~business-checkout-switch-workspace-dialog~login-route~codex-mobile-pag~jcuacd6x-C293EQe4.js.map
