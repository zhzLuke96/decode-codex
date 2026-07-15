// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";
import { usageSearchMessagesPart1 } from "./usage/part-1";
import { usageSearchMessagesPart2 } from "./usage/part-2";
import { usageSearchMessagesPart3 } from "./usage/part-3";
import { usageSearchMessagesPart4 } from "./usage/part-4";

export const usageSearchMessages = [
  ...usageSearchMessagesPart1,
  ...usageSearchMessagesPart2,
  ...usageSearchMessagesPart3,
  ...usageSearchMessagesPart4,
] satisfies readonly SettingsSearchMessageDescriptor[];
