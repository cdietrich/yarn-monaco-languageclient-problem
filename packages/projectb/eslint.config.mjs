import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import base from "../../eslint.config.mjs";

export default [
    ...base, {
        ignores: ["syntaxes/*"],
    }, {
        plugins: {
            import: fixupPluginRules(_import),
        },

        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",

            parserOptions: {
                project: "tsconfig.json",
            },
        },

        rules: {
            "import/no-relative-parent-imports": "error",
        },
    }];