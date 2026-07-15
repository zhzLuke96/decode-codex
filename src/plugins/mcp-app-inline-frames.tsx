// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host that renders the set of active MCP app inline frames. With no `mcpAppId`
// it renders a frame for every active app; with one it renders just that app's
// frame if it is currently active.
import { useSignalValue } from "../runtime/app-scope-hooks";
import {
  mcpAppEntriesSignal,
  McpAppInlineFrame,
} from "../boundaries/onboarding-commons-externals.facade";

export interface McpAppInlineFramesProps {
  mcpAppId?: string;
}

export function McpAppInlineFrames(props: McpAppInlineFramesProps = {}) {
  const { mcpAppId } = props;
  const entriesById = useSignalValue<Map<string, unknown>>(mcpAppEntriesSignal);
  const appIds =
    mcpAppId != null
      ? entriesById.has(mcpAppId)
        ? [mcpAppId]
        : []
      : Array.from(entriesById.keys());
  return (
    <>
      {appIds.map((appId) => (
        <McpAppInlineFrame key={appId} mcpAppId={appId} />
      ))}
    </>
  );
}
