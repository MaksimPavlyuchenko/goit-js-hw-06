function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChange = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorName = document.querySelector(".color");
btnChange.addEventListener("click", changeColor);
function changeColor(event) {
  const color = (body.style.backgroundColor = getRandomHexColor());
  // btnChange.style.backgroundColor = getRandomHexColor();
  colorName.textContent = color;
}
