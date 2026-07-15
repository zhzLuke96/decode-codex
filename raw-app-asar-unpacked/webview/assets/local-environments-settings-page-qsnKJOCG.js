import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  C0 as r,
  Cw as i,
  Fq as a,
  GJ as o,
  I2 as s,
  JA as c,
  KJ as l,
  L2 as u,
  Mq as d,
  Nq as f,
  Ow as p,
  Pq as m,
  Rr as h,
  S0 as ee,
  SV as g,
  WJ as _,
  _0 as v,
  _Y as y,
  aJ as b,
  cY as x,
  cj as S,
  dc as C,
  dj as w,
  fc as T,
  gK as E,
  hK as D,
  k2 as O,
  lc as k,
  mY as A,
  nK as j,
  nt as M,
  oJ as N,
  oc as P,
  oj as F,
  pY as te,
  qJ as ne,
  sK as I,
  sY as re,
  sj as ie,
  tt as ae,
  wc as oe,
  x0 as se,
  yY as ce,
  zr as L,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Bn as le,
  Hn as ue,
  Un as R,
  Xt as z,
  Yt as de,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  Kt as fe,
  ct as B,
  i as pe,
  lt as me,
  ot as he,
  qt as ge,
  r as _e,
  ut as ve,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  a as ye,
  d as be,
  l as xe,
  o as Se,
  p as Ce,
  u as we,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as V,
  g as Te,
  lt as Ee,
  p as De,
  v as H,
  vt as Oe,
  y as ke,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  c as Ae,
  l as je,
  o as Me,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ohr1dwam-BzJsIjl2.js";
