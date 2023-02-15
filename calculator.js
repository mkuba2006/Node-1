const express = require("express");
const app = express();
const https = require("https");
const URL =
  "api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=bac4d6f49f6003758de5ba6a0a8ba5a7&units=metric";
app.get("/", function (req, res) {
  //res.send("<h1>Hello Guys</h1>");

  https.get(URL, function (response) {
    console.log(response.status);

    response.on("data", function () {
      const weatherData = Json.parse(data);
      const temp = weatherData.main.temp;
      const weatherD = weather.main.description;
      const weatherIcon = weather.main[0].icon;
      const WeatherIMG =
        "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
      res.write("<p>Weather is" + weatherD + "</p>");
      res.write("<p>Temperature is" + temp + "</p>");
      res.write("<img>" + WeatherIMG + "</img>");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("started on port 3000");
});
