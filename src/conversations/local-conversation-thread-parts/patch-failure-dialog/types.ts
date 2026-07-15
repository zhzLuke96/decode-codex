// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import type { ReactNode } from "react";

export type PatchAction = "undo" | "reapply";

export interface PatchActionResult {
  errorCode?: string;
  appliedPaths: string[];
  skippedPaths: string[];
  conflictedPaths: string[];
  execOutput?: { output?: string };
}

export interface PatchActionFailure {
  action: PatchAction;
  result: PatchActionResult;
}

export interface PatchFailureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  failure: PatchActionFailure | null;
  cwd: string | null;
  hostId: string;
}

export interface PatchFailureMessageProps {
  action: PatchAction;
  result: PatchActionResult;
}

export interface PatchFailureDescriptionProps extends PatchFailureMessageProps {
  hasAnyPaths: boolean;
  fallbackErrorLine: string | null;
}

export interface PatchPathGroupProps {
  toneClassName: string;
  heading: ReactNode;
  paths: string[];
  cwd: string | null;
  hostId: string;
}
