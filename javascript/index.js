
function updateTime() {
   // Johannesburg
let johannesburgElement = document.querySelector("#johannesburg");
johannesburgDateElement = johannesburgElement.querySelector(".date");
johannesburgTimeElement = johannesburgElement.querySelector(".time");
johannesburgTime = moment().tz("Africa/Johannesburg");

johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY"); 
johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss:SSS [<small>]A[</small>]"); 

// Tokyo
let tokyoElement = document.querySelector("#tokyo");
tokyoDateElement = tokyoElement.querySelector(".date");
tokyoTimeElement = tokyoElement.querySelector(".time");
tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY"); 
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss:SSS [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1);


