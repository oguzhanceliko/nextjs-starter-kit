const path = require("path");

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
    `npm run prettier:fix --ignore-unknown ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`;

module.exports = {
    ".{js,jsx,ts,tsx}": [buildPrettierCommand, buildEslintCommand],
    ".{md,json}": [buildPrettierCommand],
};