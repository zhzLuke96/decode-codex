// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the localized one-line text summary for a collapsed run of tool
// activity (created/edited/explored files, commands, MCP calls, web searches),
// for the local conversation activity stream (localConversation domain).
import { defineMessages } from "../vendor/react-intl";
import { nonIntegrationSourceKey } from "../boundaries/onboarding-commons-externals.facade";
import type { ToolActivitySummary } from "./tool-activity-summary-accumulator";

type IntlShape = {
  formatMessage: (descriptor: any, values?: Record<string, unknown>) => string;
  formatList: (items: string[], options: { type: string }) => string;
};

const NODE_REPL_SOURCE_KEY = "server:node_repl";

const shellCommandMessages = defineMessages({
  completedLeading: {
    id: "localConversation.toolActivitySummary.commands.leading",
    defaultMessage:
      "{count, plural, one {Ran a command} other {Ran # commands}}",
    description: "Collapsed tool activity summary segment for shell commands",
  },
  completed: {
    id: "localConversation.toolActivitySummary.commands",
    defaultMessage:
      "{count, plural, one {ran a command} other {ran # commands}}",
    description: "Collapsed tool activity summary segment for shell commands",
  },
  runningLeading: {
    id: "localConversation.toolActivitySummary.commands.running.leading",
    defaultMessage:
      "{count, plural, one {Running a command} other {Running # commands}}",
    description:
      "Collapsed tool activity summary segment for running shell commands",
  },
  running: {
    id: "localConversation.toolActivitySummary.commands.running",
    defaultMessage:
      "{count, plural, one {running a command} other {running # commands}}",
    description:
      "Collapsed tool activity summary segment for running shell commands",
  },
});

const nodeReplCommandMessages = defineMessages({
  completedLeading: {
    id: "localConversation.toolActivitySummary.nodeReplCommands.leading",
    defaultMessage:
      "{count, plural, one {Ran a command} other {Ran # commands}}",
    description:
      "Collapsed tool activity summary segment for completed Node REPL commands",
  },
  completed: {
    id: "localConversation.toolActivitySummary.nodeReplCommands",
    defaultMessage:
      "{count, plural, one {ran a command} other {ran # commands}}",
    description:
      "Collapsed tool activity summary segment for completed Node REPL commands",
  },
  runningLeading: {
    id: "localConversation.toolActivitySummary.nodeReplCommands.running.leading",
    defaultMessage:
      "{count, plural, one {Running a command} other {Running # commands}}",
    description:
      "Collapsed tool activity summary segment for running Node REPL commands",
  },
  running: {
    id: "localConversation.toolActivitySummary.nodeReplCommands.running",
    defaultMessage:
      "{count, plural, one {running a command} other {running # commands}}",
    description:
      "Collapsed tool activity summary segment for running Node REPL commands",
  },
});

// fat: "writing N lines" segment for files currently being created.
export function buildAddedLinesText(
  summary: ToolActivitySummary,
  intl: IntlShape,
): string | null {
  return summary.runningCreatedFileCount === 0 ||
    summary.runningCreatedLineCount === 0
    ? null
    : intl.formatMessage(
        {
          id: "localConversation.toolActivitySummary.addedLines",
          defaultMessage:
            "writing {lineCount, plural, one {a line} other {# lines}}",
          description:
            "Collapsed tool activity summary segment for lines being written",
        },
        { lineCount: summary.runningCreatedLineCount },
      );
}

