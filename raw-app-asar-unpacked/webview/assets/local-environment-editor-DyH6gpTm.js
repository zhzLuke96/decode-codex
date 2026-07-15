import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  C0 as r,
  CV as i,
  CZ as a,
  DK as o,
  Dm as s,
  Ds as c,
  I2 as l,
  KJ as u,
  L2 as d,
  Mq as f,
  Nq as p,
  Om as m,
  S0 as h,
  SK as g,
  SV as _,
  SZ as v,
  Ts as y,
  _0 as b,
  _Y as x,
  aJ as S,
  aO as C,
  aS as w,
  bG as T,
  bK as ee,
  cD as E,
  cO as te,
  cY as ne,
  dl as re,
  eO as ie,
  fY as D,
  gl as ae,
  hl as O,
  js as k,
  k2 as A,
  kK as j,
  lD as oe,
  mY as M,
  ml as N,
  nJ as se,
  pY as P,
  pl as ce,
  qJ as le,
  sO as ue,
  sS as de,
  sY as fe,
  vu as pe,
  w0 as F,
  x2 as me,
  xX as he,
  xZ as ge,
  y2 as I,
  yG as _e,
  yY as ve,
  yZ as ye,
  yu as L,
  zr as R,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { Xt as z, Yt as be } from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  c as B,
  s as V,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  An as H,
  kn as U,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  Kt as W,
  g as G,
  h as xe,
  qt as Se,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  f as Ce,
  p as we,
  v as Te,
  y as Ee,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  a as De,
  i as Oe,
  r as ke,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ohr1dwam-BzJsIjl2.js";
import {
  n as Ae,
  t as K,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as je, t as Me } from "./play-outline-CI5mz10v.js";
