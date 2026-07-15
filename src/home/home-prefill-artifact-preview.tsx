// Restored from ref/webview/assets/home-prefill-artifact-preview-BSpJO2AO.js
// Opens prefilled artifact preview files once per home route location key.
import { useEffect, useRef } from "react";
import {
  appScopeO as useAppScopeStore,
  appScopeT as appScopeStoreScope,
} from "../boundaries/app-scope";
import { openArtifactTab } from "../workspace/open-artifact-tab";

export interface HomePrefillArtifactPreviewFile {
  fsPath?: string | null;
  label?: string;
  path?: string | null;
}

export interface HomePrefillArtifactPreviewProps {
  hostId: string;
  locationKey: string;
  previewFiles?: readonly HomePrefillArtifactPreviewFile[] | null;
}

export function HomePrefillArtifactPreview({
  hostId,
  locationKey,
  previewFiles,
}: HomePrefillArtifactPreviewProps): null {
  useHomePrefillArtifactPreview({ hostId, locationKey, previewFiles });
  return null;
}

function useHomePrefillArtifactPreview({
  hostId,
  locationKey,
  previewFiles,
}: HomePrefillArtifactPreviewProps): void {
  const appScopeStore = useAppScopeStore(appScopeStoreScope);
  const handledLocationKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (
      previewFiles == null ||
      previewFiles.length === 0 ||
      handledLocationKeyRef.current === locationKey
    ) {
      return;
    }

    handledLocationKeyRef.current = locationKey;
    for (const previewFile of previewFiles) {
      const path = previewFile.fsPath || previewFile.path;
      if (path == null || path.length === 0) continue;

      openArtifactTab(appScopeStore, path, {
        hostId,
        title: previewFile.label,
      });
    }
  }, [appScopeStore, hostId, locationKey, previewFiles]);
}
