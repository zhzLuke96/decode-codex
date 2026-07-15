// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Handles the "implement-todo" host command by navigating to the referenced
// file/line (with its inline comment) in the local app-server host.

import { useNavigate } from "../conversations/local-conversation-route-runtime";
import { LOCAL_APP_SERVER_HOST_ID } from "../boundaries/thread-context-inputs.facade";
import {
  appScopeAtom,
  navigateToImplementTodo,
  useAtomValue,
  useHostMessageHandler,
} from "../boundaries/onboarding-commons-externals.facade";

interface ImplementTodoCommandPayload {
  fileName: string;
  line: number;
  comment: string;
}

export function ImplementTodoCommandListener() {
  const scope = useAtomValue(appScopeAtom);
  const navigate = useNavigate();

  useHostMessageHandler(
    "implement-todo",
    (payload: ImplementTodoCommandPayload) => {
      navigateToImplementTodo({
        fileName: decodeURIComponent(payload.fileName),
        line: payload.line,
        comment: payload.comment,
        hostId: LOCAL_APP_SERVER_HOST_ID,
        navigate,
        scope,
      });
    },
  );

  return null;
}
