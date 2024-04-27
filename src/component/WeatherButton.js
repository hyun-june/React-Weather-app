import React from 'react';
import WeatherBox from './WeatherBox';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedcity, currentlocation }) => {
  
  return (
    <div>
      <Button id="weather-btn"
        variant={`${selectedcity == null ? "warning" : "outline-warning"}`}
        onClick={() => currentlocation("current")}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button id="weather-btn"
          key={city}
          variant={`${selectedcity == city ? "warning" : "outline-warning"}`}
          onClick={() => currentlocation(city)}
        >
          {city.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
