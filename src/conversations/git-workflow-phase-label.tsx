// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Render the localized label for the current git workflow phase (commit / create PR).

import { FormattedMessage } from "../vendor/react-intl";
import {
  getGitWorkflowPhaseMessageDescriptor,
  type GitWorkflowPhase,
} from "../review/git-action-messages";

export interface GitWorkflowPhaseLabelProps {
  phase: GitWorkflowPhase;
}

export function initGitWorkflowPhaseLabelChunk(): void {}

export function GitWorkflowPhaseLabel({ phase }: GitWorkflowPhaseLabelProps) {
  const descriptor = getGitWorkflowPhaseMessageDescriptor(phase);
  return <FormattedMessage {...descriptor} />;
}
