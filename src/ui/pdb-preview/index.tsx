// Restored from ref/webview/assets/preview-DvaTfwxN.js
// preview-DvaTfwxN chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { Button } from "../button";
import { Dropdown, DropdownMenu } from "../dropdown";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { ChevronIcon } from "../../icons/chevron-icon";
import { _vscodeApiO as useVscodeQueryRaw } from "../../boundaries/vscode-api";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  RichPreviewBody,
  RichPreviewLoading,
} from "../rich-preview-primitives";
import { useResizeObserverRef } from "../../utils/use-resize-observer";
import { parsePdbContents } from "./parser";
import { LegendSwatch, PdbPreviewShell } from "./preview-shell";
import { PdbSequenceStrip } from "./sequence-strip";
import type {
  PdbPreviewFromFileProps,
  PdbPreviewProps,
  PdbResidueChain,
  ResidueSelectionRange,
  ThreeDMolModule,
  ThreeDMolViewer,
  VscodeQueryOptions,
  VscodeQueryResult,
  VscodeReadFileResult,
} from "./types";
import {
  applyPdbViewerStyle,
  buildResidueSelection,
  clearPdbViewer,
  formatPdbScore,
  getResiduesInRange,
  resolveThreeDMolCreateViewer,
} from "./viewer";
const useVscodeQuery = useVscodeQueryRaw as <TData>(
  method: string,
  options: VscodeQueryOptions,
) => VscodeQueryResult<TData>;
const EMPTY_RESIDUE_CHAINS: PdbResidueChain[] = [];
export function PdbPreviewFromFile({
  className,
  fallback,
  hostId,
  path = "",
  showFileName = false,
}: PdbPreviewFromFileProps) {
  const hasPath = path.length > 0;
  const hostParams =
    hostId == null
      ? {}
      : {
          hostId,
        };
  const readFileQuery = useVscodeQuery<VscodeReadFileResult>("read-file", {
    params: {
      path,
      ...hostParams,
    },
    queryConfig: {
      enabled: hasPath,
    },
  });
  if (!hasPath) return fallback;
  if (readFileQuery.isLoading) {
    return (
      <div
        className={clsx(
          "flex h-full items-center justify-center bg-token-main-surface-primary",
          className,
        )}
      >
        <RichPreviewLoading className="text-sm" />
      </div>
    );
  }
  if (readFileQuery.isError || readFileQuery.data == null) return fallback;
  return (
    <PdbPreview
      className={className}
      contents={readFileQuery.data.contents}
      filePath={showFileName ? path : undefined}
    />
  );
}
function PdbPreview({ className, contents, filePath }: PdbPreviewProps) {
  const intl = useIntl();
  const parsedPdb = React.useMemo(() => parsePdbContents(contents), [contents]);
  const [selectedModelIndex, setSelectedModelIndex] = React.useState(0);
  const [viewerElement, setViewerElement] = React.useState<HTMLElement | null>(
    null,
  );
  const [viewerStatus, setViewerStatus] = React.useState<
    "idle" | "loading" | "error"
  >("idle");
  const [reloadToken, setReloadToken] = React.useState(0);
  const [selectedChainId, setSelectedChainId] = React.useState<string | null>(
    null,
  );
  const [activeRange, setActiveRange] =
    React.useState<ResidueSelectionRange | null>(null);
  const [dragStartIndex, setDragStartIndex] = React.useState<number | null>(
    null,
  );
  const [committedRange, setCommittedRange] =
    React.useState<ResidueSelectionRange | null>(null);
  const viewerRef = React.useRef<ThreeDMolViewer | null>(null);
  const pendingRangeRef = React.useRef<ResidueSelectionRange | null>(null);
  const models = parsedPdb.models;
  const selectedModel = models[selectedModelIndex] ?? null;
  const modelContents = selectedModel?.contents ?? null;
  const residueChains = selectedModel?.residueChains ?? EMPTY_RESIDUE_CHAINS;
  const selectedChain =
    residueChains.find((chain) => chain.chainId === selectedChainId) ??
    residueChains[0] ??
    null;
  const rangeForSelectedModel =
    activeRange?.modelIndex === selectedModelIndex ? activeRange : null;
  const activeResidues = React.useMemo(
    () => getResiduesInRange(selectedChain, rangeForSelectedModel),
    [selectedChain, rangeForSelectedModel],
  );
  const activeSelection = React.useMemo(
    () => buildResidueSelection(activeResidues),
    [activeResidues],
  );
  const committedResidues = React.useMemo(
    () =>
      getResiduesInRange(
        selectedChain,
        committedRange?.modelIndex === selectedModelIndex
          ? committedRange
          : null,
      ),
    [selectedModelIndex, selectedChain, committedRange],
  );
  const committedSelection = React.useMemo(
    () => buildResidueSelection(committedResidues),
    [committedResidues],
  );
  const resizeObserverRef = useResizeObserverRef(() => {
    const viewer = viewerRef.current;
    if (viewer != null) {
      viewer.resize();
      viewer.render();
    }
  });
  const setViewerContainerRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      setViewerElement(element);
      resizeObserverRef(element);
    },
    [resizeObserverRef],
  );
  function updateActiveRange(range: ResidueSelectionRange | null) {
    pendingRangeRef.current = range;
    setActiveRange(range);
  }
  function handleChainChange(chainId: string) {
    setSelectedChainId(chainId);
    updateActiveRange(null);
    setDragStartIndex(null);
    setCommittedRange(null);
  }
  function handleResidueSelectionStart(residueIndex: number) {
    if (selectedChain == null) return;
    setDragStartIndex(residueIndex);
    updateActiveRange({
      chainId: selectedChain.chainId,
      endIndex: residueIndex,
      modelIndex: selectedModelIndex,
      startIndex: residueIndex,
    });
  }
  function handleResidueSelectionMove(residueIndex: number) {
    if (dragStartIndex == null || selectedChain == null) return;
    updateActiveRange({
      chainId: selectedChain.chainId,
      endIndex: Math.max(dragStartIndex, residueIndex),
      modelIndex: selectedModelIndex,
      startIndex: Math.min(dragStartIndex, residueIndex),
    });
  }
  function handleResidueSelectionCommit() {
    const pendingRange = pendingRangeRef.current;
    setDragStartIndex(null);
    if (
      pendingRange != null &&
      pendingRange.modelIndex === selectedModelIndex
    ) {
      setCommittedRange(pendingRange);
    }
  }
  function handleResidueSelectionSelect(residueIndex: number) {
    if (selectedChain == null) return;
    const nextRange = {
      chainId: selectedChain.chainId,
      endIndex: residueIndex,
      modelIndex: selectedModelIndex,
      startIndex: residueIndex,
    };
    setDragStartIndex(null);
    updateActiveRange(nextRange);
    setCommittedRange(nextRange);
  }
  function handleResetView() {
    updateActiveRange(null);
    setDragStartIndex(null);
    setCommittedRange(null);
    setReloadToken((currentToken) => currentToken + 1);
  }
  React.useEffect(() => {
    if (selectedModelIndex >= models.length) {
      setSelectedModelIndex(0);
    }
  }, [selectedModelIndex, models.length]);
  React.useEffect(() => {
    if (viewerElement == null || modelContents == null) return;
    let shouldKeepViewer = true;
    setViewerStatus("loading");
    clearPdbViewer(viewerElement, viewerRef.current);
    viewerRef.current = null;
    void (async () => {
      try {
        const threeDMolModule = (await import("3dmol")) as ThreeDMolModule;
        const createViewer = resolveThreeDMolCreateViewer(threeDMolModule);
        if (!shouldKeepViewer) return;
        const viewer = createViewer(viewerElement, {
          backgroundColor: "white",
          disableFog: true,
        });
        viewerRef.current = viewer;
        viewer.addModel(modelContents, "pdb");
        applyPdbViewerStyle(viewer, null);
        viewer.zoomTo();
        viewer.setBackgroundColor("white");
        viewer.resize();
        viewer.render();
        setViewerStatus("idle");
      } catch {
        if (shouldKeepViewer) {
          clearPdbViewer(viewerElement, viewerRef.current);
          viewerRef.current = null;
          setViewerStatus("error");
        }
      }
    })();
    return () => {
      shouldKeepViewer = false;
      clearPdbViewer(viewerElement, viewerRef.current);
      viewerRef.current = null;
    };
  }, [modelContents, reloadToken, viewerElement]);
  React.useEffect(() => {
    const viewer = viewerRef.current;
    if (viewer == null || viewerStatus !== "idle") return;
    applyPdbViewerStyle(viewer, activeSelection);
    viewer.render();
  }, [activeSelection, viewerStatus]);
  React.useEffect(() => {
    const viewer = viewerRef.current;
    if (
      viewer == null ||
      viewerStatus !== "idle" ||
      committedRange == null ||
      committedSelection == null
    ) {
      return;
    }
    viewer.zoomTo(committedSelection, 350, true);
    viewer.render();
  }, [committedSelection, committedRange, viewerStatus]);
  if (models.length === 0 || selectedModel == null) {
    return (
      <PdbPreviewShell className={className} filePath={filePath}>
        <div className="flex h-full items-center justify-center">
          <RichPreviewBody>
            <FormattedMessage
              id="codex.filePreview.pdb.empty"
              defaultMessage="No PDB atoms found"
              description="Placeholder text when a PDB file cannot be parsed into atom records."
            />
          </RichPreviewBody>
        </div>
      </PdbPreviewShell>
    );
  }
  return (
    <PdbPreviewShell className={className} filePath={filePath}>
      <div className="flex flex-wrap items-center gap-2 border-b border-token-border px-3 py-2">
        {models.length > 1 ? (
          <DropdownMenu
            align="end"
            contentWidth="xs"
            triggerButton={
              <Button
                aria-label={intl.formatMessage({
                  id: "codex.filePreview.pdb.modelSelectLabel",
                  defaultMessage: "Select PDB model",
                  description:
                    "Accessible label for selecting a model inside a multi-model PDB file.",
                })}
                color="ghost"
                size="toolbar"
                className="!h-6 shrink-0 gap-1 rounded-md px-1.5 text-sm text-token-text-tertiary hover:text-token-text-primary"
              >
                <span className="text-token-text-primary tabular-nums">
                  {intl.formatMessage(
                    {
                      id: "codex.filePreview.pdb.modelOption",
                      defaultMessage: "Model {modelNumber}",
                      description:
                        "Dropdown option label for selecting a model inside a multi-model PDB file.",
                    },
                    {
                      modelNumber: selectedModel.modelNumber,
                    },
                  )}
                </span>
                <ChevronIcon className="icon-2xs opacity-65" />
              </Button>
            }
          >
            {models.map((model, index) => (
              <Dropdown.Item
                key={`${model.modelNumber}-${index}`}
                RightIcon={
                  index === selectedModelIndex ? CheckMdIcon : undefined
                }
                onSelect={() => setSelectedModelIndex(index)}
                className="text-token-text-primary"
              >
                {intl.formatMessage(
                  {
                    id: "codex.filePreview.pdb.modelOption",
                    defaultMessage: "Model {modelNumber}",
                    description:
                      "Dropdown option label for selecting a model inside a multi-model PDB file.",
                  },
                  {
                    modelNumber: model.modelNumber,
                  },
                )}
              </Dropdown.Item>
            ))}
          </DropdownMenu>
        ) : null}
        <Button
          color="outline"
          size="toolbar"
          className="!h-6 shrink-0 rounded-md !border-token-border-default bg-token-main-surface-primary text-sm text-token-text-primary hover:text-token-text-primary"
          onClick={handleResetView}
        >
          <FormattedMessage
            id="codex.filePreview.pdb.resetView"
            defaultMessage="Reset view"
            description="Button label for resetting PDB viewer rotation and zoom."
          />
        </Button>
        <div className="ml-auto flex flex-wrap gap-x-4 gap-y-1 text-xs text-token-text-secondary">
          <span>
            <FormattedMessage
              id="codex.filePreview.pdb.residueCount"
              defaultMessage="{count, number} residues"
              description="Summary count of residues parsed from a PDB file."
              values={{
                count: selectedModel.stats.residueCount,
              }}
            />
          </span>
          <span>
            <FormattedMessage
              id="codex.filePreview.pdb.atomCount"
              defaultMessage="{count, number} atoms"
              description="Summary count of atoms parsed from a PDB file."
              values={{
                count: selectedModel.stats.atomCount,
              }}
            />
          </span>
          <span>
            <FormattedMessage
              id="codex.filePreview.pdb.scoreSummary"
              defaultMessage="B-factor/pLDDT {mean}"
              description="Summary of the mean B-factor or AlphaFold pLDDT score in a PDB file."
              values={{
                mean: formatPdbScore(selectedModel.stats.meanScore),
              }}
            />
          </span>
        </div>
      </div>
      {selectedChain == null ? null : (
        <PdbSequenceStrip
          chains={residueChains}
          selectedChain={selectedChain}
          selectedRange={rangeForSelectedModel}
          selectedResidues={activeResidues}
          onChainChange={handleChainChange}
          onResidueSelectionCommit={handleResidueSelectionCommit}
          onResidueSelectionMove={handleResidueSelectionMove}
          onResidueSelectionSelect={handleResidueSelectionSelect}
          onResidueSelectionStart={handleResidueSelectionStart}
        />
      )}
      <div className="relative min-h-0 flex-1 bg-white">
        <div
          ref={setViewerContainerRef}
          className="h-full w-full overflow-hidden"
          aria-label={intl.formatMessage({
            id: "codex.filePreview.pdb.viewerLabel",
            defaultMessage: "Interactive PDB structure viewer",
            description: "Accessible label for the PDB structure viewer.",
          })}
        />
        {viewerStatus === "loading" ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/70">
            <RichPreviewLoading className="text-sm" />
          </div>
        ) : null}
        {viewerStatus === "error" ? (
          <div className="absolute inset-0 flex items-center justify-center bg-token-main-surface-primary">
            <RichPreviewBody>
              <FormattedMessage
                id="codex.filePreview.pdb.viewerLoadError"
                defaultMessage="Unable to load the 3Dmol PDB viewer"
                description="Error text when the 3Dmol PDB viewer cannot be loaded."
              />
            </RichPreviewBody>
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3 border-t border-token-border px-3 py-2 text-xs text-token-text-secondary">
        <LegendSwatch className="bg-[#0053d6]">
          <FormattedMessage
            id="codex.filePreview.pdb.legendVeryHigh"
            defaultMessage="90+"
            description="PDB confidence legend label for very high scores."
          />
        </LegendSwatch>
        <LegendSwatch className="bg-[#65cbf3]">
          <FormattedMessage
            id="codex.filePreview.pdb.legendConfident"
            defaultMessage="70-90"
            description="PDB confidence legend label for confident scores."
          />
        </LegendSwatch>
        <LegendSwatch className="bg-[#ffdb13]">
          <FormattedMessage
            id="codex.filePreview.pdb.legendLow"
            defaultMessage="50-70"
            description="PDB confidence legend label for low scores."
          />
        </LegendSwatch>
        <LegendSwatch className="bg-[#ff7d45]">
          <FormattedMessage
            id="codex.filePreview.pdb.legendVeryLow"
            defaultMessage="<50"
            description="PDB confidence legend label for very low scores."
          />
        </LegendSwatch>
        <span className="ml-auto">
          <FormattedMessage
            id="codex.filePreview.pdb.interactionHint"
            defaultMessage="Drag to rotate. Scroll to zoom."
            description="Interaction hint for the PDB structure viewer."
          />
        </span>
      </div>
    </PdbPreviewShell>
  );
}
