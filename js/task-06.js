const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const validLength = event.currentTarget.value.trim().length;
  if (validLength >= input.dataset.length) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else if (input.classList.contains("valid")) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  //   else {
  //     if (
  //       event.currentTarget.value.trim() === "" &&
  //       input.classList.contains("invalid")
  //     ) {
  //       input.classList.remove("invalid");
  //       input.classList.add("default");
  //     }
  //   }
});
