import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Am as n,
  Fp as r,
  Ip as i,
  L2 as a,
  Lp as o,
  Rp as s,
  UA as c,
  WA as l,
  df as u,
  ff as d,
  km as f,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Mr as p,
  jr as m,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
function h(e, t = `icon-xs`) {
  let n = (0, g.createElement)(u, { className: t });
  return e == null
    ? n
    : (0, g.createElement)(f, {
        alt: ``,
        className: t,
        fallback: n,
        logoDarkUrl: e.logoDarkUrl,
        logoUrl: e.logoUrl,
      });
}
var g,
  _ = e(() => {
    ((g = t(a(), 1)), n(), d());
  });
function v(
  e,
  t,
  {
    activate: n = !0,
    hostToolCallMetadata: a,
    instanceId: o = crypto.randomUUID(),
    isPreview: l,
    readHostResource: u,
    resolveHostResourceSubscriptionPath: d,
    writeHostResource: f,
    tabId: p = y(t, o),
    target: g = `right`,
    title: _ = t.title,
    toolArguments: v,
  } = {},
) {
  if (c(e.value) == null) return null;
  let b = i(e, p) ?? g;
  return (
    r(b).openTab(e, m, {
      icon: h(t.icon, `icon-xs shrink-0`),
      id: p,
      props: {
        hostToolCallMetadata: a,
        instanceId: o,
        readHostResource: u,
        resolveHostResourceSubscriptionPath: d,
        toolArguments: v,
        view: t,
        writeHostResource: f,
      },
      title: _,
      activate: n,
      isPreview: l,
    }),
    n && s(e, b),
    p
  );
}
function y(e, t) {
  return `mcp-capability:${e.hostId}:${e.server}:${e.tool.name}:${t}`;
}
var b = e(() => {
  (l(), o(), p(), _());
});
export { _ as i, v as n, h as r, b as t };
//# sourceMappingURL=app-initial~app-main~thread-app-shell-chrome~remote-conversation-page~local-conversation-page-C9r9T7TM.js.map
