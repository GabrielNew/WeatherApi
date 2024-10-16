import PropTypes from "prop-types";
import "./styles.css";

const WeatherResult = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div id="DataResult">
        <p>No data</p>
      </div>
    );
  }

  return (
    <div id="DataResult">
      <p>Country: {weatherData.location.country}</p>
      <p>State: {weatherData.location.region}</p>
      <p>Localtime: {weatherData.location.localtime}</p>
      <p>Last update: {weatherData.current.last_updated}</p>
      <p>Temperature in Celcius: {weatherData.current.temp_c}</p>
      <p>Temperature in Fahrenheit: {weatherData.current.temp_f}</p>
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
