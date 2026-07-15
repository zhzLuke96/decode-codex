// Restored from ref/.vite/build/worker.js
// TOML subset parser for local-environment config files.

import { isRecord } from "./git-worker-local-environment-io";

export function parseTomlDocument(text: string): Record<string, unknown> {
  const root: Record<string, unknown> = {};
  let currentTable = root;
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);

  for (let index = 0; index < lines.length; index++) {
    const rawLine = lines[index] ?? "";
    const uncommentedLine = stripTomlComment(rawLine).trim();
    if (uncommentedLine.length === 0) continue;

    if (uncommentedLine.startsWith("[[") && uncommentedLine.endsWith("]]")) {
      const tablePath = parseTomlKeyPath(uncommentedLine.slice(2, -2).trim());
      currentTable = enterTomlArrayTable(root, tablePath);
      continue;
    }

    if (uncommentedLine.startsWith("[") && uncommentedLine.endsWith("]")) {
      const tablePath = parseTomlKeyPath(uncommentedLine.slice(1, -1).trim());
      currentTable = enterTomlTable(root, tablePath);
      continue;
    }

    const equalsIndex = findTomlEquals(rawLine);
    if (equalsIndex < 0) {
      throw Error(`Expected TOML key/value assignment on line ${index + 1}`);
    }

    const keyPath = parseTomlKeyPath(rawLine.slice(0, equalsIndex).trim());
    const rawValue = rawLine.slice(equalsIndex + 1).trimStart();
    let value: unknown;
    if (rawValue.startsWith("'''") || rawValue.startsWith('"""')) {
      const result = readTomlMultilineString(rawValue, lines, index);
      value = result.value;
      index = result.lineIndex;
    } else {
      value = parseTomlValue(stripTomlComment(rawValue).trim());
    }
    setTomlValue(currentTable, keyPath, value);
  }

  return root;
}

function readTomlMultilineString(
  rawValue: string,
  lines: string[],
  startLineIndex: number,
): { value: string; lineIndex: number } {
  const delimiter = rawValue.startsWith("'''") ? "'''" : '"""';
  let content = "";
  let current = rawValue.slice(3);
  for (let lineIndex = startLineIndex; lineIndex < lines.length; lineIndex++) {
    const closingIndex = current.indexOf(delimiter);
    if (closingIndex >= 0) {
      content += current.slice(0, closingIndex);
      if (content.startsWith("\n")) content = content.slice(1);
      return {
        value: delimiter === '"""' ? unescapeBasicTomlString(content) : content,
        lineIndex,
      };
    }
    content += current;
    if (lineIndex + 1 >= lines.length) break;
    content += "\n";
    current = lines[lineIndex + 1] ?? "";
  }
  throw Error("Unterminated TOML multiline string");
}

function parseTomlValue(rawValue: string): unknown {
  if (rawValue.startsWith("'") && rawValue.endsWith("'")) {
    return rawValue.slice(1, -1);
  }
  if (rawValue.startsWith('"') && rawValue.endsWith('"')) {
    return unescapeBasicTomlString(rawValue.slice(1, -1));
  }
  if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
    return splitTomlArray(rawValue.slice(1, -1)).map(parseTomlValue);
  }
  if (rawValue === "true") return true;
  if (rawValue === "false") return false;
  if (/^[+-]?\d+$/.test(rawValue)) return Number.parseInt(rawValue, 10);
  if (/^[+-]?(?:\d+\.\d*|\d*\.\d+)(?:[eE][+-]?\d+)?$/.test(rawValue)) {
    return Number.parseFloat(rawValue);
  }
  return rawValue;
}

