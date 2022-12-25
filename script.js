const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43117066bemsh260de2390d25652p1a549fjsn5e7cb037d3a1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bengaluru");

const cities = [
  "Los Angeles",
  "Buenos Aires",
  "London",
  "Johannesburg",
  "Dubai",
  "Moscow",
  "Tokyo",
];
const tableBody = document.getElementById("popular-cities");
let tableData = "";
function getAllweather(cities) {
  for (let i = 0; i < cities.length; i++) {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        cities[i],
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        var row = tableBody.insertRow();
        var a = row.insertCell(0);
        a.innerHTML = cities[i];
        var b = row.insertCell(1);
        b.innerHTML = response.temp;
        var c = row.insertCell(2);
        c.innerHTML = response.humidity;
        var d = row.insertCell(3);
        d.innerHTML = response.wind_speed;
        //     tableData += ` <tr>
        //     <th scope="row" class="text-start">Los Angeles</th>
        //     <td>${response.temp}<span id="los-angeles"></span></td>
        //     <td>${response.humidity}</td>
        //     <td>${response.wind_speed}</td>
        //   </tr>`;
      });
  }

  tableBody.innerHTML += tableData;
  console.log(tableBody);
}

getAllweather(cities);
