import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Aw as r,
  C0 as i,
  Ds as a,
  I2 as o,
  Kq as s,
  L2 as c,
  Mg as l,
  NI as u,
  PB as d,
  RK as f,
  S0 as p,
  Ts as m,
  Yq as h,
  Zq as g,
  _0 as _,
  _Y as v,
  a2 as y,
  bG as b,
  bI as x,
  cY as S,
  dJ as C,
  fJ as w,
  iX as T,
  jg as E,
  js as D,
  jw as O,
  k2 as k,
  mY as A,
  pY as j,
  rG as M,
  sY as N,
  uG as P,
  vI as F,
  x2 as I,
  y2 as L,
  yG as R,
  yY as z,
  zK as B,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Cn as ee,
  Sn as V,
  bn as te,
  xn as ne,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  a as re,
  d as ie,
  gt as ae,
  ht as oe,
  o as se,
  p as ce,
  r as le,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as H,
  p as ue,
  v as U,
  y as W,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as de,
  rt as fe,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as pe,
  t as G,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as me, t as he } from "./onboarding-banner-CFCJ4ceQ.js";
var ge,
  _e = e(() => {
    ge = `` + new URL(`appshot-demo-DcV9m9GT.mp4`, import.meta.url).href;
  });
function ve() {
  let e = (0, K.c)(41),
    t = p(N),
    n = i(ee),
    r = O(),
    [o, s] = (0, xe.useState)(null),
    { data: c } = i(Y),
    l;
  e[0] !== r || e[1] !== t
    ? ((l = {
        mutationFn: ye,
        onSuccess: (e) => {
          (t.query.setData(Y, e.state), r(J));
        },
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = l))
    : (l = e[2]);
  let d = I(l);
  if (!n || c?.supported === !1) return null;
  let h;
  e[3] !== t || e[4] !== d
    ? ((h = async function (e, n) {
        s(null);
        try {
          let r = await d.mutateAsync({ hotkey: e });
          if (!r.success) {
            s(r.error);
            return;
          }
          x(t, u, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          s(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = d),
      (e[5] = h))
    : (h = e[5]);
  let g = h,
    _ = c?.configuredHotkey ?? null,
    y;
  e[6] === _
    ? (y = e[7])
    : ((y = X.find((e) => e.hotkey === _) ?? null), (e[6] = _), (e[7] = y));
  let b = y,
    S;
  e[8] !== _ || e[9] !== b?.label
    ? ((S = b?.label ?? (_ == null ? null : oe(_))),
      (e[8] = _),
      (e[9] = b?.label),
      (e[10] = S))
    : (S = e[10]);
  let C = S,
    w = b?.hotkey ?? null,
    T;
  e[11] !== o || e[12] !== w
    ? ((T =
        w == null && o == null
          ? void 0
          : (0, q.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                w == null ? null : (0, q.jsx)(be, { hotkey: w }),
                o
                  ? (0, q.jsx)(`span`, {
                      className: `text-token-error-foreground`,
                      children: o,
                    })
                  : null,
              ],
            })),
      (e[11] = o),
      (e[12] = w),
      (e[13] = T))
    : (T = e[13]);
  let E = T,
    D;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, q.jsx)(v, {
        id: `settings.appshotHotkey.label`,
        defaultMessage: `Hotkey`,
        description: `Label for appshot hotkey setting`,
      })),
      (e[14] = D))
    : (D = e[14]);
  let k = d.isPending,
    A;
  e[15] === C
    ? (A = e[16])
    : ((A =
        C ??
        (0, q.jsx)(v, {
          id: `settings.appshotHotkey.none`,
          defaultMessage: `None`,
          description: `Label for disabling the appshot hotkey`,
        })),
      (e[15] = C),
      (e[16] = A));
  let j;
  e[17] !== d.isPending || e[18] !== A
    ? ((j = (0, q.jsx)(le, {
        className: `w-max`,
        contentClassName: `flex-none`,
        disabled: d.isPending,
        children: A,
      })),
      (e[17] = d.isPending),
      (e[18] = A),
      (e[19] = j))
    : (j = e[19]);
  let M;
  e[20] !== g || e[21] !== _ || e[22] !== b?.hotkey
    ? ((M = X.map((e) =>
        (0, q.jsx)(
          a.Item,
          {
            RightIcon: e.hotkey === b?.hotkey ? f : void 0,
            onSelect: () => {
              (s(null), e.hotkey !== _ && g(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[20] = g),
      (e[21] = _),
      (e[22] = b?.hotkey),
      (e[23] = M))
    : (M = e[23]);
  let P = _ == null ? f : void 0,
    F;
  e[24] !== g || e[25] !== _
    ? ((F = () => {
        (s(null), _ != null && g(null, `disable`));
      }),
      (e[24] = g),
      (e[25] = _),
      (e[26] = F))
    : (F = e[26]);
  let L;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, q.jsx)(v, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[27] = L))
    : (L = e[27]);
  let R;
  e[28] !== P || e[29] !== F
    ? ((R = (0, q.jsx)(a.Item, { RightIcon: P, onSelect: F, children: L })),
      (e[28] = P),
      (e[29] = F),
      (e[30] = R))
    : (R = e[30]);
  let z;
  e[31] !== R || e[32] !== M
    ? ((z = (0, q.jsxs)(a.Section, { children: [M, R] })),
      (e[31] = R),
      (e[32] = M),
      (e[33] = z))
    : (z = e[33]);
  let B;
  e[34] !== d.isPending || e[35] !== z || e[36] !== j
    ? ((B = (0, q.jsx)(m, {
        align: `end`,
        contentWidth: `icon`,
        disabled: k,
        triggerButton: j,
        children: z,
      })),
      (e[34] = d.isPending),
      (e[35] = z),
      (e[36] = j),
      (e[37] = B))
    : (B = e[37]);
  let V;
  return (
    e[38] !== E || e[39] !== B
      ? ((V = (0, q.jsx)(U, { label: D, description: E, control: B })),
        (e[38] = E),
        (e[39] = B),
        (e[40] = V))
      : (V = e[40]),
    V
  );
}
async function ye(e) {
  let { hotkey: t } = e,
    n = R.appshotHotkeys;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function be(e) {
  let t = (0, K.c)(3),
    { hotkey: n } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(v, {
              id: `settings.appshotHotkey.description.command`,
              defaultMessage: `Press both ⌘ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Command keys`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `DoubleOption`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(v, {
              id: `settings.appshotHotkey.description.option`,
              defaultMessage: `Press both ⌥ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Option keys`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `DoubleShift`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(v, {
              id: `settings.appshotHotkey.description.shift`,
              defaultMessage: `Press both ⇧ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Shift keys`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
var K,
  xe,
  q,
  J,
  Y,
  X,
  Se = e(() => {
    ((K = o()),
      d(),
      L(),
      _(),
      (xe = t(c(), 1)),
      A(),
      V(),
      D(),
      B(),
      ae(),
      F(),
      r(),
      b(),
      S(),
      W(),
      se(),
      w(),
      (q = k()),
      (J = [`appshot-hotkey-state`]),
      (Y = y(N, () => ({
        queryKey: J,
        queryFn: async () => {
          let e = R.appshotHotkeys;
          return e == null
            ? { supported: !1, configuredHotkey: null, isActive: !1 }
            : e.getState();
        },
        staleTime: C.ONE_MINUTE,
      }))),
      (X = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]));
  }),
  Z,
  Ce = e(() => {
    (A(),
      (Z = j({
        capture: {
          id: `settings.appshots.hero.title`,
          defaultMessage: `Take an appshot to show ChatGPT your frontmost window`,
          description: `Title for the Appshots settings explainer`,
        },
        soundEffect: {
          id: `settings.appshots.soundEffect.label`,
          defaultMessage: `Play sound effect`,
          description: `Label for the Appshots sound effect setting row`,
        },
      })));
  });
function we() {
  let e = (0, Q.c)(28),
    t = p(N),
    n = z(),
    r = g(T.destination),
    o = i(ee),
    s = P(),
    { isLoading: c } = l(),
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        id: `automatic`,
        label: (0, $.jsx)(v, {
          id: `settings.appshots.destination.automatic`,
          defaultMessage: `Automatic`,
          description: `Automatic Appshot destination option`,
        }),
        description: (0, $.jsx)(v, {
          id: `settings.appshots.destination.automatic.description`,
          defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat`,
          description: `Description for the Automatic Appshot destination option`,
        }),
      }),
      (e[0] = u))
    : (u = e[0]);
  let d;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = {
        id: `last-chat`,
        label: (0, $.jsx)(v, {
          id: `settings.appshots.destination.lastChat`,
          defaultMessage: `Current chat`,
          description: `Current chat Appshot destination option`,
        }),
        description: (0, $.jsx)(v, {
          id: `settings.appshots.destination.lastChat.description`,
          defaultMessage: `Always use the current chat`,
          description: `Description for the Current chat Appshot destination option`,
        }),
      }),
      (e[1] = d))
    : (d = e[1]);
  let _;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = [
        u,
        d,
        {
          id: `new-chat`,
          label: (0, $.jsx)(v, {
            id: `settings.appshots.destination.newChat`,
            defaultMessage: `New chat`,
            description: `New chat Appshot destination option`,
          }),
          description: (0, $.jsx)(v, {
            id: `settings.appshots.destination.newChat.description`,
            defaultMessage: `Always start a new chat`,
            description: `Description for the New chat Appshot destination option`,
          }),
        },
      ]),
      (e[2] = _))
    : (_ = e[2]);
  let y = _,
    b;
  e[3] === r
    ? (b = e[4])
    : ((b = y.find((e) => e.id === r) ?? y[0]), (e[3] = r), (e[4] = b));
  let x = b;
  if (s || c || !o) return null;
  let S;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(re, { slug: `appshots` })), (e[5] = S))
    : (S = e[5]);
  let C;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(he, {
        description: (0, $.jsx)(v, {
          id: `settings.appshots.hero.description`,
          defaultMessage: `Appshots include visual and text content, including text scrolled offscreen`,
          description: `Description for the Appshots settings explainer`,
        }),
        leadingVisual: (0, $.jsx)(`img`, {
          alt: ``,
          "aria-hidden": !0,
          className: `size-8 object-contain`,
          src: te,
        }),
        title: (0, $.jsx)(v, { ...Z.capture }),
      })),
      (e[6] = C))
    : (C = e[6]);
  let w;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(ve, {})), (e[7] = w))
    : (w = e[7]);
  let E, D;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(v, {
        id: `settings.appshots.destination.label`,
        defaultMessage: `Appshot destination`,
        description: `Label for the Appshot destination setting row`,
      })),
      (D = (0, $.jsx)(v, {
        id: `settings.appshots.destination.description`,
        defaultMessage: `Choose where appshots go when you use the hotkey`,
        description: `Description for the Appshot destination setting`,
      })),
      (e[8] = E),
      (e[9] = D))
    : ((E = e[8]), (D = e[9]));
  let O;
  e[10] === x.label
    ? (O = e[11])
    : ((O = (0, $.jsx)(le, {
        contentClassName: `truncate`,
        children: x.label,
      })),
      (e[10] = x.label),
      (e[11] = O));
  let k;
  e[12] !== r || e[13] !== t
    ? ((k = y.map((e) =>
        (0, $.jsx)(
          a.Item,
          {
            RightIcon: e.id === r ? f : void 0,
            subTextAllowWrap: !0,
            onSelect: () => {
              h(t, T.destination, e.id);
            },
            SubText: (0, $.jsx)(`div`, {
              className: `pt-1 text-sm text-token-text-secondary`,
              children: e.description,
            }),
            children: (0, $.jsx)(`span`, {
              className: `text-sm`,
              children: e.label,
            }),
          },
          e.id,
        ),
      )),
      (e[12] = r),
      (e[13] = t),
      (e[14] = k))
    : (k = e[14]);
  let A;
  e[15] !== k || e[16] !== O
    ? ((A = (0, $.jsx)(U, {
        label: E,
        description: D,
        control: (0, $.jsx)(m, {
          align: `end`,
          contentWidth: `panelWide`,
          triggerButton: O,
          children: k,
        }),
      })),
      (e[15] = k),
      (e[16] = O),
      (e[17] = A))
    : (A = e[17]);
  let j;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(Te, {})), (e[18] = j))
    : (j = e[18]);
  let M;
  e[19] === A
    ? (M = e[20])
    : ((M = (0, $.jsx)(G, {
        className: `self-start`,
        children: (0, $.jsx)(G.Content, {
          children: (0, $.jsxs)(H, { children: [w, A, j] }),
        }),
      })),
      (e[19] = A),
      (e[20] = M));
  let F;
  e[21] === n
    ? (F = e[22])
    : ((F = n.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[21] = n),
      (e[22] = F));
  let I;
  e[23] === F
    ? (I = e[24])
    : ((I = (0, $.jsx)(H, {
        className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
        children: (0, $.jsx)(`video`, {
          "aria-label": F,
          autoPlay: !0,
          className: `aspect-[901/1095] w-full bg-token-bg-secondary object-cover`,
          loop: !0,
          muted: !0,
          playsInline: !0,
          preload: `auto`,
          src: ge,
        }),
      })),
      (e[23] = F),
      (e[24] = I));
  let L;
  return (
    e[25] !== M || e[26] !== I
      ? ((L = (0, $.jsx)(ie, {
          title: S,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-[var(--padding-panel)]`,
            children: [
              C,
              (0, $.jsxs)(`div`, {
                className: `grid gap-[var(--padding-panel)] lg:grid-cols-2`,
                children: [M, I],
              }),
            ],
          }),
        })),
        (e[25] = M),
        (e[26] = I),
        (e[27] = L))
      : (L = e[27]),
    L
  );
}
function Te() {
  let e = (0, Q.c)(9),
    t = p(N),
    n = z(),
    r = g(T.soundEnabled),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(v, { ...Z.soundEffect })), (e[0] = i))
    : (i = e[0]);
  let a;
  e[1] === n
    ? (a = e[2])
    : ((a = n.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = n),
      (e[2] = a));
  let o;
  e[3] === t
    ? (o = e[4])
    : ((o = (e) => {
        h(t, T.soundEnabled, e);
      }),
      (e[3] = t),
      (e[4] = o));
  let s;
  return (
    e[5] !== r || e[6] !== a || e[7] !== o
      ? ((s = (0, $.jsx)(U, {
          label: i,
          control: (0, $.jsx)(fe, { ariaLabel: a, checked: r, onChange: o }),
        })),
        (e[5] = r),
        (e[6] = a),
        (e[7] = o),
        (e[8] = s))
      : (s = e[8]),
    s
  );
}
var Q, $;
e(() => {
  ((Q = o()),
    _(),
    n(),
    A(),
    V(),
    _e(),
    ne(),
    D(),
    me(),
    de(),
    E(),
    B(),
    S(),
    s(),
    ce(),
    pe(),
    W(),
    se(),
    ue(),
    M(),
    Se(),
    Ce(),
    ($ = k()));
})();
export { we as AppshotsSettings };
//# sourceMappingURL=appshots-settings-CWPU9QCN.js.map
