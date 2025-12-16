// Minimal stream utils foundation.
// For now, this is a placeholder if we need stream composition later.

const { pipeline } = require('stream/promises');

module.exports = {
  pipeline, // Re-exporting Node's stream/promises pipeline for convenience
};
