const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  if (email.value === "" || password.value === "") {
    return alert("Warning! All fields must be filled");
  }
  event.currentTarget.reset();
}
