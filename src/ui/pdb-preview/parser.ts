// Restored from ref/webview/assets/preview-DvaTfwxN.js
// preview-DvaTfwxN chunk restored from the Codex webview bundle.
import type {
  OpenPdbModelBlock,
  ParsedPdb,
  PdbAtom,
  PdbModelBlock,
  PdbResidue,
  PdbResidueChain,
  PdbStats,
} from "./types";
const RESIDUE_SEQUENCE_CODES: Record<string, string> = {
  A: "A",
  ALA: "A",
  ARG: "R",
  ASN: "N",
  ASP: "D",
  ASX: "B",
  C: "C",
  CYS: "C",
  CYM: "C",
  CYX: "C",
  DA: "A",
  DC: "C",
  DG: "G",
  DT: "T",
  DU: "U",
  G: "G",
  GLN: "Q",
  GLU: "E",
  GLX: "Z",
  GLY: "G",
  HIS: "H",
  HSD: "H",
  HSE: "H",
  HSP: "H",
  ILE: "I",
  LEU: "L",
  LYS: "K",
  M: "M",
  MET: "M",
  MSE: "M",
  PHE: "F",
  PRO: "P",
  PYL: "O",
  SEC: "U",
  SEP: "S",
  SER: "S",
  T: "T",
  THR: "T",
  TPO: "T",
  TRP: "W",
  TYR: "Y",
  U: "U",
  VAL: "V",
};
export function parsePdbContents(contents: string): ParsedPdb {
  return {
    models: splitPdbModels(contents)
      .map((modelBlock) => {
        const atoms = parsePdbAtoms(modelBlock.contents);
        const trace = selectPdbTraceAtoms(atoms);
        const residueChains = buildResidueChains(atoms);
        return {
          atoms,
          chains: [...new Set(atoms.map((atom) => atom.chainId))].sort(),
          contents: modelBlock.contents,
          modelNumber: modelBlock.modelNumber,
          residueChains,
          stats: calculatePdbStats(atoms, trace),
          title: modelBlock.title,
          trace,
        };
      })
      .filter((model) => model.atoms.length > 0),
  };
}
function splitPdbModels(contents: string): PdbModelBlock[] {
  const lines = contents.split(/\r?\n/);
  if (!lines.some((line) => line.slice(0, 6).trim() === "MODEL")) {
    return [
      {
        contents,
        modelNumber: 1,
        title: findPdbTitle(lines),
      },
    ];
  }
  const preambleLines: string[] = [];
  const modelBlocks: OpenPdbModelBlock[] = [];
  let currentModel: OpenPdbModelBlock | null = null;
  let nextModelNumber = 1;
  let foundModelRecord = false;
  for (const line of lines) {
    const recordType = line.slice(0, 6).trim();
    if (recordType === "MODEL") {
      if (currentModel != null) modelBlocks.push(currentModel);
      foundModelRecord = true;
      currentModel = {
        lines: [line],
        modelNumber: parseIntegerField(line.slice(10, 14)) ?? nextModelNumber,
        title: null,
      };
      nextModelNumber += 1;
      continue;
    }
    if (currentModel == null) {
      if (!foundModelRecord) preambleLines.push(line);
      continue;
    }
    currentModel.lines.push(line);
    if (currentModel.title == null && recordType === "REMARK") {
      currentModel.title = parseRemarkTitle(line);
    }
    if (recordType === "ENDMDL") {
      modelBlocks.push(currentModel);
      currentModel = null;
    }
  }
  if (currentModel != null) modelBlocks.push(currentModel);
  const fallbackTitle = findPdbTitle(preambleLines);
  return modelBlocks.map((modelBlock) => ({
    contents: [...preambleLines, ...modelBlock.lines].join("\n"),
    modelNumber: modelBlock.modelNumber,
    title: modelBlock.title ?? fallbackTitle,
  }));
}
function parsePdbAtoms(contents: string): PdbAtom[] {
  const atoms: PdbAtom[] = [];
  for (const line of contents.split(/\r?\n/)) {
    const recordType = line.slice(0, 6).trim();
    if (recordType !== "ATOM" && recordType !== "HETATM") continue;
    const atom = parsePdbAtomLine(line);
    if (atom != null) atoms.push(atom);
  }
  return atoms;
}
function parsePdbAtomLine(line: string): PdbAtom | null {
  const coordinateX = parseFloatField(line.slice(30, 38));
  const coordinateY = parseFloatField(line.slice(38, 46));
  const coordinateZ = parseFloatField(line.slice(46, 54));
  if (coordinateX == null || coordinateY == null || coordinateZ == null) {
    return null;
  }
  const atomName = line.slice(12, 16).trim();
  const recordType = line.slice(0, 6).trim();
  return {
    atomName,
    bFactor: parseFloatField(line.slice(60, 66)),
    chainId: line.slice(21, 22).trim() || " ",
    element: line.slice(76, 78).trim() || inferPdbElement(atomName),
    insertionCode: line.slice(26, 27).trim() || " ",
    isHetAtom: recordType === "HETATM",
    residueName: line.slice(17, 20).trim(),
    residueNumber: parseIntegerField(line.slice(22, 26)) ?? 0,
    serial: parseIntegerField(line.slice(6, 11)),
    x: coordinateX,
    y: coordinateY,
    z: coordinateZ,
  };
}
function buildResidueChains(atoms: PdbAtom[]): PdbResidueChain[] {
  const residuesByChain = new Map<string, PdbResidue[]>();
  const residuesByKey = new Map<string, PdbResidue>();
  for (const atom of atoms) {
    if (atom.isHetAtom && !isKnownResidueName(atom.residueName)) continue;
    const residueKey = getResidueKey(atom);
    const existingResidue = residuesByKey.get(residueKey);
    if (existingResidue != null) {
      if (atom.serial != null) existingResidue.atomSerials.push(atom.serial);
      continue;
    }
    const chainResidues = residuesByChain.get(atom.chainId) ?? [];
    const residue = {
      atomSerials: atom.serial == null ? [] : [atom.serial],
      chainId: atom.chainId,
      insertionCode: atom.insertionCode,
      residueName: atom.residueName,
      residueNumber: atom.residueNumber,
      sequenceCode: getResidueSequenceCode(atom.residueName),
    };
    chainResidues.push(residue);
    residuesByKey.set(residueKey, residue);
    residuesByChain.set(atom.chainId, chainResidues);
  }
  return [...residuesByChain.entries()]
    .sort(([leftChainId], [rightChainId]) =>
      leftChainId.localeCompare(rightChainId),
    )
    .map(([chainId, residues]) => ({
      chainId,
      residues,
      sequence: residues.map((residue) => residue.sequenceCode).join(""),
    }));
}
function getResidueKey(atom: PdbAtom): string {
  return [
    atom.chainId,
    atom.residueNumber,
    atom.insertionCode,
    atom.residueName,
  ].join(":");
}
function selectPdbTraceAtoms(atoms: PdbAtom[]): PdbAtom[] {
  const alphaCarbonAtoms = atoms.filter((atom) => atom.atomName === "CA");
  return alphaCarbonAtoms.length > 0 ? alphaCarbonAtoms : atoms;
}
function calculatePdbStats(atoms: PdbAtom[], traceAtoms: PdbAtom[]): PdbStats {
  const residueKeys = new Set(
    atoms.map((atom) =>
      [
        atom.chainId,
        atom.residueName,
        atom.residueNumber,
        atom.insertionCode,
      ].join(":"),
    ),
  );
  const scoreSource = traceAtoms.length > 0 ? traceAtoms : atoms;
  const scores = scoreSource
    .map((atom) => atom.bFactor)
    .filter((score): score is number => score != null);
  return {
    atomCount: atoms.length,
    chainCount: new Set(atoms.map((atom) => atom.chainId)).size,
    maxScore: scores.length > 0 ? Math.max(...scores) : null,
    meanScore:
      scores.length > 0
        ? scores.reduce((total, score) => total + score, 0) / scores.length
        : null,
    minScore: scores.length > 0 ? Math.min(...scores) : null,
    residueCount: residueKeys.size,
  };
}
function getResidueSequenceCode(residueName: string): string {
  return RESIDUE_SEQUENCE_CODES[residueName.toUpperCase()] ?? "X";
}
function isKnownResidueName(residueName: string): boolean {
  return RESIDUE_SEQUENCE_CODES[residueName.toUpperCase()] != null;
}
function inferPdbElement(atomName: string): string | null {
  return (
    atomName
      .match(/[A-Za-z]+/)?.[0]
      ?.slice(0, 2)
      .toUpperCase() ?? null
  );
}
function findPdbTitle(lines: string[]): string | null {
  for (const line of lines) {
    if (line.slice(0, 6).trim() === "REMARK") return parseRemarkTitle(line);
  }
  return null;
}
function parseRemarkTitle(line: string): string | null {
  const title = line.slice(6).trim();
  return title.length > 0 ? title : null;
}
function parseFloatField(value: string): number | null {
  const parsedValue = Number.parseFloat(value.trim());
  return Number.isFinite(parsedValue) ? parsedValue : null;
}
function parseIntegerField(value: string): number | null {
  const parsedValue = Number.parseInt(value.trim(), 10);
  return Number.isFinite(parsedValue) ? parsedValue : null;
}
