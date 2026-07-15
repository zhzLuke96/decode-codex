// Restored from ref/webview/assets/chunk-LHMN2FUI-IYfQ4Xix.js
// Vendored Mermaid radar diagram service module restored from the Codex webview bundle.
import {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
  chunkFPAJGGOCU,
} from "./mermaid-parser-runtime-fpajggoc";

class RadarTokenBuilder extends chunkFPAJGGOCT {
  static {
    chunkFPAJGGOCF(this, "RadarTokenBuilder");
  }
  constructor() {
    super(["radar-beta"]);
  }
}

const radarServiceModule = {
  parser: {
    TokenBuilder: chunkFPAJGGOCF(() => new RadarTokenBuilder(), "TokenBuilder"),
    ValueConverter: chunkFPAJGGOCF(
      () => new chunkFPAJGGOCI(),
      "ValueConverter",
    ),
  },
};

function createRadarServices(parserConfig = chunkFPAJGGOCP) {
  const sharedServices = chunkFPAJGGOCM(
    chunkFPAJGGOCG(parserConfig),
    chunkFPAJGGOCS,
  );
  const radarServices = chunkFPAJGGOCM(
    chunkFPAJGGOCH({
      shared: sharedServices,
    }),
    chunkFPAJGGOCU,
    radarServiceModule,
  );
  sharedServices.ServiceRegistry.register(radarServices);

  return {
    shared: sharedServices,
    Radar: radarServices,
  };
}
function initChunkLHMN2FUI(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createRadarServices, "createRadarServices");
export {
  createRadarServices,
  createRadarServices as chunkLHMN2FUIN,
  initChunkLHMN2FUI,
  radarServiceModule,
  radarServiceModule as chunkLHMN2FUIT,
};
