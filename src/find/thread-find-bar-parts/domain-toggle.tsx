// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Search-domain toggle buttons for chat, diff, and browser find.
import React from "react";

import {
  localConversationRouteScope,
  reviewSourceWorkspaceRootSignal,
  useScope,
  useSignalValue,
} from "../../conversations/local-conversation-page-runtime";
import { ReviewPanelIcon } from "../../app-shell/thread-app-shell-chrome/icons";
import { BrowserWindowIcon } from "../../icons/browser-window-icon";
import { DocumentSearchIcon } from "../../icons/document-search-icon";
import { Button } from "../../ui/button";
import { useIntl } from "../../vendor/react-intl";
import {
  findActiveDomainAtom,
  findBrowserTargetAtom,
  findQueryAtom,
  type ThreadFindBrowserTarget,
  type ThreadFindDomain,
} from "../thread-find-atoms";
import { setThreadFindDomain } from "../thread-find-store";
import { dispatchBrowserFindCommand } from "./browser-commands";
import type { ThreadFindScope } from "./types";

export function ThreadFindDomainToggle() {
  const intl = useIntl();
  const scope = useScope<ThreadFindScope>(localConversationRouteScope);
  const domain = useSignalValue<ThreadFindDomain>(findActiveDomainAtom);
  const query = useSignalValue<string>(findQueryAtom);
  const browserTarget = useSignalValue<ThreadFindBrowserTarget>(
    findBrowserTargetAtom,
  );
  const hasDiffSource = Boolean(
    useSignalValue(reviewSourceWorkspaceRootSignal),
  );

  const setDomain = React.useCallback(
    (nextDomain: ThreadFindDomain) => {
      if (domain === "browser" && nextDomain !== "browser") {
        dispatchBrowserFindCommand(browserTarget, { type: "close-find" });
      }
      setThreadFindDomain(scope, nextDomain);
      if (nextDomain === "browser" && query.length > 0) {
        dispatchBrowserFindCommand(browserTarget, {
          type: "set-find-query",
          query,
        });
      }
    },
    [browserTarget, domain, query, scope],
  );

  return (
    <div className="col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2">
      <Button
        className="-m-0.5 size-6"
        size="icon"
        color={domain === "conversation" ? "ghostActive" : "ghost"}
        uniform
        aria-pressed={domain === "conversation"}
        aria-label={intl.formatMessage({
          id: "codex.threadFindBar.chatFilter",
          defaultMessage: "Search chat",
          description: "Button label to scope find results to chat",
        })}
        onClick={() => setDomain("conversation")}
      >
        <DocumentSearchIcon className="size-4" />
      </Button>
      {hasDiffSource ? (
        <Button
          className="-m-0.5 size-6"
          size="icon"
          color={domain === "diff" ? "ghostActive" : "ghost"}
          uniform
          aria-pressed={domain === "diff"}
          aria-label={intl.formatMessage({
            id: "codex.threadFindBar.diffFilter",
            defaultMessage: "Search diffs",
            description: "Button label to scope find results to diffs",
          })}
          onClick={() => setDomain("diff")}
        >
          <ReviewPanelIcon className="size-4" />
        </Button>
      ) : null}
      {browserTarget != null ? (
        <Button
          className="-m-0.5 size-6"
          size="icon"
          color={domain === "browser" ? "ghostActive" : "ghost"}
          uniform
          aria-pressed={domain === "browser"}
          aria-label={intl.formatMessage({
            id: "codex.threadFindBar.browserFilter",
            defaultMessage: "Search browser page",
            description: "Button label to scope find results to browser page",
          })}
          onClick={() => setDomain("browser")}
        >
          <BrowserWindowIcon className="size-4" />
        </Button>
      ) : null}
    </div>
  );
}
