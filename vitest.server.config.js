import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["server/**/*.test.js"],
    setupFiles: ["./server/test/setup.js"],
    fileParallelism: false,
  },
});
