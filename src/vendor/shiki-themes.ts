// Restored from ref/webview/assets/ayu-dark-C-RFidiT.js
// Also covers current Shiki theme chunks in ref/webview/assets.
// Shiki bundled theme data is kept as npm leaf imports instead of copying JSON dumps.
import andromeedaTheme from "@shikijs/themes/andromeeda";
import auroraXTheme from "@shikijs/themes/aurora-x";
import ayuDarkTheme from "@shikijs/themes/ayu-dark";
import ayuLightTheme from "@shikijs/themes/ayu-light";
import ayuMirageTheme from "@shikijs/themes/ayu-mirage";
import catppuccinFrappeTheme from "@shikijs/themes/catppuccin-frappe";
import catppuccinLatteTheme from "@shikijs/themes/catppuccin-latte";
import catppuccinMacchiatoTheme from "@shikijs/themes/catppuccin-macchiato";
import catppuccinMochaTheme from "@shikijs/themes/catppuccin-mocha";
import darkPlusTheme from "@shikijs/themes/dark-plus";
import draculaSoftTheme from "@shikijs/themes/dracula-soft";
import draculaTheme from "@shikijs/themes/dracula";
import everforestDarkTheme from "@shikijs/themes/everforest-dark";
import everforestLightTheme from "@shikijs/themes/everforest-light";
import githubDarkDimmedTheme from "@shikijs/themes/github-dark-dimmed";
import githubDarkHighContrastTheme from "@shikijs/themes/github-dark-high-contrast";
import githubDarkTheme from "@shikijs/themes/github-dark";
import githubDarkDefaultTheme from "@shikijs/themes/github-dark-default";
import githubLightHighContrastTheme from "@shikijs/themes/github-light-high-contrast";
import githubLightTheme from "@shikijs/themes/github-light";
import githubLightDefaultTheme from "@shikijs/themes/github-light-default";
import gruvboxDarkHardTheme from "@shikijs/themes/gruvbox-dark-hard";
import gruvboxDarkMediumTheme from "@shikijs/themes/gruvbox-dark-medium";
import gruvboxDarkSoftTheme from "@shikijs/themes/gruvbox-dark-soft";
import gruvboxLightHardTheme from "@shikijs/themes/gruvbox-light-hard";
import gruvboxLightMediumTheme from "@shikijs/themes/gruvbox-light-medium";
import gruvboxLightSoftTheme from "@shikijs/themes/gruvbox-light-soft";
import horizonBrightTheme from "@shikijs/themes/horizon-bright";
import horizonTheme from "@shikijs/themes/horizon";
import houstonTheme from "@shikijs/themes/houston";
import kanagawaDragonTheme from "@shikijs/themes/kanagawa-dragon";
import kanagawaLotusTheme from "@shikijs/themes/kanagawa-lotus";
import kanagawaWaveTheme from "@shikijs/themes/kanagawa-wave";
import laserwaveTheme from "@shikijs/themes/laserwave";
import lightPlusTheme from "@shikijs/themes/light-plus";
import materialThemeTheme from "@shikijs/themes/material-theme";
import materialThemeDarkerTheme from "@shikijs/themes/material-theme-darker";
import materialThemeLighterTheme from "@shikijs/themes/material-theme-lighter";
import materialThemeOceanTheme from "@shikijs/themes/material-theme-ocean";
import materialThemePalenightTheme from "@shikijs/themes/material-theme-palenight";
import minDarkTheme from "@shikijs/themes/min-dark";
import minLightTheme from "@shikijs/themes/min-light";
import monokaiTheme from "@shikijs/themes/monokai";
import nightOwlTheme from "@shikijs/themes/night-owl";
import nightOwlLightTheme from "@shikijs/themes/night-owl-light";
import nordTheme from "@shikijs/themes/nord";
import oneDarkProTheme from "@shikijs/themes/one-dark-pro";
import oneLightTheme from "@shikijs/themes/one-light";
import oscurangeTheme from "@shikijs/themes/oscurange";
import plasticTheme from "@shikijs/themes/plastic";
import poimandresTheme from "@shikijs/themes/poimandres";
import raycastDarkTheme from "@shikijs/themes/raycast-dark";
import raycastLightTheme from "@shikijs/themes/raycast-light";
import redTheme from "@shikijs/themes/red";
import rosePineTheme from "@shikijs/themes/rose-pine";
import rosePineDawnTheme from "@shikijs/themes/rose-pine-dawn";
import rosePineMoonTheme from "@shikijs/themes/rose-pine-moon";
import slackDarkTheme from "@shikijs/themes/slack-dark";
import slackOchinTheme from "@shikijs/themes/slack-ochin";
import snazzyLightTheme from "@shikijs/themes/snazzy-light";
import solarizedDarkTheme from "@shikijs/themes/solarized-dark";
import solarizedLightTheme from "@shikijs/themes/solarized-light";
import synthwave84Theme from "@shikijs/themes/synthwave-84";
import tokyoNightTheme from "@shikijs/themes/tokyo-night";
import vesperTheme from "@shikijs/themes/vesper";
import vitesseBlackTheme from "@shikijs/themes/vitesse-black";
import vitesseDarkTheme from "@shikijs/themes/vitesse-dark";
import vitesseLightTheme from "@shikijs/themes/vitesse-light";
import xcodeDarkTheme from "@shikijs/themes/xcode-dark";
import xcodeLightTheme from "@shikijs/themes/xcode-light";

