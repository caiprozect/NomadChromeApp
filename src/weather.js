const API_KEY = "6b006fb1c1343aabcd4f1789e26619d4";

const onGeoError = () => {
  alert("Can't find your location");
};

const onGeoOk = (position) => {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;

  const openweather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  fetch(openweather)
    .then((resp) => resp.json())
    .then((data) => {
      const weather = data.weather[0].description;
      const location = data.name;

      console.log(data);

      document.querySelector(".weather").innerText = weather;
      document.querySelector(".location").innerText = location;
    });
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
