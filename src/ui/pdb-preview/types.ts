// Restored from ref/webview/assets/preview-DvaTfwxN.js
// preview-DvaTfwxN chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
export type VscodeReadFileResult = {
  contents: string;
};
export type VscodeQueryResult<TData> = {
  data?: TData;
  isError: boolean;
  isLoading: boolean;
};
export type VscodeQueryOptions = {
  params?: Record<string, unknown>;
  queryConfig?: {
    enabled?: boolean;
  };
};
export type PdbPreviewFromFileProps = {
  className?: string;
  fallback: ReactNode;
  hostId?: string;
  path?: string;
  showFileName?: boolean;
};
export type PdbPreviewProps = {
  className?: string;
  contents: string;
  filePath?: string;
};
export type PdbAtom = {
  atomName: string;
  bFactor: number | null;
  chainId: string;
  element: string | null;
  insertionCode: string;
  isHetAtom: boolean;
  residueName: string;
  residueNumber: number;
  serial: number | null;
  x: number;
  y: number;
  z: number;
};
export type PdbResidue = {
  atomSerials: number[];
  chainId: string;
  insertionCode: string;
  residueName: string;
  residueNumber: number;
  sequenceCode: string;
};
export type PdbResidueChain = {
  chainId: string;
  residues: PdbResidue[];
  sequence: string;
};
export type PdbStats = {
  atomCount: number;
  chainCount: number;
  maxScore: number | null;
  meanScore: number | null;
  minScore: number | null;
  residueCount: number;
};
export type PdbModel = {
  atoms: PdbAtom[];
  chains: string[];
  contents: string;
  modelNumber: number;
  residueChains: PdbResidueChain[];
  stats: PdbStats;
  title: string | null;
  trace: PdbAtom[];
};
export type ParsedPdb = {
  models: PdbModel[];
};
export type PdbModelBlock = {
  contents: string;
  modelNumber: number;
  title: string | null;
};
export type OpenPdbModelBlock = {
  lines: string[];
  modelNumber: number;
  title: string | null;
};
export type ResidueSelectionRange = {
  chainId: string;
  endIndex: number;
  modelIndex: number;
  startIndex: number;
};
export type ThreeDMolSelection = Record<string, unknown>;
export type ThreeDMolStyle = Record<string, unknown>;
export type ThreeDMolViewer = {
  addModel(contents: string, format: string): void;
  addStyle(selection: ThreeDMolSelection, style: ThreeDMolStyle): void;
  clear(): void;
  removeAllModels(): void;
  render(): void;
  resize(): void;
  setBackgroundColor(color: string): void;
  setStyle(selection: ThreeDMolSelection, style: ThreeDMolStyle): void;
  zoomTo(
    selection?: ThreeDMolSelection | null,
    animationDurationMs?: number,
    fixedPath?: boolean,
  ): void;
};
export type ThreeDMolModule = {
  createViewer?: (
    element: HTMLElement,
    config: Record<string, unknown>,
  ) => ThreeDMolViewer;
  default?: ThreeDMolModule;
};
export type PdbSequenceStripProps = {
  chains: PdbResidueChain[];
  onChainChange: (chainId: string) => void;
  onResidueSelectionCommit: () => void;
  onResidueSelectionMove: (residueIndex: number) => void;
  onResidueSelectionSelect: (residueIndex: number) => void;
  onResidueSelectionStart: (residueIndex: number) => void;
  selectedChain: PdbResidueChain;
  selectedRange: ResidueSelectionRange | null;
  selectedResidues: PdbResidue[];
};
export type PdbPreviewShellProps = {
  children: ReactNode;
  className?: string;
  filePath?: string;
};
export type LegendSwatchProps = {
  children: ReactNode;
  className?: string;
};
