/**
 * Concatenates paths into SCSS @import at-rules
 * @param imports {Array<string>}
 * @returns {string}
 */
const scssImportChain = (imports = []) => {
  return imports.map(path => `@import '${path}';`).join('');
};

module.exports = {
  scssImportChain,
};
