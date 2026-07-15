// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import { vscodeApiL as VscodeFetchBridge } from "../../boundaries/vscode-api";
import * as appRuntime from "../../boundaries/src-l0hb-mz-p";
import { getOpenAIRequestHeaders } from "../../runtime/request";
import { readSettingValue } from "../../settings/setting-storage";
import {
  dictionaryEntriesSchema,
  parseResponseStreamEventPayload,
} from "./schemas";
import type {
  CleanupDictationTranscriptOptions,
  ParsedResponseStreamEvent,
  ResponseOutput,
  ResponseStreamEventPayload,
} from "./types";
const DICTATION_CLEANUP_MODEL = "gpt-5.4-mini";
const MAX_TRANSCRIPT_CHARS = 4000;
const MAX_SURROUNDING_TEXT_CHARS = 2000;
const DICTATION_CLEANUP_INSTRUCTIONS =
  "Clean up dictation transcripts. Fix likely speech recognition mistakes, punctuation, capitalization, and formatting. Remove filler words and disfluencies when they do not add meaning. When the user clearly self-corrects or backtracks, keep the corrected intent. Use surrounding text only as context. Dictionary entries are canonical spellings, names, file paths, and code symbols; when the transcript likely refers to one, copy the dictionary entry exactly, including casing and punctuation. Preserve the user's meaning, wording, and flow unless a small cleanup makes the transcript more coherent. Do not answer the user or add new content. Return only the cleaned transcript.";

export function initDictationTranscriptCleanupChunk(): void {
  void cleanupDictationTranscript;
}

