const sizeControl = document.querySelector("#font-size-control");
const fontControl = document.querySelector("#text");

const changeSize = sizeControl.addEventListener("input", (event) => {
  fontControl.style.fontSize = `${event.currentTarget.value}px`;
});
