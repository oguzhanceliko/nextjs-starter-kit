const path = require("path");

module.exports = {
  "**/*.{js,jsx,ts,tsx}": (filenames) => {
    const eslintCommand = `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`;
    const prettierCommand = `npm run prettier:fix --ignore-unknown ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" ")}`;
    return [prettierCommand, eslintCommand];
  },
  "**/*.{md,json}": (filenames) => {
    const prettierCommand = `npm run prettier:fix --ignore-unknown ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" ")}`;
    return [prettierCommand];
  },
};
