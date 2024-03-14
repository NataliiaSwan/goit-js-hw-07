// const input = document.querySelector('input');
// const createButton = document.querySelector('[data-create]');
// const destroyButton = document.querySelector('[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// function createBoxes(amount) {
//   boxesContainer.innerHTML = '';

//   let size = 30;

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);

//     size += 10;
//   }
// }

// createButton.addEventListener('click', () => {
//   const amount = parseInt(input.value);

//   if (amount >= 1 && amount <= 100) {
//     createBoxes(amount);
//     input.value = '';
//   } else {
//     alert('Будь ласка, введіть число від 1 до 100.');
//   }
// });

// destroyButton.addEventListener('click', () => {
//   boxesContainer.innerHTML = '';
// });


const input = document.juerySelector("input");
const create = document.juerySelector("[data-create]");
const destroy = document.juerySelector("[data-destroy]");
const boxesContainer = document.juerySelector("#boxes");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let width = 30;
let height = 30;
createButton.addEventListener("click", () => {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  });
createButton(input, value);
destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = '';
  input.value = '';
}
)
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
   box.style.width = 30;
   box.style.height = 30;
  box.style.backgroundColor = getRandomHexColor();
  boxesContainer.appendChild(box);
size += 10;
  }
};




// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.
//  Після натискання на кнопку Create має рендеритися(додаватися в DOM)
//   колекція з відповідною кількістю елементів і очищатися значення в інпуті.
//   При повторному натисканні на кнопку Create поверх старої колекції має
//    рендеритись нова.Після натискання на кнопку Destroy колекція елементів має очищатися.
//    Після натискання користувачем на кнопку Create треба провалідувати значення в input,
//   воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову, мають
//    додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає
// один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount
//  і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову 
// функцію getRandomHexColor() для отримання випадкового кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(),
//   яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
