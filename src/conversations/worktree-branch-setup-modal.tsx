// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Modal that lets the user create (and check out) a git branch for the current
// worktree, validating the branch name against the existing branches and showing
// a terminal toast when the underlying git command fails.
import React from "react";
import { ActionPopoverPrimitives } from "../review/action-popover-primitives";
import { Button } from "../ui/button";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  branchExistsAtom,
  conversationTitleAtom,
  DisabledActionTooltip,
  setConversationBranch,
  settingsAtoms,
  Sheet,
  TerminalCommandToast,
  toastControllerToken,
  truncateBranchName,
  useScopedValue,
  useSetting,
  useStore,
  useWorktreeTargetRoots,
  WorkHereIcon,
  worktreeBranchMutationAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { buildBranchName } from "./build-branch-name";
import { BranchNameFieldHeader } from "./branch-name-field-header";

const MAX_BRANCH_NAME_LENGTH = 200;
const TERMINAL_TOAST_OPTIONS = { duration: 7 };

interface WorktreeBranchSetupModalProps {
  conversationId?: string;
  cwd: string;
  hostConfig: unknown;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestOpenNextAction?: (branch: string) => void;
}

interface WorktreeBranchTerminalToast {
  title: string;
  message: string;
  execOutput?: unknown;
}

