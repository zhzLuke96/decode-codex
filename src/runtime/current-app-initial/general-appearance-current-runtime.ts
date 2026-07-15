// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js
// Current-ref compatibility surface backed by semantic general-appearance modules.
import {
  ExternalAgentConfigImportSettings,
  initExternalAgentConfigImportSettingsChunk,
} from "../../settings/general-appearance-runtime/external-agent-config-import-settings";
import {
  initExternalAgentConfigPathRuntimeChunk,
  joinImportedAgentConfigPath,
} from "../../settings/general-appearance-runtime/external-agent-paths";
import { ExternalAgentImportProgressDialog } from "../../settings/general-appearance-runtime/external-agent-progress-dialog";
import {
  generalSettingsMessages,
  initGeneralSettingsMessagesChunk,
} from "../../settings/general-appearance-runtime/messages";
import {
  initRendererDebugSettingsChunk,
  initWslRemoteConnectionImportRuntimeChunk,
  isWslRemoteConnectionImportEnabled,
  rendererDebugSettingsSignal,
  setRendererDebugSetting,
} from "../../settings/general-appearance-runtime/renderer-debug-settings";
import {
  initThemeEditorRuntimeChunk,
  useThemeEditor,
} from "../../settings/general-appearance-runtime/theme-editor";
import {
  initMoonIconChunk,
  initThemePreviewGlyphChunk,
  MoonIcon,
  ThemePreviewGlyph,
} from "../../settings/general-appearance-runtime/theme-glyphs";
import {
  ChatGptAgentBrandIcon,
  CODEX_APP_GA_LOGO_URL,
  createDefaultExternalAgentImportSelection,
  createExternalAgentImportSelectionEventPayload,
  detectExternalAgentImportItems,
  EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME,
  ExternalAgentIcon,
  ExternalAgentImportBrandIcon,
  ExternalAgentImportHero,
  ExternalAgentImportItemsStep,
  ExternalAgentImportProviderStep,
  ExternalAgentImportScrollableList,
  ExternalAgentImportSelectableRow,
  filterNonSessionImportItems,
  formatExternalAgentImportItemLabel,
  hasImportableExternalAgentConfig,
  importExternalAgentItems,
  initChatGptAgentBrandIconChunk,
  initExternalAgentIconChunk,
  initExternalAgentImportBrandIconChunk,
  initExternalAgentImportDetectionRuntimeChunk,
  initExternalAgentImportDialogChunk,
  initExternalAgentImportHeroChunk,
  initExternalAgentImportItemLabelsChunk,
  initExternalAgentImportItemsStepChunk,
  initExternalAgentImportLogoAssetChunk,
  initExternalAgentImportProviderSelectionChunk,
  initExternalAgentImportProviderStepChunk,
  initExternalAgentImportScrollableListChunk,
  initExternalAgentImportSelectableRowChunk,
  invalidateExternalAgentImportQueries,
  OnboardingImportLayout,
  sortExternalAgentImportItems,
  useExternalAgentImportDetection,
} from "../../settings/external-agent-import-runtime";
import {
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  initExternalAgentImportSettingsFeatureChunk,
} from "../../settings/import-settings-feature";
import {
  ScrollToBottomButton,
  initScrollToBottomButtonChunk,
} from "../../threads/scroll-to-bottom-button";
import {
  SettingsGroup,
  initSettingsGroupChunk,
} from "../../utils/settings-group";
import {
  SettingsSurface,
  initSettingsSurfaceChunk,
} from "../../utils/settings-surface";

export function initExternalAgentImportQueryRuntimeChunk(): void {}

export {
  ChatGptAgentBrandIcon,
  CODEX_APP_GA_LOGO_URL,
  createDefaultExternalAgentImportSelection,
  createExternalAgentImportSelectionEventPayload,
  detectExternalAgentImportItems,
  EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME,
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  ExternalAgentConfigImportSettings,
  ExternalAgentIcon,
  ExternalAgentImportBrandIcon,
  ExternalAgentImportHero,
  ExternalAgentImportItemsStep,
  ExternalAgentImportProgressDialog,
  ExternalAgentImportProviderStep,
  ExternalAgentImportScrollableList,
  ExternalAgentImportSelectableRow,
  filterNonSessionImportItems,
  formatExternalAgentImportItemLabel,
  generalSettingsMessages,
  hasImportableExternalAgentConfig,
  importExternalAgentItems,
  initChatGptAgentBrandIconChunk,
  initExternalAgentConfigImportSettingsChunk,
  initExternalAgentConfigPathRuntimeChunk,
  initExternalAgentIconChunk,
  initExternalAgentImportBrandIconChunk,
  initExternalAgentImportDetectionRuntimeChunk,
  initExternalAgentImportHeroChunk,
  initExternalAgentImportItemLabelsChunk,
  initExternalAgentImportItemsStepChunk,
  initExternalAgentImportLogoAssetChunk,
  initExternalAgentImportProviderSelectionChunk,
  initExternalAgentImportProviderStepChunk,
  initExternalAgentImportScrollableListChunk,
  initExternalAgentImportSelectableRowChunk,
  initExternalAgentImportSettingsFeatureChunk,
  initGeneralSettingsMessagesChunk,
  initMoonIconChunk,
  initRendererDebugSettingsChunk,
  initSettingsGroupChunk,
  initSettingsSurfaceChunk,
  initThemeEditorRuntimeChunk,
  initThemePreviewGlyphChunk,
  initWslRemoteConnectionImportRuntimeChunk,
  invalidateExternalAgentImportQueries,
  isWslRemoteConnectionImportEnabled,
  joinImportedAgentConfigPath,
  MoonIcon,
  OnboardingImportLayout,
  rendererDebugSettingsSignal,
  ScrollToBottomButton,
  setRendererDebugSetting,
  SettingsGroup,
  SettingsSurface,
  sortExternalAgentImportItems,
  ThemePreviewGlyph,
  useExternalAgentImportDetection,
  useThemeEditor,
};

