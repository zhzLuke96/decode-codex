// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renderer for individual MCP content blocks.

import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type { IntlShape } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import { stringifyJson } from "./mcp-tool-json";
import type {
  McpContentBlock,
  McpContentBlockAnnotations,
} from "./mcp-tool-activity-types";

export function McpToolContentBlock({ block }: { block: McpContentBlock }) {
  const intl = useIntl();
  switch (block.type) {
    case "image": {
      const annotationsLine = formatContentBlockAnnotations(
        block.annotations,
        intl,
      );
      const src = `data:${block.mimeType};base64,${block.data}`;
      const image = (
        <img
          className="max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain"
          src={src}
        />
      );
      if (annotationsLine == null) return image;
      return (
        <div className="flex flex-col gap-0.5">
          {image}
          <p className="text-size-chat whitespace-pre-wrap text-token-description-foreground/80">
            {annotationsLine}
          </p>
        </div>
      );
    }
    case "audio": {
      const annotationsLine = formatContentBlockAnnotations(
        block.annotations,
        intl,
      );
      const src = `data:${block.mimeType};base64,${block.data}`;
      return (
        <div className="flex flex-col gap-0.5">
          <audio
            className="w-full gap-0.5"
            controls={true}
            src={src}
            preload="metadata"
          />
          {annotationsLine == null ? null : (
            <p className="text-size-chat whitespace-pre-wrap text-token-description-foreground/80">
              {annotationsLine}
            </p>
          )}
        </div>
      );
    }
    case "resource_link": {
      const annotationsLine = formatContentBlockAnnotations(
        block.annotations,
        intl,
      );
      const resourceLinkName = block.title ?? block.name ?? block.uri;
      return (
        <div className="text-size-chat flex flex-col gap-0.5">
          <div className="break-words text-token-description-foreground/80">
            <FormattedMessage
              id="codex.mcpTool.resourceLink.reading"
              defaultMessage="Read {resourceLinkName}"
              description="Summary shown for MCP resource link content blocks"
              values={{ resourceLinkName }}
            />
          </div>
          {annotationsLine == null ? null : (
            <div className="break-words whitespace-pre-wrap text-token-description-foreground/80">
              {annotationsLine}
            </div>
          )}
        </div>
      );
    }
    case "embedded_resource": {
      const resource = block.resource!;
      const content = resource.text ?? resource.blob ?? "";
      const hasContent = content !== "";
      const annotationsLine = formatAnnotations(resource.annotations);
      return (
        <div className="text-size-chat flex flex-col gap-0.5 text-token-description-foreground/80">
          <div className="flex gap-1">
            <span className="font-medium text-token-foreground">
              <FormattedMessage
                id="codex.mcpTool.embeddedResource.uriLabel"
                defaultMessage="URI"
                description="Label for the URI of an embedded resource"
              />
            </span>
            <span className="break-all">{resource.uri}</span>
          </div>
          {resource.mimeType == null ? null : (
            <div className="flex gap-1">
              <span className="font-medium text-token-foreground">
                <FormattedMessage
                  id="codex.mcpTool.embeddedResource.mimeTypeLabel"
                  defaultMessage="MIME type"
                  description="Label for the MIME type of an embedded resource"
                />
              </span>
              <span className="break-all">{resource.mimeType}</span>
            </div>
          )}
          {annotationsLine == null ? null : (
            <div className="flex gap-1">
              <span className="font-medium text-token-foreground">
                <FormattedMessage
                  id="codex.mcpTool.embeddedResource.annotationsLabel"
                  defaultMessage="Annotations"
                  description="Label for annotations shown with an embedded resource"
                />
              </span>
              <span className="break-all">{annotationsLine}</span>
            </div>
          )}
          {hasContent ? (
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-token-foreground">
                <FormattedMessage
                  id="codex.mcpTool.embeddedResource.contentLabel"
                  defaultMessage="Content"
                  description="Label for the content of an embedded resource"
                />
              </span>
              <pre className="max-h-48 overflow-auto rounded-md bg-token-input-background px-3 py-2 whitespace-pre-wrap text-token-description-foreground/80">
                {content}
              </pre>
            </div>
          ) : null}
        </div>
      );
    }
    case "unknown": {
      const className = classNames(
        "[&_*]:text-token-non-assistant-body-descendant",
        "bg-token-input-background text-token-description-foreground/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat",
      );
      return <pre className={className}>{stringifyJson(block.raw, 2)}</pre>;
    }
    case "text": {
      const text = joinNonNull([
        block.text,
        formatContentBlockAnnotations(block.annotations, intl),
      ]);
      const preClassName = classNames(
        "[&_*]:text-token-non-assistant-body-descendant",
        "text-token-description-foreground/80 m-0 whitespace-pre-wrap break-words font-sans text-size-chat leading-relaxed extension:leading-normal",
      );
      return (
        <div className="relative overflow-clip rounded-lg border border-token-input-background bg-token-text-code-block-background contain-inline-size">
          <div className="sticky top-0 z-10 flex items-center justify-between py-1 ps-2 pe-2 font-sans text-sm text-token-description-foreground select-none">
            <div className="min-w-0 truncate">
              <FormattedMessage
                id="codex.mcpTool.textBlock.plaintextTitle"
                defaultMessage="plaintext"
                description="Title shown for MCP text content blocks rendered in a code-style container"
              />
            </div>
            <div className="flex items-center" />
          </div>
          <div className="max-h-48 overflow-y-auto p-2">
            <pre className={preClassName}>{text}</pre>
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}

function formatContentBlockAnnotations(
  annotations: McpContentBlockAnnotations | null | undefined,
  intl: IntlShape,
): string | null {
  const formatted = formatAnnotations(annotations);
  return formatted == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.contentBlock.annotationsLine",
          defaultMessage: "Annotations: {annotations}",
          description:
            "Line showing MCP content block annotations in text output",
        },
        { annotations: formatted },
      );
}

function formatAnnotations(
  annotations: McpContentBlockAnnotations | null | undefined,
): string | null {
  if (annotations == null) return null;
  const parts: string[] = [];
  if (annotations.audience != null && annotations.audience.length > 0)
    parts.push(`audience=${annotations.audience.join(", ")}`);
  if (annotations.priority != null)
    parts.push(`priority=${String(annotations.priority)}`);
  if (annotations.lastModified != null)
    parts.push(`lastModified=${annotations.lastModified}`);
  return parts.length === 0 ? null : parts.join("; ");
}

function joinNonNull(values: Array<string | null | undefined>): string {
  return values.filter((value) => value != null).join("\n");
}
