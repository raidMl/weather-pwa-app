import React,{useState} from 'react';
import './App.css';
import './api/fetchWeather'
import { fetchWeather } from './api/fetchWeather';
function App() {
  const[query,setQuery]=useState('');
  const[weather,setWeather]=useState({});

  const search=async(e)=>{
    if(e.key==='Enter'){
    const data=await fetchWeather(query);
    setWeather(data);
    setQuery('');
  }
  }
  return (
 <div className='cont'> 
 <a href='https://www.instagram.com/raid_dev/' className='contact glow-on-hover'>contact</a>
<div className='main-container'>
<h1 className="welcome">Welcome to weather app</h1>
  <input 
  type="text"
  className='search'
  placeholder="Search..."
  value={query}
  onChange={(e)=>setQuery(e.target.value)}
  onKeyPress={search}
  />

  {weather.main &&(
    <div className='city'>
      <h2 className='city-name'><span >{weather.name}</span>
      <sup>{weather.sys.contry}</sup>
      </h2>
      <div className='city-temp'>
        {Math.round(weather.main.temp)}
        <sup>&deg;C</sup>
      </div>
      
      {/* info */}
      <div className='info'>
        <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather.weather[0].description"/>
    
    </div>
    <p>{weather.weather[0].description}</p>
    </div>
  )}
</div>   </div>
  );
}

export default App;
