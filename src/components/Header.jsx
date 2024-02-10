import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const headerStyles = {
  display: 'flex',
  flexFlow: 'row no-wrap',
  justifyContent: 'center',
  alignItems: 'baseline'
}

const logoStyles = {
  maxWidth: '45vw'
}

const Header = () => (
  <header style={headerStyles}>
    <Link to="/">
      <img src={Logo} alt="James' Guide" style={logoStyles} />
    </Link>
  </header>
);

export default Header;
