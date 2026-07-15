// Restored from ref/webview/assets/code-snippet-5cGi4tCG.js
// code-snippet-5cGi4tCG chunk restored from the Codex webview bundle.
import React, {
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type SVGProps,
} from "react";
import clsx from "clsx";
import { useIntl } from "../../vendor/react-intl";
import { CopyButton } from "../copy-button";
import { Button } from "../button";
import { Tooltip } from "../tooltip-b";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { dataUrlFromSvg } from "../../utils/data-url-from";
import type { HighlightCodeResult } from "../../utils/highlight-code";
import { PreloadHelper } from "../../utils/preload-helper";
import { useIsDark } from "../../utils/use-is-dark";
type HighlightCodeModule = typeof import("../../utils/highlight-code");
const HIGHLIGHT_THROTTLE_MS = 120;
let highlightCodeModulePromise: Promise<HighlightCodeModule> | null = null;
function loadHighlightCodeModule() {
  if (highlightCodeModulePromise == null) {
    highlightCodeModulePromise = PreloadHelper(
      () => import("../../utils/highlight-code"),
    );
  }
  return highlightCodeModulePromise;
}
function sanitizeSvgMarkup(svgString: string) {
  if (typeof document > "u") throw Error("not supported in SSR");
  const template = document.createElement("template");
  template.innerHTML = svgString;
  return template.innerHTML;
}
type SvgPreviewImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  svgString: string;
};
function SvgPreviewImage({ svgString, ...imageProps }: SvgPreviewImageProps) {
  const sanitizedSvgMarkup = sanitizeSvgMarkup(svgString);
  if (!sanitizedSvgMarkup) return null;
  return <img src={dataUrlFromSvg(sanitizedSvgMarkup)} {...imageProps} />;
}
const HighlightedCodeHtml = React.memo(function HighlightedCodeHtml({
  html,
}: {
  html: string;
}) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
});
function isSvgMarkup(content: string) {
  return content.trim().startsWith("<svg");
}
function copySelectedText(event: MouseEvent<HTMLElement>) {
  if (event.defaultPrevented) return;
  event.preventDefault();
  event.stopPropagation();
  const selectedText = window.getSelection()?.toString();
  if (selectedText) void copyToClipboard(selectedText, event);
}
type CodeBlockToolbarProps = HTMLAttributes<HTMLDivElement> & {
  removeTopBorderRadius?: boolean;
};
function CodeBlockToolbar({
  className,
  removeTopBorderRadius,
  ...toolbarProps
}: CodeBlockToolbarProps) {
  return (
    <div
      data-markdown-copy="exclude"
      className={clsx(
        "flex items-center py-1 pe-2 ps-2 font-sans text-sm text-token-description-foreground select-none",
        !removeTopBorderRadius && "rounded-t-lg",
        className,
      )}
      {...toolbarProps}
    />
  );
}
type CodeScrollContainerProps = HTMLAttributes<HTMLDivElement>;
const CodeScrollContainer = React.forwardRef<
  HTMLDivElement,
  CodeScrollContainerProps
