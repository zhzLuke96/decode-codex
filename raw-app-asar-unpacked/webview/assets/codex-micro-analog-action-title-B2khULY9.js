import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Vy as t,
  zy as n,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { nt as r, tt as i } from "./app-initial~app-main~page-hSvsQcNf.js";
import { n as a, r as o } from "./codex-micro-commands-RTC90N9S.js";
function s(e, t, r) {
  switch (e.type) {
    case `command`: {
      let t = a(e.commandId);
      return t == null ? e.commandId : i(t, r);
    }
    case `skill`: {
      let r = t.find((t) => t.name === e.skillName && t.path === e.skillPath);
      return `$${r == null ? e.skillName : n(r)}`;
    }
  }
}
var c = e(() => {
  (o(), r(), t());
});
export { c as n, s as t };
//# sourceMappingURL=codex-micro-analog-action-title-B2khULY9.js.map
