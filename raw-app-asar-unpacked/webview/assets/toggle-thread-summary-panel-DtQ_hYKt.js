import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $g as t,
  I2 as n,
  c_ as r,
  dl as i,
  gl as a,
  hl as o,
  k2 as s,
  pl as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { a as l, i as u } from "./use-thread-summary-panel-OrzkfYb8.js";
function d(e) {
  let t = (0, m.c)(10),
    { children: n, isOpen: r, onOpenChange: a, trigger: s } = e,
    l;
  t[0] === s
    ? (l = t[1])
    : ((l = (0, h.jsx)(o, { asChild: !0, children: s })),
      (t[0] = s),
      (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { maxHeight: `none`, maxWidth: `none` }), (t[2] = u))
    : (u = t[2]);
  let d = r ? n : null,
    g;
  t[3] === d
    ? (g = t[4])
    : ((g = (0, h.jsx)(c, {
        align: `end`,
        side: `bottom`,
        sideOffset: 8,
        className: `!w-auto !overflow-visible !rounded-3xl !bg-transparent !p-0 !shadow-none !ring-0 !backdrop-blur-none`,
        onFocusOutside: p,
        onPointerDownOutside: f,
        style: u,
        children: d,
      })),
      (t[3] = d),
      (t[4] = g));
  let _;
  return (
    t[5] !== r || t[6] !== a || t[7] !== l || t[8] !== g
      ? ((_ = (0, h.jsxs)(i, { open: r, onOpenChange: a, children: [l, g] })),
        (t[5] = r),
        (t[6] = a),
        (t[7] = l),
        (t[8] = g),
        (t[9] = _))
      : (_ = t[9]),
    _
  );
}
function f(e) {
  e.target instanceof Element &&
    e.target.closest(`[data-app-shell-tab-strip-controller="right"]`) != null &&
    e.preventDefault();
}
function p(e) {
  e.target instanceof Element &&
    e.target.matches(
      `[role="tabpanel"][data-app-shell-tab-panel-controller="right"]`,
    ) &&
    e.preventDefault();
}
var m,
  h,
  g = e(() => {
    ((m = n()), a(), (h = s()));
  });
function _(e) {
  let t = e.get(l);
  if (t.displayMode !== `overlay`) {
    e.set(r, (e) => !e);
    return;
  }
  e.set(l, { ...t, isPopoverOpen: !t.isPopoverOpen });
}
var v = e(() => {
  (t(), u());
});
export { g as i, _ as n, d as r, v as t };
//# sourceMappingURL=toggle-thread-summary-panel-DtQ_hYKt.js.map
