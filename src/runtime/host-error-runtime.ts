// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host request error class used for retry/error filtering.

export class HostRequestError extends Error {
  readonly code?: string;
  readonly status?: number;

  constructor(
    message: string,
    options: { code?: string; status?: number; cause?: unknown } = {},
  ) {
    super(message, { cause: options.cause });
    this.name = "HostRequestError";
    this.code = options.code;
    this.status = options.status;
  }
}

