# Развертывание на собственном домене

## Вариант 1: Vercel (Рекомендуется - самый простой)

### Шаги:
1. Зайдите на https://vercel.com
2. Зарегистрируйтесь через GitHub
3. Нажмите "New Project"
4. Выберите репозиторий TEROS228/PeaceCharterTeam
5. Настройки:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Нажмите "Deploy"

### Подключение домена:
1. В проекте Vercel перейдите в Settings → Domains
2. Добавьте ваш домен: `peacecharterteam.com`
3. Добавьте DNS записи в настройках домена:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - Type: A
   - Name: @
   - Value: 76.76.19.61

## Вариант 2: Netlify

### Шаги:
1. Зайдите на https://netlify.com
2. Зарегистрируйтесь через GitHub
3. Нажмите "New site from Git"
4. Выберите репозиторий TEROS228/PeaceCharterTeam
5. Настройки:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Нажмите "Deploy site"

### Подключение домена:
1. В проекте Netlify перейдите в Domain settings
2. Добавьте ваш домен: `peacecharterteam.com`
3. Добавьте DNS записи в настройках домена

## Вариант 3: Обычный хостинг

### Шаги:
1. Купите хостинг (например, Timeweb, Beget, REG.RU)
2. Загрузите файлы из папки `dist/` на сервер
3. Настройте .htaccess для SPA:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Преимущества собственного домена:

✅ Простые пути к изображениям: `/images/routes/koh-hai.jpg`
✅ Нет проблем с маршрутизацией
✅ Быстрая загрузка
✅ SEO-дружественность
✅ Полный контроль над сайтом
✅ SSL сертификат включен
✅ CDN для быстрой загрузки

## Стоимость:
- Домен: ~$10-15/год
- Vercel/Netlify: Бесплатно
- Обычный хостинг: $2-10/месяц
