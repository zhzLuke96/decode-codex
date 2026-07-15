import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  BA as r,
  C0 as i,
  FK as a,
  Fs as o,
  I2 as s,
  Is as c,
  L2 as l,
  MK as u,
  NK as d,
  Ol as f,
  PK as p,
  S0 as m,
  Tx as h,
  WA as g,
  _0 as _,
  _2 as v,
  _Y as ee,
  aJ as y,
  cY as b,
  d2 as x,
  gJ as S,
  h2 as C,
  hJ as w,
  im as T,
  k2 as E,
  kl as D,
  mJ as O,
  mY as te,
  s2 as ne,
  sJ as re,
  sY as k,
  tm as ie,
  wx as A,
  x0 as ae,
  yY as oe,
  zZ as j,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Cc as se,
  yc as ce,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Ot as M,
  kt as le,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import { en as ue } from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  lt as de,
  pt as fe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  Jn as pe,
  ns as N,
  qn as me,
  rs as P,
  ts as F,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
function I(e) {
  let t = (0, B.c)(16),
    n = C(U),
    r;
  t[0] === e.dependencies
    ? (r = t[1])
    : ((r = e.dependencies ? e.dependencies.map(he).join(`|`) : ``),
      (t[0] = e.dependencies),
      (t[1] = r));
  let i = r,
    a;
  t[2] !== e || t[3] !== n
    ? ((a = () => {
        n((t) => {
          let n = !1,
            r = [...t].map((t) => (t.id === e.id ? ((n = !0), e) : t));
          return (n || r.push(e), (0, V.default)(r.filter(z), [R, L]));
        });
      }),
      (t[2] = e),
      (t[3] = n),
      (t[4] = a))
    : (a = t[4]);
  let o = (0, H.useEffectEvent)(a),
    s;
  t[5] === o
    ? (s = t[6])
    : ((s = () => {
        o();
      }),
      (t[5] = o),
      (t[6] = s));
  let c;
  (t[7] !== i || t[8] !== e.enabled || t[9] !== e.id || t[10] !== e.order
    ? ((c = [e.id, e.enabled, e.order, i]),
      (t[7] = i),
      (t[8] = e.enabled),
      (t[9] = e.id),
      (t[10] = e.order),
      (t[11] = c))
    : (c = t[11]),
    (0, H.useEffect)(s, c));
  let l, u;
  (t[12] !== e.id || t[13] !== n
    ? ((l = () => () => {
        n((t) => t.filter((t) => t.id !== e.id));
      }),
      (u = [e.id, n]),
      (t[12] = e.id),
      (t[13] = n),
      (t[14] = l),
      (t[15] = u))
    : ((l = t[14]), (u = t[15])),
    (0, H.useEffect)(l, u));
}
function L(e) {
  return e.id;
}
function R(e) {
  return e.order ?? 0;
}
function z(e) {
  return e.enabled !== !1;
}
function he(e) {
  return ge(e);
}
function ge(e) {
  return e == null ? `` : String(e);
}
var B,
  V,
  H,
  U,
  W = e(() => {
    ((B = s()), x(), (V = t(ue(), 1)), (H = t(l(), 1)), (U = v([])));
  }),
  G,
  K,
  q,
  J = e(() => {
    (_(),
      b(),
      (G = `command-menu-first-file-item`),
      (K = `command-menu-first-chat-item`),
      (q = ne(k, `root`)));
  });
