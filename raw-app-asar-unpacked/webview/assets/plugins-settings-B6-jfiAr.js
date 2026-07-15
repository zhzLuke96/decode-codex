import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  BR as t,
  I2 as n,
  PB as r,
  _Y as i,
  k2 as a,
  mY as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  ct as s,
  ot as c,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  a as l,
  d as u,
  o as d,
  p as f,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import { n as p, t as m } from "./plugins-page-D3oou8gl.js";
function h(e) {
  let n = (0, g.c)(7),
    { manageOnly: r } = e === void 0 ? {} : e,
    a = r === void 0 ? !1 : r,
    { selectedHostId: o } = s(),
    c = a ? `mcps` : `plugins`,
    d;
  n[0] !== o || n[1] !== c
    ? ((d = (0, _.jsx)(m, {
        directoryEntrypoint: t.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
        headerPlacement: `none`,
        hostId: o,
        initialManageTab: c,
        manageOnly: !0,
      })),
      (n[0] = o),
      (n[1] = c),
      (n[2] = d))
    : (d = n[2]);
  let f = d;
  if (a) return f;
  let p, h;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, _.jsx)(l, { slug: `plugins-settings` })),
      (h = (0, _.jsx)(i, {
        id: `settings.section.plugins-settings.subtitle`,
        defaultMessage: `Manage plugins, skills, and MCPs`,
        description: `Subtitle for the combined plugins settings section`,
      })),
      (n[3] = p),
      (n[4] = h))
    : ((p = n[3]), (h = n[4]));
  let v;
  return (
    n[5] === f
      ? (v = n[6])
      : ((v = (0, _.jsx)(u, { title: p, subtitle: h, children: f })),
        (n[5] = f),
        (n[6] = v)),
    v
  );
}
var g,
  _,
  v = e(() => {
    ((g = n()), r(), o(), p(), f(), c(), d(), (_ = a()));
  });
export { v as n, h as t };
//# sourceMappingURL=plugins-settings-B6-jfiAr.js.map
