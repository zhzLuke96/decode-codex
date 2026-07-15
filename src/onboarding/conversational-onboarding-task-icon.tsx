// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the task-picker icon for a conversational-onboarding task, resolving
// the per-task Icon component from the registry option.
import React from "react";

import { getConversationalOnboardingTaskOption } from "./conversational-onboarding-task-registry";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

interface ConversationalOnboardingTaskIconProps {
  appPlugin?: unknown;
  className?: string;
  task: ConversationalOnboardingTaskId;
}

export function ConversationalOnboardingTaskIcon({
  appPlugin,
  className,
  task,
}: ConversationalOnboardingTaskIconProps): React.ReactElement {
  const Icon = getConversationalOnboardingTaskOption(task).Icon;
  return <Icon appPlugin={appPlugin} className={className} />;
}

export function initConversationalOnboardingTaskIconChunk(): void {}
