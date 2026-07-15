import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  GJ as t,
  I2 as n,
  KJ as r,
  WJ as i,
  k2 as a,
  qJ as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s(e) {
  let t = (0, d.c)(8),
    { as: n, children: i, className: a } = e,
    o = n === void 0 ? `div` : n,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = r(
        `flex max-w-full flex-col overflow-hidden rounded-lg bg-token-dropdown-background/50 text-token-foreground [--thread-resource-card-row-padding-x:0.75rem] electron:elevation-stroke extension:border extension:border-token-border extension:bg-token-input-background/50 extension:shadow-sm`,
        a,
      )),
      (t[0] = a),
      (t[1] = s));
  let c = s;
  if (o === `span`) {
    let e;
    return (
      t[2] !== i || t[3] !== c
        ? ((e = (0, f.jsx)(`span`, { className: c, children: i })),
          (t[2] = i),
          (t[3] = c),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let l;
  return (
    t[5] !== i || t[6] !== c
      ? ((l = (0, f.jsx)(`div`, { className: c, children: i })),
        (t[5] = i),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function c(e) {
  let t = (0, d.c)(16),
    {
      className: n,
      icon: i,
      padding: a,
      reserveTrailingSpace: o,
      subtitle: s,
      title: c,
      titleTooltip: l,
      trailing: u,
    } = e,
    h = a === void 0 ? `default` : a,
    g = o !== void 0 && o ? m[h] : p[h],
    _;
  t[0] !== n || t[1] !== g
    ? ((_ = r(`flex min-w-0 items-center gap-2.5 text-left`, g, n)),
      (t[0] = n),
      (t[1] = g),
      (t[2] = _))
    : (_ = t[2]);
  let v;
  t[3] !== c || t[4] !== l
    ? ((v = (0, f.jsx)(`span`, {
        className: `text-size-chat truncate font-medium text-token-foreground`,
        title: l,
        children: c,
      })),
      (t[3] = c),
      (t[4] = l),
      (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] === s
    ? (y = t[7])
    : ((y =
        s == null
          ? null
          : (0, f.jsx)(`span`, {
              className: `text-size-chat-sm truncate text-token-text-secondary`,
              children: s,
            })),
      (t[6] = s),
      (t[7] = y));
  let b;
  t[8] !== v || t[9] !== y
    ? ((b = (0, f.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 flex-col`,
        children: [v, y],
      })),
      (t[8] = v),
      (t[9] = y),
      (t[10] = b))
    : (b = t[10]);
  let x;
  return (
    t[11] !== i || t[12] !== _ || t[13] !== b || t[14] !== u
      ? ((x = (0, f.jsxs)(`span`, { className: _, children: [i, b, u] })),
        (t[11] = i),
        (t[12] = _),
        (t[13] = b),
        (t[14] = u),
        (t[15] = x))
      : (x = t[15]),
    x
  );
}
function l(e) {
  let t = (0, d.c)(5),
    { label: n, showChevron: r } = e,
    a = r === void 0 ? !1 : r,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a ? (0, f.jsx)(i, { className: `icon-2xs opacity-50` }) : null),
      (t[0] = a),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== o
      ? ((s = (0, f.jsxs)(`span`, {
          className: `text-token-button-tertiary-foreground flex h-token-button-composer shrink-0 items-center gap-1 overflow-hidden rounded-lg border border-token-border bg-transparent px-2 py-0 text-base leading-[18px] whitespace-nowrap`,
          children: [n, o],
        })),
        (t[2] = n),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function u(e) {
  let t = (0, d.c)(9),
    { children: n, isExpanded: a, onClick: o } = e,
    s = a && `rotate-180`,
    c;
  t[0] === s ? (c = t[1]) : ((c = r(`icon-xs`, s)), (t[0] = s), (t[1] = c));
  let l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, f.jsx)(i, { className: c })), (t[2] = c), (t[3] = l));
  let u;
  return (
    t[4] !== n || t[5] !== a || t[6] !== o || t[7] !== l
      ? ((u = (0, f.jsxs)(`button`, {
          type: `button`,
          "aria-expanded": a,
          className: `text-size-chat flex h-10 cursor-interaction items-center justify-center gap-1 text-token-text-tertiary hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
          onClick: o,
          children: [n, l],
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = o),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
var d,
  f,
  p,
  m,
  h = e(() => {
    ((d = n()),
      o(),
      t(),
      (f = a()),
      (p = {
        default: `px-[var(--thread-resource-card-row-padding-x)] py-3`,
        compact: `p-1.5`,
      }),
      (m = {
        default: `py-3 pr-10 pl-[var(--thread-resource-card-row-padding-x)]`,
        compact: `py-1.5 pr-10 pl-1.5`,
      }));
  });
export { h as a, c as i, u as n, l as r, s as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~k98yhiib-BpDLU_eD.js.map
