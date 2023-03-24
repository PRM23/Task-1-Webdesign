const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d7b5dba1e0msh829c5e9be076f48p106a7djsn6d71d3c23a2f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  // input.innerHTML=input
 

  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() ;
  var day=today.getDay()
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
	dateTime.innerHTML = time+'   '+daylist[day]+'   '+date;
   date.innerHTML=date
  console.log(dateTime)
console.log(date); // 6/17/2022
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      feels_like = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp = response.max_temp;
      min_temp = response.min_temp;
      sunrise = response.sunrise;
      sunse = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

// cityName1.innerHTML = city;




submit.addEventListener("click", (e) => {
  e.preventDefault();
});

const OnSubmit = () => {
  getWeather(city.value);
};

function Show(){
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  console.log("hi",response);
	  
		  cloud.innerHTML = response.cloud_pct;
		  
		  humidity.innerHTML = response.humidity;
		  max_temp = response.max_temp;
		  min_temp = response.min_temp;
		  sunrise = response.sunrise;
		  sunse = response.sunset;
		  temp1.innerHTML = response.temp;
		  wind_degrees = response.wind_degrees;
		  wind_speed.innerHTML = response.wind_speed;
		})
		.catch((err) => console.error(err));
	  
}

function inputBlur() {
    $(".city").css("border-color","1px solid #FFFFF");
}
getWeather("Pune");
Show()