// pat: command activity segment (ran / running / creating folders / searching web).
function buildCommandSummarySegment(
  summary: ToolActivitySummary,
  intl: IntlShape,
  showRunning: boolean,
  isLeading: boolean,
): string | null {
  const segments: string[] = [];
  const runningCommandCount = showRunning ? summary.runningCommandCount : 0;
  const completedWebSearchCommandCount = showRunning
    ? summary.completedWebSearchCommandCount
    : 0;

  if (summary.commandCount === 0) return null;

  const completedCommandCount =
    summary.commandCount - runningCommandCount - completedWebSearchCommandCount;
  const runningPlainCommandCount = runningCommandCount;
  const allRunningCreateFolders =
    runningPlainCommandCount > 0 &&
    runningPlainCommandCount === summary.runningFolderCreationCommandCount;
  const allRunningSearchWeb =
    runningPlainCommandCount > 0 &&
    runningPlainCommandCount === summary.runningWebSearchCommandCount;

  if (completedWebSearchCommandCount > 0) {
    segments.push(
      isLeading
        ? intl.formatMessage({
            id: "localConversation.toolActivitySummary.webSearchCommands.searched.leading",
            defaultMessage: "Searched the web",
            description:
              "Collapsed tool activity summary segment for completed web search commands",
          })
        : intl.formatMessage({
            id: "localConversation.toolActivitySummary.webSearchCommands.searched",
            defaultMessage: "searched the web",
            description:
              "Collapsed tool activity summary segment for completed web search commands",
          }),
    );
  }

  if (completedCommandCount > 0) {
    const descriptor =
      isLeading && segments.length === 0
        ? shellCommandMessages.completedLeading
        : shellCommandMessages.completed;
    segments.push(
      intl.formatMessage(descriptor, { count: completedCommandCount }),
    );
  }

  if (runningPlainCommandCount === 0)
    return intl.formatList(segments, { type: "unit" });

  if (allRunningCreateFolders) {
    segments.push(
      isLeading && segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.folders.creating.leading",
              defaultMessage:
                "{count, plural, one {Creating folder} other {Creating # folders}}",
              description:
                "Collapsed tool activity summary segment for running folder creation commands",
            },
            { count: runningPlainCommandCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.folders.creating",
              defaultMessage:
                "{count, plural, one {creating folder} other {creating # folders}}",
              description:
                "Collapsed tool activity summary segment for running folder creation commands",
            },
            { count: runningPlainCommandCount },
          ),
    );
    return intl.formatList(segments, { type: "unit" });
  }

  if (allRunningSearchWeb) {
    segments.push(
      isLeading && segments.length === 0
        ? intl.formatMessage({
            id: "localConversation.toolActivitySummary.webSearchCommands.searching.leading",
            defaultMessage: "Searching the web",
            description:
              "Collapsed tool activity summary segment for a running web search command",
          })
        : intl.formatMessage({
            id: "localConversation.toolActivitySummary.webSearchCommands.searching",
            defaultMessage: "searching the web",
            description:
              "Collapsed tool activity summary segment for a running web search command",
          }),
    );
    return intl.formatList(segments, { type: "unit" });
  }

  const descriptor =
    isLeading && segments.length === 0
      ? shellCommandMessages.runningLeading
      : shellCommandMessages.running;
  segments.push(
    intl.formatMessage(descriptor, { count: runningPlainCommandCount }),
  );
  return intl.formatList(segments, { type: "unit" });
}

// mat: exploration activity segment (read / search / list of files).
function buildExplorationSummarySegment(
  summary: ToolActivitySummary,
  intl: IntlShape,
  isLeading: boolean,
): string | null {
  const segments: string[] = [];

  if (summary.exploredFileCount > 0) {
    segments.push(
      summary.runningExploredFileCount > 0
        ? isLeading
          ? intl.formatMessage(
              {
                id: "localConversation.toolActivitySummary.exploration.readingFiles.leading",
                defaultMessage:
                  "Reading {count, plural, one {a file} other {# files}}",
                description:
                  "Collapsed tool activity summary segment for in-progress file reads",
              },
              { count: summary.exploredFileCount },
            )
          : intl.formatMessage(
              {
                id: "localConversation.toolActivitySummary.exploration.readingFiles",
                defaultMessage:
                  "reading {count, plural, one {a file} other {# files}}",
                description:
                  "Collapsed tool activity summary segment for in-progress file reads",
              },
              { count: summary.exploredFileCount },
            )
        : isLeading
          ? intl.formatMessage(
              {
                id: "localConversation.toolActivitySummary.exploration.readFiles.leading",
                defaultMessage:
                  "Read {count, plural, one {a file} other {# files}}",
                description:
                  "Collapsed tool activity summary segment for completed file reads",
              },
              { count: summary.exploredFileCount },
            )
          : intl.formatMessage(
              {
                id: "localConversation.toolActivitySummary.exploration.readFiles",
                defaultMessage:
                  "read {count, plural, one {a file} other {# files}}",
                description:
                  "Collapsed tool activity summary segment for completed file reads",
              },
              { count: summary.exploredFileCount },
            ),
    );
  }

  if (summary.searchCount > 0) {
    segments.push(
      summary.runningSearchCount > 0
        ? isLeading && segments.length === 0
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.searchingCode.leading",
              defaultMessage: "Searching code",
              description:
                "Collapsed tool activity summary segment for in-progress code searches",
            })
          : intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.searchingCode",
              defaultMessage: "searching code",
              description:
                "Collapsed tool activity summary segment for in-progress code searches",
            })
        : isLeading && segments.length === 0
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.searchedCode.leading",
              defaultMessage: "Searched code",
              description:
                "Collapsed tool activity summary segment for completed code searches",
            })
          : intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.searchedCode",
              defaultMessage: "searched code",
              description:
                "Collapsed tool activity summary segment for completed code searches",
            }),
    );
  }

  if (summary.listCount > 0) {
    segments.push(
      summary.runningListCount > 0
        ? isLeading && segments.length === 0
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.listingFiles.leading",
              defaultMessage: "Listing files",
              description:
                "Collapsed tool activity summary segment for in-progress file listing",
            })
          : intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.listingFiles",
              defaultMessage: "listing files",
              description:
                "Collapsed tool activity summary segment for in-progress file listing",
            })
        : isLeading && segments.length === 0
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.listedFiles.leading",
              defaultMessage: "Listed files",
              description:
                "Collapsed tool activity summary segment for completed file listing",
            })
          : intl.formatMessage({
              id: "localConversation.toolActivitySummary.exploration.listedFiles",
              defaultMessage: "listed files",
              description:
                "Collapsed tool activity summary segment for completed file listing",
            }),
    );
  }

  return segments.length === 0
    ? null
    : intl.formatList(segments, { type: "conjunction" });
}

