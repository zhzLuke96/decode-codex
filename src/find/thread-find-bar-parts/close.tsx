// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Close button for the restored thread find bar.
import React from "react";

import {
  localConversationRouteScope,
  useScope,
  useSignalValue,
} from "../../conversations/local-conversation-page-runtime";
import { XIcon } from "../../icons/x-icon";
import { Button } from "../../ui/button";
import { useIntl } from "../../vendor/react-intl";
import {
  findActiveDomainAtom,
  findBrowserTargetAtom,
  type ThreadFindBrowserTarget,
  type ThreadFindDomain,
} from "../thread-find-atoms";
import { closeThreadFind } from "../thread-find-store";
import { dispatchBrowserFindCommand } from "./browser-commands";
import type { ThreadFindScope } from "./types";

export function ThreadFindClose() {
  const intl = useIntl();
  const scope = useScope<ThreadFindScope>(localConversationRouteScope);
  const domain = useSignalValue<ThreadFindDomain>(findActiveDomainAtom);
  const browserTarget = useSignalValue<ThreadFindBrowserTarget>(
    findBrowserTargetAtom,
  );
  const label = intl.formatMessage({
    id: "codex.threadFindBar.close",
    defaultMessage: "Close find",
    description: "Button label to close the find bar",
  });

  const onClose = React.useCallback(() => {
    if (domain === "browser") {
      dispatchBrowserFindCommand(browserTarget, { type: "close-find" });
    }
    closeThreadFind(scope);
  }, [browserTarget, domain, scope]);

  return (
    <div className="col-[3/4] row-[1] flex h-[44px] items-center pr-4">
      <div className="mr-2 ml-2 h-4 w-px bg-token-border" />
      <Button
        className="-m-0.5 size-6"
        size="icon"
        color="ghost"
        uniform
        aria-label={label}
        onClick={onClose}
      >
        <XIcon className="size-4 text-token-foreground" />
      </Button>
    </div>
  );
}
