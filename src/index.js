const { createPipeline } = require('./pipeline/createPipeline');
const { runPipeline } = require('./pipeline/runPipeline');
const { PipelineError } = require('./pipeline/errors');
const steps = require('./steps');
const utils = require('./utils/hashFile'); // simplistic export

module.exports = {
  createPipeline,
  runPipeline, // Advanced usage
  PipelineError,
  steps,
  utils: {
    hashFile: utils,
  },
};
