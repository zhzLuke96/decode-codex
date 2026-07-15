// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Fetch-backed HTTP clients used by reporting and file upload/download flows.
type RequestHeaders = Record<string, string>;

type JsonRequestOptions = {
  parameters?: {
    path?: Record<string, string>;
  };
  requestBody?: unknown;
};

type HttpResponse<TBody = unknown> = {
  body: TBody;
  response: Response;
};

class FetchHttpClient {
  async get<TBody = unknown>(
    url: string,
    initOrHeaders: RequestInit | RequestHeaders = {},
    signal?: AbortSignal,
  ): Promise<HttpResponse<TBody>> {
    return requestJson<TBody>(url, {
      ...normalizeRequestInit(initOrHeaders),
      method: "GET",
      signal,
    });
  }

  async post<TBody = unknown>(
    url: string,
    body: BodyInit,
    initOrHeaders: RequestInit | RequestHeaders = {},
  ): Promise<HttpResponse<TBody>> {
    return requestJson<TBody>(url, {
      ...normalizeRequestInit(initOrHeaders),
      body,
      method: "POST",
    });
  }

  async put(
    url: string,
    body: BodyInit,
    headers: RequestHeaders = {},
  ): Promise<Response> {
    return requestRaw(url, { body, headers, method: "PUT" });
  }
}

class FilesApiClient {
  async safeGet<TBody = unknown>(
    path: string,
    options: JsonRequestOptions = {},
  ): Promise<TBody> {
    return (
      await requestJson<TBody>(
        interpolatePath(path, options.parameters?.path),
        {
          ...buildApiRequestInit(),
          method: "GET",
        },
      )
    ).body;
  }

  async safePost<TBody = unknown>(
    path: string,
    options: JsonRequestOptions = {},
  ): Promise<TBody> {
    return (
      await requestJson<TBody>(
        interpolatePath(path, options.parameters?.path),
        {
          ...buildApiRequestInit(),
          body: JSON.stringify(options.requestBody ?? {}),
          method: "POST",
        },
      )
    ).body;
  }
}

class AzureBlobStorageClient extends FetchHttpClient {
  override async put(
    url: string,
    body: BodyInit,
    headers: RequestHeaders = {},
  ): Promise<Response> {
    return requestRaw(url, {
      body: typeof body === "string" ? decodeBase64Bytes(body) : body,
      headers,
      method: "PUT",
    });
  }
}

const httpClientInstance = new FetchHttpClient();
const filesApiClientInstance = new FilesApiClient();
const azureBlobStorageClientInstance = new AzureBlobStorageClient();

export const httpClient = {
  getInstance(): FetchHttpClient {
    return httpClientInstance;
  },
};

export const azureBlobStorageClient = {
  getInstance(): AzureBlobStorageClient {
    return azureBlobStorageClientInstance;
  },
};

export const filesApiClient = filesApiClientInstance;
export const azureBlobUploadHeaderName = "x-ms-codex-upload";

export function buildApiRequestInit(): RequestInit & {
  headers: RequestHeaders;
} {
  return {
    credentials: "include",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  };
}

async function requestJson<TBody>(
  url: string,
  init: RequestInit,
): Promise<HttpResponse<TBody>> {
  const response = await requestRaw(url, init);
  const text = await response.text();
  const body =
    text.length === 0
      ? undefined
      : response.headers.get("content-type")?.includes("application/json")
        ? JSON.parse(text)
        : text;
  return { body: body as TBody, response };
}

async function requestRaw(url: string, init: RequestInit): Promise<Response> {
  if (typeof fetch !== "function") {
    throw new Error("fetch is not available in this environment");
  }
  const response = await fetch(url, init);
  if (!response.ok) {
    const error = new Error(
      `HTTP request failed with status ${response.status}`,
    );
    (error as Error & { status?: number }).status = response.status;
    throw error;
  }
  return response;
}

function normalizeRequestInit(
  initOrHeaders: RequestInit | RequestHeaders,
): RequestInit {
  return "headers" in initOrHeaders ||
    "credentials" in initOrHeaders ||
    "method" in initOrHeaders
    ? (initOrHeaders as RequestInit)
    : { headers: initOrHeaders };
}

function interpolatePath(
  path: string,
  params: Record<string, string> = {},
): string {
  return path.replace(/\{([^}]+)\}/g, (_match, key: string) =>
    encodeURIComponent(params[key] ?? ""),
  );
}

function decodeBase64Bytes(value: string): Uint8Array {
  if (typeof globalThis.atob !== "function") {
    throw new Error("Base64 decoding is not available in this environment");
  }
  const binary = globalThis.atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}
