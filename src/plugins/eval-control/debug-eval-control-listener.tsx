// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Host round-trip for the dev eval-control harness: binds the current route
// scope to the eval-control bridge and answers "debug-run-eval-control-request"
// host messages with a "debug-run-eval-control-response".

import { useEffect } from "react";
import {
  debugEvalControlBridge,
  useScope,
} from "../../boundaries/onboarding-commons-externals.facade";
import { routeScope } from "../../boundaries/thread-scope.facade";
import { useHostMessageSubscription } from "../../runtime/app-main-host-runtime";
import { runEvalControlAction } from "./run-eval-control-action";

export function DebugEvalControlListener(): null {
  const scope = useScope(routeScope);

  useEffect(() => debugEvalControlBridge.bindScope(scope), [scope]);

  useHostMessageSubscription(
    "debug-run-eval-control-request",
    (request, dispatchMessage) => {
      runEvalControlAction(request.action, { scope }).then(
        (result) => {
          dispatchMessage("debug-run-eval-control-response", {
            requestId: request.requestId,
            sourceWebContentsId: request.sourceWebContentsId,
            ok: true,
            result,
          });
        },
        (error: unknown) => {
          dispatchMessage("debug-run-eval-control-response", {
            requestId: request.requestId,
            sourceWebContentsId: request.sourceWebContentsId,
            ok: false,
            errorMessage:
              error instanceof Error ? error.message : String(error),
          });
        },
      );
    },
    [scope],
  );

  return null;
}
