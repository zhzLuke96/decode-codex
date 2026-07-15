// Restored from ref/webview/assets/chunk-LBM3YZW2-C3vrLyXI.js
// Vendored Mermaid info diagram service module restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCO,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";

class InfoTokenBuilder extends chunkFPAJGGOCT {
  static {
    chunkFPAJGGOCF(this, "InfoTokenBuilder");
  }
  constructor() {
    super(["info", "showInfo"]);
  }
}

const infoServiceModule = {
  parser: {
    TokenBuilder: chunkFPAJGGOCF(() => new InfoTokenBuilder(), "TokenBuilder"),
    ValueConverter: chunkFPAJGGOCF(
      () => new chunkFPAJGGOCI(),
      "ValueConverter",
    ),
  },
};

function createInfoServices(parserConfig = chunkFPAJGGOCP) {
  const sharedServices = chunkFPAJGGOCM(
    chunkFPAJGGOCG(parserConfig),
    chunkFPAJGGOCS,
  );
  const infoServices = chunkFPAJGGOCM(
    chunkFPAJGGOCH({
      shared: sharedServices,
    }),
    chunkFPAJGGOCO,
    infoServiceModule,
  );
  sharedServices.ServiceRegistry.register(infoServices);

  return {
    shared: sharedServices,
    Info: infoServices,
  };
}
function initChunkLBM3YZW2() {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createInfoServices, "createInfoServices");
export {
  createInfoServices,
  createInfoServices as chunkLBM3YZW2N,
  infoServiceModule,
  infoServiceModule as chunkLBM3YZW2T,
  initChunkLBM3YZW2,
};
