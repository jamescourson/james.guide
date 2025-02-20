import { Link } from "react-router-dom";

import './footer.css';


const Footer = () => (
  <footer>
    <small>&copy; James Courson 2025 &#187; <Link to="https://courson.dev" target="_blank">courson.dev</Link></small>
    <small>&#9822;</small>
  </footer>
);

export default Footer;
