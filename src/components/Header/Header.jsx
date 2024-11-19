import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import LiveClock from '../../components/LiveClock';

import './header.css';


const Header = () => (
  <header>
    <section id="highlighted">
      <Link to="/">
        <img src={Logo} alt="James' Guide" />
      </Link>
      
      <LiveClock />
    </section>

    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/d/">Directory</NavLink>
      <NavLink to="/j/">Journal</NavLink>
    </nav>
  </header>
);

export default Header;
