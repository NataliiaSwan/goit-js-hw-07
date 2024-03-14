// const btnColor = document.querySelector('.change-color');
// const spanColor = document.querySelector('.color');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// btnColor.addEventListener('click', () => {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   spanColor.textContent = randomColor;
// });






function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    span.textContent = newColor;
});