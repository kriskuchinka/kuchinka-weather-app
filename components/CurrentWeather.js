function CurrentWeather(props) {
  return (
    <div>
      <h1>
        {props.city.name},{props.city.state}, {props.city.country}
      </h1>
      <h1>Current Temperature</h1>
      <h3>{props.currentTemp}</h3>
      <div>
        <div>
          <h3>Insert Temp High</h3>
        </div>
        <div>
          <h3>Insert Temp Low</h3>
        </div>
      </div>
      <div>
        <div>
          <h3>Sunrise</h3>
          <h4>Insert Sunrise Time</h4>
        </div>
        <div>
          <h3>Sunset</h3>
          <h4>Insert Sunset Time</h4>
        </div>
      </div>
      <div>
        <p>Weather Image</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
