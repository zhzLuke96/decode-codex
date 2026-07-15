// Restored from ref/webview/assets/request-DmzCscWA.js

import {
  _vscodeApiC as VscodeApiError,
  vscodeApiH as vscodeLogger,
  vscodeApiL as VscodeFetchBridge,
} from "../boundaries/vscode-api";
type RequestParameters = {
  path?: Record<string, string | number | boolean | bigint>;
  query?: Record<string, unknown>;
};
type RequestOptions = {
  additionalHeaders?: Record<string, string>;
  body?: string;
  format?: string;
  onComplete?: (event: unknown) => void;
  onError?: (event: unknown) => void;
  onEvent?: (event: unknown) => void;
  parameters?: RequestParameters;
  requestBody?: unknown;
};
const OPENAI_LANGUAGE_HEADER = "OAI-Language";
const ATTACH_AUTH_HEADER = "X-OpenAI-Attach-Auth";
const ATTACH_INTEGRITY_STATE_HEADER = "X-OpenAI-Attach-Integrity-State";
let requestLanguage = "en";
function getRequestLanguage() {
  return requestLanguage;
}
function updateRequestLanguage(language: string) {
  requestLanguage = language;
}
function interpolatePathParams(
  routePattern: string,
  pathParams: Record<string, string | number | boolean | bigint>,
) {
  return routePattern.replace(/\{([^}]+)\}/g, (match, paramName) =>
    pathParams[paramName].toString(),
  );
}
function buildQueryString(queryParams: Record<string, unknown> | undefined) {
  if (!queryParams) return "";
  const searchParams = new URLSearchParams();
  for (const [name, value] of Object.entries(queryParams)) {
    if (Array.isArray(value)) {
      for (const item of value)
        searchParams.append(name, stringifyQueryValue(item));
    } else if (value != null) {
      searchParams.append(name, stringifyQueryValue(value));
    }
  }
  const queryString = searchParams.toString();
  return queryString.length === 0 ? "" : `?${queryString}`;
}
function stringifyQueryValue(value: unknown) {
  return typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint"
    ? String(value)
    : (JSON.stringify(value) ?? "");
}
class CodexRequestClient {
  constructor(
    private readonly defaults: {
      getAdditionalHeaders?: () => Record<string, string>;
    } = {},
  ) {}
  getRequestTarget(routePattern: string, options?: RequestOptions) {
    const query =
      options?.parameters && "query" in options.parameters
        ? options.parameters.query
        : undefined;
    const path = interpolatePathParams(
      routePattern,
      options?.parameters &&
        "path" in options.parameters &&
        options.parameters.path
        ? options.parameters.path
        : {},
    );
    const queryString = buildQueryString(query);
    return {
      headers: {
        ...this.defaults.getAdditionalHeaders?.(),
        ...options?.additionalHeaders,
      },
      url: `${path}${queryString}`,
    };
  }
  getRequestBody(options?: RequestOptions) {
    return options && "requestBody" in options
      ? JSON.stringify(options.requestBody)
      : undefined;
  }
  async makeRequest(
    method: "get" | "post" | "patch" | "delete",
    routePattern: string,
    options?: RequestOptions,
  ) {
    const { headers, url } = this.getRequestTarget(routePattern, options);
    try {
      switch (method) {
        case "get":
          return (await VscodeFetchBridge.getInstance().get(url, headers)).body;
        case "post":
          return (
            await VscodeFetchBridge.getInstance().post(
              url,
              this.getRequestBody(options),
              headers,
            )
          ).body;
        case "patch":
          return (
            await VscodeFetchBridge.getInstance().sendRequest("PATCH", url, {
              body: this.getRequestBody(options),
              headers,
            })
          ).body;
        case "delete": {
          const response = await VscodeFetchBridge.getInstance().sendRequest(
            "DELETE",
            url,
            {
              headers,
            },
          );
          return response.status === 204 ? undefined : response.body;
        }
      }
    } catch (error) {
      vscodeLogger.warning("sa_server_request_failed", {
        safe: {
          attachAuth: hasHeader(headers, ATTACH_AUTH_HEADER),
          attachIntegrityState: hasHeader(
            headers,
            ATTACH_INTEGRITY_STATE_HEADER,
          ),
          errorCode: error instanceof VscodeApiError ? error.errorCode : null,
          hasRequestBody: options != null && "requestBody" in options,
          method,
          requestHeaderNames: Object.keys(headers).sort(),
          status: error instanceof VscodeApiError ? error.status : null,
        },
        sensitive: {
          error,
          routePattern,
          url,
        },
      });
      throw error;
    }
  }
  async safeGet(routePattern: string, options?: RequestOptions) {
    return this.makeRequest("get", routePattern, options);
  }
  async safePost(routePattern: string, options?: RequestOptions) {
    return this.makeRequest("post", routePattern, options);
  }
  async safePatch(routePattern: string, options?: RequestOptions) {
    return this.makeRequest("patch", routePattern, options);
  }
  async safeDelete(routePattern: string, options?: RequestOptions) {
    return this.makeRequest("delete", routePattern, options);
  }
  streamPost(routePattern: string, options: RequestOptions) {
    const { headers, url } = this.getRequestTarget(routePattern, options);
    return VscodeFetchBridge.getInstance().stream("POST", url, {
      body: options.body,
      format: options.format,
      headers,
      onComplete: options.onComplete,
      onError: options.onError,
      onEvent: options.onEvent,
    });
  }
  cancelStream(streamId: string) {
    VscodeFetchBridge.getInstance().cancelStream(streamId);
  }
}
function setRequestLanguage(language: string) {
  updateRequestLanguage(language);
}
function getOpenAIRequestHeaders() {
  return {
    [ATTACH_AUTH_HEADER]: "1",
    [ATTACH_INTEGRITY_STATE_HEADER]: "1",
    originator: "Codex Desktop",
  };
}
function getDefaultRequestHeaders() {
  return {
    [OPENAI_LANGUAGE_HEADER]: getRequestLanguage(),
    ...getOpenAIRequestHeaders(),
  };
}
function hasHeader(headers: Record<string, string>, headerName: string) {
  const normalizedHeaderName = headerName.toLowerCase();
  return (
    Object.keys(headers).find(
      (name) => name.toLowerCase() === normalizedHeaderName,
    ) != null
  );
}
const codexRequest = new CodexRequestClient({
  getAdditionalHeaders: getDefaultRequestHeaders,
});
function initCodexRequestRuntime(): void {}
export {
  getOpenAIRequestHeaders,
  initCodexRequestRuntime,
  setRequestLanguage,
  codexRequest,
};