import {
  n as U,
  t as Ne,
} from "./app-initial~app-main~appgen-settings-page~page~plugin-detail-page~quick-chat-window-page~sk~nap5db9z-ByktMsXX.js";
import {
  n as W,
  t as G,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import {
  C as K,
  S as Pe,
  a as Fe,
  c as q,
  d as Ie,
  f as Le,
  g as Re,
  h as ze,
  i as Be,
  l as J,
  n as Y,
  o as X,
  r as Ve,
  s as He,
  t as Ue,
  u as We,
} from "./local-environment-editor-DyH6gpTm.js";
import { n as Ge, t as Ke } from "./settings-row-disclosure-BGrPPhH3.js";
function qe(e) {
  let t = (0, Ze.c)(41),
    {
      workspaceRoot: n,
      workspaceGroup: r,
      configExists: i,
      initialEnvironment: a,
      hasParseError: o,
      hasReadError: s,
      onEdit: c,
    } = e,
    l = i && a != null,
    u = a?.actions,
    f = a?.setup.script ?? ``,
    p = a?.cleanup?.script ?? ``,
    m = a?.setup.darwin?.script ?? ``,
    ee = a?.setup.linux?.script ?? ``,
    g = a?.setup.win32?.script ?? ``,
    _ = a?.cleanup?.darwin?.script ?? ``,
    v = a?.cleanup?.linux?.script ?? ``,
    b = a?.cleanup?.win32?.script ?? ``,
    x = m.length > 0 || ee.length > 0 || g.length > 0,
    S = _.length > 0 || v.length > 0 || b.length > 0,
    C;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(G.Header, {
        title: (0, Z.jsx)(y, {
          id: `settings.localEnvironments.workspace.title`,
          defaultMessage: `Project`,
          description: `Title for the workspace summary section`,
        }),
      })),
      (t[0] = C))
    : (C = t[0]);
  let w;
  t[1] !== r || t[2] !== n
    ? ((w = (0, Z.jsxs)(G, {
        children: [
          C,
          (0, Z.jsx)(G.Content, {
            children: (0, Z.jsx)(V, {
              children: (0, Z.jsx)(Ve, { workspaceRoot: n, workspaceGroup: r }),
            }),
          }),
        ],
      })),
      (t[1] = r),
      (t[2] = n),
      (t[3] = w))
    : (w = t[3]);
  let T;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(y, {
        id: `settings.localEnvironments.environment.title`,
        defaultMessage: `Environment details`,
        description: `Title for local environment details section`,
      })),
      (t[4] = T))
    : (T = t[4]);
  let E;
  t[5] === l
    ? (E = t[6])
    : ((E = l
        ? (0, Z.jsx)(y, {
            id: `settings.localEnvironments.environment.edit`,
            defaultMessage: `Edit local environment`,
            description: `Button label to edit a local environment`,
          })
        : (0, Z.jsx)(y, {
            id: `settings.localEnvironments.environment.create`,
            defaultMessage: `Create local environment`,
            description: `Button label to create a local environment`,
          })),
      (t[5] = l),
      (t[6] = E));
  let D;
  t[7] !== c || t[8] !== E
    ? ((D = (0, Z.jsx)(G.Header, {
        title: T,
        actions: (0, Z.jsx)(d, {
          color: `primary`,
          size: `toolbar`,
          onClick: c,
          children: E,
        }),
      })),
      (t[7] = c),
      (t[8] = E),
      (t[9] = D))
    : (D = t[9]);
  let O;
  t[10] !== l || t[11] !== a
    ? ((O = l
        ? (0, Z.jsx)(V, {
            children: (0, Z.jsx)(H, {
              label: (0, Z.jsx)(y, { ...Re.environmentName }),
              control: (0, Z.jsx)(`span`, {
                className: `text-sm text-token-text-secondary`,
                children: a.name,
              }),
            }),
          })
        : (0, Z.jsx)(V, {
            children: (0, Z.jsx)(H, {
              label: (0, Z.jsx)(y, {
                id: `settings.localEnvironments.environment.empty`,
                defaultMessage: `No local environment is configured for this project yet`,
                description: `Empty state when no local environment is configured`,
              }),
              control: null,
            }),
          })),
      (t[10] = l),
      (t[11] = a),
      (t[12] = O))
    : (O = t[12]);
  let k;
  t[13] === o
    ? (k = t[14])
    : ((k = o
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 text-sm text-token-error-foreground`,
            children: (0, Z.jsx)(y, { ...We.parseError }),
          })
        : null),
      (t[13] = o),
      (t[14] = k));
  let A;
  t[15] === s
    ? (A = t[16])
    : ((A = s
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 text-sm text-token-error-foreground`,
            children: (0, Z.jsx)(y, { ...We.readError }),
          })
        : null),
      (t[15] = s),
      (t[16] = A));
  let j;
  t[17] !== O || t[18] !== k || t[19] !== A
    ? ((j = (0, Z.jsxs)(G.Content, { children: [O, k, A] })),
      (t[17] = O),
      (t[18] = k),
      (t[19] = A),
      (t[20] = j))
    : (j = t[20]);
  let M;
  t[21] !== D || t[22] !== j
    ? ((M = (0, Z.jsxs)(G, { children: [D, j] })),
      (t[21] = D),
      (t[22] = j),
      (t[23] = M))
    : (M = t[23]);
  let N;
  t[24] !== u ||
  t[25] !== _ ||
  t[26] !== v ||
  t[27] !== p ||
  t[28] !== b ||
  t[29] !== S ||
  t[30] !== l ||
  t[31] !== x ||
  t[32] !== m ||
  t[33] !== ee ||
  t[34] !== f ||
  t[35] !== g
    ? ((N = l
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(G, {
                children: [
                  (0, Z.jsx)(G.Header, {
                    title: (0, Z.jsx)(y, { ...Re.setupScript }),
                    subtitle: (0, Z.jsx)(y, {
                      id: `settings.localEnvironments.environment.setup.description`,
                      defaultMessage: `This script runs on worktree creation`,
                      description: `Description for environment setup script summary`,
                    }),
                    actions: (0, Z.jsx)(He, {}),
                  }),
                  (0, Z.jsxs)(G.Content, {
                    children: [
                      (0, Z.jsx)(h, {
                        language: `bash`,
                        content: f,
                        shouldWrapCode: !0,
                        codeContainerClassName: `max-h-40`,
                      }),
                      x
                        ? (0, Z.jsx)(Ye, {
                            darwinScript: m,
                            linuxScript: ee,
                            windowsScript: g,
                            title: (0, Z.jsx)(y, {
                              id: `settings.localEnvironments.environment.setup.platformOverrides`,
                              defaultMessage: `Platform overrides`,
                              description: `Label for setup script platform overrides`,
                            }),
                            description: (0, Z.jsx)(y, {
                              id: `settings.localEnvironments.environment.setup.platformOverrides.description`,
                              defaultMessage: `Overrides the default script for specific OSes`,
                              description: `Description for setup script platform overrides`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(G, {
                children: [
                  (0, Z.jsx)(G.Header, {
                    title: (0, Z.jsx)(y, {
                      id: `settings.localEnvironments.environment.cleanup.summaryTitle`,
                      defaultMessage: `Cleanup script`,
                      description: `Label for environment cleanup script input`,
                    }),
                    subtitle: (0, Z.jsx)(y, {
                      id: `settings.localEnvironments.environment.cleanup.summaryDescription`,
                      defaultMessage: `This script runs before a worktree is deleted`,
                      description: `Description for environment cleanup script summary`,
                    }),
                  }),
                  (0, Z.jsxs)(G.Content, {
                    children: [
                      p.length > 0
                        ? (0, Z.jsx)(h, {
                            language: `bash`,
                            content: p,
                            shouldWrapCode: !0,
                            codeContainerClassName: `max-h-40`,
                          })
                        : (0, Z.jsx)(V, {
                            children: (0, Z.jsx)(H, {
                              label: (0, Z.jsx)(y, {
                                id: `settings.localEnvironments.environment.cleanup.empty`,
                                defaultMessage: `No cleanup script configured`,
                                description: `Empty state for the cleanup script summary`,
                              }),
                              control: null,
                            }),
                          }),
                      S
                        ? (0, Z.jsx)(Ye, {
                            darwinScript: _,
                            linuxScript: v,
                            windowsScript: b,
                            title: (0, Z.jsx)(y, {
                              id: `settings.localEnvironments.environment.cleanup.platformOverrides`,
                              defaultMessage: `Platform overrides`,
                              description: `Label for cleanup script platform overrides`,
                            }),
                            description: (0, Z.jsx)(y, {
                              id: `settings.localEnvironments.environment.cleanup.platformOverrides.description`,
                              defaultMessage: `Overrides the default cleanup script for specific OSes`,
                              description: `Description for cleanup script platform overrides`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(G, {
                children: [
                  (0, Z.jsx)(G.Header, {
                    title: (0, Z.jsx)(y, {
                      id: `settings.localEnvironments.environment.actionsLabel`,
                      defaultMessage: `Actions`,
                      description: `Label for actions count in local environment summary`,
                    }),
                    subtitle: (0, Z.jsx)(y, { ...Re.actionsDescription }),
                  }),
                  (0, Z.jsx)(G.Content, {
                    children: (0, Z.jsx)(V, {
                      children:
                        u != null && u.length > 0
                          ? u.map(Je)
                          : (0, Z.jsx)(H, {
                              label: (0, Z.jsx)(y, { ...Re.actionsEmpty }),
                              control: null,
                            }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[24] = u),
      (t[25] = _),
      (t[26] = v),
      (t[27] = p),
      (t[28] = b),
      (t[29] = S),
      (t[30] = l),
      (t[31] = x),
      (t[32] = m),
      (t[33] = ee),
      (t[34] = f),
      (t[35] = g),
      (t[36] = N))
    : (N = t[36]);
  let P;
  return (
    t[37] !== M || t[38] !== N || t[39] !== w
      ? ((P = (0, Z.jsxs)(Z.Fragment, { children: [w, M, N] })),
        (t[37] = M),
        (t[38] = N),
        (t[39] = w),
        (t[40] = P))
      : (P = t[40]),
    P
  );
}
function Je(e, t) {
  return (0, Z.jsx)(
    H,
    {
      icon: (0, Z.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, Z.jsx)(Pe, { icon: e.icon ?? `tool` }),
      }),
      label: e.name,
      control: null,
    },
    `${e.name}-${t}`,
  );
}
function Ye(e) {
  let t = (0, Ze.c)(18),
    {
      darwinScript: n,
      linuxScript: r,
      windowsScript: i,
      title: a,
      description: o,
    } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (0, Z.jsx)(`div`, {
        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
        children: a,
      })),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = (0, Z.jsx)(`div`, {
        className: `text-sm text-token-text-secondary`,
        children: o,
      })),
      (t[2] = o),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n
    ? (u = t[8])
    : ((u =
        n.length > 0
          ? (0, Z.jsx)(Xe, { platform: `darwin`, script: n })
          : null),
      (t[7] = n),
      (t[8] = u));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d =
        r.length > 0 ? (0, Z.jsx)(Xe, { platform: `linux`, script: r }) : null),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === i
    ? (f = t[12])
    : ((f =
        i.length > 0 ? (0, Z.jsx)(Xe, { platform: `win32`, script: i }) : null),
      (t[11] = i),
      (t[12] = f));
  let p;
  return (
    t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f
      ? ((p = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [l, u, d, f],
        })),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function Xe(e) {
  let t = (0, Ze.c)(7),
    { platform: n, script: r } = e,
    i = Le[n],
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, Z.jsx)(`div`, {
        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
        children: (0, Z.jsx)(y, { ...i }),
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, Z.jsx)(h, {
        language: `bash`,
        content: r,
        shouldWrapCode: !0,
        codeContainerClassName: `max-h-40`,
      })),
      (t[2] = r),
      (t[3] = o));
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [a, o],
        })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var Ze,
  Z,
  Qe = e(() => {
    ((Ze = s()),
      A(),
      f(),
      L(),
      K(),
      ze(),
      Ie(),
      q(),
      J(),
      Be(),
      W(),
      ke(),
      De(),
      (Z = O()));
  }),
  $e,
  et = e(() => {
    (A(),
      ($e = te({
        selectProject: {
          id: `settings.localEnvironments.workspaceSelect.title`,
          defaultMessage: `Select a project`,
          description: `Title for the workspace selection step`,
        },
        workspaceSelectDescription: {
          id: `settings.localEnvironments.workspaceSelect.description`,
          defaultMessage: `Local environments tell ChatGPT how to set up worktrees for a project. {learnMore}`,
          description: `Description for the workspace selection step`,
        },
        workspaceSelectLearnMore: {
          id: `settings.localEnvironments.workspaceSelect.learnMore`,
          defaultMessage: `Learn more.`,
          description: `Link label for local environments docs`,
        },
      })));
  });
function tt(e) {
  let t = (0, ut.c)(14),
    {
      groups: n,
      hostId: r,
      isLoading: i,
      onAddWorkspace: a,
      onCreateEnvironment: o,
      onSelectEnvironment: s,
    } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(y, { ...$e.selectProject })), (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(y, {
        id: `settings.localEnvironments.workspace.add`,
        defaultMessage: `Add project`,
        description: `Button label to add a new workspace`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u;
  t[2] === a
    ? (u = t[3])
    : ((u = (0, Q.jsx)(G.Header, {
        title: c,
        actions: (0, Q.jsx)(d, {
          color: `secondary`,
          size: `toolbar`,
          onClick: a,
          children: l,
        }),
      })),
      (t[2] = a),
      (t[3] = u));
  let f;
  t[4] !== n ||
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== a ||
  t[8] !== o ||
  t[9] !== s
    ? ((f = (0, Q.jsx)(G.Content, {
        children: (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Q.jsx)(nt, {
            groups: n,
            hostId: r,
            isLoading: i,
            onAddWorkspace: a,
            onCreateEnvironment: o,
            onSelectEnvironment: s,
          }),
        }),
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o),
      (t[9] = s),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] !== u || t[12] !== f
      ? ((p = (0, Q.jsxs)(G, { children: [u, f] })),
        (t[11] = u),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function nt(e) {
  let t = (0, ut.c)(28),
    {
      groups: n,
      hostId: r,
      isLoading: i,
      onAddWorkspace: a,
      onCreateEnvironment: o,
      onSelectEnvironment: s,
    } = e,
    c = ce(),
    l,
    u,
    f,
    p,
    m;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== c ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = n.filter(rt);
      if (i) {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(xe, {
              children: (0, Q.jsx)(y, {
                id: `settings.localEnvironments.workspaceSelect.loading`,
                defaultMessage: `Loading projects…`,
                description: `Loading message while workspace options are fetched`,
              }),
            })),
            (t[12] = e))
          : (e = t[12]),
          (m = e));
        break bb0;
      }
      if (e.length === 0) {
        let e;
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(y, {
              id: `settings.localEnvironments.workspaceSelect.empty`,
              defaultMessage: `No projects yet. Add one to configure local environments.`,
              description: `Empty state when no workspace roots are available`,
            })),
            (t[13] = e))
          : (e = t[13]);
        let n;
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(y, {
              id: `settings.localEnvironments.workspace.add`,
              defaultMessage: `Add project`,
              description: `Button label to add a new workspace`,
            })),
            (t[14] = n))
          : (n = t[14]);
        let r;
        (t[15] === a
          ? (r = t[16])
          : ((r = (0, Q.jsx)(V, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-3 p-3 text-sm text-token-text-secondary`,
                children: [
                  e,
                  (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(d, {
                      color: `primary`,
                      size: `toolbar`,
                      onClick: a,
                      children: n,
                    }),
                  }),
                ],
              }),
            })),
            (t[15] = a),
            (t[16] = r)),
          (m = r));
        break bb0;
      }
      ((l = `flex flex-col gap-3`),
        (u = `list`),
        t[17] === c
          ? (f = t[18])
          : ((f = c.formatMessage({
              id: `settings.localEnvironments.workspaceSelect.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the workspace selection list`,
            })),
            (t[17] = c),
            (t[18] = f)));
      let h;
      (t[19] !== r || t[20] !== o || t[21] !== s
        ? ((h = (e) =>
            (0, Q.jsx)(
              it,
              {
                group: e,
                hostId: r,
                onCreateEnvironment: o,
                onSelectEnvironment: s,
              },
              e.path,
            )),
          (t[19] = r),
          (t[20] = o),
          (t[21] = s),
          (t[22] = h))
        : (h = t[22]),
        (p = e.map(h)));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = c),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m));
  } else ((l = t[7]), (u = t[8]), (f = t[9]), (p = t[10]), (m = t[11]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h;
  return (
    t[23] !== l || t[24] !== u || t[25] !== f || t[26] !== p
      ? ((h = (0, Q.jsx)(`div`, {
          className: l,
          role: u,
          "aria-label": f,
          children: p,
        })),
        (t[23] = l),
        (t[24] = u),
        (t[25] = f),
        (t[26] = p),
        (t[27] = h))
      : (h = t[27]),
    h
  );
}
function rt(e) {
  return e.path != null;
}
function it(e) {
  let t = (0, ut.c)(28),
    { group: n, hostId: r, onCreateEnvironment: i, onSelectEnvironment: a } = e,
    o = ce(),
    s;
  t[0] !== n.path || t[1] !== r
    ? ((s = { params: { hostId: r, workspaceRoot: n.path }, select: at }),
      (t[0] = n.path),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let { data: c, isLoading: u, error: f } = N(`local-environments`, s),
    p = c === void 0 ? [] : c,
    [h, ee] = (0, dt.useState)(!1),
    g = `local-environment-inherited-${(0, dt.useId)()}`,
    { projectEnvironments: v, inheritedEnvironments: b } = ct(p, n.path),
    x = Me(v),
    S = n.isCodexWorktree ? fe : de,
    C = n.repositoryData?.ownerRepo?.owner ?? null,
    w = u,
    T = f != null,
    E;
  t[3] !== n.label || t[4] !== o
    ? ((E = o.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.addLabel`,
          defaultMessage: `Add environment to {projectName}`,
          description: `Aria label for add environment button`,
        },
        { projectName: n.label },
      )),
      (t[3] = n.label),
      (t[4] = o),
      (t[5] = E))
    : (E = t[5]);
  let O = E,
    k;
  t[6] !== n.label || t[7] !== o
    ? ((k = o.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.openProject`,
          defaultMessage: `Open {projectName}`,
          description: `Aria label for opening a project's default environment`,
        },
        { projectName: n.label },
      )),
      (t[6] = n.label),
      (t[7] = o),
      (t[8] = k))
    : (k = t[8]);
  let A = k,
    j = Ae(p, n.path),
    M;
  t[9] === o
    ? (M = t[10])
    : ((M = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.loadingLabel`,
        defaultMessage: `Loading environment`,
        description: `Label for environment row while loading`,
      })),
      (t[9] = o),
      (t[10] = M));
  let P = M,
    F;
  t[11] === o
    ? (F = t[12])
    : ((F = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.errorLabel`,
        defaultMessage: `Environment needs attention`,
        description: `Label for environment row when environment data fails`,
      })),
      (t[11] = o),
      (t[12] = F));
  let te = F,
    ne;
  t[13] !== o || t[14] !== h
    ? ((ne = h
        ? o.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.hide`,
            defaultMessage: `Hide inherited environments`,
            description: `Aria label for hiding inherited local environments`,
          })
        : o.formatMessage({
            id: `settings.localEnvironments.workspaceSelect.inherited.show`,
            defaultMessage: `Show inherited environments`,
            description: `Aria label for showing inherited local environments`,
          })),
      (t[13] = o),
      (t[14] = h),
      (t[15] = ne))
    : (ne = t[15]);
  let I = ne,
    re;
  t[16] === S
    ? (re = t[17])
    : ((re = (0, Q.jsx)(S, { className: `icon-sm text-token-text-secondary` })),
      (t[16] = S),
      (t[17] = re));
  let ie = re,
    ae;
  t[18] === n.label
    ? (ae = t[19])
    : ((ae = (0, Q.jsx)(`span`, {
        className: `block truncate`,
        children: n.label,
      })),
      (t[18] = n.label),
      (t[19] = ae));
  let oe = ae,
    se;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(D, { className: `icon-xs` })), (t[20] = se))
    : (se = t[20]);
  let L = (0, Q.jsx)(d, {
      className: `w-9 justify-center`,
      "aria-label": O,
      color: `secondary`,
      size: `toolbar`,
      onClick: () => {
        i(n.path, j);
      },
      children: se,
    }),
    le = V,
    ue =
      x == null
        ? (0, Q.jsx)(H, { control: L, description: C, icon: ie, label: oe })
        : (0, Q.jsx)(Te, {
            actions: L,
            ariaLabel: A,
            description: C,
            icon: ie,
            label: oe,
            onClick: () => {
              a(n.path, x);
            },
          }),
    R = w
      ? (0, Q.jsx)(H, {
          control: null,
          icon: (0, Q.jsx)(m, { className: `icon-xs` }),
          label: P,
          size: `compact`,
        })
      : T
        ? (0, Q.jsx)(H, {
            control: null,
            label: (0, Q.jsx)(`span`, {
              className: `text-token-error-foreground`,
              children: te,
            }),
            size: `compact`,
          })
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              v.map((e) =>
                (0, Q.jsx)(
                  ot,
                  {
                    environment: e,
                    errorLabel: te,
                    onSelectEnvironment: () => {
                      a(n.path, e.configPath);
                    },
                  },
                  e.configPath,
                ),
              ),
              b.length > 0
                ? (0, Q.jsx)(Ke, {
                    content: b.map((e) =>
                      (0, Q.jsx)(
                        ot,
                        {
                          environment: e,
                          errorLabel: te,
                          onSelectEnvironment: () => {
                            a(n.path, e.configPath);
                          },
                        },
                        e.configPath,
                      ),
                    ),
                    contentId: g,
                    expanded: h,
                    children: (0, Q.jsx)(H, {
                      control: (0, Q.jsx)(d, {
                        "aria-controls": g,
                        "aria-expanded": h,
                        "aria-label": I,
                        color: `ghost`,
                        size: `icon`,
                        uniform: !0,
                        onClick: () => {
                          ee(!h);
                        },
                        children: (0, Q.jsx)(_, {
                          className: l(
                            `icon-2xs text-token-input-placeholder-foreground transition-transform`,
                            h && `rotate-180`,
                          ),
                        }),
                      }),
                      label: (0, Q.jsx)(y, {
                        id: `settings.localEnvironments.workspaceSelect.inherited`,
                        defaultMessage: `{count, plural, one {# environment in a parent folder} other {# environments in parent folders}}`,
                        description: `Accordion label for local environments inherited from parent folders`,
                        values: { count: b.length },
                      }),
                      size: `compact`,
                    }),
                  })
                : null,
            ],
          }),
    z;
  t[21] !== le || t[22] !== ue || t[23] !== R
    ? ((z = (0, Q.jsxs)(le, { children: [ue, R] })),
      (t[21] = le),
      (t[22] = ue),
      (t[23] = R),
      (t[24] = z))
    : (z = t[24]);
  let B;
  return (
    t[25] !== n.label || t[26] !== z
      ? ((B = (0, Q.jsx)(`div`, {
          "aria-label": n.label,
          role: `listitem`,
          children: z,
        })),
        (t[25] = n.label),
        (t[26] = z),
        (t[27] = B))
      : (B = t[27]),
    B
  );
}
function at(e) {
  return e.environments;
}
function ot(e) {
  let t = (0, ut.c)(19),
    { environment: n, errorLabel: r, onSelectEnvironment: i } = e,
    a = ce(),
    o,
    s,
    c,
    l,
    u;
  if (
    t[0] !== n.configPath ||
    t[1] !== n.environment ||
    t[2] !== n.type ||
    t[3] !== a
  ) {
    let e = st(n.configPath),
      r =
        n.type === `success` &&
        n.environment?.name != null &&
        n.environment.name.length > 0;
    ((s = r ? n.environment.name : e),
      (l = n.type === `error`),
      (c = l || (r && e !== s) ? e : null));
    let i = l ? e : s;
    ((o = Te),
      (u = a.formatMessage(
        {
          id: `settings.localEnvironments.workspaceSelect.viewAction`,
          defaultMessage: `View {environmentName}`,
          description: `Action label to view a local environment`,
        },
        { environmentName: i },
      )),
      (t[0] = n.configPath),
      (t[1] = n.environment),
      (t[2] = n.type),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d = l ? `text-token-error-foreground` : void 0,
    f = l ? r : s,
    p;
  t[9] !== d || t[10] !== f
    ? ((p = (0, Q.jsx)(`span`, { className: d, children: f })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(_, {
        className: `icon-2xs -rotate-90 text-token-input-placeholder-foreground`,
      })),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== o || t[14] !== i || t[15] !== c || t[16] !== u || t[17] !== p
      ? ((h = (0, Q.jsx)(o, {
          ariaLabel: u,
          description: c,
          label: p,
          onClick: i,
          trailing: m,
        })),
        (t[13] = o),
        (t[14] = i),
        (t[15] = c),
        (t[16] = u),
        (t[17] = p),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function st(e) {
  let t = I(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
function ct(e, t) {
  let n = I(t),
    r = [],
    i = [];
  for (let t of e) lt(t.configPath) === n ? r.push(t) : i.push(t);
  return { projectEnvironments: r, inheritedEnvironments: i };
}
function lt(e) {
  let t = I(e),
    n = t.lastIndexOf(`/.codex/environments/`);
  return n === -1 ? t : t.slice(0, n);
}
var ut,
  dt,
  Q,
  ft = e(() => {
    ((ut = s()),
      ne(),
      (dt = t(u(), 1)),
      A(),
      f(),
      a(),
      o(),
      z(),
      E(),
      ge(),
      W(),
      we(),
      ke(),
      Ge(),
      De(),
      je(),
      j(),
      b(),
      et(),
      (Q = O()));
  });
function pt(e) {
  let t = (0, _t.c)(67),
    { settingsHostId: i } = e,
    a = ee(re),
    [o] = w(),
    s = F(),
    c = S(),
    l = ie(le) != null,
    u = l ? ue(o, s.state) : null,
    f = u?.hostId ?? i,
    { data: m, isLoading: h } = se(p, { hostId: f }),
    g = m?.roots ?? [],
    _ = me(r(oe), f),
    [v, b] = (0, vt.useState)(u?.workspaceRoot ?? o.get(`workspaceRoot`)),
    [x, T] = (0, vt.useState)(u?.configPath ?? o.get(`configPath`)),
    [E, D] = (0, vt.useState)(u != null || o.get(`mode`) === `edit`),
    [O, A] = (0, vt.useState)(0),
    j = v ?? null,
    M = j != null && (u != null || g.includes(j)) ? j : null,
    P = M == null ? null : (_.find((e) => e.path === M) ?? null),
    te = M == null,
    ne = () => {
      if (f !== `local`) {
        k({ hostId: f });
        return;
      }
      C();
    },
    I;
  t[0] !== D || t[1] !== T
    ? ((I = () => {
        (b(null), T(null), D(!1));
      }),
      (t[0] = D),
      (t[1] = T),
      (t[2] = I))
    : (I = t[2]);
  let ce = I,
    L = () => {
      if (u != null) {
        (c(u.returnTo, { replace: !0 }),
          u.reopenStableWorktreeId != null &&
            pe(a, c, {
              id: u.reopenStableWorktreeId,
              launchMode: `create-stable-worktree`,
            }));
        return;
      }
      D(!1);
    },
    R;
  t[3] !== D || t[4] !== T
    ? ((R = (e, t) => {
        (b(e), T(t), D(!1));
      }),
      (t[3] = D),
      (t[4] = T),
      (t[5] = R))
    : (R = t[5]);
  let z = R,
    de;
  t[6] !== D || t[7] !== T
    ? ((de = (e, t) => {
        (b(e), T(t), D(!0));
      }),
      (t[6] = D),
      (t[7] = T),
      (t[8] = de))
    : (de = t[8]);
  let fe = de,
    {
      data: B,
      isLoading: he,
      isFetching: ge,
      error: _e,
      refetch: ve,
    } = N(`local-environments`, {
      params: { hostId: f, workspaceRoot: M ?? `` },
      queryConfig: { enabled: M != null },
      select: ht,
    }),
    ye = B != null && !he && !ge && _e == null,
    be;
  t[9] !== ye || t[10] !== B
    ? ((be = ye ? Me(B) : null), (t[9] = ye), (t[10] = B), (t[11] = be))
    : (be = t[11]);
  let Se = be,
    Ce = u != null && u.configPath == null && ye && M != null ? Ae(B, M) : null,
    we = u?.configPath ?? Ce ?? (u == null ? Se : null);
  E && x == null && we != null && T(we);
  let Te = x ?? we,
    De = M != null && Te != null,
    {
      data: H,
      isLoading: Oe,
      error: ke,
      refetch: je,
    } = N(`local-environment-config`, {
      params: { configPath: Te ?? ``, hostId: f },
      queryConfig: { enabled: De },
    }),
    U = H?.environment?.type === `success` ? H.environment.environment : null,
    W = H?.environment?.type === `error`,
    K = ke != null,
    Pe = _e != null || ke != null,
    q = () => {
      if (Te == null) {
        ve();
        return;
      }
      Promise.all([ve(), je()]);
    },
    Ie;
  t[12] !== je || t[13] !== ve
    ? ((Ie = async () => {
        ve();
        let e = await je();
        e.data != null && e.error == null && A(mt);
      }),
      (t[12] = je),
      (t[13] = ve),
      (t[14] = Ie))
    : (Ie = t[14]);
  let Le = Ie,
    Re = he || (ge && Te == null) || (De && Oe);
  if (l && u == null) {
    let e;
    return (
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(n, {
            to: `/settings/local-environments`,
            replace: !0,
          })),
          (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  if (te) {
    let e;
    return (
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(y, {
            ...$e.workspaceSelectDescription,
            values: {
              learnMore: (0, $.jsx)(`a`, {
                className: `inline-flex items-center gap-1 text-base text-token-text-link-foreground`,
                href: Ee,
                target: `_blank`,
                rel: `noreferrer`,
                children: (0, $.jsx)(y, { ...$e.workspaceSelectLearnMore }),
              }),
            },
          })),
          (t[16] = e))
        : (e = t[16]),
      (0, $.jsx)(gt, {
        subtitle: e,
        children: (0, $.jsx)(tt, {
          groups: _,
          hostId: f,
          isLoading: h,
          onAddWorkspace: ne,
          onCreateEnvironment: fe,
          onSelectEnvironment: z,
        }),
      })
    );
  }
  let ze = Fe(M, P),
    Be;
  t[17] !== u || t[18] !== ce || t[19] !== L || t[20] !== E || t[21] !== ze
    ? ((Be =
        u == null
          ? (0, $.jsx)(Ne, {
              ancestors: [
                {
                  id: `environments`,
                  label: (0, $.jsx)(y, {
                    id: `settings.localEnvironments.breadcrumb.root`,
                    defaultMessage: `Environments`,
                    description: `Breadcrumb label for the local environments page`,
                  }),
                  onClick: ce,
                },
                ...(E ? [{ id: `workspace`, label: ze, onClick: L }] : []),
              ],
              current: E
                ? (0, $.jsx)(y, {
                    id: `settings.localEnvironments.breadcrumb.edit`,
                    defaultMessage: `edit`,
                    description: `Breadcrumb label for local environment edit mode`,
                  })
                : ze,
            })
          : (0, $.jsxs)(d, {
              color: `ghost`,
              size: `toolbar`,
              onClick: L,
              children: [
                (0, $.jsx)(ae, { className: `icon-xs` }),
                (0, $.jsx)(y, {
                  id: `settings.localEnvironments.breadcrumb.back`,
                  defaultMessage: `Back`,
                  description: `Button label to return from local environment creation`,
                }),
              ],
            })),
      (t[17] = u),
      (t[18] = ce),
      (t[19] = L),
      (t[20] = E),
      (t[21] = ze),
      (t[22] = Be))
    : (Be = t[22]);
  let J = Be;
  if (Re) {
    let e;
    t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(xe, {
          children: (0, $.jsx)(y, {
            id: `settings.localEnvironments.loading.body`,
            defaultMessage: `Fetching your project configuration…`,
            description: `Loading state body for local environments settings`,
          }),
        })),
        (t[23] = e))
      : (e = t[23]);
    let n;
    return (
      t[24] === J
        ? (n = t[25])
        : ((n = (0, $.jsx)(gt, { backSlot: J, children: e })),
          (t[24] = J),
          (t[25] = n)),
      n
    );
  }
  if (!H || M == null) {
    let e;
    t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(G.Header, {
          title: (0, $.jsx)(y, {
            id: `settings.localEnvironments.unavailable.title`,
            defaultMessage: `Local environments unavailable`,
            description: `Title for missing local environment config state`,
          }),
        })),
        (t[26] = e))
      : (e = t[26]);
    let n;
    t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(y, {
          id: `settings.localEnvironments.unavailable.body`,
          defaultMessage: `We could not load local environment settings for this project`,
          description: `Body text for missing local environment config state`,
        })),
        (t[27] = n))
      : (n = t[27]);
    let r;
    t[28] !== q || t[29] !== Pe
      ? ((r = Pe
          ? (0, $.jsx)(d, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              onClick: q,
              children: (0, $.jsx)(y, { ...We.retry }),
            })
          : null),
        (t[28] = q),
        (t[29] = Pe),
        (t[30] = r))
      : (r = t[30]);
    let i;
    t[31] === r
      ? (i = t[32])
      : ((i = (0, $.jsxs)(G, {
          children: [
            e,
            (0, $.jsx)(G.Content, {
              children: (0, $.jsx)(V, {
                children: (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3 p-3 text-sm text-token-text-secondary`,
                  children: [n, r],
                }),
              }),
            }),
          ],
        })),
        (t[31] = r),
        (t[32] = i));
    let a;
    return (
      t[33] !== J || t[34] !== i
        ? ((a = (0, $.jsx)(gt, { backSlot: J, children: i })),
          (t[33] = J),
          (t[34] = i),
          (t[35] = a))
        : (a = t[35]),
      a
    );
  }
  if (E) {
    let e = `${f}:${H.configPath}:${O}`,
      n;
    t[36] !== H.configPath ||
    t[37] !== H.revision ||
    t[38] !== Le ||
    t[39] !== L ||
    t[40] !== q ||
    t[41] !== W ||
    t[42] !== K ||
    t[43] !== U ||
    t[44] !== M ||
    t[45] !== f ||
    t[46] !== P ||
    t[47] !== e
      ? ((n = (0, $.jsx)(
          Ue,
          {
            hostId: f,
            workspaceRoot: M,
            workspaceGroup: P,
            configPath: H.configPath,
            expectedRevision: H.revision,
            initialEnvironment: U,
            hasParseError: W,
            hasReadError: K,
            onCancel: L,
            onDiscardConflict: Le,
            onRetryRead: q,
            onSaved: L,
          },
          e,
        )),
        (t[36] = H.configPath),
        (t[37] = H.revision),
        (t[38] = Le),
        (t[39] = L),
        (t[40] = q),
        (t[41] = W),
        (t[42] = K),
        (t[43] = U),
        (t[44] = M),
        (t[45] = f),
        (t[46] = P),
        (t[47] = e),
        (t[48] = n))
      : (n = t[48]);
    let r;
    return (
      t[49] !== J || t[50] !== n
        ? ((r = (0, $.jsx)(gt, { backSlot: J, children: n })),
          (t[49] = J),
          (t[50] = n),
          (t[51] = r))
        : (r = t[51]),
      r
    );
  }
  let Y;
  t[52] !== H.configPath || t[53] !== D || t[54] !== T
    ? ((Y = () => {
        (T(H.configPath), D(!0));
      }),
      (t[52] = H.configPath),
      (t[53] = D),
      (t[54] = T),
      (t[55] = Y))
    : (Y = t[55]);
  let X;
  t[56] !== H.exists ||
  t[57] !== W ||
  t[58] !== K ||
  t[59] !== U ||
  t[60] !== M ||
  t[61] !== P ||
  t[62] !== Y
    ? ((X = (0, $.jsx)(qe, {
        workspaceRoot: M,
        workspaceGroup: P,
        configExists: H.exists,
        initialEnvironment: U,
        hasParseError: W,
        hasReadError: K,
        onEdit: Y,
      })),
      (t[56] = H.exists),
      (t[57] = W),
      (t[58] = K),
      (t[59] = U),
      (t[60] = M),
      (t[61] = P),
      (t[62] = Y),
      (t[63] = X))
    : (X = t[63]);
  let Ve;
  return (
    t[64] !== J || t[65] !== X
      ? ((Ve = (0, $.jsx)(gt, { backSlot: J, children: X })),
        (t[64] = J),
        (t[65] = X),
        (t[66] = Ve))
      : (Ve = t[66]),
    Ve
  );
}
function mt(e) {
  return e + 1;
}
function ht(e) {
  return e.environments;
}
function gt(e) {
  let t = (0, _t.c)(5),
    { backSlot: n, subtitle: r, children: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(ye, { slug: `local-environments` })), (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] !== n || t[2] !== i || t[3] !== r
      ? ((o = (0, $.jsx)(be, {
          title: a,
          subtitle: r,
          backSlot: n,
          children: i,
        })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var _t,
  vt,
  $,
  yt = e(() => {
    ((_t = s()),
      v(),
      (vt = t(u(), 1)),
      A(),
      c(),
      f(),
      U(),
      Oe(),
      M(),
      Y(),
      J(),
      X(),
      P(),
      x(),
      i(),
      Ce(),
      W(),
      ve(),
      we(),
      Se(),
      De(),
      g(),
      T(),
      je(),
      b(),
      _e(),
      R(),
      Qe(),
      ft(),
      et(),
      ($ = O()));
  });
function bt() {
  let e = (0, xt.c)(3),
    t = F(),
    { selectedHostId: n } = B(),
    r = `${n}:${t.key}`,
    i;
  return (
    e[0] !== n || e[1] !== r
      ? ((i = (0, St.jsx)(pt, { settingsHostId: n }, r)),
        (e[0] = n),
        (e[1] = r),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
var xt, St;
e(() => {
  ((xt = s()), c(), he(), yt(), (St = O()));
})();
export { bt as LocalEnvironmentsSettings };
//# sourceMappingURL=local-environments-settings-page-qsnKJOCG.js.map
