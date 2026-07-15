import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Af as r,
  Df as i,
  L2 as a,
  Mq as o,
  Nq as s,
  S0 as c,
  SK as l,
  _0 as u,
  _D as d,
  _Y as f,
  bK as p,
  bf as m,
  cS as h,
  cY as g,
  fS as _,
  gf as v,
  hf as y,
  k2 as b,
  kf as x,
  lS as S,
  mD as C,
  mY as w,
  mf as T,
  s$ as E,
  sY as D,
  yY as O,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ma as k,
  ja as A,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as j,
  n as M,
  r as N,
  t as P,
} from "./chatgpt-desktop-auth-url-BqAcG710.js";
function F({ onClose: e, startLogin: t = j, workspaceId: n }) {
  let r = c(D),
    a = S(),
    s = _(),
    u = O(),
    [p, m] = (0, I.useState)(null),
    h = p != null;
  (0, I.useEffect)(
    () => () => {
      p?.abort();
    },
    [p],
  );
  let g = () => {
      (p?.abort(), e());
    },
    b = (e) => {
      r.get(l).warning(
        u.formatMessage(
          {
            id: `checkout.business.switchWorkspace.error`,
            defaultMessage: `Couldn’t switch workspaces: {error}`,
            description: `Toast shown when opening or completing the workspace selector after Business checkout fails`,
          },
          { error: E(e) },
        ),
      );
    },
    C = async () => {
      if (p != null) return;
      let r = new AbortController(),
        i = !1;
      m(r);
      try {
        let { authUrl: o, completion: c } = await t({
          signal: r.signal,
          useStreamlinedLogin: !0,
        });
        o &&
          d({
            href: P({
              allowedWorkspaceId: n,
              authUrl: o,
              currentWorkspaceId: n,
              loginHint: a.email ?? void 0,
              useDesktopAuth: !1,
              useStreamlinedLoginUx: !0,
            }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        let l = await c;
        if (!l.success) {
          b(l.error ?? `Unknown error`);
          return;
        }
        ((i = !0), e(), s());
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        b(e);
      } finally {
        !i && !r.signal.aborted && m(null);
      }
    };
  return (0, L.jsx)(i, {
    open: !0,
    onOpenChange: (e) => {
      e || g();
    },
    size: `compact`,
    children: (0, L.jsxs)(T, {
      as: `form`,
      className: `gap-5 px-6 py-6`,
      onSubmit: (e) => {
        (e.preventDefault(), C());
      },
      children: [
        (0, L.jsx)(v, {
          icon: (0, L.jsx)(A, { className: `icon-sm` }),
          iconBackgroundClassName: `bg-token-foreground/10`,
          title: (0, L.jsx)(x, {
            asChild: !0,
            children: (0, L.jsx)(`span`, {
              children: (0, L.jsx)(f, {
                id: `checkout.business.switchWorkspace.title`,
                defaultMessage: `Switch to your new workspace?`,
                description: `Title of the modal shown after a user completes Business checkout and onboarding`,
              }),
            }),
          }),
          subtitle: (0, L.jsx)(f, {
            id: `checkout.business.switchWorkspace.subtitle`,
            defaultMessage: `Your new workspace is ready. Do you want to switch over?`,
            description: `Subtitle of the modal shown after a user completes Business checkout and onboarding`,
          }),
        }),
        h
          ? (0, L.jsx)(`p`, {
              className: `text-sm text-token-description-foreground`,
              children: (0, L.jsx)(f, {
                id: `checkout.business.switchWorkspace.waiting`,
                defaultMessage: `Waiting for workspace selection in your browser…`,
                description: `Status shown while the user is choosing a workspace in the browser after Business checkout`,
              }),
            })
          : null,
        (0, L.jsxs)(y, {
          className: `gap-2`,
          children: [
            (0, L.jsx)(o, {
              color: `ghost`,
              type: `button`,
              onClick: g,
              children: (0, L.jsx)(f, {
                id: `checkout.business.switchWorkspace.notNow`,
                defaultMessage: `Not now`,
                description: `Dismiss button in the workspace switch prompt shown after Business checkout`,
              }),
            }),
            (0, L.jsx)(o, {
              color: `primary`,
              loading: h,
              type: `submit`,
              children: (0, L.jsx)(f, {
                id: `checkout.business.switchWorkspace.confirm`,
                defaultMessage: `Switch workspace`,
                description: `Confirm button in the workspace switch prompt shown after Business checkout`,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var I, L;
e(() => {
  (u(),
    n(),
    (I = t(a(), 1)),
    w(),
    N(),
    h(),
    s(),
    r(),
    m(),
    C(),
    p(),
    k(),
    g(),
    M(),
    (L = b()));
})();
export { F as BusinessCheckoutSwitchWorkspaceDialog };
//# sourceMappingURL=business-checkout-switch-workspace-dialog-Cn2PSQFT.js.map
