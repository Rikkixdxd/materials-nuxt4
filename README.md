# Тестовое задание: фронтенд

Одностраничное приложение на Nuxt 3 с тремя экранами:

1) **Список материалов** — загрузка списка через API, сортировка по дате (свежее выше), ссылка на детальную.  
2) **Детальная страница** — загрузка данных материала через API по `id`.  
3) **Создание материала** — форма с полями + WYSIWYG (минимальный набор: параграф, H1–H3, цитата) и отправка на сервер.

## Ресурсы из ТЗ

- **Макет Figma**: ссылка из ТЗ.  
- **Шрифты**: Furura PT, Source Sans 3.  
- **API** (где `{alias}` — ваш персональный код):
  - Список: `GET https://example.com/api/test/materials/{alias}`
  - Детальная: `GET https://example.com/api/test/materials/{alias}/`
  - Создание: `POST https://example.com/api/test/materials/{alias}/save`

---


---

## Демонстрация

- **Desktop** — обязательно  
- **Mobile** — по возможности (адаптивная сетка, типографика, отступы)

---

## Быстрый старт

```bash
# 1) Клонирование
git clone https://github.com/Rikkixdxd/materials-nuxt4.git
cd materials-nuxt4.git

# 2) Установка
pnpm i       # или npm i / yarn

# 3) Переменные окружения
cp .env.example .env
# отредактируйте если надо .env: 
# TOKEN = tkach
# API_BASE_URL = /api

# 4) Запуск dev-сервера
npm run dev     # http://localhost:3000

```

### Скрипты

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "preview": "nuxt preview",
    "lint": "eslint .",
    "typecheck": "vue-tsc --noEmit"
  }
}
```

---

## Переменные окружения

`.env.example`:
```ini
# персональный alias из письма по тестовому
TOKEN=your_alias_code

# путь апи
API_BASE_URL=https://example.com
```

Доступ в коде: `useRuntimeConfig().public.TOKEN`.

---

## Страницы и роутинг

| Путь | Назначение |
|---|---|
| `/` | Список материалов |
| `/material/:id` | Детальная страница материала |
| `/create-material` | Создание материала (WYSIWYG) |

---