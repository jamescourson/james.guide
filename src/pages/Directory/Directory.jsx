import { Link } from 'react-router-dom';
import './directory.css';
import guides from '../../data/guides.json';


const GuideListing = ({ name, abbr }) => {
  const resourceCount = 'X'; // fetch from api

  return (
    <li>
      <Link to={`/g/${abbr}`}>{name}</Link>
      <small>{resourceCount} resources</small>
    </li>
  );
}

const Directory = () => {
  const totalResources = 'X'; // fetch from api

  return (
    <>
      <h1>Directory</h1>
      <small>{guides.length} guides | {totalResources} resources</small>
      <ul>
        {guides.map(({ name, abbr }, i) => (<GuideListing name={name} abbr={abbr} key={i} />))}
      </ul>
    </>
  );
}

export default Directory;
