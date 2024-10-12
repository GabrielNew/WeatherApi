import { useState } from "react";
import Header from "../../components/Header";
import WeatherResult from "../../components/WeatherResult";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleFetchData = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <Header onFetchData={handleFetchData}></Header>
      <WeatherResult weatherData={weatherData}></WeatherResult>
    </div>
  );
};

export default Home;
