// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Opens files referenced from composer mentions and attachment pills.
import { openFileAtLine } from "../runtime/file-open-runtime";

type FileOpenMutation =
  | ((params: Record<string, unknown>) => Promise<unknown> | unknown)
  | {
      mutate?: (params: Record<string, unknown>) => Promise<unknown> | unknown;
      mutateAsync?: (
        params: Record<string, unknown>,
      ) => Promise<unknown> | unknown;
    };

type OpenComposerReferencedFileOptions = {
  cwd?: string | null;
  hostConfig?: { id?: string | null } | null;
  hostId?: string | null;
  openFile?: FileOpenMutation | null;
  openInSidePanel?: boolean;
  path?: string | null;
  target?: string | null;
};

function trimNonEmpty(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

export async function openComposerReferencedFile(
  optionsOrDescriptor: OpenComposerReferencedFileOptions | unknown,
  hostId?: string | null,
  fallbackOptions: OpenComposerReferencedFileOptions = {},
): Promise<unknown> {
  const options = normalizeOpenFileOptions(
    optionsOrDescriptor,
    hostId,
    fallbackOptions,
  );
  if (options.path == null) return;

  const params = {
    cwd: options.cwd ?? null,
    hostConfig: options.hostConfig ?? null,
    hostId: options.hostId ?? options.hostConfig?.id ?? hostId ?? null,
    openInSidePanel: options.openInSidePanel ?? true,
    path: options.path,
    target: options.target ?? undefined,
  };
  const mutation = options.openFile;

  if (typeof mutation === "function") return mutation(params);
  if (mutation?.mutateAsync != null) return mutation.mutateAsync(params);
  if (mutation?.mutate != null) return mutation.mutate(params);

  return openFileAtLine({
    cwd: params.cwd,
    hostId: params.hostId,
    openInSidePanel: params.openInSidePanel,
    path: params.path,
  });
}

function normalizeOpenFileOptions(
  optionsOrDescriptor: OpenComposerReferencedFileOptions | unknown,
  hostId: string | null | undefined,
  fallbackOptions: OpenComposerReferencedFileOptions,
): OpenComposerReferencedFileOptions {
  if (
    optionsOrDescriptor != null &&
    typeof optionsOrDescriptor === "object" &&
    ("path" in optionsOrDescriptor ||
      "cwd" in optionsOrDescriptor ||
      "openFile" in optionsOrDescriptor)
  ) {
    return optionsOrDescriptor as OpenComposerReferencedFileOptions;
  }

  const descriptor =
    optionsOrDescriptor == null || typeof optionsOrDescriptor !== "object"
      ? {}
      : (optionsOrDescriptor as Record<string, unknown>);
  return {
    ...fallbackOptions,
    hostId,
    path:
      trimNonEmpty(descriptor.path) ??
      trimNonEmpty(descriptor.fsPath) ??
      trimNonEmpty(descriptor.filePath) ??
      trimNonEmpty(descriptor.absolutePath),
  };
}
