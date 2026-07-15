// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Public prop and submit-target types for the shared new-thread composer body.
// Extracted from the composer runtime chunk so both HomeComposer and the panel
// surfaces can type-check against a single source of truth.
import type { ReactNode } from "react";

/**
 * Vertical growth behaviour of the composer editor surface.
 * - `multiline`: full multi-line editor with the external footer slot.
 * - `auto-single-line`: single line that measures its content and only
 *   expands into a multi-line layout once the text wraps.
 * - `single-line`: always rendered as a single compact line.
 */
export type ComposerLayoutMode =
  | "multiline"
  | "auto-single-line"
  | "single-line";

/** Where above-composer header content is placed relative to the input. */
export type AboveComposerContentLayout = "floating" | "header";

/** Visual variant of the external footer (home surface vs. default panels). */
export type ComposerExternalFooterVariant = "default" | "home";

/** When the footer branch switcher is shown. */
export type ComposerFooterBranchVisibility = "local" | "always";

/** Availability state of the local workspace backing a draft thread. */
export type LocalWorkspaceMaterialization =
  | "available"
  | "loading"
  | "restorable"
  | "unavailable"
  | "gone";

/**
 * Remote project descriptor used when the home surface pins the composer to a
 * specific remote host (e.g. a saved cloud project) instead of the local host.
 */
export interface HomeRunLocationRemoteProject {
  id?: string | null;
  hostId?: string | null;
  label?: string | null;
  remotePath?: string | null;
}

/**
 * The resolved destination the composer submits to. The composer body derives
 * this from the active composer mode (local / worktree / cloud) and hands the
 * matching `submit` callback the built message context.
 */
export type ComposerSubmitTarget =
  | {
      type: "local";
      cwd: string | null;
      executionOptions: unknown;
      submit: ComposerLocalSubmitHandler;
    }
  | {
      type: "worktree";
      cwd: string | null;
      startingState: unknown;
      environmentConfigPath: string | null;
      executionOptions: unknown;
      projectAssignment: unknown;
      submit: ComposerWorktreeSubmitHandler;
    }
  | {
      type: "cloud";
      cloudTaskType: unknown;
      repo: unknown;
      submit: (context: unknown) => Promise<void>;
    };

/** Submit handler for local-mode conversations. Receives the built context and cwd. */
export type ComposerLocalSubmitHandler = (
  context: unknown,
  cwd: string | null,
) => void | Promise<void>;

/** Submit handler for worktree-mode conversations. */
export type ComposerWorktreeSubmitHandler = (
  context: unknown,
) => void | Promise<void>;

/**
 * Props for {@link NewThreadComposerBody} — the shared composer body rendered
 * inside a composer scope provider by HomeComposer and the new-thread panel
 * surfaces. The owning surface supplies the collaboration-mode state, the
 * submit/stop handlers, and the above/below-composer content slots; the body
 * owns the editor, attachments, suggestions, banners, footer, and the submit
 * orchestration.
 */
export interface NewThreadComposerBodyProps {
  /** Content pinned above the composer input when laid out in the header. */
  aboveComposerHeaderContent?: ReactNode;
  /** Render-prop for content shown directly below the composer surface. */
  belowComposerContent?: (context?: {
    canUseTemplateAttachments: boolean;
    onAddFileAssetAttachment: (file: unknown) => void;
  }) => ReactNode;
  /** Currently selected collaboration mode (plan / default / custom). */
  activeCollaborationMode: unknown;
  /** Browser-originated conversation id for in-app browser composer bridging. */
  browserConversationId?: string | null;
  /** All collaboration modes available for the current conversation. */
  collaborationModes: unknown[];
  /** Service tier used for the outgoing request (e.g. "standard" / "priority"). */
  serviceTier: string | null;
  /** Selects a collaboration mode; ignored when the mode is externally locked. */
  setSelectedCollaborationMode: (mode: unknown) => void;
  /** Whether a turn is currently streaming a response. */
  isResponseInProgress: boolean;
  /** Whether the external footer should be shown. */
  showExternalFooter: boolean;
  /** Suppress artifact-plugin above-composer suggestions. */
  hideArtifactPluginSuggestions: boolean;
  /** Show the `/plan` keyword suggestion affordance. */
  showPlanKeywordSuggestion: boolean;
  /** Optional pre-computed composer-mode availability override. */
  composerModeAvailability?: unknown;
  /** Placeholder override for the composer input. */
  placeholderText?: string;
  /** Vertical growth behaviour of the editor. */
  composerLayoutMode: ComposerLayoutMode;
  /** Footer controls injected by the hotkey window home surface, if any. */
  hotkeyWindowHomeFooterControls?: ReactNode;
  /** Remote project the home run-location dropdown is pinned to. */
  homeRunLocationRemoteProject?: HomeRunLocationRemoteProject | null;
  /** Default working directory for new local conversations. */
  defaultCwd?: string | null;
  /** Submit handler for local-mode conversations. */
  onSubmitLocal: ComposerLocalSubmitHandler;
  /** Submit handler for worktree-mode conversations. */
  onSubmitWorktree: ComposerWorktreeSubmitHandler;
  /** Stop/interrupt the in-progress turn. */
  onStop: () => void | Promise<void>;
  /** Whether a stop request is in flight. */
  isStopping: boolean;
  /** Show the workspace dropdown inside the footer. */
  showWorkspaceDropdownInFooter: boolean;
  /** Footer variant (home vs. default panel). */
  externalFooterVariant: ComposerExternalFooterVariant;
  /** Extra class name applied to the composer surface wrapper. */
  surfaceClassName?: string;
  /** When to show the footer branch switcher. */
  showFooterBranchWhen: ComposerFooterBranchVisibility;
  /** Optional upsell button rendered for free-tier users in the footer. */
  freeUpsellButton?: ReactNode;
  /** Opens a side conversation from the composer; resolves to its id. */
  onCreateSideConversation?: (args: {
    sourceConversationId: string;
    cwd: string | null;
    hostId: string;
    collaborationMode: unknown;
    displayTitle: string | null;
  }) => Promise<string>;
  /** Hide the run-location dropdown regardless of the home variant. */
  hideRunLocationDropdownOverride: boolean;
  /** Prewarm reservation used to warm a projectless runtime before first turn. */
  projectlessPrewarmReservation: unknown;
  /** Materialization state of the local workspace backing the draft. */
  localWorkspaceMaterialization: LocalWorkspaceMaterialization;
}
