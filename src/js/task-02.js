const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingList = ingredients.map(
  (ingredient) => `<li class="item"><p>${ingredient}</p></li>`
);

list.insertAdjacentHTML("afterbegin", ingList);
