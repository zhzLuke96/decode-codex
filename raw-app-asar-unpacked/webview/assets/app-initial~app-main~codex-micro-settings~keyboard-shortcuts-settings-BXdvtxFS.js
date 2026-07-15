import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  KJ as r,
  L2 as i,
  k2 as a,
  mY as o,
  qJ as s,
  yY as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  _ as l,
  v as u,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
function d(e) {
  let t = (0, f.c)(51),
    {
      autoFocus: n,
      ariaLabel: i,
      isSearchingByKeystrokes: a,
      placeholder: o,
      trailingContent: s,
      variant: u,
      onKeyDown: d,
      value: h,
      onValueChange: g,
    } = e,
    _ = a === void 0 ? !1 : a,
    v = u === void 0 ? `default` : u,
    y = (0, p.useId)(),
    b = c(),
    x;
  t[0] !== i || t[1] !== b || t[2] !== _
    ? ((x = _
        ? b.formatMessage({
            id: `settings.keyboardShortcuts.keystrokeSearch.ariaLabel`,
            defaultMessage: `Keystroke search capture`,
            description: `Accessible label for the input that captures keyboard shortcuts to search`,
          })
        : (i ??
          b.formatMessage({
            id: `settings.keyboardShortcuts.search.ariaLabel`,
            defaultMessage: `Search keyboard shortcuts`,
            description: `Accessible label for the keyboard shortcuts search input`,
          }))),
      (t[0] = i),
      (t[1] = b),
      (t[2] = _),
      (t[3] = x))
    : (x = t[3]);
  let S = x,
    C;
  t[4] !== b || t[5] !== _ || t[6] !== o
    ? ((C = _
        ? b.formatMessage({
            id: `settings.keyboardShortcuts.keystrokeSearch.placeholder`,
            defaultMessage: `Press shortcut to search`,
            description: `Placeholder shown while capturing a keyboard shortcut to search`,
          })
        : (o ??
          b.formatMessage({
            id: `settings.keyboardShortcuts.search.placeholder`,
            defaultMessage: `Search shortcuts`,
            description: `Placeholder for the keyboard shortcuts search input`,
          }))),
      (t[4] = b),
      (t[5] = _),
      (t[6] = o),
      (t[7] = C))
    : (C = t[7]);
  let w = C;
  if (v === `default`) {
    let e = _ ? `keystrokes` : `text`,
      i = _ || void 0,
      a = s == null ? null : `pe-11`,
      o;
    t[8] === a
      ? (o = t[9])
      : ((o = r(
          `w-full rounded-md border border-token-border bg-transparent px-3 py-2 text-sm text-token-text-primary outline-none placeholder:text-token-text-tertiary`,
          a,
        )),
        (t[8] = a),
        (t[9] = o));
    let c;
    t[10] === g
      ? (c = t[11])
      : ((c = (e) => {
          g(e.currentTarget.value);
        }),
        (t[10] = g),
        (t[11] = c));
    let l;
    t[12] !== d || t[13] !== g || t[14] !== h
      ? ((l = (e) => {
          (d?.(e),
            !e.defaultPrevented &&
              e.key === `Escape` &&
              h !== `` &&
              (e.preventDefault(), e.stopPropagation(), g(``)));
        }),
        (t[12] = d),
        (t[13] = g),
        (t[14] = h),
        (t[15] = l))
      : (l = t[15]);
    let u;
    t[16] !== n ||
    t[17] !== w ||
    t[18] !== _ ||
    t[19] !== S ||
    t[20] !== l ||
    t[21] !== e ||
    t[22] !== i ||
    t[23] !== o ||
    t[24] !== c ||
    t[25] !== h
      ? ((u = (0, m.jsx)(
          `input`,
          {
            "data-codex-shortcut-capture": i,
            "aria-label": S,
            autoFocus: n,
            className: o,
            placeholder: w,
            readOnly: _,
            value: h,
            onChange: c,
            onKeyDown: l,
          },
          e,
        )),
        (t[16] = n),
        (t[17] = w),
        (t[18] = _),
        (t[19] = S),
        (t[20] = l),
        (t[21] = e),
        (t[22] = i),
        (t[23] = o),
        (t[24] = c),
        (t[25] = h),
        (t[26] = u))
      : (u = t[26]);
    let f;
    t[27] === s
      ? (f = t[28])
      : ((f =
          s == null
            ? null
            : (0, m.jsx)(`div`, {
                className: `absolute inset-y-0 end-1 flex items-center`,
                children: s,
              })),
        (t[27] = s),
        (t[28] = f));
    let p;
    return (
      t[29] !== u || t[30] !== f
        ? ((p = (0, m.jsxs)(`div`, {
            className: `relative`,
            children: [u, f],
          })),
          (t[29] = u),
          (t[30] = f),
          (t[31] = p))
        : (p = t[31]),
      p
    );
  }
  let T = _ || void 0,
    E = _ ? `keystrokes` : `text`,
    D = !_,
    O;
  t[32] !== d || t[33] !== g || t[34] !== h
    ? ((O = (e) => {
        (d?.(e),
          !e.defaultPrevented &&
            e.key === `Escape` &&
            h !== `` &&
            (e.preventDefault(), e.stopPropagation(), g(``)));
      }),
      (t[32] = d),
      (t[33] = g),
      (t[34] = h),
      (t[35] = O))
    : (O = t[35]);
  let k;
  t[36] !== n ||
  t[37] !== y ||
  t[38] !== w ||
  t[39] !== _ ||
  t[40] !== S ||
  t[41] !== g ||
  t[42] !== E ||
  t[43] !== D ||
  t[44] !== O ||
  t[45] !== s ||
  t[46] !== h
    ? ((k = (0, m.jsx)(l, {
        id: y,
        autoFocus: n,
        inputKey: E,
        isClearable: D,
        label: S,
        placeholder: w,
        readOnly: _,
        searchQuery: h,
        trailingControl: s,
        onKeyDown: O,
        onSearchQueryChange: g,
      })),
      (t[36] = n),
      (t[37] = y),
      (t[38] = w),
      (t[39] = _),
      (t[40] = S),
      (t[41] = g),
      (t[42] = E),
      (t[43] = D),
      (t[44] = O),
      (t[45] = s),
      (t[46] = h),
      (t[47] = k))
    : (k = t[47]);
  let A;
  return (
    t[48] !== T || t[49] !== k
      ? ((A = (0, m.jsx)(`div`, {
          "data-codex-shortcut-capture": T,
          children: k,
        })),
        (t[48] = T),
        (t[49] = k),
        (t[50] = A))
      : (A = t[50]),
    A
  );
}
var f,
  p,
  m,
  h = e(() => {
    ((f = n()), s(), (p = t(i(), 1)), o(), u(), (m = a()));
  });
export { h as n, d as t };
//# sourceMappingURL=app-initial~app-main~codex-micro-settings~keyboard-shortcuts-settings-BXdvtxFS.js.map
