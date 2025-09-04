import { defineBddConfig } from "playwright-bdd";

export default defineBddConfig({
  features: ["features/**/*.feature"],
  steps: ["steps/**/*.ts"],
  outputDir: "tests-bdd" // les .spec.ts générés automatiquement
});
