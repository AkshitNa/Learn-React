import './InfoBox.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info})

{

const snowImageURL = "https://cdn.pixabay.com/photo/2017/08/03/14/36/winter-2576611_640.jpg"

const HotURL = "https://www.shutterstock.com/shutterstock/photos/2180686193/display_1500/stock-vector-handsome-young-man-suffering-from-heat-wave-stoke-in-very-hot-weather-temperature-2180686193.jpg";
const ColdURL = "https://wexnermedical.osu.edu/-/media/images/wexnermedical/blog/2020-stories/01/frostbite-eyes/coldeyessafety_large.jpg";
const RainURL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";


    return(
        <div className="InfoBox">
        <h3> Weather Info </h3>

        <div className='cardContainer'>

        <Card sx={{ maxWidth: 345 }} className='num2'>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity>60 ? RainURL : (info.temp > 15) ? HotURL : ColdURL}
        title= "green iguana"
      />
      <CardContent className='num'>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} { info.humidity>60 ? <ThunderstormIcon/> : (info.temp > 15) ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Weather = {info.weather} </p>
          <p> Temperature = {info.temp} &deg; C </p>
          <p> Maximum Temperature = {info.tempMax} &deg; C </p>
          <p> Minimum Temperature = {info.tempMin} &deg; C </p>
          <p> Humidity = {info.humidity}</p>
          <p> The Weather is described as  <b> {info.weather} </b> and feels like <b> {info.feelsLike} &deg; C </b> </p>
        </Typography>
      </CardContent>
    </Card>

    </div>

        </div>
    );
}