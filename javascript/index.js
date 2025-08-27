
function updateTime() {
   // Johannesburg
let johannesburgElement = document.querySelector("#johannesburg");
if (johannesburgElement) {
johannesburgDateElement = johannesburgElement.querySelector(".date");
johannesburgTimeElement = johannesburgElement.querySelector(".time");
johannesburgTime = moment().tz("Africa/Johannesburg");

johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY"); 
johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss:SSS [<small>]A[</small>]"); 
}
// Tokyo
let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
tokyoDateElement = tokyoElement.querySelector(".date");
tokyoTimeElement = tokyoElement.querySelector(".time");
tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY"); 
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss:SSS [<small>]A[</small>]");
}}

updateTime();
setInterval(updateTime, 1);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split('/')[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =  `
    <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss:SSS")}<small>${cityTime.format(" A ")}</small></div>
      </div>
    
    `;

}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);



