const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach((e) => {
  const category = e.querySelector("h2").innerHTML;
  console.log("Category:", category);
  const length = e.querySelectorAll("ul>li");
  console.log("Elements:", length.length);
});
