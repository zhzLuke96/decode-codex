// Restored from ref/webview/assets/toolbar-breadcrumb-BZpOAzWC.js
// Also matches ref/webview/assets/toolbar-breadcrumb-D6sZAZxC.js.
// Also matches ref/webview/assets/toolbar-breadcrumb-Z_0PUIuH.js.
// Current Z_0PUIuH source rechecked against ancestor and current-page breadcrumb rendering.
import { Fragment } from "react";
import type { ReactNode } from "react";
import { useIntl } from "react-intl";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { once } from "../runtime/commonjs-interop";
import { Button } from "../ui/button";
type ToolbarBreadcrumbAncestor = {
  id: string;
  label: ReactNode;
  onClick: () => void;
};
type ToolbarBreadcrumbProps = {
  ancestors: ToolbarBreadcrumbAncestor[];
  current?: ReactNode | null;
};
export const initToolbarBreadcrumbChunk = once(() => {});
function ToolbarBreadcrumb({ ancestors, current }: ToolbarBreadcrumbProps) {
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "toolbarBreadcrumb.label",
    defaultMessage: "Breadcrumb",
    description: "Accessible label for toolbar breadcrumb navigation",
  });
  return (
    <nav
      aria-label={ariaLabel}
      className="flex min-w-0 items-center gap-1 text-base text-token-description-foreground"
    >
      {ancestors.map((ancestor, index) => (
        <Fragment key={ancestor.id}>
          {index > 0 ? (
            <ChevronRightIcon aria-hidden={true} className="icon-xs shrink-0" />
          ) : null}
          <Button
            className="min-w-0"
            color="ghost"
            size="toolbar"
            onClick={ancestor.onClick}
          >
            <span className="min-w-0 truncate">{ancestor.label}</span>
          </Button>
        </Fragment>
      ))}
      {current == null ? null : (
        <>
          {ancestors.length > 0 ? (
            <ChevronRightIcon aria-hidden={true} className="icon-xs shrink-0" />
          ) : null}
          <span
            aria-current="page"
            className="flex h-token-button-composer min-w-0 items-center truncate px-2 text-token-foreground"
          >
            {current}
          </span>
        </>
      )}
    </nav>
  );
}
export { ToolbarBreadcrumb };
