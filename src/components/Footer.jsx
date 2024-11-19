import { Link } from "react-router-dom";

const footerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5em',
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  textAlign: 'center',
  color: 'ivory',
  backgroundColor: 'rgba(0, 0, 0, .1)',
  padding: '.5em',
}

const Footer = () => (
  <footer style={footerStyles}>
    <small>&copy; James Courson 2024 &#187; <Link to="https://courson.dev" target="_blank">courson.dev</Link></small>
    <small>&#9822;</small>
  </footer>
);

export default Footer;
