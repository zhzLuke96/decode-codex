// Restored from ref/webview/assets/mermaid-parser.core-DurnYtle.js
// Vendored Mermaid parser core restored from the Codex webview bundle.
import { PreloadHelper } from "../utils/preload-helper";
import { chunkK5T4RW27M } from "./mermaid-parser-runtime-k5";

type LexerError = {
  column?: number;
  line?: number;
  message: string;
};

type ParserError = {
  message: string;
  token?: {
    startColumn?: number;
    startLine?: number;
  };
};

type ParserResult = {
  lexerErrors: LexerError[];
  parserErrors: ParserError[];
  value: unknown;
};

type LangiumParser = {
  parse(source: string): ParserResult;
};

type ViteDependencyMapper = ((dependencyIndexes: number[]) => string[]) & {
  f?: string[];
};

const __vite__mapDeps: ViteDependencyMapper = ((
  dependencyIndexes: number[],
  mapDeps = __vite__mapDeps,
  dependencyPaths = mapDeps.f ||
    (mapDeps.f = [
      "./info-OMHHGYJF-Bma7TJz9.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./chunk-K5T4RW27-BasTmxaS.js",
      "./isEmpty-DLFki7y7.js",
      "./_baseFor-BRFGaW29.js",
      "./reduce-CYbtueTs.js",
      "./main-0NVm2ZVJ.js",
      "./chunk-KGLVRYIC-DIYgUndE.js",
      "./packet-4T2RLAQJ-46S0xDQR.js",
      "./chunk-FOC6F5B3-DtpZceIN.js",
      "./pie-ZZUOXDRM-C-GbAKjj.js",
      "./chunk-AA7GKIK3-BiHWd-2t.js",
      "./treeView-SZITEDCU-B3M3Gal-.js",
      "./chunk-ORNJ4GCN-CZ8XwNI-.js",
      "./architecture-YZFGNWBL-XT_h85co.js",
      "./chunk-7N4EOEYR-D_8ZJ0D8.js",
      "./gitGraph-7Q5UKJZL-BeodP2Yk.js",
      "./chunk-67CJDMHE-Vupntdzx.js",
      "./radar-PYXPWWZC-Bf7n2C1b.js",
      "./chunk-2KRD3SAO-B08eh9qW.js",
      "./treemap-W4RFUUIX-nKU19kUU.js",
      "./chunk-LIHQZDEY-B1YOF2u3.js",
      "./wardley-RL74JXVD-Um4aCywM.js",
      "./chunk-CIAEETIT-BaS23YN5.js",
    ]),
) =>
  dependencyIndexes.map(
    (index) => dependencyPaths[index],
  )) as ViteDependencyMapper;

const parserByDiagramType: Record<string, LangiumParser | undefined> = {};

