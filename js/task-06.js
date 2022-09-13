const textInput = document.querySelector("#validation-input");
const textLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(textLength)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else event.currentTarget.classList.add("invalid");
  event.currentTarget.classList.remove("valid");
});
