// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Submit-feedback flow: collects app info + optional desktop log archive, sends
// the "submit-feedback" app-server request, and returns the feedback id.
import { appHostServices } from "../runtime/app-host-services-runtime";
import { sendAppServerRequest } from "../runtime/app-server-request";
import {
  buildThreadFeedbackTags,
  dispatchHostRequest,
  logger,
} from "../boundaries/onboarding-commons-externals.facade";

export interface SubmitFeedbackParams {
  classification: string;
  description: string;
  extraTags?: Record<string, unknown> | null;
  hostId: string;
  includeDesktopLogArchive?: boolean;
  includeLogs: boolean;
  threadId: string | null;
}

export interface SubmitFeedbackResult {
  appVersion: string;
  buildNumber?: number | null;
  feedbackId: string;
}

interface AppInfo {
  version: string;
  buildNumber?: number | null;
  buildFlavor?: string | null;
}

export async function submitFeedback({
  classification,
  description,
  extraTags,
  hostId,
  includeDesktopLogArchive,
  includeLogs,
  threadId,
}: SubmitFeedbackParams): Promise<SubmitFeedbackResult> {
  let archiveId: string | null = null;
  let archivePath: string | null = null;
  try {
    const appInfo = (await appHostServices.appInfo.get()) as AppInfo;
    const tags: Record<string, unknown> = {
      ...buildThreadFeedbackTags(threadId),
      app_version: appInfo.version,
    };
    if (extraTags != null) {
      Object.assign(tags, extraTags);
    }
    if (appInfo.buildNumber != null) {
      tags.app_build = appInfo.buildNumber;
    }
    if (appInfo.buildFlavor != null) {
      tags.buildFlavor = appInfo.buildFlavor;
    }
    if (includeLogs && includeDesktopLogArchive) {
      const archive = (await dispatchHostRequest(
        "feedback-desktop-log-archive",
      )) as { archiveId: string; archivePath: string };
      archiveId = archive.archiveId;
      archivePath = archive.archivePath;
    }
    const response = await sendAppServerRequest<{ threadId: string }>(
      "submit-feedback",
      {
        hostId,
        classification,
        reason: description,
        threadId,
        includeLogs,
        extraLogFiles: archivePath == null ? undefined : [archivePath],
        tags,
      },
    );
    return {
      appVersion: appInfo.version,
      buildNumber: appInfo.buildNumber,
      feedbackId: response.threadId,
    };
  } finally {
    if (archiveId != null) {
      try {
        await dispatchHostRequest("delete-feedback-desktop-log-archive", {
          params: { archiveId },
        });
      } catch (error) {
        logger.warning("Failed to delete feedback desktop log archive", {
          safe: {},
          sensitive: { error },
        });
      }
    }
  }
}
