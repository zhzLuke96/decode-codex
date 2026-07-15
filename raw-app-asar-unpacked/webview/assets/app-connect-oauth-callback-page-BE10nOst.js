import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Bs as r,
  Dk as i,
  Ek as a,
  Fq as o,
  Hs as s,
  I2 as c,
  JA as l,
  L2 as u,
  Ng as d,
  Ok as f,
  Pg as p,
  Pq as m,
  S0 as h,
  SK as g,
  Tk as _,
  Vs as v,
  _0 as y,
  _Y as b,
  bI as x,
  bK as S,
  cY as C,
  cj as w,
  ij as T,
  jX as E,
  k2 as D,
  mY as O,
  oj as k,
  sY as A,
  vI as j,
  yY as M,
  zs as N,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function P() {
  let e = (0, I.c)(25),
    t = h(A),
    n = M(),
    r = w(),
    o = k(),
    c = s(),
    { getPendingAppConnectForCallbackUrl: l } = v(),
    { markRequiredAppStatus: u, session: d } = p(),
    f = (0, L.useRef)(null),
    y;
  e[0] !== u || e[1] !== d.app || e[2] !== d.kind
    ? ((y = (e) => {
        let { appId: t, status: n } = e;
        d.kind !== `connectAppBeforeInstall` ||
          (t != null && d.app.id !== t) ||
          u({ appId: d.app.id, status: n });
      }),
      (e[0] = u),
      (e[1] = d.app),
      (e[2] = d.kind),
      (e[3] = y))
    : (y = e[3]);
  let S = (0, L.useEffectEvent)(y),
    C;
  e[4] === t
    ? (C = e[5])
    : ((C = (e) => {
        let {
          connectorId: n,
          errorType: r,
          marketplaceAnalytics: a,
          result: o,
        } = e;
        x(t, _, {
          action: i.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
          connectorId: n,
          errorType: r,
          pluginId: a.pluginId,
          remotePluginId: a.remotePluginId,
          result: o,
          source: a.source,
          surface: a.surface,
        });
      }),
      (e[4] = t),
      (e[5] = C));
  let D = (0, L.useEffectEvent)(C),
    O;
  e[6] !== c || e[7] !== n || e[8] !== t
    ? ((O = async (e) => {
        let {
            appId: r,
            appName: i,
            fullRedirectUrl: a,
            shouldShowPendingToast: o,
            shouldShowSuccessToast: s,
          } = e,
          l = F(r);
        o &&
          a != null &&
          a.length > 0 &&
          t.get(g).info(
            (0, R.jsx)(`span`, {
              className: `loading-shimmer-pure-text`,
              children: (0, R.jsx)(b, {
                id: `apps.appConnectOAuthCallbackPage.pending`,
                defaultMessage: `Finishing {connector} setup`,
                description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                values: {
                  connector:
                    i ??
                    n.formatMessage({
                      id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                      defaultMessage: `App`,
                      description: `Fallback app name used in app connect callback pending toasts`,
                    }),
                },
              }),
            }),
            { duration: 0, id: l },
          );
        let u = await c({ fullRedirectUrl: a ?? `` });
        bb33: switch (u.kind) {
          case `missing-callback-data`:
            t.get(g).danger(
              (0, R.jsx)(b, {
                id: `apps.appConnectOAuthCallbackPage.missingData`,
                defaultMessage: `Missing OAuth callback data.`,
                description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
              }),
              { id: l },
            );
            break bb33;
          case `request-failed`: {
            let e =
              u.message ??
              n.formatMessage({
                id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                defaultMessage: `Failed to finish connecting app.`,
                description: `Toast shown when finishing an app connection OAuth callback fails`,
              });
            t.get(g).danger(e, { id: l });
            break bb33;
          }
          case `success`:
            if (!s) break bb33;
            t.get(g).success(
              (0, R.jsx)(b, {
                id: `apps.appConnectOAuthCallbackPage.success`,
                defaultMessage: `{appName} is now connected.`,
                description: `Toast shown when an app connection OAuth callback succeeds`,
                values: { appName: u.appName },
              }),
              { id: l },
            );
        }
        return u;
      }),
      (e[6] = c),
      (e[7] = n),
      (e[8] = t),
      (e[9] = O))
    : (O = e[9]);
  let j = (0, L.useEffectEvent)(O),
    P;
  e[10] !== l ||
  e[11] !== o.key ||
  e[12] !== o.state ||
  e[13] !== D ||
  e[14] !== S ||
  e[15] !== r ||
  e[16] !== j
    ? ((P = () => {
        if (f.current === o.key) return;
        f.current = o.key;
        let e = N(o.state),
          t = e?.fullRedirectUrl?.trim(),
          n = t != null && t.length > 0 ? l(t) : null,
          i = n?.returnTo ?? e?.returnTo ?? `/skills`,
          s = n?.resumeTarget.kind === `plugin-install`,
          c = n?.resumeTarget.kind === `connector-auth-elicitation`;
        j({
          appId: n?.appId,
          appName: n?.appName,
          fullRedirectUrl: t ?? null,
          shouldShowPendingToast: !1,
          shouldShowSuccessToast: !s && !c,
        }).then((e) => {
          let t = n?.marketplaceAnalytics;
          if (
            (t != null &&
              D({
                connectorId: e.kind === `success` ? e.appId : n?.appId,
                errorType:
                  e.kind === `request-failed`
                    ? `oauth_callback_failed`
                    : void 0,
                marketplaceAnalytics: t,
                result:
                  e.kind === `success`
                    ? a.CODEX_PLUGIN_ACTION_RESULT_SUCCESS
                    : a.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
              }),
            e.kind === `success`
              ? S({ appId: e.appId, status: `connected` })
              : (s || n == null) && S({ appId: n?.appId, status: `pending` }),
            T(E, i) != null)
          ) {
            r(i, { replace: !0 });
            return;
          }
          switch (n?.resumeTarget.kind) {
            case `plugin-install`:
              r(i, {
                replace: !0,
                state: { initialHostId: n.hostId, initialTab: `plugins` },
              });
              return;
            case `connector-auth-elicitation`:
              r(i, { replace: !0 });
              return;
            case `apps-tab`:
            case void 0:
              r(i, {
                replace: !0,
                state: {
                  connectAppId: n?.appId,
                  initialHostId: n?.hostId,
                  initialTab: `apps`,
                },
              });
              return;
          }
        });
      }),
      (e[10] = l),
      (e[11] = o.key),
      (e[12] = o.state),
      (e[13] = D),
      (e[14] = S),
      (e[15] = r),
      (e[16] = j),
      (e[17] = P))
    : (P = e[17]);
  let z;
  (e[18] !== l ||
  e[19] !== n ||
  e[20] !== o.key ||
  e[21] !== o.state ||
  e[22] !== r
    ? ((z = [l, n, o.key, o.state, r]),
      (e[18] = l),
      (e[19] = n),
      (e[20] = o.key),
      (e[21] = o.state),
      (e[22] = r),
      (e[23] = z))
    : (z = e[23]),
    (0, L.useEffect)(P, z));
  let B;
  return (
    e[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((B = (0, R.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, R.jsx)(m, { className: `icon-sm` }),
        })),
        (e[24] = B))
      : (B = e[24]),
    B
  );
}
function F(e) {
  return e == null
    ? `app-connect-oauth-callback`
    : `app-connect-oauth-callback-${e}`;
}
var I, L, R;
e(() => {
  ((I = c()),
    f(),
    y(),
    n(),
    (L = t(u(), 1)),
    O(),
    l(),
    r(),
    o(),
    S(),
    d(),
    j(),
    C(),
    (R = D()));
})();
export { P as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page-BE10nOst.js.map
