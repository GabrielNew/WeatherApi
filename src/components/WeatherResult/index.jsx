import PropTypes from "prop-types";

const WeatherResult = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No data</p>;
  }

  return (
    <div>
      <h2>Weather data</h2>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
};

WeatherResult.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherResult;
