// Restored from ref/webview/assets/parsePatchFiles-Dm7PKlLE.js
// parsePatchFiles-Dm7PKlLE chunk restored from the Codex webview bundle.
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder("utf-8", { ignoreBOM: true });
const surrogatePairPattern = /[\uD800-\uDFFF]/;
const initialEncodingBufferSize = 1024;
let encodingBuffer = new Uint8Array(initialEncodingBufferSize);

function trimTrailingLineEnding(value: string) {
  let endIndex = value.length;
  if (value.charCodeAt(endIndex - 1) === 10) {
    endIndex -= 1;
    if (value.charCodeAt(endIndex - 1) === 13) endIndex -= 1;
  }
  return value.slice(0, endIndex);
}

function resetEncodingBuffer() {
  if (encodingBuffer.length !== initialEncodingBufferSize) {
    encodingBuffer = new Uint8Array(initialEncodingBufferSize);
  }
}

function normalizeUtf8(value: string) {
  if (value.length === 0) return value;
  if (surrogatePairPattern.test(value))
    return JSON.parse(JSON.stringify(value));
  const requiredLength = value.length * 3;
  if (encodingBuffer.length < requiredLength) {
    encodingBuffer = new Uint8Array(requiredLength);
  }
  const { written } = textEncoder.encodeInto(value, encodingBuffer);
  return textDecoder.decode(encodingBuffer.subarray(0, written));
}

function normalizeOptionalUtf8(value?: string) {
  return value == null ? value : normalizeUtf8(value);
}

export {
  normalizeOptionalUtf8,
  normalizeUtf8,
  resetEncodingBuffer,
  trimTrailingLineEnding,
};
