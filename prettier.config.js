/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    trailingComma: "es5",
    printWidth: 120,
    overrides: [{ files: "*.{json,html}", options: { tabWidth: 2 } }],
};

export default config;
