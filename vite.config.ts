import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// SKIP_NITRO=1 is set by the dev script so Nitro's Vercel SSR bundle
// compilation is bypassed in development (it consumes 4GB+ RAM → OOM crash).
const skipNitro = process.env.SKIP_NITRO === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
  vite: {
    build: {
      sourcemap: false,
    },
    plugins: [
      tsconfigPaths(),
      tailwindcss(),
      // Only run Nitro during production builds
      ...(!skipNitro ? [nitro({ preset: "vercel" })] : []),
    ],
  },
});
