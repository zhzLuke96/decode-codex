// Restored from ref/webview/assets/browser-DKmdu5pM.js
// browser-DKmdu5pM chunk restored from the Codex webview bundle.
type TimerHandle = ReturnType<typeof setTimeout>;
let cachedSetTimeout: typeof setTimeout | undefined;
let cachedClearTimeout: typeof clearTimeout | undefined;
function defaultSetTimeout(): never {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout(): never {
  throw new Error("clearTimeout has not been defined");
}
function getSetTimeout(): typeof setTimeout {
  if (!cachedSetTimeout) {
    cachedSetTimeout =
      typeof setTimeout === "function" ? setTimeout : defaultSetTimeout;
  }
  return cachedSetTimeout;
}
function getClearTimeout(): typeof clearTimeout {
  if (!cachedClearTimeout) {
    cachedClearTimeout =
      typeof clearTimeout === "function" ? clearTimeout : defaultClearTimeout;
  }
  return cachedClearTimeout;
}
class NextTickItem {
  constructor(
    private readonly callback: (...args: unknown[]) => void,
    private readonly args: unknown[],
  ) {}
  run(): void {
    this.callback(...this.args);
  }
}
let queue: NextTickItem[] = [];
let draining = false;
let currentQueue: NextTickItem[] | null = null;
let queueIndex = -1;
function cleanUpNextTick(): void {
  if (!draining || !currentQueue) return;
  draining = false;
  if (currentQueue.length > 0) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length > 0) drainQueue();
}
function drainQueue(): void {
  if (draining) return;
  const timeout = getSetTimeout()(cleanUpNextTick, 0);
  draining = true;
  let length = queue.length;
  while (length > 0) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < length) {
      currentQueue?.[queueIndex]?.run();
    }
    queueIndex = -1;
    length = queue.length;
  }
  currentQueue = null;
  draining = false;
  getClearTimeout()(timeout as TimerHandle);
}
function noop(): void {}
const browserProcess = {
  nextTick(callback: (...args: unknown[]) => void, ...args: unknown[]): void {
    queue.push(new NextTickItem(callback, args));
    if (queue.length === 1 && !draining) getSetTimeout()(drainQueue, 0);
  },
  title: "browser",
  browser: true,
  env: {},
  argv: [],
  version: "",
  versions: {},
  on: noop,
  addListener: noop,
  once: noop,
  off: noop,
  removeListener: noop,
  removeAllListeners: noop,
  emit: noop,
  prependListener: noop,
  prependOnceListener: noop,
  listeners(): unknown[] {
    return [];
  },
  binding(): never {
    throw new Error("process.binding is not supported");
  },
  cwd(): string {
    return "/";
  },
  chdir(): never {
    throw new Error("process.chdir is not supported");
  },
  umask(): number {
    return 0;
  },
};
export default browserProcess;