import { n as Ne, t as Pe } from "./flask-48mBS85e.js";
import { n as Fe, t as Ie } from "./esm-Dk007VCu.js";
function Le(e) {
  let t = (0, Re.c)(5),
    { icon: n, className: r } = e,
    i = Be[n],
    a;
  t[0] === r ? (a = t[1]) : ((a = u(`icon-sm`, r)), (t[0] = r), (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== a
      ? ((o = (0, ze.jsx)(i, { className: a })),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Re,
  ze,
  Be,
  Ve = e(() => {
    ((Re = l()),
      le(),
      m(),
      Ne(),
      je(),
      L(),
      (ze = A()),
      (Be = { tool: pe, run: Me, debug: s, test: Pe }));
  }),
  He,
  Ue = e(() => {
    (M(),
      (He = [
        {
          value: `tool`,
          message: D({
            id: `settings.localEnvironments.actions.icon.tool`,
            defaultMessage: `Tool`,
            description: `Tool icon label for local environment actions`,
          }),
        },
        {
          value: `run`,
          message: D({
            id: `settings.localEnvironments.actions.icon.run`,
            defaultMessage: `Run`,
            description: `Run icon label for local environment actions`,
          }),
        },
        {
          value: `debug`,
          message: D({
            id: `settings.localEnvironments.actions.icon.debug`,
            defaultMessage: `Debug`,
            description: `Debug icon label for local environment actions`,
          }),
        },
        {
          value: `test`,
          message: D({
            id: `settings.localEnvironments.actions.icon.test`,
            defaultMessage: `Test`,
            description: `Test icon label for local environment actions`,
          }),
        },
      ]));
  });
function We(e) {
  return `defaultName` in e
    ? {
        actions: [],
        cleanupPlatformScripts: Ke(null),
        cleanupScript: ``,
        name: e.defaultName,
        setupPlatformScripts: Ke(null),
        setupScript: ``,
      }
    : {
        actions: (e.environment.actions ?? []).map((e) => ({
          ...e,
          id: crypto.randomUUID(),
          platform: e.platform ?? null,
        })),
        cleanupPlatformScripts: Ke(e.environment.cleanup),
        cleanupScript: e.environment.cleanup?.script ?? ``,
        name: e.environment.name,
        setupPlatformScripts: Ke(e.environment.setup),
        setupScript: e.environment.setup.script,
      };
}
function Ge() {
  return {
    id: crypto.randomUUID(),
    name: ``,
    icon: `tool`,
    command: ``,
    platform: null,
  };
}
function Ke(e) {
  return {
    darwin: e?.darwin?.script ?? ``,
    linux: e?.linux?.script ?? ``,
    win32: e?.win32?.script ?? ``,
  };
}
function qe(e, t) {
  return {
    incompleteActionIds: t.flatMap((e) =>
      e.name.trim().length > 0 == e.command.trim().length > 0 ? [] : [e.id],
    ),
    missingName: e.trim().length === 0,
  };
}
function Je(e, t = `default`) {
  return e === `action`
    ? tt
    : t === `win32`
      ? e === `setup`
        ? $e
        : et
      : e === `setup`
        ? Ze
        : Qe;
}
function Ye({
  version: e,
  name: t,
  setupScript: n,
  setupPlatformScripts: r,
  cleanupScript: i,
  cleanupPlatformScripts: a,
  actions: o,
}) {
  let s = o.flatMap((e) => {
      let t = e.name.trim(),
        n = e.command.trim();
      return t.length === 0 || n.length === 0
        ? []
        : [{ ...e, command: n, name: t }];
    }),
    c = [];
  (c.push(`# THIS IS AUTOGENERATED. DO NOT EDIT MANUALLY`),
    c.push(`version = ${e}`),
    c.push(`name = ${q(t.trim())}`),
    Xe(c, `setup`, n, r),
    Xe(c, `cleanup`, i, a),
    s.length > 0 && c.push(``));
  for (let e of s)
    (c.push(`[[actions]]`),
      c.push(`name = ${q(e.name)}`),
      e.icon && c.push(`icon = ${q(e.icon)}`),
      c.push(`command = ${q(e.command)}`),
      e.platform && c.push(`platform = ${q(e.platform)}`),
      c.push(``));
  return `${c
    .join(
      `
`,
    )
    .trimEnd()}\n`;
}
function Xe(e, t, n, r) {
  let i = ge.flatMap((e) => {
    let t = r[e];
    return t == null || t.length === 0 ? [] : [{ platform: e, script: t }];
  });
  if (
    ((t === `setup` || n.length > 0 || i.length > 0) &&
      (e.push(``), e.push(`[${t}]`), e.push(`script = ${q(n)}`)),
    i.length !== 0)
  ) {
    e.push(``);
    for (let [n, r] of i.entries())
      (e.push(`[${t}.${r.platform}]`),
        e.push(`script = ${q(r.script)}`),
        n < i.length - 1 && e.push(``));
  }
}
function q(e) {
  let t = e.replace(
    /\r\n?/g,
    `
`,
  );
  return t.includes(`
`)
    ? t.includes(`'''`)
      ? `"""\n${t.replace(/\\/g, `\\\\`).replace(/"""/g, `\\"""`)}"""`
      : `'''\n${t}'''`
    : JSON.stringify(t);
}
var Ze,
  Qe,
  $e,
  et,
  tt,
  nt = e(() => {
    (n(),
      (Ze = `cd "$CODEX_WORKTREE_PATH"
pip install -r requirements.txt
npm install
./run/setup.sh`),
      (Qe = `docker compose down --remove-orphans
rm -rf .cache/tmp`),
      ($e = `python -m pip install -r requirements.txt
pnpm install`),
      (et = `docker compose down --remove-orphans`),
      (tt = `npm run dev`));
  }),
  J,
  rt = e(() => {
    (M(),
      (J = P({
        actionPlatforms: {
          id: `settings.localEnvironments.actions.item.platforms`,
          defaultMessage: `Platforms`,
          description: `Label for local environment action platforms`,
        },
        actionScript: {
          id: `settings.localEnvironments.actions.item.command`,
          defaultMessage: `Action script`,
          description: `Label for local environment action script`,
        },
        actionName: {
          id: `settings.localEnvironments.actions.item.name`,
          defaultMessage: `Name`,
          description: `Label for local environment action name`,
        },
        addAction: {
          id: `settings.localEnvironments.actions.add`,
          defaultMessage: `Add action`,
          description: `Button label to add a local environment action`,
        },
        actionsDescription: {
          id: `settings.localEnvironments.environment.actions.description`,
          defaultMessage: `These actions can run any command and will be displayed in the header`,
          description: `Description for local environment actions summary`,
        },
        actionsEmpty: {
          id: `settings.localEnvironments.actions.empty`,
          defaultMessage: `Add an action to run commands from the local toolbar`,
          description: `Empty state for local environment actions`,
        },
        actionsTitle: {
          id: `settings.localEnvironments.actions.title`,
          defaultMessage: `Actions`,
          description: `Title for local environment actions section`,
        },
        cleanupPlatformSelector: {
          id: `settings.localEnvironments.environment.cleanup.platformSelector`,
          defaultMessage: `Cleanup script platform`,
          description: `Accessible label for the cleanup script platform selector`,
        },
        cleanupDescription: {
          id: `settings.localEnvironments.environment.cleanup.description`,
          defaultMessage: `Runs at the project root before worktree cleanup`,
          description: `Description for the cleanup script input`,
        },
        cleanupScript: {
          id: `settings.localEnvironments.environment.cleanup.title`,
          defaultMessage: `Cleanup script`,
          description: `Title for the local environment cleanup script section`,
        },
        defaultEnvironmentName: {
          id: `settings.localEnvironments.environment.defaultName`,
          defaultMessage: `local`,
          description: `Fallback name for a local environment`,
        },
        environmentName: {
          id: `settings.localEnvironments.environment.name`,
          defaultMessage: `Name`,
          description: `Label for a local environment name`,
        },
        setupPlatformSelector: {
          id: `settings.localEnvironments.environment.setup.platformSelector`,
          defaultMessage: `Setup script platform`,
          description: `Accessible label for the setup script platform selector`,
        },
        setupScript: {
          id: `settings.localEnvironments.environment.setup`,
          defaultMessage: `Setup script`,
          description: `Label for a local environment setup script`,
        },
      })));
  });
async function it(e, t, n, r) {
  let i = [
    ...Array.from(new Set(n)).flatMap((e) => [
      se(`local-environment-config`, { configPath: e, hostId: t }),
      se(`local-environment`, { configPath: e, hostId: t }),
    ]),
    ...(r == null
      ? []
      : [se(`local-environments`, { hostId: t, workspaceRoot: r })]),
  ];
  await Promise.all(i.map((t) => e.invalidateQueries({ queryKey: t })));
}
var at = e(() => {
  S();
});
async function ot({
  configPath: e,
  expectedRevision: t,
  hostId: n,
  queryClient: r,
  raw: i,
  selectEnvironment: a,
  workspaceRoot: o,
}) {
  let s = _e.localEnvironments;
  if (s == null)
    throw Error(`Local environments are not supported by this host.`);
  let c = await s.saveConfig({
      configPath: e,
      expectedRevision: t,
      hostId: n,
      raw: i,
    }),
    l = c.configPath,
    u = it(r, n, [e, l], o);
  return c.type === `conflict`
    ? { type: `conflict` }
    : (await u,
      {
        configPath: l,
        type: (await a?.(l)) === !1 ? `selection-failed` : `success`,
      });
}
async function st({
  configPath: e,
  draft: t,
  expectedRevision: n,
  hostId: r,
  queryClient: i,
  selectEnvironment: a,
  version: o,
  workspaceRoot: s,
}) {
  let c = qe(t.name, t.actions);
  return c.missingName || c.incompleteActionIds.length > 0
    ? { type: `invalid` }
    : ot({
        configPath: e,
        expectedRevision: n,
        hostId: r,
        queryClient: i,
        raw: Ye({ version: o, ...t }),
        selectEnvironment: a,
        workspaceRoot: s,
      });
}
async function ct({
  codexWorktree: e,
  configPath: t,
  gitRoot: n,
  selectForWorkspace: r,
  selectForWorktree: i,
}) {
  return e ? (n == null ? !1 : i(n, t)) : (r(t), !0);
}
var lt = e(() => {
    (T(), at(), nt());
  }),
  ut,
  dt = e(() => {
    (M(),
      (ut = P({
        all: {
          id: `settings.localEnvironments.actions.item.platforms.all`,
          defaultMessage: `All platforms`,
          description: `Label for an action available on every platform`,
        },
        default: {
          id: `settings.localEnvironments.environment.script.default`,
          defaultMessage: `Default`,
          description: `Label for default local environment lifecycle script`,
        },
        darwin: {
          id: `settings.localEnvironments.actions.item.platforms.macos`,
          defaultMessage: `macOS`,
          description: `Label for macOS platform toggle`,
        },
        linux: {
          id: `settings.localEnvironments.actions.item.platforms.linux`,
          defaultMessage: `Linux`,
          description: `Label for Linux platform toggle`,
        },
        win32: {
          id: `settings.localEnvironments.actions.item.platforms.windows`,
          defaultMessage: `Windows`,
          description: `Label for Windows platform toggle`,
        },
      })));
  });
function ft(e) {
  let t = (0, pt.c)(10),
    { leadingOption: n, selectedId: r, onSelect: i, ariaLabel: a } = e,
    o = ve(),
    s;
  t[0] === n ? (s = t[1]) : ((s = [n, ...ge]), (t[0] = n), (t[1] = s));
  let c = s,
    l;
  t[2] !== o || t[3] !== c
    ? ((l = c.map((e) => {
        let t = o.formatMessage(ut[e]);
        return { id: e, label: t, ariaLabel: t };
      })),
      (t[2] = o),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== a || t[6] !== i || t[7] !== r || t[8] !== l
      ? ((u = (0, mt.jsx)(U, {
          className: `flex-wrap`,
          selectedId: r,
          onSelect: i,
          size: `default`,
          ariaLabel: a,
          options: l,
        })),
        (t[5] = a),
        (t[6] = i),
        (t[7] = r),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var pt,
  mt,
  ht = e(() => {
    ((pt = l()), n(), M(), H(), dt(), (mt = A()));
  });
function gt(e) {
  let t = (0, _t.c)(33),
    {
      actions: n,
      dropdownDisabled: r,
      incompleteActionIds: i,
      onChange: a,
    } = e,
    s = ve(),
    l,
    u,
    d,
    p,
    m,
    h;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== s || t[4] !== a) {
    let e;
    t[11] === s
      ? (e = t[12])
      : ((e = (e) => ({
          label: s.formatMessage(e.message),
          value: e.value,
          icon: (0, Y.jsx)(Le, { icon: e.value }),
        })),
        (t[11] = s),
        (t[12] = e));
    let g = He.map(e),
      _;
    t[13] !== n || t[14] !== a
      ? ((_ = (e, t) => {
          a(n.map((n) => (n.id === e ? { ...n, ...t } : n)));
        }),
        (t[13] = n),
        (t[14] = a),
        (t[15] = _))
      : (_ = t[15]);
    let v = _;
    u = K;
    let b;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, Y.jsx)(x, { ...J.actionsTitle })), (t[16] = b))
      : (b = t[16]);
    let S;
    t[17] !== n || t[18] !== a
      ? ((S = () => {
          a([...n, Ge()]);
        }),
        (t[17] = n),
        (t[18] = a),
        (t[19] = S))
      : (S = t[19]);
    let C;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, Y.jsx)(x, { ...J.addAction })), (t[20] = C))
      : (C = t[20]),
      t[21] === S
        ? (h = t[22])
        : ((h = (0, Y.jsx)(K.Header, {
            title: b,
            actions: (0, Y.jsx)(f, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              onClick: S,
              children: C,
            }),
          })),
          (t[21] = S),
          (t[22] = h)),
      (l = K.Content),
      (d = `gap-1`),
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, Y.jsx)(`div`, {
            className: `text-sm text-token-text-secondary`,
            children: (0, Y.jsx)(x, { ...J.actionsDescription }),
          })),
          (t[23] = p))
        : (p = t[23]),
      (m =
        n.length === 0
          ? (0, Y.jsx)(Ce, {
              children: (0, Y.jsx)(`div`, {
                className: `p-3 text-sm text-token-text-secondary`,
                children: (0, Y.jsx)(x, { ...J.actionsEmpty }),
              }),
            })
          : (0, Y.jsx)(`div`, {
              className: `flex flex-col gap-3`,
              children: n.map((e) => {
                let t = g.find((t) => t.value === (e.icon ?? `tool`)) ?? g[0],
                  l = i.includes(e.id),
                  u = l && e.name.trim().length === 0,
                  d = l && e.command.trim().length === 0,
                  p = `local-env-action-name-error-${e.id}`,
                  m = `local-env-action-command-error-${e.id}`;
                return (0, Y.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col gap-3 rounded-lg border border-token-border bg-token-input-background p-3`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                            htmlFor: `local-env-action-name-${e.id}`,
                            children: (0, Y.jsx)(x, { ...J.actionName }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, Y.jsx)(y, {
                                align: `start`,
                                contentWidth: `icon`,
                                disabled: r,
                                triggerButton: (0, Y.jsx)(f, {
                                  id: `local-env-action-icon-${e.id}`,
                                  className: `w-12 justify-center text-sm`,
                                  color: `secondary`,
                                  size: `toolbar`,
                                  type: `button`,
                                  "aria-label": t.label,
                                  children: t.icon,
                                }),
                                children: g.map((t) =>
                                  (0, Y.jsx)(
                                    c.Item,
                                    {
                                      onSelect: () => {
                                        v(e.id, { icon: t.value });
                                      },
                                      children: (0, Y.jsxs)(`span`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          t.icon,
                                          (0, Y.jsx)(`span`, {
                                            children: t.label,
                                          }),
                                        ],
                                      }),
                                    },
                                    t.value,
                                  ),
                                ),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `flex-1`,
                                children: (0, Y.jsx)(`input`, {
                                  id: `local-env-action-name-${e.id}`,
                                  className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                                  value: e.name,
                                  "aria-describedby": u ? p : void 0,
                                  "aria-invalid": u,
                                  onChange: (t) => {
                                    v(e.id, { name: t.target.value });
                                  },
                                }),
                              }),
                            ],
                          }),
                          u
                            ? (0, Y.jsx)(`div`, {
                                id: p,
                                className: `text-xs text-token-error-foreground`,
                                children: (0, Y.jsx)(x, {
                                  id: `settings.localEnvironments.actions.item.nameRequired`,
                                  defaultMessage: `Enter an action name`,
                                  description: `Inline validation for a missing local environment action name`,
                                }),
                              })
                            : null,
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                            htmlFor: `local-env-action-command-${e.id}`,
                            children: (0, Y.jsx)(x, { ...J.actionScript }),
                          }),
                          (0, Y.jsx)(`textarea`, {
                            id: `local-env-action-command-${e.id}`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            value: e.command,
                            placeholder: Je(`action`),
                            rows: 4,
                            "aria-describedby": d ? m : void 0,
                            "aria-invalid": d,
                            onChange: (t) => {
                              v(e.id, { command: t.target.value });
                            },
                          }),
                          d
                            ? (0, Y.jsx)(`div`, {
                                id: m,
                                className: `text-xs text-token-error-foreground`,
                                children: (0, Y.jsx)(x, {
                                  id: `settings.localEnvironments.actions.item.commandRequired`,
                                  defaultMessage: `Enter an action command`,
                                  description: `Inline validation for a missing local environment action command`,
                                }),
                              })
                            : null,
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `flex min-w-0 flex-col gap-2`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                children: (0, Y.jsx)(x, {
                                  ...J.actionPlatforms,
                                }),
                              }),
                              (0, Y.jsx)(ft, {
                                leadingOption: `all`,
                                selectedId: e.platform ?? `all`,
                                onSelect: (t) => {
                                  v(e.id, { platform: t === `all` ? null : t });
                                },
                                ariaLabel: s.formatMessage({
                                  id: `settings.localEnvironments.actions.item.platforms.selector`,
                                  defaultMessage: `Action platform`,
                                  description: `Aria label for the local environment action platform selector`,
                                }),
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`div`, {
                            className: `flex justify-end sm:justify-center`,
                            children: (0, Y.jsx)(o, {
                              tooltipContent: (0, Y.jsx)(x, {
                                id: `settings.localEnvironments.actions.item.tooltip.delete`,
                                defaultMessage: `Delete`,
                                description: `Tooltip for removing a local environment action`,
                              }),
                              children: (0, Y.jsx)(f, {
                                color: `ghost`,
                                size: `toolbar`,
                                type: `button`,
                                "aria-label": s.formatMessage({
                                  id: `settings.localEnvironments.actions.item.button.delete`,
                                  defaultMessage: `Delete`,
                                  description: `Label for removing a local environment action`,
                                }),
                                onClick: () => {
                                  a(n.filter((t) => t.id !== e.id));
                                },
                                children: (0, Y.jsx)(V, {
                                  className: `icon-sm`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s),
      (t[4] = a),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h));
  } else
    ((l = t[5]), (u = t[6]), (d = t[7]), (p = t[8]), (m = t[9]), (h = t[10]));
  let g;
  t[24] !== l || t[25] !== d || t[26] !== p || t[27] !== m
    ? ((g = (0, Y.jsxs)(l, { className: d, children: [p, m] })),
      (t[24] = l),
      (t[25] = d),
      (t[26] = p),
      (t[27] = m),
      (t[28] = g))
    : (g = t[28]);
  let _;
  return (
    t[29] !== u || t[30] !== h || t[31] !== g
      ? ((_ = (0, Y.jsxs)(u, { children: [h, g] })),
        (t[29] = u),
        (t[30] = h),
        (t[31] = g),
        (t[32] = _))
      : (_ = t[32]),
    _
  );
}
var _t,
  Y,
  vt = e(() => {
    ((_t = l()),
      M(),
      p(),
      k(),
      j(),
      B(),
      Ve(),
      Ue(),
      nt(),
      rt(),
      ht(),
      Ae(),
      we(),
      (Y = A()));
  }),
  yt,
  bt = e(() => {
    (M(),
      (yt = P({
        parseError: {
          id: `settings.localEnvironments.file.invalidEnvironmentWarning`,
          defaultMessage: `This environment file is invalid. Saving will replace its contents`,
          description: `Warning that saving an invalid local environment file will replace it`,
        },
        readError: {
          id: `settings.localEnvironments.file.readFailure`,
          defaultMessage: `Unable to load this environment file. Try again`,
          description: `Read error for a local environment file with guidance to retry`,
        },
        retry: {
          id: `settings.localEnvironments.retry`,
          defaultMessage: `Retry`,
          description: `Button label to retry loading local environment data`,
        },
      })));
  });
function xt(e) {
  let t = (0, St.c)(35),
    { actions: n, draft: r, scriptType: i, onScriptChange: a } = e,
    o = ve(),
    [s, c] = (0, Ct.useState)(`default`),
    l = i === `setup`,
    u;
  u =
    s === `default`
      ? l
        ? r.setupScript
        : r.cleanupScript
      : l
        ? (r.setupPlatformScripts[s] ?? ``)
        : (r.cleanupPlatformScripts[s] ?? ``);
  let d, f;
  t[0] === l
    ? ((d = t[1]), (f = t[2]))
    : ((d = l
        ? (0, X.jsx)(x, { ...J.setupScript })
        : (0, X.jsx)(x, { ...J.cleanupScript })),
      (f = l
        ? (0, X.jsx)(x, {
            id: `settings.localEnvironments.editor.setup.description`,
            defaultMessage: `Runs at the project root on worktree creation`,
            description: `Description for environment setup script summary`,
          })
        : (0, X.jsx)(x, { ...J.cleanupDescription })),
      (t[0] = l),
      (t[1] = d),
      (t[2] = f));
  let p;
  t[3] !== n || t[4] !== d || t[5] !== f
    ? ((p = (0, X.jsx)(K.Header, { title: d, subtitle: f, actions: n })),
      (t[3] = n),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== o || t[8] !== l
    ? ((m = l
        ? o.formatMessage(J.setupPlatformSelector)
        : o.formatMessage(J.cleanupPlatformSelector)),
      (t[7] = o),
      (t[8] = l),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== s || t[11] !== m
    ? ((h = (0, X.jsx)(ft, {
        leadingOption: `default`,
        selectedId: s,
        onSelect: c,
        ariaLabel: m,
      })),
      (t[10] = s),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let g = `local-environment-${i}-script-${s}`,
    _ = u,
    v;
  t[13] !== o || t[14] !== l
    ? ((v = l
        ? o.formatMessage(J.setupScript)
        : o.formatMessage({
            id: `settings.localEnvironments.environment.cleanup.input`,
            defaultMessage: `Cleanup script`,
            description: `Accessible label for the local environment cleanup script input`,
          })),
      (t[13] = o),
      (t[14] = l),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== i || t[17] !== s
    ? ((y = Je(i, s)), (t[16] = i), (t[17] = s), (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== a || t[20] !== i || t[21] !== s
    ? ((b = (e) => {
        a(i, s, e.target.value);
      }),
      (t[19] = a),
      (t[20] = i),
      (t[21] = s),
      (t[22] = b))
    : (b = t[22]);
  let S;
  t[23] !== u || t[24] !== b || t[25] !== g || t[26] !== v || t[27] !== y
    ? ((S = (0, X.jsx)(`textarea`, {
        id: g,
        className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
        value: _,
        "aria-label": v,
        placeholder: y,
        rows: 6,
        onChange: b,
      })),
      (t[23] = u),
      (t[24] = b),
      (t[25] = g),
      (t[26] = v),
      (t[27] = y),
      (t[28] = S))
    : (S = t[28]);
  let C;
  t[29] !== S || t[30] !== h
    ? ((C = (0, X.jsxs)(K.Content, { className: `gap-2`, children: [h, S] })),
      (t[29] = S),
      (t[30] = h),
      (t[31] = C))
    : (C = t[31]);
  let w;
  return (
    t[32] !== C || t[33] !== p
      ? ((w = (0, X.jsxs)(K, { children: [p, C] })),
        (t[32] = C),
        (t[33] = p),
        (t[34] = w))
      : (w = t[34]),
    w
  );
}
var St,
  Ct,
  X,
  wt = e(() => {
    ((St = l()), (Ct = t(d(), 1)), M(), nt(), rt(), ht(), Ae(), (X = A()));
  });
function Tt() {
  let e = (0, Dt.c)(4),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Z.jsx)(O, {
        asChild: !0,
        children: (0, Z.jsx)(f, {
          color: `secondary`,
          size: `toolbar`,
          className: `w-auto`,
          children: (0, Z.jsx)(x, {
            id: `settings.localEnvironments.environment.setup.envVars.button`,
            defaultMessage: `Variables`,
            description: `Button label that opens the setup env vars popover`,
          }),
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(N, {
        className: `px-2 py-1 text-sm font-medium text-token-text-primary`,
        children: (0, Z.jsx)(x, {
          id: `settings.localEnvironments.environment.setup.envVars.title`,
          defaultMessage: `Setup script environment variables`,
          description: `Title for the setup env vars popover`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(Et, {
        description: (0, Z.jsx)(x, {
          id: `settings.localEnvironments.environment.setup.envVars.sourcePath.description`,
          defaultMessage: `Source workspace path`,
          description: `Description for the source workspace setup env var`,
        }),
        variableName: v,
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsxs)(re, {
          children: [
            t,
            (0, Z.jsxs)(ce, {
              align: `end`,
              className: `w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1`,
              children: [
                n,
                (0, Z.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    r,
                    (0, Z.jsx)(Et, {
                      variableName: a,
                      description: (0, Z.jsx)(x, {
                        id: `settings.localEnvironments.environment.setup.envVars.worktreePath.description`,
                        defaultMessage: `New worktree path`,
                        description: `Description for the worktree setup env var`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
function Et(e) {
  let t = (0, Dt.c)(7),
    { variableName: n, description: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Z.jsx)(`div`, {
        className: `text-sm text-token-text-secondary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Z.jsx)(`div`, {
        className: `overflow-x-auto rounded-md border border-token-input-background bg-token-text-code-block-background px-2 py-1.5`,
        children: (0, Z.jsx)(`code`, {
          className: `block text-xs font-medium whitespace-nowrap text-token-text-primary`,
          children: n,
        }),
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-0.5 rounded-lg px-2 py-1`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var Dt,
  Z,
  Ot = e(() => {
    ((Dt = l()), n(), M(), p(), ae(), (Z = A()));
  });
function kt(e, t) {
  return t?.label ?? xe(e) ?? e;
}
var At = e(() => {
  G();
});
function jt(e) {
  let t = (0, Mt.c)(18),
    { workspaceRoot: n, workspaceGroup: r } = e,
    i;
  t[0] !== r || t[1] !== n
    ? ((i = kt(n, r)), (t[0] = r), (t[1] = n), (t[2] = i))
    : (i = t[2]);
  let a = i,
    o = r?.repositoryData?.rootFolder,
    s = o && o !== a ? `(${o})` : null,
    c = r?.isCodexWorktree ? W : be,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (0, Q.jsx)(c, { className: `icon-sm text-token-text-secondary` })),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] === a
    ? (u = t[6])
    : ((u = (0, Q.jsx)(`span`, { className: `truncate`, children: a })),
      (t[5] = a),
      (t[6] = u));
  let d;
  t[7] === s
    ? (d = t[8])
    : ((d = s
        ? (0, Q.jsx)(`span`, {
            className: `truncate text-xs text-token-description-foreground`,
            children: s,
          })
        : null),
      (t[7] = s),
      (t[8] = d));
  let f;
  t[9] !== u || t[10] !== d
    ? ((f = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [u, d],
      })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === n
    ? (p = t[13])
    : ((p = (0, Q.jsx)(`span`, { className: `truncate`, children: n })),
      (t[12] = n),
      (t[13] = p));
  let m;
  return (
    t[14] !== l || t[15] !== f || t[16] !== p
      ? ((m = (0, Q.jsx)(Te, {
          icon: l,
          label: f,
          description: p,
          control: null,
        })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var Mt,
  Q,
  Nt = e(() => {
    ((Mt = l()), z(), Se(), Ee(), At(), (Q = A()));
  });
function Pt(e) {
  let t = (0, zt.c)(70),
    {
      hostId: n,
      workspaceRoot: a,
      workspaceGroup: s,
      configPath: c,
      expectedRevision: l,
      initialEnvironment: u,
      hasParseError: d,
      hasReadError: p,
      onCancel: m,
      onDirtyChange: _,
      onDiscardConflict: v,
      onRetryRead: y,
      onSavingChange: b,
      onSaved: S,
    } = e,
    w = h(fe),
    T = ve(),
    ee;
  t[0] !== c ||
  t[1] !== l ||
  t[2] !== d ||
  t[3] !== u ||
  t[4] !== T ||
  t[5] !== a
    ? ((ee = () => ({
        configPath: c,
        draft: We(
          u == null
            ? {
                defaultName: xe(a) ?? T.formatMessage(J.defaultEnvironmentName),
              }
            : { environment: u },
        ),
        hasParseError: d,
        revision: l,
        version: u?.version ?? 1,
      })),
      (t[0] = c),
      (t[1] = l),
      (t[2] = d),
      (t[3] = u),
      (t[4] = T),
      (t[5] = a),
      (t[6] = ee))
    : (ee = t[6]);
  let [E] = (0, Vt.useState)(ee),
    { data: ne, error: re, refetch: ie } = de(n),
    D = ne?.codexHome,
    ae;
  t[7] !== D || t[8] !== s?.isCodexWorktree || t[9] !== a
    ? ((ae = s?.isCodexWorktree === !0 || (D != null && he(a, D))),
      (t[7] = D),
      (t[8] = s?.isCodexWorktree),
      (t[9] = a),
      (t[10] = ae))
    : (ae = t[10]);
  let O = ae,
    k = i(n),
    A = r(oe),
    j;
  t[11] !== k || t[12] !== a
    ? ((j = { cwd: a, hostConfig: k }), (t[11] = k), (t[12] = a), (t[13] = j))
    : (j = t[13]);
  let M;
  t[14] === A
    ? (M = t[15])
    : ((M = { retainRepoWatch: A }), (t[14] = A), (t[15] = M));
  let { data: N, error: se, refetch: P } = te(j, `local_environment_editor`, M),
    ce;
  t[16] !== n || t[17] !== a
    ? ((ce = { hostId: n, workspaceRoot: a }),
      (t[16] = n),
      (t[17] = a),
      (t[18] = ce))
    : (ce = t[18]);
  let { updateSelection: le } = De(ce),
    ue;
  t[19] !== N || t[20] !== k || t[21] !== w
    ? ((ue = {
        onSuccess: (e, t) => {
          !e.success || !N || Oe(w, N, k, t.value, `local_environment_editor`);
        },
      }),
      (t[19] = N),
      (t[20] = k),
      (t[21] = w),
      (t[22] = ue))
    : (ue = t[22]);
  let pe = C(`set-config-value`, k, ue),
    [F, ge] = (0, Vt.useState)(E.revision == null),
    I = F && ((s == null && re != null) || (O && se != null)),
    _e = !F || ((s != null || D != null) && (!O || N?.root != null)),
    L;
  t[23] !== O ||
  t[24] !== E.configPath ||
  t[25] !== E.revision ||
  t[26] !== E.version ||
  t[27] !== N?.root ||
  t[28] !== n ||
  t[29] !== F ||
  t[30] !== w ||
  t[31] !== pe ||
  t[32] !== le ||
  t[33] !== a
    ? ((L = (e) =>
        st({
          configPath: E.configPath,
          draft: e,
          expectedRevision: E.revision,
          hostId: n,
          queryClient: w.queryClient,
          selectEnvironment: F
            ? (e) =>
                ct({
                  codexWorktree: O,
                  configPath: e,
                  gitRoot: N?.root ?? null,
                  selectForWorkspace: le,
                  selectForWorktree: async (e, t) =>
                    (
                      await pe
                        .mutateAsync({
                          root: e,
                          key: ye,
                          operationSource: `local_environment_editor`,
                          value: t,
                          scope: `worktree`,
                        })
                        .catch(It)
                    )?.success === !0,
                })
            : void 0,
          version: E.version,
          workspaceRoot: a,
        })),
      (t[23] = O),
      (t[24] = E.configPath),
      (t[25] = E.revision),
      (t[26] = E.version),
      (t[27] = N?.root),
      (t[28] = n),
      (t[29] = F),
      (t[30] = w),
      (t[31] = pe),
      (t[32] = le),
      (t[33] = a),
      (t[34] = L))
    : (L = t[34]);
  let R, z;
  t[35] === b
    ? ((R = t[36]), (z = t[37]))
    : ((R = () => {
        b?.(!0);
      }),
      (z = () => {
        b?.(!1);
      }),
      (t[35] = b),
      (t[36] = R),
      (t[37] = z));
  let be;
  t[38] !== L || t[39] !== R || t[40] !== z
    ? ((be = {
        mutationFn: L,
        networkMode: `always`,
        onMutate: R,
        onSettled: z,
      }),
      (t[38] = L),
      (t[39] = R),
      (t[40] = z),
      (t[41] = be))
    : (be = t[41]);
  let B = me(be),
    V = Fe({
      defaultValues: E.draft,
      onSubmit: (e) => {
        let { value: t } = e;
        if (B.data?.type === `conflict`) {
          v();
          return;
        }
        Lt({
          isDirty: V.state.isDirty || E.revision == null || E.hasParseError,
          isSelectionReady: _e,
          readError: p,
          selectionError: I,
          isSaving: B.isPending,
          validation: qe(t.name, t.actions),
        }) ??
          B.mutate(t, {
            onSuccess: (e) => {
              if (e.type !== `invalid`) {
                if (e.type === `conflict`) {
                  w.get(g).danger(
                    T.formatMessage({
                      id: `settings.localEnvironments.save.conflict`,
                      defaultMessage: `This environment changed on disk. Discard your edits before saving again`,
                      description: `Error toast shown when an environment changed after the editor loaded it`,
                    }),
                  );
                  return;
                }
                (F && ge(!1),
                  e.type === `selection-failed`
                    ? w.get(g).danger(
                        T.formatMessage({
                          id: `settings.localEnvironments.save.selectionError`,
                          defaultMessage: `Saved the environment file, but could not select it`,
                          description: `Error toast shown when a new local environment cannot be selected after saving`,
                        }),
                      )
                    : w.get(g).success(
                        T.formatMessage({
                          id: `settings.localEnvironments.save.success`,
                          defaultMessage: `Saved local environment`,
                          description: `Toast shown when local environment is saved`,
                        }),
                      ),
                  S(e.configPath));
              }
            },
          });
      },
    }),
    H;
  t[42] === V
    ? (H = t[43])
    : ((H = (e) => {
        (e.preventDefault(), V.handleSubmit());
      }),
      (t[42] = V),
      (t[43] = H));
  let U;
  t[44] !== E.draft ||
  t[45] !== E.hasParseError ||
  t[46] !== E.revision ||
  t[47] !== E.version ||
  t[48] !== V ||
  t[49] !== p ||
  t[50] !== _e ||
  t[51] !== m ||
  t[52] !== _ ||
  t[53] !== v ||
  t[54] !== y ||
  t[55] !== ie ||
  t[56] !== P ||
  t[57] !== B.data?.type ||
  t[58] !== B.error ||
  t[59] !== B.isPending ||
  t[60] !== I ||
  t[61] !== s ||
  t[62] !== a
    ? ((U = (e) => {
        let { values: t, isDirty: n } = e,
          r = (e) => {
            _?.(!(0, Bt.default)(e, E.draft));
          },
          i = qe(t.name, t.actions),
          c = Lt({
            isDirty: n || E.revision == null || E.hasParseError,
            isSelectionReady: _e,
            readError: p,
            selectionError: I,
            isSaving: B.isPending,
            validation: i,
          }),
          l = B.data?.type === `conflict`,
          u = l ? null : Rt(c),
          d = (e, n, i) => {
            if (n === `default`) {
              let n = e === `setup` ? `setupScript` : `cleanupScript`,
                a = { ...t, [n]: i };
              (V.setFieldValue(n, i), r(a));
              return;
            }
            let a =
                e === `setup`
                  ? `setupPlatformScripts`
                  : `cleanupPlatformScripts`,
              o = { ...t[a], [n]: i },
              s = { ...t, [a]: o };
            (V.setFieldValue(a, o), r(s));
          };
        return (0, $.jsxs)(`fieldset`, {
          className: `contents`,
          "aria-busy": B.isPending || void 0,
          disabled: B.isPending,
          children: [
            (0, $.jsxs)(K, {
              children: [
                (0, $.jsx)(K.Header, {
                  title: (0, $.jsx)(x, {
                    id: `settings.localEnvironments.editor.title`,
                    defaultMessage: `Local environment`,
                    description: `Title for local environment editor`,
                  }),
                  actions: (0, $.jsx)(f, {
                    color: `ghost`,
                    size: `toolbar`,
                    type: `button`,
                    onClick: m,
                    children: (0, $.jsx)(x, {
                      id: `settings.localEnvironments.editor.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button label to exit the local environment editor`,
                    }),
                  }),
                }),
                (0, $.jsxs)(K.Content, {
                  className: `gap-[var(--padding-panel)]`,
                  children: [
                    (0, $.jsx)(Ce, {
                      children: (0, $.jsx)(jt, {
                        workspaceRoot: a,
                        workspaceGroup: s,
                      }),
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, $.jsx)(x, {
                        id: `settings.localEnvironments.editor.rewriteWarning`,
                        defaultMessage: `Saving rewrites the full TOML file. Comments, formatting, and unknown fields are not preserved`,
                        description: `Warning that the local environment editor rewrites the full TOML file`,
                      }),
                    }),
                    E.hasParseError
                      ? (0, $.jsx)(`div`, {
                          className: `text-sm text-token-error-foreground`,
                          role: `alert`,
                          children: (0, $.jsx)(x, { ...yt.parseError }),
                        })
                      : null,
                    p
                      ? (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between gap-3 text-sm text-token-error-foreground`,
                          role: `alert`,
                          children: [
                            (0, $.jsx)(`span`, {
                              children: (0, $.jsx)(x, { ...yt.readError }),
                            }),
                            (0, $.jsx)(f, {
                              color: `secondary`,
                              size: `toolbar`,
                              type: `button`,
                              onClick: y,
                              children: (0, $.jsx)(x, { ...yt.retry }),
                            }),
                          ],
                        })
                      : null,
                    I
                      ? (0, $.jsx)(Ce, {
                          children: (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-3 p-3`,
                            children: [
                              (0, $.jsx)(`div`, {
                                className: `text-sm text-token-error-foreground`,
                                children: (0, $.jsx)(x, {
                                  id: `settings.localEnvironments.projectInfo.error`,
                                  defaultMessage: `Could not load project information`,
                                  description: `Error shown when project information required to save an environment cannot be loaded`,
                                }),
                              }),
                              (0, $.jsx)(f, {
                                color: `secondary`,
                                size: `toolbar`,
                                type: `button`,
                                onClick: () => {
                                  Promise.all([ie(), P()]);
                                },
                                children: (0, $.jsx)(x, {
                                  id: `settings.localEnvironments.projectInfo.retry`,
                                  defaultMessage: `Retry`,
                                  description: `Button label to retry loading project information`,
                                }),
                              }),
                            ],
                          }),
                        })
                      : null,
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          htmlFor: `local-environment-name`,
                          className: `text-sm font-medium text-token-text-primary`,
                          children: (0, $.jsx)(x, { ...J.environmentName }),
                        }),
                        (0, $.jsx)(`input`, {
                          id: `local-environment-name`,
                          className: `focus-visible:ring-token-focus w-full max-w-72 rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                          value: t.name,
                          "aria-describedby": i.missingName ? Ht : void 0,
                          "aria-invalid": i.missingName,
                          onChange: (e) => {
                            let n = e.target.value;
                            (V.setFieldValue(`name`, n), r({ ...t, name: n }));
                          },
                        }),
                        i.missingName
                          ? (0, $.jsx)(`div`, {
                              id: Ht,
                              className: `text-xs text-token-error-foreground`,
                              children: (0, $.jsx)(x, {
                                id: `settings.localEnvironments.editor.nameRequired`,
                                defaultMessage: `Enter an environment name`,
                                description: `Inline validation for a missing local environment name`,
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsx)(xt, {
              actions: (0, $.jsx)(Tt, {}),
              draft: t,
              scriptType: `setup`,
              onScriptChange: d,
            }),
            (0, $.jsx)(xt, {
              draft: t,
              scriptType: `cleanup`,
              onScriptChange: d,
            }),
            (0, $.jsx)(gt, {
              actions: t.actions,
              dropdownDisabled: B.isPending,
              incompleteActionIds: i.incompleteActionIds,
              onChange: (e) => {
                (V.setFieldValue(`actions`, e), r({ ...t, actions: e }));
              },
            }),
            null,
            l &&
              (0, $.jsx)(`div`, {
                className: `text-sm text-token-error-foreground`,
                role: `alert`,
                children: (0, $.jsx)(x, {
                  id: `settings.localEnvironments.preview.saveConflict`,
                  defaultMessage: `This environment changed on disk. Continuing will discard your unsaved edits`,
                  description: `Warning shown when resolving an environment save conflict will discard the current draft`,
                }),
              }),
            !l &&
              B.error != null &&
              (0, $.jsx)(`div`, {
                className: `text-sm text-token-error-foreground`,
                role: `alert`,
                children: (0, $.jsx)(x, {
                  id: `settings.localEnvironments.preview.saveFailure`,
                  defaultMessage: `Could not save the environment. Try again`,
                  description: `Error message when saving a local environment file fails with guidance to retry`,
                }),
              }),
            (0, $.jsx)(`div`, {
              className: `flex justify-end`,
              children: (0, $.jsx)(o, {
                disabled: u == null,
                tooltipContent: u,
                children: (0, $.jsx)(`span`, {
                  className: `inline-flex`,
                  children: (0, $.jsxs)(f, {
                    "aria-busy": B.isPending || void 0,
                    color: `primary`,
                    size: `toolbar`,
                    type: l ? `button` : `submit`,
                    disabled: !l && c != null,
                    loading: B.isPending,
                    onClick: l
                      ? () => {
                          v();
                        }
                      : void 0,
                    children: [
                      l &&
                        (0, $.jsx)(x, {
                          id: `settings.localEnvironments.preview.discardAndReload`,
                          defaultMessage: `Discard edits`,
                          description: `Button label to discard unsaved environment edits after a save conflict`,
                        }),
                      !l &&
                        B.error != null &&
                        (0, $.jsx)(x, {
                          id: `settings.localEnvironments.preview.retrySave`,
                          defaultMessage: `Retry save`,
                          description: `Button label to retry saving a local environment file`,
                        }),
                      !l &&
                        B.error == null &&
                        (0, $.jsx)(x, {
                          id: `settings.localEnvironments.preview.save`,
                          defaultMessage: `Save`,
                          description: `Save button label for local environment file`,
                        }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }),
      (t[44] = E.draft),
      (t[45] = E.hasParseError),
      (t[46] = E.revision),
      (t[47] = E.version),
      (t[48] = V),
      (t[49] = p),
      (t[50] = _e),
      (t[51] = m),
      (t[52] = _),
      (t[53] = v),
      (t[54] = y),
      (t[55] = ie),
      (t[56] = P),
      (t[57] = B.data?.type),
      (t[58] = B.error),
      (t[59] = B.isPending),
      (t[60] = I),
      (t[61] = s),
      (t[62] = a),
      (t[63] = U))
    : (U = t[63]);
  let W;
  t[64] !== V.Subscribe || t[65] !== U
    ? ((W = (0, $.jsx)(V.Subscribe, { selector: Ft, children: U })),
      (t[64] = V.Subscribe),
      (t[65] = U),
      (t[66] = W))
    : (W = t[66]);
  let G;
  return (
    t[67] !== H || t[68] !== W
      ? ((G = (0, $.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: H,
          children: W,
        })),
        (t[67] = H),
        (t[68] = W),
        (t[69] = G))
      : (G = t[69]),
    G
  );
}
function Ft(e) {
  return { values: e.values, isDirty: e.isDirty };
}
function It() {
  return null;
}
function Lt({
  isDirty: e,
  isSelectionReady: t,
  readError: n,
  selectionError: r,
  isSaving: i,
  validation: a,
}) {
  return i
    ? `saving`
    : t
      ? n
        ? `read-error`
        : a.missingName
          ? `missing-name`
          : a.incompleteActionIds.length > 0
            ? `incomplete-action`
            : e
              ? null
              : `no-changes`
      : r
        ? `project-error`
        : `loading-project`;
}
function Rt(e) {
  if (e == null) return null;
  switch (e) {
    case `incomplete-action`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.incompleteAction`,
        defaultMessage: `Add both a name and command for each action`,
        description: `Tooltip shown when save is disabled because an action is incomplete`,
      });
    case `loading-project`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.loadingProject`,
        defaultMessage: `Loading project information`,
        description: `Tooltip shown when save is disabled while project information loads`,
      });
    case `missing-name`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.name`,
        defaultMessage: `Add an environment name to save`,
        description: `Tooltip shown when save is disabled because the name is missing`,
      });
    case `no-changes`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.noChanges`,
        defaultMessage: `No changes to save`,
        description: `Tooltip shown when save is disabled because there are no changes`,
      });
    case `project-error`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.projectError`,
        defaultMessage: `Retry loading project information to save`,
        description: `Tooltip shown when save is disabled because project information failed to load`,
      });
    case `read-error`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.readError`,
        defaultMessage: `Retry loading the environment before saving`,
        description: `Tooltip shown when save is disabled because the environment could not be read`,
      });
    case `saving`:
      return (0, $.jsx)(x, {
        id: `settings.localEnvironments.save.disabled.saving`,
        defaultMessage: `Saving…`,
        description: `Tooltip shown when save is disabled because a save is already in progress`,
      });
  }
}
var zt,
  Bt,
  Vt,
  $,
  Ht,
  Ut = e(() => {
    ((zt = l()),
      Ie(),
      I(),
      (Bt = t(F(), 1)),
      b(),
      n(),
      (Vt = t(d(), 1)),
      M(),
      p(),
      R(),
      ee(),
      j(),
      ie(),
      ue(),
      w(),
      ke(),
      vt(),
      nt(),
      rt(),
      lt(),
      bt(),
      E(),
      ne(),
      Ae(),
      we(),
      _(),
      G(),
      wt(),
      Ot(),
      Nt(),
      ($ = A()),
      (Ht = `local-environment-name-error`));
  });
export {
  Ve as C,
  Le as S,
  Ge as _,
  kt as a,
  He as b,
  Ot as c,
  dt as d,
  ut as f,
  J as g,
  rt as h,
  Nt as i,
  bt as l,
  st as m,
  Ut as n,
  At as o,
  lt as p,
  jt as r,
  Tt as s,
  Pt as t,
  yt as u,
  We as v,
  Ue as x,
  nt as y,
};
//# sourceMappingURL=local-environment-editor-DyH6gpTm.js.map
