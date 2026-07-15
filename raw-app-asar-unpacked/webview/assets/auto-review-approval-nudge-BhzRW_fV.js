import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  L2 as n,
  Mq as r,
  Nq as i,
  Oa as a,
  S0 as o,
  SK as s,
  _0 as c,
  _Y as l,
  bJ as u,
  bK as d,
  cY as f,
  k2 as p,
  ka as m,
  mY as h,
  sY as g,
  yJ as _,
  yY as v,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  an as y,
  on as b,
  sn as x,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  au as S,
  na as C,
  nu as w,
  ou as T,
  ta as E,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  bt as D,
  vt as O,
  yt as k,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  ot as A,
  vt as j,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
function M({ conversationId: e, hostId: t }) {
  let n = o(g),
    i = v(),
    [c, d] = (0, N.useState)(!1),
    { agentMode: f, setAgentMode: p } = T({ conversationId: e, hostId: t }),
    { setPreferredNonFullAccessMode: m } = S({ conversationId: e, hostId: t }),
    h = async () => {
      if (!c) {
        d(!0);
        try {
          await b(n, {
            conversationId: e,
            setAgentMode: p,
            setPreferredNonFullAccessMode: m,
            startAgentMode: f,
          });
        } catch (t) {
          (u.error(`Failed to enable Auto-review`, {
            safe: { conversationId: e },
            sensitive: { error: t },
          }),
            n.get(s).danger(
              i.formatMessage({
                id: `approvalRequest.autoReviewNudge.enableFailed`,
                defaultMessage: `Could not enable Auto-review — try again`,
                description: `Toast shown when enabling Auto-review from an approval request fails`,
              }),
            ));
        } finally {
          d(!1);
        }
      }
    };
  return (0, P.jsx)(O, {
    children: (0, P.jsxs)(`form`, {
      className: `flex flex-col`,
      onSubmit: (e) => {
        (e.preventDefault(), h());
      },
      children: [
        (0, P.jsxs)(`div`, {
          className: `flex flex-col gap-5 px-4 pt-4 pb-5`,
          children: [
            (0, P.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-token-description-foreground`,
              children: [
                (0, P.jsx)(E, { className: `icon-sm shrink-0` }),
                (0, P.jsx)(l, {
                  id: `approvalRequest.autoReviewNudge.title`,
                  defaultMessage: `Want fewer approval prompts?`,
                  description: `Title for the Auto-review offer shown after several manual approvals`,
                }),
              ],
            }),
            (0, P.jsx)(`div`, {
              className: `text-base leading-6`,
              children: (0, P.jsx)(l, {
                id: `approvalRequest.autoReviewNudge.description`,
                defaultMessage: `ChatGPT can automatically approve eligible actions while it works. This may use more credits. <a>Learn more.</a>`,
                description: `Description for the Auto-review offer shown after several manual approvals`,
                values: {
                  a: (e) =>
                    (0, P.jsx)(
                      a,
                      {
                        className: `cursor-interaction rounded-sm underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
                        href: A,
                        initiator: `open_in_browser_bridge`,
                        isBrowserSidebarEnabled: !1,
                        children: e,
                      },
                      `auto-review-learn-more`,
                    ),
                },
              }),
            }),
          ],
        }),
        (0, P.jsxs)(`div`, {
          className: `flex flex-wrap justify-end gap-2 border-t border-token-border/50 px-3 py-2`,
          children: [
            (0, P.jsx)(r, {
              color: `outline`,
              disabled: c,
              size: `composer`,
              onClick: () => {
                y(n, e);
              },
              children: (0, P.jsx)(l, {
                id: `approvalRequest.autoReviewNudge.keepManual`,
                defaultMessage: `Keep manual approvals`,
                description: `Action to keep manual approvals and permanently dismiss the Auto-review offer`,
              }),
            }),
            (0, P.jsxs)(r, {
              autoFocus: !0,
              color: `primary`,
              disabled: c,
              size: `composer`,
              type: `submit`,
              children: [
                (0, P.jsx)(l, {
                  id: `approvalRequest.autoReviewNudge.enable`,
                  defaultMessage: `Approve for me`,
                  description: `Action to enable Auto-review from a standalone approval offer`,
                }),
                (0, P.jsx)(D, { variant: `primary`, children: `⏎` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var N, P;
e(() => {
  (c(),
    (N = t(n(), 1)),
    h(),
    i(),
    m(),
    d(),
    j(),
    C(),
    f(),
    _(),
    x(),
    k(),
    w(),
    (P = p()));
})();
export { M as AutoReviewApprovalNudge };
//# sourceMappingURL=auto-review-approval-nudge-BhzRW_fV.js.map
