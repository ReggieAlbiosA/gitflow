const { runPipeline } = require('./runPipeline');

function createPipeline(steps = []) {
  if (!Array.isArray(steps)) {
    throw new Error('createPipeline expects an array of steps');
  }

  // Return a function that executes the steps with a given context
  return async function execute(initialContext) {
    if (!initialContext || typeof initialContext !== 'object') {
      throw new Error('Pipeline execution requires an initial context object');
    }
    return runPipeline(initialContext, steps);
  };
}

module.exports = {
  createPipeline,
};
