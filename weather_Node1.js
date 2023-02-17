const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/weather.html");
});

app.post("/", function (req, res) {
  const query = "London";
  const apiKey = "bac4d6f49f6003758de5ba6a0a8ba5a7";
  const url = "api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey +"&units=metric";
  https.get(url, function (response) {
    console.log(response.status);
    response.on("data", function () {
      const weatherData = Json.parse(data);
      const temp = weatherData.main.temp;
      const weatherD = weather.main.description;
      const weatherIcon = weather.main[0].icon;
      const WeatherIMG = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
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
