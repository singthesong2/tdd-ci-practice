import { sum } from "./sum.js";

function check(name, run, expected) {
  const actual = run();
  if (!Object.is(actual, expected)) {
    throw new Error("${name}:${actual}!==${expected}");
  }
  console.log("PASS", name);
}

check("1과 2를 더하면 3", () => sum(1, 2), 3);