const parserLoaderByDiagramType: Record<string, () => Promise<void>> = {
  info: chunkK5T4RW27M(async () => {
    let { createInfoServices } = await PreloadHelper(
      async () => {
        let { createInfoServices: _createInfoServices } = await import(
          "./mermaid-info-definition-k5"
        );
        return {
          createInfoServices: _createInfoServices,
        };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    );
    parserByDiagramType.info = createInfoServices().Info.parser.LangiumParser;
  }, "info"),
  packet: chunkK5T4RW27M(async () => {
    let { createPacketServices } = await PreloadHelper(
      async () => {
        let { createPacketServices: _createPacketServices } = await import(
          "./mermaid-packet-definition-k5"
        );
        return {
          createPacketServices: _createPacketServices,
        };
      },
      __vite__mapDeps([8, 1, 2, 3, 4, 5, 6, 9]),
      import.meta.url,
    );
    parserByDiagramType.packet =
      createPacketServices().Packet.parser.LangiumParser;
  }, "packet"),
  pie: chunkK5T4RW27M(async () => {
    let { createPieServices } = await PreloadHelper(
      async () => {
        let { createPieServices: _createPieServices } = await import(
          "./mermaid-pie-definition-k5"
        );
        return {
          createPieServices: _createPieServices,
        };
      },
      __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 11]),
      import.meta.url,
    );
    parserByDiagramType.pie = createPieServices().Pie.parser.LangiumParser;
  }, "pie"),
  treeView: chunkK5T4RW27M(async () => {
    let { createTreeViewServices } = await PreloadHelper(
      async () => {
        let { createTreeViewServices: _createTreeViewServices } = await import(
          "./mermaid-tree-view-definition-k5"
        );
        return {
          createTreeViewServices: _createTreeViewServices,
        };
      },
      __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 13]),
      import.meta.url,
    );
    parserByDiagramType.treeView =
      createTreeViewServices().TreeView.parser.LangiumParser;
  }, "treeView"),
  architecture: chunkK5T4RW27M(async () => {
    let { createArchitectureServices } = await PreloadHelper(
      async () => {
        let { createArchitectureServices: _createArchitectureServices } =
          await import("./mermaid-architecture-definition-k5");
        return {
          createArchitectureServices: _createArchitectureServices,
        };
      },
      __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 15]),
      import.meta.url,
    );
    parserByDiagramType.architecture =
      createArchitectureServices().Architecture.parser.LangiumParser;
  }, "architecture"),
  gitGraph: chunkK5T4RW27M(async () => {
    let { createGitGraphServices } = await PreloadHelper(
      async () => {
        let { createGitGraphServices: _createGitGraphServices } = await import(
          "./mermaid-git-graph-definition-k5"
        );
        return {
          createGitGraphServices: _createGitGraphServices,
        };
      },
      __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 17]),
      import.meta.url,
    );
    parserByDiagramType.gitGraph =
      createGitGraphServices().GitGraph.parser.LangiumParser;
  }, "gitGraph"),
  radar: chunkK5T4RW27M(async () => {
    let { createRadarServices } = await PreloadHelper(
      async () => {
        let { createRadarServices: _createRadarServices } = await import(
          "./mermaid-radar-definition-k5"
        );
        return {
          createRadarServices: _createRadarServices,
        };
      },
      __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 19]),
      import.meta.url,
    );
    parserByDiagramType.radar =
      createRadarServices().Radar.parser.LangiumParser;
  }, "radar"),
  treemap: chunkK5T4RW27M(async () => {
    let { createTreemapServices } = await PreloadHelper(
      async () => {
        let { createTreemapServices: _createTreemapServices } = await import(
          "./mermaid-treemap-definition-k5"
        );
        return {
          createTreemapServices: _createTreemapServices,
        };
      },
      __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 21]),
      import.meta.url,
    );
    parserByDiagramType.treemap =
      createTreemapServices().Treemap.parser.LangiumParser;
  }, "treemap"),
  wardley: chunkK5T4RW27M(async () => {
    let { createWardleyServices } = await PreloadHelper(
      async () => {
        let { createWardleyServices: _createWardleyServices } = await import(
          "./mermaid-wardley-definition-k5"
        );
        return {
          createWardleyServices: _createWardleyServices,
        };
      },
      __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 23]),
      import.meta.url,
    );
    parserByDiagramType.wardley =
      createWardleyServices().Wardley.parser.LangiumParser;
  }, "wardley"),
};

async function MermaidParserCore(diagramType: string, source: string) {
  let loadParser = parserLoaderByDiagramType[diagramType];
  if (!loadParser) throw Error(`Unknown diagram type: ${diagramType}`);
  if (!parserByDiagramType[diagramType]) await loadParser();

  let parser = parserByDiagramType[diagramType];
  if (!parser)
    throw Error(`Parser failed to load for diagram type: ${diagramType}`);

  let parseResult = parser.parse(source);
  if (parseResult.lexerErrors.length > 0 || parseResult.parserErrors.length > 0)
    throw new MermaidParseError(parseResult);
  return parseResult.value;
}

export function initMermaidParserCoreK5Chunk(): void {}

chunkK5T4RW27M(MermaidParserCore, "parse");

class MermaidParseError extends Error {
  result: ParserResult;

  constructor(parseResult: ParserResult) {
    let lexerMessage = parseResult.lexerErrors
        .map(
          (lexerError) =>
            `Lexer error on line ${lexerError.line !== undefined && !isNaN(lexerError.line) ? lexerError.line : "?"}, column ${lexerError.column !== undefined && !isNaN(lexerError.column) ? lexerError.column : "?"}: ${lexerError.message}`,
        )
        .join("\n"),
      parserMessage = parseResult.parserErrors
        .map(
          (parserError) =>
            `Parse error on line ${parserError.token?.startLine !== undefined && !isNaN(parserError.token.startLine) ? parserError.token.startLine : "?"}, column ${parserError.token?.startColumn !== undefined && !isNaN(parserError.token.startColumn) ? parserError.token.startColumn : "?"}: ${parserError.message}`,
        )
        .join("\n");
    super(`Parsing failed: ${lexerMessage} ${parserMessage}`);
    this.result = parseResult;
  }

  static {
    chunkK5T4RW27M(this, "MermaidParseError");
  }
}

export { MermaidParserCore };
