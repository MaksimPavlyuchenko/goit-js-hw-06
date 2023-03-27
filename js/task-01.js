const categories = document.querySelector("#categories");

const quantityCategories = () => {
  console.log(`Number of categories: ${categories.children.length}`);
};
quantityCategories();

const itemCategories = () => {
  const arrayItem = Array.from(categories.children);
  arrayItem.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
  });
};
itemCategories();
