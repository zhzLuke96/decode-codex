// Restored from ref/webview/assets/mcp-tool-item-content-utils-BoJx2r_K.js
// mcp-tool-item-content-utils-BoJx2r_K chunk restored from the Codex webview bundle.
import * as zodRuntime from "../../boundaries/src-l0hb-mz-p";
import { normalizeCspDomains } from "./csp";
const cspDomainListSchema = zodRuntime
  .srcPa(zodRuntime.srcAa())
  .transform(normalizeCspDomains);
const toolMetaSchema = zodRuntime
  .srcTa({
    connectorId: zodRuntime.srcAa().optional(),
    connector_id: zodRuntime.srcAa().optional(),
    "openai/outputTemplate": zodRuntime.srcAa().nullish(),
    ui: zodRuntime
      .srcTa({
        resourceUri: zodRuntime.srcAa().optional(),
      })
      .strip()
      .optional(),
    "ui/resourceUri": zodRuntime.srcAa().optional(),
  })
  .passthrough();
const toolContentSchema = zodRuntime
  .srcTa({
    _meta: zodRuntime
      .srcTa({
        "openai/widgetCSP": zodRuntime
          .srcTa({
            baseUriDomains: cspDomainListSchema.optional(),
            base_uri_domains: cspDomainListSchema.optional(),
            connectDomains: cspDomainListSchema.optional(),
            connect_domains: cspDomainListSchema.optional(),
            frameDomains: cspDomainListSchema.optional(),
            frame_domains: cspDomainListSchema.optional(),
            resourceDomains: cspDomainListSchema.optional(),
            resource_domains: cspDomainListSchema.optional(),
          })
          .strip()
          .optional(),
        "openai/widgetDomain": zodRuntime.srcAa().optional(),
        "openai/widgetHeightHint": zodRuntime
          .srcWa()
          .finite()
          .positive()
          .optional()
          .catch(undefined),
        "openai/widgetShowCodexWidgetInline": zodRuntime.srcHa().optional(),
        "openai/widgetMinFrameHeight": zodRuntime
          .srcWa()
          .finite()
          .nonnegative()
          .optional()
          .catch(undefined),
        "openai/widgetPrefersBorder": zodRuntime.srcHa().optional(),
        ui: zodRuntime
          .srcTa({
            csp: zodRuntime
              .srcTa({
                baseUriDomains: cspDomainListSchema.optional(),
                connectDomains: cspDomainListSchema.optional(),
                frameDomains: cspDomainListSchema.optional(),
                resourceDomains: cspDomainListSchema.optional(),
              })
              .strip()
              .optional(),
            domain: zodRuntime.srcAa().optional(),
            prefersBorder: zodRuntime.srcHa().optional(),
          })
          .strip()
          .optional(),
      })
      .strip()
      .optional(),
    mimeType: zodRuntime.srcAa().optional().catch(undefined),
    text: zodRuntime.srcAa().optional().catch(undefined),
  })
  .strip();
const toolResultMetaSchema = zodRuntime.srcOa(
  zodRuntime.srcAa(),
  zodRuntime._srcMa(),
);
export { toolContentSchema, toolMetaSchema, toolResultMetaSchema };
