import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $C as n,
  AY as r,
  Ao as i,
  BW as a,
  C0 as o,
  CS as s,
  CV as c,
  Cg as l,
  Cp as u,
  Cw as d,
  Do as f,
  Ds as p,
  Eo as m,
  Fs as h,
  I2 as g,
  Is as _,
  JA as v,
  JC as y,
  L2 as b,
  MU as x,
  Mq as S,
  NU as C,
  Nq as w,
  O2 as T,
  PB as E,
  QR as D,
  RK as O,
  S0 as k,
  SK as A,
  SV as j,
  T2 as ee,
  Tg as te,
  Ts as M,
  Tx as ne,
  YC as re,
  ZZ as ie,
  _0 as N,
  _Y as P,
  a as ae,
  aG as F,
  aJ as oe,
  aS as I,
  aw as L,
  bG as se,
  bI as ce,
  bK as R,
  cY as le,
  cp as z,
  cw as ue,
  dJ as de,
  dw as fe,
  ew as pe,
  ez as me,
  fJ as he,
  fp as ge,
  gD as _e,
  gw as ve,
  iw as ye,
  jo as be,
  js as B,
  k2 as V,
  lp as xe,
  mD as Se,
  mY as H,
  nw as Ce,
  oS as we,
  oj as Te,
  pY as Ee,
  pp as De,
  r as Oe,
  rG as ke,
  rw as U,
  sG as Ae,
  sJ as je,
  sY as Me,
  tJ as W,
  vD as Ne,
  vI as G,
  wS as K,
  wg as q,
  wp as Pe,
  wx as Fe,
  x0 as Ie,
  x2 as Le,
  y2 as Re,
  yD as ze,
  yG as Be,
  yY as Ve,
  zK as He,
  zW as Ue,
  zZ as We,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $ as Ge,
  J as Ke,
  K as qe,
  Q as Je,
  X as Ye,
  Y as Xe,
  Z as Ze,
  q as Qe,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  Sc as $e,
  xc as et,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Gn as tt,
  Kn as nt,
  ct as rt,
  ot as it,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  a as at,
  d as ot,
  o as st,
  p as ct,
  r as lt,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  D as ut,
  E as dt,
  O as ft,
  c as pt,
  g as mt,
  h as ht,
  k as gt,
  l as _t,
  m as vt,
  p as yt,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ggy53w99-CqMu8hJo.js";
