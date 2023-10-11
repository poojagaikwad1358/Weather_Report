const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const inputCity = document.getElementById('input_city').value
  
  if(inputCity===''){
    alert('Please enter city name')
  }
  else{
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=9a619f6c1a65c7848cebca88bebd5cfe&units=metric"
  
    fetch(url).then((res)=>{
      return res.json();
    }).then((data)=>{      
        console.log(data)
        const temperature = Math.floor(data.main.temp)
        cardBody = document.getElementById('card-body')
        cardBody.style.display = 'block'
        document.getElementById('city-name').innerHTML = inputCity
        document.getElementById('temprature').innerHTML = `${temperature}&#8451`;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" +data.weather[0].icon+ ".png"
        document.getElementById("description").innerHTML = data.weather[0].description;
        document.getElementById("humidity").innerHTML = "Humidity: "+data.main.humidity;
        document.getElementById("wind").innerHTML =`Wind Speed: ${data.wind.speed}<small>km/h</small>`  
      
      }).catch((err)=>{
      alert(err)
    })
  }

  function updateDateTime() {
    const dateElement = document.getElementById('date');
            const timeElement = document.getElementById('time');
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = now.toLocaleDateString('en-US', options);
            const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'});

            dateElement.textContent = formattedDate;
            timeElement.textContent = formattedTime;
}

  updateDateTime();
})














// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form'); // Select the form element
//   const inputCity = document.getElementById('input_city');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const cityName = inputCity.value;

//     if (cityName === '') {
//       alert('Please enter a city');
//     } else {
//       const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           document.querySelector('.city-name').textContent = `Weather in ${cityName}`;
//           document.querySelector('.temprature').textContent = `${data.main.temp}°C`;
//           document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//           document.querySelector('.description').textContent = data.weather[0].description;
//           document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
//           document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

          
//         })
//         .catch((error) => {
//           alert('City not found');
//         });
//     }
//   });
// });
