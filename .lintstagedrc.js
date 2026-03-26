module.exports = {
  //Lint e Prettify TS and JS files
  "*.{js, jsx, ts, tsx}": (filenames) => [
    `prettier --write ${filenames.join(" ")}`,
    `eslint --fix ${filenames.join(" ")}`,
  ],
};
