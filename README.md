# smart-file-pipeline

A minimal, framework-agnostic JavaScript library for composable file processing pipelines.

## Features

- **Composable**: Chain small, focused steps.
- **Async**: Built for I/O heavy operations.
- **Context-aware**: Pass state cleanly between steps.

## Usage

```javascript
const { createPipeline, steps } = require("./src");

const myPipeline = createPipeline([
  steps.validateSize(1024 * 1024), // 1MB limit
  steps.rename((name) => "processed_" + name),
  steps.convertTo("json"),
]);

(async () => {
  try {
    const result = await myPipeline({
      fileName: "data.txt",
      fileSize: 500,
      content: "hello world",
    });
    console.log("Result:", result);
  } catch (err) {
    console.error("Pipeline failed:", err);
  }
})();
```

## Documentation

See [docs/architecture.md](docs/architecture.md) for details.
