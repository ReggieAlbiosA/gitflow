const { PipelineError } = require('../pipeline/errors');

/**
 * Creates a step that validates file size.
 * @param {number} maxSizeInBytes - Maximum allowed size in bytes.
 */
function validateSize(maxSizeInBytes) {
  return async function validateSizeStep(context) {
    const { fileSize } = context;
    
    if (typeof fileSize !== 'number') {
      throw new Error('validateSize requires "fileSize" in context');
    }

    if (fileSize > maxSizeInBytes) {
      throw new Error(`File size ${fileSize} exceeds limit of ${maxSizeInBytes}`);
    }
    
    return context;
  };
}

module.exports = validateSize;
