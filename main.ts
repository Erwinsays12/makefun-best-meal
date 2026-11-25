// The Best Meal You Ever Had — make.fun entry
// Writes a single sentence (at most 200 characters) about the best meal
// the entrant ever had to /output/entry.txt.
//
// The sentence is a fixed, hand-written memory: one concrete moment,
// named dish, place, texture and smell, built to stand alone and read
// aloud well. It is deliberately constant — the program's job is to
// deliver exactly this sentence, deterministically, every run.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "I still taste my grandmother's rendang \u2014 beef falling apart in dark coconut gravy, eaten cross-legged on her kitchen floor with rice so hot it fogged my glasses.";

if (SENTENCE.length > 200) {
  throw new Error(`Sentence is ${SENTENCE.length} characters, over the 200 limit.`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("Sentence must not be empty or only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
