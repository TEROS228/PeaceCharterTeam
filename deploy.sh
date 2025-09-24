#!/bin/bash

echo "🚀 Деплой сайта Peace Charter Team на GitHub Pages"
echo "=================================================="

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Убедитесь, что вы находитесь в корневой папке проекта."
    exit 1
fi

# Устанавливаем зависимости если нужно
if [ ! -d "node_modules" ]; then
    echo "📦 Устанавливаем зависимости..."
    npm install
fi

# Устанавливаем gh-pages если нужно
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Устанавливаем gh-pages..."
    npm install gh-pages --save-dev
fi

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке проекта"
    exit 1
fi

# Проверяем Git
if [ ! -d ".git" ]; then
    echo "📝 Инициализируем Git репозиторий..."
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/TEROS228/PeaceCharterTeam.git
fi

# Деплоим
echo "🚀 Деплоим на GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Деплой успешно завершен!"
    echo "🌐 Ваш сайт доступен по адресу: https://teros228.github.io/PeaceCharterTeam/"
else
    echo "❌ Ошибка при деплое"
    exit 1
fi
