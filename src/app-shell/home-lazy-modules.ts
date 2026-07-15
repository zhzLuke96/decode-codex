// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Code-split (lazy + Suspense) wrappers for the heavier home-page surfaces so the
// initial home render only pulls in what it needs.

import { preloadDynamicImport } from "../runtime/dynamic-module-preload";
import { lazyLoadWithSuspense } from "../runtime/appgen-library-hot-producer-runtime";

export const LazyHomeAmbientSuggestionsContent = lazyLoadWithSuspense(
  async () =>
    (
      await preloadDynamicImport(
        async () => {
          const { HomeAmbientSuggestionsContent } = await import(
            "../runtime/current-app-initial/home-ambient-suggestions-content-current-runtime"
          );
          return { HomeAmbientSuggestionsContent };
        },
        [],
        import.meta.url,
      )
    ).HomeAmbientSuggestionsContent,
);

export const LazyHomeAnnouncements = lazyLoadWithSuspense(
  async () =>
    (
      await preloadDynamicImport(
        async () => {
          const { HomeAnnouncements } = await import("./home-announcements");
          return { HomeAnnouncements };
        },
        [],
        import.meta.url,
      )
    ).HomeAnnouncements,
);

export const LazyHomeArtifactTemplates = lazyLoadWithSuspense(
  async () =>
    (
      await preloadDynamicImport(
        async () => {
          const { HomeArtifactTemplates } = await import(
            "../home/artifact-templates"
          );
          return { HomeArtifactTemplates };
        },
        [],
        import.meta.url,
      )
    ).HomeArtifactTemplates,
);

export const LazyHomeConversationStarters = lazyLoadWithSuspense(
  async () =>
    (
      await preloadDynamicImport(
        async () => {
          const { HomeConversationStarters } = await import(
            "../home/home-conversation-starters"
          );
          return { HomeConversationStarters };
        },
        [],
        import.meta.url,
      )
    ).HomeConversationStarters,
);

export const LazyHomePrefillArtifactPreview = lazyLoadWithSuspense(
  async () =>
    (
      await preloadDynamicImport(
        async () => {
          const { HomePrefillArtifactPreview } = await import(
            "../home/home-prefill-artifact-preview"
          );
          return { HomePrefillArtifactPreview };
        },
        [],
        import.meta.url,
      )
    ).HomePrefillArtifactPreview,
);

export const LazyThreadAppShellChrome = lazyLoadWithSuspense(
  async () =>
    (
      await preloadDynamicImport(
        async () => {
          const { ThreadAppShellChrome } = await import(
            "./thread-app-shell-chrome"
          );
          return { ThreadAppShellChrome };
        },
        [],
        import.meta.url,
      )
    ).ThreadAppShellChrome,
);
