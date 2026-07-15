// Restored from ref/.vite/build/worker.js
// macOS Apple Event bridge used by the Computer Use capture worker.

import { readFile, realpath, stat } from "node:fs/promises";
import { extname, isAbsolute, join, relative } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

type ObjcJsModule = {
  callFunction(
    name: string,
    signature: { returns: string; args: readonly string[] },
    ...args: unknown[]
  ): unknown;
  fromPointer: unknown;
  NobjcLibrary: new (path: string) => Record<string, unknown>;
};

type AppleEventRuntime = {
  AECreateAppleEvent(
    eventClass: number,
    eventId: number,
    target: Buffer,
    returnId: number,
    transactionId: number,
    event: Buffer,
  ): number;
  AECreateDesc(
    descriptorType: number,
    data: Buffer,
    dataLength: number,
    target: Buffer,
  ): number;
  AEDisposeDesc(descriptor: Buffer): number;
  AEGetParamPtr(
    event: Buffer,
    keyword: number,
    desiredType: number,
    actualType: Buffer,
    data: Buffer,
    maxSize: number,
    actualSize: Buffer,
  ): number;
  AEPutParamPtr(
    event: Buffer,
    keyword: number,
    typeCode: number,
    data: Buffer,
    dataLength: number,
  ): number;
  AESendMessage(
    event: Buffer,
    reply: Buffer,
    sendMode: number,
    timeout: number,
  ): number;
};

type ComputerUseStartCaptureRequest = {
  animationTarget?: unknown;
  app?: unknown;
  permissionRequestId?: unknown;
  requestId: string;
  serviceProcessIdentifier: number;
};

export type ComputerUseStartCaptureResult =
  | {
      animationDuration: null;
      permissionGrantState: string | null;
      result: "appshot_permissions_abandoned";
      transitionSnapshotHeight: null;
      transitionSpringDampingFraction: null;
      transitionSpringResponse: null;
    }
  | {
      animationDuration: number | null;
      result: "started";
      transitionSnapshotHeight: number | null;
      transitionSpringDampingFraction: number | null;
      transitionSpringResponse: number | null;
    };

type ComputerUseCaptureUpdateRequest = {
  requestId: string;
  serviceProcessIdentifier: number;
};

export type ComputerUseCaptureUpdate =
  | { type: "metadata"; app: { bundleIdentifier: string } }
  | { type: "axText"; text: string }
  | {
      type: "screenshot";
      screenshotPath: string | null;
      screenshotDataURL: string | null;
    }
  | {
      type: "completed";
      transitionSnapshotPath: string | null;
      transitionSnapshotDataURL: string | null;
    }
  | { type: "failed"; failureReason: string };

const REQUEST_TYPES = {
  getNextCaptureUpdate: "ComputerUseIPCAppNextCaptureUpdateRequest",
  startCapture: "ComputerUseIPCAppStartCaptureRequest",
} as const;

