/**
 * Creates a step that mocks format conversion.
 * @param {string} targetFormat - Target extension/format (e.g., 'jpg', 'json').
 */
function convertTo(targetFormat) {
  return async function convertToStep(context) {
    const { fileName } = context;
    
    if (!fileName) {
      throw new Error('convertTo requires "fileName" in context');
    }

    const parts = fileName.split('.');
    const baseName = parts.length > 1 ? parts.slice(0, -1).join('.') : fileName;
    const newFileName = `${baseName}.${targetFormat}`;

    return {
      fileName: newFileName,
      format: targetFormat
    };
  };
}

module.exports = convertTo;
