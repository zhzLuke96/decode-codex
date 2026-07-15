import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  DJ as n,
  I2 as r,
  IJ as i,
  KJ as a,
  L2 as o,
  Ms as s,
  Ps as c,
  RJ as l,
  k2 as u,
  qJ as d,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function f(e) {
  let t = (0, m.c)(55),
    n,
    r,
    i,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    _,
    v,
    y;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (o = t[4]),
      (s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]),
      (p = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]))
    : (({
        icon: i,
        label: s,
        hideLabel: r,
        fullWidth: u,
        hoverBackground: d,
        onClick: c,
        isActive: f,
        disabled: p,
        className: n,
        weightClassName: y,
        iconClassName: _,
        trailing: v,
        interactiveTrailing: o,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y));
  let b = u === void 0 ? !0 : u,
    x = d === void 0 ? !0 : d,
    S = f === void 0 ? !1 : f,
    C = p === void 0 ? !1 : p,
    w = _ === void 0 ? `icon-xs` : _,
    T = b ? `flex w-full` : `inline-flex w-auto`,
    E = S
      ? `bg-token-list-hover-background`
      : x && `hover:bg-token-list-hover-background`,
    D;
  t[15] !== n || t[16] !== T || t[17] !== E || t[18] !== y
    ? ((D = a(
        `focus-visible:outline-token-border relative h-[var(--height-token-row)] px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y cursor-interaction shrink-0 items-center overflow-hidden rounded-[var(--radius-token-row)] text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-2`,
        T,
        E,
        y,
        n,
      )),
      (t[15] = n),
      (t[16] = T),
      (t[17] = E),
      (t[18] = y),
      (t[19] = D))
    : (D = t[19]);
  let O = D,
    k = b && `flex-1`,
    A = r !== void 0 && `min-h-6`,
    j = S
      ? `text-token-list-active-selection-foreground`
      : `text-token-foreground`,
    M;
  t[20] !== A || t[21] !== j || t[22] !== k
    ? ((M = a(`flex min-w-0 items-center text-base gap-2`, k, A, j)),
      (t[20] = A),
      (t[21] = j),
      (t[22] = k),
      (t[23] = M))
    : (M = t[23]);
  let N;
  t[24] !== i || t[25] !== w || t[26] !== S
    ? ((N = (0, h.isValidElement)(i)
        ? i
        : (0, h.createElement)(i, {
            className: a(
              w,
              S && `text-token-list-active-selection-icon-foreground`,
            ),
          })),
      (t[24] = i),
      (t[25] = w),
      (t[26] = S),
      (t[27] = N))
    : (N = t[27]);
  let P;
  t[28] === N
    ? (P = t[29])
    : ((P = (0, g.jsx)(`span`, {
        className: `flex w-4 shrink-0 items-center justify-center`,
        children: N,
      })),
      (t[28] = N),
      (t[29] = P));
  let F;
  t[30] !== r || t[31] !== s
    ? ((F = r
        ? null
        : (0, g.jsx)(`span`, { className: `text-fade-truncate`, children: s })),
      (t[30] = r),
      (t[31] = s),
      (t[32] = F))
    : (F = t[32]);
  let I;
  t[33] !== M || t[34] !== P || t[35] !== F
    ? ((I = (0, g.jsxs)(`div`, { className: M, children: [P, F] })),
      (t[33] = M),
      (t[34] = P),
      (t[35] = F),
      (t[36] = I))
    : (I = t[36]);
  let L = I;
  if (o != null) {
    let e = S ? `page` : void 0,
      n = l,
      r;
    t[37] !== L || t[38] !== C || t[39] !== c || t[40] !== e || t[41] !== n
      ? ((r = (0, g.jsx)(`button`, {
          type: `button`,
          className: `flex min-w-0 flex-1 cursor-interaction items-center text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border disabled:cursor-not-allowed`,
          onClick: c,
          "aria-current": e,
          disabled: C,
          ...n,
          children: L,
        })),
        (t[37] = L),
        (t[38] = C),
        (t[39] = c),
        (t[40] = e),
        (t[41] = n),
        (t[42] = r))
      : (r = t[42]);
    let i;
    return (
      t[43] !== O || t[44] !== o || t[45] !== r
        ? ((i = (0, g.jsxs)(`div`, { className: O, children: [r, o] })),
          (t[43] = O),
          (t[44] = o),
          (t[45] = r),
          (t[46] = i))
        : (i = t[46]),
      i
    );
  }
  let R = S ? `page` : void 0,
    z = l,
    B;
  return (
    t[47] !== O ||
    t[48] !== L ||
    t[49] !== C ||
    t[50] !== c ||
    t[51] !== R ||
    t[52] !== z ||
    t[53] !== v
      ? ((B = (0, g.jsxs)(`button`, {
          type: `button`,
          className: O,
          onClick: c,
          "aria-current": R,
          disabled: C,
          ...z,
          children: [L, v],
        })),
        (t[47] = O),
        (t[48] = L),
        (t[49] = C),
        (t[50] = c),
        (t[51] = R),
        (t[52] = z),
        (t[53] = v),
        (t[54] = B))
      : (B = t[54]),
    B
  );
}
function p(e) {
  let t = (0, m.c)(18),
    {
      children: n,
      className: r,
      collapsed: o,
      title: c,
      titleActions: u,
      titleActionsOnHover: d,
      titleTrailing: f,
      titleRowClassName: p,
      titleClassName: h,
    } = e,
    _ = d === void 0 ? !1 : d,
    v = o == null && `gap-1`,
    y;
  t[0] !== r || t[1] !== v
    ? ((y = a(`flex flex-col`, v, r)), (t[0] = r), (t[1] = v), (t[2] = y))
    : (y = t[2]);
  let b;
  t[3] !== c ||
  t[4] !== u ||
  t[5] !== _ ||
  t[6] !== h ||
  t[7] !== p ||
  t[8] !== f
    ? ((b = c
        ? (0, g.jsxs)(`div`, {
            className: a(
              `group/nav-section-title flex items-center justify-between gap-2`,
              p ?? `pr-0.5 pl-2`,
            ),
            children: [
              (0, g.jsx)(`div`, {
                className: a(
                  `min-w-0 flex-1`,
                  h ??
                    `text-base font-medium text-token-input-placeholder-foreground opacity-75`,
                ),
                children: c,
              }),
              u != null || f != null
                ? (0, g.jsxs)(`div`, {
                    className: `flex shrink-0 items-center gap-1`,
                    children: [
                      u == null
                        ? null
                        : (0, g.jsx)(`div`, {
                            className: a(
                              `shrink-0`,
                              _ &&
                                `pointer-events-none opacity-0 group-focus-within/nav-section-title:pointer-events-auto group-focus-within/nav-section-title:opacity-100 group-hover/nav-section-title:pointer-events-auto group-hover/nav-section-title:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
                            ),
                            children: u,
                          }),
                      f == null
                        ? null
                        : (0, g.jsx)(`div`, {
                            className: `shrink-0`,
                            children: f,
                          }),
                    ],
                  })
                : null,
            ],
          })
        : null),
      (t[3] = c),
      (t[4] = u),
      (t[5] = _),
      (t[6] = h),
      (t[7] = p),
      (t[8] = f),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== n || t[11] !== o || t[12] !== c
    ? ((x =
        o == null
          ? (0, g.jsx)(`div`, {
              className: `flex flex-col gap-px`,
              children: n,
            })
          : (0, g.jsx)(l, {
              initial: !1,
              children: o
                ? null
                : (0, g.jsx)(i.div, {
                    initial: { height: 0, opacity: 0 },
                    animate: {
                      height: `auto`,
                      opacity: 1,
                      transitionEnd: { overflow: `visible` },
                    },
                    exit: { height: 0, opacity: 0, overflow: `hidden` },
                    transition: s,
                    className: `overflow-hidden`,
                    children: (0, g.jsx)(`div`, {
                      className: a(`flex flex-col gap-px`, !!c && `pt-1`),
                      children: n,
                    }),
                  }),
            })),
      (t[10] = n),
      (t[11] = o),
      (t[12] = c),
      (t[13] = x))
    : (x = t[13]);
  let S;
  return (
    t[14] !== y || t[15] !== b || t[16] !== x
      ? ((S = (0, g.jsxs)(`div`, { className: y, children: [b, x] })),
        (t[14] = y),
        (t[15] = b),
        (t[16] = x),
        (t[17] = S))
      : (S = t[17]),
    S
  );
}
var m,
  h,
  g,
  _ = e(() => {
    ((m = r()), d(), n(), (h = t(o(), 1)), c(), (g = u()));
  });
export { p as n, _ as r, f as t };
//# sourceMappingURL=app-initial~app-main~settings-page~projects-index-page-EtWCScY9.js.map
