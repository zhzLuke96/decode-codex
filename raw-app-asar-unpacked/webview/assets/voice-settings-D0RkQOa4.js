import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $Y as n,
  AY as r,
  Aw as i,
  C0 as a,
  DK as o,
  Ds as s,
  Fq as c,
  Gr as l,
  I2 as u,
  Kq as d,
  L2 as f,
  Mq as p,
  Nq as m,
  O2 as h,
  Pq as g,
  RK as _,
  S0 as v,
  T2 as y,
  Ts as b,
  Wr as x,
  Yq as S,
  Zq as C,
  _0 as w,
  _Y as T,
  aG as E,
  aJ as D,
  bG as O,
  cY as k,
  cp as A,
  dJ as j,
  fJ as M,
  gK as N,
  hK as P,
  iJ as F,
  js as I,
  jw as L,
  k2 as ee,
  kK as te,
  lp as ne,
  mY as re,
  nJ as R,
  pY as ie,
  rG as ae,
  sJ as z,
  sY as B,
  y2 as oe,
  yG as se,
  yY as V,
  zK as ce,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  dr as le,
  ur as ue,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  c as de,
  s as fe,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  a as pe,
  d as me,
  gt as he,
  ht as ge,
  o as _e,
  p as ve,
  r as ye,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as H,
  p as be,
  v as U,
  y as xe,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as Se,
  rt as Ce,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as we,
  t as W,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { n as Te, t as Ee } from "./hotkey-setter-DzY2Qrcb.js";
function De(e) {
  return e?.supported !== !1;
}
var G,
  K,
  Oe = e(() => {
    (k(),
      M(),
      D(),
      (G = F(B, `global-dictation-history`, { staleTime: j.FIVE_SECONDS })),
      (K = F(B, `global-dictation-hotkey-state`, {
        staleTime: j.FIVE_SECONDS,
      })));
  });
