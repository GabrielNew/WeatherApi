import { useState } from "react";
import "./styles.css";

const Home = () => {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value);
  };

  async function getData() {
    const url = import.meta.env.VITE_WEATHER_API_URL.concat(
      import.meta.env.VITE_WEATHER_API_KEY,
      "&q=",
      city
    );
    try {
      const response = await fetch(url);

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
    <header>
      <div id="Title">
        <h3>WeatherApp.com</h3>
      </div>
      <div id="UserInput">
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
  );
};

export default Home;
