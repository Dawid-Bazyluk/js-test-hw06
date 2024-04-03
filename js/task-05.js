const input = document.querySelector("name-input");
const output = document.querySelector("name-output");

const changeOutput = () => {
  if (input.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = input.value;
  }
};

input.addEventListener("input", changeOutput);
