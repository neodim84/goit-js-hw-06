let counterValue = 0;
const cV = document.querySelector("#value");

const dec = document.querySelector('[data-action="decrement"]');
const inc = document.querySelector('[data-action="increment"]');

dec.addEventListener("click", () => {
  counterValue -= 1;
  cV.textContent = counterValue;
});

inc.addEventListener("click", () => {
  counterValue += 1;
  cV.textContent = counterValue;
});
