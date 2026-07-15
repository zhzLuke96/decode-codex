// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";
import { connectionsSearchMessagesPart1 } from "./connections/part-1";
import { connectionsSearchMessagesPart2 } from "./connections/part-2";
import { connectionsSearchMessagesPart3 } from "./connections/part-3";
import { connectionsSearchMessagesPart4 } from "./connections/part-4";

export const connectionsSearchMessages = [
  ...connectionsSearchMessagesPart1,
  ...connectionsSearchMessagesPart2,
  ...connectionsSearchMessagesPart3,
  ...connectionsSearchMessagesPart4,
] satisfies readonly SettingsSearchMessageDescriptor[];
