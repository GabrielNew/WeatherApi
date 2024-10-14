import "./styles.css";

const Footer = () => {
  let year = new Date(Date.now()).getFullYear();

  return (
    <footer>
      <img
        id="LogoFooter"
        src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
        alt="Weather data by WeatherAPI.com"
        border="0"
      ></img>
      <span id="SpanFooter">
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>{" "}
        {year}
      </span>
    </footer>
  );
};

export default Footer;
