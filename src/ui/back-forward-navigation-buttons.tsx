// Restored from ref/webview/assets/back-forward-navigation-buttons-Cz-GufWg.js
// back-forward-navigation-buttons-Cz-GufWg chunk restored from the Codex webview bundle.
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { Button } from "../ui/button";
type BackForwardNavigationButtonsProps = {
  backLabel: string;
  canGoBack: boolean;
  canGoForward: boolean;
  forwardLabel: string;
  onBack: () => void;
  onForward: () => void;
};
function BackForwardNavigationButtons({
  backLabel,
  canGoBack,
  canGoForward,
  forwardLabel,
  onBack,
  onForward,
}: BackForwardNavigationButtonsProps) {
  return (
    <>
      <Button
        aria-label={backLabel}
        color="ghost"
        disabled={!canGoBack}
        onClick={onBack}
        size="toolbar"
        title={backLabel}
        uniform={true}
      >
        <ArrowLeftIcon className="icon-xs" />
      </Button>
      <Button
        aria-label={forwardLabel}
        color="ghost"
        disabled={!canGoForward}
        onClick={onForward}
        size="toolbar"
        title={forwardLabel}
        uniform={true}
      >
        <ArrowLeftIcon className="icon-xs -scale-x-100 transform" />
      </Button>
    </>
  );
}
function initBackForwardNavigationButtonsChunk(): void {}

export { BackForwardNavigationButtons, initBackForwardNavigationButtonsChunk };
