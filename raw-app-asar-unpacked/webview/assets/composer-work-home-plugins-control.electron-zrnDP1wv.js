import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Am as n,
  BR as r,
  Ds as i,
  Fq as a,
  I2 as o,
  JA as s,
  L2 as c,
  Oy as l,
  PB as u,
  Pq as d,
  S0 as f,
  Sy as p,
  _0 as m,
  _Y as h,
  _y as g,
  ax as _,
  cj as v,
  df as y,
  dx as b,
  ff as x,
  gK as S,
  hK as C,
  js as w,
  k2 as T,
  km as E,
  lf as D,
  mY as O,
  pY as k,
  uf as A,
  yY as j,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $ as M,
  Gt as N,
  Q as ee,
  qt as P,
  vn as F,
  yn as I,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  Gn as L,
  Kn as R,
  xn as z,
  yn as B,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  c as te,
  r as V,
} from "./app-initial~app-main~plugin-detail-page~new-thread-panel-page~appgen-library-page~hotkey-wi~hniebsu0-DMj-xouD.js";
import { n as H, t as ne } from "./connector-logo-stack-DRKs9bGN.js";
import {
  i as U,
  n as W,
  r as G,
  t as re,
} from "./connect-plugins-submenu-item-nNazVzMD.js";
function ie() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(N, {
          categoryLabel: null,
          className: `disabled:cursor-default disabled:opacity-100`,
          collapse: `xs`,
          disabled: !0,
          icon: null,
          indicator: `none`,
          value: (0, q.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [
              (0, q.jsx)(d, {
                className: `icon-xs shrink-0 text-token-text-secondary`,
              }),
              (0, q.jsx)(`span`, {
                children: (0, q.jsx)(h, {
                  id: `composer.workMode.plugins.label`,
                  defaultMessage: `Plugins`,
                  description: `Label for the Plugins picker in the Work home composer utility bar`,
                }),
              }),
            ],
          }),
          valueClassName: `!max-w-60 text-token-foreground`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var K,
  q,
  J = e(() => {
    ((K = o()), O(), a(), P(), (q = T()));
  });
function ae(e) {
  let t = (0, Y.c)(80),
    {
      connectedPlugins: n,
      featuredPlugins: r,
      hasLoadError: a,
      isLoading: o,
      onConnectPlugin: s,
      onOpenPluginDirectory: c,
      onPluginSelectionChange: l,
      onRequestComposerFocus: u,
      selectedPluginIds: d,
    } = e,
    f = j(),
    p = (0, X.useRef)(!1),
    [m, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(``),
    b,
    x,
    S,
    w,
    T,
    O,
    k,
    A,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H;
  if (
    t[0] !== n ||
    t[1] !== f ||
    t[2] !== o ||
    t[3] !== m ||
    t[4] !== l ||
    t[5] !== u ||
    t[6] !== _ ||
    t[7] !== d
  ) {
    P = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      S = te({ plugins: n, query: _ });
      let e;
      (t[27] === _ ? (e = t[28]) : ((e = _.trim()), (t[27] = _), (t[28] = e)),
        (w = e.length > 0));
      let r = n.length > 0,
        a;
      t[29] === f
        ? (a = t[30])
        : ((a = f.formatMessage({
            id: `composer.workMode.plugins.label`,
            defaultMessage: `Plugins`,
            description: `Label for the Plugins picker in the Work home composer utility bar`,
          })),
          (t[29] = f),
          (t[30] = a));
      let s = a,
        c;
      t[31] === f
        ? (c = t[32])
        : ((c = f.formatMessage(Q.connectPlugins)), (t[31] = f), (t[32] = c));
      let h = r ? s : c;
      if (o) {
        let e;
        (t[33] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(ie, {})), (t[33] = e))
          : (e = t[33]),
          (P = e));
        break bb0;
      }
      ((x = ee),
        (I = h),
        (L = `plugins`),
        (R = `overflow-hidden!`),
        (z = `list`),
        (B = `menuWide`),
        t[34] === r
          ? (V = t[35])
          : ((V = r
              ? null
              : (0, Z.jsx)(y, {
                  "aria-hidden": !0,
                  className: `icon-xs shrink-0`,
                })),
            (t[34] = r),
            (t[35] = V)),
        (H = m),
        (O = h),
        t[36] !== n || t[37] !== r || t[38] !== h
          ? ((k = r
              ? (0, Z.jsxs)(`span`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, Z.jsxs)(`span`, {
                      "aria-hidden": !0,
                      className: `flex items-center`,
                      children: [
                        n.length < 3
                          ? (0, Z.jsx)(C, { className: `icon-xs shrink-0` })
                          : null,
                        (0, Z.jsx)(ne, {
                          size: `small`,
                          children: n.slice(0, 3).map(oe),
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`span`, { children: h }),
                  ],
                })
              : h),
            (t[36] = n),
            (t[37] = r),
            (t[38] = h),
            (t[39] = k))
          : (k = t[39]),
        t[40] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((A = (e) => {
              (g(e), e && v(``));
            }),
            (t[40] = A))
          : (A = t[40]),
        t[41] === u
          ? (M = t[42])
          : ((M = (e) => {
              p.current && ((p.current = !1), e.preventDefault(), u());
            }),
            (t[41] = u),
            (t[42] = M)));
      let j;
      t[43] === f
        ? (j = t[44])
        : ((j = f.formatMessage({
            id: `composer.workMode.plugins.search`,
            defaultMessage: `Search plugins…`,
            description: `Placeholder for the plugin search field in the Work home composer`,
          })),
          (t[43] = f),
          (t[44] = j));
      let U;
      (t[45] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((U = (e) => v(e.currentTarget.value)), (t[45] = U))
        : (U = t[45]),
        t[46] !== _ || t[47] !== j
          ? ((N = (0, Z.jsx)(i.SearchInput, {
              autoFocus: !0,
              className: `mb-1`,
              placeholder: j,
              value: _,
              onChange: U,
            })),
            (t[46] = _),
            (t[47] = j),
            (t[48] = N))
          : (N = t[48]),
        (b = i.Section),
        (T = `min-h-0 flex-1 overflow-y-auto`),
        (F = S.map((e) => {
          let t = D(e);
          return (0, Z.jsxs)(
            i.CheckboxItem,
            {
              checked: d.includes(e.plugin.id),
              onCheckedChange: (t) => {
                ((p.current = !0), l(e, t), g(!1));
              },
              children: [
                (0, Z.jsx)(i.ItemIcon, {
                  size: `xs`,
                  children: (0, Z.jsx)(E, {
                    alt: ``,
                    className: `size-full object-contain`,
                    knownAppId: e.plugin.name,
                    logoDarkUrl: e.logoDarkPath,
                    logoUrl: e.logoPath,
                    fallback: (0, Z.jsx)(y, {
                      className: `size-full text-token-text-secondary`,
                    }),
                  }),
                }),
                (0, Z.jsx)(`span`, { children: t }),
              ],
            },
            e.plugin.id,
          );
        })));
    }
    ((t[0] = n),
      (t[1] = f),
      (t[2] = o),
      (t[3] = m),
      (t[4] = l),
      (t[5] = u),
      (t[6] = _),
      (t[7] = d),
      (t[8] = b),
      (t[9] = x),
      (t[10] = S),
      (t[11] = w),
      (t[12] = T),
      (t[13] = O),
      (t[14] = k),
      (t[15] = A),
      (t[16] = M),
      (t[17] = N),
      (t[18] = P),
      (t[19] = F),
      (t[20] = I),
      (t[21] = L),
      (t[22] = R),
      (t[23] = z),
      (t[24] = B),
      (t[25] = V),
      (t[26] = H));
  } else
    ((b = t[8]),
      (x = t[9]),
      (S = t[10]),
      (w = t[11]),
      (T = t[12]),
      (O = t[13]),
      (k = t[14]),
      (A = t[15]),
      (M = t[16]),
      (N = t[17]),
      (P = t[18]),
      (F = t[19]),
      (I = t[20]),
      (L = t[21]),
      (R = t[22]),
      (z = t[23]),
      (B = t[24]),
      (V = t[25]),
      (H = t[26]));
  if (P !== Symbol.for(`react.early_return_sentinel`)) return P;
  let U;
  t[49] !== S || t[50] !== a || t[51] !== w
    ? ((U = a
        ? (0, Z.jsx)(i.Message, {
            compact: !0,
            role: `status`,
            tone: `error`,
            children: (0, Z.jsx)(h, {
              id: `composer.workMode.plugins.loadError`,
              defaultMessage: `Couldn't load plugins`,
              description: `Error shown when plugins fail to load in the Work home composer`,
            }),
          })
        : S.length === 0
          ? (0, Z.jsx)(i.Message, {
              compact: !0,
              role: `status`,
              children: w
                ? (0, Z.jsx)(h, {
                    id: `composer.workMode.plugins.search.empty`,
                    defaultMessage: `No plugins found`,
                    description: `Empty state when plugin search has no matches in the Work home composer`,
                  })
                : (0, Z.jsx)(h, {
                    id: `composer.workMode.plugins.installed.empty`,
                    defaultMessage: `No connected plugins`,
                    description: `Empty state when there are no connected and available plugins in the Work home composer`,
                  }),
            })
          : null),
      (t[49] = S),
      (t[50] = a),
      (t[51] = w),
      (t[52] = U))
    : (U = t[52]);
  let W;
  t[53] !== b || t[54] !== T || t[55] !== U || t[56] !== F
    ? ((W = (0, Z.jsxs)(b, { className: T, children: [F, U] })),
      (t[53] = b),
      (t[54] = T),
      (t[55] = U),
      (t[56] = F),
      (t[57] = W))
    : (W = t[57]);
  let G;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Z.jsx)(i.Separator, {})), (t[58] = G))
    : (G = t[58]);
  let K;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Z.jsx)(h, { ...Q.connectPlugins })), (t[59] = K))
    : (K = t[59]);
  let q;
  t[60] !== r || t[61] !== s || t[62] !== c
    ? ((q = (0, Z.jsx)(i.Section, {
        className: `flex flex-col`,
        children: (0, Z.jsx)(re, {
          featuredPlugins: r,
          label: K,
          onConnectPlugin: s,
          onOpenPluginDirectory: c,
        }),
      })),
      (t[60] = r),
      (t[61] = s),
      (t[62] = c),
      (t[63] = q))
    : (q = t[63]);
  let J;
  return (
    t[64] !== x ||
    t[65] !== O ||
    t[66] !== k ||
    t[67] !== A ||
    t[68] !== M ||
    t[69] !== N ||
    t[70] !== W ||
    t[71] !== q ||
    t[72] !== I ||
    t[73] !== L ||
    t[74] !== R ||
    t[75] !== z ||
    t[76] !== B ||
    t[77] !== V ||
    t[78] !== H
      ? ((J = (0, Z.jsxs)(x, {
          "aria-label": I,
          "data-composer-navigation-target": L,
          contentClassName: R,
          contentMaxHeight: z,
          contentWidth: B,
          icon: V,
          menuOpen: H,
          tooltipContent: O,
          value: k,
          onOpenChange: A,
          onCloseAutoFocus: M,
          children: [N, W, G, q],
        })),
        (t[64] = x),
        (t[65] = O),
        (t[66] = k),
        (t[67] = A),
        (t[68] = M),
        (t[69] = N),
        (t[70] = W),
        (t[71] = q),
        (t[72] = I),
        (t[73] = L),
        (t[74] = R),
        (t[75] = z),
        (t[76] = B),
        (t[77] = V),
        (t[78] = H),
        (t[79] = J))
      : (J = t[79]),
    J
  );
}
function oe(e) {
  return (0, Z.jsx)(
    E,
    {
      alt: ``,
      className: `size-full object-contain`,
      knownAppId: e.plugin.name,
      logoDarkUrl: e.logoDarkPath,
      logoUrl: e.logoPath,
      fallback: (0, Z.jsx)(y, {
        className: `size-1/2 text-token-text-secondary`,
      }),
    },
    e.plugin.id,
  );
}
var Y,
  X,
  Z,
  Q,
  se = e(() => {
    ((Y = o()),
      (X = t(c(), 1)),
      O(),
      n(),
      H(),
      w(),
      x(),
      S(),
      W(),
      A(),
      V(),
      J(),
      M(),
      (Z = T()),
      (Q = k({
        connectPlugins: {
          id: `composer.workMode.plugins.connect`,
          defaultMessage: `Connect plugins`,
          description: `Label and action for connecting plugins from the Work home composer plugin picker`,
        },
      })));
  });