function _e(e) {
  let t = (0, Y.c)(31),
    {
      clearSearch: n,
      close: r,
      hostId: a,
      onSelectFile: s,
      workspaceRoot: c,
    } = e,
    l = m(k),
    d = oe(),
    f = ae(de, `searchFiles`),
    p = F(ye),
    h = i(D),
    g = i(q),
    _ = g === `files` ? p : ``,
    v;
  t[0] === c ? (v = t[1]) : ((v = [c]), (t[0] = c), (t[1] = v));
  let y;
  t[2] !== a || t[3] !== _ || t[4] !== v
    ? ((y = { hostId: a, query: _, roots: v }),
      (t[2] = a),
      (t[3] = _),
      (t[4] = v),
      (t[5] = y))
    : (y = t[5]);
  let { sections: b } = pe(y),
    x = b[0],
    S,
    C;
  if (
    (t[6] !== h || t[7] !== l
      ? ((S = () => {
          h || l.set(q, `root`);
        }),
        (C = [h, l]),
        (t[6] = h),
        (t[7] = l),
        (t[8] = S),
        (t[9] = C))
      : ((S = t[8]), (C = t[9])),
    (0, X.useEffect)(S, C),
    g !== `files`)
  ) {
    let e;
    t[10] === d
      ? (e = t[11])
      : ((e = d.formatMessage({
          id: `thread.fileCommandMenu.searchFiles`,
          defaultMessage: `Search files`,
          description: `Command menu item that opens workspace file search`,
        })),
        (t[10] = d),
        (t[11] = e));
    let r = f ?? ``,
      i;
    t[12] === r
      ? (i = t[13])
      : ((i = (0, Z.jsx)(u, { keysLabel: r })), (t[12] = r), (t[13] = i));
    let a;
    t[14] !== n || t[15] !== l
      ? ((a = () => {
          (n(), l.set(q, `files`));
        }),
        (t[14] = n),
        (t[15] = l),
        (t[16] = a))
      : (a = t[16]);
    let s;
    return (
      t[17] !== e || t[18] !== i || t[19] !== a
        ? ((s = (0, Z.jsx)(
            M,
            {
              value: `search files workspace project cmd+p`,
              title: e,
              LeftIcon: o,
              rightAccessory: i,
              onSelect: a,
            },
            `search-files`,
          )),
          (t[17] = e),
          (t[18] = i),
          (t[19] = a),
          (t[20] = s))
        : (s = t[20]),
      s
    );
  }
  if (x == null || (x.items.length === 0 && x.emptyState == null)) return null;
  let w;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-token-description-foreground`,
        children: (0, Z.jsx)(ee, {
          id: `thread.fileCommandMenu.filesGroup`,
          defaultMessage: `Files`,
          description: `Group label for workspace file search results`,
        }),
      })),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { gap: `var(--spacing)` }), (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== r ||
  t[24] !== x.emptyState ||
  t[25] !== x.items ||
  t[26] !== d ||
  t[27] !== s
    ? ((E =
        x.items.length > 0
          ? x.items.map((e, t) =>
              (0, Z.jsx)(
                M,
                {
                  description: e.detail ?? void 0,
                  forceMount: !0,
                  LeftIcon: e.icon,
                  onSelect: () => {
                    (s(e.key.replace(/^file:/, ``)), r());
                  },
                  title: e.label,
                  value: t === 0 ? G : [e.label, e.detail].join(` `),
                },
                e.key,
              ),
            )
          : x.emptyState == null
            ? null
            : (0, Z.jsx)(N.Item, {
                "data-command-menu-loading": !0,
                forceMount: !0,
                onSelect: ve,
                value: G,
                children: (0, Z.jsx)(`div`, {
                  className: `flex w-full min-w-0 items-center gap-2`,
                  children: (0, Z.jsx)(`div`, {
                    className: `min-w-0 flex-1 truncate`,
                    children: d.formatMessage(x.emptyState),
                  }),
                }),
              })),
      (t[23] = r),
      (t[24] = x.emptyState),
      (t[25] = x.items),
      (t[26] = d),
      (t[27] = s),
      (t[28] = E))
    : (E = t[28]);
  let O;
  return (
    t[29] === E
      ? (O = t[30])
      : ((O = (0, Z.jsx)(
          N.Group,
          {
            forceMount: !0,
            heading: w,
            className: `flex flex-col`,
            style: T,
            children: E,
          },
          `group-files`,
        )),
        (t[29] = E),
        (t[30] = O)),
    O
  );
}
function ve() {}
function ye(e) {
  return e.search;
}
var Y,
  X,
  Z,
  be = e(() => {
    ((Y = s()),
      P(),
      _(),
      (X = t(l(), 1)),
      te(),
      fe(),
      J(),
      f(),
      d(),
      le(),
      me(),
      c(),
      b(),
      (Z = E()));
  });
function xe() {
  let e = (0, Q.c)(23),
    t = m(r),
    n = i(q),
    o = re(`open-file`),
    s = i(T),
    c = i(se),
    l = c != null,
    u;
  e[0] !== l || e[1] !== s || e[2] !== o || e[3] !== t || e[4] !== c
    ? ((u = (e) => {
        !l ||
          c == null ||
          h({
            scope: t,
            path: e,
            cwd: j(c),
            hostConfig: s,
            hostId: s.id,
            openFile: o.mutate,
            openInSidePanel: !0,
          });
      }),
      (e[0] = l),
      (e[1] = s),
      (e[2] = o),
      (e[3] = t),
      (e[4] = c),
      (e[5] = u))
    : (u = e[5]);
  let d = u,
    f;
  (e[6] !== l || e[7] !== t
    ? ((f = () => {
        l &&
          (w.dispatchHostMessage({ type: `command-menu`, query: `` }),
          t.set(q, `files`),
          t.set(D, !0));
      }),
      (e[6] = l),
      (e[7] = t),
      (e[8] = f))
    : (f = e[8]),
    S(`file-search-command-menu`, a(f)));
  let p;
  e[9] !== l || e[10] !== n || e[11] !== s.id || e[12] !== c
    ? ((p = [l, n, s.id, c]),
      (e[9] = l),
      (e[10] = n),
      (e[11] = s.id),
      (e[12] = c),
      (e[13] = p))
    : (p = e[13]);
  let g = n === `files`,
    _;
  e[14] !== s.id || e[15] !== d || e[16] !== c
    ? ((_ = (e, t) =>
        c == null
          ? null
          : (0, $.jsx)(_e, {
              clearSearch: t,
              close: e,
              hostId: s.id,
              onSelectFile: d,
              workspaceRoot: c,
            })),
      (e[14] = s.id),
      (e[15] = d),
      (e[16] = c),
      (e[17] = _))
    : (_ = e[17]);
  let v;
  return (
    e[18] !== l || e[19] !== p || e[20] !== g || e[21] !== _
      ? ((v = {
          dependencies: p,
          enabled: l,
          exclusive: g,
          groupKey: `suggested`,
          id: `thread-file-search`,
          order: -1e3,
          render: _,
        }),
        (e[18] = l),
        (e[19] = p),
        (e[20] = g),
        (e[21] = _),
        (e[22] = v))
      : (v = e[22]),
    I(v),
    null
  );
}
var Q,
  $,
  Se = e(() => {
    ((Q = s()),
      _(),
      n(),
      W(),
      J(),
      f(),
      A(),
      O(),
      ce(),
      g(),
      ie(),
      p(),
      y(),
      be(),
      ($ = E()));
  });
export {
  q as a,
  W as c,
  G as i,
  I as l,
  Se as n,
  J as o,
  K as r,
  U as s,
  xe as t,
};
//# sourceMappingURL=app-initial~app-main~local-conversation-page-DmnCwxFx.js.map
