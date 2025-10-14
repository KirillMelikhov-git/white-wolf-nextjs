# Appointment Form Entity

Сущность формы записи на приём в ветеринарную клинику.

## Структура

```
appointment-form/
├── model/
│   ├── schema.ts      # Zod схема валидации
│   ├── types.ts       # TypeScript типы
│   └── index.ts       # Экспорты модели
├── ui/
│   ├── AppointmentForm.tsx        # Компонент формы
│   ├── AppointmentForm.module.scss # Стили
│   └── index.ts                    # Экспорты UI
└── index.ts           # Главный экспорт entity
```

## Использование

```tsx
import { AppointmentForm } from '@/entities/appointment-form';

export const MyComponent = () => {
  return <AppointmentForm />;
};
```

## Валидация

Форма включает следующие поля с валидацией:

- **ФИО** - минимум 5 символов, минимум 2 слова, только буквы
- **Телефон** - маска +7 (**_) _**-**-**, полное заполнение обязательно
- **Email** - корректный формат email
- **Кличка животного** - от 2 до 50 символов
- **Описание проблемы** - от 10 до 1000 символов

## Технологии

- **React Hook Form** - управление формой
- **Zod** - валидация схемы
- **React IMask** - маска для телефона
- **SCSS Modules** - стилизация
