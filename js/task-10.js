function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector(".boxes");
const textInput = document.querySelector("#controls");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");

createEl.addEventListener("click", (event) => {
  function createBoxes(amount) {
    const amount = textInput.firstElementChild.value;
    console.log(amount);
  }
});
