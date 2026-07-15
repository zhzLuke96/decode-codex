// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Result count label for the restored thread find bar.
import clsx from "clsx";

import { useSignalValue } from "../../conversations/local-conversation-page-runtime";
import { useIntl } from "../../vendor/react-intl";
import {
  findActiveDomainAtom,
  findActiveMatchIndexAtom,
  findBrowserStatusAtom,
  findOpenAtom,
  findResultAtom,
  type ThreadFindBrowserStatus,
  type ThreadFindDomain,
  type ThreadFindResult,
} from "../thread-find-atoms";

export function ThreadFindResultLabel() {
  const intl = useIntl();
  const open = useSignalValue<boolean>(findOpenAtom);
  const domain = useSignalValue<ThreadFindDomain>(findActiveDomainAtom);
  const browserStatus = useSignalValue<ThreadFindBrowserStatus>(
    findBrowserStatusAtom,
  );
  const result = useSignalValue<ThreadFindResult | null>(findResultAtom);
  const activeMatchIndex = useSignalValue<number | null>(
    findActiveMatchIndexAtom,
  );
  const matches =
    domain === "browser" ? browserStatus.matches : (result?.totalMatches ?? 0);
  const active =
    domain === "browser"
      ? browserStatus.activeMatchOrdinal
      : activeMatchIndex == null
        ? matches > 0
          ? 1
          : 0
        : activeMatchIndex + 1;
  const label =
    open && matches === 0
      ? intl.formatMessage({
          id: "codex.threadFindBar.noResults",
          defaultMessage: "0 results",
          description: "Find-in-thread label when there are no matches",
        })
      : open
        ? intl.formatMessage(
            result?.isCapped
              ? {
                  id: "codex.threadFindBar.results.capped",
                  defaultMessage: "{active} / {matches}+ results",
                  description:
                    "Find-in-thread label showing the active match index when matches are capped",
                }
              : {
                  id: "codex.threadFindBar.results",
                  defaultMessage: "{active} / {matches} results",
                  description:
                    "Find-in-thread label showing the active match index",
                },
            { active, matches },
          )
        : null;

  return (
    <span
      className={clsx(
        "pointer-events-none col-[1/4] row-[2] min-w-0 px-4 text-right text-base leading-6 text-token-description-foreground transition-[max-height,opacity,padding,translate] duration-200 ease-out",
        open
          ? "max-h-9 translate-y-0 py-2 opacity-100"
          : "max-h-0 -translate-y-2 py-0 opacity-0",
      )}
    >
      {label}
    </span>
  );
}
