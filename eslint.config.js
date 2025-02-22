import vuePlugin from "eslint-plugin-vue";
import { defineConfigWithVueTs } from "@vue/eslint-config-typescript";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfigWithVueTs(
  vuePlugin.configs["flat/recommended"],
  eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Vue specific rules
      "vue/attribute-hyphenation": [
        "error",
        "never",
        {
          ignore: [],
        },
      ],
      "vue/v-on-event-hyphenation": [
        "error",
        "never",
        {
          autofix: false,
          ignore: [],
        },
      ],
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: [],
        },
      ],

      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-empty-interface": ["off"],
      "@typescript-eslint/no-non-null-assertion": ["off"],
      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowObjectTypes: "always",
        },
      ],
      "@typescript-eslint/no-empty-object-type": ["off"],
      "@typescript-eslint/ban-ts-comment": ["off"],
      "@stylistic/jsx-one-expression-per-line": ["off"],

      // Custom rules
      "no-debugger": "error",
      semi: "off",
    },
  }
);
