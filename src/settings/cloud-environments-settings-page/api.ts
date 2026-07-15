// Restored from ref/webview/assets/cloud-environments-settings-page-Cx0Mfko0.js

import { codexRequest } from "../../runtime/request";
import type {
  CloudConnector,
  CloudEnvironment,
  CloudEnvironmentSearchPage,
  CloudMachine,
  CloudRepository,
} from "./types";
const CLOUD_ENVIRONMENT_HEADERS = {
  "OAI-Product-Sku": "CODEX",
};
type SearchResponse = {
  data?: unknown;
  environments?: CloudEnvironment[];
  items?: CloudEnvironment[];
  next_cursor?: string | null;
  nextCursor?: string | null;
};
type ConnectorResponse = {
  connectors?: CloudConnector[];
  data?: CloudConnector[];
  items?: CloudConnector[];
};
type MachineResponse = {
  data?: CloudMachine[];
  items?: CloudMachine[];
  machines?: CloudMachine[];
};
type RepositoryResponse = {
  data?: CloudRepository[];
  items?: CloudRepository[];
  repositories?: CloudRepository[];
};
export async function searchCloudEnvironments(
  query: string,
  cursor: string | null,
  limit: number = 20,
): Promise<CloudEnvironmentSearchPage> {
  const response = (await codexRequest.safeGet("/wham/environments/search", {
    additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
    parameters: {
      query: {
        cursor,
        limit,
        query: query.trim() || undefined,
      },
    },
  })) as SearchResponse;
  const data = response.data as SearchResponse | CloudEnvironment[] | undefined;
  const environments = Array.isArray(data)
    ? data
    : (response.environments ??
      response.items ??
      data?.environments ??
      data?.items ??
      []);
  return {
    environments: environments.map(normalizeEnvironment),
    nextCursor:
      response.next_cursor ??
      response.nextCursor ??
      (Array.isArray(data)
        ? null
        : (data?.next_cursor ?? data?.nextCursor ?? null)),
  };
}
export async function getCloudEnvironmentDetails(
  environmentId: string,
): Promise<CloudEnvironment> {
  const response = (await codexRequest.safeGet(
    "/wham/environments/{environment_id}/with-creator-and-machine",
    {
      additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
      parameters: {
        path: {
          environment_id: environmentId,
        },
      },
    },
  )) as
    | CloudEnvironment
    | {
        environment?: CloudEnvironment;
        data?: CloudEnvironment;
      };
  return normalizeEnvironment(
    "environment" in response && response.environment
      ? response.environment
      : "data" in response && response.data
        ? response.data
        : response,
  );
}
export async function listCloudMachines(): Promise<CloudMachine[]> {
  const response = (await codexRequest.safeGet("/wham/machines", {
    additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
  })) as MachineResponse | CloudMachine[];
  if (Array.isArray(response)) return response;
  return response.machines ?? response.items ?? response.data ?? [];
}
export async function listGithubConnectors(): Promise<CloudConnector[]> {
  const response = (await codexRequest.safeGet(
    "/aip/connectors/product_specific",
    {
      additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
      parameters: {
        query: {
          purpose: "hermes",
        },
      },
    },
  )) as ConnectorResponse | CloudConnector[];
  const connectors = Array.isArray(response)
    ? response
    : (response.connectors ?? response.items ?? response.data ?? []);
  const githubConnectors = connectors.filter(isGithubConnector);
  return Promise.all(
    githubConnectors.map(async (connector) => {
      const connectorId = connector.connector_id ?? connector.id;
      if (!connectorId) return connector;
      try {
        const link = await codexRequest.safeGet(
          "/aip/connectors/{connector_id}/link",
          {
            additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
            parameters: {
              path: {
                connector_id: connectorId,
              },
            },
          },
        );
        return {
          ...connector,
          link,
        };
      } catch {
        return connector;
      }
    }),
  );
}
export async function searchGithubRepositories(
  query: string,
  connectorId: string,
): Promise<CloudRepository[]> {
  if (!connectorId || !query.trim()) return [];
  const response = (await codexRequest.safeGet(
    "/wham/github/repositories/search/all-installations",
    {
      additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
      parameters: {
        query: {
          connector_id: connectorId,
          limit: 20,
          query: query.trim(),
        },
      },
    },
  )) as RepositoryResponse | CloudRepository[];
  return Array.isArray(response)
    ? response
    : (response.repositories ?? response.items ?? response.data ?? []);
}
export async function createCloudEnvironment(
  requestBody: Record<string, unknown>,
): Promise<CloudEnvironment> {
  return codexRequest.safePost("/wham/environments", {
    additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
    requestBody,
  }) as Promise<CloudEnvironment>;
}
export async function updateCloudEnvironment({
  environmentId,
  requestBody,
}: {
  environmentId: string;
  requestBody: Record<string, unknown>;
}): Promise<CloudEnvironment> {
  return codexRequest.safePatch("/wham/environments/{environment_id}", {
    additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
    parameters: {
      path: {
        environment_id: environmentId,
      },
    },
    requestBody,
  }) as Promise<CloudEnvironment>;
}
export async function deleteCloudEnvironment(
  environmentId: string,
): Promise<void> {
  await codexRequest.safeDelete("/wham/environments/{environment_id}", {
    additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
    parameters: {
      path: {
        environment_id: environmentId,
      },
    },
  });
}
export async function resetCloudEnvironmentCache(
  environmentId: string,
): Promise<void> {
  await codexRequest.safePost(
    "/wham/environments/{environment_id}/reset-cache",
    {
      additionalHeaders: CLOUD_ENVIRONMENT_HEADERS,
      parameters: {
        path: {
          environment_id: environmentId,
        },
      },
    },
  );
}
export async function setCloudEnvironmentPinned({
  environmentId,
  etag,
  isPinned,
}: {
  environmentId: string;
  etag?: string | null;
  isPinned: boolean;
}): Promise<CloudEnvironment> {
  return codexRequest.safePatch("/wham/environments/{environment_id}", {
    additionalHeaders: {
      ...CLOUD_ENVIRONMENT_HEADERS,
      ...(etag
        ? {
            "If-Match": etag,
          }
        : null),
    },
    parameters: {
      path: {
        environment_id: environmentId,
      },
    },
    requestBody: {
      is_pinned: isPinned,
    },
  }) as Promise<CloudEnvironment>;
}
function normalizeEnvironment(environment: CloudEnvironment): CloudEnvironment {
  return {
    ...environment,
    environment_id: environment.environment_id ?? environment.id,
  };
}
function isGithubConnector(connector: CloudConnector): boolean {
  const service = `${connector.service ?? connector.provider ?? connector.name ?? ""}`;
  if (connector.enabled === false) return false;
  if (connector.status && connector.status !== "enabled") return false;
  return /github|ghe/i.test(service);
}
