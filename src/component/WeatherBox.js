import React, { useState, useEffect } from 'react';

const WeatherBox = ({ weather, city}) => {
  const [reloading, setreLoading] = useState(true);

  useEffect(() => {
    if (weather) {
      setreLoading(false); // 날씨 데이터가 있으면 로딩 상태 변경
    }
  }, [weather]);

  if (reloading) {
    return <div className="weather-box">날씨 정보를 불러오는 중...</div>;
  }

  if (!weather || !weather.name) {
    return <div className="weather-box">날씨 정보를 가져올 수 없습니다.</div>;
  }

  console.log("weather-data:", weather);
  console.log(weather.name)
  const tempC = weather.main ? weather.main.temp : "";
  const tempF = weather.main ? (weather.main.temp * 1.8 + 32).toFixed(1) : "";
  const cityhumidity = weather.main ? weather.main.humidity : "";
  const todayweather = weather.weather ? weather.weather[0].description : "";

  let weatherClass = "";
  if(weather.weather) {
    const weatherType = weather.weather[0].main.toLowerCase();
    switch (weatherType){
      case "clear":
        weatherClass="clear";
        break;
      case "rain":
        weatherClass="rain";
        break;
      case "clouds":
        weatherClass="clouds";
        break;
      case "drizzle":
        weatherClass="drizzle";
        break;
      default:
        weatherClass="default";
        break;
    }
  }
  
  return (
    <div className={`weather-box ${weather.name.replace(/\s+/g, '-')}`}>
      <div className={`weather-monitor ${weatherClass}`}></div>
      <div><h1>{weather.name}</h1></div>
      <h2>{`${tempC} °C / ${tempF} °F`}</h2>
      <h3>{cityhumidity}%</h3>
      <h4>{todayweather}</h4>
    </div>
  );
};

export default WeatherBox;
