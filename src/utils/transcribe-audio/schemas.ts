// Restored from ref/webview/assets/transcribe-audio-PV06sNq2.js
// transcribe-audio-PV06sNq2 chunk restored from the Codex webview bundle.
import * as zodRuntime from "../../boundaries/src-l0hb-mz-p";
import type {
  DictationStreamingEvent,
  ResponseStreamEventPayload,
} from "./types";
const dictationStreamErrorSchema = zodRuntime.srcTa({
  code: zodRuntime.srcAa(),
  message: zodRuntime.srcAa(),
  retryable: zodRuntime.srcHa(),
});
const dictationSessionSchema = zodRuntime.srcTa({
  session_id: zodRuntime.srcAa(),
  status: zodRuntime._srcLa(["active", "closed"]),
  config: zodRuntime.srcTa({
    provider_mode: zodRuntime._srcLa(["buffered", "streaming_sse"]),
    transcript_delivery_mode: zodRuntime._srcLa([
      "final_only",
      "segment",
      "delta",
    ]),
  }),
});
const dictationStreamingEventSchema = zodRuntime.srcA("type", [
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("session.started"),
    sequence_no: zodRuntime.srcWa(),
    session: dictationSessionSchema,
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("session.updated"),
    sequence_no: zodRuntime.srcWa(),
    session: dictationSessionSchema,
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("speech.started"),
    sequence_no: zodRuntime.srcWa(),
    utterance_id: zodRuntime.srcAa(),
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("speech.stopped"),
    sequence_no: zodRuntime.srcWa(),
    utterance_id: zodRuntime.srcAa(),
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("transcript.delta"),
    sequence_no: zodRuntime.srcWa(),
    utterance_id: zodRuntime.srcAa(),
    revision: zodRuntime.srcWa(),
    text: zodRuntime.srcAa(),
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("transcript.segment"),
    sequence_no: zodRuntime.srcWa(),
    utterance_id: zodRuntime.srcAa(),
    revision: zodRuntime.srcWa(),
    text: zodRuntime.srcAa(),
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("transcript.final"),
    sequence_no: zodRuntime.srcWa(),
    utterance_id: zodRuntime.srcAa(),
    revision: zodRuntime.srcWa(),
    text: zodRuntime.srcAa(),
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("transcript.failed"),
    sequence_no: zodRuntime.srcWa(),
    utterance_id: zodRuntime.srcAa().nullish(),
    error: dictationStreamErrorSchema,
  }),
  zodRuntime.srcTa({
    type: zodRuntime.srcXa("session.error"),
    sequence_no: zodRuntime.srcWa(),
    fatal: zodRuntime.srcHa(),
    error: dictationStreamErrorSchema,
  }),
]);
const responseOutputSchema = zodRuntime.srcTa({
  output: zodRuntime._srcPa(
    zodRuntime.srcTa({
      type: zodRuntime.srcAa(),
      content: zodRuntime
        ._srcPa(
          zodRuntime.srcTa({
            type: zodRuntime.srcAa(),
            text: zodRuntime.srcAa().optional(),
          }),
        )
        .optional(),
    }),
  ),
});
const responseStreamEventSchema = zodRuntime
  .srcTa({
    type: zodRuntime.srcAa().optional(),
    delta: zodRuntime.srcAa().optional(),
    text: zodRuntime.srcAa().optional(),
    response: responseOutputSchema.optional(),
    error: zodRuntime
      .srcJa([
        zodRuntime.srcAa(),
        zodRuntime.srcTa({
          message: zodRuntime.srcAa().optional(),
        }),
      ])
      .optional(),
  })
  .passthrough();
export const dictionaryEntriesSchema = zodRuntime._srcPa(zodRuntime.srcAa());
export function parseDictationStreamingEvent(
  payload: unknown,
): DictationStreamingEvent | null {
  if (typeof payload !== "string") return null;
  try {
    const parsedPayload = JSON.parse(payload);
    const parsedEvent = dictationStreamingEventSchema.safeParse(parsedPayload);
    return parsedEvent.success
      ? (parsedEvent.data as DictationStreamingEvent)
      : null;
  } catch {
    return null;
  }
}
export function parseResponseStreamEventPayload(
  payload: unknown,
): ResponseStreamEventPayload {
  return responseStreamEventSchema.parse(payload) as ResponseStreamEventPayload;
}
