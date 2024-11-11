ROOT := `git rev-parse --show-toplevel`
# Get help
help:
  just -l

# (Re-)build the glossary
build:
  node {{ROOT}}/builder/index.js --input {{ROOT}}/content > {{ROOT}}/docs/index.html

# Run all pre-commit checks
all-checks:
  pre-commit run --all-files

# Run pre-commit spelling check
spell:
  pre-commit run codespell --all-files

# Run pre-commit makdown-lint
markdown:
  pre-commit run markdownlint --all-files
