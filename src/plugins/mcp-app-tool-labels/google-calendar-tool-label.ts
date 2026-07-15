// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable activity labels for the Google Calendar MCP connector tool calls.
import { z } from "zod";
import type { IntlShape } from "../../vendor/react-intl";
import {
  appMatchesIdentifier,
  truncatePreview,
  type McpAppToolLabelInput,
} from "./shared";
import { countToolResultItems } from "./result-item-count";

const GOOGLE_CALENDAR_APP_IDENTIFIER = "google calendar";
const GOOGLE_CALENDAR_PREVIEW_MAX_LENGTH = 40;

const GOOGLE_CALENDAR_SEARCH_TOOL_KEYS = new Set(["search", "search_events"]);

const googleCalendarToolArgumentsSchema = z
  .object({
    calendar_ids: z.array(z.string().trim().min(1)).optional().catch(undefined),
    event_ids: z.array(z.string().trim().min(1)).optional().catch(undefined),
    max_messages: z.number().int().positive().optional().catch(undefined),
    max_results: z.number().int().positive().optional().catch(undefined),
    query: z.string().trim().min(1).max(500).optional().catch(undefined),
    response_status: z
      .string()
      .trim()
      .min(1)
      .max(50)
      .optional()
      .catch(undefined),
    title: z.string().trim().min(1).max(200).optional().catch(undefined),
  })
  .passthrough();

export function isGoogleCalendarApp(
  app: McpAppToolLabelInput["matchingApp"],
): boolean {
  return appMatchesIdentifier(app, GOOGLE_CALENDAR_APP_IDENTIFIER);
}

export function buildGoogleCalendarToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolResult,
  toolKey,
}: McpAppToolLabelInput): string | null {
  if (!isGoogleCalendarApp(matchingApp)) return null;
  const parsed = googleCalendarToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const {
    calendar_ids,
    event_ids,
    max_results,
    query,
    response_status,
    title,
  } = parsed.data;

  return toolKey === "create_event" || toolKey === "update_event"
    ? buildCalendarPreviewLabel({ intl, label: fallbackLabel, value: title })
    : toolKey === "respond_event"
      ? buildResponseStatusLabel({
          completed,
          intl,
          responseStatus: response_status,
        })
      : toolKey === "batch_read_event"
        ? buildReadEventsLabel({ completed, eventIds: event_ids, intl })
        : toolKey === "get_availability"
          ? buildAvailabilityLabel({
              completed,
              calendarIds: calendar_ids,
              intl,
            })
          : GOOGLE_CALENDAR_SEARCH_TOOL_KEYS.has(toolKey)
            ? (buildCalendarPreviewLabel({
                intl,
                label: fallbackLabel,
                value: query,
              }) ??
              buildSearchCountLabel({
                completed,
                intl,
                maxResults: max_results,
                toolResult,
              }))
            : null;
}

function buildCalendarPreviewLabel({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = truncatePreview(value, GOOGLE_CALENDAR_PREVIEW_MAX_LENGTH);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.googleCalendar.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description: "Google Calendar MCP label with a short text preview.",
        },
        { label, preview },
      );
}

function buildSearchCountLabel({
  completed,
  intl,
  maxResults,
  toolResult,
}: {
  completed: boolean;
  intl: IntlShape;
  maxResults: number | undefined;
  toolResult: unknown;
}): string | null {
  if (!completed || maxResults == null) return null;
  const count = countToolResultItems({
    preferredKeys: ["events", "results", "items"],
    toolResult,
  });
  return count == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.googleCalendar.searchedEventsCount",
          defaultMessage:
            "Searched {count, plural, one {an event} other {{count, number} events}}",
          description:
            "Completed Google Calendar search label when an exact result count is known.",
        },
        { count },
      );
}

