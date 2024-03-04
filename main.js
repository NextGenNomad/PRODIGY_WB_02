// variables declaration 
const searchBar = document.querySelector('.search input')
const searchBtn = document.querySelector('.search-btn')
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const weatherImg =  document.querySelector('.weather-img')

// function

const weatherContent = async city_name => {
    const API_KEY = '042fd11c7191ff4974d528ec37df586f'
    const weatherAPI  = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

  try{
    let res = await fetch(weatherAPI+ city_name + `&appid=${API_KEY}`)
    let data = await res.json() // Await the JSON parsing

    if(res.status === 404) {
      document.querySelector('.error').style.display = 'block'
      document.querySelector('.weather-content').style.display = 'none'
    }else {
      // weather main details
      if(data.weather[0].main === 'Rain') {
        weatherImg.src = 'assets/img/rain.png'
      }

      if(data.weather[0].main === 'Clouds') {
        weatherImg.src = 'assets/img/clouds.png'
      }

      if(data.weather[0].main === 'Snow') {
        weatherImg.src = 'assets/img/snow.png'
      }

      if(data.weather[0].main === 'Sunny-rain') {
        weatherImg.src = 'assets/img/sunny.png'
      }

      if(data.weather[0].main === 'Drizzle') {
        weatherImg.src = 'assets/img/drizzle.png'
      }

      if(data.weather[0].main === 'Clear') {
        weatherImg.src = 'assets/img/clear.png'
      }

      if(data.weather[0].main === 'Mist') {
        weatherImg.src = 'assets/img/mist.png'
      }


        temp.textContent = Math.floor(data.main.temp)+ '°C'
        city.textContent = data.name

        // weather sub details
        document.querySelector('.humidity').textContent = data.main.humidity + '%'
        document.querySelector('.wind-speed').textContent = data.wind.speed + 'kh/h'

        document.querySelector('.weather-content').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    }
    
  }catch(err) {
    console.log(err);
  }
  
}

// events

searchBtn.addEventListener('click', ()=> {
    weatherContent(searchBar.value)
})

