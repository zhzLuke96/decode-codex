// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Previous/next controls for the restored thread find bar.
import React from "react";
import clsx from "clsx";

import {
  localConversationRouteScope,
  useScope,
  useSignalValue,
} from "../../conversations/local-conversation-page-runtime";
import { ChevronIcon } from "../../icons/chevron-icon";
import { Button } from "../../ui/button";
import { useIntl } from "../../vendor/react-intl";
import {
  findActiveDomainAtom,
  findBrowserStatusAtom,
  findBrowserTargetAtom,
  findOpenAtom,
  findResultAtom,
  type ThreadFindBrowserStatus,
  type ThreadFindBrowserTarget,
  type ThreadFindDomain,
  type ThreadFindResult,
} from "../thread-find-atoms";
import {
  goToNextThreadFindMatch,
  goToPreviousThreadFindMatch,
} from "../thread-find-store";
import { dispatchBrowserFindCommand } from "./browser-commands";
import type { ThreadFindScope } from "./types";

export function ThreadFindNavigation() {
  const intl = useIntl();
  const scope = useScope<ThreadFindScope>(localConversationRouteScope);
  const domain = useSignalValue<ThreadFindDomain>(findActiveDomainAtom);
  const result = useSignalValue<ThreadFindResult | null>(findResultAtom);
  const browserStatus = useSignalValue<ThreadFindBrowserStatus>(
    findBrowserStatusAtom,
  );
  const browserTarget = useSignalValue<ThreadFindBrowserTarget>(
    findBrowserTargetAtom,
  );
  const open = useSignalValue<boolean>(findOpenAtom);
  const matches =
    domain === "browser" ? browserStatus.matches : (result?.totalMatches ?? 0);
  const disabled = matches === 0;
  const previousLabel = intl.formatMessage({
    id: "codex.threadFindBar.previousResult",
    defaultMessage: "Previous result",
    description: "Button label to move to the previous find match",
  });
  const nextLabel = intl.formatMessage({
    id: "codex.threadFindBar.nextResult",
    defaultMessage: "Next result",
    description: "Button label to move to the next find match",
  });
  const navigate = React.useCallback(
    (direction: "next" | "previous") => {
      if (domain === "browser") {
        dispatchBrowserFindCommand(browserTarget, {
          type: direction === "next" ? "find-next" : "find-previous",
        });
        return;
      }
      if (direction === "next") goToNextThreadFindMatch(scope);
      else goToPreviousThreadFindMatch(scope);
    },
    [browserTarget, domain, scope],
  );

  return (
    <div
      className={clsx(
        "col-[1/4] row-[2] flex min-w-0 items-center border-token-border px-4 text-base leading-6 transition-[border-width,max-height,opacity,padding,translate] duration-200 ease-out",
        open
          ? "max-h-9 translate-y-0 border-t py-2 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0",
      )}
    >
      <div className="ml-auto flex items-center gap-3">
        <Button
          className="h-4 w-4 p-0 text-token-description-foreground"
          size="icon"
          color="ghost"
          uniform
          disabled={disabled}
          aria-label={previousLabel}
          onClick={() => navigate("previous")}
        >
          <ChevronIcon className="size-4" />
        </Button>
        <Button
          className="h-4 w-4 p-0 text-token-description-foreground"
          size="icon"
          color="ghost"
          uniform
          disabled={disabled}
          aria-label={nextLabel}
          onClick={() => navigate("next")}
        >
          <ChevronIcon className="size-4 rotate-180" />
        </Button>
      </div>
    </div>
  );
}
