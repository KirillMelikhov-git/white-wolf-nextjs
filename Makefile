# Makefile для удобного управления проектом

.PHONY: help dev build start lint test docker-build docker-up docker-down docker-logs deploy-server

help: ## Показать эту справку
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## Запустить в режиме разработки
	npm run dev

build: ## Собрать production версию
	npm run build

start: ## Запустить production сервер локально
	npm run start

lint: ## Проверить код линтерами
	npm run check

lint-fix: ## Исправить проблемы линтеров
	npm run check:fix

docker-build: ## Собрать Docker образ
	docker compose build

docker-up: ## Запустить Docker контейнеры
	docker compose up -d

docker-down: ## Остановить Docker контейнеры
	docker compose down

docker-logs: ## Показать логи контейнеров
	docker compose logs -f

docker-restart: ## Перезапустить контейнеры
	docker compose restart

docker-clean: ## Очистить неиспользуемые Docker ресурсы
	docker system prune -af

test-docker: ## Локальное тестирование Docker билда
	@chmod +x scripts/local-docker-test.sh
	@./scripts/local-docker-test.sh

deploy-info: ## Показать информацию о деплое
	@echo "📚 Читай DEPLOYMENT.md для полной инструкции по деплою"
	@echo ""
	@echo "Быстрый старт:"
	@echo "1. Настрой .env файл (копируй из .env.template)"
	@echo "2. Замени yourdomain.com на свой домен в docker-compose.yml"
	@echo "3. Замени your-email@example.com в traefik/traefik.yml"
	@echo "4. Настрой сервер на Selectel"
	@echo "5. Выполни: make docker-up"

