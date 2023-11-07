//Термины: «унарный», «бинарный», «операнд»

/*
Операнд – это то к чему применяется оператор,
их еще называют аргументами.

/*
//Примеры:
let userAge = 30 - 6; //Числа 30 и 6 - это операнды
//либо
let userHeight = h - y; //Переменные h и y - это операнды

/*
Бинарными называются операторы
которые применяются к двум операндам.
В нашем примере вычитание -, это бинарный оператор.
*/
//let userAge = 30 - 6;
/*
Унарным считается оператор, который
применен только к одном операнду, например:
*/
//let userCash = -800;

//============================================

/*
//Математика
let x;
//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание -
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение *
x = 2 * 3;
console.log(`Результат умножения: ${x}`);

//Деление /
x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);
//Проверка: 11=3*3(неполное частное от деления)+2(остаток)

//Возведение в степень **.
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);
//Число 5 умноженное на себя 3 раза. 5*5*5 = 125
*/

//============================================

/*
//Специальные возможности операторов

//Применение оператора сложения к строкам
let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

//Если в выражении есть строка, то есть если хотя бы
//один операнд будет строкой, то конечный результат
//тоже будет строкой
let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultThree);

//Казусы
let resultFour = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой
//выполняются как обычно
let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);
*/

//=========




//=======
//Унарный оператор сложения +
/*
//Со строками
let resultOne = +"25";
console.log(resultOne);
console.log(typeof resultOne);

//С числами
let resultTwo = +10;
console.log(resultTwo);
console.log(typeof resultTwo);
*/

/*
//Пример
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Более длинная запись
console.log(Number(users) + Number(admins));

*/

//============================================




/*
Инкремент / декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке.

console.log(5++);
*/

//==============

/*
Операторы++ и-- могут быть расположены
не только после, но и до переменной.
*/


/*
//Постфиксная форма
usersCounter++;
usersCounter--;

//Префиксная форма
++usersCounter;
--usersCounter;

*/



/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/ 