// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Overflow ("options") menu for a workspace file preview: toggles word wrap,
// rich/artifact preview, and git-blame, plus copy-path / copy-contents actions.
import { useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import {
  useStore,
  useAtomValue,
  routeAtom,
  gitBlameEnabledAtom,
  richPreviewEnabledAtom,
  wordWrapEnabledAtom,
  toggleArtifactPreview,
  setRichPreviewEnabled,
  recordProductEvent,
  gitBlameEnabledEventToken,
  copyTextToClipboard,
  copyFileContentsToClipboard,
  FileViewerOptionsIcon,
  CopyIcon,
  RichViewIcon,
  RichViewActiveIcon,
  GitBlameIcon,
  WordWrapEnabledIcon,
  WordWrapDisabledIcon,
  CheckIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export interface FileSourceOptionsMenuProps {
  hostId: string;
  path: string;
  showGitBlameControl: boolean;
  showArtifactPreviewControl: boolean;
  showRichPreviewControl: boolean;
  showWordWrapControl: boolean;
  tabId?: string;
}

export function FileSourceOptionsMenu(props: FileSourceOptionsMenuProps) {
  const {
    hostId,
    path,
    showGitBlameControl,
    showArtifactPreviewControl,
    showRichPreviewControl,
    showWordWrapControl,
    tabId,
  } = props;
  const scope = useStore(routeAtom);
  const intl = useIntl();
  const isGitBlameEnabled = useAtomValue(gitBlameEnabledAtom);
  const isRichPreviewEnabled = useAtomValue(richPreviewEnabledAtom);
  const isWordWrapEnabled = useAtomValue(wordWrapEnabledAtom);
  const [isOpen, setIsOpen] = useState(false);

  const ariaLabel = intl.formatMessage({
    id: "review.fileSource.options",
    defaultMessage: "File viewer options",
    description: "Aria label for the workspace file preview options menu",
  });
  const gitBlameTooltip = intl.formatMessage({
    id: "review.fileSource.gitBlame.tooltip",
    defaultMessage: "Show author, date, and commit details in the line gutter",
    description:
      "Tooltip for the workspace file preview menu item that toggles git blame metadata in the gutter",
  });

  const onToggleArtifactPreview = (event: Event) => {
    event.preventDefault();
    if (toggleArtifactPreview(scope, path, { hostId, tabId })) setIsOpen(false);
  };
  const onToggleRichPreview = (event: Event) => {
    event.preventDefault();
    setRichPreviewEnabled(scope, !isRichPreviewEnabled);
    setIsOpen(false);
  };
  const onToggleWordWrap = (event: Event) => {
    event.preventDefault();
    scope.set(wordWrapEnabledAtom, !isWordWrapEnabled);
    setIsOpen(false);
  };
  const onToggleGitBlame = (event: Event) => {
    event.preventDefault();
    const next = !isGitBlameEnabled;
    scope.set(gitBlameEnabledAtom, next);
    if (next) recordProductEvent(scope, gitBlameEnabledEventToken, {});
    setIsOpen(false);
  };
  const onCopyPath = (event: Event) => {
    event.preventDefault();
    copyTextToClipboard(path);
    setIsOpen(false);
  };
  const onCopyContents = (event: Event) => {
    event.preventDefault();
    copyFileContentsToClipboard(scope.queryClient, { hostId, path });
    setIsOpen(false);
  };

  const triggerButton = (
    <Button aria-label={ariaLabel} color="ghost" size="toolbar" uniform={true}>
      <FileViewerOptionsIcon className="icon-xs" />
    </Button>
  );

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={setIsOpen}
      align="end"
      contentWidth="menu"
      triggerButton={triggerButton}
    >
      <MenuChrome.Item onSelect={onCopyPath} LeftIcon={CopyIcon}>
        <FormattedMessage
          id="review.fileSource.copyPath"
          defaultMessage="Copy path"
          description="Menu item to copy the path of a workspace file preview"
        />
      </MenuChrome.Item>
      <MenuChrome.Item onSelect={onCopyContents} LeftIcon={CopyIcon}>
        <FormattedMessage
          id="review.fileSource.copyFileContents"
          defaultMessage="Copy file contents"
          description="Menu item to copy the contents of a workspace file preview"
        />
      </MenuChrome.Item>
      {showArtifactPreviewControl ? (
        <MenuChrome.Item
          onSelect={onToggleArtifactPreview}
          LeftIcon={RichViewIcon}
        >
          <FormattedMessage
            id="review.fileSource.richPreview.enable"
            defaultMessage="Enable rich view"
            description="Menu item to enable rich rendering for a workspace file preview"
          />
        </MenuChrome.Item>
      ) : null}
      {showRichPreviewControl ? (
        <MenuChrome.Item
          onSelect={onToggleRichPreview}
          LeftIcon={isRichPreviewEnabled ? RichViewActiveIcon : RichViewIcon}
        >
          {isRichPreviewEnabled ? (
            <FormattedMessage
              id="review.fileSource.richPreview.disable"
              defaultMessage="Disable rich view"
              description="Menu item to disable rich rendering for a workspace file preview"
            />
          ) : (
            <FormattedMessage
              id="review.fileSource.richPreview.enable"
              defaultMessage="Enable rich view"
              description="Menu item to enable rich rendering for a workspace file preview"
            />
          )}
        </MenuChrome.Item>
      ) : null}
      {showWordWrapControl ? (
        <MenuChrome.Item
          onSelect={onToggleWordWrap}
          LeftIcon={
            isWordWrapEnabled ? WordWrapEnabledIcon : WordWrapDisabledIcon
          }
        >
          {isWordWrapEnabled ? (
            <FormattedMessage
              id="review.fileSource.wrap.disable"
              defaultMessage="Disable word wrap"
              description="Menu item to disable word wrap in a workspace file preview"
            />
          ) : (
            <FormattedMessage
              id="review.fileSource.wrap.enable"
              defaultMessage="Enable word wrap"
              description="Menu item to enable word wrap in a workspace file preview"
            />
          )}
        </MenuChrome.Item>
      ) : null}
      {showGitBlameControl ? (
        <MenuChrome.Item
          onSelect={onToggleGitBlame}
          LeftIcon={GitBlameIcon}
          RightIcon={isGitBlameEnabled ? CheckIcon : undefined}
          tooltipText={gitBlameTooltip}
        >
          {isGitBlameEnabled ? (
            <FormattedMessage
              id="review.fileSource.gitBlame.disable"
              defaultMessage="Hide git blame"
              description="Menu item to hide git blame metadata in a workspace file preview gutter"
            />
          ) : (
            <FormattedMessage
              id="review.fileSource.gitBlame.enable"
              defaultMessage="Show git blame"
              description="Menu item to show git blame metadata in a workspace file preview gutter"
            />
          )}
        </MenuChrome.Item>
      ) : null}
    </DropdownMenu>
  );
}
