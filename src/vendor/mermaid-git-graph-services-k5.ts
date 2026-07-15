// Restored from ref/webview/assets/chunk-67CJDMHE-x2DGRTFj.js
// Chunk67CJDMHE chunk restored from the Codex webview bundle.
import {
  chunkK5T4RW27A,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27I,
  chunkK5T4RW27M,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";

class GitGraphTokenBuilder extends chunkK5T4RW27T {
  static {
    chunkK5T4RW27M(this, "GitGraphTokenBuilder");
  }
  constructor() {
    super(["gitGraph"]);
  }
}

const gitGraphServiceModule = {
  parser: {
    TokenBuilder: chunkK5T4RW27M(
      () => new GitGraphTokenBuilder(),
      "TokenBuilder",
    ),
    ValueConverter: chunkK5T4RW27M(
      () => new chunkK5T4RW27I(),
      "ValueConverter",
    ),
  },
};

function createGitGraphServices(parserConfig = chunkK5T4RW27H) {
  const sharedServices = chunkK5T4RW27G(
    chunkK5T4RW27V(parserConfig),
    chunkK5T4RW27S,
  );
  const gitGraphServices = chunkK5T4RW27G(
    chunkK5T4RW27Underscore({
      shared: sharedServices,
    }),
    chunkK5T4RW27A,
    gitGraphServiceModule,
  );
  sharedServices.ServiceRegistry.register(gitGraphServices);

  return {
    shared: sharedServices,
    GitGraph: gitGraphServices,
  };
}
function initChunk67CJDMHE(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createGitGraphServices, "createGitGraphServices");
export {
  createGitGraphServices,
  createGitGraphServices as chunk67CJDMHEN,
  gitGraphServiceModule,
  gitGraphServiceModule as chunk67CJDMHET,
  initChunk67CJDMHE,
};
