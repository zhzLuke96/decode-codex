// Restored from ref/webview/assets/mermaid-diagram-shell-BO-t9BGx.js
// mermaid-diagram-shell-BO-t9BGx chunk restored from the Codex webview bundle.
import clsx from "clsx";
import React from "react";
import type {
  ComponentType,
  HTMLAttributes,
  ReactNode,
  TransitionEvent,
} from "react";
import { useIntl } from "react-intl";
import { useIsDark } from "./use-is-dark";
type MermaidRendererProps = {
  code: string;
  isCodeFenceOpen: boolean;
  isDark: boolean;
  isVisible: boolean;
  onError: (renderKey: string) => void;
  onRendered: (renderKey: string, height: number) => void;
  renderKey: string;
};
type MermaidRenderState =
  | {
      height: number;
      key: string;
      status: "rendered";
    }
  | {
      key: string;
      status: "error";
    };
type MermaidDiagramShellProps = {
  Renderer: ComponentType<MermaidRendererProps>;
  className?: string;
  code: string;
  fallback?: ReactNode;
  isCodeFenceOpen?: boolean;
  wideBlockKind?: string;
};
function MermaidDiagramLoadingPlaceholder({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const intl = useIntl();
  return (
    <div
      role="status"
      aria-label={intl.formatMessage({
        id: "mermaidDiagram.loading",
        defaultMessage: "Loading Mermaid diagram",
        description:
          "Accessible label for a Mermaid diagram loading placeholder",
      })}
      className={clsx("mcp-app-loading-pulse overflow-hidden", className)}
      {...rest}
    />
  );
}
export function MermaidDiagramShell({
  Renderer,
  className,
  code,
  fallback,
  isCodeFenceOpen = false,
  wideBlockKind,
}: MermaidDiagramShellProps) {
  const isDark = !!useIsDark();
  const renderKey = `${isDark ? "dark" : "light"}::${code}`;
  const [renderState, setRenderState] =
    React.useState<MermaidRenderState | null>(null);
  const [hiddenLoadingKey, setHiddenLoadingKey] = React.useState<string | null>(
    null,
  );
  const renderedHeight =
    renderState?.key === renderKey && renderState.status === "rendered"
      ? renderState.height
      : null;
  const isRendered = !isCodeFenceOpen && renderedHeight != null;
  const hasRenderError =
    !isCodeFenceOpen &&
    renderState?.key === renderKey &&
    renderState.status === "error";
  const showLoadingPlaceholder = !isRendered || hiddenLoadingKey !== renderKey;
  return (
    <div
      className={clsx("my-2", className)}
      data-wide-markdown-block={wideBlockKind == null ? undefined : "true"}
      data-wide-markdown-block-kind={wideBlockKind}
    >
      {hasRenderError ? (
        fallback
      ) : (
        <div
          className="relative flow-root w-full overflow-hidden rounded-lg bg-token-text-code-block-background/10 after:pointer-events-none after:absolute after:inset-0 after:z-20 after:rounded-lg after:border after:border-token-border-light after:content-[''] motion-safe:transition-[height] motion-safe:duration-300 motion-safe:ease-out"
          style={{
            height: renderedHeight ?? 240,
          }}
        >
          {showLoadingPlaceholder ? (
            <MermaidDiagramLoadingPlaceholder
              aria-hidden={isRendered || undefined}
              className={clsx(
                "pointer-events-none absolute inset-0 z-10 !bg-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
                isRendered
                  ? "opacity-0 delay-300 motion-reduce:delay-0"
                  : "opacity-100 delay-0",
              )}
              onTransitionEnd={(event: TransitionEvent<HTMLDivElement>) => {
                if (
                  event.currentTarget === event.target &&
                  event.propertyName === "opacity" &&
                  isRendered
                ) {
                  setHiddenLoadingKey(renderKey);
                }
              }}
            />
          ) : null}
          <div
            className={clsx(
              "transition-opacity duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
              isRendered
                ? "opacity-100 delay-300 motion-reduce:delay-0"
                : "pointer-events-none opacity-0 delay-0",
            )}
          >
            <React.Suspense fallback={null}>
              <Renderer
                code={code}
                isCodeFenceOpen={isCodeFenceOpen}
                isDark={isDark}
                isVisible={isRendered}
                renderKey={renderKey}
                onError={(failedRenderKey) => {
                  setRenderState({
                    key: failedRenderKey,
                    status: "error",
                  });
                }}
                onRendered={(nextRenderKey, height) => {
                  setRenderState((currentState) =>
                    currentState?.key === nextRenderKey &&
                    currentState.status === "rendered" &&
                    currentState.height === height
                      ? currentState
                      : {
                          height,
                          key: nextRenderKey,
                          status: "rendered",
                        },
                  );
                }}
              />
            </React.Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