const generalAppearanceCurrentCompatSlotDollar = MoonIcon;
const generalAppearanceCurrentCompatSlotUpperA = ExternalAgentImportHero;
const generalAppearanceCurrentCompatSlotUpperB =
  initExternalAgentImportLogoAssetChunk;
const generalAppearanceCurrentCompatSlotUpperC =
  invalidateExternalAgentImportQueries;
const generalAppearanceCurrentCompatSlotUpperD =
  EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME;
const generalAppearanceCurrentCompatSlotUpperE =
  initExternalAgentImportProviderSelectionChunk;
const generalAppearanceCurrentCompatSlotUpperF = ExternalAgentImportBrandIcon;
const generalAppearanceCurrentCompatSlotUpperG =
  initExternalAgentImportProviderSelectionChunk;
const generalAppearanceCurrentCompatSlotUpperH =
  initExternalAgentImportItemLabelsChunk;
const generalAppearanceCurrentCompatSlotUpperI =
  initExternalAgentImportBrandIconChunk;
const generalAppearanceCurrentCompatSlotUpperJ = initSettingsSurfaceChunk;
const generalAppearanceCurrentCompatSlotUpperK = sortExternalAgentImportItems;
const generalAppearanceCurrentCompatSlotUpperL = ChatGptAgentBrandIcon;
const generalAppearanceCurrentCompatSlotUpperM =
  initExternalAgentImportHeroChunk;
const generalAppearanceCurrentCompatSlotUpperN =
  ExternalAgentImportProviderStep;
const generalAppearanceCurrentCompatSlotUpperO =
  ExternalAgentImportScrollableList;
const generalAppearanceCurrentCompatSlotUpperP =
  initExternalAgentImportProviderStepChunk;
const generalAppearanceCurrentCompatSlotUpperQ = useThemeEditor;
const generalAppearanceCurrentCompatSlotUpperR = initChatGptAgentBrandIconChunk;
const generalAppearanceCurrentCompatSlotUpperS =
  initExternalAgentImportQueryRuntimeChunk;
const generalAppearanceCurrentCompatSlotUpperT = importExternalAgentItems;
const generalAppearanceCurrentCompatSlotUpperU =
  formatExternalAgentImportItemLabel;
const generalAppearanceCurrentCompatSlotUpperV = ScrollToBottomButton;
const generalAppearanceCurrentCompatSlotUpperW = filterNonSessionImportItems;
const generalAppearanceCurrentCompatSlotUpperX = initThemePreviewGlyphChunk;
const generalAppearanceCurrentCompatSlotUpperY = ThemePreviewGlyph;
const generalAppearanceCurrentCompatSlotUpperZ = initThemeEditorRuntimeChunk;
const generalAppearanceCurrentCompatSlotUnderscore =
  createDefaultExternalAgentImportSelection;
const generalAppearanceCurrentCompatSlotLowerA =
  isWslRemoteConnectionImportEnabled;
const generalAppearanceCurrentCompatSlotLowerB =
  initExternalAgentImportDetectionRuntimeChunk;
const generalAppearanceCurrentCompatSlotLowerC =
  initExternalAgentConfigImportSettingsChunk;
const generalAppearanceCurrentCompatSlotLowerD = SettingsGroup;
const generalAppearanceCurrentCompatSlotLowerELowerT = initMoonIconChunk;
const generalAppearanceCurrentCompatSlotLowerF = initSettingsGroupChunk;
const generalAppearanceCurrentCompatSlotLowerG =
  initExternalAgentImportSelectableRowChunk;
const generalAppearanceCurrentCompatSlotLowerH = ExternalAgentImportItemsStep;
const generalAppearanceCurrentCompatSlotLowerI =
  initWslRemoteConnectionImportRuntimeChunk;
const generalAppearanceCurrentCompatSlotLowerILowerT =
  initExternalAgentImportSettingsFeatureChunk;
const generalAppearanceCurrentCompatSlotLowerJ = OnboardingImportLayout;
const generalAppearanceCurrentCompatSlotLowerK =
  ExternalAgentImportSelectableRow;
const generalAppearanceCurrentCompatSlotLowerL =
  initExternalAgentConfigPathRuntimeChunk;
const generalAppearanceCurrentCompatSlotLowerM =
  initGeneralSettingsMessagesChunk;
