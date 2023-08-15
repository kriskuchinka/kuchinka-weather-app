function CurrentWeather(props) {
  return (
    <>
      <div>
        <h1>
          {props.city.name},{props.city.state}, {props.city.country}
        </h1>
        <h2>Expect: "{props.description}"</h2>
        <h3>Current Temperature</h3>
        <h4>{props.currentTemp}</h4>
        <div>
          <div>
            <h3>High Temperature:</h3>
            <h4>{props.high}</h4>
          </div>
          <div>
            <h3>Low Temperature:</h3>
            <h4>{props.low}</h4>
          </div>
        </div>
        <div>
          <div>
            <h3>Sunrise:</h3>
            <h4>{props.sunrise}</h4>
          </div>
          <div>
            <h3>Sunset:</h3>
            <h4>{props.sunset}</h4>
          </div>
        </div>
        <div>
          <img src={props.icon} />
        </div>
      </div>
      <div>
        <h2>12 Hour Forecast</h2>
      </div>
      <div>
        <div>
          <h3>Hourly 1</h3>
          <h4>Insert Hourly 1 Info</h4>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