function WorktreeBranchSetupModal({
  conversationId,
  cwd,
  hostConfig,
  open,
  onOpenChange,
  onRequestOpenNextAction,
}: WorktreeBranchSetupModalProps) {
  const store = useStore();
  const intl = useIntl();
  const [branchInput, setBranchInput] = React.useState<string | null>(null);
  const [isCreating, setIsCreating] = React.useState(false);
  const branchPrefix = useSetting(settingsAtoms.branchPrefix);
  const defaultBranchName = buildBranchName({
    branchPrefix,
    conversationTitle: useScopedValue(conversationTitleAtom, conversationId),
  });
  const branchValue = branchInput ?? defaultBranchName;
  const trimmedBranch = branchValue.trim();
  const isEmpty = trimmedBranch.length === 0;
  const endsWithSlash = trimmedBranch.endsWith("/");
  const validationBranch = truncateBranchName(
    trimmedBranch,
    MAX_BRANCH_NAME_LENGTH,
  );
  const { data: branchExists } = useScopedValue(branchExistsAtom, {
    branch: validationBranch,
    cwd,
    enabled:
      open &&
      !isCreating &&
      validationBranch.length > 0 &&
      !validationBranch.endsWith("/"),
    hostConfig,
    operationSource: "worktree_branch_setup_modal",
  });
  const branchAlreadyExists =
    !isCreating && validationBranch === trimmedBranch && branchExists === true;

  const { targetRoots } = useWorktreeTargetRoots({
    conversationCwd: cwd,
    hostConfig,
  });
  const primaryTargetRoot = targetRoots[0] ?? null;
  const primaryTargetLabel = primaryTargetRoot?.label ?? null;
  const primaryTargetWorkspaceRoot = primaryTargetRoot?.workspaceRoot ?? null;

  const worktreeBranchMutation = useScopedValue(worktreeBranchMutationAtom, {
    cwd,
    hostConfig,
    operationSource: "worktree_branch_setup_modal",
  });
  const isSubmitting = isCreating || worktreeBranchMutation.isPending;
  const isAlreadyCheckedOut =
    primaryTargetLabel != null && trimmedBranch === primaryTargetLabel;

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setBranchInput(null);
    onOpenChange(nextOpen);
  };

  const handleCreate = async () => {
    if (
      isSubmitting ||
      isEmpty ||
      endsWithSlash ||
      branchAlreadyExists ||
      isAlreadyCheckedOut
    )
      return;
    setIsCreating(true);
    const showTerminalToast = ({
      title,
      message,
      execOutput,
    }: WorktreeBranchTerminalToast) => {
      store.get(toastControllerToken).custom({
        ...TERMINAL_TOAST_OPTIONS,
        content: ({ close }: { close: () => void }) => (
          <TerminalCommandToast
            title={title}
            message={message}
            execOutput={execOutput}
            onClose={close}
          />
        ),
      });
    };
    try {
      const result = await worktreeBranchMutation.mutateAsync({
        branch: trimmedBranch,
        failIfExists: true,
        mode: "synced",
      });
      switch (result.status) {
        case "success":
          break;
        case "create-error":
          showTerminalToast({
            title: intl.formatMessage({
              id: "localConversation.worktreeBranchSetup.createBranchErrorTitle",
              defaultMessage: "Failed to set branch",
              description:
                "Title for the terminal toast shown when Codex failed to make a git branch",
            }),
            message: result.error,
            execOutput: result.execOutput,
          });
          return;
        case "checkout-error":
          showTerminalToast({
            title: intl.formatMessage({
              id: "localConversation.worktreeBranchSetup.checkoutErrorTitle",
              defaultMessage: "Failed to check out branch",
              description:
                "Title for the terminal toast shown when Codex failed to checkout a git branch",
            }),
            message: result.error,
            execOutput: result.execOutput,
          });
          return;
      }
      if (conversationId != null)
        setConversationBranch(conversationId, trimmedBranch);
      onRequestOpenNextAction?.(trimmedBranch);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      showTerminalToast({
        title: intl.formatMessage({
          id: "localConversation.worktreeBranchSetup.errorTitle",
          defaultMessage: "Something went wrong",
          description:
            "Title for the fallback terminal toast for branch setup failures",
        }),
        message,
      });
    } finally {
      setIsCreating(false);
    }
  };

  const isCreateDisabled =
    isSubmitting ||
    isEmpty ||
    endsWithSlash ||
    branchAlreadyExists ||
    isAlreadyCheckedOut;

  return (
    <Sheet size="compact" open={open} onOpenChange={handleOpenChange}>
      <ActionPopoverPrimitives.Root className="gap-4">
        <ActionPopoverPrimitives.Header
          icon={<WorkHereIcon className="icon-md text-token-foreground" />}
        />
        <div className="flex flex-col gap-1">
          <ActionPopoverPrimitives.Title>
            <FormattedMessage
              id="localConversation.worktreeBranchSetup.title"
              defaultMessage="Work here"
              description="Title for the worktree branch setup modal"
            />
          </ActionPopoverPrimitives.Title>
          <p className="text-sm text-token-description-foreground">
            <FormattedMessage
              id="localConversation.worktreeBranchSetup.subtitle"
              defaultMessage={
                "Create a branch to commit changes, push, and create a PR from this worktree. <a>Learn more</a>"
              }
              description="Subtitle for the worktree branch setup modal"
              values={{
                a: (chunks: React.ReactNode) => (
                  <a
                    className="underline"
                    href="https://developers.openai.com/codex/app/worktrees#option-1-working-on-the-worktree"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <BranchNameFieldHeader />
          <input
            className="h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
            autoFocus={true}
            value={branchValue}
            onChange={(event) => {
              setBranchInput(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleCreate();
              }
            }}
            placeholder={
              branchPrefix?.trim() ||
              intl.formatMessage({
                id: "localConversation.worktreeBranchSetup.branchPlaceholder.new",
                defaultMessage: "Create a new branch",
                description:
                  "Placeholder for new branch name input in the sync setup modal",
              })
            }
            aria-label={intl.formatMessage({
              id: "localConversation.worktreeBranchSetup.branchAriaLabel",
              defaultMessage: "Branch name",
              description:
                "Aria label for branch selection input in the sync setup modal",
            })}
          />
          {branchAlreadyExists ? (
            <p className="text-xs text-token-error-foreground">
              <FormattedMessage
                id="localConversation.worktreeBranchSetup.branchExistsError"
                defaultMessage="Branch already exists"
                description="Validation message shown in the worktree branch setup modal when the entered branch already exists"
              />
            </p>
          ) : null}
        </div>
        <ActionPopoverPrimitives.Footer
          right={
            <DisabledActionTooltip
              disabled={!isAlreadyCheckedOut}
              tooltipContent={
                <FormattedMessage
                  id="localConversation.worktreeBranchSetup.checkoutDisabled"
                  defaultMessage={
                    "This branch is already checked out at {location}"
                  }
                  description="Tooltip shown when checkout is disabled because the branch is already checked out"
                  values={{ location: primaryTargetWorkspaceRoot ?? "-" }}
                />
              }
            >
              <span className="inline-flex w-full">
                <Button
                  className="w-full justify-center"
                  color="primary"
                  disabled={isCreateDisabled}
                  loading={isSubmitting}
                  onClick={handleCreate}
                >
                  <FormattedMessage
                    id="localConversation.worktreeBranchSetup.action.create"
                    defaultMessage="Create"
                    description="Primary action label when creating a new branch"
                  />
                </Button>
              </span>
            </DisabledActionTooltip>
          }
        />
      </ActionPopoverPrimitives.Root>
    </Sheet>
  );
}

export { WorktreeBranchSetupModal };
export type { WorktreeBranchSetupModalProps };
