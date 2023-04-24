const sortGroups = {
  groups: [
    ["^react", "^react-dom", "^antd", "^@?\\w"],
    // Internal packages
    ["^(@|@ui|components|utils|config|vendored-lib)(/.*|$)"],
    // Side effect imports
    ["^\\u0000"],
    // Parent imports
    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
    // Other relative imports
    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
    // Style imports.
    ["^.+\\.s?css$", "^.+\\.less$"],
  ],
};

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",

    "prettier",
    "prettier/@typescript-eslint",
  ],

  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "json", "react", "react-hooks", "simple-import-sort"],
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
  },
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "@typescript-eslint/no-inferrable-types": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    curly: ["error", "all"],
    eqeqeq: "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "func-call-spacing": ["error", "never"],
    "import/default": "off",
    "import/export": "off",
    "import/first": "error",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": ["error", { ignore: [".svg$", "@curi/types", "^@types/"] }],
    "import/order": "off",
    "key-spacing": ["error", { beforeColon: false }],
    "no-alert": "error",
    "no-eval": "error",
    "no-multi-spaces": "warn",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "react/display-name": "warn",
    "react/jsx-fragments": "error",
    "react/no-danger": "error",
    "react/prop-types": "off",
    "sort-imports": "off",
    "simple-import-sort/imports": ["error", sortGroups],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "spaced-comment": "off",
      },
    },
  ],
};
