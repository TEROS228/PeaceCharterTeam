# Инструкции по деплою сайта на GitHub Pages

## Подготовка к деплою

### 1. Установите зависимости
```bash
npm install gh-pages --save-dev
```

### 2. Протестируйте сборку
```bash
npm run build
```

### 3. Создайте GitHub репозиторий
1. Перейдите на https://github.com/TEROS228
2. Создайте новый репозиторий с именем `PeaceCharterTeam`
3. Сделайте репозиторий публичным

### 4. Настройте Git
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TEROS228/PeaceCharterTeam.git
git push -u origin main
```

### 5. Включите GitHub Pages
1. Перейдите в Settings вашего репозитория
2. Найдите раздел "Pages" в левом меню
3. В разделе "Source" выберите "GitHub Actions"

### 6. Деплой
После настройки GitHub Actions, каждый push в ветку `main` будет автоматически деплоить сайт.

Для ручного деплоя используйте:
```bash
npm run deploy
```

## URL сайта
После деплоя ваш сайт будет доступен по адресу:
`https://teros228.github.io/PeaceCharterTeam/`

## Проверка
1. Убедитесь, что все изображения загружаются корректно
2. Проверьте работу форм бронирования
3. Протестируйте все страницы сайта

## Troubleshooting
- Если изображения не загружаются, проверьте пути в `vite.config.ts`
- Если формы не работают, проверьте настройки FormSubmit
- Если есть ошибки сборки, проверьте консоль браузера
