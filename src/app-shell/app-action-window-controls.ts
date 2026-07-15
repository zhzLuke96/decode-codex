// Restored from ref/webview/assets/register-app-actions-CrtQ5J4S.js
// Window control actions split from the current app action registry.
import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperELowerO,
  currentAppInitialSharedCompatSlotUpperJLowerT,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotUpperRLowerO,
  currentAppInitialSharedCompatSlotUpperSLowerO,
  currentAppInitialSharedCompatSlotUpperTLowerO,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerA,
  currentAppInitialSharedCompatSlotLowerC,
  currentAppInitialSharedCompatSlotLowerGLowerO,
  currentAppInitialSharedCompatSlotLowerJLowerO,
  currentAppInitialSharedCompatSlotLowerSLowerO,
  currentAppInitialSharedCompatSlotLowerSLowerT,
  currentAppInitialSharedCompatSlotLowerTLowerA,
  currentAppInitialSharedCompatSlotLowerULowerO,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotLowerVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotDollarLowerC,
  worktreeNewThreadOrchestratorCompatSlotDollarLowerL,
  worktreeNewThreadOrchestratorCompatSlotDollarLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperBLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperFLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperILowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperILowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperNLowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperPLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperQLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperVLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperXLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperXLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerL,
  worktreeNewThreadOrchestratorCompatSlotLowerALowerD,
  worktreeNewThreadOrchestratorCompatSlotLowerELowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerFLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerHLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerMLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerNLowerU,
  worktreeNewThreadOrchestratorCompatSlotLowerRLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerD,
  worktreeNewThreadOrchestratorCompatSlotLowerTLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerTLowerU,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerF,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerP,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerU,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotDollarLowerO,
  worktreeNewThreadQueryCompatSlotUpperBLowerM,
  worktreeNewThreadQueryCompatSlotUpperGLowerM,
  worktreeNewThreadQueryCompatSlotUpperQLowerO,
  worktreeNewThreadQueryCompatSlotLowerELowerS,
  worktreeNewThreadQueryCompatSlotLowerZLowerM,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appActionMember0033,
  currentAppInitialSharedEdgePixelsReversedFunction,
  currentAppInitialSharedMember0080,
  currentAppInitialSharedMember0098,
  currentAppInitialSharedMember0152,
  currentAppInitialSharedBrowserDiffMcpRuntime,
  currentAppInitialSharedMember0210,
  appServerDisconnectedAppServerSignal,
  currentAppInitialSharedMember0258,
  threadRuntimeRuntime0267,
  currentAppInitialSharedDisplayRuntime,
  currentAppInitialSharedAutoPixelsPagesFunction,
  currentAppInitialSharedMember0343,
  currentAppInitialSharedMember0460,
  currentAppInitialSharedMember0498,
  normalizeLocalImageAttachment,
  currentAppInitialSharedMember0600,
  currentAppInitialSharedMember0627,
  appActionMember0637,
  currentAppInitialSharedMember0691,
  currentAppInitialSharedMember0852,
  currentAppInitialSharedMember0872,
  currentAppInitialSharedPixelsPagesEdgeRuntime,
  flattenTextContentAttachments,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  createWindowAppAction,
  createWindowAppActionRunMap,
  initAppActionHelpersChunk,
  windowsTabsOpenAction,
  initRegisterAppActionsChunk,
} from "./register-app-actions";

