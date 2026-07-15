import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as n,
  Al as r,
  Aw as i,
  C0 as a,
  DK as o,
  Df as s,
  Dl as c,
  El as l,
  I2 as u,
  L2 as d,
  Mg as f,
  Mq as p,
  Nq as m,
  O2 as h,
  Of as g,
  Ol as _,
  _0 as v,
  _Y as y,
  _f as b,
  aG as x,
  aJ as S,
  bf as C,
  gf as w,
  hf as T,
  jg as E,
  jw as D,
  k2 as O,
  kK as k,
  kf as A,
  mY as j,
  mf as ee,
  nJ as M,
  rG as N,
  sJ as te,
  y2 as P,
  yY as ne,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  H as F,
  U as I,
  V as re,
  W as ie,
  et as L,
  nt as R,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  F as z,
  P as ae,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  At as oe,
  Et as B,
  Pt as V,
  Tt as se,
  a as ce,
  bt as le,
  d as ue,
  dt as de,
  gt as fe,
  ht as H,
  jt as pe,
  l as me,
  o as he,
  p as ge,
  pt as _e,
  st as ve,
  u as ye,
  vt as U,
  wt as be,
  yt as xe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as Se,
  p as Ce,
  v as W,
  y as we,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as Te,
  r as Ee,
} from "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~kzfwp7ln-BctphohA.js";
import {
  a as De,
  o as Oe,
} from "./app-initial~app-main~chatgpt-conversation-page~keyboard-shortcuts-settings~remote-conversat~e5c4ajsk-Df0kRLgc.js";
import {
  n as ke,
  t as Ae,
} from "./app-initial~app-main~codex-micro-settings~keyboard-shortcuts-settings-BXdvtxFS.js";
import {
  r as je,
  t as G,
} from "./app-initial~app-main~hotkey-window-thread-page~debug-window-page~appearance-settings~keyboa~ls1o61sa-BTfpPNqa.js";
import {
  i as Me,
  n as Ne,
  r as Pe,
  t as Fe,
} from "./hotkey-setter-DzY2Qrcb.js";
function Ie() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Le, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Le() {
  let e = ne(),
    { platform: t } = f(),
    n = h(),
    i = a(r),
    s = D(),
    u = x(`1244621283`),
    d = x(De),
    m = x(`1372061905`),
    g = x(`3264431617`),
    _ = x(`4100906017`),
    v = l(i, `switchToMode1`) > 0,
    [b, S] = (0, Z.useState)(``),
    [C, w] = (0, Z.useState)(!1),
    [T, E] = (0, Z.useState)(null),
    [O, k] = (0, Z.useState)({}),
    [A, j] = (0, Z.useState)(!1),
    [ee, N] = (0, Z.useState)(null),
    { data: P } = a(ve),
    F = te(`set-codex-command-keybinding`, {
      onSuccess: (e, { commandId: t }) => {
        let r = M(`codex-command-keymap-state`);
        n.setQueryData(r, e);
        let i = [r];
        (t === `hotkeyWindow` && i.push(G),
          (t === `globalDictationHold` || t === `globalDictationToggle`) &&
            i.push(M(`global-dictation-hotkey-state`)),
          Promise.all(i.map((e) => s(e))));
      },
    }),
    I = te(`reset-codex-command-keybindings`, {
      onSuccess: (e) => {
        let t = M(`codex-command-keymap-state`);
        (n.setQueryData(t, e),
          Promise.all(
            [t, G, M(`global-dictation-hotkey-state`)].map((e) => s(e)),
          ));
      },
    }),
    R = $.filter((e) =>
      ie(e.id, {
        findShortcutsEnabled: d,
        modeSwitchAvailable: v,
        isGlobalDictationEnabled: u,
        isHotkeyWindowEnabled: m,
        isProcessManagerEnabled: g,
        isRestrictedCommandEnabled: !1,
        isVoiceInputEnabled: _,
      }),
    )
      .map((t) => ({ command: t, title: L(t, e, c(i, t.id)).title }))
      .sort((e, t) => re(e.command, t.command)),
    z = b.trim(),
    B =
      z.length === 0
        ? R
        : R.filter(({ command: n, title: r }) => {
            let a = L(n, e, c(i, n.id)).description;
            return C
              ? q(n.id, P, t, d).some(({ label: e }) => K(e, z))
              : [n.id, r, a].some((e) => Ee(e, z) > 0);
          }),
    V =
      P == null
        ? null
        : (0, Q.jsx)(Ae, {
            autoFocus: C,
            isSearchingByKeystrokes: C,
            variant: `page`,
            trailingContent: (0, Q.jsx)(o, {
              tooltipContent: (0, Q.jsx)(y, {
                id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                defaultMessage: `Search by keystrokes`,
                description: `Tooltip label for the keyboard shortcut search mode button`,
              }),
              children: (0, Q.jsx)(p, {
                "aria-label": e.formatMessage({
                  id: `settings.keyboardShortcuts.searchByKeystrokes.ariaLabel`,
                  defaultMessage: `Search by keystrokes`,
                  description: `Accessible label for the keyboard shortcut search mode button`,
                }),
                "aria-pressed": C,
                color: C ? `secondary` : `ghost`,
                size: `toolbar`,
                uniform: !0,
                onMouseDown: (e) => {
                  e.preventDefault();
                },
                onClick: () => {
                  (S(``), w((e) => !e));
                },
                children: (0, Q.jsx)(ae, { className: `icon-sm` }),
              }),
            }),
            value: b,
            onKeyDown: C
              ? (e) => {
                  if (e.repeat) return;
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    e.key === `Escape`)
                  ) {
                    (S(``), w(!1));
                    return;
                  }
                  let n = Pe(e.nativeEvent);
                  if (n != null) {
                    let e = H(n, t === `macOS`, t === `linux`),
                      r = b.length === 0 ? e : `${b} ${e}`;
                    S(
                      b.length > 0 &&
                        R.some(({ command: e }) =>
                          q(e.id, P, t, d).some(({ label: e }) => K(e, r)),
                        )
                        ? r
                        : e,
                    );
                  }
                }
              : void 0,
            onValueChange: S,
          });
  return (0, Q.jsxs)(ue, {
    action:
      P != null && P.bindings.length > 0
        ? (0, Q.jsx)(p, {
            color: `secondary`,
            disabled: I.isPending,
            size: `toolbar`,
            onClick: () => {
              (N(null), j(!0));
            },
            children: (0, Q.jsx)(y, {
              id: `settings.keyboardShortcuts.resetAll`,
              defaultMessage: `Reset all to defaults`,
              description: `Button label to reset all customized keyboard shortcuts to their defaults`,
            }),
          })
        : null,
    stickyControls: V,
    title: (0, Q.jsx)(ce, { slug: `keyboard-shortcuts` }),
    children: [
      P == null
        ? (0, Q.jsx)(me, {
            children: (0, Q.jsx)(y, {
              id: `settings.keyboardShortcuts.loading`,
              defaultMessage: `Loading shortcuts…`,
              description: `Loading label while keyboard shortcuts are being fetched`,
            }),
          })
        : (0, Q.jsx)(Se, {
            children:
              B.length === 0
                ? (0, Q.jsx)(W, {
                    control: null,
                    label: (0, Q.jsx)(`span`, {
                      className: `font-normal text-token-text-secondary`,
                      children: (0, Q.jsx)(y, {
                        id: `settings.keyboardShortcuts.noMatches`,
                        defaultMessage: `No matching shortcuts`,
                        description: `Empty state shown when the keyboard shortcuts search has no matches`,
                      }),
                    }),
                  })
                : B.map(({ command: n, title: r }) => {
                    let a = L(n, e, c(i, n.id)).description,
                      o = O[n.id],
                      s = q(n.id, P, t, d),
                      l =
                        P.bindings.some((e) => e.command === n.id) &&
                        (!d || n.id !== `searchChats` || s.length > 0),
                      u = He({
                        commandId: n.id,
                        hasCustomBinding: l,
                        platform: t,
                        shortcutEntries: s,
                      }),
                      f = T?.commandId === n.id && T.mode === `append`,
                      p = s.length === 0 ? [null] : s,
                      m = f && s.length > 0 ? [...s, null] : p,
                      h = `keyboard-shortcut-${n.id}-label`;
                    return (0, Q.jsx)(
                      W,
                      {
                        className: `max-sm:flex-col max-sm:items-stretch max-sm:gap-2`,
                        control: (0, Q.jsx)(`div`, {
                          "aria-labelledby": h,
                          className: `flex w-96 max-w-full flex-col max-sm:w-full`,
                          role: `group`,
                          children: m.map((a, o) => {
                            let c =
                                T?.commandId === n.id &&
                                (T.mode === `append`
                                  ? a == null && o === s.length
                                  : T.accelerator === (a?.accelerator ?? null)),
                              f = `${h}-binding-${o}`;
                            return (0, Q.jsx)(
                              Fe,
                              {
                                accelerator: a?.accelerator ?? null,
                                acceleratorLabel: a?.label ?? null,
                                allowsBareModifiers: se(n),
                                allowsSequences: n.kind === `webview`,
                                ariaLabelledBy: f,
                                canAppend: !oe(n),
                                captureAriaLabel: e.formatMessage(
                                  {
                                    id: `settings.keyboardShortcuts.captureAriaLabel`,
                                    defaultMessage: `Shortcut capture for {commandTitle}`,
                                    description: `Aria label for the shortcut capture input for a command`,
                                  },
                                  { commandTitle: r },
                                ),
                                conflict: c ? T.conflictingCommandTitle : null,
                                disabled: F.isPending,
                                hotkeyName: r,
                                isCapturing: c,
                                valueLabelId: f,
                                onCancelCapture: () => {
                                  E(null);
                                },
                                onCapture: (r) => {
                                  if (
                                    a != null &&
                                    Be(a.accelerator, r, t === `macOS`)
                                  ) {
                                    E(null);
                                    return;
                                  }
                                  let o = ze({
                                    accelerator: r,
                                    commandId: n.id,
                                    findShortcutsEnabled: d,
                                    intl: e,
                                    keymapState: P,
                                    platform: t,
                                    registeredCommands: i,
                                  });
                                  if (o != null) {
                                    E((e) =>
                                      e?.commandId === n.id
                                        ? { ...e, conflictingCommandTitle: o }
                                        : e,
                                    );
                                    return;
                                  }
                                  let s;
                                  ((s =
                                    T?.mode === `append`
                                      ? { type: `append`, accelerator: r }
                                      : a == null
                                        ? { type: `set`, accelerator: r }
                                        : {
                                            type: `replace`,
                                            previousAccelerator: a.accelerator,
                                            accelerator: r,
                                          }),
                                    Y({
                                      commandId: n.id,
                                      intl: e,
                                      setCommandKeybinding: F,
                                      setErrorByCommandId: k,
                                      update: s,
                                    }).finally(() => {
                                      E((e) => (e === T ? null : e));
                                    }));
                                },
                                onClear: () => {
                                  a != null &&
                                    Y({
                                      commandId: n.id,
                                      intl: e,
                                      setCommandKeybinding: F,
                                      setErrorByCommandId: k,
                                      update: {
                                        type: `remove`,
                                        accelerator: a.accelerator,
                                      },
                                    });
                                },
                                onReset:
                                  o === u && l
                                    ? () => {
                                        Y({
                                          commandId: n.id,
                                          intl: e,
                                          setCommandKeybinding: F,
                                          setErrorByCommandId: k,
                                          update: { type: `reset` },
                                        });
                                      }
                                    : void 0,
                                onStartCapture: (e) => {
                                  (k((e) => ({ ...e, [n.id]: void 0 })),
                                    E({
                                      commandId: n.id,
                                      accelerator:
                                        e === `append`
                                          ? null
                                          : (a?.accelerator ?? null),
                                      conflictingCommandTitle: null,
                                      mode: e,
                                    }));
                                },
                              },
                              `${n.id}-${a?.accelerator ?? `unassigned`}`,
                            );
                          }),
                        }),
                        description:
                          a !== `` || o != null
                            ? (0, Q.jsxs)(Q.Fragment, {
                                children: [
                                  a,
                                  o == null
                                    ? null
                                    : (0, Q.jsx)(`span`, {
                                        className: `block text-xs text-token-error-foreground`,
                                        children: o,
                                      }),
                                ],
                              })
                            : void 0,
                        label: (0, Q.jsx)(`span`, {
                          id: h,
                          className: `block truncate`,
                          children: r,
                        }),
                      },
                      n.id,
                    );
                  }),
          }),
      (0, Q.jsx)(Re, {
        error: ee,
        isPending: I.isPending,
        open: A,
        onOpenChange: (e) => {
          (j(e), e || N(null));
        },
        onConfirm: async () => {
          N(null);
          try {
            (await I.mutateAsync(void 0), j(!1));
          } catch (t) {
            N(
              t instanceof Error
                ? t.message
                : e.formatMessage({
                    id: `settings.keyboardShortcuts.resetAllError`,
                    defaultMessage: `Failed to reset keyboard shortcuts`,
                    description: `Fallback error shown when resetting all customized keyboard shortcuts fails`,
                  }),
            );
          }
        },
      }),
    ],
  });
}
function Re(e) {
  let t = (0, X.c)(28),
    { error: n, isPending: r, onConfirm: i, onOpenChange: a, open: o } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(y, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l = c,
    u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(y, {
        id: `settings.keyboardShortcuts.resetAllConfirm.description`,
        defaultMessage: `This will discard all custom shortcuts and restore the defaults`,
        description: `Warning shown before resetting all customized keyboard shortcuts`,
      })),
      (t[1] = u))
    : (u = t[1]);
  let d = u,
    f;
  t[2] === i
    ? (f = t[3])
    : ((f = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = f));
  let m, h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(A, { className: `sr-only`, children: l })),
      (h = (0, Q.jsx)(g, { className: `sr-only`, children: d })),
      (t[4] = m),
      (t[5] = h))
    : ((m = t[4]), (h = t[5]));
  let _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(b, {
        children: (0, Q.jsx)(w, { title: l, subtitle: d }),
      })),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === n
    ? (v = t[8])
    : ((v =
        n == null
          ? null
          : (0, Q.jsx)(b, {
              className: `text-token-error-foreground`,
              children: n,
            })),
      (t[7] = n),
      (t[8] = v));
  let x;
  t[9] === a
    ? (x = t[10])
    : ((x = () => {
        a(!1);
      }),
      (t[9] = a),
      (t[10] = x));
  let S;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(y, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (t[11] = S))
    : (S = t[11]);
  let C;
  t[12] === x
    ? (C = t[13])
    : ((C = (0, Q.jsx)(p, { color: `secondary`, onClick: x, children: S })),
      (t[12] = x),
      (t[13] = C));
  let E;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(y, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === r
    ? (D = t[16])
    : ((D = (0, Q.jsx)(p, {
        color: `danger`,
        loading: r,
        type: `submit`,
        children: E,
      })),
      (t[15] = r),
      (t[16] = D));
  let O;
  t[17] !== C || t[18] !== D
    ? ((O = (0, Q.jsx)(b, { children: (0, Q.jsxs)(T, { children: [C, D] }) })),
      (t[17] = C),
      (t[18] = D),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== O || t[21] !== f || t[22] !== v
    ? ((k = (0, Q.jsxs)(ee, {
        as: `form`,
        onSubmit: f,
        children: [m, h, _, v, O],
      })),
      (t[20] = O),
      (t[21] = f),
      (t[22] = v),
      (t[23] = k))
    : (k = t[23]);
  let j;
  return (
    t[24] !== a || t[25] !== o || t[26] !== k
      ? ((j = (0, Q.jsx)(s, {
          open: o,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: k,
        })),
        (t[24] = a),
        (t[25] = o),
        (t[26] = k),
        (t[27] = j))
      : (j = t[27]),
    j
  );
}
function K(e, t) {
  return e === t || e.startsWith(`${t} `);
}
function ze({
  accelerator: e,
  commandId: t,
  findShortcutsEnabled: n,
  intl: r,
  keymapState: i,
  platform: a,
  registeredCommands: o,
}) {
  if (n) {
    let t = J(e, a);
    switch (t) {
      case `find`:
      case `findNext`:
      case `findPrevious`:
        return r.formatMessage(
          {
            id: `settings.keyboardShortcuts.fixedFindCommand`,
            defaultMessage: `{command, select, find {Find} findNext {Find Next} other {Find Previous}}`,
            description: `Fixed Find command title shown for a shortcut conflict`,
          },
          { command: t },
        );
      case null:
        break;
    }
  }
  for (let s of $)
    if (
      s.id !== t &&
      !be(s.id, t) &&
      q(s.id, i, a, n).some((t) => Ve(t.accelerator, e, a === `macOS`))
    )
      return L(s, r, c(o, s.id)).title;
  return null;
}
function q(e, t, n, r) {
  let i = de(e, t, n);
  return !r || e !== `searchChats`
    ? i
    : t?.bindings.some((t) => t.command === e)
      ? i.filter((e) => J(e.accelerator, n) == null)
      : [];
}
function J(e, t) {
  let n = t === `macOS` ? `Command` : `Ctrl`;
  return (
    [
      { accelerator: `${n}+F`, id: `find` },
      { accelerator: `${n}+G`, id: `findNext` },
      {
        accelerator: t === `macOS` ? `Command+Shift+G` : `Shift+F3`,
        id: `findPrevious`,
      },
    ].find((n) => Ve(n.accelerator, e, t === `macOS`))?.id ?? null
  );
}
function Be(e, t, n) {
  return H(e, n) === H(t, n);
}
function Ve(e, t, n) {
  let r = U(e).map((e) => H(e, n)),
    i = U(t).map((e) => H(e, n)),
    a = Math.min(r.length, i.length);
  return (
    a > 0 &&
    (r.length === a || i.length === a) &&
    r.slice(0, a).every((e, t) => e === i[t])
  );
}
function He({
  commandId: e,
  hasCustomBinding: t,
  platform: n,
  shortcutEntries: r,
}) {
  if (!t) return null;
  let i = B({ commandId: e, isMacOS: n === `macOS` }),
    a = r.findIndex((e, t) => e.accelerator !== i[t]);
  return a === -1 ? 0 : a;
}
async function Y({
  commandId: e,
  intl: t,
  setCommandKeybinding: n,
  setErrorByCommandId: r,
  update: i,
}) {
  r((t) => ({ ...t, [e]: void 0 }));
  try {
    await n.mutateAsync({ commandId: e, update: i });
  } catch (n) {
    r((r) => ({
      ...r,
      [e]:
        n instanceof Error
          ? n.message
          : t.formatMessage({
              id: `settings.keyboardShortcuts.updateError`,
              defaultMessage: `Failed to update shortcut`,
              description: `Fallback error shown when updating an action shortcut fails`,
            }),
    }));
  }
}
var X, Z, Q, $;
e(() => {
  ((X = u()),
    P(),
    le(),
    v(),
    (Z = t(d(), 1)),
    j(),
    _e(),
    _(),
    R(),
    m(),
    n(),
    C(),
    k(),
    Te(),
    Oe(),
    E(),
    je(),
    z(),
    fe(),
    I(),
    F(),
    ke(),
    xe(),
    i(),
    Ne(),
    ge(),
    Me(),
    ye(),
    we(),
    he(),
    Ce(),
    N(),
    S(),
    (Q = O()),
    ($ = V.filter(pe)));
})();
export { Ie as KeyboardShortcutsSettings };
//# sourceMappingURL=keyboard-shortcuts-settings-BgXe7zcB.js.map
