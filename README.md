# Дом в Терсколе — статический деплой

## App Platform / Static Site

- Тип приложения: **Static Site**, не Web Service.
- Команда установки: `npm install` (или `bun install`).
- Команда сборки: `npm run build:static`.
- Publish / Output Directory: **`static-dist`**.
- Команда запуска и сервер Node.js на хостинге не нужны.
- Размещайте сайт в корне домена (`/`), не в подпапке.

HTML создаётся один раз во время сборки (SSG). При посещении сайта серверный
рендеринг не используется: хостинг отдаёт HTML, CSS, JavaScript и изображения.
TanStack Start сохранён для разработки и генерации HTML; серверные артефакты
не входят в `static-dist`.

Фотографии и QR-код автоматически скачиваются при экспорте и включаются в
`static-dist/__l5e/assets-v1/` с сохранением исходных путей. Загружайте **всю**
папку `static-dist`, включая `__l5e`, без переименования вложенных файлов.
Специальный прокси Lovable на вашем хостинге не нужен. Сборке нужен доступ к
исходным изображениям в интернете; после экспорта изображения автономны.
При недоступном или повреждённом изображении экспорт завершится ошибкой.
Шрифты загружаются отдельно из Google Fonts с системным запасным шрифтом.

Локальная проверка после сборки: `python3 -m http.server 4173 --directory static-dist`.
Откройте `http://localhost:4173`, проверьте фотографии, QR-код и меню.
Не используйте `vite preview` или серверную папку для статического деплоя.

---

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
