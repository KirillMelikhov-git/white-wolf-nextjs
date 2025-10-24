# 🚀 Инструкция по деплою на Selectel с Docker и Traefik

## ✅ Что уже сделано (Часть 1)

Все необходимые файлы для Docker и Traefik созданы:

- ✅ `Dockerfile` - многоступенчатая сборка Next.js приложения
- ✅ `.dockerignore` - исключение ненужных файлов из образа
- ✅ `docker-compose.yml` - оркестрация контейнеров
- ✅ `traefik/traefik.yml` - конфигурация Traefik
- ✅ `traefik/config.yml` - middleware для безопасности
- ✅ `docker-compose.override.yml` - логирование
- ✅ `next.config.ts` - обновлен с `output: 'standalone'`
- ✅ `.env.template` - шаблон переменных окружения

## 📝 Что нужно сделать перед деплоем

### 1. Настроить переменные окружения

Скопируй шаблон и заполни реальными данными:

```bash
cp .env.template .env
nano .env  # или используй любой редактор
```

Замени значения:

- `SMTP_HOST` - хост SMTP сервера
- `SMTP_PORT` - порт SMTP (обычно 465 или 587)
- `SMTP_USER` - твой email для отправки
- `SMTP_PASSWORD` - пароль приложения (не обычный пароль!)
- `CLINIC_EMAIL` - email клиники для получения заявок

### 2. Настроить домен в конфигах

#### В `docker-compose.yml`:

Замени `yourdomain.com` на твой реальный домен в строках:

- Линия 29: `Host(\`traefik.yourdomain.com\`)` (если нужен дашборд Traefik)
- Линия 34: `Host(\`traefik.yourdomain.com\`)`
- Линия 54: `Host(\`yourdomain.com\`) || Host(\`www.yourdomain.com\`)`
- Линия 58: `Host(\`yourdomain.com\`) || Host(\`www.yourdomain.com\`)`

#### В `traefik/traefik.yml`:

Замени `your-email@example.com` на твой реальный email (линия 24)

### 3. Создать сервер на Selectel

1. Зайди в панель Selectel
2. Создай новый VPS/VDS с параметрами:
   - **ОС**: Ubuntu 22.04 LTS или Debian 12
   - **CPU**: минимум 2 ядра
   - **RAM**: минимум 2GB
   - **Диск**: минимум 20GB SSD
3. Запиши IP-адрес сервера

### 4. Подключиться к серверу и установить Docker

```bash
# Подключение к серверу
ssh root@your-server-ip

# Обновление системы
apt update && apt upgrade -y

# Установка необходимых пакетов
apt install -y apt-transport-https ca-certificates curl software-properties-common git

# Добавление репозитория Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Установка Docker
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Проверка установки
docker --version
docker compose version
```

### 5. Настроить firewall

```bash
# Установка UFW
apt install -y ufw

# Разрешение портов
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS

# Включение firewall
ufw enable
```

### 6. Клонировать проект на сервер

```bash
# Создание директории для проектов
mkdir -p /opt/projects
cd /opt/projects

# Клонирование репозитория
git clone https://github.com/yourusername/white-wolf-nextjs.git
cd white-wolf-nextjs

# Создание .env файла на сервере
nano .env
# Вставь содержимое из локального .env файла
```

### 7. Подготовить Traefik

```bash
# Создание Docker сети
docker network create web

# Создание файла для SSL сертификатов
touch traefik/acme.json
chmod 600 traefik/acme.json
```

### 8. Настроить DNS записи

**Вариант А: Прямое указание на IP**

В панели управления доменом создай A-записи:

```
A запись:
@   → IP-адрес-твоего-сервера
www → IP-адрес-твоего-сервера
```

**Вариант Б: Через Cloudflare (рекомендуется)**

1. Создай аккаунт на cloudflare.com
2. Добавь свой домен
3. Измени NS-записи у регистратора на те, что дал Cloudflare
4. В Cloudflare создай A-записи как выше
5. Включи прокси (оранжевое облачко)

### 9. Запустить приложение

```bash
# Сборка и запуск контейнеров
docker compose up -d --build

# Просмотр логов
docker compose logs -f

# Проверка статуса
docker compose ps
```

### 10. Проверить работу

1. Дождись получения SSL сертификатов (1-2 минуты)
2. Открой браузер и перейди на `https://yourdomain.com`
3. Проверь, что сайт работает и HTTPS активен

## 🔧 Полезные команды

### Управление контейнерами

```bash
# Просмотр логов
docker compose logs -f whitewolf
docker compose logs -f traefik

# Перезапуск приложения
docker compose restart whitewolf

# Остановка
docker compose down

# Запуск с пересборкой
docker compose up -d --build

# Очистка старых образов
docker system prune -af
```

### Обновление проекта

```bash
cd /opt/projects/white-wolf-nextjs
git pull origin main
docker compose up -d --build
docker system prune -af
```

### Мониторинг

```bash
# Использование ресурсов
docker stats

# Проверка места на диске
df -h

# Логи системы
journalctl -f
```

## 🆘 Troubleshooting

### SSL сертификаты не получаются

```bash
# Проверь логи Traefik
docker compose logs traefik | grep acme

# Проверь права на файл
ls -la traefik/acme.json
chmod 600 traefik/acme.json

# Проверь, что DNS настроен правильно
nslookup yourdomain.com
```

### Приложение не отвечает

```bash
# Проверь статус
docker compose ps

# Проверь логи
docker compose logs whitewolf

# Перезапусти
docker compose restart whitewolf
```

### Не отправляются письма

```bash
# Проверь переменные окружения
docker compose exec whitewolf env | grep SMTP

# Проверь логи
docker compose logs whitewolf | grep -i smtp

# Убедись, что используешь app-password, а не обычный пароль
```

## 📊 Мониторинг и бэкапы

### Автоматический бэкап

Создай файл `/opt/backups/backup.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/opt/backups"
DATE=$(date +%Y%m%d_%H%M%S)
PROJECT_DIR="/opt/projects/white-wolf-nextjs"

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/whitewolf_$DATE.tar.gz $PROJECT_DIR
find $BACKUP_DIR -name "whitewolf_*.tar.gz" -mtime +7 -delete

echo "Backup completed: $BACKUP_DIR/whitewolf_$DATE.tar.gz"
```

Добавь в crontab:

```bash
chmod +x /opt/backups/backup.sh
crontab -e
# Добавь строку:
0 3 * * * /opt/backups/backup.sh
```

## 🔐 Безопасность

### Настройка fail2ban

```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

### Автоматические обновления безопасности

```bash
apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades
```

## 📞 Поддержка

Если возникли проблемы:

1. Проверь логи: `docker compose logs`
2. Проверь статус: `docker compose ps`
3. Проверь DNS: `nslookup yourdomain.com`
4. Проверь порты: `netstat -tulpn | grep -E ':(80|443)'`

---

**Успешного деплоя! 🎉**
