import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [nextPlugin.configs["core-web-vitals"], reactHooks.configs.flat.recommended],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
]);
