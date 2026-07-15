// Restored from ref/webview/assets/hash-code-Yqiujxc9.js
// hash-code-Yqiujxc9 chunk restored from the Codex webview bundle.
export function hashCode64(input: string): string {
  let hash = 14695981039346656037n;
  for (const char of input) {
    hash ^= BigInt(char.codePointAt(0) ?? 0);
    hash = BigInt.asUintN(64, hash * 1099511628211n);
  }
  return hash.toString(16).padStart(16, "0").slice(0, 16);
}

export function hashCode(input: string): string {
  let hash = 5381;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 33 + input.charCodeAt(index)) % 4294967296;
  }
  return hash.toString(36);
}
