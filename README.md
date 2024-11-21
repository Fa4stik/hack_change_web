# Hack & Change: Web

## Описание
Здесь будет описание

### Демо
Вы можете просмотреть демонстрацию проекта по ссылке: https://fa4stik.github.io/hack_change_web/.

### Запуск
Чтобы запустить проект локально, вам нужно установить Docker и Docker Compose, выполните следующие шаги:

**1. Установка Docker:** https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository

**2. Клонирование репозитория:**
```shell
git clone https://github.com/Fa4stik/hack_change_web.git && cd hack_change_web
```

**3. Запуск проекта:**
```shell
docker compose up
```

Эта команда создаст и запустит приложение. Вы можете получить к нему доступ в своем браузере по адресу http://localhost или http://127.0.0.1

### Сборка
Чтобы собрать проект с использованием продакшн Dockerfile, выполните следующие шаги:

**1. Клонирование репозитория:**
```shell
git clone https://github.com/Fa4stik/hack_change_web.git && cd hack_change_web
```

**2. Создание Docker-образа:**
```shell
docker build -f Dockerfile_prod -t fa4stik/hack_change_web:latest .
```

**3. Запуск Docker-контейнера:**
```shell
docker run -p 80:80 fa4stik/hack_change_web:latest
```

Эта команда запустит приложение в режиме продакшн. Вы можете получить к нему доступ в своем браузере по адресу http://localhost или http://

### Запуск без Docker
Чтобы запустить проект без Docker, выполните следующие шаги:

**1. Установите Node.js:**
Перейдите на официальный сайт [Node.js](https://nodejs.org/en) и загрузите установщик для вашей операционной системы: Node.js.

**2: Установите corepack**
Corepack поставляется вместе с Node.js начиная с версии 16.10.0. Чтобы убедиться, что corepack установлен, выполните следующую команду:
```shell
corepack --version
```

**3: Включите поддержку pnpm через corepack**
Активируйте поддержку pnpm с помощью corepack:
```shell
corepack enable
corepack prepare pnpm@latest --activate
```

**4. Клонирование репозитория:**
```shell
git clone https://github.com/Fa4stik/hack_change_web.git && cd hack_change_web
```

**5: Установите зависимости и запустите проект**
```shell
pnpm install && pnpm dev
```

Проект теперь должен быть доступен в вашем браузере по адресу http://localhost:3000 или http://127.0.0.1:3000.


