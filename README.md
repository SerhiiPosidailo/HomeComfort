"HomeComfort" 

## Опис
Цей проєкт є інтернет-магазином, що дозволяє користувачам переглядати товари, та здійснювати покупки через соціальні мережи. Реалізовано на Python (Django Rest Framework) для бекенду та React для фронтенду. Проект запускається через Docker.

## Особливості
- Реєстрація та авторизація користувачів
- Перегляд категорій товарів
- перегляд товару
- Пошук по Ціні або слову(букві)
- Панель адміністратора

## Вимоги
- [Python](https://www.python.org/)
- [React](https://legacy.reactjs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## Налаштуйте .env файл:

Скопіюйте .env.example у .env:
Копіювати код
cp .env.example .env
Відредагуйте .env файл для налаштування змінних середовища.

Запустіть Docker контейнер:

Копіювати код
docker-compose up --build

Відвідайте http://localhost для доступу до інтерфейсу.
Або http://localhost/api/doc для відвіданя документації
