import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as t,
  Mq as n,
  Nq as r,
  _Y as i,
  bG as a,
  k2 as o,
  mY as s,
  yG as c,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function l(e) {
  let t = (0, f.c)(15),
    { appIconMedium: r, appName: a, permissionSettingsName: o } = e,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s =
        r == null
          ? null
          : (0, p.jsx)(`img`, {
              alt: ``,
              "aria-hidden": !0,
              className: `size-12 object-contain`,
              src: r,
            })),
      (t[0] = r),
      (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, p.jsx)(`div`, {
        className: `flex size-14 shrink-0 items-center justify-center`,
        children: s,
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] !== a || t[5] !== o
    ? ((l = (0, p.jsx)(`p`, {
        className: `text-sm text-token-description-foreground`,
        children: (0, p.jsx)(i, {
          id: `permissions.revealApp`,
          defaultMessage: `If {appName} doesn't appear in {permissionSettingsName}, reveal it in Finder, then drag the app into the open System Settings panel`,
          values: { appName: a, permissionSettingsName: o },
          description: `Instructions for dragging the app from Finder into a macOS permission settings page when it is missing`,
        }),
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = l))
    : (l = t[6]);
  let d;
  t[7] === a
    ? (d = t[8])
    : ((d = (0, p.jsx)(n, {
        color: `secondary`,
        onClick: u,
        children: (0, p.jsx)(i, {
          id: `permissions.showAppInFinder`,
          defaultMessage: `Show {appName} in Finder`,
          values: { appName: a },
          description: `Button that reveals the current app bundle in Finder`,
        }),
      })),
      (t[7] = a),
      (t[8] = d));
  let m;
  t[9] !== l || t[10] !== d
    ? ((m = (0, p.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-start gap-2`,
        children: [l, d],
      })),
      (t[9] = l),
      (t[10] = d),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== c || t[13] !== m
      ? ((h = (0, p.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg border border-token-border bg-token-bg-fog p-2.5 text-left`,
          children: [c, m],
        })),
        (t[12] = c),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
function u() {
  c.systemPermissions?.showPermissionSettingsAppInFinder().catch(d);
}
function d() {}
var f,
  p,
  m = e(() => {
    ((f = t()), s(), r(), a(), (p = o()));
  });
export { m as n, l as t };
//# sourceMappingURL=app-initial~app-main~personalization-settings~codex-micro-onboarding-host-_EkO87Ak.js.map
