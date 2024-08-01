import { Link } from 'react-router-dom';
import './directory.css';
import guides from '../../data/guides.json';
import resources from '../../data/resources.json';


const GuideListing = ({ name, abbr }) => {
  const resourceCount = resources.filter(resource => resource.guide === abbr).length;

  return (
    <li>
      <Link to={`/g/${abbr}`}>{name}</Link>
      <small>{resourceCount} resources</small>
    </li>
  );
}

const Directory = () => {
  const totalResources = resources.length;

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
