const login = document.querySelector(".login");
const welcome = document.querySelector(".welcome");
const loginForm = document.querySelector(".login-form");
const nameInput = document.querySelector("#name-input");

const render = () => {
  const user = localStorage.getItem("username");

  if (user !== null) {
    welcome.innerText = `Hello! ${localStorage.getItem("username")}`;
    loginForm.classList.add("remove");
    welcome.classList.remove("remove");
  } else {
    loginForm.classList.remove("remove");
    welcome.classList.add("remove");
  }
};

const onSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("username", nameInput.value);

  render();
  display();
};

loginForm.addEventListener("submit", onSubmit);

render();
