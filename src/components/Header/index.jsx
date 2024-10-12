import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

const Header = ({ onFetchData }) => {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const getData = async () => {
    let json = null;
    const url = import.meta.env.VITE_WEATHER_API_URL.concat(
      import.meta.env.VITE_WEATHER_API_KEY,
      "&q=",
      city
    );
    try {
      const response = await fetch(url);

      if (!response.ok) {
        onFetchData(json);
        throw new Error(`Response status: ${response.status}`);
      }

      json = await response.json();
      onFetchData(json);
    } catch (error) {
      console.error(error.message);
    }
  };

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
          <FaSearch id="SearchIcon" />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onFetchData: PropTypes.func.isRequired,
};

export default Header;
