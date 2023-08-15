import Link from "next/link";
import LocationSearchBar from "../../components/LocationSearchBar";
import CurrentWeather from "../../components/CurrentWeather";
import cityData from "../../data/city.list.json";
import moment from "moment-timezone";

export async function getServerSideProps(context) {
  const city = context.params.city.split("-");
  const cityId = Number(city[1]);
  if (!cityId) {
    return null;
  }
  const filteredCity = cityData.filter((city) => {
    if (city.id === cityId) {
      return city;
    }
  });

  console.log(city);
  console.log(cityId);
  console.log(filteredCity);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${filteredCity[0].coord.lat}&lon=${filteredCity[0].coord.lon}&appid=${process.env.NEXT_API_KEY}&units=imperial`
  );
  const data = await response.json();
  console.log(data);
  const timeZone = data.timezone;
  return {
    props: {
      city: filteredCity,
      currentTemp: Number(data.current.temp).toFixed(1),
      high: Number(data.daily[0].temp.max).toFixed(1),
      low: Number(data.daily[0].temp.min).toFixed(1),
      icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`,
      description: data.current.weather[0].description,
      sunrise: moment.unix(data.current.sunrise).tz(timeZone).format("LT"),
      sunset: moment.unix(data.current.sunset).tz(timeZone).format("LT"),
      hourlyData: data.hourly,
      timeZone: timeZone,
    },
  };
}

export default function Location(props) {
  return (
    <>
      <div>
        <Link href="/">&#8592;Go Home, Dorothy!</Link>
      </div>
      <div>
        <LocationSearchBar />
      </div>
      <div>
        <CurrentWeather
          currentTemp={props.currentTemp}
          city={props.city[0]}
          high={props.high}
          low={props.low}
          icon={props.icon}
          description={props.description}
          sunrise={props.sunrise}
          sunset={props.sunset}
        />
      </div>
    </>
  );
}
