# CLI helpers.

# help
help:
 @just -l

# Run all pre-commit checks
all-checks:
 pre-commit run --all-files

# Run pre-commit spelling check
spell:
 pre-commit run codespell --all-files

# Run pre-commit makdown-lint
markdown:
 pre-commit run markdownlint --all-files

# Run the docs server
serve-local:
 npm start

# Lint all
lint-all:
 npm run lint && pre-commit run --all-files

# CI linting
npm-lint:
 npm run lint

# Commit no verify
commit-no-verify:
 git commit --no-verify
