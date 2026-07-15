// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless controller that wires up the /feedback slash command and the global
// "feedback" command handler: opens the feedback dialog, submits it, and shows
// the upload-result dialog (or an error toast on failure). Renders nothing.
import { useIntl } from "../vendor/react-intl";
import { submitFeedback } from "./submit-feedback";
import {
  FeedbackDialog,
  type FeedbackDialogSubmission,
} from "./feedback-dialog";
import { UploadResultDialog } from "./upload-result-dialog";
import {
  appServerHostSetupConfig,
  appStoreScope,
  FeedbackIcon,
  logger,
  openDialog,
  toastControllerAtom,
  useActiveHost,
  useAppScope,
  useAppServerHostSetup,
  useCommandHandler,
  useHostConfig,
  useRegisterComposerSlashCommand,
  useRouteMatch,
} from "../boundaries/onboarding-commons-externals.facade";

const LOCAL_CONVERSATION_ROUTE = "/local/:conversationId";
const HOTKEY_WINDOW_THREAD_ROUTE = "/hotkey-window/thread/:conversationId";

interface ConversationRouteMatch {
  params: { conversationId?: string };
}

export interface FeedbackCommandRegistrarProps {
  includeDesktopLogArchive?: boolean;
}

export function FeedbackCommandRegistrar({
  includeDesktopLogArchive,
}: FeedbackCommandRegistrarProps): null {
  const store = useAppScope(appStoreScope);
  const intl = useIntl();
  const activeHost = useActiveHost();
  useAppServerHostSetup(appServerHostSetupConfig, activeHost);

  const localMatch = useRouteMatch(
    LOCAL_CONVERSATION_ROUTE,
  ) as ConversationRouteMatch | null;
  const hotkeyMatch = useRouteMatch(
    HOTKEY_WINDOW_THREAD_ROUTE,
  ) as ConversationRouteMatch | null;
  const conversationId =
    localMatch?.params.conversationId ??
    hotkeyMatch?.params.conversationId ??
    null;
  const { hostId } = useHostConfig(activeHost) as { hostId: string };

  const handleSubmit = async ({
    classification,
    description,
    includeLogs,
  }: FeedbackDialogSubmission) => {
    try {
      const { feedbackId } = await submitFeedback({
        hostId,
        classification,
        description,
        includeDesktopLogArchive,
        includeLogs,
        threadId: conversationId,
      });
      openDialog(store, UploadResultDialog, {
        correlationId: feedbackId,
        internalSlackMessage: undefined,
      });
    } catch (error) {
      logger.error("Failed to submit feedback", {
        safe: {},
        sensitive: { error },
      });
      store.get(toastControllerAtom).danger(
        intl.formatMessage({
          id: "feedback.dialog.submitError",
          defaultMessage:
            "We couldn't submit your feedback. Please try again in a moment.",
          description: "Toast shown when feedback submission fails",
        }),
      );
      return false;
    }
  };

  const openFeedbackDialog = async () => {
    openDialog(store, FeedbackDialog, { onSubmit: handleSubmit });
  };

  useCommandHandler("feedback", () => {
    openFeedbackDialog();
  });

  useRegisterComposerSlashCommand({
    id: "feedback",
    title: intl.formatMessage({
      id: "composer.feedbackSlashCommand.title",
      defaultMessage: "Feedback",
      description: "Title for the /feedback slash command",
    }),
    description: intl.formatMessage({
      id: "composer.feedbackSlashCommand.description",
      defaultMessage: "Send feedback about this chat",
      description: "Description for the /feedback slash command",
    }),
    requiresEmptyComposer: false,
    Icon: FeedbackIcon,
    onSelect: openFeedbackDialog,
    dependencies: [openFeedbackDialog],
  });

  return null;
}
