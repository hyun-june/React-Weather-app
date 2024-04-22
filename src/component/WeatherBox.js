import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("??",weather)
  return (
    <div className="weather-box">
        <div><h1>{weather?.name}</h1></div>
        <h2>{weather?.main.temp}℃/ {(weather?.main.temp*1.8+32).toFixed(1)}°F</h2>
        <h3>{weather?.main.humidity}%</h3>
        <h4>{weather?.weather[0].description}</h4>
    </div>
  )
}

export default WeatherBox