const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const dataForm = {
    email: email,
    password: password,
  };
  console.log(dataForm);
  loginForm.reset();
}
