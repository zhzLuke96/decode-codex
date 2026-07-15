import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Q0 as t,
  _0 as n,
  cY as r,
  s2 as i,
  sY as a,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  n as o,
  r as s,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~lhgjoyjn-Bcklr3RV.js";
function c(e, t) {
  return t.key === `ENC_CW` && t.act === 2
    ? { ...e, knobPulse: `clockwise` }
    : t.key === `ENC_CC` && t.act === 2
      ? { ...e, knobPulse: `counterclockwise` }
      : t.act === 1 && !e.pressedKeys.includes(t.key)
        ? { ...e, pressedKeys: [...e.pressedKeys, t.key] }
        : t.act === 0 && e.pressedKeys.includes(t.key)
          ? { ...e, pressedKeys: e.pressedKeys.filter((e) => e !== t.key) }
          : e;
}
function l(e, t) {
  let n = d(t) ?? e.selectedAnalogDirection;
  return e.joystick.angle === t.angle &&
    e.joystick.distance === t.distance &&
    e.selectedAnalogDirection === n
    ? e
    : { ...e, joystick: t, selectedAnalogDirection: n };
}
function u(e, t) {
  return e.selectedAnalogDirection === t
    ? e
    : { ...e, selectedAnalogDirection: t };
}
function d(e, t = m) {
  return e.distance < t
    ? null
    : e.angle >= 0.625 && e.angle < 0.875
      ? `up`
      : e.angle >= 0.125 && e.angle < 0.375
        ? `down`
        : e.angle >= 0.375 && e.angle < 0.625
          ? `left`
          : `right`;
}
function f(e) {
  return e.knobPulse == null ? e : { ...e, knobPulse: null };
}
var p,
  m,
  h = e(() => {
    ((p = {
      pressedKeys: [],
      joystick: { angle: 0, distance: 0 },
      selectedAnalogDirection: `up`,
      knobPulse: null,
    }),
      (m = 0.5));
  });
function g(e, t) {
  e.set(D, t);
}
function _(e, t) {
  (e.set(C, t),
    (t.status === `detected` || t.status === `connected`) && s(e),
    t.status !== `connected` && e.set(w, p));
}
function v(e, t) {
  e.set(w, (e) => c(e, t));
}
function y(e, t) {
  e.set(w, (e) => l(e, t));
}
function b(e, t) {
  e.set(w, (e) => u(e, t));
}
function x(e, t) {
  e.set(E, t);
}
function S(e) {
  e.set(w, f);
}
var C,
  w,
  T,
  E,
  D,
  O = e(() => {
    (n(),
      r(),
      o(),
      h(),
      (C = i(a, { status: `not-detected`, error: null, battery: null })),
      (w = i(a, p)),
      (T = t(a, ({ get: e }) => e(w).joystick)),
      (E = i(a, !1)),
      (D = i(a, `idle`)));
  });
export {
  C as a,
  D as c,
  x as d,
  _ as f,
  h,
  E as i,
  O as l,
  d as m,
  y as n,
  T as o,
  g as p,
  S as r,
  w as s,
  v as t,
  b as u,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ksbzhge1-nyqcMWLP.js.map
