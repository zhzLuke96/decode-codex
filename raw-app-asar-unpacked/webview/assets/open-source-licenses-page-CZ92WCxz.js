import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as t,
  I2 as n,
  JA as r,
  Mq as i,
  Nq as a,
  _0 as o,
  _Y as s,
  aJ as c,
  cY as l,
  cj as u,
  dJ as d,
  fJ as f,
  iJ as p,
  k2 as m,
  mY as h,
  nt as g,
  oj as _,
  sY as v,
  tt as y,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  d as b,
  l as x,
  p as S,
  u as C,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as w,
  p as T,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as E,
  t as D,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
function O() {
  let e = (0, A.c)(18),
    n = u(),
    r = _(),
    a;
  e[0] === r.state
    ? (a = e[1])
    : ((a = k(r.state)), (e[0] = r.state), (e[1] = a));
  let o = a,
    c =
      r.state != null && typeof r.state == `object` && !Array.isArray(r.state)
        ? r.state
        : null,
    { data: l, isLoading: d } = t(M),
    f;
  e[2] !== o || e[3] !== c || e[4] !== n
    ? ((f = () => {
        n(o, { replace: !0, state: c });
      }),
      (e[2] = o),
      (e[3] = c),
      (e[4] = n),
      (e[5] = f))
    : (f = e[5]);
  let p, m;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, j.jsx)(y, { className: `icon-xs` })),
      (m = (0, j.jsx)(s, {
        id: `settings.openSourceLicenses.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to the main settings page`,
      })),
      (e[6] = p),
      (e[7] = m))
    : ((p = e[6]), (m = e[7]));
  let h;
  e[8] === f
    ? (h = e[9])
    : ((h = (0, j.jsxs)(i, {
        color: `ghost`,
        size: `toolbar`,
        onClick: f,
        children: [p, m],
      })),
      (e[8] = f),
      (e[9] = h));
  let g, v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, j.jsx)(s, {
        id: `settings.openSourceLicenses.title`,
        defaultMessage: `Open source licenses`,
        description: `Title for the open source licenses settings page`,
      })),
      (v = (0, j.jsx)(s, {
        id: `settings.openSourceLicenses.subtitle`,
        defaultMessage: `Third-party notices for dependencies included in this app`,
        description: `Subtitle for the open source licenses settings page`,
      })),
      (e[10] = g),
      (e[11] = v))
    : ((g = e[10]), (v = e[11]));
  let S;
  e[12] !== l || e[13] !== d
    ? ((S = d
        ? (0, j.jsx)(x, {
            children: (0, j.jsx)(s, {
              id: `settings.openSourceLicenses.loading`,
              defaultMessage: `Loading…`,
              description: `Loading label while fetching third-party notices`,
            }),
          })
        : (0, j.jsx)(D, {
            children: (0, j.jsx)(D.Content, {
              children: (0, j.jsx)(w, {
                children: l?.text
                  ? (0, j.jsx)(`pre`, {
                      className: `bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary`,
                      children: l.text,
                    })
                  : (0, j.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, j.jsx)(s, {
                        id: `settings.openSourceLicenses.missing`,
                        defaultMessage: `No third-party notices were found.`,
                        description: `Message shown when the third-party notices file is missing`,
                      }),
                    }),
              }),
            }),
          })),
      (e[12] = l),
      (e[13] = d),
      (e[14] = S))
    : (S = e[14]);
  let C;
  return (
    e[15] !== h || e[16] !== S
      ? ((C = (0, j.jsx)(b, {
          backSlot: h,
          title: g,
          subtitle: v,
          children: S,
        })),
        (e[15] = h),
        (e[16] = S),
        (e[17] = C))
      : (C = e[17]),
    C
  );
}
function k(e) {
  if (
    typeof e == `object` &&
    e &&
    !Array.isArray(e) &&
    `licensesBackPath` in e
  ) {
    let t = e.licensesBackPath;
    if (typeof t == `string` && t.startsWith(`/settings/`)) return t;
  }
  return `/settings/general`;
}
var A, j, M;
e(() => {
  ((A = n()),
    o(),
    h(),
    r(),
    a(),
    g(),
    l(),
    S(),
    E(),
    C(),
    T(),
    f(),
    c(),
    (j = m()),
    (M = p(v, `third-party-notices`, {
      enabled: !0,
      staleTime: d.ONE_MINUTE,
    })));
})();
export { O as OpenSourceLicensesPage };
//# sourceMappingURL=open-source-licenses-page-CZ92WCxz.js.map
