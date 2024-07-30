import { Link } from 'react-router-dom';
import './directory.css';


const Directory = () => (
  <ul>
    <li><Link to="/g/ch">Chess</Link></li>
    <li><Link to="/g/mu">Music</Link></li>
    <li><Link to="/g/sd">Software Development</Link></li>
    <li><Link to="/g/wd">Web Development</Link></li>
    <li><Link to="/g/ww">Woodworking</Link></li>
  </ul>
);

export default Directory;
