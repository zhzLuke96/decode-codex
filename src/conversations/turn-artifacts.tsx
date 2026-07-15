// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Artifact, end-resource, diff, generated-image, and web-search nodes for a turn.

import type { ReactNode } from "react";
import { EndResourcesList } from "./end-resource-cards";
import { ReviewCommentsCard } from "./review-comments-card";
import {
  GeneratedImagePlaceholder,
  GeneratedImagesGrid,
  TurnDiffView,
  WebSearchSources,
  computeEndResources,
  extractReviewComments,
  getEndResourcePaths,
  shouldHideTurnDiff,
} from "../boundaries/onboarding-commons-externals.facade";
import { computeGeneratedImageOutputs } from "./generated-image-outputs";

interface BuildTurnArtifactNodesOptions {
  assistantItem: any;
  completedGeneratedImages: any[];
  completedTurnId: string | null;
  conversationId: string;
  cwd: string | null;
  deferOffscreenDiffRendering: boolean;
  endResourceOpenSource: string;
  filteredUnifiedDiffItem: any;
  generatedImages: unknown;
  hasPendingToolOutputs: boolean;
  hostId: string;
  inputMessageId: unknown;
  isAppgenEndCardEnabled: boolean;
  isAssistantFinal: boolean;
  isEverydayDetail: boolean;
  isTurnInProgress: boolean;
  messageId: unknown;
  onFileOpen: (resourcePath: string, openSource: string) => void;
  projectlessOutputDirectory: string | null;
  turn: any;
  webSearchSources: any[];
}

export function buildTurnArtifactNodes({
  assistantItem,
  completedGeneratedImages,
  completedTurnId,
  conversationId,
  cwd,
  deferOffscreenDiffRendering,
  endResourceOpenSource,
  filteredUnifiedDiffItem,
  generatedImages,
  hasPendingToolOutputs,
  hostId,
  inputMessageId,
  isAppgenEndCardEnabled,
  isAssistantFinal,
  isEverydayDetail,
  isTurnInProgress,
  messageId,
  onFileOpen,
  projectlessOutputDirectory,
  turn,
  webSearchSources,
}: BuildTurnArtifactNodesOptions) {
  const endResources = computeEndResources({
    assistantContent: assistantItem?.content ?? null,
    projectlessOutputDirectory,
    isAppgenEndCardEnabled,
    turn,
  });
  const appgenResources = endResources.filter(
    (resource: any) => resource.type === "appgen-app",
  );
  const endResourcePaths = getEndResourcePaths(endResources);
  const endResourcesNode =
    endResources.length === 0 ? null : (
      <EndResourcesList
        turnId={completedTurnId ?? undefined}
        conversationId={conversationId}
        cwd={turn.cwd ?? cwd}
        hostId={hostId}
        inputMessageId={inputMessageId}
        messageId={messageId}
        onFileOpen={(resourcePath) => {
          onFileOpen(resourcePath, endResourceOpenSource);
        }}
        resources={endResources}
      />
    );
  const reviewComments =
    !isTurnInProgress && assistantItem != null
      ? extractReviewComments(assistantItem.content, turn.cwd ?? cwd)
      : [];
  const reviewCommentsNode =
    reviewComments.length === 0 ? null : (
      <ReviewCommentsCard comments={reviewComments} />
    );
  const { visibleCompletedGeneratedImages, shouldRenderGeneratedImageOutputs } =
    computeGeneratedImageOutputs({
      completedGeneratedImages,
      endResourcePaths,
      hasPendingGeneratedImages: hasPendingToolOutputs,
    });
  const hasArtifacts =
    endResources.length > 0 || shouldRenderGeneratedImageOutputs;
  const turnDiffNode =
    !isTurnInProgress &&
    filteredUnifiedDiffItem != null &&
    !isEverydayDetail &&
    !shouldHideTurnDiff({ endResources, turn }) ? (
      <TurnDiffView
        isInProgress={false}
        item={filteredUnifiedDiffItem}
        deferOffscreenRendering={deferOffscreenDiffRendering}
        conversationId={conversationId}
        cwd={cwd}
        hostId={hostId}
      />
    ) : null;
  const generatedImagesNode = shouldRenderGeneratedImageOutputs ? (
    <div className="flex flex-col gap-3">
      {visibleCompletedGeneratedImages.length > 0 ? (
        <GeneratedImagesGrid
          images={visibleCompletedGeneratedImages}
          conversationImages={generatedImages}
          conversationId={conversationId}
        />
      ) : null}
      {hasPendingToolOutputs ? <GeneratedImagePlaceholder /> : null}
    </div>
  ) : null;
  const webSearchSourcesNode =
    webSearchSources.length === 0 ? null : (
      <WebSearchSources className="mt-0" sources={webSearchSources} />
    );
  const assistantArtifactsNode: ReactNode =
    isAssistantFinal &&
    (endResourcesNode != null ||
      reviewCommentsNode != null ||
      generatedImagesNode != null ||
      turnDiffNode != null) ? (
      <div className="flex w-full flex-col gap-3">
        {generatedImagesNode}
        {endResourcesNode}
        {reviewCommentsNode}
        {turnDiffNode}
      </div>
    ) : null;
  return {
    appgenResources,
    assistantArtifactsNode,
    endResourcesNode,
    generatedImagesNode,
    hasArtifacts,
    shouldRenderGeneratedImageOutputs,
    turnDiffNode,
    webSearchSourcesNode,
  };
}
