// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Create-pull-request command-menu dialog for the local conversation page: title /
// description fields, optional new-branch selection, and the create / open actions.

import type { ComponentType, MouseEvent, ReactNode, SVGProps } from "react";
import { useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { DiffStats } from "../git/git-review-primitives";
import { PullRequestDraftIcon } from "../github/pull-request-status";
import { buildBranchName } from "../conversations/build-branch-name";
import { BranchNameMiddleTruncation } from "../conversations/branch-name-middle-truncation";
import {
  GitBranchNameField,
  stopEnterKeyPropagation,
} from "../conversations/git-branch-name-field";
import {
  CreatePullRequestIcon,
  OpenPullRequestExternalIcon,
} from "../conversations/git-action-icons";
import { useDefaultBranchQuery } from "../conversations/use-default-branch-query";
import { gitWorkflowMutationAtom } from "./git-workflow-mutation";
import {
  activeGitWorkflowAtom,
  appStoreScope,
  branchExistsAtom,
  Checkbox,
  CommandMenu,
  conversationHasOpenPullRequestAtom,
  conversationIsDetachedHeadAtom,
  conversationPullRequestUrlAtom,
  conversationTitleAtom,
  createPullRequestBodyDraftAtom,
  createPullRequestIncludeLocalChangesAtom,
  createPullRequestNextStepAtom,
  createPullRequestTitleDraftAtom,
  Dialog,
  diffSelectionSummaryAtom,
  formatKeyboardShortcut,
  GitActionBlockedStepTooltip,
  isOpenInNewTabEvent,
  KeyboardShortcutHint,
  BranchIcon,
  OpenInIcon,
  openExternalLink,
  openExternalLinkFromEvent,
  pushStatusAtom,
  resetCreatePullRequestDrafts,
  settingsAtoms,
  Spinner,
  Tooltip,
  useDebouncedValue,
  useScopedQuery,
  useScopedStore,
  useSetting,
  VisuallyHidden,
} from "../boundaries/onboarding-commons-externals.facade";

interface DiffSelectionSummary {
  totalAdditions: number;
  totalDeletions: number;
}

interface CreatePullRequestMenuOptionProps {
  children: ReactNode;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  disabled: boolean;
  loading: boolean;
  tooltipContent?: ReactNode;
  value: string;
  onModifiedClick?: (event: MouseEvent<HTMLElement>) => void;
  onSelect: () => void;
}

function CreatePullRequestMenuOption({
  children,
  Icon,
  disabled,
  loading,
  tooltipContent,
  value,
  onModifiedClick,
  onSelect,
}: CreatePullRequestMenuOptionProps) {
  const handleClickCapture = (event: MouseEvent<HTMLElement>) => {
    if (onModifiedClick != null && isOpenInNewTabEvent(event)) {
      event.preventDefault();
      event.stopPropagation();
      onModifiedClick(event);
    }
  };

  const item = (
    <CommandMenu.Item
      className="group"
      disabled={disabled}
      value={value}
      onClickCapture={handleClickCapture}
      onSelect={onSelect}
    >
      <span className="flex w-full min-w-0 items-center gap-2">
        {loading ? (
          <Spinner className="icon-xs shrink-0" />
        ) : (
          <Icon className="icon-xs shrink-0" />
        )}
        <span className="truncate">{children}</span>
        <span className="invisible ml-auto flex shrink-0 items-center opacity-80 group-aria-[selected=true]:visible group-data-[selected=true]:visible">
          <KeyboardShortcutHint
            keysLabel={formatKeyboardShortcut("CmdOrCtrl+Enter")}
            variant="button"
          />
        </span>
      </span>
    </CommandMenu.Item>
  );

  if (!disabled || tooltipContent == null) {
    return item;
  }
  return (
    <Tooltip tooltipContent={tooltipContent}>
      <div>{item}</div>
    </Tooltip>
  );
}

interface CreatePullRequestNewBranchInput {
  branchAlreadyExists: boolean;
  isSelectionBlocked: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface CreatePullRequestFormProps {
  baseBranch: string | null;
  headBranch: string | null;
  branchSummary: DiffSelectionSummary | null;
  title: string;
  description: string;
  existingPullRequestUrl: string | null | undefined;
  hasOpenPr: boolean;
  includeLocalChanges: boolean;
  blockedStep: unknown;
  newBranch?: CreatePullRequestNewBranchInput;
  isWorkflowPending?: boolean;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onIncludeLocalChangesChange: (value: boolean) => void;
  onCreate: (isDraft: boolean, openInBrowser?: boolean) => void;
  onOpenPullRequest: (event?: MouseEvent<HTMLElement>) => void;
}

export function CreatePullRequestForm({
  baseBranch,
  headBranch,
  branchSummary,
  title,
  description,
  existingPullRequestUrl,
  hasOpenPr,
  includeLocalChanges,
  blockedStep,
  newBranch,
  isWorkflowPending = false,
  onTitleChange,
  onDescriptionChange,
  onIncludeLocalChangesChange,
  onCreate,
  onOpenPullRequest,
}: CreatePullRequestFormProps) {
  const intl = useIntl();
  const blockedTooltip =
    newBranch?.isSelectionBlocked === true ||
    blockedStep == null ? undefined : (
      <GitActionBlockedStepTooltip blockedStep={blockedStep} />
    );
  const hasExistingPr = hasOpenPr || existingPullRequestUrl != null;
  const isAwaitingExistingPrUrl =
    hasExistingPr && existingPullRequestUrl == null;
  const isBusy = isAwaitingExistingPrUrl || isWorkflowPending;
  const isNewBranch = newBranch != null;
  const canCreate =
    !hasExistingPr &&
    !isBusy &&
    newBranch?.isSelectionBlocked !== true &&
    blockedStep == null;

  const dialogLabel = intl.formatMessage({
    id: "localConversationPage.createPrModal.title",
    defaultMessage: "Create PR",
    description: "Title for the create pull request modal",
  });

  const header = (
    <div className="flex h-9 items-center justify-between gap-3 px-3">
      <span className="flex min-w-0 flex-1 items-center gap-2 text-token-description-foreground">
        <BranchIcon className="icon-xs shrink-0" />
        <span className="flex min-w-0 flex-1 items-center gap-1 whitespace-nowrap">
          {isNewBranch ? (
            <FormattedMessage
              id="localConversationPage.createPrModal.newBranch"
              defaultMessage="New branch"
              description="Label for a new head branch in the create PR modal"
            />
          ) : (
            <span className="max-w-[60%] min-w-0 flex-[0_1_auto]">
              <BranchNameMiddleTruncation
                branchName={headBranch ?? "-"}
                suffixCharacterCount={18}
              />
            </span>
          )}
          <span aria-hidden={true} className="shrink-0">
            <FormattedMessage
              id="localConversationPage.createPrModal.branchSeparator"
              defaultMessage={"->"}
              description="Arrow separator shown between head and base branches in the create PR modal"
            />
          </span>
          <span className="min-w-0 truncate">
            {baseBranch ?? (
              <FormattedMessage
                id="localConversationPage.createPrModal.missingBaseBranch"
                defaultMessage="-"
                description="Fallback label shown when the create PR modal does not have a base branch"
              />
            )}
          </span>
        </span>
      </span>
      {branchSummary == null ? null : (
        <DiffStats
          variant="color"
          linesAdded={branchSummary.totalAdditions}
          linesRemoved={branchSummary.totalDeletions}
        />
      )}
    </div>
  );

  const body = hasExistingPr ? (
    <div className="min-h-32 px-3 py-2 text-token-description-foreground">
      <FormattedMessage
        id="localConversationPage.createPrModal.viewDescription"
        defaultMessage="A pull request already exists for this branch"
        description="Description shown when a pull request already exists"
      />
    </div>
  ) : (
    <div className="flex min-h-32 flex-col gap-2 text-token-description-foreground">
      {newBranch == null ? null : (
        <GitBranchNameField
          branchAlreadyExists={newBranch.branchAlreadyExists}
          disabled={isBusy}
          placeholder={newBranch.placeholder}
          value={newBranch.value}
          onChange={newBranch.onChange}
        />
      )}
      <input
        autoFocus={!isNewBranch}
        id="create-pr-title"
        className="w-full bg-transparent px-3 pt-2 font-semibold text-token-input-foreground outline-none placeholder:text-token-description-foreground"
        aria-label={intl.formatMessage({
          id: "localConversationPage.createPrModal.titleField",
          defaultMessage: "Title",
          description: "Label for create PR title input",
        })}
        placeholder={intl.formatMessage({
          id: "localConversationPage.createPrModal.titlePlaceholder",
          defaultMessage: "Title",
          description: "Placeholder for create PR title input",
        })}
        value={title}
        disabled={isBusy}
        onChange={(event) => onTitleChange(event.target.value)}
      />
      <textarea
        id="create-pr-message"
        rows={3}
        className="min-h-0 w-full flex-1 resize-none bg-transparent px-3 pb-2 text-token-input-foreground outline-none placeholder:text-token-description-foreground"
        aria-label={intl.formatMessage({
          id: "localConversationPage.createPrModal.message",
          defaultMessage: "Message",
          description: "Label for create PR message textarea",
        })}
        placeholder={intl.formatMessage({
          id: "localConversationPage.createPrModal.messagePlaceholder",
          defaultMessage: "Description (leave empty to generate)",
          description: "Placeholder for create PR message textarea",
        })}
        value={description}
        disabled={isBusy}
        onKeyDown={stopEnterKeyPropagation}
        onChange={(event) => onDescriptionChange(event.target.value)}
      />
      <div className="relative flex items-center gap-2 px-3 pt-2 pb-3">
        <Checkbox
          id="create-pr-include-local-changes"
          checked={includeLocalChanges}
          disabled={isBusy}
          onCheckedChange={onIncludeLocalChangesChange}
        />
        <label
          htmlFor="create-pr-include-local-changes"
          className="text-token-foreground"
        >
          <FormattedMessage
            id="localConversationPage.createPrModal.includeLocalChanges"
            defaultMessage="Commit and push local changes"
            description="Label for toggling inclusion of local changes when creating a pull request"
          />
        </label>
      </div>
    </div>
  );

  const footer = (
    <div className="border-t border-token-border-default py-1">
      <CommandMenu.List>
        <div className="flex flex-col gap-1">
          {hasExistingPr ? (
            <CreatePullRequestMenuOption
              Icon={OpenPullRequestExternalIcon}
              disabled={existingPullRequestUrl == null}
              loading={isAwaitingExistingPrUrl}
              value="open-pr"
              onModifiedClick={onOpenPullRequest}
              onSelect={onOpenPullRequest}
            >
              <FormattedMessage
                id="localConversationPage.createPrModal.open"
                defaultMessage="Open PR in browser"
                description="Button label to open an existing pull request"
              />
            </CreatePullRequestMenuOption>
          ) : (
            <>
              <CreatePullRequestMenuOption
                Icon={PullRequestDraftIcon}
                disabled={!canCreate}
                loading={isWorkflowPending}
                tooltipContent={blockedTooltip}
                value="create-draft-pr"
                onSelect={() => onCreate(true)}
              >
                <FormattedMessage
                  id="localConversationPage.createPrModal.createDraft"
                  defaultMessage="Create draft PR"
                  description="Action label to create a draft pull request"
                />
              </CreatePullRequestMenuOption>
              <CreatePullRequestMenuOption
                Icon={CreatePullRequestIcon}
                disabled={!canCreate}
                loading={isWorkflowPending}
                tooltipContent={blockedTooltip}
                value="create-pr"
                onSelect={() => onCreate(false)}
              >
                <FormattedMessage
                  id="localConversationPage.createPrModal.confirm"
                  defaultMessage="Create PR"
                  description="Button label to create a pull request"
                />
              </CreatePullRequestMenuOption>
              <CreatePullRequestMenuOption
                Icon={OpenInIcon}
                disabled={!canCreate}
                loading={isWorkflowPending}
                tooltipContent={blockedTooltip}
                value="open-pr-in-browser"
                onSelect={() => onCreate(false, true)}
              >
                <FormattedMessage
                  id="localConversationPage.createPrModal.openInBrowser"
                  defaultMessage="Open PR in browser"
                  description="Action label to create a pull request in the browser"
                />
              </CreatePullRequestMenuOption>
            </>
          )}
        </div>
      </CommandMenu.List>
    </div>
  );

  return (
    <div className="command-menu-dialog contents">
      <CommandMenu
        data-codex-shortcut-capture={true}
        className="w-[420px] max-w-[92vw]"
        label={dialogLabel}
        shouldFilter={false}
        loop={true}
      >
        {header}
        {body}
        {footer}
      </CommandMenu>
    </div>
  );
}

export interface CreatePullRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversationId?: string | null;
  cwd: string;
  hostConfig: { id: string };
  codexWorktree?: boolean;
  onRequestReset: () => void;
}

export function CreatePullRequestDialog({
  open,
  onOpenChange,
  conversationId = null,
  cwd,
  hostConfig,
  codexWorktree = false,
  onRequestReset,
}: CreatePullRequestDialogProps) {
  const store = useScopedStore(appStoreScope);
  const [branchNameInput, setBranchNameInput] = useState<string | null>(null);

  const hostScope = { cwd, hostId: hostConfig.id };
  const titleDraft = useScopedQuery(createPullRequestTitleDraftAtom, hostScope);
  const bodyDraft = useScopedQuery(createPullRequestBodyDraftAtom, hostScope);
  const includeLocalChanges = useScopedQuery(
    createPullRequestIncludeLocalChangesAtom,
    hostScope,
  );

  const workflowScope = { codexWorktree, conversationId, cwd, hostConfig };
  const existingPullRequestUrl = useScopedQuery(
    conversationPullRequestUrlAtom,
    workflowScope,
  );
  const hasOpenPr = useScopedQuery(
    conversationHasOpenPullRequestAtom,
    workflowScope,
  );
  const isDetachedHead = useScopedQuery(
    conversationIsDetachedHeadAtom,
    workflowScope,
  );
  const branchPrefix = useSetting(settingsAtoms.branchPrefix);
  const conversationTitle = useScopedQuery(
    conversationTitleAtom,
    conversationId,
  );
  const createsBranch = isDetachedHead;
  const suggestedBranchName = buildBranchName({
    branchPrefix,
    conversationTitle,
  });
  const branchNameValue = branchNameInput ?? suggestedBranchName;
  const branchName = branchNameValue.trim();
  const debouncedBranchName = useDebouncedValue(branchName, 200);
  const branchCheckEnabled =
    open &&
    createsBranch &&
    debouncedBranchName.length > 0 &&
    !debouncedBranchName.endsWith("/");
  const { data: branchExists } = useScopedQuery(branchExistsAtom, {
    branch: debouncedBranchName,
    cwd,
    enabled: branchCheckEnabled,
    hostConfig,
    operationSource: "create_pull_request_modal",
  });
  const branchAlreadyExists =
    debouncedBranchName === branchName && branchExists === true;
  const isBranchSelectionBlocked =
    createsBranch &&
    (branchName.length === 0 ||
      branchName.endsWith("/") ||
      branchAlreadyExists);

  const pushStatusResult = useScopedQuery(pushStatusAtom, {
    cwd,
    hostConfig,
    operationSource: "local_conversation_git_actions",
  });
  const pushStatus =
    pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
  const { data: defaultBranch } = useDefaultBranchQuery(
    cwd,
    hostConfig,
    "local_conversation_git_actions",
  );

  const { blockedStep, nextStep } = useScopedQuery(
    createPullRequestNextStepAtom,
    {
      cwd,
      hostConfig,
      createsBranch,
      includeLocalChanges,
    },
  );
  const activeWorkflow = useScopedQuery(activeGitWorkflowAtom, hostScope);
  const gitWorkflow = useScopedQuery(gitWorkflowMutationAtom, {
    ...workflowScope,
    operationSource: "local_conversation_git_actions",
  });
  const isWorkflowPending = activeWorkflow != null || gitWorkflow.isPending;
  const diffSelection = useScopedQuery(diffSelectionSummaryAtom, {
    cwd,
    hostConfig,
    includeUnstaged: true,
  });
  const headBranch = createsBranch ? branchName : (pushStatus?.branch ?? null);

  const resetDrafts = () => {
    resetCreatePullRequestDrafts(store, hostScope);
  };
  const cancelAndReset = () => {
    if (!isWorkflowPending) {
      resetDrafts();
      onRequestReset();
    }
  };
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      if (isWorkflowPending) {
        return;
      }
      resetDrafts();
      onRequestReset();
      return;
    }
    onOpenChange(nextOpen);
  };
  const submit = ({
    isDraft,
    openInBrowser,
  }: {
    isDraft: boolean;
    openInBrowser: boolean;
  }) => {
    onOpenChange(false);
    const request = createsBranch
      ? {
          kind: "create-pr" as const,
          createPullRequestAsDraft: isDraft,
          newBranch: branchName,
          nextStep,
          openInBrowser,
        }
      : {
          kind: "create-pr" as const,
          createPullRequestAsDraft: isDraft,
          nextStep,
          openInBrowser,
        };
    gitWorkflow.mutate(request, {
      onSettled: () => {
        if (!openInBrowser) {
          resetDrafts();
        }
        onRequestReset();
      },
    });
  };
  const handleCreate = (isDraft: boolean, openInBrowser?: boolean) => {
    if (isWorkflowPending || isBranchSelectionBlocked) {
      return;
    }
    if (blockedStep == null) {
      submit({
        isDraft,
        openInBrowser: openInBrowser === undefined ? false : openInBrowser,
      });
    }
  };
  const handleOpenPullRequest = (event?: MouseEvent<HTMLElement>) => {
    if (existingPullRequestUrl) {
      if (event == null) {
        openExternalLink({
          href: existingPullRequestUrl,
          initiator: "pull_request_link",
        });
      } else {
        openExternalLinkFromEvent({
          event,
          href: existingPullRequestUrl,
          initiator: "pull_request_link",
        });
      }
      cancelAndReset();
    }
  };

  return (
    <Dialog
      open={open}
      showDialogClose={false}
      unstyledContent={true}
      onOpenChange={handleOpenChange}
    >
      <VisuallyHidden className="sr-only">
        <FormattedMessage
          id="localConversationPage.createPrModal.title"
          defaultMessage="Create PR"
          description="Title for the create pull request modal"
        />
      </VisuallyHidden>
      <CreatePullRequestForm
        baseBranch={pushStatus?.defaultBranch ?? defaultBranch ?? null}
        headBranch={headBranch ?? null}
        branchSummary={
          includeLocalChanges ? diffSelection.selectionSummary : null
        }
        title={titleDraft}
        description={bodyDraft}
        existingPullRequestUrl={existingPullRequestUrl}
        hasOpenPr={hasOpenPr}
        includeLocalChanges={includeLocalChanges}
        blockedStep={blockedStep}
        newBranch={
          createsBranch
            ? {
                branchAlreadyExists,
                isSelectionBlocked: isBranchSelectionBlocked,
                placeholder: branchPrefix?.trim(),
                value: branchNameValue,
                onChange: setBranchNameInput,
              }
            : undefined
        }
        isWorkflowPending={isWorkflowPending}
        onTitleChange={(value) =>
          store.set(createPullRequestTitleDraftAtom, hostScope, value)
        }
        onDescriptionChange={(value) =>
          store.set(createPullRequestBodyDraftAtom, hostScope, value)
        }
        onIncludeLocalChangesChange={(value) =>
          store.set(createPullRequestIncludeLocalChangesAtom, hostScope, value)
        }
        onCreate={handleCreate}
        onOpenPullRequest={handleOpenPullRequest}
      />
    </Dialog>
  );
}
