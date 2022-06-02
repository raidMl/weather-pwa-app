import axios from 'axios';

const Url="https://api.openweathermap.org/data/2.5/weather";
const Api_key="23f94ae3711cf5a228f0b0898fb0bd10";

export const fetchWeather=async(query)=>{

    const {data}=await axios.get(Url,{
        params:{
            q:query,  //location
            units:'metric',
            APPID:Api_key
        }
    });
    return data;

}