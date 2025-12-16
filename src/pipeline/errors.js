class PipelineError extends Error {
  constructor(message, stepName, originalError) {
    super(message);
    this.name = 'PipelineError';
    this.stepName = stepName;
    this.originalError = originalError;
  }
}

module.exports = {
  PipelineError,
};
