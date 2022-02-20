const body = document.querySelector("body");

const randomIdx = Math.floor(Math.random() * 3) + 1;

body.style.backgroundImage = `url("img/bg${randomIdx}.jpg")`;
