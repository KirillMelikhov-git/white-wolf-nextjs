# Полезные команды

```bash
# Обновление проекта
cd /opt/projects/white-wolf-nextjs
git pull origin main
docker compose up -d --build
docker compose.simple up -d --build

# Просмотр логов
docker compose logs -f whitewolf

# Перезапуск
docker compose restart

# Статус контейнеров
docker compose ps

# Использование ресурсов
docker stats
```