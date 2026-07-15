import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  _V as t,
  bV as n,
  eW as r,
  lV as i,
  tW as a,
  uV as o,
  vV as s,
  yV as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function l(e) {
  return ((e ?? m).trim().replace(g, ``).trim() || m).slice(0, h);
}
function u(e) {
  return e.replace(_, v);
}
function d(e) {
  return e
    .replace(/\u00a0/g, ` `)
    .replaceAll(
      v,
      `
`,
    )
    .replace(b, ``)
    .replace(y, ``)
    .replace(/\r/g, ``)
    .replace(
      /[ \t]+\n/g,
      `
`,
    )
    .replace(
      /\n[ \t]+/g,
      `
`,
    )
    .trim();
}
function f(e) {
  let t = x.parse(u(e)).children.find((e) => e.type === `table`);
  if (!t)
    throw Error(`Unable to build workbook: no markdown table rows found.`);
  let n = [];
  for (let e of t.children) {
    let t = e.children.map((e) => d(a(e)));
    t.every((e) => e.length === 0) || n.push(t);
  }
  return n;
}
function p(e) {
  return f(e);
}
var m, h, g, _, v, y, b, x;
e(() => {
  (c(),
    t(),
    i(),
    r(),
    (m = `Markdown table`),
    (h = 31),
    (g = /\\|\/|\?|\*|\[|\]|:/g),
    (_ = /<br\s*\/?>/gi),
    (v = `BPS_TABLE_BR_PLACEHOLDER`),
    (y = /:{1,3}contentReference\[[^\]]+\](?:\{[^}]*\})?/g),
    (b = /\u200b/g),
    (x = n().use(s).use(o)));
})();
export { p as buildTableValuesFromMarkdown, l as sanitizeSheetName };
//# sourceMappingURL=workbook-from-markdown-9EfMg5SA.js.map
