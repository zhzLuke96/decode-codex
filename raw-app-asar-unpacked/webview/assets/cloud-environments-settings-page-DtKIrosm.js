import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $A as n,
  Af as r,
  C0 as i,
  C2 as a,
  DK as o,
  Df as s,
  Ds as c,
  Fq as l,
  Gb as u,
  I2 as d,
  JA as f,
  Kb as p,
  L2 as m,
  Mi as h,
  Mq as g,
  Ni as _,
  Nq as v,
  Of as y,
  Pq as b,
  RK as x,
  S0 as S,
  SK as C,
  Ts as w,
  VW as T,
  WW as E,
  _ as D,
  _0 as O,
  _Y as k,
  a2 as A,
  aG as j,
  b2 as M,
  bK as N,
  bf as P,
  cS as F,
  cY as ee,
  cj as te,
  dJ as ne,
  fJ as re,
  g as ie,
  gf as ae,
  hf as oe,
  i2 as se,
  js as I,
  k2 as L,
  kK as ce,
  kf as le,
  lS as ue,
  lY as de,
  lv as fe,
  mY as pe,
  mf as me,
  oj as he,
  pY as ge,
  r2 as _e,
  rG as ve,
  sY as R,
  sv as ye,
  uv as be,
  x0 as xe,
  y2 as Se,
  yY as z,
  zK as Ce,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dr as we,
  ur as Te,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  c as Ee,
  ft as De,
  pt as Oe,
  s as ke,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  An as Ae,
  kn as je,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  _n as Me,
  gn as Ne,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  Xt as Pe,
  Zt as Fe,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  _ as Ie,
  a as Le,
  d as Re,
  l as ze,
  o as Be,
  p as Ve,
  r as He,
  u as Ue,
  v as We,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  _ as B,
  d as Ge,
  f as V,
  g as Ke,
  p as qe,
  u as Je,
  v as H,
  y as Ye,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as Xe,
  rt as Ze,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as Qe,
  t as $e,
} from "./app-initial~app-main~appgen-settings-page~page~plugin-detail-page~quick-chat-window-page~sk~nap5db9z-ByktMsXX.js";
import {
  n as et,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as tt, t as nt } from "./esm-Dk007VCu.js";