import {
  C as bt,
  S as xt,
  f as St,
  p as Ct,
  st as wt,
  v as J,
  vt as Tt,
  y as Et,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as Dt,
  rt as Ot,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as kt,
  t as At,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~bkyphntg-CyJk2_r3.js";
import {
  c as jt,
  d as Mt,
  i as Nt,
  l as Pt,
  m as Ft,
  n as It,
  o as Lt,
  p as Rt,
  t as zt,
  u as Bt,
} from "./app-initial~app-main~agent-settings-Dpu2KCKU.js";
import {
  n as Vt,
  t as Y,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as Ht, t as Ut } from "./open-in-targets-query-OIXyGPjk.js";
import {
  a as Wt,
  i as Gt,
  n as Kt,
  r as qt,
} from "./settings-route-state-D4zHSLwE.js";
import { n as Jt, t as Yt } from "./settings-loading-row-DPKmhlyp.js";
function Xt(e) {
  if (e == null) return 0;
  switch (e.phase) {
    case `checking`:
      return 0;
    case `downloading`:
      return e.downloadedBytes == null || e.totalBytes == null
        ? 0
        : Math.floor(Math.min((e.downloadedBytes / e.totalBytes) * 100, 100));
    case `verifying`:
    case `extracting`:
      return 98;
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return 100;
    case `error`:
      return 0;
  }
}
function Zt(e, t) {
  switch (e?.phase) {
    case void 0:
    case `checking`:
    case `downloading`:
    case `error`:
      return (0, Qt.jsx)(P, {
        id: `localConversation.primaryRuntimeInstallStatus.downloading`,
        defaultMessage: `Setting up your workspace: {percent}%`,
        description: `Thread status shown while Codex downloads required local runtime tools before starting a response`,
        values: { percent: t },
      });
    case `extracting`:
      return (0, Qt.jsx)(P, {
        id: `localConversation.primaryRuntimeInstallStatus.extracting`,
        defaultMessage: `Preparing your workspace`,
        description: `Thread status shown while Codex extracts required local runtime tools before starting a response`,
      });
    case `verifying`:
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return (0, Qt.jsx)(P, {
        id: `localConversation.primaryRuntimeInstallStatus.finalizing`,
        defaultMessage: `Finalizing your workspace`,
        description: `Thread status shown while Codex finalizes required local runtime tools before starting a response`,
      });
  }
}
var Qt,
  $t = e(() => {
    (H(), (Qt = V()));
  }),
  X,
  en = e(() => {
    (H(),
      (X = Ee({
        customConfig: {
          id: `settings.agent.customConfig.sectionTitle`,
          defaultMessage: `Custom config.toml settings`,
          description: `Heading for the custom config.toml settings section`,
        },
        projectConfig: {
          id: `settings.agent.configuration.scope.projectGroup`,
          defaultMessage: `Project config`,
          description: `Section label for project config scopes`,
        },
        globalConfig: {
          id: `settings.agent.configuration.scope.globalGroup`,
          defaultMessage: `Global config`,
          description: `Section label for user and admin config scopes`,
        },
        userConfig: {
          id: `settings.agent.configuration.scope.user`,
          defaultMessage: `User config`,
          description: `Label for the user config scope in configuration settings`,
        },
        adminConfig: {
          id: `settings.agent.configuration.scope.managed`,
          defaultMessage: `Admin config`,
          description: `Label for the admin config scope in configuration settings`,
        },
        approvalPolicy: {
          id: `settings.agent.configuration.approval.label`,
          defaultMessage: `Approval policy`,
          description: `Label for approval policy in configuration settings`,
        },
        untrusted: {
          id: `settings.agent.configuration.approval.option.untrusted`,
          defaultMessage: `Untrusted`,
          description: `Label for the untrusted approval policy option`,
        },
        onFailure: {
          id: `settings.agent.configuration.approval.option.onFailure`,
          defaultMessage: `On failure`,
          description: `Label for the legacy on-failure approval policy option`,
        },
        onRequest: {
          id: `settings.agent.configuration.approval.option.onRequest`,
          defaultMessage: `On request`,
          description: `Label for the on request approval policy option`,
        },
        never: {
          id: `settings.agent.configuration.approval.option.never`,
          defaultMessage: `Never`,
          description: `Label for the never approval policy option`,
        },
        sandboxSettings: {
          id: `settings.agent.configuration.sandbox.label`,
          defaultMessage: `Sandbox settings`,
          description: `Label for sandbox settings in configuration settings`,
        },
        readOnly: {
          id: `settings.agent.configuration.sandbox.option.readOnly`,
          defaultMessage: `Read only`,
          description: `Label for the read only sandbox option`,
        },
        workspaceWrite: {
          id: `settings.agent.configuration.sandbox.option.workspaceWrite`,
          defaultMessage: `Workspace write`,
          description: `Label for the workspace write sandbox option`,
        },
        fullAccess: {
          id: `settings.agent.configuration.sandbox.option.fullAccess`,
          defaultMessage: `Full access`,
          description: `Label for the full access sandbox option`,
        },
        networkAccess: {
          id: `settings.agent.configuration.network.label`,
          defaultMessage: `Allow network access`,
          description: `Label for network access in configuration settings`,
        },
        workspaceDependencies: {
          id: `settings.agent.dependencies.sectionTitle`,
          defaultMessage: `Workspace Dependencies`,
          description: `Heading for the Codex dependencies settings section`,
        },
        currentDependencyVersion: {
          id: `settings.agent.dependencies.bundleVersion.label`,
          defaultMessage: `Current version:`,
          description: `Footer label for the installed Codex dependency bundle version`,
        },
        codexDependencies: {
          id: `settings.agent.dependencies.enabled.label`,
          defaultMessage: `Codex dependencies`,
          description: `Label for the Codex dependencies enabled toggle`,
        },
        diagnoseWorkspaceDependencies: {
          id: `settings.agent.dependencies.diagnose.label`,
          defaultMessage: `Diagnose issues in Codex Workspace`,
          description: `Label for dependency diagnostics in settings`,
        },
        resetWorkspaceDependencies: {
          id: `settings.agent.dependencies.reset.label`,
          defaultMessage: `Reset and install Workspace`,
          description: `Label for resetting and reinstalling dependencies in settings`,
        },
        experimentalFeatures: {
          id: `settings.general.experimentalFeatures`,
          defaultMessage: `Experimental features (Beta)`,
          description: `Heading for beta experimental features settings group`,
        },
      })));
  });
async function tn({ filePath: e, keyPath: t, value: n }) {
  let r = rn(t, n);
  if (r == null)
    throw Error(`Unsupported config key for project config write.`);
  await nn({ filePath: e, field: r });
}
async function nn({ filePath: e, field: t }) {
  let n = ``;
  try {
    n = (await W(`read-file`, { params: { path: e } })).contents;
  } catch (e) {
    if (!un(e)) throw Error(`Failed to read project config.`);
  }
  let r = an(n, t.name, t.value);
  if (r !== n)
    try {
      await W(`local-environment-config-save`, {
        params: { configPath: e, raw: r },
      });
    } catch {
      throw Error(`Failed to save project config.`);
    }
}
function rn(e, t) {
  return e === `approval_policy` && typeof t == `string`
    ? { name: `approval_policy`, value: t }
    : e === `sandbox_mode` && typeof t == `string`
      ? { name: `sandbox_mode`, value: t }
      : e === `sandbox_workspace_write.network_access` && typeof t == `boolean`
        ? { name: `network_access`, value: t }
        : null;
}
function an(e, t, n) {
  return t === `network_access` ? sn(e, n === !0) : on(e, t, String(n));
}
function on(e, t, n) {
  let r =
      e.length > 0
        ? e.split(`
`)
        : [],
    i = null,
    a = !1;
  for (let [e, o] of r.entries()) {
    let s = ln(o);
    if (s != null) {
      i = s;
      continue;
    }
    if (i == null && RegExp(`^\\s*${t}\\s*=`).test(o)) {
      ((r[e] = `${t} = "${n}"`), (a = !0));
      break;
    }
  }
  if (!a) {
    let e = r.findIndex((e) => ln(e) != null),
      i = e === -1 ? r.length : e;
    r.splice(i, 0, `${t} = "${n}"`);
  }
  return cn(
    r.join(`
`),
  );
}
function sn(e, t) {
  let n =
      e.length > 0
        ? e.split(`
`)
        : [],
    r = !1,
    i = n.length,
    a = !1;
  for (let [e, o] of n.entries()) {
    let s = ln(o);
    if (s != null) {
      if (r) {
        i = e;
        break;
      }
      s === `sandbox_workspace_write` && (r = !0);
      continue;
    }
    if (r && /^\s*network_access\s*=/.test(o)) {
      ((n[e] = `network_access = ${t ? `true` : `false`}`), (a = !0));
      break;
    }
  }
  if (r && !a)
    return (
      n.splice(i, 0, `network_access = ${t ? `true` : `false`}`),
      cn(
        n.join(`
`),
      )
    );
  if (a)
    return cn(
      n.join(`
`),
    );
  let o =
    e.length > 0 &&
    !e.endsWith(`
`)
      ? `${e}\n`
      : e;
  return `${o}${
    o.trim().length === 0
      ? ``
      : `
`
  }[sandbox_workspace_write]\nnetwork_access = ${t ? `true` : `false`}\n`;
}
function cn(e) {
  return e.endsWith(`
`)
    ? e
    : `${e}\n`;
}
function ln(e) {
  let t = e.match(/^\s*\[([^\]]+)\]\s*(?:#.*)?$/);
  return t?.[1] == null ? null : t[1].trim();
}
function un(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.message.trim().toLowerCase();
  return (
    t === `enoent` || t.includes(`no such file`) || t.includes(`not found`)
  );
}
var dn = e(() => {
  oe();
});
function fn(e) {
  let t = (0, gn.c)(26),
    { hostId: n } = e,
    r = Ve(),
    [i, a] = (0, _n.useState)(!1),
    { data: o, isLoading: s } = Ie(l, n),
    c = o === void 0 ? [] : o,
    d;
  t[0] === n ? (d = t[1]) : ((d = { hostId: n }), (t[0] = n), (t[1] = d));
  let f = te(d),
    p = c.filter(hn),
    m = c.some(mn),
    h = c.find(pn),
    g;
  t[2] === f
    ? (g = t[3])
    : ((g = (e) => ({
        key: e.name,
        label: e.displayName ?? e.name,
        description: e.description ?? void 0,
        enabled: e.enabled,
        onChange: (t) => {
          f.mutate(
            { featureName: e.name, enabled: t },
            {
              onSuccess: () => {
                a(!0);
              },
            },
          );
        },
      })),
      (t[2] = f),
      (t[3] = g));
  let _ = [
      ...(m
        ? [
            {
              key: `plugins`,
              label: r.formatMessage({
                id: `settings.general.experimentalFeatures.plugins.label`,
                defaultMessage: `Plugins`,
                description: `Label for the plugins experimental feature toggle`,
              }),
              description:
                h?.description ??
                r.formatMessage({
                  id: `settings.general.experimentalFeatures.plugins.description`,
                  defaultMessage: `Enable the plugins experience in ChatGPT`,
                  description: `Description for the plugins experimental feature toggle`,
                }),
              enabled: h?.enabled ?? !0,
              onChange: (e) => {
                f.mutate(
                  { featureName: `plugins`, enabled: e },
                  {
                    onSuccess: () => {
                      a(!0);
                    },
                  },
                );
              },
            },
          ]
        : []),
      ...p.map(g),
    ],
    v = _.length > 0,
    y = Y,
    b;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(P, {
        id: `settings.general.experimentalFeatures`,
        defaultMessage: `Experimental features (Beta)`,
        description: `Heading for beta experimental features settings group`,
      })),
      (t[4] = b))
    : (b = t[4]);
  let x;
  t[5] === i
    ? (x = t[6])
    : ((x = i
        ? (0, Z.jsx)(`div`, {
            className: `mb-2 block font-medium text-token-error-foreground`,
            children: (0, Z.jsx)(P, {
              id: `settings.general.experimentalFeatures.restartNote`,
              defaultMessage: `Restart {appName} to apply experimental feature changes`,
              description: `Notice shown after changing an experimental feature to indicate restart is required`,
              values: { appName: u },
            }),
          })
        : void 0),
      (t[5] = i),
      (t[6] = x));
  let S;
  t[7] === x
    ? (S = t[8])
    : ((S = (0, Z.jsx)(Y.Header, { title: b, subtitle: x })),
      (t[7] = x),
      (t[8] = S));
  let C = Y,
    w = St,
    T;
  t[9] === s
    ? (T = t[10])
    : ((T = s
        ? (0, Z.jsx)(Yt, {
            children: (0, Z.jsx)(P, {
              id: `settings.general.experimentalFeatures.loading`,
              defaultMessage: `Loading experimental features…`,
              description: `Loading label for beta experimental features settings group`,
            }),
          })
        : null),
      (t[9] = s),
      (t[10] = T));
  let E;
  t[11] !== v || t[12] !== s
    ? ((E =
        !s && !v
          ? (0, Z.jsx)(J, {
              label: (0, Z.jsx)(P, {
                id: `settings.general.experimentalFeatures.empty`,
                defaultMessage: `No beta experimental features available`,
                description: `Empty label for beta experimental features settings group`,
              }),
              control: (0, Z.jsx)(`span`, { className: `h-5 w-8` }),
            })
          : null),
      (t[11] = v),
      (t[12] = s),
      (t[13] = E))
    : (E = t[13]);
  let D = _.map((e) =>
      (0, Z.jsx)(
        J,
        {
          label: e.label,
          description: e.description,
          control: (0, Z.jsx)(Ot, {
            checked: e.enabled,
            disabled: f.isPending,
            onChange: e.onChange,
            ariaLabel: r.formatMessage(
              {
                id: `settings.general.experimentalFeatures.toggle`,
                defaultMessage: `Toggle {featureName}`,
                description: `Aria label for toggling a beta experimental feature`,
              },
              { featureName: e.label },
            ),
          }),
        },
        e.key,
      ),
    ),
    O;
  t[14] !== w || t[15] !== D || t[16] !== T || t[17] !== E
    ? ((O = (0, Z.jsxs)(w, { children: [T, E, D] })),
      (t[14] = w),
      (t[15] = D),
      (t[16] = T),
      (t[17] = E),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] !== O || t[20] !== C.Content
    ? ((k = (0, Z.jsx)(C.Content, { children: O })),
      (t[19] = O),
      (t[20] = C.Content),
      (t[21] = k))
    : (k = t[21]);
  let A;
  return (
    t[22] !== y || t[23] !== k || t[24] !== S
      ? ((A = (0, Z.jsxs)(y, { children: [S, k] })),
        (t[22] = y),
        (t[23] = k),
        (t[24] = S),
        (t[25] = A))
      : (A = t[25]),
    A
  );
}
function pn(e) {
  return e.name === `plugins`;
}
function mn(e) {
  return e.name === `apps` && e.enabled;
}
function hn(e) {
  return Wt(e);
}
var gn,
  _n,
  Z,
  vn = e(() => {
    ((gn = g()),
      N(),
      (_n = t(b(), 1)),
      H(),
      Pe(),
      Dt(),
      q(),
      Gt(),
      Vt(),
      Jt(),
      Et(),
      Ct(),
      (Z = V()));
  });
