import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as t,
  Df as n,
  I2 as r,
  _Y as i,
  bf as a,
  gf as o,
  k2 as s,
  kf as c,
  mY as l,
  mf as u,
  yY as d,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { r as f, t as p } from "./appgen-settings-page-D6Wd-Ypf.js";
function m(e) {
  let t = (0, h.c)(14),
    { onClose: r, projectId: a } = e,
    s = d(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, g.jsx)(i, {
        id: `appgenSettings.dialog.title`,
        defaultMessage: `Site settings`,
        description: `Title for the Site settings dialog`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let f = l,
    m;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { "aria-describedby": void 0 }), (t[1] = m))
    : (m = t[1]);
  let _;
  t[2] === s
    ? (_ = t[3])
    : ((_ = s.formatMessage({
        id: `appgenSettings.dialog.close`,
        defaultMessage: `Close Site settings`,
        description: `Accessible label for closing the Site settings dialog`,
      })),
      (t[2] = s),
      (t[3] = _));
  let v;
  t[4] === r
    ? (v = t[5])
    : ((v = (e) => {
        e || r();
      }),
      (t[4] = r),
      (t[5] = v));
  let y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, g.jsxs)(`div`, {
        className: `flex w-full flex-col px-4 pt-3`,
        children: [
          (0, g.jsx)(c, { className: `sr-only`, children: f }),
          (0, g.jsx)(o, { title: f, titleClassName: `truncate pr-8` }),
        ],
      })),
      (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== r || t[8] !== a
    ? ((b = (0, g.jsxs)(u, {
        className: `!px-1 !py-1`,
        size: `full`,
        children: [
          y,
          (0, g.jsx)(p, { projectId: a, showHeader: !1, onDeleted: r }),
        ],
      })),
      (t[7] = r),
      (t[8] = a),
      (t[9] = b))
    : (b = t[9]);
  let x;
  return (
    t[10] !== _ || t[11] !== v || t[12] !== b
      ? ((x = (0, g.jsx)(n, {
          open: !0,
          contentClassName: `h-[720px] max-h-[92vh]`,
          contentProps: m,
          dialogCloseLabel: _,
          size: `xwide`,
          onOpenChange: v,
          children: b,
        })),
        (t[10] = _),
        (t[11] = v),
        (t[12] = b),
        (t[13] = x))
      : (x = t[13]),
    x
  );
}
var h, g;
e(() => {
  ((h = r()), l(), t(), a(), f(), (g = s()));
})();
export { m as AppgenSettingsDialog };
//# sourceMappingURL=appgen-settings-dialog-CLETOgNj.js.map
