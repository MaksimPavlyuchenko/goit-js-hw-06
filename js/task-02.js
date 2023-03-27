const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const result = document.querySelector("#ingredients");
const element = ingredients.map((value) => {
  const li = document.createElement("li");
  li.textContent = `${value}`;
  li.classList.add = "item";
  return li;
});
result.append(...element);
console.log(result);
// console.log(result.lastElementChild.textContent);
