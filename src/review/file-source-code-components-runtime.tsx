// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File-source viewer chrome, hover context, search registration, and renderer.
import React, {
  Component,
  type ErrorInfo,
  type ReactElement,
  type ReactNode,
} from "react";
import { FileSourceSearchRegistration } from "./file-source-helpers";
import {
  UnifiedFileDiffRenderer,
  type FileDiffRenderMetrics,
  type RenderableFileDiff,
} from "./unified-file-diff-renderer";

type SourceFile = {
  cacheKey: string;
  contents: string;
  lang?: string;
  name: string;
};
type DiffSourceRendererProps = {
  file: SourceFile;
  lineAnnotations?: unknown;
  metrics?: FileDiffRenderMetrics;
  options?: Record<string, unknown>;
  renderAnnotation?: (...args: unknown[]) => ReactNode;
  selectedLines?: unknown;
};
type FileSourceRenderBoundaryProps = {
  children: ReactNode;
};
type FileSourceRenderBoundaryState = {
  hasError: boolean;
};

export function CodeViewerChrome({
  children,
}: {
  canOpenFile?: boolean;
  children?: ReactNode;
  handleOpenInTarget?: () => void;
  onCopyPath?: () => void;
  onRequestChanges?: () => void;
  onToggleWrap?: () => void;
}): ReactElement {
  return <div className="flex h-full min-h-0 flex-col">{children}</div>;
}

export class FileSourceHoverController {
  private root: Element | null = null;
  private target: Element | null = null;

  setup(root: Element, target: Element): void {
    this.root = root;
    this.target = target;
  }

  cleanUp(): void {
    this.root = null;
    this.target = null;
  }

  getRoot(): Element | null {
    return this.root;
  }

  getTarget(): Element | null {
    return this.target;
  }
}

export const FileSourceHoverContext =
  React.createContext<FileSourceHoverController | null>(null);

export function SourceSearchController({
  sourceSearchSource,
}: {
  sourceSearchSource: unknown;
}): ReactElement | null {
  return (
    <FileSourceSearchRegistration sourceSearchSource={sourceSearchSource} />
  );
}

export class FileSourceRenderBoundary extends Component<
  FileSourceRenderBoundaryProps,
  FileSourceRenderBoundaryState
> {
  state: FileSourceRenderBoundaryState = { hasError: false };

  static getDerivedStateFromError(): FileSourceRenderBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {}

  componentDidUpdate(previousProps: FileSourceRenderBoundaryProps): void {
    if (previousProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render(): ReactNode {
    return this.state.hasError ? null : this.props.children;
  }
}

export function DiffSourceRenderer({
  file,
  lineAnnotations,
  metrics,
  options = {},
  renderAnnotation,
  selectedLines,
}: DiffSourceRendererProps): ReactElement {
  const fileDiff = React.useMemo(() => buildSourceFileDiff(file), [file]);
  return (
    <UnifiedFileDiffRenderer
      {...options}
      fileDiff={fileDiff}
      hunkSeparators="simple"
      lineAnnotations={lineAnnotations}
      metrics={metrics}
      overflow={options.overflow === "wrap" ? "wrap" : "scroll"}
      renderAnnotation={renderAnnotation}
      selectedLines={selectedLines}
    />
  );
}

function buildSourceFileDiff(file: SourceFile): RenderableFileDiff {
  const lines = splitSourceLines(file.contents);
  return {
    additionLines: lines,
    cacheKey: file.cacheKey,
    deletionLines: [],
    hunks: [
      {
        additionCount: lines.length,
        additionLines: lines,
        additionStart: 1,
        deletionCount: 0,
        deletionLines: [],
        deletionStart: 0,
      },
    ],
    metadata: {
      additionLines: lines,
      deletionLines: [],
      hunks: [
        {
          additionCount: lines.length,
          additionStart: 1,
          deletionCount: 0,
          deletionStart: 0,
          hunkContent: [
            {
              additionLineIndex: 0,
              lines: lines.length,
              type: "context",
            },
          ],
        },
      ],
      name: file.name,
      type: "modified",
    },
    name: file.name,
  };
}

function splitSourceLines(contents: string): string[] {
  const lines = contents.split(/\r?\n/u);
  return lines.length === 0 ? [""] : lines;
}
