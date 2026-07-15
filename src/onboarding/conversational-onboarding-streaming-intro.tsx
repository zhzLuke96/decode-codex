// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Streaming markdown wrapper for conversational-onboarding intro copy. Fades
// segments in and reports completion once the final segment has animated (or
// after a safety timeout when an onComplete handler is supplied).
import React from "react";
// Streaming markdown renderer (alias `Km` / original `nt` in the source chunk),
// owned by a sibling chunk that has not been restored yet. Imported here by role.
import { StreamingFadeMarkdown } from "../markdown/streaming-fade-markdown";

type UseEffectEvent = <Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
) => (...args: Args) => Return;

const useEffectEvent = (
  React as typeof React & {
    useEffectEvent: UseEffectEvent;
  }
).useEffectEvent;

const INTRO_COMPLETE_FALLBACK_MS = 2500;

type ConversationalOnboardingStreamingIntroProps = {
  animate: boolean;
  children: React.ReactNode;
  onComplete?: (() => void) | null;
};

export function initConversationalOnboardingStreamingIntroChunk(): void {}

export function ConversationalOnboardingStreamingIntro({
  animate,
  children,
  onComplete,
}: ConversationalOnboardingStreamingIntroProps) {
  const handleComplete = useEffectEvent(() => {
    onComplete?.();
  });
  const hasCompletionHandler = onComplete != null;

  React.useEffect(() => {
    if (!animate || !hasCompletionHandler) return;
    const timeoutId = window.setTimeout(
      handleComplete,
      INTRO_COMPLETE_FALLBACK_MS,
    );
    return () => window.clearTimeout(timeoutId);
  }, [animate, children, hasCompletionHandler]);

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (
      !animate ||
      !hasCompletionHandler ||
      !(event.target instanceof HTMLElement)
    ) {
      return;
    }
    const fadeDelay = event.target.style.getPropertyValue("--fade-delay");
    if (fadeDelay === "") return;
    const fadeDelayValue = Number.parseFloat(fadeDelay);
    const hasLaterSegment = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        '[style*="--fade-delay"]',
      ),
    ).some(
      (element) =>
        Number.parseFloat(element.style.getPropertyValue("--fade-delay")) >
        fadeDelayValue,
    );
    if (!hasLaterSegment) {
      onComplete?.();
    }
  };

  return (
    <div onAnimationEnd={handleAnimationEnd}>
      <StreamingFadeMarkdown
        className="[&>p:not(:last-child)]:mb-4"
        fadeSegmentDelayMs={24}
        fadeSegmentMaxDelayMs={800}
        isStreaming={animate}
      >
        {children}
      </StreamingFadeMarkdown>
    </div>
  );
}