import { a as rt, r as it } from "./cloud-preferences-BFe7z4Sn.js";
function at(e) {
  let t = (0, lt.c)(42),
    { environment: n } = e,
    r;
  t[0] === n.setup
    ? (r = t[1])
    : ((r = (
        Array.isArray(n.setup)
          ? n.setup.join(`
`)
          : n.setup
      )?.trim()),
      (t[0] = n.setup),
      (t[1] = r));
  let i = !!r,
    a;
  t[2] === n.maintenance_setup
    ? (a = t[3])
    : ((a = (
        Array.isArray(n.maintenance_setup)
          ? n.maintenance_setup.join(`
`)
          : n.maintenance_setup
      )?.trim()),
      (t[2] = n.maintenance_setup),
      (t[3] = a));
  let o = !!a,
    s;
  t[4] === n.env_vars
    ? (s = t[5])
    : ((s = Object.keys(n.env_vars)), (t[4] = n.env_vars), (t[5] = s));
  let c = s,
    l;
  if (t[6] !== n || t[7] !== c || t[8] !== o || t[9] !== i) {
    let e = ct(n),
      r;
    t[11] === n.repo_map
      ? (r = t[12])
      : ((r = (e) => n.repo_map?.[e]?.repository_full_name ?? e),
        (t[11] = n.repo_map),
        (t[12] = r));
    let a = n.repos.map(r),
      s = i || o || c.length > 0 || e.length > 0,
      u;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, W.jsx)(k, {
          id: `settings.cloudEnvironments.details.configured`,
          defaultMessage: `Configured`,
          description: `Label for a configured cloud environment setting`,
        })),
        (t[13] = u))
      : (u = t[13]);
    let d = u,
      f;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, W.jsx)(k, {
          id: `settings.cloudEnvironments.details.repository`,
          defaultMessage: `Repository`,
          description: `Label for the repository in cloud environment details`,
        })),
        (t[14] = f))
      : (f = t[14]);
    let p =
        a.length > 0
          ? a.join(`, `)
          : (0, W.jsx)(k, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            }),
      m;
    t[15] === p
      ? (m = t[16])
      : ((m = (0, W.jsx)(B, { label: f, valueAlignment: `end`, children: p })),
        (t[15] = p),
        (t[16] = m));
    let h;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, W.jsx)(k, {
          id: `settings.cloudEnvironments.details.machine`,
          defaultMessage: `Machine`,
          description: `Label for the machine in cloud environment details`,
        })),
        (t[17] = h))
      : (h = t[17]);
    let g;
    t[18] === n.machine.label
      ? (g = t[19])
      : ((g = (0, W.jsx)(B, {
          label: h,
          valueAlignment: `end`,
          children: n.machine.label,
        })),
        (t[18] = n.machine.label),
        (t[19] = g));
    let _;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, W.jsx)(k, {
          id: `settings.cloudEnvironments.details.creator`,
          defaultMessage: `Created by`,
          description: `Label for the creator in cloud environment details`,
        })),
        (t[20] = _))
      : (_ = t[20]);
    let v = n.creator.name || n.creator.email,
      y;
    t[21] === v
      ? (y = t[22])
      : ((y = (0, W.jsx)(B, { label: _, valueAlignment: `end`, children: v })),
        (t[21] = v),
        (t[22] = y));
    let b;
    t[23] === n.created_at
      ? (b = t[24])
      : ((b =
          n.created_at == null
            ? null
            : (0, W.jsx)(B, {
                label: (0, W.jsx)(k, {
                  id: `settings.cloudEnvironments.details.created`,
                  defaultMessage: `Created`,
                  description: `Label for the creation date in cloud environment details`,
                }),
                valueAlignment: `end`,
                children: (0, W.jsx)(de, {
                  day: `numeric`,
                  month: `short`,
                  value: n.created_at * 1e3,
                  year: `numeric`,
                }),
              })),
        (t[23] = n.created_at),
        (t[24] = b));
    let x;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (0, W.jsx)(k, {
          id: `settings.cloudEnvironments.details.network`,
          defaultMessage: `Network access`,
          description: `Label for network access in cloud environment details`,
        })),
        (t[25] = x))
      : (x = t[25]);
    let S = n.agent_network_access?.mode,
      C;
    t[26] === S ? (C = t[27]) : ((C = ot(S)), (t[26] = S), (t[27] = C));
    let w;
    t[28] === C
      ? (w = t[29])
      : ((w = (0, W.jsx)(B, { label: x, valueAlignment: `end`, children: C })),
        (t[28] = C),
        (t[29] = w));
    let T;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, W.jsx)(k, {
          id: `settings.cloudEnvironments.details.sharing`,
          defaultMessage: `Sharing`,
          description: `Label for cloud environment sharing`,
        })),
        (t[30] = T))
      : (T = t[30]);
    let E;
    t[31] === n.share_settings
      ? (E = t[32])
      : ((E = st(n.share_settings)), (t[31] = n.share_settings), (t[32] = E));
    let D;
    t[33] === E
      ? (D = t[34])
      : ((D = (0, W.jsx)(B, { label: T, valueAlignment: `end`, children: E })),
        (t[33] = E),
        (t[34] = D));
    let O;
    (t[35] !== g ||
    t[36] !== y ||
    t[37] !== b ||
    t[38] !== w ||
    t[39] !== D ||
    t[40] !== m
      ? ((O = (0, W.jsx)(U, {
          children: (0, W.jsx)(U.Content, {
            children: (0, W.jsxs)(V, { children: [m, g, y, b, w, D] }),
          }),
        })),
        (t[35] = g),
        (t[36] = y),
        (t[37] = b),
        (t[38] = w),
        (t[39] = D),
        (t[40] = m),
        (t[41] = O))
      : (O = t[41]),
      (l = (0, W.jsxs)(W.Fragment, {
        children: [
          O,
          s
            ? (0, W.jsxs)(U, {
                children: [
                  (0, W.jsx)(U.Header, {
                    title: (0, W.jsx)(k, {
                      id: `settings.cloudEnvironments.details.configuration`,
                      defaultMessage: `Configuration`,
                      description: `Heading for cloud environment configuration details`,
                    }),
                  }),
                  (0, W.jsx)(U.Content, {
                    children: (0, W.jsxs)(V, {
                      children: [
                        i
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(k, {
                                id: `settings.cloudEnvironments.details.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for the setup script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: d,
                            })
                          : null,
                        o
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(k, {
                                id: `settings.cloudEnvironments.details.maintenance`,
                                defaultMessage: `Maintenance script`,
                                description: `Label for the maintenance script in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: d,
                            })
                          : null,
                        c.length > 0
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(k, {
                                id: `settings.cloudEnvironments.details.environmentVariables`,
                                defaultMessage: `Environment variables`,
                                description: `Label for environment variables in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: c.join(`, `),
                            })
                          : null,
                        e.length > 0
                          ? (0, W.jsx)(B, {
                              label: (0, W.jsx)(k, {
                                id: `settings.cloudEnvironments.details.secrets`,
                                defaultMessage: `Secrets`,
                                description: `Label for secrets in cloud environment details`,
                              }),
                              valueAlignment: `end`,
                              children: e.join(`, `),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              })
            : null,
        ],
      })),
      (t[6] = n),
      (t[7] = c),
      (t[8] = o),
      (t[9] = i),
      (t[10] = l));
  } else l = t[10];
  return l;
}
function ot(e) {
  switch (e) {
    case `custom`:
      return (0, W.jsx)(k, {
        id: `settings.cloudEnvironments.network.custom`,
        defaultMessage: `Custom`,
        description: `Label for custom cloud environment network access`,
      });
    case `on`:
      return (0, W.jsx)(k, {
        id: `settings.cloudEnvironments.network.on`,
        defaultMessage: `On`,
        description: `Label for enabled cloud environment network access`,
      });
    case `off`:
    case void 0:
      return (0, W.jsx)(k, {
        id: `settings.cloudEnvironments.network.off`,
        defaultMessage: `Off`,
        description: `Label for disabled cloud environment network access`,
      });
  }
}
function st(e) {
  switch (e) {
    case `private`:
      return (0, W.jsx)(k, {
        id: `settings.cloudEnvironments.sharing.private`,
        defaultMessage: `Private`,
        description: `Label for a private cloud environment`,
      });
    case `public`:
      return (0, W.jsx)(k, {
        id: `settings.cloudEnvironments.sharing.public`,
        defaultMessage: `Public`,
        description: `Label for a public cloud environment`,
      });
    case `workspace`:
      return (0, W.jsx)(k, {
        id: `settings.cloudEnvironments.sharing.workspace`,
        defaultMessage: `Workspace`,
        description: `Label for a workspace cloud environment`,
      });
  }
}
function ct(e) {
  let t = new Set(Object.keys(e.secrets ?? {}));
  for (let n of e.secrets_with_domains ?? []) n.name != null && t.add(n.name);
  return [...t];
}
var lt,
  W,
  ut = e(() => {
    ((lt = d()), pe(), et(), Ye(), qe(), (W = L()));
  });
function dt(e) {
  let t = (0, pt.c)(27),
    {
      environmentName: n,
      isPending: r,
      open: i,
      onConfirm: a,
      onOpenChange: o,
    } = e,
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = c));
  let l;
  t[2] === n
    ? (l = t[3])
    : ((l = (0, G.jsx)(le, {
        children: (0, G.jsx)(k, {
          id: `settings.cloudEnvironments.delete.title`,
          defaultMessage: `Delete {environmentName}?`,
          description: `Title for the cloud environment deletion confirmation`,
          values: { environmentName: n },
        }),
      })),
      (t[2] = n),
      (t[3] = l));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, G.jsx)(y, {
        className: `contents`,
        children: (0, G.jsx)(k, {
          id: `settings.cloudEnvironments.delete.description`,
          defaultMessage: `Existing tasks will remain, but you will not be able to create follow-ups with this environment`,
          description: `Description for the cloud environment deletion confirmation`,
        }),
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === l
    ? (d = t[6])
    : ((d = (0, G.jsx)(ae, { title: l, subtitle: u })), (t[5] = l), (t[6] = d));
  let f;
  t[7] === o ? (f = t[8]) : ((f = () => o(!1)), (t[7] = o), (t[8] = f));
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(k, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== r || t[11] !== f
    ? ((m = (0, G.jsx)(g, {
        color: `secondary`,
        disabled: r,
        onClick: f,
        type: `button`,
        children: p,
      })),
      (t[10] = r),
      (t[11] = f),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, G.jsx)(k, {
        id: `settings.cloudEnvironments.delete.confirm`,
        defaultMessage: `Delete environment`,
        description: `Button label for confirming cloud environment deletion`,
      })),
      (t[13] = h))
    : (h = t[13]);
  let _;
  t[14] === r
    ? (_ = t[15])
    : ((_ = (0, G.jsx)(g, {
        color: `danger`,
        loading: r,
        type: `submit`,
        children: h,
      })),
      (t[14] = r),
      (t[15] = _));
  let v;
  t[16] !== m || t[17] !== _
    ? ((v = (0, G.jsxs)(oe, { children: [m, _] })),
      (t[16] = m),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let b;
  t[19] !== c || t[20] !== v || t[21] !== d
    ? ((b = (0, G.jsxs)(me, { as: `form`, onSubmit: c, children: [d, v] })),
      (t[19] = c),
      (t[20] = v),
      (t[21] = d),
      (t[22] = b))
    : (b = t[22]);
  let x;
  return (
    t[23] !== o || t[24] !== i || t[25] !== b
      ? ((x = (0, G.jsx)(s, { open: i, onOpenChange: o, children: b })),
        (t[23] = o),
        (t[24] = i),
        (t[25] = b),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
function ft(e) {
  let t = (0, pt.c)(23),
    { isPending: n, open: r, onConfirm: i, onOpenChange: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => {
        (e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = o));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, G.jsx)(le, {
        children: (0, G.jsx)(k, {
          id: `settings.cloudEnvironments.resetCache.title`,
          defaultMessage: `Reset cached containers?`,
          description: `Title for the cloud environment cache reset confirmation`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, G.jsx)(ae, {
        title: c,
        subtitle: (0, G.jsx)(y, {
          className: `contents`,
          children: (0, G.jsx)(k, {
            id: `settings.cloudEnvironments.resetCache.description`,
            defaultMessage: `This invalidates all cached containers for this environment and all users`,
            description: `Description for the cloud environment cache reset confirmation`,
          }),
        }),
      })),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] === a ? (u = t[5]) : ((u = () => a(!1)), (t[4] = a), (t[5] = u));
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, G.jsx)(k, {
        id: `settings.cloudEnvironments.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label for cancelling a cloud environment action`,
      })),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== n || t[8] !== u
    ? ((f = (0, G.jsx)(g, {
        color: `secondary`,
        disabled: n,
        onClick: u,
        type: `button`,
        children: d,
      })),
      (t[7] = n),
      (t[8] = u),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(k, {
        id: `settings.cloudEnvironments.resetCache.confirm`,
        defaultMessage: `Reset cache`,
        description: `Button label for confirming a cloud environment cache reset`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === n
    ? (m = t[12])
    : ((m = (0, G.jsx)(g, {
        color: `primary`,
        loading: n,
        type: `submit`,
        children: p,
      })),
      (t[11] = n),
      (t[12] = m));
  let h;
  t[13] !== f || t[14] !== m
    ? ((h = (0, G.jsxs)(oe, { children: [f, m] })),
      (t[13] = f),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let _;
  t[16] !== o || t[17] !== h
    ? ((_ = (0, G.jsxs)(me, { as: `form`, onSubmit: o, children: [l, h] })),
      (t[16] = o),
      (t[17] = h),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== a || t[20] !== r || t[21] !== _
      ? ((v = (0, G.jsx)(s, { open: r, onOpenChange: a, children: _ })),
        (t[19] = a),
        (t[20] = r),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var pt,
  G,
  mt = e(() => {
    ((pt = d()), pe(), v(), r(), P(), (G = L()));
  });
function K(e) {
  let t = (0, gt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, _t.jsx)(`input`, {
          ...e,
          className: `w-72 max-w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function ht(e) {
  let t = (0, gt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, _t.jsx)(`textarea`, {
          ...e,
          className: `w-72 max-w-full resize-y rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
var gt,
  _t,
  vt = e(() => {
    ((gt = d()), (_t = L()));
  });
function yt(e) {
  let t = (0, Et.c)(16),
    { form: n, isPending: r } = e,
    i = z(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, q.jsx)(U.Header, {
        title: (0, q.jsx)(k, {
          id: `settings.cloudEnvironments.editor.scripts`,
          defaultMessage: `Scripts`,
          description: `Heading for cloud environment scripts`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== r
    ? ((o = (e) =>
        (0, q.jsx)(H, {
          label: (0, q.jsx)(k, {
            id: `settings.cloudEnvironments.editor.setup`,
            defaultMessage: `Setup script`,
            description: `Label for a cloud environment setup script`,
          }),
          description: (0, q.jsx)(k, {
            id: `settings.cloudEnvironments.editor.setup.description`,
            defaultMessage: `Runs after the repository is cloned; with caching enabled, it runs only for new containers`,
            description: `Explanation for the cloud environment setup script`,
          }),
          control: (0, q.jsx)(ht, {
            "aria-label": i.formatMessage({
              id: `settings.cloudEnvironments.editor.setup.aria`,
              defaultMessage: `Setup script`,
              description: `Accessible label for a cloud environment setup script`,
            }),
            disabled: r,
            rows: 5,
            value: e.state.value,
            onChange: (t) => e.handleChange(t.target.value),
          }),
        })),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n.Field || t[5] !== o
    ? ((s = (0, q.jsx)(n.Field, { name: `setupCommands`, children: o })),
      (t[4] = n.Field),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== i || t[8] !== r
    ? ((c = (e) =>
        (0, q.jsx)(H, {
          label: (0, q.jsx)(k, {
            id: `settings.cloudEnvironments.editor.maintenance`,
            defaultMessage: `Maintenance script`,
            description: `Label for a cloud environment maintenance script`,
          }),
          description: (0, q.jsx)(k, {
            id: `settings.cloudEnvironments.editor.maintenance.description`,
            defaultMessage: `Runs after branch checkout whenever ChatGPT reuses a cached container`,
            description: `Explanation for the cloud environment maintenance script`,
          }),
          control: (0, q.jsx)(ht, {
            "aria-label": i.formatMessage({
              id: `settings.cloudEnvironments.editor.maintenance.aria`,
              defaultMessage: `Maintenance script`,
              description: `Accessible label for a cloud environment maintenance script`,
            }),
            disabled: r,
            rows: 5,
            value: e.state.value,
            onChange: (t) => e.handleChange(t.target.value),
          }),
        })),
      (t[7] = i),
      (t[8] = r),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n.Field || t[11] !== c
    ? ((l = (0, q.jsx)(n.Field, {
        name: `maintenanceSetupCommands`,
        children: c,
      })),
      (t[10] = n.Field),
      (t[11] = c),
      (t[12] = l))
    : (l = t[12]);
  let u;
  return (
    t[13] !== s || t[14] !== l
      ? ((u = (0, q.jsxs)(U, {
          children: [
            a,
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(V, { children: [s, l] }),
            }),
          ],
        })),
        (t[13] = s),
        (t[14] = l),
        (t[15] = u))
      : (u = t[15]),
    u
  );
}
function bt(e) {
  let t = (0, Et.c)(7),
    { form: n, isPending: r } = e,
    i = z(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = (e) => {
        let t = e ?? { mode: `off` };
        return (0, q.jsxs)(U, {
          children: [
            (0, q.jsx)(U.Header, {
              title: (0, q.jsx)(k, {
                id: `settings.cloudEnvironments.editor.network`,
                defaultMessage: `Network access`,
                description: `Heading for cloud environment network access`,
              }),
            }),
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(V, {
                children: [
                  (0, q.jsx)(H, {
                    label: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.network.mode`,
                      defaultMessage: `Access`,
                      description: `Label for the cloud environment network access mode`,
                    }),
                    description: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.network.mode.description`,
                      defaultMessage: `Controls internet access after setup completes`,
                      description: `Explanation for cloud environment network access`,
                    }),
                    control: (0, q.jsx)(je, {
                      ariaLabel: i.formatMessage({
                        id: `settings.cloudEnvironments.editor.network.aria`,
                        defaultMessage: `Network access`,
                        description: `Accessible label for cloud environment network access`,
                      }),
                      options: [
                        {
                          id: `off`,
                          label: (0, q.jsx)(k, {
                            id: `settings.cloudEnvironments.network.off`,
                            defaultMessage: `Off`,
                            description: `Label for disabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `custom`,
                          label: (0, q.jsx)(k, {
                            id: `settings.cloudEnvironments.network.custom`,
                            defaultMessage: `Custom`,
                            description: `Label for custom cloud environment network access`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `on`,
                          label: (0, q.jsx)(k, {
                            id: `settings.cloudEnvironments.network.on`,
                            defaultMessage: `On`,
                            description: `Label for enabled cloud environment network access`,
                          }),
                          disabled: r,
                        },
                      ],
                      selectedId: t.mode,
                      onSelect: (e) =>
                        n.setFieldValue(`agentNetworkAccess`, {
                          ...t,
                          mode: e,
                        }),
                    }),
                  }),
                  t.mode === `custom`
                    ? (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(H, {
                            label: (0, q.jsx)(k, {
                              id: `settings.cloudEnvironments.editor.network.allowedDomains`,
                              defaultMessage: `Allowed domains`,
                              description: `Label for allowed cloud environment network domains`,
                            }),
                            control: (0, q.jsx)(K, {
                              "aria-label": i.formatMessage({
                                id: `settings.cloudEnvironments.editor.network.allowedDomains.aria`,
                                defaultMessage: `Allowed domains`,
                                description: `Accessible label for allowed cloud environment network domains`,
                              }),
                              disabled: r,
                              value: t.allowlist_domains ?? ``,
                              onChange: (e) =>
                                n.setFieldValue(`agentNetworkAccess`, {
                                  ...t,
                                  allowlist_domains: e.target.value,
                                }),
                            }),
                          }),
                          (0, q.jsx)(H, {
                            label: (0, q.jsx)(k, {
                              id: `settings.cloudEnvironments.editor.network.blockedDomains`,
                              defaultMessage: `Blocked domains`,
                              description: `Label for blocked cloud environment network domains`,
                            }),
                            control: (0, q.jsx)(K, {
                              "aria-label": i.formatMessage({
                                id: `settings.cloudEnvironments.editor.network.blockedDomains.aria`,
                                defaultMessage: `Blocked domains`,
                                description: `Accessible label for blocked cloud environment network domains`,
                              }),
                              disabled: r,
                              value: t.denylist_domains ?? ``,
                              onChange: (e) =>
                                n.setFieldValue(`agentNetworkAccess`, {
                                  ...t,
                                  denylist_domains: e.target.value,
                                }),
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          ],
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, q.jsx)(n.Subscribe, { selector: xt, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function xt(e) {
  return e.values.agentNetworkAccess;
}
function St(e) {
  let t = (0, Et.c)(9),
    { form: n, isPending: r, showAuthtranslator: i, showDockerInDocker: a } = e,
    o = z(),
    s;
  t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== i || t[4] !== a
    ? ((s = (e) =>
        (0, q.jsxs)(U, {
          children: [
            (0, q.jsx)(U.Header, {
              title: (0, q.jsx)(k, {
                id: `settings.cloudEnvironments.editor.runtime`,
                defaultMessage: `Runtime`,
                description: `Heading for cloud environment runtime settings`,
              }),
            }),
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(V, {
                children: [
                  (0, q.jsx)(H, {
                    label: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.runtime.autoSetup`,
                      defaultMessage: `Automatic setup`,
                      description: `Label for automatic cloud environment setup`,
                    }),
                    control: (0, q.jsx)(Ze, {
                      ariaLabel: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.autoSetup.aria`,
                        defaultMessage: `Automatic setup`,
                        description: `Accessible label for automatic cloud environment setup`,
                      }),
                      checked: e.autoSetupSettings?.use_auto_setup ?? !1,
                      disabled: r,
                      onChange: (e) =>
                        n.setFieldValue(`autoSetupSettings`, {
                          use_auto_setup: e,
                        }),
                    }),
                  }),
                  (0, q.jsx)(H, {
                    label: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.runtime.cache`,
                      defaultMessage: `Post-setup cache`,
                      description: `Label for cloud environment post-setup caching`,
                    }),
                    description: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.runtime.cache.description`,
                      defaultMessage: `Speeds up task startup by saving the container after setup`,
                      description: `Explanation for cloud environment post-setup caching`,
                    }),
                    control: (0, q.jsx)(Ze, {
                      ariaLabel: o.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.cache.aria`,
                        defaultMessage: `Post-setup cache`,
                        description: `Accessible label for cloud environment post-setup caching`,
                      }),
                      checked: e.cacheSettings?.post_setup_cache_enabled ?? !1,
                      disabled: r,
                      onChange: (e) =>
                        n.setFieldValue(`cacheSettings`, {
                          post_setup_cache_enabled: e,
                        }),
                    }),
                  }),
                  i
                    ? (0, q.jsx)(H, {
                        label: (0, q.jsx)(k, {
                          id: `settings.cloudEnvironments.editor.runtime.authtranslator`,
                          defaultMessage: `Authentication translation`,
                          description: `Label for cloud environment authentication translation`,
                        }),
                        control: (0, q.jsx)(Ze, {
                          ariaLabel: o.formatMessage({
                            id: `settings.cloudEnvironments.editor.runtime.authtranslator.aria`,
                            defaultMessage: `Authentication translation`,
                            description: `Accessible label for cloud environment authentication translation`,
                          }),
                          checked: e.enableAuthtranslator,
                          disabled: r,
                          onChange: (e) =>
                            n.setFieldValue(`enableAuthtranslator`, e),
                        }),
                      })
                    : null,
                  a
                    ? (0, q.jsx)(H, {
                        label: (0, q.jsx)(k, {
                          id: `settings.cloudEnvironments.editor.runtime.dockerInDocker`,
                          defaultMessage: `Docker in Docker`,
                          description: `Label for Docker in Docker support in a cloud environment`,
                        }),
                        control: (0, q.jsx)(Ze, {
                          ariaLabel: o.formatMessage({
                            id: `settings.cloudEnvironments.editor.runtime.dockerInDocker.aria`,
                            defaultMessage: `Docker in Docker`,
                            description: `Accessible label for Docker in Docker support in a cloud environment`,
                          }),
                          checked: e.enableDockerInDocker,
                          disabled: r,
                          onChange: (e) =>
                            n.setFieldValue(`enableDockerInDocker`, e),
                        }),
                      })
                    : null,
                ],
              }),
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== n.Subscribe || t[7] !== s
      ? ((c = (0, q.jsx)(n.Subscribe, { selector: Ct, children: s })),
        (t[6] = n.Subscribe),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Ct(e) {
  return e.values;
}
function wt(e) {
  let t = (0, Et.c)(7),
    { form: n, isPending: r } = e,
    i = z(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = (e) =>
        (0, q.jsxs)(U, {
          children: [
            (0, q.jsx)(U.Header, {
              title: (0, q.jsx)(k, {
                id: `settings.cloudEnvironments.editor.sharing`,
                defaultMessage: `Sharing`,
                description: `Heading for cloud environment sharing settings`,
              }),
            }),
            (0, q.jsx)(U.Content, {
              children: (0, q.jsxs)(V, {
                children: [
                  (0, q.jsx)(H, {
                    label: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.sharing.visibility`,
                      defaultMessage: `Visibility`,
                      description: `Label for cloud environment visibility`,
                    }),
                    control: (0, q.jsx)(je, {
                      ariaLabel: i.formatMessage({
                        id: `settings.cloudEnvironments.editor.sharing.visibility.aria`,
                        defaultMessage: `Environment visibility`,
                        description: `Accessible label for cloud environment visibility`,
                      }),
                      options: [
                        {
                          id: `private`,
                          label: (0, q.jsx)(k, {
                            id: `settings.cloudEnvironments.sharing.private`,
                            defaultMessage: `Private`,
                            description: `Label for a private cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `workspace`,
                          label: (0, q.jsx)(k, {
                            id: `settings.cloudEnvironments.sharing.workspace`,
                            defaultMessage: `Workspace`,
                            description: `Label for a workspace cloud environment`,
                          }),
                          disabled: r,
                        },
                        {
                          id: `public`,
                          label: (0, q.jsx)(k, {
                            id: `settings.cloudEnvironments.sharing.public`,
                            defaultMessage: `Public`,
                            description: `Label for a public cloud environment`,
                          }),
                          disabled: r,
                        },
                      ],
                      selectedId: e.shareSettings,
                      onSelect: (e) => n.setFieldValue(`shareSettings`, e),
                    }),
                  }),
                  (0, q.jsx)(H, {
                    label: (0, q.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.sharing.editors`,
                      defaultMessage: `Additional editors`,
                      description: `Label for additional cloud environment editors`,
                    }),
                    control: (0, q.jsx)(g, {
                      color: `secondary`,
                      disabled: r || e.shareSettings === `private`,
                      onClick: () =>
                        n.setFieldValue(`shareTargets`, [
                          ...e.shareTargets,
                          ``,
                        ]),
                      size: `toolbar`,
                      type: `button`,
                      children: (0, q.jsx)(k, {
                        id: `settings.cloudEnvironments.editor.sharing.addEditor`,
                        defaultMessage: `Add editor`,
                        description: `Button label for adding a cloud environment editor`,
                      }),
                    }),
                  }),
                  e.shareTargets.map((t, a) =>
                    (0, q.jsx)(
                      H,
                      {
                        label: null,
                        variant: `nested`,
                        control: (0, q.jsxs)(`div`, {
                          className: `flex w-full items-center gap-2`,
                          children: [
                            (0, q.jsx)(K, {
                              "aria-label": i.formatMessage(
                                {
                                  id: `settings.cloudEnvironments.editor.sharing.editor.aria`,
                                  defaultMessage: `Editor email {number}`,
                                  description: `Accessible label for a cloud environment editor email input`,
                                },
                                { number: a + 1 },
                              ),
                              disabled: r || e.shareSettings === `private`,
                              type: `email`,
                              value: t,
                              onChange: (t) =>
                                n.setFieldValue(
                                  `shareTargets`,
                                  e.shareTargets.map((e, n) =>
                                    n === a ? t.target.value : e,
                                  ),
                                ),
                            }),
                            (0, q.jsx)(g, {
                              color: `secondary`,
                              disabled: r || e.shareSettings === `private`,
                              onClick: () =>
                                n.setFieldValue(
                                  `shareTargets`,
                                  e.shareTargets.filter((e, t) => t !== a),
                                ),
                              size: `toolbar`,
                              type: `button`,
                              children: (0, q.jsx)(k, {
                                id: `settings.cloudEnvironments.editor.sharing.removeEditor`,
                                defaultMessage: `Remove`,
                                description: `Button label for removing a cloud environment editor`,
                              }),
                            }),
                          ],
                        }),
                      },
                      a,
                    ),
                  ),
                ],
              }),
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, q.jsx)(n.Subscribe, { selector: Tt, children: a })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Tt(e) {
  return e.values;
}
var Et,
  q,
  Dt = e(() => {
    ((Et = d()), pe(), v(), Ae(), Xe(), et(), Ye(), qe(), vt(), (q = L()));
  });
function Ot(e, t) {
  let n = It(e);
  return {
    label: e?.label ?? ``,
    description: e?.description ?? ``,
    shareSettings: e?.share_settings ?? `private`,
    shareTargets: e?.share_targets?.map(({ email: e }) => e) ?? [],
    machineId: e?.machine_id ?? Ht,
    repositoryId: e?.repos[0] ?? ``,
    repositoryName:
      e?.repo_map?.[e.repos[0] ?? ``]?.repository_full_name ??
      e?.repos[0] ??
      ``,
    githubConnectorId: e?.github_connector_id ?? t ?? null,
    workspaceDirectory: e?.workspace_dir ?? `/workspace`,
    agentNetworkAccess: e?.agent_network_access ?? { mode: `off` },
    setupCommands: Pt(e?.setup),
    maintenanceSetupCommands: Pt(e?.maintenance_setup),
    secrets: n.map(({ name: e, domain: t }) => ({
      key: e,
      value: Vt,
      domain: t,
      previousKey: e,
      previousDomain: t,
    })),
    environmentVariables: Object.entries(e?.env_vars ?? {}).map(([e, t]) => ({
      key: e,
      value: t,
    })),
    autoSetupSettings: e?.auto_setup_settings ?? { use_auto_setup: !0 },
    cacheSettings: e?.cache_settings ?? { post_setup_cache_enabled: !0 },
    enableAuthtranslator: e?.enable_authtranslator ?? !1,
    enableDockerInDocker: e?.enable_docker_in_docker ?? !1,
  };
}
function kt(e) {
  let t = {};
  (e.label.trim() === `` && (t.label = `required`),
    e.machineId === `` && (t.machineId = `required`),
    e.repositoryId === `` && (t.repositoryId = `required`));
  let n = e.secrets.map(({ key: e, domain: t }) => ({
    key: e.trim(),
    identity: Rt(e.trim(), zt(t)),
  }));
  n.some(({ key: e }) => e === ``)
    ? (t.secrets = `name-required`)
    : new Set(n.map(({ identity: e }) => e)).size === n.length
      ? e.secrets.some(({ value: e }) => e.trim() === ``)
        ? (t.secrets = `value-required`)
        : e.secrets.some(Bt) && (t.secrets = `global-rename-value-required`)
      : (t.secrets = `duplicate-name`);
  let r = e.environmentVariables.map(({ key: e }) => e.trim());
  return (
    r.some((e) => e === ``)
      ? (t.environmentVariables = `name-required`)
      : new Set(r).size === r.length
        ? e.environmentVariables.some(({ value: e }) => e.trim() === ``) &&
          (t.environmentVariables = `value-required`)
        : (t.environmentVariables = `duplicate-name`),
    t
  );
}
function At(e, t, n) {
  return (t || e.machineId === n) && Object.keys(kt(e)).length === 0;
}
function jt(e) {
  return {
    label: e.label.trim(),
    description: e.description,
    machine_id: e.machineId,
    repos: [e.repositoryId],
    github_connector_id: e.githubConnectorId,
    workspace_dir: e.workspaceDirectory,
    agent_network_access: e.agentNetworkAccess,
    setup: e.setupCommands,
    maintenance_setup: e.maintenanceSetupCommands,
    env_vars: Object.fromEntries(
      e.environmentVariables.map(({ key: e, value: t }) => [e.trim(), t]),
    ),
    secrets_with_domains: e.secrets.map(({ key: e, value: t, domain: n }) => ({
      name: e.trim(),
      domain: zt(n),
      value: t,
    })),
    share_settings: e.shareSettings,
    share_targets: Ft(e),
    auto_setup_settings: e.autoSetupSettings,
    cache_settings: e.cacheSettings,
    enable_authtranslator: e.enableAuthtranslator,
    enable_docker_in_docker: e.enableDockerInDocker,
  };
}
function Mt(e) {
  let t = e.indexOf(`:`);
  return t === -1 ? null : e.slice(7, t);
}
function Nt(e, t) {
  return {
    etag: t.etag,
    label: e.label.trim(),
    description: e.description,
    machine_id: e.machineId,
    workspace_dir: e.workspaceDirectory,
    agent_network_access: e.agentNetworkAccess,
    setup: e.setupCommands,
    maintenance_setup: e.maintenanceSetupCommands,
    env_vars: Object.fromEntries(
      e.environmentVariables.map(({ key: e, value: t }) => [e.trim(), t]),
    ),
    secrets_with_domains: Lt(e.secrets, It(t)),
    share_settings: e.shareSettings,
    share_targets: Ft(e),
    auto_setup_settings: e.autoSetupSettings,
    cache_settings: e.cacheSettings,
    enable_authtranslator: e.enableAuthtranslator,
    enable_docker_in_docker: e.enableDockerInDocker,
  };
}
function Pt(e) {
  return Array.isArray(e)
    ? e.join(`
`)
    : (e ?? ``);
}
function Ft(e) {
  return e.shareSettings === `private`
    ? []
    : e.shareTargets
        .map((e) => e.trim())
        .filter((e) => e !== ``)
        .map((e) => ({ email: e, permission: `editor`, type: `user` }));
}
function It(e) {
  return e?.secrets_with_domains == null
    ? Object.keys(e?.secrets ?? {}).map((e) => {
        let [t, ...n] = e.split(`::`);
        return n.length === 0
          ? { name: e, domain: null }
          : { name: n.join(`::`) || e, domain: t || null };
      })
    : e.secrets_with_domains.flatMap((e) =>
        typeof e.name != `string` || e.name === ``
          ? []
          : [{ name: e.name, domain: e.domain ?? null }],
      );
}
function Lt(e, t) {
  let n = new Set(),
    r = [];
  for (let t of e) {
    let e = t.key.trim(),
      i = zt(t.domain);
    if (t.previousDomain === void 0) {
      t.value !== `` &&
        (n.add(Rt(e, i)), r.push({ name: e, domain: i, value: t.value }));
      continue;
    }
    let a = t.previousKey ?? t.key,
      o = zt(t.previousDomain);
    n.add(Rt(a, o));
    let s = a !== e,
      c = o !== i,
      l = t.value !== Vt;
    (!s && !c && !l) ||
      r.push({
        name: e,
        domain: i,
        value: l ? t.value : null,
        previous_domain: o,
        ...(s ? { previous_name: a } : {}),
      });
  }
  for (let { name: e, domain: i } of t) {
    let t = Rt(e, i);
    n.has(t) ||
      r.push({ name: e, domain: null, value: null, previous_domain: i });
  }
  return r;
}
function Rt(e, t) {
  return `${e}::${t ?? `__global__`}`;
}
function zt(e) {
  return e?.trim() || null;
}
function Bt(e) {
  return (
    e.previousDomain !== void 0 &&
    e.previousDomain == null &&
    zt(e.domain) == null &&
    e.previousKey != null &&
    e.previousKey !== e.key.trim() &&
    e.value === `<REDACTED>`
  );
}
var Vt,
  Ht,
  Ut = e(() => {
    ((Vt = `<REDACTED>`), (Ht = `wham-public/wham-universal`));
  });
function Wt(e) {
  let t = (0, Jt.c)(7),
    { form: n, isPending: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(U.Header, {
        title: (0, J.jsx)(k, {
          id: `settings.cloudEnvironments.editor.variables`,
          defaultMessage: `Variables and secrets`,
          description: `Heading for cloud environment variables and secrets`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = (e) => {
        let t = kt(e);
        return (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(Kt, {
              entries: e.environmentVariables,
              error: t.environmentVariables
                ? (0, J.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.variables.invalid`,
                    defaultMessage: `Variable names and values are required, and names must be unique`,
                    description: `Validation message for invalid cloud environment variables`,
                  })
                : void 0,
              isPending: r,
              label: (0, J.jsx)(k, {
                id: `settings.cloudEnvironments.editor.environmentVariables`,
                defaultMessage: `Environment variables`,
                description: `Label for cloud environment variables`,
              }),
              onChange: (e) => n.setFieldValue(`environmentVariables`, e),
            }),
            (0, J.jsx)(qt, {
              entries: e.secrets,
              error: t.secrets
                ? (0, J.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.secrets.invalid`,
                    defaultMessage: `Secret names and values are required, and name and domain combinations must be unique. Renaming a global secret requires a new value`,
                    description: `Validation message for invalid cloud environment secrets`,
                  })
                : void 0,
              isPending: r,
              onChange: (e) => n.setFieldValue(`secrets`, e),
            }),
          ],
        });
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== n.Subscribe || t[5] !== a
      ? ((o = (0, J.jsxs)(U, {
          children: [
            i,
            (0, J.jsx)(U.Content, {
              children: (0, J.jsx)(n.Subscribe, { selector: Gt, children: a }),
            }),
          ],
        })),
        (t[4] = n.Subscribe),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Gt(e) {
  return e.values;
}
function Kt(e) {
  let t = (0, Jt.c)(19),
    { entries: n, error: r, isPending: i, label: a, onChange: o } = e,
    s = z(),
    c;
  t[0] !== n || t[1] !== o
    ? ((c = () => o([...n, { key: ``, value: `` }])),
      (t[0] = n),
      (t[1] = o),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(k, {
        id: `settings.cloudEnvironments.editor.addVariable`,
        defaultMessage: `Add variable`,
        description: `Button label for adding a cloud environment variable`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== i || t[5] !== c
    ? ((u = (0, J.jsx)(g, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: l,
      })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== r || t[8] !== a || t[9] !== u
    ? ((d = (0, J.jsx)(H, { description: r, label: a, control: u })),
      (t[7] = r),
      (t[8] = a),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== n || t[12] !== s || t[13] !== i || t[14] !== o
    ? ((f = n.map((e, t) =>
        (0, J.jsx)(
          H,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(K, {
                  "aria-label": s.formatMessage({
                    id: `settings.cloudEnvironments.editor.variable.name`,
                    defaultMessage: `Variable name`,
                    description: `Accessible label for a cloud environment variable name`,
                  }),
                  disabled: i,
                  value: e.key,
                  onChange: (e) =>
                    o(
                      n.map((n, r) =>
                        r === t ? { ...n, key: e.target.value } : n,
                      ),
                    ),
                }),
                (0, J.jsx)(K, {
                  "aria-label": s.formatMessage({
                    id: `settings.cloudEnvironments.editor.variable.value`,
                    defaultMessage: `Variable value`,
                    description: `Accessible label for a cloud environment variable value`,
                  }),
                  disabled: i,
                  value: e.value,
                  onChange: (e) =>
                    o(
                      n.map((n, r) =>
                        r === t ? { ...n, value: e.target.value } : n,
                      ),
                    ),
                }),
                (0, J.jsx)(g, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => o(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.removeVariable`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment variable`,
                  }),
                }),
              ],
            }),
          },
          t,
        ),
      )),
      (t[11] = n),
      (t[12] = s),
      (t[13] = i),
      (t[14] = o),
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== d || t[17] !== f
      ? ((p = (0, J.jsxs)(V, { children: [d, f] })),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function qt(e) {
  let t = (0, Jt.c)(19),
    { entries: n, error: r, isPending: i, onChange: a } = e,
    o = z(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(k, {
        id: `settings.cloudEnvironments.editor.secrets`,
        defaultMessage: `Secrets`,
        description: `Label for cloud environment secrets`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== n || t[2] !== a
    ? ((c = () => a([...n, { key: ``, value: `` }])),
      (t[1] = n),
      (t[2] = a),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(k, {
        id: `settings.cloudEnvironments.editor.addSecret`,
        defaultMessage: `Add secret`,
        description: `Button label for adding a cloud environment secret`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== i || t[6] !== c
    ? ((u = (0, J.jsx)(g, {
        color: `secondary`,
        disabled: i,
        onClick: c,
        size: `toolbar`,
        type: `button`,
        children: l,
      })),
      (t[5] = i),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== r || t[9] !== u
    ? ((d = (0, J.jsx)(H, { description: r, label: s, control: u })),
      (t[8] = r),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== n || t[12] !== o || t[13] !== i || t[14] !== a
    ? ((f = n.map((e, t) =>
        (0, J.jsx)(
          H,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(K, {
                  "aria-label": o.formatMessage({
                    id: `settings.cloudEnvironments.editor.secret.name`,
                    defaultMessage: `Secret name`,
                    description: `Accessible label for a cloud environment secret name`,
                  }),
                  disabled: i,
                  value: e.key,
                  onChange: (e) =>
                    a(
                      n.map((n, r) =>
                        r === t ? { ...n, key: e.target.value } : n,
                      ),
                    ),
                }),
                (0, J.jsx)(K, {
                  "aria-label": o.formatMessage({
                    id: `settings.cloudEnvironments.editor.secret.value`,
                    defaultMessage: `Secret value`,
                    description: `Accessible label for a cloud environment secret value`,
                  }),
                  disabled: i,
                  placeholder: e.previousKey
                    ? o.formatMessage({
                        id: `settings.cloudEnvironments.editor.secret.keepPlaceholder`,
                        defaultMessage: `Leave unchanged to keep`,
                        description: `Placeholder for an existing cloud environment secret value`,
                      })
                    : void 0,
                  type: `password`,
                  value: e.value,
                  onChange: (e) =>
                    a(
                      n.map((n, r) =>
                        r === t ? { ...n, value: e.target.value } : n,
                      ),
                    ),
                }),
                (0, J.jsx)(g, {
                  color: `secondary`,
                  disabled: i,
                  onClick: () => a(n.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.removeSecret`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment secret`,
                  }),
                }),
                (0, J.jsx)(`div`, {
                  className: `col-span-2`,
                  children: (0, J.jsx)(K, {
                    "aria-label": o.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.domain`,
                      defaultMessage: `Secret domain`,
                      description: `Accessible label for a cloud environment secret domain`,
                    }),
                    disabled: i,
                    placeholder: o.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.domainPlaceholder`,
                      defaultMessage: `Optional domain`,
                      description: `Placeholder for an optional cloud environment secret domain`,
                    }),
                    value: e.domain ?? ``,
                    onChange: (e) =>
                      a(
                        n.map((n, r) =>
                          r === t ? { ...n, domain: e.target.value } : n,
                        ),
                      ),
                  }),
                }),
              ],
            }),
          },
          `${e.previousKey ?? `new`}-${t}`,
        ),
      )),
      (t[11] = n),
      (t[12] = o),
      (t[13] = i),
      (t[14] = a),
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== d || t[17] !== f
      ? ((p = (0, J.jsxs)(V, { children: [d, f] })),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
var Jt,
  J,
  Yt = e(() => {
    ((Jt = d()), pe(), v(), et(), Ye(), qe(), Ut(), vt(), (J = L()));
  });
function Xt(e, t, n) {
  return T.safeGet(`/wham/environments/search`, {
    parameters: {
      query: { query: e || void 0, cursor: t ?? void 0, limit: n },
    },
  });
}
function Zt(e, t) {
  return !!e.is_pinned == !!t.is_pinned
    ? (t.task_count ?? 0) - (e.task_count ?? 0) ||
        e.label.localeCompare(t.label)
    : e.is_pinned
      ? -1
      : 1;
}
function Qt(e) {
  return T.safeGet(
    `/wham/environments/{environment_id}/with-creator-and-machine`,
    { parameters: { path: { environment_id: e } } },
  );
}
function $t() {
  return T.safeGet(`/wham/machines`);
}
async function en() {
  let { connectors: e } = await T.safeGet(`/aip/connectors/product_specific`, {
      parameters: { query: { purpose: `hermes` } },
      additionalHeaders: un,
    }),
    t = e
      .filter(
        (e) =>
          e.status !== `DISABLED_BY_ADMIN` &&
          (e.id === cn || e.template_id === ln),
      )
      .sort((e, t) =>
        e.id === cn ? -1 : t.id === cn ? 1 : e.name.localeCompare(t.name),
      ),
    n = await Promise.all(
      t.map((e) =>
        T.safeGet(`/aip/connectors/{connector_id}/link`, {
          parameters: { path: { connector_id: e.id } },
          additionalHeaders: un,
        }),
      ),
    );
  return t.filter((e, t) => n[t].link != null);
}
function tn(e, t) {
  return T.safeGet(`/wham/github/repositories/search/all-installations`, {
    parameters: { query: { query: e, limit: 20, connector_id: t } },
  });
}
function nn(e) {
  return T.safePost(`/wham/environments`, { requestBody: e });
}
function rn({ environmentId: e, requestBody: t }) {
  return T.safePatch(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
    requestBody: t,
  });
}
function an(e) {
  return T.safeDelete(`/wham/environments/{environment_id}`, {
    parameters: { path: { environment_id: e } },
  });
}
function on(e) {
  return T.safePost(`/wham/environments/{environment_id}/reset-cache`, {
    parameters: { path: { environment_id: e } },
  });
}
function sn({ environmentId: e, etag: t, isPinned: n }) {
  return rn({ environmentId: e, requestBody: { etag: t, is_pinned: n } });
}
var cn,
  ln,
  un,
  dn = e(() => {
    (E(),
      (cn = `connector_76869538009648d5b282a4bb21c3d157`),
      (ln = `templated_apps_GitHubEnterprise`),
      (un = { "OAI-Product-Sku": `CODEX` }));
  });
function fn(e) {
  return a({
    queryKey: [`cloud-environments`, `search`, e],
    queryFn: ({ pageParam: t }) => Xt(e, t, t == null ? 25 : 100),
    initialPageParam: null,
    getNextPageParam: (e) => e.cursor ?? null,
    refetchOnMount: !0,
    retry: !1,
    staleTime: ne.FIVE_MINUTES,
  });
}
async function pn(e) {
  await Promise.all([
    e.queryClient.invalidateQueries({
      queryKey: [`cloud-environments`, `search`],
    }),
    e.queryClient.invalidateQueries({ queryKey: [`environments`] }),
    e.queryClient.invalidateQueries({
      queryKey: [`workspace`, `environments-search`],
    }),
    e.queryClient.invalidateQueries({
      queryKey: [`workspace`, `environments-by-repo`],
    }),
  ]);
}
var mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn = e(() => {
    (Se(),
      O(),
      ee(),
      re(),
      dn(),
      (mn = se(R, (e) => ({
        queryKey: [`cloud-environments`, `details`, e],
        queryFn: () => Qt(e),
        refetchOnMount: !0,
        staleTime: ne.FIVE_MINUTES,
      }))),
      (hn = A(R, () => ({
        queryKey: [`cloud-environments`, `machines`],
        queryFn: $t,
        refetchOnMount: !0,
        retry: !1,
        staleTime: ne.FIVE_MINUTES,
      }))),
      (gn = A(R, () => ({
        queryKey: [`cloud-environments`, `github-connectors`],
        queryFn: en,
        refetchOnMount: !0,
        retry: !1,
        staleTime: ne.FIVE_MINUTES,
      }))),
      (_n = se(R, ({ connectorId: e, query: t }) => ({
        queryKey: [`cloud-environments`, `repositories`, e, t],
        enabled: t !== `` && e != null,
        queryFn: () => {
          if (e == null)
            throw Error(`A connector ID is required to search repositories`);
          return tn(t, e);
        },
        refetchOnMount: !0,
        retry: !1,
        staleTime: ne.FIVE_MINUTES,
      }))),
      (vn = _e(R, ({ scope: e }) => ({
        mutationFn: nn,
        onSuccess: () => pn(e),
      }))),
      (yn = _e(R, ({ scope: e }) => ({
        mutationFn: (e) => rn(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([pn(e), e.query.invalidate(mn, n, { exact: !0 })]);
        },
      }))),
      (bn = _e(R, ({ scope: e }) => ({
        mutationFn: an,
        onSuccess: async (t, n) => {
          (e.queryClient.removeQueries({
            queryKey: e.query.getOptions(mn, n).queryKey,
          }),
            await pn(e));
        },
      }))),
      (xn = _e(R, ({ scope: e }) => ({
        mutationFn: (e) => on(e),
        onSuccess: (t, n) => e.query.invalidate(mn, n, { exact: !0 }),
      }))),
      (Sn = _e(R, ({ scope: e }) => ({
        mutationFn: (e) => sn(e),
        onSuccess: async (t, { environmentId: n }) => {
          await Promise.all([pn(e), e.query.invalidate(mn, n, { exact: !0 })]);
        },
      }))));
  });
function wn(e) {
  let t = (0, En.c)(24),
    { form: n, isPending: r, preferredConnectorId: a } = e,
    o = z(),
    [s, l] = (0, Dn.useState)(``),
    u;
  t[0] === s ? (u = t[1]) : ((u = s.trim()), (t[0] = s), (t[1] = u));
  let d = p(u, 200),
    [f, m] = (0, Dn.useState)(null),
    h = i(gn),
    g;
  t[2] !== h.data || t[3] !== a || t[4] !== f
    ? ((g =
        h.data?.find((e) => e.id === (f ?? a))?.id ?? h.data?.[0]?.id ?? null),
      (t[2] = h.data),
      (t[3] = a),
      (t[4] = f),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v;
  t[6] !== _ || t[7] !== d
    ? ((v = { connectorId: _, query: d }), (t[6] = _), (t[7] = d), (t[8] = v))
    : (v = t[8]);
  let y = xe(_n, v),
    S;
  t[9] === s ? (S = t[10]) : ((S = s.trim()), (t[9] = s), (t[10] = S));
  let C = d !== S,
    T;
  t[11] !== _ ||
  t[12] !== h ||
  t[13] !== d ||
  t[14] !== n ||
  t[15] !== o ||
  t[16] !== C ||
  t[17] !== r ||
  t[18] !== s ||
  t[19] !== y
    ? ((T = (e) => {
        let { repositoryId: t, repositoryName: i } = e;
        return (0, Y.jsxs)(w, {
          contentMaxHeight: `list`,
          contentWidth: `menu`,
          disabled: r || h.isPending,
          triggerButton: (0, Y.jsx)(He, {
            disabled: r || h.isPending,
            children:
              t === ``
                ? (0, Y.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.repository.select`,
                    defaultMessage: `Select a repository`,
                    description: `Placeholder for the cloud environment repository selector`,
                  })
                : i,
          }),
          children: [
            h.isError
              ? (0, Y.jsx)(c.Item, {
                  onSelect: () => void h.refetch(),
                  children: (0, Y.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.connector.retry`,
                    defaultMessage: `Retry loading GitHub connections`,
                    description: `Button label for retrying GitHub connections in the cloud environment repository selector`,
                  }),
                })
              : h.data?.length === 0
                ? (0, Y.jsx)(c.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(k, {
                      id: `settings.cloudEnvironments.editor.connector.empty`,
                      defaultMessage: `No GitHub connections available`,
                      description: `Empty state when no GitHub connection can be used for a cloud environment`,
                    }),
                  })
                : h.data != null && h.data.length > 1
                  ? (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsxs)(c.Section, {
                          children: [
                            (0, Y.jsx)(c.SectionLabel, {
                              children: (0, Y.jsx)(k, {
                                id: `settings.cloudEnvironments.editor.connector`,
                                defaultMessage: `GitHub connection`,
                                description: `Label for choosing a GitHub connection when creating a cloud environment`,
                              }),
                            }),
                            h.data.map((e) =>
                              (0, Y.jsx)(
                                c.Item,
                                {
                                  RightIcon: e.id === _ ? x : void 0,
                                  onSelect: () => {
                                    (m(e.id),
                                      n.setFieldValue(
                                        `githubConnectorId`,
                                        e.id,
                                      ),
                                      n.setFieldValue(`repositoryId`, ``),
                                      n.setFieldValue(`repositoryName`, ``));
                                  },
                                  children: e.name,
                                },
                                e.id,
                              ),
                            ),
                          ],
                        }),
                        (0, Y.jsx)(c.Separator, {}),
                      ],
                    })
                  : null,
            _ == null
              ? null
              : (0, Y.jsxs)(Y.Fragment, {
                  children: [
                    (0, Y.jsx)(c.SearchInput, {
                      "aria-label": o.formatMessage(On.repositorySearch),
                      autoFocus: !0,
                      placeholder: o.formatMessage(On.repositorySearch),
                      trailingContent:
                        y.isFetching || C
                          ? (0, Y.jsx)(b, { className: `icon-2xs` })
                          : void 0,
                      value: s,
                      onChange: (e) => l(e.currentTarget.value),
                    }),
                    C
                      ? null
                      : d === ``
                        ? (0, Y.jsx)(c.Message, {
                            centered: !0,
                            children: (0, Y.jsx)(k, {
                              id: `settings.cloudEnvironments.editor.repository.searchPrompt`,
                              defaultMessage: `Search by repository name`,
                              description: `Prompt shown before searching for a cloud environment repository`,
                            }),
                          })
                        : y.isError
                          ? (0, Y.jsx)(c.Message, {
                              centered: !0,
                              children: (0, Y.jsx)(k, {
                                id: `settings.cloudEnvironments.editor.repository.error`,
                                defaultMessage: `Unable to load repositories`,
                                description: `Error shown when repository search fails`,
                              }),
                            })
                          : y.data?.repositories.length === 0
                            ? (0, Y.jsx)(c.Message, {
                                centered: !0,
                                children: (0, Y.jsx)(k, {
                                  id: `settings.cloudEnvironments.editor.repository.empty`,
                                  defaultMessage: `No repositories found`,
                                  description: `Empty state for cloud environment repository search`,
                                }),
                              })
                            : y.data?.repositories.map((e) =>
                                (0, Y.jsx)(
                                  c.Item,
                                  {
                                    onSelect: () => {
                                      (n.setFieldValue(`repositoryId`, e.id),
                                        n.setFieldValue(
                                          `repositoryName`,
                                          e.repository_full_name,
                                        ),
                                        n.setFieldValue(
                                          `githubConnectorId`,
                                          Mt(e.id) ?? _,
                                        ));
                                    },
                                    children: e.repository_full_name,
                                  },
                                  e.id,
                                ),
                              ),
                  ],
                }),
          ],
        });
      }),
      (t[11] = _),
      (t[12] = h),
      (t[13] = d),
      (t[14] = n),
      (t[15] = o),
      (t[16] = C),
      (t[17] = r),
      (t[18] = s),
      (t[19] = y),
      (t[20] = T))
    : (T = t[20]);
  let E;
  return (
    t[21] !== n.Subscribe || t[22] !== T
      ? ((E = (0, Y.jsx)(n.Subscribe, { selector: Tn, children: T })),
        (t[21] = n.Subscribe),
        (t[22] = T),
        (t[23] = E))
      : (E = t[23]),
    E
  );
}
function Tn(e) {
  return {
    repositoryId: e.values.repositoryId,
    repositoryName: e.values.repositoryName,
  };
}
var En,
  Dn,
  Y,
  On,
  kn = e(() => {
    ((En = d()),
      O(),
      (Dn = t(m(), 1)),
      pe(),
      I(),
      l(),
      Ce(),
      Be(),
      u(),
      Ut(),
      Cn(),
      (Y = L()),
      (On = ge({
        repositorySearch: {
          id: `settings.cloudEnvironments.editor.repository.search`,
          defaultMessage: `Search repositories`,
          description: `Accessible label and placeholder for searching repositories when creating a cloud environment`,
        },
      })));
  });
function An(e) {
  let t = (0, Pn.c)(7),
    { environment: n, onCancel: r, onSaved: i } = e;
  if (n == null) {
    let e;
    return (
      t[0] !== r || t[1] !== i
        ? ((e = (0, X.jsx)(jn, { onCancel: r, onSaved: i })),
          (t[0] = r),
          (t[1] = i),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i
      ? ((a = (0, X.jsx)(Mn, {
          environment: n,
          onCancel: r,
          onSaved: i,
          preferredConnectorId: null,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function jn(e) {
  let t = (0, Pn.c)(4),
    { onCancel: n, onSaved: r } = e,
    i = rt().data?.preferred_github_connector_id ?? null,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, X.jsx)(Mn, {
          environment: null,
          onCancel: n,
          onSaved: r,
          preferredConnectorId: i,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Mn(e) {
  let t = (0, Pn.c)(35),
    { environment: n, onCancel: r, onSaved: a, preferredConnectorId: o } = e,
    s = S(R),
    l = z(),
    { planAtLogin: u } = ue(),
    d = i(hn),
    f = i(vn),
    p = i(yn),
    m = j(`479474474`),
    h = j(`2664309699`),
    _;
  t[0] === u ? (_ = t[1]) : ((_ = be(u) || fe(u)), (t[0] = u), (t[1] = _));
  let v = _,
    y = n ?? void 0,
    b;
  t[2] !== o || t[3] !== y
    ? ((b = Ot(y, o)), (t[2] = o), (t[3] = y), (t[4] = b))
    : (b = t[4]);
  let x;
  t[5] !== f ||
  t[6] !== n ||
  t[7] !== l ||
  t[8] !== d.data ||
  t[9] !== a ||
  t[10] !== s ||
  t[11] !== p
    ? ((x = (e) => {
        let { value: t } = e;
        if (
          At(t, d.data?.some((e) => e.id === t.machineId) === !0, n?.machine_id)
        ) {
          if (n == null) {
            f.mutate(jt(t), {
              onSuccess: (e) => {
                (s.get(C).success(
                  l.formatMessage({
                    id: `settings.cloudEnvironments.create.success`,
                    defaultMessage: `Created cloud environment`,
                    description: `Toast shown after creating a cloud environment`,
                  }),
                ),
                  a(e.id));
              },
              onError: () => {
                s.get(C).danger(
                  l.formatMessage({
                    id: `settings.cloudEnvironments.create.error`,
                    defaultMessage: `Unable to create cloud environment`,
                    description: `Toast shown when creating a cloud environment fails`,
                  }),
                );
              },
            });
            return;
          }
          p.mutate(
            { environmentId: n.id, requestBody: Nt(t, n) },
            {
              onSuccess: () => {
                (s.get(C).success(
                  l.formatMessage({
                    id: `settings.cloudEnvironments.update.success`,
                    defaultMessage: `Updated cloud environment`,
                    description: `Toast shown after updating a cloud environment`,
                  }),
                ),
                  a(n.id));
              },
              onError: () => {
                s.get(C).danger(
                  l.formatMessage({
                    id: `settings.cloudEnvironments.update.error`,
                    defaultMessage: `Unable to update cloud environment. Reload and try again`,
                    description: `Toast shown when updating a cloud environment fails`,
                  }),
                );
              },
            },
          );
        }
      }),
      (t[5] = f),
      (t[6] = n),
      (t[7] = l),
      (t[8] = d.data),
      (t[9] = a),
      (t[10] = s),
      (t[11] = p),
      (t[12] = x))
    : (x = t[12]);
  let T;
  t[13] !== b || t[14] !== x
    ? ((T = { defaultValues: b, onSubmit: x }),
      (t[13] = b),
      (t[14] = x),
      (t[15] = T))
    : (T = t[15]);
  let E = tt(T),
    D = f.isPending || p.isPending,
    O;
  t[16] === E
    ? (O = t[17])
    : ((O = (e) => {
        (e.preventDefault(), E.handleSubmit());
      }),
      (t[16] = E),
      (t[17] = O));
  let A;
  t[18] !== n ||
  t[19] !== E ||
  t[20] !== l ||
  t[21] !== D ||
  t[22] !== d ||
  t[23] !== r ||
  t[24] !== o ||
  t[25] !== m ||
  t[26] !== h ||
  t[27] !== v
    ? ((A = (e) => {
        let t = kt(e),
          i = d.data?.find((t) => t.id === e.machineId),
          a = n?.machine_id === e.machineId ? n.machine : void 0;
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(U, {
              children: (0, X.jsx)(U.Content, {
                children: (0, X.jsxs)(V, {
                  children: [
                    (0, X.jsx)(E.Field, {
                      name: `label`,
                      children: (e) =>
                        (0, X.jsx)(H, {
                          label: (0, X.jsx)(k, {
                            id: `settings.cloudEnvironments.editor.name`,
                            defaultMessage: `Name`,
                            description: `Label for a cloud environment name`,
                          }),
                          description: t.label
                            ? (0, X.jsx)(k, {
                                id: `settings.cloudEnvironments.editor.name.required`,
                                defaultMessage: `Name is required`,
                                description: `Validation message for a missing cloud environment name`,
                              })
                            : void 0,
                          control: (0, X.jsx)(K, {
                            "aria-label": l.formatMessage({
                              id: `settings.cloudEnvironments.editor.name.aria`,
                              defaultMessage: `Environment name`,
                              description: `Accessible label for a cloud environment name input`,
                            }),
                            disabled: D,
                            maxLength: 64,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                    (0, X.jsx)(E.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, X.jsx)(H, {
                          label: (0, X.jsx)(k, {
                            id: `settings.cloudEnvironments.editor.description`,
                            defaultMessage: `Description`,
                            description: `Label for a cloud environment description`,
                          }),
                          control: (0, X.jsx)(K, {
                            "aria-label": l.formatMessage({
                              id: `settings.cloudEnvironments.editor.description.aria`,
                              defaultMessage: `Environment description`,
                              description: `Accessible label for a cloud environment description input`,
                            }),
                            disabled: D,
                            maxLength: 512,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                    (0, X.jsx)(H, {
                      label: (0, X.jsx)(k, {
                        id: `settings.cloudEnvironments.editor.repository`,
                        defaultMessage: `Repository`,
                        description: `Label for a cloud environment repository`,
                      }),
                      description: t.repositoryId
                        ? (0, X.jsx)(k, {
                            id: `settings.cloudEnvironments.editor.repository.required`,
                            defaultMessage: `Repository is required`,
                            description: `Validation message for a missing cloud environment repository`,
                          })
                        : void 0,
                      control:
                        n == null
                          ? (0, X.jsx)(wn, {
                              form: E,
                              isPending: D,
                              preferredConnectorId: o,
                            })
                          : (0, X.jsx)(K, {
                              "aria-label": l.formatMessage({
                                id: `settings.cloudEnvironments.editor.repository.aria`,
                                defaultMessage: `Repository`,
                                description: `Accessible label for a cloud environment repository input`,
                              }),
                              disabled: !0,
                              value: e.repositoryName,
                            }),
                    }),
                    (0, X.jsx)(E.Field, {
                      name: `machineId`,
                      children: (e) =>
                        (0, X.jsx)(H, {
                          label: (0, X.jsx)(k, {
                            id: `settings.cloudEnvironments.editor.machine`,
                            defaultMessage: `Machine`,
                            description: `Label for a cloud environment machine`,
                          }),
                          description: d.isError
                            ? (0, X.jsx)(k, {
                                id: `settings.cloudEnvironments.editor.machine.error`,
                                defaultMessage: `Unable to load machines`,
                                description: `Error shown when cloud environment machines cannot be loaded`,
                              })
                            : t.machineId
                              ? (0, X.jsx)(k, {
                                  id: `settings.cloudEnvironments.editor.machine.required`,
                                  defaultMessage: `Machine is required`,
                                  description: `Validation message for a missing cloud environment machine`,
                                })
                              : void 0,
                          control: d.isError
                            ? (0, X.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  a == null
                                    ? null
                                    : (0, X.jsx)(He, {
                                        disabled: !0,
                                        children: a.label,
                                      }),
                                  (0, X.jsx)(g, {
                                    color: `secondary`,
                                    onClick: () => void d.refetch(),
                                    size: `toolbar`,
                                    type: `button`,
                                    children: (0, X.jsx)(k, {
                                      id: `settings.cloudEnvironments.editor.machine.retry`,
                                      defaultMessage: `Retry`,
                                      description: `Button label for retrying cloud environment machine loading`,
                                    }),
                                  }),
                                ],
                              })
                            : (0, X.jsx)(w, {
                                triggerButton: (0, X.jsx)(He, {
                                  disabled: d.isPending || D,
                                  children:
                                    i?.label ??
                                    a?.label ??
                                    (0, X.jsx)(k, {
                                      id: `settings.cloudEnvironments.editor.machine.select`,
                                      defaultMessage: `Select a machine`,
                                      description: `Placeholder for a cloud environment machine selector`,
                                    }),
                                }),
                                children: d.data?.map((t) =>
                                  (0, X.jsx)(
                                    c.Item,
                                    {
                                      onSelect: () => e.handleChange(t.id),
                                      children: t.label,
                                    },
                                    t.id,
                                  ),
                                ),
                              }),
                        }),
                    }),
                    (0, X.jsx)(E.Field, {
                      name: `workspaceDirectory`,
                      children: (e) =>
                        (0, X.jsx)(H, {
                          label: (0, X.jsx)(k, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory`,
                            defaultMessage: `Workspace directory`,
                            description: `Label for a cloud environment workspace directory`,
                          }),
                          description: (0, X.jsx)(k, {
                            id: `settings.cloudEnvironments.editor.workspaceDirectory.description`,
                            defaultMessage: `Directory where the repository is cloned; change this only when setup requires an absolute path`,
                            description: `Explanation for the cloud environment workspace directory`,
                          }),
                          control: (0, X.jsx)(K, {
                            "aria-label": l.formatMessage({
                              id: `settings.cloudEnvironments.editor.workspaceDirectory.aria`,
                              defaultMessage: `Workspace directory`,
                              description: `Accessible label for the cloud environment workspace directory input`,
                            }),
                            disabled: D,
                            value: e.state.value,
                            onChange: (t) => e.handleChange(t.target.value),
                          }),
                        }),
                    }),
                  ],
                }),
              }),
            }),
            (0, X.jsx)(yt, { form: E, isPending: D }),
            (0, X.jsx)(Wt, { form: E, isPending: D }),
            (0, X.jsx)(bt, { form: E, isPending: D }),
            (0, X.jsx)(St, {
              form: E,
              isPending: D,
              showAuthtranslator: m,
              showDockerInDocker: h,
            }),
            v ? (0, X.jsx)(wt, { form: E, isPending: D }) : null,
            (0, X.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, X.jsx)(g, {
                  color: `secondary`,
                  disabled: D,
                  onClick: r,
                  type: `button`,
                  children: (0, X.jsx)(k, {
                    id: `settings.cloudEnvironments.editor.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button label for cancelling cloud environment editing`,
                  }),
                }),
                (0, X.jsx)(g, {
                  color: `primary`,
                  disabled: !At(e, i != null, n?.machine_id),
                  loading: D,
                  type: `submit`,
                  children:
                    n == null
                      ? (0, X.jsx)(k, {
                          id: `settings.cloudEnvironments.editor.create`,
                          defaultMessage: `Create environment`,
                          description: `Button label for creating a cloud environment`,
                        })
                      : (0, X.jsx)(k, {
                          id: `settings.cloudEnvironments.editor.save`,
                          defaultMessage: `Save changes`,
                          description: `Button label for saving a cloud environment`,
                        }),
                }),
              ],
            }),
          ],
        });
      }),
      (t[18] = n),
      (t[19] = E),
      (t[20] = l),
      (t[21] = D),
      (t[22] = d),
      (t[23] = r),
      (t[24] = o),
      (t[25] = m),
      (t[26] = h),
      (t[27] = v),
      (t[28] = A))
    : (A = t[28]);
  let M;
  t[29] !== E.Subscribe || t[30] !== A
    ? ((M = (0, X.jsx)(E.Subscribe, { selector: Nn, children: A })),
      (t[29] = E.Subscribe),
      (t[30] = A),
      (t[31] = M))
    : (M = t[31]);
  let N;
  return (
    t[32] !== O || t[33] !== M
      ? ((N = (0, X.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: O,
          children: M,
        })),
        (t[32] = O),
        (t[33] = M),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
function Nn(e) {
  return e.values;
}
var Pn,
  X,
  Fn = e(() => {
    ((Pn = d()),
      nt(),
      O(),
      pe(),
      F(),
      v(),
      I(),
      N(),
      ee(),
      et(),
      Ye(),
      Be(),
      qe(),
      ve(),
      ye(),
      it(),
      Dt(),
      Yt(),
      Ut(),
      vt(),
      Cn(),
      kn(),
      (X = L()));
  });
function In(e) {
  let t = (0, zn.c)(44),
    {
      onCreateEnvironment: n,
      onEditEnvironment: r,
      onSelectEnvironment: a,
    } = e,
    o = S(R),
    s = z(),
    { userId: c } = ue(),
    [l, u] = (0, Bn.useState)(``),
    d;
  t[0] === l ? (d = t[1]) : ((d = l.trim()), (t[0] = l), (t[1] = d));
  let f = p(d, 200),
    m;
  t[2] === f ? (m = t[3]) : ((m = fn(f)), (t[2] = f), (t[3] = m));
  let {
      data: h,
      fetchNextPage: _,
      hasNextPage: v,
      isFetchNextPageError: y,
      isFetchingNextPage: b,
      isPending: x,
      refetch: w,
    } = M(m),
    T = i(Sn),
    E,
    D,
    O,
    A,
    j;
  if (
    t[4] !== f ||
    t[5] !== h ||
    t[6] !== v ||
    t[7] !== s ||
    t[8] !== x ||
    t[9] !== n ||
    t[10] !== r ||
    t[11] !== a ||
    t[12] !== w ||
    t[13] !== o ||
    t[14] !== l ||
    t[15] !== T ||
    t[16] !== c
  ) {
    let e = h?.pages.flatMap(Ln) ?? [],
      i = e.sort(Zt);
    E = Re;
    let d;
    (t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Z.jsx)(k, {
          id: `settings.cloudEnvironments.create.action`,
          defaultMessage: `Create environment`,
          description: `Button label for creating a cloud environment`,
        })),
        (t[22] = d))
      : (d = t[22]),
      t[23] === n
        ? (D = t[24])
        : ((D = (0, Z.jsx)(g, { color: `primary`, onClick: n, children: d })),
          (t[23] = n),
          (t[24] = D)),
      (O =
        e.length > 0 || l !== ``
          ? (0, Z.jsx)(Ie, {
              id: `cloud-environments-search`,
              label: s.formatMessage({
                id: `settings.cloudEnvironments.search.label`,
                defaultMessage: `Search cloud environments`,
                description: `Accessible label for cloud environment search`,
              }),
              maxLength: 128,
              onSearchQueryChange: u,
              placeholder: s.formatMessage({
                id: `settings.cloudEnvironments.search.placeholder`,
                defaultMessage: `Search environments`,
                description: `Placeholder for cloud environment search`,
              }),
              searchQuery: l,
            })
          : null),
      t[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((A = (0, Z.jsx)(Le, { slug: `cloud-environments` })), (t[25] = A))
        : (A = t[25]),
      (j = x
        ? (0, Z.jsx)(ze, {
            children:
              l === ``
                ? (0, Z.jsx)(k, {
                    id: `settings.cloudEnvironments.list.loading`,
                    defaultMessage: `Loading cloud environments…`,
                    description: `Loading state for the cloud environments list`,
                  })
                : (0, Z.jsx)(k, {
                    id: `settings.cloudEnvironments.list.searching`,
                    defaultMessage: `Searching cloud environments…`,
                    description: `Loading state while searching cloud environments`,
                  }),
          })
        : h == null
          ? (0, Z.jsx)(V, {
              children: (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3`,
                children: [
                  (0, Z.jsx)(k, {
                    id: `settings.cloudEnvironments.list.error`,
                    defaultMessage: `Unable to load cloud environments`,
                    description: `Error state for the cloud environments list`,
                  }),
                  (0, Z.jsx)(g, {
                    color: `secondary`,
                    onClick: () => void w(),
                    size: `toolbar`,
                    children: (0, Z.jsx)(k, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })
          : i.length > 0 || !v
            ? (0, Z.jsx)(V, {
                children:
                  i.length === 0
                    ? (0, Z.jsx)(Te, {
                        layout: `settings-row`,
                        children:
                          f === ``
                            ? (0, Z.jsx)(k, {
                                id: `settings.cloudEnvironments.list.empty`,
                                defaultMessage: `No cloud environments yet`,
                                description: `Empty state for the cloud environments list`,
                              })
                            : (0, Z.jsx)(k, {
                                id: `settings.cloudEnvironments.list.noResults`,
                                defaultMessage: `No matching cloud environments`,
                                description: `Search empty state for the cloud environments list`,
                              }),
                      })
                    : i.map((e) =>
                        (0, Z.jsx)(
                          Rn,
                          {
                            environment: e,
                            isPinning:
                              T.isPending &&
                              T.variables?.environmentId === e.id,
                            onEdit: () => r(e.id),
                            onSelect: () => a(e.id),
                            onTogglePin: () => {
                              T.mutate(
                                {
                                  environmentId: e.id,
                                  etag: e.etag,
                                  isPinned: !e.is_pinned,
                                },
                                {
                                  onError: () => {
                                    o.get(C).danger(
                                      s.formatMessage({
                                        id: `settings.cloudEnvironments.pin.error`,
                                        defaultMessage: `Unable to update pinned environment`,
                                        description: `Toast shown when pinning a cloud environment fails`,
                                      }),
                                    );
                                  },
                                },
                              );
                            },
                            userId: c,
                          },
                          e.id,
                        ),
                      ),
              })
            : null),
      (t[4] = f),
      (t[5] = h),
      (t[6] = v),
      (t[7] = s),
      (t[8] = x),
      (t[9] = n),
      (t[10] = r),
      (t[11] = a),
      (t[12] = w),
      (t[13] = o),
      (t[14] = l),
      (t[15] = T),
      (t[16] = c),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = A),
      (t[21] = j));
  } else ((E = t[17]), (D = t[18]), (O = t[19]), (A = t[20]), (j = t[21]));
  let N;
  t[26] !== h || t[27] !== _ || t[28] !== v || t[29] !== y || t[30] !== b
    ? ((N =
        h == null
          ? null
          : (0, Z.jsx)(Ne, {
              hasNextPage: v && !y,
              isFetchingNextPage: b,
              onLoadNextPage: () => void _(),
            })),
      (t[26] = h),
      (t[27] = _),
      (t[28] = v),
      (t[29] = y),
      (t[30] = b),
      (t[31] = N))
    : (N = t[31]);
  let P;
  t[32] !== h || t[33] !== _ || t[34] !== y
    ? ((P =
        h != null && y
          ? (0, Z.jsx)(V, {
              children: (0, Z.jsx)(H, {
                control: (0, Z.jsx)(g, {
                  color: `secondary`,
                  onClick: () => void _(),
                  size: `toolbar`,
                  children: (0, Z.jsx)(k, {
                    id: `settings.cloudEnvironments.pagination.retryButton`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry cloud environment pagination`,
                  }),
                }),
                label: (0, Z.jsx)(k, {
                  id: `settings.cloudEnvironments.pagination.error`,
                  defaultMessage: `Unable to load more cloud environments`,
                  description: `Error shown when loading another page of cloud environments fails`,
                }),
              }),
            })
          : null),
      (t[32] = h),
      (t[33] = _),
      (t[34] = y),
      (t[35] = P))
    : (P = t[35]);
  let F;
  return (
    t[36] !== E ||
    t[37] !== D ||
    t[38] !== O ||
    t[39] !== A ||
    t[40] !== j ||
    t[41] !== N ||
    t[42] !== P
      ? ((F = (0, Z.jsxs)(E, {
          action: D,
          stickyControls: O,
          title: A,
          children: [j, N, P],
        })),
        (t[36] = E),
        (t[37] = D),
        (t[38] = O),
        (t[39] = A),
        (t[40] = j),
        (t[41] = N),
        (t[42] = P),
        (t[43] = F))
      : (F = t[43]),
    F
  );
}
function Ln(e) {
  return e.items;
}
function Rn(e) {
  let t = (0, zn.c)(44),
    {
      environment: n,
      isPinning: r,
      onEdit: i,
      onSelect: a,
      onTogglePin: s,
      userId: l,
    } = e,
    u = z(),
    d = n.permissions?.can_write === !0,
    f;
  t[0] !== n.creator_id || t[1] !== l
    ? ((f = l != null && n.creator_id.includes(l)),
      (t[0] = n.creator_id),
      (t[1] = l),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = d && p,
    _;
  if (!d) {
    let e;
    (t[3] === u
      ? (e = t[4])
      : ((e = u.formatMessage({
          id: `settings.cloudEnvironments.list.pin.noPermission`,
          defaultMessage: `You don't have permission to pin this environment`,
          description: `Tooltip explaining why a cloud environment cannot be pinned`,
        })),
        (t[3] = u),
        (t[4] = e)),
      (_ = e));
  } else if (!p) {
    let e;
    (t[5] === u
      ? (e = t[6])
      : ((e = u.formatMessage({
          id: `settings.cloudEnvironments.list.pin.notCreator`,
          defaultMessage: `Only the creator can pin this environment`,
          description: `Tooltip explaining why a cloud environment cannot be pinned`,
        })),
        (t[5] = u),
        (t[6] = e)),
      (_ = e));
  } else if (n.is_pinned) {
    let e;
    (t[7] === u
      ? (e = t[8])
      : ((e = u.formatMessage({
          id: `settings.cloudEnvironments.list.unpin`,
          defaultMessage: `Unpin environment`,
          description: `Tooltip for unpinning a cloud environment`,
        })),
        (t[7] = u),
        (t[8] = e)),
      (_ = e));
  } else {
    let e;
    (t[9] === u
      ? (e = t[10])
      : ((e = u.formatMessage({
          id: `settings.cloudEnvironments.list.pin`,
          defaultMessage: `Pin environment`,
          description: `Tooltip for pinning a cloud environment`,
        })),
        (t[9] = u),
        (t[10] = e)),
      (_ = e));
  }
  let v;
  t[11] !== d || t[12] !== u || t[13] !== i
    ? ((v = d
        ? (0, Z.jsx)(`div`, {
            className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
            children: (0, Z.jsx)(w, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, Z.jsx)(ie, {
                label: u.formatMessage({
                  id: `settings.cloudEnvironments.list.actions`,
                  defaultMessage: `Environment actions`,
                  description: `Accessible label for cloud environment row actions`,
                }),
                size: `icon`,
              }),
              children: (0, Z.jsx)(c.Item, {
                LeftIcon: h,
                onSelect: i,
                children: (0, Z.jsx)(k, {
                  id: `settings.cloudEnvironments.list.edit`,
                  defaultMessage: `Edit environment`,
                  description: `Menu item for editing a cloud environment`,
                }),
              }),
            }),
          })
        : null),
      (t[11] = d),
      (t[12] = u),
      (t[13] = i),
      (t[14] = v))
    : (v = t[14]);
  let y = n.is_pinned
      ? void 0
      : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-within:opacity-100`,
    b = !m,
    x;
  t[15] === n.is_pinned
    ? (x = t[16])
    : ((x = n.is_pinned
        ? (0, Z.jsx)(Pe, { className: `icon-xs` })
        : (0, Z.jsx)(Je, { className: `icon-xs` })),
      (t[15] = n.is_pinned),
      (t[16] = x));
  let S;
  t[17] !== r || t[18] !== s || t[19] !== _ || t[20] !== b || t[21] !== x
    ? ((S = (0, Z.jsx)(g, {
        "aria-label": _,
        color: `ghost`,
        disabled: b,
        loading: r,
        onClick: s,
        size: `icon`,
        uniform: !0,
        children: x,
      })),
      (t[17] = r),
      (t[18] = s),
      (t[19] = _),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== y || t[24] !== S
    ? ((C = (0, Z.jsx)(`span`, { className: y, children: S })),
      (t[23] = y),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let T;
  t[26] !== _ || t[27] !== C
    ? ((T = (0, Z.jsx)(o, { tooltipContent: _, children: C })),
      (t[26] = _),
      (t[27] = C),
      (t[28] = T))
    : (T = t[28]);
  let E;
  t[29] !== v || t[30] !== T
    ? ((E = (0, Z.jsxs)(Z.Fragment, { children: [v, T] })),
      (t[29] = v),
      (t[30] = T),
      (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] !== n.label || t[33] !== u
    ? ((D = u.formatMessage(
        {
          id: `settings.cloudEnvironments.list.open`,
          defaultMessage: `Open {environmentName}`,
          description: `Accessible label for opening a cloud environment`,
        },
        { environmentName: n.label },
      )),
      (t[32] = n.label),
      (t[33] = u),
      (t[34] = D))
    : (D = t[34]);
  let O;
  t[35] !== n.repo_map || t[36] !== n.repos
    ? ((O =
        n.repos.length > 0
          ? n.repos
              .map((e) => n.repo_map?.[e]?.repository_full_name ?? e)
              .join(`, `)
          : (0, Z.jsx)(k, {
              id: `settings.cloudEnvironments.list.noRepository`,
              defaultMessage: `No repository configured`,
              description: `Description for a cloud environment without a repository`,
            })),
      (t[35] = n.repo_map),
      (t[36] = n.repos),
      (t[37] = O))
    : (O = t[37]);
  let A;
  return (
    t[38] !== n.label ||
    t[39] !== a ||
    t[40] !== D ||
    t[41] !== O ||
    t[42] !== E
      ? ((A = (0, Z.jsx)(Ke, {
          actions: E,
          ariaLabel: D,
          description: O,
          label: n.label,
          onClick: a,
        })),
        (t[38] = n.label),
        (t[39] = a),
        (t[40] = D),
        (t[41] = O),
        (t[42] = E),
        (t[43] = A))
      : (A = t[43]),
    A
  );
}
var zn,
  Bn,
  Z,
  Vn = e(() => {
    ((zn = d()),
      Se(),
      O(),
      (Bn = t(m(), 1)),
      pe(),
      F(),
      v(),
      I(),
      Me(),
      we(),
      D(),
      We(),
      N(),
      ce(),
      _(),
      Fe(),
      Ge(),
      ee(),
      Ve(),
      Ue(),
      Ye(),
      Be(),
      qe(),
      u(),
      Cn(),
      dn(),
      (Z = L()));
  });
function Hn() {
  let e = (0, qn.c)(34),
    t = he(),
    r = te(),
    i;
  e[0] === r
    ? (i = e[1])
    : ((i = (e) => {
        r(e);
      }),
      (e[0] = r),
      (e[1] = i));
  let a = i,
    o;
  e[2] === t.pathname
    ? (o = e[3])
    : ((o = t.pathname.slice(28).split(`/`).filter(Un)),
      (e[2] = t.pathname),
      (e[3] = o));
  let s = o,
    c = s.length === 1 && s[0] === `new`,
    l = s.length > 0 && s[0] !== `new` ? s[0] : null,
    u = l != null && s.length === 2 && s[1] === `edit`,
    d = l != null && s.length === 1;
  if (s.length === 0) {
    let t;
    return (
      e[4] === a
        ? (t = e[5])
        : ((t = (0, Q.jsx)(In, {
            onCreateEnvironment: () => a(`${$}/new`),
            onEditEnvironment: (e) => a(`${$}/${e}/edit`),
            onSelectEnvironment: (e) => a(`${$}/${e}`),
          })),
          (e[4] = a),
          (e[5] = t)),
      t
    );
  }
  if (c) {
    let t;
    e[6] === a
      ? (t = e[7])
      : ((t = (0, Q.jsx)(Kn, { current: Yn, onRootClick: () => a($) })),
        (e[6] = a),
        (e[7] = t));
    let n;
    e[8] === a
      ? (n = e[9])
      : ((n = (0, Q.jsx)(An, {
          environment: null,
          onCancel: () => a($),
          onSaved: (e) => a(`${$}/${e}`),
        })),
        (e[8] = a),
        (e[9] = n));
    let r;
    return (
      e[10] !== t || e[11] !== n
        ? ((r = (0, Q.jsx)(Re, { backSlot: t, title: Yn, children: n })),
          (e[10] = t),
          (e[11] = n),
          (e[12] = r))
        : (r = e[12]),
      r
    );
  }
  if (l != null && u) {
    let t;
    e[13] !== l || e[14] !== a
      ? ((t = () => a(`${$}/${l}`)), (e[13] = l), (e[14] = a), (e[15] = t))
      : (t = e[15]);
    let n;
    e[16] === a ? (n = e[17]) : ((n = () => a($)), (e[16] = a), (e[17] = n));
    let r;
    return (
      e[18] !== l || e[19] !== t || e[20] !== n
        ? ((r = (0, Q.jsx)(Gn, {
            environmentId: l,
            onBack: t,
            onRootClick: n,
          })),
          (e[18] = l),
          (e[19] = t),
          (e[20] = n),
          (e[21] = r))
        : (r = e[21]),
      r
    );
  }
  if (l != null && d) {
    let t, n;
    e[22] === a
      ? ((t = e[23]), (n = e[24]))
      : ((t = () => a($)),
        (n = () => a($)),
        (e[22] = a),
        (e[23] = t),
        (e[24] = n));
    let r;
    e[25] !== l || e[26] !== a
      ? ((r = () => a(`${$}/${l}/edit`)), (e[25] = l), (e[26] = a), (e[27] = r))
      : (r = e[27]);
    let i;
    return (
      e[28] !== l || e[29] !== t || e[30] !== n || e[31] !== r
        ? ((i = (0, Q.jsx)(Wn, {
            environmentId: l,
            onBack: t,
            onDeleted: n,
            onEdit: r,
          })),
          (e[28] = l),
          (e[29] = t),
          (e[30] = n),
          (e[31] = r),
          (e[32] = i))
        : (i = e[32]),
      i
    );
  }
  let f;
  return (
    e[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Q.jsx)(n, { to: $, replace: !0 })), (e[33] = f))
      : (f = e[33]),
    f
  );
}
function Un(e) {
  return e !== ``;
}
function Wn(e) {
  let t = (0, qn.c)(64),
    { environmentId: n, onBack: r, onDeleted: a, onEdit: s } = e,
    l = S(R),
    u = z(),
    { userId: d } = ue(),
    f = xe(mn, n),
    p = i(bn),
    m = i(xn),
    _ = i(Sn),
    [v, y] = (0, Jn.useState)(null);
  if (f.isPending || f.isError) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = (0, Q.jsx)(Kn, { current: Xn, onRootClick: r })),
        (t[0] = r),
        (t[1] = e));
    let n;
    t[2] === f
      ? (n = t[3])
      : ((n = f.isPending
          ? (0, Q.jsx)(ze, {
              children: (0, Q.jsx)(k, {
                id: `settings.cloudEnvironments.details.loading`,
                defaultMessage: `Loading environment…`,
                description: `Loading state for cloud environment details`,
              }),
            })
          : (0, Q.jsx)(V, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, Q.jsx)(k, {
                    id: `settings.cloudEnvironments.details.error`,
                    defaultMessage: `Unable to load this cloud environment`,
                    description: `Error state for cloud environment details`,
                  }),
                  (0, Q.jsx)(g, {
                    color: `secondary`,
                    onClick: () => void f.refetch(),
                    size: `toolbar`,
                    children: (0, Q.jsx)(k, {
                      id: `settings.cloudEnvironments.retry`,
                      defaultMessage: `Retry`,
                      description: `Button label to retry loading cloud environments`,
                    }),
                  }),
                ],
              }),
            })),
        (t[2] = f),
        (t[3] = n));
    let i;
    return (
      t[4] !== e || t[5] !== n
        ? ((i = (0, Q.jsx)(Re, { backSlot: e, title: Xn, children: n })),
          (t[4] = e),
          (t[5] = n),
          (t[6] = i))
        : (i = t[6]),
      i
    );
  }
  let b = f.data,
    x = b.permissions?.can_write === !0,
    T = b.permissions?.can_delete === !0,
    E;
  t[7] !== b.creator || t[8] !== d
    ? ((E = d != null && b.creator.id.includes(d)),
      (t[7] = b.creator),
      (t[8] = d),
      (t[9] = E))
    : (E = t[9]);
  let D = x && E,
    O = x && (b.cache_settings?.post_setup_cache_enabled ?? !0),
    A;
  t[10] !== b.is_pinned || t[11] !== u
    ? ((A = b.is_pinned
        ? u.formatMessage({
            id: `settings.cloudEnvironments.details.unpin`,
            defaultMessage: `Unpin environment`,
            description: `Tooltip for unpinning a cloud environment`,
          })
        : u.formatMessage({
            id: `settings.cloudEnvironments.details.pin`,
            defaultMessage: `Pin environment`,
            description: `Tooltip for pinning a cloud environment`,
          })),
      (t[10] = b.is_pinned),
      (t[11] = u),
      (t[12] = A))
    : (A = t[12]);
  let j = A,
    M;
  t[13] === u
    ? (M = t[14])
    : ((M = u.formatMessage({
        id: `settings.cloudEnvironments.details.edit`,
        defaultMessage: `Edit environment`,
        description: `Tooltip for editing a cloud environment`,
      })),
      (t[13] = u),
      (t[14] = M));
  let N = M,
    P;
  t[15] !== T ||
  t[16] !== x ||
  t[17] !== D ||
  t[18] !== O ||
  t[19] !== N ||
  t[20] !== b.etag ||
  t[21] !== b.id ||
  t[22] !== b.is_pinned ||
  t[23] !== u ||
  t[24] !== s ||
  t[25] !== j ||
  t[26] !== l ||
  t[27] !== _
    ? ((P =
        x || T
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                D
                  ? (0, Q.jsx)(o, {
                      tooltipContent: j,
                      children: (0, Q.jsx)(g, {
                        "aria-label": j,
                        color: `ghost`,
                        loading: _.isPending,
                        onClick: () => {
                          _.mutate(
                            {
                              environmentId: b.id,
                              etag: b.etag,
                              isPinned: !b.is_pinned,
                            },
                            {
                              onError: () => {
                                l.get(C).danger(
                                  u.formatMessage({
                                    id: `settings.cloudEnvironments.pin.error`,
                                    defaultMessage: `Unable to update pinned environment`,
                                    description: `Toast shown when pinning a cloud environment fails`,
                                  }),
                                );
                              },
                            },
                          );
                        },
                        size: `toolbar`,
                        uniform: !0,
                        children: b.is_pinned
                          ? (0, Q.jsx)(Pe, { className: `icon-xs` })
                          : (0, Q.jsx)(Je, { className: `icon-xs` }),
                      }),
                    })
                  : null,
                x
                  ? (0, Q.jsxs)(g, {
                      "aria-label": N,
                      color: `secondary`,
                      onClick: s,
                      size: `toolbar`,
                      children: [
                        (0, Q.jsx)(h, { className: `icon-xs` }),
                        (0, Q.jsx)(k, {
                          id: `settings.cloudEnvironments.details.editAction`,
                          defaultMessage: `Edit`,
                          description: `Button label for editing a cloud environment`,
                        }),
                      ],
                    })
                  : null,
                T || O
                  ? (0, Q.jsxs)(w, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(ie, {
                        label: u.formatMessage({
                          id: `settings.cloudEnvironments.details.actions`,
                          defaultMessage: `Environment actions`,
                          description: `Accessible label for cloud environment actions`,
                        }),
                      }),
                      children: [
                        O
                          ? (0, Q.jsx)(c.Item, {
                              LeftIcon: De,
                              onSelect: () => y(`reset-cache`),
                              children: (0, Q.jsx)(k, {
                                id: `settings.cloudEnvironments.details.resetCache`,
                                defaultMessage: `Reset cache`,
                                description: `Menu item for resetting a cloud environment cache`,
                              }),
                            })
                          : null,
                        T
                          ? (0, Q.jsx)(c.Item, {
                              LeftIcon: ke,
                              onSelect: () => y(`delete`),
                              children: (0, Q.jsx)(k, {
                                id: `settings.cloudEnvironments.details.delete`,
                                defaultMessage: `Delete environment`,
                                description: `Menu item for deleting a cloud environment`,
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[15] = T),
      (t[16] = x),
      (t[17] = D),
      (t[18] = O),
      (t[19] = N),
      (t[20] = b.etag),
      (t[21] = b.id),
      (t[22] = b.is_pinned),
      (t[23] = u),
      (t[24] = s),
      (t[25] = j),
      (t[26] = l),
      (t[27] = _),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] !== b.label || t[30] !== r
    ? ((F = (0, Q.jsx)(Kn, { current: b.label, onRootClick: r })),
      (t[29] = b.label),
      (t[30] = r),
      (t[31] = F))
    : (F = t[31]);
  let ee = b.description || void 0,
    te;
  t[32] === b
    ? (te = t[33])
    : ((te = (0, Q.jsx)(at, { environment: b })), (t[32] = b), (t[33] = te));
  let ne = v === `delete`,
    re;
  t[34] !== p || t[35] !== b.id || t[36] !== u || t[37] !== a || t[38] !== l
    ? ((re = () => {
        p.mutate(b.id, {
          onSuccess: () => {
            (l.get(C).success(
              u.formatMessage({
                id: `settings.cloudEnvironments.delete.success`,
                defaultMessage: `Deleted cloud environment`,
                description: `Toast shown after deleting a cloud environment`,
              }),
            ),
              a());
          },
          onError: () => {
            l.get(C).danger(
              u.formatMessage({
                id: `settings.cloudEnvironments.delete.error`,
                defaultMessage: `Unable to delete cloud environment`,
                description: `Toast shown when cloud environment deletion fails`,
              }),
            );
          },
        });
      }),
      (t[34] = p),
      (t[35] = b.id),
      (t[36] = u),
      (t[37] = a),
      (t[38] = l),
      (t[39] = re))
    : (re = t[39]);
  let ae;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (e) => y(e ? `delete` : null)), (t[40] = ae))
    : (ae = t[40]);
  let oe;
  t[41] !== p.isPending || t[42] !== b.label || t[43] !== ne || t[44] !== re
    ? ((oe = (0, Q.jsx)(dt, {
        environmentName: b.label,
        isPending: p.isPending,
        open: ne,
        onConfirm: re,
        onOpenChange: ae,
      })),
      (t[41] = p.isPending),
      (t[42] = b.label),
      (t[43] = ne),
      (t[44] = re),
      (t[45] = oe))
    : (oe = t[45]);
  let se = v === `reset-cache`,
    I;
  t[46] !== b.id || t[47] !== u || t[48] !== m || t[49] !== l
    ? ((I = () => {
        m.mutate(b.id, {
          onSuccess: () => {
            (y(null),
              l.get(C).success(
                u.formatMessage({
                  id: `settings.cloudEnvironments.resetCache.success`,
                  defaultMessage: `Reset cloud environment cache`,
                  description: `Toast shown after resetting a cloud environment cache`,
                }),
              ));
          },
          onError: () => {
            l.get(C).danger(
              u.formatMessage({
                id: `settings.cloudEnvironments.resetCache.error`,
                defaultMessage: `Unable to reset cloud environment cache`,
                description: `Toast shown when resetting a cloud environment cache fails`,
              }),
            );
          },
        });
      }),
      (t[46] = b.id),
      (t[47] = u),
      (t[48] = m),
      (t[49] = l),
      (t[50] = I))
    : (I = t[50]);
  let L;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => y(e ? `reset-cache` : null)), (t[51] = L))
    : (L = t[51]);
  let ce;
  t[52] !== m.isPending || t[53] !== se || t[54] !== I
    ? ((ce = (0, Q.jsx)(ft, {
        isPending: m.isPending,
        open: se,
        onConfirm: I,
        onOpenChange: L,
      })),
      (t[52] = m.isPending),
      (t[53] = se),
      (t[54] = I),
      (t[55] = ce))
    : (ce = t[55]);
  let le;
  return (
    t[56] !== b.label ||
    t[57] !== oe ||
    t[58] !== ce ||
    t[59] !== P ||
    t[60] !== F ||
    t[61] !== ee ||
    t[62] !== te
      ? ((le = (0, Q.jsxs)(Re, {
          action: P,
          backSlot: F,
          subtitle: ee,
          title: b.label,
          children: [te, oe, ce],
        })),
        (t[56] = b.label),
        (t[57] = oe),
        (t[58] = ce),
        (t[59] = P),
        (t[60] = F),
        (t[61] = ee),
        (t[62] = te),
        (t[63] = le))
      : (le = t[63]),
    le
  );
}
function Gn(e) {
  let t = (0, qn.c)(24),
    { environmentId: r, onBack: i, onRootClick: a } = e,
    o = xe(mn, r);
  if (o.isError) {
    let e = `${$}/${r}`,
      i;
    return (
      t[0] === e
        ? (i = t[1])
        : ((i = (0, Q.jsx)(n, { to: e, replace: !0 })), (t[0] = e), (t[1] = i)),
      i
    );
  }
  if (o.isPending) {
    let e;
    t[2] === i
      ? (e = t[3])
      : ((e = { label: Xn, onClick: i }), (t[2] = i), (t[3] = e));
    let n;
    t[4] !== a || t[5] !== e
      ? ((n = (0, Q.jsx)(Kn, { current: Zn, environment: e, onRootClick: a })),
        (t[4] = a),
        (t[5] = e),
        (t[6] = n))
      : (n = t[6]);
    let r;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(ze, {
          children: (0, Q.jsx)(k, {
            id: `settings.cloudEnvironments.edit.loading`,
            defaultMessage: `Loading environment…`,
            description: `Loading state for the cloud environment editor`,
          }),
        })),
        (t[7] = r))
      : (r = t[7]);
    let o;
    return (
      t[8] === n
        ? (o = t[9])
        : ((o = (0, Q.jsx)(Re, { backSlot: n, title: Zn, children: r })),
          (t[8] = n),
          (t[9] = o)),
      o
    );
  }
  if (o.data.permissions?.can_write !== !0) {
    let e = `${$}/${r}`,
      i;
    return (
      t[10] === e
        ? (i = t[11])
        : ((i = (0, Q.jsx)(n, { to: e, replace: !0 })),
          (t[10] = e),
          (t[11] = i)),
      i
    );
  }
  let s;
  t[12] !== o.data.label || t[13] !== i
    ? ((s = { label: o.data.label, onClick: i }),
      (t[12] = o.data.label),
      (t[13] = i),
      (t[14] = s))
    : (s = t[14]);
  let c;
  t[15] !== a || t[16] !== s
    ? ((c = (0, Q.jsx)(Kn, { current: Zn, environment: s, onRootClick: a })),
      (t[15] = a),
      (t[16] = s),
      (t[17] = c))
    : (c = t[17]);
  let l;
  t[18] !== o.data || t[19] !== i
    ? ((l = (0, Q.jsx)(
        An,
        { environment: o.data, onCancel: i, onSaved: i },
        o.data.id,
      )),
      (t[18] = o.data),
      (t[19] = i),
      (t[20] = l))
    : (l = t[20]);
  let u;
  return (
    t[21] !== c || t[22] !== l
      ? ((u = (0, Q.jsx)(Re, { backSlot: c, title: Zn, children: l })),
        (t[21] = c),
        (t[22] = l),
        (t[23] = u))
      : (u = t[23]),
    u
  );
}
function Kn(e) {
  let t = (0, qn.c)(11),
    { current: n, environment: r, onRootClick: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(Le, { slug: `cloud-environments` })), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = { id: `cloud-environments`, label: a, onClick: i }),
      (t[1] = i),
      (t[2] = o));
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s =
        r == null
          ? []
          : [{ id: `environment`, label: r.label, onClick: r.onClick }]),
      (t[3] = r),
      (t[4] = s));
  let c;
  t[5] !== o || t[6] !== s
    ? ((c = [o, ...s]), (t[5] = o), (t[6] = s), (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== n || t[9] !== c
      ? ((l = (0, Q.jsx)($e, { ancestors: c, current: n })),
        (t[8] = n),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var qn, Jn, Q, $, Yn, Xn, Zn;
e(() => {
  ((qn = d()),
    O(),
    (Jn = t(m(), 1)),
    pe(),
    f(),
    F(),
    v(),
    I(),
    D(),
    N(),
    Qe(),
    ce(),
    _(),
    Fe(),
    Ge(),
    Oe(),
    Ee(),
    ee(),
    Ve(),
    Ue(),
    Be(),
    qe(),
    ut(),
    mt(),
    Fn(),
    Vn(),
    Cn(),
    (Q = L()),
    ($ = `/settings/cloud-environments`),
    (Yn = (0, Q.jsx)(k, {
      id: `settings.cloudEnvironments.create.title`,
      defaultMessage: `Create cloud environment`,
      description: `Title for creating a cloud environment`,
    })),
    (Xn = (0, Q.jsx)(k, {
      id: `settings.cloudEnvironments.details.title`,
      defaultMessage: `Cloud environment`,
      description: `Title for cloud environment details`,
    })),
    (Zn = (0, Q.jsx)(k, {
      id: `settings.cloudEnvironments.edit.title`,
      defaultMessage: `Edit cloud environment`,
      description: `Title for editing a cloud environment`,
    })));
})();
export { Hn as CloudEnvironmentsSettingsPage };
//# sourceMappingURL=cloud-environments-settings-page-DtKIrosm.js.map
