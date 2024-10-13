import PropTypes from "prop-types";
import "./styles.css";

const WeatherResult = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No data</p>;
  }

  return (
    <div>
      <h1>Weather data {weatherData.location.region}</h1>
      <p>Country: {weatherData.location.country}</p>
      <p>Localtime: {weatherData.location.localtime}</p>
      <p>Last update: {weatherData.current.last_updated}</p>
      <p>Temperature in celcius: {weatherData.current.temp_c}</p>
      <p>Temperature in fareinheit: {weatherData.current.temp_f}</p>
      <p>
        Condition: {weatherData.current.condition.text}
        <img id="WeatherIcon" src={weatherData.current.condition.icon}></img>
      </p>
    </div>
  );
};

WeatherResult.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherResult;
