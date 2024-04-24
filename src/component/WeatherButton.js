import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedcity, currentlocation }) => {
  
  return (
    <div>
      <Button
        variant={`${selectedcity == null ? "light" : "warning"}`}
        onClick={() => currentlocation("current")}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          key={city}
          variant={`${selectedcity == city ? "light" : "warning"}`}
          onClick={() => currentlocation(city)}
        >
          {city.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