function AppActionSetupAlpha(appActionInputCharlieJuliet) {
  if (appActionInputCharlieJuliet.scope == null)
    throw Error(`App action requires a route scope`);
  return appActionInputCharlieJuliet.scope;
}
var AppActionSetupBravo = once(() => {});
var AppActionSetupWhiskey,
  AppActionSetupXray,
  AppActionSetupYankee = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      currentAppInitialSharedCompatSlotUnderscore(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupWhiskey = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(`windows.nav.back`),
        windowId: currentAppInitialSharedMember0600,
      })),
      (AppActionSetupXray = createWindowAppAction({
        schema: AppActionSetupWhiskey,
        run: () => {
          currentAppInitialSharedCompatSlotLowerV.dispatchHostMessage({
            type: `navigate-back`,
          });
        },
      })));
  }),
  appActionLocalZulu,
  AppActionSetupAlphaAlpha,
  appActionLocalAlphaBravo = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      currentAppInitialSharedCompatSlotUnderscore(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalZulu = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(
          `windows.nav.forward`,
        ),
        windowId: currentAppInitialSharedMember0600,
      })),
      (AppActionSetupAlphaAlpha = createWindowAppAction({
        schema: appActionLocalZulu,
        run: () => {
          currentAppInitialSharedCompatSlotLowerV.dispatchHostMessage({
            type: `navigate-forward`,
          });
        },
      })));
  }),
  AppActionSetupAlphaCharlie,
  AppActionSetupAlphaDelta,
  AppActionSetupAlphaEcho = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaCharlie =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.review.collapse_all`,
          ),
          windowId: currentAppInitialSharedMember0600,
        })),
      (AppActionSetupAlphaDelta = createWindowAppAction({
        schema: AppActionSetupAlphaCharlie,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, {
              detail: {
                open: !1,
                scope: `review`,
              },
            }),
          );
        },
      })));
  }),
  AppActionSetupAlphaFoxtrot,
  AppActionSetupAlphaGolf,
  AppActionSetupAlphaHotel = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaFoxtrot =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.review.expand_all`,
          ),
          windowId: currentAppInitialSharedMember0600,
        })),
      (AppActionSetupAlphaGolf = createWindowAppAction({
        schema: AppActionSetupAlphaFoxtrot,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, {
              detail: {
                open: !0,
                scope: `review`,
              },
            }),
          );
        },
      })));
  }),
  AppActionSetupAlphaIndia,
  appActionLocalAlphaJuliet,
  AppActionSetupAlphaKilo = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaIndia = currentAppInitialSharedCompatSlotUpperELowerO(
        {
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.review.file_set_expanded`,
          ),
          windowId: currentAppInitialSharedMember0600,
          path: currentAppInitialSharedCompatSlotLowerJLowerO(),
          expanded: currentAppInitialSharedCompatSlotLowerGLowerO(),
        },
      )),
      (appActionLocalAlphaJuliet = createWindowAppAction({
        schema: AppActionSetupAlphaIndia,
        run: ({
          path: appActionInputEchoYankee,
          expanded: appActionInputEchoZulu,
        }) => {
          let appActionLocalFoxtrotAlpha = currentAppInitialSharedMember0460(
            appActionInputEchoYankee,
          ).querySelector(appActionMember0033.reviewFileToggle);
          if (appActionLocalFoxtrotAlpha == null)
            throw Error(
              `Missing review file toggle: ${appActionInputEchoYankee}`,
            );
          appActionLocalFoxtrotAlpha.dataset.appActionReviewFileExpanded !==
            String(appActionInputEchoZulu) &&
            appActionLocalFoxtrotAlpha.click();
        },
      })));
  }),
  AppActionSetupAlphaLima,
  AppActionSetupAlphaMike,
  AppActionSetupAlphaNovember = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaLima = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(
          `windows.review.scroll`,
        ),
        windowId: currentAppInitialSharedMember0600,
        scroll: currentAppInitialSharedMember0258,
      })),
      (AppActionSetupAlphaMike = createWindowAppAction({
        schema: AppActionSetupAlphaLima,
        run: ({ scroll: appActionInputFoxtrotBravo }) => {
          currentAppInitialSharedAutoPixelsPagesFunction(
            normalizeLocalImageAttachment(appActionMember0033.reviewScroll),
            appActionInputFoxtrotBravo,
          );
        },
      })));
  });
function AppActionSetupAlphaOscar(appActionInputFoxtrotCharlie) {
  switch (appActionInputFoxtrotCharlie) {
    case `top`:
      return `start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `end`;
  }
}
var AppActionSetupAlphaPapa,
  AppActionSetupAlphaQuebec,
  appActionLocalAlphaRomeo = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      worktreeNewThreadOrchestratorCompatSlotUpperYLowerC(),
      AppActionSetupBravo(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaPapa = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(
          `windows.review.scroll_to_file`,
        ),
        windowId: currentAppInitialSharedMember0600,
        path: currentAppInitialSharedCompatSlotLowerJLowerO(),
        align: currentAppInitialSharedCompatSlotLowerULowerO([
          `top`,
          `center`,
          `bottom`,
        ]).optional(),
      })),
      (AppActionSetupAlphaQuebec = createWindowAppAction({
        schema: AppActionSetupAlphaPapa,
        run: (
          {
            path: appActionInputFoxtrotDelta,
            align: appActionInputFoxtrotEcho,
          },
          appActionInputFoxtrotFoxtrot,
        ) => {
          let appActionLocalFoxtrotGolf = currentAppInitialSharedMember0460(
            appActionInputFoxtrotDelta,
          );
          (worktreeNewThreadOrchestratorCompatSlotDollarLowerC(
            AppActionSetupAlpha(appActionInputFoxtrotFoxtrot),
            appActionLocalFoxtrotGolf.dataset.reviewPath ??
              appActionInputFoxtrotDelta,
          ),
            appActionLocalFoxtrotGolf.scrollIntoView({
              block: AppActionSetupAlphaOscar(
                appActionInputFoxtrotEcho ?? `top`,
              ),
              behavior: `auto`,
            }));
        },
      })));
  }),
  AppActionSetupAlphaSierra,
  AppActionSetupAlphaTango,
  AppActionSetupAlphaUniform = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      worktreeNewThreadOrchestratorCompatSlotLowerMLowerM(),
      AppActionSetupBravo(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaSierra =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.review.set_fullscreen`,
          ),
          windowId: currentAppInitialSharedMember0600,
          fullscreen: currentAppInitialSharedCompatSlotLowerGLowerO(),
        })),
      (AppActionSetupAlphaTango = createWindowAppAction({
        schema: AppActionSetupAlphaSierra,
        run: (
          { fullscreen: appActionInputFoxtrotHotel },
          appActionInputFoxtrotIndia,
        ) => {
          AppActionSetupAlpha(appActionInputFoxtrotIndia).set(
            worktreeNewThreadOrchestratorCompatSlotLowerHLowerM,
            appActionInputFoxtrotHotel,
          );
        },
      })));
  }),
  AppActionSetupAlphaVictor,
  AppActionSetupAlphaWhiskey,
  appActionLocalAlphaXray = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      worktreeNewThreadOrchestratorCompatSlotUpperFLowerF(),
      AppActionSetupBravo(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupAlphaVictor =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.review.set_view`,
          ),
          windowId: currentAppInitialSharedMember0600,
          view: currentAppInitialSharedCompatSlotLowerULowerO([
            `turn`,
            `branch`,
            `unstaged`,
            `staged`,
          ]),
        })),
      (AppActionSetupAlphaWhiskey = createWindowAppAction({
        schema: AppActionSetupAlphaVictor,
        run: (
          { view: appActionInputFoxtrotJuliet },
          appActionInputFoxtrotKilo,
        ) => {
          AppActionSetupAlpha(appActionInputFoxtrotKilo).set(
            worktreeNewThreadOrchestratorCompatSlotUpperLLowerF,
            appActionInputFoxtrotJuliet === `turn`
              ? `last-turn`
              : appActionInputFoxtrotJuliet,
          );
        },
      })));
  }),
  appActionLocalAlphaYankee,
  appActionLocalAlphaZulu,
  appActionLocalBravoAlpha = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      currentAppInitialSharedCompatSlotUnderscore(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalAlphaYankee =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.review.toggle`,
          ),
          windowId: currentAppInitialSharedMember0600,
        })),
      (appActionLocalAlphaZulu = createWindowAppAction({
        schema: appActionLocalAlphaYankee,
        run: () => {
          currentAppInitialSharedCompatSlotLowerV.dispatchHostMessage({
            type: `toggle-diff-panel`,
          });
        },
      })));
  }),
  appActionLocalBravoBravo,
  appActionLocalBravoCharlie,
  appActionLocalBravoDelta = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      currentAppInitialSharedCompatSlotUnderscore(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalBravoBravo = currentAppInitialSharedCompatSlotUpperELowerO(
        {
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.show_home`,
          ),
          windowId: currentAppInitialSharedMember0600,
        },
      )),
      (appActionLocalBravoCharlie = createWindowAppAction({
        schema: appActionLocalBravoBravo,
        run: () => {
          currentAppInitialSharedCompatSlotLowerV.dispatchHostMessage({
            type: `new-chat`,
          });
        },
      })));
  });
