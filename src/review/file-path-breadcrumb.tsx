// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Breadcrumb shown above a workspace file preview: renders the path segments
// (relative to cwd), supports copy-as-path on selection, and hosts trailing
// toolbar actions.
import { useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import {
  splitWorkspacePathSegments,
  resolveWorkspacePath,
  displayWorkspacePath,
  BreadcrumbSeparatorIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export interface FilePathBreadcrumbProps {
  cwd?: string | null;
  path: string | null;
  trailingContent?: React.ReactNode;
}

export function FilePathBreadcrumb(props: FilePathBreadcrumbProps) {
  const { cwd, path, trailingContent } = props;
  const intl = useIntl();

  const segments =
    path == null ? ["/"] : splitWorkspacePathSegments({ cwd, path });
  if (segments.length === 0) return null;

  const joinedPath = segments.join("/");
  const copyPath =
    path == null
      ? joinedPath
      : displayWorkspacePath(resolveWorkspacePath({ cwd, path }));

  const ariaLabel = intl.formatMessage({
    id: "review.fileSource.breadcrumb.ariaLabel",
    defaultMessage: "File path",
    description:
      "Accessible label for breadcrumbs above a workspace file preview",
  });

  const onCopy = (event: React.ClipboardEvent) => {
    const selected = getSelectedBreadcrumbPath(
      event.currentTarget as HTMLElement,
    );
    if (selected != null) {
      event.preventDefault();
      event.clipboardData.setData(
        "text/plain",
        selected === joinedPath ? copyPath : selected,
      );
    }
  };

  return (
    <nav
      aria-label={ariaLabel}
      className="group flex h-toolbar-pane shrink-0 items-center border-b border-token-border-default bg-token-main-surface-primary px-2 select-none"
    >
      <div className="hide-scrollbar flex min-w-0 flex-1 flex-row-reverse items-center overflow-x-auto px-2">
        <ol
          className="flex flex-1 items-center gap-1 text-xs text-token-text-secondary select-text"
          onCopy={onCopy}
        >
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            return (
              <li
                key={`${index}:${segment}`}
                className="flex shrink-0 items-center gap-1"
              >
                <span
                  className={classNames(
                    "whitespace-nowrap",
                    isLast && "font-medium text-token-text-primary",
                  )}
                >
                  {segment}
                </span>
                {isLast ? null : (
                  <BreadcrumbSeparatorIcon
                    aria-hidden={true}
                    className="icon-2xs shrink-0 text-token-text-tertiary"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
      {trailingContent == null ? null : (
        <div className="ml-2 flex shrink-0 items-center gap-1.5">
          {trailingContent}
        </div>
      )}
    </nav>
  );
}

function getSelectedBreadcrumbPath(element: HTMLElement): string | null {
  const selection = element.ownerDocument.getSelection();
  if (selection == null || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  if (range.collapsed || !element.contains(range.commonAncestorContainer))
    return null;
  const items = range.cloneContents().querySelectorAll("li");
  return (
    (items.length === 0
      ? range.toString()
      : Array.from(items, (item) => item.textContent ?? "")
          .filter((text) => text.length > 0)
          .join("/")) || null
  );
}
