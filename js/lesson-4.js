// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// !1 =========================================================================
// const body = document.querySelector("body");

// console.log(body);

// // !2 -----------------------------------------------------
// const titleId = document.getElementById("title");

// console.log(titleId);

// // // !3 -----------------------------------------------------
// const list = document.querySelector(".list");

// console.log(list);

// // // !4 ----------------------------------------------------------
// const byAllAtribute = document.querySelectorAll("[data-topic]");

// console.log(byAllAtribute);

// // !5 ----------------------------------------------------------
// const firstbyAllAtribute = document.querySelector("[data-topic]");

// console.log(firstbyAllAtribute);

// // !6 --------------------------------------------------------------
// // const lastbyAllAtribute = byAllAtribute[byAllAtribute.length - 1];

// // console.log(lastbyAllAtribute); // один спосіб

// const lastbyAllAtribute = list.lastElementChild;

// console.log(lastbyAllAtribute); // інший спосіб

// // !7 ------------------------------------------------------------------
// const neighborEl = titleId.nextElementSibling;

// console.log(neighborEl);

// // !8 -----------------------------------------------------
// const h3 = document.querySelectorAll("h3");

// console.log(h3);

// // !9 -----------------------------------------------------
// h3.forEach((el) => el.classList.add("active"));

// // !10 -----------------------------------------------------------------
// const navigation = document.querySelector("[data-topic = navigation]");

// console.log(navigation);

// // !11 ------------------------------------------------------------------
// navigation.style.backgroundColor = "yellow";

// // !12 ------------------------------------------------------------------
// navigation.querySelector("p").textContent = "Я змінив тут текст!";

// // !13 ------------------------------------------------------------------
// const currentTopic = "manipulation";
// const elem = document.querySelector(`[data-topic = ${currentTopic}]`);

// console.log(elem);

// // !14 -------------------------------------------------------------------
// elem.style.backgroundColor = "blue";

// // !15 -------------------------------------------------------------------
// const head = document.querySelector(".completed");

// console.log(head);

// // !16 --------------------------------------------------------------------
// head.parentNode.remove();

// // !17 --------------------------------------------------------------------
// const h1 = document.querySelector("h1");
// const ppp = document.createElement("p");
// ppp.textContent = "Об'єктна модель документа (Document Object Model)";
// h1.after(ppp);

// // !18 ----------------------------------------------------------------------
// const newElLi = document.createElement("li");
// const elementP = document.createElement("p");
// elementP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// const h3Element = document.createElement("h3");
// h3Element.textContent = "Властивість innerHTML";
// newElLi.append(h3Element, elementP);
// list.append(newElLi) //один спосіб додавання розмітки

// // !19 -------------------------------------------------------------------------
// const markUp = "<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу </p></li>";
// list.insertAdjacentHTML("beforeend", markUp); //інший спосіб додавання розмітки

// // !20 -------------------------------------------------------------------------
// list.innerHTML = "";

// ! ====================================================================================================

// Створіть контейнер div (з класом number-container) в HTML-документі

// const div = document.querySelector(".number-container");

// // console.log(div);
// // та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// // числами від 1 до 100 і додайте їх до контейнера div(numberContainer).

// const arrElements = [];
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// for (let i = 0; i < 100; i++) {
//     const capibara = document.createElement("div");
//     capibara.classList.add("number");
//     const number = randomNumber();
//     capibara.textContent = number;
//     if (number % 2 === 0) {
//         capibara.classList.add("even");
//     } else {
//         capibara.classList.add("odd");
//     }
//     arrElements.push(capibara);
// }

// div.append(...arrElements);

// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// ! =========================================================================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const input = document.querySelector(".js-username-input");
// ! -----------------------------------------------------------
// input.addEventListener("input", handlerInput);
// function handlerInput() {
//     const value = input.value.length;
//     input.classList.toggle("success", value >= 6);
//     input.classList.toggle("error", value < 6);
// }
// console.log(input);
// ! -------------------------------------------------------------


// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener("focus", handlerFocus);
// function handlerFocus() {
//     const value = input.value.length;
//     if (value === 0) {
//         input.style.outline = `3px solid red`;
//     } else {
//         input.style.outline = `3px solid green`;
//     }
// }
// ! --------------------------------------------------------------

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener("blur", (event) => {
//     const value = event.target.value.trim();
//     if (value === "") {
//         event.target.outline = `3px solid red`;
//     } else {
//         event.target.outline = `3px solid green`;
//     }
// });
// ! --------------------------------------------------------------------

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.


// const form = document.querySelector("form");

// form.addEventListener("submit", handlerSubmit);
// function handlerSubmit(e) {
//     e.preventDefault();

//     const { accept, userName } = e.target.elements;
//     if (userName.value.trim() === "" || !accept.checked) {
//         alert("Введіть значення");
//         return;
//     }

//     const data = { name: userName.value };
//     console.log(data);

//     e.currentTarget.reset();
//     document.querySelector("span").textContent = "Anonymous";
// }

// input.addEventListener("input", handlerAnonymous);
// function handlerAnonymous() {
//     const name = input.value.trim();
//     if (name !== "") {
//         document.querySelector("span").textContent = name;
//     } else {
//         document.querySelector("span").textContent = "Anonymous";
//     }
// }

// ! =====================================================================

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const box = document.querySelector(".box");
// const decreaseBtn = document.querySelector(".js-decrease");
// const increaseBtn = document.querySelector(".js-increase");

// const changeSize = (step) => {
//     const currentSize = box.offsetWidth;

//     const newSize = currentSize + step;
//     if (newSize > 0) {
//         box.style.width = `${newSize}px`;
//         box.style.height = `${newSize}px`;
//     }
// };

// decreaseBtn.addEventListener("click", () => changeSize(-20));
// increaseBtn.addEventListener("click", () => changeSize(20));

// ! ================================================================