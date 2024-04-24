import {useEffect, useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

const API_KEY = '040347aad8eefbe8027a0cb58edd9c93';
const cities=["paris","new york","tokyo","seoul"]

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태
// 3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른도시)
// 4. 도시 버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const[weather,setweather] = useState(null);
  const[city,setcity]=useState(null);
  const[loading,setloading]=useState(false);
  const[apiError,setAPIError] = useState("");
  
  const getWeatherData = async(lat,lon)=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`;
      setloading(true);
      let response = await fetch(url);
      let data = await response.json();

      setweather(data);
      setloading(false);
    } catch(err) {
      setAPIError(err.message);
      setloading(false);
    }
    
  }

  const currentlocation = (city) =>{
    if(city ==="current"){
      setcity(null);
    } else {
      setcity(city);
    }
  };

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherData(lat,lon);
    });
  }


  const getWeatherByCity=async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`
      setloading(true);
      let response = await fetch(url);
      let data = await response.json();

      setweather(data);
      setloading(false);
    } catch (err){
      console.log(err);
      setAPIError(err.message);
      setloading(false);
    }   
  }

  useEffect(()=>{
    if(city==null){
      setloading(true);
      getCurrentLocation();
    } else {
      setloading(true);
      getWeatherByCity()
    }
  },[city])

 
  return (
    <div>
      {loading? (
      <div className="container">
      <ClipLoader color="red" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/>
      </div>) : 
      (<div className="container">
      <WeatherBox weather={weather}/>
      <WeatherButton cities={cities} selectedcity={city} currentlocation={currentlocation} />
      </div>)}
      
    </div>
  );
}

export default App;