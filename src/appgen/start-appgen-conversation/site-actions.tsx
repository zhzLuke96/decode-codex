// Restored from ref/webview/assets/start-appgen-conversation-DsuZNIH_.js
// Sites row and Library card action buttons.

import { useGateValue } from "../../vendor/statsig-current-runtime";
import { useNavigate } from "../../vendor/react-router";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  _appScopeO as useAppScopeContext,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  EditPencilIcon,
  initEditPencilIconChunk,
} from "../../icons/edit-pencil-icon";
import { SettingsGearIcon } from "../../icons/settings-gear-icon";
import { ShareIcon } from "../../icons/share-icon";
import {
  initTrendingTopicsIconChunk,
  TrendingTopicsIcon,
} from "../../icons/trending-topics-icon";
import {
  AppgenShareDialog,
  initAppgenShareDialogChunk,
} from "../../features/appgen-share-dialog";
import {
  getProjectSiteAnalyticsRoute,
  getProjectSiteSettingsRoute,
  initProjectSiteRoutesChunk,
} from "../project-site-routes";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import { Dropdown, DropdownMenu } from "../../ui/dropdown";
import { MoreMenuTrigger } from "../../ui/more-menu-trigger";
import { Tooltip, initTooltipRuntimeChunk } from "../../ui/tooltip-b";
import { openModalControllerModal } from "../../ui/modal-controller-state";
import type { AppgenSiteActionsProps } from "./types";

const APPGEN_SITE_MORE_ACTIONS_GATE = "262557526";

export function AppgenSiteActions({
  onEdit,
  projectId,
  projectTitle,
  surface,
  viewMode,
}: AppgenSiteActionsProps) {
  const intl = useIntl();
  const navigate = useNavigate();
  const appScope = useAppScopeContext(appScopeRoot);
  const showMoreActionsMenu = useGateValue(APPGEN_SITE_MORE_ACTIONS_GATE);
  const openSettings = () => {
    navigate(getProjectSiteSettingsRoute(projectId));
  };
  const openAnalytics = () => {
    navigate(getProjectSiteAnalyticsRoute(projectId));
  };
  const openShareDialog = () => {
    openModalControllerModal(appScope, AppgenShareDialog, {
      projectId,
    });
  };

  const editAction = (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="appgenPage.edit.tooltip"
          defaultMessage="Edit"
          description="Tooltip for starting a new conversation to edit a site"
        />
      }
    >
      <Button
        aria-label={intl.formatMessage(
          {
            id: "appgenPage.edit",
            defaultMessage: "Edit {siteTitle}",
            description:
              "Accessible label for starting a new conversation to edit a site from the sites list",
          },
          {
            siteTitle: projectTitle,
          },
        )}
        color={viewMode === "grid" ? "ghost" : "ghostTertiary"}
        size={viewMode === "grid" ? "toolbar" : "composer"}
        uniform={true}
        onClick={onEdit}
      >
        <EditPencilIcon aria-hidden={true} className="icon-xs" />
      </Button>
    </Tooltip>
  );

  const settingsAction = (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="appgenPage.settings.tooltip"
          defaultMessage="Settings"
          description="Tooltip for opening site settings from the sites list"
        />
      }
    >
      <Button
        aria-label={intl.formatMessage(
          {
            id: "appgenPage.openSettings",
            defaultMessage: "Open settings for {siteTitle}",
            description:
              "Accessible label for opening site settings from the sites list",
          },
          {
            siteTitle: projectTitle,
          },
        )}
        color={viewMode === "grid" ? "ghost" : "ghostTertiary"}
        size={viewMode === "grid" ? "toolbar" : "composer"}
        uniform={true}
        onClick={openSettings}
      >
        <SettingsGearIcon aria-hidden={true} className="icon-xs" />
      </Button>
    </Tooltip>
  );

  const shareAction = (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="appgenPage.share.tooltip"
          defaultMessage="Share"
          description="Tooltip for opening site sharing settings"
        />
      }
    >
      <Button
        aria-label={intl.formatMessage(
          {
            id: "appgenPage.share",
            defaultMessage: "Share {siteTitle}",
            description:
              "Accessible label for opening site sharing settings from the sites list",
          },
          {
            siteTitle: projectTitle,
          },
        )}
        className={
          viewMode === "list"
            ? "[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0"
            : undefined
        }
        color={viewMode === "grid" ? "ghost" : "outline"}
        size="toolbar"
        uniform={viewMode === "grid"}
        onClick={openShareDialog}
      >
        <ShareIcon aria-hidden={true} className="icon-xs" />
        {viewMode === "list" ? (
          <span className="[@container_(max-width:420px)]:hidden">
            <FormattedMessage
              id="appgenPage.share.label"
              defaultMessage="Share"
              description="Button label for opening site sharing settings"
            />
          </span>
        ) : null}
      </Button>
    </Tooltip>
  );

  const secondaryActions = showMoreActionsMenu ? (
    <DropdownMenu
      align="end"
      contentWidth="menu"
      triggerButton={
        <MoreMenuTrigger
          label={intl.formatMessage(
            {
              id: "appgenPage.actions.more",
              defaultMessage: "More actions for {siteTitle}",
              description:
                "Accessible label for opening the actions menu for a site",
            },
            {
              siteTitle: projectTitle,
            },
          )}
        />
      }
    >
      <Dropdown.Item LeftIcon={EditPencilIcon} onSelect={onEdit}>
        <FormattedMessage
          id="appgenPage.edit.label"
          defaultMessage="Edit"
          description="Menu item for starting a new conversation to edit a site"
        />
      </Dropdown.Item>
      <Dropdown.Item LeftIcon={TrendingTopicsIcon} onSelect={openAnalytics}>
        <FormattedMessage
          id="appgenPage.analytics.label"
          defaultMessage="Analytics"
          description="Menu item for opening site analytics"
        />
      </Dropdown.Item>
      <Dropdown.Item LeftIcon={SettingsGearIcon} onSelect={openSettings}>
        <FormattedMessage
          id="appgenPage.settings.label"
          defaultMessage="Settings"
          description="Menu item for opening site settings"
        />
      </Dropdown.Item>
    </DropdownMenu>
  ) : (
    <>
      {surface === "sites" ? editAction : settingsAction}
      {surface === "sites" ? settingsAction : editAction}
    </>
  );

  const actions = (
    <>
      {shareAction}
      {secondaryActions}
    </>
  );

  if (viewMode === "grid") return actions;

  return (
    <div className="pointer-events-auto relative z-10 flex items-center gap-2 pl-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:pl-2">
      {actions}
    </div>
  );
}

export function initAppgenSiteActionsChunk(): void {
  initButtonComponentPrimitives();
  initEditPencilIconChunk();
  initTrendingTopicsIconChunk();
  initProjectSiteRoutesChunk();
  initTooltipRuntimeChunk();
  initAppgenShareDialogChunk();
}