function unescapeBasicTomlString(value: string): string {
  return value
    .replace(/\\u([0-9a-fA-F]{4})/g, (_match, code: string) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    )
    .replace(/\\U([0-9a-fA-F]{8})/g, (_match, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/\\([btnfr"\\])/g, (_match, escape: string) => {
      switch (escape) {
        case "b":
          return "\b";
        case "f":
          return "\f";
        case "n":
          return "\n";
        case "r":
          return "\r";
        case "t":
          return "\t";
        default:
          return escape;
      }
    });
}

function splitTomlArray(value: string): string[] {
  const parts: string[] = [];
  let current = "";
  let quote: "'" | '"' | null = null;
  let nestedBrackets = 0;
  let escaped = false;
  for (const char of value) {
    if (quote === '"') {
      current += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }
    if (quote === "'") {
      current += char;
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }
    if (char === "[") nestedBrackets++;
    if (char === "]") nestedBrackets--;
    if (char === "," && nestedBrackets === 0) {
      if (current.trim().length > 0) parts.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim().length > 0) parts.push(current.trim());
  return parts;
}

function stripTomlComment(line: string): string {
  let quote: "'" | '"' | null = null;
  let escaped = false;
  for (let index = 0; index < line.length; index++) {
    const char = line[index];
    const nextTwo = line.slice(index, index + 3);
    if (quote == null && (nextTwo === "'''" || nextTwo === '"""')) {
      return line;
    }
    if (quote === '"') {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }
    if (quote === "'") {
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === "#") return line.slice(0, index);
  }
  return line;
}

function findTomlEquals(line: string): number {
  let quote: "'" | '"' | null = null;
  let escaped = false;
  for (let index = 0; index < line.length; index++) {
    const char = line[index];
    if (quote === '"') {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }
    if (quote === "'") {
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === "=") return index;
  }
  return -1;
}

function parseTomlKeyPath(keyPath: string): string[] {
  const parts: string[] = [];
  let current = "";
  let quote: "'" | '"' | null = null;
  let escaped = false;
  for (const char of keyPath) {
    if (quote === '"') {
      current += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }
    if (quote === "'") {
      current += char;
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }
    if (char === ".") {
      parts.push(unquoteTomlKey(current.trim()));
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim().length > 0) parts.push(unquoteTomlKey(current.trim()));
  if (parts.length === 0) throw Error("TOML key path is empty");
  return parts;
}

function unquoteTomlKey(key: string): string {
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    return key.startsWith('"')
      ? unescapeBasicTomlString(key.slice(1, -1))
      : key.slice(1, -1);
  }
  return key;
}

function enterTomlTable(
  root: Record<string, unknown>,
  path: string[],
): Record<string, unknown> {
  let table = root;
  for (const part of path) {
    const next = table[part];
    if (isRecord(next)) {
      table = next;
    } else if (next == null) {
      const created: Record<string, unknown> = {};
      table[part] = created;
      table = created;
    } else {
      throw Error(`TOML table '${path.join(".")}' conflicts with a value`);
    }
  }
  return table;
}

function enterTomlArrayTable(
  root: Record<string, unknown>,
  path: string[],
): Record<string, unknown> {
  const parent = enterTomlTable(root, path.slice(0, -1));
  const key = path[path.length - 1];
  if (key == null) throw Error("TOML array table path is empty");
  let array = parent[key];
  if (array == null) {
    array = [];
    parent[key] = array;
  }
  if (!Array.isArray(array)) {
    throw Error(`TOML array table '${path.join(".")}' conflicts with a value`);
  }
  const table: Record<string, unknown> = {};
  array.push(table);
  return table;
}

function setTomlValue(
  table: Record<string, unknown>,
  path: string[],
  value: unknown,
): void {
  let target = table;
  for (const part of path.slice(0, -1)) {
    const next = target[part];
    if (isRecord(next)) {
      target = next;
      continue;
    }
    if (next != null) {
      throw Error(`TOML key '${path.join(".")}' conflicts with a value`);
    }
    const created: Record<string, unknown> = {};
    target[part] = created;
    target = created;
  }
  const key = path[path.length - 1];
  if (key == null) throw Error("TOML key path is empty");
  target[key] = value;
}
