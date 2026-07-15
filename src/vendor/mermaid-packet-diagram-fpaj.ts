// Restored from ref/webview/assets/diagram-S2PKOQOG-C0ma8yN3.js
// Vendored Mermaid packet diagram definition restored from the Codex webview bundle.
import { chunkS3R3BYOJP as mergePacketConfig } from "./chunk-s3r3byoj";
import {
  chunkAGHRB4JFN as nameFunction,
  chunkAGHRB4JFR as mermaidLogger,
} from "./dompurify";
import {
  _chunkABZYJK2DK as clearCommonDb,
  chunkABZYJK2DN as setAccessibleTitle,
  chunkABZYJK2DF as diagramTitleAndSvgSizingHelper,
  chunkABZYJK2DO as defaultDiagramConfig,
  _chunkABZYJK2DC as setDiagramTitle,
  chunkABZYJK2DJ as getAccessibleDescription,
  chunkABZYJK2DR as getAccessibleTitle,
  _chunkABZYJK2DY as getRuntimeDiagramConfig,
  chunkABZYJK2DZ as setAccessibleDescription,
} from "./katex-auto-render";
import { chunkEXTU4WIE as selectSvgById } from "./chunk-extu4-wie";
import { chunk4BX2VUAB as applyAccessibilityMetadata } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";

type PacketBlock = {
  start?: number;
  end?: number;
  bits?: number;
  label: string;
};

type FittedPacketBlock = {
  start: number;
  end: number;
  bits?: number;
  label: string;
};

type ParsedPacket = {
  blocks: PacketBlock[];
};

type PacketWord = FittedPacketBlock[];

type PacketConfig = {
  rowHeight: number;
  paddingX: number;
  paddingY: number;
  bitWidth: number;
  bitsPerRow: number;
  showBits: boolean;
  useMaxWidth: boolean;
};

type PacketStyles = {
  byteFontSize: string;
  startByteColor: string;
  endByteColor: string;
  labelColor: string;
  labelFontSize: string;
  titleColor: string;
  titleFontSize: string;
  blockStrokeColor: string;
  blockStrokeWidth: string;
  blockFillColor: string;
};

type SvgSelection = {
  append(name: string): SvgSelection;
  attr(name: string, value: unknown): SvgSelection;
  text(value: unknown): SvgSelection;
};

type PacketRenderContext = {
  db: PacketDb;
};

const getDiagramTitle = diagramTitleAndSvgSizingHelper;
const setSvgSize = diagramTitleAndSvgSizingHelper;
const basePacketConfig = defaultDiagramConfig.packet;
const maxPacketRows = 10000;

class PacketDb {
  private packet: PacketWord[] = [];

  setAccTitle = setAccessibleTitle;
  getAccTitle = getAccessibleTitle;
  setDiagramTitle = setDiagramTitle;
  getDiagramTitle = getDiagramTitle;
  getAccDescription = getAccessibleDescription;
  setAccDescription = setAccessibleDescription;

  static {
    nameFunction(this, "PacketDB");
  }

  getConfig(): PacketConfig {
    const packetConfig = mergePacketConfig({
      ...basePacketConfig,
      ...getRuntimeDiagramConfig().packet,
    }) as PacketConfig;

    if (packetConfig.showBits) packetConfig.paddingY += 10;
    return packetConfig;
  }

  getPacket(): PacketWord[] {
    return this.packet;
  }

  pushWord(word: PacketWord): void {
    if (word.length > 0) this.packet.push(word);
  }

  clear(): void {
    clearCommonDb();
    this.packet = [];
  }
}

