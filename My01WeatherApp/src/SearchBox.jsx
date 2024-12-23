import { useState } from "react"; /* Importing useState */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";

function SearchBox({UpdateInfo})
{

    let[city, setCity] = useState("");

    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "586d32bea48f396539330dc75c933f4a";

    let getWeatherInfo = async () =>
    {

    try
    {
        let response = await fetch( `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        let JSON_RESPONSE = await response.json();

        let result = 
        {
            city: city,
            temp : JSON_RESPONSE.main.temp,
            tempMin : JSON_RESPONSE.main.temp_min,
            tempMax : JSON_RESPONSE.main.temp_max,
            humidity : JSON_RESPONSE.main.humidity,
            feelsLike : JSON_RESPONSE.main.feels_like,
            weather : JSON_RESPONSE.weather[0].description,
        } 

        console.log(result);
        return result;
    }

    catch(err){throw err;}

    };

    function searchCity(event)
    {
        setCity(event.target.value);
    }

    let HandleForm = async (event) =>
    {
        try
        {
            event.preventDefault();
            console.log("Entered City is : " + city);
            setCity("");
            let newInfo = await getWeatherInfo();
            UpdateInfo(newInfo);
        }
        
        catch(err) {setError(true);}
       
    }

    return(
        <div className= "container">
           <h3> Weather Search Box </h3>
           <br />
           <form onSubmit={HandleForm}>
           <TextField id="city" label="City Name" variant="outlined" value={city} onChange={searchCity} required/> <br /> <br />
           <Button variant="contained" type="submit"> Search </Button>
           {error && <Alert severity="error"> No such place in our API </Alert>}
           </form>
        </div>
    );
}

export default SearchBox;