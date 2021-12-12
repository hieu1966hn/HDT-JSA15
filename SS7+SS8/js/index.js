// Call API ở đây
const APP_ID = '651daf0af47eb49a9b65a0007afcce53';
// bọc nó dưới dạng chỗi nhé các em.
const searchInput = document.querySelector("#search-input");

const cityName = document.querySelector('.city-name')
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");




// let city = "hanoi"
// // call API với fetch trong Javascript:
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`)
//   .then(
//     async function (res) {
//       const data = await res.json();

//       console.log(data);// in ra dữ liệu được gửi về từ trang openweather
//     }
//   )


