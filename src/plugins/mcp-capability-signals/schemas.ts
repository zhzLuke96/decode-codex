// Restored from ref/webview/assets/mcp-capability-signals-Ef9PGr3z.js
// MCP JSON-RPC schemas and app capability metadata parsers.
import * as zodRuntime from "../../boundaries/src-l0hb-mz-p";
export const MCP_RELATED_TASK_META_KEY = "io.modelcontextprotocol/related-task";
const jsonValueSchema = zodRuntime.srcMa();
const jsonRecordSchema = zodRuntime.srcOa(zodRuntime.srcAa(), jsonValueSchema);
const nullableNumberSchema = zodRuntime.srcEa(zodRuntime.srcWa());
const nullableStringSchema = zodRuntime.srcEa(zodRuntime.srcAa());
const metadataSchema = zodRuntime.srcOa(zodRuntime.srcAa(), jsonValueSchema);
const annotationsSchema = zodRuntime
  .srcTa({
    audience: zodRuntime
      .srcPa(zodRuntime.srcLa(["user", "assistant"]))
      .optional(),
    lastModified: zodRuntime.srcFa({ offset: true }).optional(),
    priority: zodRuntime.srcWa().min(0).max(1).optional(),
  })
  .optional();
export const mcpProgressTokenSchema = zodRuntime.srcJa([
  zodRuntime.srcAa(),
  zodRuntime.srcWa().int(),
]);
export const mcpRelatedTaskMetaSchema = zodRuntime.srcTa({
  taskId: zodRuntime.srcAa(),
});
const mcpRequestMetaSchema = zodRuntime.srcSa({
  progressToken: mcpProgressTokenSchema.optional(),
  [MCP_RELATED_TASK_META_KEY]: mcpRelatedTaskMetaSchema.optional(),
});
const requestParamsWithMetaSchema = zodRuntime.srcTa({
  _meta: mcpRequestMetaSchema.optional(),
});
export const mcpJsonRpcRequestPayloadSchema = zodRuntime.srcTa({
  method: zodRuntime.srcAa(),
  params: requestParamsWithMetaSchema.loose().optional(),
});
const resourceContentBaseSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  mimeType: nullableStringSchema,
  uri: zodRuntime.srcAa(),
});
const textResourceContentSchema = resourceContentBaseSchema.extend({
  text: zodRuntime.srcAa(),
});
const blobResourceContentSchema = resourceContentBaseSchema.extend({
  blob: zodRuntime.srcAa(),
});
const resourceContentSchema = zodRuntime.srcJa([
  textResourceContentSchema,
  blobResourceContentSchema,
]);
export const mcpReadResourceRequestSchema =
  mcpJsonRpcRequestPayloadSchema.extend({
    method: zodRuntime.srcXa("resources/read"),
    params: requestParamsWithMetaSchema.extend({
      uri: zodRuntime.srcAa(),
    }),
  });
