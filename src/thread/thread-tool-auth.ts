// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Resolves the auth method used when starting a thread's dynamic tools, with a
// timeout guard around the (remote-host) app-server auth lookup.
import { worktreeNewThreadOrchestratorCompatSlotUpperBLowerC as fetchThreadToolAuthMethod } from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

const THREAD_TOOL_AUTH_TIMEOUT_MS = 1000;

type ThreadToolAuthMethod = string | null;

interface ThreadAuthState {
  authMethod: ThreadToolAuthMethod;
  isLoading: boolean;
}

interface ResolveThreadToolAuthArgs {
  auth: ThreadAuthState;
  hostId: string;
  scope: unknown;
}

interface ThreadToolAuthResult {
  authMethod: ThreadToolAuthMethod;
  isAuthLoading: boolean;
}

export async function resolveThreadToolAuth({
  auth,
  hostId,
  scope,
}: ResolveThreadToolAuthArgs): Promise<ThreadToolAuthResult> {
  if (hostId === "local") {
    return { authMethod: auth.authMethod, isAuthLoading: auth.isLoading };
  }
  try {
    return {
      authMethod: await loadThreadToolAuthMethod(scope, hostId),
      isAuthLoading: false,
    };
  } catch {
    return { authMethod: null, isAuthLoading: true };
  }
}

function loadThreadToolAuthMethod(
  scope: unknown,
  hostId: string,
): Promise<ThreadToolAuthMethod> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("Timed out loading thread tool auth."));
    }, THREAD_TOOL_AUTH_TIMEOUT_MS);
    fetchThreadToolAuthMethod(scope, hostId)
      .then(resolve, reject)
      .finally(() => {
        clearTimeout(timeoutId);
      });
  });
}