export async function cleanupDictationTranscript({
  transcript,
  surroundingText,
  cleanupEnabled,
}: CleanupDictationTranscriptOptions) {
  const trimmedTranscript = transcript.trim();
  if (trimmedTranscript.length === 0) return "";
  if (!cleanupEnabled) return trimmedTranscript;
  try {
    const dictionary = await readDictationDictionary();
    return (
      (await transcribeTextWithResponses({
        instructions: DICTATION_CLEANUP_INSTRUCTIONS,
        input: buildCleanupPrompt({
          transcript: trimmedTranscript,
          surroundingText: surroundingText ?? null,
          dictionary,
        }),
      })) ?? trimmedTranscript
    );
  } catch {
    return trimmedTranscript;
  }
}
function buildCleanupPrompt({
  transcript,
  surroundingText,
  dictionary,
}: {
  transcript: string;
  surroundingText: string | null;
  dictionary: string[];
}) {
  const trimmedSurroundingText = surroundingText
    ?.trim()
    .slice(0, MAX_SURROUNDING_TEXT_CHARS);
  return `${trimmedSurroundingText == null || trimmedSurroundingText.length === 0 ? "" : `Surrounding text:\n${trimmedSurroundingText}\n\n`}Dictionary (canonical entries; use exact spelling, casing, and punctuation when they match):
${dictionary.length === 0 ? "(none)" : dictionary.join("\n")}

Transcript:
${transcript.slice(0, MAX_TRANSCRIPT_CHARS)}`;
}
async function readDictationDictionary() {
  const parsedDictionary = dictionaryEntriesSchema.safeParse(
    await readSettingValue(appRuntime._srcW.dictationDictionary),
  );
  return parsedDictionary.success
    ? (parsedDictionary.data as string[])
        .map((entry) => entry.trim())
        .filter((entry) => entry.length > 0)
        .slice(0, 100)
    : [];
}
async function transcribeTextWithResponses({
  instructions,
  input,
  model = DICTATION_CLEANUP_MODEL,
  preserveOutputWhitespace = false,
  signal,
}: {
  instructions: string;
  input: string;
  model?: string;
  preserveOutputWhitespace?: boolean;
  signal?: AbortSignal;
}) {
  const trimmedInput = input.trim();
  if (trimmedInput.length === 0) return null;
  const body = {
    model,
    instructions,
    input: [
      {
        type: "message",
        role: "user",
        content: [
          {
            type: "input_text",
            text: trimmedInput,
          },
        ],
      },
    ],
    tools: [],
    tool_choice: "none",
    parallel_tool_calls: false,
    reasoning: {
      effort: "low",
    },
    store: false,
    stream: true,
    include: [],
  };
  return streamResponseText(
    JSON.stringify(body),
    preserveOutputWhitespace,
    signal,
  );
}
function streamResponseText(
  body: string,
  preserveOutputWhitespace: boolean,
  signal?: AbortSignal,
) {
  (
    signal as
      | (AbortSignal & {
          throwIfAborted?: () => void;
        })
      | undefined
  )?.throwIfAborted?.();
  return new Promise<string | null>((resolve, reject) => {
    const deltas: string[] = [];
    let completedText: string | null = null;
    let streamId: string | null = null;
    let settled = false;
    function finish(value: string | null) {
      if (settled) return;
      settled = true;
      signal?.removeEventListener("abort", abort);
      resolve(value);
    }
    function fail(error: Error) {
      if (settled) return;
      settled = true;
      signal?.removeEventListener("abort", abort);
      if (streamId != null)
        VscodeFetchBridge.getInstance().cancelStream(streamId);
      reject(error);
    }
    function abort() {
      fail(new DOMException("The operation was aborted", "AbortError"));
    }
    signal?.addEventListener("abort", abort, {
      once: true,
    });
    streamId = VscodeFetchBridge.getInstance().stream(
      "POST",
      "/codex/responses",
      {
        body,
        headers: getOpenAIRequestHeaders(),
        onEvent: (event: { data: unknown }) => {
          const parsedEvent = parseResponseStreamEvent(
            event,
            preserveOutputWhitespace,
          );
          if (parsedEvent.error != null) {
            fail(Error(parsedEvent.error));
            return;
          }
          if (parsedEvent.delta != null) deltas.push(parsedEvent.delta);
          if (parsedEvent.completedText != null) {
            completedText = parsedEvent.completedText;
          }
        },
        onError: (event: { error: string }) => {
          fail(Error(event.error));
        },
        onComplete: () => {
          finish(
            completedText ??
              (preserveOutputWhitespace
                ? joinDeltasPreserveWhitespace(deltas)
                : joinDeltasTrimmed(deltas)),
          );
        },
      },
    );
  });
}
function parseResponseStreamEvent(
  event: {
    data: unknown;
  },
  preserveOutputWhitespace: boolean,
): ParsedResponseStreamEvent {
  const payload = parseResponseStreamEventPayload(event.data);
  const error = readResponseError(payload.error);
  if (error != null) {
    return {
      delta: null,
      completedText: null,
      error,
    };
  }
  if (payload.response != null) {
    return {
      delta: null,
      completedText: preserveOutputWhitespace
        ? extractResponseCompletedTextPreserveWhitespace(payload.response)
        : extractResponseCompletedTextTrimmed(payload.response),
      error: null,
    };
  }
  if (payload.type === "response.output_text.delta" && payload.delta != null) {
    return {
      delta: payload.delta,
      completedText: null,
      error: null,
    };
  }
  if (payload.type === "response.output_text.done" && payload.text != null) {
    return {
      delta: null,
      completedText: payload.text,
      error: null,
    };
  }
  return {
    delta: null,
    completedText: null,
    error: null,
  };
}
function readResponseError(error: ResponseStreamEventPayload["error"]) {
  return typeof error === "string" ? error : (error?.message ?? null);
}
function joinDeltasTrimmed(deltas: string[]) {
  const text = deltas.join("").trim();
  return text.length === 0 ? null : text;
}
function extractResponseCompletedTextTrimmed(response: ResponseOutput) {
  const text = response.output
    .flatMap((item) => item.content ?? [])
    .map((item) => item.text?.trim() ?? "")
    .filter((item) => item.length > 0)
    .join("\n")
    .trim();
  return text.length === 0 ? null : text;
}
function joinDeltasPreserveWhitespace(deltas: string[]) {
  return deltas.length === 0 ? null : deltas.join("");
}
function extractResponseCompletedTextPreserveWhitespace(
  response: ResponseOutput,
) {
  return joinDeltasPreserveWhitespace(
    response.output
      .flatMap((item) => item.content ?? [])
      .flatMap((item) => (item.text == null ? [] : [item.text])),
  );
}
