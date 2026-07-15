// Restored from ref/webview/assets/chunk-76Q3JFCE-CQZKJ6cQ.js
// Vendored Mermaid packet diagram service module restored from the Codex webview bundle.
import {
  chunkFPAJGGOCC,
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";

class PacketTokenBuilder extends chunkFPAJGGOCT {
  static {
    chunkFPAJGGOCF(this, "PacketTokenBuilder");
  }
  constructor() {
    super(["packet"]);
  }
}

const packetServiceModule = {
  parser: {
    TokenBuilder: chunkFPAJGGOCF(
      () => new PacketTokenBuilder(),
      "TokenBuilder",
    ),
    ValueConverter: chunkFPAJGGOCF(
      () => new chunkFPAJGGOCI(),
      "ValueConverter",
    ),
  },
};

function createPacketServices(parserConfig = chunkFPAJGGOCP) {
  const sharedServices = chunkFPAJGGOCM(
    chunkFPAJGGOCG(parserConfig),
    chunkFPAJGGOCS,
  );
  const packetServices = chunkFPAJGGOCM(
    chunkFPAJGGOCH({
      shared: sharedServices,
    }),
    chunkFPAJGGOCC,
    packetServiceModule,
  );
  sharedServices.ServiceRegistry.register(packetServices);

  return {
    shared: sharedServices,
    Packet: packetServices,
  };
}
function initChunk76Q3JFCE(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createPacketServices, "createPacketServices");
export {
  createPacketServices,
  createPacketServices as chunk76Q3JFCEN,
  initChunk76Q3JFCE,
  packetServiceModule,
  packetServiceModule as chunk76Q3JFCET,
};
