import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  KJ as r,
  L2 as i,
  hu as a,
  k2 as o,
  pu as s,
  qJ as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function l(e) {
  let t = (0, u.c)(18),
    { getImagePreviewSrc: n, iconClassName: i, imageClassName: a, path: o } = e,
    c;
  t[0] !== n || t[1] !== o
    ? ((c = n?.(o) ?? null), (t[0] = n), (t[1] = o), (t[2] = c))
    : (c = t[2]);
  let l = c,
    [p, m] = (0, d.useState)(null);
  if (l != null && l !== p) {
    let e;
    t[3] === a
      ? (e = t[4])
      : ((e = r(`shrink-0 object-cover`, a)), (t[3] = a), (t[4] = e));
    let n;
    t[5] === l ? (n = t[6]) : ((n = () => m(l)), (t[5] = l), (t[6] = n));
    let i;
    return (
      t[7] !== l || t[8] !== e || t[9] !== n
        ? ((i = (0, f.jsx)(`img`, {
            alt: ``,
            className: e,
            src: l,
            onError: n,
          })),
          (t[7] = l),
          (t[8] = e),
          (t[9] = n),
          (t[10] = i))
        : (i = t[10]),
      i
    );
  }
  let h;
  t[11] === o ? (h = t[12]) : ((h = s(o)), (t[11] = o), (t[12] = h));
  let g = h,
    _;
  t[13] === i
    ? (_ = t[14])
    : ((_ = r(`shrink-0`, i)), (t[13] = i), (t[14] = _));
  let v;
  return (
    t[15] !== g || t[16] !== _
      ? ((v = (0, f.jsx)(g, { className: _ })),
        (t[15] = g),
        (t[16] = _),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
var u,
  d,
  f,
  p = e(() => {
    ((u = n()), c(), (d = t(i(), 1)), a(), (f = o()));
  });
export { p as n, l as t };
//# sourceMappingURL=artifact-file-preview-icon-Bpkk4s8Z.js.map
