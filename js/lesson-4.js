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

// // // !1 ============================================
const body = document.querySelector("body");

console.log(body);

// !2 -----------------------------------------------------
const titleId = document.getElementById("title");

console.log(titleId);

// // !3 -----------------------------------------------------
const list = document.querySelector(".list");

console.log(list);

// // !4 ----------------------------------------------------------
const byAllAtribute = document.querySelectorAll("[data-topic]");

console.log(byAllAtribute);

// !5 ----------------------------------------------------------
const firstbyAllAtribute = document.querySelector("[data-topic]");

console.log(firstbyAllAtribute);

// !6 --------------------------------------------------------------
// const lastbyAllAtribute = byAllAtribute[byAllAtribute.length - 1];

// console.log(lastbyAllAtribute); // один спосіб

const lastbyAllAtribute = list.lastElementChild;

console.log(lastbyAllAtribute); // інший спосіб

// !7 ------------------------------------------------------------------
const neighborEl = titleId.nextElementSibling;

console.log(neighborEl);

// !8 -----------------------------------------------------
const h3 = document.querySelectorAll("h3");

console.log(h3);

// !9 -----------------------------------------------------
h3.forEach((el) => el.classList.add("active"));

// !10 -----------------------------------------------------------------
const navigation = document.querySelector("[data-topic = navigation]");

console.log(navigation);

// !11 ------------------------------------------------------------------
navigation.style.backgroundColor = "yellow";

// !12 ------------------------------------------------------------------
navigation.querySelector("p").textContent = "Я змінив тут текст!";

// !13 ------------------------------------------------------------------
const currentTopic = "manipulation";
const elem = document.querySelector(`[data-topic = ${currentTopic}]`);

console.log(elem);

// !14 -------------------------------------------------------------------
elem.style.backgroundColor = "blue";

// !15 -------------------------------------------------------------------
const head = document.querySelector(".completed");

console.log(head);

// !16 --------------------------------------------------------------------
head.parentNode.remove();

// !17 --------------------------------------------------------------------
const h1 = document.querySelector("h1");
const ppp = document.createElement("p");
ppp.textContent = "Об'єктна модель документа (Document Object Model)";
h1.after(ppp);

// !18 ----------------------------------------------------------------------
// const newElLi = document.createElement("li");
// const elementP = document.createElement("p");
// elementP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// const h3Element = document.createElement("h3");
// h3Element.textContent = "Властивість innerHTML";
// newElLi.append(h3Element, elementP);
// list.append(newElLi) //один спосіб додавання розмітки

// !19 -------------------------------------------------------------------------
const markUp = "<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу </p></li>";
list.insertAdjacentHTML("beforeend", markUp); //інший спосіб додавання розмітки

// !20 -------------------------------------------------------------------------
list.innerHTML = "";

// ! ====================================================================================================