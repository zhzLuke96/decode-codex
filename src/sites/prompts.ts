// Restored from ref/webview/assets/sites-DPcqhqgt.js
// sites-DPcqhqgt chunk restored from the Codex webview bundle.
import { vscodeApiF } from "../boundaries/vscode-api";
import { featureGateSignal } from "../runtime/feature-gate-runtime";
import {
  createLocalConversationPath,
  normalizeConversationId,
} from "../boundaries/src-l0hb-mz-p";
import { appIntlSignal } from "../utils/app-intl-signal";
import { parseDirectivesM } from "../utils/parse-directives";
import { createSitesProjectMentionMarkdown } from "../composer/mention-item";
import { OPENAI_BUNDLED_SITES_PLUGIN_ID } from "../plugins/plugin-config-edits";
import { createPluginPrefillPrompt } from "../plugins/plugin-prefill-prompt";
type AppScopeReader = {
  get<T>(signal: unknown, key?: unknown): T;
};
type NavigateToConversation = (
  path: string,
  options: {
    state: {
      prefillPrompt: string;
    };
  },
) => void;
type StartSitesConversation = (options: {
  activeProject: null;
  prefillPrompt: string | undefined;
  startInSidebar: boolean;
}) => void;
type CreateSiteAction = {
  setSelectedMode(mode: "plan"): void;
  type: "create";
};
type CreateSiteAssetAction = {
  assetType: "document" | "image" | "pdf" | "presentation" | "spreadsheet";
  type: "create-asset";
};
type EditSiteAction = {
  liveUrl?: string | null;
  projectId: string;
  projectTitle: string;
  type: "edit";
};
export type StartSitesConversationAction =
  | CreateSiteAction
  | CreateSiteAssetAction
  | EditSiteAction;
export function continueEditingLibraryFile(
  appScope: AppScopeReader,
  navigateToConversation: NavigateToConversation,
  fileLabel: string,
  fileMentionHref: string,
  conversationId: string | null | undefined,
): void {
  if (conversationId == null) return;
  const intl = appScope.get<typeof appIntlSignal>(appIntlSignal);
  const prefillPrompt = intl.formatMessage(
    {
      id: "appgenConversation.editFilePrompt",
      defaultMessage: "{fileMention} make these changes...",
      description:
        "Prompt for continuing work on a Library file in its original chat",
    },
    {
      fileMention: parseDirectivesM(fileLabel, fileMentionHref),
    },
  );
  navigateToConversation(
    createLocalConversationPath(normalizeConversationId(conversationId)),
    {
      state: {
        prefillPrompt: `${prefillPrompt} `,
      },
    },
  );
}
export function startSitesConversation(
  appScope: AppScopeReader,
  startConversation: StartSitesConversation,
  action: StartSitesConversationAction,
): void {
  const intl = appScope.get<typeof appIntlSignal>(appIntlSignal);
  let basePrompt: string | undefined;
  switch (action.type) {
    case "create-asset":
      switch (action.assetType) {
        case "document":
          basePrompt = intl.formatMessage({
            id: "appgenPage.createMenu.documentPrompt",
            defaultMessage: "Create a document that ...",
            description:
              "Prefill prompt for creating a document from the Library",
          });
          break;
        case "spreadsheet":
          basePrompt = intl.formatMessage({
            id: "appgenPage.createMenu.spreadsheetPrompt",
            defaultMessage: "Create a spreadsheet that ...",
            description:
              "Prefill prompt for creating a spreadsheet from the Library",
          });
          break;
        case "presentation":
          basePrompt = intl.formatMessage({
            id: "appgenPage.createMenu.presentationPrompt",
            defaultMessage: "Create a presentation that ...",
            description:
              "Prefill prompt for creating a presentation from the Library",
          });
          break;
        case "pdf":
          basePrompt = intl.formatMessage({
            id: "appgenPage.createMenu.pdfPrompt",
            defaultMessage: "Create a PDF that ...",
            description: "Prefill prompt for creating a PDF from the Library",
          });
          break;
        case "image":
          basePrompt = intl.formatMessage({
            id: "appgenPage.createMenu.imagePrompt",
            defaultMessage: "Create an image of ...",
            description:
              "Prefill prompt for creating an image from the Library",
          });
          break;
      }
      break;
    case "create":
      if (appScope.get<boolean>(featureGateSignal, "3696170016"))
        action.setSelectedMode("plan");
      basePrompt = intl.formatMessage({
        id: "appgenConversation.createPrompt",
        defaultMessage: "Create a website that ...",
        description: "Prompt for starting a new site from the Sites page",
      });
      break;
    case "edit":
      basePrompt = intl.formatMessage(
        {
          id: "appgenConversation.editPrompt",
          defaultMessage: "{siteMention} make these changes...",
          description:
            "Prompt for continuing work on an existing site from the Sites page",
        },
        {
          siteMention: createSitesProjectMentionMarkdown({
            projectId: action.projectId,
            title: action.projectTitle,
          }),
        },
      );
      break;
  }
  let prefillPrompt: string | undefined;
  switch (action.type) {
    case "create":
      prefillPrompt = createPluginPrefillPrompt({
        defaultPrompt: basePrompt,
        pluginDisplayName: "Sites",
        pluginId: OPENAI_BUNDLED_SITES_PLUGIN_ID,
      });
      break;
    case "edit":
      prefillPrompt = `${basePrompt} `;
      break;
    case "create-asset":
      prefillPrompt = basePrompt;
      break;
  }
  startConversation({
    activeProject: null,
    prefillPrompt,
    startInSidebar: true,
  });
  if (action.type === "edit" && action.liveUrl != null) {
    vscodeApiF.dispatchMessage("open-in-browser", {
      initiator: "sites_library",
      openTarget: "in-app-browser",
      source: "manual",
      url: action.liveUrl,
    });
  }
}
