import js from "@eslint/js"
import nextPlugin from "@next/eslint-plugin-next"
import { globalIgnores } from 'eslint/config';
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      "react": pluginReact
    },

    rules: {
      ...pluginReact.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      // Se você estiver usando o App Router e quiser as regras de Core Web Vitals, descomente a linha abaixo:
      // ...nextPlugin.configs['core-web-vitals'].rules,
    },
    languageOptions: { 
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
globalIgnores([
    'dist/',
    'build/',
    '.vscode/',
    '.history/',
    'coverage/',
    'node_modules/',
    'public/',
    '.husky/',
    '.next/'
  ]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
     languageOptions: { 
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  
]

/*
Lista de commits:

build: construir
chore: tarefa
ci: ci?
docs: documentos
feat: façanha
fix: consertar
perf: perfeito
refactor: refatorar
revert: reverter
style: estilo
test: teste
*/