function ke() {
  let e = (0, J.c)(7),
    t = E(`1244621283`),
    n = E(`4100906017`),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(pe, { slug: `voice` })), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = null), (e[1] = i))
    : (i = e[1]);
  let a;
  e[2] !== t || e[3] !== n
    ? ((a = t && n ? (0, X.jsx)(Me, {}) : null),
      (e[2] = t),
      (e[3] = n),
      (e[4] = a))
    : (a = e[4]);
  let o;
  return (
    e[5] === a
      ? (o = e[6])
      : ((o = (0, X.jsx)(me, {
          title: r,
          children: (0, X.jsxs)(A, { electron: !0, children: [i, a] }),
        })),
        (e[5] = a),
        (e[6] = o)),
    o
  );
}
function Ae() {
  let e = (0, J.c)(58),
    t = v(B),
    r = V(),
    i = C(n.microphoneInputDeviceId),
    a =
      typeof navigator < `u` &&
      navigator.mediaDevices?.enumerateDevices != null,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = {
        enabled: a,
        queryFn: je,
        queryKey: We,
        staleTime: j.FIVE_SECONDS,
      }),
      (e[0] = o))
    : (o = e[0]);
  let c = y(o),
    l,
    u,
    d;
  if (e[1] !== c.data || e[2] !== r || e[3] !== i) {
    l = c.data ?? [];
    let t;
    (e[7] === r
      ? (t = e[8])
      : ((t = r.formatMessage({
          id: `settings.general.microphoneInput.systemDefault`,
          defaultMessage: `System default`,
          description: `Default microphone input option label`,
        })),
        (e[7] = r),
        (e[8] = t)),
      (d = t));
    let n;
    e[9] === i
      ? (n = e[10])
      : ((n = (e) => e.deviceId === i), (e[9] = i), (e[10] = n));
    let a = l.findIndex(n),
      o = l[a];
    if (i == null) u = d;
    else if (l.length === 0) {
      let t;
      (e[11] === r
        ? (t = e[12])
        : ((t = r.formatMessage({
            id: `settings.general.microphoneInput.selected`,
            defaultMessage: `Selected microphone`,
            description: `Microphone input label shown before the selected device name has loaded`,
          })),
          (e[11] = r),
          (e[12] = t)),
        (u = t));
    } else if (o == null) {
      let t;
      (e[13] === r
        ? (t = e[14])
        : ((t = r.formatMessage({
            id: `settings.general.microphoneInput.unavailable`,
            defaultMessage: `Unavailable microphone`,
            description: `Selected microphone input label when the device is no longer available`,
          })),
          (e[13] = r),
          (e[14] = t)),
        (u = t));
    } else u = q(r, o, a);
    ((e[1] = c.data),
      (e[2] = r),
      (e[3] = i),
      (e[4] = l),
      (e[5] = u),
      (e[6] = d));
  } else ((l = e[4]), (u = e[5]), (d = e[6]));
  let f;
  e[15] === c
    ? (f = e[16])
    : ((f = async function () {
        (await se.systemPermissions?.requestMicrophoneAccess(),
          await c.refetch());
      }),
      (e[15] = c),
      (e[16] = f));
  let p = f,
    m,
    h;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(T, {
        id: `settings.general.microphoneInput.label`,
        defaultMessage: `Microphone`,
        description: `Label for microphone input selection setting`,
      })),
      (h = a
        ? (0, X.jsx)(T, {
            id: `settings.general.microphoneInput.description`,
            defaultMessage: `Used for dictation`,
            description: `Description for microphone input selection setting`,
          })
        : (0, X.jsx)(T, {
            id: `settings.general.microphoneInput.unsupported`,
            defaultMessage: `Microphone selection is not available on this device`,
            description: `Description shown when microphone selection is unsupported`,
          })),
      (e[17] = m),
      (e[18] = h))
    : ((m = e[17]), (h = e[18]));
  let x;
  e[19] === p
    ? (x = e[20])
    : ((x = (e) => {
        e && p();
      }),
      (e[19] = p),
      (e[20] = x));
  let w;
  e[21] === u
    ? (w = e[22])
    : ((w = (0, X.jsx)(ye, {
        disabled: !a,
        children: (0, X.jsx)(`span`, { className: `truncate`, children: u }),
      })),
      (e[21] = u),
      (e[22] = w));
  let E = i == null ? _ : void 0,
    D;
  e[23] === t
    ? (D = e[24])
    : ((D = () => {
        S(t, n.microphoneInputDeviceId, null);
      }),
      (e[23] = t),
      (e[24] = D));
  let O;
  e[25] !== d || e[26] !== E || e[27] !== D
    ? ((O = (0, X.jsx)(s.Item, { RightIcon: E, onSelect: D, children: d })),
      (e[25] = d),
      (e[26] = E),
      (e[27] = D),
      (e[28] = O))
    : (O = e[28]);
  let k;
  e[29] === l.length
    ? (k = e[30])
    : ((k = l.length > 0 ? (0, X.jsx)(s.Separator, {}) : null),
      (e[29] = l.length),
      (e[30] = k));
  let A;
  if (e[31] !== l || e[32] !== r || e[33] !== t || e[34] !== i) {
    let a;
    (e[36] !== r || e[37] !== t || e[38] !== i
      ? ((a = (e, a) => {
          let o = q(r, e, a);
          return (0, X.jsx)(
            s.Item,
            {
              RightIcon: e.deviceId === i ? _ : void 0,
              onSelect: () => {
                S(t, n.microphoneInputDeviceId, e.deviceId);
              },
              children: o,
            },
            e.deviceId,
          );
        }),
        (e[36] = r),
        (e[37] = t),
        (e[38] = i),
        (e[39] = a))
      : (a = e[39]),
      (A = l.map(a)),
      (e[31] = l),
      (e[32] = r),
      (e[33] = t),
      (e[34] = i),
      (e[35] = A));
  } else A = e[35];
  let M;
  e[40] === c.isFetching
    ? (M = e[41])
    : ((M = c.isFetching
        ? (0, X.jsx)(s.Message, {
            compact: !0,
            children: (0, X.jsxs)(`span`, {
              className: `flex items-center justify-center gap-2`,
              children: [
                (0, X.jsx)(g, { className: `size-3` }),
                (0, X.jsx)(T, {
                  id: `settings.general.microphoneInput.loading`,
                  defaultMessage: `Loading microphones`,
                  description: `Message shown while microphone inputs load`,
                }),
              ],
            }),
          })
        : null),
      (e[40] = c.isFetching),
      (e[41] = M));
  let N;
  e[42] !== c.isError || e[43] !== c.isFetching
    ? ((N =
        !c.isFetching && c.isError
          ? (0, X.jsx)(s.Message, {
              tone: `error`,
              children: (0, X.jsx)(T, {
                id: `settings.general.microphoneInput.loadError`,
                defaultMessage: `Unable to load microphones`,
                description: `Message shown when microphone input devices cannot be loaded`,
              }),
            })
          : null),
      (e[42] = c.isError),
      (e[43] = c.isFetching),
      (e[44] = N))
    : (N = e[44]);
  let P;
  e[45] !== l.length || e[46] !== c.isError || e[47] !== c.isFetching
    ? ((P =
        !c.isFetching && !c.isError && l.length === 0
          ? (0, X.jsx)(s.Message, {
              children: (0, X.jsx)(T, {
                id: `settings.general.microphoneInput.empty`,
                defaultMessage: `No microphones found`,
                description: `Message shown when no microphone inputs are available`,
              }),
            })
          : null),
      (e[45] = l.length),
      (e[46] = c.isError),
      (e[47] = c.isFetching),
      (e[48] = P))
    : (P = e[48]);
  let F;
  return (
    e[49] !== A ||
    e[50] !== M ||
    e[51] !== N ||
    e[52] !== P ||
    e[53] !== x ||
    e[54] !== w ||
    e[55] !== O ||
    e[56] !== k
      ? ((F = (0, X.jsx)(U, {
          label: m,
          description: h,
          control: (0, X.jsxs)(b, {
            contentWidth: `menuWide`,
            align: `end`,
            disabled: !a,
            onOpenChange: x,
            triggerButton: w,
            children: [O, k, A, M, N, P],
          }),
        })),
        (e[49] = A),
        (e[50] = M),
        (e[51] = N),
        (e[52] = P),
        (e[53] = x),
        (e[54] = w),
        (e[55] = O),
        (e[56] = k),
        (e[57] = F))
      : (F = e[57]),
    F
  );
}
function q(e, t, n) {
  return (
    t.label ||
    e.formatMessage(
      {
        id: `settings.general.microphoneInput.fallbackDeviceLabel`,
        defaultMessage: `Microphone {index}`,
        description: `Fallback microphone input label when the browser does not expose the device name`,
      },
      { index: n + 1 },
    )
  );
}
async function je() {
  if (typeof navigator > `u`) return [];
  let e = navigator.mediaDevices;
  return e?.enumerateDevices == null
    ? []
    : (await e.enumerateDevices()).filter(
        (e) =>
          e.kind === `audioinput` &&
          e.deviceId.length > 0 &&
          e.deviceId !== `default`,
      );
}
function Me() {
  let e = (0, J.c)(6),
    { data: t } = a(K),
    n;
  e[0] === t ? (n = e[1]) : ((n = De(t)), (e[0] = t), (e[1] = n));
  let r = n,
    i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(W.Header, {
        title: (0, X.jsx)(T, {
          id: `settings.general.dictation`,
          defaultMessage: `Dictation`,
          description: `Heading for global dictation settings group`,
        }),
      })),
      (e[2] = i))
    : (i = e[2]);
  let o;
  return (
    e[3] !== t || e[4] !== r
      ? ((o = (0, X.jsxs)(W, {
          children: [
            i,
            (0, X.jsx)(W.Content, {
              children: r
                ? (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsxs)(H, {
                        children: [
                          (0, X.jsx)(Ae, {}),
                          (0, X.jsx)(ze, { hotkeyState: t, mode: `hold` }),
                          (0, X.jsx)(ze, { hotkeyState: t, mode: `toggle` }),
                          (0, X.jsx)(Ne, { hotkeyState: t }),
                        ],
                      }),
                      (0, X.jsx)(H, { children: (0, X.jsx)(Pe, {}) }),
                      (0, X.jsx)(H, { children: (0, X.jsx)(Be, {}) }),
                    ],
                  })
                : (0, X.jsx)(H, {
                    children: (0, X.jsx)(ue, {
                      layout: `settings-row`,
                      children: (0, X.jsx)(T, {
                        id: `settings.voice.dictation.unsupported`,
                        defaultMessage: `Dictation is not available on this device`,
                        description: `Empty state shown when desktop dictation is unsupported`,
                      }),
                    }),
                  }),
            }),
          ],
        })),
        (e[3] = t),
        (e[4] = r),
        (e[5] = o))
      : (o = e[5]),
    o
  );
}
function Ne(e) {
  let t = (0, J.c)(14),
    { hotkeyState: n } = e,
    r = V(),
    i = h(),
    a = L(),
    o;
  t[0] !== a || t[1] !== i
    ? ((o = {
        onSuccess: (e) => {
          let t = R(`global-dictation-hotkey-state`);
          (i.setQueryData(t, e), a(t));
        },
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s = z(`global-dictation-set-keep-visible`, o),
    c,
    l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(T, {
        id: `settings.general.globalDictationKeepVisible.label`,
        defaultMessage: `Keep dictation bar visible`,
        description: `Label for the persistent global dictation reminder setting`,
      })),
      (l = (0, X.jsx)(T, {
        id: `settings.general.globalDictationKeepVisible.description`,
        defaultMessage: `Show a small shortcut reminder when dictation isn't recording`,
        description: `Description for the persistent global dictation reminder setting`,
      })),
      (t[3] = c),
      (t[4] = l))
    : ((c = t[3]), (l = t[4]));
  let u = n?.keepVisible === !0,
    d =
      n == null ||
      (n.configuredHotkey == null && n.configuredToggleHotkey == null) ||
      s.isPending,
    f;
  t[5] === s
    ? (f = t[6])
    : ((f = (e) => {
        s.mutate({ keepVisible: e });
      }),
      (t[5] = s),
      (t[6] = f));
  let p;
  t[7] === r
    ? (p = t[8])
    : ((p = r.formatMessage({
        id: `settings.general.globalDictationKeepVisible.ariaLabel`,
        defaultMessage: `Keep the dictation bar visible`,
        description: `Aria label for the persistent global dictation reminder toggle`,
      })),
      (t[7] = r),
      (t[8] = p));
  let m;
  return (
    t[9] !== u || t[10] !== d || t[11] !== f || t[12] !== p
      ? ((m = (0, X.jsx)(U, {
          label: c,
          description: l,
          control: (0, X.jsx)(Ce, {
            checked: u,
            disabled: d,
            onChange: f,
            ariaLabel: p,
          }),
        })),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function Pe() {
  let e = (0, J.c)(17),
    t = v(B),
    r = V(),
    i = C(n.dictationDictionary),
    [a, o] = (0, Y.useState)(null),
    s = (0, Y.useRef)(!1),
    c = a ?? i,
    l = c != null && c.length > 0 ? c : Ue,
    u;
  e[0] === t
    ? (u = e[1])
    : ((u = async function (e) {
        let r = e.map(Re).filter(Le);
        (await S(t, n.dictationDictionary, r), o(null));
      }),
      (e[0] = t),
      (e[1] = u));
  let d = u,
    f,
    m;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(T, {
        id: `settings.general.dictationDictionary.label`,
        defaultMessage: `Dictation dictionary`,
        description: `Label for dictation cleanup dictionary setting`,
      })),
      (m = (0, X.jsx)(T, {
        id: `settings.general.dictationDictionary.description`,
        defaultMessage: `Words or phrases dictation should recognize`,
        description: `Description for dictation cleanup dictionary setting`,
      })),
      (e[2] = f),
      (e[3] = m))
    : ((f = e[2]), (m = e[3]));
  let h;
  e[4] === l
    ? (h = e[5])
    : ((h = () => {
        (o([...l, Z]),
          requestAnimationFrame(() => {
            document
              .querySelector(
                `[data-dictation-dictionary-entry-index="${l.length}"]`,
              )
              ?.focus();
          }));
      }),
      (e[4] = l),
      (e[5] = h));
  let g, _;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(P, { className: `icon-2xs` })),
      (_ = (0, X.jsx)(T, {
        id: `settings.general.dictationDictionary.addEntry`,
        defaultMessage: `Add entry`,
        description: `Button label for adding one dictation dictionary entry`,
      })),
      (e[6] = g),
      (e[7] = _))
    : ((g = e[6]), (_ = e[7]));
  let y;
  e[8] === h
    ? (y = e[9])
    : ((y = (0, X.jsx)(U, {
        label: f,
        description: m,
        control: (0, X.jsxs)(p, {
          type: `button`,
          color: `secondary`,
          size: `toolbar`,
          onMouseDown: Ie,
          onClick: h,
          children: [g, _],
        }),
      })),
      (e[8] = h),
      (e[9] = y));
  let b;
  e[10] !== r || e[11] !== d || e[12] !== l
    ? ((b = l.map((e, t) =>
        (0, X.jsx)(
          U,
          {
            variant: `nested`,
            label: null,
            control: (0, X.jsxs)(`div`, {
              className: `flex w-full items-center gap-2`,
              children: [
                (0, X.jsx)(`input`, {
                  "data-dictation-dictionary-entry-index": t,
                  "aria-label": r.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.entryLabel`,
                      defaultMessage: `Dictionary entry {index}`,
                      description: `Aria label for one dictation dictionary entry`,
                    },
                    { index: t + 1 },
                  ),
                  className: `w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
                  placeholder: Q[t] ?? Q[0] ?? ``,
                  value: e,
                  onChange: (e) => {
                    let n = [...l];
                    ((n[t] = e.currentTarget.value), o(n));
                  },
                  onBlur: () => {
                    if (s.current) {
                      s.current = !1;
                      return;
                    }
                    d(l);
                  },
                  onKeyDown: (e) => {
                    if (e.key !== `Enter`) return;
                    e.preventDefault();
                    let n = [...l.slice(0, t + 1), Z, ...l.slice(t + 1)];
                    ((s.current = !0),
                      o(n),
                      requestAnimationFrame(() => {
                        document
                          .querySelector(
                            `[data-dictation-dictionary-entry-index="${t + 1}"]`,
                          )
                          ?.focus();
                      }));
                  },
                }),
                (0, X.jsx)(p, {
                  type: `button`,
                  color: `ghost`,
                  size: `icon`,
                  "aria-label": r.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.removeEntry`,
                      defaultMessage: `Remove dictionary entry {index}`,
                      description: `Button label for removing one dictation dictionary entry`,
                    },
                    { index: t + 1 },
                  ),
                  disabled: l.length === 1 && e.length === 0,
                  onMouseDown: Fe,
                  onClick: () => {
                    d(l.filter((e, n) => n !== t));
                  },
                  children: (0, X.jsx)(fe, { className: `icon-2xs` }),
                }),
              ],
            }),
          },
          t,
        ),
      )),
      (e[10] = r),
      (e[11] = d),
      (e[12] = l),
      (e[13] = b))
    : (b = e[13]);
  let x;
  return (
    e[14] !== y || e[15] !== b
      ? ((x = (0, X.jsxs)(X.Fragment, { children: [y, b] })),
        (e[14] = y),
        (e[15] = b),
        (e[16] = x))
      : (x = e[16]),
    x
  );
}
function Fe(e) {
  e.preventDefault();
}
function Ie(e) {
  e.preventDefault();
}
function Le(e) {
  return e.length > 0;
}
function Re(e) {
  return e.trim();
}
function ze(e) {
  let t = (0, J.c)(45),
    { hotkeyState: n, mode: r } = e,
    i = r === `toggle`,
    a = V(),
    o = h(),
    s = L(),
    [c, l] = (0, Y.useState)(!1),
    [u, d] = (0, Y.useState)(null),
    f;
  t[0] !== s || t[1] !== o
    ? ((f = {
        onSuccess: (e) => {
          let t = R(`global-dictation-hotkey-state`);
          (o.setQueryData(t, e.state),
            Promise.all([s(t), s(R(`codex-command-keymap-state`))]));
        },
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = f))
    : (f = t[2]);
  let p = z(
      r === `hold`
        ? `global-dictation-set-hotkey`
        : `global-dictation-set-toggle-hotkey`,
      f,
    ),
    m;
  t[3] !== a || t[4] !== i || t[5] !== p
    ? ((m = async function (e) {
        d(null);
        try {
          let t = await p.mutateAsync({ hotkey: e });
          t.success || d(t.error);
        } catch (e) {
          let t = e;
          if (t instanceof Error) {
            d(t.message);
            return;
          }
          if (i) {
            d(
              a.formatMessage({
                id: `settings.general.globalDictationToggleHotkey.errorGeneric`,
                defaultMessage: `Failed to update toggle dictation hotkey`,
                description: `Fallback error shown when toggle dictation hotkey update fails`,
              }),
            );
            return;
          }
          d(
            a.formatMessage({
              id: `settings.general.globalDictationHotkey.errorGeneric`,
              defaultMessage: `Failed to update hold-to-dictate hotkey`,
              description: `Fallback error shown when hold-to-dictate hotkey update fails`,
            }),
          );
        }
      }),
      (t[3] = a),
      (t[4] = i),
      (t[5] = p),
      (t[6] = m))
    : (m = t[6]);
  let g = m,
    _ = i ? (n?.configuredToggleHotkey ?? null) : (n?.configuredHotkey ?? null),
    v;
  t[7] === _
    ? (v = t[8])
    : ((v = _ == null ? null : ge(_)), (t[7] = _), (t[8] = v));
  let y = v,
    b;
  t[9] !== a || t[10] !== i
    ? ((b = i
        ? a.formatMessage($.toggleDictationHotkey)
        : a.formatMessage($.holdToDictateHotkey)),
      (t[9] = a),
      (t[10] = i),
      (t[11] = b))
    : (b = t[11]);
  let x = b,
    S;
  t[12] !== a || t[13] !== i
    ? ((S = i
        ? a.formatMessage({
            id: `settings.general.globalDictationToggleHotkey.captureAriaLabel`,
            defaultMessage: `Toggle dictation hotkey capture`,
            description: `Aria label for toggle dictation hotkey capture input`,
          })
        : a.formatMessage({
            id: `settings.general.globalDictationHotkey.captureAriaLabel`,
            defaultMessage: `Hold-to-dictate hotkey capture`,
            description: `Aria label for hold-to-dictate hotkey capture input`,
          })),
      (t[12] = a),
      (t[13] = i),
      (t[14] = S))
    : (S = t[14]);
  let C = S,
    w;
  t[15] === i
    ? (w = t[16])
    : ((w = i
        ? (0, X.jsx)(T, { ...$.toggleDictationHotkey })
        : (0, X.jsx)(T, { ...$.holdToDictateHotkey })),
      (t[15] = i),
      (t[16] = w));
  let E;
  t[17] === i
    ? (E = t[18])
    : ((E = i
        ? (0, X.jsx)(T, {
            id: `settings.general.globalDictationToggleHotkey.description`,
            defaultMessage: `Press once anywhere on desktop to dictate, then press again to stop`,
            description: `Description for toggle dictation hotkey setting`,
          })
        : (0, X.jsx)(T, {
            id: `settings.general.globalDictationHotkey.description`,
            defaultMessage: `Hold anywhere on desktop to dictate where your cursor is`,
            description: `Description for hold-to-dictate hotkey setting`,
          })),
      (t[17] = i),
      (t[18] = E));
  let D;
  t[19] === u
    ? (D = t[20])
    : ((D = u
        ? (0, X.jsx)(`span`, {
            className: `text-token-error-foreground`,
            children: u,
          })
        : null),
      (t[19] = u),
      (t[20] = D));
  let O;
  t[21] !== E || t[22] !== D
    ? ((O = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [E, D],
      })),
      (t[21] = E),
      (t[22] = D),
      (t[23] = O))
    : (O = t[23]);
  let k = p.isPending,
    A;
  t[24] === a
    ? (A = t[25])
    : ((A = a.formatMessage({
        id: `settings.general.globalDictationHotkey.off`,
        defaultMessage: `Off`,
        description: `Status label when global dictation hotkey is disabled`,
      })),
      (t[24] = a),
      (t[25] = A));
  let j;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        l(!1);
      }),
      (t[26] = j))
    : (j = t[26]);
  let M, N;
  t[27] === g
    ? ((M = t[28]), (N = t[29]))
    : ((M = (e) => {
        (l(!1), g(e));
      }),
      (N = () => {
        g(null);
      }),
      (t[27] = g),
      (t[28] = M),
      (t[29] = N));
  let P;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        (d(null), l(!0));
      }),
      (t[30] = P))
    : (P = t[30]);
  let F;
  t[31] !== y ||
  t[32] !== C ||
  t[33] !== _ ||
  t[34] !== x ||
  t[35] !== c ||
  t[36] !== p.isPending ||
  t[37] !== A ||
  t[38] !== M ||
  t[39] !== N
    ? ((F = (0, X.jsx)(Ee, {
        accelerator: _,
        acceleratorLabel: y,
        allowsBareModifiers: !0,
        captureAriaLabel: C,
        disabled: k,
        emptyLabel: A,
        hotkeyName: x,
        isCapturing: c,
        onCancelCapture: j,
        onCapture: M,
        onClear: N,
        onStartCapture: P,
      })),
      (t[31] = y),
      (t[32] = C),
      (t[33] = _),
      (t[34] = x),
      (t[35] = c),
      (t[36] = p.isPending),
      (t[37] = A),
      (t[38] = M),
      (t[39] = N),
      (t[40] = F))
    : (F = t[40]);
  let I;
  return (
    t[41] !== F || t[42] !== w || t[43] !== O
      ? ((I = (0, X.jsx)(U, { label: w, description: O, control: F })),
        (t[41] = F),
        (t[42] = w),
        (t[43] = O),
        (t[44] = I))
      : (I = t[44]),
    I
  );
}
function Be() {
  let e = (0, J.c)(12),
    t = V(),
    { data: n } = a(G),
    r = z(`global-dictation-copy-history-item`),
    i,
    o;
  if (e[0] !== r || e[1] !== n?.items || e[2] !== t) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let a = n?.items.filter(Ve).slice(0, 4);
      if (a == null || a.length === 0) {
        let t;
        e[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, X.jsx)(`div`, {
              className: `text-sm text-token-text-primary`,
              children: (0, X.jsx)(T, {
                id: `settings.general.globalDictationHistory.emptyTitle`,
                defaultMessage: `Recent dictations`,
                description: `Title for empty global dictation history`,
              }),
            })),
            (e[5] = t))
          : (t = e[5]);
        let n;
        (e[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, X.jsxs)(`div`, {
              className: `flex flex-col gap-1 p-3`,
              children: [
                t,
                (0, X.jsx)(`div`, {
                  className: `max-w-xl text-sm text-token-text-secondary`,
                  children: (0, X.jsx)(T, {
                    id: `settings.general.globalDictationHistory.emptyDescription`,
                    defaultMessage: `Your recent dictations will appear here so you can recover text if it does not land where you expected`,
                    description: `Empty state description for global dictation history`,
                  }),
                }),
              ],
            })),
            (e[6] = n))
          : (n = e[6]),
          (o = n));
        break bb0;
      }
      let s;
      (e[7] !== r || e[8] !== t
        ? ((s = (e) =>
            (0, X.jsx)(
              He,
              {
                copyDisabled: r.isPending,
                item: e,
                timestamp: t.formatDate(e.createdAtMs, {
                  day: `numeric`,
                  hour: `numeric`,
                  minute: `2-digit`,
                  month: `short`,
                }),
                onCopy: () => {
                  r.mutateAsync({ id: e.id });
                },
              },
              e.id,
            )),
          (e[7] = r),
          (e[8] = t),
          (e[9] = s))
        : (s = e[9]),
        (i = a.map(s)));
    }
    ((e[0] = r), (e[1] = n?.items), (e[2] = t), (e[3] = i), (e[4] = o));
  } else ((i = e[3]), (o = e[4]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s;
  return (
    e[10] === i
      ? (s = e[11])
      : ((s = (0, X.jsx)(X.Fragment, { children: i })),
        (e[10] = i),
        (e[11] = s)),
    s
  );
}
function Ve(e) {
  return e.text.length > 0;
}
function He(e) {
  let t = (0, J.c)(21),
    { copyDisabled: n, item: r, onCopy: i, timestamp: a } = e,
    s = V(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `settings.general.globalDictationHistory.copy`,
        defaultMessage: `Copy dictation`,
        description: `Tooltip and aria label for copying a dictation transcript`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u;
  t[2] === r.createdAtMs
    ? (u = t[3])
    : ((u = new Date(r.createdAtMs).toISOString()),
      (t[2] = r.createdAtMs),
      (t[3] = u));
  let d;
  t[4] !== u || t[5] !== a
    ? ((d = (0, X.jsx)(`time`, {
        dateTime: u,
        className: `w-32 shrink-0 text-sm text-token-text-secondary tabular-nums`,
        children: a,
      })),
      (t[4] = u),
      (t[5] = a),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === r.text
    ? (f = t[8])
    : ((f = (0, X.jsx)(`div`, {
        className: `line-clamp-3 min-w-0 flex-1 text-sm whitespace-pre-wrap text-token-text-secondary`,
        children: r.text,
      })),
      (t[7] = r.text),
      (t[8] = f));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(x, { className: `icon-sm` })), (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== n || t[11] !== l || t[12] !== i
    ? ((h = (0, X.jsx)(p, {
        "aria-label": l,
        className: `shrink-0`,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: i,
        children: m,
      })),
      (t[10] = n),
      (t[11] = l),
      (t[12] = i),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== l || t[15] !== h
    ? ((g = (0, X.jsx)(o, { tooltipContent: l, children: h })),
      (t[14] = l),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== d || t[18] !== f || t[19] !== g
      ? ((_ = (0, X.jsxs)(`div`, {
          className: `flex items-center gap-3 p-3`,
          children: [d, f, g],
        })),
        (t[17] = d),
        (t[18] = f),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
var J, Y, X, Z, Ue, Q, We, $;
e(() => {
  ((J = u()),
    oe(),
    w(),
    r(),
    (Y = t(f(), 1)),
    re(),
    m(),
    I(),
    le(),
    c(),
    Se(),
    te(),
    ne(),
    ce(),
    l(),
    N(),
    de(),
    he(),
    i(),
    O(),
    k(),
    Oe(),
    Te(),
    d(),
    ve(),
    we(),
    xe(),
    _e(),
    be(),
    ae(),
    M(),
    D(),
    (X = ee()),
    (Z = ``),
    (Ue = [Z]),
    (Q = [`Jane Doe`, `Acme Widget`, `checkout-form.tsx`, `useCartState`]),
    (We = [`microphone-input-devices`]),
    ($ = ie({
      holdToDictateHotkey: {
        id: `settings.general.globalDictationHotkey.label`,
        defaultMessage: `Hold-to-dictate hotkey`,
        description: `Label for hold-to-dictate hotkey setting`,
      },
      toggleDictationHotkey: {
        id: `settings.general.globalDictationToggleHotkey.label`,
        defaultMessage: `Toggle dictation hotkey`,
        description: `Label for toggle dictation hotkey setting`,
      },
    })));
})();
export { ke as VoiceSettings };
//# sourceMappingURL=voice-settings-D0RkQOa4.js.map
