import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

const Header = ({ onFetchData }) => {
  const [city, setCity] = useState("");
  const [inputAutocomplete, setInputAutocomplete] = useState([]);

  const autocompleteRef = useRef();

  const onChange = (event) => {
    setCity(event.target.value);
    if (event.target.value.length > 2) {
      debounceFetchSuggestions();
    } else {
      setInputAutocomplete([]);
    }
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

  const autocomplete = async () => {
    const url = import.meta.env.VITE_WEATHER_SEARCH_API_URL.concat(
      import.meta.env.VITE_WEATHER_API_KEY,
      "&q=",
      city
    );

    try {
      const respose = await fetch(url);
      const resposeAutocomplete = await respose.json();
      setInputAutocomplete(resposeAutocomplete);
    } catch (error) {
      console.error(error.message);
    }
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceFetchSuggestions = debounce(autocomplete, 500);

  const handleSelect = (suggestion) => {
    setCity(suggestion);
    setInputAutocomplete([]);
    getData();
  };

  useEffect(() => {
    const handleOutsiteClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setInputAutocomplete([]);
      }
    };
    document.addEventListener("click", handleOutsiteClick);
    return () => {
      document.removeEventListener("click", handleOutsiteClick);
    };
  }, []);

  return (
    <header className="container">
      <div id="Title">
        <h3 id="HeaderTitle">WeatherApp.com</h3>
      </div>

      <div id="UserInput" className="autocomplete" ref={autocompleteRef}>
        <button type="button" onClick={getData}>
          <FaSearch id="SearchIcon" />
        </button>
        <input
          type="text"
          name="cityInput"
          id="cityInput"
          placeholder="What city do you want?"
          value={city}
          onChange={onChange}
        />
        <ul className="suggestions">
          {inputAutocomplete.map((city) => (
            <li key={city.id} onClick={() => handleSelect(city.name)}>
              {city.name} - {city.region} - {city.country}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  onFetchData: PropTypes.func.isRequired,
};

export default Header;
