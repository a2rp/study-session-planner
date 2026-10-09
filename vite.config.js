import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/study-session-planner/",
    build: { sourcemap: false },
    plugins: [react()],
});
