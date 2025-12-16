# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.3](https://github.com/ReggieAlbiosA/gitflow/compare/v0.1.1...v0.1.3) (2025-12-16)


### Bug Fixes

* handle non-object step return values in pipeline context merge ([0a11e3c](https://github.com/ReggieAlbiosA/gitflow/commit/0a11e3c76fada08a143eddcb2d6efab4b6567980))

### 0.1.2 (2025-12-16)

### Bug Fixes

- **pipeline:** fix context merging when steps return non-object values
  - Prevents silent failures and data loss when steps accidentally return primitives
  - Adds validation to ensure steps return proper context objects
  - Fixes production crashes caused by inconsistent context state

### 0.1.1 (2025-12-16)

### Features

- **core:** implement pipeline execution engine ([d9bba76](https://github.com/ReggieAlbiosA/gitflow/commit/d9bba76fabc2dc7d1b55ca90e398763b592a6b17))
- expose public api ([a4d71e6](https://github.com/ReggieAlbiosA/gitflow/commit/a4d71e605109e8faa97187228a1823785defc8e2))
- **steps:** add standard steps ([266852f](https://github.com/ReggieAlbiosA/gitflow/commit/266852f7b6d73c574a348399650144e68e8789fd))
- **utils:** add internal utilities ([eba1ce9](https://github.com/ReggieAlbiosA/gitflow/commit/eba1ce9e0c130f5a530064f93f39efe9e241ce6b))
