import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  DK as t,
  I2 as n,
  Mq as r,
  Nq as i,
  k2 as a,
  kK as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s(e) {
  let n = (0, c.c)(11),
    {
      children: i,
      disabled: a,
      label: o,
      onClick: s,
      color: u,
      pressed: d,
      shortcut: f,
    } = e,
    p = a === void 0 ? !1 : a,
    m =
      u === `outline`
        ? d
          ? `outlineActive`
          : `outline`
        : d
          ? `secondary`
          : `ghost`,
    h;
  n[0] !== i ||
  n[1] !== p ||
  n[2] !== o ||
  n[3] !== s ||
  n[4] !== d ||
  n[5] !== m
    ? ((h = (0, l.jsx)(r, {
        size: `toolbar`,
        color: m,
        "aria-label": o,
        "aria-pressed": d,
        disabled: p,
        title: o,
        onClick: s,
        uniform: !0,
        children: i,
      })),
      (n[0] = i),
      (n[1] = p),
      (n[2] = o),
      (n[3] = s),
      (n[4] = d),
      (n[5] = m),
      (n[6] = h))
    : (h = n[6]);
  let g;
  return (
    n[7] !== o || n[8] !== f || n[9] !== h
      ? ((g = (0, l.jsx)(t, {
          tooltipContent: o,
          shortcut: f,
          delayOpen: !0,
          children: h,
        })),
        (n[7] = o),
        (n[8] = f),
        (n[9] = h),
        (n[10] = g))
      : (g = n[10]),
    g
  );
}
var c,
  l,
  u = e(() => {
    ((c = n()), i(), o(), (l = a()));
  });
export { u as n, s as t };
//# sourceMappingURL=thread-panel-toggle-button-DaUj9Z_K.js.map
