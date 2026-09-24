import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

// Dev server (unlike static hosts / GitHub Pages) doesn't auto-resolve
// "index.html" for a directory URL. This makes /old/1/ behave the same
// in dev as it already does in production.
function serveVersionedIndex() {
  return {
    name: "serve-versioned-index",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/old/") && req.url.endsWith("/")) {
          const filePath = path.join(
            server.config.publicDir,
            req.url,
            "index.html",
          );
          if (fs.existsSync(filePath)) {
            req.url += "index.html";
          }
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project page is hosted at the /portfolio/ subpath, not root.
  // This only applies to a regular `vite build` (pnpm build / predeploy). Old
  // snapshots under public/old/<n>/ are unaffected, since
  // create-version-snapshot.mjs overrides this base with --base=./ (relative)
  // because they're nested deeper.
  base: "/portfolio/",
  plugins: [react(), tailwindcss(), serveVersionedIndex()],
  server: {
    allowedHosts: [
      "deeply-lenient-mammoth.ngrok-free.app", // ngrok
    ],
  },
});