const populatePacketDb = nameFunction(
  (parsedPacket: ParsedPacket, packetDb: PacketDb): void => {
    applyAccessibilityMetadata(parsedPacket, packetDb);

    let previousBlockEnd = -1;
    let currentWord: PacketWord = [];
    let rowNumber = 1;
    const { bitsPerRow } = packetDb.getConfig();

    for (const sourceBlock of parsedPacket.blocks) {
      let { start, end, bits, label } = sourceBlock;

      if (start !== undefined && end !== undefined && end < start) {
        throw Error(
          `Packet block ${start} - ${end} is invalid. End must be greater than start.`,
        );
      }

      start ??= previousBlockEnd + 1;
      if (start !== previousBlockEnd + 1) {
        throw Error(
          `Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${previousBlockEnd + 1}.`,
        );
      }

      if (bits === 0) {
        throw Error(
          `Packet block ${start} is invalid. Cannot have a zero bit field.`,
        );
      }

      end ??= start + (bits ?? 1) - 1;
      bits ??= end - start + 1;
      previousBlockEnd = end;
      mermaidLogger.debug(
        `Packet block ${start} - ${previousBlockEnd} with label ${label}`,
      );

      let remainingBlock: PacketBlock | undefined = {
        start,
        end,
        bits,
        label,
      };

      while (
        remainingBlock &&
        currentWord.length <= bitsPerRow + 1 &&
        packetDb.getPacket().length < maxPacketRows
      ) {
        const [fittedBlock, overflowBlock] = getNextFittingBlock(
          remainingBlock,
          rowNumber,
          bitsPerRow,
        );

        currentWord.push(fittedBlock);
        if (fittedBlock.end + 1 === rowNumber * bitsPerRow) {
          packetDb.pushWord(currentWord);
          currentWord = [];
          rowNumber++;
        }

        remainingBlock = overflowBlock;
      }
    }

    packetDb.pushWord(currentWord);
  },
  "populate",
);

const getNextFittingBlock = nameFunction(
  (
    block: PacketBlock,
    rowNumber: number,
    bitsPerRow: number,
  ): [FittedPacketBlock, PacketBlock | undefined] => {
    if (block.start === undefined)
      throw Error("start should have been set during first phase");
    if (block.end === undefined)
      throw Error("end should have been set during first phase");
    if (block.start > block.end)
      throw Error(
        `Block start ${block.start} is greater than block end ${block.end}.`,
      );

    if (block.end + 1 <= rowNumber * bitsPerRow) {
      return [block as FittedPacketBlock, undefined];
    }

    const rowEnd = rowNumber * bitsPerRow - 1;
    const nextRowStart = rowNumber * bitsPerRow;
    return [
      {
        start: block.start,
        end: rowEnd,
        label: block.label,
        bits: rowEnd - block.start,
      },
      {
        start: nextRowStart,
        end: block.end,
        label: block.label,
        bits: block.end - nextRowStart,
      },
    ];
  },
  "getNextFittingBlock",
);

const packetParser = {
  parser: {
    yy: undefined as PacketDb | undefined,
  },
  parse: nameFunction(async (source: string): Promise<void> => {
    const parsedPacket = (await MermaidParserCore(
      "packet",
      source,
    )) as ParsedPacket;
    const packetDb = packetParser.parser?.yy;

    if (!(packetDb instanceof PacketDb)) {
      throw Error(
        "parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
      );
    }

    mermaidLogger.debug(parsedPacket);
    populatePacketDb(parsedPacket, packetDb);
  }, "parse"),
};

const drawPacketDiagram = nameFunction(
  (
    sourceText: string,
    diagramId: string,
    renderVersion: string,
    context: PacketRenderContext,
  ): void => {
    void sourceText;
    void renderVersion;

    const packetDb = context.db;
    const packetConfig = packetDb.getConfig();
    const { rowHeight, paddingY, bitWidth, bitsPerRow } = packetConfig;
    const packetRows = packetDb.getPacket();
    const diagramTitle = packetDb.getDiagramTitle();
    const rowStride = rowHeight + paddingY;
    const diagramHeight =
      rowStride * (packetRows.length + 1) - (diagramTitle ? 0 : rowHeight);
    const diagramWidth = bitWidth * bitsPerRow + 2;
    const svg = selectSvgById(diagramId);

    svg.attr("viewbox", `0 0 ${diagramWidth} ${diagramHeight}`);
    setSvgSize(svg, diagramHeight, diagramWidth, packetConfig.useMaxWidth);

    for (const [rowIndex, rowBlocks] of packetRows.entries()) {
      drawPacketRow(svg, rowBlocks, rowIndex, packetConfig);
    }

    svg
      .append("text")
      .text(diagramTitle)
      .attr("x", diagramWidth / 2)
      .attr("y", diagramHeight - rowStride / 2)
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")
      .attr("class", "packetTitle");
  },
  "draw",
);

