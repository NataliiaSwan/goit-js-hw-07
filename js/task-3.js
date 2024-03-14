
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value.trim();
    if (inputValue) {
        nameOutput.textContent = inputValue;
    } else {
        nameOutput.textContent = `Anonymous`;
    }
});

// let input = document.querySelector('#name-input');
// let output = document.querySelector('#name-output');
// input.addEventListener('input', welcome);

// function welcome(event) {
//   console.log(event.currentTarget);
//   console.log(event.targer);
//   const value = event.currentTarget.value;
//   const name = value.trim();
//   if (name === '') {
//     output.textContent = 'Anonymous';
//     return;
//   }
//   output.textContent = name;
// } 