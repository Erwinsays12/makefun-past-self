import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to my past self. Line one warns about one specific moment;
// line two says why that moment mattered and what changed because of it.
const LINE_1 =
  "Don't send Maya the 2 a.m. text that starts 'I miss us' — delete it before your thumb finds Send.";
const LINE_2 =
  "She leaves it on read, and you spend the next year checking a phone that already told you the truth.";

const entry = `${LINE_1}\n${LINE_2}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
