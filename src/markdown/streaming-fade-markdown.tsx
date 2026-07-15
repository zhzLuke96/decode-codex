// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Markdown-ish text presenter that applies the same staggered fade custom
// property used by the onboarding intro animation.
import React from "react";

type StreamingFadeMarkdownProps = {
  children: React.ReactNode;
  className?: string;
  fadeSegmentDelayMs?: number;
  fadeSegmentMaxDelayMs?: number;
  isStreaming?: boolean;
};

type FadeSegmentStyle = React.CSSProperties & {
  "--fade-delay"?: string;
};

function clampFadeDelay({
  fadeSegmentDelayMs,
  fadeSegmentMaxDelayMs,
  segmentIndex,
}: {
  fadeSegmentDelayMs: number;
  fadeSegmentMaxDelayMs: number;
  segmentIndex: number;
}): number {
  return Math.min(segmentIndex * fadeSegmentDelayMs, fadeSegmentMaxDelayMs);
}

function renderSegmentedText({
  fadeSegmentDelayMs,
  fadeSegmentMaxDelayMs,
  isStreaming,
  text,
}: {
  fadeSegmentDelayMs: number;
  fadeSegmentMaxDelayMs: number;
  isStreaming: boolean;
  text: string;
}): React.ReactNode {
  return text.match(/\S+\s*/g)?.map((segment, index) => {
    const style: FadeSegmentStyle = isStreaming
      ? {
          "--fade-delay": `${clampFadeDelay({
            fadeSegmentDelayMs,
            fadeSegmentMaxDelayMs,
            segmentIndex: index,
          })}ms`,
        }
      : {};
    return (
      <span
        className={isStreaming ? "animate-in fade-in duration-300" : undefined}
        key={`${segment}-${index}`}
        style={style}
      >
        {segment}
      </span>
    );
  });
}

export function StreamingFadeMarkdown({
  children,
  className,
  fadeSegmentDelayMs = 0,
  fadeSegmentMaxDelayMs = Number.POSITIVE_INFINITY,
  isStreaming = false,
}: StreamingFadeMarkdownProps) {
  if (typeof children !== "string") {
    return <div className={className}>{children}</div>;
  }

  const paragraphs = children.split(/\n{2,}/);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={`${paragraph}-${paragraphIndex}`}>
          {renderSegmentedText({
            fadeSegmentDelayMs,
            fadeSegmentMaxDelayMs,
            isStreaming,
            text: paragraph,
          })}
        </p>
      ))}
    </div>
  );
}

StreamingFadeMarkdown.displayName = "StreamingFadeMarkdown";
