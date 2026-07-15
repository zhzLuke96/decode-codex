// Restored from ref/webview/assets/chunk-S6J4BHB3-Dk5nTTZ4.js
// Vendored Mermaid git graph service module restored from the Codex webview bundle.
import {
  chunkFPAJGGOCA,
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCI,
  chunkFPAJGGOCM,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";

class GitGraphTokenBuilder extends chunkFPAJGGOCT {
  static {
    chunkFPAJGGOCF(this, "GitGraphTokenBuilder");
  }
  constructor() {
    super(["gitGraph"]);
  }
}

const gitGraphServiceModule = {
  parser: {
    TokenBuilder: chunkFPAJGGOCF(
      () => new GitGraphTokenBuilder(),
      "TokenBuilder",
    ),
    ValueConverter: chunkFPAJGGOCF(
      () => new chunkFPAJGGOCI(),
      "ValueConverter",
    ),
  },
};

function createGitGraphServices(parserConfig = chunkFPAJGGOCP) {
  const sharedServices = chunkFPAJGGOCM(
    chunkFPAJGGOCG(parserConfig),
    chunkFPAJGGOCS,
  );
  const gitGraphServices = chunkFPAJGGOCM(
    chunkFPAJGGOCH({
      shared: sharedServices,
    }),
    chunkFPAJGGOCA,
    gitGraphServiceModule,
  );
  sharedServices.ServiceRegistry.register(gitGraphServices);

  return {
    shared: sharedServices,
    GitGraph: gitGraphServices,
  };
}
function initChunkS6J4BHB3(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createGitGraphServices, "createGitGraphServices");
export {
  createGitGraphServices,
  createGitGraphServices as chunkS6J4BHB3N,
  gitGraphServiceModule,
  gitGraphServiceModule as chunkS6J4BHB3T,
  initChunkS6J4BHB3,
};
