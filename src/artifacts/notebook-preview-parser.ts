// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Parser for read-only Jupyter notebook artifact previews.
import type {
  NotebookCell,
  NotebookImageOutput,
  NotebookOutput,
  NotebookParseResult,
  ParsedNotebookDocument,
} from "./notebook-preview-types";

const NOTEBOOK_METADATA_NAMESPACES = [
  "codex",
  "codexNotebook",
  "codex_notebook",
  "codex-app",
] as const;

const NOTEBOOK_TITLE_METADATA_KEYS = [
  "title",
  "cellTitle",
  "cell_title",
] as const;

const NOTEBOOK_CODE_DESCRIPTION_METADATA_KEYS = [
  "codeDescriptionMarkdown",
  "code_description_markdown",
  "descriptionMarkdown",
  "description_markdown",
  "description",
] as const;

export function parseNotebookContents(
  contentsBase64: string,
): NotebookParseResult {
  try {
    const decodedJson = new TextDecoder().decode(
      decodeBase64Bytes(contentsBase64),
    );
    return {
      document: parseNotebookDocument(JSON.parse(decodedJson)),
      status: "ready",
    };
  } catch {
    return { status: "error" };
  }
}

function decodeBase64Bytes(contentsBase64: string): Uint8Array {
  const binaryContents = atob(contentsBase64);
  const bytes = new Uint8Array(binaryContents.length);
  for (let index = 0; index < binaryContents.length; index += 1) {
    bytes[index] = binaryContents.charCodeAt(index);
  }
  return bytes;
}

function parseNotebookDocument(value: unknown): ParsedNotebookDocument {
  if (!isRecord(value) || !Array.isArray(value.cells)) {
    throw Error("Notebook must be a JSON object with a cells array");
  }

  const metadata = isRecord(value.metadata) ? value.metadata : undefined;

  return {
    cells: value.cells.map(parseNotebookCell),
    title: getDirectStringField(metadata, "title"),
  };
}

function parseNotebookCell(value: unknown): NotebookCell {
  if (!isRecord(value) || typeof value.cell_type !== "string") {
    throw Error("Notebook cell must be a JSON object with a cell_type");
  }

  const source = coerceNotebookText(value.source) ?? "";
  const id = getDirectStringField(value, "id");
  const metadata = isRecord(value.metadata) ? value.metadata : undefined;
  const title = getNotebookMetadataText(metadata, NOTEBOOK_TITLE_METADATA_KEYS);

  switch (value.cell_type) {
    case "code":
      return {
        cellType: "code",
        descriptionMarkdown: getNotebookMetadataText(
          metadata,
          NOTEBOOK_CODE_DESCRIPTION_METADATA_KEYS,
        ),
        executionCount: getNullableIntegerField(value, "execution_count"),
        id,
        outputs: Array.isArray(value.outputs)
          ? value.outputs.flatMap((output, index) =>
              parseNotebookOutput(
                output,
                index,
                getNotebookOutputSummaryMarkdown(metadata, index),
              ),
            )
          : [],
        source,
        title,
      };

    case "markdown":
      return { cellType: "markdown", id, source, title };

    case "raw":
    default:
      return { cellType: "raw", id, source, title };
  }
}

function parseNotebookOutput(
  value: unknown,
  outputIndex: number,
  summaryMarkdown: string | null,
): NotebookOutput[] {
  if (!isRecord(value)) return [];

  switch (value.output_type) {
    case "stream": {
      const text = coerceNotebookText(value.text);
      return text == null
        ? []
        : [
            {
              name: getDirectStringField(value, "name") ?? "stdout",
              summaryMarkdown,
              text,
              type: "stream",
            },
          ];
    }

    case "error":
      return [
        {
          ename: getDirectStringField(value, "ename") ?? "Error",
          evalue: getDirectStringField(value, "evalue") ?? "",
          summaryMarkdown,
          traceback: coerceNotebookText(value.traceback) ?? "",
          type: "error",
        },
      ];

    case "display_data":
    case "execute_result":
      return parseDisplayDataOutput(value.data, outputIndex, summaryMarkdown);

    default:
      return [];
  }
}

