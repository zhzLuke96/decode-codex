// Restored from ref/webview/assets/keyboard-shortcuts-search-input-C1dmntOi.js
// keyboard-shortcuts-search-input-C1dmntOi chunk restored from the Codex webview bundle.
export type IntlMessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string;
};
export type IntlFormatter = {
  formatMessage(
    descriptor: IntlMessageDescriptor,
    values?: Record<string, unknown>,
  ): string;
};
export type KeyboardShortcutCommand = {
  id: string;
  kind: string;
  titleIntlId?: string;
  descriptionIntlId?: string;
  commandMenuGroupKey?: string | null;
  electron?: {
    menuTitleIntlId?: string;
  };
};
export type KeyboardShortcutCommandTextOverride = {
  title?: string;
  description?: string;
};
