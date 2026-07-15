import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $Y as t,
  AY as n,
  I2 as r,
  Kq as i,
  S0 as a,
  Yq as o,
  Zq as s,
  _0 as c,
  _Y as l,
  cY as u,
  k2 as d,
  mY as f,
  pY as p,
  sY as m,
  yY as h,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  An as g,
  kn as _,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  v,
  y,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
function b() {
  let e = (0, x.c)(21),
    n = a(m),
    r = h(),
    i = s(t.reviewDelivery),
    c,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, S.jsx)(l, {
        id: `settings.general.reviewDelivery.label`,
        defaultMessage: `Review delivery`,
        description: `Label for the code review delivery setting`,
      })),
      (u = (0, S.jsx)(l, {
        id: `settings.general.reviewDelivery.description`,
        defaultMessage: `Start /review in the current task when possible or launch a separate review task`,
        description: `Description for the code review delivery setting`,
      })),
      (e[0] = c),
      (e[1] = u))
    : ((c = e[0]), (u = e[1]));
  let d = i ?? `inline`,
    f;
  e[2] === n
    ? (f = e[3])
    : ((f = (e) => {
        o(n, t.reviewDelivery, e);
      }),
      (e[2] = n),
      (e[3] = f));
  let p;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, S.jsx)(l, { ...C.inline })), (e[4] = p))
    : (p = e[4]);
  let g;
  e[5] === r
    ? (g = e[6])
    : ((g = r.formatMessage(C.inline)), (e[5] = r), (e[6] = g));
  let y;
  e[7] === g
    ? (y = e[8])
    : ((y = { id: `inline`, label: p, ariaLabel: g }), (e[7] = g), (e[8] = y));
  let b;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, S.jsx)(l, { ...C.detached })), (e[9] = b))
    : (b = e[9]);
  let w;
  e[10] === r
    ? (w = e[11])
    : ((w = r.formatMessage(C.detached)), (e[10] = r), (e[11] = w));
  let T;
  e[12] === w
    ? (T = e[13])
    : ((T = { id: `detached`, label: b, ariaLabel: w }),
      (e[12] = w),
      (e[13] = T));
  let E;
  e[14] !== y || e[15] !== T
    ? ((E = [y, T]), (e[14] = y), (e[15] = T), (e[16] = E))
    : (E = e[16]);
  let D;
  return (
    e[17] !== E || e[18] !== d || e[19] !== f
      ? ((D = (0, S.jsx)(v, {
          label: c,
          description: u,
          control: (0, S.jsx)(_, { selectedId: d, onSelect: f, options: E }),
        })),
        (e[17] = E),
        (e[18] = d),
        (e[19] = f),
        (e[20] = D))
      : (D = e[20]),
    D
  );
}
var x,
  S,
  C,
  w = e(() => {
    ((x = r()),
      c(),
      n(),
      f(),
      g(),
      u(),
      i(),
      y(),
      (S = d()),
      (C = p({
        inline: {
          id: `settings.general.reviewDelivery.inline`,
          defaultMessage: `Inline`,
          description: `Inline code review option label`,
        },
        detached: {
          id: `settings.general.reviewDelivery.detached`,
          defaultMessage: `Detached`,
          description: `Detached code review option label`,
        },
      })));
  });
export { w as n, b as t };
//# sourceMappingURL=review-delivery-settings-row-C1EJZLFC.js.map
