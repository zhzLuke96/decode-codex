// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Render visible local conversation turns into markdown for export and extension menus.
import { once } from "../../runtime/commonjs-interop";
import {
  initDynamicModulePreloadRuntime,
  preloadDynamicImport,
} from "../../runtime/dynamic-module-preload";
import {
  initLocalConversationArtifactRuntime,
  renderLocalConversationTurn,
} from "./local-conversation-artifact-runtime";

const CONVERSATION_MARKDOWN_PRELOAD_DEPENDENCIES = [
  "../../threads/thread-user-message-navigation-rail",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js",
  "./rolldown-runtime-Czos8NxU.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj-DZ7tupb9.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~g5252vxb-CZkpVhg2.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js",
  "./app-initial~app-main~onboarding-page-BUwCKIcU.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~hih2jc2y-CWqOTUw4.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js",
  "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-zz_Wr7F0.js",
  "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-sS9Dm_y9.css",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~chrf619l-Bf5oWcQG.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-9F1MU8ql.css",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-x1JD0lOF.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~dg864qec-ISZMeMHq.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-czZPzzcM.css",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-Cvc3K8GC.js",
  "./app-initial~app-main~page~onboarding-page~skills-settings~plugins-settings~remote-connectio~c59x15mv-DDkvwlbO.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~new-thread-~cudo26ta-w-TJZ3uo.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~fnaniary-xAHK9tNq.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~fnaniary-BhOGlSiR.css",
  "./app-initial~app-main~onboarding-page-DFdacs5s.css",
  "../../threads/thread-scroll-layout/scroll-controller-context",
  "./thread-user-message-navigation-rail-CX3TkeeC.css",
  "../conversation-markdown",
] as const;

type VisibleTurnEntry = {
  preserveServerUserMessages?: boolean;
  requests?: readonly unknown[];
  turn: unknown;
};

export type RenderLocalConversationMarkdownOptions = {
  cwd: string | null | undefined;
  isBackgroundSubagentsEnabled: boolean;
  projectlessOutputDirectory: string | null | undefined;
  title: unknown;
  visibleTurnEntries: readonly VisibleTurnEntry[];
};

export async function renderLocalConversationMarkdownForTurns({
  cwd,
  isBackgroundSubagentsEnabled,
  projectlessOutputDirectory,
  title,
  visibleTurnEntries,
}: RenderLocalConversationMarkdownOptions): Promise<string | null> {
  let renderableTurns = visibleTurnEntries.map(
    ({ preserveServerUserMessages, requests, turn }) =>
      renderLocalConversationTurn(turn, requests, {
        isBackgroundSubagentsEnabled,
        preserveServerUserMessages,
      }),
  );
  if (renderableTurns.length === 0) return null;
  let { renderConversationMarkdown } = await preloadDynamicImport(
    async () => {
      let { renderConversationMarkdown: renderConversationMarkdownModule } =
        await import("../conversation-markdown");
      return {
        renderConversationMarkdown: renderConversationMarkdownModule,
      };
    },
    getConversationMarkdownPreloadDependencies([
      28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25,
    ]),
    import.meta.url,
  );
  return renderConversationMarkdown({
    cwd,
    projectlessOutputDirectory,
    title,
    turns: renderableTurns,
  });
}

export const initConversationMarkdownRenderer = once(() => {
  initLocalConversationArtifactRuntime();
  initDynamicModulePreloadRuntime();
});

function getConversationMarkdownPreloadDependencies(
  dependencyIndexes: readonly number[],
) {
  return dependencyIndexes.map(
    (dependencyIndex) =>
      CONVERSATION_MARKDOWN_PRELOAD_DEPENDENCIES[dependencyIndex],
  );
}
