import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css';


const Header = () => (
  <header>
    <Link to="/">
      <img src={Logo} alt="James' Guide" />
    </Link>

    <nav>
      <NavLink to="/d/">Directory</NavLink>
      <NavLink to="/j/">Journal</NavLink>
    </nav>
  </header>
);

export default Header;
