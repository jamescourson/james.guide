import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useEffect, useMemo, useState } from 'react';

const headerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const logoStyles = {
  maxHeight: '3em'
}

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    window.setTimeout(() => setCurrentTime(new Date()), 1000);
  });

  return (
    <header style={headerStyles}>
      <Link to="/">
        <img src={Logo} alt="James' Guide" style={logoStyles} />
      </Link>
      <span id="clock">{currentTime.toLocaleTimeString()}</span>
    </header>
  );
}

export default Header;
