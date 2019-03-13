**IzTest**
  
Задача состоит в создании таблицы, которое отображает данные предоставленые апишкой сервера.

Данные из апи предоставляются в формате JSON.

Общая структура запроса : {

data : массив Person,

count: количество ответов на запрос

}

Person : {

id: int,

name: string,

email: string,

funds: string,

city: string,

phone: string

}

Апи поддерживает следующие пути запросов :

  

localhost:8080:

GET / : {

limit: string,

offset: string,

name: string,

city: string,

email: string,

funds: int as string (Например если 100, то покажет результаты где funds > 100, если отрицательное число то меньше),

phone: string

}

PUT /update/:id : {

name: string,

city: string,

email: string,

funds: string,

phone: string

}

  

Советую использовать https://www.npmjs.com/package/axios как библиотеку для хттп запросов.

Вы можете использовать Postman или Insomnia для проверки как работает апи.

**Таблица должна быть пагинированой, должна быть возможность одновременно искать по все полям. Воспринимайте это как фильтры**

**Должна быть возможность изменить данные Person, в ответе возвращается новый сохраненный пользователь**
  
**Чтобы запустить сервер необходимо ввести команды "npm install" и "npm start" в корневом каталоге проекта**