export const mcpReadResourceResultSchema = zodRuntime.srcTa({
  _meta: mcpRequestMetaSchema.optional(),
  contents: zodRuntime.srcPa(resourceContentSchema),
});
const textContentBlockSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  annotations: annotationsSchema,
  text: zodRuntime.srcAa(),
  type: zodRuntime.srcXa("text"),
});
const imageContentBlockSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  annotations: annotationsSchema,
  data: zodRuntime.srcAa(),
  mimeType: zodRuntime.srcAa(),
  type: zodRuntime.srcXa("image"),
});
const audioContentBlockSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  annotations: annotationsSchema,
  data: zodRuntime.srcAa(),
  mimeType: zodRuntime.srcAa(),
  type: zodRuntime.srcXa("audio"),
});
const embeddedResourceContentBlockSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  annotations: annotationsSchema,
  resource: resourceContentSchema,
  type: zodRuntime.srcXa("resource"),
});
const resourceLinkContentBlockSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  annotations: annotationsSchema,
  description: nullableStringSchema,
  mimeType: nullableStringSchema,
  name: zodRuntime.srcAa(),
  size: nullableNumberSchema,
  type: zodRuntime.srcXa("resource_link"),
  uri: zodRuntime.srcAa(),
});
const mcpContentBlockSchema = zodRuntime.srcJa([
  textContentBlockSchema,
  imageContentBlockSchema,
  audioContentBlockSchema,
  embeddedResourceContentBlockSchema,
  resourceLinkContentBlockSchema,
]);
export const mcpToolResultSchema = zodRuntime.srcTa({
  _meta: metadataSchema.optional(),
  content: zodRuntime.srcPa(mcpContentBlockSchema).default([]),
  isError: zodRuntime.srcHa().optional(),
  structuredContent: jsonRecordSchema.optional(),
});
export const mcpToolCallRequestSchema = mcpJsonRpcRequestPayloadSchema.extend({
  method: zodRuntime.srcXa("tools/call"),
  params: requestParamsWithMetaSchema.extend({
    arguments: jsonRecordSchema.optional(),
    name: zodRuntime.srcAa(),
  }),
});
const toolInputSchema = zodRuntime
  .srcTa({
    properties: jsonRecordSchema.optional(),
    required: zodRuntime.srcPa(zodRuntime.srcAa()).optional(),
    type: zodRuntime.srcXa("object"),
  })
  .catchall(jsonValueSchema);
const toolOutputSchema = zodRuntime
  .srcTa({
    properties: jsonRecordSchema.optional(),
    required: zodRuntime.srcPa(zodRuntime.srcAa()).optional(),
    type: zodRuntime.srcXa("object"),
  })
  .catchall(jsonValueSchema);
export const mcpServerIconSchema = zodRuntime.srcTa({
  mimeType: zodRuntime.srcAa().optional(),
  sizes: zodRuntime.srcPa(zodRuntime.srcAa()).optional(),
  src: zodRuntime.srcAa(),
  theme: zodRuntime.srcLa(["light", "dark"]).optional(),
});
export const mcpCatalogToolSchema = zodRuntime
  .srcTa({
    _meta: metadataSchema.optional(),
    annotations: zodRuntime
      .srcTa({
        title: zodRuntime.srcAa().optional(),
      })
      .loose()
      .optional(),
    description: zodRuntime.srcAa().optional(),
    inputSchema: toolInputSchema,
    name: zodRuntime.srcAa(),
    outputSchema: toolOutputSchema.optional(),
    title: zodRuntime.srcAa().optional(),
  })
  .loose();
export const mcpCatalogToolsSchema = mcpCatalogToolSchema
  .omit({
    outputSchema: true,
  })
  .loose()
  .array();
export const mcpToolUiEntrypointsSchema = zodRuntime
  .srcTa({
    entrypoints: zodRuntime
      .srcPa(
        zodRuntime.srcJa([
          zodRuntime.srcTa({
            type: zodRuntime.srcXa("global"),
          }),
          zodRuntime.srcTa({
            type: zodRuntime.srcXa("thread"),
          }),
          zodRuntime.srcTa({
            extensions: zodRuntime.srcPa(zodRuntime.srcAa().trim().min(1)),
            type: zodRuntime.srcXa("file"),
          }),
        ]),
      )
      .optional(),
  })
  .optional();
export const mcpMentionSearchCapabilitiesSchema = zodRuntime
  .srcTa({
    "mentions/search": zodRuntime.srcTa({}).optional(),
  })
  .optional();
export const mcpConnectorMetadataSchema = zodRuntime
  .srcTa({
    connector_name: zodRuntime.srcAa().trim().min(1).optional(),
  })
  .passthrough()
  .optional();
export const mcpToolAppVisibilityMetadataSchema = zodRuntime.srcTa({
  visibility: zodRuntime.srcPa(zodRuntime.srcLa(["app", "model"])).optional(),
});
