// Restored from ref/webview/assets/chunk-2KRD3SAO-DgftbvIN.js
// Chunk2KRD3SAO chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27U,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";

class RadarTokenBuilder extends chunkK5T4RW27T {
  static {
    chunkK5T4RW27M(this, "RadarTokenBuilder");
  }
  constructor() {
    super(["radar-beta"]);
  }
}

const radarServiceModule = {
  parser: {
    TokenBuilder: chunkK5T4RW27M(() => new RadarTokenBuilder(), "TokenBuilder"),
    ValueConverter: chunkK5T4RW27M(
      () => new chunkK5T4RW27I(),
      "ValueConverter",
    ),
  },
};

function createRadarServices(parserConfig = chunkK5T4RW27H) {
  const sharedServices = chunkK5T4RW27G(
    chunkK5T4RW27V(parserConfig),
    chunkK5T4RW27S,
  );
  const radarServices = chunkK5T4RW27G(
    chunkK5T4RW27Underscore({
      shared: sharedServices,
    }),
    chunkK5T4RW27U,
    radarServiceModule,
  );
  sharedServices.ServiceRegistry.register(radarServices);

  return {
    shared: sharedServices,
    Radar: radarServices,
  };
}
function initChunk2KRD3SAO(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createRadarServices, "createRadarServices");
export {
  createRadarServices,
  createRadarServices as chunk2KRD3SAON,
  initChunk2KRD3SAO,
  radarServiceModule,
  radarServiceModule as chunk2KRD3SAOT,
};
