// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Bridges a workspace file into the OpenAI MCP "capability" surface: exposes the
// file as an MCP resource (with a stable codex-resource:// instance id) and a
// reader, then renders the embedded MCP app view for it.
import { useRef } from "react";
import {
  OpenAiMcpCapabilityView,
  type McpCapabilityViewModel,
} from "./openai-mcp-capability-view";
import { createWorkspaceFileReader } from "./workspace-file-reader";
import {
  buildFileViewerToolArguments,
  createFileResourceReader,
} from "../boundaries/onboarding-commons-externals.facade";

export function initFileSourceMcpResourceViewChunk(): void {}

interface FileViewer extends McpCapabilityViewModel {
  [key: string]: unknown;
}

export interface FileResourceMcpViewProps {
  className?: string;
  filePath: string;
  fileViewer: FileViewer;
  instanceId?: string | null;
  readResourceContents: (representation: unknown) => Promise<unknown>;
}

export function FileResourceMcpView(props: FileResourceMcpViewProps) {
  const { className, filePath, fileViewer, instanceId, readResourceContents } =
    props;

  const fallbackResourceUri = useRef<string | null>(null);
  if (instanceId == null && fallbackResourceUri.current == null) {
    fallbackResourceUri.current = `codex-resource://${crypto.randomUUID()}`;
  }
  const resourceUri = instanceId ?? fallbackResourceUri.current!;

  const toolArguments = buildFileViewerToolArguments(filePath, resourceUri);
  const readHostResource = createFileResourceReader({
    fileViewer,
    path: filePath,
    readContents: readResourceContents,
    resourceUri,
  });

  return (
    <OpenAiMcpCapabilityView
      className={className}
      instanceId={resourceUri}
      readHostResource={readHostResource}
      toolArguments={toolArguments}
      view={fileViewer}
    />
  );
}

export interface FileSourceMcpResourceViewProps {
  fileViewer: FileViewer;
  hostId: string;
  path: string;
}

export function FileSourceMcpResourceView(
  props: FileSourceMcpResourceViewProps,
) {
  const { fileViewer, hostId, path } = props;
  const readResourceContents = createWorkspaceFileReader({ hostId, path });
  return (
    <FileResourceMcpView
      className="bg-token-main-surface-primary"
      filePath={path}
      fileViewer={fileViewer}
      readResourceContents={readResourceContents}
    />
  );
}
