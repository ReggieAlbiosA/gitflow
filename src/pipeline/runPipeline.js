const { PipelineError } = require("./errors");

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

      // Steps must return an object (or null/undefined to skip updates)
      // Returning primitives causes silent failures and inconsistent context state
      if (result !== null && result !== undefined) {
        if (typeof result !== "object" || Array.isArray(result)) {
          throw new Error(
            `Step "${
              step.name || "anonymous"
            }" must return an object or null/undefined, ` +
              `but returned ${typeof result}. This causes context merge failures.`
          );
        }
        currentContext = { ...currentContext, ...result };
      }
    } catch (error) {
      throw new PipelineError(
        `Step failed: ${step.name || "anonymous"}`,
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
