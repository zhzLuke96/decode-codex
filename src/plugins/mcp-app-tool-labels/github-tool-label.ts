// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable activity labels for the GitHub MCP connector tool calls.
import { z } from "zod";
import { defineMessages, type IntlShape } from "../../vendor/react-intl";
import { appMatchesIdentifier, type McpAppToolLabelInput } from "./shared";

const GITHUB_APP_IDENTIFIER = "github";

const REACTION_CONTEXT_BY_TOOL_KEY: Record<string, string> = {
  add_reaction_to_issue_comment: "comment",
  add_reaction_to_pr: "pull request",
  add_reaction_to_pr_review_comment: "review comment",
};

const githubToolArgumentsSchema = z
  .object({
    issue_number: z.number().int().positive().optional().catch(undefined),
    pr_number: z.number().int().positive().optional().catch(undefined),
    pull_number: z.number().int().positive().optional().catch(undefined),
    reaction: z
      .string()
      .trim()
      .min(1)
      .max(24)
      .regex(/^[a-z0-9_+-]+$/i)
      .optional()
      .catch(undefined),
    repo_full_name: z
      .string()
      .trim()
      .min(1)
      .max(120)
      .optional()
      .catch(undefined),
  })
  .passthrough();

const githubMessages = defineMessages({
  add_reaction_to_issue_comment: {
    id: "codex.mcpTool.github.reactionContext.comment",
    defaultMessage: "comment",
    description: "GitHub reaction context for issue comments.",
  },
  add_reaction_to_pr: {
    id: "codex.mcpTool.github.reactionContext.pullRequest",
    defaultMessage: "pull request",
    description: "GitHub reaction context for pull requests.",
  },
  add_reaction_to_pr_review_comment: {
    id: "codex.mcpTool.github.reactionContext.reviewComment",
    defaultMessage: "review comment",
    description: "GitHub reaction context for pull request review comments.",
  },
  issueTarget: {
    id: "codex.mcpTool.github.issueTarget",
    defaultMessage: "issue #{number}",
    description:
      "Fallback GitHub issue target label when only the issue number is known.",
  },
  labelInRepo: {
    id: "codex.mcpTool.github.labelInRepo",
    defaultMessage: "{label} in {repo}",
    description: "GitHub tool label with repository context.",
  },
  labelOnTarget: {
    id: "codex.mcpTool.github.labelOnTarget",
    defaultMessage: "{label} on {target}",
    description: "GitHub tool label with issue or pull request context.",
  },
  pullRequestTarget: {
    id: "codex.mcpTool.github.pullRequestTarget",
    defaultMessage: "PR #{number}",
    description:
      "Fallback GitHub pull request target label when only the PR number is known.",
  },
  reactionActive: {
    id: "codex.mcpTool.github.reactionActive",
    defaultMessage: "Adding {reaction} reaction to {context}{location}",
    description:
      "Active GitHub reaction label with optional repository context.",
  },
  reactionCompleted: {
    id: "codex.mcpTool.github.reactionCompleted",
    defaultMessage: "Added {reaction} reaction to {context}{location}",
    description:
      "Completed GitHub reaction label with optional repository context.",
  },
  repoLocation: {
    id: "codex.mcpTool.github.repoLocation",
    defaultMessage: " in {repo}",
    description: "Repository location suffix appended to some GitHub labels.",
  },
});

export function isGithubApp(app: McpAppToolLabelInput["matchingApp"]): boolean {
  return appMatchesIdentifier(app, GITHUB_APP_IDENTIFIER);
}

export function buildGithubToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolKey,
}: McpAppToolLabelInput): string | null {
  if (!isGithubApp(matchingApp)) return null;
  const parsed = githubToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const issueNumber = parsed.data.issue_number;
  const pullRequestNumber = parsed.data.pr_number ?? parsed.data.pull_number;
  const reaction = formatReaction(parsed.data.reaction);
  const repoFullName = parsed.data.repo_full_name;

  if (REACTION_CONTEXT_BY_TOOL_KEY[toolKey] != null && reaction != null)
    return intl.formatMessage(
      completed
        ? githubMessages.reactionCompleted
        : githubMessages.reactionActive,
      {
        context: formatReactionContext({ intl, toolKey }),
        location: formatRepoLocation({ intl, repoFullName }),
        reaction,
      },
    );

  const pullRequestTarget = formatPullRequestTarget({
    intl,
    pullRequestNumber,
    repoFullName,
  });
  if (pullRequestTarget != null)
    return intl.formatMessage(githubMessages.labelOnTarget, {
      label: fallbackLabel,
      target: pullRequestTarget,
    });

  const issueTarget = formatIssueTarget({ intl, issueNumber, repoFullName });
  if (issueTarget == null)
    return repoFullName == null
      ? null
      : intl.formatMessage(githubMessages.labelInRepo, {
          label: fallbackLabel,
          repo: repoFullName,
        });
  return intl.formatMessage(githubMessages.labelOnTarget, {
    label: fallbackLabel,
    target: issueTarget,
  });
}

function formatReaction(reaction: string | undefined): string | null {
  return reaction == null ? null : reaction.replaceAll("_", " ");
}

function formatPullRequestTarget({
  intl,
  pullRequestNumber,
  repoFullName,
}: {
  intl: IntlShape;
  pullRequestNumber: number | undefined;
  repoFullName: string | undefined;
}): string | null {
  return pullRequestNumber == null
    ? null
    : repoFullName == null
      ? intl.formatMessage(githubMessages.pullRequestTarget, {
          number: pullRequestNumber,
        })
      : `${repoFullName}#${pullRequestNumber}`;
}

function formatIssueTarget({
  intl,
  issueNumber,
  repoFullName,
}: {
  intl: IntlShape;
  issueNumber: number | undefined;
  repoFullName: string | undefined;
}): string | null {
  return issueNumber == null
    ? null
    : repoFullName == null
      ? intl.formatMessage(githubMessages.issueTarget, { number: issueNumber })
      : `${repoFullName}#${issueNumber}`;
}

function formatRepoLocation({
  intl,
  repoFullName,
}: {
  intl: IntlShape;
  repoFullName: string | undefined;
}): string {
  return repoFullName == null
    ? ""
    : intl.formatMessage(githubMessages.repoLocation, { repo: repoFullName });
}

function formatReactionContext({
  intl,
  toolKey,
}: {
  intl: IntlShape;
  toolKey: string;
}): string | null {
  switch (toolKey) {
    case "add_reaction_to_issue_comment":
      return intl.formatMessage(githubMessages.add_reaction_to_issue_comment);
    case "add_reaction_to_pr":
      return intl.formatMessage(githubMessages.add_reaction_to_pr);
    case "add_reaction_to_pr_review_comment":
      return intl.formatMessage(
        githubMessages.add_reaction_to_pr_review_comment,
      );
    default:
      return null;
  }
}