function yn(e) {
  let t = (0, xn.c)(53),
    { hostId: n } = e,
    r = k(Me),
    i = o(vt),
    a;
  t[0] === n ? (a = t[1]) : ((a = { hostId: n }), (t[0] = n), (t[1] = a));
  let { data: s } = _t(a),
    c,
    l,
    u,
    d,
    f,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (t[2] !== i || t[3] !== n || t[4] !== s || t[5] !== r) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[20] !== s?.hasModelSupportingMaxReasoningEffort ||
      t[21] !== s?.hasModelSupportingUltraReasoningEffort
        ? ((e = (e) =>
            e === `max`
              ? s?.hasModelSupportingMaxReasoningEffort === !0
              : s?.hasModelSupportingUltraReasoningEffort === !0),
          (t[20] = s?.hasModelSupportingMaxReasoningEffort),
          (t[21] = s?.hasModelSupportingUltraReasoningEffort),
          (t[22] = e))
        : (e = t[22]);
      let a = Sn.filter(e);
      if (s == null || a.length === 0) {
        m = null;
        break bb0;
      }
      let o;
      t[23] === i
        ? (o = t[24])
        : ((o = (e) => i.has(e)), (t[23] = i), (t[24] = o));
      let C = yt.length + a.filter(o).length;
      ((f = Y),
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((S = (0, Q.jsx)(Y.Header, {
              title: (0, Q.jsx)(P, {
                id: `settings.agent.modelFeatures.title`,
                defaultMessage: `Model features`,
                description: `Title for model feature settings`,
              }),
            })),
            (t[25] = S))
          : (S = t[25]),
        (d = Y.Content),
        (u = St),
        (l = J),
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((b = (0, Q.jsx)(P, {
              id: `settings.agent.modelFeatures.reasoningEfforts.label`,
              defaultMessage: `Available reasoning efforts`,
              description: `Label for the available reasoning efforts setting`,
            })),
            (x = (0, Q.jsx)(P, {
              id: `settings.agent.modelFeatures.reasoningEfforts.description`,
              defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
              description: `Description for the available reasoning efforts setting`,
            })),
            (t[26] = b),
            (t[27] = x))
          : ((b = t[26]), (x = t[27])),
        (c = M),
        (h = `end`),
        (g = `menuWide`),
        t[28] === C
          ? (_ = t[29])
          : ((_ = (0, Q.jsx)(lt, {
              children: (0, Q.jsx)(P, {
                id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                description: `Number of available reasoning efforts selected`,
                values: { count: C },
              }),
            })),
            (t[28] = C),
            (t[29] = _)),
        t[30] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((v = yt.map(bn)), (t[30] = v))
          : (v = t[30]),
        (y = a.map((e) =>
          (0, Q.jsx)(
            p.CheckboxItem,
            {
              checked: i.has(e),
              onCheckedChange: (t) => {
                mt(r, {
                  enabled: t,
                  hostId: n,
                  listModelsData: s,
                  reasoningEffort: e,
                });
              },
              children: (0, Q.jsx)(xt, { effort: e }),
            },
            e,
          ),
        )));
    }
    ((t[2] = i),
      (t[3] = n),
      (t[4] = s),
      (t[5] = r),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S));
  } else
    ((c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]),
      (_ = t[14]),
      (v = t[15]),
      (y = t[16]),
      (b = t[17]),
      (x = t[18]),
      (S = t[19]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let C;
  t[31] !== c ||
  t[32] !== h ||
  t[33] !== g ||
  t[34] !== _ ||
  t[35] !== v ||
  t[36] !== y
    ? ((C = (0, Q.jsxs)(c, {
        align: h,
        contentWidth: g,
        triggerButton: _,
        children: [v, y],
      })),
      (t[31] = c),
      (t[32] = h),
      (t[33] = g),
      (t[34] = _),
      (t[35] = v),
      (t[36] = y),
      (t[37] = C))
    : (C = t[37]);
  let w;
  t[38] !== l || t[39] !== C || t[40] !== b || t[41] !== x
    ? ((w = (0, Q.jsx)(l, { label: b, description: x, control: C })),
      (t[38] = l),
      (t[39] = C),
      (t[40] = b),
      (t[41] = x),
      (t[42] = w))
    : (w = t[42]);
  let T;
  t[43] !== u || t[44] !== w
    ? ((T = (0, Q.jsx)(u, { children: w })),
      (t[43] = u),
      (t[44] = w),
      (t[45] = T))
    : (T = t[45]);
  let E;
  t[46] !== d || t[47] !== T
    ? ((E = (0, Q.jsx)(d, { children: T })),
      (t[46] = d),
      (t[47] = T),
      (t[48] = E))
    : (E = t[48]);
  let D;
  return (
    t[49] !== f || t[50] !== E || t[51] !== S
      ? ((D = (0, Q.jsxs)(f, { children: [S, E] })),
        (t[49] = f),
        (t[50] = E),
        (t[51] = S),
        (t[52] = D))
      : (D = t[52]),
    D
  );
}
function bn(e) {
  return (0, Q.jsx)(
    p.CheckboxItem,
    { checked: !0, disabled: !0, children: (0, Q.jsx)(xt, { effort: e }) },
    e,
  );
}
var xn,
  Q,
  Sn,
  Cn = e(() => {
    ((xn = g()),
      N(),
      H(),
      B(),
      bt(),
      pt(),
      ht(),
      le(),
      Vt(),
      Et(),
      st(),
      Ct(),
      (Q = V()),
      (Sn = [`max`, `ultra`]));
  });
