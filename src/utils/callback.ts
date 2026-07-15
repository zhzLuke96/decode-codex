// Restored from ref/webview/assets/callback-BhdA_NIt.js
// callback-BhdA_NIt chunk restored from the Codex webview bundle.
type CallbackContext = {
  log?: (
    level: string,
    message: string,
    metadata?: Record<string, unknown>,
  ) => void;
  stats?: {
    increment: (name: string) => void;
  };
};

export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(Error("Promise timed out"));
    }, timeoutMs);
    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch(reject);
  });
}

export function runDelayedCallback<TContext extends CallbackContext>(
  context: TContext,
  callback: (context: TContext) => unknown | Promise<unknown>,
  delayMs: number,
): Promise<TContext> {
  const invoke = () => {
    try {
      return Promise.resolve(callback(context));
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return delay(delayMs)
    .then(() => withTimeout(invoke(), 1000))
    .catch((error) => {
      context?.log?.("warn", "Callback Error", { error });
      context?.stats?.increment("callback_error");
    })
    .then(() => context);
}

function delay(timeoutMs: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeoutMs);
  });
}