>(function CodeScrollContainer(
  { children, className, ...containerProps },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx("text-size-chat overflow-auto p-2", className)}
      dir="ltr"
      {...containerProps}
    >
      {children}
    </div>
  );
});
type CodeElementProps = HTMLAttributes<HTMLElement> & {
  shouldWrap?: boolean;
};
function CodeElement({
  className,
  shouldWrap,
  ...codeProps
}: CodeElementProps) {
  return (
    <code
      className={clsx(
        shouldWrap ? "whitespace-pre-wrap!" : "whitespace-pre!",
        className,
      )}
      {...codeProps}
    />
  );
}
type CodeBlockShellProps = {
  children: ReactNode;
  title?: ReactNode;
  codeCopyText?: string;
  stickyTitleRightContent?: ReactNode;
  shouldWrapCode?: boolean;
  className?: string;
  codeContainerClassName?: string;
  codeClassName?: string;
  onCopy?: (event: MouseEvent<HTMLElement>) => void;
  removeTopBorderRadius?: boolean;
  showActionBar?: boolean;
};
const CodeBlockShell = React.forwardRef<HTMLDivElement, CodeBlockShellProps>(
  function CodeBlockShell(
    {
      children,
      title,
      codeCopyText,
      stickyTitleRightContent,
      shouldWrapCode = false,
      className,
      codeContainerClassName,
      codeClassName,
      onCopy,
      removeTopBorderRadius,
      showActionBar = true,
    },
    ref,
  ) {
    const isDark = useIsDark();
    const theme = isDark ? "dark" : "light";
    return (
      <div
        data-markdown-copy="code-block"
        data-markdown-copy-text={codeCopyText}
        className={clsx(
          "relative w-full min-w-0 overflow-clip rounded-lg border contain-inline-size",
          "bg-token-text-code-block-background border-token-input-background",
          theme,
          className,
        )}
        data-theme={theme}
      >
        {showActionBar ? (
          <CodeBlockToolbar removeTopBorderRadius={removeTopBorderRadius}>
            <div className="min-w-0 flex-1 truncate">{title}</div>
            <div className="ml-auto flex shrink-0 items-center">
              {stickyTitleRightContent}
            </div>
          </CodeBlockToolbar>
        ) : null}
        <CodeScrollContainer ref={ref} className={codeContainerClassName}>
          <CodeElement
            shouldWrap={shouldWrapCode}
            className={codeClassName}
            onCopy={onCopy}
          >
            {children}
          </CodeElement>
        </CodeScrollContainer>
      </div>
    );
  },
);
type HighlightState = {
  disposed: boolean;
  latestContent: string;
  latestLanguage?: string;
  lastStartedAtMs: number | null;
  timeoutHandle: ReturnType<typeof setTimeout> | null;
};
type CodeSnippetProps = {
  wrapperClassName?: string;
  codeClassName?: string;
  language?: string;
  content: string;
  shouldWrapCode?: boolean;
  removeTopBorderRadius?: boolean;
  showActionBar?: boolean;
  showStickyRightContent?: boolean;
  codeContainerClassName?: string;
  title?: ReactNode;
  copyButtonText?: ReactNode;
  onToggleWrapCode?: () => void;
};
function CodeSnippet({
  wrapperClassName,
  codeClassName,
  language,
  content,
  shouldWrapCode = false,
  removeTopBorderRadius,
  showActionBar = true,
  showStickyRightContent = true,
  codeContainerClassName,
  title,
  copyButtonText,
  onToggleWrapCode,
}: CodeSnippetProps) {
  const codeContainerRef = React.useRef<HTMLDivElement | null>(null);
  const intl = useIntl();
  const [highlightedCode, setHighlightedCode] =
    React.useState<HighlightCodeResult | null>(null);
  const highlightStateRef = React.useRef<HighlightState>({
    disposed: false,
    latestContent: content,
    latestLanguage: language,
    lastStartedAtMs: null,
    timeoutHandle: null,
  });
  const handleCopy = React.useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      void copyToClipboard(content, event);
    },
    [content],
  );
  React.useEffect(() => {
    const highlightState = highlightStateRef.current;
    highlightState.latestContent = content;
    highlightState.latestLanguage = language;
    if (highlightState.timeoutHandle != null) return;
    const now = performance.now();
    const elapsedSinceLastStart =
      highlightState.lastStartedAtMs == null
        ? HIGHLIGHT_THROTTLE_MS
        : now - highlightState.lastStartedAtMs;
    const delayMs = Math.max(0, HIGHLIGHT_THROTTLE_MS - elapsedSinceLastStart);
    const runHighlight = () => {
      highlightState.timeoutHandle = null;
      if (highlightState.disposed) return;
      const nextContent = highlightState.latestContent;
      const nextLanguage = highlightState.latestLanguage;
      highlightState.lastStartedAtMs = performance.now();
      loadHighlightCodeModule().then((module) => {
        if (highlightState.disposed || module == null) return;
        try {
          setHighlightedCode(module.highlightCode(nextContent, nextLanguage));
        } catch (error) {
          if (
            !(error instanceof Error && /Unknown language/i.test(error.message))
          ) {
            throw error;
          }
        }
      });
    };
    if (delayMs === 0) {
      runHighlight();
      return;
    }
    highlightState.timeoutHandle = setTimeout(runHighlight, delayMs);
  }, [content, language]);
  React.useEffect(() => {
    const highlightState = highlightStateRef.current;
    highlightState.disposed = false;
    return () => {
      highlightState.disposed = true;
      if (highlightState.timeoutHandle != null) {
        clearTimeout(highlightState.timeoutHandle);
        highlightState.timeoutHandle = null;
      }
    };
  }, []);
  const isSvgPreview =
    language === "svg" ||
    ((language === "xml" || language === "html") && isSvgMarkup(content));
  const trustedHighlight =
    highlightedCode != null && content.startsWith(highlightedCode.code)
      ? highlightedCode
      : null;
  const codeChildren = isSvgPreview ? (
    <SvgPreviewImage svgString={content} className="max-h-96 w-full" />
  ) : trustedHighlight == null ? (
    <span>{content}</span>
  ) : (
    <span>
      {trustedHighlight.html.split("\n").map((lineHtml, index, lines) => (
        <React.Fragment key={index}>
          <HighlightedCodeHtml html={lineHtml} />
          {index < lines.length - 1 ? "\n" : null}
        </React.Fragment>
      ))}
      {content.slice(trustedHighlight.code.length) ? (
        <span>{content.slice(trustedHighlight.code.length)}</span>
      ) : null}
    </span>
  );
  const wrapButtonLabel = shouldWrapCode
    ? intl.formatMessage({
        id: "codeSnippet.wrap.disable",
        defaultMessage: "Disable word wrap",
        description: "Button to disable word wrap for a code snippet",
      })
    : intl.formatMessage({
        id: "codeSnippet.wrap.enable",
        defaultMessage: "Enable word wrap",
        description: "Button to enable word wrap for a code snippet",
      });
  const WrapIcon = shouldWrapCode ? WordWrapOffIcon : WordWrapOnIcon;
  const stickyTitleRightContent = showStickyRightContent ? (
    <div className="flex items-center gap-px">
      {onToggleWrapCode == null ? null : (
        <Tooltip tooltipContent={wrapButtonLabel}>
          <Button
            aria-label={wrapButtonLabel}
            aria-pressed={shouldWrapCode}
            color="ghost"
            size="icon"
            className={
              shouldWrapCode ? "hover:text-token-foreground" : undefined
            }
            onClick={onToggleWrapCode}
          >
            <WrapIcon className="icon-2xs" />
          </Button>
        </Tooltip>
      )}
      <CopyButton
        iconClassName="icon-xs"
        iconOnly
        buttonText={
          copyButtonText ??
          intl.formatMessage({
            id: "copyButton.copyCode",
            defaultMessage: "Copy code",
            description: "Button to copy the contents of the code snippet",
          })
        }
        onCopy={handleCopy}
      />
    </div>
  ) : null;
  return (
    <CodeBlockShell
      ref={codeContainerRef}
      title={title ?? language}
      codeCopyText={isSvgPreview ? content : undefined}
      shouldWrapCode={shouldWrapCode}
      stickyTitleRightContent={stickyTitleRightContent}
      codeClassName={codeClassName}
      codeContainerClassName={codeContainerClassName}
      onCopy={copySelectedText}
      className={wrapperClassName}
      removeTopBorderRadius={removeTopBorderRadius}
      showActionBar={showActionBar}
    >
      {codeChildren}
    </CodeBlockShell>
  );
}
function WordWrapOnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10.33 12.668c.367 0 .665.298.665.665l.002 3.333a.665.665 0 0 1-1.33.001l-.002-3.334c0-.367.298-.665.665-.665Zm3.364-5.639a.665.665 0 0 1 .94 0l2.5 2.5c.26.26.26.682 0 .942l-2.5 2.5a.666.666 0 0 1-.94-.942l1.365-1.364H3.33a.665.665 0 1 1 0-1.33h11.728l-1.365-1.364a.666.666 0 0 1 0-.942ZM10.33 2.668c.367 0 .665.298.665.665l.002 3.333a.665.665 0 0 1-1.33.001l-.002-3.334c0-.367.298-.665.665-.665Z" />
    </svg>
  );
}
function WordWrapOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M15.672 2.668c.367 0 .665.298.665.665l-.002 13.333a.665.665 0 0 1-1.33 0l.002-13.333c0-.367.298-.665.665-.665ZM9.586 6.002a3.582 3.582 0 0 1 0 7.163H5.777l.949.948a.665.665 0 1 1-.94.94l-2.084-2.082a.667.667 0 0 1 0-.94l2.083-2.085a.666.666 0 0 1 .94.942l-.947.947h3.808a2.251 2.251 0 0 0 0-4.503H4.169a.666.666 0 0 1 0-1.33h5.417Z" />
    </svg>
  );
}
export { WordWrapOffIcon, WordWrapOnIcon, CodeSnippet };
