import { Link } from "react-router-dom";

const footerStyles = {
  padding: '.5em',
  textAlign: 'center',
  color: 'ivory',
  backgroundColor: 'rgba(0, 0, 0, .1)'
}

const Footer = () => (
  <footer style={footerStyles}>
    <small>&copy; James Courson 2024</small>
  </footer>
);

export default Footer;
