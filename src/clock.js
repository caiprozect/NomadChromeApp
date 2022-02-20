const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const radius = "12vw";

const drawClock = () => {
  const now = new Date();

  const hour = ((now.getHours() + 11) % 12) + 1;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourAngle = hour * 30;
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;

  hourEl.style.transform = `translate(-50%, -50%) rotate(${hourAngle}deg) translateY(calc(-${radius} + 100%))`;
  minuteEl.style.transform = `translate(-50%, -50%) rotate(${minuteAngle}deg) translateY(calc(-${radius} - 160%))`;
  secondEl.style.transform = `translate(-50%, -50%) rotate(${secondAngle}deg) translateY(calc(-${radius} - 30%))`;

  hourEl.querySelector("p").innerText = `${hour}H`;
  minuteEl.querySelector("p").innerText = `${minute}M`;
  secondEl.querySelector("p").innerText = `${second}S`;

  hourEl.querySelector("p").style.transform = `rotate(-${hourAngle}deg)`;
  minuteEl.querySelector("p").style.transform = `rotate(-${minuteAngle}deg)`;
  secondEl.querySelector("p").style.transform = `rotate(-${secondAngle}deg)`;
};

setInterval(drawClock, 1000);
