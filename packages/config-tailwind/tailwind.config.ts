import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "../../apps/web/**/*.tsx",
    "../../packages/ui/**/*.tsx",
    "../../node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
  ],
  variants: {},
};

export default config;
