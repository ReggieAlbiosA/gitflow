/**
 * Creates a step that renames a file (changes basename).
 * @param {function(string): string} namerFunction - Function that takes current name and returns new name.
 */
function rename(namerFunction) {
  return async function renameStep(context) {
    const { fileName } = context;
    
    if (!fileName) {
      throw new Error('rename requires "fileName" in context');
    }

    const newFileName = namerFunction(fileName);

    return {
      fileName: newFileName
    };
  };
}

module.exports = rename;
