function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector("body");
const spanColor = document.querySelector("color");
const btnColorChange = document.querySelector("change-color");
