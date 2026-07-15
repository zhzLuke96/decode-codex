import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  _Y as t,
  k2 as n,
  mY as r,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function i(e) {
  return e === `ready`
    ? null
    : (0, a.jsx)(`div`, {
        className: `flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary`,
        children:
          e === `loading`
            ? (0, a.jsx)(`span`, {
                className: `loading-shimmer-pure-text font-medium`,
                children: (0, a.jsx)(t, {
                  id: `artifactTab.previewLoading`,
                  defaultMessage: `Preparing preview…`,
                  description: `Loading state shown while the artifact preview is loading`,
                }),
              })
            : (0, a.jsx)(t, {
                id: `artifactTab.previewError`,
                defaultMessage: `Couldn’t load this preview`,
                description: `Error state shown when an artifact preview fails to load`,
              }),
      });
}
var a,
  o = e(() => {
    (r(), (a = n()));
  });
export { i as n, o as t };
//# sourceMappingURL=artifact-preview-status-B66qejw_.js.map
