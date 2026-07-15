import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  IK as r,
  KJ as i,
  L2 as a,
  LK as o,
  Mq as s,
  Nq as c,
  k2 as l,
  mY as u,
  qJ as d,
  yY as f,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function p(e) {
  let t = (0, m.c)(17),
    { ancestors: n, current: a, textSm: o } = e,
    c = f(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = o ? `text-sm` : `text-base`,
    d;
  t[2] === u
    ? (d = t[3])
    : ((d = i(
        `flex min-w-0 items-center gap-1 text-token-description-foreground`,
        u,
      )),
      (t[2] = u),
      (t[3] = d));
  let p;
  if (t[4] !== n || t[5] !== o) {
    let e;
    (t[7] === o
      ? (e = t[8])
      : ((e = (e, t) =>
          (0, g.jsxs)(
            h.Fragment,
            {
              children: [
                t > 0
                  ? (0, g.jsx)(r, {
                      "aria-hidden": !0,
                      className: `icon-xs shrink-0`,
                    })
                  : null,
                `content` in e
                  ? e.content
                  : (0, g.jsx)(s, {
                      className: i(`min-w-0`, o && `text-sm`),
                      color: `ghost`,
                      size: `toolbar`,
                      onClick: e.onClick,
                      children: (0, g.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: e.label,
                      }),
                    }),
              ],
            },
            e.id,
          )),
        (t[7] = o),
        (t[8] = e)),
      (p = n.map(e)),
      (t[4] = n),
      (t[5] = o),
      (t[6] = p));
  } else p = t[6];
  let _;
  t[9] !== n.length || t[10] !== a
    ? ((_ =
        a == null
          ? null
          : (0, g.jsxs)(g.Fragment, {
              children: [
                n.length > 0
                  ? (0, g.jsx)(r, {
                      "aria-hidden": !0,
                      className: `icon-xs shrink-0`,
                    })
                  : null,
                (0, g.jsx)(`span`, {
                  "aria-current": `page`,
                  className: `flex h-token-button-composer min-w-0 items-center truncate px-2 text-token-foreground`,
                  children: a,
                }),
              ],
            })),
      (t[9] = n.length),
      (t[10] = a),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  return (
    t[12] !== l || t[13] !== d || t[14] !== p || t[15] !== _
      ? ((v = (0, g.jsxs)(`nav`, {
          "aria-label": l,
          className: d,
          children: [p, _],
        })),
        (t[12] = l),
        (t[13] = d),
        (t[14] = p),
        (t[15] = _),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
var m,
  h,
  g,
  _ = e(() => {
    ((m = n()), d(), (h = t(a(), 1)), u(), o(), c(), (g = l()));
  });
export { _ as n, p as t };
//# sourceMappingURL=app-initial~app-main~appgen-settings-page~page~plugin-detail-page~quick-chat-window-page~sk~nap5db9z-ByktMsXX.js.map
