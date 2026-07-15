// Restored from ref/webview/assets/local-conversation-page-C379OsPf.js
import React from "react";

export type Scope = {
  value?: Record<string, unknown>;
  get<T>(signal: unknown, key?: unknown): T;
  set<T>(signal: unknown, value: T | ((previous: T) => T), key?: unknown): void;
  watch(effect: () => void): () => void;
};

export type PanelTab = {
  id?: string;
  tabKind?: string;
  path?: string | null;
  originalPath?: string | null;
  cwd?: string | null;
  source?: {
    kind?: string;
    path?: string | null;
    originalPath?: string | null;
    cwd?: string | null;
  };
};

export type SubagentThread = {
  id: string;
  title?: string | null;
  status?: string | null;
  parentThreadId?: string | null;
  conversationId?: string | null;
  children?: SubagentThread[];
  items?: unknown[];
};

export type FormatMessage = (
  descriptor: { id: string; defaultMessage: string },
  values?: Record<string, React.ReactNode>,
) => string;

export type IntlShape = { formatMessage: FormatMessage };
