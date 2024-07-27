import { Link } from "react-router-dom";

const styles = {
  footer: {
    padding: '.5em',
    textAlign: 'center'
  },
  link: {
    color: 'black',
  }
}

const Footer = () => (
  <footer style={styles.footer}>
    <small>&copy; <Link href="https://courson.dev" style={styles.link}>James Courson</Link> 2024</small>
  </footer>
);

export default Footer;
