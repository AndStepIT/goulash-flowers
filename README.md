# Goulash.tech для цветочных магазинов

Концепт-лендинг (тестовое задание): «Гуляш» для цветочных магазинов с доставкой.

- `npm install` — зависимости
- `npm run dev` — локальный сервер Vite
- `npm run build` — сборка в `dist/`
- `npm run deploy` — сборка и публикация `dist/` в ветку `gh-pages`

## Деплой на GitHub Pages

```bash
git remote add origin https://github.com/<аккаунт>/<репозиторий>.git
git push -u origin main
npm run deploy
```

Затем в репозитории: Settings → Pages → Source: «Deploy from a branch», ветка `gh-pages`, папка `/ (root)`.
Сайт откроется по адресу `https://<аккаунт>.github.io/<репозиторий>/`. Сборка использует относительные пути (`base: './'`), поэтому имя репозитория может быть любым.

## Структура

- `index.html`, `css/styles.css`, `js/app.js` — страница, стили, интерактив
- `assets/fonts/` — Pixeloid Sans (OFL), бандлится Vite
- `public/assets/` — статика без обработки: ролик, постер, favicon
- `assets/video/raw/` — исходные клипы ролика, в репозиторий не попадают
