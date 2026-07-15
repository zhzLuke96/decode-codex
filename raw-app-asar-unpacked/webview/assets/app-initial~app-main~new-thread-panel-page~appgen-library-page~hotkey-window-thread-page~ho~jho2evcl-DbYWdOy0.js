import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $Y as n,
  AY as r,
  I2 as i,
  Kq as a,
  L2 as o,
  S0 as s,
  Yq as c,
  Zq as l,
  _0 as u,
  cY as d,
  sY as f,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  g as p,
  h as m,
  m as h,
  p as g,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~lpb6mnim-BqYcBFmq.js";
function _() {
  let e = (0, v.c)(7),
    t = s(f),
    r = l(n.followUpQueueMode),
    i = r === `interrupt` ? `steer` : (r ?? `queue`),
    a,
    o;
  (e[0] !== r || e[1] !== t
    ? ((a = () => {
        r === `interrupt` && c(t, n.followUpQueueMode, `steer`);
      }),
      (o = [r, t]),
      (e[0] = r),
      (e[1] = t),
      (e[2] = a),
      (e[3] = o))
    : ((a = e[2]), (o = e[3])),
    (0, y.useEffect)(a, o));
  let u = i === `queue`,
    d;
  return (
    e[4] !== i || e[5] !== u
      ? ((d = { mode: i, isQueueingEnabled: u }),
        (e[4] = i),
        (e[5] = u),
        (e[6] = d))
      : (d = e[6]),
    d
  );
}
var v,
  y,
  b = e(() => {
    ((v = i()), u(), r(), (y = t(o(), 1)), d(), a());
  });
function x(e) {
  switch (e) {
    case `enter`:
      return `CmdOrCtrl+Enter`;
    case `cmdIfMultiline`:
    case `cmdAlways`:
      return `CmdOrCtrl+Shift+Enter`;
  }
}
function S({
  followUpType: e,
  isResponseInProgress: t,
  canStopFromEscape: n,
  isComposerFocused: r,
  hasActiveMentionMenu: i,
}) {
  return (e === `local` || e === `cloud`) && t && n && r && !i;
}
function C({
  isDictating: e,
  restrictedSessionPhase: t,
  followUpType: n,
  isResponseInProgress: r,
  canStopFromEscape: i,
  isComposerFocused: a,
  hasFocusedComposer: o,
  hasActiveMentionMenu: s,
  hasActiveTemplatePicker: c,
  isTerminalTarget: l,
  hasActiveApprovalSurface: u,
  isStopTurnConfirmationVisible: d,
}) {
  return e
    ? `abort-dictation`
    : c
      ? `close-template-picker`
      : S({
            followUpType: n,
            isResponseInProgress: r,
            canStopFromEscape: i,
            isComposerFocused: a,
            hasActiveMentionMenu: s,
          })
        ? d
          ? `stop-turn`
          : `confirm-stop-turn`
        : o || l || u
          ? null
          : `focus-composer`;
}
function w({
  hasPlanMode: e,
  hasDefaultMode: t,
  isPlanMode: n,
  setSelectedMode: r,
}) {
  return e
    ? n
      ? t
        ? (r(`default`), !0)
        : (r(null), !0)
      : (r(`plan`), !0)
    : !1;
}
function T({
  event: e,
  isComposerFocused: t,
  hasActiveMentionMenu: n,
  hasDefaultMode: r,
  isPlanMode: i,
  isSelectionAtStart: a,
  setSelectedMode: o,
  handleEscape: s,
}) {
  return t
    ? e.key === `Backspace` &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey &&
      i &&
      a
      ? (e.preventDefault(), e.stopPropagation(), o(r ? `default` : null), !0)
      : e.key === `Escape` &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.altKey &&
          !e.shiftKey
        ? n
          ? !1
          : (e.preventDefault(), e.stopPropagation(), s(), !0)
        : !1
    : !1;
}
var E = e(() => {});
function D(e) {
  switch (e) {
    case `fast`:
      return m;
    case `ultrafast`:
      return g;
    case null:
      return;
  }
}
var O = e(() => {
  (p(), h());
});
export {
  T as a,
  b as c,
  x as i,
  _ as l,
  O as n,
  E as o,
  C as r,
  w as s,
  D as t,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~jho2evcl-DbYWdOy0.js.map
