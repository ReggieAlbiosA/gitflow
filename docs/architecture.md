# Architecture

## Core Concepts

### Pipeline

A sequence of processing steps. The pipeline engine executes steps sequentially, passing a **Context** object from one step to the next.

### Step

A simple function that:

1. Accepts the current **Context**.
2. Performs an operation (side-effect or computation).
3. Returns a modification to the Context (or the new Context).
4. Can be async.

### Context

A plain JavaScript object holding the state of the file being processed.
Minimal keys expected by some steps:

- `fileName`: String
- `fileSize`: Number (bytes)
- `content`: Buffer or String (optional)

## Data Flow

`createPipeline([step1, step2])` -> `pipelineExecutor(initialContext)`

Context flows:
`initialContext` -> `step1` -> `context'` -> `step2` -> `finalContext`
