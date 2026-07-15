// Restored from ref/webview/assets/preview-DvaTfwxN.js
// preview-DvaTfwxN chunk restored from the Codex webview bundle.
import type {
  PdbResidue,
  PdbResidueChain,
  ResidueSelectionRange,
  ThreeDMolModule,
  ThreeDMolSelection,
  ThreeDMolStyle,
  ThreeDMolViewer,
} from "./types";
const PDB_CONFIDENCE_COLOR_SCHEME = {
  colorscheme: {
    gradient: "roygb",
    max: 100,
    min: 50,
    prop: "b",
  },
};
const DEFAULT_CARTOON_STYLE: ThreeDMolStyle = {
  cartoon: PDB_CONFIDENCE_COLOR_SCHEME,
};
const DEFAULT_HETATOM_STYLE: ThreeDMolStyle = {
  stick: {
    radius: 0.12,
  },
};
const UNSELECTED_CARTOON_STYLE: ThreeDMolStyle = {
  cartoon: {
    ...PDB_CONFIDENCE_COLOR_SCHEME,
    opacity: 0.34,
  },
};
const HIDDEN_STICK_STYLE: ThreeDMolStyle = {
  stick: {
    hidden: true,
  },
};
const SELECTED_RESIDUE_STYLE: ThreeDMolStyle = {
  cartoon: {
    color: "#f97316",
  },
  stick: {
    color: "#f97316",
    radius: 0.12,
  },
};
export function applyPdbViewerStyle(
  viewer: ThreeDMolViewer,
  selection: ThreeDMolSelection | null,
) {
  if (selection == null) {
    viewer.setStyle({}, DEFAULT_CARTOON_STYLE);
    viewer.addStyle(
      {
        hetflag: false,
      },
      DEFAULT_HETATOM_STYLE,
    );
    return;
  }
  const inverseSelection = {
    not: selection,
  };
  viewer.setStyle(inverseSelection, UNSELECTED_CARTOON_STYLE);
  viewer.addStyle(
    {
      and: [
        inverseSelection,
        {
          hetflag: false,
        },
      ],
    },
    HIDDEN_STICK_STYLE,
  );
  viewer.setStyle(selection, SELECTED_RESIDUE_STYLE);
}
export function getResiduesInRange(
  chain: PdbResidueChain | null,
  range: ResidueSelectionRange | null,
): PdbResidue[] {
  if (chain == null || range == null || range.chainId !== chain.chainId) {
    return [];
  }
  const startIndex = Math.max(
    0,
    Math.min(range.startIndex, chain.residues.length - 1),
  );
  const endIndex = Math.max(
    startIndex,
    Math.min(range.endIndex, chain.residues.length - 1),
  );
  return chain.residues.slice(startIndex, endIndex + 1);
}
export function buildResidueSelection(
  residues: PdbResidue[],
): ThreeDMolSelection | null {
  if (residues.length === 0) return null;
  const serials = [
    ...new Set(residues.flatMap((residue) => residue.atomSerials)),
  ];
  return serials.length > 0
    ? {
        serial: serials,
      }
    : {
        or: residues.map(getResidueSelection),
      };
}
function getResidueSelection(residue: PdbResidue): ThreeDMolSelection {
  return {
    chain: residue.chainId,
    icode: residue.insertionCode,
    resi: residue.residueNumber,
    resn: residue.residueName,
  };
}
export function resolveThreeDMolCreateViewer(module: ThreeDMolModule) {
  const createViewer =
    typeof module.createViewer === "function"
      ? module.createViewer
      : typeof module.default?.createViewer === "function"
        ? module.default.createViewer
        : null;
  if (createViewer == null) {
    throw Error("3Dmol createViewer export was not found");
  }
  return createViewer;
}
export function clearPdbViewer(
  container: HTMLElement,
  viewer: ThreeDMolViewer | null,
) {
  if (viewer != null) {
    viewer.removeAllModels();
    viewer.clear();
  }
  container.replaceChildren();
}
export function formatPdbScore(score: number | null): string {
  return score == null ? "n/a" : score.toFixed(1);
}
export function formatResidueRange(residues: PdbResidue[]): string {
  const firstResidue = residues[0];
  const lastResidue = residues.at(-1);
  if (firstResidue == null || lastResidue == null) return "";
  const chainId = formatChainId(firstResidue.chainId);
  const firstResidueNumber = formatResidueNumber(firstResidue);
  const lastResidueNumber = formatResidueNumber(lastResidue);
  return firstResidueNumber === lastResidueNumber
    ? `${chainId}:${firstResidueNumber}`
    : `${chainId}:${firstResidueNumber}-${lastResidueNumber}`;
}
export function formatResidueNumber(residue: PdbResidue): string {
  const insertionCode = residue.insertionCode.trim();
  return insertionCode.length > 0
    ? `${residue.residueNumber}${insertionCode}`
    : String(residue.residueNumber);
}
export function formatChainId(chainId: string): string {
  return chainId.trim().length > 0 ? chainId : "(blank)";
}
