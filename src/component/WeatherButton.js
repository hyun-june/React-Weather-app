import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setcity,currentlocation}) => {
    
  return (
    <div>
        <Button variant="warning" onClick={()=>currentlocation("current")}>Current Location</Button>
        
        {cities.map((item,index) => (
            <Button variant="warning" key={index} onClick={()=>currentlocation(item)}>{item.toUpperCase()}</Button>
        ))}
    </div>
  )
}

export default WeatherButton