let counterValue = 0;
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const increase = () => {
  counterValue += 1;
  value.value = counterValue;
};

btnPlus.addEventListener("click", increase);
