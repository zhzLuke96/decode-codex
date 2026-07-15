// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Input field for the restored thread find bar.
import React from "react";

import {
  localConversationRouteScope,
  useScope,
  useSignalValue,
} from "../../conversations/local-conversation-page-runtime";
import { DocumentSearchIcon } from "../../icons/document-search-icon";
import { useIntl } from "../../vendor/react-intl";
import {
  findActiveDomainAtom,
  findBrowserTargetAtom,
  findLoadingAtom,
  findQueryAtom,
  type ThreadFindBrowserTarget,
  type ThreadFindDomain,
} from "../thread-find-atoms";
import {
  closeThreadFind,
  goToNextThreadFindMatch,
  goToPreviousThreadFindMatch,
  setThreadFindQuery,
} from "../thread-find-store";
import { dispatchBrowserFindCommand } from "./browser-commands";
import type { ThreadFindScope } from "./types";

type ThreadFindInputProps = {
  autoFocus?: boolean;
};

export function ThreadFindInput({ autoFocus = true }: ThreadFindInputProps) {
  const intl = useIntl();
  const scope = useScope<ThreadFindScope>(localConversationRouteScope);
  const domain = useSignalValue<ThreadFindDomain>(findActiveDomainAtom);
  const query = useSignalValue<string>(findQueryAtom);
  const isLoading = useSignalValue<boolean>(findLoadingAtom);
  const browserTarget = useSignalValue<ThreadFindBrowserTarget>(
    findBrowserTargetAtom,
  );
  const placeholder =
    domain === "browser"
      ? intl.formatMessage({
          id: "codex.threadFindBar.placeholder.browser",
          defaultMessage: "Find in page...",
          description: "Placeholder for the browser page find input",
        })
      : domain === "diff"
        ? intl.formatMessage({
            id: "codex.threadFindBar.placeholder.review",
            defaultMessage: "Search diff...",
            description: "Placeholder for the review find input",
          })
        : intl.formatMessage({
            id: "codex.threadFindBar.placeholder",
            defaultMessage: "Search chat...",
            description: "Placeholder for the thread find input",
          });
  const label =
    domain === "browser"
      ? intl.formatMessage({
          id: "codex.threadFindBar.label.browser",
          defaultMessage: "Find in page",
          description: "Accessible label for the browser page find input",
        })
      : intl.formatMessage({
          id: "codex.threadFindBar.label",
          defaultMessage: "Find in chat",
          description: "Accessible label for the thread find input",
        });

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextQuery = event.target.value;
      setThreadFindQuery(scope, nextQuery);
      if (domain === "browser") {
        dispatchBrowserFindCommand(browserTarget, {
          type: "set-find-query",
          query: nextQuery,
        });
      }
    },
    [browserTarget, domain, scope],
  );

  const onSubmit = React.useCallback(
    (shiftKey: boolean) => {
      if (domain === "browser") {
        dispatchBrowserFindCommand(browserTarget, {
          type: shiftKey ? "find-previous" : "find-next",
        });
        return;
      }
      if (shiftKey) goToPreviousThreadFindMatch(scope);
      else goToNextThreadFindMatch(scope);
    },
    [browserTarget, domain, scope],
  );

  const onClose = React.useCallback(() => {
    if (domain === "browser") {
      dispatchBrowserFindCommand(browserTarget, { type: "close-find" });
    }
    closeThreadFind(scope);
  }, [browserTarget, domain, scope]);

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSubmit(event.shiftKey);
      } else if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    },
    [onClose, onSubmit],
  );

  return (
    <div className="col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 pl-4">
      {isLoading ? (
        <span
          aria-hidden
          className="size-4 animate-spin rounded-full border-2 border-token-foreground/30 border-t-token-foreground"
        />
      ) : (
        <DocumentSearchIcon className="size-4 text-token-foreground" />
      )}
      <label className="sr-only" htmlFor="content-search-input">
        {label}
      </label>
      <input
        id="content-search-input"
        type="text"
        autoFocus={autoFocus}
        value={query}
        aria-busy={isLoading || undefined}
        aria-label={label}
        placeholder={placeholder}
        className="h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
