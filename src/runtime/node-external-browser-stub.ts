// Restored from ref/webview/assets/__vite-browser-external-APFuKv3p.js
// Browser-only placeholder for Node external imports guarded by runtime checks.

type WritableLike = {
  on(eventName: string, callback: (error: unknown) => void): void;
  end(chunk: string, encoding: string, callback: () => void): void;
};

const writableStub: WritableLike = {
  on() {},
  end(_chunk: string, _encoding: string, callback: () => void) {
    callback();
  },
};

const nodeExternalBrowserStub = {
  createRequire() {
    return () => {
      throw Error("require not supported in the browser");
    };
  },
  execPath: "",
  stderr: writableStub,
  stdout: writableStub,
  versions: {
    node: "0.0.0",
  },
};

export default nodeExternalBrowserStub;