type BuildToolActivitySummaryTextOptions = {
  showRunningCommandSummary?: boolean;
  isWebSearchInProgress?: boolean;
  showRunningCreatedLineCount?: boolean;
};

// dat: assemble the full comma-joined summary text from a finalized summary.
export function buildToolActivitySummaryText(
  summary: ToolActivitySummary,
  intl: IntlShape,
  options: BuildToolActivitySummaryTextOptions = {},
): string {
  const showRunningCommandSummary = options.showRunningCommandSummary === true;
  const isWebSearchInProgress = options.isWebSearchInProgress === true;
  const showRunningCreatedLineCount =
    options.showRunningCreatedLineCount !== false;
  const segments: string[] = [];

  const createdFileCount =
    summary.createdFileCount -
    summary.runningCreatedFileCount -
    summary.stoppedCreatedFileCount;
  const editedFileCount =
    summary.editedFileCount - summary.runningEditedFileCount;
  const deletedFileCount =
    summary.deletedFileCount - summary.runningDeletedFileCount;
  const loadedToolCount =
    summary.loadedToolCount - summary.runningLoadedToolCount;

  if (createdFileCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.created.leading",
              defaultMessage:
                "{count, plural, one {Created a file} other {Created # files}}",
              description:
                "Collapsed tool activity summary segment for created files",
            },
            { count: createdFileCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.created",
              defaultMessage:
                "{count, plural, one {created a file} other {created # files}}",
              description:
                "Collapsed tool activity summary segment for created files",
            },
            { count: createdFileCount },
          ),
    );
  }

  if (summary.stoppedCreatedFileCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.stoppedCreating.leading",
              defaultMessage:
                "{count, plural, one {Stopped creating a file} other {Stopped creating # files}}",
              description:
                "Collapsed tool activity summary segment for stopped file creation",
            },
            { count: summary.stoppedCreatedFileCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.stoppedCreating",
              defaultMessage:
                "{count, plural, one {stopped creating a file} other {stopped creating # files}}",
              description:
                "Collapsed tool activity summary segment for stopped file creation",
            },
            { count: summary.stoppedCreatedFileCount },
          ),
    );
  }

  if (summary.runningCreatedFileCount > 0) {
    const addedLineText = buildAddedLinesText(summary, intl);
    if (
      showRunningCreatedLineCount &&
      summary.runningCreatedLineCount > 0 &&
      segments.length === 0
    ) {
      segments.push(
        intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.creatingWithLines.leading",
            defaultMessage:
              "{count, plural, one {Creating a file} other {Creating # files}} • {addedLineText}",
            description:
              "Collapsed tool activity summary segment for files being created with lines being written",
          },
          { count: summary.runningCreatedFileCount, addedLineText },
        ),
      );
    } else if (
      showRunningCreatedLineCount &&
      summary.runningCreatedLineCount > 0
    ) {
      segments.push(
        intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.creatingWithLines",
            defaultMessage:
              "{count, plural, one {creating a file} other {creating # files}} • {addedLineText}",
            description:
              "Collapsed tool activity summary segment for files being created with lines being written",
          },
          { count: summary.runningCreatedFileCount, addedLineText },
        ),
      );
    } else if (segments.length === 0) {
      segments.push(
        intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.creating.leading",
            defaultMessage:
              "{count, plural, one {Creating a file} other {Creating # files}}",
            description:
              "Collapsed tool activity summary segment for files being created",
          },
          { count: summary.runningCreatedFileCount },
        ),
      );
    } else {
      segments.push(
        intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.creating",
            defaultMessage:
              "{count, plural, one {creating a file} other {creating # files}}",
            description:
              "Collapsed tool activity summary segment for files being created",
          },
          { count: summary.runningCreatedFileCount },
        ),
      );
    }
  }

  if (editedFileCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.edited.leading",
              defaultMessage:
                "{count, plural, one {Edited a file} other {Edited # files}}",
              description:
                "Collapsed tool activity summary segment for edited files",
            },
            { count: editedFileCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.edited",
              defaultMessage:
                "{count, plural, one {edited a file} other {edited # files}}",
              description:
                "Collapsed tool activity summary segment for edited files",
            },
            { count: editedFileCount },
          ),
    );
  }

  if (summary.runningEditedFileCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.editing.leading",
              defaultMessage:
                "{count, plural, one {Editing a file} other {Editing # files}}",
              description:
                "Collapsed tool activity summary segment for files being edited",
            },
            { count: summary.runningEditedFileCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.editing",
              defaultMessage:
                "{count, plural, one {editing a file} other {editing # files}}",
              description:
                "Collapsed tool activity summary segment for files being edited",
            },
            { count: summary.runningEditedFileCount },
          ),
    );
  }

  if (deletedFileCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.deleted.leading",
              defaultMessage:
                "{count, plural, one {Deleted a file} other {Deleted # files}}",
              description:
                "Collapsed tool activity summary segment for deleted files",
            },
            { count: deletedFileCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.deleted",
              defaultMessage:
                "{count, plural, one {deleted a file} other {deleted # files}}",
              description:
                "Collapsed tool activity summary segment for deleted files",
            },
            { count: deletedFileCount },
          ),
    );
  }

  if (summary.runningDeletedFileCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.deleting.leading",
              defaultMessage:
                "{count, plural, one {Deleting a file} other {Deleting # files}}",
              description:
                "Collapsed tool activity summary segment for files being deleted",
            },
            { count: summary.runningDeletedFileCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.deleting",
              defaultMessage:
                "{count, plural, one {deleting a file} other {deleting # files}}",
              description:
                "Collapsed tool activity summary segment for files being deleted",
            },
            { count: summary.runningDeletedFileCount },
          ),
    );
  }

  const loadedToolsAreLeading = loadedToolCount > 0 && segments.length === 0;
  if (loadedToolCount > 0) {
    segments.push(
      intl.formatMessage(
        segments.length === 0
          ? {
              id: "localConversation.toolActivitySummary.loadedTools.leading",
              defaultMessage:
                "{count, plural, one {Loaded a tool} other {Loaded # tools}}",
              description:
                "Collapsed tool activity summary segment for loaded skill definitions",
            }
          : {
              id: "localConversation.toolActivitySummary.loadedTools",
              defaultMessage:
                "{count, plural, one {loaded a tool} other {loaded # tools}}",
              description:
                "Collapsed tool activity summary segment for loaded skill definitions",
            },
        { count: loadedToolCount },
      ),
    );
  }

  if (summary.runningLoadedToolCount > 0) {
    segments.push(
      intl.formatMessage(
        segments.length === 0
          ? {
              id: "localConversation.toolActivitySummary.loadingTools.leading",
              defaultMessage:
                "{count, plural, one {Loading a tool} other {Loading # tools}}",
              description:
                "Collapsed tool activity summary segment for skill definitions being loaded",
            }
          : {
              id: "localConversation.toolActivitySummary.loadingTools",
              defaultMessage:
                "{count, plural, one {loading a tool} other {loading # tools}}",
              description:
                "Collapsed tool activity summary segment for skill definitions being loaded",
            },
        { count: summary.runningLoadedToolCount },
      ),
    );
  }

  const explorationSegment = buildExplorationSummarySegment(
    summary,
    intl,
    segments.length === 0,
  );
  if (explorationSegment != null) segments.push(explorationSegment);

  if (summary.deniedRequestCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.deniedRequests.leading",
              defaultMessage:
                "{count, plural, one {Denied request} other {Denied # requests}}",
              description:
                "Collapsed tool activity summary segment for denied automatic approval requests.",
            },
            { count: summary.deniedRequestCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.deniedRequests",
              defaultMessage:
                "{count, plural, one {denied request} other {denied # requests}}",
              description:
                "Collapsed tool activity summary segment for denied automatic approval requests.",
            },
            { count: summary.deniedRequestCount },
          ),
    );
  }

  if (summary.timedOutRequestCount > 0) {
    segments.push(
      segments.length === 0
        ? intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.timedOutRequests.leading",
              defaultMessage:
                "{count, plural, one {Request timed out} other {# requests timed out}}",
              description:
                "Collapsed tool activity summary segment for timed out automatic approval requests.",
            },
            { count: summary.timedOutRequestCount },
          )
        : intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.timedOutRequests",
              defaultMessage:
                "{count, plural, one {request timed out} other {# requests timed out}}",
              description:
                "Collapsed tool activity summary segment for timed out automatic approval requests.",
            },
            { count: summary.timedOutRequestCount },
          ),
    );
  }

  const commandSegment = buildCommandSummarySegment(
    summary,
    intl,
    showRunningCommandSummary,
    segments.length === 0,
  );
  if (commandSegment != null) segments.push(commandSegment);

  if (summary.mcpToolCallCount > 0) {
    const completedSourceNames: string[] = [];
    const runningSourceNames: string[] = [];
    let allCompletedAreIntegrations = true;
    let allRunningAreIntegrations = true;
    let nodeReplCompletedCount = 0;
    let nodeReplRunningCount = 0;

    for (const source of summary.mcpToolCallSources) {
      if (source.key === NODE_REPL_SOURCE_KEY) {
        nodeReplCompletedCount += source.count;
        nodeReplRunningCount += source.runningCount;
        continue;
      }
      const sourceName =
        source.key === "browser-use"
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.mcpToolCalls.source.browser",
              defaultMessage: "the browser",
              description:
                "Localized Browser Use source name in collapsed MCP tool activity summaries",
            })
          : (source.name ?? "");
      const isIntegration = source.key !== nonIntegrationSourceKey;
      if (source.count > source.runningCount) {
        allCompletedAreIntegrations &&= isIntegration;
        if (!completedSourceNames.includes(sourceName))
          completedSourceNames.push(sourceName);
      }
      if (source.runningCount > 0) {
        allRunningAreIntegrations &&= isIntegration;
        if (!runningSourceNames.includes(sourceName))
          runningSourceNames.push(sourceName);
      }
    }

    const nodeReplCompletedRemaining =
      nodeReplCompletedCount - nodeReplRunningCount;
    if (nodeReplCompletedRemaining > 0)
      segments.push(
        intl.formatMessage(
          segments.length === 0
            ? nodeReplCommandMessages.completedLeading
            : nodeReplCommandMessages.completed,
          { count: nodeReplCompletedRemaining },
        ),
      );
    if (nodeReplRunningCount > 0)
      segments.push(
        intl.formatMessage(
          segments.length === 0
            ? nodeReplCommandMessages.runningLeading
            : nodeReplCommandMessages.running,
          { count: nodeReplRunningCount },
        ),
      );

    const knownSourceCount = summary.mcpToolCallSources.reduce(
      (total: number, source: any) => total + source.count,
      0,
    );
    const anonymousMcpToolCallCount =
      summary.mcpToolCallCount - knownSourceCount;

    if (completedSourceNames.length > 0) {
      const sources = intl.formatList(completedSourceNames, {
        type: "conjunction",
      });
      if (
        loadedToolsAreLeading &&
        segments.length === 1 &&
        loadedToolCount > 0 &&
        runningSourceNames.length === 0 &&
        allCompletedAreIntegrations
      ) {
        segments[0] = intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.loadedToolsWithSources.leading",
            defaultMessage:
              "{count, plural, one {Loaded a tool} other {Loaded # tools}} and used {sources}",
            description:
              "Collapsed summary for loaded skill definitions followed by the named integrations they enabled",
          },
          { count: loadedToolCount, sources },
        );
      } else if (segments.length === 0 && allCompletedAreIntegrations) {
        segments.push(
          intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.mcpToolCalls.sources.leading",
              defaultMessage:
                "Used {sources} {sourceCount, plural, one {integration} other {integrations}}",
              description:
                "Collapsed tool activity summary segment for named MCP app tool calls",
            },
            { sources, sourceCount: completedSourceNames.length },
          ),
        );
      } else if (allCompletedAreIntegrations) {
        segments.push(
          intl.formatMessage(
            {
              id: "localConversation.toolActivitySummary.mcpToolCalls.sources",
              defaultMessage:
                "used {sources} {sourceCount, plural, one {integration} other {integrations}}",
              description:
                "Collapsed tool activity summary segment for named MCP app tool calls",
            },
            { sources, sourceCount: completedSourceNames.length },
          ),
        );
      } else {
        segments.push(
          intl.formatMessage(
            segments.length === 0
              ? {
                  id: "localConversation.toolActivitySummary.mcpToolCalls.nonIntegrationSources.leading",
                  defaultMessage: "Used {sources}",
                  description:
                    "Collapsed tool activity summary segment for named MCP tool call sources",
                }
              : {
                  id: "localConversation.toolActivitySummary.mcpToolCalls.nonIntegrationSources",
                  defaultMessage: "used {sources}",
                  description:
                    "Collapsed tool activity summary segment for named MCP tool call sources",
                },
            { sources },
          ),
        );
      }
    }

    if (runningSourceNames.length > 0) {
      const sources = intl.formatList(runningSourceNames, {
        type: "conjunction",
      });
      if (allRunningAreIntegrations) {
        segments.push(
          intl.formatMessage(
            segments.length === 0
              ? {
                  id: "localConversation.toolActivitySummary.mcpToolCalls.runningSources.leading",
                  defaultMessage:
                    "Using {sources} {sourceCount, plural, one {integration} other {integrations}}",
                  description:
                    "Collapsed tool activity summary segment for running named integrations",
                }
              : {
                  id: "localConversation.toolActivitySummary.mcpToolCalls.runningSources",
                  defaultMessage:
                    "using {sources} {sourceCount, plural, one {integration} other {integrations}}",
                  description:
                    "Collapsed tool activity summary segment for running named integrations after another segment",
                },
            { sources, sourceCount: runningSourceNames.length },
          ),
        );
      } else {
        segments.push(
          intl.formatMessage(
            segments.length === 0
              ? {
                  id: "localConversation.toolActivitySummary.mcpToolCalls.runningNonIntegrationSources.leading",
                  defaultMessage: "Using {sources}",
                  description:
                    "Collapsed tool activity summary segment for running named MCP tool calls",
                }
              : {
                  id: "localConversation.toolActivitySummary.mcpToolCalls.runningNonIntegrationSources",
                  defaultMessage: "using {sources}",
                  description:
                    "Collapsed tool activity summary segment for running named MCP tool calls after another segment",
                },
            { sources },
          ),
        );
      }
    }

    if (anonymousMcpToolCallCount > 0 && segments.length === 0) {
      segments.push(
        intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.mcpToolCalls.leading",
            defaultMessage:
              "{count, plural, one {Called a tool} other {Called # tools}}",
            description:
              "Collapsed tool activity summary segment for MCP tool calls",
          },
          { count: summary.mcpToolCallCount },
        ),
      );
    } else if (anonymousMcpToolCallCount > 0) {
      segments.push(
        intl.formatMessage(
          {
            id: "localConversation.toolActivitySummary.mcpToolCalls",
            defaultMessage:
              "{count, plural, one {called a tool} other {called # tools}}",
            description:
              "Collapsed tool activity summary segment for MCP tool calls",
          },
          { count: anonymousMcpToolCallCount },
        ),
      );
    }
  }

  if (summary.webSearchCount > 0) {
    segments.push(
      segments.length === 0
        ? isWebSearchInProgress
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.webSearches.searching.leading",
              defaultMessage: "Searching the web",
              description:
                "Collapsed tool activity summary segment for in-progress web searches",
            })
          : intl.formatMessage({
              id: "localConversation.toolActivitySummary.webSearches.leading",
              defaultMessage: "Searched the web",
              description:
                "Collapsed tool activity summary segment for web searches",
            })
        : isWebSearchInProgress
          ? intl.formatMessage({
              id: "localConversation.toolActivitySummary.webSearches.searching",
              defaultMessage: "searching the web",
              description:
                "Collapsed tool activity summary segment for in-progress web searches",
            })
          : intl.formatMessage({
              id: "localConversation.toolActivitySummary.webSearches",
              defaultMessage: "searched the web",
              description:
                "Collapsed tool activity summary segment for web searches",
            }),
    );
  }

  return intl.formatList(segments, { type: "unit" });
}
