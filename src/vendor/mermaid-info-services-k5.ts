// Restored from ref/webview/assets/chunk-KGLVRYIC-DB19tH4Q.js
// ChunkKGLVRYIC chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27O,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";

class InfoTokenBuilder extends chunkK5T4RW27T {
  static {
    chunkK5T4RW27M(this, "InfoTokenBuilder");
  }
  constructor() {
    super(["info", "showInfo"]);
  }
}

const infoServiceModule = {
  parser: {
    TokenBuilder: chunkK5T4RW27M(() => new InfoTokenBuilder(), "TokenBuilder"),
    ValueConverter: chunkK5T4RW27M(
      () => new chunkK5T4RW27I(),
      "ValueConverter",
    ),
  },
};

function createInfoServices(parserConfig = chunkK5T4RW27H) {
  const sharedServices = chunkK5T4RW27G(
    chunkK5T4RW27V(parserConfig),
    chunkK5T4RW27S,
  );
  const infoServices = chunkK5T4RW27G(
    chunkK5T4RW27Underscore({
      shared: sharedServices,
    }),
    chunkK5T4RW27O,
    infoServiceModule,
  );
  sharedServices.ServiceRegistry.register(infoServices);

  return {
    shared: sharedServices,
    Info: infoServices,
  };
}
chunkK5T4RW27M(createInfoServices, "createInfoServices");
export function initChunkKGLVRYIC(): void {}
export {
  createInfoServices,
  createInfoServices as chunkKGLVRYICN,
  infoServiceModule,
  infoServiceModule as chunkKGLVRYICT,
};
