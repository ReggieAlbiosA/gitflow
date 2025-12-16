const { PipelineError } = require('./errors');

async function runPipeline(context, steps) {
  let currentContext = { ...context };

  for (const step of steps) {
    try {
      // Each step receives the current context and returns a new context (or modifies it)
      // For immutability/cleanliness, we'll assume steps return updates or we merge the result.
      // Design decision: Step returns a promise that resolves to the new context properties
      // or the modified context itself. To keep it simple, let's assume steps take
      // (context) and return Promise<context>.
      
      const result = await step(currentContext);
      
      // If step returns something, we update the context.
      if (result && typeof result === 'object') {
        currentContext = { ...currentContext, ...result };
      }
    } catch (error) {
      throw new PipelineError(
        `Step failed: ${step.name || 'anonymous'}`,
        step.name,
        error
      );
    }
  }

  return currentContext;
}

module.exports = {
  runPipeline,
};
