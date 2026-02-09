// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

//const numbers = [1, 2, 3, 4, 5]

// const newNumbers = numbers.map(number => number ** 2); // метод map; викор. оператор піднесення ступеня(**)

// console.log(newNumbers);

//const powNumbers = (array, pow) => array.map(el => el ** pow); //стрілочна функція
// const powNumbers = (array, pow) => array.map(el => Math.pow(el, pow)); // викор. клас(Math) з відповідним методом

// console.log(powNumbers(numbers, 2));

// ! -------------------------------------------------------------------------------------------

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] },
// ];

// const allValues = data.flatMap(obj => obj.values); //метод flatMap

// console.log(allValues);

// const joinAllValues = (array) => array.flatMap(obj => obj.values); //стрілочна функція

// console.log(joinAllValues(data));

// ! --------------------------------------------------------------------------------------

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const isYoung = people.some(persone => persone.age < 20); // змінна

// console.log(isYoung);

// const checkAge = (array, num) => array.some(obj => obj.age < num); // стрілочна функція

// console.log(checkAge(people, 20));

// ! ---------------------------------------------------------------------------------------

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

//const numbers = [2, 4, 6, 8, 10];

// const evenNumber = numbers.every(num => num % 2 === 0);

// console.log(evenNumber);

// const checkNumber = (array, value) => array.every(num => num % value === 0);

// const checkNumber = (array, value) => array.every(num => {
//     console.log(num)
//     return num % value === 0
// }
// );

// console.log(checkNumber(numbers, 2));

// ! -----------------------------------------------------------

// Знайдіть перше непарне число

//const numbers = [2, 1, 6, 8, 9, 10, 12];

// const findFirst = numbers.find(number => number % 2 !== 0);

// console.log(findFirst);

// const checkOddNumber = (array, value) => array.find(number => number % value !== 0);

// console.log(checkOddNumber(numbers, 2));

// ! --------------------------------------------------------------------

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedNum = numbersArray.toSorted((a, b) => a - b);

// console.log(sortedNum);

// const ascendingNum = (array) => array.toSorted((a, b) => a - b);

// console.log(ascendingNum(numbersArray));

// ! ---------------------------------------------------------------

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedStr = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedStr);

// const abcOrderStr = (array) => array.toSorted((a, b) => a.localeCompare(b));

// console.log(abcOrderStr(stringArray));

// ! ----------------------------------------------------------------------------

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const sortedAsd = users.toSorted((ul1, ul2) => ul1.age - ul2.age);

// console.log(sortedAsd);

// const growAge = (array) => array.toSorted((ul1, ul2) => ul1.age - ul2.age);

// console.log(growAge(users));

// ! ----------------------------------------------------------------------------

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const allOlder = users.filter(user => user.age > 20);

// console.log(allOlder);

// const checkAllOlder = (array, age) => array.filter(obj => obj.age > age);

// console.log(checkAllOlder(users, 20));

// ! ------------------------------------------------------------------------

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumArr = numbers.reduce((sum, el) => sum + el, 0);

// console.log(sumArr);

// const sumArray = (array) => array.reduce((sum, el) => sum + el, 0);

// console.log(sumArray(numbers));

// const sumArray = (array, num) => array.reduce((sum, el) => sum + el, num);

// console.log(sumArray(numbers, 0));

// ! -------------------------------------------------------------------------

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//     number(value) {
//         this.result = value;
//         return this;
//     }

//     getResult() {
//         return this.result;
//     }

//     add(value) {
//         this.result += value;
//         return this;
//     }

//     subtract(value) {
//         this.result -= value;
//         return this;
//     }

//     divide(value) {
//         // if (value !== 0) {
//         //     this.result /= value;
//         // } else {
//         //     console.log("на нуль ділити не можна");
//         // };

//         (value !== 0) ? this.result /= value : console.log("на нуль ділити не можна"); //тернарний оператор

//         return this;
//     }

//     multiply(value) {
//         this.result *= value;
//         return this;
//     }
// }

// // Приклад використання:
// const calc = new Calculator();


// const result = calc
//     .number(10) // Встановлюємо початкове значення 10
//     .add(5)   // Додаємо 5 (10 + 5 = 15)
//     .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//     .multiply(4) // Множимо на 4 (12 * 4 = 48)
//     .divide(2)  // Ділимо на 2 (48 / 2 = 24)
//     .getResult(); // Отримуємо результат: 24


// console.log(result); // 24

// ! ------------------------------------------------------------

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//     #login
//     #email

//     set login(log) {
//         if (log.trim() !== "") {
//             this.#login = log;
//         }
//     }

//     get login() {
//         return this.#login;
//     }

//     set email(em) {
//         if (em.trim() !== "" && em.includes("@")) {
//             this.#email = em;
//         }
//     }

//     get email() {
//         return this.#email;
//     }
// }

// const user = new Client();
// user.login = "Maryana";
// console.log(user.login);
// user.login = "";
// console.log(user.login);
// user.email = "Maryana@gmail.com";
// console.log(user.email);
// user.email = "";
// console.log(user.email);

// ! -----------------------------------

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//     name
//     age
//     gender
//     email

//     constructor(params) {
//         this.name = params.name;
//         this.age = params.age;
//         this.gender = params.gender;
//         this.email = params.email;
//     }

//     getDetails() {
//         return { name: this.name, age: this.age, gender: this.gender, email: this.email };
//     }
// }

// const data = {
//     name: "Maryana",
//     age: 39,
//     gender: "Fame",
//     email: "Maryana@gmail.com"
// }
// const pers = new Person(data);
// console.log(pers);

// class Employee extends Person {
//     salary
//     department

//     constructor(params) {
//         super(params);
//         this.salary = params.salary;
//         this.department = params.department;
//     }

//     getEmployeeDetails() {
//         return { salary: this.salary, department: this.department }
//     }
// }

// data.salary = 20000;
// data.department = "GoIt";

// const empl = new Employee(data);
// console.log(empl);
// console.log(empl.getEmployeeDetails());
// console.log(empl.getDetails());

// ! ----------------------------------------------------------------------

// Підрахунок кількості повторень
// Дано масив:
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple",];
// Завдання: за допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// Очікуваний результат:
// {
//     apple: 3,
//     banana: 2,
//     orange: 1
// }

// const fruitCount = fruits.reduce((count, fruit) => {
//     count[fruit] = (count[fruit] || 0) + 1;
//     return count;
// }, {});

// console.log(fruitCount);

// const fruitCountArr = (array) => array.reduce((count, fruit) => {
//     count[fruit] = (count[fruit] || 0) + 1;
//     return count;
// }, {});

// console.log(fruitCountArr(fruits));