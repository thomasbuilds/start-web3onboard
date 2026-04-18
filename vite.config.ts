import { defineConfig } from "vite";
import { nitroV2Plugin } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [solidStart({ ssr: true }), tailwindcss(), nitroV2Plugin()],
});
