// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { createReadStream } from "node:fs";
import * as fsPromises from "node:fs/promises";
import * as path from "node:path";
import { Readable } from "node:stream";

export async function createStaticFileResponse(
  filePath: string,
): Promise<Response> {
  let stats;
  try {
    stats = await fsPromises.stat(filePath);
  } catch {
    return notFoundResponse();
  }
  if (!stats.isFile()) return notFoundResponse();
  return new Response(readableStreamBody(createReadStream(filePath)), {
    headers: {
      "Content-Length": String(stats.size),
      "Content-Type": mimeTypeForPath(filePath),
    },
  });
}

export function notFoundResponse(): Response {
  return new Response(null, {
    status: 404,
    statusText: "Not Found",
  });
}

export function isVideoFile(filePath: string): boolean {
  return mimeTypeForPath(filePath).startsWith("video/");
}

export function isImageOrVideoFile(filePath: string): boolean {
  const mimeType = mimeTypeForPath(filePath);
  return mimeType.startsWith("image/") || mimeType.startsWith("video/");
}

export async function createVideoFileResponse(
  request: Request,
  filePath: string,
): Promise<Response> {
  let stats;
  try {
    stats = await fsPromises.stat(filePath);
  } catch {
    return notFoundResponse();
  }
  const headers = new Headers({
    "Accept-Ranges": "bytes",
    "Content-Type": mimeTypeForPath(filePath),
  });
  const rangeHeader = request.headers.get("range");
  if (!rangeHeader) {
    headers.set("Content-Length", String(stats.size));
    return new Response(readableStreamBody(createReadStream(filePath)), {
      headers,
    });
  }
  const range = parseHttpByteRange(rangeHeader, stats.size);
  if (!range) {
    headers.set("Content-Range", `bytes */${stats.size}`);
    return new Response(null, {
      status: 416,
      statusText: "Range Not Satisfiable",
      headers,
    });
  }
  headers.set("Content-Length", String(range.end - range.start + 1));
  headers.set(
    "Content-Range",
    `bytes ${range.start}-${range.end}/${stats.size}`,
  );
  return new Response(readableStreamBody(createReadStream(filePath, range)), {
    status: 206,
    statusText: "Partial Content",
    headers,
  });
}

function parseHttpByteRange(
  headerValue: string,
  fileSize: number,
): {
  start: number;
  end: number;
} | null {
  const match = /^bytes=(\d*)-(\d*)$/.exec(headerValue);
  if (!match) return null;
  const [, startText, endText] = match;
  if (startText === "" && endText === "") return null;
  if (startText === "") {
    const suffixLength = Number(endText);
    return suffixLength <= 0 || fileSize === 0
      ? null
      : {
          start: Math.max(fileSize - suffixLength, 0),
          end: fileSize - 1,
        };
  }
  const start = Number(startText);
  const requestedEnd = endText === "" ? fileSize - 1 : Number(endText);
  return start < 0 || requestedEnd < start || start >= fileSize
    ? null
    : {
        start,
        end: Math.min(requestedEnd, fileSize - 1),
      };
}

function readableStreamBody(
  stream: ReturnType<typeof createReadStream>,
): BodyInit {
  return Readable.toWeb(stream) as unknown as BodyInit;
}

function mimeTypeForPath(filePath: string): string {
  switch (path.extname(filePath).toLowerCase()) {
    case ".avif":
      return "image/avif";
    case ".css":
      return "text/css; charset=utf-8";
    case ".gif":
      return "image/gif";
    case ".html":
      return "text/html; charset=utf-8";
    case ".ico":
      return "image/x-icon";
    case ".jpeg":
    case ".jpg":
      return "image/jpeg";
    case ".js":
    case ".mjs":
      return "text/javascript; charset=utf-8";
    case ".json":
    case ".map":
      return "application/json; charset=utf-8";
    case ".mp4":
      return "video/mp4";
    case ".ogg":
    case ".ogv":
      return "video/ogg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml; charset=utf-8";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".wasm":
      return "application/wasm";
    case ".webm":
      return "video/webm";
    case ".webp":
      return "image/webp";
    case ".woff":
      return "font/woff";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}
