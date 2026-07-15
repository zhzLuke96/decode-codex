// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import {
  LOCAL_HOST_ID,
  useHostConfigBt as callHostConfigCommand,
} from "../../boundaries/use-host-config.facade";
import { vscodeApiN as callVscodeApi } from "../../boundaries/vscode-api";
import { encodeBase64Text } from "../../utils/base64";
import type { ImageAttachment } from "./types";
export async function removeThreadGoalAttachmentDirectory(
  hostId: string,
  path: string,
) {
  await callHostConfigCommand(
    "remove-thread-goal-attachment-directory-for-host",
    {
      hostId,
      path,
    },
  ).catch(() => undefined);
}
export async function readBinaryFileAsBase64(path: string, hostId: string) {
  const { contentsBase64 } = await callVscodeApi("read-file-binary", {
    params: {
      hostId,
      path,
    },
  });
  if (contentsBase64 == null) {
    throw Error(`Unable to read goal attachment ${path}`);
  }
  return contentsBase64;
}
export async function readImageAttachmentAsBase64(
  imageAttachment: ImageAttachment,
  hostId: string,
) {
  if (imageAttachment.src.startsWith("data:")) {
    const dataUrlMatch = imageAttachment.src.match(
      /^data:[^,]*?(;base64)?,(.*)$/is,
    );
    if (dataUrlMatch == null) {
      throw Error("Unable to decode goal image");
    }
    return dataUrlMatch[1] == null
      ? encodeBase64Text(decodeURIComponent(dataUrlMatch[2] ?? ""))
      : (dataUrlMatch[2] ?? "");
  }
  const path =
    imageAttachment.localPath ?? imageAttachment.src.replace(/^file:\/\//i, "");
  return readBinaryFileAsBase64(
    imageAttachment.localPath == null ? decodeURIComponent(path) : path,
    imageAttachment.localPath == null ? LOCAL_HOST_ID : hostId,
  );
}
export function getImageAttachmentExtension(imageAttachment: ImageAttachment) {
  const fileExtension = (
    imageAttachment.filename ?? imageAttachment.localPath
  )?.match(/\.([a-z0-9]{1,8})$/i)?.[1];
  if (fileExtension != null) {
    return fileExtension.toLowerCase();
  }
  const mediaType = imageAttachment.src.match(
    /^data:image\/([a-z0-9.+-]+);/i,
  )?.[1];
  return mediaType === "jpeg"
    ? "jpg"
    : mediaType?.replace(/[^a-z0-9]/gi, "").slice(0, 8) || "png";
}
export function isHttpUrl(value: string) {
  return /^https?:\/\//i.test(value);
}
export function appendReferenceSection(
  objective: string,
  title: string,
  lines: string[],
) {
  return lines.length === 0
    ? objective
    : `${objective.length > 0 ? `${objective}\n\n` : ""}${title}\n${lines.join("\n")}`;
}