const drawPacketRow = nameFunction(
  (
    svg: SvgSelection,
    rowBlocks: PacketWord,
    rowIndex: number,
    {
      rowHeight,
      paddingX,
      paddingY,
      bitWidth,
      bitsPerRow,
      showBits,
    }: PacketConfig,
  ): void => {
    const rowGroup = svg.append("g");
    const rowY = rowIndex * (rowHeight + paddingY) + paddingY;

    for (const block of rowBlocks) {
      const blockX = (block.start % bitsPerRow) * bitWidth + 1;
      const blockWidth = (block.end - block.start + 1) * bitWidth - paddingX;

      rowGroup
        .append("rect")
        .attr("x", blockX)
        .attr("y", rowY)
        .attr("width", blockWidth)
        .attr("height", rowHeight)
        .attr("class", "packetBlock");
      rowGroup
        .append("text")
        .attr("x", blockX + blockWidth / 2)
        .attr("y", rowY + rowHeight / 2)
        .attr("class", "packetLabel")
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .text(block.label);

      if (!showBits) continue;

      const isSingleBitBlock = block.end === block.start;
      const byteLabelY = rowY - 2;
      rowGroup
        .append("text")
        .attr("x", blockX + (isSingleBitBlock ? blockWidth / 2 : 0))
        .attr("y", byteLabelY)
        .attr("class", "packetByte start")
        .attr("dominant-baseline", "auto")
        .attr("text-anchor", isSingleBitBlock ? "middle" : "start")
        .text(block.start);

      if (!isSingleBitBlock) {
        rowGroup
          .append("text")
          .attr("x", blockX + blockWidth)
          .attr("y", byteLabelY)
          .attr("class", "packetByte end")
          .attr("dominant-baseline", "auto")
          .attr("text-anchor", "end")
          .text(block.end);
      }
    }
  },
  "drawWord",
);

const packetRenderer = {
  draw: drawPacketDiagram,
};

const defaultPacketStyles: PacketStyles = {
  byteFontSize: "10px",
  startByteColor: "black",
  endByteColor: "black",
  labelColor: "black",
  labelFontSize: "12px",
  titleColor: "black",
  titleFontSize: "14px",
  blockStrokeColor: "black",
  blockStrokeWidth: "1",
  blockFillColor: "#efefef",
};

function createPacketDiagramDefinition() {
  return {
    parser: packetParser,
    get db() {
      return new PacketDb();
    },
    renderer: packetRenderer,
    styles: nameFunction(
      ({ packet }: { packet?: Partial<PacketStyles> } = {}) => {
        const styles = mergePacketConfig(
          defaultPacketStyles,
          packet,
        ) as PacketStyles;
        return `
	.packetByte {
		font-size: ${styles.byteFontSize};
	}
	.packetByte.start {
		fill: ${styles.startByteColor};
	}
	.packetByte.end {
		fill: ${styles.endByteColor};
	}
	.packetLabel {
		fill: ${styles.labelColor};
		font-size: ${styles.labelFontSize};
	}
	.packetTitle {
		fill: ${styles.titleColor};
		font-size: ${styles.titleFontSize};
	}
	.packetBlock {
		stroke: ${styles.blockStrokeColor};
		stroke-width: ${styles.blockStrokeWidth};
		fill: ${styles.blockFillColor};
	}
	`;
      },
      "styles",
    ),
  };
}

const packetDiagramDefinition = createPacketDiagramDefinition();

export { packetDiagramDefinition as DiagramS2PKOQOG };
