// const ele = document.getElementById('blankdiv');

// ele.innerHTML =  `<img src="Map.png" usemap="#colorado">
// <map id="colorado" name="colorado">
//     <area shape="circle" alt="Denver" coords="280,250,15" href="Denver.html">
//     <area shape="circle" alt="Aurora" coords="575,280,15" href="Aurora.html">
//     <area shape="circle" alt="Lakewood" coords="120,330,15" href="Lakewood.html">
//     <area shape="circle" alt="Englewood" coords="290,470,15" href="Englewood.html">
//     <area shape="circle" alt="Littleton" coords="240,550,15" href="Littleton.html">
//     <area shape="circle" alt="Centennial" coords="495,630,15" href="Centennial.html">
//     <area shape="circle" alt="Arvada" coords="110,105,15" href="Arvada.html">
//     <area shape="circle" alt="Westminster" coords="200,25,15" href="Westminster.html">
// </map>`;

// ele.scrollTop = 150;
// ele.scrollRight = 160;
// let pos = { top: 0, left: 0, x: 0, y: 0 };

// const mouseDownHandler = function (e) {
//     pos = {
//         // The current scroll
//         left: ele.scrollLeft,
//         top: ele.scrollTop,
//         // Get the current mouse position
//         x: e.clientX,
//         y: e.clientY,
//     };

//     document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
// };

// const mouseMoveHandler = function (e) {
//    // How far the mouse has been moved
//    const dx = e.clientX - pos.x;
//    const dy = e.clientY - pos.y;

//    // Scroll the element
//    ele.scrollTop = pos.top - dy;
//    ele.scrollLeft = pos.left - dx;
// };

const currentTime= new Date ();
const time = document.getElementById("cTime");
time.innerHTML= currentTime.toLocaleTimeString();

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5419384&appid=6bb4a1786da54716a7c810b6da4e545e&units=imperial" //Zip search
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