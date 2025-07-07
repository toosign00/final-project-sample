import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-empty": "error",
      "no-param-reassign": "error",
      "prefer-template": "error",
      "no-useless-else": "error",
      "no-void": "error",
      "no-delete-var": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "react/jsx-key": "error",
      "react/jsx-no-target-blank": "error",
      "react/button-has-type": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/anchor-is-valid": "error",
      "react/self-closing-comp": "error",
    },
  },
  {
    files: ["*.config.js", "*.config.ts", "vite.config.*", "next.config.*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*.test.*", "**/*.spec.*", "src/test/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-param-reassign": "off",
    },
  },
  {
    files: ["**/*.d.ts", "src/vite-env.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
