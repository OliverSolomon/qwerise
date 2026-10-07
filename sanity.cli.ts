import { defineCliConfig } from "sanity/cli";

// Used by `npx sanity deploy` (hosted Studio at https://qwerise.sanity.studio)
// and `npx sanity schema deploy`.
export default defineCliConfig({
  api: { projectId: "lqjwtusj", dataset: "production" },
  studioHost: "qwerise",
});
