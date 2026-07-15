// Restored from ref/webview/assets/parse-directives-BWfnLkkG.js
// Prompt-link and lightweight directive parsing helpers.
type PromptLinkMatch = {
  end: number;
  label: string;
  path: string;
  start: number;
};
export type ParsedDirective = {
  attributes: Record<string, string>;
  name: string;
};
type SentryCapture = (
  event: unknown,
  hint?: unknown,
) => string | null | undefined;

const sentryEventDataKey = Symbol("rendererSentryEventData");
const directiveLinePattern = /^::[a-zA-Z0-9-]+.*$/gm;
let sentryCapture: SentryCapture | null = null;

function titleCaseWord(word: string, index: number): string {
  const upper = word.toUpperCase();
  if (/^[A-Z0-9]{2,}s?$/.test(word)) return word;
  if (index > 0 && ["and", "or", "to", "up", "with"].includes(word))
    return word;
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
}

export function parseDirectivesA(value: string): string {
  const displayName = value.split(":").pop() ?? value;
  return displayName
    .replace(/[_-]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word, index) => titleCaseWord(word.toLowerCase(), index))
    .join(" ");
}

export const formatMentionDisplayName = parseDirectivesA;
export const _parseDirectivesA = parseDirectivesA;

function encodePromptLinkLabel(label: string): string {
  return label
    .replaceAll("\\", "\\\\")
    .replaceAll("](", "]\\(")
    .replaceAll("]", "\\]");
}

export function parseDirectivesL(href: string): string {
  return href.replaceAll("\\", "\\\\").replaceAll(")", "\\)");
}

export function parseDirectivesM(label: string, href: string): string {
  return `[${encodePromptLinkLabel(label)}](${parseDirectivesL(href)})`;
}

export const formatDirectiveMention = parseDirectivesM;

export function parseDirectivesG(label: string): string {
  return label
    .replaceAll("\\]\\(", "](")
    .replaceAll("\\]", "]")
    .replaceAll("\\\\", "\\");
}

export const decodePromptLinkLabel = parseDirectivesG;

export function parseDirectivesUnderscore(path: string): string {
  return path.replaceAll("\\)", ")").replaceAll("\\\\", "\\");
}

export const decodePromptLinkPath = parseDirectivesUnderscore;

export function parseDirectivesU(
  text: string,
  startOffset: number = 0,
): PromptLinkMatch | null {
  let offset = startOffset;
  scanLinks: while (offset < text.length) {
    const labelStart = text.indexOf("[", offset);
    if (labelStart === -1) return null;
    let labelEnd = labelStart + 1;
    while (labelEnd < text.length) {
      const current = text[labelEnd];
      const next = text[labelEnd + 1];
      if (current === "\n" || current === "\r") {
        offset = labelEnd + 1;
        continue scanLinks;
      }
      if (
        current === "\\" &&
        (next === "\\" || (next === "]" && text[labelEnd + 2] !== "("))
      ) {
        labelEnd += 2;
        continue;
      }
      if (current === "]") break;
      labelEnd += 1;
    }
    if (labelEnd >= text.length) return null;
    if (labelEnd === labelStart + 1 || text[labelEnd + 1] !== "(") {
      offset = labelEnd + 1;
      continue;
    }
    let hrefEnd = labelEnd + 2;
    while (hrefEnd < text.length) {
      const current = text[hrefEnd];
      const next = text[hrefEnd + 1];
      if (current === "\n" || current === "\r") {
        offset = hrefEnd + 1;
        continue scanLinks;
      }
      if (current === "\\" && (next === "\n" || next === "\r")) {
        offset = hrefEnd + 2;
        continue scanLinks;
      }
      if (current === "\\" && next != null) {
        hrefEnd += 2;
        continue;
      }
      if (current === ")") {
        if (hrefEnd === labelEnd + 2) {
          offset = hrefEnd + 1;
          continue scanLinks;
        }
        return {
          end: hrefEnd + 1,
          label: text.slice(labelStart + 1, labelEnd),
          path: text.slice(labelEnd + 2, hrefEnd),
          start: labelStart,
        };
      }
      hrefEnd += 1;
    }
    return null;
  }
  return null;
}

export const scanMarkdownPromptLink = parseDirectivesU;

export function parseDirectivesN(markdown: string): string {
  return markdown
    .replace(directiveLinePattern, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseAttributes(rawAttributes: string): Record<string, string> {
  const attributes: Record<string, string> = {};
  const attributePattern =
    /([A-Za-z0-9_-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s]+)))?/g;
  let match: RegExpExecArray | null;
  while ((match = attributePattern.exec(rawAttributes)) != null) {
    attributes[match[1]] = match[2] ?? match[3] ?? match[4] ?? "true";
  }
  return attributes;
}

export function parseDirectivesT(
  markdown: string,
  options: { lineStartNames?: string[] } = {},
): ParsedDirective[] {
  const allowedNames =
    options.lineStartNames == null ? null : new Set(options.lineStartNames);
  const directives: ParsedDirective[] = [];
  for (const line of markdown.split(/\r?\n/)) {
    const match = line.match(/^\s*:{1,3}([A-Za-z][A-Za-z0-9_-]*)\s*(.*)$/);
    if (!match) continue;
    if (allowedNames != null && !allowedNames.has(match[1])) continue;
    directives.push({
      name: match[1],
      attributes: parseAttributes(match[2] ?? ""),
    });
  }
  return directives;
}

export const parseInlineDirectiveTags = parseDirectivesT;

export function parseDirectivesD(
  error: Error,
  boundary: {
    boundaryName: string;
    componentStack?: string;
    transformStack?: (stack?: string) => string | undefined;
  },
): {
  error: Error;
  extra: Record<string, unknown>;
  tags: Record<string, string>;
} {
  const clonedError = Error(error.message);
  clonedError.name = error.name;
  const stack =
    boundary.transformStack?.(error.stack) ?? error.stack ?? clonedError.stack;
  if (stack != null) clonedError.stack = stack;
  return {
    error: clonedError,
    extra: {
      componentStack: boundary.componentStack,
    },
    tags: {
      errorBoundary: boundary.boundaryName,
    },
  };
}

export function parseDirectivesE<T extends Record<string, unknown>>(
  event: T,
  hint: { originalException?: unknown },
): T {
  const extraData =
    typeof hint.originalException === "object" && hint.originalException != null
      ? ((hint.originalException as Record<symbol, unknown>)[
          sentryEventDataKey
        ] as Partial<T> | undefined)
      : undefined;
  return extraData == null ? event : ({ ...event, ...extraData } as T);
}

export function parseDirectivesK(capture: SentryCapture): void {
  sentryCapture = capture;
}

export function parseDirectivesO(event: unknown, hint?: unknown): string {
  try {
    return sentryCapture?.(event, hint) ?? "";
  } catch {
    return "";
  }
}

export function parseDirectivesC(value: string): boolean {
  return /\S+\.[A-Za-z0-9]+(?::\d+)?/.test(value.trim());
}

export const parseDirectivesF = (element: Element): string | null => {
  const href = element.getAttribute("data-prompt-link-href");
  const label = element.getAttribute("data-prompt-link-label");
  return href == null || label == null ? null : parseDirectivesM(label, href);
};

export const parseDirectivesH = (markdown: string): string =>
  markdown.replaceAll("](codex-text-link://", "](");

export const parseDirectivesP = ({
  fsPath,
  path,
}: {
  fsPath?: string;
  path: string;
}): string =>
  /[\\/]$/.test(path) && fsPath != null && !/[\\/]$/.test(fsPath)
    ? `${fsPath}/`
    : (fsPath ?? path);
