import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Disable ESLint rules that conflict with Prettier. Must come after the configs it overrides.
  prettier,
  // Project rules (ported from the legacy .eslintrc).
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "func-call-spacing": "off",
      "no-useless-escape": "warn",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["error"]
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off"
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Project ignores:
    "**/serviceWorker.ts",
    "**/react-app-env.d.ts",
    "config/**",
    "scripts/**",
    "jest.config.js",
    "coverage/**",
    ".babelrc"
  ])
]);

export default eslintConfig;
