import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Bx as t,
  C0 as n,
  I2 as r,
  JA as i,
  Wx as a,
  _0 as o,
  _Y as s,
  k2 as c,
  mY as l,
  uj as u,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Mr as d,
  jr as f,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  mc as p,
  pc as m,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
function h() {
  let e = (0, _.c)(7),
    { server: t, toolName: r } = u(),
    i = n(a),
    o;
  e[0] !== t || e[1] !== r || e[2] !== i
    ? ((o =
        t == null || r == null
          ? null
          : (i.find((e) => e.server === t && e.tool.name === r) ?? null)),
      (e[0] = t),
      (e[1] = r),
      (e[2] = i),
      (e[3] = o))
    : (o = e[3]);
  let s = o;
  if (s == null) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, v.jsx)(g, {})), (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let c;
  return (
    e[5] === s
      ? (c = e[6])
      : ((c = (0, v.jsx)(f, { view: s })), (e[5] = s), (e[6] = c)),
    c
  );
}
function g() {
  let e = (0, _.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, v.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center`,
          children: (0, v.jsx)(m, {
            title: (0, v.jsx)(s, {
              id: `openaiMcpCapabilities.view.notFound`,
              defaultMessage: `MCP app view not found`,
              description: `Title shown when an MCP app view route does not match an available server tool`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var _, v;
e(() => {
  ((_ = r()), o(), l(), i(), p(), t(), d(), (v = c()));
})();
export { h as McpCapabilityViewPage };
//# sourceMappingURL=mcp-capability-view-page-DMUOI3-Y.js.map
