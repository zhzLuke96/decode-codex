import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as n,
  Df as r,
  I2 as i,
  KJ as a,
  L2 as o,
  MU as s,
  Mq as c,
  NU as l,
  Nq as u,
  S0 as d,
  SK as f,
  _0 as p,
  _Y as m,
  _f as h,
  bJ as g,
  bK as _,
  bf as v,
  cY as y,
  gD as b,
  gf as x,
  hf as S,
  k2 as C,
  kf as w,
  mD as T,
  mY as E,
  mf as D,
  qJ as O,
  sY as k,
  yJ as A,
  yY as j,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { n as M, t as N } from "./esm-Dk007VCu.js";
function P(e) {
  let t = e.source.trim();
  if (t.length === 0) return null;
  let n = e.refName.trim(),
    r = e.sparsePaths
      .split(/[\n,]+/)
      .map((e) => e.trim())
      .filter((e) => e.length > 0);
  return {
    source: t,
    refName: n.length > 0 ? n : null,
    sparsePaths: r.length > 0 ? r : null,
  };
}
async function F({
  forceReloadPlugins: e,
  onReloadError: t,
  params: n,
  sendAddMarketplace: r,
}) {
  let i = await r(n);
  try {
    await e();
  } catch (e) {
    return (
      t(e),
      { kind: `reload-failed`, marketplaceName: i.marketplaceName }
    );
  }
  return {
    alreadyAdded: i.alreadyAdded,
    kind: `added`,
    marketplaceName: i.marketplaceName,
  };
}
var I = e(() => {});
function L(e) {
  let t = (0, H.c)(12),
    { onAddMarketplace: n, onOpenChange: i, open: o } = e,
    s = j(),
    [l, u] = (0, U.useState)(null),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { source: ``, refName: ``, sparsePaths: `` }), (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === s
    ? (f = t[2])
    : ((f = {
        onSubmit: (e) => {
          let { value: t } = e;
          if (!(t.source.trim().length > 0))
            return {
              fields: {
                source: s.formatMessage({
                  id: `skills.appsPage.addMarketplace.sourceRequired`,
                  defaultMessage: `Enter a marketplace source`,
                  description: `Validation message shown when adding a marketplace without a source`,
                }),
              },
            };
        },
      }),
      (t[1] = s),
      (t[2] = f));
  let p = M({
      defaultValues: d,
      validators: f,
      onSubmit: async (e) => {
        let { value: t } = e,
          r = P(t);
        if (r != null) {
          u(null);
          try {
            (await n(r), p.reset(), i(!1));
          } catch (e) {
            let t = e;
            u(
              t instanceof Error
                ? t.message
                : s.formatMessage({
                    id: `skills.appsPage.addMarketplace.failed`,
                    defaultMessage: `Failed to add marketplace`,
                    description: `Fallback error shown when adding a plugin marketplace fails`,
                  }),
            );
          }
        }
      },
    }),
    g;
  t[3] !== p || t[4] !== s || t[5] !== i || t[6] !== o || t[7] !== l
    ? ((g = (e) => {
        let { source: t, isSubmitting: n, submissionAttempts: d } = e,
          f = (e) => {
            n || (e || (p.reset(), u(null)), i(e));
          };
        return (0, W.jsx)(r, {
          open: o,
          contentProps: { "aria-describedby": void 0 },
          onOpenChange: f,
          shouldIgnoreClickOutside: n,
          showDialogClose: !n,
          size: `wide`,
          children: (0, W.jsxs)(D, {
            as: `form`,
            className: `gap-4`,
            onSubmit: (e) => {
              (e.preventDefault(), p.handleSubmit());
            },
            children: [
              (0, W.jsx)(w, {
                className: `sr-only`,
                children: (0, W.jsx)(m, {
                  id: `skills.appsPage.addMarketplace.title`,
                  defaultMessage: `Add plugin marketplace`,
                  description: `Dialog title for adding a plugin marketplace`,
                }),
              }),
              (0, W.jsx)(h, {
                children: (0, W.jsx)(x, {
                  title: (0, W.jsx)(m, {
                    id: `skills.appsPage.addMarketplace.header`,
                    defaultMessage: `Add plugin marketplace`,
                    description: `Header for adding a plugin marketplace`,
                  }),
                  subtitle: (0, W.jsx)(m, {
                    id: `skills.appsPage.addMarketplace.subtitle`,
                    defaultMessage: `Add from a GitHub repo, Git URL, or local folder. <link>Learn more</link>`,
                    description: `Short description in the add marketplace dialog`,
                    values: { link: z },
                  }),
                }),
              }),
              (0, W.jsxs)(h, {
                className: `gap-3`,
                children: [
                  (0, W.jsx)(p.Field, {
                    name: `source`,
                    children: (e) => {
                      let t =
                        d > 0 || e.state.meta.isBlurred
                          ? (e.state.meta.errors.find(R) ?? null)
                          : null;
                      return (0, W.jsxs)(`label`, {
                        className: G,
                        htmlFor: `plugin-marketplace-source`,
                        children: [
                          (0, W.jsx)(m, {
                            id: `skills.appsPage.addMarketplace.sourceLabel`,
                            defaultMessage: `Source`,
                            description: `Label for the marketplace source field`,
                          }),
                          (0, W.jsx)(`input`, {
                            id: `plugin-marketplace-source`,
                            "aria-describedby":
                              t == null
                                ? void 0
                                : `plugin-marketplace-source-error`,
                            "aria-invalid": t != null,
                            autoFocus: !0,
                            className: K,
                            disabled: n,
                            onBlur: e.handleBlur,
                            onChange: (t) => {
                              e.handleChange(t.target.value);
                            },
                            placeholder: s.formatMessage({
                              id: `skills.appsPage.addMarketplace.sourcePlaceholder`,
                              defaultMessage: `openai/plugins or git@github.com:org/repo.git`,
                              description: `Placeholder for the marketplace source field`,
                            }),
                            type: `text`,
                            value: e.state.value,
                          }),
                          t == null
                            ? null
                            : (0, W.jsx)(`span`, {
                                id: `plugin-marketplace-source-error`,
                                className: `text-token-error-foreground`,
                                children: t,
                              }),
                        ],
                      });
                    },
                  }),
                  (0, W.jsx)(p.Field, {
                    name: `refName`,
                    children: (e) =>
                      (0, W.jsxs)(`label`, {
                        className: G,
                        htmlFor: `plugin-marketplace-ref`,
                        children: [
                          (0, W.jsx)(m, {
                            id: `skills.appsPage.addMarketplace.refLabel`,
                            defaultMessage: `Git ref`,
                            description: `Label for the optional marketplace git ref field`,
                          }),
                          (0, W.jsx)(`input`, {
                            id: `plugin-marketplace-ref`,
                            className: K,
                            disabled: n,
                            onBlur: e.handleBlur,
                            onChange: (t) => {
                              e.handleChange(t.target.value);
                            },
                            placeholder: s.formatMessage({
                              id: `skills.appsPage.addMarketplace.refPlaceholder`,
                              defaultMessage: `main`,
                              description: `Placeholder for the optional marketplace git ref field`,
                            }),
                            type: `text`,
                            value: e.state.value,
                          }),
                        ],
                      }),
                  }),
                  (0, W.jsx)(p.Field, {
                    name: `sparsePaths`,
                    children: (e) =>
                      (0, W.jsxs)(`label`, {
                        className: G,
                        htmlFor: `plugin-marketplace-sparse-paths`,
                        children: [
                          (0, W.jsx)(m, {
                            id: `skills.appsPage.addMarketplace.sparsePathsLabel`,
                            defaultMessage: `Sparse paths`,
                            description: `Label for the optional marketplace sparse paths field`,
                          }),
                          (0, W.jsx)(`textarea`, {
                            id: `plugin-marketplace-sparse-paths`,
                            className: a(K, `min-h-20 resize-y`),
                            disabled: n,
                            onBlur: e.handleBlur,
                            onChange: (t) => {
                              e.handleChange(t.target.value);
                            },
                            placeholder: s.formatMessage({
                              id: `skills.appsPage.addMarketplace.sparsePathsPlaceholder`,
                              defaultMessage: `plugins/codex`,
                              description: `Placeholder for the optional marketplace sparse paths field`,
                            }),
                            value: e.state.value,
                          }),
                        ],
                      }),
                  }),
                  l == null
                    ? null
                    : (0, W.jsx)(`div`, {
                        className: `text-sm text-token-error-foreground`,
                        role: `alert`,
                        children: l,
                      }),
                ],
              }),
              (0, W.jsx)(h, {
                children: (0, W.jsxs)(S, {
                  children: [
                    (0, W.jsx)(c, {
                      color: `outline`,
                      disabled: n,
                      onClick: () => {
                        f(!1);
                      },
                      children: (0, W.jsx)(m, {
                        id: `skills.appsPage.addMarketplace.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button in the add marketplace dialog`,
                      }),
                    }),
                    (0, W.jsx)(c, {
                      disabled: t.trim().length === 0 || n,
                      loading: n,
                      type: `submit`,
                      children: (0, W.jsx)(m, {
                        id: `skills.appsPage.addMarketplace.submit`,
                        defaultMessage: `Add marketplace`,
                        description: `Submit button in the add marketplace dialog`,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }),
      (t[3] = p),
      (t[4] = s),
      (t[5] = i),
      (t[6] = o),
      (t[7] = l),
      (t[8] = g))
    : (g = t[8]);
  let _;
  return (
    t[9] !== p.Subscribe || t[10] !== g
      ? ((_ = (0, W.jsx)(p.Subscribe, { selector: V, children: g })),
        (t[9] = p.Subscribe),
        (t[10] = g),
        (t[11] = _))
      : (_ = t[11]),
    _
  );
}
function R(e) {
  return typeof e == `string`;
}
function z(e) {
  return (0, W.jsx)(`a`, {
    className: `cursor-interaction text-token-link underline-offset-2 hover:underline`,
    href: `https://developers.openai.com/codex/plugins/build`,
    onClick: B,
    children: e,
  });
}
function B(e) {
  b({
    event: e,
    href: `https://developers.openai.com/codex/plugins/build`,
    initiator: `open_in_browser_bridge`,
  });
}
function V(e) {
  return {
    source: e.values.source,
    isSubmitting: e.isSubmitting,
    submissionAttempts: e.submissionAttempts,
  };
}
var H,
  U,
  W,
  G,
  K,
  q = e(() => {
    ((H = i()),
      N(),
      O(),
      (U = t(o(), 1)),
      E(),
      u(),
      n(),
      v(),
      T(),
      I(),
      (W = C()),
      (G = `flex flex-col gap-1.5 text-sm text-token-description-foreground`),
      (K = `w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`));
  });
function J(e) {
  let t = (0, X.c)(5),
    { forceReloadPlugins: n, hostId: r } = e,
    i = d(k),
    a = j(),
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
      ? ((o = async (e) => {
          let t = await F({
            forceReloadPlugins: n,
            onReloadError: Y,
            params: e,
            sendAddMarketplace: (e) =>
              l(`add-marketplace`, { hostId: r, ...e }),
          });
          if (t.kind === `reload-failed`) {
            i.get(f).warning(
              a.formatMessage(
                {
                  id: `skills.appsPage.addMarketplace.refreshFailed`,
                  defaultMessage: `{marketplaceName} marketplace is configured, but failed to refresh the plugin list`,
                  description: `Toast shown after a marketplace add request succeeds but refreshing the plugin list fails`,
                },
                { marketplaceName: t.marketplaceName },
              ),
            );
            return;
          }
          i.get(f).success(
            t.alreadyAdded
              ? a.formatMessage(
                  {
                    id: `skills.appsPage.addMarketplace.alreadyAdded`,
                    defaultMessage: `{marketplaceName} is already added`,
                    description: `Toast shown after adding a marketplace that was already configured`,
                  },
                  { marketplaceName: t.marketplaceName },
                )
              : a.formatMessage(
                  {
                    id: `skills.appsPage.addMarketplace.success`,
                    defaultMessage: `{marketplaceName} marketplace added`,
                    description: `Toast shown after successfully adding a plugin marketplace`,
                  },
                  { marketplaceName: t.marketplaceName },
                ),
          );
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Y(e) {
  g.error(`Failed to refresh plugins after adding marketplace`, {
    safe: {},
    sensitive: { error: e },
  });
}
var X,
  Z = e(() => {
    ((X = i()), p(), E(), s(), _(), y(), A(), I());
  });
export { q as i, J as n, L as r, Z as t };
//# sourceMappingURL=use-add-marketplace-D3QmIE0u.js.map
