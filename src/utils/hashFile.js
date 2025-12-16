const crypto = require('crypto');

/**
 * Calculates SHA-256 hash of a file (mocked via string input for now).
 * In a real scenario, this would read the file stream.
 * @param {string} content - File content to hash.
 */
async function hashFile(content) {
  if (typeof content !== 'string') {
    throw new Error('hashFile expects string content');
  }
  return crypto.createHash('sha256').update(content).digest('hex');
}

module.exports = hashFile;
