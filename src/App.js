import {useEffect, useState} from "react"
import './App.css';

const API_KEY = '040347aad8eefbe8027a0cb58edd9c93';

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태
// 3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른도시)
// 4. 도시 버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log("현재",lat,lon)
      getWeatherData(lat,lon);
      console.log(getWeatherData())
    });
  }

  const getWeatherData = async(lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  }

  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default App;