function appActionLocalBravoEcho(appActionInputFoxtrotLima) {
  let appActionLocalFoxtrotMike = worktreeNewThreadQueryCompatSlotLowerELowerS(
    appActionInputFoxtrotLima,
  );
  return appActionLocalFoxtrotMike == null
    ? currentAppInitialSharedCompatSlotUpperJLowerT(
        currentAppInitialSharedCompatSlotLowerTLowerA(
          appActionInputFoxtrotLima,
        ),
      )
    : worktreeNewThreadQueryCompatSlotUpperQLowerO(
        appActionLocalFoxtrotMike.key,
      );
}
var appActionLocalBravoFoxtrot,
  appActionLocalBravoGolf,
  appActionLocalBravoHotel = once(() => {
    (currentAppInitialSharedCompatSlotUpperO(),
      currentAppInitialSharedCompatSlotLowerSLowerO(),
      currentAppInitialSharedCompatSlotUnderscore(),
      worktreeNewThreadQueryCompatSlotDollarLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalBravoFoxtrot =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.show_thread`,
          ),
          windowId: currentAppInitialSharedMember0600,
          threadId: currentAppInitialSharedCompatSlotLowerJLowerO(),
        })),
      (appActionLocalBravoGolf = createWindowAppAction({
        schema: appActionLocalBravoFoxtrot,
        run: ({ threadId: appActionInputFoxtrotNovember }) => {
          currentAppInitialSharedCompatSlotLowerV.dispatchHostMessage({
            type: `navigate-to-route`,
            path: appActionLocalBravoEcho(appActionInputFoxtrotNovember),
          });
        },
      })));
  }),
  appActionLocalBravoIndia,
  appActionLocalBravoJuliet,
  appActionLocalBravoKilo = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalBravoIndia = currentAppInitialSharedCompatSlotUpperELowerO(
        {
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.sidebar.project_set_collapsed`,
          ),
          windowId: currentAppInitialSharedMember0600,
          project: currentAppInitialSharedMember0343,
          collapsed: currentAppInitialSharedCompatSlotLowerGLowerO(),
        },
      )),
      (appActionLocalBravoJuliet = createWindowAppAction({
        schema: appActionLocalBravoIndia,
        run: ({
          project: appActionInputFoxtrotOscar,
          collapsed: appActionInputFoxtrotPapa,
        }) => {
          let appActionLocalFoxtrotQuebec = currentAppInitialSharedMember0852(
            appActionInputFoxtrotOscar,
          );
          appActionLocalFoxtrotQuebec.dataset
            .appActionSidebarProjectCollapsed !==
            String(appActionInputFoxtrotPapa) &&
            appActionLocalFoxtrotQuebec.click();
        },
      })));
  }),
  appActionLocalBravoLima,
  appActionLocalBravoMike,
  appActionLocalBravoNovember = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalBravoLima = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(
          `windows.sidebar.project_set_show_all`,
        ),
        windowId: currentAppInitialSharedMember0600,
        project: currentAppInitialSharedMember0343,
        showAll: currentAppInitialSharedCompatSlotLowerGLowerO(),
      })),
      (appActionLocalBravoMike = createWindowAppAction({
        schema: appActionLocalBravoLima,
        run: ({
          project: appActionInputFoxtrotRomeo,
          showAll: appActionInputFoxtrotSierra,
        }) => {
          let appActionLocalFoxtrotTango = currentAppInitialSharedMember0852(
            appActionInputFoxtrotRomeo,
          );
          if (
            appActionLocalFoxtrotTango.dataset
              .appActionSidebarProjectCollapsed === `true` &&
            !appActionInputFoxtrotSierra
          )
            return;
          let appActionLocalFoxtrotUniform =
            appActionLocalFoxtrotTango.dataset.appActionSidebarProjectId;
          if (appActionLocalFoxtrotUniform == null)
            throw Error(`Missing sidebar project id`);
          let appActionLocalFoxtrotVictor = normalizeLocalImageAttachment(
            flattenTextContentAttachments(appActionLocalFoxtrotUniform),
          );
          if (
            appActionLocalFoxtrotVictor.dataset
              .appActionSidebarProjectShowAll ===
            String(appActionInputFoxtrotSierra)
          )
            return;
          let appActionLocalFoxtrotWhiskey =
            appActionLocalFoxtrotVictor.querySelector(
              appActionMember0033.sidebarProjectShowAllToggle,
            );
          if (appActionLocalFoxtrotWhiskey == null)
            throw Error(
              `Missing sidebar project show more toggle: ${appActionLocalFoxtrotUniform}`,
            );
          appActionLocalFoxtrotWhiskey.click();
        },
      })));
  }),
  appActionLocalBravoOscar,
  appActionLocalBravoPapa,
  appActionLocalBravoQuebec = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalBravoOscar = currentAppInitialSharedCompatSlotUpperELowerO(
        {
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.sidebar.scroll`,
          ),
          windowId: currentAppInitialSharedMember0600,
          scroll: currentAppInitialSharedMember0258,
        },
      )),
      (appActionLocalBravoPapa = createWindowAppAction({
        schema: appActionLocalBravoOscar,
        run: ({ scroll: appActionInputFoxtrotXray }) => {
          currentAppInitialSharedAutoPixelsPagesFunction(
            normalizeLocalImageAttachment(appActionMember0033.sidebarScroll),
            appActionInputFoxtrotXray,
          );
        },
      })));
  }),
  appActionLocalBravoRomeo,
  appActionLocalBravoSierra,
  AppActionSetupBravoTango = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalBravoRomeo = currentAppInitialSharedCompatSlotUpperELowerO(
        {
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.sidebar.section_set_collapsed`,
          ),
          windowId: currentAppInitialSharedMember0600,
          section: currentAppInitialSharedMember0098,
          collapsed: currentAppInitialSharedCompatSlotLowerGLowerO(),
        },
      )),
      (appActionLocalBravoSierra = createWindowAppAction({
        schema: appActionLocalBravoRomeo,
        run: ({
          section: appActionInputFoxtrotYankee,
          collapsed: appActionInputFoxtrotZulu,
        }) => {
          let appActionLocalGolfAlpha = currentAppInitialSharedMember0498(
            appActionInputFoxtrotYankee,
          );
          if (
            appActionLocalGolfAlpha.dataset.appActionSidebarSectionCollapsed ===
            String(appActionInputFoxtrotZulu)
          )
            return;
          let appActionLocalGolfBravo = appActionLocalGolfAlpha.querySelector(
            appActionMember0033.sidebarSectionToggle,
          );
          if (appActionLocalGolfBravo == null)
            throw Error(`Sidebar section does not have a collapse toggle`);
          appActionLocalGolfBravo.click();
        },
      })));
  }),
  AppActionSetupBravoUniform,
  appActionLocalBravoVictor,
  AppActionSetupBravoWhiskey = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupBravoUniform =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.sidebar.select_project`,
          ),
          windowId: currentAppInitialSharedMember0600,
          project: currentAppInitialSharedMember0343,
        })),
      (appActionLocalBravoVictor = createWindowAppAction({
        schema: AppActionSetupBravoUniform,
        run: ({ project: appActionInputGolfCharlie }) => {
          let appActionLocalGolfDelta = currentAppInitialSharedMember0852(
            appActionInputGolfCharlie,
          ).querySelector(appActionMember0033.sidebarProjectSelect);
          if (appActionLocalGolfDelta == null)
            throw Error(`Missing sidebar project select action`);
          appActionLocalGolfDelta.click();
        },
      })));
  }),
  AppActionSetupBravoXray,
  AppActionSetupBravoYankee,
  AppActionSetupBravoZulu = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      currentAppInitialSharedCompatSlotUnderscore(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupBravoXray = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(
          `windows.sidebar.toggle`,
        ),
        windowId: currentAppInitialSharedMember0600,
      })),
      (AppActionSetupBravoYankee = createWindowAppAction({
        schema: AppActionSetupBravoXray,
        run: () => {
          currentAppInitialSharedCompatSlotLowerV.dispatchHostMessage({
            type: `toggle-sidebar`,
          });
        },
      })));
  }),
  appActionLocalCharlieAlpha,
  AppActionSetupCharlieBravo,
  appActionLocalCharlieCharlie = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      worktreeNewThreadOrchestratorCompatSlotUpperYLowerL(),
      AppActionSetupBravo(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalCharlieAlpha =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.terminal.toggle`,
          ),
          windowId: currentAppInitialSharedMember0600,
        })),
      (AppActionSetupCharlieBravo = createWindowAppAction({
        schema: appActionLocalCharlieAlpha,
        run: (appActionInputGolfEcho, appActionInputGolfFoxtrot) => {
          worktreeNewThreadOrchestratorCompatSlotLowerNLowerU(
            AppActionSetupAlpha(appActionInputGolfFoxtrot),
          );
        },
      })));
  }),
  AppActionSetupCharlieDelta,
  AppActionSetupCharlieEcho,
  AppActionSetupCharlieFoxtrot = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupCharlieDelta =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.timeline.scroll`,
          ),
          windowId: currentAppInitialSharedMember0600,
          scroll: currentAppInitialSharedMember0258,
        })),
      (AppActionSetupCharlieEcho = createWindowAppAction({
        schema: AppActionSetupCharlieDelta,
        run: ({ scroll: appActionInputGolfGolf }) => {
          currentAppInitialSharedEdgePixelsReversedFunction(
            normalizeLocalImageAttachment(appActionMember0033.timelineScroll),
            appActionInputGolfGolf,
          );
        },
      })));
  }),
  AppActionSetupCharlieGolf,
  AppActionSetupCharlieHotel,
  AppActionSetupCharlieIndia = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (AppActionSetupCharlieGolf =
        currentAppInitialSharedCompatSlotUpperELowerO({
          type: currentAppInitialSharedCompatSlotUpperSLowerO(
            `windows.timeline.scroll_to_turn`,
          ),
          windowId: currentAppInitialSharedMember0600,
          direction: currentAppInitialSharedMember0080,
        })),
      (AppActionSetupCharlieHotel = createWindowAppAction({
        schema: AppActionSetupCharlieGolf,
        run: ({ direction: appActionInputGolfHotel }) => {
          currentAppInitialSharedMember0872(
            normalizeLocalImageAttachment(appActionMember0033.timelineScroll),
            appActionInputGolfHotel,
          );
        },
      })));
  });

export function createWindowControlAppActions() {
  AppActionSetupYankee();
  appActionLocalAlphaBravo();
  AppActionSetupAlphaEcho();
  AppActionSetupAlphaHotel();
  AppActionSetupAlphaKilo();
  AppActionSetupAlphaNovember();
  appActionLocalAlphaRomeo();
  AppActionSetupAlphaUniform();
  appActionLocalAlphaXray();
  appActionLocalBravoAlpha();
  appActionLocalBravoDelta();
  appActionLocalBravoHotel();
  appActionLocalBravoKilo();
  appActionLocalBravoNovember();
  appActionLocalBravoQuebec();
  AppActionSetupBravoTango();
  AppActionSetupBravoWhiskey();
  AppActionSetupBravoZulu();
  initRegisterAppActionsChunk();
  appActionLocalCharlieCharlie();
  AppActionSetupCharlieFoxtrot();
  AppActionSetupCharlieIndia();
  return [
    AppActionSetupXray,
    AppActionSetupAlphaAlpha,
    AppActionSetupAlphaDelta,
    AppActionSetupAlphaGolf,
    appActionLocalAlphaJuliet,
    AppActionSetupAlphaMike,
    AppActionSetupAlphaQuebec,
    AppActionSetupAlphaTango,
    AppActionSetupAlphaWhiskey,
    appActionLocalAlphaZulu,
    appActionLocalBravoCharlie,
    appActionLocalBravoGolf,
    appActionLocalBravoJuliet,
    appActionLocalBravoMike,
    appActionLocalBravoPapa,
    appActionLocalBravoSierra,
    appActionLocalBravoVictor,
    AppActionSetupBravoYankee,
    AppActionSetupCharlieBravo,
    windowsTabsOpenAction,
    AppActionSetupCharlieEcho,
    AppActionSetupCharlieHotel,
  ];
}
