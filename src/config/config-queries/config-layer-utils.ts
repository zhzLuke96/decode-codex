// Restored from ref/webview/assets/config-queries-C2OQQYPH.js
// Helpers for config layers, write targets, and MCP server maps.
import {
  zodJsonValueSchema,
  zodRecordSchema,
  zodStringSchema,
} from "../../boundaries/src-l0hb-mz-p";
import type {
  ConfigLayer,
  ConfigLayerName,
  ConfigOrigin,
  ConfigWriteTarget,
  LayeredConfigResponse,
  McpServerConfigMap,
} from "./types";
const mcpServerMapSchema = zodRecordSchema(
  zodStringSchema(),
  zodJsonValueSchema(),
);
export function getConfigLayerFilePath(
  layerName: ConfigLayerName,
): string | null {
  return layerName.type === "user" ||
    layerName.type === "system" ||
    layerName.type === "legacyManagedConfigTomlFromFile"
    ? String(layerName.file)
    : layerName.type === "project" &&
        typeof layerName.dotCodexFolder === "string"
      ? `${layerName.dotCodexFolder}/config.toml`
      : null;
}
export function isReadOnlyConfigLayer(
  layerName: ConfigLayerName | null,
): boolean {
  return layerName == null
    ? false
    : layerName.type === "mdm" ||
        layerName.type === "sessionFlags" ||
        layerName.type === "legacyManagedConfigTomlFromFile" ||
        layerName.type === "legacyManagedConfigTomlFromMdm";
}
export function findConfigOrigin(
  origins: Record<string, ConfigOrigin> | null | undefined,
  keyPath: string,
  probeFields: string[] = [],
): ConfigOrigin | null {
  const directOrigin = origins?.[keyPath] ?? null;
  if (directOrigin != null) return directOrigin;
  for (const field of probeFields) {
    const fieldOrigin = origins?.[`${keyPath}.${field}`];
    if (fieldOrigin != null) return fieldOrigin;
  }
  return null;
}
export function getUserLayerWriteTarget(
  layers: ConfigLayer[] | null | undefined,
): ConfigWriteTarget {
  const userLayer = layers?.find((layer) => layer.name.type === "user") ?? null;
  if (!userLayer) return null;
  const filePath = getConfigLayerFilePath(userLayer.name);
  return filePath
    ? {
        filePath,
        expectedVersion: userLayer.version,
      }
    : null;
}
export function resolveConfigWriteTarget({
  layers,
  origins,
  keyPath,
  probeFields = [],
}: {
  keyPath: string;
  layers: ConfigLayer[] | null | undefined;
  origins: Record<string, ConfigOrigin> | null | undefined;
  probeFields?: string[];
}): ConfigWriteTarget {
  const userLayerTarget = getUserLayerWriteTarget(layers);
  if (userLayerTarget) return userLayerTarget;
  const origin = findConfigOrigin(origins, keyPath, probeFields);
  if (origin) {
    if (isReadOnlyConfigLayer(origin.name)) return null;
    if (origin.name.type === "system") return getUserLayerWriteTarget(layers);
    const filePath = getConfigLayerFilePath(origin.name);
    return filePath
      ? {
          filePath,
          expectedVersion: origin.version,
        }
      : getUserLayerWriteTarget(layers);
  }
  const firstLayer = layers?.[0] ?? null;
  if (!firstLayer) return null;
  const filePath = getConfigLayerFilePath(firstLayer.name);
  return filePath
    ? {
        filePath,
        expectedVersion: firstLayer.version,
      }
    : null;
}
export function collectServerOrigins({
  origins,
  rootKey,
  childKeys,
  probeFields,
}: {
  childKeys: string[];
  origins: Record<string, ConfigOrigin> | null | undefined;
  probeFields: string[];
  rootKey: string;
}): Record<string, ConfigOrigin | null> {
  const serverOrigins: Record<string, ConfigOrigin | null> = {};
  childKeys.forEach((childKey) => {
    const childPath = `${rootKey}.${childKey}`;
    serverOrigins[childKey] =
      origins?.[childPath] ??
      probeFields
        .map((field) => origins?.[`${childPath}.${field}`])
        .find(Boolean) ??
      null;
  });
  return serverOrigins;
}
export function normalizeMcpServers(config: unknown): McpServerConfigMap {
  if (typeof config !== "object" || !config || Array.isArray(config)) return {};
  const configRecord = config as Record<string, unknown>;
  const rawServers = configRecord.mcp_servers ?? configRecord.mcpServers;
  if (
    typeof rawServers !== "object" ||
    !rawServers ||
    Array.isArray(rawServers)
  ) {
    return {};
  }
  const servers: McpServerConfigMap = {};
  Object.entries(rawServers).forEach(([key, value]) => {
    if (typeof value === "object" && value && !Array.isArray(value)) {
      const server = value as Record<string, unknown>;
      servers[key] = {
        ...server,
        name:
          typeof server.name === "string" && server.name.length > 0
            ? server.name
            : key,
      };
      return;
    }
    servers[key] = {
      name: key,
    };
  });
  return servers;
}
export function patchMcpServerEnabled(
  configResponse: LayeredConfigResponse,
  serverKey: string,
  enabled: boolean,
): LayeredConfigResponse {
  const serverConfigKey =
    configResponse.config.mcp_servers == null &&
    configResponse.config.mcpServers != null
      ? "mcpServers"
      : "mcp_servers";
  const patchedServers = patchMcpServerMap(
    configResponse.config[serverConfigKey],
    serverKey,
    enabled,
  );
  return patchedServers
    ? {
        ...configResponse,
        config: Object.assign(structuredClone(configResponse.config), {
          [serverConfigKey]: patchedServers,
        }),
      }
    : configResponse;
}
function patchMcpServerMap(
  rawServers: unknown,
  serverKey: string,
  enabled: boolean,
): Record<string, unknown> | null {
  const parseResult = mcpServerMapSchema.safeParse(rawServers);
  if (!parseResult.success) return null;
  const serverParseResult = mcpServerMapSchema.safeParse(
    parseResult.data[serverKey],
  );
  return serverParseResult.success
    ? {
        ...parseResult.data,
        [serverKey]: {
          ...serverParseResult.data,
          enabled,
        },
      }
    : null;
}
