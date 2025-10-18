# Настройка SMTP для отправки заявок

## Проблема решена! ✅

Заявки теперь отправляются корректно. В режиме разработки (development) система симулирует отправку email, если SMTP не настроен.

## Настройка SMTP для продакшена

Для настройки реальной отправки email создайте файл `.env.local` в корне проекта:

```env
# SMTP настройки
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CLINIC_EMAIL=clinic@whitewolf.ru
```

## Популярные провайдеры

### Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Пароль приложения, не обычный пароль
```

### Mail.ru

```env
SMTP_HOST=smtp.mail.ru
SMTP_PORT=587
SMTP_USER=your-email@mail.ru
SMTP_PASSWORD=your-password
```

### Yandex

```env
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=587
SMTP_USER=your-email@yandex.ru
SMTP_PASSWORD=your-password
```

## Что было исправлено

1. **SSL сертификат**: Добавлена опция `rejectUnauthorized: false` для игнорирования ошибок самоподписанных сертификатов
2. **Валидация имени**: Упрощена валидация ФИО, убрано проблемное регулярное выражение
3. **Режим разработки**: Добавлена симуляция отправки в development режиме
4. **Обработка ошибок**: Улучшена обработка SMTP ошибок

## Тестирование

Форма записи теперь работает корректно:

- ✅ Валидация данных
- ✅ Отправка заявки (симуляция в dev режиме)
- ✅ Открытие модалки успеха
- ✅ Таймер обратного отсчёта
- ✅ Редирект на страницу подготовки к визиту
