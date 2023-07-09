const getWeather = (city) => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3b8b797fb9msh62aa0db262ebf8cp1d45fejsn8d14c406473c",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cityName.innerHTML = city;

      // Updating 3 Containers
      document.getElementsByClassName("card-title")[0].innerHTML =
        response.temp == undefined
          ? "--"
          : response.temp + `<span>&#8451;</span>`;
      document.getElementsByClassName("big-humidity")[0].innerHTML =
        response.humidity == undefined
          ? "--"
          : response.humidity + `<span>%</span>`;
      document.getElementsByClassName("big-windSpeed")[0].innerHTML =
        response.wind_speed == undefined
          ? "--"
          : response.wind_speed + `<span> Km/h</span>`;

      cloud_pct.innerHTML =
        response.cloud_pct === undefined ? "--" : response.cloud_pct;
      temp.innerHTML = response.temp === undefined ? "--" : response.temp;
      feels_like.innerHTML =
        response.feels_like === undefined ? "--" : response.feels_like;
      humidity.innerHTML =
        response.humidity === undefined ? "--" : response.humidity;
      min_temp.innerHTML =
        response.min_temp === undefined ? "--" : response.min_temp;
      max_temp.innerHTML =
        response.max_temp === undefined ? "--" : response.max_temp;
      wind_speed.innerHTML =
        response.wind_speed === undefined ? "--" : response.wind_speed;

      const srtime = response.sunrise;
      const date = new Date(srtime * 1000);
      // const ampm = date.getHours() > 12 ? " PM" : " AM";
      const sunRiseTime =
        date.getHours() +
        ":" +
        (date.getMinutes() >= 9 ? date.getMinutes() : "0" + date.getMinutes()) +
        ":" +
        date.getSeconds();
      sunrise.innerHTML = srtime === undefined ? "--" : sunRiseTime;

      const sstime = response.sunset;
      const dateforss = new Date(sstime * 1000);
      // const AMPM = dateforss.getHours() > 12 ? " PM" : " AM";

      const sunSetTime =
        dateforss.getHours() +
        ":" +
        (dateforss.getMinutes() >= 9
          ? dateforss.getMinutes()
          : "0" + dateforss.getMinutes()) +
        ":" +
        dateforss.getSeconds();
      sunset.innerHTML = sstime === undefined ? "--" : sunSetTime;

      // Update Table
      const res = [];
      const keys = Object.keys(response);
      let cnt = 0;
      keys.forEach((key) => {
        res[cnt++] = response[key];
      });
      cnt = 0;

      if (city == "Gujarat") {
        let r1 = document.querySelectorAll(".row-1");
        Array.from(r1).forEach((e) => {
          e.innerHTML = res[cnt++];
        });
      } else if (city == "Delhi") {
        let r2 = document.querySelectorAll(".row-2");
        Array.from(r2).forEach((e) => {
          e.innerHTML = res[cnt++];
        });
      } else if (city == "Mumbai") {
        let r3 = document.querySelectorAll(".row-3");
        Array.from(r3).forEach((e) => {
          e.innerHTML = res[cnt++];
        });
      }
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
