// Restored from ref/webview/assets/chunk-QZHKN3VN-Djc2hI-1.js
// Also covers current ref asset ref/webview/assets/chunk-QZHKN3VN-CjmxHyf9.js.
// Imperative state helper restored from the Codex webview bundle.
export class ImperativeState<TRecords = unknown> {
  public records: TRecords;
  public constructor(public readonly init: () => TRecords) {
    this.records = this.init();
  }
  public reset(): void {
    this.records = this.init();
  }
}

export function initChunkQZHKN3VN(): void {}
