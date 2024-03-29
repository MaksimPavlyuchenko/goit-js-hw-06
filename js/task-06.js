const input = document.querySelector("#validation-input");
console.log(input.dataset.length);
input.addEventListener("blur", (event) => {
  const validLength = event.currentTarget.value.trim().length;
  if (validLength === 6) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else if (
    validLength <= input.dataset.length ||
    validLength >= input.dataset.length
  ) {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
  } else {
    if (
      event.currentTarget.value.trim() === "" &&
      input.classList.contains("invalid")
    ) {
      input.classList.remove("invalid");
      input.classList.add("default");
    }
  }
});
