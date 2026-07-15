// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Image attachment and submit handlers for the browser comment editor.

import { useCallback, useEffect } from "react";
import type { AttachedImage } from "./browser-comment-overlay-types";

export function useBrowserCommentEditorSubmitHandlers(
  context: Record<string, any>,
) {
  const {
    activeDesignEditorStateRef,
    allowImageAttachments,
    attachedImagesRef,
    baselineDesignGroupRef,
    bodyTextRef,
    buildCommentDraft,
    composer,
    getLocalPathForFile,
    isDesignDraftActive,
    isDesignEditorVisible,
    notifyLightDismissibility,
    onDesignChangeDelete,
    onDirectSubmit,
    onSubmit,
    setAttachedImages,
    submitMode,
  } = context;
  const readImageFile = useCallback(
    (file: File) =>
      new Promise<AttachedImage | null>((resolve) => {
        const reader = new FileReader();
        const filename = file.name.trim().length > 0 ? file.name : undefined;
        const electronBridge = (
          window as unknown as {
            electronBridge?: { getPathForFile?: (file: File) => string | null };
          }
        ).electronBridge;
        const localPath =
          getLocalPathForFile(file, electronBridge?.getPathForFile) ??
          undefined;
        reader.onload = (event) => {
          const result = event.target?.result;
          if (typeof result !== "string") {
            resolve(null);
            return;
          }
          resolve({ dataUrl: result, filename, localPath });
        };
        reader.onerror = () => {
          resolve(null);
        };
        reader.readAsDataURL(file);
      }),
    [],
  );

  const handleAddImages = useCallback(
    (files: File[]) => {
      if (!allowImageAttachments) return;
      Promise.all(files.map((file) => readImageFile(file))).then((results) => {
        const valid = results.filter(
          (item): item is AttachedImage => item != null,
        );
        if (valid.length === 0) return;
        const next = [...attachedImagesRef.current, ...valid];
        attachedImagesRef.current = next;
        setAttachedImages(next);
        notifyLightDismissibility(bodyTextRef.current, next);
      });
    },
    [allowImageAttachments, readImageFile, notifyLightDismissibility],
  );

  const submitComment = (source = "button") => {
    const text = composer.getText();
    const draft = buildCommentDraft({
      baselineDesignGroup: baselineDesignGroupRef.current,
      commentText: text,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignSubmissionMode: activeDesignEditorStateRef.current != null,
    });
    const designActive = isDesignDraftActive({
      baselineDesignGroup: baselineDesignGroupRef.current,
      designDraft: draft.designDraft,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignEditorOpen: isDesignEditorVisible,
    });
    if (draft.designDraft == null && !draft.hasCommentText) {
      if (designActive && baselineDesignGroupRef.current != null) {
        onDesignChangeDelete?.(baselineDesignGroupRef.current.id);
      }
      return;
    }
    onSubmit({
      body: draft.trimmedCommentText,
      submitSource: source,
      ...(!allowImageAttachments || attachedImagesRef.current.length === 0
        ? {}
        : { attachedImages: attachedImagesRef.current }),
      ...(designActive ? { designChange: draft.designDraft } : {}),
    });
  };

  const submitDirect = (source = "button") => {
    const text = composer.getText();
    const draft = buildCommentDraft({
      baselineDesignGroup: baselineDesignGroupRef.current,
      commentText: text,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignSubmissionMode: activeDesignEditorStateRef.current != null,
    });
    const designActive = isDesignDraftActive({
      baselineDesignGroup: baselineDesignGroupRef.current,
      designDraft: draft.designDraft,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignEditorOpen: isDesignEditorVisible,
    });
    if (!designActive && draft.hasCommentText) {
      onDirectSubmit({
        body: draft.trimmedCommentText,
        submitSource: source,
        ...(!allowImageAttachments || attachedImagesRef.current.length === 0
          ? {}
          : { attachedImages: attachedImagesRef.current }),
      });
    }
  };

  const primarySubmit = submitMode === "direct" ? submitDirect : submitComment;
  const secondarySubmit =
    submitMode === "direct" ? submitComment : submitDirect;

  useEffect(() => {
    if (!allowImageAttachments) return;
    const handler = (files: File[]) => {
      handleAddImages(files);
    };
    composer.addPastedImagesHandler(handler);
    return () => {
      composer.removePastedImagesHandler(handler);
    };
  }, [handleAddImages, allowImageAttachments, composer]);

  return {
    handleAddImages,
    submitComment,
    primarySubmit,
    secondarySubmit,
  };
}
