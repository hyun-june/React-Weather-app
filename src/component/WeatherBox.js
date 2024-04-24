import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("??", weather);
  const tempC = weather && weather.main ? weather.main.temp : "";
  const tempF = weather && weather.main ? (weather.main.temp * 1.8 + 32).toFixed(1) : "";
  const cityhumidity = weather && weather.main ? weather.main.humidity : "";
  const todayweather = weather && weather.weather ? weather.weather[0].description : "";

  return (
      <div className="weather-box">
          <div><h1>{weather?.name || '날씨를 가져오는데 실패했습니다.'}</h1></div>
          <h2>{`${tempC} °C / ${tempF} °F`}</h2>
          <h3>{cityhumidity}%</h3>
          <h4>{todayweather}</h4>
      </div>
  );
};

export default WeatherBox;