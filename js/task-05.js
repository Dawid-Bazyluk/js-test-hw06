const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const changeOutput = () => {
  if (inputText.value === "") {
    outputText.innerHTML = "Anonymous";
  } else {
    outputText.innerHTML = inputText.value;
  }
};

inputText.addEventListener("input", changeOutput);
