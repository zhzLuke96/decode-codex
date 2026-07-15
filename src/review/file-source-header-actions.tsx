// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Trailing toolbar actions for a workspace file preview header: the options
// overflow menu (when applicable) plus the "open in editor / external" button.
import { FileSourceOptionsMenu } from "./file-source-options-menu";
import {
  useStore,
  routeAtom,
  describeWorkspaceFile,
  isOpenableArtifactType,
  sendHostRequest,
  OpenFileButton,
} from "../boundaries/onboarding-commons-externals.facade";

export interface FileSourceHeaderActionsProps {
  cwd?: string | null;
  hasOptionsMenu: boolean;
  hostId: string;
  path: string;
  showGitBlameControl: boolean;
  showArtifactPreviewControl: boolean;
  showRichPreviewControl: boolean;
  showWordWrapControl: boolean;
  tabId?: string;
}

export function FileSourceHeaderActions(props: FileSourceHeaderActionsProps) {
  const {
    cwd,
    hasOptionsMenu,
    hostId,
    path,
    showGitBlameControl,
    showArtifactPreviewControl,
    showRichPreviewControl,
    showWordWrapControl,
    tabId,
  } = props;
  const scope = useStore(routeAtom);

  let onBeforeOpen: (() => unknown) | undefined;
  {
    const descriptor = describeWorkspaceFile(path);
    onBeforeOpen =
      descriptor != null && isOpenableArtifactType(descriptor.artifactType)
        ? () => {
            if (scope.value.routeKind === "local-thread") {
              return sendHostRequest("ignore-open-file-change-events", {
                conversationId: scope.value.conversationId,
                hostId,
                path,
              });
            }
          }
        : undefined;
  }

  return (
    <>
      {hasOptionsMenu && (
        <FileSourceOptionsMenu
          hostId={hostId}
          path={path}
          showGitBlameControl={showGitBlameControl}
          showArtifactPreviewControl={showArtifactPreviewControl}
          showRichPreviewControl={showRichPreviewControl}
          showWordWrapControl={showWordWrapControl}
          tabId={tabId}
        />
      )}
      <OpenFileButton
        cwd={cwd}
        hostId={hostId}
        onBeforeOpen={onBeforeOpen}
        path={path}
        persistPreferredTarget={true}
        showLabel={true}
      />
    </>
  );
}
