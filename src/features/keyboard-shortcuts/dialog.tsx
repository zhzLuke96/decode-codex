// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
import { useState } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  DialogBody,
  DialogHeader,
  DialogSection,
  DialogTitle,
  FormRow,
} from "../../ui/dialog-layout";
import { SettingsKeyValueRow } from "../../ui/settings-row";
import { TooltipShortcut } from "../../ui/tooltip-b";
import { SettingsGroup } from "../../utils/settings-group";
import { COMMAND_MENU_GROUP_ORDER } from "../../utils/electron-menu-shortcuts";
import { scoreQueryMatch } from "../../utils/score-query-match";
import { KeyboardShortcutsSearchInput } from "./search-input";

export type KeyboardShortcutsDialogItem = {
  id: string;
  title: string;
  description: string;
  shortcutLabels: string[];
  sectionKey: string;
};

type KeyboardShortcutsDialogSection = {
  key: string;
  items: KeyboardShortcutsDialogItem[];
};

export interface KeyboardShortcutsDialogProps {
  items: KeyboardShortcutsDialogItem[] | null;
}

const SECTION_KEY_ORDER = [...COMMAND_MENU_GROUP_ORDER, "general"];

function filterAndGroupShortcuts(
  items: KeyboardShortcutsDialogItem[],
  searchQuery: string,
): KeyboardShortcutsDialogSection[] {
  const trimmedQuery = searchQuery.trim();
  const matchingItems =
    trimmedQuery.length === 0
      ? items
      : items.filter((item) =>
          [item.id, item.title, item.description].some(
            (field) => scoreQueryMatch(field, trimmedQuery) > 0,
          ),
        );
  return SECTION_KEY_ORDER.flatMap((sectionKey) => {
    const sectionItems = matchingItems.filter(
      (item) => item.sectionKey === sectionKey,
    );
    return sectionItems.length === 0
      ? []
      : [{ key: sectionKey, items: sectionItems }];
  });
}

function KeyboardShortcutsSectionTitle({ sectionKey }: { sectionKey: string }) {
  switch (sectionKey) {
    case "thread":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.thread"
          defaultMessage="Chat"
          description="Section title for active chat keyboard shortcuts"
        />
      );
    case "navigation":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.navigation"
          defaultMessage="Navigation"
          description="Section title for active navigation keyboard shortcuts"
        />
      );
    case "panels":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.panels"
          defaultMessage="Panels"
          description="Section title for active panel keyboard shortcuts"
        />
      );
    case "workspace":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.workspace"
          defaultMessage="Project"
          description="Section title for active project keyboard shortcuts"
        />
      );
    case "skills":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.skills"
          defaultMessage="Skills"
          description="Section title for active skill keyboard shortcuts"
        />
      );
    case "configure":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.configure"
          defaultMessage="Configure"
          description="Section title for active configuration keyboard shortcuts"
        />
      );
    case "app":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.app"
          defaultMessage="App"
          description="Section title for active app keyboard shortcuts"
        />
      );
    case "general":
      return (
        <FormattedMessage
          id="keyboardShortcutsDialog.section.general"
          defaultMessage="General"
          description="Section title for general active keyboard shortcuts"
        />
      );
    default:
      return null;
  }
}

function renderShortcutKey(shortcutLabel: string) {
  return <TooltipShortcut key={shortcutLabel} keysLabel={shortcutLabel} />;
}

function renderShortcutRow(item: KeyboardShortcutsDialogItem) {
  return (
    <SettingsKeyValueRow
      key={item.id}
      compactLabelInset={false}
      label={item.title}
      variant="compact"
    >
      <FormRow>{item.shortcutLabels.map(renderShortcutKey)}</FormRow>
    </SettingsKeyValueRow>
  );
}

function renderShortcutSection(section: KeyboardShortcutsDialogSection) {
  return (
    <SettingsGroup key={section.key}>
      <SettingsGroup.Header
        title={<KeyboardShortcutsSectionTitle sectionKey={section.key} />}
      />
      <SettingsGroup.Content>
        {section.items.map(renderShortcutRow)}
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

export function KeyboardShortcutsDialog({
  items,
}: KeyboardShortcutsDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const sections =
    items == null ? null : filterAndGroupShortcuts(items, searchQuery);
  const loadingState =
    items == null ? (
      <div className="py-1 text-sm text-token-text-secondary">
        <FormattedMessage
          id="keyboardShortcutsDialog.loading"
          defaultMessage="Loading shortcuts…"
          description="Loading label while active keyboard shortcuts are being fetched"
        />
      </div>
    ) : null;
  const emptyState =
    sections?.length === 0 ? (
      <div className="py-1 text-sm text-token-text-secondary">
        {searchQuery.trim().length === 0 ? (
          <FormattedMessage
            id="keyboardShortcutsDialog.empty"
            defaultMessage="No active shortcuts"
            description="Empty state shown when no active shortcuts are available"
          />
        ) : (
          <FormattedMessage
            id="keyboardShortcutsDialog.noMatches"
            defaultMessage="No matching shortcuts"
            description="Empty state shown when active shortcut search has no matches"
          />
        )}
      </div>
    ) : null;
  return (
    <DialogBody size="tall">
      <DialogHeader
        title={
          <DialogTitle>
            <FormattedMessage
              id="keyboardShortcutsDialog.title"
              defaultMessage="Keyboard shortcuts"
              description="Title for the active keyboard shortcuts dialog"
            />
          </DialogTitle>
        }
      />
      {items == null ? null : (
        <DialogSection className="pb-3">
          <KeyboardShortcutsSearchInput
            autoFocus
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
        </DialogSection>
      )}
      <DialogSection className="min-h-0 flex-1 overflow-y-auto pe-3 pt-0!">
        {loadingState}
        {emptyState}
        {sections?.map(renderShortcutSection)}
      </DialogSection>
    </DialogBody>
  );
}

export function initKeyboardShortcutsDialogChunk(): void {}