type ThemeData = Record<string, unknown>;

const oscurangeThemeData = oscurangeTheme as ThemeData;
const oscurangeSchema = oscurangeThemeData.$schema;
const oscurangeColors = oscurangeThemeData.colors;
const oscurangeDisplayName = oscurangeThemeData.displayName;
const oscurangeName = oscurangeThemeData.name;
const oscurangeTokenColors = oscurangeThemeData.tokenColors;
const oscurangeType = oscurangeThemeData.type;

const raycastDarkThemeData = raycastDarkTheme as ThemeData;
const raycastDarkChromeTheme = raycastDarkThemeData.chromeTheme;
const raycastDarkColors = raycastDarkThemeData.colors;
const raycastDarkName = raycastDarkThemeData.name;
const raycastDarkTokenColors = raycastDarkThemeData.tokenColors;
const raycastDarkType = raycastDarkThemeData.type;

const raycastLightThemeData = raycastLightTheme as ThemeData;
const raycastLightChromeTheme = raycastLightThemeData.chromeTheme;
const raycastLightColors = raycastLightThemeData.colors;
const raycastLightName = raycastLightThemeData.name;
const raycastLightTokenColors = raycastLightThemeData.tokenColors;
const raycastLightType = raycastLightThemeData.type;

const xcodeDarkThemeData = xcodeDarkTheme as ThemeData;
const xcodeDarkChromeTheme = xcodeDarkThemeData.chromeTheme;
const xcodeDarkColors = xcodeDarkThemeData.colors;
const xcodeDarkName = xcodeDarkThemeData.name;
const xcodeDarkTokenColors = xcodeDarkThemeData.tokenColors;
const xcodeDarkType = xcodeDarkThemeData.type;

const xcodeLightThemeData = xcodeLightTheme as ThemeData;
const xcodeLightChromeTheme = xcodeLightThemeData.chromeTheme;
const xcodeLightColors = xcodeLightThemeData.colors;
const xcodeLightName = xcodeLightThemeData.name;
const xcodeLightTokenColors = xcodeLightThemeData.tokenColors;
const xcodeLightType = xcodeLightThemeData.type;

export {
  codexDarkColors,
  codexDarkName,
  codexDarkSemanticTokenColors,
  codexDarkTheme,
  codexDarkTokenColors,
  codexDarkType,
  codexLightColors,
  codexLightName,
  codexLightSemanticTokenColors,
  codexLightTheme,
  codexLightTokenColors,
  codexLightType,
} from "./codex-shiki-themes";

export {
  andromeedaTheme,
  auroraXTheme,
  ayuDarkTheme,
  ayuLightTheme,
  ayuMirageTheme,
  catppuccinFrappeTheme,
  catppuccinLatteTheme,
  catppuccinMacchiatoTheme,
  catppuccinMochaTheme,
  darkPlusTheme,
  draculaSoftTheme,
  draculaTheme,
  everforestDarkTheme,
  everforestLightTheme,
  githubDarkDimmedTheme,
  githubDarkHighContrastTheme,
  githubDarkTheme,
  githubDarkDefaultTheme,
  githubLightHighContrastTheme,
  githubLightTheme,
  githubLightDefaultTheme,
  gruvboxDarkHardTheme,
  gruvboxDarkMediumTheme,
  gruvboxDarkSoftTheme,
  gruvboxLightHardTheme,
  gruvboxLightMediumTheme,
  gruvboxLightSoftTheme,
  horizonBrightTheme,
  horizonTheme,
  houstonTheme,
  kanagawaDragonTheme,
  kanagawaLotusTheme,
  kanagawaWaveTheme,
  laserwaveTheme,
  lightPlusTheme,
  materialThemeTheme,
  materialThemeDarkerTheme,
  materialThemeLighterTheme,
  materialThemeOceanTheme,
  materialThemePalenightTheme,
  minDarkTheme,
  minLightTheme,
  monokaiTheme,
  nightOwlTheme,
  nightOwlLightTheme,
  nordTheme,
  oscurangeColors,
  oscurangeDisplayName,
  oscurangeName,
  oscurangeSchema,
  oscurangeTheme,
  oscurangeTokenColors,
  oscurangeType,
  oneDarkProTheme,
  oneLightTheme,
  plasticTheme,
  poimandresTheme,
  raycastDarkChromeTheme,
  raycastDarkColors,
  raycastDarkName,
  raycastDarkTheme,
  raycastDarkTokenColors,
  raycastDarkType,
  raycastLightChromeTheme,
  raycastLightColors,
  raycastLightName,
  raycastLightTheme,
  raycastLightTokenColors,
  raycastLightType,
  redTheme,
  rosePineTheme,
  rosePineDawnTheme,
  rosePineMoonTheme,
  slackDarkTheme,
  slackOchinTheme,
  snazzyLightTheme,
  solarizedDarkTheme,
  solarizedLightTheme,
  synthwave84Theme,
  tokyoNightTheme,
  vesperTheme,
  vitesseBlackTheme,
  vitesseDarkTheme,
  vitesseLightTheme,
  xcodeDarkChromeTheme,
  xcodeDarkColors,
  xcodeDarkName,
  xcodeDarkTheme,
  xcodeDarkTokenColors,
  xcodeDarkType,
  xcodeLightChromeTheme,
  xcodeLightColors,
  xcodeLightName,
  xcodeLightTheme,
  xcodeLightTokenColors,
  xcodeLightType,
};
