// Restored from ref/webview/assets/chunk-O7ZBX7Z2-YEixComM.js
// Mermaid architecture diagram service module restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCM,
  chunkFPAJGGOCN,
  chunkFPAJGGOCP,
  chunkFPAJGGOCR,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var ArchitectureTokenBuilder = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "ArchitectureTokenBuilder");
    }
    constructor() {
      super(["architecture"]);
    }
  },
  ArchitectureValueConverter = class extends chunkFPAJGGOCN {
    static {
      chunkFPAJGGOCF(this, "ArchitectureValueConverter");
    }
    runCustomConverter(token, text, context) {
      if (token.name === "ARCH_ICON") return text.replace(/[()]/g, "").trim();
      if (token.name === "ARCH_TEXT_ICON") return text.replace(/["()]/g, "");
      if (token.name === "ARCH_TITLE") return text.replace(/[[\]]/g, "").trim();
    }
  },
  architectureServiceModule = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new ArchitectureTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new ArchitectureValueConverter(),
        "ValueConverter",
      ),
    },
  };
function createArchitectureServices(parserConfig = chunkFPAJGGOCP) {
  let sharedServices = chunkFPAJGGOCM(
      chunkFPAJGGOCG(parserConfig),
      chunkFPAJGGOCS,
    ),
    architectureServices = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: sharedServices,
      }),
      chunkFPAJGGOCR,
      architectureServiceModule,
    );
  return (
    sharedServices.ServiceRegistry.register(architectureServices),
    {
      shared: sharedServices,
      Architecture: architectureServices,
    }
  );
}
function initChunkO7ZBX7Z2(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createArchitectureServices, "createArchitectureServices");
export {
  createArchitectureServices,
  createArchitectureServices as chunkO7ZBX7Z2N,
  initChunkO7ZBX7Z2,
  architectureServiceModule,
  architectureServiceModule as chunkO7ZBX7Z2T,
};
