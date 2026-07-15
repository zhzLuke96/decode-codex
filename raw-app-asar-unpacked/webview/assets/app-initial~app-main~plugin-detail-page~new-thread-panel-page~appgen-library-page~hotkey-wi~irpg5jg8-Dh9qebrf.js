import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $h as n,
  AV as r,
  AY as i,
  Am as a,
  Aw as o,
  Bs as s,
  CR as c,
  Dk as l,
  Ek as u,
  HR as d,
  I2 as f,
  JA as p,
  Jh as m,
  L2 as h,
  MR as ee,
  MU as g,
  Mq as _,
  NU as v,
  Ng as te,
  Nq as y,
  O2 as ne,
  Ok as re,
  PB as ie,
  Pg as ae,
  Qh as oe,
  Qs as se,
  S as ce,
  S0 as le,
  SK as b,
  SR as x,
  UR as S,
  Uh as C,
  VR as ue,
  VW as de,
  Vs as fe,
  WW as pe,
  Wh as me,
  Xo as he,
  YN as w,
  Yo as ge,
  Zh as _e,
  Zo as ve,
  Zs as ye,
  _0 as be,
  _D as xe,
  _Y as T,
  _g as Se,
  _s as Ce,
  a$ as we,
  aG as Te,
  aJ as Ee,
  aS as De,
  b as Oe,
  bD as ke,
  bI as E,
  bJ as D,
  bK as O,
  bs as k,
  cY as Ae,
  cf as je,
  dJ as A,
  df as Me,
  ds as Ne,
  eP as Pe,
  eg as Fe,
  fJ as Ie,
  fN as Le,
  ff as Re,
  fg as ze,
  gg as j,
  gs as Be,
  hh as M,
  hw as Ve,
  i$ as He,
  iJ as N,
  is as P,
  iw as F,
  jR as Ue,
  jw as We,
  k2 as Ge,
  kV as I,
  km as Ke,
  lf as L,
  ls as qe,
  mD as Je,
  mN as Ye,
  mY as R,
  nJ as z,
  ns as Xe,
  oS as Ze,
  oj as Qe,
  pN as $e,
  pg as et,
  ps as tt,
  r$ as nt,
  rG as B,
  rJ as V,
  rs as H,
  sY as U,
  sf as W,
  tJ as G,
  uf as K,
  us as rt,
  vI as it,
  vg as at,
  vh as ot,
  x as st,
  x0 as ct,
  x2 as lt,
  xD as ut,
  y2 as dt,
  yJ as ft,
  yY as pt,
  yg as mt,
  ys as ht,
  zZ as gt,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Sr as _t,
  xr as vt,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  d as q,
  u as yt,
} from "./app-initial~app-main~appgen-settings-page~plugin-detail-page~new-thread-panel-page~onboardi~lxr449xn-CwhAsMMf.js";
import {
  S as bt,
  b as xt,
  x as St,
} from "./app-initial~app-main~plugin-detail-page~new-thread-panel-page~appgen-library-page~hotkey-wi~hniebsu0-DMj-xouD.js";
async function Ct({ hostId: e, queryClient: t, refreshAppsList: n }) {
  let r = t.getQueryData([`apps`, `list`, e]),
    i = await n();
  return wt({ previousApps: r, nextApps: i })
    ? (await Promise.all(
        Et.map((t) =>
          G(`ambient-suggestions-refresh`, {
            params: {
              domain: t,
              hostId: e,
              projectRoot: gt(`~`),
              mode: `first-plugin-connect`,
            },
          }),
        ),
      ),
      await Promise.all([
        t.invalidateQueries({ queryKey: z(`ambient-suggestions`) }),
        t.invalidateQueries({ queryKey: z(`ambient-suggestions-refresh`) }),
      ]),
      i)
    : i;
}
function wt({ previousApps: e, nextApps: t }) {
  return e != null && !e.some(Tt) && t.some(Tt);
}
function Tt(e) {
  return e.isAccessible && e.isEnabled;
}
var Et,
  J = e(() => {
    (i(), Ee(), (Et = [null, `science`]));
  });