function buildReadEventsLabel({
  completed,
  eventIds,
  intl,
}: {
  completed: boolean;
  eventIds: string[] | undefined;
  intl: IntlShape;
}): string | null {
  return eventIds == null || eventIds.length === 0
    ? null
    : completed
      ? intl.formatMessage(
          {
            id: "codex.mcpTool.googleCalendar.readEventsCount.completed",
            defaultMessage:
              "Read {count, plural, one {an event} other {{count, number} events}}",
            description:
              "Completed label for reading one or more calendar events.",
          },
          { count: eventIds.length },
        )
      : intl.formatMessage(
          {
            id: "codex.mcpTool.googleCalendar.readEventsCount.active",
            defaultMessage:
              "Reading {count, plural, one {an event} other {{count, number} events}}",
            description:
              "Active label for reading one or more calendar events.",
          },
          { count: eventIds.length },
        );
}

function buildAvailabilityLabel({
  completed,
  calendarIds,
  intl,
}: {
  completed: boolean;
  calendarIds: string[] | undefined;
  intl: IntlShape;
}): string | null {
  if (calendarIds == null || calendarIds.length === 0) return null;
  const readableCalendars = calendarIds.filter(isReadableCalendarId);
  return readableCalendars.length === 1
    ? completed
      ? intl.formatMessage(
          {
            id: "codex.mcpTool.googleCalendar.checkedAvailabilityFor.completed",
            defaultMessage: "Checked availability for {calendar}",
            description:
              "Completed label for checking availability for a single readable calendar.",
          },
          { calendar: readableCalendars[0] },
        )
      : intl.formatMessage(
          {
            id: "codex.mcpTool.googleCalendar.checkedAvailabilityFor.active",
            defaultMessage: "Checking availability for {calendar}",
            description:
              "Active label for checking availability for a single readable calendar.",
          },
          { calendar: readableCalendars[0] },
        )
    : calendarIds.length > 1
      ? completed
        ? intl.formatMessage(
            {
              id: "codex.mcpTool.googleCalendar.checkedAvailabilityAcross.completed",
              defaultMessage:
                "Checked availability across {count, plural, one {a calendar} other {{count, number} calendars}}",
              description:
                "Completed label for checking availability across multiple calendars.",
            },
            { count: calendarIds.length },
          )
        : intl.formatMessage(
            {
              id: "codex.mcpTool.googleCalendar.checkedAvailabilityAcross.active",
              defaultMessage:
                "Checking availability across {count, plural, one {a calendar} other {{count, number} calendars}}",
              description:
                "Active label for checking availability across multiple calendars.",
            },
            { count: calendarIds.length },
          )
      : null;
}

function buildResponseStatusLabel({
  completed,
  intl,
  responseStatus,
}: {
  completed: boolean;
  intl: IntlShape;
  responseStatus: string | undefined;
}): string | null {
  if (responseStatus == null) return null;
  switch (responseStatus.toLowerCase()) {
    case "accepted":
      return completed
        ? intl.formatMessage({
            id: "codex.mcpTool.googleCalendar.acceptedEvent",
            defaultMessage: "Accepted event",
            description:
              "Completed label for accepting a calendar event invitation.",
          })
        : intl.formatMessage({
            id: "codex.mcpTool.googleCalendar.acceptingEvent",
            defaultMessage: "Accepting event",
            description:
              "Active label for accepting a calendar event invitation.",
          });
    case "declined":
      return completed
        ? intl.formatMessage({
            id: "codex.mcpTool.googleCalendar.declinedEvent",
            defaultMessage: "Declined event",
            description:
              "Completed label for declining a calendar event invitation.",
          })
        : intl.formatMessage({
            id: "codex.mcpTool.googleCalendar.decliningEvent",
            defaultMessage: "Declining event",
            description:
              "Active label for declining a calendar event invitation.",
          });
    case "tentative":
      return completed
        ? intl.formatMessage({
            id: "codex.mcpTool.googleCalendar.markedEventTentative",
            defaultMessage: "Marked event tentative",
            description:
              "Completed label for marking a calendar event tentative.",
          })
        : intl.formatMessage({
            id: "codex.mcpTool.googleCalendar.markingEventTentative",
            defaultMessage: "Marking event tentative",
            description: "Active label for marking a calendar event tentative.",
          });
    default:
      return null;
  }
}

function isReadableCalendarId(calendarId: string): boolean {
  const trimmed = calendarId.trim();
  return trimmed.length === 0 || trimmed === "primary"
    ? false
    : trimmed.includes("@");
}
