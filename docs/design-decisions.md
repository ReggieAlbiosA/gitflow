# Design Decisions

## 1. Functional Composition

We chose a factory pattern (`createPipeline`) returning an async function. This allows pipelines to be reusable and distinct from their execution state.

## 2. Context Object

Instead of passing loose arguments or strict classes, we pass a flexible Context object. This allows steps to attach arbitrary metadata (like calculated hashes, format info) without breaking the signature.

## 3. Minimal Dependencies

Core logic uses zero external dependencies. This ensures the library is lightweight and easy to audit.

## 4. Async by Default

All steps are treated as async (awaited in the runner). This handles I/O bound operations (file reading, API calls) naturally.
