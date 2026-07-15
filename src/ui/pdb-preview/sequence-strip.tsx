// Restored from ref/webview/assets/preview-DvaTfwxN.js
// preview-DvaTfwxN chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { Button } from "../button";
import { Dropdown, DropdownMenu } from "../dropdown";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { ChevronIcon } from "../../icons/chevron-icon";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type { PdbSequenceStripProps } from "./types";
import {
  formatChainId,
  formatResidueNumber,
  formatResidueRange,
} from "./viewer";
export function PdbSequenceStrip({
  chains,
  onChainChange,
  onResidueSelectionCommit,
  onResidueSelectionMove,
  onResidueSelectionSelect,
  onResidueSelectionStart,
  selectedChain,
  selectedRange,
  selectedResidues,
}: PdbSequenceStripProps) {
  const intl = useIntl();
  const residueContainerRef = React.useRef<HTMLDivElement | null>(null);
  const activePointerIdRef = React.useRef<number | null>(null);
  const selectedRangeForChain =
    selectedRange?.chainId === selectedChain.chainId ? selectedRange : null;
  function getResidueIndexFromTarget(target: EventTarget | null) {
    if (!(target instanceof Element)) return null;
    const residueContainer = residueContainerRef.current;
    const residueElement = target.closest("[data-pdb-residue-index]");
    if (
      residueContainer == null ||
      !(residueElement instanceof HTMLElement) ||
      !residueContainer.contains(residueElement)
    ) {
      return null;
    }
    const residueIndex = Number(residueElement.dataset.pdbResidueIndex);
    return Number.isInteger(residueIndex) ? residueIndex : null;
  }
  function handlePointerEnd(event: React.PointerEvent<HTMLDivElement>) {
    if (activePointerIdRef.current !== event.pointerId) return;
    activePointerIdRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    onResidueSelectionCommit();
  }
  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const residueIndex = getResidueIndexFromTarget(event.target);
    if (residueIndex == null) return;
    event.preventDefault();
    activePointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    onResidueSelectionStart(residueIndex);
  }
  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (activePointerIdRef.current !== event.pointerId) return;
    const residueIndex = getResidueIndexFromTarget(
      document.elementFromPoint(event.clientX, event.clientY),
    );
    if (residueIndex != null) onResidueSelectionMove(residueIndex);
  }
  const chainSelector =
    chains.length > 1 ? (
      <DropdownMenu
        align="start"
        contentWidth="xs"
        triggerButton={
          <Button
            aria-label={intl.formatMessage({
              id: "codex.filePreview.pdb.chainSelectLabel",
              defaultMessage: "Select PDB chain",
              description:
                "Accessible label for selecting a chain in a PDB sequence preview.",
            })}
            color="ghost"
            size="toolbar"
            className="!h-6 shrink-0 gap-1 rounded-md px-1.5 text-xs text-token-text-tertiary hover:text-token-text-primary"
          >
            <span className="text-token-text-primary">
              <FormattedMessage
                id="codex.filePreview.pdb.chainLabel"
                defaultMessage="Chain {chainId}"
                description="Label for the active chain in a PDB sequence preview."
                values={{
                  chainId: formatChainId(selectedChain.chainId),
                }}
              />
            </span>
            <ChevronIcon className="icon-2xs opacity-65" />
          </Button>
        }
      >
        {chains.map((chain) => (
          <Dropdown.Item
            key={chain.chainId}
            RightIcon={
              chain.chainId === selectedChain.chainId ? CheckMdIcon : undefined
            }
            onSelect={() => onChainChange(chain.chainId)}
            className="text-token-text-primary"
          >
            <FormattedMessage
              id="codex.filePreview.pdb.chainOption"
              defaultMessage="Chain {chainId} ({count, number} residues)"
              description="Dropdown option for a PDB chain sequence."
              values={{
                chainId: formatChainId(chain.chainId),
                count: chain.residues.length,
              }}
            />
          </Dropdown.Item>
        ))}
      </DropdownMenu>
    ) : (
      <span className="font-medium text-token-text-primary">
        <FormattedMessage
          id="codex.filePreview.pdb.chainLabel"
          defaultMessage="Chain {chainId}"
          description="Label for the active chain in a PDB sequence preview."
          values={{
            chainId: formatChainId(selectedChain.chainId),
          }}
        />
      </span>
    );
  return (
    <div className="border-b border-token-border bg-token-main-surface-primary">
      <div className="flex flex-wrap items-center gap-2 px-3 py-1.5 text-xs text-token-text-secondary">
        {chainSelector}
        <span className="tabular-nums">
          <FormattedMessage
            id="codex.filePreview.pdb.sequenceResidueCount"
            defaultMessage="{count, number} coordinate residues"
            description="Coordinate residue count for the current PDB sequence chain."
            values={{
              count: selectedChain.residues.length,
            }}
          />
        </span>
        {selectedResidues.length > 0 ? (
          <span className="ml-auto font-medium text-token-text-primary">
            <FormattedMessage
              id="codex.filePreview.pdb.selectedResidues"
              defaultMessage="Selected {range}"
              description="Summary of the selected PDB residue range."
              values={{
                range: formatResidueRange(selectedResidues),
              }}
            />
          </span>
        ) : null}
      </div>
      <div
        ref={residueContainerRef}
        aria-label={intl.formatMessage({
          id: "codex.filePreview.pdb.sequenceLabel",
          defaultMessage: "PDB chain sequence",
          description: "Accessible label for the PDB chain sequence row.",
        })}
        className="max-h-24 overflow-auto border-t border-token-border px-3 py-2 font-mono text-[11px] leading-5"
        onPointerCancel={handlePointerEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
      >
        {selectedChain.residues.map((residue, residueIndex) => {
          const isSelected =
            selectedRangeForChain != null &&
            residueIndex >= selectedRangeForChain.startIndex &&
            residueIndex <= selectedRangeForChain.endIndex;
          const isFirstSelected =
            isSelected && residueIndex === selectedRangeForChain?.startIndex;
          const isLastSelected =
            isSelected && residueIndex === selectedRangeForChain?.endIndex;
          return (
            <button
              key={`${residue.chainId}:${residue.residueNumber}:${residue.insertionCode}:${residue.residueName}:${residueIndex}`}
              data-pdb-residue-index={residueIndex}
              type="button"
              aria-label={intl.formatMessage(
                {
                  id: "codex.filePreview.pdb.residueLabel",
                  defaultMessage:
                    "{residueName} {residueNumber} in chain {chainId}",
                  description:
                    "Accessible label for a residue in the PDB sequence strip.",
                },
                {
                  chainId: formatChainId(residue.chainId),
                  residueName: residue.residueName,
                  residueNumber: formatResidueNumber(residue),
                },
              )}
              aria-pressed={isSelected}
              className={clsx(
                "cursor-interaction inline-flex h-5 min-w-[1.35ch] select-none items-center justify-center rounded-none px-0 text-token-text-secondary",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-token-text-primary",
                !isSelected &&
                  "hover:rounded-sm hover:bg-token-main-surface-secondary hover:text-token-text-primary",
                isSelected && "bg-orange-100 text-orange-800",
                isFirstSelected && "rounded-l-sm",
                isLastSelected && "rounded-r-sm",
                isFirstSelected &&
                  isLastSelected &&
                  "rounded-sm ring-1 ring-orange-300",
              )}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onResidueSelectionSelect(residueIndex);
                }
              }}
              title={intl.formatMessage(
                {
                  id: "codex.filePreview.pdb.residueTitle",
                  defaultMessage: "{residueName} {residueNumber}",
                  description:
                    "Tooltip title for a residue in the PDB sequence strip.",
                },
                {
                  residueName: residue.residueName,
                  residueNumber: formatResidueNumber(residue),
                },
              )}
            >
              {residue.sequenceCode}
            </button>
          );
        })}
      </div>
    </div>
  );
}
