const todoForm = document.querySelector(".todo-form");

const display = () => {
  const todoDisplay = document.querySelector(".todo-display");

  const user = localStorage.getItem("username");
  const todos = localStorage.getItem("todoStr");
  const todoArr = JSON.parse(todos);

  if (user === null) {
    localStorage.setItem("todoStr", JSON.stringify([]));

    document.querySelector(".todo-list").classList.add("hidden");

    return;
  }

  if (todos === null) {
    localStorage.setItem("todoStr", JSON.stringify([]));
  }

  document.querySelector(".todo-list").classList.remove("hidden");

  todoArr.forEach((item) => {
    const li = document.createElement("div");
    li.classList.add("todo-item");
    const rm = document.createElement("p");
    rm.classList.add("todo-rm-button");
    rm.addEventListener("click", removeTodo);
    const txt = document.createElement("p");
    txt.classList.add("todo-txt");

    rm.innerText = "X";
    rm.id = `${item.id}`;
    txt.innerText = `${item.content}`;

    li.appendChild(rm);
    li.appendChild(txt);

    todoDisplay.appendChild(li);
  });
};

const removeTodo = (event) => {
  const todoArr = JSON.parse(localStorage.getItem("todoStr"));

  const filteredArr = todoArr.filter((element) => {
    return element.id !== event.target.id;
  });

  localStorage.setItem("todoStr", JSON.stringify(filteredArr));

  event.target.parentElement.remove();
};

const putUpTodo = (event) => {
  event.preventDefault();

  let todoArr = JSON.parse(localStorage.getItem("todoStr"));

  const id = new Date();
  const content = document.querySelector(".todo-input").value;

  const item = { id, content };

  todoArr.push(item);

  localStorage.setItem("todoStr", JSON.stringify(todoArr));
  document.querySelector(".todo-input").value = null;

  const todoDisplay = document.querySelector(".todo-display");

  const li = document.createElement("div");
  li.classList.add("todo-item");
  const rm = document.createElement("p");
  rm.classList.add("todo-rm-button");
  rm.addEventListener("click", removeTodo);
  const txt = document.createElement("p");
  txt.classList.add("todo-txt");

  rm.innerText = "X";
  rm.id = `${item.id}`;
  txt.innerText = `${item.content}`;

  li.appendChild(rm);
  li.appendChild(txt);

  todoDisplay.appendChild(li);
};

todoForm.addEventListener("submit", putUpTodo);

display();
