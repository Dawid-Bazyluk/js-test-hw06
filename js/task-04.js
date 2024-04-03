let counterValue = 0;
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnPlus.addEventListener("click", increment);

btnMinus.addEventListener("click", decrement);
