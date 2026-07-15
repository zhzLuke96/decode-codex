// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { useHostConfigBt as callHostConfigCommand } from "../../boundaries/use-host-config.facade";
import { removeThreadGoalAttachmentDirectory } from "./thread-goal-attachment-utils";
import type { MaterializedThreadGoal, ThreadGoalDraft } from "./types";
export async function cleanupMaterializedThreadGoal({
  hostId,
  materialized,
}: {
  hostId: string;
  materialized: MaterializedThreadGoal;
}) {
  if (materialized.attachmentDirectory != null) {
    await removeThreadGoalAttachmentDirectory(
      hostId,
      materialized.attachmentDirectory,
    );
  }
}
export async function cleanupThreadGoalDraftPastedTextAttachments({
  draft,
  fallbackHostId,
}: {
  draft: ThreadGoalDraft;
  fallbackHostId: string;
}) {
  await Promise.allSettled(
    draft.pastedTextAttachments.map((item) =>
      callHostConfigCommand("remove-pasted-text-attachment-for-host", {
        hostId: item.hostId ?? fallbackHostId,
        path: item.file.path,
      }),
    ),
  );
}
