import { useState } from "react";
import "../../index.css";

const Home = () => {
  const [city, setCity] = useState("");

  // const KEY = dotenv.WEATHER_API_KEY;
  // const BASE_URL = dotenv.WEATHER_API_URL;
  //"http://api.weatherapi.com/v1/current.json?key=" + KEY + "&q=";

  const onChange = (event) => {
    setCity(event.target.value);
  };

  async function getData() {
    const test = import.meta.env.VITE_WEATHER_API_URL.concat(
      import.meta.env.VITE_WEATHER_API_KEY,
      "&q=",
      city
    );
    try {
      const response = await fetch(test);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <header>
        <div>
          <p>WeatherApp.com</p>
        </div>
        <div>
          <input
            type="text"
            name="cityInput"
            id="cityInput"
            placeholder="What city do you want?"
            value={city}
            onChange={onChange}
          />
          <button type="button" onClick={getData}>
            Search
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
