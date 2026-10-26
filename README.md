# Автозапчастини

Навчальний вебзастосунок для пошуку та підбору автомобільних запасних частин.
Каталог показує деталі з артикулом, маркою авто, категорією, ціною та
наявністю; окрема сторінка містить макет підбору за автомобілем.

## Стек

- ReactJS (Create React App)
- React Router
- styled-components (заголовок застосунку)
- власні CSS стилі в `src/index.css`

## Запуск

```bash
npm install
npm start      # http://localhost:3000
npm run build  # виробнича збірка в build/
```

## Структура

```
src/
  components/
    layout/      AppLayout, SiteHeader
    navigation/  MainNav
    parts/       PartCard, PartList, AvailabilityBadge, CatalogSummary
    selection/   PartSelectionFormPreview
    ui/          Section, EmptyState, AppButton, FormField, Title
  data/          parts.js
  pages/         HomePage, SelectionPage, AboutPage
  App.jsx
  index.js
docs/
  project-plan.md
  component-architecture.md
  lab-1.2-report.md
```

## Маршрути

| Маршрут      | Сторінка        |
| ------------ | --------------- |
| `/`          | HomePage        |
| `/selection` | SelectionPage   |
| `/about`     | AboutPage       |

## Документація

- [План проєкту](docs/project-plan.md)
- [Компонентна архітектура](docs/component-architecture.md)
- [Звіт з лабораторної роботи 1.2](docs/lab-1.2-report.md)

## Фактичний стан

Л 1.2: виділено компонування, навігацію, сторінки, предметні та спільні UI
компоненти; контракти props описані; наявність показує спільний
`AvailabilityBadge`; форма підбору є макетом і не зберігає дані.

Наступні кроки: стан і фільтри (Л 2.1), маршрут окремої запчастини (Л 2.2),
форма замовлення з валідацією (Л 3.1), асинхронне джерело даних (Л 3.2).
