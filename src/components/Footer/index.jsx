import "./styles.css";

const Footer = () => {
  let year = new Date(Date.now()).getFullYear();

  return (
    <footer>
      <span>© This is a test application {year}</span>
    </footer>
  );
};

export default Footer;
