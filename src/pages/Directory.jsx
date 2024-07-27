import { Link } from 'react-router-dom';

const Directory = () => (
  <ul>
    <li><Link to="/g/mu">Music</Link></li>
    <li><Link to="/g/sd">Software Development</Link></li>
    <li><Link to="/g/wd">Web Development</Link></li>
    <li><Link to="/g/ww">Woodworking</Link></li>
  </ul>
);

export default Directory;
