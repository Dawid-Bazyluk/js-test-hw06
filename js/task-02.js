const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((e) => {
  const item = document.createElement("li");
  item.innerHTML = e;
  item.classList.add("item");
  list.append(item);
});
