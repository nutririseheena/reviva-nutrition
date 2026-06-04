.DEFAULT_GOAL := help

.PHONY: help dev build start lint lint-fix format type-check clean install check

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

start: ## Start production server (requires build first)
	npm run start

lint: ## Run ESLint
	npm run lint

lint-fix: ## Run ESLint and auto-fix issues
	npm run lint -- --fix

format: ## Format all files with Prettier
	npx prettier --write .

format-check: ## Check formatting without writing
	npx prettier --check .

type-check: ## Run TypeScript type check
	npx tsc --noEmit

clean: ## Remove .next build output
	rm -rf .next

install: ## Install dependencies
	npm install

check: lint type-check ## Run lint and type checks together