const APPLE_EVENT_RETRY_DELAYS_MS = [50, 100, 200, 400, 800] as const;
const RETRYABLE_APPLE_EVENT_ERROR_PATTERN =
  /^AESendMessage failed with -(?:600|609|1708|1717) \(/;
const MAX_CAPTURE_IMAGE_BYTES = 25 * 1024 * 1024;
const CAPTURE_SERVICE_TMP_DIR = "com.openai.sky.CUAService";
const CLIENT_API_VERSION = "CodexComputerUseNativeBridge-1";

const APPLE_EVENT_CODES = {
  eventClass: fourCharCode("SkCu"),
  eventId: fourCharCode("SndR"),
  requestType: fourCharCode("RspT"),
  requestData: fourCharCode("ReqD"),
  clientApiVersion: fourCharCode("ClVn"),
  directObject: fourCharCode("----"),
  errorNumber: fourCharCode("errn"),
  errorString: fourCharCode("errs"),
  data: fourCharCode("tdta"),
  utf8Text: fourCharCode("utf8"),
  kernelProcessId: fourCharCode("kpid"),
  sint32: fourCharCode("long"),
} as const;

let appleEventRuntimePromise: Promise<AppleEventRuntime> | null = null;

export async function startComputerUseCaptureNativeBridge({
  animationTarget,
  app,
  permissionRequestId,
  requestId,
  serviceProcessIdentifier,
}: ComputerUseStartCaptureRequest): Promise<ComputerUseStartCaptureResult> {
  const rawReply = await sendComputerUseCaptureRequestWithRetry({
    request: {
      animationTarget,
      app,
      permissionRequestId,
      requestId,
    },
    requestType: REQUEST_TYPES.startCapture,
    serviceProcessIdentifier,
    timeoutSeconds: 115,
  });
  return normalizeStartCaptureReply(rawReply);
}

export async function getNextComputerUseCaptureUpdate({
  requestId,
  serviceProcessIdentifier,
}: ComputerUseCaptureUpdateRequest): Promise<ComputerUseCaptureUpdate> {
  const rawReply = await sendComputerUseCaptureRequestWithRetry({
    request: { requestId },
    requestType: REQUEST_TYPES.getNextCaptureUpdate,
    serviceProcessIdentifier,
    timeoutSeconds: 125,
  });
  return normalizeCaptureUpdateReply(rawReply);
}

async function sendComputerUseCaptureRequestWithRetry({
  request,
  requestType,
  serviceProcessIdentifier,
  timeoutSeconds,
}: {
  request: unknown;
  requestType: string;
  serviceProcessIdentifier: number;
  timeoutSeconds: number;
}): Promise<unknown> {
  for (
    let attempt = 0;
    attempt <= APPLE_EVENT_RETRY_DELAYS_MS.length;
    attempt += 1
  ) {
    try {
      return await sendComputerUseCaptureAppleEvent({
        request,
        requestType,
        runtime: await getAppleEventRuntime(),
        serviceProcessIdentifier,
        timeoutSeconds,
      });
    } catch (error) {
      const retryDelayMs = APPLE_EVENT_RETRY_DELAYS_MS[attempt];
      if (
        retryDelayMs == null ||
        !(error instanceof Error) ||
        !RETRYABLE_APPLE_EVENT_ERROR_PATTERN.test(error.message)
      ) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
    }
  }
  throw Error("Computer Use capture Apple Event retry loop exhausted");
}

async function sendComputerUseCaptureAppleEvent({
  request,
  requestType,
  runtime,
  serviceProcessIdentifier,
  timeoutSeconds,
}: {
  request: unknown;
  requestType: string;
  runtime: AppleEventRuntime;
  serviceProcessIdentifier: number;
  timeoutSeconds: number;
}): Promise<unknown> {
  if (process.platform !== "darwin") {
    throw Error("Codex Computer Use native bridge is only available on macOS");
  }

  const targetDescriptor = createAppleEventDescriptorBuffer();
  const eventDescriptor = createAppleEventDescriptorBuffer();
  const replyDescriptor = createAppleEventDescriptorBuffer();
  const descriptorsToDispose: Buffer[] = [];

  try {
    createKernelProcessDescriptor({
      descriptorType: APPLE_EVENT_CODES.kernelProcessId,
      pid: serviceProcessIdentifier,
      runtime,
      target: targetDescriptor,
    });
    descriptorsToDispose.push(targetDescriptor);

    assertAppleEventStatus(
      runtime.AECreateAppleEvent(
        APPLE_EVENT_CODES.eventClass,
        APPLE_EVENT_CODES.eventId,
        targetDescriptor,
        -1,
        0,
        eventDescriptor,
      ),
      "AECreateAppleEvent",
    );
    descriptorsToDispose.push(eventDescriptor);

    putAppleEventUtf8Param({
      event: eventDescriptor,
      keyword: APPLE_EVENT_CODES.requestType,
      runtime,
      typeCode: APPLE_EVENT_CODES.utf8Text,
      value: requestType,
    });
    putAppleEventUtf8Param({
      event: eventDescriptor,
      keyword: APPLE_EVENT_CODES.clientApiVersion,
      runtime,
      typeCode: APPLE_EVENT_CODES.utf8Text,
      value: CLIENT_API_VERSION,
    });
    putAppleEventDataParam({
      data: Buffer.from(
        JSON.stringify(stripUndefinedProperties(request)),
        "utf8",
      ),
      event: eventDescriptor,
      keyword: APPLE_EVENT_CODES.requestData,
      runtime,
      typeCode: APPLE_EVENT_CODES.data,
    });

    assertAppleEventStatus(
      runtime.AESendMessage(
        eventDescriptor,
        replyDescriptor,
        3,
        Math.ceil(timeoutSeconds * 60),
      ),
      "AESendMessage",
    );
    descriptorsToDispose.push(replyDescriptor);

    return parseAppleEventReply(runtime, replyDescriptor);
  } finally {
    for (const descriptor of descriptorsToDispose.reverse()) {
      runtime.AEDisposeDesc(descriptor);
    }
  }
}

function parseAppleEventReply(
  runtime: AppleEventRuntime,
  replyDescriptor: Buffer,
): unknown {
  const errorNumber = getAppleEventParamPtr({
    desiredType: APPLE_EVENT_CODES.sint32,
    event: replyDescriptor,
    keyword: APPLE_EVENT_CODES.errorNumber,
    maxSize: 4,
    runtime,
  });
  if (errorNumber.status === 0) {
    const errorString = getAppleEventParamPtr({
      desiredType: APPLE_EVENT_CODES.utf8Text,
      event: replyDescriptor,
      keyword: APPLE_EVENT_CODES.errorString,
      maxSize: 1024 * 1024,
      runtime,
    });
    const message =
      errorString.status === 0
        ? errorString.data.toString("utf8")
        : "Unknown error";
    throw Error(
      `Codex Computer Use Apple Event error ${errorNumber.data.readInt32LE(0)}: ${message}`,
    );
  }

  const responseData = getAppleEventParamPtr({
    desiredType: APPLE_EVENT_CODES.data,
    event: replyDescriptor,
    keyword: APPLE_EVENT_CODES.directObject,
    maxSize: 1024 * 1024,
    runtime,
  });
  if (responseData.status !== 0) {
    throw Error(
      `Codex Computer Use Apple Event reply did not include response data (${formatAppleEventStatus(responseData.status)})`,
    );
  }
  return JSON.parse(responseData.data.toString("utf8"));
}

function normalizeStartCaptureReply(
  rawReply: unknown,
): ComputerUseStartCaptureResult {
  if (!isRecord(rawReply)) {
    throw Error("Invalid Computer Use start-capture Apple Event reply");
  }

  const result = rawReply.result;
  if (result === "appshot_permissions_abandoned") {
    return {
      result,
      animationDuration: null,
      transitionSnapshotHeight: null,
      transitionSpringDampingFraction: null,
      transitionSpringResponse: null,
      permissionGrantState: isPermissionGrantState(
        rawReply.permissionGrantState,
      )
        ? rawReply.permissionGrantState
        : null,
    };
  }
  if (result !== "started") {
    throw Error("Invalid Computer Use start-capture result");
  }

  return {
    result,
    animationDuration: numberOrNull(rawReply.animationDuration),
    transitionSnapshotHeight: positiveFiniteNumberOrNull(
      rawReply.transitionSnapshotHeight,
    ),
    transitionSpringDampingFraction: numberOrNull(
      rawReply.transitionSpringDampingFraction,
    ),
    transitionSpringResponse: numberOrNull(rawReply.transitionSpringResponse),
  };
}

async function normalizeCaptureUpdateReply(
  rawReply: unknown,
): Promise<ComputerUseCaptureUpdate> {
  if (!isRecord(rawReply) || typeof rawReply.type !== "string") {
    throw Error("Invalid Computer Use capture update Apple Event reply");
  }

  switch (rawReply.type) {
    case "metadata":
      return {
        type: "metadata",
        app: {
          bundleIdentifier:
            isRecord(rawReply.app) &&
            typeof rawReply.app.bundleIdentifier === "string"
              ? rawReply.app.bundleIdentifier
              : "",
        },
      };
    case "axText":
      return {
        type: "axText",
        text: typeof rawReply.text === "string" ? rawReply.text : "",
      };
    case "screenshot": {
      const screenshotPath = await resolveCaptureImagePath(
        typeof rawReply.screenshotURL === "string"
          ? rawReply.screenshotURL
          : isRecord(rawReply.screenshot) &&
              typeof rawReply.screenshot.url === "string"
            ? rawReply.screenshot.url
            : null,
      );
      return {
        type: "screenshot",
        screenshotPath,
        screenshotDataURL:
          screenshotPath == null
            ? null
            : await readCaptureImageDataUrl(screenshotPath),
      };
    }
    case "completed": {
      const transitionSnapshotPath = await resolveCaptureImagePath(
        typeof rawReply.transitionSnapshotURL === "string"
          ? rawReply.transitionSnapshotURL
          : null,
      );
      return {
        type: "completed",
        transitionSnapshotPath,
        transitionSnapshotDataURL:
          transitionSnapshotPath == null
            ? null
            : await readCaptureImageDataUrl(transitionSnapshotPath),
      };
    }
    case "failed": {
      const failureReason =
        typeof rawReply.failureReason === "string" &&
        rawReply.failureReason.trim() !== ""
          ? rawReply.failureReason
          : "native_service_failed";
      return {
        type: "failed",
        failureReason,
      };
    }
    default:
      throw Error(
        `Unknown Computer Use capture update type '${rawReply.type}'`,
      );
  }
}

async function resolveCaptureImagePath(
  value: string | null,
): Promise<string | null> {
  if (value == null || value.trim().length === 0) return null;

  let imagePath: string;
  try {
    const imageUrl = new URL(value);
    if (imageUrl.protocol !== "file:") return null;
    imagePath = fileURLToPath(imageUrl);
  } catch {
    if (!isAbsolute(value)) return null;
    imagePath = value;
  }

  if (getCaptureImageMimeType(imagePath) == null) return null;

  try {
    const [realImagePath, captureTempRoot] = await Promise.all([
      realpath(imagePath),
      realpath(join(tmpdir(), CAPTURE_SERVICE_TMP_DIR)),
    ]);
    const relativeImagePath = relative(captureTempRoot, realImagePath);
    if (relativeImagePath.startsWith("..") || isAbsolute(relativeImagePath)) {
      return null;
    }

    const imageStat = await stat(realImagePath);
    return !imageStat.isFile() || imageStat.size > MAX_CAPTURE_IMAGE_BYTES
      ? null
      : realImagePath;
  } catch {
    return null;
  }
}

async function readCaptureImageDataUrl(imagePath: string): Promise<string> {
  const mimeType = getCaptureImageMimeType(imagePath);
  if (mimeType == null) {
    throw Error(`Unsupported capture image type for ${imagePath}`);
  }
  return `data:${mimeType};base64,${(await readFile(imagePath)).toString(
    "base64",
  )}`;
}

function getAppleEventRuntime(): Promise<AppleEventRuntime> {
  appleEventRuntimePromise ??= loadAppleEventRuntime();
  return appleEventRuntimePromise;
}

async function loadAppleEventRuntime(): Promise<AppleEventRuntime> {
  const { callFunction, fromPointer, NobjcLibrary } = (await import(
    "objc-js"
  )) as unknown as ObjcJsModule;
  const foundation = new NobjcLibrary(
    "/System/Library/Frameworks/Foundation.framework/Foundation",
  );
  const appKit = new NobjcLibrary(
    "/System/Library/Frameworks/AppKit.framework/AppKit",
  );
  const bridge = {
    callFunction,
    fromPointer,
    ObjC: {
      NSBundle: requireObjcClass(foundation, "NSBundle"),
      NSDictionary: requireObjcClass(foundation, "NSDictionary"),
      NSString: requireObjcClass(foundation, "NSString"),
      NSURL: requireObjcClass(foundation, "NSURL"),
      NSRunningApplication: requireObjcClass(appKit, "NSRunningApplication"),
      NSWorkspace: requireObjcClass(appKit, "NSWorkspace"),
    },
  };

  return {
    AECreateDesc: bindAppleEventFunction(bridge, "AECreateDesc", [
      "I",
      "^v",
      "Q",
      "^v",
    ]),
    AEDisposeDesc: bindAppleEventFunction(bridge, "AEDisposeDesc", ["^v"]),
    AECreateAppleEvent: bindAppleEventFunction(bridge, "AECreateAppleEvent", [
      "I",
      "I",
      "^v",
      "s",
      "i",
      "^v",
    ]),
    AEPutParamPtr: bindAppleEventFunction(bridge, "AEPutParamPtr", [
      "^v",
      "I",
      "I",
      "^v",
      "Q",
    ]),
    AESendMessage: bindAppleEventFunction(bridge, "AESendMessage", [
      "^v",
      "^v",
      "I",
      "i",
    ]),
    AEGetParamPtr: bindAppleEventFunction(bridge, "AEGetParamPtr", [
      "^v",
      "I",
      "I",
      "^I",
      "^v",
      "Q",
      "^Q",
    ]),
  };
}

function createKernelProcessDescriptor({
  descriptorType,
  pid,
  runtime,
  target,
}: {
  descriptorType: number;
  pid: number;
  runtime: AppleEventRuntime;
  target: Buffer;
}): void {
  const processIdentifier = Buffer.alloc(4);
  processIdentifier.writeInt32LE(pid, 0);
  assertAppleEventStatus(
    runtime.AECreateDesc(
      descriptorType,
      processIdentifier,
      processIdentifier.length,
      target,
    ),
    "AECreateDesc(kpid)",
  );
}

function putAppleEventUtf8Param({
  event,
  keyword,
  runtime,
  typeCode,
  value,
}: {
  event: Buffer;
  keyword: number;
  runtime: AppleEventRuntime;
  typeCode: number;
  value: string;
}): void {
  putAppleEventDataParam({
    data: Buffer.from(value, "utf8"),
    event,
    keyword,
    runtime,
    typeCode,
  });
}

function putAppleEventDataParam({
  data,
  event,
  keyword,
  runtime,
  typeCode,
}: {
  data: Buffer;
  event: Buffer;
  keyword: number;
  runtime: AppleEventRuntime;
  typeCode: number;
}): void {
  assertAppleEventStatus(
    runtime.AEPutParamPtr(event, keyword, typeCode, data, data.length),
    `AEPutParamPtr(${fourCharString(keyword)})`,
  );
}

function getAppleEventParamPtr({
  desiredType,
  event,
  keyword,
  maxSize,
  runtime,
}: {
  desiredType: number;
  event: Buffer;
  keyword: number;
  maxSize: number;
  runtime: AppleEventRuntime;
}): { data: Buffer; status: number } {
  const actualType = Buffer.alloc(4);
  const actualSize = Buffer.alloc(8);
  const data = Buffer.alloc(maxSize);
  const status = runtime.AEGetParamPtr(
    event,
    keyword,
    desiredType,
    actualType,
    data,
    data.length,
    actualSize,
  );
  return {
    data: data.subarray(0, Number(actualSize.readBigUInt64LE(0))),
    status,
  };
}

function bindAppleEventFunction(
  bridge: Pick<ObjcJsModule, "callFunction">,
  name: string,
  args: readonly string[],
): (...args: unknown[]) => number {
  return (...functionArgs) =>
    Number(
      bridge.callFunction(
        name,
        {
          returns: "i",
          args,
        },
        ...functionArgs,
      ),
    );
}

function assertAppleEventStatus(status: number, operation: string): void {
  if (status !== 0) {
    throw Error(`${operation} failed with ${formatAppleEventStatus(status)}`);
  }
}

function formatAppleEventStatus(status: number): string {
  return status === 0 ? "0" : `${status} (${fourCharString(status)})`;
}

function fourCharCode(value: string): number {
  if (value.length !== 4) {
    throw TypeError("fourCharCode requires a four-character string");
  }
  return (
    value.charCodeAt(0) * 16_777_216 +
    value.charCodeAt(1) * 65_536 +
    value.charCodeAt(2) * 256 +
    value.charCodeAt(3)
  );
}

function fourCharString(value: number): string {
  const unsigned = ((value % 4_294_967_296) + 4_294_967_296) % 4_294_967_296;
  return String.fromCharCode(
    Math.floor(unsigned / 16_777_216) % 256,
    Math.floor(unsigned / 65_536) % 256,
    Math.floor(unsigned / 256) % 256,
    unsigned % 256,
  );
}

function createAppleEventDescriptorBuffer(): Buffer {
  return Buffer.alloc(16);
}

function requireObjcClass(
  library: Record<string, unknown>,
  className: string,
): unknown {
  const objcClass = library[className];
  if (objcClass == null) {
    throw Error(`Objective-C class not found: ${className}`);
  }
  return objcClass;
}

function stripUndefinedProperties(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripUndefinedProperties);
  if (!isRecord(value)) return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, propertyValue]) => propertyValue !== undefined)
      .map(([key, propertyValue]) => [
        key,
        stripUndefinedProperties(propertyValue),
      ]),
  );
}

function getCaptureImageMimeType(imagePath: string): string | null {
  switch (extname(imagePath).toLowerCase()) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    default:
      return null;
  }
}

function numberOrNull(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function positiveFiniteNumberOrNull(value: unknown): number | null {
  const numericValue = numberOrNull(value);
  return numericValue == null || numericValue <= 0 ? null : numericValue;
}

function isPermissionGrantState(value: unknown): value is string {
  return (
    value === "none_granted" ||
    value === "accessibility_granted" ||
    value === "screen_recording_granted" ||
    value === "both_granted"
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
