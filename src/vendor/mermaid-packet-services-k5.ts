// Restored from ref/webview/assets/chunk-FOC6F5B3-BxacOS_T.js
// ChunkFOC6F5B3 chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27C,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";

class PacketTokenBuilder extends chunkK5T4RW27T {
  static {
    chunkK5T4RW27M(this, "PacketTokenBuilder");
  }
  constructor() {
    super(["packet"]);
  }
}

const packetServiceModule = {
  parser: {
    TokenBuilder: chunkK5T4RW27M(
      () => new PacketTokenBuilder(),
      "TokenBuilder",
    ),
    ValueConverter: chunkK5T4RW27M(
      () => new chunkK5T4RW27I(),
      "ValueConverter",
    ),
  },
};

function createPacketServices(parserConfig = chunkK5T4RW27H) {
  const sharedServices = chunkK5T4RW27G(
    chunkK5T4RW27V(parserConfig),
    chunkK5T4RW27S,
  );
  const packetServices = chunkK5T4RW27G(
    chunkK5T4RW27Underscore({
      shared: sharedServices,
    }),
    chunkK5T4RW27C,
    packetServiceModule,
  );
  sharedServices.ServiceRegistry.register(packetServices);

  return {
    shared: sharedServices,
    Packet: packetServices,
  };
}
function initChunkFOC6F5B3(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createPacketServices, "createPacketServices");
export {
  createPacketServices,
  createPacketServices as chunkFOC6F5B3N,
  initChunkFOC6F5B3,
  packetServiceModule,
  packetServiceModule as chunkFOC6F5B3T,
};