const generalAppearanceCurrentCompatSlotLowerN = initRendererDebugSettingsChunk;
const generalAppearanceCurrentCompatSlotLowerNLowerT =
  initExternalAgentIconChunk;
const generalAppearanceCurrentCompatSlotLowerO =
  ExternalAgentImportProgressDialog;
const generalAppearanceCurrentCompatSlotLowerP = generalSettingsMessages;
const generalAppearanceCurrentCompatSlotLowerQ = SettingsSurface;
const generalAppearanceCurrentCompatSlotLowerR = setRendererDebugSetting;
const generalAppearanceCurrentCompatSlotLowerRLowerT =
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID;
const generalAppearanceCurrentCompatSlotLowerS =
  ExternalAgentConfigImportSettings;
const generalAppearanceCurrentCompatSlotLowerT = rendererDebugSettingsSignal;
const generalAppearanceCurrentCompatSlotLowerTLowerT = ExternalAgentIcon;
const generalAppearanceCurrentCompatSlotLowerU = joinImportedAgentConfigPath;
const generalAppearanceCurrentCompatSlotLowerV =
  createExternalAgentImportSelectionEventPayload;
const generalAppearanceCurrentCompatSlotLowerW = detectExternalAgentImportItems;
const generalAppearanceCurrentCompatSlotLowerX =
  useExternalAgentImportDetection;
const generalAppearanceCurrentCompatSlotLowerY =
  hasImportableExternalAgentConfig;
const generalAppearanceCurrentCompatSlotLowerZ = CODEX_APP_GA_LOGO_URL;

export {
  generalAppearanceCurrentCompatSlotDollar,
  generalAppearanceCurrentCompatSlotLowerA,
  generalAppearanceCurrentCompatSlotLowerB,
  generalAppearanceCurrentCompatSlotLowerC,
  generalAppearanceCurrentCompatSlotLowerD,
  generalAppearanceCurrentCompatSlotLowerELowerT,
  generalAppearanceCurrentCompatSlotLowerF,
  generalAppearanceCurrentCompatSlotLowerG,
  generalAppearanceCurrentCompatSlotLowerH,
  generalAppearanceCurrentCompatSlotLowerI,
  generalAppearanceCurrentCompatSlotLowerILowerT,
  generalAppearanceCurrentCompatSlotLowerJ,
  generalAppearanceCurrentCompatSlotLowerK,
  generalAppearanceCurrentCompatSlotLowerL,
  generalAppearanceCurrentCompatSlotLowerM,
  generalAppearanceCurrentCompatSlotLowerN,
  generalAppearanceCurrentCompatSlotLowerNLowerT,
  generalAppearanceCurrentCompatSlotLowerO,
  generalAppearanceCurrentCompatSlotLowerP,
  generalAppearanceCurrentCompatSlotLowerQ,
  generalAppearanceCurrentCompatSlotLowerR,
  generalAppearanceCurrentCompatSlotLowerRLowerT,
  generalAppearanceCurrentCompatSlotLowerS,
  generalAppearanceCurrentCompatSlotLowerT,
  generalAppearanceCurrentCompatSlotLowerTLowerT,
  generalAppearanceCurrentCompatSlotLowerU,
  generalAppearanceCurrentCompatSlotLowerV,
  generalAppearanceCurrentCompatSlotLowerW,
  generalAppearanceCurrentCompatSlotLowerX,
  generalAppearanceCurrentCompatSlotLowerY,
  generalAppearanceCurrentCompatSlotLowerZ,
  generalAppearanceCurrentCompatSlotUnderscore,
  generalAppearanceCurrentCompatSlotUpperA,
  generalAppearanceCurrentCompatSlotUpperB,
  generalAppearanceCurrentCompatSlotUpperC,
  generalAppearanceCurrentCompatSlotUpperD,
  generalAppearanceCurrentCompatSlotUpperE,
  generalAppearanceCurrentCompatSlotUpperF,
  generalAppearanceCurrentCompatSlotUpperG,
  generalAppearanceCurrentCompatSlotUpperH,
  generalAppearanceCurrentCompatSlotUpperI,
  generalAppearanceCurrentCompatSlotUpperJ,
  generalAppearanceCurrentCompatSlotUpperK,
  generalAppearanceCurrentCompatSlotUpperL,
  generalAppearanceCurrentCompatSlotUpperM,
  generalAppearanceCurrentCompatSlotUpperN,
  generalAppearanceCurrentCompatSlotUpperO,
  generalAppearanceCurrentCompatSlotUpperP,
  generalAppearanceCurrentCompatSlotUpperQ,
  generalAppearanceCurrentCompatSlotUpperR,
  generalAppearanceCurrentCompatSlotUpperS,
  generalAppearanceCurrentCompatSlotUpperT,
  generalAppearanceCurrentCompatSlotUpperU,
  generalAppearanceCurrentCompatSlotUpperV,
  generalAppearanceCurrentCompatSlotUpperW,
  generalAppearanceCurrentCompatSlotUpperX,
  generalAppearanceCurrentCompatSlotUpperY,
  generalAppearanceCurrentCompatSlotUpperZ,
};