async function Dt(e) {
  return G(`computer-use-app-approval-remove`, {
    params: { bundleIdentifier: e },
  });
}
async function Ot(e) {
  return (await G(`computer-use-sound-mode-write`, { params: { value: e } }))
    .value;
}
async function kt(e) {
  return (
    await G(`computer-use-background-auth-write`, { params: { enabled: e } })
  ).enabled;
}
var At,
  Y,
  jt,
  Mt,
  Nt = e(() => {
    (Ae(),
      Ie(),
      Ee(),
      (At = N(U, `computer-use-app-approvals-visibility`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: A.FIVE_SECONDS,
      })),
      (Y = N(U, `computer-use-app-approvals-read`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: A.ONE_MINUTE,
      })),
      (jt = N(U, `computer-use-sound-mode-read`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        select: ({ value: e }) => e,
        staleTime: A.FIVE_SECONDS,
      })),
      (Mt = N(U, `computer-use-background-auth-read`, {
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: A.FIVE_SECONDS,
      })),
      V(U, `chrome-extension-installed-read`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { extensionId: e },
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        staleTime: A.FIVE_SECONDS,
      })));
  });
function Pt(e) {
  let t = (0, Ft.c)(19),
    { onClose: n, onTryInChat: r, plugin: i } = e,
    a;
  t[0] === i ? (a = t[1]) : ((a = L(i)), (t[0] = i), (t[1] = a));
  let o = a,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(Me, { className: `icon-xs text-token-text-secondary` })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== i.logoDarkPath || t[4] !== i.logoPath || t[5] !== o
    ? ((c = (0, X.jsx)(`div`, {
        className: `flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-md`,
        children: (0, X.jsx)(Ke, {
          alt: o,
          className: `size-5`,
          logoDarkUrl: i.logoDarkPath,
          logoUrl: i.logoPath,
          fallback: s,
        }),
      })),
      (t[3] = i.logoDarkPath),
      (t[4] = i.logoPath),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === o
    ? (l = t[8])
    : ((l = (0, X.jsx)(`span`, {
        className: `shrink-0`,
        children: (0, X.jsx)(T, {
          id: `plugins.install.success`,
          defaultMessage: `{pluginName} plugin installed`,
          description: `Toast shown after a plugin is installed`,
          values: { pluginName: o },
        }),
      })),
      (t[7] = o),
      (t[8] = l));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(T, {
        id: `plugins.install.tryInChatToast`,
        defaultMessage: `Try now`,
        description: `Button label in the plugin-installed toast that starts a new task with the plugin`,
      })),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === r
    ? (d = t[11])
    : ((d = (0, X.jsx)(_, {
        color: `secondary`,
        size: `composerSm`,
        onClick: r,
        children: u,
      })),
      (t[10] = r),
      (t[11] = d));
  let f;
  t[12] !== c || t[13] !== l || t[14] !== d
    ? ((f = (0, X.jsxs)(`div`, {
        className: `flex items-center gap-2 pr-1`,
        children: [c, l, d],
      })),
      (t[12] = c),
      (t[13] = l),
      (t[14] = d),
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== n || t[17] !== f
      ? ((p = (0, X.jsx)(ke, {
          className: `!items-center !rounded-[14px] !border-token-border !py-1.5 !text-sm !leading-[18px] [&>button]:!mt-0`,
          level: `success`,
          onRemove: n,
          children: f,
        })),
        (t[16] = n),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
var Ft,
  X,
  It = e(() => {
    ((Ft = f()), R(), y(), a(), ut(), Re(), K(), (X = Ge()));
  });
function Lt(e, t, n) {
  return e != null && e.hostId === t && e.plugin.plugin.id === n
    ? e.progressPercent
    : null;
}
function Rt(e, t, n) {
  return e != null && e.hostId === t && e.plugin.plugin.id === n
    ? e.phase
    : null;
}
var zt = e(() => {});
function Bt({ forceReloadPlugins: e, hostId: t, onRequiredAppConnected: i }) {
  let a = le(U),
    o = pt(),
    s = Qe(),
    c = ne(),
    f = Ze(t),
    p = a.query.snapshot(Mt),
    m = We(),
    [, h] = r(`composer_prefill`),
    g = _t(),
    _ = Te(`2761268526`),
    { data: te } = ct(Ve, t),
    {
      clearPendingAppConnect: y,
      isAppConnectPending: re,
      markAppConnectOAuthPending: ie,
    } = fe(),
    {
      cancelPluginInstallAppPreparation: se,
      claimPluginInstall: ce,
      closePluginInstallAppConnectBeforeInstall: pe,
      closePluginInstallAppConnect: he,
      closePluginInstall: w,
      markRequiredAppStatus: be,
      openPluginInstallDetails: T,
      openPluginInstall: Ce,
      openPluginInstallAppConnectBeforeInstall: Ee,
      openRequiredAppConnect: De,
      preparePluginInstallAppConnect: ke,
      session: O,
      setPluginInstallProgress: k,
      setPluginInstallNeedsApps: Ae,
      startPluginInstallAfterAppPreparation: A,
      startPluginInstallAfterAppConnect: Me,
    } = ae(),
    { data: Ie = [], hardRefetchAppsList: Re } = ot({
      enabled:
        O.kind === `needsApps` ||
        O.kind === `connectApp` ||
        O.kind === `connectAppBeforeInstall`,
      hostId: t,
    }),
    ze =
      O.kind === `needsApps` || O.kind === `connectApp`
        ? O.requiredApps.map((e) => e.app)
        : O.kind === `connectAppBeforeInstall`
          ? [O.app]
          : void 0,
    j =
      O.kind === `details` ||
      O.kind === `installing` ||
      O.kind === `preparingApp` ||
      O.kind === `connectAppBeforeInstall`
        ? O.plugin
        : null,
    M =
      j == null ||
      (j.marketplacePath == null && j.plugin.remotePluginId == null)
        ? null
        : C(j),
    { blockedReasonsByConnectorId: N } = bt({ hostId: t, pluginApps: ze }),
    {
      blockedReason: F,
      blockedReasonsByConnectorId: Ge,
      isLoading: I,
    } = bt(
      j == null
        ? { hostId: t }
        : M == null
          ? { hostId: t, pluginSummary: j.plugin }
          : { hostId: t, ...M, pluginSummary: j.plugin },
    ),
    Ke = mt({ hostId: t }),
    qe = et({ hostId: t }),
    Je = Se({ hostId: t }),
    Ye = Ke.available,
    R = qe.available,
    z = Je.available,
    [tt, B] = (0, Q.useState)(!1),
    V = lt({
      mutationFn: async (e) => {
        let n = await v(`install-plugin`, { hostId: t, ...C(e) });
        return (
          await je({
            hostId: t,
            marketplacePath: e.marketplacePath,
            pluginName: e.plugin.name,
          }),
          n
        );
      },
    }),
    H = tt || V.isPending,
    W = H || O.kind === `installing` || O.kind === `preparingApp`,
    G = Vt({
      apps: Ie,
      appInstallBlockedReasonsById: N,
      isAppConnectPending: re,
      session: O,
    }),
    K =
      G.kind === `needsApps` &&
      G.requiredBrowserExtensions.length === 0 &&
      G.requiredApps.length > 0 &&
      G.requiredApps.every((e) => e.status === `connected`),
    it = (0, Q.useEffectEvent)((e, t) => {
      if (t != null) {
        g({
          prefillPrompt: e,
          prefillCwd: t.prefillCwd,
          startInSidebar: t.startInSidebar,
        });
        return;
      }
      h({ text: e });
    }),
    at = (e, t) => {
      g({
        prefillPrompt: Oe({
          defaultPrompt: st(e.plugin.interface?.defaultPrompt),
          pluginDisplayName: L(e),
          pluginId: e.plugin.id,
        }),
        prefillCwd: t,
        startInSidebar: !0,
      });
    },
    ut = async (n) => {
      let [r, i] = await Promise.allSettled([
        ve({ hostId: t, queryClient: c }),
        e(),
      ]);
      if (r.status === `fulfilled` && i.status === `fulfilled`)
        return (
          Fe({
            enabled: !0,
            installed: !0,
            queryClient: c,
            hostId: t,
            pluginId: n.plugin.id,
          }),
          !0
        );
      let s =
        r.status === `rejected`
          ? r.reason
          : i.status === `rejected`
            ? i.reason
            : void 0;
      D.error(`Failed to refresh plugins after install`, {
        safe: {},
        sensitive: { error: s },
      });
      let l =
        s instanceof ge
          ? o.formatMessage(
              {
                id: `plugins.install.skillCatalogRefreshError`,
                defaultMessage: `Installed {pluginName}, but its skills couldn't refresh. Reload skills before starting a new chat`,
                description: `Toast shown when a plugin installs but its runtime skill catalog cannot refresh`,
              },
              { pluginName: L(n) },
            )
          : o.formatMessage(
              {
                id: `plugins.install.refreshError`,
                defaultMessage: `Installed {pluginName}, but failed to refresh the plugin list`,
                description: `Toast shown when a plugin installs successfully but the plugin list refresh fails`,
              },
              { pluginName: L(n) },
            );
      return (a.get(b).danger(l), !1);
    },
    dt = ({ plugin: e, postInstallComposerPrefill: t, tryInChatCwd: n }) => {
      t?.trim() ||
        a.get(b).custom({
          content: ({ close: t }) =>
            (0, Q.createElement)(Pt, {
              onClose: t,
              onTryInChat: () => {
                (t(), at(e, n));
              },
              plugin: e,
            }),
          duration: Ut,
          id: `plugin-added:${e.plugin.id}`,
          level: `success`,
        });
    },
    ft = (0, Q.useEffectEvent)((t) => {
      w();
      let n = t.postInstallComposerPrefill?.trim();
      (n && it(n, t.postInstallNewConversation),
        e()
          .then(() => {
            dt({
              plugin: t.plugin,
              postInstallComposerPrefill: n,
              tryInChatCwd: t.tryInChatCwd,
            });
          })
          .catch((e) => {
            D.error(`Failed to refresh plugins after plugin app setup`, {
              safe: {},
              sensitive: { error: e },
            });
          }));
    }),
    gt = (e) => {
      (Z({
        action: x.CODEX_NEW_CHAT_SUGGESTION_ACTION_REQUIRED_APP_CONNECTED,
        appId: e.app.id,
        pluginId: e.plugin.plugin.id,
        scope: a,
        telemetry: e.telemetry,
      }),
        y({ appId: e.app.id, resumeTarget: $ }),
        Me({
          appId: e.app.id,
          hostId: e.hostId,
          pluginId: e.plugin.plugin.id,
        }));
    },
    vt = (0, Q.useEffectEvent)(gt);
  (0, Q.useEffect)(() => {
    if (O.kind === `connectAppBeforeInstall` && O.status === `connected`) {
      vt(O);
      return;
    }
    !K || G.kind !== `needsApps` || ft(G);
  }, [K, G, O]);
  let q = (e) =>
      !(
        (!Ye && _e(e.plugin.id)) ||
        (!R && n(e.plugin.id)) ||
        (!z && oe(e.plugin.id))
      ),
    xt = async ({
      installLockedComputerUse: e = !1,
      options: n,
      plugin: r,
    }) => {
      if (H || I || !q(r)) {
        w();
        return;
      }
      B(!0);
      try {
        if (St(r.plugin) || F === `disabled-by-admin`) {
          T(r, n);
          return;
        }
        let s;
        try {
          ((s = await V.mutateAsync(r)),
            Fe({
              enabled: !0,
              installed: !0,
              queryClient: c,
              hostId: t,
              pluginId: r.plugin.id,
            }),
            k(Wt),
            Z({
              action: x.CODEX_NEW_CHAT_SUGGESTION_ACTION_PLUGIN_INSTALLED,
              pluginId: r.plugin.id,
              scope: a,
              telemetry: n.telemetry,
            }),
            n.origin === `setup_codex` &&
              Pe(
                a,
                ee.CODEX_ONBOARDING_WIZARD_PHASE_PLUGIN_INSTALL,
                Ue.CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED,
              ),
            E(a, ue, {
              outcome: d.CODEX_PLUGIN_INSTALL_OUTCOME_SUCCEEDED,
              pluginId: r.plugin.id,
            }),
            n.marketplaceAnalytics != null &&
              P(a, {
                action: l.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
                plugin: r.plugin,
                result: u.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                ...n.marketplaceAnalytics,
              }));
        } catch (e) {
          (E(a, ue, {
            outcome: d.CODEX_PLUGIN_INSTALL_OUTCOME_FAILED,
            pluginId: r.plugin.id,
          }),
            n.marketplaceAnalytics != null &&
              P(a, {
                action: l.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
                errorType: nt(e),
                plugin: r.plugin,
                result: u.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                ...n.marketplaceAnalytics,
              }));
          let t =
            r.marketplacePath == null
              ? {
                  pluginName: r.plugin.remotePluginId ?? r.plugin.name,
                  remoteMarketplaceName: r.remoteMarketplaceName,
                }
              : {
                  marketplacePath: r.marketplacePath,
                  pluginName: r.plugin.name,
                };
          (D.error(`manual_plugin_install_failed`, {
            safe: { ...He(t), errorCategory: nt(e) },
            sensitive: { ...we(t), error: e },
          }),
            a.get(b).danger(
              o.formatMessage({
                id: `plugins.install.error`,
                defaultMessage: `Failed to install plugin`,
                description: `Toast shown when installing a plugin fails`,
              }),
            ),
            w());
          return;
        }
        let h = $e(r.plugin.id);
        if (
          (h != null &&
            (await rt(a, h, !1),
            await v(`batch-write-config-value`, {
              hostId: t,
              edits: Le({ pluginId: r.plugin.id, enabled: !0 }),
              filePath: te?.configWriteTarget?.filePath ?? null,
              expectedVersion: null,
              reloadUserConfig: !0,
            })),
          e && _e(r.plugin.id))
        ) {
          let e = !1;
          try {
            let t = await kt(!0);
            (p.setData((e) => ({
              computerIconDataURL: e?.computerIconDataURL ?? null,
              enabled: t,
              lockIconDataURL: e?.lockIconDataURL ?? null,
            })),
              (e = t !== !0));
          } catch (t) {
            (D.error(`Failed to enable Locked Computer Use after install`, {
              safe: {},
              sensitive: { error: t },
            }),
              (e = !0));
          }
          e &&
            a.get(b).danger(
              o.formatMessage({
                id: `plugins.install.lockedComputerUseError`,
                defaultMessage: `Installed Computer Use, but failed to enable Locked Computer Use`,
                description: `Toast shown when Computer Use installs but Locked Computer Use cannot be enabled`,
              }),
            );
        }
        if (!(await ut(r))) {
          w();
          return;
        }
        (r.plugin.authPolicy === `ON_INSTALL` &&
          Ct({ hostId: t, queryClient: c, refreshAppsList: Re }).catch((e) => {
            D.error(`Failed to refresh apps after plugin install`, {
              safe: {},
              sensitive: { error: e },
            });
          }),
          Promise.all([m(ht), m(ye), m(Ne)]).catch((e) => {
            D.error(`Failed to refresh plugin skills and hooks after install`, {
              safe: {},
              sensitive: { error: e },
            });
          }),
          k(Gt));
        let g = await yt({
          authPolicy: s.authPolicy,
          codexHome: f,
          hostId: t,
          plugin: r,
          queryClient: c,
          windowType: `electron`,
        });
        if (
          (k(100),
          await new Promise((e) => setTimeout(e, 650)),
          (i == null && s.authPolicy === `ON_USE`) ||
            (s.appsNeedingAuth.length === 0 && g.length === 0))
        ) {
          let e = n.postInstallComposerPrefill?.trim();
          (e && it(e, n.postInstallNewConversation),
            w(),
            i?.(),
            dt({
              plugin: r,
              postInstallComposerPrefill: e,
              tryInChatCwd: n.tryInChatCwd,
            }));
          return;
        }
        n.marketplaceAnalytics != null &&
          P(a, {
            action: l.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP,
            plugin: r.plugin,
            result: u.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
            ...n.marketplaceAnalytics,
          });
        let _ =
          s.appsNeedingAuth.length === 1 &&
          g.length === 0 &&
          (s.authPolicy === `ON_INSTALL` || i != null)
            ? s.appsNeedingAuth[0]?.id
            : void 0;
        (Ae({
          apps: s.appsNeedingAuth,
          browserExtensions: g,
          connectingAppId: _,
          options: n,
          plugin: r,
        }),
          n.marketplaceAnalytics != null &&
            (P(a, {
              action: l.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP,
              plugin: r.plugin,
              result: u.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
              source: n.marketplaceAnalytics.source,
              surface: S.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP,
            }),
            _ != null &&
              Ge[_] == null &&
              P(a, {
                action: l.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
                connectorId: _,
                plugin: r.plugin,
                result: u.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                source: n.marketplaceAnalytics.source,
                surface: S.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP,
              })));
      } finally {
        B(!1);
      }
    },
    wt = (0, Q.useEffectEvent)((e) => {
      ce({ hostId: t, pluginId: e.plugin.plugin.id }) &&
        xt({
          options: {
            origin: e.origin,
            marketplaceAnalytics: e.marketplaceAnalytics,
            postInstallComposerPrefill: e.postInstallComposerPrefill,
            postInstallNewConversation: e.postInstallNewConversation,
            tryInChatCwd: e.tryInChatCwd,
            telemetry: e.telemetry,
          },
          plugin: e.plugin,
        });
    });
  (0, Q.useEffect)(() => {
    O.kind !== `installing` || O.installStarted || I || wt(O);
  }, [I, O]);
  let Tt = async (e, n, r) => {
      try {
        let i = r ?? (await v(`read-plugin`, { hostId: t, ...C(e) })).plugin;
        if (i == null) throw Error(`Plugin detail was not found.`);
        let a = i.apps.length === 1 ? i.apps[0] : null;
        if (a == null) {
          A({ hostId: t, pluginId: e.plugin.id });
          return;
        }
        let { link: o } = await de.safeGet(
          `/aip/connectors/{connector_id}/link`,
          {
            parameters: { path: { connector_id: a.id } },
            additionalHeaders: { "OAI-Product-Sku": `CODEX` },
          },
        );
        if (o != null) {
          A({ hostId: t, pluginId: e.plugin.id });
          return;
        }
        Ee({ app: a, hostId: t, options: n, plugin: e });
      } catch (n) {
        (D.error(`Failed to load canonical plugin app before install`, {
          safe: {},
          sensitive: { error: n },
        }),
          a.get(b).danger(
            o.formatMessage({
              id: `plugins.install.loadAppError`,
              defaultMessage: `Failed to load plugin connection`,
              description: `Toast shown when Codex cannot load the app that must connect before installing a canonical plugin`,
            }),
          ),
          se({ hostId: t, pluginId: e.plugin.id }));
      }
    },
    Et = (e, n = {}) => {
      if (W || !q(e)) {
        n.marketplaceAnalytics != null &&
          P(a, {
            action: l.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
            errorType: W ? `install_in_progress` : `unsupported_environment`,
            plugin: e.plugin,
            result: u.CODEX_PLUGIN_ACTION_RESULT_BLOCKED,
            ...n.marketplaceAnalytics,
          });
        return;
      }
      if (
        (V.reset(),
        n.marketplaceAnalytics != null &&
          P(a, {
            action: l.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
            plugin: e.plugin,
            result: u.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
            ...n.marketplaceAnalytics,
          }),
        e.plugin.authPolicy === `ON_INSTALL` &&
          (St(e.plugin) || F === `disabled-by-admin`))
      ) {
        (n.marketplaceAnalytics != null &&
          P(a, {
            action: l.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
            errorType: `disabled_by_admin`,
            plugin: e.plugin,
            result: u.CODEX_PLUGIN_ACTION_RESULT_BLOCKED,
            ...n.marketplaceAnalytics,
          }),
          J(e, n));
        return;
      }
      if (
        (Z({
          action: x.CODEX_NEW_CHAT_SUGGESTION_ACTION_APP_CONNECT_MODAL_OPENED,
          pluginId: e.plugin.id,
          scope: a,
          telemetry: n.telemetry,
        }),
        e.plugin.authPolicy === `ON_INSTALL`)
      ) {
        (ke(t, e, n),
          Tt(
            e,
            n,
            c.getQueryData(
              Be({
                hostId: t,
                marketplacePath: e.marketplacePath,
                pluginName: me(e),
                remoteMarketplaceName: e.remoteMarketplaceName,
              }),
            ) ?? null,
          ));
        return;
      }
      Ce(t, e, n);
    },
    J = (e, t = {}) => {
      W || !q(e) || (V.reset(), T(e, t));
    },
    Dt = () => {
      if (!W) {
        if ((V.reset(), O.kind === `connectAppBeforeInstall`)) {
          (O.status === `waitingForCallback` &&
            y({ appId: O.app.id, resumeTarget: $ }),
            pe());
          return;
        }
        if (O.kind === `connectApp`) {
          he();
          return;
        }
        w();
      }
    },
    Ot = async (e = {}, t = !1) => {
      O.kind === `details` &&
        (await xt({
          installLockedComputerUse: t,
          options: {
            origin: O.origin,
            marketplaceAnalytics: O.marketplaceAnalytics,
            postInstallComposerPrefill: O.postInstallComposerPrefill,
            postInstallNewConversation: O.postInstallNewConversation,
            tryInChatCwd: O.tryInChatCwd,
            telemetry: O.telemetry,
          },
          plugin: O.plugin,
        }));
    },
    At = async (e) => {
      if (G.kind !== `needsApps`) return;
      let t = G.requiredApps.find((t) => t.appId === e);
      if (
        t == null ||
        N[e] != null ||
        t.status === `connected` ||
        t.status === `launching` ||
        t.status === `waitingForCallback`
      )
        return;
      (Z({
        action: x.CODEX_NEW_CHAT_SUGGESTION_ACTION_REQUIRED_APP_CONNECT_STARTED,
        appId: e,
        pluginId: G.plugin.plugin.id,
        scope: a,
        telemetry: O.kind === `needsApps` ? O.telemetry : void 0,
      }),
        Y({ appId: e, result: u.CODEX_PLUGIN_ACTION_RESULT_INITIATED }));
      let n = t.installUrl?.trim();
      if (!_ && n) {
        xe({
          href: n,
          initiator: `open_in_browser_bridge`,
          openTarget: `external-browser`,
        });
        return;
      }
      (y({ appId: e }), De(e));
    },
    Y = ({ appId: e, errorType: t, result: n }) => {
      (O.kind !== `connectAppBeforeInstall` &&
        O.kind !== `needsApps` &&
        O.kind !== `connectApp`) ||
        O.marketplaceAnalytics == null ||
        (O.kind === `connectAppBeforeInstall` && O.app.id !== e) ||
        P(a, {
          action: l.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
          connectorId: e,
          errorType: t,
          plugin: O.plugin.plugin,
          result: n,
          ...O.marketplaceAnalytics,
          surface:
            O.kind === `connectAppBeforeInstall`
              ? O.marketplaceAnalytics.surface
              : S.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP,
        });
    };
  return {
    closePluginInstall: Dt,
    connectRequiredApp: At,
    handleRequiredAppConnectFailed: (e, t) => {
      Y({
        appId: e,
        errorType: t,
        result: u.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
      });
    },
    handleRequiredAppConnected: async (e) => {
      if (O.kind === `connectAppBeforeInstall` && O.app.id === e) {
        (Y({ appId: e, result: u.CODEX_PLUGIN_ACTION_RESULT_SUCCESS }),
          O.status === `pending` &&
            Z({
              action:
                x.CODEX_NEW_CHAT_SUGGESTION_ACTION_REQUIRED_APP_CONNECT_STARTED,
              appId: e,
              pluginId: O.plugin.plugin.id,
              scope: a,
              telemetry: O.telemetry,
            }),
          gt(O));
        return;
      }
      ((O.kind === `needsApps` || O.kind === `connectApp`) &&
        (Z({
          action: x.CODEX_NEW_CHAT_SUGGESTION_ACTION_REQUIRED_APP_CONNECTED,
          appId: e,
          pluginId: O.plugin.plugin.id,
          scope: a,
          telemetry: O.telemetry,
        }),
        Y({ appId: e, result: u.CODEX_PLUGIN_ACTION_RESULT_SUCCESS })),
        be({ appId: e, status: `connected` }),
        O.kind === `connectApp` &&
          O.requiredApps.length === 1 &&
          O.requiredBrowserExtensions.length === 0 &&
          i?.());
      try {
        await Ct({ hostId: t, queryClient: c, refreshAppsList: Re });
      } catch (e) {
        D.error(`Failed to refresh apps after plugin app connect`, {
          safe: {},
          sensitive: { error: e },
        });
      }
    },
    handleRequiredAppConnectStarted: (e) => {
      Y({ appId: e, result: u.CODEX_PLUGIN_ACTION_RESULT_INITIATED });
    },
    handleRequiredAppOAuthStarted: ({ app: e, redirectUrl: n }) => {
      (O.kind === `connectAppBeforeInstall` &&
        O.app.id === e.id &&
        Z({
          action:
            x.CODEX_NEW_CHAT_SUGGESTION_ACTION_REQUIRED_APP_CONNECT_STARTED,
          appId: e.id,
          pluginId: O.plugin.plugin.id,
          scope: a,
          telemetry: O.telemetry,
        }),
        be({ appId: e.id, status: `waitingForCallback` }),
        ie({
          app: e,
          hostId: t,
          marketplaceAnalytics:
            (O.kind === `connectAppBeforeInstall` || O.kind === `connectApp`) &&
            O.marketplaceAnalytics != null
              ? {
                  pluginId: O.plugin.plugin.id,
                  remotePluginId: Xe(O.plugin.plugin),
                  ...O.marketplaceAnalytics,
                  surface:
                    O.kind === `connectApp`
                      ? S.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP
                      : O.marketplaceAnalytics.surface,
                }
              : void 0,
          redirectUrl: n,
          returnTo: `${s.pathname}${s.search}${s.hash}`,
          resumeTarget: $,
        }));
    },
    installPlugin: Ot,
    isInstalling: W,
    openPluginInstall: Et,
    openPluginInstallDetails: J,
    session: G,
  };
}
function Z({ action: e, appId: t, pluginId: n, scope: r, telemetry: i }) {
  i?.source === `new_chat_page_suggestions` &&
    E(r, c, {
      action: e,
      appId: t,
      categoryId: i.categoryId,
      pluginId: n,
      suggestionId: i.suggestionId,
      suggestionLevel: i.suggestionLevel,
    });
}
function Vt({
  apps: e,
  isAppConnectPending: t,
  appInstallBlockedReasonsById: n,
  session: r,
}) {
  if (r.kind === `closed`) return r;
  if (r.kind === `details`)
    return {
      kind: `details`,
      postInstallComposerPrefill: r.postInstallComposerPrefill,
      postInstallNewConversation: r.postInstallNewConversation,
      plugin: r.plugin,
    };
  if (r.kind === `installing`)
    return {
      hostId: r.hostId,
      kind: `installing`,
      phase: `installing`,
      plugin: r.plugin,
      progressPercent: r.progressPercent,
    };
  if (r.kind === `preparingApp`)
    return {
      hostId: r.hostId,
      kind: `installing`,
      phase: `loading`,
      plugin: r.plugin,
      progressPercent: 0,
    };
  let i = new Map();
  if (
    (e.forEach((e) => {
      i.set(e.id, e);
    }),
    r.kind === `connectAppBeforeInstall`)
  )
    return {
      closeOnOAuthStarted: !1,
      kind: `connectApp`,
      plugin: r.plugin,
      app: Ht({
        appInstallBlockedReasonsById: n,
        appsById: i,
        isAppConnectPending: t,
        preserveWaitingForCallback: !0,
        resumeTarget: $,
        requiredApp: { app: r.app, status: r.status },
      }),
    };
  let a = r.requiredApps.map((e) =>
    Ht({
      appInstallBlockedReasonsById: n,
      appsById: i,
      isAppConnectPending: t,
      requiredApp: e,
    }),
  );
  if (r.kind === `connectApp`) {
    let e =
      a.find((e) => e.appId === r.app.id) ??
      Ht({
        appInstallBlockedReasonsById: n,
        appsById: i,
        isAppConnectPending: t,
        requiredApp: { app: r.app, status: `pending` },
      });
    return {
      closeOnOAuthStarted: !0,
      kind: `connectApp`,
      plugin: r.plugin,
      app: e,
    };
  }
  return {
    kind: `needsApps`,
    postInstallComposerPrefill: r.postInstallComposerPrefill,
    postInstallNewConversation: r.postInstallNewConversation,
    plugin: r.plugin,
    requiredBrowserExtensions: r.requiredBrowserExtensions,
    requiredApps: a,
    tryInChatCwd: r.tryInChatCwd,
  };
}
function Ht({
  appInstallBlockedReasonsById: e,
  appsById: t,
  isAppConnectPending: n,
  preserveWaitingForCallback: r = !1,
  resumeTarget: i,
  requiredApp: a,
}) {
  let o = t.get(a.app.id),
    s = a.status;
  return (
    o?.isAccessible === !0 || e[a.app.id] === `disabled-by-admin`
      ? (s = `connected`)
      : !r &&
        a.status === `waitingForCallback` &&
        !n(a.app.id, i) &&
        (s = `pending`),
    {
      appId: a.app.id,
      description: o?.description ?? a.app.description,
      installUrl: o?.installUrl ?? a.app.installUrl,
      logoUrl: o?.logoUrl ?? null,
      name: o?.name ?? a.app.name,
      status: s,
    }
  );
}
var Q,
  Ut,
  Wt,
  Gt,
  $,
  Kt = e(() => {
    (ie(),
      re(),
      dt(),
      be(),
      i(),
      (Q = t(h(), 1)),
      R(),
      p(),
      g(),
      s(),
      J(),
      k(),
      Je(),
      O(),
      De(),
      at(),
      j(),
      ze(),
      vt(),
      w(),
      it(),
      M(),
      F(),
      o(),
      Ce(),
      Ae(),
      Nt(),
      tt(),
      I(),
      se(),
      B(),
      ft(),
      pe(),
      q(),
      qe(),
      xt(),
      W(),
      K(),
      It(),
      Ye(),
      zt(),
      te(),
      H(),
      ce(),
      he(),
      m(),
      (Ut = 8),
      (Wt = 55),
      (Gt = 90),
      ($ = { kind: `plugin-install` }));
  });
export {
  zt as a,
  Mt as c,
  Dt as d,
  kt as f,
  Ct as h,
  Lt as i,
  jt as l,
  J as m,
  Bt as n,
  Y as o,
  Ot as p,
  Rt as r,
  At as s,
  Kt as t,
  Nt as u,
};
//# sourceMappingURL=app-initial~app-main~plugin-detail-page~new-thread-panel-page~appgen-library-page~hotkey-wi~irpg5jg8-Dh9qebrf.js.map
