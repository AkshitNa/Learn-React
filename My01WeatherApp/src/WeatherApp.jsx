import { useState } from 'react';
import InfoBox from './InfoBox.jsx';
import SearchBox from "./SearchBox.jsx";

export default function WeatherApp()

{
let [weatherInfo, setWeatherinfo] = useState(
    {
    city      : "Dehradun",
    feelsLike : 9.63,
    humidity  : 76,
    temp      : 10.54,
    tempMax   : 12.28,
    tempMin   : 10.06,
    weather   : "haze",
} ); 

let updateWeatherInfo = (result) =>
{
    setWeatherinfo(result);
};

    return(
        <div>
            <h1 style={{textAlign: "center"}}> My Weather App </h1>
             <SearchBox UpdateInfo = {updateWeatherInfo}/>
             <InfoBox info = {weatherInfo}/>
        </div>
    );
}