function wn() {
  let e = (0, Hn.c)(40),
    { selectedHostId: t } = rt(),
    n = c(t),
    r = K(t),
    a = F(Rt),
    o = F(`2106641128`),
    s = F(`3693343337`),
    l;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(at, { slug: `agent` })), (e[0] = l))
    : (l = e[0]);
  let u;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(P, {
        id: `settings.agent.configuration.subtitle.summary`,
        defaultMessage: `Configure approval policy and sandbox settings <a>Learn more</a>`,
        description: `Summary text for the configuration settings subtitle`,
        values: { a: En },
      })),
      (e[1] = u))
    : (u = e[1]);
  let d;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(P, { ...X.customConfig }),
      })),
      (e[2] = d))
    : (d = e[2]);
  let f;
  if (e[3] !== r || e[4] !== t) {
    let n;
    (e[6] === t
      ? (n = e[7])
      : ((n = (e, n) =>
          (0, $.jsx)(
            At,
            {
              content: (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(ae, {
                    cwd: null,
                    className: `[&>p]:my-0`,
                    textStyle: { kind: `small` },
                    children: e.summary,
                  }),
                  e.details != null && e.details.length > 0
                    ? (0, $.jsx)(ae, {
                        cwd: null,
                        className: `[&>p]:my-0`,
                        textStyle: { kind: `small` },
                        children: e.details,
                      })
                    : null,
                  e.path == null
                    ? null
                    : (0, $.jsx)(P, {
                        id: `settings.agent.configuration.notice.fileContext`,
                        defaultMessage: `File: {path}{location}`,
                        description: `File path and optional location for a config or rules warning shown in settings`,
                        values: {
                          path: (0, $.jsx)(`code`, { children: e.path }),
                          location:
                            e.range == null
                              ? ``
                              : (0, $.jsx)(P, {
                                  id: `settings.agent.configuration.notice.fileLocationSuffix`,
                                  defaultMessage: ` (line {line}, column {column})`,
                                  description: `Suffix showing the line and column for a config warning in settings`,
                                  values: {
                                    line: e.range.start.line,
                                    column: e.range.start.column,
                                  },
                                }),
                        },
                      }),
                ],
              }),
              Icon: Ne,
              onPrimaryCtaClick: () => {
                e.path != null &&
                  gt({
                    hostId: t,
                    path: e.path,
                    ...(e.range == null ? {} : { range: e.range }),
                  });
              },
              primaryCtaText:
                e.path == null
                  ? void 0
                  : (0, $.jsx)(P, {
                      id: `settings.agent.configuration.notice.openFile`,
                      defaultMessage: `Open file`,
                      description: `Button label to open the file associated with a config or rules warning`,
                    }),
              role: `alert`,
              type: `warning`,
            },
            `${n}:${e.kind}:${e.summary}:${e.path ?? ``}`,
          )),
        (e[6] = t),
        (e[7] = n)),
      (f = r.map(n)),
      (e[3] = r),
      (e[4] = t),
      (e[5] = f));
  } else f = e[5];
  let p;
  e[8] === t
    ? (p = e[9])
    : ((p = (0, $.jsx)(z, {
        electron: !0,
        children: (0, $.jsx)(An, { hostId: t }),
      })),
      (e[8] = t),
      (e[9] = p));
  let m, h;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(P, {
        id: `settings.agent.configuration.configToml`,
        defaultMessage: `config.toml`,
        description: `Label for config.toml open button`,
      })),
      (h = (0, $.jsx)(P, {
        id: `settings.agent.configuration.configToml.description`,
        defaultMessage: `Edit your config to customize agent behavior`,
        description: `Description for config.toml open row`,
      })),
      (e[10] = m),
      (e[11] = h))
    : ((m = e[10]), (h = e[11]));
  let g, _;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(`span`, { className: `block` })),
      (_ = (0, $.jsx)(P, {
        id: `settings.agent.configuration.configToml.restartNote`,
        defaultMessage: `Restart ChatGPT after editing to apply changes`,
        description: `Note that config.toml changes require a restart`,
      })),
      (e[12] = g),
      (e[13] = _))
    : ((g = e[12]), (_ = e[13]));
  let v;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsxs)($.Fragment, {
        children: [
          h,
          ` `,
          g,
          _,
          ` `,
          (0, $.jsxs)(`a`, {
            className: `inline-flex items-center gap-1 text-token-text-secondary hover:text-token-text-primary`,
            href: wt,
            target: `_blank`,
            rel: `noreferrer`,
            onClick: Tn,
            children: [
              (0, $.jsx)(P, {
                id: `settings.agent.configuration.configToml.docs`,
                defaultMessage: `Docs`,
                description: `Link label for config documentation`,
              }),
              (0, $.jsx)(i, { href: wt, className: `icon-xxs` }),
            ],
          }),
        ],
      })),
      (e[14] = v))
    : (v = e[14]);
  let y;
  e[15] === t
    ? (y = e[16])
    : ((y = (0, $.jsx)(z, {
        extension: !0,
        children: (0, $.jsx)(St, {
          children: (0, $.jsx)(J, {
            label: m,
            description: v,
            control: (0, $.jsx)(dt, { hostId: t }),
          }),
        }),
      })),
      (e[15] = t),
      (e[16] = y));
  let b;
  e[17] !== y || e[18] !== f || e[19] !== p
    ? ((b = (0, $.jsxs)(Y, {
        children: [d, (0, $.jsxs)(Y.Content, { children: [f, p, y] })],
      })),
      (e[17] = y),
      (e[18] = f),
      (e[19] = p),
      (e[20] = b))
    : (b = e[20]);
  let x;
  e[21] !== s || e[22] !== t
    ? ((x = s ? (0, $.jsx)(yn, { hostId: t }) : null),
      (e[21] = s),
      (e[22] = t),
      (e[23] = x))
    : (x = e[23]);
  let S;
  e[24] !== o || e[25] !== t
    ? ((S = o
        ? (0, $.jsx)(`div`, { children: (0, $.jsx)(fn, { hostId: t }) })
        : null),
      (e[24] = o),
      (e[25] = t),
      (e[26] = S))
    : (S = e[26]);
  let C;
  e[27] === S
    ? (C = e[28])
    : ((C = (0, $.jsx)(z, { electron: !0, children: S })),
      (e[27] = S),
      (e[28] = C));
  let w;
  e[29] !== a || e[30] !== n || e[31] !== t
    ? ((w = a && n.kind === `local` ? (0, $.jsx)(Dn, { hostId: t }) : null),
      (e[29] = a),
      (e[30] = n),
      (e[31] = t),
      (e[32] = w))
    : (w = e[32]);
  let T;
  e[33] === w
    ? (T = e[34])
    : ((T = (0, $.jsx)(z, { electron: !0, children: w })),
      (e[33] = w),
      (e[34] = T));
  let E;
  return (
    e[35] !== b || e[36] !== x || e[37] !== C || e[38] !== T
      ? ((E = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(ot, {
            title: l,
            subtitle: u,
            children: [b, x, C, T],
          }),
        })),
        (e[35] = b),
        (e[36] = x),
        (e[37] = C),
        (e[38] = T),
        (e[39] = E))
      : (E = e[39]),
    E
  );
}
function Tn(e) {
  _e({ event: e, href: wt, initiator: `open_in_browser_bridge` });
}
function En(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: wt,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Dn(e) {
  let t = (0, Hn.c)(2),
    { hostId: n } = e,
    r = Be.primaryRuntime;
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(On, { hostId: n, primaryRuntime: r })),
        (t[0] = n),
        (t[1] = i)),
    i
  );
}
function On(e) {
  let t = (0, Hn.c)(98),
    { hostId: n, primaryRuntime: r } = e,
    i = k(Me),
    a = Ve(),
    s = Ae(),
    { data: c, isLoading: u } = Ie(l, n),
    d;
  t[0] === n ? (d = t[1]) : ((d = { hostId: n }), (t[0] = n), (t[1] = d));
  let f = te(d),
    p;
  t[2] === c ? (p = t[3]) : ((p = c?.find(kn)), (t[2] = c), (t[3] = p));
  let m = p,
    g = m?.enabled === !0,
    _;
  t[4] !== n || t[5] !== r
    ? ((_ = () => r.diagnoseDependencies({ hostId: n })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === n ? (v = t[8]) : ((v = qe(n)), (t[7] = n), (t[8] = v));
  let y;
  t[9] !== _ || t[10] !== v
    ? ((y = { queryFn: _, queryKey: v, staleTime: de.FIVE_SECONDS }),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b = ee(y),
    x;
  t[12] !== n || t[13] !== r
    ? ((x = { mutationFn: () => r.diagnoseDependencies({ hostId: n }) }),
      (t[12] = n),
      (t[13] = r),
      (t[14] = x))
    : (x = t[14]);
  let C = Le(x),
    w;
  t[15] !== r || t[16] !== s
    ? ((w = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Ge(s), r.runUpdateNow({ release: t }));
        },
      }),
      (t[15] = r),
      (t[16] = s),
      (t[17] = w))
    : (w = t[17]);
  let T = Le(w),
    E;
  t[18] !== n || t[19] !== r || t[20] !== s
    ? ((E = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Ge(s), r.resetDependencies({ hostId: n, release: t }));
        },
      }),
      (t[18] = n),
      (t[19] = r),
      (t[20] = s),
      (t[21] = E))
    : (E = t[21]);
  let O = Le(E),
    j;
  t[22] === n
    ? (j = t[23])
    : ((j = { mutationFn: () => Nt({ hostId: n }) }), (t[22] = n), (t[23] = j));
  let M = Le(j),
    ne = o(Ze),
    re = o(Ye),
    N = ne?.hostId === n ? ne : null,
    ae;
  t[24] === i ? (ae = t[25]) : ((ae = i.get(A)), (t[24] = i), (t[25] = ae));
  let F = ae,
    oe =
      u ||
      f.isPending ||
      C.isPending ||
      T.isPending ||
      O.isPending ||
      M.isPending,
    I;
  t[26] === N ? (I = t[27]) : ((I = Xe(N)), (t[26] = N), (t[27] = I));
  let L = I,
    se =
      b.data?.bundleVersion == null || b.data.bundleVersion.length === 0
        ? null
        : b.data.bundleVersion,
    R;
  t[28] !== C || t[29] !== b || t[30] !== a || t[31] !== i || t[32] !== F
    ? ((R = () => {
        let e = Date.now();
        C.mutateAsync()
          .then((t) => {
            if (
              (ce(i, D, jt({ diagnostics: t, durationMs: Date.now() - e })),
              b.refetch(),
              t.installed)
            ) {
              F.success(
                a.formatMessage({
                  id: `settings.agent.dependencies.diagnose.ok`,
                  defaultMessage: `Codex dependencies look healthy`,
                  description: `Toast shown when dependency diagnostics find no problems`,
                }),
              );
              return;
            }
            F.warning(
              a.formatMessage({
                id: `settings.agent.dependencies.diagnose.problem`,
                defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
                description: `Toast shown when dependency diagnostics find problems`,
              }),
            );
          })
          .catch(() => {
            (ce(i, D, Pt({ durationMs: Date.now() - e })),
              F.danger(
                a.formatMessage({
                  id: `settings.agent.dependencies.diagnose.failed`,
                  defaultMessage: `Couldn’t diagnose Codex dependencies`,
                  description: `Toast shown when dependency diagnostics fail`,
                }),
              ));
          });
      }),
      (t[28] = C),
      (t[29] = b),
      (t[30] = a),
      (t[31] = i),
      (t[32] = F),
      (t[33] = R))
    : (R = t[33]);
  let le = R,
    z;
  t[34] !== b ||
  t[35] !== a ||
  t[36] !== re ||
  t[37] !== O ||
  t[38] !== i ||
  t[39] !== F
    ? ((z = () => {
        let e = Date.now();
        O.mutateAsync({ release: re })
          .then((t) => {
            (ce(
              i,
              me,
              Bt({
                bundleVersion: t.bundleVersion,
                durationMs: Date.now() - e,
                status: t.status,
              }),
            ),
              b.refetch(),
              F.success(
                a.formatMessage({
                  id: `settings.agent.dependencies.reset.installed`,
                  defaultMessage: `Codex dependencies were reinstalled`,
                  description: `Toast shown when dependency reset and reinstall succeeds`,
                }),
              ));
          })
          .catch((t) => {
            if (It(t)) {
              (i.set(Ze, null),
                b.refetch(),
                ce(
                  i,
                  me,
                  Bt({
                    bundleVersion: null,
                    durationMs: Date.now() - e,
                    status: `canceled`,
                  }),
                ),
                F.info(
                  a.formatMessage({
                    id: `settings.agent.dependencies.reset.canceled`,
                    defaultMessage: `Codex dependency download canceled`,
                    description: `Toast shown when dependency reset and reinstall is canceled`,
                  }),
                  { id: `install-primary-runtime` },
                ));
              return;
            }
            (ce(
              i,
              me,
              Bt({
                bundleVersion: null,
                durationMs: Date.now() - e,
                status: `failed`,
              }),
            ),
              F.danger(
                a.formatMessage({
                  id: `settings.agent.dependencies.reset.failed`,
                  defaultMessage: `Couldn’t reinstall Codex dependencies`,
                  description: `Toast shown when dependency reset fails`,
                }),
              ));
          });
      }),
      (t[34] = b),
      (t[35] = a),
      (t[36] = re),
      (t[37] = O),
      (t[38] = i),
      (t[39] = F),
      (t[40] = z))
    : (z = t[40]);
  let ue = z,
    fe;
  t[41] !== M || t[42] !== b || t[43] !== a || t[44] !== i || t[45] !== F
    ? ((fe = () => {
        M.mutateAsync()
          .then((e) => {
            let { canceled: t } = e;
            if ((i.set(Ze, null), b.refetch(), !t)) {
              F.info(
                a.formatMessage({
                  id: `settings.agent.dependencies.cancel.noop`,
                  defaultMessage: `No Codex dependency download is running`,
                  description: `Toast shown when canceling a Codex dependency download but no download is running`,
                }),
              );
              return;
            }
            F.info(
              a.formatMessage({
                id: `settings.agent.dependencies.cancel.canceled`,
                defaultMessage: `Canceling Codex dependency download`,
                description: `Toast shown after requesting cancellation of a Codex dependency download`,
              }),
              { id: `install-primary-runtime` },
            );
          })
          .catch(() => {
            F.danger(
              a.formatMessage({
                id: `settings.agent.dependencies.cancel.failed`,
                defaultMessage: `Couldn’t cancel Codex dependency download`,
                description: `Toast shown when canceling a Codex dependency download fails`,
              }),
            );
          });
      }),
      (t[41] = M),
      (t[42] = b),
      (t[43] = a),
      (t[44] = i),
      (t[45] = F),
      (t[46] = fe))
    : (fe = t[46]);
  let pe = fe,
    he;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(P, { ...X.workspaceDependencies }),
      })),
      (t[47] = he))
    : (he = t[47]);
  let _e, ve;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(P, { ...X.codexDependencies })),
      (ve = (0, $.jsx)(P, {
        id: `settings.agent.dependencies.enabled.description`,
        defaultMessage: `Allow ChatGPT to install and expose bundled Node.js and Python tools`,
        description: `Description for the Codex dependencies enabled toggle`,
      })),
      (t[48] = _e),
      (t[49] = ve))
    : ((_e = t[48]), (ve = t[49]));
  let ye = u || f.isPending || m == null,
    be;
  t[50] !== re || t[51] !== T || t[52] !== f
    ? ((be = (e) => {
        f.mutate(
          { enabled: e, featureName: ie },
          {
            onSuccess: () => {
              e && T.mutate({ release: re });
            },
          },
        );
      }),
      (t[50] = re),
      (t[51] = T),
      (t[52] = f),
      (t[53] = be))
    : (be = t[53]);
  let B;
  t[54] === a
    ? (B = t[55])
    : ((B = a.formatMessage({
        id: `settings.agent.dependencies.enabled.ariaLabel`,
        defaultMessage: `Enable Codex dependencies`,
        description: `Aria label for the Codex dependencies enabled toggle`,
      })),
      (t[54] = a),
      (t[55] = B));
  let V;
  t[56] !== g || t[57] !== ye || t[58] !== be || t[59] !== B
    ? ((V = (0, $.jsx)(J, {
        label: _e,
        description: ve,
        control: (0, $.jsx)(Ot, {
          checked: g,
          disabled: ye,
          onChange: be,
          ariaLabel: B,
        }),
      })),
      (t[56] = g),
      (t[57] = ye),
      (t[58] = be),
      (t[59] = B),
      (t[60] = V))
    : (V = t[60]);
  let xe, Se;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, $.jsx)(P, { ...X.diagnoseWorkspaceDependencies })),
      (Se = (0, $.jsx)(P, {
        id: `settings.agent.dependencies.diagnose.description`,
        defaultMessage: `Checks the current bundle and records diagnostic logs`,
        description: `Description for dependency diagnostics in settings`,
      })),
      (t[61] = xe),
      (t[62] = Se))
    : ((xe = t[61]), (Se = t[62]));
  let H, Ce;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(h, { className: `icon-2xs` })),
      (Ce = (0, $.jsx)(P, {
        id: `settings.agent.dependencies.diagnose.button`,
        defaultMessage: `Diagnose`,
        description: `Button label for dependency diagnostics`,
      })),
      (t[63] = H),
      (t[64] = Ce))
    : ((H = t[63]), (Ce = t[64]));
  let we;
  t[65] !== C.isPending || t[66] !== le || t[67] !== O.isPending
    ? ((we = (0, $.jsx)(J, {
        label: xe,
        description: Se,
        control: (0, $.jsxs)(S, {
          color: `secondary`,
          size: `toolbar`,
          loading: C.isPending,
          disabled: O.isPending,
          onClick: le,
          children: [H, Ce],
        }),
      })),
      (t[65] = C.isPending),
      (t[66] = le),
      (t[67] = O.isPending),
      (t[68] = we))
    : (we = t[68]);
  let Te, Ee;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(P, { ...X.resetWorkspaceDependencies })),
      (Ee = (0, $.jsx)(P, {
        id: `settings.agent.dependencies.reset.description`,
        defaultMessage: `Deletes the local bundle, downloads it again, and reloads tools`,
        description: `Description for resetting and reinstalling dependencies in settings`,
      })),
      (t[69] = Te),
      (t[70] = Ee))
    : ((Te = t[69]), (Ee = t[70]));
  let De = L ? M.isPending : O.isPending,
    Oe = !g || (L ? M.isPending : oe),
    ke = L ? pe : ue,
    U;
  t[71] === L
    ? (U = t[72])
    : ((U = L
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(Ue, { className: `icon-2xs` }),
              (0, $.jsx)(P, {
                id: `settings.agent.dependencies.cancel.button`,
                defaultMessage: `Cancel download`,
                description: `Button label for canceling dependency download`,
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(ge, { className: `icon-2xs` }),
              (0, $.jsx)(P, {
                id: `settings.agent.dependencies.reset.button`,
                defaultMessage: `Reinstall`,
                description: `Button label for resetting and reinstalling dependencies`,
              }),
            ],
          })),
      (t[71] = L),
      (t[72] = U));
  let je;
  t[73] !== De || t[74] !== Oe || t[75] !== ke || t[76] !== U
    ? ((je = (0, $.jsx)(J, {
        label: Te,
        description: Ee,
        control: (0, $.jsx)(S, {
          color: `danger`,
          size: `toolbar`,
          loading: De,
          disabled: Oe,
          onClick: ke,
          children: U,
        }),
      })),
      (t[73] = De),
      (t[74] = Oe),
      (t[75] = ke),
      (t[76] = U),
      (t[77] = je))
    : (je = t[77]);
  let W;
  t[78] !== V || t[79] !== we || t[80] !== je
    ? ((W = (0, $.jsx)(Y.Content, {
        children: (0, $.jsxs)(St, { children: [V, we, je] }),
      })),
      (t[78] = V),
      (t[79] = we),
      (t[80] = je),
      (t[81] = W))
    : (W = t[81]);
  let Ne;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, $.jsx)(P, { ...X.currentDependencyVersion })), (t[82] = Ne))
    : (Ne = t[82]);
  let G;
  t[83] !== se || t[84] !== b.isLoading || t[85] !== L || t[86] !== N
    ? ((G = L
        ? Zt(N, Xt(N))
        : b.isLoading
          ? (0, $.jsx)(P, {
              id: `settings.agent.dependencies.bundleVersion.loading`,
              defaultMessage: `Checking…`,
              description: `Status while loading the current dependency bundle version`,
            })
          : (se ??
            (0, $.jsx)(P, {
              id: `settings.agent.dependencies.bundleVersion.notInstalled`,
              defaultMessage: `Not installed`,
              description: `Status when dependency bundle version is unavailable`,
            }))),
      (t[83] = se),
      (t[84] = b.isLoading),
      (t[85] = L),
      (t[86] = N),
      (t[87] = G))
    : (G = t[87]);
  let K;
  t[88] === G
    ? (K = t[89])
    : ((K = (0, $.jsxs)(`span`, {
        className: `inline-flex flex-wrap gap-x-1`,
        children: [Ne, (0, $.jsx)(`span`, { children: G })],
      })),
      (t[88] = G),
      (t[89] = K));
  let q;
  t[90] === b.data?.problems.length
    ? (q = t[91])
    : ((q = b.data?.problems.length
        ? (0, $.jsx)(`span`, {
            children: (0, $.jsx)(P, {
              id: `settings.agent.dependencies.bundleVersion.problemDescription`,
              defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
              description: `Description shown when dependency diagnostics have problems`,
            }),
          })
        : null),
      (t[90] = b.data?.problems.length),
      (t[91] = q));
  let Pe;
  t[92] !== K || t[93] !== q
    ? ((Pe = (0, $.jsxs)(Y.Footer, {
        className: `flex flex-col gap-1`,
        children: [K, q],
      })),
      (t[92] = K),
      (t[93] = q),
      (t[94] = Pe))
    : (Pe = t[94]);
  let Fe;
  return (
    t[95] !== W || t[96] !== Pe
      ? ((Fe = (0, $.jsxs)(Y, { children: [he, W, Pe] })),
        (t[95] = W),
        (t[96] = Pe),
        (t[97] = Fe))
      : (Fe = t[97]),
    Fe
  );
}
function kn(e) {
  return e.name === ie;
}
function An({ hostId: e }) {
  let t = Ve(),
    r = Te(),
    i = T(),
    [a, s] = (0, Un.useState)(null),
    [c, l] = (0, Un.useState)(null),
    [u, d] = (0, Un.useState)({}),
    f = o(ve),
    h = Kt(r.state),
    g = h.hasValue
      ? e === `local`
        ? h.workspaceRoot
        : null
      : e === `local`
        ? f
        : null,
    _ = we(e),
    { data: v, isPending: b } = fe(g, {
      hostId: e,
      cwdMode: e === `local` ? `fallback-to-workspace` : `preserve-null`,
    }),
    { data: x, isPending: w } = Ie(pe, { hostId: e }),
    E = je(`open-file`),
    D = v?.config ?? null,
    k = v?.layers ?? null,
    A = v?.origins ?? null,
    j = x?.requirements ?? null,
    ee = Nn(k, t),
    te = k?.find((e) => e.name.type === `user`) ?? null,
    ie = k?.find((e) => L(e.name)) ?? null,
    N = _ == null ? null : `${_}/config.toml`,
    ae = te == null ? N : U(te.name),
    F = {
      key: `user`,
      kind: `user`,
      label: t.formatMessage(X.userConfig),
      tooltipText: ae ?? `~/.codex/config.toml`,
      filePath: ae,
      expectedVersion: te?.version ?? null,
      workspaceRoot: null,
      layer: te,
    },
    oe =
      ie == null
        ? null
        : {
            key: `managed`,
            kind: `managed`,
            label: t.formatMessage(X.adminConfig),
            tooltipText: t.formatMessage({
              id: `settings.agent.configuration.scope.managedDescription`,
              defaultMessage: `Managed by admin policy`,
              description: `Tooltip text for the admin config scope in configuration settings`,
            }),
            filePath: U(ie.name),
            expectedVersion: ie.version,
            workspaceRoot: null,
            layer: ie,
          },
    I = [...ee, F, ...(oe == null ? [] : [oe])],
    se = ee.length > 0,
    ce = g == null ? (I[0]?.key ?? null) : `project:${g}`,
    R =
      I.find((e) => e.key === a) ?? I.find((e) => e.key === ce) ?? I[0] ?? null,
    { data: le } = Ie(Ht, {
      cwd:
        R?.workspaceRoot == null
          ? g == null
            ? null
            : We(g)
          : We(R.workspaceRoot),
      hostId: e,
    }),
    z = In(R?.layer?.config ?? null),
    de = Vn(D?.approval_policy ?? null) ?? `on-request`,
    me = D?.sandbox_mode == null ? `read-only` : D.sandbox_mode,
    he = z.sandboxMode == null && me === `workspace-write`,
    ge = z.sandboxMode === `workspace-write` || he,
    _e = z.approvalPolicy ?? de,
    ye = z.sandboxMode ?? me,
    be = zn(_e),
    B = Bn(ye),
    V = z.networkAccess ?? D?.sandbox_workspace_write?.network_access ?? !1,
    xe = A == null ? null : ue(A, `approval_policy`, [`approvalPolicy`]),
    Se = A == null ? null : ue(A, `sandbox_mode`),
    H = A == null ? null : ue(A, `sandbox_workspace_write`, [`network_access`]),
    Ee = R?.kind === `project` ? (R.layer?.disabledReason ?? null) : null,
    De = Ln(R, t),
    Oe = Wn.filter((e) =>
      j?.allowedApprovalPolicies == null ||
      j.allowedApprovalPolicies.length === 0
        ? !0
        : j.allowedApprovalPolicies.includes(e.value),
    ),
    ke = Kn.filter((e) =>
      j?.allowedSandboxModes == null || j.allowedSandboxModes.length === 0
        ? !0
        : j.allowedSandboxModes.includes(e.value),
    );
  async function Ae(t, r, a) {
    if (!(R == null || R.filePath == null) && c == null) {
      (l(t), d((e) => ({ ...e, [t]: void 0 })));
      try {
        if (R.kind === `project`)
          await tn({ filePath: R.filePath, keyPath: r, value: a });
        else {
          let t = R.kind === `user` ? await Ce(i, e) : null;
          await C(`write-config-value`, {
            hostId: e,
            keyPath: r,
            value: a,
            mergeStrategy: `upsert`,
            filePath: t ? t.filePath : R.filePath,
            expectedVersion: t == null ? R.expectedVersion : t.expectedVersion,
          });
        }
        (await i.invalidateQueries({ queryKey: [...re, e] }),
          await Promise.all([
            i.invalidateQueries({ queryKey: [...y, e] }),
            i.invalidateQueries({ queryKey: [...n, e] }),
          ]));
      } catch (e) {
        d((n) => ({
          ...n,
          [t]: e instanceof Error ? e.message : `Unable to save`,
        }));
      } finally {
        l(null);
      }
    }
  }
  let Me = b || w,
    W = Rn({
      intl: t,
      scopeLockReason: De,
      origin: xe,
      selectedScope: R,
      hasOptions: Oe.length > 0,
      restrictedMessage: t.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    Ne = Rn({
      intl: t,
      scopeLockReason: De,
      origin: Se,
      selectedScope: R,
      hasOptions: ke.length > 0,
      restrictedMessage: t.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    G = Rn({
      intl: t,
      scopeLockReason: De,
      origin: H,
      selectedScope: R,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    K = Me || c != null || Ee != null,
    q = (e) => {
      (s(e), d({}));
    };
  return (0, $.jsxs)(Y, {
    children: [
      (0, $.jsx)(Y.Header, {
        title: (0, $.jsxs)(M, {
          align: `start`,
          contentWidth: `menuWide`,
          disabled: I.length === 0,
          triggerButton: (0, $.jsx)(lt, {
            disabled: I.length === 0,
            contentClassName: `truncate`,
            children:
              R?.label ??
              t.formatMessage({
                id: `settings.agent.configuration.scope.loading`,
                defaultMessage: `Loading…`,
                description: `Fallback label while config scope options are loading`,
              }),
          }),
          children: [
            se
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(p.Section, {
                      children: [
                        (0, $.jsx)(p.SectionLabel, {
                          children: (0, $.jsx)(P, { ...X.projectConfig }),
                        }),
                        ee.map((e) =>
                          (0, $.jsx)(
                            jn,
                            {
                              scopeOption: e,
                              selected: R?.key === e.key,
                              onSelect: () => {
                                q(e.key);
                              },
                            },
                            e.key,
                          ),
                        ),
                      ],
                    }),
                    (0, $.jsx)(p.Separator, {}),
                  ],
                })
              : null,
            (0, $.jsxs)(p.Section, {
              children: [
                (0, $.jsx)(p.SectionLabel, {
                  children: (0, $.jsx)(P, { ...X.globalConfig }),
                }),
                (0, $.jsx)(jn, {
                  scopeOption: F,
                  selected: R?.key === F.key,
                  onSelect: () => {
                    q(F.key);
                  },
                }),
                oe == null
                  ? null
                  : (0, $.jsx)(jn, {
                      scopeOption: oe,
                      selected: R?.key === oe.key,
                      onSelect: () => {
                        q(oe.key);
                      },
                    }),
              ],
            }),
          ],
        }),
        actions: (0, $.jsxs)(S, {
          color: `ghost`,
          size: `toolbar`,
          disabled: R?.filePath == null,
          onClick: () => {
            R?.filePath != null &&
              ne({
                path: R.filePath,
                cwd: R.workspaceRoot == null ? null : We(R.workspaceRoot),
                hostId: e,
                target: le?.preferredTarget,
                openFile: E.mutate,
              });
          },
          children: [
            (0, $.jsx)(P, {
              id: `settings.agent.configuration.scope.open`,
              defaultMessage: `Open config.toml`,
              description: `Button label to open the selected config file`,
            }),
            (0, $.jsx)(m, { className: `icon-2xs` }),
          ],
        }),
      }),
      (0, $.jsxs)(Y.Content, {
        children: [
          Ee == null
            ? null
            : (0, $.jsx)(At, { content: Ee, Icon: tt, type: `warning` }),
          (0, $.jsxs)(St, {
            children: [
              (0, $.jsx)(J, {
                label: (0, $.jsx)(P, { ...X.approvalPolicy }),
                description: (0, $.jsx)(Mn, {
                  error: u.approval,
                  lockReason: W,
                  children: (0, $.jsx)(P, {
                    id: `settings.agent.configuration.approval.definition`,
                    defaultMessage: `Choose when ChatGPT asks for approval`,
                    description: `Definition for approval policy in configuration settings`,
                  }),
                }),
                control: (0, $.jsx)(M, {
                  align: `end`,
                  contentWidth: `panelWide`,
                  disabled: K || W != null,
                  triggerButton: (0, $.jsx)(lt, {
                    disabled: K || W != null,
                    contentClassName: `truncate`,
                    children: be == null ? _e : t.formatMessage(be.label),
                  }),
                  children: Oe.map((e) =>
                    (0, $.jsx)(
                      p.Item,
                      {
                        RightIcon: e.value === _e ? O : void 0,
                        subTextAllowWrap: !0,
                        onSelect: () => {
                          Ae(`approval`, `approval_policy`, e.value);
                        },
                        SubText: (0, $.jsx)(`div`, {
                          className: `pt-1 text-sm text-token-text-secondary`,
                          children: e.description,
                        }),
                        children: (0, $.jsx)(`span`, {
                          className: `text-sm`,
                          children: t.formatMessage(e.label),
                        }),
                      },
                      e.value,
                    ),
                  ),
                }),
              }),
              (0, $.jsx)(J, {
                label: (0, $.jsx)(P, { ...X.sandboxSettings }),
                description: (0, $.jsx)(Mn, {
                  error: u.sandbox,
                  lockReason: Ne,
                  children: (0, $.jsx)(P, {
                    id: `settings.agent.configuration.sandbox.definition`,
                    defaultMessage: `Choose how much ChatGPT can do when running commands`,
                    description: `Definition for sandbox settings in configuration settings`,
                  }),
                }),
                control: (0, $.jsx)(M, {
                  align: `end`,
                  contentWidth: `panelWide`,
                  disabled: K || Ne != null,
                  triggerButton: (0, $.jsx)(lt, {
                    disabled: K || Ne != null,
                    contentClassName: `truncate`,
                    children: B == null ? ye : t.formatMessage(B.label),
                  }),
                  children: ke.map((e) =>
                    (0, $.jsx)(
                      p.Item,
                      {
                        RightIcon: e.value === ye ? O : void 0,
                        subTextAllowWrap: !0,
                        onSelect: () => {
                          Ae(`sandbox`, `sandbox_mode`, e.value);
                        },
                        SubText: (0, $.jsx)(`div`, {
                          className: `pt-1 text-sm text-token-text-secondary`,
                          children: e.description,
                        }),
                        children: (0, $.jsx)(`span`, {
                          className: `text-sm`,
                          children: t.formatMessage(e.label),
                        }),
                      },
                      e.value,
                    ),
                  ),
                }),
              }),
              ge
                ? (0, $.jsx)(J, {
                    label: (0, $.jsx)(P, { ...X.networkAccess }),
                    description: (0, $.jsx)(Mn, {
                      error: u.network,
                      lockReason: G,
                      children: (0, $.jsx)(P, {
                        id: `settings.agent.configuration.network.definition`,
                        defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                        description: `Definition for network access in configuration settings`,
                      }),
                    }),
                    control: (0, $.jsx)(Ot, {
                      checked: V,
                      disabled: K || G != null,
                      onChange: (e) => {
                        Ae(
                          `network`,
                          `sandbox_workspace_write.network_access`,
                          e,
                        );
                      },
                      ariaLabel: t.formatMessage({
                        id: `settings.agent.configuration.network.ariaLabel`,
                        defaultMessage: `Allow network access`,
                        description: `Aria label for network access toggle in configuration settings`,
                      }),
                    }),
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}
function jn(e) {
  let t = (0, Hn.c)(7),
    { onSelect: n, scopeOption: r, selected: i } = e,
    a = i ? O : void 0,
    o;
  t[0] === r.label
    ? (o = t[1])
    : ((o = (0, $.jsx)(`span`, {
        className: `truncate text-sm`,
        children: r.label,
      })),
      (t[0] = r.label),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r.tooltipText || t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(p.Item, {
          RightIcon: a,
          tooltipText: r.tooltipText,
          tooltipSide: `right`,
          onSelect: n,
          children: o,
        })),
        (t[2] = n),
        (t[3] = r.tooltipText),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Mn(e) {
  let t = (0, Hn.c)(10),
    { children: n, error: r, lockReason: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, $.jsx)(`div`, { children: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `inline-flex items-center gap-1 text-sm text-token-editor-warning-foreground`,
              children: [
                (0, $.jsx)(et, { className: `icon-2xs` }),
                (0, $.jsx)(`span`, { children: i }),
              ],
            })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === r
    ? (s = t[5])
    : ((s =
        r == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-sm text-token-error-foreground`,
              children: r,
            })),
      (t[4] = r),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          children: [a, o, s],
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Nn(e, t) {
  if (e == null) return [];
  let n = [];
  for (let r of e) {
    if (r.name.type !== `project`) continue;
    let e = Pn(r.name.dotCodexFolder);
    n.push({
      key: `project:${e ?? r.name.dotCodexFolder}`,
      kind: `project`,
      label: t.formatMessage(
        {
          id: `settings.agent.configuration.scope.project`,
          defaultMessage: `{repoName}`,
          description: `Label for a project config scope in configuration settings`,
        },
        { repoName: Fn(e ?? r.name.dotCodexFolder) },
      ),
      tooltipText: U(r.name) ?? r.name.dotCodexFolder,
      filePath: U(r.name),
      expectedVersion: r.version,
      workspaceRoot: e,
      layer: r,
    });
  }
  return n;
}
function Pn(e) {
  return e.endsWith(`/.codex`) || e.endsWith(`\\.codex`)
    ? e.slice(0, -7)
    : null;
}
function Fn(e) {
  return e.split(/[/\\]/).at(-1) || e;
}
function In(e) {
  if (typeof e != `object` || !e || Array.isArray(e))
    return { approvalPolicy: null, sandboxMode: null, networkAccess: null };
  let t = e.approval_policy,
    n = e.sandbox_mode,
    r = e.sandbox_workspace_write;
  return {
    approvalPolicy: Vn(t ?? null),
    sandboxMode:
      n === `read-only` || n === `workspace-write` || n === `danger-full-access`
        ? n
        : null,
    networkAccess:
      typeof r == `object` &&
      r &&
      !Array.isArray(r) &&
      typeof r.network_access == `boolean`
        ? r.network_access
        : null,
  };
}
function Ln(e, t) {
  return e == null
    ? t.formatMessage({
        id: `settings.agent.configuration.scope.unavailable`,
        defaultMessage: `Config scope unavailable.`,
        description: `Message shown when no config scope is available in configuration settings`,
      })
    : e.filePath == null
      ? t.formatMessage({
          id: `settings.agent.configuration.scope.readOnly`,
          defaultMessage: `This config source cannot be edited here.`,
          description: `Message shown when the selected config scope cannot be edited`,
        })
      : null;
}
function Rn({
  intl: e,
  scopeLockReason: t,
  origin: n,
  selectedScope: r,
  hasOptions: i,
  restrictedMessage: a,
}) {
  return (
    t ??
    (i
      ? r?.kind !== `managed` && n != null && L(n.name)
        ? e.formatMessage({
            id: `settings.agent.configuration.control.managed`,
            defaultMessage: `This value is managed by admin policy.`,
            description: `Message shown when a configuration control is managed by admin policy`,
          })
        : null
      : a)
  );
}
function zn(e) {
  return e === Gn.value ? Gn : (Wn.find((t) => t.value === e) ?? null);
}
function Bn(e) {
  return Kn.find((t) => t.value === e) ?? null;
}
function Vn(e) {
  return e === `untrusted` ||
    e === `on-request` ||
    e === `never` ||
    e === `on-failure`
    ? e
    : null;
}
var Hn, Un, $, Wn, Gn, Kn;
e(() => {
  ((Hn = g()),
    E(),
    Re(),
    N(),
    r(),
    (Un = t(b(), 1)),
    H(),
    v(),
    s(),
    x(),
    Mt(),
    zt(),
    Ft(),
    Lt(),
    Ke(),
    $t(),
    Qe(),
    kt(),
    w(),
    B(),
    Se(),
    be(),
    Oe(),
    ut(),
    R(),
    Dt(),
    xe(),
    Tt(),
    Ut(),
    Fe(),
    I(),
    ze(),
    f(),
    He(),
    De(),
    $e(),
    _(),
    nt(),
    a(),
    G(),
    ye(),
    q(),
    se(),
    le(),
    d(),
    ct(),
    en(),
    dn(),
    vn(),
    Cn(),
    Vt(),
    it(),
    qt(),
    Et(),
    st(),
    Ct(),
    j(),
    Je(),
    ke(),
    ft(),
    he(),
    oe(),
    ($ = V()),
    (Wn = [
      {
        value: `untrusted`,
        label: X.untrusted,
        description: `Always ask before taking action`,
      },
      {
        value: `on-request`,
        label: X.onRequest,
        description: `Ask when escalation is requested`,
      },
      {
        value: `never`,
        label: X.never,
        description: `Run without asking for approval`,
      },
    ]),
    (Gn = {
      value: `on-failure`,
      label: X.onFailure,
      description: `Ask when a command fails`,
    }),
    (Kn = [
      {
        value: `read-only`,
        label: X.readOnly,
        description: `Can read files, but cannot edit them`,
      },
      {
        value: `workspace-write`,
        label: X.workspaceWrite,
        description: `Can edit files, but only in this workspace`,
      },
      {
        value: `danger-full-access`,
        label: X.fullAccess,
        description: `Can edit files outside this workspace`,
      },
    ]));
})();
export { wn as AgentSettings };
//# sourceMappingURL=agent-settings-kbVCKk1l.js.map
