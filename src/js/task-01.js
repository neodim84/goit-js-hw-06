const catNum = document.querySelectorAll(".item");
console.log("Number of categories:", catNum.length);

const catHeaders = document.querySelectorAll("h2");

catNum.forEach(function (number, i) {
  const catHead = catHeaders[i];
  const elements = catNum[i].querySelectorAll("li");
  console.log("Category:", catHead.textContent);
  console.log("Elements:", elements.length);
});
