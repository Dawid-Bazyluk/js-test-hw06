const input = document.querySelector("#validation-input");

const logic = () => {
  if (input.value.length == input.dataset.length) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
};

input.addEventListener("blur", logic);
