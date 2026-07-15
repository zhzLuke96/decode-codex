// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser comment overlay icons, mention hooks, and lightweight suggestion rows.

import React from "react";
import { ArrowRotateCcwIcon } from "../icons/arrow-rotate-ccw-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import {
  useAtMentionAutocomplete,
  useSkillMentionAutocomplete,
} from "../composer/mention-autocomplete";

export const CommentSaveIcon = CheckMdIcon;
export const ResetValueIcon = ArrowRotateCcwIcon;
export const useAtMentionController = useAtMentionAutocomplete;
export const useSkillMentionController = useSkillMentionAutocomplete;

export function useComposerControllerCleanup(cleanup: () => void): void {
  React.useEffect(() => cleanup, [cleanup]);
}

export function useConnectedApps(): unknown[] {
  return [];
}

export function useDesignAdjustEntryEnabled({
  canEditDesign,
  showAdjustEntry,
}: {
  canEditDesign?: boolean;
  showAdjustEntry?: boolean;
}): boolean {
  return showAdjustEntry !== false && canEditDesign !== false;
}

export function useIsMac(): boolean {
  return React.useMemo(
    () =>
      typeof navigator !== "undefined" &&
      /mac|iphone|ipad|ipod/i.test(navigator.platform),
    [],
  );
}

type MentionAutocompleteProps = {
  className?: string;
  query?: string;
  onRequestClose?: (query?: string | null) => void;
};

export function AtMentionAutocomplete({
  className,
  query,
  onRequestClose,
}: MentionAutocompleteProps) {
  return (
    <AutocompleteShell
      className={className}
      label={query ? `@${query}` : "Add context"}
      onRequestClose={onRequestClose}
    />
  );
}

export function SkillMentionAutocomplete({
  className,
  query,
  onRequestClose,
}: MentionAutocompleteProps) {
  return (
    <AutocompleteShell
      className={className}
      label={query ? `#${query}` : "Add skill"}
      onRequestClose={onRequestClose}
    />
  );
}

function AutocompleteShell({
  className,
  label,
  onRequestClose,
}: {
  className?: string;
  label: string;
  onRequestClose?: (query?: string | null) => void;
}) {
  return (
    <div
      className={[
        "rounded-xl border border-token-border-light bg-token-dropdown-background px-3 py-2 text-sm text-token-text-secondary shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseDown={(event) => event.preventDefault()}
      onKeyDown={(event) => {
        if (event.key === "Escape") onRequestClose?.(null);
      }}
    >
      {label}
    </div>
  );
}
