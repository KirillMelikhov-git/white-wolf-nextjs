#!/bin/bash

# Скрипт для локального тестирования Docker билда
# Использование: ./scripts/local-docker-test.sh

echo "🔨 Сборка Docker образа..."
docker build -t whitewolf-test .

if [ $? -eq 0 ]; then
    echo "✅ Сборка успешна!"
    echo ""
    echo "🚀 Для запуска контейнера используй:"
    echo "docker run -p 3000:3000 --env-file .env whitewolf-test"
else
    echo "❌ Ошибка при сборке!"
    exit 1
fi

