const mainCounter = document.querySelector("#counter");
const btnDecrement = mainCounter.querySelector('[data-action="decrement"]');
const btnIncrement = mainCounter.querySelector('[data-action="increment"]');
const allValue = mainCounter.querySelector("#value");
let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  allValue.textContent = counterValue -= 1;
});
btnIncrement.addEventListener("click", () => {
  allValue.textContent = counterValue += 1;
});
