// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Named HTML character-reference decoder facade used by restored title helpers.
import {
  G_ as initNamedHtmlEntityDecoderRaw,
  K_ as decodeNamedHtmlEntityReferenceRaw,
} from "../vendor/projects-app-shared-runtime";

export type NamedHtmlEntityDecodeResult = string | false;

export function initNamedHtmlEntityDecoderRuntime(): void {
  initNamedHtmlEntityDecoderRaw();
}

export function decodeNamedHtmlEntityReference(
  value: string,
): NamedHtmlEntityDecodeResult {
  return decodeNamedHtmlEntityReferenceRaw(
    value,
  ) as NamedHtmlEntityDecodeResult;
}
