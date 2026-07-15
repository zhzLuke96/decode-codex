// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Current app-main initializer for the handoff_thread dynamic tool surface.
import { getAvailableHandoffHosts } from "./available-handoff-hosts";
import {
  buildGetHandoffStatusToolDefinition,
  buildHandoffThreadToolDefinition,
} from "./thread-handoff-tool-definitions";
import {
  getHandoffStatusParamsSchema,
  handoffThreadParamsSchema,
  handleGetHandoffStatus,
  handleHandoffThread,
} from "./handoff-thread-tool-handlers";

export function initThreadHandoffToolRuntimeChunk(): void {
  void getAvailableHandoffHosts;
  void buildGetHandoffStatusToolDefinition;
  void buildHandoffThreadToolDefinition;
  void getHandoffStatusParamsSchema;
  void handoffThreadParamsSchema;
  void handleGetHandoffStatus;
  void handleHandoffThread;
}
