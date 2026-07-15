import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Cy as t,
  GO as n,
  Oy as r,
  WO as i,
  mY as a,
  pY as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s(e, r) {
  let { artifact: i, prompt: a } = l[r];
  return e.formatMessage(a, { artifact: n(`@${i.label}`, t(i.pluginId)) });
}
var c,
  l,
  u = e(() => {
    (a(),
      r(),
      i(),
      (c = o({
        document: {
          id: `home.newChatPageSuggestions.createDocument.prompt.v5`,
          defaultMessage: `Create a new document with {artifact}. Start by asking me what it should be about.`,
          description: `Composer prefill for creating a document`,
        },
        presentation: {
          id: `home.newChatPageSuggestions.createPresentation.prompt.v5`,
          defaultMessage: `Create a new presentation with {artifact}. Start by asking me what it should be about.`,
          description: `Composer prefill for creating a presentation`,
        },
        site: {
          id: `home.newChatPageSuggestions.createSite.prompt.v5`,
          defaultMessage: `Create a new site with {artifact}. Start by asking me what it should be about.`,
          description: `Composer prefill for creating a site`,
        },
        spreadsheet: {
          id: `home.newChatPageSuggestions.createSpreadsheet.prompt.v5`,
          defaultMessage: `Create a new spreadsheet with {artifact}. Start by asking me what it should be about.`,
          description: `Composer prefill for creating a spreadsheet`,
        },
      })),
      (l = {
        document: {
          artifact: {
            label: `Documents`,
            pluginId: `documents@openai-primary-runtime`,
          },
          prompt: c.document,
        },
        presentation: {
          artifact: {
            label: `Presentations`,
            pluginId: `presentations@openai-primary-runtime`,
          },
          prompt: c.presentation,
        },
        site: {
          artifact: { label: `Sites`, pluginId: `sites@openai-bundled` },
          prompt: c.site,
        },
        spreadsheet: {
          artifact: {
            label: `Spreadsheets`,
            pluginId: `spreadsheets@openai-primary-runtime`,
          },
          prompt: c.spreadsheet,
        },
      }));
  });
export { s as n, u as r, l as t };
//# sourceMappingURL=artifact-creation-prompts-BlnfvfJp.js.map
