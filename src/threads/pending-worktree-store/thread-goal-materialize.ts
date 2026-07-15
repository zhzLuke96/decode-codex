// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { joinFilesystemPath } from "../../boundaries/rpc.facade";
import { useHostConfigBt as callHostConfigCommand } from "../../boundaries/use-host-config.facade";
import { encodeBase64Text } from "../../utils/base64";
import {
  GOAL_OBJECTIVE_ATTACHMENT_FILENAME,
  GOAL_OBJECTIVE_FILE_PREFIX,
  GOAL_OBJECTIVE_FILE_SUFFIX,
  MAX_INLINE_GOAL_OBJECTIVE_LENGTH,
} from "./thread-goal-constants";
import {
  appendReferenceSection,
  getImageAttachmentExtension,
  isHttpUrl,
  readBinaryFileAsBase64,
  readImageAttachmentAsBase64,
  removeThreadGoalAttachmentDirectory,
} from "./thread-goal-attachment-utils";
import type { MaterializedThreadGoal, ThreadGoalDraft } from "./types";
export async function materializeThreadGoalDraft({
  draft,
  hostId,
}: {
  draft: ThreadGoalDraft;
  hostId: string;
}): Promise<MaterializedThreadGoal> {
  let objective = draft.objective.trim();
  let attachmentDirectory: string | null = null;
  try {
    const pastedTextAttachments = await Promise.all(
      draft.pastedTextAttachments.map(async (item, index) => ({
        contentsBase64: await readBinaryFileAsBase64(
          item.file.fsPath,
          item.hostId ?? hostId,
        ),
        filename: `pasted-text-${index + 1}.txt`,
      })),
    );
    const imageFileAttachments: Array<{
      contentsBase64: string;
      filename: string;
      position: number;
    }> = [];
    const imageUrlReferences: Array<{
      position: number;
      url: string;
    }> = [];
    for (const [index, imageAttachment] of draft.imageAttachments.entries()) {
      const position = index + 1;
      if (isHttpUrl(imageAttachment.src)) {
        imageUrlReferences.push({
          position,
          url: imageAttachment.src,
        });
      } else {
        imageFileAttachments.push({
          contentsBase64: await readImageAttachmentAsBase64(
            imageAttachment,
            hostId,
          ),
          filename: `image-${position}.${getImageAttachmentExtension(imageAttachment)}`,
          position,
        });
      }
    }
    if (
      objective.length === 0 &&
      pastedTextAttachments.length === 0 &&
      imageFileAttachments.length === 0 &&
      imageUrlReferences.length === 0
    ) {
      throw Error("Goal objective must not be empty");
    }
    const getAttachmentDirectory = async () => {
      if (attachmentDirectory != null) return attachmentDirectory;
      const result = await callHostConfigCommand(
        "create-thread-goal-attachment-directory-for-host",
        {
          hostId,
        },
      );
      attachmentDirectory = result.path;
      return result.path;
    };
    const writeAttachment = async ({
      contentsBase64,
      filename,
    }: {
      contentsBase64: string;
      filename: string;
    }) =>
      callHostConfigCommand("write-thread-goal-attachment-for-host", {
        contentsBase64,
        directoryPath: await getAttachmentDirectory(),
        filename,
        hostId,
      });
    const pastedTextReferences: string[] = [];
    for (const attachment of pastedTextAttachments) {
      const result = await writeAttachment(attachment);
      pastedTextReferences.push(
        `- pasted text file: ${result.path}. Read this file before continuing.`,
      );
    }
    objective = appendReferenceSection(
      objective,
      "Referenced pasted text files:",
      pastedTextReferences,
    );
    const imageFileReferences: string[] = [];
    for (const attachment of imageFileAttachments) {
      const result = await writeAttachment({
        contentsBase64: attachment.contentsBase64,
        filename: attachment.filename,
      });
      imageFileReferences.push(
        `- [Image #${attachment.position}]: ${result.path}`,
      );
    }
    objective = appendReferenceSection(
      objective,
      "Referenced image files:",
      imageFileReferences,
    );
    objective = appendReferenceSection(
      objective,
      "Referenced image URLs:",
      imageUrlReferences.map(
        ({ position, url }) => `- [Image #${position}]: ${url}`,
      ),
    );
    if (Array.from(objective).length <= MAX_INLINE_GOAL_OBJECTIVE_LENGTH) {
      return {
        objective,
        attachmentDirectory,
      };
    }
    const objectiveFileReference = createGoalObjectiveFileReference(
      joinFilesystemPath(
        await getAttachmentDirectory(),
        GOAL_OBJECTIVE_ATTACHMENT_FILENAME,
      ),
    );
    await writeAttachment({
      contentsBase64: encodeBase64Text(objective),
      filename: GOAL_OBJECTIVE_ATTACHMENT_FILENAME,
    });
    return {
      objective: objectiveFileReference,
      attachmentDirectory,
    };
  } catch (error) {
    if (attachmentDirectory != null) {
      await removeThreadGoalAttachmentDirectory(hostId, attachmentDirectory);
    }
    throw error;
  }
}
function createGoalObjectiveFileReference(path: string) {
  const reference = `${GOAL_OBJECTIVE_FILE_PREFIX}${path}${GOAL_OBJECTIVE_FILE_SUFFIX}`;
  if (Array.from(reference).length > MAX_INLINE_GOAL_OBJECTIVE_LENGTH) {
    throw Error(
      `Goal objective file reference exceeds ${MAX_INLINE_GOAL_OBJECTIVE_LENGTH} characters`,
    );
  }
  return reference;
}
