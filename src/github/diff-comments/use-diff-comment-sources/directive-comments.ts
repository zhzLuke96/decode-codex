// Restored from ref/webview/assets/use-diff-comment-sources-K8MB00rv.js
// Converts `::code-comment` directives in assistant messages into diff comment attachments.
import { getWorkspaceRelativePath } from "../../../boundaries/use-host-config.facade";
import { yn as directiveLineStartName } from "../../../boundaries/thread-context-inputs.facade";
import {
  zodNumberSchema,
  zodObjectSchema,
  zodPreprocessSchema,
  zodStringSchema,
} from "../../../boundaries/src-l0hb-mz-p";
import { parseDirectivesT as parseDirectives } from "../../../utils/parse-directives";
import type { DiffComment } from "./types";
const priorityTitlePattern = /^(?:<sub>\s*)*\[(p\d)\](?:\s*<\/sub>)*\s*(.*)$/i;
function parseFiniteNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) return undefined;
    const numericValue = Number(trimmedValue);
    if (Number.isFinite(numericValue)) return numericValue;
  }
}
function parseInteger(value: unknown): number | undefined {
  const numericValue = parseFiniteNumber(value);
  return numericValue == null ? undefined : Math.trunc(numericValue);
}
const optionalFiniteNumber = zodPreprocessSchema(
  (value: unknown) => parseFiniteNumber(value),
  zodNumberSchema().finite(),
).optional();
const optionalInteger = zodPreprocessSchema(
  (value: unknown) => parseInteger(value),
  zodNumberSchema().int(),
).optional();
const codeCommentDirectiveSchema = zodObjectSchema({
  title: zodStringSchema().trim().min(1),
  body: zodStringSchema().trim().min(1),
  file: zodStringSchema().trim().min(1),
  priority: optionalInteger,
  confidence: optionalFiniteNumber,
  start: optionalInteger,
  end: optionalInteger,
});
function parsePriorityPrefix(title: string): {
  priority: string | null;
  rest: string;
} {
  const match = title.match(priorityTitlePattern);
  return match
    ? {
        priority: match[1].toUpperCase(),
        rest: match[2].trim(),
      }
    : {
        priority: null,
        rest: title,
      };
}
function addPriorityPrefix(title: string, priority?: number): string {
  return priority != null && parsePriorityPrefix(title).priority == null
    ? `[P${priority}] ${title}`
    : title;
}
function joinCommentTitleAndBody({
  body,
  title,
}: {
  body: string;
  title: string;
}): string {
  const trimmedTitle = title.trim();
  const trimmedBody = body.trim();
  return trimmedTitle.length === 0
    ? trimmedBody
    : trimmedBody.length === 0
      ? trimmedTitle
      : `${trimmedTitle}\n\n${trimmedBody}`;
}
function directiveToDiffComment(
  directiveAttributes: unknown,
  workspaceRoot: string | null | undefined,
): DiffComment | null {
  const parseResult = codeCommentDirectiveSchema.safeParse(
    directiveAttributes ?? {},
  );
  if (!parseResult.success) return null;
  const { title, body, file, priority, start, end } = parseResult.data;
  const startLine = Math.max(1, start ?? 1);
  const requestedEndLine = Math.max(1, end ?? startLine);
  const endLine = requestedEndLine < startLine ? startLine : requestedEndLine;
  const text = joinCommentTitleAndBody({
    title: addPriorityPrefix(title, priority),
    body,
  });
  return text.length === 0
    ? null
    : {
        content: [
          {
            content_type: "text",
            text,
          },
        ],
        position: {
          side: "right",
          path: getWorkspaceRelativePath(file, workspaceRoot ?? undefined),
          line: endLine,
          ...(endLine === startLine
            ? {}
            : {
                start_line: startLine,
              }),
        },
      };
}
export function parseCodeCommentDirectives(
  messageText: string,
  workspaceRoot?: string | null,
): DiffComment[] {
  const comments: DiffComment[] = [];
  for (const directive of parseDirectives(messageText, {
    lineStartNames: [directiveLineStartName],
  })) {
    if (directive.name !== "code-comment") continue;
    const comment = directiveToDiffComment(directive.attributes, workspaceRoot);
    if (comment != null) comments.push(comment);
  }
  return comments;
}
