.DEFAULT_GOAL := help

.PHONY: clean package package-deps package-source package-upload package-wheel tar-source

all-checks:     ## Run all pre-commit checks
	pre-commit run --all-files

spell:          ## Run pre-commit spelling check
	pre-commit run codespell --all-files

markdown:       ## Run pre-commit makdown-lint
	pre-commit run markdownlint --all-files

help:           ## Print this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
