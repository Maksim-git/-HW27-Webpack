1. Создайте README.md с описанием задания.
2. Нужно написать webpack сборку. Настройте output чтобы билд был в папке dist и js код собирался в bundle.js (dist/bundle.js).
3. Добавьте конфиг что бы при создании bundle.js создавался index.html и в него подключался скрипт.
4. Сделайте чтобы перед сборкой билда папка dist очищалась.
5. Добавьте в сборку возможность запуска webpack dev server.d. Добавить script комманду в package.json.
6. Создайте три класса в отдельных файлах:
   6.1 Реализуйте Person который реализует класс Person
   6.1.1 name, age, gendor, interests
   6.2 Реализовать класс Student. Должны наследоваться от Person. Нужно заимпортить класс Person тобы от него отнаследоваться.
   6.3 Реализовать класс Teacher. Должны наследоваться от Person. Нужно заимпортить класс Person чтобы от него отнаследоваться.
   6.4 Реализовать класс Teacher. Должны наследоваться от Person. Нужно заимпортить класс Person чтобы от него отнаследоваться.
7. В файле index.js заимпортить классы Student and Teacher и создать инстансы (создать обьекты с классов) student и techer. Затем вывести созданные обьекты в консоль.