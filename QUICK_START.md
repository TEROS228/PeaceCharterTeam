# 🚀 Быстрый старт - Деплой сайта

## Для TEROS228/PeaceCharterTeam

### 1. Создайте репозиторий на GitHub
- Перейдите на https://github.com/TEROS228
- Нажмите "New repository"
- Название: `PeaceCharterTeam`
- Сделайте публичным
- НЕ добавляйте README, .gitignore или лицензию

### 2. Запустите автоматический деплой
```bash
cd /Users/leontrofimenko/Desktop/PeaceCharterTeam
./deploy.sh
```

### 3. Включите GitHub Pages
1. Перейдите в Settings репозитория
2. Найдите "Pages" в левом меню
3. В "Source" выберите "GitHub Actions"

### 4. Готово! 🎉
Ваш сайт будет доступен по адресу:
**https://teros228.github.io/PeaceCharterTeam/**

---

## Альтернативный способ (ручной)

```bash
# 1. Установите зависимости
npm install gh-pages --save-dev

# 2. Соберите проект
npm run build

# 3. Настройте Git (только первый раз)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TEROS228/PeaceCharterTeam.git
git push -u origin main

# 4. Деплой
npm run deploy
```

## Проверка
После деплоя проверьте:
- ✅ Все страницы загружаются
- ✅ Изображения отображаются
- ✅ Формы бронирования работают
- ✅ Контакты корректные

