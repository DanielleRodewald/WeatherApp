const currentTime= new Date ();
const time = document.getElementById("cTime");
time.innerHTML= currentTime.toLocaleTimeString();

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5416541&appid=6bb4a1786da54716a7c810b6da4e545e&units=imperial" //Zip search
fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo)=> {
   console.log(weatherInfo);
   console.log(weatherInfo.name);
   document.getElementById("cityName").textContent = weatherInfo.name + ", CO";
   document.getElementById("mainTemp").textContent = weatherInfo.main.temp + "°F";
   document.getElementById("description").textContent = weatherInfo.weather[0].description;
   document.getElementById("feelsLike").textContent = weatherInfo.main.feels_like + "°F";
   document.getElementById("windSpeed").textContent = weatherInfo.wind.speed + "MPH";
   document.getElementById("humidity").textContent = weatherInfo.main.humidity + "%";

   const iconcode= weatherInfo.weather[0].icon;
   const icon_path= "//openweathermap.org/img/w/" + iconcode + ".png";
   document.getElementById("weatherIcon").src= icon_path;
}
);


const apiURLForecast = "//api.openweathermap.org/data/2.5/forecast?lat=39.742043&lon=-104.991531&appid=6bb4a1786da54716a7c810b6da4e545e&units=imperial" //Zip search
fetch (apiURLForecast)
.then((response) => response.json())
.then((data)=> {
   console.log(data);
   document.getElementById("morning").textContent = data.list[1].main.temp + "-" + data.list[2].main.temp + "°F";
   document.getElementById("afternoon").textContent = data.list[3].main.temp + "-" + data.list[4].main.temp + "°F";
   document.getElementById("evening").textContent = data.list[5].main.temp + "-" + data.list[6].main.temp + "°F";


}
);