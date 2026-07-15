// Restored from ref/webview/assets/chunk-QZHKN3VN-C6aDqNWX.js
// ChunkQZHKN3VN chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";

class ImperativeState<TRecords = unknown> {
  public records: TRecords;

  public constructor(public readonly init: () => TRecords) {
    this.records = this.init();
  }

  static {
    chunkAGHRB4JFN(this, "ImperativeState");
  }

  public reset(): void {
    this.records = this.init();
  }
}

export { ImperativeState, ImperativeState as ChunkQZHKN3VN };
