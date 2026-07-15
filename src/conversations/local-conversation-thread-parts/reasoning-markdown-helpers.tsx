// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Markdown helper utilities used by the restored reasoning disclosure item.

import * as React from "react";
import clsx from "clsx";
import {
  mdastToText,
  parseMarkdown,
  stringifyMarkdown,
} from "../../boundaries/onboarding-commons-externals.facade";

interface OrderedListGroupData {
  start: number;
  digits: number;
  items: React.ReactNode[];
}

export function orderedListPadding(count: number): string {
  return count <= 1 || count === 2
    ? "pl-8"
    : count === 3
      ? "pl-10"
      : count === 4
        ? "pl-12"
        : "pl-14";
}

export function groupOrderedListItems(
  children: React.ReactNode[],
  start: number = 1,
): OrderedListGroupData[] {
  const elements = children.filter((item) => React.isValidElement(item));
  const groups: OrderedListGroupData[] = [];
  elements.forEach((item, index) => {
    const position = start + index;
    const digits = String(position).length;
    const lastGroup = groups[groups.length - 1];
    if (!lastGroup || lastGroup.digits !== digits) {
      groups.push({ start: position, digits, items: [item] });
    } else {
      lastGroup.items.push(item);
    }
  });
  return groups;
}

export function stripReasoningHeadingPrefix(content: string): string {
  const trimmed = content.trimStart();
  const boldMatch = trimmed.match(/^\*\*[^\n]*?\*\*\s*/);
  if (boldMatch) return trimmed.slice(boldMatch[0].length).trim();

  const headingMatch = content.match(
    /^#{1,3}[ \t]+([^#\\*_[\]`<>&\r\n]+)(?:\r?\n|$)/,
  );
  if (headingMatch?.[1]?.trim()) {
    return content.slice(headingMatch[0].length).trim();
  }

  try {
    const [first, ...rest] = parseMarkdown(content).children ?? [];
    if (
      first?.type === "heading" ||
      (first?.type === "paragraph" &&
        Array.isArray(first.children) &&
        first.children.length === 1 &&
        first.children[0]?.type === "strong")
    ) {
      return stringifyMarkdown({ type: "root", children: rest }).trim();
    }
  } catch {
    return content;
  }
  return content;
}

export function extractReasoningHeading(content: string): string | null {
  try {
    const [first] = parseMarkdown(content).children;
    if (first?.type === "heading") return mdastToText(first).trim() || null;
    if (
      first?.type === "paragraph" &&
      first.children.length === 1 &&
      first.children[0]?.type === "strong"
    ) {
      const inner = mdastToText(first.children[0]).trim();
      return extractReasoningHeading(inner) ?? (inner || null);
    }
  } catch {
    return null;
  }
  return null;
}

export function stripBoldPrefix(content: string): string {
  const trimmed = content.trimStart();
  const boldMatch = trimmed.match(/^\*\*([^\n]*?)\*\*/);
  if (boldMatch) return trimmed.slice(boldMatch[0].length);
  return trimmed.startsWith("**") ? "" : trimmed;
}

export function OrderedListGroup(props: OrderedListGroupData) {
  return (
    <ol
      key={`ol-${props.start}`}
      className={clsx("my-0 list-decimal", orderedListPadding(props.digits))}
      start={props.start}
    >
      {props.items}
    </ol>
  );
}

export function initReasoningMarkdownHelpersChunk(): void {
  void stripReasoningHeadingPrefix;
  void extractReasoningHeading;
  void stripBoldPrefix;
  void OrderedListGroup;
}
