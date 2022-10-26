const temperature = 0
const wind_speed  = 6.5

const temperature_output = document.querySelector(".temperature")
const wind_speed_output = document.querySelector(".wind_speed")
const wind_chill_output = document.querySelector(".wind_chill")

if(temperature <= 50 && wind_speed > 3.0) {
 //calculating code
 const wind_chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind_speed, 0.16)) + (0.4275 * temperature * Math.pow(wind_speed, 0.16))
    temperature_output.innerHTML = temperature
    wind_speed_output.innerHTML = wind_speed
    wind_chill_output.innerHTML = Math.round(wind_chill, 2)
} else {
    temperature_output.innerHTML = temperature
    wind_speed_output.innerHTML = wind_speed
    wind_chill_output.innerHTML = "N/A"
}


