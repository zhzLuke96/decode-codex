// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";
import { generalSettingsSearchMessagesPart1 } from "./general-settings/part-1";
import { generalSettingsSearchMessagesPart2 } from "./general-settings/part-2";
import { generalSettingsSearchMessagesPart3 } from "./general-settings/part-3";
import { generalSettingsSearchMessagesPart4 } from "./general-settings/part-4";

export const generalSettingsSearchMessages = [
  ...generalSettingsSearchMessagesPart1,
  ...generalSettingsSearchMessagesPart2,
  ...generalSettingsSearchMessagesPart3,
  ...generalSettingsSearchMessagesPart4,
] satisfies readonly SettingsSearchMessageDescriptor[];