function parseDisplayDataOutput(
  data: unknown,
  outputIndex: number,
  summaryMarkdown: string | null,
): NotebookOutput[] {
  if (!isRecord(data)) return [];

  const imageOutput = parseDisplayImageOutput(data, outputIndex);
  if (imageOutput != null) return [imageOutput];

  const html = coerceNotebookText(data["text/html"]);
  if (html != null && html.trim().length > 0) return [{ html, type: "html" }];

  const markdown = coerceNotebookText(data["text/markdown"]);
  if (markdown != null && markdown.trim().length > 0) {
    return [{ markdown, type: "markdown" }];
  }

  const plainText = coerceNotebookText(data["text/plain"]);
  if (plainText != null) {
    return [{ summaryMarkdown, text: plainText, type: "text" }];
  }

  const jsonData =
    data["application/json"] ?? data["application/vnd.vega.v5+json"];
  return jsonData == null
    ? []
    : [
        {
          summaryMarkdown,
          text: JSON.stringify(jsonData, null, 2),
          type: "json",
        },
      ];
}

function parseDisplayImageOutput(
  data: Record<string, unknown>,
  outputIndex: number,
): NotebookImageOutput | null {
  const pngData = coerceNotebookText(data["image/png"]);
  if (pngData != null) {
    return {
      dataUrl: `data:image/png;base64,${pngData.replaceAll(/\s/g, "")}`,
      outputNumber: outputIndex + 1,
      type: "image",
    };
  }

  const jpegData = coerceNotebookText(data["image/jpeg"]);
  if (jpegData != null) {
    return {
      dataUrl: `data:image/jpeg;base64,${jpegData.replaceAll(/\s/g, "")}`,
      outputNumber: outputIndex + 1,
      type: "image",
    };
  }

  const svgData = coerceNotebookText(data["image/svg+xml"]);
  return svgData == null
    ? null
    : {
        dataUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          svgData,
        )}`,
        outputNumber: outputIndex + 1,
        type: "image",
      };
}

function getNotebookMetadataText(
  metadata: Record<string, unknown> | undefined,
  keys: readonly string[],
): string | null {
  for (const metadataContainer of getNotebookMetadataContainers(metadata)) {
    for (const key of keys) {
      const text = coerceNotebookText(metadataContainer[key]);
      if (text != null && text.trim().length > 0) return text;
    }
  }
  return null;
}

function getNotebookOutputSummaryMarkdown(
  metadata: Record<string, unknown> | undefined,
  outputIndex: number,
): string | null {
  for (const metadataContainer of getNotebookMetadataContainers(metadata)) {
    const summaries = metadataContainer.outputSummaries;
    if (!Array.isArray(summaries)) continue;
    const summary = summaries[outputIndex];
    if (!isRecord(summary)) continue;

    const summaryMarkdown = coerceNotebookText(summary.summaryMarkdown);
    if (summaryMarkdown != null && summaryMarkdown.trim().length > 0) {
      return summaryMarkdown;
    }
  }
  return null;
}

function getNotebookMetadataContainers(
  metadata: Record<string, unknown> | undefined,
): Record<string, unknown>[] {
  if (metadata == null) return [];

  return [
    ...NOTEBOOK_METADATA_NAMESPACES.flatMap((namespace) => {
      const namespacedMetadata = metadata[namespace];
      return isRecord(namespacedMetadata) ? [namespacedMetadata] : [];
    }),
    metadata,
  ];
}

function getDirectStringField(
  value: Record<string, unknown> | undefined,
  key: string,
): string | null {
  const field = value?.[key];
  return typeof field === "string" ? field : null;
}

function getNullableIntegerField(
  value: Record<string, unknown>,
  key: string,
): number | null {
  const field = value[key];
  return typeof field === "number" && Number.isInteger(field) ? field : null;
}

function coerceNotebookText(value: unknown): string | null {
  if (typeof value === "string") return value;
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value.join("")
    : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}