function ce(e) {
  let t = (0, $.c)(26),
    { composerController: n, cwd: i, hostId: a, onRequestComposerFocus: o } = e,
    s = j(),
    c = v(),
    l = f(_),
    u;
  t[0] === a ? (u = t[1]) : ((u = { hostId: a }), (t[0] = a), (t[1] = u));
  let d = R(u),
    m = z(n, le),
    h;
  t[2] !== i || t[3] !== a
    ? ((h = { cwd: i, hostId: a }), (t[2] = i), (t[3] = a), (t[4] = h))
    : (h = t[4]);
  let {
    connectedPlugins: y,
    featuredPlugins: b,
    hasLoadError: x,
    isLoading: S,
    openPluginInstall: C,
    pluginsFeatureEnabled: w,
  } = U(h);
  if (!w) return null;
  let T;
  t[5] !== a || t[6] !== c || t[7] !== w || t[8] !== l
    ? ((T = () => {
        I(l, c, w, r.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, a);
      }),
      (t[5] = a),
      (t[6] = c),
      (t[7] = w),
      (t[8] = l),
      (t[9] = T))
    : (T = t[9]);
  let E;
  t[10] !== n || t[11] !== s || t[12] !== d
    ? ((E = (e, t) => {
        if (t) {
          (n.insertMentionAtSelection(g(e, p(s))), d(e));
          return;
        }
        n.removePluginMentions(e.plugin.id);
      }),
      (t[10] = n),
      (t[11] = s),
      (t[12] = d),
      (t[13] = E))
    : (E = t[13]);
  let D;
  t[14] === m
    ? (D = t[15])
    : ((D = m === `` ? [] : m.split(`\0`)), (t[14] = m), (t[15] = D));
  let O;
  return (
    t[16] !== y ||
    t[17] !== b ||
    t[18] !== x ||
    t[19] !== S ||
    t[20] !== o ||
    t[21] !== C ||
    t[22] !== T ||
    t[23] !== E ||
    t[24] !== D
      ? ((O = (0, ue.jsx)(ae, {
          connectedPlugins: y,
          featuredPlugins: b,
          hasLoadError: x,
          isLoading: S,
          onConnectPlugin: C,
          onOpenPluginDirectory: T,
          onPluginSelectionChange: E,
          onRequestComposerFocus: o,
          selectedPluginIds: D,
        })),
        (t[16] = y),
        (t[17] = b),
        (t[18] = x),
        (t[19] = S),
        (t[20] = o),
        (t[21] = C),
        (t[22] = T),
        (t[23] = E),
        (t[24] = D),
        (t[25] = O))
      : (O = t[25]),
    O
  );
}
function le(e) {
  return e.getMentionedPluginIdsKey();
}
var $, ue;
e(() => {
  (($ = o()),
    u(),
    m(),
    O(),
    s(),
    G(),
    b(),
    F(),
    se(),
    l(),
    B(),
    L(),
    (ue = T()));
})();
export { ce as ComposerWorkHomePluginsControl };
//# sourceMappingURL=composer-work-home-plugins-control.electron-zrnDP1wv.js.map
