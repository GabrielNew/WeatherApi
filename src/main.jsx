import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Footer from "../src/components/Footer";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home></Home>
    <Footer></Footer>
  </StrictMode>
);
