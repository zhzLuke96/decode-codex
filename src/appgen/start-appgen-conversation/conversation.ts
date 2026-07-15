// Restored from ref/webview/assets/start-appgen-conversation-DsuZNIH_.js
// Prompt builders and navigation helpers for Sites and appgen Library actions.

import {
  createLocalConversationPath,
  normalizeConversationId,
} from "../../boundaries/src-l0hb-mz-p";
import { vscodeApiF } from "../../boundaries/vscode-api";
import { createSitesProjectMentionMarkdown } from "../../composer/mention-item";
import { OPENAI_BUNDLED_SITES_PLUGIN_ID } from "../../plugins/plugin-config-edits";
import { createPluginPrefillPrompt } from "../../plugins/plugin-prefill-prompt";
import { appIntlSignal } from "../../utils/app-intl-signal";
import { parseDirectivesM } from "../../utils/parse-directives";
import type {
  AppScopeReader,
  NavigateToConversation,
  StartAppgenConversation,
  StartAppgenConversationAction,
} from "./types";

type IntlLike = {
  formatMessage(
    descriptor: {
      defaultMessage: string;
      description?: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ): string;
};

export function continueEditingLibraryFileInOriginalConversation(
  appScope: AppScopeReader,
  navigateToConversation: NavigateToConversation,
  fileLabel: string,
  fileMentionHref: string,
  conversationId: string | null | undefined,
): void {
  if (conversationId == null) return;

  const intl = appScope.get<IntlLike>(appIntlSignal);
  const prefillPrompt = intl.formatMessage(
    {
      id: "appgenConversation.editFilePrompt",
      defaultMessage: "{fileMention} make these changes…",
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

export function startAppgenConversation(
  appScope: AppScopeReader,
  startConversation: StartAppgenConversation,
  action: StartAppgenConversationAction,
): void {
  const intl = appScope.get<IntlLike>(appIntlSignal);
  let defaultPrompt: string | undefined;

  switch (action.type) {
    case "create-asset":
      switch (action.assetType) {
        case "document":
          defaultPrompt = intl.formatMessage({
            id: "appgenPage.createMenu.documentPrompt",
            defaultMessage: "Create a document that …",
            description:
              "Prefill prompt for creating a document from the Library",
          });
          break;
        case "spreadsheet":
          defaultPrompt = intl.formatMessage({
            id: "appgenPage.createMenu.spreadsheetPrompt",
            defaultMessage: "Create a spreadsheet that …",
            description:
              "Prefill prompt for creating a spreadsheet from the Library",
          });
          break;
        case "presentation":
          defaultPrompt = intl.formatMessage({
            id: "appgenPage.createMenu.presentationPrompt",
            defaultMessage: "Create a presentation that …",
            description:
              "Prefill prompt for creating a presentation from the Library",
          });
          break;
        case "pdf":
          defaultPrompt = intl.formatMessage({
            id: "appgenPage.createMenu.pdfPrompt",
            defaultMessage: "Create a PDF that …",
            description: "Prefill prompt for creating a PDF from the Library",
          });
          break;
        case "image":
          defaultPrompt = intl.formatMessage({
            id: "appgenPage.createMenu.imagePrompt",
            defaultMessage: "Create an image of …",
            description:
              "Prefill prompt for creating an image from the Library",
          });
          break;
      }
      break;
    case "create":
      defaultPrompt = intl.formatMessage({
        id: "appgenConversation.createPrompt",
        defaultMessage: "Create a website that …",
        description: "Prompt for starting a new site from the Sites page",
      });
      break;
    case "edit":
      defaultPrompt = intl.formatMessage(
        {
          id: "appgenConversation.editPrompt",
          defaultMessage: "{siteMention} make these changes…",
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
        defaultPrompt,
        pluginDisplayName: "Sites",
        pluginId: OPENAI_BUNDLED_SITES_PLUGIN_ID,
      });
      break;
    case "edit":
      prefillPrompt = `${defaultPrompt} `;
      break;
    case "create-asset":
      prefillPrompt = defaultPrompt;
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

export function initStartAppgenConversationChunk(): void {}
