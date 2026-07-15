import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as t,
  Df as n,
  I2 as r,
  Mq as i,
  Nq as a,
  _Y as o,
  _f as s,
  bf as c,
  gf as l,
  hf as u,
  k2 as d,
  kf as f,
  mY as p,
  mf as m,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function h(e) {
  let t = (0, g.c)(34),
    {
      isDisabling: r,
      isUninstalling: a,
      onDisable: c,
      onConfirm: d,
      onOpenChange: p,
      open: h,
      pluginDisplayName: v,
    } = e,
    y;
  t[0] === v
    ? (y = t[1])
    : ((y = (0, _.jsx)(o, {
        id: `plugins.card.uninstallConfirm.title`,
        defaultMessage: `Uninstall {name} plugin?`,
        description: `Title for the plugin uninstall confirmation dialog`,
        values: {
          name: (0, _.jsx)(
            `strong`,
            { className: `font-semibold text-token-text-primary`, children: v },
            `plugin-name`,
          ),
        },
      })),
      (t[0] = v),
      (t[1] = y));
  let b = y,
    x;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { "aria-describedby": void 0 }), (t[2] = x))
    : (x = t[2]);
  let S;
  t[3] === b
    ? (S = t[4])
    : ((S = (0, _.jsx)(f, { className: `sr-only`, children: b })),
      (t[3] = b),
      (t[4] = S));
  let C;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, _.jsx)(o, {
        id: `plugins.card.uninstallConfirm.description`,
        defaultMessage: `This will uninstall the plugin, but it will not uninstall any bundled apps`,
        description: `Description for the plugin uninstall confirmation dialog`,
      })),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] === b
    ? (w = t[7])
    : ((w = (0, _.jsx)(s, {
        children: (0, _.jsx)(l, {
          title: b,
          subtitle: C,
          subtitleClassName: `mt-2`,
        }),
      })),
      (t[6] = b),
      (t[7] = w));
  let T;
  t[8] === p
    ? (T = t[9])
    : ((T = () => {
        p(!1);
      }),
      (t[8] = p),
      (t[9] = T));
  let E;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, _.jsx)(o, {
        id: `plugins.card.uninstallConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the plugin uninstall dialog`,
      })),
      (t[10] = E))
    : (E = t[10]);
  let D;
  t[11] === T
    ? (D = t[12])
    : ((D = (0, _.jsx)(i, { color: `outline`, onClick: T, children: E })),
      (t[11] = T),
      (t[12] = D));
  let O;
  t[13] !== r || t[14] !== c
    ? ((O =
        c == null
          ? null
          : (0, _.jsx)(i, {
              color: `outline`,
              loading: r ?? !1,
              onClick: () => {
                c();
              },
              children: (0, _.jsx)(o, {
                id: `plugins.card.uninstallConfirm.disable`,
                defaultMessage: `Disable plugin`,
                description: `Disable button label for the plugin uninstall dialog`,
              }),
            })),
      (t[13] = r),
      (t[14] = c),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] === d
    ? (k = t[17])
    : ((k = () => {
        d();
      }),
      (t[16] = d),
      (t[17] = k));
  let A;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, _.jsx)(o, {
        id: `plugins.card.uninstallConfirm.confirm`,
        defaultMessage: `Uninstall`,
        description: `Confirm button label for the plugin uninstall dialog`,
      })),
      (t[18] = A))
    : (A = t[18]);
  let j;
  t[19] !== a || t[20] !== k
    ? ((j = (0, _.jsx)(i, {
        color: `danger`,
        loading: a,
        onClick: k,
        children: A,
      })),
      (t[19] = a),
      (t[20] = k),
      (t[21] = j))
    : (j = t[21]);
  let M;
  t[22] !== j || t[23] !== D || t[24] !== O
    ? ((M = (0, _.jsx)(s, {
        children: (0, _.jsxs)(u, { children: [D, O, j] }),
      })),
      (t[22] = j),
      (t[23] = D),
      (t[24] = O),
      (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] !== M || t[27] !== S || t[28] !== w
    ? ((N = (0, _.jsxs)(m, { children: [S, w, M] })),
      (t[26] = M),
      (t[27] = S),
      (t[28] = w),
      (t[29] = N))
    : (N = t[29]);
  let P;
  return (
    t[30] !== p || t[31] !== h || t[32] !== N
      ? ((P = (0, _.jsx)(n, {
          open: h,
          contentProps: x,
          onOpenChange: p,
          children: N,
        })),
        (t[30] = p),
        (t[31] = h),
        (t[32] = N),
        (t[33] = P))
      : (P = t[33]),
    P
  );
}
var g,
  _,
  v = e(() => {
    ((g = r()), p(), a(), t(), c(), (_ = d()));
  });
export { v as n, h as t };
//# sourceMappingURL=plugin-uninstall-dialog-CQB2aCeT.js.map
