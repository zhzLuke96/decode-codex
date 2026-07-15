import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Am as t,
  Ds as n,
  I2 as r,
  Jh as i,
  _Y as a,
  df as o,
  dg as s,
  ff as c,
  gK as l,
  hK as u,
  js as d,
  k2 as f,
  km as p,
  lf as m,
  mY as h,
  tg as g,
  uf as _,
  ug as v,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dl as y,
  fl as b,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  b as x,
  d as S,
  r as C,
  s as w,
  x as T,
} from "./app-initial~app-main~plugin-detail-page~new-thread-panel-page~appgen-library-page~hotkey-wi~hniebsu0-DMj-xouD.js";
import {
  n as E,
  t as D,
} from "./app-initial~app-main~plugin-detail-page~new-thread-panel-page~appgen-library-page~hotkey-wi~irpg5jg8-Dh9qebrf.js";
function O(e) {
  let t = (0, j.c)(19),
    { cwd: n, hostId: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = { hostId: r }), (t[0] = r), (t[1] = i));
  let a = s(i),
    o;
  t[2] === a ? (o = t[3]) : ((o = { enabled: a }), (t[2] = a), (t[3] = o));
  let {
      availablePlugins: c,
      errorMessage: l,
      featuredPluginIds: u,
      forceReload: d,
      isLoading: f,
    } = g(r, n, o),
    p;
  t[4] !== d || t[5] !== r
    ? ((p = { forceReloadPlugins: d, hostId: r }),
      (t[4] = d),
      (t[5] = r),
      (t[6] = p))
    : (p = t[6]);
  let { openPluginInstall: m } = E(p),
    h;
  t[7] === c ? (h = t[8]) : ((h = w(c)), (t[7] = c), (t[8] = h));
  let _ = h,
    v;
  t[9] !== c || t[10] !== u
    ? ((v =
        S({ featuredPluginIds: u, plugins: c })
          .find(A)
          ?.plugins.filter(k)
          .slice(0, 8) ?? []),
      (t[9] = c),
      (t[10] = u),
      (t[11] = v))
    : (v = t[11]);
  let y = v,
    b = l != null && _.length === 0,
    x;
  return (
    t[12] !== _ ||
    t[13] !== y ||
    t[14] !== f ||
    t[15] !== m ||
    t[16] !== a ||
    t[17] !== b
      ? ((x = {
          connectedPlugins: _,
          featuredPlugins: y,
          hasLoadError: b,
          isLoading: f,
          openPluginInstall: m,
          pluginsFeatureEnabled: a,
        }),
        (t[12] = _),
        (t[13] = y),
        (t[14] = f),
        (t[15] = m),
        (t[16] = a),
        (t[17] = b),
        (t[18] = x))
      : (x = t[18]),
    x
  );
}
function k(e) {
  return !e.plugin.installed && !T(e.plugin);
}
function A(e) {
  let { section: t } = e;
  return t.id === `plugins-featured`;
}
var j,
  M = e(() => {
    ((j = r()), v(), x(), C(), D(), i());
  });
function N(e) {
  let t = (0, P.c)(10),
    {
      featuredPlugins: r,
      label: i,
      onConnectPlugin: s,
      onOpenPluginDirectory: c,
    } = e,
    l;
  t[0] !== r || t[1] !== s
    ? ((l =
        r.length > 0
          ? (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(n.Section, {
                  className: `flex flex-col`,
                  children: r.map((e) =>
                    (0, F.jsxs)(
                      n.Item,
                      {
                        RightIcon: u,
                        onSelect: () => s(e),
                        children: [
                          (0, F.jsx)(n.ItemIcon, {
                            size: `xs`,
                            children: (0, F.jsx)(p, {
                              alt: ``,
                              className: `size-full object-contain`,
                              knownAppId: e.plugin.name,
                              logoDarkUrl: e.logoDarkPath,
                              logoUrl: e.logoPath,
                              fallback: (0, F.jsx)(o, {
                                className: `size-full text-token-text-secondary`,
                              }),
                            }),
                          }),
                          (0, F.jsx)(`span`, { children: m(e) }),
                        ],
                      },
                      e.plugin.id,
                    ),
                  ),
                }),
                (0, F.jsx)(n.Separator, {}),
              ],
            })
          : null),
      (t[0] = r),
      (t[1] = s),
      (t[2] = l))
    : (l = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, F.jsx)(a, {
        id: `composer.workMode.plugins.browseAll`,
        defaultMessage: `Browse all plugins`,
        description: `Action that opens the full plugin directory from a plugin picker`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === c
    ? (f = t[5])
    : ((f = (0, F.jsx)(n.Section, {
        className: `flex flex-col`,
        children: (0, F.jsx)(n.Item, {
          RightIcon: y,
          onSelect: c,
          children: d,
        }),
      })),
      (t[4] = c),
      (t[5] = f));
  let h;
  return (
    t[6] !== i || t[7] !== l || t[8] !== f
      ? ((h = (0, F.jsxs)(n.FlyoutSubmenuItem, {
          LeftIcon: o,
          contentWidth: `menuWide`,
          label: i,
          children: [l, f],
        })),
        (t[6] = i),
        (t[7] = l),
        (t[8] = f),
        (t[9] = h))
      : (h = t[9]),
    h
  );
}
var P,
  F,
  I = e(() => {
    ((P = r()), h(), t(), d(), c(), b(), l(), _(), (F = f()));
  });
export { O as i, I as n, M as r, N as t };
//# sourceMappingURL=connect-plugins-submenu-item-nNazVzMD.js.map
