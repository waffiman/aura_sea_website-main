import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function resolveBase(): string {
  if (process.env.GITHUB_PAGES_BASE) return process.env.GITHUB_PAGES_BASE;
  if (
    process.env.GITHUB_ACTIONS === "true" &&
    process.env.GITHUB_REPOSITORY
  ) {
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    if (repo) return `/${repo}/`;
  }
  return "/";
}

const pagesBase = resolveBase();

export default defineConfig({
  base: pagesBase,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
